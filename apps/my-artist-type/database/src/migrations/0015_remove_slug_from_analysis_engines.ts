/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Drop any unique constraints on slug first
      sql`
        ALTER TABLE analysis_engines
        DROP CONSTRAINT IF EXISTS analysis_engines_slug_key;
      `,

      // Drop any indexes on slug
      sql` DROP INDEX IF EXISTS idx_analysis_engines_slug; `,

      sql` DROP INDEX IF EXISTS idx_analysis_engines_slug_version; `,

      sql` DROP INDEX IF EXISTS idx_analysis_engines_published_slug; `,

      // Remove the slug column from analysis_engines table
      sql`
        ALTER TABLE analysis_engines
        DROP COLUMN IF EXISTS slug;
      `,
    ],
    { concurrency: 1 },
  ),
);
