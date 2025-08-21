import QualityManagementContent from "./quality-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function QualityServices() {
  const metaPropsData = {
    title: "Quality Management Services - Cybomb Technologies | Excellence & Compliance",
    description:
      "Cybomb Technologies delivers comprehensive quality management services, ensuring compliance with industry standards and driving continuous improvement in processes.",
    keyword:
      "Quality Management, Process Improvement, Compliance Services, Quality Assurance, Quality Control, Cybomb Technologies",
    url: "https://www.cybomb.com/services/quality-management",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Quality Planning',
    description:
      'We start by defining quality goals, benchmarks, and strategies aligned with your business objectives.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We identify quality expectations, compliance needs, and customer requirements.'
      },
      {
        title: 'Benchmarking Standards',
        description:
          'We set quality benchmarks based on industry standards and best practices.'
      },
      {
        title: 'Risk Analysis',
        description:
          'We assess potential quality risks and prepare preventive strategies.'
      },
      {
        title: 'Process Framework',
        description:
          'We establish workflows and quality gates for all project phases.'
      }
    ]
  },
  {
    id: 'assurance',
    title: 'Assurance',
    description:
      'We implement preventive measures and proactive practices to ensure high-quality deliverables.',
    cards: [
      {
        title: 'Process Audits',
        description:
          'We regularly audit processes to ensure adherence to standards.'
      },
      {
        title: 'Standard Operating Procedures (SOPs)',
        description:
          'We design and enforce SOPs for consistent quality outcomes.'
      },
      {
        title: 'Testing Strategy',
        description:
          'We develop test strategies covering functionality, performance, and compliance.'
      },
      {
        title: 'Continuous Reviews',
        description:
          'We run continuous reviews and peer assessments for error prevention.'
      }
    ]
  },
  {
    id: 'control',
    title: 'Control',
    description:
      'We measure and verify deliverables against defined standards to detect and correct deviations.',
    cards: [
      {
        title: 'Inspection & Testing',
        description:
          'We conduct rigorous inspections and testing to validate output quality.'
      },
      {
        title: 'Defect Tracking',
        description:
          'We use tools to track, prioritize, and resolve quality defects quickly.'
      },
      {
        title: 'Performance Metrics',
        description:
          'We monitor KPIs such as defect density, response time, and compliance rate.'
      },
      {
        title: 'Corrective Actions',
        description:
          'We implement corrective actions to resolve identified issues efficiently.'
      }
    ]
  },
  {
    id: 'compliance',
    title: 'Governance',
    description:
      'We ensure all quality processes align with legal, regulatory, and industry standards.',
    cards: [
      {
        title: 'Regulatory Adherence',
        description:
          'We comply with ISO, CMMI, GDPR, HIPAA, and other global standards.'
      },
      {
        title: 'Documentation',
        description:
          'We maintain audit-ready documentation for transparency and accountability.'
      },
      {
        title: 'Security Standards',
        description:
          'We enforce security and privacy measures throughout the quality lifecycle.'
      },
      {
        title: 'Governance Frameworks',
        description:
          'We implement governance models to oversee quality across all teams.'
      }
    ]
  },
  {
    id: 'improvement',
    title: 'Improvement',
    description:
      'We focus on evolving quality processes to deliver better performance over time.',
    cards: [
      {
        title: 'Root Cause Analysis',
        description:
          'We identify the underlying causes of recurring quality issues.'
      },
      {
        title: 'Process Optimization',
        description:
          'We refine processes to increase efficiency and reduce defects.'
      },
      {
        title: 'Automation',
        description:
          'We leverage automation for testing, monitoring, and reporting to boost accuracy.'
      },
      {
        title: 'Feedback Loops',
        description:
          'We collect and implement stakeholder feedback for ongoing improvements.'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description:
      'We provide continuous monitoring, reporting, and support to sustain high-quality operations.',
    cards: [
      {
        title: 'Real-Time Monitoring',
        description:
          'We monitor systems and processes continuously for deviations.'
      },
      {
        title: 'Reporting Dashboards',
        description:
          'We provide stakeholders with transparent dashboards and analytics.'
      },
      {
        title: 'Proactive Alerts',
        description:
          'We set up alerts for early detection of potential quality issues.'
      },
      {
        title: 'Dedicated Support',
        description:
          'We offer ongoing support for issue resolution and quality enhancement.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <QualityManagementContent />
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

export default QualityServices;
