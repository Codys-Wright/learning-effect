import {
  Atom,
  Registry,
  Result,
  useAtomMount,
  useAtomSet,
  useAtomValue,
} from "@effect-atom/atom-react";
import { BrowserKeyValueStore } from "@effect/platform-browser";
import Nt from "clsx";
import {
  Array as Array$1,
  Cause,
  Config,
  Data,
  DateTime,
  Effect,
  Layer,
  LogLevel,
  Logger,
  Schema,
} from "effect";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BarChart3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GitBranchIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  PlayIcon,
  RotateCcwIcon,
  SaveIcon,
  SettingsIcon,
  SlidersIcon,
} from "lucide-react";
import * as g from "react";
import g__default, {
  Children,
  Component,
  PureComponent,
  cloneElement,
  createContext,
  createElement,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as Et from "react-resizable-panels";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { C, N, b, h, m, u, x, y } from "./nav-user-6r4i62oK.mjs";
import {
  ay as AC,
  aw as AR,
  al as Ag$1,
  _ as Ah$1,
  $ as Am$1,
  s as Cd$1,
  w as Dg$1,
  V as Dh$1,
  au as Ea$1,
  y as Eh$1,
  a4 as Fy$1,
  an as Ig$1,
  X as Jh$1,
  K as Jy$1,
  c as KC,
  x as Ka$1,
  Q as Ky$1,
  aa as Lg$1,
  G as Lw$1,
  a1 as Mh$1,
  f as Ng$1,
  U as Pm$1,
  av as QS$1,
  j as Qh$1,
  p as Rx$1,
  D as SR,
  L as Sh$1,
  n as Sx$1,
  z as Td$1,
  ar as Tg$1,
  h as Th$1,
  ag as Uy$1,
  P as Xb$1,
  ac as Zb$1,
  a2 as Zh$1,
  O as Zp$1,
  am as _g$1,
  Y as _m$1,
  o as _x$1,
  T as aA$1,
  J as ah$1,
  Z as am$1,
  ab as aw$1,
  m as ba$1,
  a0 as cm$1,
  a7 as cx$1,
  ak as dm$1,
  M as eb$1,
  i as em$1,
  a9 as ew$1,
  as as fx$1,
  at as gi$1,
  F as ib$1,
  B as ii$1,
  aj as im$1,
  aq as kg$1,
  I as li$1,
  g as lm$1,
  ax as lo$1,
  a8 as lw$1,
  H as nm$1,
  a6 as oh$1,
  l as om$1,
  af as qy$1,
  a5 as rh$1,
  ao as sm$1,
  ap as sx$1,
  ah as tb$1,
  C as tf$1,
  ad as tm$1,
  N as tw$1,
  ae as um$1,
  W as uw$1,
  d as va$1,
  a3 as vm$1,
  ai as wh$1,
  R as wt,
  E as ym$1,
  S as zN,
  e as zh$1,
} from "./ssr.mjs";

const It = (e20) =>
  Effect.fnUntraced(function* (t2, ...n2) {
    const r2 = toast.loading(
      "string" == typeof e20.onWaiting ? e20.onWaiting : e20.onWaiting(...n2),
    );
    return yield* t2.pipe(
      Effect.tap((t3) => {
        toast.success("string" == typeof e20.onSuccess ? e20.onSuccess : e20.onSuccess(t3, ...n2), {
          id: r2,
        });
      }),
      Effect.tapErrorCause((t3) =>
        Effect.sync(() => {
          toast.error(
            "string" == typeof e20.onFailure
              ? e20.onFailure
              : e20.onFailure(Cause.failureOption(t3), ...n2),
            { id: r2 },
          );
        }),
      ),
    );
  });
var _t = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ct() {
  return (
    (Ct = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Ct.apply(this, arguments)
  );
}
function zt(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Dt(e20) {
  var t2 = e20.children,
    n2 = e20.width,
    i2 = e20.height,
    o2 = e20.viewBox,
    a2 = e20.className,
    s2 = e20.style,
    c2 = e20.title,
    l2 = e20.desc,
    u2 = zt(e20, _t),
    f2 = o2 || { width: n2, height: i2, x: 0, y: 0 },
    d2 = Nt("recharts-surface", a2);
  return g__default.createElement(
    "svg",
    Ct({}, Ng$1(u2, true, "svg"), {
      className: d2,
      width: n2,
      height: i2,
      style: s2,
      viewBox: "".concat(f2.x, " ").concat(f2.y, " ").concat(f2.width, " ").concat(f2.height),
    }),
    g__default.createElement("title", null, c2),
    g__default.createElement("desc", null, l2),
    t2,
  );
}
var Rt = ["children", "className"];
function Lt() {
  return (
    (Lt = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Lt.apply(this, arguments)
  );
}
function $t(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
var Bt,
  qt,
  Ft,
  Ut,
  Wt,
  Vt,
  Qt,
  Gt,
  Ht,
  Xt,
  Kt,
  Yt,
  Zt,
  Jt,
  en,
  tn,
  nn = g__default.forwardRef(function (e20, t2) {
    var n2 = e20.children,
      i2 = e20.className,
      o2 = $t(e20, Rt),
      a2 = Nt("recharts-layer", i2);
    return g__default.createElement("g", Lt({ className: a2 }, Ng$1(o2, true), { ref: t2 }), n2);
  });
function rn() {
  if (Ut) return Ft;
  Ut = 1;
  var e20 =
    (qt ||
      ((qt = 1),
      (Bt = function (e21, t2, n2) {
        var r2 = -1,
          i2 = e21.length;
        t2 < 0 && (t2 = -t2 > i2 ? 0 : i2 + t2),
          (n2 = n2 > i2 ? i2 : n2) < 0 && (n2 += i2),
          (i2 = t2 > n2 ? 0 : (n2 - t2) >>> 0),
          (t2 >>>= 0);
        for (var o2 = Array(i2); ++r2 < i2; ) o2[r2] = e21[r2 + t2];
        return o2;
      })),
    Bt);
  return (
    (Ft = function (t2, n2, r2) {
      var i2 = t2.length;
      return (r2 = void 0 === r2 ? i2 : r2), !n2 && r2 >= i2 ? t2 : e20(t2, n2, r2);
    }),
    Ft
  );
}
function on() {
  if (Vt) return Wt;
  Vt = 1;
  var e20 = RegExp(
    "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
  );
  return (
    (Wt = function (t2) {
      return e20.test(t2);
    }),
    Wt
  );
}
function an() {
  if (Yt) return Kt;
  Yt = 1;
  var e20 =
      (Gt ||
        ((Gt = 1),
        (Qt = function (e21) {
          return e21.split("");
        })),
      Qt),
    t2 = on(),
    n2 = (function () {
      if (Xt) return Ht;
      Xt = 1;
      var e21 = "\\ud800-\\udfff",
        t3 = "[" + e21 + "]",
        n3 = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        r2 = "\\ud83c[\\udffb-\\udfff]",
        i2 = "[^" + e21 + "]",
        o2 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        a2 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        s2 = "(?:" + n3 + "|" + r2 + ")?",
        c2 = "[\\ufe0e\\ufe0f]?",
        l2 = c2 + s2 + "(?:\\u200d(?:" + [i2, o2, a2].join("|") + ")" + c2 + s2 + ")*",
        u2 = "(?:" + [i2 + n3 + "?", n3, o2, a2, t3].join("|") + ")",
        f2 = RegExp(r2 + "(?=" + r2 + ")|" + u2 + l2, "g");
      return (
        (Ht = function (e22) {
          return e22.match(f2) || [];
        }),
        Ht
      );
    })();
  return (
    (Kt = function (r2) {
      return t2(r2) ? n2(r2) : e20(r2);
    }),
    Kt
  );
}
var sn = (function () {
  if (tn) return en;
  tn = 1;
  var e20 = (function () {
      if (Jt) return Zt;
      Jt = 1;
      var e21 = rn(),
        t3 = on(),
        n2 = an(),
        r2 = Eh$1();
      return (
        (Zt = function (i2) {
          return function (o2) {
            o2 = r2(o2);
            var a2 = t3(o2) ? n2(o2) : void 0,
              s2 = a2 ? a2[0] : o2.charAt(0),
              c2 = a2 ? e21(a2, 1).join("") : o2.slice(1);
            return s2[i2]() + c2;
          };
        }),
        Zt
      );
    })(),
    t2 = e20("toUpperCase");
  return (en = t2);
})();
const cn = Td$1(sn);
function ln(e20) {
  return function () {
    return e20;
  };
}
const un = Math.cos,
  fn = Math.sin,
  dn = Math.sqrt,
  pn = Math.PI,
  hn = 2 * pn,
  yn = Math.PI,
  mn = 2 * yn,
  vn = 1e-6,
  gn = mn - vn;
function bn(e20) {
  this._ += e20[0];
  for (let t2 = 1, n2 = e20.length; t2 < n2; ++t2) this._ += arguments[t2] + e20[t2];
}
class xn {
  constructor(e20) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append =
        null == e20
          ? bn
          : (function (e21) {
              let t2 = Math.floor(e21);
              if (!(t2 >= 0)) throw new Error(`invalid digits: ${e21}`);
              if (t2 > 15) return bn;
              const n2 = 10 ** t2;
              return function (e22) {
                this._ += e22[0];
                for (let t3 = 1, r2 = e22.length; t3 < r2; ++t3)
                  this._ += Math.round(arguments[t3] * n2) / n2 + e22[t3];
              };
            })(e20));
  }
  moveTo(e20, t2) {
    this._append`M${(this._x0 = this._x1 = +e20)},${(this._y0 = this._y1 = +t2)}`;
  }
  closePath() {
    null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(e20, t2) {
    this._append`L${(this._x1 = +e20)},${(this._y1 = +t2)}`;
  }
  quadraticCurveTo(e20, t2, n2, r2) {
    this._append`Q${+e20},${+t2},${(this._x1 = +n2)},${(this._y1 = +r2)}`;
  }
  bezierCurveTo(e20, t2, n2, r2, i2, o2) {
    this._append`C${+e20},${+t2},${+n2},${+r2},${(this._x1 = +i2)},${(this._y1 = +o2)}`;
  }
  arcTo(e20, t2, n2, r2, i2) {
    if (((e20 = +e20), (t2 = +t2), (n2 = +n2), (r2 = +r2), (i2 = +i2) < 0))
      throw new Error(`negative radius: ${i2}`);
    let o2 = this._x1,
      a2 = this._y1,
      s2 = n2 - e20,
      c2 = r2 - t2,
      l2 = o2 - e20,
      u2 = a2 - t2,
      f2 = l2 * l2 + u2 * u2;
    if (null === this._x1) this._append`M${(this._x1 = e20)},${(this._y1 = t2)}`;
    else if (f2 > vn)
      if (Math.abs(u2 * s2 - c2 * l2) > vn && i2) {
        let d2 = n2 - o2,
          p2 = r2 - a2,
          h2 = s2 * s2 + c2 * c2,
          y2 = d2 * d2 + p2 * p2,
          m2 = Math.sqrt(h2),
          v2 = Math.sqrt(f2),
          g2 = i2 * Math.tan((yn - Math.acos((h2 + f2 - y2) / (2 * m2 * v2))) / 2),
          b2 = g2 / v2,
          x2 = g2 / m2;
        Math.abs(b2 - 1) > vn && this._append`L${e20 + b2 * l2},${t2 + b2 * u2}`,
          this
            ._append`A${i2},${i2},0,0,${+(u2 * d2 > l2 * p2)},${(this._x1 = e20 + x2 * s2)},${(this._y1 = t2 + x2 * c2)}`;
      } else this._append`L${(this._x1 = e20)},${(this._y1 = t2)}`;
    else;
  }
  arc(e20, t2, n2, r2, i2, o2) {
    if (((e20 = +e20), (t2 = +t2), (o2 = !!o2), (n2 = +n2) < 0))
      throw new Error(`negative radius: ${n2}`);
    let a2 = n2 * Math.cos(r2),
      s2 = n2 * Math.sin(r2),
      c2 = e20 + a2,
      l2 = t2 + s2,
      u2 = 1 ^ o2,
      f2 = o2 ? r2 - i2 : i2 - r2;
    null === this._x1
      ? this._append`M${c2},${l2}`
      : (Math.abs(this._x1 - c2) > vn || Math.abs(this._y1 - l2) > vn) &&
        this._append`L${c2},${l2}`,
      n2 &&
        (f2 < 0 && (f2 = (f2 % mn) + mn),
        f2 > gn
          ? this
              ._append`A${n2},${n2},0,1,${u2},${e20 - a2},${t2 - s2}A${n2},${n2},0,1,${u2},${(this._x1 = c2)},${(this._y1 = l2)}`
          : f2 > vn &&
            this
              ._append`A${n2},${n2},0,${+(f2 >= yn)},${u2},${(this._x1 = e20 + n2 * Math.cos(i2))},${(this._y1 = t2 + n2 * Math.sin(i2))}`);
  }
  rect(e20, t2, n2, r2) {
    this
      ._append`M${(this._x0 = this._x1 = +e20)},${(this._y0 = this._y1 = +t2)}h${(n2 = +n2)}v${+r2}h${-n2}Z`;
  }
  toString() {
    return this._;
  }
}
function wn(e20) {
  let t2 = 3;
  return (
    (e20.digits = function (n2) {
      if (!arguments.length) return t2;
      if (null == n2) t2 = null;
      else {
        const e21 = Math.floor(n2);
        if (!(e21 >= 0)) throw new RangeError(`invalid digits: ${n2}`);
        t2 = e21;
      }
      return e20;
    }),
    () => new xn(t2)
  );
}
function On(e20) {
  return "object" == typeof e20 && "length" in e20 ? e20 : Array.from(e20);
}
function Sn(e20) {
  this._context = e20;
}
function An(e20) {
  return new Sn(e20);
}
function jn(e20) {
  return e20[0];
}
function Mn(e20) {
  return e20[1];
}
function Pn(e20, t2) {
  var n2 = ln(true),
    r2 = null,
    i2 = An,
    o2 = null,
    a2 = wn(s2);
  function s2(s3) {
    var c2,
      l2,
      u2,
      f2 = (s3 = On(s3)).length,
      d2 = false;
    for (null == r2 && (o2 = i2((u2 = a2()))), c2 = 0; c2 <= f2; ++c2)
      !(c2 < f2 && n2((l2 = s3[c2]), c2, s3)) === d2 &&
        ((d2 = !d2) ? o2.lineStart() : o2.lineEnd()),
        d2 && o2.point(+e20(l2, c2, s3), +t2(l2, c2, s3));
    if (u2) return (o2 = null), u2 + "" || null;
  }
  return (
    (e20 = "function" == typeof e20 ? e20 : void 0 === e20 ? jn : ln(e20)),
    (t2 = "function" == typeof t2 ? t2 : void 0 === t2 ? Mn : ln(t2)),
    (s2.x = function (t3) {
      return arguments.length ? ((e20 = "function" == typeof t3 ? t3 : ln(+t3)), s2) : e20;
    }),
    (s2.y = function (e21) {
      return arguments.length ? ((t2 = "function" == typeof e21 ? e21 : ln(+e21)), s2) : t2;
    }),
    (s2.defined = function (e21) {
      return arguments.length ? ((n2 = "function" == typeof e21 ? e21 : ln(!!e21)), s2) : n2;
    }),
    (s2.curve = function (e21) {
      return arguments.length ? ((i2 = e21), null != r2 && (o2 = i2(r2)), s2) : i2;
    }),
    (s2.context = function (e21) {
      return arguments.length ? (null == e21 ? (r2 = o2 = null) : (o2 = i2((r2 = e21))), s2) : r2;
    }),
    s2
  );
}
function kn(e20, t2, n2) {
  var r2 = null,
    i2 = ln(true),
    o2 = null,
    a2 = An,
    s2 = null,
    c2 = wn(l2);
  function l2(l3) {
    var u3,
      f2,
      d2,
      p2,
      h2,
      y2 = (l3 = On(l3)).length,
      m2 = false,
      v2 = new Array(y2),
      g2 = new Array(y2);
    for (null == o2 && (s2 = a2((h2 = c2()))), u3 = 0; u3 <= y2; ++u3) {
      if (!(u3 < y2 && i2((p2 = l3[u3]), u3, l3)) === m2)
        if ((m2 = !m2)) (f2 = u3), s2.areaStart(), s2.lineStart();
        else {
          for (s2.lineEnd(), s2.lineStart(), d2 = u3 - 1; d2 >= f2; --d2) s2.point(v2[d2], g2[d2]);
          s2.lineEnd(), s2.areaEnd();
        }
      m2 &&
        ((v2[u3] = +e20(p2, u3, l3)),
        (g2[u3] = +t2(p2, u3, l3)),
        s2.point(r2 ? +r2(p2, u3, l3) : v2[u3], n2 ? +n2(p2, u3, l3) : g2[u3]));
    }
    if (h2) return (s2 = null), h2 + "" || null;
  }
  function u2() {
    return Pn().defined(i2).curve(a2).context(o2);
  }
  return (
    (e20 = "function" == typeof e20 ? e20 : void 0 === e20 ? jn : ln(+e20)),
    (t2 = "function" == typeof t2 ? t2 : ln(void 0 === t2 ? 0 : +t2)),
    (n2 = "function" == typeof n2 ? n2 : void 0 === n2 ? Mn : ln(+n2)),
    (l2.x = function (t3) {
      return arguments.length
        ? ((e20 = "function" == typeof t3 ? t3 : ln(+t3)), (r2 = null), l2)
        : e20;
    }),
    (l2.x0 = function (t3) {
      return arguments.length ? ((e20 = "function" == typeof t3 ? t3 : ln(+t3)), l2) : e20;
    }),
    (l2.x1 = function (e21) {
      return arguments.length
        ? ((r2 = null == e21 ? null : "function" == typeof e21 ? e21 : ln(+e21)), l2)
        : r2;
    }),
    (l2.y = function (e21) {
      return arguments.length
        ? ((t2 = "function" == typeof e21 ? e21 : ln(+e21)), (n2 = null), l2)
        : t2;
    }),
    (l2.y0 = function (e21) {
      return arguments.length ? ((t2 = "function" == typeof e21 ? e21 : ln(+e21)), l2) : t2;
    }),
    (l2.y1 = function (e21) {
      return arguments.length
        ? ((n2 = null == e21 ? null : "function" == typeof e21 ? e21 : ln(+e21)), l2)
        : n2;
    }),
    (l2.lineX0 = l2.lineY0 =
      function () {
        return u2().x(e20).y(t2);
      }),
    (l2.lineY1 = function () {
      return u2().x(e20).y(n2);
    }),
    (l2.lineX1 = function () {
      return u2().x(r2).y(t2);
    }),
    (l2.defined = function (e21) {
      return arguments.length ? ((i2 = "function" == typeof e21 ? e21 : ln(!!e21)), l2) : i2;
    }),
    (l2.curve = function (e21) {
      return arguments.length ? ((a2 = e21), null != o2 && (s2 = a2(o2)), l2) : a2;
    }),
    (l2.context = function (e21) {
      return arguments.length ? (null == e21 ? (o2 = s2 = null) : (s2 = a2((o2 = e21))), l2) : o2;
    }),
    l2
  );
}
Sn.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e20, t2) {
    switch (((e20 = +e20), (t2 = +t2), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e20, t2) : this._context.moveTo(e20, t2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e20, t2);
    }
  },
};
class En {
  constructor(e20, t2) {
    (this._context = e20), (this._x = t2);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(e20, t2) {
    switch (((e20 = +e20), (t2 = +t2), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e20, t2) : this._context.moveTo(e20, t2);
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + e20) / 2),
              this._y0,
              this._x0,
              t2,
              e20,
              t2,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + t2) / 2),
              e20,
              this._y0,
              e20,
              t2,
            );
    }
    (this._x0 = e20), (this._y0 = t2);
  }
}
const Tn = {
    draw(e20, t2) {
      const n2 = dn(t2 / pn);
      e20.moveTo(n2, 0), e20.arc(0, 0, n2, 0, hn);
    },
  },
  Nn = {
    draw(e20, t2) {
      const n2 = dn(t2 / 5) / 2;
      e20.moveTo(-3 * n2, -n2),
        e20.lineTo(-n2, -n2),
        e20.lineTo(-n2, -3 * n2),
        e20.lineTo(n2, -3 * n2),
        e20.lineTo(n2, -n2),
        e20.lineTo(3 * n2, -n2),
        e20.lineTo(3 * n2, n2),
        e20.lineTo(n2, n2),
        e20.lineTo(n2, 3 * n2),
        e20.lineTo(-n2, 3 * n2),
        e20.lineTo(-n2, n2),
        e20.lineTo(-3 * n2, n2),
        e20.closePath();
    },
  },
  In = dn(1 / 3),
  _n = 2 * In,
  Cn = {
    draw(e20, t2) {
      const n2 = dn(t2 / _n),
        r2 = n2 * In;
      e20.moveTo(0, -n2), e20.lineTo(r2, 0), e20.lineTo(0, n2), e20.lineTo(-r2, 0), e20.closePath();
    },
  },
  zn = {
    draw(e20, t2) {
      const n2 = dn(t2),
        r2 = -n2 / 2;
      e20.rect(r2, r2, n2, n2);
    },
  },
  Dn = fn(pn / 10) / fn((7 * pn) / 10),
  Rn = fn(hn / 10) * Dn,
  Ln = -un(hn / 10) * Dn,
  $n = {
    draw(e20, t2) {
      const n2 = dn(0.8908130915292852 * t2),
        r2 = Rn * n2,
        i2 = Ln * n2;
      e20.moveTo(0, -n2), e20.lineTo(r2, i2);
      for (let o2 = 1; o2 < 5; ++o2) {
        const t3 = (hn * o2) / 5,
          a2 = un(t3),
          s2 = fn(t3);
        e20.lineTo(s2 * n2, -a2 * n2), e20.lineTo(a2 * r2 - s2 * i2, s2 * r2 + a2 * i2);
      }
      e20.closePath();
    },
  },
  Bn = dn(3),
  qn = {
    draw(e20, t2) {
      const n2 = -dn(t2 / (3 * Bn));
      e20.moveTo(0, 2 * n2), e20.lineTo(-Bn * n2, -n2), e20.lineTo(Bn * n2, -n2), e20.closePath();
    },
  },
  Fn = -0.5,
  Un = dn(3) / 2,
  Wn = 1 / dn(12),
  Vn = 3 * (Wn / 2 + 1),
  Qn = {
    draw(e20, t2) {
      const n2 = dn(t2 / Vn),
        r2 = n2 / 2,
        i2 = n2 * Wn,
        o2 = r2,
        a2 = n2 * Wn + n2,
        s2 = -o2,
        c2 = a2;
      e20.moveTo(r2, i2),
        e20.lineTo(o2, a2),
        e20.lineTo(s2, c2),
        e20.lineTo(Fn * r2 - Un * i2, Un * r2 + Fn * i2),
        e20.lineTo(Fn * o2 - Un * a2, Un * o2 + Fn * a2),
        e20.lineTo(Fn * s2 - Un * c2, Un * s2 + Fn * c2),
        e20.lineTo(Fn * r2 + Un * i2, Fn * i2 - Un * r2),
        e20.lineTo(Fn * o2 + Un * a2, Fn * a2 - Un * o2),
        e20.lineTo(Fn * s2 + Un * c2, Fn * c2 - Un * s2),
        e20.closePath();
    },
  };
function Gn() {}
function Hn(e20, t2, n2) {
  e20._context.bezierCurveTo(
    (2 * e20._x0 + e20._x1) / 3,
    (2 * e20._y0 + e20._y1) / 3,
    (e20._x0 + 2 * e20._x1) / 3,
    (e20._y0 + 2 * e20._y1) / 3,
    (e20._x0 + 4 * e20._x1 + t2) / 6,
    (e20._y0 + 4 * e20._y1 + n2) / 6,
  );
}
function Xn(e20) {
  this._context = e20;
}
function Kn(e20) {
  this._context = e20;
}
function Yn(e20) {
  this._context = e20;
}
function Zn(e20) {
  this._context = e20;
}
function Jn(e20) {
  return e20 < 0 ? -1 : 1;
}
function er(e20, t2, n2) {
  var r2 = e20._x1 - e20._x0,
    i2 = t2 - e20._x1,
    o2 = (e20._y1 - e20._y0) / (r2 || (i2 < 0 && -0)),
    a2 = (n2 - e20._y1) / (i2 || (r2 < 0 && -0)),
    s2 = (o2 * i2 + a2 * r2) / (r2 + i2);
  return (Jn(o2) + Jn(a2)) * Math.min(Math.abs(o2), Math.abs(a2), 0.5 * Math.abs(s2)) || 0;
}
function tr(e20, t2) {
  var n2 = e20._x1 - e20._x0;
  return n2 ? ((3 * (e20._y1 - e20._y0)) / n2 - t2) / 2 : t2;
}
function nr(e20, t2, n2) {
  var r2 = e20._x0,
    i2 = e20._y0,
    o2 = e20._x1,
    a2 = e20._y1,
    s2 = (o2 - r2) / 3;
  e20._context.bezierCurveTo(r2 + s2, i2 + s2 * t2, o2 - s2, a2 - s2 * n2, o2, a2);
}
function rr(e20) {
  this._context = e20;
}
function ir(e20) {
  this._context = new or(e20);
}
function or(e20) {
  this._context = e20;
}
function ar(e20) {
  this._context = e20;
}
function sr(e20) {
  var t2,
    n2,
    r2 = e20.length - 1,
    i2 = new Array(r2),
    o2 = new Array(r2),
    a2 = new Array(r2);
  for (i2[0] = 0, o2[0] = 2, a2[0] = e20[0] + 2 * e20[1], t2 = 1; t2 < r2 - 1; ++t2)
    (i2[t2] = 1), (o2[t2] = 4), (a2[t2] = 4 * e20[t2] + 2 * e20[t2 + 1]);
  for (
    i2[r2 - 1] = 2, o2[r2 - 1] = 7, a2[r2 - 1] = 8 * e20[r2 - 1] + e20[r2], t2 = 1;
    t2 < r2;
    ++t2
  )
    (n2 = i2[t2] / o2[t2 - 1]), (o2[t2] -= n2), (a2[t2] -= n2 * a2[t2 - 1]);
  for (i2[r2 - 1] = a2[r2 - 1] / o2[r2 - 1], t2 = r2 - 2; t2 >= 0; --t2)
    i2[t2] = (a2[t2] - i2[t2 + 1]) / o2[t2];
  for (o2[r2 - 1] = (e20[r2] + i2[r2 - 1]) / 2, t2 = 0; t2 < r2 - 1; ++t2)
    o2[t2] = 2 * e20[t2 + 1] - i2[t2 + 1];
  return [i2, o2];
}
function cr(e20, t2) {
  (this._context = e20), (this._t = t2);
}
function lr(e20, t2) {
  if ((i2 = e20.length) > 1)
    for (var n2, r2, i2, o2 = 1, a2 = e20[t2[0]], s2 = a2.length; o2 < i2; ++o2)
      for (r2 = a2, a2 = e20[t2[o2]], n2 = 0; n2 < s2; ++n2)
        a2[n2][1] += a2[n2][0] = isNaN(r2[n2][1]) ? r2[n2][0] : r2[n2][1];
}
function ur(e20) {
  for (var t2 = e20.length, n2 = new Array(t2); --t2 >= 0; ) n2[t2] = t2;
  return n2;
}
function fr(e20, t2) {
  return e20[t2];
}
function dr(e20) {
  const t2 = [];
  return (t2.key = e20), t2;
}
function pr(e20) {
  return (
    (pr =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    pr(e20)
  );
}
(Xn.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Hn(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e20, t2) {
    switch (((e20 = +e20), (t2 = +t2), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e20, t2) : this._context.moveTo(e20, t2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Hn(this, e20, t2);
    }
    (this._x0 = this._x1), (this._x1 = e20), (this._y0 = this._y1), (this._y1 = t2);
  },
}),
  (Kn.prototype = {
    areaStart: Gn,
    areaEnd: Gn,
    lineStart: function () {
      (this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
          NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
            this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
            this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2),
            this.point(this._x3, this._y3),
            this.point(this._x4, this._y4);
      }
    },
    point: function (e20, t2) {
      switch (((e20 = +e20), (t2 = +t2), this._point)) {
        case 0:
          (this._point = 1), (this._x2 = e20), (this._y2 = t2);
          break;
        case 1:
          (this._point = 2), (this._x3 = e20), (this._y3 = t2);
          break;
        case 2:
          (this._point = 3),
            (this._x4 = e20),
            (this._y4 = t2),
            this._context.moveTo(
              (this._x0 + 4 * this._x1 + e20) / 6,
              (this._y0 + 4 * this._y1 + t2) / 6,
            );
          break;
        default:
          Hn(this, e20, t2);
      }
      (this._x0 = this._x1), (this._x1 = e20), (this._y0 = this._y1), (this._y1 = t2);
    },
  }),
  (Yn.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (e20, t2) {
      switch (((e20 = +e20), (t2 = +t2), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var n2 = (this._x0 + 4 * this._x1 + e20) / 6,
            r2 = (this._y0 + 4 * this._y1 + t2) / 6;
          this._line ? this._context.lineTo(n2, r2) : this._context.moveTo(n2, r2);
          break;
        case 3:
          this._point = 4;
        default:
          Hn(this, e20, t2);
      }
      (this._x0 = this._x1), (this._x1 = e20), (this._y0 = this._y1), (this._y1 = t2);
    },
  }),
  (Zn.prototype = {
    areaStart: Gn,
    areaEnd: Gn,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      this._point && this._context.closePath();
    },
    point: function (e20, t2) {
      (e20 = +e20),
        (t2 = +t2),
        this._point
          ? this._context.lineTo(e20, t2)
          : ((this._point = 1), this._context.moveTo(e20, t2));
    },
  }),
  (rr.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          nr(this, this._t0, tr(this, this._t0));
      }
      (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (e20, t2) {
      var n2 = NaN;
      if (((t2 = +t2), (e20 = +e20) !== this._x1 || t2 !== this._y1)) {
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line ? this._context.lineTo(e20, t2) : this._context.moveTo(e20, t2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3), nr(this, tr(this, (n2 = er(this, e20, t2))), n2);
            break;
          default:
            nr(this, this._t0, (n2 = er(this, e20, t2)));
        }
        (this._x0 = this._x1),
          (this._x1 = e20),
          (this._y0 = this._y1),
          (this._y1 = t2),
          (this._t0 = n2);
      }
    },
  }),
  ((ir.prototype = Object.create(rr.prototype)).point = function (e20, t2) {
    rr.prototype.point.call(this, t2, e20);
  }),
  (or.prototype = {
    moveTo: function (e20, t2) {
      this._context.moveTo(t2, e20);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (e20, t2) {
      this._context.lineTo(t2, e20);
    },
    bezierCurveTo: function (e20, t2, n2, r2, i2, o2) {
      this._context.bezierCurveTo(t2, e20, r2, n2, o2, i2);
    },
  }),
  (ar.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = []), (this._y = []);
    },
    lineEnd: function () {
      var e20 = this._x,
        t2 = this._y,
        n2 = e20.length;
      if (n2)
        if (
          (this._line ? this._context.lineTo(e20[0], t2[0]) : this._context.moveTo(e20[0], t2[0]),
          2 === n2)
        )
          this._context.lineTo(e20[1], t2[1]);
        else
          for (var r2 = sr(e20), i2 = sr(t2), o2 = 0, a2 = 1; a2 < n2; ++o2, ++a2)
            this._context.bezierCurveTo(
              r2[0][o2],
              i2[0][o2],
              r2[1][o2],
              i2[1][o2],
              e20[a2],
              t2[a2],
            );
      (this._line || (0 !== this._line && 1 === n2)) && this._context.closePath(),
        (this._line = 1 - this._line),
        (this._x = this._y = null);
    },
    point: function (e20, t2) {
      this._x.push(+e20), this._y.push(+t2);
    },
  }),
  (cr.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
        (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
        this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (e20, t2) {
      switch (((e20 = +e20), (t2 = +t2), this._point)) {
        case 0:
          (this._point = 1),
            this._line ? this._context.lineTo(e20, t2) : this._context.moveTo(e20, t2);
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0) this._context.lineTo(this._x, t2), this._context.lineTo(e20, t2);
          else {
            var n2 = this._x * (1 - this._t) + e20 * this._t;
            this._context.lineTo(n2, this._y), this._context.lineTo(n2, t2);
          }
      }
      (this._x = e20), (this._y = t2);
    },
  });
var hr = ["type", "size", "sizeType"];
function yr() {
  return (
    (yr = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    yr.apply(this, arguments)
  );
}
function mr(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function vr(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? mr(Object(n2), true).forEach(function (t3) {
          gr(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : mr(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function gr(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != pr(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != pr(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == pr(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function br(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
var xr = {
    symbolCircle: Tn,
    symbolCross: Nn,
    symbolDiamond: Cn,
    symbolSquare: zn,
    symbolStar: $n,
    symbolTriangle: qn,
    symbolWye: Qn,
  },
  wr = Math.PI / 180,
  Or = function (e20) {
    var t2,
      n2,
      i2 = e20.type,
      o2 = void 0 === i2 ? "circle" : i2,
      a2 = e20.size,
      s2 = void 0 === a2 ? 64 : a2,
      c2 = e20.sizeType,
      l2 = void 0 === c2 ? "area" : c2,
      u2 = vr(vr({}, br(e20, hr)), {}, { type: o2, size: s2, sizeType: l2 }),
      f2 = u2.className,
      d2 = u2.cx,
      p2 = u2.cy,
      h2 = Ng$1(u2, true);
    return d2 === +d2 && p2 === +p2 && s2 === +s2
      ? g__default.createElement(
          "path",
          yr({}, h2, {
            className: Nt("recharts-symbols", f2),
            transform: "translate(".concat(d2, ", ").concat(p2, ")"),
            d:
              ((t2 = (function (e21) {
                var t3 = "symbol".concat(cn(e21));
                return xr[t3] || Tn;
              })(o2)),
              (n2 = (function (e21, t3) {
                let n3 = null,
                  r2 = wn(i3);
                function i3() {
                  let i4;
                  if (
                    (n3 || (n3 = i4 = r2()),
                    e21.apply(this, arguments).draw(n3, +t3.apply(this, arguments)),
                    i4)
                  )
                    return (n3 = null), i4 + "" || null;
                }
                return (
                  (e21 = "function" == typeof e21 ? e21 : ln(e21 || Tn)),
                  (t3 = "function" == typeof t3 ? t3 : ln(void 0 === t3 ? 64 : +t3)),
                  (i3.type = function (t4) {
                    return arguments.length
                      ? ((e21 = "function" == typeof t4 ? t4 : ln(t4)), i3)
                      : e21;
                  }),
                  (i3.size = function (e22) {
                    return arguments.length
                      ? ((t3 = "function" == typeof e22 ? e22 : ln(+e22)), i3)
                      : t3;
                  }),
                  (i3.context = function (e22) {
                    return arguments.length ? ((n3 = null == e22 ? null : e22), i3) : n3;
                  }),
                  i3
                );
              })()
                .type(t2)
                .size(
                  (function (e21, t3, n3) {
                    if ("area" === t3) return e21;
                    switch (n3) {
                      case "cross":
                        return (5 * e21 * e21) / 9;
                      case "diamond":
                        return (0.5 * e21 * e21) / Math.sqrt(3);
                      case "square":
                        return e21 * e21;
                      case "star":
                        var r2 = 18 * wr;
                        return (
                          1.25 *
                          e21 *
                          e21 *
                          (Math.tan(r2) - Math.tan(2 * r2) * Math.pow(Math.tan(r2), 2))
                        );
                      case "triangle":
                        return (Math.sqrt(3) * e21 * e21) / 4;
                      case "wye":
                        return ((21 - 10 * Math.sqrt(3)) * e21 * e21) / 8;
                      default:
                        return (Math.PI * e21 * e21) / 4;
                    }
                  })(s2, l2, o2),
                )),
              n2()),
          }),
        )
      : null;
  };
function Sr(e20) {
  return (
    (Sr =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Sr(e20)
  );
}
function Ar() {
  return (
    (Ar = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Ar.apply(this, arguments)
  );
}
function jr(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Mr(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, Ir(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Pr(e20, t2, n2) {
  return (
    (t2 = Er(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Sr(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, kr() ? Reflect.construct(t2, n2 || [], Er(e20).constructor) : t2.apply(e20, n2))
  );
}
function kr() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (kr = function () {
    return !!e20;
  })();
}
function Er(e20) {
  return (
    (Er = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Er(e20)
  );
}
function Tr(e20, t2) {
  return (
    (Tr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Tr(e20, t2)
  );
}
function Nr(e20, t2, n2) {
  return (
    (t2 = Ir(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Ir(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Sr(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Sr(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Sr(t2) ? t2 : t2 + "";
}
Or.registerSymbol = function (e20, t2) {
  xr["symbol".concat(cn(e20))] = t2;
};
var _r = 32,
  Cr = (function () {
    function e20() {
      return (
        (function (e21, t2) {
          if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        })(this, e20),
        Pr(this, e20, arguments)
      );
    }
    return (
      (function (e21, t2) {
        if ("function" != typeof t2 && null !== t2)
          throw new TypeError("Super expression must either be null or a function");
        (e21.prototype = Object.create(t2 && t2.prototype, {
          constructor: { value: e21, writable: true, configurable: true },
        })),
          Object.defineProperty(e21, "prototype", { writable: false }),
          t2 && Tr(e21, t2);
      })(e20, PureComponent),
      Mr(e20, [
        {
          key: "renderIcon",
          value: function (e21) {
            var t2 = this.props.inactiveColor,
              n2 = 16,
              r2 = _r / 6,
              i2 = _r / 3,
              o2 = e21.inactive ? t2 : e21.color;
            if ("plainline" === e21.type)
              return g__default.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: o2,
                strokeDasharray: e21.payload.strokeDasharray,
                x1: 0,
                y1: n2,
                x2: _r,
                y2: n2,
                className: "recharts-legend-icon",
              });
            if ("line" === e21.type)
              return g__default.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: o2,
                d: "M0,"
                  .concat(n2, "h")
                  .concat(i2, "\n            A")
                  .concat(r2, ",")
                  .concat(r2, ",0,1,1,")
                  .concat(2 * i2, ",")
                  .concat(n2, "\n            H")
                  .concat(_r, "M")
                  .concat(2 * i2, ",")
                  .concat(n2, "\n            A")
                  .concat(r2, ",")
                  .concat(r2, ",0,1,1,")
                  .concat(i2, ",")
                  .concat(n2),
                className: "recharts-legend-icon",
              });
            if ("rect" === e21.type)
              return g__default.createElement("path", {
                stroke: "none",
                fill: o2,
                d: "M0,".concat(4, "h").concat(_r, "v").concat(24, "h").concat(-32, "z"),
                className: "recharts-legend-icon",
              });
            if (g__default.isValidElement(e21.legendIcon)) {
              var a2 = (function (e22) {
                for (var t3 = 1; t3 < arguments.length; t3++) {
                  var n3 = null != arguments[t3] ? arguments[t3] : {};
                  t3 % 2
                    ? jr(Object(n3), true).forEach(function (t4) {
                        Nr(e22, t4, n3[t4]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e22, Object.getOwnPropertyDescriptors(n3))
                      : jr(Object(n3)).forEach(function (t4) {
                          Object.defineProperty(e22, t4, Object.getOwnPropertyDescriptor(n3, t4));
                        });
                }
                return e22;
              })({}, e21);
              return delete a2.legendIcon, g__default.cloneElement(e21.legendIcon, a2);
            }
            return g__default.createElement(Or, {
              fill: o2,
              cx: n2,
              cy: n2,
              size: _r,
              sizeType: "diameter",
              type: e21.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var e21 = this,
              t2 = this.props,
              n2 = t2.payload,
              r2 = t2.iconSize,
              i2 = t2.layout,
              o2 = t2.formatter,
              l2 = t2.inactiveColor,
              u2 = { x: 0, y: 0, width: _r, height: _r },
              f2 = { display: "horizontal" === i2 ? "inline-block" : "block", marginRight: 10 },
              d2 = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
            return n2.map(function (t3, n3) {
              var i3 = t3.formatter || o2,
                p2 = Nt(
                  Nr(
                    Nr({ "recharts-legend-item": true }, "legend-item-".concat(n3), true),
                    "inactive",
                    t3.inactive,
                  ),
                );
              if ("none" === t3.type) return null;
              var h2 = zh$1(t3.value) ? null : t3.value;
              Dg$1(
                !zh$1(t3.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var y2 = t3.inactive ? l2 : t3.color;
              return g__default.createElement(
                "li",
                Ar(
                  { className: p2, style: f2, key: "legend-item-".concat(n3) },
                  ym$1(e21.props, t3, n3),
                ),
                g__default.createElement(
                  Dt,
                  { width: r2, height: r2, viewBox: u2, style: d2 },
                  e21.renderIcon(t3),
                ),
                g__default.createElement(
                  "span",
                  { className: "recharts-legend-item-text", style: { color: y2 } },
                  i3 ? i3(h2, t3, n3) : h2,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var e21 = this.props,
              t2 = e21.payload,
              n2 = e21.layout,
              r2 = e21.align;
            if (!t2 || !t2.length) return null;
            var i2 = { padding: 0, margin: 0, textAlign: "horizontal" === n2 ? r2 : "left" };
            return g__default.createElement(
              "ul",
              { className: "recharts-default-legend", style: i2 },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })();
function zr(e20) {
  return (
    (zr =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    zr(e20)
  );
}
Nr(Cr, "displayName", "Legend"),
  Nr(Cr, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc",
  });
var Dr = ["ref"];
function Rr(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Lr(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Rr(Object(n2), true).forEach(function (t3) {
          Wr(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Rr(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function $r(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, Vr(r2.key), r2);
  }
}
function Br(e20, t2, n2) {
  return (
    (t2 = Fr(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === zr(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, qr() ? Reflect.construct(t2, n2 || [], Fr(e20).constructor) : t2.apply(e20, n2))
  );
}
function qr() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (qr = function () {
    return !!e20;
  })();
}
function Fr(e20) {
  return (
    (Fr = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Fr(e20)
  );
}
function Ur(e20, t2) {
  return (
    (Ur = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Ur(e20, t2)
  );
}
function Wr(e20, t2, n2) {
  return (
    (t2 = Vr(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Vr(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != zr(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != zr(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == zr(t2) ? t2 : t2 + "";
}
function Qr(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Gr(e20) {
  return e20.value;
}
var Hr = (function () {
  function e20() {
    var t3;
    !(function (e21, t4) {
      if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
    })(this, e20);
    for (var n3 = arguments.length, r3 = new Array(n3), i2 = 0; i2 < n3; i2++)
      r3[i2] = arguments[i2];
    return (
      Wr((t3 = Br(this, e20, [].concat(r3))), "lastBoundingBox", { width: -1, height: -1 }), t3
    );
  }
  return (
    (function (e21, t3) {
      if ("function" != typeof t3 && null !== t3)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t3 && t3.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t3 && Ur(e21, t3);
    })(e20, PureComponent),
    (t2 = e20),
    (r2 = [
      {
        key: "getWithHeight",
        value: function (e21, t3) {
          var n3 = Lr(Lr({}, this.defaultProps), e21.props).layout;
          return "vertical" === n3 && em$1(e21.props.height)
            ? { height: e21.props.height }
            : "horizontal" === n3
              ? { width: e21.props.width || t3 }
              : null;
        },
      },
    ]),
    (n2 = [
      {
        key: "componentDidMount",
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: "getBBox",
        value: function () {
          if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var e21 = this.wrapperNode.getBoundingClientRect();
            return (
              (e21.height = this.wrapperNode.offsetHeight),
              (e21.width = this.wrapperNode.offsetWidth),
              e21
            );
          }
          return null;
        },
      },
      {
        key: "updateBBox",
        value: function () {
          var e21 = this.props.onBBoxUpdate,
            t3 = this.getBBox();
          t3
            ? (Math.abs(t3.width - this.lastBoundingBox.width) > 1 ||
                Math.abs(t3.height - this.lastBoundingBox.height) > 1) &&
              ((this.lastBoundingBox.width = t3.width),
              (this.lastBoundingBox.height = t3.height),
              e21 && e21(t3))
            : (-1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height) ||
              ((this.lastBoundingBox.width = -1),
              (this.lastBoundingBox.height = -1),
              e21 && e21(null));
        },
      },
      {
        key: "getBBoxSnapshot",
        value: function () {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0
            ? Lr({}, this.lastBoundingBox)
            : { width: 0, height: 0 };
        },
      },
      {
        key: "getDefaultPosition",
        value: function (e21) {
          var t3,
            n3,
            r3 = this.props,
            i2 = r3.layout,
            o2 = r3.align,
            a2 = r3.verticalAlign,
            s2 = r3.margin,
            c2 = r3.chartWidth,
            l2 = r3.chartHeight;
          return (
            (e21 &&
              ((void 0 !== e21.left && null !== e21.left) ||
                (void 0 !== e21.right && null !== e21.right))) ||
              (t3 =
                "center" === o2 && "vertical" === i2
                  ? { left: ((c2 || 0) - this.getBBoxSnapshot().width) / 2 }
                  : "right" === o2
                    ? { right: (s2 && s2.right) || 0 }
                    : { left: (s2 && s2.left) || 0 }),
            (e21 &&
              ((void 0 !== e21.top && null !== e21.top) ||
                (void 0 !== e21.bottom && null !== e21.bottom))) ||
              (n3 =
                "middle" === a2
                  ? { top: ((l2 || 0) - this.getBBoxSnapshot().height) / 2 }
                  : "bottom" === a2
                    ? { bottom: (s2 && s2.bottom) || 0 }
                    : { top: (s2 && s2.top) || 0 }),
            Lr(Lr({}, t3), n3)
          );
        },
      },
      {
        key: "render",
        value: function () {
          var e21 = this,
            t3 = this.props,
            n3 = t3.content,
            r3 = t3.width,
            i2 = t3.height,
            o2 = t3.wrapperStyle,
            a2 = t3.payloadUniqBy,
            s2 = t3.payload,
            c2 = Lr(
              Lr(
                { position: "absolute", width: r3 || "auto", height: i2 || "auto" },
                this.getDefaultPosition(o2),
              ),
              o2,
            );
          return g__default.createElement(
            "div",
            {
              className: "recharts-legend-wrapper",
              style: c2,
              ref: function (t4) {
                e21.wrapperNode = t4;
              },
            },
            (function (e22, t4) {
              if (g__default.isValidElement(e22)) return g__default.cloneElement(e22, t4);
              if ("function" == typeof e22) return g__default.createElement(e22, t4);
              t4.ref;
              var n4 = Qr(t4, Dr);
              return g__default.createElement(Cr, n4);
            })(n3, Lr(Lr({}, this.props), {}, { payload: ib$1(s2, a2, Gr) })),
          );
        },
      },
    ]) && $r(t2.prototype, n2),
    r2 && $r(t2, r2),
    Object.defineProperty(t2, "prototype", { writable: false }),
    t2
  );
  var t2, n2, r2;
})();
Wr(Hr, "displayName", "Legend"),
  Wr(Hr, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
  });
var Xr = function (e20) {
  return null;
};
function Kr(e20) {
  return (
    (Kr =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Kr(e20)
  );
}
function Yr(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Zr(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Yr(Object(n2), true).forEach(function (t3) {
          Jr(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Yr(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Jr(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Kr(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Kr(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Kr(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
Xr.displayName = "Cell";
var ei = { widthCache: {}, cacheCount: 0 },
  ti = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  ni = "recharts_measurement_span";
var ri = function (e20) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (null == e20 || Lw$1.isSsr) return { width: 0, height: 0 };
  var n2,
    r2 =
      ((n2 = Zr({}, t2)),
      Object.keys(n2).forEach(function (e21) {
        n2[e21] || delete n2[e21];
      }),
      n2),
    i2 = JSON.stringify({ text: e20, copyStyle: r2 });
  if (ei.widthCache[i2]) return ei.widthCache[i2];
  try {
    var o2 = document.getElementById(ni);
    o2 ||
      ((o2 = document.createElement("span")).setAttribute("id", ni),
      o2.setAttribute("aria-hidden", "true"),
      document.body.appendChild(o2));
    var a2 = Zr(Zr({}, ti), r2);
    Object.assign(o2.style, a2), (o2.textContent = "".concat(e20));
    var s2 = o2.getBoundingClientRect(),
      c2 = { width: s2.width, height: s2.height };
    return (
      (ei.widthCache[i2] = c2),
      ++ei.cacheCount > 2e3 && ((ei.cacheCount = 0), (ei.widthCache = {})),
      c2
    );
  } catch (ZA2) {
    return { width: 0, height: 0 };
  }
};
function ii(e20) {
  return (
    (ii =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    ii(e20)
  );
}
function oi(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3)) {
            if (Object(n2) !== n2) return;
            c2 = false;
          } else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return ai(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return ai(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function ai(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function si(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, ci(r2.key), r2);
  }
}
function ci(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != ii(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != ii(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == ii(t2) ? t2 : t2 + "";
}
var li = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  ui = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  fi = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  di = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  pi = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 16, in: 96, Q: 96 / 101.6, px: 1 },
  hi = Object.keys(pi),
  yi = "NaN";
var mi = (function () {
  function e20(t3, n3) {
    !(function (e21, t4) {
      if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
    })(this, e20),
      (this.num = t3),
      (this.unit = n3),
      (this.num = t3),
      (this.unit = n3),
      Number.isNaN(t3) && (this.unit = ""),
      "" === n3 || fi.test(n3) || ((this.num = NaN), (this.unit = "")),
      hi.includes(n3) &&
        ((this.num = (function (e21, t4) {
          return e21 * pi[t4];
        })(t3, n3)),
        (this.unit = "px"));
  }
  return (
    (t2 = e20),
    (r2 = [
      {
        key: "parse",
        value: function (t3) {
          var n3,
            r3 = oi(null !== (n3 = di.exec(t3)) && void 0 !== n3 ? n3 : [], 3),
            i2 = r3[1],
            o2 = r3[2];
          return new e20(parseFloat(i2), null != o2 ? o2 : "");
        },
      },
    ]),
    (n2 = [
      {
        key: "add",
        value: function (t3) {
          return this.unit !== t3.unit ? new e20(NaN, "") : new e20(this.num + t3.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (t3) {
          return this.unit !== t3.unit ? new e20(NaN, "") : new e20(this.num - t3.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (t3) {
          return "" !== this.unit && "" !== t3.unit && this.unit !== t3.unit
            ? new e20(NaN, "")
            : new e20(this.num * t3.num, this.unit || t3.unit);
        },
      },
      {
        key: "divide",
        value: function (t3) {
          return "" !== this.unit && "" !== t3.unit && this.unit !== t3.unit
            ? new e20(NaN, "")
            : new e20(this.num / t3.num, this.unit || t3.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ]) && si(t2.prototype, n2),
    r2 && si(t2, r2),
    Object.defineProperty(t2, "prototype", { writable: false }),
    t2
  );
  var t2, n2, r2;
})();
function vi(e20) {
  if (e20.includes(yi)) return yi;
  for (var t2 = e20; t2.includes("*") || t2.includes("/"); ) {
    var n2,
      r2 = oi(null !== (n2 = li.exec(t2)) && void 0 !== n2 ? n2 : [], 4),
      i2 = r2[1],
      o2 = r2[2],
      a2 = r2[3],
      s2 = mi.parse(null != i2 ? i2 : ""),
      c2 = mi.parse(null != a2 ? a2 : ""),
      l2 = "*" === o2 ? s2.multiply(c2) : s2.divide(c2);
    if (l2.isNaN()) return yi;
    t2 = t2.replace(li, l2.toString());
  }
  for (; t2.includes("+") || /.-\d+(?:\.\d+)?/.test(t2); ) {
    var u2,
      f2 = oi(null !== (u2 = ui.exec(t2)) && void 0 !== u2 ? u2 : [], 4),
      d2 = f2[1],
      p2 = f2[2],
      h2 = f2[3],
      y2 = mi.parse(null != d2 ? d2 : ""),
      m2 = mi.parse(null != h2 ? h2 : ""),
      v2 = "+" === p2 ? y2.add(m2) : y2.subtract(m2);
    if (v2.isNaN()) return yi;
    t2 = t2.replace(ui, v2.toString());
  }
  return t2;
}
var gi = /\(([^()]*)\)/;
function bi(e20) {
  var t2 = e20.replace(/\s+/g, "");
  return (
    (t2 = (function (e21) {
      for (var t3 = e21; t3.includes("("); ) {
        var n2 = oi(gi.exec(t3), 2)[1];
        t3 = t3.replace(gi, vi(n2));
      }
      return t3;
    })(t2)),
    (t2 = vi(t2))
  );
}
function xi(e20) {
  var t2 = (function (e21) {
    try {
      return bi(e21);
    } catch (ZA2) {
      return yi;
    }
  })(e20.slice(5, -1));
  return t2 === yi ? "" : t2;
}
var wi = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  Oi = ["dx", "dy", "angle", "className", "breakAll"];
function Si() {
  return (
    (Si = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Si.apply(this, arguments)
  );
}
function Ai(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function ji(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3)) {
            if (Object(n2) !== n2) return;
            c2 = false;
          } else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return Mi(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Mi(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Mi(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
var Pi = /[ \f\n\r\t\v\u2028\u2029]+/,
  ki = function (e20) {
    var t2 = e20.children,
      n2 = e20.breakAll,
      r2 = e20.style;
    try {
      var i2 = [];
      return (
        Th$1(t2) || (i2 = n2 ? t2.toString().split("") : t2.toString().split(Pi)),
        {
          wordsWithComputedWidth: i2.map(function (e21) {
            return { word: e21, width: ri(e21, r2).width };
          }),
          spaceWidth: n2 ? 0 : ri("\xA0", r2).width,
        }
      );
    } catch (ZA2) {
      return null;
    }
  },
  Ei = function (e20) {
    return [{ words: Th$1(e20) ? [] : e20.toString().split(Pi) }];
  },
  Ti = function (e20) {
    var t2 = e20.width,
      n2 = e20.scaleToFit,
      r2 = e20.children,
      i2 = e20.style,
      o2 = e20.breakAll,
      a2 = e20.maxLines;
    if ((t2 || n2) && !Lw$1.isSsr) {
      var s2 = ki({ breakAll: o2, children: r2, style: i2 });
      return s2
        ? (function (e21, t3, n3, r3, i3) {
            var o3 = e21.maxLines,
              a3 = e21.children,
              s3 = e21.style,
              c2 = e21.breakAll,
              u2 = em$1(o3),
              f2 = a3,
              d2 = function () {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(
                  function (e22, t4) {
                    var o4 = t4.word,
                      a4 = t4.width,
                      s4 = e22[e22.length - 1];
                    if (s4 && (null == r3 || i3 || s4.width + a4 + n3 < Number(r3)))
                      s4.words.push(o4), (s4.width += a4 + n3);
                    else {
                      var c3 = { words: [o4], width: a4 };
                      e22.push(c3);
                    }
                    return e22;
                  },
                  [],
                );
              },
              p2 = d2(t3);
            if (!u2) return p2;
            for (
              var h2,
                y2 = function (e22) {
                  var t4 = f2.slice(0, e22),
                    n4 = ki({
                      breakAll: c2,
                      style: s3,
                      children: t4 + "\u2026",
                    }).wordsWithComputedWidth,
                    i4 = d2(n4),
                    a4 =
                      i4.length > o3 ||
                      (function (e23) {
                        return e23.reduce(function (e24, t5) {
                          return e24.width > t5.width ? e24 : t5;
                        });
                      })(i4).width > Number(r3);
                  return [a4, i4];
                },
                m2 = 0,
                v2 = f2.length - 1,
                g2 = 0;
              m2 <= v2 && g2 <= f2.length - 1;

            ) {
              var b2 = Math.floor((m2 + v2) / 2),
                x2 = ji(y2(b2 - 1), 2),
                w2 = x2[0],
                O2 = x2[1],
                S2 = ji(y2(b2), 1)[0];
              if ((w2 || S2 || (m2 = b2 + 1), w2 && S2 && (v2 = b2 - 1), !w2 && S2)) {
                h2 = O2;
                break;
              }
              g2++;
            }
            return h2 || p2;
          })(
            { breakAll: o2, children: r2, maxLines: a2, style: i2 },
            s2.wordsWithComputedWidth,
            s2.spaceWidth,
            t2,
            n2,
          )
        : Ei(r2);
    }
    return Ei(r2);
  },
  Ni = "#808080",
  Ii = function (e20) {
    var t2 = e20.x,
      n2 = void 0 === t2 ? 0 : t2,
      i2 = e20.y,
      o2 = void 0 === i2 ? 0 : i2,
      a2 = e20.lineHeight,
      s2 = void 0 === a2 ? "1em" : a2,
      c2 = e20.capHeight,
      u2 = void 0 === c2 ? "0.71em" : c2,
      f2 = e20.scaleToFit,
      p2 = void 0 !== f2 && f2,
      h2 = e20.textAnchor,
      y2 = void 0 === h2 ? "start" : h2,
      m2 = e20.verticalAnchor,
      v2 = void 0 === m2 ? "end" : m2,
      g2 = e20.fill,
      b2 = void 0 === g2 ? Ni : g2,
      x2 = Ai(e20, wi),
      w2 = useMemo(
        function () {
          return Ti({
            breakAll: x2.breakAll,
            children: x2.children,
            maxLines: x2.maxLines,
            scaleToFit: p2,
            style: x2.style,
            width: x2.width,
          });
        },
        [x2.breakAll, x2.children, x2.maxLines, p2, x2.style, x2.width],
      ),
      O2 = x2.dx,
      S2 = x2.dy,
      A2 = x2.angle,
      j2 = x2.className,
      M2 = x2.breakAll,
      P2 = Ai(x2, Oi);
    if (!nm$1(n2) || !nm$1(o2)) return null;
    var k2,
      E2 = n2 + (em$1(O2) ? O2 : 0),
      T2 = o2 + (em$1(S2) ? S2 : 0);
    switch (v2) {
      case "start":
        k2 = xi("calc(".concat(u2, ")"));
        break;
      case "middle":
        k2 = xi(
          "calc("
            .concat((w2.length - 1) / 2, " * -")
            .concat(s2, " + (")
            .concat(u2, " / 2))"),
        );
        break;
      default:
        k2 = xi("calc(".concat(w2.length - 1, " * -").concat(s2, ")"));
    }
    var N2 = [];
    if (p2) {
      var I2 = w2[0].width,
        _2 = x2.width;
      N2.push("scale(".concat((em$1(_2) ? _2 / I2 : 1) / I2, ")"));
    }
    return (
      A2 && N2.push("rotate(".concat(A2, ", ").concat(E2, ", ").concat(T2, ")")),
      N2.length && (P2.transform = N2.join(" ")),
      g__default.createElement(
        "text",
        Si({}, Ng$1(P2, true), {
          x: E2,
          y: T2,
          className: Nt("recharts-text", j2),
          textAnchor: y2,
          fill: b2.includes("url") ? Ni : b2,
        }),
        w2.map(function (e21, t3) {
          var n3 = e21.words.join(M2 ? "" : " ");
          return g__default.createElement(
            "tspan",
            { x: E2, dy: 0 === t3 ? k2 : s2, key: "".concat(n3, "-").concat(t3) },
            n3,
          );
        }),
      )
    );
  };
function _i(e20, t2) {
  return null == e20 || null == t2 ? NaN : e20 < t2 ? -1 : e20 > t2 ? 1 : e20 >= t2 ? 0 : NaN;
}
function Ci(e20, t2) {
  return null == e20 || null == t2 ? NaN : t2 < e20 ? -1 : t2 > e20 ? 1 : t2 >= e20 ? 0 : NaN;
}
function zi(e20) {
  let t2, n2, r2;
  function i2(e21, r3, i3 = 0, o2 = e21.length) {
    if (i3 < o2) {
      if (0 !== t2(r3, r3)) return o2;
      do {
        const t3 = (i3 + o2) >>> 1;
        n2(e21[t3], r3) < 0 ? (i3 = t3 + 1) : (o2 = t3);
      } while (i3 < o2);
    }
    return i3;
  }
  return (
    2 !== e20.length
      ? ((t2 = _i), (n2 = (t3, n3) => _i(e20(t3), n3)), (r2 = (t3, n3) => e20(t3) - n3))
      : ((t2 = e20 === _i || e20 === Ci ? e20 : Di), (n2 = e20), (r2 = e20)),
    {
      left: i2,
      center: function (e21, t3, n3 = 0, o2 = e21.length) {
        const a2 = i2(e21, t3, n3, o2 - 1);
        return a2 > n3 && r2(e21[a2 - 1], t3) > -r2(e21[a2], t3) ? a2 - 1 : a2;
      },
      right: function (e21, r3, i3 = 0, o2 = e21.length) {
        if (i3 < o2) {
          if (0 !== t2(r3, r3)) return o2;
          do {
            const t3 = (i3 + o2) >>> 1;
            n2(e21[t3], r3) <= 0 ? (i3 = t3 + 1) : (o2 = t3);
          } while (i3 < o2);
        }
        return i3;
      },
    }
  );
}
function Di() {
  return 0;
}
function Ri(e20) {
  return null === e20 ? NaN : +e20;
}
const Li = zi(_i).right;
zi(Ri).center;
class $i extends Map {
  constructor(e20, t2 = qi) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: /* @__PURE__ */ new Map() },
        _key: { value: t2 },
      }),
      null != e20)
    )
      for (const [n2, r2] of e20) this.set(n2, r2);
  }
  get(e20) {
    return super.get(Bi(this, e20));
  }
  has(e20) {
    return super.has(Bi(this, e20));
  }
  set(e20, t2) {
    return super.set(
      (function ({ _intern: e21, _key: t3 }, n2) {
        const r2 = t3(n2);
        return e21.has(r2) ? e21.get(r2) : (e21.set(r2, n2), n2);
      })(this, e20),
      t2,
    );
  }
  delete(e20) {
    return super.delete(
      (function ({ _intern: e21, _key: t2 }, n2) {
        const r2 = t2(n2);
        e21.has(r2) && ((n2 = e21.get(r2)), e21.delete(r2));
        return n2;
      })(this, e20),
    );
  }
}
function Bi({ _intern: e20, _key: t2 }, n2) {
  const r2 = t2(n2);
  return e20.has(r2) ? e20.get(r2) : n2;
}
function qi(e20) {
  return null !== e20 && "object" == typeof e20 ? e20.valueOf() : e20;
}
function Fi(e20, t2) {
  return (
    (null == e20 || !(e20 >= e20)) - (null == t2 || !(t2 >= t2)) ||
    (e20 < t2 ? -1 : e20 > t2 ? 1 : 0)
  );
}
const Ui = Math.sqrt(50),
  Wi = Math.sqrt(10),
  Vi = Math.sqrt(2);
function Qi(e20, t2, n2) {
  const r2 = (t2 - e20) / Math.max(0, n2),
    i2 = Math.floor(Math.log10(r2)),
    o2 = r2 / Math.pow(10, i2),
    a2 = o2 >= Ui ? 10 : o2 >= Wi ? 5 : o2 >= Vi ? 2 : 1;
  let s2, c2, l2;
  return (
    i2 < 0
      ? ((l2 = Math.pow(10, -i2) / a2),
        (s2 = Math.round(e20 * l2)),
        (c2 = Math.round(t2 * l2)),
        s2 / l2 < e20 && ++s2,
        c2 / l2 > t2 && --c2,
        (l2 = -l2))
      : ((l2 = Math.pow(10, i2) * a2),
        (s2 = Math.round(e20 / l2)),
        (c2 = Math.round(t2 / l2)),
        s2 * l2 < e20 && ++s2,
        c2 * l2 > t2 && --c2),
    c2 < s2 && 0.5 <= n2 && n2 < 2 ? Qi(e20, t2, 2 * n2) : [s2, c2, l2]
  );
}
function Gi(e20, t2, n2) {
  if (!((n2 = +n2) > 0)) return [];
  if ((e20 = +e20) === (t2 = +t2)) return [e20];
  const r2 = t2 < e20,
    [i2, o2, a2] = r2 ? Qi(t2, e20, n2) : Qi(e20, t2, n2);
  if (!(o2 >= i2)) return [];
  const s2 = o2 - i2 + 1,
    c2 = new Array(s2);
  if (r2)
    if (a2 < 0) for (let l2 = 0; l2 < s2; ++l2) c2[l2] = (o2 - l2) / -a2;
    else for (let l2 = 0; l2 < s2; ++l2) c2[l2] = (o2 - l2) * a2;
  else if (a2 < 0) for (let l2 = 0; l2 < s2; ++l2) c2[l2] = (i2 + l2) / -a2;
  else for (let l2 = 0; l2 < s2; ++l2) c2[l2] = (i2 + l2) * a2;
  return c2;
}
function Hi(e20, t2, n2) {
  return Qi((e20 = +e20), (t2 = +t2), (n2 = +n2))[2];
}
function Xi(e20, t2, n2) {
  n2 = +n2;
  const r2 = (t2 = +t2) < (e20 = +e20),
    i2 = r2 ? Hi(t2, e20, n2) : Hi(e20, t2, n2);
  return (r2 ? -1 : 1) * (i2 < 0 ? 1 / -i2 : i2);
}
function Ki(e20, t2) {
  let n2;
  for (const r2 of e20) null != r2 && (n2 < r2 || (void 0 === n2 && r2 >= r2)) && (n2 = r2);
  return n2;
}
function Yi(e20, t2) {
  let n2;
  for (const r2 of e20) null != r2 && (n2 > r2 || (void 0 === n2 && r2 >= r2)) && (n2 = r2);
  return n2;
}
function Zi(e20, t2, n2 = 0, r2 = 1 / 0, i2) {
  if (
    ((t2 = Math.floor(t2)),
    (n2 = Math.floor(Math.max(0, n2))),
    (r2 = Math.floor(Math.min(e20.length - 1, r2))),
    !(n2 <= t2 && t2 <= r2))
  )
    return e20;
  for (
    i2 =
      void 0 === i2
        ? Fi
        : (function (e21 = _i) {
            if (e21 === _i) return Fi;
            if ("function" != typeof e21) throw new TypeError("compare is not a function");
            return (t3, n3) => {
              const r3 = e21(t3, n3);
              return r3 || 0 === r3 ? r3 : (0 === e21(n3, n3)) - (0 === e21(t3, t3));
            };
          })(i2);
    r2 > n2;

  ) {
    if (r2 - n2 > 600) {
      const o3 = r2 - n2 + 1,
        a3 = t2 - n2 + 1,
        s3 = Math.log(o3),
        c2 = 0.5 * Math.exp((2 * s3) / 3),
        l2 = 0.5 * Math.sqrt((s3 * c2 * (o3 - c2)) / o3) * (a3 - o3 / 2 < 0 ? -1 : 1);
      Zi(
        e20,
        t2,
        Math.max(n2, Math.floor(t2 - (a3 * c2) / o3 + l2)),
        Math.min(r2, Math.floor(t2 + ((o3 - a3) * c2) / o3 + l2)),
        i2,
      );
    }
    const o2 = e20[t2];
    let a2 = n2,
      s2 = r2;
    for (Ji(e20, n2, t2), i2(e20[r2], o2) > 0 && Ji(e20, n2, r2); a2 < s2; ) {
      for (Ji(e20, a2, s2), ++a2, --s2; i2(e20[a2], o2) < 0; ) ++a2;
      for (; i2(e20[s2], o2) > 0; ) --s2;
    }
    0 === i2(e20[n2], o2) ? Ji(e20, n2, s2) : (++s2, Ji(e20, s2, r2)),
      s2 <= t2 && (n2 = s2 + 1),
      t2 <= s2 && (r2 = s2 - 1);
  }
  return e20;
}
function Ji(e20, t2, n2) {
  const r2 = e20[t2];
  (e20[t2] = e20[n2]), (e20[n2] = r2);
}
function eo(e20, t2, n2 = Ri) {
  if ((r2 = e20.length) && !isNaN((t2 = +t2))) {
    if (t2 <= 0 || r2 < 2) return +n2(e20[0], 0, e20);
    if (t2 >= 1) return +n2(e20[r2 - 1], r2 - 1, e20);
    var r2,
      i2 = (r2 - 1) * t2,
      o2 = Math.floor(i2),
      a2 = +n2(e20[o2], o2, e20);
    return a2 + (+n2(e20[o2 + 1], o2 + 1, e20) - a2) * (i2 - o2);
  }
}
function to(e20, t2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e20);
      break;
    default:
      this.range(t2).domain(e20);
  }
  return this;
}
function no(e20, t2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      "function" == typeof e20 ? this.interpolator(e20) : this.range(e20);
      break;
    default:
      this.domain(e20), "function" == typeof t2 ? this.interpolator(t2) : this.range(t2);
  }
  return this;
}
const ro = Symbol("implicit");
function io() {
  var e20 = new $i(),
    t2 = [],
    n2 = [],
    r2 = ro;
  function i2(i3) {
    let o2 = e20.get(i3);
    if (void 0 === o2) {
      if (r2 !== ro) return r2;
      e20.set(i3, (o2 = t2.push(i3) - 1));
    }
    return n2[o2 % n2.length];
  }
  return (
    (i2.domain = function (n3) {
      if (!arguments.length) return t2.slice();
      (t2 = []), (e20 = new $i());
      for (const r3 of n3) e20.has(r3) || e20.set(r3, t2.push(r3) - 1);
      return i2;
    }),
    (i2.range = function (e21) {
      return arguments.length ? ((n2 = Array.from(e21)), i2) : n2.slice();
    }),
    (i2.unknown = function (e21) {
      return arguments.length ? ((r2 = e21), i2) : r2;
    }),
    (i2.copy = function () {
      return io(t2, n2).unknown(r2);
    }),
    to.apply(i2, arguments),
    i2
  );
}
function oo() {
  var e20,
    t2,
    n2 = io().unknown(void 0),
    r2 = n2.domain,
    i2 = n2.range,
    o2 = 0,
    a2 = 1,
    s2 = false,
    c2 = 0,
    l2 = 0,
    u2 = 0.5;
  function f2() {
    var n3 = r2().length,
      f3 = a2 < o2,
      d2 = f3 ? a2 : o2,
      p2 = f3 ? o2 : a2;
    (e20 = (p2 - d2) / Math.max(1, n3 - c2 + 2 * l2)),
      s2 && (e20 = Math.floor(e20)),
      (d2 += (p2 - d2 - e20 * (n3 - c2)) * u2),
      (t2 = e20 * (1 - c2)),
      s2 && ((d2 = Math.round(d2)), (t2 = Math.round(t2)));
    var h2 = (function (e21, t3, n4) {
      (e21 = +e21),
        (t3 = +t3),
        (n4 = (i3 = arguments.length) < 2 ? ((t3 = e21), (e21 = 0), 1) : i3 < 3 ? 1 : +n4);
      for (
        var r3 = -1, i3 = 0 | Math.max(0, Math.ceil((t3 - e21) / n4)), o3 = new Array(i3);
        ++r3 < i3;

      )
        o3[r3] = e21 + r3 * n4;
      return o3;
    })(n3).map(function (t3) {
      return d2 + e20 * t3;
    });
    return i2(f3 ? h2.reverse() : h2);
  }
  return (
    delete n2.unknown,
    (n2.domain = function (e21) {
      return arguments.length ? (r2(e21), f2()) : r2();
    }),
    (n2.range = function (e21) {
      return arguments.length ? (([o2, a2] = e21), (o2 = +o2), (a2 = +a2), f2()) : [o2, a2];
    }),
    (n2.rangeRound = function (e21) {
      return ([o2, a2] = e21), (o2 = +o2), (a2 = +a2), (s2 = true), f2();
    }),
    (n2.bandwidth = function () {
      return t2;
    }),
    (n2.step = function () {
      return e20;
    }),
    (n2.round = function (e21) {
      return arguments.length ? ((s2 = !!e21), f2()) : s2;
    }),
    (n2.padding = function (e21) {
      return arguments.length ? ((c2 = Math.min(1, (l2 = +e21))), f2()) : c2;
    }),
    (n2.paddingInner = function (e21) {
      return arguments.length ? ((c2 = Math.min(1, e21)), f2()) : c2;
    }),
    (n2.paddingOuter = function (e21) {
      return arguments.length ? ((l2 = +e21), f2()) : l2;
    }),
    (n2.align = function (e21) {
      return arguments.length ? ((u2 = Math.max(0, Math.min(1, e21))), f2()) : u2;
    }),
    (n2.copy = function () {
      return oo(r2(), [o2, a2]).round(s2).paddingInner(c2).paddingOuter(l2).align(u2);
    }),
    to.apply(f2(), arguments)
  );
}
function ao(e20) {
  var t2 = e20.copy;
  return (
    (e20.padding = e20.paddingOuter),
    delete e20.paddingInner,
    delete e20.paddingOuter,
    (e20.copy = function () {
      return ao(t2());
    }),
    e20
  );
}
function so() {
  return ao(oo.apply(null, arguments).paddingInner(1));
}
function co(e20, t2, n2) {
  (e20.prototype = t2.prototype = n2), (n2.constructor = e20);
}
function lo(e20, t2) {
  var n2 = Object.create(e20.prototype);
  for (var r2 in t2) n2[r2] = t2[r2];
  return n2;
}
function uo() {}
var fo = 0.7,
  po = 1 / fo,
  ho = "\\s*([+-]?\\d+)\\s*",
  yo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  mo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  vo = /^#([0-9a-f]{3,8})$/,
  go = new RegExp(`^rgb\\(${ho},${ho},${ho}\\)$`),
  bo = new RegExp(`^rgb\\(${mo},${mo},${mo}\\)$`),
  xo = new RegExp(`^rgba\\(${ho},${ho},${ho},${yo}\\)$`),
  wo = new RegExp(`^rgba\\(${mo},${mo},${mo},${yo}\\)$`),
  Oo = new RegExp(`^hsl\\(${yo},${mo},${mo}\\)$`),
  So = new RegExp(`^hsla\\(${yo},${mo},${mo},${yo}\\)$`),
  Ao = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function jo() {
  return this.rgb().formatHex();
}
function Mo() {
  return this.rgb().formatRgb();
}
function Po(e20) {
  var t2, n2;
  return (
    (e20 = (e20 + "").trim().toLowerCase()),
    (t2 = vo.exec(e20))
      ? ((n2 = t2[1].length),
        (t2 = parseInt(t2[1], 16)),
        6 === n2
          ? ko(t2)
          : 3 === n2
            ? new No(
                ((t2 >> 8) & 15) | ((t2 >> 4) & 240),
                ((t2 >> 4) & 15) | (240 & t2),
                ((15 & t2) << 4) | (15 & t2),
                1,
              )
            : 8 === n2
              ? Eo((t2 >> 24) & 255, (t2 >> 16) & 255, (t2 >> 8) & 255, (255 & t2) / 255)
              : 4 === n2
                ? Eo(
                    ((t2 >> 12) & 15) | ((t2 >> 8) & 240),
                    ((t2 >> 8) & 15) | ((t2 >> 4) & 240),
                    ((t2 >> 4) & 15) | (240 & t2),
                    (((15 & t2) << 4) | (15 & t2)) / 255,
                  )
                : null)
      : (t2 = go.exec(e20))
        ? new No(t2[1], t2[2], t2[3], 1)
        : (t2 = bo.exec(e20))
          ? new No((255 * t2[1]) / 100, (255 * t2[2]) / 100, (255 * t2[3]) / 100, 1)
          : (t2 = xo.exec(e20))
            ? Eo(t2[1], t2[2], t2[3], t2[4])
            : (t2 = wo.exec(e20))
              ? Eo((255 * t2[1]) / 100, (255 * t2[2]) / 100, (255 * t2[3]) / 100, t2[4])
              : (t2 = Oo.exec(e20))
                ? Ro(t2[1], t2[2] / 100, t2[3] / 100, 1)
                : (t2 = So.exec(e20))
                  ? Ro(t2[1], t2[2] / 100, t2[3] / 100, t2[4])
                  : Ao.hasOwnProperty(e20)
                    ? ko(Ao[e20])
                    : "transparent" === e20
                      ? new No(NaN, NaN, NaN, 0)
                      : null
  );
}
function ko(e20) {
  return new No((e20 >> 16) & 255, (e20 >> 8) & 255, 255 & e20, 1);
}
function Eo(e20, t2, n2, r2) {
  return r2 <= 0 && (e20 = t2 = n2 = NaN), new No(e20, t2, n2, r2);
}
function To(e20, t2, n2, r2) {
  return 1 === arguments.length
    ? ((i2 = e20) instanceof uo || (i2 = Po(i2)),
      i2 ? new No((i2 = i2.rgb()).r, i2.g, i2.b, i2.opacity) : new No())
    : new No(e20, t2, n2, null == r2 ? 1 : r2);
  var i2;
}
function No(e20, t2, n2, r2) {
  (this.r = +e20), (this.g = +t2), (this.b = +n2), (this.opacity = +r2);
}
function Io() {
  return `#${Do(this.r)}${Do(this.g)}${Do(this.b)}`;
}
function _o() {
  const e20 = Co(this.opacity);
  return `${1 === e20 ? "rgb(" : "rgba("}${zo(this.r)}, ${zo(this.g)}, ${zo(this.b)}${1 === e20 ? ")" : `, ${e20})`}`;
}
function Co(e20) {
  return isNaN(e20) ? 1 : Math.max(0, Math.min(1, e20));
}
function zo(e20) {
  return Math.max(0, Math.min(255, Math.round(e20) || 0));
}
function Do(e20) {
  return ((e20 = zo(e20)) < 16 ? "0" : "") + e20.toString(16);
}
function Ro(e20, t2, n2, r2) {
  return (
    r2 <= 0
      ? (e20 = t2 = n2 = NaN)
      : n2 <= 0 || n2 >= 1
        ? (e20 = t2 = NaN)
        : t2 <= 0 && (e20 = NaN),
    new $o(e20, t2, n2, r2)
  );
}
function Lo(e20) {
  if (e20 instanceof $o) return new $o(e20.h, e20.s, e20.l, e20.opacity);
  if ((e20 instanceof uo || (e20 = Po(e20)), !e20)) return new $o();
  if (e20 instanceof $o) return e20;
  var t2 = (e20 = e20.rgb()).r / 255,
    n2 = e20.g / 255,
    r2 = e20.b / 255,
    i2 = Math.min(t2, n2, r2),
    o2 = Math.max(t2, n2, r2),
    a2 = NaN,
    s2 = o2 - i2,
    c2 = (o2 + i2) / 2;
  return (
    s2
      ? ((a2 =
          t2 === o2
            ? (n2 - r2) / s2 + 6 * (n2 < r2)
            : n2 === o2
              ? (r2 - t2) / s2 + 2
              : (t2 - n2) / s2 + 4),
        (s2 /= c2 < 0.5 ? o2 + i2 : 2 - o2 - i2),
        (a2 *= 60))
      : (s2 = c2 > 0 && c2 < 1 ? 0 : a2),
    new $o(a2, s2, c2, e20.opacity)
  );
}
function $o(e20, t2, n2, r2) {
  (this.h = +e20), (this.s = +t2), (this.l = +n2), (this.opacity = +r2);
}
function Bo(e20) {
  return (e20 = (e20 || 0) % 360) < 0 ? e20 + 360 : e20;
}
function qo(e20) {
  return Math.max(0, Math.min(1, e20 || 0));
}
function Fo(e20, t2, n2) {
  return (
    255 *
    (e20 < 60
      ? t2 + ((n2 - t2) * e20) / 60
      : e20 < 180
        ? n2
        : e20 < 240
          ? t2 + ((n2 - t2) * (240 - e20)) / 60
          : t2)
  );
}
co(uo, Po, {
  copy(e20) {
    return Object.assign(new this.constructor(), this, e20);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: jo,
  formatHex: jo,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return Lo(this).formatHsl();
  },
  formatRgb: Mo,
  toString: Mo,
}),
  co(
    No,
    To,
    lo(uo, {
      brighter(e20) {
        return (
          (e20 = null == e20 ? po : Math.pow(po, e20)),
          new No(this.r * e20, this.g * e20, this.b * e20, this.opacity)
        );
      },
      darker(e20) {
        return (
          (e20 = null == e20 ? fo : Math.pow(fo, e20)),
          new No(this.r * e20, this.g * e20, this.b * e20, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new No(zo(this.r), zo(this.g), zo(this.b), Co(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: Io,
      formatHex: Io,
      formatHex8: function () {
        return `#${Do(this.r)}${Do(this.g)}${Do(this.b)}${Do(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
      },
      formatRgb: _o,
      toString: _o,
    }),
  ),
  co(
    $o,
    function (e20, t2, n2, r2) {
      return 1 === arguments.length ? Lo(e20) : new $o(e20, t2, n2, null == r2 ? 1 : r2);
    },
    lo(uo, {
      brighter(e20) {
        return (
          (e20 = null == e20 ? po : Math.pow(po, e20)),
          new $o(this.h, this.s, this.l * e20, this.opacity)
        );
      },
      darker(e20) {
        return (
          (e20 = null == e20 ? fo : Math.pow(fo, e20)),
          new $o(this.h, this.s, this.l * e20, this.opacity)
        );
      },
      rgb() {
        var e20 = (this.h % 360) + 360 * (this.h < 0),
          t2 = isNaN(e20) || isNaN(this.s) ? 0 : this.s,
          n2 = this.l,
          r2 = n2 + (n2 < 0.5 ? n2 : 1 - n2) * t2,
          i2 = 2 * n2 - r2;
        return new No(
          Fo(e20 >= 240 ? e20 - 240 : e20 + 120, i2, r2),
          Fo(e20, i2, r2),
          Fo(e20 < 120 ? e20 + 240 : e20 - 120, i2, r2),
          this.opacity,
        );
      },
      clamp() {
        return new $o(Bo(this.h), qo(this.s), qo(this.l), Co(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const e20 = Co(this.opacity);
        return `${1 === e20 ? "hsl(" : "hsla("}${Bo(this.h)}, ${100 * qo(this.s)}%, ${100 * qo(this.l)}%${1 === e20 ? ")" : `, ${e20})`}`;
      },
    }),
  );
const Uo = (e20) => () => e20;
function Wo(e20) {
  return 1 == (e20 = +e20)
    ? Vo
    : function (t2, n2) {
        return n2 - t2
          ? (function (e21, t3, n3) {
              return (
                (e21 = Math.pow(e21, n3)),
                (t3 = Math.pow(t3, n3) - e21),
                (n3 = 1 / n3),
                function (r2) {
                  return Math.pow(e21 + r2 * t3, n3);
                }
              );
            })(t2, n2, e20)
          : Uo(isNaN(t2) ? n2 : t2);
      };
}
function Vo(e20, t2) {
  var n2 = t2 - e20;
  return n2
    ? /* @__PURE__ */ (function (e21, t3) {
        return function (n3) {
          return e21 + n3 * t3;
        };
      })(e20, n2)
    : Uo(isNaN(e20) ? t2 : e20);
}
const Qo = (function e2(t2) {
  var n2 = Wo(t2);
  function r2(e20, t3) {
    var r3 = n2((e20 = To(e20)).r, (t3 = To(t3)).r),
      i2 = n2(e20.g, t3.g),
      o2 = n2(e20.b, t3.b),
      a2 = Vo(e20.opacity, t3.opacity);
    return function (t4) {
      return (e20.r = r3(t4)), (e20.g = i2(t4)), (e20.b = o2(t4)), (e20.opacity = a2(t4)), e20 + "";
    };
  }
  return (r2.gamma = e2), r2;
})(1);
function Go(e20, t2) {
  t2 || (t2 = []);
  var n2,
    r2 = e20 ? Math.min(t2.length, e20.length) : 0,
    i2 = t2.slice();
  return function (o2) {
    for (n2 = 0; n2 < r2; ++n2) i2[n2] = e20[n2] * (1 - o2) + t2[n2] * o2;
    return i2;
  };
}
function Ho(e20, t2) {
  var n2,
    r2 = t2 ? t2.length : 0,
    i2 = e20 ? Math.min(r2, e20.length) : 0,
    o2 = new Array(i2),
    a2 = new Array(r2);
  for (n2 = 0; n2 < i2; ++n2) o2[n2] = ta(e20[n2], t2[n2]);
  for (; n2 < r2; ++n2) a2[n2] = t2[n2];
  return function (e21) {
    for (n2 = 0; n2 < i2; ++n2) a2[n2] = o2[n2](e21);
    return a2;
  };
}
function Xo(e20, t2) {
  var n2 = /* @__PURE__ */ new Date();
  return (
    (e20 = +e20),
    (t2 = +t2),
    function (r2) {
      return n2.setTime(e20 * (1 - r2) + t2 * r2), n2;
    }
  );
}
function Ko(e20, t2) {
  return (
    (e20 = +e20),
    (t2 = +t2),
    function (n2) {
      return e20 * (1 - n2) + t2 * n2;
    }
  );
}
function Yo(e20, t2) {
  var n2,
    r2 = {},
    i2 = {};
  for (n2 in ((null !== e20 && "object" == typeof e20) || (e20 = {}),
  (null !== t2 && "object" == typeof t2) || (t2 = {}),
  t2))
    n2 in e20 ? (r2[n2] = ta(e20[n2], t2[n2])) : (i2[n2] = t2[n2]);
  return function (e21) {
    for (n2 in r2) i2[n2] = r2[n2](e21);
    return i2;
  };
}
var Zo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Jo = new RegExp(Zo.source, "g");
function ea(e20, t2) {
  var n2,
    r2,
    i2,
    o2 = (Zo.lastIndex = Jo.lastIndex = 0),
    a2 = -1,
    s2 = [],
    c2 = [];
  for (e20 += "", t2 += ""; (n2 = Zo.exec(e20)) && (r2 = Jo.exec(t2)); )
    (i2 = r2.index) > o2 && ((i2 = t2.slice(o2, i2)), s2[a2] ? (s2[a2] += i2) : (s2[++a2] = i2)),
      (n2 = n2[0]) === (r2 = r2[0])
        ? s2[a2]
          ? (s2[a2] += r2)
          : (s2[++a2] = r2)
        : ((s2[++a2] = null), c2.push({ i: a2, x: Ko(n2, r2) })),
      (o2 = Jo.lastIndex);
  return (
    o2 < t2.length && ((i2 = t2.slice(o2)), s2[a2] ? (s2[a2] += i2) : (s2[++a2] = i2)),
    s2.length < 2
      ? c2[0]
        ? /* @__PURE__ */ (function (e21) {
            return function (t3) {
              return e21(t3) + "";
            };
          })(c2[0].x)
        : /* @__PURE__ */ (function (e21) {
            return function () {
              return e21;
            };
          })(t2)
      : ((t2 = c2.length),
        function (e21) {
          for (var n3, r3 = 0; r3 < t2; ++r3) s2[(n3 = c2[r3]).i] = n3.x(e21);
          return s2.join("");
        })
  );
}
function ta(e20, t2) {
  var n2,
    r2 = typeof t2;
  return null == t2 || "boolean" === r2
    ? Uo(t2)
    : ("number" === r2
        ? Ko
        : "string" === r2
          ? (n2 = Po(t2))
            ? ((t2 = n2), Qo)
            : ea
          : t2 instanceof Po
            ? Qo
            : t2 instanceof Date
              ? Xo
              : (function (e21) {
                    return ArrayBuffer.isView(e21) && !(e21 instanceof DataView);
                  })(t2)
                ? Go
                : Array.isArray(t2)
                  ? Ho
                  : ("function" != typeof t2.valueOf && "function" != typeof t2.toString) ||
                      isNaN(t2)
                    ? Yo
                    : Ko)(e20, t2);
}
function na(e20, t2) {
  return (
    (e20 = +e20),
    (t2 = +t2),
    function (n2) {
      return Math.round(e20 * (1 - n2) + t2 * n2);
    }
  );
}
function ra(e20, t2) {
  void 0 === t2 && ((t2 = e20), (e20 = ta));
  for (var n2 = 0, r2 = t2.length - 1, i2 = t2[0], o2 = new Array(r2 < 0 ? 0 : r2); n2 < r2; )
    o2[n2] = e20(i2, (i2 = t2[++n2]));
  return function (e21) {
    var t3 = Math.max(0, Math.min(r2 - 1, Math.floor((e21 *= r2))));
    return o2[t3](e21 - t3);
  };
}
function ia(e20) {
  return +e20;
}
var oa = [0, 1];
function aa(e20) {
  return e20;
}
function sa(e20, t2) {
  return (t2 -= e20 = +e20)
    ? function (n2) {
        return (n2 - e20) / t2;
      }
    : /* @__PURE__ */ (function (e21) {
        return function () {
          return e21;
        };
      })(isNaN(t2) ? NaN : 0.5);
}
function ca(e20, t2, n2) {
  var r2 = e20[0],
    i2 = e20[1],
    o2 = t2[0],
    a2 = t2[1];
  return (
    i2 < r2 ? ((r2 = sa(i2, r2)), (o2 = n2(a2, o2))) : ((r2 = sa(r2, i2)), (o2 = n2(o2, a2))),
    function (e21) {
      return o2(r2(e21));
    }
  );
}
function la(e20, t2, n2) {
  var r2 = Math.min(e20.length, t2.length) - 1,
    i2 = new Array(r2),
    o2 = new Array(r2),
    a2 = -1;
  for (
    e20[r2] < e20[0] && ((e20 = e20.slice().reverse()), (t2 = t2.slice().reverse()));
    ++a2 < r2;

  )
    (i2[a2] = sa(e20[a2], e20[a2 + 1])), (o2[a2] = n2(t2[a2], t2[a2 + 1]));
  return function (t3) {
    var n3 = Li(e20, t3, 1, r2) - 1;
    return o2[n3](i2[n3](t3));
  };
}
function ua(e20, t2) {
  return t2
    .domain(e20.domain())
    .range(e20.range())
    .interpolate(e20.interpolate())
    .clamp(e20.clamp())
    .unknown(e20.unknown());
}
function fa() {
  var e20,
    t2,
    n2,
    r2,
    i2,
    o2,
    a2 = oa,
    s2 = oa,
    c2 = ta,
    l2 = aa;
  function u2() {
    var e21 = Math.min(a2.length, s2.length);
    return (
      l2 !== aa &&
        (l2 = (function (e22, t3) {
          var n3;
          return (
            e22 > t3 && ((n3 = e22), (e22 = t3), (t3 = n3)),
            function (n4) {
              return Math.max(e22, Math.min(t3, n4));
            }
          );
        })(a2[0], a2[e21 - 1])),
      (r2 = e21 > 2 ? la : ca),
      (i2 = o2 = null),
      f2
    );
  }
  function f2(t3) {
    return null == t3 || isNaN((t3 = +t3))
      ? n2
      : (i2 || (i2 = r2(a2.map(e20), s2, c2)))(e20(l2(t3)));
  }
  return (
    (f2.invert = function (n3) {
      return l2(t2((o2 || (o2 = r2(s2, a2.map(e20), Ko)))(n3)));
    }),
    (f2.domain = function (e21) {
      return arguments.length ? ((a2 = Array.from(e21, ia)), u2()) : a2.slice();
    }),
    (f2.range = function (e21) {
      return arguments.length ? ((s2 = Array.from(e21)), u2()) : s2.slice();
    }),
    (f2.rangeRound = function (e21) {
      return (s2 = Array.from(e21)), (c2 = na), u2();
    }),
    (f2.clamp = function (e21) {
      return arguments.length ? ((l2 = !!e21 || aa), u2()) : l2 !== aa;
    }),
    (f2.interpolate = function (e21) {
      return arguments.length ? ((c2 = e21), u2()) : c2;
    }),
    (f2.unknown = function (e21) {
      return arguments.length ? ((n2 = e21), f2) : n2;
    }),
    function (n3, r3) {
      return (e20 = n3), (t2 = r3), u2();
    }
  );
}
function da() {
  return fa()(aa, aa);
}
function pa(e20, t2) {
  if ((n2 = (e20 = t2 ? e20.toExponential(t2 - 1) : e20.toExponential()).indexOf("e")) < 0)
    return null;
  var n2,
    r2 = e20.slice(0, n2);
  return [r2.length > 1 ? r2[0] + r2.slice(2) : r2, +e20.slice(n2 + 1)];
}
function ha(e20) {
  return (e20 = pa(Math.abs(e20))) ? e20[1] : NaN;
}
var ya,
  ma = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function va(e20) {
  if (!(t2 = ma.exec(e20))) throw new Error("invalid format: " + e20);
  var t2;
  return new ga({
    fill: t2[1],
    align: t2[2],
    sign: t2[3],
    symbol: t2[4],
    zero: t2[5],
    width: t2[6],
    comma: t2[7],
    precision: t2[8] && t2[8].slice(1),
    trim: t2[9],
    type: t2[10],
  });
}
function ga(e20) {
  (this.fill = void 0 === e20.fill ? " " : e20.fill + ""),
    (this.align = void 0 === e20.align ? ">" : e20.align + ""),
    (this.sign = void 0 === e20.sign ? "-" : e20.sign + ""),
    (this.symbol = void 0 === e20.symbol ? "" : e20.symbol + ""),
    (this.zero = !!e20.zero),
    (this.width = void 0 === e20.width ? void 0 : +e20.width),
    (this.comma = !!e20.comma),
    (this.precision = void 0 === e20.precision ? void 0 : +e20.precision),
    (this.trim = !!e20.trim),
    (this.type = void 0 === e20.type ? "" : e20.type + "");
}
function ba(e20, t2) {
  var n2 = pa(e20, t2);
  if (!n2) return e20 + "";
  var r2 = n2[0],
    i2 = n2[1];
  return i2 < 0
    ? "0." + new Array(-i2).join("0") + r2
    : r2.length > i2 + 1
      ? r2.slice(0, i2 + 1) + "." + r2.slice(i2 + 1)
      : r2 + new Array(i2 - r2.length + 2).join("0");
}
(va.prototype = ga.prototype),
  (ga.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? "0" : "") +
      (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
      (this.comma ? "," : "") +
      (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
      (this.trim ? "~" : "") +
      this.type
    );
  });
const xa = {
  "%": (e20, t2) => (100 * e20).toFixed(t2),
  b: (e20) => Math.round(e20).toString(2),
  c: (e20) => e20 + "",
  d: function (e20) {
    return Math.abs((e20 = Math.round(e20))) >= 1e21
      ? e20.toLocaleString("en").replace(/,/g, "")
      : e20.toString(10);
  },
  e: (e20, t2) => e20.toExponential(t2),
  f: (e20, t2) => e20.toFixed(t2),
  g: (e20, t2) => e20.toPrecision(t2),
  o: (e20) => Math.round(e20).toString(8),
  p: (e20, t2) => ba(100 * e20, t2),
  r: ba,
  s: function (e20, t2) {
    var n2 = pa(e20, t2);
    if (!n2) return e20 + "";
    var r2 = n2[0],
      i2 = n2[1],
      o2 = i2 - (ya = 3 * Math.max(-8, Math.min(8, Math.floor(i2 / 3)))) + 1,
      a2 = r2.length;
    return o2 === a2
      ? r2
      : o2 > a2
        ? r2 + new Array(o2 - a2 + 1).join("0")
        : o2 > 0
          ? r2.slice(0, o2) + "." + r2.slice(o2)
          : "0." + new Array(1 - o2).join("0") + pa(e20, Math.max(0, t2 + o2 - 1))[0];
  },
  X: (e20) => Math.round(e20).toString(16).toUpperCase(),
  x: (e20) => Math.round(e20).toString(16),
};
function wa(e20) {
  return e20;
}
var Oa,
  Sa,
  Aa,
  ja = Array.prototype.map,
  Ma = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Pa(e20) {
  var t2,
    n2,
    r2 =
      void 0 === e20.grouping || void 0 === e20.thousands
        ? wa
        : ((t2 = ja.call(e20.grouping, Number)),
          (n2 = e20.thousands + ""),
          function (e21, r3) {
            for (
              var i3 = e21.length, o3 = [], a3 = 0, s3 = t2[0], c3 = 0;
              i3 > 0 &&
              s3 > 0 &&
              (c3 + s3 + 1 > r3 && (s3 = Math.max(1, r3 - c3)),
              o3.push(e21.substring((i3 -= s3), i3 + s3)),
              !((c3 += s3 + 1) > r3));

            )
              s3 = t2[(a3 = (a3 + 1) % t2.length)];
            return o3.reverse().join(n2);
          }),
    i2 = void 0 === e20.currency ? "" : e20.currency[0] + "",
    o2 = void 0 === e20.currency ? "" : e20.currency[1] + "",
    a2 = void 0 === e20.decimal ? "." : e20.decimal + "",
    s2 =
      void 0 === e20.numerals
        ? wa
        : /* @__PURE__ */ (function (e21) {
            return function (t3) {
              return t3.replace(/[0-9]/g, function (t4) {
                return e21[+t4];
              });
            };
          })(ja.call(e20.numerals, String)),
    c2 = void 0 === e20.percent ? "%" : e20.percent + "",
    l2 = void 0 === e20.minus ? "\u2212" : e20.minus + "",
    u2 = void 0 === e20.nan ? "NaN" : e20.nan + "";
  function f2(e21) {
    var t3 = (e21 = va(e21)).fill,
      n3 = e21.align,
      f3 = e21.sign,
      d2 = e21.symbol,
      p2 = e21.zero,
      h2 = e21.width,
      y2 = e21.comma,
      m2 = e21.precision,
      v2 = e21.trim,
      g2 = e21.type;
    "n" === g2
      ? ((y2 = true), (g2 = "g"))
      : xa[g2] || (void 0 === m2 && (m2 = 12), (v2 = true), (g2 = "g")),
      (p2 || ("0" === t3 && "=" === n3)) && ((p2 = true), (t3 = "0"), (n3 = "="));
    var b2 = "$" === d2 ? i2 : "#" === d2 && /[boxX]/.test(g2) ? "0" + g2.toLowerCase() : "",
      x2 = "$" === d2 ? o2 : /[%p]/.test(g2) ? c2 : "",
      w2 = xa[g2],
      O2 = /[defgprs%]/.test(g2);
    function S2(e22) {
      var i3,
        o3,
        c3,
        d3 = b2,
        S3 = x2;
      if ("c" === g2) (S3 = w2(e22) + S3), (e22 = "");
      else {
        var A2 = (e22 = +e22) < 0 || 1 / e22 < 0;
        if (
          ((e22 = isNaN(e22) ? u2 : w2(Math.abs(e22), m2)),
          v2 &&
            (e22 = (function (e23) {
              e: for (var t4, n4 = e23.length, r3 = 1, i4 = -1; r3 < n4; ++r3)
                switch (e23[r3]) {
                  case ".":
                    i4 = t4 = r3;
                    break;
                  case "0":
                    0 === i4 && (i4 = r3), (t4 = r3);
                    break;
                  default:
                    if (!+e23[r3]) break e;
                    i4 > 0 && (i4 = 0);
                }
              return i4 > 0 ? e23.slice(0, i4) + e23.slice(t4 + 1) : e23;
            })(e22)),
          A2 && 0 == +e22 && "+" !== f3 && (A2 = false),
          (d3 = (A2 ? ("(" === f3 ? f3 : l2) : "-" === f3 || "(" === f3 ? "" : f3) + d3),
          (S3 = ("s" === g2 ? Ma[8 + ya / 3] : "") + S3 + (A2 && "(" === f3 ? ")" : "")),
          O2)
        ) {
          for (i3 = -1, o3 = e22.length; ++i3 < o3; )
            if (48 > (c3 = e22.charCodeAt(i3)) || c3 > 57) {
              (S3 = (46 === c3 ? a2 + e22.slice(i3 + 1) : e22.slice(i3)) + S3),
                (e22 = e22.slice(0, i3));
              break;
            }
        }
      }
      y2 && !p2 && (e22 = r2(e22, 1 / 0));
      var j2 = d3.length + e22.length + S3.length,
        M2 = j2 < h2 ? new Array(h2 - j2 + 1).join(t3) : "";
      switch (
        (y2 && p2 && ((e22 = r2(M2 + e22, M2.length ? h2 - S3.length : 1 / 0)), (M2 = "")), n3)
      ) {
        case "<":
          e22 = d3 + e22 + S3 + M2;
          break;
        case "=":
          e22 = d3 + M2 + e22 + S3;
          break;
        case "^":
          e22 = M2.slice(0, (j2 = M2.length >> 1)) + d3 + e22 + S3 + M2.slice(j2);
          break;
        default:
          e22 = M2 + d3 + e22 + S3;
      }
      return s2(e22);
    }
    return (
      (m2 =
        void 0 === m2
          ? 6
          : /[gprs]/.test(g2)
            ? Math.max(1, Math.min(21, m2))
            : Math.max(0, Math.min(20, m2))),
      (S2.toString = function () {
        return e21 + "";
      }),
      S2
    );
  }
  return {
    format: f2,
    formatPrefix: function (e21, t3) {
      var n3 = f2((((e21 = va(e21)).type = "f"), e21)),
        r3 = 3 * Math.max(-8, Math.min(8, Math.floor(ha(t3) / 3))),
        i3 = Math.pow(10, -r3),
        o3 = Ma[8 + r3 / 3];
      return function (e22) {
        return n3(i3 * e22) + o3;
      };
    },
  };
}
function ka(e20, t2, n2, r2) {
  var i2,
    o2 = Xi(e20, t2, n2);
  switch ((r2 = va(null == r2 ? ",f" : r2)).type) {
    case "s":
      var a2 = Math.max(Math.abs(e20), Math.abs(t2));
      return (
        null != r2.precision ||
          isNaN(
            (i2 = (function (e21, t3) {
              return Math.max(
                0,
                3 * Math.max(-8, Math.min(8, Math.floor(ha(t3) / 3))) - ha(Math.abs(e21)),
              );
            })(o2, a2)),
          ) ||
          (r2.precision = i2),
        Aa(r2, a2)
      );
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      null != r2.precision ||
        isNaN(
          (i2 = (function (e21, t3) {
            return (
              (e21 = Math.abs(e21)), (t3 = Math.abs(t3) - e21), Math.max(0, ha(t3) - ha(e21)) + 1
            );
          })(o2, Math.max(Math.abs(e20), Math.abs(t2)))),
        ) ||
        (r2.precision = i2 - ("e" === r2.type));
      break;
    case "f":
    case "%":
      null != r2.precision ||
        isNaN(
          (i2 = (function (e21) {
            return Math.max(0, -ha(Math.abs(e21)));
          })(o2)),
        ) ||
        (r2.precision = i2 - 2 * ("%" === r2.type));
  }
  return Sa(r2);
}
function Ea(e20) {
  var t2 = e20.domain;
  return (
    (e20.ticks = function (e21) {
      var n2 = t2();
      return Gi(n2[0], n2[n2.length - 1], null == e21 ? 10 : e21);
    }),
    (e20.tickFormat = function (e21, n2) {
      var r2 = t2();
      return ka(r2[0], r2[r2.length - 1], null == e21 ? 10 : e21, n2);
    }),
    (e20.nice = function (n2) {
      null == n2 && (n2 = 10);
      var r2,
        i2,
        o2 = t2(),
        a2 = 0,
        s2 = o2.length - 1,
        c2 = o2[a2],
        l2 = o2[s2],
        u2 = 10;
      for (
        l2 < c2 && ((i2 = c2), (c2 = l2), (l2 = i2), (i2 = a2), (a2 = s2), (s2 = i2));
        u2-- > 0;

      ) {
        if ((i2 = Hi(c2, l2, n2)) === r2) return (o2[a2] = c2), (o2[s2] = l2), t2(o2);
        if (i2 > 0) (c2 = Math.floor(c2 / i2) * i2), (l2 = Math.ceil(l2 / i2) * i2);
        else {
          if (!(i2 < 0)) break;
          (c2 = Math.ceil(c2 * i2) / i2), (l2 = Math.floor(l2 * i2) / i2);
        }
        r2 = i2;
      }
      return e20;
    }),
    e20
  );
}
function Ta() {
  var e20 = da();
  return (
    (e20.copy = function () {
      return ua(e20, Ta());
    }),
    to.apply(e20, arguments),
    Ea(e20)
  );
}
function Na(e20, t2) {
  var n2,
    r2 = 0,
    i2 = (e20 = e20.slice()).length - 1,
    o2 = e20[r2],
    a2 = e20[i2];
  return (
    a2 < o2 && ((n2 = r2), (r2 = i2), (i2 = n2), (n2 = o2), (o2 = a2), (a2 = n2)),
    (e20[r2] = t2.floor(o2)),
    (e20[i2] = t2.ceil(a2)),
    e20
  );
}
function Ia(e20) {
  return Math.log(e20);
}
function _a(e20) {
  return Math.exp(e20);
}
function Ca(e20) {
  return -Math.log(-e20);
}
function za(e20) {
  return -Math.exp(-e20);
}
function Da(e20) {
  return isFinite(e20) ? +("1e" + e20) : e20 < 0 ? 0 : e20;
}
function Ra(e20) {
  return (t2, n2) => -e20(-t2, n2);
}
function La(e20) {
  const t2 = e20(Ia, _a),
    n2 = t2.domain;
  let r2,
    i2,
    o2 = 10;
  function a2() {
    return (
      (r2 = (function (e21) {
        return e21 === Math.E
          ? Math.log
          : (10 === e21 && Math.log10) ||
              (2 === e21 && Math.log2) ||
              ((e21 = Math.log(e21)), (t3) => Math.log(t3) / e21);
      })(o2)),
      (i2 = /* @__PURE__ */ (function (e21) {
        return 10 === e21 ? Da : e21 === Math.E ? Math.exp : (t3) => Math.pow(e21, t3);
      })(o2)),
      n2()[0] < 0 ? ((r2 = Ra(r2)), (i2 = Ra(i2)), e20(Ca, za)) : e20(Ia, _a),
      t2
    );
  }
  return (
    (t2.base = function (e21) {
      return arguments.length ? ((o2 = +e21), a2()) : o2;
    }),
    (t2.domain = function (e21) {
      return arguments.length ? (n2(e21), a2()) : n2();
    }),
    (t2.ticks = (e21) => {
      const t3 = n2();
      let a3 = t3[0],
        s2 = t3[t3.length - 1];
      const c2 = s2 < a3;
      c2 && ([a3, s2] = [s2, a3]);
      let l2,
        u2,
        f2 = r2(a3),
        d2 = r2(s2);
      const p2 = null == e21 ? 10 : +e21;
      let h2 = [];
      if (!(o2 % 1) && d2 - f2 < p2) {
        if (((f2 = Math.floor(f2)), (d2 = Math.ceil(d2)), a3 > 0)) {
          for (; f2 <= d2; ++f2)
            for (l2 = 1; l2 < o2; ++l2)
              if (((u2 = f2 < 0 ? l2 / i2(-f2) : l2 * i2(f2)), !(u2 < a3))) {
                if (u2 > s2) break;
                h2.push(u2);
              }
        } else
          for (; f2 <= d2; ++f2)
            for (l2 = o2 - 1; l2 >= 1; --l2)
              if (((u2 = f2 > 0 ? l2 / i2(-f2) : l2 * i2(f2)), !(u2 < a3))) {
                if (u2 > s2) break;
                h2.push(u2);
              }
        2 * h2.length < p2 && (h2 = Gi(a3, s2, p2));
      } else h2 = Gi(f2, d2, Math.min(d2 - f2, p2)).map(i2);
      return c2 ? h2.reverse() : h2;
    }),
    (t2.tickFormat = (e21, n3) => {
      if (
        (null == e21 && (e21 = 10),
        null == n3 && (n3 = 10 === o2 ? "s" : ","),
        "function" != typeof n3 &&
          (o2 % 1 || null != (n3 = va(n3)).precision || (n3.trim = true), (n3 = Sa(n3))),
        e21 === 1 / 0)
      )
        return n3;
      const a3 = Math.max(1, (o2 * e21) / t2.ticks().length);
      return (e22) => {
        let t3 = e22 / i2(Math.round(r2(e22)));
        return t3 * o2 < o2 - 0.5 && (t3 *= o2), t3 <= a3 ? n3(e22) : "";
      };
    }),
    (t2.nice = () =>
      n2(
        Na(n2(), {
          floor: (e21) => i2(Math.floor(r2(e21))),
          ceil: (e21) => i2(Math.ceil(r2(e21))),
        }),
      )),
    t2
  );
}
function $a(e20) {
  return function (t2) {
    return Math.sign(t2) * Math.log1p(Math.abs(t2 / e20));
  };
}
function Ba(e20) {
  return function (t2) {
    return Math.sign(t2) * Math.expm1(Math.abs(t2)) * e20;
  };
}
function qa(e20) {
  var t2 = 1,
    n2 = e20($a(t2), Ba(t2));
  return (
    (n2.constant = function (n3) {
      return arguments.length ? e20($a((t2 = +n3)), Ba(t2)) : t2;
    }),
    Ea(n2)
  );
}
function Fa(e20) {
  return function (t2) {
    return t2 < 0 ? -Math.pow(-t2, e20) : Math.pow(t2, e20);
  };
}
function Ua(e20) {
  return e20 < 0 ? -Math.sqrt(-e20) : Math.sqrt(e20);
}
function Wa(e20) {
  return e20 < 0 ? -e20 * e20 : e20 * e20;
}
function Va(e20) {
  var t2 = e20(aa, aa),
    n2 = 1;
  return (
    (t2.exponent = function (t3) {
      return arguments.length
        ? 1 === (n2 = +t3)
          ? e20(aa, aa)
          : 0.5 === n2
            ? e20(Ua, Wa)
            : e20(Fa(n2), Fa(1 / n2))
        : n2;
    }),
    Ea(t2)
  );
}
function Qa() {
  var e20 = Va(fa());
  return (
    (e20.copy = function () {
      return ua(e20, Qa()).exponent(e20.exponent());
    }),
    to.apply(e20, arguments),
    e20
  );
}
function Ga(e20) {
  return Math.sign(e20) * e20 * e20;
}
!(function (e20) {
  (Oa = Pa(e20)), (Sa = Oa.format), (Aa = Oa.formatPrefix);
})({ thousands: ",", grouping: [3], currency: ["$", ""] });
const Ha = /* @__PURE__ */ new Date(),
  Xa = /* @__PURE__ */ new Date();
function Ka(e20, t2, n2, r2) {
  function i2(t3) {
    return (
      e20(
        (t3 = 0 === arguments.length ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t3)),
      ),
      t3
    );
  }
  return (
    (i2.floor = (t3) => (e20((t3 = /* @__PURE__ */ new Date(+t3))), t3)),
    (i2.ceil = (n3) => (e20((n3 = new Date(n3 - 1))), t2(n3, 1), e20(n3), n3)),
    (i2.round = (e21) => {
      const t3 = i2(e21),
        n3 = i2.ceil(e21);
      return e21 - t3 < n3 - e21 ? t3 : n3;
    }),
    (i2.offset = (e21, n3) => (
      t2((e21 = /* @__PURE__ */ new Date(+e21)), null == n3 ? 1 : Math.floor(n3)), e21
    )),
    (i2.range = (n3, r3, o2) => {
      const a2 = [];
      if (((n3 = i2.ceil(n3)), (o2 = null == o2 ? 1 : Math.floor(o2)), !(n3 < r3 && o2 > 0)))
        return a2;
      let s2;
      do {
        a2.push((s2 = /* @__PURE__ */ new Date(+n3))), t2(n3, o2), e20(n3);
      } while (s2 < n3 && n3 < r3);
      return a2;
    }),
    (i2.filter = (n3) =>
      Ka(
        (t3) => {
          if (t3 >= t3) for (; e20(t3), !n3(t3); ) t3.setTime(t3 - 1);
        },
        (e21, r3) => {
          if (e21 >= e21)
            if (r3 < 0) for (; ++r3 <= 0; ) for (; t2(e21, -1), !n3(e21); );
            else for (; --r3 >= 0; ) for (; t2(e21, 1), !n3(e21); );
        },
      )),
    n2 &&
      ((i2.count = (t3, r3) => (
        Ha.setTime(+t3), Xa.setTime(+r3), e20(Ha), e20(Xa), Math.floor(n2(Ha, Xa))
      )),
      (i2.every = (e21) => (
        (e21 = Math.floor(e21)),
        isFinite(e21) && e21 > 0
          ? e21 > 1
            ? i2.filter(r2 ? (t3) => r2(t3) % e21 == 0 : (t3) => i2.count(0, t3) % e21 == 0)
            : i2
          : null
      ))),
    i2
  );
}
const Ya = Ka(
  () => {},
  (e20, t2) => {
    e20.setTime(+e20 + t2);
  },
  (e20, t2) => t2 - e20,
);
(Ya.every = (e20) => (
  (e20 = Math.floor(e20)),
  isFinite(e20) && e20 > 0
    ? e20 > 1
      ? Ka(
          (t2) => {
            t2.setTime(Math.floor(t2 / e20) * e20);
          },
          (t2, n2) => {
            t2.setTime(+t2 + n2 * e20);
          },
          (t2, n2) => (n2 - t2) / e20,
        )
      : Ya
    : null
)),
  Ya.range;
const Za = 1e3,
  Ja = 6e4,
  es = 36e5,
  ts = 864e5,
  ns = 6048e5,
  rs = 2592e6,
  is = 31536e6,
  os = Ka(
    (e20) => {
      e20.setTime(e20 - e20.getMilliseconds());
    },
    (e20, t2) => {
      e20.setTime(+e20 + t2 * Za);
    },
    (e20, t2) => (t2 - e20) / Za,
    (e20) => e20.getUTCSeconds(),
  );
os.range;
const as = Ka(
  (e20) => {
    e20.setTime(e20 - e20.getMilliseconds() - e20.getSeconds() * Za);
  },
  (e20, t2) => {
    e20.setTime(+e20 + t2 * Ja);
  },
  (e20, t2) => (t2 - e20) / Ja,
  (e20) => e20.getMinutes(),
);
as.range;
const ss = Ka(
  (e20) => {
    e20.setUTCSeconds(0, 0);
  },
  (e20, t2) => {
    e20.setTime(+e20 + t2 * Ja);
  },
  (e20, t2) => (t2 - e20) / Ja,
  (e20) => e20.getUTCMinutes(),
);
ss.range;
const cs = Ka(
  (e20) => {
    e20.setTime(e20 - e20.getMilliseconds() - e20.getSeconds() * Za - e20.getMinutes() * Ja);
  },
  (e20, t2) => {
    e20.setTime(+e20 + t2 * es);
  },
  (e20, t2) => (t2 - e20) / es,
  (e20) => e20.getHours(),
);
cs.range;
const ls = Ka(
  (e20) => {
    e20.setUTCMinutes(0, 0, 0);
  },
  (e20, t2) => {
    e20.setTime(+e20 + t2 * es);
  },
  (e20, t2) => (t2 - e20) / es,
  (e20) => e20.getUTCHours(),
);
ls.range;
const us = Ka(
  (e20) => e20.setHours(0, 0, 0, 0),
  (e20, t2) => e20.setDate(e20.getDate() + t2),
  (e20, t2) => (t2 - e20 - (t2.getTimezoneOffset() - e20.getTimezoneOffset()) * Ja) / ts,
  (e20) => e20.getDate() - 1,
);
us.range;
const fs = Ka(
  (e20) => {
    e20.setUTCHours(0, 0, 0, 0);
  },
  (e20, t2) => {
    e20.setUTCDate(e20.getUTCDate() + t2);
  },
  (e20, t2) => (t2 - e20) / ts,
  (e20) => e20.getUTCDate() - 1,
);
fs.range;
const ds = Ka(
  (e20) => {
    e20.setUTCHours(0, 0, 0, 0);
  },
  (e20, t2) => {
    e20.setUTCDate(e20.getUTCDate() + t2);
  },
  (e20, t2) => (t2 - e20) / ts,
  (e20) => Math.floor(e20 / ts),
);
function ps(e20) {
  return Ka(
    (t2) => {
      t2.setDate(t2.getDate() - ((t2.getDay() + 7 - e20) % 7)), t2.setHours(0, 0, 0, 0);
    },
    (e21, t2) => {
      e21.setDate(e21.getDate() + 7 * t2);
    },
    (e21, t2) => (t2 - e21 - (t2.getTimezoneOffset() - e21.getTimezoneOffset()) * Ja) / ns,
  );
}
ds.range;
const hs = ps(0),
  ys = ps(1),
  ms = ps(2),
  vs = ps(3),
  gs = ps(4),
  bs = ps(5),
  xs = ps(6);
function ws(e20) {
  return Ka(
    (t2) => {
      t2.setUTCDate(t2.getUTCDate() - ((t2.getUTCDay() + 7 - e20) % 7)), t2.setUTCHours(0, 0, 0, 0);
    },
    (e21, t2) => {
      e21.setUTCDate(e21.getUTCDate() + 7 * t2);
    },
    (e21, t2) => (t2 - e21) / ns,
  );
}
hs.range, ys.range, ms.range, vs.range, gs.range, bs.range, xs.range;
const Os = ws(0),
  Ss = ws(1),
  As = ws(2),
  js = ws(3),
  Ms = ws(4),
  Ps = ws(5),
  ks = ws(6);
Os.range, Ss.range, As.range, js.range, Ms.range, Ps.range, ks.range;
const Es = Ka(
  (e20) => {
    e20.setDate(1), e20.setHours(0, 0, 0, 0);
  },
  (e20, t2) => {
    e20.setMonth(e20.getMonth() + t2);
  },
  (e20, t2) => t2.getMonth() - e20.getMonth() + 12 * (t2.getFullYear() - e20.getFullYear()),
  (e20) => e20.getMonth(),
);
Es.range;
const Ts = Ka(
  (e20) => {
    e20.setUTCDate(1), e20.setUTCHours(0, 0, 0, 0);
  },
  (e20, t2) => {
    e20.setUTCMonth(e20.getUTCMonth() + t2);
  },
  (e20, t2) =>
    t2.getUTCMonth() - e20.getUTCMonth() + 12 * (t2.getUTCFullYear() - e20.getUTCFullYear()),
  (e20) => e20.getUTCMonth(),
);
Ts.range;
const Ns = Ka(
  (e20) => {
    e20.setMonth(0, 1), e20.setHours(0, 0, 0, 0);
  },
  (e20, t2) => {
    e20.setFullYear(e20.getFullYear() + t2);
  },
  (e20, t2) => t2.getFullYear() - e20.getFullYear(),
  (e20) => e20.getFullYear(),
);
(Ns.every = (e20) =>
  isFinite((e20 = Math.floor(e20))) && e20 > 0
    ? Ka(
        (t2) => {
          t2.setFullYear(Math.floor(t2.getFullYear() / e20) * e20),
            t2.setMonth(0, 1),
            t2.setHours(0, 0, 0, 0);
        },
        (t2, n2) => {
          t2.setFullYear(t2.getFullYear() + n2 * e20);
        },
      )
    : null),
  Ns.range;
const Is = Ka(
  (e20) => {
    e20.setUTCMonth(0, 1), e20.setUTCHours(0, 0, 0, 0);
  },
  (e20, t2) => {
    e20.setUTCFullYear(e20.getUTCFullYear() + t2);
  },
  (e20, t2) => t2.getUTCFullYear() - e20.getUTCFullYear(),
  (e20) => e20.getUTCFullYear(),
);
function _s(e20, t2, n2, r2, i2, o2) {
  const a2 = [
    [os, 1, Za],
    [os, 5, 5e3],
    [os, 15, 15e3],
    [os, 30, 3e4],
    [o2, 1, Ja],
    [o2, 5, 3e5],
    [o2, 15, 9e5],
    [o2, 30, 18e5],
    [i2, 1, es],
    [i2, 3, 108e5],
    [i2, 6, 216e5],
    [i2, 12, 432e5],
    [r2, 1, ts],
    [r2, 2, 1728e5],
    [n2, 1, ns],
    [t2, 1, rs],
    [t2, 3, 7776e6],
    [e20, 1, is],
  ];
  function s2(t3, n3, r3) {
    const i3 = Math.abs(n3 - t3) / r3,
      o3 = zi(([, , e21]) => e21).right(a2, i3);
    if (o3 === a2.length) return e20.every(Xi(t3 / is, n3 / is, r3));
    if (0 === o3) return Ya.every(Math.max(Xi(t3, n3, r3), 1));
    const [s3, c2] = a2[i3 / a2[o3 - 1][2] < a2[o3][2] / i3 ? o3 - 1 : o3];
    return s3.every(c2);
  }
  return [
    function (e21, t3, n3) {
      const r3 = t3 < e21;
      r3 && ([e21, t3] = [t3, e21]);
      const i3 = n3 && "function" == typeof n3.range ? n3 : s2(e21, t3, n3),
        o3 = i3 ? i3.range(e21, +t3 + 1) : [];
      return r3 ? o3.reverse() : o3;
    },
    s2,
  ];
}
(Is.every = (e20) =>
  isFinite((e20 = Math.floor(e20))) && e20 > 0
    ? Ka(
        (t2) => {
          t2.setUTCFullYear(Math.floor(t2.getUTCFullYear() / e20) * e20),
            t2.setUTCMonth(0, 1),
            t2.setUTCHours(0, 0, 0, 0);
        },
        (t2, n2) => {
          t2.setUTCFullYear(t2.getUTCFullYear() + n2 * e20);
        },
      )
    : null),
  Is.range;
const [Cs, zs] = _s(Is, Ts, Os, ds, ls, ss),
  [Ds, Rs] = _s(Ns, Es, hs, us, cs, as);
function Ls(e20) {
  if (0 <= e20.y && e20.y < 100) {
    var t2 = new Date(-1, e20.m, e20.d, e20.H, e20.M, e20.S, e20.L);
    return t2.setFullYear(e20.y), t2;
  }
  return new Date(e20.y, e20.m, e20.d, e20.H, e20.M, e20.S, e20.L);
}
function $s(e20) {
  if (0 <= e20.y && e20.y < 100) {
    var t2 = new Date(Date.UTC(-1, e20.m, e20.d, e20.H, e20.M, e20.S, e20.L));
    return t2.setUTCFullYear(e20.y), t2;
  }
  return new Date(Date.UTC(e20.y, e20.m, e20.d, e20.H, e20.M, e20.S, e20.L));
}
function Bs(e20, t2, n2) {
  return { y: e20, m: t2, d: n2, H: 0, M: 0, S: 0, L: 0 };
}
var qs,
  Fs,
  Us,
  Ws = { "-": "", _: " ", 0: "0" },
  Vs = /^\s*\d+/,
  Qs = /^%/,
  Gs = /[\\^$*+?|[\]().{}]/g;
function Hs(e20, t2, n2) {
  var r2 = e20 < 0 ? "-" : "",
    i2 = (r2 ? -e20 : e20) + "",
    o2 = i2.length;
  return r2 + (o2 < n2 ? new Array(n2 - o2 + 1).join(t2) + i2 : i2);
}
function Xs(e20) {
  return e20.replace(Gs, "\\$&");
}
function Ks(e20) {
  return new RegExp("^(?:" + e20.map(Xs).join("|") + ")", "i");
}
function Ys(e20) {
  return new Map(e20.map((e21, t2) => [e21.toLowerCase(), t2]));
}
function Zs(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 1));
  return r2 ? ((e20.w = +r2[0]), n2 + r2[0].length) : -1;
}
function Js(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 1));
  return r2 ? ((e20.u = +r2[0]), n2 + r2[0].length) : -1;
}
function ec(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.U = +r2[0]), n2 + r2[0].length) : -1;
}
function tc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.V = +r2[0]), n2 + r2[0].length) : -1;
}
function nc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.W = +r2[0]), n2 + r2[0].length) : -1;
}
function rc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 4));
  return r2 ? ((e20.y = +r2[0]), n2 + r2[0].length) : -1;
}
function ic(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.y = +r2[0] + (+r2[0] > 68 ? 1900 : 2e3)), n2 + r2[0].length) : -1;
}
function oc(e20, t2, n2) {
  var r2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t2.slice(n2, n2 + 6));
  return r2 ? ((e20.Z = r2[1] ? 0 : -(r2[2] + (r2[3] || "00"))), n2 + r2[0].length) : -1;
}
function ac(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 1));
  return r2 ? ((e20.q = 3 * r2[0] - 3), n2 + r2[0].length) : -1;
}
function sc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.m = r2[0] - 1), n2 + r2[0].length) : -1;
}
function cc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.d = +r2[0]), n2 + r2[0].length) : -1;
}
function lc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 3));
  return r2 ? ((e20.m = 0), (e20.d = +r2[0]), n2 + r2[0].length) : -1;
}
function uc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.H = +r2[0]), n2 + r2[0].length) : -1;
}
function fc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.M = +r2[0]), n2 + r2[0].length) : -1;
}
function dc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 2));
  return r2 ? ((e20.S = +r2[0]), n2 + r2[0].length) : -1;
}
function pc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 3));
  return r2 ? ((e20.L = +r2[0]), n2 + r2[0].length) : -1;
}
function hc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2, n2 + 6));
  return r2 ? ((e20.L = Math.floor(r2[0] / 1e3)), n2 + r2[0].length) : -1;
}
function yc(e20, t2, n2) {
  var r2 = Qs.exec(t2.slice(n2, n2 + 1));
  return r2 ? n2 + r2[0].length : -1;
}
function mc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2));
  return r2 ? ((e20.Q = +r2[0]), n2 + r2[0].length) : -1;
}
function vc(e20, t2, n2) {
  var r2 = Vs.exec(t2.slice(n2));
  return r2 ? ((e20.s = +r2[0]), n2 + r2[0].length) : -1;
}
function gc(e20, t2) {
  return Hs(e20.getDate(), t2, 2);
}
function bc(e20, t2) {
  return Hs(e20.getHours(), t2, 2);
}
function xc(e20, t2) {
  return Hs(e20.getHours() % 12 || 12, t2, 2);
}
function wc(e20, t2) {
  return Hs(1 + us.count(Ns(e20), e20), t2, 3);
}
function Oc(e20, t2) {
  return Hs(e20.getMilliseconds(), t2, 3);
}
function Sc(e20, t2) {
  return Oc(e20, t2) + "000";
}
function Ac(e20, t2) {
  return Hs(e20.getMonth() + 1, t2, 2);
}
function jc(e20, t2) {
  return Hs(e20.getMinutes(), t2, 2);
}
function Mc(e20, t2) {
  return Hs(e20.getSeconds(), t2, 2);
}
function Pc(e20) {
  var t2 = e20.getDay();
  return 0 === t2 ? 7 : t2;
}
function kc(e20, t2) {
  return Hs(hs.count(Ns(e20) - 1, e20), t2, 2);
}
function Ec(e20) {
  var t2 = e20.getDay();
  return t2 >= 4 || 0 === t2 ? gs(e20) : gs.ceil(e20);
}
function Tc(e20, t2) {
  return (e20 = Ec(e20)), Hs(gs.count(Ns(e20), e20) + (4 === Ns(e20).getDay()), t2, 2);
}
function Nc(e20) {
  return e20.getDay();
}
function Ic(e20, t2) {
  return Hs(ys.count(Ns(e20) - 1, e20), t2, 2);
}
function _c(e20, t2) {
  return Hs(e20.getFullYear() % 100, t2, 2);
}
function Cc(e20, t2) {
  return Hs((e20 = Ec(e20)).getFullYear() % 100, t2, 2);
}
function zc(e20, t2) {
  return Hs(e20.getFullYear() % 1e4, t2, 4);
}
function Dc(e20, t2) {
  var n2 = e20.getDay();
  return Hs((e20 = n2 >= 4 || 0 === n2 ? gs(e20) : gs.ceil(e20)).getFullYear() % 1e4, t2, 4);
}
function Rc(e20) {
  var t2 = e20.getTimezoneOffset();
  return (t2 > 0 ? "-" : ((t2 *= -1), "+")) + Hs((t2 / 60) | 0, "0", 2) + Hs(t2 % 60, "0", 2);
}
function Lc(e20, t2) {
  return Hs(e20.getUTCDate(), t2, 2);
}
function $c(e20, t2) {
  return Hs(e20.getUTCHours(), t2, 2);
}
function Bc(e20, t2) {
  return Hs(e20.getUTCHours() % 12 || 12, t2, 2);
}
function qc(e20, t2) {
  return Hs(1 + fs.count(Is(e20), e20), t2, 3);
}
function Fc(e20, t2) {
  return Hs(e20.getUTCMilliseconds(), t2, 3);
}
function Uc(e20, t2) {
  return Fc(e20, t2) + "000";
}
function Wc(e20, t2) {
  return Hs(e20.getUTCMonth() + 1, t2, 2);
}
function Vc(e20, t2) {
  return Hs(e20.getUTCMinutes(), t2, 2);
}
function Qc(e20, t2) {
  return Hs(e20.getUTCSeconds(), t2, 2);
}
function Gc(e20) {
  var t2 = e20.getUTCDay();
  return 0 === t2 ? 7 : t2;
}
function Hc(e20, t2) {
  return Hs(Os.count(Is(e20) - 1, e20), t2, 2);
}
function Xc(e20) {
  var t2 = e20.getUTCDay();
  return t2 >= 4 || 0 === t2 ? Ms(e20) : Ms.ceil(e20);
}
function Kc(e20, t2) {
  return (e20 = Xc(e20)), Hs(Ms.count(Is(e20), e20) + (4 === Is(e20).getUTCDay()), t2, 2);
}
function Yc(e20) {
  return e20.getUTCDay();
}
function Zc(e20, t2) {
  return Hs(Ss.count(Is(e20) - 1, e20), t2, 2);
}
function Jc(e20, t2) {
  return Hs(e20.getUTCFullYear() % 100, t2, 2);
}
function el(e20, t2) {
  return Hs((e20 = Xc(e20)).getUTCFullYear() % 100, t2, 2);
}
function tl(e20, t2) {
  return Hs(e20.getUTCFullYear() % 1e4, t2, 4);
}
function nl(e20, t2) {
  var n2 = e20.getUTCDay();
  return Hs((e20 = n2 >= 4 || 0 === n2 ? Ms(e20) : Ms.ceil(e20)).getUTCFullYear() % 1e4, t2, 4);
}
function rl() {
  return "+0000";
}
function il() {
  return "%";
}
function ol(e20) {
  return +e20;
}
function al(e20) {
  return Math.floor(+e20 / 1e3);
}
function sl(e20) {
  return new Date(e20);
}
function cl(e20) {
  return e20 instanceof Date ? +e20 : +(/* @__PURE__ */ new Date(+e20));
}
function ll(e20, t2, n2, r2, i2, o2, a2, s2, c2, l2) {
  var u2 = da(),
    f2 = u2.invert,
    d2 = u2.domain,
    p2 = l2(".%L"),
    h2 = l2(":%S"),
    y2 = l2("%I:%M"),
    m2 = l2("%I %p"),
    v2 = l2("%a %d"),
    g2 = l2("%b %d"),
    b2 = l2("%B"),
    x2 = l2("%Y");
  function w2(e21) {
    return (
      c2(e21) < e21
        ? p2
        : s2(e21) < e21
          ? h2
          : a2(e21) < e21
            ? y2
            : o2(e21) < e21
              ? m2
              : r2(e21) < e21
                ? i2(e21) < e21
                  ? v2
                  : g2
                : n2(e21) < e21
                  ? b2
                  : x2
    )(e21);
  }
  return (
    (u2.invert = function (e21) {
      return new Date(f2(e21));
    }),
    (u2.domain = function (e21) {
      return arguments.length ? d2(Array.from(e21, cl)) : d2().map(sl);
    }),
    (u2.ticks = function (t3) {
      var n3 = d2();
      return e20(n3[0], n3[n3.length - 1], null == t3 ? 10 : t3);
    }),
    (u2.tickFormat = function (e21, t3) {
      return null == t3 ? w2 : l2(t3);
    }),
    (u2.nice = function (e21) {
      var n3 = d2();
      return (
        (e21 && "function" == typeof e21.range) ||
          (e21 = t2(n3[0], n3[n3.length - 1], null == e21 ? 10 : e21)),
        e21 ? d2(Na(n3, e21)) : u2
      );
    }),
    (u2.copy = function () {
      return ua(u2, ll(e20, t2, n2, r2, i2, o2, a2, s2, c2, l2));
    }),
    u2
  );
}
function ul() {
  var e20,
    t2,
    n2,
    r2,
    i2,
    o2 = 0,
    a2 = 1,
    s2 = aa,
    c2 = false;
  function l2(t3) {
    return null == t3 || isNaN((t3 = +t3))
      ? i2
      : s2(0 === n2 ? 0.5 : ((t3 = (r2(t3) - e20) * n2), c2 ? Math.max(0, Math.min(1, t3)) : t3));
  }
  function u2(e21) {
    return function (t3) {
      var n3, r3;
      return arguments.length ? (([n3, r3] = t3), (s2 = e21(n3, r3)), l2) : [s2(0), s2(1)];
    };
  }
  return (
    (l2.domain = function (i3) {
      return arguments.length
        ? (([o2, a2] = i3),
          (e20 = r2((o2 = +o2))),
          (t2 = r2((a2 = +a2))),
          (n2 = e20 === t2 ? 0 : 1 / (t2 - e20)),
          l2)
        : [o2, a2];
    }),
    (l2.clamp = function (e21) {
      return arguments.length ? ((c2 = !!e21), l2) : c2;
    }),
    (l2.interpolator = function (e21) {
      return arguments.length ? ((s2 = e21), l2) : s2;
    }),
    (l2.range = u2(ta)),
    (l2.rangeRound = u2(na)),
    (l2.unknown = function (e21) {
      return arguments.length ? ((i2 = e21), l2) : i2;
    }),
    function (i3) {
      return (r2 = i3), (e20 = i3(o2)), (t2 = i3(a2)), (n2 = e20 === t2 ? 0 : 1 / (t2 - e20)), l2;
    }
  );
}
function fl(e20, t2) {
  return t2
    .domain(e20.domain())
    .interpolator(e20.interpolator())
    .clamp(e20.clamp())
    .unknown(e20.unknown());
}
function dl() {
  var e20 = Va(ul());
  return (
    (e20.copy = function () {
      return fl(e20, dl()).exponent(e20.exponent());
    }),
    no.apply(e20, arguments)
  );
}
function pl() {
  var e20,
    t2,
    n2,
    r2,
    i2,
    o2,
    a2,
    s2 = 0,
    c2 = 0.5,
    l2 = 1,
    u2 = 1,
    f2 = aa,
    d2 = false;
  function p2(e21) {
    return isNaN((e21 = +e21))
      ? a2
      : ((e21 = 0.5 + ((e21 = +o2(e21)) - t2) * (u2 * e21 < u2 * t2 ? r2 : i2)),
        f2(d2 ? Math.max(0, Math.min(1, e21)) : e21));
  }
  function h2(e21) {
    return function (t3) {
      var n3, r3, i3;
      return arguments.length
        ? (([n3, r3, i3] = t3), (f2 = ra(e21, [n3, r3, i3])), p2)
        : [f2(0), f2(0.5), f2(1)];
    };
  }
  return (
    (p2.domain = function (a3) {
      return arguments.length
        ? (([s2, c2, l2] = a3),
          (e20 = o2((s2 = +s2))),
          (t2 = o2((c2 = +c2))),
          (n2 = o2((l2 = +l2))),
          (r2 = e20 === t2 ? 0 : 0.5 / (t2 - e20)),
          (i2 = t2 === n2 ? 0 : 0.5 / (n2 - t2)),
          (u2 = t2 < e20 ? -1 : 1),
          p2)
        : [s2, c2, l2];
    }),
    (p2.clamp = function (e21) {
      return arguments.length ? ((d2 = !!e21), p2) : d2;
    }),
    (p2.interpolator = function (e21) {
      return arguments.length ? ((f2 = e21), p2) : f2;
    }),
    (p2.range = h2(ta)),
    (p2.rangeRound = h2(na)),
    (p2.unknown = function (e21) {
      return arguments.length ? ((a2 = e21), p2) : a2;
    }),
    function (a3) {
      return (
        (o2 = a3),
        (e20 = a3(s2)),
        (t2 = a3(c2)),
        (n2 = a3(l2)),
        (r2 = e20 === t2 ? 0 : 0.5 / (t2 - e20)),
        (i2 = t2 === n2 ? 0 : 0.5 / (n2 - t2)),
        (u2 = t2 < e20 ? -1 : 1),
        p2
      );
    }
  );
}
function hl() {
  var e20 = Va(pl());
  return (
    (e20.copy = function () {
      return fl(e20, hl()).exponent(e20.exponent());
    }),
    no.apply(e20, arguments)
  );
}
!(function (e20) {
  (qs = (function (e21) {
    var t2 = e21.dateTime,
      n2 = e21.date,
      r2 = e21.time,
      i2 = e21.periods,
      o2 = e21.days,
      a2 = e21.shortDays,
      s2 = e21.months,
      c2 = e21.shortMonths,
      l2 = Ks(i2),
      u2 = Ys(i2),
      f2 = Ks(o2),
      d2 = Ys(o2),
      p2 = Ks(a2),
      h2 = Ys(a2),
      y2 = Ks(s2),
      m2 = Ys(s2),
      v2 = Ks(c2),
      g2 = Ys(c2),
      b2 = {
        a: function (e22) {
          return a2[e22.getDay()];
        },
        A: function (e22) {
          return o2[e22.getDay()];
        },
        b: function (e22) {
          return c2[e22.getMonth()];
        },
        B: function (e22) {
          return s2[e22.getMonth()];
        },
        c: null,
        d: gc,
        e: gc,
        f: Sc,
        g: Cc,
        G: Dc,
        H: bc,
        I: xc,
        j: wc,
        L: Oc,
        m: Ac,
        M: jc,
        p: function (e22) {
          return i2[+(e22.getHours() >= 12)];
        },
        q: function (e22) {
          return 1 + ~~(e22.getMonth() / 3);
        },
        Q: ol,
        s: al,
        S: Mc,
        u: Pc,
        U: kc,
        V: Tc,
        w: Nc,
        W: Ic,
        x: null,
        X: null,
        y: _c,
        Y: zc,
        Z: Rc,
        "%": il,
      },
      x2 = {
        a: function (e22) {
          return a2[e22.getUTCDay()];
        },
        A: function (e22) {
          return o2[e22.getUTCDay()];
        },
        b: function (e22) {
          return c2[e22.getUTCMonth()];
        },
        B: function (e22) {
          return s2[e22.getUTCMonth()];
        },
        c: null,
        d: Lc,
        e: Lc,
        f: Uc,
        g: el,
        G: nl,
        H: $c,
        I: Bc,
        j: qc,
        L: Fc,
        m: Wc,
        M: Vc,
        p: function (e22) {
          return i2[+(e22.getUTCHours() >= 12)];
        },
        q: function (e22) {
          return 1 + ~~(e22.getUTCMonth() / 3);
        },
        Q: ol,
        s: al,
        S: Qc,
        u: Gc,
        U: Hc,
        V: Kc,
        w: Yc,
        W: Zc,
        x: null,
        X: null,
        y: Jc,
        Y: tl,
        Z: rl,
        "%": il,
      },
      w2 = {
        a: function (e22, t3, n3) {
          var r3 = p2.exec(t3.slice(n3));
          return r3 ? ((e22.w = h2.get(r3[0].toLowerCase())), n3 + r3[0].length) : -1;
        },
        A: function (e22, t3, n3) {
          var r3 = f2.exec(t3.slice(n3));
          return r3 ? ((e22.w = d2.get(r3[0].toLowerCase())), n3 + r3[0].length) : -1;
        },
        b: function (e22, t3, n3) {
          var r3 = v2.exec(t3.slice(n3));
          return r3 ? ((e22.m = g2.get(r3[0].toLowerCase())), n3 + r3[0].length) : -1;
        },
        B: function (e22, t3, n3) {
          var r3 = y2.exec(t3.slice(n3));
          return r3 ? ((e22.m = m2.get(r3[0].toLowerCase())), n3 + r3[0].length) : -1;
        },
        c: function (e22, n3, r3) {
          return A2(e22, t2, n3, r3);
        },
        d: cc,
        e: cc,
        f: hc,
        g: ic,
        G: rc,
        H: uc,
        I: uc,
        j: lc,
        L: pc,
        m: sc,
        M: fc,
        p: function (e22, t3, n3) {
          var r3 = l2.exec(t3.slice(n3));
          return r3 ? ((e22.p = u2.get(r3[0].toLowerCase())), n3 + r3[0].length) : -1;
        },
        q: ac,
        Q: mc,
        s: vc,
        S: dc,
        u: Js,
        U: ec,
        V: tc,
        w: Zs,
        W: nc,
        x: function (e22, t3, r3) {
          return A2(e22, n2, t3, r3);
        },
        X: function (e22, t3, n3) {
          return A2(e22, r2, t3, n3);
        },
        y: ic,
        Y: rc,
        Z: oc,
        "%": yc,
      };
    function O2(e22, t3) {
      return function (n3) {
        var r3,
          i3,
          o3,
          a3 = [],
          s3 = -1,
          c3 = 0,
          l3 = e22.length;
        for (n3 instanceof Date || (n3 = /* @__PURE__ */ new Date(+n3)); ++s3 < l3; )
          37 === e22.charCodeAt(s3) &&
            (a3.push(e22.slice(c3, s3)),
            null != (i3 = Ws[(r3 = e22.charAt(++s3))])
              ? (r3 = e22.charAt(++s3))
              : (i3 = "e" === r3 ? " " : "0"),
            (o3 = t3[r3]) && (r3 = o3(n3, i3)),
            a3.push(r3),
            (c3 = s3 + 1));
        return a3.push(e22.slice(c3, s3)), a3.join("");
      };
    }
    function S2(e22, t3) {
      return function (n3) {
        var r3,
          i3,
          o3 = Bs(1900, void 0, 1);
        if (A2(o3, e22, (n3 += ""), 0) != n3.length) return null;
        if ("Q" in o3) return new Date(o3.Q);
        if ("s" in o3) return new Date(1e3 * o3.s + ("L" in o3 ? o3.L : 0));
        if (
          (t3 && !("Z" in o3) && (o3.Z = 0),
          "p" in o3 && (o3.H = (o3.H % 12) + 12 * o3.p),
          void 0 === o3.m && (o3.m = "q" in o3 ? o3.q : 0),
          "V" in o3)
        ) {
          if (o3.V < 1 || o3.V > 53) return null;
          "w" in o3 || (o3.w = 1),
            "Z" in o3
              ? ((i3 = (r3 = $s(Bs(o3.y, 0, 1))).getUTCDay()),
                (r3 = i3 > 4 || 0 === i3 ? Ss.ceil(r3) : Ss(r3)),
                (r3 = fs.offset(r3, 7 * (o3.V - 1))),
                (o3.y = r3.getUTCFullYear()),
                (o3.m = r3.getUTCMonth()),
                (o3.d = r3.getUTCDate() + ((o3.w + 6) % 7)))
              : ((i3 = (r3 = Ls(Bs(o3.y, 0, 1))).getDay()),
                (r3 = i3 > 4 || 0 === i3 ? ys.ceil(r3) : ys(r3)),
                (r3 = us.offset(r3, 7 * (o3.V - 1))),
                (o3.y = r3.getFullYear()),
                (o3.m = r3.getMonth()),
                (o3.d = r3.getDate() + ((o3.w + 6) % 7)));
        } else
          ("W" in o3 || "U" in o3) &&
            ("w" in o3 || (o3.w = "u" in o3 ? o3.u % 7 : "W" in o3 ? 1 : 0),
            (i3 = "Z" in o3 ? $s(Bs(o3.y, 0, 1)).getUTCDay() : Ls(Bs(o3.y, 0, 1)).getDay()),
            (o3.m = 0),
            (o3.d =
              "W" in o3
                ? ((o3.w + 6) % 7) + 7 * o3.W - ((i3 + 5) % 7)
                : o3.w + 7 * o3.U - ((i3 + 6) % 7)));
        return "Z" in o3 ? ((o3.H += (o3.Z / 100) | 0), (o3.M += o3.Z % 100), $s(o3)) : Ls(o3);
      };
    }
    function A2(e22, t3, n3, r3) {
      for (var i3, o3, a3 = 0, s3 = t3.length, c3 = n3.length; a3 < s3; ) {
        if (r3 >= c3) return -1;
        if (37 === (i3 = t3.charCodeAt(a3++))) {
          if (
            ((i3 = t3.charAt(a3++)),
            !(o3 = w2[i3 in Ws ? t3.charAt(a3++) : i3]) || (r3 = o3(e22, n3, r3)) < 0)
          )
            return -1;
        } else if (i3 != n3.charCodeAt(r3++)) return -1;
      }
      return r3;
    }
    return (
      (b2.x = O2(n2, b2)),
      (b2.X = O2(r2, b2)),
      (b2.c = O2(t2, b2)),
      (x2.x = O2(n2, x2)),
      (x2.X = O2(r2, x2)),
      (x2.c = O2(t2, x2)),
      {
        format: function (e22) {
          var t3 = O2((e22 += ""), b2);
          return (
            (t3.toString = function () {
              return e22;
            }),
            t3
          );
        },
        parse: function (e22) {
          var t3 = S2((e22 += ""), false);
          return (
            (t3.toString = function () {
              return e22;
            }),
            t3
          );
        },
        utcFormat: function (e22) {
          var t3 = O2((e22 += ""), x2);
          return (
            (t3.toString = function () {
              return e22;
            }),
            t3
          );
        },
        utcParse: function (e22) {
          var t3 = S2((e22 += ""), true);
          return (
            (t3.toString = function () {
              return e22;
            }),
            t3
          );
        },
      }
    );
  })(e20)),
    (Fs = qs.format),
    qs.parse,
    (Us = qs.utcFormat),
    qs.utcParse;
})({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});
const yl = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: oo,
      scaleDiverging: function e3() {
        var t2 = Ea(pl()(aa));
        return (
          (t2.copy = function () {
            return fl(t2, e3());
          }),
          no.apply(t2, arguments)
        );
      },
      scaleDivergingLog: function e4() {
        var t2 = La(pl()).domain([0.1, 1, 10]);
        return (
          (t2.copy = function () {
            return fl(t2, e4()).base(t2.base());
          }),
          no.apply(t2, arguments)
        );
      },
      scaleDivergingPow: hl,
      scaleDivergingSqrt: function () {
        return hl.apply(null, arguments).exponent(0.5);
      },
      scaleDivergingSymlog: function e5() {
        var t2 = qa(pl());
        return (
          (t2.copy = function () {
            return fl(t2, e5()).constant(t2.constant());
          }),
          no.apply(t2, arguments)
        );
      },
      scaleIdentity: function e6(t2) {
        var n2;
        function r2(e20) {
          return null == e20 || isNaN((e20 = +e20)) ? n2 : e20;
        }
        return (
          (r2.invert = r2),
          (r2.domain = r2.range =
            function (e20) {
              return arguments.length ? ((t2 = Array.from(e20, ia)), r2) : t2.slice();
            }),
          (r2.unknown = function (e20) {
            return arguments.length ? ((n2 = e20), r2) : n2;
          }),
          (r2.copy = function () {
            return e6(t2).unknown(n2);
          }),
          (t2 = arguments.length ? Array.from(t2, ia) : [0, 1]),
          Ea(r2)
        );
      },
      scaleImplicit: ro,
      scaleLinear: Ta,
      scaleLog: function e7() {
        const t2 = La(fa()).domain([1, 10]);
        return (t2.copy = () => ua(t2, e7()).base(t2.base())), to.apply(t2, arguments), t2;
      },
      scaleOrdinal: io,
      scalePoint: so,
      scalePow: Qa,
      scaleQuantile: function e8() {
        var t2,
          n2 = [],
          r2 = [],
          i2 = [];
        function o2() {
          var e20 = 0,
            t3 = Math.max(1, r2.length);
          for (i2 = new Array(t3 - 1); ++e20 < t3; ) i2[e20 - 1] = eo(n2, e20 / t3);
          return a2;
        }
        function a2(e20) {
          return null == e20 || isNaN((e20 = +e20)) ? t2 : r2[Li(i2, e20)];
        }
        return (
          (a2.invertExtent = function (e20) {
            var t3 = r2.indexOf(e20);
            return t3 < 0
              ? [NaN, NaN]
              : [t3 > 0 ? i2[t3 - 1] : n2[0], t3 < i2.length ? i2[t3] : n2[n2.length - 1]];
          }),
          (a2.domain = function (e20) {
            if (!arguments.length) return n2.slice();
            n2 = [];
            for (let t3 of e20) null == t3 || isNaN((t3 = +t3)) || n2.push(t3);
            return n2.sort(_i), o2();
          }),
          (a2.range = function (e20) {
            return arguments.length ? ((r2 = Array.from(e20)), o2()) : r2.slice();
          }),
          (a2.unknown = function (e20) {
            return arguments.length ? ((t2 = e20), a2) : t2;
          }),
          (a2.quantiles = function () {
            return i2.slice();
          }),
          (a2.copy = function () {
            return e8().domain(n2).range(r2).unknown(t2);
          }),
          to.apply(a2, arguments)
        );
      },
      scaleQuantize: function e9() {
        var t2,
          n2 = 0,
          r2 = 1,
          i2 = 1,
          o2 = [0.5],
          a2 = [0, 1];
        function s2(e20) {
          return null != e20 && e20 <= e20 ? a2[Li(o2, e20, 0, i2)] : t2;
        }
        function c2() {
          var e20 = -1;
          for (o2 = new Array(i2); ++e20 < i2; )
            o2[e20] = ((e20 + 1) * r2 - (e20 - i2) * n2) / (i2 + 1);
          return s2;
        }
        return (
          (s2.domain = function (e20) {
            return arguments.length ? (([n2, r2] = e20), (n2 = +n2), (r2 = +r2), c2()) : [n2, r2];
          }),
          (s2.range = function (e20) {
            return arguments.length ? ((i2 = (a2 = Array.from(e20)).length - 1), c2()) : a2.slice();
          }),
          (s2.invertExtent = function (e20) {
            var t3 = a2.indexOf(e20);
            return t3 < 0
              ? [NaN, NaN]
              : t3 < 1
                ? [n2, o2[0]]
                : t3 >= i2
                  ? [o2[i2 - 1], r2]
                  : [o2[t3 - 1], o2[t3]];
          }),
          (s2.unknown = function (e20) {
            return arguments.length ? ((t2 = e20), s2) : s2;
          }),
          (s2.thresholds = function () {
            return o2.slice();
          }),
          (s2.copy = function () {
            return e9().domain([n2, r2]).range(a2).unknown(t2);
          }),
          to.apply(Ea(s2), arguments)
        );
      },
      scaleRadial: function e10() {
        var t2,
          n2 = da(),
          r2 = [0, 1],
          i2 = false;
        function o2(e20) {
          var r3 = (function (e21) {
            return Math.sign(e21) * Math.sqrt(Math.abs(e21));
          })(n2(e20));
          return isNaN(r3) ? t2 : i2 ? Math.round(r3) : r3;
        }
        return (
          (o2.invert = function (e20) {
            return n2.invert(Ga(e20));
          }),
          (o2.domain = function (e20) {
            return arguments.length ? (n2.domain(e20), o2) : n2.domain();
          }),
          (o2.range = function (e20) {
            return arguments.length
              ? (n2.range((r2 = Array.from(e20, ia)).map(Ga)), o2)
              : r2.slice();
          }),
          (o2.rangeRound = function (e20) {
            return o2.range(e20).round(true);
          }),
          (o2.round = function (e20) {
            return arguments.length ? ((i2 = !!e20), o2) : i2;
          }),
          (o2.clamp = function (e20) {
            return arguments.length ? (n2.clamp(e20), o2) : n2.clamp();
          }),
          (o2.unknown = function (e20) {
            return arguments.length ? ((t2 = e20), o2) : t2;
          }),
          (o2.copy = function () {
            return e10(n2.domain(), r2).round(i2).clamp(n2.clamp()).unknown(t2);
          }),
          to.apply(o2, arguments),
          Ea(o2)
        );
      },
      scaleSequential: function e11() {
        var t2 = Ea(ul()(aa));
        return (
          (t2.copy = function () {
            return fl(t2, e11());
          }),
          no.apply(t2, arguments)
        );
      },
      scaleSequentialLog: function e12() {
        var t2 = La(ul()).domain([1, 10]);
        return (
          (t2.copy = function () {
            return fl(t2, e12()).base(t2.base());
          }),
          no.apply(t2, arguments)
        );
      },
      scaleSequentialPow: dl,
      scaleSequentialQuantile: function e13() {
        var t2 = [],
          n2 = aa;
        function r2(e20) {
          if (null != e20 && !isNaN((e20 = +e20)))
            return n2((Li(t2, e20, 1) - 1) / (t2.length - 1));
        }
        return (
          (r2.domain = function (e20) {
            if (!arguments.length) return t2.slice();
            t2 = [];
            for (let n3 of e20) null == n3 || isNaN((n3 = +n3)) || t2.push(n3);
            return t2.sort(_i), r2;
          }),
          (r2.interpolator = function (e20) {
            return arguments.length ? ((n2 = e20), r2) : n2;
          }),
          (r2.range = function () {
            return t2.map((e20, r3) => n2(r3 / (t2.length - 1)));
          }),
          (r2.quantiles = function (e20) {
            return Array.from({ length: e20 + 1 }, (n3, r3) =>
              (function (e21, t3) {
                if (
                  (n4 = (e21 = Float64Array.from(
                    (function* (e22) {
                      for (let t4 of e22) null != t4 && (t4 = +t4) >= t4 && (yield t4);
                    })(e21),
                  )).length) &&
                  !isNaN((t3 = +t3))
                ) {
                  if (t3 <= 0 || n4 < 2) return Yi(e21);
                  if (t3 >= 1) return Ki(e21);
                  var n4,
                    r4 = (n4 - 1) * t3,
                    i2 = Math.floor(r4),
                    o2 = Ki(Zi(e21, i2).subarray(0, i2 + 1));
                  return o2 + (Yi(e21.subarray(i2 + 1)) - o2) * (r4 - i2);
                }
              })(t2, r3 / e20),
            );
          }),
          (r2.copy = function () {
            return e13(n2).domain(t2);
          }),
          no.apply(r2, arguments)
        );
      },
      scaleSequentialSqrt: function () {
        return dl.apply(null, arguments).exponent(0.5);
      },
      scaleSequentialSymlog: function e14() {
        var t2 = qa(ul());
        return (
          (t2.copy = function () {
            return fl(t2, e14()).constant(t2.constant());
          }),
          no.apply(t2, arguments)
        );
      },
      scaleSqrt: function () {
        return Qa.apply(null, arguments).exponent(0.5);
      },
      scaleSymlog: function e15() {
        var t2 = qa(fa());
        return (
          (t2.copy = function () {
            return ua(t2, e15()).constant(t2.constant());
          }),
          to.apply(t2, arguments)
        );
      },
      scaleThreshold: function e16() {
        var t2,
          n2 = [0.5],
          r2 = [0, 1],
          i2 = 1;
        function o2(e20) {
          return null != e20 && e20 <= e20 ? r2[Li(n2, e20, 0, i2)] : t2;
        }
        return (
          (o2.domain = function (e20) {
            return arguments.length
              ? ((n2 = Array.from(e20)), (i2 = Math.min(n2.length, r2.length - 1)), o2)
              : n2.slice();
          }),
          (o2.range = function (e20) {
            return arguments.length
              ? ((r2 = Array.from(e20)), (i2 = Math.min(n2.length, r2.length - 1)), o2)
              : r2.slice();
          }),
          (o2.invertExtent = function (e20) {
            var t3 = r2.indexOf(e20);
            return [n2[t3 - 1], n2[t3]];
          }),
          (o2.unknown = function (e20) {
            return arguments.length ? ((t2 = e20), o2) : t2;
          }),
          (o2.copy = function () {
            return e16().domain(n2).range(r2).unknown(t2);
          }),
          to.apply(o2, arguments)
        );
      },
      scaleTime: function () {
        return to.apply(
          ll(Ds, Rs, Ns, Es, hs, us, cs, as, os, Fs).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      },
      scaleUtc: function () {
        return to.apply(
          ll(Cs, zs, Is, Ts, Os, fs, ls, ss, os, Us).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      },
      tickFormat: ka,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var ml, vl, gl, bl, xl, wl;
function Ol() {
  if (vl) return ml;
  vl = 1;
  var e20 = ah$1();
  return (
    (ml = function (t2, n2, r2) {
      for (var i2 = -1, o2 = t2.length; ++i2 < o2; ) {
        var a2 = t2[i2],
          s2 = n2(a2);
        if (null != s2 && (void 0 === c2 ? s2 == s2 && !e20(s2) : r2(s2, c2)))
          var c2 = s2,
            l2 = a2;
      }
      return l2;
    }),
    ml
  );
}
function Sl() {
  if (bl) return gl;
  return (
    (bl = 1),
    (gl = function (e20, t2) {
      return e20 > t2;
    })
  );
}
var Al = (function () {
  if (wl) return xl;
  wl = 1;
  var e20 = Ol(),
    t2 = Sl(),
    n2 = Jy$1();
  return (
    (xl = function (r2) {
      return r2 && r2.length ? e20(r2, n2, t2) : void 0;
    }),
    xl
  );
})();
const jl = Td$1(Al);
var Ml, Pl, kl, El;
function Tl() {
  if (Pl) return Ml;
  return (
    (Pl = 1),
    (Ml = function (e20, t2) {
      return e20 < t2;
    })
  );
}
var Nl = (function () {
  if (El) return kl;
  El = 1;
  var e20 = Ol(),
    t2 = Tl(),
    n2 = Jy$1();
  return (
    (kl = function (r2) {
      return r2 && r2.length ? e20(r2, n2, t2) : void 0;
    }),
    kl
  );
})();
const Il = Td$1(Nl);
var _l, Cl, zl, Dl;
var Rl = (function () {
  if (Dl) return zl;
  Dl = 1;
  var e20 = Xb$1(),
    t2 = (function () {
      if (Cl) return _l;
      Cl = 1;
      var e21 = Sh$1(),
        t3 = eb$1(),
        n2 = tw$1(),
        r2 = Zp$1();
      return (_l = function (i2, o2) {
        return (r2(i2) ? e21 : n2)(i2, t3(o2, 3));
      });
    })();
  return (zl = function (n2, r2) {
    return e20(t2(n2, r2), 1);
  });
})();
const Ll = Td$1(Rl);
var $l, Bl;
const ql = Td$1(
  (function () {
    if (Bl) return $l;
    Bl = 1;
    var e20 = Ky$1();
    return ($l = function (t2, n2) {
      return e20(t2, n2);
    });
  })(),
);
var Fl,
  Ul = 1e9,
  Wl = true,
  Vl = "[DecimalError] ",
  Ql = Vl + "Invalid argument: ",
  Gl = Vl + "Exponent out of range: ",
  Hl = Math.floor,
  Xl = Math.pow,
  Kl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Yl = 1e7,
  Zl = 9007199254740991,
  Jl = Hl(12867427506772845e-1),
  eu = {};
function tu(e20, t2) {
  var n2,
    r2,
    i2,
    o2,
    a2,
    s2,
    c2,
    l2,
    u2 = e20.constructor,
    f2 = u2.precision;
  if (!e20.s || !t2.s) return t2.s || (t2 = new u2(e20)), Wl ? fu(t2, f2) : t2;
  if (((c2 = e20.d), (l2 = t2.d), (a2 = e20.e), (i2 = t2.e), (c2 = c2.slice()), (o2 = a2 - i2))) {
    for (
      o2 < 0 ? ((r2 = c2), (o2 = -o2), (s2 = l2.length)) : ((r2 = l2), (i2 = a2), (s2 = c2.length)),
        o2 > (s2 = (a2 = Math.ceil(f2 / 7)) > s2 ? a2 + 1 : s2 + 1) && ((o2 = s2), (r2.length = 1)),
        r2.reverse();
      o2--;

    )
      r2.push(0);
    r2.reverse();
  }
  for (
    (s2 = c2.length) - (o2 = l2.length) < 0 && ((o2 = s2), (r2 = l2), (l2 = c2), (c2 = r2)), n2 = 0;
    o2;

  )
    (n2 = ((c2[--o2] = c2[o2] + l2[o2] + n2) / Yl) | 0), (c2[o2] %= Yl);
  for (n2 && (c2.unshift(n2), ++i2), s2 = c2.length; 0 == c2[--s2]; ) c2.pop();
  return (t2.d = c2), (t2.e = i2), Wl ? fu(t2, f2) : t2;
}
function nu(e20, t2, n2) {
  if (e20 !== ~~e20 || e20 < t2 || e20 > n2) throw Error(Ql + e20);
}
function ru(e20) {
  var t2,
    n2,
    r2,
    i2 = e20.length - 1,
    o2 = "",
    a2 = e20[0];
  if (i2 > 0) {
    for (o2 += a2, t2 = 1; t2 < i2; t2++)
      (n2 = 7 - (r2 = e20[t2] + "").length) && (o2 += cu(n2)), (o2 += r2);
    (n2 = 7 - (r2 = (a2 = e20[t2]) + "").length) && (o2 += cu(n2));
  } else if (0 === a2) return "0";
  for (; a2 % 10 == 0; ) a2 /= 10;
  return o2 + a2;
}
(eu.absoluteValue = eu.abs =
  function () {
    var e20 = new this.constructor(this);
    return e20.s && (e20.s = 1), e20;
  }),
  (eu.comparedTo = eu.cmp =
    function (e20) {
      var t2,
        n2,
        r2,
        i2,
        o2 = this;
      if (((e20 = new o2.constructor(e20)), o2.s !== e20.s)) return o2.s || -e20.s;
      if (o2.e !== e20.e) return (o2.e > e20.e) ^ (o2.s < 0) ? 1 : -1;
      for (t2 = 0, n2 = (r2 = o2.d.length) < (i2 = e20.d.length) ? r2 : i2; t2 < n2; ++t2)
        if (o2.d[t2] !== e20.d[t2]) return (o2.d[t2] > e20.d[t2]) ^ (o2.s < 0) ? 1 : -1;
      return r2 === i2 ? 0 : (r2 > i2) ^ (o2.s < 0) ? 1 : -1;
    }),
  (eu.decimalPlaces = eu.dp =
    function () {
      var e20 = this,
        t2 = e20.d.length - 1,
        n2 = 7 * (t2 - e20.e);
      if ((t2 = e20.d[t2])) for (; t2 % 10 == 0; t2 /= 10) n2--;
      return n2 < 0 ? 0 : n2;
    }),
  (eu.dividedBy = eu.div =
    function (e20) {
      return iu(this, new this.constructor(e20));
    }),
  (eu.dividedToIntegerBy = eu.idiv =
    function (e20) {
      var t2 = this.constructor;
      return fu(iu(this, new t2(e20), 0, 1), t2.precision);
    }),
  (eu.equals = eu.eq =
    function (e20) {
      return !this.cmp(e20);
    }),
  (eu.exponent = function () {
    return au(this);
  }),
  (eu.greaterThan = eu.gt =
    function (e20) {
      return this.cmp(e20) > 0;
    }),
  (eu.greaterThanOrEqualTo = eu.gte =
    function (e20) {
      return this.cmp(e20) >= 0;
    }),
  (eu.isInteger = eu.isint =
    function () {
      return this.e > this.d.length - 2;
    }),
  (eu.isNegative = eu.isneg =
    function () {
      return this.s < 0;
    }),
  (eu.isPositive = eu.ispos =
    function () {
      return this.s > 0;
    }),
  (eu.isZero = function () {
    return 0 === this.s;
  }),
  (eu.lessThan = eu.lt =
    function (e20) {
      return this.cmp(e20) < 0;
    }),
  (eu.lessThanOrEqualTo = eu.lte =
    function (e20) {
      return this.cmp(e20) < 1;
    }),
  (eu.logarithm = eu.log =
    function (e20) {
      var t2,
        n2 = this,
        r2 = n2.constructor,
        i2 = r2.precision,
        o2 = i2 + 5;
      if (void 0 === e20) e20 = new r2(10);
      else if ((e20 = new r2(e20)).s < 1 || e20.eq(Fl)) throw Error(Vl + "NaN");
      if (n2.s < 1) throw Error(Vl + (n2.s ? "NaN" : "-Infinity"));
      return n2.eq(Fl)
        ? new r2(0)
        : ((Wl = false), (t2 = iu(lu(n2, o2), lu(e20, o2), o2)), (Wl = true), fu(t2, i2));
    }),
  (eu.minus = eu.sub =
    function (e20) {
      var t2 = this;
      return (
        (e20 = new t2.constructor(e20)),
        t2.s == e20.s ? du(t2, e20) : tu(t2, ((e20.s = -e20.s), e20))
      );
    }),
  (eu.modulo = eu.mod =
    function (e20) {
      var t2,
        n2 = this,
        r2 = n2.constructor,
        i2 = r2.precision;
      if (!(e20 = new r2(e20)).s) throw Error(Vl + "NaN");
      return n2.s
        ? ((Wl = false), (t2 = iu(n2, e20, 0, 1).times(e20)), (Wl = true), n2.minus(t2))
        : fu(new r2(n2), i2);
    }),
  (eu.naturalExponential = eu.exp =
    function () {
      return ou(this);
    }),
  (eu.naturalLogarithm = eu.ln =
    function () {
      return lu(this);
    }),
  (eu.negated = eu.neg =
    function () {
      var e20 = new this.constructor(this);
      return (e20.s = -e20.s || 0), e20;
    }),
  (eu.plus = eu.add =
    function (e20) {
      var t2 = this;
      return (
        (e20 = new t2.constructor(e20)),
        t2.s == e20.s ? tu(t2, e20) : du(t2, ((e20.s = -e20.s), e20))
      );
    }),
  (eu.precision = eu.sd =
    function (e20) {
      var t2,
        n2,
        r2,
        i2 = this;
      if (void 0 !== e20 && e20 !== !!e20 && 1 !== e20 && 0 !== e20) throw Error(Ql + e20);
      if (((t2 = au(i2) + 1), (n2 = 7 * (r2 = i2.d.length - 1) + 1), (r2 = i2.d[r2]))) {
        for (; r2 % 10 == 0; r2 /= 10) n2--;
        for (r2 = i2.d[0]; r2 >= 10; r2 /= 10) n2++;
      }
      return e20 && t2 > n2 ? t2 : n2;
    }),
  (eu.squareRoot = eu.sqrt =
    function () {
      var e20,
        t2,
        n2,
        r2,
        i2,
        o2,
        a2,
        s2 = this,
        c2 = s2.constructor;
      if (s2.s < 1) {
        if (!s2.s) return new c2(0);
        throw Error(Vl + "NaN");
      }
      for (
        e20 = au(s2),
          Wl = false,
          0 == (i2 = Math.sqrt(+s2)) || i2 == 1 / 0
            ? (((t2 = ru(s2.d)).length + e20) % 2 == 0 && (t2 += "0"),
              (i2 = Math.sqrt(t2)),
              (e20 = Hl((e20 + 1) / 2) - (e20 < 0 || e20 % 2)),
              (r2 = new c2(
                (t2 =
                  i2 == 1 / 0
                    ? "5e" + e20
                    : (t2 = i2.toExponential()).slice(0, t2.indexOf("e") + 1) + e20),
              )))
            : (r2 = new c2(i2.toString())),
          i2 = a2 = (n2 = c2.precision) + 3;
        ;

      )
        if (
          ((r2 = (o2 = r2).plus(iu(s2, o2, a2 + 2)).times(0.5)),
          ru(o2.d).slice(0, a2) === (t2 = ru(r2.d)).slice(0, a2))
        ) {
          if (((t2 = t2.slice(a2 - 3, a2 + 1)), i2 == a2 && "4999" == t2)) {
            if ((fu(o2, n2 + 1, 0), o2.times(o2).eq(s2))) {
              r2 = o2;
              break;
            }
          } else if ("9999" != t2) break;
          a2 += 4;
        }
      return (Wl = true), fu(r2, n2);
    }),
  (eu.times = eu.mul =
    function (e20) {
      var t2,
        n2,
        r2,
        i2,
        o2,
        a2,
        s2,
        c2,
        l2,
        u2 = this,
        f2 = u2.constructor,
        d2 = u2.d,
        p2 = (e20 = new f2(e20)).d;
      if (!u2.s || !e20.s) return new f2(0);
      for (
        e20.s *= u2.s,
          n2 = u2.e + e20.e,
          (c2 = d2.length) < (l2 = p2.length) &&
            ((o2 = d2), (d2 = p2), (p2 = o2), (a2 = c2), (c2 = l2), (l2 = a2)),
          o2 = [],
          r2 = a2 = c2 + l2;
        r2--;

      )
        o2.push(0);
      for (r2 = l2; --r2 >= 0; ) {
        for (t2 = 0, i2 = c2 + r2; i2 > r2; )
          (s2 = o2[i2] + p2[r2] * d2[i2 - r2 - 1] + t2),
            (o2[i2--] = s2 % Yl | 0),
            (t2 = (s2 / Yl) | 0);
        o2[i2] = (o2[i2] + t2) % Yl | 0;
      }
      for (; !o2[--a2]; ) o2.pop();
      return t2 ? ++n2 : o2.shift(), (e20.d = o2), (e20.e = n2), Wl ? fu(e20, f2.precision) : e20;
    }),
  (eu.toDecimalPlaces = eu.todp =
    function (e20, t2) {
      var n2 = this,
        r2 = n2.constructor;
      return (
        (n2 = new r2(n2)),
        void 0 === e20
          ? n2
          : (nu(e20, 0, Ul),
            void 0 === t2 ? (t2 = r2.rounding) : nu(t2, 0, 8),
            fu(n2, e20 + au(n2) + 1, t2))
      );
    }),
  (eu.toExponential = function (e20, t2) {
    var n2,
      r2 = this,
      i2 = r2.constructor;
    return (
      void 0 === e20
        ? (n2 = pu(r2, true))
        : (nu(e20, 0, Ul),
          void 0 === t2 ? (t2 = i2.rounding) : nu(t2, 0, 8),
          (n2 = pu((r2 = fu(new i2(r2), e20 + 1, t2)), true, e20 + 1))),
      n2
    );
  }),
  (eu.toFixed = function (e20, t2) {
    var n2,
      r2,
      i2 = this,
      o2 = i2.constructor;
    return void 0 === e20
      ? pu(i2)
      : (nu(e20, 0, Ul),
        void 0 === t2 ? (t2 = o2.rounding) : nu(t2, 0, 8),
        (n2 = pu((r2 = fu(new o2(i2), e20 + au(i2) + 1, t2)).abs(), false, e20 + au(r2) + 1)),
        i2.isneg() && !i2.isZero() ? "-" + n2 : n2);
  }),
  (eu.toInteger = eu.toint =
    function () {
      var e20 = this,
        t2 = e20.constructor;
      return fu(new t2(e20), au(e20) + 1, t2.rounding);
    }),
  (eu.toNumber = function () {
    return +this;
  }),
  (eu.toPower = eu.pow =
    function (e20) {
      var t2,
        n2,
        r2,
        i2,
        o2,
        a2,
        s2 = this,
        c2 = s2.constructor,
        l2 = +(e20 = new c2(e20));
      if (!e20.s) return new c2(Fl);
      if (!(s2 = new c2(s2)).s) {
        if (e20.s < 1) throw Error(Vl + "Infinity");
        return s2;
      }
      if (s2.eq(Fl)) return s2;
      if (((r2 = c2.precision), e20.eq(Fl))) return fu(s2, r2);
      if (((a2 = (t2 = e20.e) >= (n2 = e20.d.length - 1)), (o2 = s2.s), a2)) {
        if ((n2 = l2 < 0 ? -l2 : l2) <= Zl) {
          for (
            i2 = new c2(Fl), t2 = Math.ceil(r2 / 7 + 4), Wl = false;
            n2 % 2 && hu((i2 = i2.times(s2)).d, t2), 0 !== (n2 = Hl(n2 / 2));

          )
            hu((s2 = s2.times(s2)).d, t2);
          return (Wl = true), e20.s < 0 ? new c2(Fl).div(i2) : fu(i2, r2);
        }
      } else if (o2 < 0) throw Error(Vl + "NaN");
      return (
        (o2 = o2 < 0 && 1 & e20.d[Math.max(t2, n2)] ? -1 : 1),
        (s2.s = 1),
        (Wl = false),
        (i2 = e20.times(lu(s2, r2 + 12))),
        (Wl = true),
        ((i2 = ou(i2)).s = o2),
        i2
      );
    }),
  (eu.toPrecision = function (e20, t2) {
    var n2,
      r2,
      i2 = this,
      o2 = i2.constructor;
    return (
      void 0 === e20
        ? (r2 = pu(i2, (n2 = au(i2)) <= o2.toExpNeg || n2 >= o2.toExpPos))
        : (nu(e20, 1, Ul),
          void 0 === t2 ? (t2 = o2.rounding) : nu(t2, 0, 8),
          (r2 = pu(
            (i2 = fu(new o2(i2), e20, t2)),
            e20 <= (n2 = au(i2)) || n2 <= o2.toExpNeg,
            e20,
          ))),
      r2
    );
  }),
  (eu.toSignificantDigits = eu.tosd =
    function (e20, t2) {
      var n2 = this.constructor;
      return (
        void 0 === e20
          ? ((e20 = n2.precision), (t2 = n2.rounding))
          : (nu(e20, 1, Ul), void 0 === t2 ? (t2 = n2.rounding) : nu(t2, 0, 8)),
        fu(new n2(this), e20, t2)
      );
    }),
  (eu.toString =
    eu.valueOf =
    eu.val =
    eu.toJSON =
    eu[Symbol.for("nodejs.util.inspect.custom")] =
      function () {
        var e20 = this,
          t2 = au(e20),
          n2 = e20.constructor;
        return pu(e20, t2 <= n2.toExpNeg || t2 >= n2.toExpPos);
      });
var iu = /* @__PURE__ */ (function () {
  function e20(e21, t3) {
    var n3,
      r2 = 0,
      i2 = e21.length;
    for (e21 = e21.slice(); i2--; )
      (n3 = e21[i2] * t3 + r2), (e21[i2] = n3 % Yl | 0), (r2 = (n3 / Yl) | 0);
    return r2 && e21.unshift(r2), e21;
  }
  function t2(e21, t3, n3, r2) {
    var i2, o2;
    if (n3 != r2) o2 = n3 > r2 ? 1 : -1;
    else
      for (i2 = o2 = 0; i2 < n3; i2++)
        if (e21[i2] != t3[i2]) {
          o2 = e21[i2] > t3[i2] ? 1 : -1;
          break;
        }
    return o2;
  }
  function n2(e21, t3, n3) {
    for (var r2 = 0; n3--; )
      (e21[n3] -= r2), (r2 = e21[n3] < t3[n3] ? 1 : 0), (e21[n3] = r2 * Yl + e21[n3] - t3[n3]);
    for (; !e21[0] && e21.length > 1; ) e21.shift();
  }
  return function (r2, i2, o2, a2) {
    var s2,
      c2,
      l2,
      u2,
      f2,
      d2,
      p2,
      h2,
      y2,
      m2,
      v2,
      g2,
      b2,
      x2,
      w2,
      O2,
      S2,
      A2,
      j2 = r2.constructor,
      M2 = r2.s == i2.s ? 1 : -1,
      P2 = r2.d,
      k2 = i2.d;
    if (!r2.s) return new j2(r2);
    if (!i2.s) throw Error(Vl + "Division by zero");
    for (
      c2 = r2.e - i2.e, S2 = k2.length, w2 = P2.length, h2 = (p2 = new j2(M2)).d = [], l2 = 0;
      k2[l2] == (P2[l2] || 0);

    )
      ++l2;
    if (
      (k2[l2] > (P2[l2] || 0) && --c2,
      (g2 = null == o2 ? (o2 = j2.precision) : a2 ? o2 + (au(r2) - au(i2)) + 1 : o2) < 0)
    )
      return new j2(0);
    if (((g2 = (g2 / 7 + 2) | 0), (l2 = 0), 1 == S2))
      for (u2 = 0, k2 = k2[0], g2++; (l2 < w2 || u2) && g2--; l2++)
        (b2 = u2 * Yl + (P2[l2] || 0)), (h2[l2] = (b2 / k2) | 0), (u2 = b2 % k2 | 0);
    else {
      for (
        (u2 = (Yl / (k2[0] + 1)) | 0) > 1 &&
          ((k2 = e20(k2, u2)), (P2 = e20(P2, u2)), (S2 = k2.length), (w2 = P2.length)),
          x2 = S2,
          m2 = (y2 = P2.slice(0, S2)).length;
        m2 < S2;

      )
        y2[m2++] = 0;
      (A2 = k2.slice()).unshift(0), (O2 = k2[0]), k2[1] >= Yl / 2 && ++O2;
      do {
        (u2 = 0),
          (s2 = t2(k2, y2, S2, m2)) < 0
            ? ((v2 = y2[0]),
              S2 != m2 && (v2 = v2 * Yl + (y2[1] || 0)),
              (u2 = (v2 / O2) | 0) > 1
                ? (u2 >= Yl && (u2 = Yl - 1),
                  1 == (s2 = t2((f2 = e20(k2, u2)), y2, (d2 = f2.length), (m2 = y2.length))) &&
                    (u2--, n2(f2, S2 < d2 ? A2 : k2, d2)))
                : (0 == u2 && (s2 = u2 = 1), (f2 = k2.slice())),
              (d2 = f2.length) < m2 && f2.unshift(0),
              n2(y2, f2, m2),
              -1 == s2 &&
                (s2 = t2(k2, y2, S2, (m2 = y2.length))) < 1 &&
                (u2++, n2(y2, S2 < m2 ? A2 : k2, m2)),
              (m2 = y2.length))
            : 0 === s2 && (u2++, (y2 = [0])),
          (h2[l2++] = u2),
          s2 && y2[0] ? (y2[m2++] = P2[x2] || 0) : ((y2 = [P2[x2]]), (m2 = 1));
      } while ((x2++ < w2 || void 0 !== y2[0]) && g2--);
    }
    return h2[0] || h2.shift(), (p2.e = c2), fu(p2, a2 ? o2 + au(p2) + 1 : o2);
  };
})();
function ou(e20, t2) {
  var n2,
    r2,
    i2,
    o2,
    a2,
    s2 = 0,
    c2 = 0,
    l2 = e20.constructor,
    u2 = l2.precision;
  if (au(e20) > 16) throw Error(Gl + au(e20));
  if (!e20.s) return new l2(Fl);
  for (Wl = false, a2 = u2, o2 = new l2(0.03125); e20.abs().gte(0.1); )
    (e20 = e20.times(o2)), (c2 += 5);
  for (
    a2 += ((Math.log(Xl(2, c2)) / Math.LN10) * 2 + 5) | 0,
      n2 = r2 = i2 = new l2(Fl),
      l2.precision = a2;
    ;

  ) {
    if (
      ((r2 = fu(r2.times(e20), a2)),
      (n2 = n2.times(++s2)),
      ru((o2 = i2.plus(iu(r2, n2, a2))).d).slice(0, a2) === ru(i2.d).slice(0, a2))
    ) {
      for (; c2--; ) i2 = fu(i2.times(i2), a2);
      return (l2.precision = u2), null == t2 ? ((Wl = true), fu(i2, u2)) : i2;
    }
    i2 = o2;
  }
}
function au(e20) {
  for (var t2 = 7 * e20.e, n2 = e20.d[0]; n2 >= 10; n2 /= 10) t2++;
  return t2;
}
function su(e20, t2, n2) {
  if (t2 > e20.LN10.sd())
    throw ((Wl = true), n2 && (e20.precision = n2), Error(Vl + "LN10 precision limit exceeded"));
  return fu(new e20(e20.LN10), t2);
}
function cu(e20) {
  for (var t2 = ""; e20--; ) t2 += "0";
  return t2;
}
function lu(e20, t2) {
  var n2,
    r2,
    i2,
    o2,
    a2,
    s2,
    c2,
    l2,
    u2,
    f2 = 1,
    d2 = e20,
    p2 = d2.d,
    h2 = d2.constructor,
    y2 = h2.precision;
  if (d2.s < 1) throw Error(Vl + (d2.s ? "NaN" : "-Infinity"));
  if (d2.eq(Fl)) return new h2(0);
  if ((null == t2 ? ((Wl = false), (l2 = y2)) : (l2 = t2), d2.eq(10)))
    return null == t2 && (Wl = true), su(h2, l2);
  if (
    ((l2 += 10),
    (h2.precision = l2),
    (r2 = (n2 = ru(p2)).charAt(0)),
    (o2 = au(d2)),
    !(Math.abs(o2) < 15e14))
  )
    return (
      (c2 = su(h2, l2 + 2, y2).times(o2 + "")),
      (d2 = lu(new h2(r2 + "." + n2.slice(1)), l2 - 10).plus(c2)),
      (h2.precision = y2),
      null == t2 ? ((Wl = true), fu(d2, y2)) : d2
    );
  for (; (r2 < 7 && 1 != r2) || (1 == r2 && n2.charAt(1) > 3); )
    (r2 = (n2 = ru((d2 = d2.times(e20)).d)).charAt(0)), f2++;
  for (
    o2 = au(d2),
      r2 > 1 ? ((d2 = new h2("0." + n2)), o2++) : (d2 = new h2(r2 + "." + n2.slice(1))),
      s2 = a2 = d2 = iu(d2.minus(Fl), d2.plus(Fl), l2),
      u2 = fu(d2.times(d2), l2),
      i2 = 3;
    ;

  ) {
    if (
      ((a2 = fu(a2.times(u2), l2)),
      ru((c2 = s2.plus(iu(a2, new h2(i2), l2))).d).slice(0, l2) === ru(s2.d).slice(0, l2))
    )
      return (
        (s2 = s2.times(2)),
        0 !== o2 && (s2 = s2.plus(su(h2, l2 + 2, y2).times(o2 + ""))),
        (s2 = iu(s2, new h2(f2), l2)),
        (h2.precision = y2),
        null == t2 ? ((Wl = true), fu(s2, y2)) : s2
      );
    (s2 = c2), (i2 += 2);
  }
}
function uu(e20, t2) {
  var n2, r2, i2;
  for (
    (n2 = t2.indexOf(".")) > -1 && (t2 = t2.replace(".", "")),
      (r2 = t2.search(/e/i)) > 0
        ? (n2 < 0 && (n2 = r2), (n2 += +t2.slice(r2 + 1)), (t2 = t2.substring(0, r2)))
        : n2 < 0 && (n2 = t2.length),
      r2 = 0;
    48 === t2.charCodeAt(r2);

  )
    ++r2;
  for (i2 = t2.length; 48 === t2.charCodeAt(i2 - 1); ) --i2;
  if ((t2 = t2.slice(r2, i2))) {
    if (
      ((i2 -= r2),
      (n2 = n2 - r2 - 1),
      (e20.e = Hl(n2 / 7)),
      (e20.d = []),
      (r2 = (n2 + 1) % 7),
      n2 < 0 && (r2 += 7),
      r2 < i2)
    ) {
      for (r2 && e20.d.push(+t2.slice(0, r2)), i2 -= 7; r2 < i2; )
        e20.d.push(+t2.slice(r2, (r2 += 7)));
      r2 = 7 - (t2 = t2.slice(r2)).length;
    } else r2 -= i2;
    for (; r2--; ) t2 += "0";
    if ((e20.d.push(+t2), Wl && (e20.e > Jl || e20.e < -Jl))) throw Error(Gl + n2);
  } else (e20.s = 0), (e20.e = 0), (e20.d = [0]);
  return e20;
}
function fu(e20, t2, n2) {
  var r2,
    i2,
    o2,
    a2,
    s2,
    c2,
    l2,
    u2,
    f2 = e20.d;
  for (a2 = 1, o2 = f2[0]; o2 >= 10; o2 /= 10) a2++;
  if ((r2 = t2 - a2) < 0) (r2 += 7), (i2 = t2), (l2 = f2[(u2 = 0)]);
  else {
    if ((u2 = Math.ceil((r2 + 1) / 7)) >= (o2 = f2.length)) return e20;
    for (l2 = o2 = f2[u2], a2 = 1; o2 >= 10; o2 /= 10) a2++;
    i2 = (r2 %= 7) - 7 + a2;
  }
  if (
    (void 0 !== n2 &&
      ((s2 = (l2 / (o2 = Xl(10, a2 - i2 - 1))) % 10 | 0),
      (c2 = t2 < 0 || void 0 !== f2[u2 + 1] || l2 % o2),
      (c2 =
        n2 < 4
          ? (s2 || c2) && (0 == n2 || n2 == (e20.s < 0 ? 3 : 2))
          : s2 > 5 ||
            (5 == s2 &&
              (4 == n2 ||
                c2 ||
                (6 == n2 && (r2 > 0 ? (i2 > 0 ? l2 / Xl(10, a2 - i2) : 0) : f2[u2 - 1]) % 10 & 1) ||
                n2 == (e20.s < 0 ? 8 : 7))))),
    t2 < 1 || !f2[0])
  )
    return (
      c2
        ? ((o2 = au(e20)),
          (f2.length = 1),
          (t2 = t2 - o2 - 1),
          (f2[0] = Xl(10, (7 - (t2 % 7)) % 7)),
          (e20.e = Hl(-t2 / 7) || 0))
        : ((f2.length = 1), (f2[0] = e20.e = e20.s = 0)),
      e20
    );
  if (
    (0 == r2
      ? ((f2.length = u2), (o2 = 1), u2--)
      : ((f2.length = u2 + 1),
        (o2 = Xl(10, 7 - r2)),
        (f2[u2] = i2 > 0 ? ((l2 / Xl(10, a2 - i2)) % Xl(10, i2) | 0) * o2 : 0)),
    c2)
  )
    for (;;) {
      if (0 == u2) {
        (f2[0] += o2) == Yl && ((f2[0] = 1), ++e20.e);
        break;
      }
      if (((f2[u2] += o2), f2[u2] != Yl)) break;
      (f2[u2--] = 0), (o2 = 1);
    }
  for (r2 = f2.length; 0 === f2[--r2]; ) f2.pop();
  if (Wl && (e20.e > Jl || e20.e < -Jl)) throw Error(Gl + au(e20));
  return e20;
}
function du(e20, t2) {
  var n2,
    r2,
    i2,
    o2,
    a2,
    s2,
    c2,
    l2,
    u2,
    f2,
    d2 = e20.constructor,
    p2 = d2.precision;
  if (!e20.s || !t2.s) return t2.s ? (t2.s = -t2.s) : (t2 = new d2(e20)), Wl ? fu(t2, p2) : t2;
  if (((c2 = e20.d), (f2 = t2.d), (r2 = t2.e), (l2 = e20.e), (c2 = c2.slice()), (a2 = l2 - r2))) {
    for (
      (u2 = a2 < 0)
        ? ((n2 = c2), (a2 = -a2), (s2 = f2.length))
        : ((n2 = f2), (r2 = l2), (s2 = c2.length)),
        a2 > (i2 = Math.max(Math.ceil(p2 / 7), s2) + 2) && ((a2 = i2), (n2.length = 1)),
        n2.reverse(),
        i2 = a2;
      i2--;

    )
      n2.push(0);
    n2.reverse();
  } else {
    for ((u2 = (i2 = c2.length) < (s2 = f2.length)) && (s2 = i2), i2 = 0; i2 < s2; i2++)
      if (c2[i2] != f2[i2]) {
        u2 = c2[i2] < f2[i2];
        break;
      }
    a2 = 0;
  }
  for (
    u2 && ((n2 = c2), (c2 = f2), (f2 = n2), (t2.s = -t2.s)), s2 = c2.length, i2 = f2.length - s2;
    i2 > 0;
    --i2
  )
    c2[s2++] = 0;
  for (i2 = f2.length; i2 > a2; ) {
    if (c2[--i2] < f2[i2]) {
      for (o2 = i2; o2 && 0 === c2[--o2]; ) c2[o2] = Yl - 1;
      --c2[o2], (c2[i2] += Yl);
    }
    c2[i2] -= f2[i2];
  }
  for (; 0 === c2[--s2]; ) c2.pop();
  for (; 0 === c2[0]; c2.shift()) --r2;
  return c2[0] ? ((t2.d = c2), (t2.e = r2), Wl ? fu(t2, p2) : t2) : new d2(0);
}
function pu(e20, t2, n2) {
  var r2,
    i2 = au(e20),
    o2 = ru(e20.d),
    a2 = o2.length;
  return (
    t2
      ? (n2 && (r2 = n2 - a2) > 0
          ? (o2 = o2.charAt(0) + "." + o2.slice(1) + cu(r2))
          : a2 > 1 && (o2 = o2.charAt(0) + "." + o2.slice(1)),
        (o2 = o2 + (i2 < 0 ? "e" : "e+") + i2))
      : i2 < 0
        ? ((o2 = "0." + cu(-i2 - 1) + o2), n2 && (r2 = n2 - a2) > 0 && (o2 += cu(r2)))
        : i2 >= a2
          ? ((o2 += cu(i2 + 1 - a2)), n2 && (r2 = n2 - i2 - 1) > 0 && (o2 = o2 + "." + cu(r2)))
          : ((r2 = i2 + 1) < a2 && (o2 = o2.slice(0, r2) + "." + o2.slice(r2)),
            n2 && (r2 = n2 - a2) > 0 && (i2 + 1 === a2 && (o2 += "."), (o2 += cu(r2)))),
    e20.s < 0 ? "-" + o2 : o2
  );
}
function hu(e20, t2) {
  if (e20.length > t2) return (e20.length = t2), true;
}
function yu(e20) {
  if (!e20 || "object" != typeof e20) throw Error(Vl + "Object expected");
  var t2,
    n2,
    r2,
    i2 = ["precision", 1, Ul, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t2 = 0; t2 < i2.length; t2 += 3)
    if (void 0 !== (r2 = e20[(n2 = i2[t2])])) {
      if (!(Hl(r2) === r2 && r2 >= i2[t2 + 1] && r2 <= i2[t2 + 2]))
        throw Error(Ql + n2 + ": " + r2);
      this[n2] = r2;
    }
  if (void 0 !== (r2 = e20[(n2 = "LN10")])) {
    if (r2 != Math.LN10) throw Error(Ql + n2 + ": " + r2);
    this[n2] = new this(r2);
  }
  return this;
}
var mu = (function e17(t2) {
  var n2, r2, i2;
  function o2(e20) {
    var t3 = this;
    if (!(t3 instanceof o2)) return new o2(e20);
    if (((t3.constructor = o2), e20 instanceof o2))
      return (t3.s = e20.s), (t3.e = e20.e), void (t3.d = (e20 = e20.d) ? e20.slice() : e20);
    if ("number" == typeof e20) {
      if (0 * e20 != 0) throw Error(Ql + e20);
      if (e20 > 0) t3.s = 1;
      else {
        if (!(e20 < 0)) return (t3.s = 0), (t3.e = 0), void (t3.d = [0]);
        (e20 = -e20), (t3.s = -1);
      }
      return e20 === ~~e20 && e20 < 1e7
        ? ((t3.e = 0), void (t3.d = [e20]))
        : uu(t3, e20.toString());
    }
    if ("string" != typeof e20) throw Error(Ql + e20);
    if (
      (45 === e20.charCodeAt(0) ? ((e20 = e20.slice(1)), (t3.s = -1)) : (t3.s = 1), !Kl.test(e20))
    )
      throw Error(Ql + e20);
    uu(t3, e20);
  }
  if (
    ((o2.prototype = eu),
    (o2.ROUND_UP = 0),
    (o2.ROUND_DOWN = 1),
    (o2.ROUND_CEIL = 2),
    (o2.ROUND_FLOOR = 3),
    (o2.ROUND_HALF_UP = 4),
    (o2.ROUND_HALF_DOWN = 5),
    (o2.ROUND_HALF_EVEN = 6),
    (o2.ROUND_HALF_CEIL = 7),
    (o2.ROUND_HALF_FLOOR = 8),
    (o2.clone = e17),
    (o2.config = o2.set = yu),
    void 0 === t2 && (t2 = {}),
    t2)
  )
    for (i2 = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], n2 = 0; n2 < i2.length; )
      t2.hasOwnProperty((r2 = i2[n2++])) || (t2[r2] = this[r2]);
  return o2.config(t2), o2;
})({
  precision: 20,
  rounding: 4,
  toExpNeg: -7,
  toExpPos: 21,
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
});
Fl = new mu(1);
const vu = mu;
function gu(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return bu(e21);
    })(e20) ||
    (function (e21) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e21)) return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return bu(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return bu(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function bu(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
var xu = function (e20) {
    return e20;
  },
  wu = {},
  Ou = function (e20) {
    return e20 === wu;
  },
  Su = function (e20) {
    return function t2() {
      return 0 === arguments.length ||
        (1 === arguments.length && Ou(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t2
        : e20.apply(void 0, arguments);
    };
  },
  Au = function e18(t2, n2) {
    return 1 === t2
      ? n2
      : Su(function () {
          for (var r2 = arguments.length, i2 = new Array(r2), o2 = 0; o2 < r2; o2++)
            i2[o2] = arguments[o2];
          var a2 = i2.filter(function (e20) {
            return e20 !== wu;
          }).length;
          return a2 >= t2
            ? n2.apply(void 0, i2)
            : e18(
                t2 - a2,
                Su(function () {
                  for (var e20 = arguments.length, t3 = new Array(e20), r3 = 0; r3 < e20; r3++)
                    t3[r3] = arguments[r3];
                  var o3 = i2.map(function (e21) {
                    return Ou(e21) ? t3.shift() : e21;
                  });
                  return n2.apply(void 0, gu(o3).concat(t3));
                }),
              );
        });
  },
  ju = function (e20) {
    return Au(e20.length, e20);
  },
  Mu = function (e20, t2) {
    for (var n2 = [], r2 = e20; r2 < t2; ++r2) n2[r2 - e20] = r2;
    return n2;
  },
  Pu = ju(function (e20, t2) {
    return Array.isArray(t2)
      ? t2.map(e20)
      : Object.keys(t2)
          .map(function (e21) {
            return t2[e21];
          })
          .map(e20);
  }),
  ku = function (e20) {
    return Array.isArray(e20) ? e20.reverse() : e20.split("").reverse.join("");
  },
  Eu = function (e20) {
    var t2 = null,
      n2 = null;
    return function () {
      for (var r2 = arguments.length, i2 = new Array(r2), o2 = 0; o2 < r2; o2++)
        i2[o2] = arguments[o2];
      return t2 &&
        i2.every(function (e21, n3) {
          return e21 === t2[n3];
        })
        ? n2
        : ((t2 = i2), (n2 = e20.apply(void 0, i2)));
    };
  };
var Tu = ju(function (e20, t2, n2) {
    var r2 = +e20;
    return r2 + n2 * (+t2 - r2);
  }),
  Nu = ju(function (e20, t2, n2) {
    var r2 = t2 - +e20;
    return (n2 - e20) / (r2 = r2 || 1 / 0);
  }),
  Iu = ju(function (e20, t2, n2) {
    var r2 = t2 - +e20;
    return (r2 = r2 || 1 / 0), Math.max(0, Math.min(1, (n2 - e20) / r2));
  });
const _u = {
  rangeStep: function (e20, t2, n2) {
    for (var r2 = new vu(e20), i2 = 0, o2 = []; r2.lt(t2) && i2 < 1e5; )
      o2.push(r2.toNumber()), (r2 = r2.add(n2)), i2++;
    return o2;
  },
  getDigitCount: function (e20) {
    return 0 === e20 ? 1 : Math.floor(new vu(e20).abs().log(10).toNumber()) + 1;
  },
  interpolateNumber: Tu,
  uninterpolateNumber: Nu,
  uninterpolateTruncation: Iu,
};
function Cu(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return Ru(e21);
    })(e20) ||
    (function (e21) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e21)) return Array.from(e21);
    })(e20) ||
    Du(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function zu(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e21))) return;
      var n2 = [],
        r2 = true,
        i2 = false,
        o2 = void 0;
      try {
        for (
          var a2, s2 = e21[Symbol.iterator]();
          !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !t3 || n2.length !== t3);
          r2 = true
        );
      } catch (c2) {
        (i2 = true), (o2 = c2);
      } finally {
        try {
          r2 || null == s2.return || s2.return();
        } finally {
          if (i2) throw o2;
        }
      }
      return n2;
    })(e20, t2) ||
    Du(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Du(e20, t2) {
  if (e20) {
    if ("string" == typeof e20) return Ru(e20, t2);
    var n2 = Object.prototype.toString.call(e20).slice(8, -1);
    return (
      "Object" === n2 && e20.constructor && (n2 = e20.constructor.name),
      "Map" === n2 || "Set" === n2
        ? Array.from(e20)
        : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)
          ? Ru(e20, t2)
          : void 0
    );
  }
}
function Ru(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function Lu(e20) {
  var t2 = zu(e20, 2),
    n2 = t2[0],
    r2 = t2[1],
    i2 = n2,
    o2 = r2;
  return n2 > r2 && ((i2 = r2), (o2 = n2)), [i2, o2];
}
function $u(e20, t2, n2) {
  if (e20.lte(0)) return new vu(0);
  var r2 = _u.getDigitCount(e20.toNumber()),
    i2 = new vu(10).pow(r2),
    o2 = e20.div(i2),
    a2 = 1 !== r2 ? 0.05 : 0.1,
    s2 = new vu(Math.ceil(o2.div(a2).toNumber())).add(n2).mul(a2).mul(i2);
  return t2 ? s2 : new vu(Math.ceil(s2));
}
function Bu(e20, t2, n2) {
  var r2 = 1,
    i2 = new vu(e20);
  if (!i2.isint() && n2) {
    var o2 = Math.abs(e20);
    o2 < 1
      ? ((r2 = new vu(10).pow(_u.getDigitCount(e20) - 1)),
        (i2 = new vu(Math.floor(i2.div(r2).toNumber())).mul(r2)))
      : o2 > 1 && (i2 = new vu(Math.floor(e20)));
  } else 0 === e20 ? (i2 = new vu(Math.floor((t2 - 1) / 2))) : n2 || (i2 = new vu(Math.floor(e20)));
  var a2 = Math.floor((t2 - 1) / 2),
    s2 = (function () {
      for (var e21 = arguments.length, t3 = new Array(e21), n3 = 0; n3 < e21; n3++)
        t3[n3] = arguments[n3];
      if (!t3.length) return xu;
      var r3 = t3.reverse(),
        i3 = r3[0],
        o3 = r3.slice(1);
      return function () {
        return o3.reduce(
          function (e22, t4) {
            return t4(e22);
          },
          i3.apply(void 0, arguments),
        );
      };
    })(
      Pu(function (e21) {
        return i2.add(new vu(e21 - a2).mul(r2)).toNumber();
      }),
      Mu,
    );
  return s2(0, t2);
}
function qu(e20, t2, n2, r2) {
  var i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  if (!Number.isFinite((t2 - e20) / (n2 - 1)))
    return { step: new vu(0), tickMin: new vu(0), tickMax: new vu(0) };
  var o2,
    a2 = $u(new vu(t2).sub(e20).div(n2 - 1), r2, i2);
  o2 = e20 <= 0 && t2 >= 0 ? new vu(0) : (o2 = new vu(e20).add(t2).div(2)).sub(new vu(o2).mod(a2));
  var s2 = Math.ceil(o2.sub(e20).div(a2).toNumber()),
    c2 = Math.ceil(new vu(t2).sub(o2).div(a2).toNumber()),
    l2 = s2 + c2 + 1;
  return l2 > n2
    ? qu(e20, t2, n2, r2, i2 + 1)
    : (l2 < n2 && ((c2 = t2 > 0 ? c2 + (n2 - l2) : c2), (s2 = t2 > 0 ? s2 : s2 + (n2 - l2))),
      { step: a2, tickMin: o2.sub(new vu(s2).mul(a2)), tickMax: o2.add(new vu(c2).mul(a2)) });
}
var Fu = Eu(function (e20) {
    var t2 = zu(e20, 2),
      n2 = t2[0],
      r2 = t2[1],
      i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
      o2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      a2 = Math.max(i2, 2),
      s2 = zu(Lu([n2, r2]), 2),
      c2 = s2[0],
      l2 = s2[1];
    if (c2 === -1 / 0 || l2 === 1 / 0) {
      var u2 =
        l2 === 1 / 0
          ? [c2].concat(
              Cu(
                Mu(0, i2 - 1).map(function () {
                  return 1 / 0;
                }),
              ),
            )
          : [].concat(
              Cu(
                Mu(0, i2 - 1).map(function () {
                  return -1 / 0;
                }),
              ),
              [l2],
            );
      return n2 > r2 ? ku(u2) : u2;
    }
    if (c2 === l2) return Bu(c2, i2, o2);
    var f2 = qu(c2, l2, a2, o2),
      d2 = f2.step,
      p2 = f2.tickMin,
      h2 = f2.tickMax,
      y2 = _u.rangeStep(p2, h2.add(new vu(0.1).mul(d2)), d2);
    return n2 > r2 ? ku(y2) : y2;
  }),
  Uu = Eu(function (e20, t2) {
    var n2 = zu(e20, 2),
      r2 = n2[0],
      i2 = n2[1],
      o2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
      a2 = zu(Lu([r2, i2]), 2),
      s2 = a2[0],
      c2 = a2[1];
    if (s2 === -1 / 0 || c2 === 1 / 0) return [r2, i2];
    if (s2 === c2) return [s2];
    var l2 = Math.max(t2, 2),
      u2 = $u(new vu(c2).sub(s2).div(l2 - 1), o2, 0),
      f2 = [].concat(Cu(_u.rangeStep(new vu(s2), new vu(c2).sub(new vu(0.99).mul(u2)), u2)), [c2]);
    return r2 > i2 ? ku(f2) : f2;
  }),
  Wu = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Vu(e20) {
  return (
    (Vu =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Vu(e20)
  );
}
function Qu() {
  return (
    (Qu = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Qu.apply(this, arguments)
  );
}
function Gu(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return Hu(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Hu(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Hu(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function Xu(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Ku(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, nf(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Yu(e20, t2, n2) {
  return (
    (t2 = Ju(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Vu(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Zu() ? Reflect.construct(t2, n2 || [], Ju(e20).constructor) : t2.apply(e20, n2))
  );
}
function Zu() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Zu = function () {
    return !!e20;
  })();
}
function Ju(e20) {
  return (
    (Ju = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Ju(e20)
  );
}
function ef(e20, t2) {
  return (
    (ef = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    ef(e20, t2)
  );
}
function tf(e20, t2, n2) {
  return (
    (t2 = nf(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function nf(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Vu(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Vu(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Vu(t2) ? t2 : t2 + "";
}
var rf = (function () {
  function e20() {
    return (
      (function (e21, t2) {
        if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      Yu(this, e20, arguments)
    );
  }
  return (
    (function (e21, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t2 && t2.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t2 && ef(e21, t2);
    })(e20, g__default.Component),
    Ku(e20, [
      {
        key: "render",
        value: function () {
          var e21 = this.props,
            t2 = e21.offset,
            n2 = e21.layout,
            i2 = e21.width,
            o2 = e21.dataKey,
            a2 = e21.data,
            s2 = e21.dataPointFormatter,
            c2 = e21.xAxis,
            l2 = e21.yAxis,
            u2 = Xu(e21, Wu),
            f2 = Ng$1(u2, false);
          "x" === this.props.direction && "number" !== c2.type && wt(false);
          var d2 = a2.map(function (e22) {
            var r2 = s2(e22, o2),
              a3 = r2.x,
              u3 = r2.y,
              d3 = r2.value,
              p2 = r2.errorVal;
            if (!p2) return null;
            var h2,
              y2,
              m2 = [];
            if (Array.isArray(p2)) {
              var v2 = Gu(p2, 2);
              (h2 = v2[0]), (y2 = v2[1]);
            } else h2 = y2 = p2;
            if ("vertical" === n2) {
              var g2 = c2.scale,
                b2 = u3 + t2,
                x2 = b2 + i2,
                w2 = b2 - i2,
                O2 = g2(d3 - h2),
                S2 = g2(d3 + y2);
              m2.push({ x1: S2, y1: x2, x2: S2, y2: w2 }),
                m2.push({ x1: O2, y1: b2, x2: S2, y2: b2 }),
                m2.push({ x1: O2, y1: x2, x2: O2, y2: w2 });
            } else if ("horizontal" === n2) {
              var A2 = l2.scale,
                j2 = a3 + t2,
                M2 = j2 - i2,
                P2 = j2 + i2,
                k2 = A2(d3 - h2),
                E2 = A2(d3 + y2);
              m2.push({ x1: M2, y1: E2, x2: P2, y2: E2 }),
                m2.push({ x1: j2, y1: k2, x2: j2, y2: E2 }),
                m2.push({ x1: M2, y1: k2, x2: P2, y2: k2 });
            }
            return g__default.createElement(
              nn,
              Qu(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    m2.map(function (e23) {
                      return ""
                        .concat(e23.x1, "-")
                        .concat(e23.x2, "-")
                        .concat(e23.y1, "-")
                        .concat(e23.y2);
                    }),
                  ),
                },
                f2,
              ),
              m2.map(function (e23) {
                return g__default.createElement(
                  "line",
                  Qu({}, e23, {
                    key: "line-"
                      .concat(e23.x1, "-")
                      .concat(e23.x2, "-")
                      .concat(e23.y1, "-")
                      .concat(e23.y2),
                  }),
                );
              }),
            );
          });
          return g__default.createElement(nn, { className: "recharts-errorBars" }, d2);
        },
      },
    ])
  );
})();
function of(e20) {
  return (
    (of =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    of(e20)
  );
}
function af(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function sf(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? af(Object(n2), true).forEach(function (t3) {
          cf(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : af(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function cf(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != of(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != of(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == of(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
tf(rf, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
}),
  tf(rf, "displayName", "ErrorBar");
var lf = function (e20) {
  var t2 = e20.children,
    n2 = e20.formattedGraphicalItems,
    r2 = e20.legendWidth,
    i2 = e20.legendContent,
    o2 = Pm$1(t2, Hr);
  if (!o2) return null;
  var a2,
    s2 = Hr.defaultProps,
    c2 = void 0 !== s2 ? sf(sf({}, s2), o2.props) : {};
  return (
    (a2 =
      o2.props && o2.props.payload
        ? o2.props && o2.props.payload
        : "children" === i2
          ? (n2 || []).reduce(function (e21, t3) {
              var n3 = t3.item,
                r3 = t3.props,
                i3 = r3.sectors || r3.data || [];
              return e21.concat(
                i3.map(function (e22) {
                  return {
                    type: o2.props.iconType || n3.props.legendType,
                    value: e22.name,
                    color: e22.fill,
                    payload: e22,
                  };
                }),
              );
            }, [])
          : (n2 || []).map(function (e21) {
              var t3 = e21.item,
                n3 = t3.type.defaultProps,
                r3 = void 0 !== n3 ? sf(sf({}, n3), t3.props) : {},
                i3 = r3.dataKey,
                o3 = r3.name,
                a3 = r3.legendType;
              return {
                inactive: r3.hide,
                dataKey: i3,
                type: c2.iconType || a3 || "square",
                color: gf(t3),
                value: o3 || i3,
                payload: r3,
              };
            })),
    sf(sf(sf({}, c2), Hr.getWithHeight(o2, r2)), {}, { payload: a2, item: o2 })
  );
};
function uf(e20) {
  return (
    (uf =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    uf(e20)
  );
}
function ff(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return df(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return df(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return df(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function df(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function pf(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function hf(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? pf(Object(n2), true).forEach(function (t3) {
          yf(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : pf(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function yf(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != uf(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != uf(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == uf(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function mf(e20, t2, n2) {
  return Th$1(e20) || Th$1(t2) ? n2 : nm$1(t2) ? Ah$1(e20, t2, n2) : zh$1(t2) ? t2(e20) : n2;
}
function vf(e20, t2, n2, r2) {
  var i2 = Ll(e20, function (e21) {
    return mf(e21, t2);
  });
  if ("number" === n2) {
    var o2 = i2.filter(function (e21) {
      return em$1(e21) || parseFloat(e21);
    });
    return o2.length ? [Il(o2), jl(o2)] : [1 / 0, -1 / 0];
  }
  return (
    r2
      ? i2.filter(function (e21) {
          return !Th$1(e21);
        })
      : i2
  ).map(function (e21) {
    return nm$1(e21) || e21 instanceof Date ? e21 : "";
  });
}
var gf = function (e20) {
    var t2,
      n2,
      r2 = e20.type.displayName,
      i2 =
        null !== (t2 = e20.type) && void 0 !== t2 && t2.defaultProps
          ? hf(hf({}, e20.type.defaultProps), e20.props)
          : e20.props,
      o2 = i2.stroke,
      a2 = i2.fill;
    switch (r2) {
      case "Line":
        n2 = o2;
        break;
      case "Area":
      case "Radar":
        n2 = o2 && "none" !== o2 ? o2 : a2;
        break;
      default:
        n2 = a2;
    }
    return n2;
  },
  bf = function (e20, t2, n2, r2, i2) {
    var o2 = t2.props.children,
      a2 = Am$1(o2, rf).filter(function (e21) {
        return (function (e22, t3, n3) {
          return (
            !!Th$1(t3) ||
            ("horizontal" === e22
              ? "yAxis" === t3
              : "vertical" === e22 || "x" === n3
                ? "xAxis" === t3
                : "y" !== n3 || "yAxis" === t3)
          );
        })(r2, i2, e21.props.direction);
      });
    if (a2 && a2.length) {
      var s2 = a2.map(function (e21) {
        return e21.props.dataKey;
      });
      return e20.reduce(
        function (e21, t3) {
          var r3 = mf(t3, n2);
          if (Th$1(r3)) return e21;
          var i3 = Array.isArray(r3) ? [Il(r3), jl(r3)] : [r3, r3],
            o3 = s2.reduce(
              function (e22, n3) {
                var r4 = mf(t3, n3, 0),
                  o4 = i3[0] - Math.abs(Array.isArray(r4) ? r4[0] : r4),
                  a3 = i3[1] + Math.abs(Array.isArray(r4) ? r4[1] : r4);
                return [Math.min(o4, e22[0]), Math.max(a3, e22[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(o3[0], e21[0]), Math.max(o3[1], e21[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  xf = function (e20, t2, n2, r2, i2) {
    var o2 = t2.map(function (t3) {
      var o3 = t3.props.dataKey;
      return ("number" === n2 && o3 && bf(e20, t3, o3, r2)) || vf(e20, o3, n2, i2);
    });
    if ("number" === n2)
      return o2.reduce(
        function (e21, t3) {
          return [Math.min(e21[0], t3[0]), Math.max(e21[1], t3[1])];
        },
        [1 / 0, -1 / 0],
      );
    var a2 = {};
    return o2.reduce(function (e21, t3) {
      for (var n3 = 0, r3 = t3.length; n3 < r3; n3++)
        a2[t3[n3]] || ((a2[t3[n3]] = true), e21.push(t3[n3]));
      return e21;
    }, []);
  },
  wf = function (e20, t2) {
    return (
      ("horizontal" === e20 && "xAxis" === t2) ||
      ("vertical" === e20 && "yAxis" === t2) ||
      ("centric" === e20 && "angleAxis" === t2) ||
      ("radial" === e20 && "radiusAxis" === t2)
    );
  },
  Of = function (e20, t2, n2, r2) {
    if (r2)
      return e20.map(function (e21) {
        return e21.coordinate;
      });
    var i2,
      o2,
      a2 = e20.map(function (e21) {
        return (
          e21.coordinate === t2 && (i2 = true), e21.coordinate === n2 && (o2 = true), e21.coordinate
        );
      });
    return i2 || a2.push(t2), o2 || a2.push(n2), a2;
  },
  Sf = function (e20, t2, n2) {
    if (!e20) return null;
    var r2 = e20.scale,
      i2 = e20.duplicateDomain,
      o2 = e20.type,
      a2 = e20.range,
      s2 = "scaleBand" === e20.realScaleType ? r2.bandwidth() / 2 : 2,
      c2 = (t2 || n2) && "category" === o2 && r2.bandwidth ? r2.bandwidth() / s2 : 0;
    return (
      (c2 =
        "angleAxis" === e20.axisType && (null == a2 ? void 0 : a2.length) >= 2
          ? 2 * Jh$1(a2[0] - a2[1]) * c2
          : c2),
      t2 && (e20.ticks || e20.niceTicks)
        ? (e20.ticks || e20.niceTicks)
            .map(function (e21) {
              var t3 = i2 ? i2.indexOf(e21) : e21;
              return { coordinate: r2(t3) + c2, value: e21, offset: c2 };
            })
            .filter(function (e21) {
              return !Qh$1(e21.coordinate);
            })
        : e20.isCategorical && e20.categoricalDomain
          ? e20.categoricalDomain.map(function (e21, t3) {
              return { coordinate: r2(e21) + c2, value: e21, index: t3, offset: c2 };
            })
          : r2.ticks && !n2
            ? r2.ticks(e20.tickCount).map(function (e21) {
                return { coordinate: r2(e21) + c2, value: e21, offset: c2 };
              })
            : r2.domain().map(function (e21, t3) {
                return {
                  coordinate: r2(e21) + c2,
                  value: i2 ? i2[e21] : e21,
                  index: t3,
                  offset: c2,
                };
              })
    );
  },
  Af = /* @__PURE__ */ new WeakMap(),
  jf = function (e20, t2) {
    if ("function" != typeof t2) return e20;
    Af.has(e20) || Af.set(e20, /* @__PURE__ */ new WeakMap());
    var n2 = Af.get(e20);
    if (n2.has(t2)) return n2.get(t2);
    var r2 = function () {
      e20.apply(void 0, arguments), t2.apply(void 0, arguments);
    };
    return n2.set(t2, r2), r2;
  },
  Mf = function (e20, t2, n2) {
    var r2 = e20.scale,
      i2 = e20.type,
      o2 = e20.layout,
      s2 = e20.axisType;
    if ("auto" === r2)
      return "radial" === o2 && "radiusAxis" === s2
        ? { scale: oo(), realScaleType: "band" }
        : "radial" === o2 && "angleAxis" === s2
          ? { scale: Ta(), realScaleType: "linear" }
          : "category" === i2 &&
              t2 &&
              (t2.indexOf("LineChart") >= 0 ||
                t2.indexOf("AreaChart") >= 0 ||
                (t2.indexOf("ComposedChart") >= 0 && !n2))
            ? { scale: so(), realScaleType: "point" }
            : "category" === i2
              ? { scale: oo(), realScaleType: "band" }
              : { scale: Ta(), realScaleType: "linear" };
    if (Dh$1(r2)) {
      var c2 = "scale".concat(cn(r2));
      return { scale: (yl[c2] || so)(), realScaleType: yl[c2] ? c2 : "point" };
    }
    return zh$1(r2) ? { scale: r2 } : { scale: so(), realScaleType: "point" };
  },
  Pf = 1e-4,
  kf = function (e20) {
    var t2 = e20.domain();
    if (t2 && !(t2.length <= 2)) {
      var n2 = t2.length,
        r2 = e20.range(),
        i2 = Math.min(r2[0], r2[1]) - Pf,
        o2 = Math.max(r2[0], r2[1]) + Pf,
        a2 = e20(t2[0]),
        s2 = e20(t2[n2 - 1]);
      (a2 < i2 || a2 > o2 || s2 < i2 || s2 > o2) && e20.domain([t2[0], t2[n2 - 1]]);
    }
  },
  Ef = {
    sign: function (e20) {
      var t2 = e20.length;
      if (!(t2 <= 0))
        for (var n2 = 0, r2 = e20[0].length; n2 < r2; ++n2)
          for (var i2 = 0, o2 = 0, a2 = 0; a2 < t2; ++a2) {
            var s2 = Qh$1(e20[a2][n2][1]) ? e20[a2][n2][0] : e20[a2][n2][1];
            s2 >= 0
              ? ((e20[a2][n2][0] = i2), (e20[a2][n2][1] = i2 + s2), (i2 = e20[a2][n2][1]))
              : ((e20[a2][n2][0] = o2), (e20[a2][n2][1] = o2 + s2), (o2 = e20[a2][n2][1]));
          }
    },
    expand: function (e20, t2) {
      if ((r2 = e20.length) > 0) {
        for (var n2, r2, i2, o2 = 0, a2 = e20[0].length; o2 < a2; ++o2) {
          for (i2 = n2 = 0; n2 < r2; ++n2) i2 += e20[n2][o2][1] || 0;
          if (i2) for (n2 = 0; n2 < r2; ++n2) e20[n2][o2][1] /= i2;
        }
        lr(e20, t2);
      }
    },
    none: lr,
    silhouette: function (e20, t2) {
      if ((n2 = e20.length) > 0) {
        for (var n2, r2 = 0, i2 = e20[t2[0]], o2 = i2.length; r2 < o2; ++r2) {
          for (var a2 = 0, s2 = 0; a2 < n2; ++a2) s2 += e20[a2][r2][1] || 0;
          i2[r2][1] += i2[r2][0] = -s2 / 2;
        }
        lr(e20, t2);
      }
    },
    wiggle: function (e20, t2) {
      if ((i2 = e20.length) > 0 && (r2 = (n2 = e20[t2[0]]).length) > 0) {
        for (var n2, r2, i2, o2 = 0, a2 = 1; a2 < r2; ++a2) {
          for (var s2 = 0, c2 = 0, l2 = 0; s2 < i2; ++s2) {
            for (
              var u2 = e20[t2[s2]],
                f2 = u2[a2][1] || 0,
                d2 = (f2 - (u2[a2 - 1][1] || 0)) / 2,
                p2 = 0;
              p2 < s2;
              ++p2
            ) {
              var h2 = e20[t2[p2]];
              d2 += (h2[a2][1] || 0) - (h2[a2 - 1][1] || 0);
            }
            (c2 += f2), (l2 += d2 * f2);
          }
          (n2[a2 - 1][1] += n2[a2 - 1][0] = o2), c2 && (o2 -= l2 / c2);
        }
        (n2[a2 - 1][1] += n2[a2 - 1][0] = o2), lr(e20, t2);
      }
    },
    positive: function (e20) {
      var t2 = e20.length;
      if (!(t2 <= 0))
        for (var n2 = 0, r2 = e20[0].length; n2 < r2; ++n2)
          for (var i2 = 0, o2 = 0; o2 < t2; ++o2) {
            var a2 = Qh$1(e20[o2][n2][1]) ? e20[o2][n2][0] : e20[o2][n2][1];
            a2 >= 0
              ? ((e20[o2][n2][0] = i2), (e20[o2][n2][1] = i2 + a2), (i2 = e20[o2][n2][1]))
              : ((e20[o2][n2][0] = 0), (e20[o2][n2][1] = 0));
          }
    },
  },
  Tf = function (e20, t2, n2) {
    var r2 = t2.map(function (e21) {
        return e21.props.dataKey;
      }),
      i2 = Ef[n2],
      o2 = (function () {
        var e21 = ln([]),
          t3 = ur,
          n3 = lr,
          r3 = fr;
        function i3(i4) {
          var o3,
            a2,
            s2 = Array.from(e21.apply(this, arguments), dr),
            c2 = s2.length,
            l2 = -1;
          for (const e22 of i4)
            for (o3 = 0, ++l2; o3 < c2; ++o3)
              (s2[o3][l2] = [0, +r3(e22, s2[o3].key, l2, i4)]).data = e22;
          for (o3 = 0, a2 = On(t3(s2)); o3 < c2; ++o3) s2[a2[o3]].index = o3;
          return n3(s2, a2), s2;
        }
        return (
          (i3.keys = function (t4) {
            return arguments.length
              ? ((e21 = "function" == typeof t4 ? t4 : ln(Array.from(t4))), i3)
              : e21;
          }),
          (i3.value = function (e22) {
            return arguments.length ? ((r3 = "function" == typeof e22 ? e22 : ln(+e22)), i3) : r3;
          }),
          (i3.order = function (e22) {
            return arguments.length
              ? ((t3 = null == e22 ? ur : "function" == typeof e22 ? e22 : ln(Array.from(e22))), i3)
              : t3;
          }),
          (i3.offset = function (e22) {
            return arguments.length ? ((n3 = null == e22 ? lr : e22), i3) : n3;
          }),
          i3
        );
      })()
        .keys(r2)
        .value(function (e21, t3) {
          return +mf(e21, t3, 0);
        })
        .order(ur)
        .offset(i2);
    return o2(e20);
  },
  Nf = function (e20, t2) {
    var n2 = t2.realScaleType,
      r2 = t2.type,
      i2 = t2.tickCount,
      o2 = t2.originalDomain,
      a2 = t2.allowDecimals,
      s2 = n2 || t2.scale;
    if ("auto" !== s2 && "linear" !== s2) return null;
    if (i2 && "number" === r2 && o2 && ("auto" === o2[0] || "auto" === o2[1])) {
      var c2 = e20.domain();
      if (!c2.length) return null;
      var l2 = Fu(c2, i2, a2);
      return e20.domain([Il(l2), jl(l2)]), { niceTicks: l2 };
    }
    if (i2 && "number" === r2) {
      var u2 = e20.domain();
      return { niceTicks: Uu(u2, i2, a2) };
    }
    return null;
  };
function If(e20) {
  var t2 = e20.axis,
    n2 = e20.ticks,
    r2 = e20.bandSize,
    i2 = e20.entry,
    o2 = e20.index,
    a2 = e20.dataKey;
  if ("category" === t2.type) {
    if (!t2.allowDuplicatedCategory && t2.dataKey && !Th$1(i2[t2.dataKey])) {
      var s2 = cm$1(n2, "value", i2[t2.dataKey]);
      if (s2) return s2.coordinate + r2 / 2;
    }
    return n2[o2] ? n2[o2].coordinate + r2 / 2 : null;
  }
  var c2 = mf(i2, Th$1(a2) ? t2.dataKey : a2);
  return Th$1(c2) ? null : t2.scale(c2);
}
var _f = function (e20) {
    var t2 = e20.axis,
      n2 = e20.ticks,
      r2 = e20.offset,
      i2 = e20.bandSize,
      o2 = e20.entry,
      a2 = e20.index;
    if ("category" === t2.type) return n2[a2] ? n2[a2].coordinate + r2 : null;
    var s2 = mf(o2, t2.dataKey, t2.domain[a2]);
    return Th$1(s2) ? null : t2.scale(s2) - i2 / 2 + r2;
  },
  Cf = function (e20, t2, n2) {
    return Object.keys(e20)
      .reduce(
        function (r2, i2) {
          var o2 = e20[i2].stackedData.reduce(
            function (e21, r3) {
              var i3 = r3.slice(t2, n2 + 1).reduce(
                function (e22, t3) {
                  return [
                    Il(t3.concat([e22[0]]).filter(em$1)),
                    jl(t3.concat([e22[1]]).filter(em$1)),
                  ];
                },
                [1 / 0, -1 / 0],
              );
              return [Math.min(e21[0], i3[0]), Math.max(e21[1], i3[1])];
            },
            [1 / 0, -1 / 0],
          );
          return [Math.min(o2[0], r2[0]), Math.max(o2[1], r2[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (e21) {
        return e21 === 1 / 0 || e21 === -1 / 0 ? 0 : e21;
      });
  },
  zf = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Df = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Rf = function (e20, t2, n2) {
    if (zh$1(e20)) return e20(t2, n2);
    if (!Array.isArray(e20)) return t2;
    var r2 = [];
    if (em$1(e20[0])) r2[0] = n2 ? e20[0] : Math.min(e20[0], t2[0]);
    else if (zf.test(e20[0])) {
      var i2 = +zf.exec(e20[0])[1];
      r2[0] = t2[0] - i2;
    } else zh$1(e20[0]) ? (r2[0] = e20[0](t2[0])) : (r2[0] = t2[0]);
    if (em$1(e20[1])) r2[1] = n2 ? e20[1] : Math.max(e20[1], t2[1]);
    else if (Df.test(e20[1])) {
      var o2 = +Df.exec(e20[1])[1];
      r2[1] = t2[1] + o2;
    } else zh$1(e20[1]) ? (r2[1] = e20[1](t2[1])) : (r2[1] = t2[1]);
    return r2;
  },
  Lf = function (e20, t2, n2) {
    if (e20 && e20.scale && e20.scale.bandwidth) {
      var r2 = e20.scale.bandwidth();
      if (!n2 || r2 > 0) return r2;
    }
    if (e20 && t2 && t2.length >= 2) {
      for (
        var i2 = uw$1(t2, function (e21) {
            return e21.coordinate;
          }),
          o2 = 1 / 0,
          a2 = 1,
          s2 = i2.length;
        a2 < s2;
        a2++
      ) {
        var c2 = i2[a2],
          l2 = i2[a2 - 1];
        o2 = Math.min((c2.coordinate || 0) - (l2.coordinate || 0), o2);
      }
      return o2 === 1 / 0 ? 0 : o2;
    }
    return n2 ? void 0 : 0;
  },
  $f = function (e20, t2, n2) {
    return e20 && e20.length ? (ql(e20, Ah$1(n2, "type.defaultProps.domain")) ? t2 : e20) : t2;
  },
  Bf = function (e20, t2) {
    var n2 = e20.type.defaultProps ? hf(hf({}, e20.type.defaultProps), e20.props) : e20.props,
      i2 = n2.dataKey,
      o2 = n2.name,
      a2 = n2.unit,
      s2 = n2.formatter,
      c2 = n2.tooltipType,
      l2 = n2.chartType,
      u2 = n2.hide;
    return hf(
      hf({}, Ng$1(e20, false)),
      {},
      {
        dataKey: i2,
        unit: a2,
        formatter: s2,
        name: o2 || i2,
        color: gf(e20),
        value: mf(t2, i2),
        type: c2,
        payload: t2,
        chartType: l2,
        hide: u2,
      },
    );
  };
function qf(e20) {
  return (
    (qf =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    qf(e20)
  );
}
function Ff(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Uf(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Ff(Object(n2), true).forEach(function (t3) {
          Wf(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Ff(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Wf(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != qf(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != qf(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == qf(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Vf(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return Qf(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Qf(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Qf(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
var Gf = Math.PI / 180,
  Hf = function (e20) {
    return (180 * e20) / Math.PI;
  },
  Xf = function (e20, t2, n2, r2) {
    return { x: e20 + Math.cos(-Gf * r2) * n2, y: t2 + Math.sin(-Gf * r2) * n2 };
  },
  Kf = function (e20, t2) {
    var n2 =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(e20 - (n2.left || 0) - (n2.right || 0)),
        Math.abs(t2 - (n2.top || 0) - (n2.bottom || 0)),
      ) / 2
    );
  },
  Yf = function (e20, t2, n2, r2, i2) {
    var o2 = e20.width,
      a2 = e20.height,
      s2 = e20.startAngle,
      c2 = e20.endAngle,
      l2 = am$1(e20.cx, o2, o2 / 2),
      u2 = am$1(e20.cy, a2, a2 / 2),
      f2 = Kf(o2, a2, n2),
      d2 = am$1(e20.innerRadius, f2, 0),
      h2 = am$1(e20.outerRadius, f2, 0.8 * f2);
    return Object.keys(t2).reduce(function (e21, n3) {
      var o3,
        a3 = t2[n3],
        f3 = a3.domain,
        y2 = a3.reversed;
      if (Th$1(a3.range))
        "angleAxis" === r2 ? (o3 = [s2, c2]) : "radiusAxis" === r2 && (o3 = [d2, h2]),
          y2 && (o3 = [o3[1], o3[0]]);
      else {
        var m2 = Vf((o3 = a3.range), 2);
        (s2 = m2[0]), (c2 = m2[1]);
      }
      var v2 = Mf(a3, i2),
        g2 = v2.realScaleType,
        b2 = v2.scale;
      b2.domain(f3).range(o3), kf(b2);
      var x2 = Nf(b2, Uf(Uf({}, a3), {}, { realScaleType: g2 })),
        w2 = Uf(
          Uf(Uf({}, a3), x2),
          {},
          {
            range: o3,
            radius: h2,
            realScaleType: g2,
            scale: b2,
            cx: l2,
            cy: u2,
            innerRadius: d2,
            outerRadius: h2,
            startAngle: s2,
            endAngle: c2,
          },
        );
      return Uf(Uf({}, e21), {}, Wf({}, n3, w2));
    }, {});
  },
  Zf = function (e20, t2) {
    var n2 = e20.x,
      r2 = e20.y,
      i2 = t2.cx,
      o2 = t2.cy,
      a2 = (function (e21, t3) {
        var n3 = e21.x,
          r3 = e21.y,
          i3 = t3.x,
          o3 = t3.y;
        return Math.sqrt(Math.pow(n3 - i3, 2) + Math.pow(r3 - o3, 2));
      })({ x: n2, y: r2 }, { x: i2, y: o2 });
    if (a2 <= 0) return { radius: a2 };
    var s2 = (n2 - i2) / a2,
      c2 = Math.acos(s2);
    return r2 > o2 && (c2 = 2 * Math.PI - c2), { radius: a2, angle: Hf(c2), angleInRadian: c2 };
  },
  Jf = function (e20, t2) {
    var n2 = t2.startAngle,
      r2 = t2.endAngle,
      i2 = Math.floor(n2 / 360),
      o2 = Math.floor(r2 / 360);
    return e20 + 360 * Math.min(i2, o2);
  },
  ed = function (e20, t2) {
    var n2 = e20.x,
      r2 = e20.y,
      i2 = Zf({ x: n2, y: r2 }, t2),
      o2 = i2.radius,
      a2 = i2.angle,
      s2 = t2.innerRadius,
      c2 = t2.outerRadius;
    if (o2 < s2 || o2 > c2) return false;
    if (0 === o2) return true;
    var l2,
      u2 = (function (e21) {
        var t3 = e21.startAngle,
          n3 = e21.endAngle,
          r3 = Math.floor(t3 / 360),
          i3 = Math.floor(n3 / 360),
          o3 = Math.min(r3, i3);
        return { startAngle: t3 - 360 * o3, endAngle: n3 - 360 * o3 };
      })(t2),
      f2 = u2.startAngle,
      d2 = u2.endAngle,
      p2 = a2;
    if (f2 <= d2) {
      for (; p2 > d2; ) p2 -= 360;
      for (; p2 < f2; ) p2 += 360;
      l2 = p2 >= f2 && p2 <= d2;
    } else {
      for (; p2 > f2; ) p2 -= 360;
      for (; p2 < d2; ) p2 += 360;
      l2 = p2 >= d2 && p2 <= f2;
    }
    return l2 ? Uf(Uf({}, t2), {}, { radius: o2, angle: Jf(p2, t2) }) : null;
  },
  td = function (e20) {
    return isValidElement(e20) || zh$1(e20) || "boolean" == typeof e20 ? "" : e20.className;
  };
function nd(e20) {
  return (
    (nd =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    nd(e20)
  );
}
var rd = ["offset"];
function id(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return od(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return od(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return od(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function od(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function ad(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function sd(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function cd(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? sd(Object(n2), true).forEach(function (t3) {
          ld(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : sd(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function ld(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != nd(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != nd(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == nd(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function ud() {
  return (
    (ud = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    ud.apply(this, arguments)
  );
}
var fd = function (e20, t2, n2) {
  var r2,
    i2,
    o2 = e20.position,
    a2 = e20.viewBox,
    s2 = e20.offset,
    c2 = e20.className,
    l2 = a2,
    u2 = l2.cx,
    f2 = l2.cy,
    d2 = l2.innerRadius,
    h2 = l2.outerRadius,
    y2 = l2.startAngle,
    m2 = l2.endAngle,
    v2 = l2.clockWise,
    g2 = (d2 + h2) / 2,
    b2 = (function (e21, t3) {
      return Jh$1(t3 - e21) * Math.min(Math.abs(t3 - e21), 360);
    })(y2, m2),
    x2 = b2 >= 0 ? 1 : -1;
  "insideStart" === o2
    ? ((r2 = y2 + x2 * s2), (i2 = v2))
    : "insideEnd" === o2
      ? ((r2 = m2 - x2 * s2), (i2 = !v2))
      : "end" === o2 && ((r2 = m2 + x2 * s2), (i2 = v2)),
    (i2 = b2 <= 0 ? i2 : !i2);
  var w2 = Xf(u2, f2, g2, r2),
    O2 = Xf(u2, f2, g2, r2 + 359 * (i2 ? 1 : -1)),
    S2 = "M"
      .concat(w2.x, ",")
      .concat(w2.y, "\n    A")
      .concat(g2, ",")
      .concat(g2, ",0,1,")
      .concat(i2 ? 0 : 1, ",\n    ")
      .concat(O2.x, ",")
      .concat(O2.y),
    A2 = Th$1(e20.id) ? om$1("recharts-radial-line-") : e20.id;
  return g__default.createElement(
    "text",
    ud({}, n2, { dominantBaseline: "central", className: Nt("recharts-radial-bar-label", c2) }),
    g__default.createElement("defs", null, g__default.createElement("path", { id: A2, d: S2 })),
    g__default.createElement("textPath", { xlinkHref: "#".concat(A2) }, t2),
  );
};
function dd(e20) {
  var t2,
    n2 = e20.offset,
    i2 = cd({ offset: void 0 === n2 ? 5 : n2 }, ad(e20, rd)),
    o2 = i2.viewBox,
    s2 = i2.position,
    c2 = i2.value,
    u2 = i2.children,
    f2 = i2.content,
    d2 = i2.className,
    h2 = void 0 === d2 ? "" : d2,
    y2 = i2.textBreakAll;
  if (!o2 || (Th$1(c2) && Th$1(u2) && !isValidElement(f2) && !zh$1(f2))) return null;
  if (isValidElement(f2)) return cloneElement(f2, i2);
  if (zh$1(f2)) {
    if (isValidElement((t2 = createElement(f2, i2)))) return t2;
  } else
    t2 = (function (e21) {
      var t3 = e21.value,
        n3 = e21.formatter,
        r2 = Th$1(e21.children) ? t3 : e21.children;
      return zh$1(n3) ? n3(r2) : r2;
    })(i2);
  var m2 = (function (e21) {
      return "cx" in e21 && em$1(e21.cx);
    })(o2),
    v2 = Ng$1(i2, true);
  if (m2 && ("insideStart" === s2 || "insideEnd" === s2 || "end" === s2)) return fd(i2, t2, v2);
  var g2 = m2
    ? (function (e21) {
        var t3 = e21.viewBox,
          n3 = e21.offset,
          r2 = e21.position,
          i3 = t3,
          o3 = i3.cx,
          a2 = i3.cy,
          s3 = i3.innerRadius,
          c3 = i3.outerRadius,
          l2 = (i3.startAngle + i3.endAngle) / 2;
        if ("outside" === r2) {
          var u3 = Xf(o3, a2, c3 + n3, l2),
            f3 = u3.x;
          return {
            x: f3,
            y: u3.y,
            textAnchor: f3 >= o3 ? "start" : "end",
            verticalAnchor: "middle",
          };
        }
        if ("center" === r2)
          return { x: o3, y: a2, textAnchor: "middle", verticalAnchor: "middle" };
        if ("centerTop" === r2)
          return { x: o3, y: a2, textAnchor: "middle", verticalAnchor: "start" };
        if ("centerBottom" === r2)
          return { x: o3, y: a2, textAnchor: "middle", verticalAnchor: "end" };
        var d3 = Xf(o3, a2, (s3 + c3) / 2, l2);
        return { x: d3.x, y: d3.y, textAnchor: "middle", verticalAnchor: "middle" };
      })(i2)
    : (function (e21) {
        var t3 = e21.viewBox,
          n3 = e21.parentViewBox,
          r2 = e21.offset,
          i3 = e21.position,
          o3 = t3,
          a2 = o3.x,
          s3 = o3.y,
          c3 = o3.width,
          u3 = o3.height,
          f3 = u3 >= 0 ? 1 : -1,
          d3 = f3 * r2,
          p2 = f3 > 0 ? "end" : "start",
          h3 = f3 > 0 ? "start" : "end",
          y3 = c3 >= 0 ? 1 : -1,
          m3 = y3 * r2,
          v3 = y3 > 0 ? "end" : "start",
          g3 = y3 > 0 ? "start" : "end";
        if ("top" === i3)
          return cd(
            cd({}, { x: a2 + c3 / 2, y: s3 - f3 * r2, textAnchor: "middle", verticalAnchor: p2 }),
            n3 ? { height: Math.max(s3 - n3.y, 0), width: c3 } : {},
          );
        if ("bottom" === i3)
          return cd(
            cd({}, { x: a2 + c3 / 2, y: s3 + u3 + d3, textAnchor: "middle", verticalAnchor: h3 }),
            n3 ? { height: Math.max(n3.y + n3.height - (s3 + u3), 0), width: c3 } : {},
          );
        if ("left" === i3) {
          var b2 = { x: a2 - m3, y: s3 + u3 / 2, textAnchor: v3, verticalAnchor: "middle" };
          return cd(cd({}, b2), n3 ? { width: Math.max(b2.x - n3.x, 0), height: u3 } : {});
        }
        if ("right" === i3) {
          var x2 = { x: a2 + c3 + m3, y: s3 + u3 / 2, textAnchor: g3, verticalAnchor: "middle" };
          return cd(
            cd({}, x2),
            n3 ? { width: Math.max(n3.x + n3.width - x2.x, 0), height: u3 } : {},
          );
        }
        var w2 = n3 ? { width: c3, height: u3 } : {};
        return "insideLeft" === i3
          ? cd({ x: a2 + m3, y: s3 + u3 / 2, textAnchor: g3, verticalAnchor: "middle" }, w2)
          : "insideRight" === i3
            ? cd({ x: a2 + c3 - m3, y: s3 + u3 / 2, textAnchor: v3, verticalAnchor: "middle" }, w2)
            : "insideTop" === i3
              ? cd({ x: a2 + c3 / 2, y: s3 + d3, textAnchor: "middle", verticalAnchor: h3 }, w2)
              : "insideBottom" === i3
                ? cd(
                    { x: a2 + c3 / 2, y: s3 + u3 - d3, textAnchor: "middle", verticalAnchor: p2 },
                    w2,
                  )
                : "insideTopLeft" === i3
                  ? cd({ x: a2 + m3, y: s3 + d3, textAnchor: g3, verticalAnchor: h3 }, w2)
                  : "insideTopRight" === i3
                    ? cd({ x: a2 + c3 - m3, y: s3 + d3, textAnchor: v3, verticalAnchor: h3 }, w2)
                    : "insideBottomLeft" === i3
                      ? cd({ x: a2 + m3, y: s3 + u3 - d3, textAnchor: g3, verticalAnchor: p2 }, w2)
                      : "insideBottomRight" === i3
                        ? cd(
                            {
                              x: a2 + c3 - m3,
                              y: s3 + u3 - d3,
                              textAnchor: v3,
                              verticalAnchor: p2,
                            },
                            w2,
                          )
                        : Mh$1(i3) && (em$1(i3.x) || Zh$1(i3.x)) && (em$1(i3.y) || Zh$1(i3.y))
                          ? cd(
                              {
                                x: a2 + am$1(i3.x, c3),
                                y: s3 + am$1(i3.y, u3),
                                textAnchor: "end",
                                verticalAnchor: "end",
                              },
                              w2,
                            )
                          : cd(
                              {
                                x: a2 + c3 / 2,
                                y: s3 + u3 / 2,
                                textAnchor: "middle",
                                verticalAnchor: "middle",
                              },
                              w2,
                            );
      })(i2);
  return g__default.createElement(
    Ii,
    ud({ className: Nt("recharts-label", h2) }, v2, g2, { breakAll: y2 }),
    t2,
  );
}
dd.displayName = "Label";
var pd,
  hd,
  yd = function (e20) {
    var t2 = e20.cx,
      n2 = e20.cy,
      r2 = e20.angle,
      i2 = e20.startAngle,
      o2 = e20.endAngle,
      a2 = e20.r,
      s2 = e20.radius,
      c2 = e20.innerRadius,
      u2 = e20.outerRadius,
      f2 = e20.x,
      d2 = e20.y,
      p2 = e20.top,
      h2 = e20.left,
      y2 = e20.width,
      m2 = e20.height,
      v2 = e20.clockWise,
      g2 = e20.labelViewBox;
    if (g2) return g2;
    if (em$1(y2) && em$1(m2)) {
      if (em$1(f2) && em$1(d2)) return { x: f2, y: d2, width: y2, height: m2 };
      if (em$1(p2) && em$1(h2)) return { x: p2, y: h2, width: y2, height: m2 };
    }
    return em$1(f2) && em$1(d2)
      ? { x: f2, y: d2, width: 0, height: 0 }
      : em$1(t2) && em$1(n2)
        ? {
            cx: t2,
            cy: n2,
            startAngle: i2 || r2 || 0,
            endAngle: o2 || r2 || 0,
            innerRadius: c2 || 0,
            outerRadius: u2 || s2 || a2 || 0,
            clockWise: v2,
          }
        : e20.viewBox
          ? e20.viewBox
          : {};
  };
(dd.parseViewBox = yd),
  (dd.renderCallByParent = function (e20, t2) {
    var n2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!e20 || (!e20.children && n2 && !e20.label)) return null;
    var r2 = e20.children,
      i2 = yd(e20),
      o2 = Am$1(r2, dd).map(function (e21, n3) {
        return cloneElement(e21, { viewBox: t2 || i2, key: "label-".concat(n3) });
      });
    if (!n2) return o2;
    var s2 = (function (e21, t3) {
      return e21
        ? true === e21
          ? g__default.createElement(dd, { key: "label-implicit", viewBox: t3 })
          : nm$1(e21)
            ? g__default.createElement(dd, { key: "label-implicit", viewBox: t3, value: e21 })
            : isValidElement(e21)
              ? e21.type === dd
                ? cloneElement(e21, { key: "label-implicit", viewBox: t3 })
                : g__default.createElement(dd, { key: "label-implicit", content: e21, viewBox: t3 })
              : zh$1(e21)
                ? g__default.createElement(dd, { key: "label-implicit", content: e21, viewBox: t3 })
                : Mh$1(e21)
                  ? g__default.createElement(
                      dd,
                      ud({ viewBox: t3 }, e21, { key: "label-implicit" }),
                    )
                  : null
        : null;
    })(e20.label, t2 || i2);
    return [s2].concat(id(o2));
  });
var md =
  (hd ||
    ((hd = 1),
    (pd = function (e20) {
      var t2 = null == e20 ? 0 : e20.length;
      return t2 ? e20[t2 - 1] : void 0;
    })),
  pd);
const vd = Td$1(md);
function gd(e20) {
  return (
    (gd =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    gd(e20)
  );
}
var bd = ["valueAccessor"],
  xd = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function wd(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return Od(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return Od(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Od(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Od(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function Sd() {
  return (
    (Sd = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Sd.apply(this, arguments)
  );
}
function Ad(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function jd(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Ad(Object(n2), true).forEach(function (t3) {
          Md(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Ad(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Md(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != gd(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != gd(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == gd(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Pd(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
var kd = function (e20) {
  return Array.isArray(e20.value) ? vd(e20.value) : e20.value;
};
function Ed(e20) {
  var t2 = e20.valueAccessor,
    n2 = void 0 === t2 ? kd : t2,
    i2 = Pd(e20, bd),
    o2 = i2.data,
    a2 = i2.dataKey,
    s2 = i2.clockWise,
    c2 = i2.id,
    l2 = i2.textBreakAll,
    u2 = Pd(i2, xd);
  return o2 && o2.length
    ? g__default.createElement(
        nn,
        { className: "recharts-label-list" },
        o2.map(function (e21, t3) {
          var i3 = Th$1(a2) ? n2(e21, t3) : mf(e21 && e21.payload, a2),
            o3 = Th$1(c2) ? {} : { id: "".concat(c2, "-").concat(t3) };
          return g__default.createElement(
            dd,
            Sd({}, Ng$1(e21, true), u2, o3, {
              parentViewBox: e21.parentViewBox,
              value: i3,
              textBreakAll: l2,
              viewBox: dd.parseViewBox(Th$1(s2) ? e21 : jd(jd({}, e21), {}, { clockWise: s2 })),
              key: "label-".concat(t3),
              index: t3,
            }),
          );
        }),
      )
    : null;
}
function Td(e20) {
  return (
    (Td =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Td(e20)
  );
}
function Nd() {
  return (
    (Nd = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Nd.apply(this, arguments)
  );
}
function Id(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function _d(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Id(Object(n2), true).forEach(function (t3) {
          Cd(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Id(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Cd(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Td(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Td(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Td(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
(Ed.displayName = "LabelList"),
  (Ed.renderCallByParent = function (e20, t2) {
    var n2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!e20 || (!e20.children && n2 && !e20.label)) return null;
    var r2 = e20.children,
      i2 = Am$1(r2, Ed).map(function (e21, n3) {
        return cloneElement(e21, { data: t2, key: "labelList-".concat(n3) });
      });
    return n2
      ? [
          (function (e21, t3) {
            return e21
              ? true === e21
                ? g__default.createElement(Ed, { key: "labelList-implicit", data: t3 })
                : g__default.isValidElement(e21) || zh$1(e21)
                  ? g__default.createElement(Ed, {
                      key: "labelList-implicit",
                      data: t3,
                      content: e21,
                    })
                  : Mh$1(e21)
                    ? g__default.createElement(
                        Ed,
                        Sd({ data: t3 }, e21, { key: "labelList-implicit" }),
                      )
                    : null
              : null;
          })(e20.label, t2),
        ].concat(wd(i2))
      : i2;
  });
var zd = function (e20) {
    var t2 = e20.cx,
      n2 = e20.cy,
      r2 = e20.radius,
      i2 = e20.angle,
      o2 = e20.sign,
      a2 = e20.isExternal,
      s2 = e20.cornerRadius,
      c2 = e20.cornerIsExternal,
      l2 = s2 * (a2 ? 1 : -1) + r2,
      u2 = Math.asin(s2 / l2) / Gf,
      f2 = c2 ? i2 : i2 + o2 * u2,
      d2 = c2 ? i2 - o2 * u2 : i2;
    return {
      center: Xf(t2, n2, l2, f2),
      circleTangency: Xf(t2, n2, r2, f2),
      lineTangency: Xf(t2, n2, l2 * Math.cos(u2 * Gf), d2),
      theta: u2,
    };
  },
  Dd = function (e20) {
    var t2 = e20.cx,
      n2 = e20.cy,
      r2 = e20.innerRadius,
      i2 = e20.outerRadius,
      o2 = e20.startAngle,
      a2 = (function (e21, t3) {
        return Jh$1(t3 - e21) * Math.min(Math.abs(t3 - e21), 359.999);
      })(o2, e20.endAngle),
      s2 = o2 + a2,
      c2 = Xf(t2, n2, i2, o2),
      l2 = Xf(t2, n2, i2, s2),
      u2 = "M "
        .concat(c2.x, ",")
        .concat(c2.y, "\n    A ")
        .concat(i2, ",")
        .concat(i2, ",0,\n    ")
        .concat(+(Math.abs(a2) > 180), ",")
        .concat(+(o2 > s2), ",\n    ")
        .concat(l2.x, ",")
        .concat(l2.y, "\n  ");
    if (r2 > 0) {
      var f2 = Xf(t2, n2, r2, o2),
        d2 = Xf(t2, n2, r2, s2);
      u2 += "L "
        .concat(d2.x, ",")
        .concat(d2.y, "\n            A ")
        .concat(r2, ",")
        .concat(r2, ",0,\n            ")
        .concat(+(Math.abs(a2) > 180), ",")
        .concat(+(o2 <= s2), ",\n            ")
        .concat(f2.x, ",")
        .concat(f2.y, " Z");
    } else u2 += "L ".concat(t2, ",").concat(n2, " Z");
    return u2;
  },
  Rd = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false,
  },
  Ld = function (e20) {
    var t2 = _d(_d({}, Rd), e20),
      n2 = t2.cx,
      i2 = t2.cy,
      o2 = t2.innerRadius,
      a2 = t2.outerRadius,
      s2 = t2.cornerRadius,
      c2 = t2.forceCornerRadius,
      l2 = t2.cornerIsExternal,
      u2 = t2.startAngle,
      f2 = t2.endAngle,
      d2 = t2.className;
    if (a2 < o2 || u2 === f2) return null;
    var p2,
      h2 = Nt("recharts-sector", d2),
      y2 = a2 - o2,
      m2 = am$1(s2, y2, 0, true);
    return (
      (p2 =
        m2 > 0 && Math.abs(u2 - f2) < 360
          ? (function (e21) {
              var t3 = e21.cx,
                n3 = e21.cy,
                r2 = e21.innerRadius,
                i3 = e21.outerRadius,
                o3 = e21.cornerRadius,
                a3 = e21.forceCornerRadius,
                s3 = e21.cornerIsExternal,
                c3 = e21.startAngle,
                l3 = e21.endAngle,
                u3 = Jh$1(l3 - c3),
                f3 = zd({
                  cx: t3,
                  cy: n3,
                  radius: i3,
                  angle: c3,
                  sign: u3,
                  cornerRadius: o3,
                  cornerIsExternal: s3,
                }),
                d3 = f3.circleTangency,
                p3 = f3.lineTangency,
                h3 = f3.theta,
                y3 = zd({
                  cx: t3,
                  cy: n3,
                  radius: i3,
                  angle: l3,
                  sign: -u3,
                  cornerRadius: o3,
                  cornerIsExternal: s3,
                }),
                m3 = y3.circleTangency,
                v2 = y3.lineTangency,
                g2 = y3.theta,
                b2 = s3 ? Math.abs(c3 - l3) : Math.abs(c3 - l3) - h3 - g2;
              if (b2 < 0)
                return a3
                  ? "M "
                      .concat(p3.x, ",")
                      .concat(p3.y, "\n        a")
                      .concat(o3, ",")
                      .concat(o3, ",0,0,1,")
                      .concat(2 * o3, ",0\n        a")
                      .concat(o3, ",")
                      .concat(o3, ",0,0,1,")
                      .concat(2 * -o3, ",0\n      ")
                  : Dd({
                      cx: t3,
                      cy: n3,
                      innerRadius: r2,
                      outerRadius: i3,
                      startAngle: c3,
                      endAngle: l3,
                    });
              var x2 = "M "
                .concat(p3.x, ",")
                .concat(p3.y, "\n    A")
                .concat(o3, ",")
                .concat(o3, ",0,0,")
                .concat(+(u3 < 0), ",")
                .concat(d3.x, ",")
                .concat(d3.y, "\n    A")
                .concat(i3, ",")
                .concat(i3, ",0,")
                .concat(+(b2 > 180), ",")
                .concat(+(u3 < 0), ",")
                .concat(m3.x, ",")
                .concat(m3.y, "\n    A")
                .concat(o3, ",")
                .concat(o3, ",0,0,")
                .concat(+(u3 < 0), ",")
                .concat(v2.x, ",")
                .concat(v2.y, "\n  ");
              if (r2 > 0) {
                var w2 = zd({
                    cx: t3,
                    cy: n3,
                    radius: r2,
                    angle: c3,
                    sign: u3,
                    isExternal: true,
                    cornerRadius: o3,
                    cornerIsExternal: s3,
                  }),
                  O2 = w2.circleTangency,
                  S2 = w2.lineTangency,
                  A2 = w2.theta,
                  j2 = zd({
                    cx: t3,
                    cy: n3,
                    radius: r2,
                    angle: l3,
                    sign: -u3,
                    isExternal: true,
                    cornerRadius: o3,
                    cornerIsExternal: s3,
                  }),
                  M2 = j2.circleTangency,
                  k2 = j2.lineTangency,
                  E2 = j2.theta,
                  T2 = s3 ? Math.abs(c3 - l3) : Math.abs(c3 - l3) - A2 - E2;
                if (T2 < 0 && 0 === o3) return "".concat(x2, "L").concat(t3, ",").concat(n3, "Z");
                x2 += "L"
                  .concat(k2.x, ",")
                  .concat(k2.y, "\n      A")
                  .concat(o3, ",")
                  .concat(o3, ",0,0,")
                  .concat(+(u3 < 0), ",")
                  .concat(M2.x, ",")
                  .concat(M2.y, "\n      A")
                  .concat(r2, ",")
                  .concat(r2, ",0,")
                  .concat(+(T2 > 180), ",")
                  .concat(+(u3 > 0), ",")
                  .concat(O2.x, ",")
                  .concat(O2.y, "\n      A")
                  .concat(o3, ",")
                  .concat(o3, ",0,0,")
                  .concat(+(u3 < 0), ",")
                  .concat(S2.x, ",")
                  .concat(S2.y, "Z");
              } else x2 += "L".concat(t3, ",").concat(n3, "Z");
              return x2;
            })({
              cx: n2,
              cy: i2,
              innerRadius: o2,
              outerRadius: a2,
              cornerRadius: Math.min(m2, y2 / 2),
              forceCornerRadius: c2,
              cornerIsExternal: l2,
              startAngle: u2,
              endAngle: f2,
            })
          : Dd({ cx: n2, cy: i2, innerRadius: o2, outerRadius: a2, startAngle: u2, endAngle: f2 })),
      g__default.createElement(
        "path",
        Nd({}, Ng$1(t2, true), { className: h2, d: p2, role: "img" }),
      )
    );
  };
function $d(e20) {
  return (
    ($d =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    $d(e20)
  );
}
function Bd() {
  return (
    (Bd = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Bd.apply(this, arguments)
  );
}
function qd(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Fd(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? qd(Object(n2), true).forEach(function (t3) {
          Ud(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : qd(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Ud(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != $d(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != $d(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == $d(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
var Vd = {
    curveBasisClosed: function (e20) {
      return new Kn(e20);
    },
    curveBasisOpen: function (e20) {
      return new Yn(e20);
    },
    curveBasis: function (e20) {
      return new Xn(e20);
    },
    curveBumpX: function (e20) {
      return new En(e20, true);
    },
    curveBumpY: function (e20) {
      return new En(e20, false);
    },
    curveLinearClosed: function (e20) {
      return new Zn(e20);
    },
    curveLinear: An,
    curveMonotoneX: function (e20) {
      return new rr(e20);
    },
    curveMonotoneY: function (e20) {
      return new ir(e20);
    },
    curveNatural: function (e20) {
      return new ar(e20);
    },
    curveStep: function (e20) {
      return new cr(e20, 0.5);
    },
    curveStepAfter: function (e20) {
      return new cr(e20, 1);
    },
    curveStepBefore: function (e20) {
      return new cr(e20, 0);
    },
  },
  Qd = function (e20) {
    return e20.x === +e20.x && e20.y === +e20.y;
  },
  Gd = function (e20) {
    return e20.x;
  },
  Hd = function (e20) {
    return e20.y;
  },
  Xd = function (e20) {
    var t2,
      n2 = e20.type,
      r2 = void 0 === n2 ? "linear" : n2,
      i2 = e20.points,
      o2 = void 0 === i2 ? [] : i2,
      s2 = e20.baseLine,
      c2 = e20.layout,
      u2 = e20.connectNulls,
      f2 = void 0 !== u2 && u2,
      d2 = (function (e21, t3) {
        if (zh$1(e21)) return e21;
        var n3 = "curve".concat(cn(e21));
        return ("curveMonotone" !== n3 && "curveBump" !== n3) || !t3
          ? Vd[n3] || An
          : Vd["".concat(n3).concat("vertical" === t3 ? "Y" : "X")];
      })(r2, c2),
      p2 = f2
        ? o2.filter(function (e21) {
            return Qd(e21);
          })
        : o2;
    if (Array.isArray(s2)) {
      var h2 = f2
          ? s2.filter(function (e21) {
              return Qd(e21);
            })
          : s2,
        y2 = p2.map(function (e21, t3) {
          return Fd(Fd({}, e21), {}, { base: h2[t3] });
        });
      return (
        (t2 =
          "vertical" === c2
            ? kn()
                .y(Hd)
                .x1(Gd)
                .x0(function (e21) {
                  return e21.base.x;
                })
            : kn()
                .x(Gd)
                .y1(Hd)
                .y0(function (e21) {
                  return e21.base.y;
                }))
          .defined(Qd)
          .curve(d2),
        t2(y2)
      );
    }
    return (
      (t2 =
        "vertical" === c2 && em$1(s2)
          ? kn().y(Hd).x1(Gd).x0(s2)
          : em$1(s2)
            ? kn().x(Gd).y1(Hd).y0(s2)
            : Pn().x(Gd).y(Hd))
        .defined(Qd)
        .curve(d2),
      t2(p2)
    );
  },
  Kd = function (e20) {
    var t2 = e20.className,
      n2 = e20.points,
      i2 = e20.path,
      o2 = e20.pathRef;
    if (!((n2 && n2.length) || i2)) return null;
    var a2 = n2 && n2.length ? Xd(e20) : i2;
    return g.createElement(
      "path",
      Bd({}, Ng$1(e20, false), vm$1(e20), { className: Nt("recharts-curve", t2), d: a2, ref: o2 }),
    );
  },
  Yd = { exports: {} };
var ip, op, dp, pp, hp;
function gp() {
  if (op) return ip;
  op = 1;
  return (ip = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
}
function Op() {
  if (pp) return dp;
  pp = 1;
  var e20 = gp();
  function t2() {}
  function n2() {}
  return (
    (n2.resetWarningCache = t2),
    (dp = function () {
      function r2(t3, n3, r3, i3, o3, a2) {
        if (a2 !== e20) {
          var s2 = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((s2.name = "Invariant Violation"), s2);
        }
      }
      function i2() {
        return r2;
      }
      r2.isRequired = r2;
      var o2 = {
        array: r2,
        bigint: r2,
        bool: r2,
        func: r2,
        number: r2,
        object: r2,
        string: r2,
        symbol: r2,
        any: r2,
        arrayOf: i2,
        element: r2,
        elementType: r2,
        instanceOf: i2,
        node: r2,
        objectOf: i2,
        oneOf: i2,
        oneOfType: i2,
        shape: i2,
        exact: i2,
        checkPropTypes: n2,
        resetWarningCache: t2,
      };
      return (o2.PropTypes = o2), o2;
    })
  );
}
function Sp() {
  if (hp) return Yd.exports;
  if (((hp = 1), false));
  else Yd.exports = Op()();
  return Yd.exports;
}
const Ap = Td$1(Sp());
var jp = Object.getOwnPropertyNames,
  Mp = Object.getOwnPropertySymbols,
  Pp = Object.prototype.hasOwnProperty;
function kp(e20, t2) {
  return function (n2, r2, i2) {
    return e20(n2, r2, i2) && t2(n2, r2, i2);
  };
}
function Ep(e20) {
  return function (t2, n2, r2) {
    if (!t2 || !n2 || "object" != typeof t2 || "object" != typeof n2) return e20(t2, n2, r2);
    var i2 = r2.cache,
      o2 = i2.get(t2),
      a2 = i2.get(n2);
    if (o2 && a2) return o2 === n2 && a2 === t2;
    i2.set(t2, n2), i2.set(n2, t2);
    var s2 = e20(t2, n2, r2);
    return i2.delete(t2), i2.delete(n2), s2;
  };
}
function Tp(e20) {
  return jp(e20).concat(Mp(e20));
}
var Np =
  Object.hasOwn ||
  function (e20, t2) {
    return Pp.call(e20, t2);
  };
function Ip(e20, t2) {
  return e20 === t2 || (!e20 && !t2 && e20 != e20 && t2 != t2);
}
var _p = Object.getOwnPropertyDescriptor,
  Cp = Object.keys;
function zp(e20, t2, n2) {
  var r2 = e20.length;
  if (t2.length !== r2) return false;
  for (; r2-- > 0; ) if (!n2.equals(e20[r2], t2[r2], r2, r2, e20, t2, n2)) return false;
  return true;
}
function Dp(e20, t2) {
  return Ip(e20.getTime(), t2.getTime());
}
function Rp(e20, t2) {
  return (
    e20.name === t2.name &&
    e20.message === t2.message &&
    e20.cause === t2.cause &&
    e20.stack === t2.stack
  );
}
function Lp(e20, t2) {
  return e20 === t2;
}
function $p(e20, t2, n2) {
  var r2 = e20.size;
  if (r2 !== t2.size) return false;
  if (!r2) return true;
  for (var i2, o2, a2 = new Array(r2), s2 = e20.entries(), c2 = 0; (i2 = s2.next()) && !i2.done; ) {
    for (var l2 = t2.entries(), u2 = false, f2 = 0; (o2 = l2.next()) && !o2.done; )
      if (a2[f2]) f2++;
      else {
        var d2 = i2.value,
          p2 = o2.value;
        if (
          n2.equals(d2[0], p2[0], c2, f2, e20, t2, n2) &&
          n2.equals(d2[1], p2[1], d2[0], p2[0], e20, t2, n2)
        ) {
          u2 = a2[f2] = true;
          break;
        }
        f2++;
      }
    if (!u2) return false;
    c2++;
  }
  return true;
}
var Bp = Ip;
function qp(e20, t2, n2) {
  var r2 = Cp(e20),
    i2 = r2.length;
  if (Cp(t2).length !== i2) return false;
  for (; i2-- > 0; ) if (!Hp(e20, t2, n2, r2[i2])) return false;
  return true;
}
function Fp(e20, t2, n2) {
  var r2,
    i2,
    o2,
    a2 = Tp(e20),
    s2 = a2.length;
  if (Tp(t2).length !== s2) return false;
  for (; s2-- > 0; ) {
    if (!Hp(e20, t2, n2, (r2 = a2[s2]))) return false;
    if (
      ((i2 = _p(e20, r2)),
      (o2 = _p(t2, r2)),
      (i2 || o2) &&
        (!i2 ||
          !o2 ||
          i2.configurable !== o2.configurable ||
          i2.enumerable !== o2.enumerable ||
          i2.writable !== o2.writable))
    )
      return false;
  }
  return true;
}
function Up(e20, t2) {
  return Ip(e20.valueOf(), t2.valueOf());
}
function Wp(e20, t2) {
  return e20.source === t2.source && e20.flags === t2.flags;
}
function Vp(e20, t2, n2) {
  var r2 = e20.size;
  if (r2 !== t2.size) return false;
  if (!r2) return true;
  for (var i2, o2, a2 = new Array(r2), s2 = e20.values(); (i2 = s2.next()) && !i2.done; ) {
    for (var c2 = t2.values(), l2 = false, u2 = 0; (o2 = c2.next()) && !o2.done; ) {
      if (!a2[u2] && n2.equals(i2.value, o2.value, i2.value, o2.value, e20, t2, n2)) {
        l2 = a2[u2] = true;
        break;
      }
      u2++;
    }
    if (!l2) return false;
  }
  return true;
}
function Qp(e20, t2) {
  var n2 = e20.length;
  if (t2.length !== n2) return false;
  for (; n2-- > 0; ) if (e20[n2] !== t2[n2]) return false;
  return true;
}
function Gp(e20, t2) {
  return (
    e20.hostname === t2.hostname &&
    e20.pathname === t2.pathname &&
    e20.protocol === t2.protocol &&
    e20.port === t2.port &&
    e20.hash === t2.hash &&
    e20.username === t2.username &&
    e20.password === t2.password
  );
}
function Hp(e20, t2, n2, r2) {
  return (
    !(("_owner" !== r2 && "__o" !== r2 && "__v" !== r2) || (!e20.$$typeof && !t2.$$typeof)) ||
    (Np(t2, r2) && n2.equals(e20[r2], t2[r2], r2, r2, e20, t2, n2))
  );
}
var Xp = Array.isArray,
  Kp = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
  Yp = Object.assign,
  Zp = Object.prototype.toString.call.bind(Object.prototype.toString);
var Jp = eh();
function eh(e20) {
  void 0 === e20 && (e20 = {});
  var t2,
    n2 = e20.circular,
    r2 = void 0 !== n2 && n2,
    i2 = e20.createInternalComparator,
    o2 = e20.createState,
    a2 = e20.strict,
    s2 = void 0 !== a2 && a2,
    c2 = (function (e21) {
      var t3 = e21.circular,
        n3 = e21.createCustomConfig,
        r3 = e21.strict,
        i3 = {
          areArraysEqual: r3 ? Fp : zp,
          areDatesEqual: Dp,
          areErrorsEqual: Rp,
          areFunctionsEqual: Lp,
          areMapsEqual: r3 ? kp($p, Fp) : $p,
          areNumbersEqual: Bp,
          areObjectsEqual: r3 ? Fp : qp,
          arePrimitiveWrappersEqual: Up,
          areRegExpsEqual: Wp,
          areSetsEqual: r3 ? kp(Vp, Fp) : Vp,
          areTypedArraysEqual: r3 ? Fp : Qp,
          areUrlsEqual: Gp,
        };
      if ((n3 && (i3 = Yp({}, i3, n3(i3))), t3)) {
        var o3 = Ep(i3.areArraysEqual),
          a3 = Ep(i3.areMapsEqual),
          s3 = Ep(i3.areObjectsEqual),
          c3 = Ep(i3.areSetsEqual);
        i3 = Yp({}, i3, {
          areArraysEqual: o3,
          areMapsEqual: a3,
          areObjectsEqual: s3,
          areSetsEqual: c3,
        });
      }
      return i3;
    })(e20),
    l2 = (function (e21) {
      var t3 = e21.areArraysEqual,
        n3 = e21.areDatesEqual,
        r3 = e21.areErrorsEqual,
        i3 = e21.areFunctionsEqual,
        o3 = e21.areMapsEqual,
        a3 = e21.areNumbersEqual,
        s3 = e21.areObjectsEqual,
        c3 = e21.arePrimitiveWrappersEqual,
        l3 = e21.areRegExpsEqual,
        u3 = e21.areSetsEqual,
        f2 = e21.areTypedArraysEqual,
        d2 = e21.areUrlsEqual;
      return function (e22, p2, h2) {
        if (e22 === p2) return true;
        if (null == e22 || null == p2) return false;
        var y2 = typeof e22;
        if (y2 !== typeof p2) return false;
        if ("object" !== y2)
          return "number" === y2 ? a3(e22, p2, h2) : "function" === y2 && i3(e22, p2, h2);
        var m2 = e22.constructor;
        if (m2 !== p2.constructor) return false;
        if (m2 === Object) return s3(e22, p2, h2);
        if (Xp(e22)) return t3(e22, p2, h2);
        if (null != Kp && Kp(e22)) return f2(e22, p2, h2);
        if (m2 === Date) return n3(e22, p2, h2);
        if (m2 === RegExp) return l3(e22, p2, h2);
        if (m2 === Map) return o3(e22, p2, h2);
        if (m2 === Set) return u3(e22, p2, h2);
        var v2 = Zp(e22);
        return "[object Date]" === v2
          ? n3(e22, p2, h2)
          : "[object RegExp]" === v2
            ? l3(e22, p2, h2)
            : "[object Map]" === v2
              ? o3(e22, p2, h2)
              : "[object Set]" === v2
                ? u3(e22, p2, h2)
                : "[object Object]" === v2
                  ? "function" != typeof e22.then && "function" != typeof p2.then && s3(e22, p2, h2)
                  : "[object URL]" === v2
                    ? d2(e22, p2, h2)
                    : "[object Error]" === v2
                      ? r3(e22, p2, h2)
                      : "[object Arguments]" === v2
                        ? s3(e22, p2, h2)
                        : ("[object Boolean]" === v2 ||
                            "[object Number]" === v2 ||
                            "[object String]" === v2) &&
                          c3(e22, p2, h2);
      };
    })(c2),
    u2 = i2
      ? i2(l2)
      : ((t2 = l2),
        function (e21, n3, r3, i3, o3, a3, s3) {
          return t2(e21, n3, s3);
        });
  return (function (e21) {
    var t3 = e21.circular,
      n3 = e21.comparator,
      r3 = e21.createState,
      i3 = e21.equals,
      o3 = e21.strict;
    if (r3)
      return function (e22, a4) {
        var s3 = r3(),
          c3 = s3.cache,
          l3 = void 0 === c3 ? (t3 ? /* @__PURE__ */ new WeakMap() : void 0) : c3,
          u3 = s3.meta;
        return n3(e22, a4, { cache: l3, equals: i3, meta: u3, strict: o3 });
      };
    if (t3)
      return function (e22, t4) {
        return n3(e22, t4, {
          cache: /* @__PURE__ */ new WeakMap(),
          equals: i3,
          meta: void 0,
          strict: o3,
        });
      };
    var a3 = { cache: void 0, equals: i3, meta: void 0, strict: o3 };
    return function (e22, t4) {
      return n3(e22, t4, a3);
    };
  })({ circular: r2, comparator: l2, createState: o2, equals: u2, strict: s2 });
}
function th(e20) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n2 = -1;
  requestAnimationFrame(function r2(i2) {
    n2 < 0 && (n2 = i2),
      i2 - n2 > t2
        ? (e20(i2), (n2 = -1))
        : (function (e21) {
            "undefined" != typeof requestAnimationFrame && requestAnimationFrame(e21);
          })(r2);
  });
}
function nh(e20) {
  return (
    (nh =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    nh(e20)
  );
}
function rh(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return ih(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return ih(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function ih(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function oh() {
  var e20 = function () {
      return null;
    },
    t2 = false,
    n2 = function n3(r2) {
      if (!t2) {
        if (Array.isArray(r2)) {
          if (!r2.length) return;
          var i2 = rh(r2),
            o2 = i2[0],
            a2 = i2.slice(1);
          return "number" == typeof o2
            ? void th(n3.bind(null, a2), o2)
            : (n3(o2), void th(n3.bind(null, a2)));
        }
        "object" === nh(r2) && e20(r2), "function" == typeof r2 && r2();
      }
    };
  return {
    stop: function () {
      t2 = true;
    },
    start: function (e21) {
      (t2 = false), n2(e21);
    },
    subscribe: function (t3) {
      return (
        (e20 = t3),
        function () {
          e20 = function () {
            return null;
          };
        }
      );
    },
  };
}
function ah(e20) {
  return (
    (ah =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    ah(e20)
  );
}
function sh(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function ch(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? sh(Object(n2), true).forEach(function (t3) {
          lh(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : sh(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function lh(e20, t2, n2) {
  return (
    (t2 = (function (e21) {
      var t3 = (function (e22, t4) {
        if ("object" !== ah(e22) || null === e22) return e22;
        var n3 = e22[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e22, t4);
          if ("object" !== ah(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e22);
      })(e21, "string");
      return "symbol" === ah(t3) ? t3 : String(t3);
    })(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
eh({ strict: true }),
  eh({ circular: true }),
  eh({ circular: true, strict: true }),
  eh({
    createInternalComparator: function () {
      return Ip;
    },
  }),
  eh({
    strict: true,
    createInternalComparator: function () {
      return Ip;
    },
  }),
  eh({
    circular: true,
    createInternalComparator: function () {
      return Ip;
    },
  }),
  eh({
    circular: true,
    createInternalComparator: function () {
      return Ip;
    },
    strict: true,
  });
var uh = function (e20) {
    return e20;
  },
  fh = function (e20, t2) {
    return Object.keys(t2).reduce(function (n2, r2) {
      return ch(ch({}, n2), {}, lh({}, r2, e20(r2, t2[r2])));
    }, {});
  },
  dh = function (e20, t2, n2) {
    return e20
      .map(function (e21) {
        return ""
          .concat(
            ((r2 = e21),
            r2.replace(/([A-Z])/g, function (e22) {
              return "-".concat(e22.toLowerCase());
            })),
            " ",
          )
          .concat(t2, "ms ")
          .concat(n2);
        var r2;
      })
      .join(",");
  };
function yh(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    vh(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function mh(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return gh(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    vh(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function vh(e20, t2) {
  if (e20) {
    if ("string" == typeof e20) return gh(e20, t2);
    var n2 = Object.prototype.toString.call(e20).slice(8, -1);
    return (
      "Object" === n2 && e20.constructor && (n2 = e20.constructor.name),
      "Map" === n2 || "Set" === n2
        ? Array.from(e20)
        : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)
          ? gh(e20, t2)
          : void 0
    );
  }
}
function gh(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
var bh = 1e-4,
  xh = function (e20, t2) {
    return [0, 3 * e20, 3 * t2 - 6 * e20, 3 * e20 - 3 * t2 + 1];
  },
  wh = function (e20, t2) {
    return e20
      .map(function (e21, n2) {
        return e21 * Math.pow(t2, n2);
      })
      .reduce(function (e21, t3) {
        return e21 + t3;
      });
  },
  Oh = function (e20, t2) {
    return function (n2) {
      var r2 = xh(e20, t2);
      return wh(r2, n2);
    };
  },
  Sh = function () {
    for (var e20 = arguments.length, t2 = new Array(e20), n2 = 0; n2 < e20; n2++)
      t2[n2] = arguments[n2];
    var r2 = t2[0],
      i2 = t2[1],
      o2 = t2[2],
      a2 = t2[3];
    if (1 === t2.length)
      switch (t2[0]) {
        case "linear":
          (r2 = 0), (i2 = 0), (o2 = 1), (a2 = 1);
          break;
        case "ease":
          (r2 = 0.25), (i2 = 0.1), (o2 = 0.25), (a2 = 1);
          break;
        case "ease-in":
          (r2 = 0.42), (i2 = 0), (o2 = 1), (a2 = 1);
          break;
        case "ease-out":
          (r2 = 0.42), (i2 = 0), (o2 = 0.58), (a2 = 1);
          break;
        case "ease-in-out":
          (r2 = 0), (i2 = 0), (o2 = 0.58), (a2 = 1);
          break;
        default:
          var s2 = t2[0].split("(");
          if ("cubic-bezier" === s2[0] && 4 === s2[1].split(")")[0].split(",").length) {
            var c2 = s2[1]
                .split(")")[0]
                .split(",")
                .map(function (e21) {
                  return parseFloat(e21);
                }),
              l2 = yh(c2, 4);
            (r2 = l2[0]), (i2 = l2[1]), (o2 = l2[2]), (a2 = l2[3]);
          }
      }
    var u2,
      f2,
      d2 = Oh(r2, o2),
      p2 = Oh(i2, a2),
      h2 =
        ((u2 = r2),
        (f2 = o2),
        function (e21) {
          var t3 = xh(u2, f2),
            n3 = [].concat(
              mh(
                t3
                  .map(function (e22, t4) {
                    return e22 * t4;
                  })
                  .slice(1),
              ),
              [0],
            );
          return wh(n3, e21);
        }),
      y2 = function (e21) {
        for (var t3, n3 = e21 > 1 ? 1 : e21, r3 = n3, i3 = 0; i3 < 8; ++i3) {
          var o3 = d2(r3) - n3,
            a3 = h2(r3);
          if (Math.abs(o3 - n3) < bh || a3 < bh) return p2(r3);
          r3 = (t3 = r3 - o3 / a3) > 1 ? 1 : t3 < 0 ? 0 : t3;
        }
        return p2(r3);
      };
    return (y2.isStepper = false), y2;
  },
  Ah = function () {
    for (var e20 = arguments.length, t2 = new Array(e20), n2 = 0; n2 < e20; n2++)
      t2[n2] = arguments[n2];
    var r2 = t2[0];
    if ("string" == typeof r2)
      switch (r2) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Sh(r2);
        case "spring":
          return (function () {
            var e21 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t3 = e21.stiff,
              n3 = void 0 === t3 ? 100 : t3,
              r3 = e21.damping,
              i2 = void 0 === r3 ? 8 : r3,
              o2 = e21.dt,
              a2 = void 0 === o2 ? 17 : o2,
              s2 = function (e22, t4, r4) {
                var o3 = r4 + ((-(e22 - t4) * n3 - r4 * i2) * a2) / 1e3,
                  s3 = (r4 * a2) / 1e3 + e22;
                return Math.abs(s3 - t4) < bh && Math.abs(o3) < bh ? [t4, 0] : [s3, o3];
              };
            return (s2.isStepper = true), (s2.dt = a2), s2;
          })();
        default:
          if ("cubic-bezier" === r2.split("(")[0]) return Sh(r2);
      }
    return "function" == typeof r2 ? r2 : null;
  };
function jh(e20) {
  return (
    (jh =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    jh(e20)
  );
}
function Mh(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return Ih(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    Nh(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Ph(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function kh(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Ph(Object(n2), true).forEach(function (t3) {
          Eh(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Ph(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Eh(e20, t2, n2) {
  return (
    (t2 = (function (e21) {
      var t3 = (function (e22, t4) {
        if ("object" !== jh(e22) || null === e22) return e22;
        var n3 = e22[Symbol.toPrimitive];
        if (void 0 !== n3) {
          var r2 = n3.call(e22, t4);
          if ("object" !== jh(r2)) return r2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t4 ? String : Number)(e22);
      })(e21, "string");
      return "symbol" === jh(t3) ? t3 : String(t3);
    })(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Th(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    Nh(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Nh(e20, t2) {
  if (e20) {
    if ("string" == typeof e20) return Ih(e20, t2);
    var n2 = Object.prototype.toString.call(e20).slice(8, -1);
    return (
      "Object" === n2 && e20.constructor && (n2 = e20.constructor.name),
      "Map" === n2 || "Set" === n2
        ? Array.from(e20)
        : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)
          ? Ih(e20, t2)
          : void 0
    );
  }
}
function Ih(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
var _h = function (e20, t2, n2) {
    return e20 + (t2 - e20) * n2;
  },
  Ch = function (e20) {
    return e20.from !== e20.to;
  },
  zh = function e19(t2, n2, r2) {
    var i2 = fh(function (e20, n3) {
      if (Ch(n3)) {
        var r3 = Th(t2(n3.from, n3.to, n3.velocity), 2),
          i3 = r3[0],
          o2 = r3[1];
        return kh(kh({}, n3), {}, { from: i3, velocity: o2 });
      }
      return n3;
    }, n2);
    return r2 < 1
      ? fh(function (e20, t3) {
          return Ch(t3)
            ? kh(
                kh({}, t3),
                {},
                {
                  velocity: _h(t3.velocity, i2[e20].velocity, r2),
                  from: _h(t3.from, i2[e20].from, r2),
                },
              )
            : t3;
        }, n2)
      : e19(t2, i2, r2 - 1);
  };
const Dh = function (e20, t2, n2, r2, i2) {
  var o2,
    a2,
    s2,
    c2,
    l2 =
      ((o2 = e20),
      (a2 = t2),
      [Object.keys(o2), Object.keys(a2)].reduce(function (e21, t3) {
        return e21.filter(function (e22) {
          return t3.includes(e22);
        });
      })),
    u2 = l2.reduce(function (n3, r3) {
      return kh(kh({}, n3), {}, Eh({}, r3, [e20[r3], t2[r3]]));
    }, {}),
    f2 = l2.reduce(function (n3, r3) {
      return kh(kh({}, n3), {}, Eh({}, r3, { from: e20[r3], velocity: 0, to: t2[r3] }));
    }, {}),
    d2 = -1,
    p2 = function () {
      return null;
    };
  return (
    (p2 = n2.isStepper
      ? function (r3) {
          s2 || (s2 = r3);
          var o3 = (r3 - s2) / n2.dt;
          (f2 = zh(n2, f2, o3)),
            i2(
              kh(
                kh(kh({}, e20), t2),
                fh(function (e21, t3) {
                  return t3.from;
                }, f2),
              ),
            ),
            (s2 = r3),
            Object.values(f2).filter(Ch).length && (d2 = requestAnimationFrame(p2));
        }
      : function (o3) {
          c2 || (c2 = o3);
          var a3 = (o3 - c2) / r2,
            s3 = fh(function (e21, t3) {
              return _h.apply(void 0, Mh(t3).concat([n2(a3)]));
            }, u2);
          if ((i2(kh(kh(kh({}, e20), t2), s3)), a3 < 1)) d2 = requestAnimationFrame(p2);
          else {
            var l3 = fh(function (e21, t3) {
              return _h.apply(void 0, Mh(t3).concat([n2(1)]));
            }, u2);
            i2(kh(kh(kh({}, e20), t2), l3));
          }
        }),
    function () {
      return (
        requestAnimationFrame(p2),
        function () {
          cancelAnimationFrame(d2);
        }
      );
    }
  );
};
function Rh(e20) {
  return (
    (Rh =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Rh(e20)
  );
}
var Lh = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function $h(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3,
        r3,
        i3 = {},
        o3 = Object.keys(e21);
      for (r3 = 0; r3 < o3.length; r3++) (n3 = o3[r3]), t3.indexOf(n3) >= 0 || (i3[n3] = e21[n3]);
      return i3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Bh(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return qh(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return qh(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return qh(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function qh(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function Fh(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Uh(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Fh(Object(n2), true).forEach(function (t3) {
          Wh(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Fh(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Wh(e20, t2, n2) {
  return (
    (t2 = Qh(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Vh(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, Qh(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Qh(e20) {
  var t2 = (function (e21, t3) {
    if ("object" !== Rh(e21) || null === e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" !== Rh(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e21);
  })(e20, "string");
  return "symbol" === Rh(t2) ? t2 : String(t2);
}
function Gh(e20, t2) {
  return (
    (Gh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Gh(e20, t2)
  );
}
function Hh(e20) {
  var t2 = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
    } catch (ZA2) {
      return false;
    }
  })();
  return function () {
    var n2,
      r2 = Yh(e20);
    if (t2) {
      var i2 = Yh(this).constructor;
      n2 = Reflect.construct(r2, arguments, i2);
    } else n2 = r2.apply(this, arguments);
    return Xh(this, n2);
  };
}
function Xh(e20, t2) {
  if (t2 && ("object" === Rh(t2) || "function" == typeof t2)) return t2;
  if (void 0 !== t2)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Kh(e20);
}
function Kh(e20) {
  if (void 0 === e20)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e20;
}
function Yh(e20) {
  return (
    (Yh = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Yh(e20)
  );
}
var Zh = (function () {
  !(function (e21, t3) {
    if ("function" != typeof t3 && null !== t3)
      throw new TypeError("Super expression must either be null or a function");
    (e21.prototype = Object.create(t3 && t3.prototype, {
      constructor: { value: e21, writable: true, configurable: true },
    })),
      Object.defineProperty(e21, "prototype", { writable: false }),
      t3 && Gh(e21, t3);
  })(t2, PureComponent);
  var e20 = Hh(t2);
  function t2(n2, r2) {
    var i2;
    !(function (e21, t3) {
      if (!(e21 instanceof t3)) throw new TypeError("Cannot call a class as a function");
    })(this, t2);
    var o2 = (i2 = e20.call(this, n2, r2)).props,
      a2 = o2.isActive,
      s2 = o2.attributeName,
      c2 = o2.from,
      l2 = o2.to,
      u2 = o2.steps,
      f2 = o2.children,
      d2 = o2.duration;
    if (
      ((i2.handleStyleChange = i2.handleStyleChange.bind(Kh(i2))),
      (i2.changeStyle = i2.changeStyle.bind(Kh(i2))),
      !a2 || d2 <= 0)
    )
      return (
        (i2.state = { style: {} }), "function" == typeof f2 && (i2.state = { style: l2 }), Xh(i2)
      );
    if (u2 && u2.length) i2.state = { style: u2[0].style };
    else if (c2) {
      if ("function" == typeof f2) return (i2.state = { style: c2 }), Xh(i2);
      i2.state = { style: s2 ? Wh({}, s2, c2) : c2 };
    } else i2.state = { style: {} };
    return i2;
  }
  return (
    Vh(t2, [
      {
        key: "componentDidMount",
        value: function () {
          var e21 = this.props,
            t3 = e21.isActive,
            n2 = e21.canBegin;
          (this.mounted = true), t3 && n2 && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (e21) {
          var t3 = this.props,
            n2 = t3.isActive,
            r2 = t3.canBegin,
            i2 = t3.attributeName,
            o2 = t3.shouldReAnimate,
            a2 = t3.to,
            s2 = t3.from,
            c2 = this.state.style;
          if (r2)
            if (n2) {
              if (!(Jp(e21.to, a2) && e21.canBegin && e21.isActive)) {
                var l2 = !e21.canBegin || !e21.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var u2 = l2 || o2 ? s2 : e21.to;
                if (this.state && c2) {
                  var f2 = { style: i2 ? Wh({}, i2, u2) : u2 };
                  ((i2 && c2[i2] !== u2) || (!i2 && c2 !== u2)) && this.setState(f2);
                }
                this.runAnimation(Uh(Uh({}, this.props), {}, { from: u2, begin: 0 }));
              }
            } else {
              var d2 = { style: i2 ? Wh({}, i2, a2) : a2 };
              this.state &&
                c2 &&
                ((i2 && c2[i2] !== a2) || (!i2 && c2 !== a2)) &&
                this.setState(d2);
            }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = false;
          var e21 = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            e21 && e21();
        },
      },
      {
        key: "handleStyleChange",
        value: function (e21) {
          this.changeStyle(e21);
        },
      },
      {
        key: "changeStyle",
        value: function (e21) {
          this.mounted && this.setState({ style: e21 });
        },
      },
      {
        key: "runJSAnimation",
        value: function (e21) {
          var t3 = this,
            n2 = e21.from,
            r2 = e21.to,
            i2 = e21.duration,
            o2 = e21.easing,
            a2 = e21.begin,
            s2 = e21.onAnimationEnd,
            c2 = e21.onAnimationStart,
            l2 = Dh(n2, r2, Ah(o2), i2, this.changeStyle);
          this.manager.start([
            c2,
            a2,
            function () {
              t3.stopJSAnimation = l2();
            },
            i2,
            s2,
          ]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (e21) {
          var t3 = this,
            n2 = e21.steps,
            r2 = e21.begin,
            i2 = e21.onAnimationStart,
            o2 = n2[0],
            a2 = o2.style,
            s2 = o2.duration,
            c2 = void 0 === s2 ? 0 : s2;
          return this.manager.start(
            [i2].concat(
              Bh(
                n2.reduce(
                  function (e22, r3, i3) {
                    if (0 === i3) return e22;
                    var o3 = r3.duration,
                      a3 = r3.easing,
                      s3 = void 0 === a3 ? "ease" : a3,
                      c3 = r3.style,
                      l2 = r3.properties,
                      u2 = r3.onAnimationEnd,
                      f2 = i3 > 0 ? n2[i3 - 1] : r3,
                      d2 = l2 || Object.keys(c3);
                    if ("function" == typeof s3 || "spring" === s3)
                      return [].concat(Bh(e22), [
                        t3.runJSAnimation.bind(t3, {
                          from: f2.style,
                          to: c3,
                          duration: o3,
                          easing: s3,
                        }),
                        o3,
                      ]);
                    var p2 = dh(d2, o3, s3),
                      h2 = Uh(Uh(Uh({}, f2.style), c3), {}, { transition: p2 });
                    return [].concat(Bh(e22), [h2, o3, u2]).filter(uh);
                  },
                  [a2, Math.max(c2, r2)],
                ),
              ),
              [e21.onAnimationEnd],
            ),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (e21) {
          this.manager || (this.manager = oh());
          var t3 = e21.begin,
            n2 = e21.duration,
            r2 = e21.attributeName,
            i2 = e21.to,
            o2 = e21.easing,
            a2 = e21.onAnimationStart,
            s2 = e21.onAnimationEnd,
            c2 = e21.steps,
            l2 = e21.children,
            u2 = this.manager;
          if (
            ((this.unSubscribe = u2.subscribe(this.handleStyleChange)),
            "function" != typeof o2 && "function" != typeof l2 && "spring" !== o2)
          )
            if (c2.length > 1) this.runStepAnimation(e21);
            else {
              var f2 = r2 ? Wh({}, r2, i2) : i2,
                d2 = dh(Object.keys(f2), n2, o2);
              u2.start([a2, t3, Uh(Uh({}, f2), {}, { transition: d2 }), n2, s2]);
            }
          else this.runJSAnimation(e21);
        },
      },
      {
        key: "render",
        value: function () {
          var e21 = this.props,
            t3 = e21.children;
          e21.begin;
          var n2 = e21.duration;
          e21.attributeName, e21.easing;
          var r2 = e21.isActive;
          e21.steps,
            e21.from,
            e21.to,
            e21.canBegin,
            e21.onAnimationEnd,
            e21.shouldReAnimate,
            e21.onAnimationReStart;
          var i2 = $h(e21, Lh),
            o2 = Children.count(t3),
            a2 = this.state.style;
          if ("function" == typeof t3) return t3(a2);
          if (!r2 || 0 === o2 || n2 <= 0) return t3;
          var s2 = function (e22) {
            var t4 = e22.props,
              n3 = t4.style,
              r3 = void 0 === n3 ? {} : n3,
              o3 = t4.className;
            return cloneElement(
              e22,
              Uh(Uh({}, i2), {}, { style: Uh(Uh({}, r3), a2), className: o3 }),
            );
          };
          return 1 === o2
            ? s2(Children.only(t3))
            : g__default.createElement(
                "div",
                null,
                Children.map(t3, function (e22) {
                  return s2(e22);
                }),
              );
        },
      },
    ]),
    t2
  );
})();
function Jh(e20) {
  return (
    (Jh =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Jh(e20)
  );
}
function ey() {
  return (
    (ey = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    ey.apply(this, arguments)
  );
}
function ty(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return ny(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return ny(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function ny(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function ry(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function iy(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? ry(Object(n2), true).forEach(function (t3) {
          oy(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : ry(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function oy(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Jh(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Jh(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Jh(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
(Zh.displayName = "Animate"),
  (Zh.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: true,
    canBegin: true,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {},
  }),
  (Zh.propTypes = {
    from: Ap.oneOfType([Ap.object, Ap.string]),
    to: Ap.oneOfType([Ap.object, Ap.string]),
    attributeName: Ap.string,
    duration: Ap.number,
    begin: Ap.number,
    easing: Ap.oneOfType([Ap.string, Ap.func]),
    steps: Ap.arrayOf(
      Ap.shape({
        duration: Ap.number.isRequired,
        style: Ap.object.isRequired,
        easing: Ap.oneOfType([
          Ap.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
          Ap.func,
        ]),
        properties: Ap.arrayOf("string"),
        onAnimationEnd: Ap.func,
      }),
    ),
    children: Ap.oneOfType([Ap.node, Ap.func]),
    isActive: Ap.bool,
    canBegin: Ap.bool,
    onAnimationEnd: Ap.func,
    shouldReAnimate: Ap.bool,
    onAnimationStart: Ap.func,
    onAnimationReStart: Ap.func,
  });
var ay = function (e20, t2, n2, r2, i2) {
    var o2,
      a2 = Math.min(Math.abs(n2) / 2, Math.abs(r2) / 2),
      s2 = r2 >= 0 ? 1 : -1,
      c2 = n2 >= 0 ? 1 : -1,
      l2 = (r2 >= 0 && n2 >= 0) || (r2 < 0 && n2 < 0) ? 1 : 0;
    if (a2 > 0 && i2 instanceof Array) {
      for (var u2 = [0, 0, 0, 0], f2 = 0; f2 < 4; f2++) u2[f2] = i2[f2] > a2 ? a2 : i2[f2];
      (o2 = "M".concat(e20, ",").concat(t2 + s2 * u2[0])),
        u2[0] > 0 &&
          (o2 += "A "
            .concat(u2[0], ",")
            .concat(u2[0], ",0,0,")
            .concat(l2, ",")
            .concat(e20 + c2 * u2[0], ",")
            .concat(t2)),
        (o2 += "L ".concat(e20 + n2 - c2 * u2[1], ",").concat(t2)),
        u2[1] > 0 &&
          (o2 += "A "
            .concat(u2[1], ",")
            .concat(u2[1], ",0,0,")
            .concat(l2, ",\n        ")
            .concat(e20 + n2, ",")
            .concat(t2 + s2 * u2[1])),
        (o2 += "L ".concat(e20 + n2, ",").concat(t2 + r2 - s2 * u2[2])),
        u2[2] > 0 &&
          (o2 += "A "
            .concat(u2[2], ",")
            .concat(u2[2], ",0,0,")
            .concat(l2, ",\n        ")
            .concat(e20 + n2 - c2 * u2[2], ",")
            .concat(t2 + r2)),
        (o2 += "L ".concat(e20 + c2 * u2[3], ",").concat(t2 + r2)),
        u2[3] > 0 &&
          (o2 += "A "
            .concat(u2[3], ",")
            .concat(u2[3], ",0,0,")
            .concat(l2, ",\n        ")
            .concat(e20, ",")
            .concat(t2 + r2 - s2 * u2[3])),
        (o2 += "Z");
    } else if (a2 > 0 && i2 === +i2 && i2 > 0) {
      var d2 = Math.min(a2, i2);
      o2 = "M "
        .concat(e20, ",")
        .concat(t2 + s2 * d2, "\n            A ")
        .concat(d2, ",")
        .concat(d2, ",0,0,")
        .concat(l2, ",")
        .concat(e20 + c2 * d2, ",")
        .concat(t2, "\n            L ")
        .concat(e20 + n2 - c2 * d2, ",")
        .concat(t2, "\n            A ")
        .concat(d2, ",")
        .concat(d2, ",0,0,")
        .concat(l2, ",")
        .concat(e20 + n2, ",")
        .concat(t2 + s2 * d2, "\n            L ")
        .concat(e20 + n2, ",")
        .concat(t2 + r2 - s2 * d2, "\n            A ")
        .concat(d2, ",")
        .concat(d2, ",0,0,")
        .concat(l2, ",")
        .concat(e20 + n2 - c2 * d2, ",")
        .concat(t2 + r2, "\n            L ")
        .concat(e20 + c2 * d2, ",")
        .concat(t2 + r2, "\n            A ")
        .concat(d2, ",")
        .concat(d2, ",0,0,")
        .concat(l2, ",")
        .concat(e20, ",")
        .concat(t2 + r2 - s2 * d2, " Z");
    } else
      o2 = "M "
        .concat(e20, ",")
        .concat(t2, " h ")
        .concat(n2, " v ")
        .concat(r2, " h ")
        .concat(-n2, " Z");
    return o2;
  },
  sy = function (e20, t2) {
    if (!e20 || !t2) return false;
    var n2 = e20.x,
      r2 = e20.y,
      i2 = t2.x,
      o2 = t2.y,
      a2 = t2.width,
      s2 = t2.height;
    if (Math.abs(a2) > 0 && Math.abs(s2) > 0) {
      var c2 = Math.min(i2, i2 + a2),
        l2 = Math.max(i2, i2 + a2),
        u2 = Math.min(o2, o2 + s2),
        f2 = Math.max(o2, o2 + s2);
      return n2 >= c2 && n2 <= l2 && r2 >= u2 && r2 <= f2;
    }
    return false;
  },
  cy = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  ly = function (e20) {
    var t2 = iy(iy({}, cy), e20),
      n2 = useRef(),
      i2 = ty(useState(-1), 2),
      o2 = i2[0],
      a2 = i2[1];
    useEffect(function () {
      if (n2.current && n2.current.getTotalLength)
        try {
          var e21 = n2.current.getTotalLength();
          e21 && a2(e21);
        } catch (t3) {}
    }, []);
    var s2 = t2.x,
      c2 = t2.y,
      l2 = t2.width,
      u2 = t2.height,
      f2 = t2.radius,
      d2 = t2.className,
      p2 = t2.animationEasing,
      h2 = t2.animationDuration,
      y2 = t2.animationBegin,
      m2 = t2.isAnimationActive,
      v2 = t2.isUpdateAnimationActive;
    if (s2 !== +s2 || c2 !== +c2 || l2 !== +l2 || u2 !== +u2 || 0 === l2 || 0 === u2) return null;
    var g2 = Nt("recharts-rectangle", d2);
    return v2
      ? g__default.createElement(
          Zh,
          {
            canBegin: o2 > 0,
            from: { width: l2, height: u2, x: s2, y: c2 },
            to: { width: l2, height: u2, x: s2, y: c2 },
            duration: h2,
            animationEasing: p2,
            isActive: v2,
          },
          function (e21) {
            var i3 = e21.width,
              a3 = e21.height,
              s3 = e21.x,
              c3 = e21.y;
            return g__default.createElement(
              Zh,
              {
                canBegin: o2 > 0,
                from: "0px ".concat(-1 === o2 ? 1 : o2, "px"),
                to: "".concat(o2, "px 0px"),
                attributeName: "strokeDasharray",
                begin: y2,
                duration: h2,
                isActive: m2,
                easing: p2,
              },
              g__default.createElement(
                "path",
                ey({}, Ng$1(t2, true), { className: g2, d: ay(s3, c3, i3, a3, f2), ref: n2 }),
              ),
            );
          },
        )
      : g__default.createElement(
          "path",
          ey({}, Ng$1(t2, true), { className: g2, d: ay(s2, c2, l2, u2, f2) }),
        );
  },
  uy = ["points", "className", "baseLinePoints", "connectNulls"];
function fy() {
  return (
    (fy = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    fy.apply(this, arguments)
  );
}
function dy(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function py(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return hy(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return hy(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return hy(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function hy(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
var yy = function (e20) {
    return e20 && e20.x === +e20.x && e20.y === +e20.y;
  },
  my = function (e20, t2) {
    var n2 = (function () {
      var e21 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t3 = [[]];
      return (
        e21.forEach(function (e22) {
          yy(e22) ? t3[t3.length - 1].push(e22) : t3[t3.length - 1].length > 0 && t3.push([]);
        }),
        yy(e21[0]) && t3[t3.length - 1].push(e21[0]),
        t3[t3.length - 1].length <= 0 && (t3 = t3.slice(0, -1)),
        t3
      );
    })(e20);
    t2 &&
      (n2 = [
        n2.reduce(function (e21, t3) {
          return [].concat(py(e21), py(t3));
        }, []),
      ]);
    var r2 = n2
      .map(function (e21) {
        return e21.reduce(function (e22, t3, n3) {
          return ""
            .concat(e22)
            .concat(0 === n3 ? "M" : "L")
            .concat(t3.x, ",")
            .concat(t3.y);
        }, "");
      })
      .join("");
    return 1 === n2.length ? "".concat(r2, "Z") : r2;
  },
  vy = function (e20) {
    var t2 = e20.points,
      n2 = e20.className,
      i2 = e20.baseLinePoints,
      o2 = e20.connectNulls,
      a2 = dy(e20, uy);
    if (!t2 || !t2.length) return null;
    var s2 = Nt("recharts-polygon", n2);
    if (i2 && i2.length) {
      var c2 = a2.stroke && "none" !== a2.stroke,
        l2 = (function (e21, t3, n3) {
          var r2 = my(e21, n3);
          return ""
            .concat("Z" === r2.slice(-1) ? r2.slice(0, -1) : r2, "L")
            .concat(my(t3.reverse(), n3).slice(1));
        })(t2, i2, o2);
      return g__default.createElement(
        "g",
        { className: s2 },
        g__default.createElement(
          "path",
          fy({}, Ng$1(a2, true), {
            fill: "Z" === l2.slice(-1) ? a2.fill : "none",
            stroke: "none",
            d: l2,
          }),
        ),
        c2
          ? g__default.createElement(
              "path",
              fy({}, Ng$1(a2, true), { fill: "none", d: my(t2, o2) }),
            )
          : null,
        c2
          ? g__default.createElement(
              "path",
              fy({}, Ng$1(a2, true), { fill: "none", d: my(i2, o2) }),
            )
          : null,
      );
    }
    var u2 = my(t2, o2);
    return g__default.createElement(
      "path",
      fy({}, Ng$1(a2, true), {
        fill: "Z" === u2.slice(-1) ? a2.fill : "none",
        className: s2,
        d: u2,
      }),
    );
  };
function gy() {
  return (
    (gy = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    gy.apply(this, arguments)
  );
}
var by = function (e20) {
  var t2 = e20.cx,
    n2 = e20.cy,
    i2 = e20.r,
    o2 = e20.className,
    a2 = Nt("recharts-dot", o2);
  return t2 === +t2 && n2 === +n2 && i2 === +i2
    ? g.createElement(
        "circle",
        gy({}, Ng$1(e20, false), vm$1(e20), { className: a2, cx: t2, cy: n2, r: i2 }),
      )
    : null;
};
function xy(e20) {
  return (
    (xy =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    xy(e20)
  );
}
var wy = ["x", "y", "top", "left", "width", "height", "className"];
function Oy() {
  return (
    (Oy = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Oy.apply(this, arguments)
  );
}
function Sy(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Ay(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != xy(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != xy(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == xy(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function jy(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
var My = function (e20, t2, n2, r2, i2, o2) {
    return "M"
      .concat(e20, ",")
      .concat(i2, "v")
      .concat(r2, "M")
      .concat(o2, ",")
      .concat(t2, "h")
      .concat(n2);
  },
  Py = function (e20) {
    var t2 = e20.x,
      n2 = void 0 === t2 ? 0 : t2,
      i2 = e20.y,
      o2 = void 0 === i2 ? 0 : i2,
      a2 = e20.top,
      s2 = void 0 === a2 ? 0 : a2,
      c2 = e20.left,
      u2 = void 0 === c2 ? 0 : c2,
      f2 = e20.width,
      d2 = void 0 === f2 ? 0 : f2,
      p2 = e20.height,
      h2 = void 0 === p2 ? 0 : p2,
      y2 = e20.className,
      m2 = (function (e21) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2
            ? Sy(Object(n3), true).forEach(function (t4) {
                Ay(e21, t4, n3[t4]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e21, Object.getOwnPropertyDescriptors(n3))
              : Sy(Object(n3)).forEach(function (t4) {
                  Object.defineProperty(e21, t4, Object.getOwnPropertyDescriptor(n3, t4));
                });
        }
        return e21;
      })({ x: n2, y: o2, top: s2, left: u2, width: d2, height: h2 }, jy(e20, wy));
    return em$1(n2) && em$1(o2) && em$1(d2) && em$1(h2) && em$1(s2) && em$1(u2)
      ? g__default.createElement(
          "path",
          Oy({}, Ng$1(m2, true), {
            className: Nt("recharts-cross", y2),
            d: My(n2, o2, d2, h2, s2, u2),
          }),
        )
      : null;
  },
  ky = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function Ey(e20) {
  return (
    (Ey =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Ey(e20)
  );
}
function Ty(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Ny() {
  return (
    (Ny = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Ny.apply(this, arguments)
  );
}
function Iy(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function _y(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Iy(Object(n2), true).forEach(function (t3) {
          Cy(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Iy(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Cy(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Ey(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Ey(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Ey(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
var zy,
  Dy,
  Ry = function (e20, t2, n2, r2) {
    var i2 = "";
    return (
      r2.forEach(function (r3, o2) {
        var a2 = Xf(t2, n2, e20, r3);
        i2 += o2 ? "L ".concat(a2.x, ",").concat(a2.y) : "M ".concat(a2.x, ",").concat(a2.y);
      }),
      (i2 += "Z")
    );
  },
  Ly = function (e20) {
    var t2 = e20.cx,
      n2 = e20.cy,
      i2 = e20.innerRadius,
      o2 = e20.outerRadius,
      a2 = e20.polarAngles,
      s2 = e20.radialLines;
    if (!a2 || !a2.length || !s2) return null;
    var c2 = _y({ stroke: "#ccc" }, Ng$1(e20, false));
    return g__default.createElement(
      "g",
      { className: "recharts-polar-grid-angle" },
      a2.map(function (e21) {
        var r2 = Xf(t2, n2, i2, e21),
          a3 = Xf(t2, n2, o2, e21);
        return g__default.createElement(
          "line",
          Ny({}, c2, { key: "line-".concat(e21), x1: r2.x, y1: r2.y, x2: a3.x, y2: a3.y }),
        );
      }),
    );
  },
  $y = function (e20) {
    var t2 = e20.cx,
      n2 = e20.cy,
      i2 = e20.radius,
      o2 = e20.index,
      a2 = _y(_y({ stroke: "#ccc" }, Ng$1(e20, false)), {}, { fill: "none" });
    return g__default.createElement(
      "circle",
      Ny({}, a2, {
        className: Nt("recharts-polar-grid-concentric-circle", e20.className),
        key: "circle-".concat(o2),
        cx: t2,
        cy: n2,
        r: i2,
      }),
    );
  },
  By = function (e20) {
    var t2 = e20.radius,
      n2 = e20.index,
      i2 = _y(_y({ stroke: "#ccc" }, Ng$1(e20, false)), {}, { fill: "none" });
    return g__default.createElement(
      "path",
      Ny({}, i2, {
        className: Nt("recharts-polar-grid-concentric-polygon", e20.className),
        key: "path-".concat(n2),
        d: Ry(t2, e20.cx, e20.cy, e20.polarAngles),
      }),
    );
  },
  qy = function (e20) {
    var t2 = e20.polarRadius,
      n2 = e20.gridType;
    return t2 && t2.length
      ? g__default.createElement(
          "g",
          { className: "recharts-polar-grid-concentric" },
          t2.map(function (t3, r2) {
            var i2 = r2;
            return "circle" === n2
              ? g__default.createElement($y, Ny({ key: i2 }, e20, { radius: t3, index: r2 }))
              : g__default.createElement(By, Ny({ key: i2 }, e20, { radius: t3, index: r2 }));
          }),
        )
      : null;
  },
  Fy = function (e20) {
    var t2 = e20.cx,
      n2 = void 0 === t2 ? 0 : t2,
      r2 = e20.cy,
      i2 = void 0 === r2 ? 0 : r2,
      o2 = e20.innerRadius,
      a2 = void 0 === o2 ? 0 : o2,
      s2 = e20.outerRadius,
      c2 = void 0 === s2 ? 0 : s2,
      l2 = e20.gridType,
      u2 = void 0 === l2 ? "polygon" : l2,
      f2 = e20.radialLines,
      d2 = void 0 === f2 || f2,
      p2 = Ty(e20, ky);
    return c2 <= 0
      ? null
      : g__default.createElement(
          "g",
          { className: "recharts-polar-grid" },
          g__default.createElement(
            Ly,
            Ny(
              { cx: n2, cy: i2, innerRadius: a2, outerRadius: c2, gridType: u2, radialLines: d2 },
              p2,
            ),
          ),
          g__default.createElement(
            qy,
            Ny(
              { cx: n2, cy: i2, innerRadius: a2, outerRadius: c2, gridType: u2, radialLines: d2 },
              p2,
            ),
          ),
        );
  };
Fy.displayName = "PolarGrid";
var Uy = (function () {
  if (Dy) return zy;
  Dy = 1;
  var e20 = Ol(),
    t2 = Sl(),
    n2 = eb$1();
  return (
    (zy = function (r2, i2) {
      return r2 && r2.length ? e20(r2, n2(i2, 2), t2) : void 0;
    }),
    zy
  );
})();
const Wy = Td$1(Uy);
var Vy, Qy;
var Gy = (function () {
  if (Qy) return Vy;
  Qy = 1;
  var e20 = Ol(),
    t2 = eb$1(),
    n2 = Tl();
  return (
    (Vy = function (r2, i2) {
      return r2 && r2.length ? e20(r2, t2(i2, 2), n2) : void 0;
    }),
    Vy
  );
})();
const Hy = Td$1(Gy);
var Xy = ["cx", "cy", "angle", "ticks", "axisLine"],
  Ky = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Yy(e20) {
  return (
    (Yy =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Yy(e20)
  );
}
function Zy() {
  return (
    (Zy = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Zy.apply(this, arguments)
  );
}
function Jy(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function em(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Jy(Object(n2), true).forEach(function (t3) {
          sm(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Jy(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function tm(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function nm(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, cm(r2.key), r2);
  }
}
function rm(e20, t2, n2) {
  return (
    (t2 = om(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Yy(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, im() ? Reflect.construct(t2, n2 || [], om(e20).constructor) : t2.apply(e20, n2))
  );
}
function im() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (im = function () {
    return !!e20;
  })();
}
function om(e20) {
  return (
    (om = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    om(e20)
  );
}
function am(e20, t2) {
  return (
    (am = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    am(e20, t2)
  );
}
function sm(e20, t2, n2) {
  return (
    (t2 = cm(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function cm(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Yy(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Yy(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Yy(t2) ? t2 : t2 + "";
}
var lm = (function () {
  function e20() {
    return (
      (function (e21, t3) {
        if (!(e21 instanceof t3)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      rm(this, e20, arguments)
    );
  }
  return (
    (function (e21, t3) {
      if ("function" != typeof t3 && null !== t3)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t3 && t3.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t3 && am(e21, t3);
    })(e20, PureComponent),
    (t2 = e20),
    (n2 = [
      {
        key: "getTickValueCoord",
        value: function (e21) {
          var t3 = e21.coordinate,
            n3 = this.props,
            r2 = n3.angle,
            i3 = n3.cx,
            o2 = n3.cy;
          return Xf(i3, o2, t3, r2);
        },
      },
      {
        key: "getTickTextAnchor",
        value: function () {
          var e21;
          switch (this.props.orientation) {
            case "left":
              e21 = "end";
              break;
            case "right":
              e21 = "start";
              break;
            default:
              e21 = "middle";
          }
          return e21;
        },
      },
      {
        key: "getViewBox",
        value: function () {
          var e21 = this.props,
            t3 = e21.cx,
            n3 = e21.cy,
            r2 = e21.angle,
            i3 = e21.ticks,
            o2 = Wy(i3, function (e22) {
              return e22.coordinate || 0;
            });
          return {
            cx: t3,
            cy: n3,
            startAngle: r2,
            endAngle: r2,
            innerRadius:
              Hy(i3, function (e22) {
                return e22.coordinate || 0;
              }).coordinate || 0,
            outerRadius: o2.coordinate || 0,
          };
        },
      },
      {
        key: "renderAxisLine",
        value: function () {
          var e21 = this.props,
            t3 = e21.cx,
            n3 = e21.cy,
            i3 = e21.angle,
            o2 = e21.ticks,
            a2 = e21.axisLine,
            s2 = tm(e21, Xy),
            c2 = o2.reduce(
              function (e22, t4) {
                return [Math.min(e22[0], t4.coordinate), Math.max(e22[1], t4.coordinate)];
              },
              [1 / 0, -1 / 0],
            ),
            l2 = Xf(t3, n3, c2[0], i3),
            u2 = Xf(t3, n3, c2[1], i3),
            f2 = em(
              em(em({}, Ng$1(s2, false)), {}, { fill: "none" }, Ng$1(a2, false)),
              {},
              { x1: l2.x, y1: l2.y, x2: u2.x, y2: u2.y },
            );
          return g__default.createElement(
            "line",
            Zy({ className: "recharts-polar-radius-axis-line" }, f2),
          );
        },
      },
      {
        key: "renderTicks",
        value: function () {
          var t3 = this,
            n3 = this.props,
            i3 = n3.ticks,
            o2 = n3.tick,
            a2 = n3.angle,
            s2 = n3.tickFormatter,
            l2 = n3.stroke,
            u2 = tm(n3, Ky),
            f2 = this.getTickTextAnchor(),
            d2 = Ng$1(u2, false),
            p2 = Ng$1(o2, false),
            h2 = i3.map(function (n4, r2) {
              var i4 = t3.getTickValueCoord(n4),
                u3 = em(
                  em(
                    em(
                      em(
                        {
                          textAnchor: f2,
                          transform: "rotate("
                            .concat(90 - a2, ", ")
                            .concat(i4.x, ", ")
                            .concat(i4.y, ")"),
                        },
                        d2,
                      ),
                      {},
                      { stroke: "none", fill: l2 },
                      p2,
                    ),
                    {},
                    { index: r2 },
                    i4,
                  ),
                  {},
                  { payload: n4 },
                );
              return g__default.createElement(
                nn,
                Zy(
                  {
                    className: Nt("recharts-polar-radius-axis-tick", td(o2)),
                    key: "tick-".concat(n4.coordinate),
                  },
                  ym$1(t3.props, n4, r2),
                ),
                e20.renderTickItem(o2, u3, s2 ? s2(n4.value, r2) : n4.value),
              );
            });
          return g__default.createElement(
            nn,
            { className: "recharts-polar-radius-axis-ticks" },
            h2,
          );
        },
      },
      {
        key: "render",
        value: function () {
          var e21 = this.props,
            t3 = e21.ticks,
            n3 = e21.axisLine,
            r2 = e21.tick;
          return t3 && t3.length
            ? g__default.createElement(
                nn,
                { className: Nt("recharts-polar-radius-axis", this.props.className) },
                n3 && this.renderAxisLine(),
                r2 && this.renderTicks(),
                dd.renderCallByParent(this.props, this.getViewBox()),
              )
            : null;
        },
      },
    ]),
    (i2 = [
      {
        key: "renderTickItem",
        value: function (e21, t3, n3) {
          return g__default.isValidElement(e21)
            ? g__default.cloneElement(e21, t3)
            : zh$1(e21)
              ? e21(t3)
              : g__default.createElement(
                  Ii,
                  Zy({}, t3, { className: "recharts-polar-radius-axis-tick-value" }),
                  n3,
                );
        },
      },
    ]),
    n2 && nm(t2.prototype, n2),
    i2 && nm(t2, i2),
    Object.defineProperty(t2, "prototype", { writable: false }),
    t2
  );
  var t2, n2, i2;
})();
function um(e20) {
  return (
    (um =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    um(e20)
  );
}
function fm() {
  return (
    (fm = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    fm.apply(this, arguments)
  );
}
function dm(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function pm(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? dm(Object(n2), true).forEach(function (t3) {
          bm(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : dm(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function hm(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, xm(r2.key), r2);
  }
}
function ym(e20, t2, n2) {
  return (
    (t2 = vm(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === um(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, mm() ? Reflect.construct(t2, n2 || [], vm(e20).constructor) : t2.apply(e20, n2))
  );
}
function mm() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (mm = function () {
    return !!e20;
  })();
}
function vm(e20) {
  return (
    (vm = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    vm(e20)
  );
}
function gm(e20, t2) {
  return (
    (gm = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    gm(e20, t2)
  );
}
function bm(e20, t2, n2) {
  return (
    (t2 = xm(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function xm(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != um(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != um(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == um(t2) ? t2 : t2 + "";
}
sm(lm, "displayName", "PolarRadiusAxis"),
  sm(lm, "axisType", "radiusAxis"),
  sm(lm, "defaultProps", {
    type: "number",
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: "right",
    stroke: "#ccc",
    axisLine: true,
    tick: true,
    tickCount: 5,
    allowDataOverflow: false,
    scale: "auto",
    allowDuplicatedCategory: true,
  });
var wm,
  Om,
  Sm,
  Am,
  jm = Math.PI / 180,
  Mm = 1e-5,
  Pm = (function () {
    function e20() {
      return (
        (function (e21, t3) {
          if (!(e21 instanceof t3)) throw new TypeError("Cannot call a class as a function");
        })(this, e20),
        ym(this, e20, arguments)
      );
    }
    return (
      (function (e21, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        (e21.prototype = Object.create(t3 && t3.prototype, {
          constructor: { value: e21, writable: true, configurable: true },
        })),
          Object.defineProperty(e21, "prototype", { writable: false }),
          t3 && gm(e21, t3);
      })(e20, PureComponent),
      (t2 = e20),
      (n2 = [
        {
          key: "getTickLineCoord",
          value: function (e21) {
            var t3 = this.props,
              n3 = t3.cx,
              r2 = t3.cy,
              i3 = t3.radius,
              o2 = t3.orientation,
              a2 = t3.tickSize || 8,
              s2 = Xf(n3, r2, i3, e21.coordinate),
              c2 = Xf(n3, r2, i3 + ("inner" === o2 ? -1 : 1) * a2, e21.coordinate);
            return { x1: s2.x, y1: s2.y, x2: c2.x, y2: c2.y };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function (e21) {
            var t3 = this.props.orientation,
              n3 = Math.cos(-e21.coordinate * jm);
            return n3 > Mm
              ? "outer" === t3
                ? "start"
                : "end"
              : n3 < -Mm
                ? "outer" === t3
                  ? "end"
                  : "start"
                : "middle";
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var e21 = this.props,
              t3 = e21.cx,
              n3 = e21.cy,
              i3 = e21.radius,
              o2 = e21.axisLine,
              a2 = e21.axisLineType,
              s2 = pm(pm({}, Ng$1(this.props, false)), {}, { fill: "none" }, Ng$1(o2, false));
            if ("circle" === a2)
              return g__default.createElement(
                by,
                fm({ className: "recharts-polar-angle-axis-line" }, s2, { cx: t3, cy: n3, r: i3 }),
              );
            var c2 = this.props.ticks.map(function (e22) {
              return Xf(t3, n3, i3, e22.coordinate);
            });
            return g__default.createElement(
              vy,
              fm({ className: "recharts-polar-angle-axis-line" }, s2, { points: c2 }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function () {
            var t3 = this,
              n3 = this.props,
              i3 = n3.ticks,
              o2 = n3.tick,
              a2 = n3.tickLine,
              s2 = n3.tickFormatter,
              l2 = n3.stroke,
              u2 = Ng$1(this.props, false),
              f2 = Ng$1(o2, false),
              d2 = pm(pm({}, u2), {}, { fill: "none" }, Ng$1(a2, false)),
              p2 = i3.map(function (n4, r2) {
                var i4 = t3.getTickLineCoord(n4),
                  p3 = pm(
                    pm(
                      pm({ textAnchor: t3.getTickTextAnchor(n4) }, u2),
                      {},
                      { stroke: "none", fill: l2 },
                      f2,
                    ),
                    {},
                    { index: r2, payload: n4, x: i4.x2, y: i4.y2 },
                  );
                return g__default.createElement(
                  nn,
                  fm(
                    {
                      className: Nt("recharts-polar-angle-axis-tick", td(o2)),
                      key: "tick-".concat(n4.coordinate),
                    },
                    ym$1(t3.props, n4, r2),
                  ),
                  a2 &&
                    g__default.createElement(
                      "line",
                      fm({ className: "recharts-polar-angle-axis-tick-line" }, d2, i4),
                    ),
                  o2 && e20.renderTickItem(o2, p3, s2 ? s2(n4.value, r2) : n4.value),
                );
              });
            return g__default.createElement(
              nn,
              { className: "recharts-polar-angle-axis-ticks" },
              p2,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var e21 = this.props,
              t3 = e21.ticks,
              n3 = e21.radius,
              r2 = e21.axisLine;
            return n3 <= 0 || !t3 || !t3.length
              ? null
              : g__default.createElement(
                  nn,
                  { className: Nt("recharts-polar-angle-axis", this.props.className) },
                  r2 && this.renderAxisLine(),
                  this.renderTicks(),
                );
          },
        },
      ]),
      (i2 = [
        {
          key: "renderTickItem",
          value: function (e21, t3, n3) {
            return g__default.isValidElement(e21)
              ? g__default.cloneElement(e21, t3)
              : zh$1(e21)
                ? e21(t3)
                : g__default.createElement(
                    Ii,
                    fm({}, t3, { className: "recharts-polar-angle-axis-tick-value" }),
                    n3,
                  );
          },
        },
      ]),
      n2 && hm(t2.prototype, n2),
      i2 && hm(t2, i2),
      Object.defineProperty(t2, "prototype", { writable: false }),
      t2
    );
    var t2, n2, i2;
  })();
bm(Pm, "displayName", "PolarAngleAxis"),
  bm(Pm, "axisType", "angleAxis"),
  bm(Pm, "defaultProps", {
    type: "category",
    angleAxisId: 0,
    scale: "auto",
    cx: 0,
    cy: 0,
    orientation: "outer",
    axisLine: true,
    tickLine: true,
    tickSize: 8,
    tick: true,
    hide: false,
    allowDuplicatedCategory: true,
  });
var km = (function () {
  if (Am) return Sm;
  Am = 1;
  var e20 = rh$1(),
    t2 = (function () {
      if (Om) return wm;
      Om = 1;
      var e21 = Fy$1()(Object.getPrototypeOf, Object);
      return (wm = e21);
    })(),
    n2 = oh$1(),
    r2 = Function.prototype,
    i2 = Object.prototype,
    o2 = r2.toString,
    a2 = i2.hasOwnProperty,
    s2 = o2.call(Object);
  return (Sm = function (r3) {
    if (!n2(r3) || "[object Object]" != e20(r3)) return false;
    var i3 = t2(r3);
    if (null === i3) return true;
    var c2 = a2.call(i3, "constructor") && i3.constructor;
    return "function" == typeof c2 && c2 instanceof c2 && o2.call(c2) == s2;
  });
})();
const Em = Td$1(km);
var Tm, Nm;
const Im = Td$1(
  (function () {
    if (Nm) return Tm;
    Nm = 1;
    var e20 = rh$1(),
      t2 = oh$1();
    return (Tm = function (n2) {
      return true === n2 || false === n2 || (t2(n2) && "[object Boolean]" == e20(n2));
    });
  })(),
);
function _m(e20) {
  return (
    (_m =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    _m(e20)
  );
}
function Cm() {
  return (
    (Cm = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Cm.apply(this, arguments)
  );
}
function zm(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return Dm(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Dm(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Dm(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function Rm(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Lm(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Rm(Object(n2), true).forEach(function (t3) {
          $m(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Rm(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function $m(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != _m(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != _m(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == _m(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
var Bm,
  qm = function (e20, t2, n2, r2, i2) {
    var o2,
      a2 = n2 - r2;
    return (
      (o2 = "M ".concat(e20, ",").concat(t2)),
      (o2 += "L ".concat(e20 + n2, ",").concat(t2)),
      (o2 += "L ".concat(e20 + n2 - a2 / 2, ",").concat(t2 + i2)),
      (o2 += "L ".concat(e20 + n2 - a2 / 2 - r2, ",").concat(t2 + i2)),
      (o2 += "L ".concat(e20, ",").concat(t2, " Z"))
    );
  },
  Fm = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Um = function (e20) {
    var t2 = Lm(Lm({}, Fm), e20),
      n2 = useRef(),
      i2 = zm(useState(-1), 2),
      o2 = i2[0],
      a2 = i2[1];
    useEffect(function () {
      if (n2.current && n2.current.getTotalLength)
        try {
          var e21 = n2.current.getTotalLength();
          e21 && a2(e21);
        } catch (t3) {}
    }, []);
    var s2 = t2.x,
      c2 = t2.y,
      l2 = t2.upperWidth,
      u2 = t2.lowerWidth,
      f2 = t2.height,
      d2 = t2.className,
      p2 = t2.animationEasing,
      h2 = t2.animationDuration,
      y2 = t2.animationBegin,
      m2 = t2.isUpdateAnimationActive;
    if (
      s2 !== +s2 ||
      c2 !== +c2 ||
      l2 !== +l2 ||
      u2 !== +u2 ||
      f2 !== +f2 ||
      (0 === l2 && 0 === u2) ||
      0 === f2
    )
      return null;
    var v2 = Nt("recharts-trapezoid", d2);
    return m2
      ? g__default.createElement(
          Zh,
          {
            canBegin: o2 > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: f2, x: s2, y: c2 },
            to: { upperWidth: l2, lowerWidth: u2, height: f2, x: s2, y: c2 },
            duration: h2,
            animationEasing: p2,
            isActive: m2,
          },
          function (e21) {
            var i3 = e21.upperWidth,
              a3 = e21.lowerWidth,
              s3 = e21.height,
              c3 = e21.x,
              l3 = e21.y;
            return g__default.createElement(
              Zh,
              {
                canBegin: o2 > 0,
                from: "0px ".concat(-1 === o2 ? 1 : o2, "px"),
                to: "".concat(o2, "px 0px"),
                attributeName: "strokeDasharray",
                begin: y2,
                duration: h2,
                easing: p2,
              },
              g__default.createElement(
                "path",
                Cm({}, Ng$1(t2, true), { className: v2, d: qm(c3, l3, i3, a3, s3), ref: n2 }),
              ),
            );
          },
        )
      : g__default.createElement(
          "g",
          null,
          g__default.createElement(
            "path",
            Cm({}, Ng$1(t2, true), { className: v2, d: qm(s2, c2, l2, u2, f2) }),
          ),
        );
  },
  Wm = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Vm(e20) {
  return (
    (Vm =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Vm(e20)
  );
}
function Qm(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Gm(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Hm(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Gm(Object(n2), true).forEach(function (t3) {
          Xm(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Gm(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Xm(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Vm(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Vm(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Vm(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Km(e20, t2) {
  return Hm(Hm({}, t2), e20);
}
function Ym(e20) {
  var t2 = e20.shapeType,
    n2 = e20.elementProps;
  switch (t2) {
    case "rectangle":
      return g__default.createElement(ly, n2);
    case "trapezoid":
      return g__default.createElement(Um, n2);
    case "sector":
      return g__default.createElement(Ld, n2);
    case "symbols":
      if (
        /* @__PURE__ */ (function (e21) {
          return "symbols" === e21;
        })(t2)
      )
        return g__default.createElement(Or, n2);
      break;
    default:
      return null;
  }
}
function Zm(e20) {
  var t2,
    n2 = e20.option,
    r2 = e20.shapeType,
    i2 = e20.propTransformer,
    o2 = void 0 === i2 ? Km : i2,
    s2 = e20.activeClassName,
    c2 = void 0 === s2 ? "recharts-active-shape" : s2,
    l2 = e20.isActive,
    u2 = Qm(e20, Wm);
  if (isValidElement(n2))
    t2 = cloneElement(
      n2,
      Hm(
        Hm({}, u2),
        (function (e21) {
          return isValidElement(e21) ? e21.props : e21;
        })(n2),
      ),
    );
  else if (zh$1(n2)) t2 = n2(u2);
  else if (Em(n2) && !Im(n2)) {
    var f2 = o2(n2, u2);
    t2 = g__default.createElement(Ym, { shapeType: r2, elementProps: f2 });
  } else {
    var d2 = u2;
    t2 = g__default.createElement(Ym, { shapeType: r2, elementProps: d2 });
  }
  return l2 ? g__default.createElement(nn, { className: c2 }, t2) : t2;
}
function Jm(e20, t2) {
  return null != t2 && "trapezoids" in e20.props;
}
function ev(e20, t2) {
  return null != t2 && "sectors" in e20.props;
}
function tv(e20, t2) {
  return null != t2 && "points" in e20.props;
}
function nv(e20, t2) {
  var n2,
    r2,
    i2 =
      e20.x === (null == t2 || null === (n2 = t2.labelViewBox) || void 0 === n2 ? void 0 : n2.x) ||
      e20.x === t2.x,
    o2 =
      e20.y === (null == t2 || null === (r2 = t2.labelViewBox) || void 0 === r2 ? void 0 : r2.y) ||
      e20.y === t2.y;
  return i2 && o2;
}
function rv(e20, t2) {
  var n2 = e20.endAngle === t2.endAngle,
    r2 = e20.startAngle === t2.startAngle;
  return n2 && r2;
}
function iv(e20, t2) {
  var n2 = e20.x === t2.x,
    r2 = e20.y === t2.y,
    i2 = e20.z === t2.z;
  return n2 && r2 && i2;
}
function ov(e20) {
  var t2 = e20.activeTooltipItem,
    n2 = e20.graphicalItem,
    r2 = e20.itemData,
    i2 = (function (e21, t3) {
      var n3;
      return (
        Jm(e21, t3)
          ? (n3 = "trapezoids")
          : ev(e21, t3)
            ? (n3 = "sectors")
            : tv(e21, t3) && (n3 = "points"),
        n3
      );
    })(n2, t2),
    o2 = (function (e21, t3) {
      var n3, r3;
      return Jm(e21, t3)
        ? null === (n3 = t3.tooltipPayload) ||
          void 0 === n3 ||
          null === (n3 = n3[0]) ||
          void 0 === n3 ||
          null === (n3 = n3.payload) ||
          void 0 === n3
          ? void 0
          : n3.payload
        : ev(e21, t3)
          ? null === (r3 = t3.tooltipPayload) ||
            void 0 === r3 ||
            null === (r3 = r3[0]) ||
            void 0 === r3 ||
            null === (r3 = r3.payload) ||
            void 0 === r3
            ? void 0
            : r3.payload
          : tv(e21, t3)
            ? t3.payload
            : {};
    })(n2, t2),
    a2 = r2.filter(function (e21, r3) {
      var a3 = ql(o2, e21),
        s2 = n2.props[i2].filter(function (e22) {
          var r4 = (function (e23, t3) {
            var n3;
            return Jm(e23, t3) ? (n3 = nv) : ev(e23, t3) ? (n3 = rv) : tv(e23, t3) && (n3 = iv), n3;
          })(n2, t2);
          return r4(e22, t2);
        }),
        c2 = n2.props[i2].indexOf(s2[s2.length - 1]);
      return a3 && r3 === c2;
    });
  return r2.indexOf(a2[a2.length - 1]);
}
function av(e20) {
  return (
    (av =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    av(e20)
  );
}
function sv() {
  return (
    (sv = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    sv.apply(this, arguments)
  );
}
function cv(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function lv(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? cv(Object(n2), true).forEach(function (t3) {
          yv(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : cv(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function uv(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, mv(r2.key), r2);
  }
}
function fv(e20, t2, n2) {
  return (
    (t2 = pv(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === av(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, dv() ? Reflect.construct(t2, n2 || [], pv(e20).constructor) : t2.apply(e20, n2))
  );
}
function dv() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (dv = function () {
    return !!e20;
  })();
}
function pv(e20) {
  return (
    (pv = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    pv(e20)
  );
}
function hv(e20, t2) {
  return (
    (hv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    hv(e20, t2)
  );
}
function yv(e20, t2, n2) {
  return (
    (t2 = mv(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function mv(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != av(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != av(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == av(t2) ? t2 : t2 + "";
}
var vv,
  gv,
  bv,
  xv,
  wv = (function () {
    function e20(t3) {
      var n3;
      return (
        (function (e21, t4) {
          if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
        })(this, e20),
        yv((n3 = fv(this, e20, [t3])), "pieRef", null),
        yv(n3, "sectorRefs", []),
        yv(n3, "id", om$1("recharts-pie-")),
        yv(n3, "handleAnimationEnd", function () {
          var e21 = n3.props.onAnimationEnd;
          n3.setState({ isAnimationFinished: true }), zh$1(e21) && e21();
        }),
        yv(n3, "handleAnimationStart", function () {
          var e21 = n3.props.onAnimationStart;
          n3.setState({ isAnimationFinished: false }), zh$1(e21) && e21();
        }),
        (n3.state = {
          isAnimationFinished: !t3.isAnimationActive,
          prevIsAnimationActive: t3.isAnimationActive,
          prevAnimationId: t3.animationId,
          sectorToFocus: 0,
        }),
        n3
      );
    }
    return (
      (function (e21, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        (e21.prototype = Object.create(t3 && t3.prototype, {
          constructor: { value: e21, writable: true, configurable: true },
        })),
          Object.defineProperty(e21, "prototype", { writable: false }),
          t3 && hv(e21, t3);
      })(e20, PureComponent),
      (t2 = e20),
      (n2 = [
        {
          key: "isActiveIndex",
          value: function (e21) {
            var t3 = this.props.activeIndex;
            return Array.isArray(t3) ? -1 !== t3.indexOf(e21) : e21 === t3;
          },
        },
        {
          key: "hasActiveIndex",
          value: function () {
            var e21 = this.props.activeIndex;
            return Array.isArray(e21) ? 0 !== e21.length : e21 || 0 === e21;
          },
        },
        {
          key: "renderLabels",
          value: function (t3) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var n3 = this.props,
              i3 = n3.label,
              o2 = n3.labelLine,
              a2 = n3.dataKey,
              s2 = n3.valueKey,
              c2 = Ng$1(this.props, false),
              l2 = Ng$1(i3, false),
              u2 = Ng$1(o2, false),
              f2 = (i3 && i3.offsetRadius) || 20,
              d2 = t3.map(function (t4, n4) {
                var r2 = (t4.startAngle + t4.endAngle) / 2,
                  d3 = Xf(t4.cx, t4.cy, t4.outerRadius + f2, r2),
                  h2 = lv(
                    lv(lv(lv({}, c2), t4), {}, { stroke: "none" }, l2),
                    {},
                    { index: n4, textAnchor: e20.getTextAnchor(d3.x, t4.cx) },
                    d3,
                  ),
                  y2 = lv(
                    lv(lv(lv({}, c2), t4), {}, { fill: "none", stroke: t4.fill }, u2),
                    {},
                    { index: n4, points: [Xf(t4.cx, t4.cy, t4.outerRadius, r2), d3] },
                  ),
                  m2 = a2;
                return (
                  Th$1(a2) && Th$1(s2) ? (m2 = "value") : Th$1(a2) && (m2 = s2),
                  g__default.createElement(
                    nn,
                    {
                      key: "label-"
                        .concat(t4.startAngle, "-")
                        .concat(t4.endAngle, "-")
                        .concat(t4.midAngle, "-")
                        .concat(n4),
                    },
                    o2 && e20.renderLabelLineItem(o2, y2, "line"),
                    e20.renderLabelItem(i3, h2, mf(t4, m2)),
                  )
                );
              });
            return g__default.createElement(nn, { className: "recharts-pie-labels" }, d2);
          },
        },
        {
          key: "renderSectorsStatically",
          value: function (e21) {
            var t3 = this,
              n3 = this.props,
              r2 = n3.activeShape,
              i3 = n3.blendStroke,
              o2 = n3.inactiveShape;
            return e21.map(function (n4, a2) {
              if (
                0 === (null == n4 ? void 0 : n4.startAngle) &&
                0 === (null == n4 ? void 0 : n4.endAngle) &&
                1 !== e21.length
              )
                return null;
              var s2 = t3.isActiveIndex(a2),
                l2 = o2 && t3.hasActiveIndex() ? o2 : null,
                u2 = s2 ? r2 : l2,
                f2 = lv(lv({}, n4), {}, { stroke: i3 ? n4.fill : n4.stroke, tabIndex: -1 });
              return g__default.createElement(
                nn,
                sv(
                  {
                    ref: function (e22) {
                      e22 && !t3.sectorRefs.includes(e22) && t3.sectorRefs.push(e22);
                    },
                    tabIndex: -1,
                    className: "recharts-pie-sector",
                  },
                  ym$1(t3.props, n4, a2),
                  {
                    key: "sector-"
                      .concat(null == n4 ? void 0 : n4.startAngle, "-")
                      .concat(null == n4 ? void 0 : n4.endAngle, "-")
                      .concat(n4.midAngle, "-")
                      .concat(a2),
                  },
                ),
                g__default.createElement(
                  Zm,
                  sv({ option: u2, isActive: s2, shapeType: "sector" }, f2),
                ),
              );
            });
          },
        },
        {
          key: "renderSectorsWithAnimation",
          value: function () {
            var e21 = this,
              t3 = this.props,
              n3 = t3.sectors,
              r2 = t3.isAnimationActive,
              i3 = t3.animationBegin,
              o2 = t3.animationDuration,
              a2 = t3.animationEasing,
              s2 = t3.animationId,
              c2 = this.state,
              l2 = c2.prevSectors,
              u2 = c2.prevIsAnimationActive;
            return g__default.createElement(
              Zh,
              {
                begin: i3,
                duration: o2,
                isActive: r2,
                easing: a2,
                from: { t: 0 },
                to: { t: 1 },
                key: "pie-".concat(s2, "-").concat(u2),
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd,
              },
              function (t4) {
                var r3 = t4.t,
                  i4 = [],
                  o3 = (n3 && n3[0]).startAngle;
                return (
                  n3.forEach(function (e22, t5) {
                    var n4 = l2 && l2[t5],
                      a3 = t5 > 0 ? Ah$1(e22, "paddingAngle", 0) : 0;
                    if (n4) {
                      var s3 = lm$1(n4.endAngle - n4.startAngle, e22.endAngle - e22.startAngle),
                        c3 = lv(
                          lv({}, e22),
                          {},
                          { startAngle: o3 + a3, endAngle: o3 + s3(r3) + a3 },
                        );
                      i4.push(c3), (o3 = c3.endAngle);
                    } else {
                      var u3 = e22.endAngle,
                        f2 = e22.startAngle,
                        d2 = lm$1(0, u3 - f2)(r3),
                        p2 = lv(lv({}, e22), {}, { startAngle: o3 + a3, endAngle: o3 + d2 + a3 });
                      i4.push(p2), (o3 = p2.endAngle);
                    }
                  }),
                  g__default.createElement(nn, null, e21.renderSectorsStatically(i4))
                );
              },
            );
          },
        },
        {
          key: "attachKeyboardHandlers",
          value: function (e21) {
            var t3 = this;
            e21.onkeydown = function (e22) {
              if (!e22.altKey)
                switch (e22.key) {
                  case "ArrowLeft":
                    var n3 = ++t3.state.sectorToFocus % t3.sectorRefs.length;
                    t3.sectorRefs[n3].focus(), t3.setState({ sectorToFocus: n3 });
                    break;
                  case "ArrowRight":
                    var r2 =
                      --t3.state.sectorToFocus < 0
                        ? t3.sectorRefs.length - 1
                        : t3.state.sectorToFocus % t3.sectorRefs.length;
                    t3.sectorRefs[r2].focus(), t3.setState({ sectorToFocus: r2 });
                    break;
                  case "Escape":
                    t3.sectorRefs[t3.state.sectorToFocus].blur(), t3.setState({ sectorToFocus: 0 });
                }
            };
          },
        },
        {
          key: "renderSectors",
          value: function () {
            var e21 = this.props,
              t3 = e21.sectors,
              n3 = e21.isAnimationActive,
              r2 = this.state.prevSectors;
            return !(n3 && t3 && t3.length) || (r2 && ql(r2, t3))
              ? this.renderSectorsStatically(t3)
              : this.renderSectorsWithAnimation();
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.pieRef && this.attachKeyboardHandlers(this.pieRef);
          },
        },
        {
          key: "render",
          value: function () {
            var e21 = this,
              t3 = this.props,
              n3 = t3.hide,
              r2 = t3.sectors,
              i3 = t3.className,
              o2 = t3.label,
              a2 = t3.cx,
              s2 = t3.cy,
              c2 = t3.innerRadius,
              u2 = t3.outerRadius,
              f2 = t3.isAnimationActive,
              d2 = this.state.isAnimationFinished;
            if (n3 || !r2 || !r2.length || !em$1(a2) || !em$1(s2) || !em$1(c2) || !em$1(u2))
              return null;
            var p2 = Nt("recharts-pie", i3);
            return g__default.createElement(
              nn,
              {
                tabIndex: this.props.rootTabIndex,
                className: p2,
                ref: function (t4) {
                  e21.pieRef = t4;
                },
              },
              this.renderSectors(),
              o2 && this.renderLabels(r2),
              dd.renderCallByParent(this.props, null, false),
              (!f2 || d2) && Ed.renderCallByParent(this.props, r2, false),
            );
          },
        },
      ]),
      (i2 = [
        {
          key: "getDerivedStateFromProps",
          value: function (e21, t3) {
            return t3.prevIsAnimationActive !== e21.isAnimationActive
              ? {
                  prevIsAnimationActive: e21.isAnimationActive,
                  prevAnimationId: e21.animationId,
                  curSectors: e21.sectors,
                  prevSectors: [],
                  isAnimationFinished: true,
                }
              : e21.isAnimationActive && e21.animationId !== t3.prevAnimationId
                ? {
                    prevAnimationId: e21.animationId,
                    curSectors: e21.sectors,
                    prevSectors: t3.curSectors,
                    isAnimationFinished: true,
                  }
                : e21.sectors !== t3.curSectors
                  ? { curSectors: e21.sectors, isAnimationFinished: true }
                  : null;
          },
        },
        {
          key: "getTextAnchor",
          value: function (e21, t3) {
            return e21 > t3 ? "start" : e21 < t3 ? "end" : "middle";
          },
        },
        {
          key: "renderLabelLineItem",
          value: function (e21, t3, n3) {
            if (g__default.isValidElement(e21)) return g__default.cloneElement(e21, t3);
            if (zh$1(e21)) return e21(t3);
            var r2 = Nt("recharts-pie-label-line", "boolean" != typeof e21 ? e21.className : "");
            return g__default.createElement(
              Kd,
              sv({}, t3, { key: n3, type: "linear", className: r2 }),
            );
          },
        },
        {
          key: "renderLabelItem",
          value: function (e21, t3, n3) {
            if (g__default.isValidElement(e21)) return g__default.cloneElement(e21, t3);
            var r2 = n3;
            if (zh$1(e21) && ((r2 = e21(t3)), g__default.isValidElement(r2))) return r2;
            var i3 = Nt(
              "recharts-pie-label-text",
              "boolean" == typeof e21 || zh$1(e21) ? "" : e21.className,
            );
            return g__default.createElement(
              Ii,
              sv({}, t3, { alignmentBaseline: "middle", className: i3 }),
              r2,
            );
          },
        },
      ]),
      n2 && uv(t2.prototype, n2),
      i2 && uv(t2, i2),
      Object.defineProperty(t2, "prototype", { writable: false }),
      t2
    );
    var t2, n2, i2;
  })();
(Bm = wv),
  yv(wv, "displayName", "Pie"),
  yv(wv, "defaultProps", {
    stroke: "#fff",
    fill: "#808080",
    legendType: "rect",
    cx: "50%",
    cy: "50%",
    startAngle: 0,
    endAngle: 360,
    innerRadius: 0,
    outerRadius: "80%",
    paddingAngle: 0,
    labelLine: true,
    hide: false,
    minAngle: 0,
    isAnimationActive: !Lw$1.isSsr,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    nameKey: "name",
    blendStroke: false,
    rootTabIndex: 0,
  }),
  yv(wv, "parseDeltaAngle", function (e20, t2) {
    return Jh$1(t2 - e20) * Math.min(Math.abs(t2 - e20), 360);
  }),
  yv(wv, "getRealPieData", function (e20) {
    var t2 = e20.data,
      n2 = e20.children,
      i2 = Ng$1(e20, false),
      o2 = Am$1(n2, Xr);
    return t2 && t2.length
      ? t2.map(function (e21, t3) {
          return lv(lv(lv({ payload: e21 }, i2), e21), o2 && o2[t3] && o2[t3].props);
        })
      : o2 && o2.length
        ? o2.map(function (e21) {
            return lv(lv({}, i2), e21.props);
          })
        : [];
  }),
  yv(wv, "parseCoordinateOfPie", function (e20, t2) {
    var n2 = t2.top,
      r2 = t2.left,
      i2 = t2.width,
      o2 = t2.height,
      a2 = Kf(i2, o2);
    return {
      cx: r2 + am$1(e20.cx, i2, i2 / 2),
      cy: n2 + am$1(e20.cy, o2, o2 / 2),
      innerRadius: am$1(e20.innerRadius, a2, 0),
      outerRadius: am$1(e20.outerRadius, a2, 0.8 * a2),
      maxRadius: e20.maxRadius || Math.sqrt(i2 * i2 + o2 * o2) / 2,
    };
  }),
  yv(wv, "getComposedData", function (e20) {
    var t2 = e20.item,
      n2 = e20.offset,
      r2 = void 0 !== t2.type.defaultProps ? lv(lv({}, t2.type.defaultProps), t2.props) : t2.props,
      i2 = Bm.getRealPieData(r2);
    if (!i2 || !i2.length) return null;
    var o2 = r2.cornerRadius,
      a2 = r2.startAngle,
      c2 = r2.endAngle,
      u2 = r2.paddingAngle,
      f2 = r2.dataKey,
      d2 = r2.nameKey,
      h2 = r2.valueKey,
      y2 = r2.tooltipType,
      m2 = Math.abs(r2.minAngle),
      v2 = Bm.parseCoordinateOfPie(r2, n2),
      g2 = Bm.parseDeltaAngle(a2, c2),
      b2 = Math.abs(g2),
      x2 = f2;
    Th$1(f2) && Th$1(h2)
      ? (Dg$1(
          false,
          'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
        ),
        (x2 = "value"))
      : Th$1(f2) &&
        (Dg$1(
          false,
          'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
        ),
        (x2 = h2));
    var w2,
      O2,
      S2 = i2.filter(function (e21) {
        return 0 !== mf(e21, x2, 0);
      }).length,
      A2 = b2 - S2 * m2 - (b2 >= 360 ? S2 : S2 - 1) * u2,
      j2 = i2.reduce(function (e21, t3) {
        var n3 = mf(t3, x2, 0);
        return e21 + (em$1(n3) ? n3 : 0);
      }, 0);
    j2 > 0 &&
      (w2 = i2.map(function (e21, t3) {
        var n3,
          r3 = mf(e21, x2, 0),
          i3 = mf(e21, d2, t3),
          s2 = (em$1(r3) ? r3 : 0) / j2,
          c3 =
            (n3 = t3 ? O2.endAngle + Jh$1(g2) * u2 * (0 !== r3 ? 1 : 0) : a2) +
            Jh$1(g2) * ((0 !== r3 ? m2 : 0) + s2 * A2),
          f3 = (n3 + c3) / 2,
          p2 = (v2.innerRadius + v2.outerRadius) / 2,
          h3 = [{ name: i3, value: r3, payload: e21, dataKey: x2, type: y2 }],
          b3 = Xf(v2.cx, v2.cy, p2, f3);
        return (O2 = lv(
          lv(
            lv(
              {
                percent: s2,
                cornerRadius: o2,
                name: i3,
                tooltipPayload: h3,
                midAngle: f3,
                middleRadius: p2,
                tooltipPosition: b3,
              },
              e21,
            ),
            v2,
          ),
          {},
          {
            value: mf(e21, x2),
            startAngle: n3,
            endAngle: c3,
            payload: e21,
            paddingAngle: Jh$1(g2) * u2,
          },
        ));
      }));
    return lv(lv({}, v2), {}, { sectors: w2, data: i2 });
  });
var Ov = xv
  ? bv
  : ((xv = 1),
    gv ||
      ((gv = 1),
      (vv = function (e20) {
        return e20 && e20.length ? e20[0] : void 0;
      })),
    (bv = vv));
const Sv = Td$1(Ov);
var Av = ["key"];
function jv(e20) {
  return (
    (jv =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    jv(e20)
  );
}
function Mv(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Pv() {
  return (
    (Pv = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Pv.apply(this, arguments)
  );
}
function kv(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Ev(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? kv(Object(n2), true).forEach(function (t3) {
          zv(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : kv(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Tv(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, Dv(r2.key), r2);
  }
}
function Nv(e20, t2, n2) {
  return (
    (t2 = _v(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === jv(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Iv() ? Reflect.construct(t2, n2 || [], _v(e20).constructor) : t2.apply(e20, n2))
  );
}
function Iv() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Iv = function () {
    return !!e20;
  })();
}
function _v(e20) {
  return (
    (_v = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    _v(e20)
  );
}
function Cv(e20, t2) {
  return (
    (Cv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Cv(e20, t2)
  );
}
function zv(e20, t2, n2) {
  return (
    (t2 = Dv(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Dv(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != jv(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != jv(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == jv(t2) ? t2 : t2 + "";
}
var Rv,
  Lv,
  $v,
  Bv,
  qv,
  Fv,
  Uv,
  Wv,
  Vv = (function () {
    function e20() {
      var t3;
      !(function (e21, t4) {
        if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
      })(this, e20);
      for (var n3 = arguments.length, r2 = new Array(n3), i3 = 0; i3 < n3; i3++)
        r2[i3] = arguments[i3];
      return (
        zv((t3 = Nv(this, e20, [].concat(r2))), "state", { isAnimationFinished: false }),
        zv(t3, "handleAnimationEnd", function () {
          var e21 = t3.props.onAnimationEnd;
          t3.setState({ isAnimationFinished: true }), zh$1(e21) && e21();
        }),
        zv(t3, "handleAnimationStart", function () {
          var e21 = t3.props.onAnimationStart;
          t3.setState({ isAnimationFinished: false }), zh$1(e21) && e21();
        }),
        zv(t3, "handleMouseEnter", function (e21) {
          var n4 = t3.props.onMouseEnter;
          n4 && n4(t3.props, e21);
        }),
        zv(t3, "handleMouseLeave", function (e21) {
          var n4 = t3.props.onMouseLeave;
          n4 && n4(t3.props, e21);
        }),
        t3
      );
    }
    return (
      (function (e21, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        (e21.prototype = Object.create(t3 && t3.prototype, {
          constructor: { value: e21, writable: true, configurable: true },
        })),
          Object.defineProperty(e21, "prototype", { writable: false }),
          t3 && Cv(e21, t3);
      })(e20, PureComponent),
      (t2 = e20),
      (i2 = [
        {
          key: "getDerivedStateFromProps",
          value: function (e21, t3) {
            return e21.animationId !== t3.prevAnimationId
              ? {
                  prevAnimationId: e21.animationId,
                  curPoints: e21.points,
                  prevPoints: t3.curPoints,
                }
              : e21.points !== t3.curPoints
                ? { curPoints: e21.points }
                : null;
          },
        },
        {
          key: "renderDotItem",
          value: function (e21, t3) {
            var n3;
            if (g__default.isValidElement(e21)) n3 = g__default.cloneElement(e21, t3);
            else if (zh$1(e21)) n3 = e21(t3);
            else {
              var r2 = t3.key,
                i3 = Mv(t3, Av);
              n3 = g__default.createElement(
                by,
                Pv({}, i3, {
                  key: r2,
                  className: Nt("recharts-radar-dot", "boolean" != typeof e21 ? e21.className : ""),
                }),
              );
            }
            return n3;
          },
        },
      ]),
      (n2 = [
        {
          key: "renderDots",
          value: function (t3) {
            var n3 = this.props,
              i3 = n3.dot,
              o2 = n3.dataKey,
              a2 = Ng$1(this.props, false),
              s2 = Ng$1(i3, true),
              c2 = t3.map(function (t4, n4) {
                var r2 = Ev(
                  Ev(Ev({ key: "dot-".concat(n4), r: 3 }, a2), s2),
                  {},
                  { dataKey: o2, cx: t4.x, cy: t4.y, index: n4, payload: t4 },
                );
                return e20.renderDotItem(i3, r2);
              });
            return g__default.createElement(nn, { className: "recharts-radar-dots" }, c2);
          },
        },
        {
          key: "renderPolygonStatically",
          value: function (e21) {
            var t3,
              n3 = this.props,
              i3 = n3.shape,
              o2 = n3.dot,
              s2 = n3.isRange,
              c2 = n3.baseLinePoints,
              l2 = n3.connectNulls;
            return (
              (t3 = g__default.isValidElement(i3)
                ? g__default.cloneElement(i3, Ev(Ev({}, this.props), {}, { points: e21 }))
                : zh$1(i3)
                  ? i3(Ev(Ev({}, this.props), {}, { points: e21 }))
                  : g__default.createElement(
                      vy,
                      Pv({}, Ng$1(this.props, true), {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        points: e21,
                        baseLinePoints: s2 ? c2 : null,
                        connectNulls: l2,
                      }),
                    )),
              g__default.createElement(
                nn,
                { className: "recharts-radar-polygon" },
                t3,
                o2 ? this.renderDots(e21) : null,
              )
            );
          },
        },
        {
          key: "renderPolygonWithAnimation",
          value: function () {
            var e21 = this,
              t3 = this.props,
              n3 = t3.points,
              r2 = t3.isAnimationActive,
              i3 = t3.animationBegin,
              o2 = t3.animationDuration,
              a2 = t3.animationEasing,
              s2 = t3.animationId,
              c2 = this.state.prevPoints;
            return g__default.createElement(
              Zh,
              {
                begin: i3,
                duration: o2,
                isActive: r2,
                easing: a2,
                from: { t: 0 },
                to: { t: 1 },
                key: "radar-".concat(s2),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (t4) {
                var r3 = t4.t,
                  i4 = c2 && c2.length / n3.length,
                  o3 = n3.map(function (e22, t5) {
                    var n4 = c2 && c2[Math.floor(t5 * i4)];
                    if (n4) {
                      var o4 = lm$1(n4.x, e22.x),
                        a3 = lm$1(n4.y, e22.y);
                      return Ev(Ev({}, e22), {}, { x: o4(r3), y: a3(r3) });
                    }
                    var s3 = lm$1(e22.cx, e22.x),
                      l2 = lm$1(e22.cy, e22.y);
                    return Ev(Ev({}, e22), {}, { x: s3(r3), y: l2(r3) });
                  });
                return e21.renderPolygonStatically(o3);
              },
            );
          },
        },
        {
          key: "renderPolygon",
          value: function () {
            var e21 = this.props,
              t3 = e21.points,
              n3 = e21.isAnimationActive,
              r2 = e21.isRange,
              i3 = this.state.prevPoints;
            return !(n3 && t3 && t3.length) || r2 || (i3 && ql(i3, t3))
              ? this.renderPolygonStatically(t3)
              : this.renderPolygonWithAnimation();
          },
        },
        {
          key: "render",
          value: function () {
            var e21 = this.props,
              t3 = e21.hide,
              n3 = e21.className,
              r2 = e21.points,
              i3 = e21.isAnimationActive;
            if (t3 || !r2 || !r2.length) return null;
            var o2 = this.state.isAnimationFinished,
              a2 = Nt("recharts-radar", n3);
            return g__default.createElement(
              nn,
              { className: a2 },
              this.renderPolygon(),
              (!i3 || o2) && Ed.renderCallByParent(this.props, r2),
            );
          },
        },
      ]) && Tv(t2.prototype, n2),
      i2 && Tv(t2, i2),
      Object.defineProperty(t2, "prototype", { writable: false }),
      t2
    );
    var t2, n2, i2;
  })();
function Qv() {
  if (Bv) return $v;
  Bv = 1;
  var e20 = cx$1(),
    t2 = 1 / 0;
  return ($v = function (n2) {
    return n2
      ? (n2 = e20(n2)) === t2 || n2 === -1 / 0
        ? 17976931348623157e292 * (n2 < 0 ? -1 : 1)
        : n2 == n2
          ? n2
          : 0
      : 0 === n2
        ? n2
        : 0;
  });
}
function Gv() {
  if (Fv) return qv;
  Fv = 1;
  var e20 = (function () {
      if (Lv) return Rv;
      Lv = 1;
      var e21 = Math.ceil,
        t3 = Math.max;
      return (Rv = function (n3, r2, i2, o2) {
        for (var a2 = -1, s2 = t3(e21((r2 - n3) / (i2 || 1)), 0), c2 = Array(s2); s2--; )
          (c2[o2 ? s2 : ++a2] = n3), (n3 += i2);
        return c2;
      });
    })(),
    t2 = lw$1(),
    n2 = Qv();
  return (qv = function (r2) {
    return function (i2, o2, a2) {
      return (
        a2 && "number" != typeof a2 && t2(i2, o2, a2) && (o2 = a2 = void 0),
        (i2 = n2(i2)),
        void 0 === o2 ? ((o2 = i2), (i2 = 0)) : (o2 = n2(o2)),
        (a2 = void 0 === a2 ? (i2 < o2 ? 1 : -1) : n2(a2)),
        e20(i2, o2, a2, r2)
      );
    };
  });
}
zv(Vv, "displayName", "Radar"),
  zv(Vv, "defaultProps", {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: false,
    activeDot: true,
    dot: false,
    legendType: "rect",
    isAnimationActive: !Lw$1.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  }),
  zv(Vv, "getComposedData", function (e20) {
    var t2 = e20.radiusAxis,
      n2 = e20.angleAxis,
      r2 = e20.displayedData,
      i2 = e20.dataKey,
      o2 = e20.bandSize,
      a2 = n2.cx,
      s2 = n2.cy,
      c2 = false,
      l2 = [],
      u2 = "number" !== n2.type && null != o2 ? o2 : 0;
    r2.forEach(function (e21, r3) {
      var o3 = mf(e21, n2.dataKey, r3),
        f3 = mf(e21, i2),
        d2 = n2.scale(o3) + u2,
        h2 = Array.isArray(f3) ? vd(f3) : f3,
        y2 = Th$1(h2) ? void 0 : t2.scale(h2);
      Array.isArray(f3) && f3.length >= 2 && (c2 = true),
        l2.push(
          Ev(
            Ev({}, Xf(a2, s2, y2, d2)),
            {},
            { name: o3, value: f3, cx: a2, cy: s2, radius: y2, angle: d2, payload: e21 },
          ),
        );
    });
    var f2 = [];
    return (
      c2 &&
        l2.forEach(function (e21) {
          if (Array.isArray(e21.value)) {
            var n3 = Sv(e21.value),
              r3 = Th$1(n3) ? void 0 : t2.scale(n3);
            f2.push(Ev(Ev({}, e21), {}, { radius: r3 }, Xf(a2, s2, r3, e21.angle)));
          } else f2.push(e21);
        }),
      { points: l2, isRange: c2, baseLinePoints: f2 }
    );
  });
var Hv = (function () {
  if (Wv) return Uv;
  Wv = 1;
  var e20 = Gv()();
  return (Uv = e20);
})();
const Xv = Td$1(Hv);
function Kv(e20) {
  return (
    (Kv =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Kv(e20)
  );
}
function Yv(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Zv(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Yv(Object(n2), true).forEach(function (t3) {
          Jv(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Yv(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Jv(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Kv(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Kv(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Kv(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
var eg = ["Webkit", "Moz", "O", "ms"];
function tg(e20) {
  return (
    (tg =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    tg(e20)
  );
}
function ng() {
  return (
    (ng = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    ng.apply(this, arguments)
  );
}
function rg(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function ig(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? rg(Object(n2), true).forEach(function (t3) {
          ug(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : rg(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function og(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, fg(r2.key), r2);
  }
}
function ag(e20, t2, n2) {
  return (
    (t2 = cg(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === tg(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, sg() ? Reflect.construct(t2, n2 || [], cg(e20).constructor) : t2.apply(e20, n2))
  );
}
function sg() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (sg = function () {
    return !!e20;
  })();
}
function cg(e20) {
  return (
    (cg = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    cg(e20)
  );
}
function lg(e20, t2) {
  return (
    (lg = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    lg(e20, t2)
  );
}
function ug(e20, t2, n2) {
  return (
    (t2 = fg(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function fg(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != tg(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != tg(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == tg(t2) ? t2 : t2 + "";
}
var dg,
  pg,
  hg,
  yg,
  mg = function (e20) {
    return e20.changedTouches && !!e20.changedTouches.length;
  },
  vg = (function () {
    function e20(t3) {
      var n3;
      return (
        (function (e21, t4) {
          if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
        })(this, e20),
        ug((n3 = ag(this, e20, [t3])), "handleDrag", function (e21) {
          n3.leaveTimer && (clearTimeout(n3.leaveTimer), (n3.leaveTimer = null)),
            n3.state.isTravellerMoving
              ? n3.handleTravellerMove(e21)
              : n3.state.isSlideMoving && n3.handleSlideDrag(e21);
        }),
        ug(n3, "handleTouchMove", function (e21) {
          null != e21.changedTouches &&
            e21.changedTouches.length > 0 &&
            n3.handleDrag(e21.changedTouches[0]);
        }),
        ug(n3, "handleDragEnd", function () {
          n3.setState({ isTravellerMoving: false, isSlideMoving: false }, function () {
            var e21 = n3.props,
              t4 = e21.endIndex,
              r2 = e21.onDragEnd,
              i3 = e21.startIndex;
            null == r2 || r2({ endIndex: t4, startIndex: i3 });
          }),
            n3.detachDragEndListener();
        }),
        ug(n3, "handleLeaveWrapper", function () {
          (n3.state.isTravellerMoving || n3.state.isSlideMoving) &&
            (n3.leaveTimer = window.setTimeout(n3.handleDragEnd, n3.props.leaveTimeOut));
        }),
        ug(n3, "handleEnterSlideOrTraveller", function () {
          n3.setState({ isTextActive: true });
        }),
        ug(n3, "handleLeaveSlideOrTraveller", function () {
          n3.setState({ isTextActive: false });
        }),
        ug(n3, "handleSlideDragStart", function (e21) {
          var t4 = mg(e21) ? e21.changedTouches[0] : e21;
          n3.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: t4.pageX }),
            n3.attachDragEndListener();
        }),
        (n3.travellerDragStartHandlers = {
          startX: n3.handleTravellerDragStart.bind(n3, "startX"),
          endX: n3.handleTravellerDragStart.bind(n3, "endX"),
        }),
        (n3.state = {}),
        n3
      );
    }
    return (
      (function (e21, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        (e21.prototype = Object.create(t3 && t3.prototype, {
          constructor: { value: e21, writable: true, configurable: true },
        })),
          Object.defineProperty(e21, "prototype", { writable: false }),
          t3 && lg(e21, t3);
      })(e20, PureComponent),
      (t2 = e20),
      (n2 = [
        {
          key: "componentWillUnmount",
          value: function () {
            this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
              this.detachDragEndListener();
          },
        },
        {
          key: "getIndex",
          value: function (t3) {
            var n3 = t3.startX,
              r2 = t3.endX,
              i3 = this.state.scaleValues,
              o2 = this.props,
              a2 = o2.gap,
              s2 = o2.data.length - 1,
              c2 = Math.min(n3, r2),
              l2 = Math.max(n3, r2),
              u2 = e20.getIndexInRange(i3, c2),
              f2 = e20.getIndexInRange(i3, l2);
            return { startIndex: u2 - (u2 % a2), endIndex: f2 === s2 ? s2 : f2 - (f2 % a2) };
          },
        },
        {
          key: "getTextOfTick",
          value: function (e21) {
            var t3 = this.props,
              n3 = t3.data,
              r2 = t3.tickFormatter,
              i3 = t3.dataKey,
              o2 = mf(n3[e21], i3, e21);
            return zh$1(r2) ? r2(o2, e21) : o2;
          },
        },
        {
          key: "attachDragEndListener",
          value: function () {
            window.addEventListener("mouseup", this.handleDragEnd, true),
              window.addEventListener("touchend", this.handleDragEnd, true),
              window.addEventListener("mousemove", this.handleDrag, true);
          },
        },
        {
          key: "detachDragEndListener",
          value: function () {
            window.removeEventListener("mouseup", this.handleDragEnd, true),
              window.removeEventListener("touchend", this.handleDragEnd, true),
              window.removeEventListener("mousemove", this.handleDrag, true);
          },
        },
        {
          key: "handleSlideDrag",
          value: function (e21) {
            var t3 = this.state,
              n3 = t3.slideMoveStartX,
              r2 = t3.startX,
              i3 = t3.endX,
              o2 = this.props,
              a2 = o2.x,
              s2 = o2.width,
              c2 = o2.travellerWidth,
              l2 = o2.startIndex,
              u2 = o2.endIndex,
              f2 = o2.onChange,
              d2 = e21.pageX - n3;
            d2 > 0
              ? (d2 = Math.min(d2, a2 + s2 - c2 - i3, a2 + s2 - c2 - r2))
              : d2 < 0 && (d2 = Math.max(d2, a2 - r2, a2 - i3));
            var p2 = this.getIndex({ startX: r2 + d2, endX: i3 + d2 });
            (p2.startIndex === l2 && p2.endIndex === u2) || !f2 || f2(p2),
              this.setState({ startX: r2 + d2, endX: i3 + d2, slideMoveStartX: e21.pageX });
          },
        },
        {
          key: "handleTravellerDragStart",
          value: function (e21, t3) {
            var n3 = mg(t3) ? t3.changedTouches[0] : t3;
            this.setState({
              isSlideMoving: false,
              isTravellerMoving: true,
              movingTravellerId: e21,
              brushMoveStartX: n3.pageX,
            }),
              this.attachDragEndListener();
          },
        },
        {
          key: "handleTravellerMove",
          value: function (e21) {
            var t3 = this.state,
              n3 = t3.brushMoveStartX,
              r2 = t3.movingTravellerId,
              i3 = t3.endX,
              o2 = t3.startX,
              a2 = this.state[r2],
              s2 = this.props,
              c2 = s2.x,
              l2 = s2.width,
              u2 = s2.travellerWidth,
              f2 = s2.onChange,
              d2 = s2.gap,
              p2 = s2.data,
              h2 = { startX: this.state.startX, endX: this.state.endX },
              y2 = e21.pageX - n3;
            y2 > 0
              ? (y2 = Math.min(y2, c2 + l2 - u2 - a2))
              : y2 < 0 && (y2 = Math.max(y2, c2 - a2)),
              (h2[r2] = a2 + y2);
            var m2 = this.getIndex(h2),
              v2 = m2.startIndex,
              g2 = m2.endIndex;
            this.setState(ug(ug({}, r2, a2 + y2), "brushMoveStartX", e21.pageX), function () {
              var e22;
              f2 &&
                ((e22 = p2.length - 1),
                (("startX" === r2 && (i3 > o2 ? v2 % d2 == 0 : g2 % d2 == 0)) ||
                  (i3 < o2 && g2 === e22) ||
                  ("endX" === r2 && (i3 > o2 ? g2 % d2 == 0 : v2 % d2 == 0)) ||
                  (i3 > o2 && g2 === e22)) &&
                  f2(m2));
            });
          },
        },
        {
          key: "handleTravellerMoveKeyboard",
          value: function (e21, t3) {
            var n3 = this,
              r2 = this.state,
              i3 = r2.scaleValues,
              o2 = r2.startX,
              a2 = r2.endX,
              s2 = this.state[t3],
              c2 = i3.indexOf(s2);
            if (-1 !== c2) {
              var l2 = c2 + e21;
              if (!(-1 === l2 || l2 >= i3.length)) {
                var u2 = i3[l2];
                ("startX" === t3 && u2 >= a2) ||
                  ("endX" === t3 && u2 <= o2) ||
                  this.setState(ug({}, t3, u2), function () {
                    n3.props.onChange(
                      n3.getIndex({ startX: n3.state.startX, endX: n3.state.endX }),
                    );
                  });
              }
            }
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var e21 = this.props,
              t3 = e21.x,
              n3 = e21.y,
              r2 = e21.width,
              i3 = e21.height,
              o2 = e21.fill,
              a2 = e21.stroke;
            return g__default.createElement("rect", {
              stroke: a2,
              fill: o2,
              x: t3,
              y: n3,
              width: r2,
              height: i3,
            });
          },
        },
        {
          key: "renderPanorama",
          value: function () {
            var e21 = this.props,
              t3 = e21.x,
              n3 = e21.y,
              r2 = e21.width,
              i3 = e21.height,
              o2 = e21.data,
              a2 = e21.children,
              s2 = e21.padding,
              c2 = Children.only(a2);
            return c2
              ? g__default.cloneElement(c2, {
                  x: t3,
                  y: n3,
                  width: r2,
                  height: i3,
                  margin: s2,
                  compact: true,
                  data: o2,
                })
              : null;
          },
        },
        {
          key: "renderTravellerLayer",
          value: function (t3, n3) {
            var i3,
              o2,
              a2 = this,
              s2 = this.props,
              c2 = s2.y,
              l2 = s2.travellerWidth,
              u2 = s2.height,
              f2 = s2.traveller,
              d2 = s2.ariaLabel,
              p2 = s2.data,
              h2 = s2.startIndex,
              y2 = s2.endIndex,
              m2 = Math.max(t3, this.props.x),
              v2 = ig(ig({}, Ng$1(this.props, false)), {}, { x: m2, y: c2, width: l2, height: u2 }),
              g2 =
                d2 ||
                "Min value: "
                  .concat(
                    null === (i3 = p2[h2]) || void 0 === i3 ? void 0 : i3.name,
                    ", Max value: ",
                  )
                  .concat(null === (o2 = p2[y2]) || void 0 === o2 ? void 0 : o2.name);
            return g__default.createElement(
              nn,
              {
                tabIndex: 0,
                role: "slider",
                "aria-label": g2,
                "aria-valuenow": t3,
                className: "recharts-brush-traveller",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.travellerDragStartHandlers[n3],
                onTouchStart: this.travellerDragStartHandlers[n3],
                onKeyDown: function (e21) {
                  ["ArrowLeft", "ArrowRight"].includes(e21.key) &&
                    (e21.preventDefault(),
                    e21.stopPropagation(),
                    a2.handleTravellerMoveKeyboard("ArrowRight" === e21.key ? 1 : -1, n3));
                },
                onFocus: function () {
                  a2.setState({ isTravellerFocused: true });
                },
                onBlur: function () {
                  a2.setState({ isTravellerFocused: false });
                },
                style: { cursor: "col-resize" },
              },
              e20.renderTraveller(f2, v2),
            );
          },
        },
        {
          key: "renderSlide",
          value: function (e21, t3) {
            var n3 = this.props,
              r2 = n3.y,
              i3 = n3.height,
              o2 = n3.stroke,
              a2 = n3.travellerWidth,
              s2 = Math.min(e21, t3) + a2,
              c2 = Math.max(Math.abs(t3 - e21) - a2, 0);
            return g__default.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: { cursor: "move" },
              stroke: "none",
              fill: o2,
              fillOpacity: 0.2,
              x: s2,
              y: r2,
              width: c2,
              height: i3,
            });
          },
        },
        {
          key: "renderText",
          value: function () {
            var e21 = this.props,
              t3 = e21.startIndex,
              n3 = e21.endIndex,
              r2 = e21.y,
              i3 = e21.height,
              o2 = e21.travellerWidth,
              a2 = e21.stroke,
              s2 = this.state,
              c2 = s2.startX,
              l2 = s2.endX,
              u2 = { pointerEvents: "none", fill: a2 };
            return g__default.createElement(
              nn,
              { className: "recharts-brush-texts" },
              g__default.createElement(
                Ii,
                ng(
                  {
                    textAnchor: "end",
                    verticalAnchor: "middle",
                    x: Math.min(c2, l2) - 5,
                    y: r2 + i3 / 2,
                  },
                  u2,
                ),
                this.getTextOfTick(t3),
              ),
              g__default.createElement(
                Ii,
                ng(
                  {
                    textAnchor: "start",
                    verticalAnchor: "middle",
                    x: Math.max(c2, l2) + o2 + 5,
                    y: r2 + i3 / 2,
                  },
                  u2,
                ),
                this.getTextOfTick(n3),
              ),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var e21 = this.props,
              t3 = e21.data,
              n3 = e21.className,
              r2 = e21.children,
              i3 = e21.x,
              o2 = e21.y,
              a2 = e21.width,
              s2 = e21.height,
              c2 = e21.alwaysShowText,
              u2 = this.state,
              f2 = u2.startX,
              d2 = u2.endX,
              p2 = u2.isTextActive,
              h2 = u2.isSlideMoving,
              y2 = u2.isTravellerMoving,
              m2 = u2.isTravellerFocused;
            if (
              !t3 ||
              !t3.length ||
              !em$1(i3) ||
              !em$1(o2) ||
              !em$1(a2) ||
              !em$1(s2) ||
              a2 <= 0 ||
              s2 <= 0
            )
              return null;
            var v2,
              g2,
              b2,
              x2,
              w2 = Nt("recharts-brush", n3),
              O2 = 1 === g__default.Children.count(r2),
              S2 =
                ((g2 = "none"),
                (b2 = (v2 = "userSelect").replace(/(\w)/, function (e22) {
                  return e22.toUpperCase();
                })),
                ((x2 = eg.reduce(function (e22, t4) {
                  return Zv(Zv({}, e22), {}, Jv({}, t4 + b2, g2));
                }, {}))[v2] = g2),
                x2);
            return g__default.createElement(
              nn,
              {
                className: w2,
                onMouseLeave: this.handleLeaveWrapper,
                onTouchMove: this.handleTouchMove,
                style: S2,
              },
              this.renderBackground(),
              O2 && this.renderPanorama(),
              this.renderSlide(f2, d2),
              this.renderTravellerLayer(f2, "startX"),
              this.renderTravellerLayer(d2, "endX"),
              (p2 || h2 || y2 || m2 || c2) && this.renderText(),
            );
          },
        },
      ]),
      (i2 = [
        {
          key: "renderDefaultTraveller",
          value: function (e21) {
            var t3 = e21.x,
              n3 = e21.y,
              r2 = e21.width,
              i3 = e21.height,
              o2 = e21.stroke,
              a2 = Math.floor(n3 + i3 / 2) - 1;
            return g__default.createElement(
              g__default.Fragment,
              null,
              g__default.createElement("rect", {
                x: t3,
                y: n3,
                width: r2,
                height: i3,
                fill: o2,
                stroke: "none",
              }),
              g__default.createElement("line", {
                x1: t3 + 1,
                y1: a2,
                x2: t3 + r2 - 1,
                y2: a2,
                fill: "none",
                stroke: "#fff",
              }),
              g__default.createElement("line", {
                x1: t3 + 1,
                y1: a2 + 2,
                x2: t3 + r2 - 1,
                y2: a2 + 2,
                fill: "none",
                stroke: "#fff",
              }),
            );
          },
        },
        {
          key: "renderTraveller",
          value: function (t3, n3) {
            return g__default.isValidElement(t3)
              ? g__default.cloneElement(t3, n3)
              : zh$1(t3)
                ? t3(n3)
                : e20.renderDefaultTraveller(n3);
          },
        },
        {
          key: "getDerivedStateFromProps",
          value: function (e21, t3) {
            var n3 = e21.data,
              r2 = e21.width,
              i3 = e21.x,
              o2 = e21.travellerWidth,
              a2 = e21.updateId,
              s2 = e21.startIndex,
              c2 = e21.endIndex;
            if (n3 !== t3.prevData || a2 !== t3.prevUpdateId)
              return ig(
                {
                  prevData: n3,
                  prevTravellerWidth: o2,
                  prevUpdateId: a2,
                  prevX: i3,
                  prevWidth: r2,
                },
                n3 && n3.length
                  ? (function (e22) {
                      var t4 = e22.data,
                        n4 = e22.startIndex,
                        r3 = e22.endIndex,
                        i4 = e22.x,
                        o3 = e22.width,
                        a3 = e22.travellerWidth;
                      if (!t4 || !t4.length) return {};
                      var s3 = t4.length,
                        c3 = so()
                          .domain(Xv(0, s3))
                          .range([i4, i4 + o3 - a3]),
                        l3 = c3.domain().map(function (e23) {
                          return c3(e23);
                        });
                      return {
                        isTextActive: false,
                        isSlideMoving: false,
                        isTravellerMoving: false,
                        isTravellerFocused: false,
                        startX: c3(n4),
                        endX: c3(r3),
                        scale: c3,
                        scaleValues: l3,
                      };
                    })({
                      data: n3,
                      width: r2,
                      x: i3,
                      travellerWidth: o2,
                      startIndex: s2,
                      endIndex: c2,
                    })
                  : { scale: null, scaleValues: null },
              );
            if (
              t3.scale &&
              (r2 !== t3.prevWidth || i3 !== t3.prevX || o2 !== t3.prevTravellerWidth)
            ) {
              t3.scale.range([i3, i3 + r2 - o2]);
              var l2 = t3.scale.domain().map(function (e22) {
                return t3.scale(e22);
              });
              return {
                prevData: n3,
                prevTravellerWidth: o2,
                prevUpdateId: a2,
                prevX: i3,
                prevWidth: r2,
                startX: t3.scale(e21.startIndex),
                endX: t3.scale(e21.endIndex),
                scaleValues: l2,
              };
            }
            return null;
          },
        },
        {
          key: "getIndexInRange",
          value: function (e21, t3) {
            for (var n3 = 0, r2 = e21.length - 1; r2 - n3 > 1; ) {
              var i3 = Math.floor((n3 + r2) / 2);
              e21[i3] > t3 ? (r2 = i3) : (n3 = i3);
            }
            return t3 >= e21[r2] ? r2 : n3;
          },
        },
      ]),
      n2 && og(t2.prototype, n2),
      i2 && og(t2, i2),
      Object.defineProperty(t2, "prototype", { writable: false }),
      t2
    );
    var t2, n2, i2;
  })();
ug(vg, "displayName", "Brush"),
  ug(vg, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1e3,
    alwaysShowText: false,
  });
var gg = (function () {
  if (yg) return hg;
  yg = 1;
  var e20 = Lg$1(),
    t2 = eb$1(),
    n2 = (function () {
      if (pg) return dg;
      pg = 1;
      var e21 = ew$1();
      return (dg = function (t3, n3) {
        var r3;
        return (
          e21(t3, function (e22, t4, i3) {
            return !(r3 = n3(e22, t4, i3));
          }),
          !!r3
        );
      });
    })(),
    r2 = Zp$1(),
    i2 = lw$1();
  return (hg = function (o2, a2, s2) {
    var c2 = r2(o2) ? e20 : n2;
    return s2 && i2(o2, a2, s2) && (a2 = void 0), c2(o2, t2(a2, 3));
  });
})();
const bg = Td$1(gg);
var xg,
  wg,
  Og,
  Sg,
  Ag = function (e20, t2) {
    var n2 = e20.alwaysShow,
      r2 = e20.ifOverflow;
    return n2 && (r2 = "extendDomain"), r2 === t2;
  };
var jg = (function () {
  if (Sg) return Og;
  Sg = 1;
  var e20 = (function () {
      if (wg) return xg;
      wg = 1;
      var e21 = aw$1();
      return (
        (xg = function (t3, n3, r2) {
          "__proto__" == n3 && e21
            ? e21(t3, n3, { configurable: true, enumerable: true, value: r2, writable: true })
            : (t3[n3] = r2);
        }),
        xg
      );
    })(),
    t2 = Zb$1(),
    n2 = eb$1();
  return (
    (Og = function (r2, i2) {
      var o2 = {};
      return (
        (i2 = n2(i2, 3)),
        t2(r2, function (t3, n3, r3) {
          e20(o2, n3, i2(t3, n3, r3));
        }),
        o2
      );
    }),
    Og
  );
})();
const Mg = Td$1(jg);
var Pg, kg, Eg, Tg, Ng, Ig;
var _g = (function () {
  if (Ig) return Ng;
  Ig = 1;
  var e20 =
      (kg ||
        ((kg = 1),
        (Pg = function (e21, t3) {
          for (var n3 = -1, r3 = null == e21 ? 0 : e21.length; ++n3 < r3; )
            if (!t3(e21[n3], n3, e21)) return false;
          return true;
        })),
      Pg),
    t2 = (function () {
      if (Tg) return Eg;
      Tg = 1;
      var e21 = ew$1();
      return (Eg = function (t3, n3) {
        var r3 = true;
        return (
          e21(t3, function (e22, t4, i3) {
            return (r3 = !!n3(e22, t4, i3));
          }),
          r3
        );
      });
    })(),
    n2 = eb$1(),
    r2 = Zp$1(),
    i2 = lw$1();
  return (Ng = function (o2, a2, s2) {
    var c2 = r2(o2) ? e20 : t2;
    return s2 && i2(o2, a2, s2) && (a2 = void 0), c2(o2, n2(a2, 3));
  });
})();
const Cg = Td$1(_g);
var zg = ["x", "y"];
function Dg(e20) {
  return (
    (Dg =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Dg(e20)
  );
}
function Rg() {
  return (
    (Rg = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Rg.apply(this, arguments)
  );
}
function Lg(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function $g(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Lg(Object(n2), true).forEach(function (t3) {
          Bg(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Lg(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Bg(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Dg(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Dg(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Dg(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function qg(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Fg(e20, t2) {
  var n2 = e20.x,
    r2 = e20.y,
    i2 = qg(e20, zg),
    o2 = "".concat(n2),
    a2 = parseInt(o2, 10),
    s2 = "".concat(r2),
    c2 = parseInt(s2, 10),
    l2 = "".concat(t2.height || i2.height),
    u2 = parseInt(l2, 10),
    f2 = "".concat(t2.width || i2.width),
    d2 = parseInt(f2, 10);
  return $g(
    $g($g($g($g({}, t2), i2), a2 ? { x: a2 } : {}), c2 ? { y: c2 } : {}),
    {},
    { height: u2, width: d2, name: t2.name, radius: t2.radius },
  );
}
function Ug(e20) {
  return g__default.createElement(
    Zm,
    Rg(
      { shapeType: "rectangle", propTransformer: Fg, activeClassName: "recharts-active-bar" },
      e20,
    ),
  );
}
var Wg,
  Vg = ["value", "background"];
function Qg(e20) {
  return (
    (Qg =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Qg(e20)
  );
}
function Gg(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Hg() {
  return (
    (Hg = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Hg.apply(this, arguments)
  );
}
function Xg(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Kg(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Xg(Object(n2), true).forEach(function (t3) {
          nb(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Xg(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Yg(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, rb(r2.key), r2);
  }
}
function Zg(e20, t2, n2) {
  return (
    (t2 = eb(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Qg(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Jg() ? Reflect.construct(t2, n2 || [], eb(e20).constructor) : t2.apply(e20, n2))
  );
}
function Jg() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Jg = function () {
    return !!e20;
  })();
}
function eb(e20) {
  return (
    (eb = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    eb(e20)
  );
}
function tb(e20, t2) {
  return (
    (tb = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    tb(e20, t2)
  );
}
function nb(e20, t2, n2) {
  return (
    (t2 = rb(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function rb(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Qg(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Qg(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Qg(t2) ? t2 : t2 + "";
}
var ib = (function () {
  function e20() {
    var t3;
    !(function (e21, t4) {
      if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
    })(this, e20);
    for (var n3 = arguments.length, r2 = new Array(n3), i3 = 0; i3 < n3; i3++)
      r2[i3] = arguments[i3];
    return (
      nb((t3 = Zg(this, e20, [].concat(r2))), "state", { isAnimationFinished: false }),
      nb(t3, "id", om$1("recharts-bar-")),
      nb(t3, "handleAnimationEnd", function () {
        var e21 = t3.props.onAnimationEnd;
        t3.setState({ isAnimationFinished: true }), e21 && e21();
      }),
      nb(t3, "handleAnimationStart", function () {
        var e21 = t3.props.onAnimationStart;
        t3.setState({ isAnimationFinished: false }), e21 && e21();
      }),
      t3
    );
  }
  return (
    (function (e21, t3) {
      if ("function" != typeof t3 && null !== t3)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t3 && t3.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t3 && tb(e21, t3);
    })(e20, PureComponent),
    (t2 = e20),
    (i2 = [
      {
        key: "getDerivedStateFromProps",
        value: function (e21, t3) {
          return e21.animationId !== t3.prevAnimationId
            ? { prevAnimationId: e21.animationId, curData: e21.data, prevData: t3.curData }
            : e21.data !== t3.curData
              ? { curData: e21.data }
              : null;
        },
      },
    ]),
    (n2 = [
      {
        key: "renderRectanglesStatically",
        value: function (e21) {
          var t3 = this,
            n3 = this.props,
            i3 = n3.shape,
            o2 = n3.dataKey,
            a2 = n3.activeIndex,
            s2 = n3.activeBar,
            l2 = Ng$1(this.props, false);
          return (
            e21 &&
            e21.map(function (e22, n4) {
              var r2 = n4 === a2,
                u2 = r2 ? s2 : i3,
                f2 = Kg(
                  Kg(Kg({}, l2), e22),
                  {},
                  {
                    isActive: r2,
                    option: u2,
                    index: n4,
                    dataKey: o2,
                    onAnimationStart: t3.handleAnimationStart,
                    onAnimationEnd: t3.handleAnimationEnd,
                  },
                );
              return g__default.createElement(
                nn,
                Hg({ className: "recharts-bar-rectangle" }, ym$1(t3.props, e22, n4), {
                  key: "rectangle-"
                    .concat(null == e22 ? void 0 : e22.x, "-")
                    .concat(null == e22 ? void 0 : e22.y, "-")
                    .concat(null == e22 ? void 0 : e22.value, "-")
                    .concat(n4),
                }),
                g__default.createElement(Ug, f2),
              );
            })
          );
        },
      },
      {
        key: "renderRectanglesWithAnimation",
        value: function () {
          var e21 = this,
            t3 = this.props,
            n3 = t3.data,
            r2 = t3.layout,
            i3 = t3.isAnimationActive,
            o2 = t3.animationBegin,
            a2 = t3.animationDuration,
            s2 = t3.animationEasing,
            c2 = t3.animationId,
            l2 = this.state.prevData;
          return g__default.createElement(
            Zh,
            {
              begin: o2,
              duration: a2,
              isActive: i3,
              easing: s2,
              from: { t: 0 },
              to: { t: 1 },
              key: "bar-".concat(c2),
              onAnimationEnd: this.handleAnimationEnd,
              onAnimationStart: this.handleAnimationStart,
            },
            function (t4) {
              var i4 = t4.t,
                o3 = n3.map(function (e22, t5) {
                  var n4 = l2 && l2[t5];
                  if (n4) {
                    var o4 = lm$1(n4.x, e22.x),
                      a3 = lm$1(n4.y, e22.y),
                      s3 = lm$1(n4.width, e22.width),
                      c3 = lm$1(n4.height, e22.height);
                    return Kg(
                      Kg({}, e22),
                      {},
                      { x: o4(i4), y: a3(i4), width: s3(i4), height: c3(i4) },
                    );
                  }
                  if ("horizontal" === r2) {
                    var u2 = lm$1(0, e22.height)(i4);
                    return Kg(Kg({}, e22), {}, { y: e22.y + e22.height - u2, height: u2 });
                  }
                  var f2 = lm$1(0, e22.width)(i4);
                  return Kg(Kg({}, e22), {}, { width: f2 });
                });
              return g__default.createElement(nn, null, e21.renderRectanglesStatically(o3));
            },
          );
        },
      },
      {
        key: "renderRectangles",
        value: function () {
          var e21 = this.props,
            t3 = e21.data,
            n3 = e21.isAnimationActive,
            r2 = this.state.prevData;
          return !(n3 && t3 && t3.length) || (r2 && ql(r2, t3))
            ? this.renderRectanglesStatically(t3)
            : this.renderRectanglesWithAnimation();
        },
      },
      {
        key: "renderBackground",
        value: function () {
          var e21 = this,
            t3 = this.props,
            n3 = t3.data,
            i3 = t3.dataKey,
            o2 = t3.activeIndex,
            a2 = Ng$1(this.props.background, false);
          return n3.map(function (t4, n4) {
            t4.value;
            var r2 = t4.background,
              s2 = Gg(t4, Vg);
            if (!r2) return null;
            var l2 = Kg(
              Kg(Kg(Kg(Kg({}, s2), {}, { fill: "#eee" }, r2), a2), ym$1(e21.props, t4, n4)),
              {},
              {
                onAnimationStart: e21.handleAnimationStart,
                onAnimationEnd: e21.handleAnimationEnd,
                dataKey: i3,
                index: n4,
                className: "recharts-bar-background-rectangle",
              },
            );
            return g__default.createElement(
              Ug,
              Hg(
                {
                  key: "background-bar-".concat(n4),
                  option: e21.props.background,
                  isActive: n4 === o2,
                },
                l2,
              ),
            );
          });
        },
      },
      {
        key: "renderErrorBar",
        value: function (e21, t3) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var n3 = this.props,
            r2 = n3.data,
            i3 = n3.xAxis,
            o2 = n3.yAxis,
            a2 = n3.layout,
            s2 = n3.children,
            c2 = Am$1(s2, rf);
          if (!c2) return null;
          var l2 = "vertical" === a2 ? r2[0].height / 2 : r2[0].width / 2,
            u2 = function (e22, t4) {
              var n4 = Array.isArray(e22.value) ? e22.value[1] : e22.value;
              return { x: e22.x, y: e22.y, value: n4, errorVal: mf(e22, t4) };
            },
            f2 = { clipPath: e21 ? "url(#clipPath-".concat(t3, ")") : null };
          return g__default.createElement(
            nn,
            f2,
            c2.map(function (e22) {
              return g__default.cloneElement(e22, {
                key: "error-bar-".concat(t3, "-").concat(e22.props.dataKey),
                data: r2,
                xAxis: i3,
                yAxis: o2,
                layout: a2,
                offset: l2,
                dataPointFormatter: u2,
              });
            }),
          );
        },
      },
      {
        key: "render",
        value: function () {
          var e21 = this.props,
            t3 = e21.hide,
            n3 = e21.data,
            r2 = e21.className,
            i3 = e21.xAxis,
            o2 = e21.yAxis,
            a2 = e21.left,
            s2 = e21.top,
            c2 = e21.width,
            l2 = e21.height,
            u2 = e21.isAnimationActive,
            f2 = e21.background,
            d2 = e21.id;
          if (t3 || !n3 || !n3.length) return null;
          var h2 = this.state.isAnimationFinished,
            y2 = Nt("recharts-bar", r2),
            m2 = i3 && i3.allowDataOverflow,
            v2 = o2 && o2.allowDataOverflow,
            g2 = m2 || v2,
            b2 = Th$1(d2) ? this.id : d2;
          return g__default.createElement(
            nn,
            { className: y2 },
            m2 || v2
              ? g__default.createElement(
                  "defs",
                  null,
                  g__default.createElement(
                    "clipPath",
                    { id: "clipPath-".concat(b2) },
                    g__default.createElement("rect", {
                      x: m2 ? a2 : a2 - c2 / 2,
                      y: v2 ? s2 : s2 - l2 / 2,
                      width: m2 ? c2 : 2 * c2,
                      height: v2 ? l2 : 2 * l2,
                    }),
                  ),
                )
              : null,
            g__default.createElement(
              nn,
              {
                className: "recharts-bar-rectangles",
                clipPath: g2 ? "url(#clipPath-".concat(b2, ")") : null,
              },
              f2 ? this.renderBackground() : null,
              this.renderRectangles(),
            ),
            this.renderErrorBar(g2, b2),
            (!u2 || h2) && Ed.renderCallByParent(this.props, n3),
          );
        },
      },
    ]) && Yg(t2.prototype, n2),
    i2 && Yg(t2, i2),
    Object.defineProperty(t2, "prototype", { writable: false }),
    t2
  );
  var t2, n2, i2;
})();
function ob(e20) {
  return (
    (ob =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    ob(e20)
  );
}
function ab(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, ub(r2.key), r2);
  }
}
function sb(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function cb(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? sb(Object(n2), true).forEach(function (t3) {
          lb(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : sb(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function lb(e20, t2, n2) {
  return (
    (t2 = ub(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function ub(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != ob(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != ob(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e21);
  })(e20, "string");
  return "symbol" == ob(t2) ? t2 : t2 + "";
}
(Wg = ib),
  nb(ib, "displayName", "Bar"),
  nb(ib, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: false,
    data: [],
    layout: "vertical",
    activeBar: false,
    isAnimationActive: !Lw$1.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease",
  }),
  nb(ib, "getComposedData", function (e20) {
    var t2 = e20.props,
      n2 = e20.item,
      r2 = e20.barPosition,
      i2 = e20.bandSize,
      o2 = e20.xAxis,
      a2 = e20.yAxis,
      s2 = e20.xAxisTicks,
      c2 = e20.yAxisTicks,
      u2 = e20.stackedData,
      f2 = e20.dataStartIndex,
      d2 = e20.displayedData,
      p2 = e20.offset,
      h2 = (function (e21, t3) {
        if (!e21) return null;
        for (var n3 = 0, r3 = e21.length; n3 < r3; n3++)
          if (e21[n3].item === t3) return e21[n3].position;
        return null;
      })(r2, n2);
    if (!h2) return null;
    var y2 = t2.layout,
      m2 = n2.type.defaultProps,
      v2 = void 0 !== m2 ? Kg(Kg({}, m2), n2.props) : n2.props,
      g2 = v2.dataKey,
      b2 = v2.children,
      x2 = v2.minPointSize,
      w2 = "horizontal" === y2 ? a2 : o2,
      S2 = u2 ? w2.scale.domain() : null,
      A2 = (function (e21) {
        var t3 = e21.numericAxis,
          n3 = t3.scale.domain();
        if ("number" === t3.type) {
          var r3 = Math.min(n3[0], n3[1]),
            i3 = Math.max(n3[0], n3[1]);
          return r3 <= 0 && i3 >= 0 ? 0 : i3 < 0 ? i3 : r3;
        }
        return n3[0];
      })({ numericAxis: w2 }),
      j2 = Am$1(b2, Xr),
      M2 = d2.map(function (e21, t3) {
        var r3, d3, p3, m3, v3, b3;
        u2
          ? (r3 = (function (e22, t4) {
              if (!t4 || 2 !== t4.length || !em$1(t4[0]) || !em$1(t4[1])) return e22;
              var n3 = Math.min(t4[0], t4[1]),
                r4 = Math.max(t4[0], t4[1]),
                i3 = [e22[0], e22[1]];
              return (
                (!em$1(e22[0]) || e22[0] < n3) && (i3[0] = n3),
                (!em$1(e22[1]) || e22[1] > r4) && (i3[1] = r4),
                i3[0] > r4 && (i3[0] = r4),
                i3[1] < n3 && (i3[1] = n3),
                i3
              );
            })(u2[f2 + t3], S2))
          : ((r3 = mf(e21, g2)), Array.isArray(r3) || (r3 = [A2, r3]));
        var w3 = (function (e22) {
          var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return function (n3, r4) {
            if ("number" == typeof e22) return e22;
            var i3 = em$1(n3) || tm$1(n3);
            return i3 ? e22(n3, r4) : (i3 || wt(false), t4);
          };
        })(x2, Wg.defaultProps.minPointSize)(r3[1], t3);
        if ("horizontal" === y2) {
          var M3,
            k2 = [a2.scale(r3[0]), a2.scale(r3[1])],
            E2 = k2[0],
            T2 = k2[1];
          (d3 = _f({
            axis: o2,
            ticks: s2,
            bandSize: i2,
            offset: h2.offset,
            entry: e21,
            index: t3,
          })),
            (p3 = null !== (M3 = null != T2 ? T2 : E2) && void 0 !== M3 ? M3 : void 0),
            (m3 = h2.size);
          var N2 = E2 - T2;
          if (
            ((v3 = Number.isNaN(N2) ? 0 : N2),
            (b3 = { x: d3, y: a2.y, width: m3, height: a2.height }),
            Math.abs(w3) > 0 && Math.abs(v3) < Math.abs(w3))
          ) {
            var I2 = Jh$1(v3 || w3) * (Math.abs(w3) - Math.abs(v3));
            (p3 -= I2), (v3 += I2);
          }
        } else {
          var _2 = [o2.scale(r3[0]), o2.scale(r3[1])],
            C2 = _2[0],
            z2 = _2[1];
          if (
            ((d3 = C2),
            (p3 = _f({
              axis: a2,
              ticks: c2,
              bandSize: i2,
              offset: h2.offset,
              entry: e21,
              index: t3,
            })),
            (m3 = z2 - C2),
            (v3 = h2.size),
            (b3 = { x: o2.x, y: p3, width: o2.width, height: v3 }),
            Math.abs(w3) > 0 && Math.abs(m3) < Math.abs(w3))
          )
            m3 += Jh$1(m3 || w3) * (Math.abs(w3) - Math.abs(m3));
        }
        return Kg(
          Kg(
            Kg({}, e21),
            {},
            {
              x: d3,
              y: p3,
              width: m3,
              height: v3,
              value: u2 ? r3 : r3[1],
              payload: e21,
              background: b3,
            },
            j2 && j2[t3] && j2[t3].props,
          ),
          {},
          { tooltipPayload: [Bf(n2, e21)], tooltipPosition: { x: d3 + m3 / 2, y: p3 + v3 / 2 } },
        );
      });
    return Kg({ data: M2, layout: y2 }, p2);
  });
var fb = function (e20, t2, n2, r2, i2) {
    var o2 = e20.width,
      a2 = e20.height,
      s2 = e20.layout,
      c2 = e20.children,
      l2 = Object.keys(t2),
      u2 = {
        left: n2.left,
        leftMirror: n2.left,
        right: o2 - n2.right,
        rightMirror: o2 - n2.right,
        top: n2.top,
        topMirror: n2.top,
        bottom: a2 - n2.bottom,
        bottomMirror: a2 - n2.bottom,
      },
      f2 = !!Pm$1(c2, ib);
    return l2.reduce(function (o3, a3) {
      var c3,
        l3,
        d2,
        p2,
        h2,
        y2 = t2[a3],
        m2 = y2.orientation,
        v2 = y2.domain,
        g2 = y2.padding,
        b2 = void 0 === g2 ? {} : g2,
        x2 = y2.mirror,
        w2 = y2.reversed,
        O2 = "".concat(m2).concat(x2 ? "Mirror" : "");
      if ("number" === y2.type && ("gap" === y2.padding || "no-gap" === y2.padding)) {
        var S2 = v2[1] - v2[0],
          A2 = 1 / 0,
          j2 = y2.categoricalDomain.sort(um$1);
        if (
          (j2.forEach(function (e21, t3) {
            t3 > 0 && (A2 = Math.min((e21 || 0) - (j2[t3 - 1] || 0), A2));
          }),
          Number.isFinite(A2))
        ) {
          var M2 = A2 / S2,
            P2 = "vertical" === y2.layout ? n2.height : n2.width;
          if (("gap" === y2.padding && (c3 = (M2 * P2) / 2), "no-gap" === y2.padding)) {
            var k2 = am$1(e20.barCategoryGap, M2 * P2),
              E2 = (M2 * P2) / 2;
            c3 = E2 - k2 - ((E2 - k2) / P2) * k2;
          }
        }
      }
      (l3 =
        "xAxis" === r2
          ? [n2.left + (b2.left || 0) + (c3 || 0), n2.left + n2.width - (b2.right || 0) - (c3 || 0)]
          : "yAxis" === r2
            ? "horizontal" === s2
              ? [n2.top + n2.height - (b2.bottom || 0), n2.top + (b2.top || 0)]
              : [
                  n2.top + (b2.top || 0) + (c3 || 0),
                  n2.top + n2.height - (b2.bottom || 0) - (c3 || 0),
                ]
            : y2.range),
        w2 && (l3 = [l3[1], l3[0]]);
      var N2 = Mf(y2, i2, f2),
        I2 = N2.scale,
        _2 = N2.realScaleType;
      I2.domain(v2).range(l3), kf(I2);
      var C2 = Nf(I2, cb(cb({}, y2), {}, { realScaleType: _2 }));
      "xAxis" === r2
        ? ((h2 = ("top" === m2 && !x2) || ("bottom" === m2 && x2)),
          (d2 = n2.left),
          (p2 = u2[O2] - h2 * y2.height))
        : "yAxis" === r2 &&
          ((h2 = ("left" === m2 && !x2) || ("right" === m2 && x2)),
          (d2 = u2[O2] - h2 * y2.width),
          (p2 = n2.top));
      var z2 = cb(
        cb(cb({}, y2), C2),
        {},
        {
          realScaleType: _2,
          x: d2,
          y: p2,
          scale: I2,
          width: "xAxis" === r2 ? n2.width : y2.width,
          height: "yAxis" === r2 ? n2.height : y2.height,
        },
      );
      return (
        (z2.bandSize = Lf(z2, C2)),
        y2.hide || "xAxis" !== r2
          ? y2.hide || (u2[O2] += (h2 ? -1 : 1) * z2.width)
          : (u2[O2] += (h2 ? -1 : 1) * z2.height),
        cb(cb({}, o3), {}, lb({}, a3, z2))
      );
    }, {});
  },
  db = function (e20, t2) {
    var n2 = e20.x,
      r2 = e20.y,
      i2 = t2.x,
      o2 = t2.y;
    return {
      x: Math.min(n2, i2),
      y: Math.min(r2, o2),
      width: Math.abs(i2 - n2),
      height: Math.abs(o2 - r2),
    };
  },
  pb = (function () {
    function e20(t3) {
      !(function (e21, t4) {
        if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
        (this.scale = t3);
    }
    return (
      (t2 = e20),
      (n2 = [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (e21) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n3 = t3.bandAware,
              r3 = t3.position;
            if (void 0 !== e21) {
              if (r3)
                switch (r3) {
                  case "start":
                  default:
                    return this.scale(e21);
                  case "middle":
                    var i2 = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(e21) + i2;
                  case "end":
                    var o2 = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(e21) + o2;
                }
              if (n3) {
                var a2 = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(e21) + a2;
              }
              return this.scale(e21);
            }
          },
        },
        {
          key: "isInRange",
          value: function (e21) {
            var t3 = this.range(),
              n3 = t3[0],
              r3 = t3[t3.length - 1];
            return n3 <= r3 ? e21 >= n3 && e21 <= r3 : e21 >= r3 && e21 <= n3;
          },
        },
      ]),
      (r2 = [
        {
          key: "create",
          value: function (t3) {
            return new e20(t3);
          },
        },
      ]),
      n2 && ab(t2.prototype, n2),
      r2 && ab(t2, r2),
      Object.defineProperty(t2, "prototype", { writable: false }),
      t2
    );
    var t2, n2, r2;
  })();
lb(pb, "EPS", 1e-4);
var hb = function (e20) {
  var t2 = Object.keys(e20).reduce(function (t3, n2) {
    return cb(cb({}, t3), {}, lb({}, n2, pb.create(e20[n2])));
  }, {});
  return cb(
    cb({}, t2),
    {},
    {
      apply: function (e21) {
        var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r2 = n2.bandAware,
          i2 = n2.position;
        return Mg(e21, function (e22, n3) {
          return t2[n3].apply(e22, { bandAware: r2, position: i2 });
        });
      },
      isInRange: function (e21) {
        return Cg(e21, function (e22, n2) {
          return t2[n2].isInRange(e22);
        });
      },
    },
  );
};
var yb, mb, vb, gb, bb, xb, wb, Ob;
function Sb() {
  if (xb) return bb;
  xb = 1;
  var e20 = tb$1(),
    t2 = eb$1(),
    n2 = (function () {
      if (gb) return vb;
      gb = 1;
      var e21 = Qv();
      return (vb = function (t3) {
        var n3 = e21(t3),
          r3 = n3 % 1;
        return n3 == n3 ? (r3 ? n3 - r3 : n3) : 0;
      });
    })(),
    r2 = Math.max;
  return (
    (bb = function (i2, o2, a2) {
      var s2 = null == i2 ? 0 : i2.length;
      if (!s2) return -1;
      var c2 = null == a2 ? 0 : n2(a2);
      return c2 < 0 && (c2 = r2(s2 + c2, 0)), e20(i2, t2(o2, 3), c2);
    }),
    bb
  );
}
var Ab = (function () {
  if (Ob) return wb;
  Ob = 1;
  var e20 = (function () {
      if (mb) return yb;
      mb = 1;
      var e21 = eb$1(),
        t3 = qy$1(),
        n2 = Uy$1();
      return (yb = function (r2) {
        return function (i2, o2, a2) {
          var s2 = Object(i2);
          if (!t3(i2)) {
            var c2 = e21(o2, 3);
            (i2 = n2(i2)),
              (o2 = function (e22) {
                return c2(s2[e22], e22, s2);
              });
          }
          var l2 = r2(i2, o2, a2);
          return l2 > -1 ? s2[c2 ? i2[l2] : l2] : void 0;
        };
      });
    })(),
    t2 = e20(Sb());
  return (wb = t2);
})();
const jb = Td$1(Ab);
var Mb = Td$1(wh$1())(
  function (e20) {
    return { x: e20.left, y: e20.top, width: e20.width, height: e20.height };
  },
  function (e20) {
    return ["l", e20.left, "t", e20.top, "w", e20.width, "h", e20.height].join("");
  },
);
var kb = createContext(void 0),
  Eb = createContext(void 0),
  Tb = createContext(void 0),
  Nb = createContext({}),
  Ib = createContext(void 0),
  _b = createContext(0),
  Cb = createContext(0),
  zb = function (e20) {
    var t2 = e20.state,
      n2 = t2.xAxisMap,
      r2 = t2.yAxisMap,
      i2 = t2.offset,
      o2 = e20.clipPathId,
      a2 = e20.children,
      s2 = e20.width,
      c2 = e20.height,
      l2 = Mb(i2);
    return g__default.createElement(
      kb.Provider,
      { value: n2 },
      g__default.createElement(
        Eb.Provider,
        { value: r2 },
        g__default.createElement(
          Nb.Provider,
          { value: i2 },
          g__default.createElement(
            Tb.Provider,
            { value: l2 },
            g__default.createElement(
              Ib.Provider,
              { value: o2 },
              g__default.createElement(
                _b.Provider,
                { value: c2 },
                g__default.createElement(Cb.Provider, { value: s2 }, a2),
              ),
            ),
          ),
        ),
      ),
    );
  };
var Rb = function (e20) {
    var t2 = useContext(kb);
    null == t2 && wt(false);
    var n2 = t2[e20];
    return null == n2 && wt(false), n2;
  },
  Lb = function () {
    var e20 = useContext(kb);
    return im$1(e20);
  },
  $b = function () {
    var e20 = useContext(Eb);
    return (
      jb(e20, function (e21) {
        return Cg(e21.domain, Number.isFinite);
      }) || im$1(e20)
    );
  },
  Bb = function (e20) {
    var t2 = useContext(Eb);
    null == t2 && wt(false);
    var n2 = t2[e20];
    return null == n2 && wt(false), n2;
  },
  qb = function () {
    return useContext(Nb);
  },
  Fb = function () {
    return useContext(Cb);
  },
  Ub = function () {
    return useContext(_b);
  };
function Wb(e20) {
  return (
    (Wb =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Wb(e20)
  );
}
function Vb(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, Jb(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Qb(e20, t2, n2) {
  return (
    (t2 = Hb(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Wb(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Gb() ? Reflect.construct(t2, n2 || [], Hb(e20).constructor) : t2.apply(e20, n2))
  );
}
function Gb() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Gb = function () {
    return !!e20;
  })();
}
function Hb(e20) {
  return (
    (Hb = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Hb(e20)
  );
}
function Xb(e20, t2) {
  return (
    (Xb = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Xb(e20, t2)
  );
}
function Kb(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Yb(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Kb(Object(n2), true).forEach(function (t3) {
          Zb(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Kb(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Zb(e20, t2, n2) {
  return (
    (t2 = Jb(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Jb(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Wb(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Wb(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Wb(t2) ? t2 : t2 + "";
}
function ex(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    (function (e21, t3) {
      if (!e21) return;
      if ("string" == typeof e21) return tx(e21, t3);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return tx(e21, t3);
    })(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function tx(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function nx() {
  return (
    (nx = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    nx.apply(this, arguments)
  );
}
function rx(e20) {
  var t2 = e20.x,
    n2 = e20.y,
    i2 = e20.segment,
    o2 = e20.xAxisId,
    c2 = e20.yAxisId,
    l2 = e20.shape,
    u2 = e20.className,
    f2 = e20.alwaysShow,
    p2 = useContext(Ib),
    h2 = Rb(o2),
    y2 = Bb(c2),
    m2 = useContext(Tb);
  if (!p2 || !m2) return null;
  Dg$1(
    void 0 === f2,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var v2 = (function (e21, t3, n3, r2, i3, o3, a2, s2, c3) {
    var l3 = i3.x,
      u3 = i3.y,
      f3 = i3.width,
      d2 = i3.height;
    if (n3) {
      var p3 = c3.y,
        h3 = e21.y.apply(p3, { position: o3 });
      if (Ag(c3, "discard") && !e21.y.isInRange(h3)) return null;
      var y3 = [
        { x: l3 + f3, y: h3 },
        { x: l3, y: h3 },
      ];
      return "left" === s2 ? y3.reverse() : y3;
    }
    if (t3) {
      var m3 = c3.x,
        v3 = e21.x.apply(m3, { position: o3 });
      if (Ag(c3, "discard") && !e21.x.isInRange(v3)) return null;
      var g3 = [
        { x: v3, y: u3 + d2 },
        { x: v3, y: u3 },
      ];
      return "top" === a2 ? g3.reverse() : g3;
    }
    if (r2) {
      var b3 = c3.segment.map(function (t4) {
        return e21.apply(t4, { position: o3 });
      });
      return Ag(c3, "discard") &&
        bg(b3, function (t4) {
          return !e21.isInRange(t4);
        })
        ? null
        : b3;
    }
    return null;
  })(
    hb({ x: h2.scale, y: y2.scale }),
    nm$1(t2),
    nm$1(n2),
    i2 && 2 === i2.length,
    m2,
    e20.position,
    h2.orientation,
    y2.orientation,
    e20,
  );
  if (!v2) return null;
  var g2 = ex(v2, 2),
    b2 = g2[0],
    x2 = b2.x,
    w2 = b2.y,
    O2 = g2[1],
    S2 = O2.x,
    A2 = O2.y,
    j2 = Yb(
      Yb({ clipPath: Ag(e20, "hidden") ? "url(#".concat(p2, ")") : void 0 }, Ng$1(e20, true)),
      {},
      { x1: x2, y1: w2, x2: S2, y2: A2 },
    );
  return g__default.createElement(
    nn,
    { className: Nt("recharts-reference-line", u2) },
    (function (e21, t3) {
      return g__default.isValidElement(e21)
        ? g__default.cloneElement(e21, t3)
        : zh$1(e21)
          ? e21(t3)
          : g__default.createElement(
              "line",
              nx({}, t3, { className: "recharts-reference-line-line" }),
            );
    })(l2, j2),
    dd.renderCallByParent(
      e20,
      (function (e21) {
        var t3 = e21.x1,
          n3 = e21.y1,
          r2 = e21.x2,
          i3 = e21.y2;
        return db({ x: t3, y: n3 }, { x: r2, y: i3 });
      })({ x1: x2, y1: w2, x2: S2, y2: A2 }),
    ),
  );
}
var ix = (function () {
  function e20() {
    return (
      (function (e21, t2) {
        if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      Qb(this, e20, arguments)
    );
  }
  return (
    (function (e21, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t2 && t2.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t2 && Xb(e21, t2);
    })(e20, g__default.Component),
    Vb(e20, [
      {
        key: "render",
        value: function () {
          return g__default.createElement(rx, this.props);
        },
      },
    ])
  );
})();
function ox() {
  return (
    (ox = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    ox.apply(this, arguments)
  );
}
function ax(e20) {
  return (
    (ax =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    ax(e20)
  );
}
function sx(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function cx(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? sx(Object(n2), true).forEach(function (t3) {
          hx(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : sx(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function lx(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, yx(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function ux(e20, t2, n2) {
  return (
    (t2 = dx(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === ax(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, fx() ? Reflect.construct(t2, n2 || [], dx(e20).constructor) : t2.apply(e20, n2))
  );
}
function fx() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (fx = function () {
    return !!e20;
  })();
}
function dx(e20) {
  return (
    (dx = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    dx(e20)
  );
}
function px(e20, t2) {
  return (
    (px = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    px(e20, t2)
  );
}
function hx(e20, t2, n2) {
  return (
    (t2 = yx(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function yx(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != ax(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != ax(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == ax(t2) ? t2 : t2 + "";
}
Zb(ix, "displayName", "ReferenceLine"),
  Zb(ix, "defaultProps", {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle",
  });
var mx = (function () {
  function e20() {
    return (
      (function (e21, t2) {
        if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      ux(this, e20, arguments)
    );
  }
  return (
    (function (e21, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t2 && t2.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t2 && px(e21, t2);
    })(e20, g__default.Component),
    lx(e20, [
      {
        key: "render",
        value: function () {
          var t2 = this.props,
            n2 = t2.x,
            i2 = t2.y,
            o2 = t2.r,
            a2 = t2.alwaysShow,
            c2 = t2.clipPathId,
            l2 = nm$1(n2),
            u2 = nm$1(i2);
          if (
            (Dg$1(
              void 0 === a2,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            ),
            !l2 || !u2)
          )
            return null;
          var f2 = (function (e21) {
            var t3 = e21.x,
              n3 = e21.y,
              r2 = e21.xAxis,
              i3 = e21.yAxis,
              o3 = hb({ x: r2.scale, y: i3.scale }),
              a3 = o3.apply({ x: t3, y: n3 }, { bandAware: true });
            return Ag(e21, "discard") && !o3.isInRange(a3) ? null : a3;
          })(this.props);
          if (!f2) return null;
          var p2 = f2.x,
            h2 = f2.y,
            y2 = this.props,
            m2 = y2.shape,
            v2 = y2.className,
            g2 = cx(
              cx(
                { clipPath: Ag(this.props, "hidden") ? "url(#".concat(c2, ")") : void 0 },
                Ng$1(this.props, true),
              ),
              {},
              { cx: p2, cy: h2 },
            );
          return g__default.createElement(
            nn,
            { className: Nt("recharts-reference-dot", v2) },
            e20.renderDot(m2, g2),
            dd.renderCallByParent(this.props, {
              x: p2 - o2,
              y: h2 - o2,
              width: 2 * o2,
              height: 2 * o2,
            }),
          );
        },
      },
    ])
  );
})();
function vx() {
  return (
    (vx = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    vx.apply(this, arguments)
  );
}
function gx(e20) {
  return (
    (gx =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    gx(e20)
  );
}
function bx(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function xx(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? bx(Object(n2), true).forEach(function (t3) {
          Mx(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : bx(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function wx(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, Px(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Ox(e20, t2, n2) {
  return (
    (t2 = Ax(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === gx(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Sx() ? Reflect.construct(t2, n2 || [], Ax(e20).constructor) : t2.apply(e20, n2))
  );
}
function Sx() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Sx = function () {
    return !!e20;
  })();
}
function Ax(e20) {
  return (
    (Ax = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Ax(e20)
  );
}
function jx(e20, t2) {
  return (
    (jx = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    jx(e20, t2)
  );
}
function Mx(e20, t2, n2) {
  return (
    (t2 = Px(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Px(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != gx(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != gx(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == gx(t2) ? t2 : t2 + "";
}
hx(mx, "displayName", "ReferenceDot"),
  hx(mx, "defaultProps", {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
  }),
  hx(mx, "renderDot", function (e20, t2) {
    return g__default.isValidElement(e20)
      ? g__default.cloneElement(e20, t2)
      : zh$1(e20)
        ? e20(t2)
        : g__default.createElement(
            by,
            ox({}, t2, { cx: t2.cx, cy: t2.cy, className: "recharts-reference-dot-dot" }),
          );
  });
var kx = (function () {
  function e20() {
    return (
      (function (e21, t2) {
        if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      Ox(this, e20, arguments)
    );
  }
  return (
    (function (e21, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t2 && t2.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t2 && jx(e21, t2);
    })(e20, g__default.Component),
    wx(e20, [
      {
        key: "render",
        value: function () {
          var t2 = this.props,
            n2 = t2.x1,
            i2 = t2.x2,
            o2 = t2.y1,
            a2 = t2.y2,
            c2 = t2.className,
            l2 = t2.alwaysShow,
            u2 = t2.clipPathId;
          Dg$1(
            void 0 === l2,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          );
          var f2 = nm$1(n2),
            p2 = nm$1(i2),
            h2 = nm$1(o2),
            y2 = nm$1(a2),
            m2 = this.props.shape;
          if (!(f2 || p2 || h2 || y2 || m2)) return null;
          var v2 = (function (e21, t3, n3, r2, i3) {
            var o3 = i3.x1,
              a3 = i3.x2,
              s2 = i3.y1,
              c3 = i3.y2,
              l3 = i3.xAxis,
              u3 = i3.yAxis;
            if (!l3 || !u3) return null;
            var f3 = hb({ x: l3.scale, y: u3.scale }),
              d2 = {
                x: e21 ? f3.x.apply(o3, { position: "start" }) : f3.x.rangeMin,
                y: n3 ? f3.y.apply(s2, { position: "start" }) : f3.y.rangeMin,
              },
              p3 = {
                x: t3 ? f3.x.apply(a3, { position: "end" }) : f3.x.rangeMax,
                y: r2 ? f3.y.apply(c3, { position: "end" }) : f3.y.rangeMax,
              };
            return !Ag(i3, "discard") || (f3.isInRange(d2) && f3.isInRange(p3)) ? db(d2, p3) : null;
          })(f2, p2, h2, y2, this.props);
          if (!v2 && !m2) return null;
          var g2 = Ag(this.props, "hidden") ? "url(#".concat(u2, ")") : void 0;
          return g__default.createElement(
            nn,
            { className: Nt("recharts-reference-area", c2) },
            e20.renderRect(m2, xx(xx({ clipPath: g2 }, Ng$1(this.props, true)), v2)),
            dd.renderCallByParent(this.props, v2),
          );
        },
      },
    ])
  );
})();
function Ex(e20, t2, n2) {
  if (t2 < 1) return [];
  if (1 === t2 && void 0 === n2) return e20;
  for (var r2 = [], i2 = 0; i2 < e20.length; i2 += t2) r2.push(e20[i2]);
  return r2;
}
function Tx(e20, t2, n2) {
  return (function (e21) {
    var t3 = e21.width,
      n3 = e21.height,
      r2 = (function (e22) {
        return ((e22 % 180) + 180) % 180;
      })(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
      i2 = (r2 * Math.PI) / 180,
      o2 = Math.atan(n3 / t3),
      a2 = i2 > o2 && i2 < Math.PI - o2 ? n3 / Math.sin(i2) : t3 / Math.cos(i2);
    return Math.abs(a2);
  })({ width: e20.width + t2.width, height: e20.height + t2.height }, n2);
}
function Nx(e20, t2, n2, r2, i2) {
  if (e20 * t2 < e20 * r2 || e20 * t2 > e20 * i2) return false;
  var o2 = n2();
  return e20 * (t2 - (e20 * o2) / 2 - r2) >= 0 && e20 * (t2 + (e20 * o2) / 2 - i2) <= 0;
}
function Ix(e20) {
  return (
    (Ix =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Ix(e20)
  );
}
function _x(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Cx(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? _x(Object(n2), true).forEach(function (t3) {
          zx(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : _x(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function zx(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Ix(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Ix(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Ix(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Dx(e20, t2, n2) {
  var r2 = e20.tick,
    i2 = e20.ticks,
    o2 = e20.viewBox,
    s2 = e20.minTickGap,
    c2 = e20.orientation,
    u2 = e20.interval,
    d2 = e20.tickFormatter,
    p2 = e20.unit,
    h2 = e20.angle;
  if (!i2 || !i2.length || !r2) return [];
  if (em$1(u2) || Lw$1.isSsr)
    return (function (e21, t3) {
      return Ex(e21, t3 + 1);
    })(i2, "number" == typeof u2 && em$1(u2) ? u2 : 0);
  var y2 = [],
    m2 = "top" === c2 || "bottom" === c2 ? "width" : "height",
    v2 =
      p2 && "width" === m2 ? ri(p2, { fontSize: t2, letterSpacing: n2 }) : { width: 0, height: 0 },
    g2 = function (e21, r3) {
      var i3 = zh$1(d2) ? d2(e21.value, r3) : e21.value;
      return "width" === m2
        ? Tx(ri(i3, { fontSize: t2, letterSpacing: n2 }), v2, h2)
        : ri(i3, { fontSize: t2, letterSpacing: n2 })[m2];
    },
    b2 = i2.length >= 2 ? Jh$1(i2[1].coordinate - i2[0].coordinate) : 1,
    x2 = (function (e21, t3, n3) {
      var r3 = "width" === n3,
        i3 = e21.x,
        o3 = e21.y,
        a2 = e21.width,
        s3 = e21.height;
      return 1 === t3
        ? { start: r3 ? i3 : o3, end: r3 ? i3 + a2 : o3 + s3 }
        : { start: r3 ? i3 + a2 : o3 + s3, end: r3 ? i3 : o3 };
    })(o2, b2, m2);
  return "equidistantPreserveStart" === u2
    ? (function (e21, t3, n3, r3, i3) {
        for (
          var o3,
            a2 = (r3 || []).slice(),
            s3 = t3.start,
            c3 = t3.end,
            l2 = 0,
            u3 = 1,
            f2 = s3,
            d3 = function () {
              var t4 = null == r3 ? void 0 : r3[l2];
              if (void 0 === t4) return { v: Ex(r3, u3) };
              var o4,
                a3 = l2,
                d4 = function () {
                  return void 0 === o4 && (o4 = n3(t4, a3)), o4;
                },
                p3 = t4.coordinate,
                h3 = 0 === l2 || Nx(e21, p3, d4, f2, c3);
              h3 || ((l2 = 0), (f2 = s3), (u3 += 1)),
                h3 && ((f2 = p3 + e21 * (d4() / 2 + i3)), (l2 += u3));
            };
          u3 <= a2.length;

        )
          if ((o3 = d3())) return o3.v;
        return [];
      })(b2, x2, g2, i2, s2)
    : ((y2 =
        "preserveStart" === u2 || "preserveStartEnd" === u2
          ? (function (e21, t3, n3, r3, i3, o3) {
              var a2 = (r3 || []).slice(),
                s3 = a2.length,
                c3 = t3.start,
                l2 = t3.end;
              if (o3) {
                var u3 = r3[s3 - 1],
                  f2 = n3(u3, s3 - 1),
                  d3 = e21 * (u3.coordinate + (e21 * f2) / 2 - l2);
                (a2[s3 - 1] = u3 =
                  Cx(
                    Cx({}, u3),
                    {},
                    { tickCoord: d3 > 0 ? u3.coordinate - d3 * e21 : u3.coordinate },
                  )),
                  Nx(
                    e21,
                    u3.tickCoord,
                    function () {
                      return f2;
                    },
                    c3,
                    l2,
                  ) &&
                    ((l2 = u3.tickCoord - e21 * (f2 / 2 + i3)),
                    (a2[s3 - 1] = Cx(Cx({}, u3), {}, { isShow: true })));
              }
              for (
                var p3 = o3 ? s3 - 1 : s3,
                  h3 = function (t4) {
                    var r4,
                      o4 = a2[t4],
                      s4 = function () {
                        return void 0 === r4 && (r4 = n3(o4, t4)), r4;
                      };
                    if (0 === t4) {
                      var u4 = e21 * (o4.coordinate - (e21 * s4()) / 2 - c3);
                      a2[t4] = o4 = Cx(
                        Cx({}, o4),
                        {},
                        { tickCoord: u4 < 0 ? o4.coordinate - u4 * e21 : o4.coordinate },
                      );
                    } else a2[t4] = o4 = Cx(Cx({}, o4), {}, { tickCoord: o4.coordinate });
                    Nx(e21, o4.tickCoord, s4, c3, l2) &&
                      ((c3 = o4.tickCoord + e21 * (s4() / 2 + i3)),
                      (a2[t4] = Cx(Cx({}, o4), {}, { isShow: true })));
                  },
                  y3 = 0;
                y3 < p3;
                y3++
              )
                h3(y3);
              return a2;
            })(b2, x2, g2, i2, s2, "preserveStartEnd" === u2)
          : (function (e21, t3, n3, r3, i3) {
              for (
                var o3 = (r3 || []).slice(),
                  a2 = o3.length,
                  s3 = t3.start,
                  c3 = t3.end,
                  l2 = function (t4) {
                    var r4,
                      l3 = o3[t4],
                      u4 = function () {
                        return void 0 === r4 && (r4 = n3(l3, t4)), r4;
                      };
                    if (t4 === a2 - 1) {
                      var f2 = e21 * (l3.coordinate + (e21 * u4()) / 2 - c3);
                      o3[t4] = l3 = Cx(
                        Cx({}, l3),
                        {},
                        { tickCoord: f2 > 0 ? l3.coordinate - f2 * e21 : l3.coordinate },
                      );
                    } else o3[t4] = l3 = Cx(Cx({}, l3), {}, { tickCoord: l3.coordinate });
                    Nx(e21, l3.tickCoord, u4, s3, c3) &&
                      ((c3 = l3.tickCoord - e21 * (u4() / 2 + i3)),
                      (o3[t4] = Cx(Cx({}, l3), {}, { isShow: true })));
                  },
                  u3 = a2 - 1;
                u3 >= 0;
                u3--
              )
                l2(u3);
              return o3;
            })(b2, x2, g2, i2, s2)),
      y2.filter(function (e21) {
        return e21.isShow;
      }));
}
Mx(kx, "displayName", "ReferenceArea"),
  Mx(kx, "defaultProps", {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: 0.5,
    stroke: "none",
    strokeWidth: 1,
  }),
  Mx(kx, "renderRect", function (e20, t2) {
    return g__default.isValidElement(e20)
      ? g__default.cloneElement(e20, t2)
      : zh$1(e20)
        ? e20(t2)
        : g__default.createElement(ly, vx({}, t2, { className: "recharts-reference-area-rect" }));
  });
var Rx = ["viewBox"],
  Lx = ["viewBox"],
  $x = ["ticks"];
function Bx(e20) {
  return (
    (Bx =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Bx(e20)
  );
}
function qx() {
  return (
    (qx = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    qx.apply(this, arguments)
  );
}
function Fx(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Ux(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Fx(Object(n2), true).forEach(function (t3) {
          Kx(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Fx(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function Wx(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Vx(e20, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    (r2.enumerable = r2.enumerable || false),
      (r2.configurable = true),
      "value" in r2 && (r2.writable = true),
      Object.defineProperty(e20, Yx(r2.key), r2);
  }
}
function Qx(e20, t2, n2) {
  return (
    (t2 = Hx(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Bx(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Gx() ? Reflect.construct(t2, n2 || [], Hx(e20).constructor) : t2.apply(e20, n2))
  );
}
function Gx() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Gx = function () {
    return !!e20;
  })();
}
function Hx(e20) {
  return (
    (Hx = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Hx(e20)
  );
}
function Xx(e20, t2) {
  return (
    (Xx = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Xx(e20, t2)
  );
}
function Kx(e20, t2, n2) {
  return (
    (t2 = Yx(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Yx(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Bx(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Bx(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Bx(t2) ? t2 : t2 + "";
}
var Zx = (function () {
  function e20(t3) {
    var n3;
    return (
      (function (e21, t4) {
        if (!(e21 instanceof t4)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      ((n3 = Qx(this, e20, [t3])).state = { fontSize: "", letterSpacing: "" }),
      n3
    );
  }
  return (
    (function (e21, t3) {
      if ("function" != typeof t3 && null !== t3)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t3 && t3.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t3 && Xx(e21, t3);
    })(e20, Component),
    (t2 = e20),
    (n2 = [
      {
        key: "shouldComponentUpdate",
        value: function (e21, t3) {
          var n3 = e21.viewBox,
            r2 = Wx(e21, Rx),
            i3 = this.props,
            o2 = i3.viewBox,
            a2 = Wx(i3, Lx);
          return !dm$1(n3, o2) || !dm$1(r2, a2) || !dm$1(t3, this.state);
        },
      },
      {
        key: "componentDidMount",
        value: function () {
          var e21 = this.layerReference;
          if (e21) {
            var t3 = e21.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            t3 &&
              this.setState({
                fontSize: window.getComputedStyle(t3).fontSize,
                letterSpacing: window.getComputedStyle(t3).letterSpacing,
              });
          }
        },
      },
      {
        key: "getTickLineCoord",
        value: function (e21) {
          var t3,
            n3,
            r2,
            i3,
            o2,
            a2,
            s2 = this.props,
            c2 = s2.x,
            u2 = s2.y,
            f2 = s2.width,
            d2 = s2.height,
            p2 = s2.orientation,
            h2 = s2.tickSize,
            y2 = s2.mirror,
            m2 = s2.tickMargin,
            v2 = y2 ? -1 : 1,
            g2 = e21.tickSize || h2,
            b2 = em$1(e21.tickCoord) ? e21.tickCoord : e21.coordinate;
          switch (p2) {
            case "top":
              (t3 = n3 = e21.coordinate),
                (a2 = (r2 = (i3 = u2 + +!y2 * d2) - v2 * g2) - v2 * m2),
                (o2 = b2);
              break;
            case "left":
              (r2 = i3 = e21.coordinate),
                (o2 = (t3 = (n3 = c2 + +!y2 * f2) - v2 * g2) - v2 * m2),
                (a2 = b2);
              break;
            case "right":
              (r2 = i3 = e21.coordinate),
                (o2 = (t3 = (n3 = c2 + +y2 * f2) + v2 * g2) + v2 * m2),
                (a2 = b2);
              break;
            default:
              (t3 = n3 = e21.coordinate),
                (a2 = (r2 = (i3 = u2 + +y2 * d2) + v2 * g2) + v2 * m2),
                (o2 = b2);
          }
          return { line: { x1: t3, y1: r2, x2: n3, y2: i3 }, tick: { x: o2, y: a2 } };
        },
      },
      {
        key: "getTickTextAnchor",
        value: function () {
          var e21,
            t3 = this.props,
            n3 = t3.orientation,
            r2 = t3.mirror;
          switch (n3) {
            case "left":
              e21 = r2 ? "start" : "end";
              break;
            case "right":
              e21 = r2 ? "end" : "start";
              break;
            default:
              e21 = "middle";
          }
          return e21;
        },
      },
      {
        key: "getTickVerticalAnchor",
        value: function () {
          var e21 = this.props,
            t3 = e21.orientation,
            n3 = e21.mirror,
            r2 = "end";
          switch (t3) {
            case "left":
            case "right":
              r2 = "middle";
              break;
            case "top":
              r2 = n3 ? "start" : "end";
              break;
            default:
              r2 = n3 ? "end" : "start";
          }
          return r2;
        },
      },
      {
        key: "renderAxisLine",
        value: function () {
          var e21 = this.props,
            t3 = e21.x,
            n3 = e21.y,
            i3 = e21.width,
            o2 = e21.height,
            a2 = e21.orientation,
            s2 = e21.mirror,
            c2 = e21.axisLine,
            l2 = Ux(Ux(Ux({}, Ng$1(this.props, false)), Ng$1(c2, false)), {}, { fill: "none" });
          if ("top" === a2 || "bottom" === a2) {
            var u2 = +(("top" === a2 && !s2) || ("bottom" === a2 && s2));
            l2 = Ux(Ux({}, l2), {}, { x1: t3, y1: n3 + u2 * o2, x2: t3 + i3, y2: n3 + u2 * o2 });
          } else {
            var f2 = +(("left" === a2 && !s2) || ("right" === a2 && s2));
            l2 = Ux(Ux({}, l2), {}, { x1: t3 + f2 * i3, y1: n3, x2: t3 + f2 * i3, y2: n3 + o2 });
          }
          return g__default.createElement(
            "line",
            qx({}, l2, { className: Nt("recharts-cartesian-axis-line", Ah$1(c2, "className")) }),
          );
        },
      },
      {
        key: "renderTicks",
        value: function (t3, n3, i3) {
          var o2 = this,
            s2 = this.props,
            l2 = s2.tickLine,
            u2 = s2.stroke,
            f2 = s2.tick,
            d2 = s2.tickFormatter,
            p2 = s2.unit,
            h2 = Dx(Ux(Ux({}, this.props), {}, { ticks: t3 }), n3, i3),
            y2 = this.getTickTextAnchor(),
            m2 = this.getTickVerticalAnchor(),
            v2 = Ng$1(this.props, false),
            g2 = Ng$1(f2, false),
            b2 = Ux(Ux({}, v2), {}, { fill: "none" }, Ng$1(l2, false)),
            x2 = h2.map(function (t4, n4) {
              var r2 = o2.getTickLineCoord(t4),
                i4 = r2.line,
                s3 = r2.tick,
                x3 = Ux(
                  Ux(
                    Ux(
                      Ux({ textAnchor: y2, verticalAnchor: m2 }, v2),
                      {},
                      { stroke: "none", fill: u2 },
                      g2,
                    ),
                    s3,
                  ),
                  {},
                  { index: n4, payload: t4, visibleTicksCount: h2.length, tickFormatter: d2 },
                );
              return g__default.createElement(
                nn,
                qx(
                  {
                    className: "recharts-cartesian-axis-tick",
                    key: "tick-"
                      .concat(t4.value, "-")
                      .concat(t4.coordinate, "-")
                      .concat(t4.tickCoord),
                  },
                  ym$1(o2.props, t4, n4),
                ),
                l2 &&
                  g__default.createElement(
                    "line",
                    qx({}, b2, i4, {
                      className: Nt("recharts-cartesian-axis-tick-line", Ah$1(l2, "className")),
                    }),
                  ),
                f2 &&
                  e20.renderTickItem(
                    f2,
                    x3,
                    "".concat(zh$1(d2) ? d2(t4.value, n4) : t4.value).concat(p2 || ""),
                  ),
              );
            });
          return g__default.createElement("g", { className: "recharts-cartesian-axis-ticks" }, x2);
        },
      },
      {
        key: "render",
        value: function () {
          var e21 = this,
            t3 = this.props,
            n3 = t3.axisLine,
            r2 = t3.width,
            i3 = t3.height,
            o2 = t3.ticksGenerator,
            s2 = t3.className;
          if (t3.hide) return null;
          var c2 = this.props,
            l2 = c2.ticks,
            u2 = Wx(c2, $x),
            f2 = l2;
          return (
            zh$1(o2) && (f2 = l2 && l2.length > 0 ? o2(this.props) : o2(u2)),
            r2 <= 0 || i3 <= 0 || !f2 || !f2.length
              ? null
              : g__default.createElement(
                  nn,
                  {
                    className: Nt("recharts-cartesian-axis", s2),
                    ref: function (t4) {
                      e21.layerReference = t4;
                    },
                  },
                  n3 && this.renderAxisLine(),
                  this.renderTicks(f2, this.state.fontSize, this.state.letterSpacing),
                  dd.renderCallByParent(this.props),
                )
          );
        },
      },
    ]),
    (i2 = [
      {
        key: "renderTickItem",
        value: function (e21, t3, n3) {
          var r2 = Nt(t3.className, "recharts-cartesian-axis-tick-value");
          return g__default.isValidElement(e21)
            ? g__default.cloneElement(e21, Ux(Ux({}, t3), {}, { className: r2 }))
            : zh$1(e21)
              ? e21(Ux(Ux({}, t3), {}, { className: r2 }))
              : g__default.createElement(
                  Ii,
                  qx({}, t3, { className: "recharts-cartesian-axis-tick-value" }),
                  n3,
                );
        },
      },
    ]),
    n2 && Vx(t2.prototype, n2),
    i2 && Vx(t2, i2),
    Object.defineProperty(t2, "prototype", { writable: false }),
    t2
  );
  var t2, n2, i2;
})();
function Jx(e20) {
  return (
    (Jx =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Jx(e20)
  );
}
function ew(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, aw(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function tw(e20, t2, n2) {
  return (
    (t2 = rw(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Jx(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, nw() ? Reflect.construct(t2, n2 || [], rw(e20).constructor) : t2.apply(e20, n2))
  );
}
function nw() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (nw = function () {
    return !!e20;
  })();
}
function rw(e20) {
  return (
    (rw = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    rw(e20)
  );
}
function iw(e20, t2) {
  return (
    (iw = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    iw(e20, t2)
  );
}
function ow(e20, t2, n2) {
  return (
    (t2 = aw(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function aw(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Jx(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Jx(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Jx(t2) ? t2 : t2 + "";
}
function sw() {
  return (
    (sw = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    sw.apply(this, arguments)
  );
}
function cw(e20) {
  var t2 = e20.xAxisId,
    n2 = Fb(),
    r2 = Ub(),
    i2 = Rb(t2);
  return null == i2
    ? null
    : g.createElement(
        Zx,
        sw({}, i2, {
          className: Nt("recharts-".concat(i2.axisType, " ").concat(i2.axisType), i2.className),
          viewBox: { x: 0, y: 0, width: n2, height: r2 },
          ticksGenerator: function (e21) {
            return Sf(e21, true);
          },
        }),
      );
}
Kx(Zx, "displayName", "CartesianAxis"),
  Kx(Zx, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: true,
    axisLine: true,
    tick: true,
    mirror: false,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd",
  });
var lw = (function () {
  function e20() {
    return (
      (function (e21, t2) {
        if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
      tw(this, e20, arguments)
    );
  }
  return (
    (function (e21, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      (e21.prototype = Object.create(t2 && t2.prototype, {
        constructor: { value: e21, writable: true, configurable: true },
      })),
        Object.defineProperty(e21, "prototype", { writable: false }),
        t2 && iw(e21, t2);
    })(e20, g.Component),
    ew(e20, [
      {
        key: "render",
        value: function () {
          return g.createElement(cw, this.props);
        },
      },
    ])
  );
})();
function uw(e20) {
  return (
    (uw =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    uw(e20)
  );
}
function fw(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, vw(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function dw(e20, t2, n2) {
  return (
    (t2 = hw(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === uw(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, pw() ? Reflect.construct(t2, n2 || [], hw(e20).constructor) : t2.apply(e20, n2))
  );
}
function pw() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (pw = function () {
    return !!e20;
  })();
}
function hw(e20) {
  return (
    (hw = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    hw(e20)
  );
}
function yw(e20, t2) {
  return (
    (yw = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    yw(e20, t2)
  );
}
function mw(e20, t2, n2) {
  return (
    (t2 = vw(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function vw(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != uw(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != uw(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == uw(t2) ? t2 : t2 + "";
}
function gw() {
  return (
    (gw = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    gw.apply(this, arguments)
  );
}
ow(lw, "displayName", "XAxis"),
  ow(lw, "defaultProps", {
    allowDecimals: true,
    hide: false,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: false,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: { left: 0, right: 0 },
    allowDataOverflow: false,
    scale: "auto",
    reversed: false,
    allowDuplicatedCategory: true,
  });
var bw = function (e20) {
    var t2 = e20.yAxisId,
      n2 = Fb(),
      r2 = Ub(),
      i2 = Bb(t2);
    return null == i2
      ? null
      : g.createElement(
          Zx,
          gw({}, i2, {
            className: Nt("recharts-".concat(i2.axisType, " ").concat(i2.axisType), i2.className),
            viewBox: { x: 0, y: 0, width: n2, height: r2 },
            ticksGenerator: function (e21) {
              return Sf(e21, true);
            },
          }),
        );
  },
  xw = (function () {
    function e20() {
      return (
        (function (e21, t2) {
          if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        })(this, e20),
        dw(this, e20, arguments)
      );
    }
    return (
      (function (e21, t2) {
        if ("function" != typeof t2 && null !== t2)
          throw new TypeError("Super expression must either be null or a function");
        (e21.prototype = Object.create(t2 && t2.prototype, {
          constructor: { value: e21, writable: true, configurable: true },
        })),
          Object.defineProperty(e21, "prototype", { writable: false }),
          t2 && yw(e21, t2);
      })(e20, g.Component),
      fw(e20, [
        {
          key: "render",
          value: function () {
            return g.createElement(bw, this.props);
          },
        },
      ])
    );
  })();
function ww(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return Ow(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    (function (e21, t2) {
      if (!e21) return;
      if ("string" == typeof e21) return Ow(e21, t2);
      var n2 = Object.prototype.toString.call(e21).slice(8, -1);
      "Object" === n2 && e21.constructor && (n2 = e21.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(e21);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return Ow(e21, t2);
    })(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Ow(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
mw(xw, "displayName", "YAxis"),
  mw(xw, "defaultProps", {
    allowDuplicatedCategory: true,
    allowDecimals: true,
    hide: false,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: false,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: false,
    scale: "auto",
    reversed: false,
  });
var Sw,
  Aw = function (e20, t2, n2, r2, i2) {
    var o2 = Am$1(e20, ix),
      a2 = Am$1(e20, mx),
      s2 = [].concat(ww(o2), ww(a2)),
      c2 = Am$1(e20, kx),
      u2 = "".concat(r2, "Id"),
      f2 = r2[0],
      d2 = t2;
    if (
      (s2.length &&
        (d2 = s2.reduce(function (e21, t3) {
          if (t3.props[u2] === n2 && Ag(t3.props, "extendDomain") && em$1(t3.props[f2])) {
            var r3 = t3.props[f2];
            return [Math.min(e21[0], r3), Math.max(e21[1], r3)];
          }
          return e21;
        }, d2)),
      c2.length)
    ) {
      var p2 = "".concat(f2, "1"),
        h2 = "".concat(f2, "2");
      d2 = c2.reduce(function (e21, t3) {
        if (
          t3.props[u2] === n2 &&
          Ag(t3.props, "extendDomain") &&
          em$1(t3.props[p2]) &&
          em$1(t3.props[h2])
        ) {
          var r3 = t3.props[p2],
            i3 = t3.props[h2];
          return [Math.min(e21[0], r3, i3), Math.max(e21[1], r3, i3)];
        }
        return e21;
      }, d2);
    }
    return (
      i2 &&
        i2.length &&
        (d2 = i2.reduce(function (e21, t3) {
          return em$1(t3) ? [Math.min(e21[0], t3), Math.max(e21[1], t3)] : e21;
        }, d2)),
      d2
    );
  },
  jw = { exports: {} };
var Mw =
  (Sw ||
    ((Sw = 1),
    (function (e20) {
      var t2 = Object.prototype.hasOwnProperty,
        n2 = "~";
      function r2() {}
      function i2(e21, t3, n3) {
        (this.fn = e21), (this.context = t3), (this.once = n3 || false);
      }
      function o2(e21, t3, r3, o3, a3) {
        if ("function" != typeof r3) throw new TypeError("The listener must be a function");
        var s3 = new i2(r3, o3 || e21, a3),
          c2 = n2 ? n2 + t3 : t3;
        return (
          e21._events[c2]
            ? e21._events[c2].fn
              ? (e21._events[c2] = [e21._events[c2], s3])
              : e21._events[c2].push(s3)
            : ((e21._events[c2] = s3), e21._eventsCount++),
          e21
        );
      }
      function a2(e21, t3) {
        0 == --e21._eventsCount ? (e21._events = new r2()) : delete e21._events[t3];
      }
      function s2() {
        (this._events = new r2()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r2.prototype = /* @__PURE__ */ Object.create(null)), new r2().__proto__ || (n2 = false)),
        (s2.prototype.eventNames = function () {
          var e21,
            r3,
            i3 = [];
          if (0 === this._eventsCount) return i3;
          for (r3 in (e21 = this._events)) t2.call(e21, r3) && i3.push(n2 ? r3.slice(1) : r3);
          return Object.getOwnPropertySymbols ? i3.concat(Object.getOwnPropertySymbols(e21)) : i3;
        }),
        (s2.prototype.listeners = function (e21) {
          var t3 = n2 ? n2 + e21 : e21,
            r3 = this._events[t3];
          if (!r3) return [];
          if (r3.fn) return [r3.fn];
          for (var i3 = 0, o3 = r3.length, a3 = new Array(o3); i3 < o3; i3++) a3[i3] = r3[i3].fn;
          return a3;
        }),
        (s2.prototype.listenerCount = function (e21) {
          var t3 = n2 ? n2 + e21 : e21,
            r3 = this._events[t3];
          return r3 ? (r3.fn ? 1 : r3.length) : 0;
        }),
        (s2.prototype.emit = function (e21, t3, r3, i3, o3, a3) {
          var s3 = n2 ? n2 + e21 : e21;
          if (!this._events[s3]) return false;
          var c2,
            l2,
            u2 = this._events[s3],
            f2 = arguments.length;
          if (u2.fn) {
            switch ((u2.once && this.removeListener(e21, u2.fn, void 0, true), f2)) {
              case 1:
                return u2.fn.call(u2.context), true;
              case 2:
                return u2.fn.call(u2.context, t3), true;
              case 3:
                return u2.fn.call(u2.context, t3, r3), true;
              case 4:
                return u2.fn.call(u2.context, t3, r3, i3), true;
              case 5:
                return u2.fn.call(u2.context, t3, r3, i3, o3), true;
              case 6:
                return u2.fn.call(u2.context, t3, r3, i3, o3, a3), true;
            }
            for (l2 = 1, c2 = new Array(f2 - 1); l2 < f2; l2++) c2[l2 - 1] = arguments[l2];
            u2.fn.apply(u2.context, c2);
          } else {
            var d2,
              p2 = u2.length;
            for (l2 = 0; l2 < p2; l2++)
              switch ((u2[l2].once && this.removeListener(e21, u2[l2].fn, void 0, true), f2)) {
                case 1:
                  u2[l2].fn.call(u2[l2].context);
                  break;
                case 2:
                  u2[l2].fn.call(u2[l2].context, t3);
                  break;
                case 3:
                  u2[l2].fn.call(u2[l2].context, t3, r3);
                  break;
                case 4:
                  u2[l2].fn.call(u2[l2].context, t3, r3, i3);
                  break;
                default:
                  if (!c2)
                    for (d2 = 1, c2 = new Array(f2 - 1); d2 < f2; d2++) c2[d2 - 1] = arguments[d2];
                  u2[l2].fn.apply(u2[l2].context, c2);
              }
          }
          return true;
        }),
        (s2.prototype.on = function (e21, t3, n3) {
          return o2(this, e21, t3, n3, false);
        }),
        (s2.prototype.once = function (e21, t3, n3) {
          return o2(this, e21, t3, n3, true);
        }),
        (s2.prototype.removeListener = function (e21, t3, r3, i3) {
          var o3 = n2 ? n2 + e21 : e21;
          if (!this._events[o3]) return this;
          if (!t3) return a2(this, o3), this;
          var s3 = this._events[o3];
          if (s3.fn) s3.fn !== t3 || (i3 && !s3.once) || (r3 && s3.context !== r3) || a2(this, o3);
          else {
            for (var c2 = 0, l2 = [], u2 = s3.length; c2 < u2; c2++)
              (s3[c2].fn !== t3 || (i3 && !s3[c2].once) || (r3 && s3[c2].context !== r3)) &&
                l2.push(s3[c2]);
            l2.length ? (this._events[o3] = 1 === l2.length ? l2[0] : l2) : a2(this, o3);
          }
          return this;
        }),
        (s2.prototype.removeAllListeners = function (e21) {
          var t3;
          return (
            e21
              ? ((t3 = n2 ? n2 + e21 : e21), this._events[t3] && a2(this, t3))
              : ((this._events = new r2()), (this._eventsCount = 0)),
            this
          );
        }),
        (s2.prototype.off = s2.prototype.removeListener),
        (s2.prototype.addListener = s2.prototype.on),
        (s2.prefixed = n2),
        (s2.EventEmitter = s2),
        (e20.exports = s2);
    })(jw)),
  jw.exports);
var Pw = new (Td$1(Mw))(),
  kw = "recharts.syncMouseEvents";
function Ew(e20) {
  return (
    (Ew =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Ew(e20)
  );
}
function Tw(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, Iw(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Nw(e20, t2, n2) {
  return (
    (t2 = Iw(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Iw(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Ew(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Ew(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e21);
  })(e20, "string");
  return "symbol" == Ew(t2) ? t2 : t2 + "";
}
var _w = (function () {
  return Tw(
    function e20() {
      !(function (e21, t2) {
        if (!(e21 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      })(this, e20),
        Nw(this, "activeIndex", 0),
        Nw(this, "coordinateList", []),
        Nw(this, "layout", "horizontal");
    },
    [
      {
        key: "setDetails",
        value: function (e20) {
          var t2,
            n2 = e20.coordinateList,
            r2 = void 0 === n2 ? null : n2,
            i2 = e20.container,
            o2 = void 0 === i2 ? null : i2,
            a2 = e20.layout,
            s2 = void 0 === a2 ? null : a2,
            c2 = e20.offset,
            l2 = void 0 === c2 ? null : c2,
            u2 = e20.mouseHandlerCallback,
            f2 = void 0 === u2 ? null : u2;
          (this.coordinateList =
            null !== (t2 = null != r2 ? r2 : this.coordinateList) && void 0 !== t2 ? t2 : []),
            (this.container = null != o2 ? o2 : this.container),
            (this.layout = null != s2 ? s2 : this.layout),
            (this.offset = null != l2 ? l2 : this.offset),
            (this.mouseHandlerCallback = null != f2 ? f2 : this.mouseHandlerCallback),
            (this.activeIndex = Math.min(
              Math.max(this.activeIndex, 0),
              this.coordinateList.length - 1,
            ));
        },
      },
      {
        key: "focus",
        value: function () {
          this.spoofMouse();
        },
      },
      {
        key: "keyboardEvent",
        value: function (e20) {
          if (0 !== this.coordinateList.length)
            switch (e20.key) {
              case "ArrowRight":
                if ("horizontal" !== this.layout) return;
                (this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1)),
                  this.spoofMouse();
                break;
              case "ArrowLeft":
                if ("horizontal" !== this.layout) return;
                (this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse();
            }
        },
      },
      {
        key: "setIndex",
        value: function (e20) {
          this.activeIndex = e20;
        },
      },
      {
        key: "spoofMouse",
        value: function () {
          var e20, t2;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var n2 = this.container.getBoundingClientRect(),
              r2 = n2.x,
              i2 = n2.y,
              o2 = n2.height,
              a2 = this.coordinateList[this.activeIndex].coordinate,
              s2 = (null === (e20 = window) || void 0 === e20 ? void 0 : e20.scrollX) || 0,
              c2 = (null === (t2 = window) || void 0 === t2 ? void 0 : t2.scrollY) || 0,
              l2 = r2 + a2 + s2,
              u2 = i2 + this.offset.top + o2 / 2 + c2;
            this.mouseHandlerCallback({ pageX: l2, pageY: u2 });
          }
        },
      },
    ],
  );
})();
function Cw(e20) {
  var t2 = e20.cx,
    n2 = e20.cy,
    r2 = e20.radius,
    i2 = e20.startAngle,
    o2 = e20.endAngle;
  return {
    points: [Xf(t2, n2, r2, i2), Xf(t2, n2, r2, o2)],
    cx: t2,
    cy: n2,
    radius: r2,
    startAngle: i2,
    endAngle: o2,
  };
}
function zw(e20, t2, n2) {
  var r2, i2, o2, a2;
  if ("horizontal" === e20) (o2 = r2 = t2.x), (i2 = n2.top), (a2 = n2.top + n2.height);
  else if ("vertical" === e20) (a2 = i2 = t2.y), (r2 = n2.left), (o2 = n2.left + n2.width);
  else if (null != t2.cx && null != t2.cy) {
    if ("centric" !== e20) return Cw(t2);
    var s2 = t2.cx,
      c2 = t2.cy,
      l2 = t2.innerRadius,
      u2 = t2.outerRadius,
      f2 = t2.angle,
      d2 = Xf(s2, c2, l2, f2),
      p2 = Xf(s2, c2, u2, f2);
    (r2 = d2.x), (i2 = d2.y), (o2 = p2.x), (a2 = p2.y);
  }
  return [
    { x: r2, y: i2 },
    { x: o2, y: a2 },
  ];
}
function Dw(e20) {
  return (
    (Dw =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Dw(e20)
  );
}
function Rw(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function Lw(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? Rw(Object(n2), true).forEach(function (t3) {
          $w(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : Rw(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function $w(e20, t2, n2) {
  var r2;
  return (
    (r2 = (function (e21, t3) {
      if ("object" != Dw(e21) || !e21) return e21;
      var n3 = e21[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e21, t3);
        if ("object" != Dw(r3)) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t3 ? String : Number)(e21);
    })(t2, "string")),
    (t2 = "symbol" == Dw(r2) ? r2 : r2 + "") in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function Bw(e20) {
  var t2,
    n2,
    i2,
    o2 = e20.element,
    a2 = e20.tooltipEventType,
    s2 = e20.isActive,
    c2 = e20.activeCoordinate,
    l2 = e20.activePayload,
    u2 = e20.offset,
    f2 = e20.activeTooltipIndex,
    d2 = e20.tooltipAxisBandSize,
    p2 = e20.layout,
    h2 = e20.chartName,
    y2 =
      null !== (t2 = o2.props.cursor) && void 0 !== t2
        ? t2
        : null === (n2 = o2.type.defaultProps) || void 0 === n2
          ? void 0
          : n2.cursor;
  if (!o2 || !y2 || !s2 || !c2 || ("ScatterChart" !== h2 && "axis" !== a2)) return null;
  var m2 = Kd;
  if ("ScatterChart" === h2) (i2 = c2), (m2 = Py);
  else if ("BarChart" === h2)
    (i2 = (function (e21, t3, n3, r2) {
      var i3 = r2 / 2;
      return {
        stroke: "none",
        fill: "#ccc",
        x: "horizontal" === e21 ? t3.x - i3 : n3.left + 0.5,
        y: "horizontal" === e21 ? n3.top + 0.5 : t3.y - i3,
        width: "horizontal" === e21 ? r2 : n3.width - 1,
        height: "horizontal" === e21 ? n3.height - 1 : r2,
      };
    })(p2, c2, u2, d2)),
      (m2 = ly);
  else if ("radial" === p2) {
    var v2 = Cw(c2),
      g2 = v2.cx,
      b2 = v2.cy,
      x2 = v2.radius;
    (i2 = {
      cx: g2,
      cy: b2,
      startAngle: v2.startAngle,
      endAngle: v2.endAngle,
      innerRadius: x2,
      outerRadius: x2,
    }),
      (m2 = Ld);
  } else (i2 = { points: zw(p2, c2, u2) }), (m2 = Kd);
  var w2 = Lw(
    Lw(Lw(Lw({ stroke: "#ccc", pointerEvents: "none" }, u2), i2), Ng$1(y2, false)),
    {},
    { payload: l2, payloadIndex: f2, className: Nt("recharts-tooltip-cursor", y2.className) },
  );
  return isValidElement(y2) ? cloneElement(y2, w2) : createElement(m2, w2);
}
var qw = ["item"],
  Fw = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Uw(e20) {
  return (
    (Uw =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e21) {
            return typeof e21;
          }
        : function (e21) {
            return e21 &&
              "function" == typeof Symbol &&
              e21.constructor === Symbol &&
              e21 !== Symbol.prototype
              ? "symbol"
              : typeof e21;
          }),
    Uw(e20)
  );
}
function Ww() {
  return (
    (Ww = Object.assign
      ? Object.assign.bind()
      : function (e20) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e20[r2] = n2[r2]);
          }
          return e20;
        }),
    Ww.apply(this, arguments)
  );
}
function Vw(e20, t2) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return e21;
    })(e20) ||
    (function (e21, t3) {
      var n2 =
        null == e21
          ? null
          : ("undefined" != typeof Symbol && e21[Symbol.iterator]) || e21["@@iterator"];
      if (null != n2) {
        var r2,
          i2,
          o2,
          a2,
          s2 = [],
          c2 = true,
          l2 = false;
        try {
          if (((o2 = (n2 = n2.call(e21)).next), 0 === t3));
          else
            for (
              ;
              !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3);
              c2 = true
            );
        } catch (e22) {
          (l2 = true), (i2 = e22);
        } finally {
          try {
            if (!c2 && null != n2.return && ((a2 = n2.return()), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw i2;
          }
        }
        return s2;
      }
    })(e20, t2) ||
    Jw(e20, t2) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Qw(e20, t2) {
  if (null == e20) return {};
  var n2,
    r2,
    i2 = (function (e21, t3) {
      if (null == e21) return {};
      var n3 = {};
      for (var r3 in e21)
        if (Object.prototype.hasOwnProperty.call(e21, r3)) {
          if (t3.indexOf(r3) >= 0) continue;
          n3[r3] = e21[r3];
        }
      return n3;
    })(e20, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e20);
    for (r2 = 0; r2 < o2.length; r2++)
      (n2 = o2[r2]),
        t2.indexOf(n2) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e20, n2) && (i2[n2] = e20[n2]));
  }
  return i2;
}
function Gw(e20, t2, n2) {
  return (
    t2 &&
      (function (e21, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          (r2.enumerable = r2.enumerable || false),
            (r2.configurable = true),
            "value" in r2 && (r2.writable = true),
            Object.defineProperty(e21, iO(r2.key), r2);
        }
      })(e20.prototype, t2),
    Object.defineProperty(e20, "prototype", { writable: false }),
    e20
  );
}
function Hw(e20, t2, n2) {
  return (
    (t2 = Kw(t2)),
    (function (e21, t3) {
      if (t3 && ("object" === Uw(t3) || "function" == typeof t3)) return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return (function (e22) {
        if (void 0 === e22)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e22;
      })(e21);
    })(e20, Xw() ? Reflect.construct(t2, n2 || [], Kw(e20).constructor) : t2.apply(e20, n2))
  );
}
function Xw() {
  try {
    var e20 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (e21) {}
  return (Xw = function () {
    return !!e20;
  })();
}
function Kw(e20) {
  return (
    (Kw = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e21) {
          return e21.__proto__ || Object.getPrototypeOf(e21);
        }),
    Kw(e20)
  );
}
function Yw(e20, t2) {
  return (
    (Yw = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e21, t3) {
          return (e21.__proto__ = t3), e21;
        }),
    Yw(e20, t2)
  );
}
function Zw(e20) {
  return (
    (function (e21) {
      if (Array.isArray(e21)) return eO(e21);
    })(e20) ||
    (function (e21) {
      if (
        ("undefined" != typeof Symbol && null != e21[Symbol.iterator]) ||
        null != e21["@@iterator"]
      )
        return Array.from(e21);
    })(e20) ||
    Jw(e20) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function Jw(e20, t2) {
  if (e20) {
    if ("string" == typeof e20) return eO(e20, t2);
    var n2 = Object.prototype.toString.call(e20).slice(8, -1);
    return (
      "Object" === n2 && e20.constructor && (n2 = e20.constructor.name),
      "Map" === n2 || "Set" === n2
        ? Array.from(e20)
        : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)
          ? eO(e20, t2)
          : void 0
    );
  }
}
function eO(e20, t2) {
  (null == t2 || t2 > e20.length) && (t2 = e20.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e20[n2];
  return r2;
}
function tO(e20, t2) {
  var n2 = Object.keys(e20);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e20);
    t2 &&
      (r2 = r2.filter(function (t3) {
        return Object.getOwnPropertyDescriptor(e20, t3).enumerable;
      })),
      n2.push.apply(n2, r2);
  }
  return n2;
}
function nO(e20) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2
      ? tO(Object(n2), true).forEach(function (t3) {
          rO(e20, t3, n2[t3]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e20, Object.getOwnPropertyDescriptors(n2))
        : tO(Object(n2)).forEach(function (t3) {
            Object.defineProperty(e20, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
  }
  return e20;
}
function rO(e20, t2, n2) {
  return (
    (t2 = iO(t2)) in e20
      ? Object.defineProperty(e20, t2, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (e20[t2] = n2),
    e20
  );
}
function iO(e20) {
  var t2 = (function (e21, t3) {
    if ("object" != Uw(e21) || !e21) return e21;
    var n2 = e21[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e21, t3);
      if ("object" != Uw(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e21);
  })(e20, "string");
  return "symbol" == Uw(t2) ? t2 : t2 + "";
}
var oO = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  aO = { width: "100%", height: "100%" },
  sO = { x: 0, y: 0 };
function cO(e20) {
  return e20;
}
var lO = function (e20, t2) {
  var n2 = t2.graphicalItems,
    r2 = t2.dataStartIndex,
    i2 = t2.dataEndIndex,
    o2 = (null != n2 ? n2 : []).reduce(function (e21, t3) {
      var n3 = t3.props.data;
      return n3 && n3.length ? [].concat(Zw(e21), Zw(n3)) : e21;
    }, []);
  return o2.length > 0
    ? o2
    : e20 && e20.length && em$1(r2) && em$1(i2)
      ? e20.slice(r2, i2 + 1)
      : [];
};
function uO(e20) {
  return "number" === e20 ? [0, "auto"] : void 0;
}
var fO = function (e20, t2, n2, r2) {
    var i2 = e20.graphicalItems,
      o2 = e20.tooltipAxis,
      a2 = lO(t2, e20);
    return n2 < 0 || !i2 || !i2.length || n2 >= a2.length
      ? null
      : i2.reduce(function (i3, s2) {
          var c2,
            l2,
            u2 = null !== (c2 = s2.props.data) && void 0 !== c2 ? c2 : t2;
          (u2 &&
            e20.dataStartIndex + e20.dataEndIndex !== 0 &&
            e20.dataEndIndex - e20.dataStartIndex >= n2 &&
            (u2 = u2.slice(e20.dataStartIndex, e20.dataEndIndex + 1)),
          o2.dataKey && !o2.allowDuplicatedCategory)
            ? (l2 = cm$1(void 0 === u2 ? a2 : u2, o2.dataKey, r2))
            : (l2 = (u2 && u2[n2]) || a2[n2]);
          return l2 ? [].concat(Zw(i3), [Bf(s2, l2)]) : i3;
        }, []);
  },
  dO = function (e20, t2, n2, r2) {
    var i2 = r2 || { x: e20.chartX, y: e20.chartY },
      o2 = (function (e21, t3) {
        return "horizontal" === t3
          ? e21.x
          : "vertical" === t3
            ? e21.y
            : "centric" === t3
              ? e21.angle
              : e21.radius;
      })(i2, n2),
      a2 = e20.orderedTooltipTicks,
      s2 = e20.tooltipAxis,
      c2 = e20.tooltipTicks,
      l2 = (function (e21) {
        var t3,
          n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r3 = arguments.length > 2 ? arguments[2] : void 0,
          i3 = arguments.length > 3 ? arguments[3] : void 0,
          o3 = -1,
          a3 = null !== (t3 = null == n3 ? void 0 : n3.length) && void 0 !== t3 ? t3 : 0;
        if (a3 <= 1) return 0;
        if (
          i3 &&
          "angleAxis" === i3.axisType &&
          Math.abs(Math.abs(i3.range[1] - i3.range[0]) - 360) <= 1e-6
        )
          for (var s3 = i3.range, c3 = 0; c3 < a3; c3++) {
            var l3 = c3 > 0 ? r3[c3 - 1].coordinate : r3[a3 - 1].coordinate,
              u3 = r3[c3].coordinate,
              f3 = c3 >= a3 - 1 ? r3[0].coordinate : r3[c3 + 1].coordinate,
              d3 = void 0;
            if (Jh$1(u3 - l3) !== Jh$1(f3 - u3)) {
              var p2 = [];
              if (Jh$1(f3 - u3) === Jh$1(s3[1] - s3[0])) {
                d3 = f3;
                var h2 = u3 + s3[1] - s3[0];
                (p2[0] = Math.min(h2, (h2 + l3) / 2)), (p2[1] = Math.max(h2, (h2 + l3) / 2));
              } else {
                d3 = l3;
                var y2 = f3 + s3[1] - s3[0];
                (p2[0] = Math.min(u3, (y2 + u3) / 2)), (p2[1] = Math.max(u3, (y2 + u3) / 2));
              }
              var m2 = [Math.min(u3, (d3 + u3) / 2), Math.max(u3, (d3 + u3) / 2)];
              if ((e21 > m2[0] && e21 <= m2[1]) || (e21 >= p2[0] && e21 <= p2[1])) {
                o3 = r3[c3].index;
                break;
              }
            } else {
              var v2 = Math.min(l3, f3),
                g2 = Math.max(l3, f3);
              if (e21 > (v2 + u3) / 2 && e21 <= (g2 + u3) / 2) {
                o3 = r3[c3].index;
                break;
              }
            }
          }
        else
          for (var b2 = 0; b2 < a3; b2++)
            if (
              (0 === b2 && e21 <= (n3[b2].coordinate + n3[b2 + 1].coordinate) / 2) ||
              (b2 > 0 &&
                b2 < a3 - 1 &&
                e21 > (n3[b2].coordinate + n3[b2 - 1].coordinate) / 2 &&
                e21 <= (n3[b2].coordinate + n3[b2 + 1].coordinate) / 2) ||
              (b2 === a3 - 1 && e21 > (n3[b2].coordinate + n3[b2 - 1].coordinate) / 2)
            ) {
              o3 = n3[b2].index;
              break;
            }
        return o3;
      })(o2, a2, c2, s2);
    if (l2 >= 0 && c2) {
      var u2 = c2[l2] && c2[l2].value,
        f2 = fO(e20, t2, l2, u2),
        d2 = (function (e21, t3, n3, r3) {
          var i3 = t3.find(function (e22) {
            return e22 && e22.index === n3;
          });
          if (i3) {
            if ("horizontal" === e21) return { x: i3.coordinate, y: r3.y };
            if ("vertical" === e21) return { x: r3.x, y: i3.coordinate };
            if ("centric" === e21) {
              var o3 = i3.coordinate,
                a3 = r3.radius;
              return nO(nO(nO({}, r3), Xf(r3.cx, r3.cy, a3, o3)), {}, { angle: o3, radius: a3 });
            }
            var s3 = i3.coordinate,
              c3 = r3.angle;
            return nO(nO(nO({}, r3), Xf(r3.cx, r3.cy, s3, c3)), {}, { angle: c3, radius: s3 });
          }
          return sO;
        })(n2, a2, l2, i2);
      return { activeTooltipIndex: l2, activeLabel: u2, activePayload: f2, activeCoordinate: d2 };
    }
    return null;
  },
  pO = function (e20, t2) {
    var n2 = t2.axes,
      r2 = t2.graphicalItems,
      i2 = t2.axisType,
      o2 = t2.axisIdKey,
      a2 = t2.stackGroups,
      s2 = t2.dataStartIndex,
      c2 = t2.dataEndIndex,
      u2 = e20.layout,
      f2 = e20.children,
      d2 = e20.stackOffset,
      h2 = wf(u2, i2);
    return n2.reduce(function (t3, n3) {
      var y2,
        m2 =
          void 0 !== n3.type.defaultProps ? nO(nO({}, n3.type.defaultProps), n3.props) : n3.props,
        v2 = m2.type,
        g2 = m2.dataKey,
        b2 = m2.allowDataOverflow,
        x2 = m2.allowDuplicatedCategory,
        w2 = m2.scale,
        O2 = m2.ticks,
        S2 = m2.includeHidden,
        A2 = m2[o2];
      if (t3[A2]) return t3;
      var j2,
        M2,
        P2,
        k2 = lO(e20.data, {
          graphicalItems: r2.filter(function (e21) {
            var t4;
            return (
              (o2 in e21.props
                ? e21.props[o2]
                : null === (t4 = e21.type.defaultProps) || void 0 === t4
                  ? void 0
                  : t4[o2]) === A2
            );
          }),
          dataStartIndex: s2,
          dataEndIndex: c2,
        }),
        E2 = k2.length;
      (function (e21, t4, n4) {
        if ("number" === n4 && true === t4 && Array.isArray(e21)) {
          var r3 = null == e21 ? void 0 : e21[0],
            i3 = null == e21 ? void 0 : e21[1];
          if (r3 && i3 && em$1(r3) && em$1(i3)) return true;
        }
        return false;
      })(m2.domain, b2, v2) &&
        ((j2 = Rf(m2.domain, null, b2)),
        !h2 || ("number" !== v2 && "auto" === w2) || (P2 = vf(k2, g2, "category")));
      var T2 = uO(v2);
      if (!j2 || 0 === j2.length) {
        var N2,
          I2 = null !== (N2 = m2.domain) && void 0 !== N2 ? N2 : T2;
        if (g2) {
          if (((j2 = vf(k2, g2, v2)), "category" === v2 && h2)) {
            var _2 = sm$1(j2);
            x2 && _2
              ? ((M2 = j2), (j2 = Xv(0, E2)))
              : x2 ||
                (j2 = $f(I2, j2, n3).reduce(function (e21, t4) {
                  return e21.indexOf(t4) >= 0 ? e21 : [].concat(Zw(e21), [t4]);
                }, []));
          } else if ("category" === v2)
            j2 = x2
              ? j2.filter(function (e21) {
                  return "" !== e21 && !Th$1(e21);
                })
              : $f(I2, j2, n3).reduce(function (e21, t4) {
                  return e21.indexOf(t4) >= 0 || "" === t4 || Th$1(t4)
                    ? e21
                    : [].concat(Zw(e21), [t4]);
                }, []);
          else if ("number" === v2) {
            var C2 = (function (e21, t4, n4, r3, i3) {
              var o3 = t4
                .map(function (t5) {
                  return bf(e21, t5, n4, i3, r3);
                })
                .filter(function (e22) {
                  return !Th$1(e22);
                });
              return o3 && o3.length
                ? o3.reduce(
                    function (e22, t5) {
                      return [Math.min(e22[0], t5[0]), Math.max(e22[1], t5[1])];
                    },
                    [1 / 0, -1 / 0],
                  )
                : null;
            })(
              k2,
              r2.filter(function (e21) {
                var t4,
                  n4,
                  r3 =
                    o2 in e21.props
                      ? e21.props[o2]
                      : null === (t4 = e21.type.defaultProps) || void 0 === t4
                        ? void 0
                        : t4[o2],
                  i3 =
                    "hide" in e21.props
                      ? e21.props.hide
                      : null === (n4 = e21.type.defaultProps) || void 0 === n4
                        ? void 0
                        : n4.hide;
                return r3 === A2 && (S2 || !i3);
              }),
              g2,
              i2,
              u2,
            );
            C2 && (j2 = C2);
          }
          !h2 || ("number" !== v2 && "auto" === w2) || (P2 = vf(k2, g2, "category"));
        } else
          j2 = h2
            ? Xv(0, E2)
            : a2 && a2[A2] && a2[A2].hasStack && "number" === v2
              ? "expand" === d2
                ? [0, 1]
                : Cf(a2[A2].stackGroups, s2, c2)
              : xf(
                  k2,
                  r2.filter(function (e21) {
                    var t4 = o2 in e21.props ? e21.props[o2] : e21.type.defaultProps[o2],
                      n4 = "hide" in e21.props ? e21.props.hide : e21.type.defaultProps.hide;
                    return t4 === A2 && (S2 || !n4);
                  }),
                  v2,
                  u2,
                  true,
                );
        if ("number" === v2) (j2 = Aw(f2, j2, A2, i2, O2)), I2 && (j2 = Rf(I2, j2, b2));
        else if ("category" === v2 && I2) {
          var z2 = I2;
          j2.every(function (e21) {
            return z2.indexOf(e21) >= 0;
          }) && (j2 = z2);
        }
      }
      return nO(
        nO({}, t3),
        {},
        rO(
          {},
          A2,
          nO(
            nO({}, m2),
            {},
            {
              axisType: i2,
              domain: j2,
              categoricalDomain: P2,
              duplicateDomain: M2,
              originalDomain: null !== (y2 = m2.domain) && void 0 !== y2 ? y2 : T2,
              isCategorical: h2,
              layout: u2,
            },
          ),
        ),
      );
    }, {});
  },
  hO = function (e20, t2) {
    var n2 = t2.axisType,
      r2 = void 0 === n2 ? "xAxis" : n2,
      i2 = t2.AxisComp,
      o2 = t2.graphicalItems,
      a2 = t2.stackGroups,
      s2 = t2.dataStartIndex,
      c2 = t2.dataEndIndex,
      l2 = e20.children,
      u2 = "".concat(r2, "Id"),
      f2 = Am$1(l2, i2),
      d2 = {};
    return (
      f2 && f2.length
        ? (d2 = pO(e20, {
            axes: f2,
            graphicalItems: o2,
            axisType: r2,
            axisIdKey: u2,
            stackGroups: a2,
            dataStartIndex: s2,
            dataEndIndex: c2,
          }))
        : o2 &&
          o2.length &&
          (d2 = (function (e21, t3) {
            var n3 = t3.graphicalItems,
              r3 = t3.Axis,
              i3 = t3.axisType,
              o3 = t3.axisIdKey,
              a3 = t3.stackGroups,
              s3 = t3.dataStartIndex,
              c3 = t3.dataEndIndex,
              l3 = e21.layout,
              u3 = e21.children,
              f3 = lO(e21.data, { graphicalItems: n3, dataStartIndex: s3, dataEndIndex: c3 }),
              d3 = f3.length,
              p2 = wf(l3, i3),
              h2 = -1;
            return n3.reduce(function (e22, t4) {
              var y2,
                m2 = (
                  void 0 !== t4.type.defaultProps
                    ? nO(nO({}, t4.type.defaultProps), t4.props)
                    : t4.props
                )[o3],
                v2 = uO("number");
              return e22[m2]
                ? e22
                : (h2++,
                  p2
                    ? (y2 = Xv(0, d3))
                    : a3 && a3[m2] && a3[m2].hasStack
                      ? ((y2 = Cf(a3[m2].stackGroups, s3, c3)), (y2 = Aw(u3, y2, m2, i3)))
                      : ((y2 = Rf(
                          v2,
                          xf(
                            f3,
                            n3.filter(function (e23) {
                              var t5,
                                n4,
                                r4 =
                                  o3 in e23.props
                                    ? e23.props[o3]
                                    : null === (t5 = e23.type.defaultProps) || void 0 === t5
                                      ? void 0
                                      : t5[o3],
                                i4 =
                                  "hide" in e23.props
                                    ? e23.props.hide
                                    : null === (n4 = e23.type.defaultProps) || void 0 === n4
                                      ? void 0
                                      : n4.hide;
                              return r4 === m2 && !i4;
                            }),
                            "number",
                            l3,
                          ),
                          r3.defaultProps.allowDataOverflow,
                        )),
                        (y2 = Aw(u3, y2, m2, i3))),
                  nO(
                    nO({}, e22),
                    {},
                    rO(
                      {},
                      m2,
                      nO(
                        nO({ axisType: i3 }, r3.defaultProps),
                        {},
                        {
                          hide: true,
                          orientation: Ah$1(oO, "".concat(i3, ".").concat(h2 % 2), null),
                          domain: y2,
                          originalDomain: v2,
                          isCategorical: p2,
                          layout: l3,
                        },
                      ),
                    ),
                  ));
            }, {});
          })(e20, {
            Axis: i2,
            graphicalItems: o2,
            axisType: r2,
            axisIdKey: u2,
            stackGroups: a2,
            dataStartIndex: s2,
            dataEndIndex: c2,
          })),
      d2
    );
  },
  yO = function (e20) {
    var t2 = e20.children,
      n2 = e20.defaultShowTooltip,
      r2 = Pm$1(t2, vg),
      i2 = 0,
      o2 = 0;
    return (
      e20.data && 0 !== e20.data.length && (o2 = e20.data.length - 1),
      r2 &&
        r2.props &&
        (r2.props.startIndex >= 0 && (i2 = r2.props.startIndex),
        r2.props.endIndex >= 0 && (o2 = r2.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: i2,
        dataEndIndex: o2,
        activeTooltipIndex: -1,
        isTooltipActive: Boolean(n2),
      }
    );
  },
  mO = function (e20) {
    return "horizontal" === e20
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : "vertical" === e20
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : "centric" === e20
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  vO = function (e20, t2) {
    var n2 = e20.props,
      r2 = (e20.graphicalItems, e20.xAxisMap),
      i2 = void 0 === r2 ? {} : r2,
      o2 = e20.yAxisMap,
      a2 = void 0 === o2 ? {} : o2,
      s2 = n2.width,
      c2 = n2.height,
      u2 = n2.children,
      f2 = n2.margin || {},
      d2 = Pm$1(u2, vg),
      p2 = Pm$1(u2, Hr),
      h2 = Object.keys(a2).reduce(
        function (e21, t3) {
          var n3 = a2[t3],
            r3 = n3.orientation;
          return n3.mirror || n3.hide ? e21 : nO(nO({}, e21), {}, rO({}, r3, e21[r3] + n3.width));
        },
        { left: f2.left || 0, right: f2.right || 0 },
      ),
      y2 = Object.keys(i2).reduce(
        function (e21, t3) {
          var n3 = i2[t3],
            r3 = n3.orientation;
          return n3.mirror || n3.hide
            ? e21
            : nO(nO({}, e21), {}, rO({}, r3, Ah$1(e21, "".concat(r3)) + n3.height));
        },
        { top: f2.top || 0, bottom: f2.bottom || 0 },
      ),
      m2 = nO(nO({}, y2), h2),
      v2 = m2.bottom;
    d2 && (m2.bottom += d2.props.height || vg.defaultProps.height),
      p2 &&
        t2 &&
        (m2 = (function (e21, t3, n3, r3) {
          var i3 = n3.children,
            o3 = n3.width,
            a3 = n3.margin,
            s3 = o3 - (a3.left || 0) - (a3.right || 0),
            c3 = lf({ children: i3, legendWidth: s3 });
          if (c3) {
            var u3 = r3 || {},
              f3 = u3.width,
              d3 = u3.height,
              p3 = c3.align,
              h3 = c3.verticalAlign,
              y3 = c3.layout;
            if (
              ("vertical" === y3 || ("horizontal" === y3 && "middle" === h3)) &&
              "center" !== p3 &&
              em$1(e21[p3])
            )
              return hf(hf({}, e21), {}, yf({}, p3, e21[p3] + (f3 || 0)));
            if (
              ("horizontal" === y3 || ("vertical" === y3 && "center" === p3)) &&
              "middle" !== h3 &&
              em$1(e21[h3])
            )
              return hf(hf({}, e21), {}, yf({}, h3, e21[h3] + (d3 || 0)));
          }
          return e21;
        })(m2, 0, n2, t2));
    var g2 = s2 - m2.left - m2.right,
      b2 = c2 - m2.top - m2.bottom;
    return nO(nO({ brushBottom: v2 }, m2), {}, { width: Math.max(g2, 0), height: Math.max(b2, 0) });
  },
  gO = function (e20, t2) {
    return "xAxis" === t2 ? e20[t2].width : "yAxis" === t2 ? e20[t2].height : void 0;
  },
  bO = function (e20) {
    var t2 = e20.chartName,
      n2 = e20.GraphicalChild,
      i2 = e20.defaultTooltipEventType,
      o2 = void 0 === i2 ? "axis" : i2,
      s2 = e20.validateTooltipEventTypes,
      c2 = void 0 === s2 ? ["axis"] : s2,
      u2 = e20.axisComponents,
      f2 = e20.legendContent,
      h2 = e20.formatAxisMap,
      y2 = e20.defaultProps,
      m2 = function (e21, t3) {
        var n3 = t3.graphicalItems,
          r2 = t3.stackGroups,
          i3 = t3.offset,
          o3 = t3.updateId,
          a2 = t3.dataStartIndex,
          s3 = t3.dataEndIndex,
          c3 = e21.barSize,
          l2 = e21.layout,
          f3 = e21.barGap,
          h3 = e21.barCategoryGap,
          y3 = e21.maxBarSize,
          m3 = mO(l2),
          v3 = m3.numericAxisName,
          g3 = m3.cateAxisName,
          b3 = (function (e22) {
            return (
              !(!e22 || !e22.length) &&
              e22.some(function (e23) {
                var t4 = _m$1(e23 && e23.type);
                return t4 && t4.indexOf("Bar") >= 0;
              })
            );
          })(n3),
          x2 = [];
        return (
          n3.forEach(function (n4, m4) {
            var w2 = lO(e21.data, { graphicalItems: [n4], dataStartIndex: a2, dataEndIndex: s3 }),
              S2 =
                void 0 !== n4.type.defaultProps
                  ? nO(nO({}, n4.type.defaultProps), n4.props)
                  : n4.props,
              A2 = S2.dataKey,
              j2 = S2.maxBarSize,
              M2 = S2["".concat(v3, "Id")],
              P2 = S2["".concat(g3, "Id")],
              k2 = u2.reduce(function (e22, r3) {
                var a3 = t3["".concat(r3.axisType, "Map")],
                  s4 = S2["".concat(r3.axisType, "Id")];
                (a3 && a3[s4]) || "zAxis" === r3.axisType || wt(false);
                var c4 = a3[s4];
                return nO(
                  nO({}, e22),
                  {},
                  rO(rO({}, r3.axisType, c4), "".concat(r3.axisType, "Ticks"), Sf(c4)),
                );
              }, {}),
              N2 = k2[g3],
              I2 = k2["".concat(g3, "Ticks")],
              _2 =
                r2 &&
                r2[M2] &&
                r2[M2].hasStack &&
                (function (e22, t4) {
                  var n5,
                    r3 = (
                      null !== (n5 = e22.type) && void 0 !== n5 && n5.defaultProps
                        ? hf(hf({}, e22.type.defaultProps), e22.props)
                        : e22.props
                    ).stackId;
                  if (nm$1(r3)) {
                    var i4 = t4[r3];
                    if (i4) {
                      var o4 = i4.items.indexOf(e22);
                      return o4 >= 0 ? i4.stackedData[o4] : null;
                    }
                  }
                  return null;
                })(n4, r2[M2].stackGroups),
              C2 = _m$1(n4.type).indexOf("Bar") >= 0,
              z2 = Lf(N2, I2),
              D2 = [],
              R2 =
                b3 &&
                (function (e22) {
                  var t4 = e22.barSize,
                    n5 = e22.totalSize,
                    r3 = e22.stackGroups,
                    i4 = void 0 === r3 ? {} : r3;
                  if (!i4) return {};
                  for (var o4 = {}, a3 = Object.keys(i4), s4 = 0, c4 = a3.length; s4 < c4; s4++)
                    for (
                      var l3 = i4[a3[s4]].stackGroups, u3 = Object.keys(l3), f4 = 0, d2 = u3.length;
                      f4 < d2;
                      f4++
                    ) {
                      var h4 = l3[u3[f4]],
                        y4 = h4.items,
                        m5 = h4.cateAxisId,
                        v4 = y4.filter(function (e23) {
                          return _m$1(e23.type).indexOf("Bar") >= 0;
                        });
                      if (v4 && v4.length) {
                        var g4 = v4[0].type.defaultProps,
                          b4 = void 0 !== g4 ? hf(hf({}, g4), v4[0].props) : v4[0].props,
                          x3 = b4.barSize,
                          w3 = b4[m5];
                        o4[w3] || (o4[w3] = []);
                        var O2 = Th$1(x3) ? t4 : x3;
                        o4[w3].push({
                          item: v4[0],
                          stackList: v4.slice(1),
                          barSize: Th$1(O2) ? void 0 : am$1(O2, n5, 0),
                        });
                      }
                    }
                  return o4;
                })({ barSize: c3, stackGroups: r2, totalSize: gO(k2, g3) });
            if (C2) {
              var L2,
                $2,
                B2 = Th$1(j2) ? y3 : j2,
                q2 =
                  null !== (L2 = null !== ($2 = Lf(N2, I2, true)) && void 0 !== $2 ? $2 : B2) &&
                  void 0 !== L2
                    ? L2
                    : 0;
              (D2 = (function (e22) {
                var t4 = e22.barGap,
                  n5 = e22.barCategoryGap,
                  r3 = e22.bandSize,
                  i4 = e22.sizeList,
                  o4 = void 0 === i4 ? [] : i4,
                  a3 = e22.maxBarSize,
                  s4 = o4.length;
                if (s4 < 1) return null;
                var c4,
                  l3 = am$1(t4, r3, 0, true),
                  u3 = [];
                if (o4[0].barSize === +o4[0].barSize) {
                  var f4 = false,
                    d2 = r3 / s4,
                    p2 = o4.reduce(function (e23, t5) {
                      return e23 + t5.barSize || 0;
                    }, 0);
                  (p2 += (s4 - 1) * l3) >= r3 && ((p2 -= (s4 - 1) * l3), (l3 = 0)),
                    p2 >= r3 && d2 > 0 && ((f4 = true), (p2 = s4 * (d2 *= 0.9)));
                  var h4 = { offset: (((r3 - p2) / 2) | 0) - l3, size: 0 };
                  c4 = o4.reduce(function (e23, t5) {
                    var n6 = {
                        item: t5.item,
                        position: { offset: h4.offset + h4.size + l3, size: f4 ? d2 : t5.barSize },
                      },
                      r4 = [].concat(ff(e23), [n6]);
                    return (
                      (h4 = r4[r4.length - 1].position),
                      t5.stackList &&
                        t5.stackList.length &&
                        t5.stackList.forEach(function (e24) {
                          r4.push({ item: e24, position: h4 });
                        }),
                      r4
                    );
                  }, u3);
                } else {
                  var y4 = am$1(n5, r3, 0, true);
                  r3 - 2 * y4 - (s4 - 1) * l3 <= 0 && (l3 = 0);
                  var m5 = (r3 - 2 * y4 - (s4 - 1) * l3) / s4;
                  m5 > 1 && (m5 >>= 0);
                  var v4 = a3 === +a3 ? Math.min(m5, a3) : m5;
                  c4 = o4.reduce(function (e23, t5, n6) {
                    var r4 = [].concat(ff(e23), [
                      {
                        item: t5.item,
                        position: { offset: y4 + (m5 + l3) * n6 + (m5 - v4) / 2, size: v4 },
                      },
                    ]);
                    return (
                      t5.stackList &&
                        t5.stackList.length &&
                        t5.stackList.forEach(function (e24) {
                          r4.push({ item: e24, position: r4[r4.length - 1].position });
                        }),
                      r4
                    );
                  }, u3);
                }
                return c4;
              })({
                barGap: f3,
                barCategoryGap: h3,
                bandSize: q2 !== z2 ? q2 : z2,
                sizeList: R2[P2],
                maxBarSize: B2,
              })),
                q2 !== z2 &&
                  (D2 = D2.map(function (e22) {
                    return nO(
                      nO({}, e22),
                      {},
                      {
                        position: nO(
                          nO({}, e22.position),
                          {},
                          { offset: e22.position.offset - q2 / 2 },
                        ),
                      },
                    );
                  }));
            }
            var F2 = n4 && n4.type && n4.type.getComposedData;
            F2 &&
              x2.push({
                props: nO(
                  nO(
                    {},
                    F2(
                      nO(
                        nO({}, k2),
                        {},
                        {
                          displayedData: w2,
                          props: e21,
                          dataKey: A2,
                          item: n4,
                          bandSize: z2,
                          barPosition: D2,
                          offset: i3,
                          stackedData: _2,
                          layout: l2,
                          dataStartIndex: a2,
                          dataEndIndex: s3,
                        },
                      ),
                    ),
                  ),
                  {},
                  rO(
                    rO(rO({ key: n4.key || "item-".concat(m4) }, v3, k2[v3]), g3, k2[g3]),
                    "animationId",
                    o3,
                  ),
                ),
                childIndex: Ig$1(n4, e21.children),
                item: n4,
              });
          }),
          x2
        );
      },
      v2 = function (e21, r2) {
        var i3 = e21.props,
          o3 = e21.dataStartIndex,
          a2 = e21.dataEndIndex,
          s3 = e21.updateId;
        if (!_g$1({ props: i3 })) return null;
        var c3 = i3.children,
          l2 = i3.layout,
          f3 = i3.stackOffset,
          p2 = i3.data,
          y3 = i3.reverseStackOrder,
          v3 = mO(l2),
          g3 = v3.numericAxisName,
          b3 = v3.cateAxisName,
          x2 = Am$1(c3, n2),
          w2 = (function (e22, t3, n3, r3, i4, o4) {
            if (!e22) return null;
            var a3 = (o4 ? t3.reverse() : t3).reduce(function (e23, t4) {
              var i5,
                o5 =
                  null !== (i5 = t4.type) && void 0 !== i5 && i5.defaultProps
                    ? hf(hf({}, t4.type.defaultProps), t4.props)
                    : t4.props,
                a4 = o5.stackId;
              if (o5.hide) return e23;
              var s4 = o5[n3],
                c4 = e23[s4] || { hasStack: false, stackGroups: {} };
              if (nm$1(a4)) {
                var l3 = c4.stackGroups[a4] || { numericAxisId: n3, cateAxisId: r3, items: [] };
                l3.items.push(t4), (c4.hasStack = true), (c4.stackGroups[a4] = l3);
              } else
                c4.stackGroups[om$1("_stackId_")] = {
                  numericAxisId: n3,
                  cateAxisId: r3,
                  items: [t4],
                };
              return hf(hf({}, e23), {}, yf({}, s4, c4));
            }, {});
            return Object.keys(a3).reduce(function (t4, o5) {
              var s4 = a3[o5];
              return (
                s4.hasStack &&
                  (s4.stackGroups = Object.keys(s4.stackGroups).reduce(function (t5, o6) {
                    var a4 = s4.stackGroups[o6];
                    return hf(
                      hf({}, t5),
                      {},
                      yf({}, o6, {
                        numericAxisId: n3,
                        cateAxisId: r3,
                        items: a4.items,
                        stackedData: Tf(e22, a4.items, i4),
                      }),
                    );
                  }, {})),
                hf(hf({}, t4), {}, yf({}, o5, s4))
              );
            }, {});
          })(p2, x2, "".concat(g3, "Id"), "".concat(b3, "Id"), f3, y3),
          O2 = u2.reduce(function (e22, t3) {
            var n3 = "".concat(t3.axisType, "Map");
            return nO(
              nO({}, e22),
              {},
              rO(
                {},
                n3,
                hO(
                  i3,
                  nO(
                    nO({}, t3),
                    {},
                    {
                      graphicalItems: x2,
                      stackGroups: t3.axisType === g3 && w2,
                      dataStartIndex: o3,
                      dataEndIndex: a2,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          S2 = vO(
            nO(nO({}, O2), {}, { props: i3, graphicalItems: x2 }),
            null == r2 ? void 0 : r2.legendBBox,
          );
        Object.keys(O2).forEach(function (e22) {
          O2[e22] = h2(i3, O2[e22], S2, e22.replace("Map", ""), t2);
        });
        var A2,
          P2,
          k2 = O2["".concat(b3, "Map")],
          E2 =
            ((A2 = im$1(k2)),
            {
              tooltipTicks: (P2 = Sf(A2, false, true)),
              orderedTooltipTicks: uw$1(P2, function (e22) {
                return e22.coordinate;
              }),
              tooltipAxis: A2,
              tooltipAxisBandSize: Lf(A2, P2),
            }),
          T2 = m2(
            i3,
            nO(
              nO({}, O2),
              {},
              {
                dataStartIndex: o3,
                dataEndIndex: a2,
                updateId: s3,
                graphicalItems: x2,
                stackGroups: w2,
                offset: S2,
              },
            ),
          );
        return nO(
          nO({ formattedGraphicalItems: T2, graphicalItems: x2, offset: S2, stackGroups: w2 }, E2),
          O2,
        );
      },
      g2 = (function () {
        function e21(n3) {
          var i3, o3, s3;
          return (
            (function (e22, t3) {
              if (!(e22 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            })(this, e21),
            rO((s3 = Hw(this, e21, [n3])), "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            rO(s3, "accessibilityManager", new _w()),
            rO(s3, "handleLegendBBoxUpdate", function (e22) {
              if (e22) {
                var t3 = s3.state,
                  n4 = t3.dataStartIndex,
                  r2 = t3.dataEndIndex,
                  i4 = t3.updateId;
                s3.setState(
                  nO(
                    { legendBBox: e22 },
                    v2(
                      { props: s3.props, dataStartIndex: n4, dataEndIndex: r2, updateId: i4 },
                      nO(nO({}, s3.state), {}, { legendBBox: e22 }),
                    ),
                  ),
                );
              }
            }),
            rO(s3, "handleReceiveSyncEvent", function (e22, t3, n4) {
              if (s3.props.syncId === e22) {
                if (n4 === s3.eventEmitterSymbol && "function" != typeof s3.props.syncMethod)
                  return;
                s3.applySyncEvent(t3);
              }
            }),
            rO(s3, "handleBrushChange", function (e22) {
              var t3 = e22.startIndex,
                n4 = e22.endIndex;
              if (t3 !== s3.state.dataStartIndex || n4 !== s3.state.dataEndIndex) {
                var r2 = s3.state.updateId;
                s3.setState(function () {
                  return nO(
                    { dataStartIndex: t3, dataEndIndex: n4 },
                    v2(
                      { props: s3.props, dataStartIndex: t3, dataEndIndex: n4, updateId: r2 },
                      s3.state,
                    ),
                  );
                }),
                  s3.triggerSyncEvent({ dataStartIndex: t3, dataEndIndex: n4 });
              }
            }),
            rO(s3, "handleMouseEnter", function (e22) {
              var t3 = s3.getMouseInfo(e22);
              if (t3) {
                var n4 = nO(nO({}, t3), {}, { isTooltipActive: true });
                s3.setState(n4), s3.triggerSyncEvent(n4);
                var r2 = s3.props.onMouseEnter;
                zh$1(r2) && r2(n4, e22);
              }
            }),
            rO(s3, "triggeredAfterMouseMove", function (e22) {
              var t3 = s3.getMouseInfo(e22),
                n4 = t3
                  ? nO(nO({}, t3), {}, { isTooltipActive: true })
                  : { isTooltipActive: false };
              s3.setState(n4), s3.triggerSyncEvent(n4);
              var r2 = s3.props.onMouseMove;
              zh$1(r2) && r2(n4, e22);
            }),
            rO(s3, "handleItemMouseEnter", function (e22) {
              s3.setState(function () {
                return {
                  isTooltipActive: true,
                  activeItem: e22,
                  activePayload: e22.tooltipPayload,
                  activeCoordinate: e22.tooltipPosition || { x: e22.cx, y: e22.cy },
                };
              });
            }),
            rO(s3, "handleItemMouseLeave", function () {
              s3.setState(function () {
                return { isTooltipActive: false };
              });
            }),
            rO(s3, "handleMouseMove", function (e22) {
              e22.persist(), s3.throttleTriggeredAfterMouseMove(e22);
            }),
            rO(s3, "handleMouseLeave", function (e22) {
              s3.throttleTriggeredAfterMouseMove.cancel();
              var t3 = { isTooltipActive: false };
              s3.setState(t3), s3.triggerSyncEvent(t3);
              var n4 = s3.props.onMouseLeave;
              zh$1(n4) && n4(t3, e22);
            }),
            rO(s3, "handleOuterEvent", function (e22) {
              var t3,
                n4 = Tg$1(e22),
                r2 = Ah$1(s3.props, "".concat(n4));
              n4 &&
                zh$1(r2) &&
                r2(
                  null !==
                    (t3 = /.*touch.*/i.test(n4)
                      ? s3.getMouseInfo(e22.changedTouches[0])
                      : s3.getMouseInfo(e22)) && void 0 !== t3
                    ? t3
                    : {},
                  e22,
                );
            }),
            rO(s3, "handleClick", function (e22) {
              var t3 = s3.getMouseInfo(e22);
              if (t3) {
                var n4 = nO(nO({}, t3), {}, { isTooltipActive: true });
                s3.setState(n4), s3.triggerSyncEvent(n4);
                var r2 = s3.props.onClick;
                zh$1(r2) && r2(n4, e22);
              }
            }),
            rO(s3, "handleMouseDown", function (e22) {
              var t3 = s3.props.onMouseDown;
              zh$1(t3) && t3(s3.getMouseInfo(e22), e22);
            }),
            rO(s3, "handleMouseUp", function (e22) {
              var t3 = s3.props.onMouseUp;
              zh$1(t3) && t3(s3.getMouseInfo(e22), e22);
            }),
            rO(s3, "handleTouchMove", function (e22) {
              null != e22.changedTouches &&
                e22.changedTouches.length > 0 &&
                s3.throttleTriggeredAfterMouseMove(e22.changedTouches[0]);
            }),
            rO(s3, "handleTouchStart", function (e22) {
              null != e22.changedTouches &&
                e22.changedTouches.length > 0 &&
                s3.handleMouseDown(e22.changedTouches[0]);
            }),
            rO(s3, "handleTouchEnd", function (e22) {
              null != e22.changedTouches &&
                e22.changedTouches.length > 0 &&
                s3.handleMouseUp(e22.changedTouches[0]);
            }),
            rO(s3, "handleDoubleClick", function (e22) {
              var t3 = s3.props.onDoubleClick;
              zh$1(t3) && t3(s3.getMouseInfo(e22), e22);
            }),
            rO(s3, "handleContextMenu", function (e22) {
              var t3 = s3.props.onContextMenu;
              zh$1(t3) && t3(s3.getMouseInfo(e22), e22);
            }),
            rO(s3, "triggerSyncEvent", function (e22) {
              void 0 !== s3.props.syncId &&
                Pw.emit(kw, s3.props.syncId, e22, s3.eventEmitterSymbol);
            }),
            rO(s3, "applySyncEvent", function (e22) {
              var t3 = s3.props,
                n4 = t3.layout,
                r2 = t3.syncMethod,
                i4 = s3.state.updateId,
                o4 = e22.dataStartIndex,
                a2 = e22.dataEndIndex;
              if (void 0 !== e22.dataStartIndex || void 0 !== e22.dataEndIndex)
                s3.setState(
                  nO(
                    { dataStartIndex: o4, dataEndIndex: a2 },
                    v2(
                      { props: s3.props, dataStartIndex: o4, dataEndIndex: a2, updateId: i4 },
                      s3.state,
                    ),
                  ),
                );
              else if (void 0 !== e22.activeTooltipIndex) {
                var c3 = e22.chartX,
                  l2 = e22.chartY,
                  u3 = e22.activeTooltipIndex,
                  f3 = s3.state,
                  d2 = f3.offset,
                  p2 = f3.tooltipTicks;
                if (!d2) return;
                if ("function" == typeof r2) u3 = r2(p2, e22);
                else if ("value" === r2) {
                  u3 = -1;
                  for (var h3 = 0; h3 < p2.length; h3++)
                    if (p2[h3].value === e22.activeLabel) {
                      u3 = h3;
                      break;
                    }
                }
                var y3 = nO(nO({}, d2), {}, { x: d2.left, y: d2.top }),
                  m3 = Math.min(c3, y3.x + y3.width),
                  g3 = Math.min(l2, y3.y + y3.height),
                  b3 = p2[u3] && p2[u3].value,
                  x2 = fO(s3.state, s3.props.data, u3),
                  w2 = p2[u3]
                    ? {
                        x: "horizontal" === n4 ? p2[u3].coordinate : m3,
                        y: "horizontal" === n4 ? g3 : p2[u3].coordinate,
                      }
                    : sO;
                s3.setState(
                  nO(
                    nO({}, e22),
                    {},
                    {
                      activeLabel: b3,
                      activeCoordinate: w2,
                      activePayload: x2,
                      activeTooltipIndex: u3,
                    },
                  ),
                );
              } else s3.setState(e22);
            }),
            rO(s3, "renderCursor", function (e22) {
              var n4,
                r2 = s3.state,
                i4 = r2.isTooltipActive,
                o4 = r2.activeCoordinate,
                a2 = r2.activePayload,
                c3 = r2.offset,
                l2 = r2.activeTooltipIndex,
                u3 = r2.tooltipAxisBandSize,
                f3 = s3.getTooltipEventType(),
                d2 = null !== (n4 = e22.props.active) && void 0 !== n4 ? n4 : i4,
                p2 = s3.props.layout,
                h3 = e22.key || "_recharts-cursor";
              return g__default.createElement(Bw, {
                key: h3,
                activeCoordinate: o4,
                activePayload: a2,
                activeTooltipIndex: l2,
                chartName: t2,
                element: e22,
                isActive: d2,
                layout: p2,
                offset: c3,
                tooltipAxisBandSize: u3,
                tooltipEventType: f3,
              });
            }),
            rO(s3, "renderPolarAxis", function (e22, t3, n4) {
              var r2 = Ah$1(e22, "type.axisType"),
                i4 = Ah$1(s3.state, "".concat(r2, "Map")),
                o4 = e22.type.defaultProps,
                a2 = void 0 !== o4 ? nO(nO({}, o4), e22.props) : e22.props,
                c3 = i4 && i4[a2["".concat(r2, "Id")]];
              return cloneElement(
                e22,
                nO(
                  nO({}, c3),
                  {},
                  {
                    className: Nt(r2, c3.className),
                    key: e22.key || "".concat(t3, "-").concat(n4),
                    ticks: Sf(c3, true),
                  },
                ),
              );
            }),
            rO(s3, "renderPolarGrid", function (e22) {
              var t3 = e22.props,
                n4 = t3.radialLines,
                r2 = t3.polarAngles,
                i4 = t3.polarRadius,
                o4 = s3.state,
                a2 = o4.radiusAxisMap,
                c3 = o4.angleAxisMap,
                l2 = im$1(a2),
                u3 = im$1(c3),
                f3 = u3.cx,
                d2 = u3.cy,
                p2 = u3.innerRadius,
                h3 = u3.outerRadius;
              return cloneElement(e22, {
                polarAngles: Array.isArray(r2)
                  ? r2
                  : Sf(u3, true).map(function (e23) {
                      return e23.coordinate;
                    }),
                polarRadius: Array.isArray(i4)
                  ? i4
                  : Sf(l2, true).map(function (e23) {
                      return e23.coordinate;
                    }),
                cx: f3,
                cy: d2,
                innerRadius: p2,
                outerRadius: h3,
                key: e22.key || "polar-grid",
                radialLines: n4,
              });
            }),
            rO(s3, "renderLegend", function () {
              var e22 = s3.state.formattedGraphicalItems,
                t3 = s3.props,
                n4 = t3.children,
                r2 = t3.width,
                i4 = t3.height,
                o4 = s3.props.margin || {},
                a2 = r2 - (o4.left || 0) - (o4.right || 0),
                c3 = lf({
                  children: n4,
                  formattedGraphicalItems: e22,
                  legendWidth: a2,
                  legendContent: f2,
                });
              if (!c3) return null;
              var l2 = c3.item,
                u3 = Qw(c3, qw);
              return cloneElement(
                l2,
                nO(
                  nO({}, u3),
                  {},
                  {
                    chartWidth: r2,
                    chartHeight: i4,
                    margin: o4,
                    onBBoxUpdate: s3.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            rO(s3, "renderTooltip", function () {
              var e22,
                t3 = s3.props,
                n4 = t3.children,
                r2 = t3.accessibilityLayer,
                i4 = Pm$1(n4, sx$1);
              if (!i4) return null;
              var o4 = s3.state,
                a2 = o4.isTooltipActive,
                c3 = o4.activeCoordinate,
                l2 = o4.activePayload,
                u3 = o4.activeLabel,
                f3 = o4.offset,
                d2 = null !== (e22 = i4.props.active) && void 0 !== e22 ? e22 : a2;
              return cloneElement(i4, {
                viewBox: nO(nO({}, f3), {}, { x: f3.left, y: f3.top }),
                active: d2,
                label: u3,
                payload: d2 ? l2 : [],
                coordinate: c3,
                accessibilityLayer: r2,
              });
            }),
            rO(s3, "renderBrush", function (e22) {
              var t3 = s3.props,
                n4 = t3.margin,
                r2 = t3.data,
                i4 = s3.state,
                o4 = i4.offset,
                a2 = i4.dataStartIndex,
                c3 = i4.dataEndIndex,
                u3 = i4.updateId;
              return cloneElement(e22, {
                key: e22.key || "_recharts-brush",
                onChange: jf(s3.handleBrushChange, e22.props.onChange),
                data: r2,
                x: em$1(e22.props.x) ? e22.props.x : o4.left,
                y: em$1(e22.props.y)
                  ? e22.props.y
                  : o4.top + o4.height + o4.brushBottom - (n4.bottom || 0),
                width: em$1(e22.props.width) ? e22.props.width : o4.width,
                startIndex: a2,
                endIndex: c3,
                updateId: "brush-".concat(u3),
              });
            }),
            rO(s3, "renderReferenceElement", function (e22, t3, n4) {
              if (!e22) return null;
              var r2 = s3.clipPathId,
                i4 = s3.state,
                o4 = i4.xAxisMap,
                a2 = i4.yAxisMap,
                c3 = i4.offset,
                l2 = e22.type.defaultProps || {},
                u3 = e22.props,
                f3 = u3.xAxisId,
                d2 = void 0 === f3 ? l2.xAxisId : f3,
                p2 = u3.yAxisId,
                h3 = void 0 === p2 ? l2.yAxisId : p2;
              return cloneElement(e22, {
                key: e22.key || "".concat(t3, "-").concat(n4),
                xAxis: o4[d2],
                yAxis: a2[h3],
                viewBox: { x: c3.left, y: c3.top, width: c3.width, height: c3.height },
                clipPathId: r2,
              });
            }),
            rO(s3, "renderActivePoints", function (t3) {
              var n4 = t3.item,
                i4 = t3.activePoint,
                o4 = t3.basePoint,
                a2 = t3.childIndex,
                s4 = t3.isRange,
                c3 = [],
                l2 = n4.props.key,
                u3 =
                  void 0 !== n4.item.type.defaultProps
                    ? nO(nO({}, n4.item.type.defaultProps), n4.item.props)
                    : n4.item.props,
                f3 = u3.activeDot,
                d2 = nO(
                  nO(
                    {
                      index: a2,
                      dataKey: u3.dataKey,
                      cx: i4.x,
                      cy: i4.y,
                      r: 4,
                      fill: gf(n4.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: i4.payload,
                      value: i4.value,
                    },
                    Ng$1(f3, false),
                  ),
                  vm$1(f3),
                );
              return (
                c3.push(e21.renderActiveDot(f3, d2, "".concat(l2, "-activePoint-").concat(a2))),
                o4
                  ? c3.push(
                      e21.renderActiveDot(
                        f3,
                        nO(nO({}, d2), {}, { cx: o4.x, cy: o4.y }),
                        "".concat(l2, "-basePoint-").concat(a2),
                      ),
                    )
                  : s4 && c3.push(null),
                c3
              );
            }),
            rO(s3, "renderGraphicChild", function (e22, t3, n4) {
              var r2 = s3.filterFormatItem(e22, t3, n4);
              if (!r2) return null;
              var i4 = s3.getTooltipEventType(),
                o4 = s3.state,
                a2 = o4.isTooltipActive,
                c3 = o4.tooltipAxis,
                l2 = o4.activeTooltipIndex,
                u3 = o4.activeLabel,
                f3 = s3.props.children,
                d2 = Pm$1(f3, sx$1),
                h3 = r2.props,
                y3 = h3.points,
                m3 = h3.isRange,
                v3 = h3.baseLine,
                g3 =
                  void 0 !== r2.item.type.defaultProps
                    ? nO(nO({}, r2.item.type.defaultProps), r2.item.props)
                    : r2.item.props,
                b3 = g3.activeDot,
                x2 = g3.hide,
                w2 = g3.activeBar,
                O2 = g3.activeShape,
                A2 = Boolean(!x2 && a2 && d2 && (b3 || w2 || O2)),
                j2 = {};
              "axis" !== i4 && d2 && "click" === d2.props.trigger
                ? (j2 = { onClick: jf(s3.handleItemMouseEnter, e22.props.onClick) })
                : "axis" !== i4 &&
                  (j2 = {
                    onMouseLeave: jf(s3.handleItemMouseLeave, e22.props.onMouseLeave),
                    onMouseEnter: jf(s3.handleItemMouseEnter, e22.props.onMouseEnter),
                  });
              var M2 = cloneElement(e22, nO(nO({}, r2.props), j2));
              if (A2) {
                if (!(l2 >= 0)) {
                  var P2,
                    k2 = (
                      null !== (P2 = s3.getItemByXY(s3.state.activeCoordinate)) && void 0 !== P2
                        ? P2
                        : { graphicalItem: M2 }
                    ).graphicalItem,
                    E2 = k2.item,
                    T2 = void 0 === E2 ? e22 : E2,
                    N2 = k2.childIndex,
                    I2 = nO(nO(nO({}, r2.props), j2), {}, { activeIndex: N2 });
                  return [cloneElement(T2, I2), null, null];
                }
                var C2, z2;
                if (c3.dataKey && !c3.allowDuplicatedCategory) {
                  var D2 =
                    "function" == typeof c3.dataKey
                      ? function (e23) {
                          return "function" == typeof c3.dataKey ? c3.dataKey(e23.payload) : null;
                        }
                      : "payload.".concat(c3.dataKey.toString());
                  (C2 = cm$1(y3, D2, u3)), (z2 = m3 && v3 && cm$1(v3, D2, u3));
                } else (C2 = null == y3 ? void 0 : y3[l2]), (z2 = m3 && v3 && v3[l2]);
                if (O2 || w2) {
                  var R2 = void 0 !== e22.props.activeIndex ? e22.props.activeIndex : l2;
                  return [
                    cloneElement(e22, nO(nO(nO({}, r2.props), j2), {}, { activeIndex: R2 })),
                    null,
                    null,
                  ];
                }
                if (!Th$1(C2))
                  return [M2].concat(
                    Zw(
                      s3.renderActivePoints({
                        item: r2,
                        activePoint: C2,
                        basePoint: z2,
                        childIndex: l2,
                        isRange: m3,
                      }),
                    ),
                  );
              }
              return m3 ? [M2, null, null] : [M2, null];
            }),
            rO(s3, "renderCustomized", function (e22, t3, n4) {
              return cloneElement(
                e22,
                nO(nO({ key: "recharts-customized-".concat(n4) }, s3.props), s3.state),
              );
            }),
            rO(s3, "renderMap", {
              CartesianGrid: { handler: cO, once: true },
              ReferenceArea: { handler: s3.renderReferenceElement },
              ReferenceLine: { handler: cO },
              ReferenceDot: { handler: s3.renderReferenceElement },
              XAxis: { handler: cO },
              YAxis: { handler: cO },
              Brush: { handler: s3.renderBrush, once: true },
              Bar: { handler: s3.renderGraphicChild },
              Line: { handler: s3.renderGraphicChild },
              Area: { handler: s3.renderGraphicChild },
              Radar: { handler: s3.renderGraphicChild },
              RadialBar: { handler: s3.renderGraphicChild },
              Scatter: { handler: s3.renderGraphicChild },
              Pie: { handler: s3.renderGraphicChild },
              Funnel: { handler: s3.renderGraphicChild },
              Tooltip: { handler: s3.renderCursor, once: true },
              PolarGrid: { handler: s3.renderPolarGrid, once: true },
              PolarAngleAxis: { handler: s3.renderPolarAxis },
              PolarRadiusAxis: { handler: s3.renderPolarAxis },
              Customized: { handler: s3.renderCustomized },
            }),
            (s3.clipPathId = "".concat(
              null !== (i3 = n3.id) && void 0 !== i3 ? i3 : om$1("recharts"),
              "-clip",
            )),
            (s3.throttleTriggeredAfterMouseMove = fx$1(
              s3.triggeredAfterMouseMove,
              null !== (o3 = n3.throttleDelay) && void 0 !== o3 ? o3 : 1e3 / 60,
            )),
            (s3.state = {}),
            s3
          );
        }
        return (
          (function (e22, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            (e22.prototype = Object.create(t3 && t3.prototype, {
              constructor: { value: e22, writable: true, configurable: true },
            })),
              Object.defineProperty(e22, "prototype", { writable: false }),
              t3 && Yw(e22, t3);
          })(e21, Component),
          Gw(e21, [
            {
              key: "componentDidMount",
              value: function () {
                var e22, t3;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left: null !== (e22 = this.props.margin.left) && void 0 !== e22 ? e22 : 0,
                      top: null !== (t3 = this.props.margin.top) && void 0 !== t3 ? t3 : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var e22 = this.props,
                  t3 = e22.children,
                  n3 = e22.data,
                  r2 = e22.height,
                  i3 = e22.layout,
                  o3 = Pm$1(t3, sx$1);
                if (o3) {
                  var a2 = o3.props.defaultIndex;
                  if (
                    !("number" != typeof a2 || a2 < 0 || a2 > this.state.tooltipTicks.length - 1)
                  ) {
                    var s3 = this.state.tooltipTicks[a2] && this.state.tooltipTicks[a2].value,
                      c3 = fO(this.state, n3, a2, s3),
                      l2 = this.state.tooltipTicks[a2].coordinate,
                      u3 = (this.state.offset.top + r2) / 2,
                      f3 = "horizontal" === i3 ? { x: l2, y: u3 } : { y: l2, x: u3 },
                      d2 = this.state.formattedGraphicalItems.find(function (e23) {
                        return "Scatter" === e23.item.type.name;
                      });
                    d2 &&
                      ((f3 = nO(nO({}, f3), d2.props.points[a2].tooltipPosition)),
                      (c3 = d2.props.points[a2].tooltipPayload));
                    var p2 = {
                      activeTooltipIndex: a2,
                      isTooltipActive: true,
                      activeLabel: s3,
                      activePayload: c3,
                      activeCoordinate: f3,
                    };
                    this.setState(p2),
                      this.renderCursor(o3),
                      this.accessibilityManager.setIndex(a2);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (e22, t3) {
                if (!this.props.accessibilityLayer) return null;
                var n3, r2;
                (this.state.tooltipTicks !== t3.tooltipTicks &&
                  this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }),
                this.props.layout !== e22.layout &&
                  this.accessibilityManager.setDetails({ layout: this.props.layout }),
                this.props.margin !== e22.margin) &&
                  this.accessibilityManager.setDetails({
                    offset: {
                      left: null !== (n3 = this.props.margin.left) && void 0 !== n3 ? n3 : 0,
                      top: null !== (r2 = this.props.margin.top) && void 0 !== r2 ? r2 : 0,
                    },
                  });
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e22) {
                Ag$1([Pm$1(e22.children, sx$1)], [Pm$1(this.props.children, sx$1)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var e22 = Pm$1(this.props.children, sx$1);
                if (e22 && "boolean" == typeof e22.props.shared) {
                  var t3 = e22.props.shared ? "axis" : "item";
                  return c2.indexOf(t3) >= 0 ? t3 : o2;
                }
                return o2;
              },
            },
            {
              key: "getMouseInfo",
              value: function (e22) {
                if (!this.container) return null;
                var t3,
                  n3 = this.container,
                  r2 = n3.getBoundingClientRect(),
                  i3 = {
                    top: (t3 = r2).top + window.scrollY - document.documentElement.clientTop,
                    left: t3.left + window.scrollX - document.documentElement.clientLeft,
                  },
                  o3 = {
                    chartX: Math.round(e22.pageX - i3.left),
                    chartY: Math.round(e22.pageY - i3.top),
                  },
                  a2 = r2.width / n3.offsetWidth || 1,
                  s3 = this.inRange(o3.chartX, o3.chartY, a2);
                if (!s3) return null;
                var c3 = this.state,
                  l2 = c3.xAxisMap,
                  u3 = c3.yAxisMap,
                  f3 = this.getTooltipEventType(),
                  d2 = dO(this.state, this.props.data, this.props.layout, s3);
                if ("axis" !== f3 && l2 && u3) {
                  var p2 = im$1(l2).scale,
                    h3 = im$1(u3).scale,
                    y3 = p2 && p2.invert ? p2.invert(o3.chartX) : null,
                    m3 = h3 && h3.invert ? h3.invert(o3.chartY) : null;
                  return nO(nO({}, o3), {}, { xValue: y3, yValue: m3 }, d2);
                }
                return d2 ? nO(nO({}, o3), d2) : null;
              },
            },
            {
              key: "inRange",
              value: function (e22, t3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  r2 = this.props.layout,
                  i3 = e22 / n3,
                  o3 = t3 / n3;
                if ("horizontal" === r2 || "vertical" === r2) {
                  var a2 = this.state.offset;
                  return i3 >= a2.left &&
                    i3 <= a2.left + a2.width &&
                    o3 >= a2.top &&
                    o3 <= a2.top + a2.height
                    ? { x: i3, y: o3 }
                    : null;
                }
                var s3 = this.state,
                  c3 = s3.angleAxisMap,
                  l2 = s3.radiusAxisMap;
                if (c3 && l2) {
                  var u3 = im$1(c3);
                  return ed({ x: i3, y: o3 }, u3);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var e22 = this.props.children,
                  t3 = this.getTooltipEventType(),
                  n3 = Pm$1(e22, sx$1),
                  r2 = {};
                return (
                  n3 &&
                    "axis" === t3 &&
                    (r2 =
                      "click" === n3.props.trigger
                        ? { onClick: this.handleClick }
                        : {
                            onMouseEnter: this.handleMouseEnter,
                            onDoubleClick: this.handleDoubleClick,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                            onContextMenu: this.handleContextMenu,
                          }),
                  nO(nO({}, vm$1(this.props, this.handleOuterEvent)), r2)
                );
              },
            },
            {
              key: "addListener",
              value: function () {
                Pw.on(kw, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                Pw.removeListener(kw, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (e22, t3, n3) {
                for (
                  var r2 = this.state.formattedGraphicalItems, i3 = 0, o3 = r2.length;
                  i3 < o3;
                  i3++
                ) {
                  var a2 = r2[i3];
                  if (
                    a2.item === e22 ||
                    a2.props.key === e22.key ||
                    (t3 === _m$1(a2.item.type) && n3 === a2.childIndex)
                  )
                    return a2;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var e22 = this.clipPathId,
                  t3 = this.state.offset,
                  n3 = t3.left,
                  r2 = t3.top,
                  i3 = t3.height,
                  o3 = t3.width;
                return g__default.createElement(
                  "defs",
                  null,
                  g__default.createElement(
                    "clipPath",
                    { id: e22 },
                    g__default.createElement("rect", { x: n3, y: r2, height: i3, width: o3 }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var e22 = this.state.xAxisMap;
                return e22
                  ? Object.entries(e22).reduce(function (e23, t3) {
                      var n3 = Vw(t3, 2),
                        r2 = n3[0],
                        i3 = n3[1];
                      return nO(nO({}, e23), {}, rO({}, r2, i3.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var e22 = this.state.yAxisMap;
                return e22
                  ? Object.entries(e22).reduce(function (e23, t3) {
                      var n3 = Vw(t3, 2),
                        r2 = n3[0],
                        i3 = n3[1];
                      return nO(nO({}, e23), {}, rO({}, r2, i3.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (e22) {
                var t3;
                return null === (t3 = this.state.xAxisMap) ||
                  void 0 === t3 ||
                  null === (t3 = t3[e22]) ||
                  void 0 === t3
                  ? void 0
                  : t3.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (e22) {
                var t3;
                return null === (t3 = this.state.yAxisMap) ||
                  void 0 === t3 ||
                  null === (t3 = t3[e22]) ||
                  void 0 === t3
                  ? void 0
                  : t3.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (e22) {
                var t3 = this.state,
                  n3 = t3.formattedGraphicalItems,
                  r2 = t3.activeItem;
                if (n3 && n3.length)
                  for (var i3 = 0, o3 = n3.length; i3 < o3; i3++) {
                    var a2 = n3[i3],
                      s3 = a2.props,
                      c3 = a2.item,
                      l2 =
                        void 0 !== c3.type.defaultProps
                          ? nO(nO({}, c3.type.defaultProps), c3.props)
                          : c3.props,
                      u3 = _m$1(c3.type);
                    if ("Bar" === u3) {
                      var f3 = (s3.data || []).find(function (t4) {
                        return sy(e22, t4);
                      });
                      if (f3) return { graphicalItem: a2, payload: f3 };
                    } else if ("RadialBar" === u3) {
                      var d2 = (s3.data || []).find(function (t4) {
                        return ed(e22, t4);
                      });
                      if (d2) return { graphicalItem: a2, payload: d2 };
                    } else if (Jm(a2, r2) || ev(a2, r2) || tv(a2, r2)) {
                      var p2 = ov({ graphicalItem: a2, activeTooltipItem: r2, itemData: l2.data }),
                        h3 = void 0 === l2.activeIndex ? p2 : l2.activeIndex;
                      return {
                        graphicalItem: nO(nO({}, a2), {}, { childIndex: h3 }),
                        payload: tv(a2, r2) ? l2.data[p2] : a2.props.data[p2],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e22 = this;
                if (!_g$1(this)) return null;
                var t3,
                  n3,
                  i3 = this.props,
                  o3 = i3.children,
                  a2 = i3.className,
                  s3 = i3.width,
                  c3 = i3.height,
                  l2 = i3.style,
                  u3 = i3.compact,
                  f3 = i3.title,
                  d2 = i3.desc,
                  p2 = Qw(i3, Fw),
                  h3 = Ng$1(p2, false);
                if (u3)
                  return g__default.createElement(
                    zb,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    g__default.createElement(
                      Dt,
                      Ww({}, h3, { width: s3, height: c3, title: f3, desc: d2 }),
                      this.renderClipPath(),
                      kg$1(o3, this.renderMap),
                    ),
                  );
                this.props.accessibilityLayer &&
                  ((h3.tabIndex = null !== (t3 = this.props.tabIndex) && void 0 !== t3 ? t3 : 0),
                  (h3.role = null !== (n3 = this.props.role) && void 0 !== n3 ? n3 : "application"),
                  (h3.onKeyDown = function (t4) {
                    e22.accessibilityManager.keyboardEvent(t4);
                  }),
                  (h3.onFocus = function () {
                    e22.accessibilityManager.focus();
                  }));
                var y3 = this.parseEventsOfWrapper();
                return g__default.createElement(
                  zb,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  g__default.createElement(
                    "div",
                    Ww(
                      {
                        className: Nt("recharts-wrapper", a2),
                        style: nO(
                          { position: "relative", cursor: "default", width: s3, height: c3 },
                          l2,
                        ),
                      },
                      y3,
                      {
                        ref: function (t4) {
                          e22.container = t4;
                        },
                      },
                    ),
                    g__default.createElement(
                      Dt,
                      Ww({}, h3, { width: s3, height: c3, title: f3, desc: d2, style: aO }),
                      this.renderClipPath(),
                      kg$1(o3, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })();
    rO(g2, "displayName", t2),
      rO(
        g2,
        "defaultProps",
        nO(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: false,
            syncMethod: "index",
          },
          y2,
        ),
      ),
      rO(g2, "getDerivedStateFromProps", function (e21, t3) {
        var n3 = e21.dataKey,
          r2 = e21.data,
          i3 = e21.children,
          o3 = e21.width,
          a2 = e21.height,
          s3 = e21.layout,
          c3 = e21.stackOffset,
          l2 = e21.margin,
          u3 = t3.dataStartIndex,
          f3 = t3.dataEndIndex;
        if (void 0 === t3.updateId) {
          var d2 = yO(e21);
          return nO(
            nO(
              nO({}, d2),
              {},
              { updateId: 0 },
              v2(nO(nO({ props: e21 }, d2), {}, { updateId: 0 }), t3),
            ),
            {},
            {
              prevDataKey: n3,
              prevData: r2,
              prevWidth: o3,
              prevHeight: a2,
              prevLayout: s3,
              prevStackOffset: c3,
              prevMargin: l2,
              prevChildren: i3,
            },
          );
        }
        if (
          n3 !== t3.prevDataKey ||
          r2 !== t3.prevData ||
          o3 !== t3.prevWidth ||
          a2 !== t3.prevHeight ||
          s3 !== t3.prevLayout ||
          c3 !== t3.prevStackOffset ||
          !dm$1(l2, t3.prevMargin)
        ) {
          var h3 = yO(e21),
            y3 = { chartX: t3.chartX, chartY: t3.chartY, isTooltipActive: t3.isTooltipActive },
            m3 = nO(nO({}, dO(t3, r2, s3)), {}, { updateId: t3.updateId + 1 }),
            g3 = nO(nO(nO({}, h3), y3), m3);
          return nO(
            nO(nO({}, g3), v2(nO({ props: e21 }, g3), t3)),
            {},
            {
              prevDataKey: n3,
              prevData: r2,
              prevWidth: o3,
              prevHeight: a2,
              prevLayout: s3,
              prevStackOffset: c3,
              prevMargin: l2,
              prevChildren: i3,
            },
          );
        }
        if (!Ag$1(i3, t3.prevChildren)) {
          var b3,
            x2,
            w2,
            O2,
            A2 = Pm$1(i3, vg),
            j2 =
              A2 &&
              null !== (b3 = null === (x2 = A2.props) || void 0 === x2 ? void 0 : x2.startIndex) &&
              void 0 !== b3
                ? b3
                : u3,
            M2 =
              A2 &&
              null !== (w2 = null === (O2 = A2.props) || void 0 === O2 ? void 0 : O2.endIndex) &&
              void 0 !== w2
                ? w2
                : f3,
            P2 = j2 !== u3 || M2 !== f3,
            k2 = !Th$1(r2) && !P2 ? t3.updateId : t3.updateId + 1;
          return nO(
            nO(
              { updateId: k2 },
              v2(
                nO(
                  nO({ props: e21 }, t3),
                  {},
                  { updateId: k2, dataStartIndex: j2, dataEndIndex: M2 },
                ),
                t3,
              ),
            ),
            {},
            { prevChildren: i3, dataStartIndex: j2, dataEndIndex: M2 },
          );
        }
        return null;
      }),
      rO(g2, "renderActiveDot", function (e21, t3, n3) {
        var r2;
        return (
          (r2 = isValidElement(e21)
            ? cloneElement(e21, t3)
            : zh$1(e21)
              ? e21(t3)
              : g__default.createElement(by, t3)),
          g__default.createElement(nn, { className: "recharts-active-dot", key: n3 }, r2)
        );
      });
    var b2 = forwardRef(function (e21, t3) {
      return g__default.createElement(g2, Ww({}, e21, { ref: t3 }));
    });
    return (b2.displayName = g2.displayName), b2;
  },
  xO = bO({
    chartName: "BarChart",
    GraphicalChild: ib,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: lw },
      { axisType: "yAxis", AxisComp: xw },
    ],
    formatAxisMap: fb,
  }),
  wO = bO({
    chartName: "PieChart",
    GraphicalChild: wv,
    validateTooltipEventTypes: ["item"],
    defaultTooltipEventType: "item",
    legendContent: "children",
    axisComponents: [
      { axisType: "angleAxis", AxisComp: Pm },
      { axisType: "radiusAxis", AxisComp: lm },
    ],
    formatAxisMap: Yf,
    defaultProps: {
      layout: "centric",
      startAngle: 0,
      endAngle: 360,
      cx: "50%",
      cy: "50%",
      innerRadius: 0,
      outerRadius: "80%",
    },
  }),
  OO = bO({
    chartName: "RadarChart",
    GraphicalChild: Vv,
    axisComponents: [
      { axisType: "angleAxis", AxisComp: Pm },
      { axisType: "radiusAxis", AxisComp: lm },
    ],
    formatAxisMap: Yf,
    defaultProps: {
      layout: "centric",
      startAngle: 90,
      endAngle: -270,
      cx: "50%",
      cy: "50%",
      innerRadius: 0,
      outerRadius: "80%",
    },
  }),
  SO = g.forwardRef((t2, n2) =>
    jsx(gi$1.label, {
      ...t2,
      ref: n2,
      onMouseDown: (e20) => {
        var _a2;
        e20.target.closest("button, input, select, textarea") ||
          ((_a2 = t2.onMouseDown) == null ? void 0 : _a2.call(t2, e20),
          !e20.defaultPrevented && e20.detail > 1 && e20.preventDefault());
      },
    }),
  );
SO.displayName = "Label";
var AO = SO;
const jO = ({ className: n2, required: r2 = false, ...i2 }) =>
  jsxs(AO, {
    "data-slot": "label",
    className: Ka$1(
      "text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      n2,
    ),
    ...i2,
    children: [i2.children, r2 && jsx("span", { className: "ml-0.5 text-red-500", children: "*" })],
  });
function MO({ className: t2, ...n2 }) {
  return jsx(Et.PanelGroup, {
    "data-slot": "resizable-panel-group",
    className: Ka$1("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", t2),
    ...n2,
  });
}
function PO({ ...t2 }) {
  return jsx(Et.Panel, { "data-slot": "resizable-panel", ...t2 });
}
function kO({ className: t2, withHandle: n2, ...r2 }) {
  return jsx(Et.PanelResizeHandle, {
    "data-slot": "resizable-handle",
    className: Ka$1(
      "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t2,
    ),
    ...r2,
    children:
      n2 &&
      jsx("div", {
        className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border",
        children: jsx(GripVerticalIcon, { className: "size-2.5" }),
      }),
  });
}
/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EO = KC("outline", "building", "Building", [
    ["path", { d: "M3 21l18 0", key: "svg-0" }],
    ["path", { d: "M9 8l1 0", key: "svg-1" }],
    ["path", { d: "M9 12l1 0", key: "svg-2" }],
    ["path", { d: "M9 16l1 0", key: "svg-3" }],
    ["path", { d: "M14 8l1 0", key: "svg-4" }],
    ["path", { d: "M14 12l1 0", key: "svg-5" }],
    ["path", { d: "M14 16l1 0", key: "svg-6" }],
    ["path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16", key: "svg-7" }],
  ]),
  TO = KC("outline", "file-text", "FileText", [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
    [
      "path",
      { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z", key: "svg-1" },
    ],
    ["path", { d: "M9 9l1 0", key: "svg-2" }],
    ["path", { d: "M9 13l6 0", key: "svg-3" }],
    ["path", { d: "M9 17l6 0", key: "svg-4" }],
  ]),
  NO = Atom.runtime(BrowserKeyValueStore.layerLocalStorage),
  IO = Atom.kvs({
    runtime: NO,
    key: "admin-sidebar-visible",
    schema: Schema.Boolean,
    defaultValue: () => true,
  }),
  _O = {
    user: { name: "Admin User", email: "admin@example.com", avatar: "/placeholder-avatar.png" },
    navMain: [
      { title: "Dashboard", url: "/admin", icon: m },
      {
        title: "Quiz Responses",
        url: "/admin/responses",
        icon: TO,
        disabled: true,
        tooltip: "Coming Soon!",
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        icon: u,
        disabled: true,
        tooltip: "Coming Soon!",
      },
      {
        title: "Users",
        url: "/admin/users",
        icon: x,
        disabled: true,
        tooltip: "Authentication is disabled right now",
      },
      {
        title: "Organization",
        url: "/admin/organizations",
        icon: EO,
        disabled: true,
        tooltip: "Authentication is disabled right now",
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "/admin/settings",
        icon: y,
        disabled: true,
        tooltip: "Authentication is disabled right now",
      },
    ],
  };
function CO({ ...n2 }) {
  return jsxs(zN, {
    collapsible: "offcanvas",
    ...n2,
    children: [
      jsx(zN.Header, {
        children: jsx(zN.Menu, {
          children: jsx(zN.MenuItem, {
            children: jsx(zN.MenuButton, {
              asChild: true,
              className: "data-[slot=sidebar-menu-button]:!p-1.5",
              children: jsxs("a", {
                href: "/",
                children: [
                  jsx("img", {
                    src: "/svgs/MyArtistTypeLogo.svg",
                    alt: "My Artist Type Logo",
                    width: 24,
                    height: 24,
                    className: "dark:brightness-0 dark:invert",
                  }),
                  jsx("span", { className: "text-base font-semibold", children: "My Artist Type" }),
                ],
              }),
            }),
          }),
        }),
      }),
      jsxs(zN.Content, {
        children: [
          jsx(b, { items: _O.navMain }),
          jsx(N, { items: _O.navSecondary, className: "mt-auto" }),
        ],
      }),
      jsx(zN.Footer, { children: jsx(C, { user: _O.user }) }),
    ],
  });
}
const zO = (e20, t2) => {
    if ("number" == typeof e20)
      return 3 === t2
        ? {
            mode: "rgb",
            r: (((e20 >> 8) & 15) | ((e20 >> 4) & 240)) / 255,
            g: (((e20 >> 4) & 15) | (240 & e20)) / 255,
            b: ((15 & e20) | ((e20 << 4) & 240)) / 255,
          }
        : 4 === t2
          ? {
              mode: "rgb",
              r: (((e20 >> 12) & 15) | ((e20 >> 8) & 240)) / 255,
              g: (((e20 >> 8) & 15) | ((e20 >> 4) & 240)) / 255,
              b: (((e20 >> 4) & 15) | (240 & e20)) / 255,
              alpha: ((15 & e20) | ((e20 << 4) & 240)) / 255,
            }
          : 6 === t2
            ? {
                mode: "rgb",
                r: ((e20 >> 16) & 255) / 255,
                g: ((e20 >> 8) & 255) / 255,
                b: (255 & e20) / 255,
              }
            : 8 === t2
              ? {
                  mode: "rgb",
                  r: ((e20 >> 24) & 255) / 255,
                  g: ((e20 >> 16) & 255) / 255,
                  b: ((e20 >> 8) & 255) / 255,
                  alpha: (255 & e20) / 255,
                }
              : void 0;
  },
  DO = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  RO = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
  LO = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",
  $O = `${LO}%`,
  BO = `(?:${LO}%|${LO})`,
  qO = `(?:${LO}(deg|grad|rad|turn)|${LO})`,
  FO = "\\s*,\\s*",
  UO = new RegExp(`^rgba?\\(\\s*${LO}${FO}${LO}${FO}${LO}\\s*(?:,\\s*${BO}\\s*)?\\)$`),
  WO = new RegExp(`^rgba?\\(\\s*${$O}${FO}${$O}${FO}${$O}\\s*(?:,\\s*${BO}\\s*)?\\)$`),
  VO =
    (e20 = "rgb") =>
    (t2) =>
      void 0 !==
      (t2 = ((e21, t3) =>
        void 0 === e21
          ? void 0
          : "object" != typeof e21
            ? bS(e21)
            : void 0 !== e21.mode
              ? e21
              : t3
                ? { ...e21, mode: t3 }
                : void 0)(t2, e20))
        ? t2.mode === e20
          ? t2
          : QO[t2.mode][e20]
            ? QO[t2.mode][e20](t2)
            : "rgb" === e20
              ? QO[t2.mode].rgb(t2)
              : QO.rgb[e20](QO[t2.mode].rgb(t2))
        : void 0,
  QO = {},
  GO = {},
  HO = [],
  XO = {},
  KO = (e20) => e20,
  YO = (e20) => (
    (QO[e20.mode] = { ...QO[e20.mode], ...e20.toMode }),
    Object.keys(e20.fromMode || {}).forEach((t2) => {
      QO[t2] || (QO[t2] = {}), (QO[t2][e20.mode] = e20.fromMode[t2]);
    }),
    e20.ranges || (e20.ranges = {}),
    e20.difference || (e20.difference = {}),
    e20.channels.forEach((t2) => {
      if ((void 0 === e20.ranges[t2] && (e20.ranges[t2] = [0, 1]), !e20.interpolate[t2]))
        throw new Error(`Missing interpolator for: ${t2}`);
      "function" == typeof e20.interpolate[t2] &&
        (e20.interpolate[t2] = { use: e20.interpolate[t2] }),
        e20.interpolate[t2].fixup || (e20.interpolate[t2].fixup = KO);
    }),
    (GO[e20.mode] = e20),
    (e20.parse || []).forEach((t2) => {
      ZO(t2, e20.mode);
    }),
    VO(e20.mode)
  ),
  ZO = (e20, t2) => {
    if ("string" == typeof e20) {
      if (!t2) throw new Error("'mode' required when 'parser' is a string");
      XO[e20] = t2;
    } else "function" == typeof e20 && HO.indexOf(e20) < 0 && HO.push(e20);
  },
  JO = /[^\x00-\x7F]|[a-zA-Z_]/,
  eS = /[^\x00-\x7F]|[-\w]/,
  tS = "function",
  nS = "ident",
  rS = "number",
  iS = "percentage",
  oS = ")",
  aS = "none",
  sS = "hue",
  cS = "alpha";
let lS = 0;
function uS(e20) {
  let t2 = e20[lS],
    n2 = e20[lS + 1];
  return "-" === t2 || "+" === t2
    ? /\d/.test(n2) || ("." === n2 && /\d/.test(e20[lS + 2]))
    : /\d/.test("." === t2 ? n2 : t2);
}
function fS(e20) {
  if (lS >= e20.length) return false;
  let t2 = e20[lS];
  if (JO.test(t2)) return true;
  if ("-" === t2) {
    if (e20.length - lS < 2) return false;
    let t3 = e20[lS + 1];
    return !("-" !== t3 && !JO.test(t3));
  }
  return false;
}
const dS = { deg: 1, rad: 180 / Math.PI, grad: 0.9, turn: 360 };
function pS(e20) {
  let t2 = "";
  if (
    (("-" !== e20[lS] && "+" !== e20[lS]) || (t2 += e20[lS++]),
    (t2 += hS(e20)),
    "." === e20[lS] && /\d/.test(e20[lS + 1]) && (t2 += e20[lS++] + hS(e20)),
    ("e" !== e20[lS] && "E" !== e20[lS]) ||
      (("-" !== e20[lS + 1] && "+" !== e20[lS + 1]) || !/\d/.test(e20[lS + 2])
        ? /\d/.test(e20[lS + 1]) && (t2 += e20[lS++] + hS(e20))
        : (t2 += e20[lS++] + e20[lS++] + hS(e20))),
    fS(e20))
  ) {
    let n2 = yS(e20);
    return "deg" === n2 || "rad" === n2 || "turn" === n2 || "grad" === n2
      ? { type: sS, value: t2 * dS[n2] }
      : void 0;
  }
  return "%" === e20[lS] ? (lS++, { type: iS, value: +t2 }) : { type: rS, value: +t2 };
}
function hS(e20) {
  let t2 = "";
  for (; /\d/.test(e20[lS]); ) t2 += e20[lS++];
  return t2;
}
function yS(e20) {
  let t2 = "";
  for (; lS < e20.length && eS.test(e20[lS]); ) t2 += e20[lS++];
  return t2;
}
function mS(e20) {
  let t2 = yS(e20);
  return "(" === e20[lS]
    ? (lS++, { type: tS, value: t2 })
    : "none" === t2
      ? { type: aS, value: void 0 }
      : { type: nS, value: t2 };
}
function vS(e20) {
  e20._i = 0;
  let t2 = e20[e20._i++];
  if (!t2 || t2.type !== tS || "color" !== t2.value) return;
  if (((t2 = e20[e20._i++]), t2.type !== nS)) return;
  const n2 = XO[t2.value];
  if (!n2) return;
  const r2 = { mode: n2 },
    i2 = gS(e20, false);
  if (!i2) return;
  const o2 = ((e21) => GO[e21])(n2).channels;
  for (let a2, s2, c2 = 0; c2 < o2.length; c2++)
    (a2 = i2[c2]),
      (s2 = o2[c2]),
      a2.type !== aS &&
        ((r2[s2] = a2.type === rS ? a2.value : a2.value / 100),
        "alpha" === s2 && (r2[s2] = Math.max(0, Math.min(1, r2[s2]))));
  return r2;
}
function gS(e20, t2) {
  const n2 = [];
  let r2;
  for (; e20._i < e20.length; )
    if (
      ((r2 = e20[e20._i++]),
      r2.type === aS ||
        r2.type === rS ||
        r2.type === cS ||
        r2.type === iS ||
        (t2 && r2.type === sS))
    )
      n2.push(r2);
    else {
      if (r2.type !== oS) return;
      if (e20._i < e20.length) return;
    }
  if (!(n2.length < 3 || n2.length > 4)) {
    if (4 === n2.length) {
      if (n2[3].type !== cS) return;
      n2[3] = n2[3].value;
    }
    return (
      3 === n2.length && n2.push({ type: aS, value: void 0 }),
      n2.every((e21) => e21.type !== cS) ? n2 : void 0
    );
  }
}
const bS = (e20) => {
  if ("string" != typeof e20) return;
  const t2 = (function (e21 = "") {
      let t3,
        n3 = e21.trim(),
        r3 = [];
      for (lS = 0; lS < n3.length; )
        if (((t3 = n3[lS++]), "\n" !== t3 && "	" !== t3 && " " !== t3)) {
          if ("," === t3) return;
          if (")" !== t3) {
            if ("+" === t3) {
              if ((lS--, uS(n3))) {
                r3.push(pS(n3));
                continue;
              }
              return;
            }
            if ("-" === t3) {
              if ((lS--, uS(n3))) {
                r3.push(pS(n3));
                continue;
              }
              if (fS(n3)) {
                r3.push({ type: nS, value: yS(n3) });
                continue;
              }
              return;
            }
            if ("." === t3) {
              if ((lS--, uS(n3))) {
                r3.push(pS(n3));
                continue;
              }
              return;
            }
            if ("/" === t3) {
              for (; lS < n3.length && ("\n" === n3[lS] || "	" === n3[lS] || " " === n3[lS]); ) lS++;
              let e22;
              if (uS(n3) && ((e22 = pS(n3)), e22.type !== sS)) {
                r3.push({ type: cS, value: e22 });
                continue;
              }
              if (fS(n3) && "none" === yS(n3)) {
                r3.push({ type: cS, value: { type: aS, value: void 0 } });
                continue;
              }
              return;
            }
            if (/\d/.test(t3)) lS--, r3.push(pS(n3));
            else {
              if (!JO.test(t3)) return;
              lS--, r3.push(mS(n3));
            }
          } else r3.push({ type: oS });
        } else
          for (; lS < n3.length && ("\n" === n3[lS] || "	" === n3[lS] || " " === n3[lS]); ) lS++;
      return r3;
    })(e20),
    n2 = t2
      ? (function (e21, t3) {
          e21._i = 0;
          let n3 = e21[e21._i++];
          if (!n3 || n3.type !== tS) return;
          let r3 = gS(e21, t3);
          return r3 ? (r3.unshift(n3.value), r3) : void 0;
        })(t2, true)
      : void 0;
  let r2,
    i2 = 0,
    o2 = HO.length;
  for (; i2 < o2; ) if (void 0 !== (r2 = HO[i2++](e20, n2))) return r2;
  return t2 ? vS(t2) : void 0;
};
const xS =
  ((wS = (e20, t2, n2) => e20 + n2 * (t2 - e20)),
  (e20) => {
    let t2 = ((e21) => {
      let t3 = [];
      for (let n2 = 0; n2 < e21.length - 1; n2++) {
        let r2 = e21[n2],
          i2 = e21[n2 + 1];
        void 0 === r2 && void 0 === i2
          ? t3.push(void 0)
          : void 0 !== r2 && void 0 !== i2
            ? t3.push([r2, i2])
            : t3.push(void 0 !== r2 ? [r2, r2] : [i2, i2]);
      }
      return t3;
    })(e20);
    return (e21) => {
      let n2 = e21 * t2.length,
        r2 = e21 >= 1 ? t2.length - 1 : Math.max(Math.floor(n2), 0),
        i2 = t2[r2];
      return void 0 === i2 ? void 0 : wS(i2[0], i2[1], n2 - r2);
    };
  });
var wS;
const OS = (e20) => {
    let t2 = false,
      n2 = e20.map((e21) => (void 0 !== e21 ? ((t2 = true), e21) : 1));
    return t2 ? n2 : e20;
  },
  SS = {
    mode: "rgb",
    channels: ["r", "g", "b", "alpha"],
    parse: [
      function (e20, t2) {
        if (!t2 || ("rgb" !== t2[0] && "rgba" !== t2[0])) return;
        const n2 = { mode: "rgb" },
          [, r2, i2, o2, a2] = t2;
        return r2.type !== sS && i2.type !== sS && o2.type !== sS
          ? (r2.type !== aS && (n2.r = r2.type === rS ? r2.value / 255 : r2.value / 100),
            i2.type !== aS && (n2.g = i2.type === rS ? i2.value / 255 : i2.value / 100),
            o2.type !== aS && (n2.b = o2.type === rS ? o2.value / 255 : o2.value / 100),
            a2.type !== aS &&
              (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
            n2)
          : void 0;
      },
      (e20) => {
        let t2;
        return (t2 = e20.match(RO)) ? zO(parseInt(t2[1], 16), t2[1].length) : void 0;
      },
      (e20) => {
        let t2,
          n2 = { mode: "rgb" };
        if ((t2 = e20.match(UO)))
          void 0 !== t2[1] && (n2.r = t2[1] / 255),
            void 0 !== t2[2] && (n2.g = t2[2] / 255),
            void 0 !== t2[3] && (n2.b = t2[3] / 255);
        else {
          if (!(t2 = e20.match(WO))) return;
          void 0 !== t2[1] && (n2.r = t2[1] / 100),
            void 0 !== t2[2] && (n2.g = t2[2] / 100),
            void 0 !== t2[3] && (n2.b = t2[3] / 100);
        }
        return (
          void 0 !== t2[4]
            ? (n2.alpha = Math.max(0, Math.min(1, t2[4] / 100)))
            : void 0 !== t2[5] && (n2.alpha = Math.max(0, Math.min(1, +t2[5]))),
          n2
        );
      },
      (e20) => zO(DO[e20.toLowerCase()], 6),
      (e20) => ("transparent" === e20 ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0),
      "srgb",
    ],
    serialize: "srgb",
    interpolate: { r: xS, g: xS, b: xS, alpha: { use: xS, fixup: OS } },
    gamut: true,
    white: { r: 1, g: 1, b: 1 },
    black: { r: 0, g: 0, b: 0 },
  },
  AS = (e20 = 0) => Math.pow(Math.abs(e20), 563 / 256) * Math.sign(e20),
  jS = (e20) => {
    let t2 = AS(e20.r),
      n2 = AS(e20.g),
      r2 = AS(e20.b),
      i2 = {
        mode: "xyz65",
        x: 0.5766690429101305 * t2 + 0.1855582379065463 * n2 + 0.1882286462349947 * r2,
        y: 0.297344975250536 * t2 + 0.6273635662554661 * n2 + 0.0752914584939979 * r2,
        z: 0.0270313613864123 * t2 + 0.0706888525358272 * n2 + 0.9913375368376386 * r2,
      };
    return void 0 !== e20.alpha && (i2.alpha = e20.alpha), i2;
  },
  MS = (e20) => Math.pow(Math.abs(e20), 256 / 563) * Math.sign(e20),
  PS = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = {
      mode: "a98",
      r: MS(2.0415879038107465 * e20 - 0.5650069742788597 * t2 - 0.3447313507783297 * n2),
      g: MS(-0.9692436362808798 * e20 + 1.8759675015077206 * t2 + 0.0415550574071756 * n2),
      b: MS(0.0134442806320312 * e20 - 0.1183623922310184 * t2 + 1.0151749943912058 * n2),
    };
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  kS = (e20 = 0) => {
    const t2 = Math.abs(e20);
    return t2 <= 0.04045
      ? e20 / 12.92
      : (Math.sign(e20) || 1) * Math.pow((t2 + 0.055) / 1.055, 2.4);
  },
  ES = ({ r: e20, g: t2, b: n2, alpha: r2 }) => {
    let i2 = { mode: "lrgb", r: kS(e20), g: kS(t2), b: kS(n2) };
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  TS = (e20) => {
    let { r: t2, g: n2, b: r2, alpha: i2 } = ES(e20),
      o2 = {
        mode: "xyz65",
        x: 0.4123907992659593 * t2 + 0.357584339383878 * n2 + 0.1804807884018343 * r2,
        y: 0.2126390058715102 * t2 + 0.715168678767756 * n2 + 0.0721923153607337 * r2,
        z: 0.0193308187155918 * t2 + 0.119194779794626 * n2 + 0.9505321522496607 * r2,
      };
    return void 0 !== i2 && (o2.alpha = i2), o2;
  },
  NS = (e20 = 0) => {
    const t2 = Math.abs(e20);
    return t2 > 31308e-7
      ? (Math.sign(e20) || 1) * (1.055 * Math.pow(t2, 1 / 2.4) - 0.055)
      : 12.92 * e20;
  },
  IS = ({ r: e20, g: t2, b: n2, alpha: r2 }, i2 = "rgb") => {
    let o2 = { mode: i2, r: NS(e20), g: NS(t2), b: NS(n2) };
    return void 0 !== r2 && (o2.alpha = r2), o2;
  },
  _S = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = IS({
      r: 3.2409699419045226 * e20 - 1.537383177570094 * t2 - 0.4986107602930034 * n2,
      g: -0.9692436362808796 * e20 + 1.8759675015077204 * t2 + 0.0415550574071756 * n2,
      b: 0.0556300796969936 * e20 - 0.2039769588889765 * t2 + 1.0569715142428784 * n2,
    });
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  CS = {
    ...SS,
    mode: "a98",
    parse: ["a98-rgb"],
    serialize: "a98-rgb",
    fromMode: { rgb: (e20) => PS(TS(e20)), xyz65: PS },
    toMode: { rgb: (e20) => _S(jS(e20)), xyz65: jS },
  },
  zS = (e20) => ((e20 %= 360) < 0 ? e20 + 360 : e20),
  DS = (e20) =>
    ((e21, t2) =>
      e21
        .map((n2, r2, i2) => {
          if (void 0 === n2) return n2;
          let o2 = zS(n2);
          return 0 === r2 || void 0 === e21[r2 - 1] ? o2 : t2(o2 - zS(i2[r2 - 1]));
        })
        .reduce(
          (e22, t3) =>
            e22.length && void 0 !== t3 && void 0 !== e22[e22.length - 1]
              ? (e22.push(t3 + e22[e22.length - 1]), e22)
              : (e22.push(t3), e22),
          [],
        ))(e20, (e21) => (Math.abs(e21) <= 180 ? e21 : e21 - 360 * Math.sign(e21))),
  RS = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0],
  LS = Math.PI / 180,
  $S = 180 / Math.PI;
let BS = RS[3] * RS[4],
  qS = RS[1] * RS[4],
  FS = RS[1] * RS[2] - RS[0] * RS[3];
const US = (e20, t2) => {
    if (void 0 === e20.h || void 0 === t2.h || !e20.s || !t2.s) return 0;
    let n2 = zS(e20.h),
      r2 = zS(t2.h),
      i2 = Math.sin((((r2 - n2 + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(e20.s * t2.s) * i2;
  },
  WS = (e20, t2) => {
    if (void 0 === e20.h || void 0 === t2.h || !e20.c || !t2.c) return 0;
    let n2 = zS(e20.h),
      r2 = zS(t2.h),
      i2 = Math.sin((((r2 - n2 + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(e20.c * t2.c) * i2;
  },
  VS = (e20) => {
    let t2 = e20.reduce(
        (e21, t3) => {
          if (void 0 !== t3) {
            let n3 = (t3 * Math.PI) / 180;
            (e21.sin += Math.sin(n3)), (e21.cos += Math.cos(n3));
          }
          return e21;
        },
        { sin: 0, cos: 0 },
      ),
      n2 = (180 * Math.atan2(t2.sin, t2.cos)) / Math.PI;
    return n2 < 0 ? 360 + n2 : n2;
  },
  QS = {
    mode: "cubehelix",
    channels: ["h", "s", "l", "alpha"],
    parse: ["--cubehelix"],
    serialize: "--cubehelix",
    ranges: { h: [0, 360], s: [0, 4.614], l: [0, 1] },
    fromMode: {
      rgb: ({ r: e20, g: t2, b: n2, alpha: r2 }) => {
        void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
        let i2 = (FS * n2 + e20 * BS - t2 * qS) / (FS + BS - qS),
          o2 = n2 - i2,
          a2 = (RS[4] * (t2 - i2) - RS[2] * o2) / RS[3],
          s2 = {
            mode: "cubehelix",
            l: i2,
            s:
              0 === i2 || 1 === i2
                ? void 0
                : Math.sqrt(o2 * o2 + a2 * a2) / (RS[4] * i2 * (1 - i2)),
          };
        return s2.s && (s2.h = Math.atan2(a2, o2) * $S - 120), void 0 !== r2 && (s2.alpha = r2), s2;
      },
    },
    toMode: {
      rgb: ({ h: e20, s: t2, l: n2, alpha: r2 }) => {
        let i2 = { mode: "rgb" };
        (e20 = (void 0 === e20 ? 0 : e20 + 120) * LS), void 0 === n2 && (n2 = 0);
        let o2 = void 0 === t2 ? 0 : t2 * n2 * (1 - n2),
          a2 = Math.cos(e20),
          s2 = Math.sin(e20);
        return (
          (i2.r = n2 + o2 * (RS[0] * a2 + RS[1] * s2)),
          (i2.g = n2 + o2 * (RS[2] * a2 + RS[3] * s2)),
          (i2.b = n2 + o2 * (RS[4] * a2 + RS[5] * s2)),
          void 0 !== r2 && (i2.alpha = r2),
          i2
        );
      },
    },
    interpolate: { h: { use: xS, fixup: DS }, s: xS, l: xS, alpha: { use: xS, fixup: OS } },
    difference: { h: US },
    average: { h: VS },
  },
  GS = ({ l: e20, a: t2, b: n2, alpha: r2 }, i2 = "lch") => {
    void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let o2 = Math.sqrt(t2 * t2 + n2 * n2),
      a2 = { mode: i2, l: e20, c: o2 };
    return (
      o2 && (a2.h = zS((180 * Math.atan2(n2, t2)) / Math.PI)), void 0 !== r2 && (a2.alpha = r2), a2
    );
  },
  HS = ({ l: e20, c: t2, h: n2, alpha: r2 }, i2 = "lab") => {
    void 0 === n2 && (n2 = 0);
    let o2 = {
      mode: i2,
      l: e20,
      a: t2 ? t2 * Math.cos((n2 / 180) * Math.PI) : 0,
      b: t2 ? t2 * Math.sin((n2 / 180) * Math.PI) : 0,
    };
    return void 0 !== r2 && (o2.alpha = r2), o2;
  },
  XS = Math.pow(29, 3) / Math.pow(3, 3),
  KS = Math.pow(6, 3) / Math.pow(29, 3),
  YS = 0.3457 / 0.3585,
  ZS = 1,
  JS = 0.2958 / 0.3585,
  eA = 0.3127 / 0.329,
  tA = 1,
  nA = 0.3583 / 0.329;
let rA = (e20) => (Math.pow(e20, 3) > KS ? Math.pow(e20, 3) : (116 * e20 - 16) / XS);
const iA = ({ l: e20, a: t2, b: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = (e20 + 16) / 116,
      o2 = i2 - n2 / 200,
      a2 = { mode: "xyz65", x: rA(t2 / 500 + i2) * eA, y: rA(i2) * tA, z: rA(o2) * nA };
    return void 0 !== r2 && (a2.alpha = r2), a2;
  },
  oA = (e20) => _S(iA(e20)),
  aA = (e20) => (e20 > KS ? Math.cbrt(e20) : (XS * e20 + 16) / 116),
  sA = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = aA(e20 / eA),
      o2 = aA(t2 / tA),
      a2 = { mode: "lab65", l: 116 * o2 - 16, a: 500 * (i2 - o2), b: 200 * (o2 - aA(n2 / nA)) };
    return void 0 !== r2 && (a2.alpha = r2), a2;
  },
  cA = (e20) => {
    let t2 = sA(TS(e20));
    return e20.r === e20.b && e20.b === e20.g && (t2.a = t2.b = 0), t2;
  },
  lA = (26 / 180) * Math.PI,
  uA = Math.cos(lA),
  fA = Math.sin(lA),
  dA = 100 / Math.log(1.39),
  pA = ({ l: e20, c: t2, h: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = { mode: "lab65", l: (Math.exp((1 * e20) / dA) - 1) / 39e-4 },
      o2 = (Math.exp(0.0435 * t2 * 1 * 1) - 1) / 0.075,
      a2 = o2 * Math.cos((n2 / 180) * Math.PI - lA),
      s2 = o2 * Math.sin((n2 / 180) * Math.PI - lA);
    return (
      (i2.a = a2 * uA - (s2 / 0.83) * fA),
      (i2.b = a2 * fA + (s2 / 0.83) * uA),
      void 0 !== r2 && (i2.alpha = r2),
      i2
    );
  },
  hA = ({ l: e20, a: t2, b: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = t2 * uA + n2 * fA,
      o2 = 0.83 * (n2 * uA - t2 * fA),
      a2 = Math.sqrt(i2 * i2 + o2 * o2),
      s2 = {
        mode: "dlch",
        l: (dA / 1) * Math.log(1 + 39e-4 * e20),
        c: Math.log(1 + 0.075 * a2) / 0.0435,
      };
    return (
      s2.c && (s2.h = zS(((Math.atan2(o2, i2) + lA) / Math.PI) * 180)),
      void 0 !== r2 && (s2.alpha = r2),
      s2
    );
  },
  yA = (e20) => pA(GS(e20, "dlch")),
  mA = (e20) => HS(hA(e20), "dlab"),
  vA = {
    mode: "dlab",
    parse: ["--din99o-lab"],
    serialize: "--din99o-lab",
    toMode: { lab65: yA, rgb: (e20) => oA(yA(e20)) },
    fromMode: { lab65: mA, rgb: (e20) => mA(cA(e20)) },
    channels: ["l", "a", "b", "alpha"],
    ranges: { l: [0, 100], a: [-40.09, 45.501], b: [-40.469, 44.344] },
    interpolate: { l: xS, a: xS, b: xS, alpha: { use: xS, fixup: OS } },
  },
  gA = {
    mode: "dlch",
    parse: ["--din99o-lch"],
    serialize: "--din99o-lch",
    toMode: { lab65: pA, dlab: (e20) => HS(e20, "dlab"), rgb: (e20) => oA(pA(e20)) },
    fromMode: { lab65: hA, dlab: (e20) => GS(e20, "dlch"), rgb: (e20) => hA(cA(e20)) },
    channels: ["l", "c", "h", "alpha"],
    ranges: { l: [0, 100], c: [0, 51.484], h: [0, 360] },
    interpolate: { l: xS, c: xS, h: { use: xS, fixup: DS }, alpha: { use: xS, fixup: OS } },
    difference: { h: WS },
    average: { h: VS },
  };
const bA = {
  mode: "hsi",
  toMode: {
    rgb: function ({ h: e20, s: t2, i: n2, alpha: r2 }) {
      (e20 = zS(void 0 !== e20 ? e20 : 0)), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
      let i2,
        o2 = Math.abs(((e20 / 60) % 2) - 1);
      switch (Math.floor(e20 / 60)) {
        case 0:
          i2 = {
            r: n2 * (1 + t2 * (3 / (2 - o2) - 1)),
            g: n2 * (1 + t2 * ((3 * (1 - o2)) / (2 - o2) - 1)),
            b: n2 * (1 - t2),
          };
          break;
        case 1:
          i2 = {
            r: n2 * (1 + t2 * ((3 * (1 - o2)) / (2 - o2) - 1)),
            g: n2 * (1 + t2 * (3 / (2 - o2) - 1)),
            b: n2 * (1 - t2),
          };
          break;
        case 2:
          i2 = {
            r: n2 * (1 - t2),
            g: n2 * (1 + t2 * (3 / (2 - o2) - 1)),
            b: n2 * (1 + t2 * ((3 * (1 - o2)) / (2 - o2) - 1)),
          };
          break;
        case 3:
          i2 = {
            r: n2 * (1 - t2),
            g: n2 * (1 + t2 * ((3 * (1 - o2)) / (2 - o2) - 1)),
            b: n2 * (1 + t2 * (3 / (2 - o2) - 1)),
          };
          break;
        case 4:
          i2 = {
            r: n2 * (1 + t2 * ((3 * (1 - o2)) / (2 - o2) - 1)),
            g: n2 * (1 - t2),
            b: n2 * (1 + t2 * (3 / (2 - o2) - 1)),
          };
          break;
        case 5:
          i2 = {
            r: n2 * (1 + t2 * (3 / (2 - o2) - 1)),
            g: n2 * (1 - t2),
            b: n2 * (1 + t2 * ((3 * (1 - o2)) / (2 - o2) - 1)),
          };
          break;
        default:
          i2 = { r: n2 * (1 - t2), g: n2 * (1 - t2), b: n2 * (1 - t2) };
      }
      return (i2.mode = "rgb"), void 0 !== r2 && (i2.alpha = r2), i2;
    },
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: function ({ r: e20, g: t2, b: n2, alpha: r2 }) {
      void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
      let i2 = Math.max(e20, t2, n2),
        o2 = Math.min(e20, t2, n2),
        a2 = {
          mode: "hsi",
          s: e20 + t2 + n2 === 0 ? 0 : 1 - (3 * o2) / (e20 + t2 + n2),
          i: (e20 + t2 + n2) / 3,
        };
      return (
        i2 - o2 != 0 &&
          (a2.h =
            60 *
            (i2 === e20
              ? (t2 - n2) / (i2 - o2) + 6 * (t2 < n2)
              : i2 === t2
                ? (n2 - e20) / (i2 - o2) + 2
                : (e20 - t2) / (i2 - o2) + 4)),
        void 0 !== r2 && (a2.alpha = r2),
        a2
      );
    },
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  interpolate: { h: { use: xS, fixup: DS }, s: xS, i: xS, alpha: { use: xS, fixup: OS } },
  difference: { h: US },
  average: { h: VS },
};
const xA = new RegExp(`^hsla?\\(\\s*${qO}${FO}${$O}${FO}${$O}\\s*(?:,\\s*${BO}\\s*)?\\)$`);
const wA = {
  mode: "hsl",
  toMode: {
    rgb: function ({ h: e20, s: t2, l: n2, alpha: r2 }) {
      (e20 = zS(void 0 !== e20 ? e20 : 0)), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
      let i2,
        o2 = n2 + t2 * (n2 < 0.5 ? n2 : 1 - n2),
        a2 = o2 - 2 * (o2 - n2) * Math.abs(((e20 / 60) % 2) - 1);
      switch (Math.floor(e20 / 60)) {
        case 0:
          i2 = { r: o2, g: a2, b: 2 * n2 - o2 };
          break;
        case 1:
          i2 = { r: a2, g: o2, b: 2 * n2 - o2 };
          break;
        case 2:
          i2 = { r: 2 * n2 - o2, g: o2, b: a2 };
          break;
        case 3:
          i2 = { r: 2 * n2 - o2, g: a2, b: o2 };
          break;
        case 4:
          i2 = { r: a2, g: 2 * n2 - o2, b: o2 };
          break;
        case 5:
          i2 = { r: o2, g: 2 * n2 - o2, b: a2 };
          break;
        default:
          i2 = { r: 2 * n2 - o2, g: 2 * n2 - o2, b: 2 * n2 - o2 };
      }
      return (i2.mode = "rgb"), void 0 !== r2 && (i2.alpha = r2), i2;
    },
  },
  fromMode: {
    rgb: function ({ r: e20, g: t2, b: n2, alpha: r2 }) {
      void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
      let i2 = Math.max(e20, t2, n2),
        o2 = Math.min(e20, t2, n2),
        a2 = {
          mode: "hsl",
          s: i2 === o2 ? 0 : (i2 - o2) / (1 - Math.abs(i2 + o2 - 1)),
          l: 0.5 * (i2 + o2),
        };
      return (
        i2 - o2 != 0 &&
          (a2.h =
            60 *
            (i2 === e20
              ? (t2 - n2) / (i2 - o2) + 6 * (t2 < n2)
              : i2 === t2
                ? (n2 - e20) / (i2 - o2) + 2
                : (e20 - t2) / (i2 - o2) + 4)),
        void 0 !== r2 && (a2.alpha = r2),
        a2
      );
    },
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [
    function (e20, t2) {
      if (!t2 || ("hsl" !== t2[0] && "hsla" !== t2[0])) return;
      const n2 = { mode: "hsl" },
        [, r2, i2, o2, a2] = t2;
      if (r2.type !== aS) {
        if (r2.type === iS) return;
        n2.h = r2.value;
      }
      if (i2.type !== aS) {
        if (i2.type === sS) return;
        n2.s = i2.value / 100;
      }
      if (o2.type !== aS) {
        if (o2.type === sS) return;
        n2.l = o2.value / 100;
      }
      return (
        a2.type !== aS &&
          (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
        n2
      );
    },
    (e20) => {
      let t2 = e20.match(xA);
      if (!t2) return;
      let n2 = { mode: "hsl" };
      return (
        void 0 !== t2[3]
          ? (n2.h = +t2[3])
          : void 0 !== t2[1] &&
            void 0 !== t2[2] &&
            (n2.h = ((e21, t3) => {
              switch (t3) {
                case "deg":
                  return +e21;
                case "rad":
                  return (e21 / Math.PI) * 180;
                case "grad":
                  return (e21 / 10) * 9;
                case "turn":
                  return 360 * e21;
              }
            })(t2[1], t2[2])),
        void 0 !== t2[4] && (n2.s = Math.min(Math.max(0, t2[4] / 100), 1)),
        void 0 !== t2[5] && (n2.l = Math.min(Math.max(0, t2[5] / 100), 1)),
        void 0 !== t2[6]
          ? (n2.alpha = Math.max(0, Math.min(1, t2[6] / 100)))
          : void 0 !== t2[7] && (n2.alpha = Math.max(0, Math.min(1, +t2[7]))),
        n2
      );
    },
  ],
  serialize: (e20) =>
    `hsl(${void 0 !== e20.h ? e20.h : "none"} ${void 0 !== e20.s ? 100 * e20.s + "%" : "none"} ${void 0 !== e20.l ? 100 * e20.l + "%" : "none"}${e20.alpha < 1 ? ` / ${e20.alpha}` : ""})`,
  interpolate: { h: { use: xS, fixup: DS }, s: xS, l: xS, alpha: { use: xS, fixup: OS } },
  difference: { h: US },
  average: { h: VS },
};
function OA({ h: e20, s: t2, v: n2, alpha: r2 }) {
  (e20 = zS(void 0 !== e20 ? e20 : 0)), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
  let i2,
    o2 = Math.abs(((e20 / 60) % 2) - 1);
  switch (Math.floor(e20 / 60)) {
    case 0:
      i2 = { r: n2, g: n2 * (1 - t2 * o2), b: n2 * (1 - t2) };
      break;
    case 1:
      i2 = { r: n2 * (1 - t2 * o2), g: n2, b: n2 * (1 - t2) };
      break;
    case 2:
      i2 = { r: n2 * (1 - t2), g: n2, b: n2 * (1 - t2 * o2) };
      break;
    case 3:
      i2 = { r: n2 * (1 - t2), g: n2 * (1 - t2 * o2), b: n2 };
      break;
    case 4:
      i2 = { r: n2 * (1 - t2 * o2), g: n2 * (1 - t2), b: n2 };
      break;
    case 5:
      i2 = { r: n2, g: n2 * (1 - t2), b: n2 * (1 - t2 * o2) };
      break;
    default:
      i2 = { r: n2 * (1 - t2), g: n2 * (1 - t2), b: n2 * (1 - t2) };
  }
  return (i2.mode = "rgb"), void 0 !== r2 && (i2.alpha = r2), i2;
}
function SA({ r: e20, g: t2, b: n2, alpha: r2 }) {
  void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
  let i2 = Math.max(e20, t2, n2),
    o2 = Math.min(e20, t2, n2),
    a2 = { mode: "hsv", s: 0 === i2 ? 0 : 1 - o2 / i2, v: i2 };
  return (
    i2 - o2 != 0 &&
      (a2.h =
        60 *
        (i2 === e20
          ? (t2 - n2) / (i2 - o2) + 6 * (t2 < n2)
          : i2 === t2
            ? (n2 - e20) / (i2 - o2) + 2
            : (e20 - t2) / (i2 - o2) + 4)),
    void 0 !== r2 && (a2.alpha = r2),
    a2
  );
}
const AA = {
  mode: "hsv",
  toMode: { rgb: OA },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: SA },
  channels: ["h", "s", "v", "alpha"],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  interpolate: { h: { use: xS, fixup: DS }, s: xS, v: xS, alpha: { use: xS, fixup: OS } },
  difference: { h: US },
  average: { h: VS },
};
const jA = {
    mode: "hwb",
    toMode: {
      rgb: function ({ h: e20, w: t2, b: n2, alpha: r2 }) {
        if ((void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0), t2 + n2 > 1)) {
          let e21 = t2 + n2;
          (t2 /= e21), (n2 /= e21);
        }
        return OA({ h: e20, s: 1 === n2 ? 1 : 1 - t2 / (1 - n2), v: 1 - n2, alpha: r2 });
      },
    },
    fromMode: {
      rgb: function (e20) {
        let t2 = SA(e20);
        if (void 0 === t2) return;
        let n2 = void 0 !== t2.s ? t2.s : 0,
          r2 = void 0 !== t2.v ? t2.v : 0,
          i2 = { mode: "hwb", w: (1 - n2) * r2, b: 1 - r2 };
        return void 0 !== t2.h && (i2.h = t2.h), void 0 !== t2.alpha && (i2.alpha = t2.alpha), i2;
      },
    },
    channels: ["h", "w", "b", "alpha"],
    ranges: { h: [0, 360] },
    gamut: "rgb",
    parse: [
      function (e20, t2) {
        if (!t2 || "hwb" !== t2[0]) return;
        const n2 = { mode: "hwb" },
          [, r2, i2, o2, a2] = t2;
        if (r2.type !== aS) {
          if (r2.type === iS) return;
          n2.h = r2.value;
        }
        if (i2.type !== aS) {
          if (i2.type === sS) return;
          n2.w = i2.value / 100;
        }
        if (o2.type !== aS) {
          if (o2.type === sS) return;
          n2.b = o2.value / 100;
        }
        return (
          a2.type !== aS &&
            (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
          n2
        );
      },
    ],
    serialize: (e20) =>
      `hwb(${void 0 !== e20.h ? e20.h : "none"} ${void 0 !== e20.w ? 100 * e20.w + "%" : "none"} ${void 0 !== e20.b ? 100 * e20.b + "%" : "none"}${e20.alpha < 1 ? ` / ${e20.alpha}` : ""})`,
    interpolate: { h: { use: xS, fixup: DS }, w: xS, b: xS, alpha: { use: xS, fixup: OS } },
    difference: {
      h: (e20, t2) => {
        if (void 0 === e20.h || void 0 === t2.h) return 0;
        let n2 = zS(e20.h),
          r2 = zS(t2.h);
        return Math.abs(r2 - n2) > 180 ? n2 - (r2 - 360 * Math.sign(r2 - n2)) : r2 - n2;
      },
    },
    average: { h: VS },
  },
  MA = 0.1593017578125,
  PA = 78.84375,
  kA = 0.8359375,
  EA = 18.8515625,
  TA = 18.6875;
function NA(e20) {
  if (e20 < 0) return 0;
  const t2 = Math.pow(e20, 1 / PA);
  return 1e4 * Math.pow(Math.max(0, t2 - kA) / (EA - TA * t2), 1 / MA);
}
function IA(e20) {
  if (e20 < 0) return 0;
  const t2 = Math.pow(e20 / 1e4, MA);
  return Math.pow((kA + EA * t2) / (1 + TA * t2), PA);
}
const _A = (e20) => Math.max(e20 / 203, 0),
  CA = ({ i: e20, t: t2, p: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    const i2 = NA(e20 + 0.008609037037932761 * t2 + 0.11102962500302593 * n2),
      o2 = NA(e20 - 0.00860903703793275 * t2 - 0.11102962500302599 * n2),
      a2 = NA(e20 + 0.5600313357106791 * t2 - 0.32062717498731885 * n2),
      s2 = {
        mode: "xyz65",
        x: _A(2.070152218389422 * i2 - 1.3263473389671556 * o2 + 0.2066510476294051 * a2),
        y: _A(0.3647385209748074 * i2 + 0.680566024947227 * o2 - 0.0453045459220346 * a2),
        z: _A(-0.049747207535812 * i2 - 0.0492609666966138 * o2 + 1.1880659249923042 * a2),
      };
    return void 0 !== r2 && (s2.alpha = r2), s2;
  },
  zA = (e20 = 0) => Math.max(203 * e20, 0),
  DA = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    const i2 = zA(e20),
      o2 = zA(t2),
      a2 = zA(n2),
      s2 = IA(0.3592832590121217 * i2 + 0.6976051147779502 * o2 - 0.0358915932320289 * a2),
      c2 = IA(-0.1920808463704995 * i2 + 1.1004767970374323 * o2 + 0.0753748658519118 * a2),
      l2 = IA(0.0070797844607477 * i2 + 0.0748396662186366 * o2 + 0.8433265453898765 * a2),
      u2 = {
        mode: "itp",
        i: 0.5 * s2 + 0.5 * c2,
        t: 1.61376953125 * s2 - 3.323486328125 * c2 + 1.709716796875 * l2,
        p: 4.378173828125 * s2 - 4.24560546875 * c2 - 0.132568359375 * l2,
      };
    return void 0 !== r2 && (u2.alpha = r2), u2;
  },
  RA = {
    mode: "itp",
    channels: ["i", "t", "p", "alpha"],
    parse: ["--ictcp"],
    serialize: "--ictcp",
    toMode: { xyz65: CA, rgb: (e20) => _S(CA(e20)) },
    fromMode: { xyz65: DA, rgb: (e20) => DA(TS(e20)) },
    ranges: { i: [0, 0.581], t: [-0.369, 0.272], p: [-0.164, 0.331] },
    interpolate: { i: xS, t: xS, p: xS, alpha: { use: xS, fixup: OS } },
  },
  LA = (e20) => {
    if (e20 < 0) return 0;
    let t2 = Math.pow(e20 / 1e4, MA);
    return Math.pow((kA + EA * t2) / (1 + TA * t2), 134.03437499999998);
  },
  $A = (e20 = 0) => Math.max(203 * e20, 0),
  BA = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    (e20 = $A(e20)), (t2 = $A(t2));
    let i2 = 1.15 * e20 - 0.15 * (n2 = $A(n2)),
      o2 = 0.66 * t2 + 0.34 * e20,
      a2 = LA(0.41478972 * i2 + 0.579999 * o2 + 0.014648 * n2),
      s2 = LA(-0.20151 * i2 + 1.120649 * o2 + 0.0531008 * n2),
      c2 = LA(-0.0166008 * i2 + 0.2648 * o2 + 0.6684799 * n2),
      l2 = (a2 + s2) / 2,
      u2 = {
        mode: "jab",
        j: (0.44 * l2) / (1 - 0.56 * l2) - 16295499532821565e-27,
        a: 3.524 * a2 - 4.066708 * s2 + 0.542708 * c2,
        b: 0.199076 * a2 + 1.096799 * s2 - 1.295875 * c2,
      };
    return void 0 !== r2 && (u2.alpha = r2), u2;
  },
  qA = 16295499532821565e-27,
  FA = (e20) => {
    if (e20 < 0) return 0;
    let t2 = Math.pow(e20, 0.007460772656268216);
    return 1e4 * Math.pow((kA - t2) / (TA * t2 - EA), 1 / MA);
  },
  UA = (e20) => e20 / 203,
  WA = ({ j: e20, a: t2, b: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = (e20 + qA) / (0.44 + 0.56 * (e20 + qA)),
      o2 = FA(i2 + 0.13860504 * t2 + 0.058047316 * n2),
      a2 = FA(i2 - 0.13860504 * t2 - 0.058047316 * n2),
      s2 = FA(i2 - 0.096019242 * t2 - 0.8118919 * n2),
      c2 = {
        mode: "xyz65",
        x: UA(1.661373024652174 * o2 - 0.914523081304348 * a2 + 0.23136208173913045 * s2),
        y: UA(-0.3250758611844533 * o2 + 1.571847026732543 * a2 - 0.21825383453227928 * s2),
        z: UA(-0.090982811 * o2 - 0.31272829 * a2 + 1.5227666 * s2),
      };
    return void 0 !== r2 && (c2.alpha = r2), c2;
  },
  VA = (e20) => {
    let t2 = BA(TS(e20));
    return e20.r === e20.b && e20.b === e20.g && (t2.a = t2.b = 0), t2;
  },
  QA = (e20) => _S(WA(e20)),
  GA = {
    mode: "jab",
    channels: ["j", "a", "b", "alpha"],
    parse: ["--jzazbz"],
    serialize: "--jzazbz",
    fromMode: { rgb: VA, xyz65: BA },
    toMode: { rgb: QA, xyz65: WA },
    ranges: { j: [0, 0.222], a: [-0.109, 0.129], b: [-0.185, 0.134] },
    interpolate: { j: xS, a: xS, b: xS, alpha: { use: xS, fixup: OS } },
  },
  HA = ({ j: e20, a: t2, b: n2, alpha: r2 }) => {
    void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = Math.sqrt(t2 * t2 + n2 * n2),
      o2 = { mode: "jch", j: e20, c: i2 };
    return (
      i2 && (o2.h = zS((180 * Math.atan2(n2, t2)) / Math.PI)), void 0 !== r2 && (o2.alpha = r2), o2
    );
  },
  XA = ({ j: e20, c: t2, h: n2, alpha: r2 }) => {
    void 0 === n2 && (n2 = 0);
    let i2 = {
      mode: "jab",
      j: e20,
      a: t2 ? t2 * Math.cos((n2 / 180) * Math.PI) : 0,
      b: t2 ? t2 * Math.sin((n2 / 180) * Math.PI) : 0,
    };
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  KA = {
    mode: "jch",
    parse: ["--jzczhz"],
    serialize: "--jzczhz",
    toMode: { jab: XA, rgb: (e20) => QA(XA(e20)) },
    fromMode: { rgb: (e20) => HA(VA(e20)), jab: HA },
    channels: ["j", "c", "h", "alpha"],
    ranges: { j: [0, 0.221], c: [0, 0.19], h: [0, 360] },
    interpolate: { h: { use: xS, fixup: DS }, c: xS, j: xS, alpha: { use: xS, fixup: OS } },
    difference: { h: WS },
    average: { h: VS },
  },
  YA = Math.pow(29, 3) / Math.pow(3, 3),
  ZA = Math.pow(6, 3) / Math.pow(29, 3);
let JA = (e20) => (Math.pow(e20, 3) > ZA ? Math.pow(e20, 3) : (116 * e20 - 16) / YA);
const ej = ({ l: e20, a: t2, b: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = (e20 + 16) / 116,
      o2 = i2 - n2 / 200,
      a2 = { mode: "xyz50", x: JA(t2 / 500 + i2) * YS, y: JA(i2) * ZS, z: JA(o2) * JS };
    return void 0 !== r2 && (a2.alpha = r2), a2;
  },
  tj = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = IS({
      r: 3.1341359569958707 * e20 - 1.6173863321612538 * t2 - 0.4906619460083532 * n2,
      g: -0.978795502912089 * e20 + 1.916254567259524 * t2 + 0.03344273116131949 * n2,
      b: 0.07195537988411677 * e20 - 0.2289768264158322 * t2 + 1.405386058324125 * n2,
    });
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  nj = (e20) => tj(ej(e20)),
  rj = (e20) => {
    let { r: t2, g: n2, b: r2, alpha: i2 } = ES(e20),
      o2 = {
        mode: "xyz50",
        x: 0.436065742824811 * t2 + 0.3851514688337912 * n2 + 0.14307845442264197 * r2,
        y: 0.22249319175623702 * t2 + 0.7168870538238823 * n2 + 0.06061979053616537 * r2,
        z: 0.013923904500943465 * t2 + 0.09708128566574634 * n2 + 0.7140993584005155 * r2,
      };
    return void 0 !== i2 && (o2.alpha = i2), o2;
  },
  ij = (e20) => (e20 > ZA ? Math.cbrt(e20) : (YA * e20 + 16) / 116),
  oj = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = ij(e20 / YS),
      o2 = ij(t2 / ZS),
      a2 = { mode: "lab", l: 116 * o2 - 16, a: 500 * (i2 - o2), b: 200 * (o2 - ij(n2 / JS)) };
    return void 0 !== r2 && (a2.alpha = r2), a2;
  },
  aj = (e20) => {
    let t2 = oj(rj(e20));
    return e20.r === e20.b && e20.b === e20.g && (t2.a = t2.b = 0), t2;
  };
const sj = {
    mode: "lab",
    toMode: { xyz50: ej, rgb: nj },
    fromMode: { xyz50: oj, rgb: aj },
    channels: ["l", "a", "b", "alpha"],
    ranges: { l: [0, 100], a: [-125, 125], b: [-125, 125] },
    parse: [
      function (e20, t2) {
        if (!t2 || "lab" !== t2[0]) return;
        const n2 = { mode: "lab" },
          [, r2, i2, o2, a2] = t2;
        return r2.type !== sS && i2.type !== sS && o2.type !== sS
          ? (r2.type !== aS && (n2.l = Math.min(Math.max(0, r2.value), 100)),
            i2.type !== aS && (n2.a = i2.type === rS ? i2.value : (125 * i2.value) / 100),
            o2.type !== aS && (n2.b = o2.type === rS ? o2.value : (125 * o2.value) / 100),
            a2.type !== aS &&
              (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
            n2)
          : void 0;
      },
    ],
    serialize: (e20) =>
      `lab(${void 0 !== e20.l ? e20.l : "none"} ${void 0 !== e20.a ? e20.a : "none"} ${void 0 !== e20.b ? e20.b : "none"}${e20.alpha < 1 ? ` / ${e20.alpha}` : ""})`,
    interpolate: { l: xS, a: xS, b: xS, alpha: { use: xS, fixup: OS } },
  },
  cj = {
    ...sj,
    mode: "lab65",
    parse: ["--lab-d65"],
    serialize: "--lab-d65",
    toMode: { xyz65: iA, rgb: oA },
    fromMode: { xyz65: sA, rgb: cA },
    ranges: { l: [0, 100], a: [-125, 125], b: [-125, 125] },
  };
const lj = {
    mode: "lch",
    toMode: { lab: HS, rgb: (e20) => nj(HS(e20)) },
    fromMode: { rgb: (e20) => GS(aj(e20)), lab: GS },
    channels: ["l", "c", "h", "alpha"],
    ranges: { l: [0, 100], c: [0, 150], h: [0, 360] },
    parse: [
      function (e20, t2) {
        if (!t2 || "lch" !== t2[0]) return;
        const n2 = { mode: "lch" },
          [, r2, i2, o2, a2] = t2;
        if (r2.type !== aS) {
          if (r2.type === sS) return;
          n2.l = Math.min(Math.max(0, r2.value), 100);
        }
        if (
          (i2.type !== aS &&
            (n2.c = Math.max(0, i2.type === rS ? i2.value : (150 * i2.value) / 100)),
          o2.type !== aS)
        ) {
          if (o2.type === iS) return;
          n2.h = o2.value;
        }
        return (
          a2.type !== aS &&
            (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
          n2
        );
      },
    ],
    serialize: (e20) =>
      `lch(${void 0 !== e20.l ? e20.l : "none"} ${void 0 !== e20.c ? e20.c : "none"} ${void 0 !== e20.h ? e20.h : "none"}${e20.alpha < 1 ? ` / ${e20.alpha}` : ""})`,
    interpolate: { h: { use: xS, fixup: DS }, c: xS, l: xS, alpha: { use: xS, fixup: OS } },
    difference: { h: WS },
    average: { h: VS },
  },
  uj = {
    ...lj,
    mode: "lch65",
    parse: ["--lch-d65"],
    serialize: "--lch-d65",
    toMode: { lab65: (e20) => HS(e20, "lab65"), rgb: (e20) => oA(HS(e20, "lab65")) },
    fromMode: { rgb: (e20) => GS(cA(e20), "lch65"), lab65: (e20) => GS(e20, "lch65") },
    ranges: { l: [0, 100], c: [0, 150], h: [0, 360] },
  },
  fj = ({ l: e20, u: t2, v: n2, alpha: r2 }) => {
    void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = Math.sqrt(t2 * t2 + n2 * n2),
      o2 = { mode: "lchuv", l: e20, c: i2 };
    return (
      i2 && (o2.h = zS((180 * Math.atan2(n2, t2)) / Math.PI)), void 0 !== r2 && (o2.alpha = r2), o2
    );
  },
  dj = ({ l: e20, c: t2, h: n2, alpha: r2 }) => {
    void 0 === n2 && (n2 = 0);
    let i2 = {
      mode: "luv",
      l: e20,
      u: t2 ? t2 * Math.cos((n2 / 180) * Math.PI) : 0,
      v: t2 ? t2 * Math.sin((n2 / 180) * Math.PI) : 0,
    };
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  pj = (e20, t2, n2) => (4 * e20) / (e20 + 15 * t2 + 3 * n2),
  hj = (e20, t2, n2) => (9 * t2) / (e20 + 15 * t2 + 3 * n2),
  yj = pj(YS, ZS, JS),
  mj = hj(YS, ZS, JS),
  vj = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = (o2 = t2 / ZS) <= ZA ? YA * o2 : 116 * Math.cbrt(o2) - 16;
    var o2;
    let a2 = pj(e20, t2, n2),
      s2 = hj(e20, t2, n2);
    isFinite(a2) && isFinite(s2)
      ? ((a2 = 13 * i2 * (a2 - yj)), (s2 = 13 * i2 * (s2 - mj)))
      : (i2 = a2 = s2 = 0);
    let c2 = { mode: "luv", l: i2, u: a2, v: s2 };
    return void 0 !== r2 && (c2.alpha = r2), c2;
  },
  gj = ((e20, t2, n2) => (4 * e20) / (e20 + 15 * t2 + 3 * n2))(YS, ZS, JS),
  bj = ((e20, t2, n2) => (9 * t2) / (e20 + 15 * t2 + 3 * n2))(YS, ZS, JS),
  xj = ({ l: e20, u: t2, v: n2, alpha: r2 }) => {
    if ((void 0 === e20 && (e20 = 0), 0 === e20)) return { mode: "xyz50", x: 0, y: 0, z: 0 };
    void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = t2 / (13 * e20) + gj,
      o2 = n2 / (13 * e20) + bj,
      a2 = ZS * (e20 <= 8 ? e20 / YA : Math.pow((e20 + 16) / 116, 3)),
      s2 = {
        mode: "xyz50",
        x: (a2 * (9 * i2)) / (4 * o2),
        y: a2,
        z: (a2 * (12 - 3 * i2 - 20 * o2)) / (4 * o2),
      };
    return void 0 !== r2 && (s2.alpha = r2), s2;
  },
  wj = {
    mode: "lchuv",
    toMode: { luv: dj, rgb: (e20) => tj(xj(dj(e20))) },
    fromMode: { rgb: (e20) => fj(vj(rj(e20))), luv: fj },
    channels: ["l", "c", "h", "alpha"],
    parse: ["--lchuv"],
    serialize: "--lchuv",
    ranges: { l: [0, 100], c: [0, 176.956], h: [0, 360] },
    interpolate: { h: { use: xS, fixup: DS }, c: xS, l: xS, alpha: { use: xS, fixup: OS } },
    difference: { h: WS },
    average: { h: VS },
  },
  Oj = {
    ...SS,
    mode: "lrgb",
    toMode: { rgb: IS },
    fromMode: { rgb: ES },
    parse: ["srgb-linear"],
    serialize: "srgb-linear",
  },
  Sj = {
    mode: "luv",
    toMode: { xyz50: xj, rgb: (e20) => tj(xj(e20)) },
    fromMode: { xyz50: vj, rgb: (e20) => vj(rj(e20)) },
    channels: ["l", "u", "v", "alpha"],
    parse: ["--luv"],
    serialize: "--luv",
    ranges: { l: [0, 100], u: [-84.936, 175.042], v: [-125.882, 87.243] },
    interpolate: { l: xS, u: xS, v: xS, alpha: { use: xS, fixup: OS } },
  },
  Aj = ({ r: e20, g: t2, b: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = Math.cbrt(0.412221469470763 * e20 + 0.5363325372617348 * t2 + 0.0514459932675022 * n2),
      o2 = Math.cbrt(0.2119034958178252 * e20 + 0.6806995506452344 * t2 + 0.1073969535369406 * n2),
      a2 = Math.cbrt(0.0883024591900564 * e20 + 0.2817188391361215 * t2 + 0.6299787016738222 * n2),
      s2 = {
        mode: "oklab",
        l: 0.210454268309314 * i2 + 0.7936177747023054 * o2 - 0.0040720430116193 * a2,
        a: 1.9779985324311684 * i2 - 2.42859224204858 * o2 + 0.450593709617411 * a2,
        b: 0.0259040424655478 * i2 + 0.7827717124575296 * o2 - 0.8086757549230774 * a2,
      };
    return void 0 !== r2 && (s2.alpha = r2), s2;
  },
  jj = (e20) => {
    let t2 = Aj(ES(e20));
    return e20.r === e20.b && e20.b === e20.g && (t2.a = t2.b = 0), t2;
  },
  Mj = ({ l: e20, a: t2, b: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = Math.pow(e20 + 0.3963377773761749 * t2 + 0.2158037573099136 * n2, 3),
      o2 = Math.pow(e20 - 0.1055613458156586 * t2 - 0.0638541728258133 * n2, 3),
      a2 = Math.pow(e20 - 0.0894841775298119 * t2 - 1.2914855480194092 * n2, 3),
      s2 = {
        mode: "lrgb",
        r: 4.076741636075957 * i2 - 3.3077115392580616 * o2 + 0.2309699031821044 * a2,
        g: -1.2684379732850317 * i2 + 2.6097573492876887 * o2 - 0.3413193760026573 * a2,
        b: -0.0041960761386756 * i2 - 0.7034186179359362 * o2 + 1.7076146940746117 * a2,
      };
    return void 0 !== r2 && (s2.alpha = r2), s2;
  },
  Pj = (e20) => IS(Mj(e20));
function kj(e20) {
  const t2 = 0.206,
    n2 = 1.206 / 1.03;
  return 0.5 * (n2 * e20 - t2 + Math.sqrt((n2 * e20 - t2) * (n2 * e20 - t2) + 0.12 * n2 * e20));
}
function Ej(e20) {
  return (e20 * e20 + 0.206 * e20) / ((1.206 / 1.03) * (e20 + 0.03));
}
function Tj(e20, t2) {
  let n2 = (function (e21, t3) {
      let n3, r3, i3, o2, a2, s2, c2, l2;
      -1.88170328 * e21 - 0.80936493 * t3 > 1
        ? ((n3 = 1.19086277),
          (r3 = 1.76576728),
          (i3 = 0.59662641),
          (o2 = 0.75515197),
          (a2 = 0.56771245),
          (s2 = 4.0767416621),
          (c2 = -3.3077115913),
          (l2 = 0.2309699292))
        : 1.81444104 * e21 - 1.19445276 * t3 > 1
          ? ((n3 = 0.73956515),
            (r3 = -0.45954404),
            (i3 = 0.08285427),
            (o2 = 0.1254107),
            (a2 = 0.14503204),
            (s2 = -1.2684380046),
            (c2 = 2.6097574011),
            (l2 = -0.3413193965))
          : ((n3 = 1.35733652),
            (r3 = -915799e-8),
            (i3 = -1.1513021),
            (o2 = -0.50559606),
            (a2 = 692167e-8),
            (s2 = -0.0041960863),
            (c2 = -0.7034186147),
            (l2 = 1.707614701));
      let u2 = n3 + r3 * e21 + i3 * t3 + o2 * e21 * e21 + a2 * e21 * t3,
        f2 = 0.3963377774 * e21 + 0.2158037573 * t3,
        d2 = -0.1055613458 * e21 - 0.0638541728 * t3,
        p2 = -0.0894841775 * e21 - 1.291485548 * t3;
      {
        let e22 = 1 + u2 * f2,
          t4 = 1 + u2 * d2,
          n4 = 1 + u2 * p2,
          r4 = s2 * (e22 * e22 * e22) + c2 * (t4 * t4 * t4) + l2 * (n4 * n4 * n4),
          i4 = s2 * (3 * f2 * e22 * e22) + c2 * (3 * d2 * t4 * t4) + l2 * (3 * p2 * n4 * n4);
        u2 -=
          (r4 * i4) /
          (i4 * i4 -
            0.5 *
              r4 *
              (s2 * (6 * f2 * f2 * e22) + c2 * (6 * d2 * d2 * t4) + l2 * (6 * p2 * p2 * n4)));
      }
      return u2;
    })(e20, t2),
    r2 = Mj({ l: 1, a: n2 * e20, b: n2 * t2 }),
    i2 = Math.cbrt(1 / Math.max(r2.r, r2.g, r2.b));
  return [i2, i2 * n2];
}
function Nj(e20, t2, n2 = null) {
  n2 || (n2 = Tj(e20, t2));
  let r2 = n2[0],
    i2 = n2[1];
  return [i2 / r2, i2 / (1 - r2)];
}
function Ij(e20, t2, n2) {
  let r2 = Tj(t2, n2),
    i2 = (function (e21, t3, n3, r3, i3, o3 = null) {
      let a3;
      if ((o3 || (o3 = Tj(e21, t3)), (n3 - i3) * o3[1] - (o3[0] - i3) * r3 <= 0))
        a3 = (o3[1] * i3) / (r3 * o3[0] + o3[1] * (i3 - n3));
      else {
        a3 = (o3[1] * (i3 - 1)) / (r3 * (o3[0] - 1) + o3[1] * (i3 - n3));
        {
          let o4 = n3 - i3,
            s3 = 0.3963377774 * e21 + 0.2158037573 * t3,
            c3 = -0.1055613458 * e21 - 0.0638541728 * t3,
            l2 = -0.0894841775 * e21 - 1.291485548 * t3,
            u2 = o4 + r3 * s3,
            f2 = o4 + r3 * c3,
            d2 = o4 + r3 * l2;
          {
            let e22 = i3 * (1 - a3) + a3 * n3,
              t4 = a3 * r3,
              o5 = e22 + t4 * s3,
              p2 = e22 + t4 * c3,
              h2 = e22 + t4 * l2,
              y2 = o5 * o5 * o5,
              m2 = p2 * p2 * p2,
              v2 = h2 * h2 * h2,
              g2 = 3 * u2 * o5 * o5,
              b2 = 3 * f2 * p2 * p2,
              x2 = 3 * d2 * h2 * h2,
              w2 = 6 * u2 * u2 * o5,
              O2 = 6 * f2 * f2 * p2,
              S2 = 6 * d2 * d2 * h2,
              A2 = 4.0767416621 * y2 - 3.3077115913 * m2 + 0.2309699292 * v2 - 1,
              j2 = 4.0767416621 * g2 - 3.3077115913 * b2 + 0.2309699292 * x2,
              M2 =
                j2 /
                (j2 * j2 - 0.5 * A2 * (4.0767416621 * w2 - 3.3077115913 * O2 + 0.2309699292 * S2)),
              P2 = -A2 * M2,
              k2 = -1.2684380046 * y2 + 2.6097574011 * m2 - 0.3413193965 * v2 - 1,
              E2 = -1.2684380046 * g2 + 2.6097574011 * b2 - 0.3413193965 * x2,
              T2 =
                E2 /
                (E2 * E2 - 0.5 * k2 * (-1.2684380046 * w2 + 2.6097574011 * O2 - 0.3413193965 * S2)),
              N2 = -k2 * T2,
              I2 = -0.0041960863 * y2 - 0.7034186147 * m2 + 1.707614701 * v2 - 1,
              _2 = -0.0041960863 * g2 - 0.7034186147 * b2 + 1.707614701 * x2,
              C2 =
                _2 /
                (_2 * _2 - 0.5 * I2 * (-0.0041960863 * w2 - 0.7034186147 * O2 + 1.707614701 * S2)),
              z2 = -I2 * C2;
            (P2 = M2 >= 0 ? P2 : 1e6),
              (N2 = T2 >= 0 ? N2 : 1e6),
              (z2 = C2 >= 0 ? z2 : 1e6),
              (a3 += Math.min(P2, Math.min(N2, z2)));
          }
        }
      }
      return a3;
    })(t2, n2, e20, 1, e20, r2),
    o2 = Nj(t2, n2, r2),
    a2 =
      e20 *
      (0.11516993 +
        1 /
          (7.4477897 +
            4.1590124 * n2 +
            t2 *
              (1.75198401 * n2 -
                2.19557347 +
                t2 *
                  (-2.13704948 -
                    10.02301043 * n2 +
                    t2 * (5.38770819 * n2 - 4.24894561 + 4.69891013 * t2))))),
    s2 =
      (1 - e20) *
      (0.11239642 +
        1 /
          (1.6132032 -
            0.68124379 * n2 +
            t2 *
              (0.40370612 +
                0.90148123 * n2 +
                t2 *
                  (0.6122399 * n2 -
                    0.27087943 +
                    t2 * (299215e-8 - 0.45399568 * n2 - 0.14661872 * t2))))),
    c2 =
      0.9 *
      (i2 / Math.min(e20 * o2[0], (1 - e20) * o2[1])) *
      Math.sqrt(Math.sqrt(1 / (1 / (a2 * a2 * a2 * a2) + 1 / (s2 * s2 * s2 * s2))));
  return (
    (a2 = 0.4 * e20),
    (s2 = 0.8 * (1 - e20)),
    [Math.sqrt(1 / (1 / (a2 * a2) + 1 / (s2 * s2))), c2, i2]
  );
}
function _j(e20) {
  const t2 = void 0 !== e20.l ? e20.l : 0,
    n2 = void 0 !== e20.a ? e20.a : 0,
    r2 = void 0 !== e20.b ? e20.b : 0,
    i2 = { mode: "okhsl", l: kj(t2) };
  void 0 !== e20.alpha && (i2.alpha = e20.alpha);
  let o2 = Math.sqrt(n2 * n2 + r2 * r2);
  if (!o2) return (i2.s = 0), i2;
  let a2,
    [s2, c2, l2] = Ij(t2, n2 / o2, r2 / o2);
  if (o2 < c2) {
    let e21 = 0,
      t3 = 0.8 * s2;
    a2 = 0.8 * ((o2 - e21) / (t3 + (1 - t3 / c2) * (o2 - e21)));
  } else {
    let e21 = (0.2 * c2 * c2 * 1.25 * 1.25) / s2;
    a2 = 0.8 + 0.2 * ((o2 - c2) / (e21 + (1 - e21 / (l2 - c2)) * (o2 - c2)));
  }
  return a2 && ((i2.s = a2), (i2.h = zS((180 * Math.atan2(r2, n2)) / Math.PI))), i2;
}
function Cj(e20) {
  let t2 = void 0 !== e20.h ? e20.h : 0,
    n2 = void 0 !== e20.s ? e20.s : 0,
    r2 = void 0 !== e20.l ? e20.l : 0;
  const i2 = { mode: "oklab", l: Ej(r2) };
  if ((void 0 !== e20.alpha && (i2.alpha = e20.alpha), !n2 || 1 === r2))
    return (i2.a = i2.b = 0), i2;
  let o2,
    a2,
    s2,
    c2,
    l2 = Math.cos((t2 / 180) * Math.PI),
    u2 = Math.sin((t2 / 180) * Math.PI),
    [f2, d2, p2] = Ij(i2.l, l2, u2);
  n2 < 0.8
    ? ((o2 = 1.25 * n2), (a2 = 0), (s2 = 0.8 * f2), (c2 = 1 - s2 / d2))
    : ((o2 = 5 * (n2 - 0.8)),
      (a2 = d2),
      (s2 = (0.2 * d2 * d2 * 1.25 * 1.25) / f2),
      (c2 = 1 - s2 / (p2 - d2)));
  let h2 = a2 + (o2 * s2) / (1 - c2 * o2);
  return (i2.a = h2 * l2), (i2.b = h2 * u2), i2;
}
const zj = {
  ...wA,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: { oklab: _j, rgb: (e20) => _j(jj(e20)) },
  toMode: { oklab: Cj, rgb: (e20) => Pj(Cj(e20)) },
};
function Dj(e20) {
  let t2 = void 0 !== e20.l ? e20.l : 0,
    n2 = void 0 !== e20.a ? e20.a : 0,
    r2 = void 0 !== e20.b ? e20.b : 0,
    i2 = Math.sqrt(n2 * n2 + r2 * r2),
    o2 = i2 ? n2 / i2 : 1,
    a2 = i2 ? r2 / i2 : 1,
    [s2, c2] = Nj(o2, a2),
    l2 = 1 - 0.5 / s2,
    u2 = c2 / (i2 + t2 * c2),
    f2 = u2 * t2,
    d2 = u2 * i2,
    p2 = Ej(f2),
    h2 = (d2 * p2) / f2,
    y2 = Mj({ l: p2, a: o2 * h2, b: a2 * h2 }),
    m2 = Math.cbrt(1 / Math.max(y2.r, y2.g, y2.b, 0));
  (t2 /= m2), (i2 = ((i2 / m2) * kj(t2)) / t2), (t2 = kj(t2));
  const v2 = {
    mode: "okhsv",
    s: i2 ? ((0.5 + c2) * d2) / (0.5 * c2 + c2 * l2 * d2) : 0,
    v: t2 ? t2 / f2 : 0,
  };
  return (
    v2.s && (v2.h = zS((180 * Math.atan2(r2, n2)) / Math.PI)),
    void 0 !== e20.alpha && (v2.alpha = e20.alpha),
    v2
  );
}
function Rj(e20) {
  const t2 = { mode: "oklab" };
  void 0 !== e20.alpha && (t2.alpha = e20.alpha);
  const n2 = void 0 !== e20.h ? e20.h : 0,
    r2 = void 0 !== e20.s ? e20.s : 0,
    i2 = void 0 !== e20.v ? e20.v : 0,
    o2 = Math.cos((n2 / 180) * Math.PI),
    a2 = Math.sin((n2 / 180) * Math.PI),
    [s2, c2] = Nj(o2, a2),
    l2 = 0.5,
    u2 = 1 - l2 / s2,
    f2 = 1 - (r2 * l2) / (l2 + c2 - c2 * u2 * r2),
    d2 = (r2 * c2 * l2) / (l2 + c2 - c2 * u2 * r2),
    p2 = Ej(f2),
    h2 = (d2 * p2) / f2,
    y2 = Mj({ l: p2, a: o2 * h2, b: a2 * h2 }),
    m2 = Math.cbrt(1 / Math.max(y2.r, y2.g, y2.b, 0)),
    v2 = Ej(i2 * f2),
    g2 = (d2 * v2) / f2;
  return (t2.l = v2 * m2), (t2.a = g2 * o2 * m2), (t2.b = g2 * a2 * m2), t2;
}
const Lj = {
  ...AA,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: { oklab: Dj, rgb: (e20) => Dj(jj(e20)) },
  toMode: { oklab: Rj, rgb: (e20) => Pj(Rj(e20)) },
};
const $j = {
  ...sj,
  mode: "oklab",
  toMode: { lrgb: Mj, rgb: Pj },
  fromMode: { lrgb: Aj, rgb: jj },
  ranges: { l: [0, 1], a: [-0.4, 0.4], b: [-0.4, 0.4] },
  parse: [
    function (e20, t2) {
      if (!t2 || "oklab" !== t2[0]) return;
      const n2 = { mode: "oklab" },
        [, r2, i2, o2, a2] = t2;
      return r2.type !== sS && i2.type !== sS && o2.type !== sS
        ? (r2.type !== aS &&
            (n2.l = Math.min(Math.max(0, r2.type === rS ? r2.value : r2.value / 100), 1)),
          i2.type !== aS && (n2.a = i2.type === rS ? i2.value : (0.4 * i2.value) / 100),
          o2.type !== aS && (n2.b = o2.type === rS ? o2.value : (0.4 * o2.value) / 100),
          a2.type !== aS &&
            (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
          n2)
        : void 0;
    },
  ],
  serialize: (e20) =>
    `oklab(${void 0 !== e20.l ? e20.l : "none"} ${void 0 !== e20.a ? e20.a : "none"} ${void 0 !== e20.b ? e20.b : "none"}${e20.alpha < 1 ? ` / ${e20.alpha}` : ""})`,
};
const Bj = {
    ...lj,
    mode: "oklch",
    toMode: { oklab: (e20) => HS(e20, "oklab"), rgb: (e20) => Pj(HS(e20, "oklab")) },
    fromMode: { rgb: (e20) => GS(jj(e20), "oklch"), oklab: (e20) => GS(e20, "oklch") },
    parse: [
      function (e20, t2) {
        if (!t2 || "oklch" !== t2[0]) return;
        const n2 = { mode: "oklch" },
          [, r2, i2, o2, a2] = t2;
        if (r2.type !== aS) {
          if (r2.type === sS) return;
          n2.l = Math.min(Math.max(0, r2.type === rS ? r2.value : r2.value / 100), 1);
        }
        if (
          (i2.type !== aS &&
            (n2.c = Math.max(0, i2.type === rS ? i2.value : (0.4 * i2.value) / 100)),
          o2.type !== aS)
        ) {
          if (o2.type === iS) return;
          n2.h = o2.value;
        }
        return (
          a2.type !== aS &&
            (n2.alpha = Math.min(1, Math.max(0, a2.type === rS ? a2.value : a2.value / 100))),
          n2
        );
      },
    ],
    serialize: (e20) =>
      `oklch(${void 0 !== e20.l ? e20.l : "none"} ${void 0 !== e20.c ? e20.c : "none"} ${void 0 !== e20.h ? e20.h : "none"}${e20.alpha < 1 ? ` / ${e20.alpha}` : ""})`,
    ranges: { l: [0, 1], c: [0, 0.4], h: [0, 360] },
  },
  qj = (e20) => {
    let { r: t2, g: n2, b: r2, alpha: i2 } = ES(e20),
      o2 = {
        mode: "xyz65",
        x: 0.486570948648216 * t2 + 0.265667693169093 * n2 + 0.1982172852343625 * r2,
        y: 0.2289745640697487 * t2 + 0.6917385218365062 * n2 + 0.079286914093745 * r2,
        z: 0 * t2 + 0.0451133818589026 * n2 + 1.043944368900976 * r2,
      };
    return void 0 !== i2 && (o2.alpha = i2), o2;
  },
  Fj = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = IS(
      {
        r: 2.4934969119414263 * e20 - 0.9313836179191242 * t2 - 0.402710784450717 * n2,
        g: -0.8294889695615749 * e20 + 1.7626640603183465 * t2 + 0.0236246858419436 * n2,
        b: 0.0358458302437845 * e20 - 0.0761723892680418 * t2 + 0.9568845240076871 * n2,
      },
      "p3",
    );
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  Uj = {
    ...SS,
    mode: "p3",
    parse: ["display-p3"],
    serialize: "display-p3",
    fromMode: { rgb: (e20) => Fj(TS(e20)), xyz65: Fj },
    toMode: { rgb: (e20) => _S(qj(e20)), xyz65: qj },
  },
  Wj = (e20) => {
    let t2 = Math.abs(e20);
    return t2 >= 1 / 512 ? Math.sign(e20) * Math.pow(t2, 1 / 1.8) : 16 * e20;
  },
  Vj = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = {
      mode: "prophoto",
      r: Wj(1.3457868816471585 * e20 - 0.2555720873797946 * t2 - 0.0511018649755453 * n2),
      g: Wj(-0.5446307051249019 * e20 + 1.5082477428451466 * t2 + 0.0205274474364214 * n2),
      b: Wj(0 * e20 + 0 * t2 + 1.2119675456389452 * n2),
    };
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  Qj = (e20 = 0) => {
    let t2 = Math.abs(e20);
    return t2 >= 16 / 512 ? Math.sign(e20) * Math.pow(t2, 1.8) : e20 / 16;
  },
  Gj = (e20) => {
    let t2 = Qj(e20.r),
      n2 = Qj(e20.g),
      r2 = Qj(e20.b),
      i2 = {
        mode: "xyz50",
        x: 0.7977666449006423 * t2 + 0.1351812974005331 * n2 + 0.0313477341283922 * r2,
        y: 0.2880748288194013 * t2 + 0.7118352342418731 * n2 + 899369387256e-16 * r2,
        z: 0 * t2 + 0 * n2 + 0.8251046025104602 * r2,
      };
    return void 0 !== e20.alpha && (i2.alpha = e20.alpha), i2;
  },
  Hj = {
    ...SS,
    mode: "prophoto",
    parse: ["prophoto-rgb"],
    serialize: "prophoto-rgb",
    fromMode: { xyz50: Vj, rgb: (e20) => Vj(rj(e20)) },
    toMode: { xyz50: Gj, rgb: (e20) => tj(Gj(e20)) },
  },
  Xj = 1.09929682680944,
  Kj = (e20) => {
    const t2 = Math.abs(e20);
    return t2 > 0.018053968510807
      ? (Math.sign(e20) || 1) * (Xj * Math.pow(t2, 0.45) - (Xj - 1))
      : 4.5 * e20;
  },
  Yj = ({ x: e20, y: t2, z: n2, alpha: r2 }) => {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
    let i2 = {
      mode: "rec2020",
      r: Kj(1.7166511879712683 * e20 - 0.3556707837763925 * t2 - 0.2533662813736599 * n2),
      g: Kj(-0.6666843518324893 * e20 + 1.6164812366349395 * t2 + 0.0157685458139111 * n2),
      b: Kj(0.0176398574453108 * e20 - 0.0427706132578085 * t2 + 0.9421031212354739 * n2),
    };
    return void 0 !== r2 && (i2.alpha = r2), i2;
  },
  Zj = 1.09929682680944,
  Jj = (e20 = 0) => {
    let t2 = Math.abs(e20);
    return t2 < 0.08124285829863151
      ? e20 / 4.5
      : (Math.sign(e20) || 1) * Math.pow((t2 + Zj - 1) / Zj, 1 / 0.45);
  },
  eM = (e20) => {
    let t2 = Jj(e20.r),
      n2 = Jj(e20.g),
      r2 = Jj(e20.b),
      i2 = {
        mode: "xyz65",
        x: 0.6369580483012911 * t2 + 0.1446169035862083 * n2 + 0.1688809751641721 * r2,
        y: 0.262700212011267 * t2 + 0.6779980715188708 * n2 + 0.059301716469862 * r2,
        z: 0 * t2 + 0.0280726930490874 * n2 + 1.0609850577107909 * r2,
      };
    return void 0 !== e20.alpha && (i2.alpha = e20.alpha), i2;
  },
  tM = {
    ...SS,
    mode: "rec2020",
    fromMode: { xyz65: Yj, rgb: (e20) => Yj(TS(e20)) },
    toMode: { xyz65: eM, rgb: (e20) => _S(eM(e20)) },
    parse: ["rec2020"],
    serialize: "rec2020",
  },
  nM = 0.0037930732552754493,
  rM = Math.cbrt(nM),
  iM = (e20) => Math.cbrt(e20) - rM,
  oM = (e20) => Math.pow(e20 + rM, 3),
  aM = {
    mode: "xyb",
    channels: ["x", "y", "b", "alpha"],
    parse: ["--xyb"],
    serialize: "--xyb",
    toMode: {
      rgb: ({ x: e20, y: t2, b: n2, alpha: r2 }) => {
        void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
        const i2 = oM(e20 + t2) - nM,
          o2 = oM(t2 - e20) - nM,
          a2 = oM(n2 + t2) - nM,
          s2 = IS({
            r: 11.031566904639861 * i2 - 9.866943908131562 * o2 - 0.16462299650829934 * a2,
            g: -3.2541473810744237 * i2 + 4.418770377582723 * o2 - 0.16462299650829934 * a2,
            b: -3.6588512867136815 * i2 + 2.7129230459360922 * o2 + 1.9459282407775895 * a2,
          });
        return void 0 !== r2 && (s2.alpha = r2), s2;
      },
    },
    fromMode: {
      rgb: (e20) => {
        const { r: t2, g: n2, b: r2, alpha: i2 } = ES(e20),
          o2 = iM(0.3 * t2 + 0.622 * n2 + 0.078 * r2 + nM),
          a2 = iM(0.23 * t2 + 0.692 * n2 + 0.078 * r2 + nM),
          s2 = {
            mode: "xyb",
            x: (o2 - a2) / 2,
            y: (o2 + a2) / 2,
            b:
              iM(0.2434226892454782 * t2 + 0.2047674442449682 * n2 + 0.5518098665095535 * r2 + nM) -
              (o2 + a2) / 2,
          };
        return void 0 !== i2 && (s2.alpha = i2), s2;
      },
    },
    ranges: { x: [-0.0154, 0.0281], y: [0, 0.8453], b: [-0.2778, 0.388] },
    interpolate: { x: xS, y: xS, b: xS, alpha: { use: xS, fixup: OS } },
  },
  sM = {
    mode: "xyz50",
    parse: ["xyz-d50"],
    serialize: "xyz-d50",
    toMode: { rgb: tj, lab: oj },
    fromMode: { rgb: rj, lab: ej },
    channels: ["x", "y", "z", "alpha"],
    ranges: { x: [0, 0.964], y: [0, 0.999], z: [0, 0.825] },
    interpolate: { x: xS, y: xS, z: xS, alpha: { use: xS, fixup: OS } },
  },
  cM = {
    mode: "xyz65",
    toMode: {
      rgb: _S,
      xyz50: (e20) => {
        let { x: t2, y: n2, z: r2, alpha: i2 } = e20;
        void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = 0);
        let o2 = {
          mode: "xyz50",
          x: 1.0479298208405488 * t2 + 0.0229467933410191 * n2 - 0.0501922295431356 * r2,
          y: 0.0296278156881593 * t2 + 0.990434484573249 * n2 - 0.0170738250293851 * r2,
          z: -0.0092430581525912 * t2 + 0.0150551448965779 * n2 + 0.7518742899580008 * r2,
        };
        return void 0 !== i2 && (o2.alpha = i2), o2;
      },
    },
    fromMode: {
      rgb: TS,
      xyz50: (e20) => {
        let { x: t2, y: n2, z: r2, alpha: i2 } = e20;
        void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = 0);
        let o2 = {
          mode: "xyz65",
          x: 0.9554734527042182 * t2 - 0.0230985368742614 * n2 + 0.0632593086610217 * r2,
          y: -0.0283697069632081 * t2 + 1.0099954580058226 * n2 + 0.021041398966943 * r2,
          z: 0.0123140016883199 * t2 - 0.0205076964334779 * n2 + 1.3303659366080753 * r2,
        };
        return void 0 !== i2 && (o2.alpha = i2), o2;
      },
    },
    ranges: { x: [0, 0.95], y: [0, 1], z: [0, 1.088] },
    channels: ["x", "y", "z", "alpha"],
    parse: ["xyz", "xyz-d65"],
    serialize: "xyz-d65",
    interpolate: { x: xS, y: xS, z: xS, alpha: { use: xS, fixup: OS } },
  },
  lM = {
    mode: "yiq",
    toMode: {
      rgb: ({ y: e20, i: t2, q: n2, alpha: r2 }) => {
        void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
        const i2 = {
          mode: "rgb",
          r: e20 + 0.95608445 * t2 + 0.6208885 * n2,
          g: e20 - 0.27137664 * t2 - 0.6486059 * n2,
          b: e20 - 1.10561724 * t2 + 1.70250126 * n2,
        };
        return void 0 !== r2 && (i2.alpha = r2), i2;
      },
    },
    fromMode: {
      rgb: ({ r: e20, g: t2, b: n2, alpha: r2 }) => {
        void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 0);
        const i2 = {
          mode: "yiq",
          y: 0.29889531 * e20 + 0.58662247 * t2 + 0.11448223 * n2,
          i: 0.59597799 * e20 - 0.2741761 * t2 - 0.32180189 * n2,
          q: 0.21147017 * e20 - 0.52261711 * t2 + 0.31114694 * n2,
        };
        return void 0 !== r2 && (i2.alpha = r2), i2;
      },
    },
    channels: ["y", "i", "q", "alpha"],
    parse: ["--yiq"],
    serialize: "--yiq",
    ranges: { i: [-0.595, 0.595], q: [-0.522, 0.522] },
    interpolate: { y: xS, i: xS, q: xS, alpha: { use: xS, fixup: OS } },
  },
  uM = (e20) => Math.round(255 * ((e21) => Math.max(0, Math.min(1, e21 || 0)))(e20)),
  fM = VO("rgb"),
  dM = (e20) =>
    ((e21) => {
      if (void 0 === e21) return;
      return (
        "#" + ((1 << 24) | (uM(e21.r) << 16) | (uM(e21.g) << 8) | uM(e21.b)).toString(16).slice(1)
      );
    })(fM(e20));
YO(CS),
  YO(QS),
  YO(vA),
  YO(gA),
  YO(bA),
  YO(wA),
  YO(AA),
  YO(jA),
  YO(RA),
  YO(GA),
  YO(KA),
  YO(sj),
  YO(cj),
  YO(lj),
  YO(uj),
  YO(wj),
  YO(Oj),
  YO(Sj),
  YO(zj),
  YO(Lj),
  YO($j),
  YO(Bj),
  YO(Uj),
  YO(Hj),
  YO(tM),
  YO(SS),
  YO(aM),
  YO(sM),
  YO(cM),
  YO(lM);
class pM extends Schema.Class("ArtistDataSchema")({
  artistType: Schema.String,
  percentage: Schema.Number,
  points: Schema.Number,
  fullName: Schema.String,
  databaseId: Schema.String,
  betaTransformedPoints: Schema.optional(Schema.Number),
  originalPercentage: Schema.optional(Schema.Number),
}) {}
Schema.Literal(
  "Visionary",
  "Consummate",
  "Analyzer",
  "Tech",
  "Entertainer",
  "Maverick",
  "Dreamer",
  "Feeler",
  "Tortured",
  "Solo",
);
const hM = {
    Visionary: "var(--artist-visionary)",
    Consummate: "var(--artist-consummate)",
    Analyzer: "var(--artist-analyzer)",
    Tech: "var(--artist-tech)",
    Entertainer: "var(--artist-entertainer)",
    Maverick: "var(--artist-maverick)",
    Dreamer: "var(--artist-dreamer)",
    Feeler: "var(--artist-feeler)",
    Tortured: "var(--artist-tortured)",
    Solo: "var(--artist-solo)",
    "the-visionary-artist": "var(--artist-visionary)",
    "the-consummate-artist": "var(--artist-consummate)",
    "the-analyzer-artist": "var(--artist-analyzer)",
    "the-tech-artist": "var(--artist-tech)",
    "the-entertainer-artist": "var(--artist-entertainer)",
    "the-maverick-artist": "var(--artist-maverick)",
    "the-dreamer-artist": "var(--artist-dreamer)",
    "the-feeler-artist": "var(--artist-feeler)",
    "the-tortured-artist": "var(--artist-tortured)",
    "the-solo-artist": "var(--artist-solo)",
  },
  yM = (e20, t2 = "#6366f1") => {
    var _a2;
    try {
      if (true) return t2;
      if (e20.startsWith("#")) return e20;
      if (e20.startsWith("var(")) {
        const n3 = document.documentElement,
          r2 = (_a2 = e20.match(/var\((--[^)]+)\)/)) == null ? void 0 : _a2[1];
        if (void 0 !== r2) {
          const e21 = getComputedStyle(n3).getPropertyValue(r2).trim();
          if ("" !== e21) return yM(e21, t2);
        }
        return t2;
      }
      const n2 = bS(e20);
      return void 0 !== n2 ? dM(n2) : t2;
    } catch {
      return t2;
    }
  },
  mM = (e20) => {
    try {
      const t2 = ((e21) => (e21 in hM ? hM[e21] : "var(--primary)"))(e20);
      return yM(t2, "#6366f1");
    } catch {
      return "#6366f1";
    }
  },
  vM = {
    "The Visionary Artist": "Visionary",
    "The Consummate Artist": "Consummate",
    "The Analyzer Artist": "Analyzer",
    "The Tech Artist": "Tech",
    "The Entertainer Artist": "Entertainer",
    "The Maverick Artist": "Maverick",
    "The Dreamer Artist": "Dreamer",
    "The Feeler Artist": "Feeler",
    "The Tortured Artist": "Tortured",
    "The Solo Artist": "Solo",
  },
  gM = (e20) => {
    const t2 = vM[e20];
    return void 0 !== t2 ? hM[t2] : "var(--primary)";
  },
  bM = [
    {
      artistType: "Visionary",
      percentage: 0,
      points: 0,
      fullName: "The Visionary Artist",
      databaseId: "the-visionary-artist",
    },
    {
      artistType: "Consummate",
      percentage: 0,
      points: 0,
      fullName: "The Consummate Artist",
      databaseId: "the-consummate-artist",
    },
    {
      artistType: "Analyzer",
      percentage: 0,
      points: 0,
      fullName: "The Analyzer Artist",
      databaseId: "the-analyzer-artist",
    },
    {
      artistType: "Tech",
      percentage: 0,
      points: 0,
      fullName: "The Tech Artist",
      databaseId: "the-tech-artist",
    },
    {
      artistType: "Entertainer",
      percentage: 0,
      points: 0,
      fullName: "The Entertainer Artist",
      databaseId: "the-entertainer-artist",
    },
    {
      artistType: "Maverick",
      percentage: 0,
      points: 0,
      fullName: "The Maverick Artist",
      databaseId: "the-maverick-artist",
    },
    {
      artistType: "Dreamer",
      percentage: 0,
      points: 0,
      fullName: "The Dreamer Artist",
      databaseId: "the-dreamer-artist",
    },
    {
      artistType: "Feeler",
      percentage: 0,
      points: 0,
      fullName: "The Feeler Artist",
      databaseId: "the-feeler-artist",
    },
    {
      artistType: "Tortured",
      percentage: 0,
      points: 0,
      fullName: "The Tortured Artist",
      databaseId: "the-tortured-artist",
    },
    {
      artistType: "Solo",
      percentage: 0,
      points: 0,
      fullName: "The Solo Artist",
      databaseId: "the-solo-artist",
    },
  ],
  xM = (
    e20,
    {
      beta: t2,
      ensureComplete: n2 = true,
      normalizeFrom: r2 = "auto",
      preserveBetaEffect: i2 = false,
    } = {},
  ) => {
    const o2 = ((e21) => {
      const t3 = g__default.useRef(e21),
        n3 = JSON.stringify(e21),
        r3 = g__default.useRef(n3);
      return n3 !== r3.current && ((t3.current = e21), (r3.current = n3)), t3.current;
    })(e20);
    return g__default.useMemo(() => {
      const e21 = Array.isArray(o2) && o2.length > 0 ? o2 : bM,
        a2 = n2
          ? bM.map((t3) => {
              var _a2;
              return (_a2 = e21.find((e22) => e22.databaseId === t3.databaseId)) != null ? _a2 : t3;
            })
          : e21,
        s2 = a2.reduce((e22, t3) => e22 + t3.points, 0),
        c2 = a2.reduce((e22, t3) => e22 + t3.percentage, 0);
      let l2 = a2;
      const u2 =
        s2 > 0 ? a2.map((e22) => ({ ...e22, originalPercentage: (e22.points / s2) * 100 })) : a2;
      if (
        ((l2 =
          void 0 !== t2 && 1 !== t2 && s2 > 0
            ? u2.map((e22) => ({ ...e22, betaTransformedPoints: Math.pow(e22.points, t2) }))
            : u2),
        "points" === r2 || ("auto" === r2 && s2 > 0))
      ) {
        const e22 = l2.reduce((e23, t3) => {
          var _a2;
          return e23 + ((_a2 = t3.betaTransformedPoints) != null ? _a2 : t3.points);
        }, 0);
        l2 = l2.map((t3) => {
          var _a2;
          return {
            ...t3,
            percentage:
              e22 > 0
                ? (((_a2 = t3.betaTransformedPoints) != null ? _a2 : t3.points) / e22) * 100
                : 0,
          };
        });
      } else
        l2 = l2.map((e22) => ({ ...e22, percentage: c2 > 0 ? (e22.percentage / c2) * 100 : 0 }));
      if (i2) return l2.map((e22) => ({ ...e22, percentage: Math.max(0, e22.percentage) }));
      const f2 = l2.map((e22) => ({ ...e22, percentage: Math.round(e22.percentage) }));
      let d2 = 100 - f2.reduce((e22, t3) => e22 + t3.percentage, 0);
      for (let t3 = 0; 0 !== d2 && t3 < f2.length; t3++) {
        const e22 = f2[t3];
        void 0 !== e22 && ((e22.percentage += d2 > 0 ? 1 : -1), (d2 += d2 > 0 ? -1 : 1));
      }
      return f2.map((e22) => ({ ...e22, percentage: Math.max(0, Math.min(100, e22.percentage)) }));
    }, [o2, n2, r2]);
  };
let wM = {
  "the-visionary-artist": {
    svgPath: "/svgs/artist-type-logos/1_VISIONARY_LOGO.svg",
    altText: "Visionary Artist Icon",
    fallbackColor: "#7209b7",
  },
  "the-consummate-artist": {
    svgPath: "/svgs/artist-type-logos/2_CONSUMATE_LOGO.svg",
    altText: "Consummate Artist Icon",
    fallbackColor: "#06d6a0",
  },
  "the-analyzer-artist": {
    svgPath: "/svgs/artist-type-logos/3_ANALYZER_LOGO.svg",
    altText: "Analyzer Artist Icon",
    fallbackColor: "#4361ee",
  },
  "the-tech-artist": {
    svgPath: "/svgs/artist-type-logos/4_TECH_LOGO.svg",
    altText: "Tech Artist Icon",
    fallbackColor: "#4cc9f0",
  },
  "the-entertainer-artist": {
    svgPath: "/svgs/artist-type-logos/5_ENTERTAINER_LOGO.svg",
    altText: "Entertainer Artist Icon",
    fallbackColor: "#fb8500",
  },
  "the-maverick-artist": {
    svgPath: "/svgs/artist-type-logos/6_MAVERICK_LOGO.svg",
    altText: "Maverick Artist Icon",
    fallbackColor: "#f72585",
  },
  "the-dreamer-artist": {
    svgPath: "/svgs/artist-type-logos/7_DREAMER_LOGO.svg",
    altText: "Dreamer Artist Icon",
    fallbackColor: "#7678ed",
  },
  "the-feeler-artist": {
    svgPath: "/svgs/artist-type-logos/8_FEELER_LOGO.svg",
    altText: "Feeler Artist Icon",
    fallbackColor: "#f77f00",
  },
  "the-tortured-artist": {
    svgPath: "/svgs/artist-type-logos/9_TORTURED_LOGO.svg",
    altText: "Tortured Artist Icon",
    fallbackColor: "#560bad",
  },
  "the-solo-artist": {
    svgPath: "/svgs/artist-type-logos/10_SOLO_LOGO.svg",
    altText: "Solo Artist Icon",
    fallbackColor: "#6498a6",
  },
};
const OM = (e20) => {
    var _a2;
    const t2 = ((e21) => {
      var _a3;
      return (_a3 = wM[e21]) != null ? _a3 : null;
    })(e20);
    return (_a2 = t2 == null ? void 0 : t2.svgPath) != null ? _a2 : null;
  },
  SM = Schema.Array(pM);
Schema.decodeUnknown(SM);
const AM = Ea$1(Layer.mergeAll(ba$1.Default, va$1.Default)),
  jM = AM.atom(Effect.succeed([])),
  MM = AM.atom(
    Effect.fn(function* () {
      const e20 = yield* ba$1;
      return yield* e20.http.Analysis.list();
    }),
  ),
  PM = AM.atom(Effect.succeed(null)),
  kM = Data.taggedEnum(),
  EM = Object.assign(
    Atom.writable(
      (e20) => e20(jM),
      (e20, t2) => {
        const n2 = e20.get(EM);
        if (!Result.isSuccess(n2)) return;
        const r2 = kM.$match(t2, {
          Del: ({ id: e21 }) => n2.value.filter((t3) => t3.id !== e21),
          Upsert: ({ analysis: e21 }) => {
            const t3 = n2.value.find((t4) => t4.id === e21.id);
            return void 0 !== t3
              ? n2.value.map((t4) => (t4.id === e21.id ? e21 : t4))
              : Array$1.prepend(n2.value, e21);
          },
          BatchUpsert: ({ analyses: e21 }) => e21,
        });
        e20.setSelf(Result.success(r2));
      },
    ),
    { remote: jM },
  ),
  TM = Object.assign(
    Atom.writable(
      (e20) => e20(MM),
      (e20, t2) => {
        const n2 = e20.get(TM);
        if (!Result.isSuccess(n2)) return;
        const r2 = kM.$match(t2, {
          Del: ({ id: e21 }) => n2.value.filter((t3) => t3.id !== e21),
          Upsert: ({ analysis: e21 }) => {
            const t3 = n2.value.find((t4) => t4.id === e21.id);
            return void 0 !== t3
              ? n2.value.map((t4) => (t4.id === e21.id ? e21 : t4))
              : Array$1.prepend(n2.value, e21);
          },
          BatchUpsert: ({ analyses: e21 }) => e21,
        });
        e20.setSelf(Result.success(r2));
      },
    ),
    { remote: MM },
  ),
  NM = Object.assign(
    Atom.writable(
      (e20) => e20(PM),
      (e20, t2) => {
        e20.setSelf(Result.success(t2));
      },
    ),
    { remote: PM },
  );
AM.fn(
  Effect.fn(
    function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = yield* ba$1,
        r2 = yield* n2.http.Analysis.analyze({
          payload: { engineId: e20.engineId, request: e20.request },
        });
      return t2.set(EM, kM.Upsert({ analysis: r2 })), r2;
    },
    It({
      onWaiting: "Analyzing response...",
      onSuccess: "Analysis completed",
      onFailure: "Failed to analyze response",
    }),
  ),
),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* Registry.AtomRegistry,
          n2 = yield* ba$1,
          r2 = yield* n2.http.Analysis.batchAnalyze({
            payload: { engineId: e20.engineId, request: e20.request },
          });
        return t2.set(EM, kM.BatchUpsert({ analyses: r2 })), r2;
      },
      It({
        onWaiting: "Batch analyzing responses...",
        onSuccess: "Batch analysis completed",
        onFailure: "Failed to batch analyze responses",
      }),
    ),
  ),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* Registry.AtomRegistry,
          n2 = yield* ba$1;
        yield* n2.http.Analysis.deleteAnalysis({ payload: { id: e20 } }),
          t2.set(EM, kM.Del({ id: e20 }));
      },
      It({
        onWaiting: "Deleting analysis...",
        onSuccess: "Analysis deleted",
        onFailure: "Failed to delete analysis",
      }),
    ),
  ),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Analysis.getAnalysis({ payload: { responseId: e20 } });
      },
      It({
        onWaiting: "Loading analysis...",
        onSuccess: "Analysis loaded",
        onFailure: "Failed to load analysis",
      }),
    ),
  ),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Analysis.getAnalysisSummary({ payload: { engineId: e20 } });
      },
      It({
        onWaiting: "Loading analysis summary...",
        onSuccess: "Analysis summary loaded",
        onFailure: "Failed to load analysis summary",
      }),
    ),
  );
const IM = AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1,
          n2 = yield* va$1,
          r2 = yield* Registry.AtomRegistry,
          [i2, o2] = yield* Effect.all([
            t2.http.AnalysisEngine.byId({ payload: { id: e20.engineId } }),
            t2.http.Responses.byId({ payload: { id: e20.responseId } }),
          ]);
        console.log("\u{1F50D} Full response object:", o2);
        const a2 = yield* t2.http.Quizzes.byId({ payload: { id: o2.quizId } }),
          s2 = yield* n2.analyzeWithValidation(i2, a2, o2),
          c2 = yield* t2.http.Analysis.upsert({
            payload: {
              engineId: s2.engineId,
              engineVersion: s2.engineVersion,
              responseId: s2.responseId,
              endingResults: s2.endingResults,
              metadata: s2.metadata,
              analyzedAt: s2.analyzedAt,
            },
          });
        return r2.set(TM, kM.Upsert({ analysis: c2 })), c2;
      },
      It({
        onWaiting: "Analyzing response...",
        onSuccess: "Analysis completed and saved",
        onFailure: "Analysis failed",
      }),
    ),
  ),
  _M = AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Analysis.getAnalysisSummary({ payload: { engineId: e20.engineId } });
      },
      It({
        onWaiting: "Generating analysis summary...",
        onSuccess: "Analysis summary generated",
        onFailure: "Failed to generate analysis summary",
      }),
    ),
  );
AM.fn(
  Effect.fn(
    function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = yield* ba$1,
        r2 = yield* n2.http.Analysis.upsert({ payload: e20 });
      t2.set(TM, kM.Upsert({ analysis: r2 }));
    },
    It({
      onWaiting: (e20) => (void 0 !== e20.id ? "Updating" : "Creating") + " analysis result...",
      onSuccess: "Analysis result saved",
      onFailure: "Failed to save analysis result",
    }),
  ),
),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* Registry.AtomRegistry,
          n2 = yield* ba$1;
        yield* n2.http.Analysis.deleteAnalysis({ payload: { id: e20 } }),
          t2.set(TM, kM.Del({ id: e20 }));
      },
      It({
        onWaiting: "Deleting analysis result...",
        onSuccess: "Analysis result deleted",
        onFailure: "Failed to delete analysis result",
      }),
    ),
  ),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Analysis.getById({ payload: { id: e20 } });
      },
      It({
        onWaiting: "Loading analysis result...",
        onSuccess: "Analysis result loaded",
        onFailure: "Failed to load analysis result",
      }),
    ),
  ),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Analysis.getAnalysis({ payload: { responseId: e20 } });
      },
      It({
        onWaiting: "Loading analysis results...",
        onSuccess: "Analysis results loaded",
        onFailure: "Failed to load analysis results",
      }),
    ),
  ),
  AM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Analysis.getByEngine({ payload: { engineId: e20 } });
      },
      It({
        onWaiting: "Loading analysis results...",
        onSuccess: "Analysis results loaded",
        onFailure: "Failed to load analysis results",
      }),
    ),
  );
const CM = Ea$1(ba$1.Default),
  zM = CM.atom(
    Effect.fn(function* () {
      const e20 = yield* ba$1;
      return yield* e20.http.Responses.list();
    }),
  ),
  DM = Data.taggedEnum(),
  RM = Object.assign(
    Atom.writable(
      (e20) => e20(zM),
      (e20, t2) => {
        const n2 = e20.get(RM);
        if (!Result.isSuccess(n2)) return;
        const r2 = DM.$match(t2, {
          Del: ({ id: e21 }) => n2.value.filter((t3) => t3.id !== e21),
          Upsert: ({ response: e21 }) =>
            void 0 !== n2.value.find((t3) => t3.id === e21.id)
              ? n2.value.map((t3) => (t3.id === e21.id ? e21 : t3))
              : Array$1.prepend(n2.value, e21),
        });
        e20.setSelf(Result.success(r2));
      },
    ),
    { remote: zM },
  );
CM.fn(
  Effect.fn(
    function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = yield* ba$1,
        r2 = yield* n2.http.Responses.upsert({ payload: e20 });
      t2.set(RM, DM.Upsert({ response: r2 }));
    },
    It({
      onWaiting: (e20) => (void 0 !== e20.id ? "Updating" : "Creating") + " response...",
      onSuccess: "Response saved",
      onFailure: "Failed to save response",
    }),
  ),
),
  CM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* Registry.AtomRegistry,
          n2 = yield* ba$1;
        yield* n2.http.Responses.delete({ payload: { id: e20 } }), t2.set(RM, DM.Del({ id: e20 }));
      },
      It({
        onWaiting: "Deleting response...",
        onSuccess: "Response deleted",
        onFailure: "Failed to delete response",
      }),
    ),
  ),
  CM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Responses.byQuiz({ payload: { quizId: e20 } });
      },
      It({
        onWaiting: "Loading responses...",
        onSuccess: "Responses loaded",
        onFailure: "Failed to load responses",
      }),
    ),
  ),
  CM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.Responses.byId({ payload: { id: e20 } });
      },
      It({
        onWaiting: "Loading response...",
        onSuccess: "Response loaded",
        onFailure: "Failed to load response",
      }),
    ),
  );
const LM = ({ className: t2 }) =>
    jsx("div", {
      className: Ka$1("flex items-center justify-center py-4 text-sm text-muted-foreground", t2),
      children: "No artist type data available",
    }),
  $M = Atom.family((e20) =>
    Atom.make((t2) => {
      const { maxItems: n2, normalizedData: r2 } = e20,
        i2 = /* @__PURE__ */ new Set(),
        o2 = r2
          .filter((e21, t3) => {
            const n3 = "" === e21.databaseId ? `unknown-${t3}` : e21.databaseId;
            return !i2.has(n3) && (i2.add(n3), true);
          })
          .map((e21) => ({
            ...e21,
            displayPercentage:
              0 === e21.percentage ? 0.5 : Math.min(100, Math.max(0, e21.percentage)),
            subtitle: null,
            elevatorPitch: null,
          }))
          .sort((e21, t3) => t3.percentage - e21.percentage);
      return o2.slice(0, Math.max(0, Math.min(n2, o2.length)));
    }),
  ),
  BM = Atom.family((e20) =>
    Atom.make(() =>
      e20 >= 8
        ? {
            fontSize: "text-xs",
            tickMargin: 2,
            yAxisWidth: 40,
            maxLabelLength: 10,
            chartFontSize: 11,
            topMargin: 2,
            bottomMargin: 2,
          }
        : e20 >= 6
          ? {
              fontSize: "text-xs",
              tickMargin: 2,
              yAxisWidth: 45,
              maxLabelLength: 12,
              chartFontSize: 12,
              topMargin: 3,
              bottomMargin: 3,
            }
          : e20 >= 4
            ? {
                fontSize: "text-sm",
                tickMargin: 2,
                yAxisWidth: 50,
                maxLabelLength: 14,
                chartFontSize: 13,
                topMargin: 5,
                bottomMargin: 5,
              }
            : {
                fontSize: "text-sm",
                tickMargin: 2,
                yAxisWidth: 55,
                maxLabelLength: 16,
                chartFontSize: 14,
                topMargin: 8,
                bottomMargin: 8,
              },
    ),
  ),
  qM = Atom.family((e20) =>
    Atom.make(() => {
      const { data: t2 } = e20,
        n2 = t2.length,
        r2 = Math.max(180, 28 * n2),
        i2 = t2.reduce((e21, t3) => {
          const n3 = "" === t3.artistType ? "" : t3.artistType;
          return Math.max(e21, n3.length);
        }, 0);
      return { containerHeightPx: r2, dynamicYAxisWidth: Math.max(40, 6 * i2 + 12) };
    }),
  ),
  FM = g__default.memo(
    ({ beta: n2, className: r2 = "", data: i2, height: o2 = "h-32", maxItems: a2 = 10 }) => {
      const s2 = xM(i2, {
          ...(void 0 !== n2 && { beta: n2 }),
          ensureComplete: true,
          normalizeFrom: "auto",
          preserveBetaEffect: false,
        }),
        c2 = useAtomValue($M({ maxItems: a2, normalizedData: s2 })),
        l2 = useAtomValue(BM(c2.length)),
        { containerHeightPx: u2, dynamicYAxisWidth: f2 } = useAtomValue(
          qM({ data: c2, sizing: l2 }),
        );
      if (0 === c2.length) return jsx(LM, { className: r2 });
      const d2 = g__default.useMemo(
        () => ({ percentage: { label: "Percentage", color: "#8884d8" } }),
        [],
      );
      return jsx("div", {
        className: Ka$1(l2.fontSize, r2),
        style: { height: `${u2}px` },
        children: jsx(Sx$1, {
          config: d2,
          className: "h-full w-full max-w-full overflow-hidden",
          children: jsxs(xO, {
            data: c2,
            layout: "vertical",
            margin: { left: 2, right: 8, top: l2.topMargin, bottom: l2.bottomMargin },
            maxBarSize: 200,
            children: [
              jsx(lw, {
                type: "number",
                dataKey: "displayPercentage",
                hide: true,
                domain: [0, 100],
              }),
              jsx(xw, {
                dataKey: "artistType",
                type: "category",
                tickLine: false,
                tickMargin: 2,
                axisLine: false,
                tickFormatter: (e20) => e20,
                width: f2,
                fontSize: l2.chartFontSize,
                orientation: "left",
              }),
              jsx(_x$1, {
                cursor: false,
                content: jsx(Rx$1, {
                  hideLabel: true,
                  formatter: (e20, t2, n3) => {
                    var _a2;
                    const r3 = n3.payload,
                      i3 = (_a2 = r3.originalPercentage) != null ? _a2 : r3.percentage,
                      o3 = r3.points.toFixed(2);
                    return [`${i3.toFixed(1)}% (${o3} pts)`, r3.fullName];
                  },
                }),
              }),
              jsx(ib, {
                dataKey: "displayPercentage",
                radius: [0, 3, 3, 0],
                animationDuration: 1600,
                animationEasing: "ease-out",
                isAnimationActive: true,
                children: c2.map((t2) => {
                  const n3 = t2.artistType,
                    r3 = mM(n3);
                  return jsx(Xr, { fill: r3 }, `${n3}-bar`);
                }),
              }),
            ],
          }),
        }),
      });
    },
  );
FM.displayName = "ArtistBarChart";
const UM = ({ alt: t2 = "Artist Icon", className: n2, iconPath: r2, size: i2 = 40 }) => {
    const [o2, a2] = g__default.useState(false);
    return jsx(
      "div",
      null == r2 || "" === r2 || o2
        ? {
            className: Ka$1(
              "flex items-center justify-center rounded-full bg-gray-400 text-xs font-bold text-white",
              n2,
            ),
            style: { width: i2, height: i2 },
            role: "img",
            "aria-label": t2,
            children: "?",
          }
        : {
            className: Ka$1("flex items-center justify-center", n2),
            style: { width: `${i2}px`, height: `${i2}px`, aspectRatio: "1 / 1", flexShrink: 0 },
            children: jsx("img", {
              src: r2,
              alt: t2,
              className: "rounded-full dark:brightness-0 dark:invert",
              style: { width: "100%", height: "100%", objectFit: "fill", aspectRatio: "1 / 1" },
              onError: () => {
                a2(true);
              },
            }),
          },
    );
  },
  WM = ({ className: n2 }) =>
    jsxs("div", {
      className: Ka$1(
        "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform",
        n2,
      ),
      children: [
        jsx("div", {
          className: "bg-background absolute inset-0 rounded-full",
          style: {
            width: "50px",
            height: "50px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          },
        }),
        jsx("img", {
          src: "/svgs/MyArtistTypeLogo.svg",
          alt: "My Artist Type Logo",
          className: "relative z-10 h-[50px] w-[50px] dark:brightness-0 dark:invert",
          style: { objectFit: "contain" },
        }),
      ],
    }),
  VM = ({ className: n2 }) =>
    jsx("div", {
      className: Ka$1("flex h-full items-center justify-center", n2),
      children: jsxs("div", {
        className: "flex items-center gap-2 text-gray-500",
        children: [
          jsx("div", {
            className:
              "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent",
          }),
          "Loading chart data...",
        ],
      }),
    }),
  QM = () => jsx("g", {}),
  GM = ({
    beta: n2,
    className: r2,
    data: i2,
    iconSize: o2,
    showIcons: a2 = true,
    size: s2 = "md",
  }) => {
    const c2 = g__default.useRef(null),
      l2 = g__default.useMemo(
        () => Array.isArray(i2) && i2.length > 0 && i2.some((e20) => e20.points > 0),
        [i2],
      ),
      u2 = xM(i2, {
        ...(void 0 !== n2 && { beta: n2 }),
        ensureComplete: true,
        normalizeFrom: "auto",
        preserveBetaEffect: false,
      }),
      f2 = g__default.useMemo(
        () => (l2 ? u2 : u2.map((e20) => ({ ...e20, percentage: 0 }))),
        [u2, l2],
      ),
      d2 = (({ data: e20 }) =>
        g__default.useMemo(() => {
          if (!Array.isArray(e20) || 0 === e20.length) return "#000000";
          try {
            const t2 = e20.reduce((e21, t3) => e21 + t3.percentage, 0);
            if (t2 <= 0) return "#000000";
            const n3 = (e21) => {
                var _a2, _b2, _c2;
                const t3 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e21);
                return null === t3
                  ? { r: 0, g: 0, b: 0 }
                  : {
                      r: Number.parseInt((_a2 = t3[1]) != null ? _a2 : "0", 16),
                      g: Number.parseInt((_b2 = t3[2]) != null ? _b2 : "0", 16),
                      b: Number.parseInt((_c2 = t3[3]) != null ? _c2 : "0", 16),
                    };
              },
              r3 = (e21) => {
                try {
                  return mM(e21);
                } catch {
                  return mM(e21);
                }
              };
            let i3 = 0,
              o3 = 0,
              a3 = 0;
            e20.forEach((e21) => {
              const s4 = e21.percentage / t2,
                c3 = e21.artistType.length > 0 ? e21.artistType : "Analyzer",
                l3 = r3(c3),
                u3 = n3(l3);
              (i3 += u3.r * s4), (o3 += u3.g * s4), (a3 += u3.b * s4);
            });
            const s3 = Math.round(i3);
            return `#${((1 << 24) + (s3 << 16) + (Math.round(o3) << 8) + Math.round(a3)).toString(16).slice(1)}`;
          } catch {
            return "#000000";
          }
        }, [e20]))({ data: u2 }),
      p2 = g__default.useMemo(() => {
        if (void 0 !== o2) return o2;
        if (null === c2.current) return 40;
        const e20 = c2.current.getBoundingClientRect();
        return 0.15 * Math.min(e20.width, e20.height);
      }, [o2]),
      h2 = (({ containerRef: e20, data: t2, iconSize: n3 }) => {
        const [r3, i3] = g__default.useState([]);
        return (
          g__default.useEffect(() => {
            const r4 = () => {
              if (null === e20.current || !Array.isArray(t2) || 0 === t2.length) return void i3([]);
              const r5 = e20.current.getBoundingClientRect();
              if (0 === r5.width || 0 === r5.height) return;
              const o4 = r5.width / 2,
                a4 = r5.height / 2,
                s3 = 0.9 * Math.min(o4, a4),
                c3 = t2.map((e21, r6) => {
                  const i4 = (r6 / t2.length) * 2 * Math.PI - Math.PI / 2,
                    c4 = o4 + s3 * Math.cos(i4),
                    l3 = a4 + s3 * Math.sin(i4);
                  return { databaseId: e21.databaseId, size: n3, x: c4, y: l3 };
                });
              i3(c3);
            };
            r4();
            const o3 = () => {
              r4();
            };
            window.addEventListener("resize", o3);
            let a3 = null;
            return (
              null !== e20.current &&
                "ResizeObserver" in window &&
                ((a3 = new ResizeObserver(() => {
                  r4();
                })),
                a3.observe(e20.current)),
              () => {
                window.removeEventListener("resize", o3), null !== a3 && a3.disconnect();
              }
            );
          }, [t2, e20, n3]),
          r3
        );
      })({ containerRef: c2, data: u2, iconSize: p2 }),
      y2 = g__default.useMemo(() => ({ percentage: { label: "Percentage", color: d2 } }), [d2]);
    return Array.isArray(f2) && 0 !== f2.length
      ? jsxs("div", {
          ref: c2,
          className: Ka$1("relative h-full w-full", r2),
          style: { aspectRatio: "1 / 1.1" },
          children: [
            jsxs("div", {
              className: "relative h-full w-full",
              children: [
                jsx(Sx$1, {
                  config: y2,
                  className: "h-full w-full",
                  children: jsxs(OO, {
                    data: f2,
                    margin: { top: 20, right: 20, bottom: 20, left: 20 },
                    innerRadius: 30,
                    children: [
                      jsx(_x$1, {
                        cursor: false,
                        wrapperStyle: { zIndex: 9999 },
                        content: jsx(Rx$1, {
                          indicator: "line",
                          formatter: (e20, t2, n3) => {
                            const r3 = n3.payload;
                            return [
                              `${"number" == typeof e20 ? e20 : 0}% (${r3.points} pts)`,
                              r3.fullName,
                            ];
                          },
                        }),
                      }),
                      jsx(Pm, { dataKey: "artistType", tick: QM }),
                      jsx(Fy, {}),
                      jsx(Vv, {
                        dataKey: "percentage",
                        fill: d2,
                        fillOpacity: 0.6,
                        stroke: d2,
                        strokeWidth: 2,
                        style: {
                          transition:
                            "fill 800ms cubic-bezier(0.4, 0, 0.2, 1), stroke 800ms cubic-bezier(0.4, 0, 0.2, 1)",
                        },
                      }),
                    ],
                  }),
                }),
                Array.isArray(h2) &&
                  (h2.length > 0
                    ? h2
                    : u2.map((e20, t2) => {
                        const n3 = (t2 / u2.length) * 2 * Math.PI - Math.PI / 2;
                        return {
                          databaseId: e20.databaseId,
                          size: Math.max(48, Math.min(72, 60)),
                          x: Number.NaN,
                          y: Number.NaN,
                          _left: `calc(50% + ${140 * Math.cos(n3)}px)`,
                          _top: `calc(50% + ${140 * Math.sin(n3)}px)`,
                        };
                      })
                  ).map((t2, n3) => {
                    var _a2, _b2;
                    const r3 = OM(t2.databaseId);
                    return jsx(
                      "div",
                      {
                        className: "pointer-events-none absolute z-50",
                        style: {
                          left: (_a2 = t2._left) != null ? _a2 : Number.isNaN(t2.x) ? 0 : t2.x,
                          top: (_b2 = t2._top) != null ? _b2 : Number.isNaN(t2.y) ? 0 : t2.y,
                          width: `${t2.size}px`,
                          height: `${t2.size}px`,
                          transform: "translate(-50%, -50%)",
                          aspectRatio: "1 / 1",
                        },
                        children: jsx(UM, { iconPath: r3 != null ? r3 : null, size: t2.size }),
                      },
                      `${t2.databaseId}-${n3}`,
                    );
                  }),
              ],
            }),
            jsx(WM, {}),
          ],
        })
      : jsx(VM, { className: r2 != null ? r2 : "" });
  },
  HM = ({
    barChartHeight: n2 = "h-56",
    barChartMaxItems: r2 = 10,
    beta: i2,
    className: o2 = "",
    contentClassName: a2 = "",
    data: s2,
    fill: c2 = false,
    showBarChart: l2 = true,
    transparent: u2 = false,
  }) =>
    jsxs(tf$1, {
      className: Ka$1("overflow-hidden", u2 && "bg-transparent border-none shadow-none", o2),
      children: [
        jsx(tf$1.Content, {
          className: Ka$1(c2 ? "h-full w-full p-0" : "aspect-square p-4", a2),
          children: jsx(GM, {
            ...(void 0 !== s2 && { data: s2 }),
            ...(void 0 !== i2 && { beta: i2 }),
          }),
        }),
        l2 &&
          jsx(tf$1.Footer, {
            className: "flex-col overflow-hidden p-2",
            children: jsx("div", {
              className: "w-full max-w-full overflow-hidden",
              children: jsx(FM, {
                ...(void 0 !== s2 && { data: s2 }),
                ...(void 0 !== i2 && { beta: i2 }),
                height: n2,
                maxItems: r2,
                className: "text-left w-full max-w-full",
              }),
            }),
          }),
      ],
    });
HM.displayName = "ArtistTypeGraphCard";
const XM = Ea$1(ba$1.Default),
  KM = XM.atom(
    Effect.fn(function* () {
      const e20 = yield* ba$1;
      return yield* e20.http.AnalysisEngine.list();
    }),
  ),
  YM = Data.taggedEnum(),
  ZM = YM,
  JM = Object.assign(
    Atom.writable(
      (e20) => e20(KM),
      (e20, t2) => {
        const n2 = e20.get(JM);
        if (!Result.isSuccess(n2)) return;
        const r2 = ZM.$match(t2, {
          Del: ({ id: e21 }) => n2.value.filter((t3) => t3.id !== e21),
          Upsert: ({ engine: e21 }) => {
            const t3 = n2.value.find((t4) => t4.id === e21.id);
            return void 0 !== t3
              ? n2.value.map((t4) => (t4.id === e21.id ? e21 : t4))
              : Array$1.prepend(n2.value, e21);
          },
        });
        e20.setSelf(Result.success(r2));
      },
    ),
    { remote: KM },
  );
XM.fn(
  Effect.fn(
    function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = yield* ba$1,
        r2 = yield* n2.http.AnalysisEngine.upsert({ payload: e20 });
      t2.set(JM, ZM.Upsert({ engine: r2 }));
    },
    It({
      onWaiting: (e20) => ("" !== e20.name ? "Updating" : "Creating") + " analysis engine...",
      onSuccess: "Analysis engine saved",
      onFailure: "Failed to save analysis engine",
    }),
  ),
),
  XM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* Registry.AtomRegistry,
          n2 = yield* ba$1;
        yield* n2.http.AnalysisEngine.delete({ payload: { id: e20 } }),
          t2.set(JM, ZM.Del({ id: e20 }));
      },
      It({
        onWaiting: "Deleting analysis engine...",
        onSuccess: "Analysis engine deleted",
        onFailure: "Failed to delete analysis engine",
      }),
    ),
  ),
  XM.fn(
    Effect.fn(
      function* (e20) {
        const t2 = yield* ba$1;
        return yield* t2.http.AnalysisEngine.byId({ payload: { id: e20 } });
      },
      It({
        onWaiting: "Loading analysis engine...",
        onSuccess: "Analysis engine loaded",
        onFailure: "Failed to load analysis engine",
      }),
    ),
  ),
  XM.fn(
    Effect.fn(
      function* (e20) {
        var _a2, _b2;
        const { engine: t2, isPublished: n2 } = e20,
          r2 = yield* Registry.AtomRegistry,
          i2 = yield* ba$1,
          o2 = yield* i2.http.AnalysisEngine.upsert({
            payload: {
              id: t2.id,
              name: t2.name,
              description: (_a2 = t2.description) != null ? _a2 : void 0,
              scoringConfig: t2.scoringConfig,
              endings: t2.endings,
              metadata: (_b2 = t2.metadata) != null ? _b2 : void 0,
              isActive: t2.isActive,
              isPublished: n2,
              isTemp: t2.isTemp,
              version: t2.version,
              quizId: t2.quizId,
            },
          });
        return r2.set(JM, ZM.Upsert({ engine: o2 })), o2;
      },
      It({
        onWaiting: (e20) =>
          (true === e20.isPublished ? "Publishing" : "Unpublishing") + " engine...",
        onSuccess: (e20) =>
          `Engine ${true === e20.isPublished ? "published" : "unpublished"} successfully`,
        onFailure: "Failed to update engine publishing status",
      }),
    ),
  ),
  XM.fn(
    Effect.fn(
      function* (e20) {
        var _a2, _b2;
        const { engine: t2, newVersion: n2 } = e20,
          r2 = yield* Registry.AtomRegistry,
          i2 = yield* ba$1,
          o2 = yield* i2.http.AnalysisEngine.upsert({
            payload: {
              name: t2.name,
              description: (_a2 = t2.description) != null ? _a2 : void 0,
              scoringConfig: t2.scoringConfig,
              endings: t2.endings,
              metadata: (_b2 = t2.metadata) != null ? _b2 : void 0,
              isActive: t2.isActive,
              isPublished: false,
              isTemp: false,
              version: n2,
              quizId: t2.quizId,
            },
          });
        return r2.set(JM, ZM.Upsert({ engine: o2 })), o2;
      },
      It({
        onWaiting: "Creating new engine version...",
        onSuccess: "New engine version created successfully",
        onFailure: "Failed to create new engine version",
      }),
    ),
  ),
  XM.fn(
    Effect.fn(
      function* (e20) {
        var _a2, _b2;
        const { engine: t2 } = e20,
          n2 = yield* Registry.AtomRegistry,
          r2 = yield* ba$1,
          i2 = yield* r2.http.AnalysisEngine.upsert({
            payload: {
              name: `${t2.name} (Editing)`,
              description: (_a2 = t2.description) != null ? _a2 : void 0,
              scoringConfig: t2.scoringConfig,
              endings: t2.endings,
              metadata: (_b2 = t2.metadata) != null ? _b2 : void 0,
              isActive: t2.isActive,
              isPublished: false,
              isTemp: true,
              version: t2.version,
              quizId: t2.quizId,
            },
          });
        return n2.set(JM, ZM.Upsert({ engine: i2 })), i2;
      },
      It({
        onWaiting: "Creating temporary copy...",
        onSuccess: "Ready to edit",
        onFailure: "Failed to create temporary copy",
      }),
    ),
  );
const eP = XM.fn(
    Effect.fn(function* (e20) {
      var _a2, _b2;
      const { engine: t2 } = e20,
        n2 = yield* Registry.AtomRegistry,
        r2 = yield* ba$1;
      if (true !== t2.isTemp) return t2;
      const i2 = yield* r2.http.AnalysisEngine.upsert({
        payload: {
          id: t2.id,
          name: t2.name,
          description: (_a2 = t2.description) != null ? _a2 : void 0,
          scoringConfig: t2.scoringConfig,
          endings: t2.endings,
          metadata: (_b2 = t2.metadata) != null ? _b2 : void 0,
          isActive: t2.isActive,
          isPublished: t2.isPublished,
          isTemp: t2.isTemp,
          version: t2.version,
          quizId: t2.quizId,
        },
      });
      return n2.set(JM, ZM.Upsert({ engine: i2 })), i2;
    }),
  ),
  tP = XM.fn(
    Effect.fn(function* () {
      const e20 = yield* Registry.AtomRegistry,
        t2 = yield* ba$1,
        n2 = (yield* t2.http.AnalysisEngine.list()).filter((e21) => true === e21.isTemp);
      yield* Effect.forEach(n2, (e21) =>
        t2.http.AnalysisEngine.delete({ payload: { id: e21.id } }),
      );
      for (const r2 of n2) e20.set(JM, ZM.Del({ id: r2.id }));
      return n2.length;
    }),
  ),
  nP = (e20, t2) => {
    const n2 = [
        "Visionary",
        "Consummate",
        "Analyzer",
        "Tech",
        "Entertainer",
        "Maverick",
        "Dreamer",
        "Feeler",
        "Tortured",
        "Solo",
      ],
      r2 = 100 - t2,
      i2 = n2.length - 1,
      o2 = Math.floor(r2 / i2),
      a2 = r2 - o2 * i2;
    return n2.map((n3, r3) => {
      let i3 = n3 === e20 ? t2 : o2;
      return (
        1 === r3 && n3 !== e20 && (i3 += a2),
        {
          artistType: n3,
          percentage: i3,
          points: Math.round(10 * i3),
          fullName: `The ${n3} Artist`,
          databaseId: `the-${n3.toLowerCase()}-artist`,
        }
      );
    });
  },
  rP = (e20, t2, n2, r2) => {
    const i2 = [
        "Visionary",
        "Consummate",
        "Analyzer",
        "Tech",
        "Entertainer",
        "Maverick",
        "Dreamer",
        "Feeler",
        "Tortured",
        "Solo",
      ],
      o2 = 100 - t2 - r2,
      a2 = i2.length - 2,
      s2 = Math.floor(o2 / a2),
      c2 = o2 - s2 * a2;
    return i2.map((i3, o3) => {
      let a3 = 0;
      return (
        i3 === e20
          ? (a3 = t2)
          : i3 === n2
            ? (a3 = r2)
            : ((a3 = s2), 2 === o3 && i3 !== e20 && i3 !== n2 && (a3 += c2)),
        {
          artistType: i3,
          percentage: a3,
          points: Math.round(10 * a3),
          fullName: `The ${i3} Artist`,
          databaseId: `the-${i3.toLowerCase()}-artist`,
        }
      );
    });
  },
  iP = [
    { name: "Visionary", data: nP("Visionary", 85) },
    { name: "Consummate", data: nP("Consummate", 85) },
    { name: "Analyzer", data: nP("Analyzer", 85) },
    { name: "Tech", data: nP("Tech", 85) },
    { name: "Entertainer", data: nP("Entertainer", 85) },
    { name: "Maverick", data: nP("Maverick", 85) },
    { name: "Dreamer", data: nP("Dreamer", 85) },
    { name: "Feeler", data: nP("Feeler", 85) },
    { name: "Tortured", data: nP("Tortured", 85) },
    { name: "Solo", data: nP("Solo", 85) },
    { name: "Visionary + Analyzer", data: rP("Visionary", 50, "Analyzer", 30) },
    { name: "Maverick + Entertainer", data: rP("Maverick", 45, "Entertainer", 35) },
    { name: "Tech + Dreamer", data: rP("Tech", 40, "Dreamer", 40) },
    { name: "Consummate + Feeler", data: rP("Consummate", 50, "Feeler", 25) },
    { name: "Tortured + Solo", data: rP("Tortured", 35, "Solo", 35) },
    { name: "Balanced Creative", data: rP("Visionary", 25, "Dreamer", 25) },
    { name: "Balanced Technical", data: rP("Analyzer", 25, "Tech", 25) },
    { name: "Balanced Social", data: rP("Entertainer", 25, "Feeler", 25) },
    { name: "Triple Blend 1", data: rP("Visionary", 30, "Maverick", 25) },
    { name: "Triple Blend 2", data: rP("Analyzer", 30, "Tech", 25) },
    { name: "Triple Blend 3", data: rP("Dreamer", 30, "Feeler", 25) },
  ],
  oP = () =>
    jsxs("div", {
      className: "container mx-auto px-4 py-8 max-w-7xl",
      children: [
        jsxs("div", {
          className: "mb-8",
          children: [
            jsx("h1", {
              className: "text-3xl font-bold tracking-tight",
              children: "Radar Chart Color Test",
            }),
            jsx("p", {
              className: "text-muted-foreground mt-2",
              children:
                "Testing radar chart color blending with various artist type distributions. Includes pure extreme cases (85% dominant) and blended combinations to test color mixing.",
            }),
          ],
        }),
        jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
          children: iP.map(({ data: n2, name: r2 }) => {
            var _a2, _b2;
            const i2 = n2.sort((e20, t2) => t2.percentage - e20.percentage),
              o2 = i2.slice(0, 2);
            return jsxs(
              "div",
              {
                className: "space-y-4",
                children: [
                  jsxs("div", {
                    className: "text-center",
                    children: [
                      jsx("h3", { className: "text-lg font-semibold", children: r2 }),
                      jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                          (_a2 = o2[0]) == null ? void 0 : _a2.artistType,
                          ": ",
                          (_b2 = o2[0]) == null ? void 0 : _b2.percentage,
                          "%",
                          void 0 !== o2[1] && `, ${o2[1].artistType}: ${o2[1].percentage}%`,
                        ],
                      }),
                    ],
                  }),
                  jsx(HM, {
                    data: n2,
                    showBarChart: true,
                    barChartHeight: "h-32",
                    barChartMaxItems: 5,
                    className: "w-full",
                  }),
                  jsxs("div", {
                    className: "text-xs text-muted-foreground space-y-1",
                    children: [
                      jsx("div", { children: "Top 3 types:" }),
                      n2
                        .sort((e20, t2) => t2.percentage - e20.percentage)
                        .slice(0, 3)
                        .map((e20, n3) =>
                          jsxs(
                            "div",
                            { children: [n3 + 1, ". ", e20.artistType, ": ", e20.percentage, "%"] },
                            e20.artistType,
                          ),
                        ),
                    ],
                  }),
                ],
              },
              r2,
            );
          }),
        }),
        jsxs("div", {
          className: "mt-8 p-4 bg-muted rounded-lg",
          children: [
            jsx("h3", { className: "font-semibold mb-2", children: "Expected Results:" }),
            jsxs("ul", {
              className: "text-sm space-y-1",
              children: [
                jsxs("li", {
                  children: [
                    "\u2022 ",
                    jsx("strong", { children: "Pure cases (85%):" }),
                    " Should show strong colors of the dominant type",
                  ],
                }),
                jsxs("li", {
                  children: [
                    "\u2022 ",
                    jsx("strong", { children: "Blended cases:" }),
                    " Should show mixed colors based on the combination",
                  ],
                }),
                jsxs("li", {
                  children: [
                    "\u2022 ",
                    jsx("strong", { children: "Visionary + Analyzer:" }),
                    " Purple-blue blend",
                  ],
                }),
                jsxs("li", {
                  children: [
                    "\u2022 ",
                    jsx("strong", { children: "Maverick + Entertainer:" }),
                    " Pink-orange blend",
                  ],
                }),
                jsxs("li", {
                  children: [
                    "\u2022 ",
                    jsx("strong", { children: "Tech + Dreamer:" }),
                    " Cyan-purple blend",
                  ],
                }),
                jsxs("li", {
                  children: [
                    "\u2022 ",
                    jsx("strong", { children: "Balanced blends:" }),
                    " Should show more neutral/mixed colors",
                  ],
                }),
                jsx("li", {
                  children: "\u2022 Check the browser console for detailed color blending logs",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  aP = ({
    categoryColorClass: n2,
    colorOn: r2 = true,
    currentIndex: i2,
    onQuestionClick: o2,
    questions: a2,
  }) => {
    const s2 =
      n2 != null
        ? n2
        : (e20, t2, n3) => {
            if (!(t2 != null ? t2 : r2)) return "bg-white dark:bg-black";
            const i3 = [
              "visionary",
              "consummate",
              "analyzer",
              "tech",
              "entertainer",
              "maverick",
              "dreamer",
              "feeler",
              "tortured",
              "solo",
            ];
            switch (i3[(n3 != null ? n3 : 0) % i3.length]) {
              case "visionary":
                return "bg-[var(--artist-visionary)]/5";
              case "consummate":
                return "bg-[var(--artist-consummate)]/5";
              case "analyzer":
                return "bg-[var(--artist-analyzer)]/5";
              case "tech":
                return "bg-[var(--artist-tech)]/5";
              case "entertainer":
                return "bg-[var(--artist-entertainer)]/5";
              case "maverick":
                return "bg-[var(--artist-maverick)]/5";
              case "dreamer":
                return "bg-[var(--artist-dreamer)]/5";
              case "feeler":
                return "bg-[var(--artist-feeler)]/5";
              case "tortured":
                return "bg-[var(--artist-tortured)]/5";
              case "solo":
                return "bg-[var(--artist-solo)]/5";
              default:
                return "bg-white dark:bg-black";
            }
          };
    return jsxs("div", {
      className: "relative w-full",
      children: [
        jsx("div", {
          className: "grid gap-0 overflow-hidden rounded-sm",
          style: { gridTemplateColumns: `repeat(${a2.length}, minmax(0, 1fr))` },
          children: a2.map((t2, n3) => {
            var _a2, _b2;
            return jsx(
              "button",
              {
                type: "button",
                title: `Q${n3 + 1}${((_a2 = t2.category) != null ? _a2 : "").length > 0 ? ` \xB7 ${(_b2 = t2.category) != null ? _b2 : ""}` : ""}`,
                onClick: () => {
                  o2(n3);
                },
                className: Ka$1(
                  "h-3 focus:outline-none transition-[filter,background-color,opacity] duration-150 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring/40",
                  s2(t2.category, r2, n3),
                  "",
                ),
              },
              t2.id,
            );
          }),
        }),
        jsx("div", {
          className: "pointer-events-none absolute inset-0",
          children: jsx("div", {
            className: "grid gap-0 h-full",
            style: { gridTemplateColumns: `repeat(${a2.length}, minmax(0, 1fr))` },
            children: a2.map((t2, n3) =>
              jsx(
                "div",
                {
                  className: Ka$1(
                    "h-full transition-all duration-200",
                    n3 <= i2 ? "bg-foreground/20" : "bg-transparent",
                    0 === n3 && i2 >= 0 ? "rounded-l-sm" : "",
                    n3 === i2 && i2 >= 0 ? "rounded-r-sm" : "",
                  ),
                },
                n3,
              ),
            ),
          }),
        }),
      ],
    });
  },
  sP = (e20, t2) => {
    const [n2, r2, i2] = e20.split(".").map(Number);
    switch (t2) {
      case "major":
        return `${(n2 != null ? n2 : 0) + 1}.0.0`;
      case "minor":
        return `${n2 != null ? n2 : 0}.${(r2 != null ? r2 : 0) + 1}.0`;
      case "patch":
        return `${n2 != null ? n2 : 0}.${r2 != null ? r2 : 0}.${(i2 != null ? i2 : 0) + 1}`;
      default:
        return e20;
    }
  },
  cP = (e20) => {
    switch (e20) {
      case "major":
        return "Breaking changes, incompatible API changes";
      case "minor":
        return "New features, backwards compatible";
      case "patch":
        return "Bug fixes, backwards compatible";
      default:
        return "";
    }
  },
  lP = ({
    currentVersion: n2,
    isOpen: r2,
    onClose: i2,
    onConfirm: o2,
    title: a2 = "Create New Version",
  }) => {
    const [s2, c2] = g__default.useState("patch"),
      [l2, u2] = g__default.useState(""),
      f2 = sP(n2, s2),
      d2 = () => {
        u2(""), i2();
      };
    return jsx(QS$1, {
      open: r2,
      onOpenChange: d2,
      children: jsxs(QS$1.Content, {
        className: "sm:max-w-[425px]",
        children: [
          jsxs(QS$1.Header, {
            children: [
              jsxs(QS$1.Title, {
                className: "flex items-center gap-2",
                children: [jsx(GitBranchIcon, { className: "h-5 w-5" }), a2],
              }),
              jsx(QS$1.Description, {
                children:
                  "Choose the type of version increment for your quiz. This will create a new draft version.",
              }),
            ],
          }),
          jsxs("div", {
            className: "grid gap-4 py-4",
            children: [
              jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [
                  jsx(jO, {
                    htmlFor: "current-version",
                    className: "text-right",
                    children: "Current",
                  }),
                  jsxs("div", {
                    className: "col-span-3 px-3 py-2 bg-muted rounded-md text-sm font-mono",
                    children: ["v", n2],
                  }),
                ],
              }),
              jsxs("div", {
                className: "grid grid-cols-4 items-center gap-4",
                children: [
                  jsx(jO, { htmlFor: "new-version", className: "text-right", children: "New" }),
                  jsxs("div", {
                    className:
                      "col-span-3 px-3 py-2 bg-primary/10 border border-primary/20 rounded-md text-sm font-mono font-semibold",
                    children: ["v", f2],
                  }),
                ],
              }),
              jsxs("div", {
                className: "grid grid-cols-4 items-start gap-4",
                children: [
                  jsx(jO, { className: "text-right mt-2", children: "Type" }),
                  jsx("div", {
                    className: "col-span-3",
                    children: jsxs("div", {
                      className: "space-y-3",
                      children: [
                        jsxs("div", {
                          className: "flex items-start space-x-2",
                          children: [
                            jsx("input", {
                              type: "radio",
                              id: "patch",
                              name: "versionType",
                              value: "patch",
                              checked: "patch" === s2,
                              onChange: (e20) => {
                                c2(e20.target.value);
                              },
                              className:
                                "mt-1 h-4 w-4 text-primary focus:ring-2 focus:ring-primary",
                            }),
                            jsxs("div", {
                              className: "grid gap-1.5 leading-none",
                              children: [
                                jsxs(jO, {
                                  htmlFor: "patch",
                                  className: "font-medium cursor-pointer",
                                  children: ["Patch (", sP(n2, "patch"), ")"],
                                }),
                                jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: cP("patch"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxs("div", {
                          className: "flex items-start space-x-2",
                          children: [
                            jsx("input", {
                              type: "radio",
                              id: "minor",
                              name: "versionType",
                              value: "minor",
                              checked: "minor" === s2,
                              onChange: (e20) => {
                                c2(e20.target.value);
                              },
                              className:
                                "mt-1 h-4 w-4 text-primary focus:ring-2 focus:ring-primary",
                            }),
                            jsxs("div", {
                              className: "grid gap-1.5 leading-none",
                              children: [
                                jsxs(jO, {
                                  htmlFor: "minor",
                                  className: "font-medium cursor-pointer",
                                  children: ["Minor (", sP(n2, "minor"), ")"],
                                }),
                                jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: cP("minor"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxs("div", {
                          className: "flex items-start space-x-2",
                          children: [
                            jsx("input", {
                              type: "radio",
                              id: "major",
                              name: "versionType",
                              value: "major",
                              checked: "major" === s2,
                              onChange: (e20) => {
                                c2(e20.target.value);
                              },
                              className:
                                "mt-1 h-4 w-4 text-primary focus:ring-2 focus:ring-primary",
                            }),
                            jsxs("div", {
                              className: "grid gap-1.5 leading-none",
                              children: [
                                jsxs(jO, {
                                  htmlFor: "major",
                                  className: "font-medium cursor-pointer",
                                  children: ["Major (", sP(n2, "major"), ")"],
                                }),
                                jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: cP("major"),
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
              jsxs("div", {
                className: "grid grid-cols-4 items-start gap-4",
                children: [
                  jsx(jO, {
                    htmlFor: "comment",
                    className: "text-right mt-2",
                    children: "Comment",
                  }),
                  jsxs("div", {
                    className: "col-span-3",
                    children: [
                      jsx(AR, {
                        id: "comment",
                        placeholder: "Describe what changed in this version (optional)",
                        value: l2,
                        onChange: (e20) => {
                          u2(e20.target.value);
                        },
                        className: "min-h-[80px] resize-none",
                        maxLength: 500,
                      }),
                      jsxs("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: [l2.length, "/500 characters"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxs(QS$1.Footer, {
            children: [
              jsx(ii$1, { variant: "outline", onClick: d2, children: "Cancel" }),
              jsxs(ii$1, {
                onClick: () => {
                  o2(f2, s2, l2.trim().length > 0 ? l2.trim() : void 0), i2();
                },
                className: "gap-2",
                children: [jsx(ArrowUpIcon, { className: "h-4 w-4" }), "Create v", f2],
              }),
            ],
          }),
        ],
      }),
    });
  },
  uP = ({
    autoAdvanceEnabled: r2 = true,
    canGoBack: i2 = true,
    canGoNext: o2 = true,
    content: a2,
    idealAnswers: s2,
    isLastQuestion: c2 = false,
    max: l2 = 10,
    maxLabel: u2 = "Max",
    min: f2 = 0,
    minLabel: d2 = "Min",
    onBack: p2,
    onNext: h2,
    onRatingSelect: y2,
    onSubmit: m2,
    selectedValues: v2 = [],
    showIdealAnswers: g2 = true,
    title: b2,
  }) => {
    const x2 = Array.from({ length: l2 - f2 + 1 }, (e20, t2) => t2 + f2);
    return jsxs(tf$1, {
      className:
        "gap-0 w-full max-w-3xl animate-in fade-in-0 zoom-in-95 duration-200 shadow-2xl border border-border/60 bg-card ring-1 ring-ring/10",
      children: [
        jsx(tf$1.Header, {
          className: "p-4 min-h-36 flex items-center justify-center text-center",
          children: jsx(tf$1.Title, {
            className: "text-2xl md:text-3xl font-bold tracking-tight leading-tight text-center",
            children: b2 != null ? b2 : a2,
          }),
        }),
        jsxs(tf$1.Content, {
          className: "flex flex-col gap-6",
          children: [
            jsxs("div", {
              className: "flex flex-1 items-center relative",
              children: [
                (() => {
                  if (!g2 || void 0 === s2 || 0 === s2.length) return null;
                  const r3 = s2.filter((e20) => !e20.isPrimary);
                  if (0 === r3.length) return null;
                  const i3 = /* @__PURE__ */ new Map();
                  return (
                    r3.forEach((e20) => {
                      e20.idealAnswers.forEach((t2) => {
                        var _a2;
                        i3.has(t2) || i3.set(t2, []),
                          (_a2 = i3.get(t2)) == null ? void 0 : _a2.push(e20);
                      });
                    }),
                    jsx(Fragment, {
                      children: Array.from(i3.entries()).map(([n2, r4]) => {
                        if (0 === r4.length) return null;
                        const i4 = 100 / (l2 - f2 + 1);
                        return jsx(
                          "div",
                          {
                            className:
                              "absolute top-[-30px] transform -translate-x-1/2 pointer-events-none",
                            style: { left: `${(n2 - f2) * i4 + i4 / 2}%` },
                            children: jsxs("div", {
                              className: "grid grid-cols-3 gap-0.5 w-6 h-6",
                              children: [
                                r4
                                  .slice(0, 9)
                                  .map((t2, r5) =>
                                    jsx(
                                      "div",
                                      {
                                        className:
                                          "w-1.5 h-1.5 rounded-full border border-white/30 shadow-sm",
                                        style: { backgroundColor: gM(t2.endingName) },
                                        title: `${t2.endingName}: ${n2}`,
                                      },
                                      `${t2.endingId}-${n2}-${r5}`,
                                    ),
                                  ),
                                r4.length > 9 &&
                                  jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-muted-foreground/50 border border-white/30 shadow-sm flex items-center justify-center",
                                    children: jsx("span", {
                                      className: "text-[6px] text-white font-bold",
                                      children: "+",
                                    }),
                                  }),
                              ],
                            }),
                          },
                          n2,
                        );
                      }),
                    })
                  );
                })(),
                (() => {
                  if (!g2 || void 0 === s2 || 0 === s2.length) return null;
                  const t2 = s2.filter((e20) => e20.isPrimary);
                  if (0 === t2.length) return null;
                  const r3 = /* @__PURE__ */ new Map();
                  return (
                    t2.forEach((e20) => {
                      var _a2;
                      r3.has(e20.endingId) || r3.set(e20.endingId, []),
                        (_a2 = r3.get(e20.endingId)) == null ? void 0 : _a2.push(e20);
                    }),
                    jsx(Fragment, {
                      children: Array.from(r3.entries()).map(([t3, n2]) => {
                        if (0 === n2.length) return null;
                        const [r4] = n2,
                          i3 = r4 == null ? void 0 : r4.endingName,
                          o3 = gM(i3 != null ? i3 : ""),
                          a3 = /* @__PURE__ */ new Set();
                        n2.forEach((e20) => {
                          e20.idealAnswers.forEach((e21) => a3.add(e21));
                        });
                        const s3 = Array.from(a3).sort((e20, t4) => e20 - t4);
                        if (0 === s3.length) return null;
                        const c3 = [],
                          u3 = s3[0];
                        if (void 0 === u3) return null;
                        let d3 = [u3];
                        for (let e20 = 1; e20 < s3.length; e20++) {
                          const t4 = s3[e20],
                            n3 = s3[e20 - 1];
                          void 0 !== t4 &&
                            void 0 !== n3 &&
                            (t4 === n3 + 1 ? d3.push(t4) : (c3.push(d3), (d3 = [t4])));
                        }
                        return (
                          c3.push(d3),
                          c3.map((n3, r5) => {
                            if (0 === n3.length) return null;
                            const a4 = n3[0],
                              s4 = n3[n3.length - 1];
                            if (void 0 === a4 || void 0 === s4) return null;
                            const c4 = a4 - f2,
                              u4 = 100 / (l2 - f2 + 1);
                            return jsx(
                              "div",
                              {
                                className:
                                  "absolute top-[52px] h-1 rounded-full pointer-events-none",
                                style: {
                                  left: `${c4 * u4}%`,
                                  width: `${(s4 - f2 - c4 + 1) * u4}%`,
                                  backgroundColor: o3,
                                  opacity: 0.8,
                                },
                                title: `${i3} primary ideal answers: ${n3.join(", ")}`,
                              },
                              `primary-bar-${t3}-${r5}`,
                            );
                          })
                        );
                      }),
                    })
                  );
                })(),
                jsx("div", {
                  className: "grid w-full grid-cols-11 gap-2",
                  children: x2.map((t2) => {
                    const n2 = v2.includes(t2);
                    return jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          y2(t2),
                            r2 && o2 && !c2 && setTimeout(() => (h2 == null ? void 0 : h2()), 120);
                        },
                        className: Ka$1(
                          "rounded-md border p-3 text-center text-sm transition-all",
                          n2
                            ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                            : "hover:bg-accent hover:scale-[1.01]",
                        ),
                        children: t2,
                      },
                      t2,
                    );
                  }),
                }),
              ],
            }),
            jsxs("div", {
              className: "grid grid-cols-[auto_1fr_auto] items-center",
              children: [
                jsx(ii$1, {
                  type: "button",
                  variant: "secondary",
                  disabled: !i2,
                  onClick: p2,
                  children: "Back",
                }),
                jsxs("div", {
                  className: "flex items-center justify-center gap-3 text-xs text-muted-foreground",
                  children: [
                    jsx("span", { children: d2 }),
                    jsx("span", { className: "text-muted-foreground/60", children: "/" }),
                    jsx("span", { children: u2 }),
                  ],
                }),
                jsx("div", {
                  className: "flex items-center justify-end gap-2",
                  children: jsx(
                    ii$1,
                    o2 && !c2
                      ? { type: "button", onClick: h2, children: "Next" }
                      : {
                          className: "bg-green-600 hover:bg-green-700 text-white",
                          type: "button",
                          onClick: m2,
                          children: "Submit",
                        },
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  fP = Ea$1(ba$1.Default),
  dP = fP.atom(
    Effect.fn(function* () {
      const e20 = yield* ba$1;
      return yield* e20.http.Quizzes.list();
    }),
  ),
  pP = Data.taggedEnum(),
  hP = Object.assign(
    Atom.writable(
      (e20) => e20(dP),
      (e20, t2) => {
        const n2 = e20.get(hP);
        if (!Result.isSuccess(n2)) return;
        const r2 = pP.$match(t2, {
          Del: ({ id: e21 }) => n2.value.filter((t3) => t3.id !== e21),
          Upsert: ({ quiz: e21 }) =>
            void 0 !== n2.value.find((t3) => t3.id === e21.id)
              ? n2.value.map((t3) => (t3.id === e21.id ? e21 : t3))
              : Array$1.prepend(n2.value, e21),
        });
        e20.setSelf(Result.success(r2));
      },
    ),
    { remote: dP },
  );
fP.fn(
  Effect.fn(
    function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = yield* ba$1,
        r2 = yield* n2.http.Quizzes.upsert({ payload: e20 });
      t2.set(hP, pP.Upsert({ quiz: r2 }));
    },
    It({
      onWaiting: (e20) => (void 0 !== e20.id ? "Updating" : "Creating") + " quiz...",
      onSuccess: "Quiz saved",
      onFailure: "Failed to save quiz",
    }),
  ),
);
const yP = fP.fn(
  Effect.fn(
    function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = yield* ba$1;
      yield* n2.http.Quizzes.delete({ payload: { id: e20 } }), t2.set(hP, pP.Del({ id: e20 }));
    },
    It({
      onWaiting: "Deleting quiz...",
      onSuccess: "Quiz deleted",
      onFailure: "Failed to delete quiz",
    }),
  ),
);
fP.fn(
  Effect.fn(
    function* (e20) {
      var _a2;
      const { isPublished: t2, quiz: n2 } = e20,
        r2 = yield* Registry.AtomRegistry,
        i2 = yield* ba$1,
        o2 = yield* i2.http.Quizzes.upsert({
          payload: {
            id: n2.id,
            isPublished: t2,
            isTemp: n2.isTemp,
            metadata: (_a2 = n2.metadata) != null ? _a2 : void 0,
            questions: n2.questions,
            title: n2.title,
            subtitle: n2.subtitle,
            description: n2.description,
            version: n2.version,
          },
        });
      r2.set(hP, pP.Upsert({ quiz: o2 }));
    },
    It({
      onWaiting: (e20) =>
        true === e20.isPublished ? "Publishing quiz..." : "Unpublishing quiz...",
      onSuccess: "Quiz publish status updated",
      onFailure: "Failed to update quiz publish status",
    }),
  ),
);
const mP = fP.fn(
    Effect.fn(
      function* (e20) {
        var _a2, _b2, _c2;
        const { newVersion: t2, quiz: n2 } = e20,
          r2 = yield* Registry.AtomRegistry,
          i2 = yield* ba$1,
          o2 = yield* i2.http.Quizzes.upsert({
            payload: {
              description: n2.description,
              isPublished: false,
              isTemp: false,
              metadata: (_a2 = n2.metadata) != null ? _a2 : void 0,
              questions: n2.questions,
              subtitle: n2.subtitle,
              title: n2.title,
              version: t2,
            },
          });
        r2.set(hP, pP.Upsert({ quiz: o2 }));
        try {
          const e21 = (yield* i2.http.AnalysisEngine.list()).find(
            (e22) => e22.quizId === n2.id && false === e22.isTemp,
          );
          void 0 !== e21 &&
            (yield* i2.http.AnalysisEngine.upsert({
              payload: {
                name: e21.name,
                quizId: o2.id,
                version: t2,
                description: (_b2 = e21.description) != null ? _b2 : void 0,
                scoringConfig: e21.scoringConfig,
                endings: e21.endings,
                metadata: (_c2 = e21.metadata) != null ? _c2 : void 0,
                isActive: e21.isActive,
                isPublished: false,
                isTemp: false,
              },
            }));
        } catch {}
        return o2;
      },
      It({
        onWaiting: "Creating new version...",
        onSuccess: "Created new version successfully",
        onFailure: "Failed to create new version",
      }),
    ),
  ),
  vP = fP.fn(
    Effect.fn(
      function* (e20) {
        var _a2, _b2, _c2;
        const { quiz: t2 } = e20,
          n2 = yield* Registry.AtomRegistry,
          r2 = yield* ba$1,
          i2 = yield* r2.http.Quizzes.upsert({
            payload: {
              description: t2.description,
              isPublished: false,
              isTemp: true,
              metadata: (_a2 = t2.metadata) != null ? _a2 : void 0,
              questions: t2.questions,
              subtitle: t2.subtitle,
              title: `${t2.title} (Editing)`,
              version: t2.version,
            },
          });
        n2.set(hP, pP.Upsert({ quiz: i2 }));
        const o2 = yield* r2.http.AnalysisEngine.list(),
          a2 = o2.find((e21) => e21.quizId === t2.id && false === e21.isTemp);
        if (void 0 !== a2)
          try {
            const e21 = o2.filter((e22) => e22.quizId === i2.id && true === e22.isTemp);
            for (const i3 of e21)
              try {
                yield* r2.http.AnalysisEngine.delete({ payload: { id: i3.id } }),
                  n2.set(JM, YM.Del({ id: i3.id }));
              } catch {}
            const t3 = yield* r2.http.AnalysisEngine.upsert({
              payload: {
                name: `${a2.name} (Editing)`,
                quizId: i2.id,
                version: a2.version,
                description: (_b2 = a2.description) != null ? _b2 : void 0,
                scoringConfig: a2.scoringConfig,
                endings: a2.endings,
                metadata: (_c2 = a2.metadata) != null ? _c2 : void 0,
                isActive: a2.isActive,
                isPublished: false,
                isTemp: true,
              },
            });
            n2.set(JM, YM.Upsert({ engine: t3 })),
              console.log("\u{1F527} Created temp engine for temp quiz:"),
              console.log("  Temp Quiz ID:", i2.id),
              console.log("  Temp Engine ID:", t3.id),
              console.log("  Engine quizId:", t3.quizId),
              console.log("  Engine isTemp:", t3.isTemp);
          } catch {}
        return i2;
      },
      It({
        onWaiting: "Creating temporary copy...",
        onSuccess: "Ready to edit",
        onFailure: "Failed to create temporary copy",
      }),
    ),
  );
fP.fn(
  Effect.fn(function* (e20) {
    var _a2;
    const { quiz: t2 } = e20,
      n2 = yield* Registry.AtomRegistry,
      r2 = yield* ba$1;
    if (!t2.isTemp) return t2;
    const i2 = yield* r2.http.Quizzes.upsert({
      payload: {
        id: t2.id,
        description: t2.description,
        isPublished: false,
        isTemp: true,
        metadata: (_a2 = t2.metadata) != null ? _a2 : void 0,
        questions: t2.questions,
        subtitle: t2.subtitle,
        title: t2.title,
        version: t2.version,
      },
    });
    return n2.set(hP, pP.Upsert({ quiz: i2 })), i2;
  }),
);
const gP = fP.fn(
  Effect.fn(
    function* (e20) {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      const { action: t2, quiz: n2 } = e20,
        r2 = yield* Registry.AtomRegistry,
        i2 = yield* ba$1;
      if (!n2.isTemp) return n2;
      if ("save" === t2) {
        const e21 = yield* i2.http.Quizzes.upsert({
          payload: {
            id: n2.id,
            description: n2.description,
            isPublished: false,
            isTemp: false,
            metadata: (_a2 = n2.metadata) != null ? _a2 : void 0,
            questions: n2.questions,
            subtitle: n2.subtitle,
            title: n2.title.replace(" (Editing)", ""),
            version: n2.version,
          },
        });
        r2.set(hP, pP.Upsert({ quiz: e21 }));
        const t3 = (yield* i2.http.AnalysisEngine.list()).find(
          (e22) => e22.quizId === n2.id && true === e22.isTemp,
        );
        if (void 0 !== t3) {
          const n3 = yield* i2.http.AnalysisEngine.upsert({
            payload: {
              id: t3.id,
              name: t3.name.replace(" (Editing)", ""),
              quizId: e21.id,
              version: e21.version,
              description: (_b2 = t3.description) != null ? _b2 : void 0,
              scoringConfig: t3.scoringConfig,
              endings: t3.endings,
              metadata: (_c2 = t3.metadata) != null ? _c2 : void 0,
              isActive: t3.isActive,
              isPublished: false,
              isTemp: false,
            },
          });
          r2.set(JM, YM.Upsert({ engine: n3 })),
            console.log("\u{1F527} Updated temp engine to permanent:"),
            console.log("  Saved Quiz ID:", e21.id),
            console.log("  Saved Engine ID:", n3.id),
            console.log("  Engine quizId:", n3.quizId),
            console.log("  Engine isTemp:", n3.isTemp);
        }
        return e21;
      }
      const o2 = yield* i2.http.Quizzes.upsert({
        payload: {
          description: n2.description,
          isPublished: false,
          isTemp: false,
          metadata: (_d2 = n2.metadata) != null ? _d2 : void 0,
          questions: n2.questions,
          subtitle: n2.subtitle,
          title: n2.title.replace(" (Editing)", ""),
          version: e20.newVersion,
        },
      });
      r2.set(hP, pP.Upsert({ quiz: o2 }));
      const a2 = (yield* i2.http.AnalysisEngine.list()).find(
        (e21) => e21.quizId === n2.id && true === e21.isTemp,
      );
      if (void 0 !== a2) {
        const t3 = yield* i2.http.AnalysisEngine.upsert({
          payload: {
            name: a2.name.replace(" (Editing)", ""),
            quizId: o2.id,
            version: e20.newVersion,
            description: (_e2 = a2.description) != null ? _e2 : void 0,
            scoringConfig: a2.scoringConfig,
            endings: a2.endings,
            metadata: (_f2 = a2.metadata) != null ? _f2 : void 0,
            isActive: a2.isActive,
            isPublished: false,
            isTemp: false,
          },
        });
        r2.set(JM, YM.Upsert({ engine: t3 })),
          console.log("\u{1F527} Created permanent engine for new quiz version:"),
          console.log("  New Quiz ID:", o2.id),
          console.log("  New Engine ID:", t3.id),
          console.log("  Engine quizId:", t3.quizId),
          console.log("  Engine isTemp:", t3.isTemp),
          yield* i2.http.AnalysisEngine.delete({ payload: { id: a2.id } }),
          r2.set(JM, YM.Del({ id: a2.id }));
      }
      return (
        yield* i2.http.Quizzes.delete({ payload: { id: n2.id } }),
        r2.set(hP, pP.Del({ id: n2.id })),
        o2
      );
    },
    It({
      onWaiting: "Saving quiz...",
      onSuccess: "Quiz saved successfully",
      onFailure: "Failed to save quiz",
    }),
  ),
);
fP.fn(
  Effect.fn(function* ({ quiz: e20 }) {
    var _a2, _b2;
    const t2 = yield* ba$1;
    if (true !== e20.isTemp) return;
    const n2 = (yield* t2.http.Quizzes.list()).find(
      (t3) => t3.title === e20.title.replace(" (Editing)", "") && false === t3.isTemp,
    );
    if (void 0 === n2) throw new Error(`No original quiz found for temp quiz: ${e20.title}`);
    const r2 = (yield* t2.http.AnalysisEngine.list()).find(
      (e21) => e21.quizId === n2.id && false === e21.isTemp,
    );
    if (void 0 === r2) throw new Error(`No analysis engine found for original quiz: ${n2.title}`);
    return yield* t2.http.AnalysisEngine.upsert({
      payload: {
        name: `${r2.name} (Editing)`,
        version: e20.version,
        description: (_a2 = r2.description) != null ? _a2 : void 0,
        scoringConfig: r2.scoringConfig,
        endings: r2.endings,
        metadata: (_b2 = r2.metadata) != null ? _b2 : void 0,
        isActive: r2.isActive,
        isPublished: false,
        isTemp: true,
        quizId: e20.id,
      },
    });
  }),
);
const bP = fP.fn(
    Effect.fn(function* () {
      const e20 = yield* Registry.AtomRegistry,
        t2 = yield* ba$1,
        n2 = (yield* t2.http.Quizzes.list()).filter((e21) => true === e21.isTemp);
      yield* Effect.forEach(n2, (e21) => t2.http.Quizzes.delete({ payload: { id: e21.id } }));
      for (const r2 of n2) e20.set(hP, pP.Del({ id: r2.id }));
      return n2.length;
    }),
  ),
  xP = fP.atom(
    Effect.gen(function* () {
      const e20 = yield* ba$1;
      return (yield* e20.http.ActiveQuizzes.list())[0];
    }),
  ),
  wP = Object.assign(
    Atom.writable(
      (e20) => e20(xP),
      (e20, t2) => {},
    ),
    { remote: xP },
  ),
  OP = Atom.runtime(BrowserKeyValueStore.layerLocalStorage),
  SP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-selected-quiz-id",
    schema: Schema.String,
    defaultValue: () => "",
  }),
  AP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-selected-engine-id",
    schema: Schema.String,
    defaultValue: () => "",
  }),
  jP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-selected-artist-type",
    schema: Schema.String,
    defaultValue: () => "visionary",
  }),
  MP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-selected-question-index",
    schema: Schema.Number,
    defaultValue: () => 0,
  }),
  PP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-show-ideal-answers",
    schema: Schema.Boolean,
    defaultValue: () => true,
  }),
  kP = Schema.Literal("quiz", "analysis"),
  EP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-left-sidebar-view",
    schema: kP,
    defaultValue: () => "quiz",
  }),
  TP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-sidebar-visible",
    schema: Schema.Boolean,
    defaultValue: () => true,
  }),
  NP = Schema.Array(
    Schema.Struct({ type: Schema.String, count: Schema.Number, fill: Schema.String }),
  ),
  IP = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-reanalysis-data",
    schema: Schema.NullOr(NP),
    defaultValue: () => null,
  }),
  _P = Atom.kvs({
    runtime: OP,
    key: "quiz-editor-analysis-config",
    schema: Schema.Struct({
      primaryPointValue: Schema.Number,
      secondaryPointValue: Schema.Number,
      primaryPointWeight: Schema.Number,
      secondaryPointWeight: Schema.Number,
      primaryDistanceFalloff: Schema.Number,
      secondaryDistanceFalloff: Schema.Number,
      beta: Schema.Number,
      disableSecondaryPoints: Schema.Boolean,
      primaryMinPoints: Schema.Number,
      secondaryMinPoints: Schema.Number,
      minPercentageThreshold: Schema.Number,
      enableQuestionBreakdown: Schema.Boolean,
      maxEndingResults: Schema.Number,
    }),
    defaultValue: () => ({
      primaryPointValue: 10,
      secondaryPointValue: 5,
      primaryPointWeight: 1,
      secondaryPointWeight: 1,
      primaryDistanceFalloff: 0.1,
      secondaryDistanceFalloff: 0.5,
      beta: 0.8,
      disableSecondaryPoints: false,
      primaryMinPoints: 0,
      secondaryMinPoints: 0,
      minPercentageThreshold: 0,
      enableQuestionBreakdown: true,
      maxEndingResults: 10,
    }),
  }),
  CP = Atom.make(null).pipe(Atom.keepAlive),
  zP = Atom.make(null).pipe(Atom.keepAlive),
  DP = Atom.make(null).pipe(Atom.keepAlive),
  RP = () => jsx(zN.Trigger, { className: "h-8 w-8 p-0" }),
  LP = (e20) => {
    var _a2;
    let t2 = 7;
    for (let r2 = 0; r2 < e20.length; r2++) {
      (t2 = (t2 << 5) - t2 + e20.charCodeAt(r2)), (t2 |= 0);
    }
    const n2 = [
      "border-orange-500 text-orange-600",
      "border-red-500 text-red-600",
      "border-amber-500 text-amber-600",
      "border-yellow-500 text-yellow-600",
      "border-lime-500 text-lime-600",
      "border-emerald-500 text-emerald-600",
      "border-teal-500 text-teal-600",
      "border-cyan-500 text-cyan-600",
      "border-sky-500 text-sky-600",
      "border-blue-500 text-blue-600",
      "border-indigo-500 text-indigo-600",
      "border-violet-500 text-violet-600",
      "border-purple-500 text-purple-600",
      "border-fuchsia-500 text-fuchsia-600",
      "border-pink-500 text-pink-600",
      "border-rose-500 text-rose-600",
    ];
    return (_a2 = n2[Math.abs(t2) % n2.length]) != null ? _a2 : "border-orange-500 text-orange-600";
  },
  $P = (e20, t2) => {
    if (!e20.isTemp) return `v${e20.version.semver}`;
    const n2 = e20.title.replace(" (Editing)", ""),
      r2 = e20.version.semver,
      i2 = t2
        .filter(
          (e21) =>
            true === e21.isTemp &&
            e21.title.replace(" (Editing)", "") === n2 &&
            e21.version.semver === r2,
        )
        .sort((e21, t3) => e21.id.localeCompare(t3.id)),
      o2 = i2.findIndex((t3) => t3.id === e20.id);
    return `v${r2} (Draft ${o2 + 1})`;
  },
  BP = ({ artistType: t2, className: n2, size: r2 = 20 }) => {
    const [i2, o2] = g__default.useState(false),
      a2 = `the-${t2.toLowerCase()}-artist`,
      s2 = OM(a2);
    return jsx(
      "div",
      null === s2 || i2
        ? {
            className: Ka$1(
              "flex items-center justify-center rounded-full bg-gray-400 text-xs font-bold text-white",
              n2,
            ),
            style: { width: r2, height: r2 },
            role: "img",
            "aria-label": `${t2} icon`,
            children: t2.charAt(0).toUpperCase(),
          }
        : {
            className: Ka$1("flex items-center justify-center", n2),
            style: { width: `${r2}px`, height: `${r2}px`, aspectRatio: "1 / 1", flexShrink: 0 },
            children: jsx("img", {
              src: s2,
              alt: `${t2} icon`,
              className: "rounded-full dark:brightness-0 dark:invert",
              style: { width: "100%", height: "100%", objectFit: "fill", aspectRatio: "1 / 1" },
              onError: () => {
                o2(true);
              },
            }),
          },
    );
  },
  qP = ({ onAddQuestion: n2, onSelectQuestion: r2, questions: i2, selectedIndex: o2 }) =>
    jsx("div", {
      className: "flex h-full flex-col",
      children: jsx(AC, {
        className: "flex-1",
        children: jsxs("div", {
          className: "p-1 space-y-0.5",
          children: [
            i2.map((n3, i3) =>
              jsx(
                "button",
                {
                  onClick: () => {
                    r2(i3);
                  },
                  className: Ka$1(
                    "w-full text-left p-1.5 rounded text-xs transition-colors",
                    "hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring/40",
                    o2 === i3
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-foreground",
                  ),
                  children: jsxs("div", {
                    className: "flex items-start gap-2 min-w-0",
                    children: [
                      jsx("span", {
                        className: Ka$1(
                          "text-xs font-mono px-1 py-0.5 rounded flex-shrink-0 mt-0.5",
                          o2 === i3
                            ? "bg-primary-foreground text-primary"
                            : "bg-muted text-foreground",
                        ),
                        children: i3 + 1,
                      }),
                      jsx("span", {
                        className: "flex-1 min-w-0 text-xs leading-relaxed break-words",
                        children: n3.title,
                      }),
                    ],
                  }),
                },
                n3.id,
              ),
            ),
            jsx("div", { className: "h-16" }),
          ],
        }),
      }),
    }),
  FP = ({
    description: n2,
    label: r2,
    max: i2,
    min: o2,
    onChange: a2,
    step: s2 = 0.1,
    value: c2,
  }) =>
    jsxs("div", {
      className: "space-y-1",
      children: [
        jsx(jO, { className: "text-sm font-medium", children: r2 }),
        void 0 !== n2 && jsx("p", { className: "text-xs text-muted-foreground", children: n2 }),
        jsx(li$1, {
          type: "number",
          value: c2,
          onChange: (e20) => {
            const t2 = parseFloat(e20.target.value);
            a2(isNaN(t2) ? 0 : t2);
          },
          min: o2,
          max: i2,
          step: s2,
          className: "h-8",
        }),
      ],
    }),
  UP = ({ engines: n2, onArtistTypeChange: r2, selectedArtistType: i2, selectedEngineId: o2 }) => {
    const a2 = useAtomValue(_P),
      s2 = useAtomSet(_P),
      c2 = (e20) => {
        const t2 = { ...a2, ...e20 };
        s2(t2);
      };
    return jsxs("div", {
      className: "flex h-full flex-col",
      children: [
        jsxs("div", {
          className: "flex items-center justify-between p-3 border-b border-border/50",
          children: [
            jsxs("div", {
              children: [
                jsx("h3", { className: "text-sm font-medium", children: "Analysis Config" }),
                jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Adjust analysis parameters",
                }),
              ],
            }),
            jsx(ii$1, {
              size: "sm",
              variant: "ghost",
              onClick: () => {
                s2({
                  primaryPointValue: 10,
                  secondaryPointValue: 5,
                  primaryPointWeight: 1,
                  secondaryPointWeight: 1,
                  primaryDistanceFalloff: 0.1,
                  secondaryDistanceFalloff: 0.5,
                  beta: 0.8,
                  disableSecondaryPoints: false,
                  primaryMinPoints: 0,
                  secondaryMinPoints: 0,
                  minPercentageThreshold: 0,
                  enableQuestionBreakdown: true,
                  maxEndingResults: 10,
                });
              },
              title: "Reset to defaults",
              children: jsx(RotateCcwIcon, { className: "h-3 w-3" }),
            }),
          ],
        }),
        jsx(AC, {
          className: "flex-1",
          children: jsx("div", {
            className: "p-3 space-y-4",
            children: jsxs(aA$1, {
              defaultValue: "scoring",
              className: "w-full",
              children: [
                jsxs(aA$1.List, {
                  className: "grid w-full grid-cols-2",
                  children: [
                    jsx(aA$1.Trigger, { value: "scoring", children: "Scoring" }),
                    jsx(aA$1.Trigger, { value: "ui", children: "UI" }),
                  ],
                }),
                jsx(aA$1.Content, {
                  value: "scoring",
                  className: "mt-4 h-full",
                  children: jsx(AC, {
                    className: "h-full",
                    children: jsxs("div", {
                      className: "space-y-4 pr-4",
                      children: [
                        jsx(FP, {
                          description: "Base points awarded for perfect primary ideal answers",
                          label: "Primary Point Value",
                          max: 50,
                          min: 0,
                          onChange: (e20) => {
                            c2({ primaryPointValue: e20 });
                          },
                          step: 1,
                          value: a2.primaryPointValue,
                        }),
                        jsx(FP, {
                          description: "Base points awarded for perfect secondary ideal answers",
                          label: "Secondary Point Value",
                          max: 50,
                          min: 0,
                          onChange: (e20) => {
                            c2({ secondaryPointValue: e20 });
                          },
                          step: 1,
                          value: a2.secondaryPointValue,
                        }),
                        jsx(FP, {
                          description:
                            "Multiplier for primary questions (most important questions)",
                          label: "Primary Point Weight",
                          max: 3,
                          min: 0,
                          onChange: (e20) => {
                            c2({ primaryPointWeight: e20 });
                          },
                          step: 0.1,
                          value: a2.primaryPointWeight,
                        }),
                        jsx(FP, {
                          description: "Multiplier for secondary questions (supporting questions)",
                          label: "Secondary Point Weight",
                          max: 3,
                          min: 0,
                          onChange: (e20) => {
                            c2({ secondaryPointWeight: e20 });
                          },
                          step: 0.1,
                          value: a2.secondaryPointWeight,
                        }),
                        jsx(FP, {
                          description:
                            "Percentage of points lost per step away from ideal answers. 0% = only exact matches get points, 100% = lose all points after 1 step",
                          label: "Primary Distance Falloff (%)",
                          max: 100,
                          min: 0,
                          onChange: (e20) => {
                            c2({ primaryDistanceFalloff: e20 / 100 });
                          },
                          step: 5,
                          value: Math.round(100 * a2.primaryDistanceFalloff),
                        }),
                        jsx(FP, {
                          description:
                            "Percentage of points lost per step away from ideal answers. 0% = only exact matches get points, 100% = lose all points after 1 step",
                          label: "Secondary Distance Falloff (%)",
                          max: 100,
                          min: 0,
                          onChange: (e20) => {
                            c2({ secondaryDistanceFalloff: e20 / 100 });
                          },
                          step: 5,
                          value: Math.round(100 * a2.secondaryDistanceFalloff),
                        }),
                      ],
                    }),
                  }),
                }),
                jsx(aA$1.Content, {
                  value: "ui",
                  className: "mt-4 h-full",
                  children: jsx(AC, {
                    className: "h-full",
                    children: jsx("div", {
                      className: "space-y-4 pr-4",
                      children: jsx(FP, {
                        description:
                          "Higher number separates the high percentages from the lower ones on the graph visually to reveal a more distinct winner",
                        label: "Beta",
                        max: 5,
                        min: 0.1,
                        onChange: (e20) => {
                          c2({ beta: e20 });
                        },
                        step: 0.1,
                        value: a2.beta,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  WP = ({
    engines: n2,
    onAddQuestion: r2,
    onArtistTypeChange: i2,
    onSelectQuestion: o2,
    questions: a2,
    selectedArtistType: s2,
    selectedEngineId: c2,
    selectedQuestionIndex: l2,
  }) => {
    const u2 = useAtomValue(EP),
      f2 = useAtomSet(EP);
    return jsxs("div", {
      className: "flex h-full flex-col border-r border-border/50",
      children: [
        jsxs("div", {
          className: "flex items-center justify-between p-3 border-b border-border/50",
          children: [
            jsx("h3", {
              className: "text-sm font-medium",
              children: "quiz" === u2 ? "Quiz Editor" : "Analysis Tools",
            }),
            jsxs("div", {
              className: "flex items-center gap-1 p-1 bg-muted rounded-lg",
              children: [
                jsxs(ii$1, {
                  variant: "quiz" === u2 ? "default" : "ghost",
                  size: "sm",
                  onClick: () => {
                    f2("quiz");
                  },
                  className: "gap-1 h-6 px-2 text-xs",
                  children: [jsx(HelpCircleIcon, { className: "h-3 w-3" }), "Quiz"],
                }),
                jsxs(ii$1, {
                  variant: "analysis" === u2 ? "default" : "ghost",
                  size: "sm",
                  onClick: () => {
                    f2("analysis");
                  },
                  className: "gap-1 h-6 px-2 text-xs",
                  children: [jsx(SlidersIcon, { className: "h-3 w-3" }), "Analysis"],
                }),
              ],
            }),
          ],
        }),
        "quiz" === u2
          ? jsx(qP, { questions: a2, selectedIndex: l2, onSelectQuestion: o2, onAddQuestion: r2 })
          : jsx(UP, {
              engines: n2,
              onArtistTypeChange: i2,
              selectedArtistType: s2,
              selectedEngineId: c2,
            }),
      ],
    });
  },
  VP = ({
    onArtistTypeChange: r2,
    onClearDraft: i2,
    onCreateNewVersion: o2,
    onDeleteQuiz: a2,
    onQuizChange: s2,
    quizzes: c2,
    selectedArtistType: l2,
    selectedQuizId: u2,
  }) => {
    var _a2;
    const f2 = c2
        .filter(
          (e20) =>
            "My Artist Type Quiz" === e20.title || "My Artist Type Quiz (Editing)" === e20.title,
        )
        .sort((e20, t2) => t2.version.semver.localeCompare(e20.version.semver)),
      d2 = c2.find((e20) => e20.id === u2),
      p2 =
        void 0 !== d2 &&
        ((e20, t2) => {
          if (e20.isTemp) {
            const n3 = e20.title.replace(" (Editing)", ""),
              r3 = t2.find(
                (t3) =>
                  t3.title === n3 &&
                  t3.version.semver === e20.version.semver &&
                  false === t3.isTemp,
              );
            return (
              void 0 === r3 ||
              JSON.stringify(e20.questions) !== JSON.stringify(r3.questions) ||
              e20.description !== r3.description ||
              e20.subtitle !== r3.subtitle ||
              JSON.stringify(e20.metadata) !== JSON.stringify(r3.metadata)
            );
          }
          const n2 = t2.find(
            (t3) =>
              t3.title === `${e20.title} (Editing)` &&
              t3.version.semver === e20.version.semver &&
              true === t3.isTemp,
          );
          return (
            void 0 !== n2 &&
            (JSON.stringify(n2.questions) !== JSON.stringify(e20.questions) ||
              n2.description !== e20.description ||
              n2.subtitle !== e20.subtitle ||
              JSON.stringify(n2.metadata) !== JSON.stringify(e20.metadata))
          );
        })(d2, c2),
      [h2, y2] = g__default.useState(false);
    return jsxs(Fragment, {
      children: [
        jsx(lP, {
          currentVersion: void 0 !== d2 ? d2.version.semver : "1.0.0",
          isOpen: h2,
          onClose: () => {
            y2(false);
          },
          onConfirm: o2,
          title:
            void 0 !== d2 && true === d2.isTemp
              ? "Save Changes as New Version"
              : "Create New Quiz Version",
        }),
        jsxs("div", {
          className: "flex items-center gap-4 p-4 border-b border-border/50 bg-card/50",
          children: [
            jsx("div", { className: "flex items-center gap-2", children: jsx(RP, {}) }),
            jsxs("div", {
              className: "flex items-center gap-6 flex-1",
              children: [
                jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    jsx("span", {
                      className: "text-sm font-medium text-muted-foreground",
                      children: "Version:",
                    }),
                    jsxs(Cd$1, {
                      value: u2,
                      onValueChange: s2,
                      children: [
                        jsx(Cd$1.Trigger, {
                          className: "w-60",
                          children: jsx(Cd$1.Value, {
                            placeholder: "Select version",
                            children:
                              void 0 !== d2 &&
                              jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                  jsx("span", {
                                    title: (_a2 = d2.version.comment) != null ? _a2 : void 0,
                                    children: $P(d2, f2),
                                  }),
                                  d2.isTemp
                                    ? jsx(h, {
                                        variant: "outline",
                                        className: `text-xs px-1 ${LP(d2.id)}`,
                                        children: "Edit",
                                      })
                                    : true === d2.isPublished
                                      ? jsx(h, {
                                          variant: "default",
                                          className: "text-xs px-1",
                                          children: "Live",
                                        })
                                      : null,
                                ],
                              }),
                          }),
                        }),
                        jsx(Cd$1.Content, {
                          children: f2.map((n2) =>
                            jsx(
                              Cd$1.Item,
                              {
                                value: n2.id,
                                children: jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    jsx("span", { children: $P(n2, f2) }),
                                    n2.isTemp
                                      ? jsx(h, {
                                          variant: "outline",
                                          className: `text-xs px-1 ${LP(n2.id)}`,
                                          children: "Edit",
                                        })
                                      : n2.isPublished
                                        ? jsx(h, {
                                            variant: "default",
                                            className: "text-xs px-1",
                                            children: "Live",
                                          })
                                        : null,
                                  ],
                                }),
                              },
                              n2.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    jsx("span", {
                      className: "text-sm font-medium text-muted-foreground",
                      children: "Artist Type:",
                    }),
                    jsxs(Cd$1, {
                      value: l2,
                      onValueChange: r2,
                      children: [
                        jsx(Cd$1.Trigger, {
                          className: "w-36",
                          children: jsx(Cd$1.Value, {
                            children: jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                jsx(BP, { artistType: l2, size: 16 }),
                                jsx("span", { className: "capitalize", children: l2 }),
                              ],
                            }),
                          }),
                        }),
                        jsx(Cd$1.Content, {
                          children: [
                            "visionary",
                            "consummate",
                            "analyzer",
                            "tech",
                            "entertainer",
                            "maverick",
                            "dreamer",
                            "feeler",
                            "tortured",
                            "solo",
                          ].map((n2) =>
                            jsx(
                              Cd$1.Item,
                              {
                                value: n2,
                                children: jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsx(BP, { artistType: n2, size: 16 }),
                                    jsx("span", { className: "capitalize", children: n2 }),
                                  ],
                                }),
                              },
                              n2,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            jsxs("div", {
              className: "flex items-center gap-2 ml-4",
              children: [
                void 0 !== d2 &&
                  d2.isTemp &&
                  jsxs(ii$1, {
                    variant: "default",
                    size: "sm",
                    onClick: () => {
                      y2(true);
                    },
                    className: "gap-2",
                    children: [jsx(SaveIcon, { className: "h-4 w-4" }), "Save Changes"],
                  }),
                void 0 !== d2 &&
                  !d2.isTemp &&
                  jsxs(ii$1, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      y2(true);
                    },
                    disabled: !p2,
                    className: Ka$1("gap-2", !p2 && "opacity-50 cursor-not-allowed"),
                    title: p2
                      ? "Create a new version with your changes"
                      : "No changes to save as new version",
                    children: [jsx(GitBranchIcon, { className: "h-4 w-4" }), "New Version"],
                  }),
                jsxs(SR, {
                  children: [
                    jsx(SR.Trigger, {
                      asChild: true,
                      children: jsxs(ii$1, {
                        variant: "outline",
                        size: "sm",
                        children: [jsx(SettingsIcon, { className: "h-4 w-4 mr-2" }), "Settings"],
                      }),
                    }),
                    jsxs(SR.Content, {
                      align: "end",
                      className: "w-48",
                      children: [
                        jsx(SR.Label, { children: "Settings" }),
                        jsx(SR.Separator, {}),
                        jsx(SR.Item, { children: jsx("span", { children: "Quiz Settings" }) }),
                        jsx(SR.Item, { children: jsx("span", { children: "Export Quiz" }) }),
                        jsx(SR.Item, { children: jsx("span", { children: "Import Quiz" }) }),
                        jsx(SR.Separator, {}),
                        jsx(SR.Item, {
                          className: "text-destructive",
                          onClick: () => {
                            i2();
                          },
                          children: jsx("span", { children: "Clear Draft" }),
                        }),
                        jsx(SR.Separator, {}),
                        jsx("div", {
                          className: "px-2 py-1",
                          children: jsx("span", {
                            className:
                              "text-xs font-semibold text-destructive uppercase tracking-wide",
                            children: "Danger",
                          }),
                        }),
                        jsx(SR.Item, {
                          className:
                            "text-destructive focus:bg-destructive focus:text-destructive-foreground",
                          onClick: () => {
                            a2();
                          },
                          children: jsx("span", { children: "Delete Quiz" }),
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
  },
  QP = ({ engines: t2, quiz: n2, selectedEngineId: r2 }) =>
    jsx("div", {
      className: "flex h-full flex-col border-l border-border/50",
      children: jsx(ZP, { quiz: n2, engines: t2, selectedEngineId: r2 }),
    }),
  GP = {
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
  },
  HP = (e20) => {
    var _a2;
    if (0 === e20.length) return null;
    const t2 = e20.reduce((e21, t3) => (t3.points > e21.points ? t3 : e21)),
      n2 = {};
    return (
      Object.keys(vM).forEach((e21) => {
        const t3 = e21.toLowerCase().replace(/\s+/g, "-");
        n2[t3] = e21;
      }),
      (_a2 = n2[t2.endingId]) != null ? _a2 : t2.endingId
    );
  },
  XP = () => {
    const n2 = useAtomValue(TM),
      r2 = useAtomValue(RM),
      i2 = g__default.useMemo(() => {
        if (!Result.isSuccess(n2)) return [];
        const e20 = n2.value,
          t2 = {};
        return (
          e20.forEach((e21) => {
            var _a2;
            const n3 = HP(e21.endingResults);
            if (null !== n3) {
              const e22 = vM[n3];
              void 0 !== e22 && (t2[e22] = ((_a2 = t2[e22]) != null ? _a2 : 0) + 1);
            }
          }),
          Object.entries(t2).map(([e21, t3]) => ({
            type: e21.toLowerCase(),
            count: t3,
            fill: hM[e21],
          }))
        );
      }, [n2]),
      o2 = g__default.useMemo(() => (Result.isSuccess(n2) ? n2.value.length : 0), [n2, r2]);
    return jsxs(tf$1, {
      className: "flex flex-col h-full",
      children: [
        jsxs(tf$1.Header, {
          className: "pb-2",
          children: [
            jsx(tf$1.Title, { className: "text-sm", children: "Current Real Results" }),
            jsx(tf$1.Description, {
              className: "text-xs",
              children: "Actual analysis results from all responses",
            }),
          ],
        }),
        jsx(tf$1.Content, {
          className: "flex-1 pb-2",
          children: Result.isSuccess(n2)
            ? jsx(Sx$1, {
                config: GP,
                className: "w-full h-full",
                children: jsxs(wO, {
                  children: [
                    jsx(_x$1, { cursor: false, content: jsx(Rx$1, { hideLabel: true }) }),
                    jsx(wv, {
                      data: i2,
                      dataKey: "count",
                      nameKey: "type",
                      innerRadius: 40,
                      strokeWidth: 3,
                      children: jsx(Ed, {
                        content: ({ viewBox: n3 }) => {
                          var _a2;
                          return Boolean(n3) && "object" == typeof n3 && "cx" in n3 && "cy" in n3
                            ? jsxs("text", {
                                x: n3.cx,
                                y: n3.cy,
                                textAnchor: "middle",
                                dominantBaseline: "middle",
                                children: [
                                  jsx("tspan", {
                                    x: n3.cx,
                                    y: n3.cy,
                                    className: "fill-foreground text-xl font-bold",
                                    children: o2.toLocaleString(),
                                  }),
                                  jsx("tspan", {
                                    x: n3.cx,
                                    y: ((_a2 = n3.cy) != null ? _a2 : 0) + 16,
                                    className: "fill-muted-foreground text-xs",
                                    children: "Real",
                                  }),
                                ],
                              })
                            : null;
                        },
                      }),
                    }),
                  ],
                }),
              })
            : jsx("div", {
                className: "flex items-center justify-center h-full",
                children: jsx("div", {
                  className: "text-muted-foreground text-xs",
                  children: "Loading...",
                }),
              }),
        }),
      ],
    });
  },
  KP = g__default.memo(({ isAnalyzing: n2 = false, onReanalyze: r2, responsesResult: i2 }) => {
    const o2 = useAtomValue(IP),
      [a2, s2] = g__default.useState(null);
    g__default.useEffect(() => {
      null !== o2 && s2(o2);
    }, [o2]);
    const c2 = n2 && null !== a2 ? a2 : o2,
      l2 = null !== c2 ? c2.reduce((e20, t2) => e20 + t2.count, 0) : 0;
    return jsxs(tf$1, {
      className: "flex flex-col h-full",
      children: [
        jsx(tf$1.Header, {
          className: "pb-2",
          children: jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx(tf$1.Title, {
                    className: "text-sm",
                    children: "Re-analyze with Current Engine",
                  }),
                  jsx(tf$1.Description, {
                    className: "text-xs",
                    children:
                      null === o2
                        ? "Click to analyze all responses with current engine settings"
                        : n2
                          ? "Analyzing with current engine configuration..."
                          : "Fresh analysis results with current engine configuration",
                  }),
                ],
              }),
              jsx(ii$1, {
                variant: "outline",
                size: "sm",
                onClick: r2,
                disabled: n2 || !Result.isSuccess(i2) || void 0 === r2,
                className: "h-8 w-8 p-0",
                children: jsx(PlayIcon, { className: "h-4 w-4" }),
              }),
            ],
          }),
        }),
        jsx(tf$1.Content, {
          className: "flex-1 pb-2",
          children:
            null === c2
              ? jsx("div", {
                  className: "flex items-center justify-center h-full",
                  children: jsxs("div", {
                    className: "text-center text-muted-foreground",
                    children: [
                      jsx(PlayIcon, { className: "h-8 w-8 mx-auto mb-2 opacity-50" }),
                      jsx("p", {
                        className: "text-xs",
                        children: "Click the play button to re-analyze",
                      }),
                    ],
                  }),
                })
              : jsx(Sx$1, {
                  config: GP,
                  className: "w-full h-full",
                  children: jsxs(wO, {
                    children: [
                      jsx(_x$1, { cursor: false, content: jsx(Rx$1, { hideLabel: true }) }),
                      jsx(wv, {
                        data: [...c2],
                        dataKey: "count",
                        nameKey: "type",
                        innerRadius: 40,
                        strokeWidth: 3,
                        animationDuration: 1600,
                        animationEasing: "ease-out",
                        isAnimationActive: true,
                        children: jsx(Ed, {
                          content: ({ viewBox: n3 }) => {
                            var _a2;
                            return Boolean(n3) && "object" == typeof n3 && "cx" in n3 && "cy" in n3
                              ? jsxs("text", {
                                  x: n3.cx,
                                  y: n3.cy,
                                  textAnchor: "middle",
                                  dominantBaseline: "middle",
                                  children: [
                                    jsx("tspan", {
                                      x: n3.cx,
                                      y: n3.cy,
                                      className: "fill-foreground text-xl font-bold",
                                      children: l2.toLocaleString(),
                                    }),
                                    jsx("tspan", {
                                      x: n3.cx,
                                      y: ((_a2 = n3.cy) != null ? _a2 : 0) + 16,
                                      className: "fill-muted-foreground text-xs",
                                      children: "Re-analyzed",
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
      ],
    });
  }),
  YP = ({ isAnalyzing: n2 = false, onReanalyze: r2, selectedEngine: i2 }) => {
    const o2 = useAtomValue(TM),
      a2 = useAtomValue(IP),
      s2 = useAtomValue(RM),
      c2 = g__default.useMemo(() => {
        if (!Result.isSuccess(o2)) return {};
        const e20 = o2.value,
          t2 = {};
        return (
          e20.forEach((e21) => {
            var _a2;
            const n3 = HP(e21.endingResults);
            if (null !== n3) {
              const e22 = vM[n3];
              void 0 !== e22 && (t2[e22] = ((_a2 = t2[e22]) != null ? _a2 : 0) + 1);
            }
          }),
          t2
        );
      }, [o2]),
      l2 = g__default.useMemo(() => {
        if (null === a2) return {};
        const e20 = {};
        Object.keys(vM).forEach((t3) => {
          const n3 = t3.toLowerCase().replace(/\s+/g, "-");
          e20[n3] = t3;
        });
        const t2 = {};
        return (
          a2.forEach((n3) => {
            const r3 = n3.type.toLowerCase(),
              i3 = e20[r3];
            if (void 0 !== i3) {
              const e21 = vM[i3];
              void 0 !== e21 && (t2[e21] = n3.count);
            }
          }),
          t2
        );
      }, [a2]);
    return jsxs(tf$1, {
      className: "mt-3",
      children: [
        jsx(tf$1.Header, {
          className: "pb-2",
          children: jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              jsxs("div", {
                children: [
                  jsx(tf$1.Title, { className: "text-sm", children: "Engine vs Real Results" }),
                  jsx(tf$1.Description, {
                    className: "text-xs",
                    children: "Comparison of projected vs actual artist type distribution",
                  }),
                ],
              }),
              jsx(ii$1, {
                variant: "outline",
                size: "sm",
                onClick: r2,
                disabled: n2 || !Result.isSuccess(s2) || void 0 === r2,
                className: "h-8 w-8 p-0",
                children: jsx(PlayIcon, { className: "h-4 w-4" }),
              }),
            ],
          }),
        }),
        jsxs(tf$1.Content, {
          className: "p-3",
          children: [
            jsx("div", {
              className: "space-y-2",
              children: [
                "Visionary",
                "Consummate",
                "Analyzer",
                "Tech",
                "Entertainer",
                "Maverick",
                "Dreamer",
                "Feeler",
                "Tortured",
                "Solo",
              ].map((n3) => {
                var _a2, _b2;
                const r3 = (_a2 = l2[n3]) != null ? _a2 : 0,
                  i3 = (_b2 = c2[n3]) != null ? _b2 : 0;
                return jsxs(
                  "div",
                  {
                    className: "grid grid-cols-3 items-center gap-2 py-1",
                    children: [
                      jsx("div", {
                        className: "text-right",
                        children: jsx("span", {
                          className: "text-sm font-mono text-blue-600 dark:text-blue-400",
                          children: r3,
                        }),
                      }),
                      jsx("div", {
                        className: "flex justify-center",
                        children: jsx(BP, { artistType: n3.toLowerCase(), size: 48 }),
                      }),
                      jsx("div", {
                        className: "text-left",
                        children: jsx("span", {
                          className: "text-sm font-mono text-green-600 dark:text-green-400",
                          children: i3,
                        }),
                      }),
                    ],
                  },
                  n3,
                );
              }),
            }),
            jsx("div", {
              className: "mt-3 pt-2 border-t border-border/50",
              children: jsxs("div", {
                className: "flex justify-between text-xs text-muted-foreground",
                children: [
                  jsx("span", {
                    className: "text-blue-600 dark:text-blue-400",
                    children: "Engine",
                  }),
                  jsx("span", {
                    className: "text-green-600 dark:text-green-400",
                    children: "Real",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  ZP = ({ engines: n2, selectedEngineId: r2 }) => {
    const i2 = n2.find((e20) => e20.id === r2),
      o2 = useAtomValue(RM),
      a2 = useAtomValue(hP),
      s2 = useAtomValue(SP),
      c2 = useAtomSet(IP),
      [l2, u2] = g__default.useState(false),
      f2 = useAtomValue(_P),
      d2 = g__default.useCallback(async () => {
        var _a2;
        if (Result.isSuccess(o2) && Result.isSuccess(a2) && void 0 !== i2 && "" !== s2) {
          console.log("\u2705 Starting analysis..."), u2(true);
          try {
            const e20 = o2.value,
              t2 = a2.value,
              n3 = t2.find((e21) => e21.id === s2);
            if (void 0 === n3) return;
            const r3 = t2.filter(
                (e21) =>
                  "My Artist Type Quiz" === e21.title ||
                  "My Artist Type Quiz (Editing)" === e21.title,
              ),
              l3 = new Set(r3.map((e21) => e21.id)),
              u3 = e20.filter((e21) => l3.has(e21.quizId)),
              d3 = {};
            console.log("\u{1F527} Analysis Config:", f2);
            for (const o3 of u3)
              try {
                try {
                  const e21 = Effect.runSync(
                    Effect.provide(
                      va$1.pipe(
                        Effect.flatMap((e22) =>
                          e22.analyzeResponse(i2, n3, o3, Config.succeed(f2)),
                        ),
                      ),
                      va$1.Default,
                    ),
                  ).endingResults.map((e22) => {
                    var _a3;
                    return {
                      artistType: (_a3 = vM[e22.endingId]) != null ? _a3 : e22.endingId,
                      percentage: e22.percentage,
                      points: e22.points,
                      fullName: e22.endingId,
                      databaseId: e22.endingId,
                    };
                  });
                  if (e21.length > 0) {
                    const t3 = e21.reduce((e22, t4) => (t4.percentage > e22.percentage ? t4 : e22));
                    if (e21.every((e22) => 0 === e22.points))
                      throw new Error(
                        `Analysis failed: All results have 0 points. This indicates a problem with the analysis engine or question matching. Response ID: ${o3.id}`,
                      );
                    if ("" !== t3.artistType) {
                      const e22 = t3.artistType;
                      d3[e22] = ((_a2 = d3[e22]) != null ? _a2 : 0) + 1;
                    }
                  }
                } catch {}
              } catch {}
            const p2 = Object.entries(d3).map(([e21, t3]) => ({
                type: e21.toLowerCase(),
                count: t3,
                fill: hM[e21],
              })),
              h2 = u3.length,
              y2 = Object.entries(d3)
                .sort(([, e21], [, t3]) => t3 - e21)
                .map(([e21, t3]) => `${e21}: ${t3} (${((t3 / h2) * 100).toFixed(1)}%)`)
                .join(", ");
            console.log(
              `\u{1F4CA} Analysis Complete: ${h2} responses analyzed. Distribution: ${y2}`,
            ),
              c2([...p2]);
          } catch (e20) {
            console.error("\u274C Re-analysis failed:", e20);
          } finally {
            u2(false);
          }
        }
      }, [o2, a2, i2, s2, c2, f2]);
    return (
      g__default.useEffect(() => {
        if (Result.isSuccess(o2) && Result.isSuccess(a2) && void 0 !== i2) {
          const e20 = setTimeout(() => {
            d2();
          }, 500);
          return () => {
            clearTimeout(e20);
          };
        }
      }, [f2, d2, o2, a2, i2]),
      void 0 === i2
        ? jsx("div", {
            className: "flex items-center justify-center h-full p-4",
            children: jsxs("div", {
              className: "text-center text-muted-foreground",
              children: [
                jsx(BarChart3Icon, { className: "h-8 w-8 mx-auto mb-2 opacity-50" }),
                jsx("p", { className: "text-sm", children: "No analysis engine selected" }),
              ],
            }),
          })
        : jsx(AC, {
            className: "flex-1 p-3",
            children: jsxs("div", {
              className: "space-y-3",
              children: [
                jsx("div", {
                  className: "h-[300px]",
                  children: jsx(KP, {
                    responsesResult: o2,
                    selectedEngine: i2,
                    onReanalyze: d2,
                    isAnalyzing: l2,
                  }),
                }),
                jsx("div", { className: "h-[300px]", children: jsx(XP, {}) }),
                jsx(YP, { selectedEngine: i2, onReanalyze: d2, isAnalyzing: l2 }),
              ],
            }),
          })
    );
  },
  JP = () => {
    var _a2;
    const r2 = useAtomValue(hP),
      i2 = useAtomValue(JM),
      o2 = useAtomValue(SP),
      a2 = useAtomValue(AP),
      s2 = useAtomValue(jP),
      c2 = useAtomValue(MP),
      l2 = useAtomValue(PP),
      u2 = useAtomValue(CP),
      f2 = useAtomValue(zP),
      d2 = useAtomValue(DP),
      p2 = useAtomValue(TP),
      h2 = useAtomSet(TP),
      y2 = ((e20, t2, n2, r3, i3) => {
        if (!Result.isSuccess(e20) || !Result.isSuccess(t2)) return [];
        const o3 = e20.value,
          a3 = t2.value,
          s3 = o3.find((e21) => e21.id === n2),
          c3 = a3.find((e21) => e21.id === r3);
        if (void 0 === s3 || void 0 === c3) return [];
        const l3 = s3.questions[i3];
        return void 0 === l3
          ? []
          : c3.endings.flatMap((e21) =>
              e21.questionRules
                .filter((e22) => e22.questionId === l3.id)
                .map((t3) => ({
                  endingId: e21.endingId,
                  endingName: e21.name,
                  idealAnswers: [...t3.idealAnswers],
                  isPrimary: t3.isPrimary,
                })),
            );
      })(r2, i2, o2, a2, c2),
      m2 = ((e20, t2, n2, r3, i3, o3) => {
        if (!Result.isSuccess(t2) || !Result.isSuccess(e20)) return [];
        const a3 = t2.value,
          s3 = e20.value,
          c3 = a3.find((e21) => e21.id === r3),
          l3 = s3.find((e21) => e21.id === n2);
        if (void 0 === c3 || void 0 === l3) return [];
        const u3 = l3.questions[o3];
        if (void 0 === u3) return [];
        const f3 = `the-${i3.toLowerCase()}-artist`,
          d3 = c3.endings.find((e21) => e21.endingId === f3);
        if (void 0 === d3) return [];
        const p3 = d3.questionRules.find((e21) => e21.questionId === u3.id);
        return void 0 === p3 ? [] : [...p3.idealAnswers];
      })(r2, i2, o2, a2, s2, c2),
      v2 = useAtomSet(SP),
      g2 = useAtomSet(AP),
      b2 = useAtomSet(jP),
      x2 = useAtomSet(MP),
      w2 = useAtomSet(CP),
      O2 = useAtomSet(zP),
      S2 = useAtomSet(DP),
      A2 = useAtomSet(vP),
      j2 = useAtomSet(eP),
      M2 = useAtomSet(bP),
      P2 = useAtomSet(tP),
      k2 = useAtomSet(yP),
      E2 = useAtomSet(mP),
      T2 = useAtomSet(gP),
      N2 = useAtomSet(JM);
    if (
      (g__default.useEffect(() => {
        var _a3, _b2, _c2;
        if (Result.isSuccess(r2) && Result.isSuccess(i2)) {
          const e20 = r2.value,
            t2 = i2.value;
          if ("" === o2 || !e20.some((e21) => e21.id === o2)) {
            const t3 = e20
                .filter(
                  (e21) =>
                    "My Artist Type Quiz" === e21.title ||
                    "My Artist Type Quiz (Editing)" === e21.title,
                )
                .sort((e21, t4) => t4.version.semver.localeCompare(e21.version.semver)),
              n2 =
                (_b2 =
                  (_a3 = t3[0]) != null
                    ? _a3
                    : e20.find((e21) => e21.title.includes("My Artist Type"))) != null
                  ? _b2
                  : e20[0];
            void 0 !== n2 &&
              (console.log("\u{1F3AF} Auto-selecting quiz:", n2.title, n2.version.semver),
              v2(n2.id));
          }
          if ("" === a2 || !t2.some((e21) => e21.id === a2)) {
            const e21 = (_c2 = t2.find((e22) => e22.isActive)) != null ? _c2 : t2[0];
            void 0 !== e21 &&
              (console.log(
                "\u{1F3AF} Auto-selecting engine:",
                e21.name,
                e21.isActive ? "(active)" : "",
              ),
              g2(e21.id));
          }
        }
      }, [r2, i2, o2, a2]),
      g__default.useEffect(() => {
        var _a3, _b2;
        if (Result.isSuccess(r2) && Result.isSuccess(i2)) {
          const e20 = r2.value,
            t2 = i2.value;
          if (e20.length > 0 && ("" === o2 || !e20.some((e21) => e21.id === o2))) {
            const t3 = e20
                .filter(
                  (e21) =>
                    "My Artist Type Quiz" === e21.title ||
                    "My Artist Type Quiz (Editing)" === e21.title,
                )
                .sort((e21, t4) => t4.version.semver.localeCompare(e21.version.semver)),
              n2 = (_a3 = t3[0]) != null ? _a3 : e20[0];
            void 0 !== n2 &&
              (console.log("\u{1F504} Fallback quiz selection:", n2.title), v2(n2.id));
          }
          if (t2.length > 0 && ("" === a2 || !t2.some((e21) => e21.id === a2))) {
            const e21 = (_b2 = t2.find((e22) => e22.isActive)) != null ? _b2 : t2[0];
            void 0 !== e21 &&
              (console.log("\u{1F504} Fallback engine selection:", e21.name), g2(e21.id));
          }
        }
      }, [r2, i2]),
      g__default.useEffect(() => {
        if (Result.isSuccess(r2) && Result.isSuccess(i2)) {
          const e20 = r2.value,
            t2 = i2.value,
            n2 = e20.find((e21) => e21.id === o2);
          if (void 0 !== n2) {
            const e21 = $2(n2, t2);
            void 0 !== e21 && e21.id !== a2 && g2(e21.id);
          }
        }
      }, [o2, r2, i2, a2]),
      g__default.useEffect(() => {
        if (null !== u2 && Result.isSuccess(i2)) {
          const e20 = i2.value.find((e21) => e21.id === a2);
          void 0 !== e20 && true === e20.isTemp && (L2(e20, u2), w2(null));
        }
      }, [a2, u2, i2]),
      g__default.useEffect(() => {
        if (Result.isSuccess(r2) && null !== f2) {
          const e20 = r2.value,
            t2 = e20.find((e21) => e21.id === o2);
          if (void 0 !== t2) {
            const n2 = t2.title.replace(" (Editing)", ""),
              r3 = e20.find(
                (e21) =>
                  (e21.title === n2 || e21.title === t2.title) &&
                  e21.version.semver === f2 &&
                  false === e21.isTemp &&
                  false === e21.isPublished &&
                  e21.id !== o2,
              );
            void 0 !== r3 && (v2(r3.id), O2(null));
          }
        }
      }, [r2, f2, o2]),
      g__default.useEffect(() => {
        if (Result.isSuccess(r2) && null !== d2) {
          const e20 = r2.value,
            t2 = e20.find((e21) => e21.id === d2.originalQuizId);
          if (void 0 !== t2) {
            const n2 = e20
              .filter(
                (e21) =>
                  true === e21.isTemp &&
                  e21.title === `${t2.title} (Editing)` &&
                  e21.version.semver === t2.version.semver,
              )
              .filter((e21) => !d2.existingTempQuizIds.includes(e21.id));
            if (n2.length > 0) {
              const e21 = n2.sort((e22, t3) => t3.id.localeCompare(e22.id))[0];
              void 0 !== e21 && (v2(e21.id), S2(null));
            }
          }
        }
      }, [r2, d2, o2]),
      !Result.isSuccess(r2) || !Result.isSuccess(i2))
    )
      return jsx("div", {
        className: "flex items-center justify-center h-64",
        children: jsx("div", {
          className: "text-muted-foreground",
          children: "Loading quizzes and engines...",
        }),
      });
    const I2 = r2.value,
      _2 = i2.value,
      C2 =
        (_a2 = I2.find((e20) => e20.id === o2)) != null
          ? _a2
          : I2.find((e20) => e20.title.includes("My Artist Type"));
    if (void 0 === C2)
      return jsx("div", {
        className: "flex items-center justify-center h-64",
        children: jsx("div", { className: "text-muted-foreground", children: "No quiz found" }),
      });
    const z2 = C2.questions,
      D2 = z2[c2],
      R2 = (e20) => {
        x2(e20);
      },
      L2 = (e20, t2) => {
        const n2 = ((e21, t3) => {
          if (void 0 === D2) return e21;
          const n3 = `the-${s2.toLowerCase()}-artist`,
            r3 = e21.endings.map((e22) => {
              if (e22.endingId === n3) {
                const n4 = e22.questionRules.findIndex((e23) => e23.questionId === D2.id);
                if (n4 >= 0) {
                  const r4 = [...e22.questionRules],
                    i3 = r4[n4];
                  if (void 0 !== i3) {
                    const e23 = i3.idealAnswers;
                    let o3;
                    (o3 = i3.isPrimary
                      ? e23.includes(t3)
                        ? e23.filter((e24) => e24 !== t3)
                        : [...e23, t3].sort((e24, t4) => e24 - t4)
                      : [t3]),
                      (r4[n4] = { ...i3, idealAnswers: o3 });
                  }
                  return { ...e22, questionRules: r4 };
                }
                return {
                  ...e22,
                  questionRules: [
                    ...e22.questionRules,
                    { questionId: D2.id, idealAnswers: [t3], isPrimary: false },
                  ],
                };
              }
              return e22;
            });
          return { ...e21, endings: r3 };
        })(e20, t2);
        N2(YM.Upsert({ engine: n2 })), j2({ engine: n2 });
      },
      $2 = (e20, t2) => {
        const n2 = t2.find((t3) => t3.quizId === e20.id);
        if (void 0 !== n2) return n2;
      },
      B2 = () => {
        c2 > 0 && x2(c2 - 1);
      },
      q2 = () => {
        c2 < z2.length - 1 && x2(c2 + 1);
      };
    return jsxs("div", {
      className: "flex h-[calc(100vh-1rem)] flex-col overflow-hidden",
      children: [
        jsx(VP, {
          quizzes: I2,
          engines: _2,
          selectedQuizId: o2,
          selectedEngineId: a2,
          selectedArtistType: s2,
          onQuizChange: (e20) => {
            v2(e20);
          },
          onArtistTypeChange: b2,
          onClearDraft: () => {
            if ((M2(), P2(), Result.isSuccess(r2) && Result.isSuccess(i2))) {
              const e20 = r2.value,
                t2 = i2.value,
                n2 = e20.find((e21) => false === e21.isTemp),
                o3 = t2.find((e21) => false === e21.isTemp);
              void 0 !== n2 && v2(n2.id), void 0 !== o3 && g2(o3.id);
            }
          },
          onCreateNewVersion: (e20, t2, n2) => {
            const r3 = I2.find((e21) => e21.id === o2);
            if (void 0 === r3) return;
            const i3 = new lo$1({ semver: e20, comment: n2 });
            if (r3.isTemp) T2({ quiz: r3, action: "saveAsNew", newVersion: i3 }), O2(i3.semver);
            else {
              const e21 = i3.semver;
              E2({ quiz: r3, newVersion: i3, incrementType: t2 }), O2(e21);
            }
          },
          onDeleteQuiz: async () => {
            if (!Result.isSuccess(r2)) return;
            const e20 = I2.find((e21) => e21.id === o2);
            if (void 0 === e20) return;
            if (
              !window.confirm(`\u26A0\uFE0F DANGER: Delete "${e20.title}" v${e20.version}?

This action CANNOT be undone. The quiz and all its data will be permanently deleted.

Type "DELETE" in the next dialog to confirm.`)
            )
              return;
            const t2 = window.prompt(
              `To confirm deletion of "${e20.title}", type "DELETE" (all caps):`,
            );
            "DELETE" === t2
              ? (k2(e20.id),
                setTimeout(() => {
                  const t3 = I2.filter((t4) => t4.id !== e20.id);
                  if (t3.length > 0) {
                    const e21 = t3[0];
                    void 0 !== e21 && v2(e21.id);
                  }
                }, 100))
              : null !== t2 &&
                alert("Deletion cancelled. You must type exactly 'DELETE' to confirm.");
          },
        }),
        jsxs(MO, {
          direction: "horizontal",
          className: "flex-1 min-h-0 overflow-hidden",
          children: [
            jsx(PO, {
              defaultSize: 25,
              minSize: 20,
              maxSize: 35,
              className: "min-w-[220px]",
              children: jsx(WP, {
                engines: _2,
                questions: z2,
                selectedQuestionIndex: c2,
                selectedArtistType: s2,
                selectedEngineId: a2,
                onSelectQuestion: R2,
                onAddQuestion: () => {},
                onArtistTypeChange: b2,
              }),
            }),
            jsx(kO, { withHandle: true }),
            jsx(PO, {
              defaultSize: p2 ? 50 : 75,
              children: jsxs("div", {
                className: "h-full p-4 flex flex-col relative",
                children: [
                  jsx(ii$1, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      h2(!p2);
                    },
                    className: "absolute top-4 right-4 z-10 h-8 w-8 p-0",
                    title: p2 ? "Hide sidebar" : "Show sidebar",
                    children: jsx(p2 ? ChevronRightIcon : ChevronLeftIcon, {
                      className: "h-4 w-4",
                    }),
                  }),
                  jsx("div", {
                    className: "mb-4",
                    children: jsx(aP, {
                      questions: z2.map((e20) => ({ id: e20.id, category: e20.id })),
                      currentIndex: c2,
                      onQuestionClick: R2,
                      categoryColorClass: (e20, t2, n2) => {
                        if (true !== t2) return "bg-white dark:bg-black";
                        const r3 = [
                          "visionary",
                          "consummate",
                          "analyzer",
                          "tech",
                          "entertainer",
                          "maverick",
                          "dreamer",
                          "feeler",
                          "tortured",
                          "solo",
                        ];
                        switch (r3[(n2 != null ? n2 : 0) % r3.length]) {
                          case "visionary":
                            return "bg-[var(--artist-visionary)]/5";
                          case "consummate":
                            return "bg-[var(--artist-consummate)]/5";
                          case "analyzer":
                            return "bg-[var(--artist-analyzer)]/5";
                          case "tech":
                            return "bg-[var(--artist-tech)]/5";
                          case "entertainer":
                            return "bg-[var(--artist-entertainer)]/5";
                          case "maverick":
                            return "bg-[var(--artist-maverick)]/5";
                          case "dreamer":
                            return "bg-[var(--artist-dreamer)]/5";
                          case "feeler":
                            return "bg-[var(--artist-feeler)]/5";
                          case "tortured":
                            return "bg-[var(--artist-tortured)]/5";
                          case "solo":
                            return "bg-[var(--artist-solo)]/5";
                          default:
                            return "bg-white dark:bg-black";
                        }
                      },
                      colorOn: true,
                    }),
                  }),
                  jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children:
                      void 0 !== D2
                        ? jsx(uP, {
                            title: D2.title,
                            content: "",
                            minLabel: "rating" === D2.data.type ? D2.data.minLabel : "Min",
                            maxLabel: "rating" === D2.data.type ? D2.data.maxLabel : "Max",
                            min: "rating" === D2.data.type ? D2.data.minRating : 1,
                            max: "rating" === D2.data.type ? D2.data.maxRating : 10,
                            selectedValues: m2,
                            idealAnswers: y2,
                            showIdealAnswers: l2,
                            onRatingSelect: async (e20) => {
                              const t2 = I2.find((e21) => e21.id === o2),
                                n2 = _2.find((e21) => e21.id === a2);
                              if (void 0 === t2 || void 0 === n2 || void 0 === D2) return;
                              const r3 = true === t2.isTemp,
                                i3 = true === n2.isTemp;
                              if (r3 && i3) L2(n2, e20);
                              else if (r3 && !i3) L2(n2, e20);
                              else
                                try {
                                  w2(e20);
                                  const n3 = I2.filter(
                                    (e21) =>
                                      true === e21.isTemp &&
                                      e21.title === `${t2.title} (Editing)` &&
                                      e21.version.semver === t2.version.semver,
                                  ).map((e21) => e21.id);
                                  S2({ originalQuizId: t2.id, existingTempQuizIds: n3 }),
                                    A2({ quiz: t2 });
                                } catch {
                                  w2(null);
                                }
                            },
                            onBack: B2,
                            onNext: q2,
                            onSubmit: () => {},
                            canGoBack: c2 > 0,
                            canGoNext: c2 < z2.length - 1,
                            isLastQuestion: c2 === z2.length - 1,
                            autoAdvanceEnabled: false,
                          })
                        : jsx("div", {
                            className: "text-muted-foreground",
                            children: "No question selected",
                          }),
                  }),
                  jsxs("div", {
                    className: "mt-4 flex items-center justify-between",
                    children: [
                      jsxs(ii$1, {
                        variant: "outline",
                        onClick: B2,
                        disabled: 0 === c2,
                        children: [jsx(ArrowLeftIcon, { className: "h-4 w-4 mr-2" }), "Previous"],
                      }),
                      jsxs("div", {
                        className: "text-sm text-muted-foreground",
                        children: [c2 + 1, " of ", z2.length],
                      }),
                      jsxs(ii$1, {
                        variant: "outline",
                        onClick: q2,
                        disabled: c2 === z2.length - 1,
                        children: ["Next", jsx(ArrowRightIcon, { className: "h-4 w-4 ml-2" })],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            p2 &&
              jsxs(Fragment, {
                children: [
                  jsx(kO, { withHandle: true }),
                  jsx(PO, {
                    defaultSize: 25,
                    minSize: 20,
                    maxSize: 35,
                    className: "min-w-[280px]",
                    children: jsx(QP, { quiz: C2, engines: _2, selectedEngineId: a2 }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
class ek extends Effect.Service()("@features/quiz/QuizTakerService", {
  accessors: true,
  effect: Effect.sync(() => ({
    initializeSession: (e20) =>
      Effect.gen(function* () {
        return { responses: {}, logs: [], sessionMetadata: { startedAt: yield* DateTime.now } };
      }),
    selectAnswer: (e20, t2, n2) =>
      Effect.gen(function* () {
        const r2 = yield* DateTime.now,
          i2 =
            0 === e20.logs.length
              ? [{ type: "navigation", questionId: t2, timestamp: r2 }]
              : e20.logs,
          o2 = void 0 !== e20.responses[t2],
          a2 = {
            type: "selection",
            questionId: t2,
            rating: n2,
            action: o2 ? "changed response to" : "selected",
            timestamp: r2,
          };
        return { ...e20, responses: { ...e20.responses, [t2]: n2 }, logs: [...i2, a2] };
      }),
    navigateToQuestion: (e20, t2, n2, r2) =>
      Effect.gen(function* () {
        var _a2, _b2;
        const i2 = r2[n2];
        if (void 0 === i2) return e20;
        const o2 = yield* DateTime.now,
          a2 =
            0 === e20.logs.length
              ? [
                  {
                    type: "navigation",
                    questionId: (_b2 = (_a2 = r2[t2]) == null ? void 0 : _a2.id) != null ? _b2 : "",
                    timestamp: o2,
                  },
                ]
              : e20.logs,
          s2 = { type: "navigation", questionId: i2.id, timestamp: o2 };
        return { ...e20, logs: [...a2, s2] };
      }),
    submitQuiz: (e20) =>
      Effect.gen(function* () {
        const t2 = yield* DateTime.now,
          n2 = { type: "submission", timestamp: t2 };
        return {
          ...e20,
          logs: [...e20.logs, n2],
          sessionMetadata: {
            ...e20.sessionMetadata,
            completedAt: t2,
            totalDurationMs: DateTime.distance(e20.sessionMetadata.startedAt, t2),
          },
        };
      }),
    getCurrentQuestion: (e20, t2) => Effect.succeed(e20[t2]),
    canNavigateBack: (e20) => e20 > 0,
    canNavigateNext: (e20, t2) => e20 < t2 - 1,
    findQuizBySlug: (e20, t2) =>
      Effect.succeed(e20.find((e21) => e21.title.toLowerCase().replace(/\s+/g, "-") === t2)),
    getQuestionAtIndex: (e20, t2) => Effect.succeed(e20[t2]),
    getSavedResponse: (e20, t2) => Effect.succeed(e20.responses[t2]),
    getRandomCategoryColorClass: (e20, t2) => {
      var _a2;
      if (false === t2) return "bg-muted";
      return (_a2 = [
        "bg-gradient-to-b from-rose-500/20 to-rose-500/5",
        "bg-gradient-to-b from-pink-500/20 to-pink-500/5",
        "bg-gradient-to-b from-fuchsia-500/20 to-fuchsia-500/5",
        "bg-gradient-to-b from-purple-500/20 to-purple-500/5",
        "bg-gradient-to-b from-violet-500/20 to-violet-500/5",
        "bg-gradient-to-b from-indigo-500/20 to-indigo-500/5",
        "bg-gradient-to-b from-blue-500/20 to-blue-500/5",
        "bg-gradient-to-b from-cyan-500/20 to-cyan-500/5",
        "bg-gradient-to-b from-teal-500/20 to-teal-500/5",
        "bg-gradient-to-b from-emerald-500/20 to-emerald-500/5",
      ][
        String(e20 != null ? e20 : "default")
          .split("")
          .reduce((e21, t3) => e21 + t3.charCodeAt(0), 0) % 10
      ]) != null
        ? _a2
        : "bg-gradient-to-b from-gray-500/20 to-gray-500/5";
    },
  })),
}) {}
const tk = Atom.runtime(Layer.mergeAll(ek.Default, ba$1.Default));
Atom.runtime.addGlobalLayer(Logger.pretty);
const nk = tk.atom(
    Effect.gen(function* () {
      return {
        responses: {},
        logs: [],
        sessionMetadata: { startedAt: yield* DateTime.now },
        currentQuestionIndex: 0,
        currentQuiz: void 0,
      };
    }),
  ),
  rk = Object.assign(
    Atom.writable(
      (e20) => e20(nk),
      (e20, t2) => {
        e20.setSelf(Result.success(t2));
      },
    ),
    { remote: nk },
  ),
  ik = Atom.make((e20) => {
    var _a2;
    const t2 = e20(rk);
    if (Result.isSuccess(t2) && void 0 !== t2.value.currentQuiz)
      return (_a2 = t2.value.currentQuiz.questions) == null
        ? void 0
        : _a2[t2.value.currentQuestionIndex];
  }),
  ok = Atom.make((e20) => {
    var _a2;
    const t2 = e20(rk),
      n2 = e20(ik);
    if (Result.isSuccess(t2) && void 0 !== n2)
      return (_a2 = t2.value.responses[n2.id]) != null ? _a2 : void 0;
  }),
  ak = Atom.make((e20) => {
    var _a2, _b2;
    const t2 = e20(rk);
    if (!Result.isSuccess(t2) || void 0 === t2.value.currentQuiz)
      return { canGoBack: false, canGoNext: false, isFirst: true, isLast: true };
    const n2 =
        (_b2 = (_a2 = t2.value.currentQuiz.questions) == null ? void 0 : _a2.length) != null
          ? _b2
          : 0,
      r2 = t2.value.currentQuestionIndex;
    return { canGoBack: r2 > 0, canGoNext: r2 < n2 - 1, isFirst: 0 === r2, isLast: r2 === n2 - 1 };
  }),
  sk = tk.fn(
    Effect.fn(function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = t2.get(rk),
        r2 = t2.get(ik);
      if (!Result.isSuccess(n2) || void 0 === r2) return;
      const i2 = yield* ek.selectAnswer(n2.value, r2.id, e20),
        o2 = { ...n2.value, ...i2 };
      t2.set(rk, o2);
    }),
  ),
  ck = tk.fn(
    Effect.fn(function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = t2.get(rk);
      if (!Result.isSuccess(n2) || void 0 === n2.value.currentQuiz) return;
      const r2 = n2.value.currentQuiz.questions;
      if (void 0 === r2) return;
      const i2 = yield* ek.navigateToQuestion(n2.value, n2.value.currentQuestionIndex, e20, r2),
        o2 = { ...n2.value, ...i2, currentQuestionIndex: e20 };
      t2.set(rk, o2);
    }),
  ),
  lk = tk.fn(
    Effect.fn(function* () {
      const e20 = yield* Registry.AtomRegistry,
        t2 = e20.get(rk);
      if (!Result.isSuccess(t2) || void 0 === t2.value.currentQuiz) return;
      yield* Effect.log("Quiz submission - Current session state:", {
        level: LogLevel.Info,
        annotations: { sessionState: JSON.stringify(t2.value, null, 2) },
      });
      const n2 = yield* ek.submitQuiz(t2.value),
        r2 = { ...t2.value, ...n2 },
        i2 = yield* DateTime.now,
        o2 = Object.entries(r2.responses).map(([e21, t3]) => ({
          questionId: e21,
          value: t3,
          answeredAt: i2,
        })),
        a2 = {
          quizId: t2.value.currentQuiz.id,
          answers: o2,
          sessionMetadata: r2.sessionMetadata,
          interactionLogs: r2.logs,
          metadata: void 0,
        },
        s2 = yield* ba$1,
        c2 = yield* s2.http.Responses.upsert({ payload: a2 });
      try {
        const e21 = (yield* s2.http.AnalysisEngine.list()).find((e22) => e22.isActive);
        if (void 0 !== e21) {
          yield* Effect.log("Auto-analyzing response with engine:", {
            level: LogLevel.Info,
            annotations: { responseId: c2.id, engineId: e21.id, engineName: e21.name },
          });
          const t3 = yield* s2.http.Analysis.analyze({
            payload: { engineId: e21.id, request: { responseId: c2.id, engineId: e21.id } },
          });
          yield* Effect.log("Auto-analysis completed successfully:", {
            level: LogLevel.Info,
            annotations: { analysisId: t3.id, responseId: c2.id, engineId: e21.id },
          });
        } else
          yield* Effect.log("No active analysis engine found - skipping auto-analysis", {
            level: LogLevel.Warning,
          });
      } catch (l2) {
        yield* Effect.log("Auto-analysis failed:", {
          level: LogLevel.Error,
          annotations: { error: l2 instanceof Error ? l2.message : String(l2), responseId: c2.id },
        });
      }
      yield* Effect.log("Quiz submission - Final session state:", {
        level: LogLevel.Info,
        annotations: { finalSessionState: JSON.stringify(r2, null, 2) },
      }),
        e20.set(rk, r2);
    }),
  ),
  uk = tk.fn(
    Effect.fn(function* (e20) {
      const t2 = yield* Registry.AtomRegistry,
        n2 = { ...(yield* ek.initializeSession(e20)), currentQuestionIndex: 0, currentQuiz: e20 };
      t2.set(rk, n2);
    }),
  ),
  fk = {
    primaryPointValue: 10,
    secondaryPointValue: 5,
    primaryPointWeight: 1,
    secondaryPointWeight: 1,
    primaryDistanceFalloff: 0.1,
    secondaryDistanceFalloff: 0.5,
    beta: 0.8,
    primaryMinPoints: 0,
    secondaryMinPoints: 0,
    idealAnswerOverlay: false,
    progressBarColors: false,
  };
tk.atom(Effect.sync(() => fk)), tk.atom(Effect.sync(() => false));
const dk = () => (useAtomMount(tk), null);

export {
  $b as $,
  qb as A,
  nn as B,
  CO as C,
  jl as D,
  ql as E,
  Fb as F,
  Ed as G,
  HM as H,
  IM as I,
  JP as J,
  Kd as K,
  Lb as L,
  Dx as M,
  NM as N,
  Of as O,
  Zx as P,
  OM as Q,
  RM as R,
  Sf as S,
  TM as T,
  Ub as U,
  mM as V,
  mf as W,
  If as X,
  by as Y,
  Zh as Z,
  _M as _,
  ok as a,
  ak as b,
  JM as c,
  dk as d,
  ck as e,
  aP as f,
  uP as g,
  hP as h,
  ik as i,
  jO as j,
  IO as k,
  lk as l,
  hM as m,
  wO as n,
  oP as o,
  wv as p,
  dd as q,
  rk as r,
  sk as s,
  bO as t,
  uk as u,
  vM as v,
  wP as w,
  lw as x,
  xw as y,
  fb as z,
};
//# sourceMappingURL=quiz-taker-atoms-BE0xmtWz.mjs.map
