// // // "use client";

// // // import Image from "next/image";
// // // import {
// // //   GraduationCap,
// // //   Users,
// // //   Trophy,
// // //   BookOpen,
// // //   Smile,
// // //   ArrowRight,
// // //   Plus,
// // //   Star,
// // // } from "lucide-react";
// // // import { HeroPill } from "./HeroPill";
// // // import styles from "./hero.module.css";

// // // /**
// // //  * HeroSection — Kota Academy landing hero. (v3)
// // //  *
// // //  * Fixes in this pass:
// // //  *   - Hard horizontal gutters at every breakpoint (was being lost
// // //  *     when parent wrappers fought the section).
// // //  *   - CTAs sized to content on tablet+ (`w-fit`), no more
// // //  *     stretched-bar look that made the primary button look blank.
// // //  *   - Desktop image frame is now LANDSCAPE 1.45:1 — preserves
// // //  *     ~97% of the source photo. Background students, the KOTA
// // //  *     ACADEMY sign, and both main figures all in shot.
// // //  *   - Image frame is vertically centered in its column, capped
// // //  *     in size so it can't stretch on ultra-wide.
// // //  *
// // //  * IMPORTANT — page wrapper:
// // //  *   This component OWNS its full-width background and padding.
// // //  *   Do NOT wrap it in a container with `p-12` or its own
// // //  *   background — that double-contains it. Use:
// // //  *     <main className="min-h-screen bg-base text-primary">
// // //  *       <HeroSection />
// // //  *     </main>
// // //  */
// // // export function HeroSection() {
// // //   return (
// // //     <section className="relative w-full overflow-hidden bg-base">
// // //       {/* ── Ambient background — full section ── */}
// // //       <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
// // //         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_72%_38%,rgb(198_246_36/0.07)_0%,transparent_60%),radial-gradient(ellipse_50%_44%_at_18%_64%,rgb(108_97_221/0.10)_0%,transparent_58%)]" />
// // //         <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.13)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000,transparent_80%)]" />
// // //       </div>

// // //       {/* ════════════ BODY ════════════
// // //           Hard gutters: px-5 (20px) → sm:px-8 (32px) → lg:px-12 (48px).
// // //           These are *minimums*; they apply at every breakpoint above
// // //           their threshold and cannot be lost to a parent. */}
// // //       <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-y-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-x-10 lg:px-12 lg:pb-0 lg:pt-0 lg:min-h-[calc(100dvh-var(--nav-h,88px))]">
// // //         {/* ─────────── LEFT · copy ─────────── */}
// // //         <div className="flex flex-col items-start gap-6 lg:gap-7 lg:py-20">
// // //           <HeroPill revealIndex={0} />

// // //           <h1
// // //             className={`${styles.reveal} font-display text-[clamp(2.6rem,6.4vw,5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-primary`}
// // //             style={{ "--i": 1 } as React.CSSProperties}
// // //           >
// // //             Where Discipline
// // //             <br />
// // //             Meets <span className="text-accent">Rank.</span>
// // //           </h1>

// // //           <p
// // //             className={`${styles.reveal} max-w-[440px] text-[15px] leading-[1.7] text-secondary sm:text-base`}
// // //             style={{ "--i": 2 } as React.CSSProperties}
// // //           >
// // //             Expert faculty, personalised study plans, and a proven record of
// // //             top rankers — premier IIT-JEE &amp; NEET coaching, built on a
// // //             foundation strong enough to get you there.
// // //           </p>

// // //           {/* CTAs — full-width on mobile (thumb-friendly), w-fit from sm: up.
// // //               Each button explicitly w-fit so it sizes to its content; this
// // //               kills the stretched-bar look that hid the primary label. */}
// // //           <div
// // //             className={`${styles.reveal} flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap`}
// // //             style={{ "--i": 3 } as React.CSSProperties}
// // //           >
// // //             <a
// // //               href="#counselling"
// // //               className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand px-6 py-3.5 text-[15px] font-bold text-brand-ink shadow-[0_10px_30px_-10px_rgb(198_246_36/0.45)] transition-[transform,box-shadow,background-color] duration-base ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_16px_40px_-10px_rgb(198_246_36/0.6)] sm:w-fit"
// // //             >
// // //               Book a Free Counselling
// // //               <ArrowRight
// // //                 className="size-4 transition-transform duration-base ease-out group-hover:translate-x-1"
// // //                 strokeWidth={2.6}
// // //               />
// // //             </a>
// // //             <a
// // //               href="#courses"
// // //               className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-border-subtle bg-elevated/40 px-6 py-3.5 text-[15px] font-semibold text-primary backdrop-blur-md transition-[transform,border-color,background-color] duration-base ease-out hover:-translate-y-0.5 hover:border-border-default hover:bg-elevated sm:w-fit"
// // //             >
// // //               Explore Courses
// // //               <Plus
// // //                 className="size-4 text-muted-fg transition-[transform,color] duration-base ease-out group-hover:rotate-90 group-hover:text-brand"
// // //                 strokeWidth={2.6}
// // //               />
// // //             </a>
// // //           </div>

