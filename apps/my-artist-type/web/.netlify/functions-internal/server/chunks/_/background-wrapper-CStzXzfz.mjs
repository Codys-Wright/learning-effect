import { AnimatePresence, motion } from "motion/react";
import g__default, { useRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { m as hM, V as mM } from "./quiz-taker-atoms-BE0xmtWz.mjs";
import { x as Ka } from "./ssr.mjs";

const d = ({ children: r2, className: n2 = "", showBeams: o2 = true, showGrids: s2 = true }) => {
    const c2 = useRef(null),
      d2 = useRef(null);
    return jsxs("div", {
      ref: d2,
      className: Ka(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 min-w-screen",
        n2,
      ),
      children: [
        s2 && jsx(f, {}),
        o2 &&
          jsxs(Fragment, {
            children: [
              jsx(u, {
                beamOptions: {
                  initialX: "-25vw",
                  translateX: "80vw",
                  translateY: "120vh",
                  duration: 7,
                  repeatDelay: 3,
                },
                containerRef: c2,
                parentRef: d2,
              }),
              jsx(u, {
                beamOptions: {
                  initialX: "-12vw",
                  translateX: "100vw",
                  translateY: "120vh",
                  duration: 4,
                  repeatDelay: 3,
                },
                containerRef: c2,
                parentRef: d2,
              }),
              jsx(u, {
                beamOptions: {
                  initialX: "12vw",
                  translateX: "120vw",
                  translateY: "120vh",
                  duration: 5,
                  repeatDelay: 3,
                },
                containerRef: c2,
                parentRef: d2,
              }),
              jsx(u, {
                containerRef: c2,
                parentRef: d2,
                beamOptions: {
                  initialX: "25vw",
                  translateX: "140vw",
                  translateY: "120vh",
                  duration: 6,
                  repeatDelay: 3,
                },
              }),
            ],
          }),
        r2,
      ],
    });
  },
  f = () =>
    jsxs("div", {
      className:
        "pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4",
      children: [
        jsxs("div", {
          className: "relative h-full w-full",
          children: [jsx(p, { className: "left-0" }), jsx(p, { className: "left-auto right-0" })],
        }),
        jsxs("div", {
          className: "relative h-full w-full",
          children: [jsx(p, { className: "left-0" }), jsx(p, { className: "left-auto right-0" })],
        }),
        jsxs("div", {
          className:
            "relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800",
          children: [jsx(p, { className: "left-0" }), jsx(p, { className: "left-auto right-0" })],
        }),
        jsxs("div", {
          className: "relative h-full w-full",
          children: [jsx(p, { className: "left-0" }), jsx(p, { className: "left-auto right-0" })],
        }),
      ],
    }),
  u = g__default.forwardRef(({ beamOptions: d2 = {}, containerRef: f2, parentRef: u2 }, p2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const h = useRef(null),
      [v, g] = g__default.useState({ detected: false, coordinates: null }),
      [b, y] = g__default.useState(0),
      [w, x] = g__default.useState(false),
      [N, k] = g__default.useState(["#6366f1"]);
    g__default.useEffect(() => {
      const t2 = Object.keys(hM).map((t3) => mM(t3));
      k(t2);
    }, []);
    const [X, R] = g__default.useState("#6366f1");
    return (
      g__default.useEffect(() => {
        R(mM("Visionary"));
      }, []),
      g__default.useEffect(() => {
        const t2 = setInterval(() => {
          const t3 = h.current,
            e2 = f2.current,
            a2 = u2.current;
          if (null !== t3 && null !== e2 && null !== a2 && !w) {
            const r2 = t3.getBoundingClientRect(),
              n2 = e2.getBoundingClientRect(),
              l2 = a2.getBoundingClientRect(),
              o2 = r2.right >= n2.left && r2.left <= n2.right,
              i2 = Math.abs(r2.bottom - n2.top) <= 6;
            if (o2 && i2) {
              const e3 = r2.left - l2.left + r2.width / 2,
                a3 = n2.top - l2.top;
              g({ detected: true, coordinates: { x: e3, y: a3 } });
              const o3 = N[Math.floor(Math.random() * N.length)];
              void 0 !== o3 && R(o3), x(true), (t3.style.opacity = "0");
            }
          }
        }, 50);
        return () => {
          clearInterval(t2);
        };
      }, [w, f2]),
      g__default.useEffect(() => {
        if (v.detected && null !== v.coordinates) {
          const t2 = setTimeout(() => {
            g({ detected: false, coordinates: null }), x(false);
            const t3 = h.current;
            null !== t3 && (t3.style.opacity = "1"), y((t4) => t4 + 1);
          }, 1400);
          return () => {
            clearTimeout(t2);
          };
        }
      }, [v]),
      jsxs(Fragment, {
        children: [
          jsx(
            motion.div,
            {
              ref: h,
              animate: "animate",
              initial: {
                translateY: (_a = d2.initialY) != null ? _a : "-20vh",
                translateX: (_b = d2.initialX) != null ? _b : "0px",
                rotate: (_c = d2.rotate) != null ? _c : -45,
              },
              variants: {
                animate: {
                  translateY: (_d = d2.translateY) != null ? _d : "120vh",
                  translateX: (_e = d2.translateX) != null ? _e : "100vw",
                  rotate: (_f = d2.rotate) != null ? _f : -45,
                },
              },
              transition: {
                duration: (_g = d2.duration) != null ? _g : 8,
                repeat: 1 / 0,
                repeatType: "loop",
                ease: "linear",
                delay: (_h = d2.delay) != null ? _h : 0,
                repeatDelay: (_i = d2.repeatDelay) != null ? _i : 0,
              },
              className: Ka("absolute left-96 top-20 m-auto h-14 w-px rounded-full", d2.className),
              style: { background: `linear-gradient(to top, ${X}, transparent)` },
            },
            b,
          ),
          jsx(AnimatePresence, {
            children:
              v.detected &&
              null !== v.coordinates &&
              jsx(
                m,
                {
                  className: "",
                  colorHex: X,
                  style: {
                    left: `${v.coordinates.x + 20}px`,
                    top: `${v.coordinates.y}px`,
                    transform: "translate(-50%, -50%)",
                  },
                },
                `${v.coordinates.x}-${v.coordinates.y}`,
              ),
          }),
        ],
      })
    );
  });
u.displayName = "CollisionMechanism";
const m = ({ colorHex: a2 = "#FB8500", ...r2 }) => {
    const n2 = Array.from({ length: 20 }, (t2, e2) => ({
      id: e2,
      initialX: 0,
      initialY: 0,
      directionX: Math.floor(80 * Math.random() - 40),
      directionY: Math.floor(-50 * Math.random() - 10),
    }));
    return jsxs("div", {
      ...r2,
      className: Ka("absolute z-50 h-2 w-2", r2.className),
      children: [
        jsx(motion.div, {
          initial: { opacity: 0 },
          animate: { opacity: [0, 1, 0] },
          exit: { opacity: 0 },
          transition: { duration: 1, ease: "easeOut" },
          className: "absolute -inset-x-10 top-0 m-auto h-[4px] w-10 rounded-full blur-sm",
          style: { background: `linear-gradient(to right, transparent, ${a2}, transparent)` },
        }),
        n2.map((t2) =>
          jsx(
            motion.span,
            {
              initial: { x: t2.initialX, y: t2.initialY, opacity: 1 },
              animate: { x: t2.directionX, y: t2.directionY, opacity: 0 },
              transition: { duration: 1.5 * Math.random() + 0.5, ease: "easeOut" },
              className: "absolute h-1 w-1 rounded-full",
              style: { backgroundColor: a2 },
            },
            t2.id,
          ),
        ),
      ],
    });
  },
  p = ({ className: t2, offset: a2 }) =>
    jsx("div", {
      style: {
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",
        "--offset": a2 != null ? a2 : "150px",
        "--color-dark": "rgba(255, 255, 255, 0.3)",
        maskComposite: "exclude",
      },
      className: Ka(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        t2,
      ),
    });

export { d };
//# sourceMappingURL=background-wrapper-CStzXzfz.mjs.map
