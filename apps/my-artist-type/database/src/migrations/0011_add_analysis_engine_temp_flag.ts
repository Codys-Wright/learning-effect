/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    -- Add temporary flag to analysis_engines table
    ALTER TABLE analysis_engines
    ADD COLUMN IF NOT EXISTS is_temp BOOLEAN NOT NULL DEFAULT FALSE;

    -- Create an index for faster lookup of temporary engines
    CREATE INDEX IF NOT EXISTS idx_analysis_engines_is_temp ON analysis_engines (is_temp)
    WHERE
      deleted_at IS NULL;
  `,
);