// // //           <div
// // //             className={`${styles.reveal} flex items-center gap-3.5`}
// // //             style={{ "--i": 4 } as React.CSSProperties}
// // //           >
// // //             <div className="flex">
// // //               {[0, 1, 2, 3].map((i) => (
// // //                 <span
// // //                   key={i}
// // //                   className="-ml-2 size-9 rounded-full border-2 border-base bg-gradient-to-br from-subtle to-muted first:ml-0"
// // //                   aria-hidden
// // //                 />
// // //               ))}
// // //             </div>
// // //             <div className="flex flex-col gap-0.5">
// // //               <span
// // //                 className="flex gap-0.5 text-warning"
// // //                 aria-label="4.9 out of 5 stars"
// // //               >
// // //                 {[0, 1, 2, 3, 4].map((i) => (
// // //                   <Star key={i} className="size-3.5 fill-current" />
// // //                 ))}
// // //               </span>
// // //               <span className="text-[12.5px] text-muted-fg">
// // //                 <strong className="font-semibold text-primary">4.9/5</strong>
// // //                 {" · Rated by 1000+ students & parents"}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ─────────── RIGHT · image plate ───────────
// // //             Mobile: portrait 4/5 card, centered.
// // //             Desktop: LANDSCAPE 1.45:1 frame, vertically centered in
// // //             column, capped at 600px tall. This shape preserves
// // //             ~97% of the source photo — full classroom visible. */}
// // //         <div className="relative w-full self-center py-0 lg:py-12">
// // //           <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[480px] lg:aspect-[1.45/1] lg:mx-0 lg:max-h-[600px] lg:max-w-none">
// // //             <svg
// // //               aria-hidden
// // //               viewBox="0 0 600 600"
// // //               className={`${styles.spinSlow} pointer-events-none absolute left-1/2 top-1/2 z-0 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2`}
// // //             >
// // //               <circle cx="300" cy="300" r="270" fill="none" stroke="rgb(198 246 36 / 0.08)" strokeWidth="1" />
// // //               <circle cx="300" cy="300" r="200" fill="none" stroke="rgb(198 246 36 / 0.11)" strokeWidth="1" strokeDasharray="4 10" />
// // //               <circle cx="300" cy="300" r="134" fill="none" stroke="rgb(108 97 221 / 0.14)" strokeWidth="1" />
// // //             </svg>

// // //             <div
// // //               aria-hidden
// // //               className={`${styles.breathe} pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgb(198_246_36/0.16)_0%,transparent_70%)] blur-[10px]`}
// // //             />

// // //             <div className={`${styles.plateReveal} absolute inset-0 z-[2]`}>
// // //               {/* MOBILE plate */}
// // //               <div className="lg:hidden">
// // //                 <div className={`${styles.plateMobile} absolute inset-0 overflow-hidden rounded-2xl`}>
// // //                   <Image
// // //                     src="/hero--image.png"
// // //                     alt="Kota Academy students in a classroom"
// // //                     fill
// // //                     priority
// // //                     sizes="(max-width: 1024px) 90vw, 480px"
// // //                     className="object-cover object-[42%_18%]"
// // //                   />
// // //                 </div>
// // //                 <div aria-hidden className={`${styles.grade} ${styles.plateMobile} absolute inset-0 rounded-2xl`} />
// // //                 <div aria-hidden className={`${styles.vignette} ${styles.plateMobile} absolute inset-0 rounded-2xl`} />
// // //               </div>

// // //               {/* DESKTOP plate — landscape 1.45:1, shows the full classroom */}
// // //               <div className="hidden lg:block">
// // //                 <div className={`${styles.plateDesktop} absolute inset-0 overflow-hidden`}>
// // //                   <Image
// // //                     src="/hero--image.png"
// // //                     alt="Kota Academy students in a classroom"
// // //                     fill
// // //                     priority
// // //                     sizes="700px"
// // //                     className="object-cover object-[50%_50%]"
// // //                   />
// // //                 </div>
// // //                 <div aria-hidden className={`${styles.grade} ${styles.plateDesktop} absolute inset-0`} />
// // //                 <div aria-hidden className={`${styles.vignette} ${styles.plateDesktop} absolute inset-0`} />
// // //               </div>
// // //             </div>

