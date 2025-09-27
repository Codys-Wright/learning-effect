import { HttpApiBuilder } from "@effect/platform";
import type { AnalysisEngineId, UpsertAnalysisEnginePayload } from "@features/quiz/domain";
import { AnalysisEngineNotFoundError } from "@features/quiz/domain";
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
      .handle("upsert", ({ payload }: { payload: UpsertAnalysisEnginePayload }) =>
        Effect.gen(function* () {
          // Validate that quizId is provided (required for analysis engines)
          if (payload.quizId === undefined) {
            // Return a proper AnalysisEngineNotFoundError for missing quizId
            return yield* Effect.fail(
              new AnalysisEngineNotFoundError({ id: "unknown" as AnalysisEngineId }),
            );
          }

          if (payload.id !== undefined) {
            return yield* repo
              .update({
                id: payload.id,
                version: payload.version ?? "1.0.0",
                name: payload.name,
                description: payload.description ?? undefined,
                scoringConfig: payload.scoringConfig,
                endings: payload.endings,
                metadata: payload.metadata ?? undefined,
                isActive: payload.isActive ?? true,
                isPublished: payload.isPublished ?? false, // Pass isPublished
                isTemp: payload.isTemp ?? false, // Pass isTemp
                quizId: payload.quizId, // Pass quizId (validated above)
              })
              .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (error) => Effect.fail(error)));
          }
          return yield* repo.create({
            version: payload.version ?? "1.0.0",
            name: payload.name,
            description: payload.description ?? undefined,
            scoringConfig: payload.scoringConfig,
            endings: payload.endings,
            metadata: payload.metadata ?? undefined,
            isActive: payload.isActive ?? true,
            isPublished: payload.isPublished ?? false, // Pass isPublished
            isTemp: payload.isTemp ?? false, // Pass isTemp
            quizId: payload.quizId, // Pass quizId (validated above)
          });
        }),
      )
      .handle("delete", ({ payload }: { payload: { id: AnalysisEngineId } }) =>
        repo.del(payload.id),
      );
  }),
).pipe(Layer.provide(AnalysisEngineRepo.Default));
