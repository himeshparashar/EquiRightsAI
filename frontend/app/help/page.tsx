import { HelpCenter } from "@/components/help/help-center";
import { PageHeader } from "@/components/page-header";

export default function HelpPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Help & Support"
        description="Get assistance and learn more about using our platform"
      />
      <HelpCenter />
    </div>
  );
}