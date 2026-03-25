"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Dubai Real Estate Market Trends to Watch in 2025",
    excerpt: "An in-depth look at the key trends shaping Dubai's property market — from off-plan surges to luxury villa demand.",
    category: "Market Trends",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Top 5 Areas to Invest in Dubai Right Now",
    excerpt: "From Business Bay to Dubai Hills Estate — discover the hottest neighbourhoods offering the best rental yields.",
    category: "Investment Tips",
    date: "February 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "First-Time Buyer's Complete Guide to Dubai Property",
    excerpt: "Everything you need to know about purchasing your first property in Dubai — legal steps, financing, and what to expect.",
    category: "Buyer's Guide",
    date: "February 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Why International Investors Are Flocking to Dubai",
    excerpt: "Tax benefits, high yields, and world-class infrastructure — here's why Dubai remains a top global investment destination.",
    category: "International",
    date: "January 22, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
  },
];

export function BlogSection() {
  return (
    <section className="section-py bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-label mb-3 block">Latest Insights</span>
            <h2 className="heading-luxury text-3xl md:text-5xl">
              Latest Insights
              <br />
              <em className="font-medium">and Updates</em>
            </h2>
          </div>
          <Link
            href="#"
            className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-widest self-start md:self-auto shrink-0"
          >
            View All Articles <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden luxury-card border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover property-img-zoom"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-secondary text-sm leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all duration-200"
                >
                  Read More <ArrowRight size={12} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
