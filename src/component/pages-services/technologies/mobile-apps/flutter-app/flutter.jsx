import FlutterContent from './flutter-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';

function FlutterApp() {
  const metaPropsData = {
    title: "Flutter App Development | Cross Platform App Solutions - Cybomb",
    description:
      "Cybomb Technologies offers expert Flutter app development services, building high-performance, cross-platform mobile applications with a single codebase for Android and iOS.",
    keyword:
      "Flutter App Development, Cross-Platform Apps, Mobile App Development, Flutter Developers, Hybrid Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/flutter-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define your goals, target audience, and required features to create a Flutter app that drives business success.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We collaborate with you to document detailed app functionalities and use cases.'
      },
      {
        title: 'Cross-Platform Strategy',
        description:
          'We design a roadmap to maximize Flutter’s single codebase efficiency for Android, iOS, and web apps.'
      },
      {
        title: 'Technology Stack',
        description:
          'We select the right Flutter plugins, APIs, and backend integrations to suit your project.'
      },
      {
        title: 'Project Roadmap',
        description:
          'We create milestones, sprints, and timelines for transparent and timely delivery.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft user-centric, interactive, and visually appealing designs that adapt across platforms.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We design interactive wireframes to visualize user journeys and screen flows.'
      },
      {
        title: 'Material & Cupertino Widgets',
        description:
          'We leverage Flutter’s widget library for native Android (Material) and iOS (Cupertino) experiences.'
      },
      {
        title: 'Custom Animations',
        description:
          'We integrate fluid animations and transitions for a delightful user experience.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We ensure seamless performance across mobiles, tablets, and desktops.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build high-performance Flutter apps with a single codebase, optimized for Android, iOS, and beyond.',
    cards: [
      {
        title: 'Single Codebase Development',
        description:
          'We write one codebase that runs natively on Android, iOS, and even the web.'
      },
      {
        title: 'Backend & API Integration',
        description:
          'We connect your app with secure APIs, databases, and third-party services.'
      },
      {
        title: 'State Management',
        description:
          'We implement advanced state management solutions like Provider, Bloc, or Riverpod.'
      },
      {
        title: 'Offline Support',
        description:
          'We enable offline-first functionality with secure local storage and background sync.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We test extensively to deliver bug-free, secure, and high-performing Flutter apps.',
    cards: [
      {
        title: 'Unit & Integration Testing',
        description:
          'We ensure app logic and features work as expected across all scenarios.'
      },
      {
        title: 'Performance Testing',
        description:
          'We optimize apps for speed, smooth rendering, and minimal load times.'
      },
      {
        title: 'Cross-Device Compatibility',
        description:
          'We test on multiple devices, OS versions, and screen sizes for flawless execution.'
      },
      {
        title: 'Security Testing',
        description:
          'We conduct vulnerability assessments to safeguard user data and app integrity.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure a smooth rollout of your Flutter app across multiple platforms.',
    cards: [
      {
        title: 'App Store & Play Store Compliance',
        description:
          'We handle submission processes and ensure compliance with guidelines.'
      },
      {
        title: 'CI/CD Setup',
        description:
          'We integrate continuous deployment pipelines for faster release cycles.'
      },
      {
        title: 'Beta Testing & Rollout',
        description:
          'We manage staged rollouts and gather real-world user feedback.'
      },
      {
        title: 'App Store Optimization',
        description:
          'We help improve app visibility, downloads, and rankings in app stores.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous support, upgrades, and feature enhancements after launch.',
    cards: [
      {
        title: 'Bug Fixes & Updates',
        description:
          'We ensure issues are resolved promptly with regular updates.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new functionalities based on business needs and user feedback.'
      },
      {
        title: 'OS & Flutter SDK Upgrades',
        description:
          'We keep your app updated with the latest Flutter releases and device requirements.'
      },
      {
        title: 'App Analytics & Monitoring',
        description:
          'We integrate analytics to track engagement and optimize user experience.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <FlutterContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
    </>
  );
}

export default FlutterApp;
