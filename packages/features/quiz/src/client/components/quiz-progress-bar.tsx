import { cn } from "@org/shadcn";
import React from "react";

// 1) QuizProgressBar Component - Displays a visual progress indicator for quiz questions
//    Shows clickable question indicators with progress overlay and category-based colors
//
//    Usage Examples:
//    - Default artist type colors: <QuizProgressBar questions={questions} currentIndex={0} onQuestionClick={handleClick} />
//    - Custom color scheme: <QuizProgressBar questions={questions} currentIndex={0} onQuestionClick={handleClick} categoryColorClass={myColorFunction} />
//
//    Custom Color Function Example:
//    const myColorFunction = (category?: string, colorOn?: boolean) => {
//      if (!colorOn) return "bg-muted";
//      if (category?.includes("math")) return "bg-blue-500/20";
//      if (category?.includes("science")) return "bg-green-500/20";
//      return "bg-gray-500/20";
//    };
type QuizProgressBarProps = {
  // Question data
  questions: Array<{
    id: number;
    category?: string;
  }>;

  // Current state
  currentIndex: number;

  // Callbacks
  onQuestionClick: (index: number) => void;

  // Configuration
  categoryColorClass?: (category?: string, colorOn?: boolean) => string;
  colorOn?: boolean;
};

export const QuizProgressBar: React.FC<QuizProgressBarProps> = ({
  categoryColorClass: providedCategoryColorClass,
  colorOn = true,
  currentIndex,
  onQuestionClick,
  questions,
}) => {
  // Default category color class function (for artist types)
  const defaultCategoryColorClass = (category?: string, colorOnParam?: boolean): string => {
    const isColorOn = colorOnParam ?? colorOn;
    if (!isColorOn) return "bg-muted";
    const key = (category ?? "").toLowerCase();
    if (key.includes("visionary")) return "bg-gradient-to-b from-violet-500/20 to-violet-500/5";
    if (key.includes("consummate")) return "bg-gradient-to-b from-indigo-500/20 to-indigo-500/5";
    if (key.includes("analyzer")) return "bg-gradient-to-b from-rose-500/20 to-rose-500/5";
    if (key.includes("tech")) return "bg-gradient-to-b from-cyan-500/20 to-cyan-500/5";
    if (key.includes("entertainer")) return "bg-gradient-to-b from-orange-500/20 to-orange-500/5";
    if (key.includes("maverick")) return "bg-gradient-to-b from-fuchsia-500/20 to-fuchsia-500/5";
    if (key.includes("dreamer")) return "bg-gradient-to-b from-sky-500/20 to-sky-500/5";
    if (key.includes("feeler")) return "bg-gradient-to-b from-pink-500/20 to-pink-500/5";
    if (key.includes("tortured")) return "bg-gradient-to-b from-red-500/20 to-red-500/5";
    if (key.includes("solo")) return "bg-gradient-to-b from-stone-500/20 to-stone-500/5";
    return "bg-muted";
  };

  // Use provided function or default
  const categoryColorClass = providedCategoryColorClass ?? defaultCategoryColorClass;

  const lightenClassForIndex = (idx: number): string => {
    const step = idx % 5;
    // more subtle steps
    return (
      ["opacity-90", "opacity-85", "opacity-80", "opacity-75", "opacity-70"][step] ?? "opacity-85"
    );
  };

  return (
    <div className="relative w-full">
      <div
        className="grid gap-0 overflow-hidden rounded-md border"
        style={{
          gridTemplateColumns: `repeat(${questions.length}, minmax(0, 1fr))`,
        }}
      >
        {questions.map((q, idx) => (
          <button
            key={q.id}
            type="button"
            title={`Q${idx + 1}${(q.category ?? "").length > 0 ? ` · ${q.category ?? ""}` : ""}`}
            onClick={() => {
              onQuestionClick(idx);
            }}
            className={cn(
              "h-3 focus:outline-none transition-[filter,background-color,opacity] duration-150 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring/40",
              categoryColorClass(q.category, colorOn),
              lightenClassForIndex(idx),
            )}
          />
        ))}
      </div>
      {/* Progress overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="h-full bg-primary/10 rounded-md transition-all duration-200"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};
