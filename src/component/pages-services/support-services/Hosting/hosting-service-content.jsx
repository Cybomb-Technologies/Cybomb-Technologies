import Banner from "../../../common-ui/support-service/banner";
import InfoStats from "../../../common-ui/support-service/info-stats";
import WhyChooseUs from "../../../common-ui/support-service/why-choose-us";
import ServicesOfferings from "../../../common-ui/support-service/services-offerings";
import ScheduleConsultation from "../../../common-ui/support-service/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import CloudOffers from "../../../common-ui/support-service/cloud-offers";
import DevelopmentProcess from "../../../common-ui/support-service/development-process";
import OnlinePresence from "../../../common-ui/support-service/online-presence";

import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img3.jpg";
import contactUsImg from "./../../../../assets/contact/contact-us-img1.jpg";
import hostSupportImg from "./../../../../assets/technologies/hosting-matters-img.jpg";
import HostingTools from "../../../common-ui/support-service/HostingTools";

const whychooseus = [
  {
    title: "End-to-End Setup & Migration",
    description:
      "We handle everything from DNS configuration to email setup and data migration.",
  },
  {
    title: "24/7 Monitoring & Security",
    description:
      "Our hosting comes with DDOS protection, firewall satup, SSL certificates, and regular backups.",
  },
  {
    title: "High Performance",
    description:
      "Lightning-fast page loads and optimized server response times to keep users engaged.",
  },
  {
    title: "Scalability Built-in",
    description:
      "Update resources on demand-perfect for growing businesses or seasonal spikes.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our experts are available around the clock to assist with any technical needs.",
  },
];

const offerings = [
  {
    title: "Shared Hosting",
    description:
      "Affordable and easy-to-manage hosting for small businesses and websites.",
  },
  {
    title: "VPS (Virtual Private Server) Hosting",
    description:
      "Greater control and performance for mid-sized apps or custom environments.",
  },
  {
    title: "Cloud Hosting (AWS, Google Cloud)",
    description:
      "Scalable, flexible, and cost-effective hosting for high-traffic sites and applications.",
  },
  {
    title: "Dedicated Server Hosting",
    description:
      "Full control, enhanced performance, and enterprise-grade infrastructure.",
  },
  {
    title: "Managed WordPress Hosting",
    description:
      "Optimized environments specifically built for WordPress speed and security.",
  },
  {
    title: "Domain & Email Hosting",
    description:
      "Professional domain management with secure, branded email services.",
  },
];

const features = [
  "Ensures uptime and reliability for your customers",
  "Impacts your site speed, SEO, and conversions",
  "Provides essential security against cyber threats",
  "Scales with your business needs and traffic.",
  "Roduces IT overhead and simplifies deployments.",
];

const useCases = [
  "Hosting business websites, landing pages, or eCommerce platforms",
  "Deploying soos products or web applications",
  "Email and file hosting for remote teams",
  "Hosting development and stoging environments",
  "CON-based static content delivery for global users",
];
const hostingPlatforms = [
  {
    name: "Vercel",
    description: "Fast and scalable hosting for Next.js and frontend apps.",
    icon: "▲",
  },
  {
    name: "Netlify",
    description: "Deploy modern websites and apps in seconds.",
    icon: "☁️",
  },
  {
    name: "Hostinger",
    description: "Affordable and reliable web hosting platform.",
    icon: "💜",
  },
  {
    name: "DigitalOcean",
    description: "Powerful cloud hosting for developers and businesses.",
    icon: "🌊",
  },
];

function HostingServicesContent() {
  return (
    <section>
      <Banner
        heading="Hosting Services"
        subtext="Fast, reliable, and secure -so your digital presence never sleeps."
        buttonText="Book Free Consultation"
        note="We provide modern hosting solutions that ensure your websites,apps, and services run smoothly, scales easily, and stay secure - all backed by expert support."
      />
      <InfoStats
        stats={[
          { number: "99.99%", label: "Uptime SLA with secure hosting" },
          { number: "Hybrid", label: "Cloud + hybrid models supported" },
          {
            number: "Cost effective",
            label: "Managed services for scalability",
          },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings title="What We Offer" items={offerings} />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Hosting Development Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />
      <CloudOffers
        title="Why Hosting Matters"
        features={features}
        image={hostSupportImg}
      />

      <WhyChooseUs ChooseUs={whychooseus} />
      <HostingTools tools={hostingPlatforms} />

      <DevelopmentProcess title="Use Case" Process={useCases} />
      <OnlinePresence
        title="Let's Find the right Hosting Services for your business."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="CRM services"
      />
    </section>
  );
}
export default HostingServicesContent;
