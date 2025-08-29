import { configureApiClient, envVars } from "@core/client";
import { AtomHttpApi, Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { FetchHttpClient } from "@effect/platform";
import * as HttpApi from "@effect/platform/HttpApi";
import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import { Effect } from "effect";
import * as Schema from "effect/Schema";
import React from "react";

// Define your api
class Api extends HttpApi.make("api").add(
  HttpApiGroup.make("counter")
    .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
    .add(HttpApiEndpoint.post("increment", "/increment")),
) {}

const CountClient = AtomHttpApi.Tag<Api>()("Api", {
  api: Api,
  httpClient: FetchHttpClient.layer,
  baseUrl: envVars.API_URL,
  transformClient: configureApiClient,
});

function AnotherComponent() {
  // Use `CountClient.query` for readonly queries
  const count = useAtomValue(
    CountClient.query("counter", "count", {
      // You can register reactivity keys, which can be used to invalidate
      // the query
      reactivityKeys: ["count"],
    }),
  );

  // Use the custom incrementAtom
  const increment = useAtomSet(incrementAtom);

  return (
    <div>
      <p>Count: {Result.getOrElse(count, () => 0)}</p>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}

// Or you can define custom atoms using the `CountClient.runtime`
const incrementAtom = CountClient.runtime.fn(
  Effect.fnUntraced(function* () {
    const client = yield* CountClient; // Use the Tag to access the client
    yield* client.counter.increment();
  }),
);

// Or use it in your Effect services
class MyService extends Effect.Service<MyService>()("MyService", {
  dependencies: [CountClient.layer], // Add the CountClient.layer as a dependency
  scoped: Effect.gen(function* () {
    const client = yield* CountClient; // Use the Tag to access the client
    const useClient = () => client.counter.increment();
    return { useClient } as const;
  }),
}) {}

export const PlaygroundPageComponent: React.FC = () => {
  return (
    <React.Fragment>
      <AnotherComponent />
    </React.Fragment>
  );
};
