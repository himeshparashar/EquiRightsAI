"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 278 },
  { name: "Group E", value: 189 },
];

export default function ResultsPreview() {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Results Preview</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">Key Findings:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Group A shows the highest value, indicating potential inequity.
              </li>
              <li>
                Groups C and E have significantly lower values, suggesting areas
                for improvement.
              </li>
              <li>
                Further analysis is recommended to understand the underlying
                factors.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
