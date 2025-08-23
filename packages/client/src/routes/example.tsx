import { ExamplePage } from "@/features/example/example.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example")({
  component: ExamplePage,
});
