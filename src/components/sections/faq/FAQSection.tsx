

"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
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