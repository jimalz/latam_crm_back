import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

export default {
  adapter: new PrismaPg(process.env.DATABASE_URL!),
};
