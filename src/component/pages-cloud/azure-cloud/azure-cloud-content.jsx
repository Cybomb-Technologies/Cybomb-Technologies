import Banner from '../../common-ui/cloud-services/banner';
import InfoStats from '../../common-ui/cloud-services/Info';
import CloudOffers from '../../common-ui/cloud-services/cloud-offers';
import ServicesSection from '../../common-ui/cloud-services/ServicesSection';
import TechToolsSection from './TechToolsSection';
import OnlinePresence from '../../common-ui/cloud-services/Online-Presence';
import CloudUseCase from '../../common-ui/cloud-services/cloud-usecase';
import EngagementOptions from '../../common-ui/cloud-services/engagement-options';
import styles from '../../common-ui/cloud-services/cloud-usecase.module.css';
import azureImg from '../../../assets/technologies/azure-cloud-services-img.jpg';
import contactUsImg from './../../../assets/contact/contact-us-img2.jpg';
import AboutTech from '../../common-ui/custom-development/about-tech';
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
const databaseDescription = [
  {
    name: "App Services",
    description: "App Services provide a fully managed platform for building, deploying, and scaling web and mobile applications.",
    icon: "https://code.benco.io/icon-collection/azure-icons/App-Services.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(188, 218, 252),rgb(198, 224, 255))"
  },
  {
    name: "Azure Functions",
    description: "Azure Functions is a serverless compute service that runs event-driven code without managing infrastructure.",
    icon: "https://code.benco.io/icon-collection/azure-icons/Function-Apps.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(244, 215, 209),rgb(246, 217, 230))"
  },
  {
    name: "Virtual Machines",
    description: "Virtual Machines provide scalable, isolated computing environments that run operating systems and applications on virtualized hardware.",
    icon: "https://code.benco.io/icon-collection/azure-icons/Virtual-Machine.svg",
    iconColors: "linear-gradient(135deg,rgb(139, 215, 248),rgb(144, 238, 255))" 
  },
  {
    name: "Logic Apps",
    description: "Azure Logic Apps is a cloud service that automates workflows and integrates apps, data, and services seamlessly.",
    icon: "https://code.benco.io/icon-collection/azure-icons/Logic-Apps.svg",
    iconColors : "linear-gradient(135deg,rgb(218, 230, 213),hsl(97, 27.30%, 87.10%))" // Replace with actual icon path
  },
  {
    name: "AKS (Kubernetes)",
    description: "AKS is a managed Kubernetes service that simplifies deploying, managing, and scaling containerized applications in Azure.",
    icon: "https://code.benco.io/icon-collection/azure-icons/Kubernetes-Services.svg",
    iconColors : "linear-gradient(135deg,rgb(187, 212, 244),rgb(191, 227, 245))" // Replace with actual icon path
  },
  {
    name: "Azure SQL",
    description: "Azure SQL is a fully managed relational database service that provides high availability, scalability, and security in the cloud.",
    icon: "https://code.benco.io/icon-collection/azure-icons/SQL-Server.svg",
    iconColors :"linear-gradient(135deg,rgb(194, 227, 243), #c1f0ff)" // pastel light blue// Replace with actual icon path

  }
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
      image={azureImg}
    />
    <ServicesSection
      title="Our Azure Services Include"
      services={services}
    />
      <TechToolsSection/>
      <AboutTech technologies={databaseDescription} />

      <OnlinePresence
      title="Unlock Your Cloud Potential with Our Azure Solutions"
      description="Our custom Azure integrations ensure scalability, security, and cost-efficiency."
      buttonText="Request with our Azure Experts!"
      // onButtonClick={handleRequestClick}
      imageSrc={contactUsImg}
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