import { InsightsDashboard } from "@/components/insights/insights-dashboard";
import { PageHeader } from "@/components/page-header";

export default function InsightsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Insights"
        description="Detailed analytics and insights about your organization's diversity and inclusion metrics"
      />
      <InsightsDashboard />
    </div>
  );
}