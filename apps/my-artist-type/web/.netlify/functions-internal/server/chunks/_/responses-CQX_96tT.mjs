import { useAtomRefresh, useAtomValue } from "@effect-atom/atom-react";
import "@effect/platform";
import "@effect/platform-browser";
import "@effect/platform-browser/BrowserWorker";
import "@effect/platform/HttpBody";
import "@effect/rpc/Rpc";
import "@effect/rpc/RpcClient";
import "@effect/rpc/RpcGroup";
import "@effect/sql";
import "@effect/sql-pg";
import "@faker-js/faker";
import "@tanstack/react-router";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-store";
import "clsx";
import "effect";
import "effect/Boolean";
import "effect/Chunk";
import "effect/Duration";
import "effect/Effect";
import "effect/Either";
import "effect/Function";
import "effect/GlobalValue";
import "effect/HashMap";
import "effect/Layer";
import "effect/Logger";
import "effect/Option";
import "effect/ParseResult";
import "effect/Schema";
import "effect/Stream";
import "effect/String";
import "effect/SubscriptionRef";
import "lucide-react";
import "motion/react";
import "node:async_hooks";
import "react";
import "react-dom";
import "react-resizable-panels";
import { jsx, jsxs } from "react/jsx-runtime";
import "sonner";
import "tailwind-merge";
import { h } from "./nav-user-6r4i62oK.mjs";
import { R as RM } from "./quiz-taker-atoms-BE0xmtWz.mjs";
import { B as ii, C as tf } from "./ssr.mjs";

