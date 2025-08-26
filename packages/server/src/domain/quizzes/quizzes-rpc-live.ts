import { HttpApiBuilder } from "@effect/platform";
import { DomainApi } from "@org/domain/domain-api";
import { Effect, Layer } from "effect";
import { QuizzesRepo } from "./internal/quizzes-repo.js";

export const QuizzesRpcLive = HttpApiBuilder.group(DomainApi, "Quizzes", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* QuizzesRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              title: payload.title,
              subtitle: payload.subtitle,
              description: payload.description,
              version: payload.version ?? "1.0.0",
              slug: payload.slug ?? `quiz-${Date.now()}`,
              questions: [payload.questions],
              metadata: payload.metadata ?? null,
            });
          }
          return yield* repo.create({
            title: payload.title,
            subtitle: payload.subtitle,
            description: payload.description,
            version: payload.version ?? "1.0.0",
            questions: payload.questions,
            metadata: payload.metadata ?? null,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide(QuizzesRepo.Default));
