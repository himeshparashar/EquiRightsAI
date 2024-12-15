import Hero from "./hero";
import Summary from "./summary";
import DetailedMetrics from "./detailed-metrics";
import Reports from "./reports";
import EquityScorecard from "./equity-scorecard";
import DemographicBreakdown from "./demographic-breakdown";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <Summary />
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <DetailedMetrics />
          <EquityScorecard />
        </div>
        <DemographicBreakdown />
        <Reports />
      </main>
    </div>
  );
}
