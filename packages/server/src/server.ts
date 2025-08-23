import { HttpApiScalar, HttpLayerRouter, HttpServerResponse } from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { DomainApi } from "@org/domain/domain-api";
import { Layer } from "effect";
import { createServer } from "node:http";
import { ExamplesRpcLive } from "./domain/styles/examples-rpc-live.js";
import { StylesRpcLive } from "./domain/styles/styles-rpc-live.js";
import { TestsRpcLive } from "./domain/styles/tests-rpc-live.js";

const ApiLive = HttpLayerRouter.addHttpApi(DomainApi, {
  openapiPath: "/docs/openapi.json",
}).pipe(Layer.provide([StylesRpcLive, TestsRpcLive, ExamplesRpcLive]));

const HealthRouter = HttpLayerRouter.use((router) =>
  router.add("GET", "/health", HttpServerResponse.text("OK")),
);

const DocsRoute = HttpApiScalar.layerHttpLayerRouter({
  api: DomainApi,
  path: "/docs",
});

const CorsLayer = HttpLayerRouter.cors({
  allowedOrigins: ["*"],
  allowedMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "B3", "traceparent"],
  credentials: true,
});

const AllRoutes = Layer.mergeAll(ApiLive, HealthRouter, DocsRoute, CorsLayer);

const HttpLive = HttpLayerRouter.serve(AllRoutes).pipe(
  Layer.provide(
    NodeHttpServer.layer(createServer, {
      port: 3000,
    }),
  ),
);

NodeRuntime.runMain(Layer.launch(HttpLive));
