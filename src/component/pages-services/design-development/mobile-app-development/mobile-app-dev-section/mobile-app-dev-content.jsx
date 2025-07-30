import React from "react";
import MobileAppBanner from "./mobile-app-dev-banner";
import MobileInfoStats from './mobile-InfoStats';
import MobileServiceOfferings from './mobile-service-offerings';
import WhyChooseUs from './mobile-app-WhyChoose';
import MobileAppEngagementModels from './mobile-app-EngagementModels';
import MobileAppWebPresenceSection from './mobile-app-WebPresenceSection';
import MobileAppTechnologiesSection from './mobile-app-TechnologiesSection';


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