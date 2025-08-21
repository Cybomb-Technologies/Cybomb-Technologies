import GovernanceContent from "./governance-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function GovernanceSolution() {
  const metaPropsData = {
    title: "Governance Solutions - Cybomb Technologies | Compliance & Risk Management",
    description:
      "Cybomb Technologies delivers governance solutions that ensure compliance, mitigate risks, and enhance operational efficiency through structured frameworks and policies.",
    keyword:
      "Governance Solutions, Compliance Management, Risk Management, IT Governance, Policy Implementation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/governance-solution",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Governance Planning',
    description:
      'We begin with a comprehensive assessment of your organization’s governance requirements, policies, and compliance needs.',
    cards: [
      {
        title: 'Current Governance Assessment',
        description:
          'We analyze existing policies, data flows, and compliance frameworks to identify gaps.'
      },
      {
        title: 'Stakeholder Alignment',
        description:
          'We work with business leaders and IT teams to align governance goals with organizational objectives.'
      },
      {
        title: 'Policy Framework Design',
        description:
          'We define governance policies covering data quality, privacy, access, and accountability.'
      },
      {
        title: 'Risk & Compliance Mapping',
        description:
          'We map industry standards like GDPR, HIPAA, and ISO to your governance strategy.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Architecture',
    description:
      'We design governance frameworks that integrate seamlessly with business processes and technology landscapes.',
    cards: [
      {
        title: 'Data Classification',
        description:
          'We categorize data by sensitivity, ownership, and compliance requirements.'
      },
      {
        title: 'Access Control Design',
        description:
          'We implement RBAC, ABAC, and least-privilege models to secure data access.'
      },
      {
        title: 'Policy Enforcement Framework',
        description:
          'We design systems that enforce policies automatically across platforms and workflows.'
      },
      {
        title: 'Audit & Monitoring Setup',
        description:
          'We design monitoring solutions for real-time compliance and audit readiness.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Implementation',
    description:
      'We deploy governance policies, controls, and monitoring systems across the enterprise.',
    cards: [
      {
        title: 'Data Stewardship Implementation',
        description:
          'We assign roles and responsibilities for managing data quality and compliance.'
      },
      {
        title: 'Identity & Access Management',
        description:
          'We integrate governance with IAM solutions like Okta, Azure AD, or AWS IAM.'
      },
      {
        title: 'Automated Policy Enforcement',
        description:
          'We implement governance rules using automation tools to reduce manual oversight.'
      },
      {
        title: 'Metadata & Lineage Tracking',
        description:
          'We ensure traceability of data flow and transformations for accountability.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We validate governance frameworks to ensure they align with policies, regulations, and operational needs.',
    cards: [
      {
        title: 'Policy Compliance Validation',
        description:
          'We test policies against regulatory requirements such as GDPR, CCPA, HIPAA, or SOX.'
      },
      {
        title: 'Access & Security Testing',
        description:
          'We verify access controls, encryption, and data security implementations.'
      },
      {
        title: 'Audit Readiness Check',
        description:
          'We conduct simulated audits to confirm compliance and reporting accuracy.'
      },
      {
        title: 'Risk Assessment',
        description:
          'We evaluate governance risks and recommend improvements to mitigate them.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We roll out governance frameworks organization-wide with minimal disruption.',
    cards: [
      {
        title: 'Phased Rollout',
        description:
          'We deploy governance in phases to ensure smooth adoption across teams.'
      },
      {
        title: 'Training & Awareness',
        description:
          'We conduct workshops and training sessions to build a governance-first culture.'
      },
      {
        title: 'Governance Tools Integration',
        description:
          'We integrate governance solutions with BI, analytics, and cloud platforms.'
      },
      {
        title: 'Reporting & Dashboards',
        description:
          'We provide dashboards for visibility into governance metrics and compliance status.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing monitoring, optimization, and updates to keep governance frameworks effective.',
    cards: [
      {
        title: 'Real-time Monitoring',
        description:
          'We continuously monitor governance KPIs and compliance indicators.'
      },
      {
        title: 'Governance Optimization',
        description:
          'We refine governance models based on evolving business and regulatory needs.'
      },
      {
        title: 'Compliance Audits',
        description:
          'We provide periodic audits and reporting to ensure continued compliance.'
      },
      {
        title: '24/7 Support',
        description:
          'We offer round-the-clock support to address governance-related issues.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <GovernanceContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure />
    </>
  );
}

export default GovernanceSolution;
