import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import CloudSecurityContent from './cloud-security-content';
import Metatags from '../../../SEO/meta-tags';



export default function CloudSecurity() {
  const metaPropsData = {
  title: "Cloud Security Services - Cybomb Technologies | Secure Cloud Infrastructure & Compliance",
  description:
    "Cybomb Technologies offers Cloud Security Services to protect data, applications, and infrastructure across AWS, Azure, and Google Cloud. Our solutions include threat detection, encryption, compliance, and continuous monitoring.",
  keyword:
    "Cloud Security Services, Secure Cloud Infrastructure, Cloud Threat Protection, Cloud Compliance Solutions, Multi-Cloud Security, Cloud Data Encryption, Cloud Security Consulting, Cloud Security India",
  url: "https://www.cybomb.com/services/cloud-security-services",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <CloudSecurityContent />
      <AgileProcess/>
      <StillNotSure
  title="Protect your cloud infrastructure with advanced security measures—prevent breaches, ensure compliance, and keep your business running securely."
/>
<Metatags  metaProps={metaPropsData}/>
    </>
  );
}
