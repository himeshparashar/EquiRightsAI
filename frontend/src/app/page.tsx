"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/landing/nav";
import { FeatureCard } from "@/components/landing/feature-card";
import { Button } from "@/components/ui/button";
import { FileSearch, Scale, LineChart, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                AI for Fighting
                <span className="text-primary block">
                  Systemic Discrimination
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Leveraging artificial intelligence to identify, analyze, and
                combat systemic discrimination in hiring, housing, education,
                and public services.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-center gap-4 pt-4">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-muted/50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold tracking-tighter text-center mb-12">
              Key Features
            </div>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Bias-Free Analysis"
              description="Evaluates candidates purely on skills and qualifications, ensuring fair recruitment processes."
              icon={FileSearch}
              delay={0.1}
            />
            <FeatureCard
              title="Policy Analysis"
              description="Detects biased language in policies and suggests neutral alternatives for inclusive documentation."
              icon={Scale}
              delay={0.2}
            />
            <FeatureCard
              title="Fair Access Systems"
              description="Highlights inequities in housing, loans, and education to promote equal opportunities."
              icon={LineChart}
              delay={0.3}
            />
            <FeatureCard
              title="Discrimination Reporting"
              description="Crowdsources and prioritizes bias cases for swift resolution and systemic improvement."
              icon={MessageSquare}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-[900px] mx-auto text-center space-y-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Impact
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">
                    Fair Recruitment
                  </h3>
                  <p className="text-muted-foreground">
                    Promotes unbiased hiring practices across industries
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">
                    Equal Access
                  </h3>
                  <p className="text-muted-foreground">
                    Empowers communities with actionable insights
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">
                    Systemic Change
                  </h3>
                  <p className="text-muted-foreground">
                    Drives improvements through data-driven recommendations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">
                Ready to Make a Difference?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90">
                Join us in creating a more equitable future through AI-powered
                solutions.
              </p>
              <Button size="lg" variant="secondary" className="mt-4">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
