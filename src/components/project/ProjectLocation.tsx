"use client";

import { ProjectProperty } from "@/data/projects";

export default function ProjectLocation({ project }: { project: ProjectProperty }) {
  return (
    <section className="py-20 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Location Benefits</span>
          <h2 className="heading-luxury text-4xl mt-4">Location</h2>
        </div>

        {project.locationBenefits && (
          <div className="mb-10 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">{project.locationBenefits.description}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {project.locationBenefits.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="w-full h-[500px] bg-gray-200 rounded-xl overflow-hidden luxury-card relative">
          {project.mapCode ? (
            <iframe 
              src={`${project.mapCode}&output=embed`} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${project.name} Location`}
            ></iframe>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-center p-6 text-gray-500">
              <div>
                <span className="block text-4xl mb-4">🗺️</span>
                <p>Map view for {project.name} at {project.location}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
