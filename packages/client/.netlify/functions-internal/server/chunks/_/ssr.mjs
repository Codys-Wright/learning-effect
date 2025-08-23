import { Atom, RegistryProvider, useAtomMount } from "@effect-atom/atom-react";
import {
  HttpApi,
  HttpApiBuilder,
  HttpApiEndpoint,
  HttpApiGroup,
  HttpApiScalar,
  HttpApiSchema,
  HttpLayerRouter,
  HttpServer,
  HttpServerResponse,
} from "@effect/platform";
import * as ue from "@effect/platform-browser/BrowserWorker";
import * as me from "@effect/rpc/Rpc";
import * as pe from "@effect/rpc/RpcClient";
import * as ge from "@effect/rpc/RpcGroup";
import { SqlClient, SqlSchema } from "@effect/sql";
import { PgClient } from "@effect/sql-pg";
import { Select } from "@headlessui/react";
import * as x from "@radix-ui/react-avatar";
import * as j from "@radix-ui/react-checkbox";
import * as F from "@radix-ui/react-collapsible";
import * as D from "@radix-ui/react-dialog";
import * as M from "@radix-ui/react-dropdown-menu";
import * as B from "@radix-ui/react-progress";
import * as q from "@radix-ui/react-scroll-area";
import * as U from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import * as V from "@radix-ui/react-tabs";
import * as G from "@radix-ui/react-tooltip";
import {
  createFileRoute,
  createRootRoute,
  createRouter,
  HeadContent,
  lazyRouteComponent,
  Outlet,
  RouterProvider,
  Scripts,
} from "@tanstack/react-router";
import { defineHandlerCallback, renderRouterToStream } from "@tanstack/react-router/ssr/server";
import { Store, useStore } from "@tanstack/react-store";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import {
  Config,
  Duration,
  Effect,
  flow as flow$1,
  identity,
  Layer,
  Logger,
  LogLevel,
  Schedule,
  Schema,
  String as String$1,
} from "effect";
import * as le from "effect/Boolean";
import * as Ne from "effect/Duration";
import * as fe from "effect/Effect";
import * as ce from "effect/Either";
import { constant, flow, pipe } from "effect/Function";
import * as he from "effect/Layer";
import * as f from "effect/Option";
import { TreeFormatter } from "effect/ParseResult";
import * as h from "effect/Schema";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleIcon,
  Loader2Icon,
  XIcon,
} from "lucide-react";
import { AsyncLocalStorage } from "node:async_hooks";
import m__default, * as m from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster } from "sonner";
import { twMerge } from "tailwind-merge";

function _e(t) {
  return jsx(RouterProvider, { router: t.router });
}
const Oe = defineHandlerCallback(({ request: e, router: t, responseHeaders: r }) =>
    renderRouterToStream({
      request: e,
      router: t,
      responseHeaders: r,
      children: jsx(_e, { router: t }),
    }),
  ),
  je = "__TSR_index";
function Fe(e, t) {
  t || (t = {});
  const r = Le();
  return { ...t, key: r, __TSR_key: r, [je]: e };
}
function De(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let r = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1;
  const a = t.map((e, t) => Fe(t, void 0));
  return (function (e) {
    let t = e.getLocation();
    const r = new Set(),
      a = (a) => {
        (t = e.getLocation()), r.forEach((e) => e({ location: t, action: a }));
      },
      s = (r) => {
        (e.notifyOnIndexChange ?? 1) ? a(r) : (t = e.getLocation());
      },
      n = async ({ task: r, navigateOpts: a, ...s }) => {
        var n, i;
        if (null == a ? void 0 : a.ignoreBlocker) return void r();
        const o = (null == (n = e.getBlockers) ? void 0 : n.call(e)) ?? [],
          l = "PUSH" === s.type || "REPLACE" === s.type;
        if ("undefined" != typeof document && o.length && l)
          for (const c of o) {
            const r = Me(s.path, s.state);
            if (await c.blockerFn({ currentLocation: t, nextLocation: r, action: s.type }))
              return void (null == (i = e.onBlocked) || i.call(e));
          }
        r();
      };
    return {
      get location() {
        return t;
      },
      get length() {
        return e.getLength();
      },
      subscribers: r,
      subscribe: (e) => (
        r.add(e),
        () => {
          r.delete(e);
        }
      ),
      push: (r, s, i) => {
        const o = t.state[je];
        (s = Fe(o + 1, s)),
          n({
            task: () => {
              e.pushState(r, s), a({ type: "PUSH" });
            },
            navigateOpts: i,
            type: "PUSH",
            path: r,
            state: s,
          });
      },
      replace: (r, s, i) => {
        const o = t.state[je];
        (s = Fe(o, s)),
          n({
            task: () => {
              e.replaceState(r, s), a({ type: "REPLACE" });
            },
            navigateOpts: i,
            type: "REPLACE",
            path: r,
            state: s,
          });
      },
      go: (t, r) => {
        n({
          task: () => {
            e.go(t), s({ type: "GO", index: t });
          },
          navigateOpts: r,
          type: "GO",
        });
      },
      back: (t) => {
        n({
          task: () => {
            e.back((null == t ? void 0 : t.ignoreBlocker) ?? false), s({ type: "BACK" });
          },
          navigateOpts: t,
          type: "BACK",
        });
      },
      forward: (t) => {
        n({
          task: () => {
            e.forward((null == t ? void 0 : t.ignoreBlocker) ?? false), s({ type: "FORWARD" });
          },
          navigateOpts: t,
          type: "FORWARD",
        });
      },
      canGoBack: () => 0 !== t.state[je],
      createHref: (t) => e.createHref(t),
      block: (t) => {
        var r;
        if (!e.setBlockers) return () => {};
        const a = (null == (r = e.getBlockers) ? void 0 : r.call(e)) ?? [];
        return (
          e.setBlockers([...a, t]),
          () => {
            var r, a;
            const s = (null == (r = e.getBlockers) ? void 0 : r.call(e)) ?? [];
            null == (a = e.setBlockers) ||
              a.call(
                e,
                s.filter((e) => e !== t),
              );
          }
        );
      },
      flush: () => {
        var t;
        return null == (t = e.flush) ? void 0 : t.call(e);
      },
      destroy: () => {
        var t;
        return null == (t = e.destroy) ? void 0 : t.call(e);
      },
      notify: a,
    };
  })({
    getLocation: () => Me(t[r], a[r]),
    getLength: () => t.length,
    pushState: (e, s) => {
      r < t.length - 1 && (t.splice(r + 1), a.splice(r + 1)),
        a.push(s),
        t.push(e),
        (r = Math.max(t.length - 1, 0));
    },
    replaceState: (e, s) => {
      (a[r] = s), (t[r] = e);
    },
    back: () => {
      r = Math.max(r - 1, 0);
    },
    forward: () => {
      r = Math.min(r + 1, t.length - 1);
    },
    go: (e) => {
      r = Math.min(Math.max(r + e, 0), t.length - 1);
    },
    createHref: (e) => e,
  });
}
function Me(e, t) {
  const r = e.indexOf("#"),
    a = e.indexOf("?"),
    s = Le();
  return {
    href: e,
    pathname: e.substring(0, r > 0 ? (a > 0 ? Math.min(r, a) : r) : a > 0 ? a : e.length),
    hash: r > -1 ? e.substring(r) : "",
    search: a > -1 ? e.slice(a, -1 === r ? void 0 : r) : "",
    state: t || { [je]: 0, key: s, __TSR_key: s },
  };
}
function Le() {
  return (Math.random() + 1).toString(36).substring(7);
}
function $e(e) {
  if (Array.isArray(e)) return e.flatMap((e) => $e(e));
  if ("string" != typeof e) return [];
  const t = [];
  let r,
    a,
    s,
    n,
    i,
    o = 0;
  const l = () => {
    for (; o < e.length && /\s/.test(e.charAt(o)); ) o += 1;
    return o < e.length;
  };
  for (; o < e.length; ) {
    for (r = o, i = false; l(); )
      if (((a = e.charAt(o)), "," === a)) {
        for (
          s = o, o += 1, l(), n = o;
          o < e.length && ((a = e.charAt(o)), "=" !== a && ";" !== a && "," !== a);

        )
          o += 1;
        o < e.length && "=" === e.charAt(o)
          ? ((i = true), (o = n), t.push(e.slice(r, s)), (r = o))
          : (o = s + 1);
      } else o += 1;
    (!i || o >= e.length) && t.push(e.slice(r, e.length));
  }
  return t;
}
function We(...e) {
  return e.reduce((e, t) => {
    const r =
      (a = t) instanceof Headers || Array.isArray(a) || "object" == typeof a
        ? new Headers(a)
        : new Headers();
    var a;
    for (const [s, n] of r.entries())
      if ("set-cookie" === s) {
        $e(n).forEach((t) => e.append("set-cookie", t));
      } else e.set(s, n);
    return e;
  }, new Headers());
}
function Be(e, t) {
  return new Response(JSON.stringify(e), {
    ...t,
    headers: We({ "content-type": "application/json" }, null == t ? void 0 : t.headers),
  });
}
var Ue = "Invariant failed";
function Ve(e, t) {
  if (!e) {
    throw new Error(Ue);
  }
}
function He(e) {
  if (!Ge(e)) return false;
  const t = e.constructor;
  if (void 0 === t) return true;
  const r = t.prototype;
  return !!Ge(r) && !!r.hasOwnProperty("isPrototypeOf");
}
function Ge(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function Ke(e) {
  return Ze(e.filter((e) => void 0 !== e).join("/"));
}
function Ze(e) {
  return e.replace(/\/{2,}/g, "/");
}
function Je(e) {
  return "/" === e ? e : e.replace(/^\/{1,}/, "");
}
function Ye(e) {
  return "/" === e ? e : e.replace(/\/{1,}$/, "");
}
const Xe = (e, t) => {
    if (!e) return [];
    const r = null == t ? void 0 : t.get(e);
    if (r) return r;
    const a = (function (e) {
      e = Ze(e);
      const t = [];
      "/" === e.slice(0, 1) && ((e = e.substring(1)), t.push({ type: 0, value: "/" }));
      if (!e) return t;
      const r = e.split("/").filter(Boolean);
      t.push(
        ...r.map((e) => {
          const t = e.match(at);
          if (t) {
            return {
              type: 2,
              value: "$",
              prefixSegment: t[1] || void 0,
              suffixSegment: t[2] || void 0,
            };
          }
          const r = e.match(tt);
          if (r) {
            const e = r[1];
            return {
              type: 3,
              value: r[2],
              prefixSegment: e || void 0,
              suffixSegment: r[3] || void 0,
            };
          }
          const a = e.match(et);
          if (a) {
            const e = a[1];
            return {
              type: 1,
              value: "" + a[2],
              prefixSegment: e || void 0,
              suffixSegment: a[3] || void 0,
            };
          }
          if (Qe.test(e)) {
            return {
              type: 1,
              value: "$" + e.substring(1),
              prefixSegment: void 0,
              suffixSegment: void 0,
            };
          }
          return rt.test(e)
            ? { type: 2, value: "$", prefixSegment: void 0, suffixSegment: void 0 }
            : {
                type: 0,
                value: e.includes("%25")
                  ? e
                      .split("%25")
                      .map((e) => decodeURI(e))
                      .join("%25")
                  : decodeURI(e),
              };
        }),
      ),
        "/" === e.slice(-1) && ((e = e.substring(1)), t.push({ type: 0, value: "/" }));
      return t;
    })(e);
    return null == t || t.set(e, a), a;
  },
  Qe = /^\$.{1,}$/,
  et = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,
  tt = /^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,
  rt = /^\$$/,
  at = /^(.*?)\{\$\}(.*)$/;
function st(e, t, r, a) {
  const s = (function (e, t, { to: r, fuzzy: a, caseSensitive: s }, n) {
    if ("/" !== e && !t.startsWith(e)) return;
    (t = nt(e, t, s)), (r = nt(e, `${r ?? "$"}`, s));
    const i = Xe(t.startsWith("/") ? t : `/${t}`, n),
      o = Xe(r.startsWith("/") ? r : `/${r}`, n),
      l = {};
    return (function (e, t, r, a, s) {
      var n, i, o;
      let l = 0,
        c = 0;
      for (; l < e.length || c < t.length; ) {
        const a = e[l],
          d = t[c];
        if (d) {
          if (2 === d.type) {
            const t = e.slice(l);
            let s;
            if (d.prefixSegment || d.suffixSegment) {
              if (!a) return false;
              const r = d.prefixSegment || "",
                i = d.suffixSegment || "",
                o = a.value;
              if ("prefixSegment" in d && !o.startsWith(r)) return false;
              if (
                "suffixSegment" in d &&
                !(null == (n = e[e.length - 1]) ? void 0 : n.value.endsWith(i))
              )
                return false;
              let l = decodeURI(Ke(t.map((e) => e.value)));
              r && l.startsWith(r) && (l = l.slice(r.length)),
                i && l.endsWith(i) && (l = l.slice(0, l.length - i.length)),
                (s = l);
            } else s = decodeURI(Ke(t.map((e) => e.value)));
            return (r["*"] = s), (r._splat = s), true;
          }
          if (0 === d.type) {
            if ("/" === d.value && !(null == a ? void 0 : a.value)) {
              c++;
              continue;
            }
            if (a) {
              if (s) {
                if (d.value !== a.value) return false;
              } else if (d.value.toLowerCase() !== a.value.toLowerCase()) return false;
              l++, c++;
              continue;
            }
            return false;
          }
          if (1 === d.type) {
            if (!a) return false;
            if ("/" === a.value) return false;
            let e = "",
              t = false;
            if (d.prefixSegment || d.suffixSegment) {
              const r = d.prefixSegment || "",
                s = d.suffixSegment || "",
                n = a.value;
              if (r && !n.startsWith(r)) return false;
              if (s && !n.endsWith(s)) return false;
              let i = n;
              r && i.startsWith(r) && (i = i.slice(r.length)),
                s && i.endsWith(s) && (i = i.slice(0, i.length - s.length)),
                (e = decodeURIComponent(i)),
                (t = true);
            } else (e = decodeURIComponent(a.value)), (t = true);
            t && ((r[d.value.substring(1)] = e), l++), c++;
            continue;
          }
          if (3 === d.type) {
            if (!a) {
              c++;
              continue;
            }
            if ("/" === a.value) {
              c++;
              continue;
            }
            let s = "",
              n = false;
            if (d.prefixSegment || d.suffixSegment) {
              const e = d.prefixSegment || "",
                t = d.suffixSegment || "",
                r = a.value;
              if ((!e || r.startsWith(e)) && (!t || r.endsWith(t))) {
                let a = r;
                e && a.startsWith(e) && (a = a.slice(e.length)),
                  t && a.endsWith(t) && (a = a.slice(0, a.length - t.length)),
                  (s = decodeURIComponent(a)),
                  (n = true);
              }
            } else {
              let r = true;
              for (let s = c + 1; s < t.length; s++) {
                const n = t[s];
                if (0 === (null == n ? void 0 : n.type) && n.value === a.value) {
                  r = false;
                  break;
                }
                if (1 === (null == n ? void 0 : n.type) || 2 === (null == n ? void 0 : n.type)) {
                  e.length < t.length && (r = false);
                  break;
                }
              }
              r && ((s = decodeURIComponent(a.value)), (n = true));
            }
            n && ((r[d.value.substring(1)] = s), l++), c++;
            continue;
          }
        }
        if (l < e.length && c >= t.length)
          return (
            (r["**"] = Ke(e.slice(l).map((e) => e.value))),
            "/" !== (null == (i = t[t.length - 1]) ? void 0 : i.value)
          );
        if (c < t.length && l >= e.length) {
          for (let e = c; e < t.length; e++)
            if (3 !== (null == (o = t[e]) ? void 0 : o.type)) return false;
          break;
        }
        break;
      }
      return true;
    })(i, o, l, 0, s)
      ? l
      : void 0;
  })(e, t, r, a);
  if (!r.to || s) return s ?? {};
}
function nt(e, t, r = false) {
  const a = r ? e : e.toLowerCase(),
    s = r ? t : t.toLowerCase();
  switch (true) {
    case "/" === a:
      return t;
    case s === a:
      return "";
    case t.length < e.length:
    case "/" !== s[a.length]:
      return t;
    case s.startsWith(a):
      return t.slice(e.length);
    default:
      return t;
  }
}
function it(e) {
  return !!(null == e ? void 0 : e.isNotFound);
}
const ot = "__root__";
function lt(e) {
  return e instanceof Response && !!e.options;
}
const ct = 2e-4,
  dt = 1e-4;
function ut(e, t) {
  return e.prefixSegment && e.suffixSegment
    ? t + 0.05 + ct * e.prefixSegment.length + dt * e.suffixSegment.length
    : e.prefixSegment
      ? t + 0.02 + ct * e.prefixSegment.length
      : e.suffixSegment
        ? t + 0.01 + dt * e.suffixSegment.length
        : t;
}
const pt = {
    stringify: (e) =>
      JSON.stringify(e, function (e, t) {
        const r = this[e],
          a = ht.find((e) => e.stringifyCondition(r));
        return a ? a.stringify(r) : t;
      }),
    parse: (e) =>
      JSON.parse(e, function (e, t) {
        const r = this[e];
        if (He(r)) {
          const e = ht.find((e) => e.parseCondition(r));
          if (e) return e.parse(r);
        }
        return t;
      }),
    encode: (e) => {
      if (Array.isArray(e)) return e.map((e) => pt.encode(e));
      if (He(e)) return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, pt.encode(t)]));
      const t = ht.find((t) => t.stringifyCondition(e));
      return t ? t.stringify(e) : e;
    },
    decode: (e) => {
      if (He(e)) {
        const t = ht.find((t) => t.parseCondition(e));
        if (t) return t.parse(e);
      }
      return Array.isArray(e)
        ? e.map((e) => pt.decode(e))
        : He(e)
          ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, pt.decode(t)]))
          : e;
    },
  },
  ft = (e, t, r, a) => ({
    key: e,
    stringifyCondition: t,
    stringify: (t) => ({ [`$${e}`]: r(t) }),
    parseCondition: (t) => Object.hasOwn(t, `$${e}`),
    parse: (t) => a(t[`$${e}`]),
  }),
  ht = [
    ft(
      "undefined",
      (e) => void 0 === e,
      () => 0,
      () => {},
    ),
    ft(
      "date",
      (e) => e instanceof Date,
      (e) => e.toISOString(),
      (e) => new Date(e),
    ),
    ft(
      "error",
      (e) => e instanceof Error,
      (e) => ({ ...e, message: e.message, stack: void 0, cause: e.cause }),
      (e) => Object.assign(new Error(e.message), e),
    ),
    ft(
      "formData",
      (e) => e instanceof FormData,
      (e) => {
        const t = {};
        return (
          e.forEach((e, r) => {
            const a = t[r];
            void 0 !== a ? (Array.isArray(a) ? a.push(e) : (t[r] = [a, e])) : (t[r] = e);
          }),
          t
        );
      },
      (e) => {
        const t = new FormData();
        return (
          Object.entries(e).forEach(([e, r]) => {
            Array.isArray(r) ? r.forEach((r) => t.append(e, r)) : t.append(e, r);
          }),
          t
        );
      },
    ),
    ft(
      "bigint",
      (e) => "bigint" == typeof e,
      (e) => e.toString(),
      (e) => BigInt(e),
    ),
    ft(
      "server-function",
      (e) => "function" == typeof e && "functionId" in e && "string" == typeof e.functionId,
      ({ functionId: e }) => ({ functionId: e, __serverFn: true }),
      (e) => e,
    ),
  ],
  mt = new AsyncLocalStorage();
