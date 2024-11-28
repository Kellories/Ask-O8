import { j as json } from "../../../../chunks/index2.js";
import { f as findSimilarEmbeddings } from "../../../../chunks/embeddings.js";
const POST = async ({ request }) => {
  try {
    const { knowledgebaseid, embedding, limit } = await request.json();
    const result = await findSimilarEmbeddings(knowledgebaseid, embedding, limit);
    return json(result[0], { status: 200 });
  } catch (error) {
    console.error("Error in findSimilarEmbeddings endpoint:", error);
    return json(
      { error: "An error occurred while finding similar embeddings." },
      { status: 500 }
    );
  }
};
export {
  POST
};
