// // // "use client";

// // // import { useEffect, useRef, useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   GraduationCap,
// // //   Phone,
// // //   X,
// // //   Home,
// // //   BookOpen,
// // //   Info,
// // //   Mail,
// // //   FileText,
// // //   Users,
// // // } from "lucide-react";
// // // import { useScrollState } from "./use-scroll-state";
// // // import s from "./nav.module.css";

// // // /**
// // //  * Navbar — Kota Academy primary navigation.
// // //  *
// // //  * Decisions baked in (from the navbar research pass):
// // //  *  - Fixed top, scroll-aware: transparent over the hero,
// // //  *    condenses to frosted glass + hairline border after scroll.
// // //  *  - 6 primary links (Home, Courses, About, Contact, Blog, Faculty).
// // //  *    Single-level for v1; dropdowns later when sub-pages exist.
// // //  *  - Two CTAs: phone (medium emphasis, desktop+) and primary
// // //  *    "Enquire Now" (lime, always visible). Phone is the
// // //  *    highest-conversion mobile affordance for Indian coaching —
// // //  *    sits in the drawer footer on small screens.
// // //  *  - Off-canvas right-side drawer on mobile/tablet:
// // //  *      • staggered link reveal
// // //  *      • body scroll lock
// // //  *      • focus trap with Esc to close
// // //  *      • overlay tap to dismiss
// // //  *      • route-change auto-close (hash links etc.)
// // //  *  - Exposes `--nav-h` on :root, condensed override on
// // //  *    [data-nav-state="condensed"] — the hero already consumes
// // //  *    this via calc(100dvh - var(--nav-h, 88px)).
// // //  *
// // //  * Customise the LINKS / PHONE_NUMBER / CTA below.
// // //  */

// // // const PHONE_NUMBER = "+91 87654 32109";
// // // const PHONE_HREF = "tel:+918765432109";

// // // type NavLink = {
// // //   label: string;
// // //   href: string;
// // //   Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
// // // };

// // // const LINKS: NavLink[] = [
// // //   { label: "Home", href: "/", Icon: Home },
// // //   { label: "Courses", href: "/courses", Icon: BookOpen },
// // //   { label: "Faculty", href: "/faculty", Icon: Users },
// // //   { label: "About", href: "/about", Icon: Info },
// // //   { label: "Blog", href: "/blog", Icon: FileText },
// // //   { label: "Contact", href: "/contact", Icon: Mail },
// // // ];

// // // export function Navbar({ activeHref = "/" }: { activeHref?: string }) {
// // //   const scrolled = useScrollState(24);
// // //   const [open, setOpen] = useState(false);

// // //   // Persist the state on <html> so the hero's calc() can read --nav-h
// // //   useEffect(() => {
// // //     document.documentElement.setAttribute(
// // //       "data-nav-state",
// // //       scrolled ? "condensed" : "expanded",
// // //     );
// // //   }, [scrolled]);

// // //   // Body scroll lock + Esc-to-close + focus trap (drawer only)
// // //   const drawerRef = useRef<HTMLDivElement | null>(null);
// // //   const firstFocusRef = useRef<HTMLButtonElement | null>(null);
// // //   const triggerRef = useRef<HTMLButtonElement | null>(null);

// // //   useEffect(() => {
// // //     if (!open) return;

// // //     // Body lock — both `overflow:hidden` AND `position:fixed` for iOS
// // //     // (overflow alone leaks scroll on Safari)
// // //     const scrollY = window.scrollY;
// // //     document.body.classList.add("ka-nav-locked");
// // //     document.body.style.top = `-${scrollY}px`;

// // //     // Focus the first interactive element in the drawer
// // //     firstFocusRef.current?.focus();

// // //     const onKey = (e: KeyboardEvent) => {
// // //       if (e.key === "Escape") {
// // //         e.preventDefault();
// // //         setOpen(false);
// // //       }
// // //       // Simple focus trap — keep Tab cycling within the drawer
// // //       if (e.key === "Tab" && drawerRef.current) {
// // //         const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
// // //           'a, button, [tabindex]:not([tabindex="-1"])',
// // //         );
// // //         if (focusables.length === 0) return;
// // //         const first = focusables[0];
// // //         const last = focusables[focusables.length - 1];
// // //         if (e.shiftKey && document.activeElement === first) {
// // //           e.preventDefault();
// // //           last.focus();
// // //         } else if (!e.shiftKey && document.activeElement === last) {
// // //           e.preventDefault();
// // //           first.focus();
// // //         }
// // //       }
// // //     };
// // //     window.addEventListener("keydown", onKey);

// // //     return () => {
// // //       window.removeEventListener("keydown", onKey);
// // //       document.body.classList.remove("ka-nav-locked");
// // //       document.body.style.top = "";
// // //       window.scrollTo(0, scrollY);
// // //       // Return focus to the trigger that opened the drawer
// // //       triggerRef.current?.focus();
// // //     };
// // //   }, [open]);

// // //   // Close drawer on route change (link click within drawer).
// // //   // Cheap & framework-agnostic — when a drawer link is clicked
// // //   // we close immediately; for SPA navigation, also close on
// // //   // popstate so back-button doesn't leave a stale-open drawer.
// // //   useEffect(() => {
// // //     const onPop = () => setOpen(false);
// // //     window.addEventListener("popstate", onPop);
// // //     return () => window.removeEventListener("popstate", onPop);
// // //   }, []);

// // //   return (
// // //     <>
// // //       <header
// // //         className={s.nav}
// // //         data-state={scrolled ? "condensed" : "expanded"}
// // //       >
// // //         <div className={s.inner}>
// // //           {/* ── Logo ── */}
// // //           <a href="/" className={s.logo} aria-label="Kota Academy — home">
// // //             <span className={s.logoMark}>
// // //               <GraduationCap strokeWidth={2.4} />
// // //             </span>
// // //             <span className={s.logoWord}>
// // //               KOTA<span>ACADEMY</span>
// // //             </span>
// // //           </a>

// // //           {/* ── Desktop links (lg+) ── */}
// // //           <nav className={s.links} aria-label="Primary">
// // //             {LINKS.map((l) => (
// // //               <a
// // //                 key={l.href}
// // //                 href={l.href}
// // //                 className={s.link}
// // //                 data-active={activeHref === l.href}
// // //               >
// // //                 {l.label}
// // //               </a>
// // //             ))}
// // //           </nav>

// // //           {/* ── Right group ── */}
// // //           <div className={s.right}>
// // //             <a
// // //               href={PHONE_HREF}
// // //               className={s.phone}
// // //               aria-label={`Call ${PHONE_NUMBER}`}
// // //             >
// // //               <Phone strokeWidth={2.2} />
// // //               {PHONE_NUMBER}
// // //             </a>

// // //             <a href="#enquire" className={s.cta}>
// // //               Enquire Now
// // //               <ArrowRight strokeWidth={2.6} />
// // //             </a>

// // //             <button
// // //               ref={triggerRef}
// // //               className={s.burger}
// // //               aria-label={open ? "Close menu" : "Open menu"}
// // //               aria-expanded={open}
// // //               aria-controls="ka-nav-drawer"
// // //               onClick={() => setOpen((v) => !v)}
// // //             >
// // //               <span className={s.burgerLines} aria-hidden>
// // //                 <span />
// // //                 <span />
// // //                 <span />
// // //               </span>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* ── Overlay ── */}
// // //       <div
// // //         className={s.overlay}
// // //         data-open={open}
// // //         onClick={() => setOpen(false)}
// // //         aria-hidden
// // //       />

// // //       {/* ── Drawer ── */}
// // //       {/* <aside
// // //         ref={drawerRef}
// // //         id="ka-nav-drawer"
// // //         className={s.drawer}
// // //         data-open={open}
// // //         role="dialog"
// // //         aria-modal="true"
// // //         aria-label="Mobile navigation"
// // //         // Inert when closed: prevents tabbing into a hidden menu
// // //         // even though display isn't `none`. Modern browsers (2024+).
// // //         {...(!open ? { inert: "" as unknown as boolean } : {})}
// // //       > */}
// // //       <aside
// // //         ref={drawerRef}
// // //         id="ka-nav-drawer"
// // //         className={s.drawer}
// // //         data-open={open}
// // //         role="dialog"
// // //         aria-modal="true"
// // //         aria-label="Mobile navigation"
// // //         aria-hidden={!open}
// // //       >
// // //         <div className={s.drawerHeader}>
// // //           <a
// // //             href="/"
// // //             className={s.logo}
// // //             aria-label="Kota Academy — home"
// // //             onClick={() => setOpen(false)}
// // //           >
// // //             <span className={s.logoMark}>
// // //               <GraduationCap strokeWidth={2.4} />
// // //             </span>
// // //             <span className={s.logoWord}>
// // //               KOTA<span>ACADEMY</span>
// // //             </span>
// // //           </a>
// // //           <button
// // //             ref={firstFocusRef}
// // //             className={s.drawerClose}
// // //             aria-label="Close menu"
// // //             onClick={() => setOpen(false)}
// // //           >
// // //             <X strokeWidth={2.4} />
// // //           </button>
// // //         </div>

// // //         <nav className={s.drawerLinks} aria-label="Mobile primary">
// // //           {LINKS.map((l, i) => (
// // //             <a
// // //               key={l.href}
// // //               href={l.href}
// // //               className={s.drawerLink}
// // //               data-active={activeHref === l.href}
// // //               style={{ "--i": i } as React.CSSProperties}
// // //               onClick={() => setOpen(false)}
// // //             >
// // //               <span
// // //                 style={{
// // //                   display: "inline-flex",
// // //                   alignItems: "center",
// // //                   gap: 12,
// // //                 }}
// // //               >
// // //                 <l.Icon strokeWidth={1.8} />
// // //                 {l.label}
// // //               </span>
// // //               <ArrowRight strokeWidth={2.4} />
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         <div className={s.drawerFooter}>
// // //           <a
// // //             href="#enquire"
// // //             className={s.drawerCta}
// // //             onClick={() => setOpen(false)}
// // //           >
// // //             Enquire Now
// // //             <ArrowRight strokeWidth={2.6} />
// // //           </a>
// // //           <a href={PHONE_HREF} className={s.drawerCall}>
// // //             <Phone strokeWidth={2.2} />
// // //             Call {PHONE_NUMBER}
// // //           </a>
// // //         </div>
// // //       </aside>
// // //     </>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import {
// //   ArrowRight,
// //   ArrowUpRight,
// //   ChevronDown,
// //   GraduationCap,
// //   Phone,
// //   X,
// //   Home,
// //   BookOpen,
// //   Info,
// //   Mail,
// //   FileText,
// //   Users,
// //   Sparkles,
// //   FlaskConical,
// //   Stethoscope,
// // } from "lucide-react";
// // import { useScrollState } from "./use-scroll-state";
// // import s from "./nav.module.css";

// // /**
// //  * Navbar — v2
// //  *
// //  * Adds vs v1:
// //  *  - Linear-style hover dropdown panel under "Courses":
// //  *      • morphing scale-in (cubic-bezier 0.22, 1, 0.36, 1)
// //  *      • lime sliver connector
// //  *      • 3 course rows with photo thumb + title + description
// //  *      • "View all courses" footer link
// //  *      • 200ms close delay (cursor can cross the gap)
// //  *      • keyboard accessible (Enter/Space, Esc)
// //  *  - Mobile drawer "Courses" becomes an accordion expanding the
// //  *    same 3 sub-items inline.
// //  *  - No "Enquire Now" button in mobile visible bar (drawer keeps it).
// //  *  - Double-underline fixed (text-decoration:none on .link).
// //  *
// //  * Course images: put files at /public/courses/{foundation,jee,neet}.jpg.
// //  * If missing, the rows still render — the thumb just shows a dark
// //  * placeholder with the lime kiss overlay.
// //  */

// // const PHONE_NUMBER = "+91 87654 32109";
// // const PHONE_HREF = "tel:+918765432109";

// // type Course = {
// //   label: string;
// //   href: string;
// //   desc: string;
// //   image: string;
// //   Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
// // };

// // const COURSES: Course[] = [
// //   {
// //     label: "Foundation",
// //     href: "/courses/foundation",
// //     desc:
// //       "Extending the horizons of Kota Academy in fundamental excellence — our QUARK division: AARAMBH.",
// //     image: "/images/courses/class-8-10-foundation.png",
// //     Icon: Sparkles,
// //   },
// //   {
// //     label: "IIT JEE & Advanced",
// //     href: "/courses/jee",
// //     desc:
// //       "For students aiming for admission to IITs, NITs, BITS — built on additional edge over the syllabus.",
// //     image: "/images/courses/jee-main-advanced.png",
// //     Icon: FlaskConical,
// //   },
// //   {
// //     label: "NEET",
// //     href: "/courses/neet",
// //     desc:
// //       "For students aiming for AIIMS and other prestigious medical colleges — our complete MEDICAL track.",
// //     image: "/images/courses/neet-ug-preparation.png",
// //     Icon: Stethoscope,
// //   },
// // ];

// // type NavLink = {
// //   label: string;
// //   href: string;
// //   Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
// //   hasDropdown?: boolean;
// // };

// // const LINKS: NavLink[] = [
// //   { label: "Home",    href: "/",         Icon: Home },
// //   { label: "Courses", href: "/courses",  Icon: BookOpen, hasDropdown: true },
// //   { label: "Faculty", href: "/faculty",  Icon: Users },
// //   { label: "About",   href: "/about",    Icon: Info },
// //   { label: "Blog",    href: "/blog",     Icon: FileText },
// //   { label: "Contact", href: "/contact",  Icon: Mail },
// // ];

// // export function Navbar({ activeHref = "/" }: { activeHref?: string }) {
// //   const scrolled = useScrollState(24);
// //   const [open, setOpen] = useState(false);
// //   const [coursesOpen, setCoursesOpen] = useState(false);
// //   const [drawerCoursesOpen, setDrawerCoursesOpen] = useState(false);

// //   // Persist nav state on <html> so hero's calc() reads --nav-h
// //   useEffect(() => {
// //     document.documentElement.setAttribute(
// //       "data-nav-state",
// //       scrolled ? "condensed" : "expanded",
// //     );
// //   }, [scrolled]);

// //   // 200ms hover close-delay so the cursor can travel the gap
// //   // between the trigger and the panel without snapping shut.
// //   const closeTimerRef = useRef<number | null>(null);
// //   const cancelCloseTimer = () => {
// //     if (closeTimerRef.current !== null) {
// //       window.clearTimeout(closeTimerRef.current);
// //       closeTimerRef.current = null;
// //     }
// //   };
// //   const scheduleClose = () => {
// //     cancelCloseTimer();
// //     closeTimerRef.current = window.setTimeout(() => setCoursesOpen(false), 200);
// //   };
// //   useEffect(() => () => cancelCloseTimer(), []);

// //   // Close dropdown on Esc anywhere on the page
// //   useEffect(() => {
// //     if (!coursesOpen) return;
// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") setCoursesOpen(false);
// //     };
// //     window.addEventListener("keydown", onKey);
// //     return () => window.removeEventListener("keydown", onKey);
// //   }, [coursesOpen]);

// //   // ── Drawer plumbing: body lock + focus trap (same as v1) ──
// //   const drawerRef = useRef<HTMLDivElement | null>(null);
// //   const firstFocusRef = useRef<HTMLButtonElement | null>(null);
// //   const triggerRef = useRef<HTMLButtonElement | null>(null);

// //   useEffect(() => {
// //     if (!open) return;
// //     const scrollY = window.scrollY;
// //     document.body.classList.add("ka-nav-locked");
// //     document.body.style.top = `-${scrollY}px`;
// //     firstFocusRef.current?.focus();

// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") {
// //         e.preventDefault();
// //         setOpen(false);
// //       }
// //       if (e.key === "Tab" && drawerRef.current) {
// //         const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
// //           'a, button, [tabindex]:not([tabindex="-1"])',
// //         );
// //         if (focusables.length === 0) return;
// //         const first = focusables[0];
// //         const last = focusables[focusables.length - 1];
// //         if (e.shiftKey && document.activeElement === first) {
// //           e.preventDefault();
// //           last.focus();
// //         } else if (!e.shiftKey && document.activeElement === last) {
// //           e.preventDefault();
// //           first.focus();
// //         }
// //       }
// //     };
// //     window.addEventListener("keydown", onKey);
// //     return () => {
// //       window.removeEventListener("keydown", onKey);
// //       document.body.classList.remove("ka-nav-locked");
// //       document.body.style.top = "";
// //       window.scrollTo(0, scrollY);
// //       triggerRef.current?.focus();
// //     };
// //   }, [open]);

// //   useEffect(() => {
// //     const onPop = () => setOpen(false);
// //     window.addEventListener("popstate", onPop);
// //     return () => window.removeEventListener("popstate", onPop);
// //   }, []);

// //   return (
// //     <>
// //       <header className={s.nav} data-state={scrolled ? "condensed" : "expanded"}>
// //         <div className={s.inner}>
// //           {/* Logo */}
// //           <a href="/" className={s.logo} aria-label="Kota Academy — home">
// //             <span className={s.logoMark}>
// //               <GraduationCap strokeWidth={2.4} />
// //             </span>
// //             <span className={s.logoWord}>
// //               KOTA<span>ACADEMY</span>
// //             </span>
// //           </a>

// //           {/* Desktop links */}
// //           <nav className={s.links} aria-label="Primary">
// //             {LINKS.map((l) =>
// //               l.hasDropdown ? (
// //                 <div
// //                   key={l.href}
// //                   className={s.panelWrap}
// //                   onMouseEnter={() => {
// //                     cancelCloseTimer();
// //                     setCoursesOpen(true);
// //                   }}
// //                   onMouseLeave={scheduleClose}
// //                 >
// //                   <a
// //                     href={l.href}
// //                     className={s.link}
// //                     data-active={activeHref === l.href}
// //                     data-open={coursesOpen}
// //                     aria-haspopup="true"
// //                     aria-expanded={coursesOpen}
// //                     onFocus={() => {
// //                       cancelCloseTimer();
// //                       setCoursesOpen(true);
// //                     }}
// //                   >
// //                     {l.label}
// //                     <span className={s.linkChevron} aria-hidden>
// //                       <ChevronDown strokeWidth={2.4} />
// //                     </span>
// //                   </a>

// //                   <div
// //                     className={s.panel}
// //                     data-open={coursesOpen}
// //                     role="menu"
// //                     aria-label="Courses"
// //                     onMouseEnter={cancelCloseTimer}
// //                     onMouseLeave={scheduleClose}
// //                   >
// //                     {COURSES.map((c) => (
// //                       <a
// //                         key={c.href}
// //                         href={c.href}
// //                         className={s.panelRow}
// //                         role="menuitem"
// //                       >
// //                         <span className={s.panelThumb}>
// //                           {/* Plain <img> so a missing file silently falls
// //                               back to the dark placeholder + lime kiss. */}
// //                           {/* eslint-disable-next-line @next/next/no-img-element */}
// //                           <img src={c.image} alt="" />
// //                         </span>
// //                         <span className={s.panelBody}>
// //                           <span className={s.panelTitle}>{c.label}</span>
// //                           <span className={s.panelDesc}>{c.desc}</span>
// //                         </span>
// //                         <ArrowUpRight className={s.panelArrow} strokeWidth={2.2} />
// //                       </a>
// //                     ))}

