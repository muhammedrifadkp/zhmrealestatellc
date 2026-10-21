"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, Trophy, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const DIR = "/images/clients_meeting-and-company-images";

type Shot = {
  src: string;
  caption: string;
  // object-position used where the photo is cropped into a fixed frame
  position?: string;
};

type DeveloperMoment = Shot & {
  tag: string;
  title: string;
  award?: boolean;
};

type JourneyStep = {
  label: string;
  title: string;
  text: string;
  shots: Shot[];
};

// ── Chapter 01 · Spotlight ──
const spotlightShots: Shot[] = [
  {
    src: `${DIR}/zhm-imran-nazir-meeting-2.jpeg`,
    caption: "ZHM leadership with former Pakistan international cricketer Imran Nazir in Dubai.",
    position: "center 30%",
  },
  {
    src: `${DIR}/zhm-imran-nazir-meeting-1.jpeg`,
    caption: "A memorable meeting with Imran Nazir — the master-stroke opener of Pakistan cricket.",
    position: "center 30%",
  },
];

// ── Chapter 02 · Developer trust ──
const developerMoments: DeveloperMoment[] = [
  {
    src: `${DIR}/zhm-azizi-ramadan-elite-broker-award.jpeg`,
    tag: "Azizi Developments",
    title: "Ramadan Elite Broker Award",
    caption: "Honoured by Azizi Developments with the Ramadan Elite Broker Award at their Suhoor event.",
    award: true,
  },
  {
    src: `${DIR}/zhm-danube-diamondz-sales-centre.jpeg`,
    tag: "Danube Properties",
    title: "Presenting Diamondz",
    caption: "Walking through the Diamondz by Danube tower model at Danube's sales centre.",
    position: "center 50%",
  },
  {
    src: `${DIR}/zhm-danube-properties-headquarters.jpeg`,
    tag: "Danube Properties",
    title: "At Danube Headquarters",
    caption: "Building direct, face-to-face relationships with the Danube Properties team.",
    position: "center 62%",
  },
  {
    src: `${DIR}/zhm-parkwood-dubai-hills-estate.jpeg`,
    tag: "Dubai Hills Estate",
    title: "Parkwood Preview",
    caption: "On the ground at Parkwood, Dubai Hills Estate — Interiors by Vida.",
    position: "62% center",
  },
];

// ── Chapter 03 · A client journey with Emaar ──
const journeySteps: JourneyStep[] = [
  {
    label: "Welcome",
    title: "Received in Person",
    text: "Every journey begins with a handshake, not a brochure. We meet our client at Emaar's sales gallery and set the agenda around their goals.",
    shots: [
      { src: `${DIR}/zhm-emaar-sales-gallery-client-arrival.jpeg`, caption: "Arrival at the Emaar sales gallery." },
      { src: `${DIR}/zhm-emaar-sales-gallery-walkthrough.jpeg`, caption: "Ready to begin the walkthrough." },
    ],
  },
  {
    label: "Master Plan",
    title: "The Big Picture",
    text: "Before talking units, we study the master plans together — the waterfront, connectivity, and how each district is set to grow.",
    shots: [
      { src: `${DIR}/zhm-emaar-waterfront-master-plan.jpeg`, caption: "Studying a waterfront master plan at scale." },
      { src: `${DIR}/zhm-emaar-district-master-plan-model.jpeg`, caption: "From skyline to shoreline — the full district in one view." },
      { src: `${DIR}/zhm-emaar-villa-community-master-plan.jpeg`, caption: "Comparing villa communities on the master plan." },
      { src: `${DIR}/zhm-emaar-residential-cluster-model.jpeg`, caption: "Reviewing residential clusters and road access." },
    ],
  },
  {
    label: "The Home",
    title: "Inside the Home",
    text: "Level by level on the scale model — layouts, terraces, pool decks and the orientation that suits the way our client lives.",
    shots: [
      { src: `${DIR}/zhm-emaar-villa-scale-model.jpeg`, caption: "Walking through a villa model, level by level." },
    ],
  },
  {
    label: "Finishes",
    title: "Finishes & Materials",
    text: "Hands-on with the actual finish palettes, so what our client receives at handover is exactly what they expected.",
    shots: [
      { src: `${DIR}/zhm-emaar-finishes-material-samples.jpeg`, caption: "Reviewing finish and material samples." },
    ],
  },
  {
    label: "Lifestyle",
    title: "Community & Lifestyle",
    text: "Parks, play areas and 50+ amenities — we look at the life around the home, not just the four walls.",
    shots: [
      { src: `${DIR}/zhm-emaar-community-amenities.jpeg`, caption: "Exploring the community's 50+ amenities." },
      { src: `${DIR}/zhm-emaar-community-lifestyle.jpeg`, caption: "Talking family life, parks and open spaces." },
      { src: `${DIR}/zhm-emaar-community-model-consultation.jpeg`, caption: "Answering every question at the community model." },
    ],
  },
  {
    label: "Shortlist",
    title: "The Valley Shortlist",
    text: "Narrowing the options at The Valley by Emaar, with honest advice on plot position, pricing and long-term value.",
    shots: [
      { src: `${DIR}/zhm-the-valley-emaar-shortlist.jpeg`, caption: "Shortlisting at The Valley by Emaar." },
      { src: `${DIR}/zhm-the-valley-emaar-plot-review.jpeg`, caption: "Weighing plot positions before the decision." },
    ],
  },
];

