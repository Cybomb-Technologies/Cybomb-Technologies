import Banner from "../../../common-ui/support-service/banner";
import InfoStats from "../../../common-ui/support-service/info-stats";
import WhyChooseUs from "../../../common-ui/support-service/why-choose-us";
import ServicesOfferings from "../../../common-ui/support-service/services-offerings";
import ScheduleConsultation from "../../../common-ui/support-service/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import CloudOffers from '../../../common-ui/support-service/cloud-offers';
import DevelopmentProcess from "../../../common-ui/support-service/development-process";
import OnlinePresence from "../../../common-ui/support-service/online-presence";

import scheduleConsultImg from './../../../../assets/contact/schedule-a-consultation-img3.jpg';
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';
import itSupportImg from './../../../../assets/technologies/it-support-matters-img.jpg';

const whychooseus = [
  {
    title: 'Business-Aligned IT Strategy',
    description: 'We align IT support with your goals, processes, and compliance requirements.',
  },
  {
    title: 'Fast Response & Resolution Times',
    description: 'We prioritize uptime and quick recovery to minimize operational impact.',
  },
  {
    title: 'Security-Focused Support',
    description: 'Every layer of our IT support includes security best practices.',
  },
  {
    title: 'Experienced, Certified Professionals',
    description: 'Our team includes experts in Microsoft, Linux, Cisco, AWS, Azure, and more.',
  },
  {
    title: 'Scalable for Growth',
    description: 'From startups to enterprises — we adapt to your evolving IT needs.',
  },
];

const offerings = [
  {
    title: 'Helpdesk & Remote Support',
    description: 'Fast issue resolution for hardware, software, and network problems via phone, chat, or remote login.',
  },
  {
    title: 'On-Site IT Support',
    description: 'Physical support for critical infrastructure, installations, and emergencies.',
  },
  {
    title: 'Proactive Monitoring & Maintenance',
    description: '24/7 system monitoring, performance tuning, and health checks to prevent issues before they occur.',
  },
  {
    title: 'Patch Management & Updates',
    description: 'Regular software, OS, and firmware updates to keep everything secure and efficient.',
  },
  {
    title: 'User Onboarding & Access Control',
    description: 'Smooth setup of new employees, devices, and account permissions.',
  },
  {
    title: 'Disaster Recovery & Backup Support',
    description: 'Ensure data continuity and quick restoration in case of failures or attacks.',
  },
];

const features = [
  'Minimizes downtime and boosts employee productivity',
  'Ensures security through timely patches and updates',
  'Supports your team with expert help when needed',
  'Reduces tech-related disruptions and operational risks',
  'Allows you to focus on your core business goals',
];

const useCases = [
  "Resolving software errors, login issues, and system crashes",
  "Providing onboarding/offboarding support for employees",
  "Handling hardware malfunctions and printer/network issues",
  "Performing system health checks and security audits",
  "Supporting hybrid/remote workforce with secure IT environments"
];

function ITSupportContent() {
  return (
   <section>
    <Banner 
        heading="IT Support Services"
        subtext="Keep your business running — smoothly, securely, and without interruptions."
        buttonText="Book Free Consultation"
        note="Our IT support solutions ensure that your systems, software, and teams stay productive and protected with fast response times, expert troubleshooting, and proactive maintenance.
From small businesses to large enterprises, we offer scalable support tailored to your operations."
    />
    <InfoStats
        stats={[
          { number: "24/7", label: "Helpdesk coverage worldwide" },
          { number: "95%+", label: "First-contact resolution rate" },
          { number: "ITSM", label: "Aligned with ServiceNow & Jira" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    /> 
     <ServicesOfferings 
          title="What We Offer" 
          items={offerings}
        />  
      
      <ScheduleConsultation
            heading="Stay Ahead Of The Competition With Our IT Support Services"
            buttonText="Schedule a Consultation!"
            imageSrc={scheduleConsultImg}
            imageAlt="DevOps Consultation"
            Icon={MdSchedule}
          />
      <CloudOffers
      title="Why IT Support Services Matters"
      features={features}
      image={itSupportImg}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>

    <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
    <OnlinePresence 
              title = "Let's Find the right IT Support Services for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {contactUsImg}
              imageAlt = "IT support services"
          />


   </section>
  );
}   
export default ITSupportContent;