import { HttpApi } from "@effect/platform";
import {
  AnalysisEngineGroup,
  AnalysisGroup,
  QuizzesGroup,
  ResponsesGroup,
} from "@features/quiz/domain";

export class DomainApi extends HttpApi.make("DomainApi")
  .add(QuizzesGroup)
  .add(ResponsesGroup)
  .add(AnalysisEngineGroup)
  .add(AnalysisGroup)
  .prefix("/api") {}
