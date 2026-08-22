import dotenv from "dotenv";
dotenv.config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const url = process.env.DATABASE_URL!;
console.log("USING URL:", url);

const adapter = new PrismaPg(url);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log("DB CONNECTION OK:", result);
  } catch (err: any) {
    console.error("DB CONNECTION ERROR:", err.message);
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
