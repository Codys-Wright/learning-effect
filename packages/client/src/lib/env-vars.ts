import * as Boolean from "effect/Boolean";
import * as Either from "effect/Either";
import { constant, pipe } from "effect/Function";
import { TreeFormatter } from "effect/ParseResult";
import * as Schema from "effect/Schema";

class EnvVars extends Schema.Class<EnvVars>("EnvVars")({
  ENV: Schema.Literal("dev", "staging", "prod", "local").annotations({
    decodingFallback: () => Either.right("prod" as const),
  }),
  API_URL: Schema.URL,
}) {}

const isVitest = typeof import.meta.env.VITEST !== "undefined";

const vitestMockEnvVars: typeof EnvVars.Encoded = {
  ENV: "dev",
  API_URL: "http://localhost:3000/api",
};

const getApiUrl = (env: string): string => {
  // For prod and staging, use Netlify's DEPLOY_URL if available
  if ((env === "prod" || env === "staging") && import.meta.env.VITE_DEPLOY_URL) {
    return String(import.meta.env.VITE_DEPLOY_URL);
  }

  // Fallback to the configured API_URL
  return String(import.meta.env.VITE_API_URL ?? "");
};

export const envVars = pipe(
  Boolean.match(isVitest, {
    onTrue: constant(vitestMockEnvVars),
    onFalse: constant({
      ENV: import.meta.env.VITE_ENV as unknown,
      API_URL: (() => {
        const env = import.meta.env.VITE_ENV as string;
        return getApiUrl(env);
      })() as unknown,
    } satisfies Record<keyof typeof EnvVars.Encoded, unknown>),
  }),
  Schema.decodeUnknownEither(EnvVars),
  Either.map((envVars) => ({
    ...envVars,
    EFFECTIVE_ENV: envVars.ENV === "local" ? "dev" : envVars.ENV,
  })),
  Either.getOrElse((parseIssue) => {
    throw new Error(
      `❌ Invalid environment variables: ${TreeFormatter.formatErrorSync(parseIssue)}`,
    );
  }),
);
