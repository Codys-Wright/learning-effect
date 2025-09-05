import { Button, Card, cn } from "@ui/shadcn";
import React from "react";

// 1) QuestionCard Component - Displays a single question with rating input and navigation
//    Receives all data and callbacks as props to remain dumb and testable
type QuestionCardProps = {
  // Question data
  content?: string;
  title?: string;
  minLabel?: string;
  maxLabel?: string;

  // Rating configuration
  min?: number;
  max?: number;

  // Current state
  currentValue: number | undefined;

  // Callbacks
  onRatingSelect: (rating: number) => void;
  onBack?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;

  // Navigation state
  canGoBack?: boolean;
  canGoNext?: boolean;
  isLastQuestion?: boolean;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  canGoBack = true,
  canGoNext = true,
  content,
  currentValue,
  isLastQuestion = false,
  max = 10,
  maxLabel = "Max",
  min = 0,
  minLabel = "Min",
  onBack,
  onNext,
  onRatingSelect,
  onSubmit,
  title,
}) => {
  // Generate rating choices from min to max (inclusive)
  const choices = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const handleRatingClick = (rating: number) => {
    onRatingSelect(rating);
    // Auto-advance after a short delay (like the original)
    if (canGoNext && !isLastQuestion) {
      setTimeout(() => onNext?.(), 120);
    }
  };

  return (
    <Card className="gap-0 w-full max-w-3xl animate-in fade-in-0 zoom-in-95 duration-200 shadow-2xl border border-border/60 bg-card ring-1 ring-ring/10">
      <Card.Header className="p-4 min-h-36 flex items-center justify-center text-center">
        <Card.Title className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-center">
          {title ?? content}
        </Card.Title>
      </Card.Header>
      <Card.Content className="flex flex-col gap-6">
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-11 gap-2">
            {choices.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  handleRatingClick(n);
                }}
                className={cn(
                  "rounded-md border p-3 text-center text-sm transition-all",
                  currentValue === n
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "hover:bg-accent hover:scale-[1.01]",
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          <Button type="button" variant="secondary" disabled={!canGoBack} onClick={onBack}>
            Back
          </Button>
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <span>{minLabel}</span>
            <span className="text-muted-foreground/60">/</span>
            <span>{maxLabel}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            {canGoNext && !isLastQuestion ? (
              <Button type="button" onClick={onNext}>
                Next
              </Button>
            ) : (
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                type="button"
                onClick={onSubmit}
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
