import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";
import CloudPlatforms from "./CloudPlatforms";

const offerings = [
  {
    title: 'Cloud Strategy & Consulting',
    description: 'We assess your current setup and define a migration or modernization roadmap aligned with your business.',
  },
  {
    title: 'Cloud Architecture Design',
    description: 'Custom-built cloud environments (IaaS, PaaS, SaaS) that match your operational and scaling needs.',
  },
  {
    title: 'Cloud Migration Services',
    description: 'Move from on-premise or legacy systems to cloud platforms like AWS, Azure, or GCP with minimal downtime.',
  },
  {
    title: 'DevOps & CI/CD Integration',
    description: 'Automate code delivery pipelines and manage deployments more efficiently using cloud-native DevOps practices.',
  },
  {
    title: 'Serverless & Containerization',
    description: 'Deploy apps using AWS Lambda, Azure Functions, Docker, and Kubernetes for better resource utilization.',
  },
  {
    title: 'Monitoring, Optimization & Support',
    description: '24/7 monitoring, performance tuning, and cost management to keep your infrastructure lean and efficient.',
  },
];

const whychooseus = [
  {
    title: 'Solution-Oriented Planning',
    description: 'We don’t just migrate — we optimize for performance, cost, and growth.',
  },
  {
    title: 'Security-First Approach',
    description: 'Cloud infrastructure is secured with IAM, encryption, and compliance (GDPR, HIPAA, ISO, etc.).',
  },
  {
    title: 'Multi-Cloud & Hybrid Expertise',
    description: 'Get the freedom to choose what fits best — single cloud, hybrid, or multi-cloud setups.',
  },
  {
    title: 'Scale with Confidence',
    description: 'Our solutions grow with you — whether you’re handling 100 users or a million.',
  },
  {
    title: 'Ongoing Maintenance',
    description: 'We don’t walk away after deployment. Get round-the-clock support and upgrades.',
  },
];

const useCases = [
  "Migrating enterprise ERP systems to the cloud",
  "Deploying scalable e-commerce and SaaS platforms",
  "Setting up cloud infrastructure for remote teams",
  "Running containerized applications with Kubernetes",
  "Building disaster recovery and backup systems",
  "Hosting AI/ML pipelines and big data applications"
];

function CloudSolutionsContent() {
  return (
    <section>
      <Banner 
        heading="Cloud Solutions"
        subtext="Scale smarter. Innovate faster. Stay resilient."
        buttonText="Book Free Consultation"
        note="Our cloud services empower businesses to operate with agility, reduce infrastructure costs, and enhance performance. Whether you’re starting your cloud journey or optimizing existing infrastructure, we build scalable, secure, and future-ready cloud environments tailored to your goals."
      />

      <InfoStats
        stats={[
          { number: "1000+", label: "Cloud Deployments" },
          { number: "99.99%", label: "Uptime Guaranteed" },
          { number: "200+", label: "Certified Cloud Engineers" }
        ]}
        caption="Trusted by Enterprises &"
        highlight="Innovative Startups"
      />

      <ServicesOfferings 
        title="🧩 What We Offer" 
        items={offerings}
      />

      <CloudPlatforms/>

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Cloud Services"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Cloud Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Architect Your Future in the Cloud."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Cloud Services"
      />

      <DevelopmentProcess 
        title="🔍 Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default CloudSolutionsContent;
