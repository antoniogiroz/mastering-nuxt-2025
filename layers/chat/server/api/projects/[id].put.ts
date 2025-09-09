import { getProjectById, updateProject } from '../../repository/project.repository';

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const project = await getProjectById(id);

  if (!project) {
    return null;
  }

  const body = await readBody(event);

  return updateProject(id, { name: body.name });
});
