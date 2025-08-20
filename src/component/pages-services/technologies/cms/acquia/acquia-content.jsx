import AcquiaTechnologiesSection from "./acquia-TechnologiesSection";
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
    description: "Prepurchase development hours for up to 6 months — ideal for Acquia site enhancements, cloud configuration tweaks, security updates, and ongoing maintenance on Acquia-hosted Drupal environments.",
  },
  {
    title: "Dedicated Acquia Developers",
    description: "Hire full-time Acquia-certified Drupal experts dedicated to your project — ensuring optimized builds, faster delivery, and deep expertise across Acquia Cloud, Site Factory, and Acquia CMS.",
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
          { number: "75%", label: "Enterprise cloud for Drupal" },
          { number: "65%", label: "Security & scalability focus" },
          { number: "70%", label: "Strong digital experience platform" }
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
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <AcquiaTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={hireUsImg} />
    </section>
  );
}

export default AcquiaContent;
