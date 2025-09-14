import { createFileRoute, useParams } from "@tanstack/react-router";
import React from "react";

const AdminResponseDetail: React.FC = () => {
  const { responseId } = useParams({ from: "/admin/responses/$responseId" });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Response Detail</h2>
      <p className="text-muted-foreground mb-6">
        Detailed analysis and breakdown of response: {responseId}
      </p>
      <div className="border rounded-lg p-8 text-center">
        <p className="text-muted-foreground">Response detail content will go here</p>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/admin/responses/$responseId")({
  component: AdminResponseDetail,
});
