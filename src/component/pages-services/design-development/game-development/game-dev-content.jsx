import React from "react";
import GameDevBanner from "./game-dev-banner";
import GameInfoStats from "./game-development-section/game-dev-InfoStats";
import GameServiceOfferings from "./game-development-section/game-dev-service-offerings";
import GameTechnologiesSection from "./game-development-section/game-dev-TechnologiesSection";
import GameWhyChooseUs from "./game-development-section/game-dev-WhyChoose";
import GameDevEngagementModels from "./game-development-section/game-dev-EngagementModels";
import GameDevPresenceSection from "./game-development-section/game-dev-WebPresenceSection";
import GameDevEngagementOptions from "./game-development-section/game-dev-EngagementOptions";

function GameDevContent() {
  return (
   <section>
    <GameDevBanner/>
    <GameInfoStats/>
    <GameServiceOfferings/>
    <GameTechnologiesSection/>
    <GameWhyChooseUs/>
    <GameDevPresenceSection/>
    <GameDevEngagementModels/>
    <GameDevEngagementOptions/>
   </section>
  );
}

export default GameDevContent;