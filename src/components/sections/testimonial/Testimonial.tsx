// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { motion, MotionConfig, type Variants } from "framer-motion";
// import {
//   ArrowRight,
//   BadgeCheck,
//   BookOpen,
//   GraduationCap,
//   Heart,
//   MessageCircle,
//   Play,
//   Quote,
//   ShieldCheck,
//   Star,
//   UsersRound,
//   Video,
//   type LucideIcon,
// } from "lucide-react";

// type ReviewType = "student" | "parent" | "google";

// type ReviewTab = {
//   id: ReviewType;
//   label: string;
//   mobileLabel: string;
//   icon: LucideIcon | "google";
// };

// type Testimonial = {
//   type: ReviewType;
//   quote: string;
//   author: string;
//   context: string;
//   focus: string;
//   icon: LucideIcon;
// };

// type StoryChip = {
//   label: string;
//   icon: LucideIcon;
// };

// const reviewTabs: ReviewTab[] = [
//   {
//     id: "student",
//     label: "Student Reviews",
//     mobileLabel: "Student Reviews",
//     icon: GraduationCap,
//   },
//   {
//     id: "parent",
//     label: "Parent Reviews",
//     mobileLabel: "Parent Reviews",
//     icon: UsersRound,
//   },
//   {
//     id: "google",
//     label: "Google Review Highlights",
//     mobileLabel: "Google Highlights",
//     icon: "google",
//   },
// ];

// // Demo testimonial data for pitch UI.
// // Replace with verified student, parent, and Google reviews before production.
// const testimonials: Testimonial[] = [
//   {
//     type: "student",
//     quote:
//       "Concepts became much easier to revise because doubts were discussed regularly after class.",
//     author: "JEE Aspirant",
//     context: "Classroom Program",
//     focus: "Doubt Support",
//     icon: BookOpen,
//   },
//   {
//     type: "student",
//     quote:
//       "The regular tests helped me understand where I was weak and what I needed to improve next.",
//     author: "NEET Aspirant",
//     context: "Classroom Program",
//     focus: "Weekly Testing",
//     icon: BookOpen,
//   },
//   {
//     type: "student",
//     quote:
//       "The teachers are approachable, and the small batch environment makes students feel supported.",
//     author: "JEE Aspirant",
//     context: "Classroom Program",
//     focus: "Small Batches",
//     icon: BookOpen,
//   },
//   {
//     type: "parent",
//     quote:
//       "Regular updates about attendance, tests, and progress made the preparation journey easier to track.",
//     author: "Parent Feedback",
//     context: "Progress Updates",
//     focus: "Parent Updates",
//     icon: MessageCircle,
//   },
//   {
//     type: "parent",
//     quote:
//       "The teachers explain things patiently and give students the confidence to ask doubts.",
//     author: "Parent Feedback",
//     context: "Student Support",
//     focus: "Doubt Guidance",
//     icon: MessageCircle,
//   },
//   {
//     type: "parent",
//     quote:
//       "The classroom environment feels disciplined, focused, and supportive for serious preparation.",
//     author: "Parent Feedback",
//     context: "Learning Environment",
//     focus: "Discipline",
//     icon: MessageCircle,
//   },
//   {
//     type: "google",
//     quote:
//       "Students often mention good teachers, a supportive environment, and clear explanation of concepts.",
//     author: "Google Highlight",
//     context: "Public Review Theme",
//     focus: "Teaching Quality",
//     icon: BadgeCheck,
//   },
//   {
//     type: "google",
//     quote:
//       "Many reviews highlight friendly faculty and a classroom atmosphere that helps students stay focused.",
//     author: "Google Highlight",
//     context: "Public Review Theme",
//     focus: "Friendly Faculty",
//     icon: BadgeCheck,
//   },
//   {
//     type: "google",
//     quote:
//       "Review themes point toward concept clarity, regular support, and a positive learning experience.",
//     author: "Google Highlight",
//     context: "Public Review Theme",
//     focus: "Concept Clarity",
//     icon: BadgeCheck,
//   },
// ];

// const storyChips: StoryChip[] = [
//   {
//     label: "Real Experiences",
//     icon: UsersRound,
//   },
//   {
//     label: "Honest Feedback",
//     icon: Video,
//   },
//   {
//     label: "Inspiring Journeys",
//     icon: Heart,
//   },
// ];

// const videoImages = [
//   "/images/kota-academy/classroom/classroom-image-1.jpeg",
//   "/images/kota-academy/classroom/classroom-image-2.jpg",
//   "/images/kota-academy/classroom/image11.jpg",
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
//       staggerChildren: 0.08,
//       delayChildren: 0.08,
//     },
//   },
// };

// export default function KotaAcademyTestimonialsSection() {
//   const [activeTab, setActiveTab] = useState<ReviewType>("student");
//   const filteredTestimonials = testimonials.filter(
//     (testimonial) => testimonial.type === activeTab
//   );

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="testimonials"
//         className="relative overflow-hidden bg-[#F7FAEF] py-16 text-[#07142F] md:py-20 lg:py-24"
//       >
//         <SectionBackground />

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[520px] px-5 sm:px-6 md:max-w-[980px] lg:px-8 xl:max-w-[1400px]"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <SectionHeader />

//           <ReviewTabs activeTab={activeTab} setActiveTab={setActiveTab} />

//           <TestimonialShowcase
//             activeTab={activeTab}
//             testimonials={filteredTestimonials}
//           />

//           <VideoStoriesPanel />

//           <ReassurancePill />
//         </motion.div>
//       </section>
//     </MotionConfig>
//   );
// }

// function SectionBackground() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(47,125,23,0.12)_1px,transparent_1.45px)] bg-[size:24px_24px] opacity-35" />

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(62,154,18,0.38)_1px,transparent_1.5px)] bg-[size:24px_24px] [mask-image:radial-gradient(48%_42%_at_8%_12%,black,transparent_70%)]" />

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
//         <Star
//           className="h-4 w-4 fill-[#F5B642] text-[#F5B642]"
//           strokeWidth={2}
//         />
//         <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#2F7D17] md:text-[13px]">
//           Testimonials
//         </span>
//         <Star
//           className="h-4 w-4 fill-[#F5B642] text-[#F5B642]"
//           strokeWidth={2}
//         />
//         <span className="h-px w-10 bg-[#4E9417]/70 md:w-14" />
//       </div>

//       <h2 className="mx-auto max-w-[500px] text-balance text-[38px] font-black leading-[1.02] tracking-[-0.055em] text-[#07142F] sm:text-[44px] md:max-w-[860px] md:text-[58px] lg:text-[66px] xl:max-w-[1100px] xl:text-[72px]">
//         What Students & Parents Say About{" "}
//         <span className="text-[#2F861B]">Kota Academy</span>
//       </h2>

//       <p className="mx-auto mt-6 max-w-[470px] text-[16px] leading-8 text-[#5B6475] md:max-w-[760px] md:text-[18px]">
//         Real voices from our students and parents who experienced the difference
//         — better teaching, consistent support, and focused preparation.
//       </p>
//     </motion.div>
//   );
// }

// function ReviewTabs({
//   activeTab,
//   setActiveTab,
// }: {
//   activeTab: ReviewType;
//   setActiveTab: (tab: ReviewType) => void;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mx-auto mt-9 max-w-[1040px] rounded-[28px] border border-[#E1E8D7] bg-white/72 p-2 shadow-[0_18px_50px_rgba(7,20,47,0.08)] backdrop-blur-xl"
//     >
//       <div className="grid grid-cols-3 gap-2">
//         {reviewTabs.map((tab) => {
//           const isActive = activeTab === tab.id;
//           const Icon = tab.icon;

//           return (
//             <button
//               key={tab.id}
//               type="button"
//               onClick={() => setActiveTab(tab.id)}
//               className={`group flex min-h-[66px] items-center justify-center gap-2.5 rounded-[22px] px-3 text-center text-[13px] font-black tracking-[-0.02em] transition duration-300 sm:text-[15px] md:min-h-[72px] md:text-[18px] ${
//                 isActive
//                   ? "bg-[#07142F] text-white shadow-[0_18px_42px_rgba(7,20,47,0.26)]"
//                   : "bg-white/58 text-[#07142F] hover:bg-[#F4FFE7]"
//               }`}
//             >
//               {Icon === "google" ? (
//                 <GoogleMark className="h-6 w-6 shrink-0 md:h-7 md:w-7" />
//               ) : (
//                 <Icon
//                   className={`h-6 w-6 shrink-0 md:h-7 md:w-7 ${
//                     isActive ? "text-[#B5FF3D]" : "text-[#3E8618]"
//                   }`}
//                   strokeWidth={2.3}
//                 />
//               )}

//               <span className="hidden md:inline">{tab.label}</span>
//               <span className="md:hidden">{tab.mobileLabel}</span>
//             </button>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

// function TestimonialShowcase({
//   activeTab,
//   testimonials,
// }: {
//   activeTab: ReviewType;
//   testimonials: Testimonial[];
// }) {
//   return (
//     <motion.div variants={fadeUp} className="mt-7 md:mt-8">
//       <DesktopReviewGrid testimonials={testimonials} />
//       <MobileReviewCarousel activeTab={activeTab} testimonials={testimonials} />
//     </motion.div>
//   );
// }

// function DesktopReviewGrid({
//   testimonials,
// }: {
//   testimonials: Testimonial[];
// }) {
//   return (
//     <div className="hidden md:block">
//       <div className="grid grid-cols-3 gap-5 xl:gap-6">
//         {testimonials.slice(0, 3).map((testimonial) => (
//           <TestimonialCard
//             key={`${testimonial.author}-${testimonial.focus}`}
//             testimonial={testimonial}
//           />
//         ))}
//       </div>

//       <PaginationDots activeIndex={0} count={Math.max(testimonials.length, 3)} />
//     </div>
//   );
// }

// function MobileReviewCarousel({
//   activeTab,
//   testimonials,
// }: {
//   activeTab: ReviewType;
//   testimonials: Testimonial[];
// }) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const cardEls = useCallback(
//     () =>
//       Array.from(
//         scrollerRef.current?.querySelectorAll<HTMLElement>(
//           "[data-testimonial-card]"
//         ) ?? []
//       ),
//     []
//   );

//   const updateActiveDot = () => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const scrollerCenter =
//       scroller.getBoundingClientRect().left + scroller.clientWidth / 2;

//     let closestIndex = 0;
//     let closestDistance = Number.POSITIVE_INFINITY;

//     cardEls().forEach((card, index) => {
//       const rect = card.getBoundingClientRect();
//       const cardCenter = rect.left + rect.width / 2;
//       const distance = Math.abs(cardCenter - scrollerCenter);

//       if (distance < closestDistance) {
//         closestDistance = distance;
//         closestIndex = index;
//       }
//     });

//     setActiveIndex(closestIndex);
//   };

//   useEffect(() => {
//     setActiveIndex(0);
//     scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
//   }, [activeTab]);

//   return (
//     <div className="md:hidden">
//       <div
//         ref={scrollerRef}
//         onScroll={updateActiveDot}
//         className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {testimonials.map((testimonial) => (
//           <div
//             key={`${testimonial.author}-${testimonial.focus}`}
//             data-testimonial-card
//             className="w-[88%] max-w-[430px] shrink-0 snap-center"
//           >
//             <TestimonialCard testimonial={testimonial} />
//           </div>
//         ))}
//       </div>

//       <PaginationDots activeIndex={activeIndex} count={testimonials.length} />
//     </div>
//   );
// }

