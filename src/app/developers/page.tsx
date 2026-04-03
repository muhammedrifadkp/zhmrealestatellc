"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const developersList = [
  "AB CAPITAL CO., LTD",
  "AB DEVELOPERS",
  "AB PROPERTIES LIMITED",
  "ABA REAL ESTATE DEVELOPMENT",
  "ABDULRAZZQ ALI ALMADANI",
  "ABDULWAHID FAQEEH INVESTMENT",
  "ABER FACILITIES MANAGEMENT (L.L.C)",
  "ABK INVESTMENTS LLC",
  "ABOU EID REAL ESTATE DEVELOPMENT",
  "ABU DHABI FUTURE ENERGY COMPANY",
  "ABU DHABI MUNICIPALITY",
  "ABU DHABI UNITED HOSPITALITY L.L.C",

  "A S A 1 DEVELOPERS LIMITED",
  "A S A DEVELOPERS LIMITED",
  "A S G C CONSTRUCTION LLC",
  "A S I REAL ESTATE DEVELOPMENT LLC",
  "A T G C TRANSPORT AND GENERAL",
  "A Y S PROPERTY DEVELOPMENT",
  "A.C DEMETRIOU DEVELOPERS",
  "AA GLOBAL LIMITED",
  "AA REAL ESTATE DEVELOPMENT CO",
  "AABAR PROPERTIES LLC",
  "AAKAR DEVELOPERS LIMITED",
  "AARK DEVELOPERS",

  "AQUA PROPERTIES FZ LLC",
  "32 GROUP PROPERTIES LIMITED",
  "3AM PROPERTY INVESTMENT",
  "4DIRECTION DEVELOPERS",
  "56 INVEST LLC",
  "618 DEVELOPMENT",
  "7 PALMS LOMBOK",
  "77 SHADES OF GREEN REAL ESTATE",
  "A C HOLDINGS LIMITED",
  "A K HOMES REAL ESTATE DEVELOPERS",
  "A N K DEVELOPERS LLC",
  "A R A S REAL ESTATE DEVELOPMENT"
];

export default function DevelopersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevelopers = developersList.filter((dev) =>
    dev.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium tracking-tight">Developers</span>
        </div>

        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-[32px] font-bold text-[#1e2350] mb-8">
            Developers
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-[700px] mx-auto">
            <input
              type="text"
              placeholder="Search our premium real estate developers..."
              className="w-full bg-white border border-gray-200 rounded-full py-4 px-6 pr-12 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e2350]/10 transition-all placeholder:text-gray-300 italic"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
          </div>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {filteredDevelopers.map((dev, index) => (
            <div 
              key={index} 
              className="bg-white rounded border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Logo Area */}
              <div className="h-44 bg-[#f1f3f6] flex items-center justify-center p-8 group-hover:bg-[#ebedf1] transition-colors">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden border border-gray-50 flex-shrink-0">
                  {/* Since we don't have actual logos, we use a generic placeholder icon or initials */}
                  <div className="text-[20px] font-bold text-gray-200 uppercase tracking-tighter">
                    {dev.split(' ').map(n => n[0]).join('').slice(0, 3)}
                  </div>
                </div>
              </div>

              {/* Developer Name & Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[13px] font-bold text-[#1e2350] tracking-wide mb-6 uppercase min-h-[40px] leading-relaxed">
                  {dev}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                  <Mail size={14} className="text-gray-300" />
                  <span className="group-hover:text-primary transition-colors">Email</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="flex items-center justify-center gap-1 mt-16">
          <button suppressHydrationWarning className="px-4 py-2 text-xs font-bold text-gray-300 border border-gray-200 rounded hover:bg-white transition-all uppercase tracking-widest">
            Previous
          </button>
          <div className="flex items-center gap-1 mx-2">
            <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded bg-[#1e2350] text-white text-xs font-bold shadow-sm">1</button>
            <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-gray-500 text-xs font-bold border border-transparent hover:border-gray-200 transition-all">2</button>
            <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-gray-500 text-xs font-bold border border-transparent hover:border-gray-200 transition-all">3</button>
            <span className="text-gray-400 mx-1">...</span>
            <button suppressHydrationWarning className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-gray-500 text-xs font-bold border border-transparent hover:border-gray-200 transition-all">95</button>
          </div>
          <button suppressHydrationWarning className="px-5 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded hover:bg-white transition-all uppercase tracking-widest">
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
