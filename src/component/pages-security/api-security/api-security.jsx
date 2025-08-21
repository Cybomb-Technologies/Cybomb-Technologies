import StillNotSure from '../../common-ui/security/StillNotSure';
import APISecurityContent from "./api-security-content";
import Metatags from '../../../SEO/meta-tags';
import AgileProcess1 from '../../common-ui/agile-process/agile-process1';


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
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help organizations define a strong API security strategy with the right policies, tools, and governance models.',
    cards: [
      {
        title: 'Risk Assessment',
        description:
          'We identify potential threats, vulnerabilities, and risks across your API ecosystem.'
      },
      {
        title: 'Security Architecture Planning',
        description:
          'We design security frameworks that ensure APIs are protected by default.'
      },
      {
        title: 'Compliance Alignment',
        description:
          'We align your API security strategy with standards like OWASP API Top 10, GDPR, and HIPAA.'
      },
      {
        title: 'API Governance Model',
        description:
          'We help define policies for API access, usage monitoring, and lifecycle management.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We ensure secure-by-design API workflows and user-facing integrations with minimal friction.',
    cards: [
      {
        title: 'Secure Authentication Flows',
        description:
          'We design OAuth2, OpenID Connect, and token-based authentication flows for user safety.'
      },
      {
        title: 'Access Control Experience',
        description:
          'We create intuitive ways for users and developers to securely manage API keys and permissions.'
      },
      {
        title: 'Error & Response Handling',
        description:
          'We design secure error messages and API responses to prevent sensitive data exposure.'
      },
      {
        title: 'Developer Portal Security',
        description:
          'We ensure developer portals balance ease of use with strong authentication and data protection.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build and integrate robust security measures directly into your API infrastructure.',
    cards: [
      {
        title: 'Authentication & Authorization',
        description:
          'We implement API keys, JWT, OAuth2, and role-based access control for strong security.'
      },
      {
        title: 'Data Encryption',
        description:
          'We secure data in transit (TLS/SSL) and at rest using industry-grade encryption methods.'
      },
      {
        title: 'Rate Limiting & Throttling',
        description:
          'We prevent API abuse, DDoS attacks, and overuse through intelligent rate controls.'
      },
      {
        title: 'Secure API Gateways',
        description:
          'We set up API gateways with built-in security policies, traffic filtering, and monitoring.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We conduct extensive testing to ensure your APIs remain resilient against real-world cyber threats.',
    cards: [
      {
        title: 'Penetration Testing',
        description:
          'We simulate real-world attacks to identify vulnerabilities in APIs.'
      },
      {
        title: 'OWASP API Top 10 Validation',
        description:
          'We test APIs against common vulnerabilities like broken authentication and data exposure.'
      },
      {
        title: 'Fuzz & Stress Testing',
        description:
          'We use fuzzing techniques to uncover hidden flaws in API request handling.'
      },
      {
        title: 'Automated Security Scans',
        description:
          'We integrate continuous security scans into your CI/CD pipeline.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy API security solutions with compliance, monitoring, and scalability in mind.',
    cards: [
      {
        title: 'API Gateway Deployment',
        description:
          'We configure secure gateways like Kong, Apigee, or AWS API Gateway for enterprise-grade protection.'
      },
      {
        title: 'Token & Certificate Management',
        description:
          'We handle token lifecycles, key rotations, and SSL certificate renewals securely.'
      },
      {
        title: 'Logging & Monitoring',
        description:
          'We set up centralized logging and real-time monitoring to detect anomalies early.'
      },
      {
        title: 'Compliance-Ready Setup',
        description:
          'We ensure deployments meet industry compliance standards from day one.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous monitoring, updates, and policy enforcement to keep your APIs secure.',
    cards: [
      {
        title: 'Threat Intelligence Updates',
        description:
          'We update security rules and signatures to defend against evolving threats.'
      },
      {
        title: 'Access & Policy Management',
        description:
          'We manage API roles, tokens, and permissions for ongoing security.'
      },
      {
        title: 'Incident Response',
        description:
          'We provide rapid response and mitigation in case of API breaches or suspicious activity.'
      },
      {
        title: 'Performance & Security Tuning',
        description:
          'We optimize APIs for speed while maintaining strict security policies.'
      }
    ]
  }
];

  return (
    <>
      <APISecurityContent />
     <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure
  title="Safeguard your APIs with cutting-edge security solutions—stop breaches before they happen and ensure your data stays protected."
/>     
<Metatags  metaProps={metaPropsData}/>
    </>
  );
}
