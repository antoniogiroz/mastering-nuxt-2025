import { createOpenAiModel, generateChatResponse } from "../services/ai.service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  const openAiApiKey = useRuntimeConfig().openaiApiKey;
  const openAiModel = createOpenAiModel(openAiApiKey);

  const response = await generateChatResponse(openAiModel, messages);

  return {
    id,
      role: 'assistant',
      content: response,
  };
});
