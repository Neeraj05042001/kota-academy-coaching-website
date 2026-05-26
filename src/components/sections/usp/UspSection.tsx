// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   Award,
//   Bell,
//   BookOpen,
//   CalendarCheck,
//   GraduationCap,
//   MessageCircleQuestion,
//   ShieldCheck,
//   Target,
//   Trophy,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";
// import { motion, useReducedMotion, type Variants } from "framer-motion";

// type UspAccent = "lime" | "sky" | "amber" | "coral";

// type UspItem = {
//   number: string;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   accent: UspAccent;
// };

// type TrustItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
// };

// const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

// const uspItems: UspItem[] = [
//   {
//     number: "01",
//     title: "Small Batches",
//     description:
//       "Max 30 students per batch, so every student gets attention and every doubt gets answered.",
//     icon: UsersRound,
//     accent: "lime",
//   },
//   {
//     number: "02",
//     title: "IITian Faculty",
//     description:
//       "Taught by IIT / NIT / AIIMS alumni who have cracked the exams themselves.",
//     icon: Award,
//     accent: "sky",
//   },
//   {
//     number: "03",
//     title: "NTA-Pattern Tests",
//     description:
//       "Weekly tests with exam-pattern questions and detailed performance reports.",
//     icon: CalendarCheck,
//     accent: "lime",
//   },
//   {
//     number: "04",
//     title: "Personalised Plan",
//     description:
//       "Student-specific study plan and timetable from the first week.",
//     icon: Target,
//     accent: "sky",
//   },
//   {
//     number: "05",
//     title: "Daily Doubt Sessions",
//     description:
//       "Face-to-face doubt clearing so students never stay stuck for long.",
//     icon: MessageCircleQuestion,
//     accent: "sky",
//   },
//   {
//     number: "06",
//     title: "Parent Updates",
//     description:
//       "Monthly PTMs and WhatsApp progress updates keep parents informed.",
//     icon: Bell,
//     accent: "amber",
//   },
//   {
//     number: "07",
//     title: "Premium Study Material",
//     description:
//       "Kota-quality notes, assignments, and question banks included.",
//     icon: BookOpen,
//     accent: "lime",
//   },
//   {
//     number: "08",
//     title: "Scholarship Tests",
//     description:
//       "Up to 50% fee waiver for qualifying students through scholarship tests.",
//     icon: Trophy,
//     accent: "coral",
//   },
// ];

// const trustItems: TrustItem[] = [
//   {
//     title: "Proven Results",
//     description: "Consistent rank improvement year on year.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Mentorship Beyond Class",
//     description: "Guidance for academics, career and beyond.",
//     icon: UsersRound,
//   },
//   {
//     title: "Accountability System",
//     description: "Tracking, feedback and continuous improvement.",
//     icon: Target,
//   },
//   {
//     title: "Trusted by Parents",
//     description: "Thousands of families trust Kota Academy.",
//     icon: Award,
//   },
// ];

// function createFadeUpVariants(reduceMotion: boolean): Variants {
//   return {
//     hidden: {
//       opacity: 0,
//       y: reduceMotion ? 0 : 18,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.55,
//         ease: EASE_OUT_QUINT,
//       },
//     },
//   };
// }

// function createCardVariants(reduceMotion: boolean): Variants {
//   return {
//     hidden: {
//       opacity: 0,
//       y: reduceMotion ? 0 : 20,
//       scale: reduceMotion ? 1 : 0.98,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.55,
//         ease: EASE_OUT_QUINT,
//       },
//     },
//   };
// }

// const staggerContainer: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.065,
//     },
//   },
// };

// function getAccentClasses(accent: UspAccent) {
//   if (accent === "sky") {
//     return {
//       card:
//         "border-sky-300/50 bg-[linear-gradient(135deg,rgba(239,248,255,0.82),rgba(255,255,255,0.88))] hover:border-sky-400/75",
//       icon:
//         "bg-sky-100 text-sky-700 ring-sky-300/45 shadow-sky-200/60",
//       iconGlow: "bg-sky-300/18",
//       number: "text-sky-600",
//       line: "bg-sky-500",
//       hoverShadow: "hover:shadow-[0_20px_54px_rgba(14,165,233,0.14)]",
//       mobileCard:
//         "border-sky-300/55 bg-[linear-gradient(135deg,rgba(239,248,255,0.86),rgba(255,255,255,0.92))]",
//       mobileDivider: "bg-sky-300/45",
//       ring: "ring-sky-400/35",
//     };
//   }