// // //             {/* ── Floating cards — PARKED. Repositioned for the
// // //                  landscape frame. Switch on later by uncommenting. ──
// // //             <div className="absolute right-3 top-4 z-10 flex min-w-[148px] flex-col gap-0.5 rounded-xl border border-border-default bg-overlay/60 px-4 py-3 backdrop-blur-xl shadow-[inset_0_1px_0_rgb(198_246_36/0.22)]">
// // //               <span className="font-display text-2xl font-extrabold leading-none text-accent">AIR 47</span>
// // //               <span className="text-[11px] font-medium tracking-[0.04em] text-muted-fg">IIT-JEE Advanced 2024</span>
// // //             </div>
// // //             <div className="absolute bottom-4 left-3 z-10 flex items-center gap-2.5 rounded-xl border border-border-default bg-overlay/60 px-4 py-3 backdrop-blur-xl shadow-[inset_0_1px_0_rgb(198_246_36/0.2)]">
// // //               <div className="grid size-9 place-items-center rounded-lg bg-brand-subtle">
// // //                 <Trophy className="size-4 text-accent" />
// // //               </div>
// // //               <div>
// // //                 <div className="font-display text-xl font-extrabold leading-none text-primary">5500+</div>
// // //                 <div className="text-[11px] text-muted-fg">Students Mentored</div>
// // //               </div>
// // //             </div>
// // //             ── end parked cards ── */}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ════════════ STATS BAR ════════════ */}
// // //       <div className="relative z-10 grid grid-cols-2 border-t border-border-subtle bg-[rgb(255_255_255/0.02)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5">
// // //         {STATS.map((stat, i) => (
// // //           <div
// // //             key={stat.label}
// // //             className={`${styles.reveal} flex items-center gap-3 border-border-subtle px-5 py-5 sm:px-6 [&:not(:nth-child(2n))]:border-r [&:nth-child(n+3)]:border-t sm:[&:not(:nth-child(3n))]:border-r sm:[&:nth-child(n+4)]:border-t lg:[&]:border-r lg:[&:nth-child(n+1)]:border-t-0 lg:last:[&]:border-r-0`}
// // //             style={{ "--i": 5 + i } as React.CSSProperties}
// // //           >
// // //             <stat.Icon className="size-6 shrink-0 text-muted-fg" strokeWidth={1.75} aria-hidden />
// // //             <div className="flex flex-col gap-0.5">
// // //               <span className="font-display text-2xl font-extrabold leading-none text-accent">
// // //                 {stat.value}
// // //               </span>
// // //               <span className="text-[12px] leading-tight text-muted-fg">
// // //                 {stat.label}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // const STATS = [
// // //   { Icon: Trophy, value: "17+", label: "Years of Excellence" },
// // //   { Icon: Users, value: "5500+", label: "Students Mentored" },
// // //   { Icon: GraduationCap, value: "1500+", label: "Selections in Top Institutes" },
// // //   { Icon: BookOpen, value: "45+", label: "Expert Faculty" },
// // //   { Icon: Smile, value: "95%", label: "Parents Satisfaction" },
// // // ] as const;

// // // "use client";

// // // import Image from "next/image";
// // // import {
// // //   GraduationCap,
// // //   Users,
// // //   Trophy,
// // //   BookOpen,
// // //   Smile,
// // //   ArrowRight,
// // //   Plus,
// // //   Star,
// // // } from "lucide-react";
// // // import { HeroPill } from "./HeroPill";
// // // import s from "./hero.module.css";

// // // /**
// // //  * HeroSection — Kota Academy landing hero. (v4)
// // //  *
// // //  * v4 changes:
// // //  *  - Layout-critical rules moved into the CSS module so they
// // //  *    can't fail silently. Gutters use !important to guarantee.
// // //  *  - Background: deep navy + violet-blue glow around the image.
// // //  *  - Tablet image properly centered; desktop fills the column.
// // //  *  - Buttons: gradient fill, 1px ring, inset highlight.
// // //  *
// // //  * Page wrapper must be MINIMAL:
// // //  *    <main className="min-h-screen bg-base text-primary">
// // //  *      <HeroSection />
// // //  *    </main>
// // //  * No padding on <main>, no competing background.
// // //  */
// // // export function HeroSection() {
// // //   return (
// // //     <section className={`${s.section} relative w-full overflow-hidden  `} style={{paddingBottom:"80px"}}>
// // //       {/* Faint dot-grid on top of the navy+violet background */}
// // //       <div
// // //         aria-hidden
// // //         className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgb(255_255_255/0.10)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000,transparent_80%)]"
// // //       />

