//this is where the beginning of a new feature starts. We define what states are valid and create a contract that both the client and server must adhere to.
// Because of this, we will get type errors if our client or server are out of sync with our Domain definition of an entity
//
// After writing this file, we branch out in this order
// - Domain:
//     - Add the ExampleGroup to the DomainApi in DomainApi.ts
//
// - Server:
//      1)
//     - Make examples.repo.ts in server/src/internal, this is where the server interacts with the outside world eg/ Database
//     - Make examples.repo.test.ts in server/src/internal, this is our test file for intergration with the database
//
//      2)
//     - Make examples-rpc-live.ts in server/src/, this is the live implementation of this file where we make the handlers for the api and provide the repo
//
//      3)
//     - Add the layer Repo into server/src/server,ts
//
// - Database:
//     - Add a migration file in database/src/migrations which is SQL for creating the table in the database
//
// - Client:
//     - Make example.atom.ts, the entry point for the client through the HttpApi
//     - Any pages related to this feature will go in client/src/features/${featurename}/example.page.tsx, then that component is imported into the main router
//

import { HttpApiSchema } from "@effect/platform";
import { NullOrFromFallible } from "@org/domain/utils/schema-utils";
import { Schema } from "effect";
import { QuestionData, UpsertQuestionData } from "./question-types.js";

//1) Create a branded ID type for the entity to avoid confusion in logs and merging other id types
export const QuestionId = Schema.UUID.pipe(Schema.brand("QuestionId"));
//export a type for use with normal typescript outside of effect
export type QuestionId = typeof QuestionId.Type;

//2) Define the Actual Class Schema of the Entity

//Define any metadata for the schema, this goes through the NullorFromFallible schema util that will keep any JSON that meets our expectations,
// and silently return null if it is malformed data
export class QuestionMetadata extends Schema.Class<QuestionMetadata>("QuestionMetadata")({
  tags: Schema.optional(Schema.Array(Schema.String)),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}

export class Question extends Schema.Class<Question>("Question")({
  id: QuestionId,

  //Define the actual entity here
  order: Schema.Number,
  title: Schema.String,
  subtitle: Schema.optional(Schema.String),

  description: Schema.optional(Schema.String),
  //determines the type, and all type specific fields
  data: QuestionData,

  //optional metadata - stored as JSON in database
  metadata: Schema.parseJson(NullOrFromFallible(QuestionMetadata)),
}) {}

//3) Define the Schema for upserting the entity, this does not need to include createdAt or updatedAt because those are handled
// at the database driver level, we also don't include deletedAt because that is its own operation "softdel"

export class UpsertQuestionPayload extends Schema.Class<UpsertQuestionPayload>(
  "UpsertQuestionPayload",
)({
  id: Schema.optional(QuestionId),

  order: Schema.Number.pipe(Schema.int(), Schema.nonNegative()),

  title: Schema.Trim.pipe(
    Schema.nonEmptyString({
      message: () => "title is required",
    }),
    Schema.maxLength(200, {
      message: () => "Title must be at most 200 characters long",
    }),
  ),
  subtitle: Schema.optional(
    Schema.Trim.pipe(
      Schema.nonEmptyString({
        message: () => "subtitle is required when provided",
      }),
      Schema.maxLength(300, {
        message: () => "Subtitle must be at most 300 characters long",
      }),
    ),
  ),
  description: Schema.optional(
    Schema.Trim.pipe(
      Schema.nonEmptyString({
        message: () => "description is required when provided",
      }),
      Schema.maxLength(1_000, {
        message: () => "Description must be at most 1,000 characters long",
      }),
    ),
  ),

  data: UpsertQuestionData,
  metadata: Schema.optional(Schema.NullOr(QuestionMetadata)),

  //
}) {}

//4) Define an Error for the entity, this will help us trace any errors back here if something is wrong
export class QuestionNotFoundError extends Schema.TaggedError<QuestionNotFoundError>(
  "QuestionNotFoundError",
)(
  "QuestionNotFoundError",
  { id: QuestionId },
  HttpApiSchema.annotations({
    status: 404,
  }),
) {
  get message() {
    return `Question with id ${this.id} not found`;
  }
}