// //                     <a href="/courses" className={s.panelFooter}>
// //                       View all courses
// //                       <ArrowRight strokeWidth={2.4} />
// //                     </a>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <a
// //                   key={l.href}
// //                   href={l.href}
// //                   className={s.link}
// //                   data-active={activeHref === l.href}
// //                 >
// //                   {l.label}
// //                 </a>
// //               ),
// //             )}
// //           </nav>

// //           {/* Right group */}
// //           <div className={s.right}>
// //             <a href={PHONE_HREF} className={s.phone} aria-label={`Call ${PHONE_NUMBER}`}>
// //               <Phone strokeWidth={2.2} />
// //               {PHONE_NUMBER}
// //             </a>

// //             <a href="#enquire" className={s.cta}>
// //               Enquire Now
// //               <ArrowRight strokeWidth={2.6} />
// //             </a>

// //             <button
// //               ref={triggerRef}
// //               className={s.burger}
// //               aria-label={open ? "Close menu" : "Open menu"}
// //               aria-expanded={open}
// //               aria-controls="ka-nav-drawer"
// //               onClick={() => setOpen((v) => !v)}
// //             >
// //               <span className={s.burgerLines} aria-hidden>
// //                 <span />
// //                 <span />
// //                 <span />
// //               </span>
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Overlay */}
// //       <div
// //         className={s.overlay}
// //         data-open={open}
// //         onClick={() => setOpen(false)}
// //         aria-hidden
// //       />

// //       {/* Drawer */}
// //       <aside
// //         ref={drawerRef}
// //         id="ka-nav-drawer"
// //         className={s.drawer}
// //         data-open={open}
// //         role="dialog"
// //         aria-modal="true"
// //         aria-label="Mobile navigation"
// //         aria-hidden={!open}
// //       >
// //         <div className={s.drawerHeader}>
// //           <a
// //             href="/"
// //             className={s.logo}
// //             aria-label="Kota Academy — home"
// //             onClick={() => setOpen(false)}
// //           >
// //             <span className={s.logoMark}>
// //               <GraduationCap strokeWidth={2.4} />
// //             </span>
// //             <span className={s.logoWord}>
// //               KOTA<span>ACADEMY</span>
// //             </span>
// //           </a>
// //           <button
// //             ref={firstFocusRef}
// //             className={s.drawerClose}
// //             aria-label="Close menu"
// //             onClick={() => setOpen(false)}
// //           >
// //             <X strokeWidth={2.4} />
// //           </button>
// //         </div>

// //         <nav className={s.drawerLinks} aria-label="Mobile primary">
// //           {LINKS.map((l, i) =>
// //             l.hasDropdown ? (
// //               <div
// //                 key={l.href}
// //                 className={s.drawerAccordion}
// //                 style={{ "--i": i } as React.CSSProperties}
// //               >
// //                 <button
// //                   className={s.drawerAccordionTrigger}
// //                   aria-expanded={drawerCoursesOpen}
// //                   aria-controls="ka-drawer-courses"
// //                   onClick={() => setDrawerCoursesOpen((v) => !v)}
// //                 >
// //                   <span className="lhs">
// //                     <l.Icon className="lead" strokeWidth={1.8} />
// //                     {l.label}
// //                   </span>
// //                   <ChevronDown className="chev" strokeWidth={2.2} />
// //                 </button>
// //                 <div
// //                   id="ka-drawer-courses"
// //                   className={s.drawerSubList}
// //                   data-open={drawerCoursesOpen}
// //                 >
// //                   <div className={s.drawerSubListInner}>
// //                     {COURSES.map((c) => (
// //                       <a
// //                         key={c.href}
// //                         href={c.href}
// //                         className={s.drawerSubItem}
// //                         onClick={() => setOpen(false)}
// //                       >
// //                         <span className="dot" />
// //                         {c.label}
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ) : (
// //               <a
// //                 key={l.href}
// //                 href={l.href}
// //                 className={s.drawerLink}
// //                 data-active={activeHref === l.href}
// //                 style={{ "--i": i } as React.CSSProperties}
// //                 onClick={() => setOpen(false)}
// //               >
// //                 <span className="lhs">
// //                   <l.Icon className="lead" strokeWidth={1.8} />
// //                   {l.label}
// //                 </span>
// //                 <ArrowRight className="arrow" strokeWidth={2.4} />
// //               </a>
// //             ),
// //           )}
// //         </nav>

// //         <div className={s.drawerFooter}>
// //           <a href="#enquire" className={s.drawerCta} onClick={() => setOpen(false)}>
// //             Enquire Now
// //             <ArrowRight strokeWidth={2.6} />
// //           </a>
// //           <a href={PHONE_HREF} className={s.drawerCall}>
// //             <Phone strokeWidth={2.2} />
// //             Call {PHONE_NUMBER}
// //           </a>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   type Variants,
// } from "framer-motion";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ChevronDown,
//   ClipboardList,
//   GraduationCap,
//   Home,
//   Landmark,
//   Mail,
//   MapPin,
//   Menu,
//   MessageCircle,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   Target,
//   Trophy,
//   UsersRound,
//   X,
//   type LucideIcon,
// } from "lucide-react";
// import { useCallback, useEffect, useRef, useState } from "react";

// type NavItemType = "link" | "courses" | "branches";

// type NavItem = {
//   label: string;
//   href: string;
//   type: NavItemType;
// };

// type CourseCategoryId = "engineering" | "medical" | "foundation" | "school";

// type CourseItem = {
//   title: string;
//   subtitle: string;
//   href: string;
// };

// type CourseCategory = {
//   id: CourseCategoryId;
//   title: string;
//   icon: LucideIcon;
//   courses: CourseItem[];
// };

// type Branch = {
//   id: string;
//   name: string;
//   subtitle: string;
//   rating: string;
//   reviews: string;
//   directionsUrl: string;
// };

// const navItems: NavItem[] = [
//   { label: "Home", href: "#home", type: "link" },
//   { label: "Courses", href: "#courses", type: "courses" },
//   { label: "Results", href: "#results", type: "link" },
//   { label: "Faculty", href: "#faculty", type: "link" },
//   { label: "Branches", href: "#branches", type: "branches" },
//   { label: "Blog", href: "/blog", type: "link" },
//   { label: "Contact", href: "#contact", type: "link" },
// ];

// const courseCategories: CourseCategory[] = [
//   {
//     id: "engineering",
//     title: "Engineering",
//     icon: Target,
//     courses: [
//       {
//         title: "IIT-JEE (Class 11–12)",
//         subtitle: "Main + Advanced",
//         href: "/courses/iit-jee",
//       },
//       {
//         title: "IIT-JEE (Dropper)",
//         subtitle: "Repeaters Batch",
//         href: "/courses/iit-jee-dropper",
//       },
//       {
//         title: "JEE Foundation",
//         subtitle: "Class 8, 9, 10",
//         href: "/courses/jee-foundation",
//       },
//       {
//         title: "JEE Crash Course",
//         subtitle: "Short Term Program",
//         href: "/courses/jee-crash-course",
//       },
//     ],
//   },
//   {
//     id: "medical",
//     title: "Medical",
//     icon: Stethoscope,
//     courses: [
//       {
//         title: "NEET-UG (Class 11–12)",
//         subtitle: "Medical Entrance",
//         href: "/courses/neet-ug",
//       },
//       {
//         title: "NEET-UG (Dropper)",
//         subtitle: "Repeaters Batch",
//         href: "/courses/neet-dropper",
//       },
//       {
//         title: "NEET Foundation",
//         subtitle: "Class 8, 9, 10",
//         href: "/courses/neet-foundation",
//       },
//       {
//         title: "NEET Crash Course",
//         subtitle: "Short Term Program",
//         href: "/courses/neet-crash-course",
//       },
//     ],
//   },
//   {
//     id: "foundation",
//     title: "Foundation",
//     icon: BookOpen,
//     courses: [
//       {
//         title: "Class 8",
//         subtitle: "Foundation Program",
//         href: "/courses/class-8",
//       },
//       {
//         title: "Class 9",
//         subtitle: "Foundation Program",
//         href: "/courses/class-9",
//       },
//       {
//         title: "Class 10",
//         subtitle: "Foundation Program",
//         href: "/courses/class-10",
//       },
//     ],
//   },
//   {
//     id: "school",
//     title: "School",
//     icon: ClipboardList,
//     courses: [
//       {
//         title: "Class 11–12 Boards",
//         subtitle: "All Subjects",
//         href: "/courses/class-11-12-boards",
//       },
//       {
//         title: "Class 9–10 Boards",
//         subtitle: "All Subjects",
//         href: "/courses/class-9-10-boards",
//       },
//     ],
//   },
// ];

// const branches: Branch[] = [
//   {
//     id: "alpha",
//     name: "Alpha-I Branch",
//     subtitle: "Alpha Commercial Belt",
//     rating: "4.7",
//     reviews: "157",
//     directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
//   },
//   {
//     id: "omicron",
//     name: "Omicron-III Branch",
//     subtitle: "Near SBI Bank",
//     rating: "4.4",
//     reviews: "22",
//     directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
//   },
// ];

// const trustItems = [
//   {
//     title: "Small Batches",
//     subtitle: "Personal Attention",
//     icon: UsersRound,
//   },
//   {
//     title: "Regular Testing",
//     subtitle: "Performance Tracking",
//     icon: CalendarCheck,
//   },
//   {
//     title: "Doubt Support",
//     subtitle: "Concept Clarity",
//     icon: MessageCircle,
//   },
//   {
//     title: "Parent Updates",
//     subtitle: "Stay Informed",
//     icon: ShieldCheck,
//   },
// ];

// const EXPO = [0.16, 1, 0.3, 1] as const;

// const menuMotion = {
//   initial: { opacity: 0, y: -10, scale: 0.985 },
//   animate: { opacity: 1, y: 0, scale: 1 },
//   exit: { opacity: 0, y: -10, scale: 0.985 },
//   transition: { duration: 0.24, ease: EXPO },
// };

// const panelMotion = {
//   initial: { opacity: 0, x: 18 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -18 },
//   transition: { duration: 0.24, ease: EXPO },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: -12 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: EXPO },
//   },
// };

// export default function KotaAcademyNavbar() {
//   const navRef = useRef<HTMLElement | null>(null);

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeDesktopMenu, setActiveDesktopMenu] = useState<
//     "courses" | "branches" | null
//   >(null);
//   const [mobilePanel, setMobilePanel] = useState<
//     "main" | "courses" | "category"
//   >("main");
//   const [selectedCategory, setSelectedCategory] =
//     useState<CourseCategoryId>("engineering");

//   const closeMobileMenu = useCallback(() => {
//     setMobileOpen(false);
//     setMobilePanel("main");
//     setSelectedCategory("engineering");
//   }, []);

//   const closeDesktopMenu = useCallback(() => {
//     setActiveDesktopMenu(null);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 26);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   useEffect(() => {
//     const handlePointerDown = (event: PointerEvent) => {
//       if (!navRef.current?.contains(event.target as Node)) {
//         closeDesktopMenu();
//       }
//     };

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         closeDesktopMenu();
//         closeMobileMenu();
//       }
//     };

//     document.addEventListener("pointerdown", handlePointerDown);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("pointerdown", handlePointerDown);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [closeDesktopMenu, closeMobileMenu]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <motion.header
//         ref={navRef}
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         className="fixed inset-x-0 top-3 z-[90] px-4 sm:top-4 sm:px-5 lg:top-5 lg:px-6"
//       >
//         <div className="mx-auto max-w-[1500px]">
//           <nav
//             aria-label="Primary navigation"
//             className={`relative overflow-visible rounded-[24px] border backdrop-blur-2xl transition-all duration-300 lg:rounded-full ${
//               isScrolled
//                 ? "border-white/10 bg-[#06111F]/88 shadow-[0_20px_70px_rgba(0,0,0,0.36)]"
//                 : "border-[#B5FF3D]/28 bg-[#06111F]/68 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
//             }`}
//           >
//             <NavbarGlow isScrolled={isScrolled} />

//             <div
//               className={`relative z-10 flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-5 lg:px-6 ${
//                 isScrolled
//                   ? "min-h-[70px] lg:min-h-[74px]"
//                   : "min-h-[74px] lg:min-h-[84px]"
//               }`}
//             >
//               <LogoBlock />

//               <DesktopNav
//                 activeMenu={activeDesktopMenu}
//                 setActiveMenu={setActiveDesktopMenu}
//               />

//               <DesktopActions />

//               <MobileMenuButton
//                 mobileOpen={mobileOpen}
//                 setMobileOpen={setMobileOpen}
//                 setMobilePanel={setMobilePanel}
//               />
//             </div>

//             <DesktopMenus
//               activeMenu={activeDesktopMenu}
//               setActiveMenu={setActiveDesktopMenu}
//             />
//           </nav>

//           <MobileMenuPanel
//             mobileOpen={mobileOpen}
//             mobilePanel={mobilePanel}
//             setMobilePanel={setMobilePanel}
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//             closeMobileMenu={closeMobileMenu}
//           />
//         </div>
//       </motion.header>
//     </MotionConfig>
//   );
// }

// function NavbarGlow({ isScrolled }: { isScrolled: boolean }) {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(90deg,rgba(181,255,61,0.08),transparent_18%,transparent_78%,rgba(181,255,61,0.1))]" />

//       <div
//         className={`pointer-events-none absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#D8FF38] blur-[1px] transition-opacity duration-300 ${
//           isScrolled ? "opacity-0" : "opacity-90"
//         }`}
//       />

//       <div className="pointer-events-none absolute right-0 top-0 h-full w-60 rounded-r-[inherit] bg-[radial-gradient(circle,rgba(181,255,61,0.18)_1px,transparent_1.45px)] bg-[size:18px_18px] opacity-25 [mask-image:linear-gradient(90deg,transparent,black)]" />
//     </>
//   );
// }

// function LogoBlock() {
//   return (
//     <Link
//       href="#home"
//       className="group flex min-w-0 items-center gap-3 lg:gap-4"
//       aria-label="Kota Academy homepage"
//     >
//       <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-[#B5FF3D]/22 bg-white/[0.04] shadow-[0_12px_28px_rgba(0,0,0,0.22)] lg:h-14 lg:w-14">
//         <Image
//           src="/kotaacademy-logo.png"
//           alt="Kota Academy logo"
//           fill
//           sizes="56px"
//           className="object-contain p-1"
//           priority
//         />
//       </div>

//       <div className="min-w-0">
//         <p className="truncate text-[23px] font-black leading-none tracking-[-0.04em] text-white sm:text-[25px] lg:text-[29px]">
//           Kota <span className="text-[#B5FF3D]">Academy</span>
//         </p>

//         <p className="mt-1.5 hidden truncate text-[10px] font-black uppercase tracking-[0.12em] text-[#D7E3F5] sm:block lg:text-[11px]">
//           JEE · NEET · Foundation · Boards
//         </p>
//       </div>
//     </Link>
//   );
// }

// function DesktopNav({
//   activeMenu,
//   setActiveMenu,
// }: {
//   activeMenu: "courses" | "branches" | null;
//   setActiveMenu: (menu: "courses" | "branches" | null) => void;
// }) {
//   return (
//     <div
//       className="hidden items-center gap-1 lg:flex"
//       onMouseLeave={() => setActiveMenu(null)}
//     >
//       {navItems.map((item) => {
//         if (item.type === "courses" || item.type === "branches") {
//           const isActive = activeMenu === item.type;

//           return (
//             <button
//               key={item.label}
//               type="button"
//               onMouseEnter={() => setActiveMenu(item.type)}
//               onClick={() => setActiveMenu(isActive ? null : item.type)}
//               aria-expanded={isActive}
//               className={`group relative flex h-11 items-center gap-1.5 px-3 text-[15px] font-black transition duration-300 xl:px-4 ${
//                 isActive ? "text-[#D8FF38]" : "text-white hover:text-[#D8FF38]"
//               }`}
//             >
//               <span>{item.label}</span>

//               <ChevronDown
//                 className={`h-4 w-4 transition duration-300 ${
//                   isActive ? "rotate-180" : ""
//                 }`}
//                 strokeWidth={2.5}
//               />

//               <NavUnderline active={isActive} />
//             </button>
//           );
//         }

//         return (
//           <Link
//             key={item.label}
//             href={item.href}
//             className="group relative flex h-11 items-center px-3 text-[15px] font-black text-white transition duration-300 hover:text-[#D8FF38] xl:px-4"
//           >
//             <span>{item.label}</span>
//             <NavUnderline active={item.label === "Home"} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// function NavUnderline({ active }: { active: boolean }) {
//   return (
//     <span
//       className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#D8FF38] transition-all duration-300 ${
//         active ? "w-7 opacity-100" : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"
//       }`}
//     />
//   );
// }

// function DesktopActions() {
//   return (
//     <div className="hidden items-center gap-3 lg:flex">
//       <a
//         href="tel:08447009390"
//         className="group flex h-13 min-h-[52px] items-center gap-3 rounded-full border border-white/14 bg-white/[0.035] px-4 text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#229CEB]/50 hover:bg-white/[0.07]"
//       >
//         <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#229CEB]/12 text-[#229CEB]">
//           <Phone className="h-5 w-5" strokeWidth={2.35} />
//         </span>

//         <span className="leading-tight">
//           <span className="block text-[15px] font-black">084470 09390</span>
//           <span className="block text-[11px] font-semibold text-[#B7C4D5]">
//             Call Us
//           </span>
//         </span>
//       </a>

//       <Link
//         href="#contact"
//         className="group flex h-13 min-h-[52px] items-center gap-3 rounded-full bg-[linear-gradient(135deg,#D8FF38_0%,#A7F11D_48%,#65C112_100%)] px-5 text-[15px] font-black text-[#07142F] shadow-[0_16px_36px_rgba(107,190,16,0.24)] transition duration-300 hover:-translate-y-0.5 xl:px-6"
//       >
//         <CalendarCheck className="h-5 w-5" strokeWidth={2.35} />
//         Book Free Counselling
//         <ArrowRight
//           className="h-5 w-5 transition duration-300 group-hover:translate-x-1"
//           strokeWidth={2.55}
//         />
//       </Link>
//     </div>
//   );
// }

