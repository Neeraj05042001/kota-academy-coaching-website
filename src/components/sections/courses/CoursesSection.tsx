// "use client";

// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ClipboardCheck,
//   FlaskConical,
//   GraduationCap,
//   Lightbulb,
//   Medal,
//   Microscope,
//   PenTool,
//   Rocket,
//   ShieldCheck,
//   Stethoscope,
//   Target,
//   Trophy,
//   UserRound,
//   type LucideIcon,
// } from "lucide-react";

// type CourseAccent = "lime" | "sky";

// type CourseFeature = {
//   label: string;
//   icon: LucideIcon;
// };

// type Course = {
//   title: string;
//   description: string;
//   bestFor: string;
//   href: string;
//   accent: CourseAccent;
//   icon: LucideIcon;
//   badge?: string;
//   features: CourseFeature[];
//   pattern: "engineering" | "medical" | "boards" | "foundation";
// };

// const courses: Course[] = [
//   {
//     title: "JEE Main & Advanced",
//     description:
//       "Comprehensive program for JEE aspirants with concept clarity, problem-solving, and advanced practice.",
//     bestFor: "Class 11, 12 & Droppers",
//     href: "/courses#jee",
//     accent: "lime",
//     icon: Target,
//     badge: "Most Popular",
//     pattern: "engineering",
//     features: [
//       { label: "Concept Clarity", icon: Lightbulb },
//       { label: "Advanced Practice", icon: PenTool },
//       { label: "Weekly Tests", icon: CalendarCheck },
//       { label: "Rank Booster", icon: Trophy },
//     ],
//   },
//   {
//     title: "NEET UG Preparation",
//     description:
//       "Structured NEET program with NCERT mastery, regular tests, expert mentoring, and doubt support.",
//     bestFor: "Class 11, 12 & Droppers",
//     href: "/courses#neet",
//     accent: "sky",
//     icon: Stethoscope,
//     pattern: "medical",
//     features: [
//       { label: "NCERT Mastery", icon: BookOpen },
//       { label: "Concept Retention", icon: Microscope },
//       { label: "Regular Tests", icon: ClipboardCheck },
//       { label: "Doubt Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "Class 11–12 Boards",
//     description:
//       "Strengthen concepts, improve scores, and excel in board exams with smart practice and doubt support.",
//     bestFor: "Class 11 & 12",
//     href: "/courses#boards",
//     accent: "sky",
//     icon: BookOpen,
//     pattern: "boards",
//     features: [
//       { label: "Chapter-wise Tests", icon: ClipboardCheck },
//       { label: "Board Exam Focus", icon: ShieldCheck },
//       { label: "Score Improvement", icon: Medal },
//       { label: "Personalized Feedback", icon: UserRound },
//     ],
//   },
//   {
//     title: "Class 8–10 Foundation",
//     description:
//       "Build a strong foundation in Maths, Science, and Reasoning to stay ahead for future competitive exams.",
//     bestFor: "Class 8, 9 & 10",
//     href: "/courses#foundation",
//     accent: "lime",
//     icon: Rocket,
//     pattern: "foundation",
//     features: [
//       { label: "Concept Building", icon: Lightbulb },
//       { label: "Logic & Reasoning", icon: Microscope },
//       { label: "Regular Tests", icon: CalendarCheck },
//       { label: "Future Ready Skills", icon: ShieldCheck },
//     ],
//   },
// ];

// function CoursesBackground() {
//   return (
//     <>
//       {/* Soft dot texture */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.14]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       {/* Large academic grid */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />

//       {/* Center readability wash */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-24 h-[620px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),transparent_68%)]"
//       />

//       {/* Lime brand glow */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/24 blur-[130px]"
//       />

//       {/* Azure depth glow */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-44 top-48 h-[520px] w-[520px] rounded-full bg-sky-300/18 blur-[130px]"
//       />

//       {/* Bottom soft lime wash */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-lime-200/20 blur-[120px]"
//       />

//       {/* Subtle top-left premium line pattern */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-lime-300/20"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-12 top-24 h-96 w-96 rounded-full border border-lime-300/10"
//       />

//       {/* Subtle right-side background illustration placeholder */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-6 top-16 hidden h-72 w-96 opacity-[0.08] lg:block"
//       >
//         <div className="h-full w-full rounded-[2rem] border border-slate-900/20" />
//         <div className="absolute left-10 top-16 h-32 w-20 rounded-t-full border border-slate-900/20" />
//         <div className="absolute right-14 top-10 h-44 w-28 rounded-t-full border border-slate-900/20" />
//         <div className="absolute bottom-10 left-16 h-px w-64 bg-slate-900/20" />
//       </div>
//     </>
//   );
// }

// //

// function getCourseAccentClasses(accent: CourseAccent) {
//   if (accent === "lime") {
//     return {
//       cardBg:
//         "bg-[linear-gradient(135deg,rgba(239,246,222,0.92),rgba(248,250,242,0.82))]",
//       cardBorder: "border-lime-300/55",
//       iconWrap:
//         "bg-lime-100/75 text-lime-700 ring-lime-300/40 shadow-lime-200/50",
//       accentLine: "bg-lime-500",
//       text: "text-lime-700",
//       softText: "text-lime-700",
//       chipIcon: "text-lime-700",
//       cta: "text-lime-700 hover:text-lime-800",
//       glow: "from-lime-200/45",
//       badge:
//         "bg-lime-600 text-white shadow-[0_10px_24px_rgba(101,163,13,0.28)]",
//     };
//   }

//   return {
//     cardBg:
//       "bg-[linear-gradient(135deg,rgba(235,247,252,0.92),rgba(248,250,242,0.82))]",
//     cardBorder: "border-sky-300/55",
//     iconWrap: "bg-sky-100/80 text-sky-700 ring-sky-300/40 shadow-sky-200/50",
//     accentLine: "bg-sky-500",
//     text: "text-sky-700",
//     softText: "text-sky-700",
//     chipIcon: "text-sky-700",
//     cta: "text-sky-700 hover:text-sky-800",
//     glow: "from-sky-200/45",
//     badge: "bg-sky-600 text-white shadow-[0_10px_24px_rgba(14,165,233,0.24)]",
//   };
// }

// function CoursePattern({
//   pattern,
//   accent,
// }: {
//   pattern: Course["pattern"];
//   accent: CourseAccent;
// }) {
//   const stroke = accent === "lime" ? "stroke-lime-700/10" : "stroke-sky-700/10";

//   if (pattern === "engineering") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 240 180"
//         className={`pointer-events-none absolute bottom-4 right-4 h-40 w-52 ${stroke}`}
//         fill="none"
//       >
//         <path d="M28 142h184" strokeWidth="1.5" />
//         <path d="M54 142 112 40l68 102" strokeWidth="1.5" />
//         <path d="M82 92h72M67 118h104M112 40v102" strokeWidth="1.2" />
//         <path
//           d="M112 40c24 22 46 55 68 102M112 40c-20 28-38 62-58 102"
//           strokeWidth="1"
//         />
//       </svg>
//     );
//   }

//   if (pattern === "medical") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 220 180"
//         className={`pointer-events-none absolute bottom-4 right-4 h-40 w-48 ${stroke}`}
//         fill="none"
//       >
//         <path
//           d="M68 24c74 34 74 98 0 132M152 24c-74 34-74 98 0 132"
//           strokeWidth="1.6"
//         />
//         <path
//           d="M82 46h56M72 70h76M72 94h76M82 118h56M96 142h28"
//           strokeWidth="1.3"
//         />
//         <circle cx="172" cy="54" r="5" strokeWidth="1.3" />
//         <circle cx="48" cy="128" r="4" strokeWidth="1.3" />
//       </svg>
//     );
//   }

