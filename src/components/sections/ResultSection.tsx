// "use client";

// import {
//   ClipboardCheck,
//   MessageCircleQuestion,
//   TrendingUp,
//   UserRoundCheck,
//   Star,
//   BadgeCheck,
//   Trophy,
//   ChevronLeft,
//   ChevronRight,
//   Target,
//   GraduationCap,
//   BookOpen,
//   UsersRound,
//   ArrowRight,
//   ShieldCheck,
//   type LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import type { CSSProperties } from "react";

// type ProcessChip = {
//   label: string;
//   icon: LucideIcon;
// };

// type FadeDividerStyle = CSSProperties & {
//   "--fade-divider-inset": string;
// };

// const processChips: ProcessChip[] = [
//   {
//     label: "Weekly Tests",
//     icon: ClipboardCheck,
//   },
//   {
//     label: "Doubt Support",
//     icon: MessageCircleQuestion,
//   },
//   {
//     label: "Personal Mentoring",
//     icon: UserRoundCheck,
//   },
//   {
//     label: "Performance Tracking",
//     icon: TrendingUp,
//   },
// ];

// // left card /feature card data

// type FeaturedResult = {
//   badge: string;
//   exam: string;
//   score: string;
//   scoreLabel: string;
//   name: string;
//   program: string;
//   statement: string;
//   tags: string[];
//   image: string;
// };

// const featuredResult: FeaturedResult = {
//   badge: "Top Performer",
//   exam: "JEE Main 2025",
//   score: "98.7",
//   scoreLabel: "Percentile",
//   name: "Aarav Sharma",
//   program: "JEE Main 2025 · Two-Year Classroom Program",
//   statement:
//     "Built consistency through weekly tests and focused doubt-solving.",
//   tags: ["Weekly Tests", "Doubt Support", "Mentorship"],
//   image: "/students/arjun-gupta.png",
// };

// // Right card
// type StudentResult = {
//   id: number;
//   category: string;
//   examType: "JEE" | "NEET" | "Boards" | "Foundation";
//   score: string;
//   scoreLabel?: string;
//   name: string;
//   program: string;
//   image: string;
//   accent: Accent;
//   icon: LucideIcon;
// };

// const studentResults: StudentResult[] = [
//   {
//     id: 1,
//     category: "JEE Main Achiever",
//     examType: "JEE",
//     score: "97.8",
//     scoreLabel: "Percentile",
//     name: "Riya Mehta",
//     program: "Classroom Program",
//     image: "/students/priya-sharma.png",
//     accent: "sky",
//     icon: Target,
//   },
//   {
//     id: 2,
//     category: "NEET Achiever",
//     examType: "NEET",
//     score: "640+",
//     scoreLabel: "Score",
//     name: "Aditya Verma",
//     program: "Medical Preparation Program",
//     image: "/students/rahul-singh.png",
//     accent: "lime",
//     icon: BadgeCheck,
//   },
//   {
//     id: 3,
//     category: "Class 12 Board Achiever",
//     examType: "Boards",
//     score: "95.6%",
//     scoreLabel: "",
//     name: "Sneha Kapoor",
//     program: "Board Excellence Program",
//     image: "/students/sneha-verma.png",
//     accent: "sky",
//     icon: GraduationCap,
//   },
//   {
//     id: 4,
//     category: "Foundation Achiever",
//     examType: "Foundation",
//     score: "94.2%",
//     scoreLabel: "",
//     name: "Kabir Singh",
//     program: "Class 9 Foundation Program",
//     image: "/students/vikram-joshi.png",
//     accent: "lime",
//     icon: BookOpen,
//   },

//   {
//     id: 5,
//     category: "JEE Advanced Qualifier",
//     examType: "JEE",
//     score: "1840",
//     scoreLabel: "AIR",
//     name: "Arjun Gupta",
//     program: "Advanced Rankers Batch",
//     image: "/students/arjun-gupta.png",
//     accent: "sky",
//     icon: Target,
//   },
//   {
//     id: 6,
//     category: "NEET Achiever",
//     examType: "NEET",
//     score: "625+",
//     scoreLabel: "Score",
//     name: "Priya Sharma",
//     program: "Medical Preparation Program",
//     image: "/students/priya-sharma.png",
//     accent: "lime",
//     icon: BadgeCheck,
//   },
//   {
//     id: 7,
//     category: "Board Excellence",
//     examType: "Boards",
//     score: "94.8%",
//     scoreLabel: "",
//     name: "Rahul Singh",
//     program: "Class 12 Board Program",
//     image: "/students/rahul-singh.png",
//     accent: "sky",
//     icon: GraduationCap,
//   },
//   {
//     id: 8,
//     category: "Foundation Achiever",
//     examType: "Foundation",
//     score: "93.5%",
//     scoreLabel: "",
//     name: "Sneha Verma",
//     program: "Class 10 Foundation Program",
//     image: "/students/sneha-verma.png",
//     accent: "lime",
//     icon: BookOpen,
//   },

//   {
//     id: 9,
//     category: "JEE Main Achiever",
//     examType: "JEE",
//     score: "96.9",
//     scoreLabel: "Percentile",
//     name: "Vikram Joshi",
//     program: "Two-Year Classroom Program",
//     image: "/students/vikram-joshi.png",
//     accent: "sky",
//     icon: Target,
//   },
//   {
//     id: 10,
//     category: "NEET Achiever",
//     examType: "NEET",
//     score: "615+",
//     scoreLabel: "Score",
//     name: "Aarav Sharma",
//     program: "Medical Preparation Program",
//     image: "/students/arjun-gupta.png",
//     accent: "lime",
//     icon: BadgeCheck,
//   },
//   {
//     id: 11,
//     category: "Class 12 Achiever",
//     examType: "Boards",
//     score: "96.2%",
//     scoreLabel: "",
//     name: "Riya Mehta",
//     program: "Board Excellence Program",
//     image: "/students/priya-sharma.png",
//     accent: "sky",
//     icon: GraduationCap,
//   },
//   {
//     id: 12,
//     category: "Foundation Achiever",
//     examType: "Foundation",
//     score: "92.7%",
//     scoreLabel: "",
//     name: "Aditya Verma",
//     program: "Class 9 Foundation Program",
//     image: "/students/rahul-singh.png",
//     accent: "lime",
//     icon: BookOpen,
//   },

//   {
//     id: 13,
//     category: "JEE Main Achiever",
//     examType: "JEE",
//     score: "98.1",
//     scoreLabel: "Percentile",
//     name: "Sneha Kapoor",
//     program: "Classroom Program",
//     image: "/students/sneha-verma.png",
//     accent: "sky",
//     icon: Target,
//   },
//   {
//     id: 14,
//     category: "NEET Achiever",
//     examType: "NEET",
//     score: "632+",
//     scoreLabel: "Score",
//     name: "Kabir Singh",
//     program: "Medical Preparation Program",
//     image: "/students/vikram-joshi.png",
//     accent: "lime",
//     icon: BadgeCheck,
//   },
//   {
//     id: 15,
//     category: "Board Topper",
//     examType: "Boards",
//     score: "97.1%",
//     scoreLabel: "",
//     name: "Priya Sharma",
//     program: "Board Excellence Program",
//     image: "/students/priya-sharma.png",
//     accent: "sky",
//     icon: GraduationCap,
//   },
//   {
//     id: 16,
//     category: "Foundation Achiever",
//     examType: "Foundation",
//     score: "95.3%",
//     scoreLabel: "",
//     name: "Arjun Gupta",
//     program: "Class 10 Foundation Program",
//     image: "/students/arjun-gupta.png",
//     accent: "lime",
//     icon: BookOpen,
//   },
// ];
// // constants

// const RESULTS_PER_GROUP = 4;
// const AUTO_ROTATE_INTERVAL = 5500;
// const MANUAL_PAUSE_DURATION = 9000;

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 22,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// };

// const softScale = {
//   hidden: {
//     opacity: 0,
//     y: 18,
//     scale: 0.97,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// function getResultAccentClasses(accent: StudentResult["accent"]) {
//   if (accent === "lime") {
//     return {
//       border: "border-lime-300/25",
//       icon: "text-lime-300",
//       iconBg: "bg-lime-300/10 ring-lime-300/20",
//       score: "text-[#A3E635]",
//       glow: "from-lime-300/12",
//     };
//   }

//   return {
//     border: "border-sky-300/25",
//     icon: "text-sky-300",
//     iconBg: "bg-sky-300/10 ring-sky-300/20",
//     score: "text-sky-300",
//     glow: "from-sky-300/12",
//   };
// }

// // Trust items
// type TrustItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   accent: "lime" | "sky";
// };

// const trustItems: TrustItem[] = [
//   {
//     title: "Weekly Performance Tests",
//     description: "Track progress with subject-wise tests.",
//     icon: ClipboardCheck,
//     accent: "lime",
//   },
//   {
//     title: "Personal Doubt Support",
//     description: "Get your doubts resolved, faster.",
//     icon: MessageCircleQuestion,
//     accent: "sky",
//   },
//   {
//     title: "Progress Tracking",
//     description: "Data-driven insights into performance.",
//     icon: TrendingUp,
//     accent: "sky",
//   },
//   {
//     title: "Parent Updates",
//     description: "Stay informed, every step of the way.",
//     icon: UsersRound,
//     accent: "lime",
//   },
// ];

// // result cta
// const ctaContent = {
//   heading:
//     "Want to know how your child can improve with the right academic plan?",
//   description: "Get a personalized preparation roadmap from our academic team.",
//   buttonLabel: "Book Free Counselling",
//   reassurance: "100% Free · No Obligation",
// };

// function ResultsBackground() {
//   return (
//     <>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.16]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.20) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.55]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-40 h-[560px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),transparent_68%)]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-lime-300/30 blur-[130px]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-44 bottom-0 h-[460px] w-[460px] rounded-full bg-sky-300/20 blur-[120px]"
//       />
//     </>
//   );
// }

// function ResultsHeader() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
//     >
//       <motion.div
//         variants={fadeUp}
//         transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//         className="mb-4 inline-flex items-center justify-center gap-3"
//       >
//         <span className="h-px w-10 bg-lime-700/30" />
//         <span className="text-xs font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-sm">
//           Results & Achievements
//         </span>
//         <span className="h-px w-10 bg-lime-700/30" />
//       </motion.div>

//       <motion.h2
//         id="results-heading"
//         variants={fadeUp}
//         transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         className="w-full text-center text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.5rem]"
//       >
//         <span className="block text-[#06111F]">
//           Where Preparation Turns Into
//         </span>
//         <span className="block text-[#65A30D]">Proven Performance</span>
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
//       >
//         A glimpse of the outcomes achieved through focused classroom learning,
//         exam-oriented practice, regular testing, and personal academic
//         mentoring.
//       </motion.p>
//     </motion.div>
//   );
// }

// function ProcessChips() {
//   return (
//     <motion.ul
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto flex max-w-4xl list-none flex-wrap items-center justify-center gap-2.5 p-0 sm:gap-3 "
//     >
//       {processChips.map((chip) => {
//         const Icon = chip.icon;

//         return (
//           <motion.li
//             key={chip.label}
//             variants={softScale}
//             transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//             className="group flex items-center gap-2.5 rounded-full border border-slate-300/80 bg-white/70 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/80 hover:bg-white hover:shadow-lg hover:shadow-lime-200/40  "
//           >
//             <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-700 ring-1 ring-lime-300/60 transition-all duration-300 group-hover:bg-lime-200 group-hover:text-lime-800 sm:h-8 sm:w-8">
//               <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
//             </span>
//             <span>{chip.label}</span>
//           </motion.li>
//         );
//       })}
//     </motion.ul>
//   );
// }
// // Result Cards

// function ResultsShowcase() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-7"
//     >
//       <motion.div
//         variants={softScale}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="lg:col-span-6"
//       >
//         <FeaturedResultCard />
//       </motion.div>

//       <motion.div
//         variants={softScale}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="min-w-0 lg:col-span-6"
//       >
//         <RotatingResultsPanel />
//       </motion.div>
//     </motion.div>
//   );
// }

// // LEFT Feature card

// function FeaturedResultCard() {
//   return (
//     <article className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-lime-400/30 bg-[#07111F] shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1 hover:border-lime-300/45 hover:shadow-lime-950/20">
//       {/* Base gradient */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_48%,rgba(163,230,53,0.26),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1628_48%,#081526_100%)]"
//       />

//       {/* Strong left readability overlay */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-y-0 left-0 z-[1] w-[64%] bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-transparent"
//       />

//       {/* Subtle dot texture */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-[2] opacity-[0.13]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* Lime glow behind student */}
//       <div
//         aria-hidden="true"
//         className="absolute bottom-18 right-8 z-[3] h-82 w-82 rounded-full bg-lime-300/28 blur-[72px] transition-opacity duration-300 group-hover:opacity-90"
//       />

//       {/* Decorative rings behind image */}
//       <div
//         aria-hidden="true"
//         className="absolute right-6 top-15 z-4 hidden h-72 w-72 rounded-full border border-dashed border-lime-300/20 lg:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute right-12 top-22 z-4 hidden h-62 w-62 rounded-full border border-dashed border-lime-300/20 lg:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute right-19 top-28 z-[4] hidden h-50 w-50 rounded-full border border-dashed border-lime-300/18 lg:block"
//       />

//       {/* Student image */}
//       <Image
//         src={featuredResult.image}
//         alt={`${featuredResult.name}, ${featuredResult.exam} top performer at Kota Academy`}
//         className="pointer-events-none absolute -bottom-2 -right-14 z-10 h-[88%] max-h-[480px] w-auto object-cover object-bottom drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:right-[-38px] sm:h-[90%] lg:right-[-42px] lg:h-[95%]"
//         height={850}
//         width={720}
//         quality={100}
//         priority
//       />

