

// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   Atom,
//   BadgeCheck,
//   BookOpenCheck,
//   FlaskConical,
//   GraduationCap,
//   Leaf,
//   MessageCircle,
//   Sigma,
//   Target,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data — per-subject accent kept; chrome stays brand-neutral                */
// /*  Photos go in /public/faculty/ (edit `image` paths as needed).             */
// /* -------------------------------------------------------------------------- */

// type Accent = {
//   text: string;
//   bar: string; // top accent bar gradient
//   glow: string; // radiant hover glow
//   pill: string; // subject pill
// };

// type FacultyMember = {
//   name: string;
//   subject: string;
//   subjectIcon: LucideIcon;
//   experience: string;
//   qualification: string;
//   credential: string;
//   track: string; // exam specialisation
//   bio: string;
//   image: string;
//   accent: Accent;
// };

// const ACCENTS: Record<string, Accent> = {
//   chemistry: {
//     text: "text-[#7E3FF2]",
//     bar: "from-[#9C6CF5] to-[#6D28E0]",
//     glow: "bg-[#7E3FF2]/30",
//     pill: "bg-[#F4EEFF] text-[#6D28E0] ring-[#E0D2FB]",
//   },
//   maths: {
//     text: "text-[#E07B00]",
//     bar: "from-[#F5A93C] to-[#D86F00]",
//     glow: "bg-[#E07B00]/30",
//     pill: "bg-[#FFF4E5] text-[#C76800] ring-[#FBE2BE]",
//   },
//   physics: {
//     text: "text-[#1E7FD6]",
//     bar: "from-[#52A6F0] to-[#1466C2]",
//     glow: "bg-[#1E7FD6]/30",
//     pill: "bg-[#EAF4FF] text-[#1466C2] ring-[#CFE6FB]",
//   },
//   biology: {
//     text: "text-[#2C9A14]",
//     bar: "from-[#7BD24A] to-[#2C9A14]",
//     glow: "bg-[#3E9A12]/30",
//     pill: "bg-[#EEF9DF] text-[#2C7A12] ring-[#CFE9AE]",
//   },
// };

// const facultyMembers: FacultyMember[] = [
//   {
//     name: "Mayank Tiwari",
//     subject: "Chemistry",
//     subjectIcon: FlaskConical,
//     experience: "7 yrs",
//     qualification: "B.Tech · M.Tech",
//     credential: "GATE Qualified",
//     track: "IIT-JEE / Medical",
//     bio: "Specialises in Physical & Organic problem-solving.",
//     image: "/images/kota-academy/faculty/Mayank-tiwari.jpg",
//     accent: ACCENTS.chemistry,
//   },
//   {
//     name: "Mohd Asif",
//     subject: "Mathematics",
//     subjectIcon: Sigma,
//     experience: "8 yrs",
//     qualification: "B.Tech",
//     credential: "GATE Qualified",
//     track: "IIT-JEE / Medical",
//     bio: "Builds speed, accuracy & exam-day confidence.",
//     image: "/images/kota-academy/faculty/Mohd-asif.png",
//     accent: ACCENTS.maths,
//   },
//   {
//     name: "B.S. Raghav",
//     subject: "Physics",
//     subjectIcon: Atom,
//     experience: "7 yrs",
//     qualification: "B.Tech",
//     credential: "GATE Qualified",
//     track: "IIT-JEE / Medical",
//     bio: "Makes mechanics & electrostatics feel intuitive.",
//     image: "/images/kota-academy/faculty/B-S-Raghav.png",
//     accent: ACCENTS.physics,
//   },
//   {
//     name: "Abid Saifi",
//     subject: "Biology",
//     subjectIcon: Leaf,
//     experience: "7 yrs",
//     qualification: "B.Pharma · M.Pharma",
//     credential: "Postgraduate",
//     track: "Medical / NEET",
//     bio: "Drives concept clarity & focused NEET strategy.",
//     image: "/images/kota-academy/faculty/Abid-saifi.jpg",
//     accent: ACCENTS.biology,
//   },
// ];

// type TrustItem = { title: string; description: string; icon: LucideIcon };
// const trustItems: TrustItem[] = [
//   { title: "Subject Experts", description: "Deep command of their core subjects", icon: UsersRound },
//   { title: "Concept-Focused", description: "Strong foundations with exam-level clarity", icon: BookOpenCheck },
//   { title: "Personal Doubt Support", description: "One-to-one attention, regular sessions", icon: MessageCircle },
//   { title: "Result-Oriented", description: "Strategy, practice & performance tracking", icon: Target },
// ];

