import { ReportForm } from "@/components/features/report/report-form";
import { PageHeader } from "@/components/page-header";

export default function ReportPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Report Discrimination"
        description="Securely report incidents of discrimination"
      />
      <ReportForm />
    </div>
  );
}