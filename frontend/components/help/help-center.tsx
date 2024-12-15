"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCategories } from "./help-categories";
import { HelpSearch } from "./help-search";
import { FAQSection } from "./faq-section";
import { SupportResources } from "./support-resources";
import { ContactSupport } from "./contact-support";
import { Search } from "lucide-react";

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <HelpSearch />
      
      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-6">
          <HelpCategories />
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <FAQSection />
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <SupportResources />
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <ContactSupport />
        </TabsContent>
      </Tabs>
    </div>
  );
}