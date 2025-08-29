import { configureApiClient, envVars } from "@core/client";
import { AtomHttpApi, Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { FetchHttpClient } from "@effect/platform";
import * as HttpApi from "@effect/platform/HttpApi";
import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import { Badge, Button, Card } from "@org/shadcn";
import { Effect, Schema } from "effect";
import React from "react";

export const CounterGroup = HttpApiGroup.make("counter")
  .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
  .add(HttpApiEndpoint.post("increment", "/increment"));

// Define your api using the shared counter group
export class Api extends HttpApi.make("api").add(CounterGroup) {}

// Define another API that uses the same shared counter group with a prefix
export class AnotherApi extends HttpApi.make("another-api")
  .add(CounterGroup)
  .prefix("/api/banana") {}

// Use AtomHttpApi.Tag to create a special Context.Tag that builds the client
export class CountClient extends AtomHttpApi.Tag<CountClient>()("CountClient", {
  api: Api,
  // Provide a Layer that provides the HttpClient
  httpClient: FetchHttpClient.layer,
  baseUrl: envVars.API_URL,
  transformClient: configureApiClient,
}) {}

// Or you can define custom atoms using the `CountClient.runtime`
const incrementAtom = CountClient.runtime.fn(
  Effect.fnUntraced(function* () {
    const client = yield* CountClient; // Use the Tag to access the client
    yield* client.counter.increment();
  }),
);

const listAtom = CountClient.runtime.fn(
  Effect.fnUntraced(function* () {
    const client = yield* CountClient;
    const list = yield* client.counter.count();
    return list;
  }),
);

export function SomeComponent() {
  // Use `CountClient.mutation` for mutations
  const increment = useAtomSet(incrementAtom);
  const count = useAtomValue(listAtom);

  return (
    <Card className="w-full max-w-md">
      <Card.Header>
        <Card.Title>Counter Demo</Card.Title>
        <Card.Description>A simple counter using AtomHttpApi</Card.Description>
      </Card.Header>
      <Card.Content className="space-y-4">
        <div className="flex items-center justify-center">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Count: {Result.getOrElse(count, () => 0)}
          </Badge>
        </div>
        <Button onClick={() => increment()} className="w-full" size="lg">
          Increment Counter
        </Button>
      </Card.Content>
    </Card>
  );
}

export const PlaygroundPageComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">AtomHttpApi Playground</h1>
          <p className="text-muted-foreground">
            A simple counter demo using AtomHttpApi with custom atoms and runtime functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Demo Component</h2>
            <SomeComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
