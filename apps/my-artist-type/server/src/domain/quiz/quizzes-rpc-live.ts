import { HttpApiBuilder } from "@effect/platform";
import { QuestionService, QuizzesRepo } from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { Effect, Layer } from "effect";

export const QuizzesRpcLive = HttpApiBuilder.group(DomainApi, "Quizzes", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* QuizzesRepo;
    const questionService = yield* QuestionService;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("listPublished", () => repo.findPublished())
      .handle("bySlug", ({ payload }) => repo.findBySlug(payload.slug))
      .handle("byId", ({ payload }) => repo.findById(payload.id))
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          // Transform questions using the question service
          const questions =
            payload.questions !== undefined
              ? yield* questionService.createMany(payload.questions)
              : undefined;

          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              title: payload.title,
              subtitle: payload.subtitle,
              description: payload.description,
              version: payload.version ?? "1.0.0",
              questions,
              metadata: payload.metadata,
              isPublished: payload.isPublished ?? false,
              isTemp: payload.isTemp ?? false,
            });
          }
          return yield* repo.create({
            title: payload.title,
            subtitle: payload.subtitle,
            description: payload.description,
            version: payload.version ?? "1.0.0",
            questions: questions ?? [],
            metadata: payload.metadata,
            isPublished: payload.isPublished ?? false,
            isTemp: payload.isTemp ?? false,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide([QuizzesRepo.Default, QuestionService.Default]));
