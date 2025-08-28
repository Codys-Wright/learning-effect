import { SqlClient, SqlSchema } from "@effect/sql";
import { Quiz, QuizId, QuizNotFoundError } from "@features/quiz/domain";
import { PgLive } from "@my-artist-type/database/database";
import { Effect, flow, Schema } from "effect";

import { slugify } from "../utils/slugify.js";

//1) Define the Inputs that the repository is expecting, we map these to UpsertPayload because it decouples them like a DTO and lets us
//   easily see what our Repo is expecting to deal with
const CreateQuizInput = Quiz.pipe(
  Schema.pick("title", "subtitle", "description", "questions", "metadata", "version"),
);

const UpdateQuizInput = Quiz.pipe(
  Schema.pick("id", "version", "title", "subtitle", "description", "questions", "metadata"),
);
type UpdateQuizInput = typeof UpdateQuizInput.Type;

// 2) Define the repository as an Effect Service
//    - Uses dependency injection for the database connection (PgLive)
//    - Each method is defined separately to keep error handling isolated from business logic
//    - SqlSchema provides type-safe SQL operations with automatic serialization/deserialization
export class QuizzesRepo extends Effect.Service<QuizzesRepo>()("QuizzesRepo", {
  dependencies: [PgLive],
  effect: Effect.gen(function* () {
    // Get the SQL client from the Effect context
    const sql = yield* SqlClient.SqlClient;

    const findAll = SqlSchema.findAll({
      Result: Quiz,
      Request: Schema.Void,
      execute: () => sql`
        SELECT
          *
        FROM
          quizzes
        WHERE
          deleted_at IS NULL
      `,
    });

    const create = SqlSchema.single({
      Result: Quiz,
      Request: CreateQuizInput,
      execute: (request) => {
        const slug = slugify(request.title, {
          lower: true,
          strict: true,
          trim: true,
        });

        return sql`
          INSERT INTO
            quizzes ${sql.insert({
            ...request,
            slug,
          })}
          RETURNING
            *
        `;
      },
    });

    const update = SqlSchema.single({
      Result: Quiz,
      Request: UpdateQuizInput,
      execute: (request) => {
        const slug = slugify(request.title, {
          lower: true,
          strict: true,
          trim: true,
        });

        return sql`
          UPDATE quizzes
          SET
            ${sql.update({
            ...request,
            slug,
          })}
          WHERE
            id = ${request.id}
            AND deleted_at IS NULL
          RETURNING
            *
        `;
      },
    });

    //Only sets the deleted_at timestamp so that it will be excluded from all further queries
    //Also appends timestamp to slug to avoid unique constraint violations on future creates
    const del = SqlSchema.single({
      Request: QuizId,
      Result: Schema.Unknown,
      execute: (id) => sql`
        UPDATE quizzes
        SET
          deleted_at = now(),
          slug = slug || '-deleted-' || extract(
            epoch
            FROM
              now()
          )::bigint
        WHERE
          id = ${id}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
    });

    const hardDelete = SqlSchema.single({
      Request: QuizId,
      Result: Schema.Unknown,
      execute: (id) => sql`
        DELETE FROM quizzes
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
      del: (id: QuizId) =>
        del(id).pipe(
          Effect.asVoid, // We don't need the return value, just success/failure
          Effect.catchTags({
            NoSuchElementException: () => new QuizNotFoundError({ id }), // Record not found or already deleted
            ParseError: Effect.die, // Schema parsing failed - programmer error
            SqlError: Effect.die, // Database connection/query failed - infrastructure error
          }),
        ),

      // hardDelete: Permanently remove a quiz from the database (use with caution)
      hardDelete: (id: QuizId) =>
        hardDelete(id).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new QuizNotFoundError({ id }), // Record not found
            ParseError: Effect.die, // Schema parsing failed - programmer error
            SqlError: Effect.die, // Database connection/query failed - infrastructure error
          }),
        ),
      update: (request: UpdateQuizInput) =>
        update(request).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new QuizNotFoundError({ id: request.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),

      // create: If it fails, crash the program - creation should always work with valid input
      create: flow(create, Effect.orDie),
    } as const;
  }),
}) {}
