import { RadarTestPage } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/radar-test")({
  component: RadarTestPage,
});
