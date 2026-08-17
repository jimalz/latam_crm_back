import { Router } from 'express';
import { prisma } from "../prisma/prismaClient.ts";


const router = Router();

router.get('/test-db', async (req, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;
    res.json({ ok: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err });
  }
});

export default router;
