import "./usa-home-industries.css";

function HomeIndustries() {
  const industries = [
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare & MedTech",
      description:
        "HIPAA-compliant solutions, telemedicine platforms, EHR systems, and healthcare analytics.",
      features: [
        "HIPAA Compliance",
        "Patient Portals",
        "Medical IoT",
        "Health Analytics",
      ],
    },
    {
      icon: "bi bi-cash-coin",
      title: "Finance & FinTech",
      description:
        "Secure banking solutions, payment gateways, financial dashboards, and blockchain applications.",
      features: [
        "PCI DSS Compliance",
        "Real-time Analytics",
        "Fraud Detection",
        "Mobile Banking",
      ],
    },
    {
      icon: "bi bi-cart",
      title: "E-commerce & Retail",
      description:
        "Scalable online stores, inventory management, CRM integration, and personalized shopping experiences.",
      features: [
        "Multi-channel",
        "Inventory Management",
        "AI Recommendations",
        "Payment Integration",
      ],
    },
    {
      icon: "bi bi-truck",
      title: "Logistics & Supply Chain",
      description:
        "Real-time tracking systems, warehouse management, route optimization, and supply chain analytics.",
      features: [
        "Real-time Tracking",
        "Route Optimization",
        "Inventory API",
        "Fleet Management",
      ],
    },
    {
      icon: "bi bi-mortarboard",
      title: "Education & EdTech",
      description:
        "LMS platforms, virtual classrooms, student management systems, and interactive learning tools.",
      features: [
        "LMS Integration",
        "Virtual Classroom",
        "Progress Tracking",
        "Content Management",
      ],
    },
    {
      icon: "bi bi-house-gear",
      title: "Real Estate & PropTech",
      description:
        "Property management systems, virtual tours, CRM solutions, and real estate analytics platforms.",
      features: [
        "Virtual Tours",
        "Property CRM",
        "Market Analytics",
        "Booking Systems",
      ],
    },
  ];

  return (
    <section className="industries-section" style={{ padding: "80px 0px" }}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="industries-title fw-bold mb-3">Industries We Serve</h2>
          <p className="industries-subtitle fs-5">
            Tailored digital solutions for diverse industry challenges across
            the US market
          </p>
        </div>

        {/* Industries Grid */}
        <div className="row g-4">
          {industries.map((industry, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 industries-card border-0 shadow-sm">
                <div className="card-body p-4">
                  {/* Icon */}
                  <div className="industries-icon mb-3">
                    <i className={industry.icon}></i>
                  </div>

                  {/* Title & Description */}
                  <h4 className="industries-card-title mb-3">
                    {industry.title}
                  </h4>
                  <p className="industries-card-text mb-4">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="industries-features">
                    {industry.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="industries-feature-badge"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="industries-cta rounded-4">
                <h3 className="fw-bold mb-3 text-white">
                  Don't See Your Industry?
                </h3>
                <p className="mb-4 text-white">
                  We adapt our expertise to meet unique business challenges
                  across all sectors.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <a
                    href="#start-project"
                    className="btn btn-light px-4 fw-semibold text-primary py-2"
                  >
                    Discuss Your Project
                  </a>
                  <a
                    href="/portfolio"
                    className="btn btn-outline-light px-4 fw-semibold py-2"
                  >
                    Explore Our Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIndustries;
