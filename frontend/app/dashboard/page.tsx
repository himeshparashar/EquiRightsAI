import AnalysisOptions from "@/components/dashboard/AnalysisOptions";
import CTA from "@/components/dashboard/CTA";
import DataInput from "@/components/dashboard/DataInput";
import Hero from "@/components/dashboard/Hero";
import ResultsPreview from "@/components/dashboard/ResultsPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <DataInput />
      <AnalysisOptions />
      <ResultsPreview />
      <CTA />
    </main>
  );
}
