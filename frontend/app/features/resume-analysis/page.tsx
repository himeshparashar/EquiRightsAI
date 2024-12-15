import { JobList } from "@/components/features/resume-analysis/job-list";
import { PageHeader } from "@/components/page-header";

export default function ResumeAnalysisPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Resume Analysis"
        description="Fair and unbiased evaluation of job applications"
      />
      <JobList />
    </div>
  );
}