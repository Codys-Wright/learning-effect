"use client";

import { Version } from "@core/domain";
import { Atom, Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { type AnalysisEngine, type Question, type Quiz } from "@features/quiz/domain";
// Use the actual Result types from the atoms instead of importing platform types
import {
  Badge,
  Button,
  Card,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  cn,
  DropdownMenu,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  type ChartConfig,
} from "@ui/shadcn";
import { Effect } from "effect";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BarChart3Icon,
  EditIcon,
  GitBranchIcon,
  PlayIcon,
  PlusIcon,
  SaveIcon,
  SettingsIcon,
} from "lucide-react";
import React from "react";
import { Label, Pie, PieChart } from "recharts";
import { AnalysisService } from "../../domain/analysis/analysis.service.js";
import {
  artistColors,
  endingNameToArtistType,
  getArtistIconPath,
} from "../components/artist-type/artist-data-utils.js";
import { QuestionCard } from "../components/question-card.js";
import { QuizProgressBar } from "../components/quiz-progress-bar.js";
import { VersionIncrementDialog } from "../components/version-increment-dialog.js";
import {
  autoSaveTempEngineAtom,
  clearTempEnginesAtom,
  EngineAction,
  enginesAtom,
} from "../engines/engines-atoms.js";
import { allAnalysisAtom, responsesAtom } from "../index.js";
import {
  clearTempQuizzesAtom,
  createNewQuizVersionAtom,
  createTempQuizAtom,
  deleteQuizAtom,
  quizzesAtom,
  saveTempQuizAtom,
} from "../quizzes-atoms.js";

// Atoms for dropdown selections - keep alive to persist state
const selectedQuizIdAtom = Atom.make("").pipe(Atom.keepAlive);
const selectedEngineIdAtom = Atom.make("").pipe(Atom.keepAlive);
const selectedArtistTypeAtom = Atom.make("visionary").pipe(Atom.keepAlive);
const selectedQuestionIndexAtom = Atom.make(0).pipe(Atom.keepAlive);
const showIdealAnswersAtom = Atom.make(true).pipe(Atom.keepAlive);
const pendingRatingAtom = Atom.make<number | null>(null).pipe(Atom.keepAlive);
const expectedNewVersionAtom = Atom.make<string | null>(null).pipe(Atom.keepAlive);
const expectedTempQuizAtom = Atom.make<{
  originalQuizId: string;
  existingTempQuizIds: Array<string>;
} | null>(null).pipe(Atom.keepAlive);

// Sidebar view state atom for switching between inspector and graphs
const sidebarViewAtom = Atom.make<"inspector" | "graphs">("inspector").pipe(Atom.keepAlive);

// Generate consistent random colors for temp/edit badges based on quiz ID
const getTempBadgeColor = (quizId: string): string => {
  // Simple hash function to convert string to number (offset by 7 to get different colors than drafts)
  let hash = 7;
  for (let i = 0; i < quizId.length; i++) {
    const char = quizId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Array of vibrant color combinations for temp/edit badges
  const colors = [
    "border-orange-500 text-orange-600",
    "border-red-500 text-red-600",
    "border-amber-500 text-amber-600",
    "border-yellow-500 text-yellow-600",
    "border-lime-500 text-lime-600",
    "border-emerald-500 text-emerald-600",
    "border-teal-500 text-teal-600",
    "border-cyan-500 text-cyan-600",
    "border-sky-500 text-sky-600",
    "border-blue-500 text-blue-600",
    "border-indigo-500 text-indigo-600",
    "border-violet-500 text-violet-600",
    "border-purple-500 text-purple-600",
    "border-fuchsia-500 text-fuchsia-600",
    "border-pink-500 text-pink-600",
    "border-rose-500 text-rose-600",
  ];

  // Use hash to pick a consistent color for this quiz ID
  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex] ?? "border-orange-500 text-orange-600";
};

