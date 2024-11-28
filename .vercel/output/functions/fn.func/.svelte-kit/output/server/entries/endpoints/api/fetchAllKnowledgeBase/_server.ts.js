import { j as json } from "../../../../chunks/index2.js";
import { g as getAllKnowledgeBases } from "../../../../chunks/knowledgebase.js";
const GET = async () => {
  try {
    const response = await getAllKnowledgeBases();
    return json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching knowledge bases:", error);
    return json(
      { error: "Error fetching knowledge bases. Please try again later." },
      { status: 500 }
    );
  }
};
export {
  GET
};
