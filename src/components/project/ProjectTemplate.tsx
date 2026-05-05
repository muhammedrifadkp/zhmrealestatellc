"use client";

import { ProjectProperty } from "@/data/projects";
import ProjectHero from "./ProjectHero";
import ProjectFeatures from "./ProjectFeatures";
import ProjectAbout from "./ProjectAbout";
import ProjectGallery from "./ProjectGallery";
import ProjectAmenities from "./ProjectAmenities";
import ProjectFloorPlans from "./ProjectFloorPlans";
import ProjectLocation from "./ProjectLocation";
import ProjectPaymentPlan from "./ProjectPaymentPlan";
import ProjectFAQs from "./ProjectFAQs";
import LeadCaptureForm from "./LeadCaptureForm";

export default function ProjectTemplate({ project }: { project: ProjectProperty }) {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20">
      <ProjectHero project={project} />
      <ProjectFeatures project={project} />
      <ProjectAbout project={project} />
      <ProjectFAQs project={project} />
      <ProjectAmenities project={project} />
      <ProjectGallery project={project} />
      <ProjectFloorPlans project={project} />
      <ProjectPaymentPlan project={project} />
      <ProjectLocation project={project} />
      <LeadCaptureForm project={project} />
      
      {/* Sticky Bottom Bar / Footer CTA */}
      <div className="bg-[#12163b] text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-6">OUR EXPERT WILL HELP YOU BUY THE BEST</h3>
          <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
            Addax Tower Level 44, Al Reem Island, City of Lights, Abu Dhabi, United Arab Emirates
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <a href="tel:+971502057334" className="flex flex-col">
              <span className="text-xs text-primary tracking-widest uppercase mb-1">Phone 1</span>
              <span className="text-xl font-bold">+971 50 205 7334</span>
            </a>
            <div className="hidden md:block w-px bg-white/20"></div>
            <a href="tel:+971585723972" className="flex flex-col">
              <span className="text-xs text-primary tracking-widest uppercase mb-1">Phone 2</span>
              <span className="text-xl font-bold">+971 58 572 3972</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
