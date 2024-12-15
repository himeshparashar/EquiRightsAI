export async function submitReport(formData: FormData) {
  try {
    const response = await fetch("/api/submit-report", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    // Navigate to the confirmation page with the case number as a query parameter
    window.location.href = `/help/reporting/confirmation?caseNumber=${data.caseNumber}`;
    return data;
  } catch (error) {
    console.error("Error submitting report:", error);
    throw error;
  }
}
