"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Building2, Key, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center">
        {/* Background Image / Slider placeholder */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Your Own Dream <br/>
            <span className="text-primary italic">Home in Dubai</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Discover exclusive properties in the heart of the UAE. We’re poised to be long-term partners, building a future of shared success.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg bg-primary hover:bg-primary-dark text-white rounded-none px-8 py-6">
              Find Property
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-secondary hover:bg-white hover:text-secondary rounded-none px-8 py-6">
              Contact Agent
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
                  alt="Luxury Villa" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="font-medium text-white/90">Years of Experience<br/>in Dubai Real Estate</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-1 bg-primary"></span>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                The experts in local and international property
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                ZHM Real Estate LLC was founded by Mr. Shahbaz solely. An expert & specialist in Real Estate Fraternity. His in-depth knowledge & visionary insights have led ZHM Real Estate to successfully establish itself as one of the most sought real estate agency in Dubai (UAE).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="font-semibold text-secondary">Premium Properties</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="font-semibold text-secondary">Trusted Agents</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="font-semibold text-secondary">Property Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="font-semibold text-secondary">Investment Advice</span>
                </div>
              </div>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 py-6">
                <Link href="/about">Discover More <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Core Services</h2>
            <p className="text-gray-500 text-lg">We provide remarkable service quality and extraordinary level of Property Buy & Sell satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Building2 size={40} />}
              title="Buy Property"
              desc="Find your dream home with our extensive portfolio of luxury properties across Dubai."
            />
            <ServiceCard 
              icon={<Key size={40} />}
              title="Sell Property"
              desc="Get the best market value for your property with our expert valuation and marketing strategies."
            />
            <ServiceCard 
              icon={<ShieldCheck size={40} />}
              title="Property Management"
              desc="Hassle-free management of your real estate assets ensuring maximum returns."
            />
          </div>
        </div>
      </section>

      {/* We will add Featured Properties dynamically later, currently placeholder section */}
      
      {/* 4. Contact CTA */}
      <section className="relative py-24 bg-secondary text-white text-center">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-4xl font-bold mb-6">Ready to find your dream home?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get in touch with our expert agents today for personalized assistance.</p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-none px-10 py-6 text-lg">
            Contact Us Now
          </Button>
        </div>
      </section>
      
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group bg-white border border-gray-100 p-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary group-hover:scale-150 transition-all duration-700"></div>
      <div className="text-primary mb-6 group-hover:text-white transition-colors duration-300 relative z-10">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-6 relative z-10 group-hover:text-gray-700 transition-colors">
        {desc}
      </p>
      <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors relative z-10">
        Read More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
}
