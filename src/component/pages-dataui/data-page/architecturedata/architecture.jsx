import ArchitectureContent from "./architecture-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function ArchitectureData() {
  const metaPropsData = {
    title: "Architecture Services - Cybomb Technologies | Scalable & Efficient System Design",
    description:
      "Cybomb Technologies provides expert architecture services, designing scalable, secure, and high-performance systems tailored to your business needs.",
    keyword:
      "System Architecture, Software Architecture, Enterprise Solutions, Scalable Systems, Secure Architecture, Cybomb Technologies",
    url: "https://www.cybomb.com/services/architecture",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
  const tabsData = [
  {
    id: 'planning',
    title: 'Architecture Planning',
    description:
      'We start by understanding your business requirements and defining a scalable architecture strategy.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather and analyze functional and non-functional requirements to define architecture goals.'
      },
      {
        title: 'Technology Assessment',
        description:
          'We evaluate technology stacks and tools best suited for your business needs.'
      },
      {
        title: 'Architecture Roadmap',
        description:
          'We create a step-by-step roadmap for implementation and long-term scalability.'
      },
      {
        title: 'Risk & Feasibility Study',
        description:
          'We identify risks, dependencies, and feasibility to ensure smooth execution.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We design high-level and detailed architecture blueprints for applications, systems, and cloud solutions.',
    cards: [
      {
        title: 'Solution Architecture',
        description:
          'We define the overall solution structure, components, and their interactions.'
      },
      {
        title: 'Software Architecture',
        description:
          'We design modular, maintainable, and scalable software architecture patterns.'
      },
      {
        title: 'Cloud Architecture',
        description:
          'We design cloud-native and hybrid architectures for AWS, Azure, and GCP environments.'
      },
      {
        title: 'Enterprise Architecture',
        description:
          'We align IT systems with business strategy using TOGAF and other frameworks.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We support the implementation of designed architectures, ensuring performance and security.',
    cards: [
      {
        title: 'Reference Implementation',
        description:
          'We create proof-of-concept and reference models to validate design choices.'
      },
      {
        title: 'Microservices & APIs',
        description:
          'We implement microservices, APIs, and integration layers for flexible scaling.'
      },
      {
        title: 'Cloud-Native Development',
        description:
          'We build applications optimized for cloud infrastructure and services.'
      },
      {
        title: 'DevOps Integration',
        description:
          'We ensure CI/CD pipelines are integrated into the architecture for faster releases.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We validate architectural designs and ensure the system meets performance, security, and compliance standards.',
    cards: [
      {
        title: 'Performance Testing',
        description:
          'We test scalability and performance under expected and peak workloads.'
      },
      {
        title: 'Security Testing',
        description:
          'We identify and fix vulnerabilities to ensure secure architecture design.'
      },
      {
        title: 'Compliance Testing',
        description:
          'We verify compliance with industry standards such as GDPR, HIPAA, and ISO.'
      },
      {
        title: 'Architecture Reviews',
        description:
          'We conduct periodic reviews to validate alignment with business and technology goals.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy architectures across environments and ensure smooth system integration.',
    cards: [
      {
        title: 'Cloud & On-Prem Deployment',
        description:
          'We deploy solutions on cloud platforms or hybrid/on-premise environments.'
      },
      {
        title: 'System Integration',
        description:
          'We integrate architecture components with legacy systems and third-party tools.'
      },
      {
        title: 'Data Migration',
        description:
          'We execute secure and efficient data migration strategies.'
      },
      {
        title: 'Infrastructure as Code',
        description:
          'We use IaC tools like Terraform and Ansible for automated deployments.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Monitoring',
    description:
      'We provide governance, monitoring, and continuous optimization for long-term architectural success.',
    cards: [
      {
        title: 'Architecture Governance',
        description:
          'We define policies, standards, and best practices for architecture management.'
      },
      {
        title: 'Monitoring & Observability',
        description:
          'We implement monitoring tools for performance, availability, and security tracking.'
      },
      {
        title: 'Continuous Optimization',
        description:
          'We refine architecture based on evolving business and technology requirements.'
      },
      {
        title: 'Support & Training',
        description:
          'We provide ongoing support and training for architecture teams and stakeholders.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ArchitectureContent />
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

export default ArchitectureData;
