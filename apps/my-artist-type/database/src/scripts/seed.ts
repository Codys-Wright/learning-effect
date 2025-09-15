import { PgLive } from "@/database.js";
import { NodeContext } from "@effect/platform-node";
import { type QuizResponse, ResponseId } from "@features/quiz/domain";
import { type UpsertAnalysisEnginePayload } from "@features/quiz/domain/analysis/analysis-engine-rpc";
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
import { DateTime, Effect, Schema } from "effect";

const seedEffect = Effect.gen(function* () {
  const quizRepo = yield* QuizzesRepo;
  const analysisEngineRepo = yield* AnalysisEngineRepo;
  const questionService = yield* QuestionService;
  const responsesRepo = yield* ResponsesRepo;
  const analysisRepo = yield* AnalysisRepo;
  const quizPayload = getSeedPayload();
  const analysisEnginePayload = (
    getSeedAnalysisEnginePayload as () => UpsertAnalysisEnginePayload
  )();
  const typeformResponseData = getTypeformResponseSeedData();

  yield* Effect.log("Starting database seeding...");

  // Create questions first using the question service
  const questions =
    quizPayload.questions !== undefined
      ? yield* questionService.createMany(quizPayload.questions)
      : [];

  // Ensure all required fields are present for quiz
  const createQuizPayload = {
    title: quizPayload.title,
    subtitle: quizPayload.subtitle ?? "Discover your unique creative personality",
    description:
      quizPayload.description ??
      "Take this comprehensive quiz to understand your artist archetype and creative approach.",
    version: quizPayload.version ?? "1.0.0",
    questions,
    metadata: quizPayload.metadata ?? undefined,
  };

  const seededQuiz = yield* quizRepo.create(createQuizPayload);
  yield* Effect.log(`Created quiz: ${seededQuiz.title} (ID: ${seededQuiz.id})`);

  // Map analysis engine question rules to use actual question IDs from the created quiz
  // The seed data uses question IDs 1, 2, 3, etc., which correspond to the order field in quiz questions
  const questionIdMap = new Map<string, string>();
  seededQuiz.questions?.forEach((question) => {
    // Map by order number to the actual question ID
    questionIdMap.set(question.order.toString(), question.id);
  });

  // Update analysis engine endings to use actual question IDs
  const updatedEndings = analysisEnginePayload.endings.map((ending) => ({
    ...ending,
    questionRules: ending.questionRules.map((rule) => ({
      ...rule,
      questionId: questionIdMap.get(rule.questionId) ?? rule.questionId, // Use actual question ID if found, fallback to original
    })),
  }));

  // Create the analysis engine
  const createAnalysisEnginePayload = {
    name: analysisEnginePayload.name,
    description: analysisEnginePayload.description ?? undefined,
    version: analysisEnginePayload.version ?? "1.0.0",
    slug: analysisEnginePayload.slug ?? "artist-type-quiz-v1",
    scoringConfig: analysisEnginePayload.scoringConfig,
    endings: updatedEndings,
    metadata: analysisEnginePayload.metadata ?? undefined,
    isActive: analysisEnginePayload.isActive ?? true,
  };
  const seededAnalysisEngine = yield* analysisEngineRepo.create(createAnalysisEnginePayload);
  yield* Effect.log(
    `Created analysis engine: ${seededAnalysisEngine.name} (ID: ${seededAnalysisEngine.id})`,
  );

  // Seed Typeform responses
  yield* Effect.log(`Starting Typeform response seeding...`);
  yield* Effect.log(`Found ${typeformResponseData.length} Typeform responses to process`);

  let successCount = 0;
  let errorCount = 0;
  let analysisSuccessCount = 0;
  let analysisErrorCount = 0;
  let typeformResponses: Array<QuizResponse> = [];

  for (const [index, responseData] of typeformResponseData.entries()) {
    try {
      // Map the quizId from the Typeform data to the actual quiz ID
      const createResponsePayload = {
        ...responseData,
        quizId: seededQuiz.id, // Use the actual quiz ID from the seeded quiz
        interactionLogs: [], // Fix type mismatch by providing empty array
      };

      // Use the Typeform submission date as createdAt
      const submitDateStr = responseData.sessionMetadata.customFields?.submitDate ?? "";
      const submitDate =
        typeof submitDateStr === "string" && submitDateStr !== ""
          ? new Date(submitDateStr)
          : new Date();

      yield* responsesRepo.insert({
        id: Schema.decodeSync(ResponseId)(crypto.randomUUID()),
        quizId: createResponsePayload.quizId,
        answers: createResponsePayload.answers,
        sessionMetadata: createResponsePayload.sessionMetadata,
        interactionLogs: createResponsePayload.interactionLogs,
        metadata: createResponsePayload.metadata,
        createdAt: submitDate.toISOString(),
      });
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

  // Create analysis results directly from Typeform data (no need to run our analysis engine)
  if (successCount > 0) {
    yield* Effect.log(`\nCreating analysis results from Typeform data...`);

    // Get all Typeform responses that were just created
    const allResponses = yield* responsesRepo.findAll();
    typeformResponses = allResponses.filter(
      (response) => response.metadata?.tags?.includes("typeform") === true,
    );

    for (const [index, response] of typeformResponses.entries()) {
      try {
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
            engineSlug: seededAnalysisEngine.slug,
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

  return {
    quiz: seededQuiz,
    analysisEngine: seededAnalysisEngine,
    typeformResponses: { successCount, errorCount, totalProcessed: typeformResponseData.length },
    analysisResults: {
      successCount: analysisSuccessCount,
      errorCount: analysisErrorCount,
      totalAnalyzed: typeformResponses.length,
    },
  };
}).pipe(
  Effect.provide([
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
