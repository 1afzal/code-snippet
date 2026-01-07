import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config()
const GEMINI_API_KEY = process.env.API_KEY;
if(!GEMINI_API_KEY){
    console.log("API KEY error..\n");
}
const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY || ""
})
async function genText(){
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "who are you ",
        config: {
            thinkingConfig:{
                thinkingBudget: 0, //disables thinking
            },
            systemInstruction: "You are a narcissistic old man",
            temperature: 0.1,
        }
    })
    console.log(response.text);
}
await genText();