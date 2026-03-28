"use client";

import { motion } from "framer-motion";

// Placeholder partners – using styled text blocks since no actual logos available
const developers = [
  "Emaar", "Damac", "Meraas", "Aldar", "Nakheel",
  "Sobha", "Dubai Properties", "Imkan", "Azizi", "Ellington",
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
              Partnered with the UAE&apos;s most reputable real estate developers to bring you the finest real estate.
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


      </div>
    </section>
  );
}
