import HeroSection from '@/components/HeroSection/HeroSection';
import LogoShowcase from '@/components/LogoShowcase/LogoShowcase';
import PainPointSection from '@/components/PainPointSection/PainPointSection';
import FeatureShowcase from '@/components/FeatureShowcase/FeatureShowcase';
import ValueProposition from '@/components/ValueProposition/ValueProposition';
import BenefitsSection from '@/components/BenefitsSection/BenefitsSection';
import FAQSection from '@/components/FAQSection/FAQSection';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoShowcase />
      <PainPointSection />
      <FeatureShowcase />
      <ValueProposition />
      <BenefitsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

export default HomePage;

