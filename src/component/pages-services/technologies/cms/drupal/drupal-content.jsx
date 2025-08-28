import DrupalTechnologiesSection from "./drupal-TechnologiesSection";
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
    title: "Custom Drupal Development",
    description:
      "Tailored modules, themes, and integrations that match your brand, content goals, and technical stack.",
  },
  {
    title: "Drupal CMS Setup & Configuration",
    description:
      "Enterprise-grade setup with performance, security, and editorial usability in mind.",
  },
  {
    title: "Content Modeling & Taxonomy Design",
    description:
      "Structured content strategies using nodes, content types, and taxonomies to reflect your business logic.",
  },
  {
    title: "Migration to Drupal",
    description:
      "Migrate from legacy CMS platforms or outdated Drupal versions (e.g., Drupal 7) to Drupal 10 with clean data structures.",
  },
  {
    title: "Headless Drupal Implementation",
    description:
      "Use Drupal as a content hub with frontends powered by React, Vue, or static site generators via JSON:API or GraphQL.",
  },
  {
    title: "Multisite & Multilingual Solutions",
    description:
      "Create and manage multiple regional, language, or franchise sites from a single Drupal codebase.",
  },
  {
    title: "UI/UX Design & Theme Development",
    description:
      "Crafting custom, responsive Drupal themes and user-centric interfaces to create engaging and accessible digital experiences that align with your brand identity.",
  },
  {
    title: "Security & Performance Optimization",
    description:
      "Hardening, caching, load balancing, and compliance auditing for enterprise-grade deployments.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepay development hours for up to 6 months — ideal for minor updates, security patches, performance optimization, and ongoing Drupal site enhancements.",
  },
  {
    title: "Dedicated Drupal Developers",
    description:
      "Hire full-time Drupal experts to work exclusively on your project — ensuring personalized attention, faster delivery, and deep technical expertise in Drupal architecture and modules.",
  },
];

const whychooseus = [
  {
    title: "Drupal Experts at Core",
    description: "Deep understanding of the architecture, APIs, and theming",
  },
  {
    title: "Enterprise-Ready Builds",
    description: "Designed to scale securely and flexibly",
  },
  {
    title: "Multilingual, Multisite Masters",
    description: "Proven experience in global rollouts",
  },
  {
    title: "Security & Compliance First",
    description: "Best practices for government, finance, and healthcare",
  },
  {
    title: "Seamless Migration & Upgrades",
    description: "From Drupal 7 or other platforms to Drupal 10",
  },
];

