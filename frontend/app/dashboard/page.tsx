import DashboardOverview from "@/components/dashboard/dashboard-overview";
import { PageHeader } from "@/components/page-header";

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Dashboard"
        description="Track and analyze your organization's equity metrics"
      />
      <DashboardOverview />
    </div>
  );
}
