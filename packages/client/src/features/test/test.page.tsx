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
    <Card>
      <Card.Title>Add a new Card</Card.Title>
    </Card>
  );
};

const SuccessView: React.FC<{ tests: ReadonlyArray<Test> }> = ({ tests }) => {
  return (
    <main className="flex flex-col gap-2">
      <UpsertTest />
      <Separator />

      <section className="flex gap-2 flex-col">
        {tests.map((test) => (
          <Card key={test.id}>
            <Card.Title>{test.title}</Card.Title>
            <Card.Description>{test.description}</Card.Description>
          </Card>
        ))}
      </section>
    </main>
  );
};

const Retry: React.FC = () => {
  const refresh = useAtomRefresh(testsAtom.remote);
  return (
    <div className="flex flex-col gap-2">
      <p>something went wrong...</p>
      <Button onClick={refresh}>Retry</Button>
    </div>
  );
};

export const TestPage: React.FC = () => {
  const testResult = useAtomValue(testsAtom);
  return (
    <div className="container mx-auto px-4 py-8 max-w-2x1">
      {Result.builder(testResult)
        .onFailure(() => <Retry />)
        .onSuccess((tests) => <SuccessView tests={tests} />)
        .onWaiting((result) => Result.isInitial(result) && result.waiting && <p>Loading...</p>)
        .orNull()}
    </div>
  );
};
