import AemTechnologiesSection from "./aem-TechnologiesSection";
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
    iconColors: "linear-gradient(135deg, #ffe9d6, #fff5ed)", // pastel orange
  },
  {
    name: "AEM Assets",
    description:
      "Digital Asset Management (DAM) platform to organize, manage, and deliver images, videos, and documents across channels.",
    icon: "https://cdn-icons-png.flaticon.com/512/10841/10841383.png",
    iconColors: "linear-gradient(135deg, #f0f0f0, #fafafa)", // soft gray
  },
  {
    name: "AEM Forms",
    description:
      "Provides tools for creating, managing, and automating forms, documents, and digital onboarding workflows.",
    icon: "https://aem.design/assets/images/logo/aem-design2.png", // shortened
    iconColors: "linear-gradient(135deg, #e3f0ff, #f5faff)", // pastel blue
  },
  {
    name: "AEM Cloud Service",
    description:
      "Fully managed cloud-native AEM deployment that ensures scalability, security, and automatic updates.",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/domain-hosting/cloud-services-icon.png",
    iconColors: "linear-gradient(135deg, #e6f3ff, #f9fbff)", // pale sky blue
  },
  {
    name: "Dispatcher",
    description:
      "A caching and load-balancing tool that improves AEM site performance and protects against security vulnerabilities.",
    icon: "https://images.seeklogo.com/logo-png/31/2/apache-logo-png_seeklogo-314278.png", // shortened
    iconColors: "linear-gradient(135deg, #f7f1ff, #fbfaff)", // lavender pastel
  },
  {
    name: "Adobe Analytics",
    description:
      "Provides insights into user behavior and engagement, enabling data-driven optimization of digital experiences.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEeT8NUT70aWgd4u_amkoDzfzUqfOyJNNjA&s",
    iconColors: "linear-gradient(135deg, #fff2d9, #fffaf0)", // pastel yellow
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

      

      <WhyChooseUs ChooseUs={whychooseus} />
        <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our AEM Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />
      <AemTechnologiesSection />
      <AboutTech technologies={aemDescription} />
     

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default AemContent;
