"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-[#d4af37]/30 rounded-full"
            ></motion.div>
            <div className="bg-[#d4af37]/10 p-6 rounded-full">
              <Compass className="w-16 h-16 text-[#d4af37]" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
            404
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#c9a227] mx-auto mb-8 rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-white/90">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 max-w-lg mx-auto text-lg mb-10 leading-relaxed font-light">
            The exclusive property or page you are looking for does not exist, has been moved, or is currently off-market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#c9a227] hover:from-[#b5952f] hover:to-[#a3801f] text-white px-8 py-4 rounded-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1"
          >
            <Home size={18} strokeWidth={2} />
            RETURN HOME
          </Link>
          
          <Link 
            href="/#featured-projects" 
            className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#d4af37] bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            <Search size={18} strokeWidth={2} />
            BROWSE PROJECTS
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center opacity-30">
        <p className="text-[10px] tracking-[0.3em] uppercase">ZHM Real Estate</p>
      </div>
    </div>
  );
}
