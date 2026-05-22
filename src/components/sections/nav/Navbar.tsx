// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   ArrowRight,
//   GraduationCap,
//   Phone,
//   X,
//   Home,
//   BookOpen,
//   Info,
//   Mail,
//   FileText,
//   Users,
// } from "lucide-react";
// import { useScrollState } from "./use-scroll-state";
// import s from "./nav.module.css";

// /**
//  * Navbar — Kota Academy primary navigation.
//  *
//  * Decisions baked in (from the navbar research pass):
//  *  - Fixed top, scroll-aware: transparent over the hero,
//  *    condenses to frosted glass + hairline border after scroll.
//  *  - 6 primary links (Home, Courses, About, Contact, Blog, Faculty).
//  *    Single-level for v1; dropdowns later when sub-pages exist.
//  *  - Two CTAs: phone (medium emphasis, desktop+) and primary
//  *    "Enquire Now" (lime, always visible). Phone is the
//  *    highest-conversion mobile affordance for Indian coaching —
//  *    sits in the drawer footer on small screens.
//  *  - Off-canvas right-side drawer on mobile/tablet:
//  *      • staggered link reveal
//  *      • body scroll lock
//  *      • focus trap with Esc to close
//  *      • overlay tap to dismiss
//  *      • route-change auto-close (hash links etc.)
//  *  - Exposes `--nav-h` on :root, condensed override on
//  *    [data-nav-state="condensed"] — the hero already consumes
//  *    this via calc(100dvh - var(--nav-h, 88px)).
//  *
//  * Customise the LINKS / PHONE_NUMBER / CTA below.
//  */

// const PHONE_NUMBER = "+91 87654 32109";
// const PHONE_HREF = "tel:+918765432109";

// type NavLink = {
//   label: string;
//   href: string;
//   Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
// };

// const LINKS: NavLink[] = [
//   { label: "Home", href: "/", Icon: Home },
//   { label: "Courses", href: "/courses", Icon: BookOpen },
//   { label: "Faculty", href: "/faculty", Icon: Users },
//   { label: "About", href: "/about", Icon: Info },
//   { label: "Blog", href: "/blog", Icon: FileText },
//   { label: "Contact", href: "/contact", Icon: Mail },
// ];

// export function Navbar({ activeHref = "/" }: { activeHref?: string }) {
//   const scrolled = useScrollState(24);
//   const [open, setOpen] = useState(false);

//   // Persist the state on <html> so the hero's calc() can read --nav-h
//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-nav-state",
//       scrolled ? "condensed" : "expanded",
//     );
//   }, [scrolled]);

//   // Body scroll lock + Esc-to-close + focus trap (drawer only)
//   const drawerRef = useRef<HTMLDivElement | null>(null);
//   const firstFocusRef = useRef<HTMLButtonElement | null>(null);
//   const triggerRef = useRef<HTMLButtonElement | null>(null);

//   useEffect(() => {
//     if (!open) return;

//     // Body lock — both `overflow:hidden` AND `position:fixed` for iOS
//     // (overflow alone leaks scroll on Safari)
//     const scrollY = window.scrollY;
//     document.body.classList.add("ka-nav-locked");
//     document.body.style.top = `-${scrollY}px`;

//     // Focus the first interactive element in the drawer
//     firstFocusRef.current?.focus();

//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         e.preventDefault();
//         setOpen(false);
//       }
//       // Simple focus trap — keep Tab cycling within the drawer
//       if (e.key === "Tab" && drawerRef.current) {
//         const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
//           'a, button, [tabindex]:not([tabindex="-1"])',
//         );
//         if (focusables.length === 0) return;
//         const first = focusables[0];
//         const last = focusables[focusables.length - 1];
//         if (e.shiftKey && document.activeElement === first) {
//           e.preventDefault();
//           last.focus();
//         } else if (!e.shiftKey && document.activeElement === last) {
//           e.preventDefault();
//           first.focus();
//         }
//       }
//     };
//     window.addEventListener("keydown", onKey);

//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.classList.remove("ka-nav-locked");
//       document.body.style.top = "";
//       window.scrollTo(0, scrollY);
//       // Return focus to the trigger that opened the drawer
//       triggerRef.current?.focus();
//     };
//   }, [open]);

