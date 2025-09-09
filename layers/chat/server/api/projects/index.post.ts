import { createProject } from '../../repository/project.repository';

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);

  return createProject({ name });
});
