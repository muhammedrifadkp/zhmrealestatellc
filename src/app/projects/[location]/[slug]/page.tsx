import ProjectTemplate from "@/components/project/ProjectTemplate";
import { projectsData, getProjectRegion } from "@/data/projects";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    location: string;
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { location, slug } = await params;

  const project = projectsData.find(p => p.slug === slug);
  
  if (!project) {
    // Check if slug is actually a community/area name
    const humanizedSlug = slug.replace(/-/g, ' ');
    const isArea = projectsData.some(p => 
      p.location.toLowerCase().includes(humanizedSlug.toLowerCase())
    );

    if (isArea) {
      // Redirect to the listing page for this area
      redirect(`/projects/${slug}`);
    }
    
    notFound();
  }

  // If this is a featured project, redirect to the featured section
  if (project.isFeatured) {
    redirect(`/featured-projects/${getProjectRegion(project.location)}/${slug}`);
  }

  // Validate location matches project region
  const projectRegion = getProjectRegion(project.location);

  // If the URL location segment doesn't match the region, 
  // but it's a more specific location (like yas-island vs abu-dhabi),
  // we should still allow it or redirect to the correct canonical URL.
  if (location !== projectRegion && !project.location.toLowerCase().includes(location.replace(/-/g, ' '))) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
