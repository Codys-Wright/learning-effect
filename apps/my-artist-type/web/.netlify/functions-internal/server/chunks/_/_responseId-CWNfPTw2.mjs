import { useParams } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";

const n = () => {
  const { responseId: n2 } = useParams({ from: "/admin/responses/$responseId" });
  return jsxs("div", {
    children: [
      jsx("h2", { className: "text-2xl font-bold mb-4", children: "Response Detail" }),
      jsxs("p", {
        className: "text-muted-foreground mb-6",
        children: ["Detailed analysis and breakdown of response: ", n2],
      }),
      jsx("div", {
        className: "border rounded-lg p-8 text-center",
        children: jsx("p", {
          className: "text-muted-foreground",
          children: "Response detail content will go here",
        }),
      }),
    ],
  });
};

export { n as component };
//# sourceMappingURL=_responseId-CWNfPTw2.mjs.map
