/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    -- Add publishing state to analysis_engines table
    ALTER TABLE analysis_engines
    ADD COLUMN IF NOT EXISTS is_published BOOLEAN NOT NULL DEFAULT FALSE;

    -- Drop existing unique constraints that might conflict (constraint first, then index)
    ALTER TABLE analysis_engines
    DROP CONSTRAINT IF EXISTS analysis_engines_slug_key;

    DROP INDEX IF EXISTS idx_analysis_engines_slug_key;

    DROP INDEX IF EXISTS analysis_engines_slug_key;

    -- Create unique index for slug+version combinations (allow multiple versions per slug)
    CREATE UNIQUE INDEX IF NOT EXISTS idx_analysis_engines_slug_version ON analysis_engines (slug, version)
    WHERE
      deleted_at IS NULL;

    -- Enforce only one published engine per slug
    CREATE UNIQUE INDEX IF NOT EXISTS idx_analysis_engines_published_slug ON analysis_engines (slug)
    WHERE
      is_published = TRUE
      AND deleted_at IS NULL;
  `,
);