// /* -------------------------------------------------------------------------- */
// /*  Motion                                                                    */
// /* -------------------------------------------------------------------------- */

// const EXPO = [0.16, 1, 0.3, 1] as const;
// const stagger: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
// };
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function FacultySection() {
//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="faculty"
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
//           <Header />
//           <Showcase />
//           <CTA />
//           <TrustStrip />
//         </motion.div>
//       </section>
//     </MotionConfig>
//   );
// }

// /* Background — subtle dot grid, mostly faint with denser/brighter patches */
// function DotGridBackground() {
//   return (
//     <>
//       {/* base faint dots */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
//       {/* brighter patch top-right */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(50%_45%_at_88%_8%,black,transparent_70%)]" />
//       {/* brighter patch bottom-left */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(45%_40%_at_8%_95%,black,transparent_72%)]" />
//       {/* soft lime glow to keep it warm */}
//       <div className="pointer-events-none absolute -right-16 top-4 h-[300px] w-[300px] rounded-full bg-[#B5FF3D]/12 blur-[120px]" />
//     </>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Header                                                                    */
// /* -------------------------------------------------------------------------- */

// function Header() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//         <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           Faculty &amp; Mentors
//         </span>
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//       </div>

//       <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
//         Learn from <span className="text-[#3E9A12]">Experienced Subject Experts</span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
//         Our faculty includes experienced subject experts and mentors who understand
//         the exam journey, classroom challenges, and the discipline students need to
//         improve consistently.
//       </p>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Showcase                                                                  */
// /* -------------------------------------------------------------------------- */

// function Showcase() {
//   return (
//     <motion.div variants={fadeUp} className="mt-12">
//       <MobileCarousel />
//       <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
//         {facultyMembers.map((f) => (
//           <FacultyCard key={f.name} f={f} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// /* Mobile carousel — auto-advance + manual scroll + pause on interaction */
// function MobileCarousel() {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState(0);
//   const pausedRef = useRef(false);
//   const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const cardEls = useCallback(
//     () =>
//       Array.from(
//         scrollerRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []
//       ),
//     []
//   );

//   const onScroll = () => {
//     const s = scrollerRef.current;
//     if (!s) return;
//     const center = s.getBoundingClientRect().left + s.clientWidth / 2;
//     let best = 0;
//     let bestDist = Infinity;
//     cardEls().forEach((c, i) => {
//       const r = c.getBoundingClientRect();
//       const d = Math.abs(r.left + r.width / 2 - center);
//       if (d < bestDist) {
//         bestDist = d;
//         best = i;
//       }
//     });
//     setActive(best);
//   };

//   const goTo = (i: number) =>
//     cardEls()[i]?.scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest",
//     });

//   // pause autoplay briefly when the user interacts, then resume
//   const pause = () => {
//     pausedRef.current = true;
//     if (resumeTimer.current) clearTimeout(resumeTimer.current);
//     resumeTimer.current = setTimeout(() => {
//       pausedRef.current = false;
//     }, 6000);
//   };

//   useEffect(() => {
//     const reduce =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (reduce) return;

//     const id = setInterval(() => {
//       if (pausedRef.current) return;
//       setActive((prev) => {
//         const next = (prev + 1) % facultyMembers.length;
//         cardEls()[next]?.scrollIntoView({
//           behavior: "smooth",
//           inline: "center",
//           block: "nearest",
//         });
//         return next;
//       });
//     }, 3500);

//     return () => clearInterval(id);
//   }, [cardEls]);

//   return (
//     <div className="md:hidden">
//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         onPointerDown={pause}
//         onTouchStart={pause}
//         className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {facultyMembers.map((f, i) => (
//           <motion.div
//             key={f.name}
//             data-card
//             animate={{
//               scale: active === i ? 1 : 0.94,
//               opacity: active === i ? 1 : 0.6,
//             }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="w-[80%] max-w-[340px] shrink-0 snap-center"
//           >
//             <FacultyCard f={f} />
//           </motion.div>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-center gap-2.5">
//         {facultyMembers.map((f, i) => (
//           <button
//             key={f.name}
//             type="button"
//             aria-label={`View ${f.name}`}
//             onClick={() => {
//               pause();
//               goTo(i);
//             }}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               active === i ? "w-6 bg-[#3E9A12]" : "w-2 bg-[#C6CFC0] hover:bg-[#9BBE7F]"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Card                                                                      */
// /* -------------------------------------------------------------------------- */

// function FacultyCard({ f }: { f: FacultyMember }) {
//   const SubjectIcon = f.subjectIcon;

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25, ease: "easeOut" }}
//       className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E7DA] bg-white shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-[#CBD8BB] hover:shadow-[0_24px_55px_-26px_rgba(16,120,40,0.4)]"
//     >
//       {/* top accent bar */}
//       <span className={`h-1 w-full bg-gradient-to-r ${f.accent.bar}`} />

