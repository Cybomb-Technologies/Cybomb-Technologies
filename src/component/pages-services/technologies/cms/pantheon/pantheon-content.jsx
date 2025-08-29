import PantheonTechnologiesSection from "./pantheon-TechnologiesSection";
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
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for Pantheon environment updates, performance tuning, workflow configuration, and ongoing Drupal/WordPress maintenance on the Pantheon platform.",
  },
  {
    title: "Dedicated Pantheon Developers",
    description:
      "Hire full-time Pantheon-experienced developers who focus solely on your project — ensuring optimized deployments, faster delivery, and deep expertise with Pantheon workflows and DevOps.",
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

const pantheonDescription = [
  {
    name: "Pantheon Platform (Dev/Test/Live workflows & Multidev)",
    description:
      "Cloud platform providing Dev, Test, Live environments and Multidev for collaborative development and seamless deployments.",
    icon: "https://venturebeat.com/wp-content/uploads/2019/03/c69b42ac-1587-4592-89a1-fa83cae40273.png",
    iconColors: "linear-gradient(135deg, #a0a0a0ff 20%)",
  },
  {
    name: "Drupal Core",
    description:
      "Open-source CMS supported by Pantheon for building complex, content-rich digital experiences.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(13,183,237,0.4), rgba(29,99,237,0.4))",
  },
  {
    name: "WordPress Core",
    description:
      "Most popular CMS supported by Pantheon, enabling fast and flexible site creation and management.",
    icon: "https://www.vectorlogo.zone/logos/wordpress/wordpress-tile.svg",
    iconColors: "linear-gradient(135deg,  rgba(29,99,237,0.4)",
  },
  {
    name: "PHP",
    description:
      "The core programming language powering both Drupal and WordPress on Pantheon.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    iconColors: "linear-gradient(135deg, #a3abceff 40%)",
  },
  {
    name: "MySQL",
    description:
      "Relational database used to store and query content, user data, and configuration for Drupal and WordPress.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors: "linear-gradient(135deg, #beedf6ff, #c7e7fbff)",
  },
  {
    name: "Fastly (CDN with Varnish caching)",
    description:
      "Delivers content globally with integrated Varnish caching for speed, security, and scalability.",
    icon: "https://www.svgrepo.com/show/331388/fastly.svg",
    iconColors: "linear-gradient(135deg, #fab5b5ff 40%)",
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
          { number: "75%", label: "Cloud platform for WordPress & Drupal" },
          { number: "65%", label: "Focus on CI/CD workflows" },
          { number: "70%", label: "Enterprise-grade scaling" },
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
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <PantheonTechnologiesSection />
      <AboutTech technologies={pantheonDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default PantheonContent;
