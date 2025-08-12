import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const RailsTechnologiesTools = () => {
  const techData = {
    "Rails Ecosystem": ["Ruby", "Rails", "RSpec", "Sidekiq", "RuboCop"],
    "Frontend": ["Hotwire", "Stimulus", "React", "Vue.js", "Tailwind CSS"],
    "Databases": ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "SQLite"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "Heroku", "CI/CD"]
  };

  const techLogos = {
    // Rails Ecosystem
    Ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    Rails: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    RSpec: "https://rspec.info/images/logo.png",
    Sidekiq: "https://www.svgrepo.com/show/354344/sidekiq-icon.svg",
    RuboCop: "https://images.seeklogo.com/logo-png/27/1/rubocop-logo-png_seeklogo-273867.png",
    
    // Frontend
    Hotwire: "data:image/webp;base64,UklGRlYBAABXRUJQVlA4WAoAAAAQAAAAGwAAGwAAQUxQSJMAAAARcBTZVh3dLQawgAgUYAINT8EzwX52UYEEdGQbC3c+L+FWjYGImAD8ZUm6NDvU6cUO9SA7xINkh9ZJ0iB1/jqUxtAhNMaX9VbyM+OuPRnr3KjYLvW8yRBOhmfCfr4YLggr4wNCZ+wQTsYN++lkXLDfeOutlrTVzQOSs+4AOILLoJwkOSukk6QnaBdXg3qNDHnBfwIAVlA4IJwAAAAQBgCdASocABwAPjEMjEYiEREMACADBLEATplCQWRv1hIANsBuJd4A3kO/AAQNfiHlt2+FHq1qi4AA/m/d/Npz+158+IEhPs5/xbAdK+b3AdaAKQ2ynx+RQHftg25HIF4tTT4moa44wBY4YF/zQSO5zzAqV3v9Dvl/lzeQ/VkEA9wq4m6BPkvb9XqVL59S0zG4qaAlH5uoQVf3uAA=",
    Stimulus: "data:image/png;base64,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",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    
    // Databases
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    Elasticsearch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    
    // DevOps
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Heroku: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Rails Ecosystem & Technologies</h2>

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

        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50";
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

export default RailsTechnologiesTools;