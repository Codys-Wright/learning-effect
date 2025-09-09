import { HttpApi } from "@effect/platform";
import { QuizzesGroup, ResponsesGroup } from "@features/quiz/domain";

export class DomainApi extends HttpApi.make("DomainApi")
  .add(QuizzesGroup)
  .add(ResponsesGroup)
  .prefix("/api") {}
