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
//               className={`${s.reveal} font-display text-[clamp(2.4rem,5.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.025em] text-primary`}
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
//                   {/* <Image
//                     src="/cl-3.png"
//                     alt="Kota Academy students in a classroom"
//                     fill
//                     priority
//                     sizes="(max-width: 1024px) 90vw, 700px"
//                     className="object-cover"
//                   /> */}
//                   <Image
//   src="/cl-5.png"
//   alt="Kota Academy students in a classroom"
//   fill
//   priority
//   sizes="(max-width: 1024px) 92vw, 760px"
//   className="object-cover"
// />
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





// "use client";

// import Image from "next/image";
// import { useRef } from "react";
// import {
//   motion,
//   MotionConfig,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   type Variants,
// } from "framer-motion";
// import { ArrowRight, Plus, Star } from "lucide-react";

// /* ============================================================================
//    HeroSection — Kota Academy (v8, single-file build)
//    v8 changes:
//    · Desktop image is now a SECTION-LEVEL BACKDROP — absolute, full hero
//      height, bleeding to the right viewport edge, melting left into the copy.
//      No more floating plate with navy gaps above/below.
//    · Crop knobs (zoom + focal point) cut the duplicated subject out of the
//      visible window instead of half-hiding her behind a fade.
//    · Headline locked to exactly two lines: "Where Discipline / Meets Rank."
//    · Nav clearance safety (+20px) so the pill never slips under the navbar.
//    · Tablet image height capped.
//    ----------------------------------------------------------------------------
//    SWAP POINTS:
//    · BATCH_LINE — demo batch date
//    · AVATARS    — add `src` per entry when face crops are ready
//    · IMG        — src, focal points, zoom per breakpoint (crop tuning knobs)
// ============================================================================ */

// /* ----------------------------- swap constants ----------------------------- */

// const BATCH_LINE = {
//   text: "New JEE / NEET batches start 1 July",
//   sub: "Limited seats · max 30 per batch",
// };

// type Avatar = { initials: string; src?: string };
// const AVATARS: Avatar[] = [
//   { initials: "AR" }, // ← add src: "/images/students/ar.jpg" when ready
//   { initials: "SK" },
//   { initials: "PV" },
//   { initials: "NM" },
// ];

// const IMG = {
//   src: "/cl-5.png",
//   alt: "Kota Academy students in a classroom",
//   /* ---- crop tuning knobs ----
//      posX biases which slice of the photo is visible (lower = more left).
//      zoom enlarges the photo inside its window; raise it to push unwanted
//      content (the duplicated subject on the right) out of the crop. */
//   desktop: { pos: "10% 42%", zoom: 1.18, origin: "22% 50%" },
//   mobile: { pos: "42% 36%", zoom: 1.06, origin: "45% 40%" },
// };

// /* --------------------------------- palette -------------------------------- */

// const INK_900 = "#070F22";
// const INK_850 = "#0A1730";
// const LIME = "#B5FF3D";
// const GOLD = "#F5B642";
// const TEXT_PRIMARY = "#F4F7FB";
// const TEXT_SECONDARY = "rgba(222,231,244,0.74)";
// const TEXT_MUTED = "rgba(222,231,244,0.5)";

// /* --------------------------------- motion --------------------------------- */

// const EXPO = [0.16, 1, 0.3, 1] as const;

// const stagger: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EXPO } },
// };

// const wordRise: Variants = {
//   hidden: { y: "110%" },
//   visible: { y: "0%", transition: { duration: 0.7, ease: EXPO } },
// };

// /* ================================ component ================================ */

// export function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const reduce = useReducedMotion();

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const plateY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         ref={sectionRef}
//         className="relative w-full overflow-hidden"
//         style={{
//           paddingTop: "calc(var(--nav-h, 90px) + 20px)",
//           paddingBottom: 72,
//           background: [
//             `radial-gradient(ellipse 70% 65% at 80% 40%, rgba(181,255,61,0.10) 0%, rgba(181,255,61,0.05) 26%, rgba(11,27,51,0.30) 56%, transparent 78%)`,
//             `radial-gradient(ellipse 48% 55% at 12% 32%, rgba(181,255,61,0.045) 0%, transparent 60%)`,
//             `radial-gradient(ellipse 100% 42% at 50% 104%, rgba(6,14,32,0.45) 0%, transparent 72%)`,
//             `linear-gradient(180deg, ${INK_900} 0%, ${INK_850} 100%)`,
//           ].join(", "),
//         }}
//       >
//         {/* faint dot-grid atmosphere */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
//             backgroundSize: "46px 46px",
//             opacity: 0.5,
//             maskImage:
//               "radial-gradient(ellipse 60% 50% at 50% 28%, #000, transparent 80%)",
//             WebkitMaskImage:
//               "radial-gradient(ellipse 60% 50% at 50% 28%, #000, transparent 80%)",
//           }}
//         />