//       {/* radiant hover glow */}
//       <span
//         className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${f.accent.glow}`}
//         aria-hidden
//       />

//       {/* edge-to-edge portrait on a unified stage */}
//       <div className="relative aspect-[4/5] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_15%,#15324A,#0A1B2C_72%)]">
//         <Image
//           src={f.image}
//           alt={`${f.name}, ${f.subject} faculty at Kota Academy`}
//           fill
//           sizes="(max-width: 768px) 80vw, (max-width: 1280px) 46vw, 25vw"
//           className="object-cover object-top transition-transform duration-[650ms] ease-out group-hover:scale-[1.06]"
//         />
//         <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,44,0.12)_0%,transparent_26%,transparent_62%,rgba(7,21,33,0.5)_100%)]" />

//         {/* subject pill (accent) */}
//         <span
//           className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] ring-1 ring-inset backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 ${f.accent.pill}`}
//         >
//           <SubjectIcon className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
//           {f.subject}
//         </span>
//       </div>

//       {/* body */}
//       <div className="flex flex-1 flex-col p-5">
//         <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${f.accent.text}`}>
//           {f.subject}
//         </p>
//         <h3 className="mt-1.5 text-[18px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33]">
//           {f.name}
//         </h3>

//         <p className="mt-1 flex items-center gap-1.5 text-[13px] text-[#5A6678]">
//           <GraduationCap className="h-4 w-4 text-[#8A94A6]" strokeWidth={2} aria-hidden />
//           {f.qualification} · {f.experience}
//         </p>

//         {/* exam track */}
//         <p className="mt-1 flex items-center gap-1.5 text-[12.5px] font-medium text-[#5A6678]">
//           <Target className="h-4 w-4 text-[#8A94A6]" strokeWidth={2} aria-hidden />
//           For {f.track}
//         </p>

//         <div className="mt-3.5">
//           <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDEBB0] bg-[#EDF8DD] px-2.5 py-1 text-[11.5px] font-semibold text-[#2C7A12]">
//             <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
//             {f.credential}
//           </span>
//         </div>

//         {/* bio — always visible */}
//         <p className="mt-4 border-t border-[#EEF0E6] pt-3 text-[12.5px] leading-snug text-[#6A7486]">
//           {f.bio}
//         </p>
//       </div>
//     </motion.article>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  CTA — navy pill, lime text + lime arrow capsule                          */
// /* -------------------------------------------------------------------------- */

// function CTA() {
//   return (
//     <motion.div variants={fadeUp} className="mt-11 flex justify-center">
//       <a
//         href="/faculty"
//         className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0B1B33] py-2 pl-6 pr-2 text-[15px] font-semibold text-white shadow-[0_16px_36px_-16px_rgba(11,27,51,0.6)] ring-1 ring-inset ring-white/10 transition-colors duration-300 hover:bg-[#0E2240]"
//       >
//         <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(181,255,61,0.18),transparent)] transition-transform duration-700 group-hover:translate-x-[130%]" />
//         <UsersRound className="relative z-10 h-4 w-4 text-[#B5FF3D]" strokeWidth={2.2} aria-hidden />
//         <span className="relative z-10">Meet All Faculty</span>
//         <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(145deg,#C8FF55,#5FB016)] text-[#0A2410]">
//           <ArrowRight
//             className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
//             strokeWidth={2.4}
//             aria-hidden
//           />
//         </span>
//       </a>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Trust strip — glassmorphism + animated lime border-trail                  */
// /* -------------------------------------------------------------------------- */

// function TrustStrip() {
//   return (
//     <motion.div variants={fadeUp} className="relative mt-12">
//       {/* animated border-trail: a lime gradient ring rotates behind a slightly
//           inset glass panel, so only a travelling segment shows on the edge */}
//       <div className="relative overflow-hidden rounded-[28px] p-[1.5px]">
//         <span
//           className="pointer-events-none absolute -inset-[60%] animate-[facultyTrail_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#B5FF3D_340deg,#5FB016_360deg)] motion-reduce:hidden"
//           aria-hidden
//         />
//         {/* static faint ring fallback (also shown under reduced motion) */}
//         <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#B5FF3D]/25" aria-hidden />

