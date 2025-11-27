import "./about-our-journey.css";
import { useState } from "react";

function Aboutourjourney() {
  const [activeYear, setActiveYear] = useState("2025-today");

  const journeyData = {
    "2021": {
      title: "Foundation",
      description: "Cybomb Technology was founded by a tech enthusiast with a vision of creating impactful digital solutions. Starting with a small office and a team of 5, we began our journey developing mobile applications for local businesses.",
      icon: "🏢",
      stats: "Team: 5"
    },
    "2022": {
      title: "Expansion", 
      description: "Expanded our services to include web application development and SaaS solutions. Our team grew to 10 talented professionals, and we opened our second office in Chennai.",
      icon: "📈",
      stats: "Team: 10"
    },
    "2023": {
      title: "AI Integration",
      description: "Recognized the growing importance of AI, we established a specialized AI integration team. This strategic move allowed us to offer cutting-edge solutions that leverage machine learning and data analytics.",
      icon: "🤖",
      stats: "Innovation"
    },
    "2024-corporate": {
      title: "Corporate Transformation",
      description: "Now a team of 80+ experts, we've successfully delivered over 300+ projects across various industries. Our client base spans from innovative startups to established SMEs looking for digital transformation.",
      icon: "🎯",
      stats: "Team: 80+"
    },
    "2025-today": {
      title: "Today",
      description: "In October 2025, Cybomb LLP was converted to Cybomb Private Limited, marking a significant milestone in our corporate growth and strengthening our commitment to delivering exceptional digital solutions.",
      icon: "⚡",
      stats: "Milestone"
    }
    
  };

  return (
    <>
      <section className="ourjourney">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From vision to reality - 5 years of innovation and growth</p>
          </div>

          {/* Timeline Navigation */}
          <div className="timeline-nav">
            <button
              className={`nav-year ${activeYear == "2021" ? 'active' : ''}`}
              onClick={() => setActiveYear("2021")}
            >
              2021
            </button>
            <button
              className={`nav-year ${activeYear == "2022" ? 'active' : ''}`}
              onClick={() => setActiveYear("2022")}
            >
              2022
            </button>
            <button
              className={`nav-year ${activeYear == "2023" ? 'active' : ''}`}
              onClick={() => setActiveYear("2023")}
            >
              2023
            </button>
            <button
              className={`nav-year ${activeYear == "2024-corporate" ? 'active' : ''}`}
              onClick={() => setActiveYear("2024-corporate")}
            >
              2024
            </button>
            <button
              className={`nav-year ${activeYear == "2025-today" ? 'active' : ''}`}
              onClick={() => setActiveYear("2025-today")}
            >
              2025
            </button>
          </div>

          {/* Active Content */}
          <div className="active-content" data-aos="fade-up">
            <div className="content-card">
              <div className="card-header">
                <span className="year-icon">{journeyData[activeYear].icon}</span>
                <div>
                  <h3>{journeyData[activeYear].title}</h3>
                  {/* <span className="year-badge">2025</span> */}
                </div>
              </div>
              <p>{journeyData[activeYear].description}</p>
              <div className="card-stats">
                <span className="stat-tag">{journeyData[activeYear].stats}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutourjourney;