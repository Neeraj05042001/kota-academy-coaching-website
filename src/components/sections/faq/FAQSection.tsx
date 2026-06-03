// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarCheck,
//   ChevronDown,
//   HelpCircle,
//   PhoneCall,
//   Search,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data — grouped by real parent anxieties. Answers are sensible placeholders */
// /*  (verify fees / results / batch size with the client before going live).    */
// /*  `to` adds a route-out link that turns the FAQ into a quiet hub.            */
// /* -------------------------------------------------------------------------- */

// type Category = "Admissions" | "Fees" | "Academics" | "Results" | "Logistics";

// type FAQ = {
//   q: string;
//   a: string;
//   category: Category;
//   to?: { label: string; href: string };
// };

// const categories: Category[] = ["Admissions", "Fees", "Academics", "Results", "Logistics"];

// const faqs: FAQ[] = [
//   {
//     q: "Which exams does Kota Academy prepare students for?",
//     a: "We run focused classroom programs for IIT-JEE (Main & Advanced) and NEET, along with foundation batches for Classes IX–X. Each track has its own timetable, study material and test series.",
//     category: "Academics",
//     to: { label: "View our programs", href: "#courses" },
//   },
//   {
//     q: "What are the batch sizes?",
//     a: "We keep batches intentionally small so every student gets personal attention and regular doubt-solving — the teachers know each student by name, not by roll number.",
//     category: "Academics",
//   },
//   {
//     q: "Who teaches the classes?",
//     a: "Classes are taken by experienced, qualified subject experts — B.Tech/M.Tech and GATE-qualified faculty for Physics, Chemistry and Maths, and postgraduate faculty for Biology. You can meet them before enrolling.",
//     category: "Academics",
//     to: { label: "Meet the faculty", href: "#faculty" },
//   },
//   {
//     q: "What are the fees and is there an installment option?",
//     a: "Fees vary by program and duration. We keep them transparent with no hidden charges, and flexible installment options are available. The easiest way to get exact figures is a quick call or a visit to either branch.",
//     category: "Fees",
//     to: { label: "Talk to us about fees", href: "#contact" },
//   },
//   {
//     q: "Is the counselling session really free?",
//     a: "Yes — counselling is completely free with no registration charges. We'll understand your child's current level, recommend the right batch and program, and answer every question before you decide anything.",
//     category: "Fees",
//     to: { label: "Book free counselling", href: "#contact" },
//   },
//   {
//     q: "How do I enroll my child?",
//     a: "Start with a free counselling session — in person at either branch or over a call. Once you choose a program, our team helps with the enrollment formalities. You can join at the start of a session or mid-session.",
//     category: "Admissions",
//     to: { label: "Start enrollment", href: "#contact" },
//   },
//   {
//     q: "Can my child join mid-session?",
//     a: "Yes. We help mid-session joiners catch up with prior recordings, notes and extra doubt sessions so they settle into the batch comfortably.",
//     category: "Admissions",
//   },
//   {
//     q: "How do you track my child's progress?",
//     a: "Regular tests benchmark performance, and parents receive updates on attendance, test scores and overall progress — so you always know how your child is doing, not just at the end of term.",
//     category: "Results",
//   },
//   {
//     q: "What results has Kota Academy produced?",
//     a: "Our students have consistently improved their scores and secured strong results in JEE and NEET. We're happy to share specific outcomes and speak to our approach during your counselling session.",
//     category: "Results",
//   },
//   {
//     q: "Where are your branches and what are the timings?",
//     a: "We have two branches across Greater Noida — Alpha-I (main centre) and Omicron-III. Both open at 9:00 AM, Monday to Saturday. Choose whichever is closest to you.",
//     category: "Logistics",
//     to: { label: "Find your branch", href: "#branches" },
//   },
//   {
//     q: "Is the learning environment safe and disciplined?",
//     a: "Yes. Both branches are set up as focused, distraction-free spaces with a disciplined, supportive atmosphere — built for serious exam preparation while staying friendly and approachable.",
//     category: "Logistics",
//   },
// ];

