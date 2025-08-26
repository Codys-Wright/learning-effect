import { QuizPage } from "@/features/quiz/quiz.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});
