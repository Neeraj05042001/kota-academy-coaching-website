// "use client";

// import { useRef, useState, useEffect } from "react";
// import { motion, useInView } from "framer-motion";

// // ─────────────────────────────────────────────────────────────────────────────
// // Types & Data
// // ─────────────────────────────────────────────────────────────────────────────
// interface Stat {
//   id: number;
//   value: number;
//   suffix: string;
//   label: string;
//   decimal: boolean;
// }

// // const STATS: Stat[] = [
// //   { id: 1, value: 500, suffix: "+", label: "IIT / NEET Selections", decimal: false },
// //   { id: 2, value: 5000, suffix: "+", label: "Students Mentored", decimal: false },
// //   { id: 3, value: 8, suffix: "", label: "Years of Excellence", decimal: false },
// //   { id: 4, value: 30, suffix: "", label: "Students per Batch", decimal: false },
// //   { id: 5, value: 4.9, suffix: "★", label: "Google Rating", decimal: true },
// // ];

// const STATS: Stat[] = [
//   { id: 1, value: 500, suffix: "+", label: "IIT / NEET Selections", decimal: false },
//   { id: 2, value: 5000, suffix: "+", label: "Students Mentored", decimal: false },
//   { id: 3, value: 8, suffix: "", label: "Years Teaching", decimal: false },        // shorter
//   { id: 4, value: 30, suffix: "", label: "Per Batch", decimal: false },             // shorter
//   { id: 5, value: 4.9, suffix: "★", label: "Google Rating", decimal: true },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // Easing
// // ─────────────────────────────────────────────────────────────────────────────
// const easeOutExpo = (t: number): number =>
//   t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

// // ─────────────────────────────────────────────────────────────────────────────
// // useCountUp — rAF counter, honors prefers-reduced-motion
// // ─────────────────────────────────────────────────────────────────────────────
// function useCountUp(
//   target: number,
//   duration: number,
//   decimal: boolean,
//   delay: number,
//   triggered: boolean,
// ): string {
//   const [count, setCount] = useState(decimal ? "0.0" : "0");

//   useEffect(() => {
//     if (!triggered) return;

//     const prefersReduced =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (prefersReduced) {
//       setCount(decimal ? target.toFixed(1) : target.toString());
//       return;
//     }

//     let rafId = 0;
//     let startTime: number | null = null;

//     const timeoutId = setTimeout(() => {
//       const tick = (ts: number) => {
//         if (startTime === null) startTime = ts;
//         const progress = Math.min((ts - startTime) / duration, 1);
//         const value = easeOutExpo(progress) * target;
//         setCount(decimal ? value.toFixed(1) : Math.floor(value).toString());
//         if (progress < 1) {
//           rafId = requestAnimationFrame(tick);
//         } else {
//           setCount(decimal ? target.toFixed(1) : target.toString());
//         }
//       };
//       rafId = requestAnimationFrame(tick);
//     }, delay);

//     return () => {
//       clearTimeout(timeoutId);
//       cancelAnimationFrame(rafId);
//     };
//   }, [triggered, target, duration, decimal, delay]);

//   return count;
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // StatCell
// // ─────────────────────────────────────────────────────────────────────────────
// interface StatCellProps {
//   stat: Stat;
//   index: number;
//   triggered: boolean;
// }

// function StatCell({ stat, index, triggered }: StatCellProps) {
//   const count = useCountUp(stat.value, 2200, stat.decimal, index * 120, triggered);
//   const isGold = stat.suffix === "★";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
//       transition={{ delay: 0.25 + index * 0.08, duration: 0.5, ease: "easeOut" }}
//       className="ka-stat-cell"
//     >
//       <div className="ka-stat-value-row">
//         <span className="ka-stat-value">{count}</span>
//         {stat.suffix && (
//           <span className={`ka-stat-suffix${isGold ? " is-gold" : ""}`}>
//             {stat.suffix}
//           </span>
//         )}
//       </div>

