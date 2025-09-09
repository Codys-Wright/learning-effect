import { PgContainer } from "@core/server";
import { expect, it } from "@effect/vitest";
import { DateTime, Effect, Layer } from "effect";
import { QuizzesRepo } from "./quizzes-repo.js";
import { ResponsesRepo } from "./responses-repo.js";

// Set up the test layer with database dependencies
const layer = Layer.mergeAll(
  ResponsesRepo.DefaultWithoutDependencies,
  QuizzesRepo.DefaultWithoutDependencies,
).pipe(Layer.provide(PgContainer.Live));

// Define the test suite with the layer and timeout configuration
// eslint-disable-next-line no-shadow
it.layer(layer, { timeout: "30 seconds" })("ResponsesRepo", (it) => {
  // Test CREATE operation - Verifies we can create a response
  it.effect(
    "should create a response",
    Effect.fnUntraced(function* () {
      // Get the repository services from the Effect context
      const repo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create a quiz first
      const quiz = yield* quizzesRepo.create({
        title: "Test Quiz for Response",
        subtitle: "A test quiz",
        description: "Test quiz for response testing",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      // Create a new response with minimal required fields
      const now = yield* DateTime.now;
      const newResponse = yield* repo.create({
        quizId: quiz.id,
        answers: [],
        sessionMetadata: {
          startedAt: now,
        },
        interactionLogs: [],
        metadata: null,
      });

      // Verify the response was created with correct data
      expect(newResponse).toBeDefined();
      expect(newResponse.quizId).toBeDefined();
      expect(newResponse.answers).toHaveLength(0);
      expect(newResponse.sessionMetadata).toBeDefined();
      expect(newResponse.sessionMetadata.startedAt).toBeDefined();
      expect(newResponse.interactionLogs).toHaveLength(0);

      // Verify auto-generated fields are present
      expect(newResponse.id).toBeDefined();
      expect(newResponse.createdAt).toBeDefined();
      expect(newResponse.updatedAt).toBeDefined();
      expect(newResponse.deletedAt).toBeNull();
    }),
  );

  // Test FIND ALL operation - Verifies we can retrieve all responses
  it.effect(
    "should find all responses",
    Effect.fnUntraced(function* () {
      const repo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create a quiz first
      const quiz2 = yield* quizzesRepo.create({
        title: "Test Quiz 2",
        subtitle: "Another test quiz",
        description: "Test quiz 2",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      // Create a test response first
      const now2 = yield* DateTime.now;
      yield* repo.create({
        quizId: quiz2.id,
        answers: [],
        sessionMetadata: {
          startedAt: now2,
        },
        interactionLogs: [],
        metadata: null,
      });

      // Retrieve all responses
      const responses = yield* repo.findAll();

      // Verify we got at least one response
      expect(responses).toBeDefined();
      expect(responses.length).toBeGreaterThan(0);
    }),
  );

  // Test FIND BY QUIZ ID operation - Verifies we can retrieve responses by quiz
  it.effect(
    "should find responses by quiz ID",
    Effect.fnUntraced(function* () {
      const repo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create a quiz first
      const quiz3 = yield* quizzesRepo.create({
        title: "Test Quiz 3",
        subtitle: "Quiz for findByQuizId test",
        description: "Test quiz 3",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      // Create a test response for a specific quiz
      const now3 = yield* DateTime.now;
      yield* repo.create({
        quizId: quiz3.id,
        answers: [],
        sessionMetadata: {
          startedAt: now3,
        },
        interactionLogs: [],
        metadata: null,
      });

      // Retrieve responses for the specific quiz
      const responses = yield* repo.findByQuizId(quiz3.id);

      // Verify we got the response for the correct quiz
      expect(responses).toBeDefined();
      expect(responses.length).toBeGreaterThan(0);
      expect(responses[0]?.quizId).toBe(quiz3.id);
    }),
  );

  // Test SOFT DELETE operation - Verifies we can soft delete a response
  it.effect(
    "should soft delete a response",
    Effect.fnUntraced(function* () {
      const repo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create a quiz first
      const quiz4 = yield* quizzesRepo.create({
        title: "Test Quiz 4",
        subtitle: "Quiz for delete test",
        description: "Test quiz 4",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      // Create a test response
      const now4 = yield* DateTime.now;
      const newResponse = yield* repo.create({
        quizId: quiz4.id,
        answers: [],
        sessionMetadata: {
          startedAt: now4,
        },
        interactionLogs: [],
        metadata: null,
      });

      // Soft delete the response
      yield* repo.del(newResponse.id);

      // Verify the response is no longer in findAll results
      const allResponses = yield* repo.findAll();
      const deletedResponse = allResponses.find((r) => r.id === newResponse.id);
      expect(deletedResponse).toBeUndefined();
    }),
  );
});
