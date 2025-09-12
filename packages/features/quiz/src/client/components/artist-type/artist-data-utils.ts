import { Schema as S } from "effect";
import React from "react";

// =============================================================================
// SCHEMAS & TYPES
// =============================================================================

export class ArtistDataSchema extends S.Class<ArtistDataSchema>("ArtistDataSchema")({
  artistType: S.String,
  percentage: S.Number,
  points: S.Number,
  fullName: S.String,
  databaseId: S.String,
  // Optional field for beta-transformed values used for visual scaling
  betaTransformedPoints: S.optional(S.Number),
  // Original percentage before beta transformation (for tooltips)
  originalPercentage: S.optional(S.Number),
}) {}

export type ArtistData = S.Schema.Type<typeof ArtistDataSchema>;

// Artist type enum for type safety
export const ArtistType = S.Literal(
  "Visionary",
  "Consummate",
  "Analyzer",
  "Tech",
  "Entertainer",
  "Maverick",
  "Dreamer",
  "Feeler",
  "Tortured",
  "Solo",
);

export type ArtistType = S.Schema.Type<typeof ArtistType>;

// =============================================================================
// ARTIST COLORS CONSTANTS
// =============================================================================

// CSS variable-based colors (theme-aware)
export const artistColors = {
  Visionary: "var(--artist-visionary)",
  Consummate: "var(--artist-consummate)",
  Analyzer: "var(--artist-analyzer)",
  Tech: "var(--artist-tech)",
  Entertainer: "var(--artist-entertainer)",
  Maverick: "var(--artist-maverick)",
  Dreamer: "var(--artist-dreamer)",
  Feeler: "var(--artist-feeler)",
  Tortured: "var(--artist-tortured)",
  Solo: "var(--artist-solo)",
} as const;

// Light mode hex colors for calculations
export const artistColorsHex = {
  Visionary: "#7209b7",
  Consummate: "#06d6a0",
  Analyzer: "#4361ee",
  Tech: "#4cc9f0",
  Entertainer: "#fb8500",
  Maverick: "#f72585",
  Dreamer: "#7678ed",
  Feeler: "#f77f00",
  Tortured: "#560bad",
  Solo: "#6498a6",
} as const;

