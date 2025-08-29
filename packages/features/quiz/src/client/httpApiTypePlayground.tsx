import { configureApiClient, envVars } from "@core/client";
import { AtomHttpApi, Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { FetchHttpClient } from "@effect/platform";
import * as HttpApi from "@effect/platform/HttpApi";
import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import { Badge, Button, Card } from "@org/shadcn";
import { Effect } from "effect";
import * as Schema from "effect/Schema";
import React from "react";

// Define a reusable counter group that can be shared across APIs
const CounterGroup = HttpApiGroup.make("counter")
  .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
  .add(HttpApiEndpoint.post("increment", "/increment"));

// Define your api using the shared counter group
class Api extends HttpApi.make("api").add(CounterGroup) {}

// Define another API that uses the same shared counter group with a prefix
class AnotherApi extends HttpApi.make("another-api").add(CounterGroup).prefix("/api") {}

// Create clients for both APIs (both will work identically since they use the same CounterGroup)
const CountClient = AtomHttpApi.Tag<Api>()("Api", {
  api: Api,
  httpClient: FetchHttpClient.layer,
  baseUrl: envVars.API_URL,
  transformClient: configureApiClient,
});

// Another client using the compatible API (commented out to avoid unused warning)
// const AnotherCountClient = AtomHttpApi.Tag<AnotherApi>()("AnotherApi", {
//   api: AnotherApi,
//   httpClient: FetchHttpClient.layer,
//   baseUrl: envVars.API_URL,
//   transformClient: configureApiClient,
// });

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
    <Card>
      <Card.Header>
        <Card.Title>Counter Demo</Card.Title>
        <Card.Description>Interactive counter using AtomHttpApi</Card.Description>
      </Card.Header>
      <Card.Content className="space-y-4">
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Count: {Result.getOrElse(count, () => 0)}
          </Badge>
        </div>
        <Button onClick={() => increment()} className="w-full">
          Increment Counter
        </Button>
      </Card.Content>
    </Card>
  );
}

// Or you can define custom atoms using the `CountClient.runtime`
const incrementAtom = CountClient.runtime.fn(
  Effect.fnUntraced(function* () {
    const client = yield* CountClient; // Use the Tag to access the client
    yield* client.counter.increment();
  }),
);

// Example of using the client in an Effect service (commented out)
// class MyService extends Effect.Service<MyService>()("MyService", {
//   dependencies: [CountClient.layer], // Add the CountClient.layer as a dependency
//   scoped: Effect.gen(function* () {
//     const client = yield* CountClient; // Use the Tag to access the client
//     const useClient = () => client.counter.increment();
//     return { useClient } as const;
//   }),
// }) {}

// Extract endpoint information from APIs for comparison
const extractApiEndpoints = (api: any) => {
  const endpoints: Array<{
    group: string;
    method: string;
    path: string;
    endpoint: string;
  }> = [];

  HttpApi.reflect(api as any, {
    onEndpoint: (options) => {
      endpoints.push({
        group: options.group.identifier,
        method: options.endpoint.method,
        path: options.endpoint.path,
        endpoint: options.endpoint.path, // Use path as identifier since id doesn't exist
      });
    },
    onGroup: () => {}, // We don't need group-level info for this comparison
  });

  return endpoints;
};

// Function to find the common prefix path to CounterGroup endpoints
const findCounterGroupPrefix = (endpoints: typeof apiEndpoints) => {
  const counterEndpoints = endpoints.filter((e) => e.group === "counter");

  if (counterEndpoints.length === 0) return "";

  // Extract the common prefix path by comparing all counter endpoints
  const paths = counterEndpoints.map((e) => e.path);

  if (paths.length === 0) return "";

  // Find the common prefix among all counter endpoint paths
  const firstPath = paths[0];
  if (!firstPath) return "";

  let commonPrefix = "";

  for (let i = 1; i <= firstPath.length; i++) {
    const prefix = firstPath.substring(0, i);
    if (paths.every((path) => path.startsWith(prefix))) {
      commonPrefix = prefix;
    } else {
      break;
    }
  }

  // Remove the "/counter" part to get just the prefix
  return commonPrefix.replace(/\/counter$/, "").replace(/\/counter\/$/, "");
};

