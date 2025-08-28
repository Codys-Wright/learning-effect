import { makeFeatureRuntimeService } from "@core/client";
import { QuizzesGroup } from "../domain";

const QuizRuntimeService = makeFeatureRuntimeService(QuizzesGroup);

// Just export what you need - everything is already typed!
export const QuizApiClient = QuizRuntimeService.service;
export const runtime = makeAtomRuntime(QuizApiClient);
export const useQuizzesApi = QuizRuntimeService.useGroupApi;
