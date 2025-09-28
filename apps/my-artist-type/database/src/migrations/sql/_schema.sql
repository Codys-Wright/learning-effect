CREATE FUNCTION public.update_active_quizzes_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
        BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
        END;
        $$;

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$;

CREATE TABLE public.active_quizzes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    slug character varying(255) NOT NULL,
    quiz_id uuid NOT NULL,
    engine_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.analysis_engines (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    version jsonb NOT NULL,
    name character varying(200) NOT NULL,
    description text,
    scoring_config jsonb NOT NULL,
    endings jsonb DEFAULT '[]'::jsonb NOT NULL,
    metadata jsonb,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    is_published boolean DEFAULT false NOT NULL,
    is_temp boolean DEFAULT false NOT NULL,
    quiz_id uuid,
    CONSTRAINT analysis_engines_version_has_semver CHECK (((version ? 'semver'::text) AND ((version ->> 'semver'::text) IS NOT NULL) AND ((version ->> 'semver'::text) <> ''::text)))
);

CREATE TABLE public.analysis_results (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    engine_id uuid NOT NULL,
    engine_version jsonb NOT NULL,
    response_id uuid NOT NULL,
    ending_results jsonb DEFAULT '[]'::jsonb NOT NULL,
    metadata jsonb,
    analyzed_at timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    CONSTRAINT analysis_results_engine_version_has_semver CHECK (((engine_version ? 'semver'::text) AND ((engine_version ->> 'semver'::text) IS NOT NULL) AND ((engine_version ->> 'semver'::text) <> ''::text)))
);

CREATE TABLE public.effect_sql_migrations (
    migration_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);

CREATE TABLE public.examples (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    version text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone
);

CREATE TABLE public.quizzes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    version jsonb NOT NULL,
    title text NOT NULL,
    subtitle text,
    description text,
    questions jsonb DEFAULT '[]'::jsonb NOT NULL,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    is_published boolean DEFAULT false NOT NULL,
    is_temp boolean DEFAULT false NOT NULL,
    CONSTRAINT quizzes_version_has_semver CHECK (((version ? 'semver'::text) AND ((version ->> 'semver'::text) IS NOT NULL) AND ((version ->> 'semver'::text) <> ''::text)))
);

CREATE TABLE public.responses (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    quiz_id uuid NOT NULL,
    answers jsonb DEFAULT '[]'::jsonb NOT NULL,
    session_metadata jsonb NOT NULL,
    interaction_logs jsonb DEFAULT '[]'::jsonb,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone
);

CREATE TABLE public.styles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    rule text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.tests (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE ONLY public.active_quizzes
    ADD CONSTRAINT active_quizzes_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.active_quizzes
    ADD CONSTRAINT active_quizzes_slug_key UNIQUE (slug);

ALTER TABLE ONLY public.analysis_engines
    ADD CONSTRAINT analysis_engines_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.analysis_results
    ADD CONSTRAINT analysis_results_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.effect_sql_migrations
    ADD CONSTRAINT effect_sql_migrations_pkey PRIMARY KEY (migration_id);

ALTER TABLE ONLY public.examples
    ADD CONSTRAINT examples_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);

CREATE INDEX idx_active_quizzes_engine_id ON public.active_quizzes USING btree (engine_id);

CREATE INDEX idx_active_quizzes_quiz_id ON public.active_quizzes USING btree (quiz_id);

CREATE INDEX idx_active_quizzes_slug ON public.active_quizzes USING btree (slug);

CREATE INDEX idx_analysis_engines_created_at ON public.analysis_engines USING btree (created_at);

CREATE INDEX idx_analysis_engines_deleted_at ON public.analysis_engines USING btree (deleted_at);

CREATE INDEX idx_analysis_engines_is_active ON public.analysis_engines USING btree (is_active);

CREATE INDEX idx_analysis_engines_is_temp ON public.analysis_engines USING btree (is_temp) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_engines_quiz_id ON public.analysis_engines USING btree (quiz_id) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_engines_version ON public.analysis_engines USING btree (version);

CREATE INDEX idx_analysis_results_analyzed_at ON public.analysis_results USING btree (analyzed_at);

CREATE INDEX idx_analysis_results_created_at ON public.analysis_results USING btree (created_at);

CREATE INDEX idx_analysis_results_deleted_at ON public.analysis_results USING btree (deleted_at);

CREATE INDEX idx_analysis_results_engine_analyzed ON public.analysis_results USING btree (engine_id, analyzed_at) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_results_engine_id ON public.analysis_results USING btree (engine_id);

