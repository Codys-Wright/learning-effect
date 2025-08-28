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

import { HttpApiEndpoint, HttpApiGroup, HttpApiSchema } from "@effect/platform";
import { Schema } from "effect";
import { NullOrFromFallible, SemVer } from "./utils/schema-utils.js";

//1) Create a branded ID type for the entity to avoid confusion in logs and merging other id types
export const ExampleId = Schema.UUID.pipe(Schema.brand("ExampleId"));
//export a type for use with normal typescript outside of effect
export type ExampleId = typeof ExampleId.Type;

//2) Define the Actual Class Schema of the Entity

//Define any metadata for the schema, this goes through the NullorFromFallible schema util that will keep any JSON that meets our expectations,
// and silently return null if it is malformed data
export class ExampleMetadata extends Schema.Class<ExampleMetadata>("ExampleMetadata")({
  tags: Schema.optional(Schema.Array(Schema.String)),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}

export class Example extends Schema.Class<Example>("Example")({
  //every entity should have an Id and a version
  id: ExampleId,
  version: SemVer,

  //Define the actual entity here
  name: Schema.String,
  description: Schema.String,

  //optional metadata - stored as JSON in database
  metadata: Schema.parseJson(NullOrFromFallible(ExampleMetadata)),

  //Always include a createdAt and UpdatedAt time, but deletedAt is optional for things you want to be able to soft delete
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}

//3) Define the Schema for upserting the entity, this does not need to include createdAt or updatedAt because those are handled
// at the database driver level, we also don't include deletedAt because that is its own operation "softdel"

export class UpsertExamplePayload extends Schema.Class<UpsertExamplePayload>(
  "UpsertExamplePayload",
)({
  id: Schema.optional(ExampleId),
  version: Schema.optional(SemVer),

  name: Schema.Trim.pipe(
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
      message: () => "Description must be at most 1,000 characters long",
    }),
  ),

  metadata: Schema.optional(ExampleMetadata),

  //
}) {}
//4) Define an Error for the entity, this will help us trace any errors back here if something is wrong
export class ExampleNotFoundError extends Schema.TaggedError<ExampleNotFoundError>(
  "ExampleNotFoundError",
)(
  "ExampleNotFoundError",
  { id: ExampleId },
  HttpApiSchema.annotations({
    status: 404,
  }),
) {
  get message() {
    return `Example with id ${this.id} not found`;
  }
}

//5) Export an HttpApiGroup so that we can incoprorate it into our DomainAPI
// This is where we use all the building blocks we made above
export class ExamplesGroup extends HttpApiGroup.make("examples")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(Example)))
  .add(
    HttpApiEndpoint.put("upsert", "/")
      .addSuccess(Example)
      .addError(ExampleNotFoundError)
      .setPayload(UpsertExamplePayload),
  )
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(
        Schema.Struct({
          id: ExampleId,
        }),
      )
      .addSuccess(Schema.Void)
      .addError(ExampleNotFoundError),
  )
  .prefix("/examples") {}
