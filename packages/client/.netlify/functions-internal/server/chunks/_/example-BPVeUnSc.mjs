import {
  Atom,
  Registry,
  Result,
  useAtom,
  useAtomRefresh,
  useAtomSet,
  useAtomValue,
} from "@effect-atom/atom-react";
import { FetchHttpClient, HttpApiClient, HttpClient } from "@effect/platform";
import "@effect/platform-browser/BrowserWorker";
import "@effect/rpc/Rpc";
import "@effect/rpc/RpcClient";
import "@effect/rpc/RpcGroup";
import "@effect/sql";
import "@effect/sql-pg";
import "@headlessui/react";
import "@radix-ui/react-avatar";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import * as g from "@radix-ui/react-label";
import "@radix-ui/react-progress";
import "@radix-ui/react-scroll-area";
import "@radix-ui/react-separator";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@radix-ui/react-tooltip";
import "@tanstack/react-router";
import "@tanstack/react-router/ssr/server";
import { useStore } from "@tanstack/react-store";
import "class-variance-authority";
import "clsx";
import { Array as Array$1, Cause, Data, Duration, Effect, Random, Schedule, Schema } from "effect";
import * as $ from "effect/Array";
import "effect/Boolean";
import "effect/Duration";
import "effect/Effect";
import * as ce$1 from "effect/Either";
import { pipe } from "effect/Function";
import "effect/Layer";
import * as _ from "effect/Match";
import "effect/Option";
import { ArrayFormatter } from "effect/ParseResult";
import * as h from "effect/Schema";
import * as v from "effect/String";
import { TrashIcon } from "lucide-react";
import "node:async_hooks";
import { useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import "tailwind-merge";
import {
  c as Ea,
  B as Na,
  m as Ns,
  U as Us,
  S as Wa,
  D as Xs,
  I as _a,
  T as ja,
  e as ks,
} from "./ssr.mjs";

const G = /* @__PURE__ */ new WeakMap(),
  z = /* @__PURE__ */ new WeakMap(),
  K = { current: [] };
let J = false,
  H = 0;
const Q = /* @__PURE__ */ new Set(),
  X = /* @__PURE__ */ new Map();
function Y(e2) {
  const t2 = Array.from(e2).sort((e3, t3) =>
    e3 instanceof ae && e3.options.deps.includes(t3)
      ? 1
      : t3 instanceof ae && t3.options.deps.includes(e3)
        ? -1
        : 0,
  );
  for (const s2 of t2) {
    if (K.current.includes(s2)) continue;
    K.current.push(s2), s2.recompute();
    const e3 = z.get(s2);
    if (e3)
      for (const t3 of e3) {
        const e4 = G.get(t3);
        e4 && Y(e4);
      }
  }
}
function Z(e2) {
  e2.listeners.forEach((t2) => t2({ prevVal: e2.prevState, currentVal: e2.state }));
}
function ee(e2) {
  e2.listeners.forEach((t2) => t2({ prevVal: e2.prevState, currentVal: e2.state }));
}
function te(e2) {
  var _a;
  if ((H > 0 && !X.has(e2) && X.set(e2, e2.prevState), Q.add(e2), !(H > 0 || J)))
    try {
      for (J = true; Q.size > 0; ) {
        const e3 = Array.from(Q);
        Q.clear();
        for (const t2 of e3) {
          const e4 = (_a = X.get(t2)) != null ? _a : t2.prevState;
          (t2.prevState = e4), Z(t2);
        }
        for (const t2 of e3) {
          const e4 = G.get(t2);
          e4 && (K.current.push(t2), Y(e4));
        }
        for (const t2 of e3) {
          const e4 = G.get(t2);
          if (e4) for (const t3 of e4) ee(t3);
        }
      }
    } finally {
      (J = false), (K.current = []), X.clear();
    }
}
function se(e2) {
  H++;
  try {
    e2();
  } finally {
    if ((H--, 0 === H)) {
      const e3 = Array.from(Q)[0];
      e3 && te(e3);
    }
  }
}
class ie {
  constructor(e2, t2) {
    (this.listeners = /* @__PURE__ */ new Set()),
      (this.subscribe = (e3) => {
        var t3, s2;
        this.listeners.add(e3);
        const i2 =
          null == (s2 = null == (t3 = this.options) ? void 0 : t3.onSubscribe)
            ? void 0
            : s2.call(t3, e3, this);
        return () => {
          this.listeners.delete(e3), null == i2 || i2();
        };
      }),
      (this.prevState = e2),
      (this.state = e2),
      (this.options = t2);
  }
  setState(e2) {
    var t2, s2, i2;
    (this.prevState = this.state),
      (null == (t2 = this.options) ? void 0 : t2.updateFn)
        ? (this.state = this.options.updateFn(this.prevState)(e2))
        : !(
              /* @__PURE__ */ (function (e3) {
                return "function" == typeof e3;
              })(e2)
            )
          ? (this.state = e2)
          : (this.state = e2(this.prevState)),
      null == (i2 = null == (s2 = this.options) ? void 0 : s2.onUpdate) || i2.call(s2),
      te(this);
  }
}
class ae {
  constructor(e2) {
    (this.listeners = /* @__PURE__ */ new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        var _a;
        const e3 = [],
          t2 = [];
        for (const s2 of this.options.deps) e3.push(s2.prevState), t2.push(s2.state);
        return (
          (this.lastSeenDepValues = t2),
          { prevDepVals: e3, currDepVals: t2, prevVal: (_a = this.prevState) != null ? _a : void 0 }
        );
      }),
      (this.recompute = () => {
        var e3, t2;
        this.prevState = this.state;
        const { prevDepVals: s2, currDepVals: i2, prevVal: a2 } = this.getDepVals();
        (this.state = this.options.fn({ prevDepVals: s2, currDepVals: i2, prevVal: a2 })),
          null == (t2 = (e3 = this.options).onUpdate) || t2.call(e3);
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const i2 of this.options.deps)
          i2 instanceof ae && i2.checkIfRecalculationNeededDeeply();
        let e3 = false;
        const t2 = this.lastSeenDepValues,
          { currDepVals: s2 } = this.getDepVals();
        for (let i2 = 0; i2 < s2.length; i2++)
          if (s2[i2] !== t2[i2]) {
            e3 = true;
            break;
          }
        e3 && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const e3 of this._subscriptions) e3();
        }
      )),
      (this.subscribe = (e3) => {
        var t2, s2;
        this.listeners.add(e3);
        const i2 = null == (s2 = (t2 = this.options).onSubscribe) ? void 0 : s2.call(t2, e3, this);
        return () => {
          this.listeners.delete(e3), null == i2 || i2();
        };
      }),
      (this.options = e2),
      (this.state = e2.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      }));
  }
  registerOnGraph(e2 = this.options.deps) {
    for (const t2 of e2)
      if (t2 instanceof ae) t2.registerOnGraph(), this.registerOnGraph(t2.options.deps);
      else if (t2 instanceof ie) {
        let e3 = G.get(t2);
        e3 || ((e3 = /* @__PURE__ */ new Set()), G.set(t2, e3)), e3.add(this);
        let s2 = z.get(this);
        s2 || ((s2 = /* @__PURE__ */ new Set()), z.set(this, s2)), s2.add(t2);
      }
  }
  unregisterFromGraph(e2 = this.options.deps) {
    for (const t2 of e2)
      if (t2 instanceof ae) this.unregisterFromGraph(t2.options.deps);
      else if (t2 instanceof ie) {
        const e3 = G.get(t2);
        e3 && e3.delete(this);
        const s2 = z.get(this);
        s2 && s2.delete(t2);
      }
  }
}
const re = ({ className: s2, required: a2 = false, ...r2 }) =>
    jsxs(g.Root, {
      "data-slot": "label",
      className: Ea(
        "text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        s2,
      ),
      ...r2,
      children: [
        r2.children,
        a2 && jsx("span", { className: "ml-0.5 text-red-500", children: "*" }),
      ],
    }),
  ne = ({ children: e2, ...s2 }) =>
    jsx("div", { className: "flex flex-col gap-1.5", ...s2, children: e2 }),
  oe = ({ className: e2, error: s2 = null, ...a2 }) =>
    null === s2 || v.isEmpty(s2)
      ? null
      : jsx("span", {
          className: Ea("text-sm text-red-500 dark:text-red-400", e2),
          ...a2,
          children: s2,
        }),
  le = ({ className: e2, description: s2, ...a2 }) =>
    jsx("p", { className: Ea("text-sm text-muted-foreground", e2), ...a2, children: s2 }),
  de = ({
    className: s2,
    controlClassName: i2,
    description: r2,
    error: n2,
    label: o2,
    name: l2,
    required: d2,
    ...u2
  }) =>
    jsxs(ne, {
      className: i2,
      children: [
        jsx(re, { htmlFor: l2, required: true === d2, children: o2 }),
        r2 && jsx(le, { description: r2 }),
        jsx(_a, { id: l2, name: l2, required: d2, className: s2, ...u2 }),
        jsx(oe, { error: n2 }),
      ],
    }),
  ue = ({
    className: s2,
    controlClassName: i2,
    error: a2,
    label: n2,
    name: o2,
    required: l2,
    ...d2
  }) =>
    jsxs(ne, {
      className: i2,
      children: [
        jsx(re, { htmlFor: o2, required: true === l2, children: n2 }),
        jsx(ja, { id: o2, name: o2, required: l2, className: s2, ...d2 }),
        jsx(oe, { error: a2 }),
      ],
    }),
  ce = (e2) =>
    Effect.fnUntraced(function* (t2, ...s2) {
      const i2 = toast.loading(
        "string" == typeof e2.onWaiting ? e2.onWaiting : e2.onWaiting(...s2),
      );
      return yield* t2.pipe(
        Effect.tap((t3) => {
          toast.success("string" == typeof e2.onSuccess ? e2.onSuccess : e2.onSuccess(t3, ...s2), {
            id: i2,
          });
        }),
        Effect.tapErrorCause((t3) =>
          Effect.sync(() => {
            toast.error(
              "string" == typeof e2.onFailure
                ? e2.onFailure
                : e2.onFailure(Cause.failureOption(t3), ...s2),
              { id: i2 },
            );
          }),
        ),
      );
    });
