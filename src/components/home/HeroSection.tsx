"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Building2, Award, Handshake } from "lucide-react";

const heroVideos = [
  {
    src: "/videos/Living_room_walkthrough_modern_i…_202607040407.mp4",
    label: "Living Room Walkthrough",
  },
  {
    src: "/videos/Modern_villa_with_infinity_pool_202607040408.mp4",
    label: "Modern Villa with Infinity Pool",
  },
];

const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Happy Families" },
  { icon: Building2, value: 350, suffix: "+", label: "Projects Completed" },
  { icon: Handshake, value: 2500, suffix: "+", label: "Happy Clients" },
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
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Per-video durations: video 0 = 5s, video 1 = 10s, then loop
  const videoDurations = [5000, 10000];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, videoDurations[currentVideo]);
    return () => clearTimeout(timer);
  }, [currentVideo]);

  // Play/pause based on active slide
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === currentVideo) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [currentVideo]);



  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Video Backgrounds ── */}
      {heroVideos.map((video, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-1000 overflow-hidden"
          style={{ opacity: currentVideo === i ? 1 : 0 }}
        >
          {/* Scale up 26% and nudge left/up so watermark corners are cropped */}
          <video
            ref={(el) => { videoRefs.current[i] = el; }}
            src={video.src}
            autoPlay={i === 0}
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1.26) translate(-3%, -1%)",
              transformOrigin: "center center",
            }}
          />
          {/* Corner gradient safeguard — covers any remaining watermark remnants */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 30% 20% at 100% 100%, rgba(5,8,20,0.85) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}

      {/* ── Cinematic gradient overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,15,30,0.70) 0%, rgba(10,15,30,0.45) 45%, rgba(10,15,30,0.80) 100%)",
        }}
      />

      {/* ── Subtle vignette ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(5,8,18,0.55) 100%)",
        }}
      />

      {/* ── Gold top accent ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
      />


      {/* ── Hero Content ── */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-28 md:pt-32 lg:pt-36 pb-64 sm:pb-56 md:pb-52 flex flex-col justify-center min-h-[100dvh]">

        {/* Tag line */}
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

        {/* Headline */}
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

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Your trusted partner for residential real estate — helping homeowners and investors{" "}
          find their dream homes with expert guidance and deep market knowledge.
        </motion.p>

        {/* CTAs */}
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

        {/* Video indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {heroVideos.map((_, i) => (
            <button
              key={i}
              suppressHydrationWarning
              onClick={() => setCurrentVideo(i)}
              className="transition-all duration-300"
              style={{
                width: currentVideo === i ? "2rem" : "0.5rem",
                height: "0.375rem",
                borderRadius: "9999px",
                background: currentVideo === i ? "#d4af37" : "rgba(255,255,255,0.4)",
              }}
              aria-label={`Video ${i + 1}`}
            />
          ))}
        </div>


      </div>

      {/* ── Stats Bar ── */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 w-full pointer-events-none px-4">
        <div className="max-w-6xl mx-auto bg-secondary/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(212,175,55,0.05)] pointer-events-auto p-6 md:py-8 md:px-8 transition-all duration-500 hover:border-primary/25">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="relative flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 text-center sm:text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] flex-shrink-0">
                  <stat.icon size={20} className="transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center sm:justify-start">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-semibold mt-1 leading-tight group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
