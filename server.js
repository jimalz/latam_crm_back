import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route for Railway
app.get("/", (req, res) => {
  res.send("LATAM CRM Backend Running");
});

// Routes
app.use("/auth", authRoutes);

// Correct Railway port binding
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