const drupalDescription = [
  {
    name: "Drupal 10",
    description:
      "Latest version of the Drupal CMS offering improved performance, modern APIs, and enhanced content authoring tools.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAECCAMAAAB0YpM9AAAAaVBMVEX///8AnN4AltwAmd0Amt0Al90AlNwAnd77/v/J5vbw+f30+/7Y7fnP6ffr9vy23fPk8/s0qOJ6wupPseUdouDA4vWl1fBgt+eMyexateYjpOCCxetxvumu2fLV7Pg5quKZz+6Dwuqcze48W80JAAAN1ElEQVR4nNVd2XbiOhCMLdkQYMgCSUhgAnP//yOvzRYvcnV1y46hHudMbBdS763Ww8PQeBv8DcNjtRj7C+KRH8b+gmg85vuxPyEaO5c+j/0NkZi7xG3G/ohIvGeJX4/9EZHYuyRJH8f+iig8pkmS+NXYnxGFT19wSNJ7NhGLchmSxH2M/SER2Lkjh3teiPMy3PVCrPyZw/0uxONlGe5YNX1dl6FYiPt0wQ8/y1AsxGTsz7FgWaWQJNk9ek0rV+OQ5Pfnvv6tL0OhX7/G/iQtZk0Kd7ibVr7F4d6MxKG9DIVuWk/H/i4FFiEKhUjsxv4wHtO1C3JI0qexP43GroNC4t29KNj38E46kvi6D5H4003hXrzwWRJQqxWROIz9gQS+IIXC57h9D/azS55/SNy6XG+QMJzgJ/OxvxLiby5SKOT6ZezPRHiUV+FI4oaV08IJ8nxBuh37U7uwnJAUblfDziWtWiPxd+zPDWIvatUaiVs0E834WYBP/4z9xS0oKZQkbi2s+8yUFAoS2W0Z7A89hYKEX4793RXsONvWhJvcDolXG4UyS3ArJLZWCiWJ2dhff0QEhWI73QSJKAplCnN8TzySQrkSY5Mwi/PtkOiBQhnYjSkTvVAoSYynYnuiUJBIxnI7eqNQrsQ4JHqkMBaJXimMQ6JnCmOQ4Ck4NjhyvyzYCgr7dyZvdvyv/jdJ8PFCWYPbsCS8+z07wa/CKbdK+1S/F9kpNtLZAO/YUNUlv0OC91T9dYPT8fbvuB1Edv5K4Sf7IpclLn/0C0FRsHoe/hpXTSDR+Sc/uCuuoVBP5NEkho7sQNm2SaHVXUznY93LkAXgVkNPNwIN0i88iQEpsMYqXP2c8iQGOzPxFkdBRWKgPszHWAoFiS+WRDZIye5PyleqOttj5jSJdIA+IbpeiDt85mv2Mf3XHZe4C6P2clhqm/Ekeu7/438+sVqoIPHeJwVeoRAFz3lXl1n7WX22nfHFtpyo2SoEu7+TRHylKqMEkSbRX8lOETCQx8jm7N7sKzrlXdUkZ2vOU9YB7Kcn9ok3z/6TfywrYn24Tt+KXJhKBFkSWbTBXnq+kUR5qJIlEWuwp5peGG0rNEuC0dcAdChfItO+i95O3xEUdAVDvUUiScQUu550uW1DIwxJwh6cdpwA6JMDmyiwKqcp35535mDwblhv0ijX6q4qtUyXYL16U8eWwsWI4fAwm1C/lZ/onY4/vItxgbH19pmLcvWpjrlWGI6vsanABZdtUPfEqoXhyMHoFZBZH6VI6IXh9BZjyMIlEHUnHTXOahXmvDv3m2Wv/BNVnl4NZm+fq48pmpNfLZ2eZxLWRCnlXfqEXWeDWv2BOWR5YdaeVt98PiyEVLFpq5hR2jznUk6vFrVaJWHMMS4ygoR3jLmO2kknEgcbiTdGrqlgkdFJ3sO1yo2JUkrDEvmfA6GTfPaMdaE1Amb6Cbxo6ZaMWi3LPJiE9ZQJExKJW5VR0yehhSTalV0OwmHT07MF15I54ObO2TyBhC0XAQ/9Xj4AizURGbprBhSTcDYSTBUf/j7MAyrp9EFIEHKNJvBMid1YM5Swn6zec8KDcDqAtG3kn6Dh/sLqinEllnJs2p1vmsvC4Jt/jElkpjNwhL3urNRtRQ6BuQyYhE3Fym1eXYZuJi9DiD48GedtpU05mu94rrwMYcWMj/eZxgfIWZXwQsxFge6qkeBfzeR2fIvOc/CxG3mYQZeuhCRsMiG6sD4UuYsarXt+Eq5y2rST6LjlbcUttrkhnxf3JZmM3VwqBAZCazH06dxJpz/vnYRYU06b7qvoLzoc6ksrYUgASrupNZ/3Q/gD74XMDp4m4A3HApbSJzVG/s0kxSr3EuG+JMsxYyksbqhX6b/LQaxEwlLbFGS0IdWSv0sZqiUmoc8nS86fqz5RqoAGDUqABHQRvL6Pe49/2lrxTLLRrKl9hkGUvo9b0Ja1eE7YeOQylCSgZXJ7LYnQqMLqA39kTNpKCrftGSZN1eUJIc9S8cCFrcQopSsW8Fnq8gROmlU0k6CVdHXnd6imtSRwy4hPLptzKUiOU71VqOVlin65EsKUuYuy+YsNnLJiK+k4ZUf9AW+mi88k+Eq6OW5yv5Cuo34J3derksDBK69YSzD5Ul21C6vX7GQ3Bc2qkmiu90JFAi/sWe1jRZKkCg+BqwvqSnZTRiA6J5Ueoem75WvzGhIf0Ak76Wr8Ys1WUjSqKOqOTzAJ58v/MsdxaytqBT+Ypr2Arzvi+OyoNbFLovBwlJNn+Loj9MCPQi34BvTGPWjr2jQJaDWPH4hFmp5Ap2jPv5Ig88nyYF4cK0npDOo9XSB9elgXOVZEsPolxQGHDZ3vJ+ND6IBnkloSMmMXMGXlIAkuFQu7YPKZ4Cpz1mFK9R4FSVBZTOhYp99C/oMTaWzb4KATKgEIPbpiP2LVmjEWDtu2dAtbP5lpFDBrWWwVqHypU1HYtpUhD9S7TAIQJd/c4eGfqLgE4HEyJ8UG+w+IBCBSTEWYuYNeoey0Ytt2mW8Pq7XyEHwUaRaqE8qj3HiGbZu77hPY2iFaIbTh/Qc206K3hOO2qtKBgi9lbFBioPhbGD04wUGeQ9tW79fAC443LTIQRbw/AU9OMsxBsG11TwKfmsFpJ2TECr2DOWAzLRTXG24pPjUD004oxvFfMeuAbVs7UMMzCVDaCRrq9cPazAF3t4SuqMUaAOQJIIeJnQPum8uDH/QNT810h9jPmAPcS+6/TgrYtnWdtcUeZmePDXSuJQ6d6WJs27r3Nl69rhM/0DGVOHQpC7yz0RkI7HX4sP8HnTqBQ1e+GOckcXYe9n52OJkwbyzIdEfXFc5JSo4DNthB/tCyrIU6VjgGgjG6XPyEBjukYWEMVNg4nJoJJh5wK6V8m9QcnhANJGygAin2Oy5RFEFSCzBuoy7OgRoh0CcE1VIR48DMeKizGgeW3FwSGGG3S8kwN+N3Ukeoa/6ssJPZs4ctYQDbiryw/P2TypitXlichKa7D+ExwkYiFkcpRZz2LvQINPx62LPJJoFLQA2b1nYkLhgW8YHUI1TfHThbdeAp4FbiuqnDKbBCdUpHdOsZV7STNKdqy58DfVltjhOunxc+1kxswaysK/LYhJC4DdhRWzVMuGCYz4Tcff3b5kAnGW5KRNWbip2BwUPxfQ/EkbT8kXipaRIx+oF/HCeh2LYXfo3T510cv2ew7XJLYzo8UHgdMIet8NGY4MaUEpdmdSBb3Cy1FlBL6sXnEE74HL0h5vTN0Q0DbU7K6VFXTFH7n0+OUZ1QuD9+G26uOf/H0ngB75CepdYEbCjx6Xb5Jo3By4/RAXNsPd2/Aq8/4m7BT7zZU2l8yNlBxDJzeRpy9axjNR7085Fa33X6+WShlp4TM7lNavgXcM6AmcrjVURdBBe5EOfjr1A5ENA1y7UgtBIL75708ZTo6x2pSQhduGqTSIFohXo6qEeGVXEtLghOlQBNs1wQMfM8fjSieUROCaFWJCNiM1XSB/JJUYAI43ACceS5C5WaZ4x2tcw6a0B3uWoVVa0eMSUHne0nYd4GtUxUxGYiO5wQhJ558O5qbtY6uysJZzOVMG/luoNg10y2wYI1WHV7o0XCbuZ6uL9YPCTZgcbPJxxFGZbD1Mih6SCYXeA+7pG2vbvl8pO3wd8Sh7bLb5XqrIe5+iYOAZdfceVMnUO8XpInSoQQ2gDGSAi0ErB4Nl1ePQk8SThS08kh3k6bwtFw5GVbiB7m0cODJh3oyMoxE+ECD4v3Wy3eWlcAbGs8j7/eXjjpHULnMVz+Qq8qouM4SwzUPU7IFEZEBxCGWBSkg2yRbWReQy6AtIEGw5kyTZFWjhnk1gBMjpo0daR2VV4MkIgNFaaglO8OCEG/9kId3JR0i5JqfSAq5ndNYh2zEIZlEA2SQUvEZL710tA9jusKg5qIuGFMv3eZozG2ecap8Uoo/apzb9pa3EjbblLcMnkGe1DWcmLPVGTXJ5boCiwxuLMNg0gYhIGv5dsUrDbBobgc8EJBM5qNv5+58oJM13ZCX7/2A90AT9UdUxcSqlfMDRR0Mqdf5yMJfuLEN30x5BXqjgp22kcd6YqMJd71Z8YN7jF5403zRQk1QG5lCN2YJuwmbPcP+HQl6o5Dpt+ozBHlAPRG9MxiB1m8ry1+gKVdsIRh3MQRLv/ocsaXW2eZnmCa2RlHInHpetOmsXhf5aYUtzNM7Pwhwd853YB3qfvcvC3m0xLL76fNR5KbBliU4hxVxn8zkzjxSHPnfZanaebMHUaRFB4eHk0qtk+4dfR1tYuY1pw+KOwjU3AlZvRNy0Mg7elu+c/Yhj87wkdnLdhGXxlkg+vzIvCnfAyhcOu+btA+4lnvKkejL1H4wS7GUhjgzTkrgLfkN5cie+l1H10w//i1pdBEhEo8wVFKPTLYD7IIJ8w+0uFZOD+AJFTx+DLwhvLpaw/OhYC/E/uNkTKDfBVd7qZwGEosfPplu+7MgOk2H8AlLxj06FrImG+8MSjrZrDvoSNNh+n7uj/pLiK+z6jiqhlvq7SXLeVTvx3QIAhYbNexNHyWrZ6i24fi8Lib2Gn4LH05RIfLPWD6+Lo26KlCBrLVYbw91MLisHIpn34pszZfr2+2q88HxPTP4TPJJSLeuyx1++3TLeygMJ7fNh97l6epc85f6RQf7ot/yNI0n6y2T7a7In8Zs++3982/3Wr/VU4Vmqy/9quPf5vD05/FIArofydTw1Kf960qAAAAAElFTkSuQmCC",
    iconColors:
      "linear-gradient(135deg, rgba(13,183,237,0.4), rgba(29,99,237,0.4))",
  },
  {
    name: "PHP",
    description:
      "Core server-side scripting language powering Drupal’s backend, modules, and business logic.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(137,147,190,0.4), rgba(79,91,147,0.4))",
  },
  {
    name: "MySQL",
    description:
      "Relational database system used by Drupal to store content, configurations, and site data.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(0,117,143,0.4), rgba(242,145,17,0.4))",
  },
  {
    name: "Twig",
    description:
      "Modern templating engine in Drupal 10 for secure, clean, and flexible front-end theming.",
    icon: "data:image/png;base64,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",
    iconColors:
      "linear-gradient(135deg, rgba(104,163,93,0.4), rgba(156,204,101,0.4))",
  },
  {
    name: "Composer",
    description:
      "Dependency manager for PHP, essential for installing and managing Drupal core, modules, and libraries.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(110,78,46,0.4), rgba(198,154,107,0.4))",
  },
  {
    name: "Docker",
    description:
      "Containerization platform enabling isolated and reproducible environments for Drupal development and deployment.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(13,183,237,0.4), rgba(29,99,237,0.4))",
  },
];

function DrupalContent() {
  return (
    <section>
      <Banner
        heading="Drupal CMS Solutions"
        subtext="Enterprise-grade content management for complex digital experiences"
        buttonText="Book Free Consultation"
        note="Drupal is a powerful open-source CMS designed for performance, scalability, and flexibility. It's trusted by government bodies, large enterprises, universities, and publishers who need secure, content-rich platforms with complex workflows and multilingual capabilities."
      />
      <InfoStats
        stats={[
          { number: "75%", label: "Preferred for government & enterprise" },
          { number: "65%", label: "Strong security modules" },
          { number: "60%", label: "Highly customizable architecture" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Drupal Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Drupal Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <DrupalTechnologiesSection />
      <AboutTech technologies={drupalDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default DrupalContent;
