import { Atom, AtomHttpApi, Registry, Result } from "@effect-atom/atom-react";
import { FetchHttpClient } from "@effect/platform";
import type { Quiz, QuizId, UpsertQuizPayload } from "@features/quiz/domain";
import { Data, Effect, Array as EffectArray } from "effect";
import { configureApiClient, envVars } from "packages/core/client/src/index.js";
import { QuizApi } from "../domain/quiz-api.js";

// Define action types for local state management
type Action = Data.TaggedEnum<{
  Upsert: { readonly quiz: Quiz };
  Del: { readonly id: QuizId };
}>;
const Action = Data.taggedEnum<Action>();

// Create the QuizClient using AtomHttpApi.Tag with default configuration
export class QuizClient extends AtomHttpApi.Tag<QuizClient>()("QuizClient", {
  api: QuizApi,
  httpClient: FetchHttpClient.layer,
  // Apps can override these when configuring
  baseUrl: envVars.API_URL,
  transformClient: configureApiClient,
}) {}

// Remote atom that fetches the quiz list with caching and reactivity
const remoteAtom = QuizClient.query("Quizzes", "list", {
  reactivityKeys: ["quizzes"],
});

// Main quizzes atom with local state management
export const quizzesAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(remoteAtom),
    (ctx: Atom.Context, action: Action) => {
      const result = ctx.get(quizzesAtom);
      if (!Result.isSuccess(result)) return;

      const quizzes = result.value as Quiz[];
      const update = Action.$match(action, {
        Del: ({ id }) => quizzes.filter((quiz) => quiz.id !== id),
        Upsert: ({ quiz }) => {
          const existing = quizzes.find((q) => q.id === quiz.id);
          if (existing !== undefined) {
            return quizzes.map((q) => (q.id === quiz.id ? quiz : q));
          }
          return EffectArray.prepend(quizzes, quiz);
        },
      });

      ctx.setSelf(Result.success(update));
    },
  ),
  {
    remote: remoteAtom,
  },
);

// Simple upsert mutation with automatic reactivity
export const upsertQuizAtom = QuizClient.mutation("Quizzes", "upsert");

// Simple delete mutation with automatic reactivity
export const deleteQuizAtom = QuizClient.mutation("Quizzes", "delete");

// Custom upsert with local state update (for immediate UI updates)
export const upsertQuizWithImmediateUpdateAtom = QuizClient.runtime.fn<UpsertQuizPayload, Quiz>()(
  Effect.gen(function* (payload: UpsertQuizPayload) {
    const registry = yield* Registry.AtomRegistry;
    const client = yield* QuizClient;
    const quiz = yield* client.Quizzes.upsert({ payload });

    // Immediately update local state for optimistic UI
    registry.set(quizzesAtom, Action.Upsert({ quiz }));

    return quiz;
  }),
);

// Custom delete with local state update (for immediate UI updates)
export const deleteQuizWithImmediateUpdateAtom = QuizClient.runtime.fn<QuizId, void>()(
  Effect.gen(function* (id: QuizId) {
    const registry = yield* Registry.AtomRegistry;
    const client = yield* QuizClient;

    // Optimistically remove from local state first
    registry.set(quizzesAtom, Action.Del({ id }));

    // Then perform the actual delete
    yield* client.Quizzes.delete({ payload: { id } });
  }),
);