//         {/* ════════ DESKTOP IMAGE BACKDROP — full height, right-anchored ════════ */}
//         <div
//           aria-hidden={false}
//           className="absolute bottom-0 right-0 top-0 z-0 hidden lg:block"
//           style={{ width: "min(58vw, 1080px)" }}
//         >
//           {/* glow pool living inside the backdrop */}
//           <motion.div
//             aria-hidden
//             className="pointer-events-none absolute left-[42%] top-1/2 -z-10 h-[64%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
//             style={{
//               filter: "blur(16px)",
//               background:
//                 "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(181,255,61,0.13) 0%, rgba(181,255,61,0.05) 35%, transparent 70%)",
//             }}
//             animate={
//               reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
//             }
//             transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//           />

//           <div className="absolute inset-0" style={maskStyle(MASK_DESKTOP)}>
//             {/* parallax drift */}
//             <motion.div className="absolute inset-0" style={{ y: plateY }}>
//               {/* crop window: zoom pushes the duplicated subject out of frame */}
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   transform: `scale(${IMG.desktop.zoom})`,
//                   transformOrigin: IMG.desktop.origin,
//                 }}
//               >
//                 <Image
//                   src={IMG.src}
//                   alt={IMG.alt}
//                   fill
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 60vw"
//                   className="object-cover"
//                   style={{ objectPosition: IMG.desktop.pos }}
//                 />
//               </div>
//             </motion.div>

//             {/* grading — binds the photo to the ink */}
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-0"
//               style={{
//                 background: [
//                   /* long left wash into the copy column */
//                   "linear-gradient(90deg, rgba(7,15,34,0.97) 0%, rgba(7,15,34,0.78) 14%, rgba(7,15,34,0.34) 34%, transparent 56%)",
//                   /* gentle top + bottom anchoring */
//                   "linear-gradient(180deg, rgba(0,2,11,0.5) 0%, transparent 24%, transparent 64%, rgba(0,2,11,0.66) 100%)",
//                   /* lime kiss on the subjects */
//                   "radial-gradient(ellipse 70% 55% at 58% 44%, rgba(181,255,61,0.07) 0%, transparent 62%)",
//                 ].join(", "),
//               }}
//             />
//           </div>
//         </div>

//         {/* ════════════════════════════ content grid ═══════════════════════════ */}
//         <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 2xl:max-w-[1480px] 2xl:px-16">
//           <div
//             className="grid items-center gap-y-10 pt-6 sm:gap-y-11 sm:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-y-0 lg:pt-0"
//             style={{
//               minHeight:
//                 "min(calc(100dvh - var(--nav-h, 90px) - 112px), 800px)",
//             }}
//           >
//             {/* ───────────────────── LEFT · copy ───────────────────── */}
//             <motion.div
//               variants={stagger}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col items-start gap-[22px] lg:gap-[26px] lg:py-12"
//             >
//               <HeroPill />

//               <Headline />

//               <motion.p
//                 variants={fadeUp}
//                 className="text-[15px] sm:text-base"
//                 style={{ maxWidth: 440, lineHeight: 1.7, color: TEXT_SECONDARY }}
//               >
//                 Expert faculty, personalised study plans, and a proven record of
//                 top rankers — premier IIT-JEE &amp; NEET coaching, built on a
//                 foundation strong enough to get you there.
//               </motion.p>

//               <motion.div
//                 variants={fadeUp}
//                 className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
//               >
//                 <PrimaryCta />
//                 <GhostCta />
//               </motion.div>

//               {/* urgency line — BATCH_LINE */}
//               <motion.div
//                 variants={fadeUp}
//                 className="flex flex-wrap items-center gap-x-2.5 gap-y-1"
//               >
//                 <span className="relative flex h-2 w-2 shrink-0">
//                   {!reduce && (
//                     <span
//                       className="absolute inline-flex h-full w-full animate-ping rounded-full"
//                       style={{ background: LIME, opacity: 0.6 }}
//                     />
//                   )}
//                   <span
//                     className="relative inline-flex h-2 w-2 rounded-full"
//                     style={{
//                       background: LIME,
//                       boxShadow: "0 0 10px rgba(181,255,61,0.9)",
//                     }}
//                   />
//                 </span>
//                 <span
//                   className="text-[13px] font-semibold sm:text-[13.5px]"
//                   style={{ color: TEXT_PRIMARY }}
//                 >
//                   {BATCH_LINE.text}
//                 </span>
//                 <span className="text-[12.5px]" style={{ color: TEXT_MUTED }}>
//                   {BATCH_LINE.sub}
//                 </span>
//               </motion.div>

