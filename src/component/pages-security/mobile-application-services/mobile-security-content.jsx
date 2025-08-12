import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import placeholderImage from '../../../assets/laptop-preview.png';
import TechToolsSection from "./mobile-technologies";

const services = [
  {
    title: 'Threat Detection & Prevention',
    description: 'Secure coding practices, vulnerability scanning, API security monitoring, and malware prevention for mobile environments',
    icon: 'shield',
  },
  {
    title: 'Data Protection & Encryption',
    description: 'End-to-end encryption in transit and at rest, secure key management, tokenization, and compliance-ready policies',
    icon: 'data-encryption',
  },
  {
    title: 'Application & API Security',
    description: 'Mobile app penetration testing, in-app protection against reverse engineering, secure API Gateway, and authentication',
    icon: 'lock',
  },
  {
    title: 'Continuous Monitoring & Alerts',
    description: 'Real-time monitoring, anomaly detection, threat intelligence integration, and 24/7 incident response',
    icon: 'monitor',
  },
  {
    title: 'Compliance & Governance',
    description: 'ISO 27001, PCI-DSS, HIPAA, GDPR alignment, automated compliance reports, and DevSecOps integration',
    icon: 'compliance',
  },
  {
    title: 'Secure App Deployment',
    description: 'Integrating security checks into CI/CD pipelines to ensure every release is tested, hardened, and safe for production',
    icon: 'deployment',
  },
];

const process = [
  { description: "Assess your mobile app security posture and identify vulnerabilities" },
  { description: "Design a tailored mobile security architecture for your platform" },
  { description: "Implement security controls across code, APIs, and infrastructure" },
  { description: "Conduct penetration testing and validation on iOS, Android, and hybrid apps" },
  { description: "Provide continuous monitoring, threat intelligence, and response" },
];

const whychooseus = [
  {
    title: 'Mobile Security Experts',
    description: "Specialized in securing native, hybrid, and cross-platform apps",
  },
  {
    title: 'Tailored Security Architecture',
    description: 'Designed to match your app’s functionality and business needs',
  },
  {
    title: 'End-to-End Support',
    description: 'From design to deployment and beyond',
  },
  {
    title: 'Proactive Threat Mitigation',
    description: "We secure your apps before threats become incidents",
  },
];

const stats = [
  { number: "99.9%", label: "uptime and secure app availability with proactive protection" },
  { number: "50%", label: "reduction in mobile vulnerabilities with secure coding and best practices" },
  { number: "24/7", label: "monitoring, threat detection, and rapid response" }
];

export default function MobileSecurityContent() {
  return (
    <section>
      <Banner 
        heading="Mobile App Security"
        subtext="Protect your mobile apps, user data, and brand with enterprise-grade security solutions"
        buttonText="Get Free Mobile Security Assessment"
        note="In today’s mobile-first world, securing your applications is more critical than ever. With advanced security technologies and our expertise, you get end-to-end protection against cyber threats—without sacrificing app performance or user experience."
      />
      <InfoStats
        stats={stats}
        caption="Trusted by"
        highlight="Top Mobile Brands"
      />
      <ServicesOfferings 
        title="Our Mobile App Security Services"
        Services={services}
      />
      <TechToolsSection/>
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your Mobile Apps Today!"
        description="Don’t wait for a breach to take action. Get enterprise-grade protection with our proven mobile app security strategies."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Mobile Security"
      />
      <DevelopmentProcess 
        title="Our Mobile App Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
