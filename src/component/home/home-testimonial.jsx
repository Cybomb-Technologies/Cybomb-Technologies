import "./home-testimonial.css";
import { useState } from "react";

const testimonialsData = [
  {
    name: "Charlie McMann",
    role: "Data Director, DataSense Corp.",
    image: "images/testimonial-1.jpg",
    rating: 5,
    feedback:
      "The AI analytics dashboard Cybomb created for us has transformed how we process and visualize complex data sets. Their team's expertise in machine learning and data visualization is outstanding. The solution they delivered gives us competitive advantages we never thought possible.",
  },
  {
    name: "Emily Johnson",
    role: "CTO, InnovateX",
   image: "images/testimonial-2.jpg",
    rating: 5,
    feedback:
      "Cybomb Technologies delivered an exceptional mobile health platform that exceeded our expectations. Their agile approach and dedicated project management made the entire process seamless. The AI integration features they developed have revolutionized how our patients interact with healthcare data.",
  },
  {
    name: "Ravi Kumar",
    role: "Founder, TechSprout",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    feedback:
      "Working with Cybomb was a game-changer for our e-commerce platform. They built a scalable SaaS solution that handles millions of transactions seamlessly. Their post-launch support and technology-agnostic approach helped us scale faster than we ever imagined possible.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="text-black text-center testimonial-section"
      style={{ padding: "60px 0px"}}
    >
      <div className="container" data-aos="zoom-out-up">
        <h2 className="fw-bold mb-2 text-primary">
          <span role="img" aria-label="testimonial">
            💬
          </span>{" "}
          Client Testimonials
        </h2>
        <p className="text-black mb-5">
          Hear what our clients say about working with us
        </p>

        <div className="testimonial-card p-4 rounded-4 mx-auto mb-4">
          <div className="d-flex align-items-start gap-3 text-start">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle border border-3"
              width="60"
              height="60"
            />
            <div>
              <p className="small mb-2 fs-5 text-white">“{testimonial.feedback}”</p>
              <div className="mb-1 text-warning">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <i key={i} className="bi bi-star-fill me-1"></i>
                  ))}
              </div>
              <h6 className="mb-0">{testimonial.name}</h6>
              <p className="small text-secondary mb-0">{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3">
          <button
            className="btn btn-primary rounded-circle"
            onClick={handlePrev}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            className="btn btn-primary rounded-circle"
            onClick={handleNext}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-3">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
