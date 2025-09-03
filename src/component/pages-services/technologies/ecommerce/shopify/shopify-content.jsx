import ShopifyTechnologiesSection from "./shopify-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";

import HiringModels from "../../../../common-ui/mobile-app/hiring";

import scheduleConsultImg from "./../../../../../assets/contact/schedule-a-consultation-img3.jpg";
import hireUsImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import AboutTech from "../../../../common-ui/custom-development/about-tech";

const services = [
  {
    title: "Custom Shopify Store Development",
    description:
      "Develop fully customized Shopify stores tailored to your business model, brand identity, and customer journey.",
  },
  {
    title: "Theme Design & Customization",
    description:
      "Create responsive, pixel-perfect themes that align with your brand while enhancing user experience and performance.",
  },
  {
    title: "Shopify App Development & Integration",
    description:
      "Build custom Shopify apps or integrate third-party solutions to extend store functionality and improve workflows.",
  },
  {
    title: "Migration to Shopify",
    description:
      "Migrate your existing store from WooCommerce, Magento, BigCommerce, or other platforms with zero downtime and complete data integrity.",
  },
  {
    title: "Headless Shopify Solutions",
    description:
      "Deliver lightning-fast, omnichannel experiences using Shopify’s headless architecture with powerful APIs.",
  },
  {
    title: "B2B & Enterprise Shopify Solutions",
    description:
      "Implement advanced B2B features, custom pricing, and account management for wholesale and enterprise operations.",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhance store loading speed, SEO rankings, and checkout flow to maximize sales.",
  },
  {
    title: "Ongoing Store Maintenance",
    description:
      "Keep your store updated, secure, and bug-free with proactive monitoring and support.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Purchase development hours in advance for up to 6 months — ideal for updates, fixes, and small feature additions.",
  },
  {
    title: "Dedicated Shopify Developers",
    description:
      "Hire full-time Shopify experts for complex or long-term projects, ensuring complete focus and faster delivery.",
  },
];

const whychooseus = [
  {
    title: "Certified Shopify Experts",
    description:
      "Work with developers experienced in building high-converting Shopify stores.",
  },
  {
    title: "Custom, Scalable Solutions",
    description: "Tailored features that grow with your business.",
  },
  {
    title: "Sales-Driven Design",
    description:
      "Optimized layouts, navigation, and product pages to increase conversions.",
  },
  {
    title: "Agile Development Process",
    description: "Transparent milestones with regular progress updates.",
  },
  {
    title: "Omnichannel Capabilities",
    description:
      "Connect your Shopify store to POS systems, marketplaces, and social commerce channels.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Continuous optimization, security updates, and feature enhancements.",
  },
];
const databaseDescription = [
  {
    name: "Shopify",
    description:
      "Shopify is a leading e-commerce platform that enables businesses to create, manage, and scale online stores efficiently.",
    icon: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg", // Replace with actual icon path
    iconColors: "linear-gradient(135deg, #d3d3d3, #e8e8e8)",
  },
  {
    name: "Liquid",
    description:
      "Liquid is a flexible template language used to create dynamic content in web applications, widely adopted by Shopify and Jekyll.",
    icon: "https://cdn.prod.website-files.com/64be309a0c8ae7454454fcef/653932043d90a3fa696fd68a_liquid-logo-text.png",
    iconColors: "linear-gradient(135deg, #d3d3d3, #e8e8e8)",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a powerful scripting language that enables interactive and dynamic web applications.",
    icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    iconColors: "linear-gradient(135deg, #7ed957, #a3f37b)", // Replace with actual icon path
  },
  {
    name: "HTML5",
    description:
      "HTML5 is the standard markup language for structuring and presenting modern web content.",
    icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    iconColors: "linear-gradient(135deg,rgb(247, 183, 170),rgb(243, 175, 206))",
  },
  {
    name: "CSS3",
    description:
      "CSS3 is used to style and design web pages with responsive layouts, animations, and visual effects.",
    icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    iconColors: "linear-gradient(135deg,rgb(188, 218, 252),rgb(198, 224, 255))",
  },
  {
    name: "JSON",
    description:
      "JSON (JavaScript Object Notation) is a lightweight data-interchange format used for storing and exchanging structured data.",
    icon: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
    iconColors: "linear-gradient(135deg,rgb(219, 219, 219),rgb(210, 210, 208))",
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
          { number: "65%", label: "Focus on mobile-first commerce" },
        ]}
        caption="Trusted by startups to"
        highlight="Fortune 500 enterprises"
      />
      <ServicesOfferings title="Our Shopify Offerings" Services={services} />
      
      <WhyChooseUs ChooseUs={whychooseus} />
<ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Shopify Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <ShopifyTechnologiesSection />
      <AboutTech technologies={databaseDescription} />

      

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default ShopifyContent;
