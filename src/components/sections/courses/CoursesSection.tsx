// "use client";

// /**
//  * CoursesSection — Kota Academy
//  * ---------------------------------------------------------------------------
//  * Full section: heading → 4 course cards → trust strip.
//  *
//  * Cards are light/ivory with the image on top, a soft fade into the content,
//  * a 2×2 feature grid on desktop, and a "View Features" accordion on mobile.
//  * Four course accents: lime (JEE) · sky (NEET) · gold (Boards) · purple (Foundation).
//  * Accents touch only the icon badge, audience label, feature pills and CTA —
//  * the card base stays ivory, never fully colored.
//  *
//  * Stack: Next.js (App Router) · TS · Tailwind · framer-motion · lucide-react ·
//  * next/image · next/link.
//  *
//  * Images: save the four course images in /public/images/courses/ with the
//  * filenames referenced in `courses` below (or edit the paths to match yours).
//  * ---------------------------------------------------------------------------
//  */

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ChevronDown,
//   ClipboardCheck,
//   FileText,
//   GraduationCap,
//   Headphones,
//   LineChart,
//   Lightbulb,
//   Microscope,
//   PenTool,
//   Rocket,
//   ShieldCheck,
//   Sparkles,
//   Stethoscope,
//   Target,
//   TrendingUp,
//   UserRound,
//   Users,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";
// import { motion, useReducedMotion, type Variants } from "framer-motion";

// /* ───────────────────────────── Types ───────────────────────────── */

// export type CourseAccent = "lime" | "sky" | "gold" | "purple";

// export type CourseHighlight = {
//   label: string;
//   icon: LucideIcon;
// };

// export type Course = {
//   title: string;
//   audience: string;
//   description: string;
//   href: string;
//   image: string;
//   accent: CourseAccent;
//   icon: LucideIcon;
//   badge?: string;
//   highlights: CourseHighlight[];
//   exploreLabel: string;
//   /** Shortened CTA label for the tightest (2-col) mobile cards. */
//   shortLabel?: string;
// };

// type TrustItem = {
//   title: string;
//   subtitle: string;
//   icon: LucideIcon;
// };

// /* ─────────────────────────────── Data ──────────────────────────── */

// const courses: Course[] = [
//   {
//     title: "JEE Main & Advanced",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Complete JEE preparation with concept clarity, advanced practice, tests & performance tracking.",
//     href: "/courses/jee-main-advanced",
//     image: "/images/courses/jee-main-advanced.png",
//     accent: "lime",
//     icon: Target,
//     badge: "Most Popular",
//     exploreLabel: "Explore JEE Program",
//     shortLabel: "Explore",
//     highlights: [
//       { label: "Concept Clarity", icon: Lightbulb },
//       { label: "Advanced Practice", icon: PenTool },
//       { label: "Weekly Tests", icon: CalendarCheck },
//       { label: "Doubt Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "NEET UG Preparation",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Focused NEET preparation with NCERT mastery, regular tests, and expert doubt support.",
//     href: "/courses/neet-ug-preparation",
//     image: "/images/courses/neet-ug-preparation.png",
//     accent: "sky",
//     icon: Stethoscope,
//     exploreLabel: "Explore NEET Program",
//     shortLabel: "Explore",
//     highlights: [
//       { label: "NCERT Mastery", icon: BookOpen },
//       { label: "Biology Focus", icon: Microscope },
//       { label: "Regular Tests", icon: ClipboardCheck },
//       { label: "Doubt Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "Class 11–12 Boards",
//     audience: "CBSE / State Board Prep",
//     description:
//       "Strengthen concepts, improve scores, and excel in school and board examinations.",
//     href: "/courses/class-11-12-boards",
//     image: "/images/courses/class-11-12-boards.png",
//     accent: "gold",
//     icon: BookOpen,
//     exploreLabel: "Explore Boards Program",
//     shortLabel: "Explore",
//     highlights: [
//       { label: "Chapter Practice", icon: ClipboardCheck },
//       { label: "Board Exam Focus", icon: ShieldCheck },
//       { label: "Answer Writing", icon: FileText },
//       { label: "Score Improvement", icon: TrendingUp },
//     ],
//   },
//   {
//     title: "Class 8–10 Foundation",
//     audience: "Class 8, 9 & 10 Students",
//     description:
//       "Build strong Maths, Science & Reasoning fundamentals to stay ahead for future exams.",
//     href: "/courses/class-8-10-foundation",
//     image: "/images/courses/class-8-10-foundation.png",
//     accent: "purple",
//     icon: GraduationCap,
//     exploreLabel: "Explore Foundation Program",
//     shortLabel: "Explore",
//     highlights: [
//       { label: "Strong Basics", icon: Lightbulb },
//       { label: "Olympiad Support", icon: Sparkles },
//       { label: "Regular Assessments", icon: ClipboardCheck },
//       { label: "Future Ready", icon: Rocket },
//     ],
//   },
// ];

