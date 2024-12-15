"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const caseNumber = searchParams.get("caseNumber");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Thank You for Your Report
            </CardTitle>
            <CardDescription className="text-center">
              Your contribution helps create a more inclusive society.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 mb-2">
                Your report has been successfully submitted.
              </p>
              <p className="text-green-800 font-semibold">
                Your case reference number is: {caseNumber}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What happens next?</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Our team will review your report within 48 hours.</li>
                <li>
                  We may contact you for additional information if necessary.
                </li>
                <li>
                  We will take appropriate action based on our investigation.
                </li>
                <li>
                  You will be notified of any significant updates to your case.
                </li>
              </ol>
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
