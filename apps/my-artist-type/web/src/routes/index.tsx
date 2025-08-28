import { createFileRoute } from "@tanstack/react-router";

const RootComponent = () => {
  return (
    <div>
      <h1>Welcome to the Root Component</h1>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RootComponent,
});
