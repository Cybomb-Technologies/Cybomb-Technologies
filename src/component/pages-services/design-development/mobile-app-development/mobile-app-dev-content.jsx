import React from "react";
import MobileAppBanner from "./mobile-app-dev-banner";
import MobileInfoStats from './mobile-app-dev-section/mobile-InfoStats';
import MobileServiceOfferings from './mobile-app-dev-section/mobile-service-offerings';
import WhyChooseUs from './mobile-app-dev-section/mobile-app-WhyChoose';
import MobileAppEngagementModels from './mobile-app-dev-section/mobile-app-EngagementModels';
import MobileAppWebPresenceSection from './mobile-app-dev-section/mobile-app-WebPresenceSection';
import MobileAppTechnologiesSection from './mobile-app-dev-section/mobile-app-TechnologiesSection';

function MobileAppDevContent() {
  return (
   <section>
    <MobileAppBanner/>
    <MobileInfoStats/>
    <MobileServiceOfferings/>
    <MobileAppTechnologiesSection/>
    <WhyChooseUs/>
    <MobileAppWebPresenceSection/>
    <MobileAppEngagementModels/>
   </section>
  );
}

export default MobileAppDevContent;