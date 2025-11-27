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

import devOpsSupportImage from './../../../../assets/technologies/devops-matters-img.jpg';

const whychooseus = [
  {
    title: 'Full-Cycle DevOps Expertise',
    description: 'From source control to production deployment, we manage every step.',
  },
  {
    title: 'Faster Time-to-Market',
    description: 'Get features out faster, more reliably, and with full traceability.',
  },
  {
    title: 'Security-First Mindset',
    description: 'Security practices baked into the DevOps pipeline (DevSecOps-ready).',
  },
  {
    title: 'Multi-Cloud Experience',
    description: 'Deep expertise in AWS, Azure, and Google Cloud environments.',
  },
  {
    title: 'Metrics-Driven Approach',
    description: 'We measure, analyze, and continuously improve your delivery pipeline.',
  },
];

const offerings = [
  {
    title: 'CI/CD Pipeline Implementation',
    description: 'Automate code integration, testing, and deployment with Jenkins, GitHub Actions, GitLab CI, or Bitbucket Pipelines.',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Provision cloud infrastructure using Terraform, AWS CloudFormation, Ansible, and more.',
  },
  {
    title: 'Containerization & Orchestration',
    description: 'Deploy scalable microservices using Docker, Kubernetes, Helm, and ECS.',
  },
  {
    title: 'Cloud DevOps (AWS, Azure, GCP)',
    description: 'End-to-end DevOps solutions on major cloud platforms including cost optimization and security integration.',
  },
  {
    title: 'Monitoring & Logging Setup',
    description: 'Implement tools like Prometheus, Grafana, ELK Stack, and Datadog for real-time observability.',
  },
  {
    title: 'DevSecOps Integration',
    description: 'Embed security into the DevOps lifecycle with automated vulnerability scans and policy enforcement.',
  },
];

const features = [
  'Reduces deployment time and manual errors',
  'Increases release frequency and software quality',
  'Enables seamless collaboration between dev and ops teams',
  'Automates infrastructure provisioning and testing',
  'Improves scalability, monitoring, and system resilience',
];

const useCases = [
  "Automating build-test-deploy workflows for web/mobile apps",
  "Managing scalable cloud infrastructure with IaC",
  "Migrating monolithic apps to containerized microservices",
  "Integrating security scans into the CI/CD pipeline",
  "Setting up auto-scaling and monitoring for critical services"
];

function DevOpsSupportContent() {
  return (
   <section>
    <Banner 
        heading="DevOps Services"
        subtext="Accelerate your development. Automate your operations."
        buttonText="Book Free Consultation"
        note="Our DevOps services bridge the gap between development and IT operations — helping you deliver software faster, with fewer errors, and with greater scalability.
Whether you’re a startup adopting CI/CD or an enterprise looking to optimize workflows, we build DevOps pipelines tailored to your tech stack and business goals."
    />
    <InfoStats
        stats={[
          { number: "Full-stack", label: "Support across frontend, backend & DevOps" },
          { number: "Real-time", label: "Monitoring for faster bug resolution" },
          { number: "50%", label: "Lower Mean Time to Repair (MTTR)" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    /> 
     <ServicesOfferings 
          title="What We Offer" 
          items={offerings}
        />  
      
      <ScheduleConsultation
            heading="Stay Ahead Of The Competition With Our DevOps Services"
            buttonText="Schedule a Consultation!"
            imageSrc={scheduleConsultImg}
            imageAlt="DevOps Consultation"
            Icon={MdSchedule}
          />
      <CloudOffers
      title="Why DevOps Matters"
      features={features}
      image={devOpsSupportImage}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>

    <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
    <OnlinePresence 
              title = "Let's Find the right DevOps Services for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {contactUsImg}
              imageAlt = "DevOps services"
          />


   </section>
  );
}   
export default DevOpsSupportContent;