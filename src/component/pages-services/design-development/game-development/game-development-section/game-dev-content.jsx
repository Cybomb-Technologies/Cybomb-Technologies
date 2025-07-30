import React from "react";
import GameDevBanner from "./game-dev-banner";
import GameInfoStats from "./game-dev-InfoStats";
import GameServiceOfferings from "./game-dev-service-offerings";
import GameTechnologiesSection from "./game-dev-TechnologiesSection";
import GameWhyChooseUs from "./game-dev-WhyChoose";
import GameDevProcess from "./game-dev-DevProcess";
import GameDevPresenceSection from "./game-dev-WebPresenceSection";
import GameDevEngagementOptions from "./game-dev-EngagementOptions";

const process = [
  {
    title: 'Game Concept & Mechanics Planning',
    description: "Define game type, core loop, features, and target platforms",
  },
  {
    title: 'Storyboarding & Design',
    description: "Sketch out levels, characters, UI, and flow of the game",
  },
  {
    title: 'Development & Iteration',
    description: "Build game logic, animations, assets, and mechanics in agile sprints",
  },
  {
    title: 'Testing & Bug Fixing',
    description: "Ensure playability, balance, and cross-device compatibility",
  },
  {
    title: 'Launch & Post-Release Support',
    description: "Publish to app stores and optimize based on player feedback",
  },
];

function GameDevContent() {
  return (
   <section>
    <GameDevBanner/>
    <GameInfoStats/>
    <GameServiceOfferings/>
    <GameTechnologiesSection/>
    <GameWhyChooseUs/>
    <GameDevPresenceSection/>
    <GameDevProcess Process={process}/>
    <GameDevEngagementOptions/>
   </section>
  );
}

export default GameDevContent;