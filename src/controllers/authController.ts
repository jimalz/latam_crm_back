import { prisma } from "../db/prisma.js";

import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existing = await prisma.users.findUnique({
      where: { email }
    });

    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: { name, email, password: hashed }
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

     const valid = await bcrypt.compare(password, user.password!);


    if (!valid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};