//       {/* Content */}
//       <div className="relative z-20 flex min-h-[430px] flex-col justify-between p-5 sm:p-6 lg:p-7">
//         <div>
//           {/* Badges */}
//           <div className="flex flex-wrap items-center gap-3">
//             <div className="inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-300/10 px-3 py-1.5 text-xs font-bold text-amber-200 shadow-lg shadow-amber-400/10 sm:text-sm">
//               <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
//               {featuredResult.badge}
//             </div>

//             <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/[0.08] px-3 py-1.5 text-xs font-semibold text-lime-100 shadow-[0_0_22px_rgba(163,230,53,0.08)] backdrop-blur-md sm:text-sm">
//               <BadgeCheck className="h-4 w-4 text-lime-300" />
//               {featuredResult.exam}
//             </div>
//           </div>

//           {/* Score */}
//           <div className=" text-left mt-1 max-w-85">
//             <div className="text-[3rem] font-extrabold leading-none tracking-tight text-[#A3E635] sm:text-[5.25rem] lg:text-[5.8rem] ">
//               {featuredResult.score}
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="h-px w-5 md:w-9 bg-lime-300/60" />
//               <span className="text-sm font-bold text-lime-300">
//                 {featuredResult.scoreLabel}
//               </span>
//               <span className="h-px w-5 md:w-9 bg-lime-300/60" />
//             </div>
//           </div>

//           {/* Student details */}
//           <div className="mt-1 md:mt-4 max-w-40 md:max-w-115 lg:max-w-95 text-left">
//             <h3 className="text-2xl md:text-6xl lg:text-5xl font-extrabold tracking-tight text-white sm:text-4xl">
//               {featuredResult.name}
//             </h3>

//             <p className="mt-2 max-w-[300px] text-xs font-semibold leading-5 text-lime-300 sm:text-sm">
//               {featuredResult.program}
//             </p>

//             <p className="md:mt-4 max-w-60 text-sm leading-6 text-slate-300">
//               {featuredResult.statement}
//             </p>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="mt-5 flex max-w-[340px] flex-wrap gap-2">
//           {featuredResult.tags.map((tag) => (
//             <span
//               key={tag}
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[11px] font-semibold text-slate-200/90 backdrop-blur-md"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Bottom lime edge */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent"
//       />
//     </article>
//   );
// }

// // ResultCard

// function ResultCard({ result }: { result: StudentResult }) {
//   const Icon = result.icon;
//   const accent = getResultAccentClasses(result.accent);

//   return (
//     <article
//       className={`group relative min-h-[145px] w-full min-w-0 overflow-hidden rounded-2xl border ${accent.border} bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.065]`}
//     >
//       <div
//         aria-hidden="true"
//         className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent opacity-70`}
//       />

//       <div className="relative z-10 grid h-full min-w-0 grid-cols-[82px_minmax(0,1fr)] gap-3">
//         <div className="relative min-h-[120px] overflow-hidden rounded-xl">
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-lime-300/12 to-transparent"
//           />

//           <Image
//             src={result.image}
//             alt={`${result.name}, ${result.category} at Kota Academy`}
//             fill
//             quality={95}
//             sizes="(max-width: 768px) 120px, 140px"
//             className="relative z-10 object-cover object-bottom transition-transform duration-300 group-hover:scale-[1.03]"
//           />
//         </div>

//         <div className="flex min-w-0 flex-col justify-between py-0.5">
//           <div>
//             <div className="flex items-center gap-2">
//               <span
//                 className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ring-1`}
//               >
//                 <Icon className={`h-3.5 w-3.5 ${accent.icon}`} />
//               </span>

//               <p className="line-clamp-1 text-[11px] font-semibold uppercase tracking-[0.02em] text-slate-200">
//                 {result.category}
//               </p>
//             </div>

//             <div
//               className={`mt-3 text-[2.65rem] font-extrabold leading-none tracking-tight ${accent.score}`}
//             >
//               {result.score}
//             </div>

//             {result.scoreLabel ? (
//               <p className={`mt-0.5 text-xs font-semibold ${accent.score}`}>
//                 {result.scoreLabel}
//               </p>
//             ) : null}
//           </div>

//           <div className="mt-2">
//             <h4 className="truncate text-[15px] font-bold leading-5 text-white">
//               {result.name}
//             </h4>
//             <p className="truncate text-xs font-medium text-slate-400">
//               {result.program}
//             </p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// // rotating card

// function RotatingResultsPanel() {
//   const [activeGroup, setActiveGroup] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const manualPauseTimeoutRef = useRef<number | null>(null);
//   const shouldReduceMotion = useReducedMotion();

//   const totalGroups = Math.ceil(studentResults.length / RESULTS_PER_GROUP);

//   const visibleResults = studentResults.slice(
//     activeGroup * RESULTS_PER_GROUP,
//     activeGroup * RESULTS_PER_GROUP + RESULTS_PER_GROUP,
//   );

//   useEffect(() => {
//     if (shouldReduceMotion || isPaused || totalGroups <= 1) return;

//     const intervalId = window.setInterval(() => {
//       setActiveGroup((current) =>
//         current === totalGroups - 1 ? 0 : current + 1,
//       );
//     }, AUTO_ROTATE_INTERVAL);

//     return () => window.clearInterval(intervalId);
//   }, [shouldReduceMotion, isPaused, totalGroups]);

//   useEffect(() => {
//     return () => {
//       if (manualPauseTimeoutRef.current) {
//         window.clearTimeout(manualPauseTimeoutRef.current);
//       }
//     };
//   }, []);

//   function pauseAfterManualInteraction() {
//     setIsPaused(true);

//     if (manualPauseTimeoutRef.current !== null) {
//       window.clearTimeout(manualPauseTimeoutRef.current);
//     }

//     manualPauseTimeoutRef.current = window.setTimeout(() => {
//       setIsPaused(false);
//       manualPauseTimeoutRef.current = null;
//     }, MANUAL_PAUSE_DURATION);
//   }

//   function handlePrevious() {
//     pauseAfterManualInteraction();

//     setActiveGroup((current) =>
//       current === 0 ? totalGroups - 1 : current - 1,
//     );
//   }

//   function handleNext() {
//     pauseAfterManualInteraction();

//     setActiveGroup((current) =>
//       current === totalGroups - 1 ? 0 : current + 1,
//     );
//   }

//   function goToGroup(index: number) {
//     pauseAfterManualInteraction();
//     setActiveGroup(index);
//   }

//   return (
//     <section
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onFocus={() => setIsPaused(true)}
//       onBlur={() => setIsPaused(false)}
//       className="relative min-h-[430px] w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111F] p-4 shadow-2xl shadow-slate-900/20 sm:p-5 lg:p-5"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.13),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1628_52%,#081526_100%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative z-10 flex h-full min-h-[390px] flex-col">
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex min-w-0 items-center gap-2.5">
//             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300 ring-1 ring-lime-300/20">
//               <Trophy className="h-4 w-4" />
//             </span>

//             <p className="truncate text-sm font-bold text-slate-100 sm:text-[15px]">
//               <span className="hidden sm:inline">
//                 20+ Results Across JEE, NEET, Boards & Foundation
//               </span>
//               <span className="sm:hidden">20+ Student Results</span>
//             </p>
//           </div>

//           <div className="flex shrink-0 items-center gap-2">
//             <button
//               type="button"
//               aria-label="Show previous results"
//               onClick={handlePrevious}
//               className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-lime-300/40 hover:text-lime-300"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </button>

//             <div className="flex items-center gap-1.5 px-1">
//               {Array.from({ length: totalGroups }).map((_, index) => {
//                 const isActive = index === activeGroup;

//                 return (
//                   <button
//                     key={index}
//                     type="button"
//                     aria-label={`Show result group ${index + 1}`}
//                     aria-current={isActive ? "true" : undefined}
//                     onClick={() => goToGroup(index)}
//                     className={
//                       isActive
//                         ? "h-2 w-5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)] transition-all duration-300"
//                         : "h-2 w-2 rounded-full bg-slate-500/70 transition-all duration-300 hover:bg-slate-400"
//                     }
//                   />
//                 );
//               })}
//             </div>

