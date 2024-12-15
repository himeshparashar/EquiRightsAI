import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Equity Metrics Dashboard</h1>
        <p className="text-xl mb-8">
          Track, analyze, and improve equity across your organization
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
}
