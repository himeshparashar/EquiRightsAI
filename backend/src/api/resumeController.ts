import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();

// Simulate AI analysis function
const analyzeResume = async (filePath: string) => {
  // Implement AI analysis here or call external service
  return { biasScore: 0.1, recommendations: [] };
};

export const uploadResume = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;
  const filePath = req.file?.path;

  if (!filePath) return res.status(400).json({ error: "File upload failed" });

  try {
    // Save resume record
    const resume = await prisma.resume.create({
      data: {
        userId,
        filePath,
      },
    });

    // Analyze resume
    const analysisResult = await analyzeResume(filePath);

    // Save analysis result
    await prisma.analysisResult.create({
      data: {
        data: analysisResult,
        resumeId: resume.id,
      },
    });

    res
      .status(201)
      .json({ message: "Resume uploaded and analyzed", resumeId: resume.id });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getResume = async (req: AuthRequest, res: Response) => {
  const resumeId = parseInt(req.params.id);
  const resume = await prisma.resume.findUnique({
    where: { id: resumeId },
    include: { user: true },
  });

  if (!resume) return res.status(404).json({ error: "Resume not found" });
  if (resume.userId !== req.user!.userId)
    return res.status(403).json({ error: "Access denied" });

  res.json(resume);
};

export const getResumeAnalysis = async (req: AuthRequest, res: Response) => {
  const resumeId = parseInt(req.params.id);
  const analysisResult = await prisma.analysisResult.findFirst({
    where: { resumeId },
  });

  if (!analysisResult)
    return res.status(404).json({ error: "Analysis result not found" });

  res.json(analysisResult.data);
};