// const trustItems: TrustItem[] = [
//   {
//     title: "Expert Faculty",
//     subtitle: "Learn from Kota's best teachers",
//     icon: Users,
//   },
//   {
//     title: "Small Batch Size",
//     subtitle: "Personal attention for every student",
//     icon: UsersRound,
//   },
//   {
//     title: "Regular Tests & Analysis",
//     subtitle: "Track progress. Improve smartly.",
//     icon: LineChart,
//   },
//   {
//     title: "Doubt Support",
//     subtitle: "We're here whenever you need us",
//     icon: Headphones,
//   },
// ];

// /* ─────────────────────── Accent class system ────────────────────── */

// type AccentClasses = {
//   border: string;
//   iconColor: string;
//   audience: string;
//   bar: string;
//   pill: string;
//   pillIcon: string;
//   cta: string;
//   ring: string;
// };

// const ACCENTS: Record<CourseAccent, AccentClasses> = {
//   lime: {
//     border: "border-lime-600/20",
//     iconColor: "text-lime-600",
//     audience: "text-lime-700",
//     bar: "bg-lime-500",
//     pill: "border-lime-600/15 bg-lime-50/80",
//     pillIcon: "text-lime-600",
//     cta: "bg-[#65A30D] text-white hover:bg-[#4D7C0F]",
//     ring: "focus-visible:ring-lime-500",
//   },
//   sky: {
//     border: "border-sky-600/20",
//     iconColor: "text-sky-600",
//     audience: "text-sky-700",
//     bar: "bg-sky-500",
//     pill: "border-sky-600/15 bg-sky-50/80",
//     pillIcon: "text-sky-600",
//     cta: "bg-[#1D8FE8] text-white hover:bg-[#0F76C9]",
//     ring: "focus-visible:ring-sky-500",
//   },
//   gold: {
//     border: "border-amber-500/25",
//     iconColor: "text-amber-600",
//     audience: "text-amber-700",
//     bar: "bg-amber-500",
//     pill: "border-amber-500/20 bg-amber-50/80",
//     pillIcon: "text-amber-600",
//     // Deepened gold so white text clears WCAG AA (bright gold + white fails).
//     cta: "bg-[#B07A0A] text-white hover:bg-[#925F07]",
//     ring: "focus-visible:ring-amber-500",
//   },
//   purple: {
//     border: "border-violet-500/20",
//     iconColor: "text-violet-600",
//     audience: "text-violet-700",
//     bar: "bg-violet-500",
//     pill: "border-violet-500/15 bg-violet-50/80",
//     pillIcon: "text-violet-600",
//     cta: "bg-[#7C3AED] text-white hover:bg-[#6627CC]",
//     ring: "focus-visible:ring-violet-500",
//   },
// };

// function getCourseAccentClasses(accent: CourseAccent): AccentClasses {
//   return ACCENTS[accent];
// }

// const slugify = (value: string) =>
//   value
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)/g, "");

// /* ───────────────────────── Motion variants ─────────────────────── */

