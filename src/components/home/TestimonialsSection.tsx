"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vijay Barrey",
    role: "Local Guide",
    rating: 5,
    text: "I recently worked with Shahbaz and had a truly positive experience from start to finish. The team demonstrated exceptional professionalism, market knowledge, and dedication throughout the entire process.",
  },
  {
    name: "Muhammed Najeeb",
    role: "Real Estate Client",
    rating: 5,
    text: "Had a great experience working with Shabaz. He was professional, responsive, and helped me rent out my apartment in just a few days. Very smooth process with clear communication throughout. Highly recommended!",
  },
  {
    name: "Bipin Rai",
    role: "Real Estate Client",
    rating: 5,
    text: "Very nice experience. Reliable. Mr. Shahbaz.",
  },
  {
    name: "Ahmed Landoulsi",
    role: "Local Guide",
    rating: 5,
    text: "Very satisfied, thanks very cooperative.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => go(1), 6000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const t = testimonials[current];

  return (
    <section className="section-py bg-surface relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="section-label mb-3 inline-flex mx-auto">Testimonials</span>
          <h2 className="heading-luxury text-3xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Real stories from homeowners and investors who trusted ZHM Real Estate.
          </p>
        </div>

        {/* Slide */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl border border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 relative overflow-hidden group hover:border-primary/25 transition-all duration-500"
          >
            {/* Accent Gold Line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
              <Quote size={80} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array(t.rating).fill(0).map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
            </div>

            <p 
              className="text-secondary text-lg md:text-2xl leading-relaxed mb-8 italic relative z-10"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author info & Verified Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
              <div>
                <p className="font-extrabold text-secondary text-lg tracking-wide">{t.name}</p>
                <p className="text-sm text-gray-400 font-medium">{t.role}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.111 4.113-3.414 0-6.19-2.776-6.19-6.19 0-3.414 2.776-6.19 6.19-6.19 1.483 0 2.844.525 3.917 1.398l3.11-3.11C18.91 2.158 15.82 1 12.24 1 5.48 1 0 6.48 0 13.24c0 6.76 5.48 12.24 12.24 12.24 6.818 0 12.015-4.8 12.015-12.24 0-.648-.06-1.302-.18-1.955H12.24z"/>
                  </svg>
                  Verified Google Review
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              suppressHydrationWarning
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  suppressHydrationWarning
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.5rem",
                    height: "0.375rem",
                    borderRadius: "9999px",
                    background: i === current ? "#d4af37" : "#d1d5db",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              suppressHydrationWarning
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
