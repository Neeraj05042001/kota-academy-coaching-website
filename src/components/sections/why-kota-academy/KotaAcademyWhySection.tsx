// // // "use client";

// // // import { AnimatePresence, motion } from "framer-motion";
// // // import {
// // //   ArrowRight,
// // //   BarChart3,
// // //   Bell,
// // //   BookOpenCheck,
// // //   CalendarDays,
// // //   CircleHelp,
// // //   ClipboardCheck,
// // //   GraduationCap,
// // //   LayoutGrid,
// // //   MessageCircle,
// // //   Minus,
// // //   Plus,
// // //   Target,
// // //   Trophy,
// // //   UsersRound,
// // //   type LucideIcon,
// // // } from "lucide-react";
// // // import { useState } from "react";

// // // type Tone = "green" | "blue" | "amber" | "purple" | "rose";

// // // type FeatureItem = {
// // //   title: string;
// // //   description: string;
// // //   icon: LucideIcon;
// // //   tone: Tone;
// // // };

// // // type ProcessStep = {
// // //   number: string;
// // //   title: string;
// // //   description: string;
// // //   icon: LucideIcon;
// // // };

// // // const visibleSupportCards: FeatureItem[] = [
// // //   {
// // //     title: "Daily Doubt Sessions",
// // //     description:
// // //       "Face-to-face doubt support so students do not stay stuck after class.",
// // //     icon: MessageCircle,
// // //     tone: "green",
// // //   },
// // //   {
// // //     title: "NTA-Pattern Tests",
// // //     description:
// // //       "Weekly tests with exam-style questions and detailed performance review.",
// // //     icon: ClipboardCheck,
// // //     tone: "blue",
// // //   },
// // //   {
// // //     title: "Parent Updates",
// // //     description:
// // //       "Regular updates on attendance, test performance, and improvement areas.",
// // //     icon: Bell,
// // //     tone: "amber",
// // //   },
// // // ];

// // // const accordionFeatures: FeatureItem[] = [
// // //   {
// // //     title: "Personalised Study Plan",
// // //     description:
// // //       "Student-wise study direction based on current level, target exam, and weekly progress.",
// // //     icon: Target,
// // //     tone: "blue",
// // //   },
// // //   {
// // //     title: "Subject Expert Faculty",
// // //     description:
// // //       "Experienced subject faculty focused on concept clarity, exam practice, and doubt resolution.",
// // //     icon: GraduationCap,
// // //     tone: "purple",
// // //   },
// // //   {
// // //     title: "Structured Study Material",
// // //     description:
// // //       "Chapter-wise notes, assignments, DPPs, and practice sheets for consistent preparation.",
// // //     icon: BookOpenCheck,
// // //     tone: "amber",
// // //   },
// // //   {
// // //     title: "Scholarship / Admission Tests",
// // //     description:
// // //       "Admission-cum-scholarship tests for eligible students based on performance and course fit.",
// // //     icon: Trophy,
// // //     tone: "rose",
// // //   },
// // // ];

// // // const academicProcessSteps: ProcessStep[] = [
// // //   {
// // //     number: "01",
// // //     title: "Classroom Learning",
// // //     description: "Concept-based learning with expert faculty.",
// // //     icon: UsersRound,
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Weekly Testing",
// // //     description: "Regular tests to measure understanding.",
// // //     icon: ClipboardCheck,
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Doubt Support",
// // //     description: "Instant doubt solving inside and outside class.",
// // //     icon: CircleHelp,
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Parent Updates",
// // //     description: "Timely updates keep parents informed every step.",
// // //     icon: UsersRound,
// // //   },
// // //   {
// // //     number: "05",
// // //     title: "Progress Tracking",
// // //     description: "Continuous tracking to improve performance.",
// // //     icon: BarChart3,
// // //   },
// // // ];

// // // const toneStyles: Record<
// // //   Tone,
// // //   {
// // //     iconWrap: string;
// // //     icon: string;
// // //     border: string;
// // //   }
// // // > = {
// // //   green: {
// // //     iconWrap: "bg-[#ECFFD9] shadow-[0_14px_35px_rgba(94,164,0,0.18)]",
// // //     icon: "text-[#56A000]",
// // //     border: "border-[#B7E87B]",
// // //   },
// // //   blue: {
// // //     iconWrap: "bg-[#EAF7FF] shadow-[0_14px_35px_rgba(0,133,209,0.14)]",
// // //     icon: "text-[#0D8FDB]",
// // //     border: "border-[#BCE7FF]",
// // //   },
// // //   amber: {
// // //     iconWrap: "bg-[#FFF7DF] shadow-[0_14px_35px_rgba(218,145,0,0.14)]",
// // //     icon: "text-[#E4A100]",
// // //     border: "border-[#F5D889]",
// // //   },
// // //   purple: {
// // //     iconWrap: "bg-[#F4EFFF] shadow-[0_14px_35px_rgba(118,72,214,0.14)]",
// // //     icon: "text-[#7349D9]",
// // //     border: "border-[#D9C7FF]",
// // //   },
// // //   rose: {
// // //     iconWrap: "bg-[#FFF0F1] shadow-[0_14px_35px_rgba(232,76,89,0.14)]",
// // //     icon: "text-[#EE4D5E]",
// // //     border: "border-[#FFC4CB]",
// // //   },
// // // };

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 18 },
// // //   visible: { opacity: 1, y: 0 },
// // // };

// // // export default function KotaAcademyWhySection() {
// // //   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

// // //   return (
// // //     <section className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F]">
// // //       {/* Background texture */}
// // //       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(49,101,35,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(49,101,35,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />
// // //       <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B5FF3D]/20 blur-3xl" />
// // //       <div className="pointer-events-none absolute bottom-20 right-[-120px] h-72 w-72 rounded-full bg-[#B5FF3D]/16 blur-3xl" />

// // //       <motion.div
// // //         className="relative z-10 mx-auto max-w-[500px] px-4 sm:px-5"
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, margin: "-80px" }}
// // //         transition={{ staggerChildren: 0.08 }}
// // //       >
// // //         {/* Section header */}
// // //         <motion.div variants={fadeUp} className="text-center">
// // //           <div className="mb-4 flex items-center justify-center gap-3">
// // //             <span className="h-px w-10 bg-[#5FA514]" />
// // //             <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4C9110]">
// // //               Why Kota Academy
// // //             </span>
// // //             <span className="h-px w-10 bg-[#5FA514]" />
// // //           </div>

// // //           <h2 className="relative mx-auto max-w-[430px] text-[38px] font-black leading-[0.98] tracking-[-0.055em] text-[#07142F] sm:text-[44px]">
// // //             Why Kota Academy Works Differently
// // //             <span className="absolute bottom-[-7px] left-1/2 h-[8px] w-[190px] -translate-x-1/2 rounded-full bg-[#8DDE22]/70 blur-[1px]" />
// // //           </h2>

// // //           <p className="mx-auto mt-7 max-w-[430px] text-[15px] leading-7 text-[#34415B]">
// // //             A structured academic system where teaching, testing, doubt solving,
// // //             and parent updates work together to help every student improve with
// // //             clarity.
// // //           </p>
// // //         </motion.div>

// // //         <div className="mt-8 space-y-4">
// // //           {/* Featured card */}
// // //           <motion.article
// // //             variants={fadeUp}
// // //             className="relative overflow-hidden rounded-[30px] border border-[#8FD52E] bg-gradient-to-br from-white via-[#FBFFF4] to-[#F0FFD9] p-5 shadow-[0_24px_70px_rgba(69,116,18,0.12)]"
// // //           >
// // //             <ClassroomIllustration />

// // //             <div className="relative z-10">
// // //               <div className="mb-5 flex items-center gap-3">
// // //                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ED600] to-[#429A0A] text-white shadow-[0_16px_35px_rgba(92,161,10,0.28)]">
// // //                   <UsersRound className="h-7 w-7" strokeWidth={2.3} />
// // //                 </div>

// // //                 <span className="rounded-full bg-[#E9FBD2] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#4F950B]">
// // //                   Our key difference
// // //                 </span>
// // //               </div>

// // //               <h3 className="max-w-[260px] text-[25px] font-black leading-[1.05] tracking-[-0.035em] text-[#07142F]">
// // //                 Small Batches. Personal Attention.
// // //               </h3>

// // //               <p className="mt-4 max-w-[330px] text-[14px] leading-6 text-[#2E3C58]">
// // //                 Max 30 students per batch so teachers can track every student
// // //                 closely, answer doubts, and give personal attention.
// // //               </p>

// // //               <div className="mt-5 grid grid-cols-3 gap-2">
// // //                 <MiniBenefit icon={UsersRound} label="Better attention" />
// // //                 <MiniBenefit icon={MessageCircle} label="Faster doubt solving" />
// // //                 <MiniBenefit icon={BarChart3} label="Stronger monitoring" />
// // //               </div>
// // //             </div>
// // //           </motion.article>

// // //           {/* Visible support cards */}
// // //           <motion.div variants={fadeUp} className="space-y-3">
// // //             {visibleSupportCards.map((item) => (
// // //               <SupportCard key={item.title} item={item} />
// // //             ))}
// // //           </motion.div>

// // //           {/* Accordion */}
// // //           <motion.div
// // //             variants={fadeUp}
// // //             className="overflow-hidden rounded-[24px] border border-[#A8DC6A] bg-[#F8FFF0]/90 shadow-[0_20px_55px_rgba(72,121,18,0.1)]"
// // //           >
// // //             <button
// // //               type="button"
// // //               aria-expanded={isAccordionOpen}
// // //               onClick={() => setIsAccordionOpen((current) => !current)}
// // //               className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
// // //             >
// // //               <span className="flex items-center gap-3">
// // //                 <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E7FAD1] text-[#55A000]">
// // //                   <LayoutGrid className="h-5 w-5" strokeWidth={2.4} />
// // //                 </span>
// // //                 <span className="text-[16px] font-black tracking-[-0.02em] text-[#07142F]">
// // //                   View all student support features
// // //                 </span>
// // //               </span>

// // //               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#4D930B]">
// // //                 {isAccordionOpen ? (
// // //                   <Minus className="h-5 w-5" strokeWidth={2.8} />
// // //                 ) : (
// // //                   <Plus className="h-5 w-5" strokeWidth={2.8} />
// // //                 )}
// // //               </span>
// // //             </button>

// // //             <AnimatePresence initial={false}>
// // //               {isAccordionOpen && (
// // //                 <motion.div
// // //                   initial={{ height: 0, opacity: 0 }}
// // //                   animate={{ height: "auto", opacity: 1 }}
// // //                   exit={{ height: 0, opacity: 0 }}
// // //                   transition={{ duration: 0.28, ease: "easeInOut" }}
// // //                   className="overflow-hidden"
// // //                 >
// // //                   <div className="divide-y divide-[#D9EBC3] border-t border-[#CBE8A6] bg-white/45">
// // //                     {accordionFeatures.map((item) => (
// // //                       <AccordionFeatureRow key={item.title} item={item} />
// // //                     ))}
// // //                   </div>
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </motion.div>

// // //           {/* Academic process */}
// // //           <motion.div
// // //             variants={fadeUp}
// // //             className="rounded-[28px] border border-[#C9E9A2] bg-white/70 p-4 shadow-[0_22px_60px_rgba(67,107,27,0.1)]"
// // //           >
// // //             <div className="mb-4 flex items-center justify-center gap-3">
// // //               <span className="h-px w-8 bg-[#7DBC34]" />
// // //               <h3 className="text-center text-[18px] font-black tracking-[-0.03em] text-[#07142F]">
// // //                 Our Academic Process
// // //               </h3>
// // //               <span className="h-px w-8 bg-[#7DBC34]" />
// // //             </div>

// // //             <div className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// // //               <div className="flex min-w-max snap-x snap-mandatory gap-3 px-1">
// // //                 {academicProcessSteps.map((step, index) => (
// // //                   <ProcessCard
// // //                     key={step.number}
// // //                     step={step}
// // //                     showConnector={index !== academicProcessSteps.length - 1}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* CTA */}
// // //           <motion.a
// // //             variants={fadeUp}
// // //             href="#contact"
// // //             className="group flex h-16 w-full items-center justify-center gap-4 rounded-[24px] bg-gradient-to-r from-[#58A900] via-[#6ED10A] to-[#4EA100] px-6 text-[17px] font-black text-white shadow-[0_22px_45px_rgba(78,154,0,0.28)] transition-transform duration-300 active:scale-[0.98]"
// // //           >
// // //             <CalendarDays className="h-6 w-6" strokeWidth={2.4} />
// // //             <span>Book Free Counselling</span>
// // //             <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
// // //           </motion.a>
// // //         </div>
// // //       </motion.div>
// // //     </section>
// // //   );
// // // }