// const EASE = [0.22, 1, 0.36, 1] as const;

// const container: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// function fadeUp(reduce: boolean): Variants {
//   return {
//     hidden: { opacity: 0, y: reduce ? 0 : 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
//   };
// }

// /* ──────────────────────────── Card ─────────────────────────────── */

// function CourseCard({ course }: { course: Course }) {
//   const [showFeatures, setShowFeatures] = useState(false);

//   const Icon = course.icon;
//   const accent = getCourseAccentClasses(course.accent);
//   const panelId = `course-features-${slugify(course.title)}`;

//   return (
//     <article
//       className={`group flex h-full flex-col overflow-hidden rounded-[1.25rem] border bg-[#F8FAF2] shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[1.5rem] ${accent.border}`}
//     >
//       {/* Image area */}
//       <div className="relative h-24 shrink-0 overflow-hidden sm:h-36 lg:h-44">
//         <Image
//           src={course.image}
//           alt=""
//           fill
//           sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
//           className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
//         />

//         {/* Soft bottom fade blending image into ivory content */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAF2] via-[#F8FAF2]/70 to-transparent"
//         />

//         {/* Icon badge */}
//         <div
//           className={`absolute left-2.5 top-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-white/70 backdrop-blur-md transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 sm:left-3 sm:top-3 lg:h-[52px] lg:w-[52px] lg:rounded-2xl ${accent.iconColor}`}
//         >
//           <Icon
//             className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
//             strokeWidth={1.9}
//             aria-hidden="true"
//           />
//         </div>

//         {/* Optional "Most Popular" badge */}
//         {course.badge ? (
//           <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-lime-300 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.06em] text-emerald-900 shadow-sm sm:right-3 sm:top-3 sm:text-[10px]">
//             <Sparkles className="h-3 w-3" aria-hidden="true" />
//             {course.badge}
//           </span>
//         ) : null}
//       </div>

//       {/* Content */}
//       <div className="flex flex-1 flex-col px-3 pb-3 pt-1.5 sm:px-4 sm:pb-4 lg:px-5 lg:pb-5">
//         <h3 className="line-clamp-2 text-[0.95rem] font-extrabold leading-tight tracking-tight text-[#0B1628] sm:text-lg lg:text-xl">
//           {course.title}
//         </h3>

//         <p
//           className={`mt-1 text-[11px] font-bold sm:text-xs lg:text-sm ${accent.audience}`}
//         >
//           {course.audience}
//         </p>

//         <span
//           aria-hidden="true"
//           className={`mt-2 hidden h-0.5 w-7 rounded-full transition-all duration-300 group-hover:w-12 motion-reduce:transition-none lg:block ${accent.bar}`}
//         />

//         <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-600 sm:text-xs lg:text-sm lg:leading-6">
//           {course.description}
//         </p>

//         {/* Desktop: 2×2 feature grid */}
//         <div className="mt-3 hidden grid-cols-2 gap-2 lg:grid">
//           {course.highlights.slice(0, 4).map((highlight) => {
//             const HighlightIcon = highlight.icon;
//             return (
//               <span
//                 key={highlight.label}
//                 className={`inline-flex min-h-[2.25rem] items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 ${accent.pill}`}
//               >
//                 <HighlightIcon
//                   className={`h-3.5 w-3.5 shrink-0 ${accent.pillIcon}`}
//                   aria-hidden="true"
//                 />
//                 <span className="leading-tight">{highlight.label}</span>
//               </span>
//             );
//           })}
//         </div>

//         {/* Mobile / tablet: accordion */}
//         <div className="mt-3 lg:hidden">
//           <button
//             type="button"
//             onClick={() => setShowFeatures((open) => !open)}
//             aria-expanded={showFeatures}
//             aria-controls={panelId}
//             className={`flex w-full items-center justify-between rounded-lg border px-2.5 py-2 text-[11px] font-bold text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${accent.pill} ${accent.ring}`}
//           >
//             <span>View Features</span>
//             <ChevronDown
//               className={`h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
//                 showFeatures ? "rotate-180" : ""
//               } ${accent.pillIcon}`}
//               aria-hidden="true"
//             />
//           </button>

