import { ApiClient, makeAtomRuntime, withToast } from "@core/client";
import { Atom, Registry, Result } from "@effect-atom/atom-react";
import type {
  AnalysisEngineId,
  AnalysisResult,
  AnalysisResultId,
  AnalysisSummary,
  AnalyzeResponseRequest,
  BatchAnalyzeRequest,
  ResponseId,
} from "@features/quiz/domain";
import { Data, Effect, Array as EffectArray } from "effect";

const runtime = makeAtomRuntime(ApiClient.Default);

// Remote atom for getting analysis results (empty by default to avoid UUID validation errors)
const analysisRemoteAtom = runtime.atom(Effect.succeed([] as ReadonlyArray<AnalysisResult>));

// Remote atom for getting analysis summary (null by default to avoid UUID validation errors)
const analysisSummaryRemoteAtom = runtime.atom(Effect.succeed(null as AnalysisSummary | null));

type Action = Data.TaggedEnum<{
  Upsert: { readonly analysis: AnalysisResult };
  Del: { readonly id: AnalysisResultId };
  BatchUpsert: { readonly analyses: ReadonlyArray<AnalysisResult> };
}>;
const Action = Data.taggedEnum<Action>();

// Analysis results atom that manages local state
export const analysisAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(analysisRemoteAtom),
    (ctx, action: Action) => {
      const result = ctx.get(analysisAtom);
      if (!Result.isSuccess(result)) return;

      const update = Action.$match(action, {
        Del: ({ id }) => result.value.filter((analysis) => analysis.id !== id),
        Upsert: ({ analysis }) => {
          const existing = result.value.find((a) => a.id === analysis.id);
          if (existing !== undefined)
            return result.value.map((a) => (a.id === analysis.id ? analysis : a));
          return EffectArray.prepend(result.value, analysis);
        },
        BatchUpsert: ({ analyses }) => {
          // For batch upsert, we replace the entire array
          return analyses;
        },
      });

      ctx.setSelf(Result.success(update));
    },
  ),
  {
    remote: analysisRemoteAtom,
  },
);

// Analysis summary atom
export const analysisSummaryAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(analysisSummaryRemoteAtom),
    (ctx, summary: AnalysisSummary | null) => {
      ctx.setSelf(Result.success(summary));
    },
  ),
  {
    remote: analysisSummaryRemoteAtom,
  },
);

export const analyzeResponseAtom = runtime.fn(
  Effect.fn(
    function* (params: { engineId: AnalysisEngineId; request: AnalyzeResponseRequest }) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      const analysis = yield* api.http.Analysis.analyze({
        payload: {
          engineId: params.engineId,
          request: params.request,
        },
      });
      registry.set(analysisAtom, Action.Upsert({ analysis }));
      return analysis;
    },
    withToast({
      onWaiting: "Analyzing response...",
      onSuccess: "Analysis completed",
      onFailure: "Failed to analyze response",
    }),
  ),
);

export const batchAnalyzeAtom = runtime.fn(
  Effect.fn(
    function* (params: { engineId: AnalysisEngineId; request: BatchAnalyzeRequest }) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      const analyses = yield* api.http.Analysis.batchAnalyze({
        payload: {
          engineId: params.engineId,
          request: params.request,
        },
      });
      registry.set(analysisAtom, Action.BatchUpsert({ analyses }));
      return analyses;
    },
    withToast({
      onWaiting: "Batch analyzing responses...",
      onSuccess: "Batch analysis completed",
      onFailure: "Failed to batch analyze responses",
    }),
  ),
);

export const deleteAnalysisAtom = runtime.fn(
  Effect.fn(
    function* (id: AnalysisResultId) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;
      yield* api.http.Analysis.deleteAnalysis({ payload: { id } });
      registry.set(analysisAtom, Action.Del({ id }));
    },
    withToast({
      onWaiting: "Deleting analysis...",
      onSuccess: "Analysis deleted",
      onFailure: "Failed to delete analysis",
    }),
  ),
);

export const getAnalysisByResponseAtom = runtime.fn(
  Effect.fn(
    function* (responseId: ResponseId) {
      const api = yield* ApiClient;
      return yield* api.http.Analysis.getAnalysis({ payload: { responseId } });
    },
    withToast({
      onWaiting: "Loading analysis...",
      onSuccess: "Analysis loaded",
      onFailure: "Failed to load analysis",
    }),
  ),
);

export const getAnalysisSummaryAtom = runtime.fn(
  Effect.fn(
    function* (engineId: AnalysisEngineId) {
      const api = yield* ApiClient;
      return yield* api.http.Analysis.getAnalysisSummary({ payload: { engineId } });
    },
    withToast({
      onWaiting: "Loading analysis summary...",
      onSuccess: "Analysis summary loaded",
      onFailure: "Failed to load analysis summary",
    }),
  ),
);
