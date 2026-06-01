// "use client";

// import { motion, useReducedMotion, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarCheck,
//   ChevronDown,
//   ClipboardCheck,
//   GraduationCap,
//   Heart,
//   Rocket,
//   ShieldCheck,
//   Trophy,
//   TrendingUp,
//   UserRound,
//   type LucideIcon,
// } from "lucide-react";

// type JourneyStep = {
//   number: string;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   label?: "START HERE" | "FINAL GOAL";
//   isFinal?: boolean;
// };

// type ReassuranceItem = {
//   label: string;
//   icon: LucideIcon;
// };

// const journeySteps: JourneyStep[] = [
//   {
//     number: "1",
//     title: "Free Demo Class",
//     description: "Book online or call",
//     icon: CalendarCheck,
//     label: "START HERE",
//   },
//   {
//     number: "2",
//     title: "Counselling + Assessment",
//     description: "Baseline test & plan",
//     icon: ClipboardCheck,
//   },
//   {
//     number: "3",
//     title: "Structured Learning",
//     description: "Personalised timetable",
//     icon: GraduationCap,
//   },
//   {
//     number: "4",
//     title: "Test · Track · Improve",
//     description: "Weekly tests + reports",
//     icon: TrendingUp,
//   },
//   {
//     number: "5",
//     title: "Crack IIT / NEET",
//     description: "Celebrate your rank!",
//     icon: Trophy,
//     label: "FINAL GOAL",
//     isFinal: true,
//   },
// ];

// const reassuranceItems: ReassuranceItem[] = [
//   {
//     label: "Free counselling",
//     icon: ShieldCheck,
//   },
//   {
//     label: "No obligation",
//     icon: UserRound,
//   },
//   {
//     label: "Parent-friendly guidance",
//     icon: Heart,
//   },
// ];

// const fadeUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 22,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const scaleIn: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.97,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const staggerParent: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.1,
//     },
//   },
// };

// export default function KotaAcademyStudentJourney() {
//   return (
//     <section
//       id="how-it-works"
//       className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24"
//     >
//       <SectionBackground />

//       <motion.div
//         className="relative z-10 mx-auto max-w-[500px] px-4 sm:px-5 md:max-w-[900px] md:px-8 lg:max-w-[1320px] lg:px-10 xl:max-w-[1480px]"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-90px" }}
//         variants={staggerParent}
//       >
//         <SectionHeader />

//         <JourneyRoadmapPanel />

//         <JourneyCTA />

//         <ReassuranceLine />
//       </motion.div>
//     </section>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(49,101,35,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(49,101,35,0.052)_1px,transparent_1px)] bg-[size:34px_34px]" />

//       <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B5FF3D]/18 blur-3xl md:h-[420px] md:w-[420px]" />

//       <div className="pointer-events-none absolute -left-24 top-48 h-56 w-56 rounded-full border-[42px] border-[#B5FF3D]/10 md:h-72 md:w-72" />

//       <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full border-[52px] border-[#B5FF3D]/10 md:h-80 md:w-80" />

//       <div className="pointer-events-none absolute left-8 top-12 hidden grid-cols-6 gap-3 opacity-35 md:grid">
//         {Array.from({ length: 48 }).map((_, index) => (
//           <span
//             key={index}
//             className="h-1.5 w-1.5 rounded-full bg-[#80B82D]/45"
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// function SectionHeader() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-4 flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-[#4E9417] md:w-14" />
//         <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#2F7D17] md:text-xs">
//           How It Works
//         </span>
//         <span className="h-px w-10 bg-[#4E9417] md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[440px] text-[38px] font-black leading-[0.98] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[780px] md:text-[58px] lg:max-w-[1150px] lg:text-[68px] xl:text-[76px]">
//         Your Path to IIT / NEET — Simplified
//       </h2>

//       <p className="mx-auto mt-6 max-w-[440px] text-[15px] leading-7 text-[#3C4860] md:max-w-[760px] md:text-lg md:leading-8">
//         A clear 5-step journey from your first enquiry to focused preparation,
//         progress tracking, and rank-ready confidence.
//       </p>
//     </motion.div>
//   );
// }

// function JourneyRoadmapPanel() {
//   return (
//     <motion.div
//       variants={scaleIn}
//       className="relative mt-10 overflow-hidden rounded-[34px] border border-[#203149]/80 bg-[radial-gradient(circle_at_88%_50%,rgba(181,255,61,0.18),transparent_32%),radial-gradient(circle_at_8%_20%,rgba(14,116,144,0.16),transparent_34%),linear-gradient(115deg,#07111F_0%,#0B1426_48%,#0D1E1A_100%)] p-4 shadow-[0_28px_90px_rgba(7,17,31,0.28)] md:p-6 lg:mt-12 lg:rounded-[38px] lg:p-10 lg:pt-16 xl:p-12 xl:pt-16"
//     >
//       <RoadmapPanelDecor />

//       <DesktopJourneyMap />

//       <MobileJourneyTimeline />
//     </motion.div>
//   );
// }

// function RoadmapPanelDecor() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />

//       <div className="pointer-events-none absolute inset-[8px] rounded-[28px] border border-white/[0.045] lg:rounded-[30px]" />

//       <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-72 rounded-full bg-[#0284C7]/12 blur-3xl" />

//       <div className="pointer-events-none absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-[#B5FF3D]/16 blur-3xl" />

//       <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 opacity-25">
//         <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <path
//               key={index}
//               d={`M-20 ${150 - index * 12}C80 ${105 - index * 8} 190 ${
//                 170 - index * 10
//               } 380 ${70 - index * 6}`}
//               stroke="#5DA8CC"
//               strokeOpacity="0.22"
//               strokeWidth="1"
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="pointer-events-none absolute right-0 top-0 h-44 w-72 opacity-25">
//         <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <path
//               key={index}
//               d={`M380 ${30 + index * 12}C270 ${68 + index * 8} 190 ${
//                 8 + index * 11
//               } -20 ${92 + index * 5}`}
//               stroke="#D9A441"
//               strokeOpacity="0.22"
//               strokeWidth="1"
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="pointer-events-none absolute right-12 top-10 hidden grid-cols-8 gap-2 opacity-25 lg:grid">
//         {Array.from({ length: 72 }).map((_, index) => (
//           <span
//             key={index}
//             className="h-1 w-1 rounded-full bg-[#B5FF3D]/45"
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// function DesktopJourneyMap() {
//   return (
//     <div className="relative z-10 hidden items-stretch lg:grid lg:grid-cols-[1fr_52px_1fr_52px_1fr_52px_1fr_52px_1.08fr]">
//       {journeySteps.map((step, index) => (
//         <div
//           key={step.number}
//           className="contents"
//         >
//           <DesktopJourneyCard step={step} />

