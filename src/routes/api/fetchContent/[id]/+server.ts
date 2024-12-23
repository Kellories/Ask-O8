import { json } from '@sveltejs/kit';
import { fetchContent } from '$lib/ai/knowledgebase'; // Adjust this path to your schema or model

/**
 * GET request handler to fetch all knowledge base entries
 */
export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const response = await fetchContent(params.id);

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
