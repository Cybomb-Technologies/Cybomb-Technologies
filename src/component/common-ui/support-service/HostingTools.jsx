import React from "react";
import styles from "./HostingTools.module.css";

function HostingTools({ tools }) {
  return (
    <section className={styles.hostingSection}>
     <div className="container">
         <h2 className={styles.title}>Popular Hosting Platforms</h2>
         <div className={styles.grid}>
           {tools.map((tool, index) => (
             <div key={index} className={styles.card}>
               {/* <div className={styles.icon}>{tool.icon}</div> */}
               <img src={tool.icon} style={{width:"50px",height:"50px"}}
   alt="logo image" />
               <h3 className={styles.cardTitle}>{tool.name}</h3>
               <p className={styles.description}>{tool.description}</p>
             </div>
           ))}
         </div>
     </div>
    </section>
  );
}

export default HostingTools;
