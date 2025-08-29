import { envVars } from "@/lib/env-vars";
import { type HttpApiClient, type HttpApiGroup, HttpClient } from "@effect/platform";
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

// Extract group methods type
export type GroupMethods<TGroup extends HttpApiGroup.HttpApiGroup.Any> = HttpApiClient.Client.Group<
  TGroup,
  HttpApiGroup.HttpApiGroup.Name<TGroup>,
  never,
  never
>;

export type RequiresGroup<TGroup extends HttpApiGroup.HttpApiGroup.Any> = {
  http: Record<HttpApiGroup.HttpApiGroup.Name<TGroup>, GroupMethods<TGroup>> &
    Record<string, unknown>;
};
