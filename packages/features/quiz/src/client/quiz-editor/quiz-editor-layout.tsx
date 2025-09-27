"use client";

import { Atom, Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { type AnalysisEngine, type Question, type Quiz } from "@features/quiz/domain";
import { Effect } from "effect";
// Use the actual Result types from the atoms instead of importing platform types
import {
  Badge,
  Button,
  cn,
  DropdownMenu,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
} from "@ui/shadcn";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EditIcon,
  GitBranchIcon,
  PlusIcon,
  SaveIcon,
  SettingsIcon,
} from "lucide-react";
import React from "react";
import { getArtistIconPath } from "../components/artist-type/artist-data-utils.js";
import { QuestionCard } from "../components/question-card.js";
import { QuizProgressBar } from "../components/quiz-progress-bar.js";
import { VersionIncrementDialog } from "../components/version-increment-dialog.js";
import {
  autoSaveTempEngineAtom,
  clearTempEnginesAtom,
  EngineAction,
  enginesAtom,
} from "../engines/engines-atoms.js";
import {
  clearTempQuizzesAtom,
  createNewQuizVersionAtom,
  createTempQuizAtom,
  deleteQuizAtom,
  quizzesAtom,
} from "../quizzes-atoms.js";

// Atoms for dropdown selections - keep alive to persist state
const selectedQuizIdAtom = Atom.make("").pipe(Atom.keepAlive);
const selectedEngineIdAtom = Atom.make("").pipe(Atom.keepAlive);
const selectedArtistTypeAtom = Atom.make("visionary").pipe(Atom.keepAlive);
const selectedQuestionIndexAtom = Atom.make(0).pipe(Atom.keepAlive);
const showIdealAnswersAtom = Atom.make(true).pipe(Atom.keepAlive);
const pendingRatingAtom = Atom.make<number | null>(null).pipe(Atom.keepAlive);

// Helper function to get ideal answers for the current selection
const getIdealAnswersForCurrentSelection = (
  quizzesResult: ReturnType<typeof quizzesAtom.read>,
  enginesResult: ReturnType<typeof enginesAtom.read>,
  selectedQuizId: string,
  selectedEngineId: string,
  selectedQuestionIndex: number,
) => {
  if (!Result.isSuccess(quizzesResult) || !Result.isSuccess(enginesResult)) {
    return [];
  }

  const quizzes = quizzesResult.value;
  const engines = enginesResult.value;

  const selectedQuiz = quizzes.find((q: Quiz) => q.id === selectedQuizId);
  const selectedEngine = engines.find((e: AnalysisEngine) => e.id === selectedEngineId);

  if (selectedQuiz === undefined || selectedEngine === undefined) {
    return [];
  }

  const questions = selectedQuiz.questions as Array<Question>;
  const selectedQuestion = questions[selectedQuestionIndex];

  if (selectedQuestion === undefined) {
    Effect.runSync(
      Effect.log(
        `No selected question found at index: ${selectedQuestionIndex}, total questions: ${questions.length}`,
      ),
    );
    return [];
  }

  Effect.runSync(
    Effect.log(`Current question: ${selectedQuestion.title}, id: ${selectedQuestion.id}`),
  );
  Effect.runSync(
    Effect.log(
      `Selected quiz: ${selectedQuiz.title}, version: ${selectedQuiz.version}, isTemp: ${selectedQuiz.isTemp}`,
    ),
  );
  Effect.runSync(
    Effect.log(
      `Selected engine: ${selectedEngine.name}, version: ${selectedEngine.version}, isTemp: ${selectedEngine.isTemp}`,
    ),
  );

  // Get ideal answers for the current question
  const idealAnswers = selectedEngine.endings.flatMap((ending) =>
    ending.questionRules
      .filter((rule) => rule.questionId === selectedQuestion.id)
      .map((rule) => ({
        endingId: ending.endingId,
        endingName: ending.name,
        idealAnswers: [...rule.idealAnswers], // Convert readonly array to mutable array
        isPrimary: rule.isPrimary,
      })),
  );

  Effect.runSync(
    Effect.log(`Ideal answers for question: ${JSON.stringify(idealAnswers, null, 2)}`),
  );

  return idealAnswers;
};

