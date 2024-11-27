import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "./supabase/migrations",
  dbCredentials: {
    url:"postgresql://postgres.ynsywygjnvyqddgiogns:Octo8123!@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres",
    ssl: false
  },
});
