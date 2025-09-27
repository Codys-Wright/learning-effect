/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Step 1: Increase column size first to accommodate JSON objects
      sql`
        ALTER TABLE analysis_results
        ALTER COLUMN engine_version TYPE TEXT;
      `,

      // Step 2: Update analysis_results table - migrate existing string versions to JSON format
      sql`
        UPDATE analysis_results
        SET
          engine_version = json_build_object('semver', engine_version, 'comment', NULL)::text
        WHERE
          engine_version IS NOT NULL
          AND engine_version != ''
          AND engine_version !~ '^\\s*\\{';
      `,

      // Step 3: Change column type to JSONB
      sql`
        ALTER TABLE analysis_results
        ALTER COLUMN engine_version TYPE JSONB USING engine_version::jsonb;
      `,

      // Step 4: Add constraint to ensure version objects have required semver field
      sql`
        ALTER TABLE analysis_results
        ADD CONSTRAINT analysis_results_engine_version_has_semver CHECK (
          engine_version ? 'semver'
          AND engine_version ->> 'semver' IS NOT NULL
          AND engine_version ->> 'semver' != ''
        );
      `,
    ],
    { concurrency: 1 },
  ),
);