//   if (pattern === "boards") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 220 180"
//         className={`pointer-events-none absolute bottom-4 right-4 h-40 w-48 ${stroke}`}
//         fill="none"
//       >
//         <rect x="58" y="28" width="96" height="128" rx="10" strokeWidth="1.5" />
//         <path d="M82 60h48M82 84h48M82 108h48M82 132h34" strokeWidth="1.3" />
//         <path
//           d="M70 58l5 5 10-13M70 82l5 5 10-13M70 106l5 5 10-13"
//           strokeWidth="1.3"
//         />
//         <path d="M154 50l22 18M154 68l22-18" strokeWidth="1.1" />
//       </svg>
//     );
//   }

//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 220 180"
//       className={`pointer-events-none absolute bottom-4 right-4 h-40 w-48 ${stroke}`}
//       fill="none"
//     >
//       <path d="M68 92 110 68l42 24-42 24-42-24Z" strokeWidth="1.5" />
//       <path d="M68 92v46l42 24 42-24V92M110 116v46" strokeWidth="1.3" />
//       <path d="M36 72 78 48l42 24M142 48l42 24-42 24" strokeWidth="1.1" />
//       <path d="M36 72v40l42 24M184 72v40l-42 24" strokeWidth="1.1" />
//     </svg>
//   );
// }

// function CourseCard({ course }: { course: Course }) {
//   const Icon = course.icon;
//   const accent = getCourseAccentClasses(course.accent);

//   return (
//     <article
//       className={`group relative overflow-hidden rounded-[1.5rem] border ${accent.cardBorder} ${accent.cardBg} p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:p-5 lg:p-6`}
//     >
//       <div
//         aria-hidden="true"
//         className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-white/30 to-transparent opacity-70`}
//       />

//       <CoursePattern pattern={course.pattern} accent={course.accent} />

//       {course.badge ? (
//         <div
//           className={`absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] sm:px-3 sm:py-1.5 sm:text-xs ${accent.badge}`}
//         >
//           <Trophy className="h-3.5 w-3.5" />
//           {course.badge}
//         </div>
//       ) : null}

//       <div className="relative z-10 grid grid-cols-[4rem_minmax(0,1fr)] gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] lg:gap-5">
//         <div>
//           <div
//             className={`flex h-16 w-16 items-center justify-center rounded-2xl ring-1 shadow-lg ${accent.iconWrap} sm:h-18 sm:w-18 lg:h-20 lg:w-20`}
//           >
//             <Icon
//               className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
//               strokeWidth={1.8}
//             />
//           </div>
//         </div>

//         <div className="min-w-0">
//           <h3 className="max-w-[18rem] text-xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-2xl lg:text-[1.65rem]">
//             {course.title}
//           </h3>

//           <div
//             className={`mt-3 h-0.5 w-10 rounded-full ${accent.accentLine}`}
//           />

//           <p className="mt-3 max-w-xl text-sm leading-6 text-slate-700">
//             {course.description}
//           </p>

//           <div className="mt-4 flex items-start gap-2">
//             <UserRound
//               className={`mt-0.5 h-5 w-5 shrink-0 ${accent.softText}`}
//             />
//             <div>
//               <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600">
//                 Best for
//               </p>
//               <p className={`text-sm font-extrabold ${accent.text}`}>
//                 {course.bestFor}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative z-10 mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
//         {course.features.map((feature) => {
//           const FeatureIcon = feature.icon;

//           return (
//             <div
//               key={feature.label}
//               className="flex min-h-[3.25rem] items-center gap-2 rounded-xl border border-white/70 bg-white/65 px-2.5 py-2 shadow-sm shadow-slate-900/5 backdrop-blur-md"
//             >
//               <FeatureIcon className={`h-4 w-4 shrink-0 ${accent.chipIcon}`} />
//               <span className="text-[11px] font-bold leading-tight text-slate-800 sm:text-xs">
//   {feature.label}
// </span>
//             </div>
//           );
//         })}
//       </div>

//       <a
//         href={course.href}
//         className={`relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-extrabold transition-colors sm:text-base ${accent.cta}`}
//       >
//         Explore{" "}
//         {course.title.includes("JEE")
//           ? "JEE"
//           : course.title.includes("NEET")
//             ? "NEET"
//             : course.title.includes("Boards")
//               ? "Boards"
//               : "Foundation"}{" "}
//         Program
//         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//       </a>
//     </article>
//   );
// }

// function CoursesGrid() {
//   return (
//     <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
//       {courses.map((course) => (
//         <CourseCard key={course.title} course={course} />
//       ))}
//     </div>
//   );
// }

// function CoursesHeader() {
//   return (
//     <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
//       <div className="mb-4 inline-flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-lime-700/40" />
//         <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-sm">
//           <GraduationCap className="h-4 w-4" />
//           Our Courses & Programs
//         </span>
//         <span className="h-px w-10 bg-lime-700/40" />
//       </div>

//       <h2
//         id="courses-heading"
//         className="w-full text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.5rem]"
//       >
//         <span className="block">Programs Designed for</span>
//         <span className="block">
//           Every <span className="text-[#65A30D]">Aspirant’s Journey</span>
//         </span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
//         Whether your child is aiming for JEE, NEET, Board Excellence, or
//         building a strong foundation, we have the right program to help them
//         succeed.
//       </p>
//     </div>
//   );
// }

// export default function CoursesSection() {
//   return (
//     <section
//       aria-labelledby="courses-heading"
//       className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.20),transparent_30%),radial-gradient(circle_at_88%_30%,rgba(125,211,252,0.16),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F6F9EE_46%,#EEF5DE_100%)] px-4 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-22 lg:pb-28"
//     >
//       <CoursesBackground />

//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         <CoursesHeader />
//         <CoursesGrid />
//       </div>
//     </section>
//   );
// }

// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ClipboardCheck,
//   GraduationCap,
//   Lightbulb,
//   Map,
//   Rocket,
//   ShieldCheck,
//   Stethoscope,
//   Target,
//   Trophy,
//   UserRound,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";

// type CourseAccent = "lime" | "sky";

// type CourseFeature = {
//   label: string;
//   icon: LucideIcon;
// };

// type Course = {
//   title: string;
//   description: string;
//   bestFor: string;
//   href: string;
//   accent: CourseAccent;
//   icon: LucideIcon;
//   badge?: string;
//   features: CourseFeature[];
//   pattern: "engineering" | "medical" | "boards" | "foundation";
//   exploreLabel: string;
// };

// const courses: Course[] = [
//   {
//     title: "JEE Main & Advanced",
//     description:
//       "Comprehensive program for JEE aspirants with concept mastery, advanced practice and rank improvement.",
//     bestFor: "Class 11, 12 & Droppers",
//     href: "/courses#jee",
//     accent: "lime",
//     icon: Target,
//     badge: "Most Popular",
//     pattern: "engineering",
//     exploreLabel: "Explore JEE Program",
//     features: [
//       { label: "Advanced Practice", icon: Target },
//       { label: "Weekly Tests", icon: CalendarCheck },
//       { label: "Mentorship", icon: UsersRound },
//     ],
//   },
//   {
//     title: "NEET UG Preparation",
//     description:
//       "Structured NEET program with NCERT mastery, regular tests, expert mentoring and doubt support.",
//     bestFor: "Class 11, 12 & Droppers",
//     href: "/courses#neet",
//     accent: "sky",
//     icon: Stethoscope,
//     pattern: "medical",
//     exploreLabel: "Explore NEET Program",
//     features: [
//       { label: "NCERT Mastery", icon: BookOpen },
//       { label: "Regular Tests", icon: ClipboardCheck },
//       { label: "Doubt Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "Class 11–12 Boards",
//     description:
//       "Strengthen concepts, improve scores and excel in board exams with smart practice and doubt support.",
//     bestFor: "Class 11 & 12",
//     href: "/courses#boards",
//     accent: "sky",
//     icon: BookOpen,
//     pattern: "boards",
//     exploreLabel: "Explore Boards Program",
//     features: [
//       { label: "Chapter-wise Tests", icon: ClipboardCheck },
//       { label: "Board Exam Focus", icon: ShieldCheck },
//       { label: "Score Improvement", icon: Trophy },
//     ],
//   },
//   {
//     title: "Class 8–10 Foundation",
//     description:
//       "Build a strong foundation in Maths, Science and Reasoning to stay ahead for future competitive exams.",
//     bestFor: "Class 8, 9 & 10",
//     href: "/courses#foundation",
//     accent: "lime",
//     icon: Rocket,
//     pattern: "foundation",
//     exploreLabel: "Explore Foundation Program",
//     features: [
//       { label: "Concept Building", icon: Lightbulb },
//       { label: "Logic & Reasoning", icon: Target },
//       { label: "Future Ready Skills", icon: ShieldCheck },
//     ],
//   },
// ];