//             <button
//               type="button"
//               aria-label="Show next results"
//               onClick={handleNext}
//               className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-lime-300/40 hover:text-lime-300"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         <div className="mt-4 grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2">
//           <AnimatePresence mode="popLayout">
//             {visibleResults.map((result, index) => (
//               <motion.div
//                 key={result.id}
//                 layout={!shouldReduceMotion}
//                 initial={
//                   shouldReduceMotion
//                     ? false
//                     : { opacity: 0, y: 14, scale: 0.98 }
//                 }
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={
//                   shouldReduceMotion
//                     ? undefined
//                     : { opacity: 0, y: -8, scale: 0.98 }
//                 }
//                 transition={{
//                   duration: 0.35,
//                   delay: shouldReduceMotion ? 0 : index * 0.05,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 <ResultCard result={result} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
//       />
//     </section>
//   );
// }
// // Result Trust Strips

// // const ACCENT_STYLES = {
// //   lime: {
// //     iconBg: "bg-gradient-to-br from-lime-300/[0.16] to-lime-400/[0.04]",
// //     iconText: "text-lime-300",
// //     iconRing: "ring-lime-300/30",
// //     iconGlow: "shadow-[0_0_28px_rgba(163,230,53,0.14)]",
// //     iconHoverGlow: "group-hover:shadow-[0_0_36px_rgba(163,230,53,0.26)]",
// //     hoverLineVia: "via-lime-300/55",
// //   },
// //   sky: {
// //     iconBg: "bg-gradient-to-br from-sky-300/[0.16] to-sky-400/[0.04]",
// //     iconText: "text-sky-300",
// //     iconRing: "ring-sky-300/30",
// //     iconGlow: "shadow-[0_0_28px_rgba(56,189,248,0.14)]",
// //     iconHoverGlow: "group-hover:shadow-[0_0_36px_rgba(56,189,248,0.26)]",
// //     hoverLineVia: "via-sky-300/55",
// //   },
// // } as const;

// type Accent = "lime" | "sky";

// const ACCENT_STYLES: Record<
//   Accent,
//   {
//     iconBg: string;
//     iconText: string;
//     iconRing: string;
//     iconGlow: string;
//     iconHoverGlow: string;
//     border: string;
//     score: string;
//     glow: string;
//     hoverLineVia: string;
//   }
// > = {
//   lime: {
//     iconBg: "bg-gradient-to-br from-lime-300/[0.16] to-lime-400/[0.04]",
//     iconText: "text-lime-300",
//     iconRing: "ring-lime-300/30",
//     iconGlow: "shadow-[0_0_28px_rgba(163,230,53,0.14)]",
//     iconHoverGlow: "group-hover:shadow-[0_0_36px_rgba(163,230,53,0.26)]",
//     border: "border-lime-300/25",
//     score: "text-[#A3E635]",
//     glow: "from-lime-300/12",
//     hoverLineVia: "via-lime-300/70",
//   },
//   sky: {
//     iconBg: "bg-gradient-to-br from-sky-300/[0.16] to-sky-400/[0.04]",
//     iconText: "text-sky-300",
//     iconRing: "ring-sky-300/30",
//     iconGlow: "shadow-[0_0_28px_rgba(56,189,248,0.14)]",
//     iconHoverGlow: "group-hover:shadow-[0_0_36px_rgba(56,189,248,0.26)]",
//     border: "border-sky-300/25",
//     score: "text-sky-300",
//     glow: "from-sky-300/12",
//     hoverLineVia: "via-sky-300/70",
//   },
// };

// function getAccentStyles(accent: TrustItem["accent"]) {
//   return ACCENT_STYLES[accent] ?? ACCENT_STYLES.sky;
// }

// function ResultsTrustStrip() {
//   return (
//     <motion.div
//       variants={softScale}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111F] shadow-2xl shadow-slate-900/40 sm:rounded-[1.75rem]"
//     >
//       {/* Layer 1: radial color glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(163,230,53,0.10),transparent_32%),radial-gradient(circle_at_88%_55%,rgba(56,189,248,0.09),transparent_36%),radial-gradient(circle_at_50%_115%,rgba(163,230,53,0.05),transparent_40%)]"
//       />

//       {/* Layer 2: dot texture */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.08]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* Layer 3: top highlight (mirrors bottom accent) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
//       />

//       {/* Grid */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {trustItems.map((item) => {
//           const Icon = item.icon;
//           const accent = getAccentStyles(item.accent);

//           return (
//             <div
//               key={item.title}
//               className="trust-divider group relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6 lg:px-6 lg:py-7"
//             >
//               {/* Hover sheen */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />

//               {/* Per-item hover accent line */}
//               <div
//                 aria-hidden="true"
//                 className={`pointer-events-none absolute inset-x-5 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 sm:inset-x-6 lg:inset-x-7 ${accent.hoverLineVia}`}
//               />

//               <div className="relative z-10 flex items-start gap-4">
//                 <span
//                   className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-lg ring-1 transition-all duration-300 group-hover:-translate-y-0.5 sm:h-12 sm:w-12 ${accent.iconBg} ${accent.iconText} ${accent.iconRing} ${accent.iconGlow} ${accent.iconHoverGlow}`}
//                 >
//                   <Icon
//                     className="h-5 w-5"
//                     strokeWidth={2.2}
//                     aria-hidden="true"
//                   />
//                 </span>

//                 <div className="min-w-0 flex-1 pt-0.5">
//                   <h3 className="text-[15px] font-bold leading-tight tracking-tight text-white! sm:text-base">
//                     {item.title}
//                   </h3>
//                   <p className="mt-1.5 text-[10] leading-relaxed text-slate-400">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom accent line */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/45 to-transparent"
//       />
//     </motion.div>
//   );
// }

// // Result cta

// function ResultsCTA() {
//   return (
//     <motion.div
//       variants={softScale}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-lime-300/20 bg-[#07111F] shadow-2xl shadow-slate-900/40"
//     >
//       {/* Layer 1: base gradient (added a tiny sky glow at bottom to balance all-lime) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_45%,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_88%_50%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.07),transparent_38%),linear-gradient(135deg,#07111F_0%,#0B1628_52%,#081526_100%)]"
//       />

//       {/* Layer 2: dot texture */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.1]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* Layer 3: top highlight (mirrors the bottom lime accent for symmetry) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
//       />

//       {/* Layer 4: inset ring (premium glass edge) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.04]"
//       />

//       <div className="relative z-10 grid gap-6 px-5 py-7 sm:px-7 sm:py-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:px-10 lg:py-9">
//         {/* Icon visual */}
//         <div className="flex justify-center lg:justify-start">
//           <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-lime-300/30 bg-gradient-to-br from-lime-300/20 to-lime-400/[0.03] text-lime-300 shadow-[0_0_36px_rgba(163,230,53,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
//             <div
//               aria-hidden="true"
//               className="absolute inset-[-9px] rounded-full border border-lime-300/15"
//             />
//             <div
//               aria-hidden="true"
//               className="absolute inset-[-17px] rounded-full border border-sky-300/12"
//             />

//             <Target
//               className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
//               strokeWidth={2.1}
//               aria-hidden="true"
//             />
//           </div>
//         </div>

//         {/* Text — divider on left edge from lg up */}
//         <div
//           className="text-center lg:fade-divider-left lg:pl-6 lg:text-left"
//           style={
//   {
//     "--fade-divider-inset": "1rem",
//   } as FadeDividerStyle
// }
//         >
//           <h3 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-[1.75rem] lg:mx-0 lg:max-w-3xl lg:text-3xl">
//             {ctaContent.heading}
//           </h3>

//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300/90! sm:text-base lg:mx-0">
//             {ctaContent.description}
//           </p>
//         </div>

//         {/* Button area — divider on left edge from lg up */}
//         <div
//           className="flex flex-col items-center gap-3 lg:fade-divider-left lg:min-w-[300px] lg:items-end lg:pl-6"
//           style={
//   {
//     "--fade-divider-inset": "1rem",
//   } as FadeDividerStyle
// }
//         >
//           <button
//             type="button"
//             className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-4 text-base font-extrabold text-[#07111F] shadow-xl shadow-lime-400/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lime-400/40 sm:w-auto sm:min-w-[260px] active:translate-y-0"
//           >
//             {/* Shimmer pass on hover */}
//             <span
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
//             />
//             <span className="relative">{ctaContent.buttonLabel}</span>
//             <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#07111F] text-lime-300 transition-transform duration-300 group-hover:translate-x-1">
//               <ArrowRight className="h-4 w-4" />
//             </span>
//           </button>

//           {/* Reassurance — promoted to a subtle badge */}
//           <div className="inline-flex items-center gap-2  px-3 py-1.5 text-xs font-semibold text-slate-300  sm:text-sm">
//             <ShieldCheck className="h-4 w-4 text-lime-300" aria-hidden="true" />
//             <span>{ctaContent.reassurance}</span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom glow line */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
//       />
//     </motion.div>
//   );
// }

// export default function ResultsSection() {
//   return (
//     <section
//       aria-labelledby="results-heading"
//       className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_85%_25%,rgba(190,242,100,0.28),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(125,211,252,0.18),transparent_30%),linear-gradient(135deg,#F6F8EE_0%,#F8FAF2_42%,#EEF5DE_100%)] pb-1 pt-16 sm:pb-1 sm:pt-20 lg:pb-1 lg:pt-24"
//     >
//       <ResultsBackground />

//       {/* <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto flex w-full flex-col items-center gap-4 text-center sm:gap-4 lg:gap-4">
//           <ResultsHeader />
//           <ProcessChips />
//           <ResultsShowcase/>
         
//         </div>
//       </div> */}

//       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
//         <ResultsHeader />
//         <ProcessChips />
//         <ResultsShowcase />
//         <ResultsTrustStrip />
//         <ResultsCTA />
//       </div>
//     </section>
//   );
// }


// "use client";

// import {
//   ClipboardCheck,
//   MessageCircleQuestion,
//   TrendingUp,
//   UserRoundCheck,
//   Star,
//   BadgeCheck,
//   Trophy,
//   ChevronLeft,
//   ChevronRight,
//   Target,
//   GraduationCap,
//   BookOpen,
//   UsersRound,
//   ArrowRight,
//   ShieldCheck,
//   type LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import type { CSSProperties } from "react";

// type ProcessChip = {
//   label: string;
//   icon: LucideIcon;
// };

// type FadeDividerStyle = CSSProperties & {
//   "--fade-divider-inset": string;
// };

// const processChips: ProcessChip[] = [
//   { label: "Weekly Tests", icon: ClipboardCheck },
//   { label: "Doubt Support", icon: MessageCircleQuestion },
//   { label: "Personal Mentoring", icon: UserRoundCheck },
//   { label: "Performance Tracking", icon: TrendingUp },
// ];

// // left card /feature card data

// type FeaturedResult = {
//   badge: string;
//   exam: string;
//   score: string;
//   scoreLabel: string;
//   name: string;
//   program: string;
//   statement: string;
//   tags: string[];
//   image: string;
// };

// const featuredResult: FeaturedResult = {
//   badge: "Top Performer",
//   exam: "JEE Main 2025",
//   score: "98.7",
//   scoreLabel: "Percentile",
//   name: "Aarav Sharma",
//   program: "JEE Main 2025 · Two-Year Classroom Program",
//   statement: "Built consistency through weekly tests and focused doubt-solving.",
//   tags: ["Weekly Tests", "Doubt Support", "Mentorship"],
//   image: "/students/arjun-gupta.png",
// };

// // Right card
// type StudentResult = {
//   id: number;
//   category: string;
//   examType: "JEE" | "NEET" | "Boards" | "Foundation";
//   score: string;
//   scoreLabel?: string;
//   name: string;
//   program: string;
//   image: string;
//   accent: Accent;
//   icon: LucideIcon;
// };

// const studentResults: StudentResult[] = [
//   { id: 1, category: "JEE Main Achiever", examType: "JEE", score: "97.8", scoreLabel: "Percentile", name: "Riya Mehta", program: "Classroom Program", image: "/students/priya-sharma.png", accent: "sky", icon: Target },
//   { id: 2, category: "NEET Achiever", examType: "NEET", score: "640+", scoreLabel: "Score", name: "Aditya Verma", program: "Medical Preparation Program", image: "/students/rahul-singh.png", accent: "lime", icon: BadgeCheck },
//   { id: 3, category: "Class 12 Board Achiever", examType: "Boards", score: "95.6%", scoreLabel: "", name: "Sneha Kapoor", program: "Board Excellence Program", image: "/students/sneha-verma.png", accent: "sky", icon: GraduationCap },
//   { id: 4, category: "Foundation Achiever", examType: "Foundation", score: "94.2%", scoreLabel: "", name: "Kabir Singh", program: "Class 9 Foundation Program", image: "/students/vikram-joshi.png", accent: "lime", icon: BookOpen },

//   { id: 5, category: "JEE Advanced Qualifier", examType: "JEE", score: "1840", scoreLabel: "AIR", name: "Arjun Gupta", program: "Advanced Rankers Batch", image: "/students/arjun-gupta.png", accent: "sky", icon: Target },
//   { id: 6, category: "NEET Achiever", examType: "NEET", score: "625+", scoreLabel: "Score", name: "Priya Sharma", program: "Medical Preparation Program", image: "/students/priya-sharma.png", accent: "lime", icon: BadgeCheck },
//   { id: 7, category: "Board Excellence", examType: "Boards", score: "94.8%", scoreLabel: "", name: "Rahul Singh", program: "Class 12 Board Program", image: "/students/rahul-singh.png", accent: "sky", icon: GraduationCap },
//   { id: 8, category: "Foundation Achiever", examType: "Foundation", score: "93.5%", scoreLabel: "", name: "Sneha Verma", program: "Class 10 Foundation Program", image: "/students/sneha-verma.png", accent: "lime", icon: BookOpen },

//   { id: 9, category: "JEE Main Achiever", examType: "JEE", score: "96.9", scoreLabel: "Percentile", name: "Vikram Joshi", program: "Two-Year Classroom Program", image: "/students/vikram-joshi.png", accent: "sky", icon: Target },
//   { id: 10, category: "NEET Achiever", examType: "NEET", score: "615+", scoreLabel: "Score", name: "Aarav Sharma", program: "Medical Preparation Program", image: "/students/arjun-gupta.png", accent: "lime", icon: BadgeCheck },
//   { id: 11, category: "Class 12 Achiever", examType: "Boards", score: "96.2%", scoreLabel: "", name: "Riya Mehta", program: "Board Excellence Program", image: "/students/priya-sharma.png", accent: "sky", icon: GraduationCap },
//   { id: 12, category: "Foundation Achiever", examType: "Foundation", score: "92.7%", scoreLabel: "", name: "Aditya Verma", program: "Class 9 Foundation Program", image: "/students/rahul-singh.png", accent: "lime", icon: BookOpen },

//   { id: 13, category: "JEE Main Achiever", examType: "JEE", score: "98.1", scoreLabel: "Percentile", name: "Sneha Kapoor", program: "Classroom Program", image: "/students/sneha-verma.png", accent: "sky", icon: Target },
//   { id: 14, category: "NEET Achiever", examType: "NEET", score: "632+", scoreLabel: "Score", name: "Kabir Singh", program: "Medical Preparation Program", image: "/students/vikram-joshi.png", accent: "lime", icon: BadgeCheck },
//   { id: 15, category: "Board Topper", examType: "Boards", score: "97.1%", scoreLabel: "", name: "Priya Sharma", program: "Board Excellence Program", image: "/students/priya-sharma.png", accent: "sky", icon: GraduationCap },
//   { id: 16, category: "Foundation Achiever", examType: "Foundation", score: "95.3%", scoreLabel: "", name: "Arjun Gupta", program: "Class 10 Foundation Program", image: "/students/arjun-gupta.png", accent: "lime", icon: BookOpen },
// ];

// // constants
// const AUTO_ROTATE_INTERVAL = 7000; // slowed from 5500 — proof cards need reading time
// const MANUAL_PAUSE_DURATION = 9000;

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0 },
// };

// const softScale = {
//   hidden: { opacity: 0, y: 18, scale: 0.97 },
//   visible: { opacity: 1, y: 0, scale: 1 },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// // Matches Tailwind `sm` breakpoint — drives per-group count + auto-rotate gating
// function useIsDesktop() {
//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 640px)");
//     const update = () => setIsDesktop(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   return isDesktop;
// }

// function getResultAccentClasses(accent: StudentResult["accent"]) {
//   if (accent === "lime") {
//     return {
//       border: "border-lime-300/25",
//       icon: "text-lime-300",
//       iconBg: "bg-lime-300/10 ring-lime-300/20",
//       score: "text-[#A3E635]",
//       glow: "from-lime-300/12",
//     };
//   }

//   return {
//     border: "border-sky-300/25",
//     icon: "text-sky-300",
//     iconBg: "bg-sky-300/10 ring-sky-300/20",
//     score: "text-sky-300",
//     glow: "from-sky-300/12",
//   };
// }

// // Trust items
// type TrustItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   accent: "lime" | "sky";
// };

// const trustItems: TrustItem[] = [
//   { title: "Weekly Performance Tests", description: "Track progress with subject-wise tests.", icon: ClipboardCheck, accent: "lime" },
//   { title: "Personal Doubt Support", description: "Get your doubts resolved, faster.", icon: MessageCircleQuestion, accent: "sky" },
//   { title: "Progress Tracking", description: "Data-driven insights into performance.", icon: TrendingUp, accent: "sky" },
//   { title: "Parent Updates", description: "Stay informed, every step of the way.", icon: UsersRound, accent: "lime" },
// ];

// // result cta
// const ctaContent = {
//   heading: "Want to know how your child can improve with the right academic plan?",
//   description: "Get a personalized preparation roadmap from our academic team.",
//   buttonLabel: "Book Free Counselling",
//   reassurance: "100% Free · No Obligation",
// };

// function ResultsBackground() {
//   return (
//     <>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.16]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.20) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.55]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-40 h-[560px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),transparent_68%)]"
//       />
//       {/* Heavy colour blobs — desktop only (blur this large janks on mobile) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 top-10 hidden h-[460px] w-[460px] rounded-full bg-lime-300/30 blur-[100px] md:block"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-44 bottom-0 hidden h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[100px] md:block"
//       />
//     </>
//   );
// }

// function ResultsHeader() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
//     >
//       <motion.div
//         variants={fadeUp}
//         transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//         className="mb-4 inline-flex items-center justify-center gap-3"
//       >
//         <span className="h-px w-10 bg-lime-700/30" />
//         <span className="text-xs font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-sm">
//           Results &amp; Achievements
//         </span>
//         <span className="h-px w-10 bg-lime-700/30" />
//       </motion.div>

