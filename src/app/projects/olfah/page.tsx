import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function OlfahPage() {
  const project = projectsData.find(p => p.id === "olfah");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
