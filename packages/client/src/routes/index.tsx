import { TestPage } from "@/features/test/test.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: TestPage,
});
