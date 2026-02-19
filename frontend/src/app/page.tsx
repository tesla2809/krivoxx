import { HeroSection } from '@/components/home/HeroSection';
import { ServicePillars } from '@/components/home/ServicePillars';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';

import { IndustriesServed } from '@/components/home/IndustriesServed';
import { TestimonialsSlider } from '@/components/home/TestimonialsSlider';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePillars />
      <WhyChooseUs />
      <IndustriesServed />
      
      <CTASection />
    </>
  );
}