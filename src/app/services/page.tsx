"use client";

import Image from "next/image";
import { Home, Key, MapPin, Building2, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Property Buying",
      description: "We guide you through the entire process of finding and purchasing your dream property in Dubai, ensuring a seamless experience from start to finish.",
      icon: <Home size={32} />
    },
    {
      title: "Property Selling",
      description: "Maximize your returns with our expert valuation, strategic marketing, and extensive network of serious buyers both locally and internationally.",
      icon: <Key size={32} />
    },
    {
      title: "Property Management",
      description: "Leave the day-to-day management of your real estate assets to us. We handle tenant screening, maintenance, and rent collection.",
      icon: <Building2 size={32} />
    },
    {
      title: "Investment Advisory",
      description: "Gain valuable insights into Dubai's real estate market. We provide data-driven advice to help you make lucrative investment decisions.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Off-Plan Projects",
      description: "Access exclusive off-plan developments from top developers in Dubai. Secure premium units at launch prices with flexible payment plans.",
      icon: <MapPin size={32} />
    },
    {
      title: "Consultation Services",
      description: "Whether you're a first-time buyer or a seasoned investor, our consultants offer customized solutions tailored to your unique requirements.",
      icon: <Handshake size={32} />
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Business Buildings" 
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">What We Offer</h2>
            <p className="text-gray-500 text-lg">Comprehensive real estate solutions designed to meet your every need. We deliver excellence in every transaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need expert real estate advice?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Our dedicated team is ready to assist you round the clock. Let's start the dialogue.</p>
          <Button asChild size="lg" variant="outline" className="text-lg border-white text-secondary hover:bg-white hover:text-secondary rounded-none px-8 py-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
