import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Laravel Ecosystem": ["Laravel", "Livewire", "Lumen", "Nova", "Forge"],
  "Frontend": ["Vue.js", "React", "Inertia.js", "Tailwind CSS", "Alpine.js"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
  "DevOps": ["Laravel Forge", "Envoyer", "Docker", "AWS", "DigitalOcean"]
};

const techLogos = {
  // Laravel Ecosystem
  Laravel: "https://icon.icepanel.io/Technology/svg/Laravel.svg",
  Livewire: "https://laravel-livewire.com/img/twitter.png",
  Lumen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lumen_Technologies_logo.svg/230px-Lumen_Technologies_logo.svg.png?20210810023542",
  Nova: "data:image/png;base64,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",
  Forge: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAYFBMVEX///8At5uR39OW4dXh9vPX8+8XvaQhwKcLup/0+/r4/fz8/v3u+via4tdt1cWl5dt42MpGyrY1xa/F7uguw62+7OXm9/Wt595c0L9Wz7zC7eeH3c9CybTT8u2i5NrO8evWiTgoAAADKElEQVR4nO2ca5LaQAyEbfBjMNhgMBiDF+5/y7hS+ZHKEolhNCOl0t8JurbamtaDzTIAAAAAAAAAAAAAAAAAAAAAAPiY8rFKyLiR0Hyu85S4UUDzbk6qOc9bAdE3l1ZzXQqIvqfVnK8FNDd9Ws39TkB0mfYzrE4CmrMxqeb8LqE565Jqni8SmnfHlJpFanSWPZMWvG4rInqVUvMgUaIXrgk1u4eM5qTf4VUkKi2UU53K1fVTSPPyIhan/f06J5AuU6J/Y7NIP/RRH0eR9/s7TTl2Q6y/eHWOovknl3GKI/sgU6L/QnOLIftYxNS8sGnFzS30fpOIt42TVImmGCtRzYNIiubYci+lm1brt9nHNvQvTvTH6FZNGh1e7AZSdJ/Co94wzYH4kywCLdpFfN4CKMiiN4i0euLQc6ertrzXrElLS4zjIkC2YZVcnJeE/g6PcaJxKE/yGe+05b2GtnSCyPYJtKWFxhfCXMhHvLeYO5Y8TVbpg7a815DbAaNveDNRoutE6dgTOnhMUfvqjxlJSxsVfaA059WjoFBqDzbMOtTVFP2XiuivsFZcpyI+gjQriQ4ctO81NAcuvHSSCTPy4JhVygcdS1lULL0NXHiphG06lrKInHN4Q8dSFp2wHXi0ojIwCzxaSTHy/w4dS1l0wjYdS1l0cisdS1lULM3FUgad/jEwltYqM+DAWKpj6cBYutLQHBhLpe59/OBiqasoZp0xDhNLp3NJodOIM7G0N7kfYmKp1LWXLHQsrXQmGhz0aaFO98dCW9rmXJqxtM1VC2Npm6sWOpbaXLUUtDtsWpquHTrdHwfzhza5ammYVGrS0i0T8CxeAHGXeAa3h03L9Yb2LH3p2GmHtUXcbv9Gk2XK0ttiPb8xVDJk6U25v743u7Nx1NYUt7ab3x7NmDhqO3v+VERloPEHJ8+BrktyAM3gO0gaDBy1eQ+SLFjae79p4U7T9wd9zsCd5pa8UXqBhTtN72WQhTtN72WQhXmY7zLIwjzMexlkYR5G3xm/4F+0tIlYWvodR7iDiT68bD3+Xcv6ZkIzAAAAAAAAAAAAAAAAAAAAAOA/5Qd2tC+A0J/A9wAAAABJRU5ErkJggg==",
  
  // Frontend
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Inertia.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Alpine.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg",
  
  // Databases
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  
  // DevOps
  "Laravel Forge": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAYFBMVEX///8At5uR39OW4dXh9vPX8+8XvaQhwKcLup/0+/r4/fz8/v3u+via4tdt1cWl5dt42MpGyrY1xa/F7uguw62+7OXm9/Wt595c0L9Wz7zC7eeH3c9CybTT8u2i5NrO8evWiTgoAAADKElEQVR4nO2ca5LaQAyEbfBjMNhgMBiDF+5/y7hS+ZHKEolhNCOl0t8JurbamtaDzTIAAAAAAAAAAAAAAAAAAAAAAPiY8rFKyLiR0Hyu85S4UUDzbk6qOc9bAdE3l1ZzXQqIvqfVnK8FNDd9Ws39TkB0mfYzrE4CmrMxqeb8LqE565Jqni8SmnfHlJpFanSWPZMWvG4rInqVUvMgUaIXrgk1u4eM5qTf4VUkKi2UU53K1fVTSPPyIhan/f06J5AuU6J/Y7NIP/RRH0eR9/s7TTl2Q6y/eHWOovknl3GKI/sgU6L/QnOLIftYxNS8sGnFzS30fpOIt42TVImmGCtRzYNIiubYci+lm1brt9nHNvQvTvTH6FZNGh1e7AZSdJ/Co94wzYH4kywCLdpFfN4CKMiiN4i0euLQc6ertrzXrElLS4zjIkC2YZVcnJeE/g6PcaJxKE/yGe+05b2GtnSCyPYJtKWFxhfCXMhHvLeYO5Y8TVbpg7a815DbAaNveDNRoutE6dgTOnhMUfvqjxlJSxsVfaA059WjoFBqDzbMOtTVFP2XiuivsFZcpyI+gjQriQ4ctO81NAcuvHSSCTPy4JhVygcdS1lULL0NXHiphG06lrKInHN4Q8dSFp2wHXi0ojIwCzxaSTHy/w4dS1l0wjYdS1l0cisdS1lULM3FUgad/jEwltYqM+DAWKpj6cBYutLQHBhLpe59/OBiqasoZp0xDhNLp3NJodOIM7G0N7kfYmKp1LWXLHQsrXQmGhz0aaFO98dCW9rmXJqxtM1VC2Npm6sWOpbaXLUUtDtsWpquHTrdHwfzhza5ammYVGrS0i0T8CxeAHGXeAa3h03L9Yb2LH3p2GmHtUXcbv9Gk2XK0ttiPb8xVDJk6U25v743u7Nx1NYUt7ab3x7NmDhqO3v+VERloPEHJ8+BrktyAM3gO0gaDBy1eQ+SLFjae79p4U7T9wd9zsCd5pa8UXqBhTtN72WQhTtN72WQhXmY7zLIwjzMexlkYR5G3xm/4F+0tIlYWvodR7iDiT68bD3+Xcv6ZkIzAAAAAAAAAAAAAAAAAAAAAOA/5Qd2tC+A0J/A9wAAAABJRU5ErkJggg==",
  "Envoyer": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/envoy/envoy-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "DigitalOcean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
};

const TechnologiesToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Laravel Ecosystem & Technologies</h2>

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
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50"; // Fallback image
                }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesToolsSection;