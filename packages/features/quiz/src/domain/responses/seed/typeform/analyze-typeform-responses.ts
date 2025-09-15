import { PgLive } from "@/database.js";
import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { AnalysisService } from "@features/quiz/domain";
import { AnalysisRepo, QuizzesRepo, ResponsesRepo } from "@features/quiz/server";
import { Effect } from "effect";

// Analysis comparison result
type AnalysisComparison = {
  responseId: string;
  email?: string;
  legacyArtistType: string | null;
  newPrimaryArtistType: string | null;
  newAnalysisResults: Array<{
    endingName: string;
    score: number;
    percentage: number;
  }>;
  match: boolean;
  confidence: number;
};

// Function to run analysis on all Typeform responses and compare with legacy results
const analyzeTypeformResponses = Effect.gen(function* () {
  const responsesRepo = yield* ResponsesRepo;
  const analysisRepo = yield* AnalysisRepo;
  const analysisService = yield* AnalysisService;
  const quizzesRepo = yield* QuizzesRepo;

  yield* Effect.log("Starting Typeform response analysis...");

  // Get all Typeform responses
  const allResponses = yield* responsesRepo.findAll();
  const typeformResponses = allResponses.filter(
    (response) => response.metadata?.tags?.includes("typeform") === true,
  );

  yield* Effect.log(`Found ${typeformResponses.length} Typeform responses to analyze`);

  if (typeformResponses.length === 0) {
    yield* Effect.log("No Typeform responses found. Please run the seed script first.");
    return;
  }

  // Get the quiz and analysis engine
  const quiz = yield* quizzesRepo.findById({ id: typeformResponses[0]?.quizId ?? "" });
  if (quiz === undefined) {
    yield* Effect.logError("Quiz not found");
    return;
  }

  // Get the analysis engine (assuming there's one active engine)
  const allAnalysisEngines = yield* analysisRepo.findAll();
  const activeEngine = allAnalysisEngines.find((engine) => engine.isActive === true);

  if (activeEngine === undefined) {
    yield* Effect.logError("No active analysis engine found");
    return;
  }

  yield* Effect.log(`Using analysis engine: ${activeEngine.name} (${activeEngine.slug})`);

  const comparisons: Array<AnalysisComparison> = [];
  let successCount = 0;
  let errorCount = 0;

  // Analyze each response
  for (const [index, response] of typeformResponses.entries()) {
    try {
      // Extract legacy analysis from metadata
      const legacyAnalysis = response.metadata?.customFields?.legacyAnalysis as
        | {
            primaryArtistType: string | null;
            fullEndingText: string;
            analysisTimestamp: string;
          }
        | undefined;

      const legacyArtistType = legacyAnalysis?.primaryArtistType ?? null;
      const email = response.metadata?.customFields?.email as string | undefined;

      // Run new analysis
      const analysisResult = yield* analysisService.analyzeWithValidation(
        activeEngine,
        quiz,
        response,
      );

      // Save the analysis result
      const savedAnalysis = yield* analysisRepo.create({
        engineId: analysisResult.engineId,
        engineSlug: analysisResult.engineSlug,
        engineVersion: analysisResult.engineVersion,
        responseId: analysisResult.responseId,
        endingResults: analysisResult.endingResults,
        metadata: analysisResult.metadata,
        analyzedAt: analysisResult.analyzedAt,
      });

      // Get the primary result (highest scoring)
      const primaryResult = analysisResult.endingResults.reduce((prev, current) =>
        current.score > prev.score ? current : prev,
      );

      const newPrimaryArtistType = primaryResult.endingName;
      const confidence = primaryResult.percentage;

      // Check if results match
      const match = legacyArtistType === newPrimaryArtistType;

      const comparison: AnalysisComparison = {
        responseId: response.id,
        email,
        legacyArtistType,
        newPrimaryArtistType,
        newAnalysisResults: analysisResult.endingResults.map((result) => ({
          endingName: result.endingName,
          score: result.score,
          percentage: result.percentage,
        })),
        match,
        confidence,
      };

      comparisons.push(comparison);

      if (match) {
        successCount++;
      } else {
        yield* Effect.log(
          `Mismatch for ${email ?? response.id}: Legacy="${legacyArtistType}" vs New="${newPrimaryArtistType}"`,
        );
      }

      if (index % 50 === 0) {
        yield* Effect.log(`Analyzed ${index + 1}/${typeformResponses.length} responses...`);
      }
    } catch (error) {
      errorCount++;
      yield* Effect.logError(`Error analyzing response ${response.id}: ${error}`);
    }
  }

  // Generate summary statistics
  const totalAnalyzed = comparisons.length;
  const matches = comparisons.filter((c) => c.match).length;
  const matchRate = totalAnalyzed > 0 ? (matches / totalAnalyzed) * 100 : 0;

  // Artist type distribution comparison
  const legacyDistribution: Record<string, number> = {};
  const newDistribution: Record<string, number> = {};

  comparisons.forEach((comparison) => {
    if (comparison.legacyArtistType) {
      legacyDistribution[comparison.legacyArtistType] =
        (legacyDistribution[comparison.legacyArtistType] ?? 0) + 1;
    }
    if (comparison.newPrimaryArtistType) {
      newDistribution[comparison.newPrimaryArtistType] =
        (newDistribution[comparison.newPrimaryArtistType] ?? 0) + 1;
    }
  });

  yield* Effect.log("\n=== ANALYSIS COMPARISON RESULTS ===");
  yield* Effect.log(`Total responses analyzed: ${totalAnalyzed}`);
  yield* Effect.log(`Successful matches: ${matches}`);
  yield* Effect.log(`Match rate: ${matchRate.toFixed(2)}%`);
  yield* Effect.log(`Errors: ${errorCount}`);

  yield* Effect.log("\n=== LEGACY ARTIST TYPE DISTRIBUTION ===");
  Object.entries(legacyDistribution)
    .sort(([, a], [, b]) => b - a)
    .forEach(([type, count]) => {
      yield * Effect.log(`  ${type}: ${count} (${((count / totalAnalyzed) * 100).toFixed(1)}%)`);
    });

  yield* Effect.log("\n=== NEW ANALYSIS ARTIST TYPE DISTRIBUTION ===");
  Object.entries(newDistribution)
    .sort(([, a], [, b]) => b - a)
    .forEach(([type, count]) => {
      yield * Effect.log(`  ${type}: ${count} (${((count / totalAnalyzed) * 100).toFixed(1)}%)`);
    });

  // Show mismatches
  const mismatches = comparisons.filter((c) => !c.match);
  if (mismatches.length > 0) {
    yield* Effect.log(`\n=== MISMATCHES (${mismatches.length}) ===`);
    mismatches.slice(0, 10).forEach((mismatch) => {
      yield *
        Effect.log(
          `  ${mismatch.email ?? mismatch.responseId}: "${mismatch.legacyArtistType}" → "${mismatch.newPrimaryArtistType}" (${mismatch.confidence.toFixed(1)}%)`,
        );
    });
    if (mismatches.length > 10) {
      yield* Effect.log(`  ... and ${mismatches.length - 10} more mismatches`);
    }
  }

  return {
    totalAnalyzed,
    matches,
    matchRate,
    errors: errorCount,
    legacyDistribution,
    newDistribution,
    comparisons,
  };
});

// Run the analysis
NodeRuntime.runMain(
  analyzeTypeformResponses.pipe(
    Effect.provide([
      ResponsesRepo.Default,
      AnalysisRepo.Default,
      AnalysisService.Default,
      QuizzesRepo.Default,
      NodeContext.layer,
      PgLive,
    ]),
  ),
);
