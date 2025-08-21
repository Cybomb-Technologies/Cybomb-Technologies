import AgileProcess from '../../../../common-ui/agile-process/agile-process';
import KotlinContent from './kotlin-cntent';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';

function KotlinApp() {
  const metaPropsData = {
    title: "Kotlin App Development - Cybomb Technologies | Modern Android Solutions",
    description:
      "Cybomb Technologies provides expert Kotlin app development services, delivering modern, scalable, and high-performance Android applications with clean code and robust architecture.",
    keyword:
      "Kotlin App Development, Android Development, Mobile App Development, Kotlin Developers, Modern Android Apps, Cybomb Technologies",
    url: "https://www.cybomb.com/services/kotlin-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We start by aligning your business objectives with Kotlin-based Android development best practices for scalability and long-term growth.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We analyze your business goals and target audience to design the right mobile app strategy.'
      },
      {
        title: 'Technology Roadmap',
        description:
          'We plan architecture and select Kotlin-first Android components for reliability and maintainability.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We define the MVP scope, core features, and enhancements for phased development.'
      },
      {
        title: 'Development Roadmap',
        description:
          'We create structured milestones, sprints, and delivery timelines for transparent progress.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design intuitive, Android-native experiences aligned with Google’s Material Design guidelines.',
    cards: [
      {
        title: 'Wireframes & Flows',
        description:
          'We build detailed wireframes and user flows to visualize the app journey.'
      },
      {
        title: 'Material Design UI',
        description:
          'We create modern and consistent designs following Android Material guidelines.'
      },
      {
        title: 'Interactive Prototypes',
        description:
          'We design clickable prototypes for early validation and user feedback.'
      },
      {
        title: 'Adaptive UI',
        description:
          'We ensure layouts are responsive across devices, resolutions, and orientations.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build secure, scalable, and high-performance Android apps using Kotlin, Google’s preferred language.',
    cards: [
      {
        title: 'Kotlin-first Development',
        description:
          'We leverage Kotlin’s modern features like null safety, coroutines, and extension functions.'
      },
      {
        title: 'Jetpack Libraries',
        description:
          'We use Android Jetpack (ViewModel, LiveData, Room, Navigation) for efficient architecture.'
      },
      {
        title: 'MVVM & Clean Architecture',
        description:
          'We follow modular and clean architecture principles for maintainable codebases.'
      },
      {
        title: 'API & Database Integration',
        description:
          'We integrate REST, GraphQL, Firebase, and local storage seamlessly with Kotlin.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We apply rigorous testing to ensure Kotlin apps are bug-free, secure, and stable across devices.',
    cards: [
      {
        title: 'Unit & Instrumentation Testing',
        description:
          'We test Kotlin code logic and Android components for reliability.'
      },
      {
        title: 'Automated UI Testing',
        description:
          'We use Espresso and UI Automator for automated Android UI validation.'
      },
      {
        title: 'Performance Testing',
        description:
          'We test app performance under load to ensure responsiveness and stability.'
      },
      {
        title: 'Security Testing',
        description:
          'We validate app security, encryption, and secure data handling in Kotlin apps.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage the app launch process with Google Play Store compliance and smooth rollout.',
    cards: [
      {
        title: 'Play Store Compliance',
        description:
          'We ensure all policies, permissions, and guidelines are met before publishing.'
      },
      {
        title: 'Beta Release (Internal Testing)',
        description:
          'We conduct closed and open testing via Play Console before public release.'
      },
      {
        title: 'Gradual Rollouts',
        description:
          'We deploy updates in stages to minimize risks and maximize stability.'
      },
      {
        title: 'App Store Optimization (ASO)',
        description:
          'We optimize keywords, visuals, and descriptions for better Play Store visibility.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous support, Kotlin upgrades, and app enhancements for long-term success.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We fix bugs, update features, and maintain app performance post-launch.'
      },
      {
        title: 'Kotlin & Android SDK Updates',
        description:
          'We update apps with the latest Kotlin versions, Jetpack, and Android SDK releases.'
      },
      {
        title: 'Feature Upgrades',
        description:
          'We add new functionalities and enhancements to keep apps future-ready.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track app usage and improve user engagement.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <KotlinContent />
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

export default KotlinApp;
