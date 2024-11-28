// src/routes/api/findSimilarEmbeddings/+server.ts

import { json } from '@sveltejs/kit';
import { findSimilarEmbeddings } from '$lib/ai/embeddings'; // Adjust to the correct path for your function

export const POST = async ({ request }) => {
  try {
    // Parse the request body
    const { knowledgebaseid, embedding, limit } = await request.json();



    // Call the function to find similar embeddings
    const result = await findSimilarEmbeddings(knowledgebaseid, embedding, limit);

    // Return the result as JSON
    return json(result[0], { status: 200 });
  } catch (error) {
    console.error('Error in findSimilarEmbeddings endpoint:', error);

    // Return error response
    return json(
      { error: 'An error occurred while finding similar embeddings.' },
      { status: 500 }
    );
  }
};
