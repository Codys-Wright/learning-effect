import { HttpApiBuilder } from "@effect/platform";
import { ResponsesRepo } from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { Effect, Layer } from "effect";

export const ResponsesRpcLive = HttpApiBuilder.group(DomainApi, "Responses", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* ResponsesRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("byId", ({ payload }) => repo.findById(payload.id))
      .handle("byQuiz", ({ payload }) => repo.findByQuizId(payload.quizId))
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              quizId: payload.quizId,
              answers: payload.answers,
              sessionMetadata: payload.sessionMetadata,
              interactionLogs: payload.interactionLogs,
              metadata: payload.metadata,
            });
          }
          return yield* repo.create({
            quizId: payload.quizId,
            answers: payload.answers,
            sessionMetadata: payload.sessionMetadata,
            interactionLogs: payload.interactionLogs,
            metadata: payload.metadata,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide(ResponsesRepo.Default));
