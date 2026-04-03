import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default function SharjahWaterfrontCityPage() {
  const project = projectsData.find(p => p.id === "sharjah-waterfront-city");
  
  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
