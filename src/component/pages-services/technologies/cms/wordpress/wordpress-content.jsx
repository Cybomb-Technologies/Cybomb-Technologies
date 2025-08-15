import WordPressTechnologiesSection from "./wordpress-TechnologiesSection";

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
    title: "Custom WordPress Development",
    description:
      "Build fully custom themes and plugins tailored to your brand, performance, and business goals.",
  },
  {
    title: "CMS Setup & Optimization",
    description:
      "Get a professionally configured WordPress setup with best practices for security, speed, and usability.",
  },
  {
    title: "Content Architecture & Strategy",
    description:
      "Organize your content with structured post types, taxonomies, and navigation for optimal user experience.",
  },
  {
    title: "Headless WordPress Integration",
    description:
      "Combine WordPress as a backend with modern frontends (React, Next.js, Vue) via REST or GraphQL APIs.",
  },
  {
    title: "WordPress Multisite Solutions",
    description:
      "Manage multiple sites under one dashboard—perfect for franchises, publishers, or multilingual platforms.",
  },
  {
    title: "WooCommerce & eCommerce Integration",
    description:
      "Turn your CMS into a full eCommerce platform with seamless WooCommerce integration and custom features.",
  },
  {
    title: "Performance & Security Audits",
    description:
      "Improve site load times, harden security, and comply with GDPR, HIPAA, or other standards.",
  },
  {
    title: "Migration & Modernization",
    description:
      "Move from outdated CMS platforms or legacy WordPress sites to modern, clean, scalable setups.",
  },
];

const hiringData = [
  {
    title: "WordPress Site Builds",
    description: "Design and develop full websites from scratch",
  },
  {
    title: "CMS Restructure & Cleanup",
    description: "Fix bloated, plugin-heavy, or outdated installs",
  },
  {
    title: "Headless/Hybrid CMS Projects",
    description: "Power modern apps with WordPress as backend only",
  },
  {
    title: "Monthly Support & Retainers",
    description: "Continuous improvements, updates, and performance tuning",
  },
];

const whychooseus = [
  {
    title: "End-to-End WordPress Expertise",
    description: "From UI to backend, we handle it all",
  },
  {
    title: "CMS Strategy, Not Just Dev",
    description: "We think in terms of usability and scale",
  },
  {
    title: "Performance-First Builds",
    description: "Optimized for Core Web Vitals and SEO",
  },
  {
    title: "Security Built In",
    description: "Updates, hardening, and secure configurations as standard",
  },
  {
    title: "Multilingual & Scalable",
    description: "Go global or enterprise with confidence",
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance, monitoring, and enhancements.",
  },
];

function WordPressContent() {
  return (
    <section>
      <Banner
        heading="WordPress CMS Solutions"
        subtext="Powerful, flexible, and user-friendly content management"
        buttonText="Book Free Consultation"
        note="WordPress powers over 40% of the web—and for good reason. It’s a robust CMS that balances simplicity with deep customization. Whether you're running a blog, a business site, or a full-scale digital platform, WordPress provides the tools and flexibility to manage your content efficiently and grow without limits."
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
        title="Our WordPress Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our WordPress Services"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <WordPressTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={awsImage} />
    </section>
  );
}

export default WordPressContent;
