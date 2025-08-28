import SitecoreTechnologiesSection from "./sitecore-TechnologiesSection";
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
    title: "Custom Sitecore Website Development",
    description: "Tailor-made solutions aligned with your brand goals.",
  },
  {
    title: "Sitecore Experience Platform (XP) Implementation",
    description: "Unlock the full potential of personalization and analytics.",
  },
  {
    title: "Headless Sitecore Development",
    description: "Build decoupled, future-proof digital experiences.",
  },
  {
    title: "Migration to Sitecore",
    description: "Seamlessly transition from other CMS platforms.",
  },
  {
    title: "Sitecore Integration",
    description: "Connect CRM, ERP, marketing tools, and third-party systems.",
  },
  {
    title: "Sitecore Upgrade & Maintenance",
    description: "Keep your platform updated, secure, and optimized.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — perfect for Sitecore updates, component enhancements, content changes, and overall platform maintenance.",
  },
  {
    title: "Dedicated Sitecore Developers",
    description:
      "Hire full-time Sitecore-certified developers exclusively for your project — ensuring faster delivery, enterprise-grade quality, and complete focus on your Sitecore implementation.",
  },
];

const whychooseus = [
  {
    title: "Custom Sitecore Website Development",
    description: "Tailor-made solutions aligned with your brand goals.",
  },
  {
    title: "Sitecore Experience Platform (XP) Implementation",
    description: "Unlock the full potential of personalization and analytics.",
  },
  {
    title: "Headless Sitecore Development",
    description: "Build decoupled, future-proof digital experiences.",
  },
  {
    title: "Migration to Sitecore",
    description: "Seamlessly transition from other CMS platforms.",
  },
  {
    title: "Sitecore Integration",
    description: "Connect CRM, ERP, marketing tools, and third-party systems.",
  },
  {
    title: "Sitecore Upgrade & Maintenance",
    description: "Keep your platform updated, secure, and optimized.",
  },
];

const sitecoreDescription = [
  {
    name: "Sitecore XP (Experience Platform)",
    description:
      "The core digital experience platform offering CMS, personalization, analytics, and marketing automation in a single solution.",
    icon: "data:image/png;base64,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",
    iconColors: "linear-gradient(135deg, #d82c20 40%)",
  },
  {
    name: "React",
    description:
      "A popular front-end library for building fast, interactive, and scalable Sitecore headless applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconColors: "linear-gradient(135deg, #007acc 40%)",
  },
  {
    name: "Next.js",
    description:
      "A React framework that enhances Sitecore headless solutions with server-side rendering, SEO optimization, and performance benefits.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    iconColors: "linear-gradient(135deg,  #333333 40% )",
  },
  {
    name: "Sitecore JSS (JavaScript Services)",
    description:
      "A framework that allows developers to build fully headless applications in React, Angular, or Vue, powered by Sitecore content.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xEqBrGsLL6Xa8lm4908Y5LOi2gChu1OvqQ&s",
    iconColors: "linear-gradient(135deg, #d82c20 40%)",
  },
  {
    name: "Azure",
    description:
      "Microsoft Azure provides scalable, secure, and flexible hosting infrastructure for Sitecore Managed Cloud and custom deployments.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg,  #1a73e8 40% )",
  },
  {
    name: "Identity Server (Security)",
    description:
      "A central authentication and authorization system in Sitecore that supports SSO, secure API access, and identity federation.",
    icon: "data:image/png;base64,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", // IdentityServer official logo
    iconColors: "linear-gradient(135deg, #333333 40% )",
  },
];

function SitecoreContent() {
  return (
    <section>
      <Banner
        heading="Sitecore CMS Solutions"
        subtext="Enterprise-grade, scalable, and personalized content management"
        buttonText="Book Free Consultation"
        note="Sitecore is a powerful digital experience platform designed for enterprises that demand personalization, scalability, and omnichannel delivery. From content creation to customer experience optimization, Sitecore empowers organizations to manage, deliver, and optimize content across every touchpoint with precision."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Enterprise-grade digital experience" },
          { number: "70%", label: "Supports personalization & AI" },
          { number: "65%", label: "Headless and composable ready" },
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
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <SitecoreTechnologiesSection />
      <AboutTech technologies={sitecoreDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default SitecoreContent;
