import React from "react";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={`text-center py-5 ${styles.cta}`}>
      <h2>Ready to Transform Your Business?</h2>
      <p>Let's create something amazing together.</p>
      <button className="btn btn-outline-light btn-lg mt-3">Contact Us</button>
    </section>
  );
}