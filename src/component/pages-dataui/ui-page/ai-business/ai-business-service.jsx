import AIBusinessIntelligenceContent from "./ai-business-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function AiBusinessServices() {
  const metaPropsData = {
    title: "Best AI Business Intelligence Company in Chennai | Cybomb Tech",
    description:
      "Cybomb Technologies offers expert AI business intelligence solutions for data-driven decision making. Professional analytics and predictive insights services.",
    keyword:
      "ai business intelligence, predictive analytics, data insights, bi solutions, business analytics",
    url: "https://www.cybomb.com/services/ai-business-intelligence",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We help you plan and strategize AI-powered business intelligence solutions tailored to your goals.",
      cards: [
        {
          title: "Requirement Analysis",
          description:
            "We assess your business processes, KPIs, and objectives to define the right BI strategy.",
        },
        {
          title: "Technology Consultation",
          description:
            "We recommend the best AI/ML models, BI tools, and data platforms suited to your business needs.",
        },
        {
          title: "Data Architecture Design",
          description:
            "We design scalable data pipelines and architectures to ensure seamless integration and growth.",
        },
        {
          title: "Resource Planning",
          description:
            "We allocate data engineers, AI specialists, and BI experts to deliver efficient and timely solutions.",
        },
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      description:
        "We design intuitive dashboards and visualizations that transform complex data into actionable insights.",
      cards: [
        {
          title: "Wireframes & Prototypes",
          description:
            "We create dashboard prototypes to map data flow and user interactions effectively.",
        },
        {
          title: "Responsive Dashboards",
          description:
            "Our BI dashboards adapt across devices for real-time insights anytime, anywhere.",
        },
        {
          title: "Data Visualization",
          description:
            "We use advanced visualization techniques to highlight trends, anomalies, and KPIs.",
        },
        {
          title: "User Experience Enhancements",
          description:
            "We optimize BI tools for ease of use, accessibility, and interactive exploration of data.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We build robust AI-driven BI systems that analyze, predict, and optimize business performance.",
      cards: [
        {
          title: "Data Integration",
          description:
            "We connect multiple data sources into a unified BI system for holistic insights.",
        },
        {
          title: "AI-Powered Analytics",
          description:
            "We implement machine learning models to predict trends and support data-driven decisions.",
        },
        {
          title: "Custom BI Solutions",
          description:
            "We develop tailored BI applications that fit your workflows and reporting needs.",
        },
        {
          title: "Automation & Optimization",
          description:
            "We automate reporting and data processing to enhance efficiency and accuracy.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We ensure accuracy, reliability, and performance of AI and BI systems before deployment.",
      cards: [
        {
          title: "Data Validation",
          description:
            "We verify data integrity, consistency, and correctness across all systems.",
        },
        {
          title: "Model Accuracy Testing",
          description:
            "We evaluate AI/ML models for precision, recall, and predictive reliability.",
        },
        {
          title: "Performance Testing",
          description:
            "We test system scalability and response time under different loads.",
        },
        {
          title: "User Acceptance Testing",
          description:
            "We ensure BI dashboards meet business user expectations and usability standards.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We deploy AI-powered BI solutions with secure, seamless, and optimized launch strategies.",
      cards: [
        {
          title: "Cloud & On-Prem Deployment",
          description:
            "We set up BI systems on cloud platforms or on-premises based on your infrastructure.",
        },
        {
          title: "Security Configuration",
          description:
            "We implement data encryption, access control, and compliance measures.",
        },
        {
          title: "Monitoring & Optimization",
          description:
            "We track system performance post-deployment and optimize for reliability.",
        },
        {
          title: "Backup & Recovery Plan",
          description:
            "We implement data backup and disaster recovery strategies to safeguard BI systems.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description:
        "We provide ongoing monitoring, updates, and improvements to keep your AI-driven BI systems performing at their best.",
      cards: [
        {
          title: "Model Updates",
          description:
            "We retrain and update AI models to adapt to changing business data and trends.",
        },
        {
          title: "Bug Fixes & Enhancements",
          description:
            "We resolve issues and add new BI features based on evolving needs.",
        },
        {
          title: "Security Monitoring",
          description:
            "We continuously monitor threats and update security protocols for data protection.",
        },
        {
          title: "Scalability & Future Growth",
          description:
            "We optimize your BI systems for expansion with advanced features and integrations.",
        },
      ],
    },
  ];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AIBusinessIntelligenceContent />
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

export default AiBusinessServices;
