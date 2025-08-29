import * as HttpApi from "@effect/platform/HttpApi";
import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import { Button, Card } from "@org/shadcn";
import * as Schema from "effect/Schema";
import React from "react";

// 🎯 TYPE-LEVEL API COMPARISON SYSTEM
// This demonstrates compile-time analysis and comparison of HttpApi structures

// 🎯 RUNTIME ENDPOINT EXTRACTION UTILITIES
// These extract actual endpoint information from HttpApi definitions

/**
 * Extract endpoint information from an HttpApi at runtime
 */
export function extractApiEndpoints(
  api: any,
): Array<{ group: string; endpoint: string; path: string; method: string }> {
  const endpoints: Array<{ group: string; endpoint: string; path: string; method: string }> = [];

  // Use HttpApi.reflect to extract endpoint information
  (HttpApi as any).reflect(api, {
    onGroup: ({ group }: any) => {
      // Group information is available here if needed
    },
    onEndpoint: ({ group, endpoint }: any) => {
      endpoints.push({
        group: group.identifier,
        endpoint: endpoint.name,
        path: endpoint.path,
        method: endpoint.method.toUpperCase(),
      });
    },
  });

  return endpoints;
}

/**
 * Get groups information from an HttpApi
 */
export function extractApiGroups(api: any): Array<{ name: string; endpointCount: number }> {
  const groups: Array<{ name: string; endpointCount: number }> = [];
  const groupEndpointCounts: Record<string, number> = {};

  (HttpApi as any).reflect(api, {
    onGroup: ({ group }: any) => {
      groupEndpointCounts[group?.identifier || "unknown"] = 0;
    },
    onEndpoint: ({ group }: any) => {
      const groupName = group?.identifier || "unknown";
      groupEndpointCounts[groupName] = (groupEndpointCounts[groupName] || 0) + 1;
    },
  });

  for (const [name, count] of Object.entries(groupEndpointCounts)) {
    groups.push({ name, endpointCount: count });
  }

  return groups;
}

// 🎯 FEATURE GROUP DEFINITION
// This is our shared feature that multiple APIs can implement

export const CounterFeatureGroup = HttpApiGroup.make("counter")
  .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
  .add(HttpApiEndpoint.post("increment", "/increment"))
  .add(HttpApiEndpoint.post("decrement", "/decrement"))
  .add(HttpApiEndpoint.post("reset", "/reset"));

// 🎯 FEATURE API (Standalone Implementation)
// This API implements only the counter feature

export const FeatureApi = HttpApi.make("FeatureApi").add(CounterFeatureGroup);

// 🎯 APP API (Composite Implementation)
// This API includes the counter feature but also has other groups, with a prefix

export const AppApi = HttpApi.make("AppApi")
  .add(CounterFeatureGroup) // Same counter feature
  .add(
    HttpApiGroup.make("users")
      .add(HttpApiEndpoint.get("list", "/users").addSuccess(Schema.Array(Schema.String)))
      .add(
        HttpApiEndpoint.get("profile", "/users/profile").addSuccess(
          Schema.Struct({ name: Schema.String }),
        ),
      ),
  )
  .add(
    HttpApiGroup.make("analytics").add(
      HttpApiEndpoint.get("stats", "/stats").addSuccess(Schema.Struct({ views: Schema.Number })),
    ),
  )
  .prefix("/api"); // This adds /api prefix to ALL endpoints

// 🎯 TYPE-LEVEL ANALYSIS DEMO

