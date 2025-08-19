import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";

const services = [
  {
    title: 'Product Discovery & Research',
    description:
      'Deep user research, competitor analysis, and design workshops to define goals and build empathy with your audience.',
  },
  {
    title: 'Wireframing & Prototyping',
    description:
      'Visualize the experience early with low to high-fidelity wireframes and interactive prototypes for real-time feedback.',
  },
  {
    title: 'UI Design & Branding',
    description:
      'Clean, modern interfaces aligned with your brand identity. Typography, color, layout, and spacing—all refined for clarity and appeal.',
  },
  {
    title: 'Interaction & Motion Design',
    description:
      'Microinteractions and animations that guide users, add polish, and provide feedback in meaningful ways.',
  },
  {
    title: 'Responsive & Adaptive Design',
    description:
      'Crafting interfaces that look and perform flawlessly on web, mobile, tablets, and even wearables.',
  },
  {
    title: 'Accessibility-First Design',
    description:
      'WCAG-compliant designs that are inclusive to users with diverse abilities, ensuring a wider reach.',
  },
];

const process = [
  {
    title: 'Discovery & Research',
    description: 'Interviews, user personas, journey mapping',
  },
  {
    title: 'Wireframes & Ideation',
    description: 'Blueprint the user journey and screens',
  },
  {
    title: 'UI Visual Design',
    description: 'Apply branding, layout, and interaction patterns',
  },
  {
    title: 'Prototyping & Testing',
    description: 'Get feedback early and iterate',
  },
  {
    title: 'Handoff & Support',
    description: 'Share dev-ready files, design systems, and future guidance',
  },
];

const whychooseus = [
  {
    title: 'User-Centered Design',
    description: 'We focus on how users think, feel, and behave—not just how things look.',
  },
  {
    title: 'Creative Meets Functional',
    description: 'Our designs aren’t just aesthetic; they serve business goals.',
  },
  {
    title: 'Tested and Validated',
    description: 'Usability testing and iteration ensure what we build actually works.',
  },
  {
    title: 'Design System Approach',
    description: 'Reusable components and scalable patterns for long-term growth.',
  },
  {
    title: 'Collaborative Process',
    description: 'Involve your team in every step-from ideation to final handoff.',
  },
];

const engagementOptions = [
  {
    title: 'End-to-End Product Design',
    description: 'From ideation to final assets—perfect for new projects.',
  },
  {
    title: 'UI Overhaul / Redesigns',
    description: 'Modernize outdated interfaces while keeping existing functionality.',
  },
  {
    title: 'UX Audits & Consulting',
    description: 'Identify usability bottlenecks and get actionable insights.',
  },
  {
    title: 'Design Support for Developers',
    description: 'Detailed specs, assets, and guidance for smooth dev handoff.',
  },
];

export default function UiUxDesignContent() {
  return (
    <section>
    
    <Banner 
        heading="UI/UX Design Services"
        subtext="Intuitive, beautiful, and user-first design experiences"
        buttonText="Book Free Consultation"
        note="Your product deserves more than just good looks—it needs to be functional, frictionless, and delightful. Our UI/UX design services are centered around your users, delivering intuitive digital interfaces that drive engagement, retention, and satisfaction."
    />
    <InfoStats
        stats={[
          { number: "94%", label: "First impressions influenced by design quality" },
          { number: "200%", label: "Higher conversion with user-focused design" },
          { number: "88%", label: "Users less likely to return after bad UX" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our UI/UX Design Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom UI/UX Design services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "UI/UX Design"
      />
    <DevelopmentProcess 
      title="Our UI/UX Design Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}