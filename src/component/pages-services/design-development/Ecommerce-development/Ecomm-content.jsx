import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import EcomTechToolsSection from "./Ecom-tech";
import Ecommerceimg from "./../../../../assets/technologies/ecommerceimg.png"

const services = [
  {
    title: 'Custom E-Commerce Website Development',
    description: 'Fully tailored storefronts with intuitive navigation, fast performance, and brand alignment.',
  },
  {
    title: 'Platform-Based Solutions (Shopify, WooCommerce, Magento)',
    description: 'Fast deployment and robust features using popular e-commerce platforms.',
  },
  {
    title: 'Headless Commerce Development',
    description: 'Flexible and scalable frontends powered by APIs and modern frameworks like React or Vue.',
  },
  {
    title: 'Secure Payment Gateway Integration',
    description: 'Integration with Stripe, Razorpay, PayPal, and other gateways for secure transactions.',
  },
  {
    title: 'Inventory & Order Management Systems',
    description: 'Real-time stock control, order tracking, and automated updates to boost efficiency.',
  },
  {
    title: 'Mobile-Optimized Shopping Experiences',
    description: 'Responsive design and PWA-ready builds for seamless mobile commerce.',
  },
];

const process = [
  {
    title: 'Discovery & Strategy',
    description: 'Understand your business goals, target audience, and technical requirements',
  },
  {
    title: 'UI/UX Design & Wireframing',
    description: 'Create intuitive user journeys, product flows, and visually appealing storefront designs',
  },
  {
    title: 'Development & Implementation',
    description: 'Build frontend, backend, shopping cart, payment integration, and admin dashboard',
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Thorough testing for functionality, performance, security, and user experience',
  },
  {
    title: 'Deployment & Optimization',
    description: 'Launch your store and implement ongoing performance monitoring and conversion optimization',
  },
];

const whychooseus = [
  {
    title: 'Strategy-Driven Approach',
    description: "We understand your business goals and build solutions that meet customer expectations.",
  },
  {
    title: 'Security First',
    description: 'SSL, data encryption, secure checkout — your customer data is protected.',
  },
  {
    title: 'Performance Optimized',
    description: 'Fast loading times, clean code, and smooth checkout flow for better conversions.',
  },
  {
    title: 'Integrated Systems',
    description: 'CRM, ERP, shipping, marketing tools — all connected seamlessly.',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description: "From bug fixes to feature upgrades, we've got your store covered long-term.",
  },
];

const engagementOptions = [
  {
    title: "End-to-End E-commerce Development",
    description: "Complete store development from design to deployment with full customization",
  },
  {
    title: "Platform Migration & Upgrade",
    description: "Seamlessly move your existing store to a new platform with data preservation",
  },
  {
    title: "Maintenance & Support Packages",
    description: "Ongoing technical support, security updates, and performance optimization",
  },
];

export default function Ecommcontent() {
  return (
    <section>
      <Banner 
        heading="E-commerce Development Services"
        subtext="We build online stores that convert visitors into loyal customers"
        buttonText="Book Free Consultation"
        note="Whether you're starting small or scaling big, we create powerful e-commerce solutions tailored to your brand. From design to secure payments and smooth checkout experiences—we develop online stores that sell."
      />
      <InfoStats
        stats={[
          { number: "$6T", label: "Global e-commerce sales projected for 2024" },
          { number: "70%", label: "of shoppers prefer mobile-friendly online stores" },
          { number: "50%", label: "increase in trust with great shopping experiences" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings 
        title="Our E-commerce Development Services"
        Services={services}
      />
      <EcomTechToolsSection/>
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Transform Your Business with a Powerful Online Store"
        description="Our custom e-commerce solutions turn your vision into a revenue-generating digital storefront"
        buttonText="Request a Free Quote Today!"
        buttonLink="#"
        imageSrc={Ecommerceimg}
        imageAlt="E-commerce Development"
      />
      <DevelopmentProcess 
        title="Our E-commerce Development Process"
        Process={process}
      />
      <EngagementOptions
        title="How can we Collaborate"
        options={engagementOptions}
      />
    </section>
  );
}