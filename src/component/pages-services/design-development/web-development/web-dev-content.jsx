import Info from './Sections/info';
import ServicesSection from "./sections/ServicesSection";
import TechToolsSection from "./sections/TechToolsSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import CallToAction from "./sections/CallToAction";
import EngagementModels from "./sections/EngagementModels";
export default function WebDevContent() {
  return (
    <main>
      <Info/>
      <ServicesSection />
      <TechToolsSection />
      <WhyChooseUs />
      <CallToAction />
      <EngagementModels />
      
    </main>
  );
}