// function MobileMenuButton({
//   mobileOpen,
//   setMobileOpen,
//   setMobilePanel,
// }: {
//   mobileOpen: boolean;
//   setMobileOpen: (open: boolean) => void;
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={() => {
//         setMobileOpen(!mobileOpen);
//         setMobilePanel("main");
//       }}
//       aria-label={mobileOpen ? "Close menu" : "Open menu"}
//       aria-expanded={mobileOpen}
//       className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:border-[#B5FF3D]/45 lg:hidden"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         {mobileOpen ? (
//           <motion.span
//             key="close"
//             initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
//             animate={{ opacity: 1, rotate: 0, scale: 1 }}
//             exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
//             transition={{ duration: 0.18 }}
//           >
//             <X className="h-6 w-6" strokeWidth={2.4} />
//           </motion.span>
//         ) : (
//           <motion.span
//             key="menu"
//             initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
//             animate={{ opacity: 1, rotate: 0, scale: 1 }}
//             exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
//             transition={{ duration: 0.18 }}
//           >
//             <Menu className="h-6 w-6" strokeWidth={2.4} />
//           </motion.span>
//         )}
//       </AnimatePresence>
//     </button>
//   );
// }

// function DesktopMenus({
//   activeMenu,
//   setActiveMenu,
// }: {
//   activeMenu: "courses" | "branches" | null;
//   setActiveMenu: (menu: "courses" | "branches" | null) => void;
// }) {
//   return (
//     <div className="hidden lg:block" onMouseEnter={() => undefined}>
//       <AnimatePresence>
//         {activeMenu === "courses" && (
//           <CoursesMegaMenu onClose={() => setActiveMenu(null)} />
//         )}

//         {activeMenu === "branches" && (
//           <BranchesDropdown onClose={() => setActiveMenu(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function CoursesMegaMenu({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.div
//       {...menuMotion}
//       className="absolute left-1/2 top-[calc(100%+14px)] w-[min(1280px,calc(100vw-64px))] -translate-x-1/2"
//       onMouseEnter={() => undefined}
//       onMouseLeave={onClose}
//     >
//       <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#06111F]/94 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_24%,rgba(181,255,61,0.16),transparent_32%)]" />

//         <div className="relative z-10 grid grid-cols-[repeat(4,minmax(0,1fr))_300px] gap-5">
//           {courseCategories.map((category, index) => (
//             <MegaCourseColumn
//               key={category.id}
//               category={category}
//               showDivider={index !== courseCategories.length - 1}
//               onClose={onClose}
//             />
//           ))}

//           <MegaGuidanceCard />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function MegaCourseColumn({
//   category,
//   showDivider,
//   onClose,
// }: {
//   category: CourseCategory;
//   showDivider: boolean;
//   onClose: () => void;
// }) {
//   const Icon = category.icon;

//   return (
//     <div className={`relative pr-4 ${showDivider ? "border-r border-white/10" : ""}`}>
//       <div className="mb-5 flex items-center gap-3">
//         <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B5FF3D]/10 text-[#D8FF38]">
//           <Icon className="h-5 w-5" strokeWidth={2.2} />
//         </span>

//         <h3 className="text-[18px] font-black tracking-[-0.025em] text-white">
//           {category.title}
//         </h3>
//       </div>

//       <div className="grid gap-2">
//         {category.courses.map((course) => (
//           <Link
//             key={course.title}
//             href={course.href}
//             onClick={onClose}
//             className="group rounded-2xl border border-transparent px-3 py-3 transition duration-300 hover:border-white/10 hover:bg-white/[0.045]"
//           >
//             <div className="flex items-center justify-between gap-3">
//               <span className="text-[15px] font-black text-white transition group-hover:text-[#D8FF38]">
//                 {course.title}
//               </span>

//               <ArrowRight
//                 className="h-4 w-4 shrink-0 text-[#D8FF38] opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
//                 strokeWidth={2.4}
//               />
//             </div>

//             <p className="mt-1 text-[12.5px] font-semibold text-[#B7C4D5]">
//               {course.subtitle}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MegaGuidanceCard() {
//   return (
//     <div className="relative overflow-hidden rounded-[24px] border border-[#B5FF3D]/18 bg-[radial-gradient(circle_at_90%_20%,rgba(181,255,61,0.2),transparent_42%),linear-gradient(135deg,rgba(16,54,36,0.72),rgba(7,17,31,0.9))] p-5">
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111F] to-transparent" />

//       <div className="relative z-10">
//         <h3 className="max-w-[210px] text-[24px] font-black leading-tight tracking-[-0.04em] text-white">
//           Not sure which course is right?
//         </h3>

//         <p className="mt-4 text-[14px] font-medium leading-6 text-[#DDE7F5]">
//           Get expert guidance and choose the perfect path.
//         </p>

//         <Link
//           href="#contact"
//           className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 py-3 text-[13px] font-black text-[#07142F]"
//         >
//           Book Free Counselling
//           <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// function BranchesDropdown({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.div
//       {...menuMotion}
//       className="absolute right-[270px] top-[calc(100%+14px)] w-[390px]"
//       onMouseLeave={onClose}
//     >
//       <div className="rounded-[26px] border border-white/10 bg-[#06111F]/94 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
//         <div className="grid gap-3">
//           {branches.map((branch) => (
//             <a
//               key={branch.id}
//               href={branch.directionsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-[#B5FF3D]/35 hover:bg-white/[0.065]"
//             >
//               <div className="flex items-start gap-3">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/10 text-[#D8FF38]">
//                   <Landmark className="h-5 w-5" strokeWidth={2.2} />
//                 </span>

//                 <div className="min-w-0 flex-1">
//                   <div className="flex items-center justify-between gap-3">
//                     <h3 className="text-[16px] font-black text-white">
//                       {branch.name}
//                     </h3>

//                     <span className="rounded-full bg-[#B5FF3D]/10 px-2.5 py-1 text-[13px] font-black text-[#D8FF38]">
//                       {branch.rating}★
//                     </span>
//                   </div>

//                   <p className="mt-1 text-[13px] font-semibold text-[#B7C4D5]">
//                     {branch.subtitle} · {branch.reviews} reviews
//                   </p>

//                   <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-black text-[#D8FF38]">
//                     Get Directions
//                     <MapPin className="h-4 w-4" strokeWidth={2.3} />
//                   </span>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function MobileMenuPanel({
//   mobileOpen,
//   mobilePanel,
//   setMobilePanel,
//   selectedCategory,
//   setSelectedCategory,
//   closeMobileMenu,
// }: {
//   mobileOpen: boolean;
//   mobilePanel: "main" | "courses" | "category";
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   selectedCategory: CourseCategoryId;
//   setSelectedCategory: (category: CourseCategoryId) => void;
//   closeMobileMenu: () => void;
// }) {
//   return (
//     <AnimatePresence>
//       {mobileOpen && (
//         <motion.div
//           {...menuMotion}
//           className="mt-3 max-h-[calc(100vh-108px)] overflow-y-auto rounded-[28px] border border-white/10 bg-[#06111F]/96 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl lg:hidden"
//         >
//           <div className="overflow-hidden rounded-[22px]">
//             <AnimatePresence mode="wait" initial={false}>
//               {mobilePanel === "main" && (
//                 <MobileMainPanel
//                   key="mobile-main"
//                   setMobilePanel={setMobilePanel}
//                   closeMobileMenu={closeMobileMenu}
//                 />
//               )}

//               {mobilePanel === "courses" && (
//                 <MobileCoursesPanel
//                   key="mobile-courses"
//                   setMobilePanel={setMobilePanel}
//                   setSelectedCategory={setSelectedCategory}
//                 />
//               )}

//               {mobilePanel === "category" && (
//                 <MobileCategoryPanel
//                   key="mobile-category"
//                   selectedCategory={selectedCategory}
//                   setMobilePanel={setMobilePanel}
//                   closeMobileMenu={closeMobileMenu}
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function MobileMainPanel({
//   setMobilePanel,
//   closeMobileMenu,
// }: {
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   closeMobileMenu: () => void;
// }) {
//   return (
//     <motion.div {...panelMotion}>
//       <div className="flex items-center gap-3 border-b border-white/10 pb-4">
//         <MapPin className="h-5 w-5 shrink-0 text-[#D8FF38]" strokeWidth={2.35} />
//         <p className="text-[13px] font-bold text-[#DDE7F5]">
//           Alpha-I & Omicron-III Branches, Greater Noida
//         </p>
//       </div>

//       <div className="mt-4 grid gap-2">
//         <MobileNavRow
//           icon={Home}
//           label="Home"
//           href="#home"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={BookOpen}
//           label="Courses"
//           onClick={() => setMobilePanel("courses")}
//           active
//         />

//         <MobileNavRow
//           icon={Trophy}
//           label="Results"
//           href="#results"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={UsersRound}
//           label="Faculty"
//           href="#faculty"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={Landmark}
//           label="Branches"
//           href="#branches"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={ClipboardList}
//           label="Blog"
//           href="/blog"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={Mail}
//           label="Contact"
//           href="#contact"
//           onClick={closeMobileMenu}
//         />
//       </div>

//       <QuickActions closeMobileMenu={closeMobileMenu} />

//       <MobileTrustStrip />
//     </motion.div>
//   );
// }

// function MobileNavRow({
//   icon: Icon,
//   label,
//   href,
//   onClick,
//   active = false,
// }: {
//   icon: LucideIcon;
//   label: string;
//   href?: string;
//   onClick: () => void;
//   active?: boolean;
// }) {
//   const className = `group flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition duration-300 ${
//     active
//       ? "bg-[#B5FF3D]/10 text-[#D8FF38]"
//       : "bg-white/[0.025] text-white hover:bg-white/[0.05] hover:text-[#D8FF38]"
//   }`;

//   const content = (
//     <>
//       <Icon className="h-5 w-5 shrink-0" strokeWidth={2.25} />

//       <span className="flex-1 text-[16px] font-black">{label}</span>

//       <ArrowRight
//         className="h-4 w-4 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
//         strokeWidth={2.5}
//       />
//     </>
//   );

//   if (href) {
//     return (
//       <Link href={href} onClick={onClick} className={className}>
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button type="button" onClick={onClick} className={className}>
//       {content}
//     </button>
//   );
// }

// function QuickActions({ closeMobileMenu }: { closeMobileMenu: () => void }) {
//   return (
//     <div className="mt-5 border-t border-white/10 pt-5">
//       <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#D8FF38]">
//         Quick Actions
//       </p>

//       <div className="grid gap-3">
//         <Link
//           href="#contact"
//           onClick={closeMobileMenu}
//           className="group flex min-h-[56px] items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 text-[#07142F]"
//         >
//           <CalendarCheck className="h-5 w-5" strokeWidth={2.35} />
//           <span className="flex-1 text-[15px] font-black">
//             Book Free Counselling
//           </span>
//           <ArrowRight
//             className="h-5 w-5 transition group-hover:translate-x-1"
//             strokeWidth={2.55}
//           />
//         </Link>

//         <a
//           href="tel:08447009390"
//           onClick={closeMobileMenu}
//           className="flex min-h-[56px] items-center gap-3 rounded-2xl border border-[#229CEB]/25 bg-[#229CEB]/10 px-4 text-white"
//         >
//           <Phone className="h-5 w-5 text-[#229CEB]" strokeWidth={2.35} />
//           <span>
//             <span className="block text-[15px] font-black">
//               Call 084470 09390
//             </span>
//             <span className="text-[12px] font-semibold text-[#B7C4D5]">
//               Call Us
//             </span>
//           </span>
//         </a>

//         <a
//           href="https://wa.me/918447009390"
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={closeMobileMenu}
//           className="flex min-h-[56px] items-center gap-3 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/10 px-4 text-white"
//         >
//           <MessageCircle
//             className="h-5 w-5 text-[#25D366]"
//             strokeWidth={2.35}
//           />
//           <span>
//             <span className="block text-[15px] font-black">
//               Chat on WhatsApp
//             </span>
//             <span className="text-[12px] font-semibold text-[#B7C4D5]">
//               Instant reply
//             </span>
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// }

// function MobileTrustStrip() {
//   return (
//     <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
//       {trustItems.map((item) => {
//         const Icon = item.icon;

//         return (
//           <div
//             key={item.title}
//             className="rounded-2xl bg-white/[0.035] p-3 text-center"
//           >
//             <Icon
//               className="mx-auto h-5 w-5 text-[#D8FF38]"
//               strokeWidth={2.25}
//             />
//             <p className="mt-2 text-[12px] font-black text-white">
//               {item.title}
//             </p>
//             <p className="mt-1 text-[10.5px] font-semibold text-[#B7C4D5]">
//               {item.subtitle}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function MobileCoursesPanel({
//   setMobilePanel,
//   setSelectedCategory,
// }: {
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   setSelectedCategory: (category: CourseCategoryId) => void;
// }) {
//   return (
//     <motion.div {...panelMotion}>
//       <MobilePanelBack
//         label="Courses"
//         onBack={() => setMobilePanel("main")}
//       />

//       <div className="mt-4 grid overflow-hidden rounded-2xl border border-white/10">
//         {courseCategories.map((category, index) => {
//           const Icon = category.icon;

//           return (
//             <button
//               key={category.id}
//               type="button"
//               onClick={() => {
//                 setSelectedCategory(category.id);
//                 setMobilePanel("category");
//               }}
//               className={`flex min-h-[58px] items-center gap-3 bg-white/[0.025] px-4 py-3 text-left transition hover:bg-white/[0.055] ${
//                 index !== courseCategories.length - 1
//                   ? "border-b border-white/10"
//                   : ""
//               }`}
//             >
//               <Icon
//                 className="h-6 w-6 shrink-0 text-[#D8FF38]"
//                 strokeWidth={2.2}
//               />

//               <span className="flex-1 text-[17px] font-black text-white">
//                 {category.title}
//               </span>

//               <ArrowRight
//                 className="h-4 w-4 text-[#D8FF38]"
//                 strokeWidth={2.4}
//               />
//             </button>
//           );
//         })}
//       </div>

//       <div className="mt-5 overflow-hidden rounded-2xl border border-[#B5FF3D]/16 bg-[radial-gradient(circle_at_90%_20%,rgba(181,255,61,0.18),transparent_42%),linear-gradient(135deg,rgba(16,54,36,0.72),rgba(7,17,31,0.9))] p-5">
//         <h3 className="text-[22px] font-black leading-tight tracking-[-0.035em] text-white">
//           Not sure which course is right?
//         </h3>

//         <p className="mt-3 text-[14px] font-medium leading-6 text-[#DDE7F5]">
//           Get expert guidance and choose the perfect path.
//         </p>

//         <Link
//           href="#contact"
//           className="mt-4 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 py-3 text-[13px] font-black text-[#07142F]"
//         >
//           Book Free Counselling
//           <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// function MobileCategoryPanel({
//   selectedCategory,
//   setMobilePanel,
//   closeMobileMenu,
// }: {
//   selectedCategory: CourseCategoryId;
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   closeMobileMenu: () => void;
// }) {
//   const category =
//     courseCategories.find((item) => item.id === selectedCategory) ??
//     courseCategories[0];

//   const Icon = category.icon;

//   return (
//     <motion.div {...panelMotion}>
//       <MobilePanelBack
//         label={category.title}
//         onBack={() => setMobilePanel("courses")}
//       />

//       <div className="mt-4 flex items-center gap-3">
//         <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B5FF3D]/10 text-[#D8FF38]">
//           <Icon className="h-6 w-6" strokeWidth={2.2} />
//         </span>

//         <h3 className="text-[25px] font-black tracking-[-0.045em] text-[#D8FF38]">
//           {category.title}
//         </h3>
//       </div>

//       <div className="mt-4 grid overflow-hidden rounded-2xl border border-white/10">
//         {category.courses.map((course, index) => (
//           <Link
//             key={course.title}
//             href={course.href}
//             onClick={closeMobileMenu}
//             className={`group flex items-center gap-3 bg-white/[0.025] px-4 py-4 transition hover:bg-white/[0.055] ${
//               index !== category.courses.length - 1
//                 ? "border-b border-white/10"
//                 : ""
//             }`}
//           >
//             <span className="min-w-0 flex-1">
//               <span className="block text-[16px] font-black text-white">
//                 {course.title}
//               </span>
//               <span className="mt-1 block text-[13px] font-semibold text-[#B7C4D5]">
//                 {course.subtitle}
//               </span>
//             </span>

//             <ArrowRight
//               className="h-5 w-5 shrink-0 text-[#D8FF38] transition group-hover:translate-x-1"
//               strokeWidth={2.45}
//             />
//           </Link>
//         ))}
//       </div>

//       <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
//         <div className="flex items-center gap-3">
//           <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B5FF3D]/10 text-[#D8FF38]">
//             <UsersRound className="h-6 w-6" strokeWidth={2.2} />
//           </span>

//           <div>
//             <h3 className="text-[18px] font-black text-white">
//               Need Help Choosing?
//             </h3>
//             <p className="mt-1 text-[13px] font-semibold text-[#B7C4D5]">
//               Our academic experts are here to help you.
//             </p>
//           </div>
//         </div>

//         <Link
//           href="#contact"
//           onClick={closeMobileMenu}
//           className="mt-4 flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 text-[14px] font-black text-[#07142F]"
//         >
//           Talk to Counsellor
//           <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// function MobilePanelBack({
//   label,
//   onBack,
// }: {
//   label: string;
//   onBack: () => void;
// }) {
//   return (
//     <div>
//       <button
//         type="button"
//         onClick={onBack}
//         className="inline-flex items-center gap-2 text-[14px] font-black text-[#D8FF38]"
//       >
//         <ArrowRight className="h-4 w-4 rotate-180" strokeWidth={2.5} />
//         Back
//       </button>

//       <h2 className="mt-3 text-[28px] font-black tracking-[-0.045em] text-white">
//         {label}
//       </h2>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   type Variants,
// } from "framer-motion";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ChevronDown,
//   ClipboardList,
//   GraduationCap,
//   Home,
//   Landmark,
//   Mail,
//   MapPin,
//   Menu,
//   MessageCircle,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   Target,
//   Trophy,
//   UsersRound,
//   X,
//   type LucideIcon,
// } from "lucide-react";
// import { useCallback, useEffect, useRef, useState } from "react";

// type NavItemType = "link" | "courses" | "branches";

// type NavItem = {
//   label: string;
//   href: string;
//   type: NavItemType;
// };

// type CourseCategoryId = "engineering" | "medical" | "foundation" | "school";

// type CourseItem = {
//   title: string;
//   subtitle: string;
//   href: string;
// };

// type CourseCategory = {
//   id: CourseCategoryId;
//   title: string;
//   icon: LucideIcon;
//   courses: CourseItem[];
// };

// type Branch = {
//   id: string;
//   name: string;
//   subtitle: string;
//   rating: string;
//   reviews: string;
//   directionsUrl: string;
// };

// const navItems: NavItem[] = [
//   { label: "Home", href: "#home", type: "link" },
//   { label: "Courses", href: "#courses", type: "courses" },
//   { label: "Results", href: "#results", type: "link" },
//   { label: "Faculty", href: "#faculty", type: "link" },
//   { label: "Branches", href: "#branches", type: "branches" },
//   { label: "Blog", href: "/blog", type: "link" },
//   { label: "Contact", href: "#contact", type: "link" },
// ];

// const courseCategories: CourseCategory[] = [
//   {
//     id: "engineering",
//     title: "Engineering",
//     icon: Target,
//     courses: [
//       {
//         title: "IIT-JEE 11–12",
//         subtitle: "Class 11–12 · Main + Advanced",
//         href: "/courses/iit-jee",
//       },
//       {
//         title: "IIT-JEE Dropper",
//         subtitle: "Repeaters Batch",
//         href: "/courses/iit-jee-dropper",
//       },
//       {
//         title: "JEE Foundation",
//         subtitle: "Class 8, 9, 10",
//         href: "/courses/jee-foundation",
//       },
//       {
//         title: "JEE Crash Course",
//         subtitle: "Short Term Program",
//         href: "/courses/jee-crash-course",
//       },
//     ],
//   },
//   {
//     id: "medical",
//     title: "Medical",
//     icon: Stethoscope,
//     courses: [
//       {
//         title: "NEET-UG 11–12",
//         subtitle: "Class 11–12 · Medical Entrance",
//         href: "/courses/neet-ug",
//       },
//       {
//         title: "NEET-UG Dropper",
//         subtitle: "Repeaters Batch",
//         href: "/courses/neet-dropper",
//       },
//       {
//         title: "NEET Foundation",
//         subtitle: "Class 8, 9, 10",
//         href: "/courses/neet-foundation",
//       },
//       {
//         title: "NEET Crash Course",
//         subtitle: "Short Term Program",
//         href: "/courses/neet-crash-course",
//       },
//     ],
//   },
//   {
//     id: "foundation",
//     title: "Foundation",
//     icon: BookOpen,
//     courses: [
//       {
//         title: "Class 8",
//         subtitle: "Foundation Program",
//         href: "/courses/class-8",
//       },
//       {
//         title: "Class 9",
//         subtitle: "Foundation Program",
//         href: "/courses/class-9",
//       },
//       {
//         title: "Class 10",
//         subtitle: "Foundation Program",
//         href: "/courses/class-10",
//       },
//     ],
//   },
//   {
//     id: "school",
//     title: "School",
//     icon: ClipboardList,
//     courses: [
//       {
//         title: "Class 11–12 Boards",
//         subtitle: "All Subjects",
//         href: "/courses/class-11-12-boards",
//       },
//       {
//         title: "Class 9–10 Boards",
//         subtitle: "All Subjects",
//         href: "/courses/class-9-10-boards",
//       },
//     ],
//   },
// ];

// const branches: Branch[] = [
//   {
//     id: "alpha",
//     name: "Alpha-I Branch",
//     subtitle: "Alpha Commercial Belt",
//     rating: "4.7",
//     reviews: "157",
//     directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
//   },
//   {
//     id: "omicron",
//     name: "Omicron-III Branch",
//     subtitle: "Near SBI Bank",
//     rating: "4.4",
//     reviews: "22",
//     directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
//   },
// ];

// const trustItems = [
//   {
//     title: "Small Batches",
//     subtitle: "Personal Attention",
//     icon: UsersRound,
//   },
//   {
//     title: "Regular Testing",
//     subtitle: "Performance Tracking",
//     icon: CalendarCheck,
//   },
//   {
//     title: "Doubt Support",
//     subtitle: "Concept Clarity",
//     icon: MessageCircle,
//   },
//   {
//     title: "Parent Updates",
//     subtitle: "Stay Informed",
//     icon: ShieldCheck,
//   },
// ];

// const EXPO = [0.16, 1, 0.3, 1] as const;

// const menuMotion = {
//   initial: { opacity: 0, y: -10, scale: 0.985 },
//   animate: { opacity: 1, y: 0, scale: 1 },
//   exit: { opacity: 0, y: -10, scale: 0.985 },
//   transition: { duration: 0.24, ease: EXPO },
// };

// const panelMotion = {
//   initial: { opacity: 0, x: 18 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -18 },
//   transition: { duration: 0.24, ease: EXPO },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: -12 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: EXPO },
//   },
// };

// export default function KotaAcademyNavbar() {
//   const navRef = useRef<HTMLElement | null>(null);

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeDesktopMenu, setActiveDesktopMenu] = useState<
//     "courses" | "branches" | null
//   >(null);
//   const [mobilePanel, setMobilePanel] = useState<
//     "main" | "courses" | "category"
//   >("main");
//   const [selectedCategory, setSelectedCategory] =
//     useState<CourseCategoryId>("engineering");

//   const closeMobileMenu = useCallback(() => {
//     setMobileOpen(false);
//     setMobilePanel("main");
//     setSelectedCategory("engineering");
//   }, []);

//   const closeDesktopMenu = useCallback(() => {
//     setActiveDesktopMenu(null);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 26);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   useEffect(() => {
//     const handlePointerDown = (event: PointerEvent) => {
//       if (!navRef.current?.contains(event.target as Node)) {
//         closeDesktopMenu();
//       }
//     };

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         closeDesktopMenu();
//         closeMobileMenu();
//       }
//     };

//     document.addEventListener("pointerdown", handlePointerDown);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("pointerdown", handlePointerDown);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [closeDesktopMenu, closeMobileMenu]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <motion.header
//         ref={navRef}
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         className="fixed inset-x-0 top-3 z-[90] px-4 sm:top-4 sm:px-5 lg:top-5 lg:px-6"
//       >
//         <div className="mx-auto max-w-[1460px]">
//           <nav
//             aria-label="Primary navigation"
//             className={`relative overflow-visible rounded-[24px] border backdrop-blur-2xl transition-all duration-300 lg:rounded-full ${
//               isScrolled
//                 ? "border-white/10 bg-[#06111F]/88 shadow-[0_20px_70px_rgba(0,0,0,0.36)]"
//                 : "border-[#B5FF3D]/28 bg-[#06111F]/72 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
//             }`}
//           >
//             <NavbarGlow isScrolled={isScrolled} />

//             <div
//               className={`relative z-10 flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-5 lg:px-5 xl:px-6 ${
//                 isScrolled
//                   ? "min-h-[66px] lg:min-h-[70px]"
//                   : "min-h-[70px] lg:min-h-[76px]"
//               }`}
//             >
//               <LogoBlock />

//               <DesktopNav
//                 activeMenu={activeDesktopMenu}
//                 setActiveMenu={setActiveDesktopMenu}
//               />

//               <DesktopActions />

//               <MobileMenuButton
//                 mobileOpen={mobileOpen}
//                 setMobileOpen={setMobileOpen}
//                 setMobilePanel={setMobilePanel}
//               />
//             </div>

//             <DesktopMenus
//               activeMenu={activeDesktopMenu}
//               setActiveMenu={setActiveDesktopMenu}
//             />
//           </nav>

//           <MobileMenuPanel
//             mobileOpen={mobileOpen}
//             mobilePanel={mobilePanel}
//             setMobilePanel={setMobilePanel}
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//             closeMobileMenu={closeMobileMenu}
//           />
//         </div>
//       </motion.header>
//     </MotionConfig>
//   );
// }

// function NavbarGlow({ isScrolled }: { isScrolled: boolean }) {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(90deg,rgba(181,255,61,0.08),transparent_18%,transparent_78%,rgba(181,255,61,0.1))]" />

//       <div
//         className={`pointer-events-none absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-full bg-[#D8FF38] blur-[1px] transition-opacity duration-300 ${
//           isScrolled ? "opacity-0" : "opacity-90"
//         }`}
//       />

//       <div className="pointer-events-none absolute right-0 top-0 h-full w-56 rounded-r-[inherit] bg-[radial-gradient(circle,rgba(181,255,61,0.18)_1px,transparent_1.45px)] bg-[size:18px_18px] opacity-20 [mask-image:linear-gradient(90deg,transparent,black)]" />
//     </>
//   );
// }

// function LogoBlock() {
//   return (
//     <Link
//       href="#home"
//       className="group flex min-w-0 shrink-0 items-center gap-3 lg:gap-3.5"
//       aria-label="Kota Academy homepage"
//     >
//       <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[15px] border border-[#B5FF3D]/24 bg-[#B5FF3D]/8 shadow-[0_12px_28px_rgba(0,0,0,0.22)] lg:h-12 lg:w-12">
//         <Image
//           src="/kotaacademy-logo.png"
//           alt="Kota Academy logo"
//           fill
//           sizes="48px"
//           className="object-contain p-0.5"
//           priority
//         />

//         <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/8" />
//       </div>

//       <div className="min-w-0">
//         <p className="truncate text-[22px] font-black leading-none tracking-[-0.045em] text-white sm:text-[24px] lg:text-[26px] xl:text-[28px]">
//           Kota <span className="text-[#B5FF3D]">Academy</span>
//         </p>

//         <p className="mt-1.5 hidden max-w-[230px] truncate text-[10px] font-black uppercase tracking-[0.12em] text-[#D7E3F5] sm:block lg:max-w-[250px]">
//           JEE · NEET · Foundation · Boards
//         </p>
//       </div>
//     </Link>
//   );
// }

// function DesktopNav({
//   activeMenu,
//   setActiveMenu,
// }: {
//   activeMenu: "courses" | "branches" | null;
//   setActiveMenu: (menu: "courses" | "branches" | null) => void;
// }) {
//   return (
//     <div
//       className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
//       onMouseLeave={() => setActiveMenu(null)}
//     >
//       {navItems.map((item) => {
//         if (item.type === "courses" || item.type === "branches") {
//           const isActive = activeMenu === item.type;

//           return (
//             <button
//               key={item.label}
//               type="button"
//               onMouseEnter={() => setActiveMenu(item.type)}
//               onClick={() => setActiveMenu(isActive ? null : item.type)}
//               aria-expanded={isActive}
//               className={`group relative flex h-10 items-center gap-1.5 px-2.5 text-[14px] font-black transition duration-300 xl:px-3.5 xl:text-[15px] ${
//                 isActive ? "text-[#D8FF38]" : "text-white hover:text-[#D8FF38]"
//               }`}
//             >
//               <span>{item.label}</span>

//               <ChevronDown
//                 className={`h-3.5 w-3.5 transition duration-300 ${
//                   isActive ? "rotate-180" : ""
//                 }`}
//                 strokeWidth={2.5}
//               />

//               <NavUnderline active={isActive} />
//             </button>
//           );
//         }

//         return (
//           <Link
//             key={item.label}
//             href={item.href}
//             className="group relative flex h-10 items-center px-2.5 text-[14px] font-black text-white transition duration-300 hover:text-[#D8FF38] xl:px-3.5 xl:text-[15px]"
//           >
//             <span>{item.label}</span>
//             <NavUnderline active={item.label === "Home"} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// function NavUnderline({ active }: { active: boolean }) {
//   return (
//     <span
//       className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#D8FF38] transition-all duration-300 ${
//         active
//           ? "w-7 opacity-100"
//           : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"
//       }`}
//     />
//   );
// }

// function DesktopActions() {
//   return (
//     <div className="hidden shrink-0 items-center gap-3 lg:flex">
//       <a
//         href="tel:08447009390"
//         className="group flex h-[48px] min-w-[176px] items-center gap-3 rounded-full border border-white/14 bg-white/[0.035] px-4 text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#229CEB]/50 hover:bg-white/[0.07] xl:min-w-[188px]"
//       >
//         <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#229CEB]/12 text-[#229CEB]">
//           <Phone className="h-5 w-5" strokeWidth={2.35} />
//         </span>

//         <span className="min-w-0 leading-tight">
//           <span className="block whitespace-nowrap text-[14px] font-black xl:text-[15px]">
//             084470 09390
//           </span>
//           <span className="block text-[11px] font-semibold text-[#B7C4D5]">
//             Call Us
//           </span>
//         </span>
//       </a>

//       <Link
//         href="#contact"
//         className="group flex h-[48px] min-w-[218px] items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#D8FF38_0%,#A7F11D_48%,#65C112_100%)] px-5 text-[14px] font-black text-[#07142F] shadow-[0_16px_36px_rgba(107,190,16,0.24)] transition duration-300 hover:-translate-y-0.5 xl:min-w-[238px] xl:text-[15px]"
//       >
//         <CalendarCheck className="h-5 w-5 shrink-0" strokeWidth={2.35} />

//         <span className="whitespace-nowrap">Book Free Counselling</span>

//         <ArrowRight
//           className="h-5 w-5 shrink-0 transition duration-300 group-hover:translate-x-1"
//           strokeWidth={2.55}
//         />
//       </Link>
//     </div>
//   );
// }

// function MobileMenuButton({
//   mobileOpen,
//   setMobileOpen,
//   setMobilePanel,
// }: {
//   mobileOpen: boolean;
//   setMobileOpen: (open: boolean) => void;
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={() => {
//         setMobileOpen(!mobileOpen);
//         setMobilePanel("main");
//       }}
//       aria-label={mobileOpen ? "Close menu" : "Open menu"}
//       aria-expanded={mobileOpen}
//       className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:border-[#B5FF3D]/45 lg:hidden"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         {mobileOpen ? (
//           <motion.span
//             key="close"
//             initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
//             animate={{ opacity: 1, rotate: 0, scale: 1 }}
//             exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
//             transition={{ duration: 0.18 }}
//           >
//             <X className="h-6 w-6" strokeWidth={2.4} />
//           </motion.span>
//         ) : (
//           <motion.span
//             key="menu"
//             initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
//             animate={{ opacity: 1, rotate: 0, scale: 1 }}
//             exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
//             transition={{ duration: 0.18 }}
//           >
//             <Menu className="h-6 w-6" strokeWidth={2.4} />
//           </motion.span>
//         )}
//       </AnimatePresence>
//     </button>
//   );
// }

// function DesktopMenus({
//   activeMenu,
//   setActiveMenu,
// }: {
//   activeMenu: "courses" | "branches" | null;
//   setActiveMenu: (menu: "courses" | "branches" | null) => void;
// }) {
//   return (
//     <div className="hidden lg:block">
//       <AnimatePresence>
//         {activeMenu === "courses" && (
//           <CoursesMegaMenu onClose={() => setActiveMenu(null)} />
//         )}

//         {activeMenu === "branches" && (
//           <BranchesDropdown onClose={() => setActiveMenu(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function CoursesMegaMenu({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.div
//       {...menuMotion}
//       className="absolute left-1/2 top-[calc(100%+12px)] w-[min(1180px,calc(100vw-64px))] -translate-x-1/2"
//       onMouseEnter={() => undefined}
//       onMouseLeave={onClose}
//     >
//       <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#06111F]/98 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.46)] backdrop-blur-[28px]">
//         <div className="pointer-events-none absolute inset-0 bg-[#06111F]/30" />
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_24%,rgba(181,255,61,0.13),transparent_32%)]" />

//         <div className="relative z-10 grid grid-cols-[repeat(4,minmax(0,1fr))_280px] gap-4">
//           {courseCategories.map((category, index) => (
//             <MegaCourseColumn
//               key={category.id}
//               category={category}
//               showDivider={index !== courseCategories.length - 1}
//               onClose={onClose}
//             />
//           ))}

//           <MegaGuidanceCard />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function MegaCourseColumn({
//   category,
//   showDivider,
//   onClose,
// }: {
//   category: CourseCategory;
//   showDivider: boolean;
//   onClose: () => void;
// }) {
//   const Icon = category.icon;

//   return (
//     <div
//       className={`relative pr-3 ${
//         showDivider ? "border-r border-white/10" : ""
//       }`}
//     >
//       <div className="mb-4 flex items-center gap-3">
//         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B5FF3D]/10 text-[#D8FF38]">
//           <Icon className="h-5 w-5" strokeWidth={2.2} />
//         </span>

//         <h3 className="truncate text-[17px] font-black tracking-[-0.025em] text-white">
//           {category.title}
//         </h3>
//       </div>

//       <div className="grid gap-1.5">
//         {category.courses.map((course) => (
//           <Link
//             key={course.title}
//             href={course.href}
//             onClick={onClose}
//             className="group rounded-2xl border border-transparent px-3 py-2.5 transition duration-300 hover:border-white/10 hover:bg-white/[0.045]"
//           >
//             <div className="flex items-center justify-between gap-3">
//               <span className="truncate text-[14.5px] font-black text-white transition group-hover:text-[#D8FF38]">
//                 {course.title}
//               </span>

//               <ArrowRight
//                 className="h-4 w-4 shrink-0 text-[#D8FF38] opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
//                 strokeWidth={2.4}
//               />
//             </div>

//             <p className="mt-1 truncate text-[12px] font-semibold text-[#B7C4D5]">
//               {course.subtitle}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MegaGuidanceCard() {
//   return (
//     <div className="relative overflow-hidden rounded-[22px] border border-[#B5FF3D]/18 bg-[radial-gradient(circle_at_90%_18%,rgba(181,255,61,0.18),transparent_42%),linear-gradient(135deg,rgba(16,54,36,0.72),rgba(7,17,31,0.92))] p-5">
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07111F] to-transparent" />

//       <div className="relative z-10">
//         <h3 className="max-w-[220px] text-[23px] font-black leading-tight tracking-[-0.04em] text-white">
//           Not sure which course is right?
//         </h3>

//         <p className="mt-3 text-[14px] font-medium leading-6 text-[#DDE7F5]">
//           Get expert guidance and choose the perfect path.
//         </p>

//         <Link
//           href="#contact"
//           className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 py-3 text-[13px] font-black text-[#07142F]"
//         >
//           Book Free Counselling
//           <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// function BranchesDropdown({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.div
//       {...menuMotion}
//       className="absolute right-[250px] top-[calc(100%+12px)] w-[380px]"
//       onMouseLeave={onClose}
//     >
//       <div className="rounded-[26px] border border-white/10 bg-[#06111F]/98 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.42)] backdrop-blur-[28px]">
//         <div className="grid gap-3">
//           {branches.map((branch) => (
//             <a
//               key={branch.id}
//               href={branch.directionsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-[#B5FF3D]/35 hover:bg-white/[0.065]"
//             >
//               <div className="flex items-start gap-3">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/10 text-[#D8FF38]">
//                   <Landmark className="h-5 w-5" strokeWidth={2.2} />
//                 </span>

//                 <div className="min-w-0 flex-1">
//                   <div className="flex items-center justify-between gap-3">
//                     <h3 className="text-[16px] font-black text-white">
//                       {branch.name}
//                     </h3>

//                     <span className="rounded-full bg-[#B5FF3D]/10 px-2.5 py-1 text-[13px] font-black text-[#D8FF38]">
//                       {branch.rating}★
//                     </span>
//                   </div>

//                   <p className="mt-1 text-[13px] font-semibold text-[#B7C4D5]">
//                     {branch.subtitle} · {branch.reviews} reviews
//                   </p>

//                   <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-black text-[#D8FF38]">
//                     Get Directions
//                     <MapPin className="h-4 w-4" strokeWidth={2.3} />
//                   </span>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function MobileMenuPanel({
//   mobileOpen,
//   mobilePanel,
//   setMobilePanel,
//   selectedCategory,
//   setSelectedCategory,
//   closeMobileMenu,
// }: {
//   mobileOpen: boolean;
//   mobilePanel: "main" | "courses" | "category";
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   selectedCategory: CourseCategoryId;
//   setSelectedCategory: (category: CourseCategoryId) => void;
//   closeMobileMenu: () => void;
// }) {
//   return (
//     <AnimatePresence>
//       {mobileOpen && (
//         <motion.div
//           {...menuMotion}
//           className="mt-3 max-h-[calc(100vh-108px)] overflow-y-auto rounded-[28px] border border-white/10 bg-[#06111F]/96 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl lg:hidden"
//         >
//           <div className="overflow-hidden rounded-[22px]">
//             <AnimatePresence mode="wait" initial={false}>
//               {mobilePanel === "main" && (
//                 <MobileMainPanel
//                   key="mobile-main"
//                   setMobilePanel={setMobilePanel}
//                   closeMobileMenu={closeMobileMenu}
//                 />
//               )}

//               {mobilePanel === "courses" && (
//                 <MobileCoursesPanel
//                   key="mobile-courses"
//                   setMobilePanel={setMobilePanel}
//                   setSelectedCategory={setSelectedCategory}
//                 />
//               )}

//               {mobilePanel === "category" && (
//                 <MobileCategoryPanel
//                   key="mobile-category"
//                   selectedCategory={selectedCategory}
//                   setMobilePanel={setMobilePanel}
//                   closeMobileMenu={closeMobileMenu}
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function MobileMainPanel({
//   setMobilePanel,
//   closeMobileMenu,
// }: {
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   closeMobileMenu: () => void;
// }) {
//   return (
//     <motion.div {...panelMotion}>
//       <div className="flex items-center gap-3 border-b border-white/10 pb-4">
//         <MapPin className="h-5 w-5 shrink-0 text-[#D8FF38]" strokeWidth={2.35} />
//         <p className="text-[13px] font-bold text-[#DDE7F5]">
//           Alpha-I & Omicron-III Branches, Greater Noida
//         </p>
//       </div>

//       <div className="mt-4 grid gap-2">
//         <MobileNavRow
//           icon={Home}
//           label="Home"
//           href="#home"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={BookOpen}
//           label="Courses"
//           onClick={() => setMobilePanel("courses")}
//           active
//         />

//         <MobileNavRow
//           icon={Trophy}
//           label="Results"
//           href="#results"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={UsersRound}
//           label="Faculty"
//           href="#faculty"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={Landmark}
//           label="Branches"
//           href="#branches"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={ClipboardList}
//           label="Blog"
//           href="/blog"
//           onClick={closeMobileMenu}
//         />

//         <MobileNavRow
//           icon={Mail}
//           label="Contact"
//           href="#contact"
//           onClick={closeMobileMenu}
//         />
//       </div>

//       <QuickActions closeMobileMenu={closeMobileMenu} />

//       <MobileTrustStrip />
//     </motion.div>
//   );
// }

// function MobileNavRow({
//   icon: Icon,
//   label,
//   href,
//   onClick,
//   active = false,
// }: {
//   icon: LucideIcon;
//   label: string;
//   href?: string;
//   onClick: () => void;
//   active?: boolean;
// }) {
//   const className = `group flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition duration-300 ${
//     active
//       ? "bg-[#B5FF3D]/10 text-[#D8FF38]"
//       : "bg-white/[0.025] text-white hover:bg-white/[0.05] hover:text-[#D8FF38]"
//   }`;

//   const content = (
//     <>
//       <Icon className="h-5 w-5 shrink-0" strokeWidth={2.25} />

//       <span className="flex-1 text-[16px] font-black">{label}</span>

//       <ArrowRight
//         className="h-4 w-4 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
//         strokeWidth={2.5}
//       />
//     </>
//   );

//   if (href) {
//     return (
//       <Link href={href} onClick={onClick} className={className}>
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button type="button" onClick={onClick} className={className}>
//       {content}
//     </button>
//   );
// }

// function QuickActions({ closeMobileMenu }: { closeMobileMenu: () => void }) {
//   return (
//     <div className="mt-5 border-t border-white/10 pt-5">
//       <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#D8FF38]">
//         Quick Actions
//       </p>

//       <div className="grid gap-3">
//         <Link
//           href="#contact"
//           onClick={closeMobileMenu}
//           className="group flex min-h-[56px] items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 text-[#07142F]"
//         >
//           <CalendarCheck className="h-5 w-5" strokeWidth={2.35} />
//           <span className="flex-1 text-[15px] font-black">
//             Book Free Counselling
//           </span>
//           <ArrowRight
//             className="h-5 w-5 transition group-hover:translate-x-1"
//             strokeWidth={2.55}
//           />
//         </Link>

//         <a
//           href="tel:08447009390"
//           onClick={closeMobileMenu}
//           className="flex min-h-[56px] items-center gap-3 rounded-2xl border border-[#229CEB]/25 bg-[#229CEB]/10 px-4 text-white"
//         >
//           <Phone className="h-5 w-5 text-[#229CEB]" strokeWidth={2.35} />
//           <span>
//             <span className="block text-[15px] font-black">
//               Call 084470 09390
//             </span>
//             <span className="text-[12px] font-semibold text-[#B7C4D5]">
//               Call Us
//             </span>
//           </span>
//         </a>

//         <a
//           href="https://wa.me/918447009390"
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={closeMobileMenu}
//           className="flex min-h-[56px] items-center gap-3 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/10 px-4 text-white"
//         >
//           <MessageCircle
//             className="h-5 w-5 text-[#25D366]"
//             strokeWidth={2.35}
//           />
//           <span>
//             <span className="block text-[15px] font-black">
//               Chat on WhatsApp
//             </span>
//             <span className="text-[12px] font-semibold text-[#B7C4D5]">
//               Instant reply
//             </span>
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// }

// function MobileTrustStrip() {
//   return (
//     <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
//       {trustItems.map((item) => {
//         const Icon = item.icon;

//         return (
//           <div
//             key={item.title}
//             className="rounded-2xl bg-white/[0.035] p-3 text-center"
//           >
//             <Icon
//               className="mx-auto h-5 w-5 text-[#D8FF38]"
//               strokeWidth={2.25}
//             />
//             <p className="mt-2 text-[12px] font-black text-white">
//               {item.title}
//             </p>
//             <p className="mt-1 text-[10.5px] font-semibold text-[#B7C4D5]">
//               {item.subtitle}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function MobileCoursesPanel({
//   setMobilePanel,
//   setSelectedCategory,
// }: {
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   setSelectedCategory: (category: CourseCategoryId) => void;
// }) {
//   return (
//     <motion.div {...panelMotion}>
//       <MobilePanelBack
//         label="Courses"
//         onBack={() => setMobilePanel("main")}
//       />

//       <div className="mt-4 grid overflow-hidden rounded-2xl border border-white/10">
//         {courseCategories.map((category, index) => {
//           const Icon = category.icon;

//           return (
//             <button
//               key={category.id}
//               type="button"
//               onClick={() => {
//                 setSelectedCategory(category.id);
//                 setMobilePanel("category");
//               }}
//               className={`flex min-h-[58px] items-center gap-3 bg-white/[0.025] px-4 py-3 text-left transition hover:bg-white/[0.055] ${
//                 index !== courseCategories.length - 1
//                   ? "border-b border-white/10"
//                   : ""
//               }`}
//             >
//               <Icon
//                 className="h-6 w-6 shrink-0 text-[#D8FF38]"
//                 strokeWidth={2.2}
//               />

//               <span className="flex-1 text-[17px] font-black text-white">
//                 {category.title}
//               </span>

//               <ArrowRight
//                 className="h-4 w-4 text-[#D8FF38]"
//                 strokeWidth={2.4}
//               />
//             </button>
//           );
//         })}
//       </div>

//       <div className="mt-5 overflow-hidden rounded-2xl border border-[#B5FF3D]/16 bg-[radial-gradient(circle_at_90%_20%,rgba(181,255,61,0.18),transparent_42%),linear-gradient(135deg,rgba(16,54,36,0.72),rgba(7,17,31,0.9))] p-5">
//         <h3 className="text-[22px] font-black leading-tight tracking-[-0.035em] text-white">
//           Not sure which course is right?
//         </h3>

//         <p className="mt-3 text-[14px] font-medium leading-6 text-[#DDE7F5]">
//           Get expert guidance and choose the perfect path.
//         </p>

//         <Link
//           href="#contact"
//           className="mt-4 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 py-3 text-[13px] font-black text-[#07142F]"
//         >
//           Book Free Counselling
//           <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// function MobileCategoryPanel({
//   selectedCategory,
//   setMobilePanel,
//   closeMobileMenu,
// }: {
//   selectedCategory: CourseCategoryId;
//   setMobilePanel: (panel: "main" | "courses" | "category") => void;
//   closeMobileMenu: () => void;
// }) {
//   const category =
//     courseCategories.find((item) => item.id === selectedCategory) ??
//     courseCategories[0];

//   const Icon = category.icon;

//   return (
//     <motion.div {...panelMotion}>
//       <MobilePanelBack
//         label={category.title}
//         onBack={() => setMobilePanel("courses")}
//       />

//       <div className="mt-4 flex items-center gap-3">
//         <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B5FF3D]/10 text-[#D8FF38]">
//           <Icon className="h-6 w-6" strokeWidth={2.2} />
//         </span>

//         <h3 className="text-[25px] font-black tracking-[-0.045em] text-[#D8FF38]">
//           {category.title}
//         </h3>
//       </div>

//       <div className="mt-4 grid overflow-hidden rounded-2xl border border-white/10">
//         {category.courses.map((course, index) => (
//           <Link
//             key={course.title}
//             href={course.href}
//             onClick={closeMobileMenu}
//             className={`group flex items-center gap-3 bg-white/[0.025] px-4 py-4 transition hover:bg-white/[0.055] ${
//               index !== category.courses.length - 1
//                 ? "border-b border-white/10"
//                 : ""
//             }`}
//           >
//             <span className="min-w-0 flex-1">
//               <span className="block text-[16px] font-black text-white">
//                 {course.title}
//               </span>
//               <span className="mt-1 block text-[13px] font-semibold text-[#B7C4D5]">
//                 {course.subtitle}
//               </span>
//             </span>

//             <ArrowRight
//               className="h-5 w-5 shrink-0 text-[#D8FF38] transition group-hover:translate-x-1"
//               strokeWidth={2.45}
//             />
//           </Link>
//         ))}
//       </div>

//       <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
//         <div className="flex items-center gap-3">
//           <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B5FF3D]/10 text-[#D8FF38]">
//             <UsersRound className="h-6 w-6" strokeWidth={2.2} />
//           </span>

//           <div>
//             <h3 className="text-[18px] font-black text-white">
//               Need Help Choosing?
//             </h3>
//             <p className="mt-1 text-[13px] font-semibold text-[#B7C4D5]">
//               Our academic experts are here to help you.
//             </p>
//           </div>
//         </div>

//         <Link
//           href="#contact"
//           onClick={closeMobileMenu}
//           className="mt-4 flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#D8FF38,#73C815)] px-4 text-[14px] font-black text-[#07142F]"
//         >
//           Talk to Counsellor
//           <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// function MobilePanelBack({
//   label,
//   onBack,
// }: {
//   label: string;
//   onBack: () => void;
// }) {
//   return (
//     <div>
//       <button
//         type="button"
//         onClick={onBack}
//         className="inline-flex items-center gap-2 text-[14px] font-black text-[#D8FF38]"
//       >
//         <ArrowRight className="h-4 w-4 rotate-180" strokeWidth={2.5} />
//         Back
//       </button>

//       <h2 className="mt-3 text-[28px] font-black tracking-[-0.045em] text-white">
//         {label}
//       </h2>
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   type Variants,
// } from "framer-motion";
// import {
//   ArrowRight,
//   BookOpen,
//   CalendarCheck,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   ClipboardList,
//   Home,
//   Landmark,
//   Mail,
//   MapPin,
//   Menu,
//   MessageCircle,
//   Phone,
//   ShieldCheck,
//   Stethoscope,
//   Target,
//   Trophy,
//   UsersRound,
//   X,
//   type LucideIcon,
// } from "lucide-react";
// import { useCallback, useEffect, useRef, useState } from "react";

// /* ----------------------------------- Types ---------------------------------- */
// type NavItemType = "link" | "courses" | "branches";
// type DesktopMenu = "courses" | "branches";
// type MobilePanel = "main" | "courses" | "category";
// type CourseCategoryId = "engineering" | "medical" | "foundation" | "school";

// type NavItem = { label: string; href: string; type: NavItemType };
// type CourseItem = { title: string; subtitle: string; href: string };
// type CourseCategory = {
//   id: CourseCategoryId;
//   title: string;
//   icon: LucideIcon;
//   courses: CourseItem[];
// };
// type Branch = {
//   id: string;
//   name: string;
//   subtitle: string;
//   rating: string;
//   reviews: string;
//   directionsUrl: string;
// };

// /* ----------------------------------- Data ----------------------------------- */
// const navItems: NavItem[] = [
//   { label: "Home", href: "#home", type: "link" },
//   { label: "Courses", href: "#courses", type: "courses" },
//   { label: "Results", href: "#results", type: "link" },
//   { label: "Faculty", href: "#faculty", type: "link" },
//   { label: "Branches", href: "#branches", type: "branches" },
//   { label: "Blog", href: "/blog", type: "link" },
//   { label: "Contact", href: "#contact", type: "link" },
// ];

// const courseCategories: CourseCategory[] = [
//   {
//     id: "engineering",
//     title: "Engineering",
//     icon: Target,
//     courses: [
//       { title: "IIT-JEE 11–12", subtitle: "Class 11–12 · Main + Advanced", href: "/courses/iit-jee" },
//       { title: "IIT-JEE Dropper", subtitle: "Repeaters Batch", href: "/courses/iit-jee-dropper" },
//       { title: "JEE Foundation", subtitle: "Class 8, 9, 10", href: "/courses/jee-foundation" },
//       { title: "JEE Crash Course", subtitle: "Short Term Program", href: "/courses/jee-crash-course" },
//     ],
//   },
//   {
//     id: "medical",
//     title: "Medical",
//     icon: Stethoscope,
//     courses: [
//       { title: "NEET-UG 11–12", subtitle: "Class 11–12 · Medical Entrance", href: "/courses/neet-ug" },
//       { title: "NEET-UG Dropper", subtitle: "Repeaters Batch", href: "/courses/neet-dropper" },
//       { title: "NEET Foundation", subtitle: "Class 8, 9, 10", href: "/courses/neet-foundation" },
//       { title: "NEET Crash Course", subtitle: "Short Term Program", href: "/courses/neet-crash-course" },
//     ],
//   },
//   {
//     id: "foundation",
//     title: "Foundation",
//     icon: BookOpen,
//     courses: [
//       { title: "Class 8", subtitle: "Foundation Program", href: "/courses/class-8" },
//       { title: "Class 9", subtitle: "Foundation Program", href: "/courses/class-9" },
//       { title: "Class 10", subtitle: "Foundation Program", href: "/courses/class-10" },
//     ],
//   },
//   {
//     id: "school",
//     title: "School",
//     icon: ClipboardList,
//     courses: [
//       { title: "Class 11–12 Boards", subtitle: "All Subjects", href: "/courses/class-11-12-boards" },
//       { title: "Class 9–10 Boards", subtitle: "All Subjects", href: "/courses/class-9-10-boards" },
//     ],
//   },
// ];

// const branches: Branch[] = [
//   {
//     id: "alpha",
//     name: "Alpha-I Branch",
//     subtitle: "Alpha Commercial Belt",
//     rating: "4.7",
//     reviews: "157",
//     directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
//   },
//   {
//     id: "omicron",
//     name: "Omicron-III Branch",
//     subtitle: "Near SBI Bank",
//     rating: "4.4",
//     reviews: "22",
//     directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
//   },
// ];

// const trustItems: { title: string; subtitle: string; icon: LucideIcon }[] = [
//   { title: "Small Batches", subtitle: "Personal Attention", icon: UsersRound },
//   { title: "Regular Testing", subtitle: "Performance Tracking", icon: CalendarCheck },
//   { title: "Doubt Support", subtitle: "Concept Clarity", icon: MessageCircle },
//   { title: "Parent Updates", subtitle: "Stay Informed", icon: ShieldCheck },
// ];

// /* ---------------------------------- Motion ---------------------------------- */
// const EXPO = [0.16, 1, 0.3, 1] as const;
// const MARK = "/kota-academy-navbar-mark.png";

// const menuMotion = {
//   initial: { opacity: 0, y: 8, scale: 0.99 },
//   animate: { opacity: 1, y: 0, scale: 1 },
//   exit: { opacity: 0, y: 6, scale: 0.99 },
//   transition: { duration: 0.22, ease: EXPO },
// };

// const megaStagger: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
// };

// const colVar: Variants = {
//   hidden: { opacity: 0, y: 8 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EXPO } },
// };

// const headerVar: Variants = {
//   hidden: { opacity: 0, y: -16 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO } },
// };

// // drill direction: 1 = forward (deeper), -1 = back
// const drill: Variants = {
//   enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
//   center: { opacity: 1, x: 0, transition: { duration: 0.28, ease: EXPO } },
//   exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -32 : 32, transition: { duration: 0.2, ease: EXPO } }),
// };

// /* ================================== Navbar ================================== */
// export default function KotaAcademyNavbar() {
//   const headerRef = useRef<HTMLElement | null>(null);
//   const closeTimer = useRef<number | null>(null);
//   const hamburgerRef = useRef<HTMLButtonElement | null>(null);
//   const mobileCloseRef = useRef<HTMLButtonElement | null>(null);

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeHash, setActiveHash] = useState("#home");
//   const [activeMenu, setActiveMenu] = useState<DesktopMenu | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobilePanel, setMobilePanel] = useState<MobilePanel>("main");
//   const [direction, setDirection] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState<CourseCategoryId>("engineering");

//   /* ----- desktop dropdown hover-intent ----- */
//   const openMenu = useCallback((type: DesktopMenu) => {
//     if (closeTimer.current) {
//       window.clearTimeout(closeTimer.current);
//       closeTimer.current = null;
//     }
//     setActiveMenu(type);
//   }, []);

//   const scheduleClose = useCallback(() => {
//     if (closeTimer.current) window.clearTimeout(closeTimer.current);
//     closeTimer.current = window.setTimeout(() => setActiveMenu(null), 180);
//   }, []);

//   const toggleMenu = useCallback((type: DesktopMenu) => {
//     if (closeTimer.current) {
//       window.clearTimeout(closeTimer.current);
//       closeTimer.current = null;
//     }
//     setActiveMenu((prev) => (prev === type ? null : type));
//   }, []);

//   const closeMobileMenu = useCallback(() => {
//     setMobileOpen(false);
//     setMobilePanel("main");
//     setDirection(1);
//     setSelectedCategory("engineering");
//     hamburgerRef.current?.focus();
//   }, []);

//   const goPanel = useCallback((panel: MobilePanel, dir: number) => {
//     setDirection(dir);
//     setMobilePanel(panel);
//   }, []);

//   /* ----- scroll state + scroll-spy ----- */
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 24);
//       if (window.scrollY < 60) setActiveHash("#home");
//     };
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const ids = navItems
//       .filter((i) => i.href.startsWith("#"))
//       .map((i) => i.href.slice(1));
//     const els = ids
//       .map((id) => document.getElementById(id))
//       .filter((el): el is HTMLElement => Boolean(el));
//     if (!els.length) return;

//     const obs = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
//         if (visible[0]) setActiveHash("#" + visible[0].target.id);
//       },
//       { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
//     );
//     els.forEach((el) => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   /* ----- body scroll lock + focus on open ----- */
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     if (mobileOpen) {
//       const t = window.setTimeout(() => mobileCloseRef.current?.focus(), 80);
//       return () => {
//         window.clearTimeout(t);
//         document.body.style.overflow = "";
//       };
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   /* ----- outside click + escape ----- */
//   useEffect(() => {
//     const handlePointerDown = (event: PointerEvent) => {
//       if (!headerRef.current?.contains(event.target as Node)) setActiveMenu(null);
//     };
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setActiveMenu(null);
//         if (mobileOpen) closeMobileMenu();
//       }
//     };
//     document.addEventListener("pointerdown", handlePointerDown);
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("pointerdown", handlePointerDown);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [mobileOpen, closeMobileMenu]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <motion.header
//         ref={headerRef}
//         initial="hidden"
//         animate="visible"
//         variants={headerVar}
//         className={`fixed inset-x-0 z-[90] px-3 transition-all duration-300 sm:px-4 ${
//           isScrolled ? "top-2" : "top-4"
//         }`}
//       >
//         <nav
//           aria-label="Primary navigation"
//           className={`relative mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 sm:gap-4 sm:px-4 lg:rounded-full lg:px-4 xl:px-5 ${
//             isScrolled
//               ? "min-h-[56px] border-white/10 bg-[#0B1B33]/[0.93] shadow-[0_18px_50px_rgba(3,8,20,0.5)] backdrop-blur-2xl lg:min-h-[58px]"
//               : "min-h-[64px] border-[#B5FF3D]/25 bg-[#0B1B33]/[0.72] shadow-[0_22px_60px_rgba(3,8,20,0.34)] backdrop-blur-xl lg:min-h-[68px]"
//           }`}
//         >
//           <NavbarGlow isScrolled={isScrolled} />

//           <LogoBlock isScrolled={isScrolled} />

//           <DesktopNav
//             activeMenu={activeMenu}
//             activeHash={activeHash}
//             openMenu={openMenu}
//             scheduleClose={scheduleClose}
//             toggleMenu={toggleMenu}
//           />

//           <DesktopActions />

//           <button
//             ref={hamburgerRef}
//             type="button"
//             onClick={() => {
//               setMobilePanel("main");
//               setDirection(1);
//               setMobileOpen(true);
//             }}
//             aria-label="Open menu"
//             aria-expanded={mobileOpen}
//             className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white transition duration-300 hover:border-[#B5FF3D]/45 lg:hidden"
//           >
//             <Menu className="h-[22px] w-[22px]" strokeWidth={2.3} />
//           </button>
//         </nav>
//       </motion.header>

//       <MobileDrawer
//         mobileOpen={mobileOpen}
//         mobilePanel={mobilePanel}
//         direction={direction}
//         activeHash={activeHash}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         goPanel={goPanel}
//         closeMobileMenu={closeMobileMenu}
//         closeRef={mobileCloseRef}
//       />
//     </MotionConfig>
//   );
// }

// /* --------------------------------- Glow ----------------------------------- */
// function NavbarGlow({ isScrolled }: { isScrolled: boolean }) {
//   return (
//     <>
//       <span
//         className={`pointer-events-none absolute left-1/2 top-0 h-[3px] w-16 -translate-x-1/2 rounded-b-full bg-[#B5FF3D] blur-[1px] transition-opacity duration-300 ${
//           isScrolled ? "opacity-0" : "opacity-90"
//         }`}
//       />
//       <span
//         className={`pointer-events-none absolute inset-x-12 -bottom-3 h-7 rounded-full bg-[#B5FF3D]/25 blur-2xl transition-opacity duration-300 ${
//           isScrolled ? "opacity-0" : "opacity-50"
//         }`}
//       />
//     </>
//   );
// }

// /* --------------------------------- Logo ----------------------------------- */
// function LogoBlock({ isScrolled }: { isScrolled: boolean }) {
//   return (
//     <Link
//       href="#home"
//       aria-label="Kota Academy homepage"
//       className="group relative z-10 flex min-w-0 shrink-0 items-center gap-2.5 lg:gap-3"
//     >
//       <span className="relative flex h-[38px] w-[38px] shrink-0 items-center justify-center overflow-hidden rounded-[11px] bg-black ring-1 ring-inset ring-[#B5FF3D]/35 transition duration-300 group-hover:ring-[#B5FF3D]/70 lg:h-[40px] lg:w-[40px]">
//         <Image
//           src={MARK}
//           alt="Kota Academy logo"
//           fill
//           sizes="40px"
//           className="object-contain p-[3px]"
//           priority
//         />
//       </span>

//       <span className="min-w-0">
//         <span className="block truncate text-[18px] font-extrabold leading-none tracking-[-0.03em] text-white lg:text-[20px]">
//           Kota <span className="text-[#B5FF3D]">Academy</span>
//         </span>

//         <span
//           className={`grid overflow-hidden transition-all duration-300 ${
//             isScrolled ? "mt-0 max-h-0 opacity-0" : "mt-1.5 max-h-4 opacity-100"
//           }`}
//         >
//           <span className="hidden truncate text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#AEB9CA] sm:block">
//             JEE · NEET · Foundation · Boards
//           </span>
//         </span>
//       </span>
//     </Link>
//   );
// }

// /* ------------------------------- Desktop nav ------------------------------- */
// function DesktopNav({
//   activeMenu,
//   activeHash,
//   openMenu,
//   scheduleClose,
//   toggleMenu,
// }: {
//   activeMenu: DesktopMenu | null;
//   activeHash: string;
//   openMenu: (type: DesktopMenu) => void;
//   scheduleClose: () => void;
//   toggleMenu: (type: DesktopMenu) => void;
// }) {
//   return (
//     <div className="relative hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
//       {navItems.map((item) => {
//         if (item.type === "courses") {
//           const isOpen = activeMenu === "courses";
//           return (
//             <div
//               key={item.label}
//               className="static"
//               onMouseEnter={() => openMenu("courses")}
//               onMouseLeave={scheduleClose}
//             >
//               <DropdownTrigger
//                 label={item.label}
//                 isOpen={isOpen}
//                 isActive={isOpen}
//                 onClick={() => toggleMenu("courses")}
//                 onFocus={() => openMenu("courses")}
//               />
//               <AnimatePresence>
//                 {isOpen && (
//                   <CoursesMegaMenu
//                     onEnter={() => openMenu("courses")}
//                     onLeave={scheduleClose}
//                     onClose={() => toggleMenu("courses")}
//                   />
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         }

//         if (item.type === "branches") {
//           const isOpen = activeMenu === "branches";
//           return (
//             <div
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => openMenu("branches")}
//               onMouseLeave={scheduleClose}
//             >
//               <DropdownTrigger
//                 label={item.label}
//                 isOpen={isOpen}
//                 isActive={isOpen || activeHash === item.href}
//                 onClick={() => toggleMenu("branches")}
//                 onFocus={() => openMenu("branches")}
//               />
//               <AnimatePresence>
//                 {isOpen && (
//                   <BranchesDropdown
//                     onEnter={() => openMenu("branches")}
//                     onLeave={scheduleClose}
//                     onClose={() => toggleMenu("branches")}
//                   />
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         }

