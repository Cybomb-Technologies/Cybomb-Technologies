import Banner from '../../common-ui/security/banner';
import InfoStats from "../../common-ui/security/info-stats";
import ServicesOfferings from "../../common-ui/security/services-offerings";
import DevelopmentProcess from '../../common-ui/security/development-process';
import WhyChooseUs from "../../common-ui/security/why-choose-us";
import OnlinePresence from "../../common-ui/security/online-presence";
import placeholderImage from '../../../assets/laptop-preview.png';
import TechToolsSection from "./network-technologies";

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
  { number: "95%", label: "of clients detected critical vulnerabilities before attackers could exploit them" },
  { number: "70%", label: "reduction in exploitable network weaknesses post-engagement" },
  { number: "100%", label: "customized testing tailored to your business environment" }
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
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Strengthen Your Network Defenses Today!"
        description="Don’t wait for a breach—get proactive with our in-depth penetration testing."
        buttonText="Contact Us Now"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Network Penetration Testing"
      />
      <DevelopmentProcess 
        title="Our Penetration Testing Process"
        Process={process}
      />
    </section>
  );
}