//       <motion.h2
//         id="results-heading"
//         variants={fadeUp}
//         transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         className="w-full text-center text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-[3.5rem]"
//       >
//         <span className="block text-[#06111F]">Where Preparation Turns Into</span>
//         <span className="block text-[#65A30D]">Proven Performance</span>
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
//       >
//         A glimpse of the outcomes achieved through focused classroom learning,
//         exam-oriented practice, regular testing, and personal academic mentoring.
//       </motion.p>
//     </motion.div>
//   );
// }

// function ProcessChips() {
//   return (
//     <motion.ul
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto mt-7 flex max-w-4xl list-none flex-wrap items-center justify-center gap-2.5 p-0 sm:gap-3"
//     >
//       {processChips.map((chip) => {
//         const Icon = chip.icon;

//         return (
//           <motion.li
//             key={chip.label}
//             variants={softScale}
//             transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//             className="group flex items-center gap-2.5 rounded-full border border-slate-300/80 bg-white/70 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/80 hover:bg-white hover:shadow-lg hover:shadow-lime-200/40"
//           >
//             <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-700 ring-1 ring-lime-300/60 transition-all duration-300 group-hover:bg-lime-200 group-hover:text-lime-800 sm:h-8 sm:w-8">
//               <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
//             </span>
//             <span>{chip.label}</span>
//           </motion.li>
//         );
//       })}
//     </motion.ul>
//   );
// }

// // Result Cards
// function ResultsShowcase() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-7"
//     >
//       <motion.div
//         variants={softScale}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="lg:col-span-6"
//       >
//         <FeaturedResultCard />
//       </motion.div>

//       <motion.div
//         variants={softScale}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="min-w-0 lg:col-span-6"
//       >
//         <RotatingResultsPanel />
//       </motion.div>
//     </motion.div>
//   );
// }

// // LEFT Feature card
// function FeaturedResultCard() {
//   return (
//     <article className="group relative min-h-[380px] overflow-hidden rounded-[2rem] border border-lime-400/30 bg-[#07111F] shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1 hover:border-lime-300/45 hover:shadow-lime-950/20 sm:min-h-[430px]">
//       {/* Base gradient */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_48%,rgba(163,230,53,0.26),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1628_48%,#081526_100%)]"
//       />

//       {/* Strong left readability overlay */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-y-0 left-0 z-[1] w-[64%] bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-transparent"
//       />

//       {/* Subtle dot texture */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-[2] opacity-[0.13]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* Lime glow behind student */}
//       <div
//         aria-hidden="true"
//         className="absolute bottom-18 right-8 z-[3] h-80 w-80 rounded-full bg-lime-300/28 blur-[60px] transition-opacity duration-300 group-hover:opacity-90"
//       />

//       {/* Decorative rings behind image */}
//       <div
//         aria-hidden="true"
//         className="absolute right-6 top-16 z-[4] hidden h-72 w-72 rounded-full border border-dashed border-lime-300/20 lg:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute right-12 top-24 z-[4] hidden h-60 w-60 rounded-full border border-dashed border-lime-300/20 lg:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute right-20 top-28 z-[4] hidden h-48 w-48 rounded-full border border-dashed border-lime-300/18 lg:block"
//       />

//       {/* Student image */}
//       <Image
//         src={featuredResult.image}
//         alt={`${featuredResult.name}, ${featuredResult.exam} top performer at Kota Academy`}
//         className="pointer-events-none absolute -bottom-2 -right-12 z-10 h-[80%] max-h-[480px] w-auto object-cover object-bottom drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:right-[-38px] sm:h-[90%] lg:right-[-42px] lg:h-[95%]"
//         height={850}
//         width={720}
//         quality={100}
//         priority
//       />

//       {/* Content */}
//       <div className="relative z-20 flex min-h-[380px] flex-col justify-between p-5 sm:min-h-[430px] sm:p-6 lg:p-7">
//         <div>
//           {/* Badges */}
//           <div className="flex flex-wrap items-center gap-2.5">
//             <div className="inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-300/10 px-3 py-1.5 text-xs font-bold text-amber-200 shadow-lg shadow-amber-400/10 sm:text-sm">
//               <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
//               {featuredResult.badge}
//             </div>

//             <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/[0.08] px-3 py-1.5 text-xs font-semibold text-lime-100 shadow-[0_0_22px_rgba(163,230,53,0.08)] backdrop-blur-md sm:text-sm">
//               <BadgeCheck className="h-4 w-4 text-lime-300" />
//               {featuredResult.exam}
//             </div>
//           </div>

//           {/* Score */}
//           <div className="mt-3 max-w-[340px] text-left">
//             <div className="text-[2.75rem] font-extrabold leading-none tracking-tight text-[#A3E635] sm:text-[4rem] lg:text-[4.75rem]">
//               {featuredResult.score}
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="h-px w-5 bg-lime-300/60 md:w-9" />
//               <span className="text-sm font-bold text-lime-300">
//                 {featuredResult.scoreLabel}
//               </span>
//               <span className="h-px w-5 bg-lime-300/60 md:w-9" />
//             </div>
//           </div>

//           {/* Student details */}
//           <div className="mt-3 max-w-[190px] text-left sm:max-w-[280px] md:mt-4 md:max-w-[460px] lg:max-w-[380px]">
//             <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
//               {featuredResult.name}
//             </h3>

//             <p className="mt-2 max-w-[300px] text-xs font-semibold leading-5 text-lime-300 sm:text-sm">
//               {featuredResult.program}
//             </p>

//             <p className="mt-3 max-w-[260px] text-sm leading-6 text-slate-300 md:mt-4">
//               {featuredResult.statement}
//             </p>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="mt-5 flex max-w-[340px] flex-wrap gap-2">
//           {featuredResult.tags.map((tag) => (
//             <span
//               key={tag}
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[11px] font-semibold text-slate-200/90 backdrop-blur-md"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Bottom lime edge */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent"
//       />
//     </article>
//   );
// }

// // ResultCard
// function ResultCard({ result }: { result: StudentResult }) {
//   const Icon = result.icon;
//   const accent = getResultAccentClasses(result.accent);

//   return (
//     <article
//       className={`group relative min-h-[140px] w-full min-w-0 overflow-hidden rounded-2xl border ${accent.border} bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.065]`}
//     >
//       <div
//         aria-hidden="true"
//         className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent opacity-70`}
//       />

//       <div className="relative z-10 grid h-full min-w-0 grid-cols-[82px_minmax(0,1fr)] gap-3">
//         <div className="relative min-h-[116px] overflow-hidden rounded-xl">
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-lime-300/12 to-transparent"
//           />

//           <Image
//             src={result.image}
//             alt={`${result.name}, ${result.category} at Kota Academy`}
//             fill
//             quality={95}
//             sizes="(max-width: 768px) 120px, 140px"
//             className="relative z-10 object-cover object-bottom transition-transform duration-300 group-hover:scale-[1.03]"
//           />
//         </div>

//         <div className="flex min-w-0 flex-col justify-between py-0.5">
//           <div>
//             <div className="flex items-center gap-2">
//               <span
//                 className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ring-1`}
//               >
//                 <Icon className={`h-3.5 w-3.5 ${accent.icon}`} />
//               </span>

//               <p className="line-clamp-1 text-[11px] font-semibold uppercase tracking-[0.02em] text-slate-200">
//                 {result.category}
//               </p>
//             </div>

//             <div
//               className={`mt-2.5 text-[2.25rem] font-extrabold leading-none tracking-tight ${accent.score}`}
//             >
//               {result.score}
//             </div>

//             {result.scoreLabel ? (
//               <p className={`mt-0.5 text-xs font-semibold ${accent.score}`}>
//                 {result.scoreLabel}
//               </p>
//             ) : null}
//           </div>

//           <div className="mt-2">
//             <h4 className="truncate text-[15px] font-bold leading-5 text-white">
//               {result.name}
//             </h4>
//             <p className="truncate text-xs font-medium text-slate-400">
//               {result.program}
//             </p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// // rotating card
// function RotatingResultsPanel() {
//   const [activeGroup, setActiveGroup] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const manualPauseTimeoutRef = useRef<number | null>(null);
//   const shouldReduceMotion = useReducedMotion();
//   const isDesktop = useIsDesktop();

//   // 2 cards per page on mobile (keeps the panel short), 4 on desktop
//   const perGroup = isDesktop ? 4 : 2;
//   const totalGroups = Math.ceil(studentResults.length / perGroup);

//   // keep activeGroup valid when perGroup (and thus totalGroups) changes
//   useEffect(() => {
//     setActiveGroup((g) => Math.min(g, Math.max(0, totalGroups - 1)));
//   }, [totalGroups]);

//   const visibleResults = studentResults.slice(
//     activeGroup * perGroup,
//     activeGroup * perGroup + perGroup,
//   );

//   // auto-rotate: desktop only (no hover-to-pause on touch → don't move while reading)
//   useEffect(() => {
//     if (shouldReduceMotion || isPaused || !isDesktop || totalGroups <= 1) return;

//     const intervalId = window.setInterval(() => {
//       setActiveGroup((current) => (current === totalGroups - 1 ? 0 : current + 1));
//     }, AUTO_ROTATE_INTERVAL);

//     return () => window.clearInterval(intervalId);
//   }, [shouldReduceMotion, isPaused, isDesktop, totalGroups]);

//   useEffect(() => {
//     return () => {
//       if (manualPauseTimeoutRef.current) {
//         window.clearTimeout(manualPauseTimeoutRef.current);
//       }
//     };
//   }, []);

//   function pauseAfterManualInteraction() {
//     setIsPaused(true);
//     if (manualPauseTimeoutRef.current !== null) {
//       window.clearTimeout(manualPauseTimeoutRef.current);
//     }
//     manualPauseTimeoutRef.current = window.setTimeout(() => {
//       setIsPaused(false);
//       manualPauseTimeoutRef.current = null;
//     }, MANUAL_PAUSE_DURATION);
//   }

//   function handlePrevious() {
//     pauseAfterManualInteraction();
//     setActiveGroup((current) => (current === 0 ? totalGroups - 1 : current - 1));
//   }

//   function handleNext() {
//     pauseAfterManualInteraction();
//     setActiveGroup((current) => (current === totalGroups - 1 ? 0 : current + 1));
//   }

//   function goToGroup(index: number) {
//     pauseAfterManualInteraction();
//     setActiveGroup(index);
//   }

//   return (
//     <section
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onFocus={() => setIsPaused(true)}
//       onBlur={() => setIsPaused(false)}
//       className="relative min-h-[320px] w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111F] p-4 shadow-2xl shadow-slate-900/20 sm:min-h-[430px] sm:p-5"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.13),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1628_52%,#081526_100%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative z-10 flex h-full min-h-[280px] flex-col sm:min-h-[390px]">
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex min-w-0 items-center gap-2.5">
//             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300 ring-1 ring-lime-300/20">
//               <Trophy className="h-4 w-4" />
//             </span>

//             <p className="truncate text-sm font-bold text-slate-100 sm:text-[15px]">
//               <span className="hidden sm:inline">
//                 20+ Results Across JEE, NEET, Boards &amp; Foundation
//               </span>
//               <span className="sm:hidden">20+ Student Results</span>
//             </p>
//           </div>

//           <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
//             <button
//               type="button"
//               aria-label="Show previous results"
//               onClick={handlePrevious}
//               className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-lime-300/40 hover:text-lime-300"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </button>

//             <div className="flex items-center gap-1.5 px-0.5">
//               {Array.from({ length: totalGroups }).map((_, index) => {
//                 const isActive = index === activeGroup;

//                 return (
//                   <button
//                     key={index}
//                     type="button"
//                     aria-label={`Show result group ${index + 1}`}
//                     aria-current={isActive ? "true" : undefined}
//                     onClick={() => goToGroup(index)}
//                     className={
//                       isActive
//                         ? "h-2 w-5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)] transition-all duration-300"
//                         : "h-2 w-2 rounded-full bg-slate-500/70 transition-all duration-300 hover:bg-slate-400"
//                     }
//                   />
//                 );
//               })}
//             </div>

//             <button
//               type="button"
//               aria-label="Show next results"
//               onClick={handleNext}
//               className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-lime-300/40 hover:text-lime-300"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         <div className="mt-4 grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2">
//           <AnimatePresence mode="popLayout">
//             {visibleResults.map((result, index) => (
//               <motion.div
//                 key={result.id}
//                 layout={!shouldReduceMotion}
//                 initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
//                 transition={{
//                   duration: 0.35,
//                   delay: shouldReduceMotion ? 0 : index * 0.05,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 <ResultCard result={result} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
//       />
//     </section>
//   );
// }

// // Result Trust Strip
// type Accent = "lime" | "sky";

// const ACCENT_STYLES: Record<
//   Accent,
//   {
//     iconBg: string;
//     iconText: string;
//     iconRing: string;
//     iconGlow: string;
//     iconHoverGlow: string;
//     border: string;
//     score: string;
//     glow: string;
//     hoverLineVia: string;
//   }
// > = {
//   lime: {
//     iconBg: "bg-gradient-to-br from-lime-300/[0.16] to-lime-400/[0.04]",
//     iconText: "text-lime-300",
//     iconRing: "ring-lime-300/30",
//     iconGlow: "shadow-[0_0_28px_rgba(163,230,53,0.14)]",
//     iconHoverGlow: "group-hover:shadow-[0_0_36px_rgba(163,230,53,0.26)]",
//     border: "border-lime-300/25",
//     score: "text-[#A3E635]",
//     glow: "from-lime-300/12",
//     hoverLineVia: "via-lime-300/70",
//   },
//   sky: {
//     iconBg: "bg-gradient-to-br from-sky-300/[0.16] to-sky-400/[0.04]",
//     iconText: "text-sky-300",
//     iconRing: "ring-sky-300/30",
//     iconGlow: "shadow-[0_0_28px_rgba(56,189,248,0.14)]",
//     iconHoverGlow: "group-hover:shadow-[0_0_36px_rgba(56,189,248,0.26)]",
//     border: "border-sky-300/25",
//     score: "text-sky-300",
//     glow: "from-sky-300/12",
//     hoverLineVia: "via-sky-300/70",
//   },
// };

