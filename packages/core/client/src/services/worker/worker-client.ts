import * as BrowserWorker from "@effect/platform-browser/BrowserWorker";
import * as RpcClient from "@effect/rpc/RpcClient";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { WorkerRpc } from "./worker-rpc";

// Use a simple Worker constructor that works in both environments
const createWorker = () => {
  return new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
};

const RpcProtocol = RpcClient.layerProtocolWorker({ size: 1, concurrency: 1 }).pipe(
  Layer.provide(BrowserWorker.layerPlatform(createWorker)),
  Layer.orDie,
);

export class WorkerClient extends Effect.Service<WorkerClient>()("@org/WorkerClient", {
  dependencies: [RpcProtocol],
  scoped: Effect.gen(function* () {
    return {
      client: yield* RpcClient.make(WorkerRpc),
    };
  }),
}) {}
