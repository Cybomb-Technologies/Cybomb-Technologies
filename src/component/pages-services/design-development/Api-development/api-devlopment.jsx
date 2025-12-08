import ApiDevContent from "./api-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";
import PaymentGateways from "../../../common-ui/design-and-development/PaymentGateways";

function ApiDevelopment() {
  const metaPropsData = {
    title: "API Development Services in Chennai | Cybomb MNC",
    description:
      "Cybomb Tech MNC provides scalable, secure, and high-performance API Development Services. We specialize in RESTful & GraphQL APIs, third-party integrations, and custom backend solutions that ensure seamless connectivity and optimal performance.",
    keyword:
      "best api development company in chennai, custom api integration services, api integration services in chennai, custom api & middleware integration, api integration development company",
    url: "https://www.cybomb.com/services/api-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We start by understanding your system architecture and business requirements to design the right API strategy.",
      cards: [
        {
          title: "Requirement Analysis",
          description:
            "We gather technical and business needs to define API goals, data flow, and integrations.",
        },
        {
          title: "API Strategy",
          description:
            "We create a tailored roadmap for building, integrating, and managing your APIs.",
        },
        {
          title: "Technology Stack Selection",
          description:
            "We choose the best frameworks, protocols, and tools to ensure scalable and secure APIs.",
        },
        {
          title: "Architecture Planning",
          description:
            "We design RESTful, GraphQL, or custom architecture suited to your application’s needs.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      description:
        "While APIs are backend-driven, we design clear documentation and developer-friendly interfaces for smooth adoption.",
      cards: [
        {
          title: "API Documentation Design",
          description:
            "We prepare easy-to-read, interactive documentation for faster integration by developers.",
        },
        {
          title: "Developer Portals",
          description:
            "We design intuitive portals to simplify onboarding and API usage for teams.",
        },
        {
          title: "Mock APIs & Prototypes",
          description:
            "We provide mock APIs for early testing and validation of integration workflows.",
        },
        {
          title: "Standardized Guidelines",
          description:
            "We ensure consistent request/response formats, authentication, and versioning design.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We build secure, scalable, and high-performing APIs tailored to your business workflows and applications.",
      cards: [
        {
          title: "REST & GraphQL APIs",
          description:
            "We develop robust APIs using REST, GraphQL, or gRPC for modern application needs.",
        },
        {
          title: "Custom API Development",
          description:
            "We create bespoke APIs designed to handle specific workflows and integrations.",
        },
        {
          title: "Third-Party API Integration",
          description:
            "We seamlessly connect external APIs like payment gateways, CRMs, and social platforms.",
        },
        {
          title: "Authentication & Security",
          description:
            "We implement OAuth, JWT, and encryption to safeguard your APIs and data.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We perform thorough testing to ensure APIs are reliable, secure, and optimized for performance.",
      cards: [
        {
          title: "Functional Testing",
          description:
            "We test endpoints for correct responses, data validation, and business logic.",
        },
        {
          title: "Load & Performance Testing",
          description:
            "We validate APIs under high traffic to ensure speed and scalability.",
        },
        {
          title: "Security Testing",
          description:
            "We check for vulnerabilities like SQL injection, token mismanagement, and unauthorized access.",
        },
        {
          title: "Integration Testing",
          description:
            "We verify API interactions with external systems and client applications.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We deploy APIs seamlessly into your infrastructure with monitoring and version control.",
      cards: [
        {
          title: "Cloud & On-Prem Deployment",
          description:
            "We deploy APIs to AWS, Azure, GCP, or on-premise environments as per your needs.",
        },
        {
          title: "CI/CD Automation",
          description:
            "We enable continuous integration and delivery pipelines for faster deployments.",
        },
        {
          title: "Version Control & Rollouts",
          description:
            "We manage API versioning and controlled rollouts to ensure smooth transitions.",
        },
        {
          title: "Monitoring Setup",
          description:
            "We configure monitoring tools to track uptime, latency, and performance metrics.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "We provide continuous API monitoring, updates, and enhancements to keep them secure and efficient.",
      cards: [
        {
          title: "Ongoing Support",
          description:
            "We troubleshoot, fix bugs, and ensure uninterrupted API operations.",
        },
        {
          title: "Upgrades & Enhancements",
          description:
            "We add new endpoints and improve features as business requirements evolve.",
        },
        {
          title: "Performance Monitoring",
          description:
            "We track API usage and optimize performance for better scalability.",
        },
        {
          title: "Security Updates",
          description:
            "We apply patches, strengthen authentication, and maintain compliance with security standards.",
        },
      ],
    },
  ];

  const paymentAPIs = [
    {
      name: "Stripe",
      description: "Popular payment gateway for global businesses.",
      icon: "💳",
    },
    {
      name: "PayPal",
      description: "Secure online payments worldwide.",
      icon: "🅿️",
    },
    {
      name: "PhonePe",
      description: "India’s digital payment platform.",
      icon: "📱",
    },
    {
      name: "UPI",
      description: "Unified Payments Interface for instant bank transfers.",
      icon: "🏦",
    },
    {
      name: "Razorpay",
      description: "Full-stack payment solution for Indian businesses.",
      icon: "💰",
    },
    {
      name: "GPay",
      description: "Google Pay integration for fast and secure payments.",
      icon: "🟢",
    },
  ];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ApiDevContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <PaymentGateways tools={paymentAPIs} />
      <StillNotSure />
    </>
  );
}

export default ApiDevelopment;