// // //       <div className={`${s.shell} relative z-10`}>
// // //         <div className={s.body}>
// // //           {/* ─────────── LEFT · copy ─────────── */}
// // //           <div className={s.left}>
// // //             <HeroPill revealIndex={0} />

// // //             <h1
// // //               className={`${s.reveal} font-display text-[clamp(2.6rem,6.4vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.02em] text-primary`}
// // //               style={{ "--i": 1 } as React.CSSProperties}
// // //             >
// // //               Where Discipline
// // //               <br />
// // //               Meets <span className="text-accent">Rank.</span>
// // //             </h1>

// // //             <p
// // //               className={`${s.reveal} max-w-[440px] text-[15px] leading-[1.7] text-secondary sm:text-base`}
// // //               style={{ "--i": 2 } as React.CSSProperties}
// // //             >
// // //               Expert faculty, personalised study plans, and a proven record of
// // //               top rankers — premier IIT-JEE &amp; NEET coaching, built on a
// // //               foundation strong enough to get you there.
// // //             </p>

// // //             <div
// // //               className={`${s.reveal} ${s.ctas}`}
// // //               style={{ "--i": 3 } as React.CSSProperties}
// // //             >
// // //               <a href="#counselling" className={`${s.btn} ${s.btnPrimary} group`}>
// // //                 Book a Free Counselling
// // //                 <ArrowRight className="size-4" strokeWidth={2.6} />
// // //               </a>
// // //               <a href="#courses" className={`${s.btn} ${s.btnGhost} group`}>
// // //                 Explore Courses
// // //                 <Plus className="size-4" strokeWidth={2.6} />
// // //               </a>
// // //             </div>

// // //             <div
// // //               className={`${s.reveal} flex items-center gap-3.5`}
// // //               style={{ "--i": 4 } as React.CSSProperties}
// // //             >
// // //               <div className="flex">
// // //                 {[0, 1, 2, 3].map((i) => (
// // //                   <span
// // //                     key={i}
// // //                     className="-ml-2 size-9 rounded-full border-2 border-base bg-gradient-to-br from-subtle to-muted first:ml-0"
// // //                     aria-hidden
// // //                   />
// // //                 ))}
// // //               </div>
// // //               <div className="flex flex-col gap-0.5">
// // //                 <span
// // //                   className="flex gap-0.5 text-warning"
// // //                   aria-label="4.9 out of 5 stars"
// // //                 >
// // //                   {[0, 1, 2, 3, 4].map((i) => (
// // //                     <Star key={i} className="size-3.5 fill-current" />
// // //                   ))}
// // //                 </span>
// // //                 <span className="text-[12.5px] text-muted-fg">
// // //                   <strong className="font-semibold text-primary">4.9/5</strong>
// // //                   {" · Rated by 1000+ students & parents"}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* ─────────── RIGHT · image plate ─────────── */}
// // //           <div className={s.right}>
// // //             <div className={s.frame}>
// // //               <svg
// // //                 aria-hidden
// // //                 viewBox="0 0 600 600"
// // //                 className={s.arcs}
// // //               >
// // //                 <circle cx="300" cy="300" r="270" fill="none" stroke="rgb(198 246 36 / 0.08)" strokeWidth="1" />
// // //                 <circle cx="300" cy="300" r="200" fill="none" stroke="rgb(198 246 36 / 0.11)" strokeWidth="1" strokeDasharray="4 10" />
// // //                 <circle cx="300" cy="300" r="134" fill="none" stroke="rgb(108 97 221 / 0.18)" strokeWidth="1" />
// // //               </svg>

// // //               <div aria-hidden className={s.glowPool} />

