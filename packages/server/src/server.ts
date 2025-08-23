import { HttpApiScalar, HttpLayerRouter, HttpServer, HttpServerResponse } from "@effect/platform";
import { DomainApi } from "@org/domain/domain-api";
import { Layer } from "effect";
import { ExamplesRpcLive } from "./domain/styles/examples-rpc-live.js";
import { StylesRpcLive } from "./domain/styles/styles-rpc-live.js";
import { TestsRpcLive } from "./domain/styles/tests-rpc-live.js";

const ApiLive = HttpLayerRouter.addHttpApi(DomainApi, {
  openapiPath: "/api/docs/openapi.json",
}).pipe(
  Layer.provide([StylesRpcLive, TestsRpcLive, ExamplesRpcLive]),
  Layer.provide(HttpServer.layerContext),
);

const HealthRouter = HttpLayerRouter.use((router) =>
  router.add("GET", "/api/health", HttpServerResponse.text("OK")),
);

const DocsRoute = HttpApiScalar.layerHttpLayerRouter({
  api: DomainApi,
  path: "/api/docs",
});

const CorsLayer = HttpLayerRouter.cors({
  allowedOrigins: ["*"],
  allowedMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "B3", "traceparent"],
  credentials: true,
});

const AllRoutes = Layer.mergeAll(ApiLive, HealthRouter, DocsRoute, CorsLayer);

// Making a web handler for use directly inside of tanstack start
export const { dispose: domainWebDispose, handler: domainWebHandler } =
  HttpLayerRouter.toWebHandler(AllRoutes);

// When the process is interrupted, we want to clean up resources
process.on("SIGINT", () => {
  domainWebDispose().then(
    () => {
      process.exit(0);
    },
    () => {
      process.exit(1);
    },
  );
});

// Export the main web handler for TanStack Start integration
export const webHandler = domainWebHandler;

// const HttpLive = HttpLayerRouter.serve(AllRoutes).pipe(
//   Layer.provide(
//     NodeHttpServer.layer(createServer, {
//       port: 3000,
//     }),
//   ),
// );

// // Traditional Node.js server for standalone deployment
// NodeRuntime.runMain(Layer.launch(HttpLive));
