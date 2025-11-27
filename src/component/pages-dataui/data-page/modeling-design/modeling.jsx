import ModelingDesignContent from "./modeling-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function ModelingServices() {
  const metaPropsData = {
    title: "3D Modeling & Design Services - Cybomb Technologies | Creative & Precise Designs",
    description:
      "Cybomb Technologies offers professional 3D modeling and design services, delivering accurate, detailed, and visually stunning models for various industries.",
    keyword:
      "3D Modeling, Product Design, CAD Modeling, Architectural Models, Industrial Design, Cybomb Technologies",
    url: "https://www.cybomb.com/services/modeling-design",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Discovery & Planning',
    description:
      'We start by understanding business needs and translating them into modeling and design goals.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We collaborate with stakeholders to define objectives, constraints, and success metrics.'
      },
      {
        title: 'Business Process Analysis',
        description:
          'We study existing workflows and identify gaps to inform accurate modeling.'
      },
      {
        title: 'Feasibility Study',
        description:
          'We assess technical and operational feasibility before moving into design.'
      },
      {
        title: 'Roadmap Definition',
        description:
          'We create a phased roadmap for modeling, design, and implementation.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We design high-level models and logical structures that capture system behavior and data flow.',
    cards: [
      {
        title: 'Conceptual Modeling',
        description:
          'We create entity-relationship diagrams, data flow diagrams, and high-level blueprints.'
      },
      {
        title: 'Logical Data Models',
        description:
          'We define entities, relationships, attributes, and normalization rules.'
      },
      {
        title: 'System Architecture Draft',
        description:
          'We design modular system architectures with scalability and flexibility in mind.'
      },
      {
        title: 'Integration Design',
        description:
          'We outline how different components and external systems will interact.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Prototyping',
    description:
      'We convert logical models into physical designs and working prototypes.',
    cards: [
      {
        title: 'Database Schema Design',
        description:
          'We create physical schemas, indexes, and partitioning strategies for efficiency.'
      },
      {
        title: 'UI/UX Wireframing',
        description:
          'We design intuitive interfaces with user-friendly navigation and layout structures.'
      },
      {
        title: 'System Prototyping',
        description:
          'We build proof-of-concept models to validate design assumptions.'
      },
      {
        title: 'Technology Stack Alignment',
        description:
          'We align models with chosen databases, frameworks, and platforms.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Validation',
    description:
      'We validate models and designs through testing and iterative refinement.',
    cards: [
      {
        title: 'Model Validation',
        description:
          'We test models for accuracy, completeness, and alignment with business rules.'
      },
      {
        title: 'Performance Testing',
        description:
          'We assess database queries, system response times, and scalability.'
      },
      {
        title: 'Usability Testing',
        description:
          'We test interfaces with real users to ensure ease of use and adoption.'
      },
      {
        title: 'Optimization & Refinement',
        description:
          'We fine-tune models for performance, maintainability, and scalability.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Implementation',
    description:
      'We deploy finalized models and designs into production-ready systems.',
    cards: [
      {
        title: 'Data Model Deployment',
        description:
          'We implement databases, tables, and relationships in production environments.'
      },
      {
        title: 'Application Integration',
        description:
          'We integrate design components into enterprise applications and workflows.'
      },
      {
        title: 'Documentation',
        description:
          'We deliver detailed design documentation for future scalability and support.'
      },
      {
        title: 'Stakeholder Training',
        description:
          'We provide training sessions to ensure smooth adoption of new systems.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We ensure long-term success with ongoing monitoring, updates, and optimization.',
    cards: [
      {
        title: 'Model Monitoring',
        description:
          'We monitor system behavior to ensure models perform as intended.'
      },
      {
        title: 'Change Management',
        description:
          'We adapt models and designs to evolving business and technology needs.'
      },
      {
        title: 'Scalability Enhancements',
        description:
          'We upgrade system designs to support larger datasets and user bases.'
      },
      {
        title: '24/7 Support',
        description:
          'We provide continuous support for troubleshooting and performance tuning.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ModelingDesignContent />
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

export default ModelingServices;
