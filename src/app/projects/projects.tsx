"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./page";

export default function Projects() {
  const { data } = useQuery({ queryKey: ["projects"], queryFn: getProjects });
  console.log(data);
  return (
    <div className="">
      <h2 className="">Projects {data.length} </h2>
    </div>
  );
}
