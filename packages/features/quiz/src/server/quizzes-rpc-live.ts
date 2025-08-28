import { HttpApiBuilder } from "@effect/platform";
import { DomainApi } from "@my-artist-type/domain/domain-api";
import { Effect, Layer } from "effect";
import { QuestionService } from "../questions/question-service.js";
import { QuizzesRepo } from "./internal/quizzes-repo.js";

export const QuizzesRpcLive = HttpApiBuilder.group(DomainApi, "Quizzes", (handlers) =>
  Effect.gen(function* () {
    const repo = yield* QuizzesRepo;
    const questionService = yield* QuestionService;

    return handlers
      .handle("list", () => repo.findAll())
      .handle("upsert", ({ payload }) =>
        Effect.gen(function* () {
          // Transform questions using the question service
          const questions =
            payload.questions !== undefined
              ? yield* questionService.createMany(payload.questions)
              : undefined;

          if (payload.id !== undefined) {
            return yield* repo.update({
              id: payload.id,
              title: payload.title,
              subtitle: payload.subtitle,
              description: payload.description,
              version: payload.version ?? "1.0.0",
              questions,
              metadata: payload.metadata,
            });
          }
          return yield* repo.create({
            title: payload.title,
            subtitle: payload.subtitle,
            description: payload.description,
            version: payload.version ?? "1.0.0",
            questions: questions ?? [],
            metadata: payload.metadata,
          });
        }),
      )
      .handle("delete", ({ payload }) => repo.del(payload.id));
  }),
).pipe(Layer.provide([QuizzesRepo.Default, QuestionService.Default]));
