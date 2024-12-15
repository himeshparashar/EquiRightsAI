import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PolicyAnalysisResponse {
  filename: string;
  bias_analysis: string;
  clarity_analysis: string;
  anonymized_text: string;
}

interface BiasAnalysis {
  identified_biases: Array<{
    bias: string;
    details: string;
  }>;
  severity_score: {
    [key: string]: number;
  };
  recommendations: Array<{
    bias: string;
    recommendations: string;
  }>;
  overall_score: number;
}

interface ClarityAnalysis {
  readability_score: number;
  identified_issues: Array<{
    issue: string;
    details: string;
  }>;
  recommendations: string;
}

const PolicyAnalysisResults: React.FC<{ results: PolicyAnalysisResponse }> = ({
  results,
}) => {
  const biasAnalysis: BiasAnalysis = JSON.parse(
    results.bias_analysis.replace(/\`\`\`json\n|\n\`\`\`/g, "")
  );
  const clarityAnalysis: ClarityAnalysis = JSON.parse(
    results.clarity_analysis.replace(/\`\`\`json\n|\n\`\`\`/g, "")
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Policy Analysis Results for {results.filename}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="w-full sm:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Overall Bias Score</h3>
              <Progress
                value={biasAnalysis.overall_score * 10}
                className="w-full"
              />
              <p className="mt-2 text-sm text-gray-600">
                Score: {biasAnalysis.overall_score.toFixed(1)}/10
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Readability Score</h3>
              <Progress
                value={clarityAnalysis.readability_score * 10}
                className="w-full"
              />
              <p className="mt-2 text-sm text-gray-600">
                Score: {clarityAnalysis.readability_score.toFixed(1)}/10
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Identified Biases</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto">
          {biasAnalysis.identified_biases.map((bias, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{bias.bias}</h4>
              <p className="text-sm text-gray-600">{bias.details}</p>
              <Badge variant="outline" className="mt-2">
                Severity: {biasAnalysis.severity_score[bias.bias] ?? "N/A"}/10
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bias Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto">
          {biasAnalysis.recommendations.map((rec, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{rec.bias}</h4>
              <p className="text-sm text-gray-600">{rec.recommendations}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clarity Issues</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto">
          {clarityAnalysis.identified_issues.map((issue, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{issue.issue}</h4>
              <p className="text-sm text-gray-600">{issue.details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clarity Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="max-h-96 overflow-y-auto">
          <p className="text-sm text-gray-600">
            {clarityAnalysis.recommendations}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PolicyAnalysisResults;
