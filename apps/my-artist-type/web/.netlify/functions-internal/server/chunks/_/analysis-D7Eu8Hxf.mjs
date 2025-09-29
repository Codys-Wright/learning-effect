import { Result, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
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
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import "motion/react";
import "node:async_hooks";
import { useState } from "react";
import "react-dom";
import "react-resizable-panels";
import { jsx, jsxs } from "react/jsx-runtime";
import "sonner";
import "tailwind-merge";
import { h } from "./nav-user-6r4i62oK.mjs";
import {
  H as HM,
  I as IM,
  c as JM,
  N as NM,
  R as RM,
  T as TM,
  _ as _M,
  v as vM,
} from "./quiz-taker-atoms-BE0xmtWz.mjs";
import { D as SR, B as ii, C as tf } from "./ssr.mjs";

const w = (i2) => {
    const s2 = (() => {
      const i3 = {};
      return (
        Object.keys(vM).forEach((e2) => {
          const s3 = e2.toLowerCase().replace(/\s+/g, "-");
          i3[s3] = e2;
        }),
        i3
      );
    })();
    return i2.endingResults.map((i3) => {
      const t2 = s2[i3.endingId];
      return {
        artistType: (t2 ? vM[t2] : i3.endingId) || i3.endingId,
        percentage: i3.percentage,
        points: i3.points,
        fullName: t2 || i3.endingId,
        databaseId: i3.endingId,
      };
    });
  },
  y = ({ children: e2 }) =>
    jsx("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: e2 }),
  S = () => {
    const [e2, y2] = useState(""),
      [S2, b2] = useState(""),
      A2 = useAtomValue(NM),
      C = useAtomValue(TM),
      k = useAtomValue(RM),
      R = useAtomValue(JM),
      I = useAtomSet(IM),
      D = useAtomSet(_M);
    return jsxs("main", {
      className: "flex flex-col gap-6",
      children: [
        jsx("div", {
          className: "flex items-center justify-between",
          children: jsxs("div", {
            children: [
              jsx("h1", {
                className: "text-3xl font-bold tracking-tight",
                children: "Analysis Results",
              }),
              jsx("p", {
                className: "text-muted-foreground",
                children: "View and manage analysis results for quiz responses.",
              }),
            ],
          }),
        }),
        jsxs(tf, {
          children: [
            jsxs(tf.Header, {
              children: [
                jsx(tf.Title, { children: "Analysis Controls" }),
                jsx(tf.Description, {
                  children: "Select a response and analysis engine to view analysis results",
                }),
              ],
            }),
            jsxs(tf.Content, {
              children: [
                jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    jsxs("div", {
                      children: [
                        jsx("label", { className: "text-sm font-medium", children: "Response" }),
                        jsxs(SR, {
                          children: [
                            jsx(SR.Trigger, {
                              asChild: true,
                              children: jsxs(ii, {
                                variant: "outline",
                                className: "w-full mt-1 justify-between",
                                disabled: !Result.isSuccess(k),
                                children: [
                                  Result.isSuccess(k) && "" !== e2
                                    ? (() => {
                                        const i2 = k.value.find((i3) => i3.id === e2);
                                        return void 0 !== i2
                                          ? `${i2.id.slice(0, 8)}... - ${new Date(i2.createdAt.epochMillis).toLocaleDateString()}`
                                          : "Select a response...";
                                      })()
                                    : Result.isFailure(k)
                                      ? "Failed to load responses"
                                      : "Loading responses...",
                                  jsx(ChevronDownIcon, { className: "ml-2 h-4 w-4" }),
                                ],
                              }),
                            }),
                            jsxs(SR.Content, {
                              className: "w-full min-w-[var(--radix-dropdown-menu-trigger-width)]",
                              children: [
                                jsx(SR.Label, { children: "Available Responses" }),
                                jsx(SR.Separator, {}),
                                Result.isSuccess(k) &&
                                  k.value.map((i2) =>
                                    jsxs(
                                      SR.Item,
                                      {
                                        onClick: () => {
                                          y2(i2.id);
                                        },
                                        className: "flex items-center justify-between",
                                        children: [
                                          jsxs("span", {
                                            children: [
                                              i2.id.slice(0, 8),
                                              "... -",
                                              " ",
                                              new Date(
                                                i2.createdAt.epochMillis,
                                              ).toLocaleDateString(),
                                            ],
                                          }),
                                          e2 === i2.id &&
                                            jsx(CheckIcon, { className: "h-4 w-4 text-primary" }),
                                        ],
                                      },
                                      i2.id,
                                    ),
                                  ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxs("div", {
                      children: [
                        jsx("label", {
                          className: "text-sm font-medium",
                          children: "Analysis Engine",
                        }),
                        jsxs(SR, {
                          children: [
                            jsx(SR.Trigger, {
                              asChild: true,
                              children: jsxs(ii, {
                                variant: "outline",
                                className: "w-full mt-1 justify-between",
                                disabled: !Result.isSuccess(R),
                                children: [
                                  Result.isSuccess(R) && "" !== S2
                                    ? (() => {
                                        const e3 = R.value.find((e4) => e4.id === S2);
                                        return void 0 !== e3
                                          ? `${e3.name} v${e3.version}`
                                          : "Select an engine...";
                                      })()
                                    : Result.isFailure(R)
                                      ? "Failed to load engines"
                                      : "Loading engines...",
                                  jsx(ChevronDownIcon, { className: "ml-2 h-4 w-4" }),
                                ],
                              }),
                            }),
                            jsxs(SR.Content, {
                              className: "w-full min-w-[var(--radix-dropdown-menu-trigger-width)]",
                              children: [
                                jsx(SR.Label, { children: "Available Analysis Engines" }),
                                jsx(SR.Separator, {}),
                                Result.isSuccess(R) &&
                                  R.value.map((e3) =>
                                    jsxs(
                                      SR.Item,
                                      {
                                        onClick: () => {
                                          b2(e3.id);
                                        },
                                        className: "flex items-center justify-between",
                                        children: [
                                          jsxs("span", {
                                            children: [e3.name, " v", e3.version.semver],
                                          }),
                                          S2 === e3.id &&
                                            jsx(CheckIcon, { className: "h-4 w-4 text-primary" }),
                                        ],
                                      },
                                      e3.id,
                                    ),
                                  ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs("div", {
                  className: "flex gap-2 mt-4",
                  children: [
                    jsx(ii, {
                      variant: "outline",
                      disabled:
                        "" === e2 || "" === S2 || !Result.isSuccess(k) || !Result.isSuccess(R),
                      onClick: () => {
                        "" !== e2 && "" !== S2 && I({ responseId: e2, engineId: S2 });
                      },
                      children: "Get Analysis",
                    }),
                    jsx(ii, {
                      variant: "outline",
                      disabled: "" === S2 || !Result.isSuccess(R),
                      onClick: () => {
                        "" !== S2 && D({ engineId: S2 });
                      },
                      children: "Get Summary",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        Result.isSuccess(C) &&
          C.value.length > 0 &&
          jsxs("div", {
            className: "space-y-6",
            children: [
              jsx("h2", { className: "text-2xl font-semibold", children: "All Analysis Results" }),
              jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6",
                children: C.value.map((e3) => {
                  const i2 = w(e3);
                  return jsxs(
                    "div",
                    {
                      className: "space-y-4",
                      children: [
                        jsxs(tf, {
                          children: [
                            jsx(tf.Header, {
                              children: jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  jsxs("div", {
                                    children: [
                                      jsxs(tf.Title, {
                                        className: "text-lg",
                                        children: ["Analysis ", e3.id.slice(0, 8), "..."],
                                      }),
                                      jsxs(tf.Description, {
                                        children: [
                                          "Engine: ",
                                          e3.engineId,
                                          " v",
                                          e3.engineVersion.semver,
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      jsx(h, {
                                        variant: "secondary",
                                        children: new Date(
                                          e3.analyzedAt.epochMillis,
                                        ).toLocaleString(),
                                      }),
                                      jsx(h, {
                                        variant: null === e3.deletedAt ? "default" : "destructive",
                                        children: null === e3.deletedAt ? "Active" : "Deleted",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            jsx(tf.Content, {
                              children: jsxs("div", {
                                className: "grid grid-cols-1 gap-2 text-sm",
                                children: [
                                  jsxs("div", {
                                    children: [
                                      jsx("span", {
                                        className: "font-medium",
                                        children: "Response:",
                                      }),
                                      " ",
                                      e3.responseId.slice(0, 8),
                                      "...",
                                    ],
                                  }),
                                  jsxs("div", {
                                    children: [
                                      jsx("span", {
                                        className: "font-medium",
                                        children: "Endings:",
                                      }),
                                      " ",
                                      e3.endingResults.length,
                                    ],
                                  }),
                                  jsxs("div", {
                                    children: [
                                      jsx("span", {
                                        className: "font-medium",
                                        children: "Created:",
                                      }),
                                      " ",
                                      new Date(e3.createdAt.epochMillis).toLocaleString(),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        jsx(HM, {
                          data: i2,
                          showBarChart: true,
                          barChartHeight: "h-48",
                          barChartMaxItems: 10,
                          className: "w-full",
                        }),
                      ],
                    },
                    e3.id,
                  );
                }),
              }),
            ],
          }),
        Result.isSuccess(C) &&
          0 === C.value.length &&
          jsxs("div", {
            className: "space-y-4",
            children: [
              jsx("h2", { className: "text-2xl font-semibold", children: "Analysis Results" }),
              jsx(tf, {
                children: jsxs(tf.Content, {
                  className: "p-8 text-center",
                  children: [
                    jsx("p", {
                      className: "text-muted-foreground",
                      children: "No analysis results found.",
                    }),
                    jsx("p", {
                      className: "text-sm text-muted-foreground mt-2",
                      children:
                        "Use the controls above to analyze a response with an analysis engine.",
                    }),
                  ],
                }),
              }),
            ],
          }),
        Result.isSuccess(A2) &&
          null !== A2.value &&
          jsxs("div", {
            className: "space-y-4",
            children: [
              jsx("h2", { className: "text-2xl font-semibold", children: "Analysis Summary" }),
              jsxs(tf, {
                children: [
                  jsxs(tf.Header, {
                    children: [
                      jsx(tf.Title, { children: "Engine Summary" }),
                      jsxs(tf.Description, {
                        children: [
                          "Engine: ",
                          A2.value.engineId,
                          " v",
                          A2.value.engineVersion.semver,
                        ],
                      }),
                    ],
                  }),
                  jsx(tf.Content, {
                    children: jsx("div", {
                      className: "space-y-4",
                      children: jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                        children: [
                          jsxs("div", {
                            children: [
                              jsx("span", {
                                className: "font-medium",
                                children: "Total Responses:",
                              }),
                              " ",
                              A2.value.totalResponses,
                            ],
                          }),
                          jsxs("div", {
                            children: [
                              jsx("span", { className: "font-medium", children: "Generated At:" }),
                              " ",
                              new Date(A2.value.generatedAt.epochMillis).toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  b = () =>
    jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        jsx("p", { children: "Something went wrong..." }),
        jsx("div", {
          className: "flex gap-2",
          children: jsx(ii, {
            onClick: () => {
              window.location.reload();
            },
            children: "Retry",
          }),
        }),
      ],
    }),
  A = () => {
    const e2 = useAtomValue(TM);
    return jsx(y, {
      children: Result.isSuccess(e2)
        ? jsx(S, {})
        : Result.isFailure(e2)
          ? jsx(b, {})
          : jsx("p", { children: "Loading..." }),
    });
  };

export { A as component };
//# sourceMappingURL=analysis-D7Eu8Hxf.mjs.map
