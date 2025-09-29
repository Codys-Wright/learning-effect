import { useParams } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";

const n = () => {
  const { responseId: n2 } = useParams({ from: "/admin/responses/$responseId/analysis" });
  return jsxs("div", {
    children: [
      jsx("h2", { className: "text-2xl font-bold mb-4", children: "Response Analysis" }),
      jsxs("p", {
        className: "text-muted-foreground mb-6",
        children: ["Deep dive into the analysis results for response: ", n2],
      }),
      jsx("div", {
        className: "border rounded-lg p-8 text-center",
        children: jsx("p", {
          className: "text-muted-foreground",
          children: "Response analysis content will go here",
        }),
      }),
    ],
  });
};

export { n as component };
//# sourceMappingURL=analysis-DfvOW2wI.mjs.map
