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
  { number: "60%", label: "Faster release cycles with CI/CD pipelines" },
  { number: "70%", label: "Infrastructure automated with IaC" },
  { number: "50%", label: "Reduction in post-release issues" },
];
const features = [
  'Faster release cycles without compromising quality',
  'Automated testing, deployment, and scaling',
  'Improved collaboration between dev and ops teams',
  'Continuous feedback loops for better user experience',
  'Reduced downtime and quicker incident recovery',
];


const services = [
  {
    title: 'DevOps Assessment & Strategy',
    description:
      'We evaluate your current setup and design a roadmap to DevOps maturity.',
  },
  {
    title: 'CI/CD Pipeline Implementation',
    description:
      'Automate your build, test, and deployment processes using best-in-class tools.',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description:
      'Manage infrastructure using tools like Terraform, AWS CloudFormation, and Ansible.',
  },
  {
    title: 'Containerization & Orchestration',
    description:
      'Use Docker and Kubernetes to standardize deployments across environments.',
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Get real-time visibility with Grafana, Prometheus, ELK Stack, and more.',
  },
  {
    title: 'Cloud & On-Premise Integration',
    description:
      "Whether you're on AWS, Azure, GCP, or hybrid — we set up DevOps pipelines tailored to your infra.",
  },
  {
    title: 'Security & Compliance (DevSecOps)',
    description:
      'Shift-left on security with automated vulnerability scanning and secure coding practices.',
  },
  {
    title: 'Release Management & Automation',
    description:
      'Reduce manual effort and increase efficiency with scripted and scheduled deployments.',
  },
];

const useCases = [
  {
    text: "Automating deployments for a React + Node.js web app",
    className: styles.cardBlue,
  },
  {
    text: "Migrating infrastructure to IaC with Terraform",
    className: styles.cardNavy,
  },
  {
    text: "Implementing a zero-downtime release process using Kubernetes",
    className: styles.cardCyan,
  },
  {
    text: "Setting up centralized logging and alerting for microservices",
    className: styles.cardDark,
  },
  {
    text: "Building a secure CI/CD pipeline with integrated code quality checks",
    className: styles.cardLightBlue,
  },
];

const engagementOptions = [
  {
    title: "DevOps as a Service",
    description: "Ongoing support, monitoring, and updates",
  },
  {
    title: "Project-Based Setup",
    description: "We build your CI/CD + Infra setup from scratch",
  },
  {
    title: "DevOps Consulting",
    description: "Improve and optimize your existing pipeline",
  },
  {
    title: "Team Augmentation",
    description: "Hire certified DevOps engineers on-demand",
  },
];


export default function DevopsContent() {
  return (
    <section>
      <Banner 
        heading="DevOps Services"
        subtext="Speed, stability, and security — all in one pipeline."
        buttonText="Book Free Consultation"
        note="DevOps isn’t just about tools—it’s about culture, collaboration, and automation. Our DevOps services are designed to bridge the gap between development and operations, allowing your team to ship high-quality software faster and more reliably."
    />
      <InfoStats
      stats={statsData}
      caption="Partnered with Startups and"
      highlight="Fortune 500 Companies"
    />
     <CloudOffers
      title="Why DevOps Matters"
      features={features}
      image={awsImage}
    />
    <ServicesSection
      title="Our DevOps Services Include"
      services={services}
    />
      <TechToolsSection/>
      <OnlinePresence
      title="Unlock Your Cloud Potential with Our DevOps Solutions"
      description="Our custom DevOps integrations ensure scalability, security, and cost-efficiency."
      buttonText="Request with our DevOps Experts!"
      // onButtonClick={handleRequestClick}
      imageSrc={awsImage}
      imageAlt="Illustration of DevOps solutions"
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