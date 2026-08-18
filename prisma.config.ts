import { defineConfig } from "prisma/config";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default defineConfig({
  adapter: new PrismaPg(pool),
  schema: "./prisma/schema.prisma"
});
