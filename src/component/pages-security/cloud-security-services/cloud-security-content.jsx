import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import TechToolsSection from "./cloud-technologies";
import contactUsImg from './../../../assets/contact/contact-us-img1.jpg';
import AboutTech from '../../common-ui/custom-development/about-tech';
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
  { number: "99.99%", label: "Cloud service availability with secure design" },
  { number: "65%", label: "Reduction in cloud-related incidents" },
  { number: "24/7", label: "Real-time cloud monitoring" },
];
const databaseDescription = [
  {
    name: "AWS Security Hub",
    description: "CSS3 is a style sheet language that enhances web design with advanced layouts, animations, and responsive styling.",
    icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Security-Hub.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(244, 165, 165),rgb(252, 159, 159))"
  },
  {
    name: "Azure Security Center",
    description: "HTML5 is the standard markup language for structuring and presenting modern web content.",
    icon: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(230, 224, 222),rgb(236, 226, 231))"
  },
  {
    name: "Google Cloud Security Command Center",
    description: "MySQL is a reliable relational database management system known for speed, scalability, and ACID compliance.",
    icon: "https://icon.icepanel.io/GCP/svg/Security-Command-Center.svg",
    iconColors: "linear-gradient(135deg,rgb(139, 215, 248),rgb(144, 238, 255))" 
  },
  {
    name: "AWS IAM",
    description: "JavaScript is a versatile scripting language that powers dynamic, interactive, and responsive web applications.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
    iconColors : "linear-gradient(135deg,rgb(241, 222, 191),rgb(245, 230, 164))" // Replace with actual icon path
  },
  {
    name: "Azure Active Directory",
    description: "Knockout.js is a lightweight JavaScript library that simplifies dynamic UIs with MVVM data binding.",
    icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/IAM-Identity-Center.svg",
    iconColors : "linear-gradient(135deg,rgb(253, 179, 179),rgb(239, 174, 174))" // Replace with actual icon path
  },
  {
    name: "Okta",
    description: "LESS is a CSS preprocessor that extends stylesheets with variables, mixins, and modular structure for easier maintenance.",
    icon: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
    iconColors: "linear-gradient(135deg,rgb(230, 224, 222),rgb(236, 226, 231))"

  }
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
      <AboutTech technologies={databaseDescription} />

      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your Cloud Today!"
        description="Prevent breaches before they happen. Get complete cloud security with our proven strategies."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Cloud Security"
      />
      <DevelopmentProcess 
        title="Our Cloud Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
