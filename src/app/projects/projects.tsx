"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/globals";
export const getProjects = async (): Promise<Project[]> => {
  return fetch("http://localhost:3001/projects").then(res => res.json());
};
export default function Projects() {
  const { data } = useQuery({ queryKey: ["projects"], queryFn: getProjects });
  return (
    <div className="w-full grid xl:grid-cols-3 gap-5 justify-items-center">
      {data?.map(project => (
        <ProjectCard key={project.id} payload={project} />
      ))}
    </div>
  );
}


 