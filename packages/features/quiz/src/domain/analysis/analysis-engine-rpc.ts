// Analysis Engine Domain Schema
// This defines the structure for storing and running different analysis engines

import { SemVer, Slug } from "@core/domain";
import { HttpApiEndpoint, HttpApiGroup, HttpApiSchema } from "@effect/platform";
import { Schema as S } from "effect";

// ============================================================================
// CORE TYPES
// ============================================================================

// Unique identifier for analysis engines
export const AnalysisEngineId = S.UUID.pipe(S.brand("AnalysisEngineId"));
export type AnalysisEngineId = typeof AnalysisEngineId.Type;

// Unique identifier for analysis results
export const AnalysisResultId = S.UUID.pipe(S.brand("AnalysisResultId"));
export type AnalysisResultId = typeof AnalysisResultId.Type;

// ============================================================================
// SCORING CONFIGURATION
// ============================================================================

// Scoring weights and parameters for an analysis engine
export class ScoringConfig extends S.Class<ScoringConfig>("ScoringConfig")({
  // Weight for primary questions (key identifying questions)
  primaryWeight: S.Number.pipe(S.positive()),

  // Weight for non-primary questions
  nonPrimaryWeight: S.Number.pipe(S.positive()),

  // Distance falloff curve (higher = sharper falloff)
  distanceGamma: S.Number.pipe(S.positive()),

  // Nonlinear amplification to sharpen winners (higher = more contrast)
  beta: S.Number.pipe(S.positive()),

  // Score multiplier for the entire engine
  scoreMultiplier: S.Number.pipe(S.positive()),
}) {}

// Default scoring configuration
export const defaultScoringConfig: ScoringConfig = {
  primaryWeight: 1.5,
  nonPrimaryWeight: 0.2,
  distanceGamma: 1.6,
  beta: 1.4,
  scoreMultiplier: 1.0,
};

// ============================================================================
// QUESTION RULES
// ============================================================================

// Rule for how a specific question should be scored
export class QuestionRule extends S.Class<QuestionRule>("QuestionRule")({
  // Question ID this rule applies to
  questionId: S.String,

  // Ideal answer values (e.g., [9, 10] for high scores)
  idealAnswers: S.Array(S.Number),

  // Whether this is a primary (key identifying) question
  isPrimary: S.Boolean,

  // Custom weight multiplier for this specific question
  weightMultiplier: S.optional(S.Number.pipe(S.positive())),

  // Custom distance gamma for this question (overrides global)
  distanceGamma: S.optional(S.Number.pipe(S.positive())),
}) {}

// ============================================================================
// ENDING DEFINITION
// ============================================================================

// Definition of an ending/outcome within an analysis engine
export class EndingDefinition extends S.Class<EndingDefinition>("EndingDefinition")({
  // Unique identifier for this ending
  endingId: S.String,

  // Display name
  name: S.String,

  // Short name for display
  shortName: S.optional(S.String),

  // Full descriptive name
  fullName: S.optional(S.String),

  // Rules for scoring this ending
  questionRules: S.Array(QuestionRule),

  // Custom scoring config for this ending (overrides global)
  customScoringConfig: S.optional(ScoringConfig),

  // Category or type of ending (e.g., "artist-type", "personality", "preference")
  category: S.optional(S.String),
}) {}

// ============================================================================
// ANALYSIS ENGINE
// ============================================================================

// Complete analysis engine definition
export class AnalysisEngine extends S.Class<AnalysisEngine>("AnalysisEngine")({
  // Unique identifier
  id: AnalysisEngineId,

  // Version using SemVer
  version: SemVer,

  // Slug for external identification (e.g., "artist-type-quiz-v1")
  slug: Slug,

  // Human-readable name
  name: S.String,

  // Description of what this engine analyzes
  description: S.optional(S.String),

  // Global scoring configuration
  scoringConfig: S.parseJson(ScoringConfig),

  // Endings/outcomes this engine can analyze
  endings: S.parseJson(S.Array(EndingDefinition)),

  // Metadata about the engine
  metadata: S.optional(S.NullOr(S.parseJson(S.Record({ key: S.String, value: S.Unknown })))),

  // Whether this engine is active/available
  isActive: S.Boolean,

  // Creation and update timestamps
  createdAt: S.DateTimeUtc,
  updatedAt: S.DateTimeUtc,
  deletedAt: S.NullOr(S.DateTimeUtc),
}) {}

// ============================================================================
// UPSERT SCHEMAS
// ============================================================================

// Upsert schema for analysis engines (without database-managed fields)
export class UpsertAnalysisEnginePayload extends S.Class<UpsertAnalysisEnginePayload>(
  "UpsertAnalysisEnginePayload",
)({
  id: S.optional(AnalysisEngineId),
  version: S.optional(SemVer),
  slug: S.optional(Slug),
  name: S.String,
  description: S.optional(S.NullOr(S.String)),
  scoringConfig: S.parseJson(ScoringConfig),
  endings: S.parseJson(S.Array(EndingDefinition)),
  metadata: S.optional(S.NullOr(S.parseJson(S.Record({ key: S.String, value: S.Unknown })))),
  isActive: S.optional(S.Boolean),
}) {}

// ============================================================================
// ERROR TYPES
// ============================================================================

export class AnalysisEngineNotFoundError extends S.TaggedError<AnalysisEngineNotFoundError>(
  "AnalysisEngineNotFoundError",
)(
  "AnalysisEngineNotFoundError",
  { id: AnalysisEngineId },
  HttpApiSchema.annotations({
    status: 404,
  }),
) {
  get message() {
    return `Analysis engine with id ${this.id} not found`;
  }
}

// ============================================================================
// HTTP API DEFINITION
// ============================================================================

export class AnalysisEngineGroup extends HttpApiGroup.make("AnalysisEngine")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(S.Array(AnalysisEngine)))
  .add(
    HttpApiEndpoint.get("byId", "/:id")
      .addSuccess(AnalysisEngine)
      .addError(AnalysisEngineNotFoundError)
      .setPayload(
        S.Struct({
          id: AnalysisEngineId,
        }),
      ),
  )
  .add(
    HttpApiEndpoint.get("bySlug", "/slug/:slug")
      .addSuccess(AnalysisEngine)
      .addError(AnalysisEngineNotFoundError)
      .setPayload(
        S.Struct({
          slug: S.String,
        }),
      ),
  )
  .add(
    HttpApiEndpoint.get("bySlugAndVersion", "/slug/:slug/version/:version")
      .addSuccess(AnalysisEngine)
      .addError(AnalysisEngineNotFoundError)
      .setPayload(
        S.Struct({
          slug: S.String,
          version: S.String,
        }),
      ),
  )
  .add(
    HttpApiEndpoint.put("upsert", "/")
      .addSuccess(AnalysisEngine)
      .addError(AnalysisEngineNotFoundError)
      .setPayload(UpsertAnalysisEnginePayload),
  )
  .add(
    HttpApiEndpoint.del("delete", "/:id")
      .addSuccess(S.Void)
      .addError(AnalysisEngineNotFoundError)
      .setPayload(
        S.Struct({
          id: AnalysisEngineId,
        }),
      ),
  )
  .prefix("/AnalysisEngine") {}
