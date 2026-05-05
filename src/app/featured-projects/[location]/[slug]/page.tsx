import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData, getProjectRegion } from "@/data/projects";
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
  const projectRegion = getProjectRegion(project.location);

  if (location !== projectRegion && !project.location.toLowerCase().includes(location.replace(/-/g, ' '))) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
