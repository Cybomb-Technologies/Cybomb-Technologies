import AdobeTechnologiesSection from "./adobe-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from 'react-icons/md';

import HiringModels from "../../../../common-ui/mobile-app/hiring";
import scheduleConsultImg from './../../../../../assets/contact/schedule-a-consultation-img3.jpg';
import hireUsImg from './../../../../../assets/contact/hiring-model-img2.webp';
import AboutTech from "../../../../common-ui/custom-development/about-tech";
// hiring-model-img1.png
// hiring-model-img2.webp
// hiring-model-img3.svg


const services = [
  {
    title: 'Custom Adobe Commerce Store Development',
    description:
      'Build fully customized online stores tailored to your brand, audience, and business goals, ensuring seamless performance across devices.',
  },
  {
    title: 'Theme Design & Development',
    description:
      'Create visually stunning, responsive themes that reflect your brand identity while ensuring optimal user experience and faster load times.',
  },
  {
    title: 'Extension Development & Integration',
    description:
      'Develop and integrate custom extensions to enhance store functionality — from payment gateways to advanced shipping solutions.',
  },
  {
    title: 'Migration to Adobe Commerce',
    description:
      'Migrate your existing store from legacy platforms or Magento Open Source to Adobe Commerce with zero data loss and minimal downtime.',
  },
  {
    title: 'Headless Commerce Solutions',
    description:
      'Implement a headless architecture to deliver lightning-fast, omnichannel shopping experiences across web, mobile, and IoT devices.',
  },
  {
    title: 'B2B & Enterprise Solutions',
    description:
      'Build enterprise-grade B2B portals with features like company accounts, custom pricing, and quote management for large-scale operations.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Improve site speed, scalability, and checkout performance to boost customer satisfaction and conversions.',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ensure your store remains up-to-date, secure, and bug-free with ongoing monitoring and quick issue resolution.',
  },
];

const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Prepay development hours for up to 6 months — perfect for ad hoc tasks, enhancements, and store maintenance.',
  },
  {
    title: 'Dedicated Adobe Commerce Developers',
    description: 'Hire full-time Adobe Commerce experts for your projects, ensuring dedicated focus and faster delivery.',
  },
];

const whychooseus = [
  {
    title: 'Certified Adobe Commerce Experts',
    description: 'Work with professionals who know the platform inside-out.',
  },
  {
    title: 'End-to-End Solutions',
    description: 'From design to deployment, we handle every aspect of your eCommerce journey.',
  },
  {
    title: 'Conversion-Focused Design',
    description: 'Optimized for usability, SEO, and sales growth.',
  },
  {
    title: 'Agile & Transparent Process',
    description: 'Clear milestones, regular updates, and full client involvement.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Build a store that grows with your business.',
  },
  {
    title: 'Post-Launch Partnership',
    description: 'Continuous support to keep your store secure, fast, and competitive.',
  },
];
const databaseDescription = [
  {
    name: "PHP",
    description: "PHP is a widely-used server-side scripting language that enables dynamic web development, seamless database integration, and robust backend functionality.",
    icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg", // Replace with actual icon path
    iconColors : "linear-gradient(135deg, #a8e0ff, #c1f0ff)"
  },
  {
    name: "MySQL",
    description: "MySQL is a reliable relational database management system known for speed, scalability, and ACID compliance.",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968313.png", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(139, 215, 248),rgb(144, 238, 255))"  },
  {
    name: "JavaScript",
    description: "JavaScript is a versatile scripting language that powers dynamic, interactive, and responsive web applications.",
    icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    iconColors : "linear-gradient(135deg, #7ed957, #a3f37b)" // Replace with actual icon path
  },
  {
    name: "Knockout.js",
    description: "Knockout.js is a lightweight JavaScript library that simplifies dynamic UIs with MVVM data binding.",
    icon: "https://cdn.worldvectorlogo.com/logos/knockout.svg",
    iconColors : "linear-gradient(135deg,rgb(248, 231, 231),rgb(252, 237, 237))" // Replace with actual icon path
  },
  {
    name: "LESS",
    description: "LESS is a CSS preprocessor that extends stylesheets with variables, mixins, and modular structure for easier maintenance.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LESS_Logo.svg/1024px-LESS_Logo.svg.png",
    iconColors : "linear-gradient(135deg, #d3d3d3, #e8e8e8)" // Replace with actual icon path
  },
  {
    name: "CSS3",
    description: "CSS3 is a style sheet language that enhances web design with advanced layouts, animations, and responsive styling.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    iconColors :"linear-gradient(135deg,rgb(188, 228, 247),rgb(225, 247, 255))" // pastel light blue// Replace with actual icon path

  }
];
function AdobeCommerceContent() {
  return (
   <section>
    <Banner 
        heading="Adobe Commerce Development Services"
        subtext="Deliver high-performance, scalable, and customized eCommerce solutions with Adobe Commerce (Magento)."
        buttonText="Book Free Consultation"
        note="Empower your business with feature-rich online stores designed to boost conversions and enhance user experience. Fill out the form to get started — we’ll reach out within 24 hours."
    />
    <InfoStats
        stats={[
          { number: "80%", label: "Supports scalable enterprise stores" },
          { number: "65%", label: "High customization via modules" },
          { number: "70%", label: "Omnichannel commerce integration" }
        ]}
        caption="Trusted by startups to "
        highlight="Fortune 500 enterprises"
    />
    <ServicesOfferings 
    title = "Our Adobe Commerce Offerings"
    Services={services}/>
        
       
        
    <WhyChooseUs ChooseUs={whychooseus}/>
<ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Adobe Commerce Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <AdobeTechnologiesSection/>
    <AboutTech technologies={databaseDescription} />

    
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />
    
    


    
    
   </section>
  );
}

export default AdobeCommerceContent;