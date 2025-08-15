import Metatags from '../../../SEO/meta-tags';
import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import MobileSecurityContent from "./mobile-security-content";



export default function MobileSecurity() {
  const metaPropsData = {
  title: "Mobile Application Security Services - Cybomb Technologies | Secure Mobile Apps",
  description:
    "Cybomb Technologies provides Mobile Application Security Services to protect iOS and Android apps from vulnerabilities, data breaches, and cyberattacks. Our solutions include app security testing, encryption, and compliance.",
  keyword:
    "Mobile Application Security Services, Mobile App Security Testing, Secure iOS Apps, Secure Android Apps, Mobile App Threat Protection, Mobile App Encryption, Mobile App Penetration Testing, App Security Consulting, Mobile Security India",
  url: "https://www.cybomb.com/services/mobile-application-services",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <MobileSecurityContent />
      <AgileProcess/>
      <StillNotSure
      title="Don’t wait for a breach to take action. Secure your mobile apps with our proven protection strategies and expert team."
      />
     <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
