import { Button, Separator } from "@/components/ui";
import { FieldInput, FieldTextarea } from "@/components/ui/form";
import {
  deleteExampleAtom,
  examplesAtom,
  upsertExampleAtom,
} from "@/features/example/examples-atoms";
import { makeFormOptions } from "@/lib/forms/make-form-options";
import { Result, useAtom, useAtomRefresh, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { UpsertExamplePayload, type Example } from "@org/domain/example-rpc";
import { useForm } from "@tanstack/react-form";
import { Schema } from "effect";
import { TrashIcon } from "lucide-react";
import React from "react";

// 1) UpsertExample Component - Handles creating new examples
//    This form allows users to create new examples with name, description, version, and metadata
const UpsertExample: React.FC = () => {
  // Get the upsert function from our examples atoms with promise mode for async operations
  const upsert = useAtomSet(upsertExampleAtom, {
    mode: "promise",
  });

  // Set up the form using TanStack Form with our domain schema validation
  const form = useForm({
    // Use makeFormOptions to integrate Effect Schema validation with TanStack Form
    ...makeFormOptions({
      defaultValues: {
        name: "",
        description: "",
        version: "1.0.0", // Default to semantic version 1.0.0 for new examples
        metadata: undefined, // Start with null metadata (optional field)
      },
      schema: UpsertExamplePayload, // Use our domain schema for validation
      validator: "onSubmit", // Only validate when form is submitted
    }),
    // Handle form submission with Effect-based async operation
    onSubmit: async ({ value }) => {
      // Decode the form values using our schema to ensure type safety
      const decoded = Schema.decodeSync(UpsertExamplePayload)(value);
      // Call the upsert atom to create/update the example
      await upsert(decoded);
      // Reset form to initial state after successful submission
      form.reset();
    },
  });

  return (
    <section className="bg-card p-6 rounded-lg border border-border shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-4">Add New Example</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          // Use void to explicitly indicate we're not awaiting the form submission
          void form.handleSubmit();
        }}
        className="space-y-4"
      >
        {/* Name field - Required input for example name */}
        <form.Field name="name">
          {(fieldApi) => (
            <FieldInput
              name={fieldApi.name}
              label="Name"
              value={fieldApi.state.value}
              onChange={(event) => {
                fieldApi.handleChange(event.currentTarget.value);
              }}
            />
          )}
        </form.Field>

        {/* Description field - Required textarea for example description */}
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

        {/* Submit button with loading state management */}
        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <Button type="submit" loading={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Save Changes"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </section>
  );
};

// 2) ExampleItem Component - Displays a single example with delete functionality
//    Shows example details and provides a delete button with loading state
const ExampleItem: React.FC<{ example: Example }> = ({ example }) => {
  // Get delete function with promiseExit mode to handle loading states and errors
  const [delState, del] = useAtom(deleteExampleAtom, { mode: "promiseExit" });

  // Delete handler that calls the delete atom with the example ID
  const handleDelete = () => {
    void del(example.id);
  };

  return (
    <article className="bg-card p-4 rounded-lg border border-border hover:bg-background-secondary transition-colors">
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            {/* Example name as the main title */}
            <h3 className="font-medium text-foreground">{example.name}</h3>
            {/* Version badge to show semantic version */}
            <span className="text-xs text-muted-foreground">v{example.version}</span>
          </div>
          {/* Delete button with loading state from the atom */}
          <Button variant="ghost" size="icon" onClick={handleDelete} loading={delState.waiting}>
            <TrashIcon className="size-4" />
            <span className="sr-only">Delete {example.name}</span>
          </Button>
        </div>

        {/* Example description in a code-like container */}
        <div className="bg-background-secondary p-3 rounded-md border border-border">
          <p className="text-sm text-foreground whitespace-pre-wrap">{example.description}</p>
        </div>

        {/* Metadata display - only show if metadata exists */}
        {example.metadata && (
          <div className="mt-2">
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Metadata</h4>
            <div className="bg-background-tertiary p-2 rounded-md border border-border">
              {/* Display tags if they exist */}
              {example.metadata.tags && example.metadata.tags.length > 0 && (
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground">Tags: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {example.metadata.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Display custom fields if they exist */}
              {example.metadata.customFields && (
                <div>
                  <span className="text-xs text-muted-foreground">Custom Fields: </span>
                  <pre className="text-xs text-foreground mt-1 overflow-x-auto">
                    {JSON.stringify(example.metadata.customFields, null, 2)}
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

// 3) SuccessView Component - Main content when examples load successfully
//    Displays the form to create new examples and lists all existing examples
const SuccessView: React.FC<{ examples: ReadonlyArray<Example> }> = ({ examples }) => {
  return (
    <main className="flex flex-col gap-2">
      {/* Form to create new examples */}
      <UpsertExample />

      {/* Visual separator between form and list */}
      <Separator />

      {/* List of all examples */}
      <section className="flex flex-col gap-2">
        {examples.map((example) => (
          <ExampleItem key={example.id} example={example} />
        ))}
      </section>
    </main>
  );
};

// 4) ErrorView Component - Displays when data loading fails
//    Provides a retry mechanism to attempt loading examples again
const ErrorView: React.FC = () => {
  // Get refresh function to retry loading examples from the remote source
  const refresh = useAtomRefresh(examplesAtom.remote);

  return (
    <div className="flex flex-col gap-2">
      <p>Something went wrong...</p>
      <Button onClick={refresh}>Retry</Button>
    </div>
  );
};

// 5) Main ExamplePage Component - The page container that handles different states
//    Uses Result.builder pattern to handle loading, success, and error states
export const ExamplePage: React.FC = () => {
  // Get the current state of examples (loading, success, or error)
  const examplesResult = useAtomValue(examplesAtom);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Result builder pattern handles all possible states of the examples atom */}
      {Result.builder(examplesResult)
        // Handle error state - show retry option
        .onFailure(() => <ErrorView />)
        // Handle success state - show examples with create form
        .onSuccess((examples) => <SuccessView examples={examples} />)
        // Handle loading state - show loading message for initial loads
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <p>Loading...</p>)
        // If none of the above conditions match, show nothing
        .orNull()}
    </div>
  );
};

// Component Architecture Summary:
// 1. UpsertExample - Form component for creating new examples with validation
// 2. ExampleItem - Display component for individual examples with delete functionality
// 3. SuccessView - Layout component that combines form and example list
// 4. ErrorView - Error handling component with retry mechanism
// 5. ExamplePage - Main container component with state management using Result pattern
//
// The page follows the same pattern as root.page.tsx but is adapted for the Example domain:
// - Uses examplesAtom instead of stylesAtom
// - Handles Example entities instead of Style entities
// - Displays metadata information unique to examples
// - Manages semantic versioning for examples
// - Provides appropriate form fields for example creation
