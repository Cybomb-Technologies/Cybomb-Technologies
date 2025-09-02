import WordPressTechnologiesSection from "./wordpress-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";

import HiringModels from "../../../../common-ui/mobile-app/hiring";
import AboutTech from "../../../../common-ui/mobile-app/about-tech";
import scheduleConsultImg from "./../../../../../assets/contact/schedule-a-consultation-img3.jpg";
import hireUsImg from "./../../../../../assets/contact/hiring-model-img3.svg";

const services = [
  {
    title: "Custom WordPress Development",
    description:
      "Build fully custom themes and plugins tailored to your brand, performance, and business goals.",
  },
  {
    title: "CMS Setup & Optimization",
    description:
      "Get a professionally configured WordPress setup with best practices for security, speed, and usability.",
  },
  {
    title: "Content Architecture & Strategy",
    description:
      "Organize your content with structured post types, taxonomies, and navigation for optimal user experience.",
  },
  {
    title: "Headless WordPress Integration",
    description:
      "Combine WordPress as a backend with modern frontends (React, Next.js, Vue) via REST or GraphQL APIs.",
  },
  {
    title: "WordPress Multisite Solutions",
    description:
      "Manage multiple sites under one dashboard—perfect for franchises, publishers, or multilingual platforms.",
  },
  {
    title: "WooCommerce & eCommerce Integration",
    description:
      "Turn your CMS into a full eCommerce platform with seamless WooCommerce integration and custom features.",
  },
  {
    title: "Performance & Security Audits",
    description:
      "Improve site load times, harden security, and comply with GDPR, HIPAA, or other standards.",
  },
  {
    title: "Migration & Modernization",
    description:
      "Move from outdated CMS platforms or legacy WordPress sites to modern, clean, scalable setups.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay a pack of development hours for up to 6 months — ideal for ongoing updates, small enhancements, page edits, or WordPress maintenance tasks.",
  },
  {
    title: "Dedicated WordPress Developers",
    description:
      "Hire full-time WordPress experts exclusively for your project — ensuring focused attention, faster turnaround, and seamless collaboration.",
  },
];

const whychooseus = [
  {
    title: "End-to-End WordPress Expertise",
    description: "From UI to backend, we handle it all",
  },
  {
    title: "CMS Strategy, Not Just Dev",
    description: "We think in terms of usability and scale",
  },
  {
    title: "Performance-First Builds",
    description: "Optimized for Core Web Vitals and SEO",
  },
  {
    title: "Security Built In",
    description: "Updates, hardening, and secure configurations as standard",
  },
  {
    title: "Multilingual & Scalable",
    description: "Go global or enterprise with confidence",
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance, monitoring, and enhancements.",
  },
];

const wordpressDescription = [
  {
    name: "Webflow",
    description:
      "Visual web design and CMS platform that allows building responsive websites without coding.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
    iconColors: "linear-gradient(135deg, #c2e8fa, #d6f1fd)", // pastel soft blue
  },
  {
    name: "Ghost",
    description:
      "Open-source publishing platform designed for professional blogging, newsletters, and memberships.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ghost/ghost-original.svg",
    iconColors: "linear-gradient(135deg, #e6e6e6, #f5f5f5)", // pastel soft grey
  },
  {
    name: "Strapi",
    description:
      "Headless CMS built with Node.js that provides customizable APIs for managing content.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTdkkL_3ixf0a9aGl4bynndpGTyjVpkooIt5AiA3TpJVyyuelvZN-lfoOgc-yv1QJRS0&usqp=CAU",
    iconColors: "linear-gradient(135deg, #e0d4fa, #f0e8ff)", // pastel soft purple
  },
  {
    name: "Contentful",
    description:
      "Cloud-based headless CMS that delivers structured content via APIs for modern web apps.",
    icon: "https://staging.svgrepo.com/show/353600/contentful.svg",
    iconColors: "linear-gradient(135deg, #d0f6fa, #e4fdff)", // pastel cyan-teal
  },
  {
    name: "Cloudinary",
    description:
      "Media management platform for storing, optimizing, and delivering images and videos at scale.",
    icon: "https://www.svgrepo.com/show/353566/cloudinary.svg",
    iconColors: "linear-gradient(135deg, #d2f0ff, #e8f9ff)", // pastel sky blue
  },
  {
    name: "Git Workflows (CI/CD)",
    description:
      "Version control and automation pipelines used to manage WordPress code, testing, and deployments.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    iconColors: "linear-gradient(135deg, #ffe0d1, #fff0eb)", // pastel orange-pink
  },
];

function WordPressContent() {
  return (
    <section>
      <Banner
        heading="WordPress CMS Solutions"
        subtext="Powerful, flexible, and user-friendly content management"
        buttonText="Book Free Consultation"
        note="WordPress powers over 40% of the web—and for good reason. It’s a robust CMS that balances simplicity with deep customization. Whether you're running a blog, a business site, or a full-scale digital platform, WordPress provides the tools and flexibility to manage your content efficiently and grow without limits."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Powers 40%+ of global websites" },
          { number: "70%", label: "Large plugin ecosystem" },
          { number: "65%", label: "Strong CMS + CRM integration" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our WordPress Service Offerings"
        Services={services}
      />

      

      <WhyChooseUs ChooseUs={whychooseus} />
        <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our WordPress Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />
      <WordPressTechnologiesSection />
      <AboutTech technologies={wordpressDescription} />
      

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default WordPressContent;
