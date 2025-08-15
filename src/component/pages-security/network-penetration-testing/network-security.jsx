import Metatags from '../../../SEO/meta-tags';
import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import NetworkPenTestContent from "./network-security-content";



export default function NetworkPen() {
  const metaPropsData = {
  title: "Network Penetration Testing Services - Cybomb Technologies | Identify & Mitigate Network Vulnerabilities",
  description:
    "Cybomb Technologies offers Network Penetration Testing Services to detect and address security weaknesses. Our experts simulate real-world attacks to enhance your network security and compliance.",
  keyword:
    "Network Penetration Testing, Network Security Assessment, Pen Testing Services, Vulnerability Assessment, Network Threat Detection, Ethical Hacking Services, Cybersecurity Consulting, Network Security Testing India",
  url: "https://www.cybomb.com/services/network-penetration-testing",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <NetworkPenTestContent />
      <AgileProcess/>
      <StillNotSure
  title="Identify vulnerabilities in your network before attackers do—perform in-depth penetration testing, strengthen defenses, and ensure continuous security."
/>

<Metatags  metaProps={metaPropsData}/>
    </>
  );
}
