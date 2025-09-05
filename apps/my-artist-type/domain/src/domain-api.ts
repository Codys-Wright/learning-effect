import { HttpApi } from "@effect/platform";
import { QuizzesGroup } from "@features/quiz/domain";
import { ExamplesGroup } from "./example-rpc.js";

export class DomainApi extends HttpApi.make("DomainApi")
  .add(ExamplesGroup)
  .add(QuizzesGroup)
  .prefix("/api") {}