//   if (accent === "amber") {
//     return {
//       card:
//         "border-amber-300/50 bg-[linear-gradient(135deg,rgba(255,251,235,0.82),rgba(255,255,255,0.88))] hover:border-amber-400/75",
//       icon:
//         "bg-amber-100 text-amber-600 ring-amber-300/45 shadow-amber-200/60",
//       iconGlow: "bg-amber-300/18",
//       number: "text-amber-600",
//       line: "bg-amber-500",
//       hoverShadow: "hover:shadow-[0_20px_54px_rgba(245,158,11,0.13)]",
//       mobileCard:
//         "border-amber-300/55 bg-[linear-gradient(135deg,rgba(255,251,235,0.86),rgba(255,255,255,0.92))]",
//       mobileDivider: "bg-amber-300/45",
//       ring: "ring-amber-400/35",
//     };
//   }

//   if (accent === "coral") {
//     return {
//       card:
//         "border-red-300/45 bg-[linear-gradient(135deg,rgba(255,241,242,0.78),rgba(255,255,255,0.9))] hover:border-red-400/70",
//       icon:
//         "bg-red-100 text-red-500 ring-red-300/40 shadow-red-200/55",
//       iconGlow: "bg-red-300/14",
//       number: "text-red-500",
//       line: "bg-red-400",
//       hoverShadow: "hover:shadow-[0_20px_54px_rgba(248,113,113,0.12)]",
//       mobileCard:
//         "border-red-300/45 bg-[linear-gradient(135deg,rgba(255,241,242,0.82),rgba(255,255,255,0.92))]",
//       mobileDivider: "bg-red-300/40",
//       ring: "ring-red-400/30",
//     };
//   }

//   return {
//     card:
//       "border-lime-300/55 bg-[linear-gradient(135deg,rgba(247,252,232,0.84),rgba(255,255,255,0.9))] hover:border-lime-400/80",
//     icon:
//       "bg-lime-100 text-lime-700 ring-lime-300/45 shadow-lime-200/60",
//     iconGlow: "bg-lime-300/18",
//     number: "text-lime-700",
//     line: "bg-lime-500",
//     hoverShadow: "hover:shadow-[0_20px_54px_rgba(132,204,22,0.14)]",
//     mobileCard:
//       "border-lime-300/55 bg-[linear-gradient(135deg,rgba(247,252,232,0.88),rgba(255,255,255,0.92))]",
//     mobileDivider: "bg-lime-300/45",
//     ring: "ring-lime-400/35",
//   };
// }

// function UspBackground() {
//   return (
//     <>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.42]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),transparent_68%)]"
//       />

//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-44 top-10 h-[520px] w-[520px] rounded-full bg-lime-300/20 blur-[130px]"
//         animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-44 bottom-0 h-[460px] w-[460px] rounded-full bg-sky-300/16 blur-[120px]"
//         animate={{ scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] }}
//         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-6 top-20 hidden h-40 w-28 opacity-55 sm:block"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(148,163,184,0.34) 1.5px, transparent 1.5px)",
//           backgroundSize: "18px 18px",
//           maskImage:
//             "linear-gradient(to bottom, transparent, black 25%, black 72%, transparent)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, transparent, black 25%, black 72%, transparent)",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-8 top-28 hidden h-32 w-32 opacity-70 lg:block"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(190,242,100,0.76) 2px, transparent 2px)",
//           backgroundSize: "18px 18px",
//           maskImage:
//             "radial-gradient(circle at center, black 0%, black 45%, transparent 76%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black 0%, black 45%, transparent 76%)",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-10 left-0 hidden h-52 w-52 rounded-full border border-sky-300/20 lg:block"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-20 left-10 hidden h-72 w-72 rounded-full border border-sky-300/12 lg:block"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-28 top-0 hidden h-96 w-96 rounded-full border border-lime-300/12 lg:block"
//       />
//     </>
//   );
// }

// function UspHeader() {
//   const reduceMotion = useReducedMotion();
//   const fadeUp = createFadeUpVariants(Boolean(reduceMotion));

//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.5 }}
//       className="mx-auto max-w-5xl text-center"
//     >
//       <motion.div
//         variants={fadeUp}
//         className="mb-4 inline-flex items-center justify-center gap-3"
//       >
//         <span className="h-px w-10 bg-lime-700/40" />
//         <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-xs">
//           Why Kota Academy
//         </span>
//         <span className="h-px w-10 bg-lime-700/40" />
//       </motion.div>

