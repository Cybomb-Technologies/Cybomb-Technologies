import DrupalTechnologiesSection from "./drupal-TechnologiesSection";

import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import placeholderImage from "./../../../../../assets/placeholder-image.webp";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import awsImage from "../../../../../assets/aws.avif";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";

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
    title: "Drupal Website Builds",
    description: "Full design, architecture, and implementation",
  },
  {
    title: "Legacy Migrations & Upgrades",
    description: "Move from outdated CMS systems or older Drupal versions",
  },
  {
    title: "Drupal as Headless CMS",
    description: "Integrate with SPAs, native apps, or JAMstack frontends",
  },
  {
    title: "Ongoing Maintenance & Support",
    description: "Retainers for updates, support, and optimization",
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
          { number: "900+", label: "In-house Expert Developer" },
          { number: "70%", label: "Average Savings on Development Costs" },
          { number: "20,000+", label: "Projects Delivered Successfully" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Drupal Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Drupal Services"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <DrupalTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={awsImage} />
    </section>
  );
}

export default DrupalContent;
