import { ApiClient, makeAtomRuntime, withToast } from "@core/client";
import { Atom, Registry, Result } from "@effect-atom/atom-react";
import type { Quiz, QuizId, UpsertQuizPayload } from "@features/quiz/domain";
import { Data, Effect, Array as EffectArray } from "effect";

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
          return EffectArray.prepend(result.value, quiz);
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

// Helper function to publish/unpublish a quiz using upsert
export const toggleQuizPublishAtom = runtime.fn(
  Effect.fn(
    function* (args: { quiz: Quiz; isPublished: boolean }) {
      const { isPublished, quiz } = args;
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;
      const updatedQuiz = yield* api.http.Quizzes.upsert({
        payload: {
          id: quiz.id,
          isPublished,
          isTemp: quiz.isTemp, // Preserve temp status
          metadata: quiz.metadata ?? undefined,
          questions: quiz.questions,
          title: quiz.title,
          subtitle: quiz.subtitle,
          description: quiz.description,
          version: quiz.version,
        },
      });
      registry.set(quizzesAtom, Action.Upsert({ quiz: updatedQuiz }));
    },
    withToast({
      onWaiting: (args) =>
        args.isPublished === true ? "Publishing quiz..." : "Unpublishing quiz...",
      onSuccess: "Quiz publish status updated",
      onFailure: "Failed to update quiz publish status",
    }),
  ),
);

// Helper function to create a new version of a quiz
export const createNewQuizVersionAtom = runtime.fn(
  Effect.fn(
    function* (args: {
      quiz: Quiz;
      newVersion: string;
      incrementType: "major" | "minor" | "patch";
    }) {
      const { newVersion, quiz } = args;
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      // Create new version as draft (isPublished: false)
      const newQuiz = yield* api.http.Quizzes.upsert({
        payload: {
          // Don't include id to create a new quiz
          description: quiz.description,
          isPublished: false, // New versions start as drafts
          isTemp: false, // New versions are permanent (not temporary)
          metadata: quiz.metadata ?? undefined,
          questions: quiz.questions,
          subtitle: quiz.subtitle,
          title: quiz.title,
          version: newVersion,
        },
      });

      registry.set(quizzesAtom, Action.Upsert({ quiz: newQuiz }));

      // Also create a matching analysis engine version
      try {
        // Find the original analysis engine (same slug, different version)
        const allEngines = yield* api.http.AnalysisEngine.list();
        const originalEngine = allEngines.find(
          (engine) => engine.slug === quiz.slug && engine.isTemp === false,
        );

        if (originalEngine !== undefined) {
          // Create new engine version based on the original
          const newEngine = yield* api.http.AnalysisEngine.upsert({
            payload: {
              name: originalEngine.name, // Keep same name
              slug: originalEngine.slug, // Keep same slug
              version: newVersion, // Use the new version to match quiz
              description: originalEngine.description ?? undefined,
              scoringConfig: originalEngine.scoringConfig,
              endings: originalEngine.endings,
              metadata: originalEngine.metadata ?? undefined,
              isActive: originalEngine.isActive,
              isPublished: false, // New versions start as drafts
              isTemp: false, // New versions are permanent
            },
          });
        } else {
          console.warn(`No analysis engine found for quiz slug: ${quiz.slug}`);
        }
      } catch (error) {
        console.warn("Failed to create matching analysis engine:", error);
      }

      return newQuiz;
    },
    withToast({
      onWaiting: "Creating new version...",
      onSuccess: "Created new version successfully",
      onFailure: "Failed to create new version",
    }),
  ),
);

