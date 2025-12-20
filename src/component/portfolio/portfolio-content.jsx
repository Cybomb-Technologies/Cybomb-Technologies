import { useState, useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Portfoliobanner from "./portfolio-banner.jsx";
import PortfolioItem from "./portfolio-items.jsx";
import styles from "./portfolio-content.module.css";
import PortfolioUseCase from "./portfolio-usecase.jsx";
import styless from "./portfolio-usecase.module.css";
import Testimonials from "./portfolio-testimonial.jsx";
import IndustryVerticals from "./portfolio-industry.jsx";
import ScheduleConsultation from "../common-ui/mobile-app/schedule-consultation.jsx";
import placeholderImage from "./../../assets/placeholder-image.webp";
import { MdSchedule } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const useCases = [
  {
    text: "Requirement Analysis – Deep dive into your goals",
    className: styless.cardBlue,
  },
  {
    text: "Launch a serverless app backed by Lambda and DynamoDB",
    className: styless.cardNavy,
  },
  {
    text: "Archive company files securely with automated backups",
    className: styless.cardCyan,
  },
  {
    text: "Connect a mobile app to AWS backend with GraphQL (AppSync)",
    className: styless.cardDark,
  },
  {
    text: "Create CI/CD pipelines that deploy automatically on push",
    className: styless.cardLightBlue,
  },
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
      "This AI system boosts productivity and adapts to your business needs with powerful integrations and intelligent workflows.",
    ],
    previewLink: "/demo/ai-agent/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #00171f 0%, #003459 100%)",
      "--accent-color": "#00a8e8",
      "--accent-hover": "#007ea7",
      "--title-color": "#ffffff",
      "--text-color": "#e6f2f8",
    },
  },
  {
    id: 2,
    title: "HRMS – Streamlining Employee Management",
    image: "/images/portfolio/hrms.jpg",
    altText: "HRMS by Cybomb Technologies",
    features: [
      "Cybomb Technologies' HRMS system simplifies employee management by centralizing tasks like attendance, payroll, and performance tracking.",
      "Built with React.js, Node.js, and MongoDB, our HRMS offers secure role-based access for Admins, HR teams, and Employees.",
      "From automated leave approvals to real-time analytics, this system helps HR teams save time and boost workplace efficiency.",
    ],
    previewLink: "/demo/HRMS/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #003459 0%, #007ea7 100%)",
      "--accent-color": "#00a8e8",
      "--accent-hover": "#005f8a",
      "--title-color": "#ffffff",
      "--text-color": "#e6f7ff",
    },
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "/images/portfolio/ecomm.jpg",
    altText: "E-Commerce Platform by Cybomb Technologies",
    features: [
      "Cybomb Technologies builds robust e-commerce solutions that help businesses sell products online with a smooth, secure, and user-friendly experience.",
      "Our platform includes essential features like product listings, cart management, secure checkout, and order tracking – all powered by React, Node.js, and MongoDB.",
      "With responsive design, admin dashboards, and integrated payment gateways, we ensure seamless shopping on both desktop and mobile devices.",
    ],
    previewLink: "/demo/E-Commerce/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #007ea7 0%, #00a8e8 100%)",
      "--accent-color": "#003459",
      "--accent-hover": "#00171f",
      "--title-color": "#ffffff",
      "--text-color": "#f0f9ff",
    },
  },
  {
    id: 4,
    title: "Grocery Delivery App",
    image: "/images/portfolio/grocery.jpg",
    altText: "Grocery Delivery App by Cybomb Technologies",
    features: [
      "Cybomb Technologies developed a modern grocery delivery platform that connects users with nearby stores for fast and convenient shopping.",
      "Users can browse categories, add items to the cart, schedule deliveries, and make secure online payments – all in a few taps.",
      "The system includes a responsive user app, admin dashboard, and real-time delivery tracking to streamline the entire grocery order process.",
    ],
    previewLink: "/demo/grocery/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #00171f 0%, #007ea7 100%)",
      "--accent-color": "#00a8e8",
      "--accent-hover": "#007ea7",
      "--title-color": "#ffffff",
      "--text-color": "#e6f2f8",
    },
  },
  {
    id: 5,
    title: "School Management System",
    image: "/images/portfolio/school.jpg",
    altText: "School Management System by Cybomb Technologies",
    features: [
      "Cybomb Technologies created a complete School Management System to simplify academic and administrative operations in educational institutions.",
      "The system covers student enrollment, attendance, exams, fees, and timetable management – all under one secure dashboard.",
      "With separate portals for Admin, Teachers, Students, and Parents, the platform ensures smooth communication and effective digital learning management.",
    ],
    previewLink: "/demo/school-mangement/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #003459 0%, #00a8e8 100%)",
      "--accent-color": "#007ea7",
      "--accent-hover": "#005f8a",
      "--title-color": "#ffffff",
      "--text-color": "#e6f7ff",
    },
  },
  {
    id: 6,
    title: "Call Taxi Booking App",
    image: "/images/portfolio/taxi.jpg",
    altText: "Taxi Booking App by Cybomb Technologies",
    features: [
      "Cybomb Technologies developed a smart taxi booking system that connects passengers with nearby drivers for quick and reliable rides.",
      "Users can book rides in real-time, track driver location, calculate fares, and make secure online payments through a seamless mobile interface.",
      "The platform includes dedicated apps for users and drivers, along with an admin panel to manage bookings, payments, and support efficiently.",
    ],
    previewLink: "/demo/taxi-booking-app/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #007ea7 0%, #00171f 100%)",
      "--accent-color": "#00a8e8",
      "--accent-hover": "#007ea7",
      "--title-color": "#ffffff",
      "--text-color": "#f0f9ff",
    },
  },
  {
    id: 7,
    title: "Real Estate Platform",
    image: "/images/portfolio/real-estate.jpg",
    altText: "Real Estate Platform by Cybomb Technologies",
    features: [
      "Cybomb Technologies built a modern real estate platform to help users easily buy, sell, or rent properties with detailed listings and smart filters.",
      "The system features property search, image galleries, location maps, and enquiry forms – all optimized for mobile and desktop.",
      "With admin control, agent logins, and real-time listing updates, the platform ensures a smooth experience for both property owners and buyers.",
    ],
    previewLink: "/demo/real-estate-app/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #00a8e8 0%, #003459 100%)",
      "--accent-color": "#007ea7",
      "--accent-hover": "#005f8a",
      "--title-color": "#ffffff",
      "--text-color": "#e6f2f8",
    },
  },
  {
    id: 8,
    title: "Cybomb Logistics Platform",
    image: "/images/portfolio/logistics.png",
    altText: "Logistics Platform by Cybomb Technologies",
    features: [
      "Specialized platform for transportation of dangerous & hazardous goods with complete safety compliance",
      "End-to-end logistics solutions including express cargo, warehousing, and multi-modal transportation",
      "Real-time shipment tracking with live GPS integration and automated notifications",
      "Comprehensive workflow from quote request to final delivery with full documentation support",
    ],
    previewLink: "/demo/logistics/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #343a40 0%, #212529 100%)",
      "--accent-color": "#ffc107",
      "--accent-hover": "#e0a800",
      "--title-color": "#ffffff",
      "--text-color": "#f8f9fa",
    },
  },
  {
    id: 9,
    title: "Oil & Gas Solutions Platform",
    image: "/images/portfolio/oil-gas.png",
    altText: "Oil & Gas Platform by Cybomb Technologies",
    features: [
      "Comprehensive solutions for upstream, midstream and downstream operations",
      "Asset performance management with predictive maintenance technology",
      "Safety and regulatory compliance tools for international standards",
      "Production optimization using AI-driven analytics and monitoring systems",
    ],
    previewLink: "/demo/oil-gas/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #4B3D3A 0%, #2C2A29 100%)",
      "--accent-color": "#F5CBAA",
      "--accent-hover": "#C1B2A1",
      "--title-color": "#ffffff",
      "--text-color": "#f8f9fa",
    },
  },
  {
    id: 10,
    title: "Cybomb Banking & Payments Platform",
    image: "/images/portfolio/banking-payments.png",
    altText: "Banking Platform by Cybomb Technologies",
    features: [
      "Next-gen banking and payment technology for digital-first financial institutions",
      "Secure payment gateways with advanced fraud detection and encryption",
      "Digital banking platforms with API-first design for seamless integration",
      "Mobile wallet solutions supporting NFC, QR and contactless payments",
    ],
    previewLink: "/demo/banking and payment/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #0f2244 0%, #007bff 100%)",
      "--accent-color": "#857FEC",
      "--accent-hover": "#554DE6",
      "--title-color": "#ffffff",
      "--text-color": "#f8f9fa",
    },
  },
  {
    id: 11,
    title: "Cybomb Luxury Travel & Hospitality Platform",
    image: "/images/portfolio/travel-hospitality.png",
    altText: "Travel Platform by Cybomb Technologies",
    features: [
      "Premium travel experiences with luxury stays and personalized tours",
      "Handpicked 5-star accommodations with exclusive amenities worldwide",
      "Custom itineraries tailored to unique traveler preferences",
      "End-to-end coordination for seamless luxury travel experiences",
    ],
    previewLink: "/demo/travel-hospitality/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #002244 0%, #001a33 100%)",
      "--accent-color": "#cfaf6a",
      "--accent-hover": "#e6c980",
      "--title-color": "#ffffff",
      "--text-color": "#f8f9fa",
    },
  },
  {
    id: 12,
    title: "Cybomb Publishing Platform",
    image: "/images/portfolio/publishing.png",
    altText: "Publishing Platform by Cybomb Technologies",
    features: [
      "End-to-end publishing solutions from manuscript to market-ready books",
      "Professional editing, proofreading, and cover design services",
      "Global printing and distribution network across 18+ countries",
      "Comprehensive marketing and promotion strategies for authors",
    ],
    previewLink: "/demo/publish-page 2/",
    animationDirection: "fade-right",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #3e2c1c 0%, #5a3e2b 100%)",
      "--accent-color": "#ffc107",
      "--accent-hover": "#e0a800",
      "--title-color": "#ffffff",
      "--text-color": "#f8f9fa",
    },
  },
  {
    id: 13,
    title: "Sports Platform",
    image: "/images/portfolio/sports.png",
    altText: "Cybomb Sports Platform - Live Scores, Events and Highlights",
    features: [
      "Real-time scores and statistics for multiple sports",
      "Comprehensive event scheduling and calendar integration",
      "Instant highlights and video replays",
      "Multi-sport coverage (football, basketball, cricket, tennis, esports)",
      "Interactive fan engagement features",
    ],
    previewLink: "/demo/sports/",
    animationDirection: "fade-left",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #0b1026 0%, #1a237e 100%)",
      "--accent-color": "#5dd8ff",
      "--accent-hover": "#00b4d8",
      "--title-color": "#ffffff",
      "--text-color": "#e8ebff",
    },
  },
  {
    id: 14,
    title: "Media & Entertainment Platform",
    image: "/images/portfolio/media-entertainment.png",
    altText: "Cybomb Media & Entertainment Solutions Platform",
    features: [
      "End-to-end streaming solutions for OTT and live events",
      "Immersive AR/VR experiences for gaming and interactive content",
      "AI-powered content recommendation and personalization engines",
      "Global content delivery with multi-CDN strategies",
      "Enterprise-grade digital rights management (DRM)",
    ],
    previewLink: "/demo/media-entertainment/",
    animationDirection: "fade-left",
    imagePosition: "right",
    style: {
      "--card-bg": "linear-gradient(135deg, #0a1f44 0%, #1a3a8f 100%)",
      "--accent-color": "#5dd8ff",
      "--accent-hover": "#00b4d8",
      "--title-color": "#ffffff",
      "--text-color": "#e8f4ff",
    },
  },
  {
    id: 15,
    title: "Aviation Services Platform",
    image: "/images/portfolio/aviation.png",
    altText: "Cybomb Aviation Services Platform",
    features: [
      "Premium private jet charter services with global coverage",
      "FAA/EASA certified pilot training programs",
      "Complete aircraft maintenance and engineering services",
      "International air logistics and cargo solutions",
      "Advanced flight planning and consulting",
    ],
    previewLink: "/demo/aviation/",
    animationDirection: "fade-right",
    imagePosition: "left",
    style: {
      "--card-bg": "linear-gradient(135deg, #0a1a35 0%, #1a3a8f 100%)",
      "--accent-color": "#ffc107",
      "--accent-hover": "#e0a800",
      "--title-color": "#ffffff",
      "--text-color": "#f8f9fa",
    },
  },
  // {
  //   "id": 16,
  //   "title": "FinTech Solutions Platform",
  //   "image": "/images/portfolio/fintech.png",
  //   "altText": "Cybomb FinTech Solutions Platform",
  //   "features": [
  //     "Digital banking solutions with enhanced customer experience",
  //     "Secure payment gateway integrations for global transactions",
  //     "Cross-border payment solutions with compliance management",
  //     "Open banking APIs and seamless financial integrations",
  //     "Advanced digital wallets with KYC and spending controls",

  //   ],
  //   "previewLink": "/demo/Fin-Tech/",
  //   "animationDirection": "fade-right",
  //   "imagePosition": "right",
  //   "style": {
  //     "--card-bg": "linear-gradient(135deg, #0b2545 0%, #1a3a8f 100%)",
  //     "--accent-color": "#00b4d8",
  //     "--accent-hover": "#0096c7",
  //     "--title-color": "#ffffff",
  //     "--text-color": "#e8f4ff"
  //   }
  // }
];
function PortfolioContent() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const portfolioSectionRef = useRef(null);

  const handlePageChange = (newPage) => {
    // Validate page range
    if (newPage < 1 || newPage > totalPages) return;

    setCurrentPage(newPage);

    // Use setTimeout to ensure scroll happens after state update and render
    setTimeout(() => {
      if (portfolioSectionRef.current) {
        portfolioSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  };

  // Calculate displayed items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = portfolioItems.slice(startIndex, endIndex);

  return (
    <>
      <Portfoliobanner />

      <section
        className={styles.portfolioContainer}
        ref={portfolioSectionRef}
        id="Portfolio"
      >
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

          {/* Enhanced Pagination controls */}
          <div className={styles.paginationContainer}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
              aria-label="Previous page"
            >
              <FaChevronLeft />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.pageNumber} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
              aria-label="Next page"
            >
              <FaChevronRight />
            </button>
          </div>

          <IndustryVerticals />
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
          <Testimonials />
        </div>
      </section>
    </>
  );
}

export default PortfolioContent;
