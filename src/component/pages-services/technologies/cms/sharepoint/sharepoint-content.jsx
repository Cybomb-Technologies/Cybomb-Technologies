import SharePointTechnologiesSection from "./sharepoint-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";
import scheduleConsultImg from "./../../../../../assets/contact/schedule-a-consultation-img3.jpg";
import hireUsImg from "./../../../../../assets/contact/hiring-model-img3.svg";
import AboutTech from "../../../../common-ui/mobile-app/about-tech";

const services = [
  {
    title: "SharePoint Intranet Development",
    description:
      "Build modern, responsive digital workplaces that unify internal communications and resources.",
  },
  {
    title: "Custom SharePoint Solutions",
    description:
      "Create tailored document libraries, dashboards, and apps that align with your business processes.",
  },
  {
    title: "SharePoint Migration",
    description:
      "Seamless migration from legacy systems (File Servers, Lotus Notes, or earlier SharePoint versions) to SharePoint Online or SharePoint 2019.",
  },
  {
    title: "Integration with Microsoft 365",
    description:
      "Connect SharePoint with Teams, Power BI, Outlook, and Microsoft Defender for an end-to-end productivity suite.",
  },
  {
    title: "SharePoint Framework (SPFx) Development",
    description:
      "Custom SPFx web parts and extensions for modern SharePoint experiences.",
  },
  {
    title: "Governance, Compliance & Security",
    description:
      "Set up policies, permissions, auditing, and governance to ensure your environment meets organizational and regulatory requirements.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for SharePoint enhancements, workflows, content updates, and ongoing intranet maintenance.",
  },
  {
    title: "Dedicated SharePoint Developers",
    description:
      "Hire full-time SharePoint specialists to work exclusively on your project — ensuring focused delivery, seamless collaboration, and deep expertise across SharePoint Online and On-Prem.",
  },
];

const whychooseus = [
  {
    title: "Microsoft SharePoint Experts",
    description:
      "Certified consultants with deep experience in SharePoint Online and On-Premise",
  },
  {
    title: "Custom-Built Workflows",
    description:
      "Tailored process automation using Power Automate & Power Apps",
  },
  {
    title: "Security & Compliance Focused",
    description:
      "Implementation aligned with ISO, HIPAA, and GDPR requirements",
  },
  {
    title: "3rd-Party Integration",
    description: "CRM, ERP, DMS, HRMS, and external API integration",
  },
  {
    title: "Agile Delivery & Support",
    description:
      "Transparent, milestone-driven delivery with post-deployment support",
  },
];

const sharepointDescription = [
  {
    name: "SharePoint Online",
    description:
      "Cloud-based platform for collaboration, intranet, and document management in Microsoft 365.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSTTt9FzqDgpkv-O0b0qgTmrxeYVucAH6PA&s",
    iconColors:
      "linear-gradient(135deg, rgba(3,115,98,0.4), rgba(5,77,68,0.4))",
  },
  {
    name: "SharePoint Framework (SPFx)",
    description:
      "Modern development model for building custom SharePoint solutions using web technologies.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(0,120,212,0.6), rgba(43,136,216,0.6))",
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed JavaScript superset used to build reliable, scalable SharePoint solutions.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(49,120,198,0.4), rgba(35,90,151,0.4))",
  },
  {
    name: "React",
    description:
      "Popular JavaScript library for building fast, reusable UI components in SharePoint Framework.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconColors: "linear-gradient(135deg, #21a1f1 40%)",
  },
  {
    name: "Microsoft Graph API",
    description:
      "Unified API to access Microsoft 365 services such as Teams, Outlook, OneDrive, and SharePoint data.",
    icon: "data:image/png;base64,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",
    iconColors: "linear-gradient(135deg, #28a8ea 40%)",
  },
  {
    name: "Azure DevOps",
    description:
      "Cloud service for CI/CD pipelines, version control, and project management for SharePoint projects.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg, #007fff 40%)",
  },
];

function SharePointContent() {
  return (
    <section>
      <Banner
        heading="Microsoft SharePoint Development & Consulting"
        subtext="Enterprise-grade collaboration, document management, and intranet solutions"
        buttonText="Book Free Consultation"
        note="Microsoft SharePoint is a leading platform for building intranets, team collaboration portals, and enterprise document management systems. Whether on-premises or on Microsoft 365 (SharePoint Online), it empowers organizations to centralize knowledge, automate workflows, and enhance productivity across departments."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Microsoft-backed enterprise CMS" },
          { number: "70%", label: "Collaboration & intranet leader" },
          { number: "65%", label: "Integration with Office 365" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our SharePoint Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our SharePoint Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <SharePointTechnologiesSection />
      <AboutTech technologies={sharepointDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default SharePointContent;
