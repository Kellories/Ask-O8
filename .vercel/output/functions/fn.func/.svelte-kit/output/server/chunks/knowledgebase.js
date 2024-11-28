import { s as sql } from "./index4.js";
const createKnowledgeBase = async (display) => {
  try {
    const result = await sql`
      INSERT INTO knowledgebase (display)
      VALUES  (${display})
      RETURNING *;
    `;
    console.log("Knowledge base created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating knowledge base:", error);
    throw error;
  }
};
const getKnowledgeBaseById = async (id) => {
  try {
    const knowledgeBaseResult = await sql`
      SELECT *
      FROM knowledgebase
      WHERE id = ${id};
    `;
    const knowledgeBase = knowledgeBaseResult[0] || null;
    if (!knowledgeBase) {
      return null;
    }
    const documentsResult = await sql`
      SELECT *
      FROM documents
      WHERE knowledgebaseid = ${id}
      ORDER BY created_at DESC;
    `;
    return {
      ...knowledgeBase,
      documents: documentsResult || []
      // Attach documents to the knowledge base
    };
  } catch (error) {
    console.error("Error fetching knowledge base by ID:", error);
    throw error;
  }
};
const getAllKnowledgeBases = async () => {
  try {
    const result = await sql`
      SELECT * FROM knowledgebase;
    `;
    return result;
  } catch (error) {
    console.error("Error fetching all knowledge bases:", error);
    throw error;
  }
};
export {
  getKnowledgeBaseById as a,
  createKnowledgeBase as c,
  getAllKnowledgeBases as g
};
