import Banner from '../../common-ui/cloud-services/banner';
import InfoStats from '../../common-ui/cloud-services/Info';
import CloudOffers from '../../common-ui/cloud-services/cloud-offers';
import ServicesSection from '../../common-ui/cloud-services/ServicesSection';
import TechToolsSection from './TechToolsSection';
import OnlinePresence from '../../common-ui/cloud-services/Online-Presence';
import CloudUseCase from '../../common-ui/cloud-services/cloud-usecase';
import EngagementOptions from '../../common-ui/cloud-services/engagement-options';
import styles from '../../common-ui/cloud-services/cloud-usecase.module.css';
import awsImage from '../../../assets/aws.avif';

const statsData = [
  { number: '100%', label: 'Aligned with your business—not a generic solution' },
  { number: '80%', label: 'Scales as your company evolves' },
  { number: '200+', label: 'No unnecessary features, subscriptions, or limitations' },
];

const features = [
  'Launch scalable web & mobile applications',
  'Store and access data securely from anywhere',
  'Automate deployment and delivery pipelines',
  'Handle traffic spikes without performance issues',
  'Pay-as-you-go infrastructure—no upfront hardware costs',
];

const services = [
  {
    title: 'Cloud Architecture & Setup',
    description:
      'Design and implement secure, scalable AWS environments tailored to your project or business',
  },
  {
    title: 'Web & App Hosting on EC2 / S3 / CloudFront',
    description:
      'Deploy websites and apps with high availability and blazing-fast speed',
  },
  {
    title: 'Database Hosting & Management',
    description:
      'Manage databases using RDS (MySQL, PostgreSQL), DynamoDB, or Aurora with backups and monitoring',
  },
  {
    title: 'Serverless Development (Lambda, API Gateway)',
    description:
      'Build scalable apps with zero infrastructure overhead and only pay for what you use',
  },
  {
    title: 'Cloud Migration',
    description:
      'Move your legacy systems or on-premise applications to the cloud without downtime',
  },
  {
    title: 'DevOps on AWS',
    description:
      'Automate deployments with services like CodePipeline, CodeDeploy, and CloudFormation',
  },
  {
    title: 'Storage & Backup Solutions (S3, Glacier)',
    description:
      'Store and archive your data with built-in redundancy and cost-efficiency',
  },
  {
    title: 'Security & Identity Management',
    description:
      'Set up IAM roles, VPCs, encryption, and security groups to protect your cloud assets',
  },
];
const useCases = [
  {
    text: "Host a global e-commerce platform that auto-scales during sales",
    className: styles.cardBlue
  },
  {
    text: "Launch a serverless app backed by Lambda and DynamoDB",
    className: styles.cardNavy
  },
  {
    text: "Archive company files securely with automated backups",
    className: styles.cardCyan
  },
  {
    text: "Connect a mobile app to AWS backend with GraphQL (AppSync)",
    className: styles.cardDark
  },
  {
    text: "Create CI/CD pipelines that deploy automatically on push",
    className: styles.cardLightBlue
  }
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
    description: "Move from on-premise, Heroku, or Azure to a fully managed AWS setup",
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
      highlight="Fortune 500"
    />
     <CloudOffers
      title="What You Can Do With AWS"
      features={features}
      image={awsImage}
    />
    <ServicesSection
      title="Our AWS Services Include"
      services={services}
    />
      <TechToolsSection/>
      <OnlinePresence
      title="Unlock Your Cloud Potential with Our AWS Solutions"
      description="Our custom AWS integrations ensure scalability, security, and cost-efficiency."
      buttonText="Request with our AWS Experts!"
      // onButtonClick={handleRequestClick}
      imageSrc={awsImage}
      imageAlt="Illustration of AWS cloud solutions"
    />
      <CloudUseCase
      title="Use Cases"
      useCases={useCases}
    />
      <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
    </section>
  );
}