//       <motion.h2
//         variants={fadeUp}
//         id="usp-heading"
//         className="mx-auto max-w-5xl text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-[#071427] sm:text-5xl lg:text-[4.25rem]"
//       >
//         <span className="block">Why Kota Academy</span>
//         <span className="relative inline-block">
//           Works Differently
//           <svg
//             aria-hidden="true"
//             viewBox="0 0 320 24"
//             className="absolute -bottom-3 left-1/2 h-5 w-[105%] -translate-x-1/2 text-lime-500"
//             fill="none"
//           >
//             <path
//               d="M8 15C62 5 113 5 160 14C206 22 258 20 312 9"
//               stroke="currentColor"
//               strokeWidth="5"
//               strokeLinecap="round"
//               opacity="0.78"
//             />
//           </svg>
//         </span>
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         className="mx-auto mt-7 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7"
//       >
//         A structured academic system where every class, test, doubt session,
//         and parent update is designed to move students forward.
//       </motion.p>
//     </motion.div>
//   );
// }

// function DesktopUspCard({ item }: { item: UspItem }) {
//   const Icon = item.icon;
//   const accent = getAccentClasses(item.accent);
//   const reduceMotion = useReducedMotion();
//   const cardVariants = createCardVariants(Boolean(reduceMotion));

//   return (
//     <motion.article
//       variants={cardVariants}
//       whileHover={
//         reduceMotion
//           ? undefined
//           : {
//               y: -4,
//               scale: 1.01,
//               transition: { duration: 0.28, ease: EASE_OUT_QUINT },
//             }
//       }
//       className={`group relative hidden min-h-[13.25rem] overflow-hidden rounded-[1.55rem] border p-4 shadow-[0_14px_40px_rgba(15,23,42,0.065)] backdrop-blur-xl transition-all duration-300 md:block ${accent.card} ${accent.hoverShadow}`}
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.86),transparent_34%)]"
//       />

//       <div
//         aria-hidden="true"
//         className={`pointer-events-none absolute inset-0 rounded-[1.55rem] opacity-0 ring-1 transition-opacity duration-500 group-hover:opacity-100 ${accent.ring}`}
//       />

//       <span
//         aria-hidden="true"
//         className={`absolute right-4 top-3 text-[2.4rem] font-extrabold leading-none tracking-tight ${accent.number} opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]`}
//       >
//         {item.number}
//       </span>

//       <div className="relative z-10 flex h-full flex-col">
//         <div className="flex items-center gap-3 pr-12">
//           <div className="relative shrink-0">
//             <div
//               aria-hidden="true"
//               className={`absolute inset-0 rounded-full blur-xl ${accent.iconGlow}`}
//             />
//             <div
//               className={`relative flex h-11 w-11 items-center justify-center rounded-2xl ring-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 ${accent.icon}`}
//             >
//               <Icon className="h-5.5 w-5.5" strokeWidth={2} aria-hidden="true" />
//             </div>
//           </div>

//           <h3 className="text-lg font-extrabold leading-tight tracking-tight text-[#071427]">
//             {item.title}
//           </h3>
//         </div>

//         <div
//           className={`mt-4 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16 ${accent.line}`}
//         />

//         <p className="mt-4 text-sm leading-6 text-slate-700">
//           {item.description}
//         </p>
//       </div>
//     </motion.article>
//   );
// }

// function MobileFeaturedCard({ item }: { item: UspItem }) {
//   const Icon = item.icon;
//   const accent = getAccentClasses(item.accent);
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.article
//       variants={createCardVariants(Boolean(reduceMotion))}
//       className={`relative overflow-hidden rounded-[1.5rem] border p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] md:hidden ${accent.mobileCard}`}
//     >
//       <div className="flex items-center gap-4">
//         <div
//           className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-xl ${accent.icon}`}
//         >
//           <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
//         </div>

//         <div>
//           <h3 className="text-xl font-extrabold tracking-tight text-[#071427]">
//             {item.title}
//           </h3>
//           <p className="mt-1 text-sm leading-6 text-slate-700">
//             {item.description}
//           </p>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// function MobileUspRow({ item }: { item: UspItem }) {
//   const Icon = item.icon;
//   const accent = getAccentClasses(item.accent);
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       variants={createCardVariants(Boolean(reduceMotion))}
//       whileTap={reduceMotion ? undefined : { scale: 0.99 }}
//       className={`group flex items-center gap-3 rounded-[1.25rem] border p-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 md:hidden ${accent.mobileCard}`}
//     >
//       <div
//         className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 ${accent.icon}`}
//       >
//         <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
//       </div>

