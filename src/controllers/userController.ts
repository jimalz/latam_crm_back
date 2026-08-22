import { prisma } from "../db/prisma.js";
import { Request, Response } from "express";

// GET /users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany({
      orderBy: { id: "asc" },
      select: { id: true, name: true, email: true, created_at: true }
    });

    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Database error");
  }
};

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.users.findUnique({
      where: { id: Number(id) },
      select: { id: true, name: true, email: true, created_at: true }
    });

    if (!user) return res.status(404).send("User not found");

    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).send("Database error");
  }
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const user = await prisma.users.create({
      data: { name, email },
      select: { id: true, name: true, email: true, created_at: true }
    });

    res.json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Database error");
  }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const user = await prisma.users.update({
      where: { id: Number(id) },
      data: { name, email },
      select: { id: true, name: true, email: true, created_at: true }
    });

    res.json(user);
  } catch (err: any) {
    if (err.code === "P2025") return res.status(404).send("User not found");

    console.error("Error updating user:", err);
    res.status(500).send("Database error");
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.users.delete({
      where: { id: Number(id) },
      select: { id: true, name: true, email: true }
    });

    res.json({ message: "User deleted", user });
  } catch (err: any) {
    if (err.code === "P2025") return res.status(404).send("User not found");

    console.error("Error deleting user:", err);
    res.status(500).send("Database error");
  }
};
