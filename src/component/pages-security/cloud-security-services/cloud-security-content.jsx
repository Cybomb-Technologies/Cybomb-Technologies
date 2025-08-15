import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import placeholderImage from '../../../assets/placeholder-image.webp';
import TechToolsSection from "./cloud-technologies";

const services = [
  {
    title: 'Cloud Threat Detection & Prevention',
    description: 'Real-time monitoring of cloud workloads, anomaly detection, and automated threat blocking',
    icon: 'shield',
  },
  {
    title: 'Data Protection & Encryption',
    description: 'End-to-end encryption for data in transit and at rest, key management, and secure storage solutions',
    icon: 'data-encryption',
  },
  {
    title: 'Identity & Access Management',
    description: 'Role-based access control, multi-factor authentication, and secure identity federation',
    icon: 'lock',
  },
  {
    title: 'Continuous Cloud Monitoring & Alerts',
    description: '24/7 monitoring of cloud infrastructure, performance analytics, and instant incident alerts',
    icon: 'monitor',
  },
  {
    title: 'Compliance & Governance',
    description: 'Meet ISO 27001, SOC 2, PCI-DSS, HIPAA, and GDPR requirements with automated compliance checks',
    icon: 'compliance',
  },
  {
    title: 'Secure Cloud Deployment',
    description: 'Integrating security into DevOps pipelines to ensure every cloud deployment is hardened',
    icon: 'deployment',
  },
];

const process = [
  { description: "Assess your cloud environment for security gaps and vulnerabilities" },
  { description: "Design a secure cloud architecture tailored to your business requirements" },
  { description: "Implement identity, access, and encryption best practices" },
  { description: "Conduct cloud penetration testing and configuration audits" },
  { description: "Enable continuous monitoring, logging, and incident response mechanisms" },
];

const whychooseus = [
  {
    title: 'Cloud Security Experts',
    description: "Specialized in securing AWS, Azure, and Google Cloud environments across industries",
  },
  {
    title: 'Custom Security Architecture',
    description: 'Tailored solutions that match your cloud infrastructure and compliance needs',
  },
  {
    title: 'End-to-End Cloud Protection',
    description: 'From migration and deployment to ongoing monitoring and threat mitigation',
  },
  {
    title: 'Proactive Threat Prevention',
    description: "We secure your cloud infrastructure before attackers can exploit vulnerabilities",
  },
];

const stats = [
  { number: "99.99%", label: "uptime with secure cloud architecture and monitoring" },
  { number: "65%", label: "reduction in cloud-related security incidents" },
  { number: "24/7", label: "real-time cloud monitoring and threat detection" }
];

export default function CloudSecurityContent() {
  return (
    <section>
      <Banner 
        heading="Cloud Security"
        subtext="Protect your cloud infrastructure, applications, and data with advanced enterprise-grade security"
        buttonText="Get Free Cloud Security Assessment"
        note="In today’s digital-first world, cloud adoption is accelerating—but so are cyber threats. Our advanced cloud security solutions safeguard your infrastructure while ensuring performance, scalability, and compliance."
      />
      <InfoStats
        stats={stats}
        caption="Trusted by"
        highlight="Leading Enterprises Worldwide"
      />
      <ServicesOfferings 
        title="Our Cloud Security Services"
        Services={services}
      />
      <TechToolsSection/>
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your Cloud Today!"
        description="Prevent breaches before they happen. Get complete cloud security with our proven strategies."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Cloud Security"
      />
      <DevelopmentProcess 
        title="Our Cloud Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
