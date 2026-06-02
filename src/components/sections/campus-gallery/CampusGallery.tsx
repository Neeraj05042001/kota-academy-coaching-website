// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   AirVent,
//   ArrowLeft,
//   ArrowRight,
//   BookOpenCheck,
//   Building2,
//   CalendarCheck,
//   Camera,
//   ClipboardCheck,
//   GraduationCap,
//   Headphones,
//   ImageIcon,
//   Monitor,
//   ShieldCheck,
//   UsersRound,
//   X,
//   type LucideIcon,
// } from "lucide-react";

// type GalleryCategory =
//   | "classroom"
//   | "teaching"
//   | "achievement"
//   | "parents"
//   | "campus"
//   | "events"
//   | "testing"
//   | "study";

// type GalleryImage = {
//   id: string;
//   src: string;
//   alt: string;
//   category: GalleryCategory;
//   label: string;
//   caption: string;
//   icon: LucideIcon;
//   desktopClassName: string;
// };

// type SupportItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
// };

// const galleryImages: GalleryImage[] = [
//   {
//     id: "classroom-learning",
//     src: "/images/kota-academy/gallery/classroom-image-1.jpeg",
//     alt: "Kota Academy students attending a focused classroom learning session",
//     category: "classroom",
//     label: "Classroom Learning",
//     caption: "Focused batches with regular guidance",
//     icon: Monitor,
//     desktopClassName: "lg:col-span-4 lg:row-span-2",
//   },
//   {
//     id: "faculty-teaching",
//     src: "/images/kota-academy/gallery/classroom-image-2.jpg",
//     alt: "Kota Academy faculty teaching students in class",
//     category: "teaching",
//     label: "Faculty Teaching",
//     caption: "Concept clarity through expert faculty",
//     icon: GraduationCap,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "achievement-moments",
//     src: "/images/kota-academy/gallery/image1.jpeg",
//     alt: "Kota Academy students receiving achievement recognition",
//     category: "achievement",
//     label: "Achievement Moments",
//     caption: "Celebrating hard work and dedication",
//     icon: ShieldCheck,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "parent-counselling",
//     src: "/images/kota-academy/gallery/image2.jpeg",
//     alt: "Parent counselling and guidance session at Kota Academy",
//     category: "parents",
//     label: "Parent Counselling",
//     caption: "Regular interactions for better support",
//     icon: UsersRound,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "focused-study",
//     src: "/images/kota-academy/gallery/image3.jpeg",
//     alt: "Kota Academy students studying in a focused learning setup",
//     category: "study",
//     label: "Focused Study",
//     caption: "Discipline today, success tomorrow",
//     icon: BookOpenCheck,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "campus-branch",
//     src: "/images/kota-academy/gallery/image4.jpeg",
//     alt: "Kota Academy branch building and campus exterior",
//     category: "campus",
//     label: "Our Campus",
//     caption: "A modern space built for learning",
//     icon: Building2,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "events-celebration",
//     src: "/images/kota-academy/gallery/image5.jpeg",
//     alt: "Kota Academy student events and celebration moments",
//     category: "events",
//     label: "Events & Celebrations",
//     caption: "Building memories beyond academics",
//     icon: CalendarCheck,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "test-practice",
//     src: "/images/kota-academy/gallery/image6.jpeg",
//     alt: "Kota Academy students writing tests during practice session",
//     category: "testing",
//     label: "Test & Practice",
//     caption: "Regular tests to track performance",
//     icon: ClipboardCheck,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "student-writing",
//     src: "/images/kota-academy/gallery/image7.jpeg",
//     alt: "Kota Academy student writing notes during classroom study",
//     category: "study",
//     label: "Student Practice",
//     caption: "Daily practice with guidance",
//     icon: BookOpenCheck,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "student-group",
//     src: "/images/kota-academy/gallery/image8.jpeg",
//     alt: "Kota Academy students standing together in uniform",
//     category: "events",
//     label: "Student Life",
//     caption: "Learning together with discipline",
//     icon: UsersRound,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "teacher-board",
//     src: "/images/kota-academy/gallery/image9.jpeg",
//     alt: "Kota Academy teacher explaining concepts on board",
//     category: "teaching",
//     label: "Board Teaching",
//     caption: "Clear explanations in class",
//     icon: GraduationCap,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "reception",
//     src: "/images/kota-academy/gallery/image10.jpeg",
//     alt: "Kota Academy reception and student welcome area",
//     category: "campus",
//     label: "Campus Moments",
//     caption: "A welcoming academic space",
//     icon: Building2,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
// ];

// const supportItems: SupportItem[] = [
//   {
//     title: "AC Classrooms",
//     description: "Comfortable learning",
//     icon: AirVent,
//   },
//   {
//     title: "Focused Study Setup",
//     description: "Distraction-free environment",
//     icon: Monitor,
//   },
//   {
//     title: "Regular Testing",
//     description: "Performance tracking",
//     icon: ClipboardCheck,
//   },
//   {
//     title: "Premium Study Material",
//     description: "Well-researched content",
//     icon: BookOpenCheck,
//   },
//   {
//     title: "Parent Progress Updates",
//     description: "Stay informed always",
//     icon: UsersRound,
//   },
//   {
//     title: "Doubt-Friendly Support",
//     description: "Concepts made easy",
//     icon: Headphones,
//   },
// ];

// const mobileSupportItems: SupportItem[] = [
//   {
//     title: "AC Classrooms",
//     description: "Comfortable learning",
//     icon: Building2,
//   },
//   {
//     title: "Regular Testing",
//     description: "Performance tracking",
//     icon: ClipboardCheck,
//   },
//   {
//     title: "Premium Study Material",
//     description: "Well-researched content",
//     icon: BookOpenCheck,
//   },
//   {
//     title: "Parent Updates",
//     description: "Stay informed",
//     icon: UsersRound,
//   },
//   {
//     title: "Doubt Support",
//     description: "Concepts made easy",
//     icon: Headphones,
//   },
//   {
//     title: "Safe & Disciplined Environment",
//     description: "Focused preparation",
//     icon: ShieldCheck,
//   },
// ];

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
//       staggerChildren: 0.07,
//       delayChildren: 0.08,
//     },
//   },
// };

// export default function KotaAcademyCampusGallery() {
//   const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

//   const selectedMobileImage = galleryImages[selectedMobileIndex];

//   const closeLightbox = () => setLightboxIndex(null);

//   const goToPrevious = () => {
//     setLightboxIndex((current) => {
//       if (current === null) return current;
//       return current === 0 ? galleryImages.length - 1 : current - 1;
//     });
//   };

//   const goToNext = () => {
//     setLightboxIndex((current) => {
//       if (current === null) return current;
//       return current === galleryImages.length - 1 ? 0 : current + 1;
//     });
//   };

//   useEffect(() => {
//     if (lightboxIndex === null) return;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") closeLightbox();
//       if (event.key === "ArrowLeft") goToPrevious();
//       if (event.key === "ArrowRight") goToNext();
//     };

//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [lightboxIndex]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="campus-gallery"
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

//           <DesktopPhotoWall onOpenLightbox={setLightboxIndex} />

//           <MobileGalleryPreview
//             selectedImage={selectedMobileImage}
//             selectedIndex={selectedMobileIndex}
//             onSelect={setSelectedMobileIndex}
//           />

//           <DesktopSupportStrip />

//           <MobileSupportCard />

//           <GalleryCTA />
//         </motion.div>

//         <DesktopLightbox
//           activeIndex={lightboxIndex}
//           onClose={closeLightbox}
//           onPrevious={goToPrevious}
//           onNext={goToNext}
//         />
//       </section>
//     </MotionConfig>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.12)_1px,transparent_1.45px)] bg-[size:24px_24px] opacity-35" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.36)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(48%_42%_at_8%_12%,black,transparent_70%)]" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.32)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(44%_42%_at_94%_58%,black,transparent_72%)]" />

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

//         <Camera className="h-4 w-4 text-[#2F7D17]" strokeWidth={2.3} />

//         <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#2F7D17] md:text-[13px]">
//           Real Campus Moments
//         </span>

//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[500px] text-balance text-[38px] font-black leading-[1.02] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[900px] md:text-[58px] lg:text-[66px] xl:max-w-[1100px] xl:text-[72px]">
//         Inside Kota Academy’s Learning{" "}
//         <span className="text-[#2F861B]">Environment</span>
//       </h2>

