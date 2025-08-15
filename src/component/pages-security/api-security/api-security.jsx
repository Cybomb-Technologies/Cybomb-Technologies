import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import APISecurityContent from "./api-security-content";
import Metatags from '../../../SEO/meta-tags';


export default function ApiSecurity() {
  const metaPropsData = {
  title: "API Security Services - Cybomb Technologies | Secure APIs & Data Protection",
  description:
    "Cybomb Technologies provides API Security Services to protect your applications from threats. We ensure secure authentication, encryption, and compliance for APIs across industries.",
  keyword:
    "API Security Services, Secure API Development, API Threat Protection, API Authentication, API Encryption, API Vulnerability Testing, API Security Consulting, Secure Data Transmission, API Security India",
  url: "https://www.cybomb.com/services/api-security",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <APISecurityContent />
      <AgileProcess/>
      <StillNotSure
  title="Safeguard your APIs with cutting-edge security solutions—stop breaches before they happen and ensure your data stays protected."
/>     
<Metatags  metaProps={metaPropsData}/>
    </>
  );
}
