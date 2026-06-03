// "use client";

// import Link from "next/link";
// import { motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   Building2,
//   CalendarCheck,
//   CheckCircle2,
//   Clock3,
//   Landmark,
//   MapPin,
//   Navigation,
//   Phone,
//   ShieldCheck,
//   Star,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";

// type Branch = {
//   id: "alpha" | "omicron";
//   name: string;
//   subtitle: string;
//   badge: string;
//   rating: string;
//   reviews: string;
//   address: string;
//   opens: string;
//   phone: string;
//   directionsUrl: string;
//   icon: LucideIcon;
// };

// type TrustItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
// };

// const branches: Branch[] = [
//   {
//     id: "alpha",
//     name: "Alpha-I Branch",
//     subtitle: "Alpha Commercial Belt",
//     badge: "Main Centre",
//     rating: "4.7",
//     reviews: "157",
//     address:
//       "Tower, Plot No. B, 5th Floor, Om, 5, Alfa Marg, Greater Noida, Uttar Pradesh 201310",
//     opens: "Opens 9:00 AM",
//     phone: "084470 09390",
//     directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
//     icon: Building2,
//   },
//   {
//     id: "omicron",
//     name: "Omicron-III Branch",
//     subtitle: "Near SBI Bank",
//     badge: "Easy Access",
//     rating: "4.4",
//     reviews: "22",
//     address:
//       "NS - 76, Pocket A, Omicron III, Greater Noida, Mathurapur, Uttar Pradesh 201310",
//     opens: "Opens 9:00 AM",
//     phone: "084470 09390",
//     directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
//     icon: Landmark,
//   },
// ];

// const trustItems: TrustItem[] = [
//   {
//     title: "Easy to Reach",
//     description: "Well-connected locations",
//     icon: MapPin,
//   },
//   {
//     title: "Personal Counselling",
//     description: "Visit and get expert guidance",
//     icon: UsersRound,
//   },
//   {
//     title: "Free Counselling",
//     description: "No registration charges",
//     icon: CalendarCheck,
//   },
//   {
//     title: "Opens 9:00 AM",
//     description: "Plan your visit easily",
//     icon: Clock3,
//   },
//   {
//     title: "Safe & Friendly",
//     description: "Secure environment for all",
//     icon: ShieldCheck,
//   },
// ];

// const mapEmbedUrl =
//   "https://www.google.com/maps?q=Kota%20Academy%20Greater%20Noida&output=embed";

// const EXPO = [0.16, 1, 0.3, 1] as const;

// const fadeUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 22,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: EXPO,
//     },
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.08,
//     },
//   },
// };

// export default function KotaAcademyBranchLocations() {
//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="branches"
//         className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24"
//       >
//         <SectionBackground />

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[520px] px-5 sm:px-6 md:max-w-[980px] lg:px-8 xl:max-w-[1500px]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <SectionHeader />

//           <motion.div
//             variants={fadeUp}
//             className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
//           >
//             <BranchCardsColumn />
//             <GoogleMapPanel />
//           </motion.div>

//           <LocationTrustStrip />
//         </motion.div>
//       </section>
//     </MotionConfig>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.12)_1px,transparent_1.45px)] bg-[size:24px_24px] opacity-35" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.36)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(48%_42%_at_8%_12%,black,transparent_70%)]" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.28)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(44%_42%_at_94%_58%,black,transparent_72%)]" />

//       <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full border-[52px] border-[#B5FF3D]/10 md:h-96 md:w-96" />

//       <div className="pointer-events-none absolute -right-28 top-0 h-64 w-64 rounded-full border-[48px] border-[#B5FF3D]/10 md:h-80 md:w-80" />

//       <div className="pointer-events-none absolute left-1/2 top-12 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
//     </>
//   );
// }

// function SectionHeader() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />

//         <MapPin className="h-4 w-4 text-[#2F7D17]" strokeWidth={2.4} />

//         <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#2F7D17] md:text-[13px]">
//           Branch Locations
//         </span>

//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[500px] text-balance text-[38px] font-black leading-[1.02] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[980px] md:text-[58px] lg:text-[66px] xl:max-w-[1200px] xl:text-[72px]">
//         Visit Your Nearest{" "}
//         <span className="text-[#2F861B]">Kota Academy</span> Branch
//       </h2>

//       <p className="mx-auto mt-6 max-w-[470px] text-[16px] leading-8 text-[#5B6475] md:max-w-[760px] md:text-[18px]">
//         Two branches across Greater Noida — choose the one closest to you and
//         book a free counselling session.
//       </p>
//     </motion.div>
//   );
// }

// function BranchCardsColumn() {
//   return (
//     <div className="grid gap-5">
//       {branches.map((branch) => (
//         <BranchCard key={branch.id} branch={branch} />
//       ))}
//     </div>
//   );
// }

// function BranchCard({ branch }: { branch: Branch }) {
//   return (
//     <motion.article
//       variants={fadeUp}
//       whileHover={{
//         y: -5,
//         transition: { duration: 0.25, ease: "easeOut" },
//       }}
//       className="group relative overflow-hidden rounded-[30px] border border-[#E3EAD8] bg-white/86 p-5 shadow-[0_22px_70px_rgba(7,20,47,0.075)] backdrop-blur-xl transition duration-300 hover:border-[#B9DEA0] hover:shadow-[0_30px_90px_rgba(7,20,47,0.11)] sm:grid sm:grid-cols-[112px_1fr] sm:gap-5 md:p-6"
//     >
//       <span className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-[linear-gradient(180deg,#B5FF3D,#3E9A12)]" />

