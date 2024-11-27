// src/routes/api/knowledgebase/+server.ts
import { json } from '@sveltejs/kit';
import { db } from '$lib/db'; // Adjust this path to your database connection file
import { getAllKnowledgeBases } from '$lib/ai/knowledgebase'; // Adjust this path to your schema

// GET request handler to fetch all knowledge base entries
export const GET = async () => {
  try {
    let response = await getAllKnowledgeBases()
    console.log(response)
    return json(response);
  } catch (error) {
    console.log(error)
    console.error("Error fetching knowledge bases:", error);
    return json({ error: "Error fetching knowledge bases" }, { status: 500 });
  }
};