// function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   const Icon = testimonial.icon;

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileHover={{
//         y: -6,
//         transition: { duration: 0.25, ease: "easeOut" },
//       }}
//       whileTap={{ scale: 0.985 }}
//       className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-[#E3EAD8] bg-white/86 p-7 shadow-[0_22px_70px_rgba(7,20,47,0.075)] backdrop-blur-sm transition duration-300 hover:border-[#CFE7B5] hover:shadow-[0_30px_90px_rgba(7,20,47,0.11)] md:min-h-[350px] md:p-8 xl:min-h-[370px]"
//     >
//       <Quote className="pointer-events-none absolute right-7 top-7 h-16 w-16 fill-[#DDF2C3] text-[#DDF2C3] opacity-90" />

//       <div className="relative z-10 flex items-center gap-1">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <Star
//             key={index}
//             className="h-6 w-6 fill-[#F5B642] text-[#F5B642]"
//             strokeWidth={1.8}
//           />
//         ))}
//       </div>

//       <p className="relative z-10 mt-9 text-[22px] font-semibold leading-[1.65] tracking-[-0.025em] text-[#07142F] md:text-[19px] md:leading-[1.65] xl:text-[21px]">
//         {testimonial.quote}
//       </p>

//       <div className="relative z-10 mt-auto pt-7">
//         <div className="mb-6 h-px w-full bg-[#DCE8CF]" />

//         <div className="flex items-center gap-4">
//           <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#D7EDBE] bg-[#EEFFDB] text-[#3E8618] shadow-[0_12px_30px_rgba(88,164,0,0.1)]">
//             <Icon className="h-8 w-8" strokeWidth={2.2} />
//           </div>

//           <div>
//             <h3 className="text-[21px] font-black leading-tight tracking-[-0.035em] text-[#07142F] md:text-[19px]">
//               {testimonial.author}
//             </h3>

//             <p className="mt-1 text-[16px] font-medium text-[#667085] md:text-[14px]">
//               {testimonial.context}
//             </p>

//             <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#E9F9D3] px-3 py-1.5 text-[13px] font-black text-[#3E8618]">
//               <BookOpen className="h-4 w-4" strokeWidth={2.2} />
//               {testimonial.focus}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// function PaginationDots({
//   activeIndex,
//   count,
// }: {
//   activeIndex: number;
//   count: number;
// }) {
//   return (
//     <div className="mt-6 flex items-center justify-center gap-3">
//       {Array.from({ length: Math.min(count, 4) }).map((_, index) => (
//         <span
//           key={index}
//           className={`h-3 w-3 rounded-full transition-all duration-300 ${
//             activeIndex === index
//               ? "bg-[#3E8618]"
//               : "bg-[#CFD5CC]"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

// function VideoStoriesPanel() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative mt-8 overflow-hidden rounded-[32px] border border-[#203149]/75 bg-[radial-gradient(circle_at_88%_50%,rgba(181,255,61,0.12),transparent_32%),radial-gradient(circle_at_8%_20%,rgba(14,116,144,0.12),transparent_34%),linear-gradient(115deg,#07111F_0%,#0B1426_48%,#0D1E1A_100%)] p-6 shadow-[0_28px_90px_rgba(7,17,31,0.22)] md:mt-9 md:p-8 lg:p-9"
//     >
//       <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />

//       <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-25">
//         <svg viewBox="0 0 360 260" fill="none" className="h-full w-full">
//           {Array.from({ length: 12 }).map((_, index) => (
//             <path
//               key={index}
//               d={`M380 ${34 + index * 16}C270 ${72 + index * 9} 190 ${
//                 10 + index * 13
//               } -20 ${102 + index * 6}`}
//               stroke="#B5FF3D"
//               strokeOpacity="0.2"
//               strokeWidth="1"
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.3fr_0.78fr] lg:items-center">
//         <VideoThumbnailCollage />

//         <div>
//           <div className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-4 py-2 text-[12px] font-black uppercase tracking-[0.08em] text-[#B5FF3D]">
//             <Video className="h-4 w-4" strokeWidth={2.3} />
//             Video Stories
//           </div>

//           <h3 className="mt-5 text-[34px] font-black leading-tight tracking-[-0.05em] text-white md:text-[42px]">
//             Student{" "}
//             <span className="font-serif italic text-[#B5FF3D]">Success</span>{" "}
//             Stories
//           </h3>

//           <p className="mt-4 max-w-[620px] text-[17px] leading-8 text-[#D7DEE9]">
//             Real journeys, real results. Watch our students share their
//             experiences, challenges, and how Kota Academy helped them achieve
//             their goals.
//           </p>

//           <div className="mt-6 grid gap-3 sm:grid-cols-3">
//             {storyChips.map((chip, index) => {
//               const Icon = chip.icon;

//               return (
//                 <div
//                   key={chip.label}
//                   className="flex items-center gap-3 text-white"
//                 >
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/14 text-[#B5FF3D]">
//                     <Icon className="h-5 w-5" strokeWidth={2.3} />
//                   </div>

//                   <span className="text-[14px] font-bold leading-tight">
//                     {chip.label}
//                   </span>

//                   {index !== storyChips.length - 1 && (
//                     <span className="ml-auto hidden h-8 w-px bg-white/18 sm:block" />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex flex-col items-center lg:items-end">
//           <a
//             href="#"
//             className="group flex h-16 w-full max-w-[360px] items-center justify-between rounded-full bg-white px-6 text-[20px] font-black tracking-[-0.03em] text-[#07142F] shadow-[0_20px_48px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1"
//           >
//             <span className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B5FF3D,#56AD12)] text-white">
//                 <Play className="h-5 w-5 fill-white" strokeWidth={2.2} />
//               </span>
//               Watch Stories
//             </span>

//             <ArrowRight
//               className="h-7 w-7 transition duration-300 group-hover:translate-x-1"
//               strokeWidth={2.4}
//             />
//           </a>

//           <p className="mt-4 text-center text-[15px] text-[#C7D1E0]">
//             Videos coming soon
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function VideoThumbnailCollage() {
//   return (
//     <div className="relative mx-auto h-[230px] w-full max-w-[360px] md:h-[260px] lg:mx-0">
//       <div className="absolute left-0 top-3 h-[180px] w-[180px] overflow-hidden rounded-[22px] border border-white/45 shadow-[0_20px_46px_rgba(0,0,0,0.32)] md:h-[205px] md:w-[205px]">
//         <Image
//           src={videoImages[0]}
//           alt="Kota Academy student story thumbnail"
//           fill
//           sizes="220px"
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-[#07142F]/18" />
//       </div>

//       <div className="absolute right-6 top-0 h-[118px] w-[132px] overflow-hidden rounded-2xl border border-white/45 shadow-[0_16px_34px_rgba(0,0,0,0.28)]">
//         <Image
//           src={videoImages[1]}
//           alt="Kota Academy classroom thumbnail"
//           fill
//           sizes="160px"
//           className="object-cover"
//         />
//       </div>

//       <div className="absolute bottom-0 right-0 h-[128px] w-[142px] overflow-hidden rounded-2xl border border-white/45 shadow-[0_16px_34px_rgba(0,0,0,0.28)]">
//         <Image
//           src={videoImages[2]}
//           alt="Kota Academy student feedback thumbnail"
//           fill
//           sizes="170px"
//           className="object-cover"
//         />
//       </div>

//       <button
//         type="button"
//         aria-label="Play student success story video"
//         className="absolute left-[118px] top-[100px] z-20 flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-white bg-[#07142F]/54 text-white shadow-[0_18px_40px_rgba(0,0,0,0.36)] backdrop-blur-md transition duration-300 hover:scale-105 md:left-[136px] md:top-[112px]"
//       >
//         <Play className="ml-1 h-8 w-8 fill-white" strokeWidth={2.2} />
//       </button>
//     </div>
//   );
// }

// function ReassurancePill() {
//   return (
//     <motion.div variants={fadeUp} className="mt-6 flex justify-center">
//       <div className="flex max-w-[760px] items-center gap-4 rounded-full border border-[#DCECCB] bg-white/78 px-6 py-4 text-[#667085] shadow-[0_16px_38px_rgba(7,20,47,0.07)] backdrop-blur-sm">
//         <ShieldCheck
//           className="h-8 w-8 shrink-0 text-[#3E8618]"
//           strokeWidth={2.2}
//         />

//         <p className="text-[15px] font-medium leading-6 md:text-[17px]">
//           These reviews are collected from students, parents and public
//           platforms.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// function GoogleMark({ className = "" }: { className?: string }) {
//   return (
//     <span
//       className={`inline-flex items-center justify-center font-black ${className}`}
//       aria-hidden="true"
//     >
//       <span className="text-[#4285F4]">G</span>
//     </span>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   type Variants,
// } from "framer-motion";
// import {
//   ArrowRight,
//   GraduationCap,
//   Heart,
//   Play,
//   Quote,
//   ShieldCheck,
//   Star,
//   UsersRound,
//   Video,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data                                                                      */
// /*  Student & Parent = demo (swap with verified reviews after approval).      */
// /*  Google = real snippets + real combined rating from the GBP screenshots.   */
// /* -------------------------------------------------------------------------- */

// type ReviewType = "student" | "parent" | "google";

// type Testimonial = {
//   type: ReviewType;
//   quote: string;
//   author: string;
//   context: string;
//   focus: string;
//   stars?: number; // defaults to 5
// };

// const reviewTabs: { id: ReviewType; label: string; mobileLabel: string }[] = [
//   { id: "student", label: "Student Reviews", mobileLabel: "Students" },
//   { id: "parent", label: "Parent Reviews", mobileLabel: "Parents" },
//   { id: "google", label: "Google Reviews", mobileLabel: "Google" },
// ];

// const testimonials: Testimonial[] = [
//   // ---- STUDENTS (demo) ----
//   {
//     type: "student",
//     quote:
//       "Concepts became much easier to revise because doubts were cleared right after every class.",
//     author: "Aarav Sharma",
//     context: "JEE Aspirant · Classroom Program",
//     focus: "Doubt Support",
//   },
//   {
//     type: "student",
//     quote:
//       "The weekly tests showed me exactly where I was weak and what to fix before the next one.",
//     author: "Sneha Kapoor",
//     context: "NEET Aspirant · Classroom Program",
//     focus: "Weekly Testing",
//   },
//   {
//     type: "student",
//     quote:
//       "Small batches mean the teachers actually know you — it never feels like you're just a roll number.",
//     author: "Priya Verma",
//     context: "JEE Aspirant · Two-Year Program",
//     focus: "Small Batches",
//   },
//   // ---- PARENTS (demo) ----
//   {
//     type: "parent",
//     quote:
//       "Regular updates on attendance, tests and progress made the whole journey easy to follow as a parent.",
//     author: "Mr. Rajesh Gupta",
//     context: "Parent of a NEET Student",
//     focus: "Parent Updates",
//   },
//   {
//     type: "parent",
//     quote:
//       "The teachers explain patiently and give children the confidence to ask doubts without hesitation.",
//     author: "Mrs. Anita Singh",
//     context: "Parent of a JEE Student",
//     focus: "Doubt Guidance",
//   },
//   {
//     type: "parent",
//     quote:
//       "The environment is disciplined and focused — exactly what serious exam preparation needs.",
//     author: "Mr. Sandeep Rana",
//     context: "Parent of a Class XII Student",
//     focus: "Discipline",
//   },
//   // ---- GOOGLE (real snippets from GBP) ----
//   {
//     type: "google",
//     quote:
//       "Nice coaching with good teachers and a great environment.",
//     author: "Verified Google Review",
//     context: "Kota Academy · Greater Noida",
//     focus: "Teaching Quality",
//   },
//   {
//     type: "google",
//     quote:
//       "Kota Academy provides very good quality of teaching faculties.",
//     author: "Verified Google Review",
//     context: "Kota Academy · Greater Noida",
//     focus: "Faculty",
//   },
//   {
//     type: "google",
//     quote:
//       "It is the best place to study — all the teachers are very good.",
//     author: "Verified Google Review",
//     context: "Kota Academy · Greater Noida",
//     focus: "Student Experience",
//   },
// ];

// const GOOGLE_RATING = 4.7; // combined, weighted across both branches
// const GOOGLE_COUNT = 179; // 157 + 22

// const storyChips: { label: string; icon: LucideIcon }[] = [
//   { label: "Real Experiences", icon: UsersRound },
//   { label: "Honest Feedback", icon: Video },
//   { label: "Inspiring Journeys", icon: Heart },
// ];

// const videoImages = [
//   "/images/kota-academy/classroom/classroom-image-1.jpeg",
//   "/images/kota-academy/classroom/classroom-image-2.jpg",
//   "/images/kota-academy/classroom/image11.jpg",
// ];

// /* monogram from a name */
// const initials = (name: string) =>
//   name
//     .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "")
//     .replace(/Verified Google Review/i, "G")
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((w) => w[0]?.toUpperCase())
//     .join("");

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
//   visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function TestimonialsSection() {
//   const [tab, setTab] = useState<ReviewType>("student");
//   const filtered = testimonials.filter((t) => t.type === tab);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="testimonials"
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
//           <Tabs tab={tab} setTab={setTab} />
//           <Showcase tab={tab} items={filtered} />
//           <VideoStories />
//           <Reassurance />
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
//       <div className="pointer-events-none absolute left-1/2 top-10 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-[120px]" />
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
//         <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           Testimonials
//         </span>
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//       </div>

//       <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
//         What Students &amp; Parents Say About{" "}
//         <span className="text-[#3E9A12]">Kota Academy</span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
//         Real voices from students and parents who experienced the difference —
//         better teaching, consistent support, and focused preparation.
//       </p>

//       {/* live Google rating summary */}
//       <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-4 py-2 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
//         <GoogleMark className="h-4 w-4" />
//         <span className="text-[14px] font-bold text-[#0B1B33]">
//           {GOOGLE_RATING.toFixed(1)}
//         </span>
//         <Stars value={5} size="sm" />
//         <span className="text-[13px] text-[#5A6678]">
//           {GOOGLE_COUNT}+ Google reviews
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Tabs                                                                      */
// /* -------------------------------------------------------------------------- */

// function Tabs({
//   tab,
//   setTab,
// }: {
//   tab: ReviewType;
//   setTab: (t: ReviewType) => void;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mx-auto mt-8 grid max-w-[560px] grid-cols-3 gap-1.5 rounded-2xl border border-[#E4E7DA] bg-white/70 p-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-xl"
//     >
//       {reviewTabs.map((t) => {
//         const active = tab === t.id;
//         return (
//           <button
//             key={t.id}
//             type="button"
//             onClick={() => setTab(t.id)}
//             className={`relative flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 md:text-[14px] ${
//               active ? "text-white" : "text-[#5A6678] hover:text-[#0B1B33]"
//             }`}
//           >
//             {active && (
//               <motion.span
//                 layoutId="tabPill"
//                 transition={{ type: "spring", stiffness: 380, damping: 32 }}
//                 className="absolute inset-0 rounded-xl bg-[#0B1B33]"
//               />
//             )}
//             <span className="relative z-10 flex items-center gap-2">
//               {t.id === "google" ? (
//                 <GoogleMark className="h-4 w-4" mono={active} />
//               ) : t.id === "student" ? (
//                 <GraduationCap
//                   className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`}
//                   strokeWidth={2.2}
//                   aria-hidden
//                 />
//               ) : (
//                 <UsersRound
//                   className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`}
//                   strokeWidth={2.2}
//                   aria-hidden
//                 />
//               )}
//               <span className="hidden sm:inline">{t.label}</span>
//               <span className="sm:hidden">{t.mobileLabel}</span>
//             </span>
//           </button>
//         );
//       })}
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Showcase                                                                  */
// /* -------------------------------------------------------------------------- */

// function Showcase({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
//   return (
//     <motion.div variants={fadeUp} className="mt-8">
//       {/* desktop / tablet grid with cross-fade on tab change */}
//       <div className="hidden md:block">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={tab}
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.35, ease: EXPO }}
//             className="grid grid-cols-3 gap-5"
//           >
//             {items.slice(0, 3).map((t, i) => (
//               <ReviewCard key={`${t.author}-${i}`} t={t} index={i} />
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* mobile carousel */}
//       <MobileCarousel tab={tab} items={items} />
//     </motion.div>
//   );
// }

// function MobileCarousel({
//   tab,
//   items,
// }: {
//   tab: ReviewType;
//   items: Testimonial[];
// }) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState(0);

//   const cardEls = useCallback(
//     () =>
//       Array.from(
//         scrollerRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []
//       ),
//     []
//   );

//   const onScroll = () => {
//     const s = scrollerRef.current;
//     if (!s) return;
//     const center = s.getBoundingClientRect().left + s.clientWidth / 2;
//     let best = 0;
//     let bestDist = Infinity;
//     cardEls().forEach((c, i) => {
//       const r = c.getBoundingClientRect();
//       const d = Math.abs(r.left + r.width / 2 - center);
//       if (d < bestDist) {
//         bestDist = d;
//         best = i;
//       }
//     });
//     setActive(best);
//   };

//   useEffect(() => {
//     setActive(0);
//     scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
//   }, [tab]);

//   return (
//     <div className="md:hidden">
//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {items.map((t, i) => (
//           <div
//             key={`${t.author}-${i}`}
//             data-card
//             className="w-[86%] max-w-[400px] shrink-0 snap-center"
//           >
//             <ReviewCard t={t} index={i} />
//           </div>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-center gap-2.5">
//         {items.map((t, i) => (
//           <span
//             key={`${t.author}-dot-${i}`}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               active === i ? "w-6 bg-[#3E9A12]" : "w-2 bg-[#C6CFC0]"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Review card                                                               */
// /* -------------------------------------------------------------------------- */

// function ReviewCard({ t, index }: { t: Testimonial; index: number }) {
//   const isGoogle = t.type === "google";

//   return (
//     <motion.article
//       variants={fadeUp}
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.25, ease: "easeOut" }}
//       className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-[#E4E7DA] bg-white p-6 shadow-[0_1px_2px_rgba(11,27,51,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-[#CBD8BB] hover:shadow-[0_24px_55px_-26px_rgba(16,120,40,0.4)]"
//     >
//       {/* soft quote glyph */}
//       <Quote
//         className="pointer-events-none absolute right-5 top-5 h-12 w-12 rotate-180 fill-[#EDF6DE] text-[#EDF6DE]"
//         aria-hidden
//       />

