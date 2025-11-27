import CrmServicesContent from "./crm-services-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";
import CRMTools from "../../../common-ui/enterprise-services/CRMTools";

function CRMServices() {
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We analyze your business requirements and plan a tailored CRM strategy to enhance customer engagement and streamline operations.",
      cards: [
        {
          title: "Business Requirement Analysis",
          description:
            "We evaluate your workflows, sales cycle, and customer journey to define the right CRM approach.",
        },
        {
          title: "CRM Selection Consultation",
          description:
            "We help you choose the best-fit CRM platform such as Salesforce, HubSpot, Zoho, or Microsoft Dynamics.",
        },
        {
          title: "Process Mapping",
          description:
            "We map customer interactions and align them with CRM functionalities for better efficiency.",
        },
        {
          title: "ROI Forecasting",
          description:
            "We create a roadmap highlighting costs, implementation steps, and ROI projections.",
        },
      ],
    },
    {
      id: "design",
      title: "CRM Architecture & Design",
      description:
        "We design intuitive CRM systems that enhance user adoption, automation, and customer relationship management.",
      cards: [
        {
          title: "Data Architecture Design",
          description:
            "We design a secure and scalable CRM database to manage customer information effectively.",
        },
        {
          title: "Custom CRM Workflows",
          description:
            "We create automation workflows to streamline sales, support, and marketing processes.",
        },
        {
          title: "User Experience Design",
          description:
            "We build user-friendly dashboards, reports, and CRM interfaces for better usability.",
        },
        {
          title: "Integration Framework",
          description:
            "We design systems for seamless integration with ERP, marketing tools, and third-party apps.",
        },
      ],
    },
    {
      id: "development",
      title: "CRM Development & Customization",
      description:
        "We develop and customize CRM systems to match your business needs and improve productivity.",
      cards: [
        {
          title: "Custom CRM Development",
          description:
            "We build tailored CRM platforms with features unique to your business operations.",
        },
        {
          title: "Third-Party Integration",
          description:
            "We integrate CRMs with email, payment, ERP, and marketing platforms for smooth workflows.",
        },
        {
          title: "Automation Implementation",
          description:
            "We add AI-driven automation for lead management, sales pipeline, and customer service.",
        },
        {
          title: "Mobile CRM Solutions",
          description:
            "We develop mobile-ready CRM apps to enable sales teams to manage customers on the go.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We ensure your CRM is reliable, secure, and optimized for peak performance.",
      cards: [
        {
          title: "Functionality Testing",
          description:
            "We test core CRM modules like sales, marketing, and service for proper functionality.",
        },
        {
          title: "Data Security Testing",
          description:
            "We validate encryption, access controls, and compliance with standards like GDPR.",
        },
        {
          title: "Integration Testing",
          description:
            "We ensure seamless communication between CRM and other connected systems.",
        },
        {
          title: "User Acceptance Testing",
          description:
            "We conduct UAT with your team to validate workflows and usability.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment & Implementation",
      description:
        "We implement CRM solutions seamlessly with minimal disruption to your operations.",
      cards: [
        {
          title: "CRM Setup & Configuration",
          description:
            "We configure CRM modules, workflows, and dashboards for your business.",
        },
        {
          title: "Data Migration",
          description:
            "We migrate your customer data from legacy systems to the new CRM with zero data loss.",
        },
        {
          title: "System Integration",
          description:
            "We connect your CRM with ERP, HRMS, and communication platforms.",
        },
        {
          title: "User Training",
          description:
            "We provide training sessions to ensure your team adapts quickly to the CRM.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Support & Maintenance",
      description:
        "We provide ongoing support to keep your CRM up-to-date, secure, and optimized.",
      cards: [
        {
          title: "CRM Monitoring",
          description:
            "We monitor CRM performance, user activity, and integrations continuously.",
        },
        {
          title: "Regular Updates",
          description:
            "We apply system patches and updates for improved features and security.",
        },
        {
          title: "Feature Enhancements",
          description:
            "We add new functionalities to evolve your CRM as business needs grow.",
        },
        {
          title: "24/7 Support",
          description:
            "We provide round-the-clock support to resolve CRM-related issues quickly.",
        },
      ],
    },
  ];
  const crmTools = [
    {
      name: "SAP",
      description: "Enterprise-level CRM and business management solution.",
      // url: "https://www.sap.com"
    },
    {
      name: "QuickBooks",
      description:
        "Accounting and CRM solution for small to medium businesses.",
      // url: "https://quickbooks.intuit.com/"
    },
  ];

  return (
    <>
      <CrmServicesContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <CRMTools tools={crmTools} />
      <StillNotSure />
    </>
  );
}

export default CRMServices;
