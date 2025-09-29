import "@effect-atom/atom-react";
import "@effect/platform";
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
import { jsx, jsxs } from "react/jsx-runtime";
import "sonner";
import "tailwind-merge";
import { b as b$1, C, m, N as N$1, u as u$1, x as x$1, y as y$1 } from "./nav-user-6r4i62oK.mjs";
import { a as IN, c as KC, b as ON, D as SR, u as TN, S as zN } from "./ssr.mjs";

/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g = KC("outline", "database", "Database", [
    ["path", { d: "M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0", key: "svg-0" }],
    ["path", { d: "M4 6v6a8 3 0 0 0 16 0v-6", key: "svg-1" }],
    ["path", { d: "M4 12v6a8 3 0 0 0 16 0v-6", key: "svg-2" }],
  ]),
  u = KC("outline", "dots", "Dots", [
    ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
    ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
    ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ]),
  v = KC("outline", "file-word", "FileWord", [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
    [
      "path",
      { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" },
    ],
    ["path", { d: "M9 12l1.333 5l1.667 -4l1.667 4l1.333 -5", key: "svg-2" }],
  ]),
  y = KC("outline", "folder", "Folder", [
    [
      "path",
      {
        d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
        key: "svg-0",
      },
    ],
  ]),
  b = KC("outline", "help", "Help", [
    ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
    ["path", { d: "M12 17l0 .01", key: "svg-1" }],
    ["path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4", key: "svg-2" }],
  ]),
  M = KC("outline", "inner-shadow-top", "InnerShadowTop", [
    [
      "path",
      { d: "M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z", key: "svg-0" },
    ],
    ["path", { d: "M16.243 7.757a6 6 0 0 0 -8.486 0", key: "svg-1" }],
  ]),
  k = KC("outline", "list-details", "ListDetails", [
    ["path", { d: "M13 5h8", key: "svg-0" }],
    ["path", { d: "M13 9h5", key: "svg-1" }],
    ["path", { d: "M13 15h8", key: "svg-2" }],
    ["path", { d: "M13 19h5", key: "svg-3" }],
    [
      "path",
      {
        d: "M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        key: "svg-4",
      },
    ],
    [
      "path",
      {
        d: "M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        key: "svg-5",
      },
    ],
  ]),
  N = KC("outline", "report", "Report", [
    ["path", { d: "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697", key: "svg-0" }],
    ["path", { d: "M18 14v4h4", key: "svg-1" }],
    ["path", { d: "M18 11v-4a2 2 0 0 0 -2 -2h-2", key: "svg-2" }],
    [
      "path",
      {
        d: "M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",
        key: "svg-3",
      },
    ],
    ["path", { d: "M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-4" }],
    ["path", { d: "M8 11h4", key: "svg-5" }],
    ["path", { d: "M8 15h3", key: "svg-6" }],
  ]),
  x = KC("outline", "search", "Search", [
    ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
    ["path", { d: "M21 21l-6 -6", key: "svg-1" }],
  ]),
  w = KC("outline", "share-3", "Share3", [
    [
      "path",
      {
        d: "M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z",
        key: "svg-0",
      },
    ],
  ]),
  S = KC("outline", "trash", "Trash", [
    ["path", { d: "M4 7l16 0", key: "svg-0" }],
    ["path", { d: "M10 11l0 6", key: "svg-1" }],
    ["path", { d: "M14 11l0 6", key: "svg-2" }],
    ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }],
    ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }],
  ]);