// // //               <div className={`${s.plate} ${s.plateReveal}`}>
// // //                 {/* The Image is wrapped in a positioned overflow:hidden
// // //                     container that carries the mask + border-radius.
// // //                     Next/Image fill=true requires this. */}
// // //                 <div className={s.plateImg}>
// // //                   <Image
// // //                     src="/hero--image.webp"
// // //                     alt="Kota Academy students in a classroom"
// // //                     fill
// // //                     priority
// // //                     sizes="(max-width: 1024px) 90vw, 700px"
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <div aria-hidden className={s.plateGrade} />
// // //                 <div aria-hidden className={s.plateVignette} />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ════════════ STATS BAR ════════════ */}
// // //       {/* <div className="relative z-10 grid grid-cols-2 border-t border-border-subtle bg-[rgb(255_255_255/0.02)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5">
// // //         {STATS.map((stat, i) => (
// // //           <div
// // //             key={stat.label}
// // //             className={`${s.reveal} flex items-center gap-3 border-border-subtle px-5 py-5 sm:px-6 [&:not(:nth-child(2n))]:border-r [&:nth-child(n+3)]:border-t sm:[&:not(:nth-child(3n))]:border-r sm:[&:nth-child(n+4)]:border-t lg:[&]:border-r lg:[&:nth-child(n+1)]:border-t-0 lg:last:[&]:border-r-0`}
// // //             style={{ "--i": 5 + i } as React.CSSProperties}
// // //           >
// // //             <stat.Icon className="size-6 shrink-0 text-muted-fg" strokeWidth={1.75} aria-hidden />
// // //             <div className="flex flex-col gap-0.5">
// // //               <span className="font-display text-2xl font-extrabold leading-none text-accent">
// // //                 {stat.value}
// // //               </span>
// // //               <span className="text-[12px] leading-tight text-muted-fg">
// // //                 {stat.label}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div> */}
      
// // //     </section>
// // //   );
// // // }

// // // const STATS = [
// // //   { Icon: Trophy, value: "17+", label: "Years of Excellence" },
// // //   { Icon: Users, value: "5500+", label: "Students Mentored" },
// // //   { Icon: GraduationCap, value: "1500+", label: "Selections in Top Institutes" },
// // //   { Icon: BookOpen, value: "45+", label: "Expert Faculty" },
// // //   { Icon: Smile, value: "95%", label: "Parents Satisfaction" },
// // // ] as const;

// // "use client";

// // import Image from "next/image";
// // import { ArrowRight, Plus } from "lucide-react";
// // import {
// //   motion,
// //   MotionConfig,
// //   useScroll,
// //   useTransform,
// //   useReducedMotion,
// //   type Variants,
// // } from "framer-motion";
// // import { useRef } from "react";

// // const EXPO = [0.16, 1, 0.3, 1] as const;

// // /* Drop the treated photo in /public. Swap this one src to change the hero image. */
// // const HERO_IMAGE = "/hero-classroom.webp";

// // const container: Variants = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
// // };
// // const fadeUp: Variants = {
// //   hidden: { opacity: 0, y: 22 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EXPO } },
// // };

// // export function HeroSection() {
// //   const sectionRef = useRef<HTMLElement | null>(null);
// //   const reduce = useReducedMotion();

// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start start", "end start"],
// //   });
// //   const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
// //   const imgY = reduce ? "0%" : rawY;

// //   return (
// //     <MotionConfig reducedMotion="user">
// //       <section
// //         ref={sectionRef}
// //         id="home"
// //         className="relative isolate w-full overflow-hidden bg-[#0B1B33] pt-[88px] sm:pt-24 lg:pt-32"
// //       >
// //         {/* ── ambient: navy + a single lime glow + faint dot grid (no violet) ── */}
// //         <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
// //           <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_55%_at_82%_38%,rgba(181,255,61,0.10),transparent_62%)]" />
// //           <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_45%_at_50%_110%,rgba(4,9,20,0.55),transparent_72%)]" />
// //           <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_55%_50%_at_28%_26%,#000,transparent_78%)]" />
// //         </div>

// //         {/* ── desktop image plate — bleeds off the right viewport edge ── */}
// //         <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[53%] lg:block xl:w-[52%]">
// //           <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_60%_at_58%_44%,rgba(181,255,61,0.12),transparent_64%)] blur-[6px]" />
// //           <div className="absolute inset-0 overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,#000_24%,#000_100%),linear-gradient(to_bottom,#000_0%,#000_74%,transparent_100%)] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_24%,#000_100%),linear-gradient(to_bottom,#000_0%,#000_74%,transparent_100%)]">
// //             <motion.div style={{ y: imgY }} className="absolute inset-[-7%]">
// //               <Image
// //                 src={HERO_IMAGE}
// //                 alt="Kota Academy students in class"
// //                 fill
// //                 priority
// //                 sizes="55vw"
// //                 className="object-cover object-[56%_38%]"
// //               />
// //             </motion.div>
// //             {/* blend the left edge into navy + darken the bottom for the strip */}
// //             <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B1B33_0%,rgba(11,27,51,0.2)_28%,transparent_54%)]" />
// //             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,27,51,0.35)_0%,transparent_22%,transparent_64%,rgba(11,27,51,0.6)_100%)]" />
// //           </div>
// //         </div>