// // // function SupportCard({ item }: { item: FeatureItem }) {
// // //   const Icon = item.icon;
// // //   const styles = toneStyles[item.tone];

// // //   return (
// // //     <article className="flex items-center gap-4 rounded-[24px] border border-white/80 bg-white/82 p-4 shadow-[0_18px_48px_rgba(7,20,47,0.08)] backdrop-blur-sm">
// // //       <div
// // //         className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
// // //       >
// // //         <Icon className={`h-8 w-8 ${styles.icon}`} strokeWidth={2.35} />
// // //       </div>

// // //       <div>
// // //         <h3 className="text-[16px] font-black tracking-[-0.02em] text-[#07142F]">
// // //           {item.title}
// // //         </h3>
// // //         <p className="mt-1 text-[13px] leading-5 text-[#34415B]">
// // //           {item.description}
// // //         </p>
// // //       </div>
// // //     </article>
// // //   );
// // // }

// // // function AccordionFeatureRow({ item }: { item: FeatureItem }) {
// // //   const Icon = item.icon;
// // //   const styles = toneStyles[item.tone];

// // //   return (
// // //     <div className="flex gap-3 px-4 py-4">
// // //       <div
// // //         className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
// // //       >
// // //         <Icon className={`h-6 w-6 ${styles.icon}`} strokeWidth={2.35} />
// // //       </div>

// // //       <div>
// // //         <h4 className="text-[15px] font-black tracking-[-0.02em] text-[#07142F]">
// // //           {item.title}
// // //         </h4>
// // //         <p className="mt-1 text-[12.5px] leading-5 text-[#3B4861]">
// // //           {item.description}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function MiniBenefit({
// // //   icon: Icon,
// // //   label,
// // // }: {
// // //   icon: LucideIcon;
// // //   label: string;
// // // }) {
// // //   return (
// // //     <div className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-2xl border border-[#D9EDBE] bg-white/70 px-2 py-2 text-center shadow-[0_10px_24px_rgba(86,146,20,0.08)]">
// // //       <Icon className="h-5 w-5 text-[#58A400]" strokeWidth={2.35} />
// // //       <span className="text-[11px] font-bold leading-tight text-[#23314F]">
// // //         {label}
// // //       </span>
// // //     </div>
// // //   );
// // // }

// // // function ProcessCard({
// // //   step,
// // //   showConnector,
// // // }: {
// // //   step: ProcessStep;
// // //   showConnector: boolean;
// // // }) {
// // //   const Icon = step.icon;

// // //   return (
// // //     <article className="relative w-[142px] shrink-0 snap-start rounded-[22px] border border-[#D8EFC0] bg-[#FBFFF5] p-3 text-center">
// // //       {showConnector && (
// // //         <span className="absolute left-[calc(100%+2px)] top-[42px] h-px w-3 border-t border-dashed border-[#79B92C]" />
// // //       )}

// // //       <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#58A900] text-[11px] font-black text-white">
// // //         {step.number}
// // //       </div>

// // //       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#BFE88C] bg-[#F0FFDD] text-[#58A400] shadow-[0_10px_26px_rgba(88,164,0,0.12)]">
// // //         <Icon className="h-7 w-7" strokeWidth={2.25} />
// // //       </div>

// // //       <h4 className="mt-3 text-[13.5px] font-black leading-tight tracking-[-0.02em] text-[#07142F]">
// // //         {step.title}
// // //       </h4>

// // //       <p className="mt-2 text-[11.5px] leading-4 text-[#44516A]">
// // //         {step.description}
// // //       </p>
// // //     </article>
// // //   );
// // // }

// // // // function ClassroomIllustration() {
// // // //   return (
// // // //     <svg
// // // //       className="pointer-events-none absolute right-2 top-8 h-36 w-36 text-[#7DBA32] opacity-[0.22]"
// // // //       viewBox="0 0 160 160"
// // // //       fill="none"
// // // //       aria-hidden="true"
// // // //     >
// // // //       <rect
// // // //         x="70"
// // // //         y="16"
// // // //         width="70"
// // // //         height="52"
// // // //         rx="3"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //       />
// // // //       <path
// // // //         d="M87 50L105 38M105 38L119 48"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <circle cx="112" cy="84" r="9" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M98 122C100 103 123 103 126 122"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <circle cx="53" cy="96" r="9" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M38 136C41 117 65 117 68 136"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <circle cx="88" cy="101" r="9" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M73 140C76 121 100 121 103 140"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <path
// // // //         d="M112 75V44"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <path
// // // //         d="M112 44L98 36"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // // function ClassroomIllustration() {
// // // //   return (
// // // //     <svg
// // // //       className="pointer-events-none absolute right-2 top-5 h-40 w-40 text-[#78B82E] opacity-[0.28] sm:right-5 sm:top-7"
// // // //       viewBox="0 0 180 180"
// // // //       fill="none"
// // // //       aria-hidden="true"
// // // //     >
// // // //       {/* soft illustration background */}
// // // //       <rect
// // // //         x="70"
// // // //         y="20"
// // // //         width="82"
// // // //         height="58"
// // // //         rx="6"
// // // //         fill="currentColor"
// // // //         opacity="0.08"
// // // //       />

// // // //       {/* board */}
// // // //       <rect
// // // //         x="68"
// // // //         y="18"
// // // //         width="86"
// // // //         height="62"
// // // //         rx="5"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //       />
// // // //       <path
// // // //         d="M82 66H140"
// // // //         stroke="currentColor"
// // // //         strokeWidth="3"
// // // //         strokeLinecap="round"
// // // //         opacity="0.55"
// // // //       />
// // // //       <path
// // // //         d="M84 48L102 37L121 50"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />

// // // //       {/* teacher head/body */}
// // // //       <circle cx="126" cy="98" r="9" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M112 142C114 119 139 119 142 142"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <path
// // // //         d="M126 108V128"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />

// // // //       {/* teacher arm / pointer */}
// // // //       <path
// // // //         d="M121 116L98 78"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />
// // // //       <path
// // // //         d="M99 78L94 82"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />

// // // //       {/* student 1 */}
// // // //       <circle cx="48" cy="112" r="10" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M30 158C34 134 62 134 67 158"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />

// // // //       {/* student 2 */}
// // // //       <circle cx="84" cy="118" r="10" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M66 164C70 140 98 140 103 164"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />

// // // //       {/* student 3 */}
// // // //       <circle cx="120" cy="116" r="10" stroke="currentColor" strokeWidth="4" />
// // // //       <path
// // // //         d="M102 162C106 138 134 138 139 162"
// // // //         stroke="currentColor"
// // // //         strokeWidth="4"
// // // //         strokeLinecap="round"
// // // //       />

// // // //       {/* desks / base lines */}
// // // //       <path
// // // //         d="M22 160H145"
// // // //         stroke="currentColor"
// // // //         strokeWidth="3"
// // // //         strokeLinecap="round"
// // // //         opacity="0.35"
// // // //       />
// // // //       <path
// // // //         d="M37 145H59"
// // // //         stroke="currentColor"
// // // //         strokeWidth="3"
// // // //         strokeLinecap="round"
// // // //         opacity="0.35"
// // // //       />
// // // //       <path
// // // //         d="M74 151H96"
// // // //         stroke="currentColor"
// // // //         strokeWidth="3"
// // // //         strokeLinecap="round"
// // // //         opacity="0.35"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // function ClassroomIllustration() {
// // //   return (
// // //     <svg
// // //       className="pointer-events-none absolute right-3 top-6 h-[150px] w-[150px] text-[#B8D98A] opacity-[0.78]"
// // //       viewBox="0 0 180 180"
// // //       fill="none"
// // //       aria-hidden="true"
// // //     >
// // //       <defs>
// // //         <linearGradient id="studentFade" x1="0" y1="0" x2="0" y2="1">
// // //           <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
// // //           <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
// // //         </linearGradient>

// // //         <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
// // //           <feGaussianBlur stdDeviation="6" result="blur" />
// // //           <feMerge>
// // //             <feMergeNode in="blur" />
// // //             <feMergeNode in="SourceGraphic" />
// // //           </feMerge>
// // //         </filter>
// // //       </defs>

// // //       {/* board */}
// // //       <rect
// // //         x="88"
// // //         y="16"
// // //         width="62"
// // //         height="48"
// // //         rx="2"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         opacity="0.9"
// // //       />
// // //       <path
// // //         d="M81 66H156"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //         opacity="0.65"
// // //       />

// // //       {/* teacher */}
// // //       <circle
// // //         cx="128"
// // //         cy="82"
// // //         r="7.5"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //       />
// // //       <path
// // //         d="M121 77C122 71 126 68 131 69C135 69 138 72 139 76"
// // //         stroke="currentColor"
// // //         strokeWidth="2.5"
// // //         strokeLinecap="round"
// // //         opacity="0.85"
// // //       />
// // //       <path
// // //         d="M128 90V112"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //       />
// // //       <path
// // //         d="M128 95C123 97 120 101 118 107"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //       />
// // //       <path
// // //         d="M128 95C134 96 138 100 140 106"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //       />
// // //       <path
// // //         d="M128 112L123 132"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //       />
// // //       <path
// // //         d="M128 112L134 132"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //       />

// // //       {/* pointing arm */}
// // //       <path
// // //         d="M120 99L104 77"
// // //         stroke="currentColor"
// // //         strokeWidth="3"
// // //         strokeLinecap="round"
// // //       />
// // //       <path
// // //         d="M104 77L100 70"
// // //         stroke="currentColor"
// // //         strokeWidth="2.5"
// // //         strokeLinecap="round"
// // //       />

// // //       {/* body torso hint */}
// // //       <path
// // //         d="M122 91C123.5 88 126 86 129 86C132 86 135 88 136 91"
// // //         stroke="currentColor"
// // //         strokeWidth="2.5"
// // //         strokeLinecap="round"
// // //         opacity="0.8"
// // //       />

// // //       {/* student 1 */}
// // //       <g filter="url(#softGlow)">
// // //         <circle
// // //           cx="58"
// // //           cy="110"
// // //           r="8"
// // //           fill="url(#studentFade)"
// // //           stroke="currentColor"
// // //           strokeWidth="2.5"
// // //         />
// // //         <path
// // //           d="M46 137C47.5 124 54 119 58 119C62 119 68.5 124 70 137"
// // //           fill="url(#studentFade)"
// // //           stroke="currentColor"
// // //           strokeWidth="2.5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //         />
// // //       </g>

// // //       {/* student 2 */}
// // //       <g filter="url(#softGlow)">
// // //         <circle
// // //           cx="89"
// // //           cy="116"
// // //           r="8"
// // //           fill="url(#studentFade)"
// // //           stroke="currentColor"
// // //           strokeWidth="2.5"
// // //         />
// // //         <path
// // //           d="M76 145C78 131 85 125 89 125C93 125 100 131 102 145"
// // //           fill="url(#studentFade)"
// // //           stroke="currentColor"
// // //           strokeWidth="2.5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //         />
// // //       </g>

// // //       {/* student 3 */}
// // //       <g filter="url(#softGlow)">
// // //         <circle
// // //           cx="120"
// // //           cy="114"
// // //           r="8"
// // //           fill="url(#studentFade)"
// // //           stroke="currentColor"
// // //           strokeWidth="2.5"
// // //         />
// // //         <path
// // //           d="M107 144C109 129 116 123 120 123C124 123 131 129 133 144"
// // //           fill="url(#studentFade)"
// // //           stroke="currentColor"
// // //           strokeWidth="2.5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //         />
// // //       </g>

// // //       {/* subtle floor/base fade */}
// // //       <ellipse
// // //         cx="93"
// // //         cy="146"
// // //         rx="52"
// // //         ry="10"
// // //         fill="currentColor"
// // //         opacity="0.08"
// // //       />
// // //     </svg>
// // //   );
// // // }

// // "use client";

