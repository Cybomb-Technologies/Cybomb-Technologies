import AcquiaTechnologiesSection from "./acquia-TechnologiesSection";
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
    title: "Acquia Cloud Site Factory (ACSF)",
    description:
      "Launch and manage hundreds of Drupal sites from a centralized dashboard with automated governance and deployment controls.",
  },
  {
    title: "Drupal + Acquia Cloud Hosting",
    description:
      "Deploy Drupal applications on Acquia’s secure and scalable cloud infrastructure with built-in performance monitoring, Varnish, and CDN.",
  },
  {
    title: "Acquia Personalization",
    description:
      "Implement Acquia Lift or CDP to deliver real-time, personalized content based on user behavior, location, and segmentation.",
  },
  {
    title: "Migration to Acquia",
    description:
      "Seamlessly migrate from on-premise, WordPress, or other cloud hosting platforms to Acquia Cloud or Site Factory.",
  },
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Automate your code deployments, testing, and site updates using Acquia Pipelines or integrate with external CI tools (GitHub Actions, CircleCI, etc.).",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Performance tuning, security audits, 24/7 monitoring, and long-term Acquia platform support.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepurchase development hours for up to 6 months — ideal for Acquia site enhancements, cloud configuration tweaks, security updates, and ongoing maintenance on Acquia-hosted Drupal environments.",
  },
  {
    title: "Dedicated Acquia Developers",
    description:
      "Hire full-time Acquia-certified Drupal experts dedicated to your project — ensuring optimized builds, faster delivery, and deep expertise across Acquia Cloud, Site Factory, and Acquia CMS.",
  },
];

const whychooseus = [
  {
    title: "Certified Drupal Developers",
    description: "Deep expertise in enterprise Drupal + Acquia stack",
  },
  {
    title: "Multisite & Global Rollouts",
    description: "Centralized control, global performance",
  },
  {
    title: "Seamless Integrations",
    description: "Connect Acquia with CRMs, ERPs, analytics tools, and more",
  },
  {
    title: "Enterprise-Ready DevOps",
    description: "CI/CD, cloud-native, and scalable infrastructure",
  },
  {
    title: "Security-First",
    description: "Acquia Edge with WAF, SSL, and threat protection",
  },
];

const acquiaDescription = [
  {
    name: "Acquia Cloud Platform",
    description:
      "Enterprise-grade managed cloud hosting platform optimized for Drupal. Provides scalability, security, and DevOps tooling for digital experiences.",
    icon: "https://dev.acquia.com/sites/default/files/2022-07/drop-cloud-platform.svg",
    iconColors: "linear-gradient(135deg, #e9f8fb, #f3fbfe)",
  },
  {
    name: "Acquia DAM",
    description:
      "Centralized system to organize, manage, and deliver digital assets across teams, ensuring brand consistency and faster content workflows.",
    icon: "https://www.acquia.com/sites/default/files/styles/large/public/media/image/2023-08/Acquia%20DAM%20Logo_Integration.png?itok=y36XcB26",
    iconColors: "linear-gradient(135deg, #fce9f5, #fff3fa)",
  },
  {
    name: "Drupal 10",
    description:
      "Latest major release of the open-source Drupal CMS. Provides modern front-end theming, structured content management, and robust APIs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    iconColors: "linear-gradient(135deg, #e9f8fb, #f3fbfe)",
  },
  {
    name: "Symfony",
    description:
      "PHP framework that underpins Drupal’s backend architecture, offering reusable components and robust application structure.",
    icon: "https://symfony.com/logos/symfony_black_03.png",
    iconColors: "linear-gradient(135deg, #f2f2f2, #fafafa)",
  },
  {
    name: "MySQL",
    description:
      "Relational database system used by Drupal for storing and querying content, configuration, and user data.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors: "linear-gradient(135deg, #e9f8fb, #f3fbfe)", // baseline palette
  },
  {
    name: "GraphQL",
    description:
      "Query language and runtime for APIs, enabling efficient, flexible, and headless content delivery from Drupal applications.",
    icon: "https://graphql.org/img/logo.svg",
    iconColors: "linear-gradient(135deg, #fce9f5, #fff3fa)",
  },
];

function AcquiaContent() {
  return (
    <section>
      <Banner
        heading="Acquia Development & Support"
        subtext="Enterprise-grade Drupal hosting, personalization, and cloud solutions"
        buttonText="Book Free Consultation"
        note="Acquia is the premier enterprise platform for Drupal-based digital experiences. Designed for high performance, security, and scalability, Acquia offers powerful tools for content management, marketing automation, and site governance — all in a cloud-native environment."
      />
      <InfoStats
        stats={[
          { number: "75%", label: "Enterprise cloud for Drupal" },
          { number: "65%", label: "Security & scalability focus" },
          { number: "70%", label: "Strong digital experience platform" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Acquia Service Offerings"
        Services={services}
      />

      

      <WhyChooseUs ChooseUs={whychooseus} />
        <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Acquia Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />
      <AcquiaTechnologiesSection />
      <AboutTech technologies={acquiaDescription} />
      

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default AcquiaContent;
