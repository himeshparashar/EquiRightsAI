import { FeaturesList } from "@/components/features/features-list";
import { PageHeader } from "@/components/page-header";

export default function FeaturesPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Our Features"
        description="Explore our comprehensive suite of tools designed to promote fairness and equality"
      />
      <FeaturesList />
    </div>
  );
}