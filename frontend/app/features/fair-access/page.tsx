import FairAccessDashboard from "@/components/features/fair-access/fair-access-dashboard";
import { PageHeader } from "@/components/page-header";

export default function FairAccessPage() {
  return (
    <div className="container py-8 pl-10 pr-10">
      <PageHeader
        title="Fair Access Insights"
        description="Analyze and ensure equitable access across your organization"
      />
      <FairAccessDashboard />
    </div>
  );
}
