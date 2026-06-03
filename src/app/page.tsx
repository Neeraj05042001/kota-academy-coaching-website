import KotaAcademyBranchLocations from "@/components/sections/branch-location/BranchLocation";
import KotaAcademyCampusGallery from "@/components/sections/campus-gallery/CampusGallery";
import { CoursesSection } from "@/components/sections/courses";
// import CoursesSection from "@/components/sections/courses-2/CoursesSection";
import CredibilityStrip from "@/components/sections/CreadibilityStrip";
import KotaAcademyFacultySection from "@/components/sections/faculty-section/FacultySection";
import FacultySection from "@/components/sections/faculty-section/FacultySection";
import FAQSection from "@/components/sections/faq/FAQSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { Navbar } from "@/components/sections/nav";
import ResultsSection from "@/components/sections/ResultSection";
import KotaAcademyStudentJourney from "@/components/sections/student-journey/StudentJourney";
import SupportStrip from "@/components/sections/SupportStrip";
import KotaAcademyTestimonialsSection from "@/components/sections/testimonial/Testimonial";
import { UspSection } from "@/components/sections/usp";
import KotaAcademyWhySection from "@/components/sections/why-kota-academy/KotaAcademyWhySection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base text-primary">
      <Navbar />
      <HeroSection />

      {/* Credibility Strip */}
      <section className="relative z-20 h-65 bg-[radial-gradient(circle_at_85%_25%,rgba(190,242,100,0.24),transparent_32%),radial-gradient(circle_at_10%_70%,rgba(125,211,252,0.14),transparent_30%),linear-gradient(135deg,#F6F8EE_0%,#F8FAF2_42%,#EEF5DE_100%)] px-5  sm:px-7 md:h-45 lg:h-25 lg:px-8">
        <CredibilityStrip />
      </section>

      {/* Results Section */}
      <ResultsSection />
      {/* <CoursesSection/> */}
      <CoursesSection/>
      
      <KotaAcademyWhySection/>
      <KotaAcademyStudentJourney />
      {/* <UspSection/> */}
      <KotaAcademyFacultySection/>
      <KotaAcademyTestimonialsSection/>
      <KotaAcademyCampusGallery/>
      <KotaAcademyBranchLocations/>
      <FAQSection/>
      
    </main>
  );
}