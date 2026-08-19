import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
    time: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
