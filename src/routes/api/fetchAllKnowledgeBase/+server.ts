import { json } from '@sveltejs/kit';
import { getAllKnowledgeBases } from '$lib/ai/knowledgebase'; // Adjust this path to your schema or model

/**
 * GET request handler to fetch all knowledge base entries
 */
export const GET = async () => {
  try {
    const response = await getAllKnowledgeBases();

    // Return the response as JSON
    return json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching knowledge bases:', error);

    // Return error response
    return json(
      { error: 'Error fetching knowledge bases. Please try again later.' },
      { status: 500 }
    );
  }
};
