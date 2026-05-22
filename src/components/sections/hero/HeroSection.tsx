// "use client";

// import Image from "next/image";
// import {
//   GraduationCap,
//   Users,
//   Trophy,
//   BookOpen,
//   Smile,
//   ArrowRight,
//   Plus,
//   Star,
// } from "lucide-react";
// import { HeroPill } from "./HeroPill";
// import styles from "./hero.module.css";

// /**
//  * HeroSection — Kota Academy landing hero. (v3)
//  *
//  * Fixes in this pass:
//  *   - Hard horizontal gutters at every breakpoint (was being lost
//  *     when parent wrappers fought the section).
//  *   - CTAs sized to content on tablet+ (`w-fit`), no more
//  *     stretched-bar look that made the primary button look blank.
//  *   - Desktop image frame is now LANDSCAPE 1.45:1 — preserves
//  *     ~97% of the source photo. Background students, the KOTA
//  *     ACADEMY sign, and both main figures all in shot.
//  *   - Image frame is vertically centered in its column, capped
//  *     in size so it can't stretch on ultra-wide.
//  *
//  * IMPORTANT — page wrapper:
//  *   This component OWNS its full-width background and padding.
//  *   Do NOT wrap it in a container with `p-12` or its own
//  *   background — that double-contains it. Use:
//  *     <main className="min-h-screen bg-base text-primary">
//  *       <HeroSection />
//  *     </main>
//  */
// export function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-base">
//       {/* ── Ambient background — full section ── */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_72%_38%,rgb(198_246_36/0.07)_0%,transparent_60%),radial-gradient(ellipse_50%_44%_at_18%_64%,rgb(108_97_221/0.10)_0%,transparent_58%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.13)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000,transparent_80%)]" />
//       </div>

//       {/* ════════════ BODY ════════════
//           Hard gutters: px-5 (20px) → sm:px-8 (32px) → lg:px-12 (48px).
//           These are *minimums*; they apply at every breakpoint above
//           their threshold and cannot be lost to a parent. */}
//       <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-y-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-x-10 lg:px-12 lg:pb-0 lg:pt-0 lg:min-h-[calc(100dvh-var(--nav-h,88px))]">
//         {/* ─────────── LEFT · copy ─────────── */}
//         <div className="flex flex-col items-start gap-6 lg:gap-7 lg:py-20">
//           <HeroPill revealIndex={0} />

//           <h1
//             className={`${styles.reveal} font-display text-[clamp(2.6rem,6.4vw,5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-primary`}
//             style={{ "--i": 1 } as React.CSSProperties}
//           >
//             Where Discipline
//             <br />
//             Meets <span className="text-accent">Rank.</span>
//           </h1>

//           <p
//             className={`${styles.reveal} max-w-[440px] text-[15px] leading-[1.7] text-secondary sm:text-base`}
//             style={{ "--i": 2 } as React.CSSProperties}
//           >
//             Expert faculty, personalised study plans, and a proven record of
//             top rankers — premier IIT-JEE &amp; NEET coaching, built on a
//             foundation strong enough to get you there.
//           </p>

//           {/* CTAs — full-width on mobile (thumb-friendly), w-fit from sm: up.
//               Each button explicitly w-fit so it sizes to its content; this
//               kills the stretched-bar look that hid the primary label. */}
//           <div
//             className={`${styles.reveal} flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap`}
//             style={{ "--i": 3 } as React.CSSProperties}
//           >
//             <a
//               href="#counselling"
//               className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand px-6 py-3.5 text-[15px] font-bold text-brand-ink shadow-[0_10px_30px_-10px_rgb(198_246_36/0.45)] transition-[transform,box-shadow,background-color] duration-base ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_16px_40px_-10px_rgb(198_246_36/0.6)] sm:w-fit"
//             >
//               Book a Free Counselling
//               <ArrowRight
//                 className="size-4 transition-transform duration-base ease-out group-hover:translate-x-1"
//                 strokeWidth={2.6}
//               />
//             </a>
//             <a
//               href="#courses"
//               className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-border-subtle bg-elevated/40 px-6 py-3.5 text-[15px] font-semibold text-primary backdrop-blur-md transition-[transform,border-color,background-color] duration-base ease-out hover:-translate-y-0.5 hover:border-border-default hover:bg-elevated sm:w-fit"
//             >
//               Explore Courses
//               <Plus
//                 className="size-4 text-muted-fg transition-[transform,color] duration-base ease-out group-hover:rotate-90 group-hover:text-brand"
//                 strokeWidth={2.6}
//               />
//             </a>
//           </div>

