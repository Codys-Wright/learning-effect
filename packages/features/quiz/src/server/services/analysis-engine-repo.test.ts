import { PgContainer } from "@core/server";
import { expect, it } from "@effect/vitest";
import { Effect, Layer } from "effect";
import { AnalysisEngineRepo } from "./analysis-engine-repo.js";

// Set up the test layer with database dependencies
const layer = Layer.mergeAll(AnalysisEngineRepo.DefaultWithoutDependencies).pipe(
  Layer.provide(PgContainer.Live),
);

// Define the test suite with the layer and timeout configuration
// eslint-disable-next-line no-shadow
it.layer(layer, { timeout: "30 seconds" })("AnalysisEngineRepo", (it) => {
  // Test CREATE operation - Verifies we can create an analysis engine
  it.effect(
    "should create an analysis engine",
    Effect.fnUntraced(function* () {
      // Get the repository service from the Effect context
      const repo = yield* AnalysisEngineRepo;

      // Create a new analysis engine with minimal required fields
      const newEngine = yield* repo.create({
        version: "1.0.0",
        slug: "test-artist-type-engine",
        name: "Test Artist Type Engine",
        description: "A test analysis engine for artist types",
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
            shortName: "Visionary",
            fullName: "The Visionary Artist",
            questionRules: [
              {
                questionId: "1",
                idealAnswers: [9, 10],
                isPrimary: true,
                weightMultiplier: 1.0,
                distanceGamma: 1.6,
              },
              {
                questionId: "2",
                idealAnswers: [6],
                isPrimary: false,
                weightMultiplier: 1.0,
                distanceGamma: 1.6,
              },
            ],
            customScoringConfig: undefined,
            category: "artist-type",
          },
        ],
        metadata: {
          category: "personality",
          tags: ["artist", "creative"],
        },
        isActive: true,
      });

      // Verify the engine was created with correct data
      expect(newEngine).toBeDefined();
      expect(newEngine.name).toBe("Test Artist Type Engine");
      expect(newEngine.slug).toBe("test-artist-type-engine");
      expect(newEngine.version).toBe("1.0.0");
      expect(newEngine.description).toBe("A test analysis engine for artist types");
      expect(newEngine.isActive).toBe(true);

      // Verify scoring config
      expect(newEngine.scoringConfig).toBeDefined();
      expect(newEngine.scoringConfig.primaryWeight).toBe(1.5);
      expect(newEngine.scoringConfig.nonPrimaryWeight).toBe(0.2);
      expect(newEngine.scoringConfig.distanceGamma).toBe(1.6);
      expect(newEngine.scoringConfig.beta).toBe(1.4);
      expect(newEngine.scoringConfig.scoreMultiplier).toBe(1.0);

      // Verify endings
      expect(newEngine.endings).toBeDefined();
      expect(newEngine.endings).toHaveLength(1);
      expect(newEngine.endings[0]?.endingId).toBe("visionary-artist");
      expect(newEngine.endings[0]?.name).toBe("The Visionary Artist");
      expect(newEngine.endings[0]?.questionRules).toHaveLength(2);
      expect(newEngine.endings[0]?.questionRules[0]?.questionId).toBe("1");
      expect(newEngine.endings[0]?.questionRules[0]?.idealAnswers).toEqual([9, 10]);
      expect(newEngine.endings[0]?.questionRules[0]?.isPrimary).toBe(true);

      // Verify metadata
      expect(newEngine.metadata).toBeDefined();
      expect(newEngine.metadata?.category).toBe("personality");
      expect(newEngine.metadata?.tags).toEqual(["artist", "creative"]);

      // Verify auto-generated fields are present
      expect(newEngine.id).toBeDefined();
      expect(newEngine.createdAt).toBeDefined();
      expect(newEngine.updatedAt).toBeDefined();
      expect(newEngine.deletedAt).toBeNull();
    }),
  );

  // Test FIND BY SLUG operation - Verifies we can find an engine by slug
  it.effect(
    "should find analysis engine by slug",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisEngineRepo;

      // Create a test engine first
      const originalEngine = yield* repo.create({
        version: "1.0.0",
        slug: "test-find-by-slug",
        name: "Find By Slug Test Engine",
        description: "Test engine for finding by slug",
        scoringConfig: {
          primaryWeight: 1.0,
          nonPrimaryWeight: 0.5,
          distanceGamma: 2.0,
          beta: 1.2,
          scoreMultiplier: 1.0,
        },
        endings: [],
        metadata: null,
        isActive: true,
      });

      // Find the engine by slug
      const foundEngine = yield* repo.findBySlug("test-find-by-slug");

      // Verify we found the correct engine
      expect(foundEngine).toBeDefined();
      expect(foundEngine.id).toBe(originalEngine.id);
      expect(foundEngine.slug).toBe("test-find-by-slug");
      expect(foundEngine.name).toBe("Find By Slug Test Engine");
    }),
  );

  // Test FIND BY SLUG AND VERSION operation - Verifies we can find a specific version
  it.effect(
    "should find analysis engine by slug and version",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisEngineRepo;

      // Create a test engine with specific version
      const originalEngine = yield* repo.create({
        version: "2.1.0",
        slug: "test-version-find",
        name: "Version Find Test Engine",
        description: "Test engine for finding by version",
        scoringConfig: {
          primaryWeight: 2.0,
          nonPrimaryWeight: 1.0,
          distanceGamma: 1.5,
          beta: 1.8,
          scoreMultiplier: 1.5,
        },
        endings: [],
        metadata: null,
        isActive: true,
      });

      // Find the engine by slug and version
      const foundEngine = yield* repo.findBySlugAndVersion("test-version-find", "2.1.0");

      // Verify we found the correct engine
      expect(foundEngine).toBeDefined();
      expect(foundEngine.id).toBe(originalEngine.id);
      expect(foundEngine.slug).toBe("test-version-find");
      expect(foundEngine.version).toBe("2.1.0");
      expect(foundEngine.scoringConfig.scoreMultiplier).toBe(1.5);
    }),
  );

  // Test UPDATE operation - Verifies we can update an analysis engine
  it.effect(
    "should update an analysis engine",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisEngineRepo;

      // Create an initial engine
      const originalEngine = yield* repo.create({
        version: "1.0.0",
        slug: "test-update-engine",
        name: "Original Engine Name",
        description: "Original description",
        scoringConfig: {
          primaryWeight: 1.0,
          nonPrimaryWeight: 0.5,
          distanceGamma: 1.5,
          beta: 1.0,
          scoreMultiplier: 1.0,
        },
        endings: [
          {
            endingId: "original-ending",
            name: "Original Ending",
            questionRules: [
              {
                questionId: "1",
                idealAnswers: [5],
                isPrimary: false,
              },
            ],
          },
        ],
        metadata: { original: true },
        isActive: true,
      });

      // Update the engine
      const updatedEngine = yield* repo.update({
        id: originalEngine.id,
        version: "1.1.0",
        slug: "test-update-engine",
        name: "Updated Engine Name",
        description: "Updated description",
        scoringConfig: {
          primaryWeight: 2.0,
          nonPrimaryWeight: 1.0,
          distanceGamma: 2.0,
          beta: 1.5,
          scoreMultiplier: 1.2,
        },
        endings: [
          {
            endingId: "updated-ending",
            name: "Updated Ending",
            questionRules: [
              {
                questionId: "2",
                idealAnswers: [8, 9],
                isPrimary: true,
              },
            ],
          },
        ],
        metadata: { updated: true, version: "1.1.0" },
        isActive: false,
      });

      // Verify the engine was updated correctly
      expect(updatedEngine).toBeDefined();
      expect(updatedEngine.id).toBe(originalEngine.id); // Same ID
      expect(updatedEngine.name).toBe("Updated Engine Name");
      expect(updatedEngine.description).toBe("Updated description");
      expect(updatedEngine.version).toBe("1.1.0");
      expect(updatedEngine.isActive).toBe(false);

      // Verify scoring config was updated
      expect(updatedEngine.scoringConfig.primaryWeight).toBe(2.0);
      expect(updatedEngine.scoringConfig.scoreMultiplier).toBe(1.2);

      // Verify endings were updated
      expect(updatedEngine.endings).toHaveLength(1);
      expect(updatedEngine.endings[0]?.endingId).toBe("updated-ending");
      expect(updatedEngine.endings[0]?.name).toBe("Updated Ending");

      // Verify metadata was updated
      expect(updatedEngine.metadata?.updated).toBe(true);
      expect(updatedEngine.metadata?.version).toBe("1.1.0");

      // Verify timestamps
      expect(updatedEngine.createdAt).toEqual(originalEngine.createdAt); // Should be same
      expect(updatedEngine.updatedAt).toBeDefined(); // Should have updated timestamp
    }),
  );

  // Test SOFT DELETE operation - Verifies we can soft delete an analysis engine
  it.effect(
    "should soft delete an analysis engine",
    Effect.fnUntraced(function* () {
      const repo = yield* AnalysisEngineRepo;

      // Create a test engine
      const newEngine = yield* repo.create({
        version: "1.0.0",
        slug: "test-delete-engine",
        name: "Delete Test Engine",
        description: "Test engine for deletion",
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

      // Soft delete the engine
      yield* repo.del(newEngine.id);

      // Verify the engine is no longer in findAll results
      const allEngines = yield* repo.findAll();
      const deletedEngine = allEngines.find((e) => e.id === newEngine.id);
      expect(deletedEngine).toBeUndefined();
    }),
  );
});
