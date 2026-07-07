"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const developers = [
  { name: "Emaar", logo: "/images/Leading-Developers-logo/Emaar.jpeg" },
  { name: "Damac", logo: "/images/Leading-Developers-logo/DAMAC..png" },
  { name: "Meraas", logo: "/images/Leading-Developers-logo/Meraas.png" },
  { name: "Aldar", logo: "/images/Leading-Developers-logo/Aldar.png" },
  { name: "Nakheel", logo: "/images/Leading-Developers-logo/Nakheel.png" },
  { name: "Sobha", logo: "/images/Leading-Developers-logo/Sobha.png" },
  { name: "Dubai Properties", logo: "/images/Leading-Developers-logo/dubai properties.jpeg" },
  { name: "Imkan", logo: "/images/Leading-Developers-logo/IMKAN.png" },
  { name: "Azizi", logo: "/images/Leading-Developers-logo/Azizi Developments.png" },
  { name: "Ellington", logo: "/images/Leading-Developers-logo/Ellington.png" },
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
              {[...developers, ...developers].map((dev, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center mx-6 px-8 py-3 border border-gray-100 rounded-xl shrink-0 min-w-[240px] h-28 hover:border-primary/50 hover:shadow-[var(--shadow-gold)] transition-all duration-300 cursor-default bg-white relative overflow-hidden"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={dev.logo}
                      alt={`${dev.name} Logo`}
                      fill
                      sizes="240px"
                      className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
