import React, { useState } from "react";
import "./home-newsletter.css";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function Homenewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const res = await fetch(`${API_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email,
          source: "home-newsletter" // Different source to track where subscription came from
        }),
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setStatus("✅ Subscription successful!");
        setEmail("");
        setIsSubscribed(true);
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus(data.message || "❌ Failed to subscribe. Try again.");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  return (
    <section className="newsletter-section text-white py-5">
      <div className="container" data-aos="zoom-out-up">
        <h4 className="headline mb-3 text-center">
          <span className="badge px-4 py-2 rounded-pill mx-auto d-inline-block">
            Stay in the Loop
          </span>
        </h4>

        <p className="description mb-4 text-center">
          Get the latest updates on technology trends, project insights, and exclusive offers.
        </p>

        <form className="newsletter-form d-flex flex-column flex-md-row justify-content-center align-items-center gap-3" onSubmit={handleSubscribe}>
          <input
            type="email"
            className="form-control form-control-lg newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubscribed}
          />
          <button
            type="submit"
            className="btn btn-light btn-lg fw-semibold px-4 newsletter-btn"
            disabled={isSubscribed}
          >
            {isSubscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div className="text-center mt-3">
            <p className={`fw-semibold ${status.includes("✅") ? "text-success" : status.includes("❌") ? "text-danger" : "text-warning"}`}>
              {status}
            </p>
          </div>
        )}
          
        

        <div className="extra-info text-light mt-4">
          <div className="d-flex justify-content-center gap-4 flex-wrap mb-2">
            <span>
              <i className="bi bi-shield-lock-fill me-1"></i>
              Privacy Protected
            </span>
            <span>
              <i className="bi bi-exclamation-triangle-fill me-1"></i>
              No Spam
            </span>
          </div>
          <div className="text-center">
            <span>
              <i className="bi bi-arrow-repeat me-1"></i>
              Unsubscribe Anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homenewsletter;