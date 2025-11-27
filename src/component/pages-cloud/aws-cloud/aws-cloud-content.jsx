import Banner from "../../common-ui/cloud-services/banner";
import InfoStats from "../../common-ui/cloud-services/Info";
import CloudOffers from "../../common-ui/cloud-services/cloud-offers";
import ServicesSection from "../../common-ui/cloud-services/ServicesSection";
import TechToolsSection from "./TechToolsSection";
import OnlinePresence from "../../common-ui/cloud-services/Online-Presence";
import CloudUseCase from "../../common-ui/cloud-services/cloud-usecase";
import EngagementOptions from "../../common-ui/cloud-services/engagement-options";
import styles from "../../common-ui/cloud-services/cloud-usecase.module.css";
import awsImage from "../../../assets/technologies/amazon-web-services-img.jpg";
import contactUsImg from "./../../../assets/contact/contact-us-img2.jpg";
import AboutTech from "../../common-ui/custom-development/about-tech";

const statsData = [
  { number: "99.99%", label: "Service availability with AWS infrastructure" },
  { number: "80%", label: "Faster deployment using AWS managed services" },
  { number: "90%", label: "Reduced hardware dependency" },
];

const features = [
  "Launch scalable web & mobile applications",
  "Store and access data securely from anywhere",
  "Automate deployment and delivery pipelines",
  "Handle traffic spikes without performance issues",
  "Pay-as-you-go infrastructure—no upfront hardware costs",
];

const services = [
  {
    title: "Cloud Architecture & Setup",
    description:
      "Design and implement secure, scalable AWS environments tailored to your project or business",
  },
  {
    title: "Web & App Hosting on EC2 / S3 / CloudFront",
    description:
      "Deploy websites and apps with high availability and blazing-fast speed",
  },
  {
    title: "Database Hosting & Management",
    description:
      "Manage databases using RDS (MySQL, PostgreSQL), DynamoDB, or Aurora with backups and monitoring",
  },
  {
    title: "Serverless Development (Lambda, API Gateway)",
    description:
      "Build scalable apps with zero infrastructure overhead and only pay for what you use",
  },
  {
    title: "Cloud Migration",
    description:
      "Move your legacy systems or on-premise applications to the cloud without downtime",
  },
  {
    title: "DevOps on AWS",
    description:
      "Automate deployments with services like CodePipeline, CodeDeploy, and CloudFormation",
  },
  {
    title: "Storage & Backup Solutions (S3, Glacier)",
    description:
      "Store and archive your data with built-in redundancy and cost-efficiency",
  },
  {
    title: "Security & Identity Management",
    description:
      "Set up IAM roles, VPCs, encryption, and security groups to protect your cloud assets",
  },
];

const useCases = [
  {
    text: "Host a global e-commerce platform that auto-scales during sales",
    className: styles.cardBlue,
  },
  {
    text: "Launch a serverless app backed by Lambda and DynamoDB",
    className: styles.cardNavy,
  },
  {
    text: "Archive company files securely with automated backups",
    className: styles.cardCyan,
  },
  {
    text: "Connect a mobile app to AWS backend with GraphQL (AppSync)",
    className: styles.cardDark,
  },
  {
    text: "Create CI/CD pipelines that deploy automatically on push",
    className: styles.cardLightBlue,
  },
];

const engagementOptions = [
  {
    title: "Cloud Setup for Startups",
    description: "Ideal for MVPs, websites, and internal dashboards",
  },
  {
    title: "Managed AWS Services",
    description: "We monitor, maintain, and scale your infrastructure 24/7",
  },
  {
    title: "Enterprise Migration Projects",
    description:
      "Move from on-premise, Heroku, or Azure to a fully managed AWS setup",
  },
];

const databaseDescription = [
  {
    name: "EC2",
    description:
      "Amazon EC2 is a scalable cloud computing service that provides resizable virtual servers for deploying and managing applications.",
    icon: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(249, 171, 155),rgb(255, 182, 215))",
  },
  {
    name: "ECS",
    description:
      "Amazon ECS is a fully managed container orchestration service for running and scaling Docker containers on AWS.",
    icon: "https://images.icon-icons.com/2699/PNG/512/amazon_ecs_logo_icon_168660.png", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(249, 171, 155),rgb(255, 182, 215))",
  },
  {
    name: "Lambda",
    description:
      "AWS Lambda is a serverless compute service that runs code in response to events without managing servers.",
    icon: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg",
    iconColors: "linear-gradient(135deg,rgb(249, 171, 155),rgb(255, 182, 215))",
  },
  {
    name: "S3",
    description:
      "Amazon S3 is a scalable object storage service that securely stores and retrieves any amount of data in the cloud.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png",
    iconColors: "linear-gradient(135deg,rgb(174, 240, 146),rgb(182, 243, 151))", // Replace with actual icon path
  },
  {
    name: "ClodFront",
    description:
      "Amazon CloudFront is a fast content delivery network (CDN) that securely delivers data, videos, applications, and APIs globally with low latency.",
    icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg",
    iconColors: "linear-gradient(135deg,rgb(191, 197, 251),rgb(186, 214, 255))",
  },
  {
    name: "RDS",
    description:
      "Amazon RDS is a managed relational database service that simplifies setup, operation, and scaling of databases in the cloud",
    icon: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg",
    iconColors: "linear-gradient(135deg,rgb(193, 234, 255),rgb(178, 231, 249))", // pastel light blue// Replace with actual icon path
  },
];

export default function AWSContent() {
  return (
    <section>
      <Banner
        heading="AWS Cloud Services"
        subtext="Scale faster, perform better, and pay only for what you use"
        buttonText="Book Free Consultation"
        note="Amazon Web Services (AWS) powers some of the world's most successful businesses. Whether you're building new apps, migrating existing infrastructure, or looking to scale globally, our AWS experts help you harness the full power of the cloud."
      />
      <InfoStats
        stats={statsData}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <CloudOffers
        title="What You Can Do With AWS"
        features={features}
        image={awsImage}
      />
      <ServicesSection title="Our AWS Services Include" services={services} />
      <TechToolsSection />
      <AboutTech technologies={databaseDescription} />

      <OnlinePresence
        title="Unlock Your Cloud Potential with Our AWS Solutions"
        description="Our custom AWS integrations ensure scalability, security, and cost-efficiency."
        buttonText="Request with our AWS Experts!"
        // onButtonClick={handleRequestClick}
        imageSrc={contactUsImg}
        imageAlt="Illustration of AWS cloud solutions"
      />
      <CloudUseCase title="Use Cases" useCases={useCases} />
      <EngagementOptions
        title="How We Can Collaborate"
        options={engagementOptions}
      />
    </section>
  );
}