//       <BuildingWatermark />

//       <BranchIconBlock branch={branch} />

//       <div className="relative z-10 mt-5 sm:mt-0">
//         <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <h3 className="text-[27px] font-black leading-tight tracking-[-0.045em] text-[#07142F] md:text-[30px]">
//                 {branch.name}
//               </h3>

//               <CheckCircle2
//                 className="h-5 w-5 shrink-0 text-[#2F861B]"
//                 strokeWidth={2.4}
//               />
//             </div>

//             <p className="mt-1 text-[16px] font-semibold text-[#5B6475]">
//               {branch.subtitle}
//             </p>
//           </div>

//           <RatingPill rating={branch.rating} reviews={branch.reviews} />
//         </div>

//         <div className="mt-5 space-y-3.5 border-t border-[#E2EAD8] pt-5">
//           <BranchInfoRow icon={MapPin}>{branch.address}</BranchInfoRow>

//           <BranchInfoRow icon={Clock3} emphasis>
//             {branch.opens}
//           </BranchInfoRow>

//           <BranchInfoRow icon={Phone}>{branch.phone}</BranchInfoRow>
//         </div>

//         <BranchCTAButtons branch={branch} />
//       </div>
//     </motion.article>
//   );
// }

// function BranchIconBlock({ branch }: { branch: Branch }) {
//   const Icon = branch.icon;

//   return (
//     <div className="relative z-10 flex items-center gap-4 sm:block sm:text-center">
//       <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border-[6px] border-[#E7F5D4] bg-[linear-gradient(135deg,#B5FF3D_0%,#67BE18_52%,#2F861B_100%)] text-white shadow-[0_16px_34px_rgba(74,151,0,0.22)] sm:mx-auto sm:h-24 sm:w-24">
//         <Icon className="h-10 w-10" strokeWidth={2} />
//       </div>

//       <div className="sm:mt-3">
//         <span className="inline-flex rounded-xl border border-[#D7EDBE] bg-[#F4FFE8] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-[#2F861B]">
//           {branch.badge}
//         </span>
//       </div>
//     </div>
//   );
// }

// function BuildingWatermark() {
//   return (
//     <svg
//       className="pointer-events-none absolute bottom-0 right-4 h-32 w-32 text-[#B7E295]/24 md:h-40 md:w-40"
//       viewBox="0 0 160 160"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M34 139V47L80 24L126 47V139"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M56 139V68H104V139"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M63 48H68M78 48H83M93 48H98M63 64H68M78 64H83M93 64H98M63 80H68M78 80H83M93 80H98"
//         stroke="currentColor"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />
//       <path
//         d="M20 139H140"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function RatingPill({
//   rating,
//   reviews,
// }: {
//   rating: string;
//   reviews: string;
// }) {
//   return (
//     <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#EFE5C9] bg-white/86 px-3.5 py-2 shadow-[0_10px_26px_rgba(7,20,47,0.06)]">
//       <GoogleMark />

//       <span className="text-[15px] font-black text-[#07142F]">{rating}</span>

//       <span className="flex items-center gap-0.5">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <Star
//             key={index}
//             className="h-4 w-4 fill-[#F5B642] text-[#F5B642]"
//             strokeWidth={1.8}
//           />
//         ))}
//       </span>

//       <span className="text-[13px] font-bold text-[#5B6475]">
//         · {reviews} reviews
//       </span>
//     </div>
//   );
// }

// function GoogleMark() {
//   return (
//     <span
//       className="flex h-5 w-5 items-center justify-center text-[18px] font-black leading-none"
//       aria-hidden="true"
//     >
//       <span className="text-[#4285F4]">G</span>
//     </span>
//   );
// }

// function BranchInfoRow({
//   icon: Icon,
//   children,
//   emphasis = false,
// }: {
//   icon: LucideIcon;
//   children: React.ReactNode;
//   emphasis?: boolean;
// }) {
//   return (
//     <div className="flex gap-3">
//       <Icon
//         className="mt-0.5 h-5 w-5 shrink-0 text-[#2F861B]"
//         strokeWidth={2.25}
//       />

//       <p
//         className={`text-[15px] leading-6 ${
//           emphasis
//             ? "font-black text-[#2F861B]"
//             : "font-semibold text-[#3C4860]"
//         }`}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

// function BranchCTAButtons({ branch }: { branch: Branch }) {
//   return (
//     <div className="mt-5 grid gap-3 sm:grid-cols-2">
//       <a
//         href={branch.directionsUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={`Get directions to ${branch.name}`}
//         className="group/direction flex h-13 min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#07142F] px-5 text-[15px] font-black text-white shadow-[0_16px_34px_rgba(7,20,47,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B1E42] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//       >
//         <Navigation
//           className="h-5 w-5 transition duration-300 group-hover/direction:translate-x-0.5 group-hover/direction:-translate-y-0.5"
//           strokeWidth={2.35}
//         />
//         Get Directions
//         <ArrowRight
//           className="ml-auto h-5 w-5 transition duration-300 group-hover/direction:translate-x-1"
//           strokeWidth={2.4}
//         />
//       </a>

