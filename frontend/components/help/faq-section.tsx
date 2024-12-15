"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the resume analysis work?",
    answer: "Our resume analysis tool uses AI to evaluate resumes based solely on skills and qualifications, removing potential bias factors. It anonymizes personal information and focuses on relevant experience and capabilities.",
  },
  {
    question: "What types of bias can the policy analyzer detect?",
    answer: "The policy analyzer can detect various forms of bias including gender, age, racial, and cultural bias in written policies. It analyzes language patterns and suggests neutral alternatives.",
  },
  {
    question: "How secure is the discrimination reporting system?",
    answer: "Our reporting system uses end-to-end encryption and allows anonymous submissions. Reports are handled confidentially and access is strictly controlled.",
  },
  {
    question: "Can I export analysis results?",
    answer: "Yes, you can export results from any analysis in various formats including PDF, CSV, and Excel. Reports can be customized to include specific metrics and insights.",
  },
  {
    question: "How often is the platform updated?",
    answer: "We regularly update our platform with new features and improvements. Our AI models are continuously trained on new data to ensure accuracy and fairness.",
  },
];

export function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}