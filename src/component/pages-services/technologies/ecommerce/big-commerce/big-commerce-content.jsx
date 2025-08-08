import BigCommerceTechnologiesSection from "./big-commerce-TechnologiesSection";


import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import awsImage from '../../../../../assets/aws.avif';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";


const services = [
  {
    title: 'Custom BigCommerce Store Development',
    description:
      'Develop tailored BigCommerce stores that match your brand’s personality, target audience, and growth goals.',
  },
  {
    title: 'Theme Design & Customization',
    description:
      'Design pixel-perfect, responsive themes optimized for conversions and mobile shopping experiences.',
  },
  {
    title: 'BigCommerce App Development & Integration',
    description:
      'Create custom apps or integrate existing third-party apps to extend store capabilities.',
  },
  {
    title: 'Migration to BigCommerce',
    description:
      'Seamlessly migrate from Magento, Shopify, WooCommerce, or other platforms with zero downtime and complete data accuracy.',
  },
  {
    title: 'B2B & Enterprise Solutions',
    description:
      'Implement complex pricing rules, bulk ordering systems, and account-based access for wholesale operations.',
  },
  {
    title: 'Headless Commerce Solutions',
    description:
      'Build lightning-fast, omnichannel storefronts using BigCommerce APIs and modern front-end frameworks.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Improve load times, SEO rankings, and conversion rates with best-practice optimizations.',
  },
  {
    title: 'Ongoing Store Maintenance',
    description:
      'Ensure your BigCommerce store stays updated, secure, and high-performing at all times.',
  },
];
const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Prepay for development hours for up to 6 months — ideal for upgrades, fixes, and smaller enhancements.',
  },
  {
    title: 'Dedicated BigCommerce Developers',
    description: 'Hire full-time BigCommerce experts for large-scale or ongoing projects.',
  },
];
const whychooseus = [
  {
    title: 'Certified BigCommerce Experts',
    description: 'Proven track record in delivering high-performing stores.',
  },
  {
    title: 'Enterprise-Grade Solutions',
    description: 'Built to handle large catalogs, high traffic, and global sales.',
  },
  {
    title: 'Conversion-Focused Design',
    description: 'UX optimized to turn visitors into loyal customers.',
  },
  {
    title: 'Agile & Transparent Process',
    description: 'Clear milestones with regular client feedback loops.',
  },
  {
    title: 'Headless Commerce Expertise',
    description: 'Future-proof solutions for multi-channel retail.',
  },
  {
    title: 'Post-Launch Partnership',
    description: 'Continuous improvements, feature enhancements, and maintenance.',
  },
];





function BigCommerceContent() {
  return (
   <section>
    <Banner 
        heading="BigCommerce Development Services" 
        subtext="Build high-performance, scalable, and feature-rich online stores with BigCommerce."
        buttonText="Book Free Consultation"
        note="Empower your business with an enterprise-grade SaaS eCommerce platform designed to boost conversions and simplify store management. Fill out the form to get started — we’ll reach out within 24 hours."
    />
    <InfoStats
        stats={[
        { number: "100+", label: "certified BigCommerce developers" },
        { number: "120+", label: "BigCommerce projects delivered globally" },
        { number: "55%", label: "faster go-to-market compared to traditional eCommerce builds" }
        ]}
        caption="Trusted by startups to"
        highlight="Fortune 500 enterprises"
    />
    <ServicesOfferings 
    title = "Our BigCommerce Offerings"
    Services={services}/>
        
       
        <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our BigCommerce Services"
      buttonText="Schedule a Consultation!"
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <BigCommerceTechnologiesSection/>
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={awsImage}
    />
    
    


    
    
   </section>
  );
}

export default BigCommerceContent;