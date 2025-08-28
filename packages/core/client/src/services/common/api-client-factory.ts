import { envVars } from "@/lib/env-vars";
import { FetchHttpClient, HttpApiClient, HttpClient } from "@effect/platform";
import { Duration, Effect, Random, Schedule } from "effect";

export class ApiClientFactory extends Effect.Service<ApiClientFactory>()("ApiClientFactory", {
  scoped: Effect.gen(function* () {
    const httpClient = yield* Effect.log("thing");

    return {
      makeClient: (api: any) =>
        HttpApiClient.make(api, {
          baseUrl: envVars.API_URL,
          transformClient: (client) =>
            client.pipe(
              HttpClient.transformResponse(
                Effect.fnUntraced(function* (response) {
                  if (envVars.EFFECTIVE_ENV === "dev") {
                    const sleepFor = yield* Random.nextRange(200, 500);
                    yield* Effect.sleep(Duration.millis(sleepFor));
                  }
                  return yield* response;
                }),
              ),
              HttpClient.retryTransient({
                times: 3,
                schedule: Schedule.exponential("100 millis"),
              }),
            ),
        }),
    };
  }),
  dependencies: [FetchHttpClient.layer],
}) {}
