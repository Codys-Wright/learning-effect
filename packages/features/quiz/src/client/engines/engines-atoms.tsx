import { ApiClient, makeAtomRuntime, withToast } from "@core/client";
import { Atom, Registry, Result } from "@effect-atom/atom-react";
import type {
  AnalysisEngine,
  AnalysisEngineId,
  UpsertAnalysisEnginePayload,
} from "@features/quiz/domain";
import { Data, Effect, Array as EffectArray } from "effect";

const runtime = makeAtomRuntime(ApiClient.Default);

const remoteAtom = runtime.atom(
  Effect.fn(function* () {
    const api = yield* ApiClient;
    return yield* api.http.AnalysisEngine.list();
  }),
);

type Action = Data.TaggedEnum<{
  Upsert: { readonly engine: AnalysisEngine };
  Del: { readonly id: AnalysisEngineId };
}>;
const Action = Data.taggedEnum<Action>();

export const enginesAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(remoteAtom),
    (ctx, action: Action) => {
      const result = ctx.get(enginesAtom);
      if (!Result.isSuccess(result)) return;

      const update = Action.$match(action, {
        Del: ({ id }) => result.value.filter((engine) => engine.id !== id),
        Upsert: ({ engine }) => {
          const existing = result.value.find((e) => e.id === engine.id);
          if (existing !== undefined)
            return result.value.map((e) => (e.id === engine.id ? engine : e));
          return EffectArray.prepend(result.value, engine);
        },
      });

      ctx.setSelf(Result.success(update));
    },
  ),
  {
    remote: remoteAtom,
  },
);

export const upsertEngineAtom = runtime.fn(
  Effect.fn(
    function* (payload: UpsertAnalysisEnginePayload) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      const engine = yield* api.http.AnalysisEngine.upsert({ payload });
      registry.set(enginesAtom, Action.Upsert({ engine }));
    },
    withToast({
      onWaiting: (payload) => `${payload.name !== "" ? "Updating" : "Creating"} analysis engine...`,
      onSuccess: "Analysis engine saved",
      onFailure: "Failed to save analysis engine",
    }),
  ),
);

export const deleteEngineAtom = runtime.fn(
  Effect.fn(
    function* (id: AnalysisEngineId) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;
      yield* api.http.AnalysisEngine.delete({ payload: { id } });
      registry.set(enginesAtom, Action.Del({ id }));
    },
    withToast({
      onWaiting: "Deleting analysis engine...",
      onSuccess: "Analysis engine deleted",
      onFailure: "Failed to delete analysis engine",
    }),
  ),
);

export const getEngineByIdAtom = runtime.fn(
  Effect.fn(
    function* (id: AnalysisEngineId) {
      const api = yield* ApiClient;
      return yield* api.http.AnalysisEngine.byId({ payload: { id } });
    },
    withToast({
      onWaiting: "Loading analysis engine...",
      onSuccess: "Analysis engine loaded",
      onFailure: "Failed to load analysis engine",
    }),
  ),
);

export const getEngineBySlugAtom = runtime.fn(
  Effect.fn(
    function* (slug: string) {
      const api = yield* ApiClient;
      return yield* api.http.AnalysisEngine.bySlug({ payload: { slug } });
    },
    withToast({
      onWaiting: "Loading analysis engine...",
      onSuccess: "Analysis engine loaded",
      onFailure: "Failed to load analysis engine",
    }),
  ),
);

export const getEngineBySlugAndVersionAtom = runtime.fn(
  Effect.fn(
    function* (params: { slug: string; version: string }) {
      const api = yield* ApiClient;
      return yield* api.http.AnalysisEngine.bySlugAndVersion({ payload: params });
    },
    withToast({
      onWaiting: "Loading analysis engine...",
      onSuccess: "Analysis engine loaded",
      onFailure: "Failed to load analysis engine",
    }),
  ),
);