// Helper function to get display version for temp vs permanent versions
const getDisplayVersion = (quiz: Quiz, allQuizzes: ReadonlyArray<Quiz>): string => {
  if (!quiz.isTemp) {
    // Permanent version - just show the semver
    return `v${quiz.version.semver}`;
  }

  // Temp version - show base version with draft number in parentheses
  const baseTitle = quiz.title.replace(" (Editing)", "");
  const baseVersion = quiz.version.semver;

  // Find all temp versions of this same base version
  const tempVersionsOfSameBase = allQuizzes
    .filter(
      (q) =>
        q.isTemp === true &&
        q.title.replace(" (Editing)", "") === baseTitle &&
        q.version.semver === baseVersion,
    )
    .sort((a, b) => a.id.localeCompare(b.id)); // Sort by ID for consistent ordering

  // Find the index of this specific temp version
  const draftIndex = tempVersionsOfSameBase.findIndex((q) => q.id === quiz.id);
  const draftNumber = draftIndex + 1;

  return `v${baseVersion} (Draft ${draftNumber})`;
};

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
    return [];
  }

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
    return [];
  }

  const selectedValues = [...questionRule.idealAnswers]; // Create mutable copy

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
  onCreateNewVersion: (
    newVersion: string,
    incrementType: "major" | "minor" | "patch",
    comment?: string,
  ) => void;
  onDeleteQuiz: () => void;
  onQuizChange: (quizId: string) => void;
  quizzes: ReadonlyArray<Quiz>;
  selectedArtistType: string;
  selectedEngineId: string;
  selectedQuizId: string;
}> = ({
  onArtistTypeChange,
  onClearDraft,
  onCreateNewVersion,
  onDeleteQuiz,
  onQuizChange,
  quizzes,
  selectedArtistType,
  selectedQuizId,
}) => {
  // Filter to only show "My Artist Type Quiz" versions
  const artistTypeQuizVersions = quizzes
    .filter((q) => q.title === "My Artist Type Quiz" || q.title === "My Artist Type Quiz (Editing)")
    .sort((a, b) => b.version.semver.localeCompare(a.version.semver)); // Sort by version desc

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

  return (
    <>
      <VersionIncrementDialog
        currentVersion={selectedQuiz !== undefined ? selectedQuiz.version.semver : "1.0.0"}
        isOpen={isVersionDialogOpen}
        onClose={() => {
          setIsVersionDialogOpen(false);
        }}
        onConfirm={onCreateNewVersion}
        title={
          selectedQuiz !== undefined && selectedQuiz.isTemp === true
            ? "Save Changes as New Version"
            : "Create New Quiz Version"
        }
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
                      <span title={selectedQuiz.version.comment ?? undefined}>
                        {getDisplayVersion(selectedQuiz, artistTypeQuizVersions)}
                      </span>
                      {selectedQuiz.isTemp ? (
                        <Badge
                          variant="outline"
                          className={`text-xs px-1 ${getTempBadgeColor(selectedQuiz.id)}`}
                        >
                          Edit
                        </Badge>
                      ) : selectedQuiz.isPublished === true ? (
                        <Badge variant="default" className="text-xs px-1">
                          Live
                        </Badge>
                      ) : null}
                    </div>
                  )}
                </Select.Value>
              </Select.Trigger>
              <Select.Content>
                {artistTypeQuizVersions.map((quiz) => (
                  <Select.Item key={quiz.id} value={quiz.id}>
                    <div className="flex items-center gap-1.5">
                      <span>{getDisplayVersion(quiz, artistTypeQuizVersions)}</span>
                      {quiz.isTemp ? (
                        <Badge
                          variant="outline"
                          className={`text-xs px-1 ${getTempBadgeColor(quiz.id)}`}
                        >
                          Edit
                        </Badge>
                      ) : quiz.isPublished ? (
                        <Badge variant="default" className="text-xs px-1">
                          Live
                        </Badge>
                      ) : null}
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
                setIsVersionDialogOpen(true);
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
  onTogglePrimaryRule: (isPrimary: boolean) => void;
  onUpdateIdealAnswer: (value: number) => void;
  question: Question | undefined;
  questionIndex: number;
  selectedArtistType: string;
  selectedValues: Array<number>;
  showIdealAnswers: boolean;
  totalQuestions: number;
}> = ({
  idealAnswers,
  onToggleIdealAnswers,
  onTogglePrimaryRule,
  onUpdateIdealAnswer,
  question,
  questionIndex,
  selectedArtistType,
  selectedValues,
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
                <div className="flex items-center gap-2 px-3 py-2 text-sm border border-border rounded-md bg-muted">
                  <ArtistIcon artistType={selectedArtistType} size={16} />
                  <span className="capitalize">{selectedArtistType}</span>
                </div>
              </div>

              {/* Current Selection Display */}
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Current Selection
                </label>
                <div className="px-3 py-2 text-sm border border-border rounded-md bg-muted">
                  {selectedValues.length > 0 ? selectedValues.join(", ") : "None selected"}
                </div>
              </div>

              {/* Quick Ideal Answer Input */}
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Set Ideal Answer
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={question.data.type === "rating" ? question.data.minRating : 1}
                    max={question.data.type === "rating" ? question.data.maxRating : 10}
                    placeholder="Enter value"
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const value = Number.parseInt(e.currentTarget.value);
                        if (!Number.isNaN(value)) {
                          onUpdateIdealAnswer(value);
                          e.currentTarget.value = "";
                        }
                      }
                    }}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      const input = e.currentTarget.parentElement?.querySelector("input");
                      if (input !== null && input !== undefined) {
                        const value = Number.parseInt(input.value);
                        if (!Number.isNaN(value)) {
                          onUpdateIdealAnswer(value);
                          input.value = "";
                        }
                      }
                    }}
                  >
                    Set
                  </Button>
                </div>
              </div>

              {/* Primary Rule Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">Primary Rule</label>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant={
                      idealAnswers.find(
                        (a) => a.endingId === `the-${selectedArtistType.toLowerCase()}-artist`,
                      )?.isPrimary === true
                        ? "default"
                        : "outline"
                    }
                    onClick={() => {
                      const currentRule = idealAnswers.find(
                        (a) => a.endingId === `the-${selectedArtistType.toLowerCase()}-artist`,
                      );
                      onTogglePrimaryRule(!(currentRule?.isPrimary === true));
                    }}
                    className="h-6 px-2 text-xs"
                  >
                    {idealAnswers.find(
                      (a) => a.endingId === `the-${selectedArtistType.toLowerCase()}-artist`,
                    )?.isPrimary === true
                      ? "Primary"
                      : "Secondary"}
                  </Button>
                </div>
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

// Right Sidebar Component (Inspector + Graphs)
const RightSidebar: React.FC<{
  engines: ReadonlyArray<AnalysisEngine>;
  idealAnswers: Array<{
    endingId: string;
    endingName: string;
    idealAnswers: Array<number>;
    isPrimary: boolean;
  }>;
  onToggleIdealAnswers: () => void;
  onTogglePrimaryRule: (isPrimary: boolean) => void;
  onUpdateIdealAnswer: (value: number) => void;
  question: Question | undefined;
  questionIndex: number;
  quiz: Quiz;
  selectedArtistType: string;
  selectedEngineId: string;
  selectedValues: Array<number>;
  showIdealAnswers: boolean;
  totalQuestions: number;
}> = ({
  engines,
  idealAnswers,
  onToggleIdealAnswers,
  onTogglePrimaryRule,
  onUpdateIdealAnswer,
  question,
  questionIndex,
  quiz,
  selectedArtistType,
  selectedEngineId,
  selectedValues,
  showIdealAnswers,
  totalQuestions,
}) => {
  const sidebarView = useAtomValue(sidebarViewAtom);
  const setSidebarView = useAtomSet(sidebarViewAtom);

  return (
    <div className="flex h-full flex-col border-l border-border/50">
      {/* Sidebar Header with View Switcher */}
      <div className="flex items-center justify-between p-3 border-b border-border/50">
        <h3 className="text-sm font-medium">
          {sidebarView === "inspector" ? "Question Inspector" : "Analysis Graphs"}
        </h3>
        <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
          <Button
            variant={sidebarView === "inspector" ? "default" : "ghost"}
            size="sm"
            onClick={() => {
              setSidebarView("inspector");
            }}
            className="gap-1 h-6 px-2 text-xs"
          >
            <EditIcon className="h-3 w-3" />
            Inspector
          </Button>
          <Button
            variant={sidebarView === "graphs" ? "default" : "ghost"}
            size="sm"
            onClick={() => {
              setSidebarView("graphs");
            }}
            className="gap-1 h-6 px-2 text-xs"
          >
            <BarChart3Icon className="h-3 w-3" />
            Graphs
          </Button>
        </div>
      </div>

      {/* Sidebar Content */}
      {sidebarView === "inspector" ? (
        <InspectorPanel
          idealAnswers={idealAnswers}
          onToggleIdealAnswers={onToggleIdealAnswers}
          onTogglePrimaryRule={onTogglePrimaryRule}
          onUpdateIdealAnswer={onUpdateIdealAnswer}
          question={question}
          questionIndex={questionIndex}
          selectedArtistType={selectedArtistType}
          selectedValues={selectedValues}
          showIdealAnswers={showIdealAnswers}
          totalQuestions={totalQuestions}
        />
      ) : (
        <SidebarGraphsView quiz={quiz} engines={engines} selectedEngineId={selectedEngineId} />
      )}
    </div>
  );
};