// Helper function to create a temporary quiz for editing
export const createTempQuizAtom = runtime.fn(
  Effect.fn(
    function* (args: { quiz: Quiz }) {
      const { quiz } = args;
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      // Create temporary copy for editing
      const tempQuiz = yield* api.http.Quizzes.upsert({
        payload: {
          // Don't include id to create a new quiz
          description: quiz.description,
          isPublished: false, // Temp quizzes are never published
          isTemp: true, // Mark as temporary
          metadata: quiz.metadata ?? undefined,
          questions: quiz.questions,
          subtitle: quiz.subtitle,
          title: `${quiz.title} (Editing)`,
          version: quiz.version,
        },
      });

      registry.set(quizzesAtom, Action.Upsert({ quiz: tempQuiz }));

      // Automatically create matching analysis engine
      // Find the original analysis engine (non-temp version with same base slug)
      const allEngines = yield* api.http.AnalysisEngine.list();
      const baseSlug = tempQuiz.slug.replace("-editing", ""); // Remove editing suffix
      const originalEngine = allEngines.find(
        (engine) => engine.slug === baseSlug && engine.isTemp === false,
      );

      if (originalEngine !== undefined) {
        try {
          // Create temp engine based on original
          yield* api.http.AnalysisEngine.upsert({
            payload: {
              name: `${originalEngine.name} (Editing)`,
              slug: `${tempQuiz.slug}-temp-${tempQuiz.id}`, // Use quiz ID for uniqueness
              version: originalEngine.version,
              description: originalEngine.description ?? undefined,
              scoringConfig: originalEngine.scoringConfig,
              endings: originalEngine.endings,
              metadata: originalEngine.metadata ?? undefined,
              isActive: originalEngine.isActive,
              isPublished: false,
              isTemp: true,
            },
          });
        } catch (error) {
          // Log error but don't fail the quiz creation
        }
      }

      return tempQuiz;
    },
    withToast({
      onWaiting: "Creating temporary copy...",
      onSuccess: "Ready to edit",
      onFailure: "Failed to create temporary copy",
    }),
  ),
);

// Helper function to auto-save temporary quiz changes
export const autoSaveTempQuizAtom = runtime.fn(
  Effect.fn(
    function* (args: { quiz: Quiz }) {
      const { quiz } = args;
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      // Only auto-save if it's a temporary quiz
      if (!quiz.isTemp) return quiz;

      const updatedQuiz = yield* api.http.Quizzes.upsert({
        payload: {
          id: quiz.id,
          description: quiz.description,
          isPublished: false,
          isTemp: true,
          metadata: quiz.metadata ?? undefined,
          questions: quiz.questions,
          subtitle: quiz.subtitle,
          title: quiz.title,
          version: quiz.version,
        },
      });

      registry.set(quizzesAtom, Action.Upsert({ quiz: updatedQuiz }));
      return updatedQuiz;
    },
    // No toast for auto-save to avoid spam
  ),
);

// Helper function to save temporary quiz changes
export const saveTempQuizAtom = runtime.fn(
  Effect.fn(
    function* (
      args:
        | { quiz: Quiz; action: "save" }
        | { quiz: Quiz; action: "saveAsNew"; newVersion: string },
    ) {
      const { action, quiz } = args;
      const registry = yield* Registry.AtomRegistry;
      const api = yield* ApiClient;

      // Only work with temporary quizzes
      if (!quiz.isTemp) return quiz;

      if (action === "save") {
        // Update the temp quiz to be permanent (overwrite mode)
        const savedQuiz = yield* api.http.Quizzes.upsert({
          payload: {
            id: quiz.id,
            description: quiz.description,
            isPublished: false, // Keep as draft when saving temp changes
            isTemp: false, // Make it permanent
            metadata: quiz.metadata ?? undefined,
            questions: quiz.questions,
            subtitle: quiz.subtitle,
            title: quiz.title.replace(" (Editing)", ""), // Remove editing suffix
            version: quiz.version,
          },
        });

        registry.set(quizzesAtom, Action.Upsert({ quiz: savedQuiz }));
        return savedQuiz;
      }

      // action === "saveAsNew"
      // Create new version from temp quiz
      const newQuiz = yield* api.http.Quizzes.upsert({
        payload: {
          // Don't include id to create a new quiz
          description: quiz.description,
          isPublished: false, // New versions start as drafts
          isTemp: false, // Make it permanent
          metadata: quiz.metadata ?? undefined,
          questions: quiz.questions,
          subtitle: quiz.subtitle,
          title: quiz.title.replace(" (Editing)", ""), // Remove editing suffix
          version: args.newVersion, // Use args.newVersion directly
        },
      });

      registry.set(quizzesAtom, Action.Upsert({ quiz: newQuiz }));

      // Delete the temporary quiz
      yield* api.http.Quizzes.delete({ payload: { id: quiz.id } });
      registry.set(quizzesAtom, Action.Del({ id: quiz.id }));

      return newQuiz;
    },
    withToast({
      onWaiting: "Saving quiz...",
      onSuccess: "Quiz saved successfully",
      onFailure: "Failed to save quiz",
    }),
  ),
);

