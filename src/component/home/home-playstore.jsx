import React, { useEffect, useState } from "react";
import styles from "./home-playstore.module.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function HomePlaystore() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApps();
  }, []);

  async function fetchApps() {
    try {
      const res = await fetch(`${API_BASE_URL}/api/apps`);
      const data = await res.json();
      setApps(data);
    } catch (err) {
      console.error("Error loading apps:", err);
    } finally {
      setLoading(false);
    }
  }

  const installApp = (url, e) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.page} style={{paddingTop:"50px", paddingBottom:"50px"}}>
      <div className={styles.headingBox}>
        <h1 className={styles.mainTitle} style={{color:"#22c55e", fontSize:"37px"}}>Our Mobile Apps</h1>
        <p className={styles.subText}>Download and explore our apps instantly</p>
      </div>

      {loading && (
        <div className={styles.loadingBox}>
          <div className={styles.loader}></div>
          <p>Loading apps...</p>
        </div>
      )}

      {!loading && apps.length === 0 && (
        <div className={styles.emptyBox}>No Apps Available</div>
      )}

      <div className={styles.grid}>
        {apps.map((app) => (
          <div key={app._id} className={styles.card}>
            <img
              src={app.imageUrl || "/assets/playstore-badge.png"}
              alt={app.name}
              className={styles.icon}
            />

            <h3 className={styles.appName}>{app.name}</h3>

            <button
              className={styles.installBtn}
              onClick={(e) => installApp(app.appUrl, e)}
            >
              Install
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePlaystore;
