import AndroidAppContent from "./android-app-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function AndroidApp() {
  const metaPropsData = {
    title: "Android App Development Company in Chennai | Cybomb Technologies",
    description:
      "Cybomb Tech, a leading Android app development company in Chennai, delivers scalable, high-performance mobile applications for businesses across industries.",
    keyword:
      "android app development in chennai, mobile app development, custom android apps, android application developers, mobile solutions",
    url: "https://www.cybomb.com/services/android-app-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Strategy",
      description:
        "We begin by defining your business goals, target audience, and app requirements to ensure a strong foundation.",
      cards: [
        {
          title: "Requirement Gathering",
          description:
            "We work with you to capture detailed app functionalities, use cases, and performance needs.",
        },
        {
          title: "Market & Competitor Research",
          description:
            "We analyze user expectations and competitor apps to identify opportunities and differentiation.",
        },
        {
          title: "Technology Stack Selection",
          description:
            "We choose the right frameworks, SDKs, and APIs tailored to your Android project.",
        },
        {
          title: "Project Roadmap",
          description:
            "We build a clear timeline, milestones, and delivery plan to keep development on track.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      description:
        "We create intuitive, visually appealing designs that deliver seamless user experiences on all Android devices.",
      cards: [
        {
          title: "Wireframing",
          description:
            "We create low-fidelity wireframes to map out the app’s flow and screen hierarchy.",
        },
        {
          title: "UI/UX Prototyping",
          description:
            "We develop interactive prototypes to visualize user journeys and interactions.",
        },
        {
          title: "Material Design Principles",
          description:
            "We follow Google’s Material Design guidelines for consistency, accessibility, and aesthetics.",
        },
        {
          title: "Responsive Layouts",
          description:
            "We ensure the app adapts flawlessly across different Android screen sizes and resolutions.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We build robust, scalable, and high-performance Android apps tailored to your business needs.",
      cards: [
        {
          title: "Native Development",
          description:
            "We build apps using Kotlin and Java for high performance and deep Android integration.",
        },
        {
          title: "Cross-Platform Development",
          description:
            "We leverage frameworks like Flutter and React Native to create apps that work across Android and iOS.",
        },
        {
          title: "API & Backend Integration",
          description:
            "We integrate your app with secure APIs, databases, and third-party services.",
        },
        {
          title: "Offline Functionality",
          description:
            "We enable offline data access and syncing for uninterrupted user experiences.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We rigorously test apps to ensure they are bug-free, secure, and deliver smooth performance.",
      cards: [
        {
          title: "Functional Testing",
          description:
            "We validate app features against requirements to ensure everything works as expected.",
        },
        {
          title: "Performance Testing",
          description:
            "We optimize the app for speed, scalability, and low resource consumption.",
        },
        {
          title: "Security Testing",
          description:
            "We conduct vulnerability testing to protect against data leaks and cyber threats.",
        },
        {
          title: "Device & OS Compatibility",
          description:
            "We test across multiple Android devices and OS versions to ensure full compatibility.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We handle the complete deployment process to ensure a smooth app launch on the Google Play Store.",
      cards: [
        {
          title: "App Store Compliance",
          description:
            "We ensure your app meets all Play Store policies and guidelines for approval.",
        },
        {
          title: "App Packaging & Signing",
          description:
            "We prepare the APK/Bundle with proper digital signing for secure distribution.",
        },
        {
          title: "Beta Testing & Rollout",
          description:
            "We manage phased rollouts and gather user feedback to fine-tune the app.",
        },
        {
          title: "Launch Marketing Support",
          description:
            "We provide guidance for app promotion strategies to boost downloads and visibility.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Support",
      description:
        "We provide ongoing updates, performance improvements, and feature enhancements.",
      cards: [
        {
          title: "Bug Fixes & Updates",
          description:
            "We quickly resolve issues and release updates to keep your app running smoothly.",
        },
        {
          title: "Feature Enhancements",
          description:
            "We continuously add new features based on user feedback and market trends.",
        },
        {
          title: "OS & Device Upgrades",
          description:
            "We ensure compatibility with the latest Android versions and new device releases.",
        },
        {
          title: "App Monitoring & Analytics",
          description:
            "We track usage patterns and performance metrics to improve user engagement.",
        },
      ],
    },
  ];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AndroidAppContent />
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

export default AndroidApp;
