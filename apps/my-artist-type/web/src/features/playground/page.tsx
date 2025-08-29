import { ApiSwitcherDemo, HttpApiTypeAnalysisDemo } from "@features/quiz/client";

interface PageContainerProps {
  children: React.ReactNode;
}

// Simple container for our HttpApi Type Analysis Demo
export const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <div className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div className="h-full p-6">
      <div className="w-full h-full">{children}</div>
    </div>
  </div>
);

// Main playground page now shows our HttpApi type analysis demo
export const PlaygroundPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="h-full flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">🔍 HttpApi Type-Level Analysis</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Demonstrating compile-time API comparison and feature compatibility analysis
          </p>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="space-y-8 pb-8">
            {/* Main Analysis Demo */}
            <HttpApiTypeAnalysisDemo />

            {/* Interactive API Switcher */}
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">🎮 Try It Out</h2>
                <p className="text-muted-foreground">
                  See how you can switch between compatible APIs at runtime
                </p>
              </div>
              <ApiSwitcherDemo />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
