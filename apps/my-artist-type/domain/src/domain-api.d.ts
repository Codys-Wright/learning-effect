import { HttpApi } from "@effect/platform";
import {
  ActiveQuizzesGroup,
  AnalysisEngineGroup,
  AnalysisGroup,
  QuizzesGroup,
  ResponsesGroup,
} from "@features/quiz/domain";
declare const DomainApi_base: HttpApi.HttpApi<
  "DomainApi",
  | typeof QuizzesGroup
  | typeof AnalysisEngineGroup
  | typeof ActiveQuizzesGroup
  | typeof ResponsesGroup
  | typeof AnalysisGroup,
  import("@effect/platform/HttpApiError").HttpApiDecodeError,
  never
>;
export declare class DomainApi extends DomainApi_base {}
export {};
//# sourceMappingURL=domain-api.d.ts.map
