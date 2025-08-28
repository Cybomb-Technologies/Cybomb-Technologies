import AcquiaTechnologiesSection from "./acquia-TechnologiesSection";
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
    title: "Acquia Cloud Site Factory (ACSF)",
    description:
      "Launch and manage hundreds of Drupal sites from a centralized dashboard with automated governance and deployment controls.",
  },
  {
    title: "Drupal + Acquia Cloud Hosting",
    description:
      "Deploy Drupal applications on Acquia’s secure and scalable cloud infrastructure with built-in performance monitoring, Varnish, and CDN.",
  },
  {
    title: "Acquia Personalization",
    description:
      "Implement Acquia Lift or CDP to deliver real-time, personalized content based on user behavior, location, and segmentation.",
  },
  {
    title: "Migration to Acquia",
    description:
      "Seamlessly migrate from on-premise, WordPress, or other cloud hosting platforms to Acquia Cloud or Site Factory.",
  },
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Automate your code deployments, testing, and site updates using Acquia Pipelines or integrate with external CI tools (GitHub Actions, CircleCI, etc.).",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Performance tuning, security audits, 24/7 monitoring, and long-term Acquia platform support.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours",
    description:
      "Prepurchase development hours for up to 6 months — ideal for Acquia site enhancements, cloud configuration tweaks, security updates, and ongoing maintenance on Acquia-hosted Drupal environments.",
  },
  {
    title: "Dedicated Acquia Developers",
    description:
      "Hire full-time Acquia-certified Drupal experts dedicated to your project — ensuring optimized builds, faster delivery, and deep expertise across Acquia Cloud, Site Factory, and Acquia CMS.",
  },
];

const whychooseus = [
  {
    title: "Certified Drupal Developers",
    description: "Deep expertise in enterprise Drupal + Acquia stack",
  },
  {
    title: "Multisite & Global Rollouts",
    description: "Centralized control, global performance",
  },
  {
    title: "Seamless Integrations",
    description: "Connect Acquia with CRMs, ERPs, analytics tools, and more",
  },
  {
    title: "Enterprise-Ready DevOps",
    description: "CI/CD, cloud-native, and scalable infrastructure",
  },
  {
    title: "Security-First",
    description: "Acquia Edge with WAF, SSL, and threat protection",
  },
];

