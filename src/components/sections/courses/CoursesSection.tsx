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

// "use client";

// /**
//  * CoursesSection — Kota Academy
//  * ---------------------------------------------------------------------------
//  * Full section: heading → 4 course cards → trust strip.
//  *
//  * Accordion / grid note:
//  *   The grid uses `items-start` below lg so an expanded card grows on its own
//  *   instead of stretching its row-mate (which previously left dead space and a
//  *   detached CTA). On lg+ there is no accordion, so `lg:items-stretch` keeps all
//  *   four cards perfectly equal-height with aligned CTAs.
//  *
//  * Stack: Next.js (App Router) · TS · Tailwind · framer-motion · lucide-react ·
//  * next/image · next/link.  Images live in /public/images/courses/.
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
// import SupportStrip from "../SupportStrip";

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
//   accent: CourseAccent;
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
//     accent: "lime",
//   },
//   {
//     title: "Small Batch Size",
//     subtitle: "Personal attention for every student",
//     icon: UsersRound,
//     accent: "sky",
//   },
//   {
//     title: "Regular Tests & Analysis",
//     subtitle: "Track progress. Improve smartly.",
//     icon: LineChart,
//     accent: "gold",
//   },
//   {
//     title: "Doubt Support",
//     subtitle: "We're here whenever you need us",
//     icon: Headphones,
//     accent: "purple",
//   },
// ];

// /* ─────────────────────── Accent class systems ───────────────────── */

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

// /** Gradient icon chip per accent for the trust strip. */
// const TRUST_CHIP: Record<CourseAccent, string> = {
//   lime: "bg-gradient-to-br from-lime-500 to-lime-600 shadow-lime-600/30",
//   sky: "bg-gradient-to-br from-sky-500 to-sky-600 shadow-sky-600/30",
//   gold: "bg-gradient-to-br from-amber-400 to-amber-500 shadow-amber-500/30",
//   purple: "bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-600/30",
// };

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

//         {/* CTA — pinned to bottom (aligns across the row on desktop stretch) */}
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
//       <motion.div variants={item} className="mb-3 inline-flex items-center gap-3">
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
//       className="relative mx-auto mt-8 max-w-7xl overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white/85 to-lime-50/50 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-lime-700/[0.06] backdrop-blur sm:mt-10 sm:p-6 lg:p-7"
//     >
//       {/* top accent hairline */}
//       <span
//         aria-hidden="true"
//         className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"
//       />
//       {/* soft corner glow */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-lime-300/20 blur-3xl"
//       />

//       <div className="relative grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-6">
//         {trustItems.map((trust) => {
//           const TrustIcon = trust.icon;
//           return (
//             <div key={trust.title} className="group/trust flex items-center gap-3">
//               {/* ✅ SEPARATOR — vertical fading lime line with dot */}
//     <div className="relative mr-6 flex h-12 w-px shrink-0 items-center justify-center lg:mr-8">
//       <div className="h-full w-px bg-gradient-to-b from-transparent via-lime-400/60 to-transparent" />
//       <div className="absolute h-1.5 w-1.5 rounded-full bg-lime-400/80 shadow-[0_0_6px_rgba(132,204,22,0.6)]" />
//     </div>
//               <span
//                 className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover/trust:-translate-y-0.5 group-hover/trust:scale-105 motion-reduce:transition-none ${TRUST_CHIP[trust.accent]}`}
//               >
//                 <TrustIcon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
//               </span>
//               <div className="min-w-0">
//                 <p className="text-[13px] font-extrabold leading-tight text-[#0B1628] sm:text-sm">
//                   {trust.title}
//                 </p>
//                 <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
//                   {trust.subtitle}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// /* ─────────────────────────── Section ───────────────────────────── */

// export default function CoursesSection() {
//   const reduce = useReducedMotion();
//   const cardItem = fadeUp(Boolean(reduce));

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

//         {/* items-start (mobile) prevents a stretched/dead-space sibling when one
//             card's accordion opens; lg:items-stretch keeps desktop cards equal. */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           className="mt-8 grid grid-cols-2 items-start gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:items-stretch lg:gap-5"
//         >
//           {courses.map((course) => (
//             <motion.div key={course.title} variants={cardItem}>
//               <CourseCard course={course} />
//             </motion.div>
//           ))}
//         </motion.div>

//         <TrustStrip />

//       </div>

//     </section>
//   );
// }

// "use client";