// // import { AnimatePresence, motion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   BarChart3,
// //   Bell,
// //   BookOpenCheck,
// //   CalendarDays,
// //   CircleHelp,
// //   ClipboardCheck,
// //   GraduationCap,
// //   LayoutGrid,
// //   MessageCircle,
// //   Minus,
// //   Plus,
// //   Target,
// //   Trophy,
// //   UsersRound,
// //   ShieldCheck,
// //   type LucideIcon,
// // } from "lucide-react";
// // import { useState } from "react";

// // type Tone = "green" | "blue" | "amber" | "purple" | "rose";

// // type FeatureItem = {
// //   title: string;
// //   description: string;
// //   icon: LucideIcon;
// //   tone: Tone;
// // };

// // type ProcessStep = {
// //   number: string;
// //   title: string;
// //   description: string;
// //   icon: LucideIcon;
// // };

// // const mobileVisibleSupportCards: FeatureItem[] = [
// //   {
// //     title: "Daily Doubt Sessions",
// //     description:
// //       "Face-to-face doubt support so students do not stay stuck after class.",
// //     icon: MessageCircle,
// //     tone: "green",
// //   },
// //   {
// //     title: "NTA-Pattern Tests",
// //     description:
// //       "Weekly tests with exam-style questions and detailed performance review.",
// //     icon: ClipboardCheck,
// //     tone: "blue",
// //   },
// //   {
// //     title: "Parent Updates",
// //     description:
// //       "Regular updates on attendance, test performance, and improvement areas.",
// //     icon: Bell,
// //     tone: "amber",
// //   },
// // ];

// // const desktopCoreSupportCards: FeatureItem[] = [
// //   {
// //     title: "Daily Doubt Sessions",
// //     description:
// //       "Face-to-face doubt support so students do not stay stuck after class.",
// //     icon: MessageCircle,
// //     tone: "green",
// //   },
// //   {
// //     title: "NTA-Pattern Tests",
// //     description:
// //       "Weekly tests with exam-style questions and detailed performance review.",
// //     icon: ClipboardCheck,
// //     tone: "blue",
// //   },
// //   {
// //     title: "Personalised Study Plan",
// //     description:
// //       "Student-wise study direction based on current level, target exam, and weekly progress.",
// //     icon: Target,
// //     tone: "blue",
// //   },
// //   {
// //     title: "Parent Updates",
// //     description:
// //       "Regular updates on attendance, test performance, and improvement areas.",
// //     icon: Bell,
// //     tone: "amber",
// //   },
// // ];

// // const mobileAccordionFeatures: FeatureItem[] = [
// //   {
// //     title: "Personalised Study Plan",
// //     description:
// //       "Student-wise study direction based on current level, target exam, and weekly progress.",
// //     icon: Target,
// //     tone: "blue",
// //   },
// //   {
// //     title: "Subject Expert Faculty",
// //     description:
// //       "Experienced subject faculty focused on concept clarity, exam practice, and doubt resolution.",
// //     icon: GraduationCap,
// //     tone: "purple",
// //   },
// //   {
// //     title: "Structured Study Material",
// //     description:
// //       "Chapter-wise notes, assignments, DPPs, and practice sheets for consistent preparation.",
// //     icon: BookOpenCheck,
// //     tone: "amber",
// //   },
// //   {
// //     title: "Scholarship / Admission Tests",
// //     description:
// //       "Admission-cum-scholarship tests for eligible students based on performance and course fit.",
// //     icon: Trophy,
// //     tone: "rose",
// //   },
// // ];

// // const desktopSupportingCards: FeatureItem[] = [
// //   {
// //     title: "Subject Expert Faculty",
// //     description:
// //       "Experienced subject faculty focused on concept clarity, exam practice, and doubt resolution.",
// //     icon: GraduationCap,
// //     tone: "purple",
// //   },
// //   {
// //     title: "Structured Study Material",
// //     description:
// //       "Chapter-wise notes, assignments, DPPs, and practice sheets for consistent preparation.",
// //     icon: BookOpenCheck,
// //     tone: "amber",
// //   },
// //   {
// //     title: "Scholarship / Admission Tests",
// //     description:
// //       "Admission-cum-scholarship tests for eligible students based on performance and course fit.",
// //     icon: Trophy,
// //     tone: "rose",
// //   },
// // ];

// // const academicProcessSteps: ProcessStep[] = [
// //   {
// //     number: "01",
// //     title: "Classroom Learning",
// //     description: "Concept-based learning with expert faculty.",
// //     icon: UsersRound,
// //   },
// //   {
// //     number: "02",
// //     title: "Weekly Testing",
// //     description: "Regular tests to measure understanding.",
// //     icon: ClipboardCheck,
// //   },
// //   {
// //     number: "03",
// //     title: "Doubt Support",
// //     description: "Instant doubt solving inside and outside class.",
// //     icon: CircleHelp,
// //   },
// //   {
// //     number: "04",
// //     title: "Parent Updates",
// //     description: "Timely updates keep parents informed every step.",
// //     icon: UsersRound,
// //   },
// //   {
// //     number: "05",
// //     title: "Progress Tracking",
// //     description: "Continuous tracking to improve performance.",
// //     icon: BarChart3,
// //   },
// // ];

// // const toneStyles: Record<
// //   Tone,
// //   {
// //     iconWrap: string;
// //     icon: string;
// //     border: string;
// //   }
// // > = {
// //   green: {
// //     iconWrap: "bg-[#ECFFD9] shadow-[0_14px_35px_rgba(94,164,0,0.18)]",
// //     icon: "text-[#56A000]",
// //     border: "border-[#B7E87B]",
// //   },
// //   blue: {
// //     iconWrap: "bg-[#EAF7FF] shadow-[0_14px_35px_rgba(0,133,209,0.14)]",
// //     icon: "text-[#0D8FDB]",
// //     border: "border-[#BCE7FF]",
// //   },
// //   amber: {
// //     iconWrap: "bg-[#FFF7DF] shadow-[0_14px_35px_rgba(218,145,0,0.14)]",
// //     icon: "text-[#E4A100]",
// //     border: "border-[#F5D889]",
// //   },
// //   purple: {
// //     iconWrap: "bg-[#F4EFFF] shadow-[0_14px_35px_rgba(118,72,214,0.14)]",
// //     icon: "text-[#7349D9]",
// //     border: "border-[#D9C7FF]",
// //   },
// //   rose: {
// //     iconWrap: "bg-[#FFF0F1] shadow-[0_14px_35px_rgba(232,76,89,0.14)]",
// //     icon: "text-[#EE4D5E]",
// //     border: "border-[#FFC4CB]",
// //   },
// // };

// // const trustStripItems = [
// //   {
// //     title: "Proven Improvement",
// //     description: "Consistent academic improvement through regular testing.",
// //     icon: BarChart3,
// //   },
// //   {
// //     title: "Mentorship Beyond Class",
// //     description: "Guidance for academics, discipline, and confidence.",
// //     icon: UsersRound,
// //   },
// //   {
// //     title: "Accountability System",
// //     description: "Attendance, tests, doubts, and progress are tracked.",
// //     icon: Target,
// //   },
// //   {
// //     title: "Trusted by Parents",
// //     description: "Regular updates help parents stay informed.",
// //     icon: ShieldCheck,
// //   },
// // ];

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 18 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // export default function KotaAcademyWhySection() {
// //   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

// //   return (
// //     <section className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24">
// //       {/* Background texture */}
// //       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(49,101,35,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(49,101,35,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />
// //       <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B5FF3D]/20 blur-3xl lg:h-[420px] lg:w-[420px]" />
// //       <div className="pointer-events-none absolute bottom-20 right-[-120px] h-72 w-72 rounded-full bg-[#B5FF3D]/16 blur-3xl lg:h-[420px] lg:w-[420px]" />

// //       <motion.div
// //         className="relative z-10 mx-auto max-w-[500px] px-4 sm:px-5 md:max-w-[820px] md:px-8 lg:max-w-7xl"
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, margin: "-80px" }}
// //         transition={{ staggerChildren: 0.08 }}
// //       >
// //         {/* Section header */}
// //         <motion.div variants={fadeUp} className="text-center">
// //           <div className="mb-4 flex items-center justify-center gap-3">
// //             <span className="h-px w-10 bg-[#5FA514] md:w-14" />
// //             <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4C9110] md:text-xs">
// //               Why Kota Academy
// //             </span>
// //             <span className="h-px w-10 bg-[#5FA514] md:w-14" />
// //           </div>

// //           <h2 className="relative mx-auto max-w-[430px] text-[38px] font-black leading-[0.98] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[760px] md:text-[58px] lg:max-w-[980px] lg:text-[68px]">
// //             Why Kota Academy Works Differently
// //             <span className="absolute bottom-[-7px] left-1/2 h-[8px] w-[190px] -translate-x-1/2 rounded-full bg-[#8DDE22]/70 blur-[1px] md:w-[300px] lg:w-[390px]" />
// //           </h2>

// //           <p className="mx-auto mt-7 max-w-[430px] text-[15px] leading-7 text-[#34415B] md:max-w-[720px] md:text-base lg:max-w-[780px]">
// //             A structured academic system where teaching, testing, doubt solving,
// //             and parent updates work together to help every student improve with
// //             clarity.
// //           </p>
// //         </motion.div>

// //         <div className="mt-8 space-y-5 md:mt-12 md:space-y-5 lg:mt-14 lg:space-y-7">
// //           {/* Main desktop/tablet structure */}
// //           <div className="grid gap-4 md:gap-5 lg:grid-cols-[1.05fr_1.2fr] lg:gap-6">
// //             <FeaturedDifferenceCard />

// //             {/* Tablet/Desktop 2x2 support cards */}
// //             <motion.div
// //               variants={fadeUp}
// //               className="hidden grid-cols-2 gap-4 md:grid lg:gap-5"
// //             >
// //               {desktopCoreSupportCards.map((item) => (
// //                 <DesktopCoreCard key={item.title} item={item} />
// //               ))}
// //             </motion.div>
// //           </div>

// //           {/* Mobile visible support cards */}
// //           <motion.div variants={fadeUp} className="space-y-4 md:hidden">
// //             {mobileVisibleSupportCards.map((item) => (
// //               <MobileSupportCard key={item.title} item={item} />
// //             ))}
// //           </motion.div>

// //           {/* Mobile accordion */}
// //           <MobileFeaturesAccordion
// //             isAccordionOpen={isAccordionOpen}
// //             setIsAccordionOpen={setIsAccordionOpen}
// //           />

// //           {/* Tablet/Desktop supporting credibility cards */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="hidden grid-cols-3 gap-4 md:grid lg:gap-5"
// //           >
// //             {desktopSupportingCards.map((item) => (
// //               <DesktopSupportingCard key={item.title} item={item} />
// //             ))}
// //           </motion.div>
// // <TrustReassuranceStrip/>
// //           {/* <AcademicProcess /> */}

// //           {/* CTA */}
// //           {/* <motion.a
// //             variants={fadeUp}
// //             href="#contact"
// //             className="group mx-auto flex h-16 w-full items-center justify-center gap-4 rounded-[24px] bg-gradient-to-r from-[#58A900] via-[#6ED10A] to-[#4EA100] px-6 text-[17px] font-black text-white shadow-[0_22px_45px_rgba(78,154,0,0.28)] transition-transform duration-300 active:scale-[0.98] md:max-w-[360px] lg:mt-6"
// //           >
// //             <CalendarDays className="h-6 w-6" strokeWidth={2.4} />
// //             <span>Book Free Counselling</span>
// //             <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
// //           </motion.a> */}
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // function FeaturedDifferenceCard() {
// //   return (
// //     <motion.article
// //       variants={fadeUp}
// //       className="relative overflow-hidden rounded-[30px] border border-[#A9E36D] bg-gradient-to-br from-white via-[#FBFFF4] to-[#F0FFD9] p-5 shadow-[0_24px_70px_rgba(69,116,18,0.12)] md:p-7 lg:min-h-[360px] lg:p-8 xl:p-9"
// //     >
// //       <ClassroomIllustration />

// //       <div className="relative z-10">
// //         <div className="mb-5 flex items-center gap-3">
// //           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ED600] to-[#429A0A] text-white shadow-[0_16px_35px_rgba(92,161,10,0.28)] md:h-16 md:w-16">
// //             <UsersRound className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.3} />
// //           </div>

// //           <span className="rounded-full bg-[#E9FBD2] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#4F950B] md:px-4 md:text-[11px]">
// //             Our key difference
// //           </span>
// //         </div>

