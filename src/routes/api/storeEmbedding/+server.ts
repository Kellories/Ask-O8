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
        const { input, fileString, fileType,knowledgebaseid } = await request.json();

        let textToEmbed = "";
        console.log(input, fileString, fileType)
        if (fileString) {
            if (fileType === "pdf") {
                // Optional: Extract text from PDF fileString if it's Base64-encoded
                const pdfBuffer = Buffer.from(fileString, "base64");
                textToEmbed = await parsePDF(pdfBuffer);
            } else {
                // Treat fileString as plain text
                textToEmbed = fileString;
            }
        } else if (input) {
            textToEmbed = input.trim();
        } else {
            throw new Error("No input or file string provided.");
        }

        if (!textToEmbed || textToEmbed.length === 0) {
            throw new Error("No valid content found in the input or file string.");
        }

        console.log(textToEmbed)
        // Generate embeddings using OpenAI
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: textToEmbed,
        });
        console.log(embeddingResponse)
        const [{ embedding }] = embeddingResponse.data;
        let res = await createEmbedding(knowledgebaseid,embedding,input)
        return new Response(JSON.stringify({ embedding, text: textToEmbed }), {
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