//           <div
//             id={panelId}
//             className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
//               showFeatures
//                 ? "mt-2 grid-rows-[1fr] opacity-100"
//                 : "grid-rows-[0fr] opacity-0"
//             }`}
//           >
//             <ul className="min-h-0 space-y-1.5">
//               {course.highlights.slice(0, 4).map((highlight) => {
//                 const HighlightIcon = highlight.icon;
//                 return (
//                   <li
//                     key={highlight.label}
//                     className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[10.5px] font-semibold text-slate-700 ${accent.pill}`}
//                   >
//                     <HighlightIcon
//                       className={`h-3.5 w-3.5 shrink-0 ${accent.pillIcon}`}
//                       aria-hidden="true"
//                     />
//                     <span>{highlight.label}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>

//         {/* CTA — pinned to card bottom for row alignment */}
//         <div className="mt-auto pt-4">
//           <Link
//             href={course.href}
//             aria-label={course.exploreLabel}
//             className={`group/cta inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl px-3 text-[12px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-sm lg:min-h-[44px] ${accent.cta} ${accent.ring}`}
//           >
//             <span className="sm:hidden">{course.shortLabel ?? "Explore"}</span>
//             <span className="hidden sm:inline">{course.exploreLabel}</span>
//             <ArrowRight
//               className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
//               aria-hidden="true"
//             />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// }

// /* ────────────────────────── Sub-sections ───────────────────────── */

// function CoursesHeader() {
//   const reduce = useReducedMotion();
//   const item = fadeUp(Boolean(reduce));

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto flex max-w-3xl flex-col items-center text-center"
//     >
//       <motion.div
//         variants={item}
//         className="mb-3 inline-flex items-center gap-3"
//       >
//         <span className="h-px w-8 bg-lime-700/40" />
//         <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-lime-700 sm:text-xs">
//           <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
//           Our Programs
//         </span>
//         <span className="h-px w-8 bg-lime-700/40" />
//       </motion.div>

//       <motion.h2
//         id="courses-heading"
//         variants={item}
//         className="text-2xl font-extrabold leading-[1.1] tracking-tight text-[#0B1628] sm:text-4xl lg:text-5xl"
//       >
//         Courses Designed for{" "}
//         <span className="text-[#65A30D]">Every Aspiration</span>
//       </motion.h2>

//       <motion.p
//         variants={item}
//         className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base"
//       >
//         Choose the right preparation path for JEE, NEET, Boards, or early
//         foundation learning.
//       </motion.p>
//     </motion.div>
//   );
// }

// function TrustStrip() {
//   const reduce = useReducedMotion();
//   const item = fadeUp(Boolean(reduce));

//   return (
//     <motion.div
//       variants={item}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="mx-auto mt-6 grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 rounded-[1.25rem] border border-lime-700/12 bg-white/60 px-5 py-5 backdrop-blur-sm sm:grid-cols-4 sm:gap-x-0 sm:px-6"
//     >
//       {trustItems.map((trust, index) => {
//         const TrustIcon = trust.icon;
//         return (
//           <div
//             key={trust.title}
//             className={`flex items-center gap-3 sm:px-5 ${
//               index !== 0 ? "sm:border-l sm:border-slate-900/10" : ""
//             }`}
//           >
//             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-100/80 text-lime-700 ring-1 ring-lime-600/15">
//               <TrustIcon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
//             </span>
//             <div className="min-w-0">
//               <p className="text-[13px] font-extrabold leading-tight text-[#0B1628]">
//                 {trust.title}
//               </p>
//               <p className="mt-0.5 text-[11px] leading-tight text-slate-500">
//                 {trust.subtitle}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// }

// /* ─────────────────────────── Section ───────────────────────────── */

