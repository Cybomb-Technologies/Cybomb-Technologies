import SymfonyTechnologiesSection from "./symfony-TechnologiesSection";
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

const services = [
  {
    title: 'Custom Symfony Application Development',
    description:
      'Design and develop tailor-made web applications, portals, and enterprise solutions using the Symfony framework.',
  },
  {
    title: 'API Development & Integration',
    description:
      'Build RESTful and GraphQL APIs or integrate third-party services for seamless data exchange across platforms.',
  },
  {
    title: 'Symfony Migration & Upgrades',
    description:
      'Migrate legacy PHP applications to Symfony or upgrade to the latest Symfony version with minimal disruption.',
  },
  {
    title: 'eCommerce Development with Symfony',
    description:
      'Leverage Symfony’s flexibility to build custom eCommerce solutions or integrate with platforms like Sylius and Magento.',
  },
  {
    title: 'Cloud & DevOps Integration',
    description:
      'Deploy Symfony applications on AWS, Azure, or Google Cloud with CI/CD pipelines for smooth releases.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Fine-tune application speed, scalability, and database performance for high-traffic environments.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Implement advanced security measures, including encryption, authentication, and GDPR compliance.',
  },
  {
    title: 'Ongoing Maintenance & Support',
    description:
      'Continuous monitoring, bug fixes, and enhancements to keep your Symfony applications running flawlessly.',
  },
];

const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Prepay development hours for up to 6 months — ideal for periodic updates, integrations, or bug fixes.',
  },
  {
    title: 'Dedicated Symfony Developers',
    description: 'Hire full-time Symfony experts for focused, long-term projects.',
  },
];

const whychooseus = [
  {
    title: 'Expert Symfony Developers',
    description: 'Work with specialists who deeply understand the framework’s ecosystem.',
  },
  {
    title: 'Faster Time-to-Market',
    description: 'Reusable Symfony components speed up development while maintaining quality.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Applications built to grow with your business.',
  },
  {
    title: 'Agile Development',
    description: 'Iterative, transparent, and milestone-driven delivery.',
  },
  {
    title: 'Security First',
    description: 'Proven practices to protect your applications and data.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'Post-launch support to keep your application optimized and updated.',
  },
];
const databaseDescription = [
  {
    name: "PHP",
    description: "PHP is a popular server-side scripting language used for building dynamic and robust web applications.",
    icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg", // Replace with actual icon path
    iconColors : "linear-gradient(135deg,rgb(146, 206, 238),rgb(170, 225, 243))"
  },
  {
    name: "Symfony CLI",
    description: "Symfony CLI is a command-line tool that streamlines the development, management, and deployment of Symfony PHP applications.",
    icon: "https://www.vectorlogo.zone/logos/symfony/symfony-icon.svg", // Replace with actual icon path
    iconColors : "linear-gradient(135deg, #d3d3d3, #e8e8e8)"
  },
  {
    name: "Twig",
    description: "Twig is a flexible and secure templating engine for PHP that simplifies dynamic content rendering.",
    icon: "https://www.svgrepo.com/show/374142/twig.svg",
    iconColors : "linear-gradient(135deg,rgb(169, 243, 137),rgb(212, 253, 192))" // Replace with actual icon path
  },
  {
    name: "Composer",
    description: "Composer is a dependency manager for PHP that simplifies package installation, versioning, and project management.",
    icon: "https://www.svgrepo.com/show/85929/composer.svg",
    iconColors : "linear-gradient(135deg,rgb(188, 227, 255),rgb(172, 251, 255))" // Replace with actual icon path
  },
  {
    name: "Doctrine ORM",
    description: "Doctrine ORM is a powerful PHP object-relational mapper that simplifies database interactions with object-oriented models.",
    icon: "https://icon.icepanel.io/Technology/svg/Doctrine.svg",
    iconColors : "linear-gradient(135deg,rgb(255, 220, 220),rgb(251, 208, 208))" // Replace with actual icon path
  },
  {
    name: "PostgreSQL",
    description: "PostgreSQL is a powerful, open-source relational database known for scalability, reliability, and ACID compliance.",
    icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    iconColors :"linear-gradient(135deg, #a0e1ff, #c1f0ff)" // pastel light blue// Replace with actual icon path

  }
];
function ShopifyContent() {
  return (
   <section>
    <Banner 
        heading="Symfony Development Services"x 
        subtext="Build robust, scalable, and high-performance web applications with Symfony."
        buttonText="Book Free Consultation"
        note="Empower your business with a secure, enterprise-grade PHP framework trusted by global brands. Fill out the form to get started — we’ll reach out within 24 hours."
    />
    <InfoStats
        stats={[
          { number: "70%", label: "Backend framework for commerce apps" },
          { number: "60%", label: "Modular component reuse" },
          { number: "65%", label: "Secure enterprise adoption" }
        ]}
        caption="Trusted by startups to"
        highlight="Fortune 500 enterprises"
    />
    <ServicesOfferings 
    title = "Our Symfony Offerings"
    Services={services}/>
        
       
        

    <WhyChooseUs ChooseUs={whychooseus}/>
<ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Symfony Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    <SymfonyTechnologiesSection/>
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