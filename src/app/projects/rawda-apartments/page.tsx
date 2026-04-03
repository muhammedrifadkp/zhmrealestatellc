import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function RawdaApartmentsPage() {
  const project = projectsData.find(p => p.id === "rawda-apartments");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
