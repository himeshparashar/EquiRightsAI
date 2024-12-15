import { Card } from "@/components/ui/card";
import { BarChart2, FileText, Scale, Shield } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Resume Analysis",
    description:
      "Evaluate candidates fairly based on skills and qualifications",
    icon: FileText,
    href: "/features/resume-analysis",
  },
  {
    title: "Policy Analysis",
    description: "Detect and eliminate biased language in policies",
    icon: Shield,
    href: "/features/policy-analysis",
  },
  {
    title: "Fair Access Insights",
    description: "Ensure equitable access to opportunities",
    icon: Scale,
    href: "/features/fair-access",
  },
  {
    title: "Report Discrimination",
    description: "Securely report and track discrimination cases",
    icon: BarChart2,
    href: "/help/reporting",
  },
];

export function FeaturesList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <Card key={feature.href} className="p-6">
          <Link href={feature.href} className="group block space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
          </Link>
        </Card>
      ))}
    </div>
  );
}
