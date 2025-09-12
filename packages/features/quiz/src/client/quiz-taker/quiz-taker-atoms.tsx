import { ApiClient } from "@core/client";
import { Atom, Registry, Result, useAtomMount } from "@effect-atom/atom-react";
import {
  type InteractionLog,
  type QuestionResponse,
  type Quiz,
  type QuizSession,
  type SessionMetadata,
  type UpsertResponsePayload,
} from "@features/quiz/domain";
import { DateTime, Effect, Layer, LogLevel, Logger } from "effect";
import type React from "react";
import type { AnalysisConfigOverrides } from "./dev-panel.js";
import { QuizTakerService } from "./quiz-taker.service.js";

// Create a runtime with the QuizTakerService and ApiClient
export const quizTakerRuntime = Atom.runtime(
  Layer.mergeAll(QuizTakerService.Default, ApiClient.Default),
);

// Add pretty logger to the runtime
Atom.runtime.addGlobalLayer(Logger.pretty);

// Remote atom for the initial session state
const remoteAtom = quizTakerRuntime.atom(
  Effect.gen(function* () {
    const now = yield* DateTime.now;
    return {
      responses: {} as Record<string, number>,
      logs: [] as Array<InteractionLog>,
      sessionMetadata: {
        startedAt: now,
      } as SessionMetadata,
      currentQuestionIndex: 0,
      currentQuiz: undefined as Quiz | undefined,
    };
  }),
);

// Main quiz session atom that contains everything
export const quizSessionAtom = Object.assign(
  Atom.writable(
    (get: Atom.Context) => get(remoteAtom),
    (
      ctx,
      newSession: QuizSession & { currentQuestionIndex: number; currentQuiz: Quiz | undefined },
    ) => {
      ctx.setSelf(Result.success(newSession));
    },
  ),
  {
    remote: remoteAtom,
  },
);

// Derived atoms for convenience
export const currentQuestionAtom = Atom.make((get: Atom.Context) => {
  const session = get(quizSessionAtom);

  if (!Result.isSuccess(session) || session.value.currentQuiz === undefined) {
    return undefined;
  }

  return session.value.currentQuiz.questions?.[session.value.currentQuestionIndex];
});

export const savedResponseAtom = Atom.make((get: Atom.Context) => {
  const session = get(quizSessionAtom);
  const question = get(currentQuestionAtom);

  if (!Result.isSuccess(session) || question === undefined) {
    return undefined;
  }

  return session.value.responses[question.id as string] ?? undefined;
});

export const navigationStateAtom = Atom.make((get: Atom.Context) => {
  const session = get(quizSessionAtom);

  if (!Result.isSuccess(session) || session.value.currentQuiz === undefined) {
    return { canGoBack: false, canGoNext: false, isFirst: true, isLast: true };
  }

  const totalQuestions = session.value.currentQuiz.questions?.length ?? 0;
  const currentIndex = session.value.currentQuestionIndex;

  return {
    canGoBack: currentIndex > 0,
    canGoNext: currentIndex < totalQuestions - 1,
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalQuestions - 1,
  };
});

// Action atoms that work with the consolidated session
export const selectAnswerAtom = quizTakerRuntime.fn(
  Effect.fn(function* (rating: number) {
    const registry = yield* Registry.AtomRegistry;
    const sessionResult = registry.get(quizSessionAtom);
    const question = registry.get(currentQuestionAtom);

    if (!Result.isSuccess(sessionResult) || question === undefined) {
      return;
    }

    const updatedSession = yield* QuizTakerService.selectAnswer(
      sessionResult.value,
      question.id,
      rating,
    );
    const newState = { ...sessionResult.value, ...updatedSession };
    registry.set(quizSessionAtom, newState);
  }),
);

