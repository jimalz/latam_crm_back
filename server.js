import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRoutes from "./src/routes/healthRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import customerRoutes from "./src/routes/customerRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";


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
