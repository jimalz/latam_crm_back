import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL
    }
  },
generator client {
  provider = "prisma-client-js"
  output   = "./src/generated/prisma"
}

});