// //         {/* ── content shell ── */}
// //         <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col px-5 pb-24 sm:px-8 lg:min-h-[calc(100svh-var(--nav-h,96px))] lg:justify-center lg:px-12 lg:pb-32">
// //           <motion.div
// //             variants={container}
// //             initial="hidden"
// //             animate="visible"
// //             className="flex w-full max-w-[560px] flex-col items-start gap-6 lg:gap-7"
// //           >
// //             {/* eyebrow — the single hero label */}
// //             <motion.a
// //               variants={fadeUp}
// //               href="#results"
// //               className="group inline-flex items-center gap-2.5 rounded-full border border-[#B5FF3D]/25 bg-[#0B1B33]/60 py-1 pl-1 pr-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#B5FF3D]/45"
// //             >
// //               <span className="rounded-full bg-[#B5FF3D] px-2.5 py-1 text-[11px] font-extrabold uppercase leading-none tracking-[0.06em] text-[#0A2410]">
// //                 Est. 2017
// //               </span>
// //               <span className="text-[12.5px] font-medium leading-none text-[#C7D2E4]">
// //                 IIT-JEE · NEET · Greater Noida
// //               </span>
// //               <ArrowRight
// //                 className="h-3.5 w-3.5 shrink-0 text-[#8FA0BC] transition group-hover:translate-x-0.5 group-hover:text-[#B5FF3D]"
// //                 strokeWidth={2.5}
// //               />
// //             </motion.a>

// //             {/* headline */}
// //             <motion.h1
// //               variants={fadeUp}
// //               className="text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.025em] text-white"
// //             >
// //               Where Discipline
// //               <br />
// //               Meets <span className="text-[#B5FF3D]">Rank.</span>
// //             </motion.h1>

// //             {/* subtext — honest, ≤20 words */}
// //             <motion.p
// //               variants={fadeUp}
// //               className="max-w-[440px] text-[15px] leading-[1.7] text-[#AEB9CA] sm:text-base"
// //             >
// //               Expert faculty, small batches, and disciplined preparation for
// //               IIT-JEE &amp; NEET — coaching built to get you there.
// //             </motion.p>

// //             {/* CTAs */}
// //             <motion.div
// //               variants={fadeUp}
// //               className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
// //             >
// //               <a
// //                 href="#counselling"
// //                 className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(135deg,#C8FF55_0%,#9BE82A_50%,#5FB016_100%)] px-6 py-3.5 text-[15px] font-extrabold text-[#0A2410] shadow-[0_14px_34px_-10px_rgba(95,176,22,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-10px_rgba(95,176,22,0.62)] active:scale-[0.98] sm:w-auto"
// //               >
// //                 Book a Free Counselling
// //                 <ArrowRight
// //                   className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
// //                   strokeWidth={2.5}
// //                 />
// //               </a>
// //               <a
// //                 href="#courses"
// //                 className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] active:scale-[0.98] sm:w-auto"
// //               >
// //                 Explore Courses
// //                 <Plus
// //                   className="h-[18px] w-[18px] text-[#8FA0BC] transition duration-300 group-hover:rotate-90 group-hover:text-[#B5FF3D]"
// //                   strokeWidth={2.5}
// //                 />
// //               </a>
// //             </motion.div>
// //           </motion.div>

// //           {/* ── mobile image — in-flow contained plate ── */}
// //           <motion.div
// //             initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8, ease: EXPO, delay: 0.3 }}
// //             className="relative mx-auto mt-10 aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-3xl ring-1 ring-inset ring-white/10 lg:hidden"
// //           >
// //             <Image
// //               src={HERO_IMAGE}
// //               alt="Kota Academy students in class"
// //               fill
// //               priority
// //               sizes="90vw"
// //               className="object-cover object-[56%_32%]"
// //             />
// //             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,27,51,0.25),transparent_30%,transparent_62%,rgba(11,27,51,0.5))]" />
// //             <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_88%_at_50%_45%,transparent_55%,rgba(4,9,20,0.4))]" />
// //           </motion.div>
// //         </div>
// //       </section>
// //     </MotionConfig>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { ArrowRight, Plus, Star } from "lucide-react";
// import { HeroPill } from "./HeroPill";
// import s from "./hero.module.css";