//       <div className={`h-10 w-px shrink-0 ${accent.mobileDivider}`} />

//       <div className="min-w-0 flex-1">
//         <h3 className="text-sm font-extrabold text-[#071427]">{item.title}</h3>
//         <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-slate-600">
//           {item.description}
//         </p>
//       </div>

//       <ArrowRight
//         className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-slate-600"
//         aria-hidden="true"
//       />
//     </motion.div>
//   );
// }

// function UspGrid() {
//   return (
//     <>
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.22 }}
//         className="mx-auto mt-10 hidden w-full max-w-6xl grid-cols-2 gap-4 md:grid xl:grid-cols-4 xl:gap-5"
//       >
//         {uspItems.map((item) => (
//           <DesktopUspCard key={item.title} item={item} />
//         ))}
//       </motion.div>

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.15 }}
//         className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 md:hidden"
//       >
//         <MobileFeaturedCard item={uspItems[0]} />
//         {uspItems.slice(1).map((item) => (
//           <MobileUspRow key={item.title} item={item} />
//         ))}
//       </motion.div>
//     </>
//   );
// }

// function TrustStrip() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       variants={createCardVariants(Boolean(reduceMotion))}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       className="mx-auto mt-8 hidden w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/58 shadow-[0_18px_52px_rgba(15,23,42,0.07)] backdrop-blur-xl md:block"
//     >
//       <div className="grid grid-cols-2 divide-x-0 divide-y divide-slate-200/70 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
//         {trustItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.title}
//               className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-white/55"
//             >
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-lime-700 shadow-[0_10px_28px_rgba(15,23,42,0.075)] ring-1 ring-slate-200/90 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
//                 <Icon className="h-5.5 w-5.5" strokeWidth={2} aria-hidden="true" />
//               </div>

//               <div>
//                 <h3 className="text-sm font-extrabold text-[#071427]">
//                   {item.title}
//                 </h3>
//                 <p className="mt-1 text-xs leading-5 text-slate-600">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// function MobileBottomCTA() {
//   return (
//     <div className="mx-auto mt-6 flex max-w-xl justify-center md:hidden">
//       <Link
//         href="/contact"
//         className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#071427] px-5 py-3 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition-all duration-300 active:scale-[0.98]"
//       >
//         Talk to a Counsellor
//         <ArrowRight
//           className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//           aria-hidden="true"
//         />
//       </Link>
//     </div>
//   );
// }

// export default function UspSection() {
//   return (
//     <section
//       aria-labelledby="usp-heading"
//       className="relative overflow-hidden bg-[linear-gradient(135deg,#FAFCF5_0%,#F8FAF0_44%,#EEF7E8_100%)] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
//     >
//       <UspBackground />

//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         <UspHeader />
//         <UspGrid />
//         <TrustStrip />
//         <MobileBottomCTA />
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  CalendarCheck,
  MessageCircleQuestion,
  ShieldCheck,
  Target,
  Trophy,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type UspAccent = "lime" | "sky" | "amber" | "coral";

type UspItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: UspAccent;
};

type TrustItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

const uspItems: UspItem[] = [
  {
    number: "01",
    title: "Small Batches",
    description:
      "Max 30 students per batch, so every student gets attention and every doubt gets answered.",
    icon: UsersRound,
    accent: "lime",
  },
  {
    number: "02",
    title: "IITian Faculty",
    description:
      "Taught by IIT / NIT / AIIMS alumni who have cracked the exams themselves.",
    icon: Award,
    accent: "sky",
  },
  {
    number: "03",
    title: "NTA-Pattern Tests",
    description:
      "Weekly tests with exam-pattern questions and detailed performance reports.",
    icon: CalendarCheck,
    accent: "lime",
  },
  {
    number: "04",
    title: "Personalised Plan",
    description:
      "Student-specific study plan and timetable from the first week.",
    icon: Target,
    accent: "sky",
  },
  {
    number: "05",
    title: "Daily Doubt Sessions",
    description:
      "Face-to-face doubt clearing so students never stay stuck for long.",
    icon: MessageCircleQuestion,
    accent: "sky",
  },
  {
    number: "06",
    title: "Parent Updates",
    description:
      "Monthly PTMs and WhatsApp progress updates keep parents informed.",
    icon: Bell,
    accent: "amber",
  },
  {
    number: "07",
    title: "Premium Study Material",
    description:
      "Kota-quality notes, assignments, and question banks included.",
    icon: BookOpen,
    accent: "lime",
  },
  {
    number: "08",
    title: "Scholarship Tests",
    description:
      "Up to 50% fee waiver for qualifying students through scholarship tests.",
    icon: Trophy,
    accent: "coral",
  },
];