function D({ items: a2 }) {
  const { isMobile: l2 } = TN();
  return jsxs(zN.Group, {
    className: "group-data-[collapsible=icon]:hidden",
    children: [
      jsx(zN.GroupLabel, { children: "Documents" }),
      jsxs(zN.Menu, {
        children: [
          a2.map((a3) =>
            jsxs(
              zN.MenuItem,
              {
                children: [
                  jsx(zN.MenuButton, {
                    asChild: true,
                    children: jsxs("a", {
                      href: a3.url,
                      children: [jsx(a3.icon, {}), jsx("span", { children: a3.name })],
                    }),
                  }),
                  jsxs(SR, {
                    children: [
                      jsx(SR.Trigger, {
                        asChild: true,
                        children: jsxs(zN.MenuAction, {
                          showOnHover: true,
                          className: "data-[state=open]:bg-accent rounded-sm",
                          children: [
                            jsx(u, {}),
                            jsx("span", { className: "sr-only", children: "More" }),
                          ],
                        }),
                      }),
                      jsxs(SR.Content, {
                        className: "w-24 rounded-lg",
                        side: l2 ? "bottom" : "right",
                        align: l2 ? "end" : "start",
                        children: [
                          jsxs(SR.Item, {
                            children: [jsx(y, {}), jsx("span", { children: "Open" })],
                          }),
                          jsxs(SR.Item, {
                            children: [jsx(w, {}), jsx("span", { children: "Share" })],
                          }),
                          jsx(SR.Separator, {}),
                          jsxs(SR.Item, {
                            variant: "destructive",
                            children: [jsx(S, {}), jsx("span", { children: "Delete" })],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              a3.name,
            ),
          ),
          jsx(zN.MenuItem, {
            children: jsxs(zN.MenuButton, {
              className: "text-sidebar-foreground/70",
              children: [
                jsx(u, { className: "text-sidebar-foreground/70" }),
                jsx("span", { children: "More" }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const I = {
  user: { name: "shadcn", email: "m@example.com", avatar: "/avatars/shadcn.jpg" },
  navMain: [
    { title: "Dashboard", url: "#", icon: m },
    { title: "Lifecycle", url: "#", icon: k },
    { title: "Analytics", url: "#", icon: u$1 },
    { title: "Projects", url: "#", icon: y },
    { title: "Team", url: "#", icon: x$1 },
  ],
  navSecondary: [
    { title: "Settings", url: "#", icon: y$1 },
    { title: "Get Help", url: "#", icon: b },
    { title: "Search", url: "#", icon: x },
  ],
  documents: [
    { name: "Data Library", url: "#", icon: g },
    { name: "Reports", url: "#", icon: N },
    { name: "Word Assistant", url: "#", icon: v },
  ],
};
function T({ ...a2 }) {
  return jsxs(zN, {
    collapsible: "offcanvas",
    ...a2,
    children: [
      jsx(zN.Header, {
        children: jsx(zN.Menu, {
          children: jsx(zN.MenuItem, {
            children: jsx(zN.MenuButton, {
              asChild: true,
              className: "data-[slot=sidebar-menu-button]:!p-1.5",
              children: jsxs("a", {
                href: "#",
                children: [
                  jsx(M, { className: "!size-5" }),
                  jsx("span", { className: "text-base font-semibold", children: "Acme Inc." }),
                ],
              }),
            }),
          }),
        }),
      }),
      jsxs(zN.Content, {
        children: [
          jsx(b$1, { items: I.navMain }),
          jsx(D, { items: I.documents }),
          jsx(N$1, { items: I.navSecondary, className: "mt-auto" }),
        ],
      }),
      jsx(zN.Footer, { children: jsx(C, { user: I.user }) }),
    ],
  });
}
const j = () =>
  jsx(IN, {
    defaultOpen: true,
    children: jsxs("div", {
      className: "flex min-h-screen w-full",
      children: [
        jsx(T, { variant: "inset" }),
        jsx(ON, {
          className: "flex-1 w-full",
          children: jsxs("div", {
            className: "p-8",
            children: [
              jsx("h1", { className: "text-3xl font-bold mb-4", children: "Sidebar Test Page" }),
              jsx("p", {
                className: "text-lg text-gray-600 mb-6",
                children: "This page tests the sidebar component to see if it's working correctly.",
              }),
              jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [
                  jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-md border",
                    children: [
                      jsx("h2", { className: "text-xl font-semibold mb-2", children: "Dashboard" }),
                      jsx("p", {
                        className: "text-gray-600",
                        children: "Main dashboard content goes here.",
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-md border",
                    children: [
                      jsx("h2", { className: "text-xl font-semibold mb-2", children: "Analytics" }),
                      jsx("p", {
                        className: "text-gray-600",
                        children: "Analytics data and charts.",
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "bg-white p-6 rounded-lg shadow-md border",
                    children: [
                      jsx("h2", { className: "text-xl font-semibold mb-2", children: "Projects" }),
                      jsx("p", {
                        className: "text-gray-600",
                        children: "Project management tools.",
                      }),
                    ],
                  }),
                ],
              }),
              jsxs("div", {
                className: "mt-8 p-4 bg-blue-50 rounded-lg",
                children: [
                  jsx("h3", {
                    className: "text-lg font-semibold text-blue-800 mb-2",
                    children: "Test Instructions",
                  }),
                  jsxs("ul", {
                    className: "text-blue-700 space-y-1",
                    children: [
                      jsx("li", { children: "\u2022 Check if the sidebar appears on the left" }),
                      jsx("li", {
                        children: "\u2022 Try clicking the sidebar toggle button (if visible)",
                      }),
                      jsx("li", { children: "\u2022 Test the navigation items in the sidebar" }),
                      jsx("li", {
                        children:
                          "\u2022 Verify the main content is properly offset from the sidebar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });

export { j as component };
//# sourceMappingURL=sidebar-test-CbDU6ILf.mjs.map
