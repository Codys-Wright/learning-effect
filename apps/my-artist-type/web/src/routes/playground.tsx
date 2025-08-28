import { PlaygroundPage } from "@/features/playground/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground")({
  component: PlaygroundPage,
});
