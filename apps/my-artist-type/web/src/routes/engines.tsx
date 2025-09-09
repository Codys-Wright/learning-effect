import { EnginesPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/engines")({
  component: EnginesPage,
});
