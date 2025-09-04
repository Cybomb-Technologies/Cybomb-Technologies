import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from "./../../../../assets/contact/contact-us-img2.jpg";
import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img3.jpg";
import ArchitectureToolsSection from "./architecture-techtool";
const WhatWeOffers = [
  {
    title: "Enterprise Data Architecture",
    description:
      "Design holistic frameworks to integrate, manage, and govern data across the enterprise.",
  },
  {
    title: "Cloud-Native Data Architecture",
    description:
      "Build scalable, flexible, and cost-efficient architectures on AWS, Azure, or Google Cloud.",
  },
  {
    title: "Data Integration Architecture",
    description:
      "Unify disparate data sources into a cohesive, accessible, and analytics-ready environment.",
  },
  {
    title: "Data Streaming Architecture",
    description:
      "Implement event-driven pipelines and architectures for instant insights.",
  },
  {
    title: "Hybrid & Multi-Cloud Architecture",
    description:
      "Create architectures that work seamlessly across multiple cloud and on-premise environments.",
  },
  {
    title: "Security & Compliance by Design",
    description:
      "Ensure your architecture is built with embedded security, governance, and compliance controls.",
  },
];

const whychooseus = [
  {
    title: "Future-Proof Designs",
    description:
      "We architect systems that can adapt to new technologies, workloads, and regulations.",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "Experience in relational, NoSQL, big data, and streaming platforms.",
  },
  {
    title: "Performance-Driven",
    description: "Optimized for speed, scalability, and minimal latency.",
  },
  {
    title: "Business Alignment",
    description:
      "Architectures designed around your unique operational and analytical needs.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial blueprint to full implementation and optimization.",
  },
];

const useCases = [
  "Designing a cloud-native architecture for enterprise analytics",
  "Implementing a hybrid architecture for regulated industries",
  "Building a real-time streaming data platform",
  "Migrating legacy systems to a modern, scalable architecture",
  "Unifying multi-cloud environments into a cohesive architecture",
];

function ArchitectureContent() {
  return (
    <section>
      <Banner
        heading="Architecture"
        subtext="Build a scalable, secure, and future-ready foundation for your data ecosystem."
        buttonText="Plan Your Data Architecture"
        note="Our data architecture services ensure that your organization’s information systems are designed for performance, security, and adaptability. From cloud-native solutions to hybrid integrations, we create robust architectures that empower analytics, innovation, and compliance."
      />

      <InfoStats
        stats={[
          { number: "60%", label: "Fewer data silos after modernization" },
          {
            number: "99.99%",
            label: "Uptime achievable with cloud-native designs",
          },
          {
            number: "3×",
            label: "Faster analytics with optimized architecture",
          },
        ]}
        caption="Trusted by Leading Enterprises and"
        highlight="High-Growth Innovators"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <ArchitectureToolsSection />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Design a Data Architecture That Scales With Your Business"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Architecture Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build Your Future-Ready Data Architecture Today."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Architecture Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default ArchitectureContent;
