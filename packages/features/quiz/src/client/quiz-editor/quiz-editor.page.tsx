import { Result, useAtomRefresh, useAtomValue } from "@effect-atom/atom-react";
import { type Question, type Quiz } from "@features/quiz/domain";
import { Button, Card, DropdownMenu, Separator } from "@org/shadcn";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { quizzesAtom } from "../quizzes-atoms.js";

const QuestionsDisplay: React.FC<{ questions: ReadonlyArray<Question> }> = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <Card>
        <Card.Content className="pt-6">
          <p className="text-muted-foreground">No questions found for this quiz.</p>
        </Card.Content>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <Card key={question.id}>
          <Card.Header className="pb-3">
            <Card.Title className="text-lg">
              {index + 1}. {question.title}
            </Card.Title>
            {(question.subtitle ?? "").length > 0 && (
              <p className="text-sm text-muted-foreground">{question.subtitle}</p>
            )}
          </Card.Header>
          <Card.Content>
            {(question.description ?? "").length > 0 && (
              <p className="text-sm text-muted-foreground mb-4">{question.description}</p>
            )}
            <div className="bg-muted p-3 rounded-md">
              <p className="text-xs font-medium text-muted-foreground mb-2">Question Type</p>
              <p className="text-sm capitalize">{question.data.type.replace("-", " ")}</p>
              {question.data.type === "rating" && (
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground">
                    Range: {question.data.minRating} - {question.data.maxRating}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Labels: {question.data.minLabel} / {question.data.maxLabel}
                  </p>
                </div>
              )}
              {question.data.type === "multiple-choice" && (
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Choices:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {question.data.choices.map((choice, idx) => (
                      <li key={idx}>• {choice}</li>
                    ))}
                  </ul>
                </div>
              )}
              {question.data.type === "text" && (question.data.placeholder ?? "").length > 0 && (
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground">
                    Placeholder: {question.data.placeholder}
                  </p>
                </div>
              )}
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

const SuccessView: React.FC<{ quizzes: ReadonlyArray<Quiz> }> = ({ quizzes }) => {
  const [selectedQuizId, setSelectedQuizId] = useState<string>("");

  const selectedQuiz = quizzes.find((quiz) => quiz.id === selectedQuizId);

  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Quiz Editor</h1>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Select a Quiz</label>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {selectedQuiz?.title ?? "Choose a quiz to view questions..."}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)]">
              <DropdownMenu.Label>Available Quizzes</DropdownMenu.Label>
              <DropdownMenu.Separator />
              {quizzes.map((quiz) => (
                <DropdownMenu.Item
                  key={quiz.id}
                  onClick={() => {
                    setSelectedQuizId(quiz.id);
                  }}
                  className="flex items-center justify-between"
                >
                  <span>{quiz.title}</span>
                  {selectedQuizId === quiz.id && <CheckIcon className="h-4 w-4 text-primary" />}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>

      <Separator />

      {selectedQuiz?.questions && selectedQuiz.questions.length > 0 ? (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Questions for "{selectedQuiz.title}"</h2>
            <span className="text-sm text-muted-foreground">
              {selectedQuiz.questions.length} question
              {selectedQuiz.questions.length !== 1 ? "s" : ""}
            </span>
          </div>
          <QuestionsDisplay questions={selectedQuiz.questions} />
        </div>
      ) : selectedQuizId !== "" ? (
        <Card>
          <Card.Content className="pt-6">
            <p className="text-muted-foreground">No questions found for the selected quiz.</p>
          </Card.Content>
        </Card>
      ) : (
        <Card>
          <Card.Content className="pt-6">
            <p className="text-muted-foreground">Select a quiz above to view its questions.</p>
          </Card.Content>
        </Card>
      )}
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

export const QuizEditorPage: React.FC = () => {
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
