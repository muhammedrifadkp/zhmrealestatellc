"use client";

import { X, User, Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function LeadModal({ isOpen, onClose, projectName }: LeadModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-xl bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let us know if you&apos;re interested!</h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.currentTarget);
            const firstName = formData.get("firstName");
            const lastName = formData.get("lastName");
            const phone = formData.get("phone");
            const email = formData.get("email");

            const message = `*New Lead for ${projectName}*\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}`;
            const whatsappUrl = `https://wa.me/971585723972?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
            onClose(); 
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">First Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full bg-white rounded-md py-3.5 pl-12 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#ef7c00]/50 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white">Last Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full bg-white rounded-md py-3.5 pl-12 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#ef7c00]/50 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Phone</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-2 border-r border-gray-200">
                  <Image src="https://flagcdn.com/w20/ae.png" alt="UAE Flag" width={20} height={15} className="w-5" />
                  <span className="text-gray-900 text-sm font-medium">+971</span>
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-white rounded-md py-3.5 pl-24 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#ef7c00]/50 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-white">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white rounded-md py-3.5 pl-12 pr-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#ef7c00]/50 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#ef7c00] hover:bg-[#d96a00] text-white font-bold py-4 rounded-md transition-all shadow-lg active:scale-[0.98]"
              >
                Submit
              </button>
            </div>

            <p className="text-[11px] text-gray-300 text-center leading-relaxed mt-4 italic font-medium">
              By clicking Submit, you agree to our <a href="#" className="underline">Terms & Conditions</a> and <a href="#" className="underline">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
