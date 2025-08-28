import { makeFeatureRuntimeService } from "@core/client";
import type { Atom } from "@effect-atom/atom-react";
import { QuizzesGroup } from "../domain";

const QuizRuntimeService = makeFeatureRuntimeService(QuizzesGroup);

// Just export what you need - everything is already typed!
export const QuizApiClient = QuizRuntimeService.service;
export const runtime: Atom.RuntimeFactory = QuizRuntimeService.runtime;
export const useQuizzesApi = QuizRuntimeService.useGroupApi;
