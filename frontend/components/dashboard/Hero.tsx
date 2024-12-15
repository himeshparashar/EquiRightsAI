"use client";

import { motion } from "framer-motion";
import { BarChartIcon as ChartBar, Home, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Fair Access Insights</h1>
        <p className="text-xl mb-8">
          Uncover inequities. Drive change. Ensure fairness.
        </p>
        <div className="flex justify-center space-x-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <Home className="w-12 h-12 text-blue-500 mb-2" />
            <span>Housing</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <ChartBar className="w-12 h-12 text-green-500 mb-2" />
            <span>Education</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <Briefcase className="w-12 h-12 text-purple-500 mb-2" />
            <span>Loans</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
