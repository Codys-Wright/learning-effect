import { configureApiClient, envVars } from "@core/client";
import { FetchHttpClient, HttpApiClient } from "@effect/platform";
import { Effect } from "effect";
import { QuizApi } from "../domain/quiz-api";

export class QuizApiClient extends Effect.Service<QuizApiClient>()("QuizApiClient", {
  dependencies: [FetchHttpClient.layer],
  scoped: Effect.gen(function* () {
    return {
      http: yield* HttpApiClient.make(QuizApi, {
        baseUrl: envVars.API_URL,
        transformClient: configureApiClient,
      }),
    } as const;
  }),
}) {}
