import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import TechToolsSection from "./mobile-technologies";
import contactUsImg from './../../../assets/contact/contact-us-img1.jpg';
import AboutTech from '../../common-ui/custom-development/about-tech';

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
  { number: "99.9%", label: "Secure app uptime with proactive measures" },
  { number: "50%", label: "Reduction in mobile vulnerabilities" },
  { number: "24/7", label: "Threat monitoring and rapid response" }
];
const databaseDescription = [
  {
    name: "AppArmor",
    description: "AppArmor is a Linux security module that enforces access control policies to confine programs and reduce system vulnerabilities.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RyrD2y_OKP2NZKM0vS7hT2YC0a9Hv_LouA&s", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(244, 247, 250),rgb(240, 246, 255))"
  },
  {
    name: "OWASP(MSTG)",
    description: "OWASP MSTG is a comprehensive manual for mobile app security testing and best practices.",
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/owasp-31nws7v8m3nvamfvza9koq.png/owasp-ykjifjb8kusnnarhfxcbf.png?_a=DATAg1AAZAA0", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(243, 251, 252),rgb(244, 251, 255))"
  },
  {
    name: "ZAP Proxy",
    description: "ZAP Proxy is an open-source penetration testing tool for finding security vulnerabilities in web applications.",
    icon: "https://avatars.githubusercontent.com/u/6716868?v=4",
    iconColors: "linear-gradient(135deg,rgb(185, 223, 239),rgb(184, 244, 255))" 
  },
  {
    name: "Burp Suite",
    description: "Burp Suite is a leading penetration testing platform for identifying and exploiting web application security flaws.",
    icon: "https://www.svgrepo.com/show/454430/burpsuite-security-software.svg",
    iconColors : "linear-gradient(135deg,rgb(194, 229, 179),rgb(243, 221, 198))" // Replace with actual icon path
  },
  {
    name: "Mobile Device Management (MDM)",
    description: "MDM solutions enable secure management of mobile devices, applications, and data across an organization.",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    iconColors : "linear-gradient(135deg,rgb(248, 231, 231),rgb(252, 237, 237))" // Replace with actual icon path
  },
  {
    name: "Firebase App Check",
    description: "Firebase App Check protects apps by ensuring only authentic clients can access backend services.",
    icon: "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
    iconColors :"linear-gradient(135deg,rgb(243, 227, 194),rgb(255, 233, 193))" // pastel light blue// Replace with actual icon path

  }
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
      <AboutTech technologies={databaseDescription} />

      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Secure Your Mobile Apps Today!"
        description="Don’t wait for a breach to take action. Get enterprise-grade protection with our proven mobile app security strategies."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Mobile Security"
      />
      <DevelopmentProcess 
        title="Our Mobile App Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
