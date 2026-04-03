"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, Users, Building2, Award } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    alt: "Dubai Skyline",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    alt: "Luxury Villa Dubai",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    alt: "Dubai Architecture",
  },
];

const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Happy Families" },
  { icon: Building2, value: 350, suffix: "+", label: "Projects Completed" },
  { icon: Home, value: 2500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Experience" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section suppressHydrationWarning className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ opacity: currentSlide === i ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to bottom, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.85) 100%)"
      }} />

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-28 md:pt-32 lg:pt-36 pb-56 sm:pb-48 md:pb-40 flex flex-col justify-center min-h-[100dvh]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6 w-full"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase text-center">
            Dubai&apos;s Premier Real Estate Agency
          </span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Leading Real Estate
          <br />
          <span className="text-gold-gradient">Company in Dubai</span>
          <br />
          <span className="italic font-medium text-white/90">You Can Trust</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Your trusted partner for residential real estate — helping homeowners and investors 
          find their dream homes with expert guidance and deep market knowledge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
        >
          <Link
            href="/services"
            className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase"
          >
            Explore Services
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="btn-outline-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              suppressHydrationWarning
              onClick={() => setCurrentSlide(i)}
              className="transition-all duration-300"
              style={{
                width: currentSlide === i ? "2rem" : "0.5rem",
                height: "0.375rem",
                borderRadius: "9999px",
                background: currentSlide === i ? "#d4af37" : "rgba(255,255,255,0.4)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animated Stats Bar */}
      <div className="absolute bottom-0 sm:bottom-0 md:bottom-0 left-0 right-0 z-10 w-full pointer-events-none">
        <div className="bg-secondary/80 backdrop-blur-md border-y border-white/10 px-4 pointer-events-auto">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  className="flex flex-col items-center py-4 md:py-6 px-2 md:px-4 border-r border-white/10 last:border-r-0 even:border-r-0 md:odd:border-r md:even:border-r text-center"
                >
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                    <stat.icon size={16} className="text-primary md:w-[18px] md:h-[18px]" />
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
