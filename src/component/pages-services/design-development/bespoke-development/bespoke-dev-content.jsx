import Info from './Sections/Info';
import ServicesSection from './Sections/ServicesSection';
import TechToolsSection from './Sections/TechToolsSection';
import WhyChooseUs from '../web-development/sections/WhyChooseUs';
import CallToAction from './Sections/CallToAction';
import BespokeProcess from './Sections/bespoke-process';
import EngagementModels from './Sections/EngagementModels';




export default function BespokeDevContent() {
  return (
    <main>
      <Info/>
      <ServicesSection/>
      <TechToolsSection/>
      <WhyChooseUs/>
      <CallToAction/>
      <BespokeProcess/>
      <EngagementModels/>
    </main>
  );
}