// /**
//  * CoursesSection — Kota Academy (v2)
//  * ---------------------------------------------------------------------------
//  * Audit rebuild:
//  * · Photo banners removed → branded program header band (navy gradient +
//  *   dot-grid + icon tile). No stock photos, no baked-in text, no asset upkeep.
//  * · ONE CTA color (brand lime gradient) for all programs. Differentiation
//  *   lives in icon, class-range chip, and copy — never the action color.
//  * · Feature pills + mobile accordion → always-visible checklist rows
//  *   (the Why-section pillar language). No hidden selling points.
//  * · "Most Popular" → GOLD badge + breathing lime glow (CARD_GLOW heritage).
//  * · Duplicate trust strip → PROGRAM FINDER band: class → program routing,
//  *   the one thing only this section can do.
//  * · Phones: single-column stack (cards are decision-dense; 2-col crushed them).
//  * · Load-bearing visuals are inline styles (project hardening rule).
//  * ---------------------------------------------------------------------------
//  */

// import Link from "next/link";
// import {
//   ArrowRight,
//   BookOpen,
//   Check,
//   GraduationCap,
//   Sparkles,
//   Stethoscope,
//   Target,
//   type LucideIcon,
// } from "lucide-react";
// import {
//   motion,
//   useReducedMotion,
//   type Variants,
// } from "framer-motion";
// import type { CSSProperties } from "react";

// /* --------------------------------- palette -------------------------------- */

// const NAVY = "#0B1B33";
// const NAVY_SOFT = "#13294B";
// const LIME = "#B5FF3D";
// const GOLD = "#F5B642";
// const GREEN_DEEP = "#3E9A12";
// const EYEBROW_GREEN = "#2F7D17";

// /* ----------------------------------- data ---------------------------------- */

// type Course = {
//   title: string;
//   audience: string;
//   description: string;
//   href: string;
//   icon: LucideIcon;
//   badge?: string;
//   highlights: string[];
//   exploreLabel: string;
// };

// const courses: Course[] = [
//   {
//     title: "JEE Main & Advanced",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Complete JEE preparation with concept clarity, advanced practice, tests & performance tracking.",
//     href: "/courses/jee-main-advanced",
//     icon: Target,
//     badge: "Most Popular",
//     exploreLabel: "Explore JEE Program",
//     highlights: [
//       "Concept-first classes & advanced practice",
//       "Weekly NTA-pattern tests",
//       "Daily doubt support",
//       "Performance tracking & mentoring",
//     ],
//   },
//   {
//     title: "NEET UG Preparation",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Focused NEET preparation with NCERT mastery, regular tests, and expert doubt support.",
//     href: "/courses/neet-ug-preparation",
//     icon: Stethoscope,
//     exploreLabel: "Explore NEET Program",
//     highlights: [
//       "NCERT mastery with Biology focus",
//       "Regular NEET-pattern tests",
//       "Expert doubt support",
//       "Chapter-wise practice sheets",
//     ],
//   },
//   {
//     title: "Class 11–12 Boards",
//     audience: "CBSE / State Board Prep",
//     description:
//       "Strengthen concepts, improve scores, and excel in school and board examinations.",
//     href: "/courses/class-11-12-boards",
//     icon: BookOpen,
//     exploreLabel: "Explore Boards Program",
//     highlights: [
//       "Chapter-wise concept & practice",
//       "Answer-writing training",
//       "Board-pattern test series",
//       "Score improvement tracking",
//     ],
//   },
//   {
//     title: "Class 8–10 Foundation",
//     audience: "Class 8, 9 & 10 Students",
//     description:
//       "Build strong Maths, Science & Reasoning fundamentals to stay ahead for future exams.",
//     href: "/courses/class-8-10-foundation",
//     icon: GraduationCap,
//     exploreLabel: "Explore Foundation Program",
//     highlights: [
//       "Strong Maths & Science basics",
//       "Olympiad & NTSE support",
//       "Regular assessments",
//       "Future-exam readiness",
//     ],
//   },
// ];

// /* program finder — class → program routing (replaces the duplicate trust strip) */
// const finder: { label: string; links: { name: string; href: string }[] }[] = [
//   {
//     label: "Class 8–10",
//     links: [{ name: "Foundation", href: "/courses/class-8-10-foundation" }],
//   },
//   {
//     label: "Class 11–12",
//     links: [
//       { name: "JEE", href: "/courses/jee-main-advanced" },
//       { name: "NEET", href: "/courses/neet-ug-preparation" },
//       { name: "Boards", href: "/courses/class-11-12-boards" },
//     ],
//   },
//   {
//     label: "Dropper",
//     links: [
//       { name: "JEE", href: "/courses/jee-main-advanced" },
//       { name: "NEET", href: "/courses/neet-ug-preparation" },
//     ],
//   },
// ];

// /* --------------------------------- motion ---------------------------------- */

// const EASE = [0.22, 1, 0.36, 1] as const;

// const container: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
// };

// /* ------------------------------ helpers ------------------------------------ */

// const dotGrid = (color: string, size = 20): CSSProperties => ({
//   backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`,
//   backgroundSize: `${size}px ${size}px`,
// });

// /* ================================== card =================================== */

// function CourseCard({ course }: { course: Course }) {
//   const reduce = useReducedMotion();
//   const Icon = course.icon;
//   const popular = Boolean(course.badge);

