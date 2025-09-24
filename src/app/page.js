// src/app/page.js
import HeroSection from '@/components/sections/HeroSection';
import WhyJoinSection from '@/components/sections/WhyJoinSection';
import SpecialOfferSection from '@/components/sections/SpecialOfferSection';
import WhoShouldJoinSection from '@/components/sections/WhoShouldJoinSection';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
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