//       <span className="ka-stat-label">{stat.label}</span>

//       {isGold && (
//         <div className="ka-stat-stars" aria-hidden="true">
//           {[0, 1, 2, 3].map((i) => (
//             <span key={i} className="ka-star">★</span>
//           ))}
//           <span className="ka-star ka-star-half">★</span>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // CTA pill — sits in the 6th grid slot on desktop, full-width on mobile
// // ─────────────────────────────────────────────────────────────────────────────
// function ResultsCTA({ triggered }: { triggered: boolean }) {
//   return (
//     <motion.a
//       href="#results"
//       initial={{ opacity: 0, y: 8 }}
//       animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
//       transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
//       className="ka-cta-pill"
//       aria-label="View all student results"
//     >
//       <span>View Results</span>
//       <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
//         <path
//           d="M2 6h8M7 3l3 3-3 3"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </motion.a>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Main — CredibilityStrip
// // ─────────────────────────────────────────────────────────────────────────────
// export default function CredibilityStrip() {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <>
//       <style>{`
//         .ka-section {
//           width: 100%;
//           max-width: 1080px;
//           margin-inline: auto;
//           padding-inline: 16px;
//           font-family: var(--font-manrope, Manrope, sans-serif);
//         }

//         /* ── Shell + animated border beam ─────────────────────────────── */
//         .ka-shell {
//           position: relative;
//           border-radius: 18px;
//           padding: 1.5px;
//           overflow: hidden;
//           background: rgba(255, 255, 255, 0.05);
//           box-shadow:
//             0 1px 0 rgba(255, 255, 255, 0.03) inset,
//             0 30px 60px -30px rgba(0, 0, 0, 0.6);
//         }
//         .ka-beam {
//           position: absolute;
//           width: 250%;
//           aspect-ratio: 1;
//           top: 50%;
//           left: 50%;
//           z-index: 0;
//           pointer-events: none;
//           background: conic-gradient(
//             from 0deg,
//             transparent 0%,
//             transparent 70%,
//             rgba(170, 255, 0, 0) 75%,
//             rgba(170, 255, 0, 0.15) 78%,
//             rgba(170, 255, 0, 0.45) 81%,
//             rgba(170, 255, 0, 0.8) 83%,
//             #aaff00 84%,
//             rgba(170, 255, 0, 0.8) 85%,
//             rgba(170, 255, 0, 0.35) 87.5%,
//             rgba(170, 255, 0, 0.08) 91%,
//             transparent 94%
//           );
//         }

//         /* ── Inner panel ─────────────────────────────────────────────── */
//         .ka-panel {
//           position: relative;
//           background: #060e20;
//           border-radius: 16.5px;
//           padding: clamp(22px, 3.2vw, 34px) clamp(20px, 3vw, 32px);
//           z-index: 1;
//           overflow: hidden;
//         }