//               {/* proof row */}
//               <motion.div variants={fadeUp} className="flex items-center gap-3.5">
//                 <div className="flex">
//                   {AVATARS.map((a, i) => (
//                     <span
//                       key={a.initials + i}
//                       className="relative -ml-2 flex size-9 items-center justify-center overflow-hidden rounded-full first:ml-0"
//                       style={{
//                         border: `2px solid ${INK_900}`,
//                         background:
//                           "linear-gradient(135deg, #16304F 0%, #0D1F3A 100%)",
//                       }}
//                     >
//                       {a.src ? (
//                         <Image
//                           src={a.src}
//                           alt=""
//                           fill
//                           sizes="36px"
//                           className="object-cover"
//                         />
//                       ) : (
//                         <span
//                           className="text-[10px] font-bold tracking-wide"
//                           style={{ color: "rgba(181,255,61,0.85)" }}
//                           aria-hidden
//                         >
//                           {a.initials}
//                         </span>
//                       )}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex flex-col gap-0.5">
//                   <span className="flex gap-0.5" aria-label="4.7 out of 5 stars">
//                     {[0, 1, 2, 3, 4].map((i) => (
//                       <Star
//                         key={i}
//                         className="size-3.5 fill-current"
//                         style={{ color: GOLD }}
//                       />
//                     ))}
//                   </span>
//                   <span className="text-[12.5px]" style={{ color: TEXT_MUTED }}>
//                     <strong
//                       className="font-semibold"
//                       style={{ color: TEXT_PRIMARY }}
//                     >
//                       4.7/5
//                     </strong>
//                     {" · Rated on Google"}
//                   </span>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* ───────────── RIGHT · spacer (desktop) / image (mobile) ───────────── */}
//             <div className="lg:pointer-events-none">
//               {/* MOBILE / TABLET image — in flow, full-bleed, frameless */}
//               <motion.div
//                 initial={reduce ? false : { opacity: 0, scale: 1.04 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1.2, ease: EXPO, delay: 0.35 }}
//                 className="relative -mx-5 sm:-mx-8 lg:hidden"
//                 style={{
//                   width: "calc(100% + 40px)",
//                   aspectRatio: "4 / 4.2",
//                   maxHeight: "min(116vw, 680px)",
//                 }}
//               >
//                 <div className="absolute inset-0" style={maskStyle(MASK_MOBILE)}>
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       transform: `scale(${IMG.mobile.zoom})`,
//                       transformOrigin: IMG.mobile.origin,
//                     }}
//                   >
//                     <Image
//                       src={IMG.src}
//                       alt={IMG.alt}
//                       fill
//                       priority
//                       sizes="100vw"
//                       className="object-cover"
//                       style={{ objectPosition: IMG.mobile.pos }}
//                     />
//                   </div>
//                   <div
//                     aria-hidden
//                     className="pointer-events-none absolute inset-0"
//                     style={{
//                       background: [
//                         "linear-gradient(180deg, rgba(0,2,11,0.42) 0%, transparent 30%, transparent 60%, rgba(0,2,11,0.68) 100%)",
//                         "radial-gradient(ellipse 85% 85% at 55% 44%, transparent 46%, rgba(0,2,11,0.34) 78%, rgba(0,2,11,0.78) 100%)",
//                         "radial-gradient(ellipse 70% 55% at 60% 40%, rgba(181,255,61,0.07) 0%, transparent 62%)",
//                       ].join(", "),
//                     }}
//                   />
//                 </div>

//                 {/* mobile glow pool */}
//                 <motion.div
//                   aria-hidden
//                   className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[68%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
//                   style={{
//                     filter: "blur(13px)",
//                     background:
//                       "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(181,255,61,0.14) 0%, rgba(181,255,61,0.05) 35%, transparent 70%)",
//                   }}
//                   animate={
//                     reduce
//                       ? undefined
//                       : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
//                   }
//                   transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </MotionConfig>
//   );
// }

// export default HeroSection;

// /* ============================================================================
//    Feather masks — frameless dissolves
// ============================================================================ */

// const MASK_MOBILE = [
//   "linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
//   "linear-gradient(to bottom, transparent 0%, #000 9%, #000 88%, transparent 100%)",
// ].join(", ");

