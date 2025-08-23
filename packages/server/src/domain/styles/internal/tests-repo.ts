import { SqlClient, SqlSchema } from "@effect/sql";
import { PgLive } from "@org/database/database";
import { Test, TestId, TestNotFoundError } from "@org/domain/test-rpc";
import { Effect, flow, Schema } from "effect";

const CreateTestInput = Test.pipe(Schema.pick("title", "description"));

const UpdateTestInput = Test.pipe(Schema.pick("id", "title", "description"));
type UpdateTestInput = typeof UpdateTestInput.Type;

export class TestsRepo extends Effect.Service<TestsRepo>()("TestsRepo", {
  dependencies: [PgLive],
  effect: Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;

    const findAll = SqlSchema.findAll({
      Result: Test,
      Request: Schema.Void,
      execute: () => sql`
        SELECT
          *
        FROM
          tests
      `,
    });
    const create = SqlSchema.single({
      Result: Test,
      Request: CreateTestInput,
      execute: (request) => sql`
        INSERT INTO
          tests ${sql.insert(request)}
        RETURNING
          *
      `,
    });

    const update = SqlSchema.single({
      Result: Test,
      Request: UpdateTestInput,
      execute: (request) => sql`
        UPDATE tests
        SET
          ${sql.update(request)}
        WHERE
          id = ${request.id}
        RETURNING
          *
      `,
    });

    const del = SqlSchema.single({
      Request: TestId,
      Result: Schema.Unknown,
      execute: (id) => sql`
        DELETE FROM tests
        WHERE
          id = ${id}
        RETURNING
          id
      `,
    });

    return {
      findAll: flow(findAll, Effect.orDie),
      del: (id: TestId) =>
        del(id).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new TestNotFoundError({ id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (request: UpdateTestInput) =>
        update(request).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new TestNotFoundError({ id: request.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      create: flow(create, Effect.orDie),
    } as const;
  }),
}) {}
