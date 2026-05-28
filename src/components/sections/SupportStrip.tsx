"use client";

import { useReducedMotion, motion, Variants } from "framer-motion";
import {
  UserCheck,
  Users,
  CalendarCheck2,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const trustItems = [
  {
    title: "Expert Faculty",
    subtitle: "Learn from Kota's best teachers",
    icon: UserCheck,
    gradient: "from-[#3d9b47] to-[#2e7d3a]",
    shadow: "rgba(61,155,71,0.45)",
    shadowStrong: "rgba(61,155,71,0.70)",
  },
  {
    title: "Small Batch Size",
    subtitle: "Personal attention for every student",
    icon: Users,
    gradient: "from-[#2196c4] to-[#1769a0]",
    shadow: "rgba(33,150,196,0.45)",
    shadowStrong: "rgba(33,150,196,0.70)",
  },
  {
    title: "Weekly Tests & Analysis",
    subtitle: "Track progress and improve faster",
    icon: CalendarCheck2,
    gradient: "from-[#f5a623] to-[#d4830a]",
    shadow: "rgba(245,166,35,0.45)",
    shadowStrong: "rgba(245,166,35,0.70)",
  },
  {
    title: "Doubt Support",
    subtitle: "Help available when students need it",
    icon: MessageCircleQuestion,
    gradient: "from-[#8b5cf6] to-[#6d28d9]",
    shadow: "rgba(139,92,246,0.45)",
    shadowStrong: "rgba(139,92,246,0.70)",
  },
] as const;

// ─── Animation helpers ────────────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariants = (i: number): Variants => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 + i * 0.08 },
  },
});

const iconVariants = (i: number): Variants => ({
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.22 + i * 0.08 },
  },
});

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustStrip() {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto mt-8 max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
      {/* Card */}
      <motion.div
        variants={reduce ? undefined : cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative overflow-hidden rounded-[20px]
          border border-lime-500/[0.18]
          bg-gradient-to-br from-white via-[#f7fce8] to-[#eef8d3]
          shadow-[0_2px_4px_rgba(15,23,42,0.04),0_6px_16px_rgba(15,23,42,0.07),0_20px_48px_rgba(15,23,42,0.10),inset_0_0_0_1px_rgba(132,189,0,0.08)]
        "
        role="region"
        aria-label="Program trust highlights"
      >
        {/* Top accent hairline */}
        <span
          aria-hidden="true"
          className="
            absolute inset-x-10 top-0 h-[2px] rounded-b
            bg-gradient-to-r from-transparent via-[#84BD00] to-transparent
            animate-shimmer-line
          "
        />

        {/* Bottom trailing border */}
        <span
          aria-hidden="true"
          className="
            absolute inset-x-0 bottom-0 h-[3px]
            bg-gradient-to-r from-transparent via-[#84BD00]/50 to-transparent
            animate-trail-bottom
          "
        />

        {/* Corner glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#a8d800]/[0.18] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#84BD00]/[0.14] blur-3xl"
        />

        {/* Inner layout: badge + grid */}
        <div className="relative z-10 flex flex-col sm:flex-row">

          {/* ── Badge ────────────────────────────────────────────────────── */}
          <div
            className="
              flex shrink-0 items-center gap-3
              bg-gradient-to-br from-[#84BD00] to-[#a8d800]
              px-5 py-4 sm:py-0 sm:px-6
              shadow-[2px_0_16px_rgba(132,189,0,0.22)]
            "
          >
            <ShieldCheck
              className="h-8 w-8 shrink-0 text-white drop-shadow"
              strokeWidth={2}
              aria-hidden="true"
            />
            <p className="max-w-[150px] text-[13px] font-extrabold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.12)]">
              Every program includes the support students need to stay consistent.
            </p>
          </div>

          {/* Divider line (horizontal on mobile, vertical on sm+) */}
          <div
            aria-hidden="true"
            className="
              h-px w-full bg-gradient-to-r from-transparent via-lime-400/30 to-transparent
              sm:h-auto sm:w-px sm:bg-gradient-to-b
            "
          />

          {/* ── Trust items ──────────────────────────────────────────────── */}
          <div className="grid flex-1 grid-cols-2 sm:grid-cols-4">
            {trustItems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reduce ? undefined : itemVariants(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="
                    group/item relative flex items-center gap-3 px-4 py-4
                    transition-colors duration-200 hover:bg-lime-500/[0.045]
                    [&:not(:last-child)]:after:absolute
                    [&:not(:last-child)]:after:right-0
                    [&:not(:last-child)]:after:top-[18%]
                    [&:not(:last-child)]:after:h-[64%]
                    [&:not(:last-child)]:after:w-px
                    [&:not(:last-child)]:after:bg-gradient-to-b
                    [&:not(:last-child)]:after:from-transparent
                    [&:not(:last-child)]:after:via-lime-400/25
                    [&:not(:last-child)]:after:to-transparent
                  "
                >
                  {/* Icon */}
                  <motion.span
                    variants={reduce ? undefined : iconVariants(i)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                      boxShadow: `0 4px 12px ${item.shadow}, 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25)`,
                    }}
                    className={`
                      flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px]
                      bg-gradient-to-br ${item.gradient} text-white
                      transition-all duration-300
                      group-hover/item:-translate-y-0.5 group-hover/item:scale-[1.06]
                      group-hover/item:[box-shadow:0_6px_18px_var(--shadow-strong),0_2px_6px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.25)]
                      motion-reduce:transition-none
                    `}
                    aria-hidden="true"
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden="true" />
                  </motion.span>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-extrabold leading-tight tracking-tight text-[#0B1628]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[10.5px] font-semibold leading-snug text-slate-400">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}