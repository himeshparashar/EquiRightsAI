"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AnalysisOptions() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Analysis Options
        </h2>
        <RadioGroup defaultValue="housing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label
              htmlFor="housing"
              className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-blue-50 transition-colors"
            >
              <RadioGroupItem
                value="housing"
                id="housing"
                className="sr-only"
              />
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <span>Housing Inequity</span>
            </Label>
            <Label
              htmlFor="education"
              className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-green-50 transition-colors"
            >
              <RadioGroupItem
                value="education"
                id="education"
                className="sr-only"
              />
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span>Education Inequity</span>
            </Label>
            <Label
              htmlFor="loans"
              className="flex flex-col items-center space-y-2 border rounded-md p-4 cursor-pointer hover:bg-purple-50 transition-colors"
            >
              <RadioGroupItem value="loans" id="loans" className="sr-only" />
              <CheckCircle className="w-6 h-6 text-purple-500" />
              <span>Loan Inequity</span>
            </Label>
          </div>
        </RadioGroup>
        <Button className="w-full mt-8">Start Analysis</Button>
      </motion.div>
    </section>
  );
}