//         /* Refined dot grid — faded by radial mask so it never feels noisy
//            or competes with content. Sits behind everything. */
//         .ka-bg-grid {
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(
//             circle,
//             rgba(255, 255, 255, 0.07) 1px,
//             transparent 1px
//           );
//           background-size: 22px 22px;
//           -webkit-mask-image: radial-gradient(
//             ellipse 90% 75% at 50% 50%,
//             #000 25%,
//             transparent 85%
//           );
//           mask-image: radial-gradient(
//             ellipse 90% 75% at 50% 50%,
//             #000 25%,
//             transparent 85%
//           );
//           pointer-events: none;
//         }

//         .ka-glow-lime,
//         .ka-glow-blue {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           pointer-events: none;
//           border-radius: 50%;
//         }
//         .ka-glow-lime {
//           right: -60px;
//           width: 320px;
//           height: 320px;
//           background: radial-gradient(circle, rgba(170, 255, 0, 0.09), transparent 65%);
//         }
//         .ka-glow-blue {
//           left: -40px;
//           width: 240px;
//           height: 240px;
//           background: radial-gradient(circle, rgba(59, 130, 246, 0.06), transparent 65%);
//         }

//         /* ── Row layout ──────────────────────────────────────────────── */
//         .ka-row {
//           position: relative;
//           z-index: 1;
//           display: grid;
//           grid-template-columns: minmax(220px, 280px) 1px 1fr;
//           align-items: center;
//           gap: clamp(22px, 3vw, 36px);
//         }
//         .ka-vdiv {
//           width: 1px;
//           align-self: stretch;
//           background: linear-gradient(
//             180deg,
//             transparent,
//             rgba(255, 255, 255, 0.1) 50%,
//             transparent
//           );
//         }

//         /* ── Brand block ─────────────────────────────────────────────── */
//         .ka-brand-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 10.5px;
//           font-weight: 600;
//           color: #aaff00;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           margin-bottom: 12px;
//           font-family: var(--font-general-sans, "General Sans", sans-serif);
//         }
//         .ka-brand-tag::before {
//           content: "";
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #aaff00;
//           box-shadow: 0 0 10px rgba(170, 255, 0, 0.7);
//         }

//         .ka-heading {
//   margin: 0;
//   font-size: clamp(22px, 2.4vw, 28px);   /* was clamp(20px, 2.2vw, 25px) */
//   font-weight: 700;
//   color: var(--ka-navy-900);
//   line-height: 1.18;                      /* was 1.22 */
//   letter-spacing: -0.022em;               /* was -0.02em */
// }
//         .ka-heading-accent {
//           color: #aaff00;
//         }

//         .ka-sub {
//           margin: 10px 0 0;
//           font-size: 12.5px;
//           line-height: 1.6;
//           color: #94a3b8;
//           max-width: 280px;
//           font-family: var(--font-general-sans, "General Sans", sans-serif);
//         }

//         /* ── Stats grid (5 stats + CTA = 6 cells, 3×2 on desktop) ────── */
//         .ka-stats {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 0;
//         }

//         .ka-stat-cell {
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 14px 10px;
//           text-align: center;
//           border-radius: 8px;
//           transition: background 0.25s ease;
//         }
//         .ka-stat-cell:hover {
//           background: rgba(170, 255, 0, 0.04);
//         }
//         /* Vertical dividers between cells in a row */
//         .ka-stat-cell:not(:nth-child(3n))::after {
//           content: "";
//           position: absolute;
//           right: 0;
//           top: 22%;
//           bottom: 22%;
//           width: 1px;
//           background: rgba(255, 255, 255, 0.07);
//         }
//         /* Horizontal divider between rows */
//         .ka-stat-cell:nth-child(-n+3) {
//           border-bottom: 1px solid rgba(255, 255, 255, 0.06);
//         }

//         .ka-stat-value-row {
//           display: flex;
//           align-items: baseline;
//           gap: 2px;
//         }
//         .ka-stat-value {
//           font-size: clamp(26px, 2.6vw, 32px);
//           font-weight: 800;
//           line-height: 1;
//           letter-spacing: -0.03em;
//           color: #e0f2fe;
//           font-variant-numeric: tabular-nums;
//           font-feature-settings: "tnum";
//         }
//         .ka-stat-suffix {
//           font-size: 18px;
//           font-weight: 700;
//           line-height: 1;
//           color: #aaff00;
//         }
//         .ka-stat-suffix.is-gold {
//           color: #f59e0b;
//           font-size: 16px;
//         }

//         .ka-stat-label {
//           margin-top: 8px;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: #94a3b8;
//           line-height: 1.4;
//           font-family: var(--font-general-sans, "General Sans", sans-serif);
//         }

//         .ka-stat-stars {
//           display: flex;
//           gap: 2px;
//           margin-top: 6px;
//         }
//         .ka-star {
//           font-size: 9px;
//           color: #f59e0b;
//         }
//         .ka-star-half {
//           opacity: 0.35;
//         }

//         /* ── CTA pill — occupies the 6th grid cell ──────────────────── */
//         .ka-cta-pill {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 7px;
//           margin: 14px;
//           padding: 10px 14px;
//           font-size: 10.5px;
//           font-weight: 600;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #aaff00;
//           background: rgba(170, 255, 0, 0.06);
//           border: 1px solid rgba(170, 255, 0, 0.22);
//           border-radius: 999px;
//           text-decoration: none;
//           white-space: nowrap;
//           align-self: center;
//           font-family: var(--font-general-sans, "General Sans", sans-serif);
//           transition:
//             background 0.25s ease,
//             border-color 0.25s ease,
//             transform 0.25s ease;
//         }
//         .ka-cta-pill:hover {
//           background: rgba(170, 255, 0, 0.12);
//           border-color: rgba(170, 255, 0, 0.5);
//         }
//         .ka-cta-pill svg {
//           transition: transform 0.25s ease;
//         }
//         .ka-cta-pill:hover svg {
//           transform: translateX(3px);
//         }
//         .ka-cta-pill:focus-visible {
//           outline: 2px solid #aaff00;
//           outline-offset: 3px;
//         }

//         /* ─── Tablet (≤ 900px) ───────────────────────────────────────── */
//         @media (max-width: 900px) {
//           .ka-row {
//             grid-template-columns: 1fr;
//             gap: 22px;
//           }
//           .ka-vdiv {
//             display: none;
//           }
//           .ka-sub {
//             max-width: none;
//           }
//           .ka-stats {
//             border-top: 1px solid rgba(255, 255, 255, 0.06);
//             padding-top: 18px;
//           }
//         }

//         /* ─── Mobile (≤ 560px) ──────────────────────────────────────── */
//         @media (max-width: 560px) {
//           .ka-panel { padding: 22px 16px; }
//           .ka-stats {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 2px;
//           }
//           /* Reset desktop dividers */
//           .ka-stat-cell::after,
//           .ka-stat-cell {
//             border-bottom: 0 !important;
//           }
//           .ka-stat-cell:not(:nth-child(3n))::after {
//             display: none;
//           }
//           /* Vertical divider between 2 cols */
//           .ka-stat-cell:nth-child(odd)::after {
//             content: "";
//             display: block;
//             position: absolute;
//             right: 0;
//             top: 22%;
//             bottom: 22%;
//             width: 1px;
//             background: rgba(255, 255, 255, 0.06);
//           }
//           /* Horizontal divider between rows */
//           .ka-stat-cell:nth-child(-n+4) {
//             border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
//           }
//           .ka-stat-cell {
//             padding: 16px 8px;
//           }
//           /* CTA spans full width below the 5 stats */
//           .ka-cta-pill {
//             grid-column: 1 / -1;
//             margin: 14px 0 0;
//             padding: 12px 18px;
//             font-size: 11px;
//           }
//         }

//         /* ─── Very small (≤ 360px) — tighten typography ─────────────── */
//         @media (max-width: 360px) {
//           .ka-stat-value {
//             font-size: 22px;
//           }
//           .ka-stat-suffix {
//             font-size: 15px;
//           }
//           .ka-stat-label {
//             font-size: 9px;
//             letter-spacing: 0.1em;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .ka-beam {
//             animation: none !important;
//           }
//         }
//       `}</style>

//       <section
//         ref={ref}
//         aria-label="Kota Academy credibility metrics"
//        className="ka-section absolute inset-x-0 top-0 z-20 flex -translate-y-1/2 justify-center"
//       >
//         <div className="ka-shell">
//           <motion.div
//             className="ka-beam"
//             aria-hidden="true"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 6, ease: "linear", repeat: Infinity }}
//             style={{ x: "-50%", y: "-50%" }}
//           />

//           <div className="ka-panel">
//             <div className="ka-bg-grid" aria-hidden="true" />
//             <div className="ka-glow-lime" aria-hidden="true" />
//             <div className="ka-glow-blue" aria-hidden="true" />

//             <div className="ka-row">
//               {/* ── Brand block ─────────────────────────────────────── */}
//               <motion.div
//                 initial={{ opacity: 0, x: -12 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
//                 transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
//               >
//                 <div className="ka-brand-tag">Est. 2017 · Greater Noida</div>
//                 {/* <h2 className="ka-heading">
//                   Proven by{" "}
//                   <span className="ka-heading-accent">results.</span>
//                   <br />
//                   Trusted by{" "}
//                   <span className="ka-heading-accent">families.</span>
//                 </h2> */}

//                 <h2 className="ka-heading">
//   Proven by <span className="ka-heading-accent">results</span>,
//   {" "}trusted by <span className="ka-heading-accent">families</span>.
// </h2>
//                 <p className="ka-sub">
//                   Disciplined preparation meets personal mentorship — a
//                   track record you can verify, batch after batch.
//                 </p>
//               </motion.div>

//               {/* ── Vertical divider ────────────────────────────────── */}
//               <div className="ka-vdiv" aria-hidden="true" />

//               {/* ── Stats grid (5 cells + CTA) ──────────────────────── */}
//               <div className="ka-stats">
//                 {STATS.map((stat, i) => (
//                   <StatCell
//                     key={stat.id}
//                     stat={stat}
//                     index={i}
//                     triggered={isInView}
//                   />
//                 ))}
//                 <ResultsCTA triggered={isInView} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Data
   ⚠️ Selections / Students / Per-Batch are DEMO placeholders —
   swap for verified figures. Google rating (4.7) is REAL
   (Alpha-I ★4.7 · Omicron-III ★4.4 → lead with 4.7).
   "Years" stat removed: it duplicated the "Est. 2017" tag.
   ───────────────────────────────────────────────────────────── */
interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  decimal: boolean;
  google?: boolean;   // renders the Google "G" mark + star
  optional?: boolean; // hidden on mobile to keep the row to 3
}