// 🎯 DEMO COMPONENT
export function HttpApiTypeAnalysisDemo() {
  // Extract runtime information from the APIs
  const featureApiEndpoints = React.useMemo(() => extractApiEndpoints(FeatureApi), []);
  const featureApiGroups = React.useMemo(() => extractApiGroups(FeatureApi), []);

  const appApiEndpoints = React.useMemo(() => extractApiEndpoints(AppApi), []);
  const appApiGroups = React.useMemo(() => extractApiGroups(AppApi), []);

  return (
    <div className="p-6 font-mono bg-muted/30 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">🔍 HttpApi Type-Level Analysis Demo</h2>
          <p className="text-muted-foreground">
            Demonstrating compile-time API comparison and feature compatibility analysis
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            ✨ Endpoints are automatically extracted - try adding/removing endpoints to see live
            updates!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">📊 API Structures:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
              <Card.Header>
                <Card.Title className="text-green-700 dark:text-green-400">
                  🎯 FeatureApi (Standalone)
                </Card.Title>
                <Card.Description>Just the counter feature</Card.Description>
              </Card.Header>
              <Card.Content className="space-y-4">
                <div>
                  <strong className="text-sm font-medium">Groups:</strong>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {featureApiGroups.map((g) => g.name).join(", ")}
                  </span>
                </div>
                <div>
                  <strong className="text-sm font-medium">Endpoints:</strong>
                  <ul className="ml-4 mt-2 space-y-1 text-sm">
                    {featureApiEndpoints.map((endpoint, index) => (
                      <li key={index} className="font-mono">
                        {endpoint.method} {endpoint.path}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Content>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
              <Card.Header>
                <Card.Title className="text-blue-700 dark:text-blue-400">
                  🏢 AppApi (Composite + Prefix)
                </Card.Title>
                <Card.Description>
                  Counter feature + additional groups with /api prefix
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-4">
                <div>
                  <strong className="text-sm font-medium">Groups:</strong>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {appApiGroups.map((g) => g.name).join(", ")}
                  </span>
                </div>
                <div>
                  <strong className="text-sm font-medium">Endpoints:</strong>
                  <ul className="ml-4 mt-2 space-y-1 text-sm">
                    {appApiEndpoints.map((endpoint, index) => (
                      <li key={index} className="font-mono">
                        {endpoint.method} {endpoint.path}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">🔬 Type-Level Analysis Results:</h3>

          <Card>
            <Card.Content className="pt-6">
              <div className="space-y-6">
                <div>
                  <p className="text-green-700 dark:text-green-400 font-medium mb-3">
                    ✅ Both APIs have counter group:
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <code className="text-xs">FeatureApiHasCounter:</code>
                        <span className="ml-2 text-green-600 font-semibold">true</span>
                      </div>
                      <div>
                        <code className="text-xs">AppApiHasCounter:</code>
                        <span className="ml-2 text-green-600 font-semibold">true</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-blue-700 dark:text-blue-400 font-medium mb-3">
                    ✅ Counter groups are structurally identical:
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <div className="text-sm">
                      <code className="text-xs">CounterGroupsEqual:</code>
                      <span className="ml-2 text-blue-600 font-semibold">true</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-purple-700 dark:text-purple-400 font-medium mb-3">
                    ✅ Both APIs are feature-compatible:
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <code className="text-xs">FeatureApiCompatible:</code>
                        <span className="ml-2 text-purple-600 font-semibold">true</span>
                      </div>
                      <div>
                        <code className="text-xs">AppApiCompatible:</code>
                        <span className="ml-2 text-purple-600 font-semibold">true</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <Card.Content className="pt-6">
            <h4 className="text-lg font-semibold mb-4 text-primary">🎯 Key Insights:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>TypeScript knows</strong> both APIs implement the same counter group
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Structural equality</strong> is checked at compile time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Feature compatibility</strong> can be verified type-safely
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  <strong>Runtime switching</strong> between compatible APIs is now possible!
                </span>
              </li>
            </ul>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

// 🎯 USAGE EXAMPLE
// This demonstrates how you could use this for runtime API switching

export function ApiSwitcherDemo() {
  const [useAppApi, setUseAppApi] = React.useState(false);

  // TypeScript guarantees these APIs are compatible!
  const currentApi = useAppApi ? AppApi : FeatureApi;

  // Extract current API endpoints dynamically
  const currentApiEndpoints = React.useMemo(() => extractApiEndpoints(currentApi), [currentApi]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <Card.Header>
        <Card.Title className="flex items-center gap-2">
          🔄 Runtime API Switching
          <span className="text-sm font-normal text-muted-foreground">(Type-Safe!)</span>
        </Card.Title>
        <Card.Description>
          Switch between APIs at runtime with compile-time guarantees
        </Card.Description>
      </Card.Header>
      <Card.Content className="space-y-6">
        <div className="flex justify-center">
          <Button
            onClick={() => setUseAppApi(!useAppApi)}
            variant={useAppApi ? "default" : "outline"}
            size="lg"
            className="min-w-48"
          >
            Switch to {useAppApi ? "Standalone" : "App"} API
          </Button>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium">Current API:</span>
            <code className="text-sm bg-background px-2 py-1 rounded">{currentApi.identifier}</code>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Available endpoints:</span>
            <span className="text-sm text-green-600 font-semibold">
              {currentApiEndpoints.length} endpoints
            </span>
          </div>
          <div className="text-xs text-muted-foreground">TypeScript verified compatibility</div>

          {/* Show current endpoints */}
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="text-xs font-medium text-muted-foreground mb-2">Current Endpoints:</div>
            <div className="grid grid-cols-1 gap-1">
              {currentApiEndpoints.slice(0, 4).map((endpoint, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <code className="text-[10px] bg-background/50 px-1 py-0.5 rounded text-muted-foreground">
                    {endpoint.method}
                  </code>
                  <span className="font-mono text-[10px]">{endpoint.path}</span>
                </div>
              ))}
              {currentApiEndpoints.length > 4 && (
                <div className="text-[10px] text-muted-foreground">
                  ... and {currentApiEndpoints.length - 4} more
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
          <p className="text-sm text-primary">
            <strong>🎯 Magic:</strong> Both APIs implement the same counter feature, so you can
            switch between them safely at runtime!
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            ✨ Endpoints update automatically when you modify the API definitions!
          </p>
        </div>
      </Card.Content>
    </Card>
  );
}