const trustItems: TrustItem[] = [
  {
    title: "Proven Results",
    description: "Consistent rank improvement year on year.",
    icon: ShieldCheck,
  },
  {
    title: "Mentorship Beyond Class",
    description: "Guidance for academics, career and beyond.",
    icon: UsersRound,
  },
  {
    title: "Accountability System",
    description: "Tracking, feedback and continuous improvement.",
    icon: Target,
  },
  {
    title: "Trusted by Parents",
    description: "Thousands of families trust Kota Academy.",
    icon: Award,
  },
];

function createFadeUpVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: EASE_OUT_QUINT,
      },
    },
  };
}

function createCardVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
      scale: reduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.52,
        ease: EASE_OUT_QUINT,
      },
    },
  };
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

function getAccentClasses(accent: UspAccent) {
  if (accent === "sky") {
    return {
      card: "border-sky-300/50 bg-[linear-gradient(135deg,rgba(239,248,255,0.82),rgba(255,255,255,0.88))] hover:border-sky-400/75",
      icon: "bg-sky-100 text-sky-700 ring-sky-300/45 shadow-sky-200/60",
      iconGlow: "bg-sky-300/18",
      number: "text-sky-600",
      line: "bg-sky-500",
      hoverShadow: "hover:shadow-[0_20px_54px_rgba(14,165,233,0.14)]",
      mobileCard:
        "border-sky-300/55 bg-[linear-gradient(135deg,rgba(239,248,255,0.86),rgba(255,255,255,0.92))]",
      mobileDivider: "bg-sky-300/45",
      ring: "ring-sky-400/35",
    };
  }

  if (accent === "amber") {
    return {
      card: "border-amber-300/50 bg-[linear-gradient(135deg,rgba(255,251,235,0.82),rgba(255,255,255,0.88))] hover:border-amber-400/75",
      icon: "bg-amber-100 text-amber-600 ring-amber-300/45 shadow-amber-200/60",
      iconGlow: "bg-amber-300/18",
      number: "text-amber-600",
      line: "bg-amber-500",
      hoverShadow: "hover:shadow-[0_20px_54px_rgba(245,158,11,0.13)]",
      mobileCard:
        "border-amber-300/55 bg-[linear-gradient(135deg,rgba(255,251,235,0.86),rgba(255,255,255,0.92))]",
      mobileDivider: "bg-amber-300/45",
      ring: "ring-amber-400/35",
    };
  }

  if (accent === "coral") {
    return {
      card: "border-red-300/45 bg-[linear-gradient(135deg,rgba(255,241,242,0.78),rgba(255,255,255,0.9))] hover:border-red-400/70",
      icon: "bg-red-100 text-red-500 ring-red-300/40 shadow-red-200/55",
      iconGlow: "bg-red-300/14",
      number: "text-red-500",
      line: "bg-red-400",
      hoverShadow: "hover:shadow-[0_20px_54px_rgba(248,113,113,0.12)]",
      mobileCard:
        "border-red-300/45 bg-[linear-gradient(135deg,rgba(255,241,242,0.82),rgba(255,255,255,0.92))]",
      mobileDivider: "bg-red-300/40",
      ring: "ring-red-400/30",
    };
  }

  return {
    card: "border-lime-300/55 bg-[linear-gradient(135deg,rgba(247,252,232,0.84),rgba(255,255,255,0.9))] hover:border-lime-400/80",
    icon: "bg-lime-100 text-lime-700 ring-lime-300/45 shadow-lime-200/60",
    iconGlow: "bg-lime-300/18",
    number: "text-lime-700",
    line: "bg-lime-500",
    hoverShadow: "hover:shadow-[0_20px_54px_rgba(132,204,22,0.14)]",
    mobileCard:
      "border-lime-300/55 bg-[linear-gradient(135deg,rgba(247,252,232,0.88),rgba(255,255,255,0.92))]",
    mobileDivider: "bg-lime-300/45",
    ring: "ring-lime-400/35",
  };
}

function UspBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),transparent_68%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-10 h-[520px] w-[520px] rounded-full bg-lime-300/18 blur-[130px]"
        animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 bottom-0 h-[460px] w-[460px] rounded-full bg-sky-300/14 blur-[120px]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-20 hidden h-40 w-28 opacity-55 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.34) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 72%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 72%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-28 hidden h-32 w-32 opacity-70 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(190,242,100,0.76) 2px, transparent 2px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 45%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 45%, transparent 76%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 hidden h-52 w-52 rounded-full border border-sky-300/18 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-10 hidden h-72 w-72 rounded-full border border-sky-300/10 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-0 hidden h-96 w-96 rounded-full border border-lime-300/10 lg:block"
      />
    </>
  );
}

// Add this near your other variants
const underlineDraw = (reduceMotion: boolean) => ({
  hidden: reduceMotion
    ? { opacity: 0 }
    : { pathLength: 0, opacity: 0 },
  visible: reduceMotion
    ? { opacity: 1, transition: { duration: 0.4 } }
    : {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.35 },
      },
});

function UspHeader() {
  const reduceMotion = useReducedMotion();
  const fadeUp = createFadeUpVariants(Boolean(reduceMotion));
   const underline = underlineDraw(Boolean(reduceMotion));

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto max-w-6xl text-center"
    >
      <motion.div
        variants={fadeUp}
        className="mb-4 inline-flex items-center justify-center gap-3"
      >
        <span className="h-px w-10 bg-lime-700/40" />
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-xs">
          Why Kota Academy
        </span>
        <span className="h-px w-10 bg-lime-700/40" />
      </motion.div>

      {/* <motion.h2
        variants={fadeUp}
        id="usp-heading"
        className="mx-auto max-w-6xl text-center text-[2rem] font-extrabold leading-[1.05] tracking-tight text-[#071427] sm:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] bg-blue-300 "
      >
        Why Kota Academy{" "}
        <span className="relative">
          Works Differently
          <span
            aria-hidden="true"
            className="absolute inset-x-6 -bottom-2 h-0.5 rounded-full bg-gradient-to-r from-transparent via-lime-500/80 to-transparent"
          />
        </span>
      </motion.h2> */}

      <motion.h2
      variants={fadeUp}
      id="usp-heading"
      className="mx-auto max-w-6xl text-center text-[2rem] font-extrabold leading-[1.05] tracking-tight text-[#071427] sm:text-3xl lg:text-[3.5rem] xl:text-[4rem]"
    >
      Why Kota Academy{" "}
      <span className="relative inline-block">
        <span className="relative z-10">Works Differently</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 300 18"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -bottom-1 left-0 h-[0.32em] w-full overflow-visible sm:-bottom-5"
        >
          <defs>
            <linearGradient id="usp-underline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a3e635" stopOpacity="0" />
              <stop offset="14%" stopColor="#84cc16" stopOpacity="1" />
              <stop offset="50%" stopColor="#65a30d" stopOpacity="1" />
              <stop offset="86%" stopColor="#84cc16" stopOpacity="1" />
              <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Soft blurred halo */}
          <motion.path
            d="M4 11 Q 75 4, 150 9 T 296 8"
            stroke="url(#usp-underline)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
            style={{ filter: "blur(3px)" }}
            variants={underline}
          />

          {/* Crisp accent stroke */}
          <motion.path
            d="M4 11 Q 75 4, 150 9 T 296 8"
            stroke="url(#usp-underline)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            variants={underline}
          />

          {/* Tiny highlight pass for sheen */}
          {/* <motion.path
            d="M4 11 Q 75 4, 150 9 T 296 8"
            stroke="white"
            strokeWidth="0.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
            variants={underline}
          /> */}
        </svg>
      </span>
    </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7"
      >
        A structured academic system where every class, test, doubt session, and
        parent update is designed to move students forward.
      </motion.p>
    </motion.div>
  );
}

