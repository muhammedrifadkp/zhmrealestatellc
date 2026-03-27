import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold tracking-tighter text-white">
                ZHM <span className="text-primary">Real Estate</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              ZHM Real Estate LLC was founded by Mr. Shahbaz solely. An expert & specialist in Real Estate Fraternity. His in-depth knowledge & visionary insights have led ZHM Real Estate to successfully establish itself as one of the most sought real estate agency in Dubai (UAE).
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2 border-b-2 border-primary inline-block self-start pb-1">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2 border-b-2 border-primary inline-block self-start pb-1">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-400 leading-relaxed">ZHM Real Estate LLC<br/>G010 Ontario Tower<br/>Ground Floor Business Bay<br/>Dubai - UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <div className="flex flex-col text-gray-400">
                  <a href="tel:+971502057334" className="hover:text-primary transition-colors">+971 50 205 7334</a>
                  <a href="tel:+971585723972" className="hover:text-primary transition-colors">+971 58 572 3972</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:info@zhmrealestatellc.ae" className="text-gray-400 hover:text-primary transition-colors">info@zhmrealestatellc.ae</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2 border-b-2 border-primary inline-block self-start pb-1">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter for the latest updates and real estate offers.</p>
            <form className="flex flex-col gap-3" suppressHydrationWarning>
              <input 
                type="email" 
                suppressHydrationWarning
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-md text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button 
                type="submit" 
                suppressHydrationWarning
                className="bg-primary text-white font-semibold py-3 px-4 rounded-md hover:bg-primary-dark transition-colors uppercase tracking-wider text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>2026© All right reserved by ZHM Real Estate LLC Dubai</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
