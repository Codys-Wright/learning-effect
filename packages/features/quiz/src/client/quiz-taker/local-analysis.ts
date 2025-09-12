import type { AnalysisEngine, Question, Quiz, QuizResponse } from "@features/quiz/domain";
import { AnalysisConfig, AnalysisService } from "@features/quiz/domain";
import { Config, DateTime, Effect } from "effect";
import { endingNameToArtistType } from "../components/artist-type/artist-data-utils.js";
import type { ArtistData } from "../components/artist-type/artist-type-graph-card.js";
import type { AnalysisConfigOverrides } from "./dev-panel.js";

// Create a reverse mapping from endingId to full artist names
const createEndingIdToFullNameMapping = (): Record<string, string> => {
  const mapping: Record<string, string> = {};

  // Create the reverse mapping from the existing endingNameToArtistType
  Object.keys(endingNameToArtistType).forEach((fullName) => {
    // Convert "The Visionary Artist" to "the-visionary-artist"
    const endingId = fullName.toLowerCase().replace(/\s+/g, "-");
    mapping[endingId] = fullName;
  });

  return mapping;
};

// Convert responses to the format expected by the analysis service
const convertResponsesToServiceFormat = (
  responses: Record<string, number>,
  _questions: Array<Question>,
): Array<{ questionId: string; value: number }> => {
  return Object.entries(responses).map(([questionId, value]) => ({
    questionId,
    value,
  }));
};

// Create a mock analysis engine for local analysis
const createMockAnalysisEngine = (): AnalysisEngine => {
  // This should match the actual analysis engine structure
  // For now, we'll create a simplified version
  return {
    id: "local-analysis-engine" as AnalysisEngine["id"],
    slug: "local-analysis" as AnalysisEngine["slug"],
    version: "1.0.0" as AnalysisEngine["version"],
    name: "Local Analysis Engine",
    description: "Local analysis for real-time preview",
    scoringConfig: {
      primaryWeight: 1.5,
      nonPrimaryWeight: 0.2,
      distanceGamma: 1.6,
      beta: 1.4,
      scoreMultiplier: 1.0,
    },
    endings: [
      {
        endingId: "the-visionary-artist",
        name: "The Visionary Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [9, 10], isPrimary: true },
          { questionId: "2", idealAnswers: [8, 9, 10], isPrimary: false },
        ],
      },
      {
        endingId: "the-consummate-artist",
        name: "The Consummate Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [7, 8, 9], isPrimary: true },
          { questionId: "2", idealAnswers: [6, 7, 8], isPrimary: false },
        ],
      },
      {
        endingId: "the-analyzer-artist",
        name: "The Analyzer Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [6, 7, 8], isPrimary: true },
          { questionId: "2", idealAnswers: [5, 6, 7], isPrimary: false },
        ],
      },
      {
        endingId: "the-tech-artist",
        name: "The Tech Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [7, 8, 9], isPrimary: true },
          { questionId: "2", idealAnswers: [6, 7, 8], isPrimary: false },
        ],
      },
      {
        endingId: "the-entertainer-artist",
        name: "The Entertainer Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [8, 9, 10], isPrimary: true },
          { questionId: "2", idealAnswers: [7, 8, 9], isPrimary: false },
        ],
      },
      {
        endingId: "the-maverick-artist",
        name: "The Maverick Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [9, 10], isPrimary: true },
          { questionId: "2", idealAnswers: [8, 9, 10], isPrimary: false },
        ],
      },
      {
        endingId: "the-dreamer-artist",
        name: "The Dreamer Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [7, 8, 9], isPrimary: true },
          { questionId: "2", idealAnswers: [6, 7, 8], isPrimary: false },
        ],
      },
      {
        endingId: "the-feeler-artist",
        name: "The Feeler Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [6, 7, 8], isPrimary: true },
          { questionId: "2", idealAnswers: [5, 6, 7], isPrimary: false },
        ],
      },
      {
        endingId: "the-tortured-artist",
        name: "The Tortured Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [8, 9, 10], isPrimary: true },
          { questionId: "2", idealAnswers: [7, 8, 9], isPrimary: false },
        ],
      },
      {
        endingId: "the-solo-artist",
        name: "The Solo Artist",
        questionRules: [
          { questionId: "1", idealAnswers: [5, 6, 7], isPrimary: true },
          { questionId: "2", idealAnswers: [4, 5, 6], isPrimary: false },
        ],
      },
    ],
    isActive: true,
    createdAt: Effect.runSync(DateTime.now),
    updatedAt: Effect.runSync(DateTime.now),
    deletedAt: null,
  };
};

// Transform local analysis results to ArtistData format
const transformLocalAnalysisToArtistData = (
  results: Array<{ endingId: string; points: number; percentage: number }>,
): Array<ArtistData> => {
  const endingIdToFullName = createEndingIdToFullNameMapping();

  return results.map((result) => {
    // Get the full name from the endingId
    const fullName = endingIdToFullName[result.endingId];

    // Now map to artist type using the existing mapping
    const artistType = fullName !== undefined ? endingNameToArtistType[fullName] : result.endingId;

    return {
      artistType: artistType ?? result.endingId,
      percentage: result.percentage,
      points: result.points,
      fullName: fullName ?? result.endingId,
      databaseId: result.endingId,
    };
  });
};

