import ServicesSection from "./sections/ServicesSection";
import TechToolsSection from "./sections/TechToolsSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import CallToAction from "./sections/CallToAction";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import EngagementModels from "./sections/EngagementModels";
import AgileProcess from "./sections/AgileProcess";
export default function WebDevContent() {
  return (
    <main>
      <ServicesSection />
      <TechToolsSection />
      <WhyChooseUs />
      <CallToAction />
      <EngagementModels />
      <AgileProcess />
      <StillNotSure />
    </main>
  );
}