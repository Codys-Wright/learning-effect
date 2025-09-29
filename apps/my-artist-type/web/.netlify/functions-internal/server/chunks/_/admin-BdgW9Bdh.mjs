import { Result, useAtom, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
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
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-store";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Nt$1 from "clsx";
import { Effect } from "effect";
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
import {
  BarChart3Icon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EditIcon,
  RefreshCwIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import "motion/react";
import "node:async_hooks";
import * as g from "react";
import g__default, { PureComponent } from "react";
import "react-dom";
import "react-resizable-panels";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "sonner";
import "tailwind-merge";
import { h, p } from "./nav-user-6r4i62oK.mjs";
import {
  $ as $b,
  C as CO,
  M as Dx,
  G as Ed,
  F as Fb,
  k as IO,
  X as If,
  K as Kd,
  L as Lb,
  Q as OM,
  O as Of,
  R as RM,
  S as Sf,
  T as TM,
  U as Ub,
  Z as Zh,
  P as Zx,
  t as bO,
  Y as by,
  q as dd,
  z as fb,
  m as hM,
  j as jO,
  D as jl,
  x as lw,
  V as mM,
  W as mf,
  B as nn,
  A as qb,
  E as ql,
  v as vM,
  n as wO,
  p as wv,
  y as xw,
} from "./quiz-taker-atoms-BE0xmtWz.mjs";
import {
  q as AA,
  s as Cd,
  k as Cg,
  w as Dg,
  a as IN,
  c as KC,
  G as Lw,
  t as MN,
  f as Ng,
  b as ON,
  r as PA,
  j as Qh,
  p as Rx,
  D as SR,
  n as Sx,
  h as Th,
  v as Vx,
  o as _x,
  T as aA,
  m as ba,
  i as em,
  B as ii,
  g as lm,
  l as om,
  C as tf,
  e as zh,
} from "./ssr.mjs";

var Ve = ["x1", "y1", "x2", "y2", "key"],
  Ge = ["offset"];
function Ke(e2) {
  return (
    (Ke =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e3) {
            return typeof e3;
          }
        : function (e3) {
            return e3 &&
              "function" == typeof Symbol &&
              e3.constructor === Symbol &&
              e3 !== Symbol.prototype
              ? "symbol"
              : typeof e3;
          }),
    Ke(e2)
  );
}
function He(e2, t2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(e2);
    t2 &&
      (a2 = a2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })),
      r2.push.apply(r2, a2);
  }
  return r2;
}
function _e(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var r2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? He(Object(r2), true).forEach(function (t3) {
          We(e2, t3, r2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2))
        : He(Object(r2)).forEach(function (t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
          });
  }
  return e2;
}
function We(e2, t2, r2) {
  var a2;
  return (
    (a2 = (function (e3, t3) {
      if ("object" != Ke(e3) || !e3) return e3;
      var r3 = e3[Symbol.toPrimitive];
      if (void 0 !== r3) {
        var a3 = r3.call(e3, t3);
        if ("object" != Ke(a3)) return a3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e3);
    })(t2, "string")),
    (t2 = "symbol" == Ke(a2) ? a2 : a2 + "") in e2
      ? Object.defineProperty(e2, t2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e2[t2] = r2),
    e2
  );
}
function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var a2 in r2) Object.prototype.hasOwnProperty.call(r2, a2) && (e2[a2] = r2[a2]);
          }
          return e2;
        }),
    $e.apply(this, arguments)
  );
}
function qe(e2, t2) {
  if (null == e2) return {};
  var r2,
    a2,
    n2 = (function (e3, t3) {
      if (null == e3) return {};
      var r3 = {};
      for (var a3 in e3)
        if (Object.prototype.hasOwnProperty.call(e3, a3)) {
          if (t3.indexOf(a3) >= 0) continue;
          r3[a3] = e3[a3];
        }
      return r3;
    })(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (a2 = 0; a2 < i2.length; a2++)
      (r2 = i2[a2]),
        t2.indexOf(r2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e2, r2) && (n2[r2] = e2[r2]));
  }
  return n2;
}
var Ue = function (e2) {
  var t2 = e2.fill;
  if (!t2 || "none" === t2) return null;
  var r2 = e2.fillOpacity,
    a2 = e2.x,
    n2 = e2.y,
    i2 = e2.width,
    l2 = e2.height,
    o2 = e2.ry;
  return g__default.createElement("rect", {
    x: a2,
    y: n2,
    ry: o2,
    width: i2,
    height: l2,
    stroke: "none",
    fill: t2,
    fillOpacity: r2,
    className: "recharts-cartesian-grid-bg",
  });
};
function Qe(e2, t2) {
  var r2;
  if (g__default.isValidElement(e2)) r2 = g__default.cloneElement(e2, t2);
  else if (zh(e2)) r2 = e2(t2);
  else {
    var a2 = t2.x1,
      n2 = t2.y1,
      i2 = t2.x2,
      l2 = t2.y2,
      o2 = t2.key,
      s2 = qe(t2, Ve),
      c2 = Ng(s2, false);
    c2.offset;
    var d2 = qe(c2, Ge);
    r2 = g__default.createElement(
      "line",
      $e({}, d2, { x1: a2, y1: n2, x2: i2, y2: l2, fill: "none", key: o2 }),
    );
  }
  return r2;
}
function Ye(e2) {
  var t2 = e2.x,
    r2 = e2.width,
    a2 = e2.horizontal,
    n2 = void 0 === a2 || a2,
    i2 = e2.horizontalPoints;
  if (!n2 || !i2 || !i2.length) return null;
  var l2 = i2.map(function (a3, i3) {
    var l3 = _e(
      _e({}, e2),
      {},
      { x1: t2, y1: a3, x2: t2 + r2, y2: a3, key: "line-".concat(i3), index: i3 },
    );
    return Qe(n2, l3);
  });
  return g__default.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, l2);
}
function Je(e2) {
  var t2 = e2.y,
    r2 = e2.height,
    a2 = e2.vertical,
    n2 = void 0 === a2 || a2,
    i2 = e2.verticalPoints;
  if (!n2 || !i2 || !i2.length) return null;
  var l2 = i2.map(function (a3, i3) {
    var l3 = _e(
      _e({}, e2),
      {},
      { x1: a3, y1: t2, x2: a3, y2: t2 + r2, key: "line-".concat(i3), index: i3 },
    );
    return Qe(n2, l3);
  });
  return g__default.createElement("g", { className: "recharts-cartesian-grid-vertical" }, l2);
}
function Xe(e2) {
  var t2 = e2.horizontalFill,
    r2 = e2.fillOpacity,
    a2 = e2.x,
    n2 = e2.y,
    i2 = e2.width,
    l2 = e2.height,
    o2 = e2.horizontalPoints,
    s2 = e2.horizontal;
  if (!(void 0 === s2 || s2) || !t2 || !t2.length) return null;
  var c2 = o2
    .map(function (e3) {
      return Math.round(e3 + n2 - n2);
    })
    .sort(function (e3, t3) {
      return e3 - t3;
    });
  n2 !== c2[0] && c2.unshift(0);
  var d2 = c2.map(function (e3, o3) {
    var s3 = !c2[o3 + 1] ? n2 + l2 - e3 : c2[o3 + 1] - e3;
    if (s3 <= 0) return null;
    var d3 = o3 % t2.length;
    return g__default.createElement("rect", {
      key: "react-".concat(o3),
      y: e3,
      x: a2,
      height: s3,
      width: i2,
      stroke: "none",
      fill: t2[d3],
      fillOpacity: r2,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return g__default.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    d2,
  );
}
function Ze(e2) {
  var t2 = e2.vertical,
    r2 = void 0 === t2 || t2,
    a2 = e2.verticalFill,
    n2 = e2.fillOpacity,
    i2 = e2.x,
    l2 = e2.y,
    o2 = e2.width,
    s2 = e2.height,
    c2 = e2.verticalPoints;
  if (!r2 || !a2 || !a2.length) return null;
  var d2 = c2
    .map(function (e3) {
      return Math.round(e3 + i2 - i2);
    })
    .sort(function (e3, t3) {
      return e3 - t3;
    });
  i2 !== d2[0] && d2.unshift(0);
  var u2 = d2.map(function (e3, t3) {
    var r3 = !d2[t3 + 1] ? i2 + o2 - e3 : d2[t3 + 1] - e3;
    if (r3 <= 0) return null;
    var c3 = t3 % a2.length;
    return g__default.createElement("rect", {
      key: "react-".concat(t3),
      x: e3,
      y: l2,
      width: r3,
      height: s2,
      stroke: "none",
      fill: a2[c3],
      fillOpacity: n2,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return g__default.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    u2,
  );
}
var et = function (e2, t2) {
    var r2 = e2.xAxis,
      a2 = e2.width,
      n2 = e2.height,
      i2 = e2.offset;
    return Of(
      Dx(
        _e(
          _e(_e({}, Zx.defaultProps), r2),
          {},
          { ticks: Sf(r2, true), viewBox: { x: 0, y: 0, width: a2, height: n2 } },
        ),
      ),
      i2.left,
      i2.left + i2.width,
      t2,
    );
  },
  tt = function (e2, t2) {
    var r2 = e2.yAxis,
      a2 = e2.width,
      n2 = e2.height,
      i2 = e2.offset;
    return Of(
      Dx(
        _e(
          _e(_e({}, Zx.defaultProps), r2),
          {},
          { ticks: Sf(r2, true), viewBox: { x: 0, y: 0, width: a2, height: n2 } },
        ),
      ),
      i2.top,
      i2.top + i2.height,
      t2,
    );
  },
  rt = {
    horizontal: true,
    vertical: true,
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function at(e2) {
  var t2,
    r2,
    a2,
    n2,
    i2,
    l2,
    m2 = Fb(),
    p2 = Ub(),
    h2 = qb(),
    f2 = _e(
      _e({}, e2),
      {},
      {
        stroke: null !== (t2 = e2.stroke) && void 0 !== t2 ? t2 : rt.stroke,
        fill: null !== (r2 = e2.fill) && void 0 !== r2 ? r2 : rt.fill,
        horizontal: null !== (a2 = e2.horizontal) && void 0 !== a2 ? a2 : rt.horizontal,
        horizontalFill: null !== (n2 = e2.horizontalFill) && void 0 !== n2 ? n2 : rt.horizontalFill,
        vertical: null !== (i2 = e2.vertical) && void 0 !== i2 ? i2 : rt.vertical,
        verticalFill: null !== (l2 = e2.verticalFill) && void 0 !== l2 ? l2 : rt.verticalFill,
        x: em(e2.x) ? e2.x : h2.left,
        y: em(e2.y) ? e2.y : h2.top,
        width: em(e2.width) ? e2.width : h2.width,
        height: em(e2.height) ? e2.height : h2.height,
      },
    ),
    g2 = f2.x,
    y2 = f2.y,
    v2 = f2.width,
    x2 = f2.height,
    b2 = f2.syncWithTicks,
    w2 = f2.horizontalValues,
    N2 = f2.verticalValues,
    k2 = Lb(),
    S2 = $b();
  if (!em(v2) || v2 <= 0 || !em(x2) || x2 <= 0 || !em(g2) || g2 !== +g2 || !em(y2) || y2 !== +y2)
    return null;
  var A2 = f2.verticalCoordinatesGenerator || et,
    P2 = f2.horizontalCoordinatesGenerator || tt,
    C2 = f2.horizontalPoints,
    O2 = f2.verticalPoints;
  if ((!C2 || !C2.length) && zh(P2)) {
    var M2 = w2 && w2.length,
      j2 = P2(
        {
          yAxis: S2 ? _e(_e({}, S2), {}, { ticks: M2 ? w2 : S2.ticks }) : void 0,
          width: m2,
          height: p2,
          offset: h2,
        },
        !!M2 || b2,
      );
    Dg(
      Array.isArray(j2),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        Ke(j2),
        "]",
      ),
    ),
      Array.isArray(j2) && (C2 = j2);
  }
  if ((!O2 || !O2.length) && zh(A2)) {
    var z2 = N2 && N2.length,
      E2 = A2(
        {
          xAxis: k2 ? _e(_e({}, k2), {}, { ticks: z2 ? N2 : k2.ticks }) : void 0,
          width: m2,
          height: p2,
          offset: h2,
        },
        !!z2 || b2,
      );
    Dg(
      Array.isArray(E2),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        Ke(E2),
        "]",
      ),
    ),
      Array.isArray(E2) && (O2 = E2);
  }
  return g__default.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    g__default.createElement(Ue, {
      fill: f2.fill,
      fillOpacity: f2.fillOpacity,
      x: f2.x,
      y: f2.y,
      width: f2.width,
      height: f2.height,
      ry: f2.ry,
    }),
    g__default.createElement(
      Ye,
      $e({}, f2, { offset: h2, horizontalPoints: C2, xAxis: k2, yAxis: S2 }),
    ),
    g__default.createElement(
      Je,
      $e({}, f2, { offset: h2, verticalPoints: O2, xAxis: k2, yAxis: S2 }),
    ),
    g__default.createElement(Xe, $e({}, f2, { horizontalPoints: C2 })),
    g__default.createElement(Ze, $e({}, f2, { verticalPoints: O2 })),
  );
}
at.displayName = "CartesianGrid";
var nt,
  it = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
  lt = ["key"];
function ot(e2) {
  return (
    (ot =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e3) {
            return typeof e3;
          }
        : function (e3) {
            return e3 &&
              "function" == typeof Symbol &&
              e3.constructor === Symbol &&
              e3 !== Symbol.prototype
              ? "symbol"
              : typeof e3;
          }),
    ot(e2)
  );
}
function st(e2, t2) {
  if (null == e2) return {};
  var r2,
    a2,
    n2 = (function (e3, t3) {
      if (null == e3) return {};
      var r3 = {};
      for (var a3 in e3)
        if (Object.prototype.hasOwnProperty.call(e3, a3)) {
          if (t3.indexOf(a3) >= 0) continue;
          r3[a3] = e3[a3];
        }
      return r3;
    })(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (a2 = 0; a2 < i2.length; a2++)
      (r2 = i2[a2]),
        t2.indexOf(r2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e2, r2) && (n2[r2] = e2[r2]));
  }
  return n2;
}
function ct() {
  return (
    (ct = Object.assign
      ? Object.assign.bind()
      : function (e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var a2 in r2) Object.prototype.hasOwnProperty.call(r2, a2) && (e2[a2] = r2[a2]);
          }
          return e2;
        }),
    ct.apply(this, arguments)
  );
}
function dt(e2, t2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(e2);
    t2 &&
      (a2 = a2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })),
      r2.push.apply(r2, a2);
  }
  return r2;
}
function ut(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var r2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? dt(Object(r2), true).forEach(function (t3) {
          yt(e2, t3, r2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2))
        : dt(Object(r2)).forEach(function (t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
          });
  }
  return e2;
}
function mt(e2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var a2 = t2[r2];
    (a2.enumerable = a2.enumerable || false),
      (a2.configurable = true),
      "value" in a2 && (a2.writable = true),
      Object.defineProperty(e2, vt(a2.key), a2);
  }
}
function pt(e2, t2, r2) {
  return (
    (t2 = ft(t2)),
    (function (e3, t3) {
      if (t3 && ("object" === ot(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e4) {
        if (void 0 === e4)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      })(e3);
    })(e2, ht() ? Reflect.construct(t2, r2 || [], ft(e2).constructor) : t2.apply(e2, r2))
  );
}
function ht() {
  try {
    var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e3) {}
  return (ht = function () {
    return !!e2;
  })();
}
function ft(e2) {
  return (
    (ft = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        }),
    ft(e2)
  );
}
function gt(e2, t2) {
  return (
    (gt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e3, t3) {
          return (e3.__proto__ = t3), e3;
        }),
    gt(e2, t2)
  );
}
function yt(e2, t2, r2) {
  return (
    (t2 = vt(t2)) in e2
      ? Object.defineProperty(e2, t2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e2[t2] = r2),
    e2
  );
}
function vt(e2) {
  var t2 = (function (e3, t3) {
    if ("object" != ot(e3) || !e3) return e3;
    var r2 = e3[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var a2 = r2.call(e3, t3);
      if ("object" != ot(a2)) return a2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e3);
  })(e2, "string");
  return "symbol" == ot(t2) ? t2 : t2 + "";
}
var xt = (function () {
  function e2() {
    var t3;
    !(function (e3, t4) {
      if (!(e3 instanceof t4)) throw new TypeError("Cannot call a class as a function");
    })(this, e2);
    for (var r3 = arguments.length, a3 = new Array(r3), n2 = 0; n2 < r3; n2++)
      a3[n2] = arguments[n2];
    return (
      yt((t3 = pt(this, e2, [].concat(a3))), "state", { isAnimationFinished: true }),
      yt(t3, "id", om("recharts-area-")),
      yt(t3, "handleAnimationEnd", function () {
        var e3 = t3.props.onAnimationEnd;
        t3.setState({ isAnimationFinished: true }), zh(e3) && e3();
      }),
      yt(t3, "handleAnimationStart", function () {
        var e3 = t3.props.onAnimationStart;
        t3.setState({ isAnimationFinished: false }), zh(e3) && e3();
      }),
      t3
    );
  }
  return (
    (function (e3, t3) {
      if ("function" != typeof t3 && null !== t3)
        throw new TypeError("Super expression must either be null or a function");
      (e3.prototype = Object.create(t3 && t3.prototype, {
        constructor: { value: e3, writable: true, configurable: true },
      })),
        Object.defineProperty(e3, "prototype", { writable: false }),
        t3 && gt(e3, t3);
    })(e2, PureComponent),
    (t2 = e2),
    (a2 = [
      {
        key: "getDerivedStateFromProps",
        value: function (e3, t3) {
          return e3.animationId !== t3.prevAnimationId
            ? {
                prevAnimationId: e3.animationId,
                curPoints: e3.points,
                curBaseLine: e3.baseLine,
                prevPoints: t3.curPoints,
                prevBaseLine: t3.curBaseLine,
              }
            : e3.points !== t3.curPoints || e3.baseLine !== t3.curBaseLine
              ? { curPoints: e3.points, curBaseLine: e3.baseLine }
              : null;
        },
      },
    ]),
    (r2 = [
      {
        key: "renderDots",
        value: function (t3, r3, a3) {
          var n2 = this.props.isAnimationActive,
            i2 = this.state.isAnimationFinished;
          if (n2 && !i2) return null;
          var l2 = this.props,
            o2 = l2.dot,
            s2 = l2.points,
            c2 = l2.dataKey,
            d2 = Ng(this.props, false),
            u2 = Ng(o2, true),
            m2 = s2.map(function (t4, r4) {
              var a4 = ut(
                ut(ut({ key: "dot-".concat(r4), r: 3 }, d2), u2),
                {},
                {
                  index: r4,
                  cx: t4.x,
                  cy: t4.y,
                  dataKey: c2,
                  value: t4.value,
                  payload: t4.payload,
                  points: s2,
                },
              );
              return e2.renderDotItem(o2, a4);
            }),
            p2 = {
              clipPath: t3 ? "url(#clipPath-".concat(r3 ? "" : "dots-").concat(a3, ")") : null,
            };
          return g__default.createElement(nn, ct({ className: "recharts-area-dots" }, p2), m2);
        },
      },
      {
        key: "renderHorizontalRect",
        value: function (e3) {
          var t3 = this.props,
            r3 = t3.baseLine,
            a3 = t3.points,
            n2 = t3.strokeWidth,
            i2 = a3[0].x,
            l2 = a3[a3.length - 1].x,
            o2 = e3 * Math.abs(i2 - l2),
            s2 = jl(
              a3.map(function (e4) {
                return e4.y || 0;
              }),
            );
          return (
            em(r3) && "number" == typeof r3
              ? (s2 = Math.max(r3, s2))
              : r3 &&
                Array.isArray(r3) &&
                r3.length &&
                (s2 = Math.max(
                  jl(
                    r3.map(function (e4) {
                      return e4.y || 0;
                    }),
                  ),
                  s2,
                )),
            em(s2)
              ? g__default.createElement("rect", {
                  x: i2 < l2 ? i2 : i2 - o2,
                  y: 0,
                  width: o2,
                  height: Math.floor(s2 + (n2 ? parseInt("".concat(n2), 10) : 1)),
                })
              : null
          );
        },
      },
      {
        key: "renderVerticalRect",
        value: function (e3) {
          var t3 = this.props,
            r3 = t3.baseLine,
            a3 = t3.points,
            n2 = t3.strokeWidth,
            i2 = a3[0].y,
            l2 = a3[a3.length - 1].y,
            o2 = e3 * Math.abs(i2 - l2),
            s2 = jl(
              a3.map(function (e4) {
                return e4.x || 0;
              }),
            );
          return (
            em(r3) && "number" == typeof r3
              ? (s2 = Math.max(r3, s2))
              : r3 &&
                Array.isArray(r3) &&
                r3.length &&
                (s2 = Math.max(
                  jl(
                    r3.map(function (e4) {
                      return e4.x || 0;
                    }),
                  ),
                  s2,
                )),
            em(s2)
              ? g__default.createElement("rect", {
                  x: 0,
                  y: i2 < l2 ? i2 : i2 - o2,
                  width: s2 + (n2 ? parseInt("".concat(n2), 10) : 1),
                  height: Math.floor(o2),
                })
              : null
          );
        },
      },
      {
        key: "renderClipRect",
        value: function (e3) {
          return "vertical" === this.props.layout
            ? this.renderVerticalRect(e3)
            : this.renderHorizontalRect(e3);
        },
      },
      {
        key: "renderAreaStatically",
        value: function (e3, t3, r3, a3) {
          var n2 = this.props,
            i2 = n2.layout,
            l2 = n2.type,
            o2 = n2.stroke,
            s2 = n2.connectNulls,
            c2 = n2.isRange;
          n2.ref;
          var d2 = st(n2, it);
          return g__default.createElement(
            nn,
            { clipPath: r3 ? "url(#clipPath-".concat(a3, ")") : null },
            g__default.createElement(
              Kd,
              ct({}, Ng(d2, true), {
                points: e3,
                connectNulls: s2,
                type: l2,
                baseLine: t3,
                layout: i2,
                stroke: "none",
                className: "recharts-area-area",
              }),
            ),
            "none" !== o2 &&
              g__default.createElement(
                Kd,
                ct({}, Ng(this.props, false), {
                  className: "recharts-area-curve",
                  layout: i2,
                  type: l2,
                  connectNulls: s2,
                  fill: "none",
                  points: e3,
                }),
              ),
            "none" !== o2 &&
              c2 &&
              g__default.createElement(
                Kd,
                ct({}, Ng(this.props, false), {
                  className: "recharts-area-curve",
                  layout: i2,
                  type: l2,
                  connectNulls: s2,
                  fill: "none",
                  points: t3,
                }),
              ),
          );
        },
      },
      {
        key: "renderAreaWithAnimation",
        value: function (e3, t3) {
          var r3 = this,
            a3 = this.props,
            n2 = a3.points,
            i2 = a3.baseLine,
            l2 = a3.isAnimationActive,
            o2 = a3.animationBegin,
            s2 = a3.animationDuration,
            c2 = a3.animationEasing,
            d2 = a3.animationId,
            u2 = this.state,
            m2 = u2.prevPoints,
            p2 = u2.prevBaseLine;
          return g__default.createElement(
            Zh,
            {
              begin: o2,
              duration: s2,
              isActive: l2,
              easing: c2,
              from: { t: 0 },
              to: { t: 1 },
              key: "area-".concat(d2),
              onAnimationEnd: this.handleAnimationEnd,
              onAnimationStart: this.handleAnimationStart,
            },
            function (a4) {
              var l3 = a4.t;
              if (m2) {
                var o3,
                  s3 = m2.length / n2.length,
                  c3 = n2.map(function (e4, t4) {
                    var r4 = Math.floor(t4 * s3);
                    if (m2[r4]) {
                      var a5 = m2[r4],
                        n3 = lm(a5.x, e4.x),
                        i3 = lm(a5.y, e4.y);
                      return ut(ut({}, e4), {}, { x: n3(l3), y: i3(l3) });
                    }
                    return e4;
                  });
                return (
                  (o3 =
                    em(i2) && "number" == typeof i2
                      ? lm(p2, i2)(l3)
                      : Th(i2) || Qh(i2)
                        ? lm(p2, 0)(l3)
                        : i2.map(function (e4, t4) {
                            var r4 = Math.floor(t4 * s3);
                            if (p2[r4]) {
                              var a5 = p2[r4],
                                n3 = lm(a5.x, e4.x),
                                i3 = lm(a5.y, e4.y);
                              return ut(ut({}, e4), {}, { x: n3(l3), y: i3(l3) });
                            }
                            return e4;
                          })),
                  r3.renderAreaStatically(c3, o3, e3, t3)
                );
              }
              return g__default.createElement(
                nn,
                null,
                g__default.createElement(
                  "defs",
                  null,
                  g__default.createElement(
                    "clipPath",
                    { id: "animationClipPath-".concat(t3) },
                    r3.renderClipRect(l3),
                  ),
                ),
                g__default.createElement(
                  nn,
                  { clipPath: "url(#animationClipPath-".concat(t3, ")") },
                  r3.renderAreaStatically(n2, i2, e3, t3),
                ),
              );
            },
          );
        },
      },
      {
        key: "renderArea",
        value: function (e3, t3) {
          var r3 = this.props,
            a3 = r3.points,
            n2 = r3.baseLine,
            i2 = r3.isAnimationActive,
            l2 = this.state,
            o2 = l2.prevPoints,
            s2 = l2.prevBaseLine,
            c2 = l2.totalLength;
          return i2 && a3 && a3.length && ((!o2 && c2 > 0) || !ql(o2, a3) || !ql(s2, n2))
            ? this.renderAreaWithAnimation(e3, t3)
            : this.renderAreaStatically(a3, n2, e3, t3);
        },
      },
      {
        key: "render",
        value: function () {
          var e3,
            t3 = this.props,
            r3 = t3.hide,
            a3 = t3.dot,
            n2 = t3.points,
            i2 = t3.className,
            l2 = t3.top,
            o2 = t3.left,
            s2 = t3.xAxis,
            c2 = t3.yAxis,
            d2 = t3.width,
            u2 = t3.height,
            m2 = t3.isAnimationActive,
            p2 = t3.id;
          if (r3 || !n2 || !n2.length) return null;
          var h2 = this.state.isAnimationFinished,
            f2 = 1 === n2.length,
            y2 = Nt$1("recharts-area", i2),
            v2 = s2 && s2.allowDataOverflow,
            x2 = c2 && c2.allowDataOverflow,
            b2 = v2 || x2,
            N2 = Th(p2) ? this.id : p2,
            k2 = null !== (e3 = Ng(a3, false)) && void 0 !== e3 ? e3 : { r: 3, strokeWidth: 2 },
            S2 = k2.r,
            A2 = void 0 === S2 ? 3 : S2,
            P2 = k2.strokeWidth,
            C2 = void 0 === P2 ? 2 : P2,
            O2 = (Cg(a3) ? a3 : {}).clipDot,
            M2 = void 0 === O2 || O2,
            j2 = 2 * A2 + C2;
          return g__default.createElement(
            nn,
            { className: y2 },
            v2 || x2
              ? g__default.createElement(
                  "defs",
                  null,
                  g__default.createElement(
                    "clipPath",
                    { id: "clipPath-".concat(N2) },
                    g__default.createElement("rect", {
                      x: v2 ? o2 : o2 - d2 / 2,
                      y: x2 ? l2 : l2 - u2 / 2,
                      width: v2 ? d2 : 2 * d2,
                      height: x2 ? u2 : 2 * u2,
                    }),
                  ),
                  !M2 &&
                    g__default.createElement(
                      "clipPath",
                      { id: "clipPath-dots-".concat(N2) },
                      g__default.createElement("rect", {
                        x: o2 - j2 / 2,
                        y: l2 - j2 / 2,
                        width: d2 + j2,
                        height: u2 + j2,
                      }),
                    ),
                )
              : null,
            f2 ? null : this.renderArea(b2, N2),
            (a3 || f2) && this.renderDots(b2, M2, N2),
            (!m2 || h2) && Ed.renderCallByParent(this.props, n2),
          );
        },
      },
    ]) && mt(t2.prototype, r2),
    a2 && mt(t2, a2),
    Object.defineProperty(t2, "prototype", { writable: false }),
    t2
  );
  var t2, r2, a2;
})();
(nt = xt),
  yt(xt, "displayName", "Area"),
  yt(xt, "defaultProps", {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: false,
    points: [],
    dot: false,
    activeDot: true,
    hide: false,
    isAnimationActive: !Lw.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  }),
  yt(xt, "getBaseValue", function (e2, t2, r2, a2) {
    var n2 = e2.layout,
      i2 = e2.baseValue,
      l2 = t2.props.baseValue,
      o2 = null != l2 ? l2 : i2;
    if (em(o2) && "number" == typeof o2) return o2;
    var s2 = "horizontal" === n2 ? a2 : r2,
      c2 = s2.scale.domain();
    if ("number" === s2.type) {
      var d2 = Math.max(c2[0], c2[1]),
        u2 = Math.min(c2[0], c2[1]);
      return "dataMin" === o2
        ? u2
        : "dataMax" === o2 || d2 < 0
          ? d2
          : Math.max(Math.min(c2[0], c2[1]), 0);
    }
    return "dataMin" === o2 ? c2[0] : "dataMax" === o2 ? c2[1] : c2[0];
  }),
  yt(xt, "getComposedData", function (e2) {
    var t2,
      r2 = e2.props,
      a2 = e2.item,
      n2 = e2.xAxis,
      i2 = e2.yAxis,
      l2 = e2.xAxisTicks,
      o2 = e2.yAxisTicks,
      s2 = e2.bandSize,
      c2 = e2.dataKey,
      d2 = e2.stackedData,
      u2 = e2.dataStartIndex,
      m2 = e2.displayedData,
      p2 = e2.offset,
      h2 = r2.layout,
      f2 = d2 && d2.length,
      g2 = nt.getBaseValue(r2, a2, n2, i2),
      y2 = "horizontal" === h2,
      v2 = false,
      x2 = m2.map(function (e3, t3) {
        var r3;
        f2
          ? (r3 = d2[u2 + t3])
          : ((r3 = mf(e3, c2)), Array.isArray(r3) ? (v2 = true) : (r3 = [g2, r3]));
        var a3 = null == r3[1] || (f2 && null == mf(e3, c2));
        return y2
          ? {
              x: If({ axis: n2, ticks: l2, bandSize: s2, entry: e3, index: t3 }),
              y: a3 ? null : i2.scale(r3[1]),
              value: r3,
              payload: e3,
            }
          : {
              x: a3 ? null : n2.scale(r3[1]),
              y: If({ axis: i2, ticks: o2, bandSize: s2, entry: e3, index: t3 }),
              value: r3,
              payload: e3,
            };
      });
    return (
      (t2 =
        f2 || v2
          ? x2.map(function (e3) {
              var t3 = Array.isArray(e3.value) ? e3.value[0] : null;
              return y2
                ? { x: e3.x, y: null != t3 && null != e3.y ? i2.scale(t3) : null }
                : { x: null != t3 ? n2.scale(t3) : null, y: e3.y };
            })
          : y2
            ? i2.scale(g2)
            : n2.scale(g2)),
      ut({ points: x2, baseLine: t2, layout: h2, isRange: v2 }, p2)
    );
  }),
  yt(xt, "renderDotItem", function (e2, t2) {
    var r2;
    if (g__default.isValidElement(e2)) r2 = g__default.cloneElement(e2, t2);
    else if (zh(e2)) r2 = e2(t2);
    else {
      var a2 = Nt$1("recharts-area-dot", "boolean" != typeof e2 ? e2.className : ""),
        n2 = t2.key,
        i2 = st(t2, lt);
      r2 = g__default.createElement(by, ct({}, i2, { key: n2, className: a2 }));
    }
    return r2;
  });
