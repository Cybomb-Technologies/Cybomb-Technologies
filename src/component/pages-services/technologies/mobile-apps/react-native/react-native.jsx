import ReactNativeContent from './react-native-cntent';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';

function ReactApp() {
  const metaPropsData = {
    title: "React Native App Development - Cybomb Technologies | Cross-Platform Mobile Apps",
    description:
      "Cybomb Technologies specializes in React Native app development, delivering high-performance cross-platform mobile applications for Android and iOS with a single codebase.",
    keyword:
      "React Native App Development, Cross-Platform Mobile Apps, Mobile App Development, React Native Developers, Hybrid Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/react-native-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We begin with a detailed strategy to align your business goals with React Native’s cross-platform capabilities for faster and cost-effective delivery.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We define user needs, business objectives, and app scope to ensure React Native fits perfectly.'
      },
      {
        title: 'Cross-platform Roadmap',
        description:
          'We plan a single codebase that runs seamlessly on iOS and Android with native-like performance.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We prioritize MVP features and advanced functionalities for phased delivery.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We integrate React Native with APIs, databases, and third-party tools as per project needs.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design engaging, consistent, and adaptive interfaces that deliver a native experience across both iOS and Android.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create wireframes and clickable prototypes for a clear user journey.'
      },
      {
        title: 'Platform-consistent UI',
        description:
          'We design with React Native components to ensure iOS and Android users get familiar experiences.'
      },
      {
        title: 'Custom Components',
        description:
          'We craft custom UI elements where default libraries don’t suffice.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We ensure app layouts adapt perfectly to devices, resolutions, and orientations.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build scalable, high-performance apps using React Native’s component-driven architecture and JavaScript ecosystem.',
    cards: [
      {
        title: 'Cross-platform Development',
        description:
          'We write a single codebase that runs smoothly on both iOS and Android.'
      },
      {
        title: 'Native Module Integration',
        description:
          'We extend React Native with native iOS/Android modules when required for performance.'
      },
      {
        title: 'State Management',
        description:
          'We implement Redux, Context API, or Recoil for scalable state handling.'
      },
      {
        title: 'API & Database Integration',
        description:
          'We connect apps to REST APIs, GraphQL, Firebase, and secure backends with ease.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We apply rigorous testing to ensure your React Native app is bug-free, secure, and performs seamlessly across platforms.',
    cards: [
      {
        title: 'Unit & Integration Testing',
        description:
          'We test components and app logic for functionality and reliability.'
      },
      {
        title: 'Cross-device Testing',
        description:
          'We validate apps across multiple iOS and Android devices and OS versions.'
      },
      {
        title: 'Automated Testing',
        description:
          'We use tools like Jest and Detox for automated UI and end-to-end testing.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We ensure apps load quickly and run efficiently, even on low-end devices.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage smooth app deployment for both the App Store and Google Play Store with compliance and optimization.',
    cards: [
      {
        title: 'App Store & Play Store Compliance',
        description:
          'We ensure policies, permissions, and guidelines are followed before publishing.'
      },
      {
        title: 'CI/CD Deployment',
        description:
          'We set up continuous integration pipelines for fast and reliable releases.'
      },
      {
        title: 'Gradual Rollouts',
        description:
          'We launch apps in stages to minimize risks and improve stability.'
      },
      {
        title: 'App Store Optimization (ASO)',
        description:
          'We optimize metadata, visuals, and keywords for higher app visibility.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous support, performance monitoring, and upgrades to keep your React Native app future-ready.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We fix bugs, release updates, and monitor app performance continuously.'
      },
      {
        title: 'React Native Upgrades',
        description:
          'We keep apps updated with the latest React Native versions and libraries.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new functionalities and improvements based on user feedback.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track usage, engagement, and retention.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ReactNativeContent />
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

export default ReactApp;
