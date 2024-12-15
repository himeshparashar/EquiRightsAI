import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Stand Against Discrimination
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your voice matters. Report incidents of discrimination and help create
          a more inclusive society for everyone.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="#report-form">Report an Incident</Link>
        </Button>
      </div>
    </section>
  );
}
