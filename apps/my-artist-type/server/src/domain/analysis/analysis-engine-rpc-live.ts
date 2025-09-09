import { HttpApiBuilder } from "@effect/platform";
import { AnalysisEngineRepo } from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { Effect, Layer } from "effect";

export const AnalysisEngineRpcLive = HttpApiBuilder.group(DomainApi, "AnalysisEngine", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* AnalysisEngineRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("byId", ({ payload }) => repo.findById(payload.id))
      .handle("bySlug", ({ payload }) =>
        repo
          .findBySlug(payload.slug)
          .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (error) => Effect.fail(error))),
      )
      .handle("bySlugAndVersion", ({ payload }) =>
        repo
          .findBySlugAndVersion(payload.slug, payload.version)
          .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (error) => Effect.fail(error))),
      )
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          if (payload.id !== undefined) {
            return yield* repo
              .update({
                id: payload.id,
                version: payload.version ?? "1.0.0",
                slug: payload.slug ?? "",
                name: payload.name,
                description: payload.description ?? undefined,
                scoringConfig: payload.scoringConfig,
                endings: payload.endings,
                metadata: payload.metadata ?? undefined,
                isActive: payload.isActive ?? true,
              })
              .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (error) => Effect.fail(error)));
          }
          return yield* repo.create({
            version: payload.version ?? "1.0.0",
            slug: payload.slug ?? "",
            name: payload.name,
            description: payload.description ?? undefined,
            scoringConfig: payload.scoringConfig,
            endings: payload.endings,
            metadata: payload.metadata ?? undefined,
            isActive: payload.isActive ?? true,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide(AnalysisEngineRepo.Default));
