
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
    title: "SEO Audits & Strategy",
    description:
      "Deep analysis of your site’s performance, keyword gaps, and competitor insights to craft a custom strategy.",
  },
  {
    title: "On-Page SEO Optimization",
    description:
      "Title tags, meta descriptions, URL structure, image alt texts, internal linking — all optimized for search.",
  },
  {
    title: "Technical SEO",
    description:
      "Site speed improvements, mobile-friendliness, crawlability, XML sitemaps, structured data, and Core Web Vitals.",
  },
  {
    title: "Content Strategy & Blog SEO",
    description:
      "SEO-friendly content creation that answers search queries, boosts authority, and ranks consistently.",
  },
  {
    title: "Backlink Building & Off-Page SEO",
    description:
      "Ethical link-building campaigns to increase domain authority and traffic sources.",
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile optimization, local citations, and review management to boost location-based visibility.",
  },
];

// Use like this inside any component/page:

const whychooseus = [
  {
    title: "Data-Driven Tactics",
    description:
      "We use analytics, keyword research, and competitor benchmarking to guide every move.",
  },
  {
    title: "White Hat Techniques Only",
    description:
      "Sustainable, Google-compliant methods — no spammy backlinks or keyword stuffing.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Monthly performance reports, keyword tracking, traffic trends, and clear ROI analysis.",
  },
  {
    title: "SEO + UX Approach",
    description:
      "We blend SEO with user experience — because good content should be found and loved.",
  },
  {
    title: "Collaborative Workflow",
    description:
      "We work closely with your team to align SEO with marketing, branding, and business goals.",
  },
];


const useCases = [
  "Boosting visibility for product/service pages",
  "Ranking local businesses in Google Maps",
  "Increasing blog traffic through long-tail content",
  "Building domain authority in competitive niches",
  "Recovering from Google algorithm penalties"
];


function SeoContent() {
  return (
   <section>
    <Banner 
        heading="Search Engine Optimization (SEO)"
        subtext="Drive traffic, increase visibility, and grow your business — organically."
        buttonText="Book Free Consultation"
        note="We help your website rise through the ranks of search engines with strategies tailored for your industry, goals, and audience. It’s not just about keywords; it’s about creating long-term, sustainable online growth."
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
      heading="Stay Ahead Of The Competition With Our Hosting Services"
      buttonText="Schedule a Consultation!"
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Let's Find the right Search Engine Optimization for your business."
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

export default SeoContent;