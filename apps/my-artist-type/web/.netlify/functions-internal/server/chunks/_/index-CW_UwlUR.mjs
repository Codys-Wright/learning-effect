import "@effect-atom/atom-react";
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
import { useEffect, useRef, useState } from "react";
import "react-dom";
import "react-resizable-panels";
import s from "react-wrap-balancer";
import { jsx, jsxs } from "react/jsx-runtime";
import "sonner";
import "tailwind-merge";
import { d } from "./background-wrapper-CStzXzfz.mjs";
import "./nav-user-6r4i62oK.mjs";
import { H as HM } from "./quiz-taker-atoms-BE0xmtWz.mjs";
import "./ssr.mjs";

function m() {
  const m2 = useRef(null),
    c2 = () => {
      const e2 = [
          {
            artistType: "Visionary",
            fullName: "The Visionary Artist",
            databaseId: "the-visionary-artist",
          },
          {
            artistType: "Consummate",
            fullName: "The Consummate Artist",
            databaseId: "the-consummate-artist",
          },
          {
            artistType: "Analyzer",
            fullName: "The Analyzer Artist",
            databaseId: "the-analyzer-artist",
          },
          { artistType: "Tech", fullName: "The Tech Artist", databaseId: "the-tech-artist" },
          {
            artistType: "Entertainer",
            fullName: "The Entertainer Artist",
            databaseId: "the-entertainer-artist",
          },
          {
            artistType: "Maverick",
            fullName: "The Maverick Artist",
            databaseId: "the-maverick-artist",
          },
          {
            artistType: "Dreamer",
            fullName: "The Dreamer Artist",
            databaseId: "the-dreamer-artist",
          },
          { artistType: "Feeler", fullName: "The Feeler Artist", databaseId: "the-feeler-artist" },
          {
            artistType: "Tortured",
            fullName: "The Tortured Artist",
            databaseId: "the-tortured-artist",
          },
          { artistType: "Solo", fullName: "The Solo Artist", databaseId: "the-solo-artist" },
        ],
        t2 = e2.map(() => Math.random() + 0.05),
        r2 = t2.reduce((e3, t3) => e3 + t3, 0),
        a2 = t2.map((e3) => (e3 / r2) * 100).map((e3) => Math.round(e3));
      let i2 = 100 - a2.reduce((e3, t3) => e3 + t3, 0);
      for (let l2 = 0; 0 !== i2 && l2 < a2.length; l2++) {
        let e3 = a2[l2];
        void 0 !== e3 && ((e3 += i2 > 0 ? 1 : -1), (i2 += i2 > 0 ? -1 : 1));
      }
      return e2.map((e3, t3) => {
        var _a;
        return {
          ...e3,
          percentage: Math.max(0, (_a = a2[t3]) != null ? _a : 0),
          points: Math.floor(1e3 * Math.random()),
        };
      });
    },
    [n, f] = useState(void 0);
  return (
    useEffect(() => {
      f(c2());
      const e2 = setInterval(() => {
        f(c2());
      }, 5e3);
      return () => {
        clearInterval(e2);
      };
    }, []),
    jsx(d, {
      children: jsxs("div", {
        className:
          "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-3",
        children: [
          jsxs("div", {
            className:
              "lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left",
            children: [
              jsx("h2", {
                className:
                  "relative z-50 mb-4 mt-4 max-w-4xl text-balance text-center text-3xl font-semibold tracking-tight text-gray-700 md:text-7xl lg:text-left dark:text-neutral-300",
                children: jsxs(s, {
                  children: [
                    "Discover your",
                    " ",
                    jsx("div", {
                      className:
                        "relative mx-auto inline-block w-max lg:mx-0 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]",
                      children: jsx("div", {
                        className: "text-black [text-shadow:0_0_rgba(0,0,0,0.1)] dark:text-white",
                        children: jsx("span", { className: "", children: "Artist Type" }),
                      }),
                    }),
                  ],
                }),
              }),
              jsx("p", {
                className:
                  "relative z-50 mt-4 max-w-xl text-center text-base/6 text-gray-600 lg:text-left dark:text-gray-200 italic",
                children: '"Knowing yourself is the beginning of all wisdom." - Aristotle',
              }),
              jsxs("div", {
                className:
                  "mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:mb-20 lg:justify-start",
                children: [
                  jsx("a", {
                    href: "/quiz",
                    className:
                      "group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-black p-px px-4 py-2 text-center text-sm font-semibold leading-6 text-white no-underline transition duration-200 sm:w-52 dark:bg-white dark:text-black",
                    children: "Take the quiz",
                  }),
                  jsx("a", {
                    href: "#",
                    onClick: (e2) => e2.preventDefault(),
                    className:
                      "shadow-input group relative z-20 flex h-10 w-full cursor-not-allowed items-center justify-center space-x-2 rounded-lg bg-white p-px px-4 py-2 text-sm font-semibold leading-6 text-black no-underline transition duration-200 opacity-50 sm:w-52 dark:bg-neutral-800 dark:text-white",
                    children: "Explore More",
                  }),
                ],
              }),
            ],
          }),
          jsx("div", {
            className: "lg:col-span-1 w-full h-full",
            children: jsx("div", {
              ref: m2,
              className:
                "relative w-full h-full min-w-96 rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg md:p-4 dark:border-neutral-700 dark:bg-neutral-800/50",
              children: jsx("div", {
                children: jsx(HM, {
                  data: n != null ? n : [],
                  showBarChart: true,
                  barChartHeight: "h-40",
                  className: "h-full w-full",
                  contentClassName: "h-full w-full",
                  transparent: true,
                  fill: true,
                }),
              }),
            }),
          }),
        ],
      }),
    })
  );
}
const c = function () {
  return jsx(m, {});
};

export { c as component };
//# sourceMappingURL=index-CW_UwlUR.mjs.map
