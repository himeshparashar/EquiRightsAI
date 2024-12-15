"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DataInput() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Data Input</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="manual-input">Manual Data Input</Label>
            <Input id="manual-input" placeholder="Enter your data here" />
          </div>
          <div>
            <Label htmlFor="file-upload">Upload Data File</Label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">CSV, XLS up to 10MB</p>
              </div>
            </div>
          </div>
          {file && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-sm text-gray-600"
            >
              <FileText className="w-4 h-4" />
              <span>{file.name}</span>
            </motion.div>
          )}
          <Button className="w-full">Submit Data</Button>
        </div>
      </motion.div>
    </section>
  );
}
