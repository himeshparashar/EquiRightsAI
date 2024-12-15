import Features from "@/components/features/reporting/Features";
import Hero from "@/components/features/reporting/Hero";
import ReportForm from "@/components/features/reporting/ReportForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Report Discrimination
            </h2>
            <ReportForm />
          </div>
        </section>
      </main>
    </div>
  );
}
