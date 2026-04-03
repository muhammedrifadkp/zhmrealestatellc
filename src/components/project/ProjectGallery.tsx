"use client";

import { useState } from "react";
import { ProjectProperty } from "@/data/projects";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ProjectGallery({ project }: { project: ProjectProperty }) {
  const [index, setIndex] = useState(-1);
  if (!project.galleryImages || project.galleryImages.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Gallery</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative h-64 md:h-80 w-full overflow-hidden group luxury-card cursor-pointer"
              onClick={() => setIndex(idx)}
            >
              <Image 
                src={img} 
                alt={`${project.name} Gallery Image ${idx + 1}`} 
                fill 
                unoptimized={true}
                className="object-cover property-img-zoom"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={project.galleryImages.map((src) => ({ src }))}
          plugins={[Zoom]}
          carousel={{ padding: 0 }}
          animation={{ fade: 250 }}
        />
      </div>
    </section>
  );
}
