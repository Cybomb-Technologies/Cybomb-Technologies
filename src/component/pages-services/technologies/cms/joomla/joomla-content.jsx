import JoomlaTechnologiesSection from "./joomla-TechnologiesSection";
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
    title: "Custom Joomla Website Development",
    description:
      "From corporate websites to complex portals, we build responsive, scalable, and SEO-optimized Joomla solutions tailored to your needs.",
  },
  {
    title: "Joomla Template Design & Integration",
    description:
      "Custom UI/UX design or integration with premium templates to ensure performance and brand consistency.",
  },
  {
    title: "Joomla Extension Development",
    description:
      "Develop or customize Joomla components, modules, and plugins to add custom functionality.",
  },
  {
    title: "Migration & Upgrade Services",
    description:
      "Smooth upgrade from Joomla 3 to Joomla 4, or migrate from WordPress, Drupal, or legacy CMS systems to Joomla.",
  },
  {
    title: "Headless Joomla with REST API",
    description:
      "Use Joomla as a backend CMS and deliver content to modern frontends (React, Angular, mobile apps) via its RESTful API.",
  },
  {
    title: "Joomla Maintenance & Support",
    description:
      "Performance optimization, security patches, extension updates, and ongoing technical support.",
  },
];

const hiringData = [
  {
    title: "Full-Site Design & Development",
    description:
      "Complete Joomla builds with design, content, and integrations",
  },
  {
    title: "Migration to Joomla 4.x",
    description: "Upgrade services with minimal downtime and no data loss",
  },
  {
    title: "Joomla API for Headless CMS",
    description:
      "Deliver content to SPAs and PWA frontends using Joomla’s core APIs",
  },
  {
    title: "Extension Development & Customization",
    description:
      "Build or adapt components, plugins, and modules for your use case",
  },
  {
    title: "Ongoing Joomla Maintenance",
    description: "SLA-based monitoring, backups, and support plans",
  },
];

const whychooseus = [
  {
    title: "Experienced Joomla Developers",
    description: "Deep experience with Joomla core and extensions",
  },
  {
    title: "Tailored Design & UI/UX",
    description: "Custom templates built for performance and aesthetics",
  },
  {
    title: "Secure & Compliant",
    description: "Follow best practices for secure coding and GDPR compliance",
  },
  {
    title: "Custom Integrations",
    description: "CRM, ERP, marketing platforms, payment gateways",
  },
  {
    title: "Optimized for Speed & SEO",
    description: "Fast-loading, schema-ready, and mobile-optimized",
  },
];

function JoomlaContent() {
  return (
    <section>
      <Banner
        heading="Joomla Development & Support"
        subtext="Flexible, open-source CMS for powerful website and portal solutions"
        buttonText="Book Free Consultation"
        note="Joomla is a robust content management system trusted by governments, nonprofits, educational institutions, and enterprises around the world. With a strong community, extensible architecture, and multilingual capabilities out of the box, Joomla is ideal for websites that demand flexibility and control."
      />
      <InfoStats
        stats={[
          { number: "70%", label: "Popular open-source CMS" },
          { number: "60%", label: "Extensible via community modules" },
          { number: "65%", label: "Supports multilingual sites" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Joomla Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Joomla Services"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <JoomlaTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={awsImage} />
    </section>
  );
}

export default JoomlaContent;