//         <div className="relative overflow-hidden rounded-[27px] border border-white/50 bg-white/55 p-2 shadow-[0_20px_60px_-30px_rgba(11,27,51,0.35)] backdrop-blur-xl md:p-3">
//           <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
//           <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(244,255,232,0.5),rgba(255,255,255,0.2)_50%,rgba(240,250,228,0.45))]" />

//           <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
//             {trustItems.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div key={item.title} className="relative flex items-start gap-3.5 p-4 md:p-5">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#CDEBB0] bg-[#EDF8DD] text-[#2C7A12]">
//                     <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden />
//                   </span>
//                   <div>
//                     <h3 className="text-[14.5px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33]">
//                       {item.title}
//                     </h3>
//                     <p className="mt-1 text-[12.5px] leading-snug text-[#5A6678]">
//                       {item.description}
//                     </p>
//                   </div>
//                   {i !== trustItems.length - 1 && (
//                     <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#0B1B33]/10 xl:block" />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* keyframes for the border-trail */}
//       <style jsx>{`
//         @keyframes facultyTrail {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </motion.div>
//   );
// }


"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BadgeCheck,
  BookOpenCheck,
  FlaskConical,
  GraduationCap,
  Leaf,
  MessageCircle,
  Sigma,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data — per-subject accent kept; chrome stays brand-neutral                */
/*  Photos go in /public/faculty/ (edit `image` paths as needed).             */
/* -------------------------------------------------------------------------- */

type Accent = {
  text: string;
  bar: string;
  glow: string;
  pill: string;
};

type FacultyMember = {
  name: string;
  subject: string;
  subjectIcon: LucideIcon;
  experience: string;
  qualification: string;
  credential: string;
  track: string;
  bio: string;
  image: string;
  accent: Accent;
};

const ACCENTS: Record<string, Accent> = {
  chemistry: {
    text: "text-[#7E3FF2]",
    bar: "from-[#9C6CF5] to-[#6D28E0]",
    glow: "bg-[#7E3FF2]/30",
    pill: "bg-[#F4EEFF] text-[#6D28E0] ring-[#E0D2FB]",
  },
  maths: {
    text: "text-[#E07B00]",
    bar: "from-[#F5A93C] to-[#D86F00]",
    glow: "bg-[#E07B00]/30",
    pill: "bg-[#FFF4E5] text-[#C76800] ring-[#FBE2BE]",
  },
  physics: {
    text: "text-[#1E7FD6]",
    bar: "from-[#52A6F0] to-[#1466C2]",
    glow: "bg-[#1E7FD6]/30",
    pill: "bg-[#EAF4FF] text-[#1466C2] ring-[#CFE6FB]",
  },
  biology: {
    text: "text-[#2C9A14]",
    bar: "from-[#7BD24A] to-[#2C9A14]",
    glow: "bg-[#3E9A12]/30",
    pill: "bg-[#EEF9DF] text-[#2C7A12] ring-[#CFE9AE]",
  },
};

const facultyMembers: FacultyMember[] = [
  {
    name: "Mayank Tiwari",
    subject: "Chemistry",
    subjectIcon: FlaskConical,
    experience: "7 yrs",
    qualification: "B.Tech · M.Tech",
    credential: "GATE Qualified",
    track: "IIT-JEE / Medical",
    bio: "Specialises in Physical & Organic problem-solving.",
    image: "/images/kota-academy/faculty/Mayank-tiwari.jpg",
    accent: ACCENTS.chemistry,
  },
  {
    name: "Mohd Asif",
    subject: "Mathematics",
    subjectIcon: Sigma,
    experience: "8 yrs",
    qualification: "B.Tech",
    credential: "GATE Qualified",
    track: "IIT-JEE / Medical",
    bio: "Builds speed, accuracy & exam-day confidence.",
    image: "/images/kota-academy/faculty/Mohd-asif.png",
    accent: ACCENTS.maths,
  },
  {
    name: "B.S. Raghav",
    subject: "Physics",
    subjectIcon: Atom,
    experience: "7 yrs",
    qualification: "B.Tech",
    credential: "GATE Qualified",
    track: "IIT-JEE / Medical",
    bio: "Makes mechanics & electrostatics feel intuitive.",
    image: "/images/kota-academy/faculty/B-S-Raghav.png",
    accent: ACCENTS.physics,
  },
  {
    name: "Abid Saifi",
    subject: "Biology",
    subjectIcon: Leaf,
    experience: "7 yrs",
    qualification: "B.Pharma · M.Pharma",
    credential: "Postgraduate",
    track: "Medical / NEET",
    bio: "Drives concept clarity & focused NEET strategy.",
    image: "/images/kota-academy/faculty/Abid-saifi.jpg",
    accent: ACCENTS.biology,
  },
];

