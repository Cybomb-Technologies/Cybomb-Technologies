import CraftTechnologiesSection from "./craft-TechnologiesSection";
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
    title: "Custom Website Development",
    description:
      "Tailored websites using Craft CMS, built from the ground up to reflect your brand, goals, and user journeys.",
  },
  {
    title: "Content Modeling & Information Architecture",
    description:
      "Flexible and scalable content structures using Sections, Fields, and Entry Types optimized for your editorial needs.",
  },
  {
    title: "Plugin Development & Integration",
    description:
      "Custom plugin creation and third-party tool integrations (CRMs, forms, analytics, commerce, and more).",
  },
  {
    title: "Headless Craft CMS",
    description:
      "Use Craft as a content API with Vue, React, or static site generators via GraphQL or REST.",
  },
  {
    title: "Craft Commerce Solutions",
    description:
      "Develop high-performance, custom eCommerce stores using Craft Commerce for tailored online shopping experiences.",
  },
  {
    title: "Multisite & Localization",
    description:
      "Launch multi-language or regional websites with Craft’s built-in multisite and localization tools.",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "Caching strategies, CDN setup, secure hosting, and uptime monitoring tailored to Craft CMS best practices.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Dedicated support plans including security updates, feature enhancements, and proactive monitoring to keep your Craft CMS site running smoothly.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for content updates, design tweaks, performance optimization, and ongoing Craft CMS maintenance.",
  },
  {
    title: "Dedicated Craft CMS Developers",
    description:
      "Hire full-time Craft CMS experts who work exclusively on your project — ensuring focused attention, high code quality, and faster delivery of custom Craft solutions.",
  },
];

const whychooseus = [
  {
    title: "Designer-Developer Synergy",
    description:
      "We bridge the gap between design and code using Craft’s flexibility.",
  },
  {
    title: "Custom-Tailored Builds",
    description:
      "Your content, workflows, and UX — not bound by themes or templates.",
  },
  {
    title: "API-Ready from Day One",
    description: "Headless, decoupled, and future-proof by default.",
  },
  {
    title: "Performance & Security Focused",
    description: "Optimized builds with robust caching and attack protection.",
  },
  {
    title: "Craft Commerce Experts",
    description: "Scalable eCommerce for custom product experiences.",
  },
];

const craftDescription = [
  {
    name: "Craft CMS",
    description:
      "Flexible, developer-friendly CMS built on PHP (Yii2) with powerful content modeling and admin UX.",
    icon: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/8209afd844b3ed3aced2",
    iconColors:
      "linear-gradient(135deg, rgba(229,66,43,0.4), rgba(247,108,94,0.4), rgba(255,138,101,0.4))",
  },
  {
    name: "Craft Commerce",
    description:
      "E-commerce plugin for Craft CMS enabling customizable stores, checkout flows, and product management.",
    icon: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/8209afd844b3ed3aced2",
    iconColors: "rgba(255, 111, 97, 0.4)",
  },
  {
    name: "Twig",
    description:
      "Secure and expressive templating engine used by Craft CMS for building clean, maintainable front-end themes.",
    icon: "https://user-images.githubusercontent.com/973783/46407973-3c5dbf80-c72e-11e8-947c-d1fdaaa28f73.png",
    iconColors:
      "linear-gradient(135deg, rgba(104,163,93,0.4), rgba(156,204,101,0.4))",
  },
  {
    name: "PHP (Yii2 Framework)",
    description:
      "Server-side foundation for Craft CMS, using PHP in combination with the Yii2 framework.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(119,123,179,0.4), rgba(79,91,147,0.4))",
  },
  {
    name: "GraphQL",
    description:
      "Headless APIs in Craft CMS for delivering structured content to modern front-end frameworks and apps.",
    icon: "https://graphql.org/img/logo.svg",
    iconColors:
      "linear-gradient(135deg, rgba(229,53,171,0.4), rgba(255,119,201,0.4))",
  },
  {
    name: "MySQL",
    description:
      "Relational database used by Craft CMS for storing content, configurations, and transactional data.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors: "linear-gradient(135deg, #beedf6ff, #c7e7fbff)",
  },
];

function CraftContent() {
  return (
    <section>
      <Banner
        heading="Craft CMS Solutions"
        subtext="Flexible, designer-friendly CMS for modern digital experiences"
        buttonText="Book Free Consultation"
        note="Craft CMS is a powerful content management platform built with developers and content editors in mind. Its clean architecture, customizable backend, and flexible content modeling make it a go-to choice for creative agencies, SaaS companies, and brands looking for full control over their website experience."
      />
      <InfoStats
        stats={[
          { number: "70%", label: "Adopted for content-first projects" },
          { number: "60%", label: "Developer-friendly templating" },
          { number: "65%", label: "Supports headless builds" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Craft Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Craft Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <CraftTechnologiesSection />
      <AboutTech technologies={craftDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default CraftContent;
