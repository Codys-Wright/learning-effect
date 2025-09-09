import { PgContainer } from "@core/server";
import { expect, it } from "@effect/vitest";
import { DateTime, Effect, Layer } from "effect";
import { AnalysisEngineRepo } from "./analysis-engine-repo.js";
import { AnalysisRepo } from "./analysis-repo.js";
import { QuizzesRepo } from "./quizzes-repo.js";
import { ResponsesRepo } from "./responses-repo.js";

// Set up the test layer with database dependencies
const layer = Layer.mergeAll(
  AnalysisRepo.DefaultWithoutDependencies,
  AnalysisEngineRepo.DefaultWithoutDependencies,
  ResponsesRepo.DefaultWithoutDependencies,
  QuizzesRepo.DefaultWithoutDependencies,
).pipe(Layer.provide(PgContainer.Live));

// Define the test suite with the layer and timeout configuration
// eslint-disable-next-line no-shadow
it.layer(layer, { timeout: "30 seconds" })("AnalysisRepo", (it) => {
  // Test CREATE operation - Verifies we can create an analysis result
  it.effect(
    "should create an analysis result",
    Effect.fnUntraced(function* () {
      // Get the repository services from the Effect context
      const repo = yield* AnalysisRepo;
      const engineRepo = yield* AnalysisEngineRepo;
      const responsesRepo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create a quiz first
      const quiz = yield* quizzesRepo.create({
        title: "Test Quiz for Analysis",
        subtitle: "A test quiz",
        description: "Test quiz for analysis testing",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      // Create a response
      const now = yield* DateTime.now;
      const response = yield* responsesRepo.create({
        quizId: quiz.id,
        answers: [
          {
            questionId: "1",
            value: 8,
            answeredAt: now,
            timeSpentMs: 5000,
          },
          {
            questionId: "2",
            value: 6,
            answeredAt: now,
            timeSpentMs: 3000,
          },
        ],
        sessionMetadata: {
          startedAt: now,
          completedAt: now,
          totalDurationMs: 10000,
        },
        interactionLogs: [],
        metadata: null,
      });

      // Create an analysis engine
      const engine = yield* engineRepo.create({
        version: "1.0.0",
        slug: "test-analysis-engine",
        name: "Test Analysis Engine",
        description: "Test engine for analysis results",
        scoringConfig: {
          primaryWeight: 1.5,
          nonPrimaryWeight: 0.2,
          distanceGamma: 1.6,
          beta: 1.4,
          scoreMultiplier: 1.0,
        },
        endings: [
          {
            endingId: "visionary-artist",
            name: "The Visionary Artist",
            questionRules: [
              {
                questionId: "1",
                idealAnswers: [8, 9, 10],
                isPrimary: true,
              },
            ],
          },
        ],
        metadata: null,
        isActive: true,
      });

      // Create a new analysis result
      const analysisTime = yield* DateTime.now;
      const newAnalysis = yield* repo.create({
        engineId: engine.id,
        engineSlug: engine.slug,
        engineVersion: engine.version,
        responseId: response.id,
        endingResults: [
          {
            endingId: "visionary-artist",
            points: 15.5,
            percentage: 85.2,
            isWinner: true,
            questionBreakdown: [
              {
                questionId: "1",
                points: 15.5,
                idealAnswers: [8, 9, 10],
                userAnswer: 8,
                distance: 0,
                weight: 1.5,
              },
            ],
          },
        ],
        metadata: {
          analysisVersion: "1.0.0",
          totalQuestions: 2,
          answeredQuestions: 2,
        },
        analyzedAt: analysisTime,
      });

      // Verify the analysis was created with correct data
      expect(newAnalysis).toBeDefined();
      expect(newAnalysis.engineId).toBe(engine.id);
      expect(newAnalysis.engineSlug).toBe("test-analysis-engine");
      expect(newAnalysis.engineVersion).toBe("1.0.0");
      expect(newAnalysis.responseId).toBe(response.id);
      expect(newAnalysis.analyzedAt).toBeDefined();

      // Verify ending results
      expect(newAnalysis.endingResults).toBeDefined();
      expect(newAnalysis.endingResults).toHaveLength(1);
      expect(newAnalysis.endingResults[0]?.endingId).toBe("visionary-artist");
      expect(newAnalysis.endingResults[0]?.points).toBe(15.5);
      expect(newAnalysis.endingResults[0]?.percentage).toBe(85.2);
      expect(newAnalysis.endingResults[0]?.isWinner).toBe(true);
      expect(newAnalysis.endingResults[0]?.questionBreakdown).toBeDefined();
      expect(newAnalysis.endingResults[0]?.questionBreakdown).toHaveLength(1);
      expect(newAnalysis.endingResults[0]?.questionBreakdown?.[0]?.questionId).toBe("1");
      expect(newAnalysis.endingResults[0]?.questionBreakdown?.[0]?.userAnswer).toBe(8);

      // Verify metadata
      expect(newAnalysis.metadata).toBeDefined();
      expect(newAnalysis.metadata?.analysisVersion).toBe("1.0.0");
      expect(newAnalysis.metadata?.totalQuestions).toBe(2);

      // Verify auto-generated fields are present
      expect(newAnalysis.id).toBeDefined();
      expect(newAnalysis.createdAt).toBeDefined();
      expect(newAnalysis.updatedAt).toBeDefined();
      expect(newAnalysis.deletedAt).toBeNull();
    }),
  );

  // Test FIND BY RESPONSE ID operation - Verifies we can find analysis results by response
  it.effect(
    "should find analysis results by response ID",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisRepo;
      const engineRepo = yield* AnalysisEngineRepo;
      const responsesRepo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create test data
      const quiz = yield* quizzesRepo.create({
        title: "Test Quiz 2",
        subtitle: "Another test quiz",
        description: "Test quiz 2",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      const now = yield* DateTime.now;
      const response = yield* responsesRepo.create({
        quizId: quiz.id,
        answers: [],
        sessionMetadata: { startedAt: now },
        interactionLogs: [],
        metadata: null,
      });

      const engine = yield* engineRepo.create({
        version: "1.0.0",
        slug: "test-engine-2",
        name: "Test Engine 2",
        description: "Test engine 2",
        scoringConfig: {
          primaryWeight: 1.0,
          nonPrimaryWeight: 0.5,
          distanceGamma: 1.5,
          beta: 1.0,
          scoreMultiplier: 1.0,
        },
        endings: [],
        metadata: null,
        isActive: true,
      });

      // Create analysis result
      const analysisTime = yield* DateTime.now;
      yield* repo.create({
        engineId: engine.id,
        engineSlug: engine.slug,
        engineVersion: engine.version,
        responseId: response.id,
        endingResults: [],
        metadata: null,
        analyzedAt: analysisTime,
      });

      // Find analysis results by response ID
      const results = yield* repo.findByResponseId(response.id);

      // Verify we found the analysis result
      expect(results).toBeDefined();
      expect(results.length).toBeGreaterThan(0);
      expect(results[0]?.responseId).toBe(response.id);
      expect(results[0]?.engineId).toBe(engine.id);
    }),
  );

  // Test FIND BY ENGINE ID operation - Verifies we can find analysis results by engine
  it.effect(
    "should find analysis results by engine ID",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisRepo;
      const engineRepo = yield* AnalysisEngineRepo;
      const responsesRepo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create test data
      const quiz = yield* quizzesRepo.create({
        title: "Test Quiz 3",
        subtitle: "Quiz for engine find test",
        description: "Test quiz 3",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      const now = yield* DateTime.now;
      const response = yield* responsesRepo.create({
        quizId: quiz.id,
        answers: [],
        sessionMetadata: { startedAt: now },
        interactionLogs: [],
        metadata: null,
      });

      const engine = yield* engineRepo.create({
        version: "1.0.0",
        slug: "test-engine-3",
        name: "Test Engine 3",
        description: "Test engine 3",
        scoringConfig: {
          primaryWeight: 2.0,
          nonPrimaryWeight: 1.0,
          distanceGamma: 2.0,
          beta: 1.5,
          scoreMultiplier: 1.2,
        },
        endings: [],
        metadata: null,
        isActive: true,
      });

      // Create analysis result
      const analysisTime = yield* DateTime.now;
      yield* repo.create({
        engineId: engine.id,
        engineSlug: engine.slug,
        engineVersion: engine.version,
        responseId: response.id,
        endingResults: [],
        metadata: null,
        analyzedAt: analysisTime,
      });

      // Find analysis results by engine ID
      const results = yield* repo.findByEngineId(engine.id);

      // Verify we found the analysis result
      expect(results).toBeDefined();
      expect(results.length).toBeGreaterThan(0);
      expect(results[0]?.engineId).toBe(engine.id);
      expect(results[0]?.responseId).toBe(response.id);
    }),
  );

  // Test FIND BY RESPONSE AND ENGINE operation - Verifies we can find specific analysis
  it.effect(
    "should find analysis result by response and engine",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisRepo;
      const engineRepo = yield* AnalysisEngineRepo;
      const responsesRepo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create test data
      const quiz = yield* quizzesRepo.create({
        title: "Test Quiz 4",
        subtitle: "Quiz for specific find test",
        description: "Test quiz 4",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      const now = yield* DateTime.now;
      const response = yield* responsesRepo.create({
        quizId: quiz.id,
        answers: [],
        sessionMetadata: { startedAt: now },
        interactionLogs: [],
        metadata: null,
      });

      const engine = yield* engineRepo.create({
        version: "1.0.0",
        slug: "test-engine-4",
        name: "Test Engine 4",
        description: "Test engine 4",
        scoringConfig: {
          primaryWeight: 1.5,
          nonPrimaryWeight: 0.3,
          distanceGamma: 1.8,
          beta: 1.3,
          scoreMultiplier: 1.1,
        },
        endings: [],
        metadata: null,
        isActive: true,
      });

      // Create analysis result
      const analysisTime = yield* DateTime.now;
      const originalAnalysis = yield* repo.create({
        engineId: engine.id,
        engineSlug: engine.slug,
        engineVersion: engine.version,
        responseId: response.id,
        endingResults: [
          {
            endingId: "test-ending",
            points: 10.0,
            percentage: 100.0,
            isWinner: true,
            questionBreakdown: [],
          },
        ],
        metadata: { test: true },
        analyzedAt: analysisTime,
      });

      // Find analysis result by response and engine
      const foundAnalysis = yield* repo.findByResponseAndEngine(response.id, engine.id);

      // Verify we found the correct analysis result
      expect(foundAnalysis).toBeDefined();
      expect(foundAnalysis.id).toBe(originalAnalysis.id);
      expect(foundAnalysis.responseId).toBe(response.id);
      expect(foundAnalysis.engineId).toBe(engine.id);
      expect(foundAnalysis.endingResults).toHaveLength(1);
      expect(foundAnalysis.endingResults[0]?.endingId).toBe("test-ending");
      expect(foundAnalysis.metadata?.test).toBe(true);
    }),
  );

  // Test SOFT DELETE operation - Verifies we can soft delete an analysis result
  it.effect(
    "should soft delete an analysis result",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisRepo;
      const engineRepo = yield* AnalysisEngineRepo;
      const responsesRepo = yield* ResponsesRepo;
      const quizzesRepo = yield* QuizzesRepo;

      // Create test data
      const quiz = yield* quizzesRepo.create({
        title: "Test Quiz 5",
        subtitle: "Quiz for delete test",
        description: "Test quiz 5",
        version: "1.0.0",
        questions: [],
        metadata: null,
      });

      const now = yield* DateTime.now;
      const response = yield* responsesRepo.create({
        quizId: quiz.id,
        answers: [],
        sessionMetadata: { startedAt: now },
        interactionLogs: [],
        metadata: null,
      });

      const engine = yield* engineRepo.create({
        version: "1.0.0",
        slug: "test-engine-5",
        name: "Test Engine 5",
        description: "Test engine 5",
        scoringConfig: {
          primaryWeight: 1.0,
          nonPrimaryWeight: 0.5,
          distanceGamma: 1.5,
          beta: 1.0,
          scoreMultiplier: 1.0,
        },
        endings: [],
        metadata: null,
        isActive: true,
      });

      // Create analysis result
      const analysisTime = yield* DateTime.now;
      const newAnalysis = yield* repo.create({
        engineId: engine.id,
        engineSlug: engine.slug,
        engineVersion: engine.version,
        responseId: response.id,
        endingResults: [],
        metadata: null,
        analyzedAt: analysisTime,
      });

      // Soft delete the analysis result
      yield* repo.del(newAnalysis.id);

      // Verify the analysis result is no longer in findAll results
      const allAnalyses = yield* repo.findAll();
      const deletedAnalysis = allAnalyses.find((a) => a.id === newAnalysis.id);
      expect(deletedAnalysis).toBeUndefined();
    }),
  );
});
