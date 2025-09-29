import { LandingPage } from "@/features/landing";
import { createFileRoute } from "@tanstack/react-router";

// Removed unused _RootComponent

export const Route = createFileRoute("/")({
  component: LandingPage,
  ssr: false,
});
