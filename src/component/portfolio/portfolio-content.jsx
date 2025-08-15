import { useState } from "react";
import Banner from "../common-ui/design-and-development/banner";
import PortfolioItem from "./portfolio-items.jsx";
import styles from "./portfolio-content.module.css";
import PortfolioUseCase from "./portfolio-usecase.jsx";
import styless from "./portfolio-usecase.module.css";
import Testimonials from './portfolio-testimonial.jsx';
import IndustryVerticals from "./portfolio-industry.jsx";
import ScheduleConsultation from "../common-ui/mobile-app/schedule-consultation.jsx";
import placeholderImage from './../../assets/placeholder-image.webp';
import { MdSchedule } from 'react-icons/md';

const useCases = [
  { text: "Requirement Analysis – Deep dive into your goals", className: styless.cardBlue },
  { text: "Launch a serverless app backed by Lambda and DynamoDB", className: styless.cardNavy },
  { text: "Archive company files securely with automated backups", className: styless.cardCyan },
  { text: "Connect a mobile app to AWS backend with GraphQL (AppSync)", className: styless.cardDark },
  { text: "Create CI/CD pipelines that deploy automatically on push", className: styless.cardLightBlue }
];

const portfolioItems = [
  {
    id: 1,
    title: "AI Agent for Smart Automation",
    image: "/images/portfolio/ai-agent.jpg",
    altText: "AI Agent by Cybomb Technologies",
    features: [
      "Cybomb Technologies develops smart AI agents to automate routine tasks and improve business workflows.",
      "Built using OpenAI, Langchain, and N8N, our AI agent handles roles like development, testing, and project coordination.",
      "This AI system boosts productivity and adapts to your business needs with powerful integrations and intelligent workflows."
    ],
    previewLink: "/demo/ai-agent/",
    animationDirection: "fade-left",
    imagePosition: "left",
     style: {
      '--card-bg': 'linear-gradient(135deg, #00171f 0%, #003459 100%)',
      '--accent-color': '#00a8e8',
      '--accent-hover': '#007ea7',
      '--title-color': '#ffffff',
      '--text-color': '#e6f2f8'
    }
  },
  {
    id: 2,
    title: "HRMS – Streamlining Employee Management",
    image: "/images/portfolio/hrms.jpg",
    altText: "HRMS by Cybomb Technologies",
    features: [
      "Cybomb Technologies' HRMS system simplifies employee management by centralizing tasks like attendance, payroll, and performance tracking.",
      "Built with React.js, Node.js, and MongoDB, our HRMS offers secure role-based access for Admins, HR teams, and Employees.",
      "From automated leave approvals to real-time analytics, this system helps HR teams save time and boost workplace efficiency."
    ],
    previewLink: "/demo/HRMS/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      '--card-bg': 'linear-gradient(135deg, #003459 0%, #007ea7 100%)',
      '--accent-color': '#00a8e8',
      '--accent-hover': '#005f8a',
      '--title-color': '#ffffff',
      '--text-color': '#e6f7ff'
    }
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "/images/portfolio/ecomm.jpg",
    altText: "E-Commerce Platform by Cybomb Technologies",
    features: [
      "Cybomb Technologies builds robust e-commerce solutions that help businesses sell products online with a smooth, secure, and user-friendly experience.",
      "Our platform includes essential features like product listings, cart management, secure checkout, and order tracking – all powered by React, Node.js, and MongoDB.",
      "With responsive design, admin dashboards, and integrated payment gateways, we ensure seamless shopping on both desktop and mobile devices."
    ],
    previewLink: "/demo/E-Commerce/",
    animationDirection: "fade-left",
    imagePosition: "left",
     style: {
      '--card-bg': 'linear-gradient(135deg, #007ea7 0%, #00a8e8 100%)',
      '--accent-color': '#003459',
      '--accent-hover': '#00171f',
      '--title-color': '#ffffff',
      '--text-color': '#f0f9ff'
    }
  },
  {
    id: 4,
    title: "Grocery Delivery App",
    image: "/images/portfolio/grocery.jpg",
    altText: "Grocery Delivery App by Cybomb Technologies",
    features: [
      "Cybomb Technologies developed a modern grocery delivery platform that connects users with nearby stores for fast and convenient shopping.",
      "Users can browse categories, add items to the cart, schedule deliveries, and make secure online payments – all in a few taps.",
      "The system includes a responsive user app, admin dashboard, and real-time delivery tracking to streamline the entire grocery order process."
    ],
    previewLink: "/demo/grocery/",
    animationDirection: "fade-right",
    imagePosition: "right",
     style: {
      '--card-bg': 'linear-gradient(135deg, #00171f 0%, #007ea7 100%)',
      '--accent-color': '#00a8e8',
      '--accent-hover': '#007ea7',
      '--title-color': '#ffffff',
      '--text-color': '#e6f2f8'
    }
  },
  {
    id: 5,
    title: "School Management System",
    image: "/images/portfolio/school.jpg",
    altText: "School Management System by Cybomb Technologies",
    features: [
      "Cybomb Technologies created a complete School Management System to simplify academic and administrative operations in educational institutions.",
      "The system covers student enrollment, attendance, exams, fees, and timetable management – all under one secure dashboard.",
      "With separate portals for Admin, Teachers, Students, and Parents, the platform ensures smooth communication and effective digital learning management."
    ],
    previewLink: "/demo/school-mangement",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      '--card-bg': 'linear-gradient(135deg, #003459 0%, #00a8e8 100%)',
      '--accent-color': '#007ea7',
      '--accent-hover': '#005f8a',
      '--title-color': '#ffffff',
      '--text-color': '#e6f7ff'
    }
  },
  {
    id: 6,
    title: "Call Taxi Booking App",
    image: "/images/portfolio/taxi.jpg",
    altText: "Taxi Booking App by Cybomb Technologies",
    features: [
      "Cybomb Technologies developed a smart taxi booking system that connects passengers with nearby drivers for quick and reliable rides.",
      "Users can book rides in real-time, track driver location, calculate fares, and make secure online payments through a seamless mobile interface.",
      "The platform includes dedicated apps for users and drivers, along with an admin panel to manage bookings, payments, and support efficiently."
    ],
    previewLink: "/demo/taxi-booking-app",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      '--card-bg': 'linear-gradient(135deg, #007ea7 0%, #00171f 100%)',
      '--accent-color': '#00a8e8',
      '--accent-hover': '#007ea7',
      '--title-color': '#ffffff',
      '--text-color': '#f0f9ff'
    }
  },
  {
    id: 7,
    title: "Real Estate Platform",
    image: "/images/portfolio/real-estate.jpg",
    altText: "Real Estate Platform by Cybomb Technologies",
    features: [
      "Cybomb Technologies built a modern real estate platform to help users easily buy, sell, or rent properties with detailed listings and smart filters.",
      "The system features property search, image galleries, location maps, and enquiry forms – all optimized for mobile and desktop.",
      "With admin control, agent logins, and real-time listing updates, the platform ensures a smooth experience for both property owners and buyers."
    ],
    previewLink: "/demo/real-estate-app",
    animationDirection: "fade-left",
    imagePosition: "left",
   style: {
      '--card-bg': 'linear-gradient(135deg, #00a8e8 0%, #003459 100%)',
      '--accent-color': '#007ea7',
      '--accent-hover': '#005f8a',
      '--title-color': '#ffffff',
      '--text-color': '#e6f2f8'
    }
  }
];
function PortfolioContent() {
  const [showAll, setShowAll] = useState(false);

  // Show either first 3 items or all items
  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 3);

  return (
    <>
      <Banner 
        heading="Portfolio"
        subtext="Delivering Results. Driving Innovation."
        buttonText="Book Free Consultation"
        note="From startups to enterprises, we've helped clients across industries bring their digital vision to life. Explore some of our recent projects that reflect our versatility, expertise, and commitment to excellence."
      />
    
      <section className={styles.portfolioContainer}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Featured Projects</h2>
           
          {displayedItems.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              image={item.image}
              altText={item.altText}
              features={item.features}
              previewLink={item.previewLink}
              animationDirection={item.animationDirection}
              imagePosition={item.imagePosition}
              style={item.style}
            />
          ))}

          {/* Toggle View All / View Less */}
        <div className="text-center mt-4">
  <button
    className={styles.toggleButton}
    onClick={() => setShowAll(!showAll)}
  >
    {showAll ? "View Less" : "View All Projects"}
  </button>
</div>


          <IndustryVerticals/>
          <ScheduleConsultation
            heading="Stay Ahead Of The Competition With Our Portfolio's"
            buttonText="Schedule a Consultation!"
            imageSrc={placeholderImage}
            imageAlt="CRM Consultation"
            Icon={MdSchedule}
          />
          <PortfolioUseCase
            title="Our Process"
            subtitle="From Concept to Code—Flawlessly Executed"
            useCases={useCases}
          />
          <Testimonials/>
        </div>
      </section>
    </>
  );
}

export default PortfolioContent;
