

"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight, ArrowUp, MapPin, Phone } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

type FooterLink = { label: string; href: string };
type Branch = { name: string; tag: string; address: string; directionsUrl: string };

const programs: FooterLink[] = [
  { label: "IIT-JEE Coaching", href: "#courses" },
  { label: "NEET-UG Coaching", href: "#courses" },
  { label: "Foundation Courses", href: "#courses" },
  { label: "Class 11–12 Boards", href: "#courses" },
  { label: "Scholarship Test", href: "#courses" },
];

const exploreLinks: FooterLink[] = [
  { label: "Why Kota Academy", href: "#why-kota" },
  { label: "Faculty", href: "#faculty" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Campus Gallery", href: "#campus-gallery" },
  { label: "Branches", href: "#branches" },
  { label: "FAQs", href: "#faq" },
];

const branches: Branch[] = [
  {
    name: "Alpha-I Branch",
    tag: "Main Centre",
    address: "Om Tower, Plot No. B, 5th Floor, 5 Alfa Marg, Alpha-I, Greater Noida 201310",
    directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
  },
  {
    name: "Omicron-III Branch",
    tag: "Branch 2",
    address: "NS-76, Pocket A, Omicron III, Mathurapur, Greater Noida 201310",
    directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
  },
];

/* Social links — Instagram/YouTube href are placeholders; client supplies handles. */
const socials = [
  { label: "WhatsApp", href: "https://wa.me/918447009390", glyph: "whatsapp" as const },
  { label: "Instagram", href: "#", glyph: "instagram" as const },
  { label: "YouTube", href: "#", glyph: "youtube" as const },
];

const EXPO = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

/* ------------------------------------------------------------------ */
/*  Root                                                              */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <footer id="footer" className="relative overflow-hidden bg-[#0B1B33] text-white">
        <FooterBackground />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pt-14 sm:px-6 md:pt-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {/* main grid: brand full → programs+explore 2-up → visit full (mobile) */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-x-6 gap-y-9 pb-11 pt-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-10"
          >
            <BrandColumn />
            <NavColumn title="Programs" links={programs} />
            <NavColumn title="Explore" links={exploreLinks} />
            <VisitColumn />
          </motion.div>
        </motion.div>

        {/* premium ghost wordmark closer */}
        <GhostWordmark />

        {/* legal bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">
            <LegalBar />
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------ */
/*  Background                                                         */
/* ------------------------------------------------------------------ */

function FooterBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#0B1B33_0%,#0A1A2E_60%,#091627_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.13)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-25" />
      <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(181,255,61,0.2)_1px,transparent_1.5px)] bg-[size:26px_26px] opacity-40 [mask-image:radial-gradient(circle_at_top_right,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B5FF3D]/30 to-transparent" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA band — recalibrated (kept in footer for now)                  */


/* ------------------------------------------------------------------ */
/*  Brand column                                                      */
/* ------------------------------------------------------------------ */

function BrandColumn() {
  return (
    <div className="col-span-2 lg:col-span-1">
      <Link href="#" className="inline-flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B5FF3D]/25 bg-[#B5FF3D]/[0.06] text-[#B5FF3D]">
          <span className="text-[24px] font-black leading-none tracking-[-0.08em]">K</span>
        </span>
        <span>
          <span className="block text-[20px] font-black leading-none tracking-[-0.035em] text-white">
            Kota <span className="text-[#B5FF3D]">Academy</span>
          </span>
          <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9AA6B8]">
            Nurturing dreams · Building futures
          </span>
        </span>
      </Link>

      <p className="mt-5 max-w-[330px] text-[14px] leading-7 text-[#AEB9CA]">
        IIT-JEE, NEET &amp; Foundation coaching in Greater Noida — small batches,
        regular testing, daily doubt support, and honest parent updates.
      </p>

      <div className="mt-6 flex items-center gap-2.5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09]"
          >
            <SocialGlyph name={s.glyph} className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav columns                                                       */
/* ------------------------------------------------------------------ */

function NavColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <ColumnTitle>{title}</ColumnTitle>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] text-[#AEB9CA] transition-colors duration-200 hover:text-[#B5FF3D]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Visit column — compact text addresses + directions                */
/* ------------------------------------------------------------------ */

function VisitColumn() {
  return (
    <div className="col-span-2 lg:col-span-1">
      <ColumnTitle>Visit Us</ColumnTitle>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-1 lg:gap-y-5">
        {branches.map((b) => (
          <div key={b.name}>
            <div className="flex items-center gap-2">
              <h4 className="text-[14px] font-bold text-white">{b.name}</h4>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[6px] lg:text-[9.5px] font-bold tracking-[0.05em] text-[#9FD46A]">
                {b.tag}
              </span>
            </div>
            <p className="mt-1.5 flex gap-2 text-[13px] leading-6 text-[#AEB9CA]">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6F7C90]" strokeWidth={2.1} aria-hidden />
              {b.address}
            </p>
            <a
              href={b.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 ml-[1.375rem] inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#B5FF3D] transition-all duration-300 hover:gap-2"
            >
              Get Directions
              <ArrowRight className="h-3.5 w-3.5 -rotate-45" strokeWidth={2.4} aria-hidden />
            </a>
          </div>
        ))}
      </div>

      <a
        href="tel:+918447009390"
        className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#D4DDEA] transition-colors duration-200 hover:text-[#B5FF3D]"
      >
        <Phone className="h-3.5 w-3.5 text-[#6F7C90]" strokeWidth={2.2} aria-hidden />
        084470 09390
      </a>
    </div>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
      <span className="h-3 w-1 rounded-full bg-[#B5FF3D]" />
      {children}
    </h3>
  );
}

/* ------------------------------------------------------------------ */
/*  Ghost wordmark — visible, premium filled gradient                 */
/* ------------------------------------------------------------------ */

function GhostWordmark() {
  return (
    <div className="pointer-events-none relative z-0 -mb-2 select-none overflow-hidden px-4" aria-hidden>
      <span
        className="block bg-[linear-gradient(180deg,rgba(181,255,61,0.16)_0%,rgba(255,255,255,0.10)_38%,rgba(255,255,255,0)_92%)] bg-clip-text text-center font-black leading-[0.8] tracking-[-0.05em] text-transparent"
        style={{ fontSize: "clamp(58px, 16vw, 220px)" }}
      >
        Kota Academy
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Legal bar                                                         */
/* ------------------------------------------------------------------ */

function LegalBar() {
  return (
    <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
      <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#8B97A9]">
        <span>© 2026 Kota Academy. All rights reserved.</span>
        <span className="hidden text-[#46536A] md:inline">·</span>
        <span className="inline-flex items-center gap-1.5 text-[#A6B1C2]">
          <Star className="h-3.5 w-3.5" />
          4.7 on Google · Greater Noida
        </span>
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-[#A6B1C2]">
        <Link href="#" className="transition-colors duration-200 hover:text-[#B5FF3D]">Privacy Policy</Link>
        <Link href="#" className="transition-colors duration-200 hover:text-[#B5FF3D]">Terms of Use</Link>
        <BackToTop />
      </div>
    </div>
  );
}

function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group inline-flex items-center gap-2 text-[#A6B1C2] transition-colors duration-200 hover:text-[#B5FF3D]"
    >
      Back to top
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B5FF3D]/30 text-[#B5FF3D] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#B5FF3D] group-hover:text-[#0B1B33]">
        <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers — gold star + brand-colored social glyphs                 */
/* ------------------------------------------------------------------ */

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#F5B642" className={className} aria-hidden="true">
      <path d="M12 2.5l2.85 5.77 6.37.93-4.61 4.49 1.09 6.34L12 17.02l-5.7 3l1.09-6.34L2.78 9.2l6.37-.93L12 2.5z" />
    </svg>
  );
}

function SocialGlyph({
  name,
  className = "",
}: {
  name: "whatsapp" | "instagram" | "youtube";
  className?: string;
}) {
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#25D366" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#FDF497" />
            <stop offset="5%" stopColor="#FDF497" />
            <stop offset="45%" stopColor="#FD5949" />
            <stop offset="60%" stopColor="#D6249F" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="url(#ig-grad)" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#ig-grad)" strokeWidth="1.9" />
        <circle cx="17.3" cy="6.7" r="1.2" fill="url(#ig-grad)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#FF0000" d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.62 24 12 24 12s0-3.62-.5-5.5Z" />
      <path fill="#fff" d="M9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}