// //         <h3 className="max-w-[260px] text-[25px] font-black leading-[1.05] tracking-[-0.035em] text-[#07142F] md:max-w-[420px] md:text-[34px] lg:text-[38px]">
// //           Small Batches. Personal Attention.
// //         </h3>

// //         <p className="mt-4 max-w-[330px] text-[14px] leading-6 text-[#2E3C58] md:max-w-[460px] md:text-[15px] md:leading-7">
// //           Max 30 students per batch so teachers can track every student closely,
// //           answer doubts, and give personal attention.
// //         </p>

// //         <div className="mt-5 grid grid-cols-3 gap-2 md:max-w-[560px] md:gap-3 lg:mt-8">
// //           <MiniBenefit icon={UsersRound} label="Better attention" />
// //           <MiniBenefit icon={MessageCircle} label="Faster doubt solving" />
// //           <MiniBenefit icon={BarChart3} label="Stronger monitoring" />
// //         </div>
// //       </div>
// //     </motion.article>
// //   );
// // }

// // function MobileSupportCard({ item }: { item: FeatureItem }) {
// //   const Icon = item.icon;
// //   const styles = toneStyles[item.tone];

// //   return (
// //     <article className="flex items-center gap-4 rounded-[24px] border border-white/80 bg-white/82 p-4 shadow-[0_18px_48px_rgba(7,20,47,0.08)] backdrop-blur-sm">
// //       <div
// //         className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
// //       >
// //         <Icon className={`h-8 w-8 ${styles.icon}`} strokeWidth={2.35} />
// //       </div>

// //       <div>
// //         <h3 className="text-[16px] font-black tracking-[-0.02em] text-[#07142F]">
// //           {item.title}
// //         </h3>
// //         <p className="mt-1 text-[13px] leading-5 text-[#34415B]">
// //           {item.description}
// //         </p>
// //       </div>
// //     </article>
// //   );
// // }

// // // function DesktopCoreCard({ item }: { item: FeatureItem }) {
// // //   const Icon = item.icon;
// // //   const styles = toneStyles[item.tone];

// // //   return (
// // //     <article className="group rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-[0_20px_55px_rgba(7,20,47,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,20,47,0.11)] lg:p-6 ">
// // //       <div
// // //         className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} lg:h-[72px] lg:w-[72px]  `}
// // //       >
// // //         <Icon className={`h-8 w-8 ${styles.icon}`} strokeWidth={2.35} />
// // //       </div>

// // //       <h3 className="text-[18px] font-black leading-tight tracking-[-0.025em] text-[#07142F] lg:text-[20px]">
// // //         {item.title}
// // //       </h3>

// // //       <p className="mt-3 text-[13.5px] leading-6 text-[#34415B] lg:text-[14px]">
// // //         {item.description}
// // //       </p>
// // //     </article>
// // //   );
// // // }

// // function DesktopCoreCard({ item }: { item: FeatureItem }) {
// //   const Icon = item.icon;
// //   const styles = toneStyles[item.tone];

// //   return (
// //     <article className="group relative min-h-[174px] overflow-hidden rounded-[28px] border border-white/80 bg-white/[0.84] p-6 shadow-[0_22px_60px_rgba(7,20,47,0.075)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(7,20,47,0.11)] xl:min-h-[184px] xl:p-7">
// //       <div className="relative z-10 flex items-center gap-4">
// //         <div
// //           className={`flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} xl:h-13 xl:w-13`}
// //         >
// //           <Icon className={`h-6 w-6 ${styles.icon} xl:h-8 xl:w-8`} strokeWidth={2.35} />
// //         </div>

// //         <h3 className="max-w-65 text-xl font-black leading-[1.08] tracking-[-0.035em] text-[#07142F] xl:text-xl">
// //           {item.title}
// //         </h3>
// //       </div>

// //       <p className="relative z-10 mt-5 max-w-[330px] text-[15px] leading-5 text-[#34415B]">
// //         {item.description}
// //       </p>

// //       <Icon
// //         className={`pointer-events-none absolute -bottom-6 -right-4 h-28 w-28 ${styles.icon} opacity-[0.035] transition duration-300 group-hover:opacity-[0.06]`}
// //         strokeWidth={1.8}
// //       />
// //     </article>
// //   );
// // }

// // // function DesktopSupportingCard({ item }: { item: FeatureItem }) {
// // //   const Icon = item.icon;
// // //   const styles = toneStyles[item.tone];

// // //   return (
// // //     <article
// // //       className={`relative overflow-hidden rounded-[26px] border bg-white/70 p-5 shadow-[0_18px_50px_rgba(7,20,47,0.07)] backdrop-blur-sm ${styles.border} lg:flex lg:min-h-[180px] lg:items-center lg:gap-5 lg:p-6`}
// // //     >
// // //       <div
// // //         className={`mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} lg:mb-0 lg:h-16 lg:w-16`}
// // //       >
// // //         <Icon className={`h-7 w-7 ${styles.icon}`} strokeWidth={2.35} />
// // //       </div>

// // //       <div>
// // //         <h3 className="text-[17px] font-black leading-tight tracking-[-0.025em] text-[#07142F] lg:text-[19px]">
// // //           {item.title}
// // //         </h3>

// // //         <p className="mt-2 text-[13px] leading-6 text-[#34415B] lg:text-[14px]">
// // //           {item.description}
// // //         </p>
// // //       </div>
// // //     </article>
// // //   );
// // // }

// // function DesktopSupportingCard({ item }: { item: FeatureItem }) {
// //   const Icon = item.icon;
// //   const styles = toneStyles[item.tone];

// //   return (
// //     <article
// //       className={`group relative flex min-h-[182px] items-center gap-6 overflow-hidden rounded-[26px] border bg-white/[0.72] p-6 shadow-[0_18px_50px_rgba(7,20,47,0.065)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.82] hover:shadow-[0_26px_70px_rgba(7,20,47,0.09)] ${styles.border}`}
// //     >
// //       <div
// //         className={`relative z-10 flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
// //       >
// //         <Icon className={`h-9 w-9 ${styles.icon}`} strokeWidth={2.25} />
// //       </div>

// //       <div className="relative z-10 max-w-[300px]">
// //         <h3 className="text-[20px] font-black leading-[1.08] tracking-[-0.035em] text-[#07142F]">
// //           {item.title}
// //         </h3>

// //         <p className="mt-3 text-[15px] leading-7 text-[#34415B]">
// //           {item.description}
// //         </p>
// //       </div>

// //       <SupportingCardIllustration title={item.title} tone={item.tone} />

// //       <div className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-gradient-to-l from-white/45 to-transparent" />
// //     </article>
// //   );
// // }

// // function SupportingCardIllustration({
// //   title,
// //   tone,
// // }: {
// //   title: string;
// //   tone: Tone;
// // }) {
// //   const toneMap: Record<Tone, string> = {
// //     green: "text-[#8CC63F]",
// //     blue: "text-[#7CC6F4]",
// //     amber: "text-[#E7C35B]",
// //     purple: "text-[#B49AF2]",
// //     rose: "text-[#F1A4AD]",
// //   };

// //   const toneClass = toneMap[tone];

// //   if (title === "Subject Expert Faculty") {
// //     return (
// //       <svg
// //         className={`pointer-events-none absolute bottom-0 right-4 h-[92px] w-[92px] ${toneClass} opacity-[0.18] transition duration-300 group-hover:opacity-[0.24]`}
// //         viewBox="0 0 120 120"
// //         fill="none"
// //         aria-hidden="true"
// //       >
// //         <circle cx="42" cy="38" r="10" stroke="currentColor" strokeWidth="2.5" />
// //         <path
// //           d="M27 76C29 60 39 54 42 54C45 54 55 60 57 76"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //         />

// //         <circle cx="77" cy="34" r="8.5" stroke="currentColor" strokeWidth="2.5" />
// //         <path
// //           d="M65 68C67 55 75 50 77 50C80 50 88 55 90 68"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //         />

// //         <path
// //           d="M16 92H99"
// //           stroke="currentColor"
// //           strokeWidth="2"
// //           strokeLinecap="round"
// //           opacity="0.35"
// //         />
// //       </svg>
// //     );
// //   }

// //   if (title === "Structured Study Material") {
// //     return (
// //       <svg
// //         className={`pointer-events-none absolute bottom-2 right-4 h-[96px] w-[96px] ${toneClass} opacity-[0.18] transition duration-300 group-hover:opacity-[0.24]`}
// //         viewBox="0 0 120 120"
// //         fill="none"
// //         aria-hidden="true"
// //       >
// //         <path
// //           d="M24 32C24 28 27 25 31 25H52C58 25 63 28 67 34V88C63 82 58 79 52 79H31C27 79 24 76 24 72V32Z"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinejoin="round"
// //         />
// //         <path
// //           d="M96 32C96 28 93 25 89 25H68C62 25 57 28 53 34V88C57 82 62 79 68 79H89C93 79 96 76 96 72V32Z"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinejoin="round"
// //         />
// //         <path
// //           d="M34 40H48"
// //           stroke="currentColor"
// //           strokeWidth="2.2"
// //           strokeLinecap="round"
// //           opacity="0.55"
// //         />
// //         <path
// //           d="M72 40H86"
// //           stroke="currentColor"
// //           strokeWidth="2.2"
// //           strokeLinecap="round"
// //           opacity="0.55"
// //         />
// //         <path
// //           d="M34 50H48"
// //           stroke="currentColor"
// //           strokeWidth="2.2"
// //           strokeLinecap="round"
// //           opacity="0.55"
// //         />
// //       </svg>
// //     );
// //   }

// //   if (title === "Scholarship / Admission Tests") {
// //     return (
// //       <svg
// //         className={`pointer-events-none absolute bottom-2 right-4 h-[100px] w-[100px] ${toneClass} opacity-[0.18] transition duration-300 group-hover:opacity-[0.24]`}
// //         viewBox="0 0 120 120"
// //         fill="none"
// //         aria-hidden="true"
// //       >
// //         <path
// //           d="M40 28H80V39C80 50 72 59 60 63C48 59 40 50 40 39V28Z"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinejoin="round"
// //         />
// //         <path
// //           d="M40 34H28C28 46 34 53 45 54"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         />
// //         <path
// //           d="M80 34H92C92 46 86 53 75 54"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         />
// //         <path
// //           d="M60 63V77"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //         />
// //         <path
// //           d="M48 92C49 84 55 79 60 79C65 79 71 84 72 92"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //         />
// //         <path
// //           d="M41 92H79"
// //           stroke="currentColor"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //         />
// //       </svg>
// //     );
// //   }

// //   return null;
// // }

// // function MobileFeaturesAccordion({
// //   isAccordionOpen,
// //   setIsAccordionOpen,
// // }: {
// //   isAccordionOpen: boolean;
// //   setIsAccordionOpen: React.Dispatch<React.SetStateAction<boolean>>;
// // }) {
// //   return (
// //     <motion.div
// //       variants={fadeUp}
// //       className="overflow-hidden rounded-[24px] border border-[#B8E982] bg-[#F8FFF0]/90 shadow-[0_20px_55px_rgba(72,121,18,0.1)] md:hidden"
// //     >
// //       <button
// //         type="button"
// //         aria-expanded={isAccordionOpen}
// //         onClick={() => setIsAccordionOpen((current) => !current)}
// //         className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
// //       >
// //         <span className="flex items-center gap-3">
// //           <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E7FAD1] text-[#55A000]">
// //             <LayoutGrid className="h-5 w-5" strokeWidth={2.4} />
// //           </span>
// //           <span className="text-[16px] font-black tracking-[-0.02em] text-[#07142F]">
// //             View all student support features
// //           </span>
// //         </span>

// //         <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#4D930B]">
// //           {isAccordionOpen ? (
// //             <Minus className="h-5 w-5" strokeWidth={2.8} />
// //           ) : (
// //             <Plus className="h-5 w-5" strokeWidth={2.8} />
// //           )}
// //         </span>
// //       </button>

// //       <AnimatePresence initial={false}>
// //         {isAccordionOpen && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.28, ease: "easeInOut" }}
// //             className="overflow-hidden"
// //           >
// //             <div className="divide-y divide-[#D9EBC3] border-t border-[#CBE8A6] bg-white/45">
// //               {mobileAccordionFeatures.map((item) => (
// //                 <AccordionFeatureRow key={item.title} item={item} />
// //               ))}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // }

// // function AccordionFeatureRow({ item }: { item: FeatureItem }) {
// //   const Icon = item.icon;
// //   const styles = toneStyles[item.tone];

// //   return (
// //     <div className="flex gap-3 px-4 py-4">
// //       <div
// //         className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
// //       >
// //         <Icon className={`h-6 w-6 ${styles.icon}`} strokeWidth={2.35} />
// //       </div>

// //       <div>
// //         <h4 className="text-[15px] font-black tracking-[-0.02em] text-[#07142F]">
// //           {item.title}
// //         </h4>
// //         <p className="mt-1 text-[12.5px] leading-5 text-[#3B4861]">
// //           {item.description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // function AcademicProcess() {
// //   return (
// //     <motion.div variants={fadeUp}>
// //       {/* Mobile horizontal scroll process */}
// //       <div className="rounded-[28px] border border-[#C9E9A2] bg-gradient-to-b from-white/85 to-[#F5FFE8]/85 p-4 shadow-[0_22px_60px_rgba(67,107,27,0.1)] md:hidden">
// //         <div className="mb-4 flex items-center justify-center gap-3">
// //           <span className="h-px w-8 bg-[#7DBC34]" />
// //           <h3 className="text-center text-[18px] font-black tracking-[-0.03em] text-[#07142F]">
// //             Our Academic Process
// //           </h3>
// //           <span className="h-px w-8 bg-[#7DBC34]" />
// //         </div>

// //         <div className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //           <div className="flex min-w-max snap-x snap-mandatory gap-4 px-1">
// //             {academicProcessSteps.map((step, index) => (
// //               <MobileProcessCard
// //                 key={step.number}
// //                 step={step}
// //                 showConnector={index !== academicProcessSteps.length - 1}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Tablet/Desktop full process strip */}
// //       <div className="hidden rounded-[30px] border border-[#C9E9A2] bg-gradient-to-b from-white/90 to-[#F5FFE8]/85 p-6 shadow-[0_24px_70px_rgba(67,107,27,0.1)] md:block lg:p-7">
// //         <div className="flex items-center justify-center gap-3">
// //           <span className="h-px w-12 bg-[#7DBC34]" />
// //           <h3 className="text-center text-[22px] font-black tracking-[-0.035em] text-[#07142F] lg:text-[26px]">
// //             Our Academic Process
// //           </h3>
// //           <span className="h-px w-12 bg-[#7DBC34]" />
// //         </div>

// //         <div className="relative mt-8 grid grid-cols-5 gap-3 lg:gap-5">
// //           <div className="absolute left-[9%] right-[9%] top-[52px] h-[2px] overflow-hidden rounded-full bg-[#DCEFC6]">
// //             <motion.span
// //               className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#60B50D] to-transparent"
// //               animate={{ x: ["-120%", "340%"] }}
// //               transition={{
// //                 duration: 3.2,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //             />
// //           </div>

// //           {academicProcessSteps.map((step) => (
// //             <DesktopProcessStep key={step.number} step={step} />
// //           ))}
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // function MobileProcessCard({
// //   step,
// //   showConnector,
// // }: {
// //   step: ProcessStep;
// //   showConnector: boolean;
// // }) {
// //   const Icon = step.icon;

// //   return (
// //     <article className="relative w-[146px] shrink-0 snap-start rounded-[24px] border border-[#D8EFC0] bg-gradient-to-b from-white to-[#F7FFF0] p-3 text-center shadow-[0_14px_35px_rgba(65,112,18,0.08)]">
// //       {showConnector && (
// //         <span className="absolute left-[calc(100%+2px)] top-[59px] z-10 h-px w-4 border-t border-dashed border-[#69B51F]">
// //           <motion.span
// //             className="absolute -top-[3px] left-0 h-[6px] w-[6px] rounded-full bg-[#62B80F] shadow-[0_0_12px_rgba(98,184,15,0.8)]"
// //             animate={{ x: [0, 14, 0], opacity: [0.25, 1, 0.25] }}
// //             transition={{
// //               duration: 1.8,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             }}
// //           />
// //         </span>
// //       )}

// //       <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#58A900] text-[11px] font-black text-white shadow-[0_8px_18px_rgba(88,169,0,0.24)]">
// //         {step.number}
// //       </div>

// //       <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#BFE88C] bg-[#F0FFDD] text-[#58A400] shadow-[0_12px_30px_rgba(88,164,0,0.14)]">
// //         <span className="absolute inset-[-5px] rounded-full border border-[#BFE88C]/60" />
// //         <Icon className="h-8 w-8" strokeWidth={2.25} />
// //       </div>

// //       <h4 className="mt-3 text-[13.5px] font-black leading-tight tracking-[-0.02em] text-[#07142F]">
// //         {step.title}
// //       </h4>

// //       <p className="mt-2 text-[11.5px] leading-4 text-[#44516A]">
// //         {step.description}
// //       </p>
// //     </article>
// //   );
// // }

// // function DesktopProcessStep({ step }: { step: ProcessStep }) {
// //   const Icon = step.icon;

// //   return (
// //     <article className="relative z-10 text-center">
// //       <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#58A900] text-[12px] font-black text-white shadow-[0_8px_18px_rgba(88,169,0,0.24)]">
// //         {step.number}
// //       </div>

// //       <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#BFE88C] bg-[#F0FFDD] text-[#58A400] shadow-[0_14px_34px_rgba(88,164,0,0.14)] lg:h-20 lg:w-20">
// //         <Icon className="h-8 w-8 lg:h-9 lg:w-9" strokeWidth={2.25} />
// //       </div>

// //       <h4 className="mx-auto mt-4 max-w-[130px] text-[14px] font-black leading-tight tracking-[-0.02em] text-[#07142F] lg:text-[16px]">
// //         {step.title}
// //       </h4>

// //       <p className="mx-auto mt-2 max-w-[150px] text-[11.5px] leading-5 text-[#44516A] lg:text-[12.5px]">
// //         {step.description}
// //       </p>
// //     </article>
// //   );
// // }

// // function MiniBenefit({
// //   icon: Icon,
// //   label,
// // }: {
// //   icon: LucideIcon;
// //   label: string;
// // }) {
// //   return (
// //     <div className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-2xl border border-[#D9EDBE] bg-white/70 px-2 py-2 text-center shadow-[0_10px_24px_rgba(86,146,20,0.08)] md:min-h-[66px] md:flex-row md:gap-3 md:text-left">
// //       <Icon className="h-5 w-5 shrink-0 text-[#58A400]" strokeWidth={2.35} />
// //       <span className="text-[11px] font-bold leading-tight text-[#23314F] md:text-[13px]">
// //         {label}
// //       </span>
// //     </div>
// //   );
// // }

// // /**
// //  * Keeping the previous illustration style.
// //  * We are not using the newer attempted version.
// //  */
// // function ClassroomIllustration() {
// //   return (
// //     <svg
// //       className="pointer-events-none absolute right-2 top-8 h-36 w-36 text-[#7DBA32] opacity-[0.22] md:h-48 md:w-48 lg:right-5 lg:top-10 lg:h-56 lg:w-56"
// //       viewBox="0 0 160 160"
// //       fill="none"
// //       aria-hidden="true"
// //     >
// //       <rect
// //         x="70"
// //         y="16"
// //         width="70"
// //         height="52"
// //         rx="3"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //       />
// //       <path
// //         d="M87 50L105 38M105 38L119 48"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //         strokeLinecap="round"
// //       />
// //       <circle cx="112" cy="84" r="9" stroke="currentColor" strokeWidth="4" />
// //       <path
// //         d="M98 122C100 103 123 103 126 122"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //         strokeLinecap="round"
// //       />
// //       <circle cx="53" cy="96" r="9" stroke="currentColor" strokeWidth="4" />
// //       <path
// //         d="M38 136C41 117 65 117 68 136"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //         strokeLinecap="round"
// //       />
// //       <circle cx="88" cy="101" r="9" stroke="currentColor" strokeWidth="4" />
// //       <path
// //         d="M73 140C76 121 100 121 103 140"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M112 75V44"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M112 44L98 36"
// //         stroke="currentColor"
// //         strokeWidth="4"
// //         strokeLinecap="round"
// //       />
// //     </svg>
// //   );
// // }

// // function TrustReassuranceStrip() {
// //   return (
// //     <motion.div
// //       variants={fadeUp}
// //       className="relative overflow-hidden rounded-[28px] border border-[#D7EDBE] bg-white/[0.72] p-3 shadow-[0_20px_60px_rgba(67,107,27,0.1)] backdrop-blur-sm md:rounded-[30px] md:p-4 lg:p-5"
// //     >
// //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F4FFE6]/70 via-white/70 to-[#F4FFE6]/70" />

// //       <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-3xl" />

// //       {/* Mobile: compact reassurance panel */}
// //       <MobileTrustSummary />

// //       {/* Tablet/Desktop: horizontal reassurance strip */}
// //       <div className="relative z-10 hidden md:grid md:grid-cols-4 md:items-center">
// //         {trustStripItems.map((item, index) => (
// //           <div key={item.title} className="relative">
// //             <TrustStripItem item={item} />

// //             {index !== trustStripItems.length - 1 && (
// //               <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#DDECCB] lg:block">
// //                 <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED600]" />
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </motion.div>
// //   );
// // }

// // function MobileTrustSummary() {
// //   return (
// //     <div className="relative z-10 md:hidden">
// //       <div className="flex items-start gap-3 rounded-[24px] border border-[#DCEEC8] bg-white/68 p-4 shadow-[0_14px_36px_rgba(67,107,27,0.08)]">
// //         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D6EDB8] bg-[#F0FFDD] text-[#58A400] shadow-[0_10px_24px_rgba(88,164,0,0.12)]">
// //           <ShieldCheck className="h-[23px] w-[23px]" strokeWidth={2.35} />
// //         </div>

// //         <div className="min-w-0">
// //           <h3 className="text-[15px] font-black leading-tight tracking-[-0.025em] text-[#07142F]">
// //             Built for consistent improvement
// //           </h3>

// //           <p className="mt-1.5 text-[12px] leading-5 text-[#44516A]">
// //             Testing, mentorship, accountability, and parent updates work
// //             together to support every student.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="mt-3 grid grid-cols-2 gap-2.5">
// //         {trustStripItems.map((item) => (
// //           <MobileTrustChip key={item.title} item={item} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function MobileTrustChip({
// //   item,
// // }: {
// //   item: {
// //     title: string;
// //     description: string;
// //     icon: LucideIcon;
// //   };
// // }) {
// //   const Icon = item.icon;

// //   return (
// //     <div className="flex min-h-[48px] items-center gap-2 rounded-2xl border border-[#DCEEC8] bg-white/60 px-3 py-2 shadow-[0_10px_24px_rgba(67,107,27,0.06)]">
// //       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F0FFDD] text-[#58A400]">
// //         <Icon className="h-[17px] w-[17px]" strokeWidth={2.35} />
// //       </div>

// //       <span className="text-[11.5px] font-black leading-tight tracking-[-0.02em] text-[#07142F]">
// //         {item.title}
// //       </span>
// //     </div>
// //   );
// // }

// // function TrustStripItem({
// //   item,
// // }: {
// //   item: {
// //     title: string;
// //     description: string;
// //     icon: LucideIcon;
// //   };
// // }) {
// //   const Icon = item.icon;

// //   return (
// //     <div className="flex items-center gap-4 px-4 py-3 lg:px-5">
// //       <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-[#D6EDB8] bg-[#F0FFDD] text-[#58A400] shadow-[0_12px_28px_rgba(88,164,0,0.12)]">
// //         <Icon className="h-6 w-6" strokeWidth={2.3} />
// //       </div>

// //       <div>
// //         <h3 className="text-[15px] font-black leading-tight tracking-[-0.025em] text-[#07142F] lg:text-[16px]">
// //           {item.title}
// //         </h3>

// //         <p className="mt-1.5 max-w-[220px] text-[12.5px] leading-5 text-[#44516A] lg:text-[13px]">
// //           {item.description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // // function TrustReassuranceStrip() {
// // //   return (
// // //     <motion.div
// // //       variants={fadeUp}
// // //       className="relative overflow-hidden rounded-[28px] border border-[#D7EDBE] bg-white/[0.72] p-3 shadow-[0_20px_60px_rgba(67,107,27,0.1)] backdrop-blur-sm md:rounded-[30px] md:p-4 lg:p-5"
// // //     >
// // //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F4FFE6]/70 via-white/70 to-[#F4FFE6]/70" />

