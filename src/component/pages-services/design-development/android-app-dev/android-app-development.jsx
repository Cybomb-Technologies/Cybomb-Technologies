import React from "react";
import AndroidAppDevContent from "./android-app-dev-content";
import InfoStats from "./andorid-app-dev-section/InfoStats";
import AndroidServiceOfferings from "./andorid-app-dev-section/android-service-offerings";
import TechInfo from "./andorid-app-dev-section/TechInfo";
import AndroidDevProcess from "./andorid-app-dev-section/android-dev-process";
import StillNotSure from "../../../forms/StillNotSure";

function AndroidAppDevelopment() {
  return (
    <>
      <AndroidAppDevContent />
      <InfoStats/>
      <AndroidServiceOfferings/>
      <TechInfo/>
      <AndroidDevProcess/>
      <StillNotSure/>
    </>
  );
}

export default AndroidAppDevelopment;
