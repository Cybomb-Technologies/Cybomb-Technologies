import AcquiaTechnologiesSection from "./acquia-TechnologiesSection";

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
    title: "Full Drupal Website Development on Acquia",
    description: "Design, development, deployment on Acquia Cloud",
  },
  {
    title: "Multisite Setup with ACSF",
    description: "Rapid site creation, role-based access, and governance setup",
  },
  {
    title: "Acquia Migrate",
    description:
      "From Drupal 7/8 or other CMS platforms to Drupal 10 on Acquia",
  },
  {
    title: "Headless Drupal with Acquia API",
    description:
      "Leverage Acquia for backend and decouple the frontend with React, Next.js, etc.",
  },
  {
    title: "Acquia CDP & Personalization Integration",
    description: "Enable real-time targeting and user segmentation",
  },
  {
    title: "Ongoing Optimization & Support",
    description: "SLA-based support, audits, monitoring, and improvements",
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
          { number: "900+", label: "In-house Expert Developer" },
          { number: "70%", label: "Average Savings on Development Costs" },
          { number: "20,000+", label: "Projects Delivered Successfully" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Acquia Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Acquia Services"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <AcquiaTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={awsImage} />
    </section>
  );
}

export default AcquiaContent;