//         const isActive = activeHash === item.href;
//         return (
//           <Link
//             key={item.label}
//             href={item.href}
//             className={`group relative flex h-9 items-center px-2.5 text-[14px] font-medium transition duration-300 xl:px-3 ${
//               isActive ? "text-[#B5FF3D]" : "text-white/90 hover:text-[#B5FF3D]"
//             }`}
//           >
//             <span>{item.label}</span>
//             <NavUnderline active={isActive} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// function DropdownTrigger({
//   label,
//   isOpen,
//   isActive,
//   onClick,
//   onFocus,
// }: {
//   label: string;
//   isOpen: boolean;
//   isActive: boolean;
//   onClick: () => void;
//   onFocus: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       onFocus={onFocus}
//       aria-expanded={isOpen}
//       aria-haspopup="true"
//       className={`group relative flex h-9 items-center gap-1 px-2.5 text-[14px] font-medium transition duration-300 xl:px-3 ${
//         isActive ? "text-[#B5FF3D]" : "text-white/90 hover:text-[#B5FF3D]"
//       }`}
//     >
//       <span>{label}</span>
//       <ChevronDown
//         className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//         strokeWidth={2.4}
//       />
//       <NavUnderline active={isActive} />
//     </button>
//   );
// }

// function NavUnderline({ active }: { active: boolean }) {
//   return (
//     <span
//       className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#B5FF3D] transition-all duration-300 ${
//         active ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
//       }`}
//     />
//   );
// }

