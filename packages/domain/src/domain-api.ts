import { HttpApi } from "@effect/platform";
import { ExamplesGroup } from "./example-rpc.js";
import { StylesGroup } from "./styles-rpc.js";
import { TestGroup } from "./test-rpc.js";

export class DomainApi extends HttpApi.make("DomainApi")
  .add(StylesGroup)
  .add(TestGroup)
  .add(ExamplesGroup) {}
