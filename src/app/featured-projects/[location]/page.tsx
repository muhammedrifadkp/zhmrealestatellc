"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, Building2, BedDouble, Calendar, 
  LayoutGrid, Map as MapIcon, List, Search,
  ChevronLeft, ChevronRight, Building,
  Home, ArrowRight
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { useParams } from "next/navigation";

export default function FeaturedProjectsLocationPage() {
  const params = useParams();
  const locationParam = params.location as string;
  
  const [viewMode, setViewMode] = useState<'gallery' | 'map' | 'list'>('gallery');
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    setMounted(true);
  }, []);

  const locationTitle = locationParam ? locationParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "";

  // Filter projects for the specific location and only featured
  const filteredProjects = useMemo(() => {
    if (!locationParam) return [];
    return projectsData.filter(project => {
      const matchesLocation = project.location.toLowerCase().includes(locationParam.replace('-', ' ')) || 
                            (locationParam === 'abu-dhabi' && (
                              project.location.toLowerCase().includes("yas island") ||
                              project.location.toLowerCase().includes("saadiyat") ||
                              project.location.toLowerCase().includes("reem island") ||
                              project.location.toLowerCase().includes("raha gardens") ||
                              project.location.toLowerCase().includes("golf gardens") ||
                              project.location.toLowerCase().includes("al raha beach")
                            )) ||
                            (locationParam === 'rak' && project.location.toLowerCase().includes("ras al khaimah"));
      
      return matchesLocation && project.isFeatured === true;
    });
  }, [locationParam]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getProjectUrl = (slug: string) => {
    return `/featured-projects/${locationParam}/${slug}`;
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#f8f9fb] pt-32 pb-20 font-sans">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex text-xs text-gray-400 gap-2 items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/featured-projects" className="hover:text-primary transition-colors">Featured Projects</Link>
            <span>/</span>
            <span className="text-gray-600">{locationTitle}</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 mb-8">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-12"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Exclusive Collection</span>
            <h1 
              className="text-4xl md:text-6xl font-bold text-secondary text-center"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Featured Projects in {locationTitle}
            </h1>
            <div className="w-24 h-1 bg-primary mt-6"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-[#f8f9fb] p-2 rounded-xl shadow-inner">
            {/* View Mode Switcher */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-100">
              <button 
                suppressHydrationWarning
                onClick={() => setViewMode('gallery')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'gallery' ? 'bg-secondary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <LayoutGrid size={16} /> Gallery
              </button>
              <button 
                suppressHydrationWarning
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'list' ? 'bg-secondary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <List size={16} /> List
              </button>
              <button 
                suppressHydrationWarning
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'map' ? 'bg-secondary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <MapIcon size={16} /> Map
              </button>
            </div>

            {/* Pagination Top */}
            {totalPages > 1 && (
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    suppressHydrationWarning
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    suppressHydrationWarning
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Gallery View */}
        {viewMode === 'gallery' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group flex flex-col h-full"
              >
                <Link href={getProjectUrl(project.slug)} className="relative h-64 overflow-hidden block">
                  <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${project.features.paymentPlan === 'Completed' ? 'bg-secondary text-white' : 'bg-primary text-black'}`}>
                      {project.features.paymentPlan === 'Completed' ? 'COMPLETED' : 'OFF-PLAN'}
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg bg-secondary text-primary border border-primary/20">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                     <div className="bg-white/90 p-4 rounded-full">
                        <Building2 className="text-secondary" size={24} />
                     </div>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors tracking-tight uppercase">
                    <Link href={getProjectUrl(project.slug)}>{project.name}</Link>
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-medium">
                    <MapPin size={12} className="text-primary" />
                    <span>{project.location.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6 pt-4 border-t border-gray-50">
                     <Building size={14} className="text-primary" />
                     <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                       {project.features.developer || 'Aldar Properties PJSC'}
                     </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-auto py-4 border-t border-gray-50">
                    <div className="flex flex-col items-center gap-1.5">
                      <Home size={14} className="text-gray-300" />
                      <span className="text-[10px] text-gray-500 font-bold uppercase text-center truncate w-full">
                        {project.features.propertyType.split(',')[0].split(' ')[0]}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <BedDouble size={14} className="text-gray-300" />
                      <span className="text-[10px] text-gray-500 font-bold uppercase text-center">{project.features.bedrooms.split(' ')[0]} BR</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <Calendar size={14} className="text-gray-300" />
                      <span className="text-[10px] text-gray-500 font-bold uppercase text-center">
                        {project.features.paymentPlan === 'Completed' ? 'READY' : project.features.handover.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 p-4 group"
              >
                <Link href={getProjectUrl(project.slug)} className="relative w-full md:w-80 h-56 rounded-lg overflow-hidden shrink-0 block">
                  <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${project.features.paymentPlan === 'Completed' ? 'bg-secondary text-white' : 'bg-primary text-black'}`}>
                      {project.features.paymentPlan === 'Completed' ? 'COMPLETED' : 'OFF-PLAN'}
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg bg-secondary text-primary border border-primary/20 w-fit">
                      FEATURED
                    </span>
                  </div>
                </Link>
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors uppercase tracking-tight">
                        <Link href={getProjectUrl(project.slug)}>{project.name}</Link>
                      </h3>
                      <div className="text-primary font-bold text-sm">{project.features.startingPrice}</div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 font-medium uppercase tracking-wider">
                      <MapPin size={12} className="text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-6 max-w-3xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-y-4 gap-x-6 pt-6 border-t border-gray-50 items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                        <Building size={14} className="text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Developer</span>
                        <span className="text-xs font-bold text-secondary uppercase">{project.features.developer || 'Aldar'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                        <Home size={14} className="text-gray-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Type</span>
                        <span className="text-xs font-bold text-secondary uppercase">{project.features.propertyType.split(',')[0]}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                        <BedDouble size={14} className="text-gray-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Bedrooms</span>
                        <span className="text-xs font-bold text-secondary uppercase">{project.features.bedrooms}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                        <Calendar size={14} className="text-gray-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Handover</span>
                        <span className="text-xs font-bold text-secondary uppercase">{project.features.handover}</span>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Link 
                        href={getProjectUrl(project.slug)} 
                        className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-md"
                      >
                        View Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Map View */}
        {viewMode === 'map' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm"
          >
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapIcon className="text-gray-200" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-tight">Interactive Map Coming Soon</h3>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              We are integrating an interactive map to explore all {locationTitle} developments geographically.
            </p>
            <button 
              suppressHydrationWarning
              onClick={() => setViewMode('gallery')}
              className="mt-8 text-primary font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors inline-flex items-center gap-2"
            >
              Back to Gallery <LayoutGrid size={16} />
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">No Featured Projects Found</h3>
            <p className="text-gray-500">We couldn&apos;t find any featured projects in {locationTitle} at the moment.</p>
          </div>
        )}

        {/* Bottom Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-sm text-gray-400 font-medium">
              Showing{' '}
              <span className="text-secondary font-bold">{(currentPage - 1) * itemsPerPage + 1}</span>
              {' '}to{' '}
              <span className="text-secondary font-bold">{Math.min(currentPage * itemsPerPage, filteredProjects.length)}</span>
              {' '}of{' '}
              <span className="text-secondary font-bold">{filteredProjects.length}</span> results
            </div>
            <div className="flex items-center gap-4">
              <button 
                suppressHydrationWarning
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    suppressHydrationWarning
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full text-xs font-black transition-all ${currentPage === i + 1 ? 'bg-secondary text-white shadow-lg scale-110' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button 
                suppressHydrationWarning
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
