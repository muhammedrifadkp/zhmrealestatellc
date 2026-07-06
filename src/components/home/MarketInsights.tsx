"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Percent, Coins, DollarSign } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 72.06,
    suffix: "%",
    label: "Total Sales Growth",
    desc: "Year-on-year growth in total real estate sales across Dubai.",
    color: "#d4af37",
  },
  {
    icon: Percent,
    value: 11.06,
    suffix: "%",
    label: "Mortgage Activity",
    desc: "Rise in mortgage-financed transactions in the Dubai market.",
    color: "#d4af37",
  },
  {
    icon: Coins,
    value: 16.88,
    suffix: "%",
    label: "Investment Gains",
    desc: "Average capital appreciation on prime Dubai real estate.",
    color: "#d4af37",
  },
  {
    icon: DollarSign,
    value: 1.06,
    suffix: "B+",
    label: "Market Transactions",
    desc: "Total value of real estate transactions processed in Dubai.",
    color: "#d4af37",
  },
];

function FloatCounter({
  target,
  suffix,
  isDecimal,
  color,
}: {
  target: number;
  suffix: string;
  isDecimal: boolean;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(parseFloat(current.toFixed(2)));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-serif text-gold-gradient inline-block">
      {count.toFixed(2)}{suffix}
    </div>
  );
}

export function MarketInsights() {
  return (
    <section className="section-py bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-grid opacity-20" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #d4af37, transparent)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-3 inline-flex mx-auto" style={{ color: "#d4af37" }}>
            <span className="w-8 h-px bg-primary" />
            Market Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Dubai Real Estate
            <br />
            <em className="text-gold-gradient font-medium">Market Performance</em>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Backed by data from Dubai&apos;s leading real estate research agencies — here&apos;s what the market looks like.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.05)]"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"
              />

              {/* Icon wrapper with gold gradient styling */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center mx-auto mb-5">
                <stat.icon size={22} className="transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>

              {/* Counter */}
              <div className="mb-3">
                <FloatCounter target={stat.value} suffix={stat.suffix} isDecimal={true} color={stat.color} />
              </div>

              <h3 className="text-white font-bold mb-2 text-sm group-hover:text-primary transition-colors duration-300">{stat.label}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{stat.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-primary via-primary-light to-primary"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
