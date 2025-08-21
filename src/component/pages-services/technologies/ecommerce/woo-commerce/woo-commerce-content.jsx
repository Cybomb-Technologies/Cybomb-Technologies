import WooCommerceTechnologiesSection from "./woo-commerce-TechnologiesSection";
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
    title: 'Custom WooCommerce Store Development',
    description:
      'Build bespoke WooCommerce stores tailored to your brand identity, target audience, and sales goals.',
  },
  {
    title: 'Theme Design & Customization',
    description:
      'Design and implement fully responsive, SEO-friendly themes optimized for performance and conversions.',
  },
  {
    title: 'Plugin Development & Integration',
    description:
      'Create custom WooCommerce plugins or integrate third-party plugins to extend store functionality.',
  },
  {
    title: 'WooCommerce Migration',
    description:
      'Migrate from Shopify, Magento, BigCommerce, or custom platforms to WooCommerce without downtime or data loss.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Improve store speed, reduce cart abandonment, and enhance user experience with performance best practices.',
  },
  {
    title: 'B2B & Wholesale Solutions',
    description:
      'Set up complex pricing, bulk ordering, and account management systems for B2B operations.',
  },
  {
    title: 'Payment Gateway & Shipping Integration',
    description:
      'Integrate multiple payment gateways and shipping providers for a seamless checkout experience.',
  },
  {
    title: 'Maintenance & Security',
    description:
      'Ensure your WooCommerce store stays up-to-date, secure, and fully functional with ongoing monitoring and support.',
  },
];

const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Purchase development hours upfront for up to 6 months — perfect for updates, fixes, or feature additions.',
  },
  {
    title: 'Dedicated WooCommerce Developers',
    description: 'Hire dedicated developers for full-time engagement on your eCommerce project.',
  },
];

const whychooseus = [
  {
    title: 'WooCommerce Specialists',
    description: 'Deep expertise in building high-performing online stores.',
  },
  {
    title: 'Fully Customizable',
    description: 'No “one-size-fits-all” — every store is tailored to your needs.',
  },
  {
    title: 'SEO & Conversion Focused',
    description: 'Built to attract, engage, and convert visitors.',
  },
  {
    title: 'Agile & Transparent Workflow',
    description: 'Regular updates and milestone tracking.',
  },
  {
    title: 'Cost-Effective Development',
    description: 'Leverage WooCommerce’s open-source flexibility.',
  },
  {
    title: 'Post-Launch Partnership',
    description: 'Continuous improvement and technical support.',
  },
];

function WooCommerceContent() {
  return (
   <section>
    <Banner 
        heading="WooCommerce Development Services" 
        subtext="Create powerful, customizable, and scalable online stores with WooCommerce."
        buttonText="Book Free Consultation"
        note="Empower your business with an open-source eCommerce platform that integrates seamlessly with WordPress. Fill out the form to get started — we’ll reach out within 24 hours."
    />
    <InfoStats
        stats={[
          { number: "85%", label: "Popular plugin for WordPress" },
          { number: "70%", label: "Low barrier to entry for sellers" },
          { number: "65%", label: "Supports global payment gateways" }
        ]}
        caption="Trusted by startups to"
        highlight="Fortune 500 enterprises"
    />
    <ServicesOfferings 
    title = "Our WooCommerce Offerings"
    Services={services}/>
        
       
        <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our WooCommerce Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <WooCommerceTechnologiesSection/>
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />
  
   </section>
  );
}

export default WooCommerceContent;