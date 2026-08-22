// MUST be first
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/customers", customerRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "latam_crm API is running" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
