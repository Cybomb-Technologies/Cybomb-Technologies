import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import placeholderImage from '../../../assets/placeholder-image.webp';
import TechToolsSection from "./api-technologies";

const services = [
  {
    title: 'Threat Detection & Prevention',
    description: 'Real-time API threat detection, anomaly monitoring, and automated blocking of malicious requests',
    icon: 'shield',
  },
  {
    title: 'Data Protection & Encryption',
    description: 'End-to-end encryption for data in transit and at rest, API key security, and secure token management',
    icon: 'data-encryption',
  },
  {
    title: 'Authentication & Access Control',
    description: 'OAuth 2.0, JWT, API key validation, multi-factor authentication, and granular role-based access',
    icon: 'lock',
  },
  {
    title: 'Continuous Monitoring & Alerts',
    description: '24/7 monitoring of API traffic, performance analytics, and instant security alerts',
    icon: 'monitor',
  },
  {
    title: 'Compliance & Governance',
    description: 'Ensure APIs meet ISO 27001, PCI-DSS, HIPAA, GDPR standards with automated audit reports',
    icon: 'compliance',
  },
  {
    title: 'Secure API Deployment',
    description: 'Integrating API security checks into CI/CD pipelines to ensure every release is hardened',
    icon: 'deployment',
  },
];

const process = [
  { description: "Assess your API ecosystem for vulnerabilities and misconfigurations" },
  { description: "Design a secure API architecture tailored to your business needs" },
  { description: "Implement authentication, authorization, and encryption best practices" },
  { description: "Conduct API penetration testing and security validation" },
  { description: "Enable continuous monitoring, logging, and incident response" },
];

const whychooseus = [
  {
    title: 'API Security Specialists',
    description: "Deep expertise in securing REST, GraphQL, and SOAP APIs across industries",
  },
  {
    title: 'Custom Security Architecture',
    description: 'Solutions designed specifically for your API workflows and integration needs',
  },
  {
    title: 'End-to-End API Protection',
    description: 'From design and development to deployment and runtime monitoring',
  },
  {
    title: 'Proactive Threat Prevention',
    description: "We secure your APIs before attackers can exploit vulnerabilities",
  },
];

const stats = [
  { number: "99.9%", label: "API uptime with proper security" },
  { number: "60%", label: "Lower API-related incidents with monitoring" },
  { number: "24/7", label: "Real-time API protection" },
];

export default function APISecurityContent() {
  return (
    <section>
      <Banner 
        heading="API Security"
        subtext="Protect your APIs, data, and integrations with enterprise-grade security solutions"
        buttonText="Get Free API Security Assessment"
        note="In today’s connected world, APIs power modern applications—but they are also prime targets for cyberattacks. With our advanced security strategies, you get complete API protection without sacrificing performance or scalability."
      />
      <InfoStats
        stats={stats}
        caption="Trusted by"
        highlight="Global Enterprises"
      />
      <ServicesOfferings 
        title="Our API Security Services"
        Services={services}
      />
      <TechToolsSection/>
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your APIs Today!"
        description="Don’t wait for a data breach to take action. Get complete API security with our proven methodologies."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="API Security"
      />
      <DevelopmentProcess 
        title="Our API Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
