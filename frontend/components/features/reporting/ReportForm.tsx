"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { submitReport } from "@/lib/submitReport";

export default function ReportForm() {
  const router = useRouter();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await submitReport(formData);
      if (result.success) {
        router.push(`/confirmation/${result.caseNumber}`);
      } else {
        setError("Failed to submit report. Please try again.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto" id="report-form">
      <CardHeader>
        <CardTitle>Submit a Discrimination Report</CardTitle>
        <CardDescription>
          Please provide as much detail as possible about the incident.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="type">Type of Discrimination</Label>
            <Select name="type" required>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="race">Race</SelectItem>
                <SelectItem value="gender">Gender</SelectItem>
                <SelectItem value="age">Age</SelectItem>
                <SelectItem value="disability">Disability</SelectItem>
                <SelectItem value="religion">Religion</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              required
              className="min-h-[150px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={setIsAnonymous}
            />
            <Label htmlFor="anonymous">Remain Anonymous</Label>
          </div>

          {!isAnonymous && (
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Information (optional)</Label>
              <Input
                id="contact"
                name="contact"
                type="email"
                placeholder="Email address"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="documents">Supporting Documents (optional)</Label>
            <Input
              id="documents"
              name="documents"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Report"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