// /* ------------------------------ Desktop actions ---------------------------- */
// function DesktopActions() {
//   return (
//     <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
//       <a
//         href="tel:+918447009390"
//         className="group hidden h-[44px] items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1 pl-1.5 pr-4 text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#229CEB]/50 hover:bg-white/[0.07] xl:flex"
//       >
//         <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#229CEB]/15 text-[#229CEB]">
//           <Phone className="h-4 w-4" strokeWidth={2.4} />
//         </span>
//         <span className="leading-tight">
//           <span className="block whitespace-nowrap text-[13.5px] font-bold">084470 09390</span>
//           <span className="block text-[10.5px] font-medium text-[#AEB9CA]">Call Us</span>
//         </span>
//       </a>

//       <Link
//         href="#contact"
//         className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55_0%,#9BE82A_50%,#5FB016_100%)] px-5 text-[13.5px] font-extrabold text-[#0A2410] shadow-[0_14px_30px_rgba(95,176,22,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(95,176,22,0.38)]"
//       >
//         <CalendarCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={2.3} />
//         <span className="whitespace-nowrap">Book Free Counselling</span>
//         <ArrowRight
//           className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
//           strokeWidth={2.5}
//         />
//       </Link>
//     </div>
//   );
// }

// /* ------------------------------ Courses mega ------------------------------- */
// function CoursesMegaMenu({
//   onEnter,
//   onLeave,
//   onClose,
// }: {
//   onEnter: () => void;
//   onLeave: () => void;
//   onClose: () => void;
// }) {
//   return (
//     <motion.div
//       {...menuMotion}
//       onMouseEnter={onEnter}
//       onMouseLeave={onLeave}
//       className="absolute left-1/2 top-full z-20 w-[min(1040px,calc(100vw-40px))] -translate-x-1/2 pt-3"
//     >
//       <motion.div
//         variants={megaStagger}
//         initial="hidden"
//         animate="visible"
//         className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0B1B33]/[0.98] p-4 shadow-[0_30px_80px_rgba(3,8,20,0.55)] backdrop-blur-2xl"
//       >
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(181,255,61,0.12),transparent_38%)]" />
//         <div className="relative z-10 grid grid-cols-[repeat(4,minmax(0,1fr))_232px] gap-3">
//           {courseCategories.map((category, index) => (
//             <MegaCourseColumn
//               key={category.id}
//               category={category}
//               divider={index !== courseCategories.length - 1}
//               onClose={onClose}
//             />
//           ))}
//           <MegaGuidanceCard onClose={onClose} />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// function MegaCourseColumn({
//   category,
//   divider,
//   onClose,
// }: {
//   category: CourseCategory;
//   divider: boolean;
//   onClose: () => void;
// }) {
//   const Icon = category.icon;
//   return (
//     <motion.div variants={colVar} className={`relative ${divider ? "border-r border-white/8 pr-3" : ""}`}>
//       <div className="mb-3 flex items-center gap-2.5">
//         <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B5FF3D]/10 text-[#B5FF3D]">
//           <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
//         </span>
//         <h3 className="truncate text-[15px] font-bold tracking-[-0.01em] text-white">{category.title}</h3>
//       </div>