// Create a custom config from dev overrides
const createCustomConfig = (overrides: Partial<AnalysisConfigOverrides>): typeof AnalysisConfig => {
  // Only override the values that are provided, otherwise use the default config
  return Config.all({
    primaryPointValue:
      overrides.primaryPointValue !== undefined
        ? Config.succeed(overrides.primaryPointValue)
        : AnalysisConfig.pipe(Config.map((c) => c.primaryPointValue)),
    secondaryPointValue:
      overrides.secondaryPointValue !== undefined
        ? Config.succeed(overrides.secondaryPointValue)
        : AnalysisConfig.pipe(Config.map((c) => c.secondaryPointValue)),
    primaryPointWeight:
      overrides.primaryPointWeight !== undefined
        ? Config.succeed(overrides.primaryPointWeight)
        : AnalysisConfig.pipe(Config.map((c) => c.primaryPointWeight)),
    secondaryPointWeight:
      overrides.secondaryPointWeight !== undefined
        ? Config.succeed(overrides.secondaryPointWeight)
        : AnalysisConfig.pipe(Config.map((c) => c.secondaryPointWeight)),
    primaryDistanceFalloff:
      overrides.primaryDistanceFalloff !== undefined
        ? Config.succeed(overrides.primaryDistanceFalloff)
        : AnalysisConfig.pipe(Config.map((c) => c.primaryDistanceFalloff)),
    secondaryDistanceFalloff:
      overrides.secondaryDistanceFalloff !== undefined
        ? Config.succeed(overrides.secondaryDistanceFalloff)
        : AnalysisConfig.pipe(Config.map((c) => c.secondaryDistanceFalloff)),
    beta:
      overrides.beta !== undefined
        ? Config.succeed(overrides.beta)
        : AnalysisConfig.pipe(Config.map((c) => c.beta)),
    disableSecondaryPoints: Config.succeed(false),
    minPercentageThreshold: Config.succeed(0.0),
    enableQuestionBreakdown: Config.succeed(true),
    maxEndingResults: Config.succeed(10),
  });
};

// Main function to perform local analysis using the actual analysis service
export const performLocalAnalysis = (
  responses: Record<string, number>,
  quiz: Quiz,
  engine?: AnalysisEngine,
  configOverrides?: Partial<AnalysisConfigOverrides>,
): Array<ArtistData> => {
  // Convert responses to the format expected by the analysis service
  const serviceResponses = convertResponsesToServiceFormat(responses, [...(quiz.questions ?? [])]);

  // Create a mock response object
  const now = Effect.runSync(DateTime.now);
  const mockResponse: QuizResponse = {
    id: "local-response" as QuizResponse["id"],
    quizId: quiz.id,
    answers: serviceResponses,
    sessionMetadata: { startedAt: now },
    createdAt: now,
    updatedAt: now,
    deletedAt: null,
  };

  // Use provided engine or fall back to mock engine
  const analysisEngine = engine ?? createMockAnalysisEngine();

  // Create custom config if overrides are provided
  const customConfig =
    configOverrides !== undefined ? createCustomConfig(configOverrides) : undefined;

  // Use the analysis service to perform the analysis
  const analysisResult = Effect.runSync(
    Effect.provide(
      AnalysisService.pipe(
        Effect.flatMap((service) =>
          service.analyzeResponse(analysisEngine, quiz, mockResponse, customConfig),
        ),
      ),
      AnalysisService.Default,
    ),
  );

  // Transform the analysis result to ArtistData format
  const artistData = transformLocalAnalysisToArtistData(
    analysisResult.endingResults.map((result) => ({
      endingId: result.endingId,
      points: result.points,
      percentage: result.percentage,
    })),
  );

  return artistData;
};

// Hook to get real-time analysis data
export const useLocalAnalysis = (
  responses: Record<string, number>,
  quiz: Quiz | undefined,
  engine?: AnalysisEngine,
  configOverrides?: Partial<AnalysisConfigOverrides>,
): Array<ArtistData> => {
  if (quiz === undefined) return [];

  return performLocalAnalysis(responses, quiz, engine, configOverrides);
};

// Compare local analysis with server analysis
export const compareAnalyses = (
  localAnalysis: Array<ArtistData>,
  serverAnalysis: Array<ArtistData>,
): {
  isSimilar: boolean;
  differences: Array<{
    artistType: string;
    localPercentage: number;
    serverPercentage: number;
    difference: number;
  }>;
} => {
  const differences: Array<{
    artistType: string;
    localPercentage: number;
    serverPercentage: number;
    difference: number;
  }> = [];

  let isSimilar = true;
  const threshold = 10; // 10% difference threshold

  localAnalysis.forEach((local) => {
    const server = serverAnalysis.find((s) => s.artistType === local.artistType);
    if (server !== undefined) {
      const difference = Math.abs(local.percentage - server.percentage);
      if (difference > threshold) {
        isSimilar = false;
      }
      differences.push({
        artistType: local.artistType,
        localPercentage: local.percentage,
        serverPercentage: server.percentage,
        difference,
      });
    }
  });

  return { isSimilar, differences };
};
