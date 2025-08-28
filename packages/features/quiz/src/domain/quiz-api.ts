import { HttpApi } from "@effect/platform";
import { QuizzesGroup } from "./quiz-rpc";

export class QuizApi extends HttpApi.make("QuizApi").add(QuizzesGroup) {}
