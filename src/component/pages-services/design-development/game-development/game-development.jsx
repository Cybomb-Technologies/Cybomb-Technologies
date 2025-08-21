import GameDevContent from './game-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

function GameDevelopment() {

  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start with a strong foundation by analyzing your vision, defining gameplay mechanics, and outlining the development roadmap.',
    cards: [
      {
        title: 'Concept Ideation',
        description:
          'We brainstorm unique game ideas, mechanics, and storytelling elements to bring your vision to life.'
      },
      {
        title: 'Game Design Document',
        description:
          'We create a detailed GDD outlining features, characters, levels, and technical requirements.'
      },
      {
        title: 'Technology & Platform Strategy',
        description:
          'We help choose the right engines (Unity, Unreal, etc.) and platforms (PC, console, mobile) for your game.'
      },
      {
        title: 'Project Planning',
        description:
          'We define milestones, timelines, and resource allocation for smooth execution.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft engaging, immersive, and user-friendly game interfaces that enhance the player experience.',
    cards: [
      {
        title: 'Game Art & Assets',
        description:
          'We design characters, environments, and props with attention to style and detail.'
      },
      {
        title: 'Wireframes & Prototypes',
        description:
          'We create interactive prototypes to visualize menus, controls, and navigation.'
      },
      {
        title: 'Immersive UI Design',
        description:
          'We build intuitive game menus, HUDs, and control systems for seamless gameplay.'
      },
      {
        title: 'User Experience Optimization',
        description:
          'We test and refine player interactions to ensure smooth, enjoyable gameplay.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build high-performance games with cutting-edge technology, ensuring smooth gameplay and scalability.',
    cards: [
      {
        title: 'Game Engine Development',
        description:
          'We use Unity, Unreal, and custom engines to deliver 2D, 3D, AR, and VR games.'
      },
      {
        title: 'Multiplayer & Online Features',
        description:
          'We integrate multiplayer systems, leaderboards, and social features for engaging experiences.'
      },
      {
        title: 'Cross-Platform Compatibility',
        description:
          'We develop games for PC, console, mobile, and web with optimized performance.'
      },
      {
        title: 'Agile Game Development',
        description:
          'We follow agile methodologies with iterative builds and frequent playtesting.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure your game runs flawlessly with rigorous QA and playtesting processes.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test gameplay mechanics, controls, and interactions across all devices.'
      },
      {
        title: 'Performance & Stress Testing',
        description:
          'We analyze frame rates, load times, and stability under heavy gameplay conditions.'
      },
      {
        title: 'Bug & Glitch Detection',
        description:
          'We identify and fix bugs, crashes, and unexpected gameplay issues.'
      },
      {
        title: 'User Playtesting',
        description:
          'We involve real players to gather feedback and enhance the overall experience.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We launch your game smoothly across platforms, app stores, and digital distribution channels.',
    cards: [
      {
        title: 'Platform Optimization',
        description:
          'We optimize the game for Steam, PlayStation, Xbox, iOS, Android, and more.'
      },
      {
        title: 'Publishing Support',
        description:
          'We handle store guidelines, submissions, and certifications for a successful release.'
      },
      {
        title: 'Live Release Support',
        description:
          'We monitor servers and performance during the game’s launch to ensure stability.'
      },
      {
        title: 'Localization & Global Launch',
        description:
          'We prepare your game for multiple languages and regions for worldwide reach.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing updates, support, and improvements to keep your game engaging and bug-free.',
    cards: [
      {
        title: 'Content Updates',
        description:
          'We add new levels, characters, and features to keep players engaged.'
      },
      {
        title: 'Bug Fixes & Patches',
        description:
          'We release patches to fix glitches and optimize performance after launch.'
      },
      {
        title: 'Server & Backend Support',
        description:
          'We manage servers, leaderboards, and online multiplayer stability.'
      },
      {
        title: 'Player Feedback Integration',
        description:
          'We improve gameplay based on community insights and player reviews.'
      }
    ]
  }
];

  return (
    <>
      <GameDevContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
    </>
  );
}

export default GameDevelopment;
