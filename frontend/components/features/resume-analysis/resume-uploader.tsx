"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";

interface ResumeUploaderProps {
  jobId: number;
}

export function ResumeUploader({ jobId }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [anonymize, setAnonymize] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual resume upload and analysis
    console.log("Uploading resume for job", jobId, "with anonymization:", anonymize);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor={`resume-${jobId}`}>Upload Resume</Label>
        <div className="mt-2">
          <Input
            id={`resume-${jobId}`}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id={`anonymize-${jobId}`}
          checked={anonymize}
          onCheckedChange={(checked) => setAnonymize(checked as boolean)}
        />
        <Label
          htmlFor={`anonymize-${jobId}`}
          className="text-sm font-normal"
        >
          Anonymize personal information for unbiased evaluation
        </Label>
      </div>

      <Button
        type="submit"
        disabled={!file}
        className="w-full"
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload and Analyze Resume
      </Button>
    </form>
  );
}