var bt = bO({
  chartName: "AreaChart",
  GraphicalChild: xt,
  axisComponents: [
    { axisType: "xAxis", AxisComp: lw },
    { axisType: "yAxis", AxisComp: xw },
  ],
  formatAxisMap: fb,
});
/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = KC("outline", "chevron-down", "ChevronDown", [
    ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }],
  ]),
  Nt = KC("outline", "chevron-left", "ChevronLeft", [
    ["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }],
  ]),
  kt = KC("outline", "chevron-right", "ChevronRight", [
    ["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }],
  ]),
  St = KC("outline", "chevrons-left", "ChevronsLeft", [
    ["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }],
    ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }],
  ]),
  At = KC("outline", "chevrons-right", "ChevronsRight", [
    ["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }],
    ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }],
  ]),
  Pt = KC("outline", "layout-columns", "LayoutColumns", [
    [
      "path",
      {
        d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M12 4l0 16", key: "svg-1" }],
  ]),
  Ct = KC("outline", "loader", "Loader", [
    ["path", { d: "M12 6l0 -3", key: "svg-0" }],
    ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }],
    ["path", { d: "M18 12l3 0", key: "svg-2" }],
    ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }],
    ["path", { d: "M12 18l0 3", key: "svg-4" }],
    ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }],
    ["path", { d: "M6 12l-3 0", key: "svg-6" }],
    ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }],
  ]),
  Ot = KC("outline", "plus", "Plus", [
    ["path", { d: "M12 5l0 14", key: "svg-0" }],
    ["path", { d: "M5 12l14 0", key: "svg-1" }],
  ]),
  Mt = KC("filled", "circle-check-filled", "CircleCheckFilled", [
    [
      "path",
      {
        d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",
        key: "svg-0",
      },
    ],
  ]),
  jt = (e2) => {
    var _a;
    if (0 === e2.length) return null;
    const t2 = e2.reduce((e3, t3) => (t3.points > e3.points ? t3 : e3));
    return (_a = (() => {
      const e3 = {};
      return (
        Object.keys(vM).forEach((t3) => {
          const r2 = t3.toLowerCase().replace(/\s+/g, "-");
          e3[r2] = t3;
        }),
        e3
      );
    })()[t2.endingId]) != null
      ? _a
      : t2.endingId;
  },
  zt = {
    count: { label: "Count" },
    visionary: { label: "Visionary", color: "var(--artist-visionary)" },
    consummate: { label: "Consummate", color: "var(--artist-consummate)" },
    analyzer: { label: "Analyzer", color: "var(--artist-analyzer)" },
    tech: { label: "Tech", color: "var(--artist-tech)" },
    entertainer: { label: "Entertainer", color: "var(--artist-entertainer)" },
    maverick: { label: "Maverick", color: "var(--artist-maverick)" },
    dreamer: { label: "Dreamer", color: "var(--artist-dreamer)" },
    feeler: { label: "Feeler", color: "var(--artist-feeler)" },
    tortured: { label: "Tortured", color: "var(--artist-tortured)" },
    solo: { label: "Solo", color: "var(--artist-solo)" },
  };