// const ctaItems = [
//   {
//     label: "Expert Counsellors",
//     icon: UserRound,
//   },
//   {
//     label: "Personalized Roadmap",
//     icon: Map,
//   },
//   {
//     label: "100% Guidance & Support",
//     icon: ShieldCheck,
//   },
//   {
//     label: "Trusted by 10,000+ Parents",
//     icon: UsersRound,
//   },
// ];

// function getCourseAccentClasses(accent: CourseAccent) {
//   if (accent === "lime") {
//     return {
//       cardBg:
//         "bg-[linear-gradient(135deg,rgba(242,248,226,0.92),rgba(255,255,250,0.86))]",
//       cardBorder: "border-lime-300/55",
//       iconWrap:
//         "bg-lime-100/75 text-lime-700 ring-lime-300/35 shadow-lime-200/60",
//       accentLine: "bg-lime-500",
//       text: "text-lime-700",
//       mutedText: "text-lime-700",
//       chipIcon: "text-lime-700",
//       cta: "text-lime-700 hover:text-lime-800",
//       glow: "from-lime-200/45",
//       patternStroke: "stroke-lime-700/10",
//       badge:
//         "bg-lime-600 text-white shadow-[0_10px_24px_rgba(101,163,13,0.28)]",
//     };
//   }

//   return {
//     cardBg:
//       "bg-[linear-gradient(135deg,rgba(236,248,253,0.92),rgba(255,255,250,0.86))]",
//     cardBorder: "border-sky-300/55",
//     iconWrap:
//       "bg-sky-100/80 text-sky-700 ring-sky-300/35 shadow-sky-200/60",
//     accentLine: "bg-sky-500",
//     text: "text-sky-700",
//     mutedText: "text-sky-700",
//     chipIcon: "text-sky-700",
//     cta: "text-sky-700 hover:text-sky-800",
//     glow: "from-sky-200/45",
//     patternStroke: "stroke-sky-700/10",
//     badge:
//       "bg-sky-600 text-white shadow-[0_10px_24px_rgba(14,165,233,0.24)]",
//   };
// }

// function CoursesBackground() {
//   return (
//     <>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.13]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.46]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-20 h-[620px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.68),transparent_68%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/24 blur-[130px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-44 top-48 h-[520px] w-[520px] rounded-full bg-sky-300/12 blur-[130px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-lime-200/18 blur-[120px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-lime-300/20"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-12 top-24 h-96 w-96 rounded-full border border-lime-300/10"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-8 top-24 hidden opacity-[0.08] lg:block"
//       >
//         <svg viewBox="0 0 380 220" className="h-56 w-96 fill-none stroke-slate-900">
//           <path d="M42 182h300" strokeWidth="1.3" />
//           <path d="M78 182V88h228v94" strokeWidth="1.3" />
//           <path d="M112 182v-48h44v48M190 182v-48h44v48M268 182v-48h44v48" strokeWidth="1" />
//           <path d="M64 88 190 24l132 64" strokeWidth="1.3" />
//           <path d="M94 88h192M126 64h128" strokeWidth="1" />
//           <path d="M172 24h36v36h-36z" strokeWidth="1" />
//           <path d="M190 24V4" strokeWidth="1" />
//         </svg>
//       </div>
//     </>
//   );
// }

// function CoursesHeader() {
//   return (
//     <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
//       <div className="mb-4 inline-flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-lime-700/40" />
//         <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-lime-700 sm:text-sm">
//           <GraduationCap className="h-4 w-4" />
//           Our Courses & Programs
//         </span>
//         <span className="h-px w-10 bg-lime-700/40" />
//       </div>

//       <h2
//         id="courses-heading"
//         className="w-full text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.25rem]"
//       >
//         <span className="block">Programs Designed for</span>
//         <span className="block">
//           Every <span className="text-[#65A30D]">Aspirant’s Journey</span>
//         </span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
//         Whether your child is aiming for JEE, NEET, Board Excellence, or
//         building a strong foundation, we have the right program to help them
//         succeed.
//       </p>
//     </div>
//   );
// }

// function CoursePattern({
//   pattern,
//   accent,
// }: {
//   pattern: Course["pattern"];
//   accent: CourseAccent;
// }) {
//   const stroke = accent === "lime" ? "stroke-lime-700/10" : "stroke-sky-700/10";

//   if (pattern === "engineering") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 240 180"
//         className={`pointer-events-none absolute bottom-5 right-5 h-28 w-36 ${stroke}`}
//         fill="none"
//       >
//         <path d="M28 142h184" strokeWidth="1.5" />
//         <path d="M54 142 112 40l68 102" strokeWidth="1.5" />
//         <path d="M82 92h72M67 118h104M112 40v102" strokeWidth="1.2" />
//       </svg>
//     );
//   }

//   if (pattern === "medical") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 220 180"
//         className={`pointer-events-none absolute bottom-5 right-5 h-28 w-36 ${stroke}`}
//         fill="none"
//       >
//         <path d="M68 24c74 34 74 98 0 132M152 24c-74 34-74 98 0 132" strokeWidth="1.6" />
//         <path d="M82 46h56M72 70h76M72 94h76M82 118h56M96 142h28" strokeWidth="1.3" />
//       </svg>
//     );
//   }

//   if (pattern === "boards") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 220 180"
//         className={`pointer-events-none absolute bottom-5 right-5 h-28 w-36 ${stroke}`}
//         fill="none"
//       >
//         <rect x="58" y="28" width="96" height="128" rx="10" strokeWidth="1.5" />
//         <path d="M82 60h48M82 84h48M82 108h48M82 132h34" strokeWidth="1.3" />
//         <path d="M70 58l5 5 10-13M70 82l5 5 10-13M70 106l5 5 10-13" strokeWidth="1.3" />
//       </svg>
//     );
//   }

//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 220 180"
//       className={`pointer-events-none absolute bottom-5 right-5 h-28 w-36 ${stroke}`}
//       fill="none"
//     >
//       <path d="M68 92 110 68l42 24-42 24-42-24Z" strokeWidth="1.5" />
//       <path d="M68 92v46l42 24 42-24V92M110 116v46" strokeWidth="1.3" />
//       <path d="M36 72 78 48l42 24M142 48l42 24-42 24" strokeWidth="1.1" />
//     </svg>
//   );
// }

// // function CourseCard({ course }: { course: Course }) {
// //   const Icon = course.icon;
// //   const accent = getCourseAccentClasses(course.accent);

// //   return (
// //     <article
// //       className={`group relative overflow-hidden rounded-[1.5rem] border ${accent.cardBorder} ${accent.cardBg} p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:p-5 lg:p-6`}
// //     >
// //       <div
// //         aria-hidden="true"
// //         className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-white/30 to-transparent opacity-60`}
// //       />

// //       <CoursePattern pattern={course.pattern} accent={course.accent} />

// //       {course.badge ? (
// //         <div
// //           className={`absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] sm:px-3 sm:py-1.5 sm:text-xs ${accent.badge}`}
// //         >
// //           <Trophy className="h-3.5 w-3.5" />
// //           {course.badge}
// //         </div>
// //       ) : null}

