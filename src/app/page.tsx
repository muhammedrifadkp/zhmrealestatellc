import { HeroSection } from "@/components/home/HeroSection";
import { HomeSearchFilter } from "@/components/home/HomeSearchFilter";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { MarketInsights } from "@/components/home/MarketInsights";
import { PartnersAwards } from "@/components/home/PartnersAwards";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero - Full screen with bg slider, headline, CTAs, animated counters */}
      {/* 1. Hero - Full screen with bg slider, headline, CTAs, animated counters */}
      <HeroSection />

      {/* Search Filter */}
      <HomeSearchFilter />

      {/* 5. About Us - Who We Are */}
      <AboutSection />

      {/* 6. Services - Core Services */}
      <ServicesSection />

      {/* 7. Why Choose Us - 6 Pillars */}
      <WhyChooseUs />

      {/* 8. Market Insights - Animated Stats */}
      <MarketInsights />

      {/* 9. Partners & Awards */}
      <PartnersAwards />

      {/* 10. Testimonials - Client Reviews Slider */}
      <TestimonialsSection />

      {/* 11. Blog Section - Latest Insights */}
      <BlogSection />

      {/* 12. FAQ Section - Accordion */}
      <FAQSection />

      {/* 13. Contact CTA + Form */}
      <ContactSection />
    </div>
  );
}