//   return (
//     <div className="relative h-full">
//       {/* breathing glow — Most Popular only (CARD_GLOW heritage) */}
//       {popular && (
//         <motion.div
//           aria-hidden
//           className="pointer-events-none absolute -inset-1.5 -z-10 rounded-[1.6rem] blur-xl"
//           style={{ background: "rgba(181,255,61,0.28)" }}
//           animate={reduce ? undefined : { opacity: [0.45, 0.85, 0.45], scale: [1, 1.02, 1] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//       )}

//       <article
//         className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] transition-all duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
//         style={{
//           background: "#FFFFFF",
//           border: popular
//             ? "1px solid rgba(95,176,22,0.45)"
//             : "1px solid rgba(11,27,51,0.1)",
//           boxShadow: popular
//             ? "0 18px 44px -18px rgba(95,176,22,0.35)"
//             : "0 10px 30px rgba(15,23,42,0.06)",
//         }}
//       >
//         {/* hover top hairline ignite — site language */}
//         <span
//           aria-hidden
//           className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#B5FF3D]/0 to-transparent transition-all duration-500 group-hover:via-[#B5FF3D]"
//         />

//         {/* ---- program header band (replaces the photo banner) ---- */}
//         <div
//           className="relative flex shrink-0 items-center justify-between gap-2 px-5 py-4"
//           style={{
//             background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)`,
//           }}
//         >
//           <div
//             aria-hidden
//             className="pointer-events-none absolute inset-0"
//             style={{
//               ...dotGrid("rgba(181,255,61,0.16)", 18),
//               maskImage:
//                 "radial-gradient(160px 80px at 85% 30%, #000, transparent 75%)",
//               WebkitMaskImage:
//                 "radial-gradient(160px 80px at 85% 30%, #000, transparent 75%)",
//             }}
//           />

//           <div
//             className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-[14px] transition-all duration-300 group-hover:shadow-[0_8px_20px_-6px_rgba(181,255,61,0.5)]"
//             style={{
//               background: "rgba(181,255,61,0.12)",
//               boxShadow: "inset 0 0 0 1px rgba(181,255,61,0.3)",
//               color: LIME,
//             }}
//           >
//             <Icon className="h-6 w-6" strokeWidth={1.9} aria-hidden />
//           </div>

//           {popular ? (
//             <span
//               className="relative z-10 inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em]"
//               style={{
//                 background: "rgba(245,182,66,0.14)",
//                 color: GOLD,
//                 boxShadow: "inset 0 0 0 1px rgba(245,182,66,0.5)",
//               }}
//             >
//               <Sparkles className="h-3 w-3" aria-hidden />
//               {course.badge}
//             </span>
//           ) : null}
//         </div>

//         {/* ---- body ---- */}
//         <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
//           <h3
//             className="text-lg font-extrabold leading-tight tracking-tight lg:text-[19px]"
//             style={{ color: NAVY }}
//           >
//             {course.title}
//           </h3>

//           {/* class-range chip — the routing data, elevated */}
//           <span
//             className="mt-2.5 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11.5px] font-bold"
//             style={{
//               background: "#EAF7DC",
//               color: "#2C7A12",
//               boxShadow: "inset 0 0 0 1px rgba(95,176,22,0.25)",
//             }}
//           >
//             {course.audience}
//           </span>

//           <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
//             {course.description}
//           </p>

//           <ul
//             className="mt-4 grid gap-2.5 pt-3.5"
//             style={{ borderTop: "1px dashed rgba(11,27,51,0.12)" }}
//           >
//             {course.highlights.map((h) => (
//               <li
//                 key={h}
//                 className="flex items-start gap-2 text-[12.5px] font-medium leading-snug"
//                 style={{ color: NAVY }}
//               >
//                 <Check
//                   className="mt-[2px] h-[15px] w-[15px] flex-none"
//                   style={{ color: "#5FB016" }}
//                   strokeWidth={2.6}
//                   aria-hidden
//                 />
//                 {h}
//               </li>
//             ))}
//           </ul>

//           {/* CTA — one brand style for all programs */}
//           <div className="mt-auto pt-5">
//             <Link
//               href={course.href}
//               aria-label={course.exploreLabel}
//               className="group/cta relative inline-flex min-h-[44px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-3 text-[13.5px] font-bold transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
//               style={{
//                 background: "linear-gradient(180deg, #C8FF55, #8FD92E)",
//                 color: "#13230A",
//                 boxShadow:
//                   "0 0 0 1px rgba(181,255,61,0.45), 0 10px 24px -10px rgba(95,176,22,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
//               }}
//             >
//               <span
//                 aria-hidden
//                 className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover/cta:translate-x-[130%]"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
//                 }}
//               />
//               <span className="relative z-10">{course.exploreLabel}</span>
//               <ArrowRight
//                 className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none"
//                 aria-hidden
//               />
//             </Link>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// }

