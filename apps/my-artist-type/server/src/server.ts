import { HttpApiScalar, HttpLayerRouter, HttpServer, HttpServerResponse } from "@effect/platform";
import { DomainApi } from "@my-artist-type/domain";
import { Layer } from "effect";
import { ActiveQuizRpcLive } from "./domain/active-quiz/active-quiz-rpc-live.js";
import { AnalysisEngineRpcLive } from "./domain/analysis/analysis-engine-rpc-live.js";
import { AnalysisRpcLive } from "./domain/analysis/analysis-rpc-live.js";
import { QuizzesRpcLive } from "./domain/quiz/quizzes-rpc-live.js";
import { ResponsesRpcLive } from "./domain/responses/responses-rpc-live.js";

export const ApiLive = HttpLayerRouter.addHttpApi(DomainApi, {
  openapiPath: "/api/docs/openapi.json",
}).pipe(
  Layer.provide([
    ActiveQuizRpcLive,
    QuizzesRpcLive,
    ResponsesRpcLive,
    AnalysisEngineRpcLive,
    AnalysisRpcLive,
  ]),
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
