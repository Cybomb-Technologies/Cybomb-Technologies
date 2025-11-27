import AnalyticsVisualizationContent from "./analytics-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function AnalyticsandVisualization() {
  const metaPropsData = {
    title: "Analytics & Visualization - Cybomb Technologies | Data Insights & BI Solutions",
    description:
      "Cybomb Technologies offers expert analytics and visualization services, transforming complex data into actionable insights through interactive dashboards and advanced BI tools.",
    keyword:
      "Analytics Services, Data Visualization, Business Intelligence, BI Solutions, Data Insights, Interactive Dashboards, Cybomb Technologies",
    url: "https://www.cybomb.com/services/analyticsandvisualization",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We help you define a clear analytics strategy that aligns with your business goals, ensuring data-driven decision-making.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We understand your business needs and identify key data sources for analytics.'
      },
      {
        title: 'KPI Definition',
        description:
          'We help define measurable KPIs and success metrics to track business performance.'
      },
      {
        title: 'Data Strategy',
        description:
          'We plan data collection, storage, and analysis workflows to deliver meaningful insights.'
      },
      {
        title: 'Roadmap Creation',
        description:
          'We create a step-by-step roadmap for analytics adoption and visualization implementation.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Integration',
    description:
      'We design a strong data architecture and integrate multiple data sources to build a single source of truth.',
    cards: [
      {
        title: 'Data Warehousing',
        description:
          'We set up scalable data warehouses and lakes for structured and unstructured data.'
      },
      {
        title: 'ETL & Data Pipelines',
        description:
          'We design and implement ETL workflows to ensure clean, reliable, and timely data.'
      },
      {
        title: 'API Integration',
        description:
          'We integrate CRM, ERP, marketing, and third-party tools for unified analytics.'
      },
      {
        title: 'Real-Time Data Flow',
        description:
          'We enable real-time streaming data pipelines for instant insights and decision-making.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Analytics',
    description:
      'We provide advanced analytics solutions that help you uncover insights and trends from your data.',
    cards: [
      {
        title: 'Descriptive Analytics',
        description:
          'We summarize historical data to provide insights into past business performance.'
      },
      {
        title: 'Predictive Analytics',
        description:
          'We apply machine learning and statistical models to forecast future outcomes.'
      },
      {
        title: 'Prescriptive Analytics',
        description:
          'We recommend actions using optimization models and simulations for better decision-making.'
      },
      {
        title: 'Self-Service Analytics',
        description:
          'We empower business users with tools to generate insights without technical support.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Visualization',
    description:
      'We create interactive dashboards and visualization solutions to simplify data interpretation.',
    cards: [
      {
        title: 'Custom Dashboards',
        description:
          'We build tailored dashboards using tools like Power BI, Tableau, and Looker.'
      },
      {
        title: 'Interactive Reports',
        description:
          'We deliver reports with drill-down and filtering options for detailed exploration.'
      },
      {
        title: 'Data Storytelling',
        description:
          'We transform complex data into easy-to-understand stories and visuals for decision-makers.'
      },
      {
        title: 'Mobile & Web Dashboards',
        description:
          'We design dashboards that work seamlessly across devices for on-the-go insights.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy analytics platforms and automate workflows for continuous and scalable insights.',
    cards: [
      {
        title: 'Cloud Deployment',
        description:
          'We implement analytics solutions on cloud platforms like AWS, Azure, and GCP.'
      },
      {
        title: 'Data Refresh Automation',
        description:
          'We automate data extraction, transformation, and dashboard updates.'
      },
      {
        title: 'CI/CD for Analytics',
        description:
          'We enable continuous integration and deployment for analytics pipelines.'
      },
      {
        title: 'Scalability Setup',
        description:
          'We ensure analytics infrastructure scales with growing data and user demands.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing monitoring, optimization, and support for your analytics systems.',
    cards: [
      {
        title: 'Performance Monitoring',
        description:
          'We monitor dashboards and queries to ensure quick load times and efficiency.'
      },
      {
        title: 'Data Quality Checks',
        description:
          'We run automated checks to maintain accuracy and reliability of insights.'
      },
      {
        title: 'Continuous Optimization',
        description:
          'We fine-tune data pipelines, queries, and visualizations for peak performance.'
      },
      {
        title: 'User Support & Training',
        description:
          'We provide support and training sessions to help users maximize analytics adoption.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AnalyticsVisualizationContent />
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

export default AnalyticsandVisualization;
