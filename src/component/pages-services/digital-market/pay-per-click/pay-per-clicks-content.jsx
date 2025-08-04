
import Banner from "../../../common-ui/digital-market/banner";
import InfoStats from "../../../common-ui/digital-market/info-stats";
import HomeUIUX from "../../../common-ui/digital-market/digital-marketing-offering";
import ScheduleConsultation from "../../../common-ui/digital-market/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/digital-market/why-choose-us";
import OnlinePresence from "../../../common-ui/digital-market/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/digital-market/development-process";

// import EngagementOptions from "../../../common-ui/enterprise-services/engagement-options";

const WhatWeOffer = [
  {
    title: "PPC Strategy & Audit",
    description:
      "Campaign reviews, competitor insights, and budget planning for optimal ROI.",
  },
  {
    title: "Search Ads (Google & Bing)",
    description:
      "High-converting ads that show up when customers are searching for your services.",
  },
  {
    title: "Display & Remarketing Ads",
    description:
      "Visual banners that re-engage your website visitors across the web.",
  },
  {
    title: "Shopping Ads (Google Merchant Center)",
    description:
      "Product-based campaigns that drive eCommerce sales directly from search.",
  },
  {
    title: "Social PPC Campaigns",
    description:
      "Paid advertising on platforms like Facebook, Instagram, LinkedIn, and X.",
  },
  {
    title: "Landing Page Optimization",
    description:
      "We design and optimize PPC-specific landing pages to improve conversion rates.",
  },
];

const whychooseus = [
  {
    title: "ROI-Driven Execution",
    description:
      "We constantly analyze and tweak your campaigns to increase return on ad spend (ROAS).",
  },
  {
    title: "Full Transparency",
    description:
      "You get access to live dashboards, performance reports, and clear ad spend breakdowns.",
  },
  {
    title: "Precise Targeting",
    description:
      "Advanced segmentation by audience, location, device, interests, and behavior.",
  },
  {
    title: "Real-Time Optimization",
    description:
      "We monitor campaigns daily and adjust bids, keywords, and creatives proactively.",
  },
  {
    title: "Certified Experts",
    description:
      "Our team includes Google Ads and Meta Certified professionals.",
  },
];

const useCases = [
  "Launching a new product or service with instant visibility",
  "Retargeting abandoned carts or unconverted users",
  "Running seasonal sales or limited-time promotions",
  "Driving traffic to high-converting landing pages",
  "Capturing leads for B2B services through search campaigns"
];


function PpcContent() {
  return (
   <section>
    <Banner 
        heading="Pay-Per-Click (PPC) Advertising"
        subtext="Get immediate traffic. Maximize ROI. Scale with precision."
        buttonText="Book Free Consultation"
        note="Our PPC experts craft data-driven ad campaigns that bring qualified leads to your website fast — using platforms like Google Ads, Bing Ads, and social channels. Every click counts, and every dollar is tracked."
    />
    <InfoStats
        stats={[
        { number: "90%", label: "of mobile time inside apps, not browsers " },
        { number: "6.8 billion", label: "Smartphone users worldwide" },
        { number: "50%", label: "A well-built mobile app boost engagement, loyalty, and sales" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <HomeUIUX title="What We Offer" services={WhatWeOffer} />
    
    
    <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Pay Per Click Services"
      buttonText="Schedule a Consultation!"
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Let's Find the Pay Per Click Services right  for your business."
          buttonText = "CONTACT US"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "CRM services"
      />
      <DevelopmentProcess 
            title="Use Case"
            Process={useCases}
            />
   </section>
  );
}

export default PpcContent;