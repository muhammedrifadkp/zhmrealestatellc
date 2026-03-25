"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

const propertyTypes = ["Apartment", "Villa", "Townhouse", "Penthouse", "Studio", "Office", "Land"];
const contractTypes = ["Buy", "Rent"];
const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+"];

export function PropertySearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [contract, setContract] = useState("Buy");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (contract) params.set("type", contract.toLowerCase());
    if (propertyType) params.set("category", propertyType.toLowerCase());
    if (beds) params.set("beds", beds);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-2 pb-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
          {/* Tab Bar */}
          <div className="bg-secondary flex items-center px-6 pt-4 gap-1">
            <h2 className="text-white/60 text-xs uppercase tracking-widest font-bold mr-4 hidden sm:block">
              Find the Right Property, Faster
            </h2>
            {contractTypes.map((type) => (
              <button
                key={type}
                suppressHydrationWarning
                onClick={() => setContract(type)}
                className={`px-5 py-2.5 text-sm font-bold tracking-wider rounded-t-lg transition-all duration-200 ${
                  contract === type
                    ? "bg-white text-secondary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Project / Community Search */}
              <div className="lg:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Search by Project / Community
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    suppressHydrationWarning
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="e.g. Palm Jumeirah, Downtown..."
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    value={propertyType}
                    suppressHydrationWarning
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white cursor-pointer"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Beds &amp; Baths
                </label>
                <div className="relative">
                  <select
                    value={beds}
                    suppressHydrationWarning
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white cursor-pointer"
                  >
                    <option value="">Any Beds</option>
                    {bedroomOptions.map((b) => (
                      <option key={b} value={b}>{b === "Studio" ? b : `${b} Bedroom${b !== "1" ? "s" : ""}`}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-end">
                <button
                  type="submit"
                  suppressHydrationWarning
                  className="btn-gold w-full py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest"
                >
                  <Search size={16} />
                  Search Properties
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
