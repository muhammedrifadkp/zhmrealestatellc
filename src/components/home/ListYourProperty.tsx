"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle2, Home, DollarSign, Settings } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  propertyLink: string;
  purpose: "Sell" | "Rent" | "Manage";
};

const purposes = [
  { value: "Sell", icon: DollarSign, label: "Sell Property" },
  { value: "Rent", icon: Home, label: "Rent Property" },
  { value: "Manage", icon: Settings, label: "Property Management" },
] as const;

export function ListYourProperty() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState<"Sell" | "Rent" | "Manage">("Sell");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: { purpose: "Sell" },
  });

  const onSubmit = async (data: FormData) => {
    data.purpose = selectedPurpose;
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-py bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Descriptive Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-3 block" style={{ color: "#d4af37" }}>
              <span className="w-8 h-px bg-primary" />
              List Your Property
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              List Your Property
              <br />
              <em className="text-gold-gradient font-medium">with ZHM</em>
            </h2>
            <p className="text-gray-400 mb-8 text-base leading-relaxed">
              Whether you&apos;re looking to sell, rent, or have your property professionally managed — 
              our expert team is ready to maximize your property&apos;s value and exposure in the Dubai market.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Free property valuation by expert agents",
                "Maximum exposure on all major platforms",
                "End-to-end support from listing to closing",
                "Transparent process with real-time updates",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-gray-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-400 text-sm">
                  Your listing request has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} id="list-property-form" className="flex flex-col gap-4">
                <h3 className="text-white text-xl font-bold mb-2">List Your Property</h3>

                {/* Purpose Toggle */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Purpose
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {purposes.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setSelectedPurpose(p.value)}
                        className={`flex flex-col items-center gap-1.5 py-3 rounded-lg border text-xs font-bold transition-all duration-200 ${
                          selectedPurpose === p.value
                            ? "border-primary bg-primary/20 text-primary"
                            : "border-white/10 text-gray-400 hover:border-primary/50 hover:text-gray-300"
                        }`}
                      >
                        <p.icon size={16} />
                        {p.label.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      {...register("firstName", { required: "Required" })}
                      suppressHydrationWarning
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.firstName && <p className="text-red-400 text-[10px] mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register("lastName", { required: "Required" })}
                      suppressHydrationWarning
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.lastName && <p className="text-red-400 text-[10px] mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: { value: /^[+\d\s\-()]{7,}$/, message: "Invalid phone number" },
                    })}
                    suppressHydrationWarning
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone.message}</p>}
                </div>

                {/* Property Link */}
                <div>
                  <input
                    {...register("propertyLink")}
                    suppressHydrationWarning
                    placeholder="Property Link (optional)"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={isSubmitting}
                  className="btn-gold w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm mt-2 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Listing Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
