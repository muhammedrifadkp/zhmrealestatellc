"use client";

import { ProjectProperty } from "@/data/projects";

export default function ProjectFeatures({ project }: { project: ProjectProperty }) {
  const { features } = project;
  
  const featureList = [
    { label: "Bedrooms", value: features.bedrooms },
    { label: "Property Type", value: features.propertyType },
    { label: "Payment Plan", value: features.paymentPlan },
    { label: "Starting Price", value: features.startingPrice },
    { label: "Handover", value: features.handover },
    { label: "Down Payment", value: features.downPayment },
    ...(features.developer ? [{ label: "Developer", value: features.developer }] : []),
    ...(features.nationality ? [{ label: "Nationality", value: features.nationality }] : []),
  ];

  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featureList.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center justify-center text-center transition-all hover:shadow-md"
            >
              <span className="text-xl md:text-2xl font-bold text-[#12163b] mb-2 tracking-tight">
                {item.value}
              </span>
              <span className="text-sm text-gray-400 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
