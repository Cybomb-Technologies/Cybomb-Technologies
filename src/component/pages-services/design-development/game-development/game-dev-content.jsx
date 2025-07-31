
import GameTechnologiesSection from "./game-dev-TechnologiesSection";

import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";

const services = [
  {
    title: 'Mobile Game Development',
    description:
      'Addictive games for Android and iOS using Unity, Flutter, or native SDKs.',
  },
  {
    title: '2D & 3D Game Design',
    description:
      'From platformers and puzzles to simulations and first-person shooters-we handle all visual styles.',
  },
  {
    title: 'Game Art, UI/UX & Animation',
    description:
      'Custom-designed characters, environments, sounds, and animations for maximum appeal.',
  },
  {
    title: 'Multiplayer & Online Games',
    description:
      'Real-time multiplayer using Photon, Firebase, or WebSocket tech.',
  },
  {
    title: 'Educational & Serious Games',
    description:
      'Build games for learning, employee training, or awareness campaigns.',
  },
  {
    title: 'Gamification Solutions',
    description:
      'Add game mechanics like rewards, points, badges, and leaderboards to apps or platforms.',
  },
  {
    title: 'AR/VR Game Development',
    description:
      'Immersive experiences for headsets and mobile AR using Unity or Unreal Engine.',
  },
  {
    title: 'Publishing & Monetization',
    description:
      'We help you launch to Google Play, App Store, or Steam, and set up ads or in-game purchases.',
  },
];

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

const whychooseus = [
  {
    title: 'Creative Game Design',
    description: "Memorable characters, stories, and game loops",
  },
  {
    title: 'Optimized for All Devices',
    description: 'Smooth gameplay, fast load times, and low memory usage',
  },
  {
    title: 'Concept to Launch Support',
    description: 'We help brainstorm, prototype, test, and publish',
  },
  {
    title: 'Monetization-Ready',
    description: 'Ad integration, IAPS, rewards systems, and more',
  },
  {
    title: 'Analytics Integration',
    description: "Track player behavior, retention, and revenue",
  },
];

const engagementOptions = [
  {
    title: "End-to-End Game Development",
    description: "Full production of mobile, desktop, or browser games",
  },
  {
    title: "Game Prototyping / MVPs",
    description: "Build a testable game prototype to pitch or validate your concept",
  },
  {
    title: "Art & Animation Services Only",
    description: "Need characters, UI, or visual polish? We've got you",
  },
];

function GameDevContent() {
  return (
   <section>
    {/* <GameDevBanner/> */}
    <Banner 
        heading="Game Development"
        subtext="We turn your game ideas into immersive, playable realities"
        buttonText="Book Free Consultation"
        note="Fill out the form and our experts will contact you within 24 hours."
    />
    <InfoStats
        stats={[
        { number: "$200+", label: "The global gaming industry is worth" },
        { number: "50%", label: "Mobile gaming alone accounts for" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Game Development Services"
    Services={services}/>
    <GameTechnologiesSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom web development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Web Development"
      />
    <DevelopmentProcess 
      title="Our Game Development Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}

export default GameDevContent;