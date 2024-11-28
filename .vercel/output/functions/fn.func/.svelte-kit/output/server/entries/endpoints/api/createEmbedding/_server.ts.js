import { O as OPENAI_KEY } from "../../../../chunks/private.js";
import OpenAI from "openai";
import "pdf-lib";
import "../../../../chunks/index4.js";
const POST = async ({ request }) => {
  const apiKey = OPENAI_KEY;
  console.log(request);
  const openai = new OpenAI({ apiKey });
  try {
    const { input } = await request.json();
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input
    });
    console.log(embeddingResponse);
    const [{ embedding }] = embeddingResponse.data;
    return new Response(JSON.stringify({ embedding, text: input }), {
      status: 200
    });
  } catch (err) {
    console.error("Error creating embeddings:", err.message);
    return new Response(
      JSON.stringify({ error: "Failed to create embeddings", details: err.message }),
      { status: 500 }
    );
  }
};
export {
  POST
};