// function getAccentStyles(accent: TrustItem["accent"]) {
//   return ACCENT_STYLES[accent] ?? ACCENT_STYLES.sky;
// }

// function ResultsTrustStrip() {
//   return (
//     <motion.div
//       variants={softScale}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111F] shadow-2xl shadow-slate-900/40 sm:rounded-[1.75rem]"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(163,230,53,0.10),transparent_32%),radial-gradient(circle_at_88%_55%,rgba(56,189,248,0.09),transparent_36%),radial-gradient(circle_at_50%_115%,rgba(163,230,53,0.05),transparent_40%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.08]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
//       />

//       {/* 2-col on mobile (halves the height), 4-col on desktop */}
//       <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
//         {trustItems.map((item) => {
//           const Icon = item.icon;
//           const accent = getAccentStyles(item.accent);

//           return (
//             <div
//               key={item.title}
//               className="trust-divider group relative overflow-hidden px-4 py-4 sm:px-6 sm:py-6 lg:px-6 lg:py-7"
//             >
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />

//               <div
//                 aria-hidden="true"
//                 className={`pointer-events-none absolute inset-x-4 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 sm:inset-x-6 lg:inset-x-7 ${accent.hoverLineVia}`}
//               />

//               {/* stack icon over text on mobile (narrow columns), row from sm up */}
//               <div className="relative z-10 flex flex-col items-start gap-2.5 sm:flex-row sm:items-start sm:gap-4">
//                 <span
//                   className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-lg ring-1 transition-all duration-300 group-hover:-translate-y-0.5 sm:h-12 sm:w-12 ${accent.iconBg} ${accent.iconText} ${accent.iconRing} ${accent.iconGlow} ${accent.iconHoverGlow}`}
//                 >
//                   <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
//                 </span>

//                 <div className="min-w-0 flex-1 sm:pt-0.5">
//                   <h3 className="text-sm font-bold leading-tight tracking-tight text-white! sm:text-base">
//                     {item.title}
//                   </h3>
//                   <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/45 to-transparent"
//       />
//     </motion.div>
//   );
// }

// // Result cta
// function ResultsCTA() {
//   return (
//     <motion.div
//       variants={softScale}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-[2rem] border border-lime-300/20 bg-[#07111F] shadow-2xl shadow-slate-900/40"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_45%,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_88%_50%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.07),transparent_38%),linear-gradient(135deg,#07111F_0%,#0B1628_52%,#081526_100%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.1]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.04]"
//       />

//       <div className="relative z-10 grid gap-6 px-5 py-7 sm:px-7 sm:py-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 lg:px-10 lg:py-9">
//         <div className="flex justify-center lg:justify-start">
//           <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-lime-300/30 bg-gradient-to-br from-lime-300/20 to-lime-400/[0.03] text-lime-300 shadow-[0_0_36px_rgba(163,230,53,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
//             <div aria-hidden="true" className="absolute inset-[-9px] rounded-full border border-lime-300/15" />
//             <div aria-hidden="true" className="absolute inset-[-17px] rounded-full border border-sky-300/12" />
//             <Target className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11" strokeWidth={2.1} aria-hidden="true" />
//           </div>
//         </div>

//         <div
//           className="text-center lg:fade-divider-left lg:pl-6 lg:text-left"
//           style={{ "--fade-divider-inset": "1rem" } as FadeDividerStyle}
//         >
//           <h3 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-[1.75rem] lg:mx-0 lg:max-w-3xl lg:text-3xl">
//             {ctaContent.heading}
//           </h3>

//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300/90! sm:text-base lg:mx-0">
//             {ctaContent.description}
//           </p>
//         </div>

//         <div
//           className="flex flex-col items-center gap-3 lg:fade-divider-left lg:min-w-[300px] lg:items-end lg:pl-6"
//           style={{ "--fade-divider-inset": "1rem" } as FadeDividerStyle}
//         >
//           <button
//             type="button"
//             className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-4 text-base font-extrabold text-[#07111F] shadow-xl shadow-lime-400/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lime-400/40 active:translate-y-0 sm:w-auto sm:min-w-[260px]"
//           >
//             <span
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
//             />
//             <span className="relative">{ctaContent.buttonLabel}</span>
//             <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#07111F] text-lime-300 transition-transform duration-300 group-hover:translate-x-1">
//               <ArrowRight className="h-4 w-4" />
//             </span>
//           </button>

//           <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 sm:text-sm">
//             <ShieldCheck className="h-4 w-4 text-lime-300" aria-hidden="true" />
//             <span>{ctaContent.reassurance}</span>
//           </div>
//         </div>
//       </div>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
//       />
//     </motion.div>
//   );
// }

// export default function ResultsSection() {
//   return (
//     <section
//       aria-labelledby="results-heading"
//       className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_85%_25%,rgba(190,242,100,0.28),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(125,211,252,0.18),transparent_30%),linear-gradient(135deg,#F6F8EE_0%,#F8FAF2_42%,#EEF5DE_100%)] pb-1 pt-16 sm:pt-20 lg:pt-24"
//     >
//       <ResultsBackground />

//       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
//         <ResultsHeader />
//         <ProcessChips />
//         <ResultsShowcase />
//         <ResultsTrustStrip />
//         <ResultsCTA />
//       </div>
//     </section>
//   );
// }


// "use client";

// import {
//   Star,
//   BadgeCheck,
//   Trophy,
//   ChevronLeft,
//   ChevronRight,
//   Target,
//   GraduationCap,
//   BookOpen,
//   ArrowRight,
//   ShieldCheck,
//   type LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import type { CSSProperties } from "react";

// type FadeDividerStyle = CSSProperties & {
//   "--fade-divider-inset": string;
// };

// // left card /feature card data
// type FeaturedResult = {
//   badge: string;
//   exam: string;
//   score: string;
//   scoreLabel: string;
//   name: string;
//   program: string;
//   statement: string;
//   tags: string[];
//   image: string;
// };

// const featuredResult: FeaturedResult = {
//   badge: "Top Performer",
//   exam: "JEE Main 2025",
//   score: "98.7",
//   scoreLabel: "Percentile",
//   name: "Aarav Sharma",
//   program: "JEE Main 2025 · Two-Year Classroom Program",
//   statement: "Built consistency through weekly tests and focused doubt-solving.",
//   tags: ["Weekly Tests", "Doubt Support", "Mentorship"],
//   image: "/students/arjun-gupta.png",
// };

// // Right card
// type StudentResult = {
//   id: number;
//   category: string;
//   examType: "JEE" | "NEET" | "Boards" | "Foundation";
//   score: string;
//   scoreLabel?: string;
//   name: string;
//   program: string;
//   image: string;
//   accent: Accent;
//   icon: LucideIcon;
// };

// const studentResults: StudentResult[] = [
//   { id: 1, category: "JEE Main Achiever", examType: "JEE", score: "97.8", scoreLabel: "Percentile", name: "Riya Mehta", program: "Classroom Program", image: "/students/priya-sharma.png", accent: "sky", icon: Target },
//   { id: 2, category: "NEET Achiever", examType: "NEET", score: "640+", scoreLabel: "Score", name: "Aditya Verma", program: "Medical Preparation Program", image: "/students/rahul-singh.png", accent: "lime", icon: BadgeCheck },
//   { id: 3, category: "Class 12 Board Achiever", examType: "Boards", score: "95.6%", scoreLabel: "", name: "Sneha Kapoor", program: "Board Excellence Program", image: "/students/sneha-verma.png", accent: "sky", icon: GraduationCap },
//   { id: 4, category: "Foundation Achiever", examType: "Foundation", score: "94.2%", scoreLabel: "", name: "Kabir Singh", program: "Class 9 Foundation Program", image: "/students/vikram-joshi.png", accent: "lime", icon: BookOpen },

//   { id: 5, category: "JEE Advanced Qualifier", examType: "JEE", score: "1840", scoreLabel: "AIR", name: "Arjun Gupta", program: "Advanced Rankers Batch", image: "/students/arjun-gupta.png", accent: "sky", icon: Target },
//   { id: 6, category: "NEET Achiever", examType: "NEET", score: "625+", scoreLabel: "Score", name: "Priya Sharma", program: "Medical Preparation Program", image: "/students/priya-sharma.png", accent: "lime", icon: BadgeCheck },
//   { id: 7, category: "Board Excellence", examType: "Boards", score: "94.8%", scoreLabel: "", name: "Rahul Singh", program: "Class 12 Board Program", image: "/students/rahul-singh.png", accent: "sky", icon: GraduationCap },
//   { id: 8, category: "Foundation Achiever", examType: "Foundation", score: "93.5%", scoreLabel: "", name: "Sneha Verma", program: "Class 10 Foundation Program", image: "/students/sneha-verma.png", accent: "lime", icon: BookOpen },

//   { id: 9, category: "JEE Main Achiever", examType: "JEE", score: "96.9", scoreLabel: "Percentile", name: "Vikram Joshi", program: "Two-Year Classroom Program", image: "/students/vikram-joshi.png", accent: "sky", icon: Target },
//   { id: 10, category: "NEET Achiever", examType: "NEET", score: "615+", scoreLabel: "Score", name: "Aarav Sharma", program: "Medical Preparation Program", image: "/students/arjun-gupta.png", accent: "lime", icon: BadgeCheck },
//   { id: 11, category: "Class 12 Achiever", examType: "Boards", score: "96.2%", scoreLabel: "", name: "Riya Mehta", program: "Board Excellence Program", image: "/students/priya-sharma.png", accent: "sky", icon: GraduationCap },
//   { id: 12, category: "Foundation Achiever", examType: "Foundation", score: "92.7%", scoreLabel: "", name: "Aditya Verma", program: "Class 9 Foundation Program", image: "/students/rahul-singh.png", accent: "lime", icon: BookOpen },

//   { id: 13, category: "JEE Main Achiever", examType: "JEE", score: "98.1", scoreLabel: "Percentile", name: "Sneha Kapoor", program: "Classroom Program", image: "/students/sneha-verma.png", accent: "sky", icon: Target },
//   { id: 14, category: "NEET Achiever", examType: "NEET", score: "632+", scoreLabel: "Score", name: "Kabir Singh", program: "Medical Preparation Program", image: "/students/vikram-joshi.png", accent: "lime", icon: BadgeCheck },
//   { id: 15, category: "Board Topper", examType: "Boards", score: "97.1%", scoreLabel: "", name: "Priya Sharma", program: "Board Excellence Program", image: "/students/priya-sharma.png", accent: "sky", icon: GraduationCap },
//   { id: 16, category: "Foundation Achiever", examType: "Foundation", score: "95.3%", scoreLabel: "", name: "Arjun Gupta", program: "Class 10 Foundation Program", image: "/students/arjun-gupta.png", accent: "lime", icon: BookOpen },
// ];

// // constants
// const AUTO_ROTATE_INTERVAL = 7000; // slowed from 5500 — proof cards need reading time
// const MANUAL_PAUSE_DURATION = 9000;

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0 },
// };

// const softScale = {
//   hidden: { opacity: 0, y: 18, scale: 0.97 },
//   visible: { opacity: 1, y: 0, scale: 1 },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// // Matches Tailwind `sm` breakpoint — drives per-group count + auto-rotate gating
// function useIsDesktop() {
//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 640px)");
//     const update = () => setIsDesktop(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   return isDesktop;
// }

// function getResultAccentClasses(accent: StudentResult["accent"]) {
//   if (accent === "lime") {
//     return {
//       border: "border-lime-300/25",
//       icon: "text-lime-300",
//       iconBg: "bg-lime-300/10 ring-lime-300/20",
//       score: "text-[#A3E635]",
//       glow: "from-lime-300/12",
//     };
//   }

//   return {
//     border: "border-sky-300/25",
//     icon: "text-sky-300",
//     iconBg: "bg-sky-300/10 ring-sky-300/20",
//     score: "text-sky-300",
//     glow: "from-sky-300/12",
//   };
// }

// // result cta
// const ctaContent = {
//   heading: "Want to know how your child can improve with the right academic plan?",
//   description: "Get a personalized preparation roadmap from our academic team.",
//   buttonLabel: "Book Free Counselling",
//   reassurance: "100% Free · No Obligation",
// };

// function ResultsBackground() {
//   return (
//     <>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.16]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.20) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.55]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-40 h-[560px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),transparent_68%)]"
//       />
//       {/* Heavy colour blobs — desktop only (blur this large janks on mobile) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 top-10 hidden h-[460px] w-[460px] rounded-full bg-lime-300/30 blur-[100px] md:block"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-44 bottom-0 hidden h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[100px] md:block"
//       />
//     </>
//   );
// }

// function ResultsHeader() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
//     >
//       <motion.div
//         variants={fadeUp}
//         transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//         className="mb-4 inline-flex items-center justify-center gap-3"
//       >
//         <span className="h-px w-10 bg-lime-700/30" />
//         <span className="text-xs font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-sm">
//           Results &amp; Achievements
//         </span>
//         <span className="h-px w-10 bg-lime-700/30" />
//       </motion.div>