class he extends Effect.Service()("@org/ApiClient", {
  dependencies: [FetchHttpClient.layer],
  scoped: Effect.gen(function* () {
    return {
      http: yield* HttpApiClient.make(Xs, {
        baseUrl: ks.API_URL,
        transformClient: (e2) =>
          e2.pipe(
            HttpClient.transformResponse(
              Effect.fnUntraced(function* (e3) {
                if ("dev" === ks.EFFECTIVE_ENV) {
                  const e4 = yield* Random.nextRange(200, 500);
                  yield* Effect.sleep(Duration.millis(e4));
                }
                return yield* e3;
              }),
            ),
            HttpClient.retryTransient({ times: 3, schedule: Schedule.exponential("100 millis") }),
          ),
      }),
    };
  }),
}) {}
const fe = Ns(he.Default),
  pe = fe.atom(
    Effect.fn(function* () {
      const e2 = yield* he;
      return yield* e2.http.examples.list();
    }),
  ),
  me = Data.taggedEnum(),
  ve = Object.assign(
    Atom.writable(
      (e2) => e2(pe),
      (e2, t2) => {
        const s2 = e2.get(ve);
        if (!Result.isSuccess(s2)) return;
        const i2 = me.$match(t2, {
          Del: ({ id: e3 }) => s2.value.filter((t3) => t3.id !== e3),
          Upsert: ({ example: e3 }) =>
            s2.value.find((t3) => t3.id === e3.id)
              ? s2.value.map((t3) => (t3.id === e3.id ? e3 : t3))
              : Array$1.prepend(s2.value, e3),
        });
        e2.setSelf(Result.success(i2));
      },
    ),
    { remote: pe },
  ),
  ge = fe.fn(
    Effect.fn(
      function* (e2) {
        const t2 = yield* Registry.AtomRegistry,
          s2 = yield* he,
          i2 = yield* s2.http.examples.upsert({ payload: e2 });
        t2.set(ve, me.Upsert({ example: i2 }));
      },
      ce({
        onWaiting: (e2) => (void 0 !== e2.id ? "Updating" : "Creating") + " example...",
        onSuccess: "Example saved",
        onFailure: "Failed to save example",
      }),
    ),
  ),
  be = fe.fn(
    Effect.fn(
      function* (e2) {
        const t2 = yield* Registry.AtomRegistry,
          s2 = yield* he;
        yield* s2.http.examples.delete({ payload: { id: e2 } }), t2.set(ve, me.Del({ id: e2 }));
      },
      ce({
        onWaiting: "Deleting example...",
        onSuccess: "Example deleted",
        onFailure: "Failed to delete example",
      }),
    ),
  );
function Me(e2, t2) {
  return "function" == typeof e2 ? e2(t2) : e2;
}
function ye(e2, t2) {
  return De(t2).reduce((e3, t3) => (null === e3 ? null : void 0 !== e3 ? e3[t3] : void 0), e2);
}
function Se(e2, t2, s2) {
  const i2 = De(t2);
  return (function e3(t3) {
    if (!i2.length) return Me(s2, t3);
    const a2 = i2.shift();
    if ("string" == typeof a2 || ("number" == typeof a2 && !Array.isArray(t3)))
      return "object" == typeof t3
        ? (null === t3 && (t3 = {}), { ...t3, [a2]: e3(t3[a2]) })
        : { [a2]: e3() };
    if (Array.isArray(t3) && "number" == typeof a2) {
      const s3 = t3.slice(0, a2);
      return [...(s3.length ? s3 : new Array(a2)), e3(t3[a2]), ...t3.slice(a2 + 1)];
    }
    return [...new Array(a2), e3()];
  })(e2);
}
const Fe = /^(\d*)$/gm,
  Ve = /\.(\d*)\./gm,
  Ae = /^(\d*)\./gm,
  we = /\.(\d*$)/gm,
  xe = /\.{2,}/gm,
  Ee = "__int__",
  Ne = `${Ee}$1`;
