import { Button, Card, Separator } from "@/components/ui";
import { makeFormOptions } from "@/lib/forms/make-form-options";
import { Result, useAtomRefresh, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { type Test, UpsertTestPayload } from "@org/domain/test-rpc";
import { useForm } from "@tanstack/react-form";
import { Schema } from "effect";
import React from "react";
import { testsAtom, upsertTestAtom } from "./test.atoms";

const UpsertTest: React.FC = () => {
  const upsert = useAtomSet(upsertTestAtom, {
    mode: "promise",
  });

  const form = useForm({
    ...makeFormOptions({
      defaultValues: {
        title: "",
        description: "",
      },
      schema: UpsertTestPayload,
      validator: "onSubmit",
    }),
    onSubmit: async ({ value }) => {
      const decoded = Schema.decodeSync(UpsertTestPayload)(value);
      await upsert(decoded);
      form.reset();
    },
  });

  return (
    <Card className="shadow-sm bg-card">
      <Card.Header>
        <Card.Title className="text-xl font-semibold text-foreground">Create New Test</Card.Title>
        <Card.Description className="text-muted-foreground">
          Add a new test item to your collection
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <form.Field
            name="title"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium text-foreground">
                  Title
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  placeholder="Enter test title..."
                  className="w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-sm text-destructive-text">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          />

          <form.Field
            name="description"
            children={(field) => (
              <div className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium text-foreground">
                  Description
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  placeholder="Enter test description..."
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical"
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-sm text-destructive-text">{field.state.meta.errors[0]}</p>
                )}
              </div>
            )}
          />

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={!form.state.canSubmit}
              className="px-6 py-2 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-primary-foreground font-medium rounded-md transition-colors"
            >
              {form.state.isSubmitting ? "Creating..." : "Create Test"}
            </Button>
          </div>
        </form>
      </Card.Content>
    </Card>
  );
};

const SuccessView: React.FC<{ tests: ReadonlyArray<Test> }> = ({ tests }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Tests</h1>
        <p className="text-muted-foreground">Manage your test collection</p>
      </div>

      <UpsertTest />

      {tests.length > 0 && (
        <React.Fragment>
          <Separator className="my-6" />

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Your Tests ({tests.length})
            </h2>

            <div className="grid gap-4">
              {tests.map((test) => (
                <Card
                  key={test.id}
                  className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-primary"
                >
                  <Card.Header>
                    <Card.Title className="text-lg font-medium text-foreground">
                      {test.title}
                    </Card.Title>
                  </Card.Header>
                  {test.description && (
                    <Card.Content>
                      <Card.Description className="text-muted-foreground leading-relaxed">
                        {test.description}
                      </Card.Description>
                    </Card.Content>
                  )}
                </Card>
              ))}
            </div>
          </section>
        </React.Fragment>
      )}

      {tests.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-2">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-lg">No tests yet</p>
          <p className="text-muted-foreground/70 text-sm">
            Create your first test using the form above
          </p>
        </div>
      )}
    </div>
  );
};

const LoadingView: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center space-x-3">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
        <p className="text-muted-foreground">Loading tests...</p>
      </div>
    </div>
  );
};

const ErrorView: React.FC = () => {
  const refresh = useAtomRefresh(testsAtom.remote);

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="text-destructive mb-2">
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-foreground mb-1">Something went wrong</p>
        <p className="text-muted-foreground mb-4">We couldn't load your tests. Please try again.</p>
        <Button
          onClick={refresh}
          className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export const TestPage: React.FC = () => {
  const testResult = useAtomValue(testsAtom);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {Result.builder(testResult)
        .onFailure(() => <ErrorView />)
        .onSuccess((tests) => <SuccessView tests={tests} />)
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <LoadingView />)
        .orNull()}
    </div>
  );
};