//       <motion.h2
//         id="results-heading"
//         variants={fadeUp}
//         transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         className="w-full text-center text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-[3.5rem]"
//       >
//         <span className="block text-[#06111F]">Where Preparation Turns Into</span>
//         <span className="block text-[#65A30D]">Proven Performance</span>
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
//       >
//         A glimpse of the outcomes achieved through focused classroom learning,
//         exam-oriented practice, regular testing, and personal academic mentoring.
//       </motion.p>
//     </motion.div>
//   );
// }

// // Result Cards
// function ResultsShowcase() {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-7"
//     >
//       <motion.div
//         variants={softScale}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="lg:col-span-6"
//       >
//         <FeaturedResultCard />
//       </motion.div>

//       <motion.div
//         variants={softScale}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="min-w-0 lg:col-span-6"
//       >
//         <RotatingResultsPanel />
//       </motion.div>
//     </motion.div>
//   );
// }

// // LEFT Feature card
// function FeaturedResultCard() {
//   return (
//     <article className="group relative min-h-[380px] overflow-hidden rounded-[2rem] border border-lime-400/30 bg-[#07111F] shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1 hover:border-lime-300/45 hover:shadow-lime-950/20 sm:min-h-[430px]">
//       {/* Base gradient */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_48%,rgba(163,230,53,0.26),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1628_48%,#081526_100%)]"
//       />

//       {/* Strong left readability overlay */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-y-0 left-0 z-[1] w-[64%] bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-transparent"
//       />

//       {/* Subtle dot texture */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-[2] opacity-[0.13]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       {/* Lime glow behind student */}
//       <div
//         aria-hidden="true"
//         className="absolute bottom-18 right-8 z-[3] h-80 w-80 rounded-full bg-lime-300/28 blur-[60px] transition-opacity duration-300 group-hover:opacity-90"
//       />

//       {/* Decorative rings behind image */}
//       <div
//         aria-hidden="true"
//         className="absolute right-6 top-16 z-[4] hidden h-72 w-72 rounded-full border border-dashed border-lime-300/20 lg:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute right-12 top-24 z-[4] hidden h-60 w-60 rounded-full border border-dashed border-lime-300/20 lg:block"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute right-20 top-28 z-[4] hidden h-48 w-48 rounded-full border border-dashed border-lime-300/18 lg:block"
//       />

//       {/* Student image */}
//       <Image
//         src={featuredResult.image}
//         alt={`${featuredResult.name}, ${featuredResult.exam} top performer at Kota Academy`}
//         className="pointer-events-none absolute -bottom-2 -right-12 z-10 h-[80%] max-h-[480px] w-auto object-cover object-bottom drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:right-[-38px] sm:h-[90%] lg:right-[-42px] lg:h-[95%]"
//         height={850}
//         width={720}
//         quality={100}
//         priority
//       />

//       {/* Content */}
//       <div className="relative z-20 flex min-h-[380px] flex-col justify-between p-5 sm:min-h-[430px] sm:p-6 lg:p-7">
//         <div>
//           {/* Badges */}
//           <div className="flex flex-wrap items-center gap-2.5">
//             <div className="inline-flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-300/10 px-3 py-1.5 text-xs font-bold text-amber-200 shadow-lg shadow-amber-400/10 sm:text-sm">
//               <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
//               {featuredResult.badge}
//             </div>

//             <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/[0.08] px-3 py-1.5 text-xs font-semibold text-lime-100 shadow-[0_0_22px_rgba(163,230,53,0.08)] backdrop-blur-md sm:text-sm">
//               <BadgeCheck className="h-4 w-4 text-lime-300" />
//               {featuredResult.exam}
//             </div>
//           </div>

//           {/* Score */}
//           <div className="mt-3 max-w-[340px] text-left">
//             <div className="text-[2.75rem] font-extrabold leading-none tracking-tight text-[#A3E635] sm:text-[4rem] lg:text-[4.75rem]">
//               {featuredResult.score}
//             </div>

//             <div className="mt-2 flex items-center gap-2">
//               <span className="h-px w-5 bg-lime-300/60 md:w-9" />
//               <span className="text-sm font-bold text-lime-300">
//                 {featuredResult.scoreLabel}
//               </span>
//               <span className="h-px w-5 bg-lime-300/60 md:w-9" />
//             </div>
//           </div>

//           {/* Student details */}
//           <div className="mt-3 max-w-[190px] text-left sm:max-w-[280px] md:mt-4 md:max-w-[460px] lg:max-w-[380px]">
//             <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
//               {featuredResult.name}
//             </h3>

//             <p className="mt-2 max-w-[300px] text-xs font-semibold leading-5 text-lime-300 sm:text-sm">
//               {featuredResult.program}
//             </p>

//             <p className="mt-3 max-w-[260px] text-sm leading-6 text-slate-300 md:mt-4">
//               {featuredResult.statement}
//             </p>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="mt-5 flex max-w-[340px] flex-wrap gap-2">
//           {featuredResult.tags.map((tag) => (
//             <span
//               key={tag}
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[11px] font-semibold text-slate-200/90 backdrop-blur-md"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Bottom lime edge */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent"
//       />
//     </article>
//   );
// }

// // ResultCard
// function ResultCard({ result }: { result: StudentResult }) {
//   const Icon = result.icon;
//   const accent = getResultAccentClasses(result.accent);

//   return (
//     <article
//       className={`group relative min-h-[140px] w-full min-w-0 overflow-hidden rounded-2xl border ${accent.border} bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.065]`}
//     >
//       <div
//         aria-hidden="true"
//         className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-transparent to-transparent opacity-70`}
//       />

//       <div className="relative z-10 grid h-full min-w-0 grid-cols-[82px_minmax(0,1fr)] gap-3">
//         <div className="relative min-h-[116px] overflow-hidden rounded-xl">
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-lime-300/12 to-transparent"
//           />

//           <Image
//             src={result.image}
//             alt={`${result.name}, ${result.category} at Kota Academy`}
//             fill
//             quality={95}
//             sizes="(max-width: 768px) 120px, 140px"
//             className="relative z-10 object-cover object-bottom transition-transform duration-300 group-hover:scale-[1.03]"
//           />
//         </div>

//         <div className="flex min-w-0 flex-col justify-between py-0.5">
//           <div>
//             <div className="flex items-center gap-2">
//               <span
//                 className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${accent.iconBg} ring-1`}
//               >
//                 <Icon className={`h-3.5 w-3.5 ${accent.icon}`} />
//               </span>

//               <p className="line-clamp-1 text-[11px] font-semibold uppercase tracking-[0.02em] text-slate-200">
//                 {result.category}
//               </p>
//             </div>

//             <div
//               className={`mt-2.5 text-[2.25rem] font-extrabold leading-none tracking-tight ${accent.score}`}
//             >
//               {result.score}
//             </div>

//             {result.scoreLabel ? (
//               <p className={`mt-0.5 text-xs font-semibold ${accent.score}`}>
//                 {result.scoreLabel}
//               </p>
//             ) : null}
//           </div>

//           <div className="mt-2">
//             <h4 className="truncate text-[15px] font-bold leading-5 text-white">
//               {result.name}
//             </h4>
//             <p className="truncate text-xs font-medium text-slate-400">
//               {result.program}
//             </p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// // rotating card
// function RotatingResultsPanel() {
//   const [activeGroup, setActiveGroup] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const manualPauseTimeoutRef = useRef<number | null>(null);
//   const shouldReduceMotion = useReducedMotion();
//   const isDesktop = useIsDesktop();

//   // 2 cards per page on mobile (keeps the panel short), 4 on desktop
//   const perGroup = isDesktop ? 4 : 2;
//   const totalGroups = Math.ceil(studentResults.length / perGroup);

//   // keep activeGroup valid when perGroup (and thus totalGroups) changes
//   useEffect(() => {
//     setActiveGroup((g) => Math.min(g, Math.max(0, totalGroups - 1)));
//   }, [totalGroups]);

//   const visibleResults = studentResults.slice(
//     activeGroup * perGroup,
//     activeGroup * perGroup + perGroup,
//   );

//   // auto-rotate: desktop only (no hover-to-pause on touch, don't move while reading)
//   useEffect(() => {
//     if (shouldReduceMotion || isPaused || !isDesktop || totalGroups <= 1) return;

//     const intervalId = window.setInterval(() => {
//       setActiveGroup((current) => (current === totalGroups - 1 ? 0 : current + 1));
//     }, AUTO_ROTATE_INTERVAL);

//     return () => window.clearInterval(intervalId);
//   }, [shouldReduceMotion, isPaused, isDesktop, totalGroups]);

//   useEffect(() => {
//     return () => {
//       if (manualPauseTimeoutRef.current) {
//         window.clearTimeout(manualPauseTimeoutRef.current);
//       }
//     };
//   }, []);

//   function pauseAfterManualInteraction() {
//     setIsPaused(true);
//     if (manualPauseTimeoutRef.current !== null) {
//       window.clearTimeout(manualPauseTimeoutRef.current);
//     }
//     manualPauseTimeoutRef.current = window.setTimeout(() => {
//       setIsPaused(false);
//       manualPauseTimeoutRef.current = null;
//     }, MANUAL_PAUSE_DURATION);
//   }

//   function handlePrevious() {
//     pauseAfterManualInteraction();
//     setActiveGroup((current) => (current === 0 ? totalGroups - 1 : current - 1));
//   }

//   function handleNext() {
//     pauseAfterManualInteraction();
//     setActiveGroup((current) => (current === totalGroups - 1 ? 0 : current + 1));
//   }

//   function goToGroup(index: number) {
//     pauseAfterManualInteraction();
//     setActiveGroup(index);
//   }

//   return (
//     <section
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onFocus={() => setIsPaused(true)}
//       onBlur={() => setIsPaused(false)}
//       className="relative min-h-[320px] w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111F] p-4 shadow-2xl shadow-slate-900/20 sm:min-h-[430px] sm:p-5"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.13),transparent_34%),linear-gradient(135deg,#07111F_0%,#0B1628_52%,#081526_100%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative z-10 flex h-full min-h-[280px] flex-col sm:min-h-[390px]">
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex min-w-0 items-center gap-2.5">
//             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300 ring-1 ring-lime-300/20">
//               <Trophy className="h-4 w-4" />
//             </span>

//             <p className="truncate text-sm font-bold text-slate-100 sm:text-[15px]">
//               <span className="hidden sm:inline">
//                 20+ Results Across JEE, NEET, Boards &amp; Foundation
//               </span>
//               <span className="sm:hidden">20+ Student Results</span>
//             </p>
//           </div>

//           <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
//             <button
//               type="button"
//               aria-label="Show previous results"
//               onClick={handlePrevious}
//               className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-lime-300/40 hover:text-lime-300"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </button>

//             <div className="flex items-center gap-1.5 px-0.5">
//               {Array.from({ length: totalGroups }).map((_, index) => {
//                 const isActive = index === activeGroup;

//                 return (
//                   <button
//                     key={index}
//                     type="button"
//                     aria-label={`Show result group ${index + 1}`}
//                     aria-current={isActive ? "true" : undefined}
//                     onClick={() => goToGroup(index)}
//                     className={
//                       isActive
//                         ? "h-2 w-5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.7)] transition-all duration-300"
//                         : "h-2 w-2 rounded-full bg-slate-500/70 transition-all duration-300 hover:bg-slate-400"
//                     }
//                   />
//                 );
//               })}
//             </div>

//             <button
//               type="button"
//               aria-label="Show next results"
//               onClick={handleNext}
//               className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-lime-300/40 hover:text-lime-300"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         <div className="mt-4 grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2">
//           <AnimatePresence mode="popLayout">
//             {visibleResults.map((result, index) => (
//               <motion.div
//                 key={result.id}
//                 layout={!shouldReduceMotion}
//                 initial={shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
//                 transition={{
//                   duration: 0.35,
//                   delay: shouldReduceMotion ? 0 : index * 0.05,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 <ResultCard result={result} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
//       />
//     </section>
//   );
// }

// // Result verification band
// type Accent = "lime" | "sky";

// // Slim verification band — the one thing a results section uniquely needs:
// // a confident, honest trust signal (no other section does this). Keep this
// // copy truthful — only ship it once real scorecards are actually on file.
// function ResultsVerification() {
//   return (
//     <motion.div
//       variants={softScale}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111F] shadow-2xl shadow-slate-900/40 sm:rounded-[1.75rem]"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(163,230,53,0.10),transparent_45%),radial-gradient(circle_at_85%_50%,rgba(56,189,248,0.07),transparent_45%)]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.07]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
//       />

//       <div className="relative z-10 flex flex-col items-center gap-3.5 px-5 py-5 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:py-4 sm:text-left">
//         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300 shadow-[0_0_28px_rgba(163,230,53,0.12)] ring-1 ring-lime-300/25">
//           <ShieldCheck className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
//         </span>

//         <p className="max-w-2xl text-sm leading-6 text-slate-300/90 sm:text-[15px]">
//           <span className="font-bold text-white">Real students, verified results.</span>{" "}
//           Every score above is backed by an original scorecard — available for review at our
//           Greater Noida centre.
//         </p>
//       </div>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/45 to-transparent"
//       />
//     </motion.div>
//   );
// }

// // Result cta — compact: icon hidden on mobile, smaller on desktop, tighter padding
// function ResultsCTA() {
//   return (
//     <motion.div
//       variants={softScale}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-[2rem] border border-lime-300/20 bg-[#07111F] shadow-2xl shadow-slate-900/40"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_45%,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_88%_50%,rgba(163,230,53,0.12),transparent_30%),radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.07),transparent_38%),linear-gradient(135deg,#07111F_0%,#0B1628_52%,#081526_100%)]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.1]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/[0.04]"
//       />

