import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();

export const submitReport = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;
  const { description } = req.body;

  try {
    const report = await prisma.report.create({
      data: {
        userId,
        description,
      },
    });
    res.status(201).json({ message: "Report submitted", reportId: report.id });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getReports = async (req: AuthRequest, res: Response) => {
  // For simplicity, allow only admins to retrieve reports
  if (req.user?.role !== "ADMIN")
    return res.status(403).json({ error: "Access denied" });

  const reports = await prisma.report.findMany({
    include: { user: true },
  });

  res.json(reports);
};