//           {index !== journeySteps.length - 1 && (
//             <DesktopConnector index={index} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// function DesktopJourneyCard({ step }: { step: JourneyStep }) {
//   const Icon = step.icon;

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileHover={{
//         y: -6,
//         transition: { duration: 0.28, ease: "easeOut" },
//       }}
//       className={`group relative flex min-h-[300px] flex-col items-center justify-center overflow-visible rounded-[28px] px-6 py-8 text-center transition duration-300 ${
//         step.isFinal
//           ? "border border-[#B5FF3D]/80 bg-[radial-gradient(circle_at_50%_18%,rgba(181,255,61,0.2),transparent_42%),linear-gradient(145deg,rgba(13,54,38,0.96),rgba(8,31,28,0.98))] shadow-[0_0_34px_rgba(181,255,61,0.22)]"
//           : "border border-white/12 bg-[linear-gradient(145deg,rgba(18,29,47,0.92),rgba(8,16,30,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_46px_rgba(0,0,0,0.18)] hover:border-[#B5FF3D]/35"
//       }`}
//     >
//       {step.label && <DesktopPillLabel label={step.label} />}

//       <NumberBadge number={step.number} isFinal={step.isFinal} />

//       <div
//         className={`mt-8 flex h-16 w-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 ${
//           step.isFinal
//             ? "text-[#D9A441]"
//             : "text-[#B5FF3D] drop-shadow-[0_0_18px_rgba(181,255,61,0.16)]"
//         }`}
//       >
//         <Icon
//           className={step.isFinal ? "h-16 w-16" : "h-14 w-14"}
//           strokeWidth={step.isFinal ? 1.9 : 2.1}
//         />
//       </div>

//       <h3 className="mt-8 text-[21px] font-black leading-tight tracking-[-0.04em] text-white xl:text-[23px]">
//         {step.title}
//       </h3>

//       <p
//         className={`mt-4 text-[16px] leading-6 ${
//           step.isFinal ? "text-[#F3D26D]" : "text-[#D7DEE9]"
//         }`}
//       >
//         {step.description}
//       </p>

//       {step.isFinal && (
//         <>
//           <span className="absolute right-8 top-10 h-1.5 w-1.5 rounded-full bg-[#D9A441] shadow-[0_0_16px_rgba(217,164,65,0.9)]" />
//           <span className="absolute bottom-10 left-8 h-1 w-1 rounded-full bg-[#B5FF3D] shadow-[0_0_14px_rgba(181,255,61,0.85)]" />
//         </>
//       )}
//     </motion.article>
//   );
// }

// function DesktopPillLabel({ label }: { label: string }) {
//   return (
//     <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 rounded-full border border-[#B5FF3D]/45 bg-[#0C1A15]/80 px-5 py-2 text-[12px] font-black uppercase tracking-[0.16em] text-[#B5FF3D] shadow-[0_10px_28px_rgba(181,255,61,0.08)]">
//       {label}
//     </div>
//   );
// }

// function DesktopConnector({ index }: { index: number }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <div className="relative flex items-center justify-center">
//       <div className="relative h-[2px] w-full overflow-visible">
//         <div
//           className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(217,164,65,0.95) 2px, transparent 2.5px)",
//             backgroundSize: "12px 100%",
//             backgroundRepeat: "repeat-x",
//             backgroundPosition: "left center",
//           }}
//         />

//         {!reduceMotion && (
//           <motion.span
//             className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#D9A441] shadow-[0_0_18px_rgba(217,164,65,0.95)]"
//             animate={{ x: [0, 40, 0], opacity: [0.35, 1, 0.35] }}
//             transition={{
//               duration: 1.8,
//               delay: index * 0.28,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         )}
//       </div>

//       <ArrowRight
//         className="absolute h-7 w-7 text-[#D9A441] drop-shadow-[0_0_12px_rgba(217,164,65,0.55)]"
//         strokeWidth={2.6}
//       />
//     </div>
//   );
// }

// function MobileJourneyTimeline() {
//   return (
//     <div className="relative z-10 lg:hidden">
//       <div className="space-y-0">
//         {journeySteps.map((step, index) => (
//           <div key={step.number}>
//             {step.label && (
//               <div className="mb-3 flex justify-center">
//                 <MobilePillLabel label={step.label} />
//               </div>
//             )}

//             <MobileJourneyCard step={step} />

//             {index !== journeySteps.length - 1 && (
//               <MobileConnector index={index} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MobileJourneyCard({ step }: { step: JourneyStep }) {
//   const Icon = step.icon;

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileTap={{ scale: 0.985 }}
//       className={`relative overflow-hidden rounded-[26px] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.18)] ${
//         step.isFinal
//           ? "border border-[#B5FF3D]/75 bg-[radial-gradient(circle_at_20%_30%,rgba(217,164,65,0.18),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(181,255,61,0.18),transparent_38%),linear-gradient(145deg,rgba(13,54,38,0.96),rgba(8,31,28,0.98))]"
//           : "border border-white/12 bg-[linear-gradient(145deg,rgba(18,29,47,0.92),rgba(8,16,30,0.96))]"
//       }`}
//     >
//       <div className="relative z-10 flex items-center gap-4">
//         <NumberBadge number={step.number} isFinal={step.isFinal} compact />

//         <div
//           className={`flex h-14 w-14 shrink-0 items-center justify-center ${
//             step.isFinal ? "text-[#D9A441]" : "text-[#B5FF3D]"
//           }`}
//         >
//           <Icon
//             className={step.isFinal ? "h-14 w-14" : "h-12 w-12"}
//             strokeWidth={step.isFinal ? 1.9 : 2.15}
//           />
//         </div>

//         <div className="min-w-0">
//           <h3 className="text-[20px] font-black leading-tight tracking-[-0.04em] text-white">
//             {step.title}
//           </h3>

//           <p
//             className={`mt-1.5 text-[15px] leading-6 ${
//               step.isFinal ? "text-[#F3D26D]" : "text-[#D7DEE9]"
//             }`}
//           >
//             {step.description}
//           </p>
//         </div>
//       </div>

//       {step.isFinal && (
//         <>
//           <span className="absolute right-9 top-7 h-1.5 w-1.5 rounded-full bg-[#D9A441] shadow-[0_0_16px_rgba(217,164,65,0.95)]" />
//           <span className="absolute bottom-7 right-16 h-1 w-1 rounded-full bg-[#B5FF3D] shadow-[0_0_14px_rgba(181,255,61,0.85)]" />
//         </>
//       )}
//     </motion.article>
//   );
// }

// function MobileConnector({ index }: { index: number }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <div className="relative flex h-10 justify-start pl-[30px]">
//       <div className="relative h-full border-l border-dashed border-[#D9A441]/70">
//         {!reduceMotion && (
//           <motion.span
//             className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-[#D9A441] shadow-[0_0_16px_rgba(217,164,65,0.9)]"
//             animate={{ y: [0, 26, 0], opacity: [0.4, 1, 0.4] }}
//             transition={{
//               duration: 1.6,
//               delay: index * 0.18,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         )}

//         <ChevronDown
//           className="absolute -bottom-1 left-[-10px] h-5 w-5 text-[#B5FF3D]"
//           strokeWidth={2.6}
//         />
//       </div>
//     </div>
//   );
// }

// function MobilePillLabel({ label }: { label: string }) {
//   return (
//     <span className="rounded-full border border-[#B5FF3D]/45 bg-[#0C1A15]/80 px-5 py-2 text-[12px] font-black uppercase tracking-[0.16em] text-[#B5FF3D] shadow-[0_10px_28px_rgba(181,255,61,0.08)]">
//       {label}
//     </span>
//   );
// }

// function NumberBadge({
//   number,
//   isFinal,
//   compact = false,
// }: {
//   number: string;
//   isFinal?: boolean;
//   compact?: boolean;
// }) {
//   return (
//     <div
//       className={`flex shrink-0 items-center justify-center rounded-full font-black shadow-[0_10px_22px_rgba(0,0,0,0.18)] ${
//         compact
//           ? "h-12 w-12 text-[24px]"
//           : "h-14 w-14 text-[26px] xl:h-16 xl:w-16 xl:text-[30px]"
//       } ${
//         isFinal
//           ? "bg-[linear-gradient(145deg,#B5FF3D,#4EA100)] text-white"
//           : "bg-[#F8FAFC] text-[#07142F]"
//       }`}
//     >
//       {number}
//     </div>
//   );
// }

// function JourneyCTA() {
//   return (
//     <motion.a
//       variants={fadeUp}
//       href="#contact"
//       whileHover={{
//         y: -3,
//         transition: { duration: 0.25, ease: "easeOut" },
//       }}
//       whileTap={{ scale: 0.985 }}
//       className="group relative mx-auto mt-8 flex h-16 w-full max-w-[760px] items-center justify-center gap-4 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#B5FF3D_0%,#69B51F_42%,#0B7A34_100%)] px-6 text-center text-[17px] font-black tracking-[-0.025em] text-white shadow-[0_24px_55px_rgba(78,154,0,0.32)] md:mt-10 md:h-[72px] md:text-[26px] lg:max-w-[640px]"
//     >
//       <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />

//       <Rocket className="relative z-10 h-6 w-6 md:h-8 md:w-8" strokeWidth={2.4} />

//       <span className="relative z-10">Start Your Journey — Book Free Demo</span>

//       <ArrowRight className="relative z-10 h-6 w-6 transition duration-300 group-hover:translate-x-1 md:h-8 md:w-8" />
//     </motion.a>
//   );
// }

// function ReassuranceLine() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mx-auto mt-5 flex max-w-[760px] flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[#34415B] md:gap-x-7"
//     >
//       {reassuranceItems.map((item, index) => {
//         const Icon = item.icon;

//         return (
//           <div key={item.label} className="flex items-center gap-3">
//             {index !== 0 && (
//               <span className="hidden h-6 w-px bg-[#C9D8B8] md:block" />
//             )}

//             <Icon className="h-6 w-6 text-[#3E8618]" strokeWidth={2.2} />

//             <span className="text-[14px] font-medium leading-tight md:text-[17px]">
//               {item.label}
//             </span>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// }

// "use client";

// import { motion, useReducedMotion, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarCheck,
//   ChevronDown,
//   ClipboardCheck,
//   GraduationCap,
//   Heart,
//   Rocket,
//   ShieldCheck,
//   Trophy,
//   TrendingUp,
//   UserRound,
//   type LucideIcon,
// } from "lucide-react";

// type JourneyStep = {
//   number: string;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   label?: "START HERE" | "FINAL GOAL";
//   isFinal?: boolean;
// };

// type ReassuranceItem = {
//   label: string;
//   icon: LucideIcon;
// };

// const journeySteps: JourneyStep[] = [
//   {
//     number: "1",
//     title: "Free Demo Class",
//     description: "Book online or call",
//     icon: CalendarCheck,
//     label: "START HERE",
//   },
//   {
//     number: "2",
//     title: "Counselling + Assessment",
//     description: "Baseline test & plan",
//     icon: ClipboardCheck,
//   },
//   {
//     number: "3",
//     title: "Structured Learning",
//     description: "Personalised timetable",
//     icon: GraduationCap,
//   },
//   {
//     number: "4",
//     title: "Test · Track · Improve",
//     description: "Weekly tests + reports",
//     icon: TrendingUp,
//   },
//   {
//     number: "5",
//     title: "Crack IIT / NEET",
//     description: "Celebrate your rank!",
//     icon: Trophy,
//     label: "FINAL GOAL",
//     isFinal: true,
//   },
// ];

// const reassuranceItems: ReassuranceItem[] = [
//   {
//     label: "Free counselling",
//     icon: ShieldCheck,
//   },
//   {
//     label: "No obligation",
//     icon: UserRound,
//   },
//   {
//     label: "Parent-friendly guidance",
//     icon: Heart,
//   },
// ];

// const fadeUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 22,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const scaleIn: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.97,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const staggerParent: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.1,
//     },
//   },
// };

// export default function KotaAcademyStudentJourney() {
//   return (
//     <section
//       id="how-it-works"
//       className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24"
//     >
//       <SectionBackground />

//       <motion.div
//         className="relative z-10 mx-auto max-w-[500px] px-4 sm:px-5 md:max-w-[900px] md:px-8 lg:max-w-[1320px] lg:px-10 xl:max-w-[1480px]"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-90px" }}
//         variants={staggerParent}
//       >
//         <SectionHeader />

//         <JourneyRoadmapPanel />

//         <JourneyCTA />

//         <ReassuranceLine />
//       </motion.div>
//     </section>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(49,101,35,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(49,101,35,0.052)_1px,transparent_1px)] bg-[size:34px_34px]" />

//       <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B5FF3D]/18 blur-3xl md:h-[420px] md:w-[420px]" />

//       <div className="pointer-events-none absolute -left-24 top-48 h-56 w-56 rounded-full border-[42px] border-[#B5FF3D]/10 md:h-72 md:w-72" />

//       <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full border-[52px] border-[#B5FF3D]/10 md:h-80 md:w-80" />

//       <div className="pointer-events-none absolute left-8 top-12 hidden grid-cols-6 gap-3 opacity-35 md:grid">
//         {Array.from({ length: 48 }).map((_, index) => (
//           <span
//             key={index}
//             className="h-1.5 w-1.5 rounded-full bg-[#80B82D]/45"
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// function SectionHeader() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-4 flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-[#4E9417] md:w-14" />
//         <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#2F7D17] md:text-xs">
//           How It Works
//         </span>
//         <span className="h-px w-10 bg-[#4E9417] md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[440px] text-[38px] font-black leading-[0.98] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[780px] md:text-[58px] lg:max-w-[1150px] lg:text-[68px] xl:text-[76px]">
//         Your Path to IIT / NEET — Simplified
//       </h2>

//       <p className="mx-auto mt-6 max-w-[440px] text-[15px] leading-7 text-[#3C4860] md:max-w-[760px] md:text-lg md:leading-8">
//         A clear 5-step journey from your first enquiry to focused preparation,
//         progress tracking, and rank-ready confidence.
//       </p>
//     </motion.div>
//   );
// }

// function JourneyRoadmapPanel() {
//   return (
//     <motion.div
//       variants={scaleIn}
//       className="relative mt-10 overflow-hidden rounded-[34px] border border-[#203149]/80 bg-[radial-gradient(circle_at_90%_72%,rgba(181,255,61,0.20),transparent_34%),radial-gradient(circle_at_10%_18%,rgba(22,119,147,0.16),transparent_32%),linear-gradient(120deg,#07111F_0%,#0A1728_42%,#0B1D24_68%,#102719_100%)] p-4 shadow-[0_28px_90px_rgba(7,17,31,0.28)] md:p-6 lg:mt-12 lg:rounded-[38px] lg:p-10 lg:pt-16 xl:p-12 xl:pt-16"
//     >
//       <RoadmapPanelDecor />

//       <DesktopJourneyMap />

//       <MobileJourneyTimeline />
//     </motion.div>
//   );
// }

// function RoadmapPanelDecor() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />

//       <div className="pointer-events-none absolute inset-[8px] rounded-[28px] border border-white/[0.045] lg:rounded-[30px]" />

//       <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-72 rounded-full bg-[#0284C7]/12 blur-3xl" />

//       <div className="pointer-events-none absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-[#B5FF3D]/16 blur-3xl" />

//       <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 opacity-25">
//         <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <path
//               key={index}
//               d={`M-20 ${150 - index * 12}C80 ${105 - index * 8} 190 ${
//                 170 - index * 10
//               } 380 ${70 - index * 6}`}
//               stroke="#5DA8CC"
//               strokeOpacity="0.22"
//               strokeWidth="1"
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="pointer-events-none absolute right-0 top-0 h-44 w-72 opacity-25">
//         <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <path
//               key={index}
//               d={`M380 ${30 + index * 12}C270 ${68 + index * 8} 190 ${
//                 8 + index * 11
//               } -20 ${92 + index * 5}`}
//               stroke="#D9A441"
//               strokeOpacity="0.22"
//               strokeWidth="1"
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="pointer-events-none absolute right-12 top-10 hidden grid-cols-8 gap-2 opacity-25 lg:grid">
//         {Array.from({ length: 72 }).map((_, index) => (
//           <span
//             key={index}
//             className="h-1 w-1 rounded-full bg-[#B5FF3D]/45"
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// function DesktopJourneyMap() {
//   return (
//     <div className="relative z-10 hidden items-stretch lg:grid lg:grid-cols-[1fr_52px_1fr_52px_1fr_52px_1fr_52px_1.08fr]">
//       {journeySteps.map((step, index) => (
//         <div key={step.number} className="contents">
//           <DesktopJourneyCard step={step} />

//           {index !== journeySteps.length - 1 && (
//             <DesktopConnector index={index} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// function DesktopJourneyCard({ step }: { step: JourneyStep }) {
//   const Icon = step.icon;

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileHover={{
//         y: -6,
//         transition: { duration: 0.28, ease: "easeOut" },
//       }}
//       className={`group relative flex min-h-[300px] flex-col items-center justify-center overflow-visible rounded-[28px] px-6 py-8 text-center transition duration-300 ${
//         step.isFinal
//           ? "border border-[#B5FF3D]/80 bg-[radial-gradient(circle_at_50%_18%,rgba(181,255,61,0.2),transparent_42%),linear-gradient(145deg,rgba(13,54,38,0.96),rgba(8,31,28,0.98))] shadow-[0_0_34px_rgba(181,255,61,0.22)]"
//           : "border border-white/12 bg-[linear-gradient(145deg,rgba(18,29,47,0.92),rgba(8,16,30,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_46px_rgba(0,0,0,0.18)] hover:border-[#B5FF3D]/35"
//       }`}
//     >
//       {step.label && <DesktopPillLabel label={step.label} />}

//       <NumberBadge number={step.number} isFinal={step.isFinal} />

//       <div
//         className={`mt-8 flex h-16 w-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 ${
//           step.isFinal
//             ? "text-[#D9A441]"
//             : "text-[#B5FF3D] drop-shadow-[0_0_18px_rgba(181,255,61,0.16)]"
//         }`}
//       >
//         <Icon
//           className={step.isFinal ? "h-16 w-16" : "h-14 w-14"}
//           strokeWidth={step.isFinal ? 1.9 : 2.1}
//         />
//       </div>

//       <h3 className="mt-8 text-[21px] font-black leading-tight tracking-[-0.04em] text-white xl:text-[23px]">
//         {step.title}
//       </h3>

//       <p
//         className={`mt-4 text-[16px] leading-6 ${
//           step.isFinal ? "text-[#F3D26D]" : "text-[#D7DEE9]"
//         }`}
//       >
//         {step.description}
//       </p>

//       {step.isFinal && (
//         <>
//           <span className="absolute right-8 top-10 h-1.5 w-1.5 rounded-full bg-[#D9A441] shadow-[0_0_16px_rgba(217,164,65,0.9)]" />
//           <span className="absolute bottom-10 left-8 h-1 w-1 rounded-full bg-[#B5FF3D] shadow-[0_0_14px_rgba(181,255,61,0.85)]" />
//         </>
//       )}
//     </motion.article>
//   );
// }

// function DesktopPillLabel({ label }: { label: string }) {
//   return (
//     <div className="absolute -top-[38px] left-1/2 -translate-x-1/2 rounded-full border border-[#B5FF3D]/45 bg-[#0C1A15]/80 px-5 py-2 text-[12px] font-black uppercase tracking-[0.16em] text-[#B5FF3D] shadow-[0_10px_28px_rgba(181,255,61,0.08)]">
//       {label}
//     </div>
//   );
// }

// function DesktopConnector({ index }: { index: number }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <div className="relative flex items-center justify-center">
//       <div className="relative h-[2px] w-full overflow-visible">
//         <div
//           className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(217,164,65,0.95) 2px, transparent 2.5px)",
//             backgroundSize: "12px 100%",
//             backgroundRepeat: "repeat-x",
//             backgroundPosition: "left center",
//           }}
//         />

//         {!reduceMotion && (
//           <motion.span
//             className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#D9A441] shadow-[0_0_18px_rgba(217,164,65,0.95)]"
//             animate={{ x: [0, 40, 0], opacity: [0.35, 1, 0.35] }}
//             transition={{
//               duration: 1.8,
//               delay: index * 0.28,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         )}
//       </div>

//       <ArrowRight
//         className="absolute h-7 w-7 text-[#D9A441] drop-shadow-[0_0_12px_rgba(217,164,65,0.55)]"
//         strokeWidth={2.6}
//       />
//     </div>
//   );
// }

// function MobileJourneyTimeline() {
//   return (
//     <div className="relative z-10 lg:hidden">
//       <div className="space-y-0">
//         {journeySteps.map((step, index) => (
//           <div key={step.number} className={step.label ? "pt-4" : ""}>
//             <MobileJourneyCard step={step} />

//             {index !== journeySteps.length - 1 && (
//               <MobileConnector index={index} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MobileJourneyCard({ step }: { step: JourneyStep }) {
//   const Icon = step.icon;

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileTap={{ scale: 0.985 }}
//       className={`relative overflow-visible rounded-[26px] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.18)] ${
//         step.isFinal
//           ? "border border-[#B5FF3D]/75 bg-[radial-gradient(circle_at_20%_30%,rgba(217,164,65,0.18),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(181,255,61,0.18),transparent_38%),linear-gradient(145deg,rgba(13,54,38,0.96),rgba(8,31,28,0.98))]"
//           : "border border-white/12 bg-[linear-gradient(145deg,rgba(18,29,47,0.92),rgba(8,16,30,0.96))]"
//       }`}
//     >
//       {step.label && <MobilePillLabel label={step.label} />}

//       <div className="relative z-10 flex items-center gap-4">
//         <NumberBadge number={step.number} isFinal={step.isFinal} compact />

//         <div
//           className={`flex h-14 w-14 shrink-0 items-center justify-center ${
//             step.isFinal ? "text-[#D9A441]" : "text-[#B5FF3D]"
//           }`}
//         >
//           <Icon
//             className={step.isFinal ? "h-14 w-14" : "h-12 w-12"}
//             strokeWidth={step.isFinal ? 1.9 : 2.15}
//           />
//         </div>

//         <div className="min-w-0">
//           <h3 className="text-[20px] font-black leading-tight tracking-[-0.04em] text-white">
//             {step.title}
//           </h3>

//           <p
//             className={`mt-1.5 text-[15px] leading-6 ${
//               step.isFinal ? "text-[#F3D26D]" : "text-[#D7DEE9]"
//             }`}
//           >
//             {step.description}
//           </p>
//         </div>
//       </div>

//       {step.isFinal && (
//         <>
//           <span className="absolute right-9 top-7 h-1.5 w-1.5 rounded-full bg-[#D9A441] shadow-[0_0_16px_rgba(217,164,65,0.95)]" />
//           <span className="absolute bottom-7 right-16 h-1 w-1 rounded-full bg-[#B5FF3D] shadow-[0_0_14px_rgba(181,255,61,0.85)]" />
//         </>
//       )}
//     </motion.article>
//   );
// }

// function MobileConnector({ index }: { index: number }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <div className="relative flex h-11 items-center justify-center">
//       <div className="relative h-full w-[24px]">
//         <div
//           className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, rgba(217,164,65,0.82) 1.8px, transparent 2.4px)",
//             backgroundSize: "100% 10px",
//             backgroundRepeat: "repeat-y",
//             backgroundPosition: "center top",
//           }}
//         />

//         {!reduceMotion && (
//           <motion.span
//             className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#D9A441] shadow-[0_0_16px_rgba(217,164,65,0.9)]"
//             animate={{ y: [0, 30, 0], opacity: [0.35, 1, 0.35] }}
//             transition={{
//               duration: 1.65,
//               delay: index * 0.18,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         )}

//         <ChevronDown
//           className="absolute bottom-[-2px] left-1/2 h-5 w-5 -translate-x-1/2 text-[#B5FF3D] drop-shadow-[0_0_10px_rgba(181,255,61,0.45)]"
//           strokeWidth={2.7}
//         />
//       </div>
//     </div>
//   );
// }

// function MobilePillLabel({ label }: { label: string }) {
//   return (
//     <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B5FF3D]/55 bg-[#0C1A15]/95 px-5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#B5FF3D] shadow-[0_10px_28px_rgba(181,255,61,0.14)] backdrop-blur-sm">
//       {label}
//     </span>
//   );
// }

// function NumberBadge({
//   number,
//   isFinal,
//   compact = false,
// }: {
//   number: string;
//   isFinal?: boolean;
//   compact?: boolean;
// }) {
//   return (
//     <div
//       className={`flex shrink-0 items-center justify-center rounded-full font-black shadow-[0_10px_22px_rgba(0,0,0,0.18)] ${
//         compact
//           ? "h-12 w-12 text-[24px]"
//           : "h-14 w-14 text-[26px] xl:h-16 xl:w-16 xl:text-[30px]"
//       } ${
//         isFinal
//           ? "bg-[linear-gradient(145deg,#B5FF3D,#4EA100)] text-white"
//           : "bg-[#F8FAFC] text-[#07142F]"
//       }`}
//     >
//       {number}
//     </div>
//   );
// }

// function JourneyCTA() {
//   return (
//     <motion.a
//       variants={fadeUp}
//       href="#contact"
//       whileHover={{
//         y: -3,
//         transition: { duration: 0.25, ease: "easeOut" },
//       }}
//       whileTap={{ scale: 0.985 }}
//       className="group relative mx-auto mt-8 flex h-16 w-full max-w-[760px] items-center justify-center gap-4 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#B5FF3D_0%,#69B51F_42%,#0B7A34_100%)] px-6 text-center text-[17px] font-black tracking-[-0.025em] text-white shadow-[0_24px_55px_rgba(78,154,0,0.32)] md:mt-10 md:h-[72px] md:text-[26px] lg:max-w-[640px]"
//     >
//       <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />

//       <Rocket
//         className="relative z-10 h-6 w-6 md:h-8 md:w-8"
//         strokeWidth={2.4}
//       />

//       <span className="relative z-10">
//         Start Your Journey — Book Free Demo
//       </span>

//       <ArrowRight className="relative z-10 h-6 w-6 transition duration-300 group-hover:translate-x-1 md:h-8 md:w-8" />
//     </motion.a>
//   );
// }

// function ReassuranceLine() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mx-auto mt-5 flex max-w-[760px] flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[#34415B] md:gap-x-7"
//     >
//       {reassuranceItems.map((item, index) => {
//         const Icon = item.icon;

//         return (
//           <div key={item.label} className="flex items-center gap-3">
//             {index !== 0 && (
//               <span className="hidden h-6 w-px bg-[#C9D8B8] md:block" />
//             )}

//             <Icon className="h-6 w-6 text-[#3E8618]" strokeWidth={2.2} />

//             <span className="text-[14px] font-medium leading-tight md:text-[17px]">
//               {item.label}
//             </span>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// }

"use client";

import { Fragment, useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  Flag,
  GraduationCap,
  Heart,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tag?: { label: string; icon: LucideIcon };
  isFinal?: boolean;
};

const journeySteps: JourneyStep[] = [
  {
    number: "1",
    title: "Free Demo Class",
    description: "Book online or call",
    icon: CalendarCheck,
    tag: { label: "Start here", icon: Sparkles },
  },
  {
    number: "2",
    title: "Counselling + Assessment",
    description: "Baseline test & study plan",
    icon: ClipboardCheck,
  },
  {
    number: "3",
    title: "Structured Learning",
    description: "Personalised timetable",
    icon: GraduationCap,
  },
  {
    number: "4",
    title: "Test · Track · Improve",
    description: "Weekly tests + reports",
    icon: TrendingUp,
  },
  {
    number: "5",
    title: "Crack IIT / NEET",
    description: "Celebrate your rank!",
    icon: Trophy,
    tag: { label: "Final goal", icon: Flag },
    isFinal: true,
  },
];

const reassuranceItems = [
  { label: "Free counselling", icon: ShieldCheck },
  { label: "No obligation", icon: UserRound },
  { label: "Parent-friendly guidance", icon: Heart },
];

const STEP_COUNT = journeySteps.length;
const nodeReach = (i: number) => i / (STEP_COUNT - 1);

/* -------------------------------------------------------------------------- */
/*  Motion                                                                    */
/* -------------------------------------------------------------------------- */

const EXPO = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18, mass: 0.6 },
  },
};

/* celebratory sweep that fires once when the final card is reached */
const shimmerReach: Variants = {
  idle: { x: "-140%", opacity: 0 },
  play: {
    x: ["-140%", "240%"],
    opacity: [0, 1, 0],
    transition: { duration: 1.15, ease: "easeInOut" },
  },
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function StudentJourney() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_50%_-10%,#FCFEF7_0%,#F2F8E6_48%,#E9F3D9_100%)] py-16 text-[#0B1B33] md:py-20 lg:py-24"
      >
        <SectionBackground />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          variants={stagger}
        >
          <SectionHeader />
          <JourneyPanel />
          <JourneyCTA />
          <ReassuranceLine />
        </motion.div>
      </section>
    </MotionConfig>
  );
}

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(47,125,23,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(47,125,23,0.045)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_88%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-[320px] w-[320px] rounded-full bg-[#16A34A]/12 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-[360px] w-[360px] rounded-full bg-[#B5FF3D]/16 blur-[120px]" />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

function SectionHeader() {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-9 bg-[#4E9417]/60" />
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
          How It Works
        </span>
        <span className="h-px w-9 bg-[#4E9417]/60" />
      </div>

      <h2 className="mx-auto max-w-[820px] text-balance text-[32px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[#0B1B33] sm:text-[40px] md:text-[48px] lg:text-[54px]">
        Your Path to <span className="text-[#3E9A12]">IIT / NEET</span>
        <span> — Simplified</span>
      </h2>

      <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
        A clear 5-step journey — from your first enquiry to focused
        preparation, progress tracking, and rank-ready confidence.
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Panel                                                                     */
/* -------------------------------------------------------------------------- */

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function JourneyPanel() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mt-12 overflow-hidden rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_12%_8%,rgba(22,163,74,0.22),transparent_45%),radial-gradient(circle_at_90%_92%,rgba(181,255,61,0.18),transparent_46%),radial-gradient(circle_at_60%_50%,rgba(13,90,110,0.18),transparent_55%),linear-gradient(155deg,#071521_0%,#0A2030_52%,#07241A_100%)] p-5 shadow-[0_30px_80px_-22px_rgba(7,21,33,0.5)] sm:p-7 lg:rounded-[30px] lg:p-9"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: NOISE, backgroundSize: "180px 180px" }}
      />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-[7px] rounded-[20px] border border-white/[0.05] lg:rounded-[24px]" />

      <DesktopRoadmap />
      <MobileRoadmap />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared pieces                                                             */
/* -------------------------------------------------------------------------- */

function StepNode({
  number,
  isFinal,
  size = "lg",
  progress,
  reach,
  reached,
}: {
  number: string;
  isFinal?: boolean;
  size?: "lg" | "sm";
  progress: MotionValue<number>;
  reach: number;
  reached: boolean;
}) {
  const dim = size === "lg" ? "h-11 w-11 text-[17px]" : "h-9 w-9 text-[15px]";
  const glow = useTransform(progress, [Math.max(0, reach - 0.04), reach], [0, 1]);
  const filled = isFinal && reached; // final node earns its colour on arrival

  return (
    <span className="relative flex shrink-0 items-center justify-center">
      <motion.span
        aria-hidden
        style={{ opacity: glow }}
        className="pointer-events-none absolute -inset-2 rounded-full bg-[#B5FF3D]/35 blur-md"
      />
      <motion.span
        variants={pop}
        className={`relative flex items-center justify-center rounded-full font-bold ${dim} ${
          filled
            ? "bg-[linear-gradient(145deg,#C6FF52,#3FA31E)] text-[#08210B] shadow-[0_0_24px_rgba(181,255,61,0.55)]"
            : "bg-[#0C1E30] text-[#DDF3BD] ring-1 ring-inset ring-[#B5FF3D]/40 shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
        }`}
      >
        {number}
      </motion.span>
    </span>
  );
}

function IconChip({
  Icon,
  isFinal,
  size = "lg",
  reached,
}: {
  Icon: LucideIcon;
  isFinal?: boolean;
  size?: "lg" | "sm";
  reached: boolean;
}) {
  const box = size === "lg" ? "h-[52px] w-[52px]" : "h-11 w-11";
  const ic = size === "lg" ? "h-6 w-6" : "h-[20px] w-[20px]";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300 ${box} ${
        isFinal
          ? "border-[#E6B450]/35 bg-[#E6B450]/12"
          : "border-[#B5FF3D]/20 bg-[#B5FF3D]/[0.08] group-hover:border-[#B5FF3D]/45"
      }`}
    >
      {/* reach-tick (fires once when the path arrives) */}
      <motion.span
        animate={reached ? { scale: [1, 1.18, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex"
      >
        <Icon
          className={`${ic} transition-transform duration-300 group-hover:scale-110 ${
            isFinal ? "text-[#F0C25E]" : "text-[#B5FF3D]"
          }`}
          strokeWidth={2}
          aria-hidden
        />
      </motion.span>
    </div>
  );
}

function Tag({
  tag,
  isFinal,
}: {
  tag: { label: string; icon: LucideIcon };
  isFinal?: boolean;
}) {
  const TagIcon = tag.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ${
        isFinal
          ? "bg-[#E6B450]/12 text-[#F0C25E] ring-[#E6B450]/30"
          : "bg-[#B5FF3D]/12 text-[#C6FF6E] ring-[#B5FF3D]/30"
      }`}
    >
      <TagIcon className="h-3 w-3" strokeWidth={2.4} aria-hidden />
      {tag.label}
    </span>
  );
}

/* fade-in highlight + one-time sweep for the final card on arrival */
function CelebrationLayer({ reached }: { reached: boolean }) {
  return (
    <>
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: reached ? 1 : 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#B5FF3D]/55 bg-[radial-gradient(circle_at_50%_118%,rgba(181,255,61,0.22),transparent_62%),linear-gradient(160deg,rgba(20,58,36,0.55),rgba(9,28,22,0.4))] shadow-[0_0_0_1px_rgba(181,255,61,0.18),0_22px_50px_-16px_rgba(181,255,61,0.55)]"
      />
      <motion.span
        aria-hidden
        variants={shimmerReach}
        initial="idle"
        animate={reached ? "play" : "idle"}
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(181,255,61,0.22),transparent)]"
      />
    </>
  );
}

