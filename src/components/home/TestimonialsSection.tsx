"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Mansouri",
    role: "Real Estate Investor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "ZHM Real Estate gave me the most professional real estate experience I've ever had in Dubai. Broker Mohammad Shahbaz Rasheed was transparent, knowledgeable, and truly went above and beyond to help me find the perfect investment property. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner – Palm Jumeirah",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The team at ZHM was incredibly supportive throughout my entire property purchase journey. Their market knowledge is unmatched, and they secured me a fantastic deal on my dream apartment. I couldn't be happier with the outcome.",
  },
  {
    name: "Raj Patel",
    role: "Property Investor – UK Based",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "As an international investor, I was nervous about buying property in Dubai remotely. ZHM Real Estate made the entire process seamless. Their transparency and quick results exceeded my expectations — I've already referred three of my colleagues to them.",
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
            className="bg-white rounded-3xl shadow-[var(--shadow-luxury)] p-8 md:p-12 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-primary/10">
              <Quote size={80} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array(t.rating).fill(0).map((_, i) => (
                <Star key={i} size={18} className="text-primary fill-primary" />
              ))}
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 italic relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                <Image src={t.avatar} alt={t.name} width={56} height={56} className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-secondary">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
              {/* Gold divider */}
              <div className="ml-auto w-12 h-px bg-primary" />
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
