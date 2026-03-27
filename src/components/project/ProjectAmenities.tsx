"use client";

import { ProjectProperty } from "@/data/projects";
import { 
  Building2, ConciergeBell, TreePine, Dumbbell, 
  ShoppingBag, Coffee, Bath, Bike, Ruler, 
  ArrowRight, Waves, Flower2
} from "lucide-react";

const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("theatre")) return <Building2 className="w-8 h-8 opacity-80" />;
  if (n.includes("concierge")) return <ConciergeBell className="w-8 h-8 opacity-80" />;
  if (n.includes("garden") || n.includes("park")) return <TreePine className="w-8 h-8 opacity-80" />;
  if (n.includes("gym") || n.includes("health")) return <Dumbbell className="w-8 h-8 opacity-80" />;
  if (n.includes("retail") || n.includes("market")) return <ShoppingBag className="w-8 h-8 opacity-80" />;
  if (n.includes("café") || n.includes("cafe")) return <Coffee className="w-8 h-8 opacity-80" />;
  if (n.includes("spa") || n.includes("treatment")) return <Flower2 className="w-8 h-8 opacity-80" />;
  if (n.includes("cycling")) return <Bike className="w-8 h-8 opacity-80" />;
  if (n.includes("jogging")) return <Footprints className="w-8 h-8 opacity-80" />;
  if (n.includes("pool") || n.includes("waterfront")) return <Waves className="w-8 h-8 opacity-80" />;
  return <Building2 className="w-8 h-8 opacity-80" />;
};

// Fixed Footprints import check - adding it locally or using Ruler as fallback
const Footprints = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v-2.38C4 11.5 5.81 10.5 7 10.5s3 1 3 3.12V16"/><path d="M14 16v-2.38C14 11.5 15.81 10.5 17 10.5s3 1 3 3.12V16"/><path d="M7 10.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5"/><path d="M17 10.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5"/><path d="M12 16v.01"/><path d="M12 13v.01"/><path d="M12 10v.01"/><path d="M12 7v.01"/></svg>
);

export default function ProjectAmenities({ project }: { project: ProjectProperty }) {
  return (
    <section className="py-24 bg-[#12163b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-primary pl-4">
              Amenities
            </span>
            <h2 className="heading-luxury !text-white text-5xl md:text-6xl mb-8 leading-tight">
              Exceptional Amenities Await You at {project.name}
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl leading-relaxed">
              {project.name} brings you a curated collection of lifestyle amenities designed to inspire creativity, wellness, and social connection. Experience luxury living in {project.location} with world-class facilities.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c87b1e] hover:bg-[#b06a18] transition-all text-white font-bold tracking-widest uppercase rounded-sm group shadow-lg shadow-black/20"
            >
              Contact us now!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center group">
                  <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-all border border-white/10">
                    {getIcon(amenity)}
                  </div>
                  <span className="text-sm font-medium tracking-wide text-gray-200">
                    {amenity}
                  </span>
                  <div className="mt-3 w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
