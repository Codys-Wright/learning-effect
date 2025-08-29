import { AtomHttpApi, Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import * as FetchHttpClient from "@effect/platform/FetchHttpClient";
import * as HttpApi from "@effect/platform/HttpApi";
import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { configureApiClient, envVars } from "packages/core/client/src";

const CounterGroup = HttpApiGroup.make("counter")
  .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
  .add(HttpApiEndpoint.post("increment", "/increment"));

export class CounterApi extends HttpApi.make("CounterApi").add(CounterGroup) {}

// Define your api
class AppApi extends HttpApi.make("AppApi").add(CounterGroup).prefix("/api") {}

// Use AtomHttpApi.Tag to create a special Context.Tag that builds the client
class CountClient extends AtomHttpApi.Tag<CountClient>()("CountClient", {
  api: AppApi,
  // Provide a Layer that provides the HttpClient
  httpClient: FetchHttpClient.layer,
  baseUrl: envVars.API_URL,
  transformClient: configureApiClient,
}) {}

function SomeComponent() {
  // Use `CountClient.query` for readonly queries
  const count = useAtomValue(
    CountClient.query("counter", "count", {
      // You can register reactivity keys, which can be used to invalidate
      // the query
      reactivityKeys: ["count"],
    }),
  );

  // Use `CountClient.mutation` for mutations
  const increment = useAtomSet(CountClient.mutation("counter", "increment"));

  return (
    <div>
      <p>Count: {Result.getOrElse(count, () => 0)}</p>
      <button
        onClick={() =>
          increment({
            payload: void 0,
            // Mutations can also have reactivity keys, which will invalidate
            // the query when the mutation is done.
            reactivityKeys: ["count"],
          })
        }
      >
        Increment
      </button>
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
