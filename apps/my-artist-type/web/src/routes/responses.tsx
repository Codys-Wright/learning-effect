import { ResponsesPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/responses")({
  component: ResponsesPage,
});
