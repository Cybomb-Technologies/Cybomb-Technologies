import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import CloudSolutionsContent from "./cloud-solutions-content";
import Metatags from "../../../../SEO/meta-tags";

function CloudSolutions() {
  const metaPropsData = {
    title:
      "Cloud Solutions Services in Chennai - Cybomb Technologies | AWS, Azure, GCP",
    description:
      "Cybomb Tech provides expert cloud solutions including AWS, Azure, Google Cloud implementation, migration, DevOps, containerization, and cloud-native application development services.",
    keyword:
      "Cloud Solutions in Chennai, best cloud consulting company in chennai, cloud hosting chennai, multi cloud management services, cloud storage solutions in chennai, cloud management services, best cloud solutions services in chennai",
    url: "https://www.cybomb.com/services/cloud-solution",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We start by assessing your business needs and defining a tailored cloud strategy to accelerate growth and scalability.",
      cards: [
        {
          title: "Cloud Readiness Assessment",
          description:
            "We evaluate your infrastructure, workloads, and applications to determine cloud adoption feasibility.",
        },
        {
          title: "Cloud Strategy Design",
          description:
            "We define the right cloud model (public, private, or hybrid) aligned with your goals.",
        },
        {
          title: "Cost & ROI Analysis",
          description:
            "We help you plan budgets and forecast ROI for cloud adoption.",
        },
        {
          title: "Technology Consultation",
          description:
            "We recommend suitable platforms like AWS, Azure, or GCP for your business requirements.",
        },
      ],
    },
    {
      id: "design",
      title: "Architecture & Design",
      description:
        "We design secure, scalable, and future-ready cloud architectures tailored to your operations.",
      cards: [
        {
          title: "Cloud Architecture Design",
          description:
            "We create robust cloud architectures ensuring scalability and resilience.",
        },
        {
          title: "Hybrid & Multi-Cloud",
          description:
            "We design solutions across multiple cloud providers for flexibility and cost efficiency.",
        },
        {
          title: "Disaster Recovery Planning",
          description:
            "We incorporate high availability and backup strategies to ensure business continuity.",
        },
        {
          title: "Security & Compliance",
          description:
            "We design systems with built-in security, data protection, and compliance adherence.",
        },
      ],
    },
    {
      id: "development",
      title: "Cloud Development",
      description:
        "We build and modernize applications natively for the cloud to maximize performance and agility.",
      cards: [
        {
          title: "Cloud-Native Applications",
          description:
            "We develop applications leveraging microservices, containers, and serverless technologies.",
        },
        {
          title: "API & Service Integration",
          description:
            "We connect cloud systems with APIs for smooth interoperability.",
        },
        {
          title: "DevOps & Automation",
          description:
            "We implement CI/CD pipelines and automation for faster releases.",
        },
        {
          title: "Database Modernization",
          description:
            "We migrate and optimize databases to cloud platforms for speed and scalability.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We rigorously test cloud applications and environments for performance, security, and reliability.",
      cards: [
        {
          title: "Cloud Performance Testing",
          description:
            "We test workloads under peak demand to ensure reliability and scalability.",
        },
        {
          title: "Security Testing",
          description:
            "We identify vulnerabilities and strengthen cloud security posture.",
        },
        {
          title: "Compliance Testing",
          description:
            "We validate adherence to GDPR, HIPAA, PCI-DSS, and other standards.",
        },
        {
          title: "Disaster Recovery Testing",
          description:
            "We simulate outages and validate recovery processes for resilience.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment & Migration",
      description:
        "We seamlessly migrate and deploy your workloads to the cloud with minimal downtime.",
      cards: [
        {
          title: "Cloud Migration",
          description:
            "We move applications, data, and infrastructure to the cloud efficiently.",
        },
        {
          title: "Multi-Cloud Deployment",
          description:
            "We deploy workloads across multiple providers for flexibility and redundancy.",
        },
        {
          title: "Containerization",
          description:
            "We use Docker and Kubernetes to deploy scalable and portable workloads.",
        },
        {
          title: "Serverless Deployment",
          description:
            "We deploy serverless applications for cost efficiency and agility.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Monitoring & Maintenance",
      description:
        "We provide continuous cloud monitoring, optimization, and support to ensure efficiency.",
      cards: [
        {
          title: "Cloud Monitoring",
          description:
            "We track performance, uptime, and security using advanced monitoring tools.",
        },
        {
          title: "Cost Optimization",
          description:
            "We optimize resource usage to reduce cloud costs without performance loss.",
        },
        {
          title: "Security Management",
          description:
            "We apply ongoing patches, updates, and security enhancements.",
        },
        {
          title: "24/7 Support",
          description:
            "We provide continuous technical support for cloud infrastructure and services.",
        },
      ],
    },
  ];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CloudSolutionsContent />
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

export default CloudSolutions;
