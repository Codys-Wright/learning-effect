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

import { NullOrFromFallible, SemVer, Slug } from "@core/domain";
import { HttpApiEndpoint, HttpApiGroup, HttpApiSchema } from "@effect/platform";
import { faker } from "@faker-js/faker";
import { Schema } from "effect";
import { Question, UpsertQuestionPayload } from "./questions/question-rpc.js";

//1) Create a branded ID type for the entity to avoid confusion in logs and merging other id types
export const QuizId = Schema.UUID.pipe(Schema.brand("QuizId"));
//export a type for use with normal typescript outside of effect
export type QuizId = typeof QuizId.Type;

//2) Define the Actual Class Schema of the Entity

//Define any metadata for the schema, this goes through the NullorFromFallible schema util that will keep any JSON that meets our expectations,
// and silently return null if it is malformed data
export class QuizMetadata extends Schema.Class<QuizMetadata>("QuizMetadata")({
  tags: Schema.optional(
    Schema.Array(
      Schema.String.annotations({
        arbitrary: () => (fc) => fc.constant(null).map(() => faker.word.noun()),
      }),
    ),
  ),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}

export class QuizSettings extends Schema.Class<QuizSettings>("QuizSettings")({
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}

export class Quiz extends Schema.Class<Quiz>("Quiz")({
  //every entity should have an Id and a version
  id: QuizId,
  version: SemVer,
  slug: Slug,

  //Define the actual entity here
  title: Schema.String.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.words(3)),
  }),
  subtitle: Schema.optional(
    Schema.NullOr(
      Schema.String.annotations({
        arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.sentence()),
      }),
    ),
  ),
  description: Schema.optional(
    Schema.NullOr(
      Schema.String.annotations({
        arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.paragraphs(2)),
      }),
    ),
  ),
  questions: Schema.optional(Schema.parseJson(Schema.Array(Question))),
  settings: Schema.optional(Schema.NullOr(Schema.parseJson(NullOrFromFallible(QuizSettings)))),

  //optional metadata - stored as JSON in database
  metadata: Schema.optional(Schema.NullOr(Schema.parseJson(NullOrFromFallible(QuizMetadata)))),

  //Always include a createdAt and UpdatedAt time, but deletedAt is optional for things you want to be able to soft delete
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}

//3) Define the Schema for upserting the entity, this does not need to include createdAt or updatedAt because those are handled
// at the database driver level, we also don't include deletedAt because that is its own operation "softdel"

export class UpsertQuizPayload extends Schema.Class<UpsertQuizPayload>("UpsertQuizPayload")({
  id: Schema.optional(QuizId),
  version: Schema.optional(SemVer),

  title: Schema.Trim.pipe(
    Schema.nonEmptyString({
      message: () => "title is required",
    }),
    Schema.maxLength(30, {
      message: () => "Title must be at most 30 characters long",
    }),
  ).annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.words(3).slice(0, 30)),
  }),
  subtitle: Schema.optional(
    Schema.NullOr(
      Schema.Trim.pipe(
        Schema.nonEmptyString({
          message: () => "subtitle is required",
        }),
        Schema.maxLength(100, {
          message: () => "subtitle must be at most 30 characters long",
        }),
      ).annotations({
        arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.sentence().slice(0, 100)),
      }),
    ),
  ),
  description: Schema.optional(
    Schema.NullOr(
      Schema.Trim.pipe(
        Schema.nonEmptyString({
          message: () => "description is required",
        }),
        Schema.maxLength(1_000, {
          message: () => "Description must be at most 1,000 characters long",
        }),
      ).annotations({
        arbitrary: () => (fc) =>
          fc.constant(null).map(() => faker.lorem.paragraphs(2).slice(0, 1000)),
      }),
    ),
  ),

  questions: Schema.optional(Schema.Array(UpsertQuestionPayload)),
  settings: Schema.optional(Schema.NullOr(Schema.parseJson(NullOrFromFallible(QuizSettings)))),

  metadata: Schema.optional(QuizMetadata),

  //
}) {}

//4) Define an Error for the entity, this will help us trace any errors back here if something is wrong
export class QuizNotFoundError extends Schema.TaggedError<QuizNotFoundError>("QuizNotFoundError")(
  "QuizNotFoundError",
  { id: QuizId },
  HttpApiSchema.annotations({
    status: 404,
  }),
) {
  get message() {
    return `Quiz with id ${this.id} not found`;
  }
}

//5) Export an HttpApiGroup so that we can incoprorate it into our DomainAPI
// This is where we use all the building blocks we made above
export class QuizzesGroup extends HttpApiGroup.make("Quizzes")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(Quiz)))
  .add(
    HttpApiEndpoint.put("upsert", "/")
      .addSuccess(Quiz)
      .addError(QuizNotFoundError)
      .setPayload(UpsertQuizPayload),
  )
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(
        Schema.Struct({
          id: QuizId,
        }),
      )
      .addSuccess(Schema.Void)
      .addError(QuizNotFoundError),
  )
  .prefix("/Quizzes") {}
