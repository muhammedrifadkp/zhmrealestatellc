"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

export function HomeSearchFilter() {
    const router = useRouter();
  
  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = [
    { title: "Al Reem Island", subtitle: "Abu Dhabi", type: "Community" },
    { title: "Saadiyat Island", subtitle: "Abu Dhabi", type: "Community" },
    { title: "Al Raha Beach", subtitle: "Abu Dhabi", type: "Community" },
    { title: "Yas Island", subtitle: "Abu Dhabi", type: "Community" },
  ];

  const [contract, setContract] = useState("");
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    // Construct search URL
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (contract) params.set("contract", contract);
    if (category) params.set("category", category);
    if (propertyType) params.set("type", propertyType);
    if (beds) params.set("beds", beds);
    if (priceRange) params.set("price", priceRange);
    


    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="relative z-20 container mx-auto px-4 md:px-6 -mt-20 flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-5xl pointer-events-auto">
        
        {/* Form area */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          
          {/* Top row: Search Input + Contract Dropdown */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by project or community..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-gray-700 placeholder:text-gray-400"
              />
              
              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden">
                  <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                    {suggestions.map((suggestion, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                        onMouseDown={(e) => {
                          e.preventDefault(); // Prevents input onBlur
                          setSearchQuery(suggestion.title);
                          setShowSuggestions(false);
                        }}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-secondary text-sm">{suggestion.title}</span>
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
            
            <div className="relative min-w-[200px]">
              <select 
                value={contract}
                onChange={(e) => setContract(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-12 text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 cursor-pointer"
              >
                <option value="">Contract</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Bottom row: Other Dropdowns & Action Button */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Category Dropdown */}
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-10 text-gray-700 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 cursor-pointer"
              >
                <option value="">Category</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Property Types Dropdown */}
            <div className="relative">
              <select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-10 text-gray-700 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 cursor-pointer"
              >
                <option value="">Property Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Beds and Baths Dropdown */}
            <div className="relative">
              <select 
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-10 text-gray-700 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 cursor-pointer"
              >
                <option value="">Beds and Baths</option>
                <option value="studio">Studio</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4+">4+ Beds</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-4 pr-10 text-gray-700 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 cursor-pointer"
              >
                <option value="">Price Range</option>
                <option value="0-1000000">Under 1M AED</option>
                <option value="1000000-3000000">1M - 3M AED</option>
                <option value="3000000-5000000">3M - 5M AED</option>
                <option value="5000000+">5M+ AED</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-secondary hover:bg-secondary/90 text-white rounded-xl py-4 flex items-center justify-center font-bold text-base transition-colors duration-300"
            >
              Search
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
