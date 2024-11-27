CREATE TABLE IF NOT EXISTS "documents" (
	"id" uuid PRIMARY KEY NOT NULL,
	"knowledgebaseid" uuid NOT NULL,
	"content" text NOT NULL,
	"embedding" vector(1536) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "knowledgebase" (
	"id" uuid PRIMARY KEY NOT NULL,
	"display" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "documents" ADD CONSTRAINT "documents_knowledgebaseid_knowledgebase_id_fk" FOREIGN KEY ("knowledgebaseid") REFERENCES "public"."knowledgebase"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
