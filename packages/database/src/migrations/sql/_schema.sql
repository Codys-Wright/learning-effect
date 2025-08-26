CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$;

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

ALTER TABLE ONLY public.effect_sql_migrations
    ADD CONSTRAINT effect_sql_migrations_pkey PRIMARY KEY (migration_id);

ALTER TABLE ONLY public.examples
    ADD CONSTRAINT examples_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_slug_key UNIQUE (slug);

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);

CREATE INDEX idx_quizzes_created_at ON public.quizzes USING btree (created_at);

CREATE INDEX idx_quizzes_deleted_at ON public.quizzes USING btree (deleted_at);

CREATE INDEX idx_quizzes_slug ON public.quizzes USING btree (slug);

CREATE TRIGGER update_examples_updated_at BEFORE UPDATE ON public.examples FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quizzes_updated_at BEFORE UPDATE ON public.quizzes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_styles_updated_at BEFORE UPDATE ON public.styles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tests_updated_at BEFORE UPDATE ON public.tests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (1, '2025-08-26 07:13:13.966257+00', 'create-styles_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (2, '2025-08-26 07:13:13.966257+00', 'create-tests_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (3, '2025-08-26 07:13:13.966257+00', 'create-examples_table');
INSERT INTO public.effect_sql_migrations (migration_id, created_at, name) VALUES (4, '2025-08-26 07:13:13.966257+00', 'create-quizzes_table');