//       <Link
//         href="#contact"
//         aria-label={`Book free counselling for ${branch.name}`}
//         className="group/counselling flex h-13 min-h-[52px] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#B5FF3D_0%,#75C614_48%,#3E9A12_100%)] px-5 text-[15px] font-black text-white shadow-[0_16px_34px_rgba(74,151,0,0.22)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07142F]"
//       >
//         <CalendarCheck className="h-5 w-5" strokeWidth={2.35} />
//         Book Free Counselling
//         <ArrowRight
//           className="ml-auto h-5 w-5 transition duration-300 group-hover/counselling:translate-x-1"
//           strokeWidth={2.4}
//         />
//       </Link>
//     </div>
//   );
// }

// function GoogleMapPanel() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[#E3EAD8] bg-white/82 p-2 shadow-[0_24px_80px_rgba(7,20,47,0.08)] backdrop-blur-xl md:min-h-[500px] lg:min-h-full"
//     >
//       <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-[#EAF4E4] md:h-[500px] lg:h-full lg:min-h-[620px]">
//         <iframe
//           title="Kota Academy branch locations map"
//           src={mapEmbedUrl}
//           className="h-full w-full border-0 opacity-[0.92]"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />

//         <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(247,250,239,0.12),transparent_24%,transparent_70%,rgba(247,250,239,0.18))]" />

//         <div className="absolute left-1/2 top-5 z-10 w-[calc(100%-2rem)] max-w-[430px] -translate-x-1/2 rounded-full border border-[#E0EAD6] bg-white/92 px-5 py-3 text-center shadow-[0_16px_34px_rgba(7,20,47,0.1)] backdrop-blur-md">
//           <div className="flex items-center justify-center gap-2.5">
//             <MapPin className="h-5 w-5 text-[#2F861B]" strokeWidth={2.35} />
//             <p className="text-[14px] font-black text-[#07142F] md:text-[16px]">
//               Both branches across Greater Noida
//             </p>
//           </div>
//         </div>

//         <MapPinLabel
//           className="left-[58%] top-[30%]"
//           color="blue"
//           title="Alpha-I Branch"
//           description="Om Tower, Alpha-I"
//         />

//         <MapPinLabel
//           className="left-[18%] top-[58%]"
//           color="green"
//           title="Omicron-III Branch"
//           description="Omicron III"
//         />

//         <a
//           href="https://www.google.com/maps/search/Kota+Academy+Greater+Noida"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bottom-5 left-1/2 z-10 flex w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 items-center justify-center gap-3 rounded-full border border-[#E0EAD6] bg-white/94 px-5 py-4 text-[15px] font-black text-[#07142F] shadow-[0_18px_40px_rgba(7,20,47,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//         >
//           <GoogleMapsMark />
//           View larger map on Google Maps
//           <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
//         </a>
//       </div>
//     </motion.div>
//   );
// }

// function MapPinLabel({
//   className,
//   color,
//   title,
//   description,
// }: {
//   className: string;
//   color: "blue" | "green";
//   title: string;
//   description: string;
// }) {
//   const colorClass =
//     color === "blue"
//       ? "bg-[#145DEB] shadow-[0_16px_34px_rgba(20,93,235,0.28)]"
//       : "bg-[#4EAB12] shadow-[0_16px_34px_rgba(78,171,18,0.28)]";

//   return (
//     <div
//       className={`pointer-events-none absolute z-10 hidden items-center gap-3 md:flex ${className}`}
//     >
//       <div
//         className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${colorClass}`}
//       >
//         <MapPin className="h-7 w-7 fill-white/20" strokeWidth={2.3} />
//       </div>

//       <div className="rounded-2xl bg-white/94 px-4 py-3 shadow-[0_16px_34px_rgba(7,20,47,0.12)] backdrop-blur-md">
//         <p className="text-[14px] font-black text-[#07142F]">{title}</p>
//         <p className="mt-0.5 text-[12px] font-semibold text-[#5B6475]">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// function GoogleMapsMark() {
//   return (
//     <span
//       className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F8FF] text-[20px] font-black"
//       aria-hidden="true"
//     >
//       <span className="text-[#4285F4]">G</span>
//     </span>
//   );
// }

// function LocationTrustStrip() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-6 overflow-hidden rounded-[30px] border border-[#E3EAD8] bg-white/80 p-4 shadow-[0_22px_70px_rgba(7,20,47,0.07)] backdrop-blur-xl md:mt-7 md:p-5"
//     >
//       <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
//         {trustItems.map((item, index) => (
//           <TrustItemCard
//             key={item.title}
//             item={item}
//             showDivider={index !== trustItems.length - 1}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function TrustItemCard({
//   item,
//   showDivider,
// }: {
//   item: TrustItem;
//   showDivider: boolean;
// }) {
//   const Icon = item.icon;

//   return (
//     <div className="relative flex items-center gap-4 rounded-2xl px-4 py-4 transition duration-300 hover:bg-[#F7FFF0] lg:rounded-none lg:px-5">
//       <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAF9D6] text-[#2F861B] shadow-[0_12px_28px_rgba(78,154,0,0.1)]">
//         <Icon className="h-7 w-7" strokeWidth={2.15} />
//       </div>

