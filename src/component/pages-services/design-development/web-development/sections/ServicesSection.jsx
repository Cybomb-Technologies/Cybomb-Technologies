import React from "react";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className="container text-center">
        <h2 className={styles.title}>Our Website Development Services</h2>

        <div className={`row g-4 mt-4 ${styles.cardGrid}`}>
          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Custom Website Design</h5>
              <p>
                Unique layouts, illustrations, and interactive elements that match your brand identity
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Responsive Web Development</h5>
              <p>
                Optimized for all devices—phones, tablets, laptops, and desktops
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Landing Pages & Marketing Sites</h5>
              <p>
                Perfect for promotions, product launches, or lead generation with high conversions
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Business & Portfolio Websites</h5>
              <p>
                Showcase your company, services, projects, and team with clean, professional design
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>eCommerce Website Development</h5>
              <p>
                Online stores with shopping carts, secure payments, inventory systems, and more
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Content Management Systems (CMS)</h5>
              <p>
                Build websites you can update yourself using WordPress, Webflow, or custom CMS
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Blog/News/Community Platforms</h5>
              <p>
                Set up blogs or community-driven platforms with user interaction, comments, and moderation
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className={styles.card}>
              <h5>Website Redesign & Optimization</h5>
              <p>
                Refresh old websites with a modern look, better performance, and improved usability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}