import getQueryClient from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Projects, { getProjects } from "./projects";

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