//       <div className="relative z-10 flex items-center gap-2">
//         <Stars value={t.stars ?? 5} delayBase={index} />
//         {isGoogle && (
//           <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-[#F2F5FB] px-2 py-0.5 text-[10px] font-bold text-[#5A6678]">
//             <GoogleMark className="h-3 w-3" /> Google
//           </span>
//         )}
//       </div>

//       <p className="relative z-10 mt-5 text-[15.5px] font-medium leading-[1.7] tracking-[-0.005em] text-[#1F2B40] md:text-[16px]">
//         {t.quote}
//       </p>

//       <div className="relative z-10 mt-auto pt-6">
//         <div className="mb-4 h-px w-full bg-[#EEF0E6]" />
//         <div className="flex items-center gap-3">
//           <span
//             className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[14px] font-bold ${
//               isGoogle
//                 ? "bg-[#F2F5FB] text-[#1466C2] ring-1 ring-inset ring-[#DCE6F5]"
//                 : "bg-[#EDF8DD] text-[#2C7A12] ring-1 ring-inset ring-[#CDEBB0]"
//             }`}
//             aria-hidden
//           >
//             {initials(t.author)}
//           </span>
//           <div className="min-w-0">
//             <h3 className="truncate text-[15px] font-bold leading-tight text-[#0B1B33]">
//               {t.author}
//             </h3>
//             <p className="mt-0.5 truncate text-[12.5px] text-[#5A6678]">
//               {t.context}
//             </p>
//           </div>
//           <span className="ml-auto hidden shrink-0 rounded-full bg-[#F4F8EA] px-2.5 py-1 text-[11px] font-semibold text-[#3E8618] sm:inline">
//             {t.focus}
//           </span>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// function Stars({
//   value,
//   size = "md",
//   delayBase = 0,
// }: {
//   value: number;
//   size?: "sm" | "md";
//   delayBase?: number;
// }) {
//   const dim = size === "sm" ? "h-3.5 w-3.5" : "h-[18px] w-[18px]";
//   return (
//     <span className="inline-flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             delay: 0.15 + delayBase * 0.04 + i * 0.05,
//             type: "spring",
//             stiffness: 400,
//             damping: 18,
//           }}
//           className="inline-flex"
//         >
//           <Star
//             className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`}
//             strokeWidth={1.6}
//             aria-hidden
//           />
//         </motion.span>
//       ))}
//     </span>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Video stories panel                                                       */
// /* -------------------------------------------------------------------------- */

// function VideoStories() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative mt-9 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_88%_50%,rgba(181,255,61,0.12),transparent_34%),radial-gradient(circle_at_8%_20%,rgba(13,90,110,0.16),transparent_36%),linear-gradient(120deg,#07111F_0%,#0B1426_50%,#0B2118_100%)] p-6 shadow-[0_28px_80px_-30px_rgba(7,17,31,0.55)] md:p-8 lg:p-9"
//     >
//       <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//       <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.25fr_0.7fr] lg:items-center">
//         <Collage />

//         <div>
//           <span className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
//             <Video className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
//             Video Stories
//           </span>

//           <h3 className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[34px]">
//             Student <span className="italic text-[#B5FF3D]">Success</span> Stories
//           </h3>

//           <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#C7D1E0]">
//             Real journeys, real results. Watch our students share their
//             experiences, challenges, and how Kota Academy helped them reach their
//             goals.
//           </p>

