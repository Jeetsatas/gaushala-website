import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Achievements from "@/components/sections/achievements";
import SewaSelection from "@/components/sections/sewa-selection";
import RecentUpdates from "@/components/sections/recent-updates";
import VideoGallery from "@/components/sections/video-gallery";
import Accreditations from "@/components/sections/accreditations";
import DonorsAndPayment from "@/components/sections/recent-donors";
import TestimonialsSection from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF5F5]">
      <Header />
      <main>
        <HeroSection />
        <Achievements />
        <SewaSelection />
        <RecentUpdates />
        <VideoGallery />
        <Accreditations />
        <DonorsAndPayment />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
