import { json } from '@sveltejs/kit';
import { createKnowledgeBase } from '$lib/ai/knowledgebase'; 


export const POST = async ({ request }) => {
    try {
        const newContent = await request.json();
        if (!newContent) {
            return json({ error: 'Missing fields' }, { status: 400 });
        }

        
        return json({ message: 'Knowledge base created successfully' }, { status: 201 });
    } catch (err) {
        console.error('Error creating knowledge base:', err);
        return json({ error: 'Failed to create knowledge base' }, { status: 500 });
    }
};
