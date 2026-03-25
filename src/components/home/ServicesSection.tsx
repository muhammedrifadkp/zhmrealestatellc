"use client";

import { motion } from "framer-motion";
import { Building2, Key, ShieldCheck, Globe, BarChart3, Home } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Buy Property",
    desc: "Find your dream home with our extensive portfolio of luxury properties across Dubai's most sought-after communities.",
    href: "/properties",
  },
  {
    icon: Key,
    title: "Sell Property",
    desc: "Get the best market value for your property with our expert valuation, staging, and comprehensive marketing strategies.",
    href: "/services",
  },
  {
    icon: Home,
    title: "Rent & Lease",
    desc: "Access a curated selection of residential and commercial properties available for rent across all key Dubai areas.",
    href: "/properties",
  },
  {
    icon: ShieldCheck,
    title: "Property Management",
    desc: "Hassle-free management of your real estate assets ensuring maximum rental returns and asset appreciation.",
    href: "/services",
  },
  {
    icon: BarChart3,
    title: "Investment Advisory",
    desc: "Market analysis and strategic guidance to help you build a high-performing real estate investment portfolio.",
    href: "/services",
  },
  {
    icon: Globe,
    title: "International Properties",
    desc: "Explore attractive investment opportunities in Georgia, Latvia, and other emerging markets alongside Dubai.",
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="section-py bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-3 inline-flex mx-auto" style={{ color: "#d4af37" }}>
            <span className="w-8 h-px bg-primary" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Our Core Services
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            We provide remarkable service quality and an extraordinary level of property satisfaction — 
            from buy and sell to leasing and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-400 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(circle at top left, rgba(212,175,55,0.1), transparent 70%)" }} />

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <service.icon size={26} className="text-primary" />
              </div>

              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-300"
              >
                Learn More <ArrowRight size={13} />
              </Link>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
