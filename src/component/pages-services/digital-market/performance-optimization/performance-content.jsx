
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
    title: "Website Speed Optimization",
    description:
      "Minify code, compress assets, lazy load media, and more to reduce load times.",
  },
  {
    title: "Mobile Performance Tuning",
    description:
      "Optimize for responsive behavior, mobile-first indexing, and fast rendering on mobile devices.",
  },
  {
    title: "Frontend & Backend Optimization",
    description:
      "Code refactoring, modular design, and efficient database queries for smoother workflows.",
  },
  {
    title: "Core Web Vitals & Lighthouse Compliance",
    description:
      "Improve metrics like FID, LCP, and CLS for better Google rankings and usability.",
  },
  {
    title: "Server-Side Optimization",
    description:
      "Optimize caching, load balancing, and server configuration to reduce latency.",
  },
  {
    title: "Cloud & CDN Setup",
    description:
      "Global asset delivery and caching via CDNs and cloud hosting for faster access anywhere.",
  },
];

const whychooseus = [
  {
    title: "Speed-Centric Mindset",
    description:
      "Every second counts. We obsess over milliseconds to keep your users engaged.",
  },
  {
    title: "Diagnostic Precision",
    description:
      "We go beyond surface-level fixes — using advanced tools to pinpoint and eliminate bottlenecks.",
  },
  {
    title: "End-to-End Optimization",
    description:
      "From code to content delivery, we tune every layer of your digital stack.",
  },
  {
    title: "Continuous Performance Monitoring",
    description:
      "Real-time performance tracking with alerts and regular audits.",
  },
  {
    title: "SEO & UX Aligned",
    description:
      "Our optimizations boost not just performance, but also rankings and engagement.",
  },
];

const useCases = [
  "Reducing bounce rates by cutting page load times",
  "Preparing apps for product launches or media campaigns",
  "Optimizing performance of high-traffic eCommerce platforms",
  "Improving conversion rates on slow-performing landing pages",
  "Meeting Google’s Core Web Vitals thresholds for SEO benefits",
];


function PerformanceContent() {
  return (
   <section>
    <Banner 
        heading="Performance Optimization"
        subtext="Speed up. Scale smart. Deliver seamless experiences."
        buttonText="Book Free Consultation"
        note="We fine-tune your websites, apps, and systems to perform at peak efficiency — improving load times, responsiveness, user experience, and resource usage across platforms and devices.
Whether you're battling slow page loads, high bounce rates, or scalability issues, our optimization services make sure your digital platforms never hold you back."
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
      heading="Stay Ahead Of The Competition With Our Performance Optimization Services"
      buttonText="Schedule a Consultation!"
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Let's Find the Performance Optimization Services right  for your business."
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

export default PerformanceContent;