import { Card } from "@/components/ui/card";
import { FileText, Video, BookOpen, MessageSquare } from "lucide-react";

const resources = [
  {
    title: "Documentation",
    description: "Detailed guides and API documentation",
    icon: FileText,
    href: "/docs",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    href: "/tutorials",
  },
  {
    title: "Best Practices",
    description: "Learn about equity and inclusion best practices",
    icon: BookOpen,
    href: "/best-practices",
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share experiences",
    icon: MessageSquare,
    href: "/community",
  },
];

export function SupportResources() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {resources.map((resource) => (
        <Card key={resource.href} className="p-6">
          <a href={resource.href} className="group block space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <resource.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{resource.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {resource.description}
              </p>
            </div>
          </a>
        </Card>
      ))}
    </div>
  );
}