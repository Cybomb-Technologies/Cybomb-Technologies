import UnityContent from './unity-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";

function UnityGames() {
const metaPropsData = {
  title: "Unity Game Development Services - Cybomb Technologies | Cross-Platform Game Solutions",
  description:
    "Cybomb Technologies provides professional Unity game development services, creating immersive, high-performance, and cross-platform gaming experiences. From concept to deployment, we deliver engaging games tailored to your vision.",
  keyword:
    "Unity Game Development Services, Unity 3D Game Development, Cross-Platform Game Development, Mobile Game Development, Unity Game Design, AR VR Game Development, Unity Development India",
  url: "https://www.cybomb.com/services/unity",
  image: "https://www.cybomb.com",
};

const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We create a tailored Unity game development strategy that aligns with your vision, audience, and business goals, ensuring an engaging and scalable gaming experience.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze gameplay ideas, target platforms, audience preferences, and monetization models to define the right Unity game plan.'
      },
      {
        title: 'Game Design Document (GDD)',
        description:
          'We prepare a detailed roadmap including gameplay mechanics, levels, assets, and progression systems.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We identify and prioritize core game features such as multiplayer, AR/VR integration, in-app purchases, and custom animations.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We define the tools, SDKs, APIs, and third-party integrations required to enhance Unity game performance.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design visually stunning and user-friendly game interfaces that maximize player engagement and immersion.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create interactive prototypes to validate gameplay flow and player experience early in development.'
      },
      {
        title: 'Character & Environment Design',
        description:
          'We design 2D/3D characters, environments, and assets aligned with your game’s theme and story.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We ensure UI/UX elements adapt seamlessly across mobile, PC, and console platforms.'
      },
      {
        title: 'Immersive UX',
        description:
          'We focus on intuitive controls, engaging menus, and rewarding interactions that enhance retention.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build scalable, high-performing Unity games tailored for mobile, PC, AR/VR, and console platforms.',
    cards: [
      {
        title: 'Custom Game Development',
        description:
          'We develop fully customized Unity games with unique features, mechanics, and storylines.'
      },
      {
        title: 'Multiplayer & Networking',
        description:
          'We implement real-time multiplayer systems, leaderboards, and matchmaking features.'
      },
      {
        title: 'AR/VR Game Development',
        description:
          'We leverage Unity’s ARKit, ARCore, and VR SDKs to build immersive AR/VR experiences.'
      },
      {
        title: 'Third-party Integrations',
        description:
          'We integrate payment gateways, ads, analytics, and social platforms into Unity games.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We rigorously test Unity games to ensure smooth performance, bug-free gameplay, and cross-platform compatibility.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test core gameplay mechanics, controls, levels, and in-app purchases for seamless experiences.'
      },
      {
        title: 'Cross-platform Testing',
        description:
          'We validate performance across Android, iOS, Windows, macOS, and consoles.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We ensure data protection, fair gameplay, and compliance with app store policies.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We optimize rendering, memory usage, and loading times for smooth gameplay.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure seamless game deployment across platforms with optimized builds, store compliance, and launch strategies.',
    cards: [
      {
        title: 'Platform-specific Builds',
        description:
          'We prepare optimized Unity builds for Android, iOS, PC, AR/VR devices, and consoles.'
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'We implement automated build and deployment pipelines for faster, reliable releases.'
      },
      {
        title: 'App Store Optimization',
        description:
          'We optimize game titles, descriptions, icons, and metadata for better visibility and downloads.'
      },
      {
        title: 'Game Launch & Support',
        description:
          'We launch your Unity game smoothly with ongoing monitoring and live support.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide post-launch support, updates, and scaling to keep your Unity game engaging and competitive.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We manage bug fixes, feature updates, and performance monitoring after launch.'
      },
      {
        title: 'Security Upgrades',
        description:
          'We apply patches, updates, and protection measures to keep gameplay safe and secure.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new levels, characters, game modes, and monetization strategies as your game evolves.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We track player behavior, retention rates, and monetization performance with integrated analytics.'
      }
    ]
  }
];


  return (
    <>
      <UnityContent/>
      
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <Metatags  metaProps={metaPropsData}/>
      <StillNotSure/>
    </>
  );
}

export default UnityGames;
