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
  { number: "99.95%", label: "Global availability through Microsoft data centers" },
  { number: "70%", label: "Improved productivity with Azure DevOps integration" },
  { number: "85%", label: "Hybrid cloud flexibility adoption rate" }
];
const features = [
  'Host web, mobile, and enterprise apps with global scalability',
  'Integrate AI, machine learning, and analytics services',
  'Automate infrastructure and streamline DevOps pipelines',
  'Move legacy software to the cloud with zero downtime',
  'Secure data, users, and workloads with enterprise-grade tools',
];

const services = [
  {
    title: 'Azure Architecture Design & Consulting',
    description:
      'Design fault-tolerant, scalable, and secure cloud environments tailored to your business',
  },
  {
    title: 'Web & App Hosting (App Services / VMs)',
    description:
      'Launch scalable, high-performance web or API applications in minutes',
  },
  {
    title: 'Cloud Migration & Modernization',
    description:
      'Migrate legacy applications, databases, and workloads to Azure seamlessly',
  },
  {
    title: 'DevOps & CI/CD with Azure DevOps',
    description:
      'Automate deployments, testing, and version control using pipelines and GitHub Actions',
  },
  {
    title: 'Database Solutions (Azure SQL, Cosmos DB)',
    description:
      'Scalable, managed, and highly available data storage for transactional or NoSQL use cases',
  },
  {
    title: 'Azure Functions (Serverless Apps)',
    description:
      'Build apps with event-driven architecture and only pay for compute when it runs',
  },
  {
    title: 'AI, ML, & Cognitive Services Integration',
    description:
      'Enable chatbots, speech recognition, and smart recommendations with Azure’s AI tools',
  },
  {
    title: 'Cloud Security, Identity, and Compliance',
    description:
      'Manage access, monitor threats, and enforce security policies using Azure’s native tools',
  },
];

const useCases = [
  {
    text: "Deploy a secure employee portal backed by Azure AD",
    className: styles.cardBlue
  },
  {
    text: "Host a business intelligence dashboard powered by Power BI",
    className: styles.cardNavy
  },
  {
    text: "Create a serverless REST API using Azure Functions",
    className: styles.cardCyan
  },
  {
    text: "Migrate SQL Server to Azure SQL with automated backups",
    className: styles.cardDark
  },
  {
    text: "Run a globally distributed app using Cosmos DB and Azure CDN",
    className: styles.cardLightBlue
  }
];

const engagementOptions = [
  {
    title: "Cloud Setup for SMBs",
    description: "Build lean, powerful apps hosted on Azure at low monthly costs",
  },
  {
    title: "Azure Managed Services",
    description: "We monitor, patch, and scale your Azure resources while you focus on your business",
  },
  {
    title: "Hybrid & Multi-Cloud Solutions",
    description: "Integrate Azure with AWS, GCP, or on-prem infrastructure for maximum flexibility",
  },
];


export default function AzureContent() {
  return (
    <section>
      <Banner 
        heading="Microsoft Azure Cloud Services"
        subtext="Build smarter, scale globally, and operate securely with Azure"
        buttonText="Book Free Consultation"
        note="Microsoft Azure is a powerful, enterprise-grade cloud platform trusted by Fortune 500s and startups alike. Whether you're migrating from on-premise systems, modernizing your architecture, or launching something new—we help you harness Azure for agility, performance, and innovation."
    />
      <InfoStats
      stats={statsData}
      caption="Partnered with Startups and"
      highlight="Fortune 500 Companies"
    />
     <CloudOffers
      title="What You Can Achieve With Azure"
      features={features}
      image={awsImage}
    />
    <ServicesSection
      title="Our Azure Services Include"
      services={services}
    />
      <TechToolsSection/>
      <OnlinePresence
      title="Unlock Your Cloud Potential with Our Azure Solutions"
      description="Our custom Azure integrations ensure scalability, security, and cost-efficiency."
      buttonText="Request with our Azure Experts!"
      // onButtonClick={handleRequestClick}
      imageSrc={awsImage}
      imageAlt="Illustration of Azure cloud solutions"
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