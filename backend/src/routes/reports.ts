import express from "express";
import { submitReport, getReports } from "../api/reportController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.post("/", authenticate, submitReport);
router.get("/", authenticate, getReports);

export default router;