const acquiaDescription = [
  {
    name: "Acquia Cloud Platform",
    description:
      "Enterprise-grade managed cloud hosting platform optimized for Drupal. Provides scalability, security, and DevOps tooling for digital experiences.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoKMS3To6jEAQPwW7ixiRmvOyuu61zjNnqA&s", // Acquia logo
    iconColors:
      "linear-gradient(135deg, rgba(13,183,237,0.4), rgba(29,99,237,0.4))",
  },
  {
    name: "Acquia DAM (Digital Asset Management)",
    description:
      "Centralized system to organize, manage, and deliver digital assets across teams, ensuring brand consistency and faster content workflows.",
    icon: "https://www.acquia.com/sites/default/files/styles/large/public/media/image/2023-08/Acquia%20DAM%20Logo_Integration.png?itok=y36XcB26",
    iconColors:
      "linear-gradient(135deg, rgba(227,28,121,0.4), rgba(102,51,153,0.4))",
  },

  {
    name: "Drupal 10",
    description:
      "Latest major release of the open-source Drupal CMS. Provides modern front-end theming, structured content management, and robust APIs.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAECCAMAAAB0YpM9AAAAaVBMVEX///8AnN4AltwAmd0Amt0Al90AlNwAnd77/v/J5vbw+f30+/7Y7fnP6ffr9vy23fPk8/s0qOJ6wupPseUdouDA4vWl1fBgt+eMyexateYjpOCCxetxvumu2fLV7Pg5quKZz+6Dwuqcze48W80JAAAN1ElEQVR4nNVd2XbiOhCMLdkQYMgCSUhgAnP//yOvzRYvcnV1y46hHudMbBdS763Ww8PQeBv8DcNjtRj7C+KRH8b+gmg85vuxPyEaO5c+j/0NkZi7xG3G/ohIvGeJX4/9EZHYuyRJH8f+iig8pkmS+NXYnxGFT19wSNJ7NhGLchmSxH2M/SER2Lkjh3teiPMy3PVCrPyZw/0uxONlGe5YNX1dl6FYiPt0wQ8/y1AsxGTsz7FgWaWQJNk9ek0rV+OQ5Pfnvv6tL0OhX7/G/iQtZk0Kd7ibVr7F4d6MxKG9DIVuWk/H/i4FFiEKhUjsxv4wHtO1C3JI0qexP43GroNC4t29KNj38E46kvi6D5H4003hXrzwWRJQqxWROIz9gQS+IIXC57h9D/azS55/SNy6XG+QMJzgJ/OxvxLiby5SKOT6ZezPRHiUV+FI4oaV08IJ8nxBuh37U7uwnJAUblfDziWtWiPxd+zPDWIvatUaiVs0E834WYBP/4z9xS0oKZQkbi2s+8yUFAoS2W0Z7A89hYKEX4793RXsONvWhJvcDolXG4UyS3ArJLZWCiWJ2dhff0QEhWI73QSJKAplCnN8TzySQrkSY5Mwi/PtkOiBQhnYjSkTvVAoSYynYnuiUJBIxnI7eqNQrsQ4JHqkMBaJXimMQ6JnCmOQ4Ck4NjhyvyzYCgr7dyZvdvyv/jdJ8PFCWYPbsCS8+z07wa/CKbdK+1S/F9kpNtLZAO/YUNUlv0OC91T9dYPT8fbvuB1Edv5K4Sf7IpclLn/0C0FRsHoe/hpXTSDR+Sc/uCuuoVBP5NEkho7sQNm2SaHVXUznY93LkAXgVkNPNwIN0i88iQEpsMYqXP2c8iQGOzPxFkdBRWKgPszHWAoFiS+WRDZIye5PyleqOttj5jSJdIA+IbpeiDt85mv2Mf3XHZe4C6P2clhqm/Ekeu7/438+sVqoIPHeJwVeoRAFz3lXl1n7WX22nfHFtpyo2SoEu7+TRHylKqMEkSbRX8lOETCQx8jm7N7sKzrlXdUkZ2vOU9YB7Kcn9ok3z/6TfywrYn24Tt+KXJhKBFkSWbTBXnq+kUR5qJIlEWuwp5peGG0rNEuC0dcAdChfItO+i95O3xEUdAVDvUUiScQUu550uW1DIwxJwh6cdpwA6JMDmyiwKqcp35535mDwblhv0ijX6q4qtUyXYL16U8eWwsWI4fAwm1C/lZ/onY4/vItxgbH19pmLcvWpjrlWGI6vsanABZdtUPfEqoXhyMHoFZBZH6VI6IXh9BZjyMIlEHUnHTXOahXmvDv3m2Wv/BNVnl4NZm+fq48pmpNfLZ2eZxLWRCnlXfqEXWeDWv2BOWR5YdaeVt98PiyEVLFpq5hR2jznUk6vFrVaJWHMMS4ygoR3jLmO2kknEgcbiTdGrqlgkdFJ3sO1yo2JUkrDEvmfA6GTfPaMdaE1Amb6Cbxo6ZaMWi3LPJiE9ZQJExKJW5VR0yehhSTalV0OwmHT07MF15I54ObO2TyBhC0XAQ/9Xj4AizURGbprBhSTcDYSTBUf/j7MAyrp9EFIEHKNJvBMid1YM5Swn6zec8KDcDqAtG3kn6Dh/sLqinEllnJs2p1vmsvC4Jt/jElkpjNwhL3urNRtRQ6BuQyYhE3Fym1eXYZuJi9DiD48GedtpU05mu94rrwMYcWMj/eZxgfIWZXwQsxFge6qkeBfzeR2fIvOc/CxG3mYQZeuhCRsMiG6sD4UuYsarXt+Eq5y2rST6LjlbcUttrkhnxf3JZmM3VwqBAZCazH06dxJpz/vnYRYU06b7qvoLzoc6ksrYUgASrupNZ/3Q/gD74XMDp4m4A3HApbSJzVG/s0kxSr3EuG+JMsxYyksbqhX6b/LQaxEwlLbFGS0IdWSv0sZqiUmoc8nS86fqz5RqoAGDUqABHQRvL6Pe49/2lrxTLLRrKl9hkGUvo9b0Ja1eE7YeOQylCSgZXJ7LYnQqMLqA39kTNpKCrftGSZN1eUJIc9S8cCFrcQopSsW8Fnq8gROmlU0k6CVdHXnd6imtSRwy4hPLptzKUiOU71VqOVlin65EsKUuYuy+YsNnLJiK+k4ZUf9AW+mi88k+Eq6OW5yv5Cuo34J3derksDBK69YSzD5Ul21C6vX7GQ3Bc2qkmiu90JFAi/sWe1jRZKkCg+BqwvqSnZTRiA6J5Ueoem75WvzGhIf0Ak76Wr8Ys1WUjSqKOqOTzAJ58v/MsdxaytqBT+Ypr2Arzvi+OyoNbFLovBwlJNn+Loj9MCPQi34BvTGPWjr2jQJaDWPH4hFmp5Ap2jPv5Ig88nyYF4cK0npDOo9XSB9elgXOVZEsPolxQGHDZ3vJ+ND6IBnkloSMmMXMGXlIAkuFQu7YPKZ4Cpz1mFK9R4FSVBZTOhYp99C/oMTaWzb4KATKgEIPbpiP2LVmjEWDtu2dAtbP5lpFDBrWWwVqHypU1HYtpUhD9S7TAIQJd/c4eGfqLgE4HEyJ8UG+w+IBCBSTEWYuYNeoey0Ytt2mW8Pq7XyEHwUaRaqE8qj3HiGbZu77hPY2iFaIbTh/Qc206K3hOO2qtKBgi9lbFBioPhbGD04wUGeQ9tW79fAC443LTIQRbw/AU9OMsxBsG11TwKfmsFpJ2TECr2DOWAzLRTXG24pPjUD004oxvFfMeuAbVs7UMMzCVDaCRrq9cPazAF3t4SuqMUaAOQJIIeJnQPum8uDH/QNT810h9jPmAPcS+6/TgrYtnWdtcUeZmePDXSuJQ6d6WJs27r3Nl69rhM/0DGVOHQpC7yz0RkI7HX4sP8HnTqBQ1e+GOckcXYe9n52OJkwbyzIdEfXFc5JSo4DNthB/tCyrIU6VjgGgjG6XPyEBjukYWEMVNg4nJoJJh5wK6V8m9QcnhANJGygAin2Oy5RFEFSCzBuoy7OgRoh0CcE1VIR48DMeKizGgeW3FwSGGG3S8kwN+N3Ukeoa/6ssJPZs4ctYQDbiryw/P2TypitXlichKa7D+ExwkYiFkcpRZz2LvQINPx62LPJJoFLQA2b1nYkLhgW8YHUI1TfHThbdeAp4FbiuqnDKbBCdUpHdOsZV7STNKdqy58DfVltjhOunxc+1kxswaysK/LYhJC4DdhRWzVMuGCYz4Tcff3b5kAnGW5KRNWbip2BwUPxfQ/EkbT8kXipaRIx+oF/HCeh2LYXfo3T510cv2ew7XJLYzo8UHgdMIet8NGY4MaUEpdmdSBb3Cy1FlBL6sXnEE74HL0h5vTN0Q0DbU7K6VFXTFH7n0+OUZ1QuD9+G26uOf/H0ngB75CepdYEbCjx6Xb5Jo3By4/RAXNsPd2/Aq8/4m7BT7zZU2l8yNlBxDJzeRpy9axjNR7085Fa33X6+WShlp4TM7lNavgXcM6AmcrjVURdBBe5EOfjr1A5ENA1y7UgtBIL75708ZTo6x2pSQhduGqTSIFohXo6qEeGVXEtLghOlQBNs1wQMfM8fjSieUROCaFWJCNiM1XSB/JJUYAI43ACceS5C5WaZ4x2tcw6a0B3uWoVVa0eMSUHne0nYd4GtUxUxGYiO5wQhJ558O5qbtY6uysJZzOVMG/luoNg10y2wYI1WHV7o0XCbuZ6uL9YPCTZgcbPJxxFGZbD1Mih6SCYXeA+7pG2vbvl8pO3wd8Sh7bLb5XqrIe5+iYOAZdfceVMnUO8XpInSoQQ2gDGSAi0ErB4Nl1ePQk8SThS08kh3k6bwtFw5GVbiB7m0cODJh3oyMoxE+ECD4v3Wy3eWlcAbGs8j7/eXjjpHULnMVz+Qq8qouM4SwzUPU7IFEZEBxCGWBSkg2yRbWReQy6AtIEGw5kyTZFWjhnk1gBMjpo0daR2VV4MkIgNFaaglO8OCEG/9kId3JR0i5JqfSAq5ndNYh2zEIZlEA2SQUvEZL710tA9jusKg5qIuGFMv3eZozG2ecap8Uoo/apzb9pa3EjbblLcMnkGe1DWcmLPVGTXJ5boCiwxuLMNg0gYhIGv5dsUrDbBobgc8EJBM5qNv5+58oJM13ZCX7/2A90AT9UdUxcSqlfMDRR0Mqdf5yMJfuLEN30x5BXqjgp22kcd6YqMJd71Z8YN7jF5403zRQk1QG5lCN2YJuwmbPcP+HQl6o5Dpt+ozBHlAPRG9MxiB1m8ry1+gKVdsIRh3MQRLv/ocsaXW2eZnmCa2RlHInHpetOmsXhf5aYUtzNM7Pwhwd853YB3qfvcvC3m0xLL76fNR5KbBliU4hxVxn8zkzjxSHPnfZanaebMHUaRFB4eHk0qtk+4dfR1tYuY1pw+KOwjU3AlZvRNy0Mg7elu+c/Yhj87wkdnLdhGXxlkg+vzIvCnfAyhcOu+btA+4lnvKkejL1H4wS7GUhjgzTkrgLfkN5cie+l1H10w//i1pdBEhEo8wVFKPTLYD7IIJ8w+0uFZOD+AJFTx+DLwhvLpaw/OhYC/E/uNkTKDfBVd7qZwGEosfPplu+7MgOk2H8AlLxj06FrImG+8MSjrZrDvoSNNh+n7uj/pLiK+z6jiqhlvq7SXLeVTvx3QIAhYbNexNHyWrZ6i24fi8Lib2Gn4LH05RIfLPWD6+Lo26KlCBrLVYbw91MLisHIpn34pszZfr2+2q88HxPTP4TPJJSLeuyx1++3TLeygMJ7fNh97l6epc85f6RQf7ot/yNI0n6y2T7a7In8Zs++3982/3Wr/VU4Vmqy/9quPf5vD05/FIArofydTw1Kf960qAAAAAElFTkSuQmCC",
    iconColors:
      "linear-gradient(135deg, rgba(13,183,237,0.4), rgba(29,99,237,0.4))",
  },

  {
    name: "Symfony",
    description:
      "PHP framework that underpins Drupal’s backend architecture, offering reusable components and robust application structure.",
    icon: "https://symfony.com/logos/symfony_black_03.png",
    iconColors: "rgba(0, 0, 0, 0.4)",
  },
  {
    name: "MySQL",
    description:
      "Relational database system used by Drupal for storing and querying content, configuration, and user data.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    iconColors:
      "linear-gradient(135deg, rgba(0, 117, 143, 0.4), rgba(242, 145, 17, 0.4))",
  },
  {
    name: "GraphQL",
    description:
      "Query language and runtime for APIs, enabling efficient, flexible, and headless content delivery from Drupal applications.",
    icon: "https://graphql.org/img/logo.svg",
    iconColors:
      "linear-gradient(135deg, rgba(229,53,171,0.4), rgba(255,119,201,0.4))",
  },
];

function AcquiaContent() {
  return (
    <section>
      <Banner
        heading="Acquia Development & Support"
        subtext="Enterprise-grade Drupal hosting, personalization, and cloud solutions"
        buttonText="Book Free Consultation"
        note="Acquia is the premier enterprise platform for Drupal-based digital experiences. Designed for high performance, security, and scalability, Acquia offers powerful tools for content management, marketing automation, and site governance — all in a cloud-native environment."
      />
      <InfoStats
        stats={[
          { number: "75%", label: "Enterprise cloud for Drupal" },
          { number: "65%", label: "Security & scalability focus" },
          { number: "70%", label: "Strong digital experience platform" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Acquia Service Offerings"
        Services={services}
      />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Acquia Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <AcquiaTechnologiesSection />
      <AboutTech technologies={acquiaDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default AcquiaContent;
