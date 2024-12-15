import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$29"
            features={[
              "Up to 5 policy analyses per month",
              "Basic bias detection",
              "Email support",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$99"
            features={[
              "Unlimited policy analyses",
              "Advanced bias detection",
              "Suggested alternatives",
              "Priority email support",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited policy analyses",
              "Advanced bias detection",
              "Customized suggestions",
              "API access",
              "Dedicated account manager",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${
        highlighted ? "bg-blue-50 border-2 border-blue-500" : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">
        {price}
        <span className="text-sm font-normal">/month</span>
      </p>
      <ul className="mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full">
        {highlighted ? "Get Started" : "Choose Plan"}
      </Button>
    </div>
  );
}
