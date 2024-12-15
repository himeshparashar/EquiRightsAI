import { Features } from "@/components/features/policy-analysis/features";
import { PolicyAnalyzer } from "@/components/features/policy-analysis/policy-analyzer";
import { Pricing } from "@/components/features/policy-analysis/pricing";
import { Testimonials } from "@/components/features/policy-analysis/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pl-10 pr-10">
      <main className="flex-grow">
        <PolicyAnalyzer />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
    </div>
  );
}