//       <div className="grid gap-0.5">
//         {category.courses.map((course) => (
//           <Link
//             key={course.title}
//             href={course.href}
//             onClick={onClose}
//             className="group rounded-xl px-2.5 py-2 transition duration-200 hover:bg-white/[0.05]"
//           >
//             <div className="flex items-center justify-between gap-2">
//               <span className="truncate text-[13.5px] font-semibold text-white transition group-hover:text-[#B5FF3D]">
//                 {course.title}
//               </span>
//               <ChevronRight
//                 className="h-3.5 w-3.5 shrink-0 text-[#B5FF3D] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
//                 strokeWidth={2.4}
//               />
//             </div>
//             <p className="truncate text-[11.5px] font-medium text-[#AEB9CA]">{course.subtitle}</p>
//           </Link>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function MegaGuidanceCard({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.div
//       variants={colVar}
//       className="relative overflow-hidden rounded-[20px] border border-[#B5FF3D]/18 bg-[radial-gradient(circle_at_85%_15%,rgba(181,255,61,0.16),transparent_45%),linear-gradient(135deg,rgba(16,54,36,0.7),rgba(11,27,51,0.92))] p-4"
//     >
//       <h3 className="max-w-[190px] text-[18px] font-extrabold leading-tight tracking-[-0.02em] text-white">
//         Not sure which course is right?
//       </h3>
//       <p className="mt-2 text-[12.5px] font-medium leading-5 text-[#DDE7F5]">
//         Get expert guidance and choose the perfect path.
//       </p>
//       <Link
//         href="#contact"
//         onClick={onClose}
//         className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-3.5 py-2 text-[12.5px] font-extrabold text-[#0A2410]"
//       >
//         Book Free Counselling
//         <ArrowRight className="h-[14px] w-[14px] transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
//       </Link>
//     </motion.div>
//   );
// }

// /* ------------------------------ Branches menu ------------------------------ */
// function BranchesDropdown({
//   onEnter,
//   onLeave,
//   onClose,
// }: {
//   onEnter: () => void;
//   onLeave: () => void;
//   onClose: () => void;
// }) {
//   return (
//     <motion.div
//       {...menuMotion}
//       onMouseEnter={onEnter}
//       onMouseLeave={onLeave}
//       className="absolute right-0 top-full z-20 w-[340px] pt-3"
//     >
//       <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1B33]/[0.98] p-3 shadow-[0_26px_70px_rgba(3,8,20,0.5)] backdrop-blur-2xl">
//         <div className="grid gap-2.5">
//           {branches.map((branch) => (
//             <a
//               key={branch.id}
//               href={branch.directionsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={onClose}
//               className="group rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 transition duration-300 hover:border-[#B5FF3D]/30 hover:bg-white/[0.06]"
//             >
//               <div className="flex items-start gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B5FF3D]/12 text-[#B5FF3D]">
//                   <Landmark className="h-[18px] w-[18px]" strokeWidth={2.2} />
//                 </span>
//                 <div className="min-w-0 flex-1">
//                   <div className="flex items-center justify-between gap-2">
//                     <h3 className="text-[14.5px] font-bold text-white">{branch.name}</h3>
//                     <span className="shrink-0 rounded-full bg-[#B5FF3D]/12 px-2 py-0.5 text-[12px] font-bold text-[#B5FF3D]">
//                       {branch.rating}★
//                     </span>
//                   </div>
//                   <p className="mt-0.5 truncate text-[12px] font-medium text-[#AEB9CA]">
//                     {branch.subtitle} · {branch.reviews} reviews
//                   </p>
//                   <span className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#4285F4]">
//                     Get Directions
//                     <MapPin className="h-[14px] w-[14px]" strokeWidth={2.4} />
//                   </span>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ------------------------------ Mobile drawer ------------------------------ */
// function MobileDrawer({
//   mobileOpen,
//   mobilePanel,
//   direction,
//   activeHash,
//   selectedCategory,
//   setSelectedCategory,
//   goPanel,
//   closeMobileMenu,
//   closeRef,
// }: {
//   mobileOpen: boolean;
//   mobilePanel: MobilePanel;
//   direction: number;
//   activeHash: string;
//   selectedCategory: CourseCategoryId;
//   setSelectedCategory: (id: CourseCategoryId) => void;
//   goPanel: (panel: MobilePanel, dir: number) => void;
//   closeMobileMenu: () => void;
//   closeRef: React.RefObject<HTMLButtonElement | null>;
// }) {
//   return (
//     <AnimatePresence>
//       {mobileOpen && (
//         <>
//           <motion.div
//             key="scrim"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: EXPO }}
//             onClick={closeMobileMenu}
//             aria-hidden="true"
//             className="fixed inset-0 z-[95] bg-[#040A14]/75 backdrop-blur-sm lg:hidden"
//           />

//           <motion.div
//             key="sheet"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Menu"
//             initial={{ opacity: 0, y: -14 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -14 }}
//             transition={{ duration: 0.34, ease: EXPO }}
//             className="fixed inset-x-0 top-0 z-[96] flex h-[100dvh] flex-col bg-[#0B1B33] lg:hidden"
//           >
//             <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
//               <div className="flex items-center gap-2.5">
//                 <span className="relative h-[36px] w-[36px] overflow-hidden rounded-[10px] bg-black ring-1 ring-inset ring-[#B5FF3D]/35">
//                   <Image src={MARK} alt="Kota Academy logo" fill sizes="36px" className="object-contain p-[3px]" />
//                 </span>
//                 <span className="text-[17px] font-extrabold leading-none tracking-[-0.03em] text-white">
//                   Kota <span className="text-[#B5FF3D]">Academy</span>
//                 </span>
//               </div>
//               <button
//                 ref={closeRef}
//                 type="button"
//                 onClick={closeMobileMenu}
//                 aria-label="Close menu"
//                 className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white transition hover:border-[#B5FF3D]/45"
//               >
//                 <X className="h-5 w-5" strokeWidth={2.3} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
//               <AnimatePresence mode="wait" custom={direction} initial={false}>
//                 {mobilePanel === "main" && (
//                   <motion.div
//                     key="main"
//                     custom={direction}
//                     variants={drill}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                   >
//                     <MobileMainPanel
//                       activeHash={activeHash}
//                       goPanel={goPanel}
//                       closeMobileMenu={closeMobileMenu}
//                     />
//                   </motion.div>
//                 )}

//                 {mobilePanel === "courses" && (
//                   <motion.div
//                     key="courses"
//                     custom={direction}
//                     variants={drill}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                   >
//                     <MobileCoursesPanel
//                       goPanel={goPanel}
//                       setSelectedCategory={setSelectedCategory}
//                     />
//                   </motion.div>
//                 )}

//                 {mobilePanel === "category" && (
//                   <motion.div
//                     key="category"
//                     custom={direction}
//                     variants={drill}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                   >
//                     <MobileCategoryPanel
//                       selectedCategory={selectedCategory}
//                       goPanel={goPanel}
//                       closeMobileMenu={closeMobileMenu}
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// /* ---- mobile: main ---- */
// function MobileMainPanel({
//   activeHash,
//   goPanel,
//   closeMobileMenu,
// }: {
//   activeHash: string;
//   goPanel: (panel: MobilePanel, dir: number) => void;
//   closeMobileMenu: () => void;
// }) {
//   return (
//     <div>
//       <div className="mb-4 flex items-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-3">
//         <MapPin className="h-[18px] w-[18px] shrink-0 text-[#B5FF3D]" strokeWidth={2.3} />
//         <p className="text-[12.5px] font-medium text-[#DDE7F5]">
//           Alpha-I &amp; Omicron-III Branches · Greater Noida
//         </p>
//       </div>

//       <div className="grid gap-1.5">
//         <MobileNavRow icon={Home} label="Home" href="#home" onClick={closeMobileMenu} active={activeHash === "#home"} />
//         <MobileNavRow icon={BookOpen} label="Courses" hasChild onClick={() => goPanel("courses", 1)} />
//         <MobileNavRow icon={Trophy} label="Results" href="#results" onClick={closeMobileMenu} active={activeHash === "#results"} />
//         <MobileNavRow icon={UsersRound} label="Faculty" href="#faculty" onClick={closeMobileMenu} active={activeHash === "#faculty"} />
//         <MobileNavRow icon={Landmark} label="Branches" href="#branches" onClick={closeMobileMenu} active={activeHash === "#branches"} />
//         <MobileNavRow icon={ClipboardList} label="Blog" href="/blog" onClick={closeMobileMenu} />
//         <MobileNavRow icon={Mail} label="Contact" href="#contact" onClick={closeMobileMenu} active={activeHash === "#contact"} />
//       </div>

