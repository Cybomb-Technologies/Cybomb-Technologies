import MobileAppDevContent from "./mobile-app-dev-content";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import { Helmet } from "react-helmet";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";
import Metatags from "../SEO/meta-tags";

function MobileAppDevelopment() {
  const metaPropsData = {
    title:
      "Best Mobile App Development company in Chennai - Cybomb Technologies",
    description:
      "Transform your ideas into live apps with Android, iOS, and Flutter app development. Chennai's best app developers provide Cross-Platform & Native Applications.",
    keyword:
      "mobile app development chennai, android app development, ios app development, cross-platform app development, native app development",
    url: "https://www.cybomb.com/services/mobile-app-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We help you define a strong mobile app strategy with clear goals, the right tech stack, and a roadmap for success.",
      cards: [
        {
          title: "Requirement Analysis",
          description:
            "We analyze your business needs, target audience, and objectives to shape the ideal mobile app solution.",
        },
        {
          title: "Platform Consultation",
          description:
            "We guide you in choosing between native, hybrid, or cross-platform approaches based on your goals and budget.",
        },
        {
          title: "App Architecture Planning",
          description:
            "We design a scalable app architecture with workflows, integrations, and security in mind.",
        },
        {
          title: "Resource & Timeline Planning",
          description:
            "We allocate the right developers, designers, and tools to deliver your app on time and efficiently.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      description:
        "We craft intuitive, visually stunning, and user-friendly app designs that boost engagement and retention.",
      cards: [
        {
          title: "User Research & Wireframing",
          description:
            "We design app wireframes and user flows based on research to ensure smooth navigation.",
        },
        {
          title: "Interactive Prototypes",
          description:
            "We create clickable prototypes to visualize the app experience before development begins.",
        },
        {
          title: "Platform-Specific Design",
          description:
            "We design interfaces that follow iOS Human Interface Guidelines and Android Material Design standards.",
        },
        {
          title: "User Experience Optimization",
          description:
            "We focus on usability, accessibility, and clarity to deliver delightful app interactions.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We build high-performance mobile applications using the latest native and cross-platform technologies.",
      cards: [
        {
          title: "iOS App Development",
          description:
            "We develop secure and scalable apps for iPhone and iPad using Swift and Objective-C.",
        },
        {
          title: "Android App Development",
          description:
            "Our team builds powerful Android apps using Kotlin and Java, optimized for multiple devices.",
        },
        {
          title: "Cross-Platform Development",
          description:
            "We use React Native and Flutter to deliver apps that run smoothly across both iOS and Android.",
        },
        {
          title: "Backend & API Integration",
          description:
            "We build robust backends and integrate APIs for authentication, payments, notifications, and more.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We thoroughly test mobile apps to ensure flawless functionality, security, and performance.",
      cards: [
        {
          title: "Functional Testing",
          description:
            "We verify all features and workflows to ensure they work exactly as intended.",
        },
        {
          title: "Usability & Accessibility Testing",
          description:
            "We test the app’s usability and accessibility to ensure it works well for all users.",
        },
        {
          title: "Performance & Load Testing",
          description:
            "We test speed, responsiveness, and stability under heavy usage to guarantee reliability.",
        },
        {
          title: "Device & OS Compatibility Testing",
          description:
            "We ensure the app runs smoothly across different devices, screen sizes, and OS versions.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We launch your app to the App Store and Google Play with a secure, seamless submission process.",
      cards: [
        {
          title: "App Store & Play Store Setup",
          description:
            "We prepare all assets, descriptions, and metadata required for successful app submission.",
        },
        {
          title: "App Signing & Security",
          description:
            "We configure app signing, certificates, and security protocols for a safe release.",
        },
        {
          title: "Launch Monitoring",
          description:
            "We monitor the app’s launch to ensure smooth performance and user adoption.",
        },
        {
          title: "Post-Launch Support",
          description:
            "We provide immediate support to resolve issues and optimize performance after release.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "We provide continuous updates, bug fixes, and enhancements to keep your app running at its best.",
      cards: [
        {
          title: "Regular Updates",
          description:
            "We keep your app updated with the latest OS versions and new feature enhancements.",
        },
        {
          title: "Bug Fixes & Improvements",
          description:
            "We quickly resolve issues and enhance functionality based on user feedback.",
        },
        {
          title: "Security Monitoring",
          description:
            "We apply patches and monitor threats to keep your app secure and reliable.",
        },
        {
          title: "Scalability & Future Enhancements",
          description:
            "We ensure your app can handle growth and integrate new features as your business evolves.",
        },
      ],
    },
  ];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <MobileAppDevContent />
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

export default MobileAppDevelopment;
