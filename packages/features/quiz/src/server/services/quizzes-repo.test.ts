import { PgContainer } from "@core/server";
import { expect, it } from "@effect/vitest";
import { Effect, Layer } from "effect";
import { QuestionService } from "../services/question-service.js";
import { QuizzesRepo } from "./quizzes-repo.js";

// Set up the test layer with database dependencies
const layer = Layer.mergeAll(QuizzesRepo.DefaultWithoutDependencies, QuestionService.Default).pipe(
  Layer.provide(PgContainer.Live),
);

// Define the test suite with the layer and timeout configuration
// eslint-disable-next-line no-shadow
it.layer(layer, { timeout: "30 seconds" })("QuizzesRepo", (it) => {
  // Test CREATE operation - Verifies we can create a quiz
  it.effect(
    "should create a quiz",
    Effect.fnUntraced(function* () {
      // Get the repository service from the Effect context
      const repo = yield* QuizzesRepo;

      // Create a new quiz with minimal required fields
      const newQuiz = yield* repo.create({
        title: "Test Quiz",
        subtitle: "A test quiz for validation",
        description: "This is a test quiz to verify creation works",
        version: "1.0.0",
        questions: [],

        metadata: undefined,
      });

      // Verify the quiz was created with correct data
      expect(newQuiz).toBeDefined();
      expect(newQuiz.title).toBe("Test Quiz");
      expect(newQuiz.subtitle).toBe("A test quiz for validation");
      expect(newQuiz.description).toBe("This is a test quiz to verify creation works");
      expect(newQuiz.slug).toBe("test-quiz");
      expect(newQuiz.version).toBe("1.0.0");

      // Verify questions array was properly stored (empty for this test)
      expect(newQuiz.questions).toHaveLength(0);

      // Verify auto-generated fields are present
      expect(newQuiz.id).toBeDefined();
      expect(newQuiz.createdAt).toBeDefined();
      expect(newQuiz.updatedAt).toBeDefined();
      expect(newQuiz.deletedAt).toBeNull();
    }),
  );

  it.effect("should create a quiz with questions", () =>
    Effect.gen(function* () {
      // Get the repository and question services from the Effect context
      const repo = yield* QuizzesRepo;
      const questionService = yield* QuestionService;

      // Create questions using the question service
      const questions = yield* questionService.createMany([
        {
          order: 1,
          title: "Rate our service",
          subtitle: "How would you rate us?",
          description: "Please rate our service from 1 to 5",
          data: {
            type: "rating" as const,
            minRating: 1,
            maxRating: 5,
            minLabel: "Poor",
            maxLabel: "Excellent",
          },
          metadata: undefined,
        },
        {
          order: 2,
          title: "Your email",
          subtitle: "Contact information",
          description: "Please provide your email address",
          data: {
            type: "email" as const,
          },
          metadata: undefined,
        },
        {
          order: 3,
          title: "Choose your preference",
          subtitle: "Multiple choice question",
          description: "Select your preferred option",
          data: {
            type: "multiple-choice" as const,
            choices: ["Option A", "Option B", "Option C"],
          },
          metadata: undefined,
        },
      ]);

      // Create a quiz with the generated questions
      const newQuiz = yield* repo.create({
        title: "Quiz with Questions",
        subtitle: "Testing quiz with different question types",
        description: "This quiz tests various question types",
        version: "1.0.0",
        questions,
        metadata: undefined,
      });

      // Verify the quiz was created with correct data
      expect(newQuiz).toBeDefined();
      expect(newQuiz.title).toBe("Quiz with Questions");
      expect(newQuiz.questions).toBeDefined();
      expect(newQuiz.questions).toHaveLength(3);

      // Verify first question (rating)
      expect(newQuiz.questions?.[0]?.id).toBeDefined();
      expect(newQuiz.questions?.[0]?.title).toBe("Rate our service");
      expect(newQuiz.questions?.[0]?.data.type).toBe("rating");
      if (newQuiz.questions?.[0]?.data.type === "rating") {
        expect(newQuiz.questions[0].data.minRating).toBe(1);
        expect(newQuiz.questions[0].data.maxRating).toBe(5);
      }

      // Verify second question (email)
      expect(newQuiz.questions?.[1]?.id).toBeDefined();
      expect(newQuiz.questions?.[1]?.title).toBe("Your email");
      expect(newQuiz.questions?.[1]?.data.type).toBe("email");

      // Verify third question (multiple choice)
      expect(newQuiz.questions?.[2]?.id).toBeDefined();
      expect(newQuiz.questions?.[2]?.title).toBe("Choose your preference");
      expect(newQuiz.questions?.[2]?.data.type).toBe("multiple-choice");
      if (newQuiz.questions?.[2]?.data.type === "multiple-choice") {
        expect(newQuiz.questions[2].data.choices).toEqual(["Option A", "Option B", "Option C"]);
      }

      // Verify auto-generated fields are present
      expect(newQuiz.id).toBeDefined();
      expect(newQuiz.createdAt).toBeDefined();
      expect(newQuiz.updatedAt).toBeDefined();
      expect(newQuiz.deletedAt).toBeNull();
    }),
  );

  it.effect("should update a quiz with questions", () =>
    Effect.gen(function* () {
      // Get the repository and question services from the Effect context
      const repo = yield* QuizzesRepo;
      const questionService = yield* QuestionService;

      // Create initial questions
      const originalQuestions = yield* questionService.createMany([
        {
          order: 1,
          title: "Original Question",
          subtitle: "Original subtitle",
          description: "Original question description",
          data: {
            type: "text" as const,
            placeholder: "Enter your answer",
          },
          metadata: undefined,
        },
      ]);

      // First create a quiz
      const originalQuiz = yield* repo.create({
        title: "Original Quiz",
        subtitle: "Original subtitle",
        description: "Original description",
        version: "1.0.0",
        questions: originalQuestions,
        metadata: undefined,
      });

      // Create new questions for the update
      const updatedQuestions = yield* questionService.createMany([
        {
          order: 1,
          title: "Updated Rating Question",
          subtitle: "Rate this update",
          description: "How would you rate this update?",
          data: {
            type: "rating" as const,
            minRating: 1,
            maxRating: 10,
            minLabel: "Terrible",
            maxLabel: "Amazing",
          },
          metadata: undefined,
        },
        {
          order: 2,
          title: "New Email Question",
          subtitle: "Contact info",
          description: "Please provide your email",
          data: {
            type: "email" as const,
          },
          metadata: undefined,
        },
      ]);

      // Update the quiz with new questions
      const updatedQuiz = yield* repo.update({
        id: originalQuiz.id,
        version: "1.1.0",
        title: "Updated Quiz",
        subtitle: "Updated subtitle",
        description: "Updated description",
        questions: updatedQuestions,
        metadata: null,
      });

      // Verify the quiz was updated correctly
      expect(updatedQuiz).toBeDefined();
      expect(updatedQuiz.id).toBe(originalQuiz.id); // Same ID
      expect(updatedQuiz.title).toBe("Updated Quiz");
      expect(updatedQuiz.version).toBe("1.1.0");
      expect(updatedQuiz.questions).toBeDefined();
      expect(updatedQuiz.questions).toHaveLength(2);

      // Verify first updated question (rating)
      expect(updatedQuiz.questions?.[0]?.id).toBeDefined();
      expect(updatedQuiz.questions?.[0]?.title).toBe("Updated Rating Question");
      expect(updatedQuiz.questions?.[0]?.data.type).toBe("rating");
      if (updatedQuiz.questions?.[0]?.data.type === "rating") {
        expect(updatedQuiz.questions[0].data.maxRating).toBe(10);
      }

      // Verify second updated question (email)
      expect(updatedQuiz.questions?.[1]?.id).toBeDefined();
      expect(updatedQuiz.questions?.[1]?.title).toBe("New Email Question");
      expect(updatedQuiz.questions?.[1]?.data.type).toBe("email");

      // Verify timestamps
      expect(updatedQuiz.createdAt).toEqual(originalQuiz.createdAt); // Should be same
      expect(updatedQuiz.updatedAt).toBeDefined(); // Should have updated timestamp
    }),
  );
});