// //       <div className="relative z-10 grid grid-cols-[4rem_minmax(0,1fr)] gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] lg:gap-5">
// //         <div
// //           className={`flex h-16 w-16 items-center justify-center rounded-2xl ring-1 shadow-lg ${accent.iconWrap} sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20`}
// //         >
// //           <Icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10" strokeWidth={1.8} />
// //         </div>

// //         <div className="min-w-0">
// //           <h3 className="max-w-[18rem] text-xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-2xl lg:text-[1.65rem]">
// //             {course.title}
// //           </h3>

// //           <div className={`mt-2.5 h-0.5 w-9 rounded-full ${accent.accentLine}`} />

// //           <p className="mt-3 max-w-xl text-sm leading-6 text-slate-700">
// //             {course.description}
// //           </p>

// //           <div className="mt-4 flex items-start gap-2">
// //             <UserRound className={`mt-0.5 h-4 w-4 shrink-0 ${accent.mutedText}`} />
// //             <div>
// //               <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600">
// //                 Best for
// //               </p>
// //               <p className={`text-sm font-extrabold ${accent.text}`}>
// //                 {course.bestFor}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="relative z-10 mt-5 grid grid-cols-3 gap-2.5">
// //         {course.features.map((feature) => {
// //           const FeatureIcon = feature.icon;

// //           return (
// //             <div
// //               key={feature.label}
// //               className="flex min-h-[3rem] items-center gap-2 rounded-xl border border-white/70 bg-white/65 px-2.5 py-2 shadow-sm shadow-slate-900/5 backdrop-blur-md"
// //             >
// //               <FeatureIcon className={`h-4 w-4 shrink-0 ${accent.chipIcon}`} />
// //               <span className="text-[11px] font-bold leading-tight text-slate-800 sm:text-xs">
// //                 {feature.label}
// //               </span>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       <Link
// //         href={course.href}
// //         className={`relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-extrabold transition-colors sm:text-base ${accent.cta}`}
// //       >
// //         {course.exploreLabel}
// //         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //       </Link>
// //     </article>
// //   );
// // }

// function CourseCard({ course }: { course: Course }) {
//   const Icon = course.icon;
//   const accent = getCourseAccentClasses(course.accent);

//   return (
//     <article
//       className={`group relative min-h-[230px] overflow-hidden rounded-[1.35rem] border ${accent.cardBorder} ${accent.cardBg} px-4 py-4 shadow-[0_16px_44px_rgba(15,23,42,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.13)] sm:px-5 sm:py-5`}
//     >
//       <div
//         aria-hidden="true"
//         className={`absolute inset-0 bg-gradient-to-br ${accent.glow} via-white/20 to-transparent opacity-45`}
//       />

//       <CoursePattern pattern={course.pattern} accent={course.accent} />

//       {course.badge ? (
//         <div
//           className={`absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${accent.badge}`}
//         >
//           <Trophy className="h-3 w-3" />
//           {course.badge}
//         </div>
//       ) : null}

//       <div className="relative z-10 flex gap-4">
//         <div
//           className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-md ${accent.iconWrap} sm:h-16 sm:w-16`}
//         >
//           <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.9} />
//         </div>

//         <div className="min-w-0 flex-1">
//           <h3 className="max-w-[18rem] text-xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-[1.45rem]">
//             {course.title}
//           </h3>

//           <div className={`mt-2 h-0.5 w-8 rounded-full ${accent.accentLine}`} />

//           <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-slate-700">
//             {course.description}
//           </p>

//           <div className="mt-3 flex flex-wrap items-center gap-1.5 text-sm">
//             <UserRound className={`h-4 w-4 shrink-0 ${accent.mutedText}`} />
//             <span className="font-bold text-slate-600">Best for:</span>
//             <span className={`font-extrabold ${accent.text}`}>
//               {course.bestFor}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="relative z-10 mt-4 flex flex-wrap gap-2">
//         {course.features.map((feature) => {
//           const FeatureIcon = feature.icon;

//           return (
//             <span
//               key={feature.label}
//               className="inline-flex items-center gap-1.5 rounded-full border border-white/75 bg-white/65 px-3 py-1.5 text-[11px] font-bold text-slate-800 shadow-sm shadow-slate-900/5 backdrop-blur-md"
//             >
//               <FeatureIcon className={`h-3.5 w-3.5 shrink-0 ${accent.chipIcon}`} />
//               {feature.label}
//             </span>
//           );
//         })}
//       </div>

//       <Link
//         href={course.href}
//         className={`relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-extrabold transition-colors ${accent.cta}`}
//       >
//         {course.exploreLabel}
//         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//       </Link>
//     </article>
//   );
// }

// // function CoursesGrid() {
// //   return (
// //     <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
// //       {courses.map((course) => (
// //         <CourseCard key={course.title} course={course} />
// //       ))}
// //     </div>
// //   );
// // }

// function CoursesGrid() {
//   return (
//     <div className="mx-auto mt-9 grid w-full max-w-5xl grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-2">
//       {courses.map((course) => (
//         <CourseCard key={course.title} course={course} />
//       ))}
//     </div>
//   );
// }

