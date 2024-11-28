import { s as sql } from "./index4.js";
const createEmbedding = async (knowledgebaseid, embedding, content) => {
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
const findSimilarEmbeddings = async (knowledgebaseid, embedding, limit = 5) => {
  if (embedding.length !== 1536) {
    throw new Error("Embedding must be 1536 dimensions.");
  }
  try {
    const result = await sql`
      SELECT *, embedding <=> ${JSON.stringify(embedding)} AS similarity
      FROM documents
      WHERE embedding <=> ${JSON.stringify(embedding)} < 0.5
      AND knowledgebaseid = ${knowledgebaseid}
      ORDER BY similarity ASC
      LIMIT ${limit};
    `;
    return result;
  } catch (error) {
    console.error("Error finding similar embeddings:", error);
    throw error;
  }
};
export {
  createEmbedding as c,
  findSimilarEmbeddings as f
};
