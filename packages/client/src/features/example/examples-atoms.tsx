import { makeAtomRuntime } from "@/atom/make-atom-runtime";
import { withToast } from "@/atom/with-toast";
import { ApiClient } from "@/services/common/api-client";
import { Atom, Registry, Result } from "@effect-atom/atom-react";
import { type Example, type ExampleId, type UpsertExamplePayload } from "@org/domain/example-rpc";
import { Array, Data, Effect } from "effect";

const runtime = makeAtomRuntime(ApiClient.Default);

const remoteAtom = runtime.atom(
  Effect.fn(function* () {
    const api = yield* ApiClient;
    return yield* api.http.examples.list();
  }),
);

type Action = Data.TaggedEnum<{
  Upsert: { readonly example: Example };
  Del: { readonly id: ExampleId };
}>;
const Action = Data.taggedEnum<Action>();

export const examplesAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(remoteAtom),
    (ctx, action: Action) => {
      const result = ctx.get(examplesAtom);
      if (!Result.isSuccess(result)) return;

      const update = Action.$match(action, {
        Del: ({ id }) => result.value.filter((example) => example.id !== id),
        Upsert: ({ example }) => {
          const existing = result.value.find((e) => e.id === example.id);
          if (existing) return result.value.map((e) => (e.id === example.id ? example : e));
          return Array.prepend(result.value, example);
        },
      });

      ctx.setSelf(Result.success(update));
    },
  ),
  {
    remote: remoteAtom,
  },
);

export const upsertExampleAtom = runtime.fn(
  Effect.fn(
    function* (payload: UpsertExamplePayload) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      const example = yield* api.http.examples.upsert({ payload });
      registry.set(examplesAtom, Action.Upsert({ example }));
    },
    withToast({
      onWaiting: (payload) => `${payload.id !== undefined ? "Updating" : "Creating"} example...`,
      onSuccess: "Example saved",
      onFailure: "Failed to save example",
    }),
  ),
);

export const deleteExampleAtom = runtime.fn(
  Effect.fn(
    function* (id: ExampleId) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      yield* api.http.examples.delete({ payload: { id } });
      registry.set(examplesAtom, Action.Del({ id }));
    },
    withToast({
      onWaiting: "Deleting example...",
      onSuccess: "Example deleted",
      onFailure: "Failed to delete example",
    }),
  ),
);
