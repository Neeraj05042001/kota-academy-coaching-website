"use client";

/**
 * CourseCard — Kota Academy courses section
 * --------------------------------------------------------------------------
 * Light premium card: image on top → soft fade → light content area.
 * - Desktop (lg+): 2×2 feature grid visible by default, 4-col row layout.
 * - Mobile/tablet (<lg): features hidden behind a "View Features" accordion,
 *   card stays compact (~230–250px collapsed), 2-col grid.
 * - 4 course accents: lime (JEE) · sky (NEET) · gold (Boards) · purple (Foundation).
 * - Accents touch only: icon badge, audience label, feature pills, CTA.
 *   The card base stays ivory — never fully colored.
 *
 * Drop-in: keep your existing CoursesSection / header / grid. Only swap the
 * card + the `courses` data (now 4 accents) + this accent helper.
 * Grid that matches the mockup:
 *   grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5
 * --------------------------------------------------------------------------
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Lightbulb,
  Microscope,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────────── Types ───────────────────────────── */

export type CourseAccent = "lime" | "sky" | "gold" | "purple";

export type CourseHighlight = {
  label: string;
  icon: LucideIcon;
};

export type Course = {
  title: string;
  audience: string;
  description: string;
  href: string;
  image: string;
  accent: CourseAccent;
  icon: LucideIcon;
  badge?: string;
  highlights: CourseHighlight[];
  exploreLabel: string;
  /** Optional shortened CTA label for the smallest (2-col) mobile cards. */
  shortLabel?: string;
};

/* ─────────────────────── Accent class system ────────────────────── */

type AccentClasses = {
  border: string;
  iconColor: string; // icon badge glyph color
  audience: string; // audience/class label text color
  bar: string; // small accent underline bar
  pill: string; // feature pill: border color + soft tinted bg
  pillIcon: string; // feature pill icon color
  cta: string; // CTA bg + hover + text
  ring: string; // focus-visible ring color
};

const ACCENTS: Record<CourseAccent, AccentClasses> = {
  lime: {
    border: "border-lime-600/20",
    iconColor: "text-lime-600",
    audience: "text-lime-700",
    bar: "bg-lime-500",
    pill: "border-lime-600/15 bg-lime-50/80",
    pillIcon: "text-lime-600",
    cta: "bg-[#65A30D] text-white hover:bg-[#4D7C0F]",
    ring: "focus-visible:ring-lime-500",
  },
  sky: {
    border: "border-sky-600/20",
    iconColor: "text-sky-600",
    audience: "text-sky-700",
    bar: "bg-sky-500",
    pill: "border-sky-600/15 bg-sky-50/80",
    pillIcon: "text-sky-600",
    cta: "bg-[#1D8FE8] text-white hover:bg-[#0F76C9]",
    ring: "focus-visible:ring-sky-500",
  },
  gold: {
    border: "border-amber-500/25",
    iconColor: "text-amber-600",
    audience: "text-amber-700",
    bar: "bg-amber-500",
    pill: "border-amber-500/20 bg-amber-50/80",
    pillIcon: "text-amber-600",
    // Deepened gold so white text clears WCAG AA (bright gold + white fails contrast).
    cta: "bg-[#B07A0A] text-white hover:bg-[#925F07]",
    ring: "focus-visible:ring-amber-500",
  },
  purple: {
    border: "border-violet-500/20",
    iconColor: "text-violet-600",
    audience: "text-violet-700",
    bar: "bg-violet-500",
    pill: "border-violet-500/15 bg-violet-50/80",
    pillIcon: "text-violet-600",
    cta: "bg-[#7C3AED] text-white hover:bg-[#6627CC]",
    ring: "focus-visible:ring-violet-500",
  },
};