// Helper function to get selected values for the current selection
const getSelectedValuesForCurrentSelection = (
  quizzesResult: ReturnType<typeof quizzesAtom.read>,
  enginesResult: ReturnType<typeof enginesAtom.read>,
  selectedQuizId: string,
  selectedEngineId: string,
  selectedArtistType: string,
  selectedQuestionIndex: number,
) => {
  if (!Result.isSuccess(enginesResult) || !Result.isSuccess(quizzesResult)) {
    return [];
  }

  const engines = enginesResult.value;
  const quizzes = quizzesResult.value;

  const selectedEngine = engines.find((e: AnalysisEngine) => e.id === selectedEngineId);
  const selectedQuiz = quizzes.find((q: Quiz) => q.id === selectedQuizId);

  if (selectedEngine === undefined || selectedQuiz === undefined) {
    return [];
  }

  const questions = selectedQuiz.questions as Array<Question>;
  const selectedQuestion = questions[selectedQuestionIndex];

  if (selectedQuestion === undefined) {
    return [];
  }

  const artistTypeEndingId = `the-${selectedArtistType.toLowerCase()}-artist`;
  const ending = selectedEngine.endings.find((e) => e.endingId === artistTypeEndingId);

  if (ending === undefined) {
    return [];
  }

  const questionRule = ending.questionRules.find((rule) => rule.questionId === selectedQuestion.id);

  if (questionRule === undefined) {
    Effect.runSync(
      Effect.log(
        `No question rule found for artist type: ${selectedArtistType}, question id: ${selectedQuestion.id}`,
      ),
    );
    return [];
  }

  const selectedValues = [...questionRule.idealAnswers]; // Create mutable copy

  Effect.runSync(
    Effect.log(
      `Selected values for artist type ${selectedArtistType}: ${JSON.stringify(selectedValues)}`,
    ),
  );

  return selectedValues;
};

