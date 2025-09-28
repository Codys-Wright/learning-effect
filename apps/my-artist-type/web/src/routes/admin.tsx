import { useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import {
  AdminSidebar,
  adminSidebarVisibleAtom,
  allAnalysisAtom,
  AnalysisChart,
  combineResponseWithAnalysis,
  responsesAtom,
  ResponsesOverTimeChart,
  ResponsesTable,
  ResponseStatsCards,
} from "@features/quiz/client";
import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider } from "@ui/shadcn";
import React from "react";

const AdminLayout: React.FC = () => {
  const location = useLocation();

  // Check if we're on the quiz-editor route
  const isQuizEditorRoute = location.pathname === "/admin/quiz-editor";

  // Control sidebar state with atom - prevent hydration mismatch
  const [isHydrated, setIsHydrated] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const sidebarOpen = useAtomValue(adminSidebarVisibleAtom);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const setSidebarOpen = useAtomSet(adminSidebarVisibleAtom);

  // Prevent hydration mismatch by waiting for client hydration
  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Get actual responses data from the atom
  const responsesResult = useAtomValue(responsesAtom);
  const analysisResult = useAtomValue(allAnalysisAtom);

  // Combine response and analysis data
  const combinedData = React.useMemo(() => {
    if (responsesResult._tag === "Success" && analysisResult._tag === "Success") {
      return combineResponseWithAnalysis(responsesResult.value, analysisResult.value);
    }
    return [] as const;
  }, [responsesResult, analysisResult]);

  return (
    <SidebarProvider open={isHydrated ? sidebarOpen : true} onOpenChange={setSidebarOpen}>
      <AdminSidebar variant="inset" />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div
              className={`flex flex-col gap-4 ${!isQuizEditorRoute ? "py-4 md:py-6" : ""} md:gap-6`}
            >
              {!isQuizEditorRoute && (
                <>
                  <div className="px-4 lg:px-6">
                    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                  </div>

                  {/* Response Statistics */}
                  <div className="px-4 lg:px-6">
                    <h2 className="text-xl font-semibold mb-4">Response Statistics</h2>
                    <ResponseStatsCards responsesResult={responsesResult} />
                  </div>

                  {/* Charts Section */}
                  <div className="px-4 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                      {/* Analysis Chart */}
                      <div className="lg:col-span-3">
                        <AnalysisChart />
                      </div>

                      {/* Responses Over Time Chart */}
                      <div className="lg:col-span-7">
                        <ResponsesOverTimeChart />
                      </div>
                    </div>
                  </div>

                  {/* Responses Table */}
                  <div className="px-4 lg:px-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Responses</h2>
                    {responsesResult._tag === "Success" && analysisResult._tag === "Success" ? (
                      <ResponsesTable data={combinedData} />
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        Loading responses and analysis data...
                      </div>
                    )}
                  </div>
                </>
              )}

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
