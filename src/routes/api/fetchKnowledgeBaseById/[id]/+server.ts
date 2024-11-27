import { error, json } from '@sveltejs/kit';
import { getKnowledgeBaseById } from '$lib/ai/knowledgebase';

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const knowledgeBase = await getKnowledgeBaseById(params.id);

    if (!knowledgeBase) {
      throw error(404, 'Knowledge base not found');
    }

    return json(knowledgeBase);
  } catch (err) {
    console.error('Error in GET /api/fetchKnowledgeBaseById:', err);
    throw error(500, 'Internal Server Error');
  }
};