// Artist Icon Component
const ArtistIcon: React.FC<{
  artistType: string;
  className?: string;
  size?: number;
}> = ({ artistType, className, size = 20 }) => {
  const [loadError, setLoadError] = React.useState(false);
  // Convert artist type to database ID format
  const databaseId = `the-${artistType.toLowerCase()}-artist`;
  const iconPath = getArtistIconPath(databaseId);

  if (iconPath === null || loadError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-gray-400 text-xs font-bold text-white",
          className,
        )}
        style={{ width: size, height: size }}
        role="img"
        aria-label={`${artistType} icon`}
      >
        {artistType.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        aspectRatio: "1 / 1",
        flexShrink: 0,
      }}
    >
      <img
        src={iconPath}
        alt={`${artistType} icon`}
        className="rounded-full dark:brightness-0 dark:invert"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
          aspectRatio: "1 / 1",
        }}
        onError={() => {
          setLoadError(true);
        }}
      />
    </div>
  );
};

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
              {question.subtitle !== undefined && question.subtitle.length > 0 && (
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
  onClearDraft: () => void;
  onDeleteQuiz: () => void;
  onQuizChange: (quizId: string) => void;
  quizzes: ReadonlyArray<Quiz>;
  selectedArtistType: string;
  selectedEngineId: string;
  selectedQuizId: string;
}> = ({
  onArtistTypeChange,
  onClearDraft,
  onDeleteQuiz,
  onQuizChange,
  quizzes,
  selectedArtistType,
  selectedQuizId,
}) => {
  // Filter to only show "My Artist Type Quiz" versions
  const artistTypeQuizVersions = quizzes
    .filter((q) => q.title === "My Artist Type Quiz" || q.title === "My Artist Type Quiz (Editing)")
    .sort((a, b) => b.version.localeCompare(a.version)); // Sort by version desc

  const selectedQuiz = quizzes.find((quiz) => quiz.id === selectedQuizId);

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

  const [isVersionDialogOpen, setIsVersionDialogOpen] = React.useState(false);
  const createNewVersion = useAtomSet(createNewQuizVersionAtom);

  const handleCreateNewVersion = (
    newVersion: string,
    incrementType: "major" | "minor" | "patch",
  ) => {
    if (selectedQuiz === undefined) return;

    // The atom handles the async operation and toast notifications
    // The new quiz will appear in the dropdown once created
    createNewVersion({
      quiz: selectedQuiz,
      newVersion,
      incrementType,
    });
  };

  return (
    <>
      <VersionIncrementDialog
        currentVersion={selectedQuiz?.version ?? "1.0.0"}
        isOpen={isVersionDialogOpen}
        onClose={() => {
          setIsVersionDialogOpen(false);
        }}
        onConfirm={handleCreateNewVersion}
        title="Create New Quiz Version"
      />
      <div className="flex items-center gap-4 p-4 border-b border-border/50 bg-card/50">
        <div className="flex items-center gap-2">
          <EditIcon className="h-5 w-5" />
          <h1 className="text-xl font-semibold">Quiz Editor</h1>
        </div>

        <div className="flex items-center gap-6 flex-1">
          {/* Combined Version Selection - Quiz + Engine */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Version:</span>
            <Select value={selectedQuizId} onValueChange={onQuizChange}>
              <Select.Trigger className="w-40">
                <Select.Value placeholder="Select version">
                  {selectedQuiz !== undefined && (
                    <div className="flex items-center gap-1.5">
                      <span>v{selectedQuiz.version}</span>
                      {selectedQuiz.isTemp ? (
                        <Badge
                          variant="outline"
                          className="text-xs border-orange-500 text-orange-600 px-1"
                        >
                          Edit
                        </Badge>
                      ) : selectedQuiz.isPublished === true ? (
                        <Badge variant="default" className="text-xs px-1">
                          Live
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs px-1">
                          Draft
                        </Badge>
                      )}
                    </div>
                  )}
                </Select.Value>
              </Select.Trigger>
              <Select.Content>
                {artistTypeQuizVersions.map((quiz) => (
                  <Select.Item key={quiz.id} value={quiz.id}>
                    <div className="flex items-center gap-1.5">
                      <span>v{quiz.version}</span>
                      {quiz.isTemp ? (
                        <Badge
                          variant="outline"
                          className="text-xs border-orange-500 text-orange-600 px-1"
                        >
                          Edit
                        </Badge>
                      ) : quiz.isPublished ? (
                        <Badge variant="default" className="text-xs px-1">
                          Live
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs px-1">
                          Draft
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
                <Select.Value>
                  <div className="flex items-center gap-2">
                    <ArtistIcon artistType={selectedArtistType} size={16} />
                    <span className="capitalize">{selectedArtistType}</span>
                  </div>
                </Select.Value>
              </Select.Trigger>
              <Select.Content>
                {artistTypes.map((type) => (
                  <Select.Item key={type} value={type}>
                    <div className="flex items-center gap-2">
                      <ArtistIcon artistType={type} size={16} />
                      <span className="capitalize">{type}</span>
                    </div>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          {selectedQuiz !== undefined && selectedQuiz.isTemp && (
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                // TODO: Open save dialog
              }}
              className="gap-2"
            >
              <SaveIcon className="h-4 w-4" />
              Save Changes
            </Button>
          )}

          {selectedQuiz !== undefined && !selectedQuiz.isTemp && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIsVersionDialogOpen(true);
              }}
              className="gap-2"
            >
              <GitBranchIcon className="h-4 w-4" />
              New Version
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" size="sm">
                <SettingsIcon className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end" className="w-48">
              <DropdownMenu.Label>Settings</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <span>Quiz Settings</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Export Quiz</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Import Quiz</span>
              </DropdownMenu.Item>

              <DropdownMenu.Separator />

              <DropdownMenu.Item
                className="text-destructive"
                onClick={() => {
                  onClearDraft();
                }}
              >
                <span>Clear Draft</span>
              </DropdownMenu.Item>

              <DropdownMenu.Separator />

              <div className="px-2 py-1">
                <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                  Danger
                </span>
              </div>

              <DropdownMenu.Item
                className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
                onClick={() => {
                  onDeleteQuiz();
                }}
              >
                <span>Delete Quiz</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </>
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
  showIdealAnswers: boolean;
  totalQuestions: number;
}> = ({
  idealAnswers,
  onToggleIdealAnswers,
  question,
  questionIndex,
  selectedArtistType,
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
                      {"Selection from atom data"}
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

  // Atom-based state for selections
  const selectedQuizId = useAtomValue(selectedQuizIdAtom);
  const selectedEngineId = useAtomValue(selectedEngineIdAtom);
  const selectedArtistType = useAtomValue(selectedArtistTypeAtom);
  const selectedQuestionIndex = useAtomValue(selectedQuestionIndexAtom);
  const showIdealAnswers = useAtomValue(showIdealAnswersAtom);
  const pendingRating = useAtomValue(pendingRatingAtom);

  // Derived values that automatically update based on selections
  const currentQuestionIdealAnswers = getIdealAnswersForCurrentSelection(
    quizzesResult,
    enginesResult,
    selectedQuizId,
    selectedEngineId,
    selectedQuestionIndex,
  );

  const currentSelectedValues = getSelectedValuesForCurrentSelection(
    quizzesResult,
    enginesResult,
    selectedQuizId,
    selectedEngineId,
    selectedArtistType,
    selectedQuestionIndex,
  );

  // Setters for atom-based state
  const setSelectedQuizId = useAtomSet(selectedQuizIdAtom);
  const setSelectedEngineId = useAtomSet(selectedEngineIdAtom);
  const setSelectedArtistType = useAtomSet(selectedArtistTypeAtom);
  const setSelectedQuestionIndex = useAtomSet(selectedQuestionIndexAtom);
  const setShowIdealAnswers = useAtomSet(showIdealAnswersAtom);
  const setPendingRating = useAtomSet(pendingRatingAtom);

  // Quiz atoms for creating temp versions
  const createTempQuiz = useAtomSet(createTempQuizAtom);

  // Engine atoms for modifying ideal answers
  const autoSaveTempEngine = useAtomSet(autoSaveTempEngineAtom);

  // Clear atoms for removing temp versions
  const clearTempQuizzes = useAtomSet(clearTempQuizzesAtom);
  const clearTempEngines = useAtomSet(clearTempEnginesAtom);

  // Delete atom for dangerous operations
  const deleteQuiz = useAtomSet(deleteQuizAtom);

  // Registry for optimistic updates
  const setEnginesAtom = useAtomSet(enginesAtom);

  // Initialize selections on first load - moved before early returns
  React.useEffect(() => {
    if (Result.isSuccess(quizzesResult) && Result.isSuccess(enginesResult)) {
      const quizzes = quizzesResult.value;
      const engines = enginesResult.value;

      if (selectedQuizId === "" && quizzes.length > 0) {
        // Find "My Artist Type Quiz" versions and select the latest one
        const artistTypeQuizzes = quizzes
          .filter(
            (q) => q.title === "My Artist Type Quiz" || q.title === "My Artist Type Quiz (Editing)",
          )
          .sort((a, b) => b.version.localeCompare(a.version));

        const defaultQuiz =
          artistTypeQuizzes[0] ??
          quizzes.find((q) => q.title.includes("My Artist Type")) ??
          quizzes[0];
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

  // Auto-sync engine selection when quiz selection changes
  React.useEffect(() => {
    if (Result.isSuccess(quizzesResult) && Result.isSuccess(enginesResult)) {
      const quizzes = quizzesResult.value;
      const engines = enginesResult.value; // Extract engines here
      const selectedQuiz = quizzes.find((q) => q.id === selectedQuizId);

      if (selectedQuiz !== undefined) {
        // eslint-disable-next-line no-console
        console.log(
          "Selected quiz:",
          selectedQuiz.title,
          "v" + selectedQuiz.version,
          "id:",
          selectedQuiz.id,
          "isTemp:",
          selectedQuiz.isTemp,
          "isPublished:",
          selectedQuiz.isPublished,
        );

        const matchingEngine = findMatchingEngine(selectedQuiz);

        // eslint-disable-next-line no-console
        console.log(
          "Available engines:",
          engines.map((e: AnalysisEngine) => ({
            id: e.id,
            name: e.name,
            quizId: e.quizId,
            version: e.version,
            isTemp: e.isTemp,
            isPublished: e.isPublished,
          })),
        );

        // eslint-disable-next-line no-console
        console.log(
          "Matching engine:",
          matchingEngine !== undefined
            ? {
                name: matchingEngine.name,
                quizId: matchingEngine.quizId,
                version: matchingEngine.version,
                isTemp: matchingEngine.isTemp,
              }
            : "NOT FOUND",
        );

        if (matchingEngine !== undefined && matchingEngine.id !== selectedEngineId) {
          // eslint-disable-next-line no-console
          console.log("Auto-selecting engine:", matchingEngine.name);
          setSelectedEngineId(matchingEngine.id);
        }
      }
    }
  }, [selectedQuizId, quizzesResult, enginesResult, selectedEngineId]);

  // Apply pending rating changes when engine switches to temp version
  React.useEffect(() => {
    if (pendingRating !== null && Result.isSuccess(enginesResult)) {
      const engines = enginesResult.value;
      const currentEngine = engines.find((e) => e.id === selectedEngineId);
      if (currentEngine !== undefined && currentEngine.isTemp === true) {
        // Apply the pending rating change
        updateEngineIdealAnswerOptimistic(currentEngine, pendingRating);
        setPendingRating(null); // Clear the pending rating
      }
    }
  }, [selectedEngineId, pendingRating, enginesResult]);

  // Auto-switch to new temp quiz when one is created
  React.useEffect(() => {
    if (Result.isSuccess(quizzesResult) && pendingRating !== null) {
      const quizzes = quizzesResult.value;
      // Find temp quizzes that match the current quiz's base pattern
      const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);
      if (currentQuiz !== undefined) {
        const tempQuizzes = quizzes.filter(
          (q) =>
            q.isTemp === true &&
            q.title.includes(currentQuiz.title) &&
            q.version === currentQuiz.version,
        );

        if (tempQuizzes.length > 0) {
          // Get the newest temp quiz
          const newestTempQuiz = tempQuizzes.sort((a, b) => b.id.localeCompare(a.id))[0];
          if (newestTempQuiz !== undefined && newestTempQuiz.id !== selectedQuizId) {
            // eslint-disable-next-line no-console
            console.log(
              "Auto-switching to temp quiz:",
              newestTempQuiz.title,
              "id:",
              newestTempQuiz.id,
            );
            setSelectedQuizId(newestTempQuiz.id);
          }
        }
      }
    }
  }, [quizzesResult, pendingRating, selectedQuizId]);

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
    quizzes.find((q) => q.title.includes("My Artist Type"));

  if (quiz === undefined) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">No quiz found</div>
      </div>
    );
  }

  const questions = quiz.questions as Array<Question>;
  const selectedQuestion = questions[selectedQuestionIndex];

  // The ideal answers are now provided by the derived atom

  const handleSelectQuestion = (index: number) => {
    setSelectedQuestionIndex(index);
  };

  const handleRatingSelect = async (rating: number) => {
    // Get the current quiz and engine
    const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);
    const currentEngine = engines.find((e) => e.id === selectedEngineId);
    if (currentQuiz === undefined || currentEngine === undefined || selectedQuestion === undefined)
      return;

    // Check if we're already working with temp versions
    const isWorkingWithTempVersions = currentQuiz.isTemp === true && currentEngine.isTemp === true;

    if (isWorkingWithTempVersions) {
      // Already working with temp versions, just update the engine
      updateEngineIdealAnswerOptimistic(currentEngine, rating);
    } else {
      // Need to create temp versions first
      try {
        // 1. Set pending rating to apply after engine switches
        setPendingRating(rating);

        // 2. Create temp quiz (this will automatically create matching temp engine)
        // eslint-disable-next-line no-console
        console.log("Creating temp quiz from:", currentQuiz.title, "id:", currentQuiz.id);
        createTempQuiz({ quiz: currentQuiz });

        // The temp quiz creation will update the atoms automatically
        // and the useEffect will handle switching to the new temp versions

        // 4. Force a refresh of the atoms to ensure UI updates
        // The atoms should automatically reflect the new temp quiz

        // 4. The useEffect will automatically:
        //    - Switch to the matching temp engine
        //    - Apply the pending rating change
      } catch {
        // Clear pending rating on error
        setPendingRating(null);
      }
    }
  };

  // Helper function to create updated engine with new ideal answer
  const createUpdatedEngine = (workingEngine: AnalysisEngine, rating: number) => {
    if (selectedQuestion === undefined) return workingEngine;

    // Find the artist type ending ID
    const artistTypeEndingId = `the-${selectedArtistType.toLowerCase()}-artist`;

    // Update the engine's endings to modify the question rules
    const updatedEndings = workingEngine.endings.map((ending) => {
      if (ending.endingId === artistTypeEndingId) {
        // Find or create the question rule for this question
        const existingRuleIndex = ending.questionRules.findIndex(
          (rule) => rule.questionId === selectedQuestion.id,
        );

        if (existingRuleIndex >= 0) {
          // Update existing rule
          const updatedRules = [...ending.questionRules];
          const existingRule = updatedRules[existingRuleIndex];
          if (existingRule !== undefined) {
            const currentIdealAnswers = existingRule.idealAnswers;
            let newIdealAnswers: Array<number>;

            if (existingRule.isPrimary) {
              // Primary artist type: Allow multiple selections (toggle behavior)
              if (currentIdealAnswers.includes(rating)) {
                // Remove rating if already selected
                newIdealAnswers = currentIdealAnswers.filter((r) => r !== rating);
              } else {
                // Add rating to existing selections
                newIdealAnswers = [...currentIdealAnswers, rating].sort((a, b) => a - b);
              }
            } else {
              // Secondary artist type: Only one selection allowed (replace behavior)
              newIdealAnswers = [rating];
            }

            updatedRules[existingRuleIndex] = {
              ...existingRule,
              idealAnswers: newIdealAnswers,
            };
          }
          return {
            ...ending,
            questionRules: updatedRules,
          };
        }

        // Create new rule - default to secondary (isPrimary: false)
        return {
          ...ending,
          questionRules: [
            ...ending.questionRules,
            {
              questionId: selectedQuestion.id,
              idealAnswers: [rating],
              isPrimary: false, // Default to secondary
            },
          ],
        };
      }
      return ending;
    });

    // Return the updated engine
    return {
      ...workingEngine,
      endings: updatedEndings,
    };
  };

  // Optimistic update for existing temp engine
  const updateEngineIdealAnswerOptimistic = (workingEngine: AnalysisEngine, rating: number) => {
    // 1. Immediately update local state (optimistic)
    const updatedEngine = createUpdatedEngine(workingEngine, rating);
    setEnginesAtom(EngineAction.Upsert({ engine: updatedEngine }));

    // 2. Persist to server in background
    autoSaveTempEngine({ engine: updatedEngine });
  };

  // Find the matching analysis engine for a given quiz using direct quizId reference
  const findMatchingEngine = (targetQuiz: Quiz): AnalysisEngine | undefined => {
    Effect.runSync(
      Effect.log(
        `Finding engine for quiz: ${targetQuiz.title} (id: ${targetQuiz.id}, isTemp: ${targetQuiz.isTemp})`,
      ),
    );

    // Simple direct lookup by quizId - this is much more reliable!
    const matchingEngine = engines.find((engine) => engine.quizId === targetQuiz.id);

    if (matchingEngine !== undefined) {
      Effect.runSync(
        Effect.log(
          `Found matching engine: ${matchingEngine.name} (quizId: ${matchingEngine.quizId})`,
        ),
      );
      return matchingEngine;
    }

    Effect.runSync(Effect.log(`No engine found with quizId: ${targetQuiz.id}`));
    Effect.runSync(
      Effect.log(
        `Available engines: ${engines.map((e) => `${e.name} (quizId: ${e.quizId})`).join(", ")}`,
      ),
    );

    return undefined;
  };

  // The currently selected values are now provided by the derived atom

  // Optimistic create temp engine and update

  const handleAddQuestion = () => {
    // TODO: Implement add question functionality
    // eslint-disable-next-line no-console
    console.log("Add question clicked");
  };

  const handleClearDraft = () => {
    // Clear both temp quizzes and temp engines
    clearTempQuizzes();
    clearTempEngines();

    // Reset selection to first available non-temp quiz/engine
    if (Result.isSuccess(quizzesResult) && Result.isSuccess(enginesResult)) {
      const allQuizzes = quizzesResult.value;
      const allEngines = enginesResult.value;

      const nonTempQuiz = allQuizzes.find((q) => q.isTemp === false);
      const nonTempEngine = allEngines.find((e) => e.isTemp === false);

      if (nonTempQuiz !== undefined) {
        setSelectedQuizId(nonTempQuiz.id);
      }
      if (nonTempEngine !== undefined) {
        setSelectedEngineId(nonTempEngine.id);
      }
    }
  };

  const handleDeleteQuiz = async () => {
    if (!Result.isSuccess(quizzesResult)) return;

    const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);
    if (currentQuiz === undefined) return;

    // Dangerous confirmation dialog
    const confirmed = window.confirm(
      `⚠️ DANGER: Delete "${currentQuiz.title}" v${currentQuiz.version}?\n\n` +
        `This action CANNOT be undone. The quiz and all its data will be permanently deleted.\n\n` +
        `Type "DELETE" in the next dialog to confirm.`,
    );

    if (!confirmed) return;

    // Double confirmation with text input
    const confirmText = window.prompt(
      `To confirm deletion of "${currentQuiz.title}", type "DELETE" (all caps):`,
    );

    if (confirmText !== "DELETE") {
      if (confirmText !== null) {
        alert("Deletion cancelled. You must type exactly 'DELETE' to confirm.");
      }
      return;
    }

    deleteQuiz(currentQuiz.id);

    // The atom will handle the deletion and update the state automatically
    // Reset selection to first available quiz
    setTimeout(() => {
      const remainingQuizzes = quizzes.filter((q) => q.id !== currentQuiz.id);
      if (remainingQuizzes.length > 0) {
        const firstRemaining = remainingQuizzes[0];
        if (firstRemaining !== undefined) {
          setSelectedQuizId(firstRemaining.id);
        }
      }
    }, 100); // Small delay to allow atom to update
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
    <div className="flex h-[calc(100vh-1rem)] flex-col overflow-hidden">
      {/* Top Bar */}
      <TopBar
        quizzes={quizzes}
        engines={engines}
        selectedQuizId={selectedQuizId}
        selectedEngineId={selectedEngineId}
        selectedArtistType={selectedArtistType}
        onQuizChange={setSelectedQuizId}
        onArtistTypeChange={setSelectedArtistType}
        onClearDraft={handleClearDraft}
        onDeleteQuiz={handleDeleteQuiz}
      />

      {/* Main Content Area */}
      <ResizablePanelGroup direction="horizontal" className="flex-1 min-h-0 overflow-hidden">
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
                  selectedValues={currentSelectedValues} // Show multiple selections for primary artist types
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
            showIdealAnswers={showIdealAnswers}
            totalQuestions={questions.length}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
