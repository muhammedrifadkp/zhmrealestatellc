"use client";

import { ProjectProperty } from "@/data/projects";

export default function ProjectAbout({ project }: { project: ProjectProperty }) {
  return (
    <section className="py-20 bg-[#f8f7f4]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="section-label mb-6 justify-center">About The Project</span>
        <h2 className="heading-luxury text-4xl mb-8">{project.name} - {project.location}</h2>
        <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
          {project.description}
        </p>
      </div>
    </section>
  );
}
