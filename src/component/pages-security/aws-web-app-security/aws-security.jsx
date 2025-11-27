import StillNotSure from '../../common-ui/security/StillNotSure';
import AWSSecurityContent from "./aws-security-content";
import Metatags from '../../../SEO/meta-tags';
import AgileProcess1 from '../../common-ui/agile-process/agile-process1';


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
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We design AWS-based security strategies to safeguard your web applications from the ground up.',
    cards: [
      {
        title: 'Threat Modeling',
        description:
          'We identify risks specific to your AWS-hosted applications, covering infrastructure, APIs, and data flows.'
      },
      {
        title: 'Security Architecture Design',
        description:
          'We plan secure VPC, IAM, and WAF configurations to ensure AWS workloads are resilient.'
      },
      {
        title: 'Compliance Readiness',
        description:
          'We align your AWS environment with HIPAA, PCI DSS, GDPR, and ISO standards.'
      },
      {
        title: 'Identity & Access Strategy',
        description:
          'We define policies for AWS IAM, MFA, and least-privilege access to minimize risks.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We build security into the user experience, ensuring smooth yet protected access to AWS-hosted apps.',
    cards: [
      {
        title: 'Secure Login Interfaces',
        description:
          'We implement MFA, SSO, and Cognito-based login flows for safer user authentication.'
      },
      {
        title: 'Session Management',
        description:
          'We design secure session handling to prevent hijacking and unauthorized access.'
      },
      {
        title: 'Error Handling & Messaging',
        description:
          'We design error messages that inform users without exposing sensitive system details.'
      },
      {
        title: 'Data Privacy by Design',
        description:
          'We integrate encryption and data minimization into every UI interaction with AWS backends.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build applications that are secure-by-default, leveraging AWS-native security tools.',
    cards: [
      {
        title: 'IAM Roles & Policies',
        description:
          'We enforce least-privilege permissions for EC2, Lambda, S3, and RDS resources.'
      },
      {
        title: 'Secure Code Practices',
        description:
          'We implement secure coding standards with AWS SDKs and services.'
      },
      {
        title: 'Encryption Integration',
        description:
          'We use AWS KMS, Secrets Manager, and SSL/TLS for end-to-end data security.'
      },
      {
        title: 'API Gateway Protection',
        description:
          'We enforce throttling, WAF rules, and token validation for secure API traffic.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We test your AWS web applications against vulnerabilities and compliance gaps.',
    cards: [
      {
        title: 'Vulnerability Scanning',
        description:
          'We scan AWS workloads for misconfigurations, exposed endpoints, and weak policies.'
      },
      {
        title: 'Penetration Testing',
        description:
          'We simulate real-world attacks to identify weak points in your AWS-hosted apps.'
      },
      {
        title: 'AWS Config & Inspector',
        description:
          'We leverage AWS security tools to validate compliance and detect risky changes.'
      },
      {
        title: 'Automated Testing',
        description:
          'We integrate security tests into your CI/CD pipelines for continuous monitoring.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We secure your application deployment pipelines and production workloads on AWS.',
    cards: [
      {
        title: 'Infrastructure as Code Security',
        description:
          'We secure Terraform, CloudFormation, and CDK scripts before deployment.'
      },
      {
        title: 'AWS WAF & Shield',
        description:
          'We deploy WAF rules and Shield Advanced to mitigate DDoS and injection attacks.'
      },
      {
        title: 'Secure CI/CD Pipelines',
        description:
          'We integrate CodePipeline and CodeBuild with static analysis and vulnerability scans.'
      },
      {
        title: 'SSL/TLS Certificates',
        description:
          'We configure AWS Certificate Manager for HTTPS enforcement and certificate renewals.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous security monitoring, incident response, and compliance updates for AWS web apps.',
    cards: [
      {
        title: 'CloudWatch & GuardDuty Monitoring',
        description:
          'We set up real-time alerts and anomaly detection for suspicious activities.'
      },
      {
        title: 'Patch Management',
        description:
          'We ensure timely updates for EC2, containers, and dependencies to prevent exploits.'
      },
      {
        title: 'Incident Response',
        description:
          'We provide 24/7 response for DDoS attacks, breaches, or misconfigurations.'
      },
      {
        title: 'Ongoing Compliance',
        description:
          'We keep your AWS applications aligned with evolving regulatory and industry standards.'
      }
    ]
  }
];

  return (
    <>
      <AWSSecurityContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure
      title="Don't wait for a breach to take action. Secure your web applications
with AWS-powered protection and our expert team."
      />
     <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