//   // Close drawer on route change (link click within drawer).
//   // Cheap & framework-agnostic — when a drawer link is clicked
//   // we close immediately; for SPA navigation, also close on
//   // popstate so back-button doesn't leave a stale-open drawer.
//   useEffect(() => {
//     const onPop = () => setOpen(false);
//     window.addEventListener("popstate", onPop);
//     return () => window.removeEventListener("popstate", onPop);
//   }, []);

//   return (
//     <>
//       <header
//         className={s.nav}
//         data-state={scrolled ? "condensed" : "expanded"}
//       >
//         <div className={s.inner}>
//           {/* ── Logo ── */}
//           <a href="/" className={s.logo} aria-label="Kota Academy — home">
//             <span className={s.logoMark}>
//               <GraduationCap strokeWidth={2.4} />
//             </span>
//             <span className={s.logoWord}>
//               KOTA<span>ACADEMY</span>
//             </span>
//           </a>

//           {/* ── Desktop links (lg+) ── */}
//           <nav className={s.links} aria-label="Primary">
//             {LINKS.map((l) => (
//               <a
//                 key={l.href}
//                 href={l.href}
//                 className={s.link}
//                 data-active={activeHref === l.href}
//               >
//                 {l.label}
//               </a>
//             ))}
//           </nav>

//           {/* ── Right group ── */}
//           <div className={s.right}>
//             <a
//               href={PHONE_HREF}
//               className={s.phone}
//               aria-label={`Call ${PHONE_NUMBER}`}
//             >
//               <Phone strokeWidth={2.2} />
//               {PHONE_NUMBER}
//             </a>

//             <a href="#enquire" className={s.cta}>
//               Enquire Now
//               <ArrowRight strokeWidth={2.6} />
//             </a>

//             <button
//               ref={triggerRef}
//               className={s.burger}
//               aria-label={open ? "Close menu" : "Open menu"}
//               aria-expanded={open}
//               aria-controls="ka-nav-drawer"
//               onClick={() => setOpen((v) => !v)}
//             >
//               <span className={s.burgerLines} aria-hidden>
//                 <span />
//                 <span />
//                 <span />
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ── Overlay ── */}
//       <div
//         className={s.overlay}
//         data-open={open}
//         onClick={() => setOpen(false)}
//         aria-hidden
//       />

//       {/* ── Drawer ── */}
//       {/* <aside
//         ref={drawerRef}
//         id="ka-nav-drawer"
//         className={s.drawer}
//         data-open={open}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Mobile navigation"
//         // Inert when closed: prevents tabbing into a hidden menu
//         // even though display isn't `none`. Modern browsers (2024+).
//         {...(!open ? { inert: "" as unknown as boolean } : {})}
//       > */}
//       <aside
//         ref={drawerRef}
//         id="ka-nav-drawer"
//         className={s.drawer}
//         data-open={open}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Mobile navigation"
//         aria-hidden={!open}
//       >
//         <div className={s.drawerHeader}>
//           <a
//             href="/"
//             className={s.logo}
//             aria-label="Kota Academy — home"
//             onClick={() => setOpen(false)}
//           >
//             <span className={s.logoMark}>
//               <GraduationCap strokeWidth={2.4} />
//             </span>
//             <span className={s.logoWord}>
//               KOTA<span>ACADEMY</span>
//             </span>
//           </a>
//           <button
//             ref={firstFocusRef}
//             className={s.drawerClose}
//             aria-label="Close menu"
//             onClick={() => setOpen(false)}
//           >
//             <X strokeWidth={2.4} />
//           </button>
//         </div>

//         <nav className={s.drawerLinks} aria-label="Mobile primary">
//           {LINKS.map((l, i) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className={s.drawerLink}
//               data-active={activeHref === l.href}
//               style={{ "--i": i } as React.CSSProperties}
//               onClick={() => setOpen(false)}
//             >
//               <span
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 12,
//                 }}
//               >
//                 <l.Icon strokeWidth={1.8} />
//                 {l.label}
//               </span>
//               <ArrowRight strokeWidth={2.4} />
//             </a>
//           ))}
//         </nav>

//         <div className={s.drawerFooter}>
//           <a
//             href="#enquire"
//             className={s.drawerCta}
//             onClick={() => setOpen(false)}
//           >
//             Enquire Now
//             <ArrowRight strokeWidth={2.6} />
//           </a>
//           <a href={PHONE_HREF} className={s.drawerCall}>
//             <Phone strokeWidth={2.2} />
//             Call {PHONE_NUMBER}
//           </a>
//         </div>
//       </aside>
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
  Phone,
  X,
  Home,
  BookOpen,
  Info,
  Mail,
  FileText,
  Users,
  Sparkles,
  FlaskConical,
  Stethoscope,
} from "lucide-react";
import { useScrollState } from "./use-scroll-state";
import s from "./nav.module.css";

