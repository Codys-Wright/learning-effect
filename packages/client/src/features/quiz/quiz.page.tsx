import { Button, Separator } from "@/components/ui";
import { FieldInput, FieldTextarea } from "@/components/ui/form";
import { deleteQuizAtom, quizzesAtom, upsertQuizAtom } from "@/features/quiz/quizzes-atoms";
import { makeFormOptions } from "@/lib/forms/make-form-options";
import { Result, useAtom, useAtomRefresh, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { UpsertQuizPayload, type Quiz } from "@org/domain/quiz/quiz-rpc";
import { type UpsertQuestionPayload } from "@org/domain/quiz/types/question";
import { useForm } from "@tanstack/react-form";
import { Schema } from "effect";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import React from "react";

// 1) QuestionBuilder Component - Handles creating and managing questions
const QuestionBuilder: React.FC<{
  onQuestionsChange: (questions: Array<UpsertQuestionPayload>) => void;
  questions: Array<UpsertQuestionPayload>;
}> = ({ questions, onQuestionsChange }) => {
  const addQuestion = () => {
    const newQuestion: UpsertQuestionPayload = {
      title: "",
      data: { type: "text" as const },
    };
    onQuestionsChange([...questions, newQuestion]);
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    onQuestionsChange(updatedQuestions);
  };

  const updateQuestion = (index: number, updates: Partial<UpsertQuestionPayload>) => {
    const updatedQuestions = questions.map((q, i) => (i === index ? { ...q, ...updates } : q));
    onQuestionsChange(updatedQuestions);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Questions</h3>
        <Button type="button" variant="outline" size="sm" onClick={addQuestion}>
          <PlusIcon className="size-4 mr-2" />
          Add Question
        </Button>
      </div>

      {questions.length === 0 && (
        <div className="text-center py-4 text-muted-foreground text-sm">
          No questions added yet. Click "Add Question" to get started.
        </div>
      )}

      {questions.map((question, index) => (
        <div key={`question-${index}`} className="border border-border rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
              Question {index + 1}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                removeQuestion(index);
              }}
            >
              <MinusIcon className="size-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Question Title</label>
              <input
                type="text"
                value={question.title}
                onChange={(e) => {
                  updateQuestion(index, { title: e.target.value });
                }}
                placeholder="Enter question title..."
                className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground">Question Type</label>
              <select
                value={question.data.type}
                onChange={(e) => {
                  const type = e.target.value as "text" | "email" | "rating" | "multiple-choice";
                  let data: { type: string; [key: string]: unknown } = { type };

                  if (type === "rating") {
                    data = {
                      type,
                      minRating: 1,
                      maxRating: 5,
                      minLabel: "Poor",
                      maxLabel: "Excellent",
                    };
                  } else if (type === "multiple-choice") {
                    data = { type, choices: ["Option 1", "Option 2"] };
                  }

                  updateQuestion(index, { data });
                }}
                className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
              >
                <option value="text">Text Input</option>
                <option value="email">Email Input</option>
                <option value="rating">Rating Scale</option>
                <option value="multiple-choice">Multiple Choice</option>
              </select>
            </div>

            {/* Question Type Specific Fields */}
            {question.data.type === "text" && (
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Placeholder Text
                </label>
                <input
                  type="text"
                  value={question.data.placeholder || ""}
                  onChange={(e) => {
                    updateQuestion(index, {
                      data: { ...question.data, placeholder: e.target.value || undefined },
                    });
                  }}
                  placeholder="Enter placeholder text..."
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
                />
              </div>
            )}

            {question.data.type === "rating" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Min Rating</label>
                  <input
                    type="number"
                    value={question.data.minRating || 1}
                    onChange={(e) => {
                      updateQuestion(index, {
                        data: {
                          ...question.data,
                          minRating: parseInt(e.target.value) || 1,
                        },
                      });
                    }}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Max Rating</label>
                  <input
                    type="number"
                    value={question.data.maxRating || 5}
                    onChange={(e) => {
                      updateQuestion(index, {
                        data: {
                          ...question.data,
                          maxRating: parseInt(e.target.value) || 5,
                        },
                      });
                    }}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Min Label</label>
                  <input
                    type="text"
                    value={question.data.minLabel || ""}
                    onChange={(e) => {
                      updateQuestion(index, {
                        data: { ...question.data, minLabel: e.target.value },
                      });
                    }}
                    placeholder="e.g., Poor"
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Max Label</label>
                  <input
                    type="text"
                    value={question.data.maxLabel || ""}
                    onChange={(e) => {
                      updateQuestion(index, {
                        data: { ...question.data, maxLabel: e.target.value },
                      });
                    }}
                    placeholder="e.g., Excellent"
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                </div>
              </div>
            )}

            {question.data.type === "multiple-choice" && (
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Choices (one per line)
                </label>
                <textarea
                  value={question.data.choices?.join("\n") || ""}
                  onChange={(e) => {
                    const choices = e.target.value
                      .split("\n")
                      .filter((choice) => choice.trim() !== "");
                    updateQuestion(index, {
                      data: { ...question.data, choices },
                    });
                  }}
                  placeholder="Option 1&#10;Option 2&#10;Option 3"
                  rows={3}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm resize-none"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// 2) UpsertQuiz Component - Handles creating new quizzes
//    This form allows users to create new quizzes with title, subtitle, description, and questions
const UpsertQuiz: React.FC = () => {
  // Get the upsert function from our quizzes atoms with promise mode for async operations
  const upsert = useAtomSet(upsertQuizAtom, {
    mode: "promise",
  });

  // Set up the form using TanStack Form with our domain schema validation
  const form = useForm({
    // Use makeFormOptions to integrate Effect Schema validation with TanStack Form
    ...makeFormOptions({
      defaultValues: {
        title: "",
        subtitle: "",
        description: "",
        version: "1.0.0", // Default to semantic version 1.0.0 for new quizzes
        questions: [], // Start with empty questions array
        metadata: undefined, // Start with null metadata (optional field)
      },
      schema: UpsertQuizPayload, // Use our domain schema for validation
      validator: "onSubmit", // Only validate when form is submitted
    }),
    // Handle form submission with Effect-based async operation
    onSubmit: async ({ value }) => {
      // Decode the form values using our schema to ensure type safety
      const decoded = Schema.decodeSync(UpsertQuizPayload)(value);
      // Call the upsert atom to create/update the quiz
      await upsert(decoded);
      // Reset form to initial state after successful submission
      form.reset();
    },
  });

  return (
    <section className="bg-card p-6 rounded-lg border border-border shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-4">Add New Quiz</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          // Use void to explicitly indicate we're not awaiting the form submission
          void form.handleSubmit();
        }}
        className="space-y-4"
      >
        {/* Title field - Required input for quiz title */}
        <form.Field name="title">
          {(fieldApi) => (
            <FieldInput
              name={fieldApi.name}
              label="Title"
              value={fieldApi.state.value}
              onChange={(event) => {
                fieldApi.handleChange(event.currentTarget.value);
              }}
              placeholder="e.g., Customer Feedback Survey"
            />
          )}
        </form.Field>

        {/* Subtitle field - Required input for quiz subtitle */}
        <form.Field name="subtitle">
          {(fieldApi) => (
            <FieldInput
              name={fieldApi.name}
              label="Subtitle"
              value={fieldApi.state.value}
              onChange={(event) => {
                fieldApi.handleChange(event.currentTarget.value);
              }}
              placeholder="e.g., Help us improve our service"
            />
          )}
        </form.Field>

        {/* Description field - Required textarea for quiz description */}
        <form.Field name="description">
          {(fieldApi) => (
            <FieldTextarea
              name={fieldApi.name}
              label="Description"
              value={fieldApi.state.value}
              onChange={(event) => {
                fieldApi.handleChange(event.currentTarget.value);
              }}
              rows={3}
              placeholder="Provide a detailed description of your quiz..."
            />
          )}
        </form.Field>

        {/* Version field - Semantic versioning input */}
        <form.Field name="version">
          {(fieldApi) => (
            <FieldInput
              name={fieldApi.name}
              label="Version"
              value={fieldApi.state.value}
              onChange={(event) => {
                fieldApi.handleChange(event.currentTarget.value);
              }}
              placeholder="e.g., 1.0.0"
            />
          )}
        </form.Field>

        {/* Questions section */}
        <form.Field name="questions">
          {(fieldApi) => (
            <QuestionBuilder
              questions={fieldApi.state.value ? [...fieldApi.state.value] : []}
              onQuestionsChange={(questions) => {
                fieldApi.handleChange(questions);
              }}
            />
          )}
        </form.Field>

        {/* Submit button with loading state management */}
        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <Button type="submit" loading={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Create Quiz"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </section>
  );
};

// 3) QuizItem Component - Displays a single quiz with delete functionality
//    Shows quiz details and provides a delete button with loading state
const QuizItem: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  // Get delete function with promiseExit mode to handle loading states and errors
  const [delState, del] = useAtom(deleteQuizAtom, { mode: "promiseExit" });

  // Delete handler that calls the delete atom with the quiz ID
  const handleDelete = () => {
    void del(quiz.id);
  };

  return (
    <article className="bg-card p-4 rounded-lg border border-border hover:bg-background-secondary transition-colors">
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            {/* Quiz title as the main title */}
            <h3 className="font-medium text-foreground">{quiz.title}</h3>
            {/* Version and slug badges */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">v{quiz.version}</span>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                /{quiz.slug}
              </span>
            </div>
          </div>
          {/* Delete button with loading state from the atom */}
          <Button variant="ghost" size="icon" onClick={handleDelete} loading={delState.waiting}>
            <TrashIcon className="size-4" />
            <span className="sr-only">Delete {quiz.title}</span>
          </Button>
        </div>

        {/* Quiz description in a code-like container */}
        <div className="bg-background-secondary p-3 rounded-md border border-border">
          <p className="text-sm text-foreground whitespace-pre-wrap">{quiz.description}</p>
        </div>

        {/* Metadata display - only show if metadata exists */}
        {quiz.metadata && (
          <div className="mt-2">
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Metadata</h4>
            <div className="bg-background-tertiary p-2 rounded-md border border-border">
              {/* Display tags if they exist */}
              {quiz.metadata.tags && quiz.metadata.tags.length > 0 && (
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground">Tags: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {quiz.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Display custom fields if they exist */}
              {quiz.metadata.customFields && (
                <div>
                  <span className="text-xs text-muted-foreground">Custom Fields: </span>
                  <pre className="text-xs text-foreground mt-1 overflow-x-auto">
                    {JSON.stringify(quiz.metadata.customFields, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </article>
  );
};

// 4) SuccessView Component - Main content when quizzes load successfully
//    Displays the form to create new quizzes and lists all existing quizzes
const SuccessView: React.FC<{ quizzes: ReadonlyArray<Quiz> }> = ({ quizzes }) => {
  return (
    <main className="flex flex-col gap-2">
      {/* Form to create new quizzes */}
      <UpsertQuiz />

      {/* Visual separator between form and list */}
      <Separator />

      {/* List of all quizzes */}
      <section className="flex flex-col gap-2">
        {quizzes.map((quiz) => (
          <QuizItem key={quiz.id} quiz={quiz} />
        ))}
      </section>
    </main>
  );
};

// 5) ErrorView Component - Displays when data loading fails
//    Provides a retry mechanism to attempt loading quizzes again
const ErrorView: React.FC = () => {
  // Get refresh function to retry loading quizzes from the remote source
  const refresh = useAtomRefresh(quizzesAtom.remote);

  return (
    <div className="flex flex-col gap-2">
      <p>Something went wrong...</p>
      <Button onClick={refresh}>Retry</Button>
    </div>
  );
};

// 6) Main QuizPage Component - The page container that handles different states
//    Uses Result.builder pattern to handle loading, success, and error states
export const QuizPage: React.FC = () => {
  // Get the current state of quizzes (loading, success, or error)
  const quizzesResult = useAtomValue(quizzesAtom);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Result builder pattern handles all possible states of the quizzes atom */}
      {Result.builder(quizzesResult)
        // Handle error state - show retry option
        .onFailure(() => <ErrorView />)
        // Handle success state - show quizzes with create form
        .onSuccess((quizzes) => <SuccessView quizzes={quizzes} />)
        // Handle loading state - show loading message for initial loads
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <p>Loading...</p>)
        // If none of the above conditions match, show nothing
        .orNull()}
    </div>
  );
};

// Component Architecture Summary:
// 1. UpsertQuiz - Form component for creating new quizzes with validation
// 2. QuestionItem - Display component for individual questions within quizzes
// 3. QuizItem - Display component for individual quizzes with delete functionality
// 4. SuccessView - Layout component that combines form and quiz list
// 5. ErrorView - Error handling component with retry mechanism
// 6. QuizPage - Main container component with state management using Result pattern
//
// The page follows the same pattern as example.page.tsx but is adapted for the Quiz domain:
// - Uses quizzesAtom instead of examplesAtom
// - Handles Quiz entities with their nested questions
// - Displays question types and data appropriately
// - Shows quiz metadata, version, and slug information
// - Provides comprehensive quiz management interface
