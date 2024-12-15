"use server";

import { revalidatePath } from "next/cache";

export async function submitReport(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Here you would typically save the report to a database
  // For this example, we'll just generate a random case number
  const caseNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  // Revalidate the confirmation page
  revalidatePath("/confirmation/[caseNumber]");

  return { success: true, caseNumber };
}
