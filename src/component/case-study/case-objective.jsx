import React from "react";
import "./case-objectives.css";
import objectiveImg from "./../../assets/technologies/it-support-matters-img.jpg"; // Replace with your image path
// it-support-matters-img.jpg
const CaseObjective = () => {
  return (
    <section className="case-objective">
      <div className="objective-content">
        <h2>Project Objectives</h2>
        <ul>
          <li>Simplify AI adoption for professionals, creators, students, and teams.</li>
          <li>Showcase the practical benefits of AI through real-world use cases.</li>
          <li>Build a modern, responsive, and visually engaging portfolio project.</li>
          <li>Drive user engagement with clear calls-to-action (CTAs).</li>
        </ul>
      </div>
      <div className="objective-image">
        <img src={objectiveImg} alt="Project Objectives" />
      </div>
    </section>
  );
};

export default CaseObjective;
