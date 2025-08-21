import MagentoTechnologiesSection from "./magento-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";

import scheduleConsultImg from './../../../../../assets/contact/schedule-a-consultation-img3.jpg';
import hireUsImg from './../../../../../assets/contact/hiring-model-img2.webp';

const services = [
  {
    title: 'Custom Magento Store Development',
    description:
      'Build tailored Magento stores that reflect your brand, engage your audience, and maximize conversions.',
  },
  {
    title: 'Theme Design & Customization',
    description:
      'Create responsive, visually striking themes optimized for SEO, speed, and user experience.',
  },
  {
    title: 'Extension Development & Integration',
    description:
      'Develop custom extensions or integrate third-party tools to enhance store functionality.',
  },
  {
    title: 'Magento Migration & Upgrades',
    description:
      'Seamlessly migrate from other platforms or upgrade to the latest Magento version with no downtime.',
  },
  {
    title: 'Headless Magento Solutions',
    description:
      'Utilize Magento’s API capabilities to create fast, modern, omnichannel experiences.',
  },
  {
    title: 'B2B & Enterprise Solutions',
    description:
      'Implement custom pricing, bulk ordering, and account management for complex B2B operations.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Boost page load speed, improve checkout flow, and enhance overall site performance.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Ensure PCI compliance, data encryption, and advanced security measures to protect customer information.',
  },
];

const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Purchase flexible development hours in advance for up to 6 months — perfect for updates and small projects.',
  },
  {
    title: 'Dedicated Magento Developers',
    description: 'Hire full-time Magento specialists for complex or long-term eCommerce projects.',
  },
];

const whychooseus = [
  {
    title: 'Certified Magento Developers',
    description: 'Deep expertise in Magento’s architecture and customization.',
  },
  {
    title: 'Full-Cycle Development',
    description: 'From concept to post-launch support.',
  },
  {
    title: 'Sales-Focused Design',
    description: 'Built to attract, engage, and convert customers.',
  },
  {
    title: 'Agile Process',
    description: 'Transparent workflows and milestone tracking.',
  },
  {
    title: 'Enterprise Scalability',
    description: 'Optimized for high traffic and large product catalogs.',
  },
  {
    title: 'Ongoing Partnership',
    description: 'Regular updates, security patches, and performance tuning.',
  },
];

function MagentoContent() {
  return (
   <section>
    <Banner 
        heading="Magento Development Services" 
        subtext="Deliver high-performance, secure, and scalable eCommerce solutions with Magento."
        buttonText="Book Free Consultation"
        note="Empower your business with a fully customizable platform designed for growth and flexibility. Fill out the form to get started — we’ll reach out within 24 hours."
    />
    <InfoStats
        stats={[
          { number: "75%", label: "Open-source ecommerce flexibility" },
          { number: "65%", label: "High scalability for enterprise" },
          { number: "70%", label: "Large developer ecosystem" }
        ]}
        caption="Trusted by startups to"
        highlight="Fortune 500 enterprises"
    />
    <ServicesOfferings 
      title = "Our Magento Offerings"
      Services={services}
    />
    <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Magento Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <MagentoTechnologiesSection/>
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />

   </section>
  );
}

export default MagentoContent;