// /* ================================= header ================================== */

// function CoursesHeader() {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto flex max-w-3xl flex-col items-center text-center"
//     >
//       <motion.div variants={fadeUp} className="mb-3 inline-flex items-center gap-3">
//         <span
//           className="h-px w-8"
//           style={{ background: "rgba(78,148,23,0.45)" }}
//         />
//         <span
//           className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs"
//           style={{ color: EYEBROW_GREEN }}
//         >
//           <GraduationCap className="h-3.5 w-3.5" aria-hidden />
//           Our Programs
//         </span>
//         <span
//           className="h-px w-8"
//           style={{ background: "rgba(78,148,23,0.45)" }}
//         />
//       </motion.div>

//       <motion.h2
//         id="courses-heading"
//         variants={fadeUp}
//         className="text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
//         style={{ color: "#0B1628" }}
//       >
//         Courses Designed for{" "}
//         <span style={{ color: GREEN_DEEP }}>Every Aspiration</span>
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base"
//       >
//         Choose the right preparation path for JEE, NEET, Boards, or early
//         foundation learning.
//       </motion.p>
//     </motion.div>
//   );
// }

// /* ============================ program finder band =========================== */
// /*  Replaces the duplicate trust strip: class → program routing — the one      */
// /*  thing only this section can do. Faculty already owns the trust items.      */

// function ProgramFinder() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="relative mx-auto mt-8 max-w-7xl sm:mt-10"
//     >
//       {/* gradient hairline frame */}
//       <div
//         className="rounded-3xl p-px"
//         style={{
//           background:
//             "linear-gradient(120deg, rgba(181,255,61,0.55), rgba(11,27,51,0.1) 35%, rgba(11,27,51,0.1) 65%, rgba(181,255,61,0.45))",
//         }}
//       >
//         <div
//           className="relative overflow-hidden rounded-[calc(1.5rem-1px)] backdrop-blur-sm"
//           style={{ background: "rgba(255,255,255,0.8)" }}
//         >
//           <span
//             aria-hidden
//             className="pointer-events-none absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(500px 130px at 50% -40%, rgba(181,255,61,0.15), transparent)",
//             }}
//           />

//           <div className="relative z-10 flex flex-col items-center gap-x-8 gap-y-4 px-5 py-5 sm:py-4 lg:flex-row lg:justify-center">
//             <p
//               className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
//               style={{ color: EYEBROW_GREEN }}
//             >
//               Find your path
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
//               {finder.map((seg, i) => (
//                 <div key={seg.label} className="relative flex items-center gap-2.5">
//                   {i > 0 && (
//                     <span
//                       aria-hidden
//                       className="absolute -left-4 hidden h-7 w-px sm:block"
//                       style={{
//                         background:
//                           "linear-gradient(180deg, transparent, rgba(11,27,51,0.18), transparent)",
//                       }}
//                     />
//                   )}
//                   <span
//                     className="text-[12.5px] font-bold"
//                     style={{ color: NAVY }}
//                   >
//                     {seg.label}
//                   </span>
//                   <ArrowRight
//                     className="h-3.5 w-3.5"
//                     style={{ color: "#5FB016" }}
//                     strokeWidth={2.4}
//                     aria-hidden
//                   />
//                   <span className="flex items-center gap-1.5">
//                     {seg.links.map((l) => (
//                       <Link
//                         key={seg.label + l.name}
//                         href={l.href}
//                         className="rounded-full px-2.5 py-1 text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
//                         style={{
//                           background: "#EAF7DC",
//                           color: "#2C7A12",
//                           boxShadow: "inset 0 0 0 1px rgba(95,176,22,0.3)",
//                         }}
//                       >
//                         {l.name}
//                       </Link>
//                     ))}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="#counselling"
//               className="group inline-flex items-center gap-1.5 text-[12.5px] font-bold transition-colors duration-300"
//               style={{ color: NAVY }}
//             >
//               Not sure?{" "}
//               <span style={{ color: "#2C7A12" }}>Book free counselling</span>
//               <ArrowRight
//                 className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
//                 style={{ color: "#5FB016" }}
//                 aria-hidden
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================================= section ================================== */

// export default function CoursesSection() {
//   return (
//     <section
//       aria-labelledby="courses-heading"
//       className="relative overflow-hidden px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
//       style={{
//         background:
//           "radial-gradient(circle at 12% 12%, rgba(190,242,100,0.18), transparent 30%), radial-gradient(circle at 88% 28%, rgba(245,182,66,0.08), transparent 32%), linear-gradient(135deg, #F8FAF2 0%, #F6F9EE 46%, #EEF5DE 100%)",
//       }}
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.12]"
//         style={dotGrid("rgba(15,23,42,0.18)", 24)}
//       />

//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         <CoursesHeader />

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
//         >
//           {courses.map((course) => (
//             <motion.div key={course.title} variants={fadeUp} className="h-full">
//               <CourseCard course={course} />
//             </motion.div>
//           ))}
//         </motion.div>

