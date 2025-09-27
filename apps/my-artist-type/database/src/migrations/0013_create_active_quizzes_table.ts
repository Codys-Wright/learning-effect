/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Create the active_quizzes table
      sql`
        CREATE TABLE IF NOT EXISTS active_quizzes (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          slug VARCHAR(255) UNIQUE NOT NULL,
          quiz_id UUID NOT NULL REFERENCES quizzes (id) ON DELETE CASCADE,
          engine_id UUID NOT NULL REFERENCES analysis_engines (id) ON DELETE CASCADE,
          created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
          updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
        );
      `,

      // Create indexes for better performance
      sql` CREATE INDEX IF NOT EXISTS idx_active_quizzes_slug ON active_quizzes (slug); `,

      sql` CREATE INDEX IF NOT EXISTS idx_active_quizzes_quiz_id ON active_quizzes (quiz_id); `,

      sql` CREATE INDEX IF NOT EXISTS idx_active_quizzes_engine_id ON active_quizzes (engine_id); `,

      // Add trigger to update updated_at timestamp
      sql`
        CREATE OR REPLACE FUNCTION update_active_quizzes_updated_at () RETURNS TRIGGER AS $$
        BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
      `,

      sql` DROP TRIGGER IF EXISTS trigger_update_active_quizzes_updated_at ON active_quizzes; `,

      sql`
        CREATE TRIGGER trigger_update_active_quizzes_updated_at BEFORE
        UPDATE ON active_quizzes FOR EACH ROW
        EXECUTE FUNCTION update_active_quizzes_updated_at ();
      `,
    ],
    { concurrency: 1 },
  ),
);
