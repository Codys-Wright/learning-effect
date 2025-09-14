import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const AdminResponsesOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz Responses</h2>
      <p className="text-muted-foreground mb-6">
        Overview of all quiz responses with analytics and management tools
      </p>
      <div className="border rounded-lg p-8 text-center">
        <p className="text-muted-foreground">Responses overview content will go here</p>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/admin/responses")({
  component: AdminResponsesOverview,
});