// /* Desktop backdrop: long dissolve into the copy on the left, clean bleed to
//    the viewport edge on the right, soft top/bottom anchoring. */
// const MASK_DESKTOP = [
//   "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 12%, #000 34%, #000 100%)",
//   "linear-gradient(to bottom, transparent 0%, #000 12%, #000 84%, transparent 100%)",
// ].join(", ");

// const maskStyle = (mask: string): React.CSSProperties => ({
//   maskImage: mask,
//   WebkitMaskImage: mask,
//   maskComposite: "intersect",
//   WebkitMaskComposite: "source-in",
// });

// /* ============================================================================
//    Headline — locked two-line lockup: "Where Discipline / Meets Rank."
// ============================================================================ */

// function Headline() {
//   const reduce = useReducedMotion();

//   const Word = ({ children }: { children: React.ReactNode }) => (
//     <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
//       <motion.span variants={wordRise} className="inline-block">
//         {children}
//       </motion.span>
//     </span>
//   );

//   return (
//     <motion.h1
//       variants={fadeUp}
//       className="font-extrabold"
//       style={{
//         fontSize: "clamp(2.5rem, 4.6vw, 4.5rem)",
//         lineHeight: 1.02,
//         letterSpacing: "-0.025em",
//         color: TEXT_PRIMARY,
//         maxWidth: "17ch",
//       }}
//     >
//       <motion.span
//         variants={stagger}
//         initial={reduce ? false : "hidden"}
//         animate="visible"
//         className="inline"
//       >
//         <Word>Where</Word>
//         {"\u00A0"}
//         <Word>Discipline</Word>{" "}
//         {/* unbreakable unit — never splits across lines */}
//         <span className="whitespace-nowrap">
//           <Word>Meets</Word>
//           {"\u00A0"}
//           <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
//             <motion.span
//               variants={wordRise}
//               className="relative inline-block"
//               style={{ color: LIME }}
//             >
//               Rank.
//               <svg
//                 viewBox="0 0 100 10"
//                 preserveAspectRatio="none"
//                 className="absolute left-0 w-full overflow-visible"
//                 style={{ bottom: "-0.12em", height: "0.14em" }}
//                 aria-hidden
//               >
//                 <motion.path
//                   d="M3 7 Q 50 2 97 6"
//                   fill="none"
//                   stroke={LIME}
//                   strokeWidth={6}
//                   strokeLinecap="round"
//                   opacity={0.55}
//                   initial={{ pathLength: reduce ? 1 : 0 }}
//                   animate={{ pathLength: 1 }}
//                   transition={{ duration: 0.7, ease: "easeOut", delay: 1.0 }}
//                 />
//               </svg>
//             </motion.span>
//           </span>
//         </span>
//       </motion.span>
//     </motion.h1>
//   );
// }

// /* ============================================================================
//    Eyebrow pill
// ============================================================================ */

// function HeroPill({
//   tag = "SINCE 2017",
//   label = "Trusted by students & families in Greater Noida",
//   shortLabel = "Trusted across Greater Noida",
//   href = "#results",
// }: {
//   tag?: string;
//   label?: string;
//   shortLabel?: string;
//   href?: string;
// }) {
//   const reduce = useReducedMotion();

//   return (
//     <motion.a
//       variants={fadeUp}
//       href={href}
//       className="group relative flex w-fit items-center gap-2.5 overflow-hidden rounded-full py-1 pl-1 pr-3 transition-transform duration-300 hover:-translate-y-0.5"
//       style={{
//         background: "rgba(14,23,46,0.6)",
//         border: "1px solid rgba(255,255,255,0.1)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//       }}
//     >
//       {!reduce && (
//         <span
//           aria-hidden
//           className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-full"
//         >
//           <motion.span
//             className="absolute left-1/2 top-1/2 h-[400%] w-[150%]"
//             style={{
//               x: "-50%",
//               y: "-50%",
//               background: `conic-gradient(from 0deg, transparent 0deg, ${LIME} 60deg, rgba(181,255,61,0.25) 130deg, transparent 220deg, transparent 360deg)`,
//             }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//           />
//           <span
//             className="absolute inset-px rounded-full"
//             style={{ background: "rgba(10,20,40,0.96)" }}
//           />
//         </span>
//       )}

//       {!reduce && (
//         <motion.span
//           aria-hidden
//           className="pointer-events-none absolute inset-y-0 w-[42%] -skew-x-12"
//           style={{
//             background:
//               "linear-gradient(100deg, transparent, rgba(255,255,255,0.1), transparent)",
//           }}
//           initial={{ left: "-60%" }}
//           animate={{ left: ["-60%", "-60%", "120%", "120%"] }}
//           transition={{
//             duration: 6,
//             times: [0, 0.62, 0.84, 1],
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       )}

