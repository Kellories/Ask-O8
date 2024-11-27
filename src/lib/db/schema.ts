import { pgTable, text, uuid , vector} from "drizzle-orm/pg-core";


export const profileTable = pgTable("profile", {
  id: uuid("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
});

export const knowledgebase = pgTable("knowledgebase", {
  id: uuid("id").primaryKey(),
  display: text("display").notNull(),
});

export const documents = pgTable("documents", {
  id: uuid("id").primaryKey(),
  knowledgebaseid: uuid("knowledgebaseid").notNull().references(() => knowledgebase.id),
  content: text("content").notNull(),
  embedding: vector("embedding", {dimensions:1536}).notNull(), // Define embedding as a vector with 1536 dimensions
});
