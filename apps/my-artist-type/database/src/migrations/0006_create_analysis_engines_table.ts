/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    CREATE TABLE analysis_engines (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      version VARCHAR(20) NOT NULL,
      slug VARCHAR(100) NOT NULL UNIQUE,
      name VARCHAR(200) NOT NULL,
      description TEXT,
      scoring_config JSONB NOT NULL,
      endings JSONB NOT NULL DEFAULT '[]',
      metadata JSONB,
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
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

    CREATE TRIGGER update_analysis_engines_updated_at BEFORE
    UPDATE ON analysis_engines FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column ();

    CREATE INDEX idx_analysis_engines_slug ON analysis_engines (slug);

    CREATE INDEX idx_analysis_engines_version ON analysis_engines (version);

    CREATE INDEX idx_analysis_engines_is_active ON analysis_engines (is_active);

    CREATE INDEX idx_analysis_engines_deleted_at ON analysis_engines (deleted_at);

    CREATE INDEX idx_analysis_engines_created_at ON analysis_engines (created_at);

    -- Unique constraint for slug + version combination
    CREATE UNIQUE INDEX idx_analysis_engines_slug_version ON analysis_engines (slug, version)
    WHERE
      deleted_at IS NULL;
  `,
);
