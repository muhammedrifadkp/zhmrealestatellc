import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    location: string;
    slug: string;
  }>;
}

export default async function FeaturedProjectDetailPage({ params }: PageProps) {
  const { location, slug } = await params;

  const project = projectsData.find(p => p.slug === slug);
  
  if (!project || !project.isFeatured) {
    notFound();
  }

  // Validate location matches project region
  const projectRegion = project.location.toLowerCase().includes("abu dhabi") || 
                       project.location.toLowerCase().includes("yas island") ||
                       project.location.toLowerCase().includes("saadiyat") ||
                       project.location.toLowerCase().includes("reem island") ||
                       project.location.toLowerCase().includes("raha gardens") ||
                       project.location.toLowerCase().includes("golf gardens") ||
                       project.location.toLowerCase().includes("al raha beach") ? "abu-dhabi" :
                       project.location.toLowerCase().includes("dubai") ? "dubai" :
                       project.location.toLowerCase().includes("sharjah") ? "sharjah" :
                       project.location.toLowerCase().includes("ras al khaimah") ? "rak" : "";

  if (location !== projectRegion) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
