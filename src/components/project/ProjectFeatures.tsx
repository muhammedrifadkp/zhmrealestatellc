"use client";

import { ProjectProperty } from "@/data/projects";

export default function ProjectFeatures({ project }: { project: ProjectProperty }) {
  const { features } = project;
  
  const featureList = [
    { label: "Unit Types", value: features.bedrooms },
    { label: "Property Options", value: features.propertyType },
    { label: "Starting Price", value: features.startingPrice },
    { label: "Payment Plan", value: features.paymentPlan },
    { label: "Down Payment", value: features.downPayment },
    { label: "Handover", value: features.handover },
    { label: "Location", value: project.location },
    ...(features.nationality ? [{ label: "Availability", value: features.nationality }] : []),
    ...(features.developer ? [{ label: "Developer", value: features.developer }] : []),
  ];

  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featureList.map((item, index) => (
            <div 
              key={index} 
              className="group h-full min-h-[160px] bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#12163b] hover:shadow-xl hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#b28a4c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-[13px] md:text-sm text-gray-500 font-semibold group-hover:text-white/90 transition-colors duration-300 uppercase tracking-widest text-center px-2 mb-3">
                {item.label}
              </span>
              <span className="relative z-10 text-xl md:text-xl font-bold text-[#12163b] group-hover:text-[#b28a4c] tracking-tight transition-colors duration-300">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