CREATE UNIQUE INDEX idx_analysis_results_response_engine ON public.analysis_results USING btree (response_id, engine_id) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_results_response_id ON public.analysis_results USING btree (response_id);

CREATE INDEX idx_quizzes_created_at ON public.quizzes USING btree (created_at);

CREATE INDEX idx_quizzes_deleted_at ON public.quizzes USING btree (deleted_at);

CREATE INDEX idx_quizzes_is_published ON public.quizzes USING btree (is_published);

CREATE INDEX idx_quizzes_is_temp ON public.quizzes USING btree (is_temp) WHERE (deleted_at IS NULL);

CREATE INDEX idx_quizzes_published_created ON public.quizzes USING btree (created_at) WHERE ((is_published = true) AND (deleted_at IS NULL));

CREATE INDEX idx_responses_created_at ON public.responses USING btree (created_at);

CREATE INDEX idx_responses_deleted_at ON public.responses USING btree (deleted_at);

CREATE INDEX idx_responses_quiz_id ON public.responses USING btree (quiz_id);

CREATE INDEX idx_responses_session_metadata_started_at ON public.responses USING gin (((session_metadata -> 'startedAt'::text)));

CREATE TRIGGER trigger_update_active_quizzes_updated_at BEFORE UPDATE ON public.active_quizzes FOR EACH ROW EXECUTE FUNCTION update_active_quizzes_updated_at();

CREATE TRIGGER update_analysis_engines_updated_at BEFORE UPDATE ON public.analysis_engines FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_analysis_results_updated_at BEFORE UPDATE ON public.analysis_results FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_examples_updated_at BEFORE UPDATE ON public.examples FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quizzes_updated_at BEFORE UPDATE ON public.quizzes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_responses_updated_at BEFORE UPDATE ON public.responses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_styles_updated_at BEFORE UPDATE ON public.styles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tests_updated_at BEFORE UPDATE ON public.tests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE ONLY public.active_quizzes
    ADD CONSTRAINT active_quizzes_engine_id_fkey FOREIGN KEY (engine_id) REFERENCES analysis_engines(id) ON DELETE CASCADE;

ALTER TABLE ONLY public.active_quizzes
    ADD CONSTRAINT active_quizzes_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE;

ALTER TABLE ONLY public.analysis_results
    ADD CONSTRAINT analysis_results_engine_id_fkey FOREIGN KEY (engine_id) REFERENCES analysis_engines(id);

ALTER TABLE ONLY public.analysis_results
    ADD CONSTRAINT analysis_results_response_id_fkey FOREIGN KEY (response_id) REFERENCES responses(id);

ALTER TABLE ONLY public.analysis_engines
    ADD CONSTRAINT fk_analysis_engines_quiz_id FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE;

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES quizzes(id);

INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (1, '2025-09-28 12:25:21.269207+00', 'create-styles_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (2, '2025-09-28 12:25:21.269207+00', 'create-tests_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (3, '2025-09-28 12:25:21.269207+00', 'create-examples_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (4, '2025-09-28 12:25:21.269207+00', 'create-quizzes_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (5, '2025-09-28 12:25:21.269207+00', 'create_responses_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (6, '2025-09-28 12:25:21.269207+00', 'create_analysis_engines_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (7, '2025-09-28 12:25:21.269207+00', 'create_analysis_results_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (8, '2025-09-28 12:25:21.269207+00', 'add_quiz_publishing');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (9, '2025-09-28 12:25:21.269207+00', 'add_quiz_temp_flag');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (10, '2025-09-28 12:25:21.269207+00', 'add_analysis_engine_publishing');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (11, '2025-09-28 12:25:21.269207+00', 'add_analysis_engine_temp_flag');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (12, '2025-09-28 12:25:21.269207+00', 'add_analysis_engine_quiz_id');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (13, '2025-09-28 12:25:21.269207+00', 'create_active_quizzes_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (14, '2025-09-28 12:25:21.269207+00', 'remove_slug_from_quizzes');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (15, '2025-09-28 12:25:21.269207+00', 'remove_slug_from_analysis_engines');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (16, '2025-09-28 12:25:21.269207+00', 'remove_engine_slug_from_analysis_results');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (17, '2025-09-28 12:25:21.269207+00', 'update_version_columns_to_json');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (18, '2025-09-28 12:25:21.269207+00', 'update_analysis_results_engine_version_to_json');