// Create matching analysis engine for a temp quiz
export const createMatchingTempEngineAtom = runtime.fn(
  Effect.fn(function* ({ quiz }: { quiz: Quiz }) {
    const registry = yield* Registry.AtomRegistry;
    const api = yield* ApiClient;

    // Only work with temp quizzes
    if (quiz.isTemp !== true) return undefined;

    // Find the original analysis engine (non-temp version with same base slug and version)
    const allEngines = yield* api.http.AnalysisEngine.list();
    const baseSlug = quiz.slug.replace("-editing", ""); // Remove editing suffix if present
    const originalEngine = allEngines.find(
      (engine) =>
        engine.slug === baseSlug && engine.version === quiz.version && engine.isTemp === false,
    );

    if (originalEngine === undefined) {
      // If no original engine found, try to find any engine with the base slug
      const anyMatchingEngine = allEngines.find(
        (engine) => engine.slug === baseSlug && engine.isTemp === false,
      );

      if (anyMatchingEngine === undefined) {
        throw new Error(`No analysis engine found for quiz slug: ${baseSlug}`);
      }

      // Use the found engine as template
      const tempEngine = yield* api.http.AnalysisEngine.upsert({
        payload: {
          name: `${anyMatchingEngine.name} (Editing)`,
          slug: `${quiz.slug}-temp-${quiz.id}`, // Use quiz ID for uniqueness
          version: quiz.version,
          description: anyMatchingEngine.description ?? undefined,
          scoringConfig: anyMatchingEngine.scoringConfig,
          endings: anyMatchingEngine.endings,
          metadata: anyMatchingEngine.metadata ?? undefined,
          isActive: anyMatchingEngine.isActive,
          isPublished: false,
          isTemp: true,
        },
      });

      return tempEngine;
    }

    // Create temp engine based on original
    const tempEngine = yield* api.http.AnalysisEngine.upsert({
      payload: {
        name: `${originalEngine.name} (Editing)`,
        slug: `${quiz.slug}-temp-${quiz.id}`, // Use quiz ID for uniqueness
        version: originalEngine.version,
        description: originalEngine.description ?? undefined,
        scoringConfig: originalEngine.scoringConfig,
        endings: originalEngine.endings,
        metadata: originalEngine.metadata ?? undefined,
        isActive: originalEngine.isActive,
        isPublished: false,
        isTemp: true,
      },
    });

    return tempEngine;
  }),
);

// Clear all temporary quizzes
export const clearTempQuizzesAtom = runtime.fn(
  Effect.fn(function* () {
    const registry = yield* Registry.AtomRegistry;
    const api = yield* ApiClient;

    // Get all quizzes
    const allQuizzes = yield* api.http.Quizzes.list();

    // Find all temp quizzes
    const tempQuizzes = allQuizzes.filter((quiz) => quiz.isTemp === true);

    // Delete all temp quizzes
    yield* Effect.forEach(tempQuizzes, (quiz) =>
      api.http.Quizzes.delete({ payload: { id: quiz.id } }),
    );

    // Update the atom to remove deleted quizzes
    for (const quiz of tempQuizzes) {
      registry.set(quizzesAtom, Action.Del({ id: quiz.id }));
    }

    return tempQuizzes.length;
  }),
);
