/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Drop any unique constraints on slug first
      sql`
        ALTER TABLE quizzes
        DROP CONSTRAINT IF EXISTS quizzes_slug_key;
      `,

      // Drop any indexes on slug
      sql` DROP INDEX IF EXISTS idx_quizzes_slug; `,

      sql` DROP INDEX IF EXISTS idx_quizzes_published_slug; `,

      // Remove the slug column from quizzes table
      sql`
        ALTER TABLE quizzes
        DROP COLUMN IF EXISTS slug;
      `,
    ],
    { concurrency: 1 },
  ),
);
