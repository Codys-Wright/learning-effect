import { Atom, Result, useAtom, useAtomRefresh, useAtomValue } from "@effect-atom/atom-react";
import { type Question, type Quiz } from "@features/quiz/domain";
import { Button, Separator } from "@org/shadcn";
import React from "react";
import { QuestionCard } from "../components/question-card.js";
import { QuizProgressBar } from "../components/quiz-progress-bar.js";
import { quizzesAtom } from "../quizzes-atoms.js";

// Quiz Taker State Atoms
const currentQuestionIndexAtom = Atom.make(0);

// Atom for tracking complete quiz session with responses and logs
const quizSessionAtom = Atom.make<{
  responses: Record<string, number>;
  logs: Array<{
    type: "navigation" | "selection" | "submission";
    questionId?: string;
    rating?: number;
    action?: string;
    dateTime: Date;
  }>;
}>({
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

  // Debug logging

  if (targetQuiz == null) {
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
    currentQuestion != null ? quizSession.responses[currentQuestion.id] : undefined;

  // Debug: Log current question state
  // eslint-disable-next-line no-console
  console.log(`🔍 Question ${currentQuestionIndex + 1}:`, {
    questionId: currentQuestion?.id,
    savedResponse,
    totalResponses: Object.keys(quizSession.responses).length,
    allResponses: quizSession.responses,
  });

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

  if (currentQuestion == null) {
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

    // Debug: Log response storage
    // eslint-disable-next-line no-console
    console.log(`💾 Storing response:`, {
      questionId: currentQuestion.id,
      rating,
      currentResponses: Object.keys(quizSession.responses).length,
    });

    setQuizSession((prevSession) => ({
      responses: { ...prevSession.responses, [currentQuestion.id]: rating },
      logs: [...logs, newLogEntry],
    }));

    // eslint-disable-next-line no-console
    console.log(`${logMessage}:`, rating, "for", currentQuestion.id, {
      dateTime: newLogEntry.dateTime,
    });
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

        // eslint-disable-next-line no-console
        console.log("navigated to:", targetQuestion.id, { dateTime: newLogEntry.dateTime });
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

        // eslint-disable-next-line no-console
        console.log("navigated to:", targetQuestion.id, { dateTime: newLogEntry.dateTime });
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
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Quiz Taker</h1>
        <p className="text-muted-foreground">Demo of the QuestionCard component with mock data.</p>
      </div>

      <Separator />

      <section className="flex flex-col gap-4">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <QuizProgressBar
            questions={questions.map((q) => ({ id: q.id as unknown as number, category: q.id }))}
            currentIndex={currentQuestionIndex}
            onQuestionClick={setCurrentQuestionIndex}
            categoryColorClass={randomCategoryColorClass}
            colorOn={true}
          />
        </div>

        <div className="flex items-center justify-center min-h-[80vh]">
          {(() => {
            return (
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
            );
          })()}
        </div>

        {/* Debug info */}
        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-sm font-medium mb-2">Debug Info:</h3>
          <p className="text-xs text-muted-foreground">
            Current Rating: {savedResponse ?? "None"} | Question: {currentQuestionIndex + 1}/
            {questions.length}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Quiz: {targetQuiz.title} | Total Questions: {questions.length}
          </p>
        </div>
      </section>
    </main>
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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {Result.builder(quizzesResult)
        .onFailure(() => <ErrorView />)
        .onSuccess((quizzes) => <SuccessView quizzes={quizzes} />)
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <p>Loading...</p>)
        .orNull()}
    </div>
  );
};
