"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Reports() {
  const [email, setEmail] = useState("");
  const [reportType, setReportType] = useState("monthly");

  const handleDownload = () => {
    // Implement report download logic here
    console.log("Downloading report...");
  };

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement report scheduling logic here
    console.log(`Scheduling ${reportType} reports for ${email}`);
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Reports</CardTitle>
        <CardDescription>Download or schedule regular reports</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Button onClick={handleDownload}>Download Latest Report</Button>
        </div>
        <form onSubmit={handleSchedule} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email for scheduled reports</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="report-type">Report Frequency</Label>
            <Select onValueChange={setReportType} defaultValue={reportType}>
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Schedule Reports</Button>
        </form>
      </CardContent>
    </Card>
  );
}
