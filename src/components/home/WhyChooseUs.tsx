"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Heart, LayoutGrid, HeadphonesIcon, Building2 } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Trust and Transparency",
    desc: "We operate with complete honesty and clarity in every transaction, ensuring you always know exactly what to expect.",
  },
  {
    icon: Brain,
    title: "Expert Market Knowledge",
    desc: "Deep insights into Dubai's real estate landscape, trends, and investment opportunities — helping you make informed decisions.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    desc: "We take time to understand your unique needs and tailor our approach to find you the perfect match.",
  },
  {
    icon: LayoutGrid,
    title: "Wide Range of Options",
    desc: "From luxury villas in Palm Jumeirah to smart city apartments — our extensive portfolio covers every budget and preference.",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    desc: "From the first viewing to final handover and beyond — we're your partner at every step of the real estate journey.",
  },
  {
    icon: Building2,
    title: "Extensive Portfolio",
    desc: "Access an unmatched selection of premium, mid-range, and investment real estate across all key Dubai communities.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-surface hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-3 inline-flex mx-auto">Why Choose Us</span>
          <h2 className="heading-luxury text-3xl md:text-5xl mb-4">
            Why Choose ZHM for Your
            <br />
            <em className="font-medium text-gold-gradient">Real Estate Needs?</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We combine local expertise with international standards to deliver a real estate experience 
            unlike any other in Dubai.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 luxury-card overflow-hidden"
            >
              {/* Background accent on hover */}
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon size={26} className="text-primary" />
              </div>

              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100 group-hover:text-white/10 transition-colors duration-300 font-serif select-none">
                0{i + 1}
              </span>

              <h3 className="relative z-10 text-lg font-bold text-secondary group-hover:text-white mb-3 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {pillar.desc}
              </p>

              {/* Gold bottom border reveal */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
