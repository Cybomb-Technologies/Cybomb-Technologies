import IosContent from './ios-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function IosApp() {
  const metaPropsData = {
    title: "iOS App Development - Cybomb Technologies | Custom iPhone & iPad Applications",
    description:
      "Cybomb Technologies specializes in iOS app development, delivering high-quality, secure, and user-friendly applications for iPhone, iPad, and Apple Watch to meet your business needs.",
    keyword:
      "iOS App Development, iPhone App Development, iPad App Development, Apple Watch Apps, Mobile App Development, iOS Developers, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ios-app-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We begin by analyzing your business objectives and user expectations to build an iOS app that aligns with Apple’s ecosystem.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We define app features, target audience, and success metrics to set a clear development roadmap.'
      },
      {
        title: 'Platform Strategy',
        description:
          'We plan for optimal performance across iPhone, iPad, and Apple Watch devices.'
      },
      {
        title: 'Technology Selection',
        description:
          'We choose the right iOS technologies such as Swift, SwiftUI, Objective-C, and Core frameworks.'
      },
      {
        title: 'Roadmap Creation',
        description:
          'We create detailed milestones, sprints, and timelines for structured delivery.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design visually stunning, user-friendly, and Apple-compliant interfaces for iOS apps.',
    cards: [
      {
        title: 'Wireframes & Prototypes',
        description:
          'We map user flows and design interactive prototypes to ensure smooth navigation.'
      },
      {
        title: 'Human Interface Guidelines',
        description:
          'We follow Apple’s HIG for consistency, usability, and compliance across devices.'
      },
      {
        title: 'Custom Animations',
        description:
          'We use SwiftUI and UIKit to create fluid gestures and animations for an engaging experience.'
      },
      {
        title: 'Adaptive Layouts',
        description:
          'We ensure responsive designs across iPhones, iPads, and different screen orientations.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We develop robust and scalable iOS applications tailored for speed, security, and reliability.',
    cards: [
      {
        title: 'Native iOS Development',
        description:
          'We build apps using Swift, SwiftUI, and Objective-C for maximum performance.'
      },
      {
        title: 'API & Backend Integration',
        description:
          'We integrate secure APIs, databases, and cloud services for seamless app functionality.'
      },
      {
        title: 'Apple Ecosystem Integration',
        description:
          'We integrate iOS apps with Apple Pay, Siri, iCloud, ARKit, and CoreML.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune apps for smooth performance and minimal battery consumption.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We conduct rigorous testing to ensure your iOS app is secure, stable, and high-performing.',
    cards: [
      {
        title: 'Unit & UI Testing',
        description:
          'We test app logic, UI flows, and interactions for flawless execution.'
      },
      {
        title: 'Device Compatibility Testing',
        description:
          'We validate apps on multiple iPhone and iPad models and iOS versions.'
      },
      {
        title: 'Performance & Load Testing',
        description:
          'We test app speed, responsiveness, and scalability under real-world conditions.'
      },
      {
        title: 'Security Testing',
        description:
          'We ensure app data security, encryption, and compliance with Apple’s standards.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We handle end-to-end deployment, ensuring smooth launch and compliance with Apple App Store requirements.',
    cards: [
      {
        title: 'App Store Submission',
        description:
          'We prepare your app for submission, meeting Apple’s strict compliance rules.'
      },
      {
        title: 'App Review Assistance',
        description:
          'We help navigate Apple’s review process to avoid rejection and delays.'
      },
      {
        title: 'Beta Testing (TestFlight)',
        description:
          'We release beta builds for testing with real users using Apple TestFlight.'
      },
      {
        title: 'App Store Optimization',
        description:
          'We optimize your app’s metadata, keywords, and visuals for better downloads.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous support, feature enhancements, and updates for your iOS app.',
    cards: [
      {
        title: 'Bug Fixes & Updates',
        description:
          'We monitor app health and push timely updates to maintain stability.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new features to keep your app competitive and user-friendly.'
      },
      {
        title: 'iOS & SDK Upgrades',
        description:
          'We update apps with new iOS releases, SDKs, and device compatibility.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track performance and user engagement.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <IosContent />
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

export default IosApp;
