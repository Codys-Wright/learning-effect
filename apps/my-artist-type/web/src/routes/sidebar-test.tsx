import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar, SidebarInset, SidebarProvider } from "@ui/shadcn";
import React from "react";

const SidebarTest: React.FC = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar variant="inset" />
        <SidebarInset className="flex-1 w-full">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Sidebar Test Page</h1>
            <p className="text-lg text-gray-600 mb-6">
              This page tests the sidebar component to see if it's working correctly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
                <p className="text-gray-600">Main dashboard content goes here.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-xl font-semibold mb-2">Analytics</h2>
                <p className="text-gray-600">Analytics data and charts.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-xl font-semibold mb-2">Projects</h2>
                <p className="text-gray-600">Project management tools.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Test Instructions</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Check if the sidebar appears on the left</li>
                <li>• Try clicking the sidebar toggle button (if visible)</li>
                <li>• Test the navigation items in the sidebar</li>
                <li>• Verify the main content is properly offset from the sidebar</li>
              </ul>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export const Route = createFileRoute("/sidebar-test")({
  component: SidebarTest,
});