//       <span
//         className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold uppercase leading-none tracking-[0.06em]"
//         style={{
//           background: `linear-gradient(180deg, #C8FF55, ${LIME})`,
//           color: "#13230A",
//         }}
//       >
//         {tag}
//       </span>

//       <span
//         className="hidden whitespace-nowrap text-[12.5px] font-medium leading-none sm:inline"
//         style={{ color: TEXT_SECONDARY }}
//       >
//         {label}
//       </span>
//       <span
//         className="whitespace-nowrap text-[12px] font-medium leading-none sm:hidden"
//         style={{ color: TEXT_SECONDARY }}
//       >
//         {shortLabel}
//       </span>

//       <ArrowRight
//         className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
//         style={{ color: TEXT_MUTED }}
//         strokeWidth={2.6}
//         aria-hidden
//       />
//     </motion.a>
//   );
// }

// /* ============================================================================
//    CTAs
// ============================================================================ */

// function PrimaryCta() {
//   return (
//     <a
//       href="#counselling"
//       className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-6 py-[13px] text-[14.5px] font-bold transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] sm:w-fit"
//       style={{
//         background: "linear-gradient(180deg, #C8FF55, #8FD92E)",
//         color: "#13230A",
//         boxShadow:
//           "0 0 0 1px rgba(181,255,61,0.5), 0 10px 28px -8px rgba(181,255,61,0.42), inset 0 1px 0 rgba(255,255,255,0.32)",
//       }}
//     >
//       <span
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-[130%]"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
//         }}
//       />
//       <span className="relative z-10">Book a Free Counselling</span>
//       <ArrowRight
//         className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1"
//         strokeWidth={2.6}
//         aria-hidden
//       />
//     </a>
//   );
// }

// function GhostCta() {
//   return (
//     <a
//       href="#courses"
//       className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-[13px] text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] sm:w-fit"
//       style={{
//         background: "rgba(18,28,56,0.55)",
//         color: TEXT_PRIMARY,
//         border: "1px solid rgba(255,255,255,0.16)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//       }}
//     >
//       Explore Courses
//       <Plus
//         className="size-4 transition-transform duration-300 group-hover:rotate-90"
//         style={{ color: LIME }}
//         strokeWidth={2.6}
//         aria-hidden
//       />
//     </a>
//   );
// }

"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Plus, Star } from "lucide-react";

/* ============================================================================
   HeroSection — Kota Academy (v8, single-file build)
   v8 changes:
   · Desktop image is now a SECTION-LEVEL BACKDROP — absolute, full hero
     height, bleeding to the right viewport edge, melting left into the copy.
     No more floating plate with navy gaps above/below.
   · Crop knobs (zoom + focal point) cut the duplicated subject out of the
     visible window instead of half-hiding her behind a fade.
   · Headline locked to exactly two lines: "Where Discipline / Meets Rank."
   · Nav clearance safety (+20px) so the pill never slips under the navbar.
   · Tablet image height capped.
   ----------------------------------------------------------------------------
   SWAP POINTS:
   · BATCH_LINE — demo batch date
   · AVATARS    — add `src` per entry when face crops are ready
   · IMG        — src, focal points, zoom per breakpoint (crop tuning knobs)
============================================================================ */

/* ----------------------------- swap constants ----------------------------- */

const BATCH_LINE = {
  text: "New JEE / NEET batches start 1 July",
  sub: "Limited seats · max 30 per batch",
};

type Avatar = { initials: string; src?: string };
const AVATARS: Avatar[] = [
  { initials: "AR" }, // ← add src: "/images/students/ar.jpg" when ready
  { initials: "SK" },
  { initials: "PV" },
  { initials: "NM" },
];

const IMG = {
  src: "/cl-5.png",
  alt: "Kota Academy students in a classroom",
  /* ---- crop tuning knobs ----
     posX biases which slice of the photo is visible (lower = more left).
     zoom enlarges the photo inside its window; raise it to push unwanted
     content (the duplicated subject on the right) out of the crop.
     DESKTOP = pair framing: window includes boy + girl, and must END in the
     gap between the girl and her duplicate. If the duplicate peeks in at
     wide viewports: nudge pos down in 4% steps OR raise zoom by ~0.04.
     If the girl gets clipped at the right edge instead: do the opposite. */
  desktop: { pos: "36% 42%", zoom: 1.06, origin: "42% 50%" },
  mobile: { pos: "42% 36%", zoom: 1.06, origin: "45% 40%" },
};

