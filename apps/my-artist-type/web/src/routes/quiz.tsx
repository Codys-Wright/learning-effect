import { QuizPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});
