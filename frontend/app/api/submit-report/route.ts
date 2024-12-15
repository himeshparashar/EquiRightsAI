import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate a random case number
    const caseNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

    return NextResponse.json({ success: true, caseNumber });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to submit report" },
      { status: 500 }
    );
  }
}
