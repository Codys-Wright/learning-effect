import { jsx, jsxs } from "react/jsx-runtime";
import {
  az as Ja,
  c as KC,
  x as Ka,
  D as SR,
  u as TN,
  aB as ef,
  aA as oi,
  S as zN,
} from "./ssr.mjs";

const c = oi(
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow]",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground shadow-sm [a&]:hover:bg-primary/90",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground shadow-sm [a&]:hover:bg-destructive/90",
          outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  h = ({ asChild: t2 = false, className: r2, variant: n2, ...i2 }) =>
    jsx(t2 ? Ja : "span", { "data-slot": "badge", className: Ka(c({ variant: n2 }), r2), ...i2 }),
  u = KC("outline", "chart-bar", "ChartBar", [
    [
      "path",
      {
        d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        key: "svg-0",
      },
    ],
    [
      "path",
      {
        d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        key: "svg-1",
      },
    ],
    [
      "path",
      {
        d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        key: "svg-2",
      },
    ],
    ["path", { d: "M4 20h14", key: "svg-3" }],
  ]),
  g = KC("outline", "credit-card", "CreditCard", [
    [
      "path",
      {
        d: "M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M3 10l18 0", key: "svg-1" }],
    ["path", { d: "M7 15l.01 0", key: "svg-2" }],
    ["path", { d: "M11 15l2 0", key: "svg-3" }],
  ]),
  m = KC("outline", "dashboard", "Dashboard", [
    ["path", { d: "M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
    ["path", { d: "M13.45 11.55l2.05 -2.05", key: "svg-1" }],
    ["path", { d: "M6.4 20a9 9 0 1 1 11.2 0z", key: "svg-2" }],
  ]),
  p = KC("outline", "dots-vertical", "DotsVertical", [
    ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
    ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
    ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ]),
  v = KC("outline", "logout", "Logout", [
    [
      "path",
      {
        d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",
        key: "svg-0",
      },
    ],
    ["path", { d: "M9 12h12l-3 -3", key: "svg-1" }],
    ["path", { d: "M18 15l3 -3", key: "svg-2" }],
  ]),
  f = KC("outline", "notification", "Notification", [
    ["path", { d: "M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3", key: "svg-0" }],
    ["path", { d: "M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }],
  ]),
  y = KC("outline", "settings", "Settings", [
    [
      "path",
      {
        d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }],
  ]),
  M = KC("outline", "user-circle", "UserCircle", [
    ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
    ["path", { d: "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }],
    ["path", { d: "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855", key: "svg-2" }],
  ]),
  x = KC("outline", "users", "Users", [
    ["path", { d: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
    ["path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "svg-2" }],
    ["path", { d: "M21 21v-2a4 4 0 0 0 -3 -3.85", key: "svg-3" }],
  ]),
  k = KC("filled", "circle-plus-filled", "CirclePlusFilled", [
    [
      "path",
      {
        d: "M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z",
        key: "svg-0",
      },
    ],
  ]);
function b({ items: e2 }) {
  return jsx(zN.Group, {
    children: jsxs(zN.GroupContent, {
      className: "flex flex-col gap-2",
      children: [
        jsx(zN.Menu, {
          children: jsx(zN.MenuItem, {
            children: jsx(zN.MenuButton, {
              asChild: true,
              tooltip: "Quiz Editor",
              className:
                "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear",
              children: jsxs("a", {
                href: "/admin/quiz-editor",
                children: [jsx(k, {}), jsx("span", { children: "Quiz Editor" })],
              }),
            }),
          }),
        }),
        jsx(zN.Menu, {
          children: e2.map((e3) => {
            var _a, _b;
            return jsx(
              zN.MenuItem,
              {
                children:
                  true === e3.disabled
                    ? jsxs(zN.MenuButton, {
                        tooltip: (_a = e3.tooltip) != null ? _a : e3.title,
                        className: "opacity-50 cursor-not-allowed pointer-events-auto",
                        onClick: (e4) => {
                          e4.preventDefault();
                        },
                        children: [
                          void 0 !== e3.icon && jsx(e3.icon, {}),
                          jsx("span", { children: e3.title }),
                          "Coming Soon!" === e3.tooltip &&
                            jsx(h, {
                              variant: "secondary",
                              className: "ml-auto text-xs",
                              children: "Coming Soon!",
                            }),
                        ],
                      })
                    : jsx(zN.MenuButton, {
                        asChild: true,
                        tooltip: (_b = e3.tooltip) != null ? _b : e3.title,
                        children: jsxs("a", {
                          href: e3.url,
                          children: [
                            void 0 !== e3.icon && jsx(e3.icon, {}),
                            jsx("span", { children: e3.title }),
                          ],
                        }),
                      }),
              },
              e3.title,
            );
          }),
        }),
      ],
    }),
  });
}
function N({ items: e2, ...a2 }) {
  return jsx(zN.Group, {
    ...a2,
    children: jsx(zN.GroupContent, {
      children: jsx(zN.Menu, {
        children: e2.map((e3) => {
          var _a;
          return jsx(
            zN.MenuItem,
            {
              children:
                true === e3.disabled
                  ? jsxs(zN.MenuButton, {
                      tooltip: (_a = e3.tooltip) != null ? _a : e3.title,
                      className: "opacity-50 cursor-not-allowed pointer-events-auto",
                      onClick: (e4) => {
                        e4.preventDefault();
                      },
                      children: [jsx(e3.icon, {}), jsx("span", { children: e3.title })],
                    })
                  : jsx(zN.MenuButton, {
                      asChild: true,
                      children: jsxs("a", {
                        href: e3.url,
                        children: [jsx(e3.icon, {}), jsx("span", { children: e3.title })],
                      }),
                    }),
            },
            e3.title,
          );
        }),
      }),
    }),
  });
}
function C({ user: e2 }) {
  const { isMobile: a2 } = TN();
  return jsx(zN.Menu, {
    children: jsx(zN.MenuItem, {
      children: jsxs(SR, {
        children: [
          jsx(SR.Trigger, {
            asChild: true,
            children: jsxs(zN.MenuButton, {
              size: "lg",
              className:
                "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
              children: [
                jsxs(ef, {
                  className: "h-8 w-8 rounded-lg grayscale",
                  children: [
                    jsx(ef.Image, { src: e2.avatar, alt: e2.name }),
                    jsx(ef.Fallback, { className: "rounded-lg", children: "CN" }),
                  ],
                }),
                jsxs("div", {
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [
                    jsx("span", { className: "truncate font-medium", children: e2.name }),
                    jsx("span", {
                      className: "text-muted-foreground truncate text-xs",
                      children: e2.email,
                    }),
                  ],
                }),
                jsx(p, { className: "ml-auto size-4" }),
              ],
            }),
          }),
          jsxs(SR.Content, {
            className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
            side: a2 ? "bottom" : "right",
            align: "end",
            sideOffset: 4,
            children: [
              jsx(SR.Label, {
                className: "p-0 font-normal",
                children: jsxs("div", {
                  className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                  children: [
                    jsxs(ef, {
                      className: "h-8 w-8 rounded-lg",
                      children: [
                        jsx(ef.Image, { src: e2.avatar, alt: e2.name }),
                        jsx(ef.Fallback, { className: "rounded-lg", children: "CN" }),
                      ],
                    }),
                    jsxs("div", {
                      className: "grid flex-1 text-left text-sm leading-tight",
                      children: [
                        jsx("span", { className: "truncate font-medium", children: e2.name }),
                        jsx("span", {
                          className: "text-muted-foreground truncate text-xs",
                          children: e2.email,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              jsx(SR.Separator, {}),
              jsxs(SR.Group, {
                children: [
                  jsxs(SR.Item, { children: [jsx(M, {}), "Account"] }),
                  jsxs(SR.Item, { children: [jsx(g, {}), "Billing"] }),
                  jsxs(SR.Item, { children: [jsx(f, {}), "Notifications"] }),
                ],
              }),
              jsx(SR.Separator, {}),
              jsxs(SR.Item, { children: [jsx(v, {}), "Log out"] }),
            ],
          }),
        ],
      }),
    }),
  });
}

export { C, N, b, h, m, p, u, x, y };
//# sourceMappingURL=nav-user-6r4i62oK.mjs.map
