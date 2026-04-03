import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function SoleraPage() {
  const project = projectsData.find(p => p.id === "solera");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
