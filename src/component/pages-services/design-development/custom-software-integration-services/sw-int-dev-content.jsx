import Info from './Sections/Info';
import ServicesSection from './Sections/ServicesSection';
import TechToolsSection from './Sections/TechToolsSection';
import WhyChooseUs from './Sections/WhyChooseUs';
import CallToAction from './Sections/CallToAction';
import SwIntProcess from './Sections/sw-int-process';
import EngagementModels from './Sections/EngagementModels';




export default function SwIntDevContent() {
  return (
    <main>
      <Info/>
      <ServicesSection/>
      <TechToolsSection/>
      <WhyChooseUs/>
      <CallToAction/>
      <SwIntProcess/>
      <EngagementModels/>
    </main>
  );
}