//           <div
//             className={`${styles.reveal} flex items-center gap-3.5`}
//             style={{ "--i": 4 } as React.CSSProperties}
//           >
//             <div className="flex">
//               {[0, 1, 2, 3].map((i) => (
//                 <span
//                   key={i}
//                   className="-ml-2 size-9 rounded-full border-2 border-base bg-gradient-to-br from-subtle to-muted first:ml-0"
//                   aria-hidden
//                 />
//               ))}
//             </div>
//             <div className="flex flex-col gap-0.5">
//               <span
//                 className="flex gap-0.5 text-warning"
//                 aria-label="4.9 out of 5 stars"
//               >
//                 {[0, 1, 2, 3, 4].map((i) => (
//                   <Star key={i} className="size-3.5 fill-current" />
//                 ))}
//               </span>
//               <span className="text-[12.5px] text-muted-fg">
//                 <strong className="font-semibold text-primary">4.9/5</strong>
//                 {" · Rated by 1000+ students & parents"}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ─────────── RIGHT · image plate ───────────
//             Mobile: portrait 4/5 card, centered.
//             Desktop: LANDSCAPE 1.45:1 frame, vertically centered in
//             column, capped at 600px tall. This shape preserves
//             ~97% of the source photo — full classroom visible. */}
//         <div className="relative w-full self-center py-0 lg:py-12">
//           <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[480px] lg:aspect-[1.45/1] lg:mx-0 lg:max-h-[600px] lg:max-w-none">
//             <svg
//               aria-hidden
//               viewBox="0 0 600 600"
//               className={`${styles.spinSlow} pointer-events-none absolute left-1/2 top-1/2 z-0 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2`}
//             >
//               <circle cx="300" cy="300" r="270" fill="none" stroke="rgb(198 246 36 / 0.08)" strokeWidth="1" />
//               <circle cx="300" cy="300" r="200" fill="none" stroke="rgb(198 246 36 / 0.11)" strokeWidth="1" strokeDasharray="4 10" />
//               <circle cx="300" cy="300" r="134" fill="none" stroke="rgb(108 97 221 / 0.14)" strokeWidth="1" />
//             </svg>

//             <div
//               aria-hidden
//               className={`${styles.breathe} pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgb(198_246_36/0.16)_0%,transparent_70%)] blur-[10px]`}
//             />

//             <div className={`${styles.plateReveal} absolute inset-0 z-[2]`}>
//               {/* MOBILE plate */}
//               <div className="lg:hidden">
//                 <div className={`${styles.plateMobile} absolute inset-0 overflow-hidden rounded-2xl`}>
//                   <Image
//                     src="/hero--image.png"
//                     alt="Kota Academy students in a classroom"
//                     fill
//                     priority
//                     sizes="(max-width: 1024px) 90vw, 480px"
//                     className="object-cover object-[42%_18%]"
//                   />
//                 </div>
//                 <div aria-hidden className={`${styles.grade} ${styles.plateMobile} absolute inset-0 rounded-2xl`} />
//                 <div aria-hidden className={`${styles.vignette} ${styles.plateMobile} absolute inset-0 rounded-2xl`} />
//               </div>

