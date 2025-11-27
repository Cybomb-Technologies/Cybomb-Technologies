import OrmContent from './online-orm-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

function OrmServices() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We begin by understanding your data models and system architecture to design a tailored ORM strategy.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We assess your database structure, application needs, and frameworks to choose the best ORM solution.'
      },
      {
        title: 'Entity-Relationship Mapping',
        description:
          'We plan how objects in your code will map to database tables for efficiency and scalability.'
      },
      {
        title: 'Technology Selection',
        description:
          'We recommend the most suitable ORM tools like Hibernate, Sequelize, or Entity Framework based on your project.'
      },
      {
        title: 'Performance Strategy',
        description:
          'We design strategies to ensure ORM implementation delivers fast queries and optimized performance.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'Our ORM-focused design ensures your applications have seamless data flow and user-driven experiences.',
    cards: [
      {
        title: 'Model-Driven Architecture',
        description:
          'We design models that integrate smoothly between front-end interfaces and backend databases.'
      },
      {
        title: 'Schema Mapping',
        description:
          'We create clear mapping designs between application objects and relational schemas.'
      },
      {
        title: 'Consistency & Validation',
        description:
          'We design ORM rules to ensure consistent data validation across all user interfaces.'
      },
      {
        title: 'Optimized Data Access',
        description:
          'We design data retrieval flows that enhance user experience by reducing latency.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We implement ORM frameworks to simplify database operations and ensure efficient data handling.',
    cards: [
      {
        title: 'ORM Framework Setup',
        description:
          'We configure ORM frameworks like Hibernate, Django ORM, or Sequelize for your application.'
      },
      {
        title: 'CRUD Operations',
        description:
          'We build streamlined create, read, update, and delete functionalities using ORM mappings.'
      },
      {
        title: 'Query Optimization',
        description:
          'We implement advanced ORM queries with lazy/eager loading to optimize database performance.'
      },
      {
        title: 'Cross-Platform Integration',
        description:
          'We ensure ORM solutions integrate smoothly with existing systems and APIs.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We validate ORM implementations to ensure data integrity, performance, and reliability.',
    cards: [
      {
        title: 'Unit Testing ORM Models',
        description:
          'We test entity models and relationships to ensure correct database interactions.'
      },
      {
        title: 'Data Consistency Testing',
        description:
          'We ensure ORM maintains accurate mappings and prevents data corruption.'
      },
      {
        title: 'Performance Benchmarking',
        description:
          'We test ORM query performance to identify and eliminate slow queries.'
      },
      {
        title: 'Security Testing',
        description:
          'We validate ORM queries to prevent SQL injection and other database vulnerabilities.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy ORM-based systems with configurations optimized for performance and scalability.',
    cards: [
      {
        title: 'Migration Planning',
        description:
          'We plan safe database migrations with ORM tools to avoid downtime and data loss.'
      },
      {
        title: 'Database Synchronization',
        description:
          'We configure ORM sync tools to keep databases aligned with application updates.'
      },
      {
        title: 'CI/CD Integration',
        description:
          'We integrate ORM migrations and updates into CI/CD pipelines for smooth deployment.'
      },
      {
        title: 'Rollback Strategies',
        description:
          'We implement rollback options to quickly recover from unexpected issues during ORM deployments.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous ORM support, updates, and performance optimization for your applications.',
    cards: [
      {
        title: 'ORM Version Upgrades',
        description:
          'We keep your ORM frameworks updated to the latest stable versions for better performance.'
      },
      {
        title: 'Bug Fixes & Optimization',
        description:
          'We resolve ORM-related issues and fine-tune queries for long-term efficiency.'
      },
      {
        title: 'Database Scaling',
        description:
          'We adjust ORM configurations to handle increased workloads and growing data volumes.'
      },
      {
        title: 'Monitoring & Support',
        description:
          'We provide ongoing support and monitoring to ensure ORM services run smoothly.'
      }
    ]
  }
];

  return (
    <>
      <OrmContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
    </>
  );
}

export default OrmServices;
