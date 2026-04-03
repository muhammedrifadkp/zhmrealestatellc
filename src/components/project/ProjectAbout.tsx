"use client";

import { ProjectProperty } from "@/data/projects";

export default function ProjectAbout({ project }: { project: ProjectProperty }) {
  const hasVideo = !!project.videoUrl;

  return (
    <section className="py-20 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid gap-12 items-center ${hasVideo ? 'lg:grid-cols-2' : ''}`}>
          
          {/* Text Content */}
          <div className={hasVideo ? "text-left" : "text-center max-w-5xl mx-auto"}>
            <span className={`section-label mb-6 ${hasVideo ? 'justify-start' : 'justify-center'}`}>
              About The Project
            </span>
            <h2 className={`heading-luxury text-4xl mb-8 ${hasVideo ? '' : 'text-center'}`}>
              {project.name} - {project.location}
            </h2>
            <p className={`text-gray-600 leading-relaxed text-lg ${hasVideo ? '' : 'max-w-4xl mx-auto'}`}>
              {project.description}
            </p>
          </div>

          {/* Video Content */}
          {hasVideo && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={project.videoUrl}
                title={`About ${project.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
