"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

// List of all 17 images
const galleryImages = [
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-07 at 5.07.28 PM (1).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-07 at 5.07.28 PM (2).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-07 at 5.07.28 PM.jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-07 at 5.07.47 PM.jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.06 PM (1).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.06 PM (2).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.06 PM.jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.07 PM (1).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.07 PM (2).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.07 PM.jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.08 PM (1).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.08 PM (2).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.08 PM.jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.09 PM (1).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.09 PM (2).jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.09 PM.jpeg" },
  { src: "/images/clients_meeting-and-company-images/WhatsApp Image 2026-07-15 at 10.56.10 PM.jpeg" }
];

export default function CompanyGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-16 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-18">
          <span className="section-label mb-3 inline-block" style={{ color: '#d4af37' }}>
            ZHM IN ACTION
          </span>
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-4" 
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Credibility through <em className="text-gold-gradient italic">Real Actions</em>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Take a look behind the scenes at our successful client meetings, professional office operations, and certified documentation practices.
          </p>
        </div>

        {/* Masonry Grid (using CSS columns for perfect layout of varied aspect ratios) */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 hover:border-primary/40 transition-colors duration-300 shadow-lg block"
            >
              {/* Responsive Image wrapper that preserves aspect ratio */}
              <div className="relative w-full h-auto overflow-hidden">
                <img
                  src={image.src}
                  alt="ZHM Real Estate Action"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              
              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <Eye className="text-primary" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 border border-white/10"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 border border-white/10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox Content */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={galleryImages[lightboxIndex].src}
                  alt="ZHM Real Estate Action Full"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
