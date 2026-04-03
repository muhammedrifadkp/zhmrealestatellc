"use client";

import { motion } from "framer-motion";
import { ProjectProperty } from "@/data/projects";
import Image from "next/image";

export default function ProjectHero({ project }: { project: ProjectProperty }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-4"
        >
          {project.name} - {project.location}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-light uppercase tracking-widest"
        >
          {project.subtitle}
        </motion.h2>
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0f172a] to-transparent h-32 z-0" />
    </section>
  );
}
