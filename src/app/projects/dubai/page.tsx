import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { 
  MapPin, LayoutGrid, Map as MapIcon, List, 
  ChevronLeft, ChevronRight, Home, Bed, Calendar 
} from "lucide-react";

export default function DubaiProjectsPage() {
  const dubaiProjects = projectsData.filter(project => 
    project.location.toLowerCase().includes("dubai") && 
    !project.location.toLowerCase().includes("abu dhabi")
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Page Title */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e2350] mb-2">
            Real Estate Projects in Dubai
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Explore premium residential and commercial developments across Dubai's most iconic locations.
          </p>
        </div>

        {/* Filter Bar & Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          {/* View Modes */}
          <div className="flex bg-white rounded shadow-sm border border-gray-200 p-1">
            <button suppressHydrationWarning className="flex items-center gap-2 px-4 py-2 bg-[#1e2350] text-white rounded text-sm font-medium transition-colors">
              <LayoutGrid size={16} />
              Gallery
            </button>
            <button suppressHydrationWarning className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-600 rounded text-sm font-medium transition-colors">
              <MapIcon size={16} />
              View Map
            </button>
            <button suppressHydrationWarning className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-600 rounded text-sm font-medium transition-colors">
              <List size={16} />
              List
            </button>
          </div>

          {/* Pagination Top */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 mr-2 font-medium">Showing all {dubaiProjects.length} results</span>
            <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1">
              <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded bg-[#1e2350] text-white text-xs font-bold shadow-sm">1</button>
              <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded hover:bg-white border border-transparent hover:border-gray-200 text-gray-600 text-xs font-medium transition-all">2</button>
            </div>
            <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dubaiProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.heroImage} 
                  alt={project.name} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={dubaiProjects.indexOf(project) < 4}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 font-sans" 
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-[#1e2350] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-lg z-10">
                  {project.features.paymentPlan === "Completed" ? "COMPLETED" : "FEATURED"}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 font-sans">
                <h3 className="text-base font-extrabold text-[#1e2350] mb-1 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center text-gray-500 text-xs mb-1 font-medium">
                  <MapPin size={12} className="mr-1 opacity-70" />
                  {project.location.split(',')[0]}
                </div>
                <div className="text-[11px] text-gray-400 mb-6 font-medium">
                  {project.features.developer}
                </div>

                {/* Info Icons */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-500 font-bold uppercase tracking-tighter">
                  <div className="flex items-center gap-1.5 translate-y-[1px]">
                    <Home size={14} className="text-gray-300" />
                    <span className="truncate max-w-[60px]">{project.features.propertyType.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed size={14} className="text-gray-300" />
                    <span>{project.features.bedrooms.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-300" />
                    <span className="whitespace-nowrap">
                      {project.features.handover.includes('Jan') ? project.features.handover.split(' ').slice(-1) : project.features.handover}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Bottom */}
        <div className="flex items-center justify-center mt-16 gap-2">
            <button suppressHydrationWarning className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-white transition-colors shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              <button suppressHydrationWarning className="w-10 h-10 flex items-center justify-center rounded bg-[#1e2350] text-white text-sm font-bold shadow-md">1</button>
              <button suppressHydrationWarning className="w-10 h-10 flex items-center justify-center rounded bg-white border border-gray-200 hover:border-gray-300 text-gray-600 text-sm font-medium transition-colors shadow-sm">2</button>
            </div>
            <button suppressHydrationWarning className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-white transition-colors shadow-sm">
              <ChevronRight size={18} />
            </button>
        </div>

      </div>
    </div>
  );
}
