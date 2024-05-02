import { Project } from "@/types/globals";

export const getProject = async (id: number): Promise<Project> => {
  return fetch(`http://localhost:3001/projects/${id}`).then(res => res.json());
};
