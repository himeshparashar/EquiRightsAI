import express from "express";
import {
  uploadResume,
  getResume,
  getResumeAnalysis,
} from "../api/resumeController";
import { authenticate } from "../middleware/auth";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/resumes/" });

router.post("/", authenticate, upload.single("resume"), uploadResume);
router.get("/:id", authenticate, getResume);
router.get("/:id/analysis", authenticate, getResumeAnalysis);

export default router;
