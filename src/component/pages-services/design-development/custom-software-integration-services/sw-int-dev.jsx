import SwIntDevContent from "./sw-int-dev-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

export default function SwIntDev() {
  const metaPropsData = {
    title: "Custom Software Integration Services in Chennai - Cybomb MNC",
    description:
      "Cybomb Tech in Chennai offers seamless system connectivity, application integration, database connectivity, and cloud platform integration services for enhanced business efficiency.",
    keyword:
      "custom software integration services chennai, erp software integration services company, software integration services in chennai, software inventory and integration services, best software integration company",
    url: "https://www.cybomb.com/services/custom-software-integration-services",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We begin with a detailed analysis of your current systems to plan the most efficient integration strategy.",
      cards: [
        {
          title: "System Analysis",
          description:
            "We evaluate your existing software, workflows, and data structures to understand integration requirements.",
        },
        {
          title: "Integration Strategy",
          description:
            "We define a roadmap to connect multiple systems seamlessly with minimal disruption.",
        },
        {
          title: "Technology Alignment",
          description:
            "We select the best integration tools, APIs, and middleware based on your environment.",
        },
        {
          title: "Data Flow Mapping",
          description:
            "We map how data will move between systems to ensure consistency and accuracy.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      description:
        "While integration is backend-heavy, we ensure the user-facing elements and workflows remain smooth and intuitive.",
      cards: [
        {
          title: "User Flow Optimization",
          description:
            "We design efficient flows for end-users when interacting with integrated systems.",
        },
        {
          title: "Interface Consistency",
          description:
            "We maintain a consistent UI across connected platforms for a unified experience.",
        },
        {
          title: "Integration Impact Mapping",
          description:
            "We visualize how integration affects the UI/UX to avoid user confusion or redundancy.",
        },
        {
          title: "User Journey Validation",
          description:
            "We validate that post-integration user journeys remain seamless and productive.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We implement secure and efficient integration between your software systems using APIs, connectors, or middleware.",
      cards: [
        {
          title: "API Integration",
          description:
            "We connect applications using REST, SOAP, or GraphQL APIs for smooth data exchange.",
        },
        {
          title: "Middleware Development",
          description:
            "We create custom middleware to enable communication between legacy and modern systems.",
        },
        {
          title: "Custom Connectors",
          description:
            "We build connectors for software that lacks native integration support.",
        },
        {
          title: "Real-Time Sync",
          description:
            "We enable real-time data synchronization to ensure all systems remain up-to-date.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We thoroughly test integrated systems to ensure they work together flawlessly without breaking existing processes.",
      cards: [
        {
          title: "Integration Testing",
          description:
            "We verify data is transferred accurately and workflows remain intact across systems.",
        },
        {
          title: "Performance Testing",
          description:
            "We test for latency, load handling, and response times post-integration.",
        },
        {
          title: "Security Testing",
          description:
            "We validate that data sharing between systems is secure and compliant with standards.",
        },
        {
          title: "Regression Testing",
          description:
            "We ensure no existing functionalities are broken after integration is deployed.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We roll out the integrated solution in a controlled manner to ensure a smooth transition and minimal downtime.",
      cards: [
        {
          title: "Staged Rollout",
          description:
            "We deploy integration in phases to monitor performance and address issues gradually.",
        },
        {
          title: "Data Migration & Sync",
          description:
            "We migrate and synchronize data safely between systems during go-live.",
        },
        {
          title: "Backup & Rollback Plan",
          description:
            "We implement safety measures to revert changes if needed without affecting operations.",
        },
        {
          title: "Monitoring Setup",
          description:
            "We configure monitoring tools to track integration health and performance.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "We provide ongoing support, updates, and monitoring to keep your integrated systems running efficiently.",
      cards: [
        {
          title: "Continuous Monitoring",
          description:
            "We monitor data flow and integration points to prevent disruptions.",
        },
        {
          title: "Issue Resolution",
          description:
            "We quickly fix any bugs, data mismatches, or performance issues that arise.",
        },
        {
          title: "Upgrades & Enhancements",
          description:
            "We enhance integrations as your software stack evolves or business processes change.",
        },
        {
          title: "Security & Compliance",
          description:
            "We ensure your integration remains compliant with regulations and secure from vulnerabilities.",
        },
      ],
    },
  ];

  return (
    <>
      <SwIntDevContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure />
      <Metatags metaProps={metaPropsData} />
    </>
  );
}
