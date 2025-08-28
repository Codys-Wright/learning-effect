import { HttpApi } from "@effect/platform";
import { ExamplesGroup } from "./example-rpc.js";
import { QuizzesGroup } from "./quiz/quiz-rpc.js";
import { StylesGroup } from "./styles-rpc.js";

export class DomainApi extends HttpApi.make("DomainApi")
  .add(StylesGroup)
  .add(ExamplesGroup)
  .add(QuizzesGroup)
  .prefix("/api") {}
