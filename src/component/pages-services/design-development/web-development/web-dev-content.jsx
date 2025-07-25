import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PricingSection from "./sections/PricingSection";
import CTASection from "./sections/CTASection";
import TechToolsSection from "./sections/TechToolsSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import CallToAction from "./sections/CallToAction";
export default function WebDevContent() {
  return (
    <main>
      <ServicesSection />
      <TechToolsSection />
      <WhyChooseUs />
      <CallToAction />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}