// // //       <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-3xl" />

// // //       {/* Mobile: compact 2x2 grid */}
// // //       <div className="relative z-10 grid grid-cols-2 gap-3 md:hidden">
// // //         {trustStripItems.map((item) => (
// // //           <TrustMiniCard key={item.title} item={item} />
// // //         ))}
// // //       </div>

// // //       {/* Tablet/Desktop: horizontal reassurance strip */}
// // //       <div className="relative z-10 hidden md:grid md:grid-cols-4 md:items-center">
// // //         {trustStripItems.map((item, index) => (
// // //           <div key={item.title} className="relative">
// // //             <TrustStripItem item={item} />

// // //             {index !== trustStripItems.length - 1 && (
// // //               <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#DDECCB] lg:block">
// // //                 <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED600]" />
// // //               </div>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }

// // // function TrustStripItem({
// // //   item,
// // // }: {
// // //   item: {
// // //     title: string;
// // //     description: string;
// // //     icon: LucideIcon;
// // //   };
// // // }) {
// // //   const Icon = item.icon;

// // //   return (
// // //     <div className="flex items-center gap-4 px-4 py-3 lg:px-5">
// // //       <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-[#D6EDB8] bg-[#F0FFDD] text-[#58A400] shadow-[0_12px_28px_rgba(88,164,0,0.12)]">
// // //         <Icon className="h-6 w-6" strokeWidth={2.3} />
// // //       </div>

// // //       <div>
// // //         <h3 className="text-[15px] font-black leading-tight tracking-[-0.025em] text-[#07142F] lg:text-[16px]">
// // //           {item.title}
// // //         </h3>

// // //         <p className="mt-1.5 max-w-[220px] text-[12.5px] leading-5 text-[#44516A] lg:text-[13px]">
// // //           {item.description}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function TrustMiniCard({
// // //   item,
// // // }: {
// // //   item: {
// // //     title: string;
// // //     description: string;
// // //     icon: LucideIcon;
// // //   };
// // // }) {
// // //   const Icon = item.icon;

// // //   return (
// // //     <div className="rounded-[22px] border border-[#DCEEC8] bg-white/72 p-4 shadow-[0_14px_36px_rgba(67,107,27,0.08)]">
// // //       <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D6EDB8] bg-[#F0FFDD] text-[#58A400] shadow-[0_10px_24px_rgba(88,164,0,0.12)]">
// // //         <Icon className="h-5.5 w-5.5" strokeWidth={2.3} />
// // //       </div>

// // //       <h3 className="text-[13.5px] font-black leading-tight tracking-[-0.025em] text-[#07142F]">
// // //         {item.title}
// // //       </h3>

// // //       <p className="mt-1.5 text-[11.5px] leading-4 text-[#44516A]">
// // //         {item.description}
// // //       </p>
// // //     </div>
// // //   );
// // // }

// "use client";

// import { AnimatePresence, motion, type Variants } from "framer-motion";
// import {
//   BarChart3,
//   Bell,
//   BookOpenCheck,
//   ClipboardCheck,
//   GraduationCap,
//   LayoutGrid,
//   MessageCircle,
//   Minus,
//   Plus,
//   ShieldCheck,
//   Target,
//   Trophy,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";
// import { type Dispatch, type SetStateAction, useState } from "react";

// type Tone = "green" | "blue" | "amber" | "purple" | "rose";

// type FeatureItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   tone: Tone;
// };

// type TrustStripItemData = {
//   title: string;
//   mobileTitle?: string;
//   description: string;
//   icon: LucideIcon;
// };

// const mobileVisibleSupportCards: FeatureItem[] = [
//   {
//     title: "Daily Doubt Sessions",
//     description:
//       "Face-to-face doubt support so students do not stay stuck after class.",
//     icon: MessageCircle,
//     tone: "green",
//   },
//   {
//     title: "NTA-Pattern Tests",
//     description:
//       "Weekly tests with exam-style questions and detailed performance review.",
//     icon: ClipboardCheck,
//     tone: "blue",
//   },
//   {
//     title: "Parent Updates",
//     description:
//       "Regular updates on attendance, test performance, and improvement areas.",
//     icon: Bell,
//     tone: "amber",
//   },
// ];

// const desktopCoreSupportCards: FeatureItem[] = [
//   {
//     title: "Daily Doubt Sessions",
//     description:
//       "Face-to-face doubt support so students do not stay stuck after class.",
//     icon: MessageCircle,
//     tone: "green",
//   },
//   {
//     title: "NTA-Pattern Tests",
//     description:
//       "Weekly tests with exam-style questions and detailed performance review.",
//     icon: ClipboardCheck,
//     tone: "blue",
//   },
//   {
//     title: "Personalised Study Plan",
//     description:
//       "Student-wise study direction based on current level, target exam, and weekly progress.",
//     icon: Target,
//     tone: "blue",
//   },
//   {
//     title: "Parent Updates",
//     description:
//       "Regular updates on attendance, test performance, and improvement areas.",
//     icon: Bell,
//     tone: "amber",
//   },
// ];

// const mobileAccordionFeatures: FeatureItem[] = [
//   {
//     title: "Personalised Study Plan",
//     description:
//       "Student-wise study direction based on current level, target exam, and weekly progress.",
//     icon: Target,
//     tone: "blue",
//   },
//   {
//     title: "Subject Expert Faculty",
//     description:
//       "Experienced subject faculty focused on concept clarity, exam practice, and doubt resolution.",
//     icon: GraduationCap,
//     tone: "purple",
//   },
//   {
//     title: "Structured Study Material",
//     description:
//       "Chapter-wise notes, assignments, DPPs, and practice sheets for consistent preparation.",
//     icon: BookOpenCheck,
//     tone: "amber",
//   },
//   {
//     title: "Scholarship / Admission Tests",
//     description:
//       "Admission-cum-scholarship tests for eligible students based on performance and course fit.",
//     icon: Trophy,
//     tone: "rose",
//   },
// ];

// const desktopSupportingCards: FeatureItem[] = [
//   {
//     title: "Subject Expert Faculty",
//     description:
//       "Experienced subject faculty focused on concept clarity, exam practice, and doubt resolution.",
//     icon: GraduationCap,
//     tone: "purple",
//   },
//   {
//     title: "Structured Study Material",
//     description:
//       "Chapter-wise notes, assignments, DPPs, and practice sheets for consistent preparation.",
//     icon: BookOpenCheck,
//     tone: "amber",
//   },
//   {
//     title: "Scholarship / Admission Tests",
//     description:
//       "Admission-cum-scholarship tests for eligible students based on performance and course fit.",
//     icon: Trophy,
//     tone: "rose",
//   },
// ];

// const trustStripItems: TrustStripItemData[] = [
//   {
//     title: "Proven Improvement",
//     mobileTitle: "Proven Growth",
//     description: "Consistent academic improvement through regular testing.",
//     icon: BarChart3,
//   },
//   {
//     title: "Mentorship Beyond Class",
//     mobileTitle: "Mentorship",
//     description: "Guidance for academics, discipline, and confidence.",
//     icon: UsersRound,
//   },
//   {
//     title: "Accountability System",
//     mobileTitle: "Accountability",
//     description: "Attendance, tests, doubts, and progress are tracked.",
//     icon: Target,
//   },
//   {
//     title: "Trusted by Parents",
//     mobileTitle: "Parent Trust",
//     description: "Regular updates help parents stay informed.",
//     icon: ShieldCheck,
//   },
// ];

// const toneStyles: Record<
//   Tone,
//   {
//     iconWrap: string;
//     icon: string;
//     border: string;
//   }
// > = {
//   green: {
//     iconWrap: "bg-[#ECFFD9] shadow-[0_14px_35px_rgba(94,164,0,0.18)]",
//     icon: "text-[#56A000]",
//     border: "border-[#B7E87B]",
//   },
//   blue: {
//     iconWrap: "bg-[#EAF7FF] shadow-[0_14px_35px_rgba(0,133,209,0.14)]",
//     icon: "text-[#0D8FDB]",
//     border: "border-[#BCE7FF]",
//   },
//   amber: {
//     iconWrap: "bg-[#FFF7DF] shadow-[0_14px_35px_rgba(218,145,0,0.14)]",
//     icon: "text-[#E4A100]",
//     border: "border-[#F5D889]",
//   },
//   purple: {
//     iconWrap: "bg-[#F4EFFF] shadow-[0_14px_35px_rgba(118,72,214,0.14)]",
//     icon: "text-[#7349D9]",
//     border: "border-[#D9C7FF]",
//   },
//   rose: {
//     iconWrap: "bg-[#FFF0F1] shadow-[0_14px_35px_rgba(232,76,89,0.14)]",
//     icon: "text-[#EE4D5E]",
//     border: "border-[#FFC4CB]",
//   },
// };

// const fadeUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 18,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function KotaAcademyWhySection() {
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

