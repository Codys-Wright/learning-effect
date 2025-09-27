import { HttpApiBuilder } from "@effect/platform";
import type { AnalysisEngineId, UpsertAnalysisEnginePayload } from "@features/quiz/domain";
import { AnalysisEngineRepo } from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { Effect, Layer } from "effect";

export const AnalysisEngineRpcLive = HttpApiBuilder.group(DomainApi, "AnalysisEngine", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* AnalysisEngineRepo;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("listPublished", () => repo.findPublished())
      .handle("byId", ({ payload }: { payload: { id: AnalysisEngineId } }) =>
        repo.findById(payload.id),
      )
      .handle("bySlug", ({ payload }: { payload: { slug: string } }) =>
        repo
          .findBySlugPublished(payload.slug)
          .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (error) => Effect.fail(error))),
      )
      .handle("bySlugAll", ({ payload }: { payload: { slug: string } }) =>
        repo.findAllBySlug(payload.slug),
      )
      .handle("bySlugAndVersion", ({ payload }: { payload: { slug: string; version: string } }) =>
        repo
          .findBySlugAndVersion(payload.slug, payload.version)
          .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (error) => Effect.fail(error))),
      )
      .handle("upsert", ({ payload }: { payload: UpsertAnalysisEnginePayload }) =>
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
                isPublished: (payload.isPublished as boolean | undefined) ?? false, // Pass isPublished
                isTemp: (payload.isTemp as boolean | undefined) ?? false, // Pass isTemp
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
            isPublished: (payload.isPublished as boolean | undefined) ?? false, // Pass isPublished
            isTemp: (payload.isTemp as boolean | undefined) ?? false, // Pass isTemp
          });
        }),
      )
      .handle("delete", ({ payload }: { payload: { id: AnalysisEngineId } }) =>
        repo.del(payload.id),
      );
  }),
).pipe(Layer.provide(AnalysisEngineRepo.Default));
