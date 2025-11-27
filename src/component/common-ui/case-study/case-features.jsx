import React from "react";
import styles from "./case-features.module.css";
import { FaRobot, FaBolt, FaKeyboard, FaProjectDiagram, FaLightbulb, FaBullhorn } from "react-icons/fa";

export default function CaseFeatures() {
  const topCards = [
    {
      icon: <FaRobot className={styles.icon} />,
      title: "AI Agent Hacks",
      description: "Natural language prompts, contextual queries, and multi-purpose use.",
      topColor: "#ffffffff",
      bottomColor: "#00bfff",
      textColor: "#000"
    },
    {
      icon: <FaBolt className={styles.icon} />,
      title: "Productivity Power Moves",
      description: "Automating daily tasks, brainstorming ideas, report generation, voice commands.",
      topColor: "#fff",
      bottomColor: "#004080",
      textColor: "#000"
    },
    {
      icon: <FaKeyboard className={styles.icon} />,
      title: "Quick Commands",
      description: "Ready-to-use AI prompts for meetings, emails, planning, and translation.",
      topColor: "#fff",
      bottomColor: "#0077b6",
      textColor: "#000"
    }
  ];

  const bottomCards = [
    {
      icon: <FaProjectDiagram className={styles.icon} />,
      title: "Use Cases",
      description: "Practical applications across Creators, Students, Teams, and Professionals.",
      topColor: "#ffffff",
      bottomColor: "#0c1c2c",
      textColor: "#fff"
    },
    {
      icon: <FaLightbulb className={styles.icon} />,
      title: "Pro Tips",
      description: "Advanced strategies like integrations, saving templates, and multi-device access.",
      topColor: "#ffffff",
      bottomColor: "#0c7c9c",
      textColor: "#fff"
    },
    {
      icon: <FaBullhorn className={styles.icon} />,
      title: "Call-to-Action",
      description: "Strong CTAs with social proof (50,000+ users, 4.9/5 rating).",
      topColor: "#ffffff",
      bottomColor: "#0c1c2c",
      textColor: "#fff"
    }
  ];

  const renderCards = (cards) =>
    cards.map((card, index) => (
      <div key={index} className={styles.card}>
        <div className={styles.top} style={{ background: card.topColor }}>
          {card.icon}
          <h3 className={styles.title} style={{ color: card.textColor }}>{card.title}</h3>
        </div>
        <div className={styles.bottom} style={{ background: card.bottomColor }}>
          <p className={styles.rectangleContent}>{card.description}</p>
        </div>
      </div>
    ));

  return (
    <div>
      <div className={styles.cardsContainer}>{renderCards(topCards)}</div>
      <div className={styles.cardsContainer}>{renderCards(bottomCards)}</div>
    </div>
  );
}