//       <div className="mt-5 border-t border-white/8 pt-5">
//         <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B5FF3D]">Quick Actions</p>
//         <div className="grid gap-2.5">
//           <Link
//             href="#contact"
//             onClick={closeMobileMenu}
//             className="group flex min-h-[52px] items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 text-[#0A2410]"
//           >
//             <CalendarCheck className="h-[19px] w-[19px]" strokeWidth={2.3} />
//             <span className="flex-1 text-[14.5px] font-extrabold">Book Free Counselling</span>
//             <ArrowRight className="h-[18px] w-[18px] transition group-hover:translate-x-0.5" strokeWidth={2.5} />
//           </Link>

//           <a
//             href="tel:+918447009390"
//             onClick={closeMobileMenu}
//             className="flex min-h-[52px] items-center gap-3 rounded-2xl border border-[#229CEB]/25 bg-[#229CEB]/10 px-4 text-white"
//           >
//             <Phone className="h-[19px] w-[19px] text-[#229CEB]" strokeWidth={2.3} />
//             <span className="leading-tight">
//               <span className="block text-[14.5px] font-bold">Call 084470 09390</span>
//               <span className="text-[11.5px] font-medium text-[#AEB9CA]">Call Us</span>
//             </span>
//           </a>

//           <a
//             href="https://wa.me/918447009390"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={closeMobileMenu}
//             className="flex min-h-[52px] items-center gap-3 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/10 px-4 text-white"
//           >
//             <MessageCircle className="h-[19px] w-[19px] text-[#25D366]" strokeWidth={2.3} />
//             <span className="leading-tight">
//               <span className="block text-[14.5px] font-bold">Chat on WhatsApp</span>
//               <span className="text-[11.5px] font-medium text-[#AEB9CA]">Instant reply</span>
//             </span>
//           </a>
//         </div>
//       </div>

//       <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/8 pt-5">
//         {trustItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <div key={item.title} className="rounded-2xl bg-white/[0.03] p-3 text-center">
//               <Icon className="mx-auto h-[18px] w-[18px] text-[#B5FF3D]" strokeWidth={2.2} />
//               <p className="mt-2 text-[12px] font-bold text-white">{item.title}</p>
//               <p className="mt-0.5 text-[10.5px] font-medium text-[#AEB9CA]">{item.subtitle}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function MobileNavRow({
//   icon: Icon,
//   label,
//   href,
//   onClick,
//   hasChild = false,
//   active = false,
// }: {
//   icon: LucideIcon;
//   label: string;
//   href?: string;
//   onClick: () => void;
//   hasChild?: boolean;
//   active?: boolean;
// }) {
//   const className = `group flex min-h-[50px] w-full items-center gap-3 rounded-2xl px-3.5 text-left transition duration-200 ${
//     active
//       ? "bg-[#B5FF3D]/12 text-[#B5FF3D]"
//       : "bg-white/[0.025] text-white hover:bg-white/[0.05] hover:text-[#B5FF3D]"
//   }`;
//   const content = (
//     <>
//       <Icon className="h-[19px] w-[19px] shrink-0" strokeWidth={2.2} />
//       <span className="flex-1 text-[15px] font-semibold">{label}</span>
//       <ChevronRight
//         className={`h-[18px] w-[18px] shrink-0 transition group-hover:translate-x-0.5 ${
//           hasChild ? "opacity-70" : "opacity-45 group-hover:opacity-90"
//         }`}
//         strokeWidth={2.3}
//       />
//     </>
//   );
//   if (href) {
//     return (
//       <Link href={href} onClick={onClick} className={className}>
//         {content}
//       </Link>
//     );
//   }
//   return (
//     <button type="button" onClick={onClick} className={className}>
//       {content}
//     </button>
//   );
// }

// /* ---- mobile: courses ---- */
// function MobileCoursesPanel({
//   goPanel,
//   setSelectedCategory,
// }: {
//   goPanel: (panel: MobilePanel, dir: number) => void;
//   setSelectedCategory: (id: CourseCategoryId) => void;
// }) {
//   return (
//     <div>
//       <MobilePanelBack label="Courses" onBack={() => goPanel("main", -1)} />

//       <div className="grid overflow-hidden rounded-2xl border border-white/8">
//         {courseCategories.map((category, index) => {
//           const Icon = category.icon;
//           return (
//             <button
//               key={category.id}
//               type="button"
//               onClick={() => {
//                 setSelectedCategory(category.id);
//                 goPanel("category", 1);
//               }}
//               className={`flex min-h-[54px] items-center gap-3 bg-white/[0.025] px-3.5 text-left transition hover:bg-white/[0.05] ${
//                 index !== courseCategories.length - 1 ? "border-b border-white/8" : ""
//               }`}
//             >
//               <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B5FF3D]/10 text-[#B5FF3D]">
//                 <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
//               </span>
//               <span className="flex-1 text-[15.5px] font-bold text-white">{category.title}</span>
//               <ChevronRight className="h-[18px] w-[18px] text-[#B5FF3D]" strokeWidth={2.3} />
//             </button>
//           );
//         })}
//       </div>

//       <div className="mt-5 overflow-hidden rounded-[20px] border border-[#B5FF3D]/16 bg-[radial-gradient(circle_at_88%_18%,rgba(181,255,61,0.16),transparent_45%),linear-gradient(135deg,rgba(16,54,36,0.7),rgba(11,27,51,0.9))] p-5">
//         <h3 className="text-[18px] font-extrabold leading-tight tracking-[-0.02em] text-white">
//           Not sure which course is right?
//         </h3>
//         <p className="mt-2 text-[13px] font-medium leading-5 text-[#DDE7F5]">
//           Get expert guidance and choose the perfect path.
//         </p>
//         <Link
//           href="#contact"
//           className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 py-2.5 text-[13px] font-extrabold text-[#0A2410]"
//         >
//           Book Free Counselling
//           <ArrowRight className="h-[15px] w-[15px] transition group-hover:translate-x-0.5" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// /* ---- mobile: category ---- */
// function MobileCategoryPanel({
//   selectedCategory,
//   goPanel,
//   closeMobileMenu,
// }: {
//   selectedCategory: CourseCategoryId;
//   goPanel: (panel: MobilePanel, dir: number) => void;
//   closeMobileMenu: () => void;
// }) {
//   const category =
//     courseCategories.find((item) => item.id === selectedCategory) ?? courseCategories[0];
//   const Icon = category.icon;

//   return (
//     <div>
//       <MobilePanelBack label={category.title} onBack={() => goPanel("courses", -1)} />

//       <div className="mb-4 flex items-center gap-2.5">
//         <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B5FF3D]/10 text-[#B5FF3D]">
//           <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
//         </span>
//         <h3 className="text-[16px] font-bold text-[#B5FF3D]">{category.title}</h3>
//       </div>

//       <div className="grid overflow-hidden rounded-2xl border border-white/8">
//         {category.courses.map((course, index) => (
//           <Link
//             key={course.title}
//             href={course.href}
//             onClick={closeMobileMenu}
//             className={`group flex items-center gap-3 bg-white/[0.025] px-3.5 py-3.5 transition hover:bg-white/[0.05] ${
//               index !== category.courses.length - 1 ? "border-b border-white/8" : ""
//             }`}
//           >
//             <span className="min-w-0 flex-1">
//               <span className="block text-[15px] font-bold text-white">{course.title}</span>
//               <span className="mt-0.5 block text-[12.5px] font-medium text-[#AEB9CA]">{course.subtitle}</span>
//             </span>
//             <ChevronRight
//               className="h-[18px] w-[18px] shrink-0 text-[#B5FF3D] transition group-hover:translate-x-0.5"
//               strokeWidth={2.4}
//             />
//           </Link>
//         ))}
//       </div>

//       <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
//         <div className="flex items-center gap-3">
//           <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/10 text-[#B5FF3D]">
//             <UsersRound className="h-[20px] w-[20px]" strokeWidth={2.2} />
//           </span>
//           <div>
//             <h3 className="text-[15px] font-bold text-white">Need help choosing?</h3>
//             <p className="mt-0.5 text-[12.5px] font-medium text-[#AEB9CA]">
//               Our academic experts are here to help.
//             </p>
//           </div>
//         </div>
//         <Link
//           href="#contact"
//           onClick={closeMobileMenu}
//           className="group mt-4 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 text-[13.5px] font-extrabold text-[#0A2410]"
//         >
//           Talk to a Counsellor
//           <ArrowRight className="h-[15px] w-[15px] transition group-hover:translate-x-0.5" strokeWidth={2.5} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// function MobilePanelBack({ label, onBack }: { label: string; onBack: () => void }) {
//   return (
//     <div className="mb-4">
//       <button
//         type="button"
//         onClick={onBack}
//         className="inline-flex items-center gap-1 text-[13px] font-bold text-[#B5FF3D]"
//       >
//         <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
//         Back
//       </button>
//       <h2 className="mt-2 text-[22px] font-extrabold tracking-[-0.03em] text-white">{label}</h2>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Target,
  Trophy,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/* ----------------------------------- Types ---------------------------------- */
type NavItemType = "link" | "courses" | "branches";
type DesktopMenu = "courses" | "branches";
type MobilePanel = "main" | "courses" | "category";
type CourseCategoryId = "engineering" | "medical" | "foundation" | "school";

type NavItem = { label: string; href: string; type: NavItemType };
type CourseItem = { title: string; subtitle: string; href: string };
type CourseCategory = {
  id: CourseCategoryId;
  title: string;
  icon: LucideIcon;
  courses: CourseItem[];
};
type Branch = {
  id: string;
  name: string;
  subtitle: string;
  rating: string;
  reviews: string;
  directionsUrl: string;
};

/* ----------------------------------- Data ----------------------------------- */
const navItems: NavItem[] = [
  { label: "Home", href: "#home", type: "link" },
  { label: "Courses", href: "#courses", type: "courses" },
  { label: "Results", href: "#results", type: "link" },
  { label: "Faculty", href: "#faculty", type: "link" },
  { label: "Branches", href: "#branches", type: "branches" },
  { label: "Blog", href: "/blog", type: "link" },
  { label: "Contact", href: "#contact", type: "link" },
];

const courseCategories: CourseCategory[] = [
  {
    id: "engineering",
    title: "Engineering",
    icon: Target,
    courses: [
      { title: "IIT-JEE 11–12", subtitle: "Class 11–12 · Main + Advanced", href: "/courses/iit-jee" },
      { title: "IIT-JEE Dropper", subtitle: "Repeaters Batch", href: "/courses/iit-jee-dropper" },
      { title: "JEE Foundation", subtitle: "Class 8, 9, 10", href: "/courses/jee-foundation" },
      { title: "JEE Crash Course", subtitle: "Short Term Program", href: "/courses/jee-crash-course" },
    ],
  },
  {
    id: "medical",
    title: "Medical",
    icon: Stethoscope,
    courses: [
      { title: "NEET-UG 11–12", subtitle: "Class 11–12 · Medical Entrance", href: "/courses/neet-ug" },
      { title: "NEET-UG Dropper", subtitle: "Repeaters Batch", href: "/courses/neet-dropper" },
      { title: "NEET Foundation", subtitle: "Class 8, 9, 10", href: "/courses/neet-foundation" },
      { title: "NEET Crash Course", subtitle: "Short Term Program", href: "/courses/neet-crash-course" },
    ],
  },
  {
    id: "foundation",
    title: "Foundation",
    icon: BookOpen,
    courses: [
      { title: "Class 8", subtitle: "Foundation Program", href: "/courses/class-8" },
      { title: "Class 9", subtitle: "Foundation Program", href: "/courses/class-9" },
      { title: "Class 10", subtitle: "Foundation Program", href: "/courses/class-10" },
    ],
  },
  {
    id: "school",
    title: "School",
    icon: ClipboardList,
    courses: [
      { title: "Class 11–12 Boards", subtitle: "All Subjects", href: "/courses/class-11-12-boards" },
      { title: "Class 9–10 Boards", subtitle: "All Subjects", href: "/courses/class-9-10-boards" },
    ],
  },
];

const branches: Branch[] = [
  {
    id: "alpha",
    name: "Alpha-I Branch",
    subtitle: "Alpha Commercial Belt",
    rating: "4.7",
    reviews: "157",
    directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
  },
  {
    id: "omicron",
    name: "Omicron-III Branch",
    subtitle: "Near SBI Bank",
    rating: "4.4",
    reviews: "22",
    directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
  },
];

const trustItems: { title: string; subtitle: string; icon: LucideIcon }[] = [
  { title: "Small Batches", subtitle: "Personal Attention", icon: UsersRound },
  { title: "Regular Testing", subtitle: "Performance Tracking", icon: CalendarCheck },
  { title: "Doubt Support", subtitle: "Concept Clarity", icon: MessageCircle },
  { title: "Parent Updates", subtitle: "Stay Informed", icon: ShieldCheck },
];

/* ---------------------------------- Motion ---------------------------------- */
const EXPO = [0.16, 1, 0.3, 1] as const;
const MARK = "/kota-academy-navbar-mark.png";

const menuMotion = {
  initial: { opacity: 0, y: 8, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 6, scale: 0.99 },
  transition: { duration: 0.22, ease: EXPO },
};

const megaStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};

const colVar: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EXPO } },
};

const headerVar: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO } },
};

// drill direction: 1 = forward (deeper), -1 = back
const drill: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.28, ease: EXPO } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -32 : 32, transition: { duration: 0.2, ease: EXPO } }),
};

/* ================================== Navbar ================================== */
export default function KotaAcademyNavbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileCloseRef = useRef<HTMLButtonElement | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [activeMenu, setActiveMenu] = useState<DesktopMenu | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>("main");
  const [direction, setDirection] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<CourseCategoryId>("engineering");

  /* ----- desktop dropdown hover-intent ----- */
  const openMenu = useCallback((type: DesktopMenu) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveMenu(type);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 180);
  }, []);

  const toggleMenu = useCallback((type: DesktopMenu) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveMenu((prev) => (prev === type ? null : type));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobilePanel("main");
    setDirection(1);
    setSelectedCategory("engineering");
    hamburgerRef.current?.focus();
  }, []);

  const goPanel = useCallback((panel: MobilePanel, dir: number) => {
    setDirection(dir);
    setMobilePanel(panel);
  }, []);

  /* ----- scroll state + scroll-spy ----- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      if (window.scrollY < 60) setActiveHash("#home");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navItems
      .filter((i) => i.href.startsWith("#"))
      .map((i) => i.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveHash("#" + visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ----- body scroll lock + focus on open ----- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      const t = window.setTimeout(() => mobileCloseRef.current?.focus(), 80);
      return () => {
        window.clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ----- outside click + escape ----- */
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setActiveMenu(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        if (mobileOpen) closeMobileMenu();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, closeMobileMenu]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-[80] h-24 backdrop-blur-md transition-opacity duration-300 [mask-image:linear-gradient(to_bottom,black,black_42%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,black_42%,transparent)] ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <motion.header
        ref={headerRef}
        initial="hidden"
        animate="visible"
        variants={headerVar}
        className={`fixed inset-x-0 z-[90] px-3 transition-all duration-300 sm:px-4 ${
          isScrolled ? "top-2" : "top-4"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className={`relative mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 sm:gap-4 sm:px-4 lg:rounded-full lg:px-4 xl:px-5 ${
            isScrolled
              ? "min-h-[56px] border-white/10 bg-[#0B1B33]/[0.93] shadow-[0_18px_50px_rgba(3,8,20,0.5)] backdrop-blur-2xl lg:min-h-[58px]"
              : "min-h-[64px] border-[#B5FF3D]/25 bg-[#0B1B33]/[0.72] shadow-[0_22px_60px_rgba(3,8,20,0.34)] backdrop-blur-xl lg:min-h-[68px]"
          }`}
        >
          <NavbarGlow isScrolled={isScrolled} />

          <LogoBlock isScrolled={isScrolled} />

          <DesktopNav
            activeMenu={activeMenu}
            activeHash={activeHash}
            openMenu={openMenu}
            scheduleClose={scheduleClose}
            toggleMenu={toggleMenu}
          />

          <DesktopActions />

          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => {
              setMobilePanel("main");
              setDirection(1);
              setMobileOpen(true);
            }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white transition duration-300 hover:border-[#B5FF3D]/45 lg:hidden"
          >
            <Menu className="h-[22px] w-[22px]" strokeWidth={2.3} />
          </button>
        </nav>
      </motion.header>

      <MobileDrawer
        mobileOpen={mobileOpen}
        mobilePanel={mobilePanel}
        direction={direction}
        activeHash={activeHash}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        goPanel={goPanel}
        closeMobileMenu={closeMobileMenu}
        closeRef={mobileCloseRef}
      />
    </MotionConfig>
  );
}

/* --------------------------------- Glow ----------------------------------- */
function NavbarGlow({ isScrolled }: { isScrolled: boolean }) {
  return (
    <>
      <span
        className={`pointer-events-none absolute left-1/2 top-0 h-[3px] w-16 -translate-x-1/2 rounded-b-full bg-[#B5FF3D] blur-[1px] transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-90"
        }`}
      />
      <span
        className={`pointer-events-none absolute inset-x-12 -bottom-3 h-7 rounded-full bg-[#B5FF3D]/25 blur-2xl transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-50"
        }`}
      />
    </>
  );
}

/* --------------------------------- Logo ----------------------------------- */
function LogoBlock({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link
      href="#home"
      aria-label="Kota Academy homepage"
      className="group relative z-10 flex min-w-0 shrink-0 items-center gap-2.5 lg:gap-3"
    >
      <span className="relative flex h-[38px] w-[38px] shrink-0 items-center justify-center overflow-hidden rounded-[11px] bg-black ring-1 ring-inset ring-[#B5FF3D]/35 transition duration-300 group-hover:ring-[#B5FF3D]/70 lg:h-[40px] lg:w-[40px]">
        <Image
          src={MARK}
          alt="Kota Academy logo"
          fill
          sizes="40px"
          className="object-contain p-[3px]"
          priority
        />
      </span>

      <span className="min-w-0">
        <span className="block truncate text-[18px] font-extrabold leading-none tracking-[-0.03em] text-white lg:text-[20px]">
          Kota <span className="text-[#B5FF3D]">Academy</span>
        </span>

        <span
          className={`grid overflow-hidden transition-all duration-300 ${
            isScrolled ? "mt-0 max-h-0 opacity-0" : "mt-1.5 max-h-4 opacity-100"
          }`}
        >
          <span className="hidden truncate text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#AEB9CA] sm:block">
            JEE · NEET · Foundation · Boards
          </span>
        </span>
      </span>
    </Link>
  );
}

/* ------------------------------- Desktop nav ------------------------------- */
function DesktopNav({
  activeMenu,
  activeHash,
  openMenu,
  scheduleClose,
  toggleMenu,
}: {
  activeMenu: DesktopMenu | null;
  activeHash: string;
  openMenu: (type: DesktopMenu) => void;
  scheduleClose: () => void;
  toggleMenu: (type: DesktopMenu) => void;
}) {
  const coursesTriggerRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="relative hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
      {navItems.map((item) => {
        if (item.type === "courses") {
          const isOpen = activeMenu === "courses";
          return (
            <div
              key={item.label}
              className="static"
              onMouseEnter={() => openMenu("courses")}
              onMouseLeave={scheduleClose}
            >
              <DropdownTrigger
                label={item.label}
                isOpen={isOpen}
                isActive={isOpen}
                onClick={() => toggleMenu("courses")}
                onFocus={() => openMenu("courses")}
                buttonRef={coursesTriggerRef}
              />
              <AnimatePresence>
                {isOpen && (
                  <CoursesMegaMenu
                    triggerRef={coursesTriggerRef}
                    onEnter={() => openMenu("courses")}
                    onLeave={scheduleClose}
                    onClose={() => toggleMenu("courses")}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        }

        if (item.type === "branches") {
          const isOpen = activeMenu === "branches";
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => openMenu("branches")}
              onMouseLeave={scheduleClose}
            >
              <DropdownTrigger
                label={item.label}
                isOpen={isOpen}
                isActive={isOpen || activeHash === item.href}
                onClick={() => toggleMenu("branches")}
                onFocus={() => openMenu("branches")}
              />
              <AnimatePresence>
                {isOpen && (
                  <BranchesDropdown
                    onEnter={() => openMenu("branches")}
                    onLeave={scheduleClose}
                    onClose={() => toggleMenu("branches")}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        }

        const isActive = activeHash === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`group relative flex h-9 items-center px-2.5 text-[14px] font-medium transition duration-300 xl:px-3 ${
              isActive ? "text-[#B5FF3D]" : "text-white/90 hover:text-[#B5FF3D]"
            }`}
          >
            <span>{item.label}</span>
            <NavUnderline active={isActive} />
          </Link>
        );
      })}
    </div>
  );
}

function DropdownTrigger({
  label,
  isOpen,
  isActive,
  onClick,
  onFocus,
  buttonRef,
}: {
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
  onFocus: () => void;
  buttonRef?: RefObject<HTMLButtonElement | null>;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      aria-expanded={isOpen}
      aria-haspopup="true"
      className={`group relative flex h-9 items-center gap-1 px-2.5 text-[14px] font-medium transition duration-300 xl:px-3 ${
        isActive ? "text-[#B5FF3D]" : "text-white/90 hover:text-[#B5FF3D]"
      }`}
    >
      <span>{label}</span>
      <ChevronDown
        className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        strokeWidth={2.4}
      />
      <NavUnderline active={isActive} />
    </button>
  );
}

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#B5FF3D] transition-all duration-300 ${
        active ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
      }`}
    />
  );
}

