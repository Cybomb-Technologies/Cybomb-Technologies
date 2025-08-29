import BigCommerceTechnologiesSection from "./big-commerce-TechnologiesSection";
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
import AboutTech from "../../../../common-ui/custom-development/about-tech";

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
const databaseDescription = [
  {
    name: "HTML5",
    description: "HTML5 is the standard markup language for structuring and presenting modern web content.",
    icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(247, 183, 170),rgb(243, 175, 206))"
  },
  {
    name: "CSS3",
    description: "CSS3 is used to style and design web pages with responsive layouts, animations, and visual effects.",
    icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(188, 218, 252),rgb(198, 224, 255))"
  },
  {
    name: "JavaScript",
    description: "JavaScript is a versatile scripting language that powers dynamic, interactive, and responsive web applications.",
    icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    iconColors : "linear-gradient(135deg, #7ed957, #a3f37b)" // Replace with actual icon path
  },
  {
    name: "Stencil",
    description: "Stencil is a compiler for building reusable, standards-based web components that work across modern frameworks",
    icon: "https://www.vectorlogo.zone/logos/stenciljs/stenciljs-icon.svg",
    iconColors : "linear-gradient(135deg,rgb(196, 230, 255),rgb(210, 250, 252))" // Replace with actual icon path
  },
  {
    name: "Handlebars.js",
    description: "Handlebars.js is a simple templating engine that enables dynamic HTML generation with minimal logic in templates.",
    icon: "https://www.vectorlogo.zone/logos/handlebarsjs/handlebarsjs-icon.svg",
    iconColors : "linear-gradient(135deg, #d3d3d3, #e8e8e8)" // Replace with actual icon path
  },
  {
    name: "BigCommerce",
    description: "BigCommerce is a scalable e-commerce platform that enables businesses to build, manage, and grow online stores efficiently.",
    icon: "https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg",
    iconColors :"linear-gradient(135deg,rgb(213, 240, 253),rgb(215, 240, 249))" // pastel light blue// Replace with actual icon path

  }
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
          { number: "80%", label: "Cloud-based, SaaS-first solution" },
          { number: "65%", label: "Headless commerce support" },
          { number: "70%", label: "Focus on SEO & marketing tools" }
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
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <BigCommerceTechnologiesSection/>
    <AboutTech technologies={databaseDescription} />

    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />    
   </section>
  );
}

export default BigCommerceContent;