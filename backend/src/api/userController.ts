import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();

export const getUserProfile = async (req: AuthRequest, res: Response) => {
  const userId = parseInt(req.params.id);
  if (req.user?.userId !== userId)
    return res.status(403).json({ error: "Access denied" });

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json({ id: user.id, name: user.name, email: user.email });
};

export const updateUserProfile = async (req: AuthRequest, res: Response) => {
  const userId = parseInt(req.params.id);
  if (req.user?.userId !== userId)
    return res.status(403).json({ error: "Access denied" });

  const { name, email } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { name, email },
    });
    res.json({
      message: "Profile updated",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
