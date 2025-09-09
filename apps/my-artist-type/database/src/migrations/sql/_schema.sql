CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$;

CREATE TABLE public.analysis_engines (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    version character varying(20) NOT NULL,
    slug character varying(100) NOT NULL,
    name character varying(200) NOT NULL,
    description text,
    scoring_config jsonb NOT NULL,
    endings jsonb DEFAULT '[]'::jsonb NOT NULL,
    metadata jsonb,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone
);

CREATE TABLE public.analysis_results (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    engine_id uuid NOT NULL,
    engine_slug character varying(100) NOT NULL,
    engine_version character varying(20) NOT NULL,
    response_id uuid NOT NULL,
    ending_results jsonb DEFAULT '[]'::jsonb NOT NULL,
    metadata jsonb,
    analyzed_at timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone
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
    version text NOT NULL,
    slug text NOT NULL,
    title text NOT NULL,
    subtitle text,
    description text,
    questions jsonb DEFAULT '[]'::jsonb NOT NULL,
    metadata jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone
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

ALTER TABLE ONLY public.analysis_engines
    ADD CONSTRAINT analysis_engines_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.analysis_engines
    ADD CONSTRAINT analysis_engines_slug_key UNIQUE (slug);

ALTER TABLE ONLY public.analysis_results
    ADD CONSTRAINT analysis_results_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.effect_sql_migrations
    ADD CONSTRAINT effect_sql_migrations_pkey PRIMARY KEY (migration_id);

ALTER TABLE ONLY public.examples
    ADD CONSTRAINT examples_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_slug_key UNIQUE (slug);

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);

CREATE INDEX idx_analysis_engines_created_at ON public.analysis_engines USING btree (created_at);

CREATE INDEX idx_analysis_engines_deleted_at ON public.analysis_engines USING btree (deleted_at);

CREATE INDEX idx_analysis_engines_is_active ON public.analysis_engines USING btree (is_active);

CREATE INDEX idx_analysis_engines_slug ON public.analysis_engines USING btree (slug);

CREATE UNIQUE INDEX idx_analysis_engines_slug_version ON public.analysis_engines USING btree (slug, version) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_engines_version ON public.analysis_engines USING btree (version);

CREATE INDEX idx_analysis_results_analyzed_at ON public.analysis_results USING btree (analyzed_at);

CREATE INDEX idx_analysis_results_created_at ON public.analysis_results USING btree (created_at);

CREATE INDEX idx_analysis_results_deleted_at ON public.analysis_results USING btree (deleted_at);

CREATE INDEX idx_analysis_results_engine_analyzed ON public.analysis_results USING btree (engine_id, analyzed_at) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_results_engine_id ON public.analysis_results USING btree (engine_id);

CREATE INDEX idx_analysis_results_engine_slug ON public.analysis_results USING btree (engine_slug);

CREATE UNIQUE INDEX idx_analysis_results_response_engine ON public.analysis_results USING btree (response_id, engine_id) WHERE (deleted_at IS NULL);

CREATE INDEX idx_analysis_results_response_id ON public.analysis_results USING btree (response_id);

CREATE INDEX idx_quizzes_created_at ON public.quizzes USING btree (created_at);

CREATE INDEX idx_quizzes_deleted_at ON public.quizzes USING btree (deleted_at);

CREATE INDEX idx_quizzes_slug ON public.quizzes USING btree (slug);

CREATE INDEX idx_responses_created_at ON public.responses USING btree (created_at);

CREATE INDEX idx_responses_deleted_at ON public.responses USING btree (deleted_at);

CREATE INDEX idx_responses_quiz_id ON public.responses USING btree (quiz_id);

CREATE INDEX idx_responses_session_metadata_started_at ON public.responses USING gin (((session_metadata -> 'startedAt'::text)));

CREATE TRIGGER update_analysis_engines_updated_at BEFORE UPDATE ON public.analysis_engines FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_analysis_results_updated_at BEFORE UPDATE ON public.analysis_results FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_examples_updated_at BEFORE UPDATE ON public.examples FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quizzes_updated_at BEFORE UPDATE ON public.quizzes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_responses_updated_at BEFORE UPDATE ON public.responses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_styles_updated_at BEFORE UPDATE ON public.styles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tests_updated_at BEFORE UPDATE ON public.tests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

ALTER TABLE ONLY public.analysis_results
    ADD CONSTRAINT analysis_results_engine_id_fkey FOREIGN KEY (engine_id) REFERENCES public.analysis_engines(id);

ALTER TABLE ONLY public.analysis_results
    ADD CONSTRAINT analysis_results_response_id_fkey FOREIGN KEY (response_id) REFERENCES public.responses(id);

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES public.quizzes(id);

INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (1, '2025-09-09 09:18:49.284019+00', 'create-styles_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (2, '2025-09-09 09:18:49.284019+00', 'create-tests_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (3, '2025-09-09 09:18:49.284019+00', 'create-examples_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (4, '2025-09-09 09:18:49.284019+00', 'create-quizzes_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (5, '2025-09-09 09:18:49.284019+00', 'create_responses_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (6, '2025-09-09 09:18:49.284019+00', 'create_analysis_engines_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (7, '2025-09-09 09:18:49.284019+00', 'create_analysis_results_table');