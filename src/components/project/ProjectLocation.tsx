"use client";

import { ProjectProperty } from "@/data/projects";
import { MapPin, Clock, Navigation, Compass, ExternalLink } from "lucide-react";

export default function ProjectLocation({ project }: { project: ProjectProperty }) {
  const parsePoint = (point: string) => {
    // Matches patterns like "05 Mins to Al Maktoum...", "10 Mins - Dubai Mall", "15 Mins Sheikh MBZ Road"
    const match = point.match(/^(\d+\s*(?:Mins?|Minutes?|Min|Hours?|km))\s*(?:to|-|–|:)?\s*(.*)$/i);
    if (match) {
      return { time: match[1].trim(), destination: match[2].trim() };
    }
    return { time: null, destination: point };
  };

  return (
    <section id="location" className="py-24 bg-[#faf9f6] text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c87b1e]/10 border border-[#c87b1e]/20 text-[#c87b1e] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Compass className="w-3.5 h-3.5" />
            Location & Connectivity
          </div>
          <h2 className="heading-luxury text-4xl md:text-5xl text-[#12163b] font-serif leading-tight">
            Prime Connectivity & Nearby Landmarks
          </h2>
          {project.locationBenefits?.description && (
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {project.locationBenefits.description}
            </p>
          )}
        </div>

        {/* Location Benefits Grid */}
        {project.locationBenefits?.points && project.locationBenefits.points.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {project.locationBenefits.points.map((point, i) => {
              const { time, destination } = parsePoint(point);
              return (
                <div
                  key={i}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#c87b1e]/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#12163b]/5 group-hover:bg-[#c87b1e]/10 text-[#12163b] group-hover:text-[#c87b1e] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {time && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#c87b1e]/10 text-[#c87b1e] font-semibold text-xs uppercase tracking-wider mb-2">
                        <Clock className="w-3 h-3" />
                        {time}
                      </span>
                    )}
                    <h4 className="text-gray-900 font-semibold text-base leading-snug group-hover:text-[#12163b] transition-colors">
                      {destination}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Interactive Google Map Embed */}
        <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 group">
          {project.mapCode ? (
            <iframe 
              src={project.mapCode.includes('output=embed') || project.mapCode.includes('/embed') ? project.mapCode : `${project.mapCode}&output=embed`} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${project.name} Location`}
              className="w-full h-full"
            ></iframe>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-center p-8 bg-gray-100 text-gray-500">
              <div className="w-16 h-16 rounded-full bg-[#12163b]/10 text-[#12163b] flex items-center justify-center mb-4">
                <Navigation className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.name} Location</h3>
              <p className="text-sm text-gray-500">{project.location}</p>
            </div>
          )}

          {/* Overlay Map Badge */}
          <div className="absolute bottom-6 left-6 bg-[#12163b]/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-lg border border-white/10 flex items-center gap-3 pointer-events-none">
            <div className="w-10 h-10 rounded-xl bg-[#c87b1e] flex items-center justify-center text-white font-bold text-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs text-gray-300 font-medium uppercase tracking-wider">Project Location</span>
              <span className="block text-sm font-semibold text-white">{project.location}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

