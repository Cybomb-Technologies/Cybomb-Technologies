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
    title: 'Full-Stack Proficiency',
    description: "Support across frontend (React, Angular, Vue), backend (Node.js, Python, PHP), and mobile stacks.",
  },
  {
    title: 'Faster Turnaround',
    description: 'Quick responses and ticket resolution to keep projects on track.',
  },
  {
    title: 'Flexible Engagements',
    description: 'Hourly, daily, or sprint-based support depending on your project needs.',
  },
  {
    title: 'QA-Backed Fixes',
    description: 'Every change is validated to maintain system stability and performance.',
  },
  {
    title: 'Dev-Focused Documentation',
    description: "Clear guidance and notes to help your internal team ramp up quickly.",
  },
];

const offerings = [
  {
    title: 'Bug Fixing & Troubleshooting',
    description: 'Swift identification and resolution of issues in frontend, backend, or APIs.',
  },
  {
    title: 'Code Review & Optimization',
    description: 'Improve performance, readability, and maintainability of your codebase.',
  },
  {
    title: 'Build & Deployment Support',
    description: 'Assist with CI/CD pipelines, build errors, and automated deployments.',
  },
  {
    title: 'Technical Consultation',
    description: 'Advice on choosing the right stacks, architectures, or tools.',
  },
  {
    title: 'Third-Party API Integration Support',
    description: 'Help connecting external tools or services to your system.',
  },
  {
    title: 'Version Control & Branching Guidance',
    description: 'Best practices for using Git, branching strategies, and team workflows.',
  },
];

const features = [
  'Keeps development velocity high and consistent',
  'Reduces downtime from bugs, regressions, or broken builds',
  'Supports cross-functional teams (frontend, backend, DevOps, QA)',
  'Helps adopt new technologies or frameworks smoothly',
  'Improves code quality, performance, and maintainability',
];

const useCases = [
  "Resolving post-deployment issues or emergency bug fixes",
  "Assisting startups without a full in-house dev team",
  "Supporting legacy systems while migrating to modern stacks",
  "Optimizing APIs and slow database queries",
  "Providing extra bandwidth during product launches or code freezes"
];

function DevelopmentSupportContent() {
  return (
   <section>
    <Banner 
        heading="Development Support"
        subtext="Empowering your dev team with reliable technical assistance and expertise."
        buttonText="Book Free Consultation"
        note="Our development support services help you overcome bottlenecks, fix bugs faster, streamline your workflows, and scale your software projects with confidence — whether you're building in-house or outsourcing.
From frontend glitches to backend bottlenecks, we’re your technical co-pilot."
    />
    <InfoStats
        stats={[
          { number: "3×", label: "Faster deployments with CI/CD pipelines" },
          { number: "99.9%", label: "Uptime achieved with proactive monitoring" },
          { number: "40%", label: "Cost reduction through automation" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    /> 
     <ServicesOfferings 
          title="What We Offer" 
          items={offerings}
        />  
      
      <ScheduleConsultation
            heading="Stay Ahead Of The Competition With Our Development Support"
            buttonText="Schedule a Consultation!"
            imageSrc={placeholderImage}
            imageAlt="CRM Consultation"
            Icon={MdSchedule}
          />
      <CloudOffers
      title="Why Development Support Matters"
      features={features}
      image={awsImage}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>

    <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
    <OnlinePresence 
              title = "Let's Find the right Development Support for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {placeholderImage}
              imageAlt = "CRM services"
          />


   </section>
  );
}   
export default DevelopmentSupportContent;