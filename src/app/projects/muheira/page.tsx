import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function MuheiraPage() {
  const project = projectsData.find(p => p.id === "muheira");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