function De(e2) {
  if (Array.isArray(e2)) return [...e2];
  if ("string" != typeof e2) throw new Error("Path must be a string.");
  return e2
    .replace(/\[/g, ".")
    .replace(/\]/g, "")
    .replace(Fe, Ne)
    .replace(Ve, `.${Ne}.`)
    .replace(Ae, `${Ne}.`)
    .replace(we, `.${Ne}`)
    .replace(xe, ".")
    .split(".")
    .map((e3) => (0 === e3.indexOf(Ee) ? parseInt(e3.substring(Ee.length), 10) : e3));
}
function je(e2, t2) {
  const { asyncDebounceMs: s2 } = t2,
    {
      onChangeAsync: i2,
      onBlurAsync: a2,
      onSubmitAsync: r2,
      onBlurAsyncDebounceMs: n2,
      onChangeAsyncDebounceMs: o2,
    } = t2.validators || {},
    l2 = s2 != null ? s2 : 0,
    d2 = { cause: "change", validate: i2, debounceMs: o2 != null ? o2 : l2 },
    u2 = { cause: "blur", validate: a2, debounceMs: n2 != null ? n2 : l2 },
    c2 = { cause: "submit", validate: r2, debounceMs: 0 },
    h2 = (e3) => ({ ...e3, debounceMs: 0 });
  switch (e2) {
    case "submit":
      return [h2(d2), h2(u2), c2];
    case "blur":
      return [u2];
    case "change":
      return [d2];
    default:
      return [];
  }
}
function Oe(e2, t2) {
  const { onChange: s2, onBlur: i2, onSubmit: a2, onMount: r2 } = t2.validators || {},
    n2 = { cause: "change", validate: s2 },
    o2 = { cause: "blur", validate: i2 },
    l2 = { cause: "submit", validate: a2 },
    d2 = { cause: "mount", validate: r2 },
    u2 = { cause: "server", validate: () => {} };
  switch (e2) {
    case "mount":
      return [d2];
    case "submit":
      return [n2, o2, l2, u2];
    case "server":
      return [u2];
    case "blur":
      return [o2, u2];
    default:
      return [n2, u2];
  }
}
const Ce = (e2) => !!e2 && "object" == typeof e2 && "fields" in e2;
function ke(e2, t2) {
  if (Object.is(e2, t2)) return true;
  if ("object" != typeof e2 || null === e2 || "object" != typeof t2 || null === t2) return false;
  if (e2 instanceof Map && t2 instanceof Map) {
    if (e2.size !== t2.size) return false;
    for (const [s3, i2] of e2) if (!t2.has(s3) || !Object.is(i2, t2.get(s3))) return false;
    return true;
  }
  if (e2 instanceof Set && t2 instanceof Set) {
    if (e2.size !== t2.size) return false;
    for (const s3 of e2) if (!t2.has(s3)) return false;
    return true;
  }
  const s2 = Object.keys(e2);
  if (s2.length !== Object.keys(t2).length) return false;
  for (let i2 = 0; i2 < s2.length; i2++)
    if (!Object.prototype.hasOwnProperty.call(t2, s2[i2]) || !Object.is(e2[s2[i2]], t2[s2[i2]]))
      return false;
  return true;
}
const Be = (e2) => {
    const t2 = (function (e3) {
      var _a, _b;
      const t3 = /* @__PURE__ */ new Map();
      for (const s2 of e3) {
        const e4 = [...((_a = s2.path) != null ? _a : [])]
          .map((e5) => {
            const t4 = "object" == typeof e5 ? e5.key : e5;
            return "number" == typeof t4 ? `[${t4}]` : t4;
          })
          .join(".")
          .replace(/\.\[/g, "[");
        t3.set(e4, ((_b = t3.get(e4)) != null ? _b : []).concat(s2));
      }
      return Object.fromEntries(t3);
    })(e2);
    return { form: t2, fields: t2 };
  },
  Ie = (e2, t2) => ("form" === e2 ? Be(t2) : t2),
  Te = {
    validate({ value: e2, validationSource: t2 }, s2) {
      const i2 = s2["~standard"].validate(e2);
      if (i2 instanceof Promise) throw new Error("async function passed to sync validator");
      if (i2.issues) return Ie(t2, i2.issues);
    },
    async validateAsync({ value: e2, validationSource: t2 }, s2) {
      const i2 = await s2["~standard"].validate(e2);
      if (i2.issues) return Ie(t2, i2.issues);
    },
  },
  $e = (e2) => !!e2 && "~standard" in e2,
  Pe = {
    isValidating: false,
    isTouched: false,
    isBlurred: false,
    isDirty: false,
    isPristine: true,
    errors: [],
    errorMap: {},
  };
function We(e2) {
  function t2(e3, t3) {
    return `${e3}[${t3}]`;
  }
  function s2(t3, s3) {
    ("up" === s3 ? t3 : [...t3].reverse()).forEach((t4) => {
      const a3 = (function (e3, t5) {
          return e3.replace(/\[(\d+)\]/, (e4, s4) => {
            const i3 = parseInt(s4, 10);
            return `[${"up" === t5 ? i3 + 1 : Math.max(0, i3 - 1)}]`;
          });
        })(t4.toString(), s3),
        r3 = e2.getFieldMeta(a3);
      r3 ? e2.setFieldMeta(t4, r3) : e2.setFieldMeta(t4, i2());
    });
  }
  const i2 = () => Pe,
    a2 = (a3, r3, n3) => {
      s2(a3, "down"),
        a3.forEach((s3) => {
          s3.toString().startsWith(t2(r3, n3)) && e2.setFieldMeta(s3, i2());
        });
    },
    r2 = (e3) => {
      s2(e3, "up");
    },
    n2 = (i3, a3, r3, n3) => {
      const o3 = new Map(
        Object.keys(e2.fieldInfo)
          .filter((e3) => e3.startsWith(t2(a3, r3)))
          .map((t3) => [t3, e2.getFieldMeta(t3)]),
      );
      s2(i3, r3 < n3 ? "up" : "down"),
        Object.keys(e2.fieldInfo)
          .filter((e3) => e3.startsWith(t2(a3, n3)))
          .forEach((s3) => {
            const i4 = s3.replace(t2(a3, n3), t2(a3, r3)),
              l2 = o3.get(i4);
            l2 && e2.setFieldMeta(s3, l2);
          });
    },
    o2 = (s3, i3, a3, r3) => {
      s3.forEach((s4) => {
        if (!s4.toString().startsWith(t2(i3, a3))) return;
        const n3 = s4.toString().replace(t2(i3, a3), t2(i3, r3)),
          [o3, l2] = [e2.getFieldMeta(s4), e2.getFieldMeta(n3)];
        o3 && e2.setFieldMeta(n3, o3), l2 && e2.setFieldMeta(s4, l2);
      });
    };
  return {
    handleArrayFieldMetaShift: function (s3, i3, l2, d2) {
      const u2 = (function (s4, i4, a3, r3) {
        const n3 = [t2(s4, i4)];
        if ("swap" === a3) n3.push(t2(s4, r3));
        else if ("move" === a3) {
          const [e3, a4] = [Math.min(i4, r3), Math.max(i4, r3)];
          for (let i5 = e3; i5 <= a4; i5++) n3.push(t2(s4, i5));
        } else {
          const a4 = e2.getFieldValue(s4),
            r4 = Array.isArray(a4) ? a4.length : 0;
          for (let e3 = i4 + 1; e3 < r4; e3++) n3.push(t2(s4, e3));
        }
        return Object.keys(e2.fieldInfo).filter((e3) => n3.some((t3) => e3.startsWith(t3)));
      })(s3, i3, l2, d2);
      ({
        insert: () => a2(u2, s3, i3),
        remove: () => r2(u2),
        swap: () => void 0 !== d2 && o2(u2, s3, i3, d2),
        move: () => void 0 !== d2 && n2(u2, s3, i3, d2),
      })[l2]();
    },
  };
}
function _e(e2) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
  return {
    values: (_a = e2.values) != null ? _a : {},
    errorMap: (_b = e2.errorMap) != null ? _b : {},
    fieldMetaBase: (_c = e2.fieldMetaBase) != null ? _c : {},
    isSubmitted: (_d = e2.isSubmitted) != null ? _d : false,
    isSubmitting: (_e2 = e2.isSubmitting) != null ? _e2 : false,
    isValidating: (_f = e2.isValidating) != null ? _f : false,
    submissionAttempts: (_g = e2.submissionAttempts) != null ? _g : 0,
    isSubmitSuccessful: (_h = e2.isSubmitSuccessful) != null ? _h : false,
    validationMetaMap:
      (_i = e2.validationMetaMap) != null
        ? _i
        : { onChange: void 0, onBlur: void 0, onSubmit: void 0, onMount: void 0, onServer: void 0 },
  };
}
class Re {
  constructor(e2) {
    var _a;
    var t2;
    (this.options = {}),
      (this.fieldInfo = {}),
      (this.prevTransformArray = []),
      (this.cumulativeFieldsErrorMap = {}),
      (this.mount = () => {
        const e3 = this.fieldMetaDerived.mount(),
          t3 = this.store.mount(),
          s2 = () => {
            e3(), t3();
          },
          { onMount: i2 } = this.options.validators || {};
        return i2 ? (this.validateSync("mount"), s2) : s2;
      }),
      (this.update = (e3) => {
        var t3, s2;
        if (!e3) return;
        const i2 = this.options;
        this.options = e3;
        const a2 = !!(null == (s2 = null == (t3 = e3.transform) ? void 0 : t3.deps)
            ? void 0
            : s2.some((e4, t4) => e4 !== this.prevTransformArray[t4])),
          r2 = e3.defaultValues && !ke(e3.defaultValues, i2.defaultValues) && !this.state.isTouched,
          n2 = !ke(e3.defaultState, i2.defaultState) && !this.state.isTouched;
        (r2 || n2 || a2) &&
          se(() => {
            this.baseStore.setState(() =>
              _e(
                Object.assign(
                  {},
                  this.state,
                  n2 ? e3.defaultState : {},
                  r2 ? { values: e3.defaultValues } : {},
                  a2 ? { _force_re_eval: !this.state._force_re_eval } : {},
                ),
              ),
            );
          });
      }),
      (this.reset = (e3, t3) => {
        const { fieldMeta: s2 } = this.state,
          i2 = this.resetFieldMeta(s2);
        e3 &&
          !(null == t3 ? void 0 : t3.keepDefaultValues) &&
          (this.options = { ...this.options, defaultValues: e3 }),
          this.baseStore.setState(() => {
            var _a2;
            var t4;
            return _e({
              ...this.options.defaultState,
              values:
                (_a2 = e3 != null ? e3 : this.options.defaultValues) != null
                  ? _a2
                  : null == (t4 = this.options.defaultState)
                    ? void 0
                    : t4.values,
              fieldMetaBase: i2,
            });
          });
      }),
      (this.validateAllFields = async (e3) => {
        const t3 = [];
        se(() => {
          Object.values(this.fieldInfo).forEach((s2) => {
            if (!s2.instance) return;
            const i2 = s2.instance;
            t3.push(Promise.resolve().then(() => i2.validate(e3, { skipFormValidation: true }))),
              s2.instance.state.meta.isTouched ||
                s2.instance.setMeta((e4) => ({ ...e4, isTouched: true }));
          });
        });
        return (await Promise.all(t3)).flat();
      }),
      (this.validateArrayFieldsStartingFrom = async (e3, t3, s2) => {
        const i2 = this.getFieldValue(e3),
          a2 = Array.isArray(i2) ? Math.max(i2.length - 1, 0) : null,
          r2 = [`${e3}[${t3}]`];
        for (let l2 = t3 + 1; l2 <= (a2 != null ? a2 : 0); l2++) r2.push(`${e3}[${l2}]`);
        const n2 = Object.keys(this.fieldInfo).filter((e4) => r2.some((t4) => e4.startsWith(t4))),
          o2 = [];
        se(() => {
          n2.forEach((e4) => {
            o2.push(Promise.resolve().then(() => this.validateField(e4, s2)));
          });
        });
        return (await Promise.all(o2)).flat();
      }),
      (this.validateField = (e3, t3) => {
        var s2;
        const i2 = null == (s2 = this.fieldInfo[e3]) ? void 0 : s2.instance;
        return i2
          ? (i2.state.meta.isTouched || i2.setMeta((e4) => ({ ...e4, isTouched: true })),
            i2.validate(t3))
          : [];
      }),
      (this.validateSync = (e3) => {
        const t3 = Oe(e3, this.options);
        let s2 = false;
        const i2 = {};
        return (
          se(() => {
            var a2;
            for (const e4 of t3) {
              if (!e4.validate) continue;
              const t4 = this.runValidator({
                  validate: e4.validate,
                  value: { value: this.state.values, formApi: this, validationSource: "form" },
                  type: "validate",
                }),
                { formError: r3, fieldErrors: n2 } = Ue(t4),
                o2 = qe(e4.cause);
              if (n2)
                for (const [e5, s3] of Object.entries(n2)) {
                  const t5 = { ...(this.cumulativeFieldsErrorMap[e5] || {}), [o2]: s3 };
                  (i2[e5] = t5), (this.cumulativeFieldsErrorMap[e5] = t5);
                  const a3 = this.getFieldMeta(e5);
                  a3 &&
                    a3.errorMap[o2] !== s3 &&
                    this.setFieldMeta(e5, (e6) => ({
                      ...e6,
                      errorMap: { ...e6.errorMap, [o2]: s3 },
                    }));
                }
              for (const e5 of Object.keys(this.cumulativeFieldsErrorMap)) {
                const t5 = this.getFieldMeta(e5);
                (null == t5 ? void 0 : t5.errorMap[o2]) &&
                  !(null == (a2 = i2[e5]) ? void 0 : a2[o2]) &&
                  ((this.cumulativeFieldsErrorMap[e5] = {
                    ...this.cumulativeFieldsErrorMap[e5],
                    [o2]: void 0,
                  }),
                  this.setFieldMeta(e5, (e6) => ({
                    ...e6,
                    errorMap: { ...e6.errorMap, [o2]: void 0 },
                  })));
              }
              this.state.errorMap[o2] !== r3 &&
                this.baseStore.setState((e5) => ({
                  ...e5,
                  errorMap: { ...e5.errorMap, [o2]: r3 },
                })),
                (r3 || n2) && (s2 = true);
            }
            const r2 = qe("submit");
            this.state.errorMap[r2] &&
              "submit" !== e3 &&
              !s2 &&
              this.baseStore.setState((e4) => ({
                ...e4,
                errorMap: { ...e4.errorMap, [r2]: void 0 },
              }));
          }),
          { hasErrored: s2, fieldsErrorMap: i2 }
        );
      }),
      (this.validateAsync = async (e3) => {
        const t3 = je(e3, this.options);
        this.state.isFormValidating ||
          this.baseStore.setState((e4) => ({ ...e4, isFormValidating: true }));
        const s2 = [];
        let i2;
        for (const n2 of t3) {
          if (!n2.validate) continue;
          const e4 = qe(n2.cause),
            t4 = this.state.validationMetaMap[e4];
          null == t4 || t4.lastAbortController.abort();
          const a3 = new AbortController();
          (this.state.validationMetaMap[e4] = { lastAbortController: a3 }),
            s2.push(
              new Promise(async (e5) => {
                let t5;
                try {
                  t5 = await new Promise((e6, t6) => {
                    setTimeout(async () => {
                      if (a3.signal.aborted) return e6(void 0);
                      try {
                        e6(
                          await this.runValidator({
                            validate: n2.validate,
                            value: {
                              value: this.state.values,
                              formApi: this,
                              validationSource: "form",
                              signal: a3.signal,
                            },
                            type: "validateAsync",
                          }),
                        );
                      } catch (s4) {
                        t6(s4);
                      }
                    }, n2.debounceMs);
                  });
                } catch (l2) {
                  t5 = l2;
                }
                const { formError: s3, fieldErrors: r3 } = Ue(t5);
                r3 && (i2 = i2 ? { ...i2, ...r3 } : r3);
                const o2 = qe(n2.cause);
                if (i2)
                  for (const [a4, n3] of Object.entries(i2)) {
                    const e6 = this.getFieldMeta(a4);
                    e6 &&
                      e6.errorMap[o2] !== n3 &&
                      this.setFieldMeta(a4, (e7) => ({
                        ...e7,
                        errorMap: { ...e7.errorMap, [o2]: n3 },
                      }));
                  }
                this.baseStore.setState((e6) => ({
                  ...e6,
                  errorMap: { ...e6.errorMap, [o2]: s3 },
                })),
                  e5(i2 ? { fieldErrors: i2, errorMapKey: o2 } : void 0);
              }),
            );
        }
        let a2 = [];
        const r2 = {};
        if (s2.length) {
          a2 = await Promise.all(s2);
          for (const e4 of a2)
            if (null == e4 ? void 0 : e4.fieldErrors) {
              const { errorMapKey: t4 } = e4;
              for (const [s3, i3] of Object.entries(e4.fieldErrors)) {
                const e5 = { ...(r2[s3] || {}), [t4]: i3 };
                r2[s3] = e5;
              }
            }
        }
        return this.baseStore.setState((e4) => ({ ...e4, isFormValidating: false })), r2;
      }),
      (this.validate = (e3) => {
        const { hasErrored: t3, fieldsErrorMap: s2 } = this.validateSync(e3);
        return t3 && !this.options.asyncAlways ? s2 : this.validateAsync(e3);
      }),
      (this.getFieldValue = (e3) => ye(this.state.values, e3)),
      (this.getFieldMeta = (e3) => this.state.fieldMeta[e3]),
      (this.getFieldInfo = (e3) => {
        var t3;
        return (
          (t3 = this.fieldInfo)[e3] ||
          (t3[e3] = {
            instance: null,
            validationMetaMap: {
              onChange: void 0,
              onBlur: void 0,
              onSubmit: void 0,
              onMount: void 0,
              onServer: void 0,
            },
          })
        );
      }),
      (this.setFieldMeta = (e3, t3) => {
        this.baseStore.setState((s2) => ({
          ...s2,
          fieldMetaBase: { ...s2.fieldMetaBase, [e3]: Me(t3, s2.fieldMetaBase[e3]) },
        }));
      }),
      (this.resetFieldMeta = (e3) => Object.keys(e3).reduce((e4, t3) => ((e4[t3] = Pe), e4), {})),
      (this.setFieldValue = (e3, t3, s2) => {
        var _a2;
        const i2 = (_a2 = null == s2 ? void 0 : s2.dontUpdateMeta) != null ? _a2 : false;
        se(() => {
          i2 ||
            this.setFieldMeta(e3, (e4) => ({
              ...e4,
              isTouched: true,
              isDirty: true,
              errorMap: { ...(null == e4 ? void 0 : e4.errorMap), onMount: void 0 },
            })),
            this.baseStore.setState((s3) => ({ ...s3, values: Se(s3.values, e3, t3) }));
        });
      }),
      (this.deleteField = (e3) => {
        const t3 = [
          ...Object.keys(this.fieldInfo).filter((t4) => {
            const s2 = e3.toString();
            return t4 !== s2 && t4.startsWith(s2);
          }),
          e3,
        ];
        this.baseStore.setState((e4) => {
          const s2 = { ...e4 };
          return (
            t3.forEach((e5) => {
              (s2.values = (function (e6, t4) {
                const s3 = De(t4);
                return (function e7(t5) {
                  if (!t5) return;
                  if (1 === s3.length) {
                    const e8 = s3[0];
                    if (Array.isArray(t5) && "number" == typeof e8)
                      return t5.filter((t6, s4) => s4 !== e8);
                    const { [e8]: i3, ...a2 } = t5;
                    return a2;
                  }
                  const i2 = s3.shift();
                  if ("string" == typeof i2 && "object" == typeof t5)
                    return { ...t5, [i2]: e7(t5[i2]) };
                  if ("number" == typeof i2 && Array.isArray(t5)) {
                    if (i2 >= t5.length) return t5;
                    const s4 = t5.slice(0, i2);
                    return [...(s4.length ? s4 : new Array(i2)), e7(t5[i2]), ...t5.slice(i2 + 1)];
                  }
                  throw new Error("It seems we have created an infinite loop in deleteBy. ");
                })(e6);
              })(s2.values, e5)),
                delete this.fieldInfo[e5],
                delete s2.fieldMetaBase[e5];
            }),
            s2
          );
        });
      }),
      (this.pushFieldValue = (e3, t3, s2) => {
        this.setFieldValue(e3, (e4) => [...(Array.isArray(e4) ? e4 : []), t3], s2),
          this.validateField(e3, "change");
      }),
      (this.insertFieldValue = async (e3, t3, s2, i2) => {
        this.setFieldValue(e3, (e4) => [...e4.slice(0, t3), s2, ...e4.slice(t3)], i2),
          await this.validateField(e3, "change"),
          We(this).handleArrayFieldMetaShift(e3, t3, "insert"),
          await this.validateArrayFieldsStartingFrom(e3, t3, "change");
      }),
      (this.replaceFieldValue = async (e3, t3, s2, i2) => {
        this.setFieldValue(e3, (e4) => e4.map((e5, i3) => (i3 === t3 ? s2 : e5)), i2),
          await this.validateField(e3, "change"),
          await this.validateArrayFieldsStartingFrom(e3, t3, "change");
      }),
      (this.removeFieldValue = async (e3, t3, s2) => {
        const i2 = this.getFieldValue(e3),
          a2 = Array.isArray(i2) ? Math.max(i2.length - 1, 0) : null;
        if (
          (this.setFieldValue(e3, (e4) => e4.filter((e5, s3) => s3 !== t3), s2),
          We(this).handleArrayFieldMetaShift(e3, t3, "remove"),
          null !== a2)
        ) {
          const t4 = `${e3}[${a2}]`;
          this.deleteField(t4);
        }
        await this.validateField(e3, "change"),
          await this.validateArrayFieldsStartingFrom(e3, t3, "change");
      }),
      (this.swapFieldValues = (e3, t3, s2, i2) => {
        this.setFieldValue(
          e3,
          (e4) => {
            const i3 = e4[t3],
              a2 = e4[s2];
            return Se(Se(e4, `${t3}`, a2), `${s2}`, i3);
          },
          i2,
        ),
          We(this).handleArrayFieldMetaShift(e3, t3, "swap", s2),
          this.validateField(e3, "change"),
          this.validateField(`${e3}[${t3}]`, "change"),
          this.validateField(`${e3}[${s2}]`, "change");
      }),
      (this.moveFieldValues = (e3, t3, s2, i2) => {
        this.setFieldValue(e3, (e4) => (e4.splice(s2, 0, e4.splice(t3, 1)[0]), e4), i2),
          We(this).handleArrayFieldMetaShift(e3, t3, "move", s2),
          this.validateField(e3, "change"),
          this.validateField(`${e3}[${t3}]`, "change"),
          this.validateField(`${e3}[${s2}]`, "change");
      }),
      (this.resetField = (e3) => {
        this.baseStore.setState((t3) => ({
          ...t3,
          fieldMetaBase: { ...t3.fieldMetaBase, [e3]: Pe },
          values: {
            ...t3.values,
            [e3]: this.options.defaultValues && this.options.defaultValues[e3],
          },
        }));
      }),
      (this.getAllErrors = () => ({
        form: { errors: this.state.errors, errorMap: this.state.errorMap },
        fields: Object.entries(this.state.fieldMeta).reduce(
          (e3, [t3, s2]) => (
            Object.keys(s2).length &&
              s2.errors.length &&
              (e3[t3] = { errors: s2.errors, errorMap: s2.errorMap }),
            e3
          ),
          {},
        ),
      })),
      (this.baseStore = new ie(
        _e({
          ...(null == e2 ? void 0 : e2.defaultState),
          values:
            (_a = null == e2 ? void 0 : e2.defaultValues) != null
              ? _a
              : null == (t2 = null == e2 ? void 0 : e2.defaultState)
                ? void 0
                : t2.values,
        }),
      )),
      (this.fieldMetaDerived = new ae({
        deps: [this.baseStore],
        fn: ({ prevDepVals: e3, currDepVals: t3, prevVal: s2 }) => {
          var _a2;
          var i2;
          const a2 = s2,
            r2 = null == e3 ? void 0 : e3[0],
            n2 = t3[0];
          let o2 = 0;
          const l2 = {};
          for (const d2 of Object.keys(n2.fieldMetaBase)) {
            const e4 = n2.fieldMetaBase[d2],
              t4 = null == r2 ? void 0 : r2.fieldMetaBase[d2],
              s3 = null == a2 ? void 0 : a2[d2];
            let u2 = null == s3 ? void 0 : s3.errors;
            if (!t4 || e4.errorMap !== t4.errorMap) {
              u2 = Object.values((_a2 = e4.errorMap) != null ? _a2 : {}).filter(
                (e5) => void 0 !== e5,
              );
              const t5 = null == (i2 = this.getFieldInfo(d2)) ? void 0 : i2.instance;
              t5 && !t5.options.disableErrorFlat && (u2 = null == u2 ? void 0 : u2.flat(1));
            }
            const c2 = !e4.isDirty;
            s3 && s3.isPristine === c2 && s3.errors === u2 && e4 === t4
              ? ((l2[d2] = s3), o2++)
              : (l2[d2] = { ...e4, errors: u2, isPristine: c2 });
          }
          return Object.keys(n2.fieldMetaBase).length &&
            a2 &&
            o2 === Object.keys(n2.fieldMetaBase).length
            ? a2
            : l2;
        },
      })),
      (this.store = new ae({
        deps: [this.baseStore, this.fieldMetaDerived],
        fn: ({ prevDepVals: e3, currDepVals: t3, prevVal: s2 }) => {
          var _a2, _b;
          var i2, a2, r2, n2;
          const o2 = s2,
            l2 = null == e3 ? void 0 : e3[0],
            d2 = t3[0],
            u2 = Object.values(d2.fieldMetaBase),
            c2 = u2.some((e4) => (null == e4 ? void 0 : e4.isValidating)),
            h2 = !u2.some((e4) => {
              return (
                (null == e4 ? void 0 : e4.errorMap) &&
                ((t4 = Object.values(e4.errorMap).filter(Boolean)),
                !(Array.isArray(t4) && 0 === t4.length))
              );
              var t4;
            }),
            f2 = u2.some((e4) => (null == e4 ? void 0 : e4.isTouched)),
            p2 = u2.some((e4) => (null == e4 ? void 0 : e4.isBlurred)),
            m2 = f2 && (null == (i2 = null == d2 ? void 0 : d2.errorMap) ? void 0 : i2.onMount),
            v2 = u2.some((e4) => (null == e4 ? void 0 : e4.isDirty)),
            g2 = !v2,
            b2 = Boolean(
              (null == (a2 = d2.errorMap) ? void 0 : a2.onMount) ||
                u2.some((e4) => {
                  var t4;
                  return null == (t4 = null == e4 ? void 0 : e4.errorMap) ? void 0 : t4.onMount;
                }),
            ),
            M2 = !!c2;
          let y2 = (_a2 = null == o2 ? void 0 : o2.errors) != null ? _a2 : [];
          (l2 && d2.errorMap === l2.errorMap) ||
            (y2 = Object.values(d2.errorMap).reduce(
              (e4, t4) =>
                void 0 === t4 ? e4 : t4 && Ce(t4) ? (e4.push(t4.form), e4) : (e4.push(t4), e4),
              [],
            ));
          const S2 = 0 === y2.length,
            F2 = h2 && S2,
            V2 = (0 === d2.submissionAttempts && !f2 && !b2) || (!M2 && !d2.isSubmitting && F2);
          let A2 = d2.errorMap;
          if (
            (m2 &&
              ((y2 = y2.filter((e4) => e4 !== d2.errorMap.onMount)),
              (A2 = Object.assign(A2, { onMount: void 0 }))),
            o2 &&
              l2 &&
              o2.errorMap === A2 &&
              o2.fieldMeta === this.fieldMetaDerived.state &&
              o2.errors === y2 &&
              o2.isFieldsValidating === c2 &&
              o2.isFieldsValid === h2 &&
              o2.isFormValid === S2 &&
              o2.isValid === F2 &&
              o2.canSubmit === V2 &&
              o2.isTouched === f2 &&
              o2.isBlurred === p2 &&
              o2.isPristine === g2 &&
              o2.isDirty === v2 &&
              ke(l2, d2))
          )
            return o2;
          let w2 = {
            ...d2,
            errorMap: A2,
            fieldMeta: this.fieldMetaDerived.state,
            errors: y2,
            isFieldsValidating: c2,
            isFieldsValid: h2,
            isFormValid: S2,
            isValid: F2,
            canSubmit: V2,
            isTouched: f2,
            isBlurred: p2,
            isPristine: g2,
            isDirty: v2,
          };
          const x2 =
            (_b = null == (r2 = this.options.transform) ? void 0 : r2.deps) != null ? _b : [];
          if (
            x2.length !== this.prevTransformArray.length ||
            x2.some((e4, t4) => e4 !== this.prevTransformArray[t4])
          ) {
            const e4 = Object.assign({}, this, { state: w2 });
            null == (n2 = this.options.transform) || n2.fn(e4),
              (w2 = e4.state),
              (this.prevTransformArray = x2);
          }
          return w2;
        },
      })),
      (this.handleSubmit = this.handleSubmit.bind(this)),
      this.update(e2 || {});
  }
  get state() {
    return this.store.state;
  }
  runValidator(e2) {
    return $e(e2.validate) ? Te[e2.type](e2.value, e2.validate) : e2.validate(e2.value);
  }
  async handleSubmit(e2) {
    var t2, s2, i2, a2, r2, n2;
    if (
      (this.baseStore.setState((e3) => ({
        ...e3,
        isSubmitted: false,
        submissionAttempts: e3.submissionAttempts + 1,
        isSubmitSuccessful: false,
      })),
      !this.state.canSubmit)
    )
      return;
    this.baseStore.setState((e3) => ({ ...e3, isSubmitting: true }));
    const o2 = () => {
      this.baseStore.setState((e3) => ({ ...e3, isSubmitting: false }));
    };
    if ((await this.validateAllFields("submit"), !this.state.isFieldsValid))
      return (
        o2(),
        void (
          null == (s2 = (t2 = this.options).onSubmitInvalid) ||
          s2.call(t2, { value: this.state.values, formApi: this })
        )
      );
    if ((await this.validate("submit"), !this.state.isValid))
      return (
        o2(),
        void (
          null == (a2 = (i2 = this.options).onSubmitInvalid) ||
          a2.call(i2, { value: this.state.values, formApi: this })
        )
      );
    se(() => {
      Object.values(this.fieldInfo).forEach((e3) => {
        var t3, s3, i3;
        null ==
          (i3 =
            null == (s3 = null == (t3 = e3.instance) ? void 0 : t3.options.listeners)
              ? void 0
              : s3.onSubmit) ||
          i3.call(s3, { value: e3.instance.state.value, fieldApi: e3.instance });
      });
    });
    try {
      await (null == (n2 = (r2 = this.options).onSubmit)
        ? void 0
        : n2.call(r2, {
            value: this.state.values,
            formApi: this,
            meta: e2 != null ? e2 : this.options.onSubmitMeta,
          })),
        se(() => {
          this.baseStore.setState((e3) => ({ ...e3, isSubmitted: true, isSubmitSuccessful: true })),
            o2();
        });
    } catch (l2) {
      throw (this.baseStore.setState((e3) => ({ ...e3, isSubmitSuccessful: false })), o2(), l2);
    }
  }
  setErrorMap(e2) {
    this.baseStore.setState((t2) => ({ ...t2, errorMap: { ...t2.errorMap, ...e2 } }));
  }
}
function Ue(e2) {
  if (e2) {
    if (Ce(e2)) {
      return { formError: Ue(e2.form).formError, fieldErrors: e2.fields };
    }
    return { formError: e2 };
  }
  return { formError: void 0 };
}
function qe(e2) {
  switch (e2) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    default:
      return "onChange";
  }
}
class Le {
  constructor(e2) {
    (this.options = {}),
      (this.mount = () => {
        var e3, t2;
        const s2 = this.store.mount();
        void 0 !== this.options.defaultValue &&
          this.form.setFieldValue(this.name, this.options.defaultValue, { dontUpdateMeta: true });
        (this.getInfo().instance = this), this.update(this.options);
        const { onMount: i2 } = this.options.validators || {};
        if (i2) {
          const e4 = this.runValidator({
            validate: i2,
            value: { value: this.state.value, fieldApi: this, validationSource: "field" },
            type: "validate",
          });
          e4 &&
            this.setMeta((t3) => ({
              ...t3,
              errorMap: { ...(null == t3 ? void 0 : t3.errorMap), onMount: e4 },
            }));
        }
        return (
          null == (t2 = null == (e3 = this.options.listeners) ? void 0 : e3.onMount) ||
            t2.call(e3, { value: this.state.value, fieldApi: this }),
          s2
        );
      }),
      (this.update = (e3) => {
        if (void 0 === this.state.value) {
          const t2 = ye(e3.form.options.defaultValues, e3.name);
          void 0 !== e3.defaultValue
            ? this.setValue(e3.defaultValue, { dontUpdateMeta: true })
            : void 0 !== t2 && this.setValue(t2, { dontUpdateMeta: true });
        }
        void 0 === this.form.getFieldMeta(this.name) && this.setMeta(this.state.meta),
          (this.options = e3),
          (this.name = e3.name);
      }),
      (this.getValue = () => this.form.getFieldValue(this.name)),
      (this.setValue = (e3, t2) => {
        var s2, i2;
        this.form.setFieldValue(this.name, e3, t2),
          null == (i2 = null == (s2 = this.options.listeners) ? void 0 : s2.onChange) ||
            i2.call(s2, { value: this.state.value, fieldApi: this }),
          this.validate("change");
      }),
      (this.getMeta = () => this.store.state.meta),
      (this.setMeta = (e3) => this.form.setFieldMeta(this.name, e3)),
      (this.getInfo = () => this.form.getFieldInfo(this.name)),
      (this.pushValue = (e3, t2) => {
        var s2, i2;
        this.form.pushFieldValue(this.name, e3, t2),
          null == (i2 = null == (s2 = this.options.listeners) ? void 0 : s2.onChange) ||
            i2.call(s2, { value: this.state.value, fieldApi: this });
      }),
      (this.insertValue = (e3, t2, s2) => {
        var i2, a2;
        this.form.insertFieldValue(this.name, e3, t2, s2),
          null == (a2 = null == (i2 = this.options.listeners) ? void 0 : i2.onChange) ||
            a2.call(i2, { value: this.state.value, fieldApi: this });
      }),
      (this.replaceValue = (e3, t2, s2) => {
        var i2, a2;
        this.form.replaceFieldValue(this.name, e3, t2, s2),
          null == (a2 = null == (i2 = this.options.listeners) ? void 0 : i2.onChange) ||
            a2.call(i2, { value: this.state.value, fieldApi: this });
      }),
      (this.removeValue = (e3, t2) => {
        var s2, i2;
        this.form.removeFieldValue(this.name, e3, t2),
          null == (i2 = null == (s2 = this.options.listeners) ? void 0 : s2.onChange) ||
            i2.call(s2, { value: this.state.value, fieldApi: this });
      }),
      (this.swapValues = (e3, t2, s2) => {
        var i2, a2;
        this.form.swapFieldValues(this.name, e3, t2, s2),
          null == (a2 = null == (i2 = this.options.listeners) ? void 0 : i2.onChange) ||
            a2.call(i2, { value: this.state.value, fieldApi: this });
      }),
      (this.moveValue = (e3, t2, s2) => {
        var i2, a2;
        this.form.moveFieldValues(this.name, e3, t2, s2),
          null == (a2 = null == (i2 = this.options.listeners) ? void 0 : i2.onChange) ||
            a2.call(i2, { value: this.state.value, fieldApi: this });
      }),
      (this.getLinkedFields = (e3) => {
        const t2 = Object.values(this.form.fieldInfo),
          s2 = [];
        for (const i2 of t2) {
          if (!i2.instance) continue;
          const { onChangeListenTo: t3, onBlurListenTo: a2 } = i2.instance.options.validators || {};
          "change" === e3 && (null == t3 ? void 0 : t3.includes(this.name)) && s2.push(i2.instance),
            "blur" === e3 && (null == a2 ? void 0 : a2.includes(this.name)) && s2.push(i2.instance);
        }
        return s2;
      }),
      (this.validateSync = (e3, t2) => {
        const s2 = Oe(e3, this.options),
          i2 = this.getLinkedFields(e3).reduce((t3, s3) => {
            const i3 = Oe(e3, s3.options);
            return (
              i3.forEach((e4) => {
                e4.field = s3;
              }),
              t3.concat(i3)
            );
          }, []);
        let a2 = false;
        se(() => {
          const e4 = (e5, s3) => {
            const i3 = ze(s3.cause),
              r3 = s3.validate
                ? Ge(
                    e5.runValidator({
                      validate: s3.validate,
                      value: {
                        value: e5.store.state.value,
                        validationSource: "field",
                        fieldApi: e5,
                      },
                      type: "validate",
                    }),
                  )
                : t2[i3];
            e5.state.meta.errorMap[i3] !== r3 &&
              e5.setMeta((e6) => ({
                ...e6,
                errorMap: { ...e6.errorMap, [ze(s3.cause)]: r3 || t2[i3] },
              })),
              (r3 || t2[i3]) && (a2 = true);
          };
          for (const t3 of s2) e4(this, t3);
          for (const t3 of i2) t3.validate && e4(t3.field, t3);
        });
        const r2 = ze("submit");
        return (
          this.state.meta.errorMap[r2] &&
            "submit" !== e3 &&
            !a2 &&
            this.setMeta((e4) => ({ ...e4, errorMap: { ...e4.errorMap, [r2]: void 0 } })),
          { hasErrored: a2 }
        );
      }),
      (this.validateAsync = async (e3, t2) => {
        const s2 = je(e3, this.options),
          i2 = await t2,
          a2 = this.getLinkedFields(e3),
          r2 = a2.reduce((t3, s3) => {
            const i3 = je(e3, s3.options);
            return (
              i3.forEach((e4) => {
                e4.field = s3;
              }),
              t3.concat(i3)
            );
          }, []);
        this.state.meta.isValidating || this.setMeta((e4) => ({ ...e4, isValidating: true }));
        for (const u2 of a2) u2.setMeta((e4) => ({ ...e4, isValidating: true }));
        const n2 = [],
          o2 = [],
          l2 = (e4, t3, s3) => {
            const a3 = ze(t3.cause),
              r3 = e4.getInfo().validationMetaMap[a3];
            null == r3 || r3.lastAbortController.abort();
            const n3 = new AbortController();
            (this.getInfo().validationMetaMap[a3] = { lastAbortController: n3 }),
              s3.push(
                new Promise(async (s4) => {
                  var r4;
                  let o3;
                  try {
                    o3 = await new Promise((s5, i3) => {
                      this.timeoutIds[t3.cause] && clearTimeout(this.timeoutIds[t3.cause]),
                        (this.timeoutIds[t3.cause] = setTimeout(async () => {
                          if (n3.signal.aborted) return s5(void 0);
                          try {
                            s5(
                              await this.runValidator({
                                validate: t3.validate,
                                value: {
                                  value: e4.store.state.value,
                                  fieldApi: e4,
                                  signal: n3.signal,
                                  validationSource: "field",
                                },
                                type: "validateAsync",
                              }),
                            );
                          } catch (a4) {
                            i3(a4);
                          }
                        }, t3.debounceMs));
                    });
                  } catch (c2) {
                    o3 = c2;
                  }
                  if (n3.signal.aborted) return s4(void 0);
                  const l3 = Ge(o3),
                    d3 = null == (r4 = i2[this.name]) ? void 0 : r4[a3],
                    u2 = l3 || d3;
                  e4.setMeta((e5) => ({
                    ...e5,
                    errorMap: { ...(null == e5 ? void 0 : e5.errorMap), [a3]: u2 },
                  })),
                    s4(u2);
                }),
              );
          };
        for (const u2 of s2) u2.validate && l2(this, u2, n2);
        for (const u2 of r2) u2.validate && l2(u2.field, u2, o2);
        let d2 = [];
        (n2.length || o2.length) && ((d2 = await Promise.all(n2)), await Promise.all(o2)),
          this.setMeta((e4) => ({ ...e4, isValidating: false }));
        for (const u2 of a2) u2.setMeta((e4) => ({ ...e4, isValidating: false }));
        return d2.filter(Boolean);
      }),
      (this.validate = (e3, t2) => {
        var _a;
        var s2;
        if (!this.state.meta.isTouched) return [];
        const { fieldsErrorMap: i2 } = (null == t2 ? void 0 : t2.skipFormValidation)
            ? { fieldsErrorMap: {} }
            : this.form.validateSync(e3),
          { hasErrored: a2 } = this.validateSync(e3, (_a = i2[this.name]) != null ? _a : {});
        if (a2 && !this.options.asyncAlways)
          return (
            null == (s2 = this.getInfo().validationMetaMap[ze(e3)]) ||
              s2.lastAbortController.abort(),
            this.state.meta.errors
          );
        const r2 = (null == t2 ? void 0 : t2.skipFormValidation)
          ? Promise.resolve({})
          : this.form.validateAsync(e3);
        return this.validateAsync(e3, r2);
      }),
      (this.handleChange = (e3) => {
        this.setValue(e3);
      }),
      (this.handleBlur = () => {
        var e3, t2;
        this.state.meta.isTouched ||
          (this.setMeta((e4) => ({ ...e4, isTouched: true })), this.validate("change")),
          this.state.meta.isBlurred || this.setMeta((e4) => ({ ...e4, isBlurred: true })),
          this.validate("blur"),
          null == (t2 = null == (e3 = this.options.listeners) ? void 0 : e3.onBlur) ||
            t2.call(e3, { value: this.state.value, fieldApi: this });
      }),
      (this.form = e2.form),
      (this.name = e2.name),
      (this.timeoutIds = {}),
      (this.store = new ae({
        deps: [this.form.store],
        fn: () => {
          var _a;
          return {
            value: this.form.getFieldValue(this.name),
            meta:
              (_a = this.form.getFieldMeta(this.name)) != null ? _a : { ...Pe, ...e2.defaultMeta },
          };
        },
      })),
      (this.options = e2);
  }
  get state() {
    return this.store.state;
  }
  runValidator(e2) {
    return $e(e2.validate) ? Te[e2.type](e2.value, e2.validate) : e2.validate(e2.value);
  }
  setErrorMap(e2) {
    this.setMeta((t2) => ({ ...t2, errorMap: { ...t2.errorMap, ...e2 } }));
  }
}
function Ge(e2) {
  if (e2) return e2;
}
function ze(e2) {
  switch (e2) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    default:
      return "onChange";
  }
}
const Ke = useEffect;
const Je = ({ children: e2, ...i2 }) => {
  const a2 = (function (e3) {
      const [t2] = useState(() => {
        const t3 = new Le({ ...e3, form: e3.form, name: e3.name });
        return (t3.Field = Je), t3;
      });
      return (
        Ke(t2.mount, [t2]),
        Ke(() => {
          t2.update(e3);
        }),
        useStore(
          t2.store,
          "array" === e3.mode
            ? (e4) => {
                var _a;
                return [e4.meta, Object.keys((_a = e4.value) != null ? _a : []).length];
              }
            : void 0,
        ),
        t2
      );
    })(i2),
    r2 = useMemo(() => Me(e2, a2), [e2, a2, a2.state.value, a2.state.meta]);
  return jsx(Fragment, { children: r2 });
};
function He({ form: e2, selector: t2, children: s2 }) {
  return Me(s2, useStore(e2.store, t2));
}
const Qe = (e2) => {
    const t2 =
      ((s2 = e2.schema),
      (e3) =>
        h
          .decodeEither(s2, { errors: "all", onExcessProperty: "ignore" })(e3.value)
          .pipe(
            ce$1.mapLeft((e4) =>
              pipe(
                e4,
                ArrayFormatter.formatErrorSync,
                $.reduce(
                  {},
                  (e5, t3) => (
                    0 === t3.path.length
                      ? (e5[""] = t3.message)
                      : t3.path.length > 0 && (e5[t3.path.join(".")] = t3.message),
                    e5
                  ),
                ),
                (e5) => (Object.keys(e5).length > 0 ? e5 : null),
              ),
            ),
            ce$1.flip,
            ce$1.getOrNull,
          ));
    var s2;
    const i2 = _.value(e2.validator).pipe(
      _.when("onSubmit", () => ({ onSubmit: t2 })),
      _.when("onChange", () => ({ onChange: t2 })),
      _.when("onBlur", () => ({ onBlur: t2 })),
      _.exhaustive,
    );
    return { defaultValues: e2.defaultValues, validators: i2 };
  },
  Xe = () => {
    const s2 = useAtomSet(ge, { mode: "promise" }),
      i2 = (function (e2) {
        const [s3] = useState(() => {
          const s4 = new Re(e2),
            i3 = s4;
          return (
            (i3.Field = function (e3) {
              return jsx(Je, { ...e3, form: s4 });
            }),
            (i3.Subscribe = (e3) =>
              jsx(He, { form: s4, selector: e3.selector, children: e3.children })),
            i3
          );
        });
        return (
          Ke(s3.mount, []),
          useStore(s3.store, (e3) => e3.isSubmitting),
          Ke(() => {
            s3.update(e2);
          }),
          s3
        );
      })({
        ...Qe({
          defaultValues: { name: "", description: "", version: "1.0.0", metadata: void 0 },
          schema: Us,
          validator: "onSubmit",
        }),
        onSubmit: async ({ value: e2 }) => {
          const t2 = Schema.decodeSync(Us)(e2);
          await s2(t2), i2.reset();
        },
      });
    return jsxs("section", {
      className: "bg-card p-6 rounded-lg border border-border shadow-sm",
      children: [
        jsx("h2", {
          className: "text-lg font-semibold text-foreground mb-4",
          children: "Add New Example",
        }),
        jsxs("form", {
          onSubmit: (e2) => {
            e2.preventDefault(), e2.stopPropagation(), i2.handleSubmit();
          },
          className: "space-y-4",
          children: [
            jsx(i2.Field, {
              name: "name",
              children: (e2) =>
                jsx(de, {
                  name: e2.name,
                  label: "Name",
                  value: e2.state.value,
                  onChange: (t2) => {
                    e2.handleChange(t2.currentTarget.value);
                  },
                }),
            }),
            jsx(i2.Field, {
              name: "description",
              children: (e2) =>
                jsx(ue, {
                  name: e2.name,
                  label: "Description",
                  value: e2.state.value,
                  onChange: (t2) => {
                    e2.handleChange(t2.currentTarget.value);
                  },
                  rows: 3,
                }),
            }),
            jsx(i2.Field, {
              name: "version",
              children: (e2) =>
                jsx(de, {
                  name: e2.name,
                  label: "Version",
                  value: e2.state.value,
                  onChange: (t2) => {
                    e2.handleChange(t2.currentTarget.value);
                  },
                  placeholder: "e.g., 1.0.0",
                }),
            }),
            jsx(i2.Subscribe, {
              selector: (e2) => e2.isSubmitting,
              children: (e2) =>
                jsx(Na, {
                  type: "submit",
                  loading: e2,
                  className: "w-full",
                  children: e2 ? "Submitting..." : "Save Changes",
                }),
            }),
          ],
        }),
      ],
    });
  },
  Ye = ({ example: s2 }) => {
    const [i2, a2] = useAtom(be, { mode: "promiseExit" });
    return jsx("article", {
      className:
        "bg-card p-4 rounded-lg border border-border hover:bg-background-secondary transition-colors",
      children: jsxs("header", {
        className: "flex flex-col gap-2",
        children: [
          jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  jsx("h3", { className: "font-medium text-foreground", children: s2.name }),
                  jsxs("span", {
                    className: "text-xs text-muted-foreground",
                    children: ["v", s2.version],
                  }),
                ],
              }),
              jsxs(Na, {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  a2(s2.id);
                },
                loading: i2.waiting,
                children: [
                  jsx(TrashIcon, { className: "size-4" }),
                  jsxs("span", { className: "sr-only", children: ["Delete ", s2.name] }),
                ],
              }),
            ],
          }),
          jsx("div", {
            className: "bg-background-secondary p-3 rounded-md border border-border",
            children: jsx("p", {
              className: "text-sm text-foreground whitespace-pre-wrap",
              children: s2.description,
            }),
          }),
          s2.metadata &&
            jsxs("div", {
              className: "mt-2",
              children: [
                jsx("h4", {
                  className: "text-xs font-medium text-muted-foreground mb-1",
                  children: "Metadata",
                }),
                jsxs("div", {
                  className: "bg-background-tertiary p-2 rounded-md border border-border",
                  children: [
                    s2.metadata.tags &&
                      s2.metadata.tags.length > 0 &&
                      jsxs("div", {
                        className: "mb-2",
                        children: [
                          jsx("span", {
                            className: "text-xs text-muted-foreground",
                            children: "Tags: ",
                          }),
                          jsx("div", {
                            className: "flex flex-wrap gap-1 mt-1",
                            children: s2.metadata.tags.map((e2, s3) =>
                              jsx(
                                "span",
                                {
                                  className: "bg-primary/10 text-primary text-xs px-2 py-1 rounded",
                                  children: e2,
                                },
                                s3,
                              ),
                            ),
                          }),
                        ],
                      }),
                    s2.metadata.customFields &&
                      jsxs("div", {
                        children: [
                          jsx("span", {
                            className: "text-xs text-muted-foreground",
                            children: "Custom Fields: ",
                          }),
                          jsx("pre", {
                            className: "text-xs text-foreground mt-1 overflow-x-auto",
                            children: JSON.stringify(s2.metadata.customFields, null, 2),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        ],
      }),
    });
  },
  Ze = ({ examples: s2 }) =>
    jsxs("main", {
      className: "flex flex-col gap-2",
      children: [
        jsx(Xe, {}),
        jsx(Wa, {}),
        jsx("section", {
          className: "flex flex-col gap-2",
          children: s2.map((e2) => jsx(Ye, { example: e2 }, e2.id)),
        }),
      ],
    }),
  et = () => {
    const s2 = useAtomRefresh(ve.remote);
    return jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        jsx("p", { children: "Something went wrong..." }),
        jsx(Na, { onClick: s2, children: "Retry" }),
      ],
    });
  },
  tt = () => {
    const e2 = useAtomValue(ve);
    return jsx("div", {
      className: "container mx-auto px-4 py-8 max-w-4xl",
      children: Result.builder(e2)
        .onFailure(() => jsx(et, {}))
        .onSuccess((e3) => jsx(Ze, { examples: e3 }))
        .onWaiting(
          (e3) => Result.isInitial(e3) && e3.waiting && jsx("p", { children: "Loading..." }),
        )
        .orNull(),
    });
  };

export { tt as component };
//# sourceMappingURL=example-BPVeUnSc.mjs.map
