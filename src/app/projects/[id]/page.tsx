"use client";
import { Project } from "@/types/globals";
import { useQuery } from "@tanstack/react-query";
export const getProject = async (id: number): Promise<Project> => {
  return fetch(`http://localhost:3001/projects/${id}`).then(res => res.json());
};
const ProjectsDetailsPage = ({
  params
}: {
  params: Record<string, string>;
}) => {
  const { data } = useQuery({
    queryKey: ["project", params.id],
    queryFn: async () => await getProject(Number(params.id))
  });
  return (
    <div className="">
      <div>
        <span className="font-bold">Project Id:</span> {data?.id}
      </div>
      <div>
        <span className="font-bold">Name:</span> {data?.name}
      </div>
      <div>
        <span className="font-bold">Description:</span> {data?.description}
      </div>
      <div>
        <span className="font-bold">Tasks:</span>{" "}
        {data?.tasks.map(t => t.title).join(", ")}
      </div>
      <div>
        <span className="font-bold">Members:</span>{" "}
        {data?.teamMembers.map(m => m.name).join(", ")}
      </div>
      <div>
        <span className="font-bold">Recent Activities:</span>{" "}
        {data?.recentActivities.length}
      </div>
    </div>
  );
};

export default ProjectsDetailsPage;
