import Image from "next/image";
import Link from "next/link";
import { unitsData } from "@/data/units";
import { MapPin, Heart, ArrowRightLeft, Flag, ChevronLeft, ChevronRight } from "lucide-react";
import { SearchInterface } from "@/components/search/SearchInterface";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const q = (params.q as string)?.toLowerCase() || "";
  const contract = (params.contract as string)?.toLowerCase() || "";
  const type = (params.type as string)?.toLowerCase() || "";
  const beds = (params.beds as string)?.toLowerCase() || "";
  
  // Pagination
  const pageParam = typeof params.page === 'string' ? parseInt(params.page, 10) : 1;
  const currentPage = !isNaN(pageParam) && pageParam > 0 ? pageParam : 1;
  const itemsPerPage = 10;

  const filteredUnits = unitsData.filter((unit) => {
    // Text Search
    if (q) {
      const matchName = unit.subtitle.toLowerCase().includes(q);
      const matchLoc = unit.location.toLowerCase().includes(q);
      if (!matchName && !matchLoc) return false;
    }

    // Property Type Match
    if (type && type !== "any") {
      const matchType = unit.type.toLowerCase().includes(type);
      if (!matchType) return false;
    }

    // Beds Match
    if (beds && beds !== "any") {
      if (beds.toLowerCase() === "studio") {
        if (!unit.beds.toLowerCase().includes("studio")) return false;
      } else {
        const bedNum = beds.replace(/[^0-9]/g, '');
        if (beds.includes("4+")) {
          const unitBedNum = parseInt(unit.beds.replace(/[^0-9]/g, ''), 10);
          if (isNaN(unitBedNum) || unitBedNum < 4) return false;
        } else {
          // Exact match
          if (!unit.beds.includes(bedNum)) return false;
        }
      }
    }

    // Contract Match
    if (contract && contract !== "any") {
      if (unit.contract.toLowerCase() !== contract) return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredUnits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUnits = filteredUnits.slice(startIndex, startIndex + itemsPerPage);

  // Helper to generate pagination links
  const createPageUrl = (pageNum: number) => {
    const newParams = new URLSearchParams();
    if (q) newParams.set('q', q);
    if (contract) newParams.set('contract', contract);
    if (type) newParams.set('type', type);
    if (beds) newParams.set('beds', beds);
    newParams.set('page', pageNum.toString());
    return `/search?${newParams.toString()}`;
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 md:pt-40 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Title & Stats */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 capitalize">
            {filteredUnits.length} Properties for {contract === "rent" ? "Rent" : contract === "sale" ? "Sale" : "Sale & Rent"} in {q || "Abu Dhabi"}
          </h1>
          <div className="flex gap-2">
            <button className="bg-secondary text-white w-10 h-10 rounded-md flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="bg-white border text-gray-700 w-10 h-10 rounded-md flex items-center justify-center shadow-sm">
              <MapPin className="w-5 h-5"/>
            </button>
          </div>
        </div>

        <SearchInterface 
          initialQ={q} 
          initialContract={contract} 
          initialType={type} 
          initialBeds={beds}
        >
            
            {paginatedUnits.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0a1b3f] mb-4">No results found</h2>
                <p className="text-gray-500 mb-8">Try adjusting your filters or search query to find more properties.</p>
                <Link href="/" className="inline-flex bg-[#005a9c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#005a9c]/90 transition-colors">
                  Back to Home
                </Link>
              </div>
            ) : (
              paginatedUnits.map((unit) => {
                return (
                  <div key={unit.id} className="group relative flex flex-col md:flex-row bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden md:h-[240px]">
                    
                    {/* Image box */}
                    <div className="relative w-full md:w-[35%] h-64 md:h-full overflow-hidden block shrink-0">
                      <Image
                        src={unit.image}
                        alt={unit.subtitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* For Sale / For Rent Badge */}
                      <div className={`absolute top-4 left-4 text-white px-3 py-1 rounded text-xs font-bold shadow-sm uppercase tracking-wide ${unit.contract === "sale" ? "bg-[#005a9c]" : "bg-[#2ebd59]"}`}>
                        For {unit.contract}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between overflow-hidden">
                      <div className="pr-12 md:pr-0 lg:pr-12"> {/* Padding to leave space for right utility column */}
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-1.5 font-sans tracking-tight leading-tight">
                          {unit.price}
                        </h3>
                        
                        <p className="text-gray-700 font-medium mb-2 truncate">
                          {unit.subtitle}
                        </p>
                        
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                          {unit.location}
                        </div>
                        
                        <div className="flex items-center text-sm font-medium text-gray-500 mb-6 flex-wrap leading-relaxed">
                          <span className="text-[#005a9c] font-semibold">{unit.type}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span>{unit.beds}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span>{unit.baths}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span>{unit.sqft}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 lg:mt-auto pt-2">
                        <button className="flex-1 border border-gray-300 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#005a9c] hover:border-[#005a9c] transition-colors shadow-sm">
                          Preview
                        </button>
                        <button className="flex-1 border border-gray-300 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#005a9c] hover:border-[#005a9c] transition-colors shadow-sm">
                          Inquire
                        </button>
                        <button className="w-full md:flex-1 bg-[#25D366] text-white py-2 rounded text-sm font-bold shadow-sm hover:bg-[#128c7e] transition-colors flex items-center justify-center">
                          <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </button>
                      </div>
                    </div>

                    {/* Floating Utilities (Far Right column) */}
                    <div className="absolute right-4 top-4 md:static md:w-14 lg:w-16 md:flex flex-col gap-2 lg:gap-3 justify-center items-center py-4 px-1 lg:px-2 border-l border-gray-100 hidden">
                      <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-red-500 hover:shadow-md transition-all flex items-center justify-center">
                        <Heart className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </button>
                      <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-[#005a9c] hover:shadow-md transition-all flex items-center justify-center">
                        <ArrowRightLeft className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </button>
                      <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-orange-500 hover:shadow-md transition-all flex items-center justify-center">
                        <Flag className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            {/* Pagination Component */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-10 gap-2 font-sans font-medium">
                {/* Previous Button */}
                {currentPage > 1 ? (
                  <Link 
                    href={createPageUrl(currentPage - 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                ) : (
                  <button disabled className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 text-gray-300 cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}

                {/* Page Numbers */}
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNumber = i + 1;
                  // Simple sliding window for extreme pagination
                  if (
                    totalPages > 7 && 
                    pageNumber !== 1 && 
                    pageNumber !== totalPages && 
                    (pageNumber < currentPage - 1 || pageNumber > currentPage + 1)
                  ) {
                    if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return <span key={i} className="px-1 text-gray-400">...</span>;
                    }
                    return null;
                  }

                  return (
                    <Link
                      key={i}
                      href={createPageUrl(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors shadow-sm ${
                        currentPage === pageNumber
                          ? "bg-[#005a9c] text-white font-bold"
                          : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </Link>
                  );
                })}

                {/* Next Button */}
                {currentPage < totalPages ? (
                  <Link 
                    href={createPageUrl(currentPage + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button disabled className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 text-gray-300 cursor-not-allowed">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
            
          </SearchInterface>
      </div>
    </div>
  );
}