export function getCourseAccentClasses(accent: CourseAccent): AccentClasses {
  return ACCENTS[accent];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ──────────────────────────── Component ─────────────────────────── */

export function CourseCard({ course }: { course: Course }) {
  const [showFeatures, setShowFeatures] = useState(false);

  const Icon = course.icon;
  const accent = getCourseAccentClasses(course.accent);
  const panelId = `course-features-${slugify(course.title)}`;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.25rem] border bg-[#F8FAF2] shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[1.5rem] ${accent.border}`}
    >
      {/* ── Image area ── */}
      <div className="relative h-24 shrink-0 overflow-hidden sm:h-36 lg:h-44">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Soft bottom fade blending image into the ivory content area */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F8FAF2] via-[#F8FAF2]/70 to-transparent"
        />

        {/* Icon badge (frosted glass, accent glyph) */}
        <div
          className={`absolute left-2.5 top-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-white/70 backdrop-blur-md transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100 sm:left-3 sm:top-3 lg:h-[52px] lg:w-[52px] lg:rounded-2xl ${accent.iconColor}`}
        >
          <Icon
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            strokeWidth={1.9}
            aria-hidden="true"
          />
        </div>

        {/* Optional "Most Popular" badge — fixed lime pill, dark text */}
        {course.badge ? (
          <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-lime-300 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.06em] text-emerald-900 shadow-sm sm:right-3 sm:top-3 sm:text-[10px]">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {course.badge}
          </span>
        ) : null}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col px-3 pb-3 pt-1.5 sm:px-4 sm:pb-4 lg:px-5 lg:pb-5">
        <h3 className="line-clamp-2 text-[0.95rem] font-extrabold leading-tight tracking-tight text-[#0B1628] sm:text-lg lg:text-xl">
          {course.title}
        </h3>

        <p
          className={`mt-1 text-[11px] font-bold sm:text-xs lg:text-sm ${accent.audience}`}
        >
          {course.audience}
        </p>

        {/* Accent underline (subtle, grows on hover) */}
        <span
          aria-hidden="true"
          className={`mt-2 hidden h-0.5 w-7 rounded-full transition-all duration-300 group-hover:w-12 motion-reduce:transition-none lg:block ${accent.bar}`}
        />

        <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-600 sm:text-xs lg:text-sm lg:leading-6">
          {course.description}
        </p>

        {/* Desktop: 2×2 feature grid (visible by default) */}
        <div className="mt-3 hidden grid-cols-2 gap-2 lg:grid">
          {course.highlights.slice(0, 4).map((highlight) => {
            const HighlightIcon = highlight.icon;
            return (
              <span
                key={highlight.label}
                className={`inline-flex min-h-[2.25rem] items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 ${accent.pill}`}
              >
                <HighlightIcon
                  className={`h-3.5 w-3.5 shrink-0 ${accent.pillIcon}`}
                  aria-hidden="true"
                />
                <span className="leading-tight">{highlight.label}</span>
              </span>
            );
          })}
        </div>

        {/* Mobile / tablet: accordion (features hidden by default) */}
        <div className="mt-3 lg:hidden">
          <button
            type="button"
            onClick={() => setShowFeatures((open) => !open)}
            aria-expanded={showFeatures}
            aria-controls={panelId}
            className={`flex w-full items-center justify-between rounded-lg border px-2.5 py-2 text-[11px] font-bold text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${accent.pill} ${accent.ring}`}
          >
            <span>View Features</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                showFeatures ? "rotate-180" : ""
              } ${accent.pillIcon}`}
              aria-hidden="true"
            />
          </button>

          {/* grid-rows trick = smooth, height-agnostic collapse */}
          <div
            id={panelId}
            className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
              showFeatures
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="min-h-0 space-y-1.5">
              {course.highlights.slice(0, 4).map((highlight) => {
                const HighlightIcon = highlight.icon;
                return (
                  <li
                    key={highlight.label}
                    className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[10.5px] font-semibold text-slate-700 ${accent.pill}`}
                  >
                    <HighlightIcon
                      className={`h-3.5 w-3.5 shrink-0 ${accent.pillIcon}`}
                      aria-hidden="true"
                    />
                    <span>{highlight.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ── CTA (always visible, pinned to card bottom for row alignment) ── */}
        <div className="mt-auto pt-4">
          <Link
            href={course.href}
            aria-label={course.exploreLabel}
            className={`group/cta inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-xl px-3 text-[12px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-sm lg:min-h-[44px] ${accent.cta} ${accent.ring}`}
          >
            <span className="sm:hidden">{course.shortLabel ?? "Explore"}</span>
            <span className="hidden sm:inline">{course.exploreLabel}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ───────────────────────── Course data ─────────────────────────── */
/* Move this to your section file if you prefer. Image filenames match the
 * asset sheet — save the four images in /public/images/courses/. */

export const courses: Course[] = [
  {
    title: "JEE Main & Advanced",
    audience: "Class 11, 12 & Droppers",
    description:
      "Complete JEE preparation with concept clarity, advanced practice, tests & performance tracking.",
    href: "/courses/jee-main-advanced",
    image: "/images/courses/jee-main-advanced.png",
    accent: "lime",
    icon: Target,
    badge: "Most Popular",
    exploreLabel: "Explore JEE Program",
    shortLabel: "Explore",
    highlights: [
      { label: "Concept Clarity", icon: Lightbulb },
      { label: "Advanced Practice", icon: PenTool },
      { label: "Weekly Tests", icon: CalendarCheck },
      { label: "Doubt Support", icon: UserRound },
    ],
  },
  {
    title: "NEET UG Preparation",
    audience: "Class 11, 12 & Droppers",
    description:
      "Focused NEET preparation with NCERT mastery, regular tests, and expert doubt support.",
    href: "/courses/neet-ug-preparation",
    image: "/images/courses/neet-ug-preparation.png",
    accent: "sky",
    icon: Stethoscope,
    exploreLabel: "Explore NEET Program",
    shortLabel: "Explore",
    highlights: [
      { label: "NCERT Mastery", icon: BookOpen },
      { label: "Biology Focus", icon: Microscope },
      { label: "Regular Tests", icon: ClipboardCheck },
      { label: "Doubt Support", icon: UserRound },
    ],
  },
  {
    title: "Class 11–12 Boards",
    audience: "CBSE / State Board Prep",
    description:
      "Strengthen concepts, improve scores, and excel in school and board examinations.",
    href: "/courses/class-11-12-boards",
    image: "/images/courses/class-11-12-boards.png",
    accent: "gold",
    icon: BookOpen,
    exploreLabel: "Explore Boards Program",
    shortLabel: "Explore",
    highlights: [
      { label: "Chapter Practice", icon: ClipboardCheck },
      { label: "Board Exam Focus", icon: ShieldCheck },
      { label: "Answer Writing", icon: FileText },
      { label: "Score Improvement", icon: TrendingUp },
    ],
  },
  {
    title: "Class 8–10 Foundation",
    audience: "Class 8, 9 & 10 Students",
    description:
      "Build strong Maths, Science & Reasoning fundamentals to stay ahead for future exams.",
    href: "/courses/class-8-10-foundation",
    image: "/images/courses/class-8-10-foundation.png",
    accent: "purple",
    icon: GraduationCap,
    exploreLabel: "Explore Foundation Program",
    shortLabel: "Explore",
    highlights: [
      { label: "Strong Basics", icon: Lightbulb },
      { label: "Olympiad Support", icon: Sparkles },
      { label: "Regular Assessments", icon: ClipboardCheck },
      { label: "Future Ready", icon: Rocket },
    ],
  },
];

export default CourseCard;