// function CoursesCTA() {
//   return (
//     <div className="relative mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-lime-300/20 bg-[#07111F] shadow-2xl shadow-slate-900/20">
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(56,189,248,0.10),transparent_32%),linear-gradient(135deg,#07111F_0%,#0B1628_55%,#081526_100%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-0 opacity-[0.1]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative z-10 grid gap-6 px-5 py-6 sm:px-7 lg:grid-cols-[1.3fr_1.5fr_auto] lg:items-center lg:gap-8 lg:px-8 lg:py-7">
//         <div className="flex items-center gap-4">
//           <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-lime-300/25 bg-lime-300/10 text-lime-300 shadow-[0_0_32px_rgba(163,230,53,0.15)]">
//             <UsersRound className="h-8 w-8" strokeWidth={2} />
//           </div>

//           <div>
//             <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
//               Not sure which program is right for{" "}
//               <span className="text-lime-300">your child?</span>
//             </h3>
//             <p className="mt-2 text-sm leading-6 text-slate-300">
//               Our academic counsellors will help you choose the right path and
//               plan the perfect roadmap.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:border-l lg:border-white/10 lg:pl-8">
//           {ctaItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div key={item.label} className="text-center">
//                 <Icon className="mx-auto h-6 w-6 text-lime-300" strokeWidth={2} />
//                 <p className="mt-2 text-xs font-semibold leading-tight text-slate-300">
//                   {item.label}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         <Link
//           href="/courses"
//           className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-4 text-sm font-extrabold text-[#07111F] shadow-xl shadow-lime-400/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lime-400/40 sm:w-auto sm:min-w-[250px]"
//         >
//           Get Free Course Guidance
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </Link>
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
//       />
//     </div>
//   );
// }

// export default function CoursesSection() {
//   return (
//     <section
//       aria-labelledby="courses-heading"
//       className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.20),transparent_30%),radial-gradient(circle_at_88%_30%,rgba(125,211,252,0.12),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F6F9EE_46%,#EEF5DE_100%)] px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-[5.5rem] lg:pb-28"
//     >
//       <CoursesBackground />

//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         <CoursesHeader />
//         <CoursesGrid />
//         <CoursesCTA />

//         <p className="mt-6 text-center text-sm font-semibold text-slate-700">
//           Trusted. <span className="text-lime-700">Result Driven.</span> Student
//           Focused.
//         </p>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ClipboardCheck,
//   FileText,
//   GraduationCap,
//   Lightbulb,
//   Map,
//   Rocket,
//   ShieldCheck,
//   Stethoscope,
//   Target,
//   Trophy,
//   UserRound,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";

// type CourseAccent = "lime" | "sky";

// type CourseFeature = {
//   label: string;
//   icon: LucideIcon;
// };

// type CourseHighlight = {
//   label: string;
//   icon: LucideIcon;
// };

// type Course = {
//   title: string;
//   audience: string;
//   description: string;
//   href: string;
//   accent: CourseAccent;
//   icon: LucideIcon;
//   badge?: string;
//   highlights: CourseHighlight[];
//   proofCue: string;
//   helperText: string;
//   exploreLabel: string;
// };

// const courses: Course[] = [
//   {
//     title: "JEE Main & Advanced",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Build exam-level problem solving with structured PCM learning, weekly tests, and rank-focused practice.",
//     href: "/courses#jee",
//     accent: "lime",
//     icon: Target,
//     badge: "Most Popular",
//     exploreLabel: "Explore Program",
//     helperText: "View batches, syllabus & guidance",
//     proofCue: "Designed for JEE Main + Advanced",
//     highlights: [
//       { label: "PCM Concept Clarity", icon: BookOpen },
//       { label: "Advanced Practice", icon: Target },
//       { label: "Weekly Tests", icon: CalendarCheck },
//       { label: "Doubt Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "NEET UG Preparation",
//     audience: "Class 11, 12 & Droppers",
//     description:
//       "Master NCERT concepts with regular testing, doubt support, and mentor-led preparation for NEET UG.",
//     href: "/courses#neet",
//     accent: "sky",
//     icon: Stethoscope,
//     exploreLabel: "Explore Program",
//     helperText: "View batches, syllabus & guidance",
//     proofCue: "NCERT-first preparation for NEET UG",
//     highlights: [
//       { label: "NCERT Mastery", icon: BookOpen },
//       { label: "Biology-focused Revision", icon: GraduationCap },
//       { label: "Regular Tests", icon: ClipboardCheck },
//       { label: "Doubt Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "Class 11–12 Boards",
//     audience: "Class 11 & 12 Students",
//     description:
//       "Strengthen concepts, improve answer-writing, and prepare chapter-wise for school and board exams.",
//     href: "/courses#boards",
//     accent: "sky",
//     icon: BookOpen,
//     exploreLabel: "Explore Program",
//     helperText: "View subjects, tests & guidance",
//     proofCue: "Built for board exam confidence",
//     highlights: [
//       { label: "Chapter-wise Tests", icon: ClipboardCheck },
//       { label: "Board Exam Focus", icon: ShieldCheck },
//       { label: "Answer-writing Practice", icon: FileText },
//       { label: "Feedback Support", icon: UserRound },
//     ],
//   },
//   {
//     title: "Class 8–10 Foundation",
//     audience: "Class 8, 9 & 10 Students",
//     description:
//       "Build strong Maths, Science, and reasoning fundamentals before JEE, NEET, and board pressure begins.",
//     href: "/courses#foundation",
//     accent: "lime",
//     icon: Rocket,
//     exploreLabel: "Explore Program",
//     helperText: "View roadmap, batches & guidance",
//     proofCue: "Early foundation for competitive exams",
//     highlights: [
//       { label: "Strong Fundamentals", icon: Lightbulb },
//       { label: "Logical Reasoning", icon: Target },
//       { label: "Regular Assessments", icon: ClipboardCheck },
//       { label: "Future Exam Readiness", icon: ShieldCheck },
//     ],
//   },
// ];

// const ctaItems = [
//   {
//     label: "Expert Counsellors",
//     icon: UserRound,
//   },
//   {
//     label: "Personalized Roadmap",
//     icon: Map,
//   },
//   {
//     label: "100% Guidance & Support",
//     icon: ShieldCheck,
//   },
//   {
//     label: "10,000+ Parents",
//     icon: UsersRound,
//   },
// ];

// function getCourseAccentClasses(accent: CourseAccent) {
//   if (accent === "lime") {
//     return {
//       cardBg:
//         "bg-[linear-gradient(135deg,rgba(246,250,235,0.96),rgba(255,255,250,0.9))]",
//       cardBorder: "border-lime-300/60",
//       iconWrap:
//         "bg-lime-100/80 text-lime-700 ring-lime-300/40 shadow-lime-200/60",
//       accentLine: "bg-lime-500",
//       text: "text-lime-700",
//       darkText: "text-lime-800",
//       chip:
//         "border-lime-300/45 bg-lime-50/70 text-slate-800 hover:border-lime-400/70 hover:bg-lime-50",
//       chipIcon: "text-lime-700",
//       proof:
//         "border-lime-200/70 bg-lime-100/45 text-lime-900",
//       ctaButton:
//         "bg-gradient-to-r from-[#7CB408] via-[#65A30D] to-[#4D7C0F] text-white shadow-lime-700/20 hover:shadow-lime-700/30",
//       ctaText: "text-lime-800",
//       ring: "focus-visible:ring-lime-500",
//       badge:
//         "bg-lime-100 text-lime-800 ring-1 ring-lime-300/50",
//     };
//   }

//   return {
//     cardBg:
//       "bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,250,0.9))]",
//     cardBorder: "border-sky-300/60",
//     iconWrap:
//       "bg-sky-100/85 text-sky-700 ring-sky-300/40 shadow-sky-200/60",
//     accentLine: "bg-sky-500",
//     text: "text-sky-700",
//     darkText: "text-sky-800",
//     chip:
//       "border-sky-300/45 bg-sky-50/70 text-slate-800 hover:border-sky-400/70 hover:bg-sky-50",
//     chipIcon: "text-sky-700",
//     proof:
//       "border-sky-200/70 bg-sky-100/45 text-sky-950",
//     ctaButton:
//       "bg-gradient-to-r from-[#1D8FE8] via-[#0879D9] to-[#0758B8] text-white shadow-sky-700/20 hover:shadow-sky-700/30",
//     ctaText: "text-sky-800",
//     ring: "focus-visible:ring-sky-500",
//     badge:
//       "bg-sky-100 text-sky-800 ring-1 ring-sky-300/50",
//   };
// }

// function CoursesBackground() {
//   return (
//     <>
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.13]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.46]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
//           backgroundSize: "96px 96px",
//         }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-20 h-[620px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.68),transparent_68%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/24 blur-[130px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-44 top-48 h-[520px] w-[520px] rounded-full bg-sky-300/12 blur-[130px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-lime-200/18 blur-[120px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-lime-300/20"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-12 top-24 h-96 w-96 rounded-full border border-lime-300/10"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-8 top-24 hidden opacity-[0.08] lg:block"
//       >
//         <svg
//           viewBox="0 0 380 220"
//           className="h-56 w-96 fill-none stroke-slate-900"
//         >
//           <path d="M42 182h300" strokeWidth="1.3" />
//           <path d="M78 182V88h228v94" strokeWidth="1.3" />
//           <path
//             d="M112 182v-48h44v48M190 182v-48h44v48M268 182v-48h44v48"
//             strokeWidth="1"
//           />
//           <path d="M64 88 190 24l132 64" strokeWidth="1.3" />
//           <path d="M94 88h192M126 64h128" strokeWidth="1" />
//           <path d="M172 24h36v36h-36z" strokeWidth="1" />
//           <path d="M190 24V4" strokeWidth="1" />
//         </svg>
//       </div>
//     </>
//   );
// }

// function CoursesHeader() {
//   return (
//     <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
//       <div className="mb-3 inline-flex items-center justify-center gap-3">
//         <span className="h-px w-9 bg-lime-700/40" />
//         <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-lime-700 sm:text-xs">
//           <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
//           Our Courses & Programs
//         </span>
//         <span className="h-px w-9 bg-lime-700/40" />
//       </div>

//       <h2
//         id="courses-heading"
//         className="w-full text-center text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
//       >
//         <span className="block">Programs Designed for</span>
//         <span className="block">
//           Every <span className="text-[#65A30D]">Aspirant’s Journey</span>
//         </span>
//       </h2>

//       <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
//         From JEE and NEET to boards and foundation — choose the right program
//         for your child’s next academic step.
//       </p>
//     </div>
//   );
// }

// function CoursePattern({
//   pattern,
//   accent,
// }: {
//   pattern: Course["pattern"];
//   accent: CourseAccent;
// }) {
//   const stroke =
//     accent === "lime" ? "stroke-lime-700/8" : "stroke-sky-700/8";

