
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => {
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const getDesignAdvice = async (userInput: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: `You are the AI Design Consultant for TSALACH DESIGNS, a premium Ghanaian architectural and construction firm. 
        Your goal is to answer questions about architecture, structural design, and construction specifically in the context of Ghana (Accra, Kumasi, Koforidua).
        Provide professional, encouraging, and insightful advice.
        If someone asks for a price, explain that costs vary based on site conditions and material choices, and suggest booking a consultation.
        Highlight TSALACH DESIGNS' commitment to "innovation and imagination".
        Keep responses concise and professional.`,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently optimizing my design algorithms. Please try again in a moment or contact our human experts directly!";
  }
};
