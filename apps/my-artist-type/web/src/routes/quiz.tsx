import { BackgroundWrapper } from "@/features/landing";
import { QuizTakerPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

function QuizPage() {
  return (
    <BackgroundWrapper>
      <QuizTakerPage />
    </BackgroundWrapper>
  );
}

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});
