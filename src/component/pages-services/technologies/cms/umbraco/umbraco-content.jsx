import UmbracoTechnologiesSection from "./umbraco-TechnologiesSection";
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
    description:
      "Prepay development hours for up to 6 months — ideal for site updates, UI tweaks, bug fixing, and ongoing Umbraco CMS maintenance.",
  },
  {
    title: "Dedicated Umbraco Developers",
    description:
      "Hire full-time Umbraco experts exclusively for your project — ensuring focused delivery, faster turnaround, and customized solutions built on the Umbraco CMS framework.",
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
const umbracoDescription = [
  {
    name: "Umbraco Core",
    description:
      "The open-source .NET-based CMS that provides flexible content management, customization, and extensibility.",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-umbraco-icon-svg-png-download-3030267.png?f=webp",
    iconColors: "linear-gradient(135deg, #a6c4f3ff 40%)",
  },
  {
    name: "Umbraco Cloud",
    description:
      "Fully managed hosting platform for Umbraco projects with automated upgrades, deployment workflows, and scalable infrastructure.",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-umbraco-icon-svg-png-download-3030267.png?f=webp",
    iconColors: "linear-gradient(135deg, #cad0f1ff 40%)",
  },
  {
    name: ".NET 6+",
    description:
      "Modern framework powering Umbraco, enabling cross-platform development, performance, and security.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
    iconColors: "linear-gradient(135deg, #8d8fe4ff 20%)",
  },

  {
    name: "C#",
    description:
      "Primary programming language used in Umbraco for custom logic, APIs, and backend development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    iconColors: "linear-gradient(135deg, #a782a4ff 40%)",
  },
  {
    name: "SQL Server",
    description:
      "Database engine used by Umbraco to store and manage structured content, media, and configuration.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    iconColors: "linear-gradient(135deg, #E0E0E0 40% 100%)",
  },
  {
    name: "Azure",
    description:
      "Cloud platform commonly used to host Umbraco with scalable web apps, storage, and integration services.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg,  #b8cacfff 40% 100%)",
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
          { number: "65%", label: "Strong community packages" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Umbraco Service Offerings"
        Services={services}
      />

      

      <WhyChooseUs ChooseUs={whychooseus} />
        <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Umbraco Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />
      <UmbracoTechnologiesSection />
      <AboutTech technologies={umbracoDescription} />
      

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default UmbracoContent;