//   return (
//     <section className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24">
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(49,101,35,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(49,101,35,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />

//       <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B5FF3D]/20 blur-3xl lg:h-[420px] lg:w-[420px]" />

//       <div className="pointer-events-none absolute bottom-20 right-[-120px] h-72 w-72 rounded-full bg-[#B5FF3D]/16 blur-3xl lg:h-[420px] lg:w-[420px]" />

//       <motion.div
//         className="relative z-10 mx-auto max-w-[500px] px-4 sm:px-5 md:max-w-[820px] md:px-8 lg:max-w-[1180px] lg:px-10 xl:max-w-[1420px]"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-80px" }}
//         transition={{ staggerChildren: 0.08 }}
//       >
//         <SectionHeader />

//         <div className="mt-8 space-y-5 md:mt-12 md:space-y-5 lg:mt-14 lg:space-y-7">
//           <div className="grid gap-4 md:gap-5 lg:grid-cols-[0.86fr_1fr] lg:gap-7 xl:gap-8">
//             <FeaturedDifferenceCard />

//             <motion.div
//               variants={fadeUp}
//               className="hidden grid-cols-2 gap-4 md:grid lg:gap-5"
//             >
//               {desktopCoreSupportCards.map((item) => (
//                 <DesktopCoreCard key={item.title} item={item} />
//               ))}
//             </motion.div>
//           </div>

//           <motion.div variants={fadeUp} className="space-y-4 md:hidden">
//             {mobileVisibleSupportCards.map((item) => (
//               <MobileSupportCard key={item.title} item={item} />
//             ))}
//           </motion.div>

//           <MobileFeaturesAccordion
//             isAccordionOpen={isAccordionOpen}
//             setIsAccordionOpen={setIsAccordionOpen}
//           />

//           <motion.div
//             variants={fadeUp}
//             className="hidden grid-cols-3 gap-4 md:grid lg:gap-5"
//           >
//             {desktopSupportingCards.map((item) => (
//               <DesktopSupportingCard key={item.title} item={item} />
//             ))}
//           </motion.div>

//           <TrustReassuranceStrip />
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// function SectionHeader() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-4 flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-[#5FA514] md:w-14" />
//         <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4C9110] md:text-xs">
//           Why Kota Academy
//         </span>
//         <span className="h-px w-10 bg-[#5FA514] md:w-14" />
//       </div>

//       <h2 className="relative mx-auto max-w-[430px] text-[38px] font-black leading-[0.98] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[760px] md:text-[58px] lg:max-w-[1080px] lg:text-[64px] xl:max-w-[1280px] xl:text-[74px]">
//         Why Kota Academy Works Differently
//         <span className="absolute bottom-[-7px] left-1/2 h-[8px] w-[190px] -translate-x-1/2 rounded-full bg-[#8DDE22]/70 blur-[1px] md:w-[300px] lg:w-[390px]" />
//       </h2>

//       <p className="mx-auto mt-7 max-w-[430px] text-[15px] leading-7 text-[#34415B] md:max-w-[720px] md:text-base lg:max-w-[780px]">
//         A structured academic system where teaching, testing, doubt solving, and
//         parent updates work together to help every student improve with clarity.
//       </p>
//     </motion.div>
//   );
// }

// function FeaturedDifferenceCard() {
//   return (
//     <motion.article
//       variants={fadeUp}
//       className="relative overflow-hidden rounded-[30px] border border-[#A9E36D] bg-gradient-to-br from-white via-[#FBFFF4] to-[#F0FFD9] p-5 shadow-[0_24px_70px_rgba(69,116,18,0.12)] md:p-7 lg:min-h-[408px] lg:p-8 xl:p-9"
//     >
//       <ClassroomIllustration />

//       <div className="relative z-10">
//         <div className="mb-5 flex items-center gap-3">
//           <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7ED600] to-[#429A0A] text-white shadow-[0_16px_35px_rgba(92,161,10,0.28)] md:h-16 md:w-16">
//             <UsersRound className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.3} />
//           </div>

//           <span className="rounded-full bg-[#E9FBD2] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#4F950B] md:px-4 md:text-[11px]">
//             Our key difference
//           </span>
//         </div>

//         <h3 className="max-w-[260px] text-[25px] font-black leading-[1.05] tracking-[-0.035em] text-[#07142F] md:max-w-[420px] md:text-[34px] lg:text-[38px]">
//           Small Batches. Personal Attention.
//         </h3>

//         <p className="mt-4 max-w-[330px] text-[14px] leading-6 text-[#2E3C58] md:max-w-[460px] md:text-[15px] md:leading-7">
//           Max 30 students per batch so teachers can track every student closely,
//           answer doubts, and give personal attention.
//         </p>

//         <div className="mt-5 grid grid-cols-3 gap-2 md:max-w-[560px] md:gap-3 lg:mt-8">
//           <MiniBenefit icon={UsersRound} label="Better attention" />
//           <MiniBenefit icon={MessageCircle} label="Faster doubt solving" />
//           <MiniBenefit icon={BarChart3} label="Stronger monitoring" />
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// function MobileSupportCard({ item }: { item: FeatureItem }) {
//   const Icon = item.icon;
//   const styles = toneStyles[item.tone];

//   return (
//     <article className="flex items-center gap-4 rounded-[24px] border border-white/80 bg-white/[0.82] p-4 shadow-[0_18px_48px_rgba(7,20,47,0.08)] backdrop-blur-sm">
//       <div
//         className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
//       >
//         <Icon className={`h-7 w-7 ${styles.icon}`} strokeWidth={2.35} />
//       </div>

//       <div>
//         <h3 className="text-[16px] font-black tracking-[-0.02em] text-[#07142F]">
//           {item.title}
//         </h3>
//         <p className="mt-1 text-[13px] leading-5 text-[#34415B]">
//           {item.description}
//         </p>
//       </div>
//     </article>
//   );
// }

// function DesktopCoreCard({ item }: { item: FeatureItem }) {
//   const Icon = item.icon;
//   const styles = toneStyles[item.tone];

//   return (
//     <article className="group relative min-h-[174px] overflow-hidden rounded-[28px] border border-white/80 bg-white/[0.84] p-6 shadow-[0_22px_60px_rgba(7,20,47,0.075)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(7,20,47,0.11)] xl:min-h-[184px] xl:p-7">
//       <div className="relative z-10 flex items-center gap-4">
//         <div
//           className={`flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} xl:h-[76px] xl:w-[76px]`}
//         >
//           <Icon
//             className={`h-8 w-8 ${styles.icon} xl:h-9 xl:w-9`}
//             strokeWidth={2.35}
//           />
//         </div>

//         <h3 className="max-w-[260px] text-[21px] font-black leading-[1.08] tracking-[-0.035em] text-[#07142F] xl:text-[22px]">
//           {item.title}
//         </h3>
//       </div>

//       <p className="relative z-10 mt-5 max-w-[330px] text-[15px] leading-7 text-[#34415B]">
//         {item.description}
//       </p>

//       <Icon
//         className={`pointer-events-none absolute -bottom-6 -right-4 h-28 w-28 ${styles.icon} opacity-[0.035] transition duration-300 group-hover:opacity-[0.06]`}
//         strokeWidth={1.8}
//       />
//     </article>
//   );
// }

// function DesktopSupportingCard({ item }: { item: FeatureItem }) {
//   const Icon = item.icon;
//   const styles = toneStyles[item.tone];

//   return (
//     <article
//       className={`group relative flex min-h-[182px] items-center gap-6 overflow-hidden rounded-[26px] border bg-white/[0.72] p-6 shadow-[0_18px_50px_rgba(7,20,47,0.065)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.82] hover:shadow-[0_26px_70px_rgba(7,20,47,0.09)] ${styles.border}`}
//     >
//       <div
//         className={`relative z-10 flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
//       >
//         <Icon className={`h-9 w-9 ${styles.icon}`} strokeWidth={2.25} />
//       </div>

//       <div className="relative z-10 max-w-[300px]">
//         <h3 className="text-[20px] font-black leading-[1.08] tracking-[-0.035em] text-[#07142F]">
//           {item.title}
//         </h3>

//         <p className="mt-3 text-[15px] leading-7 text-[#34415B]">
//           {item.description}
//         </p>
//       </div>

//       <SupportingCardIllustration title={item.title} tone={item.tone} />

//       <div className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-gradient-to-l from-white/45 to-transparent" />
//     </article>
//   );
// }

// function SupportingCardIllustration({
//   title,
//   tone,
// }: {
//   title: string;
//   tone: Tone;
// }) {
//   const toneMap: Record<Tone, string> = {
//     green: "text-[#8CC63F]",
//     blue: "text-[#7CC6F4]",
//     amber: "text-[#E7C35B]",
//     purple: "text-[#B49AF2]",
//     rose: "text-[#F1A4AD]",
//   };

//   const toneClass = toneMap[tone];

//   if (title === "Subject Expert Faculty") {
//     return (
//       <svg
//         className={`pointer-events-none absolute bottom-0 right-4 h-[92px] w-[92px] ${toneClass} opacity-[0.18] transition duration-300 group-hover:opacity-[0.24]`}
//         viewBox="0 0 120 120"
//         fill="none"
//         aria-hidden="true"
//       >
//         <circle cx="42" cy="38" r="10" stroke="currentColor" strokeWidth="2.5" />
//         <path
//           d="M27 76C29 60 39 54 42 54C45 54 55 60 57 76"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//         <circle cx="77" cy="34" r="8.5" stroke="currentColor" strokeWidth="2.5" />
//         <path
//           d="M65 68C67 55 75 50 77 50C80 50 88 55 90 68"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//         <path
//           d="M16 92H99"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           opacity="0.35"
//         />
//       </svg>
//     );
//   }

//   if (title === "Structured Study Material") {
//     return (
//       <svg
//         className={`pointer-events-none absolute bottom-2 right-4 h-[96px] w-[96px] ${toneClass} opacity-[0.18] transition duration-300 group-hover:opacity-[0.24]`}
//         viewBox="0 0 120 120"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M24 32C24 28 27 25 31 25H52C58 25 63 28 67 34V88C63 82 58 79 52 79H31C27 79 24 76 24 72V32Z"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M96 32C96 28 93 25 89 25H68C62 25 57 28 53 34V88C57 82 62 79 68 79H89C93 79 96 76 96 72V32Z"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M34 40H48"
//           stroke="currentColor"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.55"
//         />
//         <path
//           d="M72 40H86"
//           stroke="currentColor"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.55"
//         />
//         <path
//           d="M34 50H48"
//           stroke="currentColor"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           opacity="0.55"
//         />
//       </svg>
//     );
//   }

//   if (title === "Scholarship / Admission Tests") {
//     return (
//       <svg
//         className={`pointer-events-none absolute bottom-2 right-4 h-[100px] w-[100px] ${toneClass} opacity-[0.18] transition duration-300 group-hover:opacity-[0.24]`}
//         viewBox="0 0 120 120"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M40 28H80V39C80 50 72 59 60 63C48 59 40 50 40 39V28Z"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M40 34H28C28 46 34 53 45 54"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M80 34H92C92 46 86 53 75 54"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M60 63V77"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//         <path
//           d="M48 92C49 84 55 79 60 79C65 79 71 84 72 92"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//         <path
//           d="M41 92H79"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//       </svg>
//     );
//   }

//   return null;
// }

// function MobileFeaturesAccordion({
//   isAccordionOpen,
//   setIsAccordionOpen,
// }: {
//   isAccordionOpen: boolean;
//   setIsAccordionOpen: Dispatch<SetStateAction<boolean>>;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="overflow-hidden rounded-[24px] border border-[#B8E982] bg-[#F8FFF0]/90 shadow-[0_20px_55px_rgba(72,121,18,0.1)] md:hidden"
//     >
//       <button
//         type="button"
//         aria-expanded={isAccordionOpen}
//         onClick={() => setIsAccordionOpen((current) => !current)}
//         className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
//       >
//         <span className="flex items-center gap-3">
//           <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E7FAD1] text-[#55A000]">
//             <LayoutGrid className="h-5 w-5" strokeWidth={2.4} />
//           </span>

//           <span className="text-[16px] font-black tracking-[-0.02em] text-[#07142F]">
//             View all student support features
//           </span>
//         </span>

//         <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#4D930B]">
//           {isAccordionOpen ? (
//             <Minus className="h-5 w-5" strokeWidth={2.8} />
//           ) : (
//             <Plus className="h-5 w-5" strokeWidth={2.8} />
//           )}
//         </span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isAccordionOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.28, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <div className="divide-y divide-[#D9EBC3] border-t border-[#CBE8A6] bg-white/45">
//               {mobileAccordionFeatures.map((item) => (
//                 <AccordionFeatureRow key={item.title} item={item} />
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// function AccordionFeatureRow({ item }: { item: FeatureItem }) {
//   const Icon = item.icon;
//   const styles = toneStyles[item.tone];

//   return (
//     <div className="flex gap-3 px-4 py-4">
//       <div
//         className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap}`}
//       >
//         <Icon className={`h-6 w-6 ${styles.icon}`} strokeWidth={2.35} />
//       </div>

//       <div>
//         <h4 className="text-[15px] font-black tracking-[-0.02em] text-[#07142F]">
//           {item.title}
//         </h4>

//         <p className="mt-1 text-[12.5px] leading-5 text-[#3B4861]">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// function TrustReassuranceStrip() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative overflow-hidden rounded-[28px] border border-[#D7EDBE] bg-white/[0.72] p-3 shadow-[0_20px_60px_rgba(67,107,27,0.1)] backdrop-blur-sm md:rounded-[30px] md:p-4 lg:p-5"
//     >
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F4FFE6]/70 via-white/70 to-[#F4FFE6]/70" />

//       <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-3xl" />

//       <MobileTrustSummary />

//       <div className="relative z-10 hidden md:grid md:grid-cols-4 md:items-center">
//         {trustStripItems.map((item, index) => (
//           <div key={item.title} className="relative">
//             <TrustStripItem item={item} />

//             {index !== trustStripItems.length - 1 && (
//               <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#DDECCB] lg:block">
//                 <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ED600]" />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function MobileTrustSummary() {
//   return (
//     <div className="relative z-10 md:hidden">
//       <div className="flex items-start gap-3 rounded-[24px] border border-[#DCEEC8] bg-white/68 p-4 shadow-[0_14px_36px_rgba(67,107,27,0.08)]">
//         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D6EDB8] bg-[#F0FFDD] text-[#58A400] shadow-[0_10px_24px_rgba(88,164,0,0.12)]">
//           <ShieldCheck className="h-[23px] w-[23px]" strokeWidth={2.35} />
//         </div>

//         <div className="min-w-0">
//           <h3 className="text-[15px] font-black leading-tight tracking-[-0.025em] text-[#07142F]">
//             Built for consistent improvement
//           </h3>

//           <p className="mt-1.5 text-[11.5px] leading-5 text-[#44516A]">
//             Testing, mentorship, accountability, and parent updates work
//             together to support every student.
//           </p>
//         </div>
//       </div>

//       <div className="mt-3 grid grid-cols-2 gap-2.5">
//         {trustStripItems.map((item) => (
//           <MobileTrustChip key={item.title} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function MobileTrustChip({ item }: { item: TrustStripItemData }) {
//   const Icon = item.icon;

//   return (
//     <div className="flex min-h-[48px] items-center gap-2 rounded-2xl border border-[#DCEEC8] bg-white/60 px-3 py-2 shadow-[0_10px_24px_rgba(67,107,27,0.06)]">
//       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F0FFDD] text-[#58A400]">
//         <Icon className="h-[17px] w-[17px]" strokeWidth={2.35} />
//       </div>

//       <span className="text-[11.25px] font-extrabold leading-tight tracking-[-0.02em] text-[#07142F]">
//         {item.mobileTitle ?? item.title}
//       </span>
//     </div>
//   );
// }

// function TrustStripItem({ item }: { item: TrustStripItemData }) {
//   const Icon = item.icon;

//   return (
//     <div className="flex items-center gap-4 px-4 py-3 lg:px-5">
//       <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-[#D6EDB8] bg-[#F0FFDD] text-[#58A400] shadow-[0_12px_28px_rgba(88,164,0,0.12)]">
//         <Icon className="h-6 w-6" strokeWidth={2.3} />
//       </div>

//       <div>
//         <h3 className="text-[15px] font-black leading-tight tracking-[-0.025em] text-[#07142F] lg:text-[16px]">
//           {item.title}
//         </h3>

//         <p className="mt-1.5 max-w-[220px] text-[12.5px] leading-5 text-[#44516A] lg:text-[13px]">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// function MiniBenefit({
//   icon: Icon,
//   label,
// }: {
//   icon: LucideIcon;
//   label: string;
// }) {
//   return (
//     <div className="flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-2xl border border-[#D9EDBE] bg-white/70 px-2 py-2 text-center shadow-[0_10px_24px_rgba(86,146,20,0.08)] md:min-h-[66px] md:flex-row md:gap-3 md:text-left">
//       <Icon className="h-5 w-5 shrink-0 text-[#58A400]" strokeWidth={2.35} />
//       <span className="text-[11px] font-bold leading-tight text-[#23314F] md:text-[13px]">
//         {label}
//       </span>
//     </div>
//   );
// }

// function ClassroomIllustration() {
//   return (
//     <svg
//       className="pointer-events-none absolute right-2 top-8 h-36 w-36 text-[#7DBA32] opacity-[0.22] md:h-48 md:w-48 lg:right-5 lg:top-10 lg:h-56 lg:w-56"
//       viewBox="0 0 160 160"
//       fill="none"
//       aria-hidden="true"
//     >
//       <rect
//         x="70"
//         y="16"
//         width="70"
//         height="52"
//         rx="3"
//         stroke="currentColor"
//         strokeWidth="4"
//       />

//       <path
//         d="M87 50L105 38M105 38L119 48"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       <circle cx="112" cy="84" r="9" stroke="currentColor" strokeWidth="4" />

//       <path
//         d="M98 122C100 103 123 103 126 122"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       <circle cx="53" cy="96" r="9" stroke="currentColor" strokeWidth="4" />

//       <path
//         d="M38 136C41 117 65 117 68 136"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       <circle cx="88" cy="101" r="9" stroke="currentColor" strokeWidth="4" />

//       <path
//         d="M73 140C76 121 100 121 103 140"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       <path
//         d="M112 75V44"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       <path
//         d="M112 44L98 36"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/* ----------------------------------------------------------------
   WhyKotaAcademy — "The Weekly System" section
   Brand: navy #0B1B33 · lime #B5FF3D · gradient #C8FF55→#5FB016 · gold #F5B642
   Layers: 1) navy statement band  2) four pillars + runner rail  3) proof strip
