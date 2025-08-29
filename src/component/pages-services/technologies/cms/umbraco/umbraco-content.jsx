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
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4msHITxrFehH7askWJkb_hMUy3LVdnkbjug&s",
    iconColors: "linear-gradient(135deg, #a6c4f3ff 40%)",
  },
  {
    name: "Umbraco Cloud",
    description:
      "Fully managed hosting platform for Umbraco projects with automated upgrades, deployment workflows, and scalable infrastructure.",
    icon: "data:image/png;base64,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",
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
