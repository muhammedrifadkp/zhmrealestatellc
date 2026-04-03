import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ExpoGolfVillasPage() {
  const project = projectsData.find(p => p.id === "expo-golf-villas");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
