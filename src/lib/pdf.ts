import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";

export const parsePDF = async (filePath: string): Promise<string> => {
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
