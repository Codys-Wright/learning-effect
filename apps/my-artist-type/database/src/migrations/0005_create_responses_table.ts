/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    CREATE TABLE responses (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      quiz_id UUID NOT NULL REFERENCES quizzes (id),
      answers JSONB NOT NULL DEFAULT '[]',
      session_metadata JSONB NOT NULL,
      interaction_logs JSONB DEFAULT '[]',
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

    CREATE TRIGGER update_responses_updated_at BEFORE
    UPDATE ON responses FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column ();

    CREATE INDEX idx_responses_quiz_id ON responses (quiz_id);

    CREATE INDEX idx_responses_deleted_at ON responses (deleted_at);

    CREATE INDEX idx_responses_created_at ON responses (created_at);

    CREATE INDEX idx_responses_session_metadata_started_at ON responses USING GIN ((session_metadata -> 'startedAt'));
  `,
);