//       <div>
//         <h3 className="text-[16px] font-black leading-tight tracking-[-0.025em] text-[#07142F]">
//           {item.title}
//         </h3>

//         <p className="mt-1.5 text-[13.5px] leading-5 text-[#5B6475]">
//           {item.description}
//         </p>
//       </div>

//       {showDivider && (
//         <span className="absolute right-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-[#DDE8D2] lg:block" />
//       )}
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   BadgeCheck,
//   CalendarCheck,
//   Clock3,
//   ExternalLink,
//   MapPin,
//   Navigation,
//   Phone,
//   UsersRound,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data                                                                      */
// /*  `mapEmbed` uses the keyless Maps embed format pointed at each branch's    */
// /*  address so the live map lands on the right spot. For pixel-perfect pins,  */
// /*  replace with the official Share → Embed `src` from Google Maps.           */
// /* -------------------------------------------------------------------------- */

// type Branch = {
//   id: "alpha" | "omicron";
//   index: string;
//   name: string;
//   subtitle: string;
//   badge: string;
//   rating: string;
//   reviews: string;
//   address: string;
//   hours: string;
//   phone: string;
//   directionsUrl: string;
//   mapEmbed: string;
// };

// const branches: Branch[] = [
//   {
//     id: "alpha",
//     index: "01",
//     name: "Alpha-I Branch",
//     subtitle: "Alpha Commercial Belt",
//     badge: "Main Centre",
//     rating: "4.7",
//     reviews: "157",
//     address:
//       "Tower, Plot No. B, 5th Floor, Om, 5, Alfa Marg, Greater Noida, Uttar Pradesh 201310",
//     hours: "Opens 9:00 AM · Mon – Sat",
//     phone: "084470 09390",
//     directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
//     mapEmbed:
//       "https://maps.google.com/maps?q=Tower%20Plot%20No%20B%205th%20Floor%20Om%205%20Alfa%20Marg%20Greater%20Noida%20201310&z=15&output=embed",
//   },
//   {
//     id: "omicron",
//     index: "02",
//     name: "Omicron-III Branch",
//     subtitle: "Near SBI Bank",
//     badge: "Easy Access",
//     rating: "4.4",
//     reviews: "22",
//     address:
//       "NS - 76, Pocket A, Omicron III, Greater Noida, Mathurapur, Uttar Pradesh 201310",
//     hours: "Opens 9:00 AM · Mon – Sat",
//     phone: "084470 09390",
//     directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
//     mapEmbed:
//       "https://maps.google.com/maps?q=NS-76%20Pocket%20A%20Omicron%20III%20Greater%20Noida%20201310&z=15&output=embed",
//   },
// ];

// type TrustItem = { title: string; description: string; icon: LucideIcon };
// const trustItems: TrustItem[] = [
//   { title: "Free Counselling", description: "No registration charges", icon: CalendarCheck },
//   { title: "Opens 9:00 AM", description: "Mon – Sat, plan your visit", icon: Clock3 },
//   { title: "Easy to Reach", description: "Well-connected in Greater Noida", icon: MapPin },
//   { title: "Parent-Friendly", description: "Comfortable, secure environment", icon: UsersRound },
// ];

// /* -------------------------------------------------------------------------- */
// /*  Motion                                                                    */
// /* -------------------------------------------------------------------------- */

// const EXPO = [0.16, 1, 0.3, 1] as const;
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
// };
// const stagger: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function BranchLocations() {
//   const [active, setActive] = useState<Branch["id"]>("alpha");
//   const activeBranch = branches.find((b) => b.id === active) ?? branches[0];

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="branches"
//         className="relative overflow-hidden bg-[#F4F8EA] py-16 text-[#0B1B33] md:py-20 lg:py-24"
//       >
//         <DotGridBackground />

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <Header />

//           <motion.div
//             variants={fadeUp}
//             className="mt-11 grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:items-stretch"
//           >
//             {/* branch cards */}
//             <div className="flex flex-col gap-5">
//               {branches.map((b) => (
//                 <BranchCard
//                   key={b.id}
//                   branch={b}
//                   active={b.id === active}
//                   onSelect={() => setActive(b.id)}
//                 />
//               ))}
//             </div>

//             {/* live map */}
//             <MapPanel branch={activeBranch} />
//           </motion.div>

//           <TrustStrip />
//         </motion.div>
//       </section>
//     </MotionConfig>
//   );
// }

// function DotGridBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(48%_42%_at_8%_10%,black,transparent_70%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(44%_42%_at_94%_60%,black,transparent_72%)]" />
//       <div className="pointer-events-none absolute left-1/2 top-12 h-[320px] w-[440px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
//     </>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Header                                                                    */
// /* -------------------------------------------------------------------------- */

// function Header() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//         <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           <MapPin className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
//           Branch Locations
//         </span>
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//       </div>

//       <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
//         Visit Your Nearest <span className="text-[#3E9A12]">Kota Academy</span> Branch
//       </h2>

