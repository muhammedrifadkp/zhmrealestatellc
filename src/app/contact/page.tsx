"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, MapPin, Phone, MessageSquare, 
  Globe, Clock, Send, ChevronRight,
  User, Building, HelpCircle, Laptop
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    propertyType: "",
    message: ""
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "General Inquiry",
        propertyType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[600px] lg:h-[750px] flex items-center justify-center text-white overflow-hidden pt-32 bg-[#1e2350]">
        {/* Background Image with Enhanced Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop" 
            alt="Dubai Skyline Night" 
            fill 
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          {/* Subtle multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-[#1e2350]/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="flex flex-col items-center">
            {/* Minimal decoration line */}
            <div className="w-12 h-1 bg-primary mb-10 animate-fade-in-slow"></div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-none drop-shadow-2xl">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">ZHM Real Estate</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-bold text-white mb-6 uppercase tracking-[0.2em] leading-relaxed drop-shadow-md">
              Let's Help You Find the Right <span className="text-primary italic">Property in Dubai</span>
            </p>
            
            <div className="w-full max-w-2xl h-[1px] bg-white/20 mb-10"></div>
            
            <p className="text-sm md:text-lg text-white/70 mb-12 max-w-4xl mx-auto leading-8 font-light italic">
              "Whether you are looking to buy, sell, or explore Dubai properties for sale, our team at ZHM Real Estate is ready to assist you. Reach out to our experienced real estate professionals for expert guidance, property inquiries, or investment opportunities in Dubai."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button suppressHydrationWarning asChild size="lg" className="bg-primary hover:bg-white text-secondary hover:text-secondary rounded-full px-14 py-8 text-xs font-black uppercase tracking-[3px] transition-all duration-500 shadow-2xl hover:-translate-y-1 cursor-pointer">
                <Link href="/projects/dubai">
                  Buy a Property
                </Link>
              </Button>
              <Button suppressHydrationWarning size="lg" variant="outline" className="border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white hover:text-[#1e2350] rounded-full px-14 py-8 text-xs font-black uppercase tracking-[3px] transition-all duration-500 shadow-2xl hover:-translate-y-1">
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT GRID & FORM */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            
            {/* INFO COLUMN */}
            <div className="lg:w-[40%] bg-[#1e2350] p-10 md:p-16 text-white flex flex-col gap-12 relative overflow-hidden">
              {/* Abstract decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight uppercase leading-tight">
                  Speak With Our <br /> <span className="text-primary tracking-tighter">Property Advisors</span>
                </h2>
                <div className="w-16 h-1 bg-primary mb-8"></div>
                <p className="text-white/70 text-sm leading-relaxed font-light italic">
                  Our experienced team helps buyers and investors find the right property opportunities in Dubai. Whether you're searching for a home or exploring investment options, our advisors are here to guide you.
                </p>
              </div>

              <div className="flex flex-col gap-10">
                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Phone Number</span>
                    <a href="tel:+971502057334" className="text-lg font-bold hover:text-primary transition-colors">+971 50 205 7334</a>
                    <a href="tel:+971585723972" className="text-lg font-bold hover:text-primary transition-colors">+971 58 572 3972</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Email Address</span>
                    <a href="mailto:info@zhmrealestatellc.ae" className="text-lg font-bold hover:text-primary transition-colors lowercase">info@zhmrealestatellc.ae</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Office Address</span>
                    <p className="text-base font-medium text-white/90 leading-snug max-w-[220px]">
                      ZHM Real Estate LLC G010, Ontario Tower Ground Floor, Business Bay Dubai- UAE
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    <MessageSquare size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">WhatsApp</span>
                    <p className="text-base font-medium text-white/90">Chat with our property advisors instantly.</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    <Globe size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Website</span>
                    <a href="https://zhmrealestatellc.ae" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">zhmrealestatellc.ae</a>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM COLUMN */}
            <div className="lg:w-[60%] p-10 md:p-20 flex flex-col font-sans">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-[#1e2350] mb-4 tracking-tight uppercase">Request a Free <br /> <span className="text-primary italic">Property Consultation</span></h2>
                <p className="text-gray-400 text-sm font-medium">Fill out the form below and our team will get back to you as soon as possible.</p>
              </div>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 p-10 rounded-2xl text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <Send size={32} aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#1e2350] mb-3">Consultation Requested!</h4>
                  <p className="text-gray-500 mb-8">Thank you for reaching out. One of our senior advisors will contact you shortly.</p>
                  <Button onClick={() => setStatus('idle')} className="bg-[#1e2350] hover:bg-[#2a3060] text-white rounded-full px-10 py-6 font-bold uppercase text-xs tracking-widest">
                    Request Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10 transition-all">First Name</label>
                      <input 
                        type="text" 
                        required
                        suppressHydrationWarning
                        className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-4 pt-5 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                      <User size={16} className="absolute right-5 top-[22px] text-gray-300" />
                    </div>
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10 transition-all">Last Name</label>
                      <input 
                        type="text" 
                        required
                        suppressHydrationWarning
                        className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-4 pt-5 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                      <User size={16} className="absolute right-5 top-[22px] text-gray-300" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10">Email Address</label>
                      <input 
                        type="email" 
                        required
                        suppressHydrationWarning
                        className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-4 pt-5 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      <Mail size={16} className="absolute right-5 top-[22px] text-gray-300" />
                    </div>
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        suppressHydrationWarning
                        className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-4 pt-5 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                      <Phone size={16} className="absolute right-5 top-[22px] text-gray-300" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10">Inquiry Type</label>
                      <select 
                        suppressHydrationWarning
                        className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-4 pt-5 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      >
                        <option>Buy</option>
                        <option>Sell</option>
                        <option>Invest</option>
                        <option>General Inquiry</option>
                      </select>
                      <HelpCircle size={16} className="absolute right-5 top-[22px] text-gray-300 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10">Property Type</label>
                      <input 
                        type="text" 
                        suppressHydrationWarning
                        className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-4 pt-5 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        placeholder="Villa, Apartment, etc."
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      />
                      <Building size={16} className="absolute right-5 top-[22px] text-gray-300" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] font-black text-[#1e2350] uppercase tracking-widest absolute -top-2 left-4 bg-white px-2 z-10">Message</label>
                    <textarea 
                      rows={5}
                      required
                      suppressHydrationWarning
                      className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-xl px-6 py-5 pt-7 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your property requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <p className="text-[10px] text-gray-400 font-medium italic">
                    By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>.
                  </p>

                  <Button suppressHydrationWarning 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="bg-[#1e2350] hover:bg-[#2a3060] text-white rounded-full py-8 text-sm font-bold uppercase tracking-[3px] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all mt-4 group"
                  >
                    {status === 'loading' ? 'Encrypting...' : 'Send Message'}
                    <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE HOURS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Clock size={14} />
            Operating Times
          </div>
          <h2 className="text-4xl font-bold text-[#1e2350] mb-12 uppercase tracking-tight">Office Hours</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { day: "Monday – Thursday", time: "9:00 AM – 7:00 PM" },
              { day: "Friday", time: "9:00 AM – 12:00 PM & 2:00 PM – 7:00 PM" },
              { day: "Saturday", time: "10:00 AM – 5:00 PM" },
              { day: "Sunday", time: "Closed", highlight: true }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition-all duration-300 ${item.highlight ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-100 hover:shadow-xl hover:border-primary/20'}`}>
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{item.day}</h4>
                <p className={`text-sm font-bold ${item.highlight ? 'text-red-400' : 'text-[#1e2350]'}`}>
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MAP / VISIT US */}
      <section className="py-24 bg-[#1e2350] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-tighter leading-tight">Visit Our Office <br /><span className="text-primary italic">in Dubai</span></h2>
              <p className="text-white/60 text-base leading-relaxed mb-10 font-light max-w-xl italic">
                Visit our office to discuss your real estate goals and explore the best property opportunities in Dubai. Our advisors will guide you through available listings, market insights, and investment options.
              </p>
              
              <div className="flex items-start gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm max-w-md group hover:bg-white/10 transition-all duration-500">
                <MapPin size={32} className="text-primary mt-1 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-3">Principal Address</h4>
                  <p className="text-xl font-bold leading-relaxed tracking-tight">
                    ZHM Real Estate LLC <br /> G010 Ontario Tower <br /> Ground Floor Business Bay <br /> Dubai- UAE
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-white/5 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.17851002444!2d55.2713833!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4334ad467dbd%3A0xed433f1141df9043!2sOntario%20Tower!5e0!3m2!1sen!2sae!4v1712160000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-[#1e2350] opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container mx-auto px-4 max-w-[1300px]">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#1e2350] mb-6 uppercase tracking-tighter">What Our <br /><span className="text-primary italic font-extrabold tracking-widest text-3xl">Clients Say</span></h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto italic font-medium leading-relaxed uppercase tracking-tighter">
              We take pride in delivering professional service and reliable guidance to every client. Here's what some of our satisfied clients say about working with ZHM Real Estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: 1, name: "Ahmed Al-Farsi", role: "Investor", text: "Finding the right investment property in Business Bay was seamless with ZHM. Their advisors are truly experts in the Dubai market." },
              { id: 2, name: "Sarah Johnson", role: "Homeowner", text: "Professionalism and transparency at its best. They helped me find my dream home on the Palm Jumeirah in record time." },
              { id: 3, name: "Marcus Chen", role: "Business Owner", text: "The team at ZHM provided invaluable market insights which helped our group make an informed commercial real estate decision." }
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <User size={24} className="text-[#1e2350] group-hover:text-white" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-[#1e2350] text-sm leading-8 mb-8 italic font-bold">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="text-xs font-black text-[#1e2350] uppercase tracking-widest mb-1">{testimonial.name}</h4>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-tight">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