//       <div className="relative z-10 grid gap-5 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-9 lg:px-10 lg:py-7">
//         {/* Icon visual — hidden on mobile to save height */}
//         <div className="hidden justify-center sm:flex lg:justify-start">
//           <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-lime-300/30 bg-gradient-to-br from-lime-300/20 to-lime-400/[0.03] text-lime-300 shadow-[0_0_32px_rgba(163,230,53,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] lg:h-16 lg:w-16">
//             <div aria-hidden="true" className="absolute inset-[-7px] rounded-full border border-lime-300/15" />
//             <div aria-hidden="true" className="absolute inset-[-14px] rounded-full border border-sky-300/12" />
//             <Target className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={2.1} aria-hidden="true" />
//           </div>
//         </div>

//         {/* Text */}
//         <div
//           className="text-center lg:fade-divider-left lg:pl-6 lg:text-left"
//           style={{ "--fade-divider-inset": "0.75rem" } as FadeDividerStyle}
//         >
//           <h3 className="mx-auto max-w-2xl text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl lg:mx-0 lg:max-w-3xl lg:text-[1.75rem]">
//             {ctaContent.heading}
//           </h3>
//           <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300/90! lg:mx-0">
//             {ctaContent.description}
//           </p>
//         </div>

//         {/* Button area */}
//         <div
//           className="flex flex-col items-center gap-2.5 lg:fade-divider-left lg:min-w-[290px] lg:items-end lg:pl-6"
//           style={{ "--fade-divider-inset": "0.75rem" } as FadeDividerStyle}
//         >
//           <button
//             type="button"
//             className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-3.5 text-[15px] font-extrabold text-[#07111F] shadow-xl shadow-lime-400/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lime-400/40 active:translate-y-0 sm:w-auto sm:min-w-[250px]"
//           >
//             <span
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
//             />
//             <span className="relative">{ctaContent.buttonLabel}</span>
//             <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#07111F] text-lime-300 transition-transform duration-300 group-hover:translate-x-1">
//               <ArrowRight className="h-4 w-4" />
//             </span>
//           </button>

//           <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 sm:text-sm">
//             <ShieldCheck className="h-4 w-4 text-lime-300" aria-hidden="true" />
//             <span>{ctaContent.reassurance}</span>
//           </div>
//         </div>
//       </div>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
//       />
//     </motion.div>
//   );
// }

// export default function ResultsSection() {
//   return (
//     <section
//       aria-labelledby="results-heading"
//       className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_85%_25%,rgba(190,242,100,0.28),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(125,211,252,0.18),transparent_30%),linear-gradient(135deg,#F6F8EE_0%,#F8FAF2_42%,#EEF5DE_100%)] pb-1 pt-16 sm:pt-20 lg:pt-24"
//     >
//       <ResultsBackground />

//       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
//         <ResultsHeader />
//         <ResultsShowcase />
//         <ResultsVerification />
//         <ResultsCTA />
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Star,
  BadgeCheck,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Target,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

/* ============================================================================
   ResultsSection — Kota Academy (v2)
   Audit fixes vs v1:
   · Sky accent → brand GOLD (#F5B642). Palette is navy/lime/gold only.
   · Data integrity: every photo is bound to ONE name (matches its filename);
     results without a real photo render an initials avatar — no face is ever
     reused under a different identity. Swap-ready for real students.
   · Dashed rings + CTA ring circles → dot-grid (site-wide motif rule).
   · Verification band → light glass strip (breaks the triple-navy-slab rhythm).
   · CTA is a real <a href="#counselling"> (was an inert button).
   · Scores COUNT UP on view (system language: hero "30", Why-section stats).
   · Mobile: swipe snap-carousel (site gesture language) instead of 8-dot pager.
   · Token unification: greens match the sitewide header system.
   ----------------------------------------------------------------------------
   SWAP POINT: studentResults / featuredResult — demo data. Add `image` per
   entry as real photos arrive; entries without `image` show initials.
============================================================================ */

/* --------------------------------- palette -------------------------------- */

const NAVY_CARD = "#07111F";
const LIME = "#B5FF3D";
const GOLD = "#F5B642";
const GREEN_DEEP = "#3E9A12";
const EYEBROW_GREEN = "#2F7D17";

/* --------------------------------- data ----------------------------------- */

type FeaturedResult = {
  badge: string;
  exam: string;
  score: string;
  scoreLabel: string;
  name: string;
  program: string;
  statement: string;
  tags: string[];
  image: string;
};

/* DEMO — name matches the photo's filename; swap whole object for the real topper */
const featuredResult: FeaturedResult = {
  badge: "Top Performer",
  exam: "JEE Main 2025",
  score: "98.7",
  scoreLabel: "Percentile",
  name: "Arjun Gupta",
  program: "JEE Main 2025 · Two-Year Classroom Program",
  statement: "Built consistency through weekly tests and focused doubt-solving.",
  tags: ["Weekly Tests", "Doubt Support", "Mentorship"],
  image: "/students/arjun-gupta.png",
};

type Accent = "lime" | "gold";

type StudentResult = {
  id: number;
  category: string;
  score: string;
  scoreLabel?: string;
  name: string;
  program: string;
  /** optional — entries without a photo render an initials avatar */
  image?: string;
  accent: Accent;
  icon: LucideIcon;
};

/* DEMO — 8 unique people. Photos appear ONLY under their own name. */
const studentResults: StudentResult[] = [
  { id: 1, category: "JEE Main", score: "97.8", scoreLabel: "Percentile", name: "Priya Sharma", program: "Two-Year Classroom Program", image: "/students/priya-sharma.png", accent: "lime", icon: Target },
  { id: 2, category: "NEET", score: "640+", scoreLabel: "Score", name: "Rahul Singh", program: "Medical Preparation Program", image: "/students/rahul-singh.png", accent: "gold", icon: BadgeCheck },
  { id: 3, category: "Class 12 Boards", score: "95.6%", name: "Sneha Verma", program: "Board Excellence Program", image: "/students/sneha-verma.png", accent: "lime", icon: GraduationCap },
  { id: 4, category: "JEE Advanced", score: "1840", scoreLabel: "AIR", name: "Vikram Joshi", program: "Advanced Rankers Batch", image: "/students/vikram-joshi.png", accent: "gold", icon: Target },

  { id: 5, category: "NEET", score: "625+", scoreLabel: "Score", name: "Riya Mehta", program: "Medical Preparation Program", accent: "lime", icon: BadgeCheck },
  { id: 6, category: "Class 10 Foundation", score: "94.2%", name: "Aditya Verma", program: "Foundation Program", accent: "gold", icon: BookOpen },
  { id: 7, category: "JEE Main", score: "96.9", scoreLabel: "Percentile", name: "Kabir Singh", program: "Classroom Program", accent: "gold", icon: Target },
  { id: 8, category: "Class 12 Boards", score: "96.2%", name: "Ananya Iyer", program: "Board Excellence Program", accent: "lime", icon: GraduationCap },
];

const ctaContent = {
  heading: "Want to know how your child can improve with the right academic plan?",
  description: "Get a personalized preparation roadmap from our academic team.",
  buttonLabel: "Book Free Counselling",
  reassurance: "100% Free · No Obligation",
};

const AUTO_ROTATE_INTERVAL = 7000;
const MANUAL_PAUSE_DURATION = 9000;
const PER_GROUP = 4;
const TOTAL_GROUPS = Math.ceil(studentResults.length / PER_GROUP);

/* --------------------------------- motion --------------------------------- */

const EXPO = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const softScale = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ------------------------------ small helpers ----------------------------- */

