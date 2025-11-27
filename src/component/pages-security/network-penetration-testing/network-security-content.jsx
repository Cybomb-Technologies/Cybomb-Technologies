import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import TechToolsSection from "./network-technologies";
import contactUsImg from './../../../assets/contact/contact-us-img1.jpg';
import AboutTech from '../../common-ui/custom-development/about-tech';
const services = [
  {
    title: 'External Network Penetration Testing',
    description: 'Identify vulnerabilities in public-facing systems and prevent external attacks before they happen',
    icon: 'network',
  },
  {
    title: 'Internal Network Penetration Testing',
    description: 'Simulate insider threats to uncover security gaps in your internal infrastructure',
    icon: 'internal',
  },
  {
    title: 'Wireless Network Security Testing',
    description: 'Test Wi-Fi and wireless access points for unauthorized access and data interception risks',
    icon: 'wifi',
  },
  {
    title: 'Firewall & IDS/IPS Testing',
    description: 'Evaluate the effectiveness of your firewall and intrusion prevention systems',
    icon: 'firewall',
  },
  {
    title: 'Network Device Configuration Review',
    description: 'Assess routers, switches, and network devices for insecure configurations and mismanagement',
    icon: 'config',
  },
  {
    title: 'Vulnerability Assessment & Exploitation',
    description: 'Scan, analyze, and exploit vulnerabilities to measure real-world security impact',
    icon: 'vulnerability',
  },
];

const process = [
  { description: "Gather information and map your network topology" },
  { description: "Identify potential vulnerabilities in network assets" },
  { description: "Simulate real-world attack scenarios" },
  { description: "Exploit vulnerabilities to assess business impact" },
  { description: "Provide a detailed remediation plan and security hardening guidelines" },
];

const whychooseus = [
  {
    title: 'Certified Penetration Testers',
    description: "Our team holds industry-recognized certifications like OSCP, CEH, and CISSP",
  },
  {
    title: 'Realistic Attack Simulations',
    description: 'We replicate tactics used by actual threat actors to ensure realistic testing',
  },
  {
    title: 'Comprehensive Reporting',
    description: 'Clear, actionable reports with risk ratings, exploitation details, and remediation steps',
  },
  {
    title: 'Post-Test Support',
    description: "We help you patch vulnerabilities and re-test to verify fixes",
  },
];

const stats = [
  { number: "95%", label: "Critical risks identified before exploitation" },
  { number: "70%", label: "Weaknesses mitigated post-assessment" },
  { number: "100%", label: "Tailored testing for business environments" },
];
const databaseDescription = [
  {
    name: "Nmap",
    description: "Nmap is an open-source network scanner used for host discovery, service detection, and security auditing.",
    icon: "https://nmap.org/images/nmap-logo-256x256.png", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(205, 218, 234),rgb(238, 246, 255))"
  },
  {
    name: "Nessus",
    description: "Nessus is a widely used vulnerability scanner that helps identify security weaknesses in networks and systems.",
    icon: "https://www.svgrepo.com/show/331601/tenable.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(177, 178, 231),rgb(186, 177, 227))"
  },
  {
    name: "OpenVAS",
    description: "OpenVAS is an open-source vulnerability assessment tool for scanning and managing security risks.",
    icon: "https://miro.medium.com/v2/resize:fit:954/0*fkutkGRXJIjVR9NF.png",
    iconColors: "linear-gradient(135deg,rgb(150, 214, 174),rgb(168, 240, 188))" 
  },
  {
    name: "Advanced IP Scanner",
    description: "Advanced IP Scanner is a fast network scanner that detects connected devices and provides remote access tools.",
    icon: "https://www.advanced-ip-scanner.com/favicon.ico",
    iconColors : "linear-gradient(135deg,rgb(115, 181, 216),rgb(123, 209, 243))" // Replace with actual icon path
  },
  {
    name: "Qualys",
    description: "Qualys is a cloud-based security and compliance platform for continuous vulnerability management and monitoring.",
    icon: "https://usehalo.com/wp-content/uploads/2024/11/qualys-emblem.png",
    iconColors : "linear-gradient(135deg,rgb(242, 174, 174),rgb(243, 170, 170))" // Replace with actual icon path
  },
  {
    name: "Rapid7 Nexpose",
    description: "Rapid7 Nexpose is a vulnerability management solution that identifies, prioritizes, and mitigates security risks in real time",
    icon: "https://www.rapid7.com/_next/static/media/rapid7-logo.cd245920.svg",
    iconColors :"linear-gradient(135deg,rgb(204, 225, 236),rgb(168, 209, 222))" // pastel light blue// Replace with actual icon path

  }
];
export default function NetworkPenTestContent() {
  return (
    <section>
      <Banner 
        heading="Network Penetration Testing"
        subtext="Identify and eliminate vulnerabilities before attackers can exploit them"
        buttonText="Get Free Network Security Assessment"
        note="Your network is the backbone of your business—and a prime target for cybercriminals. Our expert penetration testing simulates real-world attacks to uncover and fix weaknesses before they’re exploited."
      />
      <InfoStats
        stats={stats}
        caption="Trusted by"
        highlight="Businesses Worldwide"
      />
      <ServicesOfferings 
        title="Our Network Penetration Testing Services"
        Services={services}
      />
      <TechToolsSection/>
      <AboutTech technologies={databaseDescription} />

      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Strengthen Your Network Defenses Today!"
        description="Don’t wait for a breach—get proactive with our in-depth penetration testing."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Network Penetration Testing"
      />
      <DevelopmentProcess 
        title="Our Penetration Testing Process"
        Process={process}
      />
    </section>
  );
}
