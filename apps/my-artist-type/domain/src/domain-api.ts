import { HttpApi } from "@effect/platform";
import { QuizzesGroup } from "@features/quiz/domain";
import { ExamplesGroup } from "./example-rpc.js";
import { StylesGroup } from "./styles-rpc.js";

export class DomainApi extends HttpApi.make("DomainApi")
  .add(StylesGroup)
  .add(ExamplesGroup)
  .add(QuizzesGroup)
  .prefix("/api") {}
