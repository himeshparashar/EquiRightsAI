"use client";

import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Download, FileText, Upload } from "lucide-react";
import { analyzePolicy } from "@/lib/api";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

export function PolicyAnalyzer() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
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
    results.biasedSections.forEach((section, index) => {
      yOffset += 10;
      doc.setTextColor(255, 0, 0);
      doc.text(`Biased Language ${index + 1}:`, 10, yOffset);
      yOffset += 5;
      doc.setTextColor(0, 0, 0);
      doc.text(section.original, 15, yOffset, { maxWidth: 180 });
      yOffset +=
        doc.getTextDimensions(section.original, { maxWidth: 180 }).h + 5;
      doc.setTextColor(0, 128, 0);
      doc.text("Suggested Alternative:", 10, yOffset);
      yOffset += 5;
      doc.setTextColor(0, 0, 0);
      doc.text(section.suggestion, 15, yOffset, { maxWidth: 180 });
      yOffset +=
        doc.getTextDimensions(section.suggestion, { maxWidth: 180 }).h + 10;
    });

    doc.save("policy_analysis_report.pdf");
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Policy Bias Detector
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Analyze your policies for discriminatory language and get neutral
          alternatives
        </p>

        <Card className="max-w-3xl mx-auto">
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

            {results && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Analysis Results
                </h2>
                {results.biasedSections.map((section, index) => (
                  <div key={index} className="mb-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          Potentially biased language detected:
                        </p>
                        <p className="mt-1 text-gray-700">{section.original}</p>
                        <p className="mt-2 font-semibold">
                          Suggested alternative:
                        </p>
                        <p className="mt-1 text-gray-700">
                          {section.suggestion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={handleDownload} className="mt-4">
                  <Download className="mr-2" size={16} />
                  Download Analysis Report (PDF)
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

interface AnalysisResult {
  biasedSections: {
    original: string;
    suggestion: string;
  }[];
}
