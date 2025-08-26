import { HttpApiScalar, HttpLayerRouter, HttpServer, HttpServerResponse } from "@effect/platform";
import { DomainApi } from "@org/domain/domain-api";
import { Layer } from "effect";
import { ExamplesRpcLive } from "./domain/examples/examples-rpc-live.js";
import { QuizzesRpcLive } from "./domain/quizzes/quizzes-rpc-live.js";
import { StylesRpcLive } from "./domain/styles/styles-rpc-live.js";

export const ApiLive = HttpLayerRouter.addHttpApi(DomainApi, {
  openapiPath: "/api/docs/openapi.json",
}).pipe(
  Layer.provide([StylesRpcLive, ExamplesRpcLive, QuizzesRpcLive]),
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
export const { dispose: webDispose, handler: webHandler } = HttpLayerRouter.toWebHandler(AllRoutes);

// When the process is interrupted, we want to clean up resources
process.on("SIGINT", () => {
  webDispose().then(
    () => {
      process.exit(0);
    },
    () => {
      process.exit(1);
    },
  );
});

// const HttpLive = HttpLayerRouter.serve(AllRoutes).pipe(
//   Layer.provide(
//     NodeHttpServer.layer(createServer, {
//       port: 5173,
//     }),
//   ),
// );

// // Traditional Node.js server for standalone deployment
// NodeRuntime.runMain(Layer.launch(HttpLive));
