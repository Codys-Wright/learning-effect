/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Remove the engine_slug column from analysis_results table
      sql`
        ALTER TABLE analysis_results
        DROP COLUMN IF EXISTS engine_slug;
      `,
    ],
    { concurrency: 1 },
  ),
);
