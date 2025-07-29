import React, { useState } from "react";
import styles from "./game-dev-technologies-section.module.css";
//import styles from "../../../../../../common-ui/page-development-technologies.module.css";


const techData = {
  "Game Engines": ["Unity", "Unreal Engine", "Phaser.js", "Godot", "Cocos2d"],
  Platforms: ["Android", "iOS", "WebGL", "PC", "Console (indie)"],
  Languages: ["C#", "JavaScript", "TypeScript", "Dart", "C++"],
  Multiplayer: ["Photon", "Mirror", "Firebase", "WebSockets"],
  "AR/VR": ["ARCore", "ARKit", "Unity XR"],
  "Design Tools": ["Blender", "Figma", "Spine", "Photoshop", "Illustrator"],
};

const techLogos = {
  Unity: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "Unreal Engine": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
  "Phaser.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Godot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
  Cocos2d: "https://www.pgconnects.com/hong-kong/wp-content/uploads/sites/10/2019/06/logo-Cocos2D-300x.png",

  Android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  WebGL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2560px-WebGL_Logo.svg.png",
  PC: "https://cdn-icons-png.flaticon.com/512/2230/2230758.png",
  "Console (indie)": "https://cdn-icons-png.flaticon.com/512/849/849748.png",

  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",

  Photon: "https://cdn.startbase.com/images/company/photon-engine/6c0db653d1/?webp=1&w=154",
  Mirror: "https://avatars.githubusercontent.com/u/65781588?v=4",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  WebSockets: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/1200px-WebSocket_colored_logo.svg.png",

  ARCore: "https://images.seeklogo.com/logo-png/37/1/google-arcore-logo-png_seeklogo-379573.png",
  ARKit: "https://vrarwiki.com/images/2/21/ARKit.png",
  "Unity XR": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",

  Blender: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Spine: "https://esotericsoftware.com/files/branding/spine_logo_dark.png",
  Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  Illustrator: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
};

const GameTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Game Development Technologies</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameTechnologiesSection;