const accentStyles = (accent: Accent) =>
  accent === "lime"
    ? {
        border: "1px solid rgba(181,255,61,0.25)",
        score: LIME,
        iconColor: LIME,
        iconBg: {
          background: "rgba(181,255,61,0.1)",
          boxShadow: "inset 0 0 0 1px rgba(181,255,61,0.22)",
        } as CSSProperties,
        glow: "rgba(181,255,61,0.12)",
      }
    : {
        border: "1px solid rgba(245,182,66,0.3)",
        score: GOLD,
        iconColor: GOLD,
        iconBg: {
          background: "rgba(245,182,66,0.1)",
          boxShadow: "inset 0 0 0 1px rgba(245,182,66,0.25)",
        } as CSSProperties,
        glow: "rgba(245,182,66,0.12)",
      };

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** "98.7" | "640+" | "95.6%" | "1840" → counts up on first view */
function ScoreCount({
  score,
  style,
  className,
}: {
  score: string;
  style?: CSSProperties;
  className?: string;
}) {
  const match = score.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals =
    match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1300;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target]);

  return (
    <span ref={ref} style={style} className={className}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* dot-grid texture (replaces banned ring circles) */
const dotGrid = (color: string, size = 22): CSSProperties => ({
  backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1px, transparent 0)`,
  backgroundSize: `${size}px ${size}px`,
});

/* ============================== section shell ============================== */

export default function ResultsSection() {
  return (
    <section
      aria-labelledby="results-heading"
      className="relative flex justify-center overflow-hidden pb-1 pt-16 sm:pt-20 lg:pt-24"
      style={{
        background:
          "radial-gradient(circle at 85% 25%, rgba(190,242,100,0.26), transparent 32%), radial-gradient(circle at 10% 70%, rgba(245,182,66,0.10), transparent 30%), linear-gradient(135deg, #F6F8EE 0%, #F8FAF2 42%, #EEF5DE 100%)",
      }}
    >
      <ResultsBackground />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <ResultsHeader />
        <ResultsShowcase />
        <ResultsVerification />
        <ResultsCTA />
      </div>
    </section>
  );
}

function ResultsBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={dotGrid("rgba(15,23,42,0.20)", 24)}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-40 h-[560px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.72), transparent 68%)",
        }}
      />
      {/* colour blobs — desktop only; gold replaces the off-brand sky */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 hidden h-[460px] w-[460px] rounded-full blur-[100px] md:block"
        style={{ background: "rgba(190,242,100,0.3)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-44 bottom-0 hidden h-[420px] w-[420px] rounded-full blur-[100px] md:block"
        style={{ background: "rgba(245,182,66,0.14)" }}
      />
    </>
  );
}

/* --------------------------------- header --------------------------------- */

function ResultsHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
    >
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.55, ease: EXPO }}
        className="mb-4 inline-flex items-center justify-center gap-3"
      >
        <span className="h-px w-10" style={{ background: "rgba(78,148,23,0.45)" }} />
        <span
          className="text-xs font-bold uppercase tracking-[0.24em] sm:text-sm"
          style={{ color: EYEBROW_GREEN }}
        >
          Results &amp; Achievements
        </span>
        <span className="h-px w-10" style={{ background: "rgba(78,148,23,0.45)" }} />
      </motion.div>

      <motion.h2
        id="results-heading"
        variants={fadeUp}
        transition={{ duration: 0.65, ease: EXPO }}
        className="w-full text-center text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-[3.5rem]"
      >
        <span className="block" style={{ color: "#06111F" }}>
          Where Preparation Turns Into
        </span>
        <span className="block" style={{ color: GREEN_DEEP }}>
          Proven Performance
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.6, ease: EXPO }}
        className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
      >
        A glimpse of the outcomes achieved through focused classroom learning,
        exam-oriented practice, regular testing, and personal academic mentoring.
      </motion.p>
    </motion.div>
  );
}

/* -------------------------------- showcase -------------------------------- */

function ResultsShowcase() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-7"
    >
      <motion.div
        variants={softScale}
        transition={{ duration: 0.7, ease: EXPO }}
        className="lg:col-span-6"
      >
        <FeaturedResultCard />
      </motion.div>

      <motion.div
        variants={softScale}
        transition={{ duration: 0.7, ease: EXPO }}
        className="min-w-0 lg:col-span-6"
      >
        <ResultsPanel />
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------- featured card ------------------------------ */

function FeaturedResultCard() {
  return (
    <article
      className="group relative min-h-[380px] overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-1 sm:min-h-[430px]"
      style={{
        background: NAVY_CARD,
        border: "1px solid rgba(181,255,61,0.3)",
        boxShadow: "0 25px 50px -12px rgba(15,23,42,0.2)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 78% 48%, rgba(181,255,61,0.24), transparent 34%), linear-gradient(135deg, #07111F 0%, #0B1628 48%, #081526 100%)",
        }}
      />
      {/* left readability overlay */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-[1] w-[64%]"
        style={{
          background:
            "linear-gradient(90deg, #07111F 0%, rgba(7,17,31,0.95) 55%, transparent 100%)",
        }}
      />
      {/* dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] opacity-[0.13]"
        style={dotGrid("rgba(255,255,255,0.24)")}
      />
      {/* lime glow behind student */}
      <div
        aria-hidden
        className="absolute bottom-16 right-8 z-[3] h-80 w-80 rounded-full blur-[60px] transition-opacity duration-300 group-hover:opacity-90"
        style={{ background: "rgba(181,255,61,0.26)" }}
      />
      {/* dot-grid burst behind the student — replaces the dashed rings */}
      <div
        aria-hidden
        className="absolute right-0 top-8 z-[4] hidden h-[340px] w-[340px] lg:block"
        style={{
          ...dotGrid("rgba(181,255,61,0.4)", 18),
          maskImage: "radial-gradient(circle at 60% 45%, #000 0%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at 60% 45%, #000 0%, transparent 68%)",
        }}
      />

      <Image
        src={featuredResult.image}
        alt={`${featuredResult.name}, ${featuredResult.exam} top performer at Kota Academy`}
        className="pointer-events-none absolute -bottom-2 -right-12 z-10 h-[80%] max-h-[480px] w-auto object-cover object-bottom drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:right-[-38px] sm:h-[90%] lg:right-[-42px] lg:h-[95%]"
        height={850}
        width={720}
        quality={85}
        priority
      />

      <div className="relative z-20 flex min-h-[380px] flex-col justify-between p-5 sm:min-h-[430px] sm:p-6 lg:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <div
              className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold sm:text-sm"
              style={{
                border: "1px solid rgba(245,182,66,0.4)",
                background: "rgba(245,182,66,0.1)",
                color: "#FAD58C",
                boxShadow: "0 8px 24px -8px rgba(245,182,66,0.25)",
              }}
            >
              <Star className="h-4 w-4" style={{ color: GOLD, fill: GOLD }} />
              {featuredResult.badge}
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md sm:text-sm"
              style={{
                border: "1px solid rgba(181,255,61,0.25)",
                background: "rgba(181,255,61,0.08)",
                color: "#E5FBC8",
                boxShadow: "0 0 22px rgba(181,255,61,0.08)",
              }}
            >
              <BadgeCheck className="h-4 w-4" style={{ color: LIME }} />
              {featuredResult.exam}
            </div>
          </div>

          {/* score — counts up on view */}
          <div className="mt-3 max-w-[340px] text-left">
            <div className="text-[2.75rem] font-extrabold leading-none tracking-tight sm:text-[4rem] lg:text-[4.75rem]">
              <ScoreCount score={featuredResult.score} style={{ color: LIME }} />
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span
                className="h-px w-5 md:w-9"
                style={{ background: "rgba(181,255,61,0.6)" }}
              />
              <span className="text-sm font-bold" style={{ color: LIME }}>
                {featuredResult.scoreLabel}
              </span>
              <span
                className="h-px w-5 md:w-9"
                style={{ background: "rgba(181,255,61,0.6)" }}
              />
            </div>
          </div>

          <div className="mt-3 max-w-[210px] text-left sm:max-w-[280px] md:mt-4 md:max-w-[460px] lg:max-w-[380px]">
            <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {featuredResult.name}
            </h3>

            <p
              className="mt-2 max-w-[300px] text-xs font-semibold leading-5 sm:text-sm"
              style={{ color: LIME }}
            >
              {featuredResult.program}
            </p>

            <p className="mt-3 max-w-[260px] text-sm leading-6 text-slate-300 md:mt-4">
              {featuredResult.statement}
            </p>
          </div>
        </div>

        <div className="mt-5 flex max-w-[340px] flex-wrap gap-2">
          {featuredResult.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold backdrop-blur-md"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.045)",
                color: "rgba(226,232,240,0.9)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: LIME }}
              />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(181,255,61,0.8), transparent)",
        }}
      />
    </article>
  );
}

/* ------------------------------- result card ------------------------------ */

function ResultCard({ result }: { result: StudentResult }) {
  const Icon = result.icon;
  const a = accentStyles(result.accent);

  return (
    <article
      className="group relative min-h-[140px] w-full min-w-0 overflow-hidden rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1"
      style={{ border: a.border, background: "rgba(255,255,255,0.04)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background: `linear-gradient(135deg, ${a.glow}, transparent 55%)`,
        }}
      />

      <div className="relative z-10 grid h-full min-w-0 grid-cols-[82px_minmax(0,1fr)] gap-3">
        {/* photo when real, initials avatar otherwise — faces are never reused */}
        <div className="relative min-h-[116px] overflow-hidden rounded-xl">
          {result.image ? (
            <>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(181,255,61,0.12), transparent)",
                }}
              />
              <Image
                src={result.image}
                alt={`${result.name}, ${result.category} achiever at Kota Academy`}
                fill
                quality={85}
                sizes="(max-width: 768px) 120px, 140px"
                className="relative z-10 object-cover object-bottom transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </>
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                background: "linear-gradient(160deg, #11253E 0%, #0A1830 100%)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="text-xl font-extrabold tracking-wide"
                style={{ color: a.score }}
                aria-hidden
              >
                {initialsOf(result.name)}
              </span>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col justify-between py-0.5">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                style={a.iconBg}
              >
                <Icon className="h-3.5 w-3.5" style={{ color: a.iconColor }} />
              </span>

              <p className="line-clamp-1 text-[11px] font-semibold uppercase tracking-[0.02em] text-slate-200">
                {result.category}
              </p>
            </div>

            <div className="mt-2.5 text-[2.25rem] font-extrabold leading-none tracking-tight">
              <ScoreCount score={result.score} style={{ color: a.score }} />
            </div>

            {result.scoreLabel ? (
              <p className="mt-0.5 text-xs font-semibold" style={{ color: a.score }}>
                {result.scoreLabel}
              </p>
            ) : null}
          </div>

          <div className="mt-2">
            <h4 className="truncate text-[15px] font-bold leading-5 text-white">
              {result.name}
            </h4>
            <p className="truncate text-xs font-medium text-slate-400">
              {result.program}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------ results panel ----------------------------- */
/*  sm+: paged grid, auto-rotate, arrows + dots.                              */
/*  Mobile: swipe snap-carousel — the site's gesture language.                */

function ResultsPanel() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const manualPauseTimeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const visibleResults = studentResults.slice(
    activeGroup * PER_GROUP,
    activeGroup * PER_GROUP + PER_GROUP,
  );

  useEffect(() => {
    if (shouldReduceMotion || isPaused || TOTAL_GROUPS <= 1) return;
    const id = window.setInterval(() => {
      setActiveGroup((c) => (c === TOTAL_GROUPS - 1 ? 0 : c + 1));
    }, AUTO_ROTATE_INTERVAL);
    return () => window.clearInterval(id);
  }, [shouldReduceMotion, isPaused]);

  useEffect(() => {
    return () => {
      if (manualPauseTimeoutRef.current)
        window.clearTimeout(manualPauseTimeoutRef.current);
    };
  }, []);

  function pauseAfterManualInteraction() {
    setIsPaused(true);
    if (manualPauseTimeoutRef.current !== null)
      window.clearTimeout(manualPauseTimeoutRef.current);
    manualPauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      manualPauseTimeoutRef.current = null;
    }, MANUAL_PAUSE_DURATION);
  }

  const handlePrevious = () => {
    pauseAfterManualInteraction();
    setActiveGroup((c) => (c === 0 ? TOTAL_GROUPS - 1 : c - 1));
  };
  const handleNext = () => {
    pauseAfterManualInteraction();
    setActiveGroup((c) => (c === TOTAL_GROUPS - 1 ? 0 : c + 1));
  };
  const goToGroup = (i: number) => {
    pauseAfterManualInteraction();
    setActiveGroup(i);
  };

  return (
    <section
      aria-label="Student results across JEE, NEET, Boards and Foundation"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative min-h-[320px] w-full min-w-0 overflow-hidden rounded-[2rem] p-4 sm:min-h-[430px] sm:p-5"
      style={{
        background: NAVY_CARD,
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 25px 50px -12px rgba(15,23,42,0.2)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(245,182,66,0.1), transparent 34%), linear-gradient(135deg, #07111F 0%, #0B1628 52%, #081526 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={dotGrid("rgba(255,255,255,0.24)")}
      />

      <div className="relative z-10 flex h-full min-h-[280px] flex-col sm:min-h-[390px]">
        {/* header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "rgba(181,255,61,0.1)",
                color: LIME,
                boxShadow: "inset 0 0 0 1px rgba(181,255,61,0.2)",
              }}
            >
              <Trophy className="h-4 w-4" />
            </span>

            <p className="truncate text-sm font-bold text-slate-100 sm:text-[15px]">
              <span className="hidden sm:inline">
                Results Across JEE, NEET, Boards &amp; Foundation
              </span>
              <span className="sm:hidden">Student Results</span>
            </p>
          </div>

          {/* controls — sm+ only; mobile swipes */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Show previous results"
              onClick={handlePrevious}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:text-[#B5FF3D]"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5 px-0.5">
              {Array.from({ length: TOTAL_GROUPS }).map((_, index) => {
                const isActive = index === activeGroup;
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show result group ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goToGroup(index)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={
                      isActive
                        ? {
                            width: 20,
                            background: LIME,
                            boxShadow: "0 0 12px rgba(181,255,61,0.7)",
                          }
                        : { width: 8, background: "rgba(100,116,139,0.7)" }
                    }
                  />
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Show next results"
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:text-[#B5FF3D]"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* MOBILE: swipe carousel over all results */}
        <div
          className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 sm:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {studentResults.map((result) => (
            <div key={result.id} className="w-[82%] shrink-0 snap-center">
              <ResultCard result={result} />
            </div>
          ))}
        </div>

        {/* DESKTOP: paged grid with rotation */}
        <div className="mt-4 hidden flex-1 grid-cols-2 gap-3.5 sm:grid">
          <AnimatePresence mode="popLayout">
            {visibleResults.map((result, index) => (
              <motion.div
                key={result.id}
                layout={!shouldReduceMotion}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, y: -8, scale: 0.98 }
                }
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                  ease: EXPO,
                }}
              >
                <ResultCard result={result} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,182,66,0.55), transparent)",
        }}
      />
    </section>
  );
}

/* --------------------------- verification band ---------------------------- */
/*  LIGHT glass strip — breaks the navy-slab rhythm so the CTA pops below.    */
/*  Keep this copy truthful — ship only once real scorecards are on file.     */

function ResultsVerification() {
  return (
    <motion.div
      variants={softScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EXPO }}
      className="relative mx-auto mt-6 w-full max-w-7xl"
    >
      {/* gradient hairline frame */}
      <div
        className="rounded-[1.5rem] p-px sm:rounded-[1.75rem]"
        style={{
          background:
            "linear-gradient(120deg, rgba(181,255,61,0.55), rgba(11,27,51,0.1) 35%, rgba(11,27,51,0.1) 65%, rgba(245,182,66,0.45))",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[calc(1.5rem-1px)] backdrop-blur-sm sm:rounded-[calc(1.75rem-1px)]"
          style={{ background: "rgba(255,255,255,0.78)" }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(480px 120px at 50% -30%, rgba(181,255,61,0.16), transparent)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-3.5 px-5 py-5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:py-4 sm:text-left">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "#EAF7DC",
                color: "#2C7A12",
                boxShadow: "inset 0 0 0 1px rgba(95,176,22,0.3)",
              }}
            >
              <ShieldCheck className="h-5 w-5" strokeWidth={2.1} aria-hidden />
            </span>

            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
              <span className="font-bold" style={{ color: "#0B1B33" }}>
                Real students, verified results.
              </span>{" "}
              Every score above is backed by an original scorecard — available
              for review at our Greater Noida centre.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ----------------------------------- CTA ---------------------------------- */

function ResultsCTA() {
  return (
    <motion.div
      variants={softScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EXPO }}
      className="relative mx-auto mt-6 w-full max-w-7xl overflow-hidden rounded-[2rem]"
      style={{
        background: NAVY_CARD,
        border: "1px solid rgba(181,255,61,0.2)",
        boxShadow: "0 25px 50px -12px rgba(15,23,42,0.4)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 45%, rgba(181,255,61,0.15), transparent 28%), radial-gradient(circle at 88% 50%, rgba(245,182,66,0.1), transparent 30%), linear-gradient(135deg, #07111F 0%, #0B1628 52%, #081526 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={dotGrid("rgba(255,255,255,0.24)")}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />

      <div className="relative z-10 grid gap-5 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-9 lg:px-10 lg:py-7">
        {/* icon — dot-grid halo instead of ring circles */}
        <div className="hidden justify-center sm:flex lg:justify-start">
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-6"
              style={{
                ...dotGrid("rgba(181,255,61,0.4)", 12),
                maskImage:
                  "radial-gradient(circle at center, #000 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, #000 0%, transparent 70%)",
              }}
            />
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl lg:h-16 lg:w-16"
              style={{
                background:
                  "linear-gradient(145deg, rgba(181,255,61,0.18), rgba(181,255,61,0.03))",
                color: LIME,
                boxShadow:
                  "inset 0 0 0 1px rgba(181,255,61,0.3), 0 0 32px rgba(181,255,61,0.18)",
              }}
            >
              <Target
                className="h-7 w-7 lg:h-8 lg:w-8"
                strokeWidth={2.1}
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="text-center lg:pl-6 lg:text-left">
          <h3 className="mx-auto max-w-2xl text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl lg:mx-0 lg:max-w-3xl lg:text-[1.75rem]">
            {ctaContent.heading}
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300 lg:mx-0">
            {ctaContent.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2.5 lg:min-w-[290px] lg:items-end lg:pl-6">
          {/* working anchor — was an inert <button> */}
          <a
            href="#counselling"
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3.5 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:min-w-[250px]"
            style={{
              background:
                "linear-gradient(90deg, #C8FF55 0%, #A8E837 50%, #5FB016 100%)",
              color: "#07111F",
              boxShadow: "0 20px 40px -12px rgba(149,222,49,0.35)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            <span className="relative">{ctaContent.buttonLabel}</span>
            <span
              className="relative flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
              style={{ background: "#07111F", color: LIME }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 sm:text-sm">
            <ShieldCheck className="h-4 w-4" style={{ color: LIME }} aria-hidden />
            <span>{ctaContent.reassurance}</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(181,255,61,0.7), transparent)",
        }}
      />
    </motion.div>
  );
}