import AemTechnologiesSection from "./aem-TechnologiesSection";
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
    description:
      "Prepay development hours for up to 6 months — ideal for AEM component updates, content changes, bug fixes, and ongoing maintenance on Adobe Experience Manager.",
  },
  {
    title: "Dedicated AEM Developers",
    description:
      "Hire full-time AEM-certified developers dedicated to your project — ensuring expert delivery, faster turnaround, and high-performing AEM solutions customized for your enterprise needs.",
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
const aemDescription = [
  {
    name: "AEM Sites",
    description:
      "Delivers and manages websites, providing powerful tools for authoring, personalization, and multi-site management.",
    icon: "https://media.licdn.com/dms/image/v2/D5612AQHouW5aBPgYCw/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1691378937695?e=2147483647&v=beta&t=TcrCDdB3CEDEcU0XPtGNEVtj2jlfT_EURhEaAJS1nII",
    iconColors: "linear-gradient(135deg, rgba(255, 115, 0, 0.4))",
  },

  {
    name: "AEM Assets",
    description:
      "Digital Asset Management (DAM) platform to organize, manage, and deliver images, videos, and documents across channels.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iFLqr1mrWIMfCZ4etibmj9Mb4MWEgeWGQd_zXZjW-Wn4fDincZzhBF9Z16Izd6hAPCM&usqp=CAU",
    iconColors: "linear-gradient(135deg, rgba(65, 60, 60, 0.4))",
  },
  {
    name: "AEM Forms",
    description:
      "Provides tools for creating, managing, and automating forms, documents, and digital onboarding workflows.",
    icon: "data:image/jpeg;base64,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",
    iconColors: "linear-gradient(135deg, rgba(126, 181, 253, 0.4))",
  },
  {
    name: "AEM as a Cloud Service",
    description:
      "Fully managed cloud-native AEM deployment that ensures scalability, security, and automatic updates.",
    icon: "https://aemopencloud.io/wp-content/uploads/2019/09/cropped-aoc-logo-with-title-transparent-2.png?w=843",
    iconColors: "linear-gradient(135deg, rgba(154, 195, 248, 0.4))",
  },
  {
    name: "Dispatcher",
    description:
      "A caching and load-balancing tool that improves AEM site performance and protects against security vulnerabilities.",
    icon: "data:image/png;base64,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",
    iconColors:
      "linear-gradient(135deg, rgba(78,52,46,0.4), rgba(109,76,65,0.4), rgba(141,110,99,0.4))",
  },
  {
    name: "Adobe Analytics",
    description:
      "Provides insights into user behavior and engagement, enabling data-driven optimization of digital experiences.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvYV2lUT9I-3FzVPZZKVeDXMnw24hZoTMbA&s",
    iconColors: "linear-gradient(135deg,  rgba(165, 164, 164, 0.4))",
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
          { number: "65%", label: "Strong digital asset management" },
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
      <AboutTech technologies={aemDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default AemContent;
