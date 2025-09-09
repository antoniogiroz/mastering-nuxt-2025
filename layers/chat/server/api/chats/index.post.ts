import { createChat } from '../../repository/chat.repository';

export default defineEventHandler(async (event) => {
  const { title, projectId } = await readBody(event);

  return createChat({
    title,
    projectId,
  });
});
