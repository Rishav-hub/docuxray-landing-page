import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import LogoShowcase from '@/components/LogoShowcase/LogoShowcase';
import PainPointSection from '@/components/PainPointSection/PainPointSection';
import FeatureShowcase from '@/components/FeatureShowcase/FeatureShowcase';
import ValueProposition from '@/components/ValueProposition/ValueProposition';
import SuccessStories from '@/components/SuccessStories/SuccessStories';
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection';
import FAQSection from '@/components/FAQSection/FAQSection';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <LogoShowcase />
      <PainPointSection />
      <FeatureShowcase />
      <ValueProposition />
      <SuccessStories />
      <BenefitsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

export default HomePage;

