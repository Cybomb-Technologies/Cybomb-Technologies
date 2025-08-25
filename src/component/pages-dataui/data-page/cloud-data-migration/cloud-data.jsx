import CloudDataMigrationContent from "./cloud-data-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function CloudData() {
  const metaPropsData = {
    title: "Cloud Data Migration - Cybomb Technologies | Secure & Seamless Cloud Solutions",
    description:
      "Cybomb Technologies offers secure and seamless cloud data migration services, ensuring minimal downtime and maximum efficiency for your business operations.",
    keyword:
      "Cloud Migration, Data Migration, Cloud Services, Secure Data Transfer, Cloud Integration, Cybomb Technologies",
    url: "https://www.cybomb.com/services/cloud-data-migration",
    image: "https://www.cybomb.com/images/banner-2.jpg", 
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Migration Planning',
    description:
      'We begin with a detailed assessment of your current data landscape and create a tailored cloud migration strategy.',
    cards: [
      {
        title: 'Current Environment Assessment',
        description:
          'We analyze your on-premise, hybrid, or legacy systems to identify dependencies and migration readiness.'
      },
      {
        title: 'Cloud Readiness Evaluation',
        description:
          'We evaluate infrastructure, data volumes, and workloads to determine cloud compatibility.'
      },
      {
        title: 'Migration Strategy Design',
        description:
          'We define the right approach—lift-and-shift, re-platforming, or re-architecting based on your goals.'
      },
      {
        title: 'Cost & Risk Analysis',
        description:
          'We provide cost estimates and risk mitigation strategies for a smooth migration journey.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We design a migration framework ensuring secure, scalable, and efficient movement of data.',
    cards: [
      {
        title: 'Data Mapping & Classification',
        description:
          'We map existing data and classify it based on sensitivity, compliance, and usage.'
      },
      {
        title: 'Cloud Architecture Design',
        description:
          'We design cloud-native architectures on AWS, Azure, or GCP to align with your business needs.'
      },
      {
        title: 'Security & Compliance Planning',
        description:
          'We embed encryption, IAM policies, and compliance frameworks like GDPR or HIPAA into the design.'
      },
      {
        title: 'Backup & Recovery Setup',
        description:
          'We plan disaster recovery strategies and ensure business continuity during migration.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Execution',
    description:
      'We securely migrate your data to the cloud using best practices, ensuring minimal downtime.',
    cards: [
      {
        title: 'Data Extraction',
        description:
          'We extract data from source systems while ensuring data integrity and consistency.'
      },
      {
        title: 'Secure Data Transfer',
        description:
          'We leverage encrypted pipelines, VPNs, or direct connect for safe data transfer.'
      },
      {
        title: 'Incremental Migration',
        description:
          'We use phased migration strategies to reduce downtime and risk.'
      },
      {
        title: 'Automation Tools',
        description:
          'We utilize migration tools like AWS DMS, Azure Data Factory, and Google Transfer Service.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We validate migrated data and ensure it meets performance, accuracy, and compliance requirements.',
    cards: [
      {
        title: 'Data Integrity Validation',
        description:
          'We verify data consistency, accuracy, and completeness after migration.'
      },
      {
        title: 'Performance Testing',
        description:
          'We test response times, query performance, and scalability of migrated workloads.'
      },
      {
        title: 'Security Testing',
        description:
          'We test encryption, access controls, and compliance enforcement post-migration.'
      },
      {
        title: 'Application Compatibility Testing',
        description:
          'We ensure migrated data works seamlessly with your business applications.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure smooth deployment of migrated data and systems into the cloud environment.',
    cards: [
      {
        title: 'Cutover Planning',
        description:
          'We prepare go-live schedules to minimize downtime during final migration.'
      },
      {
        title: 'System Integration',
        description:
          'We integrate cloud-hosted data with enterprise applications and services.'
      },
      {
        title: 'Final Data Sync',
        description:
          'We perform delta migration to sync the latest data before switching fully to the cloud.'
      },
      {
        title: 'User Acceptance Testing',
        description:
          'We conduct UAT sessions to confirm readiness for production use.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing support, monitoring, and optimization to maximize the benefits of cloud migration.',
    cards: [
      {
        title: 'Monitoring & Optimization',
        description:
          'We continuously monitor workloads and optimize cloud resource usage for cost efficiency.'
      },
      {
        title: 'Performance Tuning',
        description:
          'We fine-tune queries, workloads, and storage to enhance system performance.'
      },
      {
        title: 'Compliance Auditing',
        description:
          'We ensure ongoing compliance with data governance and regulatory standards.'
      },
      {
        title: '24/7 Support',
        description:
          'We provide round-the-clock support for troubleshooting, upgrades, and enhancements.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CloudDataMigrationContent />
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

export default CloudData;
