import { createMessageForChat, getMessagesByChatId } from '../../../../repository/chat.repository';
import { createOpenAiModel, generateChatResponse } from '../../../../services/ai.service';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const history = getMessagesByChatId(id);

  const openai = createOpenAiModel(
    useRuntimeConfig().openaiApiKey,
  );
  const reply = await generateChatResponse(openai, history);

  return createMessageForChat({
    chatId: id,
    content: reply,
    role: 'assistant',
  });
});
