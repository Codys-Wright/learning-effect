import { Atom, Result, useAtom, useAtomRefresh, useAtomValue } from "@effect-atom/atom-react";
import { type Question, type Quiz } from "@features/quiz/domain";
import { Button } from "@ui/shadcn";
import React from "react";
import { QuestionCard } from "../components/question-card.js";
import { QuizProgressBar } from "../components/quiz-progress-bar.js";
import { quizzesAtom } from "../quizzes-atoms.js";

// PageContainer component with padding and layout (no background)
interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <div className="relative w-full px-4 py-8">{children}</div>
);

// Quiz Taker State Atoms
const currentQuestionIndexAtom = Atom.make(0);

// Atom for tracking complete quiz session with responses and logs
type QuizSession = {
  responses: Record<string, number>;
  logs: Array<{
    type: "navigation" | "selection" | "submission";
    questionId?: string;
    rating?: number;
    action?: string;
    dateTime: Date;
  }>;
};

const quizSessionAtom = Atom.make<QuizSession>({
  responses: {},
  logs: [],
}).pipe(Atom.keepAlive);

// Helper function to find quiz by slug
const findQuizBySlug = (quizzes: ReadonlyArray<Quiz>, slug: string): Quiz | undefined => {
  return quizzes.find((quiz) => quiz.slug === slug);
};

const SuccessView: React.FC<{ quizzes: ReadonlyArray<Quiz> }> = ({ quizzes }) => {
  // Effect Atom state management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);
  const [quizSession, setQuizSession] = useAtom(quizSessionAtom);

  // Find the specific quiz by slug
  const targetQuiz = findQuizBySlug(quizzes, "my-artist-type-quiz");

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

  // Get current question and load its saved response
  const currentQuestion = questions[currentQuestionIndex];
  const savedResponse =
    currentQuestion !== undefined ? quizSession.responses[currentQuestion.id] : undefined;

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

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Handler functions
  const handleRatingSelect = (rating: number) => {
    // Initialize first question navigation log if not already done
    const logs =
      quizSession.logs.length === 0
        ? [
            {
              type: "navigation" as const,
              questionId: currentQuestion.id,
              dateTime: new Date(),
            },
          ]
        : quizSession.logs;

    // Save response and log selection in single atom update
    const logMessage = savedResponse !== undefined ? "changed response to" : "selected";
    const newLogEntry = {
      type: "selection" as const,
      questionId: currentQuestion.id,
      rating,
      action: logMessage,
      dateTime: new Date(),
    };

    setQuizSession((prevSession) => ({
      responses: { ...prevSession.responses, [currentQuestion.id]: rating },
      logs: [...logs, newLogEntry],
    }));
  };

  const handleBack = () => {
    if (!isFirstQuestion) {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);

      // Log navigation
      const targetQuestion = questions[newIndex];
      if (targetQuestion?.id) {
        // Initialize first question navigation log if not already done
        const logs =
          quizSession.logs.length === 0
            ? [
                {
                  type: "navigation" as const,
                  questionId: currentQuestion.id,
                  dateTime: new Date(),
                },
              ]
            : quizSession.logs;

        const newLogEntry = {
          type: "navigation" as const,
          questionId: targetQuestion.id,
          dateTime: new Date(),
        };
        setQuizSession((prevSession) => ({
          ...prevSession,
          logs: [...logs, newLogEntry],
        }));
      }
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);

      // Log navigation
      const targetQuestion = questions[newIndex];
      if (targetQuestion?.id) {
        // Initialize first question navigation log if not already done
        const logs =
          quizSession.logs.length === 0
            ? [
                {
                  type: "navigation" as const,
                  questionId: currentQuestion.id,
                  dateTime: new Date(),
                },
              ]
            : quizSession.logs;

        const newLogEntry = {
          type: "navigation" as const,
          questionId: targetQuestion.id,
          dateTime: new Date(),
        };
        setQuizSession((prevSession) => ({
          ...prevSession,
          logs: [...logs, newLogEntry],
        }));
      }
    }
  };

  const handleSubmit = () => {
    // Log quiz submission
    const newLogEntry = {
      type: "submission" as const,
      dateTime: new Date(),
    };
    setQuizSession((prevSession) => ({
      ...prevSession,
      logs: [...prevSession.logs, newLogEntry],
    }));

    // Handle quiz submission - this will eventually send data to server
    // Submission data is available in quizSession atom for backend integration

    alert(
      `Quiz submitted! You answered ${Object.keys(quizSession.responses).length} out of ${questions.length} questions.`,
    );
  };

  // Random color function - assigns a unique consistent color to each question
  // Uses the question's ID as a seed to generate a hash, ensuring the same question
  // always gets the same color, but different questions get different colors
  const randomCategoryColorClass = (category?: string, colorOn?: boolean): string => {
    if (colorOn === false) return "bg-muted";

    // Use the category (which is the question ID) as the seed for consistent colors
    const questionId = String(category ?? "default");
    const hash = questionId.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const colorIndex = hash % 10; // Use modulo to get consistent color per question

    // Array of beautiful gradient colors
    const colors = [
      "bg-gradient-to-b from-rose-500/20 to-rose-500/5",
      "bg-gradient-to-b from-pink-500/20 to-pink-500/5",
      "bg-gradient-to-b from-fuchsia-500/20 to-fuchsia-500/5",
      "bg-gradient-to-b from-purple-500/20 to-purple-500/5",
      "bg-gradient-to-b from-violet-500/20 to-violet-500/5",
      "bg-gradient-to-b from-indigo-500/20 to-indigo-500/5",
      "bg-gradient-to-b from-blue-500/20 to-blue-500/5",
      "bg-gradient-to-b from-cyan-500/20 to-cyan-500/5",
      "bg-gradient-to-b from-teal-500/20 to-teal-500/5",
      "bg-gradient-to-b from-emerald-500/20 to-emerald-500/5",
    ];

    return colors[colorIndex] ?? "bg-gradient-to-b from-gray-500/20 to-gray-500/5";
  };

  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
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
            onQuestionClick={setCurrentQuestionIndex}
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
            canGoBack={!isFirstQuestion}
            canGoNext={!isLastQuestion}
            isLastQuestion={isLastQuestion}
          />
        </div>
      </div>
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
      {Result.builder(quizzesResult)
        .onFailure(() => <ErrorView />)
        .onSuccess((quizzes) => <SuccessView quizzes={quizzes} />)
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <p>Loading...</p>)
        .orNull()}
    </>
  );
};