//       <p className="mx-auto mt-6 max-w-[470px] text-[16px] leading-8 text-[#5B6475] md:max-w-[820px] md:text-[18px]">
//         Explore real classrooms, student moments, faculty guidance, parent
//         interactions, and achievement celebrations from Kota Academy.
//       </p>
//     </motion.div>
//   );
// }

// function DesktopPhotoWall({
//   onOpenLightbox,
// }: {
//   onOpenLightbox: (index: number) => void;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-10 hidden overflow-hidden rounded-[30px] border border-[#E3EAD8] bg-white/78 p-3 shadow-[0_24px_80px_rgba(7,20,47,0.08)] backdrop-blur-xl md:block lg:mt-12"
//     >
//       <div className="grid auto-rows-[150px] grid-cols-2 gap-3 lg:auto-rows-[160px] lg:grid-cols-12">
//         {galleryImages.map((image, index) => (
//           <GalleryTile
//             key={image.id}
//             image={image}
//             index={index}
//             onOpenLightbox={onOpenLightbox}
//           />
//         ))}

//         <MoreMomentsTile />
//       </div>
//     </motion.div>
//   );
// }

// function GalleryTile({
//   image,
//   index,
//   onOpenLightbox,
// }: {
//   image: GalleryImage;
//   index: number;
//   onOpenLightbox: (index: number) => void;
// }) {
//   const Icon = image.icon;

