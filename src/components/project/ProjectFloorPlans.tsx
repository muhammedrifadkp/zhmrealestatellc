"use client";

import { useState } from "react";
import { ProjectProperty } from "@/data/projects";
import Image from "next/image";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import LeadModal from "./LeadModal";

export default function ProjectFloorPlans({ project }: { project: ProjectProperty }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const activePlan = project.floorPlans[activeIdx];
  const hasMultipleImages = activePlan.images.length > 1;

  // Reset image index when tab changes
  const handleTabChange = (idx: number) => {
    setActiveIdx(idx);
    setImgIdx(0);
  };

  const nextImg = () => {
    setImgIdx((prev) => (prev + 1) % activePlan.images.length);
  };

  const prevImg = () => {
    setImgIdx((prev) => (prev - 1 + activePlan.images.length) % activePlan.images.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#ef7c00] text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
            Floor Plan
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {project.floorPlans.map((plan, idx) => (
              <button
                key={idx}
                suppressHydrationWarning
                onClick={() => handleTabChange(idx)}
                className={`px-8 py-2.5 rounded-md text-sm font-bold transition-all border ${
                  activeIdx === idx 
                    ? "bg-[#12163b] text-white border-[#12163b] shadow-lg shadow-[#12163b]/20" 
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                {plan.bedrooms}
              </button>
            ))}
          </div>
        </div>

        {/* Split Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left: Site Map / Overview */}
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <Image 
              src={project.siteMapImage}
              alt={`${project.name} Site Overview`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Specific Floor Plan Carousel */}
          <div className="w-full lg:w-1/2 bg-[#f4faff] rounded-2xl p-8 md:p-12 flex flex-col items-center relative group/carousel">
            <h3 className="text-2xl md:text-3xl font-bold text-[#12163b] mb-10">
              {activePlan.bedrooms}
            </h3>
            
            <div className="relative w-full aspect-[4/3] mb-10">
              <Image 
                src={activePlan.images[imgIdx]}
                alt={`${project.name} ${activePlan.bedrooms} Layout ${imgIdx + 1}`}
                fill
                className="object-contain transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Carousel Controls */}
              {hasMultipleImages && (
                <>
                  <button 
                    suppressHydrationWarning
                    onClick={prevImg}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#12163b] hover:bg-gray-50 transition-colors -ml-5"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    suppressHydrationWarning
                    onClick={nextImg}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#12163b] hover:bg-gray-50 transition-colors -mr-5"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Dots */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {activePlan.images.map((_, i) => (
                      <button
                        key={i}
                        suppressHydrationWarning
                        onClick={() => setImgIdx(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          imgIdx === i ? "bg-[#12163b] w-6" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <button 
              suppressHydrationWarning
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-[#12163b] font-bold border-b-2 border-[#12163b] pb-1 hover:text-[#ef7c00] hover:border-[#ef7c00] transition-all group/link mt-4"
            >
              <Download className="w-4 h-4 group-hover/link:-translate-y-1 transition-transform" />
              Download floor plans
            </button>
          </div>

        </div>

        {/* Lead Modal */}
        <LeadModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          projectName={project.name} 
        />
      </div>
    </section>
  );
}