----------------------------------------------------------------- */

/* ---------------------------- data ---------------------------- */

const PILLARS = [
  {
    step: "01",
    title: "Teach",
    promise: "Concept-first classes by subject-expert faculty.",
    points: [
      "Subject expert faculty",
      "Structured notes, DPPs & practice sheets",
      "Personalised study plan per student",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Test",
    promise: "Exam-style pressure, every single week.",
    points: [
      "Weekly NTA-pattern tests",
      "Detailed performance review",
      "Scholarship & admission tests",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Resolve",
    promise: "No doubt carries over to the next class.",
    points: [
      "Daily face-to-face doubt sessions",
      "One-on-one support after class",
      "Revision before every test",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Report",
    promise: "Parents always know where their child stands.",
    points: [
      "Regular parent updates",
      "Attendance, tests & doubts tracked",
      "Improvement areas flagged early",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
];

const PROOF = [
  {
    title: "Proven improvement",
    desc: "Consistent gains through regular testing",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: "Mentorship beyond class",
    desc: "Guidance on discipline & confidence",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Trusted by parents",
    desc: "Regular updates keep parents informed",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

/* ------------------------- tiny helpers ------------------------ */

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[3px] h-[15px] w-[15px] flex-none" fill="none" stroke="#5FB016" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/** Counts 0 → target when scrolled into view. */
function CountUp({ target, duration = 1.4 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target, duration]);

  return <span ref={ref}>{value}</span>;
}

/* --------------------------- variants -------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ============================ section =========================== */

export default function WhyKotaAcademy() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-kota-academy"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FBFDF7_0%,#F3F8EB_50%,#FBFDF7_100%)]"
    >
      {/* ambient brand glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[720px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(181,255,61,0.16),transparent)]" />
      <div aria-hidden className="pointer-events-none absolute left-[-12%] top-[45%] h-[480px] w-[640px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(181,255,61,0.12),transparent)]" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-6 lg:py-24">
        {/* ------------------------- header ------------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#5FB016]"
          >
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-gradient-to-r from-transparent to-[#5FB016]" />
            Why Kota Academy
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-gradient-to-l from-transparent to-[#5FB016]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.12] tracking-tight text-[#0B1B33]"
          >
            Why Kota Academy Works{" "}
            <span className="relative whitespace-nowrap">
              Differently
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full overflow-visible"
                aria-hidden
              >
                <motion.path
                  d="M4 8 Q 100 2 196 7"
                  fill="none"
                  stroke="#B5FF3D"
                  strokeWidth={7}
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-[560px] text-[15px] leading-relaxed text-[#0B1B33]/60 sm:text-base"
          >
            A structured academic system where teaching, testing, doubt solving,
            and parent updates work together — every single week.
          </motion.p>
        </motion.div>

        {/* -------------------- layer 1 · statement ------------------ */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B1B33] to-[#13294B] px-7 py-9 shadow-[0_24px_60px_-28px_rgba(11,27,51,0.45)] sm:px-10 sm:py-12 lg:px-14"
        >
          {/* dot-grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(181,255,61,0.18)_1.3px,transparent_1.3px)] [background-size:22px_22px] [mask-image:radial-gradient(420px_320px_at_88%_18%,#000_0%,transparent_70%)]"
          />
          {/* breathing glow behind the numeral */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[4%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(181,255,61,0.22),transparent)] lg:block"
            animate={reduce ? undefined : { opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid items-center gap-2 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B5FF3D]/35 bg-[#B5FF3D]/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B5FF3D]">
                <span className="relative flex h-1.5 w-1.5">
                  {!reduce && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B5FF3D] opacity-60" />
                  )}
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B5FF3D]" />
                </span>
                Our Key Difference
              </span>

              <h3 className="mt-5 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.15] tracking-tight text-white">
                Small batches.
                <br />
                <span className="text-[#B5FF3D]">Personal attention.</span>
              </h3>

              <p className="mt-3.5 max-w-[46ch] text-[15px] leading-relaxed text-white/65 sm:text-[15.5px]">
                Teachers track every student closely — answering doubts the day
                they appear and adjusting pace student by student, not class by
                class.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-6 flex flex-wrap gap-2.5"
              >
                {["Better attention", "Faster doubt solving", "Stronger monitoring"].map((c) => (
                  <motion.span
                    key={c}
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[13px] font-medium text-white/85 backdrop-blur-sm transition-colors duration-300 hover:border-[#B5FF3D]/45 hover:bg-[#B5FF3D]/10"
                  >
                    <Check />
                    {c}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* the figure */}
            <div className="mt-6 flex items-baseline gap-4 lg:mt-0 lg:block lg:text-center">
              <div className="bg-gradient-to-b from-[#C8FF55] to-[#5FB016] bg-clip-text text-7xl font-extrabold leading-[0.9] tracking-[-0.04em] text-transparent [filter:drop-shadow(0_10px_30px_rgba(181,255,61,0.25))] sm:text-8xl lg:text-[clamp(96px,11vw,150px)]">
                <CountUp target={30} />
              </div>
              <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/75 lg:mt-3 lg:text-[13px]">
                <b className="text-white">Max students</b> per batch
              </div>
            </div>
          </div>
        </motion.div>

        {/* --------------- layer 2 · the weekly system --------------- */}
        {/* runner rail (desktop only) */}
        <div aria-hidden className="relative mx-2 mt-16 hidden h-8 lg:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-0.5 opacity-45 [background-image:linear-gradient(90deg,#5FB016_0_6px,transparent_6px_12px)] [background-size:12px_2px]" />
          {["12.5%", "37.5%", "62.5%", "87.5%"].map((l) => (
            <span
              key={l}
              className="absolute top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#5FB016] bg-white"
              style={{ left: l }}
            />
          ))}
          {!reduce && (
            <motion.span
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B5FF3D] shadow-[0_0_0_5px_rgba(181,255,61,0.22),0_0_16px_rgba(181,255,61,0.7)]"
              animate={{ left: ["12.5%", "37.5%", "37.5%", "62.5%", "62.5%", "87.5%", "87.5%", "12.5%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.28, 0.33, 0.58, 0.63, 0.88, 0.95, 1],
              }}
            />
          )}
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-[18px]"
        >
          {PILLARS.map((p) => (
            <motion.article
              key={p.step}
              variants={fadeUp}
              className="group relative rounded-[20px] border border-[#0B1B33]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5FB016]/40 hover:shadow-[0_22px_44px_-24px_rgba(11,27,51,0.28)]"
            >
              {/* hover top-edge lime sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#B5FF3D]/0 to-transparent transition-all duration-500 group-hover:via-[#B5FF3D]"
              />
              <span className="absolute right-5 top-5 text-xs font-bold tracking-[0.1em] text-[#0B1B33]/40 transition-colors duration-300 group-hover:text-[#5FB016]">
                {p.step}
              </span>

              <div className="mb-4 grid h-12 w-12 place-items-center rounded-[14px] bg-[#EAF7DC] text-[#0B1B33] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#C8FF55] group-hover:to-[#5FB016] group-hover:shadow-[0_8px_20px_-6px_rgba(95,176,22,0.5)]">
                {p.icon}
              </div>

              <h4 className="text-[19px] font-extrabold tracking-tight text-[#0B1B33]">
                {p.title}
              </h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#0B1B33]/60 lg:min-h-[44px]">
                {p.promise}
              </p>

              <ul className="mt-4 grid gap-2.5 border-t border-dashed border-[#0B1B33]/10 pt-3.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px] font-medium leading-snug text-[#0B1B33]">
                    <Check />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        {/* ----------------- layer 3 · proof strip ------------------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14"
        >
          {/* gradient hairline frame */}
          <div className="rounded-[22px] bg-[linear-gradient(120deg,rgba(181,255,61,0.55),rgba(11,27,51,0.08)_35%,rgba(11,27,51,0.08)_65%,rgba(181,255,61,0.45))] p-px">
            <div className="relative overflow-hidden rounded-[21px] bg-white/80 backdrop-blur-sm">
              {/* corner glints — border-end highlights */}
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-[#B5FF3D] to-transparent" />
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-[#B5FF3D] to-transparent" />
              <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-[#B5FF3D] to-transparent" />
              <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-[#B5FF3D] to-transparent" />
              {/* soft ambient wash inside */}
              <span aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_140px_at_50%_-40%,rgba(181,255,61,0.14),transparent)]" />

              {/* mobile: horizontal snap-scroll · sm+: 3-col grid */}
              <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible">
                {PROOF.map((item, i) => (
                  <div
                    key={item.title}
                    className="group relative flex min-w-[78%] snap-center items-center gap-3.5 px-6 py-5 sm:min-w-0 sm:justify-center sm:px-4 sm:py-6"
                  >
                    {/* gradient separator (sm+) */}
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#0B1B33]/15 to-transparent sm:block"
                      />
                    )}
                    {/* hover sheen sweep */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
                    />

                    <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-[#EAF7DC] text-[#5FB016] transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#C8FF55] group-hover:to-[#5FB016] group-hover:text-[#0B1B33] group-hover:shadow-[0_8px_18px_-6px_rgba(95,176,22,0.55)]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[13.5px] font-bold tracking-tight text-[#0B1B33]">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-[12.5px] text-[#0B1B33]/60">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* mobile swipe hint dots */}
          <div aria-hidden className="mt-3 flex justify-center gap-1.5 sm:hidden">
            <span className="h-1.5 w-4 rounded-full bg-[#5FB016]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1B33]/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1B33]/15" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
