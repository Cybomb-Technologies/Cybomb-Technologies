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

import digitalSupportImg from './../../../../assets/technologies/digital-fulfillment-matters-img.jpg';

const whychooseus = [
  {
    title: 'End-to-End Fulfillment Expertise',
    description: 'From storefront to delivery, we manage the entire digital journey.',
  },
  {
    title: 'Security First',
    description: 'Encrypted distribution, license protection, and compliance with GDPR, PCI-DSS.',
  },
  {
    title: 'Custom Workflows',
    description: 'We tailor fulfillment logic to your exact product types and user flows.',
  },
  {
    title: 'Global-Ready Solutions',
    description: 'Serve customers across borders with localization, currency, and language support.',
  },
  {
    title: 'Ongoing Support',
    description: 'We help you manage, troubleshoot, and optimize your fulfillment systems.',
  },
];

const offerings = [
  {
    title: 'Digital Product Delivery Systems',
    description: 'Set up secure, automated delivery for files, licenses, media, and software.',
  },
  {
    title: 'Subscription & Licensing Management',
    description: 'Handle user access, renewals, and entitlement with ease.',
  },
  {
    title: 'Order Processing & Workflow Automation',
    description: 'Automate payment verification, fulfillment, and notifications.',
  },
  {
    title: 'Platform Integrations',
    description: 'Connect with platforms like Shopify, WooCommerce, Stripe, PayPal, and CRMs.',
  },
  {
    title: 'Secure Content Distribution',
    description: 'Prevent piracy and unauthorized access with DRM and encryption.',
  },
  {
    title: 'Performance Monitoring & Reporting',
    description: 'Track downloads, user activity, and fulfillment success in real time.',
  },
];

const features = [
  'Enables instant delivery of digital products',
  'Reduces operational costs with automation',
  'Enhances customer experience and trust',
  'Ensures secure transactions and licensing',
  'Supports global delivery and compliance',
];

const useCases = [
  "Delivering digital downloads like eBooks, templates, software, and assets",
  "Managing licenses for SaaS or subscription-based tools",
  "Automating online course access and completion tracking",
  "Fulfilling virtual event tickets and onboarding packages",
  "Handling customer entitlements for cloud-based services",
];

function DigitalFulfilmentSupportContent() {
  return (
   <section>
    <Banner 
        heading="Digital Fulfillment Services"
        subtext="Deliver seamless digital experiences from purchase to delivery."
        buttonText="Book Free Consultation"
        note="Our digital fulfillment solutions help you manage, distribute, and support digital products efficiently — ensuring faster delivery, better customer satisfaction, and secure transactions.
From SaaS subscriptions to digital downloads, we streamline every step of your digital goods lifecycle."
    />
    <InfoStats
        stats={[
          { number: "2×", label: "Faster delivery of digital assets" },
          { number: "Automated", label: "Workflows reduce operational costs" },
          { number: "Streamlined", label: "Processes for content, ads & campaigns" }
        ]}
      caption="Partnered with Startups and"
      highlight="Fortune 500 Companies"
    /> 
     <ServicesOfferings 
          title="What We Offer" 
          items={offerings}
        />  
      
      <ScheduleConsultation
            heading="Stay Ahead Of The Competition With Our Digital Fulfilment Services"
            buttonText="Schedule a Consultation!"
            imageSrc={scheduleConsultImg}
            imageAlt="Digital Consultation"
            Icon={MdSchedule}
          />
      <CloudOffers
      title="Why Digital Fulfilment Support Services Matters"
      features={features}
      image={digitalSupportImg}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>

    <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
    <OnlinePresence 
              title = "Let's Find the right Digital Fulfilment Services for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {contactUsImg}
              imageAlt = "Digital Fulfilment services"
          />


   </section>
  );
}   
export default DigitalFulfilmentSupportContent;