function Et() {
  const r2 = useAtomValue(TM),
    l2 = useAtomValue(RM),
    o2 = useAtomSet(TM),
    s2 = g.useCallback(async () => {
      try {
        const e2 = await Effect.runPromise(
          Effect.provide(
            Effect.gen(function* () {
              const e3 = yield* ba;
              return yield* e3.http.Analysis.list();
            }),
            ba.Default,
          ),
        );
        o2({ _tag: "BatchUpsert", analyses: e2 });
      } catch (e2) {
        Effect.logError("Failed to refresh analysis data:", e2);
      }
    }, [o2]),
    c2 = g.useMemo(() => {
      if (!Result.isSuccess(r2)) return [];
      const e2 = r2.value,
        t2 = {};
      return (
        e2.forEach((e3) => {
          var _a;
          const r3 = jt(e3.endingResults);
          if (null !== r3) {
            const e4 = vM[r3];
            void 0 !== e4 && (t2[e4] = ((_a = t2[e4]) != null ? _a : 0) + 1);
          }
        }),
        Object.entries(t2).map(([e3, t3]) => ({ type: e3.toLowerCase(), count: t3, fill: hM[e3] }))
      );
    }, [r2]),
    d2 = g.useMemo(() => (Result.isSuccess(r2) ? r2.value.length : 0), [r2, l2]);
  return Result.isSuccess(r2)
    ? jsxs(tf, {
        className: "flex flex-col w-full h-full",
        children: [
          jsx(tf.Header, {
            className: "items-center pb-0",
            children: jsxs("div", {
              className: "flex items-center justify-between w-full",
              children: [
                jsxs("div", {
                  children: [
                    jsx(tf.Title, { children: "Artist Type Analysis" }),
                    jsx(tf.Description, {
                      children: "Distribution of quiz responses by artist type",
                    }),
                  ],
                }),
                jsx(ii, {
                  variant: "outline",
                  size: "sm",
                  onClick: s2,
                  className: "h-8 w-8 p-0",
                  children: jsx(RefreshCwIcon, { className: "h-4 w-4" }),
                }),
              ],
            }),
          }),
          jsx(tf.Content, {
            className: "flex-1 pb-0",
            children: jsx(Sx, {
              config: zt,
              className: "mx-auto aspect-square w-full max-w-[300px] max-h-96",
              children: jsxs(wO, {
                children: [
                  jsx(_x, { cursor: false, content: jsx(Rx, { hideLabel: true }) }),
                  jsx(wv, {
                    data: c2,
                    dataKey: "count",
                    nameKey: "type",
                    innerRadius: 60,
                    strokeWidth: 5,
                    children: jsx(dd, {
                      content: ({ viewBox: r3 }) => {
                        var _a;
                        return r3 && "object" == typeof r3 && "cx" in r3 && "cy" in r3
                          ? jsxs("text", {
                              x: r3.cx,
                              y: r3.cy,
                              textAnchor: "middle",
                              dominantBaseline: "middle",
                              children: [
                                jsx("tspan", {
                                  x: r3.cx,
                                  y: r3.cy,
                                  className: "fill-foreground text-3xl font-bold",
                                  children: d2.toLocaleString(),
                                }),
                                jsx("tspan", {
                                  x: r3.cx,
                                  y: ((_a = r3.cy) != null ? _a : 0) + 24,
                                  className: "fill-muted-foreground",
                                  children: "Responses",
                                }),
                              ],
                            })
                          : null;
                      },
                    }),
                  }),
                ],
              }),
            }),
          }),
          jsxs(tf.Footer, {
            className: "flex-col gap-2 text-sm",
            children: [
              jsxs("div", {
                className: "flex items-center gap-2 leading-none font-medium",
                children: [
                  "Real-time analysis data ",
                  jsx(TrendingUpIcon, { className: "h-4 w-4" }),
                ],
              }),
              jsxs("div", {
                className: "text-muted-foreground leading-none",
                children: ["Showing analysis distribution from ", d2, " responses"],
              }),
            ],
          }),
        ],
      })
    : jsxs(tf, {
        className: "flex flex-col w-full h-full",
        children: [
          jsxs(tf.Header, {
            className: "items-center pb-0",
            children: [
              jsx(tf.Title, { children: "Artist Type Analysis" }),
              jsx(tf.Description, { children: "Loading analysis data..." }),
            ],
          }),
          jsx(tf.Content, {
            className: "flex-1 flex items-center justify-center",
            children: jsx("div", { className: "text-muted-foreground", children: "Loading..." }),
          }),
        ],
      });
}
const Rt = {
  completed: { label: "Completed", color: "var(--chart-1)" },
  inProgress: { label: "In Progress", color: "var(--chart-2)" },
  notStarted: { label: "Not Started", color: "var(--chart-3)" },
};
function Dt() {
  const [r2, a2] = g.useState("all"),
    [n2] = useAtom(RM),
    o2 = g.useMemo(() => {
      if (!Result.isSuccess(n2)) return [];
      const e2 = n2.value,
        t2 = {};
      return (
        e2.forEach((e3) => {
          const r3 = (function (e4) {
              return new Date(e4.createdAt.epochMillis);
            })(e3),
            a3 = r3.toISOString().split("T")[0];
          if (
            (a3 && void 0 === t2[a3] && (t2[a3] = { completed: 0, inProgress: 0, notStarted: 0 }),
            !a3)
          )
            return;
          const n3 = t2[a3];
          void 0 !== n3 &&
            (void 0 !== e3.sessionMetadata.completedAt
              ? n3.completed++
              : void 0 !== e3.sessionMetadata.startedAt
                ? n3.inProgress++
                : n3.notStarted++);
        }),
        Object.entries(t2)
          .map(([e3, t3]) => ({ date: e3, ...t3 }))
          .sort((e3, t3) => e3.date.localeCompare(t3.date))
      );
    }, [n2]),
    s2 = g.useMemo(() => {
      if (0 === o2.length) return [];
      if ("all" === r2) {
        const e3 = /* @__PURE__ */ new Date("2024-01-01");
        return o2.filter((t3) => new Date(t3.date) >= e3);
      }
      let e2 = 90;
      "30d" === r2 ? (e2 = 30) : "7d" === r2 && (e2 = 7);
      const t2 = new Date(/* @__PURE__ */ new Date());
      return t2.setDate(t2.getDate() - e2), o2.filter((e3) => new Date(e3.date) >= t2);
    }, [o2, r2]);
  return Result.isSuccess(n2)
    ? jsxs(tf, {
        className: "@container/card w-full h-full flex flex-col",
        children: [
          jsxs(tf.Header, {
            children: [
              jsx(tf.Title, { children: "Quiz Responses Over Time" }),
              jsxs(tf.Description, {
                children: [
                  jsx("span", {
                    className: "hidden @[540px]/card:block",
                    children: "Real-time response completion trends",
                  }),
                  jsx("span", { className: "@[540px]/card:hidden", children: "Response trends" }),
                ],
              }),
              jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  jsxs(AA, {
                    type: "single",
                    value: r2,
                    onValueChange: a2,
                    variant: "outline",
                    className: "hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex",
                    children: [
                      jsx(PA, { value: "all", children: "All (2024+)" }),
                      jsx(PA, { value: "90d", children: "Last 3 months" }),
                      jsx(PA, { value: "30d", children: "Last 30 days" }),
                      jsx(PA, { value: "7d", children: "Last 7 days" }),
                    ],
                  }),
                  jsxs(Cd, {
                    value: r2,
                    onValueChange: a2,
                    children: [
                      jsx(Cd.Trigger, {
                        className:
                          "flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden",
                        size: "sm",
                        "aria-label": "Select a value",
                        children: jsx(Cd.Value, { placeholder: "Last 3 months" }),
                      }),
                      jsxs(Cd.Content, {
                        className: "rounded-xl",
                        children: [
                          jsx(Cd.Item, {
                            value: "all",
                            className: "rounded-lg",
                            children: "All (2024+)",
                          }),
                          jsx(Cd.Item, {
                            value: "90d",
                            className: "rounded-lg",
                            children: "Last 3 months",
                          }),
                          jsx(Cd.Item, {
                            value: "30d",
                            className: "rounded-lg",
                            children: "Last 30 days",
                          }),
                          jsx(Cd.Item, {
                            value: "7d",
                            className: "rounded-lg",
                            children: "Last 7 days",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsx(tf.Content, {
            className: "px-2 pt-4 sm:px-6 sm:pt-6 flex-1",
            children: jsx(Sx, {
              config: Rt,
              className: " w-full max-h-56",
              children: jsxs(bt, {
                data: s2,
                children: [
                  jsxs("defs", {
                    children: [
                      jsxs("linearGradient", {
                        id: "fillCompleted",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          jsx("stop", {
                            offset: "5%",
                            stopColor: "var(--chart-1)",
                            stopOpacity: 0.8,
                          }),
                          jsx("stop", {
                            offset: "95%",
                            stopColor: "var(--chart-1)",
                            stopOpacity: 0.1,
                          }),
                        ],
                      }),
                      jsxs("linearGradient", {
                        id: "fillInProgress",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          jsx("stop", {
                            offset: "5%",
                            stopColor: "var(--chart-2)",
                            stopOpacity: 0.8,
                          }),
                          jsx("stop", {
                            offset: "95%",
                            stopColor: "var(--chart-2)",
                            stopOpacity: 0.1,
                          }),
                        ],
                      }),
                      jsxs("linearGradient", {
                        id: "fillNotStarted",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                          jsx("stop", {
                            offset: "5%",
                            stopColor: "var(--chart-3)",
                            stopOpacity: 0.8,
                          }),
                          jsx("stop", {
                            offset: "95%",
                            stopColor: "var(--chart-3)",
                            stopOpacity: 0.1,
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsx(at, { vertical: false }),
                  jsx(lw, {
                    dataKey: "date",
                    tickLine: false,
                    axisLine: false,
                    tickMargin: 8,
                    minTickGap: 32,
                    tickFormatter: (e2) => {
                      const t2 = new Date(String(e2));
                      if ("all" === r2) {
                        return 0 === t2.getMonth() && t2.getDate() <= 7
                          ? t2.getFullYear().toString()
                          : t2.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                      }
                      return t2.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                    },
                  }),
                  jsx(_x, {
                    cursor: false,
                    content: jsx(Rx, {
                      labelFormatter: (e2) => {
                        const t2 = new Date(String(e2));
                        return "all" === r2
                          ? t2.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "2-digit",
                            })
                          : t2.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                      },
                      indicator: "dot",
                    }),
                  }),
                  jsx(xt, {
                    dataKey: "notStarted",
                    type: "natural",
                    fill: "url(#fillNotStarted)",
                    stroke: "var(--chart-3)",
                    stackId: "a",
                  }),
                  jsx(xt, {
                    dataKey: "inProgress",
                    type: "natural",
                    fill: "url(#fillInProgress)",
                    stroke: "var(--chart-2)",
                    stackId: "a",
                  }),
                  jsx(xt, {
                    dataKey: "completed",
                    type: "natural",
                    fill: "url(#fillCompleted)",
                    stroke: "var(--chart-1)",
                    stackId: "a",
                  }),
                ],
              }),
            }),
          }),
        ],
      })
    : jsxs(tf, {
        className: "@container/card w-full h-full flex flex-col",
        children: [
          jsxs(tf.Header, {
            children: [
              jsx(tf.Title, { children: "Quiz Responses Over Time" }),
              jsx(tf.Description, { children: "Loading response data..." }),
            ],
          }),
          jsx(tf.Content, {
            className: "flex-1 flex items-center justify-center",
            children: jsx("div", { className: "text-muted-foreground", children: "Loading..." }),
          }),
        ],
      });
}
const It = ({ artistType: r2, variant: a2 = "default" }) => {
  const n2 = `the-${r2.toLowerCase().replace(/\s+/g, "-")}-artist`,
    i2 = OM(n2),
    l2 = mM(r2);
  return jsxs(h, {
    variant: a2,
    className: "px-2 flex items-center gap-1.5",
    style: { backgroundColor: `${l2}20`, borderColor: l2, color: l2 },
    children: [
      null != i2 &&
        "" !== i2 &&
        jsx("img", {
          src: i2,
          alt: `${r2} icon`,
          className: "w-4 h-4 rounded-full",
          style: { filter: "brightness(0) invert(1)" },
        }),
      r2,
    ],
  });
};
function Lt(e2) {
  return e2
    .replace(/^the-/, "")
    .replace(/-artist$/, "")
    .split("-")
    .map((e3) => e3.charAt(0).toUpperCase() + e3.slice(1))
    .join(" ");
}
function Tt(e2, t2) {
  const r2 = new Map(t2.map((e3) => [e3.responseId, e3]));
  return e2.map((e3) => {
    const t3 = r2.get(e3.id),
      { primary: a2, secondary: n2 } = (function (e4) {
        var _a, _b;
        if (void 0 === e4) return {};
        const t4 = e4.endingResults;
        if (0 === t4.length) return {};
        const r3 = [...t4].sort((e5, t5) => t5.percentage - e5.percentage),
          a3 = (_a = r3[0]) == null ? void 0 : _a.endingId,
          n3 = (_b = r3[1]) == null ? void 0 : _b.endingId,
          i3 = {};
        return void 0 !== a3 && (i3.primary = Lt(a3)), void 0 !== n3 && (i3.secondary = Lt(n3)), i3;
      })(t3),
      i2 = (function (e4) {
        var _a;
        const t4 = e4.sessionMetadata.customFields;
        if (void 0 !== t4) {
          const e5 = t4.name,
            r4 = t4.email,
            a3 = t4.profilePicture;
          if (
            (void 0 !== e5 && "" !== e5) ||
            (void 0 !== r4 && "" !== r4) ||
            (void 0 !== a3 && "" !== a3)
          ) {
            const t5 = {};
            return (
              void 0 !== e5 && "" !== e5 && (t5.name = e5),
              void 0 !== r4 && "" !== r4 && (t5.email = r4),
              void 0 !== a3 && "" !== a3 && (t5.profilePicture = a3),
              t5
            );
          }
        }
        const r3 = (_a = e4.metadata) == null ? void 0 : _a.customFields;
        if (void 0 !== r3) {
          const e5 = r3.name,
            t5 = r3.email,
            a3 = r3.profilePicture;
          if (
            (void 0 !== e5 && "" !== e5) ||
            (void 0 !== t5 && "" !== t5) ||
            (void 0 !== a3 && "" !== a3)
          ) {
            const r4 = {};
            return (
              void 0 !== e5 && "" !== e5 && (r4.name = e5),
              void 0 !== t5 && "" !== t5 && (r4.email = t5),
              void 0 !== a3 && "" !== a3 && (r4.profilePicture = a3),
              r4
            );
          }
        }
        return {};
      })(e3),
      l2 = (function (e4) {
        var _a, _b, _c;
        const t4 = e4.sessionMetadata.customFields;
        if (
          "typeform" === (t4 == null ? void 0 : t4.source) ||
          true === (t4 == null ? void 0 : t4.typeform)
        )
          return true;
        const r3 = (_a = e4.metadata) == null ? void 0 : _a.customFields;
        return (
          "typeform" === (r3 == null ? void 0 : r3.source) ||
          true === (r3 == null ? void 0 : r3.typeform) ||
          true ===
            ((_c = (_b = e4.metadata) == null ? void 0 : _b.customFields) == null
              ? void 0
              : _c.typeform)
        );
      })(e3);
    return {
      ...e3,
      analysisResult: t3 != null ? t3 : void 0,
      primaryArtistType: a2 != null ? a2 : void 0,
      secondaryArtistType: n2 != null ? n2 : void 0,
      userInfo: Object.keys(i2).length > 0 ? i2 : void 0,
      isTypeform: l2,
    };
  });
}
const Ft = [
  {
    id: "select",
    header: ({ table: e2 }) =>
      jsx("div", {
        className: "flex items-center justify-center",
        children: jsx(Vx, {
          checked:
            e2.getIsAllPageRowsSelected() || (e2.getIsSomePageRowsSelected() && "indeterminate"),
          onCheckedChange: (t2) => {
            e2.toggleAllPageRowsSelected(Boolean(t2));
          },
          "aria-label": "Select all",
        }),
      }),
    cell: ({ row: e2 }) =>
      jsx("div", {
        className: "flex items-center justify-center",
        children: jsx(Vx, {
          checked: e2.getIsSelected(),
          onCheckedChange: (t2) => {
            e2.toggleSelected(Boolean(t2));
          },
          "aria-label": "Select row",
        }),
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userInfo",
    header: "User",
    cell: ({ row: r2 }) => {
      const a2 = r2.original.userInfo;
      return void 0 === a2
        ? jsx("div", { className: "text-sm text-muted-foreground", children: "Anonymous" })
        : jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              void 0 !== a2.profilePicture &&
                "" !== a2.profilePicture &&
                jsx("img", {
                  src: a2.profilePicture,
                  alt: "Profile",
                  className: "w-6 h-6 rounded-full",
                }),
              jsxs("div", {
                className: "flex flex-col",
                children: [
                  void 0 !== a2.name &&
                    "" !== a2.name &&
                    jsx("div", { className: "text-sm font-medium", children: a2.name }),
                  void 0 !== a2.email &&
                    "" !== a2.email &&
                    jsx("div", { className: "text-xs text-muted-foreground", children: a2.email }),
                  (void 0 === a2.name || "" === a2.name) &&
                    (void 0 === a2.email || "" === a2.email) &&
                    jsx("div", {
                      className: "text-sm text-muted-foreground",
                      children: "Anonymous",
                    }),
                ],
              }),
            ],
          });
    },
    enableHiding: false,
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row: e2 }) =>
      jsx("div", {
        className: "text-sm",
        children: new Date(e2.original.createdAt.epochMillis).toLocaleDateString(),
      }),
  },
  {
    accessorKey: "answers",
    header: "Answers",
    cell: ({ row: t2 }) => {
      var _a, _b;
      return jsxs(h, {
        variant: "outline",
        className: "text-muted-foreground px-1.5",
        children: [
          (_b = (_a = t2.original.answers) == null ? void 0 : _a.length) != null ? _b : 0,
          " answers",
        ],
      });
    },
  },
  {
    accessorKey: "sessionMetadata",
    header: "Duration",
    cell: ({ row: r2 }) => {
      const a2 = r2.original.sessionMetadata.totalDurationMs;
      return void 0 !== a2 && a2 > 0
        ? jsxs("div", { className: "text-sm", children: [Math.round(a2 / 1e3), "s"] })
        : jsx("div", { className: "text-sm text-muted-foreground", children: "-" });
    },
  },
  {
    accessorKey: "interactionLogs",
    header: "Interactions",
    cell: ({ row: t2 }) => {
      var _a, _b;
      return jsxs(h, {
        variant: "outline",
        className: "text-muted-foreground px-1.5",
        children: [
          (_b = (_a = t2.original.interactionLogs) == null ? void 0 : _a.length) != null ? _b : 0,
          " logs",
        ],
      });
    },
  },
  {
    accessorKey: "sessionMetadata.completedAt",
    header: "Status",
    cell: ({ row: r2 }) => {
      const a2 = r2.original.sessionMetadata.completedAt;
      return jsxs(
        h,
        void 0 !== a2
          ? {
              variant: "outline",
              className: "text-green-600 px-1.5",
              children: [
                jsx(Mt, { className: "fill-green-500 dark:fill-green-400 mr-1" }),
                "Completed",
              ],
            }
          : {
              variant: "outline",
              className: "text-yellow-600 px-1.5",
              children: [jsx(Ct, { className: "mr-1" }), "In Progress"],
            },
      );
    },
  },
  {
    accessorKey: "isTypeform",
    header: "Source",
    cell: ({ row: e2 }) => {
      const r2 = e2.original.isTypeform;
      return jsx(
        h,
        true === r2
          ? { variant: "outline", className: "text-blue-600 px-1.5", children: "Typeform" }
          : { variant: "outline", className: "text-gray-600 px-1.5", children: "Web App" },
      );
    },
  },
  {
    accessorKey: "primaryArtistType",
    header: "Primary Type",
    cell: ({ row: e2 }) => {
      const r2 = e2.original.primaryArtistType;
      return void 0 !== r2 && "" !== r2
        ? jsx(It, { artistType: r2, variant: "default" })
        : jsx("div", { className: "text-sm text-muted-foreground", children: "-" });
    },
  },
  {
    accessorKey: "secondaryArtistType",
    header: "Secondary Type",
    cell: ({ row: e2 }) => {
      const r2 = e2.original.secondaryArtistType;
      return void 0 !== r2 && "" !== r2
        ? jsx(It, { artistType: r2, variant: "secondary" })
        : jsx("div", { className: "text-sm text-muted-foreground", children: "-" });
    },
  },
  {
    id: "actions",
    cell: () =>
      jsxs(SR, {
        children: [
          jsx(SR.Trigger, {
            asChild: true,
            children: jsxs(ii, {
              variant: "ghost",
              className: "data-[state=open]:bg-muted text-muted-foreground flex size-8",
              size: "icon",
              children: [jsx(p, {}), jsx("span", { className: "sr-only", children: "Open menu" })],
            }),
          }),
          jsxs(SR.Content, {
            align: "end",
            className: "w-32",
            children: [
              jsx(SR.Item, { children: "View Details" }),
              jsx(SR.Item, { children: "Export" }),
              jsx(SR.Separator, {}),
              jsx(SR.Item, { variant: "destructive", children: "Delete" }),
            ],
          }),
        ],
      }),
  },
];
function Bt({ row: e2 }) {
  return jsx(MN.Row, {
    "data-state": e2.getIsSelected() && "selected",
    children: e2
      .getVisibleCells()
      .map((e3) =>
        jsx(MN.Cell, { children: flexRender(e3.column.columnDef.cell, e3.getContext()) }, e3.id),
      ),
  });
}
function Vt({ data: r2 }) {
  const [a2, n2] = g.useState({}),
    [i2, l2] = g.useState({}),
    [o2, s2] = g.useState([]),
    [c2, d2] = g.useState([{ id: "createdAt", desc: true }]),
    [u2, m2] = g.useState({ pageIndex: 0, pageSize: 10 }),
    [p2, h2] = g.useState("responses"),
    f2 = g.useMemo(() => {
      switch (p2) {
        case "completed":
          return r2.filter((e2) => void 0 !== e2.sessionMetadata.completedAt);
        case "in-progress":
          return r2.filter((e2) => void 0 === e2.sessionMetadata.completedAt);
        default:
          return r2;
      }
    }, [r2, p2]),
    g2 = useReactTable({
      data: f2,
      columns: Ft,
      state: {
        sorting: c2,
        columnVisibility: i2,
        rowSelection: a2,
        columnFilters: o2,
        pagination: u2,
      },
      getRowId: (e2) => e2.id.toString(),
      enableRowSelection: true,
      onRowSelectionChange: n2,
      onSortingChange: d2,
      onColumnFiltersChange: s2,
      onColumnVisibilityChange: l2,
      onPaginationChange: m2,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
    });
  return jsxs(aA, {
    defaultValue: "responses",
    className: "w-full flex-col justify-start gap-6",
    children: [
      jsxs("div", {
        className: "flex items-center justify-between px-4 lg:px-6",
        children: [
          jsx(jO, { htmlFor: "view-selector", className: "sr-only", children: "View" }),
          jsxs(Cd, {
            value: p2,
            onValueChange: h2,
            children: [
              jsx(Cd.Trigger, {
                className: "flex w-fit @4xl/main:hidden",
                size: "sm",
                id: "view-selector",
                children: jsx(Cd.Value, { placeholder: "Select a view" }),
              }),
              jsxs(Cd.Content, {
                children: [
                  jsx(Cd.Item, { value: "responses", children: "All Responses" }),
                  jsx(Cd.Item, { value: "completed", children: "Completed" }),
                  jsx(Cd.Item, { value: "in-progress", children: "In Progress" }),
                ],
              }),
            ],
          }),
          jsxs(aA.List, {
            className:
              "**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex",
            children: [
              jsx(aA.Trigger, {
                value: "responses",
                onClick: () => {
                  h2("responses");
                },
                children: "All Responses",
              }),
              jsxs(aA.Trigger, {
                value: "completed",
                onClick: () => {
                  h2("completed");
                },
                children: [
                  jsx("span", { children: "Completed" }),
                  jsx("span", {
                    className: "ml-2",
                    children: jsx(h, {
                      variant: "secondary",
                      children: r2.filter((e2) => void 0 !== e2.sessionMetadata.completedAt).length,
                    }),
                  }),
                ],
              }),
              jsxs(aA.Trigger, {
                value: "in-progress",
                onClick: () => {
                  h2("in-progress");
                },
                children: [
                  jsx("span", { children: "In Progress" }),
                  jsx("span", {
                    className: "ml-2",
                    children: jsx(h, {
                      variant: "secondary",
                      children: r2.filter((e2) => void 0 === e2.sessionMetadata.completedAt).length,
                    }),
                  }),
                ],
              }),
            ],
          }),
          jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              jsxs(SR, {
                children: [
                  jsx(SR.Trigger, {
                    asChild: true,
                    children: jsxs(ii, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        jsx(Pt, {}),
                        jsx("span", {
                          className: "hidden lg:inline",
                          children: "Customize Columns",
                        }),
                        jsx("span", { className: "lg:hidden", children: "Columns" }),
                        jsx(wt, {}),
                      ],
                    }),
                  }),
                  jsx(SR.Content, {
                    align: "end",
                    className: "w-56",
                    children: g2
                      .getAllColumns()
                      .filter((e2) => void 0 !== e2.accessorFn && e2.getCanHide())
                      .map((e2) =>
                        jsx(
                          SR.CheckboxItem,
                          {
                            className: "capitalize",
                            checked: e2.getIsVisible(),
                            onCheckedChange: (t2) => {
                              e2.toggleVisibility(Boolean(t2));
                            },
                            children: e2.id,
                          },
                          e2.id,
                        ),
                      ),
                  }),
                ],
              }),
              jsxs(ii, {
                variant: "outline",
                size: "sm",
                children: [
                  jsx(Ot, {}),
                  jsx("span", { className: "hidden lg:inline", children: "Export Data" }),
                ],
              }),
            ],
          }),
        ],
      }),
      jsxs(aA.Content, {
        value: p2,
        className: "relative flex flex-col gap-4 overflow-auto px-4 lg:px-6",
        children: [
          jsx("div", {
            className: "overflow-hidden rounded-lg border",
            children: jsxs(MN, {
              children: [
                jsx(MN.Header, {
                  className: "bg-muted sticky top-0 z-10",
                  children: g2
                    .getHeaderGroups()
                    .map((e2) =>
                      jsx(
                        MN.Row,
                        {
                          children: e2.headers.map((e3) =>
                            jsx(
                              MN.Head,
                              {
                                colSpan: e3.colSpan,
                                children: e3.isPlaceholder
                                  ? null
                                  : flexRender(e3.column.columnDef.header, e3.getContext()),
                              },
                              e3.id,
                            ),
                          ),
                        },
                        e2.id,
                      ),
                    ),
                }),
                jsx(MN.Body, {
                  children:
                    g2.getRowModel().rows.length > 0
                      ? g2.getRowModel().rows.map((e2) => jsx(Bt, { row: e2 }, e2.id))
                      : jsx(MN.Row, {
                          children: jsx(MN.Cell, {
                            colSpan: Ft.length,
                            className: "h-24 text-center",
                            children: "No responses found.",
                          }),
                        }),
                }),
              ],
            }),
          }),
          jsxs("div", {
            className: "flex items-center justify-between px-4",
            children: [
              jsxs("div", {
                className: "text-muted-foreground hidden flex-1 text-sm lg:flex",
                children: [
                  g2.getFilteredSelectedRowModel().rows.length,
                  " of",
                  " ",
                  g2.getFilteredRowModel().rows.length,
                  " row(s) selected.",
                ],
              }),
              jsxs("div", {
                className: "flex w-full items-center gap-8 lg:w-fit",
                children: [
                  jsxs("div", {
                    className: "hidden items-center gap-2 lg:flex",
                    children: [
                      jsx(jO, {
                        htmlFor: "rows-per-page",
                        className: "text-sm font-medium",
                        children: "Rows per page",
                      }),
                      jsxs(Cd, {
                        value: `${g2.getState().pagination.pageSize}`,
                        onValueChange: (e2) => {
                          g2.setPageSize(Number(e2));
                        },
                        children: [
                          jsx(Cd.Trigger, {
                            size: "sm",
                            className: "w-20",
                            id: "rows-per-page",
                            children: jsx(Cd.Value, {
                              placeholder: g2.getState().pagination.pageSize,
                            }),
                          }),
                          jsx(Cd.Content, {
                            side: "top",
                            children: [10, 20, 30, 40, 50].map((e2) =>
                              jsx(Cd.Item, { value: `${e2}`, children: e2 }, e2),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "flex w-fit items-center justify-center text-sm font-medium",
                    children: [
                      "Page ",
                      g2.getState().pagination.pageIndex + 1,
                      " of ",
                      g2.getPageCount(),
                    ],
                  }),
                  jsxs("div", {
                    className: "ml-auto flex items-center gap-2 lg:ml-0",
                    children: [
                      jsxs(ii, {
                        variant: "outline",
                        className: "hidden h-8 w-8 p-0 lg:flex",
                        onClick: () => {
                          g2.setPageIndex(0);
                        },
                        disabled: !g2.getCanPreviousPage(),
                        children: [
                          jsx("span", { className: "sr-only", children: "Go to first page" }),
                          jsx(St, {}),
                        ],
                      }),
                      jsxs(ii, {
                        variant: "outline",
                        className: "size-8",
                        size: "icon",
                        onClick: () => {
                          g2.previousPage();
                        },
                        disabled: !g2.getCanPreviousPage(),
                        children: [
                          jsx("span", { className: "sr-only", children: "Go to previous page" }),
                          jsx(Nt, {}),
                        ],
                      }),
                      jsxs(ii, {
                        variant: "outline",
                        className: "size-8",
                        size: "icon",
                        onClick: () => {
                          g2.nextPage();
                        },
                        disabled: !g2.getCanNextPage(),
                        children: [
                          jsx("span", { className: "sr-only", children: "Go to next page" }),
                          jsx(kt, {}),
                        ],
                      }),
                      jsxs(ii, {
                        variant: "outline",
                        className: "hidden size-8 lg:flex",
                        size: "icon",
                        onClick: () => {
                          g2.setPageIndex(g2.getPageCount() - 1);
                        },
                        disabled: !g2.getCanNextPage(),
                        children: [
                          jsx("span", { className: "sr-only", children: "Go to last page" }),
                          jsx(At, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Gt = ({ responsesResult: r2 }) => {
    const a2 = g__default.useMemo(() => {
      if ("Success" !== r2._tag)
        return { totalResponses: 0, completedResponses: 0, averageDuration: 0, completionRate: 0 };
      const e2 = r2.value,
        t2 = e2.length,
        a3 = e2.filter((e3) => void 0 !== e3.sessionMetadata.completedAt).length,
        n2 = e2.reduce((e3, t3) => {
          var _a;
          return e3 + ((_a = t3.sessionMetadata.totalDurationMs) != null ? _a : 0);
        }, 0),
        i2 = t2 > 0 ? n2 / t2 : 0,
        l2 = t2 > 0 ? (a3 / t2) * 100 : 0;
      return {
        totalResponses: t2,
        completedResponses: a3,
        averageDuration: Math.round(i2 / 1e3),
        completionRate: Math.round(l2),
      };
    }, [r2]);
    return jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
      children: [
        jsx(tf, {
          className: "p-6",
          children: jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx("p", {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Total Responses",
                  }),
                  jsx("p", { className: "text-2xl font-bold", children: a2.totalResponses }),
                ],
              }),
              jsx("div", {
                className:
                  "h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center",
                children: jsx(UsersIcon, { className: "h-6 w-6 text-blue-600 dark:text-blue-400" }),
              }),
            ],
          }),
        }),
        jsx(tf, {
          className: "p-6",
          children: jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx("p", {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Completed",
                  }),
                  jsx("p", { className: "text-2xl font-bold", children: a2.completedResponses }),
                ],
              }),
              jsx("div", {
                className:
                  "h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center",
                children: jsx(CheckCircleIcon, {
                  className: "h-6 w-6 text-green-600 dark:text-green-400",
                }),
              }),
            ],
          }),
        }),
        jsx(tf, {
          className: "p-6",
          children: jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx("p", {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Completion Rate",
                  }),
                  jsxs("p", {
                    className: "text-2xl font-bold",
                    children: [a2.completionRate, "%"],
                  }),
                ],
              }),
              jsx("div", {
                className:
                  "h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center",
                children: jsx(BarChart3Icon, {
                  className: "h-6 w-6 text-purple-600 dark:text-purple-400",
                }),
              }),
            ],
          }),
        }),
        jsx(tf, {
          className: "p-6",
          children: jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx("p", {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Avg Duration",
                  }),
                  jsx("p", {
                    className: "text-2xl font-bold",
                    children: ((e2) => {
                      if (e2 < 60) return `${e2}s`;
                      return `${Math.floor(e2 / 60)}m ${e2 % 60}s`;
                    })(a2.averageDuration),
                  }),
                ],
              }),
              jsx("div", {
                className:
                  "h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center",
                children: jsx(ClockIcon, {
                  className: "h-6 w-6 text-orange-600 dark:text-orange-400",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Kt = () => {
    const i2 = "/admin/quiz-editor" === useLocation().pathname,
      [l2, o2] = g__default.useState(false),
      s2 = useAtomValue(IO),
      c2 = useAtomSet(IO);
    g__default.useEffect(() => {
      o2(true);
    }, []);
    const d2 = useAtomValue(RM),
      u2 = useAtomValue(TM),
      m2 = g__default.useMemo(
        () => ("Success" === d2._tag && "Success" === u2._tag ? Tt(d2.value, u2.value) : []),
        [d2, u2],
      );
    return jsxs(IN, {
      open: !l2 || s2,
      onOpenChange: c2,
      children: [
        jsx(CO, { variant: "inset" }),
        jsx(ON, {
          children: jsx("div", {
            className: "flex flex-1 flex-col",
            children: jsx("div", {
              className: "@container/main flex flex-1 flex-col gap-2",
              children: jsxs("div", {
                className: `flex flex-col gap-4 ${i2 ? "" : "py-4 md:py-6"} md:gap-6 relative`,
                children: [
                  !i2 &&
                    jsxs(Fragment, {
                      children: [
                        jsx(ii, {
                          variant: "outline",
                          size: "sm",
                          onClick: () => {
                            c2(!s2);
                          },
                          className: "absolute top-4 left-4 z-10 h-8 w-8 p-0",
                          title: s2 ? "Hide sidebar" : "Show sidebar",
                          children: jsx(s2 ? ChevronLeftIcon : ChevronRightIcon, {
                            className: "h-4 w-4",
                          }),
                        }),
                        jsx(Link, {
                          to: "/admin/quiz-editor",
                          children: jsxs(ii, {
                            variant: "outline",
                            size: "sm",
                            className: "absolute top-4 right-4 z-10 h-8 px-3",
                            title: "Go to Quiz Editor",
                            children: [
                              jsx(EditIcon, { className: "h-4 w-4 mr-2" }),
                              "Go To Editor",
                            ],
                          }),
                        }),
                        jsxs("div", {
                          className: "px-4 lg:px-6 pt-12",
                          children: [
                            jsx("h2", {
                              className: "text-xl font-semibold mb-4",
                              children: "Response Statistics",
                            }),
                            jsx(Gt, { responsesResult: d2 }),
                          ],
                        }),
                        jsx("div", {
                          className: "px-4 lg:px-6",
                          children: jsxs("div", {
                            className: "grid grid-cols-1 lg:grid-cols-10 gap-6",
                            children: [
                              jsx("div", { className: "lg:col-span-3", children: jsx(Et, {}) }),
                              jsx("div", { className: "lg:col-span-7", children: jsx(Dt, {}) }),
                            ],
                          }),
                        }),
                        jsxs("div", {
                          className: "px-4 lg:px-6",
                          children: [
                            jsx("h2", {
                              className: "text-xl font-semibold mb-4",
                              children: "Recent Responses",
                            }),
                            "Success" === d2._tag && "Success" === u2._tag
                              ? jsx(Vt, { data: m2 })
                              : jsx("div", {
                                  className: "text-center py-8 text-muted-foreground",
                                  children: "Loading responses and analysis data...",
                                }),
                          ],
                        }),
                      ],
                    }),
                  jsx(Outlet, {}),
                ],
              }),
            }),
          }),
        }),
      ],
    });
  };

export { Kt as component };
//# sourceMappingURL=admin-BdgW9Bdh.mjs.map
