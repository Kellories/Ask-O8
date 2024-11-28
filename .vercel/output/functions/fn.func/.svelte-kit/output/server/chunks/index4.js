import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pgTable, uuid, text, vector } from "drizzle-orm/pg-core";
import { D as DATABASE_URL } from "./private.js";
const profileTable = pgTable("profile", {
  id: uuid("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull()
});
const knowledgebase = pgTable("knowledgebase", {
  id: uuid("id").primaryKey(),
  display: text("display").notNull()
});
const documents = pgTable("documents", {
  id: uuid("id").primaryKey(),
  knowledgebaseid: uuid("knowledgebaseid").notNull().references(() => knowledgebase.id),
  content: text("content").notNull(),
  embedding: vector("embedding", { dimensions: 1536 }).notNull()
  // Define embedding as a vector with 1536 dimensions
});
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  documents,
  knowledgebase,
  profileTable
}, Symbol.toStringTag, { value: "Module" }));
const sql = postgres(DATABASE_URL, {
  ssl: { rejectUnauthorized: false }
  // Supabase requires SSL
});
const db = drizzle(sql, { schema });
export {
  db as d,
  profileTable as p,
  sql as s
};