//               {/* DESKTOP plate — landscape 1.45:1, shows the full classroom */}
//               <div className="hidden lg:block">
//                 <div className={`${styles.plateDesktop} absolute inset-0 overflow-hidden`}>
//                   <Image
//                     src="/hero--image.png"
//                     alt="Kota Academy students in a classroom"
//                     fill
//                     priority
//                     sizes="700px"
//                     className="object-cover object-[50%_50%]"
//                   />
//                 </div>
//                 <div aria-hidden className={`${styles.grade} ${styles.plateDesktop} absolute inset-0`} />
//                 <div aria-hidden className={`${styles.vignette} ${styles.plateDesktop} absolute inset-0`} />
//               </div>
//             </div>

//             {/* ── Floating cards — PARKED. Repositioned for the
//                  landscape frame. Switch on later by uncommenting. ──
//             <div className="absolute right-3 top-4 z-10 flex min-w-[148px] flex-col gap-0.5 rounded-xl border border-border-default bg-overlay/60 px-4 py-3 backdrop-blur-xl shadow-[inset_0_1px_0_rgb(198_246_36/0.22)]">
//               <span className="font-display text-2xl font-extrabold leading-none text-accent">AIR 47</span>
//               <span className="text-[11px] font-medium tracking-[0.04em] text-muted-fg">IIT-JEE Advanced 2024</span>
//             </div>
//             <div className="absolute bottom-4 left-3 z-10 flex items-center gap-2.5 rounded-xl border border-border-default bg-overlay/60 px-4 py-3 backdrop-blur-xl shadow-[inset_0_1px_0_rgb(198_246_36/0.2)]">
//               <div className="grid size-9 place-items-center rounded-lg bg-brand-subtle">
//                 <Trophy className="size-4 text-accent" />
//               </div>
//               <div>
//                 <div className="font-display text-xl font-extrabold leading-none text-primary">5500+</div>
//                 <div className="text-[11px] text-muted-fg">Students Mentored</div>
//               </div>
//             </div>
//             ── end parked cards ── */}
//           </div>
//         </div>
//       </div>

//       {/* ════════════ STATS BAR ════════════ */}
//       <div className="relative z-10 grid grid-cols-2 border-t border-border-subtle bg-[rgb(255_255_255/0.02)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5">
//         {STATS.map((stat, i) => (
//           <div
//             key={stat.label}
//             className={`${styles.reveal} flex items-center gap-3 border-border-subtle px-5 py-5 sm:px-6 [&:not(:nth-child(2n))]:border-r [&:nth-child(n+3)]:border-t sm:[&:not(:nth-child(3n))]:border-r sm:[&:nth-child(n+4)]:border-t lg:[&]:border-r lg:[&:nth-child(n+1)]:border-t-0 lg:last:[&]:border-r-0`}
//             style={{ "--i": 5 + i } as React.CSSProperties}
//           >
//             <stat.Icon className="size-6 shrink-0 text-muted-fg" strokeWidth={1.75} aria-hidden />
//             <div className="flex flex-col gap-0.5">
//               <span className="font-display text-2xl font-extrabold leading-none text-accent">
//                 {stat.value}
//               </span>
//               <span className="text-[12px] leading-tight text-muted-fg">
//                 {stat.label}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const STATS = [
//   { Icon: Trophy, value: "17+", label: "Years of Excellence" },
//   { Icon: Users, value: "5500+", label: "Students Mentored" },
//   { Icon: GraduationCap, value: "1500+", label: "Selections in Top Institutes" },
//   { Icon: BookOpen, value: "45+", label: "Expert Faculty" },
//   { Icon: Smile, value: "95%", label: "Parents Satisfaction" },
// ] as const;

"use client";

import Image from "next/image";
import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Smile,
  ArrowRight,
  Plus,
  Star,
} from "lucide-react";
import { HeroPill } from "./HeroPill";
import s from "./hero.module.css";