//       <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
//         Two branches across Greater Noida — choose the one closest to you and book a
//         free counselling session.
//       </p>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Branch card                                                               */
// /* -------------------------------------------------------------------------- */

// function BranchCard({
//   branch,
//   active,
//   onSelect,
// }: {
//   branch: Branch;
//   active: boolean;
//   onSelect: () => void;
// }) {
//   return (
//     <motion.article
//       variants={fadeUp}
//       onClick={onSelect}
//       className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-white p-5 transition-[box-shadow,border-color] duration-300 md:p-6 ${
//         active
//           ? "border-[#9FD46A] shadow-[0_22px_50px_-26px_rgba(16,120,40,0.45)]"
//           : "border-[#E4E7DA] shadow-[0_1px_2px_rgba(11,27,51,0.04)] hover:border-[#CBD8BB]"
//       }`}
//     >
//       {/* active accent rail */}
//       <span
//         className={`absolute inset-y-5 left-0 w-1 rounded-r-full bg-[linear-gradient(180deg,#B5FF3D,#3E9A12)] transition-opacity duration-300 ${
//           active ? "opacity-100" : "opacity-0"
//         }`}
//         aria-hidden
//       />

//       <div className="flex items-start justify-between gap-3">
//         <div className="flex items-start gap-3">
//           {/* index badge */}
//           <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(145deg,#9FE34A,#3E9A12)] text-[14px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(62,154,18,0.7)]">
//             {branch.index}
//           </span>
//           <div>
//             <div className="flex flex-wrap items-center gap-2">
//               <h3 className="text-[18px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33] md:text-[19px]">
//                 {branch.name}
//               </h3>
//               <span className="inline-flex items-center gap-1 rounded-full border border-[#CDEBB0] bg-[#EDF8DD] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#2C7A12]">
//                 {branch.badge === "Main Centre" && <BadgeCheck className="h-3 w-3" strokeWidth={2.3} aria-hidden />}
//                 {branch.badge}
//               </span>
//             </div>
//             <p className="mt-0.5 text-[13px] text-[#5A6678]">{branch.subtitle}</p>
//           </div>
//         </div>

//         {/* google rating */}
//         <div className="flex shrink-0 flex-col items-end">
//           <div className="flex items-center gap-1.5">
//             <GoogleMark className="h-4 w-4" />
//             <span className="text-[14px] font-bold text-[#0B1B33]">{branch.rating}</span>
//             <Stars />
//           </div>
//           <span className="mt-0.5 text-[11px] text-[#5A6678]">{branch.reviews} Google reviews</span>
//         </div>
//       </div>

//       {/* info */}
//       <div className="mt-4 space-y-2.5 border-t border-[#EEF0E6] pt-4">
//         <InfoRow icon={MapPin}>{branch.address}</InfoRow>
//         <InfoRow icon={Clock3} emphasis>{branch.hours}</InfoRow>
//         <InfoRow icon={Phone}>{branch.phone}</InfoRow>
//       </div>

//       {/* actions */}
//       <div className="mt-4 grid grid-cols-2 gap-2.5">
//         <a
//           href={branch.directionsUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={(e) => e.stopPropagation()}
//           aria-label={`Get directions to ${branch.name}`}
//           className="group/dir flex items-center justify-center gap-2 rounded-full bg-[#0B1B33] px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors duration-300 hover:bg-[#0E2240] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//         >
//           <Navigation className="h-4 w-4" strokeWidth={2.3} aria-hidden />
//           Directions
//         </a>
//         <Link
//           href="#contact"
//           onClick={(e) => e.stopPropagation()}
//           aria-label={`Book free counselling for ${branch.name}`}
//           className="group/book flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 py-2.5 text-[13.5px] font-bold text-[#0A2410] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1B33]"
//         >
//           <CalendarCheck className="h-4 w-4" strokeWidth={2.3} aria-hidden />
//           Book Counselling
//         </Link>
//       </div>
//     </motion.article>
//   );
// }

// function InfoRow({
//   icon: Icon,
//   children,
//   emphasis = false,
// }: {
//   icon: LucideIcon;
//   children: React.ReactNode;
//   emphasis?: boolean;
// }) {
//   return (
//     <div className="flex gap-2.5">
//       <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#3E8618]" strokeWidth={2.2} aria-hidden />
//       <p className={`text-[13px] leading-5 ${emphasis ? "font-semibold text-[#2F7D17]" : "text-[#4A5670]"}`}>
//         {children}
//       </p>
//     </div>
//   );
// }

// function Stars() {
//   return (
//     <span className="flex items-center gap-0.5" aria-hidden>
//       {Array.from({ length: 5 }).map((_, i) => (
//         <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#F5B642]">
//           <path d="M12 17.3l-5.4 3.3 1.4-6.2L3 10.2l6.3-.5L12 4l2.7 5.7 6.3.5-5 4.2 1.4 6.2z" />
//         </svg>
//       ))}
//     </span>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Live map panel — re-centres to the active branch                          */
// /* -------------------------------------------------------------------------- */

