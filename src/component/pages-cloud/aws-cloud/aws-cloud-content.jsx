import Info from './Sections/Info';
import AwsOffers from './Sections/aws-offers';
import ServicesSection from './Sections/ServicesSection';
import TechToolsSection from './Sections/TechToolsSection';
import CallToAction from './Sections/CallToAction';
import AWSUseCase from './Sections/aws-usecase';
import EngagementModels from './Sections/EngagementModels';

export default function AWSContent() {
  return (
    <main>
      <Info/>
      <AwsOffers/>
      <ServicesSection/>
      <TechToolsSection/>
      <CallToAction/>
      <AWSUseCase/>
      <EngagementModels/>
    </main>
  );
}