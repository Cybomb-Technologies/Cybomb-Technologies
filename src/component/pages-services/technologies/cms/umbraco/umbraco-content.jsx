import UmbracoTechnologiesSection from "./umbraco-TechnologiesSection";
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
    title: "Custom Umbraco Website Development",
    description: "From concept to deployment, built around your brand goals.",
  },
  {
    title: "E-Commerce Solutions with Umbraco",
    description: "Integration with Umbraco Commerce or third-party platforms.",
  },
  {
    title: "Headless CMS Implementation",
    description: "Deliver content across web, mobile, and IoT devices.",
  },
  {
    title: "API & Third-Party Integrations",
    description: "CRM, ERP, payment gateways, and marketing automation tools.",
  },
  {
    title: "Umbraco Cloud Setup & Optimization",
    description: "Scalable hosting and version control for better performance.",
  },
  {
    title: "Migration to Umbraco",
    description: "Smooth transition from legacy CMS platforms.",
  },
  {
    title: "Performance Optimization & Audits",
    description:
      "Analyzing and enhancing your Umbraco site's speed, security, and overall health to improve user experience and SEO rankings.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Ensuring your Umbraco site remains secure, fast, and up-to-date.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description: "Prepay development hours for up to 6 months — ideal for site updates, UI tweaks, bug fixing, and ongoing Umbraco CMS maintenance.",
  },
  {
    title: "Dedicated Umbraco Developers",
    description: "Hire full-time Umbraco experts exclusively for your project — ensuring focused delivery, faster turnaround, and customized solutions built on the Umbraco CMS framework.",
  },
];

const whychooseus = [
  {
    title: "🛠️ Full-Stack Umbraco Expertise",
    description: "From UI/UX to .NET backend",
  },
  {
    title: "CMS Strategy-Driven",
    description: "We design for scalability, not just launch day",
  },
  {
    title: "Performance Optimized",
    description: "Fast, SEO-friendly, and cloud-ready",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Secure by default with best practices baked in",
  },
  {
    title: "Global-Ready Solutions",
    description: "Fully multilingual and multi-site capabilities",
  },
];

function UmbracoContent() {
  return (
    <section>
      <Banner
        heading="Umbraco CMS Solutions"
        subtext="Powerful, flexible, and developer-friendly content management"
        buttonText="Book Free Consultation"
        note="Umbraco is one of the leading open-source .NET CMS platforms—trusted by organizations worldwide for its flexibility, scalability, and seamless integration with enterprise systems. Whether you need a high-performance corporate site, a multi-language global portal, or a fully customized digital experience, Umbraco gives you complete control over your content and user experience."
      />
      <InfoStats
        stats={[
            { number: "70%", label: "Flexible .NET based CMS" },
            { number: "60%", label: "Popular with agencies" },
            { number: "65%", label: "Strong community packages" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Umbraco Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Umbraco Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <UmbracoTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={hireUsImg} />
    </section>
  );
}

export default UmbracoContent;
