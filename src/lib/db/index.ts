import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { DATABASE_URL } from "$env/static/private";

export const sql = postgres(DATABASE_URL, {
  ssl: { rejectUnauthorized: false }, // Supabase requires SSL
});

export const db = drizzle(sql, { schema });
