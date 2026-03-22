"use client";

import Image from "next/image";
import { CheckCircle2, Trophy, Users, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1541887089898-d46532454fcc?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Real Estate" 
            fill 
            className="object-cover"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Who We Are</span>
              <h2 className="text-4xl font-bold text-secondary mb-6 leading-tight">
                ZHM Real Estate LLC
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded by Mr. Shahbaz solely. An expert & specialist in Real Estate Fraternity. His in-depth knowledge & visionary insights have led ZHM Real Estate to successfully establish itself as one of the most sought real estate agency in Dubai (UAE).
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We’re poised to be long-term partners, building a future of shared success and collaboration. Together, we’ll embark on a lasting journey of growth and achievement.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Trophy size={24} />
                  </div>
                  <h4 className="font-bold text-secondary text-lg">Award Winning</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Recognized for excellence in property management.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Users size={24} />
                  </div>
                  <h4 className="font-bold text-secondary text-lg">Expert Agents</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Dedicated professionals with local market knowledge.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1577908953932-5bd324d27572?q=80&w=1956&auto=format&fit=crop" 
                alt="Business Meeting" 
                fill 
                className="object-cover"
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white text-sm">M</span>
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the best Real Estate solutions firm in the Heart of Property buyer and seller in all verticals. In addition to providing remarkable service quality and extraordinary level of Property Buy & Sell satisfaction.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white text-sm">V</span>
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Middle East renowned Real Estate Agency, known and respected for its exceptional services and high performance environment.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
