"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight, CalendarCheck, Phone } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Standalone page-closing CTA                                               */
/*  Place between <FAQSection /> and <Footer />. Matches the footer's width   */
/*  (max-w-[1180px]) and sits on the cream page background.                   */
/* -------------------------------------------------------------------------- */

const EXPO = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO } },
};

export default function CounsellingCTA() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-label="Book free counselling"
        className="bg-[#F4F8EA] px-5 pb-14 pt-2 sm:px-6 md:pb-16 lg:px-8"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-250 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_88%_25%,rgba(181,255,61,0.18),transparent_44%),linear-gradient(120deg,#0B1B33_0%,#0C2238_52%,#0B2A1C_100%)] p-6 shadow-[0_28px_70px_-32px_rgba(7,17,31,0.6)] md:p-8"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-[560px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
                <CalendarCheck className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
                Free Counselling
              </span>
              <h2 className="mt-3.5 text-[24px] font-extrabold leading-[1.14] tracking-[-0.025em] text-white md:text-[28px]">
                Ready to begin your <span className="text-[#B5FF3D]">success journey?</span>
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-[#C2CDDE]">
                Book a free counselling session — we&apos;ll help you choose the right
                course, branch, and batch for your child. No registration charges.
              </p>
            </div>

           
             <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-6 py-3.5 text-[15px] font-bold text-[#0A2410] shadow-[0_18px_40px_-16px_rgba(95,176,22,0.8)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden />
            Book Free Counselling
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden />
          </Link>
          <a
            href="tel:+918447009390"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            <Phone className="h-[18px] w-[18px] text-[#B5FF3D]" strokeWidth={2.2} aria-hidden />
            084470 09390
          </a>
        </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}