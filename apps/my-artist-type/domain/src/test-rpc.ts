import { HttpApiEndpoint, HttpApiGroup, HttpApiSchema } from "@effect/platform";
import { Schema } from "effect";

//Branded Types, avoids validation conflicts with other ids
export const TestId = Schema.UUID.pipe(Schema.brand("TestId"));
export type TestId = typeof TestId.Type;

//Define the actual schema contract
export class Test extends Schema.Class<Test>("Test")({
  id: TestId,
  title: Schema.String,
  description: Schema.String,
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
}) {}

//Define the requirements for upserting based on the contract, defining your rules
export class UpsertTestPayload extends Schema.Class<UpsertTestPayload>("UpsertTestPayload")({
  id: Schema.optional(TestId),
  title: Schema.Trim.pipe(
    Schema.nonEmptyString({
      message: () => "Name is required",
    }),
    Schema.maxLength(100, {
      message: () => "Name must be at most 100 characters long",
    }),
  ),
  description: Schema.Trim.pipe(
    Schema.nonEmptyString({
      message: () => "description is required",
    }),
    Schema.maxLength(1_000, {
      message: () => "description must be at most 1,000 characters long",
    }),
  ),
}) {}

// Make an error for the Schema for easy tracing and error handling later
export class TestNotFoundError extends Schema.TaggedError<TestNotFoundError>("TestNotFoundError")(
  "TestNotFoundError",
  { id: TestId },
  HttpApiSchema.annotations({
    status: 404,
  }),
) {
  get message() {
    return `Test with id ${this.id} not found`;
  }
}

//make the HttpApiGroup for the Entity, composing each endpoint for list, upsert, delete, and give it a prefix, this gets imported into the domain-api
export class TestGroup extends HttpApiGroup.make("tests")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(Test)))
  .add(
    HttpApiEndpoint.put("upsert", "/")
      .addSuccess(Test)
      .addError(TestNotFoundError)
      .setPayload(UpsertTestPayload),
  )
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(
        Schema.Struct({
          id: TestId,
        }),
      )
      .addSuccess(Schema.Void)
      .addError(TestNotFoundError),
  )
  .prefix("/test") {}
