import { Result, useAtomRefresh, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { type Question, type Quiz } from "@features/quiz/domain";
import { Button } from "@ui/shadcn";
import React from "react";
import { ArtistTypeGraphCard } from "../components/artist-type/artist-type-graph-card.js";
import { QuestionCard } from "../components/question-card.js";
import { QuizProgressBar } from "../components/quiz-progress-bar.js";
import { enginesAtom } from "../engines/engines-atoms.js";
import { quizzesAtom } from "../quizzes-atoms.js";
import { DevPanel } from "./dev-panel.js";
import { useLocalAnalysis } from "./local-analysis.js";
import {
  currentQuestionAtom,
  initializeQuizAtom,
  navigateToQuestionAtom,
  navigationStateAtom,
  QuizServices,
  quizSessionAtom,
  savedResponseAtom,
  selectAnswerAtom,
  submitQuizAtom,
} from "./quiz-taker-atoms.js";

// PageContainer component with padding and layout (no background)
type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <div className="relative w-full px-4 py-8">{children}</div>
);

// Quiz Taker State Atoms are now imported from quiz-taker-atoms.js

const SuccessView: React.FC<{ quizzes: ReadonlyArray<Quiz> }> = ({ quizzes }) => {
  // Use the new atoms
  const quizSessionResult = useAtomValue(quizSessionAtom);
  const currentQuestion = useAtomValue(currentQuestionAtom);
  const savedResponse = useAtomValue(savedResponseAtom);
  const navigationState = useAtomValue(navigationStateAtom);
  const enginesResult = useAtomValue(enginesAtom);

  // Function setters
  const selectAnswer = useAtomSet(selectAnswerAtom);
  const navigateToQuestion = useAtomSet(navigateToQuestionAtom);
  const submitQuiz = useAtomSet(submitQuizAtom);
  const initializeQuiz = useAtomSet(initializeQuizAtom);

  // Dev panel state management using React useState
  const [devConfig, setDevConfig] = React.useState({
    primaryWeight: 1.5,
    nonPrimaryWeight: 0.2,
    distanceGamma: 1.6,
    beta: 1.4,
    scoreMultiplier: 1.0,
    disableSecondaryPoints: false,
    overrideBaseWeights: false,
    overrideCustomWeights: false,
    overrideDistanceWeight: false,
    minPercentageThreshold: 0.0,
    enableQuestionBreakdown: true,
    maxEndingResults: 10,
    customPrimaryWeight: 2.0,
    customNonPrimaryWeight: 0.5,
    customDistanceGamma: 2.0,
    customBeta: 1.8,
    customScoreMultiplier: 1.2,
  });
  const [devPanelVisible, setDevPanelVisible] = React.useState(false);

  // Add keyboard shortcut to toggle dev panel (Ctrl/Cmd + D)
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "d") {
        event.preventDefault();
        setDevPanelVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Extract values from Results
  const quizSession = Result.isSuccess(quizSessionResult)
    ? quizSessionResult.value
    : {
        responses: {},
        logs: [],
        sessionMetadata: { startedAt: new Date() },
        currentQuestionIndex: 0,
        currentQuiz: undefined,
      };
  const currentQuestionIndex = quizSession.currentQuestionIndex;
  const currentQuiz = quizSession.currentQuiz;

  // Get the default analysis engine (first active engine)
  const defaultEngine = Result.isSuccess(enginesResult)
    ? enginesResult.value.find((engine) => engine.isActive)
    : undefined;

  // Get real-time local analysis with dev config overrides
  const localAnalysisData = useLocalAnalysis(
    quizSession.responses,
    currentQuiz,
    defaultEngine,
    devConfig,
  );

  // Find the specific quiz by slug
  const targetQuiz = quizzes.find((quiz) => quiz.slug === "my-artist-type-quiz");

  // Initialize quiz if not already set
  React.useEffect(() => {
    if (targetQuiz !== undefined && currentQuiz === undefined) {
      initializeQuiz(targetQuiz);
    }
  }, [targetQuiz, currentQuiz, initializeQuiz]);

  if (targetQuiz === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Quiz Not Found</h2>
          <p className="text-muted-foreground">Could not find quiz with slug "my-artist-type"</p>
        </div>
      </div>
    );
  }

  // Get questions from the real quiz data
  const questions = targetQuiz.questions as Array<Question>;

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">No Questions Found</h2>
          <p className="text-muted-foreground">This quiz doesn't have any questions yet.</p>
        </div>
      </div>
    );
  }

  if (currentQuestion === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Question Not Found</h2>
          <p className="text-muted-foreground">
            Could not find question at index {currentQuestionIndex}
          </p>
        </div>
      </div>
    );
  }

  // Handler functions using the new atoms
  const handleRatingSelect = (rating: number) => {
    selectAnswer(rating);
  };

  const handleBack = () => {
    if (navigationState.canGoBack) {
      const newIndex = currentQuestionIndex - 1;
      navigateToQuestion(newIndex);
    }
  };

  const handleNext = () => {
    if (navigationState.canGoNext) {
      const newIndex = currentQuestionIndex + 1;
      navigateToQuestion(newIndex);
    }
  };

  const handleSubmit = () => {
    submitQuiz();

    // Handle quiz submission - this will eventually send data to server
    // Submission data is available in quizSession atom for backend integration
    alert(
      `Quiz submitted! You answered ${Object.keys(quizSession.responses).length} out of ${questions.length} questions.`,
    );
  };

  // Get random color class using the service
  const randomCategoryColorClass = (_category?: string, _colorOn?: boolean): string => {
    // For now, return a simple color class - we can enhance this later
    return "bg-gradient-to-b from-blue-500/20 to-blue-500/5";
  };

  return (
    <PageContainer>
      <div className="flex gap-8 w-full max-w-7xl mx-auto">
        {/* Main Quiz Content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-lg font-medium text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <QuizProgressBar
              questions={questions.map((q) => ({ id: q.id as unknown as number, category: q.id }))}
              currentIndex={currentQuestionIndex}
              onQuestionClick={(index) => {
                navigateToQuestion(index);
              }}
              categoryColorClass={randomCategoryColorClass}
              colorOn={true}
            />
          </div>

          {/* Question Card */}
          <div className="flex items-center justify-center min-h-[70vh]">
            <QuestionCard
              title={currentQuestion.title}
              content={currentQuestion.description ?? ""}
              minLabel={
                currentQuestion.data.type === "rating" ? currentQuestion.data.minLabel : "Min"
              }
              maxLabel={
                currentQuestion.data.type === "rating" ? currentQuestion.data.maxLabel : "Max"
              }
              min={currentQuestion.data.type === "rating" ? currentQuestion.data.minRating : 1}
              max={currentQuestion.data.type === "rating" ? currentQuestion.data.maxRating : 10}
              currentValue={savedResponse}
              onRatingSelect={handleRatingSelect}
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleSubmit}
              canGoBack={navigationState.canGoBack}
              canGoNext={navigationState.canGoNext}
              isLastQuestion={navigationState.isLast}
            />
          </div>
        </div>

        {/* Real-time Analysis Preview */}
        <div className="w-80 flex-shrink-0">
          <div className="sticky top-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Live Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Your artist type as you answer questions
              </p>
            </div>

            {localAnalysisData.length > 0 ? (
              <ArtistTypeGraphCard
                data={localAnalysisData}
                showBarChart={true}
                barChartHeight="h-48"
                barChartMaxItems={10}
                className="w-full"
              />
            ) : (
              <div className="flex items-center justify-center h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Start answering questions</p>
                  <p className="text-xs text-muted-foreground mt-1">to see your analysis</p>
                </div>
              </div>
            )}

            <div className="mt-4 text-xs text-muted-foreground">
              <p>• Analysis updates in real-time</p>
              <p>• Final results may vary slightly</p>
              <p>• Based on {Object.keys(quizSession.responses).length} answered questions</p>
              {defaultEngine !== undefined && (
                <p>
                  • Using engine: {defaultEngine.name} v{defaultEngine.version}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dev Panel */}
      <DevPanel
        config={devConfig}
        isVisible={devPanelVisible}
        onConfigChange={(newConfig) => {
          setDevConfig(newConfig);
        }}
        onToggleVisibility={() => {
          setDevPanelVisible(!devPanelVisible);
        }}
      />
    </PageContainer>
  );
};

const ErrorView: React.FC = () => {
  const refresh = useAtomRefresh(quizzesAtom.remote);

  return (
    <div className="flex flex-col gap-2">
      <p>Something went wrong...</p>
      <Button onClick={refresh}>Retry</Button>
    </div>
  );
};

export const QuizTakerPage: React.FC = () => {
  const quizzesResult = useAtomValue(quizzesAtom);

  return (
    <>
      <QuizServices />
      {Result.builder(quizzesResult)
        .onFailure(() => <ErrorView />)
        .onSuccess((quizzes) => <SuccessView quizzes={quizzes} />)
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <p>Loading...</p>)
        .orNull()}
    </>
  );
};
