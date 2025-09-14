"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Select,
  ToggleGroup,
  ToggleGroupItem,
  type ChartConfig,
} from "@ui/shadcn";

const chartData = [
  { date: "2024-04-01", completed: 45, inProgress: 12, notStarted: 8 },
  { date: "2024-04-02", completed: 52, inProgress: 15, notStarted: 6 },
  { date: "2024-04-03", completed: 48, inProgress: 18, notStarted: 9 },
  { date: "2024-04-04", completed: 61, inProgress: 14, notStarted: 7 },
  { date: "2024-04-05", completed: 67, inProgress: 16, notStarted: 5 },
  { date: "2024-04-06", completed: 73, inProgress: 12, notStarted: 8 },
  { date: "2024-04-07", completed: 69, inProgress: 19, notStarted: 6 },
  { date: "2024-04-08", completed: 78, inProgress: 15, notStarted: 4 },
  { date: "2024-04-09", completed: 82, inProgress: 11, notStarted: 7 },
  { date: "2024-04-10", completed: 85, inProgress: 13, notStarted: 5 },
  { date: "2024-04-11", completed: 89, inProgress: 17, notStarted: 6 },
  { date: "2024-04-12", completed: 92, inProgress: 14, notStarted: 8 },
  { date: "2024-04-13", completed: 95, inProgress: 16, notStarted: 4 },
  { date: "2024-04-14", completed: 88, inProgress: 20, notStarted: 7 },
  { date: "2024-04-15", completed: 91, inProgress: 18, notStarted: 5 },
  { date: "2024-04-16", completed: 94, inProgress: 15, notStarted: 6 },
  { date: "2024-04-17", completed: 97, inProgress: 13, notStarted: 8 },
  { date: "2024-04-18", completed: 101, inProgress: 16, notStarted: 4 },
  { date: "2024-04-19", completed: 98, inProgress: 19, notStarted: 7 },
  { date: "2024-04-20", completed: 103, inProgress: 14, notStarted: 5 },
  { date: "2024-04-21", completed: 106, inProgress: 17, notStarted: 6 },
  { date: "2024-04-22", completed: 109, inProgress: 15, notStarted: 8 },
  { date: "2024-04-23", completed: 112, inProgress: 18, notStarted: 4 },
  { date: "2024-04-24", completed: 115, inProgress: 12, notStarted: 7 },
  { date: "2024-04-25", completed: 118, inProgress: 16, notStarted: 5 },
  { date: "2024-04-26", completed: 121, inProgress: 14, notStarted: 6 },
  { date: "2024-04-27", completed: 124, inProgress: 19, notStarted: 8 },
  { date: "2024-04-28", completed: 127, inProgress: 13, notStarted: 4 },
  { date: "2024-04-29", completed: 130, inProgress: 17, notStarted: 7 },
  { date: "2024-04-30", completed: 133, inProgress: 15, notStarted: 5 },
  { date: "2024-05-01", completed: 136, inProgress: 18, notStarted: 6 },
  { date: "2024-05-02", completed: 139, inProgress: 14, notStarted: 8 },
  { date: "2024-05-03", completed: 142, inProgress: 16, notStarted: 4 },
  { date: "2024-05-04", completed: 145, inProgress: 20, notStarted: 7 },
  { date: "2024-05-05", completed: 148, inProgress: 12, notStarted: 5 },
  { date: "2024-05-06", completed: 151, inProgress: 15, notStarted: 6 },
  { date: "2024-05-07", completed: 154, inProgress: 19, notStarted: 8 },
  { date: "2024-05-08", completed: 157, inProgress: 13, notStarted: 4 },
  { date: "2024-05-09", completed: 160, inProgress: 17, notStarted: 7 },
  { date: "2024-05-10", completed: 163, inProgress: 14, notStarted: 5 },
  { date: "2024-05-11", completed: 166, inProgress: 18, notStarted: 6 },
  { date: "2024-05-12", completed: 169, inProgress: 16, notStarted: 8 },
  { date: "2024-05-13", completed: 172, inProgress: 12, notStarted: 4 },
  { date: "2024-05-14", completed: 175, inProgress: 15, notStarted: 7 },
  { date: "2024-05-15", completed: 178, inProgress: 19, notStarted: 5 },
  { date: "2024-05-16", completed: 181, inProgress: 13, notStarted: 6 },
  { date: "2024-05-17", completed: 184, inProgress: 17, notStarted: 8 },
  { date: "2024-05-18", completed: 187, inProgress: 14, notStarted: 4 },
  { date: "2024-05-19", completed: 190, inProgress: 18, notStarted: 7 },
  { date: "2024-05-20", completed: 193, inProgress: 16, notStarted: 5 },
  { date: "2024-05-21", completed: 196, inProgress: 12, notStarted: 6 },
  { date: "2024-05-22", completed: 199, inProgress: 15, notStarted: 8 },
  { date: "2024-05-23", completed: 202, inProgress: 19, notStarted: 4 },
  { date: "2024-05-24", completed: 205, inProgress: 13, notStarted: 7 },
  { date: "2024-05-25", completed: 208, inProgress: 17, notStarted: 5 },
  { date: "2024-05-26", completed: 211, inProgress: 14, notStarted: 6 },
  { date: "2024-05-27", completed: 214, inProgress: 18, notStarted: 8 },
  { date: "2024-05-28", completed: 217, inProgress: 16, notStarted: 4 },
  { date: "2024-05-29", completed: 220, inProgress: 12, notStarted: 7 },
  { date: "2024-05-30", completed: 223, inProgress: 15, notStarted: 5 },
  { date: "2024-05-31", completed: 226, inProgress: 19, notStarted: 6 },
  { date: "2024-06-01", completed: 229, inProgress: 13, notStarted: 8 },
  { date: "2024-06-02", completed: 232, inProgress: 17, notStarted: 4 },
  { date: "2024-06-03", completed: 235, inProgress: 14, notStarted: 7 },
  { date: "2024-06-04", completed: 238, inProgress: 18, notStarted: 5 },
  { date: "2024-06-05", completed: 241, inProgress: 16, notStarted: 6 },
  { date: "2024-06-06", completed: 244, inProgress: 12, notStarted: 8 },
  { date: "2024-06-07", completed: 247, inProgress: 15, notStarted: 4 },
  { date: "2024-06-08", completed: 250, inProgress: 19, notStarted: 7 },
  { date: "2024-06-09", completed: 253, inProgress: 13, notStarted: 5 },
  { date: "2024-06-10", completed: 256, inProgress: 17, notStarted: 6 },
  { date: "2024-06-11", completed: 259, inProgress: 14, notStarted: 8 },
  { date: "2024-06-12", completed: 262, inProgress: 18, notStarted: 4 },
  { date: "2024-06-13", completed: 265, inProgress: 16, notStarted: 7 },
  { date: "2024-06-14", completed: 268, inProgress: 12, notStarted: 5 },
  { date: "2024-06-15", completed: 271, inProgress: 15, notStarted: 6 },
  { date: "2024-06-16", completed: 274, inProgress: 19, notStarted: 8 },
  { date: "2024-06-17", completed: 277, inProgress: 13, notStarted: 4 },
  { date: "2024-06-18", completed: 280, inProgress: 17, notStarted: 7 },
  { date: "2024-06-19", completed: 283, inProgress: 14, notStarted: 5 },
  { date: "2024-06-20", completed: 286, inProgress: 18, notStarted: 6 },
  { date: "2024-06-21", completed: 289, inProgress: 16, notStarted: 8 },
  { date: "2024-06-22", completed: 292, inProgress: 12, notStarted: 4 },
  { date: "2024-06-23", completed: 295, inProgress: 15, notStarted: 7 },
  { date: "2024-06-24", completed: 298, inProgress: 19, notStarted: 5 },
  { date: "2024-06-25", completed: 301, inProgress: 13, notStarted: 6 },
  { date: "2024-06-26", completed: 304, inProgress: 17, notStarted: 8 },
  { date: "2024-06-27", completed: 307, inProgress: 14, notStarted: 4 },
  { date: "2024-06-28", completed: 310, inProgress: 18, notStarted: 7 },
  { date: "2024-06-29", completed: 313, inProgress: 16, notStarted: 5 },
  { date: "2024-06-30", completed: 316, inProgress: 12, notStarted: 6 },
];