//   return (
//     <motion.button
//       type="button"
//       variants={fadeUp}
//       onClick={() => onOpenLightbox(index)}
//       className={`group relative overflow-hidden rounded-[22px] bg-[#07142F] text-left shadow-[0_12px_30px_rgba(7,20,47,0.08)] outline-none ring-offset-2 transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#8AD31D] md:col-span-1 ${image.desktopClassName}`}
//     >
//       <Image
//         src={image.src}
//         alt={image.alt}
//         fill
//         sizes="(max-width: 1024px) 50vw, 24vw"
//         className="object-cover transition duration-[650ms] ease-out group-hover:scale-[1.055]"
//         priority={index === 0}
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-[#05101F]/86 via-[#05101F]/20 to-transparent opacity-95 transition duration-300 group-hover:opacity-100" />

//       <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white lg:p-5">
//         <div className="flex items-end gap-3">
//           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#75B819]/82 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md">
//             <Icon className="h-5 w-5" strokeWidth={2.25} />
//           </div>

//           <div>
//             <h3 className="text-[16px] font-black leading-tight tracking-[-0.025em] lg:text-[18px]">
//               {image.label}
//             </h3>

//             <p className="mt-1 text-[12.5px] font-medium leading-5 text-white/86 lg:text-[13.5px]">
//               {image.caption}
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.button>
//   );
// }

// function MoreMomentsTile() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative flex items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(181,255,61,0.16),transparent_35%),linear-gradient(145deg,#07111F,#0B1426_52%,#0D1E1A)] text-white shadow-[0_16px_40px_rgba(7,20,47,0.16)] transition duration-300 hover:-translate-y-1 lg:col-span-1 lg:row-span-1"
//     >
//       <Link
//         href="/gallery"
//         className="absolute inset-0 z-20"
//         aria-label="Explore more Kota Academy gallery moments"
//       />

//       <div className="relative z-10 text-center">
//         <ImageIcon className="mx-auto h-9 w-9 text-white/82" strokeWidth={1.9} />

//         <p className="mt-4 text-[30px] font-black leading-none">+5</p>

//         <p className="mt-2 text-[14px] font-bold leading-tight text-white/86">
//           More
//           <br />
//           Moments
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// function MobileGalleryPreview({
//   selectedImage,
//   selectedIndex,
//   onSelect,
// }: {
//   selectedImage: GalleryImage;
//   selectedIndex: number;
//   onSelect: (index: number) => void;
// }) {
//   const Icon = selectedImage.icon;
//   const mobileImages = useMemo(() => galleryImages.slice(0, 6), []);

//   return (
//     <motion.div variants={fadeUp} className="mt-9 md:hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedImage.id}
//           initial={{ opacity: 0, scale: 0.985, y: 8 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.985, y: -8 }}
//           transition={{ duration: 0.3, ease: EXPO }}
//           className="relative aspect-[1.18/1] overflow-hidden rounded-[28px] border border-white/80 bg-[#07142F] shadow-[0_24px_70px_rgba(7,20,47,0.14)]"
//         >
//           <Image
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             fill
//             sizes="100vw"
//             className="object-cover"
//             priority
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#05101F]/88 via-[#05101F]/16 to-transparent" />

//           <div className="absolute bottom-0 left-0 right-0 z-10 p-5 text-white">
//             <div className="flex items-end justify-between gap-4">
//               <div className="flex min-w-0 items-end gap-3">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#75B819]/86 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md">
//                   <Icon className="h-7 w-7" strokeWidth={2.25} />
//                 </div>

//                 <div>
//                   <h3 className="text-[22px] font-black leading-tight tracking-[-0.035em]">
//                     {selectedImage.label}
//                   </h3>

//                   <p className="mt-1.5 text-[15px] font-medium leading-6 text-white/86">
//                     {selectedImage.caption}
//                   </p>
//                 </div>
//               </div>

//               <div className="shrink-0 rounded-full border border-[#B5FF3D]/38 bg-[#07142F]/66 px-4 py-2 text-[16px] font-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.24)] backdrop-blur-md">
//                 {selectedIndex + 1} / {galleryImages.length}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         {mobileImages.map((image, index) => (
//           <button
//             key={image.id}
//             type="button"
//             onClick={() => onSelect(index)}
//             aria-label={`Show ${image.label}`}
//             className={`relative h-[112px] w-[92px] shrink-0 snap-start overflow-hidden rounded-2xl border-2 bg-white shadow-[0_12px_28px_rgba(7,20,47,0.08)] transition duration-300 ${
//               selectedIndex === index
//                 ? "border-[#73C614] shadow-[0_12px_34px_rgba(115,198,20,0.25)]"
//                 : "border-white/80"
//             }`}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               sizes="100px"
//               className="object-cover"
//             />

//             {selectedIndex !== index && (
//               <span className="absolute inset-0 bg-white/8" />
//             )}
//           </button>
//         ))}

//         <Link
//           href="/gallery"
//           className="flex h-[112px] w-[92px] shrink-0 snap-start flex-col items-center justify-center rounded-2xl border border-[#E2E8D7] bg-white/82 text-[#3C4860] shadow-[0_12px_28px_rgba(7,20,47,0.06)]"
//         >
//           <ImageIcon className="h-8 w-8 text-[#6B7280]" strokeWidth={1.8} />

//           <span className="mt-3 text-[24px] font-black leading-none text-[#07142F]">
//             +5
//           </span>

//           <span className="mt-1 text-center text-[12px] font-bold leading-tight">
//             More
//             <br />
//             Moments
//           </span>
//         </Link>
//       </div>

//       <div className="mt-3 flex items-center justify-center gap-2">
//         {mobileImages.map((image, index) => (
//           <span
//             key={image.id}
//             className={`h-2.5 rounded-full transition-all duration-300 ${
//               selectedIndex === index ? "w-7 bg-[#3E8618]" : "w-2.5 bg-[#CFD5CC]"
//             }`}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function DesktopSupportStrip() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-5 hidden overflow-hidden rounded-[26px] border border-[#E3EAD8] bg-white/78 p-4 shadow-[0_22px_70px_rgba(7,20,47,0.07)] backdrop-blur-xl md:block"
//     >
//       <div className="grid grid-cols-2 gap-0 lg:grid-cols-6">
//         {supportItems.map((item, index) => (
//           <SupportStripItem
//             key={item.title}
//             item={item}
//             showDivider={index !== supportItems.length - 1}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function SupportStripItem({
//   item,
//   showDivider,
// }: {
//   item: SupportItem;
//   showDivider: boolean;
// }) {
//   const Icon = item.icon;

//   return (
//     <div className="relative flex items-center gap-4 px-4 py-4">
//       <Icon className="h-10 w-10 shrink-0 text-[#2F861B]" strokeWidth={1.9} />

//       <div>
//         <h3 className="text-[15px] font-black leading-tight text-[#07142F]">
//           {item.title}
//         </h3>

//         <p className="mt-1 text-[13px] leading-5 text-[#5B6475]">
//           {item.description}
//         </p>
//       </div>

//       {showDivider && (
//         <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#DDE8D2] lg:block" />
//       )}
//     </div>
//   );
// }

// function MobileSupportCard() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-7 rounded-[28px] border border-[#E3EAD8] bg-white/78 p-5 shadow-[0_22px_70px_rgba(7,20,47,0.075)] backdrop-blur-xl md:hidden"
//     >
//       <div className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-10 bg-[#4E9417]/60" />
//         <h3 className="text-center text-[24px] font-black leading-tight tracking-[-0.035em] text-[#07142F]">
//           Built for focused preparation
//         </h3>
//         <span className="h-px w-10 bg-[#4E9417]/60" />
//       </div>

//       <div className="grid grid-cols-3 gap-0">
//         {mobileSupportItems.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.title}
//               className={`relative flex flex-col items-center px-2 py-4 text-center ${
//                 index < 3 ? "border-b border-[#E2EADA]" : ""
//               } ${index % 3 !== 2 ? "border-r border-[#E2EADA]" : ""}`}
//             >
//               <Icon className="h-8 w-8 text-[#2F861B]" strokeWidth={1.85} />

//               <p className="mt-3 text-[13px] font-black leading-tight text-[#07142F]">
//                 {item.title}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// function GalleryCTA() {
//   return (
//     <motion.div variants={fadeUp} className="mt-8 flex justify-center md:mt-9">
//       <Link
//         href="/gallery"
//         className="group flex h-16 w-full max-w-[430px] items-center justify-center gap-5 rounded-full bg-[linear-gradient(135deg,#B5FF3D_0%,#75C614_48%,#3E9A12_100%)] px-6 text-[22px] font-black tracking-[-0.035em] text-[#07142F] shadow-[0_24px_55px_rgba(78,154,0,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(78,154,0,0.36)] md:h-[68px] md:max-w-[460px]"
//       >
//         <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80 text-white">
//           <ImageIcon className="h-6 w-6" strokeWidth={2.2} />
//         </span>

//         <span>Explore Full Gallery</span>

//         <span className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2F861B] shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition duration-300 group-hover:translate-x-1">
//           <ArrowRight className="h-6 w-6" strokeWidth={2.4} />
//         </span>
//       </Link>
//     </motion.div>
//   );
// }

// function DesktopLightbox({
//   activeIndex,
//   onClose,
//   onPrevious,
//   onNext,
// }: {
//   activeIndex: number | null;
//   onClose: () => void;
//   onPrevious: () => void;
//   onNext: () => void;
// }) {
//   const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

//   return (
//     <AnimatePresence>
//       {activeImage && activeIndex !== null && (
//         <motion.div
//           className="fixed inset-0 z-[100] hidden items-center justify-center bg-[#030915]/82 p-6 backdrop-blur-md md:flex"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Kota Academy gallery preview"
//         >
//           <button
//             type="button"
//             onClick={onClose}
//             className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//             aria-label="Close gallery preview"
//           >
//             <X className="h-6 w-6" strokeWidth={2.2} />
//           </button>

//           <button
//             type="button"
//             onClick={onPrevious}
//             className="absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//             aria-label="Previous image"
//           >
//             <ArrowLeft className="h-7 w-7" strokeWidth={2.2} />
//           </button>

//           <button
//             type="button"
//             onClick={onNext}
//             className="absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//             aria-label="Next image"
//           >
//             <ArrowRight className="h-7 w-7" strokeWidth={2.2} />
//           </button>

//           <motion.div
//             className="relative w-full max-w-[1040px] overflow-hidden rounded-[32px] bg-[#07142F] shadow-[0_36px_110px_rgba(0,0,0,0.48)]"
//             initial={{ opacity: 0, scale: 0.96, y: 16 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.96, y: 16 }}
//             transition={{ duration: 0.28, ease: EXPO }}
//           >
//             <div className="relative aspect-[16/9]">
//               <Image
//                 src={activeImage.src}
//                 alt={activeImage.alt}
//                 fill
//                 sizes="90vw"
//                 className="object-cover"
//                 priority
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#05101F]/86 via-transparent to-transparent" />

//               <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-8 text-white">
//                 <div>
//                   <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#B5FF3D]">
//                     {activeImage.category}
//                   </p>

//                   <h3 className="mt-2 text-[34px] font-black tracking-[-0.04em]">
//                     {activeImage.label}
//                   </h3>

//                   <p className="mt-2 text-[17px] text-white/82">
//                     {activeImage.caption}
//                   </p>
//                 </div>

//                 <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[15px] font-black backdrop-blur-md">
//                   {activeIndex + 1} / {galleryImages.length}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   type Variants,
// } from "framer-motion";
// import {
//   AirVent,
//   ArrowLeft,
//   ArrowRight,
//   BookOpenCheck,
//   Building2,
//   CalendarCheck,
//   Camera,
//   ClipboardCheck,
//   GraduationCap,
//   Headphones,
//   ImageIcon,
//   Monitor,
//   ShieldCheck,
//   UsersRound,
//   X,
//   type LucideIcon,
// } from "lucide-react";

// type GalleryCategory =
//   | "classroom"
//   | "teaching"
//   | "achievement"
//   | "parents"
//   | "campus"
//   | "events"
//   | "testing"
//   | "study";

// type GalleryImage = {
//   id: string;
//   src: string;
//   alt: string;
//   category: GalleryCategory;
//   label: string;
//   caption: string;
//   icon: LucideIcon;
//   desktopClassName: string;
// };

// type SupportItem = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
// };



// const galleryImages: GalleryImage[] = [
//   {
//     id: "classroom-learning",
//     src: "/images/kota-academy/gallery/classroom-image-1.jpeg",
//     alt: "Kota Academy students attending a focused classroom learning session",
//     category: "classroom",
//     label: "Classroom Learning",
//     caption: "Focused batches with regular guidance",
//     icon: Monitor,
//     desktopClassName: "lg:col-span-4 lg:row-span-2",
//   },
//   {
//     id: "faculty-teaching",
//     src: "/images/kota-academy/gallery/classroom-image-2.jpg",
//     alt: "Kota Academy faculty teaching students in class",
//     category: "teaching",
//     label: "Faculty Teaching",
//     caption: "Concept clarity through expert faculty",
//     icon: GraduationCap,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "achievement-moments",
//     src: "/images/kota-academy/gallery/image1.jpeg",
//     alt: "Kota Academy students receiving achievement recognition",
//     category: "achievement",
//     label: "Achievement Moments",
//     caption: "Celebrating hard work and dedication",
//     icon: ShieldCheck,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "parent-counselling",
//     src: "/images/kota-academy/gallery/image2.jpeg",
//     alt: "Parent counselling and guidance session at Kota Academy",
//     category: "parents",
//     label: "Parent Counselling",
//     caption: "Regular interactions for better support",
//     icon: UsersRound,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "focused-study",
//     src: "/images/kota-academy/gallery/image3.jpeg",
//     alt: "Kota Academy students studying in a focused learning setup",
//     category: "study",
//     label: "Focused Study",
//     caption: "Discipline today, success tomorrow",
//     icon: BookOpenCheck,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "campus-branch",
//     src: "/images/kota-academy/gallery/image4.jpeg",
//     alt: "Kota Academy branch building and campus exterior",
//     category: "campus",
//     label: "Our Campus",
//     caption: "A modern space built for learning",
//     icon: Building2,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "events-celebration",
//     src: "/images/kota-academy/gallery/image5.jpeg",
//     alt: "Kota Academy student events and celebration moments",
//     category: "events",
//     label: "Events & Celebrations",
//     caption: "Building memories beyond academics",
//     icon: CalendarCheck,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "test-practice",
//     src: "/images/kota-academy/gallery/image6.jpeg",
//     alt: "Kota Academy students writing tests during practice session",
//     category: "testing",
//     label: "Test & Practice",
//     caption: "Regular tests to track performance",
//     icon: ClipboardCheck,
//     desktopClassName: "lg:col-span-3 lg:row-span-1",
//   },
//   {
//     id: "student-writing",
//     src: "/images/kota-academy/gallery/image7.jpeg",
//     alt: "Kota Academy student writing notes during classroom study",
//     category: "study",
//     label: "Student Practice",
//     caption: "Daily practice with guidance",
//     icon: BookOpenCheck,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "student-group",
//     src: "/images/kota-academy/gallery/image8.jpeg",
//     alt: "Kota Academy students standing together in uniform",
//     category: "events",
//     label: "Student Life",
//     caption: "Learning together with discipline",
//     icon: UsersRound,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "teacher-board",
//     src: "/images/kota-academy/gallery/image9.jpeg",
//     alt: "Kota Academy teacher explaining concepts on board",
//     category: "teaching",
//     label: "Board Teaching",
//     caption: "Clear explanations in class",
//     icon: GraduationCap,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
//   {
//     id: "reception",
//     src: "/images/kota-academy/gallery/image10.jpeg",
//     alt: "Kota Academy reception and student welcome area",
//     category: "campus",
//     label: "Campus Moments",
//     caption: "A welcoming academic space",
//     icon: Building2,
//     desktopClassName: "lg:col-span-2 lg:row-span-1",
//   },
// ];
// const supportItems: SupportItem[] = [
//   {
//     title: "AC Classrooms",
//     description: "Comfortable learning",
//     icon: AirVent,
//   },
//   {
//     title: "Focused Study Setup",
//     description: "Distraction-free environment",
//     icon: Monitor,
//   },
//   {
//     title: "Regular Testing",
//     description: "Performance tracking",
//     icon: ClipboardCheck,
//   },
//   {
//     title: "Premium Study Material",
//     description: "Well-researched content",
//     icon: BookOpenCheck,
//   },
//   {
//     title: "Parent Progress Updates",
//     description: "Stay informed always",
//     icon: UsersRound,
//   },
//   {
//     title: "Doubt-Friendly Support",
//     description: "Concepts made easy",
//     icon: Headphones,
//   },
// ];

// const mobileSupportItems: SupportItem[] = [
//   {
//     title: "AC Classrooms",
//     description: "Comfortable learning",
//     icon: Building2,
//   },
//   {
//     title: "Regular Testing",
//     description: "Performance tracking",
//     icon: ClipboardCheck,
//   },
//   {
//     title: "Study Material",
//     description: "Well-researched",
//     icon: BookOpenCheck,
//   },
//   {
//     title: "Parent Updates",
//     description: "Stay informed",
//     icon: UsersRound,
//   },
//   {
//     title: "Doubt Support",
//     description: "Concepts made easy",
//     icon: Headphones,
//   },
//   {
//     title: "Safe Setup",
//     description: "Disciplined environment",
//     icon: ShieldCheck,
//   },
// ];

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
//       staggerChildren: 0.07,
//       delayChildren: 0.08,
//     },
//   },
// };

// export default function KotaAcademyCampusGallery() {
//   const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

//   const selectedMobileImage = galleryImages[selectedMobileIndex];

//   const closeLightbox = () => setLightboxIndex(null);

//   const goToPrevious = () => {
//     setLightboxIndex((current) => {
//       if (current === null) return current;
//       return current === 0 ? galleryImages.length - 1 : current - 1;
//     });
//   };

//   const goToNext = () => {
//     setLightboxIndex((current) => {
//       if (current === null) return current;
//       return current === galleryImages.length - 1 ? 0 : current + 1;
//     });
//   };

//   useEffect(() => {
//     if (lightboxIndex === null) return;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") closeLightbox();
//       if (event.key === "ArrowLeft") goToPrevious();
//       if (event.key === "ArrowRight") goToNext();
//     };

//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [lightboxIndex]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="campus-gallery"
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

//           <DesktopPhotoWall onOpenLightbox={setLightboxIndex} />

//           <MobileGalleryPreview
//             selectedImage={selectedMobileImage}
//             selectedIndex={selectedMobileIndex}
//             onSelect={setSelectedMobileIndex}
//           />

//           <DesktopSupportStrip />

//           <MobileSupportRail />

//           <GalleryCTA />
//         </motion.div>

//         <DesktopLightbox
//           activeIndex={lightboxIndex}
//           onClose={closeLightbox}
//           onPrevious={goToPrevious}
//           onNext={goToNext}
//         />
//       </section>
//     </MotionConfig>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.12)_1px,transparent_1.45px)] bg-[size:24px_24px] opacity-35" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.36)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(48%_42%_at_8%_12%,black,transparent_70%)]" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.32)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(44%_42%_at_94%_58%,black,transparent_72%)]" />

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

//         <Camera className="h-4 w-4 text-[#2F7D17]" strokeWidth={2.3} />

//         <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#2F7D17] md:text-[13px]">
//           Real Campus Moments
//         </span>

//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[500px] text-balance text-[38px] font-black leading-[1.02] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[900px] md:text-[58px] lg:text-[66px] xl:max-w-[1100px] xl:text-[72px]">
//         Inside Kota Academy’s Learning{" "}
//         <span className="text-[#2F861B]">Environment</span>
//       </h2>

//       <p className="mx-auto mt-6 max-w-[470px] text-[16px] leading-8 text-[#5B6475] md:max-w-[820px] md:text-[18px]">
//         Explore real classrooms, student moments, faculty guidance, parent
//         interactions, and achievement celebrations from Kota Academy.
//       </p>
//     </motion.div>
//   );
// }

// function DesktopPhotoWall({
//   onOpenLightbox,
// }: {
//   onOpenLightbox: (index: number) => void;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-12 hidden overflow-hidden rounded-[32px] border border-[#E3EAD8] bg-white/78 p-3 shadow-[0_24px_80px_rgba(7,20,47,0.08)] backdrop-blur-xl lg:block"
//     >
//       <div className="grid auto-rows-[190px] grid-cols-12 gap-3 xl:auto-rows-[210px]">
//         {galleryImages.map((image, index) => (
//           <GalleryTile
//             key={image.id}
//             image={image}
//             index={index}
//             onOpenLightbox={onOpenLightbox}
//           />
//         ))}

//         <MoreMomentsTile />
//       </div>
//     </motion.div>
//   );
// }

// function GalleryTile({
//   image,
//   index,
//   onOpenLightbox,
// }: {
//   image: GalleryImage;
//   index: number;
//   onOpenLightbox: (index: number) => void;
// }) {
//   const Icon = image.icon;

//   return (
//     <motion.button
//       type="button"
//       variants={fadeUp}
//       onClick={() => onOpenLightbox(index)}
//       className={`group relative overflow-hidden rounded-[22px] bg-[#07142F] text-left shadow-[0_12px_30px_rgba(7,20,47,0.08)] outline-none ring-offset-2 transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#8AD31D] ${image.desktopClassName}`}
//     >
//       <Image
//         src={image.src}
//         alt={image.alt}
//         fill
//         sizes="(max-width: 1280px) 30vw, 24vw"
//         className="object-cover transition duration-[650ms] ease-out group-hover:scale-[1.055]"
//         priority={index === 0}
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-[#05101F]/86 via-[#05101F]/18 to-transparent opacity-95 transition duration-300 group-hover:opacity-100" />

//       <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white lg:p-5">
//         <div className="flex items-end gap-3">
//           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#75B819]/86 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md">
//             <Icon className="h-5 w-5" strokeWidth={2.25} />
//           </div>

//           <div>
//             <h3 className="text-[16px] font-black leading-tight tracking-[-0.025em] lg:text-[18px]">
//               {image.label}
//             </h3>

//             <p className="mt-1 text-[12.5px] font-medium leading-5 text-white/86 lg:text-[13.5px]">
//               {image.caption}
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.button>
//   );
// }

// function MoreMomentsTile() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative flex items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(181,255,61,0.16),transparent_35%),linear-gradient(145deg,#07111F,#0B1426_52%,#0D1E1A)] text-white shadow-[0_16px_40px_rgba(7,20,47,0.16)] transition duration-300 hover:-translate-y-1 lg:col-span-1 lg:row-span-1"
//     >
//       <Link
//         href="/gallery"
//         className="absolute inset-0 z-20"
//         aria-label="Explore more Kota Academy gallery moments"
//       />

//       <div className="relative z-10 text-center">
//         <ImageIcon
//           className="mx-auto h-9 w-9 text-white/82"
//           strokeWidth={1.9}
//         />

//         <p className="mt-4 text-[30px] font-black leading-none">+5</p>

//         <p className="mt-2 text-[14px] font-bold leading-tight text-white/86">
//           More
//           <br />
//           Moments
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// function MobileGalleryPreview({
//   selectedImage,
//   selectedIndex,
//   onSelect,
// }: {
//   selectedImage: GalleryImage;
//   selectedIndex: number;
//   onSelect: (index: number) => void;
// }) {
//   const mobileImages = useMemo(() => galleryImages.slice(0, 6), []);

//   return (
//     <motion.div variants={fadeUp} className="mt-9 lg:hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedImage.id}
//           initial={{ opacity: 0, scale: 0.985, y: 8 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.985, y: -8 }}
//           transition={{ duration: 0.3, ease: EXPO }}
//           className="relative aspect-[1.18/1] overflow-hidden rounded-[28px] border border-white/80 bg-[#07142F] shadow-[0_24px_70px_rgba(7,20,47,0.14)]"
//         >
//           <Image
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             fill
//             sizes="100vw"
//             className="object-cover"
//             priority
//           />

//           <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05101F]/50 to-transparent" />

//           <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/30 bg-[#07142F]/58 px-3.5 py-2 text-[13px] font-black text-white shadow-[0_12px_26px_rgba(0,0,0,0.22)] backdrop-blur-md">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#B5FF3D]" />
//             {selectedIndex + 1}
//             <span className="text-white/45">/</span>
//             {galleryImages.length}
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         {mobileImages.map((image, index) => (
//           <button
//             key={image.id}
//             type="button"
//             onClick={() => onSelect(index)}
//             aria-label={`Show ${image.label}`}
//             className={`relative h-[112px] w-[92px] shrink-0 snap-start overflow-hidden rounded-2xl border-2 bg-white shadow-[0_12px_28px_rgba(7,20,47,0.08)] transition duration-300 ${
//               selectedIndex === index
//                 ? "border-[#73C614] shadow-[0_12px_34px_rgba(115,198,20,0.25)]"
//                 : "border-white/80"
//             }`}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               sizes="100px"
//               className="object-cover"
//             />
//           </button>
//         ))}

//         <Link
//           href="/gallery"
//           className="flex h-[112px] w-[92px] shrink-0 snap-start flex-col items-center justify-center rounded-2xl border border-[#E2E8D7] bg-white/86 text-[#3C4860] shadow-[0_12px_28px_rgba(7,20,47,0.06)]"
//         >
//           <ImageIcon className="h-8 w-8 text-[#6B7280]" strokeWidth={1.8} />

//           <span className="mt-3 text-[24px] font-black leading-none text-[#07142F]">
//             +5
//           </span>

//           <span className="mt-1 text-center text-[12px] font-bold leading-tight">
//             More
//             <br />
//             Moments
//           </span>
//         </Link>
//       </div>

//       <div className="mt-3 flex items-center justify-center gap-2">
//         {mobileImages.map((image, index) => (
//           <span
//             key={image.id}
//             className={`h-2.5 rounded-full transition-all duration-300 ${
//               selectedIndex === index
//                 ? "w-7 bg-[#3E8618]"
//                 : "w-2.5 bg-[#CFD5CC]"
//             }`}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function DesktopSupportStrip() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-5 hidden overflow-hidden rounded-[28px] border border-[#E3EAD8] bg-white/80 p-5 shadow-[0_22px_70px_rgba(7,20,47,0.07)] backdrop-blur-xl lg:block"
//     >
//       <div className="grid grid-cols-6 gap-0">
//         {supportItems.map((item, index) => (
//           <SupportStripItem
//             key={item.title}
//             item={item}
//             showDivider={index !== supportItems.length - 1}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function SupportStripItem({
//   item,
//   showDivider,
// }: {
//   item: SupportItem;
//   showDivider: boolean;
// }) {
//   const Icon = item.icon;

//   return (
//     <div className="relative flex items-center gap-4 px-4 py-4">
//       <Icon className="h-11 w-11 shrink-0 text-[#2F861B]" strokeWidth={1.9} />

//       <div>
//         <h3 className="text-[15px] font-black leading-tight text-[#07142F]">
//           {item.title}
//         </h3>

//         <p className="mt-1 text-[13px] leading-5 text-[#5B6475]">
//           {item.description}
//         </p>
//       </div>

//       {showDivider && (
//         <span className="absolute right-0 top-1/2 h-12 w-px -translate-y-1/2 bg-[#DDE8D2]" />
//       )}
//     </div>
//   );
// }

// function MobileSupportRail() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-6 rounded-[26px] border border-[#E3EAD8] bg-white/82 p-4 shadow-[0_20px_60px_rgba(7,20,47,0.07)] backdrop-blur-xl lg:hidden"
//     >
//       <div className="mb-4 flex items-center justify-between gap-4">
//         <h3 className="text-[20px] font-black leading-tight tracking-[-0.035em] text-[#07142F]">
//           Built for focused preparation
//         </h3>

//         <span className="h-px flex-1 bg-[#4E9417]/35" />
//       </div>

//       <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         {mobileSupportItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.title}
//               className="flex min-w-[138px] snap-start items-center gap-3 rounded-2xl border border-[#DCEBD0] bg-[#FAFFF4] px-3.5 py-3 shadow-[0_10px_24px_rgba(7,20,47,0.045)]"
//             >
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF9D6] text-[#2F861B]">
//                 <Icon className="h-5 w-5" strokeWidth={2} />
//               </div>

//               <p className="text-[13px] font-black leading-tight text-[#07142F]">
//                 {item.title}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// function GalleryCTA() {
//   return (
//     <motion.div variants={fadeUp} className="mt-6 flex justify-center md:mt-9">
//       <Link
//         href="/gallery"
//         className="group flex h-16 w-full max-w-[430px] items-center justify-center gap-5 rounded-full bg-[linear-gradient(135deg,#B5FF3D_0%,#75C614_48%,#3E9A12_100%)] px-6 text-[22px] font-black tracking-[-0.035em] text-[#07142F] shadow-[0_24px_55px_rgba(78,154,0,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(78,154,0,0.36)] md:h-[68px] md:max-w-[460px]"
//       >
//         <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80 text-white">
//           <ImageIcon className="h-6 w-6" strokeWidth={2.2} />
//         </span>

//         <span>Explore Full Gallery</span>

//         <span className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2F861B] shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition duration-300 group-hover:translate-x-1">
//           <ArrowRight className="h-6 w-6" strokeWidth={2.4} />
//         </span>
//       </Link>
//     </motion.div>
//   );
// }

// function DesktopLightbox({
//   activeIndex,
//   onClose,
//   onPrevious,
//   onNext,
// }: {
//   activeIndex: number | null;
//   onClose: () => void;
//   onPrevious: () => void;
//   onNext: () => void;
// }) {
//   const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

//   return (
//     <AnimatePresence>
//       {activeImage && activeIndex !== null && (
//         <motion.div
//           className="fixed inset-0 z-[100] hidden items-center justify-center bg-[#030915]/76 p-6 backdrop-blur-md md:flex"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Kota Academy gallery preview"
//         >
//           <button
//             type="button"
//             onClick={onClose}
//             className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//             aria-label="Close gallery preview"
//           >
//             <X className="h-6 w-6" strokeWidth={2.2} />
//           </button>

//           <button
//             type="button"
//             onClick={onPrevious}
//             className="absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//             aria-label="Previous image"
//           >
//             <ArrowLeft className="h-7 w-7" strokeWidth={2.2} />
//           </button>

//           <button
//             type="button"
//             onClick={onNext}
//             className="absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D]"
//             aria-label="Next image"
//           >
//             <ArrowRight className="h-7 w-7" strokeWidth={2.2} />
//           </button>

//           <motion.div
//             className="relative w-full max-w-[1040px] overflow-hidden rounded-[32px] bg-[#07142F] shadow-[0_36px_110px_rgba(0,0,0,0.48)]"
//             initial={{ opacity: 0, scale: 0.96, y: 16 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.96, y: 16 }}
//             transition={{ duration: 0.28, ease: EXPO }}
//           >
//             <div className="relative aspect-[16/9] max-h-[78vh]">
//               <Image
//                 src={activeImage.src}
//                 alt={activeImage.alt}
//                 fill
//                 sizes="90vw"
//                 className="object-cover"
//                 priority
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#05101F]/78 via-[#05101F]/18 to-transparent" />

//               <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-8 text-white">
//                 <div>
//                   <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#B5FF3D]">
//                     {activeImage.category}
//                   </p>

//                   <h3 className="mt-2 text-[34px] font-black tracking-[-0.04em]">
//                     {activeImage.label}
//                   </h3>

//                   <p className="mt-2 text-[17px] text-white/82">
//                     {activeImage.caption}
//                   </p>
//                 </div>

//                 <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[15px] font-black backdrop-blur-md">
//                   {activeIndex + 1} / {galleryImages.length}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   BadgeCheck,
//   Camera,
//   ImageIcon,
//   X,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data — curated "best of" for the homepage. Full set lives on /gallery.    */
// /*  Order follows the student journey: Campus → Class → Faculty → Test →      */
// /*  Achievement → Parents. `caption` is a factual anchor shown only on the    */
// /*  larger tiles; small tiles stay clean (caption returns in the lightbox).   */
// /* -------------------------------------------------------------------------- */

// type GalleryImage = {
//   id: string;
//   src: string;
//   alt: string;
//   label: string;
//   caption: string;
//   span: string; // desktop bento span
//   showLabelOnTile: boolean; // hero/large tiles only
// };

// const galleryImages: GalleryImage[] = [
//   {
//     id: "classroom-learning",
//     src: "/images/kota-academy/gallery/classroom-image-1.jpeg",
//     alt: "Students in a live classroom session at Kota Academy",
//     label: "Classroom Learning",
//     caption: "Focused batches · Om Tower, Alpha-1",
//     span: "lg:col-span-6 lg:row-span-2",
//     showLabelOnTile: true,
//   },
//   {
//     id: "faculty-teaching",
//     src: "/images/kota-academy/gallery/classroom-image-2.jpg",
//     alt: "Faculty explaining concepts on the board at Kota Academy",
//     label: "Faculty Teaching",
//     caption: "Concept clarity, in person",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: true,
//   },
//   {
//     id: "test-practice",
//     src: "/images/kota-academy/gallery/image6.jpeg",
//     alt: "Students writing a weekly test at Kota Academy",
//     label: "Weekly Testing",
//     caption: "Regular tests, tracked",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: true,
//   },
//   {
//     id: "achievement-moments",
//     src: "/images/kota-academy/gallery/image1.jpeg",
//     alt: "Students felicitated at a Kota Academy achievement ceremony",
//     label: "Achievement Day",
//     caption: "Felicitating our toppers",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: true,
//   },
//   {
//     id: "parent-counselling",
//     src: "/images/kota-academy/gallery/image2.jpeg",
//     alt: "Parent counselling session at Kota Academy",
//     label: "Parent Counselling",
//     caption: "Regular parent interactions",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: true,
//   },
//   // quiet supporting photos — no on-tile labels
//   {
//     id: "campus-branch",
//     src: "/images/kota-academy/gallery/image4.jpeg",
//     alt: "Kota Academy campus building exterior in Greater Noida",
//     label: "Our Campus",
//     caption: "Om Tower · Greater Noida",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: false,
//   },
//   {
//     id: "focused-study",
//     src: "/images/kota-academy/gallery/image3.jpeg",
//     alt: "Students in a focused study session at Kota Academy",
//     label: "Focused Study",
//     caption: "A distraction-free setup",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: false,
//   },
//   {
//     id: "student-group",
//     src: "/images/kota-academy/gallery/image8.jpeg",
//     alt: "Kota Academy students together in uniform",
//     label: "Student Life",
//     caption: "Learning together, with discipline",
//     span: "lg:col-span-3 lg:row-span-1",
//     showLabelOnTile: false,
//   },
// ];

// const TOTAL_GALLERY = 24; // real count lives on /gallery; drives the "+N" tile
// const moreCount = Math.max(TOTAL_GALLERY - galleryImages.length, 0);

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
//   visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function CampusGallery() {
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

//   const close = () => setLightboxIndex(null);
//   const prev = () =>
//     setLightboxIndex((c) => (c === null ? c : c === 0 ? galleryImages.length - 1 : c - 1));
//   const next = () =>
//     setLightboxIndex((c) => (c === null ? c : c === galleryImages.length - 1 ? 0 : c + 1));

//   useEffect(() => {
//     if (lightboxIndex === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", onKey);
//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [lightboxIndex]);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="campus-gallery"
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
//           <DesktopWall onOpen={setLightboxIndex} />
//           <MobileWall onOpen={setLightboxIndex} />
//         </motion.div>

//         <Lightbox index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
//       </section>
//     </MotionConfig>
//   );
// }

// function DotGridBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(50%_45%_at_88%_8%,black,transparent_70%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(45%_40%_at_8%_95%,black,transparent_72%)]" />
//       <div className="pointer-events-none absolute left-1/2 top-12 h-[320px] w-[440px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
//     </>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Header — with an authenticity chip                                        */
// /* -------------------------------------------------------------------------- */

// function Header() {
//   return (
//     <motion.div variants={fadeUp} className="text-center">
//       <div className="mb-5 flex items-center justify-center gap-3">
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//         <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           <Camera className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
//           Real Campus Moments
//         </span>
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//       </div>

//       <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
//         Inside Kota Academy’s Learning{" "}
//         <span className="text-[#3E9A12]">Environment</span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
//         Real classrooms, faculty guidance, weekly testing, parent interactions and
//         achievement days — straight from our Greater Noida campus.
//       </p>

//       <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-[#CDEBB0] bg-[#EDF8DD] px-3.5 py-1.5 text-[12px] font-semibold text-[#2C7A12]">
//         <BadgeCheck className="h-4 w-4" strokeWidth={2.2} aria-hidden />
//         Real, unedited photos · Greater Noida
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Desktop bento wall (lg+)                                                  */
// /* -------------------------------------------------------------------------- */

// function DesktopWall({ onOpen }: { onOpen: (i: number) => void }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mt-12 hidden grid-cols-12 gap-3 [grid-auto-rows:200px] lg:grid xl:[grid-auto-rows:212px]"
//     >
//       {galleryImages.map((img, i) => (
//         <Tile key={img.id} img={img} index={i} onOpen={onOpen} />
//       ))}
//       <MoreTile />
//     </motion.div>
//   );
// }

// function Tile({
//   img,
//   index,
//   onOpen,
// }: {
//   img: GalleryImage;
//   index: number;
//   onOpen: (i: number) => void;
// }) {
//   return (
//     <motion.button
//       type="button"
//       variants={fadeUp}
//       onClick={() => onOpen(index)}
//       aria-label={`Open ${img.label}`}
//       className={`group relative overflow-hidden rounded-2xl bg-[#0B1B33] text-left outline-none ring-offset-2 transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#8AD31D] ${img.span}`}
//     >
//       <Image
//         src={img.src}
//         alt={img.alt}
//         fill
//         sizes="(max-width: 1280px) 40vw, 30vw"
//         className="object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.05]"
//         priority={index === 0}
//       />

//       {img.showLabelOnTile ? (
//         <>
//           {/* captioned hero/large tile */}
//           <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,21,33,0.82)_100%)]" />
//           <div className="absolute inset-x-0 bottom-0 p-4 text-white">
//             <h3 className="text-[15px] font-bold leading-tight tracking-[-0.01em] md:text-[16px]">
//               {img.label}
//             </h3>
//             <p className="mt-0.5 text-[12px] font-medium text-white/80">{img.caption}</p>
//           </div>
//         </>
//       ) : (
//         /* quiet supporting tile — label only on hover */
//         <>
//           <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(7,21,33,0.7)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//           <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//             <h3 className="text-[14px] font-bold leading-tight">{img.label}</h3>
//           </div>
//         </>
//       )}
//     </motion.button>
//   );
// }

// function MoreTile() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(181,255,61,0.16),transparent_38%),linear-gradient(150deg,#07111F,#0B1426_52%,#0B2118)] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-3"
//     >
//       <Link
//         href="/gallery"
//         className="absolute inset-0 z-20"
//         aria-label={`Explore ${moreCount} more Kota Academy photos`}
//       />
//       <div className="relative z-10 text-center">
//         <ImageIcon className="mx-auto h-8 w-8 text-white/80" strokeWidth={1.9} aria-hidden />
//         <p className="mt-3 text-[26px] font-extrabold leading-none text-[#B5FF3D]">+{moreCount}</p>
//         <p className="mt-1.5 text-[12.5px] font-semibold text-white/85">More moments</p>
//         <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-white/70 transition-transform duration-300 group-hover:translate-x-0.5">
//           View full gallery
//           <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Mobile wall (<lg) — 2-col bento, tap to open lightbox                     */
// /* -------------------------------------------------------------------------- */

// function MobileWall({ onOpen }: { onOpen: (i: number) => void }) {
//   const featured = galleryImages[0];
//   const rest = galleryImages.slice(1, 5); // keep homepage tight on mobile

//   return (
//     <motion.div variants={fadeUp} className="mt-9 lg:hidden">
//       {/* featured */}
//       <button
//         type="button"
//         onClick={() => onOpen(0)}
//         aria-label={`Open ${featured.label}`}
//         className="group relative block aspect-[1.3/1] w-full overflow-hidden rounded-2xl bg-[#0B1B33] text-left"
//       >
//         <Image src={featured.src} alt={featured.alt} fill sizes="100vw" className="object-cover" priority />
//         <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(7,21,33,0.82)_100%)]" />
//         <div className="absolute inset-x-0 bottom-0 p-4 text-white">
//           <h3 className="text-[16px] font-bold leading-tight">{featured.label}</h3>
//           <p className="mt-0.5 text-[12px] text-white/80">{featured.caption}</p>
//         </div>
//       </button>

//       {/* 2x2 supporting */}
//       <div className="mt-3 grid grid-cols-2 gap-3">
//         {rest.map((img, i) => (
//           <button
//             key={img.id}
//             type="button"
//             onClick={() => onOpen(i + 1)}
//             aria-label={`Open ${img.label}`}
//             className="group relative aspect-[1.2/1] overflow-hidden rounded-2xl bg-[#0B1B33] text-left"
//           >
//             <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
//             <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,21,33,0.75)_100%)]" />
//             <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
//               <h3 className="text-[12px] font-bold leading-tight">{img.label}</h3>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* single exit */}
//       <Link
//         href="/gallery"
//         className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(150deg,#07111F,#0B2118)] px-4 py-3.5 text-white"
//       >
//         <ImageIcon className="h-5 w-5 text-[#B5FF3D]" strokeWidth={2} aria-hidden />
//         <span className="text-[14px] font-semibold">
//           +{moreCount} more moments — view full gallery
//         </span>
//         <ArrowRight className="h-4 w-4 text-[#B5FF3D]" strokeWidth={2.4} aria-hidden />
//       </Link>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Lightbox — desktop + mobile                                               */
// /* -------------------------------------------------------------------------- */

// function Lightbox({
//   index,
//   onClose,
//   onPrev,
//   onNext,
// }: {
//   index: number | null;
//   onClose: () => void;
//   onPrev: () => void;
//   onNext: () => void;
// }) {
//   const img = index === null ? null : galleryImages[index];

//   return (
//     <AnimatePresence>
//       {img && index !== null && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030915]/80 p-4 backdrop-blur-md sm:p-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Gallery preview"
//         >
//           <button
//             type="button"
//             onClick={onClose}
//             className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] sm:right-6 sm:top-6"
//             aria-label="Close"
//           >
//             <X className="h-5 w-5" strokeWidth={2.2} />
//           </button>

//           <button
//             type="button"
//             onClick={(e) => { e.stopPropagation(); onPrev(); }}
//             className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] sm:left-6"
//             aria-label="Previous image"
//           >
//             <ArrowLeft className="h-6 w-6" strokeWidth={2.2} />
//           </button>

//           <button
//             type="button"
//             onClick={(e) => { e.stopPropagation(); onNext(); }}
//             className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] sm:right-6"
//             aria-label="Next image"
//           >
//             <ArrowRight className="h-6 w-6" strokeWidth={2.2} />
//           </button>

//           <motion.div
//             className="relative w-full max-w-[1040px] overflow-hidden rounded-2xl bg-[#07142F] shadow-[0_36px_110px_rgba(0,0,0,0.5)]"
//             initial={{ opacity: 0, scale: 0.96, y: 16 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.96, y: 16 }}
//             transition={{ duration: 0.28, ease: EXPO }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="relative aspect-[16/10] max-h-[80vh] sm:aspect-[16/9]">
//               <Image src={img.src} alt={img.alt} fill sizes="90vw" className="object-cover" priority />
//               <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,16,31,0.8)_100%)]" />
//               <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
//                 <div>
//                   <h3 className="text-[20px] font-bold tracking-[-0.02em] sm:text-[26px]">{img.label}</h3>
//                   <p className="mt-1 text-[13px] text-white/80 sm:text-[15px]">{img.caption}</p>
//                 </div>
//                 <div className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold backdrop-blur-md">
//                   {index + 1} / {galleryImages.length}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ImageIcon,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data — curated "best of" for the homepage. Full set lives on /gallery.    */
/*  Order follows the student journey: Campus → Class → Faculty → Test →      */
/*  Achievement → Parents. `caption` is a factual anchor shown only on the    */
/*  larger tiles; small tiles stay clean (caption returns in the lightbox).   */
/* -------------------------------------------------------------------------- */

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  label: string;
  caption: string;
  span: string; // desktop bento span
  showLabelOnTile: boolean; // hero/large tiles only
};

const galleryImages: GalleryImage[] = [
  {
    id: "classroom-learning",
    src: "/images/kota-academy/gallery/classroom-image-1.jpeg",
    alt: "Students in a live classroom session at Kota Academy",
    label: "Classroom Learning",
    caption: "Focused batches · Om Tower, Alpha-1",
    span: "lg:col-span-6 lg:row-span-2",
    showLabelOnTile: true,
  },
  {
    id: "faculty-teaching",
    src: "/images/kota-academy/gallery/classroom-image-2.jpg",
    alt: "Faculty explaining concepts on the board at Kota Academy",
    label: "Faculty Teaching",
    caption: "Concept clarity, in person",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: true,
  },
  {
    id: "test-practice",
    src: "/images/kota-academy/gallery/image1.jpeg",
    alt: "Students writing a weekly test at Kota Academy",
    label: "Weekly Testing",
    caption: "Regular tests, tracked",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: true,
  },
  {
    id: "achievement-moments",
    src: "/images/kota-academy/gallery/image5.jpeg",
    alt: "Students felicitated at a Kota Academy achievement ceremony",
    label: "Achievement Day",
    caption: "Felicitating our toppers",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: true,
  },
  {
    id: "parent-counselling",
    src: "/images/kota-academy/gallery/image2.jpeg",
    alt: "Parent counselling session at Kota Academy",
    label: "Parent Counselling",
    caption: "Regular parent interactions",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: true,
  },
  // quiet supporting photos — no on-tile labels
  {
    id: "campus-branch",
    src: "/images/kota-academy/gallery/image4.jpeg",
    alt: "Kota Academy campus building exterior in Greater Noida",
    label: "Our Campus",
    caption: "Om Tower · Greater Noida",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: false,
  },
  {
    id: "focused-study",
    src: "/images/kota-academy/gallery/image3.jpeg",
    alt: "Students in a focused study session at Kota Academy",
    label: "Focused Study",
    caption: "A distraction-free setup",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: false,
  },
  {
    id: "student-group",
    src: "/images/kota-academy/gallery/image4.jpeg",
    alt: "Kota Academy students together in uniform",
    label: "Student Life",
    caption: "Learning together, with discipline",
    span: "lg:col-span-3 lg:row-span-1",
    showLabelOnTile: false,
  },
];

const TOTAL_GALLERY = 24; // real count lives on /gallery; drives the "+N" tile
const moreCount = Math.max(TOTAL_GALLERY - galleryImages.length, 0);


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

export default function CampusGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((c) => (c === null ? c : c === 0 ? galleryImages.length - 1 : c - 1));
  const next = () =>
    setLightboxIndex((c) => (c === null ? c : c === galleryImages.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="campus-gallery"
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
          <JourneyRibbon />
          <DesktopWall onOpen={setLightboxIndex} />
          <MobileWall onOpen={setLightboxIndex} />
        </motion.div>

        <Lightbox index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} onSelect={setLightboxIndex} />
      </section>
    </MotionConfig>
  );
}

function DotGridBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.5)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(50%_45%_at_88%_8%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.45)_1px,transparent_1.5px)] bg-[size:26px_26px] [mask-image:radial-gradient(45%_40%_at_8%_95%,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-[320px] w-[440px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/10 blur-[120px]" />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Header — with an authenticity chip                                        */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-9 bg-[#4E9417]/60" />
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
          <Camera className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
          Real Campus Moments
        </span>
        <span className="h-px w-9 bg-[#4E9417]/60" />
      </div>

      <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
        Inside Kota Academy’s Learning{" "}
        <span className="text-[#3E9A12]">Environment</span>
      </h2>

      <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
        Real classrooms, faculty guidance, weekly testing, parent interactions and
        achievement days — straight from our Greater Noida campus.
      </p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Journey ribbon — makes the wall's Campus→…→Achievement order intentional   */
/* -------------------------------------------------------------------------- */

function JourneyRibbon() {
  const stages = ["Campus", "Classroom", "Faculty", "Testing", "Achievement"];
  return (
    <motion.div variants={fadeUp} className="mt-7 flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-[#E4E7DA] bg-white/60 px-4 py-2 backdrop-blur-sm">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span className="text-[12px] font-semibold tracking-[-0.005em] text-[#3C4860]">{s}</span>
            {i !== stages.length - 1 && (
              <span className="h-1 w-1 rounded-full bg-[#9BBE7F]" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop bento wall (lg+)                                                  */
/* -------------------------------------------------------------------------- */

/* Image with a graceful fallback: if a file is missing (common while real
   photos are still being swapped in), show a labelled placeholder instead of
   a stark empty navy box. */
function GalleryImg({
  img,
  sizes,
  priority = false,
  layoutId,
}: {
  img: GalleryImage;
  sizes: string;
  priority?: boolean;
  layoutId?: string;
}) {
  const [failed, setFailed] = useState(false);

  const inner = failed ? (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_50%_35%,#13283C,#0A1726)] text-center">
      <Camera className="h-6 w-6 text-white/35" strokeWidth={1.8} aria-hidden />
      <span className="px-3 text-[11px] font-medium text-white/45">
        {img.label}
        <br />
        photo coming soon
      </span>
    </div>
  ) : (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.05]"
      priority={priority}
    />
  );

  if (layoutId) {
    return (
      <motion.div layoutId={layoutId} className="absolute inset-0">
        {inner}
      </motion.div>
    );
  }
  return inner;
}

function DesktopWall({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-12 hidden grid-cols-12 gap-3 [grid-auto-rows:200px] lg:grid xl:[grid-auto-rows:212px]"
    >
      {galleryImages.map((img, i) => (
        <Tile key={img.id} img={img} index={i} onOpen={onOpen} />
      ))}
      <MoreTile />
    </motion.div>
  );
}

function Tile({
  img,
  index,
  onOpen,
}: {
  img: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <motion.button
      type="button"
      variants={fadeUp}
      onClick={() => onOpen(index)}
      aria-label={`Open ${img.label}`}
      className={`group relative overflow-hidden rounded-2xl bg-[#0B1B33] text-left outline-none ring-offset-2 transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#8AD31D] ${img.span}`}
    >
      <GalleryImg img={img} sizes="(max-width: 1280px) 40vw, 30vw" priority={index === 0} layoutId={`tile-${img.id}`} />

      {/* inner hairline for material depth */}
      <span className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/10" aria-hidden />

      {img.showLabelOnTile ? (
        <>
          {/* captioned hero/large tile */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_42%,rgba(7,21,33,0.85)_100%)]" />
          {/* thin lime accent above caption */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
            <span className="mb-2 block h-0.5 w-7 rounded-full bg-[#B5FF3D]" aria-hidden />
            <h3 className="text-[15px] font-bold leading-tight tracking-[-0.01em] md:text-[16px]">
              {img.label}
            </h3>
            <p className="mt-0.5 text-[12px] font-medium text-white/80">{img.caption}</p>
          </div>
        </>
      ) : (
        /* quiet supporting tile — label only on hover */
        <>
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_60%,rgba(7,21,33,0.72)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[14px] font-bold leading-tight">{img.label}</h3>
          </div>
        </>
      )}
    </motion.button>
  );
}

function MoreTile() {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#C8FF55_0%,#7FCB1E_48%,#4E9C13_100%)] text-[#0A2410] shadow-[0_18px_44px_-22px_rgba(78,156,19,0.7)] transition-transform duration-300 hover:-translate-y-1 lg:col-span-3"
    >
      <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/25 blur-2xl" aria-hidden />
      <Link
        href="/gallery"
        className="absolute inset-0 z-20"
        aria-label={`Explore ${moreCount} more Kota Academy photos`}
      />
      <div className="relative z-10 text-center">
        <ImageIcon className="mx-auto h-8 w-8 text-[#0A2410]/75" strokeWidth={1.9} aria-hidden />
        <p className="mt-3 text-[28px] font-extrabold leading-none text-[#0A2410]">+{moreCount}</p>
        <p className="mt-1.5 text-[12.5px] font-bold text-[#13340A]">More moments</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#13340A] transition-transform duration-300 group-hover:translate-x-0.5">
          View Full Gallery
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
        </span>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile wall (<lg) — 2-col bento, tap to open lightbox                     */
/* -------------------------------------------------------------------------- */

function MobileWall({ onOpen }: { onOpen: (i: number) => void }) {
  const featured = galleryImages[0];
  const rest = galleryImages.slice(1, 5); // keep homepage tight on mobile

  return (
    <motion.div variants={fadeUp} className="mt-9 lg:hidden">
      {/* featured */}
      <button
        type="button"
        onClick={() => onOpen(0)}
        aria-label={`Open ${featured.label}`}
        className="group relative block aspect-[1.3/1] w-full overflow-hidden rounded-2xl bg-[#0B1B33] text-left"
      >
        <GalleryImg img={featured} sizes="100vw" priority layoutId={`tile-${featured.id}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(7,21,33,0.82)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-[16px] font-bold leading-tight">{featured.label}</h3>
          <p className="mt-0.5 text-[12px] text-white/80">{featured.caption}</p>
        </div>
      </button>

      {/* 2x2 supporting */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {rest.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => onOpen(i + 1)}
            aria-label={`Open ${img.label}`}
            className="group relative aspect-[1.2/1] overflow-hidden rounded-2xl bg-[#0B1B33] text-left"
          >
            <GalleryImg img={img} sizes="50vw" layoutId={`tile-${img.id}`} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,21,33,0.75)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-2.5 text-white">
              <h3 className="text-[12px] font-bold leading-tight">{img.label}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* single exit */}
      <Link
        href="/gallery"
        className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#C8FF55,#5FB016)] px-4 py-3.5 text-[#0A2410] shadow-[0_16px_36px_-18px_rgba(78,156,19,0.7)]"
      >
        <ImageIcon className="h-5 w-5 text-[#0A2410]" strokeWidth={2} aria-hidden />
        {/* <span className="text-[14px] font-bold">
          +{moreCount} more moments — view full gallery
        </span> */}

         <span className="text-[14px] font-bold">
         View Full Gallery
        </span>
        <ArrowRight className="h-4 w-4 text-[#0A2410]" strokeWidth={2.4} aria-hidden />
      </Link>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Lightbox — desktop + mobile                                               */
/* -------------------------------------------------------------------------- */

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}) {
  const img = index === null ? null : galleryImages[index];

  return (
    <AnimatePresence>
      {img && index !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030915]/80 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2.2} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] sm:left-6"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={2.2} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5FF3D] sm:right-6"
            aria-label="Next image"
          >
            <ArrowRight className="h-6 w-6" strokeWidth={2.2} />
          </button>

          <motion.div
            className="relative w-full max-w-[1040px] overflow-hidden rounded-2xl bg-[#07142F] shadow-[0_36px_110px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.28, ease: EXPO }}
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) onNext();
              else if (info.offset.x > 60) onPrev();
            }}
          >
            <div className="relative aspect-[16/10] max-h-[72vh] cursor-grab touch-pan-y select-none active:cursor-grabbing sm:aspect-[16/9]">
              {/* shared-element: morphs from the grid tile */}
              <motion.div layoutId={`tile-${img.id}`} className="absolute inset-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="90vw"
                  draggable={false}
                  className="pointer-events-none object-cover"
                  priority
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,16,31,0.82)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                <div>
                  <span className="mb-2 block h-0.5 w-7 rounded-full bg-[#B5FF3D]" aria-hidden />
                  <h3 className="text-[20px] font-bold tracking-[-0.02em] sm:text-[26px]">{img.label}</h3>
                  <p className="mt-1 text-[13px] text-white/80 sm:text-[15px]">{img.caption}</p>
                </div>
                <div className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold backdrop-blur-md">
                  {index + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* thumbnail filmstrip */}
            <div className="flex gap-2 overflow-x-auto bg-[#06101D] p-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {galleryImages.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onSelect(i); }}
                  aria-label={`View ${g.label}`}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                    i === index ? "ring-[#B5FF3D]" : "ring-transparent opacity-55 hover:opacity-100"
                  }`}
                >
                  <Image src={g.src} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}