const STATS: Stat[] = [
  { id: 1, value: 500, suffix: "+", label: "IIT / NEET Selections", decimal: false },
  { id: 2, value: 5000, suffix: "+", label: "Students Mentored", decimal: false },
  { id: 3, value: 30, suffix: "", label: "Per Batch", decimal: false, optional: true },
  { id: 4, value: 4.7, suffix: "", label: "Google Rating", decimal: true, google: true },
];

/* ── Authentic multi-colour Google "G" ── */
function GoogleG({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.792 2.237-2.231 4.166-4.087 5.573l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function useCountUp(target: number, duration: number, decimal: boolean, delay: number, triggered: boolean): string {
  const [count, setCount] = useState(decimal ? "0.0" : "0");

  useEffect(() => {
    if (!triggered) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(decimal ? target.toFixed(1) : target.toString());
      return;
    }
    let rafId = 0;
    let startTime: number | null = null;
    const timeoutId = setTimeout(() => {
      const tick = (ts: number) => {
        if (startTime === null) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const value = easeOutExpo(progress) * target;
        setCount(decimal ? value.toFixed(1) : Math.floor(value).toString());
        if (progress < 1) rafId = requestAnimationFrame(tick);
        else setCount(decimal ? target.toFixed(1) : target.toString());
      };
      rafId = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [triggered, target, duration, decimal, delay]);

  return count;
}

function StatCell({ stat, index, triggered }: { stat: Stat; index: number; triggered: boolean }) {
  const count = useCountUp(stat.value, 1800, stat.decimal, index * 100, triggered);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ delay: 0.22 + index * 0.07, duration: 0.5, ease: "easeOut" }}
      className={`ka-stat-cell${stat.optional ? " ka-optional" : ""}`}
    >
      <div className="ka-stat-value-row">
        {stat.google && <GoogleG size={17} />}
        <span className="ka-stat-value">{count}</span>
        {stat.google ? (
          <span className="ka-star-gold" aria-hidden="true">★</span>
        ) : (
          stat.suffix && <span className="ka-stat-suffix">{stat.suffix}</span>
        )}
      </div>
      <span className="ka-stat-label">{stat.label}</span>
    </motion.div>
  );
}

function ResultsCTA({ triggered }: { triggered: boolean }) {
  return (
    <motion.a
      href="#results"
      initial={{ opacity: 0, y: 8 }}
      animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      className="ka-cta-pill"
      aria-label="View all student results"
    >
      <span>View Results</span>
      <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.a>
  );
}

export default function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  return (
    <>
      <style>{`
        .ka-section {
          width: 100%;
          max-width: 1040px;
          margin-inline: auto;
          padding-inline: 16px;
          font-family: var(--font-manrope, Manrope, sans-serif);
        }

        .ka-shell {
          position: relative;
          border-radius: 18px;
          padding: 1.5px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.03) inset,
            0 26px 54px -28px rgba(0, 0, 0, 0.6);
        }
        .ka-beam {
          position: absolute;
          width: 250%;
          aspect-ratio: 1;
          top: 50%;
          left: 50%;
          z-index: 0;
          pointer-events: none;
          background: conic-gradient(
            from 0deg,
            transparent 0%, transparent 70%,
            rgba(170, 255, 0, 0) 75%,
            rgba(170, 255, 0, 0.15) 78%,
            rgba(170, 255, 0, 0.45) 81%,
            rgba(170, 255, 0, 0.8) 83%,
            #aaff00 84%,
            rgba(170, 255, 0, 0.8) 85%,
            rgba(170, 255, 0, 0.35) 87.5%,
            rgba(170, 255, 0, 0.08) 91%,
            transparent 94%
          );
        }

        .ka-panel {
          position: relative;
          background: #060e20;
          border-radius: 16.5px;
          /* trimmed from clamp(22-34) */
          padding: clamp(16px, 2.2vw, 22px) clamp(18px, 2.6vw, 28px);
          z-index: 1;
          overflow: hidden;
        }

        .ka-bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 22px 22px;
          -webkit-mask-image: radial-gradient(ellipse 90% 75% at 50% 50%, #000 25%, transparent 85%);
          mask-image: radial-gradient(ellipse 90% 75% at 50% 50%, #000 25%, transparent 85%);
          pointer-events: none;
        }
        .ka-glow-lime {
          position: absolute;
          top: 50%;
          right: -60px;
          width: 280px;
          height: 280px;
          transform: translateY(-50%);
          pointer-events: none;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(170, 255, 0, 0.09), transparent 65%);
        }

        /* ── Row: brand · divider · metrics ── */
        .ka-row {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(188px, 240px) 1px 1fr;
          align-items: center;
          gap: clamp(18px, 2.4vw, 28px);
        }
        .ka-vdiv {
          width: 1px;
          align-self: stretch;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.1) 50%, transparent);
        }

        /* ── Brand block ── */
        .ka-brand-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #aaff00;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 9px;
          font-family: var(--font-general-sans, "General Sans", sans-serif);
        }
        .ka-brand-tag::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #aaff00;
          box-shadow: 0 0 10px rgba(170, 255, 0, 0.7);
        }
        .ka-heading {
          margin: 0;
          font-size: clamp(18px, 2vw, 23px);
          font-weight: 700;
          color: #eaf2ff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .ka-heading-accent { color: #aaff00; }
        .ka-sub {
          margin: 9px 0 0;
          font-size: 12px;
          line-height: 1.55;
          color: #94a3b8;
          max-width: 280px;
          font-family: var(--font-general-sans, "General Sans", sans-serif);
        }

        /* ── Metrics: 4 stats in ONE row + CTA ── */
        .ka-metrics {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ka-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          flex: 1;
        }
        .ka-stat-cell {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8px 8px;
          text-align: center;
          border-radius: 8px;
          transition: background 0.25s ease;
        }
        .ka-stat-cell:hover { background: rgba(170, 255, 0, 0.04); }
        .ka-stat-cell:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 24%;
          bottom: 24%;
          width: 1px;
          background: rgba(255, 255, 255, 0.07);
        }
        .ka-stat-value-row {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ka-stat-value {
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #eaf2ff;
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
        }
        .ka-stat-suffix { font-size: 16px; font-weight: 700; line-height: 1; color: #aaff00; }
        .ka-star-gold { font-size: 14px; line-height: 1; color: #f59e0b; }
        .ka-stat-label {
          margin-top: 5px;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #94a3b8;
          line-height: 1.35;
          font-family: var(--font-general-sans, "General Sans", sans-serif);
        }

        .ka-cta-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 9px 14px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #aaff00;
          background: rgba(170, 255, 0, 0.06);
          border: 1px solid rgba(170, 255, 0, 0.22);
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: var(--font-general-sans, "General Sans", sans-serif);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .ka-cta-pill:hover { background: rgba(170, 255, 0, 0.12); border-color: rgba(170, 255, 0, 0.5); }
        .ka-cta-pill svg { transition: transform 0.25s ease; }
        .ka-cta-pill:hover svg { transform: translateX(3px); }
        .ka-cta-pill:focus-visible { outline: 2px solid #aaff00; outline-offset: 3px; }

        /* ── Tablet (≤ 900px): stack brand over metrics, drop paragraph ── */
        @media (max-width: 900px) {
          .ka-row { grid-template-columns: 1fr; gap: 16px; }
          .ka-vdiv { display: none; }
          .ka-sub { display: none; }
          .ka-metrics {
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            padding-top: 14px;
          }
          .ka-cta-pill { width: 100%; }
        }

        /* ── Mobile (≤ 560px): 3 stats in one row, drop Per-Batch ── */
        @media (max-width: 560px) {
          .ka-panel { padding: 16px 14px; }
          .ka-stats { grid-template-columns: repeat(3, 1fr); }
          .ka-optional { display: none; }
          .ka-stat-cell { padding: 6px 4px; }
          .ka-stat-value { font-size: 21px; }
        }
        @media (max-width: 360px) {
          .ka-stat-value { font-size: 19px; }
          .ka-stat-label { font-size: 9px; letter-spacing: 0.1em; }
        }
      `}</style>

      <section
        ref={ref}
        aria-label="Kota Academy credibility metrics"
        className="ka-section absolute inset-x-0 top-0 z-20 flex -translate-y-1/2 justify-center"
      >
        <div className="ka-shell">
          <motion.div
            className="ka-beam"
            aria-hidden="true"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={reduce ? undefined : { duration: 6, ease: "linear", repeat: Infinity }}
            style={{ x: "-50%", y: "-50%" }}
          />

          <div className="ka-panel">
            <div className="ka-bg-grid" aria-hidden="true" />
            <div className="ka-glow-lime" aria-hidden="true" />

            <div className="ka-row">
              {/* brand block */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="ka-brand-tag">Est. 2017 · Greater Noida</div>
                <h2 className="ka-heading">
                  Proven by <span className="ka-heading-accent">results</span>, trusted by{" "}
                  <span className="ka-heading-accent">families</span>.
                </h2>
                <p className="ka-sub">
                  Disciplined preparation meets personal mentorship — a track record you can verify, batch after batch.
                </p>
              </motion.div>

              <div className="ka-vdiv" aria-hidden="true" />

              {/* metrics: 4 stats in one row + CTA */}
              <div className="ka-metrics">
                <div className="ka-stats">
                  {STATS.map((stat, i) => (
                    <StatCell key={stat.id} stat={stat} index={i} triggered={isInView} />
                  ))}
                </div>
                <ResultsCTA triggered={isInView} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}