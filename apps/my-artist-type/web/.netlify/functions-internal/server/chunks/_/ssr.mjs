import { Atom, RegistryProvider, useAtomMount } from "@effect-atom/atom-react";
import {
  FetchHttpClient,
  HttpApi,
  HttpApiBuilder,
  HttpApiClient,
  HttpApiEndpoint,
  HttpApiGroup,
  HttpApiScalar,
  HttpApiSchema,
  HttpClient,
  HttpLayerRouter,
  HttpServer,
  HttpServerResponse,
} from "@effect/platform";
import * as _e from "@effect/platform-browser/BrowserWorker";
import * as Se from "@effect/platform/HttpBody";
import * as Ne from "@effect/rpc/Rpc";
import * as Re from "@effect/rpc/RpcClient";
import * as Ae from "@effect/rpc/RpcGroup";
import { SqlClient, SqlSchema } from "@effect/sql";
import { PgClient } from "@effect/sql-pg";
import { faker } from "@faker-js/faker";
import {
  HeadContent,
  Outlet,
  RouterProvider,
  Scripts,
  createFileRoute,
  createRootRoute,
  createRouter,
  lazyRouteComponent,
  useLocation,
} from "@tanstack/react-router";
import { defineHandlerCallback, renderRouterToStream } from "@tanstack/react-router/ssr/server";
import { Store, useStore } from "@tanstack/react-store";
import Nt$1, { clsx } from "clsx";
import {
  Config,
  DateTime,
  Duration,
  Effect,
  Layer,
  LogLevel,
  Logger,
  Random,
  Schedule,
  Schema,
  String as String$1,
  flow as flow$1,
  identity as identity$1,
} from "effect";
import * as z from "effect/Boolean";
import * as be from "effect/Chunk";
import * as oe from "effect/Duration";
import * as te from "effect/Effect";
import * as M from "effect/Either";
import { constant, dual, flow, identity, pipe } from "effect/Function";
import { globalValue } from "effect/GlobalValue";
import * as ne from "effect/HashMap";
import * as Ce from "effect/Layer";
import * as re from "effect/Logger";
import * as h from "effect/Option";
import { TreeFormatter } from "effect/ParseResult";
import * as m from "effect/Schema";
import * as we from "effect/Stream";
import * as Oe from "effect/String";
import * as xe from "effect/SubscriptionRef";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  Loader2Icon,
  MonitorIcon,
  MoonIcon,
  PanelLeftIcon,
  SunIcon,
  XIcon,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { AsyncLocalStorage } from "node:async_hooks";
import process from "node:process";
import * as g from "react";
import g__default, {
  Children,
  PureComponent,
  cloneElement,
  createContext,
  createElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Ge__default, * as Ge from "react-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Toaster } from "sonner";
import { twMerge } from "tailwind-merge";
globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: process.env };
function lt(t) {
  return jsx(RouterProvider, { router: t.router });
}
const ct = defineHandlerCallback(({ request: e, router: t, responseHeaders: n }) =>
    renderRouterToStream({
      request: e,
      router: t,
      responseHeaders: n,
      children: jsx(lt, { router: t }),
    }),
  ),
  ut = "__TSR_index";
function dt(e, t) {
  t || (t = {});
  const n = ht();
  return { ...t, key: n, __TSR_key: n, [ut]: e };
}
function ft(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1;
  const r = t.map((e, t) => dt(t, void 0));
  return (function (e) {
    let t = e.getLocation();
    const n = new Set(),
      r = (r) => {
        (t = e.getLocation()), n.forEach((e) => e({ location: t, action: r }));
      },
      o = (n) => {
        (e.notifyOnIndexChange ?? 1) ? r(n) : (t = e.getLocation());
      },
      a = async ({ task: n, navigateOpts: r, ...o }) => {
        var a, i;
        if (null == r ? void 0 : r.ignoreBlocker) return void n();
        const s = (null == (a = e.getBlockers) ? void 0 : a.call(e)) ?? [],
          l = "PUSH" === o.type || "REPLACE" === o.type;
        if ("undefined" != typeof document && s.length && l)
          for (const c of s) {
            const n = pt(o.path, o.state);
            if (await c.blockerFn({ currentLocation: t, nextLocation: n, action: o.type }))
              return void (null == (i = e.onBlocked) || i.call(e));
          }
        n();
      };
    return {
      get location() {
        return t;
      },
      get length() {
        return e.getLength();
      },
      subscribers: n,
      subscribe: (e) => (
        n.add(e),
        () => {
          n.delete(e);
        }
      ),
      push: (n, o, i) => {
        const s = t.state[ut];
        (o = dt(s + 1, o)),
          a({
            task: () => {
              e.pushState(n, o), r({ type: "PUSH" });
            },
            navigateOpts: i,
            type: "PUSH",
            path: n,
            state: o,
          });
      },
      replace: (n, o, i) => {
        const s = t.state[ut];
        (o = dt(s, o)),
          a({
            task: () => {
              e.replaceState(n, o), r({ type: "REPLACE" });
            },
            navigateOpts: i,
            type: "REPLACE",
            path: n,
            state: o,
          });
      },
      go: (t, n) => {
        a({
          task: () => {
            e.go(t), o({ type: "GO", index: t });
          },
          navigateOpts: n,
          type: "GO",
        });
      },
      back: (t) => {
        a({
          task: () => {
            e.back((null == t ? void 0 : t.ignoreBlocker) ?? false), o({ type: "BACK" });
          },
          navigateOpts: t,
          type: "BACK",
        });
      },
      forward: (t) => {
        a({
          task: () => {
            e.forward((null == t ? void 0 : t.ignoreBlocker) ?? false), o({ type: "FORWARD" });
          },
          navigateOpts: t,
          type: "FORWARD",
        });
      },
      canGoBack: () => 0 !== t.state[ut],
      createHref: (t) => e.createHref(t),
      block: (t) => {
        var n;
        if (!e.setBlockers) return () => {};
        const r = (null == (n = e.getBlockers) ? void 0 : n.call(e)) ?? [];
        return (
          e.setBlockers([...r, t]),
          () => {
            var n, r;
            const o = (null == (n = e.getBlockers) ? void 0 : n.call(e)) ?? [];
            null == (r = e.setBlockers) ||
              r.call(
                e,
                o.filter((e) => e !== t),
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
      notify: r,
    };
  })({
    getLocation: () => pt(t[n], r[n]),
    getLength: () => t.length,
    pushState: (e, o) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)),
        r.push(o),
        t.push(e),
        (n = Math.max(t.length - 1, 0));
    },
    replaceState: (e, o) => {
      (r[n] = o), (t[n] = e);
    },
    back: () => {
      n = Math.max(n - 1, 0);
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: (e) => {
      n = Math.min(Math.max(n + e, 0), t.length - 1);
    },
    createHref: (e) => e,
  });
}
function pt(e, t) {
  const n = e.indexOf("#"),
    r = e.indexOf("?"),
    o = ht();
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : "",
    search: r > -1 ? e.slice(r, -1 === n ? void 0 : n) : "",
    state: t || { [ut]: 0, key: o, __TSR_key: o },
  };
}
function ht() {
  return (Math.random() + 1).toString(36).substring(7);
}
function mt(e) {
  if (Array.isArray(e)) return e.flatMap((e) => mt(e));
  if ("string" != typeof e) return [];
  const t = [];
  let n,
    r,
    o,
    a,
    i,
    s = 0;
  const l = () => {
    for (; s < e.length && /\s/.test(e.charAt(s)); ) s += 1;
    return s < e.length;
  };
  for (; s < e.length; ) {
    for (n = s, i = false; l(); )
      if (((r = e.charAt(s)), "," === r)) {
        for (
          o = s, s += 1, l(), a = s;
          s < e.length && ((r = e.charAt(s)), "=" !== r && ";" !== r && "," !== r);

        )
          s += 1;
        s < e.length && "=" === e.charAt(s)
          ? ((i = true), (s = a), t.push(e.slice(n, o)), (n = s))
          : (s = o + 1);
      } else s += 1;
    (!i || s >= e.length) && t.push(e.slice(n, e.length));
  }
  return t;
}
function gt(...e) {
  return e.reduce((e, t) => {
    const n =
      (r = t) instanceof Headers || Array.isArray(r) || "object" == typeof r
        ? new Headers(r)
        : new Headers();
    var r;
    for (const [o, a] of n.entries())
      if ("set-cookie" === o) {
        mt(a).forEach((t) => e.append("set-cookie", t));
      } else e.set(o, a);
    return e;
  }, new Headers());
}
function vt(e, t) {
  return new Response(JSON.stringify(e), {
    ...t,
    headers: gt({ "content-type": "application/json" }, null == t ? void 0 : t.headers),
  });
}
var bt = "Invariant failed";
function wt(e, t) {
  if (!e) {
    throw new Error(bt);
  }
}
function xt(e) {
  if (!St(e)) return false;
  const t = e.constructor;
  if (void 0 === t) return true;
  const n = t.prototype;
  return !!St(n) && !!n.hasOwnProperty("isPrototypeOf");
}
function St(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function Et(e) {
  return _t(e.filter((e) => void 0 !== e).join("/"));
}
function _t(e) {
  return e.replace(/\/{2,}/g, "/");
}
function Rt(e) {
  return "/" === e ? e : e.replace(/^\/{1,}/, "");
}
function Ct(e) {
  return "/" === e ? e : e.replace(/\/{1,}$/, "");
}
const Nt = (e, t) => {
    if (!e) return [];
    const n = null == t ? void 0 : t.get(e);
    if (n) return n;
    const r = (function (e) {
      e = _t(e);
      const t = [];
      "/" === e.slice(0, 1) && ((e = e.substring(1)), t.push({ type: 0, value: "/" }));
      if (!e) return t;
      const n = e.split("/").filter(Boolean);
      t.push(
        ...n.map((e) => {
          const t = e.match(It);
          if (t) {
            return {
              type: 2,
              value: "$",
              prefixSegment: t[1] || void 0,
              suffixSegment: t[2] || void 0,
            };
          }
          const n = e.match(kt);
          if (n) {
            const e = n[1];
            return {
              type: 3,
              value: n[2],
              prefixSegment: e || void 0,
              suffixSegment: n[3] || void 0,
            };
          }
          const r = e.match(Pt);
          if (r) {
            const e = r[1];
            return {
              type: 1,
              value: "" + r[2],
              prefixSegment: e || void 0,
              suffixSegment: r[3] || void 0,
            };
          }
          if (At.test(e)) {
            return {
              type: 1,
              value: "$" + e.substring(1),
              prefixSegment: void 0,
              suffixSegment: void 0,
            };
          }
          return Tt.test(e)
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
    return null == t || t.set(e, r), r;
  },
  At = /^\$.{1,}$/,
  Pt = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,
  kt = /^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,
  Tt = /^\$$/,
  It = /^(.*?)\{\$\}(.*)$/;
function Ot(e, t, n, r) {
  const o = (function (e, t, { to: n, fuzzy: r, caseSensitive: o }, a) {
    if ("/" !== e && !t.startsWith(e)) return;
    (t = Dt(e, t, o)), (n = Dt(e, `${n ?? "$"}`, o));
    const i = Nt(t.startsWith("/") ? t : `/${t}`, a),
      s = Nt(n.startsWith("/") ? n : `/${n}`, a),
      l = {};
    return (function (e, t, n, r, o) {
      var a, i, s;
      let l = 0,
        c = 0;
      for (; l < e.length || c < t.length; ) {
        const r = e[l],
          u = t[c];
        if (u) {
          if (2 === u.type) {
            const t = e.slice(l);
            let o;
            if (u.prefixSegment || u.suffixSegment) {
              if (!r) return false;
              const n = u.prefixSegment || "",
                i = u.suffixSegment || "",
                s = r.value;
              if ("prefixSegment" in u && !s.startsWith(n)) return false;
              if (
                "suffixSegment" in u &&
                !(null == (a = e[e.length - 1]) ? void 0 : a.value.endsWith(i))
              )
                return false;
              let l = decodeURI(Et(t.map((e) => e.value)));
              n && l.startsWith(n) && (l = l.slice(n.length)),
                i && l.endsWith(i) && (l = l.slice(0, l.length - i.length)),
                (o = l);
            } else o = decodeURI(Et(t.map((e) => e.value)));
            return (n["*"] = o), (n._splat = o), true;
          }
          if (0 === u.type) {
            if ("/" === u.value && !(null == r ? void 0 : r.value)) {
              c++;
              continue;
            }
            if (r) {
              if (o) {
                if (u.value !== r.value) return false;
              } else if (u.value.toLowerCase() !== r.value.toLowerCase()) return false;
              l++, c++;
              continue;
            }
            return false;
          }
          if (1 === u.type) {
            if (!r) return false;
            if ("/" === r.value) return false;
            let e = "",
              t = false;
            if (u.prefixSegment || u.suffixSegment) {
              const n = u.prefixSegment || "",
                o = u.suffixSegment || "",
                a = r.value;
              if (n && !a.startsWith(n)) return false;
              if (o && !a.endsWith(o)) return false;
              let i = a;
              n && i.startsWith(n) && (i = i.slice(n.length)),
                o && i.endsWith(o) && (i = i.slice(0, i.length - o.length)),
                (e = decodeURIComponent(i)),
                (t = true);
            } else (e = decodeURIComponent(r.value)), (t = true);
            t && ((n[u.value.substring(1)] = e), l++), c++;
            continue;
          }
          if (3 === u.type) {
            if (!r) {
              c++;
              continue;
            }
            if ("/" === r.value) {
              c++;
              continue;
            }
            let o = "",
              a = false;
            if (u.prefixSegment || u.suffixSegment) {
              const e = u.prefixSegment || "",
                t = u.suffixSegment || "",
                n = r.value;
              if ((!e || n.startsWith(e)) && (!t || n.endsWith(t))) {
                let r = n;
                e && r.startsWith(e) && (r = r.slice(e.length)),
                  t && r.endsWith(t) && (r = r.slice(0, r.length - t.length)),
                  (o = decodeURIComponent(r)),
                  (a = true);
              }
            } else {
              let n = true;
              for (let o = c + 1; o < t.length; o++) {
                const a = t[o];
                if (0 === (null == a ? void 0 : a.type) && a.value === r.value) {
                  n = false;
                  break;
                }
                if (1 === (null == a ? void 0 : a.type) || 2 === (null == a ? void 0 : a.type)) {
                  e.length < t.length && (n = false);
                  break;
                }
              }
              n && ((o = decodeURIComponent(r.value)), (a = true));
            }
            a && ((n[u.value.substring(1)] = o), l++), c++;
            continue;
          }
        }
        if (l < e.length && c >= t.length)
          return (
            (n["**"] = Et(e.slice(l).map((e) => e.value))),
            "/" !== (null == (i = t[t.length - 1]) ? void 0 : i.value)
          );
        if (c < t.length && l >= e.length) {
          for (let e = c; e < t.length; e++)
            if (3 !== (null == (s = t[e]) ? void 0 : s.type)) return false;
          break;
        }
        break;
      }
      return true;
    })(i, s, l, 0, o)
      ? l
      : void 0;
  })(e, t, n, r);
  if (!n.to || o) return o ?? {};
}
function Dt(e, t, n = false) {
  const r = n ? e : e.toLowerCase(),
    o = n ? t : t.toLowerCase();
  switch (true) {
    case "/" === r:
      return t;
    case o === r:
      return "";
    case t.length < e.length:
    case "/" !== o[r.length]:
      return t;
    case o.startsWith(r):
      return t.slice(e.length);
    default:
      return t;
  }
}
function zt(e) {
  return !!(null == e ? void 0 : e.isNotFound);
}
const Mt = "__root__";
function Lt(e) {
  return e instanceof Response && !!e.options;
}
const jt = 2e-4,
  Ft = 1e-4;
function Bt(e, t) {
  return e.prefixSegment && e.suffixSegment
    ? t + 0.05 + jt * e.prefixSegment.length + Ft * e.suffixSegment.length
    : e.prefixSegment
      ? t + 0.02 + jt * e.prefixSegment.length
      : e.suffixSegment
        ? t + 0.01 + Ft * e.suffixSegment.length
        : t;
}
const qt = {
    stringify: (e) =>
      JSON.stringify(e, function (e, t) {
        const n = this[e],
          r = $t.find((e) => e.stringifyCondition(n));
        return r ? r.stringify(n) : t;
      }),
    parse: (e) =>
      JSON.parse(e, function (e, t) {
        const n = this[e];
        if (xt(n)) {
          const e = $t.find((e) => e.parseCondition(n));
          if (e) return e.parse(n);
        }
        return t;
      }),
    encode: (e) => {
      if (Array.isArray(e)) return e.map((e) => qt.encode(e));
      if (xt(e)) return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, qt.encode(t)]));
      const t = $t.find((t) => t.stringifyCondition(e));
      return t ? t.stringify(e) : e;
    },
    decode: (e) => {
      if (xt(e)) {
        const t = $t.find((t) => t.parseCondition(e));
        if (t) return t.parse(e);
      }
      return Array.isArray(e)
        ? e.map((e) => qt.decode(e))
        : xt(e)
          ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, qt.decode(t)]))
          : e;
    },
  },
  Ut = (e, t, n, r) => ({
    key: e,
    stringifyCondition: t,
    stringify: (t) => ({ [`$${e}`]: n(t) }),
    parseCondition: (t) => Object.hasOwn(t, `$${e}`),
    parse: (t) => r(t[`$${e}`]),
  }),
  $t = [
    Ut(
      "undefined",
      (e) => void 0 === e,
      () => 0,
      () => {},
    ),
    Ut(
      "date",
      (e) => e instanceof Date,
      (e) => e.toISOString(),
      (e) => new Date(e),
    ),
    Ut(
      "error",
      (e) => e instanceof Error,
      (e) => ({ ...e, message: e.message, stack: void 0, cause: e.cause }),
      (e) => Object.assign(new Error(e.message), e),
    ),
    Ut(
      "formData",
      (e) => e instanceof FormData,
      (e) => {
        const t = {};
        return (
          e.forEach((e, n) => {
            const r = t[n];
            void 0 !== r ? (Array.isArray(r) ? r.push(e) : (t[n] = [r, e])) : (t[n] = e);
          }),
          t
        );
      },
      (e) => {
        const t = new FormData();
        return (
          Object.entries(e).forEach(([e, n]) => {
            Array.isArray(n) ? n.forEach((n) => t.append(e, n)) : t.append(e, n);
          }),
          t
        );
      },
    ),
    Ut(
      "bigint",
      (e) => "bigint" == typeof e,
      (e) => e.toString(),
      (e) => BigInt(e),
    ),
    Ut(
      "server-function",
      (e) => "function" == typeof e && "functionId" in e && "string" == typeof e.functionId,
      ({ functionId: e }) => ({ functionId: e, __serverFn: true }),
      (e) => e,
    ),
  ],
  Wt = new AsyncLocalStorage();
function Vt(e) {
  const t = new Set(),
    n = [],
    r = (e) => {
      e.forEach((e) => {
        e.options.middleware && r(e.options.middleware), t.has(e) || (t.add(e), n.push(e));
      });
    };
  return r(e), n;
}
var Ht,
  Kt =
    (((Ht = Kt || {})[(Ht.AggregateError = 1)] = "AggregateError"),
    (Ht[(Ht.ArrowFunction = 2)] = "ArrowFunction"),
    (Ht[(Ht.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (Ht[(Ht.ObjectAssign = 8)] = "ObjectAssign"),
    (Ht[(Ht.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    Ht);
function Gt(e) {
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
function Yt(e) {
  let t,
    n = "",
    r = 0;
  for (let o = 0, a = e.length; o < a; o++)
    (t = Gt(e[o])), t && ((n += e.slice(r, o) + t), (r = o + 1));
  return 0 === r ? (n = e) : (n += e.slice(r)), n;
}
var Qt = "__SEROVAL_REFS__",
  Xt = "$R",
  Jt = `self.${Xt}`;
function Zt(e, t) {
  if (!e) throw t;
}
var en = new Map(),
  tn = new Map();
function nn(e) {
  return en.has(e);
}
function rn(e) {
  return e;
}
function on(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && on(e, r.extends));
  }
}
function an(e) {
  if (e) {
    let t = new Set();
    return on(t, e), [...t];
  }
}
"undefined" != typeof globalThis
  ? Object.defineProperty(globalThis, Qt, {
      value: tn,
      configurable: true,
      writable: false,
      enumerable: false,
    })
  : "undefined" != typeof self
    ? Object.defineProperty(self, Qt, {
        value: tn,
        configurable: true,
        writable: false,
        enumerable: false,
      })
    : "undefined" != typeof global &&
      Object.defineProperty(global, Qt, {
        value: tn,
        configurable: true,
        writable: false,
        enumerable: false,
      });
var sn = {
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
  ln = {
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
  cn = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" },
  un = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  dn = void 0;
function fn(e, t, n, r, o, a, i, s, l, c, u, d) {
  return { t: e, i: t, s: n, l: r, c: o, m: a, p: i, e: s, a: l, f: c, b: u, o: d };
}
function pn(e) {
  return fn(2, dn, e, dn, dn, dn, dn, dn, dn, dn, dn, dn);
}
var hn = pn(2),
  mn = pn(3),
  gn = pn(1),
  vn = pn(0),
  yn = pn(4),
  bn = pn(5),
  wn = pn(6),
  xn = pn(7);
function Sn(e) {
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
function En(e, t) {
  let n = (function (e) {
      let t = un[Sn(e)];
      return e.name !== t
        ? { name: e.name }
        : e.constructor.name !== t
          ? { name: e.constructor.name }
          : {};
    })(e),
    r = Object.getOwnPropertyNames(e);
  for (let o, a = 0, i = r.length; a < i; a++)
    (o = r[a]),
      "name" !== o &&
        "message" !== o &&
        ("stack" === o ? 4 & t && ((n = n || {}), (n[o] = e[o])) : ((n = n || {}), (n[o] = e[o])));
  return n;
}
function _n(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Rn(e) {
  return fn(1, dn, Yt(e), dn, dn, dn, dn, dn, dn, dn, dn, dn);
}
function Cn(e, t) {
  return fn(
    18,
    e,
    Yt(
      (function (e) {
        return Zt(nn(e), new jn(e)), en.get(e);
      })(t),
    ),
    dn,
    dn,
    dn,
    dn,
    dn,
    dn,
    dn,
    dn,
    dn,
  );
}
function Nn(e, t, n) {
  return fn(25, e, n, dn, Yt(t), dn, dn, dn, dn, dn, dn, dn);
}
function An(e, t) {
  return fn(28, dn, dn, dn, dn, dn, dn, dn, [e, t], dn, dn, dn);
}
function Pn(e, t) {
  return fn(30, dn, dn, dn, dn, dn, dn, dn, [e, t], dn, dn, dn);
}
function kn(e, t, n) {
  return fn(31, e, dn, dn, dn, dn, dn, dn, n, t, dn, dn);
}
var { toString: Tn } = Object.prototype;
var In = class extends Error {
    constructor(e, t) {
      var n, r;
      super(
        ((n = e),
        (r = t) instanceof Error
          ? `Seroval caught an error during the ${n} process.\n  \n${r.name}\n${r.message}\n\n- For more information, please check the "cause" property of this error.\n- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`
          : `Seroval caught an error during the ${n} process.\n\n"${Tn.call(r)}"\n\nFor more information, please check the "cause" property of this error.`),
      ),
        (this.cause = t);
    }
  },
  On = class extends In {
    constructor(e) {
      super("parsing", e);
    }
  },
  Dn = class extends In {
    constructor(e) {
      super("serialization", e);
    }
  },
  zn = class extends Error {
    constructor(e) {
      super(
        `The value ${Tn.call(e)} of type "${typeof e}" cannot be parsed/serialized.\n      \nThere are few workarounds for this problem:\n- Transform the value in a way that it can be serialized.\n- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`,
      ),
        (this.value = e);
    }
  },
  Mn = class extends Error {
    constructor(e) {
      super('Unsupported node type "' + e.t + '".');
    }
  },
  Ln = class extends Error {
    constructor(e) {
      super('Missing plugin for tag "' + e + '".');
    }
  },
  jn = class extends Error {
    constructor(e) {
      super('Missing reference for the value "' + Tn.call(e) + '" of type "' + typeof e + '"'),
        (this.value = e);
    }
  },
  Fn = class {
    constructor(e, t) {
      (this.value = e), (this.replacement = t);
    }
  };
function Bn(e, t, n) {
  return 2 & e
    ? (1 === t.length ? t[0] : "(" + t.join(",") + ")") +
        "=>" +
        (n.startsWith("{") ? "(" + n + ")" : n)
    : "function(" + t.join(",") + "){return " + n + "}";
}
function qn(e, t, n) {
  return 2 & e
    ? (1 === t.length ? t[0] : "(" + t.join(",") + ")") + "=>{" + n + "}"
    : "function(" + t.join(",") + "){" + n + "}";
}
var Un = {},
  $n = {},
  Wn = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
function Vn(e, t) {
  switch (t) {
    case 0:
      return "[]";
    case 1:
      return (function (e) {
        return Bn(e, ["r"], "(r.p=new Promise(" + qn(e, ["s", "f"], "r.s=s,r.f=f") + "))");
      })(e);
    case 2:
      return (function (e) {
        return qn(e, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
      })(e);
    case 3:
      return (function (e) {
        return qn(e, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
      })(e);
    case 4:
      return (function (e) {
        return Bn(
          e,
          ["b", "a", "s", "l", "p", "f", "e", "n"],
          "(b=[],a=!0,s=!1,l=[],p=0,f=" +
            qn(e, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") +
            ",n=" +
            qn(
              e,
              ["o", "x", "z", "c"],
              'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))',
            ) +
            ",e=" +
            Bn(e, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + qn(e, [], "a&&(l[t]=void 0)") + ")") +
            ",{__SEROVAL_STREAM__:!0,on:" +
            Bn(e, ["o"], "e(o)") +
            ",next:" +
            qn(e, ["v"], 'a&&(b.push(v),f(v,"next"))') +
            ",throw:" +
            qn(e, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') +
            ",return:" +
            qn(e, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') +
            "})",
        );
      })(e);
    default:
      return "";
  }
}
function Hn() {
  let e = new Set(),
    t = [],
    n = true,
    r = true;
  return {
    __SEROVAL_STREAM__: true,
    on(o) {
      n && e.add(o);
      for (let e = 0, a = t.length; e < a; e++) {
        let i = t[e];
        e !== a - 1 || n ? o.next(i) : r ? o.return(i) : o.throw(i);
      }
      return () => {
        n && e.delete(o);
      };
    },
    next(r) {
      n &&
        (t.push(r),
        (function (t) {
          for (let n of e.keys()) n.next(t);
        })(r));
    },
    throw(o) {
      n &&
        (t.push(o),
        (function (t) {
          for (let n of e.keys()) n.throw(t);
        })(o),
        (n = false),
        (r = false),
        e.clear());
    },
    return(o) {
      n &&
        (t.push(o),
        (function (t) {
          for (let n of e.keys()) n.return(t);
        })(o),
        (n = false),
        (r = true),
        e.clear());
    },
  };
}
function Kn(e) {
  let t = [],
    n = -1,
    r = -1,
    o = e[Symbol.iterator]();
  for (;;)
    try {
      let e = o.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (Ht) {
      (n = t.length), t.push(Ht);
    }
  return { v: t, t: n, d: r };
}
var Gn = class {
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
          { type: 1, value: ((n = t), fn(4, n, dn, dn, dn, dn, dn, dn, dn, dn, dn, dn)) })
        : { type: 0, value: this.createIndex(e) };
      var n;
    }
    getReference(e) {
      let t = this.getIndexedValue(e);
      return 1 === t.type ? t : nn(e) ? { type: 2, value: Cn(t.value, e) } : t;
    }
    parseWellKnownSymbol(e) {
      let t = this.getReference(e);
      return 0 !== t.type
        ? t.value
        : (Zt(e in ln, new zn(e)),
          (function (e, t) {
            return fn(17, e, ln[t], dn, dn, dn, dn, dn, dn, dn, dn, dn);
          })(t.value, e));
    }
    parseSpecialReference(e) {
      let t = this.getIndexedValue(Wn[e]);
      return 1 === t.type ? t.value : fn(26, t.value, e, dn, dn, dn, dn, dn, dn, dn, dn, dn);
    }
    parseIteratorFactory() {
      let e = this.getIndexedValue(Un);
      return 1 === e.type
        ? e.value
        : fn(
            27,
            e.value,
            dn,
            dn,
            dn,
            dn,
            dn,
            dn,
            dn,
            this.parseWellKnownSymbol(Symbol.iterator),
            dn,
            dn,
          );
    }
    parseAsyncIteratorFactory() {
      let e = this.getIndexedValue($n);
      return 1 === e.type
        ? e.value
        : fn(
            29,
            e.value,
            dn,
            dn,
            dn,
            dn,
            dn,
            dn,
            [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)],
            dn,
            dn,
            dn,
          );
    }
    createObjectNode(e, t, n, r) {
      return fn(n ? 11 : 10, e, dn, dn, dn, dn, r, dn, dn, dn, dn, _n(t));
    }
    createMapNode(e, t, n, r) {
      return fn(
        8,
        e,
        dn,
        dn,
        dn,
        dn,
        dn,
        { k: t, v: n, s: r },
        dn,
        this.parseSpecialReference(0),
        dn,
        dn,
      );
    }
    createPromiseConstructorNode(e, t) {
      return fn(22, e, t, dn, dn, dn, dn, dn, dn, this.parseSpecialReference(1), dn, dn);
    }
  },
  Yn = /^[$A-Z_][0-9A-Z_$]*$/i;
function Qn(e) {
  let t = e[0];
  return ("$" === t || "_" === t || (t >= "A" && t <= "Z") || (t >= "a" && t <= "z")) && Yn.test(e);
}
function Xn(e) {
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
function Jn(e) {
  if (e.length) {
    let t = "",
      n = (function (e) {
        let t = [],
          n = e[0];
        for (let r, o = 1, a = e.length, i = n; o < a; o++)
          (r = e[o]),
            0 === r.t && r.v === i.v
              ? (n = { t: 0, s: r.s, k: dn, v: Xn(n) })
              : 2 === r.t && r.s === i.s
                ? (n = { t: 2, s: Xn(n), k: r.k, v: r.v })
                : 1 === r.t && r.s === i.s
                  ? (n = { t: 1, s: Xn(n), k: dn, v: r.v })
                  : 3 === r.t && r.s === i.s
                    ? (n = { t: 3, s: Xn(n), k: r.k, v: dn })
                    : (t.push(n), (n = r)),
            (i = r);
        return t.push(n), t;
      })(e);
    for (let e = 0, r = n.length; e < r; e++) t += Xn(n[e]) + ",";
    return t;
  }
  return dn;
}
var Zn = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: dn },
  er = class {
    constructor(e) {
      (this.stack = []),
        (this.flags = []),
        (this.assignments = []),
        (this.plugins = e.plugins),
        (this.features = e.features),
        (this.marked = new Set(e.markedRefs));
    }
    createFunction(e, t) {
      return Bn(this.features, e, t);
    }
    createEffectfulFunction(e, t) {
      return qn(this.features, e, t);
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
      for (let t = 0, n = this.flags, r = n.length; t < r; t++) {
        let r = n[t];
        e += Zn[r.type] + "(" + r.value + "),";
      }
      return e;
    }
    resolvePatches() {
      let e = Jn(this.assignments),
        t = this.resolveFlags();
      return e ? (t ? e + t : e) : t;
    }
    createAssignment(e, t) {
      this.assignments.push({ t: 0, s: e, k: dn, v: t });
    }
    createAddAssignment(e, t) {
      this.assignments.push({ t: 1, s: this.getRefParam(e), k: dn, v: t });
    }
    createSetAssignment(e, t, n) {
      this.assignments.push({ t: 2, s: this.getRefParam(e), k: t, v: n });
    }
    createDeleteAssignment(e, t) {
      this.assignments.push({ t: 3, s: this.getRefParam(e), k: t, v: dn });
    }
    createArrayAssign(e, t, n) {
      this.createAssignment(this.getRefParam(e) + "[" + t + "]", n);
    }
    createObjectAssign(e, t, n) {
      this.createAssignment(this.getRefParam(e) + "." + t, n);
    }
    isIndexedValueInStack(e) {
      return 4 === e.t && this.stack.includes(e.i);
    }
    serializeReference(e) {
      return this.assignIndexedValue(e.i, Qt + '.get("' + e.s + '")');
    }
    serializeArrayItem(e, t, n) {
      return t
        ? this.isIndexedValueInStack(t)
          ? (this.markRef(e), this.createArrayAssign(e, n, this.getRefParam(t.i)), "")
          : this.serialize(t)
        : "";
    }
    serializeArray(e) {
      let t = e.i;
      if (e.l) {
        this.stack.push(t);
        let n = e.a,
          r = this.serializeArrayItem(t, n[0], 0),
          o = "" === r;
        for (let a, i = 1, s = e.l; i < s; i++)
          (a = this.serializeArrayItem(t, n[i], i)), (r += "," + a), (o = "" === a);
        return (
          this.stack.pop(),
          this.pushObjectFlag(e.o, e.i),
          this.assignIndexedValue(t, "[" + r + (o ? ",]" : "]"))
        );
      }
      return this.assignIndexedValue(t, "[]");
    }
    serializeProperty(e, t, n) {
      if ("string" == typeof t) {
        let r = Number(t),
          o = (r >= 0 && r.toString() === t) || Qn(t);
        if (this.isIndexedValueInStack(n)) {
          let a = this.getRefParam(n.i);
          return (
            this.markRef(e.i),
            o && r != r
              ? this.createObjectAssign(e.i, t, a)
              : this.createArrayAssign(e.i, o ? t : '"' + t + '"', a),
            ""
          );
        }
        return (o ? t : '"' + t + '"') + ":" + this.serialize(n);
      }
      return "[" + this.serialize(t) + "]:" + this.serialize(n);
    }
    serializeProperties(e, t) {
      let n = t.s;
      if (n) {
        let r = t.k,
          o = t.v;
        this.stack.push(e.i);
        let a = this.serializeProperty(e, r[0], o[0]);
        for (let t = 1, i = a; t < n; t++)
          (i = this.serializeProperty(e, r[t], o[t])), (a += (i && a && ",") + i);
        return this.stack.pop(), "{" + a + "}";
      }
      return "{}";
    }
    serializeObject(e) {
      return (
        this.pushObjectFlag(e.o, e.i),
        this.assignIndexedValue(e.i, this.serializeProperties(e, e.p))
      );
    }
    serializeWithObjectAssign(e, t, n) {
      let r = this.serializeProperties(e, t);
      return "{}" !== r ? "Object.assign(" + n + "," + r + ")" : n;
    }
    serializeStringKeyAssignment(e, t, n, r) {
      let o = this.serialize(r),
        a = Number(n),
        i = (a >= 0 && a.toString() === n) || Qn(n);
      if (this.isIndexedValueInStack(r))
        i && a != a
          ? this.createObjectAssign(e.i, n, o)
          : this.createArrayAssign(e.i, i ? n : '"' + n + '"', o);
      else {
        let r = this.assignments;
        (this.assignments = t),
          i && a != a
            ? this.createObjectAssign(e.i, n, o)
            : this.createArrayAssign(e.i, i ? n : '"' + n + '"', o),
          (this.assignments = r);
      }
    }
    serializeAssignment(e, t, n, r) {
      if ("string" == typeof n) this.serializeStringKeyAssignment(e, t, n, r);
      else {
        let o = this.stack;
        this.stack = [];
        let a = this.serialize(r);
        this.stack = o;
        let i = this.assignments;
        (this.assignments = t),
          this.createArrayAssign(e.i, this.serialize(n), a),
          (this.assignments = i);
      }
    }
    serializeAssignments(e, t) {
      let n = t.s;
      if (n) {
        let r = [],
          o = t.k,
          a = t.v;
        this.stack.push(e.i);
        for (let t = 0; t < n; t++) this.serializeAssignment(e, r, o[t], a[t]);
        return this.stack.pop(), Jn(r);
      }
      return dn;
    }
    serializeDictionary(e, t) {
      if (e.p)
        if (8 & this.features) t = this.serializeWithObjectAssign(e, e.p, t);
        else {
          this.markRef(e.i);
          let n = this.serializeAssignments(e, e.p);
          if (n)
            return "(" + this.assignIndexedValue(e.i, t) + "," + n + this.getRefParam(e.i) + ")";
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
        n = e.l,
        r = e.i;
      if (n) {
        let o = e.a;
        this.stack.push(r);
        let a = this.serializeSetItem(r, o[0]);
        for (let e = 1, t = a; e < n; e++)
          (t = this.serializeSetItem(r, o[e])), (a += (t && a && ",") + t);
        this.stack.pop(), a && (t += "([" + a + "])");
      }
      return this.assignIndexedValue(r, t);
    }
    serializeMapEntry(e, t, n, r) {
      if (this.isIndexedValueInStack(t)) {
        let o = this.getRefParam(t.i);
        if ((this.markRef(e), this.isIndexedValueInStack(n))) {
          let t = this.getRefParam(n.i);
          return this.createSetAssignment(e, o, t), "";
        }
        if (4 !== n.t && null != n.i && this.isMarked(n.i)) {
          let t = "(" + this.serialize(n) + ",[" + r + "," + r + "])";
          return (
            this.createSetAssignment(e, o, this.getRefParam(n.i)),
            this.createDeleteAssignment(e, r),
            t
          );
        }
        let a = this.stack;
        return (
          (this.stack = []), this.createSetAssignment(e, o, this.serialize(n)), (this.stack = a), ""
        );
      }
      if (this.isIndexedValueInStack(n)) {
        let o = this.getRefParam(n.i);
        if ((this.markRef(e), 4 !== t.t && null != t.i && this.isMarked(t.i))) {
          let n = "(" + this.serialize(t) + ",[" + r + "," + r + "])";
          return (
            this.createSetAssignment(e, this.getRefParam(t.i), o),
            this.createDeleteAssignment(e, r),
            n
          );
        }
        let a = this.stack;
        return (
          (this.stack = []), this.createSetAssignment(e, this.serialize(t), o), (this.stack = a), ""
        );
      }
      return "[" + this.serialize(t) + "," + this.serialize(n) + "]";
    }
    serializeMap(e) {
      let t = "new Map",
        n = e.e.s,
        r = e.i,
        o = e.f,
        a = this.getRefParam(o.i);
      if (n) {
        let o = e.e.k,
          i = e.e.v;
        this.stack.push(r);
        let s = this.serializeMapEntry(r, o[0], i[0], a);
        for (let e = 1, t = s; e < n; e++)
          (t = this.serializeMapEntry(r, o[e], i[e], a)), (s += (t && s && ",") + t);
        this.stack.pop(), s && (t += "([" + s + "])");
      }
      return (
        26 === o.t && (this.markRef(o.i), (t = "(" + this.serialize(o) + "," + t + ")")),
        this.assignIndexedValue(r, t)
      );
    }
    serializeArrayBuffer(e) {
      let t = "new Uint8Array(",
        n = e.s,
        r = n.length;
      if (r) {
        t += "[" + n[0];
        for (let e = 1; e < r; e++) t += "," + n[e];
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
      let n = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
      return this.stack.pop(), n;
    }
    serializeError(e) {
      return this.serializeDictionary(e, "new " + un[e.s] + '("' + e.m + '")');
    }
    serializePromise(e) {
      let t,
        n = e.f,
        r = e.i,
        o = e.s ? "Promise.resolve" : "Promise.reject";
      if (this.isIndexedValueInStack(n)) {
        let r = this.getRefParam(n.i);
        t =
          o +
          (e.s
            ? "().then(" + this.createFunction([], r) + ")"
            : "().catch(" + this.createEffectfulFunction([], "throw " + r) + ")");
      } else {
        this.stack.push(r);
        let e = this.serialize(n);
        this.stack.pop(), (t = o + "(" + e + ")");
      }
      return this.assignIndexedValue(r, t);
    }
    serializeWellKnownSymbol(e) {
      return this.assignIndexedValue(e.i, sn[e.s]);
    }
    serializeBoxed(e) {
      return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
    }
    serializePlugin(e) {
      let t = this.plugins;
      if (t)
        for (let n = 0, r = t.length; n < r; n++) {
          let r = t[n];
          if (r.tag === e.c)
            return this.assignIndexedValue(e.i, r.serialize(e.s, this, { id: e.i }));
        }
      throw new Ln(e.c);
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
      return this.assignIndexedValue(e.i, Vn(this.features, e.s));
    }
    serializeIteratorFactory(e) {
      let t = "",
        n = false;
      return (
        4 !== e.f.t && (this.markRef(e.f.i), (t = "(" + this.serialize(e.f) + ","), (n = true)),
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
        n && (t += ")"),
        t
      );
    }
    serializeIteratorFactoryInstance(e) {
      return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
    }
    serializeAsyncIteratorFactory(e) {
      let t = e.a[0],
        n = e.a[1],
        r = "";
      4 !== t.t && (this.markRef(t.i), (r += "(" + this.serialize(t))),
        4 !== n.t && (this.markRef(n.i), (r += (r ? "," : "(") + this.serialize(n))),
        r && (r += ",");
      let o = this.assignIndexedValue(
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
              this.getRefParam(n.i) +
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
      return r ? r + o + ")" : o;
    }
    serializeAsyncIteratorFactoryInstance(e) {
      return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
    }
    serializeStreamConstructor(e) {
      let t = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"),
        n = e.a.length;
      if (n) {
        let r = this.serialize(e.a[0]);
        for (let t = 1; t < n; t++) r += "," + this.serialize(e.a[t]);
        return "(" + t + "," + r + "," + this.getRefParam(e.i) + ")";
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
            return cn[e.s];
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
            throw new Mn(e);
        }
      } catch (t) {
        throw new Dn(t);
      }
    }
  },
  tr = class extends er {
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
        n = e.i;
      if (null == n) return t;
      let r = this.resolvePatches(),
        o = this.getRefParam(n),
        a = null == this.scopeId ? "" : Xt,
        i = r ? "(" + t + "," + r + o + ")" : t;
      if ("" === a) return 10 !== e.t || r ? i : "(" + i + ")";
      let s = null == this.scopeId ? "()" : '($R["' + Yt(this.scopeId) + '"])';
      return "(" + this.createFunction([a], i) + ")" + s;
    }
  },
  nr = class extends Gn {
    parseItems(e) {
      let t = [];
      for (let n = 0, r = e.length; n < r; n++) n in e && (t[n] = this.parse(e[n]));
      return t;
    }
    parseArray(e, t) {
      return (function (e, t, n) {
        return fn(9, e, dn, t.length, dn, dn, dn, dn, n, dn, dn, _n(t));
      })(e, t, this.parseItems(t));
    }
    parseProperties(e) {
      let t = Object.entries(e),
        n = [],
        r = [];
      for (let a = 0, i = t.length; a < i; a++) n.push(Yt(t[a][0])), r.push(this.parse(t[a][1]));
      let o = Symbol.iterator;
      return (
        o in e &&
          (n.push(this.parseWellKnownSymbol(o)),
          r.push(An(this.parseIteratorFactory(), this.parse(Kn(e))))),
        (o = Symbol.asyncIterator),
        o in e &&
          (n.push(this.parseWellKnownSymbol(o)),
          r.push(Pn(this.parseAsyncIteratorFactory(), this.parse(Hn())))),
        (o = Symbol.toStringTag),
        o in e && (n.push(this.parseWellKnownSymbol(o)), r.push(Rn(e[o]))),
        (o = Symbol.isConcatSpreadable),
        o in e && (n.push(this.parseWellKnownSymbol(o)), r.push(e[o] ? hn : mn)),
        { k: n, v: r, s: n.length }
      );
    }
    parsePlainObject(e, t, n) {
      return this.createObjectNode(e, t, n, this.parseProperties(t));
    }
    parseBoxed(e, t) {
      return (function (e, t) {
        return fn(21, e, dn, dn, dn, dn, dn, dn, dn, t, dn, dn);
      })(e, this.parse(t.valueOf()));
    }
    parseTypedArray(e, t) {
      return (function (e, t, n) {
        return fn(15, e, dn, t.length, t.constructor.name, dn, dn, dn, dn, n, t.byteOffset, dn);
      })(e, t, this.parse(t.buffer));
    }
    parseBigIntTypedArray(e, t) {
      return (function (e, t, n) {
        return fn(16, e, dn, t.length, t.constructor.name, dn, dn, dn, dn, n, t.byteOffset, dn);
      })(e, t, this.parse(t.buffer));
    }
    parseDataView(e, t) {
      return (function (e, t, n) {
        return fn(20, e, dn, t.byteLength, dn, dn, dn, dn, dn, n, t.byteOffset, dn);
      })(e, t, this.parse(t.buffer));
    }
    parseError(e, t) {
      let n = En(t, this.features);
      return (function (e, t, n) {
        return fn(13, e, Sn(t), dn, dn, Yt(t.message), n, dn, dn, dn, dn, dn);
      })(e, t, n ? this.parseProperties(n) : dn);
    }
    parseAggregateError(e, t) {
      let n = En(t, this.features);
      return (function (e, t, n) {
        return fn(14, e, Sn(t), dn, dn, Yt(t.message), n, dn, dn, dn, dn, dn);
      })(e, t, n ? this.parseProperties(n) : dn);
    }
    parseMap(e, t) {
      let n = [],
        r = [];
      for (let [o, a] of t.entries()) n.push(this.parse(o)), r.push(this.parse(a));
      return this.createMapNode(e, n, r, t.size);
    }
    parseSet(e, t) {
      let n = [];
      for (let r of t.keys()) n.push(this.parse(r));
      return (function (e, t, n) {
        return fn(7, e, dn, t, dn, dn, dn, dn, n, dn, dn, dn);
      })(e, t.size, n);
    }
    parsePlugin(e, t) {
      let n = this.plugins;
      if (n)
        for (let r = 0, o = n.length; r < o; r++) {
          let o = n[r];
          if (o.parse.sync && o.test(t)) return Nn(e, o.tag, o.parse.sync(t, this, { id: e }));
        }
    }
    parseStream(e, t) {
      return kn(e, this.parseSpecialReference(4), []);
    }
    parsePromise(e, t) {
      return this.createPromiseConstructorNode(e, this.createIndex({}));
    }
    parseObject(e, t) {
      if (Array.isArray(t)) return this.parseArray(e, t);
      if ("__SEROVAL_STREAM__" in t) return this.parseStream(e, t);
      let n = t.constructor;
      if (n === Fn) return this.parse(t.replacement);
      let r = this.parsePlugin(e, t);
      if (r) return r;
      switch (n) {
        case Object:
          return this.parsePlainObject(e, t, false);
        case void 0:
          return this.parsePlainObject(e, t, true);
        case Date:
          return (function (e, t) {
            let n = t.valueOf();
            return fn(5, e, n != n ? "" : t.toISOString(), dn, dn, dn, dn, dn, dn, dn, dn, dn);
          })(e, t);
        case RegExp:
          return (function (e, t) {
            return fn(6, e, dn, dn, Yt(t.source), t.flags, dn, dn, dn, dn, dn, dn);
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
            let n = new Uint8Array(t),
              r = n.length,
              o = new Array(r);
            for (let a = 0; a < r; a++) o[a] = n[a];
            return fn(19, e, o, dn, dn, dn, dn, dn, dn, dn, dn, dn);
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
      if (n === Promise || t instanceof Promise) return this.parsePromise(e, t);
      let o = this.features;
      if (16 & o)
        switch (n) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e, t);
        }
      if (
        1 & o &&
        "undefined" != typeof AggregateError &&
        (n === AggregateError || t instanceof AggregateError)
      )
        return this.parseAggregateError(e, t);
      if (t instanceof Error) return this.parseError(e, t);
      if (Symbol.iterator in t || Symbol.asyncIterator in t)
        return this.parsePlainObject(e, t, !!n);
      throw new zn(t);
    }
    parseFunction(e) {
      let t = this.getReference(e);
      if (0 !== t.type) return t.value;
      let n = this.parsePlugin(t.value, e);
      if (n) return n;
      throw new zn(e);
    }
    parse(e) {
      switch (typeof e) {
        case "boolean":
          return e ? hn : mn;
        case "undefined":
          return gn;
        case "string":
          return Rn(e);
        case "number":
          return (function (e) {
            switch (e) {
              case Number.POSITIVE_INFINITY:
                return bn;
              case Number.NEGATIVE_INFINITY:
                return wn;
            }
            return e != e
              ? xn
              : Object.is(e, -0)
                ? yn
                : fn(0, dn, e, dn, dn, dn, dn, dn, dn, dn, dn, dn);
          })(e);
        case "bigint":
          return fn(3, dn, "" + e, dn, dn, dn, dn, dn, dn, dn, dn, dn);
        case "object":
          if (e) {
            let t = this.getReference(e);
            return 0 === t.type ? this.parseObject(t.value, e) : t.value;
          }
          return vn;
        case "symbol":
          return this.parseWellKnownSymbol(e);
        case "function":
          return this.parseFunction(e);
        default:
          throw new zn(e);
      }
    }
    parseTop(e) {
      try {
        return this.parse(e);
      } catch (t) {
        throw t instanceof On ? t : new On(t);
      }
    }
  },
  rr = class extends nr {
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
      } catch (n) {
        this.onError(n);
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
        n = [],
        r = [];
      for (let a = 0, i = t.length; a < i; a++) n.push(Yt(t[a][0])), r.push(this.parse(t[a][1]));
      let o = Symbol.iterator;
      return (
        o in e &&
          (n.push(this.parseWellKnownSymbol(o)),
          r.push(An(this.parseIteratorFactory(), this.parse(Kn(e))))),
        (o = Symbol.asyncIterator),
        o in e &&
          (n.push(this.parseWellKnownSymbol(o)),
          r.push(
            Pn(
              this.parseAsyncIteratorFactory(),
              this.parse(
                (function (e) {
                  let t = Hn(),
                    r = e[Symbol.asyncIterator]();
                  return (
                    (async function e() {
                      try {
                        let n = await r.next();
                        n.done ? t.return(n.value) : (t.next(n.value), await e());
                      } catch (n) {
                        t.throw(n);
                      }
                    })().catch(() => {}),
                    t
                  );
                })(e),
              ),
            ),
          )),
        (o = Symbol.toStringTag),
        o in e && (n.push(this.parseWellKnownSymbol(o)), r.push(Rn(e[o]))),
        (o = Symbol.isConcatSpreadable),
        o in e && (n.push(this.parseWellKnownSymbol(o)), r.push(e[o] ? hn : mn)),
        { k: n, v: r, s: n.length }
      );
    }
    handlePromiseSuccess(e, t) {
      let n = this.parseWithError(t);
      n &&
        this.onParse(
          fn(23, e, dn, dn, dn, dn, dn, dn, [this.parseSpecialReference(2), n], dn, dn, dn),
        ),
        this.popPendingState();
    }
    handlePromiseFailure(e, t) {
      if (this.alive) {
        let n = this.parseWithError(t);
        n &&
          this.onParse(
            fn(24, e, dn, dn, dn, dn, dn, dn, [this.parseSpecialReference(3), n], dn, dn, dn),
          );
      }
      this.popPendingState();
    }
    parsePromise(e, t) {
      let n = this.createIndex({});
      return (
        t.then(this.handlePromiseSuccess.bind(this, n), this.handlePromiseFailure.bind(this, n)),
        this.pushPendingState(),
        this.createPromiseConstructorNode(e, n)
      );
    }
    parsePlugin(e, t) {
      let n = this.plugins;
      if (n)
        for (let r = 0, o = n.length; r < o; r++) {
          let o = n[r];
          if (o.parse.stream && o.test(t)) return Nn(e, o.tag, o.parse.stream(t, this, { id: e }));
        }
      return dn;
    }
    parseStream(e, t) {
      let n = kn(e, this.parseSpecialReference(4), []);
      return (
        this.pushPendingState(),
        t.on({
          next: (t) => {
            if (this.alive) {
              let n = this.parseWithError(t);
              n && this.onParse(fn(32, e, dn, dn, dn, dn, dn, dn, dn, n, dn, dn));
            }
          },
          throw: (t) => {
            if (this.alive) {
              let n = this.parseWithError(t);
              n && this.onParse(fn(33, e, dn, dn, dn, dn, dn, dn, dn, n, dn, dn));
            }
            this.popPendingState();
          },
          return: (t) => {
            if (this.alive) {
              let n = this.parseWithError(t);
              n && this.onParse(fn(34, e, dn, dn, dn, dn, dn, dn, dn, n, dn, dn));
            }
            this.popPendingState();
          },
        }),
        n
      );
    }
    parseWithError(e) {
      try {
        return this.parse(e);
      } catch (t) {
        return this.onError(t), dn;
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
  or = class extends rr {
    constructor() {
      super(...arguments), (this.mode = "cross");
    }
  };
var ar = {};
function ir(e) {
  let t = Hn(),
    n = e.getReader();
  return (
    (async function e() {
      try {
        let r = await n.read();
        r.done ? t.return(r.value) : (t.next(r.value), await e());
      } catch (r) {
        t.throw(r);
      }
    })().catch(() => {}),
    t
  );
}
var sr = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [
      {
        tag: "seroval-plugins/web/ReadableStreamFactory",
        test: (e) => e === ar,
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
        deserialize: () => ar,
      },
    ],
    test: (e) => "undefined" != typeof ReadableStream && e instanceof ReadableStream,
    parse: {
      sync: (e, t) => ({ factory: t.parse(ar), stream: t.parse(Hn()) }),
      async: async (e, t) => ({ factory: await t.parse(ar), stream: await t.parse(ir(e)) }),
      stream: (e, t) => ({ factory: t.parse(ar), stream: t.parse(ir(e)) }),
    },
    serialize: (e, t) => "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")",
    deserialize(e, t) {
      let n = t.deserialize(e.stream);
      return new ReadableStream({
        start(e) {
          n.on({
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
  lr = sr;
const cr = rn({
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
function ur(e) {
  const t = { i: e.id, u: e.updatedAt, s: e.status },
    n = [
      ["__beforeLoadContext", "b"],
      ["loaderData", "l"],
      ["error", "e"],
      ["ssr", "ssr"],
    ];
  for (const [r, o] of n) void 0 !== e[r] && (t[o] = e[r]);
  return t;
}
function dr(e, t) {
  e.ssr = { manifest: t };
  const n = new Map();
  let r = false;
  const o = () => {
    return r
      ? ""
      : ((r = true),
        (null == (e = "tsr") ? `${Jt}=${Jt}||[]` : `(${Jt}=${Jt}||{})["${Yt(e)}"]=[]`) +
          ';self.$_TSR={c:()=>{document.querySelectorAll(".\\\\$tsr").forEach(e=>{e.remove()})}};\n;');
    var e;
  };
  let a = false;
  const i = [];
  e.serverSsr = {
    injectedHtml: [],
    injectHtml: (t) => {
      const n = Promise.resolve().then(t);
      return (
        e.serverSsr.injectedHtml.push(n),
        e.emit({ type: "onInjectedHtml", promise: n }),
        n.then(() => {})
      );
    },
    injectScript: (t) =>
      e.serverSsr.injectHtml(async () => {
        const e = await t();
        return `<script class='$tsr'>${o()}${e};if (typeof $_TSR !== 'undefined') $_TSR.c()<\/script>`;
      }),
    dehydrate: async () => {
      var t, r, o;
      wt(!a);
      let i = e.state.matches;
      e.isShell() && (i = i.slice(0, 1));
      const s = i.map(ur),
        l = { manifest: e.ssr.manifest, matches: s },
        c = null == (t = i[i.length - 1]) ? void 0 : t.id;
      c && (l.lastMatchId = c),
        (l.dehydratedData = await (null == (o = (r = e.options).dehydrate) ? void 0 : o.call(r))),
        (a = true);
      const u = (function () {
        let e, t;
        const n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (
          (n.status = "pending"),
          (n.resolve = (t) => {
            (n.status = "resolved"), (n.value = t), e(t);
          }),
          (n.reject = (e) => {
            (n.status = "rejected"), t(e);
          }),
          n
        );
      })();
      !(function (e, t) {
        let n = an(t.plugins),
          r = new or({
            plugins: n,
            refs: t.refs,
            disabledFeatures: t.disabledFeatures,
            onParse(e, o) {
              let a,
                i = new tr({
                  plugins: n,
                  features: r.features,
                  scopeId: t.scopeId,
                  markedRefs: r.marked,
                });
              try {
                a = i.serializeTop(e);
              } catch (s) {
                return void (t.onError && t.onError(s));
              }
              t.onSerialize(a, o);
            },
            onError: t.onError,
            onDone: t.onDone,
          });
        r.start(e), r.destroy.bind(r);
      })(l, {
        refs: n,
        plugins: [lr, cr],
        onSerialize: (t, n) => {
          const r = n ? '$_TSR["router"]=' + t : t;
          e.serverSsr.injectScript(() => r);
        },
        scopeId: "tsr",
        onDone: () => u.resolve(""),
        onError: (e) => u.reject(e),
      }),
        e.serverSsr.injectHtml(() => u);
    },
    isDehydrated: () => a,
    onRenderFinished: (e) => i.push(e),
    setRenderFinished: () => {
      i.forEach((e) => e());
    },
  };
}
function fr(e, t) {
  try {
    return t in e;
  } catch {
    return false;
  }
}
var pr = Object.defineProperty,
  hr = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? pr(e, t, { enumerable: true, configurable: true, writable: true, value: n })
        : (e[t] = n);
    })(e, "symbol" != typeof t ? t + "" : t, n),
    n
  );
class mr extends Error {
  constructor(e, t = {}) {
    super(e, t),
      hr(this, "statusCode", 500),
      hr(this, "fatal", false),
      hr(this, "unhandled", false),
      hr(this, "statusMessage"),
      hr(this, "data"),
      hr(this, "cause"),
      t.cause && !this.cause && (this.cause = t.cause);
  }
  toJSON() {
    const e = { message: this.message, statusCode: Er(this.statusCode, 500) };
    return (
      this.statusMessage && (e.statusMessage = Sr(this.statusMessage)),
      void 0 !== this.data && (e.data = this.data),
      e
    );
  }
}
function gr(e, t, n) {
  if (
    !(function (e, t, n) {
      if ("string" == typeof t) {
        if (e.method === t) return true;
      } else if (t.includes(e.method)) return true;
      return false;
    })(e, t)
  )
    throw (function (e) {
      if ("string" == typeof e) return new mr(e);
      if (
        (function (e) {
          return true === e?.constructor?.__h3_error__;
        })(e)
      )
        return e;
      const t = new mr(e.message ?? e.statusMessage ?? "", { cause: e.cause || e });
      if (fr(e, "stack"))
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
          ? (t.statusCode = Er(e.statusCode, t.statusCode))
          : e.status && (t.statusCode = Er(e.status, t.statusCode)),
        e.statusMessage
          ? (t.statusMessage = e.statusMessage)
          : e.statusText && (t.statusMessage = e.statusText),
        t.statusMessage)
      ) {
        const e = t.statusMessage;
        Sr(t.statusMessage) !== e &&
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
function vr(e) {
  return (
    e.web?.request ||
    new Request(
      (function (e, t = {}) {
        const n = (function (e, t = {}) {
            if (t.xForwardedHost) {
              const t = e.node.req.headers["x-forwarded-host"];
              if (t) return t;
            }
            return e.node.req.headers.host || "localhost";
          })(e, t),
          r = (function (e, t = {}) {
            return (false !== t.xForwardedProto &&
              "https" === e.node.req.headers["x-forwarded-proto"]) ||
              e.node.req.connection?.encrypted
              ? "https"
              : "http";
          })(e, t),
          o = (e.node.req.originalUrl || e.path).replace(/^[/\\]+/g, "/");
        return new URL(o, `${r}://${n}`);
      })(e),
      { duplex: "half", method: e.method, headers: e.headers, body: wr(e) },
    )
  );
}
hr(mr, "__h3_error__", true);
const yr = Symbol.for("h3RawBody"),
  br = ["PATCH", "POST", "PUT", "DELETE"];
function wr(e) {
  if (!br.includes(e.method)) return;
  const t = e.web?.request?.body || e._requestBody;
  if (t) return t;
  return yr in e.node.req ||
    "rawBody" in e.node.req ||
    "body" in e.node.req ||
    "__unenv__" in e.node.req
    ? new ReadableStream({
        async start(t) {
          const n = await (function (e, t = "utf8") {
            gr(e, br);
            const n =
              e._requestBody ||
              e.web?.request?.body ||
              e.node.req[yr] ||
              e.node.req.rawBody ||
              e.node.req.body;
            if (n) {
              const e = Promise.resolve(n).then((e) =>
                Buffer.isBuffer(e)
                  ? e
                  : "function" == typeof e.pipeTo
                    ? new Promise((t, n) => {
                        const r = [];
                        e.pipeTo(
                          new WritableStream({
                            write(e) {
                              r.push(e);
                            },
                            close() {
                              t(Buffer.concat(r));
                            },
                            abort(e) {
                              n(e);
                            },
                          }),
                        ).catch(n);
                      })
                    : "function" == typeof e.pipe
                      ? new Promise((t, n) => {
                          const r = [];
                          e.on("data", (e) => {
                            r.push(e);
                          })
                            .on("end", () => {
                              t(Buffer.concat(r));
                            })
                            .on("error", n);
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
            const r = (e.node.req[yr] = new Promise((t, n) => {
              const r = [];
              e.node.req
                .on("error", (e) => {
                  n(e);
                })
                .on("data", (e) => {
                  r.push(e);
                })
                .on("end", () => {
                  t(Buffer.concat(r));
                });
            }));
            return t ? r.then((e) => e.toString(t)) : r;
          })(e, false);
          n && t.enqueue(n), t.close();
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
const xr = /[^\u0009\u0020-\u007E]/g;
function Sr(e = "") {
  return e.replace(xr, "");
}
function Er(e, t = 200) {
  return e ? ("string" == typeof e && (e = Number.parseInt(e, 10)), e < 100 || e > 999 ? t : e) : t;
}
function _r(e) {
  if (Array.isArray(e)) return e.flatMap((e) => _r(e));
  if ("string" != typeof e) return [];
  const t = [];
  let n,
    r,
    o,
    a,
    i,
    s = 0;
  const l = () => {
    for (; s < e.length && /\s/.test(e.charAt(s)); ) s += 1;
    return s < e.length;
  };
  for (; s < e.length; ) {
    for (n = s, i = false; l(); )
      if (((r = e.charAt(s)), "," === r)) {
        for (
          o = s, s += 1, l(), a = s;
          s < e.length && ((r = e.charAt(s)), "=" !== r && ";" !== r && "," !== r);

        )
          s += 1;
        s < e.length && "=" === e.charAt(s)
          ? ((i = true), (s = a), t.push(e.slice(n, o)), (n = s))
          : (s = o + 1);
      } else s += 1;
    (!i || s >= e.length) && t.push(e.slice(n));
  }
  return t;
}
function Rr(e, t) {
  for (const [n, r] of t.headers)
    "set-cookie" === n ? e.node.res.appendHeader(n, _r(r)) : e.node.res.setHeader(n, r);
  if (
    (t.status && (e.node.res.statusCode = Er(t.status, e.node.res.statusCode)),
    t.statusText && (e.node.res.statusMessage = Sr(t.statusText)),
    t.redirected && e.node.res.setHeader("location", t.url),
    t.body)
  )
    return (function (e, t) {
      if (!t || "object" != typeof t) throw new Error("[h3] Invalid stream provided.");
      if (((e.node.res._data = t), !e.node.res.socket))
        return (e._handled = true), Promise.resolve();
      if (fr(t, "pipeTo") && "function" == typeof t.pipeTo)
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
      if (fr(t, "pipe") && "function" == typeof t.pipe)
        return new Promise((n, r) => {
          t.pipe(e.node.res),
            t.on &&
              (t.on("end", () => {
                e.node.res.end(), n();
              }),
              t.on("error", (e) => {
                r(e);
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
var Cr = Object.defineProperty,
  Nr = (e, t, n) => (
    ((e, t, n) => {
      t in e
        ? Cr(e, t, { enumerable: true, configurable: true, writable: true, value: n })
        : (e[t] = n);
    })(e, "symbol" != typeof t ? t + "" : t, n),
    n
  );
class Ar {
  constructor(e, t) {
    Nr(this, "__is_event__", true),
      Nr(this, "node"),
      Nr(this, "web"),
      Nr(this, "context", {}),
      Nr(this, "_method"),
      Nr(this, "_path"),
      Nr(this, "_headers"),
      Nr(this, "_requestBody"),
      Nr(this, "_handled", false),
      Nr(this, "_onBeforeResponseCalled"),
      Nr(this, "_onAfterResponseCalled"),
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
          for (const [n, r] of Object.entries(e))
            if (Array.isArray(r)) for (const e of r) t.append(n, e);
            else r && t.set(n, r);
          return t;
        })(this.node.req.headers)),
      this._headers
    );
  }
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(e) {
    return Promise.resolve(e).then((e) => Rr(this, e));
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
function Pr(e) {
  return e ? (Array.isArray(e) ? e : [e]) : void 0;
}
const kr = new AsyncLocalStorage();
function Tr() {
  const e = kr.getStore();
  if (!e)
    throw new Error(
      "No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.",
    );
  return e;
}
const Ir = Symbol("$HTTPEvent");
function Or(e) {
  return function (...t) {
    const n = t[0];
    var r;
    return (
      "object" == typeof (r = n) &&
      (r instanceof Ar ||
        (null == r ? void 0 : r[Ir]) instanceof Ar ||
        true === (null == r ? void 0 : r.__is_event__))
        ? (t[0] = n instanceof Ar || n.__is_event__ ? n : n[Ir])
        : t.unshift(Tr()),
      e(...t)
    );
  };
}
const Dr = Or(function (e) {
    return e.node.res.statusCode;
  }),
  zr = Or(function (e) {
    return e.node.res.getHeaders();
  });
const Mr = "tanstack-start-route-tree:v",
  Lr = "tanstack-start-manifest:v",
  jr = "tanstack-start-server-fn-manifest:v";
async function Fr(e) {
  switch (e) {
    case Mr:
      return await Promise.resolve().then(() => ZP);
    case Lr:
      return await import("./_tanstack-start-manifest_v-IiFfMDuk.mjs");
    case jr:
      return await import("./_tanstack-start-server-fn-manifest_v-FmFgRqLi.mjs");
    default:
      throw new Error(`Unknown virtual module: ${e}`);
  }
}
async function Br(e, t) {
  if (t && true === t.__serverFn && t.functionId) {
    const e = await qr(t.functionId);
    return async (t, n) => (await e(t ?? {}, n)).result;
  }
  return t;
}
async function qr(e) {
  const { default: t } = await Fr(jr),
    n = t[e];
  if (!n)
    throw (
      (console.info("serverFnManifest", t), new Error("Server function info not found for " + e))
    );
  const r = await n.importer();
  if (!r)
    throw (
      (console.info("serverFnInfo", n), new Error("Server function module not resolved for " + e))
    );
  const o = r[n.functionName];
  if (!o)
    throw (
      (console.info("serverFnInfo", n),
      console.info("fnModule", r),
      new Error(`Server function module export not resolved for serverFn ID: ${e}`))
    );
  return o;
}
async function Ur(e) {
  const t = qt.parse(e);
  return (
    await (async function (e, t) {
      const n = { "": e };
      return (
        await (async function e(n, r) {
          const o = n[r];
          o && "object" == typeof o && (await Promise.all(Object.keys(o).map((t) => e(o, t)))),
            t && (n[r] = await t(r, n[r]));
        })(n, ""),
        n[""]
      );
    })(t, Br),
    t
  );
}
function $r(e) {
  const { headers: t, ...n } = e;
  return new Response(JSON.stringify(n), {
    status: 200,
    headers: { "Content-Type": "application/json", ...(t || {}) },
  });
}
const Wr = "X-TSS_SHELL";
function Vr(e) {
  return async ({ next: t, ...n }) => {
    const r = await e(n);
    return r ? { response: r } : t(n);
  };
}
function Hr(e) {
  return Kr(e) ? { response: e } : e;
}
function Kr(e) {
  return e instanceof Response || Lt(e);
}
function Gr(e, t) {
  const n = t || {},
    r = {
      isRoot: false,
      path: "",
      id: "",
      fullPath: "",
      to: "",
      options: n,
      parentRoute: void 0,
      _types: {},
      middleware: (e) => Gr(void 0, { ...n, middleware: e }),
      methods: (e) => {
        const n = "function" == typeof e ? e(Qr()) : e;
        return Gr(void 0, { ...t, methods: n });
      },
      update: (e) => Gr(void 0, { ...n, ...e }),
      init: (e) => {
        var t;
        n.originalIndex = e.originalIndex;
        const o = !n.path && !n.id;
        if (((r.parentRoute = null == (t = n.getParentRoute) ? void 0 : t.call(n)), o)) r.path = Mt;
        else if (!r.parentRoute)
          throw new Error(
            "Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a ServerRoute instance.",
          );
        let a = o ? Mt : n.path;
        a && "/" !== a && (a = Rt(a));
        const i = n.id || a;
        let s = o ? Mt : Et([r.parentRoute.id === Mt ? "" : r.parentRoute.id, i]);
        a === Mt && (a = "/"), s !== Mt && (s = Et(["/", s]));
        const l = s === Mt ? "/" : Et([r.parentRoute.fullPath, a]);
        (r.path = a), (r.id = s), (r.fullPath = l), (r.to = l), (r.isRoot = o);
      },
      _addFileChildren: (e) => (
        Array.isArray(e) && (r.children = e),
        "object" == typeof e && null !== e && (r.children = Object.values(e)),
        r
      ),
      _addFileTypes: () => r,
    };
  return r;
}
const Yr = Gr,
  Qr = (e) => ({
    _options: e || {},
    _types: {},
    middleware: (t) => Qr({ ...e, middlewares: t }),
    handler: (t) => Qr({ ...e, handler: t }),
  }),
  Xr = m.Literal("dark", "light", "system");
m.Literal("dark", "light");
const Jr = g.createContext({
    theme: "system",
    actualTheme: "light",
    setTheme: () => null,
    isHydrated: false,
  }),
  Zr = ({
    attribute: e = "class",
    children: t,
    defaultTheme: n = "system",
    disableTransitionOnChange: r = false,
    enableSystem: o = true,
    storageKey: a = "theme",
    ...i
  }) => {
    const [s, l] = g.useState(n),
      [c, u] = g.useState(false);
    g.useEffect(() => {
      const e = h.fromNullable(localStorage.getItem(a)).pipe(
        h.flatMap((e) => m.decodeUnknownOption(Xr)(e)),
        h.getOrElse(() => n),
      );
      l(e), u(true);
    }, [n, a]);
    const p = g.useMemo(
      () =>
        c
          ? "system" === s && o
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
            : "system" === s
              ? "light"
              : s
          : "dark" === n
            ? "dark"
            : "light",
      [s, c, o, n],
    );
    g.useEffect(() => {
      if (!c) return;
      const t = document.documentElement,
        n = r
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
        ? (t.classList.remove("light", "dark"), t.classList.add(p))
        : t.setAttribute("data-theme", p),
        (t.style.colorScheme = p),
        n?.();
    }, [p, c, e, r]),
      g.useEffect(() => {
        if (!c || !o || "system" !== s) return;
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
      }, [s, c, o]),
      g.useEffect(() => {
        if (!c) return;
        const e = (e) => {
          if (e.key !== a) return;
          const t = h.fromNullable(e.newValue).pipe(
            h.flatMap((e) => m.decodeUnknownOption(Xr)(e)),
            h.getOrElse(() => n),
          );
          l(t);
        };
        return (
          window.addEventListener("storage", e),
          () => {
            window.removeEventListener("storage", e);
          }
        );
      }, [a, n, c]);
    const v = g.useCallback(
        (e) => {
          if (!c) return;
          const t = h.fromNullable(e).pipe(
            h.flatMap((e) => m.decodeUnknownOption(Xr)(e)),
            h.getOrElse(() => n),
          );
          l(t);
          try {
            localStorage.setItem(a, t);
          } catch {}
        },
        [a, n, c],
      ),
      y = g.useMemo(() => ({ theme: s, actualTheme: p, setTheme: v, isHydrated: c }), [s, p, v, c]);
    return jsxs(g.Fragment, {
      children: [
        jsx("script", {
          suppressHydrationWarning: true,
          dangerouslySetInnerHTML: {
            __html:
              "\n  (function() {\n    try {\n      var theme = localStorage.getItem('theme') || 'system';\n      var actualTheme = theme;\n\n      if (theme === 'system') {\n        actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n      }\n\n      document.documentElement.classList.remove('light', 'dark');\n      document.documentElement.classList.add(actualTheme);\n      document.documentElement.style.colorScheme = actualTheme;\n    } catch (e) {\n      document.documentElement.classList.add('light');\n      document.documentElement.style.colorScheme = 'light';\n    }\n  })();\n",
          },
        }),
        jsx(Jr.Provider, { ...i, value: y, children: t }),
      ],
    });
  },
  eo = () => {
    const e = g.useContext(Jr);
    if (void 0 === e) throw new Error("useTheme must be used within a ThemeProvider");
    return e;
  };
class to extends m.Class("EnvVars")({
  ENV: m
    .Literal("dev", "staging", "prod", "local")
    .annotations({ decodingFallback: () => M.right("prod") }),
  API_URL: m.URL,
}) {}
const no = pipe(
    z.match(false, {
      onTrue: constant({ ENV: "dev", API_URL: "http://localhost:3000/api" }),
      onFalse: constant({ ENV: "local", API_URL: String("http://localhost:5173") }),
    }),
    m.decodeUnknownEither(to),
    M.map((e) => ({ ...e, EFFECTIVE_ENV: "local" === e.ENV ? "dev" : e.ENV })),
    M.getOrElse((e) => {
      throw new Error(`❌ Invalid environment variables: ${TreeFormatter.formatErrorSync(e)}`);
    }),
  ),
  ro = (e) =>
    e.pipe(
      HttpClient.transformResponse(
        Effect.fnUntraced(function* (e) {
          if ("dev" === no.EFFECTIVE_ENV) {
            const e = yield* Random.nextRange(200, 500);
            yield* Effect.sleep(Duration.millis(e));
          }
          return yield* e;
        }),
      ),
      HttpClient.retryTransient({ times: 3, schedule: Schedule.exponential("100 millis") }),
    );
dual(2, (e, t) => te.zipRight(t, e)),
  dual(3, (e, t, n) => te.flatMap(te.sync(t), (t) => (t ? e : te.fail(n())))),
  dual(3, (e, t, n) => te.flatMap(t, (t) => (t ? e : te.fail(n())))),
  re.replace(
    re.defaultLogger,
    re.prettyLogger().pipe(
      re.mapInputOptions((e) => {
        const t = ne.get(e.annotations, "__prefix");
        if ("Some" === t._tag) {
          const n = String(t.value),
            r = ne.remove(e.annotations, "__prefix"),
            o = Array.isArray(e.message) ? e.message : [e.message],
            a = o.length > 0 ? [`[${n}] ${o[0]}`, ...o.slice(1)] : [`[${n}]`];
          return { ...e, message: a, annotations: r };
        }
        return e;
      }),
    ),
  );
m.Class("PaginationQuery")({
  limit: m
    .optional(m.Int.pipe(m.lessThanOrEqualTo(200)))
    .pipe(m.withDefaults({ constructor: () => 100, decoding: () => 100 })),
  offset: m
    .optional(m.Int.pipe(m.nonNegative()))
    .pipe(m.withDefaults({ constructor: () => 0, decoding: () => 0 })),
});
class oo extends m.transform(
  m.NonNegative.annotations({
    description: "a non-negative number of seconds to be decoded into a Duration",
  }),
  m.DurationFromSelf,
  { strict: true, decode: (e) => oe.seconds(e), encode: (e) => oe.toSeconds(e) },
) {}
m.compose(m.NumberFromString, oo).annotations({
  title: "DurationFromDeltaSecondsString",
  description: "parses a string of non-negative delta-seconds into a Duration",
});
const ao = m.Struct({
  type: m.optional(m.Literal("object", "string", "number", "integer", "boolean", "array", "null")),
  title: m.optional(m.String),
  description: m.optional(m.String),
  default: m.optional(m.Unknown),
  minLength: m.optional(m.Number),
  maxLength: m.optional(m.Number),
  pattern: m.optional(m.String),
  format: m.optional(
    m.Union(m.Literal("email", "date", "time", "date-time", "uri", "uuid"), m.String),
  ),
  minimum: m.optional(m.Number),
  maximum: m.optional(m.Number),
  exclusiveMinimum: m.optional(m.Number),
  exclusiveMaximum: m.optional(m.Number),
  multipleOf: m.optional(m.Number),
  items: m.optional(m.Unknown),
  minItems: m.optional(m.Number),
  maxItems: m.optional(m.Number),
  uniqueItems: m.optional(m.Boolean),
  properties: m.optional(m.Record({ key: m.String, value: m.Object })),
  required: m.optional(m.Array(m.String)),
  additionalProperties: m.optional(m.Union(m.Boolean, m.Object)),
  enum: m.optional(m.Array(m.Unknown)),
  const: m.optional(m.Unknown),
  allOf: m.optional(m.Array(m.Object)),
  anyOf: m.optional(m.Array(m.Object)),
  oneOf: m.optional(m.Array(m.Object)),
  not: m.optional(m.Object),
  if: m.optional(m.Object),
  then: m.optional(m.Object),
  else: m.optional(m.Object),
  readOnly: m.optional(m.Boolean),
  writeOnly: m.optional(m.Boolean),
});
m
  .parseJson(
    m.Struct({
      type: m.Literal("object"),
      properties: m.Record({ key: m.String, value: ao }),
      title: m.optional(m.String),
      description: m.optional(m.String),
      required: m.optional(m.Array(m.String)),
      minProperties: m.optional(m.Number),
      maxProperties: m.optional(m.Number),
      $schema: m.optional(m.String),
      $id: m.optional(m.String),
      definitions: m.optional(m.Record({ key: m.String, value: ao })),
    }),
  )
  .annotations({ identifier: "FormJsonSchema" }),
  m.URL.pipe(
    m.transform(m.String, { decode: (e) => e.toString(), encode: (e) => new URL(e), strict: true }),
  );
class io extends m.String.pipe(
  m.filter((e) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e), {
    message: () =>
      "Invalid slug format. Must contain only lowercase letters, numbers, and hyphens, with no consecutive hyphens or leading/trailing hyphens",
    jsonSchema: {
      type: "string",
      pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
      description: "A URL-friendly slug containing only lowercase letters, numbers, and hyphens",
      examples: ["hello-world", "my-awesome-post", "article-123"],
    },
  }),
) {}
m.transform(m.String, io, {
  strict: true,
  decode: (e) =>
    e
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, ""),
  encode: identity,
});
class so extends m.String.pipe(
  m.filter(
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
class lo extends m.Class("Version")({
  semver: so,
  comment: m.optional(
    m.NullOr(
      m.String.pipe(
        m.maxLength(500, { message: () => "Version comment must be at most 500 characters long" }),
      ),
    ),
  ),
}) {
  static fromSemver(e, t) {
    return new lo({ semver: e, comment: t ?? null });
  }
  toString() {
    return this.semver;
  }
  toDisplayString() {
    return null !== this.comment && void 0 !== this.comment && this.comment.length > 0
      ? `${this.semver} - ${this.comment}`
      : this.semver;
  }
}
const co = (e) => m.NullOr(e).pipe(m.annotations({ decodingFallback: () => M.right(null) })),
  uo = Schema.Struct({
    type: Schema.Literal("rating"),
    minRating: Schema.Number.annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.number.int({ min: 0, max: 2 })),
    }),
    maxRating: Schema.Number.annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.number.int({ min: 5, max: 10 })),
    }),
    minLabel: Schema.String.annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.word.adjective()),
    }),
    maxLabel: Schema.String.annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.word.adjective()),
    }),
  }).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Rating Question",
        description: "A question with a numeric rating scale",
      },
    }),
  ),
  fo = Schema.Struct({
    type: Schema.Literal("rating"),
    minRating: Schema.Number.annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.number.int({ min: 0, max: 2 })),
    }),
    maxRating: Schema.Number.annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.number.int({ min: 5, max: 10 })),
    }),
    minLabel: Schema.Trim.pipe(
      Schema.nonEmptyString({ message: () => "Minimum label cannot be empty" }),
    ).annotations({ arbitrary: () => (e) => e.constant(null).map(() => faker.word.adjective()) }),
    maxLabel: Schema.Trim.pipe(
      Schema.nonEmptyString({ message: () => "Maximum label cannot be empty" }),
    ).annotations({ arbitrary: () => (e) => e.constant(null).map(() => faker.word.adjective()) }),
  }).pipe(
    Schema.filter((e) => e.minRating <= e.maxRating, {
      message: () => "minimum rating cannot be greater than maximum rating",
      jsonSchema: { minRating: { type: "number" }, maxRating: { type: "number" } },
    }),
    Schema.annotations({
      jsonSchema: {
        title: "Upsert Rating Question",
        description: "Data for creating/updating a rating question",
      },
    }),
  ),
  po = Schema.Struct({
    type: Schema.Literal("multiple-choice"),
    choices: Schema.Array(
      Schema.String.annotations({
        arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.words(2)),
      }),
    ).annotations({
      arbitrary: () => (e) =>
        e
          .constant(null)
          .map(() =>
            Array.from({ length: faker.number.int({ min: 2, max: 6 }) }, () =>
              faker.lorem.words(2),
            ),
          ),
    }),
  }).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Multiple Choice Question",
        description: "A question with multiple choice options",
      },
    }),
  ),
  ho = Schema.Struct({
    type: Schema.Literal("multiple-choice"),
    choices: Schema.Array(
      Schema.String.annotations({
        arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.words(2)),
      }),
    ).annotations({
      arbitrary: () => (e) =>
        e
          .constant(null)
          .map(() =>
            Array.from({ length: faker.number.int({ min: 2, max: 6 }) }, () =>
              faker.lorem.words(2),
            ),
          ),
    }),
  }).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Upsert Multiple Choice Question",
        description: "Data for creating/updating a multiple choice question",
      },
    }),
  ),
  mo = Schema.Struct({
    type: Schema.Literal("text"),
    placeholder: Schema.optional(
      Schema.String.annotations({
        arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.words(4)),
      }),
    ),
  }).pipe(
    Schema.annotations({
      jsonSchema: { title: "Text Question", description: "A free text input question" },
    }),
  ),
  go = Schema.Struct({
    type: Schema.Literal("text"),
    placeholder: Schema.optional(
      Schema.String.annotations({
        arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.words(4)),
      }),
    ),
  }).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Upsert Text Question",
        description: "Data for creating/updating a text question",
      },
    }),
  ),
  vo = Schema.Struct({ type: Schema.Literal("email") }).pipe(
    Schema.annotations({
      jsonSchema: { title: "Email Question", description: "An email input question" },
    }),
  ),
  yo = Schema.Struct({ type: Schema.Literal("email") }).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Upsert Email Question",
        description: "Data for creating/updating an email question",
      },
    }),
  ),
  bo = Schema.Union(uo, po, mo, vo).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Question Data",
        description: "Union of all possible question data types",
        discriminator: { propertyName: "type" },
      },
    }),
  ),
  wo = Schema.Union(fo, ho, go, yo).pipe(
    Schema.annotations({
      jsonSchema: {
        title: "Upsert Question Data",
        description: "Union of all possible question data types for create/update operations",
        discriminator: { propertyName: "type" },
      },
    }),
  ),
  xo = Schema.UUID.pipe(Schema.brand("QuestionId"));
class So extends Schema.Class("QuestionMetadata")({
  tags: Schema.optional(Schema.Array(Schema.String)),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class Eo extends Schema.Class("Question")({
  id: xo,
  order: Schema.Number,
  title: Schema.String,
  subtitle: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  data: bo,
  metadata: Schema.parseJson(co(So)),
}) {}
class _o extends Schema.Class("UpsertQuestionPayload")({
  id: Schema.optional(xo),
  order: Schema.Number.pipe(Schema.int(), Schema.nonNegative()).annotations({
    arbitrary: () => (e) => e.constant(null).map(() => faker.number.int({ min: 1, max: 50 })),
  }),
  title: Schema.Trim.pipe(
    Schema.nonEmptyString({ message: () => "title is required" }),
    Schema.maxLength(200, { message: () => "Title must be at most 200 characters long" }),
  ).annotations({
    arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.sentence().slice(0, 200)),
  }),
  subtitle: Schema.optional(
    Schema.Trim.pipe(
      Schema.nonEmptyString({ message: () => "subtitle is required when provided" }),
      Schema.maxLength(300, { message: () => "Subtitle must be at most 300 characters long" }),
    ).annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.words(3).slice(0, 300)),
    }),
  ),
  description: Schema.optional(
    Schema.Trim.pipe(
      Schema.nonEmptyString({ message: () => "description is required when provided" }),
      Schema.maxLength(1e3, { message: () => "Description must be at most 1,000 characters long" }),
    ).annotations({
      arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.paragraph().slice(0, 1e3)),
    }),
  ),
  data: wo,
  metadata: Schema.optional(Schema.NullOr(So)),
}) {}
Schema.TaggedError("QuestionNotFoundError")(
  "QuestionNotFoundError",
  { id: xo },
  HttpApiSchema.annotations({ status: 404 }),
);
const Ro = Schema.UUID.pipe(Schema.brand("QuizId"));
class Co extends Schema.Class("QuizMetadata")({
  tags: Schema.optional(Schema.Array(Schema.String)),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class No extends Schema.Class("QuizSettings")({
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class Ao extends Schema.Class("Quiz")({
  id: Ro,
  version: Schema.parseJson(lo),
  title: Schema.String,
  subtitle: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  questions: Schema.optional(Schema.parseJson(Schema.Array(Eo))),
  settings: Schema.optional(Schema.NullOr(Schema.parseJson(co(No)))),
  isPublished: Schema.Boolean,
  isTemp: Schema.Boolean,
  metadata: Schema.optional(Schema.NullOr(Schema.parseJson(co(Co)))),
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}
class Po extends Schema.Class("UpsertQuizPayload")({
  id: Schema.optional(Ro),
  version: Schema.optional(lo).pipe(
    Schema.withDefaults({
      constructor: () => new lo({ semver: "1.0.0", comment: "Initial version" }),
      decoding: () => new lo({ semver: "1.0.0", comment: "Initial version" }),
    }),
  ),
  title: Schema.Trim.pipe(
    Schema.nonEmptyString({ message: () => "title is required" }),
    Schema.maxLength(30, { message: () => "Title must be at most 30 characters long" }),
  ).annotations({
    arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.words(3).slice(0, 30)),
  }),
  subtitle: Schema.optional(
    Schema.NullOr(
      Schema.Trim.pipe(
        Schema.nonEmptyString({ message: () => "subtitle is required" }),
        Schema.maxLength(100, { message: () => "subtitle must be at most 30 characters long" }),
      ).annotations({
        arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.sentence().slice(0, 100)),
      }),
    ),
  ),
  description: Schema.optional(
    Schema.NullOr(
      Schema.Trim.pipe(
        Schema.nonEmptyString({ message: () => "description is required" }),
        Schema.maxLength(1e3, {
          message: () => "Description must be at most 1,000 characters long",
        }),
      ).annotations({
        arbitrary: () => (e) => e.constant(null).map(() => faker.lorem.paragraphs(2).slice(0, 1e3)),
      }),
    ),
  ),
  questions: Schema.optional(Schema.Array(_o)),
  settings: Schema.optional(Schema.NullOr(Schema.parseJson(co(No)))),
  isPublished: Schema.optional(Schema.Boolean),
  isTemp: Schema.optional(Schema.Boolean),
  metadata: Schema.optional(Co),
}) {}
class ko extends Schema.TaggedError("QuizNotFoundError")(
  "QuizNotFoundError",
  { id: Ro },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Quiz with id ${this.id} not found`;
  }
}
class To extends HttpApiGroup.make("Quizzes")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(Ao)))
  .add(HttpApiEndpoint.get("listPublished", "/published").addSuccess(Schema.Array(Ao)))
  .add(
    HttpApiEndpoint.get("byId", "/:id")
      .addSuccess(Ao)
      .addError(ko)
      .setPayload(Schema.Struct({ id: Ro })),
  )
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess(Ao).addError(ko).setPayload(Po))
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(Schema.Struct({ id: Ro }))
      .addSuccess(Schema.Void)
      .addError(ko),
  )
  .prefix("/Quizzes") {}
const Io = Schema.UUID.pipe(Schema.brand("AnalysisEngineId")),
  Oo = Schema.UUID.pipe(Schema.brand("AnalysisResultId"));
class Do extends Schema.Class("ScoringConfig")({
  primaryPointWeight: Schema.Number.pipe(Schema.positive()),
  secondaryPointWeight: Schema.Number.pipe(Schema.positive()),
  distanceGamma: Schema.Number.pipe(Schema.positive()),
  beta: Schema.Number.pipe(Schema.positive()),
  scoreMultiplier: Schema.Number.pipe(Schema.positive()),
  primaryPointValue: Schema.Number.pipe(Schema.positive()),
  secondaryPointValue: Schema.Number.pipe(Schema.positive()),
  primaryDistanceFalloff: Schema.Number.pipe(Schema.between(0, 1)),
  secondaryDistanceFalloff: Schema.Number.pipe(Schema.between(0, 1)),
}) {}
const zo = {
  primaryPointWeight: 1,
  secondaryPointWeight: 1,
  distanceGamma: 1,
  beta: 0.8,
  scoreMultiplier: 1,
  primaryPointValue: 10,
  secondaryPointValue: 5,
  primaryDistanceFalloff: 0.1,
  secondaryDistanceFalloff: 0.5,
};
class Mo extends Schema.Class("QuestionRule")({
  questionId: Schema.String,
  idealAnswers: Schema.Array(Schema.Number),
  isPrimary: Schema.Boolean,
  weightMultiplier: Schema.optional(Schema.Number.pipe(Schema.positive())),
  distanceGamma: Schema.optional(Schema.Number.pipe(Schema.positive())),
}) {}
class Lo extends Schema.Class("EndingDefinition")({
  endingId: Schema.String,
  name: Schema.String,
  shortName: Schema.optional(Schema.String),
  fullName: Schema.optional(Schema.String),
  questionRules: Schema.Array(Mo),
  customScoringConfig: Schema.optional(Do),
  category: Schema.optional(Schema.String),
}) {}
class jo extends Schema.Class("AnalysisEngine")({
  id: Io,
  quizId: Ro,
  version: Schema.parseJson(lo),
  name: Schema.String,
  description: Schema.optional(Schema.String),
  scoringConfig: Schema.parseJson(Do),
  endings: Schema.parseJson(Schema.Array(Lo)),
  metadata: Schema.optional(
    Schema.NullOr(Schema.parseJson(Schema.Record({ key: Schema.String, value: Schema.Unknown }))),
  ),
  isActive: Schema.Boolean,
  isPublished: Schema.Boolean,
  isTemp: Schema.Boolean,
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}
class Fo extends Schema.Class("UpsertAnalysisEnginePayload")({
  id: Schema.optional(Io),
  quizId: Schema.optional(Ro),
  version: Schema.optional(lo),
  name: Schema.String,
  description: Schema.optional(Schema.NullOr(Schema.String)),
  scoringConfig: Schema.parseJson(Do),
  endings: Schema.parseJson(Schema.Array(Lo)),
  metadata: Schema.optional(
    Schema.NullOr(Schema.parseJson(Schema.Record({ key: Schema.String, value: Schema.Unknown }))),
  ),
  isActive: Schema.optional(Schema.Boolean),
  isPublished: Schema.optional(Schema.Boolean),
  isTemp: Schema.optional(Schema.Boolean),
}) {}
class Bo extends Schema.TaggedError("AnalysisEngineNotFoundError")(
  "AnalysisEngineNotFoundError",
  { id: Io },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Analysis engine with id ${this.id} not found`;
  }
}
class qo extends HttpApiGroup.make("AnalysisEngine")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(jo)))
  .add(HttpApiEndpoint.get("listPublished", "/published").addSuccess(Schema.Array(jo)))
  .add(
    HttpApiEndpoint.get("byId", "/:id")
      .addSuccess(jo)
      .addError(Bo)
      .setPayload(Schema.Struct({ id: Io })),
  )
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess(jo).addError(Bo).setPayload(Fo))
  .add(
    HttpApiEndpoint.del("delete", "/:id")
      .addSuccess(Schema.Void)
      .addError(Bo)
      .setPayload(Schema.Struct({ id: Io })),
  )
  .prefix("/AnalysisEngine") {}
const Uo = Schema.UUID.pipe(Schema.brand("ActiveQuizId"));
class $o extends Schema.Class("ActiveQuiz")({
  id: Uo,
  slug: io,
  quizId: Ro,
  engineId: Io,
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
}) {}
class Wo extends Schema.Class("UpsertActiveQuizPayload")({
  id: Schema.optional(Uo),
  slug: io,
  quizId: Ro,
  engineId: Io,
}) {}
class Vo extends Schema.TaggedError("ActiveQuizNotFoundError")(
  "ActiveQuizNotFoundError",
  { slug: Schema.String },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Active quiz with slug ${this.slug} not found`;
  }
}
class Ho extends HttpApiGroup.make("ActiveQuizzes")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array($o)))
  .add(
    HttpApiEndpoint.get("bySlug", "/:slug")
      .addSuccess($o)
      .addError(Vo)
      .setPayload(Schema.Struct({ slug: Schema.String })),
  )
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess($o).addError(Vo).setPayload(Wo))
  .add(
    HttpApiEndpoint.del("delete", "/:slug")
      .setPayload(Schema.Struct({ slug: Schema.String }))
      .addSuccess(Schema.Void)
      .addError(Vo),
  )
  .prefix("/ActiveQuizzes") {}
const Ko = Schema.UUID.pipe(Schema.brand("ResponseId"));
class Go extends Schema.Class("QuestionResponse")({
  questionId: Schema.String,
  value: Schema.Union(Schema.Number, Schema.String),
  answeredAt: Schema.optional(Schema.DateTimeUtc),
  timeSpentMs: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
  questionContent: Schema.optional(Schema.String),
}) {}
class Yo extends Schema.Class("InteractionLog")({
  type: Schema.Union(
    Schema.Literal("navigation"),
    Schema.Literal("selection"),
    Schema.Literal("submission"),
  ),
  questionId: Schema.optional(Schema.String),
  rating: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
  action: Schema.optional(Schema.String),
  timestamp: Schema.DateTimeUtc,
}) {}
class Qo extends Schema.Class("SessionMetadata")({
  startedAt: Schema.DateTimeUtc,
  completedAt: Schema.optional(Schema.DateTimeUtc),
  totalDurationMs: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
  userAgent: Schema.optional(Schema.String),
  referrer: Schema.optional(Schema.String),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class Xo extends Schema.Class("ResponseMetadata")({
  tags: Schema.optional(Schema.Array(Schema.String)),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class Jo extends Schema.Class("QuizResponse")({
  id: Ko,
  quizId: Ro,
  answers: Schema.optional(Schema.parseJson(Schema.Array(Go))),
  sessionMetadata: Schema.parseJson(Qo),
  interactionLogs: Schema.optional(Schema.parseJson(Schema.Array(Yo))),
  metadata: Schema.optional(Schema.NullOr(Schema.parseJson(Xo))),
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}
class Zo extends Schema.Class("UpsertQuestionResponsePayload")({
  questionId: Schema.String,
  value: Schema.Union(Schema.Number, Schema.String),
  answeredAt: Schema.optional(Schema.DateTimeUtc),
  timeSpentMs: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
}) {}
class ea extends Schema.Class("UpsertInteractionLogPayload")({
  type: Schema.Union(
    Schema.Literal("navigation"),
    Schema.Literal("selection"),
    Schema.Literal("submission"),
  ),
  questionId: Schema.optional(Schema.String),
  rating: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
  action: Schema.optional(Schema.String),
  timestamp: Schema.DateTimeUtc,
}) {}
class ta extends Schema.Class("UpsertSessionMetadataPayload")({
  startedAt: Schema.DateTimeUtc,
  completedAt: Schema.optional(Schema.DateTimeUtc),
  totalDurationMs: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
  userAgent: Schema.optional(Schema.String),
  referrer: Schema.optional(Schema.String),
  customFields: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
}) {}
class na extends Schema.Class("UpsertResponsePayload")({
  id: Schema.optional(Ko),
  quizId: Ro,
  answers: Schema.Array(Zo),
  sessionMetadata: ta,
  interactionLogs: Schema.optional(Schema.Array(ea)),
  metadata: Schema.optional(Xo),
}) {}
class ra extends Schema.TaggedError("ResponseNotFoundError")(
  "ResponseNotFoundError",
  { id: Ko },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Response with id ${this.id} not found`;
  }
}
class oa extends Schema.TaggedError("InvalidQuizError")(
  "InvalidQuizError",
  { quizId: Ro },
  HttpApiSchema.annotations({ status: 400 }),
) {
  get message() {
    return `Quiz with id ${this.quizId} not found or invalid`;
  }
}
class aa extends HttpApiGroup.make("Responses")
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(Jo)))
  .add(
    HttpApiEndpoint.get("byId", "/:id")
      .addSuccess(Jo)
      .addError(ra)
      .setPayload(Schema.Struct({ id: Ko })),
  )
  .add(
    HttpApiEndpoint.get("byQuiz", "/quiz/:quizId")
      .addSuccess(Schema.Array(Jo))
      .addError(oa)
      .setPayload(Schema.Struct({ quizId: Ro })),
  )
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess(Jo).addError(ra).addError(oa).setPayload(na))
  .add(
    HttpApiEndpoint.del("delete", "/")
      .setPayload(Schema.Struct({ id: Ko }))
      .addSuccess(Schema.Void)
      .addError(ra),
  )
  .prefix("/Responses") {}
class ia extends Schema.Class("EndingResult")({
  endingId: Schema.String,
  points: Schema.Number,
  percentage: Schema.Number,
  isWinner: Schema.Boolean,
  questionBreakdown: Schema.optional(
    Schema.Array(
      Schema.Struct({
        questionId: Schema.String,
        points: Schema.Number,
        idealAnswers: Schema.Array(Schema.Number),
        userAnswer: Schema.Number,
        distance: Schema.Number,
        weight: Schema.Number,
      }),
    ),
  ),
}) {}
class sa extends Schema.Class("AnalysisResult")({
  id: Oo,
  engineId: Io,
  engineVersion: Schema.parseJson(lo),
  responseId: Ko,
  endingResults: Schema.parseJson(Schema.Array(ia)),
  metadata: Schema.optional(
    Schema.NullOr(Schema.parseJson(Schema.Record({ key: Schema.String, value: Schema.Unknown }))),
  ),
  analyzedAt: Schema.DateTimeUtc,
  createdAt: Schema.DateTimeUtc,
  updatedAt: Schema.DateTimeUtc,
  deletedAt: Schema.NullOr(Schema.DateTimeUtc),
}) {}
class la extends Schema.Class("UpsertAnalysisResultPayload")({
  id: Schema.optional(Oo),
  engineId: Io,
  engineVersion: Schema.parseJson(lo),
  responseId: Ko,
  endingResults: Schema.parseJson(Schema.Array(ia)),
  metadata: Schema.optional(
    Schema.NullOr(Schema.parseJson(Schema.Record({ key: Schema.String, value: Schema.Unknown }))),
  ),
  analyzedAt: Schema.DateTimeUtc,
}) {}
class ca extends Schema.Class("AnalyzeResponseRequest")({
  responseId: Ko,
  engineId: Io,
  scoringConfigOverride: Schema.optional(
    Schema.Record({ key: Schema.String, value: Schema.Unknown }),
  ),
}) {}
Schema.Class("GetAnalysisRequest")({ responseId: Ko, engineId: Schema.optional(Io) });
class ua extends Schema.Class("BatchAnalyzeRequest")({
  responseIds: Schema.Array(Ko),
  engineId: Io,
  scoringConfigOverride: Schema.optional(
    Schema.Record({ key: Schema.String, value: Schema.Unknown }),
  ),
}) {}
class da extends Schema.Class("AnalysisSummary")({
  engineId: Io,
  engineVersion: Schema.parseJson(lo),
  totalResponses: Schema.Number,
  endingDistribution: Schema.Array(
    Schema.Struct({
      endingId: Schema.String,
      count: Schema.Number,
      percentage: Schema.Number,
      averagePoints: Schema.Number,
      averagePercentage: Schema.Number,
    }),
  ),
  generatedAt: Schema.DateTimeUtc,
}) {}
class fa extends Schema.TaggedError("AnalysisResultNotFoundError")(
  "AnalysisResultNotFoundError",
  { id: Oo },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Analysis result with id ${this.id} not found`;
  }
}
class pa extends Schema.TaggedError("AnalysisFailedError")(
  "AnalysisFailedError",
  { responseId: Schema.String, engineId: Io, reason: Schema.String },
  HttpApiSchema.annotations({ status: 500 }),
) {
  get message() {
    return `Analysis failed for response ${this.responseId} with engine ${this.engineId}: ${this.reason}`;
  }
}
class ha extends Schema.TaggedError("AnalysisResultNotFoundForResponseError")(
  "AnalysisResultNotFoundForResponseError",
  { responseId: Ko, engineId: Io },
  HttpApiSchema.annotations({ status: 404 }),
) {
  get message() {
    return `Analysis result not found for response ${this.responseId} with engine ${this.engineId}`;
  }
}
class ma extends HttpApiGroup.make("Analysis")
  .add(
    HttpApiEndpoint.post("analyze", "/:engineId/analyze")
      .addSuccess(sa)
      .addError(Bo)
      .addError(pa)
      .addError(ko)
      .addError(ra)
      .setPayload(Schema.Struct({ engineId: Io, request: ca })),
  )
  .add(
    HttpApiEndpoint.post("batchAnalyze", "/:engineId/batch-analyze")
      .addSuccess(Schema.Array(sa))
      .addError(Bo)
      .addError(pa)
      .addError(ko)
      .addError(ra)
      .setPayload(Schema.Struct({ engineId: Io, request: ua })),
  )
  .add(
    HttpApiEndpoint.get("getAnalysis", "/responses/:responseId/analysis")
      .addSuccess(Schema.Array(sa))
      .addError(fa)
      .setPayload(Schema.Struct({ responseId: Ko })),
  )
  .add(HttpApiEndpoint.get("list", "/").addSuccess(Schema.Array(sa)))
  .add(
    HttpApiEndpoint.get("getById", "/:id")
      .addSuccess(sa)
      .addError(fa)
      .setPayload(Schema.Struct({ id: Oo })),
  )
  .add(
    HttpApiEndpoint.get("getByEngine", "/engines/:engineId")
      .addSuccess(Schema.Array(sa))
      .setPayload(Schema.Struct({ engineId: Io })),
  )
  .add(HttpApiEndpoint.put("upsert", "/").addSuccess(sa).addError(fa).setPayload(la))
  .add(
    HttpApiEndpoint.get("getAnalysisSummary", "/:engineId/summary")
      .addSuccess(da)
      .addError(Bo)
      .setPayload(Schema.Struct({ engineId: Io })),
  )
  .add(
    HttpApiEndpoint.del("deleteAnalysis", "/:id")
      .addSuccess(Schema.Void)
      .addError(fa)
      .setPayload(Schema.Struct({ id: Oo })),
  )
  .prefix("/Analysis") {}
const ga = Config.all({
  primaryPointValue: Config.number("ANALYSIS_PRIMARY_POINT_VALUE").pipe(Config.withDefault(10)),
  secondaryPointValue: Config.number("ANALYSIS_SECONDARY_POINT_VALUE").pipe(Config.withDefault(5)),
  primaryPointWeight: Config.number("ANALYSIS_PRIMARY_POINT_WEIGHT").pipe(Config.withDefault(1)),
  secondaryPointWeight: Config.number("ANALYSIS_SECONDARY_POINT_WEIGHT").pipe(
    Config.withDefault(1),
  ),
  primaryDistanceFalloff: Config.number("ANALYSIS_PRIMARY_DISTANCE_FALLOFF").pipe(
    Config.withDefault(0.1),
  ),
  secondaryDistanceFalloff: Config.number("ANALYSIS_SECONDARY_DISTANCE_FALLOFF").pipe(
    Config.withDefault(0.5),
  ),
  beta: Config.number("ANALYSIS_BETA").pipe(Config.withDefault(0.8)),
  disableSecondaryPoints: Config.boolean("ANALYSIS_DISABLE_SECONDARY_POINTS").pipe(
    Config.withDefault(false),
  ),
  primaryMinPoints: Config.number("ANALYSIS_PRIMARY_MIN_POINTS").pipe(Config.withDefault(0)),
  secondaryMinPoints: Config.number("ANALYSIS_SECONDARY_MIN_POINTS").pipe(Config.withDefault(0)),
  minPercentageThreshold: Config.number("ANALYSIS_MIN_PERCENTAGE_THRESHOLD").pipe(
    Config.withDefault(0),
  ),
  enableQuestionBreakdown: Config.boolean("ANALYSIS_ENABLE_QUESTION_BREAKDOWN").pipe(
    Config.withDefault(true),
  ),
  maxEndingResults: Config.number("ANALYSIS_MAX_ENDING_RESULTS").pipe(Config.withDefault(10)),
});
class va extends Effect.Service()("@features/quiz/AnalysisService", {
  accessors: true,
  effect: Effect.sync(() => {
    const e = (e, t) =>
        Effect.sync(() => e.filter((e) => void 0 !== t.find((t) => t.id === e.questionId))),
      t = (e, t, n = zo, r) =>
        Effect.gen(function* () {
          const o = void 0 !== r ? yield* r : yield* ga;
          let a = 0;
          const i = [];
          for (const r of e) {
            if ("number" != typeof r.value) continue;
            const e = t.questionRules.find((e) => e.questionId === r.questionId);
            if (void 0 === e) continue;
            if (o.disableSecondaryPoints && !e.isPrimary) continue;
            const s = e.idealAnswers.reduce((e, t) => {
                const n = Math.abs(t - r.value);
                return n < e ? n : e;
              }, Number.POSITIVE_INFINITY),
              l = e.isPrimary
                ? (o.primaryPointValue ?? n.primaryPointValue)
                : (o.secondaryPointValue ?? n.secondaryPointValue),
              c = e.isPrimary
                ? (o.primaryPointWeight ?? n.primaryPointWeight)
                : (o.secondaryPointWeight ?? n.secondaryPointWeight),
              u = e.isPrimary
                ? (o.primaryDistanceFalloff ?? n.primaryDistanceFalloff)
                : (o.secondaryDistanceFalloff ?? n.secondaryDistanceFalloff),
              d = e.weightMultiplier ?? 1,
              f = l * c * d;
            let p;
            if (0 === u) p = 0 === s ? f : 0;
            else {
              p = f - s * (f * u);
            }
            const h = e.isPrimary ? o.primaryMinPoints : o.secondaryMinPoints;
            (p = Math.max(p, h)),
              (a += p),
              o.enableQuestionBreakdown &&
                i.push({
                  questionId: r.questionId,
                  points: p,
                  idealAnswers: [...e.idealAnswers],
                  userAnswer: r.value,
                  distance: s,
                  weight: c * d,
                });
          }
          return { questionBreakdown: i, totalPoints: a };
        }),
      n = (e, n, r) =>
        Effect.gen(function* () {
          const o = void 0 !== r ? yield* r : yield* ga,
            a = [];
          for (const d of n.endings) {
            const { questionBreakdown: n, totalPoints: o } = yield* t(e, d, void 0, r);
            a.push({ ending: d, points: o, questionBreakdown: n });
          }
          const i = n.scoringConfig.beta ?? o.beta,
            s = a.map((e) => Math.pow(e.points, i)),
            l = s.reduce((e, t) => e + t, 0),
            c = a.map((e, t) => {
              const n = s[t],
                r = l > 0 && void 0 !== n ? Number(((n / l) * 100).toFixed(1)) : 0,
                i = Math.max(
                  ...a.map((e, t) => {
                    const n = s[t];
                    return l > 0 && void 0 !== n ? Number(((n / l) * 100).toFixed(1)) : 0;
                  }),
                );
              return {
                endingId: e.ending.endingId,
                points: e.points,
                percentage: r,
                isWinner: r === i && r > o.minPercentageThreshold,
                questionBreakdown: e.questionBreakdown,
              };
            }),
            u = c
              .filter((e) => e.percentage >= o.minPercentageThreshold)
              .sort((e, t) => t.percentage - e.percentage)
              .slice(0, o.maxEndingResults);
          return u;
        }),
      r = (t, r, o, a) =>
        Effect.gen(function* () {
          const i = o.answers ?? [],
            s = r.questions ?? [],
            l = yield* e(i, s),
            c = yield* n(l, t, a),
            u = yield* DateTime.now;
          return {
            engineId: t.id,
            engineVersion: t.version,
            responseId: o.id,
            endingResults: c,
            metadata: {
              totalQuestions: s.length,
              answeredQuestions: i.length,
              analysisTimestamp: u.toString(),
            },
            analyzedAt: u,
          };
        }),
      o = (e, t, n) =>
        Effect.gen(function* () {
          return 0 === (n.answers ?? []).length
            ? yield* Effect.fail(
                new pa({
                  responseId: n.id,
                  engineId: e.id,
                  reason: "No responses provided for analysis",
                }),
              )
            : 0 === e.endings.length
              ? yield* Effect.fail(
                  new pa({
                    responseId: n.id,
                    engineId: e.id,
                    reason: "Analysis engine has no endings defined",
                  }),
                )
              : e.isActive
                ? { engine: e, quiz: t, response: n }
                : yield* Effect.fail(
                    new pa({
                      responseId: n.id,
                      engineId: e.id,
                      reason: "Analysis engine is not active",
                    }),
                  );
        });
    return {
      convertResponseQuestionIds: e,
      computeEndingPoints: t,
      computeAllEndingScores: n,
      analyzeResponse: r,
      validateAnalysisInputs: o,
      analyzeWithValidation: (e, t, n, a) =>
        Effect.gen(function* () {
          return yield* o(e, t, n), yield* r(e, t, n, a);
        }),
      getAnalysisSummary: (e, t) =>
        Effect.gen(function* () {
          if (0 === e.length) return yield* Effect.fail(new fa({ id: "summary" }));
          const t = e[0];
          if (void 0 === t) return yield* Effect.fail(new fa({ id: "summary" }));
          const n = new Map();
          for (const a of e)
            for (const e of a.endingResults) {
              const t = n.get(e.endingId);
              void 0 !== t
                ? ((t.count += 1), (t.totalPoints += e.points), (t.totalPercentage += e.percentage))
                : n.set(e.endingId, {
                    endingId: e.endingId,
                    count: 1,
                    totalPoints: e.points,
                    totalPercentage: e.percentage,
                  });
            }
          const r = Array.from(n.values()).map((t) => ({
              endingId: t.endingId,
              count: t.count,
              percentage: Number(((t.count / e.length) * 100).toFixed(1)),
              averagePoints: Number((t.totalPoints / t.count).toFixed(2)),
              averagePercentage: Number((t.totalPercentage / t.count).toFixed(1)),
            })),
            o = yield* DateTime.now;
          return {
            engineId: t.engineId,
            engineVersion: t.engineVersion,
            totalResponses: e.length,
            endingDistribution: r,
            generatedAt: o,
          };
        }),
    };
  }),
}) {}
class ya extends HttpApi.make("DomainApi").add(Ho).add(To).add(aa).add(qo).add(ma).prefix("/api") {}
class ba extends Effect.Service()("@org/ApiClient", {
  dependencies: [FetchHttpClient.layer],
  scoped: Effect.gen(function* () {
    return { http: yield* HttpApiClient.make(ya, { baseUrl: no.API_URL, transformClient: ro }) };
  }),
}) {}
te.Service()("NetworkMonitor", {
  scoped: te.gen(function* () {
    const e = window.navigator.onLine,
      t = yield* xe.make(e),
      n = yield* te.makeLatch(e);
    return (
      yield* we
        .async((e) => {
          window.addEventListener("online", () => e(te.succeed(be.of(true)))),
            window.addEventListener("offline", () => e(te.succeed(be.of(false))));
        })
        .pipe(
          we.tap((e) => (e ? n.open : n.close).pipe(te.zipRight(xe.update(t, () => e)))),
          we.runDrain,
          te.forkScoped,
        ),
      { latch: n, ref: t }
    );
  }),
  accessors: true,
});
m.declare(Se.isHttpBody),
  globalValue("@org/UnsafeHttpApiClient/bodyFromPayloadCache", () => new WeakMap());
class wa extends Ae.make(
  Ne.make("calculatePrimes", {
    success: m.Number,
    error: m.Never,
    payload: { upperBound: m.Number },
  }),
) {}
const xa = Re.layerProtocolWorker({ size: 1, concurrency: 1 }).pipe(
  Ce.provide(
    _e.layerPlatform(
      () => new Worker(new URL("./worker.js", globalThis._importMeta_.url), { type: "module" }),
    ),
  ),
  Ce.orDie,
);
class Sa extends te.Service()("@org/WorkerClient", {
  dependencies: [xa],
  scoped: te.gen(function* () {
    return { client: yield* Re.make(wa) };
  }),
}) {}
const Ea = Atom.context({ memoMap: Atom.defaultMemoMap });
Ea.addGlobalLayer(
  Layer.provideMerge(
    Logger.pretty,
    Logger.minimumLogLevel("dev" === no.EFFECTIVE_ENV ? LogLevel.Debug : LogLevel.Info),
  ),
),
  flow(
    Oe.normalize("NFKD"),
    Oe.replace(/[\u0300-\u036f]/g, ""),
    Oe.toLowerCase,
    Oe.replace(/[æœ]/g, "ae"),
    Oe.replace(/ø/g, "o"),
    Oe.replace(/ß/g, "ss"),
  ),
  flow(Oe.replace(/\\n\\n/g, " "), Oe.replace(/\*(.*?)\*/g, "$1"));
const _a = Ea(Sa.Default),
  Ra = () => (useAtomMount(_a), null);
Kt.AggregateError, Kt.BigIntTypedArray;
const Ha = function () {
  return null;
};
function Ka(...e) {
  return twMerge(clsx(e));
}
function Ga(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t);
}
function Ya(...e) {
  return (t) => {
    let n = false;
    const r = e.map((e) => {
      const r = Ga(e, t);
      return n || "function" != typeof r || (n = true), r;
    });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          "function" == typeof n ? n() : Ga(e[t], null);
        }
      };
  };
}
function Qa(...e) {
  return g.useCallback(Ya(...e), e);
}
function Xa(e) {
  const t = Za(e),
    n = g.forwardRef((e, n) => {
      const { children: r, ...o } = e,
        a = g.Children.toArray(r),
        i = a.find(ti);
      if (i) {
        const e = i.props.children,
          r = a.map((t) =>
            t === i
              ? g.Children.count(e) > 1
                ? g.Children.only(null)
                : g.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return jsx(t, {
          ...o,
          ref: n,
          children: g.isValidElement(e) ? g.cloneElement(e, void 0, r) : null,
        });
      }
      return jsx(t, { ...o, ref: n, children: r });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var Ja = Xa("Slot");
function Za(e) {
  const t = g.forwardRef((e, t) => {
    const { children: n, ...r } = e;
    if (g.isValidElement(n)) {
      const e = (function (e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          if (n) return e.ref;
          if (
            ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
            (n = t && "isReactWarning" in t && t.isReactWarning),
            n)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(n),
        o = (function (e, t) {
          const n = { ...t };
          for (const r in t) {
            const o = e[r],
              a = t[r];
            /^on[A-Z]/.test(r)
              ? o && a
                ? (n[r] = (...e) => {
                    const t = a(...e);
                    return o(...e), t;
                  })
                : o && (n[r] = o)
              : "style" === r
                ? (n[r] = { ...o, ...a })
                : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "));
          }
          return { ...e, ...n };
        })(r, n.props);
      return n.type !== g.Fragment && (o.ref = t ? Ya(t, e) : e), g.cloneElement(n, o);
    }
    return g.Children.count(n) > 1 ? g.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var ei = Symbol("radix.slottable");
function ti(e) {
  return (
    g.isValidElement(e) &&
    "function" == typeof e.type &&
    "__radixId" in e.type &&
    e.type.__radixId === ei
  );
}
const ni = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
  ri = clsx,
  oi = (e, t) => (n) => {
    var r;
    if (null == (null == t ? void 0 : t.variants))
      return ri(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    const { variants: o, defaultVariants: a } = t,
      i = Object.keys(o).map((e) => {
        const t = null == n ? void 0 : n[e],
          r = null == a ? void 0 : a[e];
        if (null === t) return null;
        const i = ni(t) || ni(r);
        return o[e][i];
      }),
      s =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return void 0 === r || (e[n] = r), e;
        }, {}),
      l =
        null == t || null === (r = t.compoundVariants) || void 0 === r
          ? void 0
          : r.reduce((e, t) => {
              let { class: n, className: r, ...o } = t;
              return Object.entries(o).every((e) => {
                let [t, n] = e;
                return Array.isArray(n) ? n.includes({ ...a, ...s }[t]) : { ...a, ...s }[t] === n;
              })
                ? [...e, n, r]
                : e;
            }, []);
    return ri(e, i, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
  },
  ai = oi(
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
  ii = ({
    asChild: e = false,
    children: t,
    className: n,
    disabled: r = false,
    loading: o = false,
    size: a,
    type: i = "button",
    variant: s,
    ...l
  }) =>
    jsxs(e ? Ja : "button", {
      type: i,
      "data-slot": "button",
      className: Ka(ai({ variant: s, size: a, className: n })),
      disabled: o || r,
      ...l,
      children: [o && jsx(Loader2Icon, { className: "h-4 w-4 animate-spin" }), t],
    });
ii.variants = ai;
const si = oi(
    "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  ),
  li = ({ className: e, type: t, ...n }) =>
    jsx("input", { type: t, "data-slot": "input", className: Ka(si({ className: e }), e), ...n });
function ci(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ui(e, t, { checkForDefaultPrevented: n = true } = {}) {
  return function (r) {
    if ((e?.(r), false === n || !r.defaultPrevented)) return t?.(r);
  };
}
function di(e, t = []) {
  let n = [];
  const r = () => {
    const t = n.map((e) => g.createContext(e));
    return function (n) {
      const r = n?.[e] || t;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return (
    (r.scopeName = e),
    [
      function (t, r) {
        const o = g.createContext(r),
          a = n.length;
        n = [...n, r];
        const i = (t) => {
          const { scope: n, children: r, ...i } = t,
            s = n?.[e]?.[a] || o,
            l = g.useMemo(() => i, Object.values(i));
          return jsx(s.Provider, { value: l, children: r });
        };
        return (
          (i.displayName = t + "Provider"),
          [
            i,
            function (n, i) {
              const s = i?.[e]?.[a] || o,
                l = g.useContext(s);
              if (l) return l;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``);
            },
          ]
        );
      },
      fi(r, ...t),
    ]
  );
}
function fi(...e) {
  const t = e[0];
  if (1 === e.length) return t;
  const n = () => {
    const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      const r = n.reduce(
        (t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }),
        {},
      );
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function pi(e) {
  const t = e + "CollectionProvider",
    [n, r] = di(t),
    [o, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (e) => {
      const { scope: t, children: n } = e,
        r = g__default.useRef(null),
        a = g__default.useRef(new Map()).current;
      return jsx(o, { scope: t, itemMap: a, collectionRef: r, children: n });
    };
  i.displayName = t;
  const s = e + "CollectionSlot",
    l = Xa(s),
    c = g__default.forwardRef((e, t) => {
      const { scope: n, children: r } = e,
        o = Qa(t, a(s, n).collectionRef);
      return jsx(l, { ref: o, children: r });
    });
  c.displayName = s;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = Xa(u),
    h = g__default.forwardRef((e, t) => {
      const { scope: n, children: r, ...o } = e,
        i = g__default.useRef(null),
        s = Qa(t, i),
        l = a(u, n);
      return (
        g__default.useEffect(
          () => (
            l.itemMap.set(i, { ref: i, ...o }),
            () => {
              l.itemMap.delete(i);
            }
          ),
        ),
        jsx(p, { [f]: "", ref: s, children: r })
      );
    });
  return (
    (h.displayName = u),
    [
      { Provider: i, Slot: c, ItemSlot: h },
      function (t) {
        const n = a(e + "CollectionConsumer", t),
          r = g__default.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${f}]`)),
              r = Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
              );
            return r;
          }, [n.collectionRef, n.itemMap]);
        return r;
      },
      r,
    ]
  );
}
li.variants = si;
var hi = g.createContext(void 0);
function mi(e) {
  const t = g.useContext(hi);
  return e || t || "ltr";
}
var gi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
].reduce((e, t) => {
  const n = Xa(`Primitive.${t}`),
    r = g.forwardRef((e, r) => {
      const { asChild: o, ...a } = e,
        i = o ? n : t;
      return jsx(i, { ...a, ref: r });
    });
  return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
}, {});
function vi(e, t) {
  e && Ge.flushSync(() => e.dispatchEvent(t));
}
function yi(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var bi,
  wi = "dismissableLayer.update",
  xi = "dismissableLayer.pointerDownOutside",
  Si = "dismissableLayer.focusOutside",
  Ei = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  _i = g.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = false,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: i,
        onDismiss: s,
        ...l
      } = e,
      c = g.useContext(Ei),
      [u, f] = g.useState(null),
      p = u?.ownerDocument ?? globalThis?.document,
      [, h] = g.useState({}),
      m = Qa(t, (e) => f(e)),
      v = Array.from(c.layers),
      [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = v.indexOf(y),
      w = u ? v.indexOf(u) : -1,
      x = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = w >= b,
      E = (function (e, t = globalThis?.document) {
        const n = yi(e),
          r = g.useRef(false),
          o = g.useRef(() => {});
        return (
          g.useEffect(() => {
            const e = (e) => {
                if (e.target && !r.current) {
                  let r = function () {
                    Ci(xi, n, a, { discrete: true });
                  };
                  const a = { originalEvent: e };
                  "touch" === e.pointerType
                    ? (t.removeEventListener("click", o.current),
                      (o.current = r),
                      t.addEventListener("click", o.current, { once: true }))
                    : r();
                } else t.removeEventListener("click", o.current);
                r.current = false;
              },
              a = window.setTimeout(() => {
                t.addEventListener("pointerdown", e);
              }, 0);
            return () => {
              window.clearTimeout(a),
                t.removeEventListener("pointerdown", e),
                t.removeEventListener("click", o.current);
            };
          }, [t, n]),
          { onPointerDownCapture: () => (r.current = true) }
        );
      })((e) => {
        const t = e.target,
          n = [...c.branches].some((e) => e.contains(t));
        S && !n && (o?.(e), i?.(e), e.defaultPrevented || s?.());
      }, p),
      _ = (function (e, t = globalThis?.document) {
        const n = yi(e),
          r = g.useRef(false);
        return (
          g.useEffect(() => {
            const e = (e) => {
              if (e.target && !r.current) {
                Ci(Si, n, { originalEvent: e }, { discrete: false });
              }
            };
            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
          }, [t, n]),
          { onFocusCapture: () => (r.current = true), onBlurCapture: () => (r.current = false) }
        );
      })((e) => {
        const t = e.target;
        [...c.branches].some((e) => e.contains(t)) || (a?.(e), i?.(e), e.defaultPrevented || s?.());
      }, p);
    return (
      (function (e, t = globalThis?.document) {
        const n = yi(e);
        g.useEffect(() => {
          const e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: true }),
            () => t.removeEventListener("keydown", e, { capture: true })
          );
        }, [n, t]);
      })((e) => {
        w === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
      }, p),
      g.useEffect(() => {
        if (u)
          return (
            n &&
              (0 === c.layersWithOutsidePointerEventsDisabled.size &&
                ((bi = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            Ri(),
            () => {
              n &&
                1 === c.layersWithOutsidePointerEventsDisabled.size &&
                (p.body.style.pointerEvents = bi);
            }
          );
      }, [u, p, n, c]),
      g.useEffect(
        () => () => {
          u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Ri());
        },
        [u, c],
      ),
      g.useEffect(() => {
        const e = () => h({});
        return document.addEventListener(wi, e), () => document.removeEventListener(wi, e);
      }, []),
      jsx(gi.div, {
        ...l,
        ref: m,
        style: { pointerEvents: x ? (S ? "auto" : "none") : void 0, ...e.style },
        onFocusCapture: ui(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: ui(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: ui(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
_i.displayName = "DismissableLayer";
function Ri() {
  const e = new CustomEvent(wi);
  document.dispatchEvent(e);
}
function Ci(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? vi(o, a) : o.dispatchEvent(a);
}
g.forwardRef((e, t) => {
  const n = g.useContext(Ei),
    r = g.useRef(null),
    o = Qa(t, r);
  return (
    g.useEffect(() => {
      const e = r.current;
      if (e)
        return (
          n.branches.add(e),
          () => {
            n.branches.delete(e);
          }
        );
    }, [n.branches]),
    jsx(gi.div, { ...e, ref: o })
  );
}).displayName = "DismissableLayerBranch";
var Ni = 0;
function Ai() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Pi()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Pi()),
      Ni++,
      () => {
        1 === Ni &&
          document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()),
          Ni--;
      }
    );
  }, []);
}
function Pi() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ki = "focusScope.autoFocusOnMount",
  Ti = "focusScope.autoFocusOnUnmount",
  Ii = { bubbles: false, cancelable: true },
  Oi = g.forwardRef((e, t) => {
    const {
        loop: n = false,
        trapped: r = false,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        ...i
      } = e,
      [s, l] = g.useState(null),
      c = yi(o),
      u = yi(a),
      f = g.useRef(null),
      p = Qa(t, (e) => l(e)),
      h = g.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        },
      }).current;
    g.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (h.paused || !s) return;
            const t = e.target;
            s.contains(t) ? (f.current = t) : Li(f.current, { select: true });
          },
          t = function (e) {
            if (h.paused || !s) return;
            const t = e.relatedTarget;
            null !== t && (s.contains(t) || Li(f.current, { select: true }));
          },
          n = function (e) {
            if (document.activeElement === document.body)
              for (const t of e) t.removedNodes.length > 0 && Li(s);
          };
        document.addEventListener("focusin", e), document.addEventListener("focusout", t);
        const r = new MutationObserver(n);
        return (
          s && r.observe(s, { childList: true, subtree: true }),
          () => {
            document.removeEventListener("focusin", e),
              document.removeEventListener("focusout", t),
              r.disconnect();
          }
        );
      }
    }, [r, s, h.paused]),
      g.useEffect(() => {
        if (s) {
          ji.add(h);
          const t = document.activeElement;
          if (!s.contains(t)) {
            const n = new CustomEvent(ki, Ii);
            s.addEventListener(ki, c),
              s.dispatchEvent(n),
              n.defaultPrevented ||
                (!(function (e, { select: t = false } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if ((Li(r, { select: t }), document.activeElement !== n)) return;
                })(((e = Di(s)), e.filter((e) => "A" !== e.tagName)), { select: true }),
                document.activeElement === t && Li(s));
          }
          return () => {
            s.removeEventListener(ki, c),
              setTimeout(() => {
                const e = new CustomEvent(Ti, Ii);
                s.addEventListener(Ti, u),
                  s.dispatchEvent(e),
                  e.defaultPrevented || Li(t ?? document.body, { select: true }),
                  s.removeEventListener(Ti, u),
                  ji.remove(h);
              }, 0);
          };
        }
        var e;
      }, [s, c, u, h]);
    const m = g.useCallback(
      (e) => {
        if (!n && !r) return;
        if (h.paused) return;
        const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          o = document.activeElement;
        if (t && o) {
          const t = e.currentTarget,
            [r, a] = (function (e) {
              const t = Di(e),
                n = zi(t, e),
                r = zi(t.reverse(), e);
              return [n, r];
            })(t);
          r && a
            ? e.shiftKey || o !== a
              ? e.shiftKey && o === r && (e.preventDefault(), n && Li(a, { select: true }))
              : (e.preventDefault(), n && Li(r, { select: true }))
            : o === t && e.preventDefault();
        }
      },
      [n, r, h.paused],
    );
    return jsx(gi.div, { tabIndex: -1, ...i, ref: p, onKeyDown: m });
  });
function Di(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        const t = "INPUT" === e.tagName && "hidden" === e.type;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zi(e, t) {
  for (const n of e) if (!Mi(n, { upTo: t })) return n;
}
function Mi(e, { upTo: t }) {
  if ("hidden" === getComputedStyle(e).visibility) return true;
  for (; e; ) {
    if (void 0 !== t && e === t) return false;
    if ("none" === getComputedStyle(e).display) return true;
    e = e.parentElement;
  }
  return false;
}
function Li(e, { select: t = false } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }),
      e !== n &&
        (function (e) {
          return e instanceof HTMLInputElement && "select" in e;
        })(e) &&
        t &&
        e.select();
  }
}
Oi.displayName = "FocusScope";
var ji = (function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), (e = Fi(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = Fi(e, t)), e[0]?.resume();
    },
  };
})();
function Fi(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return -1 !== r && n.splice(r, 1), n;
}
var Bi = globalThis?.document ? g.useLayoutEffect : () => {},
  qi = g[" useId ".trim().toString()] || (() => {}),
  Ui = 0;
function $i(e) {
  const [t, n] = g.useState(qi());
  return (
    Bi(() => {
      n((e) => e ?? String(Ui++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Wi = ["top", "right", "bottom", "left"],
  Vi = Math.min,
  Hi = Math.max,
  Ki = Math.round,
  Gi = Math.floor,
  Yi = (e) => ({ x: e, y: e }),
  Qi = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Xi = { start: "end", end: "start" };
function Ji(e, t, n) {
  return Hi(e, Vi(t, n));
}
function Zi(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function es(e) {
  return e.split("-")[0];
}
function ts(e) {
  return e.split("-")[1];
}
function ns(e) {
  return "x" === e ? "y" : "x";
}
function rs(e) {
  return "y" === e ? "height" : "width";
}
const os = new Set(["top", "bottom"]);
function as(e) {
  return os.has(es(e)) ? "y" : "x";
}
function is(e) {
  return ns(as(e));
}
function ss(e) {
  return e.replace(/start|end/g, (e) => Xi[e]);
}
const ls = ["left", "right"],
  cs = ["right", "left"],
  us = ["top", "bottom"],
  ds = ["bottom", "top"];
function fs(e, t, n, r) {
  const o = ts(e);
  let a = (function (e, t, n) {
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? cs : ls) : t ? ls : cs;
      case "left":
      case "right":
        return t ? us : ds;
      default:
        return [];
    }
  })(es(e), "start" === n, r);
  return o && ((a = a.map((e) => e + "-" + o)), t && (a = a.concat(a.map(ss)))), a;
}
function ps(e) {
  return e.replace(/left|right|bottom|top/g, (e) => Qi[e]);
}
function hs(e) {
  return "number" != typeof e
    ? (function (e) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...e };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ms(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function gs(e, t, n) {
  let { reference: r, floating: o } = e;
  const a = as(t),
    i = is(t),
    s = rs(i),
    l = es(t),
    c = "y" === a,
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[s] / 2 - o[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: u, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: u, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: d };
      break;
    case "left":
      p = { x: r.x - o.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (ts(t)) {
    case "start":
      p[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[i] += f * (n && c ? -1 : 1);
  }
  return p;
}
async function vs(e, t) {
  var n;
  void 0 === t && (t = {});
  const { x: r, y: o, platform: a, rects: i, elements: s, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = false,
      padding: p = 0,
    } = Zi(t, e),
    h = hs(p),
    m = s[f ? ("floating" === d ? "reference" : "floating") : d],
    g = ms(
      await a.getClippingRect({
        element:
          null == (n = await (null == a.isElement ? void 0 : a.isElement(m))) || n
            ? m
            : m.contextElement ||
              (await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      }),
    ),
    v =
      "floating" === d
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    y = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)),
    b = ((await (null == a.isElement ? void 0 : a.isElement(y))) &&
      (await (null == a.getScale ? void 0 : a.getScale(y)))) || { x: 1, y: 1 },
    w = ms(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: v,
            offsetParent: y,
            strategy: l,
          })
        : v,
    );
  return {
    top: (g.top - w.top + h.top) / b.y,
    bottom: (w.bottom - g.bottom + h.bottom) / b.y,
    left: (g.left - w.left + h.left) / b.x,
    right: (w.right - g.right + h.right) / b.x,
  };
}
function ys(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function bs(e) {
  return Wi.some((t) => e[t] >= 0);
}
const ws = new Set(["left", "top"]);
function Ss(e) {
  return "#document";
}
function Es(e) {
  var t;
  return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function _s(e) {
  var t;
  return null == (t = e.document || window.document) ? void 0 : t.documentElement;
}
function Cs(e) {
  return false;
}
function Ns(e) {
  return false;
}
function As(e) {
  return false;
}
const Ps = new Set(["inline", "contents"]);
function ks(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Us(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ps.has(o);
}
const Os = [":popover-open", ":modal"];
function Ds(e) {
  return Os.some((t) => {
    try {
      return e.matches(t);
    } catch (Tn) {
      return false;
    }
  });
}
const zs = ["transform", "translate", "scale", "rotate", "perspective"],
  Ms = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Ls = ["paint", "layout", "strict", "content"];
function js(e) {
  const t = Fs(),
    n = e;
  return (
    zs.some((e) => !!n[e] && "none" !== n[e]) ||
    (!!n.containerType && "normal" !== n.containerType) ||
    (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
    (!t && !!n.filter && "none" !== n.filter) ||
    Ms.some((e) => (n.willChange || "").includes(e)) ||
    Ls.some((e) => (n.contain || "").includes(e))
  );
}
function Fs() {
  return (
    !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
  );
}
const Bs = new Set(["html", "body", "#document"]);
function qs(e) {
  return Bs.has(Ss());
}
function Us(e) {
  return Es(e).getComputedStyle(e);
}
function $s(e) {
  return { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ws(e) {
  const t = e.assignedSlot || e.parentNode || As() || _s(e);
  return t;
}
function Vs(e) {
  const t = Ws(e);
  return qs() ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Vs(t);
}
function Hs(e, t, n) {
  var r;
  void 0 === t && (t = []), void 0 === n && (n = true);
  const o = Vs(e),
    a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
    i = Es(o);
  if (a) {
    const e = Ks(i);
    return t.concat(i, i.visualViewport || [], ks(o) ? o : [], e && n ? Hs(e) : []);
  }
  return t.concat(o, Hs(o, [], n));
}
function Ks(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gs(e) {
  const t = Us(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const a = n,
    i = r,
    s = Ki(n) !== a || Ki(r) !== i;
  return s && ((n = a), (r = i)), { width: n, height: r, $: s };
}
function Ys(e) {
  return e.contextElement;
}
function Qs(e) {
  Ys(e);
  return Yi(1);
}
const Xs = Yi(0);
function Js(e) {
  const t = Es(e);
  return Fs() && t.visualViewport
    ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
    : Xs;
}
function Zs(e, t, n, r) {
  void 0 === t && (t = false), void 0 === n && (n = false);
  const o = e.getBoundingClientRect(),
    a = Ys(e);
  let i = Yi(1);
  t && (r ? Cs() : (i = Qs(e)));
  const s = (function (e, t, n) {
    return void 0 === t && (t = false), !(!n || (t && n !== Es(e))) && t;
  })(a, n, r)
    ? Js(a)
    : Yi(0);
  let l = (o.left + s.x) / i.x,
    c = (o.top + s.y) / i.y,
    u = o.width / i.x,
    d = o.height / i.y;
  if (a) {
    const e = Es(a),
      t = r && Cs() ? Es(r) : r;
    let n = e,
      o = Ks(n);
    for (; o && r && t !== n; ) {
      const e = Qs(o),
        t = o.getBoundingClientRect(),
        r = Us(o),
        a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
      (l *= e.x), (c *= e.y), (u *= e.x), (d *= e.y), (l += a), (c += i), (n = Es(o)), (o = Ks(n));
    }
  }
  return ms({ width: u, height: d, x: l, y: c });
}
function el(e, t) {
  const n = $s(e).scrollLeft;
  return t ? t.left + n : Zs(_s(e)).left + n;
}
function tl(e, t) {
  const n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - el(e, n), y: n.top + t.scrollTop };
}
const nl = new Set(["absolute", "fixed"]);
function rl(e, t, n) {
  let r;
  if ("viewport" === t)
    r = (function (e, t) {
      const n = Es(e),
        r = _s(e),
        o = n.visualViewport;
      let a = r.clientWidth,
        i = r.clientHeight,
        s = 0,
        l = 0;
      if (o) {
        (a = o.width), (i = o.height);
        const e = Fs();
        (!e || (e && "fixed" === t)) && ((s = o.offsetLeft), (l = o.offsetTop));
      }
      const c = el(r);
      if (c <= 0) {
        const e = r.ownerDocument,
          t = e.body,
          n = getComputedStyle(t),
          o =
            ("CSS1Compat" === e.compatMode &&
              parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
            0,
          i = Math.abs(r.clientWidth - t.clientWidth - o);
        i <= 25 && (a -= i);
      } else c <= 25 && (a += c);
      return { width: a, height: i, x: s, y: l };
    })(e, n);
  else if ("document" === t)
    r = (function (e) {
      const t = _s(e),
        n = $s(e),
        r = e.ownerDocument.body,
        o = Hi(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = Hi(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
      let i = -n.scrollLeft + el(e);
      const s = -n.scrollTop;
      return (
        "rtl" === Us(r).direction && (i += Hi(t.clientWidth, r.clientWidth) - o),
        { width: o, height: a, x: i, y: s }
      );
    })(_s(e));
  else {
    const n = Js(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return ms(r);
}
function ol(e, t) {
  Ws(e);
  return false;
}
function al(e, t, n) {
  const r = Ns(),
    o = _s(t),
    a = "fixed" === n,
    i = Zs(e, true, a, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = Yi(0);
  function c() {
    l.x = el(o);
  }
  if (!a)
    if (((s = $s(t)), r));
    else o && c();
  a && !r && o && c();
  const u = !o || r || a ? Yi(0) : tl(o, s);
  return {
    x: i.left + s.scrollLeft - l.x - u.x,
    y: i.top + s.scrollTop - l.y - u.y,
    width: i.width,
    height: i.height,
  };
}
function ll(e, t) {
  const n = Es(e);
  if (Ds(e)) return n;
  {
    let t = Ws(e);
    for (; t && !qs(); ) {
      t = Ws(t);
    }
    return n;
  }
}
const cl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const a = "fixed" === o,
      i = _s(r),
      s = !!t && Ds(t.floating);
    if (r === i || (s && a)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
      c = Yi(1);
    const u = Yi(0),
      d = Ns();
    if (!a && ((l = $s(r)), Ns()));
    const f = !i || d || a ? Yi(0) : tl(i, l);
    return {
      width: n.width * c.x,
      height: n.height * c.y,
      x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
      y: n.y * c.y - l.scrollTop * c.y + u.y + f.y,
    };
  },
  getDocumentElement: _s,
  getClippingRect: function (e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const a = [
        ...("clippingAncestors" === n
          ? Ds(t)
            ? []
            : (function (e, t) {
                const n = t.get(e);
                if (n) return n;
                let r = Hs(e, [], false).filter((e) => Cs()),
                  o = null;
                const a = "fixed" === Us(e).position;
                let i = a ? Ws(e) : e;
                for (; Cs(); ) {
                  const t = Us(i),
                    n = js(i);
                  n || "fixed" !== t.position || (o = null),
                    (
                      a
                        ? !n && !o
                        : (!n && "static" === t.position && o && nl.has(o.position)) ||
                          (ks(i) && !n && ol(e))
                    )
                      ? (r = r.filter((e) => e !== i))
                      : (o = t),
                    (i = Ws(i));
                }
                return t.set(e, r), r;
              })(t, this._c)
          : [].concat(n)),
        r,
      ],
      i = a[0],
      s = a.reduce(
        (e, n) => {
          const r = rl(t, n, o);
          return (
            (e.top = Hi(r.top, e.top)),
            (e.right = Vi(r.right, e.right)),
            (e.bottom = Vi(r.bottom, e.bottom)),
            (e.left = Hi(r.left, e.left)),
            e
          );
        },
        rl(t, i, o),
      );
    return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
  },
  getOffsetParent: ll,
  getElementRects: async function (e) {
    const t = this.getOffsetParent || ll,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: al(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  },
  getClientRects: function (e) {
    return Array.from(e.getClientRects());
  },
  getDimensions: function (e) {
    const { width: t, height: n } = Gs(e);
    return { width: t, height: n };
  },
  getScale: Qs,
  isElement: Cs,
  isRTL: function (e) {
    return "rtl" === Us(e).direction;
  },
};
function ul(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function dl(e, t, n, r) {
  void 0 === r && (r = {});
  const {
      ancestorScroll: o = true,
      ancestorResize: a = true,
      elementResize: i = "function" == typeof ResizeObserver,
      layoutShift: s = "function" == typeof IntersectionObserver,
      animationFrame: l = false,
    } = r,
    c = Ys(e),
    u = o || a ? [...(c ? Hs(c) : []), ...Hs(t)] : [];
  u.forEach((e) => {
    o && e.addEventListener("scroll", n, { passive: true }), a && e.addEventListener("resize", n);
  });
  const d =
    c && s
      ? (function (e, t) {
          let n,
            r = null;
          const o = _s(e);
          function a() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
          }
          return (
            (function i(s, l) {
              void 0 === s && (s = false), void 0 === l && (l = 1), a();
              const c = e.getBoundingClientRect(),
                { left: u, top: d, width: f, height: p } = c;
              if ((s || t(), !f || !p)) return;
              const h = {
                rootMargin:
                  -Gi(d) +
                  "px " +
                  -Gi(o.clientWidth - (u + f)) +
                  "px " +
                  -Gi(o.clientHeight - (d + p)) +
                  "px " +
                  -Gi(u) +
                  "px",
                threshold: Hi(0, Vi(1, l)) || 1,
              };
              let m = true;
              function g(t) {
                const r = t[0].intersectionRatio;
                if (r !== l) {
                  if (!m) return i();
                  r
                    ? i(false, r)
                    : (n = setTimeout(() => {
                        i(false, 1e-7);
                      }, 1e3));
                }
                1 !== r || ul(c, e.getBoundingClientRect()) || i(), (m = false);
              }
              try {
                r = new IntersectionObserver(g, { ...h, root: o.ownerDocument });
              } catch (Tn) {
                r = new IntersectionObserver(g, h);
              }
              r.observe(e);
            })(true),
            a
          );
        })(c, n)
      : null;
  let f,
    p = -1,
    h = null;
  i &&
    ((h = new ResizeObserver((e) => {
      let [r] = e;
      r &&
        r.target === c &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var e;
          null == (e = h) || e.observe(t);
        }))),
        n();
    })),
    c && !l && h.observe(c),
    h.observe(t));
  let m = l ? Zs(e) : null;
  return (
    l &&
      (function t() {
        const r = Zs(e);
        m && !ul(m, r) && n();
        (m = r), (f = requestAnimationFrame(t));
      })(),
    n(),
    () => {
      var e;
      u.forEach((e) => {
        o && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
      }),
        null == d || d(),
        null == (e = h) || e.disconnect(),
        (h = null),
        l && cancelAnimationFrame(f);
    }
  );
}
const fl = function (e) {
    return (
      void 0 === e && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: a, placement: i, middlewareData: s } = t,
            l = await (async function (e, t) {
              const { placement: n, platform: r, elements: o } = e,
                a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                i = es(n),
                s = ts(n),
                l = "y" === as(n),
                c = ws.has(i) ? -1 : 1,
                u = a && l ? -1 : 1,
                d = Zi(t, e);
              let {
                mainAxis: f,
                crossAxis: p,
                alignmentAxis: h,
              } = "number" == typeof d
                ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis,
                  };
              return (
                s && "number" == typeof h && (p = "end" === s ? -1 * h : h),
                l ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
              );
            })(t, e);
          return i === (null == (n = s.offset) ? void 0 : n.placement) &&
            null != (r = s.arrow) &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: a + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  pl = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: a = true,
              crossAxis: i = false,
              limiter: s = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = Zi(e, t),
            c = { x: n, y: r },
            u = await vs(t, l),
            d = as(es(o)),
            f = ns(d);
          let p = c[f],
            h = c[d];
          if (a) {
            const e = "y" === f ? "bottom" : "right";
            p = Ji(p + u["y" === f ? "top" : "left"], p, p - u[e]);
          }
          if (i) {
            const e = "y" === d ? "bottom" : "right";
            h = Ji(h + u["y" === d ? "top" : "left"], h, h - u[e]);
          }
          const m = s.fn({ ...t, [f]: p, [d]: h });
          return { ...m, data: { x: m.x - n, y: m.y - r, enabled: { [f]: a, [d]: i } } };
        },
      }
    );
  },
  hl = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: a,
              rects: i,
              initialPlacement: s,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = true,
              crossAxis: d = true,
              fallbackPlacements: f,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: h = "none",
              flipAlignment: m = true,
              ...g
            } = Zi(e, t);
          if (null != (n = a.arrow) && n.alignmentOffset) return {};
          const v = es(o),
            y = as(s),
            b = es(s) === s,
            w = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
            x =
              f ||
              (b || !m
                ? [ps(s)]
                : (function (e) {
                    const t = ps(e);
                    return [ss(e), t, ss(t)];
                  })(s)),
            S = "none" !== h;
          !f && S && x.push(...fs(s, m, h, w));
          const E = [s, ...x],
            _ = await vs(t, g),
            R = [];
          let C = (null == (r = a.flip) ? void 0 : r.overflows) || [];
          if ((u && R.push(_[v]), d)) {
            const e = (function (e, t, n) {
              void 0 === n && (n = false);
              const r = ts(e),
                o = is(e),
                a = rs(o);
              let i =
                "x" === o
                  ? r === (n ? "end" : "start")
                    ? "right"
                    : "left"
                  : "start" === r
                    ? "bottom"
                    : "top";
              return t.reference[a] > t.floating[a] && (i = ps(i)), [i, ps(i)];
            })(o, i, w);
            R.push(_[e[0]], _[e[1]]);
          }
          if (((C = [...C, { placement: o, overflows: R }]), !R.every((e) => e <= 0))) {
            var N, A;
            const e = ((null == (N = a.flip) ? void 0 : N.index) || 0) + 1,
              t = E[e];
            if (t) {
              if (
                !("alignment" === d && y !== as(t)) ||
                C.every((e) => as(e.placement) !== y || e.overflows[0] > 0)
              )
                return { data: { index: e, overflows: C }, reset: { placement: t } };
            }
            let n =
              null ==
              (A = C.filter((e) => e.overflows[0] <= 0).sort(
                (e, t) => e.overflows[1] - t.overflows[1],
              )[0])
                ? void 0
                : A.placement;
            if (!n)
              switch (p) {
                case "bestFit": {
                  var P;
                  const e =
                    null ==
                    (P = C.filter((e) => {
                      if (S) {
                        const t = as(e.placement);
                        return t === y || "y" === t;
                      }
                      return true;
                    })
                      .map((e) => [
                        e.placement,
                        e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                      ])
                      .sort((e, t) => e[1] - t[1])[0])
                      ? void 0
                      : P[0];
                  e && (n = e);
                  break;
                }
                case "initialPlacement":
                  n = s;
              }
            if (o !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  },
  ml = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: a, platform: i, elements: s } = t,
            { apply: l = () => {}, ...c } = Zi(e, t),
            u = await vs(t, c),
            d = es(o),
            f = ts(o),
            p = "y" === as(o),
            { width: h, height: m } = a.floating;
          let g, v;
          "top" === d || "bottom" === d
            ? ((g = d),
              (v =
                f === ((await (null == i.isRTL ? void 0 : i.isRTL(s.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((v = d), (g = "end" === f ? "top" : "bottom"));
          const y = m - u.top - u.bottom,
            b = h - u.left - u.right,
            w = Vi(m - u[g], y),
            x = Vi(h - u[v], b),
            S = !t.middlewareData.shift;
          let E = w,
            _ = x;
          if (
            (null != (n = t.middlewareData.shift) && n.enabled.x && (_ = b),
            null != (r = t.middlewareData.shift) && r.enabled.y && (E = y),
            S && !f)
          ) {
            const e = Hi(u.left, 0),
              t = Hi(u.right, 0),
              n = Hi(u.top, 0),
              r = Hi(u.bottom, 0);
            p
              ? (_ = h - 2 * (0 !== e || 0 !== t ? e + t : Hi(u.left, u.right)))
              : (E = m - 2 * (0 !== n || 0 !== r ? n + r : Hi(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: _, availableHeight: E });
          const R = await i.getDimensions(s.floating);
          return h !== R.width || m !== R.height ? { reset: { rects: true } } : {};
        },
      }
    );
  },
  gl = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Zi(e, t);
          switch (r) {
            case "referenceHidden": {
              const e = ys(await vs(t, { ...o, elementContext: "reference" }), n.reference);
              return { data: { referenceHiddenOffsets: e, referenceHidden: bs(e) } };
            }
            case "escaped": {
              const e = ys(await vs(t, { ...o, altBoundary: true }), n.floating);
              return { data: { escapedOffsets: e, escaped: bs(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  vl = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: a, platform: i, elements: s, middlewareData: l } = t,
        { element: c, padding: u = 0 } = Zi(e, t) || {};
      if (null == c) return {};
      const d = hs(u),
        f = { x: n, y: r },
        p = is(o),
        h = rs(p),
        m = await i.getDimensions(c),
        g = "y" === p,
        v = g ? "top" : "left",
        y = g ? "bottom" : "right",
        b = g ? "clientHeight" : "clientWidth",
        w = a.reference[h] + a.reference[p] - f[p] - a.floating[h],
        x = f[p] - a.reference[p],
        S = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(c));
      let E = S ? S[b] : 0;
      (E && (await (null == i.isElement ? void 0 : i.isElement(S)))) ||
        (E = s.floating[b] || a.floating[h]);
      const _ = w / 2 - x / 2,
        R = E / 2 - m[h] / 2 - 1,
        C = Vi(d[v], R),
        N = Vi(d[y], R),
        A = C,
        P = E - m[h] - N,
        k = E / 2 - m[h] / 2 + _,
        T = Ji(A, k, P),
        I =
          !l.arrow &&
          null != ts(o) &&
          k !== T &&
          a.reference[h] / 2 - (k < A ? C : N) - m[h] / 2 < 0,
        O = I ? (k < A ? k - A : k - P) : 0;
      return {
        [p]: f[p] + O,
        data: { [p]: T, centerOffset: k - T - O, ...(I && { alignmentOffset: O }) },
        reset: I,
      };
    },
  }),
  yl = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: a, middlewareData: i } = t,
            { offset: s = 0, mainAxis: l = true, crossAxis: c = true } = Zi(e, t),
            u = { x: n, y: r },
            d = as(o),
            f = ns(d);
          let p = u[f],
            h = u[d];
          const m = Zi(s, t),
            g =
              "number" == typeof m
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (l) {
            const e = "y" === f ? "height" : "width",
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (c) {
            var v, y;
            const e = "y" === f ? "width" : "height",
              t = ws.has(es(o)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && (null == (v = i.offset) ? void 0 : v[d])) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : (null == (y = i.offset) ? void 0 : y[d]) || 0) -
                (t ? g.crossAxis : 0);
            h < n ? (h = n) : h > r && (h = r);
          }
          return { [f]: p, [d]: h };
        },
      }
    );
  },
  bl = (e, t, n) => {
    const r = new Map(),
      o = { platform: cl, ...n },
      a = { ...o.platform, _c: r };
    return (async (e, t, n) => {
      const {
          placement: r = "bottom",
          strategy: o = "absolute",
          middleware: a = [],
          platform: i,
        } = n,
        s = a.filter(Boolean),
        l = await (null == i.isRTL ? void 0 : i.isRTL(t));
      let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: u, y: d } = gs(c, r, l),
        f = r,
        p = {},
        h = 0;
      for (let m = 0; m < s.length; m++) {
        const { name: n, fn: a } = s[m],
          {
            x: g,
            y: v,
            data: y,
            reset: b,
          } = await a({
            x: u,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: p,
            rects: c,
            platform: i,
            elements: { reference: e, floating: t },
          });
        (u = null != g ? g : u),
          (d = null != v ? v : d),
          (p = { ...p, [n]: { ...p[n], ...y } }),
          b &&
            h <= 50 &&
            (h++,
            "object" == typeof b &&
              (b.placement && (f = b.placement),
              b.rects &&
                (c =
                  true === b.rects
                    ? await i.getElementRects({ reference: e, floating: t, strategy: o })
                    : b.rects),
              ({ x: u, y: d } = gs(c, f, l))),
            (m = -1));
      }
      return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
    })(e, t, { ...o, platform: a });
  };
var wl = "undefined" != typeof document ? useLayoutEffect : function () {};
function xl(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if ("function" == typeof e && e.toString() === t.toString()) return true;
  let n, r, o;
  if (e && t && "object" == typeof e) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return false;
      for (r = n; 0 != r--; ) if (!xl(e[r], t[r])) return false;
      return true;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return false;
    for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
    for (r = n; 0 != r--; ) {
      const n = o[r];
      if (("_owner" !== n || !e.$$typeof) && !xl(e[n], t[n])) return false;
    }
    return true;
  }
  return e != e && t != t;
}
function Sl(e) {
  return 1;
}
function El(e, t) {
  const n = Sl();
  return Math.round(t * n) / n;
}
function _l(e) {
  const t = g.useRef(e);
  return (
    wl(() => {
      t.current = e;
    }),
    t
  );
}
const Rl = (e) => ({
    name: "arrow",
    options: e,
    fn(t) {
      const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
      return n && ((o = n), {}.hasOwnProperty.call(o, "current"))
        ? null != n.current
          ? vl({ element: n.current, padding: r }).fn(t)
          : {}
        : n
          ? vl({ element: n, padding: r }).fn(t)
          : {};
      var o;
    },
  }),
  Cl = (e, t) => ({ ...fl(e), options: [e, t] }),
  Nl = (e, t) => ({ ...pl(e), options: [e, t] }),
  Al = (e, t) => ({ ...yl(e), options: [e, t] }),
  Pl = (e, t) => ({ ...hl(e), options: [e, t] }),
  kl = (e, t) => ({ ...ml(e), options: [e, t] }),
  Tl = (e, t) => ({ ...gl(e), options: [e, t] }),
  Il = (e, t) => ({ ...Rl(e), options: [e, t] });
var Ol = g.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return jsx(gi.svg, {
    ...a,
    ref: t,
    width: r,
    height: o,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: e.asChild ? n : jsx("polygon", { points: "0,0 30,0 15,10" }),
  });
});
Ol.displayName = "Arrow";
var Dl = Ol;
function zl(e) {
  const [t, n] = g.useState(void 0);
  return (
    Bi(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const t = new ResizeObserver((t) => {
          if (!Array.isArray(t)) return;
          if (!t.length) return;
          const r = t[0];
          let o, a;
          if ("borderBoxSize" in r) {
            const e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            (o = t.inlineSize), (a = t.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          n({ width: o, height: a });
        });
        return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
      }
      n(void 0);
    }, [e]),
    t
  );
}
var Ml = "Popper",
  [Ll, jl] = di(Ml),
  [Fl, Bl] = Ll(Ml),
  ql = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = g.useState(null);
    return jsx(Fl, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
ql.displayName = Ml;
var Ul = "PopperAnchor",
  $l = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      a = Bl(Ul, n),
      i = g.useRef(null),
      s = Qa(t, i),
      l = g.useRef(null);
    return (
      g.useEffect(() => {
        const e = l.current;
        (l.current = r?.current || i.current), e !== l.current && a.onAnchorChange(l.current);
      }),
      r ? null : jsx(gi.div, { ...o, ref: s })
    );
  });
$l.displayName = Ul;
var Wl = "PopperContent",
  [Vl, Hl] = Ll(Wl),
  Kl = g.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: a = "center",
        alignOffset: i = 0,
        arrowPadding: s = 0,
        avoidCollisions: l = true,
        collisionBoundary: c = [],
        collisionPadding: u = 0,
        sticky: f = "partial",
        hideWhenDetached: p = false,
        updatePositionStrategy: h = "optimized",
        onPlaced: m,
        ...v
      } = e,
      y = Bl(Wl, n),
      [b, w] = g.useState(null),
      x = Qa(t, (e) => w(e)),
      [S, E] = g.useState(null),
      _ = zl(S),
      R = _?.width ?? 0,
      C = _?.height ?? 0,
      N = r + ("center" !== a ? "-" + a : ""),
      A = "number" == typeof u ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      P = Array.isArray(c) ? c : [c],
      k = P.length > 0,
      T = { padding: A, boundary: P.filter(Xl), altBoundary: k },
      {
        refs: I,
        floatingStyles: O,
        placement: D,
        isPositioned: z,
        middlewareData: M,
      } = (function (e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: a, floating: i } = {},
            transform: s = true,
            whileElementsMounted: l,
            open: c,
          } = e,
          [u, d] = g.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: false,
          }),
          [f, p] = g.useState(r);
        xl(f, r) || p(r);
        const [h, m] = g.useState(null),
          [v, y] = g.useState(null),
          b = g.useCallback((e) => {
            e !== E.current && ((E.current = e), m(e));
          }, []),
          w = g.useCallback((e) => {
            e !== _.current && ((_.current = e), y(e));
          }, []),
          x = a || h,
          S = i || v,
          E = g.useRef(null),
          _ = g.useRef(null),
          R = g.useRef(u),
          C = null != l,
          N = _l(l),
          A = _l(o),
          P = _l(c),
          k = g.useCallback(() => {
            if (!E.current || !_.current) return;
            const e = { placement: t, strategy: n, middleware: f };
            A.current && (e.platform = A.current),
              bl(E.current, _.current, e).then((e) => {
                const t = { ...e, isPositioned: false !== P.current };
                T.current &&
                  !xl(R.current, t) &&
                  ((R.current = t),
                  Ge.flushSync(() => {
                    d(t);
                  }));
              });
          }, [f, t, n, A, P]);
        wl(() => {
          false === c &&
            R.current.isPositioned &&
            ((R.current.isPositioned = false), d((e) => ({ ...e, isPositioned: false })));
        }, [c]);
        const T = g.useRef(false);
        wl(
          () => (
            (T.current = true),
            () => {
              T.current = false;
            }
          ),
          [],
        ),
          wl(() => {
            if ((x && (E.current = x), S && (_.current = S), x && S)) {
              if (N.current) return N.current(x, S, k);
              k();
            }
          }, [x, S, k, N, C]);
        const I = g.useMemo(
            () => ({ reference: E, floating: _, setReference: b, setFloating: w }),
            [b, w],
          ),
          O = g.useMemo(() => ({ reference: x, floating: S }), [x, S]),
          D = g.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!O.floating) return e;
            const t = El(O.floating, u.x),
              r = El(O.floating, u.y);
            return s
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(Sl(O.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, s, O.floating, u.x, u.y]);
        return g.useMemo(
          () => ({ ...u, update: k, refs: I, elements: O, floatingStyles: D }),
          [u, k, I, O, D],
        );
      })({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...e) => dl(...e, { animationFrame: "always" === h }),
        elements: { reference: y.anchor },
        middleware: [
          Cl({ mainAxis: o + C, alignmentAxis: i }),
          l &&
            Nl({
              mainAxis: true,
              crossAxis: false,
              limiter: "partial" === f ? Al() : void 0,
              ...T,
            }),
          l && Pl({ ...T }),
          kl({
            ...T,
            apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
              const { width: o, height: a } = t.reference,
                i = e.floating.style;
              i.setProperty("--radix-popper-available-width", `${n}px`),
                i.setProperty("--radix-popper-available-height", `${r}px`),
                i.setProperty("--radix-popper-anchor-width", `${o}px`),
                i.setProperty("--radix-popper-anchor-height", `${a}px`);
            },
          }),
          S && Il({ element: S, padding: s }),
          Jl({ arrowWidth: R, arrowHeight: C }),
          p && Tl({ strategy: "referenceHidden", ...T }),
        ],
      }),
      [L, j] = Zl(D),
      F = yi(m);
    Bi(() => {
      z && F?.();
    }, [z, F]);
    const B = M.arrow?.x,
      q = M.arrow?.y,
      U = 0 !== M.arrow?.centerOffset,
      [$, W] = g.useState();
    return (
      Bi(() => {
        b && W(window.getComputedStyle(b).zIndex);
      }, [b]),
      jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...O,
          transform: z ? O.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: $,
          "--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
          ...(M.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
        },
        dir: e.dir,
        children: jsx(Vl, {
          scope: n,
          placedSide: L,
          onArrowChange: E,
          arrowX: B,
          arrowY: q,
          shouldHideArrow: U,
          children: jsx(gi.div, {
            "data-side": L,
            "data-align": j,
            ...v,
            ref: x,
            style: { ...v.style, animation: z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Kl.displayName = Wl;
var Gl = "PopperArrow",
  Yl = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ql = g.forwardRef(function (e, t) {
    const { __scopePopper: n, ...r } = e,
      o = Hl(Gl, n),
      a = Yl[o.placedSide];
    return jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [a]: 0,
        transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
          o.placedSide
        ],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: jsx(Dl, { ...r, ref: t, style: { ...r.style, display: "block" } }),
    });
  });
function Xl(e) {
  return null !== e;
}
Ql.displayName = Gl;
var Jl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t,
      a = 0 !== o.arrow?.centerOffset,
      i = a ? 0 : e.arrowWidth,
      s = a ? 0 : e.arrowHeight,
      [l, c] = Zl(n),
      u = { start: "0%", center: "50%", end: "100%" }[c],
      d = (o.arrow?.x ?? 0) + i / 2,
      f = (o.arrow?.y ?? 0) + s / 2;
    let p = "",
      h = "";
    return (
      "bottom" === l
        ? ((p = a ? u : `${d}px`), (h = -s + "px"))
        : "top" === l
          ? ((p = a ? u : `${d}px`), (h = `${r.floating.height + s}px`))
          : "right" === l
            ? ((p = -s + "px"), (h = a ? u : `${f}px`))
            : "left" === l && ((p = `${r.floating.width + s}px`), (h = a ? u : `${f}px`)),
      { data: { x: p, y: h } }
    );
  },
});
function Zl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ec = ql,
  tc = $l,
  nc = Kl,
  rc = Ql,
  oc = g.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, a] = g.useState(false);
    Bi(() => a(true), []);
    const i = n || (o && globalThis?.document?.body);
    return i ? Ge__default.createPortal(jsx(gi.div, { ...r, ref: t }), i) : null;
  });
oc.displayName = "Portal";
var ac = g[" useInsertionEffect ".trim().toString()] || Bi;
function ic({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, a, i] = (function ({ defaultProp: e, onChange: t }) {
      const [n, r] = g.useState(e),
        o = g.useRef(n),
        a = g.useRef(t);
      return (
        ac(() => {
          a.current = t;
        }, [t]),
        g.useEffect(() => {
          o.current !== n && (a.current?.(n), (o.current = n));
        }, [n, o]),
        [n, r, a]
      );
    })({ defaultProp: t, onChange: n }),
    s = void 0 !== e,
    l = s ? e : o;
  {
    const t = g.useRef(void 0 !== e);
    g.useEffect(() => {
      const e = t.current;
      if (e !== s) {
        const t = e ? "controlled" : "uncontrolled",
          n = s ? "controlled" : "uncontrolled";
        console.warn(
          `${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        );
      }
      t.current = s;
    }, [s, r]);
  }
  const c = g.useCallback(
    (t) => {
      if (s) {
        const n = (function (e) {
          return "function" == typeof e;
        })(t)
          ? t(e)
          : t;
        n !== e && i.current?.(n);
      } else a(t);
    },
    [s, e, a, i],
  );
  return [l, c];
}
function sc(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(
    () => (
      t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var lc = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  cc = g.forwardRef((e, t) => jsx(gi.span, { ...e, ref: t, style: { ...lc, ...e.style } }));
cc.displayName = "VisuallyHidden";
var uc = cc,
  dc = new WeakMap(),
  fc = new WeakMap(),
  pc = {},
  hc = 0,
  mc = function (e) {
    return e && (e.host || mc(e.parentNode));
  },
  gc = function (e, t, n, r) {
    var o = (function (e, t) {
      return t
        .map(function (t) {
          if (e.contains(t)) return t;
          var n = mc(t);
          return n && e.contains(n)
            ? n
            : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"),
              null);
        })
        .filter(function (e) {
          return Boolean(e);
        });
    })(t, Array.isArray(e) ? e : [e]);
    pc[n] || (pc[n] = new WeakMap());
    var a = pc[n],
      i = [],
      s = new Set(),
      l = new Set(o),
      c = function (e) {
        e && !s.has(e) && (s.add(e), c(e.parentNode));
      };
    o.forEach(c);
    var u = function (e) {
      e &&
        !l.has(e) &&
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                o = null !== t && "false" !== t,
                l = (dc.get(e) || 0) + 1,
                c = (a.get(e) || 0) + 1;
              dc.set(e, l),
                a.set(e, c),
                i.push(e),
                1 === l && o && fc.set(e, !0),
                1 === c && e.setAttribute(n, "true"),
                o || e.setAttribute(r, "true");
            } catch (d) {
              console.error("aria-hidden: cannot operate on ", e, d);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      hc++,
      function () {
        i.forEach(function (e) {
          var t = dc.get(e) - 1,
            o = a.get(e) - 1;
          dc.set(e, t),
            a.set(e, o),
            t || (fc.has(e) || e.removeAttribute(r), fc.delete(e)),
            o || e.removeAttribute(n);
        }),
          --hc || ((dc = new WeakMap()), (dc = new WeakMap()), (fc = new WeakMap()), (pc = {}));
      }
    );
  },
  vc = function (e, t, n) {
    void 0 === n && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = (function (e) {
        return "undefined" == typeof document
          ? null
          : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
      })(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        gc(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  yc = function () {
    return (
      (yc =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      yc.apply(this, arguments)
    );
  };
function bc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
"function" == typeof SuppressedError && SuppressedError;
var wc = "right-scroll-bar-position",
  xc = "width-before-scroll-bar";
function Sc(e, t) {
  return "function" == typeof e ? e(t) : e && (e.current = t), e;
}
var Ec = g.useEffect,
  _c = new WeakMap();
function Rc(e, t) {
  var n,
    r,
    o,
    a =
      ((n = null),
      (r = function (t) {
        return e.forEach(function (e) {
          return Sc(e, t);
        });
      }),
      ((o = useState(function () {
        return {
          value: n,
          callback: r,
          facade: {
            get current() {
              return o.value;
            },
            set current(e) {
              var t = o.value;
              t !== e && ((o.value = e), o.callback(e, t));
            },
          },
        };
      })[0]).callback = r),
      o.facade);
  return (
    Ec(
      function () {
        var t = _c.get(a);
        if (t) {
          var n = new Set(t),
            r = new Set(e),
            o = a.current;
          n.forEach(function (e) {
            r.has(e) || Sc(e, null);
          }),
            r.forEach(function (e) {
              n.has(e) || Sc(e, o);
            });
        }
        _c.set(a, e);
      },
      [e],
    ),
    a
  );
}
function Cc(e) {
  return e;
}
var Nc = function (e) {
  var t = e.sideCar,
    n = bc(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return g.createElement(r, yc({}, n));
};
Nc.isSideCarExport = true;
var Ac = (function (e) {
    void 0 === e && (e = {});
    var t = (function (e, t) {
      void 0 === t && (t = Cc);
      var n = [],
        r = false,
        o = {
          read: function () {
            if (r)
              throw new Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (e) {
            var o = t(e, r);
            return (
              n.push(o),
              function () {
                n = n.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = true; n.length; ) {
              var t = n;
              (n = []), t.forEach(e);
            }
            n = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (e) {
            r = true;
            var t = [];
            if (n.length) {
              var o = n;
              (n = []), o.forEach(e), (t = n);
            }
            var a = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              i = function () {
                return Promise.resolve().then(a);
              };
            i(),
              (n = {
                push: function (e) {
                  t.push(e), i();
                },
                filter: function (e) {
                  return (t = t.filter(e)), n;
                },
              });
          },
        };
      return o;
    })(null);
    return (t.options = yc({ async: true, ssr: false }, e)), t;
  })(),
  Pc = function () {},
  kc = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({ onScrollCapture: Pc, onWheelCapture: Pc, onTouchMoveCapture: Pc }),
      o = r[0],
      a = r[1],
      i = e.forwardProps,
      s = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noRelative,
      h = e.noIsolation,
      m = e.inert,
      v = e.allowPinchZoom,
      y = e.as,
      b = void 0 === y ? "div" : y,
      w = e.gapMode,
      x = bc(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = f,
      E = Rc([n, t]),
      _ = yc(yc({}, x), o);
    return g.createElement(
      g.Fragment,
      null,
      u &&
        g.createElement(S, {
          sideCar: Ac,
          removeScrollBar: c,
          shards: d,
          noRelative: p,
          noIsolation: h,
          inert: m,
          setCallbacks: a,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: w,
        }),
      i
        ? g.cloneElement(g.Children.only(s), yc(yc({}, _), { ref: E }))
        : g.createElement(b, yc({}, _, { className: l, ref: E }), s),
    );
  });
(kc.defaultProps = { enabled: true, removeScrollBar: true, inert: false }),
  (kc.classNames = { fullWidth: xc, zeroRight: wc });
function Tc() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = (function () {
    if ("undefined" != typeof __webpack_nonce__) return __webpack_nonce__;
  })();
  return t && e.setAttribute("nonce", t), e;
}
var Ic = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        var r, o;
        0 == e &&
          (t = Tc()) &&
          ((o = n),
          (r = t).styleSheet
            ? (r.styleSheet.cssText = o)
            : r.appendChild(document.createTextNode(o)),
          (function (e) {
            (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
          })(t)),
          e++;
      },
      remove: function () {
        !--e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Oc = function () {
    var e,
      t =
        ((e = Ic()),
        function (t, n) {
          g.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n],
          );
        });
    return function (e) {
      var n = e.styles,
        r = e.dynamic;
      return t(n, r), null;
    };
  },
  Dc = { left: 0, top: 0, right: 0, gap: 0 },
  Mc = function (e) {
    return Dc;
  },
  Lc = Oc(),
  jc = "data-scroll-locked",
  Fc = function (e, t, n, r) {
    var o = e.left,
      a = e.top,
      i = e.right,
      s = e.gap;
    return (
      void 0 === n && (n = "margin"),
      "\n  ."
        .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
        .concat(r, ";\n   padding-right: ")
        .concat(s, "px ")
        .concat(r, ";\n  }\n  body[")
        .concat(jc, "] {\n    overflow: hidden ")
        .concat(r, ";\n    overscroll-behavior: contain;\n    ")
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            "margin" === n &&
              "\n    padding-left: "
                .concat(o, "px;\n    padding-top: ")
                .concat(a, "px;\n    padding-right: ")
                .concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                .concat(s, "px ")
                .concat(r, ";\n    "),
            "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          "\n  }\n  \n  .",
        )
        .concat(wc, " {\n    right: ")
        .concat(s, "px ")
        .concat(r, ";\n  }\n  \n  .")
        .concat(xc, " {\n    margin-right: ")
        .concat(s, "px ")
        .concat(r, ";\n  }\n  \n  .")
        .concat(wc, " .")
        .concat(wc, " {\n    right: 0 ")
        .concat(r, ";\n  }\n  \n  .")
        .concat(xc, " .")
        .concat(xc, " {\n    margin-right: 0 ")
        .concat(r, ";\n  }\n  \n  body[")
        .concat(jc, "] {\n    ")
        .concat("--removed-body-scroll-bar-size", ": ")
        .concat(s, "px;\n  }\n")
    );
  },
  Bc = function () {
    var e = parseInt(document.body.getAttribute(jc) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  qc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = void 0 === r ? "margin" : r;
    g.useEffect(function () {
      return (
        document.body.setAttribute(jc, (Bc() + 1).toString()),
        function () {
          var e = Bc() - 1;
          e <= 0 ? document.body.removeAttribute(jc) : document.body.setAttribute(jc, e.toString());
        }
      );
    }, []);
    var a = g.useMemo(
      function () {
        return Mc();
      },
      [o],
    );
    return g.createElement(Lc, { styles: Fc(a, !t, o, n ? "" : "!important") });
  };
var Wc = false,
  Vc = function (e, t) {
    if (!(e instanceof Element)) return false;
    var n = window.getComputedStyle(e);
    return (
      "hidden" !== n[t] &&
      !(
        n.overflowY === n.overflowX &&
        !(function (e) {
          return "TEXTAREA" === e.tagName;
        })(e) &&
        "visible" === n[t]
      )
    );
  },
  Hc = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Kc(e, r))) {
        var o = Gc(e, r);
        if (o[1] > o[2]) return true;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return false;
  },
  Kc = function (e, t) {
    return "v" === e
      ? (function (e) {
          return Vc(e, "overflowY");
        })(t)
      : (function (e) {
          return Vc(e, "overflowX");
        })(t);
  },
  Gc = function (e, t) {
    return "v" === e
      ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
      : (function (e) {
          return [e.scrollLeft, e.scrollWidth, e.clientWidth];
        })(t);
    var n;
  },
  Yc = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Qc = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Xc = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Jc = function (e) {
    return "\n  .block-interactivity-"
      .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
      .concat(e, " {pointer-events: all;}\n");
  },
  Zc = 0,
  eu = [];
function tu(e) {
  for (var t = null; null !== e; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const nu =
  ((ru = function (e) {
    var t = g.useRef([]),
      n = g.useRef([0, 0]),
      r = g.useRef(),
      o = g.useState(Zc++)[0],
      a = g.useState(Oc)[0],
      i = g.useRef(e);
    g.useEffect(
      function () {
        i.current = e;
      },
      [e],
    ),
      g.useEffect(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (function (e, t, n) {
              for (var r, o = 0, a = t.length; o < a; o++)
                (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
              return e.concat(r || Array.prototype.slice.call(t));
            })([e.lockRef.current], (e.shards || []).map(Xc)).filter(Boolean);
            return (
              t.forEach(function (e) {
                return e.classList.add("allow-interactivity-".concat(o));
              }),
              function () {
                document.body.classList.remove("block-interactivity-".concat(o)),
                  t.forEach(function (e) {
                    return e.classList.remove("allow-interactivity-".concat(o));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards],
      );
    var s = g.useCallback(function (e, t) {
        if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey))
          return !i.current.allowPinchZoom;
        var o,
          a = Yc(e),
          s = n.current,
          l = "deltaX" in e ? e.deltaX : s[0] - a[0],
          c = "deltaY" in e ? e.deltaY : s[1] - a[1],
          u = e.target,
          d = Math.abs(l) > Math.abs(c) ? "h" : "v";
        if ("touches" in e && "h" === d && "range" === u.type) return false;
        var f = Hc(d, u);
        if (!f) return true;
        if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = Hc(d, u))), !f)) return false;
        if ((!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o)) return true;
        var p = r.current || o;
        return (function (e, t, n, r) {
          var o = (function (e, t) {
              return "h" === e && "rtl" === t ? -1 : 1;
            })(e, window.getComputedStyle(t).direction),
            a = o * r,
            i = n.target,
            s = t.contains(i),
            l = false,
            c = a > 0,
            u = 0,
            d = 0;
          do {
            if (!i) break;
            var f = Gc(e, i),
              p = f[0],
              h = f[1] - f[2] - o * p;
            (p || h) && Kc(e, i) && ((u += h), (d += p));
            var m = i.parentNode;
            i = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
          } while ((!s && i !== document.body) || (s && (t.contains(i) || t === i)));
          return ((c && Math.abs(u) < 1) || (!c && Math.abs(d) < 1)) && (l = true), l;
        })(p, t, e, "h" === p ? l : c);
      }, []),
      l = g.useCallback(function (e) {
        var n = e;
        if (eu.length && eu[eu.length - 1] === a) {
          var r = "deltaY" in n ? Qc(n) : Yc(n),
            o = t.current.filter(function (e) {
              return (
                e.name === n.type &&
                (e.target === n.target || n.target === e.shadowParent) &&
                (function (e, t) {
                  return e[0] === t[0] && e[1] === t[1];
                })(e.delta, r)
              );
            })[0];
          if (o && o.should) n.cancelable && n.preventDefault();
          else if (!o) {
            var l = (i.current.shards || [])
              .map(Xc)
              .filter(Boolean)
              .filter(function (e) {
                return e.contains(n.target);
              });
            (l.length > 0 ? s(n, l[0]) : !i.current.noIsolation) &&
              n.cancelable &&
              n.preventDefault();
          }
        }
      }, []),
      c = g.useCallback(function (e, n, r, o) {
        var a = { name: e, delta: n, target: r, should: o, shadowParent: tu(r) };
        t.current.push(a),
          setTimeout(function () {
            t.current = t.current.filter(function (e) {
              return e !== a;
            });
          }, 1);
      }, []),
      u = g.useCallback(function (e) {
        (n.current = Yc(e)), (r.current = void 0);
      }, []),
      d = g.useCallback(function (t) {
        c(t.type, Qc(t), t.target, s(t, e.lockRef.current));
      }, []),
      f = g.useCallback(function (t) {
        c(t.type, Yc(t), t.target, s(t, e.lockRef.current));
      }, []);
    g.useEffect(function () {
      return (
        eu.push(a),
        e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }),
        document.addEventListener("wheel", l, Wc),
        document.addEventListener("touchmove", l, Wc),
        document.addEventListener("touchstart", u, Wc),
        function () {
          (eu = eu.filter(function (e) {
            return e !== a;
          })),
            document.removeEventListener("wheel", l, Wc),
            document.removeEventListener("touchmove", l, Wc),
            document.removeEventListener("touchstart", u, Wc);
        }
      );
    }, []);
    var p = e.removeScrollBar,
      h = e.inert;
    return g.createElement(
      g.Fragment,
      null,
      h ? g.createElement(a, { styles: Jc(o) }) : null,
      p ? g.createElement(qc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
    );
  }),
  Ac.useMedium(ru),
  Nc);
var ru,
  ou = g.forwardRef(function (e, t) {
    return g.createElement(kc, yc({}, e, { ref: t, sideCar: nu }));
  });
ou.classNames = kc.classNames;
var au = [" ", "Enter", "ArrowUp", "ArrowDown"],
  iu = [" ", "Enter"],
  su = "Select",
  [lu, cu, uu] = pi(su),
  [du, fu] = di(su, [uu, jl]),
  pu = jl(),
  [hu, mu] = du(su),
  [gu, vu] = du(su),
  yu = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        value: i,
        defaultValue: s,
        onValueChange: l,
        dir: c,
        name: u,
        autoComplete: p,
        disabled: h,
        required: m,
        form: v,
      } = e,
      y = pu(t),
      [b, w] = g.useState(null),
      [x, S] = g.useState(null),
      [E, _] = g.useState(false),
      R = mi(c),
      [C, N] = ic({ prop: r, defaultProp: o ?? false, onChange: a, caller: su }),
      [A, P] = ic({ prop: i, defaultProp: s, onChange: l, caller: su }),
      k = g.useRef(null),
      T = !b || v || !!b.closest("form"),
      [I, O] = g.useState(new Set()),
      D = Array.from(I)
        .map((e) => e.props.value)
        .join(";");
    return jsx(ec, {
      ...y,
      children: jsxs(hu, {
        required: m,
        scope: t,
        trigger: b,
        onTriggerChange: w,
        valueNode: x,
        onValueNodeChange: S,
        valueNodeHasChildren: E,
        onValueNodeHasChildrenChange: _,
        contentId: $i(),
        value: A,
        onValueChange: P,
        open: C,
        onOpenChange: N,
        dir: R,
        triggerPointerDownPosRef: k,
        disabled: h,
        children: [
          jsx(lu.Provider, {
            scope: t,
            children: jsx(gu, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: g.useCallback((e) => {
                O((t) => new Set(t).add(e));
              }, []),
              onNativeOptionRemove: g.useCallback((e) => {
                O((t) => {
                  const n = new Set(t);
                  return n.delete(e), n;
                });
              }, []),
              children: n,
            }),
          }),
          T
            ? jsxs(
                ad,
                {
                  "aria-hidden": true,
                  required: m,
                  tabIndex: -1,
                  name: u,
                  autoComplete: p,
                  value: A,
                  onChange: (e) => P(e.target.value),
                  disabled: h,
                  form: v,
                  children: [void 0 === A ? jsx("option", { value: "" }) : null, Array.from(I)],
                },
                D,
              )
            : null,
        ],
      }),
    });
  };
yu.displayName = su;
var bu = "SelectTrigger",
  wu = g.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = false, ...o } = e,
      a = pu(n),
      i = mu(bu, n),
      s = i.disabled || r,
      l = Qa(t, i.onTriggerChange),
      c = cu(n),
      u = g.useRef("touch"),
      [f, p, h] = sd((e) => {
        const t = c().filter((e) => !e.disabled),
          n = t.find((e) => e.value === i.value),
          r = ld(t, e, n);
        void 0 !== r && i.onValueChange(r.value);
      }),
      m = (e) => {
        s || (i.onOpenChange(true), h()),
          e &&
            (i.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY),
            });
      };
    return jsx(tc, {
      asChild: true,
      ...a,
      children: jsx(gi.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": id(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ui(o.onClick, (e) => {
          e.currentTarget.focus(), "mouse" !== u.current && m(e);
        }),
        onPointerDown: ui(o.onPointerDown, (e) => {
          u.current = e.pointerType;
          const t = e.target;
          t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
            0 === e.button &&
              false === e.ctrlKey &&
              "mouse" === e.pointerType &&
              (m(e), e.preventDefault());
        }),
        onKeyDown: ui(o.onKeyDown, (e) => {
          const t = "" !== f.current;
          e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key),
            (t && " " === e.key) || (au.includes(e.key) && (m(), e.preventDefault()));
        }),
      }),
    });
  });
wu.displayName = bu;
var xu = "SelectValue",
  Su = g.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e,
      l = mu(xu, n),
      { onValueNodeHasChildrenChange: c } = l,
      u = void 0 !== a,
      f = Qa(t, l.onValueNodeChange);
    return (
      Bi(() => {
        c(u);
      }, [c, u]),
      jsx(gi.span, {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: id(l.value) ? jsx(Fragment, { children: i }) : a,
      })
    );
  });
Su.displayName = xu;
var Eu = g.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return jsx(gi.span, { "aria-hidden": true, ...o, ref: t, children: r || "▼" });
});
Eu.displayName = "SelectIcon";
var _u = (e) => jsx(oc, { asChild: true, ...e });
_u.displayName = "SelectPortal";
var Ru = "SelectContent",
  Cu = g.forwardRef((e, t) => {
    const n = mu(Ru, e.__scopeSelect),
      [r, o] = g.useState();
    if (
      (Bi(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const t = r;
      return t
        ? Ge.createPortal(
            jsx(Au, {
              scope: e.__scopeSelect,
              children: jsx(lu.Slot, {
                scope: e.__scopeSelect,
                children: jsx("div", { children: e.children }),
              }),
            }),
            t,
          )
        : null;
    }
    return jsx(Tu, { ...e, ref: t });
  });
Cu.displayName = Ru;
var Nu = 10,
  [Au, Pu] = du(Ru),
  ku = Xa("SelectContent.RemoveScroll"),
  Tu = g.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        side: s,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: f,
        collisionBoundary: p,
        collisionPadding: h,
        sticky: m,
        hideWhenDetached: v,
        avoidCollisions: y,
        ...b
      } = e,
      w = mu(Ru, n),
      [x, S] = g.useState(null),
      [E, _] = g.useState(null),
      R = Qa(t, (e) => S(e)),
      [C, N] = g.useState(null),
      [A, P] = g.useState(null),
      k = cu(n),
      [T, I] = g.useState(false),
      O = g.useRef(false);
    g.useEffect(() => {
      if (x) return vc(x);
    }, [x]),
      Ai();
    const D = g.useCallback(
        (e) => {
          const [t, ...n] = k().map((e) => e.ref.current),
            [r] = n.slice(-1),
            o = document.activeElement;
          for (const a of e) {
            if (a === o) return;
            if (
              (a?.scrollIntoView({ block: "nearest" }),
              a === t && E && (E.scrollTop = 0),
              a === r && E && (E.scrollTop = E.scrollHeight),
              a?.focus(),
              document.activeElement !== o)
            )
              return;
          }
        },
        [k, E],
      ),
      z = g.useCallback(() => D([C, x]), [D, C, x]);
    g.useEffect(() => {
      T && z();
    }, [T, z]);
    const { onOpenChange: M, triggerPointerDownPosRef: L } = w;
    g.useEffect(() => {
      if (x) {
        let e = { x: 0, y: 0 };
        const t = (t) => {
            e = {
              x: Math.abs(Math.round(t.pageX) - (L.current?.x ?? 0)),
              y: Math.abs(Math.round(t.pageY) - (L.current?.y ?? 0)),
            };
          },
          n = (n) => {
            e.x <= 10 && e.y <= 10 ? n.preventDefault() : x.contains(n.target) || M(false),
              document.removeEventListener("pointermove", t),
              (L.current = null);
          };
        return (
          null !== L.current &&
            (document.addEventListener("pointermove", t),
            document.addEventListener("pointerup", n, { capture: true, once: true })),
          () => {
            document.removeEventListener("pointermove", t),
              document.removeEventListener("pointerup", n, { capture: true });
          }
        );
      }
    }, [x, M, L]),
      g.useEffect(() => {
        const e = () => M(false);
        return (
          window.addEventListener("blur", e),
          window.addEventListener("resize", e),
          () => {
            window.removeEventListener("blur", e), window.removeEventListener("resize", e);
          }
        );
      }, [M]);
    const [j, F] = sd((e) => {
        const t = k().filter((e) => !e.disabled),
          n = t.find((e) => e.ref.current === document.activeElement),
          r = ld(t, e, n);
        r && setTimeout(() => r.ref.current.focus());
      }),
      B = g.useCallback(
        (e, t, n) => {
          const r = !O.current && !n;
          ((void 0 !== w.value && w.value === t) || r) && (N(e), r && (O.current = true));
        },
        [w.value],
      ),
      q = g.useCallback(() => x?.focus(), [x]),
      U = g.useCallback(
        (e, t, n) => {
          const r = !O.current && !n;
          ((void 0 !== w.value && w.value === t) || r) && P(e);
        },
        [w.value],
      ),
      $ = "popper" === r ? Ou : Iu,
      W =
        $ === Ou
          ? {
              side: s,
              sideOffset: l,
              align: c,
              alignOffset: u,
              arrowPadding: f,
              collisionBoundary: p,
              collisionPadding: h,
              sticky: m,
              hideWhenDetached: v,
              avoidCollisions: y,
            }
          : {};
    return jsx(Au, {
      scope: n,
      content: x,
      viewport: E,
      onViewportChange: _,
      itemRefCallback: B,
      selectedItem: C,
      onItemLeave: q,
      itemTextRefCallback: U,
      focusSelectedItem: z,
      selectedItemText: A,
      position: r,
      isPositioned: T,
      searchRef: j,
      children: jsx(ou, {
        as: ku,
        allowPinchZoom: true,
        children: jsx(Oi, {
          asChild: true,
          trapped: w.open,
          onMountAutoFocus: (e) => {
            e.preventDefault();
          },
          onUnmountAutoFocus: ui(o, (e) => {
            w.trigger?.focus({ preventScroll: true }), e.preventDefault();
          }),
          children: jsx(_i, {
            asChild: true,
            disableOutsidePointerEvents: true,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: () => w.onOpenChange(false),
            children: jsx($, {
              role: "listbox",
              id: w.contentId,
              "data-state": w.open ? "open" : "closed",
              dir: w.dir,
              onContextMenu: (e) => e.preventDefault(),
              ...b,
              ...W,
              onPlaced: () => I(true),
              ref: R,
              style: { display: "flex", flexDirection: "column", outline: "none", ...b.style },
              onKeyDown: ui(b.onKeyDown, (e) => {
                const t = e.ctrlKey || e.altKey || e.metaKey;
                if (
                  ("Tab" === e.key && e.preventDefault(),
                  t || 1 !== e.key.length || F(e.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                ) {
                  let t = k()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(e.key))
                  ) {
                    const n = e.target,
                      r = t.indexOf(n);
                    t = t.slice(r + 1);
                  }
                  setTimeout(() => D(t)), e.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Tu.displayName = "SelectContentImpl";
var Iu = g.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e,
    a = mu(Ru, n),
    i = Pu(Ru, n),
    [s, l] = g.useState(null),
    [c, u] = g.useState(null),
    f = Qa(t, (e) => u(e)),
    p = cu(n),
    h = g.useRef(false),
    m = g.useRef(true),
    { viewport: v, selectedItem: y, selectedItemText: b, focusSelectedItem: w } = i,
    x = g.useCallback(() => {
      if (a.trigger && a.valueNode && s && c && v && y && b) {
        const e = a.trigger.getBoundingClientRect(),
          t = c.getBoundingClientRect(),
          n = a.valueNode.getBoundingClientRect(),
          o = b.getBoundingClientRect();
        if ("rtl" !== a.dir) {
          const r = o.left - t.left,
            a = n.left - r,
            i = e.left - a,
            l = e.width + i,
            c = Math.max(l, t.width),
            u = window.innerWidth - Nu,
            d = ci(a, [Nu, Math.max(Nu, u - c)]);
          (s.style.minWidth = l + "px"), (s.style.left = d + "px");
        } else {
          const r = t.right - o.right,
            a = window.innerWidth - n.right - r,
            i = window.innerWidth - e.right - a,
            l = e.width + i,
            c = Math.max(l, t.width),
            u = window.innerWidth - Nu,
            d = ci(a, [Nu, Math.max(Nu, u - c)]);
          (s.style.minWidth = l + "px"), (s.style.right = d + "px");
        }
        const i = p(),
          l = window.innerHeight - 2 * Nu,
          u = v.scrollHeight,
          d = window.getComputedStyle(c),
          f = parseInt(d.borderTopWidth, 10),
          m = parseInt(d.paddingTop, 10),
          g = parseInt(d.borderBottomWidth, 10),
          w = f + m + u + parseInt(d.paddingBottom, 10) + g,
          x = Math.min(5 * y.offsetHeight, w),
          S = window.getComputedStyle(v),
          E = parseInt(S.paddingTop, 10),
          _ = parseInt(S.paddingBottom, 10),
          R = e.top + e.height / 2 - Nu,
          C = l - R,
          N = y.offsetHeight / 2,
          A = f + m + (y.offsetTop + N),
          P = w - A;
        if (A <= R) {
          const e = i.length > 0 && y === i[i.length - 1].ref.current;
          s.style.bottom = "0px";
          const t = c.clientHeight - v.offsetTop - v.offsetHeight,
            n = A + Math.max(C, N + (e ? _ : 0) + t + g);
          s.style.height = n + "px";
        } else {
          const e = i.length > 0 && y === i[0].ref.current;
          s.style.top = "0px";
          const t = Math.max(R, f + v.offsetTop + (e ? E : 0) + N) + P;
          (s.style.height = t + "px"), (v.scrollTop = A - R + v.offsetTop);
        }
        (s.style.margin = `${Nu}px 0`),
          (s.style.minHeight = x + "px"),
          (s.style.maxHeight = l + "px"),
          r?.(),
          requestAnimationFrame(() => (h.current = true));
      }
    }, [p, a.trigger, a.valueNode, s, c, v, y, b, a.dir, r]);
  Bi(() => x(), [x]);
  const [S, E] = g.useState();
  Bi(() => {
    c && E(window.getComputedStyle(c).zIndex);
  }, [c]);
  const _ = g.useCallback(
    (e) => {
      e && true === m.current && (x(), w?.(), (m.current = false));
    },
    [x, w],
  );
  return jsx(Du, {
    scope: n,
    contentWrapper: s,
    shouldExpandOnScrollRef: h,
    onScrollButtonChange: _,
    children: jsx("div", {
      ref: l,
      style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: S },
      children: jsx(gi.div, {
        ...o,
        ref: f,
        style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
      }),
    }),
  });
});
Iu.displayName = "SelectItemAlignedPosition";
var Ou = g.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Nu, ...a } = e,
    i = pu(n);
  return jsx(nc, {
    ...i,
    ...a,
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
    },
  });
});
Ou.displayName = "SelectPopperPosition";
var [Du, zu] = du(Ru, {}),
  Mu = "SelectViewport",
  Lu = g.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      a = Pu(Mu, n),
      i = zu(Mu, n),
      s = Qa(t, a.onViewportChange),
      l = g.useRef(0);
    return jsxs(Fragment, {
      children: [
        jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        jsx(lu.Slot, {
          scope: n,
          children: jsx(gi.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: s,
            style: { position: "relative", flex: 1, overflow: "hidden auto", ...o.style },
            onScroll: ui(o.onScroll, (e) => {
              const t = e.currentTarget,
                { contentWrapper: n, shouldExpandOnScrollRef: r } = i;
              if (r?.current && n) {
                const e = Math.abs(l.current - t.scrollTop);
                if (e > 0) {
                  const r = window.innerHeight - 2 * Nu,
                    o = parseFloat(n.style.minHeight),
                    a = parseFloat(n.style.height),
                    i = Math.max(o, a);
                  if (i < r) {
                    const o = i + e,
                      a = Math.min(r, o),
                      s = o - a;
                    (n.style.height = a + "px"),
                      "0px" === n.style.bottom &&
                        ((t.scrollTop = s > 0 ? s : 0), (n.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = t.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Lu.displayName = Mu;
var ju = "SelectGroup",
  [Fu, Bu] = du(ju),
  qu = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = $i();
    return jsx(Fu, {
      scope: n,
      id: o,
      children: jsx(gi.div, { role: "group", "aria-labelledby": o, ...r, ref: t }),
    });
  });
qu.displayName = ju;
var Uu = "SelectLabel",
  $u = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Bu(Uu, n);
    return jsx(gi.div, { id: o.id, ...r, ref: t });
  });
$u.displayName = Uu;
var Wu = "SelectItem",
  [Vu, Hu] = du(Wu),
  Ku = g.forwardRef((e, t) => {
    const { __scopeSelect: n, value: r, disabled: o = false, textValue: a, ...i } = e,
      s = mu(Wu, n),
      l = Pu(Wu, n),
      c = s.value === r,
      [u, f] = g.useState(a ?? ""),
      [p, h] = g.useState(false),
      m = Qa(t, (e) => l.itemRefCallback?.(e, r, o)),
      v = $i(),
      y = g.useRef("touch"),
      b = () => {
        o || (s.onValueChange(r), s.onOpenChange(false));
      };
    if ("" === r)
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return jsx(Vu, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: c,
      onItemTextChange: g.useCallback((e) => {
        f((t) => t || (e?.textContent ?? "").trim());
      }, []),
      children: jsx(lu.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: u,
        children: jsx(gi.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": p ? "" : void 0,
          "aria-selected": c && p,
          "data-state": c ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...i,
          ref: m,
          onFocus: ui(i.onFocus, () => h(true)),
          onBlur: ui(i.onBlur, () => h(false)),
          onClick: ui(i.onClick, () => {
            "mouse" !== y.current && b();
          }),
          onPointerUp: ui(i.onPointerUp, () => {
            "mouse" === y.current && b();
          }),
          onPointerDown: ui(i.onPointerDown, (e) => {
            y.current = e.pointerType;
          }),
          onPointerMove: ui(i.onPointerMove, (e) => {
            (y.current = e.pointerType),
              o
                ? l.onItemLeave?.()
                : "mouse" === y.current && e.currentTarget.focus({ preventScroll: true });
          }),
          onPointerLeave: ui(i.onPointerLeave, (e) => {
            e.currentTarget === document.activeElement && l.onItemLeave?.();
          }),
          onKeyDown: ui(i.onKeyDown, (e) => {
            ("" !== l.searchRef?.current && " " === e.key) ||
              (iu.includes(e.key) && b(), " " === e.key && e.preventDefault());
          }),
        }),
      }),
    });
  });
Ku.displayName = Wu;
var Gu = "SelectItemText",
  Yu = g.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e,
      i = mu(Gu, n),
      s = Pu(Gu, n),
      l = Hu(Gu, n),
      c = vu(Gu, n),
      [u, h] = g.useState(null),
      m = Qa(
        t,
        (e) => h(e),
        l.onItemTextChange,
        (e) => s.itemTextRefCallback?.(e, l.value, l.disabled),
      ),
      v = u?.textContent,
      y = g.useMemo(
        () => jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
        [l.disabled, l.value, v],
      ),
      { onNativeOptionAdd: b, onNativeOptionRemove: w } = c;
    return (
      Bi(() => (b(y), () => w(y)), [b, w, y]),
      jsxs(Fragment, {
        children: [
          jsx(gi.span, { id: l.textId, ...a, ref: m }),
          l.isSelected && i.valueNode && !i.valueNodeHasChildren
            ? Ge.createPortal(a.children, i.valueNode)
            : null,
        ],
      })
    );
  });
Yu.displayName = Gu;
var Qu = "SelectItemIndicator",
  Xu = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Hu(Qu, n).isSelected ? jsx(gi.span, { "aria-hidden": true, ...r, ref: t }) : null;
  });
Xu.displayName = Qu;
var Ju = "SelectScrollUpButton",
  Zu = g.forwardRef((e, t) => {
    const n = Pu(Ju, e.__scopeSelect),
      r = zu(Ju, e.__scopeSelect),
      [o, a] = g.useState(false),
      i = Qa(t, r.onScrollButtonChange);
    return (
      Bi(() => {
        if (n.viewport && n.isPositioned) {
          let e = function () {
            const e = t.scrollTop > 0;
            a(e);
          };
          const t = n.viewport;
          return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? jsx(nd, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: e, selectedItem: t } = n;
              e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
            },
          })
        : null
    );
  });
Zu.displayName = Ju;
var ed = "SelectScrollDownButton",
  td = g.forwardRef((e, t) => {
    const n = Pu(ed, e.__scopeSelect),
      r = zu(ed, e.__scopeSelect),
      [o, a] = g.useState(false),
      i = Qa(t, r.onScrollButtonChange);
    return (
      Bi(() => {
        if (n.viewport && n.isPositioned) {
          let e = function () {
            const e = t.scrollHeight - t.clientHeight,
              n = Math.ceil(t.scrollTop) < e;
            a(n);
          };
          const t = n.viewport;
          return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? jsx(nd, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: e, selectedItem: t } = n;
              e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
            },
          })
        : null
    );
  });
td.displayName = ed;
var nd = g.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      a = Pu("SelectScrollButton", n),
      i = g.useRef(null),
      s = cu(n),
      l = g.useCallback(() => {
        null !== i.current && (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      g.useEffect(() => () => l(), [l]),
      Bi(() => {
        const e = s().find((e) => e.ref.current === document.activeElement);
        e?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [s]),
      jsx(gi.div, {
        "aria-hidden": true,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: ui(o.onPointerDown, () => {
          null === i.current && (i.current = window.setInterval(r, 50));
        }),
        onPointerMove: ui(o.onPointerMove, () => {
          a.onItemLeave?.(), null === i.current && (i.current = window.setInterval(r, 50));
        }),
        onPointerLeave: ui(o.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  rd = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return jsx(gi.div, { "aria-hidden": true, ...r, ref: t });
  });
rd.displayName = "SelectSeparator";
var od = "SelectArrow";
g.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e,
    o = pu(n),
    a = mu(od, n),
    i = Pu(od, n);
  return a.open && "popper" === i.position ? jsx(rc, { ...o, ...r, ref: t }) : null;
}).displayName = od;
var ad = g.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
  const o = g.useRef(null),
    a = Qa(r, o),
    i = sc(t);
  return (
    g.useEffect(() => {
      const e = o.current;
      if (!e) return;
      const n = window.HTMLSelectElement.prototype,
        r = Object.getOwnPropertyDescriptor(n, "value").set;
      if (i !== t && r) {
        const n = new Event("change", { bubbles: true });
        r.call(e, t), e.dispatchEvent(n);
      }
    }, [i, t]),
    jsx(gi.select, { ...n, style: { ...lc, ...n.style }, ref: a, defaultValue: t })
  );
});
function id(e) {
  return "" === e || void 0 === e;
}
function sd(e) {
  const t = yi(e),
    n = g.useRef(""),
    r = g.useRef(0),
    o = g.useCallback(
      (e) => {
        const o = n.current + e;
        t(o),
          (function e(t) {
            (n.current = t),
              window.clearTimeout(r.current),
              "" !== t && (r.current = window.setTimeout(() => e(""), 1e3));
          })(o);
      },
      [t],
    ),
    a = g.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return g.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function ld(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    o = n ? e.indexOf(n) : -1;
  let a = ((i = e), (s = Math.max(o, 0)), i.map((e, t) => i[(s + t) % i.length]));
  var i, s;
  1 === r.length && (a = a.filter((e) => e !== n));
  const l = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return l !== n ? l : void 0;
}
ad.displayName = "SelectBubbleInput";
var cd = yu,
  ud = wu,
  dd = Su,
  fd = Eu,
  pd = _u,
  hd = Cu,
  md = Lu,
  gd = qu,
  vd = $u,
  yd = Ku,
  bd = Yu,
  wd = Xu,
  xd = Zu,
  Sd = td,
  Ed = rd;
function _d({ className: e, ...t }) {
  return jsx(xd, {
    "data-slot": "select-scroll-up-button",
    className: Ka("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: jsx(ChevronUpIcon, { className: "size-4" }),
  });
}
function Rd({ className: e, ...t }) {
  return jsx(Sd, {
    "data-slot": "select-scroll-down-button",
    className: Ka("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: jsx(ChevronDownIcon, { className: "size-4" }),
  });
}
const Cd = function ({ ...e }) {
  return jsx(cd, { "data-slot": "select", ...e });
};
(Cd.Content = function ({ children: e, className: t, position: n = "popper", ...r }) {
  return jsx(pd, {
    children: jsxs(hd, {
      "data-slot": "select-content",
      className: Ka(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        "popper" === n &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t,
      ),
      position: n,
      ...r,
      children: [
        jsx(_d, {}),
        jsx(md, {
          className: Ka(
            "p-1",
            "popper" === n &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          ),
          children: e,
        }),
        jsx(Rd, {}),
      ],
    }),
  });
}),
  (Cd.Group = function ({ ...e }) {
    return jsx(gd, { "data-slot": "select-group", ...e });
  }),
  (Cd.Item = function ({ children: e, className: t, ...n }) {
    return jsxs(yd, {
      "data-slot": "select-item",
      className: Ka(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t,
      ),
      ...n,
      children: [
        jsx("span", {
          className: "absolute right-2 flex size-3.5 items-center justify-center",
          children: jsx(wd, { children: jsx(CheckIcon, { className: "size-4" }) }),
        }),
        jsx(bd, { children: e }),
      ],
    });
  }),
  (Cd.Label = function ({ className: e, ...t }) {
    return jsx(vd, {
      "data-slot": "select-label",
      className: Ka("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t,
    });
  }),
  (Cd.ScrollDownButton = Rd),
  (Cd.ScrollUpButton = _d),
  (Cd.Separator = function ({ className: e, ...t }) {
    return jsx(Ed, {
      "data-slot": "select-separator",
      className: Ka("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t,
    });
  }),
  (Cd.Trigger = function ({ children: e, className: t, size: n = "default", ...r }) {
    return jsxs(ud, {
      "data-slot": "select-trigger",
      "data-size": n,
      className: Ka(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t,
      ),
      ...r,
      children: [
        e,
        jsx(fd, {
          asChild: true,
          children: jsx(ChevronDownIcon, { className: "size-4 opacity-50" }),
        }),
      ],
    });
  }),
  (Cd.Value = function ({ ...e }) {
    return jsx(dd, { "data-slot": "select-value", ...e });
  });
const Nd = createContext(void 0),
  Ad = memo(({ className: e, ...t }) => {
    const n = useRef(null),
      [r, o] = useState(false),
      [a, i] = useState(0),
      [s, l] = useState(0),
      {
        hue: c,
        setLightness: u,
        setSaturation: f,
      } = (() => {
        const e = useContext(Nd);
        if (!e) throw new Error("useColorPicker must be used within a ColorPickerProvider");
        return e;
      })(),
      p = useMemo(
        () =>
          `linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0)),\n            linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0)),\n            hsl(${c}, 100%, 50%)`,
        [c],
      ),
      h = useCallback(
        (e) => {
          if (!r || !n.current) return;
          const t = n.current.getBoundingClientRect(),
            o = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)),
            a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
          i(o), l(a), f(100 * o);
          u((o < 0.01 ? 100 : 50 + 50 * (1 - o)) * (1 - a));
        },
        [r, f, u],
      );
    return (
      useEffect(() => {
        const e = () => {
          o(false);
        };
        return (
          r && (window.addEventListener("pointermove", h), window.addEventListener("pointerup", e)),
          () => {
            window.removeEventListener("pointermove", h),
              window.removeEventListener("pointerup", e);
          }
        );
      }, [r, h]),
      jsx("div", {
        className: Ka("relative size-full cursor-crosshair rounded", e),
        onPointerDown: (e) => {
          e.preventDefault(), o(true), h(e.nativeEvent);
        },
        ref: n,
        style: { background: p },
        ...t,
        children: jsx("div", {
          className:
            "-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute h-4 w-4 rounded-full border-2 border-white",
          style: {
            left: 100 * a + "%",
            top: 100 * s + "%",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.5)",
          },
        }),
      })
    );
  });
Ad.displayName = "ColorPickerSelection";
const Pd = ({ setTheme: e, theme: t }) =>
  jsxs(SR, {
    children: [
      jsx(SR.Trigger, {
        asChild: true,
        children: jsxs(ii, {
          variant: "ghost",
          size: "icon",
          children: [
            jsx(SunIcon, {
              className:
                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
            }),
            jsx(MoonIcon, {
              className:
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
            }),
            jsx("span", { className: "sr-only", children: "Toggle theme" }),
          ],
        }),
      }),
      jsxs(SR.Content, {
        align: "end",
        children: [
          jsxs(SR.Item, {
            onClick: () => {
              e("light");
            },
            className: "light" === t ? "bg-accent" : "",
            children: [jsx(SunIcon, { className: "mr-2 h-4 w-4" }), "Light"],
          }),
          jsxs(SR.Item, {
            onClick: () => {
              e("dark");
            },
            className: "dark" === t ? "bg-accent" : "",
            children: [jsx(MoonIcon, { className: "mr-2 h-4 w-4" }), "Dark"],
          }),
          jsxs(SR.Item, {
            onClick: () => {
              e("system");
            },
            className: "system" === t ? "bg-accent" : "",
            children: [jsx(MonitorIcon, { className: "mr-2 h-4 w-4" }), "System"],
          }),
        ],
      }),
    ],
  });
var kd =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
        ? self
        : {};
function Td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Id,
  Od = { exports: {} },
  Dd = {};
var Md;
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd =
  (Md ||
    ((Md = 1),
    (Od.exports = (function () {
      if (Id) return Dd;
      Id = 1;
      var e = g__default;
      e.useState;
      e.useEffect;
      e.useLayoutEffect;
      e.useDebugValue;
      var s = function (e, t) {
        return t();
      };
      return (
        (Dd.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : s),
        Dd
      );
    })())),
  Od.exports);
function Fd() {
  return () => {};
}
var Bd = "Avatar",
  [qd, Ud] = di(Bd),
  [$d, Wd] = qd(Bd),
  Vd = g.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, a] = g.useState("idle");
    return jsx($d, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: a,
      children: jsx(gi.span, { ...r, ref: t }),
    });
  });
Vd.displayName = Bd;
var Hd = "AvatarImage",
  Kd = g.forwardRef((e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {}, ...a } = e,
      i = Wd(Hd, n),
      s = (function (e, { referrerPolicy: t, crossOrigin: n }) {
        const r = jd.useSyncExternalStore(
            Fd,
            () => true,
            () => false,
          ),
          o = g.useRef(null),
          a = r ? (o.current || (o.current = new window.Image()), o.current) : null,
          [i, s] = g.useState(() => Qd(a, e));
        return (
          Bi(() => {
            s(Qd(a, e));
          }, [a, e]),
          Bi(() => {
            const e = (e) => () => {
              s(e);
            };
            if (!a) return;
            const r = e("loaded"),
              o = e("error");
            return (
              a.addEventListener("load", r),
              a.addEventListener("error", o),
              t && (a.referrerPolicy = t),
              "string" == typeof n && (a.crossOrigin = n),
              () => {
                a.removeEventListener("load", r), a.removeEventListener("error", o);
              }
            );
          }, [a, n, t]),
          i
        );
      })(r, a),
      l = yi((e) => {
        o(e), i.onImageLoadingStatusChange(e);
      });
    return (
      Bi(() => {
        "idle" !== s && l(s);
      }, [s, l]),
      "loaded" === s ? jsx(gi.img, { ...a, ref: t, src: r }) : null
    );
  });
Kd.displayName = Hd;
var Gd = "AvatarFallback",
  Yd = g.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      a = Wd(Gd, n),
      [i, s] = g.useState(void 0 === r);
    return (
      g.useEffect(() => {
        if (void 0 !== r) {
          const e = window.setTimeout(() => s(true), r);
          return () => window.clearTimeout(e);
        }
      }, [r]),
      i && "loaded" !== a.imageLoadingStatus ? jsx(gi.span, { ...o, ref: t }) : null
    );
  });
function Qd(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
Yd.displayName = Gd;
var Xd = Vd,
  Jd = Kd,
  Zd = Yd;
const ef = Object.assign(
    ({ className: e, ...t }) =>
      jsx(Xd, {
        "data-slot": "avatar",
        className: Ka("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
        ...t,
      }),
    {
      Image: ({ className: e, ...t }) =>
        jsx(Jd, { "data-slot": "avatar-image", className: Ka("aspect-square size-full", e), ...t }),
      Fallback: ({ className: e, ...t }) =>
        jsx(Zd, {
          "data-slot": "avatar-fallback",
          className: Ka("flex size-full items-center justify-center rounded-full bg-muted", e),
          ...t,
        }),
    },
  ),
  tf = Object.assign(
    ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "card",
        className: Ka("rounded-xl border bg-card text-card-foreground shadow-sm", e),
        ...t,
      }),
    {
      Header: ({ className: e, ...t }) =>
        jsx("div", {
          "data-slot": "card-header",
          className: Ka("flex flex-col gap-1.5 p-6", e),
          ...t,
        }),
      Title: ({ className: e, ...t }) =>
        jsx("div", {
          "data-slot": "card-title",
          className: Ka("leading-none font-semibold tracking-tight", e),
          ...t,
        }),
      Description: ({ className: e, ...t }) =>
        jsx("div", {
          "data-slot": "card-description",
          className: Ka("text-sm text-muted-foreground", e),
          ...t,
        }),
      Content: ({ className: e, ...t }) =>
        jsx("div", { "data-slot": "card-content", className: Ka("p-6 pt-0", e), ...t }),
      Footer: ({ className: e, ...t }) =>
        jsx("div", {
          "data-slot": "card-footer",
          className: Ka("flex items-center p-6 pt-0", e),
          ...t,
        }),
    },
  );
var nf,
  rf,
  of,
  af,
  sf,
  lf,
  cf,
  uf,
  df,
  ff,
  pf,
  hf,
  mf,
  gf,
  vf,
  yf,
  bf,
  wf,
  xf,
  Sf,
  Ef,
  _f,
  Rf,
  Cf,
  Nf,
  Af,
  Pf,
  kf,
  Tf,
  If,
  Of,
  Df,
  zf,
  Mf,
  Lf,
  jf,
  Ff,
  Bf,
  qf,
  Uf,
  $f,
  Wf,
  Vf,
  Hf,
  Kf,
  Gf,
  Yf,
  Qf,
  Xf,
  Jf,
  Zf,
  ep,
  tp,
  np,
  rp,
  op,
  ap,
  ip,
  sp,
  lp,
  cp,
  up,
  dp,
  fp,
  pp,
  hp,
  mp,
  gp,
  vp,
  yp,
  bp,
  wp,
  xp,
  Sp,
  Ep,
  _p,
  Rp,
  Cp,
  Np,
  Ap,
  Pp,
  kp,
  Tp,
  Ip,
  Op,
  Dp,
  zp,
  Mp,
  Lp,
  jp,
  Fp,
  Bp,
  qp,
  Up,
  $p,
  Wp,
  Vp,
  Hp,
  Kp,
  Gp,
  Yp,
  Qp,
  Xp,
  Jp;
function Zp() {
  if (rf) return nf;
  rf = 1;
  var e = Array.isArray;
  return (nf = e);
}
function eh() {
  if (af) return of;
  af = 1;
  var e = "object" == typeof kd && kd && kd.Object === Object && kd;
  return (of = e);
}
function th() {
  if (lf) return sf;
  lf = 1;
  var e = eh(),
    t = "object" == typeof self && self && self.Object === Object && self,
    n = e || t || Function("return this")();
  return (sf = n);
}
function nh() {
  if (uf) return cf;
  uf = 1;
  var e = th().Symbol;
  return (cf = e);
}
function rh() {
  if (gf) return mf;
  gf = 1;
  var e = nh(),
    t = (function () {
      if (ff) return df;
      ff = 1;
      var e = nh(),
        t = Object.prototype,
        n = t.hasOwnProperty,
        r = t.toString,
        o = e ? e.toStringTag : void 0;
      return (df = function (e) {
        var t = n.call(e, o),
          a = e[o];
        try {
          e[o] = void 0;
          var i = !0;
        } catch (l) {}
        var s = r.call(e);
        return i && (t ? (e[o] = a) : delete e[o]), s;
      });
    })(),
    n = (function () {
      if (hf) return pf;
      hf = 1;
      var e = Object.prototype.toString;
      return (pf = function (t) {
        return e.call(t);
      });
    })(),
    r = e ? e.toStringTag : void 0;
  return (mf = function (e) {
    return null == e
      ? void 0 === e
        ? "[object Undefined]"
        : "[object Null]"
      : r && r in Object(e)
        ? t(e)
        : n(e);
  });
}
function oh() {
  if (yf) return vf;
  return (
    (yf = 1),
    (vf = function (e) {
      return null != e && "object" == typeof e;
    })
  );
}
function ah() {
  if (wf) return bf;
  wf = 1;
  var e = rh(),
    t = oh();
  return (bf = function (n) {
    return "symbol" == typeof n || (t(n) && "[object Symbol]" == e(n));
  });
}
function ih() {
  if (Sf) return xf;
  Sf = 1;
  var e = Zp(),
    t = ah(),
    n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    r = /^\w*$/;
  return (xf = function (o, a) {
    if (e(o)) return false;
    var i = typeof o;
    return (
      !("number" != i && "symbol" != i && "boolean" != i && null != o && !t(o)) ||
      r.test(o) ||
      !n.test(o) ||
      (null != a && o in Object(a))
    );
  });
}
function sh() {
  if (_f) return Ef;
  return (
    (_f = 1),
    (Ef = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    })
  );
}
function lh() {
  if (Cf) return Rf;
  Cf = 1;
  var e = rh(),
    t = sh();
  return (Rf = function (n) {
    if (!t(n)) return false;
    var r = e(n);
    return (
      "[object Function]" == r ||
      "[object GeneratorFunction]" == r ||
      "[object AsyncFunction]" == r ||
      "[object Proxy]" == r
    );
  });
}
function ch() {
  if (kf) return Pf;
  kf = 1;
  var e,
    t = (function () {
      if (Af) return Nf;
      Af = 1;
      var e = th()["__core-js_shared__"];
      return (Nf = e);
    })(),
    n = (e = /[^.]+$/.exec((t && t.keys && t.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + e : "";
  return (Pf = function (e) {
    return !!n && n in e;
  });
}
function uh() {
  if (If) return Tf;
  If = 1;
  var e = Function.prototype.toString;
  return (Tf = function (t) {
    if (null != t) {
      try {
        return e.call(t);
      } catch (n) {}
      try {
        return t + "";
      } catch (n) {}
    }
    return "";
  });
}
function dh() {
  if (jf) return Lf;
  jf = 1;
  var e = (function () {
      if (Df) return Of;
      Df = 1;
      var e = lh(),
        t = ch(),
        n = sh(),
        r = uh(),
        o = /^\[object .+?Constructor\]$/,
        a = Function.prototype,
        i = Object.prototype,
        s = a.toString,
        l = i.hasOwnProperty,
        c = RegExp(
          "^" +
            s
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
        );
      return (Of = function (a) {
        return !(!n(a) || t(a)) && (e(a) ? c : o).test(r(a));
      });
    })(),
    t = Mf
      ? zf
      : ((Mf = 1),
        (zf = function (e, t) {
          return null == e ? void 0 : e[t];
        }));
  return (Lf = function (n, r) {
    var o = t(n, r);
    return e(o) ? o : void 0;
  });
}
function fh() {
  if (Bf) return Ff;
  Bf = 1;
  var e = dh()(Object, "create");
  return (Ff = e);
}
function ph() {
  if (Jf) return Xf;
  Jf = 1;
  var e = (function () {
      if (Uf) return qf;
      Uf = 1;
      var e = fh();
      return (qf = function () {
        (this.__data__ = e ? e(null) : {}), (this.size = 0);
      });
    })(),
    t = Wf
      ? $f
      : ((Wf = 1),
        ($f = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        })),
    n = (function () {
      if (Hf) return Vf;
      Hf = 1;
      var e = fh(),
        t = Object.prototype.hasOwnProperty;
      return (Vf = function (n) {
        var r = this.__data__;
        if (e) {
          var o = r[n];
          return "__lodash_hash_undefined__" === o ? void 0 : o;
        }
        return t.call(r, n) ? r[n] : void 0;
      });
    })(),
    r = (function () {
      if (Gf) return Kf;
      Gf = 1;
      var e = fh(),
        t = Object.prototype.hasOwnProperty;
      return (Kf = function (n) {
        var r = this.__data__;
        return e ? void 0 !== r[n] : t.call(r, n);
      });
    })(),
    o = (function () {
      if (Qf) return Yf;
      Qf = 1;
      var e = fh();
      return (Yf = function (t, n) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = e && void 0 === n ? "__lodash_hash_undefined__" : n),
          this
        );
      });
    })();
  function a(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = n),
    (a.prototype.has = r),
    (a.prototype.set = o),
    (Xf = a)
  );
}
function hh() {
  if (np) return tp;
  return (
    (np = 1),
    (tp = function (e, t) {
      return e === t || (e != e && t != t);
    })
  );
}
function mh() {
  if (op) return rp;
  op = 1;
  var e = hh();
  return (rp = function (t, n) {
    for (var r = t.length; r--; ) if (e(t[r][0], n)) return r;
    return -1;
  });
}
function gh() {
  if (hp) return pp;
  hp = 1;
  var e = ep
      ? Zf
      : ((ep = 1),
        (Zf = function () {
          (this.__data__ = []), (this.size = 0);
        })),
    t = (function () {
      if (ip) return ap;
      ip = 1;
      var e = mh(),
        t = Array.prototype.splice;
      return (
        (ap = function (n) {
          var r = this.__data__,
            o = e(r, n);
          return !(o < 0 || (o == r.length - 1 ? r.pop() : t.call(r, o, 1), --this.size, 0));
        }),
        ap
      );
    })(),
    n = (function () {
      if (lp) return sp;
      lp = 1;
      var e = mh();
      return (
        (sp = function (t) {
          var n = this.__data__,
            r = e(n, t);
          return r < 0 ? void 0 : n[r][1];
        }),
        sp
      );
    })(),
    r = (function () {
      if (up) return cp;
      up = 1;
      var e = mh();
      return (cp = function (t) {
        return e(this.__data__, t) > -1;
      });
    })(),
    o = (function () {
      if (fp) return dp;
      fp = 1;
      var e = mh();
      return (
        (dp = function (t, n) {
          var r = this.__data__,
            o = e(r, t);
          return o < 0 ? (++this.size, r.push([t, n])) : (r[o][1] = n), this;
        }),
        dp
      );
    })();
  function a(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = n),
    (a.prototype.has = r),
    (a.prototype.set = o),
    (pp = a)
  );
}
function vh() {
  if (gp) return mp;
  gp = 1;
  var e = dh()(th(), "Map");
  return (mp = e);
}
function yh() {
  if (Sp) return xp;
  Sp = 1;
  var e = wp
    ? bp
    : ((wp = 1),
      (bp = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      }));
  return (xp = function (t, n) {
    var r = t.__data__;
    return e(n) ? r["string" == typeof n ? "string" : "hash"] : r.map;
  });
}
function bh() {
  if (Ip) return Tp;
  Ip = 1;
  var e = (function () {
      if (yp) return vp;
      yp = 1;
      var e = ph(),
        t = gh(),
        n = vh();
      return (vp = function () {
        (this.size = 0), (this.__data__ = { hash: new e(), map: new (n || t)(), string: new e() });
      });
    })(),
    t = (function () {
      if (_p) return Ep;
      _p = 1;
      var e = yh();
      return (Ep = function (t) {
        var n = e(this, t).delete(t);
        return (this.size -= n ? 1 : 0), n;
      });
    })(),
    n = (function () {
      if (Cp) return Rp;
      Cp = 1;
      var e = yh();
      return (Rp = function (t) {
        return e(this, t).get(t);
      });
    })(),
    r = (function () {
      if (Ap) return Np;
      Ap = 1;
      var e = yh();
      return (Np = function (t) {
        return e(this, t).has(t);
      });
    })(),
    o = (function () {
      if (kp) return Pp;
      kp = 1;
      var e = yh();
      return (
        (Pp = function (t, n) {
          var r = e(this, t),
            o = r.size;
          return r.set(t, n), (this.size += r.size == o ? 0 : 1), this;
        }),
        Pp
      );
    })();
  function a(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = n),
    (a.prototype.has = r),
    (a.prototype.set = o),
    (Tp = a)
  );
}
function wh() {
  if (Dp) return Op;
  Dp = 1;
  var e = bh();
  function t(n, r) {
    if ("function" != typeof n || (null != r && "function" != typeof r))
      throw new TypeError("Expected a function");
    var o = function () {
      var e = arguments,
        t = r ? r.apply(this, e) : e[0],
        a = o.cache;
      if (a.has(t)) return a.get(t);
      var i = n.apply(this, e);
      return (o.cache = a.set(t, i) || a), i;
    };
    return (o.cache = new (t.Cache || e)()), o;
  }
  return (t.Cache = e), (Op = t);
}
function xh() {
  if (jp) return Lp;
  jp = 1;
  var e = (function () {
      if (Mp) return zp;
      Mp = 1;
      var e = wh();
      return (zp = function (t) {
        var n = e(t, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = n.cache;
        return n;
      });
    })(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    n = /\\(\\)?/g,
    r = e(function (e) {
      var r = [];
      return (
        46 === e.charCodeAt(0) && r.push(""),
        e.replace(t, function (e, t, o, a) {
          r.push(o ? a.replace(n, "$1") : t || e);
        }),
        r
      );
    });
  return (Lp = r);
}
function Sh() {
  if (Bp) return Fp;
  return (
    (Bp = 1),
    (Fp = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
      return o;
    }),
    Fp
  );
}
function Eh() {
  if (Wp) return $p;
  Wp = 1;
  var e = (function () {
    if (Up) return qp;
    Up = 1;
    var e = nh(),
      t = Sh(),
      n = Zp(),
      r = ah(),
      o = e ? e.prototype : void 0,
      a = o ? o.toString : void 0;
    return (
      (qp = function e(o) {
        if ("string" == typeof o) return o;
        if (n(o)) return t(o, e) + "";
        if (r(o)) return a ? a.call(o) : "";
        var i = o + "";
        return "0" == i && 1 / o == -1 / 0 ? "-0" : i;
      }),
      qp
    );
  })();
  return ($p = function (t) {
    return null == t ? "" : e(t);
  });
}
function _h() {
  if (Hp) return Vp;
  Hp = 1;
  var e = Zp(),
    t = ih(),
    n = xh(),
    r = Eh();
  return (Vp = function (o, a) {
    return e(o) ? o : t(o, a) ? [o] : n(r(o));
  });
}
function Rh() {
  if (Gp) return Kp;
  Gp = 1;
  var e = ah();
  return (Kp = function (t) {
    if ("string" == typeof t || e(t)) return t;
    var n = t + "";
    return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
  });
}
function Ch() {
  if (Qp) return Yp;
  Qp = 1;
  var e = _h(),
    t = Rh();
  return (
    (Yp = function (n, r) {
      for (var o = 0, a = (r = e(r, n)).length; null != n && o < a; ) n = n[t(r[o++])];
      return o && o == a ? n : void 0;
    }),
    Yp
  );
}
function Nh() {
  if (Jp) return Xp;
  Jp = 1;
  var e = Ch();
  return (Xp = function (t, n, r) {
    var o = null == t ? void 0 : e(t, n);
    return void 0 === o ? r : o;
  });
}
const Ah = Td(Nh());
var Ph, kh;
const Th = Td(
  kh
    ? Ph
    : ((kh = 1),
      (Ph = function (e) {
        return null == e;
      })),
);
var Ih, Oh;
const Dh = Td(
  (function () {
    if (Oh) return Ih;
    Oh = 1;
    var e = rh(),
      t = Zp(),
      n = oh();
    return (Ih = function (r) {
      return "string" == typeof r || (!t(r) && n(r) && "[object String]" == e(r));
    });
  })(),
);
const zh = Td(lh());
const Mh = Td(sh());
var Lh,
  jh = { exports: {} },
  Fh = {};
var qh;
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h,
  Wh,
  Vh,
  Hh,
  Kh =
    (qh ||
      ((qh = 1),
      (jh.exports = (function () {
        if (Lh) return Fh;
        Lh = 1;
        var e,
          t = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.server_context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.suspense_list"),
          f = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          h = Symbol.for("react.offscreen");
        function m(e) {
          if ("object" == typeof e && null !== e) {
            var h = e.$$typeof;
            switch (h) {
              case t:
                switch ((e = e.type)) {
                  case r:
                  case a:
                  case o:
                  case u:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case s:
                      case c:
                      case p:
                      case f:
                      case i:
                        return e;
                      default:
                        return h;
                    }
                }
              case n:
                return h;
            }
          }
        }
        return (
          (e = Symbol.for("react.module.reference")),
          (Fh.ContextConsumer = s),
          (Fh.ContextProvider = i),
          (Fh.Element = t),
          (Fh.ForwardRef = c),
          (Fh.Fragment = r),
          (Fh.Lazy = p),
          (Fh.Memo = f),
          (Fh.Portal = n),
          (Fh.Profiler = a),
          (Fh.StrictMode = o),
          (Fh.Suspense = u),
          (Fh.SuspenseList = d),
          (Fh.isAsyncMode = function () {
            return false;
          }),
          (Fh.isConcurrentMode = function () {
            return false;
          }),
          (Fh.isContextConsumer = function (e) {
            return m(e) === s;
          }),
          (Fh.isContextProvider = function (e) {
            return m(e) === i;
          }),
          (Fh.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === t;
          }),
          (Fh.isForwardRef = function (e) {
            return m(e) === c;
          }),
          (Fh.isFragment = function (e) {
            return m(e) === r;
          }),
          (Fh.isLazy = function (e) {
            return m(e) === p;
          }),
          (Fh.isMemo = function (e) {
            return m(e) === f;
          }),
          (Fh.isPortal = function (e) {
            return m(e) === n;
          }),
          (Fh.isProfiler = function (e) {
            return m(e) === a;
          }),
          (Fh.isStrictMode = function (e) {
            return m(e) === o;
          }),
          (Fh.isSuspense = function (e) {
            return m(e) === u;
          }),
          (Fh.isSuspenseList = function (e) {
            return m(e) === d;
          }),
          (Fh.isValidElementType = function (t) {
            return (
              "string" == typeof t ||
              "function" == typeof t ||
              t === r ||
              t === a ||
              t === o ||
              t === u ||
              t === d ||
              t === h ||
              ("object" == typeof t &&
                null !== t &&
                (t.$$typeof === p ||
                  t.$$typeof === f ||
                  t.$$typeof === i ||
                  t.$$typeof === s ||
                  t.$$typeof === c ||
                  t.$$typeof === e ||
                  void 0 !== t.getModuleId))
            );
          }),
          (Fh.typeOf = m),
          Fh
        );
      })())),
    jh.exports);
function Gh() {
  if (Wh) return $h;
  Wh = 1;
  var e = rh(),
    t = oh();
  return ($h = function (n) {
    return "number" == typeof n || (t(n) && "[object Number]" == e(n));
  });
}
var Yh = (function () {
  if (Hh) return Vh;
  Hh = 1;
  var e = Gh();
  return (Vh = function (t) {
    return e(t) && t != +t;
  });
})();
const Qh = Td(Yh);
const Xh = Td(Gh());
var Jh = function (e) {
    return 0 === e ? 0 : e > 0 ? 1 : -1;
  },
  Zh = function (e) {
    return Dh(e) && e.indexOf("%") === e.length - 1;
  },
  em = function (e) {
    return Xh(e) && !Qh(e);
  },
  tm = function (e) {
    return Th(e);
  },
  nm = function (e) {
    return em(e) || Dh(e);
  },
  rm = 0,
  om = function (e) {
    var t = ++rm;
    return "".concat(e || "").concat(t);
  },
  am = function (e, t) {
    var n,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!em(e) && !Dh(e)) return r;
    if (Zh(e)) {
      var a = e.indexOf("%");
      n = (t * parseFloat(e.slice(0, a))) / 100;
    } else n = +e;
    return Qh(n) && (n = r), o && n > t && (n = t), n;
  },
  im = function (e) {
    if (!e) return null;
    var t = Object.keys(e);
    return t && t.length ? e[t[0]] : null;
  },
  sm = function (e) {
    if (!Array.isArray(e)) return false;
    for (var t = e.length, n = {}, r = 0; r < t; r++) {
      if (n[e[r]]) return true;
      n[e[r]] = true;
    }
    return false;
  },
  lm = function (e, t) {
    return em(e) && em(t)
      ? function (n) {
          return e + n * (t - e);
        }
      : function () {
          return t;
        };
  };
function cm(e, t, n) {
  return e && e.length
    ? e.find(function (e) {
        return e && ("function" == typeof t ? t(e) : Ah(e, t)) === n;
      })
    : null;
}
var um = function (e, t) {
  return em(e) && em(t)
    ? e - t
    : Dh(e) && Dh(t)
      ? e.localeCompare(t)
      : e instanceof Date && t instanceof Date
        ? e.getTime() - t.getTime()
        : String(e).localeCompare(String(t));
};
function dm(e, t) {
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n) && (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n]))
      return false;
  for (var r in t) if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r)) return false;
  return true;
}
function fm(e) {
  return (
    (fm =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    fm(e)
  );
}
var pm = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  hm = ["points", "pathLength"],
  mm = { svg: ["viewBox", "children"], polygon: hm, polyline: hm },
  gm = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  vm = function (e, t) {
    if (!e || "function" == typeof e || "boolean" == typeof e) return null;
    var n = e;
    if ((isValidElement(e) && (n = e.props), !Mh(n))) return null;
    var r = {};
    return (
      Object.keys(n).forEach(function (e) {
        gm.includes(e) &&
          (r[e] =
            t ||
            function (t) {
              return n[e](n, t);
            });
      }),
      r
    );
  },
  ym = function (e, t, n) {
    if (!Mh(e) || "object" !== fm(e)) return null;
    var r = null;
    return (
      Object.keys(e).forEach(function (o) {
        var a = e[o];
        gm.includes(o) &&
          "function" == typeof a &&
          (r || (r = {}),
          (r[o] = (function (e, t, n) {
            return function (r) {
              return e(t, n, r), null;
            };
          })(a, t, n)));
      }),
      r
    );
  },
  bm = ["children"],
  wm = ["children"];
function xm(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          if (t.indexOf(r) >= 0) continue;
          n[r] = e[r];
        }
      return n;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Sm(e) {
  return (
    (Sm =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Sm(e)
  );
}
var Em = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  _m = function (e) {
    return "string" == typeof e ? e : e ? e.displayName || e.name || "Component" : "";
  },
  Rm = null,
  Cm = null,
  Nm = function e(t) {
    if (t === Rm && Array.isArray(Cm)) return Cm;
    var n = [];
    return (
      Children.forEach(t, function (t) {
        Th(t) || (Kh.isFragment(t) ? (n = n.concat(e(t.props.children))) : n.push(t));
      }),
      (Cm = n),
      (Rm = t),
      n
    );
  };
function Am(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t)
      ? t.map(function (e) {
          return _m(e);
        })
      : [_m(t)]),
    Nm(e).forEach(function (e) {
      var t = Ah(e, "type.displayName") || Ah(e, "type.name");
      -1 !== r.indexOf(t) && n.push(e);
    }),
    n
  );
}
function Pm(e, t) {
  var n = Am(e, t);
  return n && n[0];
}
var km,
  Tm,
  Im,
  Om,
  Dm,
  zm,
  Mm,
  Lm,
  jm,
  Fm,
  Bm,
  qm,
  Um,
  $m,
  Wm,
  Vm,
  Hm,
  Km,
  Gm,
  Ym,
  Qm,
  Xm,
  Jm,
  Zm,
  eg,
  tg,
  ng,
  rg,
  og,
  ag,
  ig,
  sg,
  lg,
  cg,
  ug,
  dg,
  fg,
  pg,
  hg,
  mg,
  gg,
  vg,
  yg,
  bg,
  wg,
  xg,
  Sg,
  Eg,
  _g = function (e) {
    if (!e || !e.props) return false;
    var t = e.props,
      n = t.width,
      r = t.height;
    return !(!em(n) || n <= 0 || !em(r) || r <= 0);
  },
  Rg = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  Cg = function (e) {
    return e && "object" === Sm(e) && "clipDot" in e;
  },
  Ng = function (e, t, n) {
    if (!e || "function" == typeof e || "boolean" == typeof e) return null;
    var r = e;
    if ((isValidElement(e) && (r = e.props), !Mh(r))) return null;
    var o = {};
    return (
      Object.keys(r).forEach(function (e) {
        var a;
        (function (e, t, n, r) {
          var o,
            a = null !== (o = null == mm ? void 0 : mm[r]) && void 0 !== o ? o : [];
          return (
            t.startsWith("data-") ||
            (!zh(e) && ((r && a.includes(t)) || pm.includes(t))) ||
            (n && gm.includes(t))
          );
        })(null === (a = r) || void 0 === a ? void 0 : a[e], e, t, n) && (o[e] = r[e]);
      }),
      o
    );
  },
  Ag = function e(t, n) {
    if (t === n) return true;
    var r = Children.count(t);
    if (r !== Children.count(n)) return false;
    if (0 === r) return true;
    if (1 === r) return Pg(Array.isArray(t) ? t[0] : t, Array.isArray(n) ? n[0] : n);
    for (var o = 0; o < r; o++) {
      var a = t[o],
        i = n[o];
      if (Array.isArray(a) || Array.isArray(i)) {
        if (!e(a, i)) return false;
      } else if (!Pg(a, i)) return false;
    }
    return true;
  },
  Pg = function (e, t) {
    if (Th(e) && Th(t)) return true;
    if (!Th(e) && !Th(t)) {
      var n = e.props || {},
        r = n.children,
        o = xm(n, bm),
        a = t.props || {},
        i = a.children,
        s = xm(a, wm);
      return r && i ? dm(o, s) && Ag(r, i) : !r && !i && dm(o, s);
    }
    return false;
  },
  kg = function (e, t) {
    var n = [],
      r = {};
    return (
      Nm(e).forEach(function (e, o) {
        if (
          (function (e) {
            return e && e.type && Dh(e.type) && Rg.indexOf(e.type) >= 0;
          })(e)
        )
          n.push(e);
        else if (e) {
          var a = _m(e.type),
            i = t[a] || {},
            s = i.handler,
            l = i.once;
          if (s && (!l || !r[a])) {
            var c = s(e, a, o);
            n.push(c), (r[a] = true);
          }
        }
      }),
      n
    );
  },
  Tg = function (e) {
    var t = e && e.type;
    return t && Em[t] ? Em[t] : null;
  },
  Ig = function (e, t) {
    return Nm(t).indexOf(e);
  },
  Dg = function (e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o];
  };
function zg() {
  if (qm) return Bm;
  qm = 1;
  var e = gh(),
    t = (function () {
      if (Tm) return km;
      Tm = 1;
      var e = gh();
      return (km = function () {
        (this.__data__ = new e()), (this.size = 0);
      });
    })(),
    n = Om
      ? Im
      : ((Om = 1),
        (Im = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        })),
    r = zm
      ? Dm
      : ((zm = 1),
        (Dm = function (e) {
          return this.__data__.get(e);
        })),
    o = Lm
      ? Mm
      : ((Lm = 1),
        (Mm = function (e) {
          return this.__data__.has(e);
        })),
    a = (function () {
      if (Fm) return jm;
      Fm = 1;
      var e = gh(),
        t = vh(),
        n = bh();
      return (jm = function (r, o) {
        var a = this.__data__;
        if (a instanceof e) {
          var i = a.__data__;
          if (!t || i.length < 199) return i.push([r, o]), (this.size = ++a.size), this;
          a = this.__data__ = new n(i);
        }
        return a.set(r, o), (this.size = a.size), this;
      });
    })();
  function i(t) {
    var n = (this.__data__ = new e(t));
    this.size = n.size;
  }
  return (
    (i.prototype.clear = t),
    (i.prototype.delete = n),
    (i.prototype.get = r),
    (i.prototype.has = o),
    (i.prototype.set = a),
    (Bm = i)
  );
}
function Mg() {
  if (Km) return Hm;
  Km = 1;
  var e = bh(),
    t = $m
      ? Um
      : (($m = 1),
        (Um = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        })),
    n = Vm
      ? Wm
      : ((Vm = 1),
        (Wm = function (e) {
          return this.__data__.has(e);
        }));
  function r(t) {
    var n = -1,
      r = null == t ? 0 : t.length;
    for (this.__data__ = new e(); ++n < r; ) this.add(t[n]);
  }
  return (r.prototype.add = r.prototype.push = t), (r.prototype.has = n), (Hm = r);
}
function Lg() {
  if (Ym) return Gm;
  return (
    (Ym = 1),
    (Gm = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return true;
      return false;
    }),
    Gm
  );
}
function jg() {
  if (Xm) return Qm;
  return (
    (Xm = 1),
    (Qm = function (e, t) {
      return e.has(t);
    })
  );
}
function Fg() {
  if (Zm) return Jm;
  Zm = 1;
  var e = Mg(),
    t = Lg(),
    n = jg();
  return (
    (Jm = function (r, o, a, i, s, l) {
      var c = 1 & a,
        u = r.length,
        d = o.length;
      if (u != d && !(c && d > u)) return false;
      var f = l.get(r),
        p = l.get(o);
      if (f && p) return f == o && p == r;
      var h = -1,
        m = true,
        g = 2 & a ? new e() : void 0;
      for (l.set(r, o), l.set(o, r); ++h < u; ) {
        var v = r[h],
          y = o[h];
        if (i) var b = c ? i(y, v, h, o, r, l) : i(v, y, h, r, o, l);
        if (void 0 !== b) {
          if (b) continue;
          m = false;
          break;
        }
        if (g) {
          if (
            !t(o, function (e, t) {
              if (!n(g, t) && (v === e || s(v, e, a, i, l))) return g.push(t);
            })
          ) {
            m = false;
            break;
          }
        } else if (v !== y && !s(v, y, a, i, l)) {
          m = false;
          break;
        }
      }
      return l.delete(r), l.delete(o), m;
    }),
    Jm
  );
}
function Bg() {
  if (ag) return og;
  return (
    (ag = 1),
    (og = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    }),
    og
  );
}
function qg() {
  if (sg) return ig;
  sg = 1;
  var e = nh(),
    t = (function () {
      if (tg) return eg;
      tg = 1;
      var e = th().Uint8Array;
      return (eg = e);
    })(),
    n = hh(),
    r = Fg(),
    o =
      (rg ||
        ((rg = 1),
        (ng = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        })),
      ng),
    a = Bg(),
    i = e ? e.prototype : void 0,
    s = i ? i.valueOf : void 0;
  return (ig = function (e, i, l, c, u, d, f) {
    switch (l) {
      case "[object DataView]":
        if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset) return false;
        (e = e.buffer), (i = i.buffer);
      case "[object ArrayBuffer]":
        return !(e.byteLength != i.byteLength || !d(new t(e), new t(i)));
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return n(+e, +i);
      case "[object Error]":
        return e.name == i.name && e.message == i.message;
      case "[object RegExp]":
      case "[object String]":
        return e == i + "";
      case "[object Map]":
        var p = o;
      case "[object Set]":
        var h = 1 & c;
        if ((p || (p = a), e.size != i.size && !h)) return false;
        var m = f.get(e);
        if (m) return m == i;
        (c |= 2), f.set(e, i);
        var g = r(p(e), p(i), c, u, d, f);
        return f.delete(e), g;
      case "[object Symbol]":
        if (s) return s.call(e) == s.call(i);
    }
    return false;
  });
}
function Ug() {
  if (cg) return lg;
  return (
    (cg = 1),
    (lg = function (e, t) {
      for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
      return e;
    }),
    lg
  );
}
function $g() {
  if (vg) return gg;
  vg = 1;
  var e =
      (pg ||
        ((pg = 1),
        (fg = function (e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r; ) {
            var i = e[n];
            t(i, n, e) && (a[o++] = i);
          }
          return a;
        })),
      fg),
    t = mg
      ? hg
      : ((mg = 1),
        (hg = function () {
          return [];
        })),
    n = Object.prototype.propertyIsEnumerable,
    r = Object.getOwnPropertySymbols;
  return (gg = r
    ? function (t) {
        return null == t
          ? []
          : ((t = Object(t)),
            e(r(t), function (e) {
              return n.call(t, e);
            }));
      }
    : t);
}
function Wg() {
  if (Eg) return Sg;
  Eg = 1;
  var e = (function () {
      if (xg) return wg;
      xg = 1;
      var e = rh(),
        t = oh();
      return (wg = function (n) {
        return t(n) && "[object Arguments]" == e(n);
      });
    })(),
    t = oh(),
    n = Object.prototype,
    r = n.hasOwnProperty,
    o = n.propertyIsEnumerable,
    a = e(
      (function () {
        return arguments;
      })(),
    )
      ? e
      : function (e) {
          return t(e) && r.call(e, "callee") && !o.call(e, "callee");
        };
  return (Sg = a);
}
var Vg,
  Hg,
  Kg,
  Gg,
  Yg,
  Qg,
  Xg,
  Jg,
  Zg,
  ev,
  tv,
  nv = { exports: {} };
function rv() {
  return (
    Kg ||
      ((Kg = 1),
      (function (e, t) {
        var n = th(),
          r = Hg
            ? Vg
            : ((Hg = 1),
              (Vg = function () {
                return false;
              })),
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          i = a && a.exports === o ? n.Buffer : void 0,
          s = (i ? i.isBuffer : void 0) || r;
        e.exports = s;
      })(nv, nv.exports)),
    nv.exports
  );
}
function ov() {
  if (Yg) return Gg;
  Yg = 1;
  var e = /^(?:0|[1-9]\d*)$/;
  return (Gg = function (t, n) {
    var r = typeof t;
    return (
      !!(n = null == n ? 9007199254740991 : n) &&
      ("number" == r || ("symbol" != r && e.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < n
    );
  });
}
function av() {
  if (Xg) return Qg;
  Xg = 1;
  return (Qg = function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
  });
}
function iv() {
  if (tv) return ev;
  return (
    (tv = 1),
    (ev = function (e) {
      return function (t) {
        return e(t);
      };
    })
  );
}
var sv,
  lv,
  cv,
  uv,
  dv,
  fv,
  pv,
  hv,
  mv,
  gv,
  vv,
  yv,
  bv,
  wv,
  xv,
  Sv,
  Ev,
  _v,
  Rv,
  Cv,
  Nv,
  Av,
  Pv,
  kv,
  Tv,
  Iv,
  Ov,
  Dv,
  zv,
  Mv,
  Lv,
  jv,
  Fv,
  Bv,
  qv,
  Uv,
  $v,
  Wv,
  Vv,
  Hv,
  Kv,
  Gv,
  Yv,
  Qv,
  Xv,
  Jv,
  Zv,
  ey,
  ty,
  ny,
  ry,
  oy,
  ay,
  iy,
  sy,
  ly,
  cy,
  uy,
  dy,
  fy,
  py,
  hy,
  my,
  gy,
  vy,
  yy,
  by,
  wy,
  xy,
  Sy,
  Ey,
  _y,
  Ry,
  Cy,
  Ny,
  Ay,
  Py,
  ky,
  Ty,
  Iy,
  Oy,
  Dy,
  zy,
  My = { exports: {} };
function Ly() {
  if (cv) return lv;
  cv = 1;
  var e = (function () {
      if (Zg) return Jg;
      Zg = 1;
      var e = rh(),
        t = av(),
        n = oh(),
        r = {};
      return (
        (r["[object Float32Array]"] =
          r["[object Float64Array]"] =
          r["[object Int8Array]"] =
          r["[object Int16Array]"] =
          r["[object Int32Array]"] =
          r["[object Uint8Array]"] =
          r["[object Uint8ClampedArray]"] =
          r["[object Uint16Array]"] =
          r["[object Uint32Array]"] =
            true),
        (r["[object Arguments]"] =
          r["[object Array]"] =
          r["[object ArrayBuffer]"] =
          r["[object Boolean]"] =
          r["[object DataView]"] =
          r["[object Date]"] =
          r["[object Error]"] =
          r["[object Function]"] =
          r["[object Map]"] =
          r["[object Number]"] =
          r["[object Object]"] =
          r["[object RegExp]"] =
          r["[object Set]"] =
          r["[object String]"] =
          r["[object WeakMap]"] =
            false),
        (Jg = function (o) {
          return n(o) && t(o.length) && !!r[e(o)];
        })
      );
    })(),
    t = iv(),
    n = (function () {
      return (
        sv ||
          ((sv = 1),
          (e = My),
          (t = My.exports),
          (n = eh()),
          (r = t && !t.nodeType && t),
          (o = r && e && !e.nodeType && e),
          (a = o && o.exports === r && n.process),
          (i = (function () {
            try {
              return (
                (o && o.require && o.require("util").types) || (a && a.binding && a.binding("util"))
              );
            } catch (e) {}
          })()),
          (e.exports = i)),
        My.exports
      );
      var e, t, n, r, o, a, i;
    })(),
    r = n && n.isTypedArray,
    o = r ? t(r) : e;
  return (lv = o);
}
function jy() {
  if (dv) return uv;
  dv = 1;
  var e =
      (bg ||
        ((bg = 1),
        (yg = function (e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        })),
      yg),
    t = Wg(),
    n = Zp(),
    r = rv(),
    o = ov(),
    a = Ly(),
    i = Object.prototype.hasOwnProperty;
  return (uv = function (s, l) {
    var c = n(s),
      u = !c && t(s),
      d = !c && !u && r(s),
      f = !c && !u && !d && a(s),
      p = c || u || d || f,
      h = p ? e(s.length, String) : [],
      m = h.length;
    for (var g in s)
      (!l && !i.call(s, g)) ||
        (p &&
          ("length" == g ||
            (d && ("offset" == g || "parent" == g)) ||
            (f && ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
            o(g, m))) ||
        h.push(g);
    return h;
  });
}
function Fy() {
  if (mv) return hv;
  return (
    (mv = 1),
    (hv = function (e, t) {
      return function (n) {
        return e(t(n));
      };
    })
  );
}
function By() {
  if (bv) return yv;
  bv = 1;
  var e = (function () {
      if (pv) return fv;
      pv = 1;
      var e = Object.prototype;
      return (fv = function (t) {
        var n = t && t.constructor;
        return t === (("function" == typeof n && n.prototype) || e);
      });
    })(),
    t = (function () {
      if (vv) return gv;
      vv = 1;
      var e = Fy()(Object.keys, Object);
      return (gv = e);
    })(),
    n = Object.prototype.hasOwnProperty;
  return (yv = function (r) {
    if (!e(r)) return t(r);
    var o = [];
    for (var a in Object(r)) n.call(r, a) && "constructor" != a && o.push(a);
    return o;
  });
}
function qy() {
  if (xv) return wv;
  xv = 1;
  var e = lh(),
    t = av();
  return (wv = function (n) {
    return null != n && t(n.length) && !e(n);
  });
}
function Uy() {
  if (Ev) return Sv;
  Ev = 1;
  var e = jy(),
    t = By(),
    n = qy();
  return (Sv = function (r) {
    return n(r) ? e(r) : t(r);
  });
}
function $y() {
  if (Rv) return _v;
  Rv = 1;
  var e = (function () {
      if (dg) return ug;
      dg = 1;
      var e = Ug(),
        t = Zp();
      return (ug = function (n, r, o) {
        var a = r(n);
        return t(n) ? a : e(a, o(n));
      });
    })(),
    t = $g(),
    n = Uy();
  return (_v = function (r) {
    return e(r, n, t);
  });
}
function Wy() {
  if (Ov) return Iv;
  Ov = 1;
  var e = dh()(th(), "Set");
  return (Iv = e);
}
function Vy() {
  if (Lv) return Mv;
  Lv = 1;
  var e = (function () {
      if (Pv) return Av;
      Pv = 1;
      var e = dh()(th(), "DataView");
      return (Av = e);
    })(),
    t = vh(),
    n = (function () {
      if (Tv) return kv;
      Tv = 1;
      var e = dh()(th(), "Promise");
      return (kv = e);
    })(),
    r = Wy(),
    o = (function () {
      if (zv) return Dv;
      zv = 1;
      var e = dh()(th(), "WeakMap");
      return (Dv = e);
    })(),
    a = rh(),
    i = uh(),
    s = "[object Map]",
    l = "[object Promise]",
    c = "[object Set]",
    u = "[object WeakMap]",
    d = "[object DataView]",
    f = i(e),
    p = i(t),
    h = i(n),
    m = i(r),
    g = i(o),
    v = a;
  return (
    ((e && v(new e(new ArrayBuffer(1))) != d) ||
      (t && v(new t()) != s) ||
      (n && v(n.resolve()) != l) ||
      (r && v(new r()) != c) ||
      (o && v(new o()) != u)) &&
      (v = function (e) {
        var t = a(e),
          n = "[object Object]" == t ? e.constructor : void 0,
          r = n ? i(n) : "";
        if (r)
          switch (r) {
            case f:
              return d;
            case p:
              return s;
            case h:
              return l;
            case m:
              return c;
            case g:
              return u;
          }
        return t;
      }),
    (Mv = v)
  );
}
function Hy() {
  if (Fv) return jv;
  Fv = 1;
  var e = zg(),
    t = Fg(),
    n = qg(),
    r = (function () {
      if (Nv) return Cv;
      Nv = 1;
      var e = $y(),
        t = Object.prototype.hasOwnProperty;
      return (
        (Cv = function (n, r, o, a, i, s) {
          var l = 1 & o,
            c = e(n),
            u = c.length;
          if (u != e(r).length && !l) return false;
          for (var d = u; d--; ) {
            var f = c[d];
            if (!(l ? f in r : t.call(r, f))) return false;
          }
          var p = s.get(n),
            h = s.get(r);
          if (p && h) return p == r && h == n;
          var m = true;
          s.set(n, r), s.set(r, n);
          for (var g = l; ++d < u; ) {
            var v = n[(f = c[d])],
              y = r[f];
            if (a) var b = l ? a(y, v, f, r, n, s) : a(v, y, f, n, r, s);
            if (!(void 0 === b ? v === y || i(v, y, o, a, s) : b)) {
              m = false;
              break;
            }
            g || (g = "constructor" == f);
          }
          if (m && !g) {
            var w = n.constructor,
              x = r.constructor;
            w == x ||
              !("constructor" in n) ||
              !("constructor" in r) ||
              ("function" == typeof w &&
                w instanceof w &&
                "function" == typeof x &&
                x instanceof x) ||
              (m = false);
          }
          return s.delete(n), s.delete(r), m;
        }),
        Cv
      );
    })(),
    o = Vy(),
    a = Zp(),
    i = rv(),
    s = Ly(),
    l = "[object Arguments]",
    c = "[object Array]",
    u = "[object Object]",
    d = Object.prototype.hasOwnProperty;
  return (jv = function (f, p, h, m, g, v) {
    var y = a(f),
      b = a(p),
      w = y ? c : o(f),
      x = b ? c : o(p),
      S = (w = w == l ? u : w) == u,
      E = (x = x == l ? u : x) == u,
      _ = w == x;
    if (_ && i(f)) {
      if (!i(p)) return false;
      (y = true), (S = false);
    }
    if (_ && !S)
      return v || (v = new e()), y || s(f) ? t(f, p, h, m, g, v) : n(f, p, w, h, m, g, v);
    if (!(1 & h)) {
      var R = S && d.call(f, "__wrapped__"),
        C = E && d.call(p, "__wrapped__");
      if (R || C) {
        var N = R ? f.value() : f,
          A = C ? p.value() : p;
        return v || (v = new e()), g(N, A, h, m, v);
      }
    }
    return !!_ && (v || (v = new e()), r(f, p, h, m, g, v));
  });
}
function Ky() {
  if (qv) return Bv;
  qv = 1;
  var e = Hy(),
    t = oh();
  return (
    (Bv = function n(r, o, a, i, s) {
      return (
        r === o ||
        (null == r || null == o || (!t(r) && !t(o)) ? r != r && o != o : e(r, o, a, i, n, s))
      );
    }),
    Bv
  );
}
function Gy() {
  if (Vv) return Wv;
  Vv = 1;
  var e = sh();
  return (Wv = function (t) {
    return t == t && !e(t);
  });
}
function Yy() {
  if (Yv) return Gv;
  return (
    (Yv = 1),
    (Gv = function (e, t) {
      return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
      };
    })
  );
}
function Qy() {
  if (Xv) return Qv;
  Xv = 1;
  var e = (function () {
      if ($v) return Uv;
      $v = 1;
      var e = zg(),
        t = Ky();
      return (
        (Uv = function (n, r, o, a) {
          var i = o.length,
            s = i,
            l = !a;
          if (null == n) return !s;
          for (n = Object(n); i--; ) {
            var c = o[i];
            if (l && c[2] ? c[1] !== n[c[0]] : !(c[0] in n)) return false;
          }
          for (; ++i < s; ) {
            var u = (c = o[i])[0],
              d = n[u],
              f = c[1];
            if (l && c[2]) {
              if (void 0 === d && !(u in n)) return false;
            } else {
              var p = new e();
              if (a) var h = a(d, f, u, n, r, p);
              if (!(void 0 === h ? t(f, d, 3, a, p) : h)) return false;
            }
          }
          return true;
        }),
        Uv
      );
    })(),
    t = (function () {
      if (Kv) return Hv;
      Kv = 1;
      var e = Gy(),
        t = Uy();
      return (Hv = function (n) {
        for (var r = t(n), o = r.length; o--; ) {
          var a = r[o],
            i = n[a];
          r[o] = [a, i, e(i)];
        }
        return r;
      });
    })(),
    n = Yy();
  return (Qv = function (r) {
    var o = t(r);
    return 1 == o.length && o[0][2]
      ? n(o[0][0], o[0][1])
      : function (t) {
          return t === r || e(t, r, o);
        };
  });
}
function Xy() {
  if (ry) return ny;
  ry = 1;
  var e = Zv
      ? Jv
      : ((Zv = 1),
        (Jv = function (e, t) {
          return null != e && t in Object(e);
        })),
    t = (function () {
      if (ty) return ey;
      ty = 1;
      var e = _h(),
        t = Wg(),
        n = Zp(),
        r = ov(),
        o = av(),
        a = Rh();
      return (
        (ey = function (i, s, l) {
          for (var c = -1, u = (s = e(s, i)).length, d = false; ++c < u; ) {
            var f = a(s[c]);
            if (!(d = null != i && l(i, f))) break;
            i = i[f];
          }
          return d || ++c != u
            ? d
            : !!(u = null == i ? 0 : i.length) && o(u) && r(f, u) && (n(i) || t(i));
        }),
        ey
      );
    })();
  return (ny = function (n, r) {
    return null != n && t(n, r, e);
  });
}
function Jy() {
  if (sy) return iy;
  return (
    (sy = 1),
    (iy = function (e) {
      return e;
    })
  );
}
function Zy() {
  if (py) return fy;
  py = 1;
  var e = cy
      ? ly
      : ((cy = 1),
        (ly = function (e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        })),
    t = (function () {
      if (dy) return uy;
      dy = 1;
      var e = Ch();
      return (uy = function (t) {
        return function (n) {
          return e(n, t);
        };
      });
    })(),
    n = ih(),
    r = Rh();
  return (fy = function (o) {
    return n(o) ? e(r(o)) : t(o);
  });
}
function eb() {
  if (my) return hy;
  my = 1;
  var e = Qy(),
    t = (function () {
      if (ay) return oy;
      ay = 1;
      var e = Ky(),
        t = Nh(),
        n = Xy(),
        r = ih(),
        o = Gy(),
        a = Yy(),
        i = Rh();
      return (oy = function (s, l) {
        return r(s) && o(l)
          ? a(i(s), l)
          : function (r) {
              var o = t(r, s);
              return void 0 === o && o === l ? n(r, s) : e(l, o, 3);
            };
      });
    })(),
    n = Jy(),
    r = Zp(),
    o = Zy();
  return (hy = function (a) {
    return "function" == typeof a
      ? a
      : null == a
        ? n
        : "object" == typeof a
          ? r(a)
            ? t(a[0], a[1])
            : e(a)
          : o(a);
  });
}
function tb() {
  if (vy) return gy;
  return (
    (vy = 1),
    (gy = function (e, t, n, r) {
      for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; ) if (t(e[a], a, e)) return a;
      return -1;
    }),
    gy
  );
}
function nb() {
  if (Ey) return Sy;
  Ey = 1;
  var e = tb(),
    t = by
      ? yy
      : ((by = 1),
        (yy = function (e) {
          return e != e;
        })),
    n =
      (xy ||
        ((xy = 1),
        (wy = function (e, t, n) {
          for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
          return -1;
        })),
      wy);
  return (Sy = function (r, o, a) {
    return o == o ? n(r, o, a) : e(r, t, a);
  });
}
function rb() {
  if (Ty) return ky;
  Ty = 1;
  var e = Wy(),
    t = Py ? Ay : ((Py = 1), (Ay = function () {})),
    n = Bg(),
    r =
      e && 1 / n(new e([, -0]))[1] == 1 / 0
        ? function (t) {
            return new e(t);
          }
        : t;
  return (ky = r);
}
function ob() {
  if (Oy) return Iy;
  Oy = 1;
  var e = Mg(),
    t = (function () {
      if (Ry) return _y;
      Ry = 1;
      var e = nb();
      return (_y = function (t, n) {
        return !(null == t || !t.length) && e(t, n, 0) > -1;
      });
    })(),
    n =
      (Ny ||
        ((Ny = 1),
        (Cy = function (e, t, n) {
          for (var r = -1, o = null == e ? 0 : e.length; ++r < o; ) if (n(t, e[r])) return true;
          return false;
        })),
      Cy),
    r = jg(),
    o = rb(),
    a = Bg();
  return (
    (Iy = function (i, s, l) {
      var c = -1,
        u = t,
        d = i.length,
        f = true,
        p = [],
        h = p;
      if (l) (f = false), (u = n);
      else if (d >= 200) {
        var m = s ? null : o(i);
        if (m) return a(m);
        (f = false), (u = r), (h = new e());
      } else h = s ? [] : p;
      e: for (; ++c < d; ) {
        var g = i[c],
          v = s ? s(g) : g;
        if (((g = l || 0 !== g ? g : 0), f && v == v)) {
          for (var y = h.length; y--; ) if (h[y] === v) continue e;
          s && h.push(v), p.push(g);
        } else u(h, v, l) || (h !== p && h.push(v), p.push(g));
      }
      return p;
    }),
    Iy
  );
}
const ab = Td(
  (function () {
    if (zy) return Dy;
    zy = 1;
    var e = eb(),
      t = ob();
    return (Dy = function (n, r) {
      return n && n.length ? t(n, e(r, 2)) : [];
    });
  })(),
);
function ib(e, t, n) {
  return true === t ? ab(e, n) : zh(t) ? ab(e, t) : e;
}
var sb,
  lb,
  cb,
  ub,
  db,
  fb,
  pb,
  hb,
  mb,
  gb,
  vb,
  yb,
  bb,
  wb,
  xb,
  Sb,
  Eb,
  _b,
  Rb,
  Cb,
  Nb,
  Ab,
  Pb,
  kb,
  Tb,
  Ib,
  Ob,
  Db,
  zb,
  Mb,
  Lb,
  jb,
  Fb,
  Bb,
  qb,
  Ub,
  $b,
  Wb,
  Vb,
  Hb,
  Kb,
  Gb,
  Yb,
  Qb;
function Xb() {
  if (ub) return cb;
  ub = 1;
  var e = Ug(),
    t = (function () {
      if (lb) return sb;
      lb = 1;
      var e = nh(),
        t = Wg(),
        n = Zp(),
        r = e ? e.isConcatSpreadable : void 0;
      return (sb = function (e) {
        return n(e) || t(e) || !!(r && e && e[r]);
      });
    })();
  return (
    (cb = function n(r, o, a, i, s) {
      var l = -1,
        c = r.length;
      for (a || (a = t), s || (s = []); ++l < c; ) {
        var u = r[l];
        o > 0 && a(u) ? (o > 1 ? n(u, o - 1, a, i, s) : e(s, u)) : i || (s[s.length] = u);
      }
      return s;
    }),
    cb
  );
}
function Jb() {
  if (hb) return pb;
  hb = 1;
  var e =
      (fb ||
        ((fb = 1),
        (db = function (e) {
          return function (t, n, r) {
            for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
              var l = i[e ? s : ++o];
              if (false === n(a[l], l, a)) break;
            }
            return t;
          };
        })),
      db),
    t = e();
  return (pb = t);
}
function Zb() {
  if (gb) return mb;
  gb = 1;
  var e = Jb(),
    t = Uy();
  return (mb = function (n, r) {
    return n && e(n, r, t);
  });
}
function ew() {
  if (wb) return bb;
  wb = 1;
  var e = Zb(),
    t = (function () {
      if (yb) return vb;
      yb = 1;
      var e = qy();
      return (
        (vb = function (t, n) {
          return function (r, o) {
            if (null == r) return r;
            if (!e(r)) return t(r, o);
            for (
              var a = r.length, i = n ? a : -1, s = Object(r);
              (n ? i-- : ++i < a) && false !== o(s[i], i, s);

            );
            return r;
          };
        }),
        vb
      );
    })(),
    n = t(e);
  return (bb = n);
}
function tw() {
  if (Sb) return xb;
  Sb = 1;
  var e = ew(),
    t = qy();
  return (
    (xb = function (n, r) {
      var o = -1,
        a = t(n) ? Array(n.length) : [];
      return (
        e(n, function (e, t, n) {
          a[++o] = r(e, t, n);
        }),
        a
      );
    }),
    xb
  );
}
function nw() {
  if (Ab) return Nb;
  Ab = 1;
  var e = (function () {
    if (Cb) return Rb;
    Cb = 1;
    var e = ah();
    return (Rb = function (t, n) {
      if (t !== n) {
        var r = void 0 !== t,
          o = null === t,
          a = t == t,
          i = e(t),
          s = void 0 !== n,
          l = null === n,
          c = n == n,
          u = e(n);
        if (
          (!l && !u && !i && t > n) ||
          (i && s && c && !l && !u) ||
          (o && s && c) ||
          (!r && c) ||
          !a
        )
          return 1;
        if (
          (!o && !i && !u && t < n) ||
          (u && r && a && !o && !i) ||
          (l && r && a) ||
          (!s && a) ||
          !c
        )
          return -1;
      }
      return 0;
    });
  })();
  return (
    (Nb = function (t, n, r) {
      for (var o = -1, a = t.criteria, i = n.criteria, s = a.length, l = r.length; ++o < s; ) {
        var c = e(a[o], i[o]);
        if (c) return o >= l ? c : c * ("desc" == r[o] ? -1 : 1);
      }
      return t.index - n.index;
    }),
    Nb
  );
}
function rw() {
  if (kb) return Pb;
  kb = 1;
  var e = Sh(),
    t = Ch(),
    n = eb(),
    r = tw(),
    o = _b
      ? Eb
      : ((_b = 1),
        (Eb = function (e, t) {
          var n = e.length;
          for (e.sort(t); n--; ) e[n] = e[n].value;
          return e;
        })),
    a = iv(),
    i = nw(),
    s = Jy(),
    l = Zp();
  return (
    (Pb = function (c, u, d) {
      u = u.length
        ? e(u, function (e) {
            return l(e)
              ? function (n) {
                  return t(n, 1 === e.length ? e[0] : e);
                }
              : e;
          })
        : [s];
      var f = -1;
      u = e(u, a(n));
      var p = r(c, function (t, n, r) {
        return {
          criteria: e(u, function (e) {
            return e(t);
          }),
          index: ++f,
          value: t,
        };
      });
      return o(p, function (e, t) {
        return i(e, t, d);
      });
    }),
    Pb
  );
}
function ow() {
  if (Db) return Ob;
  Db = 1;
  var e = Ib
      ? Tb
      : ((Ib = 1),
        (Tb = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        })),
    t = Math.max;
  return (
    (Ob = function (n, r, o) {
      return (
        (r = t(void 0 === r ? n.length - 1 : r, 0)),
        function () {
          for (var a = arguments, i = -1, s = t(a.length - r, 0), l = Array(s); ++i < s; )
            l[i] = a[r + i];
          i = -1;
          for (var c = Array(r + 1); ++i < r; ) c[i] = a[i];
          return (c[r] = o(l)), e(n, this, c);
        }
      );
    }),
    Ob
  );
}
function aw() {
  if (jb) return Lb;
  jb = 1;
  var e = dh(),
    t = (function () {
      try {
        var t = e(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (n) {}
    })();
  return (Lb = t);
}
function iw() {
  if (Bb) return Fb;
  Bb = 1;
  var e = Mb
      ? zb
      : ((Mb = 1),
        (zb = function (e) {
          return function () {
            return e;
          };
        })),
    t = aw(),
    n = Jy();
  return (Fb = t
    ? function (n, r) {
        return t(n, "toString", {
          configurable: true,
          enumerable: false,
          value: e(r),
          writable: true,
        });
      }
    : n);
}
function sw() {
  if (Wb) return $b;
  Wb = 1;
  var e = iw(),
    t = (function () {
      if (Ub) return qb;
      Ub = 1;
      var e = Date.now;
      return (
        (qb = function (t) {
          var n = 0,
            r = 0;
          return function () {
            var o = e(),
              a = 16 - (o - r);
            if (((r = o), a > 0)) {
              if (++n >= 800) return arguments[0];
            } else n = 0;
            return t.apply(void 0, arguments);
          };
        }),
        qb
      );
    })(),
    n = t(e);
  return ($b = n);
}
function lw() {
  if (Gb) return Kb;
  Gb = 1;
  var e = hh(),
    t = qy(),
    n = ov(),
    r = sh();
  return (
    (Kb = function (o, a, i) {
      if (!r(i)) return false;
      var s = typeof a;
      return !!("number" == s ? t(i) && n(a, i.length) : "string" == s && a in i) && e(i[a], o);
    }),
    Kb
  );
}
var cw = (function () {
  if (Qb) return Yb;
  Qb = 1;
  var e = Xb(),
    t = rw(),
    n = (function () {
      if (Hb) return Vb;
      Hb = 1;
      var e = Jy(),
        t = ow(),
        n = sw();
      return (Vb = function (r, o) {
        return n(t(r, o, e), r + "");
      });
    })(),
    r = lw(),
    o = n(function (n, o) {
      if (null == n) return [];
      var a = o.length;
      return (
        a > 1 && r(n, o[0], o[1]) ? (o = []) : a > 2 && r(o[0], o[1], o[2]) && (o = [o[0]]),
        t(n, e(o, 1), [])
      );
    });
  return (Yb = o);
})();
const uw = Td(cw);
function dw(e) {
  return (
    (dw =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    dw(e)
  );
}
function fw() {
  return (
    (fw = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fw.apply(this, arguments)
  );
}
function pw(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null != n) {
        var r,
          o,
          a,
          i,
          s = [],
          l = true,
          c = false;
        try {
          if (((a = (n = n.call(e)).next), 0 === t));
          else for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
        } catch (e) {
          (c = true), (o = e);
        } finally {
          try {
            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
          } finally {
            if (c) throw o;
          }
        }
        return s;
      }
    })(e, t) ||
    (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return hw(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hw(e, t);
    })(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function hw(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function mw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? mw(Object(n), true).forEach(function (t) {
          vw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vw(e, t, n) {
  var r;
  return (
    (r = (function (e, t) {
      if ("object" != dw(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t);
        if ("object" != dw(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(t, "string")),
    (t = "symbol" == dw(r) ? r : r + "") in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e[t] = n),
    e
  );
}
function yw(e) {
  return Array.isArray(e) && nm(e[0]) && nm(e[1]) ? e.join(" ~ ") : e;
}
var bw = function (e) {
  var t = e.separator,
    n = void 0 === t ? " : " : t,
    r = e.contentStyle,
    o = void 0 === r ? {} : r,
    a = e.itemStyle,
    i = void 0 === a ? {} : a,
    s = e.labelStyle,
    l = void 0 === s ? {} : s,
    c = e.payload,
    u = e.formatter,
    d = e.itemSorter,
    f = e.wrapperClassName,
    p = e.labelClassName,
    h = e.label,
    m = e.labelFormatter,
    g = e.accessibilityLayer,
    y = void 0 !== g && g,
    b = gw(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      o,
    ),
    w = gw({ margin: 0 }, l),
    x = !Th(h),
    S = x ? h : "",
    E = Nt$1("recharts-default-tooltip", f),
    _ = Nt$1("recharts-tooltip-label", p);
  x && m && null != c && (S = m(h, c));
  var R = y ? { role: "status", "aria-live": "assertive" } : {};
  return g__default.createElement(
    "div",
    fw({ className: E, style: b }, R),
    g__default.createElement(
      "p",
      { className: _, style: w },
      g__default.isValidElement(S) ? S : "".concat(S),
    ),
    (function () {
      if (c && c.length) {
        var e = (d ? uw(c, d) : c).map(function (e, t) {
          if ("none" === e.type) return null;
          var r = gw(
              { display: "block", paddingTop: 4, paddingBottom: 4, color: e.color || "#000" },
              i,
            ),
            o = e.formatter || u || yw,
            a = e.value,
            s = e.name,
            l = a,
            d = s;
          if (o && null != l && null != d) {
            var f = o(a, s, e, t, c);
            if (Array.isArray(f)) {
              var p = pw(f, 2);
              (l = p[0]), (d = p[1]);
            } else l = f;
          }
          return g__default.createElement(
            "li",
            { className: "recharts-tooltip-item", key: "tooltip-item-".concat(t), style: r },
            nm(d)
              ? g__default.createElement("span", { className: "recharts-tooltip-item-name" }, d)
              : null,
            nm(d)
              ? g__default.createElement(
                  "span",
                  { className: "recharts-tooltip-item-separator" },
                  n,
                )
              : null,
            g__default.createElement("span", { className: "recharts-tooltip-item-value" }, l),
            g__default.createElement(
              "span",
              { className: "recharts-tooltip-item-unit" },
              e.unit || "",
            ),
          );
        });
        return g__default.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: { padding: 0, margin: 0 } },
          e,
        );
      }
      return null;
    })(),
  );
};
function ww(e) {
  return (
    (ww =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    ww(e)
  );
}
function xw(e, t, n) {
  var r;
  return (
    (r = (function (e, t) {
      if ("object" != ww(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t);
        if ("object" != ww(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(t, "string")),
    (t = "symbol" == ww(r) ? r : r + "") in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e[t] = n),
    e
  );
}
var Sw = "recharts-tooltip-wrapper",
  Ew = { visibility: "hidden" };
function _w(e) {
  var t = e.coordinate,
    n = e.translateX,
    r = e.translateY;
  return Nt$1(
    Sw,
    xw(
      xw(
        xw(
          xw({}, "".concat(Sw, "-right"), em(n) && t && em(t.x) && n >= t.x),
          "".concat(Sw, "-left"),
          em(n) && t && em(t.x) && n < t.x,
        ),
        "".concat(Sw, "-bottom"),
        em(r) && t && em(t.y) && r >= t.y,
      ),
      "".concat(Sw, "-top"),
      em(r) && t && em(t.y) && r < t.y,
    ),
  );
}
function Rw(e) {
  var t = e.allowEscapeViewBox,
    n = e.coordinate,
    r = e.key,
    o = e.offsetTopLeft,
    a = e.position,
    i = e.reverseDirection,
    s = e.tooltipDimension,
    l = e.viewBox,
    c = e.viewBoxDimension;
  if (a && em(a[r])) return a[r];
  var u = n[r] - s - o,
    d = n[r] + o;
  return t[r]
    ? i[r]
      ? u
      : d
    : i[r]
      ? u < l[r]
        ? Math.max(d, l[r])
        : Math.max(u, l[r])
      : d + s > l[r] + c
        ? Math.max(u, l[r])
        : Math.max(d, l[r]);
}
function Cw(e) {
  return (
    (Cw =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Cw(e)
  );
}
function Nw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Aw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Nw(Object(n), true).forEach(function (t) {
          Dw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pw(e, t, n) {
  return (
    t &&
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || false),
            (r.configurable = true),
            "value" in r && (r.writable = true),
            Object.defineProperty(e, zw(r.key), r);
        }
      })(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: false }),
    e
  );
}
function kw(e, t, n) {
  return (
    (t = Iw(t)),
    (function (e, t) {
      if (t && ("object" === Cw(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      })(e);
    })(e, Tw() ? Reflect.construct(t, n || [], Iw(e).constructor) : t.apply(e, n))
  );
}
function Tw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e) {}
  return (Tw = function () {
    return !!e;
  })();
}
function Iw(e) {
  return (
    (Iw = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Iw(e)
  );
}
function Ow(e, t) {
  return (
    (Ow = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    Ow(e, t)
  );
}
function Dw(e, t, n) {
  return (
    (t = zw(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e[t] = n),
    e
  );
}
function zw(e) {
  var t = (function (e, t) {
    if ("object" != Cw(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t);
      if ("object" != Cw(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  })(e, "string");
  return "symbol" == Cw(t) ? t : t + "";
}
var Mw = (function () {
    function e() {
      var t;
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e);
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      return (
        Dw((t = kw(this, e, [].concat(r))), "state", {
          dismissed: false,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Dw(t, "handleKeyDown", function (e) {
          var n, r, o, a;
          "Escape" === e.key &&
            t.setState({
              dismissed: true,
              dismissedAtCoordinate: {
                x:
                  null !== (n = null === (r = t.props.coordinate) || void 0 === r ? void 0 : r.x) &&
                  void 0 !== n
                    ? n
                    : 0,
                y:
                  null !== (o = null === (a = t.props.coordinate) || void 0 === a ? void 0 : a.y) &&
                  void 0 !== o
                    ? o
                    : 0,
              },
            });
        }),
        t
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: true, configurable: true },
        })),
          Object.defineProperty(e, "prototype", { writable: false }),
          t && Ow(e, t);
      })(e, PureComponent),
      Pw(e, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var e = this.wrapperNode.getBoundingClientRect();
              (Math.abs(e.width - this.state.lastBoundingBox.width) > 1 ||
                Math.abs(e.height - this.state.lastBoundingBox.height) > 1) &&
                this.setState({ lastBoundingBox: { width: e.width, height: e.height } });
            } else
              (-1 === this.state.lastBoundingBox.width &&
                -1 === this.state.lastBoundingBox.height) ||
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var e, t;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((null === (e = this.props.coordinate) || void 0 === e ? void 0 : e.x) ===
                  this.state.dismissedAtCoordinate.x &&
                  (null === (t = this.props.coordinate) || void 0 === t ? void 0 : t.y) ===
                    this.state.dismissedAtCoordinate.y) ||
                  (this.state.dismissed = false));
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.props,
              n = t.active,
              r = t.allowEscapeViewBox,
              o = t.animationDuration,
              a = t.animationEasing,
              i = t.children,
              s = t.coordinate,
              l = t.hasPayload,
              c = t.isAnimationActive,
              u = t.offset,
              d = t.position,
              f = t.reverseDirection,
              p = t.useTranslate3d,
              h = t.viewBox,
              m = t.wrapperStyle,
              g = (function (e) {
                var t,
                  n,
                  r = e.allowEscapeViewBox,
                  o = e.coordinate,
                  a = e.offsetTopLeft,
                  i = e.position,
                  s = e.reverseDirection,
                  l = e.tooltipBox,
                  c = e.useTranslate3d,
                  u = e.viewBox;
                return {
                  cssProperties:
                    l.height > 0 && l.width > 0 && o
                      ? (function (e) {
                          var t = e.translateX,
                            n = e.translateY;
                          return {
                            transform: e.useTranslate3d
                              ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)")
                              : "translate(".concat(t, "px, ").concat(n, "px)"),
                          };
                        })({
                          translateX: (t = Rw({
                            allowEscapeViewBox: r,
                            coordinate: o,
                            key: "x",
                            offsetTopLeft: a,
                            position: i,
                            reverseDirection: s,
                            tooltipDimension: l.width,
                            viewBox: u,
                            viewBoxDimension: u.width,
                          })),
                          translateY: (n = Rw({
                            allowEscapeViewBox: r,
                            coordinate: o,
                            key: "y",
                            offsetTopLeft: a,
                            position: i,
                            reverseDirection: s,
                            tooltipDimension: l.height,
                            viewBox: u,
                            viewBoxDimension: u.height,
                          })),
                          useTranslate3d: c,
                        })
                      : Ew,
                  cssClasses: _w({ translateX: t, translateY: n, coordinate: o }),
                };
              })({
                allowEscapeViewBox: r,
                coordinate: s,
                offsetTopLeft: u,
                position: d,
                reverseDirection: f,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: p,
                viewBox: h,
              }),
              y = g.cssClasses,
              b = g.cssProperties,
              w = Aw(
                Aw({ transition: c && n ? "transform ".concat(o, "ms ").concat(a) : void 0 }, b),
                {},
                {
                  pointerEvents: "none",
                  visibility: !this.state.dismissed && n && l ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                m,
              );
            return g__default.createElement(
              "div",
              {
                tabIndex: -1,
                className: y,
                style: w,
                ref: function (t) {
                  e.wrapperNode = t;
                },
              },
              i,
            );
          },
        },
      ])
    );
  })(),
  Lw = { isSsr: true };
function jw(e) {
  return (
    (jw =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    jw(e)
  );
}
function Fw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Fw(Object(n), true).forEach(function (t) {
          Hw(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fw(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qw(e, t, n) {
  return (
    t &&
      (function (e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || false),
            (r.configurable = true),
            "value" in r && (r.writable = true),
            Object.defineProperty(e, Kw(r.key), r);
        }
      })(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: false }),
    e
  );
}
function Uw(e, t, n) {
  return (
    (t = Ww(t)),
    (function (e, t) {
      if (t && ("object" === jw(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      })(e);
    })(e, $w() ? Reflect.construct(t, n || [], Ww(e).constructor) : t.apply(e, n))
  );
}
function $w() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e) {}
  return ($w = function () {
    return !!e;
  })();
}
function Ww(e) {
  return (
    (Ww = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Ww(e)
  );
}
function Vw(e, t) {
  return (
    (Vw = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    Vw(e, t)
  );
}
function Hw(e, t, n) {
  return (
    (t = Kw(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e[t] = n),
    e
  );
}
function Kw(e) {
  var t = (function (e, t) {
    if ("object" != jw(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t);
      if ("object" != jw(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  })(e, "string");
  return "symbol" == jw(t) ? t : t + "";
}
function Gw(e) {
  return e.dataKey;
}
var Yw,
  Qw,
  Xw,
  Jw,
  Zw,
  ex,
  tx,
  nx,
  rx,
  ox,
  ax,
  ix,
  sx = (function () {
    function e() {
      return (
        (function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e),
        Uw(this, e, arguments)
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: true, configurable: true },
        })),
          Object.defineProperty(e, "prototype", { writable: false }),
          t && Vw(e, t);
      })(e, PureComponent),
      qw(e, [
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.props,
              n = t.active,
              r = t.allowEscapeViewBox,
              o = t.animationDuration,
              a = t.animationEasing,
              i = t.content,
              s = t.coordinate,
              l = t.filterNull,
              c = t.isAnimationActive,
              u = t.offset,
              d = t.payload,
              f = t.payloadUniqBy,
              p = t.position,
              h = t.reverseDirection,
              m = t.useTranslate3d,
              g = t.viewBox,
              y = t.wrapperStyle,
              b = null != d ? d : [];
            l &&
              b.length &&
              (b = ib(
                d.filter(function (t) {
                  return null != t.value && (true !== t.hide || e.props.includeHidden);
                }),
                f,
                Gw,
              ));
            var w = b.length > 0;
            return g__default.createElement(
              Mw,
              {
                allowEscapeViewBox: r,
                animationDuration: o,
                animationEasing: a,
                isAnimationActive: c,
                active: n,
                coordinate: s,
                hasPayload: w,
                offset: u,
                position: p,
                reverseDirection: h,
                useTranslate3d: m,
                viewBox: g,
                wrapperStyle: y,
              },
              (function (e, t) {
                return g__default.isValidElement(e)
                  ? g__default.cloneElement(e, t)
                  : "function" == typeof e
                    ? g__default.createElement(e, t)
                    : g__default.createElement(bw, t);
              })(i, Bw(Bw({}, this.props), {}, { payload: b })),
            );
          },
        },
      ])
    );
  })();
function lx() {
  if (ex) return Zw;
  ex = 1;
  var e = (function () {
      if (Jw) return Xw;
      Jw = 1;
      var e = /\s/;
      return (
        (Xw = function (t) {
          for (var n = t.length; n-- && e.test(t.charAt(n)); );
          return n;
        }),
        Xw
      );
    })(),
    t = /^\s+/;
  return (Zw = function (n) {
    return n ? n.slice(0, e(n) + 1).replace(t, "") : n;
  });
}
function cx() {
  if (nx) return tx;
  nx = 1;
  var e = lx(),
    t = sh(),
    n = ah(),
    r = /^[-+]0x[0-9a-f]+$/i,
    o = /^0b[01]+$/i,
    a = /^0o[0-7]+$/i,
    i = parseInt;
  return (tx = function (s) {
    if ("number" == typeof s) return s;
    if (n(s)) return NaN;
    if (t(s)) {
      var l = "function" == typeof s.valueOf ? s.valueOf() : s;
      s = t(l) ? l + "" : l;
    }
    if ("string" != typeof s) return 0 === s ? s : +s;
    s = e(s);
    var c = o.test(s);
    return c || a.test(s) ? i(s.slice(2), c ? 2 : 8) : r.test(s) ? NaN : +s;
  });
}
function ux() {
  if (ox) return rx;
  ox = 1;
  var e = sh(),
    t = (function () {
      if (Qw) return Yw;
      Qw = 1;
      var e = th();
      return (Yw = function () {
        return e.Date.now();
      });
    })(),
    n = cx(),
    r = Math.max,
    o = Math.min;
  return (
    (rx = function (a, i, s) {
      var l,
        c,
        u,
        d,
        f,
        p,
        h = 0,
        m = false,
        g = false,
        v = true;
      if ("function" != typeof a) throw new TypeError("Expected a function");
      function y(e) {
        var t = l,
          n = c;
        return (l = c = void 0), (h = e), (d = a.apply(n, t));
      }
      function b(e) {
        var t = e - p;
        return void 0 === p || t >= i || t < 0 || (g && e - h >= u);
      }
      function w() {
        var e = t();
        if (b(e)) return x(e);
        f = setTimeout(
          w,
          (function (e) {
            var t = i - (e - p);
            return g ? o(t, u - (e - h)) : t;
          })(e),
        );
      }
      function x(e) {
        return (f = void 0), v && l ? y(e) : ((l = c = void 0), d);
      }
      function S() {
        var e = t(),
          n = b(e);
        if (((l = arguments), (c = this), (p = e), n)) {
          if (void 0 === f)
            return (function (e) {
              return (h = e), (f = setTimeout(w, i)), m ? y(e) : d;
            })(p);
          if (g) return clearTimeout(f), (f = setTimeout(w, i)), y(p);
        }
        return void 0 === f && (f = setTimeout(w, i)), d;
      }
      return (
        (i = n(i) || 0),
        e(s) &&
          ((m = !!s.leading),
          (u = (g = "maxWait" in s) ? r(n(s.maxWait) || 0, i) : u),
          (v = "trailing" in s ? !!s.trailing : v)),
        (S.cancel = function () {
          void 0 !== f && clearTimeout(f), (h = 0), (l = p = c = f = void 0);
        }),
        (S.flush = function () {
          return void 0 === f ? d : x(t());
        }),
        S
      );
    }),
    rx
  );
}
Hw(sx, "displayName", "Tooltip"),
  Hw(sx, "defaultProps", {
    accessibilityLayer: false,
    allowEscapeViewBox: { x: false, y: false },
    animationDuration: 400,
    animationEasing: "ease",
    contentStyle: {},
    coordinate: { x: 0, y: 0 },
    cursor: true,
    cursorStyle: {},
    filterNull: true,
    isAnimationActive: !Lw.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: false, y: false },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: false,
    viewBox: { x: 0, y: 0, height: 0, width: 0 },
    wrapperStyle: {},
  });
var dx = (function () {
  if (ix) return ax;
  ix = 1;
  var e = ux(),
    t = sh();
  return (
    (ax = function (n, r, o) {
      var a = true,
        i = true;
      if ("function" != typeof n) throw new TypeError("Expected a function");
      return (
        t(o) && ((a = "leading" in o ? !!o.leading : a), (i = "trailing" in o ? !!o.trailing : i)),
        e(n, r, { leading: a, maxWait: r, trailing: i })
      );
    }),
    ax
  );
})();
const fx = Td(dx);
function px(e) {
  return (
    (px =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    px(e)
  );
}
function hx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function mx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? hx(Object(n), true).forEach(function (t) {
          gx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function gx(e, t, n) {
  var r;
  return (
    (r = (function (e, t) {
      if ("object" != px(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t);
        if ("object" != px(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(t, "string")),
    (t = "symbol" == px(r) ? r : r + "") in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e[t] = n),
    e
  );
}
function vx(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null != n) {
        var r,
          o,
          a,
          i,
          s = [],
          l = true,
          c = false;
        try {
          if (((a = (n = n.call(e)).next), 0 === t));
          else for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
        } catch (e) {
          (c = true), (o = e);
        } finally {
          try {
            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
          } finally {
            if (c) throw o;
          }
        }
        return s;
      }
    })(e, t) ||
    (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return yx(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yx(e, t);
    })(e, t) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function yx(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var bx = forwardRef(function (e, t) {
  var n = e.aspect,
    r = e.initialDimension,
    o = void 0 === r ? { width: -1, height: -1 } : r,
    a = e.width,
    i = void 0 === a ? "100%" : a,
    s = e.height,
    l = void 0 === s ? "100%" : s,
    c = e.minWidth,
    u = void 0 === c ? 0 : c,
    d = e.minHeight,
    f = e.maxHeight,
    p = e.children,
    h = e.debounce,
    m = void 0 === h ? 0 : h,
    g = e.id,
    x = e.className,
    S = e.onResize,
    E = e.style,
    _ = void 0 === E ? {} : E,
    N = useRef(null),
    A = useRef();
  (A.current = S),
    useImperativeHandle(t, function () {
      return Object.defineProperty(N.current, "current", {
        get: function () {
          return (
            console.warn(
              "The usage of ref.current.current is deprecated and will no longer be supported.",
            ),
            N.current
          );
        },
        configurable: true,
      });
    });
  var P = vx(useState({ containerWidth: o.width, containerHeight: o.height }), 2),
    k = P[0],
    T = P[1],
    D = useCallback(function (e, t) {
      T(function (n) {
        var r = Math.round(e),
          o = Math.round(t);
        return n.containerWidth === r && n.containerHeight === o
          ? n
          : { containerWidth: r, containerHeight: o };
      });
    }, []);
  useEffect(
    function () {
      var e = function (e) {
        var t,
          n = e[0].contentRect,
          r = n.width,
          o = n.height;
        D(r, o), null === (t = A.current) || void 0 === t || t.call(A, r, o);
      };
      m > 0 && (e = fx(e, m, { trailing: true, leading: false }));
      var t = new ResizeObserver(e),
        n = N.current.getBoundingClientRect(),
        r = n.width,
        o = n.height;
      return (
        D(r, o),
        t.observe(N.current),
        function () {
          t.disconnect();
        }
      );
    },
    [D, m],
  );
  var z = useMemo(
    function () {
      var e = k.containerWidth,
        t = k.containerHeight;
      if (e < 0 || t < 0) return null;
      Dg(
        Zh(i) || Zh(l),
        "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
        i,
        l,
      ),
        Dg(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
      var r = Zh(i) ? e : i,
        o = Zh(l) ? t : l;
      n && n > 0 && (r ? (o = r / n) : o && (r = o * n), f && o > f && (o = f)),
        Dg(
          r > 0 || o > 0,
          "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
          r,
          o,
          i,
          l,
          u,
          d,
          n,
        );
      var a = !Array.isArray(p) && _m(p.type).endsWith("Chart");
      return g__default.Children.map(p, function (e) {
        return g__default.isValidElement(e)
          ? cloneElement(
              e,
              mx(
                { width: r, height: o },
                a
                  ? {
                      style: mx(
                        { height: "100%", width: "100%", maxHeight: o, maxWidth: r },
                        e.props.style,
                      ),
                    }
                  : {},
              ),
            )
          : e;
      });
    },
    [n, p, l, f, d, u, k, i],
  );
  return g__default.createElement(
    "div",
    {
      id: g ? "".concat(g) : void 0,
      className: Nt$1("recharts-responsive-container", x),
      style: mx(mx({}, _), {}, { width: i, height: l, minWidth: u, minHeight: d, maxHeight: f }),
      ref: N,
    },
    z,
  );
});
const wx = { light: "", dark: ".dark" },
  xx = g.createContext(null);
function Sx({ children: e, className: t, config: n, id: r, ...o }) {
  const a = g.useId(),
    i = `chart-${r || a.replace(/:/g, "")}`;
  return jsx(xx.Provider, {
    value: { config: n },
    children: jsxs("div", {
      "data-slot": "chart",
      "data-chart": i,
      className: Ka(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t,
      ),
      ...o,
      children: [jsx(Ex, { id: i, config: n }), jsx(bx, { children: e })],
    }),
  });
}
const Ex = ({ id: e, config: t }) => {
    const n = Object.entries(t).filter(([, e]) => e.theme || e.color);
    return n.length
      ? jsx("style", {
          dangerouslySetInnerHTML: {
            __html: Object.entries(wx)
              .map(
                ([t, r]) =>
                  `\n${r} [data-chart=${e}] {\n${n
                    .map(([e, n]) => {
                      const r = n.theme?.[t] || n.color;
                      return r ? `  --color-${e}: ${r};` : null;
                    })
                    .join("\n")}\n}\n`,
              )
              .join("\n"),
          },
        })
      : null;
  },
  _x = sx;
function Rx({
  active: e,
  payload: t,
  className: n,
  indicator: r = "dot",
  hideLabel: o = false,
  hideIndicator: a = false,
  label: i,
  labelFormatter: s,
  labelClassName: l,
  formatter: c,
  color: u,
  nameKey: h,
  labelKey: m,
}) {
  const { config: v } = (function () {
      const e = g.useContext(xx);
      if (!e) throw new Error("useChart must be used within a <ChartContainer />");
      return e;
    })(),
    y = g.useMemo(() => {
      if (o || !t?.length) return null;
      const [e] = t,
        n = Cx(v, e, `${m || e?.dataKey || e?.name || "value"}`),
        r = m || "string" != typeof i ? n?.label : v[i]?.label || i;
      return s
        ? jsx("div", { className: Ka("font-medium", l), children: s(r, t) })
        : r
          ? jsx("div", { className: Ka("font-medium", l), children: r })
          : null;
    }, [i, s, t, o, l, v, m]);
  if (!e || !t?.length) return null;
  const b = 1 === t.length && "dot" !== r;
  return jsxs("div", {
    className: Ka(
      "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
      n,
    ),
    children: [
      b ? null : y,
      jsx("div", {
        className: "grid gap-1.5",
        children: t.map((e, t) => {
          const n = `${h || e.name || e.dataKey || "value"}`,
            o = Cx(v, e, n),
            i = u || e.payload.fill || e.color;
          return jsx(
            "div",
            {
              className: Ka(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                "dot" === r && "items-center",
              ),
              children:
                c && void 0 !== e?.value && e.name
                  ? c(e.value, e.name, e, t, e.payload)
                  : jsxs(Fragment, {
                      children: [
                        o?.icon
                          ? jsx(o.icon, {})
                          : !a &&
                            jsx("div", {
                              className: Ka(
                                "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                                {
                                  "h-2.5 w-2.5": "dot" === r,
                                  "w-1": "line" === r,
                                  "w-0 border-[1.5px] border-dashed bg-transparent": "dashed" === r,
                                  "my-0.5": b && "dashed" === r,
                                },
                              ),
                              style: { "--color-bg": i, "--color-border": i },
                            }),
                        jsxs("div", {
                          className: Ka(
                            "flex flex-1 justify-between leading-none",
                            b ? "items-end" : "items-center",
                          ),
                          children: [
                            jsxs("div", {
                              className: "grid gap-1.5",
                              children: [
                                b ? y : null,
                                jsx("span", {
                                  className: "text-muted-foreground",
                                  children: o?.label || e.name,
                                }),
                              ],
                            }),
                            e.value &&
                              jsx("span", {
                                className: "text-foreground font-mono font-medium tabular-nums",
                                children: e.value.toLocaleString(),
                              }),
                          ],
                        }),
                      ],
                    }),
            },
            e.dataKey,
          );
        }),
      }),
    ],
  });
}
function Cx(e, t, n) {
  if ("object" != typeof t || null === t) return;
  const r =
    "payload" in t && "object" == typeof t.payload && null !== t.payload ? t.payload : void 0;
  let o = n;
  return (
    n in t && "string" == typeof t[n]
      ? (o = t[n])
      : r && n in r && "string" == typeof r[n] && (o = r[n]),
    o in e ? e[o] : e[n]
  );
}
var Nx = (e) => {
  const { present: t, children: n } = e,
    r = (function (e) {
      const [t, n] = g.useState(),
        r = g.useRef(null),
        o = g.useRef(e),
        a = g.useRef("none"),
        i = e ? "mounted" : "unmounted",
        [s, l] = (function (e, t) {
          return g.useReducer((e, n) => t[e][n] ?? e, e);
        })(i, {
          mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
          unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
          unmounted: { MOUNT: "mounted" },
        });
      return (
        g.useEffect(() => {
          const e = Ax(r.current);
          a.current = "mounted" === s ? e : "none";
        }, [s]),
        Bi(() => {
          const t = r.current,
            n = o.current;
          if (n !== e) {
            const r = a.current,
              i = Ax(t);
            if (e) l("MOUNT");
            else if ("none" === i || "none" === t?.display) l("UNMOUNT");
            else {
              l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT");
            }
            o.current = e;
          }
        }, [e, l]),
        Bi(() => {
          if (t) {
            let e;
            const n = t.ownerDocument.defaultView ?? window,
              i = (a) => {
                const i = Ax(r.current).includes(CSS.escape(a.animationName));
                if (a.target === t && i && (l("ANIMATION_END"), !o.current)) {
                  const r = t.style.animationFillMode;
                  (t.style.animationFillMode = "forwards"),
                    (e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                    }));
                }
              },
              s = (e) => {
                e.target === t && (a.current = Ax(r.current));
              };
            return (
              t.addEventListener("animationstart", s),
              t.addEventListener("animationcancel", i),
              t.addEventListener("animationend", i),
              () => {
                n.clearTimeout(e),
                  t.removeEventListener("animationstart", s),
                  t.removeEventListener("animationcancel", i),
                  t.removeEventListener("animationend", i);
              }
            );
          }
          l("ANIMATION_END");
        }, [t, l]),
        {
          isPresent: ["mounted", "unmountSuspended"].includes(s),
          ref: g.useCallback((e) => {
            (r.current = e ? getComputedStyle(e) : null), n(e);
          }, []),
        }
      );
    })(t),
    o = "function" == typeof n ? n({ present: r.isPresent }) : g.Children.only(n),
    a = Qa(
      r.ref,
      (function (e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        if (n) return e.ref;
        if (
          ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n)
        )
          return e.props.ref;
        return e.props.ref || e.ref;
      })(o),
    );
  return "function" == typeof n || r.isPresent ? g.cloneElement(o, { ref: a }) : null;
};
function Ax(e) {
  return e?.animationName || "none";
}
Nx.displayName = "Presence";
var Px = "Checkbox",
  [kx, Tx] = di(Px),
  [Ix, Ox] = kx(Px);
function Dx(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: r,
      defaultChecked: o,
      disabled: a,
      form: i,
      name: s,
      onCheckedChange: l,
      required: c,
      value: u = "on",
      internal_do_not_use_render: f,
    } = e,
    [p, h] = ic({ prop: n, defaultProp: o ?? false, onChange: l, caller: Px }),
    [m, v] = g.useState(null),
    [y, b] = g.useState(null),
    w = g.useRef(false),
    x = !m || !!i || !!m.closest("form"),
    S = {
      checked: p,
      disabled: a,
      setChecked: h,
      control: m,
      setControl: v,
      name: s,
      form: i,
      value: u,
      hasConsumerStoppedPropagationRef: w,
      required: c,
      defaultChecked: !$x(o) && o,
      isFormControl: x,
      bubbleInput: y,
      setBubbleInput: b,
    };
  return jsx(Ix, { scope: t, ...S, children: Ux(f) ? f(S) : r });
}
var zx = "CheckboxTrigger",
  Mx = g.forwardRef(({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
        control: a,
        value: i,
        disabled: s,
        checked: l,
        required: c,
        setControl: u,
        setChecked: f,
        hasConsumerStoppedPropagationRef: p,
        isFormControl: h,
        bubbleInput: m,
      } = Ox(zx, e),
      v = Qa(o, u),
      y = g.useRef(l);
    return (
      g.useEffect(() => {
        const e = a?.form;
        if (e) {
          const t = () => f(y.current);
          return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
        }
      }, [a, f]),
      jsx(gi.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": $x(l) ? "mixed" : l,
        "aria-required": c,
        "data-state": Wx(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...r,
        ref: v,
        onKeyDown: ui(t, (e) => {
          "Enter" === e.key && e.preventDefault();
        }),
        onClick: ui(n, (e) => {
          f((e) => !!$x(e) || !e),
            m && h && ((p.current = e.isPropagationStopped()), p.current || e.stopPropagation());
        }),
      })
    );
  });
Mx.displayName = zx;
var Lx = g.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: r,
    checked: o,
    defaultChecked: a,
    required: i,
    disabled: s,
    value: l,
    onCheckedChange: c,
    form: u,
    ...h
  } = e;
  return jsx(Dx, {
    __scopeCheckbox: n,
    checked: o,
    defaultChecked: a,
    disabled: s,
    required: i,
    onCheckedChange: c,
    name: r,
    form: u,
    value: l,
    internal_do_not_use_render: ({ isFormControl: e }) =>
      jsxs(Fragment, {
        children: [
          jsx(Mx, { ...h, ref: t, __scopeCheckbox: n }),
          e && jsx(qx, { __scopeCheckbox: n }),
        ],
      }),
  });
});
Lx.displayName = Px;
var jx = "CheckboxIndicator",
  Fx = g.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e,
      a = Ox(jx, n);
    return jsx(Nx, {
      present: r || $x(a.checked) || true === a.checked,
      children: jsx(gi.span, {
        "data-state": Wx(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Fx.displayName = jx;
var Bx = "CheckboxBubbleInput",
  qx = g.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: r,
        hasConsumerStoppedPropagationRef: o,
        checked: a,
        defaultChecked: i,
        required: s,
        disabled: l,
        name: c,
        value: u,
        form: f,
        bubbleInput: p,
        setBubbleInput: h,
      } = Ox(Bx, e),
      m = Qa(n, h),
      v = sc(a),
      y = zl(r);
    g.useEffect(() => {
      const e = p;
      if (!e) return;
      const t = window.HTMLInputElement.prototype,
        n = Object.getOwnPropertyDescriptor(t, "checked").set,
        r = !o.current;
      if (v !== a && n) {
        const t = new Event("click", { bubbles: r });
        (e.indeterminate = $x(a)), n.call(e, !$x(a) && a), e.dispatchEvent(t);
      }
    }, [p, v, a, o]);
    const b = g.useRef(!$x(a) && a);
    return jsx(gi.input, {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: i ?? b.current,
      required: s,
      disabled: l,
      name: c,
      value: u,
      form: f,
      ...t,
      tabIndex: -1,
      ref: m,
      style: {
        ...t.style,
        ...y,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
function Ux(e) {
  return "function" == typeof e;
}
function $x(e) {
  return "indeterminate" === e;
}
function Wx(e) {
  return $x(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
qx.displayName = Bx;
const Vx = g.forwardRef(({ className: e, ...t }, n) =>
  jsx(Lx, {
    ref: n,
    className: Ka(
      "peer h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary shadow focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e,
    ),
    ...t,
    children: jsx(Fx, {
      className: Ka("flex items-center justify-center text-current"),
      children: jsx(CheckIcon, { className: "h-4 w-4" }),
    }),
  }),
);
Vx.displayName = Lx.displayName;
var Hx = "Collapsible",
  [Kx, Gx] = di(Hx),
  [Yx, Qx] = Kx(Hx),
  Xx = g.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: o,
        disabled: a,
        onOpenChange: i,
        ...s
      } = e,
      [l, c] = ic({ prop: r, defaultProp: o ?? false, onChange: i, caller: Hx });
    return jsx(Yx, {
      scope: n,
      disabled: a,
      contentId: $i(),
      open: l,
      onOpenToggle: g.useCallback(() => c((e) => !e), [c]),
      children: jsx(gi.div, {
        "data-state": rS(l),
        "data-disabled": a ? "" : void 0,
        ...s,
        ref: t,
      }),
    });
  });
Xx.displayName = Hx;
var Jx = "CollapsibleTrigger",
  Zx = g.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...r } = e,
      o = Qx(Jx, n);
    return jsx(gi.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || false,
      "data-state": rS(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...r,
      ref: t,
      onClick: ui(e.onClick, o.onOpenToggle),
    });
  });
Zx.displayName = Jx;
var eS = "CollapsibleContent",
  tS = g.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Qx(eS, e.__scopeCollapsible);
    return jsx(Nx, {
      present: n || o.open,
      children: ({ present: e }) => jsx(nS, { ...r, ref: t, present: e }),
    });
  });
tS.displayName = eS;
var nS = g.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e,
    i = Qx(eS, n),
    [s, l] = g.useState(r),
    c = g.useRef(null),
    u = Qa(t, c),
    f = g.useRef(0),
    p = f.current,
    h = g.useRef(0),
    m = h.current,
    v = i.open || s,
    y = g.useRef(v),
    b = g.useRef(void 0);
  return (
    g.useEffect(() => {
      const e = requestAnimationFrame(() => (y.current = false));
      return () => cancelAnimationFrame(e);
    }, []),
    Bi(() => {
      const e = c.current;
      if (e) {
        (b.current = b.current || {
          transitionDuration: e.style.transitionDuration,
          animationName: e.style.animationName,
        }),
          (e.style.transitionDuration = "0s"),
          (e.style.animationName = "none");
        const t = e.getBoundingClientRect();
        (f.current = t.height),
          (h.current = t.width),
          y.current ||
            ((e.style.transitionDuration = b.current.transitionDuration),
            (e.style.animationName = b.current.animationName)),
          l(r);
      }
    }, [i.open, r]),
    jsx(gi.div, {
      "data-state": rS(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": m ? `${m}px` : void 0,
        ...e.style,
      },
      children: v && o,
    })
  );
});
function rS(e) {
  return e ? "open" : "closed";
}
var oS = Xx;
Object.assign(({ ...e }) => jsx(oS, { "data-slot": "collapsible", ...e }), {
  Trigger: ({ ...e }) => jsx(Zx, { "data-slot": "collapsible-trigger", ...e }),
  Content: ({ className: e, ...t }) =>
    jsx(tS, {
      className: Ka(
        "overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up",
        e,
      ),
      ...t,
    }),
});
var aS = "Dialog",
  [iS, sS] = di(aS),
  [lS, cS] = iS(aS),
  uS = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        modal: i = true,
      } = e,
      s = g.useRef(null),
      l = g.useRef(null),
      [c, u] = ic({ prop: r, defaultProp: o ?? false, onChange: a, caller: aS });
    return jsx(lS, {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: $i(),
      titleId: $i(),
      descriptionId: $i(),
      open: c,
      onOpenChange: u,
      onOpenToggle: g.useCallback(() => u((e) => !e), [u]),
      modal: i,
      children: n,
    });
  };
uS.displayName = aS;
var dS = "DialogTrigger",
  fS = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = cS(dS, n),
      a = Qa(t, o.triggerRef);
    return jsx(gi.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": IS(o.open),
      ...r,
      ref: a,
      onClick: ui(e.onClick, o.onOpenToggle),
    });
  });
fS.displayName = dS;
var pS = "DialogPortal",
  [hS, mS] = iS(pS, { forceMount: void 0 }),
  gS = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      a = cS(pS, t);
    return jsx(hS, {
      scope: t,
      forceMount: n,
      children: g.Children.map(r, (e) =>
        jsx(Nx, {
          present: n || a.open,
          children: jsx(oc, { asChild: true, container: o, children: e }),
        }),
      ),
    });
  };
gS.displayName = pS;
var vS = "DialogOverlay",
  yS = g.forwardRef((e, t) => {
    const n = mS(vS, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = cS(vS, e.__scopeDialog);
    return a.modal ? jsx(Nx, { present: r || a.open, children: jsx(wS, { ...o, ref: t }) }) : null;
  });
yS.displayName = vS;
var bS = Xa("DialogOverlay.RemoveScroll"),
  wS = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = cS(vS, n);
    return jsx(ou, {
      as: bS,
      allowPinchZoom: true,
      shards: [o.contentRef],
      children: jsx(gi.div, {
        "data-state": IS(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  xS = "DialogContent",
  SS = g.forwardRef((e, t) => {
    const n = mS(xS, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = cS(xS, e.__scopeDialog);
    return jsx(Nx, {
      present: r || a.open,
      children: a.modal ? jsx(ES, { ...o, ref: t }) : jsx(_S, { ...o, ref: t }),
    });
  });
SS.displayName = xS;
var ES = g.forwardRef((e, t) => {
    const n = cS(xS, e.__scopeDialog),
      r = g.useRef(null),
      o = Qa(t, n.contentRef, r);
    return (
      g.useEffect(() => {
        const e = r.current;
        if (e) return vc(e);
      }, []),
      jsx(RS, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: ui(e.onCloseAutoFocus, (e) => {
          e.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: ui(e.onPointerDownOutside, (e) => {
          const t = e.detail.originalEvent,
            n = 0 === t.button && true === t.ctrlKey;
          (2 === t.button || n) && e.preventDefault();
        }),
        onFocusOutside: ui(e.onFocusOutside, (e) => e.preventDefault()),
      })
    );
  }),
  _S = g.forwardRef((e, t) => {
    const n = cS(xS, e.__scopeDialog),
      r = g.useRef(false),
      o = g.useRef(false);
    return jsx(RS, {
      ...e,
      ref: t,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: (t) => {
        e.onCloseAutoFocus?.(t),
          t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = false),
          (o.current = false);
      },
      onInteractOutside: (t) => {
        e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = true),
            "pointerdown" === t.detail.originalEvent.type && (o.current = true));
        const a = t.target,
          i = n.triggerRef.current?.contains(a);
        i && t.preventDefault(),
          "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault();
      },
    });
  }),
  RS = g.forwardRef((e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e,
      s = cS(xS, n),
      l = g.useRef(null),
      c = Qa(t, l);
    return (
      Ai(),
      jsxs(Fragment, {
        children: [
          jsx(Oi, {
            asChild: true,
            loop: true,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: jsx(_i, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": IS(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(false),
            }),
          }),
          jsxs(Fragment, {
            children: [
              jsx(MS, { titleId: s.titleId }),
              jsx(LS, { contentRef: l, descriptionId: s.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  CS = "DialogTitle",
  NS = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = cS(CS, n);
    return jsx(gi.h2, { id: o.titleId, ...r, ref: t });
  });
NS.displayName = CS;
var AS = "DialogDescription",
  PS = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = cS(AS, n);
    return jsx(gi.p, { id: o.descriptionId, ...r, ref: t });
  });
PS.displayName = AS;
var kS = "DialogClose",
  TS = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = cS(kS, n);
    return jsx(gi.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: ui(e.onClick, () => o.onOpenChange(false)),
    });
  });
function IS(e) {
  return e ? "open" : "closed";
}
TS.displayName = kS;
var OS = "DialogTitleWarning",
  [DS, zS] = (function (e, t) {
    const n = g.createContext(t),
      r = (e) => {
        const { children: t, ...r } = e,
          o = g.useMemo(() => r, Object.values(r));
        return jsx(n.Provider, { value: o, children: t });
      };
    return (
      (r.displayName = e + "Provider"),
      [
        r,
        function (r) {
          const o = g.useContext(n);
          if (o) return o;
          if (void 0 !== t) return t;
          throw new Error(`\`${r}\` must be used within \`${e}\``);
        },
      ]
    );
  })(OS, { contentName: xS, titleName: CS, docsSlug: "dialog" }),
  MS = ({ titleId: e }) => {
    const t = zS(OS),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      g.useEffect(() => {
        if (e) {
          document.getElementById(e) || console.error(n);
        }
      }, [n, e]),
      null
    );
  },
  LS = ({ contentRef: e, descriptionId: t }) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zS("DialogDescriptionWarning").contentName}}.`;
    return (
      g.useEffect(() => {
        const r = e.current?.getAttribute("aria-describedby");
        if (t && r) {
          document.getElementById(t) || console.warn(n);
        }
      }, [n, e, t]),
      null
    );
  },
  jS = uS,
  FS = fS,
  BS = gS,
  qS = yS,
  US = SS,
  $S = NS,
  WS = PS,
  VS = TS;
const HS = ({ ...e }) => jsx(FS, { "data-slot": "dialog-trigger", ...e }),
  KS = ({ ...e }) => jsx(BS, { "data-slot": "dialog-portal", ...e }),
  GS = ({ className: e, ...t }) =>
    jsx(qS, {
      "data-slot": "dialog-overlay",
      className: Ka(
        "fixed inset-0 z-50 bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  YS = oi(
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
  QS = Object.assign(({ ...e }) => jsx(jS, { "data-slot": "dialog", ...e }), {
    Trigger: HS,
    Portal: KS,
    Close: ({ ...e }) => jsx(VS, { "data-slot": "dialog-close", ...e }),
    Overlay: GS,
    Content: ({ children: e, className: t, size: n, variant: r, ...o }) =>
      jsxs(KS, {
        "data-slot": "dialog-portal",
        children: [
          jsx(GS, {}),
          jsxs(US, {
            "data-slot": "dialog-content",
            className: Ka(YS({ size: n, variant: r, className: t })),
            ...o,
            children: [
              e,
              jsxs(VS, {
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
        className: Ka("flex flex-col gap-2 text-center sm:text-left", e),
        ...t,
      }),
    Footer: ({ className: e, ...t }) =>
      jsx("div", {
        "data-slot": "dialog-footer",
        className: Ka("mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
        ...t,
      }),
    Title: ({ className: e, ...t }) =>
      jsx($S, {
        "data-slot": "dialog-title",
        className: Ka("text-lg leading-none font-semibold", e),
        ...t,
      }),
    Description: ({ className: e, ...t }) =>
      jsx(WS, {
        "data-slot": "dialog-description",
        className: Ka("text-muted-foreground", e),
        ...t,
      }),
    CancelButton: (e) =>
      jsx(HS, {
        asChild: true,
        children: jsx(ii, { variant: "secondary", ...e, children: e.children ?? "Cancel" }),
      }),
  });
var XS = "rovingFocusGroup.onEntryFocus",
  JS = { bubbles: false, cancelable: true },
  ZS = "RovingFocusGroup",
  [eE, tE, nE] = pi(ZS),
  [rE, oE] = di(ZS, [nE]),
  [aE, iE] = rE(ZS),
  sE = g.forwardRef((e, t) =>
    jsx(eE.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: jsx(eE.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: jsx(lE, { ...e, ref: t }),
      }),
    }),
  );
sE.displayName = ZS;
var lE = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = false,
        dir: a,
        currentTabStopId: i,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: l,
        onEntryFocus: c,
        preventScrollOnEntryFocus: u = false,
        ...f
      } = e,
      p = g.useRef(null),
      h = Qa(t, p),
      m = mi(a),
      [v, y] = ic({ prop: i, defaultProp: s ?? null, onChange: l, caller: ZS }),
      [b, w] = g.useState(false),
      x = yi(c),
      S = tE(n),
      E = g.useRef(false),
      [_, R] = g.useState(0);
    return (
      g.useEffect(() => {
        const e = p.current;
        if (e) return e.addEventListener(XS, x), () => e.removeEventListener(XS, x);
      }, [x]),
      jsx(aE, {
        scope: n,
        orientation: r,
        dir: m,
        loop: o,
        currentTabStopId: v,
        onItemFocus: g.useCallback((e) => y(e), [y]),
        onItemShiftTab: g.useCallback(() => w(true), []),
        onFocusableItemAdd: g.useCallback(() => R((e) => e + 1), []),
        onFocusableItemRemove: g.useCallback(() => R((e) => e - 1), []),
        children: jsx(gi.div, {
          tabIndex: b || 0 === _ ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: ui(e.onMouseDown, () => {
            E.current = true;
          }),
          onFocus: ui(e.onFocus, (e) => {
            const t = !E.current;
            if (e.target === e.currentTarget && t && !b) {
              const t = new CustomEvent(XS, JS);
              if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                const e = S().filter((e) => e.focusable);
                fE(
                  [e.find((e) => e.active), e.find((e) => e.id === v), ...e]
                    .filter(Boolean)
                    .map((e) => e.ref.current),
                  u,
                );
              }
            }
            E.current = false;
          }),
          onBlur: ui(e.onBlur, () => w(false)),
        }),
      })
    );
  }),
  cE = "RovingFocusGroupItem",
  uE = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = true,
        active: o = false,
        tabStopId: a,
        children: i,
        ...s
      } = e,
      l = $i(),
      c = a || l,
      u = iE(cE, n),
      f = u.currentTabStopId === c,
      p = tE(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: m, currentTabStopId: v } = u;
    return (
      g.useEffect(() => {
        if (r) return h(), () => m();
      }, [r, h, m]),
      jsx(eE.ItemSlot, {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: jsx(gi.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: ui(e.onMouseDown, (e) => {
            r ? u.onItemFocus(c) : e.preventDefault();
          }),
          onFocus: ui(e.onFocus, () => u.onItemFocus(c)),
          onKeyDown: ui(e.onKeyDown, (e) => {
            if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
            if (e.target !== e.currentTarget) return;
            const t = (function (e, t, n) {
              const r = (function (e, t) {
                return "rtl" !== t
                  ? e
                  : "ArrowLeft" === e
                    ? "ArrowRight"
                    : "ArrowRight" === e
                      ? "ArrowLeft"
                      : e;
              })(e.key, n);
              return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) ||
                ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r))
                ? void 0
                : dE[r];
            })(e, u.orientation, u.dir);
            if (void 0 !== t) {
              if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
              e.preventDefault();
              let o = p()
                .filter((e) => e.focusable)
                .map((e) => e.ref.current);
              if ("last" === t) o.reverse();
              else if ("prev" === t || "next" === t) {
                "prev" === t && o.reverse();
                const a = o.indexOf(e.currentTarget);
                o = u.loop
                  ? ((r = a + 1), (n = o).map((e, t) => n[(r + t) % n.length]))
                  : o.slice(a + 1);
              }
              setTimeout(() => fE(o));
            }
            var n, r;
          }),
          children: "function" == typeof i ? i({ isCurrentTabStop: f, hasTabStop: null != v }) : i,
        }),
      })
    );
  });
uE.displayName = cE;
var dE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function fE(e, t = false) {
  const n = document.activeElement;
  for (const r of e) {
    if (r === n) return;
    if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
  }
}
var pE = sE,
  hE = uE,
  mE = ["Enter", " "],
  gE = ["ArrowUp", "PageDown", "End"],
  vE = ["ArrowDown", "PageUp", "Home", ...gE],
  yE = { ltr: [...mE, "ArrowRight"], rtl: [...mE, "ArrowLeft"] },
  bE = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  wE = "Menu",
  [xE, SE, EE] = pi(wE),
  [_E, RE] = di(wE, [EE, jl, oE]),
  CE = jl(),
  NE = oE(),
  [AE, PE] = _E(wE),
  [kE, TE] = _E(wE),
  IE = (e) => {
    const {
        __scopeMenu: t,
        open: n = false,
        children: r,
        dir: o,
        onOpenChange: a,
        modal: i = true,
      } = e,
      s = CE(t),
      [l, c] = g.useState(null),
      u = g.useRef(false),
      f = yi(a),
      p = mi(o);
    return (
      g.useEffect(() => {
        const e = () => {
            (u.current = true),
              document.addEventListener("pointerdown", t, { capture: true, once: true }),
              document.addEventListener("pointermove", t, { capture: true, once: true });
          },
          t = () => (u.current = false);
        return (
          document.addEventListener("keydown", e, { capture: true }),
          () => {
            document.removeEventListener("keydown", e, { capture: true }),
              document.removeEventListener("pointerdown", t, { capture: true }),
              document.removeEventListener("pointermove", t, { capture: true });
          }
        );
      }, []),
      jsx(ec, {
        ...s,
        children: jsx(AE, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: c,
          children: jsx(kE, {
            scope: t,
            onClose: g.useCallback(() => f(false), [f]),
            isUsingKeyboardRef: u,
            dir: p,
            modal: i,
            children: r,
          }),
        }),
      })
    );
  };
IE.displayName = wE;
var OE = g.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e,
    o = CE(n);
  return jsx(tc, { ...o, ...r, ref: t });
});
OE.displayName = "MenuAnchor";
var DE = "MenuPortal",
  [zE, ME] = _E(DE, { forceMount: void 0 }),
  LE = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      a = PE(DE, t);
    return jsx(zE, {
      scope: t,
      forceMount: n,
      children: jsx(Nx, {
        present: n || a.open,
        children: jsx(oc, { asChild: true, container: o, children: r }),
      }),
    });
  };
LE.displayName = DE;
var jE = "MenuContent",
  [FE, BE] = _E(jE),
  qE = g.forwardRef((e, t) => {
    const n = ME(jE, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      a = PE(jE, e.__scopeMenu),
      i = TE(jE, e.__scopeMenu);
    return jsx(xE.Provider, {
      scope: e.__scopeMenu,
      children: jsx(Nx, {
        present: r || a.open,
        children: jsx(xE.Slot, {
          scope: e.__scopeMenu,
          children: i.modal ? jsx(UE, { ...o, ref: t }) : jsx($E, { ...o, ref: t }),
        }),
      }),
    });
  }),
  UE = g.forwardRef((e, t) => {
    const n = PE(jE, e.__scopeMenu),
      r = g.useRef(null),
      o = Qa(t, r);
    return (
      g.useEffect(() => {
        const e = r.current;
        if (e) return vc(e);
      }, []),
      jsx(VE, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: true,
        onFocusOutside: ui(e.onFocusOutside, (e) => e.preventDefault(), {
          checkForDefaultPrevented: false,
        }),
        onDismiss: () => n.onOpenChange(false),
      })
    );
  }),
  $E = g.forwardRef((e, t) => {
    const n = PE(jE, e.__scopeMenu);
    return jsx(VE, {
      ...e,
      ref: t,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => n.onOpenChange(false),
    });
  }),
  WE = Xa("MenuContent.ScrollLock"),
  VE = g.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = false,
        trapFocus: o,
        onOpenAutoFocus: a,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: s,
        onEntryFocus: l,
        onEscapeKeyDown: c,
        onPointerDownOutside: u,
        onFocusOutside: f,
        onInteractOutside: p,
        onDismiss: h,
        disableOutsideScroll: m,
        ...v
      } = e,
      y = PE(jE, n),
      b = TE(jE, n),
      w = CE(n),
      x = NE(n),
      S = SE(n),
      [E, _] = g.useState(null),
      R = g.useRef(null),
      C = Qa(t, R, y.onContentChange),
      N = g.useRef(0),
      A = g.useRef(""),
      P = g.useRef(0),
      k = g.useRef(null),
      T = g.useRef("right"),
      I = g.useRef(0),
      O = m ? ou : g.Fragment,
      D = m ? { as: WE, allowPinchZoom: true } : void 0,
      z = (e) => {
        const t = A.current + e,
          n = S().filter((e) => !e.disabled),
          r = document.activeElement,
          o = n.find((e) => e.ref.current === r)?.textValue,
          a = (function (e, t, n) {
            const r = t.length > 1 && Array.from(t).every((e) => e === t[0]),
              o = r ? t[0] : t,
              a = n ? e.indexOf(n) : -1;
            let i = ((s = e), (l = Math.max(a, 0)), s.map((e, t) => s[(l + t) % s.length]));
            var s, l;
            1 === o.length && (i = i.filter((e) => e !== n));
            const c = i.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
            return c !== n ? c : void 0;
          })(
            n.map((e) => e.textValue),
            t,
            o,
          ),
          i = n.find((e) => e.textValue === a)?.ref.current;
        !(function e(t) {
          (A.current = t),
            window.clearTimeout(N.current),
            "" !== t && (N.current = window.setTimeout(() => e(""), 1e3));
        })(t),
          i && setTimeout(() => i.focus());
      };
    g.useEffect(() => () => window.clearTimeout(N.current), []), Ai();
    const M = g.useCallback(
      (e) =>
        T.current === k.current?.side &&
        (function (e, t) {
          if (!t) return false;
          const n = { x: e.clientX, y: e.clientY };
          return (function (e, t) {
            const { x: n, y: r } = e;
            let o = false;
            for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
              const e = t[a],
                s = t[i],
                l = e.x,
                c = e.y,
                u = s.x,
                d = s.y;
              c > r != d > r && n < ((u - l) * (r - c)) / (d - c) + l && (o = !o);
            }
            return o;
          })(n, t);
        })(e, k.current?.area),
      [],
    );
    return jsx(FE, {
      scope: n,
      searchRef: A,
      onItemEnter: g.useCallback(
        (e) => {
          M(e) && e.preventDefault();
        },
        [M],
      ),
      onItemLeave: g.useCallback(
        (e) => {
          M(e) || (R.current?.focus(), _(null));
        },
        [M],
      ),
      onTriggerLeave: g.useCallback(
        (e) => {
          M(e) && e.preventDefault();
        },
        [M],
      ),
      pointerGraceTimerRef: P,
      onPointerGraceIntentChange: g.useCallback((e) => {
        k.current = e;
      }, []),
      children: jsx(O, {
        ...D,
        children: jsx(Oi, {
          asChild: true,
          trapped: o,
          onMountAutoFocus: ui(a, (e) => {
            e.preventDefault(), R.current?.focus({ preventScroll: true });
          }),
          onUnmountAutoFocus: i,
          children: jsx(_i, {
            asChild: true,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: f,
            onInteractOutside: p,
            onDismiss: h,
            children: jsx(pE, {
              asChild: true,
              ...x,
              dir: b.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: E,
              onCurrentTabStopIdChange: _,
              onEntryFocus: ui(l, (e) => {
                b.isUsingKeyboardRef.current || e.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: jsx(nc, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": b_(y.open),
                "data-radix-menu-content": "",
                dir: b.dir,
                ...w,
                ...v,
                ref: C,
                style: { outline: "none", ...v.style },
                onKeyDown: ui(v.onKeyDown, (e) => {
                  const t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                    n = e.ctrlKey || e.altKey || e.metaKey,
                    r = 1 === e.key.length;
                  t && ("Tab" === e.key && e.preventDefault(), !n && r && z(e.key));
                  const o = R.current;
                  if (e.target !== o) return;
                  if (!vE.includes(e.key)) return;
                  e.preventDefault();
                  const a = S()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  gE.includes(e.key) && a.reverse(),
                    (function (e) {
                      const t = document.activeElement;
                      for (const n of e) {
                        if (n === t) return;
                        if ((n.focus(), document.activeElement !== t)) return;
                      }
                    })(a);
                }),
                onBlur: ui(e.onBlur, (e) => {
                  e.currentTarget.contains(e.target) ||
                    (window.clearTimeout(N.current), (A.current = ""));
                }),
                onPointerMove: ui(
                  e.onPointerMove,
                  S_((e) => {
                    const t = e.target,
                      n = I.current !== e.clientX;
                    if (e.currentTarget.contains(t) && n) {
                      const t = e.clientX > I.current ? "right" : "left";
                      (T.current = t), (I.current = e.clientX);
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
qE.displayName = jE;
var HE = g.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return jsx(gi.div, { role: "group", ...r, ref: t });
});
HE.displayName = "MenuGroup";
var KE = g.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return jsx(gi.div, { ...r, ref: t });
});
KE.displayName = "MenuLabel";
var GE = "MenuItem",
  YE = "menu.itemSelect",
  QE = g.forwardRef((e, t) => {
    const { disabled: n = false, onSelect: r, ...o } = e,
      a = g.useRef(null),
      i = TE(GE, e.__scopeMenu),
      s = BE(GE, e.__scopeMenu),
      l = Qa(t, a),
      c = g.useRef(false);
    return jsx(XE, {
      ...o,
      ref: l,
      disabled: n,
      onClick: ui(e.onClick, () => {
        const e = a.current;
        if (!n && e) {
          const t = new CustomEvent(YE, { bubbles: true, cancelable: true });
          e.addEventListener(YE, (e) => r?.(e), { once: true }),
            vi(e, t),
            t.defaultPrevented ? (c.current = false) : i.onClose();
        }
      }),
      onPointerDown: (t) => {
        e.onPointerDown?.(t), (c.current = true);
      },
      onPointerUp: ui(e.onPointerUp, (e) => {
        c.current || e.currentTarget?.click();
      }),
      onKeyDown: ui(e.onKeyDown, (e) => {
        const t = "" !== s.searchRef.current;
        n ||
          (t && " " === e.key) ||
          (mE.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
      }),
    });
  });
QE.displayName = GE;
var XE = g.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = false, textValue: o, ...a } = e,
      i = BE(GE, n),
      s = NE(n),
      l = g.useRef(null),
      c = Qa(t, l),
      [u, f] = g.useState(false),
      [p, h] = g.useState("");
    return (
      g.useEffect(() => {
        const e = l.current;
        e && h((e.textContent ?? "").trim());
      }, [a.children]),
      jsx(xE.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: jsx(hE, {
          asChild: true,
          ...s,
          focusable: !r,
          children: jsx(gi.div, {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: c,
            onPointerMove: ui(
              e.onPointerMove,
              S_((e) => {
                if (r) i.onItemLeave(e);
                else if ((i.onItemEnter(e), !e.defaultPrevented)) {
                  e.currentTarget.focus({ preventScroll: true });
                }
              }),
            ),
            onPointerLeave: ui(
              e.onPointerLeave,
              S_((e) => i.onItemLeave(e)),
            ),
            onFocus: ui(e.onFocus, () => f(true)),
            onBlur: ui(e.onBlur, () => f(false)),
          }),
        }),
      })
    );
  }),
  JE = g.forwardRef((e, t) => {
    const { checked: n = false, onCheckedChange: r, ...o } = e;
    return jsx(i_, {
      scope: e.__scopeMenu,
      checked: n,
      children: jsx(QE, {
        role: "menuitemcheckbox",
        "aria-checked": w_(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": x_(n),
        onSelect: ui(o.onSelect, () => r?.(!!w_(n) || !n), { checkForDefaultPrevented: false }),
      }),
    });
  });
JE.displayName = "MenuCheckboxItem";
var ZE = "MenuRadioGroup",
  [e_, t_] = _E(ZE, { value: void 0, onValueChange: () => {} }),
  n_ = g.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      a = yi(r);
    return jsx(e_, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: a,
      children: jsx(HE, { ...o, ref: t }),
    });
  });
n_.displayName = ZE;
var r_ = "MenuRadioItem",
  o_ = g.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = t_(r_, e.__scopeMenu),
      a = n === o.value;
    return jsx(i_, {
      scope: e.__scopeMenu,
      checked: a,
      children: jsx(QE, {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": x_(a),
        onSelect: ui(r.onSelect, () => o.onValueChange?.(n), { checkForDefaultPrevented: false }),
      }),
    });
  });
o_.displayName = r_;
var a_ = "MenuItemIndicator",
  [i_, s_] = _E(a_, { checked: false }),
  l_ = g.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      a = s_(a_, n);
    return jsx(Nx, {
      present: r || w_(a.checked) || true === a.checked,
      children: jsx(gi.span, { ...o, ref: t, "data-state": x_(a.checked) }),
    });
  });
l_.displayName = a_;
var c_ = g.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return jsx(gi.div, { role: "separator", "aria-orientation": "horizontal", ...r, ref: t });
});
c_.displayName = "MenuSeparator";
var u_ = g.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e,
    o = CE(n);
  return jsx(rc, { ...o, ...r, ref: t });
});
u_.displayName = "MenuArrow";
var d_ = "MenuSub",
  [f_, p_] = _E(d_),
  h_ = (e) => {
    const { __scopeMenu: t, children: n, open: r = false, onOpenChange: o } = e,
      a = PE(d_, t),
      i = CE(t),
      [s, l] = g.useState(null),
      [c, u] = g.useState(null),
      f = yi(o);
    return (
      g.useEffect(() => (false === a.open && f(false), () => f(false)), [a.open, f]),
      jsx(ec, {
        ...i,
        children: jsx(AE, {
          scope: t,
          open: r,
          onOpenChange: f,
          content: c,
          onContentChange: u,
          children: jsx(f_, {
            scope: t,
            contentId: $i(),
            triggerId: $i(),
            trigger: s,
            onTriggerChange: l,
            children: n,
          }),
        }),
      })
    );
  };
h_.displayName = d_;
var m_ = "MenuSubTrigger",
  g_ = g.forwardRef((e, t) => {
    const n = PE(m_, e.__scopeMenu),
      r = TE(m_, e.__scopeMenu),
      o = p_(m_, e.__scopeMenu),
      a = BE(m_, e.__scopeMenu),
      i = g.useRef(null),
      { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a,
      c = { __scopeMenu: e.__scopeMenu },
      u = g.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      g.useEffect(() => u, [u]),
      g.useEffect(() => {
        const e = s.current;
        return () => {
          window.clearTimeout(e), l(null);
        };
      }, [s, l]),
      jsx(OE, {
        asChild: true,
        ...c,
        children: jsx(XE, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": b_(n.open),
          ...e,
          ref: Ya(t, o.onTriggerChange),
          onClick: (t) => {
            e.onClick?.(t),
              e.disabled ||
                t.defaultPrevented ||
                (t.currentTarget.focus(), n.open || n.onOpenChange(true));
          },
          onPointerMove: ui(
            e.onPointerMove,
            S_((t) => {
              a.onItemEnter(t),
                t.defaultPrevented ||
                  e.disabled ||
                  n.open ||
                  i.current ||
                  (a.onPointerGraceIntentChange(null),
                  (i.current = window.setTimeout(() => {
                    n.onOpenChange(true), u();
                  }, 100)));
            }),
          ),
          onPointerLeave: ui(
            e.onPointerLeave,
            S_((e) => {
              u();
              const t = n.content?.getBoundingClientRect();
              if (t) {
                const r = n.content?.dataset.side,
                  o = "right" === r,
                  i = o ? -5 : 5,
                  l = t[o ? "left" : "right"],
                  c = t[o ? "right" : "left"];
                a.onPointerGraceIntentChange({
                  area: [
                    { x: e.clientX + i, y: e.clientY },
                    { x: l, y: t.top },
                    { x: c, y: t.top },
                    { x: c, y: t.bottom },
                    { x: l, y: t.bottom },
                  ],
                  side: r,
                }),
                  window.clearTimeout(s.current),
                  (s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300));
              } else {
                if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                a.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: ui(e.onKeyDown, (t) => {
            const o = "" !== a.searchRef.current;
            e.disabled ||
              (o && " " === t.key) ||
              (yE[r.dir].includes(t.key) &&
                (n.onOpenChange(true), n.content?.focus(), t.preventDefault()));
          }),
        }),
      })
    );
  });
g_.displayName = m_;
var v_ = "MenuSubContent",
  y_ = g.forwardRef((e, t) => {
    const n = ME(jE, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      a = PE(jE, e.__scopeMenu),
      i = TE(jE, e.__scopeMenu),
      s = p_(v_, e.__scopeMenu),
      l = g.useRef(null),
      c = Qa(t, l);
    return jsx(xE.Provider, {
      scope: e.__scopeMenu,
      children: jsx(Nx, {
        present: r || a.open,
        children: jsx(xE.Slot, {
          scope: e.__scopeMenu,
          children: jsx(VE, {
            id: s.contentId,
            "aria-labelledby": s.triggerId,
            ...o,
            ref: c,
            align: "start",
            side: "rtl" === i.dir ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: (e) => {
              i.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
            },
            onCloseAutoFocus: (e) => e.preventDefault(),
            onFocusOutside: ui(e.onFocusOutside, (e) => {
              e.target !== s.trigger && a.onOpenChange(false);
            }),
            onEscapeKeyDown: ui(e.onEscapeKeyDown, (e) => {
              i.onClose(), e.preventDefault();
            }),
            onKeyDown: ui(e.onKeyDown, (e) => {
              const t = e.currentTarget.contains(e.target),
                n = bE[i.dir].includes(e.key);
              t && n && (a.onOpenChange(false), s.trigger?.focus(), e.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
function b_(e) {
  return e ? "open" : "closed";
}
function w_(e) {
  return "indeterminate" === e;
}
function x_(e) {
  return w_(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function S_(e) {
  return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
}
y_.displayName = v_;
var E_ = IE,
  __ = OE,
  R_ = LE,
  C_ = qE,
  N_ = HE,
  A_ = KE,
  P_ = QE,
  k_ = JE,
  T_ = n_,
  I_ = o_,
  O_ = l_,
  D_ = c_,
  z_ = u_,
  M_ = h_,
  L_ = g_,
  j_ = y_,
  F_ = "DropdownMenu",
  [B_, q_] = di(F_, [RE]),
  U_ = RE(),
  [$_, W_] = B_(F_),
  V_ = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: a,
        onOpenChange: i,
        modal: s = true,
      } = e,
      l = U_(t),
      c = g.useRef(null),
      [u, f] = ic({ prop: o, defaultProp: a ?? false, onChange: i, caller: F_ });
    return jsx($_, {
      scope: t,
      triggerId: $i(),
      triggerRef: c,
      contentId: $i(),
      open: u,
      onOpenChange: f,
      onOpenToggle: g.useCallback(() => f((e) => !e), [f]),
      modal: s,
      children: jsx(E_, { ...l, open: u, onOpenChange: f, dir: r, modal: s, children: n }),
    });
  };
V_.displayName = F_;
var H_ = "DropdownMenuTrigger",
  K_ = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = false, ...o } = e,
      a = W_(H_, n),
      i = U_(n);
    return jsx(__, {
      asChild: true,
      ...i,
      children: jsx(gi.button, {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Ya(t, a.triggerRef),
        onPointerDown: ui(e.onPointerDown, (e) => {
          r ||
            0 !== e.button ||
            false !== e.ctrlKey ||
            (a.onOpenToggle(), a.open || e.preventDefault());
        }),
        onKeyDown: ui(e.onKeyDown, (e) => {
          r ||
            (["Enter", " "].includes(e.key) && a.onOpenToggle(),
            "ArrowDown" === e.key && a.onOpenChange(true),
            ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
        }),
      }),
    });
  });
K_.displayName = H_;
var G_ = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e,
    r = U_(t);
  return jsx(R_, { ...r, ...n });
};
G_.displayName = "DropdownMenuPortal";
var Y_ = "DropdownMenuContent",
  Q_ = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = W_(Y_, n),
      a = U_(n),
      i = g.useRef(false);
    return jsx(C_, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...a,
      ...r,
      ref: t,
      onCloseAutoFocus: ui(e.onCloseAutoFocus, (e) => {
        i.current || o.triggerRef.current?.focus(), (i.current = false), e.preventDefault();
      }),
      onInteractOutside: ui(e.onInteractOutside, (e) => {
        const t = e.detail.originalEvent,
          n = 0 === t.button && true === t.ctrlKey,
          r = 2 === t.button || n;
        (o.modal && !r) || (i.current = true);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Q_.displayName = Y_;
var X_ = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(N_, { ...o, ...r, ref: t });
});
X_.displayName = "DropdownMenuGroup";
var J_ = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(A_, { ...o, ...r, ref: t });
});
J_.displayName = "DropdownMenuLabel";
var Z_ = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(P_, { ...o, ...r, ref: t });
});
Z_.displayName = "DropdownMenuItem";
var eR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(k_, { ...o, ...r, ref: t });
});
eR.displayName = "DropdownMenuCheckboxItem";
var tR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(T_, { ...o, ...r, ref: t });
});
tR.displayName = "DropdownMenuRadioGroup";
var nR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(I_, { ...o, ...r, ref: t });
});
nR.displayName = "DropdownMenuRadioItem";
var rR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(O_, { ...o, ...r, ref: t });
});
rR.displayName = "DropdownMenuItemIndicator";
var oR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(D_, { ...o, ...r, ref: t });
});
oR.displayName = "DropdownMenuSeparator";
g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(z_, { ...o, ...r, ref: t });
}).displayName = "DropdownMenuArrow";
var aR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(L_, { ...o, ...r, ref: t });
});
aR.displayName = "DropdownMenuSubTrigger";
var iR = g.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e,
    o = U_(n);
  return jsx(j_, {
    ...o,
    ...r,
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
    },
  });
});
iR.displayName = "DropdownMenuSubContent";
var sR = V_,
  lR = K_,
  cR = G_,
  uR = Q_,
  dR = X_,
  fR = J_,
  pR = Z_,
  hR = eR,
  mR = tR,
  gR = nR,
  vR = rR,
  yR = oR,
  bR = (e) => {
    const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e,
      i = U_(t),
      [s, l] = ic({ prop: r, defaultProp: a ?? false, onChange: o, caller: "DropdownMenuSub" });
    return jsx(M_, { ...i, open: s, onOpenChange: l, children: n });
  },
  wR = aR,
  xR = iR;
const SR = Object.assign(({ ...e }) => jsx(sR, { "data-slot": "dropdown-menu", ...e }), {
    Portal: ({ ...e }) => jsx(cR, { "data-slot": "dropdown-menu-portal", ...e }),
    Trigger: ({ ...e }) => jsx(lR, { "data-slot": "dropdown-menu-trigger", ...e }),
    Content: ({ className: e, sideOffset: t = 4, ...n }) =>
      jsx(cR, {
        children: jsx(uR, {
          "data-slot": "dropdown-menu-content",
          sideOffset: t,
          className: Ka(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            e,
          ),
          ...n,
        }),
      }),
    Group: ({ ...e }) => jsx(dR, { "data-slot": "dropdown-menu-group", ...e }),
    Item: ({ className: e, inset: t, variant: n = "default", ...r }) =>
      jsx(pR, {
        "data-slot": "dropdown-menu-item",
        "data-inset": t,
        "data-variant": n,
        className: Ka(
          "relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-red-500 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:text-red-400 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:!text-red-500 dark:data-[variant=destructive]:*:[svg]:!text-red-400",
          e,
        ),
        ...r,
      }),
    CheckboxItem: ({ checked: e = false, children: t, className: n, ...r }) =>
      jsxs(hR, {
        "data-slot": "dropdown-menu-checkbox-item",
        className: Ka(
          "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          n,
        ),
        checked: e,
        ...r,
        children: [
          jsx("span", {
            className:
              "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: jsx(vR, { children: jsx(CheckIcon, { className: "size-4" }) }),
          }),
          t,
        ],
      }),
    RadioGroup: ({ ...e }) => jsx(mR, { "data-slot": "dropdown-menu-radio-group", ...e }),
    RadioItem: ({ children: e, className: t, ...n }) =>
      jsxs(gR, {
        "data-slot": "dropdown-menu-radio-item",
        className: Ka(
          "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          t,
        ),
        ...n,
        children: [
          jsx("span", {
            className:
              "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
            children: jsx(vR, { children: jsx(CircleIcon, { className: "size-2 fill-current" }) }),
          }),
          e,
        ],
      }),
    Label: ({ className: e, inset: t, ...n }) =>
      jsx(fR, {
        "data-slot": "dropdown-menu-label",
        "data-inset": t,
        className: Ka("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", e),
        ...n,
      }),
    Separator: ({ className: e, ...t }) =>
      jsx(yR, {
        "data-slot": "dropdown-menu-separator",
        className: Ka("-mx-1 my-1 h-px bg-border", e),
        ...t,
      }),
    Shortcut: ({ className: e, ...t }) =>
      jsx("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: Ka("ml-auto text-xs tracking-widest text-muted-foreground", e),
        ...t,
      }),
    Sub: ({ ...e }) => jsx(bR, { "data-slot": "dropdown-menu-sub", ...e }),
    SubTrigger: ({ children: e, className: t, inset: n, ...r }) =>
      jsxs(wR, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": n,
        className: Ka(
          "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          t,
        ),
        ...r,
        children: [e, jsx(ChevronRightIcon, { className: "ml-auto size-4" })],
      }),
    SubContent: ({ className: e, ...t }) =>
      jsx(xR, {
        "data-slot": "dropdown-menu-sub-content",
        className: Ka(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          e,
        ),
        ...t,
      }),
  }),
  ER = g__default.createContext(null),
  _R = (e) => jsx(QS.Trigger, { ...e }),
  RR = (e) => jsx(QS.Portal, { ...e }),
  CR = (e) => jsx(QS.Overlay, { ...e });
Object.assign(
  ({ disabled: e = false, form: t, isDirty: n, onOpenChange: r, ...o }) => {
    const [a, i] = g.useState(false),
      [s, l] = g.useState(void 0),
      c = t ?? s,
      u = g.useMemo(() => new Store({ isDirty: false }), []),
      p = useStore(c?.store ?? u, (e) => e.isDirty),
      h = n ?? (p || a),
      {
        cancelClose: m,
        confirmClose: v,
        handleClose: y,
        showConfirmDialog: b,
      } = ((e, t = false) => {
        const [n, r] = g.useState(false),
          [o, a] = g.useState(null);
        return {
          handleClose: g.useCallback(
            (n) => {
              !t && e ? (a(() => n), r(true)) : n();
            },
            [e, t],
          ),
          showConfirmDialog: n,
          confirmClose: g.useCallback(() => {
            null !== o && o(), r(false), a(null);
          }, [o]),
          cancelClose: g.useCallback(() => {
            r(false), a(null);
          }, []),
        };
      })(h, e),
      w = g.useCallback((e) => {
        l(e);
      }, []),
      x = g.useCallback(() => {
        l(void 0);
      }, []),
      S = g.useMemo(
        () => ({
          setIsDirty: i,
          registerFormApi: w,
          unregisterFormApi: x,
          ...(void 0 !== c && { formApi: c }),
        }),
        [c, w, x],
      ),
      E = g.useCallback(
        (e) => {
          e
            ? r?.(true)
            : y(() => {
                r?.(false), c?.reset();
              });
        },
        [c, y, r],
      );
    return jsxs(ER.Provider, {
      value: S,
      children: [
        jsx(jS, { "data-slot": "dialog", onOpenChange: E, ...o }),
        jsx(jS, {
          open: b,
          onOpenChange: (e) => {
            e || m();
          },
          children: jsxs(BS, {
            children: [
              jsx(qS, {
                className:
                  "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
              }),
              jsxs(US, {
                className:
                  "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto max-w-[calc(100%-2rem)] sm:max-w-lg",
                children: [
                  jsxs("div", {
                    className: "flex flex-col gap-2 text-center sm:text-left",
                    children: [
                      jsx($S, {
                        className: "text-lg leading-none font-semibold",
                        children: "Unsaved Changes",
                      }),
                      jsx(WS, {
                        className: "text-muted-foreground",
                        children:
                          "You have unsaved changes. Are you sure you want to close this dialog? Your changes will be lost.",
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                    children: [
                      jsx(ii, { variant: "secondary", onClick: m, children: "Cancel" }),
                      jsx(ii, { variant: "destructive", onClick: v, children: "Discard Changes" }),
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
    Trigger: _R,
    Portal: RR,
    Close: (e) => jsx(QS.Close, { ...e }),
    Content: ({ overlayClassName: e, ...t }) =>
      jsxs(RR, { children: [jsx(CR, { className: e }), jsx(QS.Content, { ...t })] }),
    Header: (e) => jsx(QS.Header, { ...e }),
    Footer: (e) => jsx(QS.Footer, { ...e }),
    Title: (e) => jsx(QS.Title, { ...e }),
    Description: (e) => jsx(QS.Description, { ...e }),
    CancelButton: (e) =>
      jsx(_R, {
        asChild: true,
        children: jsx(ii, { variant: "secondary", ...e, children: e.children ?? "Cancel" }),
      }),
  },
);
const NR = oi(
    "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  ),
  AR = ({ className: e, ...t }) =>
    jsx("textarea", { className: Ka(NR({ className: e }), e), ...t });
(AR.displayName = "Textarea"), (AR.variants = NR);
var PR = "Progress",
  kR = 100,
  [TR, IR] = di(PR),
  [OR, DR] = TR(PR),
  zR = g.forwardRef((e, t) => {
    const { __scopeProgress: n, value: r = null, max: o, getValueLabel: a = jR, ...i } = e;
    (!o && 0 !== o) ||
      qR(o) ||
      console.error(
        `Invalid prop \`max\` of value \`${`${o}`}\` supplied to \`${"Progress"}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`,
      );
    const s = qR(o) ? o : kR;
    null === r ||
      UR(r, s) ||
      console.error(
        (function (e, t) {
          return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`;
        })(`${r}`, "Progress"),
      );
    const l = UR(r, s) ? r : null,
      c = BR(l) ? a(l, s) : void 0;
    return jsx(OR, {
      scope: n,
      value: l,
      max: s,
      children: jsx(gi.div, {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": BR(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": FR(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t,
      }),
    });
  });
zR.displayName = PR;
var MR = "ProgressIndicator",
  LR = g.forwardRef((e, t) => {
    const { __scopeProgress: n, ...r } = e,
      o = DR(MR, n);
    return jsx(gi.div, {
      "data-state": FR(o.value, o.max),
      "data-value": o.value ?? void 0,
      "data-max": o.max,
      ...r,
      ref: t,
    });
  });
function jR(e, t) {
  return `${Math.round((e / t) * 100)}%`;
}
function FR(e, t) {
  return null == e ? "indeterminate" : e === t ? "complete" : "loading";
}
function BR(e) {
  return "number" == typeof e;
}
function qR(e) {
  return BR(e) && !isNaN(e) && e > 0;
}
function UR(e, t) {
  return BR(e) && !isNaN(e) && e <= t && e >= 0;
}
LR.displayName = MR;
var $R = zR,
  WR = LR;
g.forwardRef(({ className: e, indicatorClassName: t, value: n, ...r }, o) =>
  jsx($R, {
    ref: o,
    className: Ka("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", e),
    ...r,
    children: jsx(WR, {
      className: Ka("h-full w-full flex-1 bg-primary transition-all", t),
      style: { transform: `translateX(-${100 - (n ?? 0)}%)` },
    }),
  }),
).displayName = $R.displayName;
var VR = "ScrollArea",
  [HR, KR] = di(VR),
  [GR, YR] = HR(VR),
  QR = g.forwardRef((e, t) => {
    const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...i } = e,
      [s, l] = g.useState(null),
      [c, u] = g.useState(null),
      [f, p] = g.useState(null),
      [h, m] = g.useState(null),
      [v, y] = g.useState(null),
      [b, w] = g.useState(0),
      [x, S] = g.useState(0),
      [E, _] = g.useState(false),
      [R, C] = g.useState(false),
      N = Qa(t, (e) => l(e)),
      A = mi(o);
    return jsx(GR, {
      scope: n,
      type: r,
      dir: A,
      scrollHideDelay: a,
      scrollArea: s,
      viewport: c,
      onViewportChange: u,
      content: f,
      onContentChange: p,
      scrollbarX: h,
      onScrollbarXChange: m,
      scrollbarXEnabled: E,
      onScrollbarXEnabledChange: _,
      scrollbarY: v,
      onScrollbarYChange: y,
      scrollbarYEnabled: R,
      onScrollbarYEnabledChange: C,
      onCornerWidthChange: w,
      onCornerHeightChange: S,
      children: jsx(gi.div, {
        dir: A,
        ...i,
        ref: N,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": b + "px",
          "--radix-scroll-area-corner-height": x + "px",
          ...e.style,
        },
      }),
    });
  });
QR.displayName = VR;
var XR = "ScrollAreaViewport",
  JR = g.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e,
      i = YR(XR, n),
      s = Qa(t, g.useRef(null), i.onViewportChange);
    return jsxs(Fragment, {
      children: [
        jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        jsx(gi.div, {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: s,
          style: {
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: jsx("div", {
            ref: i.onContentChange,
            style: { minWidth: "100%", display: "table" },
            children: r,
          }),
        }),
      ],
    });
  });
JR.displayName = XR;
var ZR = "ScrollAreaScrollbar",
  eC = g.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = YR(ZR, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o,
      s = "horizontal" === e.orientation;
    return (
      g.useEffect(
        () => (
          s ? a(true) : i(true),
          () => {
            s ? a(false) : i(false);
          }
        ),
        [s, a, i],
      ),
      "hover" === o.type
        ? jsx(tC, { ...r, ref: t, forceMount: n })
        : "scroll" === o.type
          ? jsx(nC, { ...r, ref: t, forceMount: n })
          : "auto" === o.type
            ? jsx(rC, { ...r, ref: t, forceMount: n })
            : "always" === o.type
              ? jsx(oC, { ...r, ref: t })
              : null
    );
  });
eC.displayName = ZR;
var tC = g.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = YR(ZR, e.__scopeScrollArea),
      [a, i] = g.useState(false);
    return (
      g.useEffect(() => {
        const e = o.scrollArea;
        let t = 0;
        if (e) {
          const n = () => {
              window.clearTimeout(t), i(true);
            },
            r = () => {
              t = window.setTimeout(() => i(false), o.scrollHideDelay);
            };
          return (
            e.addEventListener("pointerenter", n),
            e.addEventListener("pointerleave", r),
            () => {
              window.clearTimeout(t),
                e.removeEventListener("pointerenter", n),
                e.removeEventListener("pointerleave", r);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      jsx(Nx, {
        present: n || a,
        children: jsx(rC, { "data-state": a ? "visible" : "hidden", ...r, ref: t }),
      })
    );
  }),
  nC = g.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = YR(ZR, e.__scopeScrollArea),
      a = "horizontal" === e.orientation,
      i = EC(() => l("SCROLL_END"), 100),
      [s, l] = (function (e, t) {
        return g.useReducer((e, n) => t[e][n] ?? e, e);
      })("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" },
      });
    return (
      g.useEffect(() => {
        if ("idle" === s) {
          const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(e);
        }
      }, [s, o.scrollHideDelay, l]),
      g.useEffect(() => {
        const e = o.viewport,
          t = a ? "scrollLeft" : "scrollTop";
        if (e) {
          let n = e[t];
          const r = () => {
            const r = e[t];
            n !== r && (l("SCROLL"), i()), (n = r);
          };
          return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r);
        }
      }, [o.viewport, a, l, i]),
      jsx(Nx, {
        present: n || "hidden" !== s,
        children: jsx(oC, {
          "data-state": "hidden" === s ? "hidden" : "visible",
          ...r,
          ref: t,
          onPointerEnter: ui(e.onPointerEnter, () => l("POINTER_ENTER")),
          onPointerLeave: ui(e.onPointerLeave, () => l("POINTER_LEAVE")),
        }),
      })
    );
  }),
  rC = g.forwardRef((e, t) => {
    const n = YR(ZR, e.__scopeScrollArea),
      { forceMount: r, ...o } = e,
      [a, i] = g.useState(false),
      s = "horizontal" === e.orientation,
      l = EC(() => {
        if (n.viewport) {
          const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
            t = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(s ? e : t);
        }
      }, 10);
    return (
      _C(n.viewport, l),
      _C(n.content, l),
      jsx(Nx, {
        present: r || a,
        children: jsx(oC, { "data-state": a ? "visible" : "hidden", ...o, ref: t }),
      })
    );
  }),
  oC = g.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      o = YR(ZR, e.__scopeScrollArea),
      a = g.useRef(null),
      i = g.useRef(0),
      [s, l] = g.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      c = vC(s.viewport, s.content),
      u = {
        ...r,
        sizes: s,
        onSizesChange: l,
        hasThumb: Boolean(c > 0 && c < 1),
        onThumbChange: (e) => (a.current = e),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (e) => (i.current = e),
      };
    function f(e, t) {
      return (function (e, t, n, r = "ltr") {
        const o = yC(n),
          a = o / 2,
          i = t || a,
          s = o - i,
          l = n.scrollbar.paddingStart + i,
          c = n.scrollbar.size - n.scrollbar.paddingEnd - s,
          u = n.content - n.viewport,
          d = "ltr" === r ? [0, u] : [-1 * u, 0];
        return wC([l, c], d)(e);
      })(e, i.current, s, t);
    }
    return "horizontal" === n
      ? jsx(aC, {
          ...u,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && a.current) {
              const e = bC(o.viewport.scrollLeft, s, o.dir);
              a.current.style.transform = `translate3d(${e}px, 0, 0)`;
            }
          },
          onWheelScroll: (e) => {
            o.viewport && (o.viewport.scrollLeft = e);
          },
          onDragScroll: (e) => {
            o.viewport && (o.viewport.scrollLeft = f(e, o.dir));
          },
        })
      : "vertical" === n
        ? jsx(iC, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = bC(o.viewport.scrollTop, s);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`;
              }
            },
            onWheelScroll: (e) => {
              o.viewport && (o.viewport.scrollTop = e);
            },
            onDragScroll: (e) => {
              o.viewport && (o.viewport.scrollTop = f(e));
            },
          })
        : null;
  }),
  aC = g.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      a = YR(ZR, e.__scopeScrollArea),
      [i, s] = g.useState(),
      l = g.useRef(null),
      c = Qa(t, l, a.onScrollbarXChange);
    return (
      g.useEffect(() => {
        l.current && s(getComputedStyle(l.current));
      }, [l]),
      jsx(cC, {
        "data-orientation": "horizontal",
        ...o,
        ref: c,
        sizes: n,
        style: {
          bottom: 0,
          left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
          right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": yC(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
        onDragScroll: (t) => e.onDragScroll(t.x),
        onWheelScroll: (t, n) => {
          if (a.viewport) {
            const r = a.viewport.scrollLeft + t.deltaX;
            e.onWheelScroll(r), xC(r, n) && t.preventDefault();
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            i &&
            r({
              content: a.viewport.scrollWidth,
              viewport: a.viewport.offsetWidth,
              scrollbar: {
                size: l.current.clientWidth,
                paddingStart: gC(i.paddingLeft),
                paddingEnd: gC(i.paddingRight),
              },
            });
        },
      })
    );
  }),
  iC = g.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      a = YR(ZR, e.__scopeScrollArea),
      [i, s] = g.useState(),
      l = g.useRef(null),
      c = Qa(t, l, a.onScrollbarYChange);
    return (
      g.useEffect(() => {
        l.current && s(getComputedStyle(l.current));
      }, [l]),
      jsx(cC, {
        "data-orientation": "vertical",
        ...o,
        ref: c,
        sizes: n,
        style: {
          top: 0,
          right: "ltr" === a.dir ? 0 : void 0,
          left: "rtl" === a.dir ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": yC(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
        onDragScroll: (t) => e.onDragScroll(t.y),
        onWheelScroll: (t, n) => {
          if (a.viewport) {
            const r = a.viewport.scrollTop + t.deltaY;
            e.onWheelScroll(r), xC(r, n) && t.preventDefault();
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            i &&
            r({
              content: a.viewport.scrollHeight,
              viewport: a.viewport.offsetHeight,
              scrollbar: {
                size: l.current.clientHeight,
                paddingStart: gC(i.paddingTop),
                paddingEnd: gC(i.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [sC, lC] = HR(ZR),
  cC = g.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: o,
        onThumbChange: a,
        onThumbPointerUp: i,
        onThumbPointerDown: s,
        onThumbPositionChange: l,
        onDragScroll: c,
        onWheelScroll: u,
        onResize: f,
        ...p
      } = e,
      h = YR(ZR, n),
      [m, v] = g.useState(null),
      y = Qa(t, (e) => v(e)),
      b = g.useRef(null),
      w = g.useRef(""),
      x = h.viewport,
      S = r.content - r.viewport,
      E = yi(u),
      _ = yi(l),
      R = EC(f, 10);
    function C(e) {
      if (b.current) {
        const t = e.clientX - b.current.left,
          n = e.clientY - b.current.top;
        c({ x: t, y: n });
      }
    }
    return (
      g.useEffect(() => {
        const e = (e) => {
          const t = e.target,
            n = m?.contains(t);
          n && E(e, S);
        };
        return (
          document.addEventListener("wheel", e, { passive: false }),
          () => document.removeEventListener("wheel", e, { passive: false })
        );
      }, [x, m, S, E]),
      g.useEffect(_, [r, _]),
      _C(m, R),
      _C(h.content, R),
      jsx(sC, {
        scope: n,
        scrollbar: m,
        hasThumb: o,
        onThumbChange: yi(a),
        onThumbPointerUp: yi(i),
        onThumbPositionChange: _,
        onThumbPointerDown: yi(s),
        children: jsx(gi.div, {
          ...p,
          ref: y,
          style: { position: "absolute", ...p.style },
          onPointerDown: ui(e.onPointerDown, (e) => {
            if (0 === e.button) {
              e.target.setPointerCapture(e.pointerId),
                (b.current = m.getBoundingClientRect()),
                (w.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                h.viewport && (h.viewport.style.scrollBehavior = "auto"),
                C(e);
            }
          }),
          onPointerMove: ui(e.onPointerMove, C),
          onPointerUp: ui(e.onPointerUp, (e) => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
              (document.body.style.webkitUserSelect = w.current),
              h.viewport && (h.viewport.style.scrollBehavior = ""),
              (b.current = null);
          }),
        }),
      })
    );
  }),
  uC = "ScrollAreaThumb",
  dC = g.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = lC(uC, e.__scopeScrollArea);
    return jsx(Nx, { present: n || o.hasThumb, children: jsx(fC, { ref: t, ...r }) });
  }),
  fC = g.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e,
      a = YR(uC, n),
      i = lC(uC, n),
      { onThumbPositionChange: s } = i,
      l = Qa(t, (e) => i.onThumbChange(e)),
      c = g.useRef(void 0),
      u = EC(() => {
        c.current && (c.current(), (c.current = void 0));
      }, 100);
    return (
      g.useEffect(() => {
        const e = a.viewport;
        if (e) {
          const t = () => {
            if ((u(), !c.current)) {
              const t = SC(e, s);
              (c.current = t), s();
            }
          };
          return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
        }
      }, [a.viewport, u, s]),
      jsx(gi.div, {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r,
        },
        onPointerDownCapture: ui(e.onPointerDownCapture, (e) => {
          const t = e.target.getBoundingClientRect(),
            n = e.clientX - t.left,
            r = e.clientY - t.top;
          i.onThumbPointerDown({ x: n, y: r });
        }),
        onPointerUp: ui(e.onPointerUp, i.onThumbPointerUp),
      })
    );
  });
dC.displayName = uC;
var pC = "ScrollAreaCorner",
  hC = g.forwardRef((e, t) => {
    const n = YR(pC, e.__scopeScrollArea),
      r = Boolean(n.scrollbarX && n.scrollbarY);
    return "scroll" !== n.type && r ? jsx(mC, { ...e, ref: t }) : null;
  });
hC.displayName = pC;
var mC = g.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e,
    o = YR(pC, n),
    [a, i] = g.useState(0),
    [s, l] = g.useState(0),
    c = Boolean(a && s);
  return (
    _C(o.scrollbarX, () => {
      const e = o.scrollbarX?.offsetHeight || 0;
      o.onCornerHeightChange(e), l(e);
    }),
    _C(o.scrollbarY, () => {
      const e = o.scrollbarY?.offsetWidth || 0;
      o.onCornerWidthChange(e), i(e);
    }),
    c
      ? jsx(gi.div, {
          ...r,
          ref: t,
          style: {
            width: a,
            height: s,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function gC(e) {
  return e ? parseInt(e, 10) : 0;
}
function vC(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function yC(e) {
  const t = vC(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function bC(e, t, n = "ltr") {
  const r = yC(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    a = t.scrollbar.size - o,
    i = t.content - t.viewport,
    s = a - r,
    l = ci(e, "ltr" === n ? [0, i] : [-1 * i, 0]);
  return wC([0, i], [0, s])(l);
}
function wC(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function xC(e, t) {
  return e > 0 && e < t;
}
var SC = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const a = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== a.left,
        s = n.top !== a.top;
      (i || s) && t(), (n = a), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function EC(e, t) {
  const n = yi(e),
    r = g.useRef(0);
  return (
    g.useEffect(() => () => window.clearTimeout(r.current), []),
    g.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t));
    }, [n, t])
  );
}
function _C(e, t) {
  const n = yi(t);
  Bi(() => {
    let t = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
      });
      return (
        r.observe(e),
        () => {
          window.cancelAnimationFrame(t), r.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
var RC = QR,
  CC = JR,
  NC = hC;
const AC = g.forwardRef(({ children: e, className: t, ...n }, r) =>
  jsxs(RC, {
    ref: r,
    className: Ka("relative overflow-hidden", t),
    ...n,
    children: [
      jsx(CC, { className: "h-full w-full rounded-[inherit]", children: e }),
      jsx(PC, {}),
      jsx(NC, {}),
    ],
  }),
);
AC.displayName = RC.displayName;
const PC = g.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) =>
  jsx(eC, {
    ref: r,
    orientation: t,
    className: Ka(
      "flex touch-none select-none transition-colors",
      "vertical" === t && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      "horizontal" === t && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e,
    ),
    ...n,
    children: jsx(dC, { className: "relative flex-1 rounded-full bg-border" }),
  }),
);
PC.displayName = eC.displayName;
var kC = "horizontal",
  TC = ["horizontal", "vertical"],
  IC = g.forwardRef((e, t) => {
    const { decorative: n, orientation: r = kC, ...o } = e,
      a = (function (e) {
        return TC.includes(e);
      })(r)
        ? r
        : kC,
      i = n
        ? { role: "none" }
        : { "aria-orientation": "vertical" === a ? a : void 0, role: "separator" };
    return jsx(gi.div, { "data-orientation": a, ...i, ...o, ref: t });
  });
IC.displayName = "Separator";
var OC = IC;
const DC = g.forwardRef(
  ({ className: e, decorative: t = true, orientation: n = "horizontal", ...r }, o) =>
    jsx(OC, {
      ref: o,
      decorative: t,
      orientation: n,
      className: Ka(
        "shrink-0 bg-border",
        "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]",
        e,
      ),
      ...r,
    }),
);
DC.displayName = OC.displayName;
const zC = FS,
  MC = VS,
  LC = BS,
  jC = g.forwardRef(({ className: e, ...t }, n) =>
    jsx(qS, {
      className: Ka(
        "fixed inset-0 z-50 bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
      ref: n,
    }),
  );
jC.displayName = qS.displayName;
const FC = oi(
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
  BC = g.forwardRef(({ children: e, className: t, side: n, size: r, ...o }, a) =>
    jsxs(LC, {
      children: [
        jsx(jC, {}),
        jsxs(US, {
          ref: a,
          className: Ka(FC({ side: n, size: r }), t),
          ...o,
          children: [
            jsxs(VS, {
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
BC.displayName = US.displayName;
const qC = ({ className: e, ...t }) =>
  jsx("div", { className: Ka("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
qC.displayName = "SheetHeader";
const UC = ({ className: e, ...t }) =>
  jsx("div", {
    className: Ka("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t,
  });
UC.displayName = "SheetFooter";
const $C = g.forwardRef(({ className: e, ...t }, n) =>
  jsx($S, { ref: n, className: Ka("text-lg font-semibold text-foreground", e), ...t }),
);
$C.displayName = $S.displayName;
const WC = g.forwardRef(({ className: e, ...t }, n) =>
  jsx(WS, { ref: n, className: Ka("text-sm text-muted-foreground", e), ...t }),
);
WC.displayName = WS.displayName;
const VC = Object.assign(({ children: e, ...t }) => jsx(jS, { ...t, children: e }), {
  Trigger: zC,
  Close: MC,
  Content: BC,
  Header: qC,
  Footer: UC,
  Title: $C,
  Description: WC,
});
/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var HC = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none",
  },
};
/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KC = (e, t, n, r) => {
    const o = forwardRef(
      (
        {
          color: n = "currentColor",
          size: o = 24,
          stroke: a = 2,
          title: i,
          className: s,
          children: l,
          ...c
        },
        u,
      ) =>
        createElement(
          "svg",
          {
            ref: u,
            ...HC[e],
            width: o,
            height: o,
            className: ["tabler-icon", `tabler-icon-${t}`, s].join(" "),
            ...("filled" === e ? { fill: n } : { strokeWidth: a, stroke: n }),
            ...c,
          },
          [
            i && createElement("title", { key: "svg-title" }, i),
            ...r.map(([e, t]) => createElement(e, t)),
            ...(Array.isArray(l) ? l : [l]),
          ],
        ),
    );
    return (o.displayName = `${n}`), o;
  },
  GC = KC("outline", "menu-2", "Menu2", [
    ["path", { d: "M4 6l16 0", key: "svg-0" }],
    ["path", { d: "M4 12l16 0", key: "svg-1" }],
    ["path", { d: "M4 18l16 0", key: "svg-2" }],
  ]),
  YC = KC("outline", "x", "X", [
    ["path", { d: "M18 6l-12 12", key: "svg-0" }],
    ["path", { d: "M6 6l12 12", key: "svg-1" }],
  ]);
/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QC = ({ className: e, ...t }) =>
  jsx("div", {
    "data-slot": "skeleton",
    className: Ka("animate-pulse rounded-md bg-primary/10", e),
    ...t,
  });
var [XC, JC] = di("Tooltip", [jl]),
  ZC = jl(),
  eN = "TooltipProvider",
  tN = 700,
  nN = "tooltip.open",
  [rN, oN] = XC(eN),
  aN = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = tN,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = false,
        children: a,
      } = e,
      i = g.useRef(true),
      s = g.useRef(false),
      l = g.useRef(0);
    return (
      g.useEffect(() => {
        const e = l.current;
        return () => window.clearTimeout(e);
      }, []),
      jsx(rN, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: g.useCallback(() => {
          window.clearTimeout(l.current), (i.current = false);
        }, []),
        onClose: g.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (i.current = true), r));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: g.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: o,
        children: a,
      })
    );
  };
aN.displayName = eN;
var iN = "Tooltip",
  [sN, lN] = XC(iN),
  cN = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        disableHoverableContent: i,
        delayDuration: s,
      } = e,
      l = oN(iN, e.__scopeTooltip),
      c = ZC(t),
      [u, f] = g.useState(null),
      p = $i(),
      h = g.useRef(0),
      m = i ?? l.disableHoverableContent,
      v = s ?? l.delayDuration,
      y = g.useRef(false),
      [b, w] = ic({
        prop: r,
        defaultProp: o ?? false,
        onChange: (e) => {
          e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(nN))) : l.onClose(), a?.(e);
        },
        caller: iN,
      }),
      x = g.useMemo(() => (b ? (y.current ? "delayed-open" : "instant-open") : "closed"), [b]),
      S = g.useCallback(() => {
        window.clearTimeout(h.current), (h.current = 0), (y.current = false), w(true);
      }, [w]),
      E = g.useCallback(() => {
        window.clearTimeout(h.current), (h.current = 0), w(false);
      }, [w]),
      _ = g.useCallback(() => {
        window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            (y.current = true), w(true), (h.current = 0);
          }, v));
      }, [v, w]);
    return (
      g.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      jsx(ec, {
        ...c,
        children: jsx(sN, {
          scope: t,
          contentId: p,
          open: b,
          stateAttribute: x,
          trigger: u,
          onTriggerChange: f,
          onTriggerEnter: g.useCallback(() => {
            l.isOpenDelayedRef.current ? _() : S();
          }, [l.isOpenDelayedRef, _, S]),
          onTriggerLeave: g.useCallback(() => {
            m ? E() : (window.clearTimeout(h.current), (h.current = 0));
          }, [E, m]),
          onOpen: S,
          onClose: E,
          disableHoverableContent: m,
          children: n,
        }),
      })
    );
  };
cN.displayName = iN;
var uN = "TooltipTrigger",
  dN = g.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = lN(uN, n),
      a = oN(uN, n),
      i = ZC(n),
      s = Qa(t, g.useRef(null), o.onTriggerChange),
      l = g.useRef(false),
      c = g.useRef(false),
      u = g.useCallback(() => (l.current = false), []);
    return (
      g.useEffect(() => () => document.removeEventListener("pointerup", u), [u]),
      jsx(tc, {
        asChild: true,
        ...i,
        children: jsx(gi.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: s,
          onPointerMove: ui(e.onPointerMove, (e) => {
            "touch" !== e.pointerType &&
              (c.current ||
                a.isPointerInTransitRef.current ||
                (o.onTriggerEnter(), (c.current = true)));
          }),
          onPointerLeave: ui(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = false);
          }),
          onPointerDown: ui(e.onPointerDown, () => {
            o.open && o.onClose(),
              (l.current = true),
              document.addEventListener("pointerup", u, { once: true });
          }),
          onFocus: ui(e.onFocus, () => {
            l.current || o.onOpen();
          }),
          onBlur: ui(e.onBlur, o.onClose),
          onClick: ui(e.onClick, o.onClose),
        }),
      })
    );
  });
dN.displayName = uN;
var [fN, pN] = XC("TooltipPortal", { forceMount: void 0 }),
  hN = "TooltipContent",
  mN = g.forwardRef((e, t) => {
    const n = pN(hN, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...a } = e,
      i = lN(hN, e.__scopeTooltip);
    return jsx(Nx, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? jsx(wN, { side: o, ...a, ref: t })
        : jsx(gN, { side: o, ...a, ref: t }),
    });
  }),
  gN = g.forwardRef((e, t) => {
    const n = lN(hN, e.__scopeTooltip),
      r = oN(hN, e.__scopeTooltip),
      o = g.useRef(null),
      a = Qa(t, o),
      [i, s] = g.useState(null),
      { trigger: l, onClose: c } = n,
      u = o.current,
      { onPointerInTransitChange: f } = r,
      p = g.useCallback(() => {
        s(null), f(false);
      }, [f]),
      h = g.useCallback(
        (e, t) => {
          const n = e.currentTarget,
            r = { x: e.clientX, y: e.clientY },
            o = (function (e, t, n = 5) {
              const r = [];
              switch (t) {
                case "top":
                  r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                  break;
                case "bottom":
                  r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                  break;
                case "left":
                  r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                  break;
                case "right":
                  r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
              }
              return r;
            })(
              r,
              (function (e, t) {
                const n = Math.abs(t.top - e.y),
                  r = Math.abs(t.bottom - e.y),
                  o = Math.abs(t.right - e.x),
                  a = Math.abs(t.left - e.x);
                switch (Math.min(n, r, o, a)) {
                  case a:
                    return "left";
                  case o:
                    return "right";
                  case n:
                    return "top";
                  case r:
                    return "bottom";
                  default:
                    throw new Error("unreachable");
                }
              })(r, n.getBoundingClientRect()),
            ),
            a = (function (e) {
              const t = e.slice();
              return (
                t.sort((e, t) =>
                  e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0,
                ),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  const t = [];
                  for (let r = 0; r < e.length; r++) {
                    const n = e[r];
                    for (; t.length >= 2; ) {
                      const e = t[t.length - 1],
                        r = t[t.length - 2];
                      if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                      t.pop();
                    }
                    t.push(n);
                  }
                  t.pop();
                  const n = [];
                  for (let r = e.length - 1; r >= 0; r--) {
                    const t = e[r];
                    for (; n.length >= 2; ) {
                      const e = n[n.length - 1],
                        r = n[n.length - 2];
                      if (!((e.x - r.x) * (t.y - r.y) >= (e.y - r.y) * (t.x - r.x))) break;
                      n.pop();
                    }
                    n.push(t);
                  }
                  return (
                    n.pop(),
                    1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y
                      ? t
                      : t.concat(n)
                  );
                })(t)
              );
            })([
              ...o,
              ...(function (e) {
                const { top: t, right: n, bottom: r, left: o } = e;
                return [
                  { x: o, y: t },
                  { x: n, y: t },
                  { x: n, y: r },
                  { x: o, y: r },
                ];
              })(t.getBoundingClientRect()),
            ]);
          s(a), f(true);
        },
        [f],
      );
    return (
      g.useEffect(() => () => p(), [p]),
      g.useEffect(() => {
        if (l && u) {
          const e = (e) => h(e, u),
            t = (e) => h(e, l);
          return (
            l.addEventListener("pointerleave", e),
            u.addEventListener("pointerleave", t),
            () => {
              l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t);
            }
          );
        }
      }, [l, u, h, p]),
      g.useEffect(() => {
        if (i) {
          const e = (e) => {
            const t = e.target,
              n = { x: e.clientX, y: e.clientY },
              r = l?.contains(t) || u?.contains(t),
              o = !(function (e, t) {
                const { x: n, y: r } = e;
                let o = false;
                for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
                  const e = t[a],
                    s = t[i],
                    l = e.x,
                    c = e.y,
                    u = s.x,
                    d = s.y;
                  c > r != d > r && n < ((u - l) * (r - c)) / (d - c) + l && (o = !o);
                }
                return o;
              })(n, i);
            r ? p() : o && (p(), c());
          };
          return (
            document.addEventListener("pointermove", e),
            () => document.removeEventListener("pointermove", e)
          );
        }
      }, [l, u, i, c, p]),
      jsx(wN, { ...e, ref: a })
    );
  }),
  [vN, yN] = XC(iN, { isInside: false }),
  bN = (function (e) {
    const t = ({ children: e }) => jsx(Fragment, { children: e });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = ei), t;
  })("TooltipContent"),
  wN = g.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        ...s
      } = e,
      l = lN(hN, n),
      c = ZC(n),
      { onClose: u } = l;
    return (
      g.useEffect(
        () => (document.addEventListener(nN, u), () => document.removeEventListener(nN, u)),
        [u],
      ),
      g.useEffect(() => {
        if (l.trigger) {
          const e = (e) => {
            const t = e.target;
            t?.contains(l.trigger) && u();
          };
          return (
            window.addEventListener("scroll", e, { capture: true }),
            () => window.removeEventListener("scroll", e, { capture: true })
          );
        }
      }, [l.trigger, u]),
      jsx(_i, {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (e) => e.preventDefault(),
        onDismiss: u,
        children: jsxs(nc, {
          "data-state": l.stateAttribute,
          ...c,
          ...s,
          ref: t,
          style: {
            ...s.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
          },
          children: [
            jsx(bN, { children: r }),
            jsx(vN, {
              scope: n,
              isInside: true,
              children: jsx(uc, { id: l.contentId, role: "tooltip", children: o || r }),
            }),
          ],
        }),
      })
    );
  });
mN.displayName = hN;
var xN = "TooltipArrow";
g.forwardRef((e, t) => {
  const { __scopeTooltip: n, ...r } = e,
    o = ZC(n);
  return yN(xN, n).isInside ? null : jsx(rc, { ...o, ...r, ref: t });
}).displayName = xN;
var SN = cN,
  EN = dN,
  _N = mN;
const RN = aN,
  CN = ({ delayDuration: e = "300 millis", ...t }) =>
    jsx(SN, { ...t, delayDuration: oe.toMillis(e) });
CN.displayName = SN.displayName;
const NN = EN,
  AN = g.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    jsx(_N, {
      ref: r,
      sideOffset: t,
      className: Ka(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        e,
      ),
      ...n,
    }),
  );
AN.displayName = _N.displayName;
const PN = ({ children: e, ...t }) => jsx(RN, { children: jsx(CN, { ...t, children: e }) });
(PN.Trigger = NN), (PN.Content = AN);
const kN = g.createContext(null);
function TN() {
  const e = g.useContext(kN);
  if (null === e) throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function IN({
  children: e,
  className: t,
  defaultOpen: n = true,
  onOpenChange: r,
  open: o,
  style: a,
  ...i
}) {
  const s = (function () {
      const [e, t] = g.useState(void 0);
      return (
        g.useEffect(() => {
          const e = window.matchMedia("(max-width: 767px)"),
            n = () => {
              t(window.innerWidth < 768);
            };
          return (
            e.addEventListener("change", n),
            t(window.innerWidth < 768),
            () => {
              e.removeEventListener("change", n);
            }
          );
        }, []),
        Boolean(e)
      );
    })(),
    [l, c] = g.useState(false),
    [u, f] = g.useState(n),
    p = o ?? u,
    h = g.useCallback(
      (e) => {
        const t = "function" == typeof e ? e(p) : e;
        void 0 !== r ? r(t) : f(t),
          (document.cookie = `sidebar_state=${t}; path=/; max-age=604800`);
      },
      [r, p],
    ),
    m = g.useCallback(() => {
      s ? c((e) => !e) : h((e) => !e);
    }, [s, h, c]);
  g.useEffect(() => {
    const e = (e) => {
      "b" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), m());
    };
    return (
      window.addEventListener("keydown", e),
      () => {
        window.removeEventListener("keydown", e);
      }
    );
  }, [m]);
  const v = p ? "expanded" : "collapsed",
    y = g.useMemo(
      () => ({
        state: v,
        open: p,
        setOpen: h,
        isMobile: s,
        openMobile: l,
        setOpenMobile: c,
        toggleSidebar: m,
      }),
      [v, p, h, s, l, c, m],
    );
  return jsx(kN.Provider, {
    value: y,
    children: jsx("div", {
      "data-slot": "sidebar-wrapper",
      style: { "--sidebar-width": "16rem", "--sidebar-width-icon": "3rem", ...a },
      className: Ka(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        t,
      ),
      ...i,
      children: e,
    }),
  });
}
function ON({ className: e, ...t }) {
  return jsx("main", {
    "data-slot": "sidebar-inset",
    className: Ka(
      "bg-background relative flex w-full flex-1 flex-col",
      "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
      e,
    ),
    ...t,
  });
}
const DN = oi(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
const zN = function ({
  children: e,
  className: t,
  collapsible: n = "offcanvas",
  side: r = "left",
  variant: o = "sidebar",
  ...a
}) {
  const { isMobile: i, openMobile: s, setOpenMobile: l, state: c } = TN();
  return "none" === n
    ? jsx("div", {
        "data-slot": "sidebar",
        className: Ka(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          t,
        ),
        ...a,
        children: e,
      })
    : i
      ? jsx(VC, {
          open: s,
          onOpenChange: l,
          ...a,
          children: jsx(VC.Content, {
            "data-sidebar": "sidebar",
            "data-slot": "sidebar",
            "data-mobile": "true",
            className:
              "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
            style: { "--sidebar-width": "18rem" },
            side: r,
            children: jsx("div", { className: "flex h-full w-full flex-col", children: e }),
          }),
        })
      : jsxs("div", {
          className: "group peer text-sidebar-foreground hidden md:block",
          "data-state": c,
          "data-collapsible": "collapsed" === c ? n : "",
          "data-variant": o,
          "data-side": r,
          "data-slot": "sidebar",
          children: [
            jsx("div", {
              "data-slot": "sidebar-gap",
              className: Ka(
                "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                "floating" === o || "inset" === o
                  ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                  : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
              ),
            }),
            jsx("div", {
              "data-slot": "sidebar-container",
              className: Ka(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                "left" === r
                  ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                  : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                "floating" === o || "inset" === o
                  ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                  : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                t,
              ),
              ...a,
              children: jsx("div", {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className:
                  "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: e,
              }),
            }),
          ],
        });
};
(zN.Content = function ({ className: e, ...t }) {
  return jsx("div", {
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: Ka(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e,
    ),
    ...t,
  });
}),
  (zN.Footer = function ({ className: e, ...t }) {
    return jsx("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: Ka("flex flex-col gap-2 p-2", e),
      ...t,
    });
  }),
  (zN.Group = function ({ className: e, ...t }) {
    return jsx("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: Ka("relative flex w-full min-w-0 flex-col p-2", e),
      ...t,
    });
  }),
  (zN.GroupAction = function ({ asChild: e = false, className: t, ...n }) {
    return jsx(e ? Ja : "button", {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: Ka(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        t,
      ),
      ...n,
    });
  }),
  (zN.GroupContent = function ({ className: e, ...t }) {
    return jsx("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: Ka("w-full text-sm", e),
      ...t,
    });
  }),
  (zN.GroupLabel = function ({ asChild: e = false, className: t, ...n }) {
    return jsx(e ? Ja : "div", {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: Ka(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t,
      ),
      ...n,
    });
  }),
  (zN.Header = function ({ className: e, ...t }) {
    return jsx("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: Ka("flex flex-col gap-2 p-2", e),
      ...t,
    });
  }),
  (zN.Input = function ({ className: e, ...t }) {
    return jsx(li, {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: Ka("bg-background h-8 w-full shadow-none", e),
      ...t,
    });
  }),
  (zN.Menu = function ({ className: e, ...t }) {
    return jsx("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: Ka("flex w-full min-w-0 flex-col gap-1", e),
      ...t,
    });
  }),
  (zN.MenuAction = function ({ asChild: e = false, className: t, showOnHover: n = false, ...r }) {
    return jsx(e ? Ja : "button", {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: Ka(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        t,
      ),
      ...r,
    });
  }),
  (zN.MenuBadge = function ({ className: e, ...t }) {
    return jsx("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: Ka(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e,
      ),
      ...t,
    });
  }),
  (zN.MenuButton = function ({
    asChild: e = false,
    className: t,
    isActive: n = false,
    size: r = "default",
    tooltip: o,
    variant: a = "default",
    ...i
  }) {
    const s = e ? Ja : "button",
      { isMobile: l, state: c } = TN(),
      u = jsx(s, {
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": r,
        "data-active": n,
        className: Ka(DN({ variant: a, size: r }), t),
        ...i,
      });
    return void 0 === o
      ? u
      : ("string" == typeof o && (o = { children: o }),
        jsxs(PN, {
          children: [
            jsx(PN.Trigger, { asChild: true, children: u }),
            jsx(PN.Content, {
              side: "right",
              align: "center",
              hidden: "collapsed" !== c || l,
              ...o,
            }),
          ],
        }));
  }),
  (zN.MenuItem = function ({ className: e, ...t }) {
    return jsx("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: Ka("group/menu-item relative", e),
      ...t,
    });
  }),
  (zN.MenuSkeleton = function ({ className: e, showIcon: t = false, ...n }) {
    const r = g.useMemo(() => `${Math.floor(40 * Math.random()) + 50}%`, []);
    return jsxs("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: Ka("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && jsx(QC, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        jsx(QC, {
          className: "h-4 max-w-(--skeleton-width) flex-1",
          "data-sidebar": "menu-skeleton-text",
          style: { "--skeleton-width": r },
        }),
      ],
    });
  }),
  (zN.MenuSub = function ({ className: e, ...t }) {
    return jsx("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: Ka(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e,
      ),
      ...t,
    });
  }),
  (zN.MenuSubButton = function ({
    asChild: e = false,
    className: t,
    isActive: n = false,
    size: r = "md",
    ...o
  }) {
    return jsx(e ? Ja : "a", {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": r,
      "data-active": n,
      className: Ka(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        "sm" === r && "text-xs",
        "md" === r && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        t,
      ),
      ...o,
    });
  }),
  (zN.MenuSubItem = function ({ className: e, ...t }) {
    return jsx("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: Ka("group/menu-sub-item relative", e),
      ...t,
    });
  }),
  (zN.Provider = IN),
  (zN.Rail = function ({ className: e, ...t }) {
    const { toggleSidebar: n } = TN();
    return jsx("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: Ka(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e,
      ),
      ...t,
    });
  }),
  (zN.Separator = function ({ className: e, ...t }) {
    return jsx(DC, {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: Ka("bg-sidebar-border mx-2 w-auto", e),
      ...t,
    });
  }),
  (zN.Trigger = function ({ className: e, onClick: t, ...n }) {
    const { toggleSidebar: r } = TN();
    return jsxs(ii, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: Ka("size-7", e),
      onClick: (e) => {
        t?.(e), r();
      },
      ...n,
      children: [
        jsx(PanelLeftIcon, {}),
        jsx("span", { className: "sr-only", children: "Toggle Sidebar" }),
      ],
    });
  });
const MN = Object.assign(
  ({ className: e, ...t }) =>
    jsx("div", {
      className: "relative w-full overflow-auto",
      children: jsx("table", {
        "data-slot": "table",
        className: Ka("w-full caption-bottom text-sm", e),
        ...t,
      }),
    }),
  {
    Header: ({ className: e, ...t }) =>
      jsx("thead", { "data-slot": "table-header", className: Ka("[&_tr]:border-b", e), ...t }),
    Body: ({ className: e, ...t }) =>
      jsx("tbody", {
        "data-slot": "table-body",
        className: Ka("[&_tr:last-child]:border-0", e),
        ...t,
      }),
    Footer: ({ className: e, ...t }) =>
      jsx("tfoot", {
        "data-slot": "table-footer",
        className: Ka("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
        ...t,
      }),
    Row: ({ className: e, ...t }) =>
      jsx("tr", {
        "data-slot": "table-row",
        className: Ka(
          "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
          e,
        ),
        ...t,
      }),
    Head: ({ className: e, ...t }) =>
      jsx("th", {
        "data-slot": "table-head",
        className: Ka(
          "h-10 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          e,
        ),
        ...t,
      }),
    Cell: ({ className: e, ...t }) =>
      jsx("td", {
        "data-slot": "table-cell",
        className: Ka(
          "px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          e,
        ),
        ...t,
      }),
    Caption: ({ className: e, ...t }) =>
      jsx("caption", {
        "data-slot": "table-caption",
        className: Ka("mt-4 text-sm text-muted-foreground", e),
        ...t,
      }),
  },
);
var LN = "Tabs",
  [jN, FN] = di(LN, [oE]),
  BN = oE(),
  [qN, UN] = jN(LN),
  $N = g.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: a,
        orientation: i = "horizontal",
        dir: s,
        activationMode: l = "automatic",
        ...c
      } = e,
      u = mi(s),
      [f, p] = ic({ prop: r, onChange: o, defaultProp: a ?? "", caller: LN });
    return jsx(qN, {
      scope: n,
      baseId: $i(),
      value: f,
      onValueChange: p,
      orientation: i,
      dir: u,
      activationMode: l,
      children: jsx(gi.div, { dir: u, "data-orientation": i, ...c, ref: t }),
    });
  });
$N.displayName = LN;
var WN = "TabsList",
  VN = g.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = true, ...o } = e,
      a = UN(WN, n),
      i = BN(n);
    return jsx(pE, {
      asChild: true,
      ...i,
      orientation: a.orientation,
      dir: a.dir,
      loop: r,
      children: jsx(gi.div, { role: "tablist", "aria-orientation": a.orientation, ...o, ref: t }),
    });
  });
VN.displayName = WN;
var HN = "TabsTrigger",
  KN = g.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = false, ...a } = e,
      i = UN(HN, n),
      s = BN(n),
      l = QN(i.baseId, r),
      c = XN(i.baseId, r),
      u = r === i.value;
    return jsx(hE, {
      asChild: true,
      ...s,
      focusable: !o,
      active: u,
      children: jsx(gi.button, {
        type: "button",
        role: "tab",
        "aria-selected": u,
        "aria-controls": c,
        "data-state": u ? "active" : "inactive",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        id: l,
        ...a,
        ref: t,
        onMouseDown: ui(e.onMouseDown, (e) => {
          o || 0 !== e.button || false !== e.ctrlKey ? e.preventDefault() : i.onValueChange(r);
        }),
        onKeyDown: ui(e.onKeyDown, (e) => {
          [" ", "Enter"].includes(e.key) && i.onValueChange(r);
        }),
        onFocus: ui(e.onFocus, () => {
          const e = "manual" !== i.activationMode;
          u || o || !e || i.onValueChange(r);
        }),
      }),
    });
  });
KN.displayName = HN;
var GN = "TabsContent",
  YN = g.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e,
      s = UN(GN, n),
      l = QN(s.baseId, r),
      c = XN(s.baseId, r),
      u = r === s.value,
      f = g.useRef(u);
    return (
      g.useEffect(() => {
        const e = requestAnimationFrame(() => (f.current = false));
        return () => cancelAnimationFrame(e);
      }, []),
      jsx(Nx, {
        present: o || u,
        children: ({ present: n }) =>
          jsx(gi.div, {
            "data-state": u ? "active" : "inactive",
            "data-orientation": s.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !n,
            id: c,
            tabIndex: 0,
            ...i,
            ref: t,
            style: { ...e.style, animationDuration: f.current ? "0s" : void 0 },
            children: n && a,
          }),
      })
    );
  });
function QN(e, t) {
  return `${e}-trigger-${t}`;
}
function XN(e, t) {
  return `${e}-content-${t}`;
}
YN.displayName = GN;
var JN = VN,
  ZN = KN,
  eA = YN;
const tA = $N,
  nA = g.forwardRef(({ className: e, ...t }, n) =>
    jsx(JN, {
      ref: n,
      className: Ka(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        e,
      ),
      ...t,
    }),
  );
nA.displayName = JN.displayName;
const rA = g.forwardRef(({ className: e, ...t }, n) =>
  jsx(ZN, {
    ref: n,
    className: Ka(
      "inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      e,
    ),
    ...t,
  }),
);
rA.displayName = ZN.displayName;
const oA = g.forwardRef(({ className: e, ...t }, n) =>
  jsx(eA, {
    ref: n,
    className: Ka(
      "mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
      e,
    ),
    ...t,
  }),
);
oA.displayName = eA.displayName;
const aA = Object.assign(tA, { List: nA, Trigger: rA, Content: oA }),
  iA = ({ theme: e, ...t }) =>
    jsx(Toaster, {
      theme: e ?? "system",
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
      ...t,
    });
var sA = "Toggle",
  lA = g.forwardRef((e, t) => {
    const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e,
      [i, s] = ic({ prop: n, onChange: o, defaultProp: r ?? false, caller: sA });
    return jsx(gi.button, {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: ui(e.onClick, () => {
        e.disabled || s(!i);
      }),
    });
  });
lA.displayName = sA;
var cA = "ToggleGroup",
  [uA, dA] = di(cA, [oE]),
  fA = oE(),
  pA = g__default.forwardRef((e, t) => {
    const { type: n, ...r } = e;
    if ("single" === n) {
      return jsx(gA, { ...r, ref: t });
    }
    if ("multiple" === n) {
      return jsx(vA, { ...r, ref: t });
    }
    throw new Error(`Missing prop \`type\` expected on \`${cA}\``);
  });
pA.displayName = cA;
var [hA, mA] = uA(cA),
  gA = g__default.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...a } = e,
      [i, s] = ic({ prop: n, defaultProp: r ?? "", onChange: o, caller: cA });
    return jsx(hA, {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: g__default.useMemo(() => (i ? [i] : []), [i]),
      onItemActivate: s,
      onItemDeactivate: g__default.useCallback(() => s(""), [s]),
      children: jsx(wA, { ...a, ref: t }),
    });
  }),
  vA = g__default.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...a } = e,
      [i, s] = ic({ prop: n, defaultProp: r ?? [], onChange: o, caller: cA }),
      l = g__default.useCallback((e) => s((t = []) => [...t, e]), [s]),
      c = g__default.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
    return jsx(hA, {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: c,
      children: jsx(wA, { ...a, ref: t }),
    });
  });
pA.displayName = cA;
var [yA, bA] = uA(cA),
  wA = g__default.forwardRef((e, t) => {
    const {
        __scopeToggleGroup: n,
        disabled: r = false,
        rovingFocus: o = true,
        orientation: a,
        dir: i,
        loop: s = true,
        ...l
      } = e,
      c = fA(n),
      u = mi(i),
      f = { role: "group", dir: u, ...l };
    return jsx(yA, {
      scope: n,
      rovingFocus: o,
      disabled: r,
      children: o
        ? jsx(pE, {
            asChild: true,
            ...c,
            orientation: a,
            dir: u,
            loop: s,
            children: jsx(gi.div, { ...f, ref: t }),
          })
        : jsx(gi.div, { ...f, ref: t }),
    });
  }),
  xA = "ToggleGroupItem",
  SA = g__default.forwardRef((e, t) => {
    const n = mA(xA, e.__scopeToggleGroup),
      r = bA(xA, e.__scopeToggleGroup),
      o = fA(e.__scopeToggleGroup),
      a = n.value.includes(e.value),
      i = r.disabled || e.disabled,
      s = { ...e, pressed: a, disabled: i },
      l = g__default.useRef(null);
    return r.rovingFocus
      ? jsx(hE, {
          asChild: true,
          ...o,
          focusable: !i,
          active: a,
          ref: l,
          children: jsx(EA, { ...s, ref: t }),
        })
      : jsx(EA, { ...s, ref: t });
  });
SA.displayName = xA;
var EA = g__default.forwardRef((e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e,
      a = mA(xA, n),
      i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 },
      s = "single" === a.type ? i : void 0;
    return jsx(lA, {
      ...s,
      ...o,
      ref: t,
      onPressedChange: (e) => {
        e ? a.onItemActivate(r) : a.onItemDeactivate(r);
      },
    });
  }),
  _A = pA,
  RA = SA;
const CA = oi(
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
    {
      variants: {
        variant: {
          default: "bg-transparent",
          outline:
            "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        },
        size: { default: "h-9 px-2 min-w-9", sm: "h-8 px-1.5 min-w-8", lg: "h-10 px-2.5 min-w-10" },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  NA = g.createContext({ size: "default", variant: "default" });
function AA({ children: e, className: t, size: n, variant: r, ...o }) {
  return jsx(_A, {
    "data-slot": "toggle-group",
    "data-variant": r,
    "data-size": n,
    className: Ka(
      "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
      t,
    ),
    ...o,
    children: jsx(NA.Provider, { value: { variant: r, size: n }, children: e }),
  });
}
function PA({ children: e, className: t, size: n, variant: r, ...o }) {
  const a = g.useContext(NA);
  return jsx(RA, {
    "data-slot": "toggle-group-item",
    "data-variant": a.variant ?? r,
    "data-size": a.size ?? n,
    className: Ka(
      CA({ variant: a.variant ?? r, size: a.size ?? n }),
      "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
      t,
    ),
    ...o,
    children: e,
  });
}
const kA = ({ children: e, className: t }) => {
    const n = useRef(null),
      { scrollY: r } = useScroll({ target: n, offset: ["start start", "end start"] }),
      [o, a] = useState(false);
    return (
      useMotionValueEvent(r, "change", (e) => {
        a(e > 100);
      }),
      jsx(motion.div, {
        ref: n,
        className: Ka("sticky inset-x-0 top-4 z-40 w-full", t),
        children: g__default.Children.map(e, (e) =>
          g__default.isValidElement(e) ? g__default.cloneElement(e, { visible: o }) : e,
        ),
      })
    );
  },
  TA = ({ children: e, className: t, visible: n }) =>
    jsx(motion.div, {
      animate: {
        backdropFilter: n ? "blur(10px)" : "none",
        boxShadow: n
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: n ? "40%" : "100%",
        y: n ? 20 : 0,
      },
      transition: { type: "spring", stiffness: 200, damping: 50 },
      style: { minWidth: "800px" },
      className: Ka(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        n && "bg-white/80 dark:bg-neutral-950/80",
        t,
      ),
      children: e,
    }),
  IA = ({ children: e, className: t, visible: n }) =>
    jsx(motion.div, {
      animate: {
        backdropFilter: n ? "blur(10px)" : "none",
        boxShadow: n
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: n ? "90%" : "100%",
        paddingRight: n ? "12px" : "0px",
        paddingLeft: n ? "12px" : "0px",
        borderRadius: n ? "4px" : "2rem",
        y: n ? 20 : 0,
      },
      transition: { type: "spring", stiffness: 200, damping: 50 },
      className: Ka(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        n && "bg-white/80 dark:bg-neutral-950/80",
        t,
      ),
      children: e,
    }),
  OA = ({ children: e, className: t }) =>
    jsx("div", {
      className: Ka("flex w-full flex-row items-center justify-between", t),
      children: e,
    }),
  DA = ({ children: e, className: t, isOpen: n, onClose: r }) =>
    jsx(AnimatePresence, {
      children:
        n &&
        jsx(motion.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: Ka(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            t,
          ),
          children: e,
        }),
    }),
  zA = ({ isOpen: e, onClick: t }) =>
    jsx(e ? YC : GC, { className: "text-black dark:text-white", onClick: t }),
  MA = () =>
    jsxs("a", {
      href: "/",
      className:
        "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black",
      children: [
        jsx("img", {
          src: "/svgs/MyArtistTypeLogo.svg",
          alt: "My Artist Type Logo",
          width: 30,
          height: 30,
          className: "dark:brightness-0 dark:invert",
        }),
        jsx("span", {
          className: "font-medium text-black dark:text-white",
          children: "My Artist Type",
        }),
      ],
    }),
  LA = ({ href: e, as: t = "a", children: n, className: r, variant: o = "primary", ...a }) =>
    jsx(t, {
      href: e || void 0,
      className: Ka(
        "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center",
        {
          primary:
            "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
          secondary: "bg-transparent shadow-none dark:text-white",
          dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
          gradient:
            "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
        }[o],
        r,
      ),
      ...a,
      children: n,
    });
function jA({ children: e }) {
  const { setTheme: t, theme: n } = eo(),
    r = [
      { name: "Artist Types", link: "/artist-types", disabled: true },
      { name: "Quiz", link: "/quiz" },
      { name: "Admin", link: "/admin" },
    ],
    [o, a] = useState(false),
    [i, s] = useState(null);
  return jsxs("div", {
    className: "relative w-full",
    children: [
      jsxs(kA, {
        className: "fixed inset-x-0 top-0 z-50",
        children: [
          jsxs(TA, {
            children: [
              jsx(MA, {}),
              jsx(motion.div, {
                onMouseLeave: () => s(null),
                className:
                  "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
                children: r.map((e, t) =>
                  jsxs(
                    "a",
                    {
                      href: e.disabled ? "#" : e.link,
                      onMouseEnter: () => !e.disabled && s(t),
                      onClick: (t) => {
                        e.disabled && t.preventDefault();
                      },
                      className:
                        "relative px-4 py-2 " +
                        (e.disabled
                          ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed opacity-50"
                          : "text-neutral-600 dark:text-neutral-300"),
                      children: [
                        i === t &&
                          !e.disabled &&
                          jsx(motion.div, {
                            layoutId: "hovered",
                            className:
                              "absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800",
                          }),
                        jsx("span", { className: "relative z-20", children: e.name }),
                      ],
                    },
                    `desktop-link-${t}`,
                  ),
                ),
              }),
              jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  jsxs(PN, {
                    children: [
                      jsx(PN.Trigger, {
                        asChild: true,
                        children: jsx(LA, {
                          variant: "secondary",
                          disabled: true,
                          className: "opacity-50 cursor-not-allowed",
                          children: "Login",
                        }),
                      }),
                      jsx(PN.Content, { children: "Authentication is disabled right now" }),
                    ],
                  }),
                  jsx(LA, { variant: "primary", children: "Take the Quiz!" }),
                  jsx("div", {
                    className: "relative z-[70]",
                    children: jsx(Pd, { theme: n, setTheme: t }),
                  }),
                ],
              }),
            ],
          }),
          jsxs(IA, {
            children: [
              jsxs(OA, {
                children: [
                  jsx(MA, {}),
                  jsx(zA, {
                    isOpen: o,
                    onClick: () => {
                      a(!o);
                    },
                  }),
                ],
              }),
              jsxs(DA, {
                isOpen: o,
                onClose: () => {
                  a(false);
                },
                children: [
                  r.map((e, t) =>
                    jsx(
                      "a",
                      {
                        href: e.disabled ? "#" : e.link,
                        onClick: (t) => {
                          e.disabled ? t.preventDefault() : a(false);
                        },
                        className:
                          "relative " +
                          (e.disabled
                            ? "text-neutral-400 dark:text-neutral-600 cursor-not-allowed opacity-50"
                            : "text-neutral-600 dark:text-neutral-300"),
                        children: jsx("span", { className: "block", children: e.name }),
                      },
                      `mobile-link-${t}`,
                    ),
                  ),
                  jsxs("div", {
                    className: "flex w-full flex-col gap-4",
                    children: [
                      jsxs(PN, {
                        children: [
                          jsx(PN.Trigger, {
                            asChild: true,
                            children: jsx(LA, {
                              onClick: () => {
                                a(false);
                              },
                              variant: "primary",
                              className: "w-full opacity-50 cursor-not-allowed",
                              disabled: true,
                              children: "Login",
                            }),
                          }),
                          jsx(PN.Content, { children: "Authentication is disabled right now" }),
                        ],
                      }),
                      jsx(LA, {
                        onClick: () => {
                          a(false);
                        },
                        variant: "primary",
                        className: "w-full",
                        children: "Take the Quiz!",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e,
    ],
  });
}
const FA = ({ children: e }) =>
    jsxs("html", {
      suppressHydrationWarning: true,
      children: [
        jsx("head", { children: jsx(HeadContent, {}) }),
        jsxs("body", { suppressHydrationWarning: true, children: [e, jsx(Scripts, {})] }),
      ],
    }),
  BA = createRootRoute({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "My Artist Type" },
      ],
      links: [{ rel: "stylesheet", href: "/assets/app-Bdca8uyV.css" }],
    }),
    component: () => {
      const { theme: e } = eo(),
        t = useLocation(),
        n =
          t.pathname.startsWith("/admin") ||
          t.pathname.startsWith("/sidebar-test") ||
          t.pathname.startsWith("/sidebar-minimal-test") ||
          t.pathname.startsWith("/sidebar-simple-test");
      return jsxs(FA, {
        children: [
          jsxs(RegistryProvider, {
            children: [
              jsxs(Zr, {
                children: [
                  jsx(iA, { theme: e }),
                  n ? jsx(Outlet, {}) : jsx(jA, { children: jsx(Outlet, {}) }),
                ],
              }),
              jsx(Ra, {}),
            ],
          }),
          jsx(Ha, { position: "bottom-right" }),
        ],
      });
    },
    notFoundComponent: () => jsx("div", { children: "Not Found" }),
  }),
  qA = createFileRoute("/sidebar-test")({
    component: lazyRouteComponent(() => import("./sidebar-test-CbDU6ILf.mjs"), "component"),
  }),
  UA = createFileRoute("/responses")({
    component: lazyRouteComponent(() => import("./responses-CQX_96tT.mjs"), "component"),
  }),
  $A = createFileRoute("/radar-test")({
    component: lazyRouteComponent(() => import("./radar-test-Q4NsWRrk.mjs"), "component"),
  }),
  WA = createFileRoute("/quiz-taker")({
    component: lazyRouteComponent(() => import("./quiz-taker-nQebP2Cm.mjs"), "component"),
  }),
  VA = createFileRoute("/quiz-editor")({
    component: lazyRouteComponent(() => import("./quiz-editor-BTFC465X.mjs"), "component"),
  }),
  HA = createFileRoute("/quiz")({
    component: lazyRouteComponent(() => import("./quiz-D-Vh0Zk3.mjs"), "component"),
  }),
  KA = createFileRoute("/artist-types")({
    component: lazyRouteComponent(() => import("./artist-types-DFmC16MT.mjs"), "component"),
  }),
  GA = createFileRoute("/analysis")({
    component: lazyRouteComponent(() => import("./analysis-D7Eu8Hxf.mjs"), "component"),
  }),
  YA = createFileRoute("/admin")({
    component: lazyRouteComponent(() => import("./admin-BdgW9Bdh.mjs"), "component"),
  }),
  QA = createFileRoute("/")({
    component: lazyRouteComponent(() => import("./index-CW_UwlUR.mjs"), "component"),
    ssr: false,
  }),
  XA = createFileRoute("/admin/quiz-editor")({
    component: lazyRouteComponent(() => import("./quiz-editor-CJ65fkP4.mjs"), "component"),
  }),
  JA = createFileRoute("/admin/responses/$responseId")({
    component: lazyRouteComponent(() => import("./_responseId-CWNfPTw2.mjs"), "component"),
  }),
  ZA = createFileRoute("/admin/responses/$responseId/analysis")({
    component: lazyRouteComponent(() => import("./analysis-DfvOW2wI.mjs"), "component"),
  }),
  eP = {
    transformQueryNames: String$1.camelToSnake,
    transformResultNames: String$1.snakeToCamel,
    types: {
      114: { to: 25, from: [114], parse: identity$1, serialize: identity$1 },
      1082: { to: 25, from: [1082], parse: identity$1, serialize: identity$1 },
      1114: { to: 25, from: [1114], parse: identity$1, serialize: identity$1 },
      1184: { to: 25, from: [1184], parse: identity$1, serialize: identity$1 },
      3802: { to: 25, from: [3802], parse: identity$1, serialize: identity$1 },
    },
  },
  tP = Layer.unwrapEffect(
    Effect.gen(function* () {
      const e = yield* Config.string("ENV").pipe(Config.withDefault("production"));
      return PgClient.layer({
        url: yield* Config.redacted("DATABASE_URL"),
        ssl: "local" !== e,
        ...eP,
      });
    }),
  ).pipe((e) =>
    Layer.retry(
      e,
      Schedule.identity().pipe(
        Schedule.check((e) => "SqlError" === e._tag),
        Schedule.intersect(Schedule.exponential("1 second")),
        Schedule.intersect(Schedule.recurs(2)),
        Schedule.onDecision(([[e, t], n], r) =>
          "Continue" === r._tag
            ? Effect.logInfo(
                `Retrying database connection in ${Duration.format(t)} (attempt #${++n})`,
              )
            : Effect.void,
        ),
      ),
    ),
  ),
  nP = $o.pipe(Schema.pick("slug", "quizId", "engineId")),
  rP = $o.pipe(Schema.pick("id", "slug", "quizId", "engineId"));
class oP extends Effect.Service()("ActiveQuizRepo", {
  dependencies: [tP],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: $o,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          active_quizzes
        ORDER BY
          created_at DESC
      `,
      }),
      n = SqlSchema.single({
        Result: $o,
        Request: Schema.Struct({ slug: Schema.String }),
        execute: ({ slug: t }) => e`
        SELECT
          *
        FROM
          active_quizzes
        WHERE
          slug = ${t}
      `,
      }),
      r = SqlSchema.single({
        Result: $o,
        Request: nP,
        execute: (t) => e`
        INSERT INTO
          active_quizzes ${e.insert(t)}
        RETURNING
          *
      `,
      }),
      o = SqlSchema.single({
        Result: $o,
        Request: rP,
        execute: (t) => e`
        UPDATE active_quizzes
        SET
          ${e.update(t)}
        WHERE
          id = ${t.id}
        RETURNING
          *
      `,
      }),
      a = SqlSchema.single({
        Request: Schema.Struct({ slug: Schema.String }),
        Result: Schema.Unknown,
        execute: ({ slug: t }) => e`
        DELETE FROM active_quizzes
        WHERE
          slug = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      findBySlug: (e) =>
        n({ slug: e }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new Vo({ slug: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(r, Effect.orDie),
      update: (e) =>
        o(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new Vo({ slug: e.slug }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      deleteBySlug: (e) =>
        a({ slug: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new Vo({ slug: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
    };
  }),
}) {}
const aP = jo.pipe(
    Schema.pick(
      "version",
      "name",
      "description",
      "scoringConfig",
      "endings",
      "metadata",
      "isActive",
      "isPublished",
      "isTemp",
      "quizId",
    ),
  ),
  iP = jo.pipe(
    Schema.pick(
      "id",
      "version",
      "name",
      "description",
      "scoringConfig",
      "endings",
      "metadata",
      "isActive",
      "isPublished",
      "isTemp",
      "quizId",
    ),
  );
class sP extends Effect.Service()("AnalysisEngineRepo", {
  dependencies: [tP],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: jo,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          deleted_at IS NULL
        ORDER BY
          created_at DESC
      `,
      }),
      n = SqlSchema.single({
        Result: jo,
        Request: Schema.Struct({ id: Io }),
        execute: ({ id: t }) => e`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          id = ${t}
          AND deleted_at IS NULL
      `,
      }),
      r = SqlSchema.findAll({
        Result: jo,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          analysis_engines
        WHERE
          is_published = TRUE
          AND deleted_at IS NULL
        ORDER BY
          created_at DESC
      `,
      }),
      o = SqlSchema.single({
        Result: jo,
        Request: aP,
        execute: (t) =>
          true === t.isPublished
            ? e`
            WITH
              unpublish_others AS (
                UPDATE analysis_engines
                SET
                  is_published = FALSE
                WHERE
                  quiz_id = ${t.quizId}
                  AND is_published = TRUE
                  AND deleted_at IS NULL
              )
            INSERT INTO
              analysis_engines ${e.insert(t)}
            RETURNING
              *
          `
            : e`
          INSERT INTO
            analysis_engines ${e.insert(t)}
          RETURNING
            *
        `,
      }),
      a = SqlSchema.single({
        Result: jo,
        Request: iP,
        execute: (t) => {
          const { id: n, ...r } = t;
          return true === t.isPublished
            ? e`
            WITH
              current_engine AS (
                SELECT
                  quiz_id
                FROM
                  analysis_engines
                WHERE
                  id = ${n}
                  AND deleted_at IS NULL
              ),
              unpublish_others AS (
                UPDATE analysis_engines
                SET
                  is_published = FALSE
                WHERE
                  quiz_id = (
                    SELECT
                      quiz_id
                    FROM
                      current_engine
                  )
                  AND id != ${n}
                  AND is_published = TRUE
                  AND deleted_at IS NULL
              )
            UPDATE analysis_engines
            SET
              ${e.update(r)}
            WHERE
              id = ${n}
              AND deleted_at IS NULL
            RETURNING
              *
          `
            : e`
          UPDATE analysis_engines
          SET
            ${e.update(r)}
          WHERE
            id = ${n}
            AND deleted_at IS NULL
          RETURNING
            *
        `;
        },
      }),
      i = SqlSchema.single({
        Result: Schema.Struct({ id: Io }),
        Request: Schema.Struct({ id: Io }),
        execute: ({ id: t }) => e`
        UPDATE analysis_engines
        SET
          deleted_at = now()
        WHERE
          id = ${t}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
      }),
      s = SqlSchema.single({
        Result: Schema.Struct({ id: Io }),
        Request: Schema.Struct({ id: Io }),
        execute: ({ id: t }) => e`
        DELETE FROM analysis_engines
        WHERE
          id = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      findById: (e) =>
        n({ id: e }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new Bo({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      del: (e) =>
        i({ id: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new Bo({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      hardDelete: (e) =>
        s({ id: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new Bo({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (e) =>
        a(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new Bo({ id: e.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(o, Effect.orDie),
      findPublished: flow$1(r, Effect.orDie),
    };
  }),
}) {}
const lP = sa.pipe(
    Schema.pick(
      "engineId",
      "engineVersion",
      "responseId",
      "endingResults",
      "metadata",
      "analyzedAt",
    ),
  ),
  cP = sa.pipe(
    Schema.pick(
      "id",
      "engineId",
      "engineVersion",
      "responseId",
      "endingResults",
      "metadata",
      "analyzedAt",
    ),
  );
class uP extends Effect.Service()("AnalysisRepo", {
  dependencies: [tP],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: sa,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          analysis_results
        WHERE
          deleted_at IS NULL
        ORDER BY
          analyzed_at DESC
      `,
      }),
      n = SqlSchema.single({
        Result: sa,
        Request: Schema.Struct({ id: Oo }),
        execute: ({ id: t }) => e`
        SELECT
          *
        FROM
          analysis_results
        WHERE
          id = ${t}
          AND deleted_at IS NULL
      `,
      }),
      r = SqlSchema.findAll({
        Result: sa,
        Request: Schema.Struct({ responseId: Ko }),
        execute: ({ responseId: t }) => e`
        SELECT
          *
        FROM
          analysis_results
        WHERE
          response_id = ${t}
          AND deleted_at IS NULL
        ORDER BY
          analyzed_at DESC
      `,
      }),
      o = SqlSchema.findAll({
        Result: sa,
        Request: Schema.Struct({ engineId: Io }),
        execute: ({ engineId: t }) => e`
        SELECT
          *
        FROM
          analysis_results
        WHERE
          engine_id = ${t}
          AND deleted_at IS NULL
        ORDER BY
          analyzed_at DESC
      `,
      }),
      a = SqlSchema.single({
        Result: sa,
        Request: Schema.Struct({ engineId: Io, responseId: Ko }),
        execute: ({ engineId: t, responseId: n }) => e`
        SELECT
          *
        FROM
          analysis_results
        WHERE
          response_id = ${n}
          AND engine_id = ${t}
          AND deleted_at IS NULL
      `,
      }),
      i = SqlSchema.single({
        Result: sa,
        Request: lP,
        execute: (t) => e`
        INSERT INTO
          analysis_results ${e.insert(t)}
        RETURNING
          *
      `,
      }),
      s = SqlSchema.single({
        Result: sa,
        Request: Schema.Struct({
          id: Schema.optional(Oo),
          engineId: Io,
          engineSlug: Schema.String,
          engineVersion: Schema.String,
          responseId: Ko,
          endingResults: Schema.parseJson(Schema.Array(Schema.Any)),
          metadata: Schema.optional(Schema.NullOr(Schema.parseJson(Schema.Any))),
          analyzedAt: Schema.String,
          createdAt: Schema.optional(Schema.String),
        }),
        execute: (t) => {
          const { createdAt: n, ...r } = t;
          return void 0 !== n
            ? e`
            INSERT INTO
              analysis_results (
                id,
                engine_id,
                engine_slug,
                engine_version,
                response_id,
                ending_results,
                metadata,
                analyzed_at,
                created_at,
                updated_at
              )
            VALUES
              (
                ${r.id ?? null},
                ${r.engineId},
                ${r.engineSlug},
                ${r.engineVersion},
                ${r.responseId},
                ${r.endingResults},
                ${r.metadata ?? null},
                ${r.analyzedAt},
                ${n},
                ${n}
              )
            RETURNING
              *
          `
            : e`
          INSERT INTO
            analysis_results ${e.insert(r)}
          RETURNING
            *
        `;
        },
      }),
      l = SqlSchema.single({
        Result: sa,
        Request: cP,
        execute: (t) => {
          const { id: n, ...r } = t;
          return e`
          UPDATE analysis_results
          SET
            ${e.update(r)}
          WHERE
            id = ${n}
            AND deleted_at IS NULL
          RETURNING
            *
        `;
        },
      }),
      c = SqlSchema.single({
        Result: Schema.Struct({ id: Oo }),
        Request: Schema.Struct({ id: Oo }),
        execute: ({ id: t }) => e`
        UPDATE analysis_results
        SET
          deleted_at = now()
        WHERE
          id = ${t}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
      }),
      u = SqlSchema.single({
        Result: Schema.Struct({ id: Oo }),
        Request: Schema.Struct({ id: Oo }),
        execute: ({ id: t }) => e`
        DELETE FROM analysis_results
        WHERE
          id = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      findById: (e) =>
        n({ id: e }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new fa({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      findByResponseId: (e) =>
        r({ responseId: e }).pipe(
          Effect.catchTags({ ParseError: Effect.die, SqlError: Effect.die }),
        ),
      findByEngineId: (e) =>
        o({ engineId: e }).pipe(Effect.catchTags({ ParseError: Effect.die, SqlError: Effect.die })),
      findByResponseAndEngine: (e, t) =>
        a({ responseId: e, engineId: t }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new ha({ responseId: e, engineId: t }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      del: (e) =>
        c({ id: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new fa({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      hardDelete: (e) =>
        u({ id: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new fa({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (e) =>
        l(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new fa({ id: e.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(i, Effect.orDie),
      insert: flow$1(s, Effect.orDie),
    };
  }),
}) {}
class dP extends Effect.Service()("QuestionService", {
  effect: Effect.succeed({
    create: (e) =>
      Effect.gen(function* () {
        return {
          id: e.id ?? (yield* Effect.sync(() => crypto.randomUUID())),
          order: e.order,
          title: e.title,
          subtitle: e.subtitle,
          description: e.description,
          data: e.data,
          metadata: e.metadata ?? null,
        };
      }),
    createMany: (e) =>
      Effect.all(
        e.map((e) =>
          Effect.gen(function* () {
            return {
              id: e.id ?? (yield* Effect.sync(() => crypto.randomUUID())),
              order: e.order,
              title: e.title,
              subtitle: e.subtitle,
              description: e.description,
              data: e.data,
              metadata: e.metadata ?? null,
            };
          }),
        ),
      ),
    update: (e) =>
      Effect.gen(function* () {
        if (void 0 === e.id)
          return yield* Effect.fail(new Error("Question ID is required for updates"));
        return {
          id: e.id,
          order: e.order,
          title: e.title,
          subtitle: e.subtitle,
          description: e.description,
          data: e.data,
          metadata: e.metadata ?? null,
        };
      }),
  }),
}) {}
const fP = Ao.pipe(
    Schema.pick(
      "title",
      "subtitle",
      "description",
      "questions",
      "metadata",
      "version",
      "isPublished",
      "isTemp",
    ),
  ),
  pP = Ao.pipe(
    Schema.pick(
      "id",
      "version",
      "title",
      "subtitle",
      "description",
      "questions",
      "metadata",
      "isPublished",
      "isTemp",
    ),
  );
class hP extends Effect.Service()("QuizzesRepo", {
  dependencies: [tP],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: Ao,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          quizzes
        WHERE
          deleted_at IS NULL
      `,
      }),
      n = SqlSchema.single({
        Result: Ao,
        Request: Schema.Struct({ id: Ro }),
        execute: ({ id: t }) => e`
        SELECT
          *
        FROM
          quizzes
        WHERE
          id = ${t}
          AND deleted_at IS NULL
      `,
      }),
      r = SqlSchema.findAll({
        Result: Ao,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          quizzes
        WHERE
          is_published = TRUE
          AND deleted_at IS NULL
        ORDER BY
          created_at DESC
      `,
      }),
      o = SqlSchema.single({
        Result: Ao,
        Request: fP,
        execute: (t) => e`
          INSERT INTO
            quizzes ${e.insert(t)}
          RETURNING
            *
        `,
      }),
      a = SqlSchema.single({
        Result: Ao,
        Request: pP,
        execute: (t) => e`
          UPDATE quizzes
          SET
            ${e.update(t)}
          WHERE
            id = ${t.id}
            AND deleted_at IS NULL
          RETURNING
            *
        `,
      }),
      i = SqlSchema.single({
        Request: Ro,
        Result: Schema.Unknown,
        execute: (t) => e`
        UPDATE quizzes
        SET
          deleted_at = now()
        WHERE
          id = ${t}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
      }),
      s = SqlSchema.single({
        Request: Ro,
        Result: Schema.Unknown,
        execute: (t) => e`
        DELETE FROM quizzes
        WHERE
          id = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      findPublished: flow$1(r, Effect.orDie),
      findById: (e) =>
        n({ id: e }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new ko({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      del: (e) =>
        i(e).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new ko({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      hardDelete: (e) =>
        s(e).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new ko({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (e) =>
        a(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new ko({ id: e.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(o, Effect.orDie),
    };
  }),
}) {}
const mP = Jo.pipe(
    Schema.pick("quizId", "answers", "sessionMetadata", "interactionLogs", "metadata"),
  ),
  gP = Jo.pipe(
    Schema.pick("id", "quizId", "answers", "sessionMetadata", "interactionLogs", "metadata"),
  );
class vP extends Effect.Service()("ResponsesRepo", {
  dependencies: [tP],
  effect: Effect.gen(function* () {
    const e = yield* SqlClient.SqlClient,
      t = SqlSchema.findAll({
        Result: Jo,
        Request: Schema.Void,
        execute: () => e`
        SELECT
          *
        FROM
          responses
        WHERE
          deleted_at IS NULL
      `,
      }),
      n = SqlSchema.findAll({
        Result: Jo,
        Request: Schema.Struct({ quizId: Ro }),
        execute: ({ quizId: t }) => e`
        SELECT
          *
        FROM
          responses
        WHERE
          quiz_id = ${t}
          AND deleted_at IS NULL
      `,
      }),
      r = SqlSchema.single({
        Result: Jo,
        Request: Schema.Struct({ id: Ko }),
        execute: ({ id: t }) => e`
        SELECT
          *
        FROM
          responses
        WHERE
          id = ${t}
          AND deleted_at IS NULL
      `,
      }),
      o = SqlSchema.single({
        Result: Jo,
        Request: mP,
        execute: (t) => e`
        INSERT INTO
          responses ${e.insert(t)}
        RETURNING
          *
      `,
      }),
      a = SqlSchema.single({
        Result: Jo,
        Request: Schema.Struct({
          id: Schema.optional(Ko),
          quizId: Ro,
          answers: Schema.optional(Schema.parseJson(Schema.Array(Schema.Any))),
          sessionMetadata: Schema.parseJson(Schema.Any),
          interactionLogs: Schema.optional(Schema.parseJson(Schema.Array(Schema.Any))),
          metadata: Schema.optional(Schema.NullOr(Schema.parseJson(Schema.Any))),
          createdAt: Schema.optional(Schema.String),
        }),
        execute: (t) => {
          const { createdAt: n, ...r } = t;
          return void 0 !== n
            ? e`
            INSERT INTO
              responses (
                id,
                quiz_id,
                answers,
                session_metadata,
                interaction_logs,
                metadata,
                created_at,
                updated_at
              )
            VALUES
              (
                ${r.id ?? null},
                ${r.quizId},
                ${r.answers ?? null},
                ${r.sessionMetadata},
                ${r.interactionLogs ?? null},
                ${r.metadata ?? null},
                ${n},
                ${n}
              )
            RETURNING
              *
          `
            : e`
          INSERT INTO
            responses ${e.insert(r)}
          RETURNING
            *
        `;
        },
      }),
      i = SqlSchema.single({
        Result: Jo,
        Request: gP,
        execute: (t) => {
          const { id: n, ...r } = t;
          return e`
          UPDATE responses
          SET
            ${e.update(r)}
          WHERE
            id = ${n}
            AND deleted_at IS NULL
          RETURNING
            *
        `;
        },
      }),
      s = SqlSchema.single({
        Result: Schema.Struct({ id: Ko }),
        Request: Schema.Struct({ id: Ko }),
        execute: ({ id: t }) => e`
        UPDATE responses
        SET
          deleted_at = now()
        WHERE
          id = ${t}
          AND deleted_at IS NULL
        RETURNING
          id
      `,
      }),
      l = SqlSchema.single({
        Result: Schema.Struct({ id: Ko }),
        Request: Schema.Struct({ id: Ko }),
        execute: ({ id: t }) => e`
        DELETE FROM responses
        WHERE
          id = ${t}
        RETURNING
          id
      `,
      });
    return {
      findAll: flow$1(t, Effect.orDie),
      findByQuizId: (e) =>
        n({ quizId: e }).pipe(Effect.catchTags({ ParseError: Effect.die, SqlError: Effect.die })),
      findById: (e) =>
        r({ id: e }).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new ra({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      del: (e) =>
        s({ id: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new ra({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      hardDelete: (e) =>
        l({ id: e }).pipe(
          Effect.asVoid,
          Effect.catchTags({
            NoSuchElementException: () => new ra({ id: e }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      update: (e) =>
        i(e).pipe(
          Effect.catchTags({
            NoSuchElementException: () => new ra({ id: e.id }),
            ParseError: Effect.die,
            SqlError: Effect.die,
          }),
        ),
      create: flow$1(o, Effect.orDie),
      insert: flow$1(a, Effect.orDie),
    };
  }),
}) {}
const yP = HttpApiBuilder.group(ya, "ActiveQuizzes", (e) =>
    Effect.gen(function* () {
      const t = yield* oP;
      return e
        .handle("list", () => t.findAll())
        .handle("bySlug", ({ payload: e }) => t.findBySlug(e.slug))
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            return void 0 !== e.id
              ? yield* t.update({ id: e.id, slug: e.slug, quizId: e.quizId, engineId: e.engineId })
              : yield* t.create({ slug: e.slug, quizId: e.quizId, engineId: e.engineId });
          }),
        )
        .handle("delete", ({ payload: e }) => t.deleteBySlug(e.slug));
    }),
  ).pipe(Layer.provide([oP.Default])),
  bP = HttpApiBuilder.group(ya, "AnalysisEngine", (e) =>
    Effect.gen(function* () {
      const t = yield* sP;
      return e
        .handle("list", () => t.findAll())
        .handle("listPublished", () => t.findPublished())
        .handle("byId", ({ payload: e }) => t.findById(e.id))
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            return void 0 === e.quizId
              ? yield* Effect.fail(new Bo({ id: "unknown" }))
              : void 0 !== e.id
                ? yield* t
                    .update({
                      id: e.id,
                      version: e.version ?? new lo({ semver: "1.0.0", comment: "Updated" }),
                      name: e.name,
                      description: e.description ?? void 0,
                      scoringConfig: e.scoringConfig,
                      endings: e.endings,
                      metadata: e.metadata ?? void 0,
                      isActive: e.isActive ?? true,
                      isPublished: e.isPublished ?? false,
                      isTemp: e.isTemp ?? false,
                      quizId: e.quizId,
                    })
                    .pipe(Effect.catchTag("AnalysisEngineNotFoundError", (e) => Effect.fail(e)))
                : yield* t.create({
                    version: e.version ?? new lo({ semver: "1.0.0", comment: "Initial version" }),
                    name: e.name,
                    description: e.description ?? void 0,
                    scoringConfig: e.scoringConfig,
                    endings: e.endings,
                    metadata: e.metadata ?? void 0,
                    isActive: e.isActive ?? true,
                    isPublished: e.isPublished ?? false,
                    isTemp: e.isTemp ?? false,
                    quizId: e.quizId,
                  });
          }),
        )
        .handle("delete", ({ payload: e }) => t.del(e.id));
    }),
  ).pipe(Layer.provide(sP.Default)),
  wP = HttpApiBuilder.group(ya, "Analysis", (e) =>
    Effect.gen(function* () {
      const t = yield* uP,
        n = yield* sP,
        r = yield* va,
        o = yield* hP,
        a = yield* vP;
      return e
        .handle("analyze", ({ payload: e }) =>
          Effect.gen(function* () {
            const { engineId: i, request: s } = e,
              l = yield* n.findById(i),
              c = yield* a.findById(s.responseId),
              u = yield* o.findById(c.quizId),
              d = yield* r
                .analyzeResponse(l, u, c)
                .pipe(
                  Effect.catchAll((e) =>
                    Effect.fail(
                      new pa({ responseId: s.responseId, engineId: i, reason: String(e) }),
                    ),
                  ),
                );
            return yield* t.create(d);
          }),
        )
        .handle("batchAnalyze", ({ payload: e }) =>
          Effect.gen(function* () {
            const { engineId: i, request: s } = e,
              l = yield* n.findById(i);
            return yield* Effect.forEach(s.responseIds, (e) =>
              Effect.gen(function* () {
                const n = yield* a.findById(e),
                  s = yield* o.findById(n.quizId),
                  c = yield* r
                    .analyzeResponse(l, s, n)
                    .pipe(
                      Effect.catchAll((t) =>
                        Effect.fail(new pa({ responseId: e, engineId: i, reason: String(t) })),
                      ),
                    );
                return yield* t.create(c);
              }),
            );
          }),
        )
        .handle("list", () => t.findAll())
        .handle("getById", ({ payload: e }) => t.findById(e.id))
        .handle("getByEngine", ({ payload: e }) => t.findByEngineId(e.engineId))
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            return void 0 !== e.id
              ? yield* t.update({
                  id: e.id,
                  engineId: e.engineId,
                  engineVersion: e.engineVersion,
                  responseId: e.responseId,
                  endingResults: e.endingResults,
                  metadata: e.metadata,
                  analyzedAt: e.analyzedAt,
                })
              : yield* t.create({
                  engineId: e.engineId,
                  engineVersion: e.engineVersion,
                  responseId: e.responseId,
                  endingResults: e.endingResults,
                  metadata: e.metadata,
                  analyzedAt: e.analyzedAt,
                });
          }),
        )
        .handle("getAnalysis", ({ payload: e }) => t.findByResponseId(e.responseId))
        .handle("getAnalysisSummary", ({ payload: e }) =>
          Effect.gen(function* () {
            const r = yield* t.findByEngineId(e.engineId),
              o = yield* n.findById(e.engineId),
              a = r.length,
              i = new Map();
            r.forEach((e) => {
              e.endingResults.forEach((e) => {
                const t = i.get(e.endingId) ?? { count: 0, totalPoints: 0, totalPercentage: 0 };
                i.set(e.endingId, {
                  count: t.count + 1,
                  totalPoints: t.totalPoints + e.points,
                  totalPercentage: t.totalPercentage + e.percentage,
                });
              });
            });
            const s = Array.from(i.entries()).map(([e, t]) => ({
                endingId: e,
                count: t.count,
                percentage: (t.count / a) * 100,
                averagePoints: t.totalPoints / t.count,
                averagePercentage: t.totalPercentage / t.count,
              })),
              l = yield* DateTime.now;
            return {
              engineId: e.engineId,
              engineVersion: o.version,
              totalResponses: a,
              endingDistribution: s,
              generatedAt: l,
            };
          }),
        )
        .handle("deleteAnalysis", ({ payload: e }) => t.del(e.id));
    }),
  ).pipe(Layer.provide([uP.Default, sP.Default, va.Default, hP.Default, vP.Default])),
  xP = HttpApiBuilder.group(ya, "Quizzes", (e) =>
    Effect.gen(function* () {
      const t = yield* hP,
        n = yield* dP;
      return e
        .handle("list", () => t.findAll())
        .handle("listPublished", () => t.findPublished())
        .handle("byId", ({ payload: e }) => t.findById(e.id))
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            const r = void 0 !== e.questions ? yield* n.createMany(e.questions) : void 0;
            return void 0 !== e.id
              ? yield* t.update({
                  id: e.id,
                  title: e.title,
                  subtitle: e.subtitle,
                  description: e.description,
                  version: e.version,
                  questions: r,
                  metadata: e.metadata,
                  isPublished: e.isPublished ?? false,
                  isTemp: e.isTemp ?? false,
                })
              : yield* t.create({
                  title: e.title,
                  subtitle: e.subtitle,
                  description: e.description,
                  version: e.version,
                  questions: r ?? [],
                  metadata: e.metadata,
                  isPublished: e.isPublished ?? false,
                  isTemp: e.isTemp ?? false,
                });
          }),
        )
        .handle("delete", ({ payload: e }) => t.del(e.id));
    }),
  ).pipe(Layer.provide([hP.Default, dP.Default])),
  SP = HttpApiBuilder.group(ya, "Responses", (e) =>
    Effect.gen(function* () {
      const t = yield* vP;
      return e
        .handle("list", () => t.findAll())
        .handle("byId", ({ payload: e }) => t.findById(e.id))
        .handle("byQuiz", ({ payload: e }) => t.findByQuizId(e.quizId))
        .handle("upsert", ({ payload: e }) =>
          Effect.gen(function* () {
            return void 0 !== e.id
              ? yield* t.update({
                  id: e.id,
                  quizId: e.quizId,
                  answers: e.answers,
                  sessionMetadata: e.sessionMetadata,
                  interactionLogs: e.interactionLogs,
                  metadata: e.metadata,
                })
              : yield* t.create({
                  quizId: e.quizId,
                  answers: e.answers,
                  sessionMetadata: e.sessionMetadata,
                  interactionLogs: e.interactionLogs,
                  metadata: e.metadata,
                });
          }),
        )
        .handle("delete", ({ payload: e }) => t.del(e.id));
    }),
  ).pipe(Layer.provide(vP.Default)),
  EP = HttpLayerRouter.addHttpApi(ya, { openapiPath: "/api/docs/openapi.json" }).pipe(
    Layer.provide([yP, xP, SP, bP, wP]),
    Layer.provide(HttpServer.layerContext),
  ),
  _P = HttpLayerRouter.use((e) => e.add("GET", "/api/health", HttpServerResponse.text("OK"))),
  RP = HttpApiScalar.layerHttpLayerRouter({ api: ya, path: "/api/docs" }),
  CP = HttpLayerRouter.cors({
    allowedOrigins: ["*"],
    allowedMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "B3", "traceparent"],
    credentials: true,
  }),
  NP = Layer.mergeAll(EP, _P, RP, CP),
  { dispose: AP, handler: PP } = HttpLayerRouter.toWebHandler(NP);
process.on("SIGINT", () => {
  AP().then(
    () => {
      process.exit(0);
    },
    () => {
      process.exit(1);
    },
  );
});
const kP = async ({ request: e }) => PP(e),
  TP = Gr().methods({ GET: kP, POST: kP, PUT: kP, PATCH: kP, DELETE: kP, OPTIONS: kP }),
  IP = Yr(),
  OP = qA.update({ id: "/sidebar-test", path: "/sidebar-test", getParentRoute: () => BA }),
  DP = UA.update({ id: "/responses", path: "/responses", getParentRoute: () => BA }),
  zP = $A.update({ id: "/radar-test", path: "/radar-test", getParentRoute: () => BA }),
  MP = WA.update({ id: "/quiz-taker", path: "/quiz-taker", getParentRoute: () => BA }),
  LP = VA.update({ id: "/quiz-editor", path: "/quiz-editor", getParentRoute: () => BA }),
  jP = HA.update({ id: "/quiz", path: "/quiz", getParentRoute: () => BA }),
  FP = KA.update({ id: "/artist-types", path: "/artist-types", getParentRoute: () => BA }),
  BP = GA.update({ id: "/analysis", path: "/analysis", getParentRoute: () => BA }),
  qP = YA.update({ id: "/admin", path: "/admin", getParentRoute: () => BA }),
  UP = QA.update({ id: "/", path: "/", getParentRoute: () => BA }),
  $P = XA.update({ id: "/quiz-editor", path: "/quiz-editor", getParentRoute: () => qP }),
  WP = JA.update({
    id: "/responses/$responseId",
    path: "/responses/$responseId",
    getParentRoute: () => qP,
  }),
  VP = ZA.update({ id: "/analysis", path: "/analysis", getParentRoute: () => WP }),
  HP = TP.update({ id: "/api/$", path: "/api/$", getParentRoute: () => IP }),
  KP = { AdminResponsesResponseIdAnalysisRoute: VP },
  GP = { AdminQuizEditorRoute: $P, AdminResponsesResponseIdRoute: WP._addFileChildren(KP) },
  YP = {
    IndexRoute: UP,
    AdminRoute: qP._addFileChildren(GP),
    AnalysisRoute: BP,
    ArtistTypesRoute: FP,
    QuizRoute: jP,
    QuizEditorRoute: LP,
    QuizTakerRoute: MP,
    RadarTestRoute: zP,
    ResponsesRoute: DP,
    SidebarTestRoute: OP,
  },
  QP = BA._addFileChildren(YP)._addFileTypes(),
  XP = { ApiSplatServerRoute: HP },
  JP = IP._addFileChildren(XP)._addFileTypes(),
  ZP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, routeTree: QP, serverRouteTree: JP },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
const ek = (function ({ createRouter: e }) {
    let t,
      n = null,
      r = null;
    return (o) => {
      const a = globalThis.fetch,
        i = async ({ request: s }) => {
          globalThis.fetch = async function (e, t) {
            function n(e, t) {
              const n = new Request(e, t);
              return i({ request: n });
            }
            function r() {
              return s.headers.get("Origin") || s.headers.get("Referer") || "http://localhost";
            }
            if ("string" == typeof e && e.startsWith("/")) {
              return n(new URL(e, r()), t);
            }
            if (
              "object" == typeof e &&
              "url" in e &&
              "string" == typeof e.url &&
              e.url.startsWith("/")
            ) {
              return n(new URL(e.url, r()), t);
            }
            return a(e, t);
          };
          const l = new URL(s.url),
            c = l.href.replace(l.origin, ""),
            u = await e(),
            d = ft({ initialEntries: [c] }),
            f = "true" === process.env.TSS_PRERENDERING;
          let p = "true" === process.env.TSS_SHELL;
          f && !p && (p = "true" === s.headers.get(Wr)),
            u.update({ history: d, isShell: p, isPrerendering: f });
          const h = await (async () => {
            try {
              0;
              const i = Et(["/", ((e = "/_serverFn"), Ct(Rt(e))), "/"]);
              if (c.startsWith(i))
                return await (async ({ request: e }) => {
                  const t = new AbortController(),
                    n = t.signal,
                    r = () => t.abort();
                  e.signal.addEventListener("abort", r);
                  const o = e.method,
                    a = new URL(e.url, "http://localhost:3000"),
                    i = new RegExp(`${((s = "/_serverFn"), s.replace(/^\/|\/$/g, ""))}/([^/?#]+)`);
                  var s;
                  const l = a.pathname.match(i),
                    c = l ? l[1] : null,
                    u = Object.fromEntries(a.searchParams.entries()),
                    d = "createServerFn" in u;
                  if ("string" != typeof c)
                    throw new Error("Invalid server action param for serverFnId: " + c);
                  const f = await qr(c),
                    p = ["multipart/form-data", "application/x-www-form-urlencoded"],
                    h = await (async () => {
                      try {
                        let t = await (async () => {
                          if (
                            e.headers.get("Content-Type") &&
                            p.some((t) => {
                              var n;
                              return null == (n = e.headers.get("Content-Type"))
                                ? void 0
                                : n.includes(t);
                            })
                          )
                            return (
                              wt(
                                "get" !== o.toLowerCase(),
                                "GET requests with FormData payloads are not supported",
                              ),
                              await f(await e.formData(), n)
                            );
                          if ("get" === o.toLowerCase()) {
                            let e = u;
                            return d && (e = u.payload), (e = e ? await Ur(e) : e), await f(e, n);
                          }
                          const t = await e.text(),
                            r = await Ur(t);
                          return d ? await f(r, n) : await f(...r, n);
                        })();
                        return t.result instanceof Response
                          ? t.result
                          : !d && ((t = t.result), t instanceof Response)
                            ? t
                            : zt(t)
                              ? $r(t)
                              : new Response(void 0 !== t ? qt.stringify(t) : void 0, {
                                  status: Dr(Tr()),
                                  headers: { "Content-Type": "application/json" },
                                });
                      } catch (t) {
                        return t instanceof Response
                          ? t
                          : zt(t)
                            ? $r(t)
                            : (console.info(),
                              console.info("Server Fn Error!"),
                              console.info(),
                              console.error(t),
                              console.info(),
                              new Response(qt.stringify(t), {
                                status: 500,
                                headers: { "Content-Type": "application/json" },
                              }));
                      }
                    })();
                  return e.signal.removeEventListener("abort", r), h;
                })({ request: s });
              if (null === n)
                try {
                  (n = await Fr(Mr)),
                    n.serverRouteTree &&
                      (t = (function ({ routeTree: e, initRoute: t }) {
                        const n = {},
                          r = {},
                          o = (e) => {
                            e.forEach((e, a) => {
                              if (
                                (null == t || t(e, a),
                                wt(!n[e.id], `Duplicate routes found with id: ${String(e.id)}`),
                                (n[e.id] = e),
                                !e.isRoot && e.path)
                              ) {
                                const t = Ct(e.fullPath);
                                (r[t] && !e.fullPath.endsWith("/")) || (r[t] = e);
                              }
                              const i = e.children;
                              (null == i ? void 0 : i.length) && o(i);
                            });
                          };
                        o([e]);
                        const a = [];
                        Object.values(n).forEach((e, t) => {
                          var n;
                          if (e.isRoot || !e.path) return;
                          const r = Rt(e.fullPath);
                          let o = Nt(r),
                            i = 0;
                          for (
                            ;
                            o.length > i + 1 && "/" === (null == (n = o[i]) ? void 0 : n.value);

                          )
                            i++;
                          i > 0 && (o = o.slice(i));
                          let s = 0,
                            l = !1;
                          const c = o.map((e, t) => {
                            if ("/" === e.value) return 0.75;
                            let n;
                            if (
                              (1 === e.type
                                ? (n = 0.5)
                                : 3 === e.type
                                  ? ((n = 0.4), s++)
                                  : 2 === e.type && (n = 0.25),
                              n)
                            ) {
                              for (let r = t + 1; r < o.length; r++) {
                                const t = o[r];
                                if (0 === t.type && "/" !== t.value)
                                  return (l = !0), Bt(e, n + 0.2);
                              }
                              return Bt(e, n);
                            }
                            return 1;
                          });
                          a.push({
                            child: e,
                            trimmed: r,
                            parsed: o,
                            index: t,
                            scores: c,
                            optionalParamCount: s,
                            hasStaticAfter: l,
                          });
                        });
                        const i = a
                          .sort((e, t) => {
                            const n = Math.min(e.scores.length, t.scores.length);
                            for (let r = 0; r < n; r++)
                              if (e.scores[r] !== t.scores[r]) return t.scores[r] - e.scores[r];
                            if (e.scores.length !== t.scores.length) {
                              if (e.optionalParamCount !== t.optionalParamCount) {
                                if (e.hasStaticAfter === t.hasStaticAfter)
                                  return e.optionalParamCount - t.optionalParamCount;
                                if (e.hasStaticAfter && !t.hasStaticAfter) return -1;
                                if (!e.hasStaticAfter && t.hasStaticAfter) return 1;
                              }
                              return t.scores.length - e.scores.length;
                            }
                            for (let r = 0; r < n; r++)
                              if (e.parsed[r].value !== t.parsed[r].value)
                                return e.parsed[r].value > t.parsed[r].value ? 1 : -1;
                            return e.index - t.index;
                          })
                          .map((e, t) => ((e.child.rank = t), e.child));
                        return { routesById: n, routesByPath: r, flatRoutes: i };
                      })({
                        routeTree: n.serverRouteTree,
                        initRoute: (e, t) => {
                          e.init({ originalIndex: t });
                        },
                      }));
                } catch (a) {
                  console.log(a);
                }
              const l = () =>
                (async function (e, t) {
                  return Wt.run(e, t);
                })({ router: u }, async () => {
                  const e = (s.headers.get("Accept") || "*/*").split(",");
                  if (!["*/*", "text/html"].some((t) => e.some((e) => e.trim().startsWith(t))))
                    return vt({ error: "Only HTML requests are supported here" }, { status: 500 });
                  if (
                    (null === r &&
                      (r = await (async function () {
                        const { tsrStartManifest: e } = await Fr(Lr),
                          t = e(),
                          n = (t.routes[Mt] = t.routes[Mt] || {});
                        n.assets = n.assets || [];
                        let r = `import('${t.clientEntry}')`;
                        "development" === "production" &&
                          globalThis.TSS_INJECTED_HEAD_SCRIPTS &&
                          (r = `${globalThis.TSS_INJECTED_HEAD_SCRIPTS + ";"}${r}`),
                          n.assets.push({
                            tag: "script",
                            attrs: { type: "module", suppressHydrationWarning: !0, async: !0 },
                            children: r,
                          });
                        const o = {
                          ...t,
                          routes: Object.fromEntries(
                            Object.entries(t.routes).map(([e, t]) => {
                              const { preloads: n, assets: r } = t;
                              return [e, { preloads: n, assets: r }];
                            }),
                          ),
                        };
                        return o;
                      })()),
                    dr(u, r),
                    await u.load(),
                    u.state.redirect)
                  )
                    return u.state.redirect;
                  await u.serverSsr.dehydrate();
                  const t =
                    ((n = { router: u }),
                    gt(
                      zr(),
                      { "Content-Type": "text/html; charset=UTF-8" },
                      ...n.router.state.matches.map((e) => e.headers),
                    ));
                  var n;
                  return await o({ request: s, router: u, responseHeaders: t });
                });
              if (t) {
                const [e, n] = await (async function (e) {
                  var t, n;
                  const r = new URL(e.request.url),
                    o = r.pathname,
                    a = (function ({
                      pathname: e,
                      routePathname: t,
                      basepath: n,
                      caseSensitive: r,
                      routesByPath: o,
                      routesById: a,
                      flatRoutes: i,
                      parseCache: s,
                    }) {
                      let l = {};
                      const c = Ct(e),
                        u = (e) => {
                          var t;
                          return Ot(
                            n,
                            c,
                            {
                              to: e.fullPath,
                              caseSensitive:
                                (null == (t = e.options) ? void 0 : t.caseSensitive) ?? r,
                              fuzzy: !0,
                            },
                            s,
                          );
                        };
                      let d = void 0 !== t ? o[t] : void 0;
                      if (d) l = u(d);
                      else {
                        let e;
                        for (const t of i) {
                          const n = u(t);
                          if (n) {
                            if ("/" === t.path || !n["**"]) {
                              (d = t), (l = n);
                              break;
                            }
                            e || (e = { foundRoute: t, routeParams: n });
                          }
                        }
                        !d && e && ((d = e.foundRoute), (l = e.routeParams));
                      }
                      let f = d || a[Mt];
                      const p = [f];
                      for (; f.parentRoute; ) (f = f.parentRoute), p.push(f);
                      return p.reverse(), { matchedRoutes: p, routeParams: l, foundRoute: d };
                    })({
                      pathname: o,
                      basepath: e.basePath,
                      caseSensitive: !0,
                      routesByPath: e.processedServerRouteTree.routesByPath,
                      routesById: e.processedServerRouteTree.routesById,
                      flatRoutes: e.processedServerRouteTree.flatRoutes,
                    }),
                    i = e.router.getMatchedRoutes(o, void 0);
                  let s,
                    l = [];
                  if (
                    ((l = a.matchedRoutes),
                    i.foundRoute && a.matchedRoutes.length < i.matchedRoutes.length)
                  ) {
                    const n = [...i.matchedRoutes]
                      .reverse()
                      .find((t) => void 0 !== e.processedServerRouteTree.routesById[t.id]);
                    if (n) {
                      let r = n.id;
                      l = [];
                      do {
                        const n = e.processedServerRouteTree.routesById[r];
                        if (!n) break;
                        l.push(n), (r = null == (t = n.parentRoute) ? void 0 : t.id);
                      } while (r);
                      l.reverse();
                    }
                  }
                  if (l.length) {
                    const t = Vt(l.flatMap((e) => e.options.middleware).filter(Boolean)).map(
                      (e) => e.options.server,
                    );
                    if (null == (n = a.foundRoute) ? void 0 : n.options.methods) {
                      const n = Object.keys(a.foundRoute.options.methods).find(
                        (t) => t.toLowerCase() === e.request.method.toLowerCase(),
                      );
                      if (n) {
                        const e = a.foundRoute.options.methods[n];
                        e &&
                          ("function" == typeof e
                            ? t.push(Vr(e))
                            : (e._options.middlewares &&
                                e._options.middlewares.length &&
                                t.push(...Vt(e._options.middlewares).map((e) => e.options.server)),
                              e._options.handler && t.push(Vr(e._options.handler))));
                      }
                    }
                    t.push(Vr(e.executeRouter));
                    const r = await (function (e, t) {
                      let n = -1;
                      const r = async (t) => {
                        n++;
                        const o = e[n];
                        if (!o) return t;
                        const a = await o({
                          ...t,
                          next: async (e) => {
                            const n = await r({
                              ...t,
                              ...e,
                              context: {
                                ...t.context,
                                ...((null == e ? void 0 : e.context) || {}),
                              },
                            });
                            return Object.assign(t, Hr(n));
                          },
                        }).catch((e) => {
                          if (Kr(e)) return { response: e };
                          throw e;
                        });
                        return Object.assign(t, Hr(a));
                      };
                      return Hr(r(t));
                    })(t, { request: e.request, context: {}, params: a.routeParams, pathname: o });
                    s = r.response;
                  }
                  return [l, s];
                })({
                  processedServerRouteTree: t,
                  router: u,
                  request: s,
                  basePath: "/",
                  executeRouter: l,
                });
                if (n) return n;
              }
              return await l();
            } catch (rk) {
              if (rk instanceof Response) return rk;
              throw rk;
            }
            var e;
          })();
          if (Lt(h)) {
            if (Lt((m = h)) && m.options.href)
              return "manual" === s.headers.get("x-tsr-redirect")
                ? vt({ ...h.options, isSerializedRedirect: true }, { headers: h.headers })
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
            const e = u.resolveRedirect(h);
            return "manual" === s.headers.get("x-tsr-redirect")
              ? vt({ ...h.options, isSerializedRedirect: true }, { headers: h.headers })
              : e;
          }
          var m;
          return h;
        };
      return i;
    };
  })({
    createRouter: function () {
      return createRouter({ routeTree: QP, scrollRestoration: true });
    },
  })(ct),
  tk =
    ((nk = function (e) {
      const t = vr(e);
      return ek({ request: t });
    }),
    (function (e) {
      if ("function" == typeof e) return (e.__is_handler__ = true), e;
      const t = { onRequest: Pr(e.onRequest), onBeforeResponse: Pr(e.onBeforeResponse) },
        n = (n) =>
          (async function (e, t, n) {
            if (n.onRequest) for (const o of n.onRequest) if ((await o(e), e.handled)) return;
            const r = { body: await t(e) };
            if (n.onBeforeResponse) for (const o of n.onBeforeResponse) await o(e, r);
            return r.body;
          })(n, e.handler, t);
      return (
        (n.__is_handler__ = true),
        (n.__resolve__ = e.handler.__resolve__),
        (n.__websocket__ = e.websocket),
        n
      );
    })((e) =>
      (async function (e, t) {
        return kr.run(e, t);
      })(e, () => nk(e)),
    ));
var nk;

export {
  Am as $,
  ga as A,
  ii as B,
  tf as C,
  SR as D,
  ym as E,
  ib as F,
  Lw as G,
  nm as H,
  li as I,
  ah as J,
  Jy as K,
  Sh as L,
  eb as M,
  tw as N,
  Zp as O,
  Xb as P,
  Ky as Q,
  wt as R,
  zN as S,
  aA as T,
  Pm as U,
  Dh as V,
  uw as W,
  Jh as X,
  _m as Y,
  am as Z,
  Ah as _,
  IN as a,
  cm as a0,
  Mh as a1,
  Zh as a2,
  vm as a3,
  Fy as a4,
  rh as a5,
  oh as a6,
  cx as a7,
  lw as a8,
  ew as a9,
  oi as aA,
  ef as aB,
  Lg as aa,
  aw as ab,
  Zb as ac,
  tm as ad,
  um as ae,
  qy as af,
  Uy as ag,
  tb as ah,
  wh as ai,
  im as aj,
  dm as ak,
  Ag as al,
  _g as am,
  Ig as an,
  sm as ao,
  sx as ap,
  kg as aq,
  Tg as ar,
  fx as as,
  gi as at,
  Ea as au,
  QS as av,
  AR as aw,
  lo as ax,
  AC as ay,
  Ja as az,
  ON as b,
  KC as c,
  va as d,
  tk as default,
  zh as e,
  Ng as f,
  lm as g,
  Th as h,
  em as i,
  Qh as j,
  Cg as k,
  om as l,
  ba as m,
  Sx as n,
  _x as o,
  Rx as p,
  AA as q,
  PA as r,
  Cd as s,
  MN as t,
  TN as u,
  Vx as v,
  Dg as w,
  Ka as x,
  Eh as y,
  Td as z,
};
//# sourceMappingURL=ssr.mjs.map
