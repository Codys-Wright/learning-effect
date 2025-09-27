/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    ALTER TABLE quizzes
    ADD COLUMN is_temp BOOLEAN NOT NULL DEFAULT FALSE;

    -- Create an index for faster lookup of temporary quizzes
    CREATE INDEX idx_quizzes_is_temp ON quizzes (is_temp)
    WHERE
      deleted_at IS NULL;

    -- Create a partial index for non-temp quizzes (most common case)
    CREATE INDEX idx_quizzes_permanent ON quizzes (slug, version)
    WHERE
      is_temp = FALSE
      AND deleted_at IS NULL;
  `,
);
