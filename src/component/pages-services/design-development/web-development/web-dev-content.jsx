import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/laptop-preview.png';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";
const services = [
 {
    title: 'Custom Website Design',
    description:
      'Unique layouts, illustrations, and interactive elements that match your brand identity',
  },
  {
    title: 'Responsive Web Development',
    description:
      'Optimized for all devices—phones, tablets, laptops, and desktops',
  },
  {
    title: 'Landing Pages & Marketing Sites',
    description:
      'Perfect for promotions, product launches, or lead generation with high conversions',
  },
  {
    title: 'Business & Portfolio Websites',
    description:
      'Showcase your company, services, projects, and team with clean, professional design',
  },
  {
    title: 'eCommerce Website Development',
    description:
      'Online stores with shopping carts, secure payments, inventory systems, and more',
  },
  {
    title: 'Content Management Systems (CMS)',
    description:
      'Build websites you can update yourself using WordPress, Webflow, or custom CMS',
  },
  {
    title: 'Blog/News/Community Platforms',
    description:
      'Set up blogs or community-driven platforms with user interaction, comments, and moderation',
  },
  {
    title: 'Website Redesign & Optimization',
    description:
      'Refresh old websites with a modern look, better performance, and improved usability',
  },
];

const process = [
 {
    title: 'Discovery & Planning',
    description: "We understand your brand, users, and business goals",
  },
  {
    title: 'Wireframing & Design',
    description: "Low-fidelity wireframes and high-fidelity mockups created using Figma or XD",
  },
  {
    title: 'Development',
    description: "Frontend and backend development with best practices and accessibility in mind",
  },
  {
     title: 'Testing & Feedback',
    description: "Cross-browser testing, mobile responsiveness checks, and client approval rounds",
  },
  {
     title: 'Deployment & Launch',
    description: "Deploy your site on a reliable host, configure analytics, and ensure SEO readiness",
  },
];

const whychooseus = [
{
    title: 'Custom-First Approach',
    description: "We don’t use cookie-cutter templates-everything is made to fit you",
  },
  {
    title: 'Mobile & SEO Ready',
    description: 'Optimized for search engines and all screen sizes',
  },
  {
    title: 'Speed & Performance',
    description: 'We use modern code and optimization techniques to keep your site fast',
  },
  {
    title: 'You’re in Control',
    description: "Easily update your content, images, or blogs without a developer",
  },
  {
    title: 'Ongoing Support',
    description: "We're here for updates, fixes, scaling, and improvements",
  },
];

const engagementOptions = [
  {
    title: "From-Scratch Website Builds",
    description: "Start with an idea—we’ll handle the design, content, coding, and launch",
  },
  {
    title: "Website Upgrades & Redesigns",
    description: "Already have a site? Let’s improve the look, speed, and UX",
  },
  {
    title: "Landing Page Development",
    description: "Need a fast, high-conversion page for your campaign? We’ve got you covered",
  },
];

export default function WebDevContent() {
  return (
    <section>
    
    <Banner 
        heading="Website Development Services"
        subtext="Beautiful, fast, and functional websites tailored to your brand and business goals"
        buttonText="Book Free Consultation"
        note="We design and build websites that don’t just look good—they work flawlessly. Whether it’s a landing page, business portfolio, eCommerce site, or web portal, our website development team ensures a smooth experience from idea to launch."
    />
    <InfoStats
        stats={[
        { number: "94+", label: "of first impressions relate to website design" },
        { number: "75%", label: "of trust increased after delivering well-built website" },
        { number: "50%", label: "of web traffic comes from mobile devices—mobile-first is a must!" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Website Development Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom Website development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Website Development"
      />
    <DevelopmentProcess 
      title="Our Website Development Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}