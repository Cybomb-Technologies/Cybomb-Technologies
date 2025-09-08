import React from "react";
import "./case-banner.css";

const CaseBanner = () => {
  return (
    <section className="case-banner">
      {/* Left Section with background image + overlay */}
      <div className="banner-left">
        <div className="banner-content">
          <h1>Supercharge Your Workflow with AI</h1>
          <p>
            Smarter, faster, better. Unlock the power of AI to supercharge your
            workflow. From ideas to results, let AI help you achieve more in less
            time.
          </p>
          <div className="buttons">
            <button className="btn-primary">Start Using Smarter AI</button>
            <button className="btn-secondary">Download Free Guide</button>
          </div>
        </div>
      </div>

      {/* Right Section with dark background */}
      <div className="banner-right">
        <p>
          The AI Workflow Supercharger project is a web-based solution designed
          to help individuals and teams maximize productivity using AI-powered
          tools. This case study outlines the project’s goals, design approach,
          features, and outcomes.
        </p>
      </div>
    </section>
  );
};

export default CaseBanner;
