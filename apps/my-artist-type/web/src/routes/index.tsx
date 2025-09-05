import { LandingPage } from "@/features/landing";
import { createFileRoute } from "@tanstack/react-router";

const _RootComponent = () => {
  return (
    <div>
      <h1>Welcome to the Root Component</h1>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: LandingPage,
  ssr: false,
});
