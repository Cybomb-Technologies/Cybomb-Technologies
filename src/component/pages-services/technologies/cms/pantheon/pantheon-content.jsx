import PantheonTechnologiesSection from "./pantheon-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";
import scheduleConsultImg from "./../../../../../assets/contact/schedule-a-consultation-img3.jpg";
import hireUsImg from "./../../../../../assets/contact/hiring-model-img3.svg";
import AboutTech from "../../../../common-ui/mobile-app/about-tech";

const services = [
  {
    title: "Pantheon Setup & Onboarding",
    description:
      "Full platform configuration, best-practice workflows, and environment setup to get you running smoothly from day one.",
  },
  {
    title: "Custom Development on Pantheon",
    description:
      "Drupal, WordPress, or hybrid solutions optimized for Pantheon’s container-based architecture.",
  },
  {
    title: "Performance Optimization",
    description:
      "Leverage Pantheon’s caching layers, CDN, and tuning tools to achieve Core Web Vitals excellence.",
  },
  {
    title: "Pantheon Site Migration",
    description:
      "Seamless migration of your existing sites to Pantheon with zero data loss and minimal downtime.",
  },
  {
    title: "Continuous Delivery & Workflow Automation",
    description:
      "Set up automated testing, deployment pipelines, and content workflows for maximum productivity.",
  },
  {
    title: "Pantheon Multisite & Enterprise Solutions",
    description:
      "Manage and scale multiple sites or large portals with centralized control.",
  },
  {
    title: "Security & Compliance",
    description:
      "Implement platform security features plus additional compliance measures for GDPR, HIPAA, or PCI.",
  },
  {
    title: "Pantheon Training & Support",
    description:
      "Personalized training and ongoing support to empower your team to effectively manage and scale your sites on Pantheon.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for Pantheon environment updates, performance tuning, workflow configuration, and ongoing Drupal/WordPress maintenance on the Pantheon platform.",
  },
  {
    title: "Dedicated Pantheon Developers",
    description:
      "Hire full-time Pantheon-experienced developers who focus solely on your project — ensuring optimized deployments, faster delivery, and deep expertise with Pantheon workflows and DevOps.",
  },
];

const whychooseus = [
  {
    title: "Blazing-fast global CDN",
    description: "Instant content delivery anywhere in the world",
  },
  {
    title: "Automated Dev, Test, Live environments",
    description: "Safe and efficient development",
  },
  {
    title: "Enterprise-grade scalability",
    description: "Handles traffic spikes with zero downtime",
  },
  {
    title: "Integrated version control & CI/CD",
    description: "Streamlined deployments",
  },
  {
    title: "Unmatched uptime and security",
    description: "Backed by robust monitoring and DDoS protection",
  },
  {
    title: "Works with Drupal & WordPress",
    description: "Also supports a hybrid architecture",
  },
];

