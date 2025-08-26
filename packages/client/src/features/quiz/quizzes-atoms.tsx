import { makeAtomRuntime } from "@/atom/make-atom-runtime";
import { withToast } from "@/atom/with-toast";
import { ApiClient } from "@/services/common/api-client";
import { Atom, Registry, Result } from "@effect-atom/atom-react";
import { type Quiz, type QuizId, type UpsertQuizPayload } from "@org/domain/quiz/quiz-rpc";
import { Array, Data, Effect } from "effect";

const runtime = makeAtomRuntime(ApiClient.Default);

const remoteAtom = runtime.atom(
  Effect.fn(function* () {
    const api = yield* ApiClient;
    return yield* api.http.Quizzes.list();
  }),
);

type Action = Data.TaggedEnum<{
  Upsert: { readonly quiz: Quiz };
  Del: { readonly id: QuizId };
}>;
const Action = Data.taggedEnum<Action>();

export const quizzesAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(remoteAtom),
    (ctx, action: Action) => {
      const result = ctx.get(quizzesAtom);
      if (!Result.isSuccess(result)) return;

      const update = Action.$match(action, {
        Del: ({ id }) => result.value.filter((quiz) => quiz.id !== id),
        Upsert: ({ quiz }) => {
          const existing = result.value.find((q) => q.id === quiz.id);
          if (existing !== undefined) return result.value.map((q) => (q.id === quiz.id ? quiz : q));
          return Array.prepend(result.value, quiz);
        },
      });

      ctx.setSelf(Result.success(update));
    },
  ),
  {
    remote: remoteAtom,
  },
);

export const upsertQuizAtom = runtime.fn(
  Effect.fn(
    function* (payload: UpsertQuizPayload) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      const quiz = yield* api.http.Quizzes.upsert({ payload });
      registry.set(quizzesAtom, Action.Upsert({ quiz }));
    },
    withToast({
      onWaiting: (payload) => `${payload.id !== undefined ? "Updating" : "Creating"} quiz...`,
      onSuccess: "Quiz saved",
      onFailure: "Failed to save quiz",
    }),
  ),
);

export const deleteQuizAtom = runtime.fn(
  Effect.fn(
    function* (id: QuizId) {
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      yield* api.http.Quizzes.delete({ payload: { id } });
      registry.set(quizzesAtom, Action.Del({ id }));
    },
    withToast({
      onWaiting: "Deleting quiz...",
      onSuccess: "Quiz deleted",
      onFailure: "Failed to delete quiz",
    }),
  ),
);