//         <ProgramFinder />
//       </div>
//     </section>
//   );
// }

"use client";

/**
 * CoursesSection — Kota Academy (v2 redesign)
 * ---------------------------------------------------------------------------
 * Audit fixes vs v1:
 * · Rainbow CTAs (green/blue/brown/purple) → ONE brand CTA (lime gradient).
 *   Program differentiation moved to icons + class-range chips, never color.
 * · Photo banners (mixed art direction, text baked into images) → designed
 *   PROGRAM TILES: navy stage, dot-grid, program icon, ghost glyph, and the
 *   class-range chip promoted to the primary routing element.
 *   (Structure keeps an optional `image` slot — if consistent program
 *   photography arrives later, the navy-graded treatment can slot back in.)
 * · "View Features" accordion → 3 always-visible checklist rows (the site's
 *   pillar-card language). No hidden selling points, no uneven grids.
 * · Trust strip (duplicate of the faculty section's) → PROGRAM FINDER band:
 *   class → program routing links. Serves this section's actual job.
 * · "Most Popular" → gold (#F5B642, achievement color) + breathing glow
 *   (CARD_GLOW heritage), so it never competes with lime CTAs.
 * · Phones: single-column stack (was a 2-col crush).
 * · All load-bearing colors/gradients inline (Tailwind v4 hardening rule).
 * ---------------------------------------------------------------------------
 */

