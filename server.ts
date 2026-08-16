import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRoutes from "./src/routes/healthRoutes.ts";
import authRoutes from "./src/routes/authRoutes.ts";
import customerRoutes from "./src/routes/customerRoutes.ts";
import userRoutes from "./src/routes/userRoutes.ts";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/customers", customerRoutes);
app.use("/users", userRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "latam_crm API is running" });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
