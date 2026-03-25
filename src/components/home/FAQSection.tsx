"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does ZHM Real Estate offer?",
    a: "ZHM Real Estate offers a comprehensive range of services including buying, selling, leasing, and property management for residential and commercial properties in Dubai and the wider UAE. We also assist with international property investments in countries like Georgia and Latvia.",
  },
  {
    q: "What types of properties do you deal with?",
    a: "We specialize in a wide range of property types including luxury villas, apartments, penthouses, townhouses, studios, commercial offices, and land. Our portfolio covers all key communities across Dubai including Palm Jumeirah, Downtown, Business Bay, Dubai Hills Estate, and more.",
  },
  {
    q: "Do you assist international investors looking to buy in Dubai?",
    a: "Absolutely! ZHM Real Estate has extensive experience working with international investors. We guide you through every step from property selection, legal processes, financing options, and final handover — making your Dubai investment seamless regardless of where you're based.",
  },
  {
    q: "How does the property management service work?",
    a: "Our property management service covers everything from tenant sourcing, rent collection, maintenance coordination, and regulatory compliance to ensuring your investment generates maximum returns while you focus on other priorities.",
  },
  {
    q: "Does ZHM Real Estate offer properties outside of the UAE?",
    a: "Yes! We offer carefully selected international investment properties in Georgia and Latvia, providing our clients with diversification opportunities and attractive yields in emerging European markets.",
  },
  {
    q: "How do I list my property with ZHM Real Estate?",
    a: "Simply fill out our 'List Your Property' form above with your contact details and property information. Our team will reach out within 24 hours to conduct a complimentary valuation and begin the listing process.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-py bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="heading-luxury text-3xl md:text-5xl mb-6">
              Frequently Asked
              <br />
              <em className="font-medium">Questions</em>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Everything you need to know about buying, selling, leasing, and investing 
              in Dubai real estate with ZHM.
            </p>

            {/* Contact prompt */}
            <div className="bg-secondary rounded-2xl p-6">
              <p className="text-white font-bold mb-2">Still have questions?</p>
              <p className="text-gray-400 text-sm mb-4">Our team is ready to help you with any property-related queries.</p>
              <a
                href="tel:+971502057334"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                >
                  <span className={`font-semibold text-sm md:text-base transition-colors duration-200 ${
                    open === i ? "text-primary" : "text-secondary group-hover:text-primary"
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    open === i ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-primary/10"
                  }`}>
                    <ChevronDown size={15} />
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
