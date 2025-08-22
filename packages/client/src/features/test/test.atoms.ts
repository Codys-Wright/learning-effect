import { makeAtomRuntime } from "@/atom/make-atom-runtime";
import { withToast } from "@/atom/with-toast";
import { ApiClient } from "@/services/common/api-client";
import { Atom, Registry, Result } from "@effect-atom/atom-react";
import { type Test, type TestId, type UpsertTestPayload } from "@org/domain/test-rpc";
import { Array, Data, Effect } from "effect";

const runtime = makeAtomRuntime(ApiClient.Default);

const remoteAtom = runtime.atom(
  Effect.fn(function* () {
    const api = yield* ApiClient;
    return yield* api.http.tests.list();
  }),
);

type Action = Data.TaggedEnum<{
  Upsert: { readonly test: Test };
  Del: { readonly id: TestId };
}>;
const Action = Data.taggedEnum<Action>();

export const testsAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(remoteAtom),
    (ctx, action: Action) => {
      const result = ctx.get(testsAtom);
      if (!Result.isSuccess(result)) return;

      const update = Action.$match(action, {
        Del: ({ id }) => result.value.filter((test) => test.id !== id),
        Upsert: ({ test }) => {
          const existing = result.value.find((s) => s.id === test.id);
          if (existing) return result.value.map((s) => (s.id === test.id ? test : s));
          return Array.prepend(result.value, test);
        },
      });

      ctx.setSelf(Result.success(update));
    },
  ),
  {
    remote: remoteAtom,
  },
);

export const upsertTestAtom = runtime.fn(
  Effect.fn(
    function* (payload: UpsertTestPayload) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      const test = yield* api.http.tests.upsert({ payload });
      registry.set(testsAtom, Action.Upsert({ test }));
    },
    withToast({
      onWaiting: (payload) => `${payload.id !== undefined ? "Updating" : "Creating"} test...`,
      onSuccess: "Test saved",
      onFailure: "Failed to save test",
    }),
  ),
);

export const deleteTestAtom = runtime.fn(
  Effect.fn(
    function* (id: TestId) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      yield* api.http.tests.delete({ payload: { id } });
      registry.set(testsAtom, Action.Del({ id }));
    },
    withToast({
      onWaiting: "Deleting test...",
      onSuccess: "Test deleted",
      onFailure: "Failed to delete test",
    }),
  ),
);
