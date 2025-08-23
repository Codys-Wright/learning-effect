import { SqlClient, SqlSchema } from "@effect/sql";
import { PgLive } from "@org/database/database";
import { Example, ExampleId, ExampleNotFoundError } from "@org/domain/example-rpc";
import { Effect, flow, Schema } from "effect";

//1) Define the Inputs that the repository is expecting, we map these to UpsertPayload because it decouples them like a DTO and lets us
//   easily see what our Repo is expecting to deal with
const CreateExampleInput = Example.pipe(Schema.pick("name", "description", "metadata", "version"));

const UpdateExampleInput = Example.pipe(
  Schema.pick("id", "version", "name", "description", "metadata"),
);
type UpdateExampleInput = typeof UpdateExampleInput.Type;

// 2) Define the repository as an Effect Service
//    - Uses dependency injection for the database connection (PgLive)
//    - Each method is defined separately to keep error handling isolated from business logic
//    - SqlSchema provides type-safe SQL operations with automatic serialization/deserialization
export class ExamplesRepo extends Effect.Service<ExamplesRepo>()("ExamplesRepo", {
  dependencies: [PgLive],
  effect: Effect.gen(function* () {
    // Get the SQL client from the Effect context
    const sql = yield* SqlClient.SqlClient;

    const findAll = SqlSchema.findAll({
      Result: Example,
      Request: Schema.Void,
      execute: () => sql`
        SELECT
          *
        FROM
          examples
        WHERE
          deleted_at IS NULL
      `,
    });

    const create = SqlSchema.single({
      Result: Example,
      Request: CreateExampleInput,
      execute: (request) => sql`
        INSERT INTO
          examples ${sql.insert(request)}
        RETURNING
          *
      `,
    });

    const update = SqlSchema.single({
      Result: Example,
      Request: UpdateExampleInput,
      execute: (request) => sql`
        UPDATE examples
        SET
          ${sql.update(request)}
        WHERE
          id = ${request.id}
          AND deleted_at IS NULL
        RETURNING
          *
      `,
    });

    //Only sets the deleted_at timestamp so that it will be excluded from all further queries
    const del = SqlSchema.single({
      Request: ExampleId,
      Result: Schema.Unknown,
      execute: (id) => sql`
        UPDATE examples
        SET
          deleted_at = now()
        WHERE
          id = ${id}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
    });

    const hardDelete = SqlSchema.single({
      Request: ExampleId,
      Result: Schema.Unknown,
      execute: (id) => sql`
        DELETE FROM examples
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

      // del: Soft delete - sets deleted_at timestamp to exclude from queries
      del: (id: ExampleId) =>
        del(id).pipe(
          Effect.asVoid, // We don't need the return value, just success/failure
          Effect.catchTags({
            NoSuchElementException: () => new ExampleNotFoundError({ id }), // Record not found or already deleted
            ParseError: Effect.die, // Schema parsing failed - programmer error
            SqlError: Effect.die, // Database connection/query failed - infrastructure error
          }),
        ),

      // hardDelete: Permanently remove an example from the database (use with caution)
      hardDelete: (id: ExampleId) =>
        hardDelete(id).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new ExampleNotFoundError({ id }), // Record not found
            ParseError: Effect.die, // Schema parsing failed - programmer error
            SqlError: Effect.die, // Database connection/query failed - infrastructure error
          }),
        ),
      update: (request: UpdateExampleInput) =>
        update(request).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new ExampleNotFoundError({ id: request.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      // create: If it fails, crash the program - creation should always work with valid input
      create: flow(create, Effect.orDie),
    } as const;
  }),
}) {}
