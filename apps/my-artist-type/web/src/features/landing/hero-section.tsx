"use client";
import { artistColorsHex, ArtistTypeGraphCard, type ArtistData } from "@features/quiz/client";
import { cn } from "@ui/shadcn";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Balancer from "react-wrap-balancer";

export function HeroSectionWithBeamsAndGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const generateFakeData = (): Array<ArtistData> => {
    const base: Array<Omit<ArtistData, "percentage" | "points">> = [
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
      {
        artistType: "Tech",
        fullName: "The Tech Artist",
        databaseId: "the-tech-artist",
      },
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
      {
        artistType: "Feeler",
        fullName: "The Feeler Artist",
        databaseId: "the-feeler-artist",
      },
      {
        artistType: "Tortured",
        fullName: "The Tortured Artist",
        databaseId: "the-tortured-artist",
      },
      {
        artistType: "Solo",
        fullName: "The Solo Artist",
        databaseId: "the-solo-artist",
      },
    ];
    // Generate random weights then normalize to sum to 100
    const weights = base.map(() => Math.random() + 0.05); // ensure non-zero
    const sum = weights.reduce((a, b) => a + b, 0);
    const rawPercentages = weights.map((w) => (w / sum) * 100);
    // Round and adjust to ensure exact 100 total
    const rounded = rawPercentages.map((p) => Math.round(p));
    let diff = 100 - rounded.reduce((a, b) => a + b, 0);
    for (let i = 0; diff !== 0 && i < rounded.length; i++) {
      let item = rounded[i];
      if (item !== undefined) {
        item += diff > 0 ? 1 : -1;
        diff += diff > 0 ? -1 : 1;
      }
    }
    return base.map((b, idx) => ({
      ...b,
      percentage: Math.max(0, rounded[idx] ?? 0),
      points: Math.floor(Math.random() * 1000),
    }));
  };

  const [fakeData, setFakeData] = useState<Array<ArtistData> | undefined>(undefined);

  useEffect(() => {
    // Avoid SSR/client mismatch by generating after mount
    setFakeData(generateFakeData());
    const id = setInterval(() => {
      setFakeData(generateFakeData());
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 min-w-screen"
    >
      <BackgroundGrids />
      <CollisionMechanism
        beamOptions={{
          initialX: -400,
          translateX: 600,
          duration: 7,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: -200,
          translateX: 800,
          duration: 4,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: 200,
          translateX: 1200,
          duration: 5,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        containerRef={containerRef}
        parentRef={parentRef}
        beamOptions={{
          initialX: 400,
          translateX: 1400,
          duration: 6,
          repeatDelay: 3,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="relative z-50 mb-4 mt-4 max-w-4xl text-balance text-center text-3xl font-semibold tracking-tight text-gray-700 md:text-7xl lg:text-left dark:text-neutral-300">
            <Balancer>
              Discover your{" "}
              <div className="relative mx-auto inline-block w-max lg:mx-0 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="text-black [text-shadow:0_0_rgba(0,0,0,0.1)] dark:text-white">
                  <span className="">Artist Type</span>
                </div>
              </div>
            </Balancer>
          </h2>
          <p className="relative z-50 mt-4 max-w-xl text-center text-base/6 text-gray-600 lg:text-left dark:text-gray-200">
            "Knowing yourself is the beginning of all wisdom." - Aristotle
          </p>
          <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row md:mb-20 lg:justify-start">
            <a
              href="/quiz"
              className="group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-black p-px px-4 py-2 text-center text-sm font-semibold leading-6 text-white no-underline transition duration-200 sm:w-52 dark:bg-white dark:text-black"
            >
              Take the quiz
            </a>
            <a
              href="/pricing"
              className="shadow-input group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-white p-px px-4 py-2 text-sm font-semibold leading-6 text-black no-underline transition duration-200 hover:-translate-y-0.5 sm:w-52 dark:bg-neutral-800 dark:text-white"
            >
              Explore More
            </a>
          </div>
        </div>
        <div className="lg:col-span-1 w-full h-full">
          <div
            ref={containerRef}
            className="relative w-full h-full min-w-96 rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg md:p-4 dark:border-neutral-700 dark:bg-neutral-800/50"
          >
            <div>
              <ArtistTypeGraphCard
                data={fakeData ?? []}
                showBarChart
                barChartHeight="h-40"
                className="h-full w-full"
                contentClassName="h-full w-full"
                transparent
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BackgroundGrids = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ beamOptions = {}, containerRef, parentRef }, _ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);
  const colorChoices = Object.values(artistColorsHex);
  const pickRandomColor = () => colorChoices[Math.floor(Math.random() * colorChoices.length)];
  const [currentColorHex, setCurrentColorHex] = useState<string>(artistColorsHex.Visionary);

  useEffect(() => {
    const checkCollision = () => {
      const beam = beamRef.current;
      const container = containerRef.current;
      const parent = parentRef.current;

      if (beam && container && parent && !cycleCollisionDetected) {
        const beamRect = beam.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        // Detect intersection with the TOP edge of the container only
        const horizontallyOverlapping =
          beamRect.right >= containerRect.left && beamRect.left <= containerRect.right;
        const nearTopEdge = Math.abs(beamRect.bottom - containerRect.top) <= 6; // tolerance in px

        if (horizontallyOverlapping && nearTopEdge) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = containerRect.top - parentRect.top; // snap to top edge

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          const color = pickRandomColor();
          if (color !== undefined) {
            setCurrentColorHex(color);
          }
          setCycleCollisionDetected(true);
          beam.style.opacity = "0";
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => {
      clearInterval(animationInterval);
    };
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const RESET_MS = 1400; // explosion lifetime, then reset
      const reset = () => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        const beam = beamRef.current;
        if (beam) {
          beam.style.opacity = "1";
        }
        setBeamKey((prevKey) => prevKey + 1);
      };
      const id = setTimeout(reset, RESET_MS);
      return () => {
        clearTimeout(id);
      };
    }
    return undefined;
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY ?? "-200px",
          translateX: beamOptions.initialX ?? "0px",
          rotate: beamOptions.rotate ?? -45,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY ?? "800px",
            translateX: beamOptions.translateX ?? "700px",
            rotate: beamOptions.rotate ?? -45,
          },
        }}
        transition={{
          duration: beamOptions.duration ?? 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay ?? 0,
          repeatDelay: beamOptions.repeatDelay ?? 0,
        }}
        className={cn(
          "absolute left-96 top-20 m-auto h-14 w-px rounded-full",
          beamOptions.className,
        )}
        style={{
          background: `linear-gradient(to top, ${currentColorHex}, transparent)`,
        }}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            colorHex={currentColorHex}
            style={{
              left: `${collision.coordinates.x + 20}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({
  colorHex = "#FB8500",
  ...props
}: React.HTMLProps<HTMLDivElement> & { colorHex?: string }) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-[4px] w-10 rounded-full blur-sm"
        style={{
          background: `linear-gradient(to right, transparent, ${colorHex}, transparent)`,
        }}
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full"
          style={{ backgroundColor: colorHex }}
        />
      ))}
    </div>
  );
};

const GridLineVertical = ({ className, offset }: { className?: string; offset?: string }) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset ?? "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.3)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
