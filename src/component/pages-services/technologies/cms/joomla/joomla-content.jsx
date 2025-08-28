import JoomlaTechnologiesSection from "./joomla-TechnologiesSection";
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
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for Joomla site updates, template tweaks, bug fixes, and ongoing maintenance.",
  },
  {
    title: "Dedicated Joomla Developers",
    description:
      "Hire full-time Joomla experts exclusively for your project — ensuring focused attention, faster turnaround, and expert handling of custom modules and site improvements.",
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

const joomlaDescription = [
  {
    name: "Joomla (latest versions)",
    description:
      "Open-source CMS for building dynamic websites and online applications, with robust extensions and templates.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBkbxZnGZTv4FU4eHWw2EPxgJBoxg-MudxA&s",
    iconColors:
      "linear-gradient(135deg, rgba(244,67,54,0.4), rgba(21,101,192,0.4))",
  },
  {
    name: "PHP",
    description:
      "Core server-side scripting language powering Joomla’s backend, extensions, and template logic.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(137,147,190,0.4), rgba(79,91,147,0.4))",
  },
  {
    name: "MySQL",
    description:
      "Primary database management system for storing Joomla content, users, and configurations.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(0,117,143,0.4), rgba(242,145,17,0.4))",
  },
  {
    name: "HTML5 & CSS3",
    description:
      "Frontend technologies used in Joomla templates to create responsive layouts and styled designs.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqBu9NeI3VRExYQtWrJIgnW-7drtru5IPzw&s",
    iconColors:
      "linear-gradient(135deg, rgba(227,79,38,0.4), rgba(239,101,42,0.4))",
  },
  {
    name: "JavaScript (with jQuery)",
    description:
      "Enhances Joomla’s interactivity, dynamic modules, and user interface behaviors.",
    icon: "https://www.kindpng.com/picc/m/476-4768341_javascript-logo-number-angularjs-node-javascript-transparent-background.png",
    iconColors:
      "linear-gradient(135deg, rgba(247,223,30,0.4), rgba(240,219,79,0.4))",
  },
  {
    name: "Docker",
    description:
      "Provides isolated, containerized environments for Joomla development, testing, and scalable deployments.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(13,183,237,0.4), rgba(29,99,237,0.4))",
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
          { number: "65%", label: "Supports multilingual sites" },
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
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <JoomlaTechnologiesSection />
      <AboutTech technologies={joomlaDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default JoomlaContent;