/**
 * HeroSection — Kota Academy landing hero. (v4)
 *
 * v4 changes:
 *  - Layout-critical rules moved into the CSS module so they
 *    can't fail silently. Gutters use !important to guarantee.
 *  - Background: deep navy + violet-blue glow around the image.
 *  - Tablet image properly centered; desktop fills the column.
 *  - Buttons: gradient fill, 1px ring, inset highlight.
 *
 * Page wrapper must be MINIMAL:
 *    <main className="min-h-screen bg-base text-primary">
 *      <HeroSection />
 *    </main>
 * No padding on <main>, no competing background.
 */
export function HeroSection() {
  return (
    <section className={`${s.section} relative w-full overflow-hidden  `} style={{paddingBottom:"80px"}}>
      {/* Faint dot-grid on top of the navy+violet background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgb(255_255_255/0.10)_1px,transparent_1px)] [background-size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000,transparent_80%)]"
      />

      <div className={`${s.shell} relative z-10`}>
        <div className={s.body}>
          {/* ─────────── LEFT · copy ─────────── */}
          <div className={s.left}>
            <HeroPill revealIndex={0} />

            <h1
              className={`${s.reveal} font-display text-[clamp(2.6rem,6.4vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.02em] text-primary`}
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
                  aria-label="4.9 out of 5 stars"
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-[12.5px] text-muted-fg">
                  <strong className="font-semibold text-primary">4.9/5</strong>
                  {" · Rated by 1000+ students & parents"}
                </span>
              </div>
            </div>
          </div>

          {/* ─────────── RIGHT · image plate ─────────── */}
          <div className={s.right}>
            <div className={s.frame}>
              <svg
                aria-hidden
                viewBox="0 0 600 600"
                className={s.arcs}
              >
                <circle cx="300" cy="300" r="270" fill="none" stroke="rgb(198 246 36 / 0.08)" strokeWidth="1" />
                <circle cx="300" cy="300" r="200" fill="none" stroke="rgb(198 246 36 / 0.11)" strokeWidth="1" strokeDasharray="4 10" />
                <circle cx="300" cy="300" r="134" fill="none" stroke="rgb(108 97 221 / 0.18)" strokeWidth="1" />
              </svg>

              <div aria-hidden className={s.glowPool} />

              <div className={`${s.plate} ${s.plateReveal}`}>
                {/* The Image is wrapped in a positioned overflow:hidden
                    container that carries the mask + border-radius.
                    Next/Image fill=true requires this. */}
                <div className={s.plateImg}>
                  <Image
                    src="/hero--image.webp"
                    alt="Kota Academy students in a classroom"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 700px"
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

      {/* ════════════ STATS BAR ════════════ */}
      {/* <div className="relative z-10 grid grid-cols-2 border-t border-border-subtle bg-[rgb(255_255_255/0.02)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`${s.reveal} flex items-center gap-3 border-border-subtle px-5 py-5 sm:px-6 [&:not(:nth-child(2n))]:border-r [&:nth-child(n+3)]:border-t sm:[&:not(:nth-child(3n))]:border-r sm:[&:nth-child(n+4)]:border-t lg:[&]:border-r lg:[&:nth-child(n+1)]:border-t-0 lg:last:[&]:border-r-0`}
            style={{ "--i": 5 + i } as React.CSSProperties}
          >
            <stat.Icon className="size-6 shrink-0 text-muted-fg" strokeWidth={1.75} aria-hidden />
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-2xl font-extrabold leading-none text-accent">
                {stat.value}
              </span>
              <span className="text-[12px] leading-tight text-muted-fg">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div> */}
      
    </section>
  );
}

const STATS = [
  { Icon: Trophy, value: "17+", label: "Years of Excellence" },
  { Icon: Users, value: "5500+", label: "Students Mentored" },
  { Icon: GraduationCap, value: "1500+", label: "Selections in Top Institutes" },
  { Icon: BookOpen, value: "45+", label: "Expert Faculty" },
  { Icon: Smile, value: "95%", label: "Parents Satisfaction" },
] as const;