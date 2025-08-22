import { RootPage } from "@/features/root/root.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/styles")({
  component: RootPage,
});
