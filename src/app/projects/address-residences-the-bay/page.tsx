import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function AddressResidencesPage() {
  const project = projectsData.find(p => p.id === "address-residences-the-bay");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
