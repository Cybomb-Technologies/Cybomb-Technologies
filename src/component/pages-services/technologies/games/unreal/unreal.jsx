import UnrealContent from "./unreal-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";

function UnrealGames() {
  const metaPropsData = {
    title: "Best Unreal Game Development Company in Chennai | Cybomb Tech",
    description:
      "Cybomb Technologies offers expert Unreal Engine game development for high-quality immersive gaming experiences and professional game development services.",
    keyword:
      "unreal game development, unreal engine services, game development company, 3d game design, vr game development",
    url: "https://www.cybomb.com/services/unreal",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  const tabsData = [
    {
      id: "planning",
      title: "Planning & Strategy",
      description:
        "We craft a clear Unreal Engine development roadmap aligned with your goals, target audience, and platform requirements to ensure a successful game launch.",
      cards: [
        {
          title: "Concept & Ideation",
          description:
            "We analyze your ideas, gameplay mechanics, and monetization strategy to design a solid Unreal game plan.",
        },
        {
          title: "Game Design Document (GDD)",
          description:
            "We prepare a detailed blueprint including levels, environments, mechanics, and technical requirements.",
        },
        {
          title: "Feature Prioritization",
          description:
            "We define essential features like multiplayer, cinematic cutscenes, VR/AR integration, and high-end rendering.",
        },
        {
          title: "Tech Stack Planning",
          description:
            "We select the right Unreal tools, plugins, and APIs for seamless development and scalability.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX & Art Design",
      description:
        "We create visually striking designs, immersive environments, and cinematic experiences that leverage Unreal’s real-time rendering power.",
      cards: [
        {
          title: "Wireframes & Prototypes",
          description:
            "We build interactive prototypes to validate gameplay flow and user interactions early.",
        },
        {
          title: "3D Assets & Environments",
          description:
            "We design realistic 3D models, environments, and props optimized for Unreal’s high-quality rendering.",
        },
        {
          title: "Cinematic Visuals",
          description:
            "We create immersive cutscenes and animations with Unreal’s Sequencer and advanced VFX tools.",
        },
        {
          title: "Immersive UI/UX",
          description:
            "We design intuitive menus, HUDs, and interactive systems tailored for different devices.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We build robust Unreal games with advanced mechanics, multiplayer features, and cross-platform capabilities.",
      cards: [
        {
          title: "Custom Game Development",
          description:
            "We develop fully customized Unreal games with unique mechanics, storylines, and gameplay systems.",
        },
        {
          title: "Multiplayer & Networking",
          description:
            "We implement advanced multiplayer frameworks with matchmaking, voice chat, and leaderboards.",
        },
        {
          title: "AR/VR Development",
          description:
            "We harness Unreal’s VR/AR capabilities to build immersive experiences for multiple industries.",
        },
        {
          title: "Third-Party Integrations",
          description:
            "We integrate payments, ads, analytics, and online services for better engagement and monetization.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing & QA",
      description:
        "We rigorously test Unreal games to ensure stability, cross-platform compatibility, and bug-free experiences.",
      cards: [
        {
          title: "Gameplay & Functional Testing",
          description:
            "We test all mechanics, controls, levels, and features to ensure seamless player experiences.",
        },
        {
          title: "Cross-Platform QA",
          description:
            "We validate performance across PC, consoles, mobile, and VR devices.",
        },
        {
          title: "Performance Benchmarking",
          description:
            "We optimize frame rates, rendering quality, and resource usage for smooth gameplay.",
        },
        {
          title: "Security & Compliance",
          description:
            "We ensure data safety, fair gameplay, and adherence to publishing standards.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We handle smooth deployment of Unreal games across platforms, ensuring compliance and performance optimization.",
      cards: [
        {
          title: "Platform Builds",
          description:
            "We deliver optimized builds for PC, PlayStation, Xbox, AR/VR devices, and mobile.",
        },
        {
          title: "CI/CD Pipelines",
          description:
            "We set up automated build pipelines for faster and reliable updates.",
        },
        {
          title: "Store Optimization",
          description:
            "We optimize game titles, tags, and assets for Steam, Epic Games Store, and console stores.",
        },
        {
          title: "Launch & Support",
          description:
            "We manage launch campaigns and provide live support for a smooth release.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Support",
      description:
        "We provide long-term support and updates to keep your Unreal game engaging, scalable, and competitive.",
      cards: [
        {
          title: "Post-Launch Maintenance",
          description:
            "We handle bug fixes, patches, and performance monitoring after release.",
        },
        {
          title: "Feature Expansions",
          description:
            "We add new levels, modes, and updates to keep gameplay fresh and engaging.",
        },
        {
          title: "Live Ops & Analytics",
          description:
            "We integrate analytics to track engagement, retention, and monetization trends.",
        },
        {
          title: "Security Upgrades",
          description:
            "We provide ongoing security patches and anti-cheat solutions for safe gameplay.",
        },
      ],
    },
  ];

  return (
    <>
      <UnrealContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <Metatags metaProps={metaPropsData} />
      <StillNotSure />
    </>
  );
}

export default UnrealGames;
