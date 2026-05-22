"use client";

import { ArrowRight } from "lucide-react";
import styles from "./hero.module.css";

/**
 * HeroPill — the eyebrow announcement pill above the headline.
 *
 * Design: Direction B (segmented — solid lime claim-chip + label +
 * nudging arrow) wearing Direction C's treatment (a slow rotating
 * conic glow border + periodic shimmer sweep, both in hero.module.css).
 *
 * It's a real anchor link — doubles as a soft CTA into results/about.
 * All colour is from the semantic token layer; nothing hard-coded.
 *
 * Props let it be reused elsewhere later (e.g. section eyebrows).
 */
type HeroPillProps = {
  /** Bold text inside the solid lime chip. */
  tag?: string;
  /** Quiet label after the chip. */
  label?: string;
  /** Where the pill links to. */
  href?: string;
  /** Stagger index for the entrance reveal. */
  revealIndex?: number;
};

export function HeroPill({
  tag = "17+ YEARS",
  label = "Trusted by 1000+ students & parents",
  href = "#results",
  revealIndex = 0,
}: HeroPillProps) {
  return (
    <a
      href={href}
      className={`${styles.pill} ${styles.reveal} group  flex w-fit items-center gap-2.5 rounded-full border border-border-subtle bg-elevated/60  backdrop-blur-md transition-[transform,border-color,background-color] duration-base ease-out hover:-translate-y-0.5 hover:border-border-default hover:bg-elevated`}
      style={{ "--i": revealIndex } as React.CSSProperties}
    >
      {/* Solid lime claim-chip — carries the bold part */}
      <span className="rounded-full bg-brand px-2.5 py-1 font-display text-[11px] font-bold uppercase leading-none tracking-[0.06em] text-brand-ink transition-shadow duration-base ease-soft group-hover:shadow-[var(--glow-primary)]">
        {tag}
      </span>

      {/* Quiet label */}
      <span className="text-[12.5px] font-medium leading-none text-secondary">
        {label}
      </span>

      {/* Nudging arrow */}
      <ArrowRight
        className="size-3.5 shrink-0 text-muted-fg transition-[transform,color] duration-base ease-out group-hover:translate-x-0.5 group-hover:text-brand"
        strokeWidth={2.6}
        aria-hidden
      />
    </a>
  );
}