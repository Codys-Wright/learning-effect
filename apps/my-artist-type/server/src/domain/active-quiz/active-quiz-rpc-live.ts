import { HttpApiBuilder } from "@effect/platform";
import { ActiveQuizRepo } from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { Effect, Layer } from "effect";

export const ActiveQuizRpcLive = HttpApiBuilder.group(DomainApi, "ActiveQuizzes", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* ActiveQuizRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("bySlug", ({ payload }) => repo.findBySlug(payload.slug))
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              slug: payload.slug,
              quizId: payload.quizId,
              engineId: payload.engineId,
            });
          }
          return yield* repo.create({
            slug: payload.slug,
            quizId: payload.quizId,
            engineId: payload.engineId,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.deleteBySlug(payload.slug));
  }),
).pipe(Layer.provide([ActiveQuizRepo.Default]));
