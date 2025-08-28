/* eslint-disable no-restricted-syntax */
import { SqlClient } from "@effect/sql";
import { Effect } from "effect";

export default Effect.flatMap(
  SqlClient.SqlClient,
  (sql) => sql`
    CREATE TABLE examples (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      version TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
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

    CREATE TRIGGER update_examples_updated_at BEFORE
    UPDATE ON examples FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column ();
  `,
);