// export default function CoursesSection() {
//   return (
//     <section
//       aria-labelledby="courses-heading"
//       className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.18),transparent_30%),radial-gradient(circle_at_88%_28%,rgba(125,211,252,0.12),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F6F9EE_46%,#EEF5DE_100%)] px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
//     >
//       {/* faint dotted texture */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.18) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         <CoursesHeader />

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5"
//         >
//           {courses.map((course) => {
//             const reduce = false; // cards animate via parent stagger
//             void reduce;
//             return (
//               <motion.div
//                 key={course.title}
//                 variants={{
//                   hidden: { opacity: 0, y: 24 },
//                   visible: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.55, ease: EASE },
//                   },
//                 }}
//               >
//                 <CourseCard course={course} />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <TrustStrip />
//       </div>
//     </section>
//   );
// }

"use client";

/**
 * CoursesSection — Kota Academy
 * ---------------------------------------------------------------------------
 * Full section: heading → 4 course cards → trust strip.
 *
 * Accordion / grid note:
 *   The grid uses `items-start` below lg so an expanded card grows on its own
 *   instead of stretching its row-mate (which previously left dead space and a
 *   detached CTA). On lg+ there is no accordion, so `lg:items-stretch` keeps all
 *   four cards perfectly equal-height with aligned CTAs.
 *
 * Stack: Next.js (App Router) · TS · Tailwind · framer-motion · lucide-react ·
 * next/image · next/link.  Images live in /public/images/courses/.
 * ---------------------------------------------------------------------------
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Headphones,
  LineChart,
  Lightbulb,
  Microscope,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  UserRound,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import SupportStrip from "../SupportStrip";

/* ───────────────────────────── Types ───────────────────────────── */

export type CourseAccent = "lime" | "sky" | "gold" | "purple";

export type CourseHighlight = {
  label: string;
  icon: LucideIcon;
};

export type Course = {
  title: string;
  audience: string;
  description: string;
  href: string;
  image: string;
  accent: CourseAccent;
  icon: LucideIcon;
  badge?: string;
  highlights: CourseHighlight[];
  exploreLabel: string;
  /** Shortened CTA label for the tightest (2-col) mobile cards. */
  shortLabel?: string;
};

type TrustItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: CourseAccent;
};

/* ─────────────────────────────── Data ──────────────────────────── */

const courses: Course[] = [
  {
    title: "JEE Main & Advanced",
    audience: "Class 11, 12 & Droppers",
    description:
      "Complete JEE preparation with concept clarity, advanced practice, tests & performance tracking.",
    href: "/courses/jee-main-advanced",
    image: "/images/courses/jee-main-advanced.png",
    accent: "lime",
    icon: Target,
    badge: "Most Popular",
    exploreLabel: "Explore JEE Program",
    shortLabel: "Explore",
    highlights: [
      { label: "Concept Clarity", icon: Lightbulb },
      { label: "Advanced Practice", icon: PenTool },
      { label: "Weekly Tests", icon: CalendarCheck },
      { label: "Doubt Support", icon: UserRound },
    ],
  },
  {
    title: "NEET UG Preparation",
    audience: "Class 11, 12 & Droppers",
    description:
      "Focused NEET preparation with NCERT mastery, regular tests, and expert doubt support.",
    href: "/courses/neet-ug-preparation",
    image: "/images/courses/neet-ug-preparation.png",
    accent: "sky",
    icon: Stethoscope,
    exploreLabel: "Explore NEET Program",
    shortLabel: "Explore",
    highlights: [
      { label: "NCERT Mastery", icon: BookOpen },
      { label: "Biology Focus", icon: Microscope },
      { label: "Regular Tests", icon: ClipboardCheck },
      { label: "Doubt Support", icon: UserRound },
    ],
  },
  {
    title: "Class 11–12 Boards",
    audience: "CBSE / State Board Prep",
    description:
      "Strengthen concepts, improve scores, and excel in school and board examinations.",
    href: "/courses/class-11-12-boards",
    image: "/images/courses/class-11-12-boards.png",
    accent: "gold",
    icon: BookOpen,
    exploreLabel: "Explore Boards Program",
    shortLabel: "Explore",
    highlights: [
      { label: "Chapter Practice", icon: ClipboardCheck },
      { label: "Board Exam Focus", icon: ShieldCheck },
      { label: "Answer Writing", icon: FileText },
      { label: "Score Improvement", icon: TrendingUp },
    ],
  },
  {
    title: "Class 8–10 Foundation",
    audience: "Class 8, 9 & 10 Students",
    description:
      "Build strong Maths, Science & Reasoning fundamentals to stay ahead for future exams.",
    href: "/courses/class-8-10-foundation",
    image: "/images/courses/class-8-10-foundation.png",
    accent: "purple",
    icon: GraduationCap,
    exploreLabel: "Explore Foundation Program",
    shortLabel: "Explore",
    highlights: [
      { label: "Strong Basics", icon: Lightbulb },
      { label: "Olympiad Support", icon: Sparkles },
      { label: "Regular Assessments", icon: ClipboardCheck },
      { label: "Future Ready", icon: Rocket },
    ],
  },
];

