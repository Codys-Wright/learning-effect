import { PgLive } from "@/database.js";
import { NodeContext } from "@effect/platform-node";
import { type QuizResponse, ResponseId } from "@features/quiz/domain";
import { getSeedAnalysisEnginePayload } from "@features/quiz/domain/analysis/seed/seed-analysis-engine";
import { getSeedPayload } from "@features/quiz/domain/quiz/seed/seed-quiz";
import { getTypeformResponseSeedData } from "@features/quiz/domain/responses/seed/typeform/seed-typeform-responses";
import {
  AnalysisEngineRepo,
  AnalysisRepo,
  QuestionService,
  QuizzesRepo,
  ResponsesRepo,
} from "@features/quiz/server";
import { ActiveQuizRepo } from "@features/quiz/server/services/active-quiz-repo";
import { DateTime, Effect, Schema } from "effect";

const seedEffect = Effect.gen(function* () {
  const quizRepo = yield* QuizzesRepo;
  const analysisEngineRepo = yield* AnalysisEngineRepo;
  const activeQuizRepo = yield* ActiveQuizRepo;
  const questionService = yield* QuestionService;
  const responsesRepo = yield* ResponsesRepo;
  const analysisRepo = yield* AnalysisRepo;
  const quizPayload = getSeedPayload();
  const analysisEnginePayload = getSeedAnalysisEnginePayload();
  const typeformResponseData = getTypeformResponseSeedData();

  yield* Effect.log("Starting database seeding...");

  // Check if quiz already exists first
  const existingQuizzes = yield* quizRepo.findAll();
  const existingQuiz = existingQuizzes.find(
    (q) => q.title === "My Artist Type Quiz" && q.version.semver === "1.0.0",
  );

  let seededQuiz;
  if (existingQuiz !== undefined) {
    yield* Effect.log(`Quiz already exists: ${existingQuiz.title} (ID: ${existingQuiz.id})`);
    seededQuiz = existingQuiz;
  } else {
    // Create questions first using the question service
    const questions =
      quizPayload.questions !== undefined
        ? yield* questionService.createMany(quizPayload.questions)
        : [];

    // Ensure all required fields are present for quiz (matching CreateQuizInput schema)
    const createQuizPayload = {
      title: quizPayload.title,
      subtitle: quizPayload.subtitle ?? "Discover your unique creative personality",
      description:
        quizPayload.description ??
        "Take this comprehensive quiz to understand your artist archetype and creative approach.",
      version: quizPayload.version,
      questions,
      metadata: quizPayload.metadata ?? null,
      isPublished: true as const, // Publish the seed quiz version so it's available
      isTemp: false as const, // Seed data is permanent
    };

    seededQuiz = yield* quizRepo.create(createQuizPayload);
    yield* Effect.log(`Created quiz: ${seededQuiz.title} (ID: ${seededQuiz.id})`);
  }

  // Map analysis engine question rules to use actual question IDs from the created quiz
  // The seed data uses question IDs 1, 2, 3, etc., which correspond to the order field in quiz questions
  const questionIdMap = new Map<string, string>();
  seededQuiz.questions?.forEach((question) => {
    // Map by order number to the actual question ID
    questionIdMap.set(question.order.toString(), question.id);
  });

  // Create content-based mapping for Typeform responses
  // Map from question content to question UUID for Typeform response matching
  const contentToQuestionIdMap = new Map<string, string>();
  seededQuiz.questions?.forEach((question) => {
    const contentKey = question.title.toLowerCase().trim();
    contentToQuestionIdMap.set(contentKey, question.id);
  });

  // Function to convert Typeform response question IDs to quiz question UUIDs
  const convertTypeformResponseQuestionIds = (response: any) => {
    if (!response.answers) return response;

    const convertedAnswers = response.answers
      .map((answer: any) => {
        // If questionContent exists, use content-based matching
        if (answer.questionContent) {
          const normalizedContent = answer.questionContent.toLowerCase().trim();

          // Try exact match first
          let quizQuestionId = contentToQuestionIdMap.get(normalizedContent);

          // If no exact match, try partial matching
          if (!quizQuestionId) {
            for (const [contentKey, questionId] of contentToQuestionIdMap.entries()) {
              if (
                contentKey.includes(normalizedContent) ||
                normalizedContent.includes(contentKey)
              ) {
                quizQuestionId = questionId;
                break;
              }
            }
          }

          // Manual mappings for common variations
          if (!quizQuestionId) {
            const manualMappings: Record<string, string> = {
              "i lose myself in my work and find it natural to enter a flow state.":
                "i lose myself in my work and lose track of time.",
              "i lose myself in my work and find it natural to enter a flow state":
                "i lose myself in my work and lose track of time",
            };

            const manualMatch = manualMappings[normalizedContent];
            if (manualMatch) {
              quizQuestionId = contentToQuestionIdMap.get(manualMatch);
            }
          }

          if (quizQuestionId) {
            return {
              ...answer,
              questionId: quizQuestionId,
            };
          }
        }

        return answer;
      })
      .filter((answer: any) => {
        // Keep answers that either already have correct UUIDs or were successfully matched
        const existingQuizQuestion = seededQuiz.questions?.find((q) => q.id === answer.questionId);
        if (existingQuizQuestion) {
          return true; // Already has correct UUID
        }

        // Check if it was matched by content
        if (answer.questionContent) {
          const normalizedContent = answer.questionContent.toLowerCase().trim();
          return Array.from(contentToQuestionIdMap.keys()).some(
            (key) => key.includes(normalizedContent) || normalizedContent.includes(key),
          );
        }
        return false;
      });

    return {
      ...response,
      answers: convertedAnswers,
    };
  };

  // Update analysis engine endings to use actual question IDs
  // First, create a mapping from question content to UUID for engine rules
  const contentToQuestionIdForEngine = new Map<string, string>();
  seededQuiz.questions?.forEach((question) => {
    const contentKey = question.title.toLowerCase().trim();
    contentToQuestionIdForEngine.set(contentKey, question.id);
  });

  // Function to convert analysis engine question rules to use actual question UUIDs
  const convertEngineQuestionRules = (questionRules: Array<any>) => {
    return questionRules
      .map((rule) => {
        // Try to find the question by content matching
        let actualQuestionId = questionIdMap.get(rule.questionId); // Try numeric mapping first

        if (!actualQuestionId) {
          // If numeric mapping fails, try content-based matching
          // The engine data might have question content that we can match
          for (const [, questionId] of contentToQuestionIdForEngine.entries()) {
            // Try to match by question order or content similarity
            const ruleQuestionId = parseInt(rule.questionId);
            const questionOrder =
              Array.from(seededQuiz.questions || []).findIndex((q) => q.id === questionId) + 1;

            if (ruleQuestionId === questionOrder) {
              actualQuestionId = questionId;
              break;
            }
          }
        }

        const convertedRule = {
          ...rule,
          questionId: actualQuestionId ?? rule.questionId, // Use actual question ID if found, fallback to original
        };

        // Track conversion for summary logging
        if (actualQuestionId && actualQuestionId !== rule.questionId) {
          // Conversion successful - no need to log each one
        }

        return convertedRule;
      })
      .filter((rule) => {
        // Only keep rules that have valid question IDs
        const isValid = seededQuiz.questions?.some((q) => q.id === rule.questionId);
        if (!isValid) {
          // Invalid rule filtered out - no need to log each one
        }
        return isValid;
      });
  };

  const updatedEndings = analysisEnginePayload.endings.map((ending) => ({
    ...ending,
    questionRules: convertEngineQuestionRules(ending.questionRules),
  }));

  // Log conversion statistics for engine rules
  const totalEngineRules = analysisEnginePayload.endings.reduce(
    (sum, ending) => sum + ending.questionRules.length,
    0,
  );
  const convertedEngineRules = updatedEndings.reduce(
    (sum, ending) => sum + ending.questionRules.length,
    0,
  );
  yield* Effect.log(
    `Analysis engine rule conversion: ${convertedEngineRules}/${totalEngineRules} rules successfully mapped to quiz question UUIDs`,
  );

  // Check if analysis engine already exists for this quiz version
  const existingEngines = yield* analysisEngineRepo.findAll();
  const existingEngine = existingEngines.find(
    (e) => e.quizId === seededQuiz.id && e.version === seededQuiz.version,
  );

  let seededAnalysisEngine;
  if (existingEngine !== undefined) {
    yield* Effect.log(
      `Analysis engine already exists: ${existingEngine.name} (ID: ${existingEngine.id})`,
    );
    seededAnalysisEngine = existingEngine;
  } else {
    // Create the analysis engine with simple slug (no version in slug)
    const createAnalysisEnginePayload = {
      name: analysisEnginePayload.name, // Keep original name simple
      description: analysisEnginePayload.description,
      version: seededQuiz.version, // Match the quiz version exactly
      slug:
        analysisEnginePayload.slug.length > 0 ? analysisEnginePayload.slug : "artist-type-analysis", // Use simple base slug
      scoringConfig: analysisEnginePayload.scoringConfig,
      endings: updatedEndings,
      metadata: {
        ...analysisEnginePayload.metadata,
        linkedQuizVersion: seededQuiz.version,
        linkedQuizId: seededQuiz.id,
      },
      isActive: true, // Make the seed engine active
      isPublished: true, // Publish the seed engine version so it's available
      isTemp: false, // Seed data is permanent
      quizId: seededQuiz.id, // Link the engine to the quiz
    };
    seededAnalysisEngine = yield* analysisEngineRepo.create(createAnalysisEnginePayload);
    yield* Effect.log(
      `Created analysis engine: ${seededAnalysisEngine.name} (ID: ${seededAnalysisEngine.id})`,
    );
  }

  // Create or update the ActiveQuiz entry to link this quiz+engine to a clean public slug
  const publicSlug = "my-artist-type"; // Clean public-facing slug

  yield* activeQuizRepo.findBySlug(publicSlug).pipe(
    Effect.flatMap((existingActiveQuiz) =>
      Effect.gen(function* () {
        // Update existing active quiz to point to the current quiz+engine versions
        yield* activeQuizRepo.update({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          id: existingActiveQuiz.id,
          slug: publicSlug,
          quizId: seededQuiz.id,
          engineId: seededAnalysisEngine.id,
        });

        yield* Effect.log(
          `Updated active quiz "${publicSlug}" to point to Quiz v${seededQuiz.version} + Engine v${seededAnalysisEngine.version}`,
        );
      }),
    ),
    Effect.catchTag("ActiveQuizNotFoundError", () =>
      Effect.gen(function* () {
        // Active quiz doesn't exist, create it
        yield* activeQuizRepo.create({
          slug: publicSlug,
          quizId: seededQuiz.id,
          engineId: seededAnalysisEngine.id,
        });

        yield* Effect.log(
          `Created active quiz "${publicSlug}" linking Quiz v${seededQuiz.version} + Engine v${seededAnalysisEngine.version}`,
        );
      }),
    ),
  );

  // Seed Typeform responses
  yield* Effect.log(`Starting Typeform response seeding...`);
  yield* Effect.log(`Found ${typeformResponseData.length} Typeform responses to process`);

  let successCount = 0;
  let errorCount = 0;
  let analysisSuccessCount = 0;
  let analysisErrorCount = 0;
  let conversionSuccessCount = 0;
  let conversionTotalCount = 0;
  const typeformResponses: Array<QuizResponse> = [];

  for (const [index, responseData] of typeformResponseData.entries()) {
    try {
      // Convert Typeform response question IDs to quiz question UUIDs using content matching
      const convertedResponseData = convertTypeformResponseQuestionIds(responseData);

      // Track conversion success
      const originalAnswerCount = responseData.answers?.length || 0;
      const convertedAnswerCount = convertedResponseData.answers?.length || 0;
      conversionTotalCount += originalAnswerCount;
      conversionSuccessCount += convertedAnswerCount;

      // Map the quizId from the Typeform data to the actual quiz ID
      const createResponsePayload = {
        ...convertedResponseData,
        quizId: seededQuiz.id, // Use the actual quiz ID from the seeded quiz
        interactionLogs: [], // Fix type mismatch by providing empty array
      };

      // Use the Typeform submission date as createdAt
      const submitDateStr = responseData.sessionMetadata.customFields?.submitDate ?? "";
      const submitDate =
        typeof submitDateStr === "string" && submitDateStr !== ""
          ? new Date(submitDateStr)
          : new Date();

      const responseId = Schema.decodeSync(ResponseId)(crypto.randomUUID());

      const createdResponse = yield* responsesRepo.insert({
        id: responseId,
        quizId: createResponsePayload.quizId,
        answers: createResponsePayload.answers,
        sessionMetadata: createResponsePayload.sessionMetadata,
        interactionLogs: createResponsePayload.interactionLogs,
        metadata: createResponsePayload.metadata,
        createdAt: submitDate.toISOString(),
      });

      // Store the created response for analysis processing
      typeformResponses.push(createdResponse);
      successCount++;

      if (index % 100 === 0) {
        yield* Effect.log(
          `Processed ${index + 1}/${typeformResponseData.length} Typeform responses...`,
        );
      }
    } catch (error) {
      errorCount++;
      yield* Effect.logError(
        `Error processing Typeform response ${index + 1}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  yield* Effect.log(`Typeform response seeding completed!`);
  yield* Effect.log(`Successfully imported: ${successCount} responses`);
  yield* Effect.log(`Errors: ${errorCount} responses`);
  yield* Effect.log(
    `Question ID conversion: ${conversionSuccessCount}/${conversionTotalCount} answers successfully mapped to quiz question UUIDs`,
  );

  // Create analysis results directly from Typeform data (using legacy artist type assignments)
  if (successCount > 0) {
    yield* Effect.log(`\nCreating analysis results from Typeform data...`);

    // Process the responses that were just created in this run
    // typeformResponses now contains the actual response objects we just created

    for (const [index, response] of typeformResponses.entries()) {
      try {
        // Check if analysis result already exists for this response
        const existingAnalysisResults = yield* analysisRepo.findByResponseId(response.id);
        if (existingAnalysisResults.length > 0) {
          // Skip if analysis result already exists
          continue;
        }

        // Get the legacy artist type from the response metadata
        const legacyAnalysis = response.metadata?.customFields?.legacyAnalysis as
          | {
              primaryArtistType: string | null;
              fullEndingText: string;
              analysisTimestamp: string;
            }
          | undefined;

        const legacyArtistType = legacyAnalysis?.primaryArtistType ?? null;

        if (legacyArtistType !== null && legacyArtistType.length > 0) {
          // Map the Typeform artist type to our ending ID
          const artistType = legacyArtistType;
          const endingId = artistType.toLowerCase().replace(/\s+/g, "-");

          // Create a mock analysis result with the Typeform result
          const now = yield* DateTime.now;
          const mockAnalysisResult = {
            engineId: seededAnalysisEngine.id,
            engineVersion: seededAnalysisEngine.version,
            responseId: response.id,
            endingResults: [
              {
                endingId,
                points: 100, // Give it full points since it's the primary result
                percentage: 100,
                isWinner: true,
                questionBreakdown: undefined,
              },
            ],
            metadata: {
              source: "typeform-legacy",
              originalArtistType: artistType,
              analysisTimestamp: legacyAnalysis?.analysisTimestamp ?? "",
            },
          };

          // Save the analysis result (using create method which handles DateTime properly)
          yield* analysisRepo.create({
            ...mockAnalysisResult,
            analyzedAt: now,
          });

          analysisSuccessCount++;
        } else {
          yield* Effect.log(`No legacy analysis found for response ${response.id}`);
        }

        if (index % 50 === 0) {
          yield* Effect.log(
            `Processed ${index + 1}/${typeformResponses.length} Typeform analysis results...`,
          );
        }
      } catch (error) {
        analysisErrorCount++;
        yield* Effect.logError(
          `Error creating analysis result for response ${response.id}: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }

    yield* Effect.log(`Typeform analysis results created!`);
    yield* Effect.log(`Successfully created: ${analysisSuccessCount} analysis results`);
    yield* Effect.log(`Errors: ${analysisErrorCount} analysis results`);
  }

  yield* Effect.log("Seeding completed successfully!");
  yield* Effect.log(`Active quiz available at public slug: "${publicSlug}"`);

  return {
    quiz: seededQuiz,
    analysisEngine: seededAnalysisEngine,
    activeQuizSlug: publicSlug,
    typeformResponses: { successCount, errorCount, totalProcessed: typeformResponseData.length },
    analysisResults: {
      successCount: analysisSuccessCount,
      errorCount: analysisErrorCount,
      totalAnalyzed: typeformResponses.length,
    },
  };
}).pipe(
  Effect.provide([
    ActiveQuizRepo.Default,
    QuizzesRepo.Default,
    AnalysisEngineRepo.Default,
    QuestionService.Default,
    ResponsesRepo.Default,
    AnalysisRepo.Default,
    NodeContext.layer,
    PgLive,
  ]),
  Effect.orDie,
);

void Effect.runPromise(seedEffect);