import Link from "next/link";
import {
  ArrowRight,
  Check,
  GraduationCap,
  BookOpen,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* --------------------------------- palette -------------------------------- */

const NAVY = "#0B1B33";
const LIME = "#B5FF3D";
const GREEN_DEEP = "#3E9A12";
const EYEBROW_GREEN = "#2F7D17";

/* ---------------------------------- types ---------------------------------- */

export type Course = {
  id: string;
  title: string;
  audience: string;
  description: string;
  href: string;
  icon: LucideIcon;
  /** optional distinct glyph for the large watermark — use when the tile icon
   *  would read as ring circles at scale (e.g. Target) */
  ghostIcon?: LucideIcon;
  badge?: string;
  /** 3 visible selling points (checklist rows) */
  features: string[];
  exploreLabel: string;
  /** optional — when consistent program photography exists, render it on the
   *  tile with the navy-graded treatment instead of the ghost glyph */
  image?: string;
};

/* ---------------------------------- data ----------------------------------- */

// const courses: Course[] = [
//   {
//     title: "JEE Main & Advanced",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Complete JEE preparation with concept clarity, advanced practice, tests & performance tracking.",
//     href: "/courses/jee-main-advanced",
//     icon: Target,
//     badge: "Most Popular",
//     exploreLabel: "Explore JEE Program",
//     highlights: [
// "Concept-first classes & advanced practice",
// "Weekly NTA-pattern tests",
// "Daily doubt support",
// "Performance tracking & mentoring",
//     ],
//   },
//   {
//     title: "NEET UG Preparation",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Focused NEET preparation with NCERT mastery, regular tests, and expert doubt support.",
//     href: "/courses/neet-ug-preparation",
//     icon: Stethoscope,
//     exploreLabel: "Explore NEET Program",
//     highlights: [
// "NCERT mastery with Biology focus",
// "Regular NEET-pattern tests",
// "Expert doubt support",
// "Chapter-wise practice sheets",
//     ],
//   },
//   {
//     title: "Class 11–12 Boards",
//     audience: "CBSE / State Board Prep",
//     description:
//       "Strengthen concepts, improve scores, and excel in school and board examinations.",
//     href: "/courses/class-11-12-boards",
//     icon: BookOpen,
//     exploreLabel: "Explore Boards Program",
//     highlights: [
// "Chapter-wise concept & practice",
// "Answer-writing training",
// "Board-pattern test series",
// "Score improvement tracking",
//     ],
//   },
//   {
//     title: "Class 8–10 Foundation",
//     audience: "Class 8, 9 & 10 Students",
//     description:
//       "Build strong Maths, Science & Reasoning fundamentals to stay ahead for future exams.",
//     href: "/courses/class-8-10-foundation",
//     icon: GraduationCap,
//     exploreLabel: "Explore Foundation Program",
//     highlights: [
//       "Strong Maths & Science basics",
//       "Olympiad & NTSE support",
//       "Regular assessments",
//       "Future-exam readiness",
//     ],
//   },
// ];

/* program finder — class → program routing (replaces the duplicate trust strip) */
const finder: { label: string; links: { name: string; href: string }[] }[] = [
  {
    label: "Class 8–10",
    links: [{ name: "Foundation", href: "/courses/class-8-10-foundation" }],
  },
  {
    label: "Class 11–12",
    links: [
      { name: "JEE", href: "/courses/jee-main-advanced" },
      { name: "NEET", href: "/courses/neet-ug-preparation" },
      { name: "Boards", href: "/courses/class-11-12-boards" },
    ],
  },
  {
    label: "Dropper",
    links: [
      { name: "JEE", href: "/courses/jee-main-advanced" },
      { name: "NEET", href: "/courses/neet-ug-preparation" },
    ],
  },
];

const courses: Course[] = [
  {
    id: "jee",
    title: "JEE Main & Advanced",
    audience: "Class 11–12 + Droppers",
    description:
      "Complete JEE preparation with concept clarity, advanced practice, and performance tracking.",
    href: "/courses/jee-main-advanced",
    icon: Target,
    ghostIcon: TrendingUp,
    badge: "Most Popular",
    exploreLabel: "Explore JEE Program",
    features: [
      "Concept-first classes & advanced practice",
      "Weekly NTA-pattern tests",
      "Daily doubt support",
      "Performance tracking & mentoring",
    ],
  },
  {
    id: "neet",
    title: "NEET UG Preparation",
    audience: "Class 11–12 + Droppers",
    description:
      "Focused NEET preparation with NCERT mastery, regular testing, and expert doubt support.",
    href: "/courses/neet-ug-preparation",
    icon: Stethoscope,
    exploreLabel: "Explore NEET Program",
    features: [
      "NCERT mastery with Biology focus",
      "Regular NEET-pattern tests",
      "Expert doubt support",
      "Chapter-wise practice sheets",
    ],
  },
  {
    id: "boards",
    title: "Class 11–12 Boards",
    audience: "CBSE / State Boards",
    description:
      "Strengthen concepts, improve scores, and excel in school and board examinations.",
    href: "/courses/class-11-12-boards",
    icon: BookOpen,
    exploreLabel: "Explore Boards Program",
    features: [
      "Chapter-wise concept & practice",
      "Answer-writing training",
      "Board-pattern test series",
      "Score improvement tracking",
    ],
  },
  {
    id: "foundation",
    title: "Class 8–10 Foundation",
    audience: "Class 8, 9 & 10",
    description:
      "Build strong Maths, Science & Reasoning fundamentals to stay ahead for future exams.",
    href: "/courses/class-8-10-foundation",
    icon: GraduationCap,
    exploreLabel: "Explore Foundation Program",
    features: [
      "Strong Maths & Science basics",
      "Olympiad & NTSE support",
      "Regular assessments",
      "Future-exam readiness",
    ],
  },
];

/* class → program routing (replaces the duplicated trust strip) */
// const finder: { who: string; targets: { label: string; href: string }[] }[] = [
//   {
//     who: "Class 8–10",
//     targets: [{ label: "Foundation", href: "/courses/class-8-10-foundation" }],
//   },
//   {
//     who: "Class 11–12",
//     targets: [
//       { label: "JEE", href: "/courses/jee-main-advanced" },
//       { label: "NEET", href: "/courses/neet-ug-preparation" },
//       { label: "Boards", href: "/courses/class-11-12-boards" },
//     ],
//   },
//   {
//     who: "Droppers",
//     targets: [
//       { label: "JEE", href: "/courses/jee-main-advanced" },
//       { label: "NEET", href: "/courses/neet-ug-preparation" },
//     ],
//   },
// ];

/* --------------------------------- motion ---------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ================================== card =================================== */

function CourseCard({ course }: { course: Course }) {
  const reduce = useReducedMotion();
  const Icon = course.icon;
  const Ghost = course.ghostIcon ?? course.icon;
  const popular = Boolean(course.badge);

  return (
    <motion.article
      variants={fadeUp}
      /* breathing glow on the Most Popular card — CARD_GLOW heritage */
      animate={
        popular && !reduce
          ? {
              boxShadow: [
                "0 10px 30px rgba(15,23,42,0.06), 0 0 0px rgba(245,182,66,0)",
                "0 10px 30px rgba(15,23,42,0.06), 0 0 34px rgba(245,182,66,0.22)",
                "0 10px 30px rgba(15,23,42,0.06), 0 0 0px rgba(245,182,66,0)",
              ],
            }
          : undefined
      }
      transition={
        popular
          ? { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5"
      style={{
        background: "#FFFFFF",
        border: popular
          ? "1px solid rgba(245,182,66,0.45)"
          : "1px solid rgba(11,27,51,0.1)",
        boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
      }}
    >
      {/* top hairline that ignites lime on hover — site card language */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${LIME}, transparent)`,
        }}
      />

      {/* ---------- program tile (the card's identity block) ---------- */}
      <div
        className="relative shrink-0 overflow-hidden px-5 pb-4 pt-5"
        style={{
          background: `radial-gradient(circle at 82% 18%, rgba(181,255,61,0.16), transparent 50%), linear-gradient(135deg, ${NAVY} 0%, #13294B 100%)`,
        }}
      >
        {/* dot-grid texture */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(181,255,61,0.22) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage: "linear-gradient(120deg, transparent 35%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(120deg, transparent 35%, #000 100%)",
          }}
        />
        {/* ghost watermark — Ghost glyph, never ring-like at scale */}
        <Ghost
          aria-hidden
          className="absolute -bottom-8 -right-6 h-36 w-36 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]"
          strokeWidth={1.2}
          style={{ color: "rgba(181,255,61,0.13)" }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-2">
            {/* icon tile */}
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-[0_8px_20px_-6px_rgba(95,176,22,0.6)]"
              style={{
                background: "rgba(181,255,61,0.12)",
                boxShadow: "inset 0 0 0 1px rgba(181,255,61,0.3)",
              }}
            >
              <Icon
                className="h-[22px] w-[22px]"
                strokeWidth={1.9}
                style={{ color: LIME }}
                aria-hidden
              />
            </div>

            {/* Most Popular — gold, never competing with lime CTAs */}
            {course.badge ? (
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em]"
                style={{
                  background: "linear-gradient(145deg, #FFD37A, #E8A52E)",
                  color: "#2A1D04",
                  boxShadow: "0 6px 16px -4px rgba(245,182,66,0.55)",
                }}
              >
                <Sparkles className="h-3 w-3" aria-hidden />
                {course.badge}
              </span>
            ) : null}
          </div>

          {/* title lives on the tile — the stage always has a job */}
          <h3 className="mt-4 text-lg font-extrabold leading-tight tracking-tight text-white sm:text-[20px]">
            {course.title}
          </h3>

          {/* class-range chip — the routing element */}
          <span
            className="mt-2.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold"
            style={{
              background: "rgba(181,255,61,0.94)",
              color: "#13230A",
              boxShadow: "0 6px 18px -6px rgba(181,255,61,0.6)",
            }}
          >
            {course.audience}
          </span>
        </div>
      </div>

      {/* ------------------------------- body ------------------------------- */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-[13px] leading-relaxed text-slate-600">
          {course.description}
        </p>

        {/* checklist — always visible, no accordion */}
        <ul
          className="mt-4 grid gap-2 border-t border-dashed pt-3.5"
          style={{ borderColor: "rgba(11,27,51,0.1)" }}
        >
          {course.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-[13px] font-medium leading-snug"
              style={{ color: NAVY }}
            >
              <Check
                className="mt-[2px] h-[15px] w-[15px] flex-none"
                strokeWidth={2.6}
                style={{ color: "#5FB016" }}
                aria-hidden
              />
              {f}
            </li>
          ))}
        </ul>

        {/* single brand CTA — identical treatment on every card */}
        <div className="mt-auto pt-5">
          <Link
            href={course.href}
            aria-label={course.exploreLabel}
            className="group/cta relative inline-flex min-h-[44px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 text-[13.5px] font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background:
                "linear-gradient(135deg, #C8FF55 0%, #8FE021 55%, #5FB016 100%)",
              color: "#13230A",
              boxShadow:
                "0 12px 26px -10px rgba(120,200,30,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover/cta:translate-x-[130%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
              }}
            />
            <span className="relative z-10">{course.exploreLabel}</span>
            <ArrowRight
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ================================ header =================================== */

