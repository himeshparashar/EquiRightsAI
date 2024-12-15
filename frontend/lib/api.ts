export async function analyzePolicy(text: string): Promise<AnalysisResult> {
  const response = await fetch("http://localhost:8000/analyse_policy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

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