/* --------------------------------- palette -------------------------------- */

const INK_900 = "#070F22";
const INK_850 = "#0A1730";
const LIME = "#B5FF3D";
const GOLD = "#F5B642";
const TEXT_PRIMARY = "#F4F7FB";
const TEXT_SECONDARY = "rgba(222,231,244,0.74)";
const TEXT_MUTED = "rgba(222,231,244,0.5)";

/* --------------------------------- motion --------------------------------- */

const EXPO = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EXPO } },
};

const wordRise: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EXPO } },
};

/* ================================ component ================================ */

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const plateY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden"
        style={{
          paddingTop: "calc(var(--nav-h, 90px) + 20px)",
          paddingBottom: 72,
          background: [
            `radial-gradient(ellipse 70% 65% at 80% 40%, rgba(181,255,61,0.10) 0%, rgba(181,255,61,0.05) 26%, rgba(11,27,51,0.30) 56%, transparent 78%)`,
            `radial-gradient(ellipse 48% 55% at 12% 32%, rgba(181,255,61,0.045) 0%, transparent 60%)`,
            `radial-gradient(ellipse 100% 42% at 50% 104%, rgba(6,14,32,0.45) 0%, transparent 72%)`,
            `linear-gradient(180deg, ${INK_900} 0%, ${INK_850} 100%)`,
          ].join(", "),
        }}
      >
        {/* faint dot-grid atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            opacity: 0.5,
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 28%, #000, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 28%, #000, transparent 80%)",
          }}
        />

        {/* ════════ DESKTOP IMAGE BACKDROP — full height, right-anchored ════════ */}
        <div
          aria-hidden={false}
          className="absolute bottom-0 right-0 top-0 z-0 hidden lg:block"
          style={{ width: "min(58vw, 1080px)" }}
        >
          {/* glow pool living inside the backdrop */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[42%] top-1/2 -z-10 h-[64%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              filter: "blur(16px)",
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(181,255,61,0.13) 0%, rgba(181,255,61,0.05) 35%, transparent 70%)",
            }}
            animate={
              reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
            }
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-0" style={maskStyle(MASK_DESKTOP)}>
            {/* parallax drift */}
            <motion.div className="absolute inset-0" style={{ y: plateY }}>
              {/* crop window: zoom pushes the duplicated subject out of frame */}
              <div
                className="absolute inset-0"
                style={{
                  transform: `scale(${IMG.desktop.zoom})`,
                  transformOrigin: IMG.desktop.origin,
                }}
              >
                <Image
                  src={IMG.src}
                  alt={IMG.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  style={{ objectPosition: IMG.desktop.pos }}
                />
              </div>
            </motion.div>

            {/* grading — binds the photo to the ink */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: [
                  /* long left wash into the copy column */
                  "linear-gradient(90deg, rgba(7,15,34,0.97) 0%, rgba(7,15,34,0.78) 14%, rgba(7,15,34,0.34) 34%, transparent 56%)",
                  /* gentle top + bottom anchoring */
                  "linear-gradient(180deg, rgba(0,2,11,0.5) 0%, transparent 24%, transparent 64%, rgba(0,2,11,0.66) 100%)",
                  /* lime kiss on the subjects */
                  "radial-gradient(ellipse 70% 55% at 58% 44%, rgba(181,255,61,0.07) 0%, transparent 62%)",
                ].join(", "),
              }}
            />
          </div>
        </div>

        {/* ════════════════════════════ content grid ═══════════════════════════ */}
        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 2xl:max-w-[1480px] 2xl:px-16">
          <div
            className="grid items-center gap-y-10 pt-6 sm:gap-y-11 sm:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-y-0 lg:pt-0"
            style={{
              minHeight:
                "min(calc(100dvh - var(--nav-h, 90px) - 112px), 800px)",
            }}
          >
            {/* ───────────────────── LEFT · copy ───────────────────── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-[22px] lg:gap-[26px] lg:py-12"
            >
              <HeroPill />

              <Headline />

              <motion.p
                variants={fadeUp}
                className="text-[15px] sm:text-base"
                style={{ maxWidth: 440, lineHeight: 1.7, color: TEXT_SECONDARY }}
              >
                Expert faculty, personalised study plans, and a proven record of
                top rankers — premier IIT-JEE &amp; NEET coaching, built on a
                foundation strong enough to get you there.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
              >
                <PrimaryCta />
                <GhostCta />
              </motion.div>

              {/* urgency line — BATCH_LINE */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-x-2.5 gap-y-1"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  {!reduce && (
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full"
                      style={{ background: LIME, opacity: 0.6 }}
                    />
                  )}
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{
                      background: LIME,
                      boxShadow: "0 0 10px rgba(181,255,61,0.9)",
                    }}
                  />
                </span>
                <span
                  className="text-[13px] font-semibold sm:text-[13.5px]"
                  style={{ color: TEXT_PRIMARY }}
                >
                  {BATCH_LINE.text}
                </span>
                <span className="text-[12.5px]" style={{ color: TEXT_MUTED }}>
                  {BATCH_LINE.sub}
                </span>
              </motion.div>

              {/* proof row */}
              <motion.div variants={fadeUp} className="flex items-center gap-3.5">
                <div className="flex">
                  {AVATARS.map((a, i) => (
                    <span
                      key={a.initials + i}
                      className="relative -ml-2 flex size-9 items-center justify-center overflow-hidden rounded-full first:ml-0"
                      style={{
                        border: `2px solid ${INK_900}`,
                        background:
                          "linear-gradient(135deg, #16304F 0%, #0D1F3A 100%)",
                      }}
                    >
                      {a.src ? (
                        <Image
                          src={a.src}
                          alt=""
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      ) : (
                        <span
                          className="text-[10px] font-bold tracking-wide"
                          style={{ color: "rgba(181,255,61,0.85)" }}
                          aria-hidden
                        >
                          {a.initials}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="flex gap-0.5" aria-label="4.7 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-current"
                        style={{ color: GOLD }}
                      />
                    ))}
                  </span>
                  <span className="text-[12.5px]" style={{ color: TEXT_MUTED }}>
                    <strong
                      className="font-semibold"
                      style={{ color: TEXT_PRIMARY }}
                    >
                      4.7/5
                    </strong>
                    {" · Rated on Google"}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* ───────────── RIGHT · spacer (desktop) / image (mobile) ───────────── */}
            <div className="lg:pointer-events-none">
              {/* MOBILE / TABLET image — in flow, full-bleed, frameless */}
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: EXPO, delay: 0.35 }}
                className="relative -mx-5 sm:-mx-8 lg:hidden"
                style={{
                  width: "calc(100% + 40px)",
                  aspectRatio: "4 / 4.2",
                  maxHeight: "min(116vw, 680px)",
                }}
              >
                <div className="absolute inset-0" style={maskStyle(MASK_MOBILE)}>
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `scale(${IMG.mobile.zoom})`,
                      transformOrigin: IMG.mobile.origin,
                    }}
                  >
                    <Image
                      src={IMG.src}
                      alt={IMG.alt}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: IMG.mobile.pos }}
                    />
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: [
                        "linear-gradient(180deg, rgba(0,2,11,0.42) 0%, transparent 30%, transparent 60%, rgba(0,2,11,0.68) 100%)",
                        "radial-gradient(ellipse 85% 85% at 55% 44%, transparent 46%, rgba(0,2,11,0.34) 78%, rgba(0,2,11,0.78) 100%)",
                        "radial-gradient(ellipse 70% 55% at 60% 40%, rgba(181,255,61,0.07) 0%, transparent 62%)",
                      ].join(", "),
                    }}
                  />
                </div>

                {/* mobile glow pool */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[68%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    filter: "blur(13px)",
                    background:
                      "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(181,255,61,0.14) 0%, rgba(181,255,61,0.05) 35%, transparent 70%)",
                  }}
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
                  }
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default HeroSection;

