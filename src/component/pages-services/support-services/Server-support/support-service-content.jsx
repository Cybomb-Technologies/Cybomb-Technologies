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
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";


const whychooseus = [
  {
    title: 'Security First Approach',
    description: "We follow strict protocols and compliance standards to keep your servers secure.",
  },
  {
    title: 'Multi-Platform Expertise',
    description: 'Support across cloud (AWS, Azure, GCP), VPS, on-prem, and hybrid environments.',
  },
  {
    title: 'Transparent Reporting',
    description: 'Get monthly performance reports, health checks, and usage audits.',
  },
  {
    title: 'Experienced Team',
    description: 'Certified server admins and engineers with years of enterprise experience.',
  },
  {
    title: 'Custom SLAs & Support Plans',
    description: "Flexible support tiers tailored to your technical and business needs.",
  },
];

const offerings = [
  {
    title: '24/7 Server Monitoring & Alerts',
    description: 'Real-time monitoring for uptime, load, performance, and errors.',
  },
  {
    title: 'Server Setup & Configuration',
    description: 'Installation and fine-tuning of Windows, Linux, and cloud servers.',
  },
  {
    title: 'Patch Management & Updates',
    description: 'Regular OS and software patching to maintain security and performance.',
  },
  {
    title: 'Security Hardening',
    description: 'Firewall setup, intrusion detection, and best-practice configurations.',
  },
  {
    title: 'Server Backup & Disaster Recovery',
    description: 'Automated backups with recovery plans to minimize data loss.',
  },
  {
    title: 'Domain & Email Hosting',
    description: 'Load balancing, memory tuning, disk cleanup, and resource scaling.',
  },
];

const features = [
  'Ensures uninterrupted access to critical business applications',
  'Prevents downtime through proactive monitoring and maintenance',
  'Enhances server speed, performance, and uptime',
  'Detects and mitigates security vulnerabilities early',
  'Reduces in-house IT workload and operational risk',
];

const useCases = [
  "Managing dedicated or virtual private servers for web and app hosting",
  "Supporting production environments in AWS, Azure, or Google Cloud",
  "Securing customer data and reducing vulnerabilities in compliance-sensitive industries",
  "Backing up and restoring mission-critical data across locations",
  "Optimizing resource allocation for high-traffic or seasonal loads"
];



function SupportServicesContent() {
  return (
   <section>
    <Banner 
        heading="Server Support"
        subtext="Empowering your dev team with reliable technical assistance and expertise."
        buttonText="Book Free Consultation"
        note="Our development support services help you overcome bottlenecks, fix bugs faster, streamline your workflows, and scale your software projects with confidence — whether you're building in-house or outsourcing.
From frontend glitches to backend bottlenecks, we’re your technical co-pilot."
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
            heading="Reliable, secure, and scalable server management you can count on."
            buttonText="Our server support services ensure that your critical systems stay online, optimized, and protected — 24/7. We help businesses maintain, monitor, and secure their servers across cloud, virtual, and dedicated environments with proactive expertise."
            imageSrc={placeholderImage}
            imageAlt="CRM Consultation"
            Icon={MdSchedule}
          />
      <CloudOffers
      title="Why Server Support Matters"
      features={features}
      image={awsImage}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>

    <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
    <OnlinePresence 
              title = "Let's Find the right Server Support for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {placeholderImage}
              imageAlt = "CRM services"
          />


   </section>
  );
}   
export default SupportServicesContent;