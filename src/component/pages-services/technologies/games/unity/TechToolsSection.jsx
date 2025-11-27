import React, { useState, useEffect, useRef } from "react";
import styles from "./techtools.module.css";

const techItems = [
  { 
    name: "Unity 2D/3D", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" 
  },
  { 
    name: "C# Scripting", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" 
  },
  { 
    name: "Photon", 
    logo: "https://suitecorner.com/wp-content/uploads/2024/11/DB-Connects-icon.svg" 
  },
  { 
    name: "ARKit", 
    logo: "https://cdn1.iconfinder.com/data/icons/application-file-formats/128/usdz-circle-512.png" 
  },
   { 
    name: "ARCore", 
    logo: "https://cdn.worldvectorlogo.com/logos/google-arcore.svg" 
  },
  { 
    name: "Oculus SDK", 
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-oculus-logo-icon-svg-png-download-3032208.png" 
  },
  { 
    name: "Unity Asset Store", 
    logo: "https://cdn.worldvectorlogo.com/logos/unity-69.svg" 
  }
];

const TechToolsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Clone items to create seamless infinite scroll
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools</h2>

        {/* Running Slider Container */}
        <div 
          className={styles.sliderContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className={`${styles.sliderTrack} ${isPaused ? styles.paused : ""}`}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className={styles.techCard}>
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className={styles.logo}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;