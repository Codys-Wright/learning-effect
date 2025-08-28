import { envVars } from "@/lib/env-vars";
import { Atom } from "@effect-atom/atom-react";
import { type HttpApiClient, type HttpApiGroup, HttpClient } from "@effect/platform";
import { Context, Duration, Effect, Random, Schedule } from "effect";

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

export const makeFeatureRuntimeService = <TGroup extends HttpApiGroup.HttpApiGroup.Any>(
  group: TGroup,
) => {
  const FeatureApiClientService = Context.GenericTag<RequiresGroup<TGroup>>(
    `@org/FeatureApiClient/${group.identifier}`,
  );

  const runtime = Atom.context({ memoMap: Atom.defaultMemoMap });

  // Helper function that provides typed access to the group methods
  const useGroupApi = (client: RequiresGroup<TGroup>): GroupMethods<TGroup> => {
    const groupName = group.identifier as HttpApiGroup.HttpApiGroup.Name<TGroup>;
    return client.http[groupName];
  };

  return {
    runtime,
    service: FeatureApiClientService,
    groupName: group.identifier as HttpApiGroup.HttpApiGroup.Name<TGroup>,
    // Export types for convenience
    // Export the helper function
    useGroupApi,
  } as const;
};
