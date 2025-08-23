import { HttpApiBuilder } from "@effect/platform";
import { DomainApi } from "@org/domain/domain-api";
import { Effect, Layer } from "effect";
import { TestsRepo } from "./internal/tests-repo.js";

export const TestsRpcLive = HttpApiBuilder.group(DomainApi, "tests", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* TestsRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              title: payload.title,
              description: payload.description,
            });
          }
          return yield* repo.create({
            title: payload.title,
            description: payload.description,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide(TestsRepo.Default));
