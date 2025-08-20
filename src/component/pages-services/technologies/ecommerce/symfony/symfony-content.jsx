import SymfonyTechnologiesSection from "./symfony-TechnologiesSection";
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
        
       
        <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Symfony Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <SymfonyTechnologiesSection/>
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