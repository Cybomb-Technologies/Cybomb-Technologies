import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/design-and-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "./what-we-offer";
function UnityContent() {

const hiringData = [
  {
    title: 'Cross-Platform Development -',
    description: 'Build games for iOS, Android, Windows, Mac, and consoles from a single codebase.',
  },
  {
    title: 'Versatile Game Support -',
    description: 'Robust framework for creating 2D, 3D, AR, and VR gaming experiences.',
  },
  {
    title: 'Rich Ecosystem -',
    description: 'Access a vast asset store and benefit from a strong community-driven ecosystem.',
  },
  {
    title: 'Rapid Prototyping -',
    description: 'Accelerate development with faster prototyping and iteration cycles.',
  },
  {
    title: 'Cost-Effective & Scalable -',
    description: 'Deliver affordable yet scalable solutions for indie projects and enterprise-level games.',
  },
];


const offerItems = [
  {
    image: "/images/games/2D-3D.png",
    title: "2D & 3D Game Development",
    description: "Engaging 2D and 3D games with rich storylines, immersive worlds, and smooth mechanics."
  },
  {
    image: "/images/games/AR-VR.png",
    title: "AR/VR Game Solutions",
    description: "Next-gen AR/VR games that blend reality with imagination across devices and headsets."
  },
  {
    image: "/images/games/multi-network.png",
    title: "Multiplayer & Networking",
    description: "Real-time multiplayer gameplay with matchmaking, leaderboards, and cross-platform support."
  },
  {
    image: "/images/games/ui-ux.png",
    title: "UI/UX Design & Animation",
    description: "Intuitive game interfaces with fluid animations and seamless player navigation."
  },
  {
    image: "/images/games/game-optimization.png",
    title: "Game Optimization",
    description: "Performance tuning and device-specific optimization for smooth gameplay everywhere."
  },
  {
    image: "/images/games/post-launch-support.png",
    title: "Post-launch Support",
    description: "Ongoing updates, patches, and new features to keep your game fresh and competitive."
  }
];


  return (
   <section>
    <Banner 
        heading="Unity Game Development Services"
        subtext="Build Engaging, Cross-Platform Games with the Power of Unity"
        buttonText="Book Free Consultation"
        note="Unity is one of the most versatile and widely used game engines, trusted by indie developers and AAA studios alike. Our Unity game development services help you create interactive, scalable, and visually captivating games for mobile, PC, AR/VR, and consoles. With our expertise, you can turn your game idea into an immersive reality."
    />
    <InfoStats
        stats={[
          { number: "90%", label: "Of mobile time inside apps,not browsers" },
          { number: "6.8 Billion", label: "Smartphone users World Wide" },
          { number: "50%", label: "A well—built mobile app boosts engagement,loyalty, and sales" }
        ]}
        caption="Trusted by startups to "
        highlight="Fortune 500 enterprises"
    />
     <HiringModels
      title="Why Unity Game Development Matters"
      cards={hiringData}
      image={placeholderImage}
    />
    <WhatWeOffer title="What We Offer" items={offerItems} />
   </section>
  );
}

export default UnityContent;