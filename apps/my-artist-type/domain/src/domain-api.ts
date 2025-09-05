import { HttpApi } from "@effect/platform";
import { QuizzesGroup } from "@features/quiz/domain";

export class DomainApi extends HttpApi.make("DomainApi").add(QuizzesGroup).prefix("/api") {}
