"use client";

import { ProjectProperty } from "@/data/projects";

export default function LeadCaptureForm({ project }: { project?: ProjectProperty }) {
  const projectName = project?.name || "this project";

  return (
    <section id="contact" className="py-20 bg-[#12163b] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left pr-0 lg:pr-10">
            <h2 className="text-4xl font-serif font-bold mb-6">Interested in {projectName}?</h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Get in touch with ZHM Real Estate to receive full details, pricing, and availability for {projectName}. Our team will assist you in choosing the right property based on your lifestyle and investment goals.
            </p>
            <div>
              <h4 className="text-xl font-bold mb-2">Location</h4>
              <p className="text-gray-400">
                ZHM Real Estate LLC<br />
                Ontario Tower G010, Ground Floor<br />
                Business Bay Dubai-UAE
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form 
            className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl" 
          suppressHydrationWarning
          onSubmit={(e) => { 
            e.preventDefault(); 
            const formData = new FormData(e.currentTarget);
            const firstName = formData.get("firstName");
            const lastName = formData.get("lastName");
            const email = formData.get("email");
            const phone = formData.get("phone");

            const message = `*New Lead for ${projectName}*\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`;
            const whatsappUrl = `https://wa.me/971585723972?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">First Name *</label>
              <input 
                type="text" 
                name="firstName"
                required 
                suppressHydrationWarning
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Last Name *</label>
              <input 
                type="text" 
                name="lastName"
                required 
                suppressHydrationWarning
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Email *</label>
              <input 
                type="email" 
                name="email"
                required 
                suppressHydrationWarning
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                required 
                suppressHydrationWarning
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-8 max-w-xl">
            By clicking Submit, you agree to our <a href="#" className="underline hover:text-primary">Terms & Conditions</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>
          </p>

          <button 
            type="submit" 
            suppressHydrationWarning
            className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary/30"
          >
            Submit Request
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
