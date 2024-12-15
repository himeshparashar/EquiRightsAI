"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", overall: 75, gender: 70, racial: 72, age: 83 },
  { month: "Feb", overall: 78, gender: 72, racial: 75, age: 85 },
  { month: "Mar", overall: 80, gender: 75, racial: 78, age: 87 },
  { month: "Apr", overall: 82, gender: 76, racial: 80, age: 88 },
  { month: "May", overall: 85, gender: 78, racial: 82, age: 90 },
];

export default function DetailedMetrics() {
  const [selectedMetric, setSelectedMetric] = useState("overall");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Metrics</CardTitle>
        <CardDescription>Track equity metrics over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select
            onValueChange={setSelectedMetric}
            defaultValue={selectedMetric}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overall">Overall Fairness</SelectItem>
              <SelectItem value="gender">Gender Equity</SelectItem>
              <SelectItem value="racial">Racial Equity</SelectItem>
              <SelectItem value="age">Age Equity</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={selectedMetric}
                stroke="#3b82f6"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