// Function to compare two APIs and find their path differences
const compareApiPrefixes = (
  api1Endpoints: typeof apiEndpoints,
  api2Endpoints: typeof apiEndpoints,
) => {
  const api1Prefix = findCounterGroupPrefix(api1Endpoints);
  const api2Prefix = findCounterGroupPrefix(api2Endpoints);

  return {
    api1Prefix,
    api2Prefix,
    difference: api1Prefix !== api2Prefix,
    commonPrefix: api1Prefix === api2Prefix ? api1Prefix : "",
    api1Extra: api1Prefix.replace(api2Prefix, "").replace(/^\//, ""),
    api2Extra: api2Prefix.replace(api1Prefix, "").replace(/^\//, ""),
  };
};

const apiEndpoints = extractApiEndpoints(Api);
const anotherApiEndpoints = extractApiEndpoints(AnotherApi);

// Check if both APIs implement the CounterGroup
const apiHasCounterGroup = apiEndpoints.some((e) => e.group === "counter");
const anotherApiHasCounterGroup = anotherApiEndpoints.some((e) => e.group === "counter");

// Find the differences in paths
const counterEndpointsApi = apiEndpoints.filter((e) => e.group === "counter");
const counterEndpointsAnother = anotherApiEndpoints.filter((e) => e.group === "counter");

// Compare the prefixes between the two APIs
const prefixComparison = compareApiPrefixes(apiEndpoints, anotherApiEndpoints);

export const PlaygroundPageComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            API Comparison: CounterGroup Implementation
          </h1>
          <p className="text-muted-foreground mt-2">
            Comparing how different APIs implement the same CounterGroup with different prefixes
          </p>
        </div>

        <Card>
          <Card.Header>
            <Card.Title>API Structure Comparison</Card.Title>
            <Card.Description>
              Verification that both APIs implement the CounterGroup
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <span className="font-medium">Api implements CounterGroup:</span>
              <Badge variant={apiHasCounterGroup ? "default" : "destructive"}>
                {apiHasCounterGroup ? "✅ Yes" : "❌ No"}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <span className="font-medium">AnotherApi implements CounterGroup:</span>
              <Badge variant={anotherApiHasCounterGroup ? "default" : "destructive"}>
                {anotherApiHasCounterGroup ? "✅ Yes" : "❌ No"}
              </Badge>
            </div>
          </Card.Content>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>Api Endpoints</Card.Title>
              <Card.Description>All endpoints in the Api</Card.Description>
            </Card.Header>
            <Card.Content>
              <ul className="space-y-2">
                {apiEndpoints.map((endpoint, index) => (
                  <li key={index} className="flex flex-col p-3 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{endpoint.method.toUpperCase()}</Badge>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Group: {endpoint.group}, Endpoint: {endpoint.endpoint}
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>AnotherApi Endpoints</Card.Title>
              <Card.Description>All endpoints in the AnotherApi</Card.Description>
            </Card.Header>
            <Card.Content>
              <ul className="space-y-2">
                {anotherApiEndpoints.map((endpoint, index) => (
                  <li key={index} className="flex flex-col p-3 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{endpoint.method.toUpperCase()}</Badge>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Group: {endpoint.group}, Endpoint: {endpoint.endpoint}
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        </div>

        <Card>
          <Card.Header>
            <Card.Title>CounterGroup Path Differences</Card.Title>
            <Card.Description>
              Comparing how the same CounterGroup is exposed at different paths
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Api Counter Endpoints:</h4>
                <ul className="space-y-2">
                  {counterEndpointsApi.map((endpoint, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <Badge variant="secondary" className="text-xs">
                        {endpoint.method.toUpperCase()}
                      </Badge>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">AnotherApi Counter Endpoints:</h4>
                <ul className="space-y-2">
                  {counterEndpointsAnother.map((endpoint, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <Badge variant="secondary" className="text-xs">
                        {endpoint.method.toUpperCase()}
                      </Badge>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🔍</span>
                <span className="font-semibold">Path Analysis Results:</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="font-medium text-primary">Api CounterGroup Prefix:</div>
                    <Badge variant="outline" className="font-mono">
                      {prefixComparison.api1Prefix || "(root level)"}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-primary">AnotherApi CounterGroup Prefix:</div>
                    <Badge variant="outline" className="font-mono">
                      {prefixComparison.api2Prefix || "(root level)"}
                    </Badge>
                  </div>
                </div>

                {prefixComparison.difference ? (
                  <div className="mt-3 p-3 bg-warning/10 border border-warning/20 rounded">
                    <div className="font-medium text-warning mb-1">
                      Prefix Differences Detected:
                    </div>
                    <div className="text-xs space-y-1">
                      {prefixComparison.api1Extra && (
                        <div>
                          <strong>Api extra path:</strong>{" "}
                          <code>/{prefixComparison.api1Extra}</code>
                        </div>
                      )}
                      {prefixComparison.api2Extra && (
                        <div>
                          <strong>AnotherApi extra path:</strong>{" "}
                          <code>/{prefixComparison.api2Extra}</code>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded">
                    <div className="font-medium text-green-800 mb-1">✅ Perfect Match:</div>
                    <div className="text-xs text-green-700">
                      Both APIs have CounterGroup at the same path level
                      {prefixComparison.commonPrefix && (
                        <span>
                          {" "}
                          (<code>{prefixComparison.commonPrefix}</code>)
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-3 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <strong>Api full paths:</strong>
                    <ul className="mt-1 space-y-1">
                      {counterEndpointsApi.slice(0, 2).map((endpoint, index) => (
                        <li key={index} className="font-mono text-muted-foreground">
                          {endpoint.path}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>AnotherApi full paths:</strong>
                    <ul className="mt-1 space-y-1">
                      {counterEndpointsAnother.slice(0, 2).map((endpoint, index) => (
                        <li key={index} className="font-mono text-muted-foreground">
                          {endpoint.path}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Interactive Counter Demo</Card.Title>
            <Card.Description>
              Test the counter functionality with both API configurations
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <AnotherComponent />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};
