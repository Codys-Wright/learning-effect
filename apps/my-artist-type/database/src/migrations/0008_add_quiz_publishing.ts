/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    -- Add isPublished column to quizzes table
    ALTER TABLE quizzes
    ADD COLUMN is_published BOOLEAN NOT NULL DEFAULT FALSE;

    -- Drop the existing unique constraint on slug alone
    ALTER TABLE quizzes
    DROP CONSTRAINT quizzes_slug_key;

    -- Allow multiple versions per slug (like analysis_engines pattern)
    CREATE UNIQUE INDEX idx_quizzes_slug_version ON quizzes (slug, version)
    WHERE
      deleted_at IS NULL;

    -- Critical constraint: Only ONE published version per slug
    CREATE UNIQUE INDEX idx_quizzes_published_slug ON quizzes (slug)
    WHERE
      is_published = TRUE
      AND deleted_at IS NULL;

    -- Add helpful indexes for querying
    CREATE INDEX idx_quizzes_is_published ON quizzes (is_published);

    CREATE INDEX idx_quizzes_slug_published ON quizzes (slug, is_published)
    WHERE
      deleted_at IS NULL;

    -- Add index for finding published quizzes by creation date
    CREATE INDEX idx_quizzes_published_created ON quizzes (created_at)
    WHERE
      is_published = TRUE
      AND deleted_at IS NULL;
  `,
);
