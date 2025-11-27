import Banner from "../../common-ui/security/banner";
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from "../../common-ui/security/development-process";
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import TechToolsSection from "./aws-technologies";
import contactUsImg from "./../../../assets/contact/contact-us-img1.jpg";
import AboutTech from "../../common-ui/custom-development/about-tech";

const services = [
  {
    title: "Threat Detection & Prevention",
    description:
      "AWS WAF setup and tuning, real-time blocking of malicious IPs, SQL injection and XSS protection",
    icon: "shield", // Added icon prop
  },
  {
    title: "DDoS Protection",
    description:
      "AWS Shield Standard & Advanced integration, automated mitigation of various attack types",
    icon: "network-warning", // Added icon prop
  },
  {
    title: "Secure Traffic & Access",
    description:
      "SSL/TLS encryption, secure API Gateway configuration, multi-factor authentication",
    icon: "lock", // Added icon prop
  },
  {
    title: "Continuous Monitoring",
    description:
      "AWS CloudWatch for real-time logs, AWS GuardDuty for intelligent threat detection",
    icon: "monitor", // Added icon prop
  },
  {
    title: "Compliance & Governance",
    description:
      "Security policies aligned with ISO, PCI-DSS, HIPAA, GDPR with automated reporting",
    icon: "compliance", // Added icon prop
  },
  {
    title: "Data Protection & Encryption",
    description:
      "Implement AWS KMS, S3 encryption, EBS volume encryption, and Secrets Manager for end-to-end data security",
    icon: "data-encryption", // Added icon prop
    isNew: true, // Additional flag to highlight new service
  },
];

const process = [
  {
    description:
      "Evaluate your current security posture and identify vulnerabilities",
  },
  {
    description:
      "Design a security architecture tailored to your AWS environment",
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
    title: "AWS-Certified Experts",
    description:
      "Our team has hands-on experience securing mission-critical applications",
  },
  {
    title: "Tailored Security",
    description: "Solutions designed specifically for your business needs",
  },
  {
    title: "Proactive Protection",
    description:
      "We identify and mitigate threats before they impact your business",
  },
  {
    title: "Compliance Ready",
    description: "Ensure you meet industry standards and regulations",
  },
  {
    title: "End-to-End Support",
    description: "From initial setup to ongoing monitoring and response",
  },
];

const stats = [
  { number: "99.9%", label: "Uptime with secure AWS configurations" },
  { number: "50%", label: "Fewer incidents using AWS security best practices" },
  { number: "24/7", label: "Threat monitoring and detection" },
];
const databaseDescription = [
  {
    name: "AWS WAF",
    description:
      "AWS WAF is a web application firewall that protects web applications from common web exploits and attacks.",
    icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/WAF.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(243, 185, 169),rgb(240, 187, 163))",
  },
  {
    name: "AWS Shield",
    description:
      "AWS Shield is a managed DDoS protection service that safeguards applications running on AWS.",
    icon: "https://w7.pngwing.com/pngs/335/196/png-transparent-aws-shield-advance-hd-logo.png", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(255, 246, 245),rgb(236, 226, 230))",
  },
  {
    name: "AWS GuardDuty",
    description:
      "AWS GuardDuty is a threat detection service that continuously monitors for malicious or unauthorized activity in AWS accounts and workloads.",
    icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/GuardDuty.svg",
    iconColors: "linear-gradient(135deg,rgb(243, 185, 169),rgb(240, 187, 163))",
  },
  {
    name: "AWS CloudFront",
    description:
      "Amazon CloudFront is a content delivery network (CDN) that securely delivers data, videos, applications, and APIs with low latency.",
    icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg",
    iconColors: "linear-gradient(135deg,rgb(209, 169, 249),rgb(209, 180, 238))", // Replace with actual icon path
  },
  {
    name: "AWS Security Hub",
    description:
      "AWS Security Hub provides a comprehensive view of security alerts and compliance status across AWS accounts.",
    icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Security-Hub.svg",
    iconColors: "linear-gradient(135deg,rgb(243, 185, 169),rgb(240, 187, 163))", // Replace with actual icon path
  },
  {
    name: "AWS Certificate Manager",
    description:
      "AWS Certificate Manager handles provisioning, deploying, and managing SSL/TLS certificates for securing AWS applications and websites",
    icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Certificate-Manager.svg",
    iconColors: "linear-gradient(135deg,rgb(243, 185, 169),rgb(240, 187, 163))", // pastel light blue// Replace with actual icon path
  },
];

export default function AWSSecurityContent() {
  return (
    <section>
      <Banner
        heading="AWS Web Application Security"
        subtext="Protect your applications, data, and customers with AWS-powered security solutions"
        buttonText="Get Free AWS Security Assessment"
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
      <TechToolsSection />
      <AboutTech technologies={databaseDescription} />

      <WhyChooseUs ChooseUs={whychooseus} />
      <OnlinePresence
        title="Secure Your Web Applications Today!"
        description="Don't wait for a breach to take action. Get AWS-powered protection and our expert team."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="AWS Security"
      />
      <DevelopmentProcess
        title="Our AWS Security Implementation Process"
        Process={process}
      />
    </section>
  );
}
