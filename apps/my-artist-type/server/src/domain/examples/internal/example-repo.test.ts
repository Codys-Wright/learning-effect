import { PgContainer } from "@/lib/test-utils/pg-container.js";
import { expect, it } from "@effect/vitest";
import { ExampleId } from "@my-artist-type/domain/example-rpc";
import { Effect, Layer, Schema } from "effect";
import { ExamplesRepo } from "./example-repo.js";

// 1) Set up the test layer with database dependencies
//    - ExamplesRepo.DefaultWithoutDependencies provides the service without its dependencies
//    - Layer.provide(PgContainer.Live) injects a test database container
//    - This creates an isolated test environment with a real PostgreSQL instance
const layer = ExamplesRepo.DefaultWithoutDependencies.pipe(Layer.provide(PgContainer.Live));

// 2) Define the test suite with the layer and timeout configuration
//    - it.layer() provides the ExamplesRepo service to all nested tests
//    - timeout: "30 seconds" allows time for database operations and container startup
//    - Each test will have access to a fresh database state
it.layer(layer, { timeout: "30 seconds" })("ExamplesRepo", (it) => {
  // 3a) Test CREATE operation - Verifies we can insert new examples with metadata
  it.effect(
    "should create an example with metadata",
    Effect.fnUntraced(function* () {
      // Get the repository service from the Effect context
      const repo = yield* ExamplesRepo;

      // Create a new example with all supported fields
      const newExample = yield* repo.create({
        name: "test-create-example",
        description: "This is a test example for creation",
        version: "1.0.0",
        metadata: {
          tags: ["test", "example", "creation"],
          customFields: {
            priority: "high",
            category: "testing",
          },
        },
      });

      // Verify the example was created with correct data
      expect(newExample).toBeDefined();
      expect(newExample.name).toBe("test-create-example");
      expect(newExample.description).toBe("This is a test example for creation");

      // Verify metadata was properly serialized and parsed
      expect(newExample.metadata).not.toBeNull();
      expect(newExample.metadata?.tags).toContain("test");
      expect(newExample.metadata?.customFields?.priority).toBe("high");

      // Verify auto-generated fields are present
      expect(newExample.id).toBeDefined();
      expect(newExample.version).toBe("1.0.0");
      expect(newExample.createdAt).toBeDefined();
      expect(newExample.updatedAt).toBeDefined();
    }),
  );

  // 3b) Test CREATE operation with null metadata - Verifies graceful handling of optional fields
  it.effect(
    "should create an example without metadata",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // Create example with minimal required fields only
      const newExample = yield* repo.create({
        name: "test-minimal-example",
        description: "Example with no metadata",
        version: "1.0.0",
        metadata: null,
      });

      expect(newExample).toBeDefined();
      expect(newExample.name).toBe("test-minimal-example");
      expect(newExample.metadata).toBeNull();
    }),
  );

  // 3c) Test FIND ALL operation - Verifies retrieval of all examples from database
  it.effect(
    "should find all examples",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // First create an example to ensure we have data to find
      const createdExample = yield* repo.create({
        name: "test-find-example",
        description: "Example for find all test",
        version: "1.0.0",
        metadata: {
          tags: ["findable"],
        },
      });

      // Retrieve all examples from the database
      const examples = yield* repo.findAll();

      // Verify we got results and our created example is included
      expect(examples.length).toBeGreaterThan(0);
      expect(examples).toContainEqual(createdExample);

      // Verify that all returned examples have the expected structure
      examples.forEach((example) => {
        expect(example.id).toBeDefined();
        expect(example.name).toBeDefined();
        expect(example.version).toBeDefined();
        expect(example.createdAt).toBeDefined();
      });
    }),
  );

  // 3d) Test UPDATE operation - Verifies we can modify existing examples
  it.effect(
    "should update an example",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // First create an example to update
      const originalExample = yield* repo.create({
        name: "test-update-before",
        description: "Original description",
        version: "1.0.0",
        metadata: {
          tags: ["original"],
          customFields: { status: "draft" },
        },
      });

      // Update the example with new data
      const updatedExample = yield* repo.update({
        id: originalExample.id,
        name: "test-update-after",
        description: "Updated description",
        version: "1.1.0",
        metadata: {
          tags: ["updated", "modified"],
          customFields: {
            status: "published",
            lastModified: "2024-01-01",
          },
        },
      });

      // Verify the update preserved the ID but changed the data
      expect(updatedExample.id).toBe(originalExample.id);
      expect(updatedExample.name).toBe("test-update-after");
      expect(updatedExample.description).toBe("Updated description");

      // Verify metadata was properly updated
      expect(updatedExample.metadata?.tags).toContain("updated");
      expect(updatedExample.metadata?.customFields?.status).toBe("published");

      // Verify version was updated to the provided value
      expect(updatedExample.version).toBe("1.1.0");
    }),
  );

  // 3e) Test UPDATE operation with partial data - Verifies partial updates work correctly
  it.effect(
    "should update an example with partial data",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      const originalExample = yield* repo.create({
        name: "test-partial-original",
        description: "Original description",
        version: "2.0.0",
        metadata: {
          tags: ["original"],
        },
      });

      // Update only the name and version, leaving description and metadata unchanged
      const updatedExample = yield* repo.update({
        id: originalExample.id,
        name: "test-partial-updated",
        version: "2.0.1",
        description: originalExample.description, // Keep original
        metadata: originalExample.metadata, // Keep original
      });

      expect(updatedExample.name).toBe("test-partial-updated");
      expect(updatedExample.version).toBe("2.0.1");
      expect(updatedExample.description).toBe("Original description");
      expect(updatedExample.metadata?.tags).toContain("original");
    }),
  );

  // 3f) Test DELETE operation - Verifies we can remove examples from database
  it.effect(
    "should delete an example",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // First create an example to delete
      const exampleToDelete = yield* repo.create({
        name: "test-delete-example",
        description: "This example will be deleted",
        version: "1.0.0",
        metadata: {
          tags: ["temporary"],
        },
      });

      // Delete the example
      yield* repo.del(exampleToDelete.id);

      // Verify the example is no longer in the database
      const examples = yield* repo.findAll();
      expect(examples).not.toContain(exampleToDelete);

      // Verify that other examples are still present (deletion was targeted)
      const remainingExampleIds = examples.map((e) => e.id);
      expect(remainingExampleIds).not.toContain(exampleToDelete.id);
    }),
  );

  // 3g) Test SOFT DELETE functionality - Verifies soft delete behavior
  it.effect(
    "should soft delete an example and exclude it from queries",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // First create an example to soft delete
      const exampleToSoftDelete = yield* repo.create({
        name: "test-soft-delete",
        description: "This example will be soft deleted",
        version: "1.0.0",
        metadata: {
          tags: ["temporary"],
        },
      });

      // Create another example that should remain visible
      const permanentExample = yield* repo.create({
        name: "test-permanent",
        description: "This example should remain visible",
        version: "1.0.0",
        metadata: null,
      });

      // Soft delete the first example
      yield* repo.del(exampleToSoftDelete.id);

      // Verify the soft-deleted example is no longer returned in queries
      const examples = yield* repo.findAll();
      const remainingExampleIds = examples.map((e) => e.id);

      // Debug logging to understand what's happening
      yield* Effect.log("Created exampleToSoftDelete ID:", exampleToSoftDelete.id);
      yield* Effect.log("Created permanentExample ID:", permanentExample.id);
      yield* Effect.log("Examples after soft delete:", examples.length);
      yield* Effect.log("Remaining IDs:", remainingExampleIds);

      // Verify soft-deleted example is excluded from results
      expect(remainingExampleIds).not.toContain(exampleToSoftDelete.id);

      // Verify permanent example is still accessible
      expect(remainingExampleIds).toContain(permanentExample.id);

      // Verify we have at least one example (the permanent one)
      expect(examples.length).toBeGreaterThan(0);
    }),
  );

  it.effect(
    "should not allow updates to soft-deleted examples",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // Create and then soft delete an example
      const example = yield* repo.create({
        name: "test-update-deleted",
        description: "This will be soft deleted then updated",
        version: "1.0.0",
        metadata: null,
      });

      // Soft delete the example
      yield* repo.del(example.id);

      // Attempt to update the soft-deleted example
      const result = yield* Effect.either(
        repo.update({
          id: example.id,
          name: "updated-after-delete",
          description: "This should fail",
          version: "1.1.0",
          metadata: null,
        }),
      );

      // Verify that the update failed with ExampleNotFoundError
      expect(result._tag).toBe("Left");
      if (result._tag === "Left") {
        expect(result.left._tag).toBe("ExampleNotFoundError");
        expect(result.left.id).toBe(example.id);
      }
    }),
  );

  it.effect(
    "should handle double soft delete gracefully",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // Create an example
      const example = yield* repo.create({
        name: "test-double-delete",
        description: "This will be soft deleted twice",
        version: "1.0.0",
        metadata: null,
      });

      // First soft delete - should succeed
      yield* repo.del(example.id);

      // Second soft delete attempt - should fail with ExampleNotFoundError
      const result = yield* Effect.either(repo.del(example.id));

      expect(result._tag).toBe("Left");
      if (result._tag === "Left") {
        expect(result.left._tag).toBe("ExampleNotFoundError");
        expect(result.left.id).toBe(example.id);
      }
    }),
  );

  // 3h) Test ERROR HANDLING - Verifies proper error responses for invalid operations
  it.effect(
    "should handle update of non-existent example",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      // Attempt to update a non-existent example
      const nonExistentId = Schema.decodeSync(ExampleId)("00000000-0000-0000-0000-000000000000");

      const result = yield* Effect.either(
        repo.update({
          id: nonExistentId,
          name: "should-not-work",
          description: "This should fail",
          version: "1.0.0",
          metadata: null,
        }),
      );

      // Verify that the operation failed with the expected error
      expect(result._tag).toBe("Left");
      if (result._tag === "Left") {
        expect(result.left._tag).toBe("ExampleNotFoundError");
        expect(result.left.id).toBe(nonExistentId);
      }
    }),
  );

  it.effect(
    "should handle deletion of non-existent example",
    Effect.fnUntraced(function* () {
      const repo = yield* ExamplesRepo;

      const nonExistentId = Schema.decodeSync(ExampleId)("00000000-0000-0000-0000-000000000000");

      const result = yield* Effect.either(repo.del(nonExistentId));

      expect(result._tag).toBe("Left");
      if (result._tag === "Left") {
        expect(result.left._tag).toBe("ExampleNotFoundError");
      }
    }),
  );
});

// Test Structure Summary:
// 1. Layer setup with database container for isolated testing
// 2. CREATE tests - verify insertion with and without metadata
// 3. READ tests - verify retrieval of all records
// 4. UPDATE tests - verify modification of existing records (full and partial)
// 5. DELETE tests - verify removal of records (hard delete)
// 6. SOFT DELETE tests - verify soft delete behavior and exclusion from queries
// 7. ERROR tests - verify proper error handling for invalid operations
//
// Soft Delete Test Coverage:
// - Soft deleted records are excluded from findAll queries
// - Soft deleted records cannot be updated (return ExampleNotFoundError)
// - Double soft delete attempts fail gracefully
// - Other records remain accessible after soft deletes
//
// Each test follows the pattern:
// - Set up test data if needed
// - Perform the operation under test
// - Assert the expected outcomes
// - Verify side effects and isolation between operations