const trustItems: TrustItem[] = [
  {
    title: "Expert Faculty",
    subtitle: "Learn from Kota's best teachers",
    icon: Users,
    accent: "lime",
  },
  {
    title: "Small Batch Size",
    subtitle: "Personal attention for every student",
    icon: UsersRound,
    accent: "sky",
  },
  {
    title: "Regular Tests & Analysis",
    subtitle: "Track progress. Improve smartly.",
    icon: LineChart,
    accent: "gold",
  },
  {
    title: "Doubt Support",
    subtitle: "We're here whenever you need us",
    icon: Headphones,
    accent: "purple",
  },
];

/* ─────────────────────── Accent class systems ───────────────────── */

type AccentClasses = {
  border: string;
  iconColor: string;
  audience: string;
  bar: string;
  pill: string;
  pillIcon: string;
  cta: string;
  ring: string;
};

const ACCENTS: Record<CourseAccent, AccentClasses> = {
  lime: {
    border: "border-lime-600/20",
    iconColor: "text-lime-600",
    audience: "text-lime-700",
    bar: "bg-lime-500",
    pill: "border-lime-600/15 bg-lime-50/80",
    pillIcon: "text-lime-600",
    cta: "bg-[#65A30D] text-white hover:bg-[#4D7C0F]",
    ring: "focus-visible:ring-lime-500",
  },
  sky: {
    border: "border-sky-600/20",
    iconColor: "text-sky-600",
    audience: "text-sky-700",
    bar: "bg-sky-500",
    pill: "border-sky-600/15 bg-sky-50/80",
    pillIcon: "text-sky-600",
    cta: "bg-[#1D8FE8] text-white hover:bg-[#0F76C9]",
    ring: "focus-visible:ring-sky-500",
  },
  gold: {
    border: "border-amber-500/25",
    iconColor: "text-amber-600",
    audience: "text-amber-700",
    bar: "bg-amber-500",
    pill: "border-amber-500/20 bg-amber-50/80",
    pillIcon: "text-amber-600",
    // Deepened gold so white text clears WCAG AA (bright gold + white fails).
    cta: "bg-[#B07A0A] text-white hover:bg-[#925F07]",
    ring: "focus-visible:ring-amber-500",
  },
  purple: {
    border: "border-violet-500/20",
    iconColor: "text-violet-600",
    audience: "text-violet-700",
    bar: "bg-violet-500",
    pill: "border-violet-500/15 bg-violet-50/80",
    pillIcon: "text-violet-600",
    cta: "bg-[#7C3AED] text-white hover:bg-[#6627CC]",
    ring: "focus-visible:ring-violet-500",
  },
};

function getCourseAccentClasses(accent: CourseAccent): AccentClasses {
  return ACCENTS[accent];
}

