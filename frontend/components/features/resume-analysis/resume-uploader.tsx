"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Eye, FileText, Sparkles, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ResumeUploaderProps {
  jobId: number;
}

interface AnalysisResponse {
  extracted_text: string;
  anonymized_text: string;
  skills: string[];
  summary: string;
}

export function ResumeUploader({ jobId }: ResumeUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [anonymize, setAnonymize] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResponse | null>(
    null
  );
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("job_id", jobId.toString());
      formData.append("anonymize", anonymize.toString());

      const response = await fetch(
        `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/resume-analysis/upload-resume/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      console.log(response.body);

      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error("Error uploading resume:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
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
          <Label htmlFor={`anonymize-${jobId}`} className="text-sm font-normal">
            Anonymize personal information for unbiased evaluation
          </Label>
        </div>

        <Button type="submit" disabled={!file || isLoading} className="w-full">
          <Upload className="mr-2 h-4 w-4" />
          {isLoading ? "Analyzing..." : "Upload and Analyze Resume"}
        </Button>
      </form>

      {analysisResult && (
        <Button
          onClick={() => setShowResults(true)}
          variant="outline"
          className="w-full"
        >
          <Eye className="mr-2 h-4 w-4" />
          View Analysis Results
        </Button>
      )}

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Resume Analysis Results
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="h-[calc(90vh-100px)] pr-4">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Summary
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {analysisResult?.summary}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResult?.skills.map((skill, skillId) => (
                    <span
                      key={`skill-${skillId}`}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {anonymize && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    Anonymized Text
                  </h3>
                  <div className="prose prose-sm max-w-none">
                    <div className="rounded-lg bg-muted/50 p-6">
                      <ReactMarkdown>
                        {analysisResult?.anonymized_text || ""}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
