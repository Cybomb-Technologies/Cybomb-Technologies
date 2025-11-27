import React from "react";
import { FaUserTie, FaUsers, FaGraduationCap, FaPenFancy } from "react-icons/fa";
import styles from "./case-audience.module.css";

const audienceData = [
  {
    icon: <FaUserTie />,
    title: "Professionals",
    description: ["Automating emails,", "drafting proposals,", "analyzing data."],
  },
  {
    icon: <FaUsers />,
    title: "Teams",
    description: ["Generating meeting notes,", "sharing project updates,", "team collaboration."],
    darkText: true, // 2nd card → Black
  },
  {
    icon: <FaGraduationCap />,
    title: "Students",
    description: ["Study assistance,", "flashcards,", "research help."],
  },
  {
    icon: <FaPenFancy />,
    title: "Content Creators",
    description: ["Blog ideas,", "video concepts,", "script writing."],
    darkText: true, // 4th card → Black
  }
];

const CaseAudience = () => {
  return (
    <div className={styles.audienceSection}>
      <h2 className={styles.heading}>Target Audience</h2>
      <div className={styles.cardsContainer}>
        {audienceData.map((audience, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${audience.darkText ? styles.darkCard : ""}`}
          >
            <div className={styles.iconTitle}>
              {/* Apply darkIcon here */}
              {React.cloneElement(audience.icon, {
                className: `${styles.icon} ${audience.darkText ? styles.darkIcon : ""}`
              })}
              <h3 className={`${styles.title} ${audience.darkText ? styles.darkTitle : ""}`}>
                {audience.title}
              </h3>
            </div>
            <p className={`${styles.description} ${audience.darkText ? styles.darkDescription : ""}`}>
              {audience.description.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseAudience;
