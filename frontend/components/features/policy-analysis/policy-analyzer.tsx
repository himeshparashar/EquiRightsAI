"use client";

import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Download, FileText, Upload } from "lucide-react";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import PolicyAnalysisResults from "./policy-analysis-results";

interface PolicyAnalysisResponse {
  filename: string;
  bias_analysis: string;
  clarity_analysis: string;
  anonymized_text: string;
}

async function analyzePolicy(content: string): Promise<PolicyAnalysisResponse> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return dummy data
  return {
    filename: "example_policy.txt",
    bias_analysis: JSON.stringify({
      identified_biases: [
        {
          bias: "Gender Bias",
          details:
            "The policy uses gendered language that may exclude certain groups.",
        },
        {
          bias: "Age Discrimination",
          details: "Some clauses may unfairly impact older employees.",
        },
      ],
      severity_score: {
        "Gender Bias": 7,
        "Age Discrimination": 6,
      },
      recommendations: [
        {
          bias: "Gender Bias",
          recommendations: "Use gender-neutral language throughout the policy.",
        },
        {
          bias: "Age Discrimination",
          recommendations:
            "Review and revise clauses that may disproportionately affect older employees.",
        },
      ],
      overall_score: 6.5,
    }),
    clarity_analysis: JSON.stringify({
      readability_score: 7.2,
      identified_issues: [
        {
          issue: "Complex Language",
          details:
            "Several sections use overly complex legal jargon that may be difficult for the average reader to understand.",
        },
        {
          issue: "Ambiguous Terms",
          details:
            "The policy contains ambiguous terms that could lead to misinterpretation.",
        },
      ],
      recommendations:
        "Simplify complex language and define ambiguous terms clearly.",
    }),
    anonymized_text:
      "This is a placeholder for the anonymized version of the policy text.",
  };
}

export function PolicyAnalyzer() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<PolicyAnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setText(event.target?.result as string);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = (event) => {
        setText(event.target?.result as string);
      };
      reader.readAsText(droppedFile);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    setError(null);
    try {
      let contentToAnalyze = text;
      if (file) {
        const reader = new FileReader();
        contentToAnalyze = await new Promise((resolve, reject) => {
          reader.onload = (event) => resolve(event.target?.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsText(file);
        });
      }
      const result = await analyzePolicy(contentToAnalyze);
      setResults(result);
    } catch (err) {
      setError(
        "An error occurred while analyzing the policy. Please try again."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDownload = () => {
    if (!results) return;

    const doc = new jsPDF();
    let yOffset = 10;

    doc.setFontSize(16);
    doc.text("Policy Analysis Report", 10, yOffset);
    yOffset += 10;

    doc.setFontSize(12);
    const biasAnalysis = JSON.parse(
      results.bias_analysis.replace(/\`\`\`json\n|\n\`\`\`/g, "")
    );
    const clarityAnalysis = JSON.parse(
      results.clarity_analysis.replace(/\`\`\`json\n|\n\`\`\`/g, "")
    );

    // Add bias analysis
    doc.text("Bias Analysis", 10, yOffset);
    yOffset += 10;
    biasAnalysis.identified_biases.forEach((bias: any, index: number) => {
      doc.setFontSize(10);
      doc.text(`${index + 1}. ${bias.bias}`, 15, yOffset);
      yOffset += 5;
      doc.setFontSize(8);
      const lines = doc.splitTextToSize(bias.details, 180);
      doc.text(lines, 20, yOffset);
      yOffset += lines.length * 4 + 5;
    });

    // Add clarity analysis
    yOffset += 10;
    doc.setFontSize(12);
    doc.text("Clarity Analysis", 10, yOffset);
    yOffset += 10;
    clarityAnalysis.identified_issues.forEach((issue: any, index: number) => {
      doc.setFontSize(10);
      doc.text(`${index + 1}. ${issue.issue}`, 15, yOffset);
      yOffset += 5;
      doc.setFontSize(8);
      const lines = doc.splitTextToSize(issue.details, 180);
      doc.text(lines, 20, yOffset);
      yOffset += lines.length * 4 + 5;
    });

    doc.save("policy_analysis_report.pdf");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Policy Bias Detector
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Analyze your policies for discriminatory language and get neutral
          alternatives
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors mb-4"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
                onClick={handleUploadClick}
                onKeyUp={handleUploadClick}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".txt,.doc,.docx,.pdf"
                />
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  Drag and drop your file here, or click to select
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Supported formats: .txt, .doc, .docx, .pdf
                </p>
              </div>

              {file && (
                <p className="mb-4 text-sm text-gray-600">
                  <FileText className="inline-block mr-2" size={16} />
                  {file.name}
                </p>
              )}

              <p className="mb-2 text-sm text-gray-600">
                Or paste your text here:
              </p>
              <Textarea
                placeholder="Paste your policy or legal document text here..."
                className="w-full h-40 mb-4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <Button
                className="w-full mb-4"
                onClick={handleSubmit}
                disabled={isAnalyzing || (!text && !file)}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze for Bias"}
              </Button>

              {error && <p className="text-red-500 mb-4">{error}</p>}
            </CardContent>
          </Card>

          {results && (
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <PolicyAnalysisResults results={results} />
                <Button onClick={handleDownload} className="mt-4">
                  <Download className="mr-2" size={16} />
                  Download Analysis Report (PDF)
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
