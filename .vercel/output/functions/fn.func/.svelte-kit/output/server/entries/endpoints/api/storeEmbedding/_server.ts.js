import { O as OPENAI_KEY } from "../../../../chunks/private.js";
import OpenAI from "openai";
import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import { c as createEmbedding } from "../../../../chunks/embeddings.js";
const parsePDF = async (filePath) => {
  try {
    const buffer = await fs.readFile(filePath);
    const pdfDoc = await PDFDocument.load(buffer);
    const pages = pdfDoc.getPages();
    const extractedText = pages.map((page) => page.getTextContent());
    return extractedText.join("\n").trim();
  } catch (error) {
    console.error("Error parsing PDF:", error.message);
    throw new Error("Failed to parse PDF file.");
  }
};
const POST = async ({ request }) => {
  const apiKey = OPENAI_KEY;
  console.log(request);
  const openai = new OpenAI({ apiKey });
  try {
    const { input, fileString, fileType, knowledgebaseid } = await request.json();
    let textToEmbed = "";
    console.log(input, fileString, fileType);
    if (fileString) {
      if (fileType === "pdf") {
        const pdfBuffer = Buffer.from(fileString, "base64");
        textToEmbed = await parsePDF(pdfBuffer);
      } else {
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
    console.log(textToEmbed);
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: textToEmbed
    });
    console.log(embeddingResponse);
    const [{ embedding }] = embeddingResponse.data;
    let res = await createEmbedding(knowledgebaseid, embedding, input);
    return new Response(JSON.stringify({ embedding, text: textToEmbed }), {
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