function CoursesHeader() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto flex max-w-3xl flex-col items-center text-center"
    >
      <motion.div
        variants={fadeUp}
        className="mb-3 inline-flex items-center gap-3"
      >
        <span
          className="h-px w-8"
          style={{ background: "rgba(78,148,23,0.45)" }}
        />
        <span
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs"
          style={{ color: EYEBROW_GREEN }}
        >
          <GraduationCap className="h-3.5 w-3.5" aria-hidden />
          Our Programs
        </span>
        <span
          className="h-px w-8"
          style={{ background: "rgba(78,148,23,0.45)" }}
        />
      </motion.div>

      <motion.h2
        id="courses-heading"
        variants={fadeUp}
        className="text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
        style={{ color: "#0B1628" }}
      >
        Courses Designed for{" "}
        <span style={{ color: GREEN_DEEP }}>Every Aspiration</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base"
      >
        Choose the right preparation path for JEE, NEET, Boards, or early
        foundation learning.
      </motion.p>
    </motion.div>
  );
}

/* ============================ program finder =============================== */
/*  Replaces the trust strip (which duplicated the faculty section's items).  */
/*  This is routing UI: class → program, every target is a link.              */

// function ProgramFinder() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="relative mx-auto mt-8 max-w-7xl sm:mt-10"
//     >
//       {/* gradient hairline frame — system language */}
//       <div
//         className="rounded-3xl p-px"
//         style={{
//           background:
//             "linear-gradient(120deg, rgba(181,255,61,0.55), rgba(11,27,51,0.1) 35%, rgba(11,27,51,0.1) 65%, rgba(181,255,61,0.45))",
//         }}
//       >
//         <div
//           className="relative overflow-hidden rounded-[calc(1.5rem-1px)] backdrop-blur-sm"
//           style={{ background: "rgba(255,255,255,0.8)" }}
//         >
//           <span
//             aria-hidden
//             className="pointer-events-none absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(520px 130px at 50% -35%, rgba(181,255,61,0.15), transparent)",
//             }}
//           />