function gt(e) {
  const t = new Set(),
    r = [],
    a = (e) => {
      e.forEach((e) => {
        e.options.middleware && a(e.options.middleware), t.has(e) || (t.add(e), r.push(e));
      });
    };
  return a(e), r;
}
var yt,
  vt =
    (((yt = vt || {})[(yt.AggregateError = 1)] = "AggregateError"),
    (yt[(yt.ArrowFunction = 2)] = "ArrowFunction"),
    (yt[(yt.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (yt[(yt.ObjectAssign = 8)] = "ObjectAssign"),
    (yt[(yt.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    yt);
function bt(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "\t":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function wt(e) {
  let t,
    r = "",
    a = 0;
  for (let s = 0, n = e.length; s < n; s++)
    (t = bt(e[s])), t && ((r += e.slice(a, s) + t), (a = s + 1));
  return 0 === a ? (r = e) : (r += e.slice(a)), r;
}
var xt = "__SEROVAL_REFS__",
  St = "$R",
  Rt = `self.${St}`;
function Et(e, t) {
  if (!e) throw t;
}
var kt = new Map(),
  Nt = new Map();
function zt(e) {
  return kt.has(e);
}
function Pt(e) {
  return e;
}
function It(e, t) {
  for (let r = 0, a = t.length; r < a; r++) {
    let a = t[r];
    e.has(a) || (e.add(a), a.extends && It(e, a.extends));
  }
}
function At(e) {
  if (e) {
    let t = new Set();
    return It(t, e), [...t];
  }
}
"undefined" != typeof globalThis
  ? Object.defineProperty(globalThis, xt, {
      value: Nt,
      configurable: true,
      writable: false,
      enumerable: false,
    })
  : "undefined" != typeof self
    ? Object.defineProperty(self, xt, {
        value: Nt,
        configurable: true,
        writable: false,
        enumerable: false,
      })
    : "undefined" != typeof global &&
      Object.defineProperty(global, xt, {
        value: Nt,
        configurable: true,
        writable: false,
        enumerable: false,
      });
var Tt = {
    0: "Symbol.asyncIterator",
    1: "Symbol.hasInstance",
    2: "Symbol.isConcatSpreadable",
    3: "Symbol.iterator",
    4: "Symbol.match",
    5: "Symbol.matchAll",
    6: "Symbol.replace",
    7: "Symbol.search",
    8: "Symbol.species",
    9: "Symbol.split",
    10: "Symbol.toPrimitive",
    11: "Symbol.toStringTag",
    12: "Symbol.unscopables",
  },
  Ct = {
    [Symbol.asyncIterator]: 0,
    [Symbol.hasInstance]: 1,
    [Symbol.isConcatSpreadable]: 2,
    [Symbol.iterator]: 3,
    [Symbol.match]: 4,
    [Symbol.matchAll]: 5,
    [Symbol.replace]: 6,
    [Symbol.search]: 7,
    [Symbol.species]: 8,
    [Symbol.split]: 9,
    [Symbol.toPrimitive]: 10,
    [Symbol.toStringTag]: 11,
    [Symbol.unscopables]: 12,
  },
  _t = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" },
  Ot = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  jt = void 0;
function Ft(e, t, r, a, s, n, i, o, l, c, d, u) {
  return { t: e, i: t, s: r, l: a, c: s, m: n, p: i, e: o, a: l, f: c, b: d, o: u };
}
function Dt(e) {
  return Ft(2, jt, e, jt, jt, jt, jt, jt, jt, jt, jt, jt);
}
var Mt = Dt(2),
  Lt = Dt(3),
  $t = Dt(1),
  Wt = Dt(0),
  Bt = Dt(4),
  qt = Dt(5),
  Ut = Dt(6),
  Vt = Dt(7);
function Ht(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Gt(e, t) {
  let r = (function (e) {
      let t = Ot[Ht(e)];
      return e.name !== t
        ? { name: e.name }
        : e.constructor.name !== t
          ? { name: e.constructor.name }
          : {};
    })(e),
    a = Object.getOwnPropertyNames(e);
  for (let s, n = 0, i = a.length; n < i; n++)
    (s = a[n]),
      "name" !== s &&
        "message" !== s &&
        ("stack" === s ? 4 & t && ((r = r || {}), (r[s] = e[s])) : ((r = r || {}), (r[s] = e[s])));
  return r;
}
function Kt(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Zt(e) {
  return Ft(1, jt, wt(e), jt, jt, jt, jt, jt, jt, jt, jt, jt);
}
function Jt(e, t) {
  return Ft(
    18,
    e,
    wt(
      (function (e) {
        return Et(zt(e), new lr(e)), kt.get(e);
      })(t),
    ),
    jt,
    jt,
    jt,
    jt,
    jt,
    jt,
    jt,
    jt,
    jt,
  );
}
function Yt(e, t, r) {
  return Ft(25, e, r, jt, wt(t), jt, jt, jt, jt, jt, jt, jt);
}
function Xt(e, t) {
  return Ft(28, jt, jt, jt, jt, jt, jt, jt, [e, t], jt, jt, jt);
}
function Qt(e, t) {
  return Ft(30, jt, jt, jt, jt, jt, jt, jt, [e, t], jt, jt, jt);
}
function er(e, t, r) {
  return Ft(31, e, jt, jt, jt, jt, jt, jt, r, t, jt, jt);
}
var { toString: tr } = Object.prototype;
var rr = class extends Error {
    constructor(e, t) {
      var r, a;
      super(
        ((r = e),
        (a = t) instanceof Error
          ? `Seroval caught an error during the ${r} process.\n  \n${a.name}\n${a.message}\n\n- For more information, please check the "cause" property of this error.\n- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`
          : `Seroval caught an error during the ${r} process.\n\n"${tr.call(a)}"\n\nFor more information, please check the "cause" property of this error.`),
      ),
        (this.cause = t);
    }
  },
  ar = class extends rr {
    constructor(e) {
      super("parsing", e);
    }
  },
  sr = class extends rr {
    constructor(e) {
      super("serialization", e);
    }
  },
  nr = class extends Error {
    constructor(e) {
      super(
        `The value ${tr.call(e)} of type "${typeof e}" cannot be parsed/serialized.\n      \nThere are few workarounds for this problem:\n- Transform the value in a way that it can be serialized.\n- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`,
      ),
        (this.value = e);
    }
  },
  ir = class extends Error {
    constructor(e) {
      super('Unsupported node type "' + e.t + '".');
    }
  },
  or = class extends Error {
    constructor(e) {
      super('Missing plugin for tag "' + e + '".');
    }
  },
  lr = class extends Error {
    constructor(e) {
      super('Missing reference for the value "' + tr.call(e) + '" of type "' + typeof e + '"'),
        (this.value = e);
    }
  },
  cr = class {
    constructor(e, t) {
      (this.value = e), (this.replacement = t);
    }
  };
function dr(e, t, r) {
  return 2 & e
    ? (1 === t.length ? t[0] : "(" + t.join(",") + ")") +
        "=>" +
        (r.startsWith("{") ? "(" + r + ")" : r)
    : "function(" + t.join(",") + "){return " + r + "}";
}
function ur(e, t, r) {
  return 2 & e
    ? (1 === t.length ? t[0] : "(" + t.join(",") + ")") + "=>{" + r + "}"
    : "function(" + t.join(",") + "){" + r + "}";
}
var pr = {},
  fr = {},
  hr = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
function mr(e, t) {
  switch (t) {
    case 0:
      return "[]";
    case 1:
      return (function (e) {
        return dr(e, ["r"], "(r.p=new Promise(" + ur(e, ["s", "f"], "r.s=s,r.f=f") + "))");
      })(e);
    case 2:
      return (function (e) {
        return ur(e, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
      })(e);
    case 3:
      return (function (e) {
        return ur(e, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
      })(e);
    case 4:
      return (function (e) {
        return dr(
          e,
          ["b", "a", "s", "l", "p", "f", "e", "n"],
          "(b=[],a=!0,s=!1,l=[],p=0,f=" +
            ur(e, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") +
            ",n=" +
            ur(
              e,
              ["o", "x", "z", "c"],
              'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))',
            ) +
            ",e=" +
            dr(e, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + ur(e, [], "a&&(l[t]=void 0)") + ")") +
            ",{__SEROVAL_STREAM__:!0,on:" +
            dr(e, ["o"], "e(o)") +
            ",next:" +
            ur(e, ["v"], 'a&&(b.push(v),f(v,"next"))') +
            ",throw:" +
            ur(e, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') +
            ",return:" +
            ur(e, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') +
            "})",
        );
      })(e);
    default:
      return "";
  }
}
function gr() {
  let e = new Set(),
    t = [],
    r = true,
    a = true;
  return {
    __SEROVAL_STREAM__: true,
    on(s) {
      r && e.add(s);
      for (let e = 0, n = t.length; e < n; e++) {
        let i = t[e];
        e !== n - 1 || r ? s.next(i) : a ? s.return(i) : s.throw(i);
      }
      return () => {
        r && e.delete(s);
      };
    },
    next(a) {
      r &&
        (t.push(a),
        (function (t) {
          for (let r of e.keys()) r.next(t);
        })(a));
    },
    throw(s) {
      r &&
        (t.push(s),
        (function (t) {
          for (let r of e.keys()) r.throw(t);
        })(s),
        (r = false),
        (a = false),
        e.clear());
    },
    return(s) {
      r &&
        (t.push(s),
        (function (t) {
          for (let r of e.keys()) r.return(t);
        })(s),
        (r = false),
        (a = true),
        e.clear());
    },
  };
}
function yr(e) {
  let t = [],
    r = -1,
    a = -1,
    s = e[Symbol.iterator]();
  for (;;)
    try {
      let e = s.next();
      if ((t.push(e.value), e.done)) {
        a = t.length - 1;
        break;
      }
    } catch (yt) {
      (r = t.length), t.push(yt);
    }
  return { v: t, t: r, d: a };
}
var vr = class {
    constructor(e) {
      (this.marked = new Set()),
        (this.plugins = e.plugins),
        (this.features = 31 ^ (e.disabledFeatures || 0)),
        (this.refs = e.refs || new Map());
    }
    markRef(e) {
      this.marked.add(e);
    }
    isMarked(e) {
      return this.marked.has(e);
    }
    createIndex(e) {
      let t = this.refs.size;
      return this.refs.set(e, t), t;
    }
    getIndexedValue(e) {
      let t = this.refs.get(e);
      return null != t
        ? (this.markRef(t),
          { type: 1, value: ((r = t), Ft(4, r, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt)) })
        : { type: 0, value: this.createIndex(e) };
      var r;
    }
    getReference(e) {
      let t = this.getIndexedValue(e);
      return 1 === t.type ? t : zt(e) ? { type: 2, value: Jt(t.value, e) } : t;
    }
    parseWellKnownSymbol(e) {
      let t = this.getReference(e);
      return 0 !== t.type
        ? t.value
        : (Et(e in Ct, new nr(e)),
          (function (e, t) {
            return Ft(17, e, Ct[t], jt, jt, jt, jt, jt, jt, jt, jt, jt);
          })(t.value, e));
    }
    parseSpecialReference(e) {
      let t = this.getIndexedValue(hr[e]);
      return 1 === t.type ? t.value : Ft(26, t.value, e, jt, jt, jt, jt, jt, jt, jt, jt, jt);
    }
    parseIteratorFactory() {
      let e = this.getIndexedValue(pr);
      return 1 === e.type
        ? e.value
        : Ft(
            27,
            e.value,
            jt,
            jt,
            jt,
            jt,
            jt,
            jt,
            jt,
            this.parseWellKnownSymbol(Symbol.iterator),
            jt,
            jt,
          );
    }
    parseAsyncIteratorFactory() {
      let e = this.getIndexedValue(fr);
      return 1 === e.type
        ? e.value
        : Ft(
            29,
            e.value,
            jt,
            jt,
            jt,
            jt,
            jt,
            jt,
            [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)],
            jt,
            jt,
            jt,
          );
    }
    createObjectNode(e, t, r, a) {
      return Ft(r ? 11 : 10, e, jt, jt, jt, jt, a, jt, jt, jt, jt, Kt(t));
    }
    createMapNode(e, t, r, a) {
      return Ft(
        8,
        e,
        jt,
        jt,
        jt,
        jt,
        jt,
        { k: t, v: r, s: a },
        jt,
        this.parseSpecialReference(0),
        jt,
        jt,
      );
    }
    createPromiseConstructorNode(e, t) {
      return Ft(22, e, t, jt, jt, jt, jt, jt, jt, this.parseSpecialReference(1), jt, jt);
    }
  },
  br = /^[$A-Z_][0-9A-Z_$]*$/i;
function wr(e) {
  let t = e[0];
  return ("$" === t || "_" === t || (t >= "A" && t <= "Z") || (t >= "a" && t <= "z")) && br.test(e);
}
function xr(e) {
  switch (e.t) {
    case 0:
      return e.s + "=" + e.v;
    case 2:
      return e.s + ".set(" + e.k + "," + e.v + ")";
    case 1:
      return e.s + ".add(" + e.v + ")";
    case 3:
      return e.s + ".delete(" + e.k + ")";
  }
}
function Sr(e) {
  if (e.length) {
    let t = "",
      r = (function (e) {
        let t = [],
          r = e[0];
        for (let a, s = 1, n = e.length, i = r; s < n; s++)
          (a = e[s]),
            0 === a.t && a.v === i.v
              ? (r = { t: 0, s: a.s, k: jt, v: xr(r) })
              : 2 === a.t && a.s === i.s
                ? (r = { t: 2, s: xr(r), k: a.k, v: a.v })
                : 1 === a.t && a.s === i.s
                  ? (r = { t: 1, s: xr(r), k: jt, v: a.v })
                  : 3 === a.t && a.s === i.s
                    ? (r = { t: 3, s: xr(r), k: a.k, v: jt })
                    : (t.push(r), (r = a)),
            (i = a);
        return t.push(r), t;
      })(e);
    for (let e = 0, a = r.length; e < a; e++) t += xr(r[e]) + ",";
    return t;
  }
  return jt;
}
var Rr = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: jt },
  Er = class {
    constructor(e) {
      (this.stack = []),
        (this.flags = []),
        (this.assignments = []),
        (this.plugins = e.plugins),
        (this.features = e.features),
        (this.marked = new Set(e.markedRefs));
    }
    createFunction(e, t) {
      return dr(this.features, e, t);
    }
    createEffectfulFunction(e, t) {
      return ur(this.features, e, t);
    }
    markRef(e) {
      this.marked.add(e);
    }
    isMarked(e) {
      return this.marked.has(e);
    }
    pushObjectFlag(e, t) {
      0 !== e && (this.markRef(t), this.flags.push({ type: e, value: this.getRefParam(t) }));
    }
    resolveFlags() {
      let e = "";
      for (let t = 0, r = this.flags, a = r.length; t < a; t++) {
        let a = r[t];
        e += Rr[a.type] + "(" + a.value + "),";
      }
      return e;
    }
    resolvePatches() {
      let e = Sr(this.assignments),
        t = this.resolveFlags();
      return e ? (t ? e + t : e) : t;
    }
    createAssignment(e, t) {
      this.assignments.push({ t: 0, s: e, k: jt, v: t });
    }
    createAddAssignment(e, t) {
      this.assignments.push({ t: 1, s: this.getRefParam(e), k: jt, v: t });
    }
    createSetAssignment(e, t, r) {
      this.assignments.push({ t: 2, s: this.getRefParam(e), k: t, v: r });
    }
    createDeleteAssignment(e, t) {
      this.assignments.push({ t: 3, s: this.getRefParam(e), k: t, v: jt });
    }
    createArrayAssign(e, t, r) {
      this.createAssignment(this.getRefParam(e) + "[" + t + "]", r);
    }
    createObjectAssign(e, t, r) {
      this.createAssignment(this.getRefParam(e) + "." + t, r);
    }
    isIndexedValueInStack(e) {
      return 4 === e.t && this.stack.includes(e.i);
    }
    serializeReference(e) {
      return this.assignIndexedValue(e.i, xt + '.get("' + e.s + '")');
    }
    serializeArrayItem(e, t, r) {
      return t
        ? this.isIndexedValueInStack(t)
          ? (this.markRef(e), this.createArrayAssign(e, r, this.getRefParam(t.i)), "")
          : this.serialize(t)
        : "";
    }
    serializeArray(e) {
      let t = e.i;
      if (e.l) {
        this.stack.push(t);
        let r = e.a,
          a = this.serializeArrayItem(t, r[0], 0),
          s = "" === a;
        for (let n, i = 1, o = e.l; i < o; i++)
          (n = this.serializeArrayItem(t, r[i], i)), (a += "," + n), (s = "" === n);
        return (
          this.stack.pop(),
          this.pushObjectFlag(e.o, e.i),
          this.assignIndexedValue(t, "[" + a + (s ? ",]" : "]"))
        );
      }
      return this.assignIndexedValue(t, "[]");
    }
    serializeProperty(e, t, r) {
      if ("string" == typeof t) {
        let a = Number(t),
          s = (a >= 0 && a.toString() === t) || wr(t);
        if (this.isIndexedValueInStack(r)) {
          let n = this.getRefParam(r.i);
          return (
            this.markRef(e.i),
            s && a != a
              ? this.createObjectAssign(e.i, t, n)
              : this.createArrayAssign(e.i, s ? t : '"' + t + '"', n),
            ""
          );
        }
        return (s ? t : '"' + t + '"') + ":" + this.serialize(r);
      }
      return "[" + this.serialize(t) + "]:" + this.serialize(r);
    }
    serializeProperties(e, t) {
      let r = t.s;
      if (r) {
        let a = t.k,
          s = t.v;
        this.stack.push(e.i);
        let n = this.serializeProperty(e, a[0], s[0]);
        for (let t = 1, i = n; t < r; t++)
          (i = this.serializeProperty(e, a[t], s[t])), (n += (i && n && ",") + i);
        return this.stack.pop(), "{" + n + "}";
      }
      return "{}";
    }
    serializeObject(e) {
      return (
        this.pushObjectFlag(e.o, e.i),
        this.assignIndexedValue(e.i, this.serializeProperties(e, e.p))
      );
    }
    serializeWithObjectAssign(e, t, r) {
      let a = this.serializeProperties(e, t);
      return "{}" !== a ? "Object.assign(" + r + "," + a + ")" : r;
    }
    serializeStringKeyAssignment(e, t, r, a) {
      let s = this.serialize(a),
        n = Number(r),
        i = (n >= 0 && n.toString() === r) || wr(r);
      if (this.isIndexedValueInStack(a))
        i && n != n
          ? this.createObjectAssign(e.i, r, s)
          : this.createArrayAssign(e.i, i ? r : '"' + r + '"', s);
      else {
        let a = this.assignments;
        (this.assignments = t),
          i && n != n
            ? this.createObjectAssign(e.i, r, s)
            : this.createArrayAssign(e.i, i ? r : '"' + r + '"', s),
          (this.assignments = a);
      }
    }
    serializeAssignment(e, t, r, a) {
      if ("string" == typeof r) this.serializeStringKeyAssignment(e, t, r, a);
      else {
        let s = this.stack;
        this.stack = [];
        let n = this.serialize(a);
        this.stack = s;
        let i = this.assignments;
        (this.assignments = t),
          this.createArrayAssign(e.i, this.serialize(r), n),
          (this.assignments = i);
      }
    }
    serializeAssignments(e, t) {
      let r = t.s;
      if (r) {
        let a = [],
          s = t.k,
          n = t.v;
        this.stack.push(e.i);
        for (let t = 0; t < r; t++) this.serializeAssignment(e, a, s[t], n[t]);
        return this.stack.pop(), Sr(a);
      }
      return jt;
    }
    serializeDictionary(e, t) {
      if (e.p)
        if (8 & this.features) t = this.serializeWithObjectAssign(e, e.p, t);
        else {
          this.markRef(e.i);
          let r = this.serializeAssignments(e, e.p);
          if (r)
            return "(" + this.assignIndexedValue(e.i, t) + "," + r + this.getRefParam(e.i) + ")";
        }
      return this.assignIndexedValue(e.i, t);
    }
    serializeNullConstructor(e) {
      return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, "Object.create(null)");
    }
    serializeDate(e) {
      return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
    }
    serializeRegExp(e) {
      return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
    }
    serializeSetItem(e, t) {
      return this.isIndexedValueInStack(t)
        ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(t.i)), "")
        : this.serialize(t);
    }
    serializeSet(e) {
      let t = "new Set",
        r = e.l,
        a = e.i;
      if (r) {
        let s = e.a;
        this.stack.push(a);
        let n = this.serializeSetItem(a, s[0]);
        for (let e = 1, t = n; e < r; e++)
          (t = this.serializeSetItem(a, s[e])), (n += (t && n && ",") + t);
        this.stack.pop(), n && (t += "([" + n + "])");
      }
      return this.assignIndexedValue(a, t);
    }
    serializeMapEntry(e, t, r, a) {
      if (this.isIndexedValueInStack(t)) {
        let s = this.getRefParam(t.i);
        if ((this.markRef(e), this.isIndexedValueInStack(r))) {
          let t = this.getRefParam(r.i);
          return this.createSetAssignment(e, s, t), "";
        }
        if (4 !== r.t && null != r.i && this.isMarked(r.i)) {
          let t = "(" + this.serialize(r) + ",[" + a + "," + a + "])";
          return (
            this.createSetAssignment(e, s, this.getRefParam(r.i)),
            this.createDeleteAssignment(e, a),
            t
          );
        }
        let n = this.stack;
        return (
          (this.stack = []), this.createSetAssignment(e, s, this.serialize(r)), (this.stack = n), ""
        );
      }
      if (this.isIndexedValueInStack(r)) {
        let s = this.getRefParam(r.i);
        if ((this.markRef(e), 4 !== t.t && null != t.i && this.isMarked(t.i))) {
          let r = "(" + this.serialize(t) + ",[" + a + "," + a + "])";
          return (
            this.createSetAssignment(e, this.getRefParam(t.i), s),
            this.createDeleteAssignment(e, a),
            r
          );
        }
        let n = this.stack;
        return (
          (this.stack = []), this.createSetAssignment(e, this.serialize(t), s), (this.stack = n), ""
        );
      }
      return "[" + this.serialize(t) + "," + this.serialize(r) + "]";
    }
    serializeMap(e) {
      let t = "new Map",
        r = e.e.s,
        a = e.i,
        s = e.f,
        n = this.getRefParam(s.i);
      if (r) {
        let s = e.e.k,
          i = e.e.v;
        this.stack.push(a);
        let o = this.serializeMapEntry(a, s[0], i[0], n);
        for (let e = 1, t = o; e < r; e++)
          (t = this.serializeMapEntry(a, s[e], i[e], n)), (o += (t && o && ",") + t);
        this.stack.pop(), o && (t += "([" + o + "])");
      }
      return (
        26 === s.t && (this.markRef(s.i), (t = "(" + this.serialize(s) + "," + t + ")")),
        this.assignIndexedValue(a, t)
      );
    }
    serializeArrayBuffer(e) {
      let t = "new Uint8Array(",
        r = e.s,
        a = r.length;
      if (a) {
        t += "[" + r[0];
        for (let e = 1; e < a; e++) t += "," + r[e];
        t += "]";
      }
      return this.assignIndexedValue(e.i, t + ").buffer");
    }
    serializeTypedArray(e) {
      return this.assignIndexedValue(
        e.i,
        "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")",
      );
    }
    serializeDataView(e) {
      return this.assignIndexedValue(
        e.i,
        "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")",
      );
    }
    serializeAggregateError(e) {
      let t = e.i;
      this.stack.push(t);
      let r = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
      return this.stack.pop(), r;
    }
    serializeError(e) {
      return this.serializeDictionary(e, "new " + Ot[e.s] + '("' + e.m + '")');
    }
    serializePromise(e) {
      let t,
        r = e.f,
        a = e.i,
        s = e.s ? "Promise.resolve" : "Promise.reject";
      if (this.isIndexedValueInStack(r)) {
        let a = this.getRefParam(r.i);
        t =
          s +
          (e.s
            ? "().then(" + this.createFunction([], a) + ")"
            : "().catch(" + this.createEffectfulFunction([], "throw " + a) + ")");
      } else {
        this.stack.push(a);
        let e = this.serialize(r);
        this.stack.pop(), (t = s + "(" + e + ")");
      }
      return this.assignIndexedValue(a, t);
    }
    serializeWellKnownSymbol(e) {
      return this.assignIndexedValue(e.i, Tt[e.s]);
    }
    serializeBoxed(e) {
      return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
    }
    serializePlugin(e) {
      let t = this.plugins;
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          let a = t[r];
          if (a.tag === e.c)
            return this.assignIndexedValue(e.i, a.serialize(e.s, this, { id: e.i }));
        }
      throw new or(e.c);
    }
    getConstructor(e) {
      let t = this.serialize(e);
      return t === this.getRefParam(e.i) ? t : "(" + t + ")";
    }
    serializePromiseConstructor(e) {
      let t = this.assignIndexedValue(e.s, "{p:0,s:0,f:0}");
      return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "(" + t + ")");
    }
    serializePromiseResolve(e) {
      return (
        this.getConstructor(e.a[0]) +
        "(" +
        this.getRefParam(e.i) +
        "," +
        this.serialize(e.a[1]) +
        ")"
      );
    }
    serializePromiseReject(e) {
      return (
        this.getConstructor(e.a[0]) +
        "(" +
        this.getRefParam(e.i) +
        "," +
        this.serialize(e.a[1]) +
        ")"
      );
    }
    serializeSpecialReference(e) {
      return this.assignIndexedValue(e.i, mr(this.features, e.s));
    }
    serializeIteratorFactory(e) {
      let t = "",
        r = false;
      return (
        4 !== e.f.t && (this.markRef(e.f.i), (t = "(" + this.serialize(e.f) + ","), (r = true)),
        (t += this.assignIndexedValue(
          e.i,
          this.createFunction(
            ["s"],
            this.createFunction(
              ["i", "c", "d", "t"],
              "(i=0,t={[" +
                this.getRefParam(e.f.i) +
                "]:" +
                this.createFunction([], "t") +
                ",next:" +
                this.createEffectfulFunction(
                  [],
                  "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}",
                ) +
                "})",
            ),
          ),
        )),
        r && (t += ")"),
        t
      );
    }
    serializeIteratorFactoryInstance(e) {
      return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
    }
    serializeAsyncIteratorFactory(e) {
      let t = e.a[0],
        r = e.a[1],
        a = "";
      4 !== t.t && (this.markRef(t.i), (a += "(" + this.serialize(t))),
        4 !== r.t && (this.markRef(r.i), (a += (a ? "," : "(") + this.serialize(r))),
        a && (a += ",");
      let s = this.assignIndexedValue(
        e.i,
        this.createFunction(
          ["s"],
          this.createFunction(
            ["b", "c", "p", "d", "e", "t", "f"],
            "(b=[],c=0,p=[],d=-1,e=!1,f=" +
              this.createEffectfulFunction(
                ["i", "l"],
                "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})",
              ) +
              ",s.on({next:" +
              this.createEffectfulFunction(
                ["v", "t"],
                "if(t=p.shift())t.s({done:!1,value:v});b.push(v)",
              ) +
              ",throw:" +
              this.createEffectfulFunction(
                ["v", "t"],
                "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)",
              ) +
              ",return:" +
              this.createEffectfulFunction(
                ["v", "t"],
                "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)",
              ) +
              "}),t={[" +
              this.getRefParam(r.i) +
              "]:" +
              this.createFunction([], "t.p") +
              ",next:" +
              this.createEffectfulFunction(
                ["i", "t", "v"],
                "if(d===-1){return((i=c++)>=b.length)?(" +
                  this.getRefParam(t.i) +
                  "(t={p:0,s:0,f:0}),p.push(t),t.p):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}",
              ) +
              "})",
          ),
        ),
      );
      return a ? a + s + ")" : s;
    }
    serializeAsyncIteratorFactoryInstance(e) {
      return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
    }
    serializeStreamConstructor(e) {
      let t = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"),
        r = e.a.length;
      if (r) {
        let a = this.serialize(e.a[0]);
        for (let t = 1; t < r; t++) a += "," + this.serialize(e.a[t]);
        return "(" + t + "," + a + "," + this.getRefParam(e.i) + ")";
      }
      return t;
    }
    serializeStreamNext(e) {
      return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
    }
    serializeStreamThrow(e) {
      return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
    }
    serializeStreamReturn(e) {
      return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
    }
    serialize(e) {
      try {
        switch (e.t) {
          case 2:
            return _t[e.s];
          case 0:
            return "" + e.s;
          case 1:
            return '"' + e.s + '"';
          case 3:
            return e.s + "n";
          case 4:
            return this.getRefParam(e.i);
          case 18:
            return this.serializeReference(e);
          case 9:
            return this.serializeArray(e);
          case 10:
            return this.serializeObject(e);
          case 11:
            return this.serializeNullConstructor(e);
          case 5:
            return this.serializeDate(e);
          case 6:
            return this.serializeRegExp(e);
          case 7:
            return this.serializeSet(e);
          case 8:
            return this.serializeMap(e);
          case 19:
            return this.serializeArrayBuffer(e);
          case 16:
          case 15:
            return this.serializeTypedArray(e);
          case 20:
            return this.serializeDataView(e);
          case 14:
            return this.serializeAggregateError(e);
          case 13:
            return this.serializeError(e);
          case 12:
            return this.serializePromise(e);
          case 17:
            return this.serializeWellKnownSymbol(e);
          case 21:
            return this.serializeBoxed(e);
          case 22:
            return this.serializePromiseConstructor(e);
          case 23:
            return this.serializePromiseResolve(e);
          case 24:
            return this.serializePromiseReject(e);
          case 25:
            return this.serializePlugin(e);
          case 26:
            return this.serializeSpecialReference(e);
          case 27:
            return this.serializeIteratorFactory(e);
          case 28:
            return this.serializeIteratorFactoryInstance(e);
          case 29:
            return this.serializeAsyncIteratorFactory(e);
          case 30:
            return this.serializeAsyncIteratorFactoryInstance(e);
          case 31:
            return this.serializeStreamConstructor(e);
          case 32:
            return this.serializeStreamNext(e);
          case 33:
            return this.serializeStreamThrow(e);
          case 34:
            return this.serializeStreamReturn(e);
          default:
            throw new ir(e);
        }
      } catch (t) {
        throw new sr(t);
      }
    }
  },
  kr = class extends Er {
    constructor(e) {
      super(e), (this.mode = "cross"), (this.scopeId = e.scopeId);
    }
    getRefParam(e) {
      return "$R[" + e + "]";
    }
    assignIndexedValue(e, t) {
      return this.getRefParam(e) + "=" + t;
    }
    serializeTop(e) {
      let t = this.serialize(e),
        r = e.i;
      if (null == r) return t;
      let a = this.resolvePatches(),
        s = this.getRefParam(r),
        n = null == this.scopeId ? "" : St,
        i = a ? "(" + t + "," + a + s + ")" : t;
      if ("" === n) return 10 !== e.t || a ? i : "(" + i + ")";
      let o = null == this.scopeId ? "()" : '($R["' + wt(this.scopeId) + '"])';
      return "(" + this.createFunction([n], i) + ")" + o;
    }
  },
  Nr = class extends vr {
    parseItems(e) {
      let t = [];
      for (let r = 0, a = e.length; r < a; r++) r in e && (t[r] = this.parse(e[r]));
      return t;
    }
    parseArray(e, t) {
      return (function (e, t, r) {
        return Ft(9, e, jt, t.length, jt, jt, jt, jt, r, jt, jt, Kt(t));
      })(e, t, this.parseItems(t));
    }
    parseProperties(e) {
      let t = Object.entries(e),
        r = [],
        a = [];
      for (let n = 0, i = t.length; n < i; n++) r.push(wt(t[n][0])), a.push(this.parse(t[n][1]));
      let s = Symbol.iterator;
      return (
        s in e &&
          (r.push(this.parseWellKnownSymbol(s)),
          a.push(Xt(this.parseIteratorFactory(), this.parse(yr(e))))),
        (s = Symbol.asyncIterator),
        s in e &&
          (r.push(this.parseWellKnownSymbol(s)),
          a.push(Qt(this.parseAsyncIteratorFactory(), this.parse(gr())))),
        (s = Symbol.toStringTag),
        s in e && (r.push(this.parseWellKnownSymbol(s)), a.push(Zt(e[s]))),
        (s = Symbol.isConcatSpreadable),
        s in e && (r.push(this.parseWellKnownSymbol(s)), a.push(e[s] ? Mt : Lt)),
        { k: r, v: a, s: r.length }
      );
    }
    parsePlainObject(e, t, r) {
      return this.createObjectNode(e, t, r, this.parseProperties(t));
    }
    parseBoxed(e, t) {
      return (function (e, t) {
        return Ft(21, e, jt, jt, jt, jt, jt, jt, jt, t, jt, jt);
      })(e, this.parse(t.valueOf()));
    }
    parseTypedArray(e, t) {
      return (function (e, t, r) {
        return Ft(15, e, jt, t.length, t.constructor.name, jt, jt, jt, jt, r, t.byteOffset, jt);
      })(e, t, this.parse(t.buffer));
    }
    parseBigIntTypedArray(e, t) {
      return (function (e, t, r) {
        return Ft(16, e, jt, t.length, t.constructor.name, jt, jt, jt, jt, r, t.byteOffset, jt);
      })(e, t, this.parse(t.buffer));
    }
    parseDataView(e, t) {
      return (function (e, t, r) {
        return Ft(20, e, jt, t.byteLength, jt, jt, jt, jt, jt, r, t.byteOffset, jt);
      })(e, t, this.parse(t.buffer));
    }
    parseError(e, t) {
      let r = Gt(t, this.features);
      return (function (e, t, r) {
        return Ft(13, e, Ht(t), jt, jt, wt(t.message), r, jt, jt, jt, jt, jt);
      })(e, t, r ? this.parseProperties(r) : jt);
    }
    parseAggregateError(e, t) {
      let r = Gt(t, this.features);
      return (function (e, t, r) {
        return Ft(14, e, Ht(t), jt, jt, wt(t.message), r, jt, jt, jt, jt, jt);
      })(e, t, r ? this.parseProperties(r) : jt);
    }
    parseMap(e, t) {
      let r = [],
        a = [];
      for (let [s, n] of t.entries()) r.push(this.parse(s)), a.push(this.parse(n));
      return this.createMapNode(e, r, a, t.size);
    }
    parseSet(e, t) {
      let r = [];
      for (let a of t.keys()) r.push(this.parse(a));
      return (function (e, t, r) {
        return Ft(7, e, jt, t, jt, jt, jt, jt, r, jt, jt, jt);
      })(e, t.size, r);
    }
    parsePlugin(e, t) {
      let r = this.plugins;
      if (r)
        for (let a = 0, s = r.length; a < s; a++) {
          let s = r[a];
          if (s.parse.sync && s.test(t)) return Yt(e, s.tag, s.parse.sync(t, this, { id: e }));
        }
    }
    parseStream(e, t) {
      return er(e, this.parseSpecialReference(4), []);
    }
    parsePromise(e, t) {
      return this.createPromiseConstructorNode(e, this.createIndex({}));
    }
    parseObject(e, t) {
      if (Array.isArray(t)) return this.parseArray(e, t);
      if ("__SEROVAL_STREAM__" in t) return this.parseStream(e, t);
      let r = t.constructor;
      if (r === cr) return this.parse(t.replacement);
      let a = this.parsePlugin(e, t);
      if (a) return a;
      switch (r) {
        case Object:
          return this.parsePlainObject(e, t, false);
        case void 0:
          return this.parsePlainObject(e, t, true);
        case Date:
          return (function (e, t) {
            let r = t.valueOf();
            return Ft(5, e, r != r ? "" : t.toISOString(), jt, jt, jt, jt, jt, jt, jt, jt, jt);
          })(e, t);
        case RegExp:
          return (function (e, t) {
            return Ft(6, e, jt, jt, wt(t.source), t.flags, jt, jt, jt, jt, jt, jt);
          })(e, t);
        case Error:
        case EvalError:
        case RangeError:
        case ReferenceError:
        case SyntaxError:
        case TypeError:
        case URIError:
          return this.parseError(e, t);
        case Number:
        case Boolean:
        case String:
        case BigInt:
          return this.parseBoxed(e, t);
        case ArrayBuffer:
          return (function (e, t) {
            let r = new Uint8Array(t),
              a = r.length,
              s = new Array(a);
            for (let n = 0; n < a; n++) s[n] = r[n];
            return Ft(19, e, s, jt, jt, jt, jt, jt, jt, jt, jt, jt);
          })(e, t);
        case Int8Array:
        case Int16Array:
        case Int32Array:
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
        case Uint8ClampedArray:
        case Float32Array:
        case Float64Array:
          return this.parseTypedArray(e, t);
        case DataView:
          return this.parseDataView(e, t);
        case Map:
          return this.parseMap(e, t);
        case Set:
          return this.parseSet(e, t);
      }
      if (r === Promise || t instanceof Promise) return this.parsePromise(e, t);
      let s = this.features;
      if (16 & s)
        switch (r) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e, t);
        }
      if (
        1 & s &&
        "undefined" != typeof AggregateError &&
        (r === AggregateError || t instanceof AggregateError)
      )
        return this.parseAggregateError(e, t);
      if (t instanceof Error) return this.parseError(e, t);
      if (Symbol.iterator in t || Symbol.asyncIterator in t)
        return this.parsePlainObject(e, t, !!r);
      throw new nr(t);
    }
    parseFunction(e) {
      let t = this.getReference(e);
      if (0 !== t.type) return t.value;
      let r = this.parsePlugin(t.value, e);
      if (r) return r;
      throw new nr(e);
    }
    parse(e) {
      switch (typeof e) {
        case "boolean":
          return e ? Mt : Lt;
        case "undefined":
          return $t;
        case "string":
          return Zt(e);
        case "number":
          return (function (e) {
            switch (e) {
              case Number.POSITIVE_INFINITY:
                return qt;
              case Number.NEGATIVE_INFINITY:
                return Ut;
            }
            return e != e
              ? Vt
              : Object.is(e, -0)
                ? Bt
                : Ft(0, jt, e, jt, jt, jt, jt, jt, jt, jt, jt, jt);
          })(e);
        case "bigint":
          return Ft(3, jt, "" + e, jt, jt, jt, jt, jt, jt, jt, jt, jt);
        case "object":
          if (e) {
            let t = this.getReference(e);
            return 0 === t.type ? this.parseObject(t.value, e) : t.value;
          }
          return Wt;
        case "symbol":
          return this.parseWellKnownSymbol(e);
        case "function":
          return this.parseFunction(e);
        default:
          throw new nr(e);
      }
    }
    parseTop(e) {
      try {
        return this.parse(e);
      } catch (t) {
        throw t instanceof ar ? t : new ar(t);
      }
    }
  },
  zr = class extends Nr {
    constructor(e) {
      super(e),
        (this.alive = true),
        (this.pending = 0),
        (this.initial = true),
        (this.buffer = []),
        (this.onParseCallback = e.onParse),
        (this.onErrorCallback = e.onError),
        (this.onDoneCallback = e.onDone);
    }
    onParseInternal(e, t) {
      try {
        this.onParseCallback(e, t);
      } catch (r) {
        this.onError(r);
      }
    }
    flush() {
      for (let e = 0, t = this.buffer.length; e < t; e++)
        this.onParseInternal(this.buffer[e], false);
    }
    onParse(e) {
      this.initial ? this.buffer.push(e) : this.onParseInternal(e, false);
    }
    onError(e) {
      if (!this.onErrorCallback) throw e;
      this.onErrorCallback(e);
    }
    onDone() {
      this.onDoneCallback && this.onDoneCallback();
    }
    pushPendingState() {
      this.pending++;
    }
    popPendingState() {
      --this.pending <= 0 && this.onDone();
    }
    parseProperties(e) {
      let t = Object.entries(e),
        r = [],
        a = [];
      for (let n = 0, i = t.length; n < i; n++) r.push(wt(t[n][0])), a.push(this.parse(t[n][1]));
      let s = Symbol.iterator;
      return (
        s in e &&
          (r.push(this.parseWellKnownSymbol(s)),
          a.push(Xt(this.parseIteratorFactory(), this.parse(yr(e))))),
        (s = Symbol.asyncIterator),
        s in e &&
          (r.push(this.parseWellKnownSymbol(s)),
          a.push(
            Qt(
              this.parseAsyncIteratorFactory(),
              this.parse(
                (function (e) {
                  let t = gr(),
                    a = e[Symbol.asyncIterator]();
                  return (
                    (async function e() {
                      try {
                        let r = await a.next();
                        r.done ? t.return(r.value) : (t.next(r.value), await e());
                      } catch (r) {
                        t.throw(r);
                      }
                    })().catch(() => {}),
                    t
                  );
                })(e),
              ),
            ),
          )),
        (s = Symbol.toStringTag),
        s in e && (r.push(this.parseWellKnownSymbol(s)), a.push(Zt(e[s]))),
        (s = Symbol.isConcatSpreadable),
        s in e && (r.push(this.parseWellKnownSymbol(s)), a.push(e[s] ? Mt : Lt)),
        { k: r, v: a, s: r.length }
      );
    }
    handlePromiseSuccess(e, t) {
      let r = this.parseWithError(t);
      r &&
        this.onParse(
          Ft(23, e, jt, jt, jt, jt, jt, jt, [this.parseSpecialReference(2), r], jt, jt, jt),
        ),
        this.popPendingState();
    }
    handlePromiseFailure(e, t) {
      if (this.alive) {
        let r = this.parseWithError(t);
        r &&
          this.onParse(
            Ft(24, e, jt, jt, jt, jt, jt, jt, [this.parseSpecialReference(3), r], jt, jt, jt),
          );
      }
      this.popPendingState();
    }
    parsePromise(e, t) {
      let r = this.createIndex({});
      return (
        t.then(this.handlePromiseSuccess.bind(this, r), this.handlePromiseFailure.bind(this, r)),
        this.pushPendingState(),
        this.createPromiseConstructorNode(e, r)
      );
    }
    parsePlugin(e, t) {
      let r = this.plugins;
      if (r)
        for (let a = 0, s = r.length; a < s; a++) {
          let s = r[a];
          if (s.parse.stream && s.test(t)) return Yt(e, s.tag, s.parse.stream(t, this, { id: e }));
        }
      return jt;
    }
    parseStream(e, t) {
      let r = er(e, this.parseSpecialReference(4), []);
      return (
        this.pushPendingState(),
        t.on({
          next: (t) => {
            if (this.alive) {
              let r = this.parseWithError(t);
              r && this.onParse(Ft(32, e, jt, jt, jt, jt, jt, jt, jt, r, jt, jt));
            }
          },
          throw: (t) => {
            if (this.alive) {
              let r = this.parseWithError(t);
              r && this.onParse(Ft(33, e, jt, jt, jt, jt, jt, jt, jt, r, jt, jt));
            }
            this.popPendingState();
          },
          return: (t) => {
            if (this.alive) {
              let r = this.parseWithError(t);
              r && this.onParse(Ft(34, e, jt, jt, jt, jt, jt, jt, jt, r, jt, jt));
            }
            this.popPendingState();
          },
        }),
        r
      );
    }
    parseWithError(e) {
      try {
        return this.parse(e);
      } catch (t) {
        return this.onError(t), jt;
      }
    }
    start(e) {
      let t = this.parseWithError(e);
      t &&
        (this.onParseInternal(t, true),
        (this.initial = false),
        this.flush(),
        this.pending <= 0 && this.destroy());
    }
    destroy() {
      this.alive && (this.onDone(), (this.alive = false));
    }
    isAlive() {
      return this.alive;
    }
  },
  Pr = class extends zr {
    constructor() {
      super(...arguments), (this.mode = "cross");
    }
  };
var Ir = {};
function Ar(e) {
  let t = gr(),
    r = e.getReader();
  return (
    (async function e() {
      try {
        let a = await r.read();
        a.done ? t.return(a.value) : (t.next(a.value), await e());
      } catch (a) {
        t.throw(a);
      }
    })().catch(() => {}),
    t
  );
}
var Tr = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [
      {
        tag: "seroval-plugins/web/ReadableStreamFactory",
        test: (e) => e === Ir,
        parse: { sync() {}, async: async () => await Promise.resolve(void 0), stream() {} },
        serialize: (e, t) =>
          t.createFunction(
            ["d"],
            "new ReadableStream({start:" +
              t.createEffectfulFunction(
                ["c"],
                "d.on({next:" +
                  t.createEffectfulFunction(["v"], "c.enqueue(v)") +
                  ",throw:" +
                  t.createEffectfulFunction(["v"], "c.error(v)") +
                  ",return:" +
                  t.createEffectfulFunction([], "c.close()") +
                  "})",
              ) +
              "})",
          ),
        deserialize: () => Ir,
      },
    ],
    test: (e) => "undefined" != typeof ReadableStream && e instanceof ReadableStream,
    parse: {
      sync: (e, t) => ({ factory: t.parse(Ir), stream: t.parse(gr()) }),
      async: async (e, t) => ({ factory: await t.parse(Ir), stream: await t.parse(Ar(e)) }),
      stream: (e, t) => ({ factory: t.parse(Ir), stream: t.parse(Ar(e)) }),
    },
    serialize: (e, t) => "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")",
    deserialize(e, t) {
      let r = t.deserialize(e.stream);
      return new ReadableStream({
        start(e) {
          r.on({
            next(t) {
              e.enqueue(t);
            },
            throw(t) {
              e.error(t);
            },
            return() {
              e.close();
            },
          });
        },
      });
    },
  },
  Cr = Tr;
const _r = Pt({
  tag: "tanstack-start:seroval-plugins/Error",
  test: (e) => e instanceof Error,
  parse: {
    sync: (e, t) => ({ message: t.parse(e.message) }),
    async: async (e, t) => ({ message: await t.parse(e.message) }),
    stream: (e, t) => ({ message: t.parse(e.message) }),
  },
  serialize: (e, t) => "new Error(" + t.serialize(e.message) + ")",
  deserialize: (e, t) => new Error(t.deserialize(e.message)),
});
function Or(e) {
  const t = { i: e.id, u: e.updatedAt, s: e.status },
    r = [
      ["__beforeLoadContext", "b"],
      ["loaderData", "l"],
      ["error", "e"],
      ["ssr", "ssr"],
    ];
  for (const [a, s] of r) void 0 !== e[a] && (t[s] = e[a]);
  return t;
}
function jr(e, t) {
  e.ssr = { manifest: t };
  const r = new Map();
  let a = false;
  const s = () => {
    return a
      ? ""
      : ((a = true),
        (null == (e = "tsr") ? `${Rt}=${Rt}||[]` : `(${Rt}=${Rt}||{})["${wt(e)}"]=[]`) +
          ';self.$_TSR={c:()=>{document.querySelectorAll(".\\\\$tsr").forEach(e=>{e.remove()})}};\n;');
    var e;
  };
  let n = false;
  const i = [];
  e.serverSsr = {
    injectedHtml: [],
    injectHtml: (t) => {
      const r = Promise.resolve().then(t);
      return (
        e.serverSsr.injectedHtml.push(r),
        e.emit({ type: "onInjectedHtml", promise: r }),
        r.then(() => {})
      );
    },
    injectScript: (t) =>
      e.serverSsr.injectHtml(async () => {
        const e = await t();
        return `<script class='$tsr'>${s()}${e};if (typeof $_TSR !== 'undefined') $_TSR.c()<\/script>`;
      }),
    dehydrate: async () => {
      var t, a, s;
      Ve(!n);
      let i = e.state.matches;
      e.isShell() && (i = i.slice(0, 1));
      const o = i.map(Or),
        l = { manifest: e.ssr.manifest, matches: o },
        c = null == (t = i[i.length - 1]) ? void 0 : t.id;
      c && (l.lastMatchId = c),
        (l.dehydratedData = await (null == (s = (a = e.options).dehydrate) ? void 0 : s.call(a))),
        (n = true);
      const d = (function () {
        let e, t;
        const r = new Promise((r, a) => {
          (e = r), (t = a);
        });
        return (
          (r.status = "pending"),
          (r.resolve = (t) => {
            (r.status = "resolved"), (r.value = t), e(t);
          }),
          (r.reject = (e) => {
            (r.status = "rejected"), t(e);
          }),
          r
        );
      })();
      !(function (e, t) {
        let r = At(t.plugins),
          a = new Pr({
            plugins: r,
            refs: t.refs,
            disabledFeatures: t.disabledFeatures,
            onParse(e, s) {
              let n,
                i = new kr({
                  plugins: r,
                  features: a.features,
                  scopeId: t.scopeId,
                  markedRefs: a.marked,
                });
              try {
                n = i.serializeTop(e);
              } catch (o) {
                return void (t.onError && t.onError(o));
              }
              t.onSerialize(n, s);
            },
            onError: t.onError,
            onDone: t.onDone,
          });
        a.start(e), a.destroy.bind(a);
      })(l, {
        refs: r,
        plugins: [Cr, _r],
        onSerialize: (t, r) => {
          const a = r ? '$_TSR["router"]=' + t : t;
          e.serverSsr.injectScript(() => a);
        },
        scopeId: "tsr",
        onDone: () => d.resolve(""),
        onError: (e) => d.reject(e),
      }),
        e.serverSsr.injectHtml(() => d);
    },
    isDehydrated: () => n,
    onRenderFinished: (e) => i.push(e),
    setRenderFinished: () => {
      i.forEach((e) => e());
    },
  };
}
function Fr(e, t) {
  try {
    return t in e;
  } catch {
    return false;
  }
}
var Dr = Object.defineProperty,
  Mr = (e, t, r) => (
    ((e, t, r) => {
      t in e
        ? Dr(e, t, { enumerable: true, configurable: true, writable: true, value: r })
        : (e[t] = r);
    })(e, "symbol" != typeof t ? t + "" : t, r),
    r
  );
class Lr extends Error {
  constructor(e, t = {}) {
    super(e, t),
      Mr(this, "statusCode", 500),
      Mr(this, "fatal", false),
      Mr(this, "unhandled", false),
      Mr(this, "statusMessage"),
      Mr(this, "data"),
      Mr(this, "cause"),
      t.cause && !this.cause && (this.cause = t.cause);
  }
  toJSON() {
    const e = { message: this.message, statusCode: Gr(this.statusCode, 500) };
    return (
      this.statusMessage && (e.statusMessage = Hr(this.statusMessage)),
      void 0 !== this.data && (e.data = this.data),
      e
    );
  }
}
function $r(e, t, r) {
  if (
    !(function (e, t, r) {
      if ("string" == typeof t) {
        if (e.method === t) return true;
      } else if (t.includes(e.method)) return true;
      return false;
    })(e, t)
  )
    throw (function (e) {
      if ("string" == typeof e) return new Lr(e);
      if (
        (function (e) {
          return true === e?.constructor?.__h3_error__;
        })(e)
      )
        return e;
      const t = new Lr(e.message ?? e.statusMessage ?? "", { cause: e.cause || e });
      if (Fr(e, "stack"))
        try {
          Object.defineProperty(t, "stack", { get: () => e.stack });
        } catch {
          try {
            t.stack = e.stack;
          } catch {}
        }
      if (
        (e.data && (t.data = e.data),
        e.statusCode
          ? (t.statusCode = Gr(e.statusCode, t.statusCode))
          : e.status && (t.statusCode = Gr(e.status, t.statusCode)),
        e.statusMessage
          ? (t.statusMessage = e.statusMessage)
          : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage)
      ) {
        const e = t.statusMessage;
        Hr(t.statusMessage) !== e &&
          console.warn(
            "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.",
          );
      }
      return (
        void 0 !== e.fatal && (t.fatal = e.fatal),
        void 0 !== e.unhandled && (t.unhandled = e.unhandled),
        t
      );
    })({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
}
function Wr(e) {
  return (
    e.web?.request ||
    new Request(
      (function (e, t = {}) {
        const r = (function (e, t = {}) {
            if (t.xForwardedHost) {
              const t = e.node.req.headers["x-forwarded-host"];
              if (t) return t;
            }
            return e.node.req.headers.host || "localhost";
          })(e, t),
          a = (function (e, t = {}) {
            return (false !== t.xForwardedProto &&
              "https" === e.node.req.headers["x-forwarded-proto"]) ||
              e.node.req.connection?.encrypted
              ? "https"
              : "http";
          })(e, t),
          s = (e.node.req.originalUrl || e.path).replace(/^[/\\]+/g, "/");
        return new URL(s, `${a}://${r}`);
      })(e),
      { duplex: "half", method: e.method, headers: e.headers, body: Ur(e) },
    )
  );
}
Mr(Lr, "__h3_error__", true);
const Br = Symbol.for("h3RawBody"),
  qr = ["PATCH", "POST", "PUT", "DELETE"];
function Ur(e) {
  if (!qr.includes(e.method)) return;
  const t = e.web?.request?.body || e._requestBody;
  if (t) return t;
  return Br in e.node.req ||
    "rawBody" in e.node.req ||
    "body" in e.node.req ||
    "__unenv__" in e.node.req
    ? new ReadableStream({
        async start(t) {
          const r = await (function (e, t = "utf8") {
            $r(e, qr);
            const r =
              e._requestBody ||
              e.web?.request?.body ||
              e.node.req[Br] ||
              e.node.req.rawBody ||
              e.node.req.body;
            if (r) {
              const e = Promise.resolve(r).then((e) =>
                Buffer.isBuffer(e)
                  ? e
                  : "function" == typeof e.pipeTo
                    ? new Promise((t, r) => {
                        const a = [];
                        e.pipeTo(
                          new WritableStream({
                            write(e) {
                              a.push(e);
                            },
                            close() {
                              t(Buffer.concat(a));
                            },
                            abort(e) {
                              r(e);
                            },
                          }),
                        ).catch(r);
                      })
                    : "function" == typeof e.pipe
                      ? new Promise((t, r) => {
                          const a = [];
                          e.on("data", (e) => {
                            a.push(e);
                          })
                            .on("end", () => {
                              t(Buffer.concat(a));
                            })
                            .on("error", r);
                        })
                      : e.constructor === Object
                        ? Buffer.from(JSON.stringify(e))
                        : e instanceof URLSearchParams
                          ? Buffer.from(e.toString())
                          : Buffer.from(e),
              );
              return t ? e.then((e) => e.toString(t)) : e;
            }
            if (
              !Number.parseInt(e.node.req.headers["content-length"] || "") &&
              !String(e.node.req.headers["transfer-encoding"] ?? "")
                .split(",")
                .map((e) => e.trim())
                .filter(Boolean)
                .includes("chunked")
            )
              return Promise.resolve(void 0);
            const a = (e.node.req[Br] = new Promise((t, r) => {
              const a = [];
              e.node.req
                .on("error", (e) => {
                  r(e);
                })
                .on("data", (e) => {
                  a.push(e);
                })
                .on("end", () => {
                  t(Buffer.concat(a));
                });
            }));
            return t ? a.then((e) => e.toString(t)) : a;
          })(e, false);
          r && t.enqueue(r), t.close();
        },
      })
    : new ReadableStream({
        start: (t) => {
          e.node.req.on("data", (e) => {
            t.enqueue(e);
          }),
            e.node.req.on("end", () => {
              t.close();
            }),
            e.node.req.on("error", (e) => {
              t.error(e);
            });
        },
      });
}
const Vr = /[^\u0009\u0020-\u007E]/g;
function Hr(e = "") {
  return e.replace(Vr, "");
}
function Gr(e, t = 200) {
  return e ? ("string" == typeof e && (e = Number.parseInt(e, 10)), e < 100 || e > 999 ? t : e) : t;
}
function Kr(e) {
  if (Array.isArray(e)) return e.flatMap((e) => Kr(e));
  if ("string" != typeof e) return [];
  const t = [];
  let r,
    a,
    s,
    n,
    i,
    o = 0;
  const l = () => {
    for (; o < e.length && /\s/.test(e.charAt(o)); ) o += 1;
    return o < e.length;
  };
  for (; o < e.length; ) {
    for (r = o, i = false; l(); )
      if (((a = e.charAt(o)), "," === a)) {
        for (
          s = o, o += 1, l(), n = o;
          o < e.length && ((a = e.charAt(o)), "=" !== a && ";" !== a && "," !== a);

        )
          o += 1;
        o < e.length && "=" === e.charAt(o)
          ? ((i = true), (o = n), t.push(e.slice(r, s)), (r = o))
          : (o = s + 1);
      } else o += 1;
    (!i || o >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function Zr(e, t) {
  for (const [r, a] of t.headers)
    "set-cookie" === r ? e.node.res.appendHeader(r, Kr(a)) : e.node.res.setHeader(r, a);
  if (
    (t.status && (e.node.res.statusCode = Gr(t.status, e.node.res.statusCode)),
    t.statusText && (e.node.res.statusMessage = Hr(t.statusText)),
    t.redirected && e.node.res.setHeader("location", t.url),
    t.body)
  )
    return (function (e, t) {
      if (!t || "object" != typeof t) throw new Error("[h3] Invalid stream provided.");
      if (((e.node.res._data = t), !e.node.res.socket))
        return (e._handled = true), Promise.resolve();
      if (Fr(t, "pipeTo") && "function" == typeof t.pipeTo)
        return t
          .pipeTo(
            new WritableStream({
              write(t) {
                e.node.res.write(t);
              },
            }),
          )
          .then(() => {
            e.node.res.end();
          });
      if (Fr(t, "pipe") && "function" == typeof t.pipe)
        return new Promise((r, a) => {
          t.pipe(e.node.res),
            t.on &&
              (t.on("end", () => {
                e.node.res.end(), r();
              }),
              t.on("error", (e) => {
                a(e);
              })),
            e.node.res.on("close", () => {
              t.abort && t.abort();
            });
        });
      throw new Error("[h3] Invalid or incompatible stream provided.");
    })(e, t.body);
  e.node.res.end();
}
"undefined" == typeof setImmediate || setImmediate;
var Jr = Object.defineProperty,
  Yr = (e, t, r) => (
    ((e, t, r) => {
      t in e
        ? Jr(e, t, { enumerable: true, configurable: true, writable: true, value: r })
        : (e[t] = r);
    })(e, "symbol" != typeof t ? t + "" : t, r),
    r
  );
class Xr {
  constructor(e, t) {
    Yr(this, "__is_event__", true),
      Yr(this, "node"),
      Yr(this, "web"),
      Yr(this, "context", {}),
      Yr(this, "_method"),
      Yr(this, "_path"),
      Yr(this, "_headers"),
      Yr(this, "_requestBody"),
      Yr(this, "_handled", false),
      Yr(this, "_onBeforeResponseCalled"),
      Yr(this, "_onAfterResponseCalled"),
      (this.node = { req: e, res: t });
  }
  get method() {
    return (
      this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method
    );
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    return (
      this._headers ||
        (this._headers = (function (e) {
          const t = new Headers();
          for (const [r, a] of Object.entries(e))
            if (Array.isArray(a)) for (const e of a) t.append(r, e);
            else a && t.set(r, a);
          return t;
        })(this.node.req.headers)),
      this._headers
    );
  }
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(e) {
    return Promise.resolve(e).then((e) => Zr(this, e));
  }
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  get req() {
    return this.node.req;
  }
  get res() {
    return this.node.res;
  }
}
function Qr(e) {
  return e ? (Array.isArray(e) ? e : [e]) : void 0;
}
const ea = new AsyncLocalStorage();
function ta() {
  const e = ea.getStore();
  if (!e)
    throw new Error(
      "No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.",
    );
  return e;
}
const ra = Symbol("$HTTPEvent");
function aa(e) {
  return function (...t) {
    const r = t[0];
    var a;
    return (
      "object" == typeof (a = r) &&
      (a instanceof Xr ||
        (null == a ? void 0 : a[ra]) instanceof Xr ||
        true === (null == a ? void 0 : a.__is_event__))
        ? (t[0] = r instanceof Xr || r.__is_event__ ? r : r[ra])
        : t.unshift(ta()),
      e(...t)
    );
  };
}
const sa = aa(function (e) {
    return e.node.res.statusCode;
  }),
  na = aa(function (e) {
    return e.node.res.getHeaders();
  });
const ia = "tanstack-start-route-tree:v",
  oa = "tanstack-start-manifest:v",
  la = "tanstack-start-server-fn-manifest:v";
async function ca(e) {
  switch (e) {
    case ia:
      return await Promise.resolve().then(() => zn);
    case oa:
      return await import("./_tanstack-start-manifest_v-B9MaEW5w.mjs");
    case la:
      return await import("./_tanstack-start-server-fn-manifest_v-FmFgRqLi.mjs");
    default:
      throw new Error(`Unknown virtual module: ${e}`);
  }
}
async function da(e, t) {
  if (t && true === t.__serverFn && t.functionId) {
    const e = await ua(t.functionId);
    return async (t, r) => (await e(t ?? {}, r)).result;
  }
  return t;
}
async function ua(e) {
  const { default: t } = await ca(la),
    r = t[e];
  if (!r)
    throw (
      (console.info("serverFnManifest", t), new Error("Server function info not found for " + e))
    );
  const a = await r.importer();
  if (!a)
    throw (
      (console.info("serverFnInfo", r), new Error("Server function module not resolved for " + e))
    );
  const s = a[r.functionName];
  if (!s)
    throw (
      (console.info("serverFnInfo", r),
      console.info("fnModule", a),
      new Error(`Server function module export not resolved for serverFn ID: ${e}`))
    );
  return s;
}
async function pa(e) {
  const t = pt.parse(e);
  return (
    await (async function (e, t) {
      const r = { "": e };
      return (
        await (async function e(r, a) {
          const s = r[a];
          s && "object" == typeof s && (await Promise.all(Object.keys(s).map((t) => e(s, t)))),
            t && (r[a] = await t(a, r[a]));
        })(r, ""),
        r[""]
      );
    })(t, da),
    t
  );
}
function fa(e) {
  const { headers: t, ...r } = e;
  return new Response(JSON.stringify(r), {
    status: 200,
    headers: { "Content-Type": "application/json", ...(t || {}) },
  });
}
const ha = "X-TSS_SHELL";
function ma(e) {
  return async ({ next: t, ...r }) => {
    const a = await e(r);
    return a ? { response: a } : t(r);
  };
}
function ga(e) {
  return ya(e) ? { response: e } : e;
}
function ya(e) {
  return e instanceof Response || lt(e);
}
function va(e, t) {
  const r = t || {},
    a = {
      isRoot: false,
      path: "",
      id: "",
      fullPath: "",
      to: "",
      options: r,
      parentRoute: void 0,
      _types: {},
      middleware: (e) => va(void 0, { ...r, middleware: e }),
      methods: (e) => {
        const r = "function" == typeof e ? e(wa()) : e;
        return va(void 0, { ...t, methods: r });
      },
      update: (e) => va(void 0, { ...r, ...e }),
      init: (e) => {
        var t;
        r.originalIndex = e.originalIndex;
        const s = !r.path && !r.id;
        if (((a.parentRoute = null == (t = r.getParentRoute) ? void 0 : t.call(r)), s)) a.path = ot;
        else if (!a.parentRoute)
          throw new Error(
            "Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a ServerRoute instance.",
          );
        let n = s ? ot : r.path;
        n && "/" !== n && (n = Je(n));
        const i = r.id || n;
        let o = s ? ot : Ke([a.parentRoute.id === ot ? "" : a.parentRoute.id, i]);
        n === ot && (n = "/"), o !== ot && (o = Ke(["/", o]));
        const l = o === ot ? "/" : Ke([a.parentRoute.fullPath, n]);
        (a.path = n), (a.id = o), (a.fullPath = l), (a.to = l), (a.isRoot = s);
      },
      _addFileChildren: (e) => (
        Array.isArray(e) && (a.children = e),
        "object" == typeof e && null !== e && (a.children = Object.values(e)),
        a
      ),
      _addFileTypes: () => a,
    };
  return a;
}
const ba = va,
  wa = (e) => ({
    _options: e || {},
    _types: {},
    middleware: (t) => wa({ ...e, middlewares: t }),
    handler: (t) => wa({ ...e, handler: t }),
  }),
  xa = h.Literal("dark", "light", "system");
h.Literal("dark", "light");
const Sa = m.createContext({
    theme: "system",
    actualTheme: "light",
    setTheme: () => null,
    isHydrated: false,
  }),
  Ra = ({
    attribute: e = "class",
    children: t,
    defaultTheme: r = "system",
    disableTransitionOnChange: a = false,
    enableSystem: s = true,
    storageKey: n = "theme",
    ...i
  }) => {
    const [o, l] = m.useState(r),
      [c, p] = m.useState(false);
    m.useEffect(() => {
      const e = f.fromNullable(localStorage.getItem(n)).pipe(
        f.flatMap((e) => h.decodeUnknownOption(xa)(e)),
        f.getOrElse(() => r),
      );
      l(e), p(true);
    }, [r, n]);
    const g = m.useMemo(
      () =>
        c
          ? "system" === o && s
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
            : "system" === o
              ? "light"
              : o
          : "dark" === r
            ? "dark"
            : "light",
      [o, c, s, r],
    );
    m.useEffect(() => {
      if (!c) return;
      const t = document.documentElement,
        r = a
          ? (() => {
              const e = document.createElement("style");
              return (
                e.appendChild(
                  document.createTextNode(
                    "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
                  ),
                ),
                document.head.appendChild(e),
                () => {
                  window.getComputedStyle(document.body),
                    setTimeout(() => {
                      document.head.removeChild(e);
                    }, 1);
                }
              );
            })()
          : null;
      "class" === e
        ? (t.classList.remove("light", "dark"), t.classList.add(g))
        : t.setAttribute("data-theme", g),
        (t.style.colorScheme = g),
        r?.();
    }, [g, c, e, a]),
      m.useEffect(() => {
        if (!c || !s || "system" !== o) return;
        const e = window.matchMedia("(prefers-color-scheme: dark)"),
          t = () => {
            l((e) => e);
          };
        return (
          e.addEventListener("change", t),
          () => {
            e.removeEventListener("change", t);
          }
        );
      }, [o, c, s]),
      m.useEffect(() => {
        if (!c) return;
        const e = (e) => {
          if (e.key !== n) return;
          const t = f.fromNullable(e.newValue).pipe(
            f.flatMap((e) => h.decodeUnknownOption(xa)(e)),
            f.getOrElse(() => r),
          );
          l(t);
        };
        return (
          window.addEventListener("storage", e),
          () => {
            window.removeEventListener("storage", e);
          }
        );
      }, [n, r, c]);
    const y = m.useCallback(
        (e) => {
          if (!c) return;
          const t = f.fromNullable(e).pipe(
            f.flatMap((e) => h.decodeUnknownOption(xa)(e)),
            f.getOrElse(() => r),
          );
          l(t);
          try {
            localStorage.setItem(n, t);
          } catch {}
        },
        [n, r, c],
      ),
      v = m.useMemo(() => ({ theme: o, actualTheme: g, setTheme: y, isHydrated: c }), [o, g, y, c]);
    return jsxs(m.Fragment, {
      children: [
        jsx("script", {
          suppressHydrationWarning: true,
          dangerouslySetInnerHTML: {
            __html:
              "\n  (function() {\n    try {\n      var theme = localStorage.getItem('theme') || 'system';\n      var actualTheme = theme;\n\n      if (theme === 'system') {\n        actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n      }\n\n      document.documentElement.classList.remove('light', 'dark');\n      document.documentElement.classList.add(actualTheme);\n      document.documentElement.style.colorScheme = actualTheme;\n    } catch (e) {\n      document.documentElement.classList.add('light');\n      document.documentElement.style.colorScheme = 'light';\n    }\n  })();\n",
          },
        }),
        jsx(Sa.Provider, { ...i, value: v, children: t }),
      ],
    });
  },
  Ea = flow(clsx, twMerge);
Object.assign(
  ({ className: e, ...t }) =>
    jsx(x.Root, {
      "data-slot": "avatar",
      className: Ea("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
      ...t,
    }),
  {
    Image: ({ className: e, ...t }) =>
      jsx(x.Image, {
        "data-slot": "avatar-image",
        className: Ea("aspect-square size-full", e),
        ...t,
      }),
    Fallback: ({ className: e, ...t }) =>
      jsx(x.Fallback, {
        "data-slot": "avatar-fallback",
        className: Ea("flex size-full items-center justify-center rounded-full bg-muted", e),
        ...t,
      }),
  },
),
  cva(
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
  );
const ka = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none active:scale-95 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 cursor-pointer",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Na = ({
    asChild: e = false,
    children: t,
    className: r,
    disabled: a = false,
    loading: s = false,
    size: n,
    type: i = "button",
    variant: o,
    ...l
  }) =>
    jsxs(e ? Slot : "button", {
      type: i,
      "data-slot": "button",
      className: Ea(ka({ variant: o, size: n, className: r })),
      disabled: s || a,
      ...l,
      children: [s && jsx(Loader2Icon, { className: "h-4 w-4 animate-spin" }), t],
    });
Na.variants = ka;
Object.assign(
  ({ className: e, ...t }) =>
    jsx("div", {
      "data-slot": "card",
      className: Ea("rounded-xl border bg-card text-card-foreground shadow-sm", e),
      ...t,
    }),
  {
    Header: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "card-header",
        className: Ea("flex flex-col gap-1.5 p-6", e),
        ...t,
      }),
    Title: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "card-title",
        className: Ea("leading-none font-semibold tracking-tight", e),
        ...t,
      }),
    Description: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "card-description",
        className: Ea("text-sm text-muted-foreground", e),
        ...t,
      }),
    Content: ({ className: e, ...t }) =>
      jsx("div", { "data-slot": "card-content", className: Ea("p-6 pt-0", e), ...t }),
    Footer: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "card-footer",
        className: Ea("flex items-center p-6 pt-0", e),
        ...t,
      }),
  },
);
m.forwardRef(({ className: e, ...t }, r) =>
  jsx(j.Root, {
    ref: r,
    className: Ea(
      "peer h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary shadow focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e,
    ),
    ...t,
    children: jsx(j.Indicator, {
      className: Ea("flex items-center justify-center text-current"),
      children: jsx(CheckIcon, { className: "h-4 w-4" }),
    }),
  }),
).displayName = j.Root.displayName;
Object.assign(({ ...e }) => jsx(F.Root, { "data-slot": "collapsible", ...e }), {
  Trigger: ({ ...e }) => jsx(F.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e }),
  Content: ({ className: e, ...t }) =>
    jsx(F.CollapsibleContent, {
      className: Ea(
        "overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up",
        e,
      ),
      ...t,
    }),
});
const za = ({ ...e }) => jsx(D.Trigger, { "data-slot": "dialog-trigger", ...e }),
  Pa = ({ ...e }) => jsx(D.Portal, { "data-slot": "dialog-portal", ...e }),
  Ia = ({ className: e, ...t }) =>
    jsx(D.Overlay, {
      "data-slot": "dialog-overlay",
      className: Ea(
        "fixed inset-0 z-50 bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  Aa = cva(
    "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto",
    {
      variants: {
        size: {
          default: "max-w-[calc(100%-2rem)] sm:max-w-lg",
          lg: "max-w-[calc(100%-2rem)] sm:max-w-2xl",
          xl: "max-w-[calc(100%-2rem)] sm:max-w-4xl",
          full: "max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-4rem)] h-[calc(100vh-4rem)]",
          screen:
            "!top-0 !left-0 !right-0 !bottom-0 !translate-x-0 !translate-y-0 !inset-0 !w-screen !h-screen !max-w-none !max-h-none !min-w-full !min-h-full !p-0 !m-0 rounded-none border-none shadow-none",
        },
        variant: {
          default: "border-border",
          destructive: "border-destructive",
          warning: "border-warning",
        },
      },
      defaultVariants: { size: "default", variant: "default" },
    },
  ),
  Ta = Object.assign(({ ...e }) => jsx(D.Root, { "data-slot": "dialog", ...e }), {
    Trigger: za,
    Portal: Pa,
    Close: ({ ...e }) => jsx(D.Close, { "data-slot": "dialog-close", ...e }),
    Overlay: Ia,
    Content: ({ children: e, className: t, size: r, variant: a, ...s }) =>
      jsxs(Pa, {
        "data-slot": "dialog-portal",
        children: [
          jsx(Ia, {}),
          jsxs(D.Content, {
            "data-slot": "dialog-content",
            className: Ea(Aa({ size: r, variant: a, className: t })),
            ...s,
            children: [
              e,
              jsxs(D.Close, {
                className:
                  "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                children: [
                  jsx(XIcon, {}),
                  jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      }),
    Header: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "dialog-header",
        className: Ea("flex flex-col gap-2 text-center sm:text-left", e),
        ...t,
      }),
    Footer: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "dialog-footer",
        className: Ea("mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
        ...t,
      }),
    Title: ({ className: e, ...t }) =>
      jsx(D.Title, {
        "data-slot": "dialog-title",
        className: Ea("text-lg leading-none font-semibold", e),
        ...t,
      }),
    Description: ({ className: e, ...t }) =>
      jsx(D.Description, {
        "data-slot": "dialog-description",
        className: Ea("text-muted-foreground", e),
        ...t,
      }),
    CancelButton: (e) =>
      jsx(za, {
        asChild: true,
        children: jsx(Na, { variant: "secondary", ...e, children: e.children ?? "Cancel" }),
      }),
  });
Object.assign(({ ...e }) => jsx(M.Root, { "data-slot": "dropdown-menu", ...e }), {
  Portal: ({ ...e }) => jsx(M.Portal, { "data-slot": "dropdown-menu-portal", ...e }),
  Trigger: ({ ...e }) => jsx(M.Trigger, { "data-slot": "dropdown-menu-trigger", ...e }),
  Content: ({ className: e, sideOffset: t = 4, ...r }) =>
    jsx(M.Portal, {
      children: jsx(M.Content, {
        "data-slot": "dropdown-menu-content",
        sideOffset: t,
        className: Ea(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          e,
        ),
        ...r,
      }),
    }),
  Group: ({ ...e }) => jsx(M.Group, { "data-slot": "dropdown-menu-group", ...e }),
  Item: ({ className: e, inset: t, variant: r = "default", ...a }) =>
    jsx(M.Item, {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: Ea(
        "relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-red-500 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:text-red-400 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:!text-red-500 dark:data-[variant=destructive]:*:[svg]:!text-red-400",
        e,
      ),
      ...a,
    }),
  CheckboxItem: ({ checked: e = false, children: t, className: r, ...a }) =>
    jsxs(M.CheckboxItem, {
      "data-slot": "dropdown-menu-checkbox-item",
      className: Ea(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r,
      ),
      checked: e,
      ...a,
      children: [
        jsx("span", {
          className:
            "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
          children: jsx(M.ItemIndicator, { children: jsx(CheckIcon, { className: "size-4" }) }),
        }),
        t,
      ],
    }),
  RadioGroup: ({ ...e }) => jsx(M.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e }),
  RadioItem: ({ children: e, className: t, ...r }) =>
    jsxs(M.RadioItem, {
      "data-slot": "dropdown-menu-radio-item",
      className: Ea(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t,
      ),
      ...r,
      children: [
        jsx("span", {
          className:
            "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
          children: jsx(M.ItemIndicator, {
            children: jsx(CircleIcon, { className: "size-2 fill-current" }),
          }),
        }),
        e,
      ],
    }),
  Label: ({ className: e, inset: t, ...r }) =>
    jsx(M.Label, {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: Ea("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", e),
      ...r,
    }),
  Separator: ({ className: e, ...t }) =>
    jsx(M.Separator, {
      "data-slot": "dropdown-menu-separator",
      className: Ea("-mx-1 my-1 h-px bg-border", e),
      ...t,
    }),
  Shortcut: ({ className: e, ...t }) =>
    jsx("span", {
      "data-slot": "dropdown-menu-shortcut",
      className: Ea("ml-auto text-xs tracking-widest text-muted-foreground", e),
      ...t,
    }),
  Sub: ({ ...e }) => jsx(M.Sub, { "data-slot": "dropdown-menu-sub", ...e }),
  SubTrigger: ({ children: e, className: t, inset: r, ...a }) =>
    jsxs(M.SubTrigger, {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": r,
      className: Ea(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t,
      ),
      ...a,
      children: [e, jsx(ChevronRightIcon, { className: "ml-auto size-4" })],
    }),
  SubContent: ({ className: e, ...t }) =>
    jsx(M.SubContent, {
      "data-slot": "dropdown-menu-sub-content",
      className: Ea(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        e,
      ),
      ...t,
    }),
});
const Ca = cva(
    "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  ),
  _a = ({ className: e, type: t, ...r }) =>
    jsx("input", { type: t, "data-slot": "input", className: Ea(Ca({ className: e }), e), ...r });
_a.variants = Ca;
m.forwardRef(
  (
    {
      children: e,
      className: t,
      defaultValue: r,
      disabled: a = false,
      invalid: s = false,
      loading: n = false,
      placeholder: i,
      value: o,
      ...l
    },
    c,
  ) => {
    const p = Boolean(i);
    return jsxs("div", {
      className: "relative",
      children: [
        jsx(Select, {
          ref: c,
          value: o,
          defaultValue: r,
          className: Ea(
            "flex h-9 w-full items-center rounded-md border border-input bg-transparent py-2 pr-8 pl-3 text-sm shadow-xs transition-[color,box-shadow] outline-none",
            "appearance-none",
            s
              ? "border-destructive ring-destructive/20 data-[focus]:border-destructive"
              : "data-[focus]:border-ring data-[focus]:ring-[3px] data-[focus]:ring-ring/50",
            (a || n) && "cursor-not-allowed opacity-50",
            !n &&
              p &&
              ("" === o || void 0 === o) &&
              ("" === r || void 0 === r) &&
              !a &&
              "text-muted-foreground",
            t,
          ),
          invalid: s,
          disabled: a || n,
          ...l,
          children: n
            ? jsx("option", { value: "", disabled: true, children: "Loading..." })
            : jsxs(m.Fragment, {
                children: [
                  p && jsx("option", { value: "", disabled: true, hidden: true, children: i }),
                  e,
                ],
              }),
        }),
        n
          ? jsx(Loader2Icon, {
              className:
                "absolute top-1/2 right-2.5 size-4 -translate-y-1/2 animate-spin text-muted-foreground",
              "aria-hidden": "true",
            })
          : jsx(ChevronDownIcon, {
              className: "absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground",
              "aria-hidden": "true",
            }),
      ],
    });
  },
).displayName = "Select";
const Oa = cva(
    "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  ),
  ja = ({ className: e, ...t }) =>
    jsx("textarea", { className: Ea(Oa({ className: e }), e), ...t });
(ja.displayName = "Textarea"), (ja.variants = Oa);
const Fa = m__default.createContext(null),
  Da = (e) => jsx(Ta.Trigger, { ...e }),
  Ma = (e) => jsx(Ta.Portal, { ...e }),
  La = (e) => jsx(Ta.Overlay, { ...e });
Object.assign(
  ({ disabled: e = false, form: t, isDirty: r, onOpenChange: a, ...s }) => {
    const [n, i] = m.useState(false),
      [o, l] = m.useState(void 0),
      c = t ?? o,
      p = m.useMemo(() => new Store({ isDirty: false }), []),
      f = useStore(c?.store ?? p, (e) => e.isDirty),
      h = r ?? (f || n),
      {
        cancelClose: g,
        confirmClose: y,
        handleClose: v,
        showConfirmDialog: b,
      } = ((e, t = false) => {
        const [r, a] = m.useState(false),
          [s, n] = m.useState(null);
        return {
          handleClose: m.useCallback(
            (r) => {
              !t && e ? (n(() => r), a(true)) : r();
            },
            [e, t],
          ),
          showConfirmDialog: r,
          confirmClose: m.useCallback(() => {
            null !== s && s(), a(false), n(null);
          }, [s]),
          cancelClose: m.useCallback(() => {
            a(false), n(null);
          }, []),
        };
      })(h, e),
      w = m.useCallback((e) => {
        l(e);
      }, []),
      x = m.useCallback(() => {
        l(void 0);
      }, []),
      S = m.useMemo(
        () => ({
          setIsDirty: i,
          registerFormApi: w,
          unregisterFormApi: x,
          ...(void 0 !== c && { formApi: c }),
        }),
        [c, w, x],
      ),
      R = m.useCallback(
        (e) => {
          e
            ? a?.(true)
            : v(() => {
                a?.(false), c?.reset();
              });
        },
        [c, v, a],
      );
    return jsxs(Fa.Provider, {
      value: S,
      children: [
        jsx(D.Root, { "data-slot": "dialog", onOpenChange: R, ...s }),
        jsx(D.Root, {
          open: b,
          onOpenChange: (e) => {
            e || g();
          },
          children: jsxs(D.Portal, {
            children: [
              jsx(D.Overlay, {
                className:
                  "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
              }),
              jsxs(D.Content, {
                className:
                  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto max-w-[calc(100%-2rem)] sm:max-w-lg",
                children: [
                  jsxs("div", {
                    className: "flex flex-col gap-2 text-center sm:text-left",
                    children: [
                      jsx(D.Title, {
                        className: "text-lg leading-none font-semibold",
                        children: "Unsaved Changes",
                      }),
                      jsx(D.Description, {
                        className: "text-muted-foreground",
                        children:
                          "You have unsaved changes. Are you sure you want to close this dialog? Your changes will be lost.",
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                    children: [
                      jsx(Na, { variant: "secondary", onClick: g, children: "Cancel" }),
                      jsx(Na, { variant: "destructive", onClick: y, children: "Discard Changes" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  {
    Trigger: Da,
    Portal: Ma,
    Close: (e) => jsx(Ta.Close, { ...e }),
    Content: ({ overlayClassName: e, ...t }) =>
      jsxs(Ma, { children: [jsx(La, { className: e }), jsx(Ta.Content, { ...t })] }),
    Header: (e) => jsx(Ta.Header, { ...e }),
    Footer: (e) => jsx(Ta.Footer, { ...e }),
    Title: (e) => jsx(Ta.Title, { ...e }),
    Description: (e) => jsx(Ta.Description, { ...e }),
    CancelButton: (e) =>
      jsx(Da, {
        asChild: true,
        children: jsx(Na, { variant: "secondary", ...e, children: e.children ?? "Cancel" }),
      }),
  },
);
m.forwardRef(({ className: e, indicatorClassName: t, value: r, ...a }, s) =>
  jsx(B.Root, {
    ref: s,
    className: Ea("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", e),
    ...a,
    children: jsx(B.Indicator, {
      className: Ea("h-full w-full flex-1 bg-primary transition-all", t),
      style: { transform: `translateX(-${100 - (r ?? 0)}%)` },
    }),
  }),
).displayName = B.Root.displayName;
m.forwardRef(({ children: e, className: t, ...r }, a) =>
  jsxs(q.Root, {
    ref: a,
    className: Ea("relative overflow-hidden", t),
    ...r,
    children: [
      jsx(q.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
      jsx($a, {}),
      jsx(q.Corner, {}),
    ],
  }),
).displayName = q.Root.displayName;
const $a = m.forwardRef(({ className: e, orientation: t = "vertical", ...r }, a) =>
  jsx(q.ScrollAreaScrollbar, {
    ref: a,
    orientation: t,
    className: Ea(
      "flex touch-none select-none transition-colors",
      "vertical" === t && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      "horizontal" === t && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e,
    ),
    ...r,
    children: jsx(q.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }),
  }),
);
$a.displayName = q.ScrollAreaScrollbar.displayName;
const Wa = m.forwardRef(
  ({ className: e, decorative: t = true, orientation: r = "horizontal", ...a }, s) =>
    jsx(U.Root, {
      ref: s,
      decorative: t,
      orientation: r,
      className: Ea(
        "shrink-0 bg-border",
        "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]",
        e,
      ),
      ...a,
    }),
);
Wa.displayName = U.Root.displayName;
const Ba = D.Trigger,
  qa = D.Close,
  Ua = D.Portal,
  Va = m.forwardRef(({ className: e, ...t }, r) =>
    jsx(D.Overlay, {
      className: Ea(
        "fixed inset-0 z-50 bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
      ref: r,
    }),
  );
Va.displayName = D.Overlay.displayName;
const Ha = cva(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
          right:
            "inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        },
        size: { default: "", lg: "", xl: "", "2xl": "" },
      },
      compoundVariants: [
        { side: ["left", "right"], size: "default", className: "w-3/4 sm:max-w-sm" },
        { side: ["left", "right"], size: "lg", className: "w-5/6 sm:max-w-lg" },
        { side: ["left", "right"], size: "xl", className: "w-full sm:max-w-2xl" },
        { side: ["left", "right"], size: "2xl", className: "w-full sm:max-w-4xl" },
      ],
      defaultVariants: { side: "right", size: "default" },
    },
  ),
  Ga = m.forwardRef(({ children: e, className: t, side: r, size: a, ...s }, n) =>
    jsxs(Ua, {
      children: [
        jsx(Va, {}),
        jsxs(D.Content, {
          ref: n,
          className: Ea(Ha({ side: r, size: a }), t),
          ...s,
          children: [
            jsxs(D.Close, {
              className:
                "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary",
              children: [
                jsx(XIcon, { className: "h-4 w-4" }),
                jsx("span", { className: "sr-only", children: "Close" }),
              ],
            }),
            e,
          ],
        }),
      ],
    }),
  );
Ga.displayName = D.Content.displayName;
const Ka = ({ className: e, ...t }) =>
  jsx("div", { className: Ea("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
Ka.displayName = "SheetHeader";
const Za = ({ className: e, ...t }) =>
  jsx("div", {
    className: Ea("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t,
  });
Za.displayName = "SheetFooter";
const Ja = m.forwardRef(({ className: e, ...t }, r) =>
  jsx(D.Title, { ref: r, className: Ea("text-lg font-semibold text-foreground", e), ...t }),
);
Ja.displayName = D.Title.displayName;
const Ya = m.forwardRef(({ className: e, ...t }, r) =>
  jsx(D.Description, { ref: r, className: Ea("text-sm text-muted-foreground", e), ...t }),
);
(Ya.displayName = D.Description.displayName),
  Object.assign(({ children: e, ...t }) => jsx(D.Root, { ...t, children: e }), {
    Trigger: Ba,
    Close: qa,
    Content: Ga,
    Header: Ka,
    Footer: Za,
    Title: Ja,
    Description: Ya,
  });
Object.assign(
  ({ className: e, ...t }) =>
    jsx("div", {
      className: "relative w-full overflow-auto",
      children: jsx("table", {
        "data-slot": "table",
        className: Ea("w-full caption-bottom text-sm", e),
        ...t,
      }),
    }),
  {
    Header: ({ className: e, ...t }) =>
      jsx("thead", { "data-slot": "table-header", className: Ea("[&_tr]:border-b", e), ...t }),
    Body: ({ className: e, ...t }) =>
      jsx("tbody", {
        "data-slot": "table-body",
        className: Ea("[&_tr:last-child]:border-0", e),
        ...t,
      }),
    Footer: ({ className: e, ...t }) =>
      jsx("tfoot", {
        "data-slot": "table-footer",
        className: Ea("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
        ...t,
      }),
    Row: ({ className: e, ...t }) =>
      jsx("tr", {
        "data-slot": "table-row",
        className: Ea(
          "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
          e,
        ),
        ...t,
      }),
    Head: ({ className: e, ...t }) =>
      jsx("th", {
        "data-slot": "table-head",
        className: Ea(
          "h-10 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          e,
        ),
        ...t,
      }),
    Cell: ({ className: e, ...t }) =>
      jsx("td", {
        "data-slot": "table-cell",
        className: Ea(
          "px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          e,
        ),
        ...t,
      }),
    Caption: ({ className: e, ...t }) =>
      jsx("caption", {
        "data-slot": "table-caption",
        className: Ea("mt-4 text-sm text-muted-foreground", e),
        ...t,
      }),
  },
);
const Xa = V.Root,
  Qa = m.forwardRef(({ className: e, ...t }, r) =>
    jsx(V.List, {
      ref: r,
      className: Ea(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        e,
      ),
      ...t,
    }),
  );
Qa.displayName = V.List.displayName;
const es = m.forwardRef(({ className: e, ...t }, r) =>
  jsx(V.Trigger, {
    ref: r,
    className: Ea(
      "inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e,
    ),
    ...t,
  }),
);
es.displayName = V.Trigger.displayName;
const ts = m.forwardRef(({ className: e, ...t }, r) =>
  jsx(V.Content, {
    ref: r,
    className: Ea(
      "mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
      e,
    ),
    ...t,
  }),
);
(ts.displayName = V.Content.displayName), Object.assign(Xa, { List: Qa, Trigger: es, Content: ts });
const rs = ({ ...e }) => {
  const { theme: t } = (() => {
    const e = m.useContext(Sa);
    if (void 0 === e) throw new Error("useTheme must be used within a ThemeProvider");
    return e;
  })();
  return jsx(Toaster, {
    theme: t,
    className: "toaster group",
    position: "top-center",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:text-foreground group-[.toaster]:shadow-lg bg-background data-[type=error]:!bg-red-100 data-[type=error]:!border-red-200 data-[type=error]:dark:!bg-red-950 data-[type=error]:dark:!border-red-800 data-[type=success]:!bg-green-100 data-[type=success]:!border-green-200 data-[type=success]:dark:!bg-green-950 data-[type=success]:dark:!border-green-800 data-[type=warning]:!bg-amber-100 data-[type=warning]:!border-amber-200 data-[type=warning]:dark:!bg-amber-950 data-[type=warning]:dark:!border-amber-800 data-[type=info]:!bg-blue-100 data-[type=info]:!border-blue-200 data-[type=info]:dark:!bg-blue-950 data-[type=info]:dark:!border-blue-800",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        closeButton:
          "group-[.toast]:text-foreground group-data-[type=error]:!bg-red-100 group-data-[type=error]:!border-red-200 group-data-[type=error]:hover:!bg-red-200 group-data-[type=error]:hover:!border-red-300 group-data-[type=error]:dark:!bg-red-800 group-data-[type=error]:dark:!border-red-700 group-data-[type=error]:dark:hover:!bg-red-900 group-data-[type=error]:dark:hover:!border-red-800 group-data-[type=success]:!bg-green-100 group-data-[type=success]:!border-green-200 group-data-[type=success]:hover:!bg-green-200 group-data-[type=success]:hover:!border-green-300 group-data-[type=success]:dark:!bg-green-950/80 group-data-[type=success]:dark:!border-green-800 group-data-[type=success]:dark:hover:!bg-green-900 group-data-[type=success]:dark:hover:!border-green-700 group-data-[type=warning]:!bg-amber-100 group-data-[type=warning]:!border-amber-200 group-data-[type=warning]:hover:!bg-amber-200 group-data-[type=warning]:hover:!border-amber-300 group-data-[type=warning]:dark:!bg-amber-950/80 group-data-[type=warning]:dark:!border-amber-800 group-data-[type=warning]:dark:hover:!bg-amber-900 group-data-[type=warning]:dark:hover:!border-amber-700 group-data-[type=info]:!bg-blue-100 group-data-[type=info]:!border-blue-200 group-data-[type=info]:hover:!bg-blue-200 group-data-[type=info]:hover:!border-blue-300 group-data-[type=info]:dark:!bg-blue-950/80 group-data-[type=info]:dark:!border-blue-800 group-data-[type=info]:dark:hover:!bg-blue-900 group-data-[type=info]:dark:hover:!border-blue-700",
        icon: "group-data-[type=error]:text-red-500 group-data-[type=success]:text-green-500 group-data-[type=warning]:text-amber-500 group-data-[type=info]:text-blue-500",
      },
      duration: 5e3,
    },
    ...e,
  });
};
G.Root.displayName;
(m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, a) =>
  jsx(G.Content, {
    ref: a,
    sideOffset: t,
    className: Ea(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      e,
    ),
    ...r,
  }),
).displayName = G.Content.displayName),
  vt.AggregateError,
  vt.BigIntTypedArray;
const Rs = function () {
  return null;
};
class Es extends h.Class("EnvVars")({
  ENV: h
    .Literal("dev", "staging", "prod", "local")
    .annotations({ decodingFallback: () => ce.right("prod") }),
  API_URL: h.URL,
}) {}
const ks = pipe(
    le.match(false, {
      onTrue: constant({ ENV: "dev", API_URL: "http://localhost:3000/api" }),
      onFalse: constant({ ENV: "local", API_URL: "http://localhost:5173" }),
    }),
    h.decodeUnknownEither(Es),
    ce.map((e) => ({ ...e, EFFECTIVE_ENV: "local" === e.ENV ? "dev" : e.ENV })),
    ce.getOrElse((e) => {
      throw new Error(`❌ Invalid environment variables: ${TreeFormatter.formatErrorSync(e)}`);
    }),
  ),
  Ns = Atom.context({ memoMap: Atom.defaultMemoMap });
Ns.addGlobalLayer(
  Layer.provideMerge(
    Logger.pretty,
    Logger.minimumLogLevel("dev" === ks.EFFECTIVE_ENV ? LogLevel.Debug : LogLevel.Info),
  ),
);
class zs extends ge.make(
  me.make("calculatePrimes", {
    success: h.Number,
    error: h.Never,
    payload: { upperBound: h.Number },
  }),
) {}
function Ps(e) {
  return new Worker("/assets/worker-DVWN6WfY.js", { name: e?.name });
}
const Is = pe
  .layerProtocolWorker({ size: 1, concurrency: 1 })
  .pipe(he.provide(ue.layerPlatform(() => new Ps())), he.orDie);
class As extends fe.Service()("@org/WorkerClient", {
  dependencies: [Is],
  scoped: fe.gen(function* () {
    return { client: yield* pe.make(zs) };
  }),
}) {}
const Ts = Ns(As.Default),
  Cs = () => (useAtomMount(Ts), null),
  _s = ({ children: e }) =>
    jsxs("html", {
      suppressHydrationWarning: true,
      children: [
        jsx("head", { children: jsx(HeadContent, {}) }),
        jsxs("body", { suppressHydrationWarning: true, children: [e, jsx(Scripts, {})] }),
      ],
    }),
  Os = createRootRoute({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "AuthKit Example in TanStack Start" },
      ],
      links: [{ rel: "stylesheet", href: "/assets/app-BjIAfiS8.css" }],
    }),
    component: () =>
      jsxs(_s, {
        children: [
          jsxs(RegistryProvider, {
            children: [jsx(rs, {}), jsx(Ra, { children: jsx(Outlet, {}) }), jsx(Cs, {})],
          }),
          jsx(Rs, { position: "bottom-right" }),
        ],
      }),
    notFoundComponent: () => jsx("div", { children: "Not Found" }),
  }),
  js = createFileRoute("/example")({
    component: lazyRouteComponent(() => import("./example-BPVeUnSc.mjs"), "component"),
  }),
  Fs = createFileRoute("/")({
    component: lazyRouteComponent(() => import("./index-tMX5uDCZ.mjs"), "component"),
  });
class Ds extends h.transform(
  h.NonNegative.annotations({
    description: "a non-negative number of seconds to be decoded into a Duration",
  }),
  h.DurationFromSelf,
  { strict: true, decode: (e) => Ne.seconds(e), encode: (e) => Ne.toSeconds(e) },
) {}
h.compose(h.NumberFromString, Ds).annotations({
  title: "DurationFromDeltaSecondsString",
  description: "parses a string of non-negative delta-seconds into a Duration",
});
const Ms = h.Struct({
  type: h.optional(h.Literal("object", "string", "number", "integer", "boolean", "array", "null")),
  title: h.optional(h.String),
  description: h.optional(h.String),
  default: h.optional(h.Unknown),
  minLength: h.optional(h.Number),
  maxLength: h.optional(h.Number),
  pattern: h.optional(h.String),
  format: h.optional(
    h.Union(h.Literal("email", "date", "time", "date-time", "uri", "uuid"), h.String),
  ),
  minimum: h.optional(h.Number),
  maximum: h.optional(h.Number),
  exclusiveMinimum: h.optional(h.Number),
  exclusiveMaximum: h.optional(h.Number),
  multipleOf: h.optional(h.Number),
  items: h.optional(h.Unknown),
  minItems: h.optional(h.Number),
  maxItems: h.optional(h.Number),
  uniqueItems: h.optional(h.Boolean),
  properties: h.optional(h.Record({ key: h.String, value: h.Object })),
  required: h.optional(h.Array(h.String)),
  additionalProperties: h.optional(h.Union(h.Boolean, h.Object)),
  enum: h.optional(h.Array(h.Unknown)),
  const: h.optional(h.Unknown),
  allOf: h.optional(h.Array(h.Object)),
  anyOf: h.optional(h.Array(h.Object)),
  oneOf: h.optional(h.Array(h.Object)),
  not: h.optional(h.Object),
  if: h.optional(h.Object),
  then: h.optional(h.Object),
  else: h.optional(h.Object),
  readOnly: h.optional(h.Boolean),
  writeOnly: h.optional(h.Boolean),
});
h
  .parseJson(
    h.Struct({
      type: h.Literal("object"),
      properties: h.Record({ key: h.String, value: Ms }),
      title: h.optional(h.String),
      description: h.optional(h.String),
      required: h.optional(h.Array(h.String)),
      minProperties: h.optional(h.Number),
      maxProperties: h.optional(h.Number),
      $schema: h.optional(h.String),
      $id: h.optional(h.String),
      definitions: h.optional(h.Record({ key: h.String, value: Ms })),
    }),
  )
  .annotations({ identifier: "FormJsonSchema" }),
  h.URL.pipe(
    h.transform(h.String, { decode: (e) => e.toString(), encode: (e) => new URL(e), strict: true }),
  );
class Ls extends h.String.pipe(
  h.filter(
    (e) =>
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/.test(
        e,
      ),
    {
      message: () =>
        "Must be a valid semantic version (e.g., 1.0.0, 2.1.0-alpha.1, 1.0.0+build.123)",
      jsonSchema: {
        type: "string",
        pattern:
          "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
        description: "A semantic version string (e.g., 1.0.0, 2.1.0-alpha.1, 1.0.0+build.123)",
        examples: ["1.0.0", "2.1.0-alpha.1", "1.0.0+build.123"],
      },
    },
  ),
) {}
const $s = (e) => h.NullOr(e).pipe(h.annotations({ decodingFallback: () => ce.right(null) })),
  Ws = Schema.UUID.pipe(Schema.brand("ExampleId"));
class Bs extends Schema.Class("ExampleMetadata")({
  tags: Schema.optional(Schema.Array(Schema.String)),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class qs extends Schema.Class("Example")({
  id: Ws,
  version: Ls,
  name: Schema.String,
  description: Schema.String,
  metadata: Schema.parseJson($s(Bs)),
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}
class Us extends Schema.Class("UpsertExamplePayload")({
  id: Schema.optional(Ws),
  version: Schema.optional(Ls),
  name: Schema.Trim.pipe(
    Schema.nonEmptyString({ message: () => "Name is required" }),
    Schema.maxLength(100, { message: () => "Name must be at most 100 characters long" }),
  ),
  description: Schema.Trim.pipe(
    Schema.nonEmptyString({ message: () => "description is required" }),
    Schema.maxLength(1e3, { message: () => "Description must be at most 1,000 characters long" }),
  ),
  metadata: Schema.optional(Bs),
}) {}
class Vs extends Schema.TaggedError("ExampleNotFoundError")(
  "ExampleNotFoundError",
  { id: Ws },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Example with id ${this.id} not found`;
  }
}
class Hs extends HttpApiGroup.make("examples")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(qs)))
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess(qs).addError(Vs).setPayload(Us))
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(Schema.Struct({ id: Ws }))
      .addSuccess(Schema.Void)
      .addError(Vs),
  )
  .prefix("/examples") {}
const Gs = Schema.UUID.pipe(Schema.brand("StyleId"));
class Ks extends Schema.Class("Style")({
  id: Gs,
  name: Schema.String,
  rule: Schema.String,
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
}) {}
class Zs extends Schema.Class("UpsertStylePayload")({
  id: Schema.optional(Gs),
  name: Schema.Trim.pipe(
    Schema.nonEmptyString({ message: () => "Name is required" }),
    Schema.maxLength(100, { message: () => "Name must be at most 100 characters long" }),
  ),
  rule: Schema.Trim.pipe(
    Schema.nonEmptyString({ message: () => "Rule is required" }),
    Schema.maxLength(1e3, { message: () => "Rule must be at most 1,000 characters long" }),
  ),
}) {}
class Js extends Schema.TaggedError("StyleNotFoundError")(
  "StyleNotFoundError",
  { id: Gs },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Style with id ${this.id} not found`;
  }
}
class Ys extends HttpApiGroup.make("styles")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(Ks)))
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess(Ks).addError(Js).setPayload(Zs))
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(Schema.Struct({ id: Gs }))
      .addSuccess(Schema.Void)
      .addError(Js),
  )
  .prefix("/styles") {}
class Xs extends HttpApi.make("DomainApi").add(Ys).add(Hs).prefix("/api") {}
const Qs = {
    transformQueryNames: String$1.camelToSnake,
    transformResultNames: String$1.snakeToCamel,
    types: {
      114: { to: 25, from: [114], parse: identity, serialize: identity },
      1082: { to: 25, from: [1082], parse: identity, serialize: identity },
      1114: { to: 25, from: [1114], parse: identity, serialize: identity },
      1184: { to: 25, from: [1184], parse: identity, serialize: identity },
      3802: { to: 25, from: [3802], parse: identity, serialize: identity },
    },
  },
  en = Layer.unwrapEffect(
    Effect.gen(function* () {
      return PgClient.layer({ url: yield* Config.redacted("DATABASE_URL"), ...Qs });
    }),
  ).pipe((e) =>
    Layer.retry(
      e,
      Schedule.identity().pipe(
        Schedule.check((e) => "SqlError" === e._tag),
        Schedule.intersect(Schedule.exponential("1 second")),
        Schedule.intersect(Schedule.recurs(2)),
        Schedule.onDecision(([[e, t], r], a) =>
          "Continue" === a._tag
            ? Effect.logInfo(
                `Retrying database connection in ${Duration.format(t)} (attempt #${++r})`,
              )
            : Effect.void,
        ),
      ),
    ),
  ),
  tn = qs.pipe(Schema.pick("name", "description", "metadata", "version")),
  rn = qs.pipe(Schema.pick("id", "version", "name", "description", "metadata"));
class an extends Effect.Service()("ExamplesRepo", {
  dependencies: [en],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: qs,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          examples
        WHERE
          deleted_at IS NULL
      `,
      }),
      r = SqlSchema.single({
        Result: qs,
        Request: tn,
        execute: (t) => e`
        INSERT INTO
          examples ${e.insert(t)}
        RETURNING
          *
      `,
      }),
      a = SqlSchema.single({
        Result: qs,
        Request: rn,
        execute: (t) => e`
        UPDATE examples
        SET
          ${e.update(t)}
        WHERE
          id = ${t.id}
          AND deleted_at IS NULL
        RETURNING
          *
      `,
      }),
      s = SqlSchema.single({
        Request: Ws,
        Result: Schema.Unknown,
        execute: (t) => e`
        UPDATE examples
        SET
          deleted_at = now()
        WHERE
          id = ${t}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
      }),
      n = SqlSchema.single({
        Request: Ws,
        Result: Schema.Unknown,
        execute: (t) => e`
        DELETE FROM examples
        WHERE
          id = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      del: (e) =>
        s(e).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new Vs({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      hardDelete: (e) =>
        n(e).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new Vs({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (e) =>
        a(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new Vs({ id: e.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(r, Effect.orDie),
    };
  }),
}) {}
const sn = HttpApiBuilder.group(Xs, "examples", (e) =>
    Effect.gen(function* () {
      const t = yield* an;
      return e
        .handle("list", () => t.findAll())
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            return void 0 !== e.id
              ? yield* t.update({
                  id: e.id,
                  name: e.name,
                  description: e.description,
                  version: e.version ?? "1.0.0",
                  metadata: e.metadata ?? null,
                })
              : yield* t.create({
                  name: e.name,
                  description: e.description,
                  version: e.version ?? "1.0.0",
                  metadata: e.metadata ?? null,
                });
          }),
        )
        .handle("delete", ({ payload: e }) => t.del(e.id));
    }),
  ).pipe(Layer.provide(an.Default)),
  nn = Ks.pipe(Schema.pick("name", "rule")),
  on = Ks.pipe(Schema.pick("id", "name", "rule"));
class ln extends Effect.Service()("StylesRepo", {
  dependencies: [en],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: Ks,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          styles
      `,
      }),
      r = SqlSchema.single({
        Result: Ks,
        Request: nn,
        execute: (t) => e`
        INSERT INTO
          styles ${e.insert(t)}
        RETURNING
          *
      `,
      }),
      a = SqlSchema.single({
        Result: Ks,
        Request: on,
        execute: (t) => e`
        UPDATE styles
        SET
          ${e.update(t)}
        WHERE
          id = ${t.id}
        RETURNING
          *
      `,
      }),
      s = SqlSchema.single({
        Request: Gs,
        Result: Schema.Unknown,
        execute: (t) => e`
        DELETE FROM styles
        WHERE
          id = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      del: (e) =>
        s(e).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new Js({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (e) =>
        a(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new Js({ id: e.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(r, Effect.orDie),
    };
  }),
}) {}
const cn = HttpApiBuilder.group(Xs, "styles", (e) =>
    Effect.gen(function* () {
      const t = yield* ln;
      return e
        .handle("list", () => t.findAll())
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            return void 0 !== e.id
              ? yield* t.update({ id: e.id, name: e.name, rule: e.rule })
              : yield* t.create({ name: e.name, rule: e.rule });
          }),
        )
        .handle("delete", ({ payload: e }) => t.del(e.id));
    }),
  ).pipe(Layer.provide(ln.Default)),
  dn = HttpLayerRouter.addHttpApi(Xs, { openapiPath: "/api/docs/openapi.json" }).pipe(
    Layer.provide([cn, sn]),
    Layer.provide(HttpServer.layerContext),
  ),
  un = HttpLayerRouter.use((e) => e.add("GET", "/api/health", HttpServerResponse.text("OK"))),
  pn = HttpApiScalar.layerHttpLayerRouter({ api: Xs, path: "/api/docs" }),
  fn = HttpLayerRouter.cors({
    allowedOrigins: ["*"],
    allowedMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "B3", "traceparent"],
    credentials: true,
  }),
  hn = Layer.mergeAll(dn, un, pn, fn),
  { dispose: mn, handler: gn } = HttpLayerRouter.toWebHandler(hn);
process.on("SIGINT", () => {
  mn().then(
    () => {
      process.exit(0);
    },
    () => {
      process.exit(1);
    },
  );
});
const yn = async ({ request: e }) => gn(e),
  vn = va().methods({ GET: yn, POST: yn, PUT: yn, PATCH: yn, DELETE: yn, OPTIONS: yn }),
  bn = ba(),
  wn = js.update({ id: "/example", path: "/example", getParentRoute: () => Os }),
  xn = Fs.update({ id: "/", path: "/", getParentRoute: () => Os }),
  Sn = vn.update({ id: "/api/$", path: "/api/$", getParentRoute: () => bn }),
  Rn = { IndexRoute: xn, ExampleRoute: wn },
  En = Os._addFileChildren(Rn)._addFileTypes(),
  kn = { ApiSplatServerRoute: Sn },
  Nn = bn._addFileChildren(kn)._addFileTypes(),
  zn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, routeTree: En, serverRouteTree: Nn },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
const Pn = (function ({ createRouter: e }) {
    let t,
      r = null,
      a = null;
    return (s) => {
      const n = globalThis.fetch,
        i = async ({ request: o }) => {
          globalThis.fetch = async function (e, t) {
            function r(e, t) {
              const r = new Request(e, t);
              return i({ request: r });
            }
            function a() {
              return o.headers.get("Origin") || o.headers.get("Referer") || "http://localhost";
            }
            if ("string" == typeof e && e.startsWith("/")) {
              return r(new URL(e, a()), t);
            }
            if (
              "object" == typeof e &&
              "url" in e &&
              "string" == typeof e.url &&
              e.url.startsWith("/")
            ) {
              return r(new URL(e.url, a()), t);
            }
            return n(e, t);
          };
          const l = new URL(o.url),
            c = l.href.replace(l.origin, ""),
            d = await e(),
            u = De({ initialEntries: [c] }),
            p = "true" === process.env.TSS_PRERENDERING;
          let f = "true" === process.env.TSS_SHELL;
          p && !f && (f = "true" === o.headers.get(ha)),
            d.update({ history: u, isShell: f, isPrerendering: p });
          const h = await (async () => {
            try {
              0;
              const i = Ke(["/", ((e = "/_serverFn"), Ye(Je(e))), "/"]);
              if (c.startsWith(i))
                return await (async ({ request: e }) => {
                  const t = new AbortController(),
                    r = t.signal,
                    a = () => t.abort();
                  e.signal.addEventListener("abort", a);
                  const s = e.method,
                    n = new URL(e.url, "http://localhost:3000"),
                    i = new RegExp(`${((o = "/_serverFn"), o.replace(/^\/|\/$/g, ""))}/([^/?#]+)`);
                  var o;
                  const l = n.pathname.match(i),
                    c = l ? l[1] : null,
                    d = Object.fromEntries(n.searchParams.entries()),
                    u = "createServerFn" in d;
                  if ("string" != typeof c)
                    throw new Error("Invalid server action param for serverFnId: " + c);
                  const p = await ua(c),
                    f = ["multipart/form-data", "application/x-www-form-urlencoded"],
                    h = await (async () => {
                      try {
                        let t = await (async () => {
                          if (
                            e.headers.get("Content-Type") &&
                            f.some((t) => {
                              var r;
                              return null == (r = e.headers.get("Content-Type"))
                                ? void 0
                                : r.includes(t);
                            })
                          )
                            return (
                              Ve(
                                "get" !== s.toLowerCase(),
                                "GET requests with FormData payloads are not supported",
                              ),
                              await p(await e.formData(), r)
                            );
                          if ("get" === s.toLowerCase()) {
                            let e = d;
                            return u && (e = d.payload), (e = e ? await pa(e) : e), await p(e, r);
                          }
                          const t = await e.text(),
                            a = await pa(t);
                          return u ? await p(a, r) : await p(...a, r);
                        })();
                        return t.result instanceof Response
                          ? t.result
                          : !u && ((t = t.result), t instanceof Response)
                            ? t
                            : it(t)
                              ? fa(t)
                              : new Response(void 0 !== t ? pt.stringify(t) : void 0, {
                                  status: sa(ta()),
                                  headers: { "Content-Type": "application/json" },
                                });
                      } catch (t) {
                        return t instanceof Response
                          ? t
                          : it(t)
                            ? fa(t)
                            : (console.info(),
                              console.info("Server Fn Error!"),
                              console.info(),
                              console.error(t),
                              console.info(),
                              new Response(pt.stringify(t), {
                                status: 500,
                                headers: { "Content-Type": "application/json" },
                              }));
                      }
                    })();
                  return e.signal.removeEventListener("abort", a), h;
                })({ request: o });
              if (null === r)
                try {
                  (r = await ca(ia)),
                    r.serverRouteTree &&
                      (t = (function ({ routeTree: e, initRoute: t }) {
                        const r = {},
                          a = {},
                          s = (e) => {
                            e.forEach((e, n) => {
                              if (
                                (null == t || t(e, n),
                                Ve(!r[e.id], `Duplicate routes found with id: ${String(e.id)}`),
                                (r[e.id] = e),
                                !e.isRoot && e.path)
                              ) {
                                const t = Ye(e.fullPath);
                                (a[t] && !e.fullPath.endsWith("/")) || (a[t] = e);
                              }
                              const i = e.children;
                              (null == i ? void 0 : i.length) && s(i);
                            });
                          };
                        s([e]);
                        const n = [];
                        Object.values(r).forEach((e, t) => {
                          var r;
                          if (e.isRoot || !e.path) return;
                          const a = Je(e.fullPath);
                          let s = Xe(a),
                            i = 0;
                          for (
                            ;
                            s.length > i + 1 && "/" === (null == (r = s[i]) ? void 0 : r.value);

                          )
                            i++;
                          i > 0 && (s = s.slice(i));
                          let o = 0,
                            l = !1;
                          const c = s.map((e, t) => {
                            if ("/" === e.value) return 0.75;
                            let r;
                            if (
                              (1 === e.type
                                ? (r = 0.5)
                                : 3 === e.type
                                  ? ((r = 0.4), o++)
                                  : 2 === e.type && (r = 0.25),
                              r)
                            ) {
                              for (let a = t + 1; a < s.length; a++) {
                                const t = s[a];
                                if (0 === t.type && "/" !== t.value)
                                  return (l = !0), ut(e, r + 0.2);
                              }
                              return ut(e, r);
                            }
                            return 1;
                          });
                          n.push({
                            child: e,
                            trimmed: a,
                            parsed: s,
                            index: t,
                            scores: c,
                            optionalParamCount: o,
                            hasStaticAfter: l,
                          });
                        });
                        const i = n
                          .sort((e, t) => {
                            const r = Math.min(e.scores.length, t.scores.length);
                            for (let a = 0; a < r; a++)
                              if (e.scores[a] !== t.scores[a]) return t.scores[a] - e.scores[a];
                            if (e.scores.length !== t.scores.length) {
                              if (e.optionalParamCount !== t.optionalParamCount) {
                                if (e.hasStaticAfter === t.hasStaticAfter)
                                  return e.optionalParamCount - t.optionalParamCount;
                                if (e.hasStaticAfter && !t.hasStaticAfter) return -1;
                                if (!e.hasStaticAfter && t.hasStaticAfter) return 1;
                              }
                              return t.scores.length - e.scores.length;
                            }
                            for (let a = 0; a < r; a++)
                              if (e.parsed[a].value !== t.parsed[a].value)
                                return e.parsed[a].value > t.parsed[a].value ? 1 : -1;
                            return e.index - t.index;
                          })
                          .map((e, t) => ((e.child.rank = t), e.child));
                        return { routesById: r, routesByPath: a, flatRoutes: i };
                      })({
                        routeTree: r.serverRouteTree,
                        initRoute: (e, t) => {
                          e.init({ originalIndex: t });
                        },
                      }));
                } catch (n) {
                  console.log(n);
                }
              const l = () =>
                (async function (e, t) {
                  return mt.run(e, t);
                })({ router: d }, async () => {
                  const e = (o.headers.get("Accept") || "*/*").split(",");
                  if (!["*/*", "text/html"].some((t) => e.some((e) => e.trim().startsWith(t))))
                    return Be({ error: "Only HTML requests are supported here" }, { status: 500 });
                  if (
                    (null === a &&
                      (a = await (async function () {
                        const { tsrStartManifest: e } = await ca(oa),
                          t = e(),
                          r = (t.routes[ot] = t.routes[ot] || {});
                        r.assets = r.assets || [];
                        let a = `import('${t.clientEntry}')`;
                        "development" === "production" &&
                          globalThis.TSS_INJECTED_HEAD_SCRIPTS &&
                          (a = `${globalThis.TSS_INJECTED_HEAD_SCRIPTS + ";"}${a}`),
                          r.assets.push({
                            tag: "script",
                            attrs: { type: "module", suppressHydrationWarning: !0, async: !0 },
                            children: a,
                          });
                        const s = {
                          ...t,
                          routes: Object.fromEntries(
                            Object.entries(t.routes).map(([e, t]) => {
                              const { preloads: r, assets: a } = t;
                              return [e, { preloads: r, assets: a }];
                            }),
                          ),
                        };
                        return s;
                      })()),
                    jr(d, a),
                    await d.load(),
                    d.state.redirect)
                  )
                    return d.state.redirect;
                  await d.serverSsr.dehydrate();
                  const t =
                    ((r = { router: d }),
                    We(
                      na(),
                      { "Content-Type": "text/html; charset=UTF-8" },
                      ...r.router.state.matches.map((e) => e.headers),
                    ));
                  var r;
                  return await s({ request: o, router: d, responseHeaders: t });
                });
              if (t) {
                const [e, r] = await (async function (e) {
                  var t, r;
                  const a = new URL(e.request.url),
                    s = a.pathname,
                    n = (function ({
                      pathname: e,
                      routePathname: t,
                      basepath: r,
                      caseSensitive: a,
                      routesByPath: s,
                      routesById: n,
                      flatRoutes: i,
                      parseCache: o,
                    }) {
                      let l = {};
                      const c = Ye(e),
                        d = (e) => {
                          var t;
                          return st(
                            r,
                            c,
                            {
                              to: e.fullPath,
                              caseSensitive:
                                (null == (t = e.options) ? void 0 : t.caseSensitive) ?? a,
                              fuzzy: !0,
                            },
                            o,
                          );
                        };
                      let u = void 0 !== t ? s[t] : void 0;
                      if (u) l = d(u);
                      else {
                        let e;
                        for (const t of i) {
                          const r = d(t);
                          if (r) {
                            if ("/" === t.path || !r["**"]) {
                              (u = t), (l = r);
                              break;
                            }
                            e || (e = { foundRoute: t, routeParams: r });
                          }
                        }
                        !u && e && ((u = e.foundRoute), (l = e.routeParams));
                      }
                      let p = u || n[ot];
                      const f = [p];
                      for (; p.parentRoute; ) (p = p.parentRoute), f.push(p);
                      return f.reverse(), { matchedRoutes: f, routeParams: l, foundRoute: u };
                    })({
                      pathname: s,
                      basepath: e.basePath,
                      caseSensitive: !0,
                      routesByPath: e.processedServerRouteTree.routesByPath,
                      routesById: e.processedServerRouteTree.routesById,
                      flatRoutes: e.processedServerRouteTree.flatRoutes,
                    }),
                    i = e.router.getMatchedRoutes(s, void 0);
                  let o,
                    l = [];
                  if (
                    ((l = n.matchedRoutes),
                    i.foundRoute && n.matchedRoutes.length < i.matchedRoutes.length)
                  ) {
                    const r = [...i.matchedRoutes]
                      .reverse()
                      .find((t) => void 0 !== e.processedServerRouteTree.routesById[t.id]);
                    if (r) {
                      let a = r.id;
                      l = [];
                      do {
                        const r = e.processedServerRouteTree.routesById[a];
                        if (!r) break;
                        l.push(r), (a = null == (t = r.parentRoute) ? void 0 : t.id);
                      } while (a);
                      l.reverse();
                    }
                  }
                  if (l.length) {
                    const t = gt(l.flatMap((e) => e.options.middleware).filter(Boolean)).map(
                      (e) => e.options.server,
                    );
                    if (null == (r = n.foundRoute) ? void 0 : r.options.methods) {
                      const r = Object.keys(n.foundRoute.options.methods).find(
                        (t) => t.toLowerCase() === e.request.method.toLowerCase(),
                      );
                      if (r) {
                        const e = n.foundRoute.options.methods[r];
                        e &&
                          ("function" == typeof e
                            ? t.push(ma(e))
                            : (e._options.middlewares &&
                                e._options.middlewares.length &&
                                t.push(...gt(e._options.middlewares).map((e) => e.options.server)),
                              e._options.handler && t.push(ma(e._options.handler))));
                      }
                    }
                    t.push(ma(e.executeRouter));
                    const a = await (function (e, t) {
                      let r = -1;
                      const a = async (t) => {
                        r++;
                        const s = e[r];
                        if (!s) return t;
                        const n = await s({
                          ...t,
                          next: async (e) => {
                            const r = await a({
                              ...t,
                              ...e,
                              context: {
                                ...t.context,
                                ...((null == e ? void 0 : e.context) || {}),
                              },
                            });
                            return Object.assign(t, ga(r));
                          },
                        }).catch((e) => {
                          if (ya(e)) return { response: e };
                          throw e;
                        });
                        return Object.assign(t, ga(n));
                      };
                      return ga(a(t));
                    })(t, { request: e.request, context: {}, params: n.routeParams, pathname: s });
                    o = a.response;
                  }
                  return [l, o];
                })({
                  processedServerRouteTree: t,
                  router: d,
                  request: o,
                  basePath: "/",
                  executeRouter: l,
                });
                if (r) return r;
              }
              return await l();
            } catch (i) {
              if (i instanceof Response) return i;
              throw i;
            }
            var e;
          })();
          if (lt(h)) {
            if (lt((m = h)) && m.options.href)
              return "manual" === o.headers.get("x-tsr-redirect")
                ? Be({ ...h.options, isSerializedRedirect: true }, { headers: h.headers })
                : h;
            if (h.options.to && "string" == typeof h.options.to && !h.options.to.startsWith("/"))
              throw new Error(
                `Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(h.options)}`,
              );
            if (["params", "search", "hash"].some((e) => "function" == typeof h.options[e]))
              throw new Error(
                `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
                  h.options,
                )
                  .filter((e) => "function" == typeof h.options[e])
                  .map((e) => `"${e}"`)
                  .join(", ")}`,
              );
            const e = d.resolveRedirect(h);
            return "manual" === o.headers.get("x-tsr-redirect")
              ? Be({ ...h.options, isSerializedRedirect: true }, { headers: h.headers })
              : e;
          }
          var m;
          return h;
        };
      return i;
    };
  })({
    createRouter: function () {
      return createRouter({ routeTree: En, scrollRestoration: true });
    },
  })(Oe),
  In =
    ((An = function (e) {
      const t = Wr(e);
      return Pn({ request: t });
    }),
    (function (e) {
      if ("function" == typeof e) return (e.__is_handler__ = true), e;
      const t = { onRequest: Qr(e.onRequest), onBeforeResponse: Qr(e.onBeforeResponse) },
        r = (r) =>
          (async function (e, t, r) {
            if (r.onRequest) for (const s of r.onRequest) if ((await s(e), e.handled)) return;
            const a = { body: await t(e) };
            if (r.onBeforeResponse) for (const s of r.onBeforeResponse) await s(e, a);
            return a.body;
          })(r, e.handler, t);
      return (
        (r.__is_handler__ = true),
        (r.__resolve__ = e.handler.__resolve__),
        (r.__websocket__ = e.websocket),
        r
      );
    })((e) =>
      (async function (e, t) {
        return ea.run(e, t);
      })(e, () => An(e)),
    ));
var An;

export {
  Na as B,
  Ea as c,
  Xs as D,
  In as default,
  ks as e,
  _a as I,
  Ns as m,
  Wa as S,
  ja as T,
  Us as U,
};
//# sourceMappingURL=ssr.mjs.map
