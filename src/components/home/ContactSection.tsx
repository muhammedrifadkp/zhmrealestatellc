"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="section-py bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-secondary rounded-3xl overflow-hidden mb-16 p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-pattern-grid opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

          <div className="relative z-10">
            <span className="section-label mb-4 inline-flex mx-auto" style={{ color: "#d4af37" }}>
              <span className="w-8 h-px bg-primary" />
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Ready to Find Your
              <br />
              <em className="text-gold-gradient font-medium">Dream Home?</em>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Get in touch with our expert agents today for personalized assistance 
              with buying, selling, or leasing in Dubai.
            </p>
            <a
              href="tel:+971502057334"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
            >
              <Phone size={16} />
              +971 50 205 7334
            </a>
          </div>
        </motion.div>

        {/* Contact Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <span className="section-label mb-3 block">Contact Info</span>
              <h3 className="heading-luxury text-2xl md:text-3xl mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you have a question about a property, need expert advice, 
                or are ready to start your Dubai real estate journey — we&apos;re here for you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">Office Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    ZHM Real Estate LLC<br />
                    G010 Ontario Tower, Ground Floor<br />
                    Business Bay, Dubai – UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">Phone Numbers</p>
                  <a href="tel:+971502057334" className="block text-gray-500 hover:text-primary transition-colors text-sm">
                    +971 50 205 7334
                  </a>
                  <a href="tel:+971585723972" className="block text-gray-500 hover:text-primary transition-colors text-sm">
                    +971 58 572 3972
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">Email Address</p>
                  <a href="mailto:info@zhmrealestatellc.ae"
                    className="text-gray-500 hover:text-primary transition-colors text-sm">
                    info@zhmrealestatellc.ae
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-[var(--shadow-card)] border border-gray-100 p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h3 className="text-secondary text-xl font-bold mb-2">Message Received!</h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <h3 className="text-secondary text-xl font-bold mb-1">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("name", { required: "Name is required" })}
                      suppressHydrationWarning
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                    {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register("phone", { required: "Phone is required" })}
                      suppressHydrationWarning
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                    {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                    })}
                    type="email"
                    suppressHydrationWarning
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                  {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <select
                    {...register("interest")}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white appearance-none"
                  >
                    <option value="">I am interested in...</option>
                    <option value="buy">Buying a Property</option>
                    <option value="sell">Selling a Property</option>
                    <option value="rent">Renting a Property</option>
                    <option value="management">Property Management</option>
                    <option value="invest">Investment Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    suppressHydrationWarning
                    placeholder="Tell us about your property requirements..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-secondary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <ArrowRight size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
