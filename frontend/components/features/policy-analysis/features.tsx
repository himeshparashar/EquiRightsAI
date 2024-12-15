import { Shield, Zap, RefreshCw } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Policy Bias Detector?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-blue-500" />}
            title="Comprehensive Analysis"
            description="Our AI-powered tool thoroughly examines your policies for any potentially discriminatory language."
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-blue-500" />}
            title="Instant Results"
            description="Get immediate feedback on your policies with highlighted areas of concern and suggested alternatives."
          />
          <FeatureCard
            icon={<RefreshCw className="h-12 w-12 text-blue-500" />}
            title="Continuous Improvement"
            description="Our system learns and improves with each analysis, staying up-to-date with the latest inclusive language practices."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
