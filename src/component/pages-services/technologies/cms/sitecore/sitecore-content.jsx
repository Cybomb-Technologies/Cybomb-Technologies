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
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPTekrCx5hWCLlTD8AEaBOv9mz-mU-knapw&s",
    iconColors: "linear-gradient(135deg, #f0ededff 60%)",
  },
  {
    name: "React",
    description:
      "A popular front-end library for building fast, interactive, and scalable Sitecore headless applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconColors: "linear-gradient(135deg, #d5e6f0ff 40%)",
  },
  {
    name: "Next.js",
    description:
      "A React framework that enhances Sitecore headless solutions with server-side rendering, SEO optimization, and performance benefits.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    iconColors: "linear-gradient(135deg,  #b99d9dff 40% )",
  },
  {
    name: "Sitecore JSS (JavaScript Services)",
    description:
      "A framework that allows developers to build fully headless applications in React, Angular, or Vue, powered by Sitecore content.",
    icon: "https://cmscritic.com/ms-content/uploads/2023/08/sitecore_logo.jpg?format=auto&width=2048",
    iconColors: "linear-gradient(135deg, #e9a8a3ff 40%)",
  },
  {
    name: "Azure",
    description:
      "Microsoft Azure provides scalable, secure, and flexible hosting infrastructure for Sitecore Managed Cloud and custom deployments.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg,  #d4ebf7ff 40% )",
  },
  {
    name: "Identity Server (Security)",
    description:
      "A central authentication and authorization system in Sitecore that supports SSO, secure API access, and identity federation.",
    icon: "https://old.dotnetfoundation.org/assets/projects/identityserver.png",
    iconColors: "linear-gradient(135deg, #e9dadaff 40% )",
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