const journeyShots = journeySteps.flatMap((step, stepIndex) =>
  step.shots.map((shot) => ({ ...shot, stepIndex }))
);

// Lightbox order follows the story: spotlight → developers → journey
const DEV_OFFSET = spotlightShots.length;
const JOURNEY_OFFSET = DEV_OFFSET + developerMoments.length;

const slides = [
  ...spotlightShots.map((s) => ({ src: s.src, title: "Spotlight · Imran Nazir", description: s.caption })),
  ...developerMoments.map((m) => ({ src: m.src, title: `${m.tag} · ${m.title}`, description: m.caption })),
  ...journeyShots.map((s) => ({
    src: s.src,
    title: `Client Journey · Step ${String(s.stepIndex + 1).padStart(2, "0")} — ${journeySteps[s.stepIndex].title}`,
    description: s.caption,
  })),
].map((slide, i, all) => ({ ...slide, title: `${i + 1} / ${all.length}  ·  ${slide.title}` }));

const chapters = [
  { id: "zhm-spotlight", number: "01", label: "Spotlight", detail: "Meeting Imran Nazir" },
  { id: "zhm-developers", number: "02", label: "Developer Trust", detail: "Emaar · Danube · Azizi" },
  { id: "zhm-journey", number: "03", label: "Client Journey", detail: "Six steps, one decision" },
];

const WHATSAPP_URL = `https://wa.me/971585723972?text=${encodeURIComponent(
  "Hello, I would like to book a guided site visit with ZHM Real Estate."
)}`;

const outlineNumber: CSSProperties = {
  fontFamily: '"Cormorant Garamond", serif',
  WebkitTextStroke: "1px rgba(212, 175, 55, 0.7)",
  color: "transparent",
};