/* ============================================================================
   Feather masks — frameless dissolves
============================================================================ */

const MASK_MOBILE = [
  "linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
  "linear-gradient(to bottom, transparent 0%, #000 9%, #000 88%, transparent 100%)",
].join(", ");

/* Desktop backdrop: long dissolve into the copy on the left, clean bleed to
   the viewport edge on the right, soft top/bottom anchoring. */
const MASK_DESKTOP = [
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 12%, #000 34%, #000 100%)",
  "linear-gradient(to bottom, transparent 0%, #000 12%, #000 84%, transparent 100%)",
].join(", ");

const maskStyle = (mask: string): React.CSSProperties => ({
  maskImage: mask,
  WebkitMaskImage: mask,
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
});

/* ============================================================================
   Headline — locked two-line lockup: "Where Discipline / Meets Rank."
============================================================================ */

function Headline() {
  const reduce = useReducedMotion();

  const Word = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span variants={wordRise} className="inline-block">
        {children}
      </motion.span>
    </span>
  );

  return (
    <motion.h1
      variants={fadeUp}
      className="font-extrabold"
      style={{
        fontSize: "clamp(2.5rem, 4.6vw, 4.5rem)",
        lineHeight: 1.02,
        letterSpacing: "-0.025em",
        color: TEXT_PRIMARY,
        maxWidth: "17ch",
      }}
    >
      <motion.span
        variants={stagger}
        initial={reduce ? false : "hidden"}
        animate="visible"
        className="inline"
      >
        <Word>Where</Word>
        {"\u00A0"}
        <Word>Discipline</Word>{" "}
        {/* unbreakable unit — never splits across lines */}
        <span className="whitespace-nowrap">
          <Word>Meets</Word>
          {"\u00A0"}
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              variants={wordRise}
              className="relative inline-block"
              style={{ color: LIME }}
            >
              Rank.
              <svg
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                className="absolute left-0 w-full overflow-visible"
                style={{ bottom: "-0.12em", height: "0.14em" }}
                aria-hidden
              >
                <motion.path
                  d="M3 7 Q 50 2 97 6"
                  fill="none"
                  stroke={LIME}
                  strokeWidth={6}
                  strokeLinecap="round"
                  opacity={0.55}
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 1.0 }}
                />
              </svg>
            </motion.span>
          </span>
        </span>
      </motion.span>
    </motion.h1>
  );
}

