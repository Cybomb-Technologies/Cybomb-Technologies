import SwiftContent from './swift-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function SwiftApp() {
  const metaPropsData = {
    title: "Swift App Development - Cybomb Technologies | Native iOS Applications",
    description:
      "Cybomb Technologies offers professional Swift app development services, building high-performance, secure, and user-friendly native iOS applications for iPhone, iPad, and Apple Watch.",
    keyword:
      "Swift App Development, iOS Development, Native iOS Apps, iPhone App Development, iPad App Development, Swift Developers, Cybomb Technologies",
    url: "https://www.cybomb.com/services/swift-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We start with a clear strategy to align your business vision with Swift’s native iOS development strengths for seamless, secure, and efficient delivery.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather business goals, user expectations, and technical needs to ensure Swift is the best fit for your app.'
      },
      {
        title: 'iOS Development Roadmap',
        description:
          'We define milestones for native iOS development, ensuring performance, security, and scalability.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We plan MVP essentials and advanced features to deliver value quickly and iteratively.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We integrate Swift with APIs, databases, cloud, and Apple frameworks like Core Data, SwiftUI, and Combine.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft modern, intuitive, and Apple-compliant designs that provide a seamless iOS user experience.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We design wireframes and interactive prototypes for a smooth user journey.'
      },
      {
        title: 'Apple HIG Compliance',
        description:
          'We follow Apple’s Human Interface Guidelines to ensure your app feels native to iOS.'
      },
      {
        title: 'Custom SwiftUI Components',
        description:
          'We build reusable and elegant components using SwiftUI for consistent design.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We design adaptive layouts that look flawless on all iPhone and iPad devices.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We develop high-performance iOS apps using Swift’s robust features, strong typing, and Apple’s native frameworks.',
    cards: [
      {
        title: 'Native iOS Development',
        description:
          'We leverage Swift for fast, secure, and optimized iOS applications.'
      },
      {
        title: 'Apple Framework Integration',
        description:
          'We implement Core Data, SwiftUI, Combine, ARKit, and more to enhance functionality.'
      },
      {
        title: 'Scalable Architecture',
        description:
          'We use MVVM, Clean Architecture, or VIPER for structured, maintainable code.'
      },
      {
        title: 'API & Database Integration',
        description:
          'We connect your app with REST APIs, GraphQL, Core Data, and cloud backends.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure your Swift app is reliable, bug-free, and delivers excellent performance across iOS devices.',
    cards: [
      {
        title: 'Unit & Integration Testing',
        description:
          'We write test cases using XCTest to validate logic and functionality.'
      },
      {
        title: 'Device & OS Compatibility',
        description:
          'We test across different iPhone/iPad models and iOS versions for consistency.'
      },
      {
        title: 'Automated Testing',
        description:
          'We use XCUITest and XCTest frameworks for automated UI and performance testing.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune apps for speed, memory management, and battery efficiency.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure smooth deployment to the Apple App Store with compliance, security, and optimization in place.',
    cards: [
      {
        title: 'App Store Compliance',
        description:
          'We ensure apps meet Apple’s policies, guidelines, and security standards before publishing.'
      },
      {
        title: 'CI/CD Setup',
        description:
          'We implement continuous integration pipelines with Xcode Cloud or GitHub Actions for reliable releases.'
      },
      {
        title: 'Staged Rollouts',
        description:
          'We launch apps progressively to manage risks and gather real user feedback.'
      },
      {
        title: 'App Store Optimization (ASO)',
        description:
          'We optimize app descriptions, visuals, and keywords to boost visibility on the App Store.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing support, monitoring, and feature enhancements to keep your Swift app updated and competitive.',
    cards: [
      {
        title: 'Continuous Maintenance',
        description:
          'We fix bugs, release updates, and ensure compatibility with new iOS versions.'
      },
      {
        title: 'Swift & Library Upgrades',
        description:
          'We update apps to the latest Swift releases and third-party frameworks.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new features and improvements based on analytics and user feedback.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track app usage, retention, and performance.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SwiftContent />
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

export default SwiftApp;
