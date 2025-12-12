import StillNotSure from '../../common-ui/security/StillNotSure';
import CloudSecurityContent from './cloud-security-content';
import Metatags from '../../../SEO/meta-tags';
import AgileProcess1 from '../../common-ui/agile-process/agile-process1';



export default function CloudSecurity() {
  const metaPropsData = {
  title: "Cloud Security Services in chennai | Cybomb Techn",
  description:
    "Cybomb Techn offers Cloud Security Services to protect data, applications, and infrastructure across AWS, Azure, and Google Cloud. Our solutions include threat detection, encryption, compliance, and continuous monitoring.",
  keyword:
    "Cloud Security Services in chennai, Secure Cloud Infrastructure, Cloud Threat Protection, Cloud Compliance Solutions, Multi-Cloud Security, Cloud Data Encryption, Cloud Security Consulting, Cloud Security India",
  url: "https://www.cybomb.com/services/cloud-security-services",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We build tailored cloud security strategies that protect applications, infrastructure, and data across AWS, Azure, and GCP.',
    cards: [
      {
        title: 'Risk & Threat Assessment',
        description:
          'We analyze your cloud environment to identify risks, vulnerabilities, and potential attack vectors.'
      },
      {
        title: 'Cloud Security Architecture',
        description:
          'We design zero-trust security models, secure network topologies, and identity strategies for multi-cloud environments.'
      },
      {
        title: 'Compliance & Regulations',
        description:
          'We ensure compliance with HIPAA, GDPR, PCI DSS, ISO 27001, and regional data laws.'
      },
      {
        title: 'Identity & Access Strategy',
        description:
          'We define IAM policies, MFA, and least-privilege roles to minimize unauthorized access risks.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We ensure security is built into your applications without compromising user experience.',
    cards: [
      {
        title: 'Secure Authentication Flows',
        description:
          'We integrate MFA, OAuth, and SSO for seamless yet secure user logins.'
      },
      {
        title: 'Data Privacy by Design',
        description:
          'We embed encryption, anonymization, and data minimization into application workflows.'
      },
      {
        title: 'Session & Token Management',
        description:
          'We design safe session handling to prevent hijacking and unauthorized reuse of tokens.'
      },
      {
        title: 'Error & Alert Handling',
        description:
          'We provide user-friendly error messages that don’t reveal system vulnerabilities.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build secure, scalable applications with security-first coding practices and cloud-native tools.',
    cards: [
      {
        title: 'Secure APIs & Microservices',
        description:
          'We implement API Gateway protections, throttling, and token validation to safeguard traffic.'
      },
      {
        title: 'Encryption Everywhere',
        description:
          'We use KMS, TLS, and Vault-based solutions to protect data in transit and at rest.'
      },
      {
        title: 'IAM & Secrets Management',
        description:
          'We ensure secure handling of credentials, API keys, and secrets with vault services.'
      },
      {
        title: 'DevSecOps Integration',
        description:
          'We embed security scans and checks directly into CI/CD pipelines.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We validate the security posture of your cloud workloads with advanced testing methodologies.',
    cards: [
      {
        title: 'Cloud Vulnerability Scans',
        description:
          'We detect misconfigurations, exposed ports, and insecure endpoints across cloud providers.'
      },
      {
        title: 'Penetration Testing',
        description:
          'We simulate attacks on applications, APIs, and infrastructure to find real-world risks.'
      },
      {
        title: 'Compliance Testing',
        description:
          'We verify that your workloads align with industry and regional compliance standards.'
      },
      {
        title: 'Automated Security Testing',
        description:
          'We integrate automated scans into your pipelines for continuous protection.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We secure infrastructure and applications during deployment to prevent misconfigurations and breaches.',
    cards: [
      {
        title: 'Infrastructure as Code Security',
        description:
          'We review and secure Terraform, CloudFormation, and ARM templates before rollout.'
      },
      {
        title: 'WAF & DDoS Protection',
        description:
          'We deploy cloud-native firewalls and Shield/Cloud Armor protections for resilience.'
      },
      {
        title: 'Secure CI/CD Pipelines',
        description:
          'We lock down pipelines to prevent supply-chain and insider threats.'
      },
      {
        title: 'SSL/TLS Enforcement',
        description:
          'We configure certificate management and HTTPS enforcement for all workloads.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous protection, monitoring, and incident response for your cloud environments.',
    cards: [
      {
        title: 'Real-Time Monitoring',
        description:
          'We use CloudWatch, Azure Monitor, and GCP Operations Suite to detect anomalies.'
      },
      {
        title: 'Patch & Vulnerability Management',
        description:
          'We apply timely updates to OS, containers, and cloud resources to reduce risks.'
      },
      {
        title: 'Incident Response & Recovery',
        description:
          'We deliver 24/7 response for cloud incidents, breaches, or outages with defined playbooks.'
      },
      {
        title: 'Compliance Maintenance',
        description:
          'We continuously align your workloads with industry and legal compliance requirements.'
      }
    ]
  }
];

  return (
    <>
      <CloudSecurityContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure
  title="Protect your cloud infrastructure with advanced security measures—prevent breaches, ensure compliance, and keep your business running securely."
/>
<Metatags  metaProps={metaPropsData}/>
    </>
  );
}