//   if (pattern === "engineering") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 240 180"
//         className={`pointer-events-none absolute -right-6 -top-4 h-32 w-32 ${stroke}`}
//         fill="none"
//       >
//         <path d="M28 142h184" strokeWidth="1.5" />
//         <path d="M54 142 112 40l68 102" strokeWidth="1.5" />
//         <path d="M82 92h72M67 118h104M112 40v102" strokeWidth="1.2" />
//       </svg>
//     );
//   }

//   if (pattern === "medical") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 220 180"
//         className={`pointer-events-none absolute -right-6 -top-4 h-32 w-32 ${stroke}`}
//         fill="none"
//       >
//         <path
//           d="M68 24c74 34 74 98 0 132M152 24c-74 34-74 98 0 132"
//           strokeWidth="1.6"
//         />
//         <path
//           d="M82 46h56M72 70h76M72 94h76M82 118h56M96 142h28"
//           strokeWidth="1.3"
//         />
//       </svg>
//     );
//   }

//   if (pattern === "boards") {
//     return (
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 220 180"
//         className={`pointer-events-none absolute -right-6 -top-4 h-32 w-32 ${stroke}`}
//         fill="none"
//       >
//         <rect
//           x="58"
//           y="28"
//           width="96"
//           height="128"
//           rx="10"
//           strokeWidth="1.5"
//         />
//         <path
//           d="M82 60h48M82 84h48M82 108h48M82 132h34"
//           strokeWidth="1.3"
//         />
//         <path
//           d="M70 58l5 5 10-13M70 82l5 5 10-13M70 106l5 5 10-13"
//           strokeWidth="1.3"
//         />
//       </svg>
//     );
//   }

//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 220 180"
//       className={`pointer-events-none absolute -right-6 -top-4 h-32 w-32 ${stroke}`}
//       fill="none"
//     >
//       <path d="M68 92 110 68l42 24-42 24-42-24Z" strokeWidth="1.5" />
//       <path
//         d="M68 92v46l42 24 42-24V92M110 116v46"
//         strokeWidth="1.3"
//       />
//       <path
//         d="M36 72 78 48l42 24M142 48l42 24-42 24"
//         strokeWidth="1.1"
//       />
//     </svg>
//   );
// }

// function CourseCard({ course }: { course: Course }) {
//   const Icon = course.icon;
//   const accent = getCourseAccentClasses(course.accent);

//   return (
//     <article
//       className={`group relative overflow-hidden rounded-[1.6rem] border ${accent.cardBorder} ${accent.cardBg} p-4 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:p-5`}
//     >
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.75),transparent_34%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-slate-900/[0.04]"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-slate-900/[0.05]"
//       />

//       <div className="relative z-10">
//         <div className="flex items-start gap-3.5">
//           <div
//             className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 ${accent.iconWrap}`}
//           >
//             <Icon className="h-7 w-7" strokeWidth={1.9} aria-hidden="true" />
//           </div>

//           <div className="min-w-0 flex-1 pt-0.5">
//             <div className="flex flex-wrap items-center gap-2">
//               <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-[1.35rem]">
//                 {course.title}
//               </h3>

//               {course.badge ? (
//                 <span
//                   className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${accent.badge}`}
//                 >
//                   <Trophy className="h-3 w-3" aria-hidden="true" />
//                   {course.badge}
//                 </span>
//               ) : null}
//             </div>

//             <div
//               className={`mt-2 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14 ${accent.accentLine}`}
//             />

//             <div
//               className={`mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${
//                 course.accent === "lime"
//                   ? "bg-lime-100/70 text-lime-800 ring-lime-300/40"
//                   : "bg-sky-100/70 text-sky-800 ring-sky-300/40"
//               }`}
//             >
//               <UsersRound className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
//               <span className="opacity-75">Best for:</span>
//               <span className="truncate">{course.audience}</span>
//             </div>
//           </div>
//         </div>

//         <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-700">
//           {course.description}
//         </p>

//         <div className="mt-4">
//           <p className={`text-sm font-extrabold ${accent.text}`}>
//             Program Highlights
//           </p>

//           <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
//             {course.highlights.map((highlight) => {
//               const HighlightIcon = highlight.icon;

//               return (
//                 <span
//                   key={highlight.label}
//                   className={`inline-flex min-h-[2.45rem] items-center gap-2 rounded-xl border px-2.5 py-2 text-[12px] font-bold shadow-sm shadow-slate-900/5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 ${accent.chip}`}
//                 >
//                   <HighlightIcon
//                     className={`h-4 w-4 shrink-0 ${accent.chipIcon}`}
//                     aria-hidden="true"
//                   />
//                   {highlight.label}
//                 </span>
//               );
//             })}
//           </div>
//         </div>

//         <div
//           className={`mt-3 flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold ${accent.proof}`}
//         >
//           <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
//           <span>{course.proofCue}</span>
//         </div>

//         <div className="mt-4 border-t border-slate-200/70 pt-4">
//           <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
//             <Link
//               href={course.href}
//               className={`group/cta inline-flex min-h-[44px] items-center justify-center gap-3 overflow-hidden rounded-xl px-5 py-3 text-sm font-extrabold shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${accent.ring} ${accent.ctaButton}`}
//             >
//               <span>{course.exploreLabel}</span>
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/18">
//                 <ArrowRight
//                   className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
//                   aria-hidden="true"
//                 />
//               </span>
//             </Link>

//             <Link
//               href={course.href}
//               className="inline-flex min-h-[44px] items-center gap-2 rounded-xl px-2 text-xs font-bold leading-tight text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
//             >
//               <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
//               <span>{course.helperText}</span>
//               <ArrowRight className="ml-auto h-3.5 w-3.5" aria-hidden="true" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// // function CoursesGrid() {
// //   return (
// //     <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-3.5 sm:mt-10 md:grid-cols-2 lg:gap-4">
// //       {courses.map((course) => (
// //         <CourseCard key={course.title} course={course} />
// //       ))}
// //     </div>
// //   );
// // }
// function CoursesGrid() {
//   return (
//     <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2">
//       {courses.map((course) => (
//         <CourseCard key={course.title} course={course} />
//       ))}
//     </div>
//   );
// }

