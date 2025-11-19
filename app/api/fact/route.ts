import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an assistant that receives a name of a Greek god or mythological figure and provides a short, obscure, and interesting fact about them. Keep it under 2 sentences. Do not include any introductory text. Just the fact.`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const god = searchParams.get("god");

  if (!god) {
    return NextResponse.json({ error: "God name is required" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY!;

  if (!apiKey) {
    console.error("SERVER ERROR: GEMINI_API_KEY is not defined in .env.local");
    return NextResponse.json({ error: "API key configuration error" }, { status: 500 });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Configure safety settings to allow mythological themes
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
    });

    const prompt = `${SYSTEM_PROMPT}\n\nTell me an obscure fact about ${god}.`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = result.response; // removed 'await' as it is not needed here
    const text = response.text(); 
    
    return NextResponse.json({ fact: text.trim() });

  } catch (error: any) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      { error: "Failed to consult the oracle." },
      { status: 500 }
    );
  }
}