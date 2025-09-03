import DrupalTechnologiesSection from "./drupal-TechnologiesSection";
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
    title: "Custom Drupal Development",
    description:
      "Tailored modules, themes, and integrations that match your brand, content goals, and technical stack.",
  },
  {
    title: "Drupal CMS Setup & Configuration",
    description:
      "Enterprise-grade setup with performance, security, and editorial usability in mind.",
  },
  {
    title: "Content Modeling & Taxonomy Design",
    description:
      "Structured content strategies using nodes, content types, and taxonomies to reflect your business logic.",
  },
  {
    title: "Migration to Drupal",
    description:
      "Migrate from legacy CMS platforms or outdated Drupal versions (e.g., Drupal 7) to Drupal 10 with clean data structures.",
  },
  {
    title: "Headless Drupal Implementation",
    description:
      "Use Drupal as a content hub with frontends powered by React, Vue, or static site generators via JSON:API or GraphQL.",
  },
  {
    title: "Multisite & Multilingual Solutions",
    description:
      "Create and manage multiple regional, language, or franchise sites from a single Drupal codebase.",
  },
  {
    title: "UI/UX Design & Theme Development",
    description:
      "Crafting custom, responsive Drupal themes and user-centric interfaces to create engaging and accessible digital experiences that align with your brand identity.",
  },
  {
    title: "Security & Performance Optimization",
    description:
      "Hardening, caching, load balancing, and compliance auditing for enterprise-grade deployments.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for minor updates, security patches, performance optimization, and ongoing Drupal site enhancements.",
  },
  {
    title: "Dedicated Drupal Developers",
    description:
      "Hire full-time Drupal experts to work exclusively on your project — ensuring personalized attention, faster delivery, and deep technical expertise in Drupal architecture and modules.",
  },
];

const whychooseus = [
  {
    title: "Drupal Experts at Core",
    description: "Deep understanding of the architecture, APIs, and theming",
  },
  {
    title: "Enterprise-Ready Builds",
    description: "Designed to scale securely and flexibly",
  },
  {
    title: "Multilingual, Multisite Masters",
    description: "Proven experience in global rollouts",
  },
  {
    title: "Security & Compliance First",
    description: "Best practices for government, finance, and healthcare",
  },
  {
    title: "Seamless Migration & Upgrades",
    description: "From Drupal 7 or other platforms to Drupal 10",
  },
];

const drupalDescription = [
  {
    name: "Drupal 10",
    description:
      "Latest version of the Drupal CMS offering improved performance, modern APIs, and enhanced content authoring tools.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    iconColors:
      "linear-gradient(135deg, #c3e6faff, #d7efffff)", // soft Drupal blue
  },
  {
    name: "PHP",
    description:
      "Core server-side scripting language powering Drupal’s backend, modules, and business logic.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    iconColors:
      "linear-gradient(135deg, #d6d9f5ff, #e6e8faff)", // light lavender tones
  },
  {
    name: "MySQL",
    description:
      "Relational database system used by Drupal to store content, configurations, and site data.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors: "linear-gradient(135deg, #beedf6ff, #c7e7fbff)", // keep same MySQL palette
  },
  {
    name: "Twig",
    description:
      "Modern templating engine in Drupal 10 for secure, clean, and flexible front-end theming.",
    icon: "https://user-images.githubusercontent.com/973783/46407973-3c5dbf80-c72e-11e8-947c-d1fdaaa28f73.png",
    iconColors:
      "linear-gradient(135deg, #d7f5d6ff, #e8fbe7ff)", // fresh light green
  },
  {
    name: "Composer",
    description:
      "Dependency manager for PHP, essential for installing and managing Drupal core, modules, and libraries.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
    iconColors:
      "linear-gradient(135deg, #f2e1c8ff, #f8efe2ff)", // warm beige gradient
  },
  {
    name: "Docker",
    description:
      "Containerization platform enabling isolated and reproducible environments for Drupal development and deployment.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    iconColors:
      "linear-gradient(135deg, #c2e8faff, #d6f1fdff)", // light aqua blue
  },
];

function DrupalContent() {
  return (
    <section>
      <Banner
        heading="Drupal CMS Solutions"
        subtext="Enterprise-grade content management for complex digital experiences"
        buttonText="Book Free Consultation"
        note="Drupal is a powerful open-source CMS designed for performance, scalability, and flexibility. It's trusted by government bodies, large enterprises, universities, and publishers who need secure, content-rich platforms with complex workflows and multilingual capabilities."
      />
      <InfoStats
        stats={[
          { number: "75%", label: "Preferred for government & enterprise" },
          { number: "65%", label: "Strong security modules" },
          { number: "60%", label: "Highly customizable architecture" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Drupal Service Offerings"
        Services={services}
      />

      

      <WhyChooseUs ChooseUs={whychooseus} />
        <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Drupal Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />
      <DrupalTechnologiesSection />
      <AboutTech technologies={drupalDescription} />
      

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default DrupalContent;
