import { faker } from "@faker-js/faker";
import { Schema } from "effect";

const RatingQuestionData = Schema.Struct({
  type: Schema.Literal("rating"),
  minRating: Schema.Number.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.number.int({ min: 0, max: 2 })),
  }),
  maxRating: Schema.Number.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.number.int({ min: 5, max: 10 })),
  }),
  minLabel: Schema.String.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.word.adjective()),
  }),
  maxLabel: Schema.String.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.word.adjective()),
  }),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Rating Question",
      description: "A question with a numeric rating scale",
    },
  }),
);

const UpsertRatingQuestionData = Schema.Struct({
  type: Schema.Literal("rating"),
  minRating: Schema.Number.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.number.int({ min: 0, max: 2 })),
  }),
  maxRating: Schema.Number.annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.number.int({ min: 5, max: 10 })),
  }),
  minLabel: Schema.Trim.pipe(
    Schema.nonEmptyString({
      message: () => "Minimum label cannot be empty",
    }),
  ).annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.word.adjective()),
  }),
  maxLabel: Schema.Trim.pipe(
    Schema.nonEmptyString({
      message: () => "Maximum label cannot be empty",
    }),
  ).annotations({
    arbitrary: () => (fc) => fc.constant(null).map(() => faker.word.adjective()),
  }),
}).pipe(
  Schema.filter((data) => data.minRating <= data.maxRating, {
    message: () => "minimum rating cannot be greater than maximum rating",
    jsonSchema: { minRating: { type: "number" }, maxRating: { type: "number" } },
  }),
  Schema.annotations({
    jsonSchema: {
      title: "Upsert Rating Question",
      description: "Data for creating/updating a rating question",
    },
  }),
);

const MultipleChoiceQuestionData = Schema.Struct({
  type: Schema.Literal("multiple-choice"),
  choices: Schema.Array(
    Schema.String.annotations({
      arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.words(2)),
    }),
  ).annotations({
    arbitrary: () => (fc) =>
      fc
        .constant(null)
        .map(() =>
          Array.from({ length: faker.number.int({ min: 2, max: 6 }) }, () => faker.lorem.words(2)),
        ),
  }),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Multiple Choice Question",
      description: "A question with multiple choice options",
    },
  }),
);

const UpsertMultipleChoiceQuestionData = Schema.Struct({
  type: Schema.Literal("multiple-choice"),
  choices: Schema.Array(
    Schema.String.annotations({
      arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.words(2)),
    }),
  ).annotations({
    arbitrary: () => (fc) =>
      fc
        .constant(null)
        .map(() =>
          Array.from({ length: faker.number.int({ min: 2, max: 6 }) }, () => faker.lorem.words(2)),
        ),
  }),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Upsert Multiple Choice Question",
      description: "Data for creating/updating a multiple choice question",
    },
  }),
);

const TextQuestionData = Schema.Struct({
  type: Schema.Literal("text"),
  placeholder: Schema.optional(
    Schema.String.annotations({
      arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.words(4)),
    }),
  ),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Text Question",
      description: "A free text input question",
    },
  }),
);

const UpsertTextQuestionData = Schema.Struct({
  type: Schema.Literal("text"),
  placeholder: Schema.optional(
    Schema.String.annotations({
      arbitrary: () => (fc) => fc.constant(null).map(() => faker.lorem.words(4)),
    }),
  ),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Upsert Text Question",
      description: "Data for creating/updating a text question",
    },
  }),
);

const EmailQuestionData = Schema.Struct({
  type: Schema.Literal("email"),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Email Question",
      description: "An email input question",
    },
  }),
);

const UpsertEmailQuestionData = Schema.Struct({
  type: Schema.Literal("email"),
}).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Upsert Email Question",
      description: "Data for creating/updating an email question",
    },
  }),
);

// Union type for all question types
export const QuestionData = Schema.Union(
  RatingQuestionData,
  MultipleChoiceQuestionData,
  TextQuestionData,
  EmailQuestionData,
).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Question Data",
      description: "Union of all possible question data types",
      discriminator: { propertyName: "type" },
    },
  }),
);

export const UpsertQuestionData = Schema.Union(
  UpsertRatingQuestionData,
  UpsertMultipleChoiceQuestionData,
  UpsertTextQuestionData,
  UpsertEmailQuestionData,
).pipe(
  Schema.annotations({
    jsonSchema: {
      title: "Upsert Question Data",
      description: "Union of all possible question data types for create/update operations",
      discriminator: { propertyName: "type" },
    },
  }),
);

// Type aliases for easier usage
export type RatingQuestion = Schema.Schema.Type<typeof RatingQuestionData>;
export type UpsertRatingQuestion = Schema.Schema.Type<typeof UpsertRatingQuestionData>;
export type MultipleChoiceQuestion = Schema.Schema.Type<typeof MultipleChoiceQuestionData>;
export type TextQuestion = Schema.Schema.Type<typeof TextQuestionData>;
export type EmailQuestion = Schema.Schema.Type<typeof EmailQuestionData>;
export type Question = Schema.Schema.Type<typeof QuestionData>;
