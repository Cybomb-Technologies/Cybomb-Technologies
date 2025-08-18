import Banner from "../../../common-ui/support-service/banner";
import InfoStats from "../../../common-ui/support-service/info-stats";
import WhyChooseUs from "../../../common-ui/support-service/why-choose-us";
import ServicesOfferings from "../../../common-ui/support-service/services-offerings";
import ScheduleConsultation from "../../../common-ui/support-service/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import placeholderImage from './../../../../assets/placeholder-image.webp';
import CloudOffers from '../../../common-ui/support-service/cloud-offers';
import awsImage from './../../../../assets/aws.avif';
import DevelopmentProcess from "../../../common-ui/support-service/development-process";
import OnlinePresence from "../../../common-ui/support-service/online-presence";


const whychooseus = [
  {
    title: 'Culture-Fit Hiring',
    description: "We prioritize talent who align with your values, tools, and communication style.",
  },
  {
    title: 'Pre-Vetted Talent Pool',
    description: 'Every resource undergoes technical screening and soft-skill evaluation.',
  },
  {
    title: 'Fast Onboarding',
    description: 'Deploy skilled professionals in days — not weeks.',
  },
  {
    title: 'Confidential & Secure',
    description: 'Contracts, NDAs, and compliance ensured across every engagement.',
  },
  {
    title: 'Performance Tracking',
    description: "Regular reports, check-ins, and KPIs to measure contribution.",
  },
];

const offerings = [
  {
    title: 'Dedicated Developers',
    description: 'Full-time remote professionals working exclusively on your project.',
  },
  {
    title: 'Specialized Experts',
    description: 'Access to niche skills like AI/ML, blockchain, cloud, and cybersecurity.',
  },
  {
    title: 'Cross-Functional Teams',
    description: 'Entire pods with developers, testers, designers, and PMs ready to plug in.',
  },
  {
    title: 'Short-Term Engagements',
    description: 'Flexible contracts for temporary needs or project surges.',
  },
  {
    title: 'Long-Term Augmentation',
    description: 'Reliable, scalable talent pipeline for ongoing initiatives.',
  },
  {
    title: 'Timezone-Aligned Support',
    description: 'Resources who work within your preferred timezone or shift.',
  },
];

const features = [
  'Accelerates project timelines without full-time hiring',
  'Adds specialized skills on-demand (DevOps, QA, AI/ML, etc.)',
  'Maintains control over project workflows and IP',
  'Reduces operational costs and HR overhead',
  'Increases agility in response to changing priorities',
];

const useCases = [
  "Scaling up quickly during peak development cycles",
  "Filling roles during employee leave or hiring freezes",
  "Adding temporary tech leads or senior architects",
  "Launching new products that need fast ramp-up",
  "Supplementing in-house teams for faster time-to-market"
];



function StaffServicesContent() {
  return (
   <section>
    <Banner 
        heading="Staff Augmentation Support"
        subtext="Scale your team without the overhead."
        buttonText="Book Free Consultation"
        note="Our staff augmentation solutions help you quickly bridge skill gaps, ramp up delivery, and access top-tier talent — all without long hiring cycles or infrastructure costs.
Whether you need one developer or an entire squad, we provide the right professionals to integrate seamlessly with your team."
    />
    <InfoStats
        stats={[
        { number: "900+", label: "In-house Expert Developers" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    /> 
     <ServicesOfferings 
          title="What We Offer" 
          items={offerings}
        />  
      
      <ScheduleConsultation
            heading="Reliable, secure, and scalable Staff Agumentation management you can count on."
            buttonText="Schedule a consultant"
            imageSrc={placeholderImage}
            imageAlt="CRM Consultation"
            Icon={MdSchedule}
          />
      <CloudOffers
      title="Why Staff Augmentation Matters"
      features={features}
      image={awsImage}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>

    <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
    <OnlinePresence 
              title = "Let's Find the right Staff Augumentation Services for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {placeholderImage}
              imageAlt = "CRM services"
          />


   </section>
  );
}   
export default StaffServicesContent;