import React from "react";
import AndroidAppDevContent from "./android-app-dev-content";
import InfoStats from "./andorid-app-dev-section/android-InfoStats";
import AndroidServiceOfferings from "./andorid-app-dev-section/android-service-offerings";
import TechInfo from "./andorid-app-dev-section/android-TechInfo";
import AndroidAppTechnologies from "./andorid-app-dev-section/android-app-technologies-section";

import MobileDevProcess from "../../../../common-ui/agile-process/mobile-dev-agile-process";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";


function AndroidAppDevelopment() {
  return (
    <>
      <AndroidAppDevContent />
      <InfoStats/>
      <AndroidServiceOfferings/>
      <AndroidAppTechnologies/>
      <TechInfo/>
      <MobileDevProcess/>
      <StillNotSure/>
    </>
  );
}

export default AndroidAppDevelopment;