// /**
//  * HeroSection — Kota Academy landing hero (v5).
//  *
//  * Same design language as v4 (CSS-module owns layout bedrock,
//  * plate + arcs + glow image treatment). Refined:
//  *   - Brand-true atmosphere: navy + lime, violet removed.
//  *   - Full-width image plate on mobile (≈90% of viewport).
//  *   - Recalibrated headline scale + section nav-clearance.
//  *
//  * Page wrapper must stay MINIMAL (no padding / competing bg):
//  *   <main className="bg-base text-primary"><HeroSection /></main>
//  * Define --nav-h globally (e.g. 90px) so the section clears the navbar.
//  */
// export function HeroSection() {
//   return (
//     <section className={`${s.section} relative w-full overflow-hidden`}>
//       {/* faint dot-grid over the navy + lime background */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_28%,#000,transparent_80%)]"
//       />

//       <div className={`${s.shell} relative z-10`}>
//         <div className={s.body}>
//           {/* ─────────── LEFT · copy ─────────── */}
//           <div className={s.left}>
//             <HeroPill revealIndex={0} />

//             <h1
//               className={`${s.reveal} font-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.025em] text-primary`}
//               style={{ "--i": 1 } as React.CSSProperties}
//             >
//               Where Discipline
//               <br />
//               Meets <span className="text-accent">Rank.</span>
//             </h1>

//             <p
//               className={`${s.reveal} max-w-[440px] text-[15px] leading-[1.7] text-secondary sm:text-base`}
//               style={{ "--i": 2 } as React.CSSProperties}
//             >
//               Expert faculty, personalised study plans, and a proven record of
//               top rankers — premier IIT-JEE &amp; NEET coaching, built on a
//               foundation strong enough to get you there.
//             </p>

//             <div
//               className={`${s.reveal} ${s.ctas}`}
//               style={{ "--i": 3 } as React.CSSProperties}
//             >
//               <a href="#counselling" className={`${s.btn} ${s.btnPrimary} group`}>
//                 Book a Free Counselling
//                 <ArrowRight className="size-4" strokeWidth={2.6} />
//               </a>
//               <a href="#courses" className={`${s.btn} ${s.btnGhost} group`}>
//                 Explore Courses
//                 <Plus className="size-4" strokeWidth={2.6} />
//               </a>
//             </div>

//             <div
//               className={`${s.reveal} flex items-center gap-3.5`}
//               style={{ "--i": 4 } as React.CSSProperties}
//             >
//               <div className="flex">
//                 {[0, 1, 2, 3].map((i) => (
//                   <span
//                     key={i}
//                     className="-ml-2 size-9 rounded-full border-2 border-base bg-gradient-to-br from-subtle to-muted first:ml-0"
//                     aria-hidden
//                   />
//                 ))}
//               </div>
//               <div className="flex flex-col gap-0.5">
//                 <span
//                   className="flex gap-0.5 text-warning"
//                   aria-label="4.7 out of 5 stars"
//                 >
//                   {[0, 1, 2, 3, 4].map((i) => (
//                     <Star key={i} className="size-3.5 fill-current" />
//                   ))}
//                 </span>
//                 <span className="text-[12.5px] text-muted-fg">
//                   <strong className="font-semibold text-primary">4.7/5</strong>
//                   {" · Rated on Google"}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ─────────── RIGHT · image plate ─────────── */}
//           <div className={s.right}>
//             <div className={s.frame}>
//               <svg aria-hidden viewBox="0 0 600 600" className={s.arcs}>
//                 <circle cx="300" cy="300" r="270" fill="none" stroke="rgb(181 255 61 / 0.08)" strokeWidth="1" />
//                 <circle cx="300" cy="300" r="200" fill="none" stroke="rgb(181 255 61 / 0.11)" strokeWidth="1" strokeDasharray="4 10" />
//                 <circle cx="300" cy="300" r="134" fill="none" stroke="rgb(181 255 61 / 0.10)" strokeWidth="1" />
//               </svg>

//               <div aria-hidden className={s.glowPool} />

//               <div className={`${s.plate} ${s.plateReveal}`}>
//                 {/* Next/Image fill needs a positioned, overflow-hidden wrapper
//                     that carries the mask + radius. */}
//                 <div className={s.plateImg}>
//                   <Image
//                     src="/hero--image.webp"
//                     alt="Kota Academy students in a classroom"
//                     fill
//                     priority
//                     sizes="(max-width: 1024px) 90vw, 700px"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div aria-hidden className={s.plateGrade} />
//                 <div aria-hidden className={s.plateVignette} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { ArrowRight, Plus, Star } from "lucide-react";
import { HeroPill } from "./HeroPill";
import s from "./hero.module.css";

