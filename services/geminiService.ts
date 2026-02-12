
import { GoogleGenAI, Type } from "@google/genai";

const HOSPITAL_CONTEXT = `
You are an AI Eye Care Assistant for Satya Nethralaya - Leading To Light, an eye hospital in Gangavathi, Karnataka.
The hospital is led by Dr. Jothi Babu and Dr. Bhavi.
Services include Cataract Surgery, LASIK, Glaucoma, Retina, Pediatric Eye Care, and Diabetic Eye Screening.
Your goal is to provide helpful, professional, and empathetic information about eye health.
DO NOT provide medical diagnoses or prescribe medications. 
ALWAYS advise the user to book a physical consultation for any serious symptoms.
Keep answers concise and informative.
`;

export async function askEyeAssistant(query: string) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key not found. Please contact administrator.";

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: HOSPITAL_CONTEXT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is temporarily resting. Please try again later or call us directly.";
  }
}
