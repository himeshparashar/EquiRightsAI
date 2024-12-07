import express from "express";
import { getUserProfile, updateUserProfile } from "../api/userController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.get("/:id", authenticate, getUserProfile);
router.put("/:id", authenticate, updateUserProfile);

export default router;
