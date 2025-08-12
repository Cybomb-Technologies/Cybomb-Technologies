import React, { useState, useEffect } from "react";
import styles from "./career-content.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "What I love most is the trust and autonomy we're given to solve problems creatively. The leadership truly values our input.",
      author: "Alex Chen",
      role: "Senior Frontend Developer",
      tenure: "2 years at company"
    },
    {
      quote: "The learning opportunities here are unmatched. In just one year, I've grown more than in my previous three years combined.",
      author: "Priya Patel",
      role: "UX Designer",
      tenure: "1 year at company"
    },
    {
      quote: "The work-life balance is real. I can be productive at work while still having time for my family and personal projects.",
      author: "Jamal Williams",
      role: "Backend Engineer",
      tenure: "3 years at company"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Optional: auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="my-5 py-4">
      <h3 className={`mb-5 text-center ${styles.sectionTitle}`}>
        Team Member Stories
      </h3>
      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.testimonialBox} ${activeIndex === index ? styles.active : ""}`}
            data-testimonial={index}
          >
            <p className={styles.testimonialQuote}>
              "{testimonial.quote}"
            </p>
            <div className={styles.testimonialAuthor}>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
              <small>{testimonial.tenure}</small>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.testimonialControls}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${styles.testimonialDot} ${activeIndex === index ? styles.active : ""}`}
            data-target={index}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