//           <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
//             {storyChips.map((chip) => {
//               const Icon = chip.icon;
//               return (
//                 <span key={chip.label} className="inline-flex items-center gap-2 text-white">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/14 text-[#B5FF3D]">
//                     <Icon className="h-4 w-4" strokeWidth={2.3} aria-hidden />
//                   </span>
//                   <span className="text-[13px] font-medium">{chip.label}</span>
//                 </span>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex flex-col items-start lg:items-end">
//           <a
//             href="#"
//             className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[15px] font-bold tracking-[-0.01em] text-[#0B1B33] shadow-[0_16px_36px_-14px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B5FF3D,#56AD12)] text-white">
//               <Play className="ml-0.5 h-4 w-4 fill-white" strokeWidth={2} aria-hidden />
//             </span>
//             Watch Stories
//             <ArrowRight
//               className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//               strokeWidth={2.4}
//               aria-hidden
//             />
//           </a>
//           <p className="mt-3 text-[13px] text-[#8FA0B8] lg:text-right">
//             Videos coming soon
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function Collage() {
//   return (
//     <div className="relative mx-auto h-[220px] w-full max-w-[340px] lg:mx-0">
//       <div className="absolute left-0 top-3 h-[170px] w-[170px] overflow-hidden rounded-[20px] border border-white/30 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
//         <Image src={videoImages[0]} alt="Kota Academy student story" fill sizes="200px" className="object-cover" />
//         <div className="absolute inset-0 bg-[#07142F]/25" />
//       </div>
//       <div className="absolute right-2 top-0 h-[105px] w-[120px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
//         <Image src={videoImages[1]} alt="Kota Academy classroom" fill sizes="140px" className="object-cover" />
//       </div>
//       <div className="absolute bottom-0 right-0 h-[112px] w-[128px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
//         <Image src={videoImages[2]} alt="Kota Academy student feedback" fill sizes="150px" className="object-cover" />
//       </div>
//       <button
//         type="button"
//         aria-label="Play student success story video"
//         className="absolute left-[104px] top-[92px] z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#07142F]/55 text-white shadow-[0_16px_34px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
//       >
//         <Play className="ml-0.5 h-6 w-6 fill-white" strokeWidth={2} aria-hidden />
//       </button>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Reassurance                                                               */
// /* -------------------------------------------------------------------------- */

// function Reassurance() {
//   return (
//     <motion.div variants={fadeUp} className="mt-7 flex justify-center">
//       <div className="inline-flex max-w-[760px] items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-5 py-3 text-[#5A6678] shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
//         <ShieldCheck className="h-5 w-5 shrink-0 text-[#3E8618]" strokeWidth={2.2} aria-hidden />
//         <p className="text-[13px] font-medium leading-5 md:text-[14px]">
//           Reviews are collected from students, parents and public platforms like Google.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Google "G" mark                                                           */
// /* -------------------------------------------------------------------------- */

// function GoogleMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
//   if (mono) {
//     return (
//       <svg viewBox="0 0 24 24" className={className} aria-hidden fill="#B5FF3D">
//         <path d="M12 11v3.2h4.5c-.2 1.2-1.5 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.2 1.2l2.2-2.1C16.6 4.6 14.5 3.7 12 3.7 6.9 3.7 2.8 7.8 2.8 12.9S6.9 22.1 12 22.1c4.9 0 8.2-3.4 8.2-8.3 0-.6-.1-1-.2-1.5H12z" />
//       </svg>
//     );
//   }
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden>
//       <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
//       <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
//       <path fill="#FBBC05" d="M6 14.4a6.5 6.5 0 0 1 0-4.2V7.4H2.3a10.9 10.9 0 0 0 0 9.8L6 14.4z" />
//       <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 2.3 7.4L6 10.2c.9-2.5 3.2-4.4 6-4.4z" />
//     </svg>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   useReducedMotion,
//   type Variants,
// } from "framer-motion";
// import {
//   ArrowRight,
//   GraduationCap,
//   Heart,
//   Play,
//   Quote,
//   ShieldCheck,
//   Star,
//   UsersRound,
//   Video,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data                                                                      */
// /*  Student & Parent = demo (swap with verified reviews after approval).      */
// /*  Google = real snippets + real combined rating from the GBP screenshots.   */
// /* -------------------------------------------------------------------------- */

// type ReviewType = "student" | "parent" | "google";

// type Testimonial = {
//   type: ReviewType;
//   quote: string;
//   author: string;
//   context: string;
//   focus: string;
//   stars?: number;
// };

// const reviewTabs: { id: ReviewType; label: string; mobileLabel: string }[] = [
//   { id: "student", label: "Student Reviews", mobileLabel: "Students" },
//   { id: "parent", label: "Parent Reviews", mobileLabel: "Parents" },
//   { id: "google", label: "Google Reviews", mobileLabel: "Google" },
// ];

// const testimonials: Testimonial[] = [
//   // ---- STUDENTS (demo) ----
//   { type: "student", quote: "Concepts became much easier to revise because doubts were cleared right after every class.", author: "Aarav Sharma", context: "JEE Aspirant · Classroom Program", focus: "Doubt Support" },
//   { type: "student", quote: "The weekly tests showed me exactly where I was weak and what to fix before the next one.", author: "Sneha Kapoor", context: "NEET Aspirant · Classroom Program", focus: "Weekly Testing" },
//   { type: "student", quote: "Small batches mean the teachers actually know you — it never feels like you're just a roll number.", author: "Priya Verma", context: "JEE Aspirant · Two-Year Program", focus: "Small Batches" },
//   { type: "student", quote: "Doubt sessions after class genuinely changed how confident I feel walking into an exam.", author: "Rohan Mehta", context: "NEET Aspirant · Classroom Program", focus: "Confidence" },
//   { type: "student", quote: "The teachers break down tough topics so simply that revision before exams barely takes time now.", author: "Ananya Iyer", context: "JEE Aspirant · Two-Year Program", focus: "Concept Clarity" },
//   { type: "student", quote: "Regular mentoring kept me on track even when I wanted to give up midway.", author: "Karan Bhatia", context: "JEE Aspirant · Classroom Program", focus: "Mentorship" },
//   // ---- PARENTS (demo) ----
//   { type: "parent", quote: "Regular updates on attendance, tests and progress made the whole journey easy to follow as a parent.", author: "Mr. Rajesh Gupta", context: "Parent of a NEET Student", focus: "Parent Updates" },
//   { type: "parent", quote: "The teachers explain patiently and give children the confidence to ask doubts without hesitation.", author: "Mrs. Anita Singh", context: "Parent of a JEE Student", focus: "Doubt Guidance" },
//   { type: "parent", quote: "The environment is disciplined and focused — exactly what serious exam preparation needs.", author: "Mr. Sandeep Rana", context: "Parent of a Class XII Student", focus: "Discipline" },
//   { type: "parent", quote: "What reassured me most was how reachable the faculty always were whenever I had a concern.", author: "Mrs. Kavita Joshi", context: "Parent of a NEET Student", focus: "Accessibility" },
//   { type: "parent", quote: "My daughter's consistency improved within months — the structure here clearly works.", author: "Mr. Deepak Nair", context: "Parent of a JEE Student", focus: "Consistency" },
//   { type: "parent", quote: "Honest guidance about my son's strengths and gaps, never any false promises.", author: "Mrs. Pooja Agarwal", context: "Parent of a Class XI Student", focus: "Honest Guidance" },
//   // ---- GOOGLE (real snippets from GBP) ----
//   { type: "google", quote: "Nice coaching with good teachers and a great environment.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Teaching Quality" },
//   { type: "google", quote: "Kota Academy provides very good quality of teaching faculties.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Faculty" },
//   { type: "google", quote: "It is the best place to study — all the teachers are very good.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Student Experience" },
//   { type: "google", quote: "Great environment, excellent teaching and detailed concepts.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Environment" },
//   { type: "google", quote: "Teachers are kind and friendly with students.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Supportive Faculty" },
//   { type: "google", quote: "Bharat sir (physics teacher) is the best teacher and an inspiration for all of us.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Mentorship" },
// ];

// const GOOGLE_RATING = 4.7;
// const GOOGLE_COUNT = 179;

// const storyChips: { label: string; icon: LucideIcon }[] = [
//   { label: "Real Experiences", icon: UsersRound },
//   { label: "Honest Feedback", icon: Video },
//   { label: "Inspiring Journeys", icon: Heart },
// ];

// const videoImages = [
//   "/images/kota-academy/classroom/classroom-image-1.jpeg",
//   "/images/kota-academy/classroom/classroom-image-2.jpg",
//   "/images/kota-academy/classroom/image11.jpg",
// ];

// const initials = (name: string) =>
//   name
//     .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "")
//     .replace(/Verified Google Review/i, "G")
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((w) => w[0]?.toUpperCase())
//     .join("");

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
//   visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function TestimonialsSection() {
//   const [tab, setTab] = useState<ReviewType>("student");
//   const filtered = testimonials.filter((t) => t.type === tab);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="testimonials"
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
//           <Tabs tab={tab} setTab={setTab} />
//         </motion.div>

//         {/* marquee lives full-bleed (outside the max-w wrapper) so it can run edge to edge */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           variants={fadeUp}
//           className="relative z-10 mt-8"
//         >
//           <Showcase tab={tab} items={filtered} />
//         </motion.div>

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <VideoStories />
//           <Reassurance />
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
//       <div className="pointer-events-none absolute left-1/2 top-10 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-[120px]" />
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
//         <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           Testimonials
//         </span>
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//       </div>

//       <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
//         What Students &amp; Parents Say About{" "}
//         <span className="text-[#3E9A12]">Kota Academy</span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
//         Real voices from students and parents who experienced the difference —
//         better teaching, consistent support, and focused preparation.
//       </p>

//       <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-4 py-2 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
//         <GoogleMark className="h-4 w-4" />
//         <span className="text-[14px] font-bold text-[#0B1B33]">
//           {GOOGLE_RATING.toFixed(1)}
//         </span>
//         <Stars value={5} size="sm" animate={false} />
//         <span className="text-[13px] text-[#5A6678]">{GOOGLE_COUNT}+ Google reviews</span>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Tabs                                                                      */
// /* -------------------------------------------------------------------------- */

// function Tabs({ tab, setTab }: { tab: ReviewType; setTab: (t: ReviewType) => void }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mx-auto mt-8 grid max-w-[560px] grid-cols-3 gap-1.5 rounded-2xl border border-[#E4E7DA] bg-white/70 p-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-xl"
//     >
//       {reviewTabs.map((t) => {
//         const active = tab === t.id;
//         return (
//           <button
//             key={t.id}
//             type="button"
//             onClick={() => setTab(t.id)}
//             className={`relative flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 md:text-[14px] ${
//               active ? "text-white" : "text-[#5A6678] hover:text-[#0B1B33]"
//             }`}
//           >
//             {active && (
//               <motion.span
//                 layoutId="tabPill"
//                 transition={{ type: "spring", stiffness: 380, damping: 32 }}
//                 className="absolute inset-0 rounded-xl bg-[#0B1B33]"
//               />
//             )}
//             <span className="relative z-10 flex items-center gap-2">
//               {t.id === "google" ? (
//                 <GoogleMark className="h-4 w-4" mono={active} />
//               ) : t.id === "student" ? (
//                 <GraduationCap className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`} strokeWidth={2.2} aria-hidden />
//               ) : (
//                 <UsersRound className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`} strokeWidth={2.2} aria-hidden />
//               )}
//               <span className="hidden sm:inline">{t.label}</span>
//               <span className="sm:hidden">{t.mobileLabel}</span>
//             </span>
//           </button>
//         );
//       })}
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Showcase — desktop dual-row marquee; mobile carousel                      */
// /* -------------------------------------------------------------------------- */

// function Showcase({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
//   const reduce = useReducedMotion();

//   // split into two rows for opposite-direction drift
//   const mid = Math.ceil(items.length / 2);
//   const rowA = items.slice(0, mid);
//   const rowB = items.slice(mid).length ? items.slice(mid) : items.slice(0, mid);

//   return (
//     <>
//       {/* desktop / tablet */}
//       <div className="hidden md:block">
//         {reduce ? (
//           // reduced-motion: static grid, no drift
//           <div className="mx-auto grid max-w-[1240px] grid-cols-3 gap-5 px-6 lg:px-8">
//             {items.slice(0, 6).map((t, i) => (
//               <ReviewCard key={`${tab}-${t.author}-${i}`} t={t} />
//             ))}
//           </div>
//         ) : (
//           <AnimatePresence mode="popLayout" initial={false}>
//             <motion.div
//               key={tab}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: EXPO }}
//               className="relative space-y-5 [mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]"
//             >
//               <MarqueeRow items={rowA} direction="left" duration={42} />
//               <MarqueeRow items={rowB} direction="right" duration={48} />
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </div>

//       {/* mobile carousel */}
//       <MobileCarousel tab={tab} items={items} />
//     </>
//   );
// }

// function MarqueeRow({
//   items,
//   direction,
//   duration,
// }: {
//   items: Testimonial[];
//   direction: "left" | "right";
//   duration: number;
// }) {
//   // duplicate the set so the loop is seamless
//   const loop = [...items, ...items];
//   return (
//     <div className="group/marquee flex w-max gap-5 will-change-transform">
//       <motion.div
//         className="flex gap-5 group-hover/marquee:[animation-play-state:paused]"
//         style={{ animation: `tmarquee-${direction} ${duration}s linear infinite` }}
//       >
//         {loop.map((t, i) => (
//           <div key={`${t.author}-${i}`} className="w-[340px] shrink-0">
//             <ReviewCard t={t} />
//           </div>
//         ))}
//       </motion.div>

//       <style jsx>{`
//         @keyframes tmarquee-left {
//           to {
//             transform: translateX(calc(-50% - 10px));
//           }
//         }
//         @keyframes tmarquee-right {
//           from {
//             transform: translateX(calc(-50% - 10px));
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function MobileCarousel({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState(0);

//   const cardEls = useCallback(
//     () => Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []),
//     []
//   );

//   const onScroll = () => {
//     const s = scrollerRef.current;
//     if (!s) return;
//     const center = s.getBoundingClientRect().left + s.clientWidth / 2;
//     let best = 0;
//     let bestDist = Infinity;
//     cardEls().forEach((c, i) => {
//       const r = c.getBoundingClientRect();
//       const d = Math.abs(r.left + r.width / 2 - center);
//       if (d < bestDist) {
//         bestDist = d;
//         best = i;
//       }
//     });
//     setActive(best);
//   };

//   useEffect(() => {
//     setActive(0);
//     scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
//   }, [tab]);

//   return (
//     <div className="md:hidden">
//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {items.map((t, i) => (
//           <div key={`${t.author}-${i}`} data-card className="w-[86%] max-w-[400px] shrink-0 snap-center">
//             <ReviewCard t={t} />
//           </div>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-center gap-2.5">
//         {items.map((t, i) => (
//           <span
//             key={`${t.author}-dot-${i}`}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               active === i ? "w-6 bg-[#3E9A12]" : "w-2 bg-[#C6CFC0]"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Review card — upgraded material                                           */
// /* -------------------------------------------------------------------------- */

// function ReviewCard({ t }: { t: Testimonial }) {
//   const isGoogle = t.type === "google";
//   const accentEdge = isGoogle ? "from-[#52A6F0] to-[#1466C2]" : "from-[#9FE34A] to-[#3E9A12]";
//   const avatar = isGoogle
//     ? "bg-[#F2F5FB] text-[#1466C2] ring-[#DCE6F5]"
//     : "bg-[#EDF8DD] text-[#2C7A12] ring-[#CDEBB0]";

//   return (
//     <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-[#E7EADD] bg-[linear-gradient(180deg,#FFFFFF,#FBFCF7)] p-6 shadow-[0_1px_2px_rgba(11,27,51,0.04),0_18px_40px_-28px_rgba(11,27,51,0.35)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[#CBD8BB] hover:shadow-[0_28px_60px_-26px_rgba(16,120,40,0.45)]">
//       {/* top accent edge */}
//       <span className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accentEdge}`} />
//       {/* inner hairline for material depth */}
//       <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60" aria-hidden />
//       {/* focal quote glyph */}
//       <Quote
//         className="pointer-events-none absolute -right-2 top-3 h-20 w-20 rotate-180 fill-[#F0F6E5] text-[#F0F6E5] transition-transform duration-500 group-hover:scale-105"
//         aria-hidden
//       />

//       <div className="relative z-10 flex items-center gap-2">
//         <Stars value={t.stars ?? 5} />
//         {isGoogle && (
//           <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-[#F2F5FB] px-2 py-0.5 text-[10px] font-bold text-[#5A6678]">
//             <GoogleMark className="h-3 w-3" /> Google
//           </span>
//         )}
//       </div>

//       <p className="relative z-10 mt-5 text-[15.5px] font-medium leading-[1.7] tracking-[-0.005em] text-[#1F2B40]">
//         {t.quote}
//       </p>

//       <div className="relative z-10 mt-auto pt-6">
//         <div className="mb-4 h-px w-full bg-[#EEF0E6]" />
//         <div className="flex items-center gap-3">
//           <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[14px] font-bold ring-1 ring-inset ${avatar}`} aria-hidden>
//             {initials(t.author)}
//           </span>
//           <div className="min-w-0">
//             <h3 className="truncate text-[15px] font-bold leading-tight text-[#0B1B33]">{t.author}</h3>
//             <p className="mt-0.5 truncate text-[12.5px] text-[#5A6678]">{t.context}</p>
//           </div>
//           <span className="ml-auto hidden shrink-0 rounded-full bg-[#F4F8EA] px-2.5 py-1 text-[11px] font-semibold text-[#3E8618] sm:inline">
//             {t.focus}
//           </span>
//         </div>
//       </div>
//     </article>
//   );
// }

// function Stars({
//   value,
//   size = "md",
//   animate = true,
// }: {
//   value: number;
//   size?: "sm" | "md";
//   animate?: boolean;
// }) {
//   const dim = size === "sm" ? "h-3.5 w-3.5" : "h-[18px] w-[18px]";
//   return (
//     <span className="inline-flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) =>
//         animate ? (
//           <motion.span
//             key={i}
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 400, damping: 18 }}
//             className="inline-flex"
//           >
//             <Star className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`} strokeWidth={1.6} aria-hidden />
//           </motion.span>
//         ) : (
//           <Star key={i} className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`} strokeWidth={1.6} aria-hidden />
//         )
//       )}
//     </span>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Video stories                                                             */
// /* -------------------------------------------------------------------------- */

// function VideoStories() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative mt-9 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_88%_50%,rgba(181,255,61,0.12),transparent_34%),radial-gradient(circle_at_8%_20%,rgba(13,90,110,0.16),transparent_36%),linear-gradient(120deg,#07111F_0%,#0B1426_50%,#0B2118_100%)] p-6 shadow-[0_28px_80px_-30px_rgba(7,17,31,0.55)] md:p-8 lg:p-9"
//     >
//       <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//       <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.25fr_0.7fr] lg:items-center">
//         <Collage />

//         <div>
//           <span className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
//             <Video className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
//             Video Stories
//           </span>

//           <h3 className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[34px]">
//             Student <span className="italic text-[#B5FF3D]">Success</span> Stories
//           </h3>

//           <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#C7D1E0]">
//             Real journeys, real results. Watch our students share their experiences,
//             challenges, and how Kota Academy helped them reach their goals.
//           </p>

//           <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
//             {storyChips.map((chip) => {
//               const Icon = chip.icon;
//               return (
//                 <span key={chip.label} className="inline-flex items-center gap-2 text-white">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/14 text-[#B5FF3D]">
//                     <Icon className="h-4 w-4" strokeWidth={2.3} aria-hidden />
//                   </span>
//                   <span className="text-[13px] font-medium">{chip.label}</span>
//                 </span>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex flex-col items-start lg:items-end">
//           <a
//             href="#"
//             className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[15px] font-bold tracking-[-0.01em] text-[#0B1B33] shadow-[0_16px_36px_-14px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B5FF3D,#56AD12)] text-white">
//               <Play className="ml-0.5 h-4 w-4 fill-white" strokeWidth={2} aria-hidden />
//             </span>
//             Watch Stories
//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} aria-hidden />
//           </a>
//           <p className="mt-3 text-[13px] text-[#8FA0B8] lg:text-right">Videos coming soon</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function Collage() {
//   return (
//     <div className="relative mx-auto h-[220px] w-full max-w-[340px] lg:mx-0">
//       <div className="absolute left-0 top-3 h-[170px] w-[170px] overflow-hidden rounded-[20px] border border-white/30 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
//         <Image src={videoImages[0]} alt="Kota Academy student story" fill sizes="200px" className="object-cover" />
//         <div className="absolute inset-0 bg-[#07142F]/25" />
//       </div>
//       <div className="absolute right-2 top-0 h-[105px] w-[120px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
//         <Image src={videoImages[1]} alt="Kota Academy classroom" fill sizes="140px" className="object-cover" />
//       </div>
//       <div className="absolute bottom-0 right-0 h-[112px] w-[128px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
//         <Image src={videoImages[2]} alt="Kota Academy student feedback" fill sizes="150px" className="object-cover" />
//       </div>
//       <button
//         type="button"
//         aria-label="Play student success story video"
//         className="absolute left-[104px] top-[92px] z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#07142F]/55 text-white shadow-[0_16px_34px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
//       >
//         <Play className="ml-0.5 h-6 w-6 fill-white" strokeWidth={2} aria-hidden />
//       </button>
//     </div>
//   );
// }

// function Reassurance() {
//   return (
//     <motion.div variants={fadeUp} className="mt-7 flex justify-center">
//       <div className="inline-flex max-w-[760px] items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-5 py-3 text-[#5A6678] shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
//         <ShieldCheck className="h-5 w-5 shrink-0 text-[#3E8618]" strokeWidth={2.2} aria-hidden />
//         <p className="text-[13px] font-medium leading-5 md:text-[14px]">
//           Reviews are collected from students, parents and public platforms like Google.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// function GoogleMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
//   if (mono) {
//     return (
//       <svg viewBox="0 0 24 24" className={className} aria-hidden fill="#B5FF3D">
//         <path d="M12 11v3.2h4.5c-.2 1.2-1.5 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.2 1.2l2.2-2.1C16.6 4.6 14.5 3.7 12 3.7 6.9 3.7 2.8 7.8 2.8 12.9S6.9 22.1 12 22.1c4.9 0 8.2-3.4 8.2-8.3 0-.6-.1-1-.2-1.5H12z" />
//       </svg>
//     );
//   }
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden>
//       <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
//       <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
//       <path fill="#FBBC05" d="M6 14.4a6.5 6.5 0 0 1 0-4.2V7.4H2.3a10.9 10.9 0 0 0 0 9.8L6 14.4z" />
//       <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 2.3 7.4L6 10.2c.9-2.5 3.2-4.4 6-4.4z" />
//     </svg>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   MotionConfig,
//   type Variants,
// } from "framer-motion";
// import {
//   ArrowRight,
//   GraduationCap,
//   Heart,
//   Play,
//   ShieldCheck,
//   Star,
//   UsersRound,
//   Video,
//   type LucideIcon,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*  Data                                                                      */
// /*  Student & Parent = demo (swap with verified reviews after approval).      */
// /*  Google = real snippets + real combined rating from the GBP screenshots.   */
// /* -------------------------------------------------------------------------- */

// type ReviewType = "student" | "parent" | "google";

// type Testimonial = {
//   type: ReviewType;
//   quote: string;
//   author: string;
//   context: string;
//   focus: string;
//   stars?: number;
// };

// const reviewTabs: { id: ReviewType; label: string; mobileLabel: string }[] = [
//   { id: "student", label: "Student Reviews", mobileLabel: "Students" },
//   { id: "parent", label: "Parent Reviews", mobileLabel: "Parents" },
//   { id: "google", label: "Google Reviews", mobileLabel: "Google" },
// ];

// const testimonials: Testimonial[] = [
//   // ---- STUDENTS (demo) ----
//   { type: "student", quote: "Concepts became much easier to revise because doubts were cleared right after every class.", author: "Aarav Sharma", context: "JEE Aspirant · Classroom Program", focus: "Doubt Support" },
//   { type: "student", quote: "The weekly tests showed me exactly where I was weak and what to fix before the next one.", author: "Sneha Kapoor", context: "NEET Aspirant · Classroom Program", focus: "Weekly Testing" },
//   { type: "student", quote: "Small batches mean the teachers actually know you — it never feels like you're just a roll number.", author: "Priya Verma", context: "JEE Aspirant · Two-Year Program", focus: "Small Batches" },
//   { type: "student", quote: "Doubt sessions after class genuinely changed how confident I feel walking into an exam.", author: "Rohan Mehta", context: "NEET Aspirant · Classroom Program", focus: "Confidence" },
//   { type: "student", quote: "The teachers break down tough topics so simply that revision before exams barely takes time now.", author: "Ananya Iyer", context: "JEE Aspirant · Two-Year Program", focus: "Concept Clarity" },
//   { type: "student", quote: "Regular mentoring kept me on track even when I wanted to give up midway.", author: "Karan Bhatia", context: "JEE Aspirant · Classroom Program", focus: "Mentorship" },
//   // ---- PARENTS (demo) ----
//   { type: "parent", quote: "Regular updates on attendance, tests and progress made the whole journey easy to follow as a parent.", author: "Mr. Rajesh Gupta", context: "Parent of a NEET Student", focus: "Parent Updates" },
//   { type: "parent", quote: "The teachers explain patiently and give children the confidence to ask doubts without hesitation.", author: "Mrs. Anita Singh", context: "Parent of a JEE Student", focus: "Doubt Guidance" },
//   { type: "parent", quote: "The environment is disciplined and focused — exactly what serious exam preparation needs.", author: "Mr. Sandeep Rana", context: "Parent of a Class XII Student", focus: "Discipline" },
//   { type: "parent", quote: "What reassured me most was how reachable the faculty always were whenever I had a concern.", author: "Mrs. Kavita Joshi", context: "Parent of a NEET Student", focus: "Accessibility" },
//   { type: "parent", quote: "My daughter's consistency improved within months — the structure here clearly works.", author: "Mr. Deepak Nair", context: "Parent of a JEE Student", focus: "Consistency" },
//   { type: "parent", quote: "Honest guidance about my son's strengths and gaps, never any false promises.", author: "Mrs. Pooja Agarwal", context: "Parent of a Class XI Student", focus: "Honest Guidance" },
//   // ---- GOOGLE (real snippets from GBP) ----
//   { type: "google", quote: "Nice coaching with good teachers and a great environment.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Teaching Quality" },
//   { type: "google", quote: "Kota Academy provides very good quality of teaching faculties.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Faculty" },
//   { type: "google", quote: "It is the best place to study — all the teachers are very good.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Student Experience" },
//   { type: "google", quote: "Great environment, excellent teaching and detailed concepts.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Environment" },
//   { type: "google", quote: "Teachers are kind and friendly with students.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Supportive Faculty" },
//   { type: "google", quote: "Bharat sir (physics teacher) is the best teacher and an inspiration for all of us.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Mentorship" },
// ];

// const GOOGLE_RATING = 4.7;
// const GOOGLE_COUNT = 179;

// const storyChips: { label: string; icon: LucideIcon }[] = [
//   { label: "Real Experiences", icon: UsersRound },
//   { label: "Honest Feedback", icon: Video },
//   { label: "Inspiring Journeys", icon: Heart },
// ];

// const videoImages = [
//   "/images/kota-academy/classroom/classroom-image-1.jpeg",
//   "/images/kota-academy/classroom/classroom-image-2.jpg",
//   "/images/kota-academy/classroom/image11.jpg",
// ];

// const initials = (name: string) =>
//   name
//     .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "")
//     .replace(/Verified Google Review/i, "G")
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((w) => w[0]?.toUpperCase())
//     .join("");

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
//   visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
// };

// /* -------------------------------------------------------------------------- */
// /*  Section                                                                   */
// /* -------------------------------------------------------------------------- */

// export default function TestimonialsSection() {
//   const [tab, setTab] = useState<ReviewType>("student");
//   const filtered = testimonials.filter((t) => t.type === tab);

//   return (
//     <MotionConfig reducedMotion="user">
//       <section
//         id="testimonials"
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
//           <Tabs tab={tab} setTab={setTab} />
//         </motion.div>

//         {/* testimonial marquee */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           variants={fadeUp}
//           className="relative z-10 mt-8"
//         >
//           <Showcase tab={tab} items={filtered} />
//         </motion.div>

//         <motion.div
//           className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-90px" }}
//           variants={stagger}
//         >
//           <VideoStories />
//           <Reassurance />
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
//       <div className="pointer-events-none absolute left-1/2 top-10 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-[120px]" />
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
//         <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
//           Testimonials
//         </span>
//         <span className="h-px w-9 bg-[#4E9417]/60" />
//       </div>

//       <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
//         What Students &amp; Parents Say About{" "}
//         <span className="text-[#3E9A12]">Kota Academy</span>
//       </h2>

//       <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
//         Real voices from students and parents who experienced the difference —
//         better teaching, consistent support, and focused preparation.
//       </p>

//       <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-4 py-2 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
//         <GoogleMark className="h-4 w-4" />
//         <span className="text-[14px] font-bold text-[#0B1B33]">
//           {GOOGLE_RATING.toFixed(1)}
//         </span>
//         <Stars value={5} size="sm" animate={false} />
//         <span className="text-[13px] text-[#5A6678]">{GOOGLE_COUNT}+ Google reviews</span>
//       </div>
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Tabs                                                                      */
// /* -------------------------------------------------------------------------- */

// function Tabs({ tab, setTab }: { tab: ReviewType; setTab: (t: ReviewType) => void }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="mx-auto mt-8 grid max-w-[560px] grid-cols-3 gap-1.5 rounded-2xl border border-[#E4E7DA] bg-white/70 p-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-xl"
//     >
//       {reviewTabs.map((t) => {
//         const active = tab === t.id;
//         return (
//           <button
//             key={t.id}
//             type="button"
//             onClick={() => setTab(t.id)}
//             className={`relative flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 md:text-[14px] ${
//               active ? "text-white" : "text-[#5A6678] hover:text-[#0B1B33]"
//             }`}
//           >
//             {active && (
//               <motion.span
//                 layoutId="tabPill"
//                 transition={{ type: "spring", stiffness: 380, damping: 32 }}
//                 className="absolute inset-0 rounded-xl bg-[#0B1B33]"
//               />
//             )}
//             <span className="relative z-10 flex items-center gap-2">
//               {t.id === "google" ? (
//                 <GoogleMark className="h-4 w-4" mono={active} />
//               ) : t.id === "student" ? (
//                 <GraduationCap className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`} strokeWidth={2.2} aria-hidden />
//               ) : (
//                 <UsersRound className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`} strokeWidth={2.2} aria-hidden />
//               )}
//               <span className="hidden sm:inline">{t.label}</span>
//               <span className="sm:hidden">{t.mobileLabel}</span>
//             </span>
//           </button>
//         );
//       })}
//     </motion.div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Showcase — desktop dual-row marquee; mobile carousel                      */
// /* -------------------------------------------------------------------------- */

// function Showcase({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
//   const mid = Math.ceil(items.length / 2);
//   const rowA = items.slice(0, mid);
//   const rowB = items.slice(mid).length >= 2 ? items.slice(mid) : items;

//   return (
//     <>
//       {/* desktop / tablet — two opposite infinite rows (slow drift) */}
//       <div className="relative hidden md:block">
//         <EdgeFades />
//         <AnimatePresence mode="popLayout" initial={false}>
//           <motion.div
//             key={tab}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: EXPO }}
//             className="space-y-4"
//           >
//             <MarqueeRow items={rowA} direction="left" duration={64} cardWidth={316} />
//             <MarqueeRow items={rowB} direction="right" duration={72} cardWidth={316} />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* mobile — auto-advancing snap carousel with dots */}
//       <MobileCarousel tab={tab} items={items} />
//     </>
//   );
// }

// function EdgeFades() {
//   return (
//     <>
//       <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#F4F8EA] to-transparent md:w-24" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#F4F8EA] to-transparent md:w-24" />
//     </>
//   );
// }

// function MarqueeRow({
//   items,
//   direction,
//   duration,
//   cardWidth,
// }: {
//   items: Testimonial[];
//   direction: "left" | "right";
//   duration: number;
//   cardWidth: number;
// }) {
//   const base = items.length >= 4 ? items : [...items, ...items];
//   const half = [...base, ...base];
//   const track = [...half, ...half];

//   return (
//     <div className="group/row flex overflow-hidden">
//       <div
//         className="flex w-max shrink-0 group-hover/row:[animation-play-state:paused] motion-reduce:[animation:none]"
//         style={{ animation: `tmarquee-${direction} ${duration}s linear infinite` }}
//       >
//         {track.map((t, i) => (
//           <div key={`${t.author}-${i}`} className="shrink-0 pr-4" style={{ width: cardWidth }}>
//             <ReviewCard t={t} />
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes tmarquee-left {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes tmarquee-right {
//           from {
//             transform: translateX(-50%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function MobileCarousel({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState(0);
//   const pausedRef = useRef(false);
//   const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const cardEls = useCallback(
//     () => Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []),
//     []
//   );

//   const onScroll = () => {
//     const s = scrollerRef.current;
//     if (!s) return;
//     const center = s.getBoundingClientRect().left + s.clientWidth / 2;
//     let best = 0;
//     let bestDist = Infinity;
//     cardEls().forEach((c, i) => {
//       const r = c.getBoundingClientRect();
//       const d = Math.abs(r.left + r.width / 2 - center);
//       if (d < bestDist) {
//         bestDist = d;
//         best = i;
//       }
//     });
//     setActive(best);
//   };

//   const goTo = (i: number) =>
//     cardEls()[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

//   // pause auto-advance briefly on interaction, then resume
//   const pause = () => {
//     pausedRef.current = true;
//     if (resumeTimer.current) clearTimeout(resumeTimer.current);
//     resumeTimer.current = setTimeout(() => {
//       pausedRef.current = false;
//     }, 6000);
//   };

//   // reset to first card when tab changes
//   useEffect(() => {
//     setActive(0);
//     scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
//   }, [tab]);

//   // auto-advance card by card
//   useEffect(() => {
//     const reduce =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (reduce) return;

//     const id = setInterval(() => {
//       if (pausedRef.current) return;
//       setActive((prev) => {
//         const next = (prev + 1) % items.length;
//         cardEls()[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
//         return next;
//       });
//     }, 3200);

//     return () => clearInterval(id);
//   }, [items.length, cardEls]);

//   return (
//     <div className="md:hidden">
//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         onPointerDown={pause}
//         onTouchStart={pause}
//         className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {items.map((t, i) => (
//           <div key={`${t.author}-${i}`} data-card className="w-[82%] max-w-[360px] shrink-0 snap-center">
//             <ReviewCard t={t} />
//           </div>
//         ))}
//       </div>

//       <div className="mt-5 flex items-center justify-center gap-2.5">
//         {items.map((t, i) => (
//           <button
//             key={`${t.author}-dot-${i}`}
//             type="button"
//             aria-label={`View review ${i + 1}`}
//             onClick={() => {
//               pause();
//               goTo(i);
//             }}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               active === i ? "w-6 bg-[#3E9A12]" : "w-2 bg-[#C6CFC0]"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Review card — upgraded material                                           */
// /* -------------------------------------------------------------------------- */

// function ReviewCard({ t }: { t: Testimonial }) {
//   const isGoogle = t.type === "google";
//   const avatar = isGoogle
//     ? "bg-[#F2F5FB] text-[#1466C2] ring-[#DCE6F5]"
//     : "bg-[#EDF8DD] text-[#2C7A12] ring-[#CDEBB0]";

//   return (
//     <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EADD] bg-white p-4 shadow-[0_1px_2px_rgba(11,27,51,0.04),0_10px_24px_-22px_rgba(11,27,51,0.35)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#CBD8BB] hover:shadow-[0_20px_42px_-26px_rgba(16,120,40,0.45)]">
//       {/* header: avatar + identity, stars on the right */}
//       <div className="flex items-center gap-2.5">
//         <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ring-1 ring-inset ${avatar}`} aria-hidden>
//           {initials(t.author)}
//         </span>
//         <div className="min-w-0 flex-1">
//           <h3 className="flex items-center gap-1.5 truncate text-[13.5px] font-bold leading-tight text-[#0B1B33]">
//             {t.author}
//             {isGoogle && <GoogleMark className="h-3.5 w-3.5 shrink-0" />}
//           </h3>
//           <p className="mt-0.5 truncate text-[11px] text-[#5A6678]">{t.context}</p>
//         </div>
//         <Stars value={t.stars ?? 5} size="sm" />
//       </div>

//       <p className="mt-2.5 text-[13px] font-medium leading-[1.55] tracking-[-0.005em] text-[#1F2B40]">
//         “{t.quote}”
//       </p>

//       <span className="mt-3 inline-flex w-fit items-center rounded-full bg-[#F4F8EA] px-2.5 py-0.5 text-[10px] font-semibold text-[#3E8618]">
//         {t.focus}
//       </span>
//     </article>
//   );
// }

// function Stars({
//   value,
//   size = "md",
//   animate = true,
// }: {
//   value: number;
//   size?: "sm" | "md";
//   animate?: boolean;
// }) {
//   const dim = size === "sm" ? "h-3.5 w-3.5" : "h-[18px] w-[18px]";
//   return (
//     <span className="inline-flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) =>
//         animate ? (
//           <motion.span
//             key={i}
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 400, damping: 18 }}
//             className="inline-flex"
//           >
//             <Star className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`} strokeWidth={1.6} aria-hidden />
//           </motion.span>
//         ) : (
//           <Star key={i} className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`} strokeWidth={1.6} aria-hidden />
//         )
//       )}
//     </span>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*  Video stories                                                             */
// /* -------------------------------------------------------------------------- */

// function VideoStories() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="relative mt-9 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_88%_50%,rgba(181,255,61,0.12),transparent_34%),radial-gradient(circle_at_8%_20%,rgba(13,90,110,0.16),transparent_36%),linear-gradient(120deg,#07111F_0%,#0B1426_50%,#0B2118_100%)] p-6 shadow-[0_28px_80px_-30px_rgba(7,17,31,0.55)] md:p-8 lg:p-9"
//     >
//       <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//       <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.25fr_0.7fr] lg:items-center">
//         <Collage />

//         <div>
//           <span className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
//             <Video className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
//             Video Stories
//           </span>

//           <h3 className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[34px]">
//             Student <span className="italic text-[#B5FF3D]">Success</span> Stories
//           </h3>

//           <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#C7D1E0]">
//             Real journeys, real results. Watch our students share their experiences,
//             challenges, and how Kota Academy helped them reach their goals.
//           </p>

//           <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
//             {storyChips.map((chip) => {
//               const Icon = chip.icon;
//               return (
//                 <span key={chip.label} className="inline-flex items-center gap-2 text-white">
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/14 text-[#B5FF3D]">
//                     <Icon className="h-4 w-4" strokeWidth={2.3} aria-hidden />
//                   </span>
//                   <span className="text-[13px] font-medium">{chip.label}</span>
//                 </span>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex flex-col items-start lg:items-end">
//           <a
//             href="#"
//             className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[15px] font-bold tracking-[-0.01em] text-[#0B1B33] shadow-[0_16px_36px_-14px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
//           >
//             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B5FF3D,#56AD12)] text-white">
//               <Play className="ml-0.5 h-4 w-4 fill-white" strokeWidth={2} aria-hidden />
//             </span>
//             Watch Stories
//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} aria-hidden />
//           </a>
//           <p className="mt-3 text-[13px] text-[#8FA0B8] lg:text-right">Videos coming soon</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function Collage() {
//   return (
//     <div className="relative mx-auto h-[220px] w-full max-w-[340px] lg:mx-0">
//       <div className="absolute left-0 top-3 h-[170px] w-[170px] overflow-hidden rounded-[20px] border border-white/30 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
//         <Image src={videoImages[0]} alt="Kota Academy student story" fill sizes="200px" className="object-cover" />
//         <div className="absolute inset-0 bg-[#07142F]/25" />
//       </div>
//       <div className="absolute right-2 top-0 h-[105px] w-[120px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
//         <Image src={videoImages[1]} alt="Kota Academy classroom" fill sizes="140px" className="object-cover" />
//       </div>
//       <div className="absolute bottom-0 right-0 h-[112px] w-[128px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
//         <Image src={videoImages[2]} alt="Kota Academy student feedback" fill sizes="150px" className="object-cover" />
//       </div>
//       <button
//         type="button"
//         aria-label="Play student success story video"
//         className="absolute left-[104px] top-[92px] z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#07142F]/55 text-white shadow-[0_16px_34px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
//       >
//         <Play className="ml-0.5 h-6 w-6 fill-white" strokeWidth={2} aria-hidden />
//       </button>
//     </div>
//   );
// }

// function Reassurance() {
//   return (
//     <motion.div variants={fadeUp} className="mt-7 flex justify-center">
//       <div className="inline-flex max-w-[760px] items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-5 py-3 text-[#5A6678] shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
//         <ShieldCheck className="h-5 w-5 shrink-0 text-[#3E8618]" strokeWidth={2.2} aria-hidden />
//         <p className="text-[13px] font-medium leading-5 md:text-[14px]">
//           Reviews are collected from students, parents and public platforms like Google.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// function GoogleMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
//   if (mono) {
//     return (
//       <svg viewBox="0 0 24 24" className={className} aria-hidden fill="#B5FF3D">
//         <path d="M12 11v3.2h4.5c-.2 1.2-1.5 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.2 1.2l2.2-2.1C16.6 4.6 14.5 3.7 12 3.7 6.9 3.7 2.8 7.8 2.8 12.9S6.9 22.1 12 22.1c4.9 0 8.2-3.4 8.2-8.3 0-.6-.1-1-.2-1.5H12z" />
//       </svg>
//     );
//   }
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden>
//       <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
//       <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
//       <path fill="#FBBC05" d="M6 14.4a6.5 6.5 0 0 1 0-4.2V7.4H2.3a10.9 10.9 0 0 0 0 9.8L6 14.4z" />
//       <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 2.3 7.4L6 10.2c.9-2.5 3.2-4.4 6-4.4z" />
//     </svg>
//   );
// }



"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Play,
  ShieldCheck,
  Star,
  UsersRound,
  Video,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/*  Student & Parent = demo (swap with verified reviews after approval).      */
/*  Google = real snippets + real combined rating from the GBP screenshots.   */
/* -------------------------------------------------------------------------- */

type ReviewType = "student" | "parent" | "google";

type Testimonial = {
  type: ReviewType;
  quote: string;
  author: string;
  context: string;
  focus: string;
  stars?: number;
};

const reviewTabs: { id: ReviewType; label: string; mobileLabel: string }[] = [
  { id: "student", label: "Student Reviews", mobileLabel: "Students" },
  { id: "parent", label: "Parent Reviews", mobileLabel: "Parents" },
  { id: "google", label: "Google Reviews", mobileLabel: "Google" },
];

const testimonials: Testimonial[] = [
  // ---- STUDENTS (demo) ----
  { type: "student", quote: "Concepts became much easier to revise because doubts were cleared right after every class.", author: "Aarav Sharma", context: "JEE Aspirant · Classroom Program", focus: "Doubt Support" },
  { type: "student", quote: "The weekly tests showed me exactly where I was weak and what to fix before the next one.", author: "Sneha Kapoor", context: "NEET Aspirant · Classroom Program", focus: "Weekly Testing" },
  { type: "student", quote: "Small batches mean the teachers actually know you — it never feels like you're just a roll number.", author: "Priya Verma", context: "JEE Aspirant · Two-Year Program", focus: "Small Batches" },
  { type: "student", quote: "Doubt sessions after class genuinely changed how confident I feel walking into an exam.", author: "Rohan Mehta", context: "NEET Aspirant · Classroom Program", focus: "Confidence" },
  { type: "student", quote: "The teachers break down tough topics so simply that revision before exams barely takes time now.", author: "Ananya Iyer", context: "JEE Aspirant · Two-Year Program", focus: "Concept Clarity" },
  { type: "student", quote: "Regular mentoring kept me on track even when I wanted to give up midway.", author: "Karan Bhatia", context: "JEE Aspirant · Classroom Program", focus: "Mentorship" },
  // ---- PARENTS (demo) ----
  { type: "parent", quote: "Regular updates on attendance, tests and progress made the whole journey easy to follow as a parent.", author: "Mr. Rajesh Gupta", context: "Parent of a NEET Student", focus: "Parent Updates" },
  { type: "parent", quote: "The teachers explain patiently and give children the confidence to ask doubts without hesitation.", author: "Mrs. Anita Singh", context: "Parent of a JEE Student", focus: "Doubt Guidance" },
  { type: "parent", quote: "The environment is disciplined and focused — exactly what serious exam preparation needs.", author: "Mr. Sandeep Rana", context: "Parent of a Class XII Student", focus: "Discipline" },
  { type: "parent", quote: "What reassured me most was how reachable the faculty always were whenever I had a concern.", author: "Mrs. Kavita Joshi", context: "Parent of a NEET Student", focus: "Accessibility" },
  { type: "parent", quote: "My daughter's consistency improved within months — the structure here clearly works.", author: "Mr. Deepak Nair", context: "Parent of a JEE Student", focus: "Consistency" },
  { type: "parent", quote: "Honest guidance about my son's strengths and gaps, never any false promises.", author: "Mrs. Pooja Agarwal", context: "Parent of a Class XI Student", focus: "Honest Guidance" },
  // ---- GOOGLE (real snippets from GBP) ----
  { type: "google", quote: "Nice coaching with good teachers and a great environment.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Teaching Quality" },
  { type: "google", quote: "Kota Academy provides very good quality of teaching faculties.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Faculty" },
  { type: "google", quote: "It is the best place to study — all the teachers are very good.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Student Experience" },
  { type: "google", quote: "Great environment, excellent teaching and detailed concepts.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Environment" },
  { type: "google", quote: "Teachers are kind and friendly with students.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Supportive Faculty" },
  { type: "google", quote: "Bharat sir (physics teacher) is the best teacher and an inspiration for all of us.", author: "Verified Google Review", context: "Kota Academy · Greater Noida", focus: "Mentorship" },
];

const GOOGLE_RATING = 4.7;
const GOOGLE_COUNT = 179;

const storyChips: { label: string; icon: LucideIcon }[] = [
  { label: "Real Experiences", icon: UsersRound },
  { label: "Honest Feedback", icon: Video },
  { label: "Inspiring Journeys", icon: Heart },
];

const videoImages = [
  "/images/kota-academy/classroom/classroom-image-1.jpeg",
  "/images/kota-academy/classroom/classroom-image-2.jpg",
  "/images/kota-academy/classroom/image11.jpg",
];

const initials = (name: string) =>
  name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, "")
    .replace(/Verified Google Review/i, "G")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

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
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function TestimonialsSection() {
  const [tab, setTab] = useState<ReviewType>("student");
  const filtered = testimonials.filter((t) => t.type === tab);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="testimonials"
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
          <Tabs tab={tab} setTab={setTab} />
        </motion.div>

        {/* testimonial marquee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative z-10 mt-8"
        >
          <Showcase tab={tab} items={filtered} />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          variants={stagger}
        >
          <VideoStories />
          <Reassurance />
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
      <div className="pointer-events-none absolute left-1/2 top-10 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-[#B5FF3D]/12 blur-[120px]" />
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
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2F7D17]">
          Testimonials
        </span>
        <span className="h-px w-9 bg-[#4E9417]/60" />
      </div>

      <h2 className="mx-auto max-w-[820px] text-balance text-[30px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B1B33] sm:text-[38px] md:text-[46px] lg:text-[50px]">
        What Students &amp; Parents Say About{" "}
        <span className="text-[#3E9A12]">Kota Academy</span>
      </h2>

      <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-[#4A5670] md:text-[16px]">
        Real voices from students and parents who experienced the difference —
        better teaching, consistent support, and focused preparation.
      </p>

      <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-4 py-2 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
        <GoogleMark className="h-4 w-4" />
        <span className="text-[14px] font-bold text-[#0B1B33]">
          {GOOGLE_RATING.toFixed(1)}
        </span>
        <Stars value={5} size="sm" animate={false} />
        <span className="text-[13px] text-[#5A6678]">{GOOGLE_COUNT}+ Google reviews</span>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tabs                                                                      */
/* -------------------------------------------------------------------------- */

function Tabs({ tab, setTab }: { tab: ReviewType; setTab: (t: ReviewType) => void }) {
  return (
    <motion.div
      variants={fadeUp}
      className="mx-auto mt-8 grid max-w-[560px] grid-cols-3 gap-1.5 rounded-2xl border border-[#E4E7DA] bg-white/70 p-1.5 shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-xl"
    >
      {reviewTabs.map((t) => {
        const active = tab === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`relative flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors duration-200 md:text-[14px] ${
              active ? "text-white" : "text-[#5A6678] hover:text-[#0B1B33]"
            }`}
          >
            {active && (
              <motion.span
                layoutId="tabPill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-xl bg-[#0B1B33]"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {t.id === "google" ? (
                <GoogleMark className="h-4 w-4" mono={active} />
              ) : t.id === "student" ? (
                <GraduationCap className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`} strokeWidth={2.2} aria-hidden />
              ) : (
                <UsersRound className={`h-4 w-4 ${active ? "text-[#B5FF3D]" : "text-[#3E8618]"}`} strokeWidth={2.2} aria-hidden />
              )}
              <span className="hidden sm:inline">{t.label}</span>
              <span className="sm:hidden">{t.mobileLabel}</span>
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Showcase — desktop dual-row marquee; mobile carousel                      */
/* -------------------------------------------------------------------------- */

function Showcase({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
  const mid = Math.ceil(items.length / 2);
  const rowA = items.slice(0, mid);
  const rowB = items.slice(mid).length >= 2 ? items.slice(mid) : items;

  return (
    <>
      {/* desktop / tablet — two opposite infinite rows (slow drift) */}
      <div className="relative hidden md:block">
        <EdgeFades />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EXPO }}
            className="space-y-4"
          >
            <MarqueeRow items={rowA} direction="left" duration={64} cardWidth={316} />
            <MarqueeRow items={rowB} direction="right" duration={72} cardWidth={316} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* mobile — auto-advancing snap carousel with dots */}
      <MobileCarousel tab={tab} items={items} />
    </>
  );
}

function EdgeFades() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#F4F8EA] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#F4F8EA] to-transparent md:w-24" />
    </>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
  cardWidth,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  duration: number;
  cardWidth: number;
}) {
  const base = items.length >= 4 ? items : [...items, ...items];
  const half = [...base, ...base];
  const track = [...half, ...half];

  return (
    <div className="group/row flex overflow-hidden">
      <div
        className="flex w-max shrink-0 group-hover/row:[animation-play-state:paused] motion-reduce:[animation:none]"
        style={{ animation: `tmarquee-${direction} ${duration}s linear infinite` }}
      >
        {track.map((t, i) => (
          <div key={`${t.author}-${i}`} className="shrink-0 pr-4" style={{ width: cardWidth }}>
            <ReviewCard t={t} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes tmarquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes tmarquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

function MobileCarousel({ tab, items }: { tab: ReviewType; items: Testimonial[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cardEls = useCallback(
    () => Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? []),
    []
  );

  const onScroll = () => {
    const s = scrollerRef.current;
    if (!s) return;
    const center = s.getBoundingClientRect().left + s.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cardEls().forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };

  const goTo = (i: number) => {
    const s = scrollerRef.current;
    const card = cardEls()[i];
    if (!s || !card) return;
    // scroll the carousel horizontally only — never the page
    const left = card.offsetLeft - (s.clientWidth - card.clientWidth) / 2;
    s.scrollTo({ left, behavior: "smooth" });
  };

  // pause auto-advance briefly on interaction, then resume
  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 6000);
  };

  // reset to first card when tab changes
  useEffect(() => {
    setActive(0);
    scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [tab]);

  // auto-advance card by card (horizontal scroll only), and ONLY while the
  // carousel is actually on screen — so it never tugs the page from elsewhere
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = scrollerRef.current;
    if (!el) return;

    let inView = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    const id = setInterval(() => {
      if (pausedRef.current || !inView) return;
      const s = scrollerRef.current;
      if (!s) return;
      setActive((prev) => {
        const next = (prev + 1) % items.length;
        const card = cardEls()[next];
        if (card) {
          const left = card.offsetLeft - (s.clientWidth - card.clientWidth) / 2;
          s.scrollTo({ left, behavior: "smooth" });
        }
        return next;
      });
    }, 3200);

    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, [items.length, cardEls]);

  return (
    <div className="md:hidden">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        onPointerDown={pause}
        onTouchStart={pause}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <div key={`${t.author}-${i}`} data-card className="w-[82%] max-w-[360px] shrink-0 snap-center">
            <ReviewCard t={t} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2.5">
        {items.map((t, i) => (
          <button
            key={`${t.author}-dot-${i}`}
            type="button"
            aria-label={`View review ${i + 1}`}
            onClick={() => {
              pause();
              goTo(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-[#3E9A12]" : "w-2 bg-[#C6CFC0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Review card — upgraded material                                           */
/* -------------------------------------------------------------------------- */

function ReviewCard({ t }: { t: Testimonial }) {
  const isGoogle = t.type === "google";
  const avatar = isGoogle
    ? "bg-[#F2F5FB] text-[#1466C2] ring-[#DCE6F5]"
    : "bg-[#EDF8DD] text-[#2C7A12] ring-[#CDEBB0]";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7EADD] bg-white p-4 shadow-[0_1px_2px_rgba(11,27,51,0.04),0_10px_24px_-22px_rgba(11,27,51,0.35)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#CBD8BB] hover:shadow-[0_20px_42px_-26px_rgba(16,120,40,0.45)]">
      {/* header: avatar + identity, stars on the right */}
      <div className="flex items-center gap-2.5">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ring-1 ring-inset ${avatar}`} aria-hidden>
          {initials(t.author)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="flex items-center gap-1.5 truncate text-[13.5px] font-bold leading-tight text-[#0B1B33]">
            {t.author}
            {isGoogle && <GoogleMark className="h-3.5 w-3.5 shrink-0" />}
          </h3>
          <p className="mt-0.5 truncate text-[11px] text-[#5A6678]">{t.context}</p>
        </div>
        <Stars value={t.stars ?? 5} size="sm" />
      </div>

      <p className="mt-2.5 text-[13px] font-medium leading-[1.55] tracking-[-0.005em] text-[#1F2B40]">
        “{t.quote}”
      </p>

      <span className="mt-3 inline-flex w-fit items-center rounded-full bg-[#F4F8EA] px-2.5 py-0.5 text-[10px] font-semibold text-[#3E8618]">
        {t.focus}
      </span>
    </article>
  );
}

function Stars({
  value,
  size = "md",
  animate = true,
}: {
  value: number;
  size?: "sm" | "md";
  animate?: boolean;
}) {
  const dim = size === "sm" ? "h-3.5 w-3.5" : "h-[18px] w-[18px]";
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
        animate ? (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 400, damping: 18 }}
            className="inline-flex"
          >
            <Star className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`} strokeWidth={1.6} aria-hidden />
          </motion.span>
        ) : (
          <Star key={i} className={`${dim} ${i < value ? "fill-[#F5B642] text-[#F5B642]" : "fill-[#E7E9E0] text-[#E7E9E0]"}`} strokeWidth={1.6} aria-hidden />
        )
      )}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Video stories                                                             */
/* -------------------------------------------------------------------------- */

function VideoStories() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative mt-9 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_88%_50%,rgba(181,255,61,0.12),transparent_34%),radial-gradient(circle_at_8%_20%,rgba(13,90,110,0.16),transparent_36%),linear-gradient(120deg,#07111F_0%,#0B1426_50%,#0B2118_100%)] p-6 shadow-[0_28px_80px_-30px_rgba(7,17,31,0.55)] md:p-8 lg:p-9"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.25fr_0.7fr] lg:items-center">
        <Collage />

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#B5FF3D]/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#B5FF3D] ring-1 ring-inset ring-[#B5FF3D]/25">
            <Video className="h-3.5 w-3.5" strokeWidth={2.3} aria-hidden />
            Video Stories
          </span>

          <h3 className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[34px]">
            Student <span className="italic text-[#B5FF3D]">Success</span> Stories
          </h3>

          <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#C7D1E0]">
            Real journeys, real results. Watch our students share their experiences,
            challenges, and how Kota Academy helped them reach their goals.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
            {storyChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <span key={chip.label} className="inline-flex items-center gap-2 text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B5FF3D]/14 text-[#B5FF3D]">
                    <Icon className="h-4 w-4" strokeWidth={2.3} aria-hidden />
                  </span>
                  <span className="text-[13px] font-medium">{chip.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[15px] font-bold tracking-[-0.01em] text-[#0B1B33] shadow-[0_16px_36px_-14px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#B5FF3D,#56AD12)] text-white">
              <Play className="ml-0.5 h-4 w-4 fill-white" strokeWidth={2} aria-hidden />
            </span>
            Watch Stories
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.4} aria-hidden />
          </a>
          <p className="mt-3 text-[13px] text-[#8FA0B8] lg:text-right">Videos coming soon</p>
        </div>
      </div>
    </motion.div>
  );
}

function Collage() {
  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[340px] lg:mx-0">
      <div className="absolute left-0 top-3 h-[170px] w-[170px] overflow-hidden rounded-[20px] border border-white/30 shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
        <Image src={videoImages[0]} alt="Kota Academy student story" fill sizes="200px" className="object-cover" />
        <div className="absolute inset-0 bg-[#07142F]/25" />
      </div>
      <div className="absolute right-2 top-0 h-[105px] w-[120px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
        <Image src={videoImages[1]} alt="Kota Academy classroom" fill sizes="140px" className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 h-[112px] w-[128px] overflow-hidden rounded-2xl border border-white/30 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
        <Image src={videoImages[2]} alt="Kota Academy student feedback" fill sizes="150px" className="object-cover" />
      </div>
      <button
        type="button"
        aria-label="Play student success story video"
        className="absolute left-[104px] top-[92px] z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#07142F]/55 text-white shadow-[0_16px_34px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
      >
        <Play className="ml-0.5 h-6 w-6 fill-white" strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}

function Reassurance() {
  return (
    <motion.div variants={fadeUp} className="mt-7 flex justify-center">
      <div className="inline-flex max-w-[760px] items-center gap-3 rounded-full border border-[#E4E7DA] bg-white/70 px-5 py-3 text-[#5A6678] shadow-[0_1px_2px_rgba(11,27,51,0.04)] backdrop-blur-sm">
        <ShieldCheck className="h-5 w-5 shrink-0 text-[#3E8618]" strokeWidth={2.2} aria-hidden />
        <p className="text-[13px] font-medium leading-5 md:text-[14px]">
          Reviews are collected from students, parents and public platforms like Google.
        </p>
      </div>
    </motion.div>
  );
}

function GoogleMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  if (mono) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="#B5FF3D">
        <path d="M12 11v3.2h4.5c-.2 1.2-1.5 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.6 3.2 1.2l2.2-2.1C16.6 4.6 14.5 3.7 12 3.7 6.9 3.7 2.8 7.8 2.8 12.9S6.9 22.1 12 22.1c4.9 0 8.2-3.4 8.2-8.3 0-.6-.1-1-.2-1.5H12z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
      <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M6 14.4a6.5 6.5 0 0 1 0-4.2V7.4H2.3a10.9 10.9 0 0 0 0 9.8L6 14.4z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 2.3 7.4L6 10.2c.9-2.5 3.2-4.4 6-4.4z" />
    </svg>
  );
}