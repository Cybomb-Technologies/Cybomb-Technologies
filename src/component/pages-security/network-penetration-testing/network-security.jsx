import Metatags from "../../../SEO/meta-tags";
import AgileProcess1 from "../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../common-ui/security/StillNotSure";
import NetworkPenTestContent from "./network-security-content";

export default function NetworkPen() {
  const metaPropsData = {
    title: "Best Network Penetration Testing Company in Chennai | Cybomb Tech",
    description:
      "Cybomb Technologies offers expert network security testing to find and fix vulnerabilities. Professional penetration testing services for enhanced protection.",
    keyword:
      "penetration testing services, network vulnerability assessment, ethical hacking company, cybersecurity testing, security audit services",
    url: "https://www.cybomb.com/services/network-penetration-testing",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Scoping",
      description:
        "We define the objectives, scope, and rules of engagement for secure and ethical network penetration testing.",
      cards: [
        {
          title: "Requirement Analysis",
          description:
            "We gather business goals, compliance needs, and security requirements to align the test strategy.",
        },
        {
          title: "Scope Definition",
          description:
            "We define in-scope assets such as servers, firewalls, routers, switches, VPNs, and cloud networks.",
        },
        {
          title: "Rules of Engagement",
          description:
            "We establish testing boundaries, timelines, and escalation procedures for safe operations.",
        },
        {
          title: "Threat Modeling",
          description:
            "We identify potential adversary tactics and attack surfaces relevant to your network.",
        },
      ],
    },
    {
      id: "reconnaissance",
      title: "Reconnaissance",
      description:
        "We gather intelligence about the target network and map its attack surface before exploitation.",
      cards: [
        {
          title: "Passive Recon",
          description:
            "We collect OSINT data including DNS, WHOIS, SSL certificates, and metadata.",
        },
        {
          title: "Active Scanning",
          description:
            "We use controlled scans to identify open ports, services, and live hosts.",
        },
        {
          title: "Topology Mapping",
          description:
            "We build a visual map of your network infrastructure to reveal hidden assets and entry points.",
        },
        {
          title: "Technology Fingerprinting",
          description:
            "We identify OS, firewalls, IDS/IPS, and software versions for potential exploits.",
        },
      ],
    },
    {
      id: "exploitation",
      title: "Exploitation",
      description:
        "We simulate real-world attacks to uncover vulnerabilities and measure security resilience.",
      cards: [
        {
          title: "Vulnerability Exploitation",
          description:
            "We attempt to exploit identified flaws in services, misconfigurations, and patch levels.",
        },
        {
          title: "Privilege Escalation",
          description:
            "We test methods to escalate from low-level access to administrative control.",
        },
        {
          title: "Lateral Movement",
          description:
            "We simulate attacker behavior to move across network segments and access sensitive assets.",
        },
        {
          title: "Bypassing Defenses",
          description:
            "We test IDS/IPS, firewalls, and endpoint defenses for bypass techniques.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We perform specialized tests to cover deep and complex attack vectors.",
      cards: [
        {
          title: "Wireless Network Testing",
          description:
            "We test Wi-Fi/WLAN security for rogue APs, weak encryption, and credential theft.",
        },
        {
          title: "VPN & Remote Access",
          description:
            "We test VPNs, remote desktop services, and secure tunnels for misconfigurations.",
        },
        {
          title: "Cloud Network Security",
          description:
            "We assess cloud-hosted environments like AWS, Azure, and GCP for network-level vulnerabilities.",
        },
        {
          title: "Zero Trust Validation",
          description:
            "We evaluate how effectively your Zero Trust model protects against lateral movement.",
        },
      ],
    },
    {
      id: "reporting",
      title: "Reporting",
      description:
        "We provide clear, actionable reports to help remediate vulnerabilities and strengthen defenses.",
      cards: [
        {
          title: "Executive Summary",
          description:
            "We deliver high-level findings tailored for business leaders and stakeholders.",
        },
        {
          title: "Technical Report",
          description:
            "We provide detailed evidence of vulnerabilities, exploitation steps, and impact.",
        },
        {
          title: "Risk Prioritization",
          description:
            "We classify vulnerabilities by severity (Critical, High, Medium, Low).",
        },
        {
          title: "Remediation Guidance",
          description:
            "We give step-by-step recommendations to patch and strengthen your network security.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Support",
      description:
        "We ensure ongoing protection through validation, retesting, and continuous monitoring.",
      cards: [
        {
          title: "Retesting",
          description:
            "We validate fixes and confirm that previously discovered vulnerabilities are resolved.",
        },
        {
          title: "Continuous Monitoring",
          description:
            "We offer ongoing scans and alerts to detect new vulnerabilities as your network evolves.",
        },
        {
          title: "Security Awareness",
          description:
            "We provide training for IT staff to defend against network-based threats.",
        },
        {
          title: "Long-Term Partnership",
          description:
            "We assist in building a sustainable vulnerability management and patching process.",
        },
      ],
    },
  ];

  return (
    <>
      <NetworkPenTestContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure title="Identify vulnerabilities in your network before attackers do—perform in-depth penetration testing, strengthen defenses, and ensure continuous security." />

      <Metatags metaProps={metaPropsData} />
    </>
  );
}
