import GameDevProcess from "../game-development/game-development-section/game-dev-DevProcess";


const process = [
  {
    title: 'Game Concept & Mechanics Planning demo change',
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
function Ecommcontent() {
  return (
    <>
      <GameDevProcess Process={process}/>
    </>
  );
}
export default Ecommcontent;
