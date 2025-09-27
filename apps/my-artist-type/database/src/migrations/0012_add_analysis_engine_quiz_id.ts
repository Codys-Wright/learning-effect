/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(SqlClient.SqlClient, (sql) =>
  Effect.all(
    [
      // Add quiz_id column to analysis_engines table for direct quiz reference
      sql`
        ALTER TABLE analysis_engines
        ADD COLUMN IF NOT EXISTS quiz_id UUID;
      `,

      // Add foreign key constraint to ensure referential integrity
      // PostgreSQL doesn't support IF NOT EXISTS for constraints, so we need to check first
      sql`
        DO $$
        BEGIN
          IF NOT EXISTS (
            SELECT 1 FROM information_schema.table_constraints
            WHERE constraint_name = 'fk_analysis_engines_quiz_id'
            AND table_name = 'analysis_engines'
          ) THEN
            ALTER TABLE analysis_engines
            ADD CONSTRAINT fk_analysis_engines_quiz_id
            FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE;
          END IF;
        END $$;
      `,

      // Create index for faster lookups by quiz_id
      sql`
        CREATE INDEX IF NOT EXISTS idx_analysis_engines_quiz_id ON analysis_engines (quiz_id)
        WHERE
          deleted_at IS NULL;
      `,

      // For existing engines, try to link them to quizzes based on slug patterns
      // This is a best-effort migration - new engines should always have quiz_id set
      sql`
        UPDATE analysis_engines
        SET
          quiz_id = q.id
        FROM
          quizzes q
        WHERE
          analysis_engines.quiz_id IS NULL
          AND analysis_engines.deleted_at IS NULL
          AND q.deleted_at IS NULL
          AND (
            -- Match by exact slug
            analysis_engines.slug = q.slug
            OR
            -- Match artist-type engines to artist-type quizzes
            (
              analysis_engines.slug LIKE '%artist-type%'
              AND q.slug LIKE '%artist-type%'
            )
          );
      `,
    ],
    { concurrency: 1 },
  ),
);
