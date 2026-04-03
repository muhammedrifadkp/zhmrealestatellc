"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProjectProperty } from "@/data/projects";

export default function ProjectFAQs({ project }: { project: ProjectProperty }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!project.faqs || project.faqs.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label mb-6 justify-center uppercase tracking-widest text-[#1e2350] border-b border-[#1e2350] pb-2">
            Common Questions
          </span>
          <h2 className="heading-luxury text-4xl mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">Everything you need to know about {project.name}</p>
        </div>

        <div className="space-y-4">
          {project.faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                suppressHydrationWarning
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
              >
                <span className="font-bold text-[#1e2350] tracking-tight">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 py-6 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
