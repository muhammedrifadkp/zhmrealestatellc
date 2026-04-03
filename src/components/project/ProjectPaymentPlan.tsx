"use client";

import { CreditCard, Construction, Key } from "lucide-react";
import { ProjectProperty } from "@/data/projects";

export default function ProjectPaymentPlan({ project }: { project: ProjectProperty }) {
  if (!project.paymentPlanDetails || project.paymentPlanDetails.length === 0) return null;

  return (
    <section className="py-20 bg-[#f8f9fa] border-y border-gray-100 selection:bg-primary/20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 justify-center uppercase tracking-widest text-[#1e2350] border-b border-[#1e2350] pb-2">
            Investment Structure
          </span>
          <h2 className="heading-luxury text-4xl mb-4 font-serif">
            {project.name} Payment Plan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Flexible investment options designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.paymentPlanDetails.map((phase, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center group border border-gray-100"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1e2350] group-hover:text-white transition-all duration-500 overflow-hidden ring-8 ring-gray-100/50">
                {index === 0 ? <CreditCard size={32} /> : index === 1 ? <Construction size={32} /> : <Key size={32} />}
              </div>
              <div className="text-6xl font-extrabold text-[#1e2350] mb-4 tracking-tighter opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 flex items-center gap-1">
                {phase.percentage}
              </div>
              <h3 className="text-xl font-bold text-[#1e2350] mb-4 tracking-tight uppercase">
                {phase.label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {phase.description}
              </p>
              
              {/* Progress Bar background decoration */}
              <div className="mt-8 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#12163b] transition-all duration-1000 delay-300"
                  style={{ width: phase.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button suppressHydrationWarning className="bg-[#1e2350] text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-opacity-90 shadow-2xl hover:shadow-primary/30 transition-all transform hover:scale-105 uppercase tracking-widest">
            Request Detailed Plan
          </button>
        </div>
      </div>
    </section>
  );
}
