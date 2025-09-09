/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    CREATE TABLE quizzes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      version TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      questions JSONB NOT NULL DEFAULT '[]',
      metadata JSONB,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      deleted_at TIMESTAMP WITH TIME ZONE
    );

    CREATE OR REPLACE FUNCTION update_updated_at_column () RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$ language 'plpgsql';

    CREATE TRIGGER update_quizzes_updated_at BEFORE
    UPDATE ON quizzes FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column ();

    CREATE INDEX idx_quizzes_slug ON quizzes (slug);

    CREATE INDEX idx_quizzes_deleted_at ON quizzes (deleted_at);

    CREATE INDEX idx_quizzes_created_at ON quizzes (created_at);
  `,
);