// Chart config matching the admin AnalysisChart
const chartConfig = {
  count: {
    label: "Count",
  },
  visionary: {
    label: "Visionary",
    color: "var(--artist-visionary)",
  },
  consummate: {
    label: "Consummate",
    color: "var(--artist-consummate)",
  },
  analyzer: {
    label: "Analyzer",
    color: "var(--artist-analyzer)",
  },
  tech: {
    label: "Tech",
    color: "var(--artist-tech)",
  },
  entertainer: {
    label: "Entertainer",
    color: "var(--artist-entertainer)",
  },
  maverick: {
    label: "Maverick",
    color: "var(--artist-maverick)",
  },
  dreamer: {
    label: "Dreamer",
    color: "var(--artist-dreamer)",
  },
  feeler: {
    label: "Feeler",
    color: "var(--artist-feeler)",
  },
  tortured: {
    label: "Tortured",
    color: "var(--artist-tortured)",
  },
  solo: {
    label: "Solo",
    color: "var(--artist-solo)",
  },
} satisfies ChartConfig;

// Projected Analysis Chart Component (mimics the admin AnalysisChart)
const ProjectedAnalysisChart: React.FC<{
  responsesResult: ReturnType<typeof responsesAtom.read>;
  selectedEngine: AnalysisEngine;
}> = ({ responsesResult, selectedEngine }) => {
  // Calculate projected analysis based on current engine
  const { chartData, totalProjected } = React.useMemo(() => {
    if (!Result.isSuccess(responsesResult)) {
      return { chartData: [], totalProjected: 0 };
    }

    const responses = responsesResult.value;

    // Simulate what the analysis would be with the current engine
    // This creates a more realistic distribution based on engine configuration
    const artistTypeCounts: Record<string, number> = {};

    selectedEngine.endings.forEach((ending) => {
      // Calculate weight based on number of rules and ideal answers
      const ruleWeight = ending.questionRules.length;
      const answerWeight = ending.questionRules.reduce(
        (sum, rule) => sum + rule.idealAnswers.length,
        0,
      );
      const primaryWeight = ending.questionRules.filter((r) => r.isPrimary).length * 2;

      // Total weight determines how likely this artist type is to be selected
      const totalWeight = ruleWeight + answerWeight + primaryWeight;

      // Convert ending name to artist type
      const artistType = endingNameToArtistType[ending.name];
      if (artistType !== undefined) {
        // Distribute responses based on weights (simplified simulation)
        const baseCount = Math.floor(responses.length / selectedEngine.endings.length);
        const weightedCount = Math.floor(baseCount * (totalWeight / 10)); // Scale weight
        artistTypeCounts[artistType] = Math.max(1, weightedCount);
      }
    });

    // Normalize to match total responses
    const totalCounts = Object.values(artistTypeCounts).reduce((sum, count) => sum + count, 0);
    const scaleFactor = responses.length / totalCounts;

    Object.keys(artistTypeCounts).forEach((artistType) => {
      const currentCount = artistTypeCounts[artistType];
      if (currentCount !== undefined) {
        artistTypeCounts[artistType] = Math.round(currentCount * scaleFactor);
      }
    });

    // Convert to chart data format (matching admin chart)
    const projectedChartData = Object.entries(artistTypeCounts).map(([artistType, count]) => ({
      type: artistType.toLowerCase(),
      count,
      fill: artistColors[artistType as keyof typeof artistColors],
    }));

    return { chartData: projectedChartData, totalProjected: responses.length };
  }, [selectedEngine, responsesResult]);

  return (
    <Card className="flex flex-col h-full">
      <Card.Header className="pb-2">
        <Card.Title className="text-sm">Projected Results</Card.Title>
        <Card.Description className="text-xs">
          What distribution would be with current engine
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-2">
        {!Result.isSuccess(responsesResult) ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-muted-foreground text-xs">Loading...</div>
          </div>
        ) : (
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="count" nameKey="type" innerRadius={40} strokeWidth={3}>
                <Label
                  content={({ viewBox }) => {
                    if (
                      Boolean(viewBox) &&
                      typeof viewBox === "object" &&
                      "cx" in viewBox &&
                      "cy" in viewBox
                    ) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-xl font-bold"
                          >
                            {totalProjected.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 16}
                            className="fill-muted-foreground text-xs"
                          >
                            Projected
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </Card.Content>
    </Card>
  );
};

// Real Analysis Chart with Card wrapper
const RealAnalysisChart: React.FC = () => {
  const analysisResult = useAtomValue(allAnalysisAtom);
  const responsesResult = useAtomValue(responsesAtom);

  const chartData = React.useMemo(() => {
    if (!Result.isSuccess(analysisResult)) {
      return [];
    }

    const analyses = analysisResult.value;

    // Count artist types from the most recent analysis for each response
    const artistTypeCounts: Record<string, number> = {};

    analyses.forEach((analysis) => {
      // Get primary artist type logic (copied from admin chart)
      if (analysis.endingResults.length === 0) return;

      const primaryResult = analysis.endingResults.reduce((prev, current) =>
        current.points > prev.points ? current : prev,
      );

      // Map endingId to full name
      const endingIdToFullName: Record<string, string> = {};
      Object.keys(endingNameToArtistType).forEach((fullName) => {
        const endingId = fullName.toLowerCase().replace(/\s+/g, "-");
        endingIdToFullName[endingId] = fullName;
      });

      const primaryArtistType =
        endingIdToFullName[primaryResult.endingId] ?? primaryResult.endingId;
      const artistType = endingNameToArtistType[primaryArtistType];
      if (artistType !== undefined) {
        artistTypeCounts[artistType] = (artistTypeCounts[artistType] ?? 0) + 1;
      }
    });

    // Convert to chart data format
    return Object.entries(artistTypeCounts).map(([artistType, count]) => ({
      type: artistType.toLowerCase(),
      count,
      fill: artistColors[artistType as keyof typeof artistColors],
    }));
  }, [analysisResult]);

  const totalAnalyses = React.useMemo(() => {
    if (!Result.isSuccess(analysisResult)) {
      return 0;
    }
    return analysisResult.value.length;
  }, [analysisResult, responsesResult]);

  return (
    <Card className="flex flex-col h-full">
      <Card.Header className="pb-2">
        <Card.Title className="text-sm">Current Real Results</Card.Title>
        <Card.Description className="text-xs">
          Actual analysis results from all responses
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-2">
        {!Result.isSuccess(analysisResult) ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-muted-foreground text-xs">Loading...</div>
          </div>
        ) : (
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="count" nameKey="type" innerRadius={40} strokeWidth={3}>
                <Label
                  content={({ viewBox }) => {
                    if (
                      Boolean(viewBox) &&
                      typeof viewBox === "object" &&
                      "cx" in viewBox &&
                      "cy" in viewBox
                    ) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-xl font-bold"
                          >
                            {totalAnalyses.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 16}
                            className="fill-muted-foreground text-xs"
                          >
                            Real
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </Card.Content>
    </Card>
  );
};

// Re-analysis Chart - Analyzes all responses with current engine
const ReanalysisChart: React.FC<{
  responsesResult: ReturnType<typeof responsesAtom.read>;
  selectedEngine: AnalysisEngine;
}> = ({ responsesResult, selectedEngine }) => {
  // Get quiz data and current selections from atoms
  const quizzesResult = useAtomValue(quizzesAtom);
  const selectedQuizId = useAtomValue(selectedQuizIdAtom);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [reanalysisData, setReanalysisData] = React.useState<Array<{
    type: string;
    count: number;
    fill: string;
  }> | null>(null);

  // Function to re-analyze all responses with current engine using the real AnalysisService
  const handleReanalyze = React.useCallback(async () => {
    if (!Result.isSuccess(responsesResult) || !Result.isSuccess(quizzesResult)) {
      // eslint-disable-next-line no-console
      console.log("❌ Cannot re-analyze: missing data", {
        responsesSuccess: Result.isSuccess(responsesResult),
        quizzesSuccess: Result.isSuccess(quizzesResult),
      });
      return;
    }

    if (selectedQuizId === "") {
      // eslint-disable-next-line no-console
      console.log("❌ Cannot re-analyze: no quiz selected");
      return;
    }

    setIsAnalyzing(true);

    try {
      const allResponses = responsesResult.value;
      const allQuizzes = quizzesResult.value;

      // Use the currently selected quiz version from the dropdown for analysis
      const selectedQuiz = allQuizzes.find((quiz) => quiz.id === selectedQuizId);

      if (selectedQuiz === undefined) {
        // eslint-disable-next-line no-console
        console.error("❌ No selected quiz found for analysis");
        return;
      }

      // Find all "My Artist Type Quiz" versions for response filtering
      const artistTypeQuizzes = allQuizzes.filter(
        (quiz) =>
          quiz.title === "My Artist Type Quiz" || quiz.title === "My Artist Type Quiz (Editing)",
      );
      const artistTypeQuizIds = new Set(artistTypeQuizzes.map((q) => q.id));

      // Filter responses to only include those from "My Artist Type Quiz" versions
      const responses = allResponses.filter((response) => artistTypeQuizIds.has(response.quizId));

      const artistTypeCounts: Record<string, number> = {};

      // eslint-disable-next-line no-console
      console.log("🔄 Starting re-analysis with current engine:", {
        engineName: selectedEngine.name,
        engineId: selectedEngine.id,
        selectedQuizVersion: selectedQuiz.version.semver,
        selectedQuizId: selectedQuiz.id,
        totalAllResponses: allResponses.length,
        totalArtistTypeQuizzes: artistTypeQuizzes.length,
        totalFilteredResponses: responses.length,
        engineEndings: selectedEngine.endings.length,
      });

      // Log detailed engine configuration
      // eslint-disable-next-line no-console
      console.log("🔧 Engine configuration details:", {
        engineName: selectedEngine.name,
        engineId: selectedEngine.id,
        isActive: selectedEngine.isActive,
        scoringConfig: selectedEngine.scoringConfig,
        endingsCount: selectedEngine.endings.length,
        endings: selectedEngine.endings.map((ending) => ({
          endingId: ending.endingId,
          name: ending.name,
          questionRulesCount: ending.questionRules.length,
          questionRules: ending.questionRules.map((rule) => ({
            questionId: rule.questionId,
            idealAnswers: rule.idealAnswers,
            idealAnswersCount: rule.idealAnswers.length,
            isPrimary: rule.isPrimary,
            weightMultiplier: rule.weightMultiplier,
          })),
        })),
      });

      // Check if this engine has any question rules with ideal answers
      const totalQuestionRules = selectedEngine.endings.reduce(
        (total, ending) => total + ending.questionRules.length,
        0,
      );
      const rulesWithIdealAnswers = selectedEngine.endings.reduce(
        (total, ending) =>
          total + ending.questionRules.filter((rule) => rule.idealAnswers.length > 0).length,
        0,
      );

      // eslint-disable-next-line no-console
      console.log("🔍 Engine rules summary:", {
        totalQuestionRules,
        rulesWithIdealAnswers,
        rulesWithoutIdealAnswers: totalQuestionRules - rulesWithIdealAnswers,
        engineHasAnyRules: totalQuestionRules > 0,
        engineHasAnyIdealAnswers: rulesWithIdealAnswers > 0,
      });

      // Group responses by quiz ID for efficient lookup
      const responsesByQuizId: Record<string, Array<(typeof responses)[0]>> = {};
      for (const response of responses) {
        const quizId = response.quizId;
        if (responsesByQuizId[quizId] === undefined) {
          responsesByQuizId[quizId] = [];
        }
        responsesByQuizId[quizId].push(response);
      }

      // eslint-disable-next-line no-console
      console.log(
        "📊 Responses grouped by quiz version:",
        Object.keys(responsesByQuizId).map((quizId) => {
          const quiz = artistTypeQuizzes.find((q) => q.id === quizId);
          return {
            quizId,
            quizTitle: quiz?.title ?? "Unknown",
            quizVersion: quiz?.version.semver ?? "Unknown",
            responseCount: responsesByQuizId[quizId]?.length ?? 0,
          };
        }),
      );

      // Log basic info about the analysis setup
      // eslint-disable-next-line no-console
      console.log("🎯 Analysis setup complete:", {
        selectedQuizFound: selectedQuiz !== undefined,
        selectedEngineFound: selectedEngine !== undefined,
        responsesToAnalyze: responses.length,
        readyToAnalyze: true,
      });

      // Create a function to map old response question IDs to current quiz question IDs
      const mapResponseToCurrentQuiz = (response: (typeof responses)[0]) => {
        const originalQuiz = artistTypeQuizzes.find((q) => q.id === response.quizId);
        if (originalQuiz === undefined) return null;

        const originalQuestions = originalQuiz.questions ?? [];
        const selectedQuestions = selectedQuiz.questions ?? [];

        // Map responses by question position (index) since question content should be the same
        const mappedAnswers = (response.answers ?? [])
          .map((answer, index) => {
            // Try to find the corresponding question in the selected quiz by index
            const selectedQuestion = selectedQuestions[index];
            if (selectedQuestion !== undefined) {
              return {
                ...answer,
                questionId: selectedQuestion.id, // Use selected quiz's question ID
              };
            }
            return answer; // Keep original if no mapping found
          })
          .filter((answer) => {
            // Only keep answers that have a corresponding question in selected quiz
            return selectedQuestions.some((q) => q.id === answer.questionId);
          });

        return {
          ...response,
          answers: mappedAnswers,
        };
      };

      // For each response, map it to current quiz structure and analyze
      for (const response of responses) {
        try {
          // Map the response to use selected quiz question IDs
          const mappedResponse = mapResponseToCurrentQuiz(response);
          if (mappedResponse === null) {
            // eslint-disable-next-line no-console
            console.warn(
              "⚠️ Could not map response to selected quiz:",
              response.id,
              "quizId:",
              response.quizId,
            );
            continue;
          }

          // eslint-disable-next-line no-console
          console.log("🔍 Analyzing response:", {
            responseId: response.id,
            originalQuizId: response.quizId,
            selectedQuizId: selectedQuiz.id,
            selectedQuizTitle: selectedQuiz.title,
            selectedQuizVersion: selectedQuiz.version.semver,
            questionCount: selectedQuiz.questions?.length ?? 0,
            originalAnswerCount: response.answers?.length ?? 0,
            mappedAnswerCount: mappedResponse.answers?.length ?? 0,
            sampleMappedAnswers: (mappedResponse.answers ?? []).slice(0, 3).map((a) => ({
              questionId: a.questionId,
              value: a.value,
            })),
          });

          // Quick validation of the mapping
          const mappedResponseQuestionIds = new Set(
            (mappedResponse.answers ?? []).map((a) => a.questionId),
          );
          const selectedQuizQuestionIds = (selectedQuiz.questions ?? []).map((q) => q.id);
          const responseToQuizMatches = [...mappedResponseQuestionIds].filter((id) =>
            selectedQuizQuestionIds.includes(id),
          );

          // Only log the first response for debugging
          if (response === responses[0]) {
            // eslint-disable-next-line no-console
            console.log("🔗 First response mapping check:", {
              originalAnswerCount: (response.answers ?? []).length,
              mappedAnswerCount: mappedResponse.answers?.length ?? 0,
              selectedQuizQuestionCount: selectedQuizQuestionIds.length,
              matchingQuestionCount: responseToQuizMatches.length,
              mappingSuccessful: responseToQuizMatches.length > 0,
            });
          }

          // Use the actual AnalysisService to analyze this mapped response
          const analysisResult = await Effect.runPromise(
            Effect.provide(
              AnalysisService.pipe(
                Effect.flatMap((service) =>
                  service.analyzeResponse(selectedEngine, selectedQuiz, mappedResponse),
                ),
              ),
              AnalysisService.Default,
            ),
          );

          // eslint-disable-next-line no-console
          console.log("📈 Analysis result:", {
            responseId: response.id,
            endingResultsCount: analysisResult.endingResults.length,
            allResults: analysisResult.endingResults
              .sort((a, b) => b.points - a.points)
              .map((r) => ({ endingId: r.endingId, points: r.points, percentage: r.percentage })),
          });

          // Find the winning artist type (highest points)
          if (analysisResult.endingResults.length > 0) {
            const winningResult = analysisResult.endingResults.reduce((winner, current) =>
              current.points > winner.points ? current : winner,
            );

            // Map endingId to full name, then to artist type
            const endingIdToFullName: Record<string, string> = {};
            Object.keys(endingNameToArtistType).forEach((fullName) => {
              const endingId = fullName.toLowerCase().replace(/\s+/g, "-");
              endingIdToFullName[endingId] = fullName;
            });

            const fullName = endingIdToFullName[winningResult.endingId] ?? winningResult.endingId;
            const artistType = endingNameToArtistType[fullName];

            // eslint-disable-next-line no-console
            console.log("🎯 Winner for response:", {
              responseId: response.id,
              winningEndingId: winningResult.endingId,
              winningPoints: winningResult.points,
              fullName,
              artistType,
            });

            if (artistType !== undefined) {
              artistTypeCounts[artistType] = (artistTypeCounts[artistType] ?? 0) + 1;
            } else {
              // eslint-disable-next-line no-console
              console.warn("⚠️ Could not map ending to artist type:", {
                endingId: winningResult.endingId,
                fullName,
                availableArtistTypes: Object.keys(endingNameToArtistType),
              });
            }
          } else {
            // eslint-disable-next-line no-console
            console.warn("⚠️ No ending results for response:", response.id);
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("❌ Failed to analyze response:", response.id, error);
          // Continue with other responses even if one fails
        }
      }

      // eslint-disable-next-line no-console
      console.log("📊 Final artist type counts:", artistTypeCounts);

      // Convert to chart data format
      const chartData = Object.entries(artistTypeCounts).map(([artistType, count]) => ({
        type: artistType.toLowerCase(),
        count,
        fill: artistColors[artistType as keyof typeof artistColors],
      }));

      // eslint-disable-next-line no-console
      console.log("🎨 Chart data:", chartData);

      setReanalysisData(chartData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("❌ Re-analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [responsesResult, quizzesResult, selectedEngine, selectedQuizId]);

  const totalReanalyzed = React.useMemo(() => {
    if (reanalysisData === null) return 0;
    return reanalysisData.reduce((sum, item) => sum + item.count, 0);
  }, [reanalysisData]);

  return (
    <Card className="flex flex-col h-full">
      <Card.Header className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <Card.Title className="text-sm">Re-analyze with Current Engine</Card.Title>
            <Card.Description className="text-xs">
              {reanalysisData === null
                ? "Click to analyze all responses with current engine settings"
                : "Fresh analysis results with current engine configuration"}
            </Card.Description>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReanalyze}
            disabled={isAnalyzing || !Result.isSuccess(responsesResult)}
            className="h-8 w-8 p-0"
          >
            <PlayIcon className="h-4 w-4" />
          </Button>
        </div>
      </Card.Header>
      <Card.Content className="flex-1 pb-2">
        {isAnalyzing ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-muted-foreground text-xs">Analyzing...</div>
          </div>
        ) : reanalysisData === null ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-muted-foreground">
              <PlayIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-xs">Click the play button to re-analyze</p>
            </div>
          </div>
        ) : (
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={reanalysisData}
                dataKey="count"
                nameKey="type"
                innerRadius={40}
                strokeWidth={3}
              >
                <Label
                  content={({ viewBox }) => {
                    if (
                      Boolean(viewBox) &&
                      typeof viewBox === "object" &&
                      "cx" in viewBox &&
                      "cy" in viewBox
                    ) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-xl font-bold"
                          >
                            {totalReanalyzed.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 16}
                            className="fill-muted-foreground text-xs"
                          >
                            Re-analyzed
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </Card.Content>
    </Card>
  );
};

// Sidebar Graphs View Component (Compact version for sidebar)
const SidebarGraphsView: React.FC<{
  engines: ReadonlyArray<AnalysisEngine>;
  quiz: Quiz;
  selectedEngineId: string;
}> = ({ engines, selectedEngineId }) => {
  const selectedEngine = engines.find((e) => e.id === selectedEngineId);

  // Get real analysis data from atoms
  const responsesResult = useAtomValue(responsesAtom);

  if (selectedEngine === undefined) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <div className="text-center text-muted-foreground">
          <BarChart3Icon className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No analysis engine selected</p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 p-3">
      <div className="space-y-3">
        {/* Re-analysis Chart - Top */}
        <div className="h-[200px]">
          <ReanalysisChart responsesResult={responsesResult} selectedEngine={selectedEngine} />
        </div>

        {/* Real Analysis Distribution */}
        <div className="h-[200px]">
          <RealAnalysisChart />
        </div>

        {/* Projected Analysis Distribution */}
        <div className="h-[200px]">
          <ProjectedAnalysisChart
            responsesResult={responsesResult}
            selectedEngine={selectedEngine}
          />
        </div>
      </div>
    </ScrollArea>
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
  const expectedNewVersion = useAtomValue(expectedNewVersionAtom);
  const expectedTempQuiz = useAtomValue(expectedTempQuizAtom);

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
  const setExpectedNewVersion = useAtomSet(expectedNewVersionAtom);
  const setExpectedTempQuiz = useAtomSet(expectedTempQuizAtom);

  // Quiz atoms for creating temp versions - use the atom function directly
  const createTempQuiz = useAtomSet(createTempQuizAtom);

  // Engine atoms for modifying ideal answers
  const autoSaveTempEngine = useAtomSet(autoSaveTempEngineAtom);

  // Clear atoms for removing temp versions
  const clearTempQuizzes = useAtomSet(clearTempQuizzesAtom);
  const clearTempEngines = useAtomSet(clearTempEnginesAtom);

  // Delete atom for dangerous operations
  const deleteQuiz = useAtomSet(deleteQuizAtom);

  // Version creation atom
  const createNewVersion = useAtomSet(createNewQuizVersionAtom);

  // Save temp quiz atom
  const saveTempQuiz = useAtomSet(saveTempQuizAtom);

  // Registry for optimistic updates
  const setEnginesAtom = useAtomSet(enginesAtom);

  // Handle creating new version with auto-selection
  const handleCreateNewVersion = (
    newVersion: string,
    incrementType: "major" | "minor" | "patch",
    comment?: string,
  ) => {
    const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);
    if (currentQuiz === undefined) return;

    // Create Version object with semver and comment
    const versionObject = new Version({
      semver: newVersion,
      comment,
    });

    if (currentQuiz.isTemp) {
      // Save temp quiz as official version with the new version info

      saveTempQuiz({
        quiz: currentQuiz,
        action: "saveAsNew",
        newVersion: versionObject,
      });

      // Set expected version to auto-select the new official version
      setExpectedNewVersion(versionObject.semver);
    } else {
      // Create new version from existing quiz
      const expectedVersion = versionObject.semver;

      // The atom handles the async operation and toast notifications
      createNewVersion({
        quiz: currentQuiz,
        newVersion: versionObject,
        incrementType,
      });

      // Set expected version to auto-select when it appears
      setExpectedNewVersion(expectedVersion);
    }
  };

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
          .sort((a, b) => b.version.semver.localeCompare(a.version.semver));

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
        const matchingEngine = findMatchingEngine(selectedQuiz, engines);

        if (matchingEngine !== undefined && matchingEngine.id !== selectedEngineId) {
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

  // Auto-switch to new version when it's created
  React.useEffect(() => {
    if (Result.isSuccess(quizzesResult) && expectedNewVersion !== null) {
      const quizzes = quizzesResult.value;
      const currentQuiz = quizzes.find((q) => q.id === selectedQuizId);

      if (currentQuiz !== undefined) {
        // Handle both regular quizzes and temp quizzes (which have " (Editing)" suffix)
        const baseTitle = currentQuiz.title.replace(" (Editing)", "");

        const newVersionQuiz = quizzes.find(
          (q) =>
            (q.title === baseTitle || q.title === currentQuiz.title) &&
            q.version.semver === expectedNewVersion &&
            q.isTemp === false &&
            q.isPublished === false &&
            q.id !== selectedQuizId, // Don't select the same quiz
        );

        if (newVersionQuiz !== undefined) {
          setSelectedQuizId(newVersionQuiz.id);
          setExpectedNewVersion(null); // Clear the expected version
        }
      }
    }
  }, [quizzesResult, expectedNewVersion, selectedQuizId]);

  // Auto-switch to new temp quiz when it's created
  React.useEffect(() => {
    if (Result.isSuccess(quizzesResult) && expectedTempQuiz !== null) {
      const quizzes = quizzesResult.value;
      const originalQuiz = quizzes.find((q) => q.id === expectedTempQuiz.originalQuizId);

      if (originalQuiz !== undefined) {
        // Find temp quizzes created from this original quiz
        const allTempQuizzes = quizzes.filter(
          (q) =>
            q.isTemp === true &&
            q.title === `${originalQuiz.title} (Editing)` &&
            q.version.semver === originalQuiz.version.semver,
        );

        // Only select temp quizzes that are NEW (not in our existing snapshot)
        const newTempQuizzes = allTempQuizzes.filter(
          (q) => !expectedTempQuiz.existingTempQuizIds.includes(q.id),
        );

        if (newTempQuizzes.length > 0) {
          // Get the newest temp quiz (most recently created based on ID)
          const newestTempQuiz = newTempQuizzes.sort((a, b) => b.id.localeCompare(a.id))[0];
          if (newestTempQuiz !== undefined) {
            setSelectedQuizId(newestTempQuiz.id);
            setExpectedTempQuiz(null); // Clear the expectation
          }
        }
      }
    }
  }, [quizzesResult, expectedTempQuiz, selectedQuizId]);

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

    // Check if we're already working with a temp quiz
    const isWorkingWithTempQuiz = currentQuiz.isTemp === true;
    const hasMatchingTempEngine = currentEngine.isTemp === true;

    if (isWorkingWithTempQuiz && hasMatchingTempEngine) {
      // Already working with temp versions, just update the engine
      updateEngineIdealAnswerOptimistic(currentEngine, rating);
    } else if (isWorkingWithTempQuiz && !hasMatchingTempEngine) {
      // We have a temp quiz but no matching temp engine - this shouldn't happen
      // but let's handle it by just updating the current engine
      updateEngineIdealAnswerOptimistic(currentEngine, rating);
    } else {
      // Need to create temp versions first
      try {
        // 1. Set pending rating to apply after engine switches
        setPendingRating(rating);

        // Get existing temp quizzes for this original quiz BEFORE creating a new one
        const existingTempQuizIds = quizzes
          .filter(
            (q) =>
              q.isTemp === true &&
              q.title === `${currentQuiz.title} (Editing)` &&
              q.version.semver === currentQuiz.version.semver,
          )
          .map((q) => q.id);

        setExpectedTempQuiz({
          originalQuizId: currentQuiz.id,
          existingTempQuizIds,
        }); // Track the original quiz ID and existing temp quiz IDs
        createTempQuiz({ quiz: currentQuiz });

        // The pending rating will be applied by the useEffect when the engine switches
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
  const findMatchingEngine = (
    targetQuiz: Quiz,
    availableEngines: ReadonlyArray<AnalysisEngine>,
  ): AnalysisEngine | undefined => {
    // Simple direct lookup by quizId - this is much more reliable!
    const matchingEngine = availableEngines.find((engine) => engine.quizId === targetQuiz.id);

    if (matchingEngine !== undefined) {
      return matchingEngine;
    }

    return undefined;
  };

  // The currently selected values are now provided by the derived atom

  // Optimistic create temp engine and update

  const handleAddQuestion = () => {
    // TODO: Implement add question functionality
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

  // Handler for updating ideal answers from inspector
  const handleUpdateIdealAnswer = (value: number) => {
    void handleRatingSelect(value);
  };

  // Handler for toggling primary rule status
  const handleTogglePrimaryRule = (isPrimary: boolean) => {
    const currentEngine = engines.find((e) => e.id === selectedEngineId);
    if (currentEngine === undefined || selectedQuestion === undefined) return;

    const artistTypeEndingId = `the-${selectedArtistType.toLowerCase()}-artist`;

    // Create updated engine with modified primary status
    const updatedEndings = currentEngine.endings.map((ending) => {
      if (ending.endingId === artistTypeEndingId) {
        const existingRuleIndex = ending.questionRules.findIndex(
          (rule) => rule.questionId === selectedQuestion.id,
        );

        if (existingRuleIndex >= 0) {
          // Update existing rule
          const updatedRules = [...ending.questionRules];
          const existingRule = updatedRules[existingRuleIndex];
          if (existingRule !== undefined) {
            updatedRules[existingRuleIndex] = {
              ...existingRule,
              isPrimary,
            };
          }
          return {
            ...ending,
            questionRules: updatedRules,
          };
        }

        // Create new rule with primary status
        return {
          ...ending,
          questionRules: [
            ...ending.questionRules,
            {
              questionId: selectedQuestion.id,
              idealAnswers: [],
              isPrimary,
            },
          ],
        };
      }
      return ending;
    });

    const updatedEngine = {
      ...currentEngine,
      endings: updatedEndings,
    };

    // Apply optimistic update
    setEnginesAtom(EngineAction.Upsert({ engine: updatedEngine }));

    // Persist to server
    autoSaveTempEngine({ engine: updatedEngine });
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
        onQuizChange={(quizId) => {
          setSelectedQuizId(quizId);
        }}
        onArtistTypeChange={setSelectedArtistType}
        onClearDraft={handleClearDraft}
        onCreateNewVersion={handleCreateNewVersion}
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

        {/* Right Sidebar - Inspector + Graphs */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={35} className="min-w-[280px]">
          <RightSidebar
            quiz={quiz}
            engines={engines}
            selectedEngineId={selectedEngineId}
            idealAnswers={currentQuestionIdealAnswers}
            onToggleIdealAnswers={() => {
              setShowIdealAnswers(!showIdealAnswers);
            }}
            onTogglePrimaryRule={handleTogglePrimaryRule}
            onUpdateIdealAnswer={handleUpdateIdealAnswer}
            question={selectedQuestion}
            questionIndex={selectedQuestionIndex}
            selectedArtistType={selectedArtistType}
            selectedValues={currentSelectedValues}
            showIdealAnswers={showIdealAnswers}
            totalQuestions={questions.length}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
