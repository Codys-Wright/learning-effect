import { HttpApiBuilder } from "@effect/platform";
import { AnalysisFailedError, AnalysisService } from "@features/quiz/domain";
import {
  AnalysisEngineRepo,
  AnalysisRepo,
  QuizzesRepo,
  ResponsesRepo,
} from "@features/quiz/server";
import { DomainApi } from "@my-artist-type/domain";
import { DateTime, Effect, Layer } from "effect";

export const AnalysisRpcLive = HttpApiBuilder.group(DomainApi, "Analysis", (handlers) =>
  Effect.gen(function* () {
    const analysisRepo = yield* AnalysisRepo;
    const analysisEngineRepo = yield* AnalysisEngineRepo;
    const analysisService = yield* AnalysisService;
    const quizzesRepo = yield* QuizzesRepo;
    const responsesRepo = yield* ResponsesRepo;

    return handlers
      .handle("analyze", ({ payload }) =>
        Effect.gen(function* () {
          const { engineId, request } = payload;

          // Get the analysis engine
          const engine = yield* analysisEngineRepo.findById(engineId);

          // Get the response
          const response = yield* responsesRepo.findById(request.responseId);

          // Get the quiz
          const quiz = yield* quizzesRepo.findById(response.quizId);

          // Perform the analysis
          const analysisResult = yield* analysisService
            .analyzeResponse(engine, quiz, response)
            .pipe(
              Effect.catchAll((error) =>
                Effect.fail(
                  new AnalysisFailedError({
                    responseId: request.responseId,
                    engineId,
                    reason: String(error),
                  }),
                ),
              ),
            );

          // Save the analysis result
          return yield* analysisRepo.create(analysisResult);
        }),
      )
      .handle("batchAnalyze", ({ payload }) =>
        Effect.gen(function* () {
          const { engineId, request } = payload;

          // Get the analysis engine
          const engine = yield* analysisEngineRepo.findById(engineId);

          // Process each response ID
          const results = yield* Effect.forEach(request.responseIds, (responseId) =>
            Effect.gen(function* () {
              // Get the response
              const response = yield* responsesRepo.findById(responseId);

              // Get the quiz
              const quiz = yield* quizzesRepo.findById(response.quizId);

              // Perform the analysis
              const analysisResult = yield* analysisService
                .analyzeResponse(engine, quiz, response)
                .pipe(
                  Effect.catchAll((error) =>
                    Effect.fail(
                      new AnalysisFailedError({
                        responseId,
                        engineId,
                        reason: String(error),
                      }),
                    ),
                  ),
                );

              // Save the analysis result
              return yield* analysisRepo.create(analysisResult);
            }),
          );

          return results;
        }),
      )
      .handle("getAnalysis", ({ payload }) => analysisRepo.findByResponseId(payload.responseId))
      .handle("getAnalysisSummary", ({ payload }) =>
        Effect.gen(function* () {
          // Get all analysis results for this engine
          const results = yield* analysisRepo.findByEngineId(payload.engineId);

          // Get the engine details
          const engine = yield* analysisEngineRepo.findById(payload.engineId);

          // Calculate summary statistics
          const totalResponses = results.length;

          // Count ending results and calculate averages
          const endingStats = new Map<
            string,
            { count: number; totalPoints: number; totalPercentage: number }
          >();
          results.forEach((result) => {
            result.endingResults.forEach((ending) => {
              const current = endingStats.get(ending.endingId) ?? {
                count: 0,
                totalPoints: 0,
                totalPercentage: 0,
              };
              endingStats.set(ending.endingId, {
                count: current.count + 1,
                totalPoints: current.totalPoints + ending.points,
                totalPercentage: current.totalPercentage + ending.percentage,
              });
            });
          });

          // Create ending distribution
          const endingDistribution = Array.from(endingStats.entries()).map(([endingId, stats]) => ({
            endingId,
            count: stats.count,
            percentage: (stats.count / totalResponses) * 100,
            averagePoints: stats.totalPoints / stats.count,
            averagePercentage: stats.totalPercentage / stats.count,
          }));

          const now = yield* DateTime.now;

          return {
            engineId: payload.engineId,
            engineSlug: engine.slug,
            engineVersion: engine.version,
            totalResponses,
            endingDistribution,
            generatedAt: now,
          };
        }),
      )
      .handle("deleteAnalysis", ({ payload }) => analysisRepo.del(payload.id));
  }),
).pipe(
  Layer.provide([
    AnalysisRepo.Default,
    AnalysisEngineRepo.Default,
    AnalysisService.Default,
    QuizzesRepo.Default,
    ResponsesRepo.Default,
  ]),
);
