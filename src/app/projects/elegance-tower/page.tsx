import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function EleganceTowerPage() {
  const project = projectsData.find(p => p.id === "elegance-tower");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
