
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
    title: "Reputation Audits",
    description:
      "We evaluate your brand’s digital footprint, sentiment, and search visibility.",
  },
  {
    title: "Review & Rating Management",
    description:
      "Monitor, respond to, and improve reviews across platforms like Google, Yelp, Trustpilot, Glassdoor, etc.",
  },
  {
    title: "Negative Content Suppression",
    description:
      "Push down negative search results through strategic SEO and content development.",
  },
  {
    title: "Social Media Monitoring & Engagement",
    description:
      "We track mentions and help you maintain a consistent, positive brand tone.",
  },
  {
    title: "Brand Sentiment Analysis",
    description:
      "AI-powered insights to understand how people feel about your brand online.",
  },
  {
    title: "Proactive Reputation Building",
    description:
      "Publish positive press, success stories, and customer testimonials to enhance brand image.",
  },
];

const whychooseus = [
  {
    title: "Strategic, Long-Term Focus",
    description:
      "We don’t just react — we build a proactive reputation strategy for future-proof credibility.",
  },
  {
    title: "Transparency & Reporting",
    description:
      "Regular updates, sentiment trends, and actions taken — so you're always in the loop.",
  },
  {
    title: "Crisis Management Ready",
    description:
      "Swift response systems to minimize damage during reputation incidents.",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "From Google search results to Reddit threads, we manage your brand everywhere it lives.",
  },
  {
    title: "Tailored for You",
    description:
      "Custom ORM approaches based on your industry, goals, and audience behavior.",
  },
];

const useCases = [
  "Managing online reviews after a product or service mishap",
  "Building personal reputation for thought leaders or CEOs",
  "Suppressing outdated or negative news articles",
  "Monitoring brand mentions and sentiments across social media",
  "Restoring trust after a PR or social media crisis"
];

function OrmContent() {
  return (
   <section>
    <Banner 
        heading="Online Reputation Management (ORM)"
        subtext="Protect your brand. Build trust. Shape perception."
        buttonText="Book Free Consultation"
        note="In today’s digital world, your reputation is everything. We help monitor, manage, and enhance your online presence so your audience sees the best version of your brand — always.
Whether you're a business, entrepreneur, or public figure, we provide tailored ORM strategies that keep you in control of your narrative."
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
      heading="Stay Ahead Of The Competition With Our Online Reputation Management Services"
      buttonText="Schedule a Consultation!"
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Let's Find the Online Reputation Management Services right for your business."
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

export default OrmContent;