import { Card } from "@/components/ui/card";
import { FileText, Shield, Scale, BarChart2, Settings, HelpCircle } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Resume Analysis",
    description: "Learn how to use our resume analysis tools effectively",
    icon: FileText,
    href: "/help/resume-analysis",
  },
  {
    title: "Policy Analysis",
    description: "Understanding policy analysis and bias detection",
    icon: Shield,
    href: "/help/policy-analysis",
  },
  {
    title: "Fair Access",
    description: "Guide to fair access insights and metrics",
    icon: Scale,
    href: "/help/fair-access",
  },
  {
    title: "Reporting",
    description: "How to report and track discrimination cases",
    icon: BarChart2,
    href: "/help/reporting",
  },
  {
    title: "Account Settings",
    description: "Managing your account and preferences",
    icon: Settings,
    href: "/help/settings",
  },
  {
    title: "General Help",
    description: "Basic platform usage and navigation",
    icon: HelpCircle,
    href: "/help/general",
  },
];

export function HelpCategories() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.href} className="p-6">
          <Link href={category.href} className="group block space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <category.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{category.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}