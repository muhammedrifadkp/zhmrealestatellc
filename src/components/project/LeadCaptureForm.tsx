"use client";

export default function LeadCaptureForm() {
  return (
    <section id="contact" className="py-20 bg-[#12163b] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold mb-4">Let us know if you&apos;re interested!</h2>
          <p className="text-gray-300">Register your interest and our experts will help you buy the best.</p>
        </div>

        <form className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">First Name *</label>
              <input 
                type="text" 
                required 
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Last Name *</label>
              <input 
                type="text" 
                required 
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Email *</label>
              <input 
                type="email" 
                required 
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Phone Number *</label>
              <input 
                type="tel" 
                required 
                className="bg-transparent border-b border-white/30 px-0 py-2 outline-none focus:border-primary transition-colors text-white" 
              />
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-8 max-w-xl">
            By clicking Submit, you agree to our <a href="#" className="underline hover:text-primary">Terms & Conditions</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>
          </p>

          <button 
            type="submit" 
            className="w-full md:w-auto px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary/30"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
