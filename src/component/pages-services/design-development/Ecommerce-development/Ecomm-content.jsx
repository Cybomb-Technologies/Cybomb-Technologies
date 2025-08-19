import AgileProcess from "../../../common-ui/agile-process/agile-process";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import placeholderImage from './../../../../assets/placeholder-image.webp';

 const services = [
  {
    title: 'Custom E-Commerce Website Development',
    description:
      'Fully tailored storefronts with intuitive navigation, fast performance, and brand alignment.',
  },
  {
    title: 'Platform-Based Solutions (Shopify, WooCommerce, Magento)',
    description:
      'Fast deployment and robust features using popular e-commerce platforms.',
  },
  {
    title: 'Headless Commerce Development',
    description:
      'Flexible and scalable frontends powered by APIs and modern frameworks like React or Vue.',
  },
  {
    title: 'Secure Payment Gateway Integration',
    description:
      'Integration with Stripe, Razorpay, PayPal, and other gateways for secure transactions.',
  },
  {
    title: 'Inventory & Order Management Systems',
    description:
      'Real-time stock control, order tracking, and automated updates to boost efficiency.',
  },
  {
    title: 'Mobile-Optimized Shopping Experiences',
    description:
      'Responsive design and PWA-ready builds for seamless mobile commerce.',
  },

];

const process = [
  {
    title: 'Single Vendor Store',
    description: "Perfect for brands or businesses with their own inventory",
  },
  {
    title: 'Design & Wireframing',
    description: "Amazon-style platforms with seller logins, commissions, and dashboards",
  },
  {
    title: 'Development & Iteration',
    description: "Code frontend, backend, cart system, and payment flow",
  },
  {
    title: 'Testing & Optimization',
    description: "Deploy your store, provide training, and offer maintenance",
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
    description: "From bug fixes to feature upgrades, we’ve got your store covered long-term.",
  },
];

function Ecommcontent() {
  return (
    <>
      <ServicesOfferings Services={services} title={"What We Offer"}/>
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom E-commerce Development  turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Web Development"
      />
       <DevelopmentProcess 
      title="Our Development Process"
      Process={process}
      
      />
      <AgileProcess/>
      <StillNotSure/>
    </>
  );
}

export default Ecommcontent;