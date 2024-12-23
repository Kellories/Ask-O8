import {sql} from '$lib/db'; // Adjust this path to your database connection
import { v4 as uuidv4 } from 'uuid';

// Create a Knowledge Base
export const createKnowledgeBase = async (display: string) => {
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

export const getKnowledgeBaseById = async (id: string) => {
  try {
    // Fetch the knowledge base entry
    const knowledgeBaseResult = await sql`
      SELECT *
      FROM knowledgebase
      WHERE id = ${id};
    `;

    const knowledgeBase = knowledgeBaseResult[0] || null;

    if (!knowledgeBase) {
      return null; // Return null if the knowledge base doesn't exist
    }

    // Fetch associated documents for the knowledge base
    const documentsResult = await sql`
      SELECT *
      FROM documents
      WHERE knowledgebaseid = ${id}
      ORDER BY created_at DESC;
    `;

    // Return the knowledge base along with its associated documents
    return {
      ...knowledgeBase,
      documents: documentsResult || [], // Attach documents to the knowledge base
    };
  } catch (error) {
    console.error("Error fetching knowledge base by ID:", error);
    throw error; // Rethrow the error for the calling function to handle
  }
};

// Fetch All Knowledge Bases
export const getAllKnowledgeBases = async () => {
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

// Update Knowledge Base
export const updateKnowledgeBase = async (id: string, display: string) => {
  try {
    const result = await sql`
      UPDATE knowledgebase
      SET display = ${display}
      WHERE id = ${id}
      RETURNING *;
    `;
    console.log("Knowledge base updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating knowledge base:", error);
    throw error;
  }
};

// Delete Knowledge Base
export const deleteKnowledgeBase = async (id: string) => {
  try {
    const result = await sql`
      DELETE FROM knowledgebase
      WHERE id = ${id}
      RETURNING *;
    `;
    console.log("Knowledge base deleted successfully:", result);
    return result;
  } catch (error) {
    console.error("Error deleting knowledge base:", error);
    throw error;
  }
};


//delete documents

export const deleteContent = async (id : string) => {
  try {
    const result = await sql `
      DELETE FROM documents
      WHERE id = ${id}
      RETURNING *
    `

    console.log("Content deleted successfully:", result)
    return result
  } catch (error) {
    console.error("Error deleting knowledge base", error)
    throw error;
  }
}

export const fetchContent = async (id : string) => {
  try {
    const result = await sql `
    SELECT * FROM documents
    WHERE id = ${id}
  `
    console.log('Content fetched successfully', result)
    return result
  } catch (error) {
    console.error("Error fetching content", error)
    throw error
  }
}

export const updateContent = async (id : string, newContent : string) => {
 try {
  const result = await sql`
  INSERT INTO documents VALUES 
  WHERE id = ${id}
  `
 } catch (error) {
  
 } 
}