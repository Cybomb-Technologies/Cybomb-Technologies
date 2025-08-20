import AemTechnologiesSection from "./aem-TechnologiesSection";

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
    title: "Custom AEM Component & Template Development",
    description:
      "Build reusable, brand-consistent components, templates, and content fragments tailored to your marketing and UX goals.",
  },
  {
    title: "AEM Implementation & Configuration",
    description:
      "Set up AEM instances with best practices for performance, scalability, and security—on Adobe Managed Services (AMS) or on-premises.",
  },
  {
    title: "AEM Headless & Omnichannel Delivery",
    description:
      "Integrate AEM with modern frontends (React, Angular, Vue) for seamless headless content delivery across channels.",
  },
  {
    title: "AEM DAM Setup & Optimization",
    description:
      "Configure, tag, and automate asset workflows for efficient asset management and faster go-to-market.",
  },
  {
    title: "AEM Cloud Service Migration",
    description:
      "Move from AEM on-premise or AMS to AEM as a Cloud Service with minimal disruption.",
  },
  {
    title: "Integration with Adobe Marketing Cloud",
    description:
      "Connect AEM with Adobe Analytics, Target, Campaign, and third-party systems for unified customer experiences.",
  },
  {
    title: "Performance & Security Audits",
    description:
      "Optimize caching, dispatcher rules, workflows, and system architecture to enhance speed and security.",
  },
  {
    title: "Content Architecture & Governance",
    description:
      "Implement structured content models, workflows, and governance for large-scale editorial teams.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description: "Prepay development hours for up to 6 months — ideal for AEM component updates, content changes, bug fixes, and ongoing maintenance on Adobe Experience Manager.",
  },
  {
    title: "Dedicated AEM Developers",
    description: "Hire full-time AEM-certified developers dedicated to your project — ensuring expert delivery, faster turnaround, and high-performing AEM solutions customized for your enterprise needs.",
  },
];

const whychooseus = [
  {
    title: "Full-Stack AEM Expertise",
    description: "From backend Sling models to polished frontend experiences",
  },
  {
    title: "Enterprise CMS Strategy",
    description:
      "We architect for long-term scalability and content governance",
  },
  {
    title: "Performance-Centric Builds",
    description: "Optimized for caching, responsiveness, and Core Web Vitals",
  },
  {
    title: "Security-First Approach",
    description: "Enterprise hardening and compliance baked in",
  },
  {
    title: "Global-Ready Solutions",
    description: "Multisite and multilingual expertise for worldwide audiences",
  },
  {
    title: "Dedicated Support & Training",
    description:
      "Ongoing maintenance, troubleshooting, and tailored training for your team.",
  },
];

function AemContent() {
  return (
    <section>
      <Banner
        heading="AEM Development Solutions"
        subtext="Enterprise-grade digital experience management"
        buttonText="Book Free Consultation"
        note="Adobe Experience Manager (AEM) empowers organizations to deliver personalized, content-rich, and scalable experiences across web, mobile, and beyond. It’s a powerful enterprise CMS that combines robust content management with digital asset management, enabling brands to connect with audiences consistently and efficiently."
      />
      <InfoStats
        stats={[
          { number: "85%", label: "Adobe-backed enterprise CMS" },
          { number: "70%", label: "Seamless marketing integration" },
          { number: "65%", label: "Strong digital asset management" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our AEM Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our AEM Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <AemTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={hireUsImg} />
    </section>
  );
}

export default AemContent;
