import AgileProcess from './../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import AWSSecurityContent from "./aws-security-content";
import Metatags from '../../../SEO/meta-tags';


export default function AWSSecurity() {
  const metaPropsData = {
  title: "AWS Web Application Security - Cybomb Technologies | Secure AWS Cloud Apps",
  description:
    "Cybomb Technologies delivers AWS Web Application Security solutions to safeguard your applications against cyber threats. Our services include WAF setup, threat detection, encryption, and compliance for AWS-hosted apps.",
  keyword:
    "AWS Web Application Security, AWS App Security, AWS WAF Setup, AWS Threat Protection, Secure AWS Applications, AWS Encryption Services, Cloud App Security, AWS Security Consulting, AWS Compliance Solutions",
  url: "https://www.cybomb.com/services/aws-web-app-security",
  image: "https://www.cybomb.com",
};

  return (
    <>
      <AWSSecurityContent />
      <AgileProcess/>
      <StillNotSure
      title="Don't wait for a breach to take action. Secure your web applications
with AWS-powered protection and our expert team."
      />
     <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