//           <div className="relative z-10 flex flex-col gap-4 px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:gap-8 lg:py-5">
//             {/* label */}
//             <div className="flex shrink-0 items-center gap-2.5">
//               <span
//                 className="flex h-9 w-9 items-center justify-center rounded-xl"
//                 style={{
//                   background: "#EAF7DC",
//                   color: "#2C7A12",
//                   boxShadow: "inset 0 0 0 1px rgba(95,176,22,0.3)",
//                 }}
//               >
//                 <Compass className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
//               </span>
//               <span
//                 className="text-[13.5px] font-extrabold tracking-tight"
//                 style={{ color: NAVY }}
//               >
//                 Find your path
//               </span>
//             </div>

//             {/* routes */}
//             <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
//               {finder.map((row, i) => (
//                 <div key={row.who} className="relative flex items-center gap-2.5">
//                   {/* gradient separator between groups (sm+) */}
//                   {i > 0 && (
//                     <span
//                       aria-hidden
//                       className="absolute -left-4 top-1/2 hidden h-7 w-px -translate-y-1/2 sm:block"
//                       style={{
//                         background:
//                           "linear-gradient(180deg, transparent, rgba(11,27,51,0.15), transparent)",
//                       }}
//                     />
//                   )}
//                   <span className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-slate-500">
//                     {row.who}
//                   </span>
//                   <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />
//                   <span className="flex flex-wrap gap-1.5">
//                     {row.targets.map((t) => (
//                       <Link
//                         key={t.label}
//                         href={t.href}
//                         className="rounded-full px-3 py-1.5 text-[12.5px] font-bold transition-all duration-200 hover:-translate-y-0.5"
//                         style={{
//                           background: "rgba(181,255,61,0.18)",
//                           color: "#2C5A0E",
//                           boxShadow: "inset 0 0 0 1px rgba(95,176,22,0.3)",
//                         }}
//                       >
//                         {t.label}
//                       </Link>
//                     ))}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

function ProgramFinder() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-auto mt-8 max-w-7xl sm:mt-10"
    >
      {/* gradient hairline frame */}
      <div
        className="rounded-3xl p-px"
        style={{
          background:
            "linear-gradient(120deg, rgba(181,255,61,0.55), rgba(11,27,51,0.1) 35%, rgba(11,27,51,0.1) 65%, rgba(181,255,61,0.45))",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[calc(1.5rem-1px)] backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.8)" }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(500px 130px at 50% -40%, rgba(181,255,61,0.15), transparent)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-x-8 gap-y-4 px-5 py-5 sm:py-4 lg:flex-row lg:justify-center">
            <p
              className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
              style={{ color: EYEBROW_GREEN }}
            >
              Find your path
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {finder.map((seg, i) => (
                <div
                  key={seg.label}
                  className="relative flex items-center gap-2.5"
                >
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="absolute -left-4 hidden h-7 w-px sm:block"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent, rgba(11,27,51,0.18), transparent)",
                      }}
                    />
                  )}
                  <span
                    className="text-[12.5px] font-bold"
                    style={{ color: NAVY }}
                  >
                    {seg.label}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5"
                    style={{ color: "#5FB016" }}
                    strokeWidth={2.4}
                    aria-hidden
                  />
                  <span className="flex items-center gap-1.5">
                    {seg.links.map((l) => (
                      <Link
                        key={seg.label + l.name}
                        href={l.href}
                        className="rounded-full px-2.5 py-1 text-[12px] font-bold transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: "#EAF7DC",
                          color: "#2C7A12",
                          boxShadow: "inset 0 0 0 1px rgba(95,176,22,0.3)",
                        }}
                      >
                        {l.name}
                      </Link>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#counselling"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-bold transition-colors duration-300"
              style={{ color: NAVY }}
            >
              Not sure?{" "}
              <span style={{ color: "#2C7A12" }}>Book free counselling</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ color: "#5FB016" }}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
/* ================================ section ================================== */

export default function CoursesSection() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{
        background:
          "radial-gradient(circle at 12% 12%, rgba(190,242,100,0.18), transparent 30%), radial-gradient(circle at 88% 28%, rgba(245,182,66,0.08), transparent 32%), linear-gradient(135deg, #F8FAF2 0%, #F6F9EE 46%, #EEF5DE 100%)",
      }}
    >
      {/* faint dotted texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <CoursesHeader />

        {/* 1-col phones · 2-col tablets · 4-col desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 xl:gap-5"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>

        <ProgramFinder />
      </div>
    </section>
  );
}