function ChapterHeading({
  number,
  eyebrow,
  title,
  accent,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-5xl md:text-6xl font-bold leading-none" style={outlineNumber}>
          {number}
        </span>
        <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-primary">
          {eyebrow}
        </span>
      </div>
      <h3
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
        style={{ fontFamily: '"Cormorant Garamond", serif' }}
      >
        {title} <em className="text-gold-gradient italic font-normal">{accent}</em>
      </h3>
      <div className="text-gray-400 text-sm md:text-base font-light leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function ChapterDivider() {
  return <div className="my-16 md:my-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />;
}

export default function CompanyGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeShot, setActiveShot] = useState(0);
  const draggedRef = useRef(false);
  const chipRowRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const current = journeyShots[activeShot];
  const activeStep = current.stepIndex;
  const step = journeySteps[activeStep];
  const stepStart = journeyShots.findIndex((s) => s.stepIndex === activeStep);

  const goToStep = (index: number) => setActiveShot(journeyShots.findIndex((s) => s.stepIndex === index));
  const nextShot = () => setActiveShot((i) => (i + 1) % journeyShots.length);
  const prevShot = () => setActiveShot((i) => (i - 1 + journeyShots.length) % journeyShots.length);

  // Keep the active step chip in view on the mobile chip strip
  useEffect(() => {
    const row = chipRowRef.current;
    const chip = chipRefs.current[activeStep];
    if (!row || !chip) return;
    row.scrollTo({ left: chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [activeStep]);

  return (
    <section className="py-16 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] -left-[10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] -right-[10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* ===== Header ===== */}
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label mb-3 inline-block" style={{ color: "#d4af37" }}>
            ZHM IN ACTION
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Credibility through <em className="text-gold-gradient italic">Real Actions</em>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            No stock photos — every frame here is a real moment from our work. Follow the story of the
            relationships we build, the developers who recognise us, and how we personally guide every
            client from master plan to final decision.
          </p>
        </div>

        {/* ===== Chapter index ===== */}
        <nav aria-label="Story chapters" className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto mb-16 md:mb-24">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group rounded-xl border border-white/10 bg-white/[0.03] hover:border-primary/50 hover:bg-primary/[0.06] transition-colors duration-300 px-3 py-3 md:px-5 md:py-4 text-center md:text-left"
            >
              <span className="block text-primary text-xs md:text-sm font-bold tracking-[0.2em]">{c.number}</span>
              <span className="block text-white text-xs md:text-base font-semibold mt-1 leading-tight">{c.label}</span>
              <span className="hidden md:block text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors">
                {c.detail}
              </span>
            </a>
          ))}
        </nav>

        {/* ===== Chapter 01 · Spotlight ===== */}
        <div id="zhm-spotlight" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative mb-6 md:mb-8"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label="View photo: ZHM leadership with Imran Nazir"
              className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
            >
              <Image
                src={spotlightShots[0].src}
                alt="ZHM Real Estate leadership with former Pakistan cricketer Imran Nazir in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: spotlightShots[0].position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 md:top-4 md:left-4 inline-flex items-center gap-1.5 rounded-full bg-primary text-secondary text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 shadow-lg">
                <Sparkles size={13} /> October 2026
              </span>
              <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 inline-flex items-center gap-2 text-white/90 text-xs md:text-sm">
                <Expand size={14} className="text-primary" /> View photos
              </span>
            </button>

            <button
              type="button"
              onClick={() => setLightboxIndex(1)}
              aria-label="View second photo with Imran Nazir"
              className="group absolute -bottom-6 right-3 md:-bottom-8 md:-right-4 w-[38%] md:w-[34%] aspect-video rounded-xl overflow-hidden border-4 border-secondary shadow-2xl shadow-black/50"
            >
              <Image
                src={spotlightShots[1].src}
                alt="Second photo from the meeting with Imran Nazir"
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: spotlightShots[1].position }}
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <ChapterHeading number="01" eyebrow="Spotlight" title="Beyond the" accent="Boundary">
              <p>
                In October 2026, ZHM&apos;s leadership met <span className="text-white font-medium">Imran Nazir</span>,
                the former Pakistan international cricketer celebrated for his fearless, master-stroke batting at the
                top of the order.
              </p>
              <p>
                Moments like this reflect the circle ZHM moves in — high-profile personalities, business owners and
                investors from across the region who choose to connect with us in Dubai.
              </p>
            </ChapterHeading>
            <div className="mt-6 border-l-2 border-primary pl-4">
              <p
                className="text-white/90 text-lg md:text-xl italic leading-snug"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                The same trust, discretion and long-term thinking we bring to every client relationship.
              </p>
            </div>
          </motion.div>
        </div>

        <ChapterDivider />

        {/* ===== Chapter 02 · Developer trust ===== */}
        <div id="zhm-developers" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-8 md:mb-12"
          >
            <ChapterHeading number="02" eyebrow="Developer Trust" title="Recognised by" accent="Leading Developers">
              <p>
                Our strength comes from direct, on-the-ground relationships with the UAE&apos;s top developers — from
                launch previews and sales-centre briefings to being honoured with Azizi Developments&apos;{" "}
                <span className="text-white font-medium">Ramadan Elite Broker Award</span>.
              </p>
            </ChapterHeading>
          </motion.div>

          <div className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-pl-4 md:scroll-pl-6 lg:scroll-pl-0 -mx-4 px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {developerMoments.map((m, i) => (
              <motion.button
                type="button"
                key={m.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setLightboxIndex(DEV_OFFSET + i)}
                className="group shrink-0 w-[78%] sm:w-[46%] lg:w-auto snap-start text-left"
              >
                <div
                  className={`relative aspect-[3/4] rounded-2xl overflow-hidden border transition-colors duration-300 shadow-xl shadow-black/30 ${
                    m.award ? "border-primary/60" : "border-white/10 group-hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={m.src}
                    alt={`${m.title} — ${m.tag}`}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 25vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    style={{ objectPosition: m.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-secondary/70 backdrop-blur-md border border-white/15 text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
                    {m.tag}
                  </span>
                  {m.award && (
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-primary text-secondary flex items-center justify-center shadow-lg">
                      <Trophy size={16} />
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand size={15} />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-base md:text-lg mt-4 group-hover:text-primary transition-colors">
                  {m.title}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mt-1">{m.caption}</p>
              </motion.button>
            ))}
          </div>
        </div>

        <ChapterDivider />

        {/* ===== Chapter 03 · Client journey ===== */}
        <div id="zhm-journey" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-8 md:mb-12"
          >
            <ChapterHeading number="03" eyebrow="Client Journey" title="A Day at Emaar," accent="Step by Step">
              <p>
                One client, one day, six steps. This is how ZHM walks every buyer through a decision — personally,
                from the first handshake at the sales gallery to a confident shortlist at The Valley by Emaar.
              </p>
            </ChapterHeading>
          </motion.div>

          {/* Mobile step chips */}
          <div
            ref={chipRowRef}
            className="lg:hidden flex gap-2 overflow-x-auto -mx-4 px-4 md:-mx-6 md:px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {journeySteps.map((s, i) => (
              <button
                type="button"
                key={s.label}
                ref={(el) => {
                  chipRefs.current[i] = el;
                }}
                onClick={() => goToStep(i)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  i === activeStep
                    ? "bg-primary border-primary text-secondary"
                    : "border-white/15 text-gray-300 bg-white/[0.03]"
                }`}
              >
                {String(i + 1).padStart(2, "0")} · {s.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Desktop step timeline */}
            <ol className="hidden lg:block lg:col-span-5">
              {journeySteps.map((s, i) => {
                const isActive = i === activeStep;
                const isDone = i < activeStep;
                return (
                  <li key={s.label} className="relative">
                    {/* Connector from this step's marker down to the next one */}
                    {i < journeySteps.length - 1 && (
                      <span
                        className={`absolute left-[19px] top-[52px] -bottom-3 w-px transition-colors duration-500 ${
                          isDone ? "bg-primary" : "bg-white/10"
                        }`}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => goToStep(i)}
                      aria-current={isActive ? "step" : undefined}
                      className={`w-full flex gap-5 text-left rounded-xl py-3 pr-4 transition-colors ${
                        isActive ? "" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300 ${
                          isActive
                            ? "bg-primary border-primary text-secondary shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                            : isDone
                            ? "bg-secondary border-primary text-primary"
                            : "bg-secondary border-white/20 text-gray-400"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-2 flex-1">
                        <span
                          className={`block text-base font-semibold transition-colors ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        >
                          {s.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.span
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeOut" }}
                              className="block overflow-hidden"
                            >
                              <span className="block text-gray-400 text-sm font-light leading-relaxed pt-2">
                                {s.text}
                              </span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Viewer */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl shadow-black/40">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={current.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onPointerDown={() => {
                      draggedRef.current = false;
                    }}
                    onDragStart={() => {
                      draggedRef.current = true;
                    }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) nextShot();
                      else if (info.offset.x > 60) prevShot();
                    }}
                    onClick={() => {
                      if (draggedRef.current) return;
                      setLightboxIndex(JOURNEY_OFFSET + activeShot);
                    }}
                    className="absolute inset-0 cursor-zoom-in touch-pan-y"
                  >
                    {/* Blurred fill keeps portrait shots framed without awkward crops */}
                    <Image
                      src={current.src}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover blur-2xl scale-110 opacity-50"
                      draggable={false}
                    />
                    <Image
                      src={current.src}
                      alt={current.caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-contain"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary/90 to-transparent" />

                <span className="pointer-events-none absolute top-3 left-3 md:top-4 md:left-4 rounded-full bg-secondary/70 backdrop-blur-md border border-white/15 text-white text-[10px] md:text-xs font-semibold uppercase tracking-wider px-3 py-1.5">
                  Step {String(activeStep + 1).padStart(2, "0")} / {String(journeySteps.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={() => setLightboxIndex(JOURNEY_OFFSET + activeShot)}
                  aria-label="View full screen"
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 rounded-full bg-secondary/70 backdrop-blur-md border border-white/15 text-primary flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Expand size={15} />
                </button>

                <p className="pointer-events-none absolute bottom-4 left-4 right-28 md:bottom-5 md:left-5 text-white text-sm md:text-base font-medium leading-snug">
                  {current.caption}
                </p>

                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex gap-2">
                  <button
                    type="button"
                    onClick={prevShot}
                    aria-label="Previous photo"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-primary hover:text-secondary hover:border-primary transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={nextShot}
                    aria-label="Next photo"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-primary hover:text-secondary hover:border-primary transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Journey progress */}
              <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-dark to-primary-light"
                  animate={{ width: `${((activeShot + 1) / journeyShots.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Shots in this step */}
              {step.shots.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {step.shots.map((shot, i) => {
                    const isActive = stepStart + i === activeShot;
                    return (
                      <button
                        type="button"
                        key={shot.src}
                        onClick={() => setActiveShot(stepStart + i)}
                        aria-label={shot.caption}
                        className={`relative w-20 md:w-24 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                          isActive ? "border-primary" : "border-transparent opacity-50 hover:opacity-90"
                        }`}
                      >
                        <Image src={shot.src} alt="" fill sizes="96px" className="object-cover" />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Mobile step story */}
              <div className="lg:hidden mt-6">
                <h4 className="text-white text-xl font-semibold">{step.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mt-2">{step.text}</p>
                {activeStep < journeySteps.length - 1 && (
                  <button
                    type="button"
                    onClick={() => goToStep(activeStep + 1)}
                    className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold"
                  >
                    Next: {journeySteps[activeStep + 1].title} <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Closing CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-28 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-white/[0.03] to-primary/10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-2xl md:text-4xl font-bold text-white"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Your story could be <em className="text-gold-gradient italic font-normal">next</em>.
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-light mt-2 max-w-xl">
              Book a personally guided site visit with the ZHM team — from master plan to final keys.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
            >
              Book a Site Visit <ArrowRight size={16} />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Zoom, Captions]}
        captions={{ descriptionTextAlign: "center", descriptionMaxLines: 3 }}
        carousel={{ padding: "16px" }}
        animation={{ fade: 250 }}
        styles={{ container: { backgroundColor: "rgba(10, 15, 30, 0.97)" } }}
      />
    </section>
  );
}