export const navigateToQuestionAtom = quizTakerRuntime.fn(
  Effect.fn(function* (targetIndex: number) {
    const registry = yield* Registry.AtomRegistry;
    const sessionResult = registry.get(quizSessionAtom);

    if (!Result.isSuccess(sessionResult) || sessionResult.value.currentQuiz === undefined) {
      return;
    }

    const questions = sessionResult.value.currentQuiz.questions;
    if (questions === undefined) {
      return;
    }

    const updatedSession = yield* QuizTakerService.navigateToQuestion(
      sessionResult.value,
      sessionResult.value.currentQuestionIndex,
      targetIndex,
      questions,
    );

    const newState = {
      ...sessionResult.value,
      ...updatedSession,
      currentQuestionIndex: targetIndex,
    };
    registry.set(quizSessionAtom, newState);
  }),
);

export const submitQuizAtom = quizTakerRuntime.fn(
  Effect.fn(function* () {
    const registry = yield* Registry.AtomRegistry;
    const sessionResult = registry.get(quizSessionAtom);

    if (!Result.isSuccess(sessionResult) || sessionResult.value.currentQuiz === undefined) {
      return;
    }

    // Log the current session state before submission
    yield* Effect.log("Quiz submission - Current session state:", {
      level: LogLevel.Info,
      annotations: {
        sessionState: JSON.stringify(sessionResult.value, null, 2),
      },
    });

    const updatedSession = yield* QuizTakerService.submitQuiz(sessionResult.value);
    const newState = { ...sessionResult.value, ...updatedSession };

    // Convert quiz session to response payload
    const now = yield* DateTime.now;
    const answers: Array<QuestionResponse> = Object.entries(newState.responses).map(
      ([questionId, value]) => ({
        questionId,
        value,
        answeredAt: now,
      }),
    );

    const responsePayload: UpsertResponsePayload = {
      quizId: sessionResult.value.currentQuiz.id,
      answers,
      sessionMetadata: newState.sessionMetadata,
      interactionLogs: newState.logs,
      metadata: undefined,
    };

    // Save the response to the database
    const api = yield* ApiClient;
    yield* api.http.Responses.upsert({ payload: responsePayload });

    // Log the final session state after submission
    yield* Effect.log("Quiz submission - Final session state:", {
      level: LogLevel.Info,
      annotations: {
        finalSessionState: JSON.stringify(newState, null, 2),
      },
    });

    registry.set(quizSessionAtom, newState);
  }),
);

export const initializeQuizAtom = quizTakerRuntime.fn(
  Effect.fn(function* (quiz: Quiz) {
    const registry = yield* Registry.AtomRegistry;
    const initialSession = yield* QuizTakerService.initializeSession(quiz);
    const newState = {
      ...initialSession,
      currentQuestionIndex: 0,
      currentQuiz: quiz,
    };
    registry.set(quizSessionAtom, newState);
  }),
);

// Dev panel configuration atoms
const defaultDevConfig: AnalysisConfigOverrides = {
  primaryWeight: 1.5,
  nonPrimaryWeight: 0.2,
  distanceGamma: 1.6,
  beta: 1.4,
  scoreMultiplier: 1.0,
  disableSecondaryPoints: false,
  overrideBaseWeights: false,
  overrideCustomWeights: false,
  overrideDistanceWeight: false,
  minPercentageThreshold: 0.0,
  enableQuestionBreakdown: true,
  maxEndingResults: 10,
  customPrimaryWeight: 2.0,
  customNonPrimaryWeight: 0.5,
  customDistanceGamma: 2.0,
  customBeta: 1.8,
  customScoreMultiplier: 1.2,
};

// Dev panel atoms using simple state management
export const devConfigAtom = quizTakerRuntime.atom(Effect.sync(() => defaultDevConfig));

export const devPanelVisibleAtom = quizTakerRuntime.atom(Effect.sync(() => false));

// QuizServices component to mount the runtime
export const QuizServices: React.FC = () => {
  useAtomMount(quizTakerRuntime);
  return null;
};
