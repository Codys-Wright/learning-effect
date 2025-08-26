import { UpsertQuizPayload } from "@org/domain/quiz/quiz-rpc";
import { Arbitrary, FastCheck } from "effect";

/**
 * Generate fake quiz data using Arbitrary.make()
 * @param count - Number of quizzes to generate (defaults to 1)
 * @returns Single quiz if count is 1, array of quizzes if count > 1
 */
export function generate(count?: number): UpsertQuizPayload | UpsertQuizPayload[] {
  const actualCount = count ?? 1;
  const quizArb = Arbitrary.make(UpsertQuizPayload);
  const quizzes = FastCheck.sample(quizArb, actualCount);

  if (actualCount === 1) {
    if (quizzes.length === 0) {
      throw new Error("Failed to generate quiz");
    }
    return quizzes[0]!;
  }

  return quizzes;
}
