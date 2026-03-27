import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function YasRivaPage() {
  const project = projectsData.find(p => p.id === "yas-riva");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
