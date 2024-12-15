import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, FileText, Scale, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col pl-10 pr-10">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Promoting Fairness Through
            <br />
            AI-Powered Analysis
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            EquiRightsAI helps organizations eliminate bias and promote equality
            through advanced AI analysis of resumes, policies, and workplace
            practices.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" asChild>
              <Link href="/features">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/20">
        <div className="container py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={FileText}
              title="Resume Analysis"
              description="Evaluate candidates fairly based on skills and qualifications"
              href="/features/resume-analysis"
            />
            <FeatureCard
              icon={Shield}
              title="Policy Analysis"
              description="Detect and eliminate biased language in policies"
              href="/features/policy-analysis"
            />
            <FeatureCard
              icon={Scale}
              title="Fair Access Insights"
              description="Ensure equitable access to opportunities"
              href="/features/fair-access"
            />
            <FeatureCard
              icon={BarChart2}
              title="Report Discrimination"
              description="Securely report and track discrimination cases"
              href="/help/reporting"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: any;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative rounded-lg border bg-background p-6 transition-shadow hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
