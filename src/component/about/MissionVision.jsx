import React, { useState } from "react";
import "./MissionVision.css";

function MissionVision() {
    // Default to 'vision' as requested ("by default our vision should be visible")
    const [activeTab, setActiveTab] = useState("vision");

    const contentData = {
        vision: {
            text: "To be the leading technology partner for innovative businesses worldwide, recognized for our technical excellence, creative problem-solving, and client-centered approach. We aspire to shape the future of digital transformation by consistently delivering solutions that exceed expectations."
        },
        mission: {
            text: "To empower businesses through innovative technology solutions that drive growth and efficiency. We're committed to delivering high-quality software that transforms ideas into impactful digital experiences, helping our clients stay ahead in the rapidly evolving digital landscape."
        }
    };

    return (
        <section className="mission-vision-section">
            <div className="container">

                {/* Toggle Navigation */}
                <div className="mv-nav">
                    <button
                        className={`mv-tab ${activeTab === "vision" ? "active" : ""}`}
                        onClick={() => setActiveTab("vision")}
                    >
                        Our vision
                    </button>
                    <button
                        className={`mv-tab ${activeTab === "mission" ? "active" : ""}`}
                        onClick={() => setActiveTab("mission")}
                    >
                        Our Mission
                    </button>
                </div>

                {/* Content Area */}
                <div className="mv-content-container">
                    <div className="mv-card">
                        <p className="mv-text fade-in" key={activeTab}>
                            {contentData[activeTab].text}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MissionVision;
