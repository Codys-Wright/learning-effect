import { HttpApiBuilder } from "@effect/platform";
import { ActiveQuizRepo } from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { Effect, Layer } from "effect";

export const ActiveQuizRpcLive = HttpApiBuilder.group(DomainApi, "ActiveQuizzes", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* ActiveQuizRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("bySlug", ({ payload }: { payload: { slug: string } }) =>
        repo.findBySlug(payload.slug),
      )
      .handle("upsert", ({ payload }) =>
        repo.upsert({
          id: payload.id,
          slug: payload.slug,
          quizId: payload.quizId,
          engineId: payload.engineId,
        }),
      )
      .handle("delete", ({ payload }: { payload: { slug: string } }) =>
        repo.deleteBySlug(payload.slug),
      );
  }),
).pipe(Layer.provide([ActiveQuizRepo.Default]));
