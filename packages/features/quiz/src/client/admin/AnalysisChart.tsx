"use client";

import { TrendingUpIcon } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@ui/shadcn";

const chartData = [
  { type: "visionary", count: 45, fill: "var(--chart-1)" },
  { type: "consummate", count: 38, fill: "var(--chart-2)" },
  { type: "analyzer", count: 52, fill: "var(--chart-3)" },
  { type: "tech", count: 29, fill: "var(--chart-4)" },
  { type: "entertainer", count: 41, fill: "var(--chart-5)" },
  { type: "maverick", count: 33, fill: "var(--chart-1)" },
  { type: "dreamer", count: 47, fill: "var(--chart-2)" },
  { type: "feeler", count: 35, fill: "var(--chart-3)" },
  { type: "tortured", count: 28, fill: "var(--chart-4)" },
  { type: "solo", count: 31, fill: "var(--chart-5)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  visionary: {
    label: "Visionary",
    color: "var(--chart-1)",
  },
  consummate: {
    label: "Consummate",
    color: "var(--chart-2)",
  },
  analyzer: {
    label: "Analyzer",
    color: "var(--chart-3)",
  },
  tech: {
    label: "Tech",
    color: "var(--chart-4)",
  },
  entertainer: {
    label: "Entertainer",
    color: "var(--chart-5)",
  },
  maverick: {
    label: "Maverick",
    color: "var(--chart-1)",
  },
  dreamer: {
    label: "Dreamer",
    color: "var(--chart-2)",
  },
  feeler: {
    label: "Feeler",
    color: "var(--chart-3)",
  },
  tortured: {
    label: "Tortured",
    color: "var(--chart-4)",
  },
  solo: {
    label: "Solo",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function AnalysisChart() {
  const totalAnalyses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <Card className="flex flex-col w-full h-full">
      <Card.Header className="items-center pb-0">
        <Card.Title>Artist Type Analysis</Card.Title>
        <Card.Description>Distribution of quiz responses by artist type</Card.Description>
      </Card.Header>
      <Card.Content className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px] max-h-96"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="count" nameKey="type" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/no-non-null-assertion
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalAnalyses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Analyses
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </Card.Content>
      <Card.Footer className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 12.3% this month <TrendingUpIcon className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing analysis distribution across all artist types
        </div>
      </Card.Footer>
    </Card>
  );
}
