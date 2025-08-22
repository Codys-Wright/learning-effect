import { HttpApi } from "@effect/platform";
import { StylesGroup } from "./styles-rpc.js";
import { TestGroup } from "./test-rpc.js";

export class DomainApi extends HttpApi.make("DomainApi").add(StylesGroup).add(TestGroup) {}
