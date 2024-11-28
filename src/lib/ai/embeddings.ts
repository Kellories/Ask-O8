import { sql } from '$lib/db'; // Import your database connection
import { v4 as uuidv4 } from 'uuid';
export const createEmbedding = async (
  knowledgebaseid: string,
  embedding: number[],
  content: string
) => {
  if (embedding.length !== 1536) {
    throw new Error("Embedding must be 1536 dimensions.");
  }

  try {
    const result = await sql`
      INSERT INTO documents (knowledgebaseid, embedding, content)
      VALUES (
        ${knowledgebaseid}, 
        ${JSON.stringify(embedding)}, -- Format embedding as a JSON array
        ${content}
      )
      RETURNING *;
    `;
    console.log("Embedding created successfully:", result);
    return result[0];
  } catch (error) {
    console.error("Error creating embedding:", error);
    throw error;
  }
};


export const findSimilarEmbeddings = async (embedding: number[], limit: number = 5) => {
  if (embedding.length !== 1536) {
    throw new Error("Embedding must be 1536 dimensions.");
  }

  try {
    const result = await sql`
      SELECT *, embedding <=> ${JSON.stringify(embedding)} AS similarity
      FROM documents
      WHERE embedding <=> ${JSON.stringify(embedding)} < 0.5
      ORDER BY similarity ASC
      LIMIT ${limit};
    `;
    console.log("Similar embeddings found:", result);
    return result;
  } catch (error) {
    console.error("Error finding similar embeddings:", error);
    throw error;
  }
};
