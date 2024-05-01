import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Projects from "./projects";
import getQueryClient from "@/utils/get-query-client";

export const getProjects = async () => {
  return fetch("http://localhost:3001/projects").then(res => res.json());
};
export default async function ProjectsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: getProjects
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Projects />
    </HydrationBoundary>
  );
}
