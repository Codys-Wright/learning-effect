import * as HttpApi from "@effect/platform/HttpApi";
import * as HttpApiEndpoint from "@effect/platform/HttpApiEndpoint";
import * as HttpApiGroup from "@effect/platform/HttpApiGroup";
import * as Schema from "effect/Schema";
import React from "react";

// 🎯 SIMPLE APIs
export const CounterApi = HttpApi.make("CounterApi").add(
  HttpApiGroup.make("counter")
    .add(HttpApiEndpoint.get("count", "/count").addSuccess(Schema.Number))
    .add(HttpApiEndpoint.post("increment", "/increment")),
);

export const MainAppApi = HttpApi.make("MainAppApi")
  .add(CounterApi as any)
  .prefix("/api");

// 🎯 DEMO COMPONENT - Shows runtime API switching
export function SimpleApiDemo() {
  const [useMainApp, setUseMainApp] = React.useState(false);

  const currentApi = useMainApp ? MainAppApi : CounterApi;
  const endpoints = useMainApp ? ["/api/count", "/api/increment"] : ["/count", "/increment"];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>🎯 Simple API Runtime Switching</h2>

      <button
        onClick={() => setUseMainApp(!useMainApp)}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Switch to {useMainApp ? "Standalone" : "Main App"} Mode
      </button>

      <div>
        <p>
          <strong>Current API:</strong> {currentApi.identifier}
        </p>
        <p>
          <strong>Endpoints:</strong> {endpoints.join(", ")}
        </p>
        <p>
          <strong>Mode:</strong> {useMainApp ? "Main App (/api prefix)" : "Standalone (no prefix)"}
        </p>
      </div>
    </div>
  );
}