const o = ({ children: e2 }) =>
    jsx("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: e2 }),
  l = () => {
    const l2 = useAtomValue(RM),
      d = useAtomRefresh(RM);
    return jsx(o, {
      children: jsxs("div", {
        className: "space-y-6",
        children: [
          jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx("h1", {
                    className: "text-3xl font-bold tracking-tight",
                    children: "Quiz Responses",
                  }),
                  jsx("p", {
                    className: "text-muted-foreground",
                    children: "View and manage all quiz responses submitted by users.",
                  }),
                ],
              }),
              jsx(ii, { onClick: d, variant: "outline", children: "Refresh" }),
            ],
          }),
          jsx("div", {
            className: "space-y-4",
            children:
              "Success" === l2._tag
                ? l2.value.length > 0
                  ? l2.value.map((e2) => {
                      var _a, _b;
                      return jsxs(
                        tf,
                        {
                          className: "w-full",
                          children: [
                            jsx(tf.Header, {
                              children: jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  jsxs("div", {
                                    children: [
                                      jsxs(tf.Title, {
                                        className: "text-lg",
                                        children: ["Response ", e2.id.slice(0, 8), "..."],
                                      }),
                                      jsxs(tf.Description, { children: ["Quiz ID: ", e2.quizId] }),
                                    ],
                                  }),
                                  jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      jsxs(h, {
                                        variant: "secondary",
                                        children: [
                                          (_b = (_a = e2.answers) == null ? void 0 : _a.length) !=
                                          null
                                            ? _b
                                            : 0,
                                          " answers",
                                        ],
                                      }),
                                      jsx(h, {
                                        variant: "outline",
                                        children: new Date(
                                          e2.createdAt.epochMillis,
                                        ).toLocaleString(),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            jsx(tf.Content, {
                              children: jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxs("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
                                    children: [
                                      jsxs("div", {
                                        children: [
                                          jsx("span", {
                                            className: "font-medium",
                                            children: "Started:",
                                          }),
                                          " ",
                                          new Date(
                                            e2.sessionMetadata.startedAt.epochMillis,
                                          ).toLocaleString(),
                                        ],
                                      }),
                                      void 0 !== e2.sessionMetadata.completedAt &&
                                        jsxs("div", {
                                          children: [
                                            jsx("span", {
                                              className: "font-medium",
                                              children: "Completed:",
                                            }),
                                            " ",
                                            new Date(
                                              e2.sessionMetadata.completedAt.epochMillis,
                                            ).toLocaleString(),
                                          ],
                                        }),
                                      void 0 !== e2.sessionMetadata.totalDurationMs &&
                                        e2.sessionMetadata.totalDurationMs > 0 &&
                                        jsxs("div", {
                                          children: [
                                            jsx("span", {
                                              className: "font-medium",
                                              children: "Duration:",
                                            }),
                                            " ",
                                            Math.round(e2.sessionMetadata.totalDurationMs / 1e3),
                                            "s",
                                          ],
                                        }),
                                      void 0 !== e2.sessionMetadata.userAgent &&
                                        e2.sessionMetadata.userAgent.length > 0 &&
                                        jsxs("div", {
                                          children: [
                                            jsx("span", {
                                              className: "font-medium",
                                              children: "User Agent:",
                                            }),
                                            " ",
                                            jsxs("span", {
                                              className: "text-xs text-muted-foreground",
                                              children: [
                                                e2.sessionMetadata.userAgent.slice(0, 50),
                                                "...",
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  void 0 !== e2.answers &&
                                    e2.answers.length > 0 &&
                                    jsxs("div", {
                                      children: [
                                        jsx("h4", {
                                          className: "font-medium mb-2",
                                          children: "Answers:",
                                        }),
                                        jsx("div", {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",
                                          children: e2.answers.map((e3, r2) =>
                                            jsxs(
                                              "div",
                                              {
                                                className: "bg-muted p-2 rounded text-sm",
                                                children: [
                                                  jsxs("div", {
                                                    className: "font-medium",
                                                    children: [
                                                      "Q",
                                                      r2 + 1,
                                                      ": ",
                                                      e3.questionId.slice(0, 8),
                                                      "...",
                                                    ],
                                                  }),
                                                  jsxs("div", { children: ["Value: ", e3.value] }),
                                                  void 0 !== e3.answeredAt &&
                                                    jsx("div", {
                                                      className: "text-xs text-muted-foreground",
                                                      children: new Date(
                                                        e3.answeredAt.epochMillis,
                                                      ).toLocaleString(),
                                                    }),
                                                ],
                                              },
                                              r2,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  void 0 !== e2.interactionLogs &&
                                    e2.interactionLogs.length > 0 &&
                                    jsxs("div", {
                                      children: [
                                        jsxs("h4", {
                                          className: "font-medium mb-2",
                                          children: [
                                            "Interactions (",
                                            e2.interactionLogs.length,
                                            "):",
                                          ],
                                        }),
                                        jsx("div", {
                                          className: "flex flex-wrap gap-1",
                                          children: e2.interactionLogs.map((e3, t2) =>
                                            jsxs(
                                              h,
                                              {
                                                variant: "outline",
                                                className: "text-xs",
                                                children: [
                                                  e3.type,
                                                  void 0 !== e3.questionId &&
                                                    e3.questionId.length > 0 &&
                                                    ` (${e3.questionId.slice(0, 4)})`,
                                                ],
                                              },
                                              t2,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          ],
                        },
                        e2.id,
                      );
                    })
                  : jsx(tf, {
                      children: jsx(tf.Content, {
                        className: "flex flex-col items-center justify-center py-12",
                        children: jsxs("div", {
                          className: "text-center",
                          children: [
                            jsx("h3", {
                              className: "text-lg font-medium",
                              children: "No responses found",
                            }),
                            jsx("p", {
                              className: "text-muted-foreground",
                              children: "No quiz responses have been submitted yet.",
                            }),
                          ],
                        }),
                      }),
                    })
                : jsx(tf, {
                    children: jsx(tf.Content, {
                      className: "flex flex-col items-center justify-center py-12",
                      children: jsxs("div", {
                        className: "text-center",
                        children: [
                          jsx("h3", {
                            className: "text-lg font-medium",
                            children: "Loading responses...",
                          }),
                          jsx("p", {
                            className: "text-muted-foreground",
                            children: "Please wait while we fetch the responses.",
                          }),
                        ],
                      }),
                    }),
                  }),
          }),
        ],
      }),
    });
  };

export { l as component };
//# sourceMappingURL=responses-CQX_96tT.mjs.map