/**
 * Navbar — v2
 *
 * Adds vs v1:
 *  - Linear-style hover dropdown panel under "Courses":
 *      • morphing scale-in (cubic-bezier 0.22, 1, 0.36, 1)
 *      • lime sliver connector
 *      • 3 course rows with photo thumb + title + description
 *      • "View all courses" footer link
 *      • 200ms close delay (cursor can cross the gap)
 *      • keyboard accessible (Enter/Space, Esc)
 *  - Mobile drawer "Courses" becomes an accordion expanding the
 *    same 3 sub-items inline.
 *  - No "Enquire Now" button in mobile visible bar (drawer keeps it).
 *  - Double-underline fixed (text-decoration:none on .link).
 *
 * Course images: put files at /public/courses/{foundation,jee,neet}.jpg.
 * If missing, the rows still render — the thumb just shows a dark
 * placeholder with the lime kiss overlay.
 */

const PHONE_NUMBER = "+91 87654 32109";
const PHONE_HREF = "tel:+918765432109";

type Course = {
  label: string;
  href: string;
  desc: string;
  image: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const COURSES: Course[] = [
  {
    label: "Foundation",
    href: "/courses/foundation",
    desc:
      "Extending the horizons of Kota Academy in fundamental excellence — our QUARK division: AARAMBH.",
    image: "/courses/foundation.jpg",
    Icon: Sparkles,
  },
  {
    label: "IIT JEE & Advanced",
    href: "/courses/jee",
    desc:
      "For students aiming for admission to IITs, NITs, BITS — built on additional edge over the syllabus.",
    image: "/courses/jee.jpg",
    Icon: FlaskConical,
  },
  {
    label: "NEET",
    href: "/courses/neet",
    desc:
      "For students aiming for AIIMS and other prestigious medical colleges — our complete MEDICAL track.",
    image: "/courses/neet.jpg",
    Icon: Stethoscope,
  },
];

type NavLink = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  hasDropdown?: boolean;
};

const LINKS: NavLink[] = [
  { label: "Home",    href: "/",         Icon: Home },
  { label: "Courses", href: "/courses",  Icon: BookOpen, hasDropdown: true },
  { label: "Faculty", href: "/faculty",  Icon: Users },
  { label: "About",   href: "/about",    Icon: Info },
  { label: "Blog",    href: "/blog",     Icon: FileText },
  { label: "Contact", href: "/contact",  Icon: Mail },
];

