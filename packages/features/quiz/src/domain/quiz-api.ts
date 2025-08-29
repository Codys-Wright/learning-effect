import type { GroupMethods, RequiresGroup } from "@core/client";
import { HttpApi } from "@effect/platform";
import { QuizzesGroup } from "./quiz-rpc";

export class QuizApi extends HttpApi.make("QuizApi").add(QuizzesGroup) {}

//example of how to use the QuizApi class
export type DebugGroupMethods = GroupMethods<typeof QuizzesGroup>;
export type DebugRequiredGroup = RequiresGroup<typeof QuizzesGroup>;
