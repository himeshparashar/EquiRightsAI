"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Gender", value: 78, fill: "#8884d8" },
  { name: "Race", value: 82, fill: "#83a6ed" },
  { name: "Age", value: 90, fill: "#8dd1e1" },
  { name: "Disability", value: 75, fill: "#82ca9d" },
];

export default function EquityScorecard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Equity Scorecard</CardTitle>
        <CardDescription>
          Breakdown of equity scores by category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              data={data}
            >
              <RadialBar
                label={{ position: "insideStart", fill: "#fff" }}
                background
                dataKey="value"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
