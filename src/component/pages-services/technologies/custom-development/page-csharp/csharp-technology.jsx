import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const CSharpTechnologies = () => {
  const techData = {
    "Frameworks": [".NET Framework", ".NET Core", "ASP.NET MVC", "Blazor", "Mono"],
    "Desktop Development": ["WPF", "WinForms", "UWP", "MAUI", "Xamarin"],
    "Data Access": ["Entity Framework", "Dapper", "LINQ", "ADO.NET", "NHibernate"],
    "Testing": ["xUnit", "NUnit", "MSTest", "SpecFlow", "FluentAssertions"]
  };

  const techLogos = {
    ".NET Framework": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
    ".NET Core": "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    "ASP.NET MVC": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Asp.net.svg",
    "Blazor": "https://blazor.net/assets/images/logo.png",
    "Mono": "https://upload.wikimedia.org/wikipedia/en/8/85/Mono_project_logo_new.png",
    "WPF": "https://upload.wikimedia.org/wikipedia/commons/0/0e/WPF_Logo.png",
    "WinForms": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Windows_logo_-_2012.svg",
    "UWP": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Windows_logo_-_2012.svg",
    "MAUI": "https://learn.microsoft.com/en-us/windows/images/maui-logo.svg",
    "Xamarin": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Xamarin-logo.svg",
    "Entity Framework": "https://learn.microsoft.com/en-us/ef/core/media/ef-logo.svg",
    "Dapper": "https://avatars.githubusercontent.com/u/5117243?s=200&v=4",
    "LINQ": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Windows_logo_-_2012.svg",
    "ADO.NET": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Windows_logo_-_2012.svg",
    "NHibernate": "https://nhibernate.info/img/nh_logo.png",
    "xUnit": "https://xunit.net/images/dotnet-foundation.svg",
    "NUnit": "https://nunit.org/img/nunit.png",
    "MSTest": "https://learn.microsoft.com/en-us/windows/images/mstest-logo.svg",
    "SpecFlow": "https://specflow.org/wp-content/uploads/2020/09/specflow-icon-64px.png",
    "FluentAssertions": "https://fluentassertions.com/images/logo.png"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>C# Technologies</h2>
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
                onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSharpTechnologies;
