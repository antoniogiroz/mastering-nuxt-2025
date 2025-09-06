import type { LanguageModel, ModelMessage } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { createOllama } from 'ollama-ai-provider-v2';

export function createOllamaModel() {
  const provider = createOllama();

  return provider('qwen3:8b');
}

export function createOpenAiModel(apiKey: string) {
  const provider = createOpenAI({
    apiKey,
  });

  return provider('gpt-4o-mini');
}

export async function generateChatResponse(model: LanguageModel, messages: ModelMessage[]) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error('Invalid messages format');
  }

  const response = await generateText({
    model,
    messages,
  });

  return response.text.trim();
}
