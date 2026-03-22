"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Contact Us Dubai" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 flex flex-col gap-10">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Get In Touch</span>
                <h2 className="text-4xl font-bold text-secondary mb-6 leading-tight">
                  We're Here to Help You
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Whether you are looking to buy, sell, or rent, our team is ready to guide you. Contact us directly or use the form to send us a message.
                </p>
              </div>

              <div className="flex flex-col gap-8 mt-6">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">Office Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      ZHM Real Estate LLC <br />
                      G010 Ontario Tower, Ground Floor <br />
                      Business Bay, Dubai - UAE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">Phone numbers</h4>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <a href="tel:+971502057334" className="hover:text-primary transition-colors">+971 50 205 7334</a>
                      <a href="tel:+971585723972" className="hover:text-primary transition-colors">+971 58 572 3972</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">Email Address</h4>
                    <a href="mailto:info@zhmrealestatellc.ae" className="text-gray-600 hover:text-primary transition-colors">
                      info@zhmrealestatellc.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gray-50 p-10 md:p-14 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-3xl font-bold text-secondary mb-8">Send Us A Message</h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 text-green-700 p-8 rounded-xl border border-green-200 text-center">
        <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
        <p>Thank you for reaching out. We will get back to you shortly.</p>
        <Button onClick={() => setStatus('idle')} className="mt-6 bg-green-600 hover:bg-green-700 text-white">Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full bg-white border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number (Optional)</label>
        <input 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          className="w-full bg-white border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="+971 50 XXXXXXX"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message *</label>
        <textarea 
          id="message" 
          rows={6}
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
          className="w-full bg-white border border-gray-200 px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Tell us how we can help you..."
          required
        ></textarea>
      </div>

      {status === 'error' && <p className="text-red-500 font-medium">Failed to send message. Please try again.</p>}

      <Button type="submit" disabled={status === 'loading'} size="lg" className="w-full bg-primary hover:bg-primary-dark text-white rounded-md py-6 text-lg mt-4 transition-all">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
