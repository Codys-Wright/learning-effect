import { HttpApiBuilder } from "@effect/platform";
import { DomainApi } from "@org/domain/domain-api";
import { Effect, Layer } from "effect";
import { ExamplesRepo } from "./internal/example-repo.js";

export const ExamplesRpcLive = HttpApiBuilder.group(DomainApi, "examples", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* ExamplesRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              name: payload.name,
              description: payload.description,
              version: payload.version ?? "1.0.0",
              metadata: payload.metadata ?? null,
            });
          }
          return yield* repo.create({
            name: payload.name,
            description: payload.description,
            version: payload.version ?? "1.0.0",
            metadata: payload.metadata ?? null,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide(ExamplesRepo.Default));