/** Gradient icon chip per accent for the trust strip. */
const TRUST_CHIP: Record<CourseAccent, string> = {
  lime: "bg-gradient-to-br from-lime-500 to-lime-600 shadow-lime-600/30",
  sky: "bg-gradient-to-br from-sky-500 to-sky-600 shadow-sky-600/30",
  gold: "bg-gradient-to-br from-amber-400 to-amber-500 shadow-amber-500/30",
  purple: "bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-600/30",
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ───────────────────────── Motion variants ─────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function fadeUp(reduce: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };
}

/* ──────────────────────────── Card ─────────────────────────────── */

function CourseCard({ course }: { course: Course }) {
  const [showFeatures, setShowFeatures] = useState(false);

  const Icon = course.icon;
  const accent = getCourseAccentClasses(course.accent);
  const panelId = `course-features-${slugify(course.title)}`;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.25rem] border bg-[#F8FAF2] shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[1.5rem] ${accent.border}`}
    >
      {/* Image area */}
      <div className="relative h-24 shrink-0 overflow-hidden sm:h-36 lg:h-44">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Soft bottom fade blending image into ivory content */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAF2] via-[#F8FAF2]/70 to-transparent"
        />

        {/* Icon badge */}
        <div
          className={`absolute left-2.5 top-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-white/70 backdrop-blur-md transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 sm:left-3 sm:top-3 lg:h-[52px] lg:w-[52px] lg:rounded-2xl ${accent.iconColor}`}
        >
          <Icon
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            strokeWidth={1.9}
            aria-hidden="true"
          />
        </div>

        {/* Optional "Most Popular" badge */}
        {course.badge ? (
          <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-lime-300 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.06em] text-emerald-900 shadow-sm sm:right-3 sm:top-3 sm:text-[10px]">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {course.badge}
          </span>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-3 pb-3 pt-1.5 sm:px-4 sm:pb-4 lg:px-5 lg:pb-5">
        <h3 className="line-clamp-2 text-[0.95rem] font-extrabold leading-tight tracking-tight text-[#0B1628] sm:text-lg lg:text-xl">
          {course.title}
        </h3>

        <p
          className={`mt-1 text-[11px] font-bold sm:text-xs lg:text-sm ${accent.audience}`}
        >
          {course.audience}
        </p>

        <span
          aria-hidden="true"
          className={`mt-2 hidden h-0.5 w-7 rounded-full transition-all duration-300 group-hover:w-12 motion-reduce:transition-none lg:block ${accent.bar}`}
        />

        <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-600 sm:text-xs lg:text-sm lg:leading-6">
          {course.description}
        </p>

        {/* Desktop: 2×2 feature grid */}
        <div className="mt-3 hidden grid-cols-2 gap-2 lg:grid">
          {course.highlights.slice(0, 4).map((highlight) => {
            const HighlightIcon = highlight.icon;
            return (
              <span
                key={highlight.label}
                className={`inline-flex min-h-[2.25rem] items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 ${accent.pill}`}
              >
                <HighlightIcon
                  className={`h-3.5 w-3.5 shrink-0 ${accent.pillIcon}`}
                  aria-hidden="true"
                />
                <span className="leading-tight">{highlight.label}</span>
              </span>
            );
          })}
        </div>

        {/* Mobile / tablet: accordion */}
        <div className="mt-3 lg:hidden">
          <button
            type="button"
            onClick={() => setShowFeatures((open) => !open)}
            aria-expanded={showFeatures}
            aria-controls={panelId}
            className={`flex w-full items-center justify-between rounded-lg border px-2.5 py-2 text-[11px] font-bold text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${accent.pill} ${accent.ring}`}
          >
            <span>View Features</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                showFeatures ? "rotate-180" : ""
              } ${accent.pillIcon}`}
              aria-hidden="true"
            />
          </button>

          <div
            id={panelId}
            className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
              showFeatures
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="min-h-0 space-y-1.5">
              {course.highlights.slice(0, 4).map((highlight) => {
                const HighlightIcon = highlight.icon;
                return (
                  <li
                    key={highlight.label}
                    className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[10.5px] font-semibold text-slate-700 ${accent.pill}`}
                  >
                    <HighlightIcon
                      className={`h-3.5 w-3.5 shrink-0 ${accent.pillIcon}`}
                      aria-hidden="true"
                    />
                    <span>{highlight.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CTA — pinned to bottom (aligns across the row on desktop stretch) */}
        <div className="mt-auto pt-4">
          <Link
            href={course.href}
            aria-label={course.exploreLabel}
            className={`group/cta inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl px-3 text-[12px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-sm lg:min-h-[44px] ${accent.cta} ${accent.ring}`}
          >
            <span className="sm:hidden">{course.shortLabel ?? "Explore"}</span>
            <span className="hidden sm:inline">{course.exploreLabel}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ────────────────────────── Sub-sections ───────────────────────── */

