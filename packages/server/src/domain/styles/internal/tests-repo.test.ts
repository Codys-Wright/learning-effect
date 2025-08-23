import { PgContainer } from "@/lib/test-utils/pg-container.js";
import { expect, it } from "@effect/vitest";
import { Effect, Layer } from "effect";
import { TestsRepo } from "./tests-repo.js";

const layer = TestsRepo.DefaultWithoutDependencies.pipe(Layer.provide(PgContainer.Live));

it.layer(layer, { timeout: "30 seconds" })("TestsRepo", (it) => {
  it.effect(
    "should create a test",
    Effect.fnUntraced(function* () {
      const repo = yield* TestsRepo;
      const newTest = yield* repo.create({
        title: "test-create",
        description: "description-create",
      });

      expect(newTest).toBeDefined();
      expect(newTest.title).toBe("test-create");
    }),
  );

  it.effect(
    "should fine all tests",
    Effect.fnUntraced(function* () {
      const repo = yield* TestsRepo;
      const createdTest = yield* repo.create({
        title: "test-find",
        description: "description-find",
      });

      const tests = yield* repo.findAll();

      expect(tests.length).toBeGreaterThan(0);
      expect(tests).toContainEqual(createdTest);
    }),
  );

  it.effect(
    "should update a test",
    Effect.fnUntraced(function* () {
      const repo = yield* TestsRepo;
      const originalTest = yield* repo.create({
        title: "test-update-before",
        description: "description-update-before",
      });

      const updatedTest = yield* repo.update({
        id: originalTest.id,
        title: "test-update-after",
        description: "description-update-after",
      });
      expect(updatedTest.id).toBe(originalTest.id);

      expect(updatedTest.description).toBe("description-update-after");
    }),
  );

  it.effect(
    "should delete a test",
    Effect.fnUntraced(function* () {
      const repo = yield* TestsRepo;
      const testToDelete = yield* repo.create({
        title: "test-delete",
        description: "description-delete",
      });

      yield* repo.del(testToDelete.id);

      const tests = yield* repo.findAll();
      expect(tests).not.toContain(testToDelete);
    }),
  );
});