type TrustItem = { title: string; description: string; icon: LucideIcon };
const trustItems: TrustItem[] = [
  { title: "Subject Experts", description: "Deep command of their core subjects", icon: UsersRound },
  { title: "Concept-Focused", description: "Strong foundations with exam-level clarity", icon: BookOpenCheck },
  { title: "Personal Doubt Support", description: "One-to-one attention, regular sessions", icon: MessageCircle },
  { title: "Result-Oriented", description: "Strategy, practice & performance tracking", icon: Target },
];

/* -------------------------------------------------------------------------- */
/*  Motion                                                                    */
/* -------------------------------------------------------------------------- */

const EXPO = [0.16, 1, 0.3, 1] as const;
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function FacultySection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="faculty"
        className="relative overflow-hidden bg-[#F4F8EA] py-16 text-[#0B1B33] md:py-20 lg:py-24"
      >
        <DotGridBackground />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          variants={stagger}
        >
          <Header />
          <Showcase />
          <CTA />
          <TrustStrip />
        </motion.div>
      </section>
    </MotionConfig>
  );
}

function DotGridBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(50%_45%_at_88%_8%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(45%_40%_at_8%_95%,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -right-16 top-4 h-[300px] w-[300px] rounded-full bg-[#B5FF3D]/12 blur-[120px]" />
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
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
          Faculty &amp; Mentors
        </span>
        <span className="h-px w-9 bg-[#4E9417]/60" />
      </div>

      <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
        Learn from <span className="text-[#3E9A12]">Experienced Subject Experts</span>
      </h2>

      <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
        Our faculty includes experienced subject experts and mentors who understand
        the exam journey, classroom challenges, and the discipline students need to
        improve consistently.
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Showcase                                                                  */
/* -------------------------------------------------------------------------- */

function Showcase() {
  return (
    <motion.div variants={fadeUp} className="mt-12">
      <MobileCarousel />
      <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
        {facultyMembers.map((f) => (
          <FacultyCard key={f.name} f={f} />
        ))}
      </div>
    </motion.div>
  );
}

/* Mobile carousel — auto-advance (horizontal-only, in-view gated) + manual + pause */
function MobileCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cardEls = useCallback(
    () => Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []),
    []
  );

  const onScroll = () => {
    const s = scrollerRef.current;
    if (!s) return;
    const center = s.getBoundingClientRect().left + s.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cardEls().forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };

  // scroll the carousel horizontally ONLY — never the page
  const goTo = (i: number) => {
    const s = scrollerRef.current;
    const card = cardEls()[i];
    if (!s || !card) return;
    const left = card.offsetLeft - (s.clientWidth - card.clientWidth) / 2;
    s.scrollTo({ left, behavior: "smooth" });
  };

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 6000);
  };

  // auto-advance — horizontal-only, and only while the carousel is on screen
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = scrollerRef.current;
    if (!el) return;

    let inView = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    const id = setInterval(() => {
      if (pausedRef.current || !inView) return;
      const s = scrollerRef.current;
      if (!s) return;
      setActive((prev) => {
        const next = (prev + 1) % facultyMembers.length;
        const card = cardEls()[next];
        if (card) {
          const left = card.offsetLeft - (s.clientWidth - card.clientWidth) / 2;
          s.scrollTo({ left, behavior: "smooth" });
        }
        return next;
      });
    }, 3500);

    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, [cardEls]);

  return (
    <div className="md:hidden">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        onPointerDown={pause}
        onTouchStart={pause}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {facultyMembers.map((f, i) => (
          <motion.div
            key={f.name}
            data-card
            animate={{
              scale: active === i ? 1 : 0.94,
              opacity: active === i ? 1 : 0.6,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[80%] max-w-[340px] shrink-0 snap-center"
          >
            <FacultyCard f={f} />
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2.5">
        {facultyMembers.map((f, i) => (
          <button
            key={f.name}
            type="button"
            aria-label={`View ${f.name}`}
            onClick={() => {
              pause();
              goTo(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-[#3E9A12]" : "w-2 bg-[#C6CFC0] hover:bg-[#9BBE7F]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */

function FacultyCard({ f }: { f: FacultyMember }) {
  const SubjectIcon = f.subjectIcon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E7DA] bg-white shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-[#CBD8BB] hover:shadow-[0_24px_55px_-26px_rgba(16,120,40,0.4)]"
    >
      <span className={`h-1 w-full bg-gradient-to-r ${f.accent.bar}`} />

      <span
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${f.accent.glow}`}
        aria-hidden
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_15%,#15324A,#0A1B2C_72%)]">
        <Image
          src={f.image}
          alt={`${f.name}, ${f.subject} faculty at Kota Academy`}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1280px) 46vw, 25vw"
          className="object-cover object-top transition-transform duration-[650ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,44,0.12)_0%,transparent_26%,transparent_62%,rgba(7,21,33,0.5)_100%)]" />

        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] ring-1 ring-inset backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 ${f.accent.pill}`}
        >
          <SubjectIcon className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
          {f.subject}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${f.accent.text}`}>
          {f.subject}
        </p>
        <h3 className="mt-1.5 text-[18px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33]">
          {f.name}
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-[#5A6678]">
          <GraduationCap className="h-4 w-4 text-[#8A94A6]" strokeWidth={2} aria-hidden />
          {f.qualification} · {f.experience}
        </p>

        <p className="mt-1 flex items-center gap-1.5 text-[12.5px] font-medium text-[#5A6678]">
          <Target className="h-4 w-4 text-[#8A94A6]" strokeWidth={2} aria-hidden />
          For {f.track}
        </p>

        <div className="mt-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDEBB0] bg-[#EDF8DD] px-2.5 py-1 text-[11.5px] font-semibold text-[#2C7A12]">
            <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
            {f.credential}
          </span>
        </div>

        <p className="mt-4 border-t border-[#EEF0E6] pt-3 text-[12.5px] leading-snug text-[#6A7486]">
          {f.bio}
        </p>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */

function CTA() {
  return (
    <motion.div variants={fadeUp} className="mt-11 flex justify-center">
      <a
        href="/faculty"
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0B1B33] py-2 pl-6 pr-2 text-[15px] font-semibold text-white shadow-[0_16px_36px_-16px_rgba(11,27,51,0.6)] ring-1 ring-inset ring-white/10 transition-colors duration-300 hover:bg-[#0E2240]"
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(181,255,61,0.18),transparent)] transition-transform duration-700 group-hover:translate-x-[130%]" />
        <UsersRound className="relative z-10 h-4 w-4 text-[#B5FF3D]" strokeWidth={2.2} aria-hidden />
        <span className="relative z-10">Meet All Faculty</span>
        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(145deg,#C8FF55,#5FB016)] text-[#0A2410]">
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={2.4}
            aria-hidden
          />
        </span>
      </a>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Trust strip — glassmorphism + animated lime border-trail                  */
/* -------------------------------------------------------------------------- */

function TrustStrip() {
  return (
    <motion.div variants={fadeUp} className="relative mt-12">
      <div className="relative overflow-hidden rounded-[28px]">
        <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#B5FF3D]/25" aria-hidden />

        <svg className="pointer-events-none absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] motion-reduce:hidden" aria-hidden>
          <defs>
            <linearGradient id="facultyTrailGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B5FF3D" stopOpacity="0" />
              <stop offset="55%" stopColor="#B5FF3D" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5FB016" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="26"
            ry="26"
            fill="none"
            stroke="url(#facultyTrailGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="22 78"
            className="animate-[facultyTrail_5s_linear_infinite] [filter:drop-shadow(0_0_4px_rgba(181,255,61,0.7))]"
          />
        </svg>

        <div className="relative m-[1.5px] overflow-hidden rounded-[26px] border border-white/50 bg-white/55 p-2 shadow-[0_20px_60px_-30px_rgba(11,27,51,0.35)] backdrop-blur-xl md:p-3">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(244,255,232,0.5),rgba(255,255,255,0.2)_50%,rgba(240,250,228,0.45))]" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative flex items-start gap-3.5 p-4 md:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#CDEBB0] bg-[#EDF8DD] text-[#2C7A12]">
                    <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-snug text-[#5A6678]">
                      {item.description}
                    </p>
                  </div>
                  {i !== trustItems.length - 1 && (
                    <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#0B1B33]/10 xl:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes facultyTrail {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </motion.div>
  );
}