function DesktopUspCard({ item }: { item: UspItem }) {
  const Icon = item.icon;
  const accent = getAccentClasses(item.accent);
  const reduceMotion = useReducedMotion();
  const cardVariants = createCardVariants(Boolean(reduceMotion));

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              scale: 1.01,
              transition: { duration: 0.28, ease: EASE_OUT_QUINT },
            }
      }
      className={`group relative hidden min-h-40 overflow-hidden rounded-[1.45rem] border px-4 py-3.5 shadow-[0_14px_40px_rgba(15,23,42,0.065)] backdrop-blur-xl transition-all duration-300 md:block ${accent.card} ${accent.hoverShadow}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.86),transparent_34%)]"
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-[1.45rem] opacity-0 ring-1 transition-opacity duration-500 group-hover:opacity-100 ${accent.ring}`}
      />

      <span
        aria-hidden="true"
        className={`absolute right-4 top-3 text-[2.35rem] font-extrabold leading-none tracking-tight ${accent.number} opacity-[0.13] transition-opacity duration-300 group-hover:opacity-[0.22]`}
      >
        {item.number}
      </span>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-3 pr-12">
          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className={`absolute inset-0 rounded-full blur-xl ${accent.iconGlow}`}
            />
            <div
              className={`relative flex h-11 w-11 items-center justify-center rounded-2xl ring-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 ${accent.icon}`}
            >
              <Icon
                className="h-[22px] w-[22px]"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
          </div>

          <h3 className="text-lg font-extrabold leading-tight tracking-tight text-[#071427]">
            {item.title}
          </h3>
        </div>

        <div
          className={`mt-3 h-0.5 w-9 rounded-full transition-all duration-300 group-hover:w-14 ${accent.line}`}
        />

        <p className="mt-3 text-[13px] leading-5 text-slate-700">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

