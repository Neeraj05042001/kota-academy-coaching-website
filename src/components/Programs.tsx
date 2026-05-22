"use client";

import {
  Calculator,
  Stethoscope,
  GraduationCap,
  BarChart3,
  Trophy,
  Users,
  Target,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";

type ThemeMode = "dark" | "light";

type Course = {
  title: string;
  eyebrow: string;
  description: string;
  meta?: string;
  icon: React.ElementType;
  accent: "blue" | "green" | "lime";
  large?: boolean;
};

const courses: Course[] = [
  {
    title: "JEE Mains + Advanced",
    eyebrow: "Class 11 & 12 • IITian Faculty",
    description: "Small batch • Test series included",
    meta: "Next batch: 10 June",
    icon: Calculator,
    accent: "blue",
  },
  {
    title: "NEET (Medical)",
    eyebrow: "Class 11 & 12 • AIIMS Graduate Faculty",
    description: "Biology specialist • NCERT focused",
    meta: "Next batch: 10 June",
    icon: Stethoscope,
    accent: "green",
  },
  {
    title: "Foundation (Class 6–10)",
    eyebrow: "Board + Competitive Base",
    description: "Science & Maths • Olympiad preparation",
    meta: "Year-round batches",
    icon: GraduationCap,
    accent: "lime",
  },
  {
    title: "Commerce (Class 11–12)",
    eyebrow: "Accountancy • Economics • Business Studies • Maths",
    description: "Build strong fundamentals. Score high.",
    icon: BarChart3,
    accent: "blue",
    large: true,
  },
  {
    title: "Droppers / Repeater Batch",
    eyebrow: "1-year intensive • JEE + NEET",
    description: "Personalised recovery plan • Mentor support",
    icon: Target,
    accent: "blue",
    large: true,
  },
];

const trustItems = [
  {
    title: "1L+ Students Mentored",
    text: "Across India & abroad",
    icon: Users,
  },
  {
    title: "IIT & AIIMS Results",
    text: "Consistent top ranks every year",
    icon: Trophy,
  },
  {
    title: "Expert Faculty",
    text: "IITians, NITians & subject experts",
    icon: GraduationCap,
  },
  {
    title: "Proven Pedagogy",
    text: "Concept clarity • Practice • Tests",
    icon: CalendarCheck,
  },
  {
    title: "Track Record of Trust",
    text: "20+ years of academic excellence",
    icon: ShieldCheck,
  },
];

const accentStyles = {
  dark: {
    blue: {
      icon: "text-[#3B82F6] bg-[#0B1B36] border-[#2563EB]/50",
      button:
        "from-[#2563EB] to-[#3B82F6] hover:shadow-[0_0_34px_rgba(59,130,246,0.32)]",
      text: "text-[#60A5FA]",
      glow: "group-hover:bg-[#2563EB]/10",
    },
    green: {
      icon: "text-[#6AD244] bg-[#102414] border-[#45A82E]/50",
      button:
        "from-[#45A82E] to-[#6AD244] hover:shadow-[0_0_34px_rgba(106,210,68,0.28)]",
      text: "text-[#8BE65E]",
      glow: "group-hover:bg-[#45A82E]/10",
    },
    lime: {
      icon: "text-[#B9F234] bg-[#1B2608] border-[#A6E22E]/50",
      button:
        "from-[#95D600] to-[#B9F234] hover:shadow-[0_0_34px_rgba(185,242,52,0.25)]",
      text: "text-[#C8FF4A]",
      glow: "group-hover:bg-[#B9F234]/10",
    },
  },
  light: {
    blue: {
      icon: "text-[#2563EB] bg-[#EFF6FF] border-[#BFDBFE]",
      button:
        "from-[#2563EB] to-[#3B82F6] hover:shadow-[0_16px_34px_rgba(37,99,235,0.22)]",
      text: "text-[#2563EB]",
      glow: "group-hover:bg-[#DBEAFE]/60",
    },
    green: {
      icon: "text-[#3E8F2B] bg-[#F0FBEA] border-[#CDEFC2]",
      button:
        "from-[#3E8F2B] to-[#6AD244] hover:shadow-[0_16px_34px_rgba(62,143,43,0.2)]",
      text: "text-[#3E8F2B]",
      glow: "group-hover:bg-[#E8FADC]/70",
    },
    lime: {
      icon: "text-[#72A300] bg-[#F4FCDC] border-[#DCF7A5]",
      button:
        "from-[#95D600] to-[#B9F234] hover:shadow-[0_16px_34px_rgba(149,214,0,0.2)]",
      text: "text-[#72A300]",
      glow: "group-hover:bg-[#F0FAD0]/80",
    },
  },
};

export default function Courses({ theme = "dark" }: { theme?: ThemeMode }) {
  const isDark = theme === "dark";

  return (
    <section
      className={[
        "relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8",
        isDark ? "bg-[#020817] text-white" : "bg-[#F8FBFF] text-[#071126]",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(185,242,52,0.12),transparent_24%)]"
            : "bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.1),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(185,242,52,0.18),transparent_24%)]",
        ].join(" ")}
      />

      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-[0.22]",
          "bg-[linear-gradient(to_right,rgba(96,165,250,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.18)_1px,transparent_1px)] bg-[size:44px_44px]",
          !isDark && "opacity-[0.16]",
        ].join(" ")}
      />

      <div
        className={[
          "relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border",
          isDark
            ? "border-[#1F3458] bg-[#030B18]/86 shadow-[0_30px_100px_rgba(0,0,0,0.42)]"
            : "border-[#D7E4F7] bg-white shadow-[0_24px_80px_rgba(15,35,75,0.08)]",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between border-b px-6 py-5 sm:px-8",
            isDark ? "border-[#1F3458]" : "border-[#D7E4F7]",
          ].join(" ")}
        >
          <div className="flex items-center gap-4">
            <span
              className={[
                "text-lg font-black tracking-tight",
                isDark ? "text-[#B9F234]" : "text-[#2563EB]",
              ].join(" ")}
            >
              06
            </span>
            <span
              className={[
                "h-8 w-px",
                isDark ? "bg-[#334766]" : "bg-[#C7D7EE]",
              ].join(" ")}
            />
            <h2 className="text-lg font-bold sm:text-xl">
              Programs & Courses
            </h2>
          </div>

          <div
            className={[
              "hidden items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide sm:flex",
              isDark
                ? "border-[#3B82F6]/60 bg-[#0B1B36]/70 text-white"
                : "border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB]",
            ].join(" ")}
          >
            <Star className="h-4 w-4 fill-current" />
            Engagement
          </div>
        </div>

        <div className="px-6 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className={[
                "mx-auto mb-4 inline-flex rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em]",
                isDark
                  ? "border-[#334766] bg-[#071426] text-[#60A5FA]"
                  : "border-[#D7E4F7] bg-[#F3F8FF] text-[#2563EB]",
              ].join(" ")}
            >
              Designed for every ambition
            </p>

            <h3 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Programs Designed for{" "}
              <span
                className={
                  isDark
                    ? "text-[#B9F234]"
                    : "bg-gradient-to-r from-[#2563EB] to-[#72A300] bg-clip-text text-transparent"
                }
              >
                Your Dream
              </span>
            </h3>

            <p
              className={[
                "mt-4 text-base leading-7 sm:text-lg",
                isDark ? "text-[#AEBBD0]" : "text-[#4C5872]",
              ].join(" ")}
            >
              From class 6 foundation to IIT/NEET final push — we have the
              right batch for every student.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard
                key={course.title}
                course={course}
                theme={theme}
                variant="primary"
              />
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {courses.slice(3).map((course) => (
              <CourseCard
                key={course.title}
                course={course}
                theme={theme}
                variant="wide"
              />
            ))}
          </div>

          <div
            className={[
              "mt-8 grid gap-0 overflow-hidden rounded-3xl border md:grid-cols-5",
              isDark
                ? "border-[#263A5C] bg-[#071426]/82"
                : "border-[#D7E4F7] bg-[#F8FBFF]",
            ].join(" ")}
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={[
                    "group relative flex gap-4 p-5 transition-all duration-300",
                    isDark
                      ? "hover:bg-[#0C1A2E]"
                      : "hover:bg-white",
                    index !== trustItems.length - 1 &&
                      (isDark
                        ? "md:border-r md:border-[#263A5C]"
                        : "md:border-r md:border-[#D7E4F7]"),
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:-translate-y-1",
                      isDark
                        ? "border-[#334766] bg-[#0B1B36] text-[#B9F234]"
                        : "border-[#D7E4F7] bg-white text-[#2563EB]",
                    ].join(" ")}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-sm font-black">{item.title}</h4>
                    <p
                      className={[
                        "mt-1 text-xs leading-5",
                        isDark ? "text-[#91A0B8]" : "text-[#5E6A80]",
                      ].join(" ")}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  course,
  theme,
  variant,
}: {
  course: Course;
  theme: ThemeMode;
  variant: "primary" | "wide";
}) {
  const isDark = theme === "dark";
  const Icon = course.icon;
  const accent = accentStyles[theme][course.accent];

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500",
        "hover:-translate-y-1",
        isDark
          ? "border-[#263A5C] bg-[#071426]/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-[#3B82F6]/60 hover:bg-[#09182C]"
          : "border-[#D7E4F7] bg-white shadow-[0_18px_50px_rgba(15,35,75,0.06)] hover:border-[#B8CEF0] hover:shadow-[0_24px_70px_rgba(15,35,75,0.1)]",
        variant === "wide" ? "lg:min-h-[170px]" : "min-h-[280px]",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-all duration-500",
          accent.glow,
        ].join(" ")}
      />

      <div
        className={[
          "relative flex gap-5",
          variant === "wide"
            ? "items-start sm:items-center"
            : "flex-col items-start",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105",
            accent.icon,
          ].join(" ")}
        >
          <Icon className="h-8 w-8" />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-2xl font-black tracking-tight">
            {course.title}
          </h4>

          <div
            className={[
              "mt-3 h-px w-full border-t border-dashed",
              isDark ? "border-[#263A5C]" : "border-[#D7E4F7]",
            ].join(" ")}
          />

          <p className={["mt-4 font-bold", accent.text].join(" ")}>
            {course.eyebrow}
          </p>

          <p
            className={[
              "mt-2 leading-7",
              isDark ? "text-[#AEBBD0]" : "text-[#4C5872]",
            ].join(" ")}
          >
            {course.description}
          </p>

          {course.meta && (
            <p className={["mt-2 font-extrabold", accent.text].join(" ")}>
              {course.meta}
            </p>
          )}
        </div>
      </div>

      <div
        className={[
          "relative mt-8 flex gap-4",
          variant === "wide"
            ? "sm:absolute sm:bottom-6 sm:right-6 sm:mt-0"
            : "",
        ].join(" ")}
      >
        <button
          className={[
            "group/btn inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-gradient-to-r px-5 py-3.5 text-sm font-black text-white transition-all duration-300 sm:flex-none sm:min-w-[210px]",
            accent.button,
          ].join(" ")}
        >
          Explore Program
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>

        {variant === "primary" && (
          <button
            className={[
              "inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-black transition-all duration-300",
              isDark
                ? "border-[#334766] bg-[#050E1D] text-[#D7E2F2] hover:border-[#60A5FA]/70"
                : "border-[#CADAF0] bg-white text-[#071126] hover:border-[#2563EB]/40",
            ].join(" ")}
          >
            Details
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </article>
  );
}