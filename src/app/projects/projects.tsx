"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./page";
import ProjectCard from "@/components/ProjectCard";

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


 