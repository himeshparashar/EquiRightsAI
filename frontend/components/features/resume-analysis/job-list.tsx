"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { JobCard } from "./job-card";
import { Search } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a software engineer to join our team...",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of web technologies",
      "Experience with TypeScript",
    ],
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description: "Seeking an experienced product manager to lead product initiatives...",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical skills",
      "Experience with agile methodologies",
    ],
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our design team to create beautiful and intuitive interfaces...",
    requirements: [
      "Portfolio demonstrating UI/UX work",
      "Experience with Figma",
      "Understanding of design systems",
    ],
  },
];

export function JobList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button>Post a Job</Button>
      </div>
      
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}