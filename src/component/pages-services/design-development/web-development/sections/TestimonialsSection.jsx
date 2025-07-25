import React from "react";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section className={`container py-5 ${styles.testimonials}`}>
      <h4 className="text-center mb-4">What Our Clients Say</h4>
      <div className="row">
        <div className="col-md-6">
          <blockquote className="blockquote">
            <p>CYBOMB helped us scale our digital presence immensely.</p>
            <footer className="blockquote-footer">Tech Founder, Startup X</footer>
          </blockquote>
        </div>
        <div className="col-md-6">
          <blockquote className="blockquote">
            <p>Their team is fast, professional, and deeply creative.</p>
            <footer className="blockquote-footer">Marketing Lead, BrandY</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}