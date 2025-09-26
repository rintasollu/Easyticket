import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SpecialOfferSection from "@/components/sections/SpecialOfferSection";
import WhoShouldJoinSection from "@/components/sections/WhoShouldJoinSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyJoinSection />
      <SpecialOfferSection />
      <WhoShouldJoinSection />
      <FaqSection />
      <Footer />
    </main>
  );
}