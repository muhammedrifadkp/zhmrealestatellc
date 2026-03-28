"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

interface SearchInterfaceProps {
  initialQ: string;
  initialContract: string;
  initialType: string;
  initialBeds: string;
  children: React.ReactNode;
}

export function SearchInterface({ initialQ, initialContract, initialType, initialBeds, children }: SearchInterfaceProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(initialQ);
  const [contract, setContract] = useState(initialContract);
  const [type, setType] = useState(initialType || "any");
  const [beds, setBeds] = useState(initialBeds || "any");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { title: "Al Reem Island", subtitle: "Abu Dhabi", type: "Community" },
    { title: "Yas Island", subtitle: "Abu Dhabi", type: "Community" },
    { title: "Sama Yas", subtitle: "Abu Dhabi", type: "Project" },
    { title: "Al Raha Beach", subtitle: "Abu Dhabi", type: "Community" },
  ];

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (q) params.set("q", q); else params.delete("q");
    if (contract && contract !== "any") params.set("contract", contract); else params.delete("contract");
    if (type && type !== "any") params.set("type", type); else params.delete("type");
    if (beds && beds !== "any") params.set("beds", beds); else params.delete("beds");
    
    // reset page to 1 on new search
    params.delete("page");
    
    router.push(`/search?${params.toString()}`);
  };

  const resetFilters = () => {
    setQ("");
    setContract("");
    setType("any");
    setBeds("any");
    router.push("/search");
  };

  return (
    <>
      {/* Inline Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 mb-8 flex flex-col md:flex-row items-center gap-2 relative z-30 pointer-events-auto">
        <div className="flex-1 flex items-center px-4 relative w-full">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search by project or community..." 
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full bg-transparent outline-none py-2 text-gray-700" 
          />
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden">
              <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                {suggestions.map((suggestion, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setQ(suggestion.title);
                      setShowSuggestions(false);
                      // Don't auto-search yet, let user hit search or enter
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-[#005a9c] text-sm">{suggestion.title}</span>
                      <span className="text-xs text-gray-500">{suggestion.subtitle}</span>
                    </div>
                    <span className="bg-[#e6f7ec] text-[#2ebd59] text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                      {suggestion.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
        <select 
          value={contract} 
          onChange={(e) => {
            const newContract = e.target.value;
            setContract(newContract);
            
            const params = new URLSearchParams(searchParams.toString());
            if (newContract && newContract !== "any") params.set("contract", newContract);
            else params.delete("contract");
            router.push(`/search?${params.toString()}`);
          }} 
          className="bg-transparent text-gray-700 px-4 py-2 outline-none w-full md:w-48 appearance-none cursor-pointer"
        >
          <option value="">Sale & Rent</option>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
        <button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-[#0a1b3f] hover:bg-[#0a1b3f]/90 text-white font-bold py-3 px-8 rounded-lg transition-colors z-20 relative"
        >
          Search
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-20">
        {/* LEFT SIDEBAR: Filters */}
        <div className="w-full lg:w-1/4">
          <div className="bg-transparent border-0 md:bg-white md:border md:border-gray-200 md:shadow-sm md:rounded-xl p-0 md:p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 hidden md:flex">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button onClick={resetFilters} className="text-[#005a9c] text-sm font-medium flex items-center hover:underline">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </button>
            </div>

            {/* Bedrooms Filter */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Bedrooms</h3>
              <select 
                value={beds}
                onChange={(e) => {
                  const newBeds = e.target.value;
                  setBeds(newBeds);
                  
                  const params = new URLSearchParams(searchParams.toString());
                  if (newBeds && newBeds !== "any") params.set("beds", newBeds);
                  else params.delete("beds");
                  router.push(`/search?${params.toString()}`);
                }}
                className="w-full border-b border-gray-200 py-2 outline-none text-gray-700 bg-transparent cursor-pointer"
              >
                <option value="any">Any</option>
                <option value="studio">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
              </select>
            </div>

            {/* Property Types */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Property Types</h3>
              <select 
                value={type}
                onChange={(e) => {
                  const newType = e.target.value;
                  setType(newType);
                  
                  const params = new URLSearchParams(searchParams.toString());
                  if (newType && newType !== "any") params.set("type", newType);
                  else params.delete("type");
                  router.push(`/search?${params.toString()}`);
                }}
                className="w-full border-b border-gray-200 py-2 outline-none text-gray-700 bg-transparent cursor-pointer"
              >
                <option value="any">Any</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>

            <button 
              onClick={handleSearch}
              className="w-full mt-4 bg-[#0a1b3f] hover:bg-[#0a1b3f]/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR: Results Grid */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </>
  );
}
