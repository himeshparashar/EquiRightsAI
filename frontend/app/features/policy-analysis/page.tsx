import { PolicyAnalyzer } from "@/components/features/policy-analysis/policy-analyzer";
import { PageHeader } from "@/components/page-header";

export default function PolicyAnalysisPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Policy Analysis"
        description="Detect and eliminate biased language in policies and documents"
      />
      <PolicyAnalyzer />
    </div>
  );
}