export function Navbar({ activeHref = "/" }: { activeHref?: string }) {
  const scrolled = useScrollState(24);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [drawerCoursesOpen, setDrawerCoursesOpen] = useState(false);

  // Persist nav state on <html> so hero's calc() reads --nav-h
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-nav-state",
      scrolled ? "condensed" : "expanded",
    );
  }, [scrolled]);

  // 200ms hover close-delay so the cursor can travel the gap
  // between the trigger and the panel without snapping shut.
  const closeTimerRef = useRef<number | null>(null);
  const cancelCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    cancelCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setCoursesOpen(false), 200);
  };
  useEffect(() => () => cancelCloseTimer(), []);

  // Close dropdown on Esc anywhere on the page
  useEffect(() => {
    if (!coursesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [coursesOpen]);

  // ── Drawer plumbing: body lock + focus trap (same as v1) ──
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstFocusRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    document.body.classList.add("ka-nav-locked");
    document.body.style.top = `-${scrollY}px`;
    firstFocusRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("ka-nav-locked");
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
      triggerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <>
      <header className={s.nav} data-state={scrolled ? "condensed" : "expanded"}>
        <div className={s.inner}>
          {/* Logo */}
          <a href="/" className={s.logo} aria-label="Kota Academy — home">
            <span className={s.logoMark}>
              <GraduationCap strokeWidth={2.4} />
            </span>
            <span className={s.logoWord}>
              KOTA<span>ACADEMY</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className={s.links} aria-label="Primary">
            {LINKS.map((l) =>
              l.hasDropdown ? (
                <div
                  key={l.href}
                  className={s.panelWrap}
                  onMouseEnter={() => {
                    cancelCloseTimer();
                    setCoursesOpen(true);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href={l.href}
                    className={s.link}
                    data-active={activeHref === l.href}
                    data-open={coursesOpen}
                    aria-haspopup="true"
                    aria-expanded={coursesOpen}
                    onFocus={() => {
                      cancelCloseTimer();
                      setCoursesOpen(true);
                    }}
                  >
                    {l.label}
                    <span className={s.linkChevron} aria-hidden>
                      <ChevronDown strokeWidth={2.4} />
                    </span>
                  </a>

                  <div
                    className={s.panel}
                    data-open={coursesOpen}
                    role="menu"
                    aria-label="Courses"
                    onMouseEnter={cancelCloseTimer}
                    onMouseLeave={scheduleClose}
                  >
                    {COURSES.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className={s.panelRow}
                        role="menuitem"
                      >
                        <span className={s.panelThumb}>
                          {/* Plain <img> so a missing file silently falls
                              back to the dark placeholder + lime kiss. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={c.image} alt="" />
                        </span>
                        <span className={s.panelBody}>
                          <span className={s.panelTitle}>{c.label}</span>
                          <span className={s.panelDesc}>{c.desc}</span>
                        </span>
                        <ArrowUpRight className={s.panelArrow} strokeWidth={2.2} />
                      </a>
                    ))}

                    <a href="/courses" className={s.panelFooter}>
                      View all courses
                      <ArrowRight strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className={s.link}
                  data-active={activeHref === l.href}
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>

          {/* Right group */}
          <div className={s.right}>
            <a href={PHONE_HREF} className={s.phone} aria-label={`Call ${PHONE_NUMBER}`}>
              <Phone strokeWidth={2.2} />
              {PHONE_NUMBER}
            </a>

            <a href="#enquire" className={s.cta}>
              Enquire Now
              <ArrowRight strokeWidth={2.6} />
            </a>

            <button
              ref={triggerRef}
              className={s.burger}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="ka-nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={s.burgerLines} aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={s.overlay}
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        id="ka-nav-drawer"
        className={s.drawer}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className={s.drawerHeader}>
          <a
            href="/"
            className={s.logo}
            aria-label="Kota Academy — home"
            onClick={() => setOpen(false)}
          >
            <span className={s.logoMark}>
              <GraduationCap strokeWidth={2.4} />
            </span>
            <span className={s.logoWord}>
              KOTA<span>ACADEMY</span>
            </span>
          </a>
          <button
            ref={firstFocusRef}
            className={s.drawerClose}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X strokeWidth={2.4} />
          </button>
        </div>

        <nav className={s.drawerLinks} aria-label="Mobile primary">
          {LINKS.map((l, i) =>
            l.hasDropdown ? (
              <div
                key={l.href}
                className={s.drawerAccordion}
                style={{ "--i": i } as React.CSSProperties}
              >
                <button
                  className={s.drawerAccordionTrigger}
                  aria-expanded={drawerCoursesOpen}
                  aria-controls="ka-drawer-courses"
                  onClick={() => setDrawerCoursesOpen((v) => !v)}
                >
                  <span className="lhs">
                    <l.Icon className="lead" strokeWidth={1.8} />
                    {l.label}
                  </span>
                  <ChevronDown className="chev" strokeWidth={2.2} />
                </button>
                <div
                  id="ka-drawer-courses"
                  className={s.drawerSubList}
                  data-open={drawerCoursesOpen}
                >
                  <div className={s.drawerSubListInner}>
                    {COURSES.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className={s.drawerSubItem}
                        onClick={() => setOpen(false)}
                      >
                        <span className="dot" />
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={s.drawerLink}
                data-active={activeHref === l.href}
                style={{ "--i": i } as React.CSSProperties}
                onClick={() => setOpen(false)}
              >
                <span className="lhs">
                  <l.Icon className="lead" strokeWidth={1.8} />
                  {l.label}
                </span>
                <ArrowRight className="arrow" strokeWidth={2.4} />
              </a>
            ),
          )}
        </nav>

        <div className={s.drawerFooter}>
          <a href="#enquire" className={s.drawerCta} onClick={() => setOpen(false)}>
            Enquire Now
            <ArrowRight strokeWidth={2.6} />
          </a>
          <a href={PHONE_HREF} className={s.drawerCall}>
            <Phone strokeWidth={2.2} />
            Call {PHONE_NUMBER}
          </a>
        </div>
      </aside>
    </>
  );
}