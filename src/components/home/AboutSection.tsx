"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Premium luxury real estate",
  "Trusted & certified agents",
  "Professional portfolio management",
  "Expert investment advice",
  "Market-leading valuations",
  "End-to-end client support",
];

export function AboutSection() {
  return (
    <section className="section-py bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-[var(--shadow-luxury)]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
                alt="ZHM Real Estate – Luxury Real Estate Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl shadow-2xl hidden md:block border border-primary/30"
            >
              <p className="text-4xl font-bold text-primary font-serif">15+</p>
              <p className="text-white/80 text-sm leading-tight mt-1">Years of Experience<br />in Dubai Real Estate</p>
            </motion.div>

            {/* Second small image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -left-6 w-36 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop"
                alt="ZHM Office"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Gold accent shape */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-full border-4 border-primary/30 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label mb-4 block">About Us</span>

            <h2 className="heading-luxury text-3xl md:text-5xl mb-6">
              Your Trusted Real Estate
              <br />
              <em className="font-medium">Company in Dubai</em>
            </h2>

            <p className="text-gray-600 mb-4 text-base leading-relaxed">
              ZHM Real Estate LLC was founded by Mr. Shahbaz solely — an expert and specialist in the 
              Real Estate Fraternity. His in-depth knowledge and visionary insights have led ZHM Real Estate 
              to successfully establish itself as one of the most sought-after real estate agencies in Dubai (UAE).
            </p>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              We provide comprehensive real estate services with years of experience and deep market knowledge, 
              catering to both local and international investors looking to make their mark in Dubai&apos;s dynamic real estate market.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-secondary font-medium text-sm">{f}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
            >
              Discover More <ArrowRight size={15} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
