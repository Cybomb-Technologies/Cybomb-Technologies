import React, { useState, useEffect, useRef } from "react";
import styles from "./techtools.module.css";

const techItems = [
  { 
    name: "Unreal Engine 5", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" 
  },
  { 
    name: "C++ Programming", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
  },
  { 
    name: "Blueprint Visual Scripting", 
    logo: "https://files.koenig.kodeco.com/uploads/2023/11/unreal_engine_5_blueprints_featured_banner@1.5x.png" 
  },
  { 
    name: "Niagara VFX", 
    logo: "https://cdn-icons-png.flaticon.com/512/4228/4228736.png" 
  },
  { 
    name: "MetaHuman Creator", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeoSIJx-cqfqm2GIEue-__sEcXrqrRaSEQdA0-4Pl6RZlxKyOavqIEUziy1YmAhKczW0&usqp=CAU" 
  },
  { 
    name: "Chaos Physics", 
    logo: "https://cdn-icons-png.flaticon.com/512/3606/3606240.png" 
  },
  { 
    name: "Quixel Megascans", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStL0xJhtZJGRduZJqxXaH-LYc_O_TyxcP9q259iaqct-3zYRZxmuvq5pLgKBvPVj7vsyU&usqp=CAU" 
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