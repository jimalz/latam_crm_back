import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "latam_crm API is running"
  });
};
