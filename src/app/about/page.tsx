"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Trophy, Users, Building2, Target, Eye, Award, 
  CheckCircle, Star, Globe, TrendingUp, Medal,
  MapPin, Phone, Mail, ArrowRight, Play
} from "lucide-react";

export default function AboutPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden font-sans">
      
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Abstract Premium Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-secondary to-secondary" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-[100px]" 
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-20 md:pt-36 pb-12 md:pb-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-5 md:mb-10"
          >
            <span className="w-6 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-[10px] md:text-sm font-semibold tracking-[0.25em] uppercase px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              Established 2010
            </span>
            <span className="w-6 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-5 md:mb-10"
          >
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Building Dreams,
              <br />
              <span className="text-gold-gradient italic font-normal tracking-wide inline-block mt-1 md:mt-4 md:pl-8">
                Delivering Excellence
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Dubai&apos;s premier real estate agency, transforming visions into prestigious addresses since <span className="text-white font-medium">2010</span>.
            </p>
          </motion.div>

          {/* Scroll indicator — hidden on smallest screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden sm:flex flex-col items-center gap-3 mt-10 md:mt-14"
          >
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
            <div className="w-[1px] h-10 md:h-14 bg-white/10 overflow-hidden relative">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. INTRO SECTION ===== */}
      <section ref={sectionRef} className="py-10 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                  
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp}>
                <span className="section-label mb-3 block">Who We Are</span>
                <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-5 leading-tight" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  A Legacy of
                  <br />
                  <em className="text-gold-gradient italic">Trust & Excellence</em>
                </h2>
              </motion.div>
      
              <motion.div variants={fadeInUp} className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  ZHM Real Estate LLC was founded by Mr. Shahbaz solely. An expert & specialist in Real Estate Fraternity. His in-depth knowledge & visionary insights have led ZHM Real Estate to successfully establish itself as one of the most sought real estate agency in Dubai (UAE).
                </p>
                <p>
                  With over 15 years of industry excellence, we&apos;ve built a reputation for delivering exceptional service, innovative solutions, and unmatched market expertise. Our commitment to integrity and client satisfaction has made us a trusted name in Dubai&apos;s competitive real estate landscape.
                </p>
              </motion.div>
      
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Trophy className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-base mb-0.5">Award Winning</h4>
                    <p className="text-gray-500 text-xs">Recognized excellence in property management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-base mb-0.5">Expert Team</h4>
                    <p className="text-gray-500 text-xs">Dedicated professionals with local expertise</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
      
            {/* Right: Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative h-44 md:h-64 rounded-xl overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1956&auto=format&fit=crop"
                      alt="Business Meeting"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative h-32 md:h-48 rounded-xl overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                      alt="Office Space"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-6">
                  <div className="relative h-32 md:h-48 rounded-xl overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                      alt="Dubai Buildings"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative h-44 md:h-64 rounded-xl overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                      alt="Property Showcase"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
      
          </div>
        </div>
      </section>

      {/* ===== 3. FOUNDER SECTION ===== */}
      <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-[300px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                    alt="Mr. Shahbaz - Founder"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-white text-base font-bold">Mr. Shahbaz</p>
                    <p className="text-gray-300 text-sm">Founder & CEO</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/10 rounded-full blur-3xl" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="section-label mb-3 block">Leadership</span>
                <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-5" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Visionary Leadership,
                  <br />
                  <em className="text-gold-gradient italic">Proven Excellence</em>
                </h2>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    With an unwavering commitment to excellence and a deep understanding of Dubai&apos;s dynamic real estate market, Mr. Shahbaz has transformed ZHM Real Estate into a beacon of trust and professionalism.
                  </p>
                  <p>
                    His strategic vision combined with a hands-on approach and client-first philosophy has enabled us to consistently exceed expectations and build lasting relationships with our valued clients.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="text-primary" size={26} />
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-lg">15+ Years</p>
                      <p className="text-gray-500 text-sm">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. TEAM SECTION ===== */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8 md:mb-14"
          >
            <motion.span variants={fadeInUp} className="section-label mb-3 inline-block">Our Team</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Meet The Experts
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-base max-w-xl mx-auto">
              Our diverse team brings together decades of combined experience in Dubai real estate.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Ahmed Al Mansoori", role: "Senior Property Consultant", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
              { name: "Sarah Johnson", role: "Investment Advisor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
              { name: "Mohammed Hassan", role: "Leasing Specialist", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
              { name: "Emma Williams", role: "Marketing Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <div className="relative h-56 sm:h-72 md:h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Always visible name on mobile, hover on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                    <h3 className="text-sm md:text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-gray-300 text-xs md:text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. CORE VALUES SECTION ===== */}
      <section className="py-10 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8 md:mb-14"
          >
            <motion.span variants={fadeInUp} className="section-label mb-3 inline-block" style={{ color: '#d4af37' }}>Core Values</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              What Drives Us
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-base max-w-xl mx-auto">
              Our fundamental principles guide every decision we make and every interaction we have.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: Target, title: "Client-Centric", desc: "Your goals are our priority. We tailor services to exceed your expectations." },
              { icon: CheckCircle, title: "Integrity", desc: "Transparent, honest, and ethical practices in every transaction." },
              { icon: Star, title: "Excellence", desc: "Relentless pursuit of perfection in service delivery and results." },
              { icon: Users, title: "Collaboration", desc: "Working together with clients, partners, and communities." },
              { icon: TrendingUp, title: "Innovation", desc: "Embracing cutting-edge technology and creative solutions." },
              { icon: Award, title: "Accountability", desc: "Taking ownership of our commitments and delivering on promises." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-7 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <value.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-base md:text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. MISSION & VISION SECTION ===== */}
      <section className="py-10 md:py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                  <Target className="text-white" size={24} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Our Mission
                </h3>
                
                <p className="text-gray-600 text-base leading-relaxed mb-5">
                  To be the best Real Estate solutions firm in the Heart of Property buyer and seller in all verticals. In addition to providing remarkable service quality and extraordinary level of Property Buy & Sell satisfaction.
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Exceptional client service",
                    "Market-leading expertise",
                    "Innovative solutions",
                    "Ethical business practices"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <CheckCircle className="text-primary shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Eye className="text-white" size={24} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Our Vision
                </h3>
                
                <p className="text-gray-600 text-base leading-relaxed mb-5">
                  To be Middle East renowned Real Estate Agency, known and respected for its exceptional services and high performance environment.
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Regional market leadership",
                    "Industry recognition",
                    "Sustainable growth",
                    "Community impact"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <CheckCircle className="text-primary shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== 7. TRUST BADGES / FEATURES SECTION ===== */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8 md:mb-14"
          >
            <motion.span variants={fadeInUp} className="section-label mb-3 inline-block">Why Choose Us</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Features That Set Us Apart
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {[
              { icon: Building2, label: "5000+ Properties Sold" },
              { icon: Users, label: "3000+ Happy Clients" },
              { icon: Globe, label: "Global Network" },
              { icon: Medal, label: "15+ Awards Won" },
              { icon: TrendingUp, label: "AED 2B+ Transactions" },
              { icon: CheckCircle, label: "RERA Certified" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="text-primary group-hover:text-white transition-colors" size={26} />
                </div>
                <p className="text-gray-700 font-semibold text-xs md:text-sm leading-snug">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. AWARDS / CERTIFICATES GALLERY ===== */}
      <section className="py-10 md:py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8 md:mb-14"
          >
            <motion.span variants={fadeInUp} className="section-label mb-3 inline-block">Recognition</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Awards & Certifications
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-base max-w-xl mx-auto">
              Industry recognition of our commitment to excellence and innovation in real estate.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Best Real Estate Agency 2024", org: "Dubai Land Department", year: "2024" },
              { title: "Excellence in Property Management", org: "RERA Awards", year: "2023" },
              { title: "Top Sales Performance Award", org: "Emaar Partners", year: "2023" },
              { title: "Customer Service Excellence", org: "Middle East Real Estate", year: "2022" },
              { title: "Innovation in Marketing", org: "Property Finder", year: "2022" },
              { title: "Sustainable Development Award", org: "Dubai Municipality", year: "2021" },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-5 md:p-7 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Award className="text-primary group-hover:text-white transition-colors" size={22} />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{award.year}</span>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
                <p className="text-gray-500 text-xs">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. PARTNERS LOGOS SLIDER ===== */}
      <section className="py-10 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.span variants={fadeInUp} className="section-label mb-3 inline-block">Our Partners</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Trusted By Leading Developers
            </motion.h2>
          </motion.div>
        </div>

        {/* Infinite slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 md:gap-16 items-center" style={{ width: 'max-content' }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-10 md:gap-16 items-center px-5">
                {[
                  "Emaar", "Damac", "Nakheel", "Meraas", "Sobha", "Azizi",
                  "Aldar", "Select Group", "Ellington", "Reportage", "Danube"
                ].map((partner, idx) => (
                  <div
                    key={`${setIndex}-${idx}`}
                    className="w-24 md:w-40 h-12 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
                  >
                    <div className="text-lg md:text-2xl font-bold text-secondary" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 10. OFFICE LOCATION WITH MAP ===== */}
      <section className="py-10 md:py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-8 md:mb-12"
          >
            <motion.span variants={fadeInUp} className="section-label mb-3 inline-block">Our Location</motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-secondary mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Visit Our Office
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[260px] sm:h-[340px] md:h-[440px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3944259913!2d55.27078231500396!3d25.18777798393851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-white rounded-2xl" />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-4 md:space-y-6"
            >
              <div className="bg-white p-5 md:p-7 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-secondary mb-1">Head Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      ZHM Real Estate LLC<br />
                      G010 Ontario Tower, Ground Floor<br />
                      Business Bay, Dubai - UAE
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold mt-2 text-sm hover:gap-3 transition-all"
                    >
                      Get Directions <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 md:p-7 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-secondary mb-1">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+971502057334" className="text-gray-600 text-sm hover:text-primary transition-colors">
                        +971 50 205 7334
                      </a>
                      <a href="tel:+971585723972" className="text-gray-600 text-sm hover:text-primary transition-colors">
                        +971 58 572 3972
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 md:p-7 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-secondary mb-1">Email</h3>
                    <a href="mailto:info@zhmrealestatellc.ae" className="text-gray-600 text-sm hover:text-primary transition-colors">
                      info@zhmrealestatellc.ae
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