function CoursesHeader() {
  const reduce = useReducedMotion();
  const item = fadeUp(Boolean(reduce));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto flex max-w-3xl flex-col items-center text-center"
    >
      <motion.div variants={item} className="mb-3 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-lime-700/40" />
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-lime-700 sm:text-xs">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          Our Programs
        </span>
        <span className="h-px w-8 bg-lime-700/40" />
      </motion.div>

      <motion.h2
        id="courses-heading"
        variants={item}
        className="text-2xl font-extrabold leading-[1.1] tracking-tight text-[#0B1628] sm:text-4xl lg:text-5xl"
      >
        Courses Designed for{" "}
        <span className="text-[#65A30D]">Every Aspiration</span>
      </motion.h2>

      <motion.p
        variants={item}
        className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base"
      >
        Choose the right preparation path for JEE, NEET, Boards, or early
        foundation learning.
      </motion.p>
    </motion.div>
  );
}

function TrustStrip() {
  const reduce = useReducedMotion();
  const item = fadeUp(Boolean(reduce));

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-auto mt-8 max-w-7xl overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white/85 to-lime-50/50 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-lime-700/[0.06] backdrop-blur sm:mt-10 sm:p-6 lg:p-7"
    >
      {/* top accent hairline */}
      <span
        aria-hidden="true"
        className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"
      />
      {/* soft corner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-lime-300/20 blur-3xl"
      />
      

      <div className="relative grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-6">
        {trustItems.map((trust) => {
          const TrustIcon = trust.icon;
          return (
            <div key={trust.title} className="group/trust flex items-center gap-3">
              {/* ✅ SEPARATOR — vertical fading lime line with dot */}
    <div className="relative mr-6 flex h-12 w-px shrink-0 items-center justify-center lg:mr-8">
      <div className="h-full w-px bg-gradient-to-b from-transparent via-lime-400/60 to-transparent" />
      <div className="absolute h-1.5 w-1.5 rounded-full bg-lime-400/80 shadow-[0_0_6px_rgba(132,204,22,0.6)]" />
    </div>
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover/trust:-translate-y-0.5 group-hover/trust:scale-105 motion-reduce:transition-none ${TRUST_CHIP[trust.accent]}`}
              >
                <TrustIcon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-extrabold leading-tight text-[#0B1628] sm:text-sm">
                  {trust.title}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
                  {trust.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────── Section ───────────────────────────── */

export default function CoursesSection() {
  const reduce = useReducedMotion();
  const cardItem = fadeUp(Boolean(reduce));

  return (
    <section
      aria-labelledby="courses-heading"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.18),transparent_30%),radial-gradient(circle_at_88%_28%,rgba(125,211,252,0.12),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F6F9EE_46%,#EEF5DE_100%)] px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* faint dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <CoursesHeader />

        {/* items-start (mobile) prevents a stretched/dead-space sibling when one
            card's accordion opens; lg:items-stretch keeps desktop cards equal. */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-2 items-start gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:items-stretch lg:gap-5"
        >
          {courses.map((course) => (
            <motion.div key={course.title} variants={cardItem}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <TrustStrip />
       
      </div>
     
    </section>
  );
}