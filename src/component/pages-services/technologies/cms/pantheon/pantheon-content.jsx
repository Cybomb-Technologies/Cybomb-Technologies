import PantheonTechnologiesSection from "./pantheon-TechnologiesSection";

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
    title: "Pantheon Setup & Onboarding",
    description:
      "Full platform configuration, best-practice workflows, and environment setup to get you running smoothly from day one.",
  },
  {
    title: "Custom Development on Pantheon",
    description:
      "Drupal, WordPress, or hybrid solutions optimized for Pantheon’s container-based architecture.",
  },
  {
    title: "Performance Optimization",
    description:
      "Leverage Pantheon’s caching layers, CDN, and tuning tools to achieve Core Web Vitals excellence.",
  },
  {
    title: "Pantheon Site Migration",
    description:
      "Seamless migration of your existing sites to Pantheon with zero data loss and minimal downtime.",
  },
  {
    title: "Continuous Delivery & Workflow Automation",
    description:
      "Set up automated testing, deployment pipelines, and content workflows for maximum productivity.",
  },
  {
    title: "Pantheon Multisite & Enterprise Solutions",
    description:
      "Manage and scale multiple sites or large portals with centralized control.",
  },
  {
    title: "Security & Compliance",
    description:
      "Implement platform security features plus additional compliance measures for GDPR, HIPAA, or PCI.",
  },
  {
    title: "Pantheon Training & Support",
    description:
      "Personalized training and ongoing support to empower your team to effectively manage and scale your sites on Pantheon.",
  },
];

const hiringData = [
  {
    title: "Pantheon Site Builds",
    description: "From scratch or rebuilds optimized for the platform",
  },
  {
    title: "Migration Projects",
    description: "Move from other hosts or CMS setups to Pantheon",
  },
  {
    title: "Performance & Security Audits",
    description: "Identify and resolve bottlenecks",
  },
  {
    title: "Retainers & Ongoing Support",
    description: "Continuous improvements and updates",
  },
  {
    title: "DevOps & Workflow Consulting",
    description: "Maximize efficiency with Git and Multidev",
  },
  {
    title: "Headless CMS Projects",
    description: "Power modern apps with WordPress as a backend only CMS",
  },
];

const whychooseus = [
  {
    title: "Blazing-fast global CDN",
    description: "Instant content delivery anywhere in the world",
  },
  {
    title: "Automated Dev, Test, Live environments",
    description: "Safe and efficient development",
  },
  {
    title: "Enterprise-grade scalability",
    description: "Handles traffic spikes with zero downtime",
  },
  {
    title: "Integrated version control & CI/CD",
    description: "Streamlined deployments",
  },
  {
    title: "Unmatched uptime and security",
    description: "Backed by robust monitoring and DDoS protection",
  },
  {
    title: "Works with Drupal & WordPress",
    description: "Also supports a hybrid architecture",
  },
];

function PantheonContent() {
  return (
    <section>
      <Banner
        heading="Pantheon CMS Solutions"
        subtext="High-performance hosting & workflow platform for Drupal & WordPress"
        buttonText="Book Free Consultation"
        note="Pantheon powers some of the most ambitious websites in the world with its lightning-fast hosting, developer-friendly workflows, and enterprise-grade reliability. Whether you’re running Drupal, WordPress, or a custom hybrid stack, Pantheon delivers speed, scalability, and automation to keep your site at peak performance."
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
        title="Our Pantheon Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Pantheon Services"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <PantheonTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={awsImage} />
    </section>
  );
}

export default PantheonContent;
