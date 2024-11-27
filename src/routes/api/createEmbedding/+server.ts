import { OPENAI_KEY } from "$env/static/private";
import OpenAI from "openai";

// A POST endpoint to create embeddings
export async function POST({ request }) {
    const { input } = await request.json();
    const apiKey = OPENAI_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ error: "Missing OpenAI API Key" }), { status: 500 });
    }

    const openai = new OpenAI({ apiKey });

    try {
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: input,
            encoding_format: "float",
        });

        const [{ embedding }] = embeddingResponse.data
        // console.log({embedding})
        return new Response(JSON.stringify({ embedding }));
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to create embeddings" }), { status: 500 });
    }
}
