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
import AboutTech from "../../../../common-ui/custom-development/about-tech";

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
const databaseDescription = [
  {
    name: "CSS3",
    description: "CSS3 is a style sheet language that enhances web design with advanced layouts, animations, and responsive styling.",
    icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(188, 218, 252),rgb(198, 224, 255))"
  },
  {
    name: "HTML5",
    description: "HTML5 is the standard markup language for structuring and presenting modern web content.",
    icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg,rgb(247, 183, 170),rgb(243, 175, 206))"
  },
  {
    name: "MySQL",
    description: "MySQL is a reliable relational database management system known for speed, scalability, and ACID compliance.",
    icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
    iconColors: "linear-gradient(135deg,rgb(139, 215, 248),rgb(144, 238, 255))" 
  },
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
    icon: "https://www.vectorlogo.zone/logos/lesscss/lesscss-icon.svg",
    iconColors :"linear-gradient(135deg,rgb(194, 227, 243), #c1f0ff)" // pastel light blue// Replace with actual icon path

  }
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

export default MagentoContent;