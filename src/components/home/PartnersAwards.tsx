"use client";

import { motion } from "framer-motion";

// Placeholder partners – using styled text blocks since no actual logos available
const developers = [
  "Emaar", "Damac", "Meraas", "Aldar", "Nakheel",
  "Sobha", "Dubai Properties", "Imkan", "Azizi", "Ellington",
];

const awards = [
  { title: "Best Real Estate Agency", year: "2024", org: "Dubai Property Awards" },
  { title: "Top Performing Broker", year: "2023", org: "Real Estate Excellence Awards" },
  { title: "Client Satisfaction Excellence", year: "2023", org: "UAE Real Estate Forum" },
  { title: "Innovation in Property Tech", year: "2022", org: "Gulf Real Estate Awards" },
];

export function PartnersAwards() {
  return (
    <section className="section-py bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Developer Partners */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="section-label mb-3 inline-flex mx-auto">Our Partners</span>
            <h2 className="heading-luxury text-3xl md:text-4xl mb-3">
              We Work With
              <em className="font-medium"> Leading Developers</em>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Partnered with the UAE&apos;s most reputable real estate developers to bring you the finest properties.
            </p>
          </div>

          {/* Infinite Scroll */}
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(90deg, white, transparent)" }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(-90deg, white, transparent)" }} />

            <div className="partners-track">
              {[...developers, ...developers].map((name, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center mx-6 px-8 py-5 border border-gray-100 rounded-xl shrink-0 min-w-[160px] hover:border-primary hover:shadow-[var(--shadow-gold)] transition-all duration-300 cursor-default"
                >
                  <span className="font-bold text-secondary text-sm tracking-wider whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <div className="text-center mb-10">
            <span className="section-label mb-3 inline-flex mx-auto">Recognition</span>
            <h2 className="heading-luxury text-3xl md:text-4xl mb-3">
              Recognized for
              <em className="font-medium"> Excellence</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-secondary rounded-2xl p-8 text-center overflow-hidden luxury-card"
              >
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

                {/* Trophy icon */}
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 mx-auto mb-5 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>

                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{award.year}</p>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{award.title}</h3>
                <p className="text-gray-400 text-xs">{award.org}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
