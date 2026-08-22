import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Auth routes
app.use("/auth", authRoutes);

// Health route
app.use("/health", healthRoutes);

// Simple test route
app.get("/me", (req, res) => {
  res.json({
    status: "ok",
    message: "latam_crm API is running",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
