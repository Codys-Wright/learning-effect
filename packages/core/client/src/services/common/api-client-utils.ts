import { envVars } from "@/lib/env-vars";
import { Atom } from "@effect-atom/atom-react";
import { HttpApi, HttpApiClient, type HttpApiGroup, HttpClient } from "@effect/platform";
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

// Use the Client.Group type but pass the group as the Groups parameter
export type GroupMethods<TGroup extends HttpApiGroup.HttpApiGroup.Any> = HttpApiClient.Client.Group<
  TGroup, // Groups (single group)
  HttpApiGroup.HttpApiGroup.Name<TGroup>, // GroupName
  never, // E (error type)
  never // R (context type)
>;

export type RequiresGroup<TGroup extends HttpApiGroup.HttpApiGroup.Any> = {
  http: Record<HttpApiGroup.HttpApiGroup.Name<TGroup>, GroupMethods<TGroup>> &
    Record<string, unknown>;
};

export const makeFeatureRuntimeService = <
  TApi extends HttpApi.HttpApi.Any,
  TGroupName extends string,
>(
  api: TApi,
  groupName: TGroupName,
) => {
  // Create the actual API client service using the full API
  const ApiClientService = Effect.Service<{
    http: HttpApiClient.Client<TApi, never, never>;
  }>()(`@org/FeatureApiClient/${groupName}`, {
    dependencies: [FetchHttpClient.layer],
    scoped: Effect.gen(function* () {
      return {
        http: yield* HttpApiClient.make(api as HttpApi.HttpApi<string, any, unknown, unknown>, {
          baseUrl: envVars.API_URL,
          transformClient: configureApiClient,
        }),
      };
    }),
  });

  const runtime = Atom.context({ memoMap: Atom.defaultMemoMap });

  // Helper function that provides typed access to the group methods
  const useGroupApi = <T extends { http: Record<TGroupName, unknown> }>(
    client: T,
  ): T["http"][TGroupName] => {
    return client.http[groupName] as T["http"][TGroupName];
  };

  return {
    runtime,
    service: ApiClientService,
    groupName,
    useGroupApi,
  } as const;
};