// Dark mode hex colors for calculations
export const artistColorsHexDark = {
  Visionary: "#a56be6",
  Consummate: "#35e2bf",
  Analyzer: "#7a92ff",
  Tech: "#71dbff",
  Entertainer: "#ff9f36",
  Maverick: "#ff64a6",
  Dreamer: "#9aa0ff",
  Feeler: "#ffa24a",
  Tortured: "#7c2cff",
  Solo: "#8fb5bd",
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get artist color using CSS variables (theme-aware)
 */
export const getArtistColor = (artistType: string): string => {
  const normalizedType = artistType as keyof typeof artistColors;
  return normalizedType in artistColors ? artistColors[normalizedType] : "var(--primary)";
};

/**
 * Get hex color for calculations, with dark mode support
 */
export const getArtistColorHex = (artistType: string, isDark = false): string => {
  const normalizedType = artistType as keyof typeof artistColorsHex;
  const colorMap = isDark ? artistColorsHexDark : artistColorsHex;
  return normalizedType in colorMap ? colorMap[normalizedType] : "#6366f1";
};

// =============================================================================
// ENDING NAME MAPPING
// =============================================================================

/**
 * Map quiz ending names to artist types
 */
export const endingNameToArtistType: Record<string, ArtistType> = {
  "The Visionary Artist": "Visionary",
  "The Consummate Artist": "Consummate",
  "The Analyzer Artist": "Analyzer",
  "The Tech Artist": "Tech",
  "The Entertainer Artist": "Entertainer",
  "The Maverick Artist": "Maverick",
  "The Dreamer Artist": "Dreamer",
  "The Feeler Artist": "Feeler",
  "The Tortured Artist": "Tortured",
  "The Solo Artist": "Solo",
};

/**
 * Get color by ending name using CSS variables
 */
export const getColorByEndingName = (endingName: string): string => {
  const artistType = endingNameToArtistType[endingName];
  return artistType !== undefined ? artistColors[artistType] : "var(--primary)";
};

/**
 * Get hex color by ending name for calculations
 */
export const getColorByEndingNameHex = (endingName: string, isDark = false): string => {
  const artistType = endingNameToArtistType[endingName];
  if (artistType !== undefined) {
    const colorMap = isDark ? artistColorsHexDark : artistColorsHex;
    return colorMap[artistType];
  }
  return "#6366f1";
};

// =============================================================================
// DEFAULT ARTIST DATA
// =============================================================================

const DEFAULT_ARTIST_DATA: ReadonlyArray<ArtistData> = [
  {
    artistType: "Visionary",
    percentage: 0,
    points: 0,
    fullName: "The Visionary Artist",
    databaseId: "the-visionary-artist",
  },
  {
    artistType: "Consummate",
    percentage: 0,
    points: 0,
    fullName: "The Consummate Artist",
    databaseId: "the-consummate-artist",
  },
  {
    artistType: "Analyzer",
    percentage: 0,
    points: 0,
    fullName: "The Analyzer Artist",
    databaseId: "the-analyzer-artist",
  },
  {
    artistType: "Tech",
    percentage: 0,
    points: 0,
    fullName: "The Tech Artist",
    databaseId: "the-tech-artist",
  },
  {
    artistType: "Entertainer",
    percentage: 0,
    points: 0,
    fullName: "The Entertainer Artist",
    databaseId: "the-entertainer-artist",
  },
  {
    artistType: "Maverick",
    percentage: 0,
    points: 0,
    fullName: "The Maverick Artist",
    databaseId: "the-maverick-artist",
  },
  {
    artistType: "Dreamer",
    percentage: 0,
    points: 0,
    fullName: "The Dreamer Artist",
    databaseId: "the-dreamer-artist",
  },
  {
    artistType: "Feeler",
    percentage: 0,
    points: 0,
    fullName: "The Feeler Artist",
    databaseId: "the-feeler-artist",
  },
  {
    artistType: "Tortured",
    percentage: 0,
    points: 0,
    fullName: "The Tortured Artist",
    databaseId: "the-tortured-artist",
  },
  {
    artistType: "Solo",
    percentage: 0,
    points: 0,
    fullName: "The Solo Artist",
    databaseId: "the-solo-artist",
  },
];

// =============================================================================
// DATA NORMALIZATION HOOK
// =============================================================================

export type UseNormalizedArtistDataOptions = {
  readonly beta?: number;
  readonly ensureComplete?: boolean;
  readonly normalizeFrom?: "points" | "percentage" | "auto";
  readonly preserveBetaEffect?: boolean;
};

/**
 * Custom hook for deep comparison of data arrays
 */
const useDeepMemoData = <T>(data: T): T => {
  const ref = React.useRef<T>(data);
  const stringifiedData = JSON.stringify(data);
  const stringifiedRef = React.useRef<string>(stringifiedData);

  if (stringifiedData !== stringifiedRef.current) {
    ref.current = data;
    stringifiedRef.current = stringifiedData;
  }

  return ref.current;
};

/**
 * Hook to normalize artist data with percentage calculations
 */
export const useNormalizedArtistData = (
  data?: ReadonlyArray<ArtistData>,
  {
    beta,
    ensureComplete = true,
    normalizeFrom = "auto",
    preserveBetaEffect = false,
  }: UseNormalizedArtistDataOptions = {},
): ReadonlyArray<ArtistData> => {
  // Deep memo the input data to prevent unnecessary recalculations
  const memoizedData = useDeepMemoData(data);

  return React.useMemo(() => {
    const base: ReadonlyArray<ArtistData> =
      Array.isArray(memoizedData) && memoizedData.length > 0 ? memoizedData : DEFAULT_ARTIST_DATA;

    const complete: ReadonlyArray<ArtistData> = ensureComplete
      ? DEFAULT_ARTIST_DATA.map(
          (fallback) => base.find((d) => d.databaseId === fallback.databaseId) ?? fallback,
        )
      : base;

    const totalPoints = complete.reduce((sum, d) => sum + d.points, 0);
    const totalPercent = complete.reduce((sum, d) => sum + d.percentage, 0);

    let scaled = complete;

    // Calculate original percentage before beta transformation
    const originalPercentage =
      totalPoints > 0
        ? complete.map((d) => ({
            ...d,
            originalPercentage: (d.points / totalPoints) * 100,
          }))
        : complete;

    // Apply beta transformation to points if beta is provided
    if (beta !== undefined && beta !== 1.0 && totalPoints > 0) {
      scaled = originalPercentage.map((d) => ({
        ...d,
        // Keep original points for tooltips, add beta-transformed points for visual scaling
        betaTransformedPoints: Math.pow(d.points, beta),
      }));
    } else {
      scaled = originalPercentage;
    }

    // Normalize from points or percentages based on the option
    if (normalizeFrom === "points" || (normalizeFrom === "auto" && totalPoints > 0)) {
      // Use beta-transformed points for percentage calculation if they exist, otherwise use original points
      const transformedTotalPoints = scaled.reduce(
        (sum, d) => sum + (d.betaTransformedPoints ?? d.points),
        0,
      );
      scaled = scaled.map((d) => ({
        ...d,
        percentage:
          transformedTotalPoints > 0
            ? ((d.betaTransformedPoints ?? d.points) / transformedTotalPoints) * 100
            : 0,
      }));
    } else {
      // Scale existing percentages to sum to 100 if needed
      scaled = scaled.map((d) => ({
        ...d,
        percentage: totalPercent > 0 ? (d.percentage / totalPercent) * 100 : 0,
      }));
    }

    // If preserving beta effect, don't re-normalize to 100%
    if (preserveBetaEffect) {
      return scaled.map((d) => ({
        ...d,
        percentage: Math.max(0, d.percentage), // Only clamp to 0, don't normalize
      }));
    }

    // Round and fix drift to ensure exact 100
    const rounded = scaled.map((d) => ({
      ...d,
      percentage: Math.round(d.percentage),
    }));

    let diff = 100 - rounded.reduce((s, d) => s + d.percentage, 0);

    // Distribute the rounding difference
    for (let i = 0; diff !== 0 && i < rounded.length; i++) {
      const item = rounded[i];
      if (item !== undefined) {
        item.percentage += diff > 0 ? 1 : -1;
        diff += diff > 0 ? -1 : 1;
      }
    }

    // Clamp values and return
    return rounded.map((d) => ({
      ...d,
      percentage: Math.max(0, Math.min(100, d.percentage)),
    }));
  }, [memoizedData, ensureComplete, normalizeFrom]);
};

// =============================================================================
// ARTIST ICON MAPPING SYSTEM
// =============================================================================

/**
 * Icon configuration for each artist type
 */
export type ArtistIconConfig = {
  readonly svgPath: string;
  readonly altText?: string;
  readonly fallbackColor?: string;
};

/**
 * Default icon mapping using local SVG assets
 * This can be easily swapped out globally by replacing this object
 */
export const DEFAULT_ARTIST_ICONS: Record<string, ArtistIconConfig> = {
  "the-visionary-artist": {
    svgPath: "/svgs/artist-type-logos/1_VISIONARY_LOGO.svg",
    altText: "Visionary Artist Icon",
    fallbackColor: "#7209b7",
  },
  "the-consummate-artist": {
    svgPath: "/svgs/artist-type-logos/2_CONSUMATE_LOGO.svg",
    altText: "Consummate Artist Icon",
    fallbackColor: "#06d6a0",
  },
  "the-analyzer-artist": {
    svgPath: "/svgs/artist-type-logos/3_ANALYZER_LOGO.svg",
    altText: "Analyzer Artist Icon",
    fallbackColor: "#4361ee",
  },
  "the-tech-artist": {
    svgPath: "/svgs/artist-type-logos/4_TECH_LOGO.svg",
    altText: "Tech Artist Icon",
    fallbackColor: "#4cc9f0",
  },
  "the-entertainer-artist": {
    svgPath: "/svgs/artist-type-logos/5_ENTERTAINER_LOGO.svg",
    altText: "Entertainer Artist Icon",
    fallbackColor: "#fb8500",
  },
  "the-maverick-artist": {
    svgPath: "/svgs/artist-type-logos/6_MAVERICK_LOGO.svg",
    altText: "Maverick Artist Icon",
    fallbackColor: "#f72585",
  },
  "the-dreamer-artist": {
    svgPath: "/svgs/artist-type-logos/7_DREAMER_LOGO.svg",
    altText: "Dreamer Artist Icon",
    fallbackColor: "#7678ed",
  },
  "the-feeler-artist": {
    svgPath: "/svgs/artist-type-logos/8_FEELER_LOGO.svg",
    altText: "Feeler Artist Icon",
    fallbackColor: "#f77f00",
  },
  "the-tortured-artist": {
    svgPath: "/svgs/artist-type-logos/9_TORTURED_LOGO.svg",
    altText: "Tortured Artist Icon",
    fallbackColor: "#560bad",
  },
  "the-solo-artist": {
    svgPath: "/svgs/artist-type-logos/10_SOLO_LOGO.svg",
    altText: "Solo Artist Icon",
    fallbackColor: "#6498a6",
  },
};

/**
 * Global icon configuration - can be replaced at runtime
 */
let CURRENT_ARTIST_ICONS = { ...DEFAULT_ARTIST_ICONS };

/**
 * Set global artist icon configuration
 * This allows swapping out all icons globally
 */
export const setArtistIcons = (icons: Record<string, ArtistIconConfig>): void => {
  CURRENT_ARTIST_ICONS = { ...icons };
};

/**
 * Reset to default icon configuration
 */
export const resetArtistIcons = (): void => {
  CURRENT_ARTIST_ICONS = { ...DEFAULT_ARTIST_ICONS };
};

/**
 * Get icon configuration for a specific artist type
 */
export const getArtistIcon = (databaseId: string): ArtistIconConfig | null => {
  return CURRENT_ARTIST_ICONS[databaseId] ?? null;
};

/**
 * Get icon path for a specific artist type
 */
export const getArtistIconPath = (databaseId: string): string | null => {
  const icon = getArtistIcon(databaseId);
  return icon?.svgPath ?? null;
};

/**
 * Get fallback color for a specific artist type
 */
export const getArtistIconFallbackColor = (databaseId: string): string | null => {
  const icon = getArtistIcon(databaseId);
  return icon?.fallbackColor ?? null;
};

/**
 * Get alt text for a specific artist type
 */
export const getArtistIconAltText = (databaseId: string): string => {
  const icon = getArtistIcon(databaseId);
  return icon?.altText ?? `${databaseId} icon`;
};

/**
 * Check if an icon exists for a specific artist type
 */
export const hasArtistIcon = (databaseId: string): boolean => {
  return databaseId in CURRENT_ARTIST_ICONS;
};

/**
 * Get all available artist icon configurations
 */
export const getAllArtistIcons = (): Record<string, ArtistIconConfig> => {
  return { ...CURRENT_ARTIST_ICONS };
};

/**
 * Create a custom icon mapping with URL transformation
 * Useful for switching between different icon sets or environments
 */
export const createIconMapping = (
  baseMapping: Record<string, ArtistIconConfig>,
  urlTransformer?: (path: string) => string,
): Record<string, ArtistIconConfig> => {
  if (urlTransformer === undefined) return { ...baseMapping };

  const transformed: Record<string, ArtistIconConfig> = {};
  for (const [key, config] of Object.entries(baseMapping)) {
    transformed[key] = {
      ...config,
      svgPath: urlTransformer(config.svgPath),
    };
  }
  return transformed;
};

/**
 * Create icon mapping from database artist types
 * Merges database-provided URLs with local fallbacks
 */
export const createIconMappingFromArtistTypes = (
  artistTypes: ReadonlyArray<{
    readonly typeId: string;
    readonly coinIcon?: string | null;
    readonly imageUrl?: string | null;
    readonly icon?: string | null;
  }>,
): Record<string, ArtistIconConfig> => {
  const mapping: Record<string, ArtistIconConfig> = {};

  for (const artistType of artistTypes) {
    // Prefer local icons first, then database URLs
    const localIcon = CURRENT_ARTIST_ICONS[artistType.typeId];
    const dbIconPath = artistType.coinIcon ?? artistType.imageUrl ?? artistType.icon;

    mapping[artistType.typeId] = {
      svgPath: localIcon?.svgPath ?? dbIconPath ?? "",
      altText: localIcon?.altText ?? `${artistType.typeId} icon`,
      fallbackColor: localIcon?.fallbackColor ?? "#6366f1",
    };
  }

  return mapping;
};

// =============================================================================
// EFFECT-BASED UTILITIES
// =============================================================================

/**
 * Effect schema for validating artist data arrays
 */
export const ArtistDataArraySchema = S.Array(ArtistDataSchema);

/**
 * Effect function to validate artist data
 */
export const validateArtistData = S.decodeUnknown(ArtistDataArraySchema);
