
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
    title: "Social Media Strategy & Planning",
    description:
      "Platform selection, audience targeting, and goal-driven campaign planning.",
  },
  {
    title: "Content Creation & Design",
    description:
      "Branded graphics, carousels, videos, stories, and reels that captivate and convert.",
  },
  {
    title: "Community Management",
    description:
      "Comment moderation, engagement, reputation management, and messaging.",
  },
  {
    title: "Ad Campaign Management",
    description:
      "Facebook Ads, Instagram Ads, LinkedIn Ads — full-funnel paid media strategies.",
  },
  {
    title: "Analytics & Performance",
    description:
      "Deep insights into engagement, reach, conversions, and growth trends.",
  },
  {
    title: "Influencer & Partnership ",
    description:
      "Identify, collaborate, and manage partnerships with relevant influencers.",
  },
];


const whychooseus = [
  {
    title: "Results-Oriented Campaigns",
    description:
      "We align posts and ads to your business goals — from awareness to sales.",
  },
  {
    title: "Creative-First Approach",
    description:
      "Engaging visuals and compelling captions that resonate with your audience.",
  },
  {
    title: "Timely Execution",
    description:
      "We capitalize on trends, seasons, and events for real-time engagement.",
  },
  {
    title: "Multi-Platform Expertise",
    description:
      "We work across LinkedIn, Instagram, Facebook, X, TikTok, YouTube, and more.",
  },
  {
    title: "Agile Optimization",
    description:
      "We monitor, analyze, and adjust strategies for maximum performance.",
  },
];



const useCases = [
  "Running product launch or seasonal campaigns",
  "Building B2B authority on LinkedIn",
  "Generating leads through Instagram story ads",
  "Creating viral brand awareness content",
  "Managing daily engagement and brand voice online"
];


function SocialContent() {
  return (
   <section>
            <Banner  
        heading=" Social Media Marketing"
        subtext="Engage your audience. Build your brand. Drive real results. "
        buttonText="Book Free Consultation"
        note="We craft targeted social media strategies that grow your presence across platforms like Instagram, LinkedIn, Facebook, and X (Twitter). Whether it’s awareness, engagement, or conversions — our campaigns are built for impact."
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

export default SocialContent;