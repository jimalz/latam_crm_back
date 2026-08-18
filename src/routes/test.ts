import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ connected: true, time: result.rows[0] });
} catch (err: any) {
  res.status(500).json({ connected: false, error: err.message });
}

});


export default router;
