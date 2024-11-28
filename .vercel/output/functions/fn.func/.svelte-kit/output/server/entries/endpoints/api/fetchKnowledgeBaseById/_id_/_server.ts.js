import { e as error, j as json } from "../../../../../chunks/index2.js";
import { a as getKnowledgeBaseById } from "../../../../../chunks/knowledgebase.js";
const GET = async ({ params }) => {
  try {
    const knowledgeBase = await getKnowledgeBaseById(params.id);
    if (!knowledgeBase) {
      throw error(404, "Knowledge base not found");
    }
    return json(knowledgeBase);
  } catch (err) {
    console.error("Error in GET /api/fetchKnowledgeBaseById:", err);
    throw error(500, "Internal Server Error");
  }
};
export {
  GET
};
