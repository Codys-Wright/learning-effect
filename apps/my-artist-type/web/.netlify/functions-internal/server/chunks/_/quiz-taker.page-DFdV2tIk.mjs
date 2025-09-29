import { Result, useAtomRefresh, useAtomSet, useAtomValue } from "@effect-atom/atom-react";
import { Config, ConfigProvider, DateTime, Effect } from "effect";
import { RotateCcwIcon, SettingsIcon } from "lucide-react";
import g__default from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { h } from "./nav-user-6r4i62oK.mjs";
import {
  b as ak,
  f as aP,
  e as ck,
  d as dk,
  H as HM,
  h as hP,
  i as ik,
  c as JM,
  j as jO,
  l as lk,
  a as ok,
  r as rk,
  s as sk,
  u as uk,
  g as uP,
  v as vM,
  w as wP,
} from "./quiz-taker-atoms-BE0xmtWz.mjs";
import { T as aA, A as ga, B as ii, I as li, D as SR, C as tf, d as va } from "./ssr.mjs";

const O = (e2) => {
    const a2 = (() => {
      try {
        const e3 = ConfigProvider.fromMap(/* @__PURE__ */ new Map()),
          a3 = Effect.runSync(Effect.withConfigProvider(ga, e3));
        return {
          primaryPointValue: Number(a3.primaryPointValue),
          secondaryPointValue: Number(a3.secondaryPointValue),
          primaryPointWeight: Number(a3.primaryPointWeight),
          secondaryPointWeight: Number(a3.secondaryPointWeight),
          primaryDistanceFalloff: Number(a3.primaryDistanceFalloff),
          secondaryDistanceFalloff: Number(a3.secondaryDistanceFalloff),
          beta: Number(a3.beta),
          primaryMinPoints: Number(a3.primaryMinPoints),
          secondaryMinPoints: Number(a3.secondaryMinPoints),
        };
      } catch {
        return {};
      }
    })();
    if (void 0 === (e2 == null ? void 0 : e2.scoringConfig)) return a2;
    const t2 = e2.scoringConfig,
      n2 = {
        primaryPointValue: t2.primaryPointValue,
        secondaryPointValue: t2.secondaryPointValue,
        primaryPointWeight: t2.primaryPointWeight,
        secondaryPointWeight: t2.secondaryPointWeight,
        primaryDistanceFalloff: t2.primaryDistanceFalloff,
        secondaryDistanceFalloff: t2.secondaryDistanceFalloff,
        beta: t2.beta,
      };
    return (
      void 0 !== a2.primaryMinPoints && (n2.primaryMinPoints = a2.primaryMinPoints),
      void 0 !== a2.secondaryMinPoints && (n2.secondaryMinPoints = a2.secondaryMinPoints),
      n2
    );
  },
  Q = {},
  R = [
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
  ],
  G = () => {
    return {};
  },
  $ = ({ description: t2, label: n2, max: i2, min: r2, onChange: s2, step: o2 = 0.1, value: l2 }) =>
    jsxs("div", {
      className: "space-y-1",
      children: [
        jsx(jO, { className: "text-sm font-medium", children: n2 }),
        void 0 !== t2 && jsx("p", { className: "text-xs text-muted-foreground", children: t2 }),
        jsx(li, {
          type: "number",
          value: l2,
          onChange: (e2) => {
            const a2 = parseFloat(e2.target.value);
            s2(isNaN(a2) ? 0 : a2);
          },
          min: r2,
          max: i2,
          step: o2,
          className: "h-8",
        }),
      ],
    }),
  H = ({ onChange: t2, type: n2, value: i2 }) => {
    const r2 = n2.charAt(0).toUpperCase() + n2.slice(1),
      [s2, o2] = g__default.useState(i2),
      l2 = g__default.useRef(void 0);
    g__default.useEffect(() => {
      o2(i2);
    }, [i2]);
    const c2 = g__default.useCallback(
      (e2) => {
        o2(e2),
          void 0 !== l2.current && clearTimeout(l2.current),
          (l2.current = setTimeout(() => {
            t2(e2);
          }, 300));
      },
      [t2],
    );
    return (
      g__default.useEffect(
        () => () => {
          void 0 !== l2.current && clearTimeout(l2.current);
        },
        [],
      ),
      jsxs("div", {
        className: "space-y-2",
        children: [
          jsx(jO, { className: "text-sm font-medium", children: r2 }),
          jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              jsx("div", {
                className: "w-8 h-8 rounded border border-border",
                style: { backgroundColor: s2 },
              }),
              jsx("input", {
                type: "color",
                value: s2,
                onChange: (e2) => {
                  c2(e2.target.value);
                },
                className: "w-12 h-8 rounded border border-border cursor-pointer",
              }),
            ],
          }),
        ],
      })
    );
  },
  U = ({ config: t2, engine: n2, isVisible: i2, onConfigChange: r2, onToggleVisibility: s2 }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    const d2 = O(n2),
      [m2, u2] = g__default.useState({});
    g__default.useEffect(() => {
      u2(G());
    }, []);
    const p2 = (e2) => {
        const a2 = { ...t2, ...e2 };
        r2(a2);
      },
      v2 = (e2, a2) => {
        u2((t3) => ({ ...t3, [e2]: a2 })), p2({ artistColors: { ...t2.artistColors, [e2]: a2 } });
      };
    return i2
      ? jsxs(tf, {
          className: "fixed bottom-4 left-4 w-96 max-h-[80vh] overflow-hidden z-50 shadow-lg",
          children: [
            jsxs(tf.Header, {
              className: "pb-2",
              children: [
                jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    jsxs(tf.Title, {
                      className: "text-sm flex items-center gap-2",
                      children: [jsx(SettingsIcon, { className: "h-4 w-4" }), "Analysis Dev Panel"],
                    }),
                    jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [
                        jsx(ii, {
                          size: "sm",
                          title: "Reset to defaults",
                          variant: "ghost",
                          onClick: () => {
                            r2(Q);
                          },
                          children: jsx(RotateCcwIcon, { className: "h-3 w-3" }),
                        }),
                        jsx(ii, {
                          size: "sm",
                          variant: "ghost",
                          onClick: () => {
                            s2();
                          },
                          children: "\xD7",
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    jsx(h, {
                      variant: "secondary",
                      className: "text-xs",
                      children: "Live Preview",
                    }),
                    jsx(h, {
                      variant: "outline",
                      className: "text-xs",
                      children: "Ctrl+D to toggle",
                    }),
                  ],
                }),
              ],
            }),
            jsx(tf.Content, {
              className: "pt-0 max-h-[60vh] overflow-hidden",
              children: jsxs(aA, {
                defaultValue: "analysis",
                className: "h-full",
                children: [
                  jsxs(aA.List, {
                    className: "grid w-full grid-cols-2",
                    children: [
                      jsx(aA.Trigger, { value: "analysis", children: "Analysis" }),
                      jsx(aA.Trigger, { value: "ui", children: "UI" }),
                    ],
                  }),
                  jsx(aA.Content, {
                    value: "analysis",
                    className: "mt-4 max-h-[50vh] overflow-y-auto",
                    children: jsxs("div", {
                      className: "space-y-4",
                      children: [
                        jsx($, {
                          description: "Base points awarded for perfect primary ideal answers",
                          label: "Primary Point Value",
                          max: 50,
                          min: 1,
                          onChange: (e2) => {
                            p2({ primaryPointValue: e2 });
                          },
                          step: 1,
                          value:
                            (_b =
                              (_a = t2.primaryPointValue) != null ? _a : d2.primaryPointValue) !=
                            null
                              ? _b
                              : 0,
                        }),
                        jsx($, {
                          description: "Base points awarded for perfect secondary ideal answers",
                          label: "Secondary Point Value",
                          max: 50,
                          min: 1,
                          onChange: (e2) => {
                            p2({ secondaryPointValue: e2 });
                          },
                          step: 1,
                          value:
                            (_d =
                              (_c = t2.secondaryPointValue) != null
                                ? _c
                                : d2.secondaryPointValue) != null
                              ? _d
                              : 0,
                        }),
                        jsx($, {
                          description:
                            "Multiplier for primary questions (most important questions)",
                          label: "Primary Point Weight",
                          max: 3,
                          min: 0.1,
                          onChange: (e2) => {
                            p2({ primaryPointWeight: e2 });
                          },
                          step: 0.1,
                          value:
                            (_f =
                              (_e = t2.primaryPointWeight) != null ? _e : d2.primaryPointWeight) !=
                            null
                              ? _f
                              : 0,
                        }),
                        jsx($, {
                          description: "Multiplier for secondary questions (supporting questions)",
                          label: "Secondary Point Weight",
                          max: 3,
                          min: 0.1,
                          onChange: (e2) => {
                            p2({ secondaryPointWeight: e2 });
                          },
                          step: 0.1,
                          value:
                            (_h =
                              (_g = t2.secondaryPointWeight) != null
                                ? _g
                                : d2.secondaryPointWeight) != null
                              ? _h
                              : 0,
                        }),
                        jsx($, {
                          description:
                            "Percentage of points lost per step away from ideal answers. 0% = only exact matches get points, 100% = lose all points after 1 step",
                          label: "Primary Distance Falloff (%)",
                          max: 100,
                          min: 0,
                          onChange: (e2) => {
                            p2({ primaryDistanceFalloff: e2 / 100 });
                          },
                          step: 5,
                          value: Math.round(
                            100 *
                              ((_j =
                                (_i = t2.primaryDistanceFalloff) != null
                                  ? _i
                                  : d2.primaryDistanceFalloff) != null
                                ? _j
                                : 0),
                          ),
                        }),
                        jsx($, {
                          description:
                            "Percentage of points lost per step away from ideal answers. 0% = only exact matches get points, 100% = lose all points after 1 step",
                          label: "Secondary Distance Falloff (%)",
                          max: 100,
                          min: 0,
                          onChange: (e2) => {
                            p2({ secondaryDistanceFalloff: e2 / 100 });
                          },
                          step: 5,
                          value: Math.round(
                            100 *
                              ((_l =
                                (_k = t2.secondaryDistanceFalloff) != null
                                  ? _k
                                  : d2.secondaryDistanceFalloff) != null
                                ? _l
                                : 0),
                          ),
                        }),
                        jsx($, {
                          description:
                            "Higher number separates the high percentages from the lower ones on the graph visually to reveal a more distinct winner",
                          label: "Beta",
                          max: 5,
                          min: 0.1,
                          onChange: (e2) => {
                            p2({ beta: e2 });
                          },
                          step: 0.1,
                          value: (_n = (_m = t2.beta) != null ? _m : d2.beta) != null ? _n : 0,
                        }),
                        jsx($, {
                          description:
                            "Minimum points that can be awarded for primary questions (floor value, can be negative)",
                          label: "Primary Min Points",
                          max: 10,
                          min: -10,
                          onChange: (e2) => {
                            p2({ primaryMinPoints: e2 });
                          },
                          step: 0.5,
                          value:
                            (_p = (_o = t2.primaryMinPoints) != null ? _o : d2.primaryMinPoints) !=
                            null
                              ? _p
                              : 0,
                        }),
                        jsx($, {
                          description:
                            "Minimum points that can be awarded for secondary questions (floor value, can be negative)",
                          label: "Secondary Min Points",
                          max: 10,
                          min: -10,
                          onChange: (e2) => {
                            p2({ secondaryMinPoints: e2 });
                          },
                          step: 0.5,
                          value:
                            (_r =
                              (_q = t2.secondaryMinPoints) != null ? _q : d2.secondaryMinPoints) !=
                            null
                              ? _r
                              : 0,
                        }),
                      ],
                    }),
                  }),
                  jsx(aA.Content, {
                    value: "ui",
                    className: "mt-4 max-h-[50vh] overflow-y-auto",
                    children: jsxs("div", {
                      className: "space-y-4",
                      children: [
                        jsxs("div", {
                          className: "border-b pb-4",
                          children: [
                            jsx("h4", {
                              className: "text-sm font-medium mb-3",
                              children: "UI Controls",
                            }),
                            jsxs("div", {
                              className: "space-y-3",
                              children: [
                                jsxs("div", {
                                  className: "flex items-center justify-between",
                                  children: [
                                    jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsx(jO, {
                                          className: "text-sm font-medium",
                                          children: "Ideal Answer Overlay",
                                        }),
                                        jsx("p", {
                                          className: "text-xs text-muted-foreground",
                                          children:
                                            "Show ideal answer dots and bars on question cards",
                                        }),
                                      ],
                                    }),
                                    jsx(ii, {
                                      size: "sm",
                                      variant: ((_s = t2.idealAnswerOverlay) != null ? _s : 1)
                                        ? "default"
                                        : "outline",
                                      onClick: () => {
                                        var _a2;
                                        p2({
                                          idealAnswerOverlay: !((_a2 = t2.idealAnswerOverlay) !=
                                          null
                                            ? _a2
                                            : 1),
                                        });
                                      },
                                      children: ((_t = t2.idealAnswerOverlay) != null ? _t : 1)
                                        ? "ON"
                                        : "OFF",
                                    }),
                                  ],
                                }),
                                jsxs("div", {
                                  className: "flex items-center justify-between",
                                  children: [
                                    jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsx(jO, {
                                          className: "text-sm font-medium",
                                          children: "Progress Bar Colors",
                                        }),
                                        jsx("p", {
                                          className: "text-xs text-muted-foreground",
                                          children: "Color progress bar segments by artist type",
                                        }),
                                      ],
                                    }),
                                    jsx(ii, {
                                      size: "sm",
                                      variant: ((_u = t2.progressBarColors) != null ? _u : 1)
                                        ? "default"
                                        : "outline",
                                      onClick: () => {
                                        var _a2;
                                        p2({
                                          progressBarColors: !((_a2 = t2.progressBarColors) != null
                                            ? _a2
                                            : 1),
                                        });
                                      },
                                      children: ((_v = t2.progressBarColors) != null ? _v : 1)
                                        ? "ON"
                                        : "OFF",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxs("div", {
                          children: [
                            jsx("h4", {
                              className: "text-sm font-medium mb-3",
                              children: "Artist Type Colors",
                            }),
                            jsx("div", {
                              className: "space-y-3",
                              children: R.map((e2) => {
                                var _a2;
                                return jsx(
                                  H,
                                  {
                                    type: e2,
                                    value: (_a2 = m2[e2]) != null ? _a2 : "#000000",
                                    onChange: (a2) => {
                                      v2(e2, a2);
                                    },
                                  },
                                  e2,
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : jsxs(ii, {
          className: "fixed bottom-4 left-4 z-50",
          size: "sm",
          variant: "outline",
          onClick: () => {
            s2();
          },
          children: [jsx(SettingsIcon, { className: "h-4 w-4 mr-2" }), "Dev Panel"],
        });
  },
  K = (e2) => {
    const a2 = (() => {
      const e3 = {};
      return (
        Object.keys(vM).forEach((a3) => {
          const t2 = a3.toLowerCase().replace(/\s+/g, "-");
          e3[t2] = a3;
        }),
        e3
      );
    })();
    return e2.map((e3) => {
      var _a;
      const t2 = a2[e3.endingId];
      return {
        artistType: (_a = void 0 !== t2 ? vM[t2] : e3.endingId) != null ? _a : e3.endingId,
        percentage: e3.percentage,
        points: e3.points,
        fullName: t2 != null ? t2 : e3.endingId,
        databaseId: e3.endingId,
      };
    });
  },
  Y = (e2, a2, t2, n2) => {
    var _a;
    const i2 = ((e3) => Object.entries(e3).map(([e4, a3]) => ({ questionId: e4, value: a3 })))(
        e2,
        a2.questions,
      ),
      r2 = Effect.runSync(DateTime.now),
      s2 = {
        id: "local-response",
        quizId: a2.id,
        answers: i2,
        sessionMetadata: { startedAt: r2 },
        createdAt: r2,
        updatedAt: r2,
        deletedAt: null,
      };
    if (void 0 === t2) throw new Error("Analysis engine is required for local analysis");
    const o2 = t2,
      l2 =
        void 0 !== n2
          ? ((c2 = n2),
            Config.all({
              primaryPointValue:
                void 0 !== c2.primaryPointValue
                  ? Config.succeed(c2.primaryPointValue)
                  : ga.pipe(Config.map((e3) => e3.primaryPointValue)),
              secondaryPointValue:
                void 0 !== c2.secondaryPointValue
                  ? Config.succeed(c2.secondaryPointValue)
                  : ga.pipe(Config.map((e3) => e3.secondaryPointValue)),
              primaryPointWeight:
                void 0 !== c2.primaryPointWeight
                  ? Config.succeed(c2.primaryPointWeight)
                  : ga.pipe(Config.map((e3) => e3.primaryPointWeight)),
              secondaryPointWeight:
                void 0 !== c2.secondaryPointWeight
                  ? Config.succeed(c2.secondaryPointWeight)
                  : ga.pipe(Config.map((e3) => e3.secondaryPointWeight)),
              primaryDistanceFalloff:
                void 0 !== c2.primaryDistanceFalloff
                  ? Config.succeed(c2.primaryDistanceFalloff)
                  : ga.pipe(Config.map((e3) => e3.primaryDistanceFalloff)),
              secondaryDistanceFalloff:
                void 0 !== c2.secondaryDistanceFalloff
                  ? Config.succeed(c2.secondaryDistanceFalloff)
                  : ga.pipe(Config.map((e3) => e3.secondaryDistanceFalloff)),
              beta:
                void 0 !== c2.beta ? Config.succeed(c2.beta) : ga.pipe(Config.map((e3) => e3.beta)),
              primaryMinPoints:
                void 0 !== c2.primaryMinPoints
                  ? Config.succeed(c2.primaryMinPoints)
                  : ga.pipe(Config.map((e3) => Number(e3.primaryMinPoints))),
              secondaryMinPoints:
                void 0 !== c2.secondaryMinPoints
                  ? Config.succeed(c2.secondaryMinPoints)
                  : ga.pipe(Config.map((e3) => Number(e3.secondaryMinPoints))),
              disableSecondaryPoints: Config.succeed(false),
              minPercentageThreshold: Config.succeed(0),
              enableQuestionBreakdown: Config.succeed(true),
              maxEndingResults: Config.succeed(10),
            }))
          : void 0;
    var c2;
    const d2 = (
        (_a = Effect.runSync(
          Effect.provide(
            va.pipe(Effect.flatMap((e3) => e3.analyzeResponse(o2, a2, s2, l2))),
            va.Default,
          ),
        ).endingResults) != null
          ? _a
          : []
      ).map((e3) => ({ endingId: e3.endingId, points: e3.points, percentage: e3.percentage })),
      p2 = K(d2),
      h2 = p2
        .sort((e3, a3) => a3.percentage - e3.percentage)
        .map((e3) => `${e3.artistType}: ${e3.percentage.toFixed(1)}%`)
        .join(", ");
    return console.log("\u{1F3A8} Artist Type Distribution:", h2), p2;
  },
  J = ({ children: e2 }) => jsx("div", { className: "relative w-full px-4 py-8", children: e2 }),
  X = ({ quizzes: t2 }) => {
    var _a, _b, _c;
    const r2 = useAtomValue(rk),
      c2 = useAtomValue(ik),
      d2 = useAtomValue(ok),
      m2 = useAtomValue(ak),
      u2 = useAtomValue(JM),
      f2 = useAtomValue(wP),
      g2 = useAtomSet(sk),
      v2 = useAtomSet(ck),
      b2 = useAtomSet(lk),
      x2 = useAtomSet(uk),
      [N2, P2] = g__default.useState({}),
      [j2, T2] = g__default.useState(false),
      [B2, E2] = g__default.useState(true);
    g__default.useEffect(() => {
      const e2 = (e3) => {
        (e3.ctrlKey || e3.metaKey) && "d" === e3.key && (e3.preventDefault(), T2((e4) => !e4));
      };
      return (
        window.addEventListener("keydown", e2),
        () => {
          window.removeEventListener("keydown", e2);
        }
      );
    }, []);
    const L2 = Result.isSuccess(r2)
        ? r2.value
        : {
            responses: {},
            logs: [],
            sessionMetadata: { startedAt: /* @__PURE__ */ new Date() },
            currentQuestionIndex: 0,
            currentQuiz: void 0,
          },
      O2 = L2.currentQuestionIndex,
      Q2 = L2.currentQuiz,
      R2 = Result.isSuccess(u2) ? u2.value.find((e2) => e2.isActive) : void 0,
      G2 = g__default.useMemo(() => {
        if (void 0 === Q2 || void 0 === R2) return [];
        try {
          return Y(L2.responses, Q2, R2, N2);
        } catch (e2) {
          return console.warn("Local analysis failed:", e2), [];
        }
      }, [L2.responses, Q2, R2, N2]),
      $2 = g__default.useCallback(
        (e2) =>
          void 0 === R2
            ? []
            : R2.endings.flatMap((a2) =>
                a2.questionRules
                  .filter((a3) => a3.questionId === e2)
                  .map((e3) => ({
                    endingId: a2.endingId,
                    endingName: a2.name,
                    idealAnswers: [...e3.idealAnswers],
                    isPrimary: e3.isPrimary,
                  })),
              ),
        [R2],
      ),
      H2 = g__default.useMemo(() => (void 0 === c2 ? [] : $2(c2.id)), [c2, $2]),
      K2 = g__default.useMemo(() => {
        if (!Result.isSuccess(f2)) return;
        const e2 = f2.value;
        return void 0 !== e2 ? t2.find((a2) => a2.id === e2.quizId) : void 0;
      }, [f2, t2]);
    if (
      (g__default.useEffect(() => {
        void 0 !== K2 && void 0 === Q2 && x2(K2);
      }, [K2, Q2, x2]),
      !Result.isSuccess(u2))
    )
      return jsx("div", {
        className: "flex items-center justify-center min-h-[50vh]",
        children: jsxs("div", {
          className: "text-center",
          children: [
            jsx("h2", {
              className: "text-xl font-semibold mb-2",
              children: "Loading Analysis Engine...",
            }),
            jsx("p", {
              className: "text-muted-foreground",
              children: "Setting up analysis capabilities",
            }),
          ],
        }),
      });
    if (void 0 === R2)
      return jsx("div", {
        className: "flex items-center justify-center min-h-[50vh]",
        children: jsxs("div", {
          className: "text-center",
          children: [
            jsx("h2", {
              className: "text-xl font-semibold mb-2",
              children: "Analysis Engine Not Found",
            }),
            jsx("p", {
              className: "text-muted-foreground",
              children: "No active analysis engine is available",
            }),
          ],
        }),
      });
    if (!Result.isSuccess(f2))
      return Result.isWaiting(f2)
        ? jsx("div", {
            className: "flex items-center justify-center min-h-[50vh]",
            children: jsxs("div", {
              className: "text-center",
              children: [
                jsx("h2", { className: "text-xl font-semibold mb-2", children: "Loading Quiz..." }),
                jsx("p", {
                  className: "text-muted-foreground",
                  children: "Finding the active My Artist Type quiz",
                }),
              ],
            }),
          })
        : jsx("div", {
            className: "flex items-center justify-center min-h-[50vh]",
            children: jsxs("div", {
              className: "text-center",
              children: [
                jsx("h2", {
                  className: "text-xl font-semibold mb-2",
                  children: "Quiz Configuration Error",
                }),
                jsx("p", {
                  className: "text-muted-foreground",
                  children: "Could not find active quiz configuration",
                }),
              ],
            }),
          });
    if (void 0 === K2)
      return jsx("div", {
        className: "flex items-center justify-center min-h-[50vh]",
        children: jsxs("div", {
          className: "text-center",
          children: [
            jsx("h2", { className: "text-xl font-semibold mb-2", children: "Quiz Not Found" }),
            jsx("p", {
              className: "text-muted-foreground",
              children: "Could not find the active My Artist Type quiz",
            }),
          ],
        }),
      });
    const X2 = K2.questions;
    if (0 === X2.length)
      return jsx("div", {
        className: "flex items-center justify-center min-h-[50vh]",
        children: jsxs("div", {
          className: "text-center",
          children: [
            jsx("h2", { className: "text-xl font-semibold mb-2", children: "No Questions Found" }),
            jsx("p", {
              className: "text-muted-foreground",
              children: "This quiz doesn't have any questions yet.",
            }),
          ],
        }),
      });
    if (void 0 === c2)
      return jsx("div", {
        className: "flex items-center justify-center min-h-[50vh]",
        children: jsxs("div", {
          className: "text-center",
          children: [
            jsx("h2", { className: "text-xl font-semibold mb-2", children: "Question Not Found" }),
            jsxs("p", {
              className: "text-muted-foreground",
              children: ["Could not find question at index ", O2],
            }),
          ],
        }),
      });
    const Z2 = () =>
      jsxs(SR, {
        children: [
          jsx(SR.Trigger, {
            asChild: true,
            children: jsxs(ii, {
              variant: "ghost",
              size: "sm",
              className: "h-8 w-8 p-0",
              children: [
                jsx(SettingsIcon, { className: "h-4 w-4" }),
                jsx("span", { className: "sr-only", children: "Open settings" }),
              ],
            }),
          }),
          jsxs(SR.Content, {
            align: "end",
            className: "w-56",
            children: [
              jsx(SR.Label, { children: "Quiz Settings" }),
              jsx(SR.Separator, {}),
              jsx(SR.CheckboxItem, {
                checked: B2,
                onCheckedChange: E2,
                children: "Auto-advance to next question",
              }),
              jsx(SR.Separator, {}),
              jsx(SR.Item, {
                onClick: () => {
                  T2(!j2);
                },
                children: "Toggle Dev Panel",
              }),
            ],
          }),
        ],
      });
    return jsxs(J, {
      children: [
        jsxs("div", {
          className: "w-full max-w-7xl mx-auto grid grid-cols-3 gap-8",
          children: [
            jsxs("div", {
              className: "col-span-2 flex flex-col gap-8",
              children: [
                jsx(tf, {
                  className: "p-4",
                  children: jsxs("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [
                      jsxs("div", {
                        className: "flex items-center gap-4 flex-1",
                        children: [
                          jsxs("span", {
                            className:
                              "text-sm font-medium text-muted-foreground whitespace-nowrap w-16 text-right",
                            children: [O2 + 1, " of ", X2.length],
                          }),
                          jsx(aP, {
                            questions: X2.map((e2) => ({ id: e2.id, category: e2.id })),
                            currentIndex: O2,
                            onQuestionClick: (e2) => {
                              v2(e2);
                            },
                            categoryColorClass: (e2, a2, t3) => {
                              if (true !== a2) return "bg-white dark:bg-black";
                              const n2 = [
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
                              switch (n2[(t3 != null ? t3 : 0) % n2.length]) {
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
                            colorOn: (_a = N2.progressBarColors) != null ? _a : true,
                          }),
                        ],
                      }),
                      jsx(Z2, {}),
                    ],
                  }),
                }),
                jsx("div", {
                  className: "flex items-center justify-center min-h-[70vh]",
                  children: jsx(uP, {
                    title: c2.title,
                    content: (_b = c2.description) != null ? _b : "",
                    minLabel: "rating" === c2.data.type ? c2.data.minLabel : "Min",
                    maxLabel: "rating" === c2.data.type ? c2.data.maxLabel : "Max",
                    min: "rating" === c2.data.type ? c2.data.minRating : 1,
                    max: "rating" === c2.data.type ? c2.data.maxRating : 10,
                    selectedValues: void 0 !== d2 ? [d2] : [],
                    idealAnswers: H2,
                    showIdealAnswers: (_c = N2.idealAnswerOverlay) != null ? _c : true,
                    onRatingSelect: (e2) => {
                      g2(e2);
                    },
                    onBack: () => {
                      if (m2.canGoBack) {
                        v2(O2 - 1);
                      }
                    },
                    onNext: () => {
                      if (m2.canGoNext) {
                        v2(O2 + 1);
                      }
                    },
                    onSubmit: () => {
                      b2(),
                        alert(
                          `Quiz submitted! You answered ${Object.keys(L2.responses).length} out of ${X2.length} questions.`,
                        );
                    },
                    canGoBack: m2.canGoBack,
                    canGoNext: m2.canGoNext,
                    isLastQuestion: m2.isLast,
                    autoAdvanceEnabled: B2,
                  }),
                }),
              ],
            }),
            jsx("div", {
              className: "col-span-1 flex items-center justify-center",
              children: jsx("div", {
                className: "sticky top-4 w-full",
                children:
                  G2.length > 0
                    ? jsx("div", {
                        className:
                          "relative w-full h-full min-w-96 rounded-[32px] border border-neutral-200/50 bg-neutral-100 pt-4 px-2 pb-2 backdrop-blur-lg md:pt-6 md:px-4 md:pb-4 dark:border-neutral-700 dark:bg-neutral-800/50 overflow-visible",
                        children: jsx(HM, {
                          data: G2,
                          showBarChart: true,
                          barChartHeight: "h-48",
                          barChartMaxItems: 10,
                          className: "h-full w-full",
                          contentClassName: "h-full w-full",
                          transparent: true,
                          fill: true,
                          ...(void 0 !== N2.beta && { beta: N2.beta }),
                        }),
                      })
                    : jsx("div", {
                        className:
                          "relative w-full h-full min-w-96 rounded-[32px] border border-neutral-200/50 bg-neutral-100 pt-4 px-2 pb-2 backdrop-blur-lg md:pt-6 md:px-4 md:pb-4 dark:border-neutral-700 dark:bg-neutral-800/50 overflow-visible",
                        children: jsx("div", {
                          className:
                            "flex items-center justify-center h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg",
                          children: jsxs("div", {
                            className: "text-center text-muted-foreground",
                            children: [
                              jsx("p", {
                                className: "text-sm",
                                children: "Analysis will appear here",
                              }),
                              jsx("p", {
                                className: "text-xs mt-1",
                                children: "Answer questions to see your artist type",
                              }),
                            ],
                          }),
                        }),
                      }),
              }),
            }),
          ],
        }),
        jsx(U, {
          config: N2,
          ...(void 0 !== R2 && { engine: R2 }),
          isVisible: j2,
          onConfigChange: (e2) => {
            P2(e2);
          },
          onToggleVisibility: () => {
            T2(!j2);
          },
        }),
      ],
    });
  },
  Z = () => {
    const t2 = useAtomRefresh(hP.remote);
    return jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        jsx("p", { children: "Something went wrong..." }),
        jsx(ii, { onClick: t2, children: "Retry" }),
      ],
    });
  },
  _ = () => {
    const r2 = useAtomValue(hP);
    return jsxs(Fragment, {
      children: [
        jsx(dk, {}),
        Result.builder(r2)
          .onFailure(() => jsx(Z, {}))
          .onSuccess((e2) => jsx(X, { quizzes: e2 }))
          .onWaiting(
            (e2) => Result.isInitial(e2) && e2.waiting && jsx("p", { children: "Loading..." }),
          )
          .orNull(),
      ],
    });
  };

export { _ };
//# sourceMappingURL=quiz-taker.page-DFdV2tIk.mjs.map
