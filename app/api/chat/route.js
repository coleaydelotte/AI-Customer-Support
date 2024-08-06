import { GoogleGenerativeAI } from "@google/generative-ai";

import {NextResponse} from 'next/server'
export async function POST(req) {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Hello where is CSU Bakersfield?";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    return NextResponse.json({message: 'Hello from the server!'})
}