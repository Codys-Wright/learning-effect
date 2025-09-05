import { PgLive } from "@/database.js";
import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { getSeedPayload } from "@features/quiz/domain";
import { QuestionService, QuizzesRepo } from "@features/quiz/server";
import { Effect } from "effect";

NodeRuntime.runMain(
  Effect.gen(function* () {
    const repo = yield* QuizzesRepo;
    const questionService = yield* QuestionService;
    const payload = getSeedPayload();

    yield* Effect.log("Starting database seeding...");

    // Create questions first using the question service
    const questions = payload.questions ? yield* questionService.createMany(payload.questions) : [];

    // Ensure all required fields are present
    const createPayload = {
      title: payload.title,
      subtitle: payload.subtitle ?? "Discover your unique creative personality",
      description:
        payload.description ??
        "Take this comprehensive quiz to understand your artist archetype and creative approach.",
      version: payload.version ?? "1.0.0",
      questions,
      metadata: payload.metadata ?? undefined,
    };

    const seededQuiz = yield* repo.create(createPayload);

    yield* Effect.log("Seeding completed successfully!");
    yield* Effect.log(`Created quiz: ${seededQuiz.title} (ID: ${seededQuiz.id})`);

    return seededQuiz;
  }).pipe(
    Effect.provide([QuizzesRepo.Default, QuestionService.Default, NodeContext.layer, PgLive]),
  ),
);
