import Metatags from '../../../SEO/meta-tags';
import AgileProcess1 from '../../common-ui/agile-process/agile-process1';
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
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We create tailored mobile app security strategies that safeguard applications from data leaks, fraud, and cyber threats.',
    cards: [
      {
        title: 'Threat Modeling',
        description:
          'We identify potential risks including reverse engineering, insecure data storage, and API exploitation.'
      },
      {
        title: 'Regulatory Compliance',
        description:
          'We ensure adherence to GDPR, HIPAA, PCI DSS, and other app-related compliance standards.'
      },
      {
        title: 'Secure Architecture',
        description:
          'We design mobile-first security models with strong encryption and least-privilege access.'
      },
      {
        title: 'Data Protection Strategy',
        description:
          'We plan secure handling of sensitive data with device-level and server-side protections.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We integrate robust security features without disrupting mobile app usability and user experience.',
    cards: [
      {
        title: 'Secure Authentication UX',
        description:
          'We design biometric, MFA, and passwordless login flows for secure access.'
      },
      {
        title: 'Data Privacy by Design',
        description:
          'We minimize data exposure by embedding encryption, masking, and anonymization into app flows.'
      },
      {
        title: 'Session & Token Security',
        description:
          'We enforce short-lived tokens, refresh cycles, and secure session handling.'
      },
      {
        title: 'Error & Alert Handling',
        description:
          'We design error messages that prevent leakage of sensitive system information.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We follow secure coding practices for Android, iOS, and cross-platform apps to minimize vulnerabilities.',
    cards: [
      {
        title: 'OWASP Mobile Top 10 Compliance',
        description:
          'We develop apps that proactively defend against the most common mobile threats.'
      },
      {
        title: 'API & Backend Security',
        description:
          'We secure API calls with SSL pinning, strong authentication, and request validation.'
      },
      {
        title: 'Data Encryption',
        description:
          'We use AES-256, TLS, and platform-specific encryption for sensitive data at rest and in transit.'
      },
      {
        title: 'Secure Storage Practices',
        description:
          'We prevent sensitive data storage in insecure locations like logs or caches.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We thoroughly test mobile apps to detect vulnerabilities before attackers can exploit them.',
    cards: [
      {
        title: 'Static & Dynamic Analysis',
        description:
          'We scan source code and runtime behavior for security flaws.'
      },
      {
        title: 'Penetration Testing',
        description:
          'We simulate attacks including jailbreak/root exploits, API tampering, and data theft.'
      },
      {
        title: 'Reverse Engineering Defense',
        description:
          'We test app resilience against code tampering and unauthorized modifications.'
      },
      {
        title: 'Compliance Testing',
        description:
          'We validate mobile apps against security and data privacy regulations.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We secure mobile apps during release and distribution to prevent tampering and unauthorized access.',
    cards: [
      {
        title: 'App Store Security',
        description:
          'We implement code obfuscation, binary hardening, and integrity checks for published apps.'
      },
      {
        title: 'Secure CI/CD Pipelines',
        description:
          'We integrate automated security checks into mobile app build pipelines.'
      },
      {
        title: 'Certificate & Key Management',
        description:
          'We ensure proper signing and encryption of app packages to prevent forgery.'
      },
      {
        title: 'Environment Hardening',
        description:
          'We secure staging, production, and release environments from insider and external threats.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous protection and monitoring for mobile applications post-deployment.',
    cards: [
      {
        title: 'Runtime Protection (RASP)',
        description:
          'We embed runtime application self-protection to detect real-time threats on devices.'
      },
      {
        title: 'Continuous Vulnerability Scans',
        description:
          'We monitor app updates, APIs, and libraries for emerging vulnerabilities.'
      },
      {
        title: 'Incident Response',
        description:
          'We provide quick detection and remediation for mobile security breaches or exploits.'
      },
      {
        title: 'Patch & Update Management',
        description:
          'We ensure mobile apps remain secure with ongoing updates and security fixes.'
      }
    ]
  }
];

  return (
    <>
      <MobileSecurityContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure
      title="Don’t wait for a breach to take action. Secure your mobile apps with our proven protection strategies and expert team."
      />
     <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
