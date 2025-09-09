import { AnalysisPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/analysis")({
  component: AnalysisPage,
});
