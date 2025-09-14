import { Result } from "@effect-atom/atom-react";
import {
  AdminSidebar,
  AnalysisChart,
  ResponsesOverTimeChart,
  ResponsesTable,
  ResponseStatsCards,
} from "@features/quiz/client";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "@ui/shadcn";
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

const AdminLayout: React.FC = () => {
  // Simple mock data for demonstration - using empty array for now
  const mockResponsesResult = Result.success([]);

  return (
    <SidebarProvider defaultOpen={true}>
      <AdminSidebar variant="inset" />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
              </div>

              {/* Demo ResponseStatsCards */}
              <div className="px-4 lg:px-6">
                <h2 className="text-xl font-semibold mb-4">Response Statistics</h2>
                <ResponseStatsCards responsesResult={mockResponsesResult} />
              </div>

              {/* Charts Section */}
              <div className="px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Analysis Chart */}
                  <div className="lg:col-span-1">
                    <AnalysisChart />
                  </div>

                  {/* Responses Over Time Chart */}
                  <div className="lg:col-span-4">
                    <ResponsesOverTimeChart />
                  </div>
                </div>
              </div>

              {/* Responses Table */}
              <div className="px-4 lg:px-6">
                <h2 className="text-xl font-semibold mb-4">Recent Responses</h2>
                <ResponsesTable data={mockTableData} />
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});
