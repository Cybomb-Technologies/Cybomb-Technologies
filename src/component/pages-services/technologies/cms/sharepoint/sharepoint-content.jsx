import SharePointTechnologiesSection from "./sharepoint-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";

import scheduleConsultImg from './../../../../../assets/contact/schedule-a-consultation-img3.jpg';
import hireUsImg from './../../../../../assets/contact/hiring-model-img3.svg';


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
            { number: "65%", label: "Integration with Office 365" }
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
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={hireUsImg} />
    </section>
  );
}

export default SharePointContent;
