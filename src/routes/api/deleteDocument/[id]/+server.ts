import { json,error } from '@sveltejs/kit';
import { deleteContent } from '$lib/ai/knowledgebase'; 


export const DELETE = async ({ params }: { params: { id: string } }) => {
    try {
        let res = await deleteContent(params.id)
        if(!res){
        throw error(404, 'Content not found');
        }
        return json({ message: 'Content Deleted Successfully' }, { status: 201 });
    } catch (err) {
        console.error('Error creating knowledge base:', err);
        return json({ error: 'Failed to create knowledge base' }, { status: 500 });
    }
};
