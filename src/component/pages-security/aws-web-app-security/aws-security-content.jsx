import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import placeholderImage from '../../../assets/placeholder-image.webp';
import TechToolsSection from "./aws-technologies";

const services = [
  {
    title: 'Threat Detection & Prevention',
    description: 'AWS WAF setup and tuning, real-time blocking of malicious IPs, SQL injection and XSS protection',
    icon: 'shield', // Added icon prop
  },
  {
    title: 'DDoS Protection',
    description: 'AWS Shield Standard & Advanced integration, automated mitigation of various attack types',
    icon: 'network-warning', // Added icon prop
  },
  {
    title: 'Secure Traffic & Access',
    description: 'SSL/TLS encryption, secure API Gateway configuration, multi-factor authentication',
    icon: 'lock', // Added icon prop
  },
  {
    title: 'Continuous Monitoring',
    description: 'AWS CloudWatch for real-time logs, AWS GuardDuty for intelligent threat detection',
    icon: 'monitor', // Added icon prop
  },
  {
    title: 'Compliance & Governance',
    description: 'Security policies aligned with ISO, PCI-DSS, HIPAA, GDPR with automated reporting',
    icon: 'compliance', // Added icon prop
  },
  {
    title: 'Data Protection & Encryption',
    description: 'Implement AWS KMS, S3 encryption, EBS volume encryption, and Secrets Manager for end-to-end data security',
    icon: 'data-encryption', // Added icon prop
    isNew: true // Additional flag to highlight new service
  },
];
const process = [
  {
    description: "Evaluate your current security posture and identify vulnerabilities",
  },
  {
    description: "Design a security architecture tailored to your AWS environment",
  },
  {
    description: "Configure AWS security services and implement best practices",
  },
  {
    description: "Penetration testing and security validation before go-live",
  },
  { 
    description: "24/7 security monitoring and incident response",
  },
];

const whychooseus = [
  {
    title: 'AWS-Certified Experts',
    description: "Our team has hands-on experience securing mission-critical applications",
  },
  {
    title: 'Tailored Security',
    description: 'Solutions designed specifically for your business needs',
  },
  {
    title: 'Proactive Protection',
    description: 'We identify and mitigate threats before they impact your business',
  },
  {
    title: 'Compliance Ready',
    description: "Ensure you meet industry standards and regulations",
  },
  {
    title: 'End-to-End Support',
    description: "From initial setup to ongoing monitoring and response",
  },
];

const stats = [
  { number: "99.9%", label: "uptime guaranteed with proper AWS security configuration" },
  { number: "50%", label: "reduction in security incidents with AWS best practices" },
  { number: "24/7", label: "monitoring and threat detection with AWS services" }
];

export default function AWSSecurityContent() {
  return (
    <section>
      <Banner 
        heading="AWS Web Application Security"
        subtext="Protect your applications, data, and customers with AWS-powered security solutions"
        buttonText="Get Free Security Assessment"
        note="In today's digital-first world, securing your web applications is more critical than ever. With AWS's advanced security services and our expertise, you get end-to-end protection against cyber threats—without sacrificing performance or scalability."
      />
      <InfoStats
        stats={stats}
        caption="Trusted by"
        highlight="Enterprise Clients"
      />
      <ServicesOfferings 
        title="Our AWS Security Services"
        Services={services}
      />
      <TechToolsSection/>
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your Web Applications Today!"
        description="Don't wait for a breach to take action. Get AWS-powered protection and our expert team."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="AWS Security"
      />
      <DevelopmentProcess 
        title="Our AWS Security Implementation Process"
        Process={process}
      />
    </section>
  );
}