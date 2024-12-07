import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import resumeRoutes from "./routes/resumes";
import policyRoutes from "./routes/policies";
import reportRoutes from "./routes/reports";
import metricRoutes from "./routes/metrics";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/resumes", resumeRoutes);
app.use("/policies", policyRoutes);
app.use("/reports", reportRoutes);
app.use("/metrics", metricRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
