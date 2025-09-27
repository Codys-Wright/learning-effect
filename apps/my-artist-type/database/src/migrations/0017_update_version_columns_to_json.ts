/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Step 1: Increase column size first to accommodate JSON objects
      sql`
        ALTER TABLE quizzes
        ALTER COLUMN version TYPE TEXT;
      `,

      sql`
        ALTER TABLE analysis_engines
        ALTER COLUMN version TYPE TEXT;
      `,

      // Step 2: Update quizzes table - migrate existing string versions to JSON format
      sql`
        UPDATE quizzes
        SET
          version = json_build_object('semver', version, 'comment', NULL)::text
        WHERE
          version IS NOT NULL
          AND version != ''
          AND version !~ '^\\s*\\{';
      `,

      // Step 3: Update analysis_engines table - migrate existing string versions to JSON format
      sql`
        UPDATE analysis_engines
        SET
          version = json_build_object('semver', version, 'comment', NULL)::text
        WHERE
          version IS NOT NULL
          AND version != ''
          AND version !~ '^\\s*\\{';
      `,

      // Step 4: Change column types to JSONB
      sql`
        ALTER TABLE quizzes
        ALTER COLUMN version TYPE JSONB USING version::jsonb;
      `,

      sql`
        ALTER TABLE analysis_engines
        ALTER COLUMN version TYPE JSONB USING version::jsonb;
      `,

      // Add constraints to ensure version objects have required semver field
      sql`
        ALTER TABLE quizzes
        ADD CONSTRAINT quizzes_version_has_semver CHECK (
          version ? 'semver'
          AND version ->> 'semver' IS NOT NULL
          AND version ->> 'semver' != ''
        );
      `,

      sql`
        ALTER TABLE analysis_engines
        ADD CONSTRAINT analysis_engines_version_has_semver CHECK (
          version ? 'semver'
          AND version ->> 'semver' IS NOT NULL
          AND version ->> 'semver' != ''
        );
      `,
    ],
    { concurrency: 1 },
  ),
);
