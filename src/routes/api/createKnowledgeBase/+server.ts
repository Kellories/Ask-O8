import { json } from '@sveltejs/kit';
import { createKnowledgeBase } from '$lib/ai/knowledgebase'; 


export const POST = async ({ request }) => {
    try {
        const newKnowledgeBase = await request.json();
        if (!newKnowledgeBase.display) {
            return json({ error: 'Missing fields' }, { status: 400 });
        }
        let res = await createKnowledgeBase(newKnowledgeBase.display)
        return json({ message: 'Knowledge base created successfully' }, { status: 201 });
    } catch (err) {
        console.error('Error creating knowledge base:', err);
        return json({ error: 'Failed to create knowledge base' }, { status: 500 });
    }
};