/* ============================================================================
   Eyebrow pill
============================================================================ */

function HeroPill({
  tag = "SINCE 2017",
  label = "Trusted by students & families in Greater Noida",
  shortLabel = "Trusted across Greater Noida",
  href = "#results",
}: {
  tag?: string;
  label?: string;
  shortLabel?: string;
  href?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      variants={fadeUp}
      href={href}
      className="group relative flex w-fit items-center gap-2.5 overflow-hidden rounded-full py-1 pl-1 pr-3 transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        background: "rgba(14,23,46,0.6)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {!reduce && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-full"
        >
          <motion.span
            className="absolute left-1/2 top-1/2 h-[400%] w-[150%]"
            style={{
              x: "-50%",
              y: "-50%",
              background: `conic-gradient(from 0deg, transparent 0deg, ${LIME} 60deg, rgba(181,255,61,0.25) 130deg, transparent 220deg, transparent 360deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <span
            className="absolute inset-px rounded-full"
            style={{ background: "rgba(10,20,40,0.96)" }}
          />
        </span>
      )}

      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-[42%] -skew-x-12"
          style={{
            background:
              "linear-gradient(100deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
          initial={{ left: "-60%" }}
          animate={{ left: ["-60%", "-60%", "120%", "120%"] }}
          transition={{
            duration: 6,
            times: [0, 0.62, 0.84, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <span
        className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold uppercase leading-none tracking-[0.06em]"
        style={{
          background: `linear-gradient(180deg, #C8FF55, ${LIME})`,
          color: "#13230A",
        }}
      >
        {tag}
      </span>

      <span
        className="hidden whitespace-nowrap text-[12.5px] font-medium leading-none sm:inline"
        style={{ color: TEXT_SECONDARY }}
      >
        {label}
      </span>
      <span
        className="whitespace-nowrap text-[12px] font-medium leading-none sm:hidden"
        style={{ color: TEXT_SECONDARY }}
      >
        {shortLabel}
      </span>

      <ArrowRight
        className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        style={{ color: TEXT_MUTED }}
        strokeWidth={2.6}
        aria-hidden
      />
    </motion.a>
  );
}

/* ============================================================================
   CTAs
============================================================================ */

function PrimaryCta() {
  return (
    <a
      href="#counselling"
      className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-6 py-[13px] text-[14.5px] font-bold transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] sm:w-fit"
      style={{
        background: "linear-gradient(180deg, #C8FF55, #8FD92E)",
        color: "#13230A",
        boxShadow:
          "0 0 0 1px rgba(181,255,61,0.5), 0 10px 28px -8px rgba(181,255,61,0.42), inset 0 1px 0 rgba(255,255,255,0.32)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-[130%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
        }}
      />
      <span className="relative z-10">Book a Free Counselling</span>
      <ArrowRight
        className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.6}
        aria-hidden
      />
    </a>
  );
}

function GhostCta() {
  return (
    <a
      href="#courses"
      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-[13px] text-[14.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] sm:w-fit"
      style={{
        background: "rgba(18,28,56,0.55)",
        color: TEXT_PRIMARY,
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      Explore Courses
      <Plus
        className="size-4 transition-transform duration-300 group-hover:rotate-90"
        style={{ color: LIME }}
        strokeWidth={2.6}
        aria-hidden
      />
    </a>
  );
}