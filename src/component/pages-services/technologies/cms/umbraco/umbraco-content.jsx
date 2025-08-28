import UmbracoTechnologiesSection from "./umbraco-TechnologiesSection";
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
    icon: "data:image/jpeg;base64,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",
    iconColors: "linear-gradient(135deg, #3B82F6 40%)",
  },
  {
    name: "Umbraco Cloud",
    description:
      "Fully managed hosting platform for Umbraco projects with automated upgrades, deployment workflows, and scalable infrastructure.",
    icon: "data:image/png;base64,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",
    iconColors: "linear-gradient(135deg, #6F7BD9 40%)",
  },
  {
    name: ".NET 6+",
    description:
      "Modern framework powering Umbraco, enabling cross-platform development, performance, and security.",
    icon: "data:image/png;base64,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",
    iconColors: "linear-gradient(135deg, #a23ee4ff 40%)",
  },

  {
    name: "C#",
    description:
      "Primary programming language used in Umbraco for custom logic, APIs, and backend development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    iconColors: "linear-gradient(135deg, #9B4F96 40%)",
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
    iconColors: "linear-gradient(135deg,  #63d5f5ff 40% 100%)",
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

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Umbraco Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <UmbracoTechnologiesSection />
      <AboutTech technologies={umbracoDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default UmbracoContent;
