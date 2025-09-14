import { ResponsesTable } from "@features/quiz/client";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

// Mock data for the responses table
const mockTableData = [
  {
    id: 1,
    header: "Executive Summary",
    type: "Executive Summary",
    status: "Done",
    target: "500",
    limit: "1000",
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    header: "Technical Approach",
    type: "Technical Approach",
    status: "In Progress",
    target: "800",
    limit: "1200",
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 3,
    header: "Design Specifications",
    type: "Design",
    status: "Not Started",
    target: "300",
    limit: "600",
    reviewer: "Assign reviewer",
  },
  {
    id: 4,
    header: "Capabilities Overview",
    type: "Capabilities",
    status: "Done",
    target: "400",
    limit: "800",
    reviewer: "Emily Whalen",
  },
  {
    id: 5,
    header: "Focus Documents",
    type: "Focus Documents",
    status: "In Progress",
    target: "600",
    limit: "1000",
    reviewer: "Eddie Lake",
  },
];

const AdminResponsesOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz Responses</h2>
      <p className="text-muted-foreground mb-6">
        Overview of all quiz responses with analytics and management tools
      </p>

      <ResponsesTable data={mockTableData} />
    </div>
  );
};

export const Route = createFileRoute("/admin/responses")({
  component: AdminResponsesOverview,
});
