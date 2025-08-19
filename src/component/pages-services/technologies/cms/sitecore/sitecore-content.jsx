import SitecoreTechnologiesSection from "./sitecore-TechnologiesSection";
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
    title: "Sitecore Site Builds",
    description: "End-to-end delivery of enterprise websites",
  },
  {
    title: "Platform Optimization",
    description: "Improve performance, workflows, and personalization",
  },
  {
    title: "Headless & Composable Projects",
    description: "Future-proof with modern, API-first builds",
  },
  {
    title: "Managed Support & Retainers",
    description: "Continuous improvements and proactive maintenance",
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
          { number: "65%", label: "Headless and composable ready" }
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

      <SitecoreTechnologiesSection />
      <StillNotSure />

      <HiringModels title="Hiring Models" cards={hiringData} image={awsImage} />
    </section>
  );
}

export default SitecoreContent;
