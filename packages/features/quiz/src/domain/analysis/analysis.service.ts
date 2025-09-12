// Analysis Service
// Effect service for performing quiz analysis using analysis engines

import { Config, DateTime, Effect } from "effect";
import { type Question } from "../quiz/questions/question-rpc.js";
import { type Quiz } from "../quiz/quiz-rpc.js";
import { type QuestionResponse, type QuizResponse } from "../responses/response-rpc.js";
import {
  type AnalysisEngine,
  type AnalysisResultId,
  type EndingDefinition,
  type ScoringConfig,
  defaultScoringConfig,
} from "./analysis-engine-rpc.js";
import {
  type AnalysisResult,
  type EndingResult,
  AnalysisFailedError,
  AnalysisResultNotFoundError,
} from "./analysis-rpc.js";

// ============================================================================
// ANALYSIS CONFIGURATION
// ============================================================================

// Runtime configuration for analysis behavior using Effect Config
export const AnalysisConfig = Config.all({
  // Point values for ideal answers
  primaryPointValue: Config.number("ANALYSIS_PRIMARY_POINT_VALUE").pipe(Config.withDefault(10.0)),
  secondaryPointValue: Config.number("ANALYSIS_SECONDARY_POINT_VALUE").pipe(
    Config.withDefault(5.0),
  ),

  // Point weight multipliers
  primaryPointWeight: Config.number("ANALYSIS_PRIMARY_POINT_WEIGHT").pipe(Config.withDefault(1.0)),
  secondaryPointWeight: Config.number("ANALYSIS_SECONDARY_POINT_WEIGHT").pipe(
    Config.withDefault(1.0),
  ),

  // Distance falloff for each type
  primaryDistanceFalloff: Config.number("ANALYSIS_PRIMARY_DISTANCE_FALLOFF").pipe(
    Config.withDefault(1),
  ),
  secondaryDistanceFalloff: Config.number("ANALYSIS_SECONDARY_DISTANCE_FALLOFF").pipe(
    Config.withDefault(1),
  ),

  // Beta for visual separation
  beta: Config.number("ANALYSIS_BETA").pipe(Config.withDefault(1.0)),

  // Analysis behavior flags
  disableSecondaryPoints: Config.boolean("ANALYSIS_DISABLE_SECONDARY_POINTS").pipe(
    Config.withDefault(false),
  ),

  // Additional analysis parameters
  minPercentageThreshold: Config.number("ANALYSIS_MIN_PERCENTAGE_THRESHOLD").pipe(
    Config.withDefault(0.0),
  ),
  enableQuestionBreakdown: Config.boolean("ANALYSIS_ENABLE_QUESTION_BREAKDOWN").pipe(
    Config.withDefault(true),
  ),
  maxEndingResults: Config.number("ANALYSIS_MAX_ENDING_RESULTS").pipe(Config.withDefault(10)),
});

// Type is automatically inferred from AnalysisConfig - no need for manual type definition

// ============================================================================
// ANALYSIS SERVICE
// ============================================================================

