import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function SamaYasPage() {
  const project = projectsData.find(p => p.id === "sama-yas");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
