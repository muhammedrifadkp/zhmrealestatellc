import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function Hamsa2Page() {
  const project = projectsData.find(p => p.id === "hamsa-2");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