/**
 * HeroSection — Kota Academy landing hero (v5).
 *
 * Same design language as v4 (CSS-module owns layout bedrock,
 * plate + arcs + glow image treatment). Refined:
 *   - Brand-true atmosphere: navy + lime, violet removed.
 *   - Full-width image plate on mobile (≈90% of viewport).
 *   - Recalibrated headline scale + section nav-clearance.
 *
 * Page wrapper must stay MINIMAL (no padding / competing bg):
 *   <main className="bg-base text-primary"><HeroSection /></main>
 * Define --nav-h globally (e.g. 90px) so the section clears the navbar.
 */
export function HeroSection() {
  return (
    <section className={`${s.section} relative w-full overflow-hidden`}>
      {/* faint dot-grid over the navy + lime background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_28%,#000,transparent_80%)]"
      />

      <div className={`${s.shell} relative z-10`}>
        <div className={s.body}>
          {/* ─────────── LEFT · copy ─────────── */}
          <div className={s.left}>
            <HeroPill revealIndex={0} />

            <h1
              className={`${s.reveal} font-display text-[clamp(2.4rem,5.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.025em] text-primary`}
              style={{ "--i": 1 } as React.CSSProperties}
            >
              Where Discipline
              <br />
              Meets <span className="text-accent">Rank.</span>
            </h1>

            <p
              className={`${s.reveal} max-w-[440px] text-[15px] leading-[1.7] text-secondary sm:text-base`}
              style={{ "--i": 2 } as React.CSSProperties}
            >
              Expert faculty, personalised study plans, and a proven record of
              top rankers — premier IIT-JEE &amp; NEET coaching, built on a
              foundation strong enough to get you there.
            </p>

            <div
              className={`${s.reveal} ${s.ctas}`}
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <a href="#counselling" className={`${s.btn} ${s.btnPrimary} group`}>
                Book a Free Counselling
                <ArrowRight className="size-4" strokeWidth={2.6} />
              </a>
              <a href="#courses" className={`${s.btn} ${s.btnGhost} group`}>
                Explore Courses
                <Plus className="size-4" strokeWidth={2.6} />
              </a>
            </div>

            <div
              className={`${s.reveal} flex items-center gap-3.5`}
              style={{ "--i": 4 } as React.CSSProperties}
            >
              <div className="flex">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="-ml-2 size-9 rounded-full border-2 border-base bg-gradient-to-br from-subtle to-muted first:ml-0"
                    aria-hidden
                  />
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="flex gap-0.5 text-warning"
                  aria-label="4.7 out of 5 stars"
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-[12.5px] text-muted-fg">
                  <strong className="font-semibold text-primary">4.7/5</strong>
                  {" · Rated on Google"}
                </span>
              </div>
            </div>
          </div>

          {/* ─────────── RIGHT · image plate ─────────── */}
          <div className={s.right}>
            <div className={s.frame}>
              <svg aria-hidden viewBox="0 0 600 600" className={s.arcs}>
                <circle cx="300" cy="300" r="270" fill="none" stroke="rgb(181 255 61 / 0.08)" strokeWidth="1" />
                <circle cx="300" cy="300" r="200" fill="none" stroke="rgb(181 255 61 / 0.11)" strokeWidth="1" strokeDasharray="4 10" />
                <circle cx="300" cy="300" r="134" fill="none" stroke="rgb(181 255 61 / 0.10)" strokeWidth="1" />
              </svg>

              <div aria-hidden className={s.glowPool} />

              <div className={`${s.plate} ${s.plateReveal}`}>
                {/* Next/Image fill needs a positioned, overflow-hidden wrapper
                    that carries the mask + radius. */}
                <div className={s.plateImg}>
                  {/* <Image
                    src="/cl-3.png"
                    alt="Kota Academy students in a classroom"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 700px"
                    className="object-cover"
                  /> */}
                  <Image
  src="/cl-5.png"
  alt="Kota Academy students in a classroom"
  fill
  priority
  sizes="(max-width: 1024px) 92vw, 760px"
  className="object-cover"
/>
                </div>
                <div aria-hidden className={s.plateGrade} />
                <div aria-hidden className={s.plateVignette} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}