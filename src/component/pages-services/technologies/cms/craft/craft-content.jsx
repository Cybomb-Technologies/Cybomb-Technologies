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
    icon: "https://ownidentity.nl/uploads/_header/craft-commerce.png",
    iconColors: "rgba(255, 111, 97, 0.4)",
  },
  {
    name: "Twig",
    description:
      "Secure and expressive templating engine used by Craft CMS for building clean, maintainable front-end themes.",
    icon: "data:image/png;base64,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",
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
    iconColors:
      "linear-gradient(135deg, rgba(0,117,143,0.4), rgba(242,145,17,0.4))",
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