export class AnalysisService extends Effect.Service<AnalysisService>()(
  "@features/quiz/AnalysisService",
  {
    accessors: true,
    effect: Effect.sync(() => {
      // Build question index map for efficient lookup
      const buildQuestionIndexMap = (questions: ReadonlyArray<Question>) =>
        Effect.sync(() =>
          questions.reduce(
            (map, question, index) => {
              // Map by question ID since seed script now maps content to actual IDs
              map[question.id] = String(index + 1);
              return map;
            },
            {} as Record<string, string>,
          ),
        );

      // Compute points for a specific ending given responses and rules
      const computeEndingPoints = (
        responses: ReadonlyArray<QuestionResponse>,
        questionIndexById: Record<string, string>,
        ending: EndingDefinition,
        _scoringConfig: ScoringConfig = defaultScoringConfig,
        analysisConfig?: typeof AnalysisConfig,
      ) =>
        Effect.gen(function* () {
          const runtimeConfig =
            analysisConfig !== undefined ? yield* analysisConfig : yield* AnalysisConfig;
          let totalPoints = 0;
          const questionBreakdown: Array<{
            questionId: string;
            points: number;
            idealAnswers: Array<number>;
            userAnswer: number;
            distance: number;
            weight: number;
          }> = [];

          for (const response of responses) {
            // Only process numeric responses
            if (typeof response.value !== "number") continue;

            const indexKey = questionIndexById[response.questionId];
            if (indexKey === undefined) continue;

            const rule = ending.questionRules.find((r) => r.questionId === response.questionId);
            if (rule === undefined) {
              continue;
            }

            // Skip secondary points if disabled
            if (runtimeConfig.disableSecondaryPoints && !rule.isPrimary) {
              continue;
            }

            // Find the nearest ideal answer
            const nearest = rule.idealAnswers.reduce((best, ideal) => {
              const distance = Math.abs(ideal - (response.value as number));
              return distance < best ? distance : best;
            }, Number.POSITIVE_INFINITY);

            // Get point value and weight based on question type
            const pointValue = rule.isPrimary
              ? runtimeConfig.primaryPointValue
              : runtimeConfig.secondaryPointValue;
            const pointWeight = rule.isPrimary
              ? runtimeConfig.primaryPointWeight
              : runtimeConfig.secondaryPointWeight;
            const distanceFalloff = rule.isPrimary
              ? runtimeConfig.primaryDistanceFalloff
              : runtimeConfig.secondaryDistanceFalloff;

            // Calculate distance weighting
            const distanceWeight = Math.max(
              0,
              Math.min(1, 1 - Math.pow(nearest / 10, distanceFalloff)),
            );

            // Calculate final points: pointValue * pointWeight * distanceWeight * customWeight
            const customWeight = rule.weightMultiplier ?? 1.0;
            const points = pointValue * pointWeight * distanceWeight * customWeight;
            totalPoints += points;

            if (runtimeConfig.enableQuestionBreakdown) {
              questionBreakdown.push({
                questionId: response.questionId,
                points,
                idealAnswers: [...rule.idealAnswers],
                userAnswer: response.value,
                distance: nearest,
                weight: pointWeight * customWeight,
              });
            }
          }

          return { questionBreakdown, totalPoints };
        });

      // Compute scores for all endings in an engine
      const computeAllEndingScores = (
        responses: ReadonlyArray<QuestionResponse>,
        questionIndexById: Record<string, string>,
        engine: AnalysisEngine,
        analysisConfig?: typeof AnalysisConfig,
      ) =>
        Effect.gen(function* () {
          const runtimeConfig =
            analysisConfig !== undefined ? yield* analysisConfig : yield* AnalysisConfig;
          const rawResults: Array<{
            ending: EndingDefinition;
            points: number;
            questionBreakdown: Array<{
              questionId: string;
              points: number;
              idealAnswers: Array<number>;
              userAnswer: number;
              distance: number;
              weight: number;
            }>;
          }> = [];

          // Calculate raw points for each ending
          for (const ending of engine.endings) {
            const { questionBreakdown, totalPoints } = yield* computeEndingPoints(
              responses,
              questionIndexById,
              ending,
              engine.scoringConfig,
              analysisConfig,
            );

            rawResults.push({
              ending,
              points: totalPoints,
              questionBreakdown,
            });
          }

          // Apply nonlinear amplification to sharpen winners (for visual purposes only)
          const beta = runtimeConfig.beta;
          const scaled = rawResults.map((r) => Math.pow(r.points, beta));
          const scaledSum = scaled.reduce((sum, value) => sum + value, 0);

          // Normalize to percentages
          const endingResults: Array<EndingResult> = rawResults.map((result, index) => {
            const scaledValue = scaled[index];
            const percentage =
              scaledSum > 0 && scaledValue !== undefined
                ? Number(((scaledValue / scaledSum) * 100).toFixed(1))
                : 0;

            // Find the winner (highest percentage)
            const maxPercentage = Math.max(
              ...rawResults.map((_, i) => {
                const scaledVal = scaled[i];
                return scaledSum > 0 && scaledVal !== undefined
                  ? Number(((scaledVal / scaledSum) * 100).toFixed(1))
                  : 0;
              }),
            );

            return {
              endingId: result.ending.endingId,
              points: result.points,
              percentage,
              isWinner:
                percentage === maxPercentage && percentage > runtimeConfig.minPercentageThreshold,
              questionBreakdown: result.questionBreakdown,
            };
          });

          // Filter by minimum percentage threshold and limit results
          const filteredResults = endingResults
            .filter((result) => result.percentage >= runtimeConfig.minPercentageThreshold)
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, runtimeConfig.maxEndingResults);

          return filteredResults;
        });

      // Analyze a complete quiz response using an analysis engine
      const analyzeResponse = (
        engine: AnalysisEngine,
        quiz: Quiz,
        response: QuizResponse,
        analysisConfig?: typeof AnalysisConfig,
      ) =>
        Effect.gen(function* () {
          // Extract responses and questions
          const responses = response.answers ?? [];
          const questions = quiz.questions ?? [];

          // Build question index map
          const questionIndexById = yield* buildQuestionIndexMap(questions);

          // Compute all ending scores
          const endingResults = yield* computeAllEndingScores(
            responses,
            questionIndexById,
            engine,
            analysisConfig,
          );

          // Get current time
          const now = yield* DateTime.now;

          // Create analysis result (without database-managed fields)
          const analysisResult = {
            engineId: engine.id,
            engineSlug: engine.slug,
            engineVersion: engine.version,
            responseId: response.id,
            endingResults,
            metadata: {
              totalQuestions: questions.length,
              answeredQuestions: responses.length,
              analysisTimestamp: now.toString(),
            },
            analyzedAt: now,
          };

          return analysisResult;
        });

      // Validate analysis inputs
      const validateAnalysisInputs = (engine: AnalysisEngine, quiz: Quiz, response: QuizResponse) =>
        Effect.gen(function* () {
          const responses = response.answers ?? [];

          if (responses.length === 0) {
            return yield* Effect.fail(
              new AnalysisFailedError({
                responseId: response.id,
                engineId: engine.id,
                reason: "No responses provided for analysis",
              }),
            );
          }

          if (engine.endings.length === 0) {
            return yield* Effect.fail(
              new AnalysisFailedError({
                responseId: response.id,
                engineId: engine.id,
                reason: "Analysis engine has no endings defined",
              }),
            );
          }

          if (!engine.isActive) {
            return yield* Effect.fail(
              new AnalysisFailedError({
                responseId: response.id,
                engineId: engine.id,
                reason: "Analysis engine is not active",
              }),
            );
          }

          return { engine, quiz, response };
        });

      // Analyze with validation - convenience method that validates inputs then analyzes
      const analyzeWithValidation = (
        engine: AnalysisEngine,
        quiz: Quiz,
        response: QuizResponse,
        analysisConfig?: typeof AnalysisConfig,
      ) =>
        Effect.gen(function* () {
          yield* validateAnalysisInputs(engine, quiz, response);
          return yield* analyzeResponse(engine, quiz, response, analysisConfig);
        });

      // Get analysis summary for multiple responses
      const getAnalysisSummary = (
        analysisResults: ReadonlyArray<AnalysisResult>,
        _engineId: string,
      ) =>
        Effect.gen(function* () {
          if (analysisResults.length === 0) {
            return yield* Effect.fail(
              new AnalysisResultNotFoundError({ id: "summary" as AnalysisResultId }),
            );
          }

          const firstResult = analysisResults[0];
          if (firstResult === undefined) {
            return yield* Effect.fail(
              new AnalysisResultNotFoundError({ id: "summary" as AnalysisResultId }),
            );
          }

          const endingDistribution = new Map<
            string,
            {
              endingId: string;
              count: number;
              totalPoints: number;
              totalPercentage: number;
            }
          >();

          // Aggregate data across all results
          for (const result of analysisResults) {
            for (const endingResult of result.endingResults) {
              const existing = endingDistribution.get(endingResult.endingId);
              if (existing !== undefined) {
                existing.count += 1;
                existing.totalPoints += endingResult.points;
                existing.totalPercentage += endingResult.percentage;
              } else {
                endingDistribution.set(endingResult.endingId, {
                  endingId: endingResult.endingId,
                  count: 1,
                  totalPoints: endingResult.points,
                  totalPercentage: endingResult.percentage,
                });
              }
            }
          }

          // Convert to final format
          const distribution = Array.from(endingDistribution.values()).map((data) => ({
            endingId: data.endingId,
            count: data.count,
            percentage: Number(((data.count / analysisResults.length) * 100).toFixed(1)),
            averagePoints: Number((data.totalPoints / data.count).toFixed(2)),
            averagePercentage: Number((data.totalPercentage / data.count).toFixed(1)),
          }));

          const now = yield* DateTime.now;

          return {
            engineId: firstResult.engineId,
            engineSlug: firstResult.engineSlug,
            engineVersion: firstResult.engineVersion,
            totalResponses: analysisResults.length,
            endingDistribution: distribution,
            generatedAt: now,
          };
        });

      return {
        buildQuestionIndexMap,
        computeEndingPoints,
        computeAllEndingScores,
        analyzeResponse,
        validateAnalysisInputs,
        analyzeWithValidation,
        getAnalysisSummary,
      } as const;
    }),
  },
) {}
