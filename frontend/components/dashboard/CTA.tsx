"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Drive Change?</h2>
        <p className="text-xl mb-8">
          Get your comprehensive report and start making a difference today.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Download className="w-5 h-5 mr-2" />
            Download Full Report
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
