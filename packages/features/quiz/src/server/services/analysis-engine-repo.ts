import { SqlClient, SqlSchema } from "@effect/sql";
import {
  AnalysisEngine,
  AnalysisEngineId,
  AnalysisEngineNotFoundError,
} from "@features/quiz/domain";
import { PgLive } from "@my-artist-type/database/database";
import { Effect, flow, Schema } from "effect";

//1) Define the Inputs that the repository is expecting, we map these to UpsertPayload because it decouples them like a DTO and lets us
//   easily see what our Repo is expecting to deal with
const CreateAnalysisEngineInput = AnalysisEngine.pipe(
  Schema.pick(
    "version",
    "slug",
    "name",
    "description",
    "scoringConfig",
    "endings",
    "metadata",
    "isActive",
  ),
);

const UpdateAnalysisEngineInput = AnalysisEngine.pipe(
  Schema.pick(
    "id",
    "version",
    "slug",
    "name",
    "description",
    "scoringConfig",
    "endings",
    "metadata",
    "isActive",
  ),
);
type UpdateAnalysisEngineInput = typeof UpdateAnalysisEngineInput.Type;

// 2) Define the repository as an Effect Service
//    - Uses dependency injection for the database connection (PgLive)
//    - Each method is defined separately to keep error handling isolated from business logic
//    - SqlSchema provides type-safe SQL operations with automatic serialization/deserialization
export class AnalysisEngineRepo extends Effect.Service<AnalysisEngineRepo>()("AnalysisEngineRepo", {
  dependencies: [PgLive],
  effect: Effect.gen(function* () {
    // Get the SQL client from the Effect context
    const sql = yield* SqlClient.SqlClient;

    const findAll = SqlSchema.findAll({
      Result: AnalysisEngine,
      Request: Schema.Void,
      execute: () => sql`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          deleted_at IS NULL
        ORDER BY
          created_at DESC
      `,
    });

    const findById = SqlSchema.single({
      Result: AnalysisEngine,
      Request: Schema.Struct({ id: AnalysisEngineId }),
      execute: ({ id }) => sql`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          id = ${id}
          AND deleted_at IS NULL
      `,
    });

    const findBySlug = SqlSchema.single({
      Result: AnalysisEngine,
      Request: Schema.Struct({ slug: Schema.String }),
      execute: ({ slug }) => sql`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          slug = ${slug}
          AND deleted_at IS NULL
        ORDER BY
          created_at DESC
        LIMIT
          1
      `,
    });

    const findBySlugAndVersion = SqlSchema.single({
      Result: AnalysisEngine,
      Request: Schema.Struct({ slug: Schema.String, version: Schema.String }),
      execute: ({ slug, version }) => sql`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          slug = ${slug}
          AND version = ${version}
          AND deleted_at IS NULL
      `,
    });

    const create = SqlSchema.single({
      Result: AnalysisEngine,
      Request: CreateAnalysisEngineInput,
      execute: (request) => sql`
        INSERT INTO
          analysis_engines ${sql.insert(request)}
        RETURNING
          *
      `,
    });

    const update = SqlSchema.single({
      Result: AnalysisEngine,
      Request: UpdateAnalysisEngineInput,
      execute: (request) => {
        const { id, ...updateData } = request;
        return sql`
          UPDATE analysis_engines
          SET
            ${sql.update(updateData)}
          WHERE
            id = ${id}
            AND deleted_at IS NULL
          RETURNING
            *
        `;
      },
    });

    //Only sets the deleted_at timestamp so that it will be excluded from all further queries
    const del = SqlSchema.single({
      Result: Schema.Struct({ id: AnalysisEngineId }),
      Request: Schema.Struct({ id: AnalysisEngineId }),
      execute: ({ id }) => sql`
        UPDATE analysis_engines
        SET
          deleted_at = now()
        WHERE
          id = ${id}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
    });

    //Permanently removes an analysis engine from the database
    const hardDelete = SqlSchema.single({
      Result: Schema.Struct({ id: AnalysisEngineId }),
      Request: Schema.Struct({ id: AnalysisEngineId }),
      execute: ({ id }) => sql`
        DELETE FROM analysis_engines
        WHERE
          id = ${id}
        RETURNING
          id
      `,
    });

    // 4) Return the public API methods with appropriate error handling
    //    Each method transforms database errors into domain-appropriate responses
    return {
      // findAll: If it fails, crash the program (orDie) - this should always work
      findAll: flow(findAll, Effect.orDie),

      // findById: Get a specific analysis engine by ID
      findById: (id: AnalysisEngineId) =>
        findById({ id }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new AnalysisEngineNotFoundError({ id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      // findBySlug: Get the latest version of an analysis engine by slug
      findBySlug: (slug: string) =>
        findBySlug({ slug }).pipe(
          Effect.catchTags({
            NoSuchElementException: () =>
              new AnalysisEngineNotFoundError({ id: slug as AnalysisEngineId }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      // findBySlugAndVersion: Get a specific version of an analysis engine
      findBySlugAndVersion: (slug: string, version: string) =>
        findBySlugAndVersion({ slug, version }).pipe(
          Effect.catchTags({
            NoSuchElementException: () =>
              new AnalysisEngineNotFoundError({ id: slug as AnalysisEngineId }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      // del: Soft delete - sets deleted_at timestamp to exclude from queries
      del: (id: AnalysisEngineId) =>
        del({ id }).pipe(
          Effect.asVoid, // We don't need the return value, just success/failure
          Effect.catchTags({
            NoSuchElementException: () => new AnalysisEngineNotFoundError({ id }), // Record not found or already deleted
            ParseError: Effect.die, // Schema parsing failed - programmer error
            SqlError: Effect.die, // Database connection/query failed - infrastructure error
          }),
        ),

      // hardDelete: Permanently remove an analysis engine from the database (use with caution)
      hardDelete: (id: AnalysisEngineId) =>
        hardDelete({ id }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new AnalysisEngineNotFoundError({ id }), // Record not found
            ParseError: Effect.die, // Schema parsing failed - programmer error
            SqlError: Effect.die, // Database connection/query failed - infrastructure error
          }),
        ),

      update: (request: UpdateAnalysisEngineInput) =>
        update(request).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new AnalysisEngineNotFoundError({ id: request.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      // create: If it fails, crash the program - creation should always work with valid input
      create: flow(create, Effect.orDie),
    } as const;
  }),
}) {}
