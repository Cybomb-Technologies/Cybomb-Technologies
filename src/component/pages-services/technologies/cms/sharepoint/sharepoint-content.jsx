import SharePointTechnologiesSection from "./sharepoint-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";

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
    icon: "https://brandlogo.org/wp-content/uploads/2025/05/Microsoft-SharePoint-Icon-2019.png.webp",
    iconColors: "linear-gradient(135deg, #e0f7f4, #b2f0df)", // fresh teal
  },
  {
    name: "SharePoint Framework (SPFx)",
    description:
      "Modern development model for building custom SharePoint solutions using web technologies.",
    icon: "https://brandlogo.org/wp-content/uploads/2025/05/Microsoft-SharePoint-Icon-2019.png.webp",
    iconColors: "linear-gradient(135deg, #d6f0ff, #a3d9f9)", // soft sky blue
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed JavaScript superset used to build reliable, scalable SharePoint solutions.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    iconColors: "linear-gradient(135deg, #e6f1ff, #bddbff)", // pastel TS blue
  },
  {
    name: "React",
    description:
      "Popular JavaScript library for building fast, reusable UI components in SharePoint Framework.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconColors: "linear-gradient(135deg, #e0faff, #b8ecf6)", // fresh aqua
  },
  {
    name: "Microsoft Graph API",
    description:
      "Unified API to access Microsoft 365 services such as Teams, Outlook, OneDrive, and SharePoint data.",
    icon: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/Graph%20API%20logo.png?itok=B8Gk4HZb",
    iconColors: "linear-gradient(135deg, #f0f7ff, #c6d9f7)", // light MS blue
  },
  {
    name: "Azure DevOps",
    description:
      "Cloud service for CI/CD pipelines, version control, and project management for SharePoint projects.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg, #e1f3ff, #b9ddf7)", // Azure pastel blue
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

      
      <WhyChooseUs ChooseUs={whychooseus} />
<ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our SharePoint Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <SharePointTechnologiesSection />
      <AboutTech technologies={sharepointDescription} />
      

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default SharePointContent;
