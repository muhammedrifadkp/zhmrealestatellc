"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, Building2, BedDouble, Calendar, 
  LayoutGrid, Map as MapIcon, List, Search,
  ChevronLeft, ChevronRight, Filter, 
  Building, Layout
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function DowntownDubaiPage() {
  const [viewMode, setViewMode] = useState<'gallery' | 'map' | 'list'>('gallery');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter projects for Downtown Dubai
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => 
      project.location.toLowerCase().includes("downtown dubai")
    );
  }, []);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-[#f8f9fb] pt-32 pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex text-xs text-gray-400 gap-2 items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span>/</span>
            <Link href="/projects/dubai" className="hover:text-primary transition-colors">Dubai</Link>
            <span>/</span>
            <span className="text-gray-600">Downtown Dubai</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 mb-8">
        <div className="container mx-auto px-4 py-12">
          <h1 
            className="text-3xl md:text-5xl font-bold text-secondary mb-8 text-center md:text-left"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Real Estate Projects in Downtown Dubai, Dubai
          </h1>

          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-[#f8f9fb] p-2 rounded-xl">
            {/* View Mode Switcher */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-100">
              <button 
                onClick={() => setViewMode('gallery')}
                suppressHydrationWarning
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'gallery' ? 'bg-secondary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <LayoutGrid size={16} /> Gallery
              </button>
              <button 
                onClick={() => setViewMode('map')}
                suppressHydrationWarning
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'map' ? 'bg-secondary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <MapIcon size={16} /> View Map
              </button>
              <button 
                onClick={() => setViewMode('list')}
                suppressHydrationWarning
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'list' ? 'bg-secondary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <List size={16} /> List
              </button>
            </div>

            {/* Pagination Top */}
            {totalPages > 1 && (
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  suppressHydrationWarning
                  className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      suppressHydrationWarning
                      className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${currentPage === i + 1 ? 'bg-secondary text-white' : 'bg-white border border-gray-100 text-gray-400 hover:bg-gray-50'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  suppressHydrationWarning
                  className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group flex flex-col h-full"
            >
              {/* Image Area */}
              <Link href={`/projects/${project.slug}`} className="relative h-64 overflow-hidden block">
                <Image
                  src={project.heroImage}
                  alt={project.name}
                  fill
                  priority={index < 4}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${project.features.handover.includes('Completed') || project.features.paymentPlan === 'Completed' ? 'bg-secondary text-white' : 'bg-primary text-black'}`}>
                    {project.features.handover.includes('Completed') || project.features.paymentPlan === 'Completed' ? 'COMPLETED' : 'OFF-PLAN'}
                  </span>
                </div>
              </Link>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors tracking-tight uppercase">
                  <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <MapPin size={12} className="text-primary" />
                  <span>@ Downtown Dubai</span>
                </div>

                <div className="flex items-center gap-2 mb-6 pt-4 border-t border-gray-50">
                   <Building size={14} className="text-primary" />
                   <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                     {project.features.developer || 'Leading Developer'}
                   </span>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-3 gap-2 mt-auto py-4 border-t border-gray-50">
                  <div className="flex flex-col items-center gap-1.5">
                    <Layout size={14} className="text-gray-300" />
                    <span className="text-[10px] text-gray-500 font-bold uppercase text-center">{project.features.propertyType}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <BedDouble size={14} className="text-gray-300" />
                    <span className="text-[10px] text-gray-500 font-bold uppercase text-center">
                      {project.features.bedrooms.includes('-') ? project.features.bedrooms.split(' - ')[1] : project.features.bedrooms.split(',')[0]}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Calendar size={14} className="text-gray-300" />
                    <span className="text-[10px] text-gray-500 font-bold uppercase text-center">
                       {project.features.handover.includes('Completed') ? 'READY' : project.features.handover}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <div className="center-flex flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2 text-center">No Projects Found</h3>
              <p className="text-gray-500 text-center">We couldn't find any projects in Downtown Dubai at the moment.</p>
            </div>
          </div>
        )}

        {/* Bottom Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  suppressHydrationWarning
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      suppressHydrationWarning
                      className={`w-10 h-10 rounded-full text-xs font-black transition-all ${currentPage === i + 1 ? 'bg-secondary text-white shadow-lg scale-110' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  suppressHydrationWarning
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
          </div>
        )}
      </div>
    </main>
  );
}
