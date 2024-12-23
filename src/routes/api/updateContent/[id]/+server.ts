import { json } from '@sveltejs/kit';
import { fetchContent, em } from '$lib/ai/knowledgebase'; // Adjust this path to your schema or model

/**
 *  PUT request handler to fetch all knowledge base entries
 */
export const PUT = async ({ params }: { params: { id: string } }) => {
  try {
    

    // Return the response as JSON
    return json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching knowledge bases:', error);
    return json(
      { error: 'Error fetching knowledge bases. Please try again later.' },
      { status: 500 }
    );
  }
};