const chartConfig = {
  completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  inProgress: {
    label: "In Progress",
    color: "var(--chart-2)",
  },
  notStarted: {
    label: "Not Started",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ResponsesOverTimeChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card w-full h-full flex flex-col">
      <Card.Header>
        <Card.Title>Quiz Responses Over Time</Card.Title>
        <Card.Description>
          <span className="hidden @[540px]/card:block">
            Response completion trends for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </Card.Description>
        <div className="flex items-center gap-2">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <Select.Trigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <Select.Value placeholder="Last 3 months" />
            </Select.Trigger>
            <Select.Content className="rounded-xl">
              <Select.Item value="90d" className="rounded-lg">
                Last 3 months
              </Select.Item>
              <Select.Item value="30d" className="rounded-lg">
                Last 30 days
              </Select.Item>
              <Select.Item value="7d" className="rounded-lg">
                Last 7 days
              </Select.Item>
            </Select.Content>
          </Select>
        </div>
      </Card.Header>
      <Card.Content className="px-2 pt-4 sm:px-6 sm:pt-6 flex-1">
        <ChartContainer config={chartConfig} className=" w-full max-h-56">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCompleted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillInProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillNotStarted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(String(value));
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(String(value)).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="notStarted"
              type="natural"
              fill="url(#fillNotStarted)"
              stroke="var(--chart-3)"
              stackId="a"
            />
            <Area
              dataKey="inProgress"
              type="natural"
              fill="url(#fillInProgress)"
              stroke="var(--chart-2)"
              stackId="a"
            />
            <Area
              dataKey="completed"
              type="natural"
              fill="url(#fillCompleted)"
              stroke="var(--chart-1)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </Card.Content>
    </Card>
  );
}
