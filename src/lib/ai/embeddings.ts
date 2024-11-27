import { db } from '$lib/db'; // Import your database connection
import { documents } from '$lib/db/schema'; // Adjust the path as necessary
import { v4 as uuidv4 } from 'uuid';
import { sql } from 'drizzle-orm';

export const createEmbeddings = async (knowledgebaseid: string, embeddings: number[], content: string) => {
  if (embeddings.length !== 1536) {
    throw new Error("Embedding must be 1536 dimensions.");
  }

  try {
    await db.insert(documents).values({
      id: uuidv4(),
      knowledgebaseid: knowledgebaseid,
      content: content,
      embedding: embeddings,
    });

    console.log("Embedding inserted successfully.");
  } catch (error) {
    console.error("Error inserting embedding:", error);
  }
};

export const findSimilarEmbeddings = async (embedding: number[], limit: number = 5) => {
    if (embedding.length !== 1536) {
      throw new Error("Embedding must be 1536 dimensions.");
    }
  
    try {
      const results = await db
        .select()
        .from(documents)
        .where(sql`embedding <=> ${embedding} < 0.5`) // Using cosine similarity threshold of 0.5
        .orderBy(sql`embedding <=> ${embedding}`) // Order by similarity (ascending)
        .limit(limit); // Limit the number of results
  
      console.log("Similar embeddings found:", results);
      return results;
    } catch (error) {
      console.error("Error performing similarity search:", error);
      throw error;
    }
  };
