import ShopifyTechnologiesSection from "./shopify-TechnologiesSection";
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
    title: 'Custom Shopify Store Development',
    description:
      'Develop fully customized Shopify stores tailored to your business model, brand identity, and customer journey.',
  },
  {
    title: 'Theme Design & Customization',
    description:
      'Create responsive, pixel-perfect themes that align with your brand while enhancing user experience and performance.',
  },
  {
    title: 'Shopify App Development & Integration',
    description:
      'Build custom Shopify apps or integrate third-party solutions to extend store functionality and improve workflows.',
  },
  {
    title: 'Migration to Shopify',
    description:
      'Migrate your existing store from WooCommerce, Magento, BigCommerce, or other platforms with zero downtime and complete data integrity.',
  },
  {
    title: 'Headless Shopify Solutions',
    description:
      'Deliver lightning-fast, omnichannel experiences using Shopify’s headless architecture with powerful APIs.',
  },
  {
    title: 'B2B & Enterprise Shopify Solutions',
    description:
      'Implement advanced B2B features, custom pricing, and account management for wholesale and enterprise operations.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Enhance store loading speed, SEO rankings, and checkout flow to maximize sales.',
  },
  {
    title: 'Ongoing Store Maintenance',
    description:
      'Keep your store updated, secure, and bug-free with proactive monitoring and support.',
  },
];

const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Purchase development hours in advance for up to 6 months — ideal for updates, fixes, and small feature additions.',
  },
  {
    title: 'Dedicated Shopify Developers',
    description: 'Hire full-time Shopify experts for complex or long-term projects, ensuring complete focus and faster delivery.',
  },
];

const whychooseus = [
  {
    title: 'Certified Shopify Experts',
    description: 'Work with developers experienced in building high-converting Shopify stores.',
  },
  {
    title: 'Custom, Scalable Solutions',
    description: 'Tailored features that grow with your business.',
  },
  {
    title: 'Sales-Driven Design',
    description: 'Optimized layouts, navigation, and product pages to increase conversions.',
  },
  {
    title: 'Agile Development Process',
    description: 'Transparent milestones with regular progress updates.',
  },
  {
    title: 'Omnichannel Capabilities',
    description: 'Connect your Shopify store to POS systems, marketplaces, and social commerce channels.',
  },
  {
    title: 'Post-Launch Support',
    description: 'Continuous optimization, security updates, and feature enhancements.',
  },
];

function ShopifyContent() {
  return (
   <section>
    <Banner 
        heading="Shopify Development Services"
        subtext="Build high-performance, conversion-focused online stores with Shopify."
        buttonText="Book Free Consultation"
        note="Empower your brand with a scalable eCommerce platform that’s easy to manage, visually stunning, and optimized for sales. Fill out the form to get started — we’ll reach out within 24 hours."
    />
    <InfoStats
        stats={[
          { number: "90%", label: "Preferred by small & mid businesses" },
          { number: "75%", label: "Extensive plugin ecosystem" },
          { number: "65%", label: "Focus on mobile-first commerce" }
        ]}
        caption="Trusted by startups to"
        highlight="Fortune 500 enterprises"
    />
    <ServicesOfferings 
      title = "Our Shopify Offerings"
      Services={services}
    />
    <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Shopify Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <ShopifyTechnologiesSection/>
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />

   </section>
  );
}

export default ShopifyContent;