// function CoursesCTA() {
//   return (
//     <div className="relative mx-auto mt-6 w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-lime-300/20 bg-[#07111F] shadow-2xl shadow-slate-900/20">
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(56,189,248,0.10),transparent_32%),linear-gradient(135deg,#07111F_0%,#0B1628_55%,#081526_100%)]"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-0 opacity-[0.1]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative z-10 grid gap-5 px-5 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.3fr_1.5fr_auto] lg:items-center lg:gap-7 lg:px-7">
//         <div className="flex items-center gap-4">
//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-lime-300/25 bg-lime-300/10 text-lime-300 shadow-[0_0_32px_rgba(163,230,53,0.15)]">
//             <UsersRound className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
//           </div>

//           <div>
//             <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
//               Not sure which program is right for{" "}
//               <span className="text-lime-300">your child?</span>
//             </h3>
//             <p className="mt-2 text-sm leading-6 text-slate-300">
//               Our academic counsellors will help you choose the right path.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:border-l lg:border-white/10 lg:pl-7">
//           {ctaItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div key={item.label} className="text-center">
//                 <Icon
//                   className="mx-auto h-5 w-5 text-lime-300"
//                   strokeWidth={2}
//                   aria-hidden="true"
//                 />
//                 <p className="mt-2 text-[11px] font-semibold leading-tight text-slate-300">
//                   {item.label}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         <Link
//           href="/courses"
//           className="group relative inline-flex min-h-[44px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-3.5 text-sm font-extrabold text-[#07111F] shadow-xl shadow-lime-400/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lime-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[230px]"
//         >
//           <span
//             aria-hidden="true"
//             className="absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[320%]"
//           />
//           <span className="relative z-10">Get Free Course Guidance</span>
//           <ArrowRight
//             className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//             aria-hidden="true"
//           />
//         </Link>
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
//       />
//     </div>
//   );
// }

// export default function CoursesSection() {
//   return (
//     <section
//       aria-labelledby="courses-heading"
//       className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.20),transparent_30%),radial-gradient(circle_at_88%_30%,rgba(125,211,252,0.12),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F6F9EE_46%,#EEF5DE_100%)] px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 lg:pt-14 lg:pb-16"
//     >
//       <CoursesBackground />

//       <div className="relative z-10 mx-auto w-full max-w-7xl">
//         <CoursesHeader />
//         <CoursesGrid />
//         <CoursesCTA />

//         <p className="mt-5 text-center text-sm font-semibold text-slate-700">
//           Trusted. <span className="text-lime-700">Result Driven.</span> Student
//           Focused.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Lightbulb,
  Map,
  Rocket,
  ShieldCheck,
  Stethoscope,
  Target,
  Trophy,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type CourseAccent = "lime" | "sky";

type CourseHighlight = {
  label: string;
  icon: LucideIcon;
};

type Course = {
  title: string;
  audience: string;
  description: string;
  href: string;
  accent: CourseAccent;
  icon: LucideIcon;
  badge?: string;
  highlights: CourseHighlight[];
  proofCue: string;
  helperText: string;
  exploreLabel: string;
};

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

const courses: Course[] = [
  {
    title: "JEE Main & Advanced",
    audience: "Class 11, 12 & Droppers",
    description:
      "Build exam-level problem solving with structured PCM learning, weekly tests, and rank-focused practice.",
    href: "/courses#jee",
    accent: "lime",
    icon: Target,
    badge: "Most Popular",
    exploreLabel: "Explore Program",
    helperText: "View batches, syllabus & guidance",
    proofCue: "Designed for JEE Main + Advanced",
    highlights: [
      { label: "PCM Concept Clarity", icon: BookOpen },
      { label: "Advanced Practice", icon: Target },
      { label: "Weekly Tests", icon: CalendarCheck },
    ],
  },
  {
    title: "NEET UG Preparation",
    audience: "Class 11, 12 & Droppers",
    description:
      "Master NCERT concepts with regular testing, doubt support, and mentor-led preparation for NEET UG.",
    href: "/courses#neet",
    accent: "sky",
    icon: Stethoscope,
    exploreLabel: "Explore Program",
    helperText: "View batches, syllabus & guidance",
    proofCue: "NCERT-first preparation for NEET UG",
    highlights: [
      { label: "NCERT Mastery", icon: BookOpen },
      { label: "Regular Tests", icon: ClipboardCheck },
      { label: "Doubt Support", icon: UserRound },
    ],
  },
  {
    title: "Class 11–12 Boards",
    audience: "Class 11 & 12 Students",
    description:
      "Strengthen concepts, improve answer-writing, and prepare chapter-wise for school and board exams.",
    href: "/courses#boards",
    accent: "sky",
    icon: BookOpen,
    exploreLabel: "Explore Program",
    helperText: "View subjects, tests & guidance",
    proofCue: "Built for board exam confidence",
    highlights: [
      { label: "Chapter-wise Tests", icon: ClipboardCheck },
      { label: "Board Exam Focus", icon: ShieldCheck },
      { label: "Answer-writing Practice", icon: FileText },
    ],
  },
  {
    title: "Class 8–10 Foundation",
    audience: "Class 8, 9 & 10 Students",
    description:
      "Build strong Maths, Science, and reasoning fundamentals before JEE, NEET, and board pressure begins.",
    href: "/courses#foundation",
    accent: "lime",
    icon: Rocket,
    exploreLabel: "Explore Program",
    helperText: "View roadmap, batches & guidance",
    proofCue: "Early foundation for competitive exams",
    highlights: [
      { label: "Strong Fundamentals", icon: Lightbulb },
      { label: "Logical Reasoning", icon: Target },
      { label: "Regular Assessments", icon: ClipboardCheck },
    ],
  },
];

const ctaItems = [
  {
    label: "Expert Counsellors",
    icon: UserRound,
  },
  {
    label: "Personalized Roadmap",
    icon: Map,
  },
  {
    label: "100% Guidance",
    icon: ShieldCheck,
  },
  {
    label: "10,000+ Parents",
    icon: UsersRound,
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
      y: reduceMotion ? 0 : 24,
      scale: reduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: EASE_OUT_QUINT,
      },
    },
  };
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function getCourseAccentClasses(accent: CourseAccent) {
  if (accent === "lime") {
    return {
      cardBg:
        "bg-[linear-gradient(135deg,rgba(246,250,235,0.96),rgba(255,255,250,0.92))]",
      cardBorder: "border-lime-300/60 hover:border-lime-400/90",
      cardShadow: "hover:shadow-[0_26px_80px_rgba(101,163,13,0.22)]",
      glowRing: "from-lime-300/0 via-lime-300/45 to-lime-300/0",
      iconWrap:
        "bg-lime-100/80 text-lime-700 ring-lime-300/40 shadow-lime-200/60",
      accentLine: "bg-lime-500",
      text: "text-lime-700",
      chip: "border-lime-300/45 bg-lime-50/75 text-slate-800 hover:border-lime-400/80 hover:bg-lime-50",
      chipIcon: "text-lime-700",
      proof: "border-lime-200/70 bg-lime-100/45 text-lime-900",
      ctaButton:
        "bg-gradient-to-r from-[#7CB408] via-[#65A30D] to-[#4D7C0F] text-white shadow-lime-700/20 hover:shadow-lime-700/35",
      ring: "focus-visible:ring-lime-500",
      badge: "bg-lime-100 text-lime-800 ring-1 ring-lime-300/50",
      audience: "bg-lime-100/70 text-lime-800 ring-lime-300/40",
    };
  }

  return {
    cardBg:
      "bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(255,255,250,0.92))]",
    cardBorder: "border-sky-300/60 hover:border-sky-400/90",
    cardShadow: "hover:shadow-[0_26px_80px_rgba(14,165,233,0.20)]",
    glowRing: "from-sky-300/0 via-sky-300/45 to-sky-300/0",
    iconWrap: "bg-sky-100/85 text-sky-700 ring-sky-300/40 shadow-sky-200/60",
    accentLine: "bg-sky-500",
    text: "text-sky-700",
    chip: "border-sky-300/45 bg-sky-50/75 text-slate-800 hover:border-sky-400/80 hover:bg-sky-50",
    chipIcon: "text-sky-700",
    proof: "border-sky-200/70 bg-sky-100/45 text-sky-950",
    ctaButton:
      "bg-gradient-to-r from-[#1D8FE8] via-[#0879D9] to-[#0758B8] text-white shadow-sky-700/20 hover:shadow-sky-700/35",
    ring: "focus-visible:ring-sky-500",
    badge: "bg-sky-100 text-sky-800 ring-1 ring-sky-300/50",
    audience: "bg-sky-100/70 text-sky-800 ring-sky-300/40",
  };
}

function CoursesBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.46]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 h-[620px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.68),transparent_68%)]"
        animate={{
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-lime-300/24 blur-[130px]"
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-48 h-[520px] w-[520px] rounded-full bg-sky-300/12 blur-[130px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-lime-200/18 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-lime-300/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-24 h-96 w-96 rounded-full border border-lime-300/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-20 hidden opacity-[0.07] lg:block"
      >
        <svg
          viewBox="0 0 380 220"
          className="h-56 w-96 fill-none stroke-slate-900"
        >
          <path d="M42 182h300" strokeWidth="1.3" />
          <path d="M78 182V88h228v94" strokeWidth="1.3" />
          <path
            d="M112 182v-48h44v48M190 182v-48h44v48M268 182v-48h44v48"
            strokeWidth="1"
          />
          <path d="M64 88 190 24l132 64" strokeWidth="1.3" />
          <path d="M94 88h192M126 64h128" strokeWidth="1" />
          <path d="M172 24h36v36h-36z" strokeWidth="1" />
          <path d="M190 24V4" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
}

function CoursesHeader() {
  const reduceMotion = useReducedMotion();
  const fadeUp = createFadeUpVariants(Boolean(reduceMotion));

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
    >
      <motion.div
        variants={fadeUp}
        className="mb-3 inline-flex items-center justify-center gap-3"
      >
        <span className="h-px w-9 bg-lime-700/40" />
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-lime-700 sm:text-xs">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          Our Courses & Programs
        </span>
        <span className="h-px w-9 bg-lime-700/40" />
      </motion.div>

      <motion.h2
        id="courses-heading"
        variants={fadeUp}
        className="w-full text-center text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
      >
        <span className="block">Programs Designed for</span>
        <span className="block">
          Every <span className="text-[#65A30D]">Aspirant’s Journey</span>
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-700 sm:text-base sm:leading-7"
      >
        From JEE and NEET to boards and foundation — choose the right program
        for your child’s next academic step.
      </motion.p>
    </motion.div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  const accent = getCourseAccentClasses(course.accent);
  const reduceMotion = useReducedMotion();
  const cardVariants = createCardVariants(Boolean(reduceMotion));

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.015,
              transition: {
                duration: 0.3,
                ease: EASE_OUT_QUINT,
              },
            }
      }
      whileTap={
        reduceMotion
          ? undefined
          : {
              scale: 0.99,
            }
      }
      className={`group relative overflow-hidden rounded-[28px] border ${accent.cardBorder} ${accent.cardBg} ${accent.cardShadow} p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-5`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.68),transparent_34%)]"
      />

      {/* animated glowing border wash */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-r ${accent.glowRing} opacity-0 blur-[10px] transition-opacity duration-500 group-hover:opacity-70`}
      />

      {/* crisp inner border glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          course.accent === "lime"
            ? "ring-2 ring-lime-400/55"
            : "ring-2 ring-sky-400/55"
        }`}
      />

      {/* premium top light sweep */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-8 top-0 h-px scale-x-0 bg-gradient-to-r ${accent.glowRing} opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100`}
      />

      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-slate-900/[0.04]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-slate-900/[0.035]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-[1.07] ${accent.iconWrap}`}
          >
            <Icon className="h-7 w-7" strokeWidth={1.9} aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[1.15rem] font-extrabold leading-tight tracking-tight text-[#06111F] sm:text-[1.22rem]">
                {course.title}
              </h3>

              {course.badge ? (
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${accent.badge}`}
                >
                  <Trophy className="h-3 w-3" aria-hidden="true" />
                  {course.badge}
                </span>
              ) : null}
            </div>

            <div
              className={`mt-2 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${accent.accentLine}`}
            />

            <div
              className={`mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${accent.audience}`}
            >
              <UsersRound className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="opacity-80">Best for:</span>
              <span className="truncate">{course.audience}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-700">
          {course.description}
        </p>

        <div className="mt-4">
          <p className={`text-sm font-extrabold ${accent.text}`}>
            Program Highlights
          </p>

          <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {course.highlights.map((highlight) => {
              const HighlightIcon = highlight.icon;

              return (
                <span
                  key={highlight.label}
                  className={`inline-flex min-h-[38px] items-center gap-2 rounded-2xl border px-3 py-2 text-[12px] font-bold shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 ${accent.chip}`}
                >
                  <HighlightIcon
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-105 ${accent.chipIcon}`}
                    aria-hidden="true"
                  />
                  <span className="leading-tight">{highlight.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-3 inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-bold ${accent.proof}`}
        >
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{course.proofCue}</span>
        </div>

        <div className="mt-4 border-t border-slate-200/70 pt-4">
          <div className="grid gap-2.5 sm:grid-cols-[auto_1fr] sm:items-center md:grid-cols-1 lg:grid-cols-[auto_1fr]">
            <Link
              href={course.href}
              className={`group/cta relative inline-flex min-h-[44px] items-center justify-center gap-3 overflow-hidden rounded-2xl px-5 py-3 text-sm font-extrabold shadow-[0_10px_25px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:brightness-110 hover:saturate-125 hover:shadow-[0_16px_34px_rgba(15,23,42,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] ${accent.ring} ${accent.ctaButton}`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/cta:translate-x-[320%]"
              />
              <span className="relative z-10">{course.exploreLabel}</span>
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:scale-110 group-hover/cta:bg-white/30">
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <Link
              href={course.href}
              className="group/helper inline-flex min-h-[40px] items-center gap-2 rounded-xl px-1 text-xs font-bold leading-tight text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
            >
              <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{course.helperText}</span>
              <ArrowRight
                className="ml-auto h-3.5 w-3.5 transition-transform duration-300 group-hover/helper:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CoursesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-5"
    >
      {courses.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </motion.div>
  );
}

function CoursesCTA() {
  const reduceMotion = useReducedMotion();
  const fadeUp = createCardVariants(Boolean(reduceMotion));

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: {
                duration: 0.3,
                ease: EASE_OUT_QUINT,
              },
            }
      }
      className="group relative mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[30px] border border-lime-300/20 bg-[#07111F] shadow-[0_20px_55px_rgba(2,6,23,0.18)] transition-colors duration-300 hover:border-lime-300/45"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(163,230,53,0.16),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(56,189,248,0.10),transparent_32%),linear-gradient(135deg,#07111F_0%,#0B1628_55%,#081526_100%)] transition-opacity duration-500 group-hover:opacity-95"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.24) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-10 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-lime-300/70 to-transparent opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100"
      />

      <div className="relative z-10 grid gap-5 px-5 py-5 sm:px-6 sm:py-5 lg:grid-cols-[1.15fr_1.25fr_auto] lg:items-center lg:gap-7 lg:px-8 lg:py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-lime-300/25 bg-lime-300/10 text-lime-300 shadow-[0_0_32px_rgba(163,230,53,0.15)] transition-transform duration-300 group-hover:scale-105">
            <UsersRound
              className="h-7 w-7"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              Not sure which program is right for{" "}
              <span className="text-lime-300">your child?</span>
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Our academic counsellors will help you choose the right path.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:border-l lg:border-white/10 lg:pl-7">
          {ctaItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group/item rounded-2xl px-2 py-1 text-center transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <Icon
                  className="mx-auto h-5 w-5 text-lime-300 transition-transform duration-300 group-hover/item:-translate-y-0.5 group-hover/item:scale-105"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <p className="mt-2 text-[11px] font-semibold leading-tight text-slate-300 transition-colors duration-300 group-hover/item:text-white">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <Link
          href="/courses"
          className="group/cta relative inline-flex min-h-[44px] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#B7F51B] via-[#A3E635] to-[#84CC16] px-6 py-3.5 text-sm font-extrabold text-[#07111F] shadow-xl shadow-lime-400/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025] hover:brightness-110 hover:saturate-125 hover:shadow-lime-400/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 active:scale-[0.98] sm:w-auto sm:min-w-[230px]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/cta:translate-x-[320%]"
          />
          <span className="relative z-10">Get Free Course Guidance</span>
          <ArrowRight
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
      />
    </motion.div>
  );
}

function BottomTrustLine() {
  const reduceMotion = useReducedMotion();
  const fadeUp = createFadeUpVariants(Boolean(reduceMotion));

  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="mt-5 text-center text-sm font-semibold text-slate-700"
    >
      Trusted. <span className="text-lime-700">Result Driven.</span> Student
      Focused.
    </motion.p>
  );
}

export default function CoursesSection() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="relative flex justify-center overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(190,242,100,0.20),transparent_30%),radial-gradient(circle_at_88%_30%,rgba(125,211,252,0.12),transparent_32%),linear-gradient(135deg,#F8FAF2_0%,#F6F9EE_46%,#EEF5DE_100%)] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-16"
    >
      <CoursesBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <CoursesHeader />
        <CoursesGrid />
        <CoursesCTA />
        <BottomTrustLine />
      </div>
    </section>
  );
}
