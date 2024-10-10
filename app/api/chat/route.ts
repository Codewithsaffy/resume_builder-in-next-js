import { convertToCoreMessages, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds

export const runtime = "edge";

export const maxDuration = 30;
const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama3-8b-8192"),
    maxTokens: 1000,
    messages:convertToCoreMessages(messages),
  });

  console.log(result)
  return result.toDataStreamResponse();
}