// function MapPanel({ branch }: { branch: Branch }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative min-h-[380px] overflow-hidden rounded-2xl border border-[#E4E7DA] bg-white p-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)] lg:min-h-full"
//     >
//       <div className="relative h-full min-h-[380px] overflow-hidden rounded-[14px] bg-[#EAF1E0] lg:min-h-[560px]">
//         <iframe
//           key={branch.id}
//           title={`Map showing ${branch.name}`}
//           src={branch.mapEmbed}
//           className="h-full w-full border-0"
//           style={{ minHeight: "380px" }}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />

//         {/* floating: which branch is shown */}
//         <div className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#0B1B33]/90 px-3.5 py-2 text-white shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
//           <MapPin className="h-4 w-4 text-[#B5FF3D]" strokeWidth={2.3} aria-hidden />
//           <span className="text-[12.5px] font-semibold">{branch.name}</span>
//         </div>

//         {/* open in google maps */}
//         <a
//           href={branch.directionsUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0B1B33] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//         >
//           <GoogleMapsMark className="h-4 w-4" />
//           Open in Google Maps
//           <ExternalLink className="h-3.5 w-3.5 text-[#5A6678]" strokeWidth={2.2} aria-hidden />
//         </a>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Trust strip — trimmed to visit-relevant items                            */
// /* -------------------------------------------------------------------------- */

