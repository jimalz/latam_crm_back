import { Router } from "express";
import { prisma } from "../db/prisma.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "latam_crm API is running"
  });
});

router.get("/db", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ db: "ok" });
  } catch (err: any) {
    res.status(500).json({ db: "error", detail: err.message });
  }
});

export default router;
