import { QuizTakerPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz-taker")({
  component: QuizTakerPage,
});
