import { Result } from "@effect-atom/atom-react";
import { AppSidebar, ResponseStatsCards } from "@features/quiz/client";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

const AdminLayout: React.FC = () => {
  // Simple mock data for demonstration - using empty array for now
  const mockResponsesResult = Result.success([]);

  return (
    <AppSidebar title="Admin Dashboard">
      {/* Demo ResponseStatsCards */}
      <div className="px-4 lg:px-6">
        <h2 className="text-xl font-semibold mb-4">Response Statistics</h2>
        <ResponseStatsCards responsesResult={mockResponsesResult} />
      </div>

      <Outlet />
    </AppSidebar>
  );
};

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});
