"use client";

import { ProjectProperty } from "@/data/projects";
import Image from "next/image";

export default function ProjectGallery({ project }: { project: ProjectProperty }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Gallery</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.galleryImages.map((img, idx) => (
            <div key={idx} className="relative h-64 md:h-80 w-full overflow-hidden group luxury-card">
              <Image 
                src={img} 
                alt={`${project.name} Gallery Image ${idx + 1}`} 
                fill 
                className="object-cover property-img-zoom"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
