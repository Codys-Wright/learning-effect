import { SqlClient, SqlSchema } from "@effect/sql";
import { PgLive } from "@org/database/database";
import { Example, ExampleId, ExampleNotFoundError } from "@org/domain/example-rpc";
import { Effect, flow, Schema } from "effect";

//1) Define the Inputs that the repository is expecting, we map these to UpsertPayload because it decouples them like a DTO and lets us
//   easily see what our Repo is expecting to deal with
const CreateExampleInput = Example.pipe(Schema.pick("name", "version", "description", "metadata"));

const UpdateExampleInput = Example.pipe(
  Schema.pick("id", "version", "name", "description", "metadata"),
);
type UpdateExampleInput = typeof UpdateExampleInput.Type;

// 2) Define the Repo, which first defines each method, and then returns them to keep error handling seperate from the expecations of whats supposed to happen
export class ExamplesRepo extends Effect.Service<ExamplesRepo>()("ExamplesRepo", {
  dependencies: [PgLive],
  effect: Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;

    const findAll = SqlSchema.findAll({
      Result: Example,
      Request: Schema.Void,
      execute: () => sql`
        SELECT
          *
        FROM
          examples
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
        RETURNING
          *
      `,
    });

    const del = SqlSchema.single({
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

    return {
      findAll: flow(findAll, Effect.orDie),
      del: (id: ExampleId) =>
        del(id).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new ExampleNotFoundError({ id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
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
      create: flow(create, Effect.orDie),
    } as const;
  }),
}) {}