const pantheonDescription = [
  {
    name: "Pantheon Platform (Dev/Test/Live workflows & Multidev)",
    description:
      "Cloud platform providing Dev, Test, Live environments and Multidev for collaborative development and seamless deployments.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///8EBwf+3QEAAADh4dr+2wDCwsL//ej+3hj/+M/Gxsb/+92ur6/+3gyysrL09PRHSEjT09Ps7Oz///z//vBZWVn/5UHn5+f/87KVlZZkZGReXl7/+NP/9sb+5Ez//vT/75b+4S3/9rv+6naBgYB0dHRra2ciIyOam5v+517765f/8aT++dn+5Ef/7Yj96nf/6Wr/9LYYGhoyMzGJiYnb29sPERBLTEw7PDweHx+Hh4L7535FSYAYAAAHCUlEQVR4nO2deXfiLBSHkUw0Vq3VuKSta3eXdrq3M/3+3+uFGAypAXLeHg5chqf/TXLm3J8kl7sAQcjj8Xg8Ho/H4/F4PB6Px+PxeDwezz/NhWkDtLOYmLZAN9v7uWkTdDN7NG2Bbqbhg2kTNBPPwqlpGzSThJ2GaRv0EmM8c9zbPODwt2kb9NIKMd6YNkIvS4yx294mIQo7Tr+KcUQkrmLTZuhkTRS6PfE36CDixLQZOnmkCrHLaUYzpAoj02ZoZD5KB3Fl2g6NbNJBdNnbxHiHw0WNxU5htDVtiDaa2SCOTBuij2Um0d2ixjRTGC5MW6KLARtE3DRtii4emMLI1aJGgynEM1fTjNVeoqtFjeleoatFjXiUS3T0VdzkCpcD08ZoIc4V4plpY/Twm5PoZprR5BTiJ9PWaGHES2yZtkYHTyGncAR+4h80D7iI+EEEn2Y0OlgBeG+zUikE382YKhVi4BN/PFMqhD7xL0KlxEvTNv6MhlIg+DTjsoJE2N2MC/VjijHs3mmkFgi8hLquoBD2xN+qohB271Qd1xAiyGlGhbgGwy5qzJdqfRh2bLOuMmHgcG3azv9PI6oE5DRj0KiGaTs9/yb98S8Z5A7J1b5p6ytwXAuktFH3VnLZtPlq+kFQkxEMEWqLbwmOTQtQcioXSDT0EBL/CsGpaQFKTpQKrxG6Eiu8Mi1ARVclsBY8j1FPOIjBmWkFKn4pFdaCO4Q+hQrPTStQcVxB4S1CdbgKlY6Gqqij/ovgPvufUrEP4VQMxffZ72muKyisBX00Fim0fraopvBVeKP9M/4NZ/i3eIy/0EVHgqita1qBirNcSHB2xNHjJwgSnKKjUt5MC1Byzin8LIwHH4zaPyeIGfI66vyV/i1/iQSnvfJR7JkyvSIFhWRW2CxHlOUCob/8pWs63OXcmdYgp6Dw/Q1NWFltXpggglthcBqcmNYgpfvBW02HI2sIh5vCO5r6mo9yhS9W5/ndQvIUPOdraVZxIRgNXkQxbPBstT8tKqwFR/lC70kx8SWXCr4nvxBY7Wu+K7zOF3pfInTHKyQh9qsDCkmIMsgURg00fuclCoJTWApTh8IWX26+xXSnhQgIrMJh3tUfkUm+4Gu6pYkwLE9D7CXmsilxWpwgaMhTMiWCmi1qu4yWLfSeHQandyUKP0yLkHKokIwIW60YNmi9mKNHfE1ZUdxmDhSmKS3r6q/Jm1jfQWPs+rg0hzKtQU6Jwk+0D06X4JcHlyokz2J8nz2mST6IYuzO8g8VpnFNwoJTWm5U8WpahJQyhQFCc7YMbKvsTVmfPZU0ZqhzzHY80+1r5yqF77Bm/MzXsGVgy7mkK8Put9qblilMTWYroxN1/w2iwhsSnLJBlHaAwSoMyNTOdmFMUf+Pog8OT2GaKLElp5fK7g1IhSRR2rIMYyDsyoBQWKgmckbX98Hp96Lb4b1/rJ4tRAo/uCMy5vJGseUzvkgh8TVsKw09MVIatVneIy1XWAv+suN40kS41xZjewNR8IqlwWn2mHYgL+8ur56lEklw+pU9pguE3trHpbStrrOl3IgUDtnRXxhHc1QXvoVWl6Eowj4+LbqxAv+FYN6sgV6pkCbCeXBaUmQDolAYkdGO4SBLhMOWMBG2v/8tXhNFm4mswL8Q/hS2z/eydW18Ioxj0RI/+xVK1ibSiPoxe0zXouWJ9iuUrC+lrxjbD3UvCk7tVyirUZC5bi7oCBd+BnR6/Xp3hU4tjd8kyy+pr2FFt0dRBzidLV7G7aD7aWkDQ1IPpQsXWEeYBKdvtbKKR7qa5qXfvvm4slShdL9FO9/nvabNxBLSmv6w3+6dHFn6lEr3zPTzoltEbuwdMk7/i276BxVW4Ae8L08BS4TBH1NDaJUyZcHpJPuHLdzdwAnulMEiN3YV8sZ8/hgzCRHcQay2LT9tDUNloJZHgbxpfauWR4F8lMtTJYWgjxyqchoPaF9T5VwsDPw0xbjKcTwd01b+iKZaIAlwTFv5IxK1QshxDaVKbAP7YCy2rk32mAI/wK3CgTzQP5s0USoEHddQNkqFoOMaylfhWKXHycFBtdDHMF/ZlrKE7TrLaRS8jZN1qEImBTklFLPhX0U3P1nCZ1IuFBNL4Os2LvqaorcBHqaJ4GKbpWlbNJHsvQ3wlFBM7m0c9TV8bAN7BZ+Y3NssTJuii/35tCM3JwzEHfft7ocfHzKJ96YN0Qer27g6YeR1G1e/xIbyKrGzvoZViSH3RpXsPvMB/9NIYuI0kwqdrGZkzNNFGeBriDJ2dRunD/ROnA5OU2hs47KvQbtMymVfs9vs5XBwSmk5Wzndk4BvcCv5ottL3GbldHBKGXSc/WA3Y+ts5XRPsjJtgXYetqYt0M3c7bjG4/F4PB6Px+PxeDwej8fj8Xg8Hk81/gPxj3ebgdzSPgAAAABJRU5ErkJggg==",
    iconColors: "linear-gradient(135deg, #997c7cff 20%)",
  },
  {
    name: "Drupal Core",
    description:
      "Open-source CMS supported by Pantheon for building complex, content-rich digital experiences.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    iconColors: "linear-gradient(135deg, #8cb7d1ff  40%)",
  },
  {
    name: "WordPress Core",
    description:
      "Most popular CMS supported by Pantheon, enabling fast and flexible site creation and management.",
    icon: "data:image/png;base64,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",
    iconColors: "linear-gradient(135deg,  #1e8cbe 40% )",
  },
  {
    name: "PHP",
    description:
      "The core programming language powering both Drupal and WordPress on Pantheon.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    iconColors: "linear-gradient(135deg, #8993be 40%)",
  },
  {
    name: "MySQL",
    description:
      "Relational database used to store and query content, user data, and configuration for Drupal and WordPress.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors: "linear-gradient(135deg,  #b9a387ff 40% )",
  },
  {
    name: "Fastly (CDN with Varnish caching)",
    description:
      "Delivers content globally with integrated Varnish caching for speed, security, and scalability.",
    icon: "data:image/png;base64,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",
    iconColors: "linear-gradient(135deg, #ff7e7e 40%)",
  },
];

function PantheonContent() {
  return (
    <section>
      <Banner
        heading="Pantheon CMS Solutions"
        subtext="High-performance hosting & workflow platform for Drupal & WordPress"
        buttonText="Book Free Consultation"
        note="Pantheon powers some of the most ambitious websites in the world with its lightning-fast hosting, developer-friendly workflows, and enterprise-grade reliability. Whether you’re running Drupal, WordPress, or a custom hybrid stack, Pantheon delivers speed, scalability, and automation to keep your site at peak performance."
      />
      <InfoStats
        stats={[
          { number: "75%", label: "Cloud platform for WordPress & Drupal" },
          { number: "65%", label: "Focus on CI/CD workflows" },
          { number: "70%", label: "Enterprise-grade scaling" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Pantheon Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Pantheon Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <PantheonTechnologiesSection />
      <AboutTech technologies={pantheonDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default PantheonContent;
