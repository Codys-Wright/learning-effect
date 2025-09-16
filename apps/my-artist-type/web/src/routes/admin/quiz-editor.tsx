import { QuizEditorLayout } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/quiz-editor")({
  component: RouteComponent,
});

function RouteComponent() {
  return <QuizEditorLayout />;
}
