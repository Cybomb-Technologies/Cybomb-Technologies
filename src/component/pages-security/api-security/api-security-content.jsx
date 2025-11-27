import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import TechToolsSection from "./api-technologies";
import contactUsImg from './../../../assets/contact/contact-us-img1.jpg';
import AboutTech from '../../common-ui/custom-development/about-tech';
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
const databaseDescription = [
  {
    name: "Kong Gateway",
    description: "Kong Gateway is an open-source API gateway that provides high-performance traffic control, security, and observability.",
    icon: "https://www.svgrepo.com/show/353978/kong-icon.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(188, 252, 225),rgb(198, 224, 255))"
  },
  {
    name: "Apigee",
    description: "Apigee is Google Cloud’s full lifecycle API management platform for designing, securing, and analyzing APIs at scale.",
    icon: "https://www.svgrepo.com/show/375537/apigee-api-platform.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(170, 216, 247),rgb(175, 211, 243))"
  },
  {
    name: "AWS API Gateway",
    description: "AWS API Gateway enables developers to create, publish, and manage secure APIs with scalable serverless integration.",
    icon: "https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg",
    iconColors: "linear-gradient(135deg,rgb(251, 160, 160),rgb(251, 168, 154))" 
  },
  {
    name: "Azure API Management",
    description: "Azure API Management provides a unified platform for securing, publishing, and monitoring APIs across environments.",
    icon: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png",
    iconColors : "linear-gradient(135deg,rgb(222, 231, 218),rgb(222, 238, 213))" // Replace with actual icon path
  },
  {
    name: "OAuth 2.0",
    description: "OAuth 2.0 is an open standard authorization framework that enables secure delegated access to resources.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
    iconColors : "linear-gradient(135deg,rgb(203, 200, 200),rgb(235, 230, 230))" // Replace with actual icon path
  },
  {
    name: "OpenID Connect",
    description: "OAuth 2.0 is an open standard authorization framework that enables secure delegated access to resources.",
    icon: "https://img.icons8.com/?size=512&id=21051&format=png",
    iconColors :"linear-gradient(135deg,rgb(244, 251, 255),rgb(244, 213, 195))" // pastel light blue// Replace with actual icon path

  }
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
      <AboutTech technologies={databaseDescription} />

      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your APIs Today!"
        description="Don’t wait for a data breach to take action. Get complete API security with our proven methodologies."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="API Security"
      />
      <DevelopmentProcess 
        title="Our API Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
