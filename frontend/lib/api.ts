export async function analyzePolicy(text: string): Promise<AnalysisResult> {
  const formData = new FormData();
  const file = new Blob([text], { type: "text/plain" });
  formData.append("file", file, "policy.txt");

  const response = await fetch(
    "http://localhost:8000/api/v1/policy-analysis/",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to analyze policy");
  }

  return response.json();
}

export interface AnalysisResult {
  biasedSections: {
    original: string;
    suggestion: string;
  }[];
}
