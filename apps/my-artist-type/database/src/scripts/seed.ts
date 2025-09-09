import { PgLive } from "@/database.js";
import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { type UpsertAnalysisEnginePayload } from "@features/quiz/domain/analysis/analysis-engine-rpc";
import { getSeedAnalysisEnginePayload } from "@features/quiz/domain/analysis/seed/seed-analysis-engine";
import { getSeedPayload } from "@features/quiz/domain/quiz/seed/seed-quiz";
import { AnalysisEngineRepo, QuestionService, QuizzesRepo } from "@features/quiz/server";
import { Effect } from "effect";

NodeRuntime.runMain(
  Effect.gen(function* () {
    const quizRepo = yield* QuizzesRepo;
    const analysisEngineRepo = yield* AnalysisEngineRepo;
    const questionService = yield* QuestionService;
    const quizPayload = getSeedPayload();
    const analysisEnginePayload = (
      getSeedAnalysisEnginePayload as () => UpsertAnalysisEnginePayload
    )();

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

    yield* Effect.log("Seeding completed successfully!");

    return { quiz: seededQuiz, analysisEngine: seededAnalysisEngine };
  }).pipe(
    Effect.provide([
      QuizzesRepo.Default,
      AnalysisEngineRepo.Default,
      QuestionService.Default,
      NodeContext.layer,
      PgLive,
    ]),
  ),
);
