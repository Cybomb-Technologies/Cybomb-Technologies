import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/design-and-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "./what-we-offer";

function UnrealContent() {

  const hiringData = [
    {
      title: 'High-Fidelity Graphics -',
      description: 'Create photorealistic visuals and immersive environments with Unreal’s advanced rendering engine.',
    },
    {
      title: 'Cross-Platform Power -',
      description: 'Build games for PC, consoles, AR/VR, and mobile with a single robust framework.',
    },
    {
      title: 'Blueprint Visual Scripting -',
      description: 'Rapidly prototype and build gameplay mechanics with Unreal’s powerful Blueprint system.',
    },
    {
      title: 'Real-Time Rendering -',
      description: 'Leverage real-time ray tracing and dynamic lighting for cutting-edge gaming experiences.',
    },
    {
      title: 'Scalable & Enterprise Ready -',
      description: 'From indie games to AAA titles, Unreal supports projects of every size with unmatched scalability.',
    },
  ];

  const offerItems = [
    {
      image: "/images/games/AAA-unreal.png",
      title: "AAA Quality Game Development",
      description: "Build visually stunning 2D and 3D games with cinematic quality and optimized performance."
    },
    {
      image: "/images/games/AR-VR-unreal.png",
      title: "AR/VR Experiences",
      description: "Develop next-gen immersive AR/VR applications with seamless interaction and stunning visuals."
    },
    {
      image: "/images/games/unreal-multiplayer.png",
      title: "Multiplayer & Online Services",
      description: "Design scalable multiplayer ecosystems with matchmaking, leaderboards, and in-game chat."
    },
    {
      image: "/images/games/unreal-cinematics.png",
      title: "Cinematics & Animation",
      description: "Craft Hollywood-style cutscenes and lifelike animations powered by Unreal’s advanced tools."
    },
    {
      image: "/images/games/unreal-optimization.png",
      title: "Performance Optimization",
      description: "Optimize for PC, consoles, and mobile ensuring smooth gameplay and minimal latency."
    },
    {
      image: "/images/games/unreal-support.png",
      title: "Post-launch Support",
      description: "Deliver continuous updates, content expansions, and live-ops support for long-term success."
    }
  ];

  return (
    <section>
      <Banner 
        heading="Unreal Game Development Services"
        subtext="Deliver Next-Gen Gaming Experiences with Unreal Engine"
        buttonText="Book Free Consultation"
        note="Unreal Engine is the industry standard for creating high-fidelity, immersive, and scalable games. From indie studios to AAA developers, Unreal empowers creators to push boundaries in graphics, gameplay, and interactivity. Our Unreal game development services help you bring your vision to life across platforms including PC, consoles, AR/VR, and mobile."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Of AAA studios use Unreal for high-end games" },
          { number: "500M+", label: "Gamers play titles built with Unreal Engine" },
          { number: "40%", label: "Of AR/VR experiences rely on Unreal for immersive visuals" }
        ]}
        caption="Trusted by"
        highlight="leading studios worldwide"
      />
      <HiringModels
        title="Why Unreal Game Development Matters"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer title="What We Offer" items={offerItems} />
    </section>
  );
}

export default UnrealContent;