function MobileFeaturedCard({ item }: { item: UspItem }) {
  const Icon = item.icon;
  const accent = getAccentClasses(item.accent);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={createCardVariants(Boolean(reduceMotion))}
      className={`relative overflow-hidden rounded-[1.5rem] border p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] md:hidden ${accent.mobileCard}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-xl ${accent.icon}`}
        >
          <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-xl font-extrabold tracking-tight text-[#071427]">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function MobileUspRow({ item }: { item: UspItem }) {
  const Icon = item.icon;
  const accent = getAccentClasses(item.accent);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={createCardVariants(Boolean(reduceMotion))}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className={`group flex items-center gap-3 rounded-[1.25rem] border p-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 md:hidden ${accent.mobileCard}`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 ${accent.icon}`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </div>

      <div className={`h-10 w-px shrink-0 ${accent.mobileDivider}`} />

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-extrabold text-[#071427]">{item.title}</h3>
        <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-slate-600">
          {item.description}
        </p>
      </div>

      <ArrowRight
        className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-slate-600"
        aria-hidden="true"
      />
    </motion.div>
  );
}

function UspGrid() {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="mx-auto mt-10 hidden w-full max-w-6xl grid-cols-2 gap-4 md:grid md:grid-cols-3  xl:grid-cols-4 xl:gap-5"
      >
        {uspItems.map((item) => (
          <DesktopUspCard key={item.title} item={item} />
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 md:hidden"
      >
        <MobileFeaturedCard item={uspItems[0]} />
        {uspItems.slice(1).map((item) => (
          <MobileUspRow key={item.title} item={item} />
        ))}
      </motion.div>
    </>
  );
}

// function TrustStrip() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       variants={createCardVariants(Boolean(reduceMotion))}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       className="relative mx-auto mt-8 hidden w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(247,252,232,0.58),rgba(239,248,255,0.62))] shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl md:block"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(132,204,22,0.14),transparent_28%),radial-gradient(circle_at_90%_50%,rgba(56,189,248,0.12),transparent_30%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/70 to-transparent"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
//       />

//       <div className="relative z-10 grid grid-cols-2 divide-x-0 divide-y divide-slate-200/70 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
//         {trustItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.title}
//               className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-white/55"
//             >
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-lime-700 shadow-[0_10px_28px_rgba(15,23,42,0.075)] ring-1 ring-slate-200/90 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
//                 <Icon
//                   className="h-[22px] w-[22px]"
//                   strokeWidth={2}
//                   aria-hidden="true"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-sm font-extrabold text-[#071427]">
//                   {item.title}
//                 </h3>
//                 <p className="mt-1 text-xs leading-5 text-slate-600">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={createCardVariants(Boolean(reduceMotion))}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative mx-auto mt-10 hidden w-full max-w-6xl md:block"
    >
      {/* Ambient floor glow — gives the card lift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-8 -bottom-6 -top-2 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_60%,rgba(132,204,22,0.18),transparent_70%)] blur-2xl"
      />

      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-white to-lime-50/50 backdrop-blur-xl"
        style={{
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.95)",
            "inset 0 -1px 0 rgba(132,204,22,0.10)",
            "0 1px 2px rgba(15,23,42,0.04)",
            "0 10px 24px -8px rgba(15,23,42,0.10)",
            "0 28px 60px -16px rgba(15,23,42,0.14)",
            "0 36px 80px -20px rgba(132,204,22,0.22)",
          ].join(", "),
        }}
      >
        {/* Soft brand spots inside */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(132,204,22,0.12),transparent_28%),radial-gradient(circle_at_90%_50%,rgba(56,189,248,0.10),transparent_30%)]"
        />

        {/* Top + bottom edge hairlines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/70 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-14 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
        />

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            const total = trustItems.length;
            const isLast = idx === total - 1;
            const isRightEdgeOnMd = idx % 2 === 1;
            const isTopRowOnMd = idx < 2;

            return (
              <div
                key={item.title}
                className="group relative flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-lime-50/35"
              >
                {/* Right separator: gradient line + center dot */}
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-y-5 right-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent ${
                        isRightEdgeOnMd ? "hidden lg:block" : ""
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-lime-400 shadow-[0_0_0_2px_white,0_0_8px_rgba(132,204,22,0.5)] ${
                        isRightEdgeOnMd ? "hidden lg:block" : ""
                      }`}
                    />
                  </>
                )}

                {/* Bottom separator between rows on md */}
                {isTopRowOnMd && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:hidden"
                  />
                )}

                {/* Icon tile */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-50 to-lime-100/70 text-lime-700 ring-1 ring-lime-200/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:ring-lime-300"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 20px -6px rgba(132,204,22,0.30)",
                  }}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={2.1} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold tracking-tight text-[#071427]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// function MobileBottomCTA() {
//   return (
//     <div className="mx-auto mt-6 flex max-w-xl justify-center md:hidden">
//       <Link
//         href="/contact"
//         className="group relative inline-flex min-h-[46px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-3 text-sm font-extrabold text-[#071427] shadow-[0_16px_34px_rgba(132,204,22,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(132,204,22,0.36)] active:scale-[0.98]"
//       >
//         <span
//           aria-hidden="true"
//           className="absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-[320%]"
//         />
//         <span className="relative z-10">Talk to a Counsellor</span>
//         <ArrowRight
//           className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//           aria-hidden="true"
//         />
//       </Link>
//     </div>
//   );
// }


function MobileBottomCTA() {
  return (
    <div className="mx-auto mt-8 flex max-w-xl justify-center md:hidden">
      <Link
        href="/contact"
        className="group relative inline-flex min-h-[52px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-b from-[#B9F743] via-[#A3E635] to-[#84CC16] px-7 py-3.5 text-sm font-extrabold tracking-wide text-[#071427] transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 active:scale-[0.97] active:duration-100"
        style={{
          boxShadow: [
            "inset 0 1px 0 rgba(255,255,255,0.65)",
            "inset 0 -1px 0 rgba(0,0,0,0.10)",
            "inset 0 0 0 1px rgba(101,163,13,0.45)",
            "0 1px 2px rgba(15,23,42,0.08)",
            "0 4px 10px -2px rgba(101,163,13,0.25)",
          ].join(", "),
        }}
      >
        {/* Inner top highlight strip */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent"
        />

        {/* Soft top sheen — fully contained inside the pill */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(255,255,255,0.45),transparent_65%)]"
        />

        {/* One-time shimmer on first view */}
        <motion.span
          aria-hidden="true"
          initial={{ x: "-150%" }}
          whileInView={{ x: "350%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent"
        />

        <span className="relative z-10">Talk to a Counsellor</span>

        {/* Arrow chase: outgoing arrow slides out, fresh arrow slides in */}
        <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center overflow-hidden">
          <ArrowRight
            className="absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-5 group-hover:opacity-0 group-active:translate-x-5 group-active:opacity-0"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <ArrowRight
            className="absolute h-4 w-4 -translate-x-5 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
      </Link>
    </div>
  );
}
export default function UspSection() {
  return (
    <section
      aria-labelledby="usp-heading"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.16),transparent_30%),radial-gradient(circle_at_88%_28%,rgba(125,211,252,0.10),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F7FAEF_46%,#EEF5DE_100%)] px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-2"
    >
      <UspBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <UspHeader />
        <UspGrid />
        <TrustStrip />
        <MobileBottomCTA />
      </div>
    </section>
  );
}