// function TrustStrip() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-6 overflow-hidden rounded-2xl border border-[#E4E7DA] bg-white/70 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm"
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {trustItems.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <div key={item.title} className="relative flex items-center gap-3 p-4 md:p-5">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#CDEBB0] bg-[#EDF8DD] text-[#2C7A12]">
//                 <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden />
//               </span>
//               <div>
//                 <h3 className="text-[14px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33]">
//                   {item.title}
//                 </h3>
//                 <p className="mt-0.5 text-[12px] leading-snug text-[#5A6678]">{item.description}</p>
//               </div>
//               {i !== trustItems.length - 1 && (
//                 <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#0B1B33]/10 lg:block" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Google marks                                                              */
// /* -------------------------------------------------------------------------- */

// function GoogleMark({ className = "" }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden>
//       <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
//       <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
//       <path fill="#FBBC05" d="M6 14.4a6.5 6.5 0 0 1 0-4.2V7.4H2.3a10.9 10.9 0 0 0 0 9.8L6 14.4z" />
//       <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 2.3 7.4L6 10.2c.9-2.5 3.2-4.4 6-4.4z" />
//     </svg>
//   );
// }

// function GoogleMapsMark({ className = "" }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden>
//       <path fill="#34A853" d="M12 23s2-3 2-6a2 2 0 0 0-4 0c0 3 2 6 2 6z" />
//       <path fill="#4285F4" d="M12 2a8 8 0 0 0-6 13.3l4-4.6A2 2 0 0 1 12 7a2 2 0 0 1 2 2c0 .5-.2 1-.5 1.4l4-4.7A8 8 0 0 0 12 2z" />
//       <path fill="#FBBC05" d="M6 15.3 9.5 11A2 2 0 0 0 12 11l-4 4.6z" opacity="0.9" />
//       <circle cx="12" cy="9" r="2" fill="#fff" />
//     </svg>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock3,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/*  `mapEmbed` uses the keyless Maps embed pointed at each branch address.    */
/*  For pixel-perfect pins, replace with the official Share → Embed `src`.    */
/* -------------------------------------------------------------------------- */

type Branch = {
  id: "alpha" | "omicron";
  index: string;
  name: string;
  subtitle: string;
  badge: string;
  rating: string;
  reviews: string;
  address: string;
  hours: string;
  phone: string;
  phoneHref: string;
  directionsUrl: string;
  mapEmbed: string;
};

const branches: Branch[] = [
  {
    id: "alpha",
    index: "01",
    name: "Alpha-I Branch",
    subtitle: "Alpha Commercial Belt",
    badge: "Main Centre",
    rating: "4.7",
    reviews: "157",
    address:
      "Tower, Plot No. B, 5th Floor, Om, 5, Alfa Marg, Greater Noida, Uttar Pradesh 201310",
    hours: "Opens 9:00 AM · Mon – Sat",
    phone: "084470 09390",
    phoneHref: "tel:+918447009390",
    directionsUrl: "https://maps.app.goo.gl/QdbcoaQDKwEG7ass7",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56115.36728587686!2d77.515637!3d28.473208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7e06bda251%3A0xf63a93ffae9e632b!2sKota%20Academy%3A%20Shaping%20Futures%2C%20Best%20Coaching%20Center%20for%20IIT%2FNEET%20in%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1780426492299!5m2!1sen!2sin",
  },
  {
    id: "omicron",
    index: "02",
    name: "Omicron-III Branch",
    subtitle: "Near SBI Bank",
    badge: "Easy Access",
    rating: "4.4",
    reviews: "22",
    address:
      "NS - 76, Pocket A, Omicron III, Greater Noida, Mathurapur, Uttar Pradesh 201310",
    hours: "Opens 9:00 AM · Mon – Sat",
    phone: "084470 09390",
    phoneHref: "tel:+918447009390",
    directionsUrl: "https://maps.app.goo.gl/zM6pbuUjWaE5ynzc8",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56115.36728587686!2d77.515637!3d28.473208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebfd7b73afeb%3A0x6ea2d0dd5e18cf44!2sKota%20Academy!5e0!3m2!1sen!2sin!4v1780426558463!5m2!1sen!2sin",
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
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function BranchLocations() {
  const [active, setActive] = useState<Branch["id"]>("alpha");
  const activeBranch = branches.find((b) => b.id === active) ?? branches[0];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="branches"
        className="relative overflow-hidden bg-[#F4F8EA] py-16 text-[#0B1B33] md:py-20 lg:py-24"
      >
        <DotGridBackground />

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          variants={stagger}
        >
          <Header />

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-5"
          >
            {/* cards: full-width stacked on mobile, stacked column on desktop */}
            <div className="order-last flex flex-col gap-3.5 lg:order-first lg:gap-4">
              {branches.map((b) => (
                <BranchCard
                  key={b.id}
                  branch={b}
                  active={b.id === active}
                  onSelect={() => setActive(b.id)}
                />
              ))}
            </div>

            {/* map: first on mobile so card taps stay visible, right on desktop */}
            <div className="order-first lg:order-last">
              <MapPanel branch={activeBranch} />
            </div>
          </motion.div>

          <CounsellingBand />
        </motion.div>
      </section>
    </MotionConfig>
  );
}

function DotGridBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(48%_42%_at_8%_10%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(44%_42%_at_94%_60%,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-[320px] w-[440px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
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
          <MapPin className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
          Branch Locations
        </span>
        <span className="h-px w-9 bg-[#4E9417]/60" />
      </div>

      <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
        Visit Your Nearest <span className="text-[#3E9A12]">Kota Academy</span> Branch
      </h2>

      <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
        Two branches across Greater Noida — choose the one closest to you and book a
        free counselling session.
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Branch card — modern, with strong active state                            */
/* -------------------------------------------------------------------------- */

function BranchCard({
  branch,
  active,
  onSelect,
}: {
  branch: Branch;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative rounded-[24px]"
    >
      {/* soft glow behind the active card (~20%) */}
      <span
        className={`pointer-events-none absolute -inset-1.5 rounded-[28px] bg-[#1F3A63]/20 blur-lg transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />

      <article
        onClick={onSelect}
        className={`group relative cursor-pointer overflow-hidden rounded-[24px] bg-white p-4 transition-shadow duration-300 md:p-5 ${
          active
            ? "shadow-[0_22px_50px_-24px_rgba(11,27,51,0.45)]"
            : "border border-[#E4E7DA] shadow-[0_1px_2px_rgba(11,27,51,0.04)] hover:border-[#CBD8BB] hover:shadow-[0_18px_42px_-26px_rgba(11,27,51,0.4)]"
        }`}
      >
        {/* navy curve-hugging left rail — traces the top-left → bottom-left radius */}
        <span
          className={`pointer-events-none absolute inset-y-0 left-0 w-[5px] rounded-l-[24px] bg-[linear-gradient(180deg,#13294B,#0B1B33)] transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
        {/* faint inner border so the active white card still has an edge on cream */}
        <span
          className={`pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset transition-colors duration-300 ${
            active ? "ring-[#0B1B33]/12" : "ring-transparent"
          }`}
          aria-hidden
        />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {/* index badge */}
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[14px] font-extrabold ring-1 ring-inset transition-colors duration-300 ${
              active
                ? "bg-[linear-gradient(145deg,#9FE34A,#3E9A12)] text-white ring-transparent"
                : "bg-[#F1F5EA] text-[#3E8618] ring-[#DDE6CF]"
            }`}
          >
            {branch.index}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[17px] font-bold leading-tight tracking-[-0.01em] text-[#0B1B33] md:text-[19px]">
                {branch.name}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#CDEBB0] bg-[#EDF8DD] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#2C7A12]">
                {branch.badge === "Main Centre" && <BadgeCheck className="h-3 w-3" strokeWidth={2.3} aria-hidden />}
                {branch.badge}
              </span>
            </div>
            <p className="mt-0.5 text-[13px] text-[#5A6678]">{branch.subtitle}</p>
          </div>
        </div>

        {/* google rating pill */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#E7E9E0] bg-white px-2.5 py-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)]">
          <GoogleMark className="h-3.5 w-3.5" />
          <span className="text-[13px] font-bold text-[#0B1B33]">{branch.rating}</span>
          <Stars />
        </div>
      </div>

      {/* viewing-on-map cue */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EXPO }}
            className="overflow-hidden"
          >
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#0B1B33] px-2.5 py-1 text-[10.5px] font-semibold text-[#B5FF3D]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B5FF3D] opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B5FF3D]" />
              </span>
              Showing on map
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* info */}
      <div className="mt-4 space-y-2.5 border-t border-[#EEF0E6] pt-4">
        <InfoRow icon={MapPin}>{branch.address}</InfoRow>
        <InfoRow icon={Clock3} emphasis>{branch.hours}</InfoRow>
        <a
          href={branch.phoneHref}
          onClick={(e) => e.stopPropagation()}
          className="flex w-fit gap-2.5 text-[13px] text-[#4A5670] transition-colors hover:text-[#2F7D17]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F1F5EA] text-[#3E8618]">
            <Phone className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
          </span>
          <span className="self-center font-medium">{branch.phone}</span>
        </a>
      </div>

      {/* actions */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Get directions to ${branch.name}`}
          className="flex items-center justify-center gap-2 rounded-full bg-[#0B1B33] px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors duration-300 hover:bg-[#0E2240] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
        >
          <Navigation className="h-4 w-4" strokeWidth={2.3} aria-hidden />
          Directions
        </a>
        <Link
          href="#contact"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Book free counselling for ${branch.name}`}
          className="flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 py-2.5 text-[13.5px] font-bold text-[#0A2410] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1B33]"
        >
          <CalendarCheck className="h-4 w-4" strokeWidth={2.3} aria-hidden />
          Book Counselling
        </Link>
      </div>
      </article>
    </motion.div>
  );
}

function InfoRow({
  icon: Icon,
  children,
  emphasis = false,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className="flex gap-2.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F1F5EA] text-[#3E8618]">
        <Icon className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
      </span>
      <p className={`self-center text-[13px] leading-5 ${emphasis ? "font-semibold text-[#2F7D17]" : "text-[#4A5670]"}`}>
        {children}
      </p>
    </div>
  );
}

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-3 w-3 fill-[#F5B642]">
          <path d="M12 17.3l-5.4 3.3 1.4-6.2L3 10.2l6.3-.5L12 4l2.7 5.7 6.3.5-5 4.2 1.4 6.2z" />
        </svg>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Live map — click-to-activate (kills the ctrl+scroll dim until intended)   */
/* -------------------------------------------------------------------------- */

function MapPanel({ branch }: { branch: Branch }) {
  const [activated, setActivated] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-[#E4E7DA] bg-white p-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)] lg:h-full"
    >
      <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-[#EAF1E0] sm:h-[360px] lg:h-full lg:min-h-[470px]">
        <iframe
          key={branch.id}
          title={`Map showing ${branch.name}`}
          src={branch.mapEmbed}
          className="h-full w-full border-0"
          style={{ minHeight: "300px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* click-to-activate overlay: blocks the iframe (no grey ctrl-scroll
            prompt) until the user opts in to interacting with the map */}
        {!activated && (
          <button
            type="button"
            onClick={() => setActivated(true)}
            aria-label="Activate interactive map"
            className="group absolute inset-0 z-[5] flex items-end justify-center bg-transparent"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#0B1B33]/85 px-4 py-2 text-[12.5px] font-semibold text-white opacity-0 shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Navigation className="h-3.5 w-3.5 text-[#B5FF3D]" strokeWidth={2.3} aria-hidden />
              Click to interact with the map
            </span>
          </button>
        )}

        {/* floating branch chip (cross-fades on switch) — top-right to avoid Google's info card */}
        <div className="pointer-events-none absolute right-4 top-4 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: EXPO }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1B33]/90 px-3.5 py-2 text-white shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <MapPin className="h-4 w-4 text-[#B5FF3D]" strokeWidth={2.3} aria-hidden />
              <span className="text-[12.5px] font-semibold">{branch.name}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* open in google maps */}
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0B1B33] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
        >
          <GoogleMapsMark className="h-4 w-4" />
          Open in Google Maps
          <ExternalLink className="h-3.5 w-3.5 text-[#5A6678]" strokeWidth={2.2} aria-hidden />
        </a>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Counselling CTA band — replaces the generic feature strip                 */
/* -------------------------------------------------------------------------- */

function CounsellingBand() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_85%_30%,rgba(181,255,61,0.18),transparent_42%),linear-gradient(120deg,#0B1B33_0%,#0C2238_52%,#0B2A1C_100%)] p-6 shadow-[0_28px_70px_-32px_rgba(7,17,31,0.6)] md:p-8"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[620px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
            <CalendarCheck className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
            Free Counselling
          </span>
          <h3 className="mt-4 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[26px]">
            Not sure which branch suits you?
          </h3>
          <p className="mt-2 text-[14.5px] leading-7 text-[#C7D1E0]">
            Book a free counselling session — we&apos;ll help you choose the right branch,
            batch and program for your child. No registration charges.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:flex-col md:items-end lg:flex-row">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-6 py-3.5 text-[15px] font-bold text-[#0A2410] shadow-[0_18px_40px_-16px_rgba(95,176,22,0.8)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden />
            Book Free Counselling
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.4} aria-hidden />
          </Link>
          <a
            href="tel:+918447009390"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            <PhoneCall className="h-[18px] w-[18px] text-[#B5FF3D]" strokeWidth={2.2} aria-hidden />
            084470 09390
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Google marks                                                              */
/* -------------------------------------------------------------------------- */

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M6 14.4a6.5 6.5 0 0 1 0-4.2V7.4H2.3a10.9 10.9 0 0 0 0 9.8L6 14.4z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 2.3 7.4L6 10.2c.9-2.5 3.2-4.4 6-4.4z" />
    </svg>
  );
}

function GoogleMapsMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#34A853" d="M12 23s2-3 2-6a2 2 0 0 0-4 0c0 3 2 6 2 6z" />
      <path fill="#4285F4" d="M12 2a8 8 0 0 0-6 13.3l4-4.6A2 2 0 0 1 12 7a2 2 0 0 1 2 2c0 .5-.2 1-.5 1.4l4-4.7A8 8 0 0 0 12 2z" />
      <circle cx="12" cy="9" r="2" fill="#fff" />
    </svg>
  );
}