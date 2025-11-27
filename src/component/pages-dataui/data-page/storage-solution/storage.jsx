import StorageContent from "./storage-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function StorageServices() {
  const metaPropsData = {
    title: "Data Storage Solutions - Cybomb Technologies | Secure & Scalable Storage",
    description:
      "Cybomb Technologies offers secure, scalable, and high-performance data storage solutions tailored to meet the needs of modern businesses.",
    keyword:
      "Data Storage, Cloud Storage, Secure Storage, Scalable Storage Solutions, Data Backup, Cybomb Technologies",
    url: "https://www.cybomb.com/services/storage-solution",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Storage Planning',
    description:
      'We begin by understanding your business needs and designing a storage solution that balances performance, scalability, and cost.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We assess your storage capacity, performance needs, and compliance requirements.'
      },
      {
        title: 'Architecture Design',
        description:
          'We design storage architectures including block, file, object, and hybrid models.'
      },
      {
        title: 'Scalability Planning',
        description:
          'We ensure your storage systems are future-proof with scalable options.'
      },
      {
        title: 'Cost Optimization',
        description:
          'We design cost-efficient storage strategies without compromising performance.'
      }
    ]
  },
  {
    id: 'implementation',
    title: 'Implementation',
    description:
      'We deploy storage solutions tailored to your infrastructure and application requirements.',
    cards: [
      {
        title: 'On-Premises Storage',
        description:
          'We set up enterprise storage arrays, SAN, and NAS solutions.'
      },
      {
        title: 'Cloud Storage',
        description:
          'We configure cloud storage with providers like AWS, Azure, and Google Cloud.'
      },
      {
        title: 'Hybrid Storage',
        description:
          'We implement hybrid models combining on-premises and cloud for flexibility.'
      },
      {
        title: 'Data Integration',
        description:
          'We integrate storage with applications, databases, and workflows seamlessly.'
      }
    ]
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description:
      'We optimize storage systems for speed, efficiency, and reliability.',
    cards: [
      {
        title: 'Load Balancing',
        description:
          'We balance workloads across storage nodes to maximize performance.'
      },
      {
        title: 'Caching & Tiering',
        description:
          'We implement intelligent caching and tiered storage strategies.'
      },
      {
        title: 'Capacity Management',
        description:
          'We monitor and manage capacity to avoid performance bottlenecks.'
      },
      {
        title: 'Latency Reduction',
        description:
          'We minimize latency using optimized storage configurations and hardware.'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    description:
      'We safeguard your data with strong security measures and compliance frameworks.',
    cards: [
      {
        title: 'Data Encryption',
        description:
          'We secure data at rest and in transit using advanced encryption protocols.'
      },
      {
        title: 'Access Control',
        description:
          'We implement role-based access and identity management systems.'
      },
      {
        title: 'Compliance Standards',
        description:
          'We align with standards such as GDPR, HIPAA, and ISO 27001.'
      },
      {
        title: 'Backup & Disaster Recovery',
        description:
          'We ensure business continuity with automated backup and recovery solutions.'
      }
    ]
  },
  {
    id: 'migration',
    title: 'Migration',
    description:
      'We provide seamless and secure data migration services across platforms and environments.',
    cards: [
      {
        title: 'Legacy to Cloud Migration',
        description:
          'We migrate data from traditional storage systems to modern cloud platforms.'
      },
      {
        title: 'Cross-Cloud Migration',
        description:
          'We transfer data between AWS, Azure, GCP, and private clouds efficiently.'
      },
      {
        title: 'Minimal Downtime',
        description:
          'We ensure zero to minimal downtime during migration processes.'
      },
      {
        title: 'Data Validation',
        description:
          'We validate migrated data for accuracy, integrity, and completeness.'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description:
      'We provide continuous monitoring, reporting, and expert support for your storage solutions.',
    cards: [
      {
        title: '24/7 Monitoring',
        description:
          'We monitor storage performance and availability in real-time.'
      },
      {
        title: 'Proactive Alerts',
        description:
          'We set up automated alerts for capacity, performance, and failures.'
      },
      {
        title: 'Analytics & Reporting',
        description:
          'We deliver detailed insights on storage usage and optimization opportunities.'
      },
      {
        title: 'Technical Support',
        description:
          'We provide dedicated support for issue resolution and ongoing improvements.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <StorageContent />
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

export default StorageServices;
