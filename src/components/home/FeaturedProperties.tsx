"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury 3BR Apartment – Palm Jumeirah",
    location: "Palm Jumeirah, Dubai",
    price: "AED 4,500,000",
    type: "For Sale",
    beds: 3,
    baths: 3,
    area: "2,100",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Villa – Dubai Hills Estate",
    location: "Dubai Hills Estate, Dubai",
    price: "AED 12,000,000",
    type: "For Sale",
    beds: 5,
    baths: 6,
    area: "5,800",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Premium Penthouse – Downtown Dubai",
    location: "Downtown Dubai",
    price: "AED 8,200,000",
    type: "For Sale",
    beds: 4,
    baths: 4,
    area: "3,400",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Elegant 2BR Apartment – Business Bay",
    location: "Business Bay, Dubai",
    price: "AED 85,000 / yr",
    type: "For Rent",
    beds: 2,
    baths: 2,
    area: "1,250",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Stunning 1BR Studio – Dubai Marina",
    location: "Dubai Marina, Dubai",
    price: "AED 1,200,000",
    type: "For Sale",
    beds: 1,
    baths: 1,
    area: "750",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Townhouse – Jumeirah Village Circle",
    location: "JVC, Dubai",
    price: "AED 2,800,000",
    type: "For Sale",
    beds: 3,
    baths: 3,
    area: "2,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
];

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden luxury-card border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover property-img-zoom"
        />
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="btn-gold text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {property.type}
          </span>
        </div>
        {/* Wishlist */}
        <button suppressHydrationWarning className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-colors shadow-md">
          <Heart size={16} />
        </button>
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-secondary text-base leading-snug group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
          <MapPin size={13} className="text-primary shrink-0" />
          <span>{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <Bed size={15} className="text-primary" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={15} className="text-primary" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize size={15} className="text-primary" />
            <span>{property.area} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-primary">{property.price}</p>
          <Link
            href={`/properties/${property.id}`}
            className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary flex items-center gap-1 transition-colors"
          >
            Details <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProperties() {
  return (
    <section className="section-py bg-surface bg-pattern-dots">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-label mb-3 block">Property Listings</span>
            <h2 className="heading-luxury text-3xl md:text-5xl">
              Dubai Properties
              <br />
              <em className="font-medium">For Sale &amp; Rent</em>
            </h2>
            <p className="text-gray-500 mt-4 max-w-md text-sm leading-relaxed">
              Explore our curated list of exceptional properties in Dubai&apos;s most desirable destinations.
            </p>
          </div>
          <Link
            href="/properties"
            className="btn-dark inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-widest self-start md:self-auto shrink-0"
          >
            View All Properties <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
