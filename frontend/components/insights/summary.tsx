import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

const metrics = [
  { name: "Overall Fairness Score", value: 85, change: 2.3 },
  { name: "Gender Equity", value: 78, change: 1.5 },
  { name: "Racial Equity", value: 82, change: 3.1 },
  { name: "Age Equity", value: 90, change: -0.8 },
];

export default function Summary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {metric.change > 0 ? (
                <ArrowUpIcon className="mr-1 text-green-500" />
              ) : (
                <ArrowDownIcon className="mr-1 text-red-500" />
              )}
              <span
                className={
                  metric.change > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {Math.abs(metric.change)}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
