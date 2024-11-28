import { OPENAI_KEY } from "$env/static/private";
import OpenAI from "openai";
import { parsePDF } from "$lib/pdf"; // Optional if still extracting PDF content
import { createEmbedding } from "$lib/ai/embeddings.js";
export const POST = async ({ request }) => {
    const apiKey = OPENAI_KEY;
    console.log(request)
    if (!apiKey) {
        return new Response(JSON.stringify({ error: "Missing OpenAI API Key" }), {
            status: 500,
        });
    }

    const openai = new OpenAI({ apiKey });

    try {
        const { input } = await request.json();


        // Generate embeddings using OpenAI
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: input,
        });
        console.log(embeddingResponse)
        const [{ embedding }] = embeddingResponse.data;
        return new Response(JSON.stringify({ embedding, text: input }), {
            status: 200,
        });
    } catch (err) {
        console.error("Error creating embeddings:", err.message);
        return new Response(
            JSON.stringify({ error: "Failed to create embeddings", details: err.message }),
            { status: 500 }
        );
    }
};