/* tracks whether the scroll-fill has reached this step */
function useReached(progress: MotionValue<number>, reach: number) {
  const reduce = useReducedMotion();
  const [reached, setReached] = useState<boolean>(!!reduce);
  useMotionValueEvent(progress, "change", (v) => {
    if (v >= reach - 0.015) setReached(true);
  });
  return reached;
}

/* -------------------------------------------------------------------------- */
/*  Desktop roadmap (lg+)                                                      */
/* -------------------------------------------------------------------------- */

function DesktopRoadmap() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const filled = useMotionValue(1);
  const progress = reduce ? filled : scrollYProgress;

  return (
    <motion.div
      ref={ref}
      variants={stagger}
      className="relative z-10 hidden items-stretch lg:flex"
    >
      {journeySteps.map((step, index) => (
        <Fragment key={step.number}>
          <DesktopCard step={step} index={index} progress={progress} />
          {index !== STEP_COUNT - 1 && (
            <HConnector index={index} progress={progress} />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
}

function DesktopCard({
  step,
  index,
  progress,
}: {
  step: JourneyStep;
  index: number;
  progress: MotionValue<number>;
}) {
  const reached = useReached(progress, nodeReach(index));

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-1 flex-col items-center overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] px-4 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-colors duration-300 hover:border-[#B5FF3D]/30"
    >
      {step.isFinal && <CelebrationLayer reached={reached} />}

      <div className="relative z-10 mb-3 flex h-6 items-center justify-center">
        {step.tag && <Tag tag={step.tag} isFinal={step.isFinal} />}
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
        <StepNode
          number={step.number}
          isFinal={step.isFinal}
          progress={progress}
          reach={nodeReach(index)}
          reached={reached}
        />

        <div className="mt-4">
          <IconChip Icon={step.icon} isFinal={step.isFinal} reached={reached} />
        </div>

        <h3 className="mt-3 text-[16px] font-bold leading-snug tracking-[-0.01em] text-white xl:text-[17px]">
          {step.title}
        </h3>
        <p
          className={`mt-1.5 text-[13px] leading-5 ${
            step.isFinal ? "text-[#CFE8B6]" : "text-[#A8B4C6]"
          }`}
        >
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

function HConnector({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / (STEP_COUNT - 1);
  const end = (index + 1) / (STEP_COUNT - 1);
  const fill = useTransform(progress, [start, end], [0, 1]);
  const arrowOpacity = useTransform(progress, [end - 0.05, end], [0.4, 1]);

  return (
    <div className="flex w-10 shrink-0 items-center justify-center self-center xl:w-12">
      <div className="relative flex w-full items-center">
        <span className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-[#B5FF3D]/18">
          <motion.span
            style={{ scaleX: fill, transformOrigin: "left" }}
            className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#B5FF3D,#7BE021)]"
          />
        </span>
        <motion.span style={{ opacity: arrowOpacity }} className="inline-flex">
          <ArrowRight
            className="ml-0.5 h-4 w-4 shrink-0 text-[#B5FF3D]"
            strokeWidth={2.6}
            aria-hidden
          />
        </motion.span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile roadmap (<lg)                                                       */
/* -------------------------------------------------------------------------- */

function MobileRoadmap() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.65"],
  });
  const filled = useMotionValue(1);
  const progress = reduce ? filled : scrollYProgress;

  return (
    <motion.div ref={ref} variants={stagger} className="relative z-10 lg:hidden">
      <span className="pointer-events-none absolute left-[17px] top-7 bottom-7 w-[2px] rounded-full bg-[#B5FF3D]/18" />
      <motion.span
        style={{ scaleY: progress, transformOrigin: "top" }}
        className="pointer-events-none absolute left-[17px] top-7 bottom-7 w-[2px] rounded-full bg-[linear-gradient(180deg,#B5FF3D,#16A34A)]"
      />

      <div className="space-y-3.5">
        {journeySteps.map((step, index) => (
          <MobileCard
            key={step.number}
            step={step}
            index={index}
            progress={progress}
          />
        ))}
      </div>
    </motion.div>
  );
}

function MobileCard({
  step,
  index,
  progress,
}: {
  step: JourneyStep;
  index: number;
  progress: MotionValue<number>;
}) {
  const reached = useReached(progress, nodeReach(index));

  return (
    <motion.div variants={fadeUp} className="relative flex items-stretch gap-3.5">
      <div className="relative z-10 flex w-9 shrink-0 justify-center pt-3.5">
        <StepNode
          number={step.number}
          isFinal={step.isFinal}
          size="sm"
          progress={progress}
          reach={nodeReach(index)}
          reached={reached}
        />
      </div>

      <div className="group relative flex flex-1 items-center gap-3 overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {step.isFinal && <CelebrationLayer reached={reached} />}

        <IconChip
          Icon={step.icon}
          isFinal={step.isFinal}
          size="sm"
          reached={reached}
        />

        <div className="relative z-10 min-w-0 flex-1">
          {step.tag && (
            <span className="mb-1 inline-block">
              <Tag tag={step.tag} isFinal={step.isFinal} />
            </span>
          )}
          <h3 className="text-[15px] font-bold leading-snug tracking-[-0.01em] text-white">
            {step.title}
          </h3>
          <p
            className={`mt-0.5 text-[12.5px] leading-snug ${
              step.isFinal ? "text-[#CFE8B6]" : "text-[#A8B4C6]"
            }`}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */

function JourneyCTA() {
  return (
    <motion.a
      variants={fadeUp}
      href="#contact"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative mx-auto mt-10 flex h-[58px] w-full max-w-[460px] items-center gap-2.5 overflow-hidden rounded-full bg-[linear-gradient(135deg,#C8FF55_0%,#8FE021_48%,#5FB016_100%)] pl-5 pr-2 text-[#0A2410] shadow-[0_18px_42px_-12px_rgba(120,200,30,0.6)] ring-1 ring-inset ring-black/[0.06] sm:pl-6 sm:gap-3 md:h-[66px]"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/45 to-transparent" />
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] transition-transform duration-700 group-hover:translate-x-[130%]" />

      <Rocket className="relative z-10 h-5 w-5 shrink-0" strokeWidth={2.3} aria-hidden />
      <span className="relative z-10 whitespace-nowrap text-[14.5px] font-extrabold tracking-[-0.01em] sm:text-[16px] md:text-[17px]">
        <span className="sm:hidden">Book a Free Demo</span>
        <span className="hidden sm:inline">
          Start Your Journey — Book a Free Demo
        </span>
      </span>

      <span className="relative z-10 ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2014] text-[#C8FF55] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-colors duration-300 group-hover:bg-[#08311A] md:h-[50px] md:w-[50px]">
        <ArrowRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2.4}
          aria-hidden
        />
      </span>
    </motion.a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reassurance                                                               */
/* -------------------------------------------------------------------------- */

function ReassuranceLine() {
  return (
    <motion.div
      variants={fadeUp}
      className="mx-auto mt-6 flex max-w-[620px] flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[#3A4660]"
    >
      {reassuranceItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-3">
            {index !== 0 && (
              <span className="hidden h-4 w-px bg-[#C9D8B8] sm:block" />
            )}
            <span className="flex items-center gap-2">
              <Icon
                className="h-[18px] w-[18px] text-[#3E8618]"
                strokeWidth={2.1}
                aria-hidden
              />
              <span className="text-[13.5px] font-medium md:text-[14px]">
                {item.label}
              </span>
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}