/* ------------------------------ Desktop actions ---------------------------- */
function DesktopActions() {
  return (
    <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
      <a
        href="tel:+918447009390"
        className="group hidden h-[44px] items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1 pl-1.5 pr-4 text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#229CEB]/50 hover:bg-white/[0.07] xl:flex"
      >
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#229CEB]/15 text-[#229CEB]">
          <Phone className="h-4 w-4" strokeWidth={2.4} />
        </span>
        <span className="leading-tight">
          <span className="block whitespace-nowrap text-[13.5px] font-bold">084470 09390</span>
          <span className="block text-[10.5px] font-medium text-[#AEB9CA]">Call Us</span>
        </span>
      </a>

      <Link
        href="#contact"
        className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55_0%,#9BE82A_50%,#5FB016_100%)] px-5 text-[13.5px] font-extrabold text-[#0A2410] shadow-[0_14px_30px_rgba(95,176,22,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(95,176,22,0.38)]"
      >
        <CalendarCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={2.3} />
        <span className="whitespace-nowrap">Book Free Counselling</span>
        <ArrowRight
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </Link>
    </div>
  );
}

/* ------------------------------ Courses mega ------------------------------- */
function CoursesMegaMenu({
  triggerRef,
  onEnter,
  onLeave,
  onClose,
}: {
  triggerRef: RefObject<HTMLButtonElement | null>;
  onEnter: () => void;
  onLeave: () => void;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [caretLeft, setCaretLeft] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const t = triggerRef.current?.getBoundingClientRect();
      const p = panelRef.current?.getBoundingClientRect();
      if (t && p) {
        const x = t.left + t.width / 2 - p.left;
        setCaretLeft(Math.max(28, Math.min(p.width - 28, x)));
      }
    };
    compute();
    const id = window.setTimeout(compute, 250);
    window.addEventListener("resize", compute);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", compute);
    };
  }, [triggerRef]);

  return (
    <motion.div
      {...menuMotion}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute left-1/2 top-full z-20 w-[min(1040px,calc(100vw-40px))] -translate-x-1/2 pt-3"
    >
      <motion.div
        ref={panelRef}
        variants={megaStagger}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0B1B33]/[0.98] p-4 shadow-[0_30px_80px_rgba(3,8,20,0.55)] backdrop-blur-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(181,255,61,0.12),transparent_38%)]" />
        <div className="relative z-10 grid grid-cols-[repeat(4,minmax(0,1fr))_232px] gap-3">
          {courseCategories.map((category, index) => (
            <MegaCourseColumn
              key={category.id}
              category={category}
              divider={index !== courseCategories.length - 1}
              onClose={onClose}
            />
          ))}
          <MegaGuidanceCard onClose={onClose} />
        </div>
      </motion.div>

      <span
        aria-hidden="true"
        style={{ left: caretLeft ?? "50%" }}
        className="pointer-events-none absolute top-[6px] z-30 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-white/10 bg-[#0B1B33]"
      />
    </motion.div>
  );
}

function MegaCourseColumn({
  category,
  divider,
  onClose,
}: {
  category: CourseCategory;
  divider: boolean;
  onClose: () => void;
}) {
  const Icon = category.icon;
  return (
    <motion.div variants={colVar} className={`relative ${divider ? "border-r border-white/8 pr-3" : ""}`}>
      <div className="mb-3 flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B5FF3D]/10 text-[#B5FF3D]">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
        </span>
        <h3 className="truncate text-[15px] font-bold tracking-[-0.01em] text-white">{category.title}</h3>
      </div>

      <div className="grid gap-0.5">
        {category.courses.map((course) => (
          <Link
            key={course.title}
            href={course.href}
            onClick={onClose}
            className="group rounded-xl px-2.5 py-2 transition duration-200 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-[13.5px] font-semibold text-white transition group-hover:text-[#B5FF3D]">
                {course.title}
              </span>
              <ChevronRight
                className="h-3.5 w-3.5 shrink-0 text-[#B5FF3D] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                strokeWidth={2.4}
              />
            </div>
            <p className="truncate text-[11.5px] font-medium text-[#AEB9CA]">{course.subtitle}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function MegaGuidanceCard({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      variants={colVar}
      className="relative overflow-hidden rounded-[20px] border border-[#B5FF3D]/18 bg-[radial-gradient(circle_at_85%_15%,rgba(181,255,61,0.16),transparent_45%),linear-gradient(135deg,rgba(16,54,36,0.7),rgba(11,27,51,0.92))] p-4"
    >
      <h3 className="max-w-[190px] text-[18px] font-extrabold leading-tight tracking-[-0.02em] text-white">
        Not sure which course is right?
      </h3>
      <p className="mt-2 text-[12.5px] font-medium leading-5 text-[#DDE7F5]">
        Get expert guidance and choose the perfect path.
      </p>
      <Link
        href="#contact"
        onClick={onClose}
        className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-3.5 py-2 text-[12.5px] font-extrabold text-[#0A2410]"
      >
        Book Free Counselling
        <ArrowRight className="h-[14px] w-[14px] transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
      </Link>
    </motion.div>
  );
}

/* ------------------------------ Branches menu ------------------------------ */
function BranchesDropdown({
  onEnter,
  onLeave,
  onClose,
}: {
  onEnter: () => void;
  onLeave: () => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      {...menuMotion}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute left-1/2 top-full z-20 w-[340px] -translate-x-1/2 pt-3"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1B33]/[0.98] p-3 shadow-[0_26px_70px_rgba(3,8,20,0.5)] backdrop-blur-2xl">
        <div className="grid gap-2.5">
          {branches.map((branch) => (
            <a
              key={branch.id}
              href={branch.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 transition duration-300 hover:border-[#B5FF3D]/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B5FF3D]/12 text-[#B5FF3D]">
                  <Landmark className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[14.5px] font-bold text-white">{branch.name}</h3>
                    <span className="shrink-0 rounded-full bg-[#B5FF3D]/12 px-2 py-0.5 text-[12px] font-bold text-[#B5FF3D]">
                      {branch.rating}★
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-[12px] font-medium text-[#AEB9CA]">
                    {branch.subtitle} · {branch.reviews} reviews
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#4285F4]">
                    Get Directions
                    <MapPin className="h-[14px] w-[14px]" strokeWidth={2.4} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[6px] z-30 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-white/10 bg-[#0B1B33]"
      />
    </motion.div>
  );
}

/* ------------------------------ Mobile drawer ------------------------------ */
function MobileDrawer({
  mobileOpen,
  mobilePanel,
  direction,
  activeHash,
  selectedCategory,
  setSelectedCategory,
  goPanel,
  closeMobileMenu,
  closeRef,
}: {
  mobileOpen: boolean;
  mobilePanel: MobilePanel;
  direction: number;
  activeHash: string;
  selectedCategory: CourseCategoryId;
  setSelectedCategory: (id: CourseCategoryId) => void;
  goPanel: (panel: MobilePanel, dir: number) => void;
  closeMobileMenu: () => void;
  closeRef: RefObject<HTMLButtonElement | null>;
}) {
  return (
    <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EXPO }}
            onClick={closeMobileMenu}
            aria-hidden="true"
            className="fixed inset-0 z-[95] bg-[#040A14]/75 backdrop-blur-sm lg:hidden"
          />

          <motion.div
            key="sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.34, ease: EXPO }}
            className="fixed inset-x-0 top-0 z-[96] flex h-[100dvh] flex-col bg-[#0B1B33] lg:hidden"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="relative h-[36px] w-[36px] overflow-hidden rounded-[10px] bg-black ring-1 ring-inset ring-[#B5FF3D]/35">
                  <Image src={MARK} alt="Kota Academy logo" fill sizes="36px" className="object-contain p-[3px]" />
                </span>
                <span className="text-[17px] font-extrabold leading-none tracking-[-0.03em] text-white">
                  Kota <span className="text-[#B5FF3D]">Academy</span>
                </span>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white transition hover:border-[#B5FF3D]/45"
              >
                <X className="h-5 w-5" strokeWidth={2.3} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                {mobilePanel === "main" && (
                  <motion.div
                    key="main"
                    custom={direction}
                    variants={drill}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <MobileMainPanel
                      activeHash={activeHash}
                      goPanel={goPanel}
                      closeMobileMenu={closeMobileMenu}
                    />
                  </motion.div>
                )}

                {mobilePanel === "courses" && (
                  <motion.div
                    key="courses"
                    custom={direction}
                    variants={drill}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <MobileCoursesPanel
                      goPanel={goPanel}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </motion.div>
                )}

                {mobilePanel === "category" && (
                  <motion.div
                    key="category"
                    custom={direction}
                    variants={drill}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <MobileCategoryPanel
                      selectedCategory={selectedCategory}
                      goPanel={goPanel}
                      closeMobileMenu={closeMobileMenu}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---- mobile: main ---- */
function MobileMainPanel({
  activeHash,
  goPanel,
  closeMobileMenu,
}: {
  activeHash: string;
  goPanel: (panel: MobilePanel, dir: number) => void;
  closeMobileMenu: () => void;
}) {
  return (
    <div>
      <div className="grid gap-1.5">
        <MobileNavRow icon={Home} label="Home" href="#home" onClick={closeMobileMenu} active={activeHash === "#home"} />
        <MobileNavRow icon={BookOpen} label="Courses" hasChild onClick={() => goPanel("courses", 1)} />
        <MobileNavRow icon={Trophy} label="Results" href="#results" onClick={closeMobileMenu} active={activeHash === "#results"} />
        <MobileNavRow icon={UsersRound} label="Faculty" href="#faculty" onClick={closeMobileMenu} active={activeHash === "#faculty"} />
        <MobileNavRow icon={Landmark} label="Branches" href="#branches" onClick={closeMobileMenu} active={activeHash === "#branches"} />
        <MobileNavRow icon={ClipboardList} label="Blog" href="/blog" onClick={closeMobileMenu} />
        <MobileNavRow icon={Mail} label="Contact" href="#contact" onClick={closeMobileMenu} active={activeHash === "#contact"} />
      </div>

      <div className="mt-5 border-t border-white/8 pt-5">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B5FF3D]">Quick Actions</p>
        <div className="grid gap-2.5">
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="group flex min-h-[52px] items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 text-[#0A2410]"
          >
            <CalendarCheck className="h-[19px] w-[19px]" strokeWidth={2.3} />
            <span className="flex-1 text-[14.5px] font-extrabold">Book Free Counselling</span>
            <ArrowRight className="h-[18px] w-[18px] transition group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>

          <a
            href="tel:+918447009390"
            onClick={closeMobileMenu}
            className="flex min-h-[52px] items-center gap-3 rounded-2xl border border-[#229CEB]/25 bg-[#229CEB]/10 px-4 text-white"
          >
            <Phone className="h-[19px] w-[19px] text-[#229CEB]" strokeWidth={2.3} />
            <span className="leading-tight">
              <span className="block text-[14.5px] font-bold">Call 084470 09390</span>
              <span className="text-[11.5px] font-medium text-[#AEB9CA]">Call Us</span>
            </span>
          </a>

          <a
            href="https://wa.me/918447009390"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="flex min-h-[52px] items-center gap-3 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/10 px-4 text-white"
          >
            <MessageCircle className="h-[19px] w-[19px] text-[#25D366]" strokeWidth={2.3} />
            <span className="leading-tight">
              <span className="block text-[14.5px] font-bold">Chat on WhatsApp</span>
              <span className="text-[11.5px] font-medium text-[#AEB9CA]">Instant reply</span>
            </span>
          </a>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/8 pt-5">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl bg-white/[0.03] p-3 text-center">
              <Icon className="mx-auto h-[18px] w-[18px] text-[#B5FF3D]" strokeWidth={2.2} />
              <p className="mt-2 text-[12px] font-bold text-white">{item.title}</p>
              <p className="mt-0.5 text-[10.5px] font-medium text-[#AEB9CA]">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileNavRow({
  icon: Icon,
  label,
  href,
  onClick,
  hasChild = false,
  active = false,
}: {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick: () => void;
  hasChild?: boolean;
  active?: boolean;
}) {
  const className = `group flex min-h-[50px] w-full items-center gap-3 rounded-2xl px-3.5 text-left transition duration-200 ${
    active
      ? "bg-[#B5FF3D]/12 text-[#B5FF3D]"
      : "bg-white/[0.025] text-white hover:bg-white/[0.05] hover:text-[#B5FF3D]"
  }`;
  const content = (
    <>
      <Icon className="h-[19px] w-[19px] shrink-0" strokeWidth={2.2} />
      <span className="flex-1 text-[15px] font-semibold">{label}</span>
      <ChevronRight
        className={`h-[18px] w-[18px] shrink-0 transition group-hover:translate-x-0.5 ${
          hasChild ? "opacity-70" : "opacity-45 group-hover:opacity-90"
        }`}
        strokeWidth={2.3}
      />
    </>
  );
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

/* ---- mobile: courses ---- */
function MobileCoursesPanel({
  goPanel,
  setSelectedCategory,
}: {
  goPanel: (panel: MobilePanel, dir: number) => void;
  setSelectedCategory: (id: CourseCategoryId) => void;
}) {
  return (
    <div>
      <MobilePanelBack label="Courses" onBack={() => goPanel("main", -1)} />

      <div className="grid overflow-hidden rounded-2xl border border-white/8">
        {courseCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setSelectedCategory(category.id);
                goPanel("category", 1);
              }}
              className={`flex min-h-[54px] items-center gap-3 bg-white/[0.025] px-3.5 text-left transition hover:bg-white/[0.05] ${
                index !== courseCategories.length - 1 ? "border-b border-white/8" : ""
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#B5FF3D]/10 text-[#B5FF3D]">
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </span>
              <span className="flex-1 text-[15.5px] font-bold text-white">{category.title}</span>
              <ChevronRight className="h-[18px] w-[18px] text-[#B5FF3D]" strokeWidth={2.3} />
            </button>
          );
        })}
      </div>

      <div className="mt-5 overflow-hidden rounded-[20px] border border-[#B5FF3D]/16 bg-[radial-gradient(circle_at_88%_18%,rgba(181,255,61,0.16),transparent_45%),linear-gradient(135deg,rgba(16,54,36,0.7),rgba(11,27,51,0.9))] p-5">
        <h3 className="text-[18px] font-extrabold leading-tight tracking-[-0.02em] text-white">
          Not sure which course is right?
        </h3>
        <p className="mt-2 text-[13px] font-medium leading-5 text-[#DDE7F5]">
          Get expert guidance and choose the perfect path.
        </p>
        <Link
          href="#contact"
          className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 py-2.5 text-[13px] font-extrabold text-[#0A2410]"
        >
          Book Free Counselling
          <ArrowRight className="h-[15px] w-[15px] transition group-hover:translate-x-0.5" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

/* ---- mobile: category ---- */
function MobileCategoryPanel({
  selectedCategory,
  goPanel,
  closeMobileMenu,
}: {
  selectedCategory: CourseCategoryId;
  goPanel: (panel: MobilePanel, dir: number) => void;
  closeMobileMenu: () => void;
}) {
  const category =
    courseCategories.find((item) => item.id === selectedCategory) ?? courseCategories[0];
  const Icon = category.icon;

  return (
    <div>
      <MobilePanelBack label={category.title} onBack={() => goPanel("courses", -1)} />

      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B5FF3D]/10 text-[#B5FF3D]">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
        </span>
        <h3 className="text-[16px] font-bold text-[#B5FF3D]">{category.title}</h3>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-white/8">
        {category.courses.map((course, index) => (
          <Link
            key={course.title}
            href={course.href}
            onClick={closeMobileMenu}
            className={`group flex items-center gap-3 bg-white/[0.025] px-3.5 py-3.5 transition hover:bg-white/[0.05] ${
              index !== category.courses.length - 1 ? "border-b border-white/8" : ""
            }`}
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-bold text-white">{course.title}</span>
              <span className="mt-0.5 block text-[12.5px] font-medium text-[#AEB9CA]">{course.subtitle}</span>
            </span>
            <ChevronRight
              className="h-[18px] w-[18px] shrink-0 text-[#B5FF3D] transition group-hover:translate-x-0.5"
              strokeWidth={2.4}
            />
          </Link>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/10 text-[#B5FF3D]">
            <UsersRound className="h-[20px] w-[20px]" strokeWidth={2.2} />
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-white">Need help choosing?</h3>
            <p className="mt-0.5 text-[12.5px] font-medium text-[#AEB9CA]">
              Our academic experts are here to help.
            </p>
          </div>
        </div>
        <Link
          href="#contact"
          onClick={closeMobileMenu}
          className="group mt-4 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 text-[13.5px] font-extrabold text-[#0A2410]"
        >
          Talk to a Counsellor
          <ArrowRight className="h-[15px] w-[15px] transition group-hover:translate-x-0.5" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

function MobilePanelBack({ label, onBack }: { label: string; onBack: () => void }) {
  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-[13px] font-bold text-[#B5FF3D]"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
        Back
      </button>
      <h2 className="mt-2 text-[22px] font-extrabold tracking-[-0.03em] text-white">{label}</h2>
    </div>
  );
}