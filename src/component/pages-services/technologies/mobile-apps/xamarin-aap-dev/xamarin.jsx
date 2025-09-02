import XamarinContent from './xamarin-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function XamarinApp() {
  const metaPropsData = {
    title: "Xamarin App Development - Cybomb Technologies | Cross-Platform Mobile Solutions",
    description:
      "Cybomb Technologies provides expert Xamarin app development services, delivering high-performance, native-like mobile applications for Android, iOS, and Windows platforms using a single codebase.",
    keyword:
      "Xamarin App Development, Cross-Platform Mobile Apps, Xamarin Developers, Android and iOS Apps, Mobile App Development, Cybomb Technologies",
    url: "https://www.cybomb.com/services/xamarin-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define a clear roadmap to leverage Xamarin’s cross-platform capabilities, ensuring faster delivery and reduced costs while maintaining native-like performance.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We analyze business goals, target users, and technical needs to validate Xamarin as the right solution.'
      },
      {
        title: 'Cross-platform Roadmap',
        description:
          'We plan a unified codebase with Xamarin.Forms and Xamarin.Native for consistent iOS and Android experiences.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We define core MVP features and advanced functionalities for staged releases.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We integrate Xamarin with APIs, cloud services, and third-party libraries for robust app functionality.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design user-friendly, adaptive, and platform-consistent interfaces using Xamarin.Forms and custom components.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create interactive wireframes and prototypes for clear user journeys.'
      },
      {
        title: 'Platform-consistent UI',
        description:
          'We follow native design guidelines to deliver iOS and Android-specific experiences with Xamarin.'
      },
      {
        title: 'Custom Controls',
        description:
          'We build tailored UI components where Xamarin.Forms defaults aren’t sufficient.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We design layouts that adapt smoothly across devices, screen sizes, and orientations.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build scalable, cross-platform mobile apps using Xamarin’s .NET ecosystem and shared codebase strategy.',
    cards: [
      {
        title: 'Cross-platform Development',
        description:
          'We write shared C# code for iOS and Android, reducing duplication while ensuring native functionality.'
      },
      {
        title: 'Native API Integration',
        description:
          'We access platform-specific APIs and SDKs through Xamarin for native-like features.'
      },
      {
        title: 'Robust Architecture',
        description:
          'We use MVVM and clean architecture for structured, testable, and maintainable code.'
      },
      {
        title: 'Backend & API Integration',
        description:
          'We connect apps with REST, GraphQL, Azure, and secure cloud services for a complete solution.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We perform rigorous testing to ensure Xamarin apps are stable, performant, and error-free across devices.',
    cards: [
      {
        title: 'Unit & Integration Testing',
        description:
          'We validate app components and business logic using automated test cases.'
      },
      {
        title: 'Cross-device Testing',
        description:
          'We test apps on multiple devices, OS versions, and emulators for consistent performance.'
      },
      {
        title: 'Automated Testing',
        description:
          'We use Xamarin Test Cloud and NUnit for automated UI and end-to-end testing.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We optimize apps for speed, responsiveness, and battery efficiency.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We handle seamless app deployment to the Apple App Store and Google Play Store with compliance and optimization.',
    cards: [
      {
        title: 'App Store & Play Store Compliance',
        description:
          'We ensure apps meet Apple and Google guidelines before release.'
      },
      {
        title: 'CI/CD Setup',
        description:
          'We configure continuous delivery pipelines with Azure DevOps or GitHub Actions for reliable releases.'
      },
      {
        title: 'Gradual Rollouts',
        description:
          'We launch apps in stages to reduce risks and monitor user feedback.'
      },
      {
        title: 'App Store Optimization (ASO)',
        description:
          'We optimize metadata, visuals, and keywords to increase visibility and downloads.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous monitoring, upgrades, and enhancements to keep your Xamarin apps relevant and future-ready.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We release updates, fix bugs, and monitor performance post-launch.'
      },
      {
        title: 'Xamarin & Library Updates',
        description:
          'We upgrade apps to the latest Xamarin versions and maintain compatibility with third-party libraries.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new features and improvements to match evolving user needs.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track app engagement, retention, and performance.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <XamarinContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure />
    </>
  );
}

export default XamarinApp;
