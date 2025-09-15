"use client";

import { Result, useAtom } from "@effect-atom/atom-react";
import { TrendingUpIcon } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  artistColors,
  endingNameToArtistType,
} from "@features/quiz/client/components/artist-type/artist-data-utils";
import type { AnalysisResult } from "@features/quiz/domain";
import {
  Card,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@ui/shadcn";
import { allAnalysisAtom } from "../analysis/analysis-atoms.js";

// Create a reverse mapping from endingId to full artist names
const createEndingIdToFullNameMapping = (): Record<string, string> => {
  const mapping: Record<string, string> = {};

  // Create the reverse mapping from the existing endingNameToArtistType
  Object.keys(endingNameToArtistType).forEach((fullName) => {
    // Convert "The Visionary Artist" to "the-visionary-artist"
    const endingId = fullName.toLowerCase().replace(/\s+/g, "-");
    mapping[endingId] = fullName;
  });

  return mapping;
};

// Helper function to get the primary artist type from analysis results
const getPrimaryArtistType = (
  endingResults: ReadonlyArray<{ endingId: string; points: number; percentage: number }>,
) => {
  if (endingResults.length === 0) return null;

  // Find the result with the highest points
  const primaryResult = endingResults.reduce((prev, current) =>
    current.points > prev.points ? current : prev,
  );

  // Map endingId to full name
  const endingIdToFullName = createEndingIdToFullNameMapping();
  return endingIdToFullName[primaryResult.endingId] ?? primaryResult.endingId;
};

const chartConfig = {
  count: {
    label: "Count",
  },
  visionary: {
    label: "Visionary",
    color: "var(--artist-visionary)",
  },
  consummate: {
    label: "Consummate",
    color: "var(--artist-consummate)",
  },
  analyzer: {
    label: "Analyzer",
    color: "var(--artist-analyzer)",
  },
  tech: {
    label: "Tech",
    color: "var(--artist-tech)",
  },
  entertainer: {
    label: "Entertainer",
    color: "var(--artist-entertainer)",
  },
  maverick: {
    label: "Maverick",
    color: "var(--artist-maverick)",
  },
  dreamer: {
    label: "Dreamer",
    color: "var(--artist-dreamer)",
  },
  feeler: {
    label: "Feeler",
    color: "var(--artist-feeler)",
  },
  tortured: {
    label: "Tortured",
    color: "var(--artist-tortured)",
  },
  solo: {
    label: "Solo",
    color: "var(--artist-solo)",
  },
} satisfies ChartConfig;

export function AnalysisChart() {
  const [analysisResult] = useAtom(allAnalysisAtom);

  const chartData = React.useMemo(() => {
    if (!Result.isSuccess(analysisResult)) {
      return [];
    }

    const analyses = analysisResult.value;

    // Count artist types from the most recent analysis for each response
    const artistTypeCounts: Record<string, number> = {};

    analyses.forEach((analysis: AnalysisResult) => {
      const primaryArtistType = getPrimaryArtistType(analysis.endingResults);
      if (primaryArtistType !== null) {
        const artistType = endingNameToArtistType[primaryArtistType];
        if (artistType !== undefined) {
          artistTypeCounts[artistType] = (artistTypeCounts[artistType] ?? 0) + 1;
        }
      }
    });

    // Convert to chart data format
    return Object.entries(artistTypeCounts).map(([artistType, count]) => ({
      type: artistType.toLowerCase(),
      count,
      fill: artistColors[artistType as keyof typeof artistColors],
    }));
  }, [analysisResult]);

  const totalAnalyses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, [chartData]);

  if (!Result.isSuccess(analysisResult)) {
    return (
      <Card className="flex flex-col w-full h-full">
        <Card.Header className="items-center pb-0">
          <Card.Title>Artist Type Analysis</Card.Title>
          <Card.Description>Loading analysis data...</Card.Description>
        </Card.Header>
        <Card.Content className="flex-1 flex items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </Card.Content>
      </Card>
    );
  }

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
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  if (
                    viewBox &&
                    typeof viewBox === "object" &&
                    "cx" in viewBox &&
                    "cy" in viewBox
                  ) {
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
                          Responses
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
          Real-time analysis data <TrendingUpIcon className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing analysis distribution from {totalAnalyses} responses
        </div>
      </Card.Footer>
    </Card>
  );
}
