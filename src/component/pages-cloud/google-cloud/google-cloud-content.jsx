import Banner from '../../common-ui/cloud-services/banner';
import InfoStats from '../../common-ui/cloud-services/Info';
import CloudOffers from '../../common-ui/cloud-services/cloud-offers';
import ServicesSection from '../../common-ui/cloud-services/ServicesSection';
import TechToolsSection from './TechToolsSection';
import OnlinePresence from '../../common-ui/cloud-services/Online-Presence';
import CloudUseCase from '../../common-ui/cloud-services/cloud-usecase';
import EngagementOptions from '../../common-ui/cloud-services/engagement-options';
import styles from '../../common-ui/cloud-services/cloud-usecase.module.css';
import gcpImg from '../../../assets/technologies/google-cloud-platform-img.jpg';
import contactUsImg from './../../../assets/contact/contact-us-img2.jpg';

const statsData = [
  { number: "99.95%", label: "Service uptime backed by Google infrastructure" },
  { number: "75%", label: "Workload efficiency with Kubernetes/GKE" },
  { number: "80%", label: "Improved data analytics performance" }
];

const features = [
  'Built on the same infrastructure that powers Google Search, Gmail & YouTube',
  'Advanced AI/ML capabilities with prebuilt models and tools',
  'Seamless scaling with Kubernetes, Compute Engine, and App Engine',
  'Powerful analytics with BigQuery and real-time data processing',
  'Trusted security with built-in identity and access control',
];

const services = [
  {
    title: 'GCP Cloud Consulting & Architecture',
    description:
      'Tailored cloud strategies for performance, cost-efficiency, and security.',
  },
  {
    title: 'App Deployment with App Engine & Compute Engine',
    description:
      'Rapid deployment of scalable applications using Google’s managed services or virtual machines.',
  },
  {
    title: 'Cloud Migration Services',
    description:
      'Move from legacy infrastructure or other clouds to GCP with zero downtime.',
  },
  {
    title: 'Data Engineering & Analytics',
    description:
      'Process large datasets with BigQuery, Cloud Dataflow, and Cloud Pub/Sub.',
  },
  {
    title: 'Kubernetes (GKE) & Containerization',
    description:
      'Deploy microservices with ease using Google Kubernetes Engine and Docker.',
  },
  {
    title: 'Serverless Architecture with Cloud Functions',
    description:
      'Pay only when your code runs and simplify backend logic with event-driven development.',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Integrate powerful ML models using Vertex AI, AutoML, and pre-trained APIs.',
  },
  {
    title: 'Security, IAM, and Compliance',
    description:
      'Protect sensitive data with encryption, secure identity access, and compliance tools.',
  },
];

const useCases = [
  {
    text: "Build and scale a global SaaS platform using GKE",
    className: styles.cardBlue,
  },
  {
    text: "Set up a real-time data pipeline for analytics with BigQuery and Pub/Sub",
    className: styles.cardNavy,
  },
  {
    text: "Host a mobile app backend using Firebase and Cloud Functions",
    className: styles.cardCyan,
  },
  {
    text: "Run a recommendation engine using Vertex AI",
    className: styles.cardDark,
  },
  {
    text: "Migrate MySQL database to Cloud SQL with no downtime",
    className: styles.cardLightBlue,
  },
];

const engagementOptions = [
  {
    title: "Startup Cloud Launch Kits",
    description: "Get a robust, production-ready cloud setup within days.",
  },
  {
    title: "Cloud Optimization",
    description: "Reduce costs, improve performance, and automate workloads.",
  },
  {
    title: "End-to-End Product Build",
    description: "From backend architecture to frontend deployment on GCP.",
  },
];

export default function GoogleCloudContent() {
  return (
    <section>
      <Banner 
        heading="Google Cloud Platform (GCP) Services"
        subtext="Innovate with speed, scale effortlessly, and stay secure in the cloud."
        buttonText="Book Free Consultation"
        note="Google Cloud is built for companies that demand high performance, flexibility, and smart analytics. From startups to enterprises, we help businesses leverage GCP to build and run modern applications, manage data intelligently, and reduce operational overhead."
    />
      <InfoStats
      stats={statsData}
      caption="Partnered with Startups and"
      highlight="Fortune 500 Companies"
    />
     <CloudOffers
      title="Why Google Cloud Platform Matters"
      features={features}
      image={gcpImg}
    />
    <ServicesSection
      title="Our Google Cloud Platform Services Include"
      services={services}
    />
      <TechToolsSection/>
      <OnlinePresence
      title="Unlock Your Cloud Potential with Our Google Cloud Platform Solutions"
      description="Our custom Google Cloud Platform integrations ensure scalability, security, and cost-efficiency."
      buttonText="Request with our Google Cloud Platform Experts!"
      // onButtonClick={handleRequestClick}
      imageSrc={contactUsImg}
      imageAlt="Illustration of Google Cloud solutions"
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