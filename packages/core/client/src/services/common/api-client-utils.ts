import { envVars } from "@/lib/env-vars";
import { HttpClient } from "@effect/platform";
import { Duration, Effect, Random, Schedule } from "effect";

export const configureApiClient = (client: HttpClient.HttpClient) =>
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
  );
