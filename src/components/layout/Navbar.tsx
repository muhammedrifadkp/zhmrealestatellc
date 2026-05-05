"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Phone, Mail, ChevronDown, Search, Heart, 
  Facebook, Twitter, Instagram, Linkedin, Youtube, Ghost 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    name: "FEATURED PROJECTS",
    href: "#",
    megaMenu: {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      imageTitle: "Featured Projects",
      columns: [
        {
          title: "ABU DHABI",
          links: [
            { name: "Sama Yas", href: "/featured-projects/abu-dhabi/sama-yas" },
            { name: "Yas Riva", href: "/featured-projects/abu-dhabi/yas-riva" },
            { name: "Manarat Living - Saadiyat", href: "/featured-projects/abu-dhabi/manarat-living" },
            { name: "The Arthouse", href: "/featured-projects/abu-dhabi/the-arthouse" },
            { name: "Muheira", href: "/featured-projects/abu-dhabi/muheira" },
            { name: "View All", href: "/featured-projects/abu-dhabi" }
          ]
        },
        {
          title: "DUBAI",
          links: [
            { name: "Elegance Tower", href: "/featured-projects/dubai/elegance-tower" },
            { name: "Address Residences The Bay", href: "/featured-projects/dubai/address-residences-the-bay" },
            { name: "Rawda Apartments", href: "/featured-projects/dubai/rawda-apartments" },
            { name: "DE Collective", href: "/featured-projects/dubai/de-collective" },
            { name: "Expo Golf Villas", href: "/featured-projects/dubai/expo-golf-villas" },
            { name: "View All", href: "/featured-projects/dubai" }
          ]
        },
        {
          title: "SHARJAH",
          links: [
            { name: "Sharjah Waterfront City", href: "/featured-projects/sharjah/sharjah-waterfront-city" },
            { name: "Deem at Hayyan", href: "/featured-projects/sharjah/deem-at-hayyan" },
            { name: "Olfah", href: "/featured-projects/sharjah/olfah" },
            { name: "Olfah 3", href: "/featured-projects/sharjah/olfah-3" },
            { name: "Hayyan", href: "/featured-projects/sharjah/hayyan" },
            { name: "Hamsa 2", href: "/featured-projects/sharjah/hamsa-2" },
            { name: "View All", href: "/featured-projects/sharjah" }
          ]
        },
        {
          title: "RAS AL KHAIMA",
          links: [
            { name: "Solera", href: "/featured-projects/rak/solera" },
            { name: "Nikki Beach Residences", href: "/featured-projects/rak/nikki-beach-residences" },
            { name: "View All", href: "/featured-projects/rak" }
          ]
        }
      ]
    }
  },
  {
    name: "PROJECTS",
    href: "#",
    megaMenu: {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      imageTitle: "Projects",
      columns: [
        {
          title: "ABU DHABI",
          links: [
            { name: "Al Reem Island", href: "/projects/al-reem-island" },
            { name: "Saadiyat Island", href: "/projects/saadiyat-island" },
            { name: "Yas Island", href: "/projects/yas-island" },
            { name: "Al Raha Beach", href: "/projects/al-raha-beach" },
            { name: "Al Raha Gardens", href: "/projects/al-raha-gardens" },
            { name: "View All", href: "/projects/abu-dhabi" }
          ]
        },
        {
          title: "DUBAI",
          links: [
            { name: "Palm Jumeirah", href: "/projects/palm-jumeirah" },
            { name: "Downtown Dubai", href: "/projects/downtown-dubai" },
            { name: "Dubai Creek", href: "/projects/dubai-creek" },
            { name: "Town Square Dubai", href: "/projects/town-square-dubai" },
            { name: "Dubai Hills Estate", href: "/projects/dubai-hills-estate" },
            { name: "View All", href: "/projects/dubai" }
          ]
        },
        {
          title: "DEVELOPERS",
          links: [
            { name: "Aldar", href: "/developers" },
            { name: "Emaar", href: "/developers" },
            { name: "Imkan", href: "/developers" },
            { name: "Meraas", href: "/developers" },
            { name: "Dubai Properties", href: "/developers" },
            { name: "View All", href: "/developers" }
          ]
        }
      ]
    }
  },
  {
    name: "SERVICES",
    href: "/services"
  },
  {
    name: "COMPANY",
    href: "/about",
    megaMenu: {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      imageTitle: "Company",
      columns: [
        {
          title: "ABOUT PSI",
          links: [
            { name: "Our Story", href: "/about" },
            { name: "Careers", href: "/contact" },
            { name: "Awards", href: "/about" },
            { name: "Blog", href: "/about" }
          ]
        },
        {
          title: "MEDIA",
          links: [
            { name: "Newsletters", href: "/contact" },
            { name: "Contact Us", href: "/contact" },
            { name: "Articles", href: "/about" }
          ]
        }
      ]
    }
  }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isSearchPage = pathname?.startsWith('/search');
  const isTermsOrPrivacy = pathname === '/terms' || pathname === '/privacy';
  const isProjectsListing = pathname?.startsWith('/projects/') || pathname?.startsWith('/featured-projects') || pathname === '/developers';
  const isNavbarActive = (mounted && isScrolled) || isHovered || isMobileMenuOpen || isSearchPage || isTermsOrPrivacy || isProjectsListing || activeMegaMenu !== null;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and mega menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setIsHovered(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col font-sans">
      {/* Top Bar (Dark Navy) */}
      <div 
        className={`bg-[#12163b] text-white/90 text-[11px] font-medium px-6 hidden lg:flex justify-between items-center tracking-wide overflow-hidden transition-all duration-300 ${
          isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-[36px] py-1.5 opacity-100"
        }`}
      >
        <div className="flex items-center gap-4">
          <button suppressHydrationWarning className="flex items-center gap-1 hover:text-white transition-colors">
            AED <ChevronDown size={12} />
          </button>
          <div className="w-px h-3 bg-white/20"></div>
          <button suppressHydrationWarning className="flex items-center gap-1 hover:text-white transition-colors">
            GB EN <ChevronDown size={12} />
          </button>
          <button suppressHydrationWarning className="flex items-center gap-1 hover:text-white transition-colors ml-2">
            BRANCHES <ChevronDown size={12} />
          </button>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={13} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={13} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={13} /></a>
            {/* Using Ghost for snapchat icon placeholder */}
            <a href="#" className="hover:text-white transition-colors"><Ghost size={13} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={13} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={13} /></a>
          </div>
          <button suppressHydrationWarning className="flex items-center gap-1 font-semibold hover:text-white transition-colors">
            DUBAI <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveMegaMenu(null);
        }}
        className={`w-full transition-colors duration-300 ${
          isNavbarActive ? "bg-white shadow-md py-2.5" : "bg-transparent py-4"
        } px-6 flex justify-between items-center relative z-40`}
      >
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 z-50">
          <Image 
            src="/nava_logo.png"
            alt="ZHM Real Estate Logo"
            width={160}
            height={80}
            className="h-[75px] w-auto object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav Mega Menu */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="h-full relative group" 
              onMouseEnter={() => setActiveMegaMenu(item.megaMenu ? item.name : null)}
              suppressHydrationWarning
            >
              <Link
                href={item.href}
                onClick={handleLinkClick}
                suppressHydrationWarning
                className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-widest py-6 border-b-2 transition-all duration-300 ${
                  activeMegaMenu === item.name ? "border-primary" : "border-transparent group-hover:border-primary"
                } ${
                  isNavbarActive ? "text-[#2a304e]" : "text-white"
                }`}
              >
                {item.name}
                {item.megaMenu && <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${activeMegaMenu === item.name ? "rotate-180" : ""}`} />}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.megaMenu && (
                <div className={`absolute top-[100%] left-1/2 -translate-x-1/2 w-[900px] xl:w-[1100px] bg-white shadow-2xl rounded-b-xl border-t border-gray-100 transition-all duration-300 -mt-2 transform flex overflow-hidden ${
                  activeMegaMenu === item.name ? "opacity-100 visible mt-0" : "opacity-0 invisible"
                }`}>
                  
                  {/* Left Featured Image side */}
                  <div className="w-[30%] relative bg-gray-900 overflow-hidden">
                    <Image 
                      src={item.megaMenu.image} 
                      alt={item.megaMenu.imageTitle} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      priority={true}
                      className={`object-cover opacity-80 transition-transform duration-700 ${activeMegaMenu === item.name ? "scale-105" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-[10px] font-bold tracking-[0.2em] mb-1 opacity-70">FEATURED</p>
                      <h3 className="text-2xl font-serif font-bold tracking-tight">{item.megaMenu.imageTitle}</h3>
                    </div>
                  </div>

                  {/* Right Links side */}
                  <div className="w-[70%] p-8 flex gap-12 bg-white">
                    {item.megaMenu.columns.map((col, idx) => {
                      const isFeaturedSection = item.name === "FEATURED PROJECTS";
                      const getLink = (title: string) => {
                        const base = isFeaturedSection ? "/featured-projects" : "/projects";
                        if (title === "ABU DHABI") return `${base}/abu-dhabi`;
                        if (title === "DUBAI") return `${base}/dubai`;
                        if (title === "SHARJAH") return `${base}/sharjah`;
                        if (title === "RAS AL KHAIMA") return `${base}/rak`;
                        if (title === "DEVELOPERS") return "/developers";
                        return "#";
                      };

                      return (
                        <div key={idx} className="flex-1">
                          {["ABU DHABI", "DUBAI", "SHARJAH", "RAS AL KHAIMA", "DEVELOPERS"].includes(col.title) ? (
                            <Link href={getLink(col.title)} onClick={handleLinkClick} className="block group/title">
                              <h4 className="text-[13px] font-bold text-[#1e2350] mb-6 tracking-wider uppercase border-b border-gray-100 pb-2 group-hover/title:text-primary group-hover/title:border-primary transition-all">
                                {col.title}
                              </h4>
                            </Link>
                          ) : (
                            <h4 className="text-[13px] font-bold text-[#1e2350] mb-6 tracking-wider uppercase border-b border-gray-100 pb-2">{col.title}</h4>
                          )}
                          <ul className="flex flex-col gap-3.5">
                            {col.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <Link 
                                  href={link.href}
                                  onClick={handleLinkClick}
                                  className="text-[13px] text-gray-500 hover:text-primary transition-colors flex items-center group/link"
                                >
                                  <span className="w-0 h-px bg-primary mr-0 transition-all duration-300 group-hover/link:w-2 group-hover/link:mr-2"></span>
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Icons (Search, Heart, Login) */}
        <div className="hidden lg:flex items-center gap-6 z-50">
          <button suppressHydrationWarning className={`hover:text-primary transition-colors ${isNavbarActive ? "text-[#2a304e]" : "text-white"}`}>
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button suppressHydrationWarning className={`hover:text-primary transition-colors ${isNavbarActive ? "text-[#2a304e]" : "text-white"}`}>
            <Heart size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          suppressHydrationWarning
          className={`lg:hidden z-50 transition-colors ${isNavbarActive ? "text-[#2a304e]" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-[#fafafa] flex flex-col overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/nava_logo.png"
                  alt="ZHM Real Estate Logo"
                  width={160}
                  height={80}
                  className="h-[60px] w-auto object-contain"
                />
              </Link>
              <button
                suppressHydrationWarning
                className="text-[#1e2350] p-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Nav Links Accordion */}
            <nav className="flex flex-col bg-white">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col border-b border-gray-100 px-6">
                  {item.megaMenu ? (
                    <button
                      onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                      className="text-[14px] font-bold tracking-widest text-[#1e2350] uppercase py-5 flex justify-between items-center w-full focus:outline-none"
                    >
                      {expandedMobileItem === item.name ? (
                        // Title Case when expanded
                        <span className="capitalize text-base">
                          {item.name.toLowerCase()}
                        </span>
                      ) : (
                        item.name
                      )}
                      <ChevronDown 
                        size={16} 
                        className={`text-gray-400 transition-transform duration-300 ${expandedMobileItem === item.name ? "rotate-180" : ""}`} 
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[14px] font-bold tracking-widest text-[#1e2350] uppercase py-5 flex justify-between items-center w-full"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Expanded Sub-menu */}
                  <AnimatePresence>
                    {item.megaMenu && expandedMobileItem === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-6 pb-6 px-4"
                      >
                        {item.megaMenu.columns.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-4 mt-2">
                            {["ABU DHABI", "DUBAI", "SHARJAH", "RAS AL KHAIMA", "DEVELOPERS"].includes(col.title) ? (
                              <Link 
                                href={
                                  item.name === "FEATURED PROJECTS" 
                                    ? `/featured-projects/${col.title === "RAS AL KHAIMA" ? "rak" : col.title.toLowerCase().replace(" ", "-")}`
                                    : col.title === "DEVELOPERS" ? "/developers" : `/projects/${col.title === "RAS AL KHAIMA" ? "rak" : col.title.toLowerCase().replace(" ", "-")}`
                                } 
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <h4 className="text-[11px] font-bold text-primary tracking-widest uppercase">{col.title}</h4>
                              </Link>
                            ) : (
                              <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">{col.title}</h4>
                            )}
                            <ul className="flex flex-col gap-4">
                              {col.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <Link 
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-[15px] font-bold text-[#2a304e] hover:text-primary transition-colors"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
            
            {/* Mobile Footer Info */}
            <div className="mt-8 flex flex-col gap-6 px-6 pb-12">
              <div className="flex flex-col gap-3">
                <a href="tel:+971502057334" className="flex items-center gap-4 text-[15px] font-bold text-[#1e2350]">
                  <Phone className="text-primary" size={20} strokeWidth={2} />
                  +971 50 205 7334
                </a>
                <a href="mailto:info@zhmrealestatellc.ae" className="flex items-center gap-4 text-[15px] font-bold text-[#1e2350]">
                  <Mail className="text-primary" size={20} strokeWidth={2} />
                  info@zhmrealestatellc.ae
                </a>
              </div>
              
              <div className="flex gap-4 mt-2 text-gray-400">
                <a href="#" className="hover:text-primary transition-colors"><Facebook size={22} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Twitter size={22} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Instagram size={22} strokeWidth={1.5} /></a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
