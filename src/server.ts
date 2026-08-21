import express from "express";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
    time: new Date().toISOString(),
  });
});

// Mount auth routes
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