// /* -------------------------------------------------------------------------- */
// /*  Motion                                                                    */
// /* -------------------------------------------------------------------------- */

// const EXPO = [0.16, 1, 0.3, 1] as const;
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
// };
// const stagger: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function FAQSection() {
//   const [query, setQuery] = useState("");
//   const [filter, setFilter] = useState<Category | "All">("All");
//   const [open, setOpen] = useState<number | null>(0);

//   const visible = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     return faqs
//       .map((f, i) => ({ ...f, i }))
//       .filter((f) => (filter === "All" ? true : f.category === filter))
//       .filter((f) => (q ? f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q) : true));
//   }, [query, filter]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="faq"
//         className="relative overflow-hidden bg-[#F4F8EA] py-16 text-[#0B1B33] md:py-20 lg:py-24"
//       >
//         <DotGridBackground />

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
//             {/* left: sticky intro + CTA */}
//             <IntroPanel
//               query={query}
//               setQuery={setQuery}
//               filter={filter}
//               setFilter={setFilter}
//             />

//             {/* right: accordion */}
//             <div>
//               <motion.div variants={fadeUp} className="flex flex-col gap-3">
//                 <AnimatePresence initial={false} mode="popLayout">
//                   {visible.length > 0 ? (
//                     visible.map((f) => (
//                       <AccordionItem
//                         key={f.i}
//                         faq={f}
//                         isOpen={open === f.i}
//                         onToggle={() => setOpen(open === f.i ? null : f.i)}
//                       />
//                     ))
//                   ) : (
//                     <EmptyState query={query} />
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* FAQ schema for SEO — parents Google these exact questions */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             mainEntity: faqs.map((f) => ({
//               "@type": "Question",
//               name: f.q,
//               acceptedAnswer: { "@type": "Answer", text: f.a },
//             })),
//           }),
//         }}
//       />
//     </MotionConfig>
//   );
// }

// function DotGridBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(46%_44%_at_6%_10%,black,transparent_70%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(44%_44%_at_96%_92%,black,transparent_72%)]" />
//       <div className="pointer-events-none absolute right-0 top-16 h-[300px] w-[300px] rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
//     </>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Left panel — intro, search, filters, sticky CTA                           */
// /* -------------------------------------------------------------------------- */

// function IntroPanel({
//   query,
//   setQuery,
//   filter,
//   setFilter,
// }: {
//   query: string;
//   setQuery: (v: string) => void;
//   filter: Category | "All";
//   setFilter: (c: Category | "All") => void;
// }) {
//   return (
//     <motion.div variants={fadeUp} className="lg:sticky lg:top-24 lg:self-start">
//       <div className="mb-5 flex items-center gap-3">
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//         <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
//           FAQ
//         </span>
//       </div>

//       <h2 className="text-balance text-[30px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0B1B33] sm:text-[36px] md:text-[42px]">
//         Questions parents <span className="text-[#3E9A12]">ask us most</span>
//       </h2>

//       <p className="mt-4 max-w-[420px] text-[15px] leading-7 text-[#4A5670]">
//         Everything you need to know about admissions, fees, faculty and results —
//         answered honestly. Can&apos;t find yours? We&apos;re a call away.
//       </p>

//       {/* search */}
//       <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-[#E4E7DA] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(11,27,51,0.04)] focus-within:border-[#9FD46A]">
//         <Search className="h-[18px] w-[18px] shrink-0 text-[#8A94A6]" strokeWidth={2.2} aria-hidden />
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search a question…"
//           className="w-full bg-transparent text-[14px] text-[#0B1B33] outline-none placeholder:text-[#9AA3B2]"
//         />
//       </div>

//       {/* category filter */}
//       <div className="mt-4 flex flex-wrap gap-2">
//         {(["All", ...categories] as const).map((c) => {
//           const active = filter === c;
//           return (
//             <button
//               key={c}
//               type="button"
//               onClick={() => setFilter(c)}
//               className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors duration-200 ${
//                 active
//                   ? "bg-[#0B1B33] text-white"
//                   : "border border-[#E4E7DA] bg-white text-[#5A6678] hover:border-[#CBD8BB] hover:text-[#0B1B33]"
//               }`}
//             >
//               {c}
//             </button>
//           );
//         })}
//       </div>

//       {/* CTA card */}
//       <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_85%_20%,rgba(181,255,61,0.16),transparent_44%),linear-gradient(120deg,#0B1B33,#0B2A1C)] p-5 shadow-[0_24px_60px_-32px_rgba(7,17,31,0.6)]">
//         <h3 className="text-[16px] font-bold text-white">Still have a question?</h3>
//         <p className="mt-1.5 text-[13px] leading-6 text-[#C7D1E0]">
//           Book a free counselling session — no registration charges. We&apos;ll answer
//           everything and help you choose the right program.
//         </p>
//         <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
//           <Link
//             href="#contact"
//             className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 py-2.5 text-[13.5px] font-bold text-[#0A2410] transition-transform duration-300 hover:-translate-y-0.5"
//           >
//             <CalendarCheck className="h-4 w-4" strokeWidth={2.3} aria-hidden />
//             Book Counselling
//             <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden />
//           </Link>
//           <a
//             href="tel:+918447009390"
//             className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[13.5px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
//           >
//             <PhoneCall className="h-4 w-4 text-[#B5FF3D]" strokeWidth={2.3} aria-hidden />
//             Call us
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Accordion item                                                            */
// /* -------------------------------------------------------------------------- */

// function AccordionItem({
//   faq,
//   isOpen,
//   onToggle,
// }: {
//   faq: FAQ;
//   isOpen: boolean;
//   onToggle: () => void;
// }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -8 }}
//       transition={{ duration: 0.3, ease: EXPO }}
//       className={`group relative overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
//         isOpen ? "border-[#9FD46A]" : "border-[#E4E7DA] hover:border-[#CBD8BB]"
//       }`}
//     >
//       {/* active left rail */}
//       <span
//         className={`pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[linear-gradient(180deg,#9FE34A,#3E9A12)] transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//         aria-hidden
//       />

//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
//       >
//         <span className="flex items-start gap-3">
//           <span className="mt-0.5 inline-flex rounded-md bg-[#EDF8DD] px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.05em] text-[#2C7A12]">
//             {faq.category}
//           </span>
//           <span className={`text-[15px] font-semibold leading-snug tracking-[-0.01em] md:text-[16px] ${isOpen ? "text-[#0B1B33]" : "text-[#1F2B40]"}`}>
//             {faq.q}
//           </span>
//         </span>
//         <span
//           className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
//             isOpen ? "rotate-180 bg-[#0B1B33] text-[#B5FF3D]" : "bg-[#F1F5EA] text-[#3E8618]"
//           }`}
//         >
//           <ChevronDown className="h-4 w-4" strokeWidth={2.4} aria-hidden />
//         </span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: EXPO }}
//             className="overflow-hidden"
//           >
//             <div className="px-5 pb-5 pl-[3.25rem] md:px-6 md:pb-6 md:pl-[3.75rem]">
//               <p className="text-[14px] leading-7 text-[#5A6678]">{faq.a}</p>
//               {faq.to && (
//                 <Link
//                   href={faq.to.href}
//                   className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2F7D17] transition-colors hover:text-[#1F5E10]"
//                 >
//                   {faq.to.label}
//                   <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
//                 </Link>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// function EmptyState({ query }: { query: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="rounded-2xl border border-dashed border-[#CBD8BB] bg-white/60 px-6 py-10 text-center"
//     >
//       <p className="text-[14px] text-[#5A6678]">
//         No questions match{query ? ` “${query}”` : " that filter"}.
//       </p>
//       <Link href="#contact" className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2F7D17] hover:text-[#1F5E10]">
//         Ask us directly
//         <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
//       </Link>
//     </motion.div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarCheck,
//   HelpCircle,
//   MessageCircle,
//   Minus,
//   Plus,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";
// import { useState } from "react";

// type FAQItem = {
//   id: string;
//   question: string;
//   answer: React.ReactNode;
//   icon: LucideIcon;
// };

// const faqItems: FAQItem[] = [
//   {
//     id: "batch-size",
//     question: "What is the maximum batch size?",
//     icon: UsersRound,
//     answer: (
//       <>
//         Kota Academy keeps batches limited, with a maximum of{" "}
//         <strong className="font-black text-[#2F861B]">
//           30 students per batch
//         </strong>
//         , so teachers can track every student closely and answer doubts
//         properly.
//       </>
//     ),
//   },
//   {
//     id: "new-batches",
//     question: "When do new batches start?",
//     icon: CalendarCheck,
//     answer:
//       "New batches start according to course schedule, admission cycle, and student demand. Parents can contact the nearest branch or book free counselling to know the latest batch start date.",
//   },
//   {
//     id: "study-material",
//     question: "Is study material included?",
//     icon: HelpCircle,
//     answer:
//       "Structured study material, practice sheets, assignments, and test support are provided as per the enrolled course. Exact inclusions can be confirmed during counselling.",
//   },
//   {
//     id: "scholarship",
//     question: "Do you offer scholarship or fee waiver?",
//     icon: HelpCircle,
//     answer:
//       "Scholarship or admission test opportunities may be available for eligible students based on performance and course fit. Parents can ask about current scholarship options during counselling.",
//   },
//   {
//     id: "weekend-batches",
//     question: "Are weekend or Sunday batches available?",
//     icon: CalendarCheck,
//     answer:
//       "Batch timings may vary by course, class, and branch. Weekend or special batches can be discussed with the counselling team based on current availability.",
//   },
//   {
//     id: "progress-tracking",
//     question: "How do you track and report progress?",
//     icon: HelpCircle,
//     answer:
//       "Student progress is tracked through regular tests, classroom performance, doubt support, and parent updates. Parents are informed about attendance, test performance, and improvement areas.",
//   },
//   {
//     id: "courses",
//     question: "Which courses are available?",
//     icon: HelpCircle,
//     answer:
//       "Kota Academy offers coaching support for IIT-JEE, NEET, Foundation, and board-focused preparation. The counselling team can help students choose the right program based on class and target exam.",
//   },
//   {
//     id: "free-counselling",
//     question: "Is free counselling available before admission?",
//     icon: MessageCircle,
//     answer:
//       "Yes. Parents and students can book a free counselling session to understand courses, batch options, preparation strategy, and the nearest branch before taking admission.",
//   },
// ];

// const EXPO = [0.16, 1, 0.3, 1] as const;

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
//       ease: EXPO,
//     },
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.07,
//       delayChildren: 0.08,
//     },
//   },
// };

// export default function KotaAcademyFAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="faqs"
//         className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24"
//       >
//         <SectionBackground />

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[520px] px-5 sm:px-6 md:max-w-[980px] lg:px-8 xl:max-w-[1400px]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <SectionHeader />

//           <FAQGrid openIndex={openIndex} setOpenIndex={setOpenIndex} />

//           <HelpCTA />
//         </motion.div>
//       </section>
//     </MotionConfig>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.12)_1px,transparent_1.45px)] bg-[size:24px_24px] opacity-35" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.36)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(48%_42%_at_8%_12%,black,transparent_70%)]" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.28)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(44%_42%_at_94%_58%,black,transparent_72%)]" />

//       <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border-[52px] border-[#B5FF3D]/10 md:h-96 md:w-96" />

//       <div className="pointer-events-none absolute -right-28 top-32 h-64 w-64 rounded-full border-[48px] border-[#B5FF3D]/10 md:h-80 md:w-80" />

//       <div className="pointer-events-none absolute left-1/2 top-12 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
//     </>
//   );
// }

// function SectionHeader() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />

//         <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7FD11B] text-white shadow-[0_10px_24px_rgba(87,171,18,0.22)]">
//           <HelpCircle className="h-5 w-5" strokeWidth={2.4} />
//         </span>

//         <span className="text-[12px] font-black uppercase tracking-[0.26em] text-[#2F7D17] md:text-[13px]">
//           FAQs
//         </span>

//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[500px] text-balance text-[38px] font-black leading-[1.04] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[980px] md:text-[58px] lg:text-[66px] xl:max-w-[1180px] xl:text-[72px]">
//         Answers to the Questions{" "}
//         <span className="text-[#2F861B]">Parents Ask Most</span>
//       </h2>

//       <p className="mx-auto mt-6 max-w-[470px] text-[16px] leading-8 text-[#5B6475] md:max-w-[860px] md:text-[18px]">
//         Get clear answers to the most common questions about batches, study
//         support, tests, progress tracking, counselling, and admission before you
//         take the next step.
//       </p>
//     </motion.div>
//   );
// }

// function FAQGrid({
//   openIndex,
//   setOpenIndex,
// }: {
//   openIndex: number | null;
//   setOpenIndex: (index: number | null) => void;
// }) {
//   return (
//     <motion.div
//       variants={stagger}
//       className="mx-auto mt-10 grid max-w-[1220px] gap-4 md:mt-12 lg:grid-cols-2 lg:gap-5"
//     >
//       {faqItems.map((item, index) => (
//         <FAQAccordionItem
//           key={item.id}
//           item={item}
//           index={index}
//           isOpen={openIndex === index}
//           onToggle={() => setOpenIndex(openIndex === index ? null : index)}
//         />
//       ))}
//     </motion.div>
//   );
// }

// function FAQAccordionItem({
//   item,
//   index,
//   isOpen,
//   onToggle,
// }: {
//   item: FAQItem;
//   index: number;
//   isOpen: boolean;
//   onToggle: () => void;
// }) {
//   const Icon = item.icon;
//   const answerId = `faq-answer-${item.id}`;
//   const buttonId = `faq-button-${item.id}`;

//   return (
//     <motion.article
//       variants={fadeUp}
//       className={`overflow-hidden rounded-[24px] border bg-white/86 shadow-[0_16px_44px_rgba(7,20,47,0.065)] backdrop-blur-xl transition-all duration-300 md:rounded-[26px] ${
//         isOpen
//           ? "border-[#8AD31D] bg-[#FBFFF3] shadow-[0_22px_66px_rgba(74,151,0,0.12)]"
//           : "border-[#E3EAD8] hover:border-[#CFE7B5]"
//       }`}
//     >
//       <button
//         id={buttonId}
//         type="button"
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         aria-controls={answerId}
//         className="flex w-full items-center gap-4 p-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8AD31D] sm:p-5 md:p-6"
//       >
//         <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EFF9DD] text-[18px] font-black text-[#2F861B] md:h-14 md:w-14 md:text-[20px]">
//           {String(index + 1).padStart(2, "0")}
//         </span>

//         <span className="min-w-0 flex-1 text-[18px] font-black leading-snug tracking-[-0.035em] text-[#07142F] sm:text-[20px] md:text-[22px]">
//           {item.question}
//         </span>

//         <span
//           className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 md:h-12 md:w-12 ${
//             isOpen
//               ? "bg-[linear-gradient(135deg,#B5FF3D,#63B915)] text-white shadow-[0_12px_26px_rgba(87,171,18,0.26)]"
//               : "bg-[#EFF9DD] text-[#2F861B]"
//           }`}
//         >
//           {isOpen ? (
//             <Minus className="h-5 w-5" strokeWidth={3} />
//           ) : (
//             <Plus className="h-5 w-5" strokeWidth={3} />
//           )}
//         </span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             id={answerId}
//             role="region"
//             aria-labelledby={buttonId}
//             initial={{
//               height: 0,
//               opacity: 0,
//             }}
//             animate={{
//               height: "auto",
//               opacity: 1,
//             }}
//             exit={{
//               height: 0,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.32,
//               ease: EXPO,
//             }}
//             className="overflow-hidden"
//           >
//             <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
//               <div className="flex gap-4 rounded-[20px] border border-[#E0EED0] bg-[linear-gradient(135deg,#F4FBEA_0%,#FFFFFF_100%)] p-5 md:p-6">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5F6CB] text-[#2F861B] md:h-14 md:w-14">
//                   <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.2} />
//                 </div>

//                 <p className="text-[16px] font-medium leading-8 text-[#2E3950] md:text-[18px]">
//                   {item.answer}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.article>
//   );
// }

// function HelpCTA() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative mx-auto mt-8 overflow-hidden rounded-[30px] border border-[#203149]/70 bg-[radial-gradient(circle_at_90%_50%,rgba(181,255,61,0.15),transparent_34%),radial-gradient(circle_at_8%_20%,rgba(14,116,144,0.12),transparent_34%),linear-gradient(115deg,#07111F_0%,#0B1426_48%,#0D1E1A_100%)] p-6 shadow-[0_28px_90px_rgba(7,17,31,0.22)] md:mt-10 md:rounded-[34px] md:p-8 lg:max-w-[1220px] lg:p-10"
//     >
//       <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />

//       <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30">
//         <div className="h-full w-full bg-[radial-gradient(circle,rgba(181,255,61,0.35)_1px,transparent_1.5px)] bg-[size:18px_18px] [mask-image:linear-gradient(90deg,transparent,black)]" />
//       </div>

//       <div className="relative z-10 grid gap-7 md:grid-cols-[0.55fr_1fr] md:items-center lg:grid-cols-[0.45fr_1fr_1fr]">
//         <HelpIllustration />

//         <div className="text-center md:text-left">
//           <h3 className="text-[32px] font-black leading-tight tracking-[-0.045em] text-white md:text-[40px]">
//             Still have a question?
//           </h3>

//           <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#B5FF3D] md:mx-0" />

//           <p className="mt-5 text-[16px] font-medium leading-8 text-[#DCE5F2] md:text-[18px]">
//             Talk to our counselling team and get guidance for the right course,
//             branch, and batch.
//           </p>
//         </div>

//         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
//           <a
//             href="https://wa.me/918447009390"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-white px-5 text-[16px] font-black text-[#07142F] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] md:text-[18px]"
//             aria-label="Ask Kota Academy on WhatsApp"
//           >
//             <MessageCircle
//               className="h-6 w-6 text-[#2F861B]"
//               strokeWidth={2.35}
//             />
//             Ask on WhatsApp
//           </a>

//           <Link
//             href="#contact"
//             className="group flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#B5FF3D_0%,#75C614_48%,#3E9A12_100%)] px-5 text-[16px] font-black text-[#07142F] shadow-[0_18px_40px_rgba(74,151,0,0.22)] transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:text-[18px]"
//             aria-label="Book free counselling at Kota Academy"
//           >
//             <CalendarCheck className="h-6 w-6" strokeWidth={2.35} />
//             Book Free Counselling
//             <ArrowRight
//               className="h-5 w-5 transition duration-300 group-hover:translate-x-1"
//               strokeWidth={2.4}
//             />
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function HelpIllustration() {
//   return (
//     <div className="relative mx-auto h-36 w-52 md:h-40 md:w-56 lg:h-44 lg:w-60">
//       <div className="absolute left-7 top-5 h-24 w-32 rounded-[24px] bg-white shadow-[0_18px_42px_rgba(0,0,0,0.24)]">
//         <div className="flex h-full items-center justify-center gap-3">
//           <span className="h-4 w-4 rounded-full bg-[#6DBB18]" />
//           <span className="h-4 w-4 rounded-full bg-[#6DBB18]" />
//           <span className="h-4 w-4 rounded-full bg-[#6DBB18]" />
//         </div>

//         <span className="absolute -bottom-3 left-9 h-7 w-7 rotate-45 bg-white" />
//       </div>

//       <div className="absolute right-8 top-0 h-32 w-32 rounded-full border-[10px] border-white/16" />

//       <div className="absolute bottom-0 right-7 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B5FF3D,#4EAB12)] text-[42px] font-black text-white shadow-[0_18px_38px_rgba(78,171,18,0.32)]">
//         ?
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  HelpCircle,
  Headphones,
  MessageCircle,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data — keep the raw's questions; verify hard claims (batch size, fees)     */
/*  before going live. `to` adds a route-out link where it helps.             */
/* -------------------------------------------------------------------------- */

type FAQ = {
  q: string;
  a: string;
  to?: { label: string; href: string };
};

const faqs: FAQ[] = [
  {
    q: "What is the maximum batch size?",
    a: "We keep batches intentionally small so teachers can track every student closely and solve doubts properly — students are known by name, not by roll number. Exact batch capacity for your program is confirmed during counselling.",
  },
  {
    q: "When do new batches start?",
    a: "New batches start according to the course schedule, admission cycle, and student demand. Contact your nearest branch or book a free counselling session to know the latest start dates.",
    to: { label: "Find your branch", href: "#branches" },
  },
  {
    q: "Is study material included?",
    a: "Structured study material, practice sheets, assignments, and test support are provided as per the enrolled course. Exact inclusions are confirmed during counselling.",
  },
  {
    q: "Do you offer scholarship or fee waiver?",
    a: "Scholarship and admission-test opportunities may be available for eligible students based on performance and course fit. Ask about current options during your counselling session.",
    to: { label: "Ask about scholarships", href: "#contact" },
  },
  {
    q: "Are weekend or Sunday batches available?",
    a: "Batch timings vary by course, class, and branch. Weekend or special batches can be discussed with the counselling team based on current availability.",
  },
  {
    q: "How do you track and report progress?",
    a: "Progress is tracked through regular tests, classroom performance, and doubt support. Parents receive updates on attendance, test performance, and areas of improvement — so you always know how your child is doing.",
  },
  {
    q: "Which courses are available?",
    a: "We offer focused coaching for IIT-JEE, NEET, and foundation programs for Classes IX–X, along with board-focused preparation. The counselling team helps choose the right program based on class and target exam.",
    to: { label: "View our programs", href: "#courses" },
  },
  {
    q: "Is free counselling available before admission?",
    a: "Yes. Students and parents can book a free counselling session to understand courses, batch options, preparation strategy, and the nearest branch — with no registration charges — before taking admission.",
    to: { label: "Book free counselling", href: "#contact" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Motion                                                                    */
/* -------------------------------------------------------------------------- */

const EXPO = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.q ?? null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL = 5;
  const visible = showAll ? faqs : faqs.slice(0, INITIAL);
  const hiddenCount = faqs.length - INITIAL;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="faq"
        className="relative overflow-hidden bg-[#F4F8EA] py-14 text-[#0B1B33] md:py-16 lg:py-20"
      >
        <DotGridBackground />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[820px] px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          variants={stagger}
        >
          <Header />

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-2.5">
            {visible.map((f, i) => (
              <AccordionItem
                key={f.q}
                faq={f}
                index={i}
                isOpen={openId === f.q}
                onToggle={() => setOpenId(openId === f.q ? null : f.q)}
              />
            ))}

            {hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="group mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-[#D4DEC6] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#0B1B33] shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-colors duration-300 hover:border-[#9FD46A] hover:text-[#2F7D17]"
              >
                {showAll ? "Show fewer questions" : "View more questions"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                  strokeWidth={2.4}
                  aria-hidden
                />
              </button>
            )}
          </motion.div>

          <HelpCTA />
        </motion.div>
      </section>

      {/* FAQ schema for SEO — parents Google these exact questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </MotionConfig>
  );
}

function DotGridBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(46%_44%_at_6%_8%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(44%_44%_at_96%_94%,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-[300px] w-[420px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header                                                                    */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-9 bg-[#4E9417]/60" />
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
          <HelpCircle className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
          FAQs
        </span>
        <span className="h-px w-9 bg-[#4E9417]/60" />
      </div>

      <h2 className="mx-auto max-w-[640px] text-balance text-[28px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0B1B33] sm:text-[34px] md:text-[40px] lg:text-[44px]">
        Answers to the questions <span className="text-[#3E9A12]">parents ask most</span>
      </h2>

      <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-6 text-[#4A5670] md:text-[15px]">
        Clear answers about batches, study support, tests, progress tracking,
        counselling, and admission — before you take the next step.
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Accordion item — single column, plain answer (no nested card/icon)        */
/* -------------------------------------------------------------------------- */

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EXPO }}
      className={`relative overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
        isOpen ? "border-[#9FD46A] shadow-[0_18px_44px_-26px_rgba(16,120,40,0.4)]" : "border-[#E4E7DA] hover:border-[#CBD8BB]"
      }`}
    >
      {/* active left rail */}
      <span
        className={`pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[linear-gradient(180deg,#9FE34A,#3E9A12)] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />

      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8AD31D] md:px-5 md:py-4"
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold ring-1 ring-inset transition-colors duration-300 ${
            isOpen ? "bg-[#0B1B33] text-[#B5FF3D] ring-transparent" : "bg-[#F1F5EA] text-[#3E8618] ring-[#DDE6CF]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={`min-w-0 flex-1 text-[14px] font-semibold leading-snug tracking-[-0.01em] md:text-[15px] ${isOpen ? "text-[#0B1B33]" : "text-[#1F2B40]"}`}>
          {faq.q}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "rotate-180 bg-[#0B1B33] text-[#B5FF3D]" : "bg-[#F1F5EA] text-[#3E8618]"
          }`}
        >
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EXPO }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pl-[2.875rem] md:px-5 md:pb-5 md:pl-[3.375rem]">
              <p className="text-[13.5px] leading-6 text-[#5A6678]">{faq.a}</p>
              {faq.to && (
                <Link
                  href={faq.to.href}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F7D17] transition-colors hover:text-[#1F5E10]"
                >
                  {faq.to.label}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Help CTA — dark band, simplified                                          */
/* -------------------------------------------------------------------------- */

function HelpCTA() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mt-7 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_88%_25%,rgba(181,255,61,0.18),transparent_44%),linear-gradient(120deg,#0B1B33_0%,#0C2238_52%,#0B2A1C_100%)] p-6 shadow-[0_28px_70px_-32px_rgba(7,17,31,0.6)] md:p-8"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B5FF3D]/12 text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
            <Headphones className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <h3 className="text-[19px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[22px]">
              Still have a question?
            </h3>
            <p className="mt-1.5 max-w-[460px] text-[13.5px] leading-6 text-[#C7D1E0]">
              Talk to our counselling team — we&apos;ll guide you to the right course,
              branch, and batch. Free, no registration charges.
            </p>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:items-stretch lg:items-end">

             <Link
            href="#contact"
            aria-label="Book free counselling"
            className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-5 py-3 text-[13.5px] font-bold text-[#0A2410] shadow-[0_16px_36px_-16px_rgba(95,176,22,0.8)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            <CalendarCheck className="h-4 w-4" strokeWidth={2.3} aria-hidden />
            Book Free Counselling
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden />
          </Link>
          <a
            href="https://wa.me/918447009390"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask Kota Academy on WhatsApp"
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[13.5px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4 text-[#B5FF3D]" strokeWidth={2.3} aria-hidden />
            Ask on WhatsApp
          </a>
         
        </div>
      </div>
    </motion.div>
  );
}