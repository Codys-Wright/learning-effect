/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    CREATE TABLE analysis_results (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      engine_id UUID NOT NULL REFERENCES analysis_engines (id),
      engine_slug VARCHAR(100) NOT NULL,
      engine_version VARCHAR(20) NOT NULL,
      response_id UUID NOT NULL REFERENCES responses (id),
      ending_results JSONB NOT NULL DEFAULT '[]',
      metadata JSONB,
      analyzed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
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

    CREATE TRIGGER update_analysis_results_updated_at BEFORE
    UPDATE ON analysis_results FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column ();

    CREATE INDEX idx_analysis_results_engine_id ON analysis_results (engine_id);

    CREATE INDEX idx_analysis_results_engine_slug ON analysis_results (engine_slug);

    CREATE INDEX idx_analysis_results_response_id ON analysis_results (response_id);

    CREATE INDEX idx_analysis_results_analyzed_at ON analysis_results (analyzed_at);

    CREATE INDEX idx_analysis_results_deleted_at ON analysis_results (deleted_at);

    CREATE INDEX idx_analysis_results_created_at ON analysis_results (created_at);

    -- Unique constraint for response + engine combination
    CREATE UNIQUE INDEX idx_analysis_results_response_engine ON analysis_results (response_id, engine_id)
    WHERE
      deleted_at IS NULL;

    -- Index for analysis summaries by engine
    CREATE INDEX idx_analysis_results_engine_analyzed ON analysis_results (engine_id, analyzed_at)
    WHERE
      deleted_at IS NULL;
  `,
);
