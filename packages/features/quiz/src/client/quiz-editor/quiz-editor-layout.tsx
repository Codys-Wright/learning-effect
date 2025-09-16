"use client";

import { Result, useAtomValue } from "@effect-atom/atom-react";
import { type AnalysisEngine, type Question, type Quiz } from "@features/quiz/domain";
import {
  Badge,
  Button,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  cn,
} from "@ui/shadcn";
import { ArrowLeftIcon, ArrowRightIcon, EditIcon, PlusIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { QuestionCard } from "../components/question-card.js";
import { QuizProgressBar } from "../components/quiz-progress-bar.js";
import { enginesAtom } from "../engines/engines-atoms.js";
import { quizzesAtom } from "../quizzes-atoms.js";

// Question List Component (Left Sidebar)
const QuestionList: React.FC<{
  onAddQuestion: () => void;
  onSelectQuestion: (index: number) => void;
  questions: ReadonlyArray<Question>;
  selectedIndex: number;
}> = ({ onAddQuestion, onSelectQuestion, questions, selectedIndex }) => {
  return (
    <div className="flex h-full flex-col border-r border-border/50">
      <div className="flex items-center justify-between p-3 border-b border-border/50">
        <h3 className="text-sm font-medium">Questions</h3>
        <Button variant="ghost" size="sm" onClick={onAddQuestion} className="h-6 w-6 p-0">
          <PlusIcon className="h-3 w-3" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {questions.map((question, index) => (
            <button
              key={question.id}
              onClick={() => {
                onSelectQuestion(index);
              }}
              className={cn(
                "w-full text-left p-2 rounded-md text-sm transition-colors",
                "hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring/40",
                selectedIndex === index ? "bg-primary text-primary-foreground" : "text-foreground",
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                  {index + 1}
                </span>
                <span className="truncate">{question.title}</span>
              </div>
              {question.subtitle !== null &&
                question.subtitle !== undefined &&
                question.subtitle !== "" && (
                  <div className="text-xs text-muted-foreground mt-1 truncate">
                    {question.subtitle}
                  </div>
                )}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

// Top Bar Component
const TopBar: React.FC<{
  engines: ReadonlyArray<AnalysisEngine>;
  onArtistTypeChange: (artistType: string) => void;
  onEngineChange: (engineId: string) => void;
  onQuizChange: (quizId: string) => void;
  quizzes: ReadonlyArray<Quiz>;
  selectedArtistType: string;
  selectedEngineId: string;
  selectedQuizId: string;
}> = ({
  engines,
  onArtistTypeChange,
  onEngineChange,
  onQuizChange,
  quizzes,
  selectedArtistType,
  selectedEngineId,
  selectedQuizId,
}) => {
  const artistTypes = [
    "visionary",
    "consummate",
    "analyzer",
    "tech",
    "entertainer",
    "maverick",
    "dreamer",
    "feeler",
    "tortured",
    "solo",
  ];

  return (
    <div className="flex items-center gap-4 p-4 border-b border-border/50 bg-card/50">
      <div className="flex items-center gap-2">
        <EditIcon className="h-5 w-5" />
        <h1 className="text-xl font-semibold">Quiz Editor</h1>
      </div>

      <div className="flex items-center gap-4 flex-1">
        {/* Quiz Selection */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Quiz:</span>
          <Select value={selectedQuizId} onValueChange={onQuizChange}>
            <Select.Trigger className="w-48">
              <Select.Value placeholder="Select quiz" />
            </Select.Trigger>
            <Select.Content>
              {quizzes.map((quiz) => (
                <Select.Item key={quiz.id} value={quiz.id}>
                  {quiz.title}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>

        {/* Engine Selection */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Engine:</span>
          <Select value={selectedEngineId} onValueChange={onEngineChange}>
            <Select.Trigger className="w-48">
              <Select.Value placeholder="Select engine" />
            </Select.Trigger>
            <Select.Content>
              {engines.map((engine) => (
                <Select.Item key={engine.id} value={engine.id}>
                  <div className="flex items-center gap-2">
                    {engine.name}
                    {engine.isActive && (
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>

        {/* Artist Type Selection */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Artist Type:</span>
          <Select value={selectedArtistType} onValueChange={onArtistTypeChange}>
            <Select.Trigger className="w-48">
              <Select.Value placeholder="Select artist type" />
            </Select.Trigger>
            <Select.Content>
              {artistTypes.map((type) => (
                <Select.Item key={type} value={type}>
                  <span className="capitalize">{type}</span>
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>
      </div>

      <Button variant="outline" size="sm">
        <SettingsIcon className="h-4 w-4 mr-2" />
        Settings
      </Button>
    </div>
  );
};

// Right Inspector Panel
const InspectorPanel: React.FC<{
  idealAnswers: Array<{
    endingId: string;
    endingName: string;
    idealAnswers: Array<number>;
    isPrimary: boolean;
  }>;
  onToggleIdealAnswers: () => void;
  question: Question | undefined;
  questionIndex: number;
  selectedArtistType: string;
  selectedRating: number | undefined;
  showIdealAnswers: boolean;
  totalQuestions: number;
}> = ({
  idealAnswers,
  onToggleIdealAnswers,
  question,
  questionIndex,
  selectedArtistType,
  selectedRating,
  showIdealAnswers,
  totalQuestions,
}) => {
  if (question === undefined) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-muted-foreground">
          <EditIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Select a question to edit</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col border-l border-border/50">
      <div className="flex items-center justify-between p-3 border-b border-border/50">
        <h3 className="text-sm font-medium">Question Inspector</h3>
        <Badge variant="outline" className="text-xs">
          {questionIndex + 1} of {totalQuestions}
        </Badge>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {/* Question Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Question Details</h4>
            <div className="space-y-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Title</label>
                <input
                  type="text"
                  value={question.title}
                  className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
                  readOnly
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Subtitle</label>
                <input
                  type="text"
                  value={question.subtitle ?? ""}
                  className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
                  readOnly
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Description</label>
                <textarea
                  value={question.description ?? ""}
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background resize-none"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Question Settings */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Question Settings</h4>
            <div className="space-y-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Type</label>
                <div className="px-3 py-2 text-sm border border-border rounded-md bg-muted">
                  {question.data.type === "rating" ? "Rating Scale" : question.data.type}
                </div>
              </div>
              {question.data.type === "rating" && (
                <>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Min Rating</label>
                    <input
                      type="number"
                      value={question.data.minRating}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Max Rating</label>
                    <input
                      type="number"
                      value={question.data.maxRating}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      Current Selection
                    </label>
                    <div className="px-3 py-2 text-sm border border-border rounded-md bg-muted">
                      {selectedRating ?? "No selection"}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Artist Type Rules */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Artist Type Rules</h4>
            <div className="space-y-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Current Type</label>
                <div className="px-3 py-2 text-sm border border-border rounded-md bg-muted capitalize">
                  {selectedArtistType}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Ideal Answer</label>
                <input
                  type="number"
                  placeholder="Enter ideal answer"
                  className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="isPrimary" className="rounded" />
                <label htmlFor="isPrimary" className="text-xs font-medium">
                  Primary Rule
                </label>
              </div>
            </div>
          </div>

          {/* Ideal Answers Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Ideal Answers</h4>
            <div className="space-y-2">
              {idealAnswers.length > 0 ? (
                idealAnswers.map((answer, index) => (
                  <div key={index} className="p-2 border border-border rounded-md bg-muted/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium capitalize">{answer.endingName}</span>
                      {answer.isPrimary && (
                        <Badge variant="secondary" className="text-xs">
                          Primary
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Values: {answer.idealAnswers.join(", ")}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-xs text-muted-foreground p-2 border border-border rounded-md bg-muted/50">
                  No ideal answers defined for this question
                </div>
              )}
            </div>
          </div>

          {/* Display Options */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Display Options</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">
                  Show Ideal Answers
                </label>
                <Button
                  variant={showIdealAnswers ? "default" : "outline"}
                  size="sm"
                  onClick={onToggleIdealAnswers}
                  className="h-6 px-2 text-xs"
                >
                  {showIdealAnswers ? "ON" : "OFF"}
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button className="w-full" size="sm">
              Save Changes
            </Button>
            <Button variant="outline" className="w-full" size="sm">
              Reset
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

// Main Quiz Editor Layout
export const QuizEditorLayout: React.FC = () => {
  const quizzesResult = useAtomValue(quizzesAtom);
  const enginesResult = useAtomValue(enginesAtom);

  // State for selections
  const [selectedQuizId, setSelectedQuizId] = React.useState<string>("");
  const [selectedEngineId, setSelectedEngineId] = React.useState<string>("");
  const [selectedArtistType, setSelectedArtistType] = React.useState<string>("visionary");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = React.useState(0);
  const [selectedRating, setSelectedRating] = React.useState<number | undefined>(undefined);
  const [showIdealAnswers, setShowIdealAnswers] = React.useState<boolean>(true);

  // Initialize selections on first load - moved before early returns
  React.useEffect(() => {
    if (Result.isSuccess(quizzesResult) && Result.isSuccess(enginesResult)) {
      const quizzes = quizzesResult.value;
      const engines = enginesResult.value;

      if (selectedQuizId === "" && quizzes.length > 0) {
        const defaultQuiz = quizzes.find((q) => q.slug === "my-artist-type-quiz") ?? quizzes[0];
        if (defaultQuiz !== undefined) {
          setSelectedQuizId(defaultQuiz.id);
        }
      }

      if (selectedEngineId === "" && engines.length > 0) {
        const activeEngine = engines.find((e) => e.isActive) ?? engines[0];
        if (activeEngine !== undefined) {
          setSelectedEngineId(activeEngine.id);
        }
      }
    }
  }, [quizzesResult, enginesResult, selectedQuizId, selectedEngineId]);

  // Early returns after all hooks
  if (!Result.isSuccess(quizzesResult) || !Result.isSuccess(enginesResult)) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">Loading quizzes and engines...</div>
      </div>
    );
  }

  const quizzes = quizzesResult.value;
  const engines = enginesResult.value;

  // Find the selected quiz
  const quiz =
    quizzes.find((q) => q.id === selectedQuizId) ??
    quizzes.find((q) => q.slug === "my-artist-type-quiz");

  if (quiz === undefined) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">No quiz found</div>
      </div>
    );
  }

  const questions = quiz.questions as Array<Question>;
  const selectedQuestion = questions[selectedQuestionIndex];

  // Get the selected analysis engine
  const selectedEngine = engines.find((e) => e.id === selectedEngineId);

  // Get ideal answers for the current question (similar to quiz-taker)
  const getIdealAnswersForQuestion = (questionId: string) => {
    if (selectedEngine === undefined) return [];

    return selectedEngine.endings.flatMap((ending) =>
      ending.questionRules
        .filter((rule) => rule.questionId === questionId)
        .map((rule) => ({
          endingId: ending.endingId,
          endingName: ending.name,
          idealAnswers: [...rule.idealAnswers], // Convert readonly array to mutable array
          isPrimary: rule.isPrimary,
        })),
    );
  };

  const currentQuestionIdealAnswers =
    selectedQuestion !== undefined ? getIdealAnswersForQuestion(selectedQuestion.id) : [];

  const handleSelectQuestion = (index: number) => {
    setSelectedQuestionIndex(index);
    // Reset rating selection when changing questions
    setSelectedRating(undefined);
  };

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleAddQuestion = () => {
    // TODO: Implement add question functionality
    // eslint-disable-next-line no-console
    console.log("Add question clicked");
  };

  const handlePreviousQuestion = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedQuestionIndex < questions.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    }
  };

  // Get color class for progress bar (same as quiz-taker)
  const artistTypeColorClass = (
    _category?: string,
    colorOn?: boolean,
    questionIndex?: number,
  ): string => {
    if (colorOn !== true) return "bg-white dark:bg-black";

    const artistTypes = [
      "visionary",
      "consummate",
      "analyzer",
      "tech",
      "entertainer",
      "maverick",
      "dreamer",
      "feeler",
      "tortured",
      "solo",
    ];

    const artistTypeIndex = (questionIndex ?? 0) % artistTypes.length;
    const artistType = artistTypes[artistTypeIndex];

    switch (artistType) {
      case "visionary":
        return "bg-[var(--artist-visionary)]/5";
      case "consummate":
        return "bg-[var(--artist-consummate)]/5";
      case "analyzer":
        return "bg-[var(--artist-analyzer)]/5";
      case "tech":
        return "bg-[var(--artist-tech)]/5";
      case "entertainer":
        return "bg-[var(--artist-entertainer)]/5";
      case "maverick":
        return "bg-[var(--artist-maverick)]/5";
      case "dreamer":
        return "bg-[var(--artist-dreamer)]/5";
      case "feeler":
        return "bg-[var(--artist-feeler)]/5";
      case "tortured":
        return "bg-[var(--artist-tortured)]/5";
      case "solo":
        return "bg-[var(--artist-solo)]/5";
      default:
        return "bg-white dark:bg-black";
    }
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col">
      {/* Top Bar */}
      <TopBar
        quizzes={quizzes}
        engines={engines}
        selectedQuizId={selectedQuizId}
        selectedEngineId={selectedEngineId}
        selectedArtistType={selectedArtistType}
        onQuizChange={setSelectedQuizId}
        onEngineChange={setSelectedEngineId}
        onArtistTypeChange={setSelectedArtistType}
      />

      {/* Main Content Area */}
      <ResizablePanelGroup direction="horizontal" className="flex-1 min-h-0">
        {/* Left Sidebar - Question List */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={35} className="min-w-[220px]">
          <QuestionList
            questions={questions}
            selectedIndex={selectedQuestionIndex}
            onSelectQuestion={handleSelectQuestion}
            onAddQuestion={handleAddQuestion}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Middle Section - Question Preview */}
        <ResizablePanel defaultSize={50}>
          <div className="h-full p-4 flex flex-col">
            {/* Progress Bar */}
            <div className="mb-4">
              <QuizProgressBar
                questions={questions.map((q) => ({
                  id: q.id as unknown as number,
                  category: q.id,
                }))}
                currentIndex={selectedQuestionIndex}
                onQuestionClick={handleSelectQuestion}
                categoryColorClass={artistTypeColorClass}
                colorOn={true}
              />
            </div>

            {/* Question Card (using the same one from quiz-taker) */}
            <div className="flex-1 flex items-center justify-center">
              {selectedQuestion !== undefined ? (
                <QuestionCard
                  title={selectedQuestion.title}
                  content={selectedQuestion.description ?? ""}
                  minLabel={
                    selectedQuestion.data.type === "rating" ? selectedQuestion.data.minLabel : "Min"
                  }
                  maxLabel={
                    selectedQuestion.data.type === "rating" ? selectedQuestion.data.maxLabel : "Max"
                  }
                  min={
                    selectedQuestion.data.type === "rating" ? selectedQuestion.data.minRating : 1
                  }
                  max={
                    selectedQuestion.data.type === "rating" ? selectedQuestion.data.maxRating : 10
                  }
                  currentValue={selectedRating} // Use the selected rating state
                  idealAnswers={currentQuestionIdealAnswers} // Use the ideal answers from the selected engine
                  showIdealAnswers={showIdealAnswers}
                  onRatingSelect={handleRatingSelect} // Handle rating selection
                  onBack={handlePreviousQuestion}
                  onNext={handleNextQuestion}
                  onSubmit={() => {}} // No-op in editor
                  canGoBack={selectedQuestionIndex > 0}
                  canGoNext={selectedQuestionIndex < questions.length - 1}
                  isLastQuestion={selectedQuestionIndex === questions.length - 1}
                  autoAdvanceEnabled={false}
                />
              ) : (
                <div className="text-muted-foreground">No question selected</div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="mt-4 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={selectedQuestionIndex === 0}
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                {selectedQuestionIndex + 1} of {questions.length}
              </div>

              <Button
                variant="outline"
                onClick={handleNextQuestion}
                disabled={selectedQuestionIndex === questions.length - 1}
              >
                Next
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Sidebar - Inspector Panel */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={35} className="min-w-[280px]">
          <InspectorPanel
            idealAnswers={currentQuestionIdealAnswers}
            onToggleIdealAnswers={() => {
              setShowIdealAnswers(!showIdealAnswers);
            }}
            question={selectedQuestion}
            questionIndex={selectedQuestionIndex}
            selectedArtistType={selectedArtistType}
            selectedRating={selectedRating}
            showIdealAnswers={showIdealAnswers}
            totalQuestions={questions.length}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
